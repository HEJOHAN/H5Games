(function(_) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var ca, ea, ia, la, na, pa, ta, sa, ua, va, xa, ya, za, Ba, Ca, Ga, Ha, Ia, Ja, Ka, Ma, Va, bb, cb, jb, lb, mb, nb, ob, qb, ub, xb, Fb, Gb, Kb, Mb, Ob, Sb, Ub, Yb, ac, $b, bc, ec, Vb, fc, gc, hc, kc, lc, nc, pc, qc, sc, tc, wc, yc, zc, Bc, Cc, Gc, Ic, Kc, Lc, Nc, Tc, Uc, Wc, Xc, Yc, $c, ed, fd, gd, hd, cd, id, bd, ad, nd, od, pd, sd, td, wd, vd, yd, zd, Bd, Ed, Fd, Hd, Rd, Sd, Wd, Yd, Xd, ae, ce, be, ee, de, fe, he, Gd, me, ne, qe, Ce, re, te, ue, De, Ee, Ge, He, Ie, Le, Me, Ne, se, Oe, Pe, Qe, Se, Te, Ue, Ve, Ze, $e, af, Xe, hf, Ye, jf, xf, Af, Cf, Gf, Hf, If, Mf, Nf, Of, Qf, Rf, Sf, Tf, Uf, Xf, ag, cg, bg, gg, ig, jg, mg, Eg, Gg, Hg, Mg, Og, Qg, Sg, Tg, Wg, Xg, Yg, Zg, $g, bh, ch, eh, fh, hh, ih, jh, kh, lh, mh, ph, rh, vh, th, Kh, Lh, Mh, Ih, Jh, Nh, Oh, Yh, Wh, ai, ii, Ph, ri, Ci, Di, Hi, Ii, Oi, Qi, Ri, Ui, Xi, bj, mj, pj, rj, tj, uj, vj, wj, xj, yj, zj, Aj, Cj, Fj, Dj, Gj, Ej, Hj, Jj, Oj, Qj, Rj, Uj, Sj, Xj, Yj, Zj, dk, ek, kk, lk, xk, Dk, Bk, Ck, Ik, Mk, Ok, Pk, Qk, Sk, Wk, cl, Zk, Tk, kl, il, jl, ml, nl, ql, wl, zl, Al, M, Bl, Hl, Fl, Sl, N, Ul, Vl, Wl, Yl, $l, am, hm, im, km, lm, qm, xm, zm, Bm, Cm, Dm, Em, Fm, Im, Mm, Om, Qm, Pm, Wm, Xm, Ym, Zm, Rm, $m, Sm, cn, dn, hn, jn, rn, sn, tn, vn, zn, En, Gn, Hn, Jn, Kn, On, Pn, Qn, Un, Nn, Wn, Xn, Yn, $n, co, fo, go, ho, io, ko, lo, no, po, qo, oo, uo, vo, zo, Ao, Co, Mo, Oo, Qo, To, So, Ro, cp, fp, gp, hp, ip, kp, mp, np, op, qp, rp, tp, sp, vp, Ap, yp, Bp, Dp, Ep, Hp, Ip, Kp, Np, Mp, Pp, Qp, Rp, Tp, Up, Wp, Vp, Zp, aq, cq, eq, gq, jq, mq, nq, rq, uq, sq, tq, vq, wq, zq, Bq, Dq, Hq, Iq, Jq, Kq, Lq, Mq, Nq, Oq, Qq, Rq, Sq, Vq, er, Yq, ir, jr, kr, mr, or, rr, ur, Dr, sr, tr, wr, xr, qr, vr, Hr, Lr, Nr, Pr, Rr, Ur, Wr, oa, Xr, Yr, $r, Zr, as, bs, ds, fs, gs, is, ks, os, ls, ps, qs, ss, us, vs, xs, zs, As, Is, Js, Ks, Ls, Ms, Ss, Us, Ws, Xs, Ys, at, qt, tt, Ut, Vt, Ku, Nu, Vu, Ru, Su, Yu, bv, ev, gv, fv, uv, yv, zv, Av, Cv, Bv, Ev, Mv, Qv, Vv, Zv, $v, aw, bw, dw, ew, fw, gw, iw, jw, kw, rw, sw, tw, tb, vw, yw, ww, xw, zw, Aw;
    ca = function(a) {
        return function() {
            return _.ba[a].apply(this, arguments)
        }
    };
    ea = function(a, b) {
        b = _.da(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    _.fa = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ia = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    la = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.ja(e) ? "o" + _.ka(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    na = function(a, b) {
        a.sort(b || _.ma)
    };
    pa = function(a) {
        for (var b = oa, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || _.ma;
        na(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    ta = function(a, b) {
        if (!_.ra(a) || !_.ra(b) || a.length != b.length) return !1;
        for (var c = a.length, d = sa, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    _.ma = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    sa = function(a, b) {
        return a === b
    };
    ua = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    va = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = va.apply(null, ia(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    xa = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    ya = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    za = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Ba = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Aa.length; f++) c = Aa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Ca = function() {
        var a = _.t.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Ga = function(a) {
        return Da ? Ea ? Ea.brands.some(function(b) {
            return (b = b.brand) && _.Fa(b, a)
        }) : !1 : !1
    };
    Ha = function(a) {
        return _.Fa(Ca(), a)
    };
    Ia = function() {
        return Da ? !!Ea && 0 < Ea.brands.length : !1
    };
    Ja = function() {
        return Ha("Firefox") || Ha("FxiOS")
    };
    Ka = function() {
        return Ia() ? Ga("Chromium") : (Ha("Chrome") || Ha("CriOS")) && !(Ia() ? 0 : Ha("Edge")) || Ha("Silk")
    };
    Ma = function(a) {
        return new La(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    _.Sa = function(a) {
        var b = void 0 === b ? Na : b;
        a: if (b = void 0 === b ? Na : b, !(a instanceof _.Oa)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof La && d.kl(a)) {
                    a = Qa(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.Ra
    };
    Va = function(a) {
        for (var b = _.Ua.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return Qa(c.join(""))
    };
    _.Ya = function(a) {
        if (Xa.test(a)) return a
    };
    _.$a = function(a) {
        return a instanceof _.Oa ? _.Za(a) : _.Ya(a)
    };
    bb = function(a) {
        var b = new ab;
        b.Vi = a;
        return b
    };
    cb = function(a) {
        var b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            ge: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    };
    _.fb = function(a) {
        var b = _.Ua.apply(1, arguments);
        if (0 === b.length) return eb(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return eb(c)
    };
    _.hb = function(a, b) {
        a = cb(_.gb(a).toString());
        var c = a.ge,
            d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return eb(a.path + c + a.hash)
    };
    jb = function(a) {
        return a ? a.passive && ib() ? a : a.capture || !1 : !1
    };
    _.kb = function(a, b) {
        b = _.$a(b);
        void 0 !== b && (a.href = b)
    };
    lb = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    mb = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    nb = function(a, b) {
        if (b instanceof ab) b = b.Vi;
        else throw Error("");
        a.textContent = b;
        mb(a)
    };
    ob = function(a, b) {
        a.src = _.gb(b);
        mb(a)
    };
    qb = function(a) {
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
            ob(g, a);
            c && "complete" !== b.document.readyState ? _.pb(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    ub = function(a) {
        var b, c, d, e, f, g;
        return _.rb(function(h) {
            switch (h.g) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.g + ("&tv=" + a.A + "&st=") + a.xd, c = void 0, h.l = 2, h.yield(sb(b), 4);
                case 4:
                    c = h.A;
                    h.g = 3;
                    h.l = 0;
                    break;
                case 2:
                    tb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Vd || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.l ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.j,
                        Zj: c.bg_hash_basename,
                        Yj: c.bg_binary,
                        ql: a.g + "_" + a.A,
                        Vd: d,
                        xd: a.xd,
                        bf: e,
                        zf: f,
                        af: g
                    }) : h.return(void 0)
            }
        })
    };
    xb = function(a) {
        var b;
        _.rb(function(c) {
            if (1 == c.g) return c.yield(ub(a), 2);
            if (b = c.A) {
                var d = b,
                    e = "sodar2";
                e = void 0 === e ? "sodar2" : e;
                var f = window,
                    g = f.GoogleGcLKhOms;
                g && "function" === typeof g.push || (g = f.GoogleGcLKhOms = []);
                var h = {};
                g.push((h._ctx_ = d.context, h._bgv_ = d.Zj, h._bgp_ = d.Yj, h._li_ = d.ql, h._jk_ = d.Vd, h._st_ = d.xd, h._rc_ = d.bf, h._dl_ = d.zf, h._g2_ = d.af, h));
                if (d = f.GoogleDX5YKUSk) f.GoogleDX5YKUSk = void 0, d[1]();
                e = _.fb(wb, e);
                qb(e)
            }
            return c.return(b)
        })
    };
    Fb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (yb) {
            if (b && (zb ? !a.ll() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
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
    Kb = function(a) {
        if (!Hb) return Jb(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    };
    Mb = function(a) {
        return Lb[a] || ""
    };
    Ob = function(a) {
        return Nb && null != a && a instanceof Uint8Array
    };
    Sb = function(a) {
        if (a !== Pb) throw Error("illegal external caller");
    };
    Ub = function() {
        return "function" === typeof BigInt
    };
    Yb = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.y(Vb(c, a)), b = c.next().value, a = c.next().value, c = b);
        Wb = c >>> 0;
        Xb = a >>> 0
    };
    ac = function(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else Ub() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + $b(c) + $b(a));
        return c
    };
    $b = function(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    };
    bc = function() {
        var a = Wb,
            b = Xb;
        b & 2147483648 ? Ub() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = _.y(Vb(a, b)), a = b.next().value, b = b.next().value, a = "-" + ac(a, b)) : a = ac(a, b);
        return a
    };
    ec = function(a) {
        if (16 > a.length) Yb(Number(a));
        else if (Ub()) a = BigInt(a), Wb = Number(a & BigInt(4294967295)) >>> 0, Xb = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Xb = Wb = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Xb *= 1E6, Wb = 1E6 * Wb + d, 4294967296 <= Wb && (Xb += _.z(Math, "trunc").call(Math, Wb / 4294967296), Xb >>>= 0, Wb >>>= 0);
            b && (b = _.y(Vb(Wb, Xb)), a = b.next().value, b = b.next().value, Wb = a, Xb = b)
        }
    };
    Vb = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    fc = function(a) {
        return Array.prototype.slice.call(a)
    };
    gc = function(a) {
        return "function" === typeof _.u.Symbol && "symbol" === typeof(0, _.u.Symbol)() ? (0, _.u.Symbol)() : a
    };
    hc = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    kc = function(a) {
        ic(a, 34);
        return a
    };
    lc = function(a) {
        ic(a, 32);
        return a
    };
    nc = function(a, b) {
        mc(b, (a | 0) & -14591)
    };
    pc = function(a, b) {
        mc(b, (a | 34) & -14557)
    };
    qc = function(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    sc = function(a) {
        return !(!a || "object" !== typeof a || a.rl !== rc)
    };
    tc = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    wc = function(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new uc(a, Pb) : vc();
            else if (a.constructor !== uc)
            if (Ob(a)) a = a.length ? new uc(c ? a : new Uint8Array(a), Pb) : vc();
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
        mc(a, d | 1);
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
    Gc = function(a) {
        a = Error(a);
        Dc(a, "warning");
        Cc(a);
        return a
    };
    _.Hc = function(a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
        return a
    };
    Ic = function(a) {
        if (null == a || "number" === typeof a) return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    };
    Kc = function(a) {
        if ("boolean" !== typeof a) throw Error("Expected boolean but got " + Jc(a) + ": " + a);
        return a
    };
    Lc = function(a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    };
    Nc = function(a) {
        var b = typeof a;
        return "number" === b ? _.z(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : Mc.test(a)
    };
    Tc = function(a) {
        if (!_.z(Number, "isFinite").call(Number, a)) throw Gc("enum");
        return a | 0
    };
    Uc = function(a) {
        return null == a ? a : Tc(a)
    };
    _.Vc = function(a) {
        return null == a ? a : _.z(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Wc = function(a) {
        if ("number" !== typeof a) throw Gc("int32");
        if (!_.z(Number, "isFinite").call(Number, a)) throw Gc("int32");
        return a | 0
    };
    Xc = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.z(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Yc = function(a) {
        if ("number" !== typeof a) throw Gc("uint32");
        if (!_.z(Number, "isFinite").call(Number, a)) throw Gc("uint32");
        return a >>> 0
    };
    _.Zc = function(a) {
        return null == a ? a : Yc(a)
    };
    $c = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.z(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    };
    _.dd = function(a, b) {
        b = !!b;
        if (!Nc(a)) throw Gc("int64");
        return "string" === typeof a ? ad(a) : b ? bd(a) : cd(a)
    };
    ed = function(a) {
        return null == a ? a : _.dd(a)
    };
    fd = function(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    };
    gd = function(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    };
    hd = function(a) {
        if (0 > a) {
            Yb(a);
            var b = ac(Wb, Xb);
            a = Number(b);
            return _.z(Number, "isSafeInteger").call(Number, a) ? a : b
        }
        if (fd(String(a))) return a;
        Yb(a);
        return 4294967296 * Xb + (Wb >>> 0)
    };
    cd = function(a) {
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
    id = function(a) {
        a = _.z(Math, "trunc").call(Math, a);
        return 0 <= a && _.z(Number, "isSafeInteger").call(Number, a) ? a : hd(a)
    };
    bd = function(a) {
        a = _.z(Math, "trunc").call(Math, a);
        if (_.z(Number, "isSafeInteger").call(Number, a)) a = String(a);
        else {
            var b = String(a);
            gd(b) ? a = b : (Yb(a), a = bc())
        }
        return a
    };
    ad = function(a) {
        var b = _.z(Math, "trunc").call(Math, Number(a));
        if (_.z(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        gd(a) || (ec(a), a = bc());
        return a
    };
    nd = function(a) {
        var b = _.z(Math, "trunc").call(Math, Number(a));
        if (_.z(Number, "isSafeInteger").call(Number, b) && 0 <= b) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        fd(a) || (ec(a), a = ac(Wb, Xb));
        return a
    };
    od = function(a) {
        if (null == a) return a;
        if (Nc(a)) {
            var b;
            "number" === typeof a ? b = cd(a) : b = ad(a);
            return b
        }
    };
    pd = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (null == a) return a;
        if (Nc(a)) return "string" === typeof a ? ad(a) : b ? bd(a) : cd(a)
    };
    _.qd = function(a) {
        if (null != a) {
            var b = !!b;
            if (!Nc(a)) throw Gc("uint64");
            "string" === typeof a ? a = nd(a) : b ? (a = _.z(Math, "trunc").call(Math, a), 0 <= a && _.z(Number, "isSafeInteger").call(Number, a) ? a = String(a) : (b = String(a), fd(b) ? a = b : (Yb(a), a = ac(Wb, Xb)))) : a = id(a)
        }
        return a
    };
    _.rd = function(a) {
        if ("string" !== typeof a) throw Error();
        return a
    };
    sd = function(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    };
    td = function(a) {
        return null == a || "string" === typeof a ? a : void 0
    };
    wd = function(a, b, c, d) {
        if (null != a && "object" === typeof a && a.Ag === ud) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? vd(b) : new b : void 0;
        var e = c = xc(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && mc(a, e);
        return new b(a)
    };
    vd = function(a) {
        var b = a[xd];
        if (b) return b;
        b = new a;
        kc(b.F);
        return a[xd] = b
    };
    yd = function(a, b, c) {
        if (b) return Kc(a);
        var d;
        return null != (d = Lc(a)) ? d : c ? !1 : void 0
    };
    zd = function(a, b, c) {
        if (b) return _.rd(a);
        var d;
        return null != (d = td(a)) ? d : c ? "" : void 0
    };
    Bd = function(a, b) {
        Ad = b;
        a = new a(b);
        Ad = void 0;
        return a
    };
    Ed = function(a) {
        switch (typeof a) {
            case "boolean":
                return Cd || (Cd = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? Dd || (Dd = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    };
    _.A = function(a, b, c) {
        null == a && (a = Ad);
        Ad = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error();
            d = xc(a);
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error();
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (tc(c[f])) {
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
        mc(a, d);
        return a
    };
    Fd = function(a) {
        return a
    };
    Hd = function(a, b, c, d, e, f) {
        a = wd(a, d, c, f);
        e && (a = Gd(a));
        return a
    };
    Rd = function(a) {
        return a
    };
    Sd = function(a) {
        return [a, this.get(a)]
    };
    Wd = function() {
        return Td || (Td = new Ud(kc([]), void 0, void 0, void 0, Vd))
    };
    Yd = function(a, b) {
        return Xd(b)
    };
    Xd = function(a) {
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
                        if (Ob(a)) return Kb(a);
                        if (a instanceof uc) return Zd(a);
                        if (a instanceof Ud) return $d(a)
                    }
        }
        return a
    };
    ae = function(a, b, c) {
        a = fc(a);
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
    ce = function(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = yc(a, void 0, 0) ? void 0 : e && xc(a) & 2 ? a : be(a, b, c, void 0 !== d, e);
            else if (tc(a)) {
                var f = {},
                    g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = ce(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    };
    be = function(a, b, c, d, e) {
        var f = d || c ? xc(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = fc(a);
        for (var g = 0; g < a.length; g++) a[g] = ce(a[g], b, c, d, e);
        c && c(f, a);
        return a
    };
    ee = function(a) {
        return ce(a, de, void 0, void 0, !1)
    };
    de = function(a) {
        return a.Ag === ud ? a.toJSON() : a instanceof Ud ? $d(a, ee) : Xd(a)
    };
    fe = function(a, b, c) {
        c = void 0 === c ? pc : c;
        if (null != a) {
            if (Nb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = xc(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? mc(a, (d | 34) & -12293) : be(a, fe, d & 4 ? pc : c, !0, !0)
            }
            a.Ag === ud ? (c = a.F, d = ge(c), a = d & 2 ? a : Bd(a.constructor, he(c, d, !0))) : a instanceof Ud && !(a.Id & 2) && (c = kc(ie(a, fe)), a = new Ud(c, a.Gf, a.Wd, a.qh));
            return a
        }
    };
    _.je = function(a) {
        var b = a.F;
        return Bd(a.constructor, he(b, ge(b), !1))
    };
    he = function(a, b, c) {
        var d = c || b & 2 ? pc : nc,
            e = !!(b & 32);
        a = ae(a, b, function(f) {
            return fe(f, e, d)
        });
        ic(a, 32 | (c ? 2 : 0));
        return a
    };
    Gd = function(a) {
        var b = a.F,
            c = ge(b);
        return c & 2 ? Bd(a.constructor, he(b, c, !1)) : a
    };
    _.ke = function(a) {
        var b = a.F,
            c = ge(b);
        return c & 2 ? a : Bd(a.constructor, he(b, c, !0))
    };
    me = function(a, b, c) {
        if (!(4 & b)) return !0;
        if (null == c) return !1;
        0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[le] = (a.constructor[le] | 0) + 1) && (a = Error(), Dc(a, "incident"), Ac ? Cc(a) : Gb(a));
        return 0 === c ? !1 : !(c & b)
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
            g !== b && mc(a, g);
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
        0 === h && g && !e ? (h |= 33, mc(f, h)) : h & 1 || (h |= 1, mc(f, h));
        if (e) h & 2 || kc(f), Object.freeze(f);
        else if (2 & h || 2048 & h) f = fc(f), e = 1, g && (e |= 32), mc(f, e), ne(a, b, c, f, d);
        return f
    };
    Ce = function(a, b, c, d, e, f, g) {
        var h = a.F,
            k = ge(h);
        d = 2 & k ? 1 : d;
        f = !!f;
        var l = re(h, k, b, e),
            m = xc(l);
        if (me(a, m, g)) {
            if (4 & m || Object.isFrozen(l)) l = fc(l), m = se(m, k, f), k = ne(h, k, b, l, e);
            for (var n = a = 0; a < l.length; a++) {
                var p = c(l[a]);
                null != p && (l[n++] = p)
            }
            n < a && (l.length = n);
            m = te(m, k, f);
            m = hc(m, 20, !0);
            m = hc(m, 4096, !1);
            m = hc(m, 8192, !1);
            g && (m = hc(m, g, !0));
            mc(l, m);
            2 & m && Object.freeze(l)
        }
        ue(m) || (g = m, (c = 1 === d) ? m = hc(m, 2, !0) : f || (m = hc(m, 32, !1)), m !== g && mc(l, m), c && Object.freeze(l));
        2 === d && ue(m) && (l = fc(l), m = se(m, k, f), mc(l, m), ne(h, k, b, l, e));
        return l
    };
    re = function(a, b, c, d) {
        a = oe(a, b, c, d);
        return Array.isArray(a) ? a : pe
    };
    te = function(a, b, c) {
        0 === a && (a = se(a, b, c));
        return a = hc(a, 1, !0)
    };
    ue = function(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    };
    De = function(a) {
        return wc(a, !0, !0)
    };
    Ee = function(a) {
        return wc(a, !0, !1)
    };
    Ge = function(a, b, c, d, e, f) {
        var g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (null == h) {
                if (k) {
                    a = Wd();
                    break a
                }
                h = []
            } else if (h.constructor === Ud) {
                if (0 == (h.Id & 2) || k) {
                    a = h;
                    break a
                }
                h = ie(h)
            } else Array.isArray(h) ? c = !!(xc(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Wd();
                    break a
                }
                c || (c = !0, kc(h))
            } else if (c) {
                c = !1;
                k = fc(h);
                for (h = 0; h < k.length; h++) {
                    var l = k[h] = fc(k[h]);
                    Array.isArray(l[1]) && (l[1] = kc(l[1]))
                }
                h = k
            }
            c || (xc(h) & 64 ? Fe(h, 32) : 32 & b && lc(h));f = new Ud(h, e, zd, f);ne(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !g && e && (a.fk = !0);
        return a
    };
    He = function(a, b, c) {
        a = a.F;
        var d = ge(a);
        return Ge(a, d, oe(a, d, b), b, void 0, c)
    };
    Ie = function(a, b, c) {
        a = a.F;
        var d = ge(a);
        return Ge(a, d, oe(a, d, b), b, c)
    };
    _.Je = function(a, b, c, d) {
        var e = a.F,
            f = ge(e);
        zc(f);
        if (null == c) return ne(e, f, b), a;
        var g = xc(c),
            h = g,
            k = !!(2 & g) || Object.isFrozen(c),
            l = !k && !1;
        if (me(a, g))
            for (g = 21, k && (c = fc(c), h = 0, g = se(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = fc(c), h = 0, g = se(g, f, !0));
        g !== h && mc(c, g);
        ne(e, f, b, c);
        return a
    };
    _.Ke = function(a, b, c, d) {
        var e = a.F,
            f = ge(e);
        zc(f);
        ne(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    };
    Le = function(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != oe(a, b, f) && (0 !== d && (b = ne(a, b, d)), d = f)
        }
        return d
    };
    Me = function(a, b, c, d) {
        a = a.F;
        var e = ge(a),
            f = oe(a, e, c, d);
        b = wd(f, b, !1, e);
        b !== f && null != b && ne(a, e, c, b, d);
        return b
    };
    Ne = function(a, b, c, d, e, f) {
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
            (r = !!(2 & l)) && (p = hc(p, 2, !0));
            for (var v = !r, w = !0, x = 0, B = 0; x < n.length; x++) {
                var C = wd(n[x], c, !1, p);
                if (C instanceof c) {
                    if (!r) {
                        var F = !!(xc(C.F) & 2);
                        v && (v = !F);
                        w && (w = F)
                    }
                    n[B++] = C
                }
            }
            B < x && (n.length = B);
            l = hc(l, 4, !0);
            l = hc(l, 16, w);
            l = hc(l, 8, v);
            mc(n, l);
            r && Object.freeze(n)
        }
        c = !!(8 & l) || k && !g.length;
        if (f && !c) {
            ue(l) && (g = fc(g), l = se(l, b, e), b = ne(a, b, d, g));
            f = g;
            c = l;
            for (n = 0; n < f.length; n++) l = f[n], p = Gd(l), l !== p && (f[n] = p);
            c = hc(c, 8, !0);
            c = hc(c, 16, !f.length);
            mc(f, c);
            l = c
        }
        ue(l) || (f = l, k ? l = hc(l, !g.length || 16 & l && (!m || 32 & l) ? 2 : 2048, !0) : e || (l = hc(l, 32, !1)), l !== f && mc(g, l), k && Object.freeze(g));
        h && ue(l) && (g = fc(g), l = se(l, b, e), mc(g, l), ne(a, b, d, g));
        return g
    };
    se = function(a, b, c) {
        a = hc(a, 2, !!(2 & b));
        a = hc(a, 32, !!(32 & b) && c);
        return a = hc(a, 2048, !1)
    };
    Oe = function(a, b, c, d) {
        a = a.F;
        var e = ge(a);
        zc(e);
        b = Ne(a, e, c, b, !0);
        c = null != d ? d : new c;
        b.push(c);
        xc(c.F) & 2 ? Fe(b, 8) : Fe(b, 16);
        return c
    };
    Pe = function(a) {
        return pd(a, !0)
    };
    Qe = function(a, b) {
        return null != a ? a : b
    };
    Se = function(a, b, c) {
        var d = Re ? void 0 : a.constructor.da;
        var e = ge(c ? a.F : b);
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
    Te = function(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        ic(b, 128);
        return Bd(a, lc(b))
    };
    Ue = function(a, b) {
        if (Array.isArray(b)) {
            var c = xc(b);
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                null != f && (b[e++] = f)
            }
            e < d && (b.length = e);
            mc(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    };
    Ve = function(a, b, c) {
        a[b] = c
    };
    Ze = function(a) {
        var b = a[We];
        if (!b) {
            var c = Xe(a);
            b = function(d, e) {
                return Ye(d, e, c)
            };
            a[We] = b
        }
        return b
    };
    $e = function(a) {
        return a.g
    };
    af = function(a, b) {
        var c, d, e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d || (d = Xe(b).g), c || (c = Ze(b)))
        }
    };
    Xe = function(a) {
        var b = a[bf];
        if (b) return b;
        b = a[bf] = {};
        var c = $e,
            d = af;
        var e = void 0 === e ? Ve : e;
        b.g = Ed(a[0]);
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.Jk = g, g = a[++f], "function" === typeof g && (b.l = g, b.A = a[++f], g = a[++f]));
        for (var h = {}; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; void 0 !== g;) {
            "number" === typeof g && (k += g, g = a[++f]);
            var l = void 0;
            if (g instanceof cf) var m = g;
            else m = df, f--;
            if (m.Fj) {
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
        ef in a && ff in a && bf in a && (a.length = 0);
        return b
    };
    hf = function(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Jk)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof cf ? c : [gf, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = Ze(c),
                        f = Xe(c).g;
                    c = (c = a.A) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    };
    Ye = function(a, b, c) {
        for (var d = ge(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var l = h - e,
                    m = hf(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (d = +n, _.z(Number, "isNaN").call(Number, d) || (e = a[n], null != e && (f = hf(c, d)) && f(b, e, d)))
        }
    };
    jf = function(a) {
        return new cf(a, !1)
    };
    xf = function(a, b, c) {
        a: if (null != b) {
            if (Nc(b)) {
                if ("string" === typeof b) {
                    b = ad(b);
                    break a
                }
                if ("number" === typeof b) {
                    b = cd(b);
                    break a
                }
            }
            b = void 0
        }null != b && ("string" === typeof b && kf(b), null != b && (vf(a.g, 8 * c), "number" === typeof b ? (a = a.g, Yb(b), wf(a, Wb, Xb)) : (c = kf(b), wf(a.g, c.A, c.g))))
    };
    Af = function(a, b, c, d, e) {
        b = b instanceof _.D ? b.F : Array.isArray(b) ? _.A(b, d[0], d[1]) : void 0;
        null != b && (c = yf(a, c), e(b, a), zf(a, c))
    };
    Cf = function(a) {
        var b = _.Bf();
        if (!a) throw Error(b && b() || String(a));
    };
    _.Bf = function() {
        var a = Df;
        Df = void 0;
        return a
    };
    Gf = function(a) {
        return function() {
            var b = new Ef;
            Ye(this.F, b, Xe(a));
            Ff(b, b.g.end());
            for (var c = new Uint8Array(b.A), d = b.l, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.l = [c];
            return c
        }
    };
    Hf = function(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Bd(a, lc(b))
            }
            return b
        }
    };
    If = function(a) {
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
        return _.Jf(Kf).A(a.g, a.defaultValue)
    };
    _.Lf = function(a) {
        return _.Jf(Kf).l(a.g, a.defaultValue)
    };
    Mf = function(a) {
        return _.Jf(Kf).j(a.g, a.defaultValue)
    };
    Nf = function(a) {
        return _.Jf(Kf).M(a.g, a.defaultValue)
    };
    Of = function(a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    Qf = function(a) {
        return Pf(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (_.H = b.toString(2), _.z(_.H, "padStart")).call(_.H, 8, "0")
        }).join("")
    };
    Rf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    };
    Sf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };
    Tf = function(a, b) {
        a = Qf(a);
        return a.length < b ? _.z(a, "padEnd").call(a, b, "0") : a
    };
    Uf = function(a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    _.Vf = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    };
    _.Wf = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    Xf = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    _.Yf = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(Xf("domLoading", a) || Infinity, Xf("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(Xf("responseEnd", a), Xf("navigationStart", a)) : b
    };
    ag = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.Zf("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && ea(a.google_image_requests, f);
                _.$f(f, "load", g);
                _.$f(f, "error", g)
            };
            _.pb(f, "load", g);
            _.pb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    cg = function(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.yd] = d.jd, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Ec
            }).map(c), b.toJSON(), a.filter(function(d) {
                return !d.Ec
            }).map(c)])
        } catch (d) {
            return bg(d, b), ""
        }
    };
    bg = function(a, b) {
        try {
            dg({
                m: _.eg(a instanceof Error ? a : Error(String(a))),
                b: _.fg(b, 1, 0) || null,
                v: _.I(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    };
    gg = function(a, b, c, d, e, f) {
        try {
            var g = a.g,
                h = _.Zf("SCRIPT", g);
            h.async = !0;
            ob(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function() {
                0 < c ? gg(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    };
    ig = function(a, b, c, d) {
        c = void 0 === c ? function() {} : c;
        d = void 0 === d ? function() {} : d;
        gg(hg(a), b, 0, !1, c, d)
    };
    jg = function(a) {
        return a[_.z(_.u.Symbol, "iterator")]()
    };
    mg = function(a) {
        var b = kg(lg(a.location.href));
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    };
    Eg = function(a) {
        var b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = kg(lg(a.location.href)).get("fctype")) && -1 !== b.indexOf(a) ? a : null
    };
    Gg = function(a) {
        var b = lg(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        _.z(Object, "assign").call(Object, a, c);
        if (a.port && ":" === a.port[0]) throw Error("port should not start with ':'");
        a.hash && "#" != a.hash[0] && (a.hash = "#" + a.hash);
        c.search ? "?" != c.search[0] && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + Fg(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol + "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = lg(b).toString();
        "/" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
        return 1E3 >= a.toString().length ? a : null
    };
    Hg = function(a) {
        a && "function" == typeof a.za && a.za()
    };
    Mg = function(a) {
        a = Ig(a.data.__fciReturn);
        return {
            payload: a,
            Rg: _.Lg(a, 1)
        }
    };
    Og = function() {
        var a = Ng;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    Qg = function() {
        var a = Pg;
        return function(b) {
            return b instanceof a
        }
    };
    Sg = function(a) {
        return function(b) {
            if (!Rg(b)) return !1;
            for (var c = _.y(_.z(Object, "entries").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
                var e = _.y(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!(d in b)) {
                    if (!0 === e.jo) continue;
                    return !1
                }
                if (!e(b[d])) return !1
            }
            return !0
        }
    };
    Tg = function() {
        return function(a) {
            return Array.isArray(a)
        }
    };
    Wg = function() {
        return function(a) {
            return Ug(a) ? a.every(function(b) {
                return Vg(b)
            }) : !1
        }
    };
    Xg = function(a) {
        return !!a && a.top === a
    };
    Yg = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Rg: b.__uspapiReturn.callId
        }
    };
    Zg = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Rg: b.__gppReturn.callId
        }
    };
    $g = function(a) {
        return !a || 1 === a.length && -1 === a[0]
    };
    bh = function(a, b) {
        b = void 0 === b ? window : b;
        if (ah(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    ch = function(a) {
        return "null" !== a.origin
    };
    eh = function(a, b, c) {
        b = ah(b) && ch(c) ? c.document.cookie : null;
        return null === b ? null : (new dh({
            cookie: b
        })).get(a) || ""
    };
    fh = function(a, b, c) {
        return b[a] || c
    };
    hh = function(a) {
        _.Jf(gh).l(a)
    };
    ih = function() {
        return _.Jf(gh).j()
    };
    jh = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.H = c.allowedFeatures(), _.z(_.H, "includes")).call(_.H, a))
    };
    kh = function(a, b, c) {
        return !!(a && "runAdAuction" in b && b.runAdAuction instanceof Function && jh("run-ad-auction", c))
    };
    lh = function(a, b) {
        return !!(a && "browsingTopics" in b && b.browsingTopics instanceof Function && jh("browsing-topics", b))
    };
    mh = function(a, b, c) {
        c = void 0 === c ? b.document : c;
        return !!(a && "sharedStorage" in b && b.sharedStorage && jh("shared-storage", c))
    };
    ph = function(a) {
        a = void 0 === a ? _.nh() : a;
        return function(b) {
            return _.oh(b + " + " + a) % 1E3
        }
    };
    rh = function(a) {
        _.Jf(qh).g(a)
    };
    vh = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.t : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        sh(_.Jf(gh), a);
        th(b);
        uh(_.Jf(qh), b);
        _.Jf(Kf).g()
    };
    th = function(a) {
        var b = _.Jf(Kf);
        b.A = function(c, d) {
            return fh(5, a, function() {
                return !1
            })(c, d, 2)
        };
        b.l = function(c, d) {
            return fh(6, a, function() {
                return 0
            })(c, d, 2)
        };
        b.j = function(c, d) {
            return fh(7, a, function() {
                return ""
            })(c, d, 2)
        };
        b.M = function(c, d) {
            return fh(8, a, function() {
                return []
            })(c, d, 2)
        };
        b.g = function() {
            fh(15, a, function() {})(2)
        }
    };
    Kh = function(a, b, c, d) {
        var e = new _.wh,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.$f(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (m) {}
            },
            h = Ih(a);
        return h ? (_.pb(a, "message", g), f = c(h), e.promise) : (c = Jh(a)) ? (f = String(Math.floor(2147483647 * _.nh())), _.pb(a, "message", g), b(c, f), e.promise) : null
    };
    Lh = function(a) {
        return Kh(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Mh = function(a) {
        return !!Ih(a) || !!Jh(a)
    };
    Ih = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    Jh = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    Nh = function(a) {
        var b, c;
        return null != (c = (_.H = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.z(_.H, "find")).call(_.H, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Oh = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(_.oh(a))) ? d : 0
    };
    Yh = function(a, b, c, d, e) {
        var f = e.getBidResponsesForAdUnitCode;
        if (f) {
            var g, h, k, l, m, n = null != (m = null == (g = f(null != (k = b.Wc) ? k : "")) ? void 0 : g.bids) ? m : null == (h = f(null != (l = b.adUnitCode) ? l : "")) ? void 0 : h.bids;
            if (null != n && n.length && (g = n.filter(function(v) {
                    var w = v.adId;
                    return v.auctionId !== c && _.z(Object, "values").call(Object, d).some(function(x) {
                        return _.z(x, "includes").call(x, w)
                    })
                }), g.length)) {
                var p, r;
                f = null == (p = e.adUnits) ? void 0 : null == (r = _.z(p, "find").call(p, function(v) {
                    v = v.code;
                    return v === b.Wc || v === b.adUnitCode
                })) ? void 0 : r.mediaTypes;
                p = _.y(g);
                for (r = p.next(); !r.done; r = p.next()) r = r.value, g = Ph(r, d, f), g = Qh(a, Rh(Sh(Th(Uh(new Vh, r.bidder), 1), 6, !0), g)), Wh(r.bidder, e, g), "number" === typeof r.timeToRespond && _.Xh(g, 2, Math.round(r.timeToRespond))
            }
        }
    };
    Wh = function(a, b, c) {
        for (var d = []; a && !_.z(d, "includes").call(d, a);) {
            d.unshift(a);
            var e = void 0,
                f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.Je(c, 10, d, _.rd)
    };
    ai = function(a, b, c) {
        null != _.Vc(_.Zh(a, 3)) || (c === b.adUnitCode ? _.$h(a, 3, 1) : c === b.Wc && _.$h(a, 3, 2))
    };
    ii = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : _.fg(f, 1, 0)) && _.bi(b, 5, f);
        ci(a, di, 5) || (f ? 1 === _.fg(f, 1, 0) ? ei(a, f) : ei(a, fi(gi(hi(new di, e), 1), Oh(c, d))) : ei(a, gi(hi(new di, e), Oh(c, d) ? 2 : 3)))
    };
    Ph = function(a, b, c) {
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
            v = new ji;
        "number" === typeof d && (_.Xh(v, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === _.Lg(v, 2) || _.Xh(v, 8, d)));
        "string" === typeof f && ki(v, 3, f);
        (_.H = ["string", "number"], _.z(_.H, "includes")).call(_.H, typeof h) && (f = new li, h = ki(f, 1, String(h)), _.bi(v, 6, h));
        if ("object" === typeof k)
            for (h = _.y(["", "_" + l]), f = h.next(); !f.done; f = h.next()) {
                d = f.value;
                f = [];
                e = _.y(_.z(Object, "entries").call(Object, k));
                for (g = e.next(); !g.done; g = e.next()) {
                    g = _.y(g.value);
                    var w = g.next().value;
                    g = g.next().value;
                    w = (w + d).slice(0, 20);
                    var x = void 0;
                    if (null != (x = b[w]) && x.length)
                        if (b[w][0] === String(g)) f.push(w);
                        else {
                            f = [];
                            break
                        }
                }
                d = mi(v, 4, 2);
                _.Je(v, 4, d.concat(f), _.rd)
            }
        switch (n || "banner") {
            case "banner":
                _.$h(v, 5, 1);
                break;
            case "native":
                _.$h(v, 5, 2);
                break;
            case "video":
                _.$h(v, 5, 3);
                b = new ni;
                var B;
                if ("adpod" === (null == c ? void 0 : null == (B = c.video) ? void 0 : B.context)) {
                    var C, F = null == c ? void 0 : null == (C = c.video) ? void 0 : C.adPodDurationSec;
                    _.Xh(b, 1, F)
                } else C = null == c ? void 0 : null == (F = c.video) ? void 0 : F.maxduration, _.Xh(b, 1, C);
                var G;
                if ("number" === typeof(null == c ? void 0 : null == (G = c.video) ? void 0 : G.skip)) {
                    var P;
                    c = !!(null == c ? 0 : null == (P = c.video) ? 0 : P.skip);
                    Sh(b, 2, c)
                }
                var R;
                a = null == (R = a.meta) ? void 0 : R.adServerCatId;
                R = ki(b, 3, a);
                if ("object" !== typeof k) k = null;
                else {
                    var K, Z;
                    a = String(null != (Z = null != (K = k["hb_pb_cat_dur_" + l]) ? K : k.hb_pb_cat_dur) ? Z : "");
                    var qa, wa, aa, ha;
                    K = String(null != (ha = null != (aa = null != (wa = null != (qa = k["hb_cache_id_" + l]) ? qa : k["hb_uuid_" + l]) ? wa : k.hb_cache_id) ? aa : k.hb_uuid) ? ha : "");
                    k = a && K ? a + "_" + K : K ? K : null
                }
                ki(R, 4, k);
                _.bi(v, 9, b)
        }
        _.z(Number, "isFinite").call(Number, p) && _.z(Number, "isFinite").call(Number, r) && (k = new oi, r = _.pi(k, 1, Math.round(r)), p = _.pi(r, 2, Math.round(p)), _.bi(v, 7, p));
        "string" === typeof m && ki(v, 1, m);
        return v
    };
    ri = function(a, b) {
        var c = new _.u.Map,
            d = function(k) {
                var l = c.get(k);
                l || (l = {}, c.set(k, l));
                return l
            },
            e = [];
        a = _.y(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.qi(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.y(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).bm = f)
            }
        }
        d = new _.u.Map;
        a = _.y(_.z(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.y(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.bm, g && h && d.set(f, {
            latency: h - g,
            Ai: !1
        });
        e = _.y(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Ai = !0;
        return d
    };
    Ci = function(a, b, c, d, e, f, g) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? new _.u.Map : d;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? new _.u.Map : f;
        g = void 0 === g ? new si : g;
        var h = new _.u.Map,
            k = (0, a.getEvents)(),
            l = k.filter(function(aa) {
                var ha = aa.args;
                return "auctionEnd" === aa.eventType && ha.auctionId
            }),
            m = new ti,
            n = function(aa) {
                return aa === b.Wc || aa === b.adUnitCode
            },
            p, r, v, w = null != (v = ui.get((null != (p = b.Wc) ? p : "") + (null != (r = b.adUnitCode) ? r : ""))) ? v : 0,
            x;
        l = null != (x = l.filter(function(aa) {
            var ha, vb, Ta;
            return Number(null == (ha = aa.args) ? void 0 : ha.timestamp) > w && (null == (vb = aa.args) ? void 0 : null == (Ta = vb.adUnitCodes) ? void 0 : _.z(Ta, "find").call(Ta, n))
        })) ? x : [];
        if (!l.length) return null;
        var B;
        if (l = null == (B = l.reduce(function(aa, ha) {
                return Number(ha.args.timestamp) > Number(aa.args.timestamp) ? ha : aa
            })) ? void 0 : B.args) {
            x = void 0 === l.bidderRequests ? [] : l.bidderRequests;
            B = void 0 === l.bidsReceived ? [] : l.bidsReceived;
            var C = l.auctionId;
            l = l.timestamp;
            if (C && null != l && x.length) {
                var F, G;
                ui.set((null != (F = b.Wc) ? F : "") + (null != (G = b.adUnitCode) ? G : ""), l);
                F = vi(m);
                a.version && wi.test(a.version) && ki(F, 6, a.version);
                var P, R;
                xi(yi(F, null == (P = a.getConfig) ? void 0 : null == (R = P.call(a).cache) ? void 0 : R.url), g);
                g = zi(function() {
                    return ri(k, C)
                });
                P = _.y(x);
                G = P.next();
                for (R = {}; !G.done; R = {
                        bidderCode: void 0,
                        nj: void 0
                    }, G = P.next())
                    for (x = G.value, R.bidderCode = x.bidderCode, l = x.bids, G = x.timeout, R.nj = x.src, x = x.auctionStart, l = _.y(l), r = l.next(), p = {}; !r.done; p = {
                            ze: void 0
                        }, r = l.next()) {
                        var K = r.value;
                        p.ze = K.bidId;
                        var Z = K.transactionId;
                        r = K.adUnitCode;
                        v = K.getFloor;
                        K = K.mediaTypes;
                        if (p.ze && n(r)) {
                            ai(F, b, r);
                            Z && (_.Ai(F, 4) || ki(F, 4, Z), h.has(Z) || h.set(Z, x));
                            null == Bi(F, 8) && _.z(Number, "isFinite").call(Number, G) && _.pi(F, 8, G);
                            var qa = _.z(B, "find").call(B, function(aa) {
                                return function(ha) {
                                    return ha.requestId === aa.ze
                                }
                            }(p));
                            Z = Qh(F, function(aa) {
                                return function() {
                                    var ha = Uh(new Vh, aa.bidderCode);
                                    Wh(aa.bidderCode, a, ha);
                                    switch (aa.nj) {
                                        case "client":
                                            _.$h(ha, 7, 1);
                                            break;
                                        case "s2s":
                                            _.$h(ha, 7, 2)
                                    }
                                    return ha
                                }
                            }(R)());
                            ii(F, Z, r, d, e, f, v);
                            qa ? (Th(Z, 1), "number" === typeof qa.timeToRespond && _.z(Number, "isFinite").call(Number, qa.timeToRespond) && _.Xh(Z, 2, Math.round(qa.timeToRespond)), p = Ph(qa, c, K), Rh(Z, p)) : (p = g().get(p.ze)) && !p.Ai ? (Th(Z, 2), _.z(Number, "isFinite").call(Number, p.latency) && _.Xh(Z, 2, Math.round(p.latency))) : (p = Th(Z, 3), _.z(Number, "isFinite").call(Number, G) && _.Xh(p, 2, Math.round(G)))
                        }
                    }
                var wa;
                (null == (wa = a.getConfig) ? 0 : wa.call(a).useBidCache) && Yh(F, b, C, c, a);
                return m
            }
        }
    };
    Di = function(a, b) {
        var c, d;
        return _.rb(function(e) {
            if (1 == e.g) return c = b ? a.filter(function(f) {
                return !f.Hd
            }) : a, e.yield(_.u.Promise.all(c.map(function(f) {
                return f.Th.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function(f) {
                return f.Hd
            });
            return e.yield(_.u.Promise.race([_.u.Promise.all(d.map(function(f) {
                return f.Th.promise
            })), new _.u.Promise(function(f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    };
    _.Ei = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.Gi = function(a) {
        var b = _.Fi(a);
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    Hi = function(a, b, c) {
        b = void 0 === b ? 420 : b;
        return (a = _.Fi(a, void 0 === c ? !1 : c)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    Ii = function(a) {
        return (a = _.Gi(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Ji = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.Ki = function(a) {
        return _.Ji(a).clientHeight
    };
    _.Fi = function(a, b) {
        var c = _.Ji(a).clientWidth;
        return (void 0 === b ? 0 : b) ? c * _.Li(a) : c
    };
    _.Mi = function(a, b) {
        var c = _.Ji(a);
        return b ? (a = _.Ki(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    };
    _.Ni = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    Oi = function(a, b, c, d) {
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
    _.Pi = function(a) {
        var b = a.Af,
            c = a.Ke,
            d = a.lf,
            e = a.Bf,
            f = a.Le;
        a = a.mf;
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
    Qi = function(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };
    _.Vi = function(a) {
        var b = a.pa,
            c = a.Dg,
            d = a.ff,
            e = a.Dh,
            f = a.Ba,
            g = a.gk,
            h = a.Lm;
        a = 0;
        try {
            a |= b !== b.top ? 512 : 0;
            var k = Math.min(b.screen.width || 0, b.screen.height || 0);
            a |= k ? 320 > k ? 8192 : 0 : 2048;
            a |= b.navigator && Ri(b.navigator.userAgent) ? 1048576 : 0;
            if (c) {
                k = a;
                var l = b.innerHeight;
                var m = ((void 0 === h ? 0 : h) ? _.Li(b) * l : l) >= c;
                var n = k | (m ? 0 : 1024)
            } else n = a | (_.Ei(b) ? 0 : 8);
            a = n;
            a |= Hi(b, d, h);
            h || (a |= Ii(b))
        } catch (p) {
            a |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = _.Pi({
                    Af: 0,
                    Ke: b.innerWidth,
                    lf: 3,
                    Bf: 0,
                    Le: Math.min(Math.round(b.innerWidth / 320 * 50), Si) + 15,
                    mf: 3
                });
                null != Ti(Ui(b, c), d) && (a |= 16777216);
                break;
            case 1:
                c = f, c = void 0 === c ? null : c, d = b.innerWidth, e = b.innerHeight, n = Math.min(Math.round(b.innerWidth / 320 * 50), Si) + 15, m = _.Pi({
                    Af: 0,
                    Ke: d,
                    lf: 3,
                    Bf: e - n,
                    Le: e,
                    mf: 3
                }), 25 < n && m.push({
                    x: d - 25,
                    y: e - 25
                }), null != Ti(Ui(b, c), m) && (a |= 16777216)
        }
        g && (f = void 0 === f ? null : f, f = void 0 === f ? null : f, g = b.innerHeight, g = _.Pi({
            Af: 0,
            Ke: b.innerWidth,
            lf: 10,
            Bf: g - 66,
            Le: g,
            mf: 10
        }), g = null != Ti(Ui(b, f), g));
        g && (a |= 16777216);
        return a
    };
    Ri = function(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    };
    Ui = function(a, b) {
        return new _.Wi(a, {
            bi: Xi(a, void 0 === b ? null : b)
        })
    };
    Xi = function(a, b) {
        if (b = void 0 === b ? null : b) {
            var c = b;
            return function(d, e, f) {
                var g, h;
                _.Yi(c, "ach_evt", {
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
    bj = function(a) {
        var b;
        var c = new Zi;
        c = _.$i(c, 2, a.pvsid);
        c = _.aj(c, 3, a.mb);
        c = _.aj(c, 6, a.Zf);
        var d = null != (b = a.co) ? b : _.Vf();
        b = _.$i(c, 1, d);
        c = ih();
        b = _.Je(b, 4, c, Wc);
        a.payload && (c = a.payload(), _.bi(b, 7, c));
        a.Mc && _.$i(b, 5, a.Mc);
        return b
    };
    mj = function(a) {
        return bj(_.z(Object, "assign").call(Object, {}, a, {
            payload: function() {
                var b = new cj;
                var c = new dj;
                c = ej(c, 4, fj, ed(a.xl));
                return _.gj(b, 4, hj, c)
            }
        }))
    };
    _.nj = function(a) {
        return bj(_.z(Object, "assign").call(Object, {}, a, {
            payload: function() {
                var b = new cj;
                var c = new dj;
                c = ej(c, 3, fj, Uc(a.U));
                return _.gj(b, 4, hj, c)
            }
        }))
    };
    pj = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.oj(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    rj = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.qj(d, function(e) {
                    return !_.z(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = pj(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    tj = function(a, b) {
        return null !== _.sj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        }, !0)
    };
    uj = function(a, b) {
        return _.sj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position
        }, !0)
    };
    vj = function(a) {
        for (var b = [], c = _.y(a.document.querySelectorAll("*")), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a.getComputedStyle(d, null);
            "fixed" === e.position && "none" !== e.display && "hidden" !== e.visibility && b.push(d)
        }
        return b
    };
    wj = function(a, b) {
        b = b.getBoundingClientRect();
        var c = b.left,
            d = b.bottom,
            e = b.right;
        return 0 <= b.top && 0 <= c && d <= a.innerHeight && e <= a.innerWidth
    };
    xj = function(a) {
        return Math.round(10 * Math.round(a / 10))
    };
    yj = function(a) {
        return a.position + "-" + xj(a.ja) + "x" + xj(a.sa) + "-" + xj(a.scrollY + a.ld) + "Y"
    };
    zj = function(a) {
        return "f-" + yj({
            position: a.position,
            ld: a.ld,
            scrollY: 0,
            ja: a.ja,
            sa: a.sa
        })
    };
    Aj = function(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    };
    Cj = function(a, b, c) {
        var d = _.Bj(c.pa).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.sa),
                    g = Math.max(e.left - 10, 0),
                    h = Math.min(e.right + 10, c.ja),
                    k = .3 * c.ja;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (0 < h && g < k) {
                        var l = zj({
                            position: "left",
                            ld: e,
                            ja: c.ja,
                            sa: c.sa
                        });
                        b.set(l, Aj(b.get(l), g))
                    }
                    if (g < c.ja && h > c.ja - k) {
                        l = zj({
                            position: "right",
                            ld: e,
                            ja: c.ja,
                            sa: c.sa
                        });
                        var m = c.ja - h;
                        b.set(l, Aj(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    };
    Fj = function(a, b) {
        var c = b.pa,
            d = b.zc,
            e = "f-" + xj(b.ja) + "x" + xj(b.sa);
        a.has(e) || (a.set(e, 0), e = vj(c), d ? (Dj(a, b, e.filter(function(f) {
            return wj(c, f)
        })), Ej(c, e.filter(function(f) {
            return !wj(c, f)
        }))) : Dj(a, b, e))
    };
    Dj = function(a, b, c) {
        var d = b.tc,
            e = b.pa;
        _.Bj(e).sideRailProcessedFixedElements.clear();
        d = new _.u.Set([].concat(_.qi(_.z(Array, "from").call(Array, e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), _.qi(d)));
        c = _.y(c);
        for (e = c.next(); !e.done; e = c.next()) e = e.value, tj(e, d) || Cj(e, a, b)
    };
    Gj = function(a) {
        if (1200 > a.ja || 650 > a.sa) return null;
        var b = _.Bj(a.pa).sideRailAvailableSpace;
        a.zi || Fj(b, {
            pa: a.pa,
            ja: a.ja,
            sa: a.sa,
            tc: a.tc,
            zc: a.zc
        });
        for (var c = [], d = .9 * a.sa, e = _.Ni(a.pa), f = (a.sa - d) / 2, g = f, h = d / 7, k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            var n = g;
            var p = a.position,
                r = b,
                v = {
                    pa: a.pa,
                    ja: a.ja,
                    sa: a.sa,
                    tc: a.tc
                },
                w = zj({
                    position: p,
                    ld: n,
                    ja: v.ja,
                    sa: v.sa
                }),
                x = yj({
                    position: p,
                    ld: n,
                    scrollY: e,
                    ja: v.ja,
                    sa: v.sa
                });
            if (!r.has(x)) {
                var B = "left" === p ? 20 : v.ja - 20,
                    C = B;
                p = .3 * v.ja / 5 * ("left" === p ? 1 : -1);
                for (var F = 0; 6 > F; F++) {
                    var G = Qi(v.pa.document, {
                            x: Math.round(C),
                            y: Math.round(n)
                        }),
                        P = tj(G, v.tc),
                        R = uj(G, v.pa);
                    if (!P && null !== R) {
                        Cj(R, r, v);
                        r.delete(x);
                        break
                    }
                    P || (P = v, "true" === G.getAttribute("google-side-rail-overlap") ? P = !0 : "false" === G.getAttribute("google-side-rail-overlap") ? P = !1 : (R = G.offsetHeight >= .25 * P.sa, P = G.offsetWidth >= .9 * P.ja && R));
                    if (P) r.set(x, Math.round(Math.abs(C - B) + 20));
                    else if (C !== B) C -= p, p /= 2;
                    else {
                        r.set(x, 0);
                        break
                    }
                    C += p
                }
            }
            n = Aj(r.get(w), r.get(x));
            m.call(l, n);
            g += h
        }
        b = a.ij;
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
    Ej = function(a, b) {
        var c = _.Bj(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(function() {
                setTimeout(function() {
                    Hj(a);
                    for (var f = _.y(c.A), g = f.next(); !g.done; g = f.next()) g = g.value, g()
                }, 500)
            });
            b = _.y(b);
            for (var e = b.next(); !e.done; e = b.next()) d.observe(e.value, {
                attributes: !0
            });
            c.g = d
        }
    };
    Hj = function(a) {
        a = _.Bj(a).sideRailAvailableSpace;
        var b = _.z(Array, "from").call(Array, _.z(a, "keys").call(a)).filter(function(d) {
            return _.z(d, "startsWith").call(d, "f-")
        });
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next()) a.delete(c.value)
    };
    _.Ij = function(a) {
        if (a.la) return a.la.Db(1228, function() {
            return Gj(a)
        }) || null;
        try {
            return Gj(a)
        } catch (b) {}
        return null
    };
    Jj = function(a, b, c, d, e) {
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
                } catch (G) {
                    if (15 == G.code) throw G.styleSheet = k, G;
                }
                h = l
            } catch (G) {
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
                            x = e,
                            B = null != (v = m.cssRules) ? v : [];
                        for (v = 0; v < Math.min(B.length, x); v++) {
                            var C = B[v],
                                F = w;
                            if (r.call(p, C.selectorText) && F(C)) {
                                n = !0;
                                break a
                            }
                        }
                        n = !1
                    }
                    if (n) return !0
                } catch (G) {}
        }
        return !1
    };
    Oj = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.z(Mj, "includes").call(Mj, e.height) || (null == e ? 0 : e.maxHeight) && !_.z(Nj, "includes").call(Nj, e.maxHeight) || Jj(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.z(Mj, "includes").call(Mj, g) || !!f && !_.z(Nj, "includes").call(Nj, f)
        }, c, d) ? !1 : !0
    };
    Qj = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        Pj(a, function(e) {
            return d = Oj(e, b, 10, 10)
        }, c);
        return d
    };
    Rj = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Uj = function(a) {
        a = Sj(a);
        return _.Tj(a)
    };
    Sj = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    Xj = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = Vj.g();
        0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
        2 === e.g && (e = {}, dg(_.z(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(Wj(window)), e.em = c, e.lid = b, e.eids = ih().join(), e), d), "esp"))
    };
    Yj = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new _.u.Promise(function(c) {
            var d = function() {
                c(b());
                _.$f(a, "load", d)
            };
            _.pb(a, "load", d)
        })
    };
    Zj = function(a) {
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
    dk = function(a, b) {
        return _.ak(a, bk, 2).some(function(c) {
            return ck(c, 1) === b && _.Ai(c, 2)
        })
    };
    ek = function(a, b) {
        return _.ak(a, bk, 2).some(function(c) {
            return ck(c, 1) === b && _.Ai(c, 2)
        })
    };
    kk = function(a, b, c, d) {
        if (b)
            for (var e = _.y(Zj(b)), f = e.next(), g = {}; !f.done; g = {
                    yc: void 0
                }, f = e.next())
                if (g.yc = f.value, (f = fk().get(g.yc, b).Rc) && !ek(a, g.yc)) {
                    var h = gk(f);
                    if (2 !== h && 3 !== h) {
                        h = !1;
                        if (c) {
                            var k = /^(\d+)$/.exec(g.yc);
                            if (k && !(h = _.z(c.split(","), "includes").call(c.split(","), k[1]))) continue;
                            if (!h && !c.split(",").some(function(m) {
                                    return function(n) {
                                        var p;
                                        return null == d ? void 0 : null == (p = d.get(n)) ? void 0 : p.has(m.yc)
                                    }
                                }(g))) continue
                        }
                        Sh(f, 9, h);
                        (h = ck(f, 2)) && 1024 < h.length && (k = {}, Xj(55, g.yc, null, (k.sl = String(h.length), k)), _.hk(f.ib(ik(108)), 2));
                        jk(a, 2, bk, f);
                        k = f = void 0;
                        var l = {};
                        Xj(19, g.yc, null, (l.hs = h ? "1" : "0", l.sl = String(null != (k = null == (f = h) ? void 0 : f.length) ? k : -1), l))
                    }
                }
    };
    lk = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    xk = function(a, b, c, d, e, f) {
        f = void 0 === f ? mk : f;
        var g, h, k, l, m, n, p, r, v, w, x, B, C;
        return _.rb(function(F) {
            return 1 == F.g ? (g = new nk, h = new ok(a, c, e), J(g, h), J(g, new pk(h.o, void 0, d, e)), k = new qk(h.j, e), J(g, k), l = new rk(k.j, e), J(g, l), m = new sk(b, l.j, e), J(g, m), J(g, new pk(m.o, void 0, d, e)), n = new tk(m.j, m.H, f.nh ? 1024 : 300, f.nh ? 1024 : 1E3, e), J(g, n), J(g, new pk(n.j, void 0, d, e)), p = new uk(e), J(g, p), r = new vk(p.output, l.o, e), J(g, r), v = new sk(b, r.j, e), J(g, v), w = new pk(v.j, void 0, d, e), J(g, w), wk(g), C = a, F.yield(n.j.promise, 2)) : F.return({
                id: C,
                collectorGeneratedData: null != (B = null == (x = F.A) ? void 0 : ck(x, 2)) ? B : null
            })
        })
    };
    Dk = function(a, b, c, d) {
        var e = {
            nh: _.E(yk)
        };
        e = void 0 === e ? mk : e;
        zk() !== Ak(window) ? Xj(16, "") : Bk(a, "encryptedSignalProviders", c) && Bk(a, "secureSignalProviders", c) || (Xj(38, ""), Ck(a, "encryptedSignalProviders", b, e, c, d), Ck(a, "secureSignalProviders", b, e, c, function() {}))
    };
    Bk = function(a, b, c) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    Ck = function(a, b, c, d, e, f) {
        var g, h = new Ek(null != (g = a[b]) ? g : [], c, "secureSignalProviders" === b, f, d);
        a[b] = new Fk(h);
        h.addErrorHandler(e)
    };
    Ik = function(a, b) {
        var c = new nk,
            d = new uk(b);
        a = new Gk(d.output, a, b);
        Hk(c, [d, a]);
        wk(c)
    };
    Mk = function(a, b, c, d, e) {
        var f = b.toString();
        if (Jk.has(f)) return null;
        Jk.add(f);
        f = new nk;
        a = new ok(a, c, e);
        var g = new pk(a.o, c, d, e),
            h = new Kk(a.j, e),
            k = new qk(h.j, e);
        b = new Lk(k.j, b, e);
        c = new pk(b.j, c, d, e);
        Hk(f, [a, g, h, k, b, c]);
        wk(f);
        return f
    };
    Ok = function(a, b, c) {
        c = void 0 === c ? Nk : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.pb(a, "load", function() {
            return void c(a, b)
        }))
    };
    Pk = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Qk = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Sk = function(a) {
        if (a === a.top || _.Rk(a.top)) return _.u.Promise.resolve({
            status: 4
        });
        var b = Pk(a);
        if (!b) return _.u.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Qk(a.document.referrer)) return _.u.Promise.resolve({
            status: 3
        });
        var c = new _.wh;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Jb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    Wk = function(a, b) {
        var c = Tk(a);
        return c.messageChannelSendRequestFn ? _.u.Promise.resolve(c.messageChannelSendRequestFn) : new _.u.Promise(function(d) {
            function e(k) {
                return h.g(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.Zf("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.gb(Uk).toString();
            var g = (new URL(Uk.toString())).origin,
                h = Vk({
                    destination: a,
                    vb: f,
                    origin: g,
                    Ab: "goog:gRpYw:doubleclick"
                });
            h.g("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    cl = function(a, b, c, d) {
        var e = {
            skipTopicsObservation: _.E(Xk),
            includeBuyerTopics: _.E(Yk)
        };
        e = void 0 === e ? {} : e;
        var f = Zk(d),
            g = f.De,
            h = f.Ce;
        b = Tk(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics
        }).then(function(k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && ta(k, g)));
            else if (Og()(k)) l || (l = k !== g);
            else return c.Cb(989, Error(JSON.stringify(k))), 7;
            if (l && d) try {
                var m = new $k;
                var n = _.Xh(m, 2, _.Vf());
                k instanceof Uint8Array ? ej(n, 1, al, wc(k, !1, !1)) : ej(n, 3, al, Uc(k));
                d.setItem("goog:cached:topics", bl(n))
            } catch (p) {}
            return k
        }), b.getTopicsPromise = a);
        return g && !h ? _.u.Promise.resolve(g) : b.getTopicsPromise
    };
    Zk = function(a) {
        if (!a) return {
            De: null,
            Ce: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                De: null,
                Ce: !0
            };
            var c = dl(b),
                d = el(c, al);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    e = fl(gl(c, hl(c, al, 1)));
                    break;
                case 3:
                    e = _.fg(c, hl(c, al, 3), 0);
                    break;
                default:
                    lb(d)
            }
            var f = _.Lg(c, 2) + 6048E5 < _.Vf();
            return {
                De: e,
                Ce: f
            }
        } catch (g) {
            return {
                De: null,
                Ce: !0
            }
        }
    };
    Tk = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    kl = function(a) {
        if (Ka()) {
            var b = a.document.documentElement.lang;
            il(a) ? jl(Wj(a), !0, "", b) : (new MutationObserver(function(c, d) {
                il(a) && (jl(Wj(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    il = function(a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    };
    jl = function(a, b, c, d) {
        dg({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    ml = function(a) {
        var b = "";
        ll(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    nl = function() {
        var a = Date.now();
        return _.z(Number, "isFinite").call(Number, a) ? Math.round(a) : 0
    };
    ql = function(a) {
        var b = new ol;
        var c = nl();
        b = _.$i(b, 1, c);
        b = _.$i(b, 2, a.pvsid);
        b = _.aj(b, 3, a.zb || a.mb);
        c = ih();
        b = _.Je(b, 4, c, Wc);
        b = _.$i(b, 5, a.Fi);
        a = _.aj(b, 12, a.Zf);
        var d;
        if (b = null == (d = _.u.globalThis.performance) ? void 0 : d.memory) {
            d = new pl;
            try {
                _.$i(d, 1, b.jsHeapSizeLimit)
            } catch (e) {}
            try {
                _.$i(d, 2, b.totalJSHeapSize)
            } catch (e) {}
            try {
                _.$i(d, 3, b.usedJSHeapSize)
            } catch (e) {}
        } else d = void 0;
        d && _.bi(a, 10, d);
        return a
    };
    wl = function(a) {
        var b = _.Yf();
        if (a.Oc) {
            var c = a.Ra,
                d = c.Nc,
                e = ql(a),
                f = new rl;
            b = _.$i(f, 2, b);
            f = new sl;
            f = _.tl(f, 1, a.Oc);
            f = _.ul(f, 2, a.Fi);
            f = _.tl(f, 3, a.kj);
            f = _.ul(f, 4, a.Ei);
            f = _.tl(f, 5, a.eh);
            a = _.ul(f, 6, a.fg);
            a = _.bi(b, 3, a);
            e = _.gj(e, 6, vl, a);
            d.call(c, e)
        }
    };
    zl = function(a) {
        if (!a.Oc) return function() {};
        var b = nl();
        a.Ra.Nc(xl(ql(a)));
        return function() {
            var c = a.Ra,
                d = c.Nc,
                e = ql(a);
            var f = new yl;
            var g = nl() - b;
            f = _.$i(f, 1, g);
            e = _.gj(e, 14, vl, f);
            return void d.call(c, e)
        }
    };
    Al = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    M = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function() {
            var e = _.Ua.apply(0, arguments),
                f = Bl(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Oc && a.kj) {
                    var h = a.Ra,
                        k = h.Nc,
                        l = ql(a);
                    var m = _.$i(l, 5, a.Ei);
                    var n = new Cl;
                    var p = _.L(n, 1, b);
                    var r = _.ul(p, 2, g);
                    var v = _.gj(m, 9, vl, r);
                    k.call(h, v)
                }
            } catch (w) {}
            return f
        }
    };
    Bl = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = _.Ua.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.Jf(Dl);
            try {
                var l = _.E(El);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) Fl.call(this, a, 110, m);
                    else if (Fl.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if (_.Gl(h), !g && !d) throw m;
                }
            }
            return f
        }
    };
    Hl = function(a, b, c, d) {
        return Bl(a, b, c, void 0 === d ? !1 : d)()
    };
    Fl = function(a, b, c) {
        if (a.eh) {
            c = _.Il(c) ? c.error : c;
            var d = new Jl,
                e = new Kl;
            try {
                var f = Wj(window);
                _.$i(e, 1, f)
            } catch (p) {}
            try {
                var g = ih();
                _.Je(e, 2, g, Wc)
            } catch (p) {}
            try {
                _.aj(e, 3, window.document.URL)
            } catch (p) {}
            f = _.bi(d, 2, e);
            g = new Ll;
            b = _.L(g, 1, b);
            try {
                var h = Vg(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.aj(b, 2, h)
            } catch (p) {}
            try {
                var k = Vg(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.aj(b, 3, k)
            } catch (p) {}
            try {
                var l = Vg(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.Je(b, 4, l.split(/\n\s*/), _.rd)
            } catch (p) {}
            h = _.bi(f, 1, b);
            k = new Ml;
            try {
                _.aj(k, 1, a.zb || a.mb)
            } catch (p) {}
            try {
                var m = Nl();
                _.ul(k, 2, m)
            } catch (p) {}
            try {
                var n = [].concat(_.qi(_.z(Ol, "keys").call(Ol)));
                _.Je(k, 3, n, _.rd)
            } catch (p) {}
            _.gj(h, 4, Pl, k);
            _.$i(h, 5, a.fg);
            a.Ra.im(h)
        }
    };
    Sl = function(a, b) {
        var c = Ql.get(a);
        c || (b = c = b(), Rl.set(b, a), Ql.set(a, b));
        return c
    };
    N = function(a) {
        return function() {
            return new Tl(a, [].concat(_.qi(_.Ua.apply(0, arguments))))
        }
    };
    Ul = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Ul(b) : String(b)
        }).join(", ") + "]"
    };
    Vl = function(a, b) {
        b = Ul(b);
        b = b.substring(1, b.length - 1);
        return new Tl(96, [a, b])
    };
    Wl = function(a) {
        return (_.H = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable gameManualInterstitialSlotReady gameManualInterstitialSlotClosed".split(" "), _.z(_.H, "includes")).call(_.H, a) ? a : null
    };
    Yl = function(a, b, c) {
        return Sl(c, function() {
            return new Xl(a, b, c)
        })
    };
    $l = function(a, b, c) {
        return Sl(c, function() {
            return new Zl(a, b, c)
        })
    };
    am = function(a, b, c, d) {
        "string" === typeof a ? b.setClickUrl(a) : O(d, Vl("Slot.setClickUrl", [a]), c)
    };
    hm = function(a, b, c, d, e) {
        if ("string" !== typeof a || bm(a)) O(e, Vl("Slot.setTargeting", [a, b]), c);
        else {
            var f = [];
            Array.isArray(b) ? f = b : _.ra(b) ? f = _.z(Array, "from").call(Array, b) : b && (f = [b]);
            f = f.map(String);
            (b = (_.H = cm(d), _.z(_.H, "find")).call(_.H, function(g) {
                return ck(g, 1) === a
            })) ? dm(b, f): (b = dm(em(new fm, a), f), jk(d, 9, fm, b));
            e.info(gm(a, f.join(), d.getAdUnitPath()), c)
        }
    };
    im = function(a, b, c, d) {
        if (null != a && "object" === typeof a)
            for (var e = _.y(_.z(Object, "keys").call(Object, a)), f = e.next(); !f.done; f = e.next()) f = f.value, hm(f, a[f], b, c, d);
        else d.error(Vl("Slot.updateTargetingFromMap", [a]), b)
    };
    km = function(a, b, c, d) {
        return "string" !== typeof a ? (O(d, Vl("Slot.getTargeting", [a]), b), []) : (b = (_.H = cm(c), _.z(_.H, "find")).call(_.H, function(e) {
            return ck(e, 1) === a
        })) ? jm(b).slice() : []
    };
    lm = function(a) {
        return cm(a).map(function(b) {
            return _.I(b, 1)
        })
    };
    qm = function(a, b, c, d) {
        if (void 0 === a) _.hk(c, 9), d.info(mm(b.getAdUnitPath()), b);
        else {
            var e = cm(c),
                f = _.z(e, "findIndex").call(e, function(g) {
                    return ck(g, 1) === a
                });
            0 > f ? O(d, nm(a, b.getAdUnitPath()), b) : (e.splice(f, 1), _.om(c, 9, e), d.info(pm(a, b.getAdUnitPath()), b))
        }
    };
    _.tm = function(a) {
        _.Jf(rm).g = !0;
        return sm[a]
    };
    xm = function(a, b, c) {
        var d, e;
        return null != (e = null == (d = _.z(a, "find").call(a, function(f) {
            f = _.um(f, vm, 1);
            return wm(f, 1) <= b && wm(f, 2) <= c
        })) ? void 0 : _.ak(d, vm, 2)) ? e : null
    };
    zm = function(a, b, c) {
        var d;
        "number" === typeof b && "number" === typeof c && _.ak(a, ym, 6).length ? d = xm(_.ak(a, ym, 6), b, c) : d = _.ak(a, vm, 5);
        return d
    };
    Bm = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = Am(!1, b), c = zm(a, b.width, b.height));
        null != c || (c = zm(a));
        return null == c ? [] : c.map(function(d) {
            return _.Q(d, 3) ? "fluid" : [wm(d, 1), wm(d, 2)]
        })
    };
    Cm = function(a) {
        var b = [],
            c = !1;
        a = _.y(Bm(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Dm = function(a) {
        return 0 !== a && 1 !== a
    };
    Em = function(a) {
        return Dm(a) && !(_.H = [8, 9], _.z(_.H, "includes")).call(_.H, a)
    };
    Fm = function(a) {
        var b = a.document;
        return Xg(a) ? b.URL : b.referrer
    };
    Im = function(a) {
        try {
            return Gm(a, window.top)
        } catch (b) {
            return new _.Hm(-12245933, -12245933)
        }
    };
    Mm = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Jm(Km, a), a = new _.Lm(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Om = function(a, b) {
        for (var c = {}, d = _.y(_.z(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = _.je(b[e]),
                g = _.Jf(Nm),
                h = g.g.get(e);
            null == h ? h = ++_.Jf(Dl).l : g.g.delete(e);
            _.hk(f, 20, _.Zc(h));
            c[e] = f
        }
        return {
            ba: _.je(a),
            T: c
        }
    };
    Qm = function() {
        for (var a = "", b = _.y(Pm()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Pm = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    Wm = function(a, b, c, d) {
        var e = Rm(b, a) || Sm(b, a);
        if (!e) return null;
        var f = Im(e),
            g = e === Sm(b, a),
            h = zi(function() {
                var p = g ? Sm(b, a) : e;
                return p && Tm(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = Bm(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = Um(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = Um(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && Vm(e) ? f : new _.Hm(-12245933, -12245933)
    };
    Xm = function(a, b, c, d) {
        var e = Sm(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = Wm(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    Ym = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    Zm = function(a) {
        return Ym(a) + "__container__"
    };
    Rm = function(a, b) {
        var c;
        return (null == (c = Sm(a, b)) ? void 0 : c.querySelector('[id="' + Zm(a) + '"]')) || null
    };
    $m = function(a, b) {
        var c, d;
        return null != (d = null == (c = Rm(a, b)) ? void 0 : c.querySelector('iframe[id="' + Ym(a) + '"]')) ? d : null
    };
    Sm = function(a, b) {
        b = void 0 === b ? document : b;
        return an().l.get(a) || b.getElementById(a.getDomId())
    };
    cn = function(a, b, c) {
        return Sl(c, function() {
            return new bn(a, b, c, c.g)
        })
    };
    dn = function(a) {
        return _.z(Object, "assign").call(Object, {}, a, _.z(Object, "fromEntries").call(Object, _.z(Object, "entries").call(Object, a).map(function(b) {
            b = _.y(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    hn = function() {
        var a = {},
            b = dn(en);
        a.OutOfPageFormat = b;
        b = dn(fn);
        a.TrafficSource = b;
        b = dn(gn);
        a.Taxonomy = b;
        return a
    };
    jn = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a.tag_origin = "to", a
    };
    rn = function(a, b, c, d, e) {
        if ("string" === typeof a && a.length && void 0 !== jn()[a] && "string" === typeof b) {
            var f = (_.H = c.Pa(), _.z(_.H, "find")).call(_.H, function(g) {
                return ck(g, 1) === a
            });
            f ? dm(f, [b]) : (f = pn(em(new fm, a), b), jk(c, 14, fm, f));
            e.info(qn(a, String(b), d))
        } else O(e, Vl("PubAdsService.set", [a, b]))
    };
    sn = function(a, b, c) {
        return "string" !== typeof a ? (O(c, Vl("PubAdsService.get", [a])), null) : (b = (b = (_.H = b.Pa(), _.z(_.H, "find")).call(_.H, function(d) {
            return ck(d, 1) === a
        })) && jm(b)) ? b[0] : null
    };
    tn = function(a) {
        return a.Pa().map(function(b) {
            return _.I(b, 1)
        })
    };
    vn = function() {
        for (var a = Mf(un) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    zn = function() {
        if (wn) return wn;
        for (var a = Nf(xn), b = [], c = 0; c < a.length; c += 2) _.yn(a[c], a[c + 1], b);
        return wn = b.join("&")
    };
    En = function(a, b) {
        if (!b || !_.ja(b)) return null;
        var c = !1,
            d = new An;
        _.Bn(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? Sh(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? Sh(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? Sh(d, 3, b.sandbox) : c = g = !0;
                    break;
                default:
                    g = !0
            }
            g && a.error(Cn("setSafeFrameConfig", Dn(b), f, Dn(e)))
        });
        return c ? null : d
    };
    Gn = function(a) {
        var b = new An;
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) null != Fn(c, 1) && Sh(b, 1, _.Q(c, 1)), null != Fn(c, 2) && Sh(b, 2, _.Q(c, 2)), null != Fn(c, 3) && Sh(b, 3, _.Q(c, 3));
        return b
    };
    Hn = function(a, b) {
        var c = {};
        b = (c[0] = ph(b.pvsid), c);
        return _.Jf(gh).A(a, b)
    };
    Jn = function(a, b) {
        var c;
        return null == (c = _.In(a, "__gads", b)) ? void 0 : _.z(c.split(":"), "find").call(c.split(":"), function(d) {
            return 0 === d.indexOf("ID=")
        })
    };
    Kn = function(a, b, c, d) {
        (c = Jn(c, d)) ? (d = {}, b = (d[0] = ph(b.pvsid), d[1] = ph(c), d), _.Jf(gh).A(a, b)) : Hn(a, b)
    };
    On = function(a) {
        var b = a.key,
            c = a.value,
            d = a.Fa,
            e = a.serviceName,
            f = a.om,
            g = a.fb,
            h = a.R;
        a = a.context;
        var k = null;
        "string" === typeof c ? k = [c] : Array.isArray(c) ? k = c : _.ra(c) && (k = _.z(Array, "from").call(Array, c));
        var l = "string" === typeof b && !bm(b);
        k = k && va(k);
        var m, n = null != (m = null == k ? void 0 : k.every(function(p) {
            return "string" === typeof p
        })) ? m : !1;
        if (l && n) {
            c = k;
            m = (_.H = _.ak(d, fm, 2), _.z(_.H, "find")).call(_.H, function(p) {
                return ck(p, 1) === b
            });
            if ("gpt-beta" === b) {
                if (f) {
                    O(h, Ln(c.join()));
                    return
                }
                if (m) {
                    O(h, Mn(c.join()));
                    return
                }
                c = Nn(c, g, a)
            }
            m ? dm(m, c) : (f = dm(em(new fm, b), c), jk(d, 2, fm, f));
            h.info(gm(b, c.join(), e))
        } else O(h, Vl("PubAdsService.setTargeting", [b, c]))
    };
    Pn = function(a, b, c) {
        return "string" !== typeof a ? (O(c, Vl("PubAdsService.getTargeting", [a])), []) : (b = (_.H = _.ak(b, fm, 2), _.z(_.H, "find")).call(_.H, function(d) {
            return ck(d, 1) === a
        })) ? jm(b).slice() : []
    };
    Qn = function(a) {
        return _.ak(a, fm, 2).map(function(b) {
            return _.I(b, 1)
        })
    };
    Un = function(a, b, c, d) {
        if (void 0 === a) _.hk(b, 2), d.info(Rn(c));
        else if ("gpt-beta" === a) O(d, Sn(a));
        else {
            var e = _.ak(b, fm, 2),
                f = _.z(e, "findIndex").call(e, function(g) {
                    return ck(g, 1) === a
                });
            0 > f ? O(d, nm(a, c)) : (e.splice(f, 1), _.om(b, 2, e), d.info(Tn(a, c)))
        }
    };
    Nn = function(a, b, c) {
        var d = [];
        a = _.y(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            b.g = e;
            var f = Hn(9, c);
            1 === f.length && (d.push(e), d.push(e + "-" + f[0]))
        }
        return d
    };
    Wn = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = Vn.exec(null != (b = null == (a = _.tm(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    Xn = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    Yn = function(a, b) {
        var c = b.g;
        return a.map(function(d) {
            return _.z(c, "find").call(c, function(e) {
                return e.g === d
            })
        }).filter(Qg())
    };
    $n = function() {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function() {
                Zn();
                return !0
            },
            set: function() {
                Zn()
            },
            configurable: !0
        })
    };
    co = function(a, b, c, d, e, f) {
        var g = ao(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Fa;
        if (!f || !g) return O(b, Vl("PubAdsService.definePassback", [d, e])), null;
        Sh(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Si: cn(a, b, new bo(a, f, c)),
            Fa: g
        }
    };
    fo = function(a, b, c, d, e) {
        return Sl(c, function() {
            return new eo(a, b, c, d, e)
        })
    };
    go = function(a, b, c, d, e) {
        "string" !== typeof a || "string" !== typeof b || void 0 === jn()[a] ? O(e, Vl("Slot.set", [a, b]), c) : (c = (_.H = d.Pa(), _.z(_.H, "find")).call(_.H, function(f) {
            return ck(f, 1) === a
        })) ? dm(c, [b]) : (b = pn(em(new fm, a), b), jk(d, 3, fm, b))
    };
    ho = function(a, b, c, d) {
        return "string" !== typeof a ? (O(d, Vl("Slot.get", [a]), b), null) : (b = (b = (_.H = c.Pa(), _.z(_.H, "find")).call(_.H, function(e) {
            return ck(e, 1) === a
        })) && jm(b)) ? b[0] : null
    };
    io = function(a) {
        return a.Pa().map(function(b) {
            return _.I(b, 1)
        })
    };
    ko = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(jo) : "fluid" === a
    };
    lo = function(a) {
        return Array.isArray(a) && 2 === a.length && jo(a[0]) && jo(a[1])
    };
    no = function(a) {
        if (Array.isArray(a)) {
            var b = new vm;
            b = _.hk(b, 1, _.Zc(a[0]));
            a = _.hk(b, 2, _.Zc(a[1]))
        } else a = mo();
        return a
    };
    po = function(a) {
        var b = [];
        if (oo(a)) b.push(no(a));
        else if (Array.isArray(a)) {
            a = _.y(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, oo(c) ? b.push(no(c)) : ta(c, ["fluid"]) && b.push(mo())
        }
        return b
    };
    qo = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return po(a)
    };
    oo = function(a) {
        return _.E(ro) ? Array.isArray(a) && 2 === a.length ? a.every(so) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    uo = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new to("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!lo(b)) throw new to("Size must be an array of two non-negative integers");
        var c = new vm;
        c = _.hk(c, 1, _.Zc(b[0]));
        b = _.hk(c, 2, _.Zc(b[1]));
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = po(a[1]), 0 === a.length) throw new to("At least one slot size must be present");
        c = new ym;
        b = _.bi(c, 1, b);
        return _.om(b, 2, a)
    };
    vo = function() {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {
            cmd: []
        }
    };
    zo = function(a, b) {
        _.E(wo) ? (_.hk(a, 28), null !== b && Rg(b) && _.z(Object, "hasOwn").call(Object, b, "enabled") && (b = b.enabled, xo(b) && (b = yo(b), _.bi(a, 28, b)))) : void 0 === b || null === b ? _.hk(a, 28) : (b = b.enabled, xo(b) ? (b = yo(b), _.bi(a, 28, b)) : void 0 !== b && null !== b || _.hk(a, 28))
    };
    Ao = function(a, b) {
        if (!b) return [];
        var c = [];
        b = _.y((_.H = He(b, 26, zd), _.z(_.H, "values")).call(_.H));
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            try {
                c.push(JSON.parse(d))
            } catch (e) {
                Fl(a, 1023, e)
            }
        }
        return c
    };
    Co = function(a, b, c) {
        return Sl(c, function() {
            return new Bo(a, b, c)
        })
    };
    Mo = function(a, b, c, d, e, f, g, h) {
        var k = new nk,
            l = new Do(a, h);
        J(k, l);
        e = new Eo(a, d, e);
        J(k, e);
        e = new Fo(a, b, d, f, l.kb);
        J(k, e);
        h = new Go(a, b, c, d, h, f, l.kb);
        J(k, h);
        if (_.E(Ho)) {
            b = new Io(a, b, c, d, f, l.kb);
            J(k, b);
            var m = b.j
        }
        l = new Jo(a, l.kb, h.j, e.j, m);
        J(k, l);
        _.E(Ko) && J(k, new Lo(a, g, l.output));
        wk(k);
        return {
            kb: l.output,
            Ka: k
        }
    };
    Oo = function(a, b) {
        return Sl(b, function() {
            return new No(a, b)
        })
    };
    Qo = function(a, b, c) {
        var d = Bl(a, 77, function() {
            var e = b.cmd;
            if (!e || Array.isArray(e)) {
                var f = new Po(c);
                b.cmd = Oo(a, f);
                null != e && e.length && f.push.apply(f, e)
            }
        });
        b.fifWin && "complete" !== document.readyState ? _.pb(window, "load", function() {
            return window.setTimeout(d, 0)
        }) : d()
    };
    To = function(a) {
        var b = window;
        "complete" === _.t.document.readyState ? Hl(a, 94, function() {
            vo()._pubconsole_disable_ || null !== Ro(b) && So(a, b)
        }) : _.pb(_.t, "load", Bl(a, 94, function() {
            vo()._pubconsole_disable_ || null !== Ro(b) && So(a, b)
        }))
    };
    So = function(a, b) {
        b = void 0 === b ? _.t : b;
        if (!Uo) {
            var c = new Vo("gpt_pubconsole_loaded");
            Wo(c, a);
            Xo(c, "param", String(Ro(b)));
            Xo(c, "api", String(Yo));
            Zo(c);
            _.$o(b.document, ap);
            Uo = !0
        }
    };
    Ro = function(a) {
        var b = Fm(a),
            c;
        return null != (c = (_.H = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.z(_.H, "find")).call(_.H, function(d) {
            var e = b.search(bp);
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
    cp = function() {
        vo()._pubconsole_disable_ = !0
    };
    fp = function() {
        dp && (vo().console.openConsole(ep), ep = void 0, dp = !1)
    };
    gp = function(a) {
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
    hp = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(ck(a, 1)), c.push(Cm(a)), c.push(ck(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.oh(c.join(":")).toString() : "0"
    };
    ip = function(a) {
        if (!_.Rk(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    kp = function(a, b, c, d, e) {
        var f = void 0,
            g = Bl(a.context, b, e);
        _.pb(c, d, g) && (f = function() {
            return void _.$f(c, d, g)
        }, _.jp(a, f));
        return f
    };
    mp = function(a) {
        a = (_.Rk(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!lp(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    np = function(a) {
        return Math.round(Number(Um(a)))
    };
    op = function(a) {
        var b = a.parentElement;
        return !b || 1 >= b.children.length ? !1 : _.z(Array, "from").call(Array, b.children).some(function(c) {
            return c !== a && !(_.H = ["script", "style"], _.z(_.H, "includes")).call(_.H, c.tagName.toLowerCase())
        })
    };
    qp = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.pp(a, c), a = a.parentElement
    };
    rp = function(a, b, c, d, e) {
        _.pp(a, {
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
        }, c(-b), _.pp(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.pp(a, f)), !0) : !1
    };
    tp = function(a, b, c, d, e, f, g, h, k, l) {
        window.setTimeout(function() {
            var m = Cm(d);
            if (window.IntersectionObserver) {
                var n, p = null != (n = $m(c, b)) ? n : Sm(c, b);
                m = sp(a, b, c, e, f, g, m, h, k, l, p);
                (new window.IntersectionObserver(m, {
                    threshold: .98
                })).observe(p)
            }
        }, 500)
    };
    sp = function(a, b, c, d, e, f, g, h, k, l, m) {
        var n = window.location && "#flexibleAdSlotTest" === window.location.hash ? 1 : _.Lf(up);
        return Bl(a, 459, function(p, r) {
            (p = null == p ? void 0 : p[0]) && vp(a, b, c, d, e, f, g, h, k, l, r, m, p, n)
        })
    };
    vp = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        var v = p.boundingClientRect,
            w = p.intersectionRatio,
            x = window.innerWidth,
            B = v.left,
            C = v.right,
            F = 0 > B + 2,
            G = 0 < C - (x + 2);
        (.98 <= w || F || G) && wp(k, function(P) {
            m.unobserve(n);
            var R = F || G;
            var K = new xp;
            yp(n, R) && K.set(10);
            if (void 0 !== h && op(n)) {
                var Z, qa = null == (Z = Sm(c, b)) ? void 0 : Z.parentElement,
                    wa;
                Z = qa ? null == (wa = Tm(qa, window)) ? void 0 : wa.width : void 0;
                h !== Z && K.set(16)
            }
            R ? (K.set(8), R = zp(K)) : R = Ap(b, c, w, K);
            wa = Bp(c, n, f);
            K = wa.gl;
            wa = wa.jl;
            Wo(P, a);
            Xo(P, "qid", l);
            Xo(P, "iu", c.getAdUnitPath());
            Xo(P, "e", String(R));
            F && Xo(P, "ofl", String(B));
            G && Xo(P, "ofr", String(C - x));
            Xo(P, "ret", e + "x" + f);
            Xo(P, "req", g);
            Xo(P, "bm", String(d));
            Xo(P, "efh", Number(K));
            Xo(P, "stk", Number(wa));
            Xo(P, "ifi", Cp(window))
        }, r)
    };
    Ap = function(a, b, c, d) {
        var e = $m(b, a) || Sm(b, a);
        try {
            var f = e.getBoundingClientRect(),
                g = f.left,
                h = f.top,
                k = f.width,
                l = f.height,
                m = Sm(b, a),
                n = Tm(m, window);
            if ("hidden" === n.visibility || "none" === n.display) return zp(d);
            var p = np(n.getPropertyValue("border-top-width") || 0) + 1;
            b = g + k;
            f = h + l;
            c = (1 - c) * l;
            var r = a.elementsFromPoint(g + p + 2, h + c + p);
            var v = a.elementsFromPoint(b - p - 2, h + c + p);
            var w = a.elementsFromPoint(b - p - 2, f - c - p);
            var x = a.elementsFromPoint(g + p + 2, f - c - p);
            var B = a.elementsFromPoint(b / 2, f - c - p)
        } catch (F) {
            return d.set(1), zp(d)
        }
        if (!(r && r.length && v && v.length && w && w.length && x && x.length && B && B.length)) return d.set(7), zp(d);
        a = function(F, G) {
            for (var P = !1, R = 0; R < F.length; R++) {
                var K = F[R];
                if (P) {
                    var Z = Tm(K, window);
                    if ("hidden" !== Z.visibility && !Dp(K) && !C(e, K)) {
                        d.set(G);
                        "absolute" === Z.position && d.set(11);
                        break
                    }
                } else e === K && (P = !0)
            }
        };
        Ep(e) && d.set(9);
        var C = function(F, G) {
            return Fp(F, G) || Fp(G, F)
        };
        g = r[0];
        e === g || C(e, g) || Dp(g) || d.set(2);
        g = v[0];
        e === g || C(e, g) || Dp(g) || d.set(3);
        g = w[0];
        e === g || C(e, g) || Dp(g) || d.set(4);
        g = x[0];
        e === g || C(e, g) || Dp(g) || d.set(5);
        if (Dp(e)) return zp(d);
        a(r, 12);
        a(v, 13);
        a(w, 14);
        a(x, 15);
        a(B, 6);
        return zp(d)
    };
    yp = function(a, b) {
        var c = !1,
            d = !1;
        return Gp(a, function(e, f) {
            d = d || "scroll" === e.overflowX || "auto" === e.overflowX;
            c = c || "flex" === e.display;
            return b && c && d || "listbox" === f.role
        })
    };
    Bp = function(a, b, c) {
        var d = (a = Sm(a)) && Tm(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        Pj(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = Oj(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.z(l, "endsWith").call(l, "px") ? np(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.z(Mj, "includes").call(Mj, l) || (e = !1)
                }
            f || (k = Tm(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            gl: e,
            jl: f
        }
    };
    Dp = function(a) {
        return Gp(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    Ep = function(a) {
        return Gp(a, function(b) {
            var c;
            return (_.H = ["left", "right"], _.z(_.H, "includes")).call(_.H, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    Hp = function(a, b, c, d) {
        var e = _.Zf("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Ip = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    Kp = function(a, b, c) {
        var d = new _.u.Map;
        a = _.y(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var f = b[e.getDomId()];
            f = ci(f, Jp, 28) ? _.um(f, Jp, 28) : _.um(c, Jp, 34);
            var g = void 0;
            d.set(e, (null == (g = f) ? 0 : null != Fn(g, 1)) ? _.Q(f, 1) ? 2 : 1 : 0)
        }
        return d
    };
    Np = function(a, b, c) {
        var d, e, f = [],
            g = [];
        a = _.y(a);
        for (d = a.next(); !d.done; d = a.next())
            if (d = d.value, 1 === b.get(d)) f.push(null), g.push(null);
            else {
                var h = c,
                    k = Sm(d);
                d = Lp((null == k ? void 0 : k.parentElement) && Tm(k.parentElement, h) || null);
                if (!d || 1 === d[0] && 1 === d[3]) {
                    var l = e = d = void 0,
                        m = null != (l = null == k ? void 0 : k.parentElement) ? l : null;
                    l = null != (e = Mm(m)) ? e : new _.Lm(0, 0);
                    Mp(l, m, h, 100);
                    e = null != (d = Mm(k)) ? d : new _.Lm(0, 0);
                    Mp(e, k, h, 1); - 1 === l.height && (e.height = -1);
                    d = l;
                    d = d.width + "x" + d.height;
                    e = e.width + "x" + e.height
                } else e = d = "-1x-1";
                f.push(d);
                g.push(e)
            }
        return {
            Dl: f,
            vm: g
        }
    };
    Mp = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b || !Qj(b, c, d))) {
                a: {
                    do {
                        var f = Tm(b, c);
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
    Pp = function(a, b, c) {
        var d = 0 !== (0, _.Op)(),
            e = Am(!0, c, d).width,
            f = [],
            g = [],
            h = [];
        if (null !== c && c != c.top) {
            var k = Am(!1, c).width;
            (-12245933 === e || -12245933 === k || k < e) && h.push(8)
        } - 12245933 !== e && (1.5 * e < c.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * c.outerWidth < e && h.push(10));
        a = _.y(a);
        for (d = a.next(); !d.done; d = a.next())
            if (k = d.value, 1 === b.get(k)) f.push(null), g.push(null);
            else {
                d = new xp;
                var l = Sm(k);
                k = 0;
                var m = !1,
                    n = !1,
                    p = !1;
                if (l) {
                    for (var r = 0, v = l; v && 100 > r; r++, v = v.parentElement) {
                        var w = Tm(v, c);
                        if (w) {
                            var x = w,
                                B = x.display,
                                C = x.overflowX;
                            if ("visible" !== x.overflowY && (d.set(2), (x = Mm(v)) && (k = k ? Math.min(k, x.width) : x.width), d.get(9))) break;
                            Ip(w) && d.set(9);
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
                l = _.y(h);
                for (m = l.next(); !m.done; m = l.next()) d.set(m.value);
                f.push(zp(d));
                g.push(k)
            }
        return {
            Ok: f,
            Bl: g
        }
    };
    Qp = function(a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = _.y(e);
            g = a.next();
            for (f = {}; !g.done; f = {
                    Sg: void 0
                }, g = a.next()) {
                e = g.value;
                g = e.code;
                e = e.bids;
                var h = void 0;
                if (g && null != (h = e) && h.length && (g = Oh(g, b), f.Sg = g / 1E6, !(0 >= g))) {
                    h = void 0;
                    e = _.y(null != (h = e) ? h : []);
                    var k = e.next();
                    for (h = {}; !k.done; h = {
                            Tb: void 0,
                            ti: void 0
                        }, k = e.next()) k = k.value, h.ti = "function" === typeof k.getFloor ? k.getFloor : void 0, h.Tb = hi(fi(gi(new di, 4), g), c), k.getFloor = function(l, m) {
                        return function(n) {
                            4 === _.fg(l.Tb, 1, 0) && gi(l.Tb, 1);
                            var p, r = null == (p = l.ti) ? void 0 : p.apply(this, [n]);
                            n = c ? r || {} : {
                                currency: "USD",
                                floor: m.Sg
                            };
                            return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === _.fg(l.Tb, 1, 0) && (n = fi(gi(l.Tb, 6), 1E6 * r.floor), ki(n, 3, r.currency)), r) : (r.floor || 0) > m.Sg ? (1 === _.fg(l.Tb, 1, 0) && fi(gi(l.Tb, 5), 1E6 * r.floor), r) : n : n
                        }
                    }(h, f), d.set(k.getFloor, h.Tb)
                }
            }
        }
    };
    Rp = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return vo().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    Tp = function(a, b) {
        return Sl(b, function() {
            return new Sp(a, b)
        })
    };
    Up = function(a, b) {
        for (var c = new xp, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return zp(c)
    };
    Wp = function(a, b) {
        return Vp(a, b)
    };
    Vp = function(a, b) {
        return a.map(function(c) {
            return b(c)
        })
    };
    Zp = function(a, b, c) {
        var d = {
                Yb: new Xp,
                lc: new Xp,
                kc: new Xp,
                jc: new Xp,
                Uc: new Xp,
                Ic: new Xp,
                tf: new Xp,
                uf: new Xp,
                Lf: new Xp
            },
            e = new nk;
        J(e, new Yp(a, b, c, window, d));
        wk(e);
        return {
            Ah: d,
            Ka: e
        }
    };
    aq = function(a, b, c, d, e, f, g) {
        if (f) {
            var h = {
                    ih: new Xp
                },
                k = new nk;
            a = new $p(a, b, c, d, e, f, g, h);
            J(k, a);
            wk(k);
            return {
                Wj: h,
                Ka: k
            }
        }
    };
    cq = function(a, b, c, d, e) {
        if (b && !(.01 < Math.random())) {
            var f = new nk;
            J(f, new bq(a, c, d, e, b.Yb));
            wk(f)
        }
    };
    eq = function(a, b) {
        var c;
        return !(null != (c = dq(b, 22)) ? !c : !_.Q(a, 15))
    };
    gq = function(a, b, c, d) {
        for (var e = _.y(_.z(Object, "entries").call(Object, fq)), f = e.next(); !f.done; f = e.next()) {
            var g = _.y(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && O(a, g(String(c), d))
        }
    };
    jq = function(a, b, c) {
        a.jm && a.Ra.fh(bj(_.z(Object, "assign").call(Object, {}, a, {
            Mc: a.Al,
            payload: function() {
                var d = new cj;
                var e = hq(d, iq, 1);
                e = _.pi(e, 1, b);
                _.pi(e, 2, c);
                return d
            }
        })))
    };
    mq = function(a, b, c) {
        c = (c = void 0 === c ? null : c) ? bh(c) : null;
        b = void 0 === b ? !1 : b;
        var d = _.E(_.kq);
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
            e |= Hi(a, 2500, d);
            d || (e |= Ii(a));
            !b || c && lq(c) || (e |= 4194304)
        } catch (h) {
            e |= 32
        }
        return e
    };
    nq = function(a) {
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
    rq = function(a, b, c) {
        a = nq(a);
        if (!a) return null;
        if (10 === a) return 0;
        var d = 0;
        if (!(_.H = [11, 10], _.z(_.H, "includes")).call(_.H, a)) {
            d |= b !== b.top ? 512 : 0;
            var e = _.Bj(b);
            e = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && e.adCount ? 1 == a || 2 == a ? !(!e.adCount[1] && !e.adCount[2]) : (e = e.adCount[a]) ? 1 <= e : !1 : !1;
            e && (d |= 64);
            if (d) return d
        }
        if (2 === a || 1 === a) {
            var f = {
                pa: b,
                ff: _.oq,
                Dh: c ? a : void 0,
                Lm: _.E(_.pq)
            };
            0 === (0, _.Op)() && (f.ff = 3E3, f.Dg = 650);
            d |= _.Vi(f)
        } else if (8 === a) d |= mq(b);
        else if (3 === a || 4 === a) {
            var g = a;
            e = !_.E(qq);
            g = void 0 === g ? null : g;
            c = b !== b.top ? 512 : 0;
            Ri(null == (f = b.navigator) ? void 0 : f.userAgent) && (c |= 1048576);
            f = b.innerWidth;
            1200 > f && (c |= 65536);
            var h = b.innerHeight;
            650 > h && (c |= 2097152);
            g && 0 === c && (g = 3 === g ? "left" : "right", (f = _.Ij({
                pa: b,
                zi: e,
                ij: 1,
                position: g,
                ja: f,
                sa: h,
                tc: new _.u.Set,
                minWidth: 120,
                minHeight: 500,
                zc: !1
            })) ? _.Bj(b).sideRailPlasParam.set(g, f.width + "x" + f.height + "_" + String(g).charAt(0)) : c |= 16);
            d |= c
        } else 11 !== a && 42 !== a && (d |= 32);
        d || (b = _.Bj(b), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return d
    };
    uq = function(a, b, c, d) {
        var e = d.Wh,
            f = d.adUnitPath;
        d = void 0 === d.xb ? !1 : d.xb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && sq(e)) ? tq(a, b, f, c, {
            Sb: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            xb: d
        }) : (b.error(Vl("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    sq = function(a) {
        switch (a) {
            case 6:
                return !0;
            case 7:
                return !0;
            default:
                return !!lp(en, function(b) {
                    return b === a
                })
        }
    };
    tq = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            Sb: e.Sb,
            format: f,
            xb: e.xb
        });
        a = b.slotId;
        b = b.Fa;
        a && b && (_.$h(b, 15, f), _.jp(a, function() {
            var g = window,
                h = nq(f);
            if (h) {
                g = _.Bj(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    vq = function(a, b) {
        var c;
        return !(null != (c = dq(a, 11)) ? !c : !_.Q(b, 10))
    };
    wq = function(a, b, c, d) {
        if (a = Sm(a, b)) {
            var e;
            if (c = null != (e = dq(c, 24)) ? e : _.Q(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    zq = function(a, b) {
        var c = b.L,
            d = b.O;
        b = b.aa;
        a = _.y(a.X);
        for (var e = a.next(); !e.done; e = a.next())
            if (e = e.value, _.xq(c, e)) {
                var f = d,
                    g = f.ba;
                f = f.T[e.getDomId()];
                vq(f, g) && wq(e, b, f, g);
                yq(c, e);
                var h = void 0,
                    k = void 0;
                null != (h = null != (k = dq(f, 10)) ? k : _.Q(g, 11)) && h && wq(e, b, f, g)
            }
        return {}
    };
    Bq = function(a, b, c) {
        var d = new nk;
        a = new Aq(a, b, c);
        J(d, a);
        wk(d)
    };
    Dq = function(a, b) {
        var c, d, e, f, g;
        return _.rb(function(h) {
            c = a;
            d = c.dd;
            e = b;
            f = e.lg;
            return (null != (g = d) ? g : f.dd()) ? h.return(Cq(f)) : h.return(null)
        })
    };
    Hq = function(a, b, c) {
        var d = window,
            e = new nk;
        d = new Eq(d);
        _.S(e, d);
        a = new Fq(a, d, c, _.tm(150));
        J(e, a);
        b = new Gq(879, Dq, {
            dd: b ? a.Cc : void 0
        }, {
            lg: d,
            no: !!b
        }, void 0, e.C.g);
        b = J(e, b).output;
        wk(e);
        return {
            Cc: a.Cc,
            mg: b,
            Ka: e
        }
    };
    Iq = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Ch: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Ch: a.length - b.length + 8
        }
    };
    Jq = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Kq = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Jq(a, b)
    };
    Lq = function(a) {
        var b, c;
        return null != (c = null == (b = _.z(a, "find").call(a, function(d) {
            return "page_url" === ck(d, 1)
        })) ? void 0 : jm(b)[0]) ? c : null
    };
    Mq = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Nq = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        ll(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    Oq = function(a, b) {
        var c = b.T;
        return !!Lq(b.ba.Pa()) || a.some(function(d) {
            return null !== Lq(c[d.getDomId()].Pa())
        })
    };
    Qq = function() {
        var a = void 0 === a ? window : a;
        Pq = _.Vf(a)
    };
    Rq = function(a, b) {
        var c = _.Zf("DIV");
        c.id = a;
        c.textContent = b;
        _.pp(c, {
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
    Sq = function(a, b) {
        if ("undefined" !== typeof IntersectionObserver) return new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    Vq = function(a, b, c, d, e) {
        var f = void 0 === f ? _.u.globalThis.IntersectionObserver : f;
        if (!b) return {
            wg: e
        };
        var g = null != Bi(b, 1) ? null != Tq(b) && 0 !== (0, _.Op)() ? Bi(b, 1) * Tq(b) : Bi(b, 1) : null;
        if (null == g) return {
            wg: e
        };
        b = new nk;
        a = new Uq(a, d, c, g, e, f);
        J(b, a);
        wk(b);
        return {
            wg: a.output,
            ol: b
        }
    };
    er = function(a, b, c, d, e) {
        var f = window,
            g = new nk,
            h = J(g, new Wq(a, b, Xq, function(m) {
                return Yq("i-adframe-load", m.detail.data)
            })),
            k = J(g, new Wq(a, b, Xq, function(m) {
                return Yq("i-dismiss", m.detail.data)
            }));
        h = 0 < _.Lf(Zq) ? J(g, new $q(a, h.output, void 0)).output : h.output;
        h = J(g, new ar(a, b, c, h));
        J(g, new br(a, f, d, e, h.output));
        if (f.top === f) var l = J(g, new cr(a, f, h.output)).output;
        J(g, new dr(a, b, c, h.output, k.output, l));
        return g
    };
    Yq = function(a, b) {
        try {
            var c = JSON.parse(b);
            return "sth" === c.googMsgType && c.msg_type === a
        } catch (d) {}
        return !1
    };
    ir = function() {
        var a = {};
        return a[576944485] = new fr, a[578856259] = new gr(function() {
            return _.Lf(hr)
        }), a
    };
    jr = function(a, b) {
        a.V.log(576944485, bj, _.z(Object, "assign").call(Object, {}, a, b))
    };
    kr = function(a) {
        return window.IntersectionObserver && new IntersectionObserver(a, {
            threshold: [.5]
        })
    };
    mr = function(a) {
        return (_.H = [4, 5, 7, 1], _.z(_.H, "includes")).call(_.H, lr(a))
    };
    or = function(a, b, c) {
        return new nr(c, a, Xq, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    rr = function(a, b, c) {
        if (_.z(Object, "keys").call(Object, a).some(function(d) {
                return (_.H = _.z(Object, "values").call(Object, pr), _.z(_.H, "includes")).call(_.H, Number(d))
            })) return !0;
        qr("taxonomies", a, b, c);
        return !1
    };
    ur = function(a, b, c, d, e) {
        if (null == a) qr("taxonomy", a, d, e);
        else {
            var f = Number(a);
            (_.H = _.z(Object, "values").call(Object, gn), _.z(_.H, "includes")).call(_.H, Number(f)) ? a = !0 : (qr("taxonomy", a, d, e), a = !1);
            a && (null == b ? qr("taxonomyData", b, d, e) : sr(b, d, e) && tr(f, b, c, d))
        }
    };
    Dr = function(a, b, c, d, e) {
        if (!vr(a)) qr("taxonomy", a, d, e);
        else if (null == b) qr("taxonomyData", b, d, e);
        else if (sr(b, d, e) && wr(_.z(b, "values"), d, b) && (b = xr(a, _.z(b, "values"), d, b), b.size)) {
            b = [].concat(_.qi(b));
            e = new yr;
            var f = zr.get(a);
            e = _.pi(e, 3, f);
            Ar(c, Br(e, b));
            d.info(Cr(Dn(b), Dn(a)))
        }
    };
    sr = function(a, b, c) {
        if (Rg(a) && a.hasOwnProperty("values")) return !0;
        qr("taxonomyData", a, b, c);
        return !1
    };
    tr = function(a, b, c, d) {
        if (wr(_.z(b, "values"), d, b)) {
            var e = xr(a, _.z(b, "values"), d, b);
            e.size && (b = (_.H = _.ak(c, yr, 1), _.z(_.H, "find")).call(_.H, function(f) {
                return _.fg(f, 1, 0) === a
            }), e = [].concat(_.qi(e)), b ? Br(b, e) : Ar(c, Br(Er(new yr, a), e)), d.info(Cr(Dn(e), Dn(a))))
        }
    };
    wr = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        qr("taxonomyData.values", a, b, c);
        return !1
    };
    xr = function(a, b, c, d) {
        if (!Wg()(b)) return qr("taxonomyData.values", b, c, d), new _.u.Set;
        d = new _.u.Set;
        var e = !1;
        b = _.y(b);
        for (var f = b.next(); !f.done; f = b.next()) {
            f = f.value;
            if (10 <= d.size) {
                e = !0;
                break
            }
            d.add(f)
        }
        e && O(c, Fr(Dn(a), Dn(10)));
        return d
    };
    qr = function(a, b, c, d) {
        O(c, Cn("googletag.setConfig.pps", Dn(d), a, Dn(b)))
    };
    vr = function(a) {
        return zr.has(a)
    };
    Hr = function(a) {
        return Gr.has(a)
    };
    Lr = function(a, b) {
        if (3 === _.Ir(b)) {
            var c = {
                    ce: new Jr
                },
                d = new nk;
            J(d, new Kr(a, b, c.ce));
            wk(d);
            return {
                Ka: d,
                Nl: c
            }
        }
    };
    Nr = function(a, b, c, d, e, f) {
        if (b) {
            var g = {
                    Tg: new Xp
                },
                h = new nk;
            J(h, new Mr(a, b, c, g, d, e, f));
            wk(h);
            return {
                Ka: h,
                vf: g
            }
        }
    };
    Pr = function(a) {
        Or = a
    };
    Rr = function(a, b, c, d) {
        Dk(b, d, function(e, f) {
            Fl(a, e, f);
            var g, h;
            null == (h = (g = window.console).error) || h.call(g, f)
        }, function() {
            return void O(c, Qr())
        })
    };
    Ur = function(a, b, c) {
        if (!_.E(Sr) && !Wn()) {
            var d = {
                    Hg: new Xp,
                    yb: new Xp
                },
                e = new nk;
            J(e, new Tr(a, b, c, d));
            wk(e);
            return {
                td: d,
                Ka: e
            }
        }
    };
    Wr = function(a, b, c, d, e) {
        var f = new nk;
        a = new Vr(a, b, c, d, e);
        J(f, a);
        wk(f);
        return f
    };
    oa = function(a, b) {
        a: {
            b = b[0];a = a[0];
            for (var c = _.ma, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = _.ma(b.length, a.length)
        }
        return b
    };
    Xr = function(a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.z(a, "includes").call(a, 0)
    };
    Yr = function(a) {
        if (Xr(a)) return {
            size: [],
            Yg: !0
        };
        if (Array.isArray(a) && 0 < a.length && "number" !== typeof a[0]) {
            var b = !1;
            a = a.filter(function(c) {
                c = Xr(c);
                b = b || c;
                return !c
            });
            return {
                size: a,
                Yg: b
            }
        }
        return {
            size: a,
            Yg: !1
        }
    };
    $r = function(a, b) {
        var c = b.T;
        return Wp(a, function(d) {
            return Zr(c[d.getDomId()]).join("&")
        })
    };
    Zr = function(a) {
        a = as(a);
        var b = [];
        _.Bn(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    as = function(a) {
        for (var b = {}, c = _.y(cm(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.I(d, 1)] = jm(d);
        a = mi(a, 8, 2);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    bs = function(a) {
        var b = !1,
            c = _.ak(a, fm, 2).map(function(d) {
                var e = _.I(d, 1);
                b = "excl_cat" === e;
                d = jm(d);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = mi(a, 3, 2);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    ds = function(a, b, c) {
        var d = window,
            e = !lh(d.isSecureContext, d.document);
        if (mh(d.isSecureContext, d, d.document) || !e) return e = new nk, a = new cs(a, d, b, c), J(e, a), wk(e), a.j
    };
    fs = function(a, b, c, d, e) {
        if (c) {
            var f = {
                    qe: new Xp,
                    re: new Xp,
                    zd: new Xp
                },
                g = new nk;
            J(g, new es(a, b, c, d, f, e));
            wk(g);
            return {
                Ka: g,
                Cm: f
            }
        }
    };
    gs = function(a) {
        return "gads_privacy_sandbox_td_buyerlist__" + a
    };
    is = function(a, b) {
        return a.filter(function(c) {
            return hs(c, 2) > b
        })
    };
    ks = function(a, b) {
        a = new _.u.Map(a.map(function(e) {
            return [_.I(e, 1), e]
        }));
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.get(_.I(c, 1));
            d ? js(d, Math.max(hs(c, 2), hs(d, 2))) : a.set(_.I(c, 1), c)
        }
        return _.z(Array, "from").call(Array, _.z(a, "values").call(a))
    };
    os = function(a, b, c, d) {
        if (ls(b, c, d)) return new _.u.Map;
        c = new _.u.Map(_.z(Object, "entries").call(Object, b).filter(function(k) {
            var l = _.y(k);
            k = l.next().value;
            l = l.next().value;
            return _.z(k, "startsWith").call(k, "gads_privacy_sandbox_td_buyerlist__") && l
        }).map(function(k) {
            var l = _.y(k);
            k = l.next().value;
            l = l.next().value;
            return [k, ms(l)]
        }));
        d = _.y(c);
        for (var e = d.next(); !e.done; e = d.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            f = f.next().value;
            var g = _.ak(f, ns, 1),
                h = is(g, a);
            0 === h.length ? (c.delete(e), b.removeItem(e)) : h.length < g.length && (_.om(f, 1, h), b.setItem(e, bl(f)))
        }
        return c
    };
    ls = function(a, b, c) {
        if (!_.Q(b, 3)) return !1;
        b = String(_.oh(c + "-" + _.I(b, 2) + _.I(b, 4) + _.Q(b, 3)));
        if (a.getItem("gads_privacy_sandbox_tcf_hash") === b) return !1;
        c = _.y(_.z(Object, "keys").call(Object, a).filter(function(e) {
            return _.z(e, "startsWith").call(e, "gads_privacy_sandbox_td_buyerlist__")
        }));
        for (var d = c.next(); !d.done; d = c.next()) a.removeItem(d.value);
        a.setItem("gads_privacy_sandbox_tcf_hash", b);
        return !0
    };
    ps = function(a) {
        return null !== a && _.z(Number, "isFinite").call(Number, a) && 0 <= a
    };
    qs = function(a) {
        return (_.H = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"], _.z(_.H, "includes")).call(_.H, a)
    };
    ss = function(a, b, c, d, e) {
        if (b) {
            var f = b.Wb,
                g = b.Xl;
            if (b.lh && 4 === f) {
                b = new Xp;
                f = new Xp;
                if (!g) return b.G({
                    kind: 1,
                    reason: 1
                }), f.G(!1), {
                    sj: {
                        aj: b,
                        si: f
                    }
                };
                g = new nk;
                a = new rs(a, c, d, e, b, f);
                J(g, a);
                wk(g);
                return {
                    sj: {
                        aj: b,
                        si: f
                    },
                    Hm: g
                }
            }
        }
    };
    us = function(a) {
        var b = a.Vf,
            c = a.Gb,
            d = void 0 === a.Gh ? [] : a.Gh,
            e = a.interestGroupBuyers,
            f = a.Xk,
            g = a.fo;
        a = a.Sl;
        var h = _.Lf(ts),
            k = {};
        void 0 !== f && (k["https://googleads.g.doubleclick.net"] = f, k["https://td.doubleclick.net"] = f);
        if (g) {
            g = _.y(g);
            for (var l = g.next(); !l.done; l = g.next()) {
                var m = _.y(l.value);
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
            componentAuctions: [e].concat(_.qi(d)),
            resolveToConfig: b.resolveToConfig.promise
        };
        c.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        return c
    };
    vs = function(a, b) {
        var c = b.Vf;
        c.topLevelSellerSignals.resolve(a.sellerSignals);
        c.directFromSellerSignals.resolve(a.directFromSellerSignals);
        c.directFromSellerSignalsHeaderAdSlot.resolve(a.directFromSellerSignalsHeaderAdSlot);
        c.resolveToConfig.resolve(!!a.resolveToConfig);
        var d;
        a = null == (d = a.componentAuctions) ? void 0 : _.z(d, "find").call(d, function(m) {
            return qs(m.seller)
        });
        var e;
        d = null != (e = null == a ? void 0 : a.perBuyerCumulativeTimeouts) ? e : {};
        b = _.y(b.interestGroupBuyers);
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
    xs = function(a, b) {
        if (_.E(ws) && !ps(b)) return [];
        var c = Math.round(b);
        return a.map(function(d) {
            var e = new ns;
            d = _.aj(e, 1, d);
            return js(d, c)
        })
    };
    zs = function(a, b, c) {
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
        ys(d)
    };
    As = function(a, b, c, d, e) {
        a.Mb.G(e);
        a.Ga.G(c);
        a.Ja.G(d);
        null == b || b.G(!1)
    };
    Is = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n, p, r, v, w;
        return _.rb(function(x) {
            if (1 == x.g) return ("string" !== typeof a || _.z(a, "startsWith").call(a, "urn:")) && Bs.deprecatedURNToURL && Bs.deprecatedReplaceInURN ? x.yield(Bs.deprecatedURNToURL(a), 2) : x.return();
            c = x.A;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Cs)) ? f : []).forEach(function(B) {
                d[B] = e
            });
            g = b.Uk || "";
            (null != (h = c.match(Ds)) ? h : []).forEach(function(B) {
                d[B] = g
            });
            k = b.Tj || "";
            (null != (l = c.match(Es)) ? l : []).forEach(function(B) {
                d[B] = k
            });
            m = b.Pj || "";
            (null != (n = c.match(Fs)) ? n : []).forEach(function(B) {
                d[B] = m
            });
            p = b.Nj || "";
            (null != (r = c.match(Gs)) ? r : []).forEach(function(B) {
                d[B] = p
            });
            v = b.Zl || "";
            (null != (w = c.match(Hs)) ? w : []).forEach(function(B) {
                d[B] = v
            });
            return x.yield(Bs.deprecatedReplaceInURN(a, d), 0)
        })
    };
    Js = function(a) {
        return "function" === typeof FencedFrameConfig && a instanceof FencedFrameConfig
    };
    Ks = function(a, b, c, d, e, f, g, h) {
        var k = 3 === b,
            l = 2 === b,
            m = 1 === b,
            n = f.getEscapedQemQueryId(),
            p = _.I(f, 6);
        wp("run_ad_auction_stats", function(r) {
            Wo(r, a);
            Xo(r, "duration_ms", c);
            Xo(r, "applied_timeout_ms", d);
            Xo(r, "timed_out", l ? 1 : 0);
            Xo(r, "error", k ? 1 : 0);
            Xo(r, "auction_skipped", m ? 1 : 0);
            Xo(r, "auction_winner", h ? 1 : 0);
            Xo(r, "thread_release_only", _.Q(f, 15) ? 1 : 0);
            Xo(r, "winner_qid", null != n ? n : "");
            Xo(r, "xfpQid", null != p ? p : "");
            Xo(r, "publisher_tag", "gpt");
            e && Xo(r, "parallel", "1");
            0 < g && Xo(r, "nc", g)
        }, 1)
    };
    Ls = function(a, b, c, d, e) {
        var f = e.getEscapedQemQueryId(),
            g = _.I(e, 6);
        wp("run_ad_auction_complete", function(h) {
            Wo(h, a);
            Xo(h, "duration_ms", Math.round(d));
            Xo(h, "applied_timeout_ms", c);
            Xo(h, "auction_has_winner", b);
            f && Xo(h, "winner_qid", f);
            g && Xo(h, "xfpQid", g)
        }, 1)
    };
    Ms = function(a, b) {
        var c = b.getEscapedQemQueryId(),
            d = _.I(b, 6);
        wp("pre_run_ad_auction_ping", function(e) {
            Wo(e, a);
            Xo(e, "winner_qid", null != c ? c : "");
            Xo(e, "xfpQid", null != d ? d : "");
            Xo(e, "publisher_tag", "gpt")
        }, 1)
    };
    Ss = function(a, b, c, d) {
        var e = Sm(a, document);
        e && Oi(e, window, d, !0);
        Ns(_.Jf(Dl), "5", Os(c.T[a.getDomId()], 20));
        Ps(a, Qs, 801, {
            Ph: null,
            isBackfill: !1
        });
        if (_.xq(b, a) && !$m(a, document)) {
            b = c.ba;
            c = c.T[a.getDomId()];
            var f;
            (null != (f = dq(c, 10)) ? f : _.Q(b, 11)) && wq(a, document, c, b)
        }
        Ps(a, Rs, 825, {
            isEmpty: !0
        })
    };
    Us = function(a) {
        if (!_.E(Ts)) return null;
        var b = new _.u.Set;
        a = _.y(_.z(a, "values").call(a));
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, _.Q(c, 2) && _.ak(c, ns, 1).forEach(function(d) {
            b.add(_.I(d, 1))
        });
        return 0 < b.size ? _.z(Array, "from").call(Array, b) : null
    };
    Ws = function(a, b, c, d, e, f, g, h, k) {
        if (b) {
            var l = b.Wb;
            if (b.lh && 0 !== l) return b = new nk, a = new Vs(a, l, c, d, e, f, g, h, k), J(b, a), wk(b), {
                Gm: a.j,
                Fm: b
            }
        }
    };
    Xs = function() {
        for (var a = _.y(_.z(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            d && (_.Fa(d, "/tag/js/gpt.js") || _.Fa(d, "/tag/js/gpt_mobile.js")) && !c.googletag_executed && b.textContent && (c.googletag_executed = !0, c = document.createElement("script"), b = bb(b.textContent), nb(c, b), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    Ys = function(a, b) {
        b = _.y(_.z(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.y(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    at = function(a, b, c) {
        var d = [];
        c = [].concat(_.qi(c.X)).slice();
        if (b) {
            if (!Array.isArray(b)) return O(a, Vl("googletag.destroySlots", [b])), !1;
            la(b);
            d = c.filter(function(e) {
                return _.z(b, "includes").call(b, e.g)
            })
        } else d = c;
        if (!d.length) return !1;
        Zs(d);
        $s(d);
        return !0
    };
    qt = function(a, b, c, d, e, f, g, h, k, l) {
        var m = vo(),
            n, p, r = M(a, 74, function(w, x, B) {
                return e.defineSlot(a, b, w, x, B)
            }),
            v = {};
        r = (v._loaded_ = !0, v.cmd = [], v._vars_ = m._vars_, v.evalScripts = function() {
            try {
                Xs()
            } catch (B) {
                Fl(a, 297, B);
                var w, x;
                null == (w = window.console) || null == (x = w.error) || x.call(w, B)
            }
        }, v.display = M(a, 95, function(w) {
            bt(c, w, e)
        }), v.defineOutOfPageSlot = M(a, 73, function(w, x) {
            return (w = uq(a, b, e, {
                Wh: x,
                adUnitPath: w
            })) ? w.g : null
        }), v.getVersion = M(a, 946, function() {
            return a.Fc ? String(a.Fc) : a.mb
        }), v.pubads = M(a, 947, function() {
            return fo(a, b, c, e, h)
        }), v.companionAds = M(a, 816, function() {
            null != n || (n = new ct(a, b, c, f));
            return Yl(a, b, n)
        }), v.content = M(a, 817, function() {
            null != p || (p = new dt(a, b, g));
            return $l(a, b, p)
        }), v.setAdIframeTitle = M(a, 729, Pr), v.getEventLog = M(a, 945, function() {
            return new et(a, b)
        }), v.sizeMapping = M(a, 90, function() {
            return new ft(a, b)
        }), v.enableServices = M(a, 91, function() {
            for (var w = _.y(gt), x = w.next(); !x.done; x = w.next()) x = x.value, x.enabled && b.info(ht()), jt(x)
        }), v.destroySlots = M(a, 75, function(w) {
            return at(b, w, e)
        }), v.enums = hn(), v.defineSlot = r, v.defineUnit = r, v.getWindowsThatCanCommunicateWithHostpageLibrary = M(a, 955, function(w) {
            return kt(k, w).map(function(x) {
                var B;
                return null == (B = $m(x, document)) ? void 0 : B.contentWindow
            }).filter(function(x) {
                return !!x
            })
        }), v.disablePublisherConsole = M(a, 93, cp), v.onPubConsoleJsLoad = M(a, 731, fp), v.openConsole = M(a, 732, function(w) {
            Yo = !0;
            var x;
            (null == (x = vo()) ? 0 : x.console) ? vo().console.openConsole(w): (w && (ep = w), dp = !0, So(a))
        }), v.setConfig = M(a, 1034, function(w) {
            if (Rg(w)) {
                if (_.z(Object, "hasOwn").call(Object, w, "pps")) {
                    var x = w.pps;
                    if (null === x) {
                        var B = lt(d, mt, 33);
                        _.hk(B, 2)
                    } else {
                        B = lt(lt(d, mt, 33), nt, 2);
                        _.hk(B, 1);
                        if (Rg(x) && x.hasOwnProperty("taxonomies")) var C = !0;
                        else O(b, Vl("googletag.setConfig.pps", [x])), C = !1;
                        if (C)
                            if (C = x.taxonomies, Rg(C) && null !== C) {
                                var F;
                                _.z(Object, "keys").call(Object, C).some(vr) ? F = Dr : rr(C, b, x) && (F = ur);
                                if (F) {
                                    x = _.y(_.z(Object, "entries").call(Object, C));
                                    for (var G = x.next(); !G.done; G = x.next()) {
                                        var P = _.y(G.value);
                                        G = P.next().value;
                                        P = P.next().value;
                                        F(G, P, B, b, C)
                                    }
                                }
                            } else qr("taxonomies", C, b, x)
                    }
                }
                _.z(Object, "hasOwn").call(Object, w, "adExpansion") && (_.hk(d, 34), B = w.adExpansion, null !== B && Rg(B) && _.z(Object, "hasOwn").call(Object, B, "enabled") && (B = B.enabled, xo(B) && (B = yo(B), _.bi(d, 34, B))));
                if (_.z(Object, "hasOwn").call(Object, w, "privacyTreatments")) {
                    w = w.privacyTreatments;
                    _.hk(d, 36);
                    a: {
                        if (null !== w && Rg(w) && _.z(Object, "hasOwn").call(Object, w, "treatments")) {
                            w = w.treatments;
                            if (ot(w) && w.every(Hr)) {
                                w = {
                                    treatments: w
                                };
                                break a
                            }
                            O(b, Vl("googletag.setConfig", [w]))
                        }
                        w = void 0
                    }
                    B = w;
                    if (void 0 !== B) {
                        w = new _.u.Set;
                        B = _.y(B.treatments);
                        for (F = B.next(); !F.done; F = B.next()) {
                            F = F.value;
                            a: {
                                switch (F) {
                                    case "disablePersonalization":
                                        C = 1;
                                        break a
                                }
                                C = void 0
                            }
                            void 0 === C ? O(b, Vl("googletag.setConfig", [F])) : w.add(C)
                        }
                        if (w.size) {
                            B = new pt;
                            F = B.F;
                            C = xc(F);
                            zc(ge(B.F));
                            F = qe(F, C, 1, !1);
                            if (Array.isArray(w))
                                for (C = 0; C < w.length; C++) F.push(Tc(w[C]));
                            else
                                for (w = _.y(w), C = w.next(); !C.done; C = w.next()) F.push(Tc(C.value));
                            _.bi(d, 36, B)
                        }
                    }
                }
            } else O(b, Vl("googletag.setConfig", [w]))
        }), v.apiReady = !0, v);
        Rr(a, m, b, l);
        Ys(m, r)
    };
    tt = function(a, b) {
        var c = new nk;
        b = new rt(a, b);
        J(c, b);
        a = new st(a, b.j);
        J(c, a);
        wk(c);
        return {
            Tc: a.Tc,
            cd: a.cd,
            Xc: a.Xc,
            Lb: a.Lb,
            rd: a.rd,
            vd: a.vd,
            hc: a.hc,
            Kb: a.Kb,
            Ml: c
        }
    };
    Ut = function(a, b, c, d, e, f, g, h, k) {
        var l = window,
            m = an(),
            n = new nk,
            p = new ut(a, l);
        p = J(n, p).output;
        var r = new nk;
        var v = new vt(a, l);
        J(r, v);
        wk(r);
        r = {
            Il: v.j
        };
        _.E(wt) && J(n, new xt(a, l));
        if (Ka()) {
            v = {
                Ui: new Xp
            };
            var w = new nk;
            J(w, new Et(a, window, v.Ui));
            wk(w)
        } else v = void 0;
        var x = _.E(Ft);
        w = l.navigator;
        l = kh(l.isSecureContext, l.navigator, l.document);
        l = !x && l;
        x = _.Lf(Gt);
        var B = !!w.getInterestGroupAdAuctionData;
        w = _.E(Ht) && !!w.createAuctionNonce;
        l = {
            lh: l,
            Wb: x,
            Xl: B,
            Rj: w
        };
        if (e)
            if (_.E(It)) {
                var C = tt(a, e);
                B = C.rd;
                x = C.Xc;
                w = C.cd;
                var F = C.Tc;
                var G = C.Lb,
                    P = C.vd,
                    R = C.hc;
                C = C.Kb;
                var K, Z = new Jt(a, document, vo(), b, m, c, null != (K = window.location.hash) ? K : "");
                J(n, Z);
                b = new Kt(a, vo(), null, b, m, c, B);
                J(n, b);
                m = new Lt(a, x);
                J(n, m);
                h = new Mt(a, window, w, h);
                J(n, h);
                if (f = Zp(a, f, F)) var qa = f.Ah;
                e = Hq(a, e, h.j);
                K = e.Cc;
                F = e.mg;
                _.S(n, e.Ka);
                e = new Nt(a, F);
                J(n, e);
                f = new Ot(a, F);
                J(n, f);
                c = Mo(a, c, d, window, K, F, 2).kb;
                if (_.E(Pt)) {
                    K = new Qt(a, window.navigator, c);
                    var wa = K.j;
                    J(n, K)
                }
                K = void 0;
                _.E(Rt) && (d = new St(a, d, window, c), K = d.output, J(n, d));
                if (d = Ur(a, G, c)) var aa = d.td;
                d = ds(a, p, c);
                Wr(a, g, k, c, P);
                F = {
                    Kd: qa,
                    td: aa,
                    Ni: h.j,
                    Hh: m.output,
                    Bb: b.Bb,
                    Lb: G,
                    Yc: e.Yc,
                    di: f.j,
                    hc: R,
                    se: d,
                    jg: K,
                    Mh: wa,
                    Kb: C
                }
            } else {
                a = new Tt(a, b, m, c, d, e, f, g);
                g = new nk;
                _.S(a, g);
                m = tt(a.context, a.g);
                c = m.rd;
                e = m.Xc;
                b = m.cd;
                f = m.Tc;
                qa = m.Lb;
                wa = m.vd;
                aa = m.hc;
                d = m.Kb;
                _.S(a, m.Ml);
                m = new Jt(a.context, document, vo(), a.j, a.l, a.R, null != (C = window.location.hash) ? C : "");
                J(g, m);
                c = new Kt(a.context, vo(), null, a.j, a.l, a.R, c);
                J(g, c);
                e = new Lt(a.context, e);
                J(g, e);
                h = new Mt(a.context, window, b, h);
                J(g, h);
                if (f = Zp(a.context, a.fb, f)) G = f.Ah, _.S(a, f.Ka);
                f = Hq(a.context, a.g, h.j);
                b = f.Cc;
                m = f.mg;
                _.S(g, f.Ka);
                f = new Nt(a.context, m);
                J(g, f);
                C = new Ot(a.context, m);
                J(g, C);
                m = Mo(a.context, a.R, a.L, window, b, m, 2);
                b = m.kb;
                _.S(a, m.Ka);
                _.E(Pt) && (m = new Qt(a.context, window.navigator, b), P = m.j, J(g, m));
                m = void 0;
                _.E(Rt) && (K = new St(a.context, a.L, window, b), m = K.output, J(g, K));
                if (K = Ur(a.context, qa, b)) R = K.td, _.S(a, K.Ka);
                K = ds(a.context, p, b);
                _.S(a, Wr(a.context, a.D, k, b, wa));
                wk(g);
                F = {
                    Kd: G,
                    td: R,
                    Ni: h.j,
                    Hh: e.output,
                    Bb: c.Bb,
                    Lb: qa,
                    Yc: f.Yc,
                    di: C.j,
                    hc: aa,
                    se: K,
                    jg: m,
                    Mh: P,
                    Kb: d
                }
            }
        wk(n);
        return {
            Hl: r,
            Rl: v,
            Uf: p,
            Em: l,
            Ge: {
                kd: new _.u.Set
            },
            Ib: F
        }
    };
    Vt = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver && new IntersectionObserver(a, b)
    };
    Ku = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F) {
        var G = new nk,
            P = Am(!0, window),
            R = k.ba,
            K = k.T[e.getDomId()],
            Z = C.Uf,
            qa = C.Ge.kd,
            wa, aa = null == (wa = C.Ib) ? void 0 : wa.se,
            ha = new Wt(a, window);
        J(G, ha);
        var vb = m.height,
            Ta = m.width,
            db = m.tb,
            Ab = m.Na,
            Pa = m.Gd,
            Ib = m.isBackfill,
            jd = m.Fb,
            cc = m.Tk,
            Zb = m.eb,
            Ec = m.Mf,
            jc = m.oh,
            dc = m.ug,
            Id = m.Qb,
            Oc = m.Ye,
            lf = m.Jb,
            ve = m.Sa,
            Jd = m.na,
            ng = m.Ug,
            og = m.kk,
            mf = m.Pf,
            Pc = new Xp;
        Pc.G(p);
        var Kd = new Xt(a, window.top, Pc);
        J(G, Kd);
        var we = new Yt(a, lr(K), P.height, Zb, vb);
        J(G, we);
        var Wa = new Zt(a, e, Sm(e, n), e.getDomId(), Zm(e), n.documentElement, lr(K), h, f);
        $t(G, Wa);
        var Qb = Wa.output,
            nf = new au(a, ve, Pa, Ib, jd);
        J(G, nf);
        var pg = new bu(a, _.um(R, cu, 5), K, d);
        J(G, pg);
        var xh = new du(a, window.location.hash, P, e.getAdUnitPath(), K, f, we.output, Ec, Ta, vb, nf.output, Qb);
        $t(G, xh);
        var Ld = xh.K,
            Md = new eu(a, R, K, Pa, jd, Ld.Ze);
        J(G, Md);
        var ij = Kd.output,
            jj = Ld.Ga,
            kj = Ld.Ja;
        if (kh(window.isSecureContext, window.navigator, window.document) && !_.E(Ft) && g) {
            var yh = {
                    Jc: new Jr,
                    Ga: new Xp,
                    Ja: new Xp,
                    fd: new Xp
                },
                of = new nk;
            J( of , new fu(a, e, ij, K, h, p, f, jj, kj, Qb, r, k, B, Ab, Jd, yh, v, F));
            wk( of );
            var zh = {
                Ka: of ,
                Im: yh
            }
        } else zh = void 0;
        var qg = zh;
        if (qg) {
            _.S(G, qg.Ka);
            var pf = qg.Im
        }
        var Ah, Bh, Ch = null != (Bh = null == (Ah = pf) ? void 0 : Ah.Ga) ? Bh : Ld.Ga,
            Dh, Eh, Fc = null != (Eh = null == (Dh = pf) ? void 0 : Dh.Ja) ? Eh : Ld.Ja,
            rg, Qc = null == (rg = pf) ? void 0 : rg.Jc,
            sg, kd = null == (sg = pf) ? void 0 : sg.fd,
            Rc = new gu(a, e, R, K, lr(K), n, h, Qb, Md.output, Fc, db, Qc);
        J(G, Rc);
        var tg = new hu(a, Rc.output);
        J(G, tg);
        var ug = new iu(a, e, P, h, tg.output, pg.j, Qc);
        J(G, ug);
        var vg = new ju(a, ug.output, Rc.output, pg.j, Qc);
        J(G, vg);
        var xe = new ku(a, window, P, e, K, Qb, Rc.output, db, Fc, Ld.Ae, Ab);
        $t(G, xe);
        var wg = new lu(a, R, K, jc, Ch, Md.output);
        J(G, wg);
        var qf = new mu(a, window, lf, ha.output, Qc);
        J(G, qf);
        var ye = new nu(a, lr(K), n);
        J(G, ye);
        var oc = new ou(a, x, lr(K), Zb, cc, Qc);
        J(G, oc);
        var ze = new pu(a, dc, kd, Pc, Qc);
        J(G, ze);
        var lj = window;
        if (_.E(Xk) && aa) {
            var Ae = new nk;
            J(Ae, new qu(a, lj, mf, aa));
            wk(Ae);
            var xg = Ae
        } else xg = void 0;
        var ld = xg;
        ld && _.S(G, ld);
        var Rb = new ru(a, e, h, k, w, l, db, Ab, Ib, Id, Jd, window, Ch, Md.output, vg.output, Qb, Rc.output, Fc, wg.output, xe.Jc, qf.output, ye.output, oc.output, Z, Qc);
        J(G, Rb);
        var Fh = new su(a, window, e, Rb.o, Pc);
        J(G, Fh);
        var Nd = lr(K);
        switch (Nd) {
            case 2:
            case 3:
                _.E(tu) ? J(G, new uu(a, h, lr(K), e, window, Zb, Rb.j, Qb, oc.output, Fc)) : J(G, new vu(a, h, lr(K), e, window, Zb, Rb.j, Qb, oc.output, Fc));
                break;
            case 5:
                J(G, new wu(a, e, k.Dd, cc, n, Rb.j, Qb, Kd.output, oc.output, B));
                break;
            case 4:
                var Be = new xu(a, e, w, window, Rb.j, Qb);
                _.S(G, Be);
                wk(Be);
                break;
            case 7:
                $t(G, er(a, e, w, Rb.j, Qb));
                break;
            case 8:
            case 9:
                var Gh = Rb.j,
                    rf = Rc.output,
                    sf = window,
                    Bb = new nk,
                    Hh = 8 === Nd ? 3 : 4,
                    Od = new yu(a, x);
                J(Bb, Od);
                J(Bb, new zu(a, sf, Hh, Od.output, Gh, rf, Fc));
                wk(Bb);
                Bb && _.S(G, Bb)
        }
        var yg = new Au(a, e, Rb.j, n, w);
        J(G, yg);
        var Pd = new Bu(a, e, Cu(h, e), window.top);
        J(G, Pd);
        var zg = Rb.j,
            md = new nk,
            Ag = J(md, new Wq(a, e, Du)),
            Bg = J(md, new Eu(a, n, zg, Ag.output));
        J(md, new Fu(a, Bg.output, w, e));
        wk(md);
        _.S(G, md);
        var tf = new Gu(a, Cu(h, e), window.top, Rb.j, ha.output, Pd.output, Pd.j);
        J(G, tf);
        J(G, new Hu(a, e, db, Pa, Rb.j, Rc.output, Rb.C));
        var Cg = new Iu(a, window, Oc, Rb.j, Rc.output, Qb);
        J(G, Cg);
        var Dg = vo(),
            Sc = new nk,
            uf = new Ju(a, n, Dg, R, c, b, d, qa, og);
        J(Sc, uf);
        wk(Sc);
        _.S(G, Sc);
        var Qd = new Xp;
        Qd.G(ng);
        J(G, new Kt(a, vo(), R, b, c, d, Qd));
        return G
    };
    Nu = function(a, b, c) {
        var d = null;
        try {
            var e = Lu(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.ba,
                    h = c.T[f.getDomId()],
                    k;
                f = null == (k = Xm(f, h, b.document, eq(g, h))) ? void 0 : k.y;
                k = Am(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++Mu
            })
        } catch (f) {}
        return d
    };
    Vu = function(a) {
        return Hl(a.oa.context, 1132, function() {
            if (a.ma.X.length) {
                var b = new _.u.Set(Nf(Ou));
                var c = a.oa.Z;
                c = _.E(Pu) && _.Q(c, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id".split(" ") : [];
                c = _.y(c);
                for (var d = c.next(); !d.done; d = c.next()) b.add(d.value);
                d = new _.u.Map;
                c = _.y(Qu);
                for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a, d);
                c = "https://" + (Ru(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
                d = _.y(d);
                for (e = d.next(); !e.done; e = d.next()) {
                    var f = _.y(e.value);
                    e = f.next().value;
                    var g = f.next().value;
                    f = g.value;
                    g = void 0 === g.options ? {} : g.options;
                    (new RegExp("[?&]" + e + "=")).test(c);
                    if (!b.has(e) && null != f) {
                        var h = void 0 === g.Ia ? !1 : g.Ia;
                        if (f = "object" !== typeof f ? null == f || !h && 0 === f ? null : encodeURIComponent(f) : Array.isArray(f) && f.length ? Su(f, g) : null) "?" !== c[c.length - 1] && (c += "&"), c += e + "=" + f
                    }
                }
                if (1 === _.Lf(Tu) || 2 === _.Lf(Tu)) b = _.Lf(Uu), b = 0 >= b ? "" : (_.H = _.z(Array, "from").call(Array, {
                    length: Math.ceil(b / 8)
                }), _.z(_.H, "fill")).call(_.H, "testdata").join("").substring(0, b), 2 === _.Lf(Tu) && (c += "&dblt=" + b);
                b = c
            } else b = "";
            return b
        })
    };
    Ru = function(a) {
        var b = a.oa.Z,
            c, d;
        a = null != (d = null == (c = Wu(a.ma.O.ba)) ? void 0 : _.Q(c, 9)) ? d : !1;
        c = _.E(Pu) && _.Q(b, 8);
        return a || c || !ah(b)
    };
    Su = function(a, b) {
        var c = void 0 === b.Ta ? "," : b.Ta,
            d = void 0 === b.Ld ? "" : b.Ld,
            e = void 0 === b.Ia ? !1 : b.Ia,
            f = !1;
        a = a.map(function(g) {
            f || (f = !!g);
            return String(0 === g && e ? g : g || d)
        });
        return f || e ? encodeURIComponent(a.join(c)) : null
    };
    Yu = function(a, b) {
        var c = a.responseText;
        b = b.R;
        403 === a.status && b.error(Xu(c));
        return {}
    };
    bv = function(a, b) {
        try {
            _.Lf(Zu);
            var c, d = null != (c = b.xo) ? c : $u,
                e = _.y(a.X),
                f = e.next();
            for (a = {}; !f.done; a = {
                    oe: void 0
                }, f = e.next()) {
                a.oe = f.value;
                var g = d.get(a.oe);
                d.set(a.oe, (new Date).getTime());
                g ? b.Ba.Gc.Qc.hi.refresh.Wl.ie({
                    me: (new Date).getTime() - g,
                    ym: _.Lf(av)
                }) : _.jp(a.oe, function(h) {
                    return function() {
                        return void d.delete(h.oe)
                    }
                }(a))
            }
        } catch (h) {}
        return {}
    };
    ev = function() {
        var a = _.Lf(cv);
        switch (a) {
            case 0:
                return Ka() && dv(window.fetch) && dv(window.TextDecoderStream);
            case 1:
                return Ka() && dv(window.fetch) && !!window.TextDecoderStream;
            case 2:
                return Ka() && !!window.fetch && !!window.TextDecoderStream;
            case 3:
                return !Ja() && dv(window.fetch) && !!window.TextDecoderStream;
            case 4:
                return !Ja() && !!window.fetch && !!window.TextDecoderStream;
            case 5:
                return dv(window.fetch) && !!window.TextDecoderStream;
            case 6:
                return !!window.fetch && !!window.TextDecoderStream;
            default:
                lb(a)
        }
    };
    gv = function(a, b, c) {
        b = fv(b, c);
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
                lb(b)
        }
    };
    fv = function(a, b) {
        if (0 === a) return 0;
        a = _.Lf(hv);
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
                lb(a)
        }
    };
    uv = function(a, b) {
        a = a.Ng;
        var c = b.Sa,
            d, e;
        b = iv(a, 6);
        var f = iv(a, 7),
            g = !!Fn(a, 8),
            h = jv(a, 10),
            k = null != (e = a.getEscapedQemQueryId()) ? e : "";
        e = _.um(a, kv, 43);
        var l = !!Fn(a, 9),
            m = !!Fn(a, 12),
            n = _.um(a, lv, hl(a, mv, 48)),
            p = _.um(a, nv, hl(a, mv, 39)),
            r = _.Vc(_.Zh(a, 36)),
            v = !!Fn(a, 13),
            w = jv(a, 49),
            x = _.um(a, ov, 51);
        if (0 !== c.kind) {
            var B;
            c = {
                kind: 0,
                ub: null != (B = ck(a, 4)) ? B : ""
            }
        }
        B = jv(a, 61);
        var C = _.um(a, pv, 58),
            F = null == (d = _.um(a, qv, 56)) ? void 0 : jv(d, 1);
        d = _.ak(a, rv, 62);
        var G = _.ak(a, sv, 67),
            P = Ce(a, 63, pd, 2, void 0, void 0, 0);
        return {
            output: {
                height: b,
                width: f,
                isEmpty: g,
                tb: h,
                Na: k,
                Gd: e,
                isBackfill: l,
                Fb: m,
                Tk: n,
                eb: p,
                Mf: r,
                oh: v,
                Qb: w,
                Ye: x,
                Jb: B,
                Sa: c,
                na: C,
                Om: F,
                Ug: d,
                kk: G,
                ug: P,
                Pf: !!Fn(a, 64),
                eg: _.um(a, tv, 68)
            }
        }
    };
    yv = function(a, b) {
        var c = b.R;
        b = b.context;
        var d;
        (null == (d = _.um(a.Ng, vv, 69)) ? 0 : _.Q(d, 1)) && O(c, wv(_.E(xv) ? b.zb : b.mb));
        return {}
    };
    zv = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = _.Ua.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.qi(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.rb(function(l) {
                if (1 == l.g) return d && clearTimeout(d), d = 0, f = new _.wh, g = b(f.resolve), h = ++e, l.yield(0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, _.Lf(av));
                _.jp(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    Av = function(a) {
        var b = 0,
            c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k, l, m;
            return _.rb(function(n) {
                if (1 == n.g) return f = new _.wh, g = f.resolve, h = ++e, n.yield(0, 2);
                if (e !== h) return g(!1), n.return(f.promise);
                null == (k = c) || k(!1);
                l = function() {
                    b = (new Date).getTime();
                    c = null;
                    d = 0;
                    g(!0)
                };
                d && clearTimeout(d);
                m = (new Date).getTime() - b;
                m > _.Lf(av) ? l() : (d = setTimeout(l, _.Lf(av) - m), _.jp(a, function() {
                    return void g(!1)
                }), c = g);
                return n.return(f.promise)
            })
        }
    };
    Cv = function(a, b) {
        a = a.X;
        var c = b.L,
            d = b.nb;
        b = b.il;
        if (!a.length) return {
            he: []
        };
        for (var e = _.y(a), f = e.next(); !f.done; f = e.next()) yq(c, f.value);
        return b ? {
            he: []
        } : d ? (c = Al(a[0].getAdUnitPath()), {
            he: Bv(a, c)
        }) : {
            he: a.map(function(g) {
                return {
                    networkCode: Al(g.getAdUnitPath()),
                    X: [g]
                }
            })
        }
    };
    Bv = function(a, b) {
        var c = [];
        a = ua(a, function(f) {
            return Al(f.getAdUnitPath())
        });
        a = _.y(_.z(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.y(d.value);
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
    Ev = function(a, b) {
        a = a.X;
        var c = function(d) {
            return !!Bm(b.T[d.getDomId()]).length
        };
        return {
            lj: a.filter(c),
            vj: a.filter(Dv(c))
        }
    };
    Mv = function() {
        var a = new Fv;
        var b = (new Gv).setCorrelator(Wj(_.t));
        var c = ih().join();
        b = _.aj(b, 5, c);
        b = _.L(b, 2, 1);
        a = _.bi(a, 1, b);
        b = new Hv;
        c = _.E(Iv);
        b = _.tl(b, 7, c);
        c = _.E(Jv);
        b = _.tl(b, 8, c);
        c = _.E(Kv);
        b = _.tl(b, 9, c);
        b = _.tl(b, 10, !0);
        c = _.E(Lv);
        b = _.tl(b, 13, c);
        b = _.tl(b, 16, !0);
        a = _.bi(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    Qv = function() {
        var a = _.E(Nv) ? _.fb(Ov) : _.fb(Pv);
        _.$o(document, a)
    };
    Vv = function(a, b) {
        var c = Rv() || Sv() ? 1 : _.nh(),
            d = .001 > c;
        d ? (b.D = !0, hh(31067358)) : .002 > c && hh(31067357);
        Hn(23, a);
        a = 1E-4 > c;
        b = _.Lf(Tv);
        var e = 0 < b && c < b,
            f = _.Lf(Uv),
            g = 0 < f && c < 1 / f,
            h = _.Lf(Zu);
        return {
            Oc: d,
            Fi: 1E3,
            kj: a,
            Ei: 1E4,
            eh: d,
            fg: 1E3,
            lm: e,
            Tl: b,
            jm: g,
            Al: f,
            mm: 0 < h && c < 1 / h,
            Nh: c
        }
    };
    Zv = function(a, b) {
        var c = _.z(Object, "assign").call(Object, {}, a);
        a = a.Nh;
        c = (delete c.Nh, c);
        var d = b.zb;
        /m\d+/.test(d) ? d = Number(d.substring(1)) : (d && dg({
            mjsv: d
        }, "gpt_inv_ver"), d = void 0);
        var e = window.document.URL,
            f = new Wv(4, b.zb, 1E3);
        return _.z(Object, "assign").call(Object, {}, b, c, {
            ro: new Xv(b)
        }, {
            Fc: d,
            Ra: f,
            Zf: e,
            ho: 2012,
            V: new Yv(f, a)
        })
    };
    _.ba = [];
    $v = function(a) {
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
    aw = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    bw = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    _.cw = bw(this);
    dw = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.u = {};
    ew = {};
    _.z = function(a, b, c) {
        if (!c || null != a) {
            c = ew[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    };
    fw = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in _.u ? f = _.u : f = _.cw;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = dw && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aw(_.u, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ew[d] && (a = 1E9 * Math.random() >>> 0, ew[d] = dw ? _.cw.Symbol(d) : "$jscp$" + a + "$" + d), aw(f, ew[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    fw("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            aw(this, "description", {
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
    fw("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, _.u.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.cw[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && aw(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return gw($v(this))
                }
            })
        }
        return a
    }, "es6");
    gw = function(a) {
        a = {
            next: a
        };
        a[_.z(_.u.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    _.hw = function(a) {
        return a.raw = a
    };
    iw = function(a, b) {
        a.raw = b;
        return a
    };
    _.y = function(a) {
        var b = "undefined" != typeof _.u.Symbol && _.z(_.u.Symbol, "iterator") && a[_.z(_.u.Symbol, "iterator")];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: $v(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.qi = function(a) {
        if (!(a instanceof Array)) {
            a = _.y(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    jw = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    kw = dw && "function" == typeof _.z(Object, "assign") ? _.z(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) jw(d, e) && (a[e] = d[e])
        }
        return a
    };
    fw("Object.assign", function(a) {
        return a || kw
    }, "es6");
    var lw = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        mw = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (dw && "undefined" != typeof Reflect && Reflect.construct) {
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
                e = lw(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        nw;
    if (dw && "function" == typeof _.z(Object, "setPrototypeOf")) nw = _.z(Object, "setPrototypeOf");
    else {
        var ow;
        a: {
            var pw = {
                    a: !0
                },
                qw = {};
            try {
                qw.__proto__ = pw;
                ow = qw.a;
                break a
            } catch (a) {}
            ow = !1
        }
        nw = ow ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    rw = nw;
    _.T = function(a, b) {
        a.prototype = lw(b.prototype);
        a.prototype.constructor = a;
        if (rw) rw(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.wm = b.prototype
    };
    sw = function() {
        this.D = !1;
        this.j = null;
        this.A = void 0;
        this.g = 1;
        this.K = this.l = 0;
        this.M = null
    };
    tw = function(a) {
        if (a.D) throw new TypeError("Generator is already running");
        a.D = !0
    };
    sw.prototype.I = function(a) {
        this.A = a
    };
    var uw = function(a, b) {
        a.M = {
            exception: b,
            fl: !0
        };
        a.g = a.l || a.K
    };
    sw.prototype.return = function(a) {
        this.M = {
            return: a
        };
        this.g = this.K
    };
    sw.prototype.yield = function(a, b) {
        this.g = b;
        return {
            value: a
        }
    };
    tb = function(a) {
        a.l = 0;
        var b = a.M.exception;
        a.M = null;
        return b
    };
    vw = function(a) {
        this.g = new sw;
        this.A = a
    };
    yw = function(a, b) {
        tw(a.g);
        var c = a.g.j;
        if (c) return ww(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return xw(a)
    };
    ww = function(a, b, c, d) {
        try {
            var e = b.call(a.g.j, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.D = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.j = null, uw(a.g, g), xw(a)
        }
        a.g.j = null;
        d.call(a.g, f);
        return xw(a)
    };
    xw = function(a) {
        for (; a.g.g;) try {
            var b = a.A(a.g);
            if (b) return a.g.D = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.A = void 0, uw(a.g, c)
        }
        a.g.D = !1;
        if (a.g.M) {
            b = a.g.M;
            a.g.M = null;
            if (b.fl) throw b.exception;
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
    zw = function(a) {
        this.next = function(b) {
            tw(a.g);
            a.g.j ? b = ww(a, a.g.j.next, b, a.g.I) : (a.g.I(b), b = xw(a));
            return b
        };
        this.throw = function(b) {
            tw(a.g);
            a.g.j ? b = ww(a, a.g.j["throw"], b, a.g.I) : (uw(a.g, b), b = xw(a));
            return b
        };
        this.return = function(b) {
            return yw(a, b)
        };
        this[_.z(_.u.Symbol, "iterator")] = function() {
            return this
        }
    };
    Aw = function(a) {
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
    _.rb = function(a) {
        return Aw(new zw(new vw(a)))
    };
    _.Ua = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    fw("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    fw("Reflect.construct", function() {
        return mw
    }, "es6");
    fw("Reflect.setPrototypeOf", function(a) {
        return a ? a : rw ? function(b, c) {
            try {
                return rw(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    fw("Promise", function(a) {
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
        var d = _.cw.setTimeout;
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
                h ? this.Da(g) : this.D(g)
            }
        };
        e.prototype.Da = function(g) {
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
                    var h = _.cw.console;
                    "undefined" !== typeof h && h.error(g.l)
                }
            }, 1)
        };
        e.prototype.C = function() {
            if (this.I) return !1;
            var g = _.cw.CustomEvent,
                h = _.cw.Event,
                k = _.cw.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = _.cw.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
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
            g.Ee(h.resolve, h.reject)
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
            this.Ee(k(g, l), k(h, m));
            return n
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Ee = function(g, h) {
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
                for (var l = _.y(g), m = l.next(); !m.done; m = l.next()) c(m.value).Ee(h, k)
            })
        };
        e.all = function(g) {
            var h = _.y(g),
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
                do p.push(void 0), r++, c(k.value).Ee(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    fw("Object.setPrototypeOf", function(a) {
        return a || rw
    }, "es6");
    fw("WeakMap", function(a) {
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
                    g = _.y(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!jw(g, d)) {
                var k = new b;
                aw(g, d, {
                    value: k
                })
            }
            if (!jw(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && jw(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && jw(g, d) && jw(g[d], this.g)
        };
        f.prototype.delete = function(g) {
            return c(g) && jw(g, d) && jw(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    fw("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.z(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.y([
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
                    h = _.y(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.Ya ? l.Ya.value = k : (l.Ya = {
                next: this[1],
                Ob: this[1].Ob,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.Ya), this[1].Ob.next = l.Ya, this[1].Ob = l.Ya, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.Ya && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.Ya.Ob.next = h.Ya.next, h.Ya.next.Ob = h.Ya.Ob, h.Ya.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Ob = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).Ya
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).Ya) && h.value
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
                if (m && jw(h[0], l))
                    for (h = 0; h < m.length; h++) {
                        var n = m[h];
                        if (k !== k && n.key !== n.key || k === n.key) return {
                            id: l,
                            list: m,
                            index: h,
                            Ya: n
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    Ya: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return gw(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Ob;
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
                return h.Ob = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var Bw = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    fw("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Bw(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var Cw = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                ri: e,
                xj: f
            }
        }
        return {
            ri: -1,
            xj: void 0
        }
    };
    fw("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Cw(this, b, c).xj
        }
    }, "es6");
    var Dw = function(a, b) {
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
    fw("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Dw(this, function(b) {
                return b
            })
        }
    }, "es6");
    fw("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.z(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.y([c]));
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
                c = _.y(c);
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
    fw("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Dw(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    fw("Number.EPSILON", function() {
        return Math.pow(2, -52)
    }, "es6");
    fw("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    fw("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    fw("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.z(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    fw("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return _.z(Number, "isInteger").call(Number, b) && Math.abs(b) <= _.z(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    fw("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    fw("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) jw(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    fw("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    fw("Array.prototype.includes", function(a) {
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
    fw("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Bw(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    fw("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    fw("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Dw(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    fw("Array.from", function(a) {
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
    fw("Array.prototype.fill", function(a) {
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
    var Ew = function(a) {
        return a ? a : _.z(Array.prototype, "fill")
    };
    fw("Int8Array.prototype.fill", Ew, "es6");
    fw("Uint8Array.prototype.fill", Ew, "es6");
    fw("Uint8ClampedArray.prototype.fill", Ew, "es6");
    fw("Int16Array.prototype.fill", Ew, "es6");
    fw("Uint16Array.prototype.fill", Ew, "es6");
    fw("Int32Array.prototype.fill", Ew, "es6");
    fw("Uint32Array.prototype.fill", Ew, "es6");
    fw("Float32Array.prototype.fill", Ew, "es6");
    fw("Float64Array.prototype.fill", Ew, "es6");
    fw("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) jw(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    fw("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Bw(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    fw("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Bw(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    fw("globalThis", function(a) {
        return a || _.cw
    }, "es_2020");
    var Fw = function(a, b) {
        a = void 0 !== a ? String(a) : " ";
        return 0 < b && a ? _.z(a, "repeat").call(a, Math.ceil(b / a.length)).substring(0, b) : ""
    };
    fw("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Bw(this, null, "padStart");
            return Fw(c, b - d.length) + d
        }
    }, "es8");
    fw("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = Bw(this, null, "padStart");
            return d + Fw(c, b - d.length)
        }
    }, "es8");
    fw("AggregateError", function(a) {
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
    fw("Promise.any", function(a) {
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
    fw("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Cw(this, b, c).ri
        }
    }, "es6");
    fw("Object.fromEntries", function(a) {
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
    fw("Object.hasOwn", function(a) {
        return a ? a : function(b, c) {
            return Object.prototype.hasOwnProperty.call(b, c)
        }
    }, "es_next");
    fw("Promise.prototype.finally", function(a) {
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
    fw("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = _.z(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    fw("String.raw", function(a) {
        return a ? a : function(b, c) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g) f += d[g], g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
            return f
        }
    }, "es6");
    fw("Math.sign", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
        }
    }, "es6");
    fw("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    }, "es6");
    fw("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function(e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    var Gw, Jc, Hw, Iw, Jw, Kw;
    _.t = this || self;
    Gw = function(a) {
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
    Jc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.ra = function(a) {
        var b = Jc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ja = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.ka = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Hw) && a[Hw] || (a[Hw] = ++Iw)
    };
    Hw = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Iw = 0;
    Jw = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Kw = function(a, b, c) {
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
    _.Lw = function(a, b, c) {
        _.Lw = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Jw : Kw;
        return _.Lw.apply(null, arguments)
    };
    _.Mw = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    var Nw;
    _.da = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.Ow = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.oj = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.Pw = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    _.qj = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Aa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Qw = {
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
    var Tw = function(a, b) {
        this.g = a === Rw && b || "";
        this.A = Sw
    };
    Tw.prototype.toString = function() {
        return this.g
    };
    var Uw = function(a) {
            return a instanceof Tw && a.constructor === Tw && a.A === Sw ? a.g : "type_error:Const"
        },
        Sw = {},
        Rw = {};
    var ax, $w, Zw, Ww, bx, eb, Xw;
    _.Vw = function(a) {
        this.g = a
    };
    _.Vw.prototype.toString = function() {
        return this.g + ""
    };
    _.Yw = function(a, b) {
        a = Ww.exec(_.gb(a).toString());
        var c = a[3] || "";
        return eb(a[1] + Xw("?", a[2] || "", b) + Xw("#", c))
    };
    _.gb = function(a) {
        return a instanceof _.Vw && a.constructor === _.Vw ? a.g : "type_error:TrustedResourceUrl"
    };
    ax = function(a, b) {
        var c = Uw(a);
        if (!Zw.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace($w, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Tw ? Uw(d) : encodeURIComponent(String(d))
        });
        return eb(a)
    };
    $w = /%{(\w+)}/g;
    Zw = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    Ww = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    bx = {};
    eb = function(a) {
        return new _.Vw(a, bx)
    };
    Xw = function(a, b, c) {
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
    var cx, dx, ex, Qa, fx;
    _.Oa = function(a) {
        this.g = a
    };
    _.Oa.prototype.toString = function() {
        return this.g.toString()
    };
    _.Za = function(a) {
        return a instanceof _.Oa && a.constructor === _.Oa ? a.g : "type_error:SafeUrl"
    };
    cx = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    dx = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    ex = {};
    Qa = function(a) {
        return new _.Oa(a, ex)
    };
    fx = Qa("about:invalid#zClosurez");
    var gx, bm, hx, px, jx, kx, lx, mx, nx, ox, ix;
    gx = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    bm = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    hx = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    px = function(a) {
        if (!ix.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(jx, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(kx, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(lx, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(mx, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(nx, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ox, "&#0;"));
        return a
    };
    jx = /&/g;
    kx = /</g;
    lx = />/g;
    mx = /"/g;
    nx = /'/g;
    ox = /\x00/g;
    ix = /[\x00&<>"']/;
    _.Fa = function(a, b) {
        return -1 != a.indexOf(b)
    };
    var qx;
    qx = {};
    _.rx = function(a) {
        this.g = a
    };
    _.rx.prototype.toString = function() {
        return this.g.toString()
    };
    _.sx = function(a) {
        return a instanceof _.rx && a.constructor === _.rx ? a.g : "type_error:SafeStyleSheet"
    };
    var Da = Gw(610401301),
        Re = Gw(188588736);
    var Ea, tx = _.t.navigator;
    Ea = tx ? tx.userAgentData || null : null;
    var ux, yx, Ax, Bx, Cx, xx;
    ux = {};
    _.vx = function(a) {
        this.g = a
    };
    _.vx.prototype.toString = function() {
        return this.g.toString()
    };
    _.wx = function(a) {
        return a instanceof _.vx && a.constructor === _.vx ? a.g : "type_error:SafeHtml"
    };
    yx = function(a) {
        var b = xx;
        b = b instanceof _.vx ? b : _.Tj(px(String(b)));
        var c = [],
            d = function(e) {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof _.vx ? e : _.Tj(px(String(e))), c.push(_.wx(e).toString()))
            };
        a.forEach(d);
        return _.Tj(c.join(_.wx(b).toString()))
    };
    _.zx = function(a) {
        return yx(Array.prototype.slice.call(arguments))
    };
    _.Tj = function(a) {
        return new _.vx(a, ux)
    };
    Ax = /^[a-zA-Z0-9-]+$/;
    Bx = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    Cx = {
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
    xx = new _.vx(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "", ux);
    _.Dx = _.Tj("<br>");
    _.Ra = Qa("about:invalid#zClosurez");
    var La = function(a) {
            this.kl = a
        },
        Na = [Ma("data"), Ma("http"), Ma("https"), Ma("mailto"), Ma("ftp"), new La(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        })],
        Xa = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    var ab = function() {};
    ab.prototype.toString = function() {
        return this.Vi.toString()
    };
    var wb = _.hw(["https://tpc.googlesyndication.com/sodar/", ".js"]),
        Ex = _.hw(["https://www.google.com/recaptcha/api2/aframe"]);
    _.fb(Ex);
    var Fx, Dv, zi;
    Fx = function() {
        return !0
    };
    Dv = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    zi = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.Gx = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    _.Hx = function(a, b) {
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
    var ib;
    ib = zi(function() {
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
    _.pb = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, jb(d)), !0) : !1
    };
    _.$f = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, jb(d)), !0) : !1
    };
    var Ix = {
            nn: 0,
            qn: 1,
            ln: 2,
            mn: 3,
            0: "FORMATTED_HTML_CONTENT",
            1: "HTML_FORMATTED_CONTENT",
            2: "EMBEDDED_INTERNAL_CONTENT",
            3: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        Jx = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + Ix[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.T(Jx, Error);
    var Dc = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var sb = function(a) {
        return new _.u.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var Cb, zb = "function" === typeof String.prototype.ll,
        yb = "undefined" !== typeof TextEncoder;
    _.Kx = function(a) {
        _.Kx[" "](a);
        return a
    };
    _.Kx[" "] = function() {};
    var Lx = function(a, b) {
        try {
            return _.Kx(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Mx, Ox, Px, Qx, Rx, Sx;
    Mx = Ia() ? !1 : Ha("Opera");
    _.Nx = Ia() ? !1 : Ha("Trident") || Ha("MSIE");
    Ox = Ha("Edge");
    Px = Ha("Gecko") && !(_.Fa(Ca().toLowerCase(), "webkit") && !Ha("Edge")) && !(Ha("Trident") || Ha("MSIE")) && !Ha("Edge");
    Qx = _.Fa(Ca().toLowerCase(), "webkit") && !Ha("Edge");
    Rx = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Tx = "",
            Ux = function() {
                var a = Ca();
                if (Px) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Ox) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Nx) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Qx) return /WebKit\/(\S+)/.exec(a);
                if (Mx) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ux && (Tx = Ux ? Ux[1] : "");
        if (_.Nx) {
            var Vx = Rx();
            if (null != Vx && Vx > parseFloat(Tx)) {
                Sx = String(Vx);
                break a
            }
        }
        Sx = Tx
    }
    var Wx = Sx,
        Xx;
    if (_.t.document && _.Nx) {
        var Yx = Rx();
        Xx = Yx ? Yx : parseInt(Wx, 10) || void 0
    } else Xx = void 0;
    var Zx = Xx;
    !Ha("Android") || Ka();
    Ka();
    Ha("Safari") && (Ka() || (Ia() ? 0 : Ha("Coast")) || (Ia() ? 0 : Ha("Opera")) || (Ia() ? 0 : Ha("Edge")) || (Ia() ? Ga("Microsoft Edge") : Ha("Edg/")) || Ia() && Ga("Opera"));
    var $x = {},
        ay = null,
        by = Px || Qx || "function" == typeof _.t.btoa,
        Jb = function(a, b) {
            void 0 === b && (b = 0);
            cy();
            b = $x[b];
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
        dy = function(a, b) {
            if (by && !b) a = _.t.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = Jb(c, b)
            }
            return a
        },
        Pf = function(a) {
            var b = [];
            ey(a, function(c) {
                b.push(c)
            });
            return b
        },
        fy = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : _.Fa("=.", a[b - 1]) && (c = _.Fa("=.", a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            ey(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        ey = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = ay[l];
                    if (null != m) return m;
                    if (!bm(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            cy();
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
        cy = function() {
            if (!ay) {
                ay = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    $x[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === ay[f] && (ay[f] = e)
                    }
                }
            }
        };
    var Nb = "undefined" !== typeof Uint8Array,
        Hb = !_.Nx && "function" === typeof btoa,
        gy = /[-_.]/g,
        Lb = {
            "-": "+",
            _: "/",
            ".": "="
        },
        hy, Pb = {};
    var iy, uc = function(a, b) {
            Sb(b);
            this.g = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        vc = function() {
            return iy || (iy = new uc(null, Pb))
        },
        Zd = function(a) {
            var b = a.g;
            return null == b ? "" : "string" === typeof b ? b : a.g = Kb(b)
        },
        fl = function(a) {
            Sb(Pb);
            var b = a.g;
            if (null != b && !Ob(b))
                if ("string" === typeof b)
                    if (Hb) {
                        gy.test(b) && (b = b.replace(gy, Mb));
                        b = atob(b);
                        for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                        b = c
                    } else b = fy(b);
            else b = null;
            return (a = null == b ? b : a.g = b) ? new Uint8Array(a) : hy || (hy = new Uint8Array(0))
        };
    uc.prototype.isEmpty = function() {
        return null == this.g
    };
    var Wb = 0,
        Xb = 0,
        jy;
    var ky = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        my = function(a) {
            if (!a) return ly || (ly = new ky(0, 0));
            if (!/^\d+$/.test(a)) return null;
            ec(a);
            return new ky(Wb, Xb)
        },
        ly, ny = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        kf = function(a) {
            if (!a) return oy || (oy = new ny(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            ec(a);
            return new ny(Wb, Xb)
        },
        oy;
    var py = function() {
        this.g = []
    };
    py.prototype.length = function() {
        return this.g.length
    };
    py.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var wf = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.g.push(b)
        },
        vf = function(a, b) {
            for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        qy = function(a, b) {
            if (0 <= b) vf(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
                a.g.push(1)
            }
        };
    var Ef = function() {
            this.l = [];
            this.A = 0;
            this.g = new py
        },
        Ff = function(a, b) {
            0 !== b.length && (a.l.push(b), a.A += b.length)
        },
        yf = function(a, b) {
            vf(a.g, 8 * b + 2);
            b = a.g.end();
            Ff(a, b);
            b.push(a.A);
            return b
        },
        zf = function(a, b) {
            var c = b.pop();
            for (c = a.A + a.g.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.A++;
            b.push(c);
            a.A++
        },
        ry = function(a, b, c) {
            vf(a.g, 8 * b + 2);
            vf(a.g, c.length);
            Ff(a, a.g.end());
            Ff(a, c)
        };
    var cf = function(a, b) {
        this.g = a;
        this.Fj = b
    };
    var sy = gc(),
        xd = gc("0di"),
        le = gc("0dg");
    var ic = sy ? function(a, b) {
            a[sy] |= b
        } : function(a, b) {
            void 0 !== a.wb ? a.wb |= b : Object.defineProperties(a, {
                wb: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        Fe = sy ? function(a, b) {
            a[sy] &= ~b
        } : function(a, b) {
            void 0 !== a.wb && (a.wb &= ~b)
        },
        xc = sy ? function(a) {
            return a[sy] | 0
        } : function(a) {
            return a.wb | 0
        },
        ge = sy ? function(a) {
            return a[sy]
        } : function(a) {
            return a.wb
        },
        mc = sy ? function(a, b) {
            a[sy] = b;
            return a
        } : function(a, b) {
            void 0 !== a.wb ? a.wb = b : Object.defineProperties(a, {
                wb: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return a
        };
    var ud = {},
        rc = {},
        ty, pe, uy = [];
    mc(uy, 55);
    pe = Object.freeze(uy);
    var vy = function(a, b, c) {
        this.l = 0;
        this.g = a;
        this.A = b;
        this.j = c
    };
    vy.prototype.next = function() {
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
    vy.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return new vy(this.g, this.A, this.j)
    };
    _.wy = Object.freeze(new function() {});
    Object.freeze(new function() {});
    var Ac;
    var Mc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    var Ad, Cd, Dd;
    var Vd = {},
        xy = function() {
            try {
                var a = function() {
                    return mw(_.u.Map, [], this.constructor)
                };
                _.T(a, _.u.Map);
                new a;
                return !1
            } catch (b) {
                return !0
            }
        }(),
        yy = function() {
            this.g = new _.u.Map
        };
    _.q = yy.prototype;
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
    yy.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return _.z(this, "entries").call(this)
    };
    var zy = function() {
            if (xy) return _.z(Object, "setPrototypeOf").call(Object, yy.prototype, _.u.Map.prototype), Object.defineProperties(yy.prototype, {
                size: {
                    value: 0,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            }), yy;
            var a = function() {
                return mw(_.u.Map, [], this.constructor)
            };
            _.T(a, _.u.Map);
            return a
        }(),
        Ud = function(a, b, c, d) {
            c = void 0 === c ? Fd : c;
            d = void 0 === d ? Fd : d;
            var e = zy.call(this) || this;
            var f = xc(a);
            f |= 64;
            mc(a, f);
            e.Id = f;
            e.Gf = b;
            e.Wd = c;
            e.qh = e.Gf ? Hd : d;
            for (var g = 0; g < a.length; g++) {
                var h = a[g],
                    k = c(h[0], !1, !0),
                    l = h[1];
                b ? void 0 === l && (l = null) : l = d(h[1], !1, !0, void 0, void 0, f);
                zy.prototype.set.call(e, k, l)
            }
            return e
        };
    _.T(Ud, zy);
    var Ay = function(a) {
            if (a.Id & 2) throw Error("Cannot mutate an immutable Map");
        },
        $d = function(a, b) {
            b = void 0 === b ? Rd : b;
            if (0 !== a.size) return ie(a, b)
        },
        ie = function(a, b) {
            b = void 0 === b ? Rd : b;
            var c = [];
            a = _.z(zy.prototype, "entries").call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    _.q = Ud.prototype;
    _.q.clear = function() {
        Ay(this);
        zy.prototype.clear.call(this)
    };
    _.q.delete = function(a) {
        Ay(this);
        return zy.prototype.delete.call(this, this.Wd(a, !0, !1))
    };
    _.q.entries = function() {
        var a = _.z(Array, "from").call(Array, _.z(zy.prototype, "keys").call(this));
        return new vy(a, Sd, this)
    };
    _.q.keys = function() {
        return _.z(zy.prototype, "keys").call(this)
    };
    _.q.values = function() {
        var a = _.z(Array, "from").call(Array, _.z(zy.prototype, "keys").call(this));
        return new vy(a, Ud.prototype.get, this)
    };
    _.q.forEach = function(a, b) {
        var c = this;
        zy.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    _.q.set = function(a, b) {
        Ay(this);
        a = this.Wd(a, !0, !1);
        return null == a ? this : null == b ? (zy.prototype.delete.call(this, a), this) : zy.prototype.set.call(this, a, this.qh(b, !0, !0, this.Gf, !1, this.Id))
    };
    _.q.has = function(a) {
        return zy.prototype.has.call(this, this.Wd(a, !1, !1))
    };
    _.q.get = function(a) {
        a = this.Wd(a, !1, !1);
        var b = zy.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.Gf;
            return c ? (c = this.qh(b, !1, !0, c, this.fk, this.Id), c !== b && zy.prototype.set.call(this, a, c), c) : b
        }
    };
    Ud.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return _.z(this, "entries").call(this)
    };
    Ud.prototype.toJSON = void 0;
    Ud.prototype.rl = rc;
    var Td;
    var oe, ci, Tq, Fn, gl, ej, hl, el, hq, lt, By, jk, Bi, wm, Cy, Dy, ck, mi, Os, hs, Fy, Gy, Iy, Jy, dq, iv, jv, Ky, Sh, ki, Ly;
    _.Zh = function(a, b) {
        a = a.F;
        return oe(a, ge(a), b)
    };
    oe = function(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= qc(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    };
    _.hk = function(a, b, c) {
        var d = a.F,
            e = ge(d);
        zc(e);
        ne(d, e, b, c);
        return a
    };
    ci = function(a, b, c) {
        return void 0 !== Me(a, b, c, !1)
    };
    Tq = function(a) {
        a = a.F;
        var b = ge(a),
            c = oe(a, b, 3),
            d = Ic(c);
        null != d && d !== c && ne(a, b, 3, d);
        return d
    };
    Fn = function(a, b) {
        return Lc(_.Zh(a, b))
    };
    gl = function(a, b) {
        a = a.F;
        var c = ge(a),
            d = oe(a, c, b),
            e = wc(d, !0, !!(c & 34));
        null != e && e !== d && ne(a, c, b, e);
        return null == e ? vc() : e
    };
    ej = function(a, b, c, d) {
        var e = a.F,
            f = ge(e);
        zc(f);
        (c = Le(e, f, c)) && c !== b && null != d && (f = ne(e, f, c));
        ne(e, f, b, d);
        return a
    };
    hl = function(a, b, c) {
        a = a.F;
        return Le(a, ge(a), b) === c ? c : -1
    };
    el = function(a, b) {
        a = a.F;
        return Le(a, ge(a), b)
    };
    hq = function(a, b, c) {
        var d = a.F,
            e = ge(d),
            f = Le(d, e, hj);
        a = lt(a, b, c);
        f && f !== c && ne(d, e, f);
        return a
    };
    lt = function(a, b, c) {
        a = a.F;
        var d = ge(a);
        zc(d);
        var e = oe(a, d, c);
        b = Gd(wd(e, b, !0, d));
        e !== b && ne(a, d, c, b);
        return b
    };
    By = function(a, b, c) {
        return (a = Me(a, b, c, !1)) ? a : vd(b)
    };
    _.um = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Me(a, b, c, d);
        if (null == b) return b;
        a = a.F;
        var e = ge(a);
        if (!(e & 2)) {
            var f = Gd(b);
            f !== b && (b = f, ne(a, e, c, b, d))
        }
        return b
    };
    _.ak = function(a, b, c) {
        a = a.F;
        var d = ge(a);
        return Ne(a, d, b, c, !1, !(2 & d))
    };
    _.bi = function(a, b, c) {
        null == c && (c = void 0);
        return _.hk(a, b, c)
    };
    _.gj = function(a, b, c, d) {
        null == d && (d = void 0);
        return ej(a, b, c, d)
    };
    _.om = function(a, b, c) {
        var d = a.F,
            e = ge(d);
        zc(e);
        if (null == c) return ne(d, e, b), a;
        for (var f = xc(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !0, m = !0, n = 0; n < c.length; n++) {
            var p = c[n];
            h || (p = !!(xc(p.F) & 2), l && (l = !p), m && (m = p))
        }
        h || (f = hc(f, 5, !0), f = hc(f, 8, l), f = hc(f, 16, m));
        k && f !== g && (c = fc(c), g = 0, f = se(f, e, !0));
        f !== g && mc(c, f);
        ne(d, e, b, c);
        return a
    };
    jk = function(a, b, c, d) {
        Oe(a, b, c, d);
        return a
    };
    Bi = function(a, b) {
        return Xc(_.Zh(a, b))
    };
    wm = function(a, b) {
        return $c(_.Zh(a, b))
    };
    Cy = function(a, b) {
        a = _.Zh(a, b);
        var c;
        null == a ? c = a : Nc(a) ? "number" === typeof a ? c = id(a) : c = nd(a) : c = void 0;
        return c
    };
    Dy = function(a, b) {
        return Ce(a, b, od, 2, void 0, void 0, 0)
    };
    ck = function(a, b) {
        return td(_.Zh(a, b))
    };
    mi = function(a, b, c, d, e) {
        return Ce(a, b, td, c, d, e)
    };
    _.Q = function(a, b, c) {
        return Qe(Fn(a, b), void 0 === c ? !1 : c)
    };
    _.Ey = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Qe(Bi(a, b), c)
    };
    Os = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Qe(wm(a, b), c)
    };
    _.Lg = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Qe(od(_.Zh(a, b)), c)
    };
    hs = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Qe(Cy(a, b), c)
    };
    _.I = function(a, b) {
        return Qe(ck(a, b), "")
    };
    _.fg = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return Qe(_.Vc(_.Zh(a, b)), c)
    };
    Fy = function(a, b) {
        var c = void 0 === c ? "0" : c;
        return Qe(pd(_.Zh(a, b), !0), c)
    };
    Gy = function(a, b, c) {
        a = mi(a, b, 3, void 0, !0);
        if ("number" !== typeof c || 0 > c || c >= a.length) throw Error();
        return a[c]
    };
    Iy = function(a) {
        return _.Lg(a, hl(a, Hy, 3))
    };
    Jy = function(a, b) {
        return _.I(a, hl(a, b, 2))
    };
    dq = function(a, b) {
        a = Fn(a, b);
        return null == a ? void 0 : a
    };
    iv = function(a, b) {
        a = Bi(a, b);
        return null == a ? void 0 : a
    };
    jv = function(a, b) {
        a = ck(a, b);
        return null == a ? void 0 : a
    };
    Ky = function(a, b) {
        a = _.Vc(_.Zh(a, b));
        return null == a ? void 0 : a
    };
    Sh = function(a, b, c) {
        return _.hk(a, b, null == c ? c : Kc(c))
    };
    _.tl = function(a, b, c) {
        return _.Ke(a, b, null == c ? c : Kc(c), !1)
    };
    _.pi = function(a, b, c) {
        return _.hk(a, b, null == c ? c : Wc(c))
    };
    _.ul = function(a, b, c) {
        return _.Ke(a, b, null == c ? c : Wc(c), 0)
    };
    _.Xh = function(a, b, c) {
        return _.hk(a, b, ed(c))
    };
    _.$i = function(a, b, c) {
        return _.Ke(a, b, ed(c), "0")
    };
    ki = function(a, b, c) {
        return _.hk(a, b, sd(c))
    };
    _.aj = function(a, b, c) {
        return _.Ke(a, b, sd(c), "")
    };
    _.$h = function(a, b, c) {
        return _.hk(a, b, Uc(c))
    };
    _.L = function(a, b, c) {
        return _.Ke(a, b, Uc(c), 0)
    };
    Ly = function(a, b, c) {
        var d = a.F,
            e = ge(d);
        zc(e);
        b = qe(d, e, b);
        d = xc(b);
        c = _.rd(c, !!(4 & d) && !!(4096 & d));
        b.push(c);
        return a
    };
    _.Ai = function(a, b) {
        return null != ck(a, b)
    };
    _.D = function(a, b, c) {
        this.F = _.A(a, b, c)
    };
    _.D.prototype.toJSON = function() {
        return ty ? Se(this, this.F, !1) : Se(this, be(this.F, de, void 0, void 0, !1), !0)
    };
    var bl = function(a) {
        ty = !0;
        try {
            return JSON.stringify(a.toJSON(), Yd)
        } finally {
            ty = !1
        }
    };
    _.D.prototype.Ag = ud;
    var ff = (0, _.u.Symbol)(),
        We = (0, _.u.Symbol)(),
        bf = (0, _.u.Symbol)(),
        ef = (0, _.u.Symbol)(),
        My = jf(function(a, b, c) {
            b = Ic(b);
            null != b && (vf(a.g, 8 * c + 5), a = a.g, c = jy || (jy = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Xb = 0, b = Wb = c.getUint32(0, !0), a.g.push(b >>> 0 & 255), a.g.push(b >>> 8 & 255), a.g.push(b >>> 16 & 255), a.g.push(b >>> 24 & 255))
        }),
        Ny = jf(xf),
        Oy = jf(xf),
        Py = jf(function(a, b, c) {
            a: if (null != b) {
                if (Nc(b)) {
                    if ("string" === typeof b) {
                        b = nd(b);
                        break a
                    }
                    if ("number" === typeof b) {
                        b = id(b);
                        break a
                    }
                }
                b = void 0
            }null != b && ("string" === typeof b && my(b), null != b && (vf(a.g, 8 * c), "number" === typeof b ? (a = a.g, Yb(b), wf(a, Wb, Xb)) : (c = my(b), wf(a.g, c.A, c.g))))
        }),
        Qy = jf(function(a, b, c) {
            b = Xc(b);
            null != b && null != b && (vf(a.g, 8 * c), qy(a.g, b))
        }),
        Ry = jf(function(a, b, c) {
            b = Lc(b);
            null != b && (vf(a.g, 8 * c), a.g.g.push(b ? 1 : 0))
        }),
        Sy = jf(function(a, b, c) {
            b = td(b);
            null != b && ry(a, c, Fb(b))
        }),
        Ty;
    Ty = new cf(function(a, b, c) {
        b = Ue(td, b);
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    g = b[d];
                null != g && ry(e, f, Fb(g))
            }
    }, !1);
    var gf = new cf(Af, !0),
        df = new cf(Af, !0),
        Uy;
    Uy = new cf(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Af(a, b[f], c, d, e)
    }, !0);
    var Vy = jf(function(a, b, c) {
            b = Xc(b);
            null != b && (b = parseInt(b, 10), vf(a.g, 8 * c), qy(a.g, b))
        }),
        Wy;
    Wy = new cf(function(a, b, c) {
        b = Ue(Xc, b);
        if (null != b && b.length) {
            c = yf(a, c);
            for (var d = 0; d < b.length; d++) qy(a.g, b[d]);
            zf(a, c)
        }
    }, !1);
    var Df = void 0;
    var Xy = function(a) {
        this.F = _.A(a)
    };
    _.T(Xy, _.D);
    var Yy = function(a) {
        this.F = _.A(a)
    };
    _.T(Yy, _.D);
    var Zy = function(a) {
            this.g = a.A;
            this.A = a.l;
            this.j = a.j;
            this.Vd = a.Vd;
            this.B = a.B;
            this.xd = a.xd;
            this.bf = a.bf;
            this.zf = a.zf;
            this.af = a.af;
            this.l = a.g
        },
        $y = function(a, b, c) {
            this.A = a;
            this.l = b;
            this.j = c;
            this.B = window;
            this.xd = "env";
            this.bf = "n";
            this.zf = "0";
            this.af = "1";
            this.g = !0
        };
    $y.prototype.build = function() {
        return new Zy(this)
    };
    var li = function(a) {
        this.F = _.A(a)
    };
    _.T(li, _.D);
    li.prototype.getId = function() {
        return _.I(this, 1)
    };
    var az = [0, Sy];
    var oi = function(a) {
        this.F = _.A(a)
    };
    _.T(oi, _.D);
    oi.prototype.getWidth = function() {
        return _.Ey(this, 1)
    };
    oi.prototype.getHeight = function() {
        return _.Ey(this, 2)
    };
    var bz = [0, Qy, -1];
    var ni = function(a) {
        this.F = _.A(a)
    };
    _.T(ni, _.D);
    var cz = [0, Oy, Ry, Sy, -1];
    var ji = function(a) {
        this.F = _.A(a)
    };
    _.T(ji, _.D);
    ji.da = [4];
    var dz = [0, Sy, Oy, Sy, Ty, Vy, az, bz, Oy, cz];
    var di = function(a) {
        this.F = _.A(a)
    };
    _.T(di, _.D);
    var gi = function(a, b) {
            return _.$h(a, 1, b)
        },
        hi = function(a, b) {
            return Sh(a, 4, b)
        },
        fi = function(a, b) {
            return _.pi(a, 2, b)
        },
        ez = [0, Vy, Qy, Sy, Ry];
    var Vh = function(a) {
        this.F = _.A(a)
    };
    _.T(Vh, _.D);
    var Uh = function(a, b) {
            return ki(a, 1, b)
        },
        Rh = function(a, b) {
            return jk(a, 3, ji, b)
        },
        Th = function(a, b) {
            return _.$h(a, 4, b)
        };
    Vh.prototype.gi = function() {
        return _.fg(this, 7, 0)
    };
    Vh.da = [10, 3];
    var fz = [0, Sy, Oy, Uy, dz, Vy, ez, Ry, Vy, 2, Ty];
    var si = function(a) {
        this.F = _.A(a)
    };
    _.T(si, _.D);
    var gz = [0, Vy, Ry, Oy];
    var hz = function(a) {
        this.F = _.A(a)
    };
    _.T(hz, _.D);
    var Qh = function(a, b) {
            return Oe(a, 2, Vh, b)
        },
        ei = function(a, b) {
            _.bi(a, 5, b)
        },
        xi = function(a, b) {
            _.bi(a, 9, b)
        },
        yi = function(a, b) {
            return ki(a, 10, b)
        };
    hz.da = [2];
    var iz = [0, Vy, Uy, fz, Vy, Sy, ez, Sy, Ry, Qy, gz, Sy];
    var ti = function(a) {
        this.F = _.A(a)
    };
    _.T(ti, _.D);
    var vi = function(a) {
        var b = new hz;
        b = _.$h(b, 1, 1);
        return Oe(a, 1, hz, b)
    };
    ti.da = [1];
    ti.prototype.g = Gf([0, Uy, iz]);
    var jz = function(a) {
        this.F = _.A(a)
    };
    _.T(jz, _.D);
    var Hy = [2, 3];
    var kz = function(a) {
        this.F = _.A(a)
    };
    _.T(kz, _.D);
    kz.da = [1];
    var lz = function(a) {
        this.F = _.A(a)
    };
    _.T(lz, _.D);
    lz.da = [1];
    var mz = function(a) {
        this.F = _.A(a)
    };
    _.T(mz, _.D);
    var nz = [2, 3];
    var oz = function(a) {
        this.F = _.A(a)
    };
    _.T(oz, _.D);
    oz.da = [2];
    var pz = function(a) {
        this.F = _.A(a)
    };
    _.T(pz, _.D);
    pz.da = [6, 4];
    var qz = function(a) {
        this.F = _.A(a)
    };
    _.T(qz, _.D);
    qz.da = [4, 5];
    var rz = function(a) {
        this.F = _.A(a)
    };
    _.T(rz, _.D);
    var sz = function(a) {
        this.F = _.A(a)
    };
    _.T(sz, _.D);
    sz.prototype.fi = function() {
        return By(this, rz, 2)
    };
    sz.da = [1];
    var tz = function(a) {
        this.F = _.A(a)
    };
    _.T(tz, _.D);
    var uz = function(a) {
        this.F = _.A(a)
    };
    _.T(uz, _.D);
    uz.da = [1];
    var vz = function(a) {
        this.F = _.A(a)
    };
    _.T(vz, _.D);
    var wz = [0, Vy, Oy];
    var xz = function(a) {
        this.F = _.A(a)
    };
    _.T(xz, _.D);
    var yz = [0, Ny];
    var zz = function(a) {
        this.F = _.A(a)
    };
    _.T(zz, _.D);
    zz.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 1)
    };
    var Az = [0, Sy, yz, wz];
    var Bz = function(a) {
        this.F = _.A(a)
    };
    _.T(Bz, _.D);
    Bz.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    _.Cz = function(a) {
        this.F = _.A(a)
    };
    _.T(_.Cz, _.D);
    _.Dz = function(a) {
        this.F = _.A(a)
    };
    _.T(_.Dz, _.D);
    _.Dz.prototype.Ue = ca(0);
    _.Dz.prototype.Pd = ca(1);
    _.Dz.prototype.We = ca(2);
    _.Dz.da = [15, 24];
    var Ez = function(a) {
        this.F = _.A(a)
    };
    _.T(Ez, _.D);
    Ez.prototype.getAdUnitPath = function() {
        return _.I(this, 2)
    };
    var rv = function(a) {
        this.F = _.A(a)
    };
    _.T(rv, _.D);
    var Fz = [5, 7, 8, 9];
    var Gz = function(a) {
        this.F = _.A(a)
    };
    _.T(Gz, _.D);
    var Hz = function(a) {
        this.F = _.A(a)
    };
    _.T(Hz, _.D);
    Hz.da = [4, 5, 6];
    var Iz = function(a) {
        this.F = _.A(a)
    };
    _.T(Iz, _.D);
    Iz.prototype.getValue = function() {
        return _.I(this, 2)
    };
    Iz.prototype.ng = function() {
        return _.Ai(this, 2)
    };
    var Jz = function(a) {
        this.F = _.A(a)
    };
    _.T(Jz, _.D);
    var nv = function(a) {
        this.F = _.A(a)
    };
    _.T(nv, _.D);
    nv.da = [13];
    var lv = function(a) {
        this.F = _.A(a)
    };
    _.T(lv, _.D);
    lv.da = [15, 13];
    var Kz = function(a) {
        this.F = _.A(a)
    };
    _.T(Kz, _.D);
    var ik = function(a) {
            var b = new Kz;
            return _.$h(b, 1, a)
        },
        Lz = [0, Vy];
    var bk = function(a) {
        this.F = _.A(a)
    };
    _.T(bk, _.D);
    var Mz = function(a) {
            var b = new bk;
            return ki(b, 1, a)
        },
        Nz = function(a) {
            var b = window.Date.now();
            b = _.z(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
            return _.Xh(a, 3, b)
        };
    bk.prototype.ib = function(a) {
        return _.bi(this, 10, a)
    };
    var Oz = Hf(bk),
        Pz = [0, Sy, -1, Oy, Qy, -2, Oy, My, Ry, Lz, Ry];
    var Qz = [0, 1, [0, Py, -2], -1, Sy, -1, Ry, [0, 3, Vy, Sy], Oy, Wy];
    var Rz = function(a) {
        this.F = _.A(a)
    };
    _.T(Rz, _.D);
    Rz.da = [1, 2];
    Rz.prototype.g = Gf([0, Uy, Qz, Uy, Pz]);
    var qv = function(a) {
        this.F = _.A(a)
    };
    _.T(qv, _.D);
    var Sz = function(a) {
        this.F = _.A(a)
    };
    _.T(Sz, _.D);
    Sz.prototype.getValue = function() {
        return _.I(this, 1)
    };
    Sz.prototype.ng = function() {
        return _.Ai(this, 1)
    };
    Sz.prototype.getVersion = function() {
        return _.fg(this, 5, 0)
    };
    var kv = function(a) {
        this.F = _.A(a)
    };
    _.T(kv, _.D);
    var sv = function(a) {
        this.F = _.A(a)
    };
    _.T(sv, _.D);
    sv.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    var tv = function(a) {
        this.F = _.A(a)
    };
    _.T(tv, _.D);
    var ov = function(a) {
        this.F = _.A(a)
    };
    _.T(ov, _.D);
    var vv = function(a) {
        this.F = _.A(a)
    };
    _.T(vv, _.D);
    var Tz = function(a) {
        this.F = _.A(a)
    };
    _.T(Tz, _.D);
    Tz.prototype.getContentUrl = function() {
        return _.I(this, 2)
    };
    Tz.da = [11];
    var Uz = function(a) {
        this.F = _.A(a)
    };
    _.T(Uz, _.D);
    Uz.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 4)
    };
    Uz.da = [2, 23];
    var Vz = function(a) {
        this.F = _.A(a)
    };
    _.T(Vz, _.D);
    var Wz = function(a) {
        this.F = _.A(a)
    };
    _.T(Wz, _.D);
    var Xz = function(a) {
        this.F = _.A(a)
    };
    _.T(Xz, _.D);
    var Yz = function(a) {
        this.F = _.A(a)
    };
    _.T(Yz, _.D);
    var Zz = function(a) {
        this.F = _.A(a)
    };
    _.T(Zz, _.D);
    var $z = function(a) {
        this.F = _.A(a)
    };
    _.T($z, _.D);
    $z.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 2)
    };
    var aA = function(a) {
        this.F = _.A(a)
    };
    _.T(aA, _.D);
    var bA = function(a) {
        this.F = _.A(a)
    };
    _.T(bA, _.D);
    var pv = function(a) {
        this.F = _.A(a)
    };
    _.T(pv, _.D);
    var cA = function(a) {
        return By(a, $z, 5)
    };
    pv.prototype.getWidth = function() {
        return _.Ey(this, 9)
    };
    pv.prototype.getHeight = function() {
        return _.Ey(this, 10)
    };
    pv.da = [3, 7, 27, 11, 32];
    var dA = function(a) {
        this.F = _.A(a)
    };
    _.T(dA, _.D);
    dA.prototype.getHeight = function() {
        return Bi(this, 6)
    };
    dA.prototype.getWidth = function() {
        return Bi(this, 7)
    };
    dA.prototype.getEscapedQemQueryId = function() {
        return ck(this, 34)
    };
    dA.da = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63, 67];
    var mv = [39, 48];
    var eA = function(a) {
        this.F = _.A(a)
    };
    _.T(eA, _.D);
    var fA = Hf(eA);
    eA.da = [1, 2, 3];
    var gA = window;
    var Hv = function(a) {
        this.F = _.A(a)
    };
    _.T(Hv, _.D);
    Hv.da = [15];
    var Gv = function(a) {
        this.F = _.A(a)
    };
    _.T(Gv, _.D);
    Gv.prototype.getCorrelator = function() {
        return _.Lg(this, 1)
    };
    Gv.prototype.setCorrelator = function(a) {
        return _.$i(this, 1, a)
    };
    var Fv = function(a) {
        this.F = _.A(a)
    };
    _.T(Fv, _.D);
    var hA, iA, jA;
    _.U = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    hA = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    iA = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? "" : b
    };
    jA = function(a) {
        var b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var kA = new _.U(590317302),
        lA = new _.U(1958);
    _.Jf = function(a) {
        var b = "Bc";
        if (a.Bc && a.hasOwnProperty(b)) return a.Bc;
        b = new a;
        return a.Bc = b
    };
    var Kf = function() {
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
    var mA = _.Nx || Qx;
    _.nA = zi(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.wx(xx);
        return !b.parentElement
    });
    _.Hm = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Hm.prototype.equals = function(a) {
        return a instanceof _.Hm && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    _.Hm.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Hm.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Hm.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Lm = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.q = _.Lm.prototype;
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
    var oA, pA, rA;
    oA = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    pA = 2147483648 * Math.random() | 0;
    _.qA = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    rA = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var hg, vA, uA, yA, AA, FA;
    hg = function(a) {
        return a ? new _.sA(_.tA(a)) : Nw || (Nw = new _.sA)
    };
    vA = function(a, b) {
        xa(b, function(c, d) {
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : uA.hasOwnProperty(d) ? a.setAttribute(uA[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    uA = {
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
    _.xA = function(a) {
        a = a.document;
        a = _.wA(a) ? a.documentElement : a.body;
        return new _.Lm(a.clientWidth, a.clientHeight)
    };
    yA = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Qx && _.wA(a) ? a.documentElement : a.body || a.documentElement
    };
    _.zA = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    AA = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!_.ra(f) || _.ja(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.ja(f)) {
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
                _.Ow(g ? _.fa(f) : f, d)
            }
        }
    };
    _.BA = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.wA = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.CA = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.DA = function(a) {
        var b;
        if (mA && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ja(b) && 1 == b.nodeType ? b : null
    };
    _.EA = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.tA = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    FA = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.zA(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    _.sj = function(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    _.sA = function(a) {
        this.g = a || _.t.document || document
    };
    _.q = _.sA.prototype;
    _.q.Vk = function(a) {
        var b = this.g;
        return "string" === typeof a ? b.getElementById(a) : a
    };
    _.q.Sm = _.sA.prototype.Vk;
    _.q.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    _.q.createElement = function(a) {
        return _.BA(this.g, a)
    };
    _.q.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    _.q.append = function(a, b) {
        AA(_.tA(a), a, arguments)
    };
    _.q.Mj = _.CA;
    _.q.contains = _.EA;
    var HA = function() {
            return Da && Ea ? Ea.mobile : !GA() && (Ha("iPod") || Ha("iPhone") || Ha("Android") || Ha("IEMobile"))
        },
        GA = function() {
            return Da && Ea ? !Ea.mobile && (Ha("iPad") || Ha("Android") || Ha("Silk")) : Ha("iPad") || Ha("Android") && !Ha("Mobile") || Ha("Silk")
        };
    var JA, bp;
    _.IA = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    JA = function(a) {
        return a ? decodeURI(a) : a
    };
    _.yn = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) _.yn(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    bp = /#|$/;
    var ll, zk, KA, Ak, Tm, lp, Sv, Rv, MA, NA, Um, OA, PA, QA, RA, SA, TA, dv, UA, VA, Fp, Pj, Gp, Lp, WA, YA, ZA, $A, aB, bB, Wj, cB, so, jo, dB, Dn, eB, fB;
    _.Rk = function(a) {
        try {
            return !!a && null != a.location.href && Lx(a, "foo")
        } catch (b) {
            return !1
        }
    };
    ll = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? KA(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.Rk(c) || !a(c));) c = KA(c)
    };
    zk = function() {
        var a = window;
        ll(function(b) {
            a = b;
            return !1
        });
        return a
    };
    KA = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Ak = function(a) {
        return _.Rk(a.top) ? a.top : null
    };
    _.$o = function(a, b) {
        var c = _.Zf("SCRIPT", a);
        ob(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Tm = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.nh = function() {
        if (!_.u.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.u.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Bn = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.LA = function(a) {
        var b = [];
        _.Bn(a, function(c) {
            b.push(c)
        });
        return b
    };
    lp = function(a, b) {
        return za(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.oh = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    Sv = zi(function() {
        return _.qj(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], MA) || 1E-4 > Math.random()
    });
    Rv = zi(function() {
        return MA("MSIE")
    });
    MA = function(a) {
        return _.Fa(Ca(), a)
    };
    NA = /^([0-9.]+)px$/;
    Um = function(a) {
        return (a = NA.exec(a)) ? +a[1] : null
    };
    OA = function() {
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
    PA = function() {
        var a = _.t.location.href;
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    QA = {
        Wm: "allow-forms",
        Xm: "allow-modals",
        Ym: "allow-orientation-lock",
        Zm: "allow-pointer-lock",
        an: "allow-popups",
        bn: "allow-popups-to-escape-sandbox",
        cn: "allow-presentation",
        dn: "allow-same-origin",
        en: "allow-scripts",
        fn: "allow-top-navigation",
        gn: "allow-top-navigation-by-user-activation"
    };
    RA = zi(function() {
        return _.LA(QA)
    });
    SA = function(a) {
        var b = RA();
        return a.length ? _.oj(b, function(c) {
            return !(0 <= _.da(a, c))
        }) : b
    };
    TA = function() {
        var a = _.Zf("IFRAME"),
            b = {};
        _.Ow(RA(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    dv = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && _.Fa(a, "[native code]")
    };
    UA = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = KA(a))) break
        }
        return null
    };
    VA = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Zf("IFRAME");
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
    _.Op = zi(function() {
        return HA() ? 2 : GA() ? 1 : 0
    });
    Fp = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.pp = function(a, b) {
        _.Bn(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    Pj = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    Gp = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Tm(a, window);
            if (d) {
                if (b(d, a)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Lp = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.Pw(a, parseFloat)
    };
    WA = {};
    _.XA = (WA["http://googleads.g.doubleclick.net"] = !0, WA["http://pagead2.googlesyndication.com"] = !0, WA["https://googleads.g.doubleclick.net"] = !0, WA["https://pagead2.googlesyndication.com"] = !0, WA);
    YA = function(a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    };
    ZA = [];
    $A = function() {
        var a = ZA;
        ZA = [];
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    aB = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    bB = function() {
        var a = void 0 === a ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    };
    Wj = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: bB(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    cB = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (ZA.push(b), 1 == ZA.length && (_.u.Promise ? _.u.Promise.resolve().then($A) : window.setImmediate ? setImmediate($A) : setTimeout($A, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    so = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    jo = function(a) {
        return 0 === a || so(a)
    };
    dB = function(a) {
        return new _.u.Promise(function(b) {
            setTimeout(function() {
                return void b(void 0)
            }, a)
        })
    };
    Dn = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.Zf = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    eB = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.Rk(a) && (b = a);
        return b
    };
    _.Li = function(a) {
        return _.E(kA) || Ka() && HA() ? fB(a, !0) : 1
    };
    fB = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? Ak(a) : a;
        if (!c) return 1;
        a = 0 === (0, _.Op)();
        b = !!c.document.querySelector('meta[name=viewport][content*="width=device-width"]');
        var d = c.innerWidth;
        c = c.outerWidth;
        if (0 === d) return 1;
        var e = Math.round(100 * (c / d + _.z(Number, "EPSILON"))) / 100;
        return 1 === e ? 1 : a || b ? e : Math.round(100 * (c / d / .4 + _.z(Number, "EPSILON"))) / 100
    };
    _.gB = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.gB.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.gB.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.hB = function(a) {
        return new _.gB(a.top, a.right, a.bottom, a.left)
    };
    _.gB.prototype.contains = function(a) {
        return this && a ? a instanceof _.gB ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.gB.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.gB.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.gB.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var iB = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        jB = function(a) {
            return new _.gB(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        kB = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new iB(c, e, d - c, a - e)
            }
            return null
        };
    iB.prototype.contains = function(a) {
        return a instanceof _.Hm ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    iB.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    iB.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    iB.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var lB = function(a) {
        return (a = void 0 === a ? Of() : a) ? _.Rk(a.master) ? a.master : null : null
    };
    var oB, qB, Km, rB, sB, Gm;
    _.nB = function(a, b, c) {
        if ("string" === typeof b)(b = _.mB(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.mB(c, d);
                f && (c.style[f] = e)
            }
    };
    oB = {};
    _.mB = function(a, b) {
        var c = oB[b];
        if (!c) {
            var d = _.qA(b);
            c = d;
            void 0 === a.style[d] && (d = (Qx ? "Webkit" : Px ? "Moz" : _.Nx ? "ms" : null) + rA(d), void 0 !== a.style[d] && (c = d));
            oB[b] = c
        }
        return c
    };
    _.pB = function(a, b) {
        var c = _.tA(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    qB = function(a, b) {
        return _.pB(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Km = function(a) {
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
    rB = function(a) {
        if (_.Nx && !(8 <= Number(Zx))) return a.offsetParent;
        var b = _.tA(a),
            c = qB(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = qB(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    sB = function(a) {
        var b = _.tA(a),
            c = new _.Hm(0, 0);
        var d = b ? _.tA(b) : document;
        d = !_.Nx || 9 <= Number(Zx) || _.wA(hg(d).g) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Km(a);
        d = hg(b).g;
        b = yA(d);
        d = d.parentWindow || d.defaultView;
        b = _.Nx && d.pageYOffset != b.scrollTop ? new _.Hm(b.scrollLeft, b.scrollTop) : new _.Hm(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Gm = function(a, b) {
        var c = new _.Hm(0, 0),
            d = _.zA(_.tA(a));
        if (!Lx(d, "parent")) return c;
        do {
            var e = d == b ? sB(a) : _.tB(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.tB = function(a) {
        a = Km(a);
        return new _.Hm(a.left, a.top)
    };
    _.uB = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Jm = function(a, b) {
        if ("none" != qB(b, "display")) return a(b);
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
    _.vB = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Qx && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Km(a), new _.Lm(a.right - a.left, a.bottom - a.top)) : new _.Lm(b, c)
    };
    var Cp;
    _.wB = _.hw(["//fonts.googleapis.com/css"]);
    Cp = function(a) {
        a = lB(Of(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var xB = function(a) {
        this.F = _.A(a)
    };
    _.T(xB, _.D);
    var yB = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var zB = function(a) {
        this.F = _.A(a)
    };
    _.T(zB, _.D);
    zB.prototype.getVersion = function() {
        return _.Ey(this, 2)
    };
    zB.da = [3];
    var AB = function(a) {
        this.F = _.A(a)
    };
    _.T(AB, _.D);
    var BB = function(a) {
        this.F = _.A(a)
    };
    _.T(BB, _.D);
    var CB = function(a) {
        this.F = _.A(a)
    };
    _.T(CB, _.D);
    CB.prototype.getVersion = function() {
        return _.Ey(this, 1)
    };
    var DB = function(a) {
        this.F = _.A(a)
    };
    _.T(DB, _.D);
    var EB = function(a) {
        this.F = _.A(a)
    };
    _.T(EB, _.D);
    var FB = function(a) {
        var b = new EB;
        return _.bi(b, 1, a)
    };
    var GB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        HB = 6 + GB.reduce(function(a, b) {
            return a + b
        });
    var IB = function(a) {
        this.F = _.A(a)
    };
    _.T(IB, _.D);
    var JB = function(a) {
        this.F = _.A(a)
    };
    _.T(JB, _.D);
    JB.prototype.getVersion = function() {
        return _.Ey(this, 1)
    };
    var KB = function(a) {
        this.F = _.A(a)
    };
    _.T(KB, _.D);
    var LB = function(a) {
        this.F = _.A(a)
    };
    _.T(LB, _.D);
    var MB = function(a) {
        var b = new LB;
        return _.bi(b, 1, a)
    };
    var NB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        OB = 6 + NB.reduce(function(a, b) {
            return a + b
        });
    var PB = function(a) {
        this.F = _.A(a)
    };
    _.T(PB, _.D);
    var QB = function(a) {
        this.F = _.A(a)
    };
    _.T(QB, _.D);
    var RB = function(a) {
        this.F = _.A(a)
    };
    _.T(RB, _.D);
    RB.prototype.getVersion = function() {
        return _.Ey(this, 1)
    };
    var SB = function(a) {
        this.F = _.A(a)
    };
    _.T(SB, _.D);
    var TB = function(a) {
        this.F = _.A(a)
    };
    _.T(TB, _.D);
    var UB = function(a) {
        var b = new TB;
        return _.bi(b, 1, a)
    };
    var VB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        WB = 6 + VB.reduce(function(a, b) {
            return a + b
        });
    var XB = function(a) {
        this.F = _.A(a)
    };
    _.T(XB, _.D);
    var YB = function(a) {
        this.F = _.A(a)
    };
    _.T(YB, _.D);
    YB.prototype.getVersion = function() {
        return _.Ey(this, 1)
    };
    var ZB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        $B = 6 + ZB.reduce(function(a, b) {
            return a + b
        });
    var aC = function(a) {
        this.F = _.A(a)
    };
    _.T(aC, _.D);
    _.Il = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    _.bC = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var cC = null,
        dC = function() {
            if (null === cC) {
                cC = "";
                try {
                    var a = "";
                    try {
                        a = _.t.top.location.hash
                    } catch (c) {
                        a = _.t.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        cC = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return cC
        };
    var eC = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.slotId = e;
        this.taskId = void 0;
        this.uniqueId = Math.random()
    };
    var fC, gC, hC, iC, jC;
    fC = _.t.performance;
    gC = !!(fC && fC.mark && fC.measure && fC.clearMarks);
    hC = zi(function() {
        var a;
        if (a = gC) a = dC(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    iC = function(a, b) {
        this.A = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.A = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.g = hC() || (null != c ? c : Math.random() < a)
    };
    _.Gl = function(a) {
        a && fC && hC() && (fC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), fC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    jC = function(a, b, c, d, e, f) {
        a.g && (b = new eC(b, c, d, void 0 === e ? 0 : e, f), !a.g || 2048 < a.A.length || a.A.push(b))
    };
    iC.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new eC(a, b, _.Wf() || _.Vf());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        fC && hC() && fC.mark(b);
        return a
    };
    iC.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (_.Wf() || _.Vf()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            fC && hC() && fC.mark(b);
            !this.g || 2048 < this.A.length || this.A.push(a)
        }
    };
    var Ns = function(a, b, c) {
        var d = _.Wf();
        d && jC(a, b, 9, d, 0, c)
    };
    var nC, mC, pC, oC;
    _.kC = function() {
        this.l = "&";
        this.A = {};
        this.j = 0;
        this.g = []
    };
    _.lC = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    nC = function(a, b, c, d, e) {
        var f = [];
        _.Bn(a, function(g, h) {
            (g = mC(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    };
    mC = function(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(mC(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(nC(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    pC = function(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = oC(a) - b.length;
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
                var l = nC(h[k], a.l, ",$");
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
    oC = function(a) {
        var b = 1,
            c;
        for (c in a.A) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    };
    _.eg = function(a) {
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
    var qC = function(a, b, c, d, e) {
            ag(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
        },
        dg = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.Bn(a, function(e, f) {
                if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            ys(d, c)
        },
        ys = function(a, b) {
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
            }), c.fetch(a, b)) : qC(c, a, void 0, b, d)
        };
    var rC = function(a, b) {
        var c = new aC;
        a = _.L(c, 1, a);
        b = _.aj(a, 2, b);
        this.j = _.ke(b)
    };
    var sC = function(a) {
        this.F = _.A(a)
    };
    _.T(sC, _.D);
    var uC = function(a, b) {
            return ej(a, 1, tC, sd(b))
        },
        vC = function(a, b) {
            return ej(a, 3, tC, null == b ? b : Kc(b))
        },
        tC = [1, 2, 3];
    var wC = function(a) {
        this.F = _.A(a)
    };
    _.T(wC, _.D);
    var yC = function(a, b) {
            return ej(a, 4, xC, _.Hc(b))
        },
        xC = [2, 4];
    var zC = function(a) {
        this.F = _.A(a)
    };
    _.T(zC, _.D);
    var AC = function(a) {
            var b = new zC;
            return _.aj(b, 1, a)
        },
        BC = function(a, b) {
            return _.bi(a, 3, b)
        },
        CC = function(a, b) {
            return jk(a, 4, sC, b)
        };
    zC.da = [4];
    var DC = function(a) {
        this.F = _.A(a)
    };
    _.T(DC, _.D);
    var EC = function(a) {
        this.F = _.A(a)
    };
    _.T(EC, _.D);
    var Cl = function(a) {
        this.F = _.A(a)
    };
    _.T(Cl, _.D);
    var sl = function(a) {
        this.F = _.A(a)
    };
    _.T(sl, _.D);
    var rl = function(a) {
        this.F = _.A(a)
    };
    _.T(rl, _.D);
    var pl = function(a) {
        this.F = _.A(a)
    };
    _.T(pl, _.D);
    var yl = function(a) {
        this.F = _.A(a)
    };
    _.T(yl, _.D);
    var FC = function(a) {
        this.F = _.A(a)
    };
    _.T(FC, _.D);
    var GC = function(a) {
        this.F = _.A(a)
    };
    _.T(GC, _.D);
    var ol = function(a) {
        this.F = _.A(a)
    };
    _.T(ol, _.D);
    ol.prototype.getTagSessionCorrelator = function() {
        return _.Lg(this, 2)
    };
    var xl = function(a) {
        var b = new FC;
        return _.gj(a, 13, vl, b)
    };
    ol.da = [4];
    var vl = [6, 7, 8, 9, 11, 13, 14];
    var HC = function(a) {
        this.F = _.A(a)
    };
    _.T(HC, _.D);
    var IC = function(a) {
        this.F = _.A(a)
    };
    _.T(IC, _.D);
    var iq = function(a) {
        this.F = _.A(a)
    };
    _.T(iq, _.D);
    var dj = function(a) {
        this.F = _.A(a)
    };
    _.T(dj, _.D);
    var fj = [3, 4];
    var cj = function(a) {
        this.F = _.A(a)
    };
    _.T(cj, _.D);
    var JC = function(a) {
            var b = new cj;
            return _.gj(b, 2, hj, a)
        },
        hj = [1, 2, 3, 4, 5];
    var Zi = function(a) {
        this.F = _.A(a)
    };
    _.T(Zi, _.D);
    Zi.prototype.getTagSessionCorrelator = function() {
        return _.Lg(this, 2)
    };
    Zi.da = [4];
    var Ml = function(a) {
        this.F = _.A(a)
    };
    _.T(Ml, _.D);
    Ml.da = [3];
    var Ll = function(a) {
        this.F = _.A(a)
    };
    _.T(Ll, _.D);
    Ll.da = [4, 5];
    var Kl = function(a) {
        this.F = _.A(a)
    };
    _.T(Kl, _.D);
    Kl.prototype.getTagSessionCorrelator = function() {
        return _.Lg(this, 1)
    };
    Kl.da = [2];
    var Jl = function(a) {
        this.F = _.A(a)
    };
    _.T(Jl, _.D);
    var Pl = [4, 6];
    var KC = function(a) {
        this.F = _.A(a)
    };
    _.T(KC, _.D);
    KC.prototype.getTagSessionCorrelator = function() {
        return _.Lg(this, 1)
    };
    KC.prototype.getMessageId = function() {
        return _.fg(this, 8, 0)
    };
    KC.prototype.getMessageArgs = function(a) {
        return Gy(this, 9, a)
    };
    KC.da = [2, 9];
    var MC = function(a) {
            this.Qc = new LC(a)
        },
        LC = function(a) {
            this.hi = new NC(a);
            this.te = new OC(a)
        },
        NC = function(a) {
            this.mk = new PC(a);
            this.refresh = new QC(a)
        },
        PC = function(a) {
            this.nk = new RC(a)
        },
        RC = function(a) {
            this.ie = function(b) {
                var c = b.me,
                    d = b.Of,
                    e = b.ni,
                    f = b.oi;
                b = b.ki;
                var g = AC("XVNPAd"),
                    h = new sC;
                d = ej(h, 2, tC, ed(Math.round(d)));
                a(BC(CC(CC(CC(CC(g, d), vC(new sC, e)), vC(new sC, f)), vC(new sC, b)), yC(new wC, c)))
            }
        },
        QC = function(a) {
            this.Wl = new SC(a)
        },
        SC = function(a) {
            this.ie = function(b) {
                var c = b.me,
                    d = b.ym;
                b = AC("e1Ueh");
                var e = new sC;
                d = ej(e, 2, tC, ed(Math.round(d)));
                a(BC(CC(b, d), yC(new wC, c)))
            }
        },
        OC = function(a) {
            this.gh = new TC(a);
            this.Vj = new UC(a);
            this.dk = new VC(a)
        },
        UC = function(a) {
            this.ie = function(b) {
                b = b.me;
                a(BC(AC("rsv8Kc"), yC(new wC, b)))
            }
        },
        VC = function(a) {
            this.Ac = function(b) {
                var c = b.Pc,
                    d = b.Nf;
                b = b.status;
                d = CC(CC(AC("SOomke"), uC(new sC, d)), uC(new sC, b));
                b = new wC;
                c = ej(b, 2, xC, ed(Math.round(c)));
                a(BC(d, c))
            }
        },
        TC = function(a) {
            this.rh = new WC(a)
        },
        WC = function(a) {
            this.Ac = function(b) {
                var c = b.Pc;
                b = b.status;
                b = CC(AC("TP3y1d"), uC(new sC, b));
                var d = new wC;
                c = ej(d, 2, xC, ed(Math.round(c)));
                a(BC(b, c))
            }
        },
        XC = function() {
            rC.apply(this, arguments);
            var a = this;
            this.Gc = new MC(function(b) {
                return a.hm(b)
            })
        };
    _.T(XC, rC);
    _.YC = function() {
        XC.apply(this, arguments)
    };
    _.T(_.YC, XC);
    _.q = _.YC.prototype;
    _.q.im = function() {
        this.A.apply(this, _.qi(_.Ua.apply(0, arguments).map(function(a) {
            return {
                Ec: !0,
                yd: 2,
                jd: a.toJSON()
            }
        })))
    };
    _.q.Nc = function() {
        this.A.apply(this, _.qi(_.Ua.apply(0, arguments).map(function(a) {
            return {
                Ec: !0,
                yd: 5,
                jd: a.toJSON()
            }
        })))
    };
    _.q.fh = function() {
        this.A.apply(this, _.qi(_.Ua.apply(0, arguments).map(function(a) {
            return {
                Ec: !0,
                yd: 15,
                jd: a.toJSON()
            }
        })))
    };
    _.q.jj = ca(3);
    _.q.km = function() {
        this.A.apply(this, _.qi(_.Ua.apply(0, arguments).map(function(a) {
            return {
                Ec: !0,
                yd: 17,
                jd: a.toJSON()
            }
        })))
    };
    _.q.hm = function() {
        this.A.apply(this, _.qi(_.Ua.apply(0, arguments).map(function(a) {
            return {
                Ec: !1,
                yd: 1,
                jd: a.toJSON()
            }
        })))
    };
    var ZC = function(a, b) {
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
    var $C = function(a, b, c, d, e, f, g, h) {
        _.YC.call(this, a, b);
        this.C = c;
        this.o = d;
        this.Da = e;
        this.I = f;
        this.K = g;
        this.M = h;
        this.g = [];
        this.l = null;
        this.D = !1
    };
    _.T($C, _.YC);
    var aD = function(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.g.length) {
            var b = cg(a.g, a.j);
            a.o(a.C + "?e=1", b);
            a.g = []
        }
    };
    $C.prototype.A = function() {
        var a = _.Ua.apply(0, arguments),
            b = this;
        try {
            this.K && 65536 <= cg(this.g.concat(a), this.j).length && aD(this), this.M && !this.D && (this.D = !0, this.M.g(function() {
                aD(b)
            })), this.g.push.apply(this.g, _.qi(a)), this.g.length >= this.I && aD(this), this.g.length && null === this.l && (this.l = setTimeout(function() {
                aD(b)
            }, this.Da))
        } catch (c) {
            bg(c, this.j)
        }
    };
    var Wv = function(a, b, c, d, e, f) {
        $C.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", ZC, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!_.u.globalThis.fetch, f)
    };
    _.T(Wv, $C);
    var bD = new hA(494575051),
        cD = new jA(489560439),
        dD = new jA(505762507);
    var eD, wo, up, fD, gD, hD, iD, jD, kD, Uu, Tu, hv, lD, Uv, mD, nD, oD, Ko, pD, qD, rD, sD, Sr, tD, uD, vD, Tv, xv, wD, cv, xD, yD, zD, Ho, AD, GD, ID, hr, JD, El, tu, LD, Zq, MD, ND, qq, OD, PD, QD, It, Pt, RD, SD, TD, UD, VD, av, WD, Zu, XD, xn, un, YD, ZD, yk, Ou, aE, bE, cE, ro, dE, Pu, Yk, eE, fE, gE, hE, Xk, Ft, Rt, Gt, iE, jE, Ht, kE, lE, mE, nE, Ts, ws, oE, ts, pE, qE, fF, gF, hF, Jv, Kv, iF, Lv, Iv, jF, kF, wt, Nv, lF;
    eD = new _.U(607106222);
    wo = new _.U(577939489, !0);
    up = new hA(7, .1);
    fD = new _.U(212);
    gD = new _.U(561694963, !0);
    hD = new _.U(609732864);
    iD = new hA(462420536);
    jD = new _.U(476475256, !0);
    kD = new hA(438663674);
    Uu = new hA(45409629);
    Tu = new hA(522348973);
    hv = new hA(550605190);
    lD = new hA(564509649);
    Uv = new hA(578655462, 20);
    _.pq = new _.U(571050247, !0);
    _.kq = new _.U(570864697, !0);
    mD = new _.U(558225291);
    nD = new _.U(586621833, !0);
    oD = new _.U(591917863);
    Ko = new _.U(45619539);
    pD = new _.U(582386403);
    qD = new _.U(603086552);
    rD = new _.U(577861852);
    sD = new _.U(573236024, !0);
    Sr = new _.U(453);
    tD = new _.U(454);
    uD = new hA(377289019, 1E4);
    vD = new hA(529, 20);
    Tv = new hA(573282293, .01);
    xv = new _.U(605625700, !0);
    wD = new iA(10);
    cv = new hA(610770343);
    xD = new _.U(607352955, !0);
    yD = new _.U(610525552);
    zD = new _.U(360245597, !0);
    Ho = new _.U(540043576, !0);
    AD = new hA(592342304);
    _.BD = new _.U(479390945);
    _.CD = new _.U(518650310);
    _.DD = new _.U(547020083);
    _.ED = new _.U(561164161, !0);
    _.FD = new hA(550718589, 250);
    GD = new _.U(586382198);
    _.HD = new _.U(600451522, !0);
    ID = new hA(575880738, 10);
    hr = new hA(586681283);
    JD = new _.U(599186119, !0);
    _.KD = new _.U(531615531);
    El = new _.U(85);
    tu = new _.U(524098256);
    LD = new _.U(595824397, !0);
    Zq = new hA(532520346, 120);
    MD = new _.U(557870754, !0);
    ND = new jA(466086960);
    qq = new _.U(596058628, !0);
    OD = new hA(398776877, 6E4);
    PD = new hA(374201269, 6E4);
    QD = new hA(371364213, 6E4);
    It = new _.U(606310399);
    Pt = new _.U(570764855, !0);
    RD = new iA(579921177, "control_1\\.\\d");
    SD = new hA(570764854, 50);
    TD = new _.U(578725095, !0);
    UD = new _.U(453275889);
    VD = new _.U(377936516, !0);
    av = new hA(599575765, 1E3);
    WD = new _.U(605401295);
    Zu = new hA(609715571);
    XD = new hA(24);
    xn = new jA(1);
    un = new iA(2, "1-0-40");
    YD = new _.U(608664189);
    ZD = new _.U(608330569);
    yk = new _.U(602464517);
    _.$D = new hA(506394061, 100);
    Ou = new jA(489);
    aE = new _.U(392065905);
    bE = new hA(360245595, 500);
    cE = new _.U(561985307);
    ro = new _.U(45397804, !0);
    dE = new _.U(45398607, !0);
    Pu = new _.U(424117738);
    Yk = new _.U(531493729);
    eE = new _.U(563462360, !0);
    fE = new _.U(555237688);
    gE = new _.U(555237687);
    hE = new _.U(555237686);
    Xk = new _.U(507033477, !0);
    Ft = new _.U(399705355);
    Rt = new _.U(45420038);
    Gt = new hA(514795754, 2);
    iE = new hA(609173130);
    jE = new _.U(607425748);
    Ht = new _.U(590730356);
    kE = new _.U(609118749);
    lE = new _.U(564724551);
    mE = new _.U(567489814, !0);
    nE = new _.U(45415915, !0);
    Ts = new _.U(582338617, !0);
    ws = new _.U(588117531);
    oE = new _.U(582287318, !0);
    ts = new hA(596918936, 500);
    pE = new _.U(609053740);
    qE = new _.U(501);
    fF = new _.U(439828594);
    gF = new _.U(483962503);
    hF = new _.U(506738118);
    Jv = new _.U(77);
    Kv = new _.U(78);
    iF = new _.U(83);
    Lv = new _.U(80);
    Iv = new _.U(76);
    jF = new _.U(84);
    kF = new _.U(1958);
    wt = new _.U(1973);
    Nv = new _.U(188);
    lF = new _.U(485990406);
    ya({
        Cn: 0,
        Bn: 1,
        yn: 2,
        sn: 3,
        zn: 4,
        un: 5,
        An: 6,
        wn: 7,
        xn: 8,
        rn: 9,
        vn: 10,
        Dn: 11
    }).map(function(a) {
        return Number(a)
    });
    ya({
        Fn: 0,
        Gn: 1,
        En: 2
    }).map(function(a) {
        return Number(a)
    });
    var mF = function(a, b) {
        this.g = jg(a);
        this.A = b
    };
    mF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return this
    };
    mF.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.A.call(void 0, a.value),
            done: a.done
        }
    };
    var nF = function(a, b) {
            return new mF(a, b)
        },
        oF = function(a) {
            this.A = a;
            this.g = 0
        };
    oF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return this
    };
    oF.prototype.next = function() {
        for (; this.g < this.A.length;) {
            var a = this.A[this.g].next();
            if (!a.done) return a;
            this.g++
        }
        return {
            done: !0
        }
    };
    var pF = function() {
        return new oF(_.Ua.apply(0, arguments).map(jg))
    };
    var qF = _.t.URL,
        rF;
    try {
        new qF("http://example.com"), rF = !0
    } catch (a) {
        rF = !1
    }
    var sF = rF,
        tF = function(a) {
            this.g = new _.u.Map;
            0 == a.indexOf("?") && (a = a.substring(1));
            a = _.y(a.split("&"));
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
    tF.prototype.get = function(a) {
        return (a = this.g.get(a)) && a.length ? a[0] : null
    };
    tF.prototype.getAll = function(a) {
        return [].concat(_.qi(this.g.get(a) || []))
    };
    tF.prototype.has = function(a) {
        return this.g.has(a)
    };
    tF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return pF.apply(null, _.qi(nF(this.g, function(a) {
            var b = a[0];
            return nF(a[1], function(c) {
                return [b, c]
            })
        })))
    };
    tF.prototype.toString = function() {
        return Fg(this)
    };
    var Fg = function(a) {
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
        vF = function(a) {
            var b = _.BA(document, "A");
            try {
                _.kb(b, Qa(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if ("" === c || ":" === c || ":" != c[c.length - 1]) throw Error(a + " is not a valid URL.");
            if (!uF.has(c)) throw Error(a + " is not a valid URL.");
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
            uF.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        },
        lg = function(a) {
            if (sF) {
                try {
                    var b = new qF(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = uF.get(b.protocol);
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
            return vF(a)
        },
        uF = new _.u.Map([
            ["http:", "80"],
            ["https:", "443"],
            ["ws:", "80"],
            ["wss:", "443"],
            ["ftp:", "21"]
        ]),
        kg = function(a) {
            return sF && a.searchParams ? a.searchParams : new tF(a.search)
        };
    var wF = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.Zf("IFRAME", b);
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
    var xF = function(a) {
        this.F = _.A(a)
    };
    _.T(xF, _.D);
    xF.da = [1, 2];
    var yF = function(a) {
        this.F = _.A(a)
    };
    _.T(yF, _.D);
    var Ig = Hf(yF);
    _.V = function() {
        this.M = this.M;
        this.Da = this.Da
    };
    _.V.prototype.M = !1;
    _.V.prototype.za = function() {
        this.M || (this.M = !0, this.A())
    };
    _.S = function(a, b) {
        _.jp(a, _.Mw(Hg, b))
    };
    _.jp = function(a, b) {
        a.M ? b() : (a.Da || (a.Da = []), a.Da.push(b))
    };
    _.V.prototype.A = function() {
        if (this.Da)
            for (; this.Da.length;) this.Da.shift()()
    };
    var zF = function(a, b, c, d) {
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
    _.T(zF, _.V);
    zF.prototype.A = function() {
        delete this.g;
        this.D.clear();
        this.l.clear();
        this.K.clear();
        this.I && (_.$f(this.j, "message", this.I), delete this.I);
        delete this.j;
        delete this.o;
        _.V.prototype.A.call(this)
    };
    var AF = function(a) {
            if (a.g) return a.g;
            a.C && a.C(a.j) ? a.g = a.j : a.g = UA(a.j, a.H);
            var b;
            return null != (b = a.g) ? b : null
        },
        CF = function(a, b, c) {
            if (AF(a))
                if (a.g === a.j)(b = a.D.get(b)) && b(a.g, c);
                else {
                    var d = a.l.get(b);
                    if (d && d.gd) {
                        BF(a);
                        var e = ++a.J;
                        a.K.set(e, {
                            Hc: d.Hc,
                            vk: d.Yd(c),
                            Jl: "addEventListener" === b
                        });
                        a.g.postMessage(d.gd(c, e), "*")
                    }
                }
        },
        BF = function(a) {
            a.I || (a.I = function(b) {
                try {
                    var c = a.o ? a.o(b) : void 0;
                    if (c) {
                        var d = c.Rg,
                            e = a.K.get(d);
                        if (e) {
                            e.Jl || a.K.delete(d);
                            var f;
                            null == (f = e.Hc) || f.call(e, e.vk, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.pb(a.j, "message", a.I))
        };
    var DF = function(a, b) {
            var c = {
                cb: function(d) {
                    d = Ig(d);
                    b.Rb({
                        oc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        EF = {
            Yd: function(a) {
                return a.Rb
            },
            gd: function(a, b) {
                return {
                    __fciCall: {
                        callId: b,
                        command: a.command,
                        spsp: a.spsp || void 0
                    }
                }
            },
            Hc: function(a, b) {
                a({
                    oc: b
                })
            }
        },
        Eq = function(a) {
            _.V.call(this);
            this.g = this.l = !1;
            this.caller = new zF(a, "googlefcPresent", void 0, Mg);
            this.caller.D.set("getDataWithCallback", DF);
            this.caller.l.set("getDataWithCallback", EF)
        };
    _.T(Eq, _.V);
    Eq.prototype.A = function() {
        this.caller.za();
        _.V.prototype.A.call(this)
    };
    Eq.prototype.dd = function(a) {
        if (void 0 === a ? 0 : a) return !1;
        this.l || (this.g = !!AF(this.caller), this.l = !0);
        return this.g
    };
    var Cq = function(a) {
            return new _.u.Promise(function(b) {
                a.dd() && CF(a.caller, "getDataWithCallback", {
                    command: "loaded",
                    Rb: function(c) {
                        b(c.oc)
                    }
                })
            })
        },
        FF = function(a, b) {
            a.dd() && CF(a.caller, "getDataWithCallback", {
                command: "prov",
                spsp: bl(b),
                Rb: function() {}
            })
        };
    var GF = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        HF = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            this.l = a;
            this.g = null;
            this.D = {};
            this.o = 0;
            var c;
            this.K = null != (c = b.timeoutMs) ? c : 500;
            var d;
            this.I = null != (d = b.Xj) ? d : !1;
            this.j = null
        };
    _.T(HF, _.V);
    HF.prototype.A = function() {
        this.D = {};
        this.j && (_.$f(this.l, "message", this.j), delete this.j);
        delete this.D;
        delete this.l;
        delete this.g;
        _.V.prototype.A.call(this)
    };
    var JF = function(a) {
        return "function" === typeof a.l.__tcfapi || null != IF(a)
    };
    HF.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = _.Gx(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.K && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.K));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = GF(c), c.internalBlockOnErrors = b.I, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            KF(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    HF.prototype.removeEventListener = function(a) {
        a && a.listenerId && KF(this, "removeEventListener", null, a.listenerId)
    };
    var LF = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        KF = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
            else if (IF(a)) {
                MF(a);
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
        IF = function(a) {
            if (a.g) return a.g;
            a.g = UA(a.l, "__tcfapiLocator");
            return a.g
        },
        MF = function(a) {
            a.j || (a.j = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.pb(a.l, "message", a.j))
        },
        NF = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = GF(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (dg({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        OF = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return LF(a, c)
            })
        };
    var PF = function(a, b, c) {
            this.g = a;
            this.l = b;
            this.A = void 0 === c ? function() {} : c
        },
        QF = function(a, b, c) {
            return new PF(a, b, c)
        };
    PF.prototype.start = function(a, b) {
        a = void 0 === a ? !1 : a;
        if (this.g === this.g.top) try {
            wF(this.g), RF(this, a, b)
        } catch (c) {}
    };
    var RF = function(a, b, c) {
            b = void 0 === b ? !1 : b;
            var d = {};
            try {
                var e = mg(a.g),
                    f = Eg(a.g);
                d.fc = e;
                d.fctype = f
            } catch (h) {}
            try {
                var g = Gg(a.g.location.href)
            } catch (h) {}
            b && g && (d.href = g);
            b = SF(a.l, d);
            ig(a.g, b, function() {
                a.A(!0)
            }, function() {
                a.A(!1)
            });
            c && FF(new Eq(a.g), c)
        },
        SF = function(a, b) {
            var c = new Tw(Rw, "https://fundingchoicesmessages.google.com/i/%{id}");
            b = _.z(Object, "assign").call(Object, {}, b, {
                ers: 3
            });
            return _.Yw(ax(c, {
                id: a
            }), b)
        };
    var TF = _.u.Promise;
    var UF = function(a) {
        this.A = a
    };
    UF.prototype.send = function(a, b, c) {
        this.A.then(function(d) {
            d.send(a, b, c)
        })
    };
    UF.prototype.g = function(a, b) {
        return this.A.then(function(c) {
            return c.g(a, b)
        })
    };
    var VF = function(a) {
        this.data = a
    };
    var WF = function(a) {
        this.A = a
    };
    WF.prototype.send = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        XF(d.port1, b);
        this.A.postMessage(a, [d.port2].concat(c))
    };
    WF.prototype.g = function(a, b) {
        var c = this;
        return new TF(function(d) {
            c.send(a, d, b)
        })
    };
    var YF = function(a, b) {
            XF(a, b);
            return new WF(a)
        },
        XF = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new VF(c.data, YF(c.ports[0])))
            })
        };
    var Vk = function(a) {
            var b = a.vb,
                c = void 0 === a.Ab ? "ZNWN1d" : a.Ab,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.nf ? void 0 : a.nf;
            return ZF({
                destination: a.destination,
                gi: function() {
                    return b.contentWindow
                },
                zl: $F(a.origin),
                Ab: c,
                onMessage: d,
                nf: e
            })
        },
        ZF = function(a) {
            var b = a.destination,
                c = a.gi,
                d = a.zl,
                e = void 0 === a.pe ? void 0 : a.pe,
                f = a.Ab,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.nf ? void 0 : a.nf,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new UF(new TF(function(l, m) {
                var n = function(p) {
                    p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(YF(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        $F = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var Vg = function(a) {
            return "string" === typeof a
        },
        xo = function(a) {
            return "boolean" === typeof a
        },
        Rg = function(a) {
            return !!a && ("object" === typeof a || "function" === typeof a)
        },
        ot = Tg(),
        Ug = Tg();
    var aG = navigator,
        bG = function(a) {
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
        cG = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return bG(a.toLowerCase())
        },
        dG = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        eG = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        fG = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var xp = function() {
        this.data = [];
        this.g = -1
    };
    xp.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.z(Number, "isInteger").call(Number, a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
    };
    xp.prototype.get = function(a) {
        return !!this.data[a]
    };
    var zp = function(a) {
        -1 === a.g && (a.g = a.data.reduce(function(b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.g
    };
    var gG = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Rb({
                    oc: null != c ? c : void 0,
                    Ne: d ? void 0 : 2
                })
            })
        },
        hG = {
            Yd: function(a) {
                return a.Rb
            },
            gd: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            Hc: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    oc: null != (c = b.returnValue) ? c : void 0,
                    Ne: b.success ? void 0 : 2
                })
            }
        },
        iG = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            var c;
            this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
            this.caller = new zF(a, "__uspapiLocator", function(d) {
                return "function" === typeof d.__uspapi
            }, Yg);
            this.caller.D.set("getDataWithCallback", gG);
            this.caller.l.set("getDataWithCallback", hG)
        };
    _.T(iG, _.V);
    iG.prototype.A = function() {
        this.caller.za();
        _.V.prototype.A.call(this)
    };
    var jG = function(a, b) {
        var c = {};
        if (AF(a.caller)) {
            var d = _.Gx(function() {
                b(c)
            });
            CF(a.caller, "getDataWithCallback", {
                Rb: function(e) {
                    e.Ne || (c = e.oc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var dh = function(a) {
            this.g = a || {
                cookie: ""
            }
        },
        mG = function() {
            var a = kG;
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                yg: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            lG(a, "TESTCOOKIESENABLED");
            return !0
        };
    dh.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.to;
            d = c.fm || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.yg
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    dh.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = hx(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var lG = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            yg: 0,
            path: c,
            domain: d
        })
    };
    dh.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    dh.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = hx(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) lG(this, b[a])
    };
    var kG = new dh("undefined" == typeof document ? null : document);
    var nG = function(a, b) {
        this.g = a;
        this.options = b
    };
    var oG = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        pG = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        qG = function(a, b) {
            (0, a.__gpp)("getSection", function(c) {
                b.Rb({
                    oc: null != c ? c : void 0,
                    Ne: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        rG = {
            Yd: function(a) {
                return a.listener
            },
            gd: function(a, b) {
                a = {};
                return a.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, a
            },
            Hc: function(a, b) {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        sG = {
            Yd: function(a) {
                return a.listener
            },
            gd: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }, c
            },
            Hc: function(a, b) {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                null == a || a(c, b.success)
            }
        },
        tG = {
            Yd: function(a) {
                return a.Rb
            },
            gd: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "getSection",
                    version: "1.1",
                    parameter: a.apiPrefix
                }, c
            },
            Hc: function(a, b) {
                b = b.__gppReturn;
                var c;
                a({
                    oc: null != (c = b.returnValue) ? c : void 0,
                    Ne: b.success ? void 0 : 2
                })
            }
        },
        uG = function(a, b) {
            var c = void 0 === b ? {} : b;
            b = c.gppApiDetectionMode;
            c = c.timeoutMs;
            _.V.call(this);
            this.caller = new zF(a, b && 1 !== b && 3 !== b ? "__gppLocator_non_existent" : "__gppLocator", b && 1 !== b && 2 !== b ? void 0 : function(d) {
                return "function" === typeof d.__gpp
            }, Zg);
            this.caller.D.set("addEventListener", oG);
            this.caller.l.set("addEventListener", rG);
            this.caller.D.set("removeEventListener", pG);
            this.caller.l.set("removeEventListener", sG);
            this.caller.D.set("getDataWithCallback", qG);
            this.caller.l.set("getDataWithCallback", tG);
            this.timeoutMs = null != c ? c : 500
        };
    _.T(uG, _.V);
    uG.prototype.A = function() {
        this.caller.za();
        _.V.prototype.A.call(this)
    };
    uG.prototype.addEventListener = function(a) {
        var b = this,
            c = _.Gx(function() {
                a(vG, !0)
            }),
            d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        CF(this.caller, "addEventListener", {
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
                        a(wG, !0);
                        return
                    }
                    a(xG, !0)
                }
            }
        })
    };
    uG.prototype.removeEventListener = function(a) {
        CF(this.caller, "removeEventListener", {
            listenerId: a
        })
    };
    var yG = function(a) {
            if (!a) return !1;
            var b = Qf(a.split("~")[0]),
                c = Rf(b.slice(0, 6)),
                d = Rf(b.slice(6, 12)),
                e = new zB;
            var f = _.ul(e, 1, c);
            var g = _.ul(f, 2, d);
            for (var h = b.slice(12), k = Rf(h.slice(0, 12)), l = [], m = h.slice(12).replace(/0+$/, ""), n = 0; n < k; n++) {
                if (0 === m.length) throw Error("Found " + n + " of " + k + " sections [" + l + "] but reached end of input [" + h + "]");
                var p = 0 === Rf(m[0]);
                m = m.slice(1);
                var r = Uf(m, h),
                    v = 0 === l.length ? 0 : l[l.length - 1],
                    w = Sf(r) + v;
                m = m.slice(r.length);
                if (p) l.push(w);
                else {
                    for (var x = Uf(m, h), B = Sf(x), C = 0; C <= B; C++) l.push(w + C);
                    m = m.slice(x.length)
                }
            }
            if (0 < m.length) throw Error("Found " + k + " sections [" + l + "] but has remaining input [" + m + "], entire input [" + h + "]");
            var F = _.Je(g, 3, l, Wc);
            var G = _.z(a, "includes").call(a, "~") ? a.split("~").slice(1) : [];
            for (var P = 0; P < Ce(F, 3, Xc, 2).length; ++P) {
                var R = Ce(F, 3, Xc, 2)[P],
                    K = G[P];
                switch (R) {
                    case 8:
                        if (0 === K.length) throw Error("Cannot decode empty USCA section string.");
                        var Z = K.split(".");
                        if (2 < Z.length) throw Error("Expected at most 1 sub-section but got " + (Z.length - 1) + " when decoding " + K + ".");
                        var qa = void 0,
                            wa = void 0,
                            aa = void 0,
                            ha = void 0,
                            vb = void 0,
                            Ta = void 0,
                            db = void 0,
                            Ab = void 0,
                            Pa = void 0,
                            Ib = void 0,
                            jd = void 0,
                            cc = void 0,
                            Zb = void 0,
                            Ec = void 0,
                            jc = void 0,
                            dc = void 0,
                            Id = void 0,
                            Oc = void 0,
                            lf = void 0,
                            ve = void 0,
                            Jd = void 0,
                            ng = void 0,
                            og = void 0,
                            mf = Z[0];
                        if (0 === mf.length) throw Error("Cannot decode empty core segment string.");
                        var Pc = Tf(mf, HB),
                            Kd = Rf(Pc.slice(0, 6));
                        Pc = Pc.slice(6);
                        if (1 !== Kd) throw Error("Unable to decode unsupported USCA Section specification version " + Kd + " - only version 1 is supported.");
                        for (var we = 0, Wa = [], Qb = 0; Qb < GB.length; Qb++) {
                            var nf = GB[Qb];
                            Wa.push(Rf(Pc.slice(we, we + nf)));
                            we += nf
                        }
                        var pg = new CB;
                        og = _.ul(pg, 1, Kd);
                        var xh = Wa.shift();
                        ng = _.L(og, 2, xh);
                        var Ld = Wa.shift();
                        Jd = _.L(ng, 3, Ld);
                        var Md = Wa.shift();
                        ve = _.L(Jd, 4, Md);
                        var ij = Wa.shift();
                        lf = _.L(ve, 5, ij);
                        var jj = Wa.shift();
                        Oc = _.L(lf, 6, jj);
                        var kj = new BB,
                            yh = Wa.shift();
                        Id = _.L(kj, 1, yh);
                        var of = Wa.shift();
                        dc = _.L(Id, 2, of );
                        var zh = Wa.shift();
                        jc = _.L(dc, 3, zh);
                        var qg = Wa.shift();
                        Ec = _.L(jc, 4, qg);
                        var pf = Wa.shift();
                        Zb = _.L(Ec, 5, pf);
                        var Ah = Wa.shift();
                        cc = _.L(Zb, 6, Ah);
                        var Bh = Wa.shift();
                        jd = _.L(cc, 7, Bh);
                        var Ch = Wa.shift();
                        Ib = _.L(jd, 8, Ch);
                        var Dh = Wa.shift();
                        Pa = _.L(Ib, 9, Dh);
                        Ab = _.bi(Oc, 7, Pa);
                        var Eh = new AB,
                            Fc = Wa.shift();
                        db = _.L(Eh, 1, Fc);
                        var rg = Wa.shift();
                        Ta = _.L(db, 2, rg);
                        vb = _.bi(Ab, 8, Ta);
                        var Qc = Wa.shift();
                        ha = _.L(vb, 9, Qc);
                        var sg = Wa.shift();
                        aa = _.L(ha, 10, sg);
                        var kd = Wa.shift();
                        wa = _.L(aa, 11, kd);
                        var Rc = Wa.shift();
                        var tg = qa = _.L(wa, 12, Rc);
                        if (1 === Z.length) var ug = FB(tg);
                        else {
                            var vg = FB(tg),
                                xe = void 0,
                                wg = void 0,
                                qf = void 0,
                                ye = Z[1];
                            if (0 === ye.length) throw Error("Cannot decode empty GPC segment string.");
                            var oc = Tf(ye, 3),
                                ze = Rf(oc.slice(0, 2));
                            if (0 > ze || 1 < ze) throw Error("Attempting to decode unknown GPC segment subsection type " + ze + ".");
                            qf = ze + 1;
                            var lj = Rf(oc.charAt(2)),
                                Ae = new DB;
                            wg = _.L(Ae, 2, qf);
                            xe = _.tl(wg, 1, !!lj);
                            ug = _.bi(vg, 2, xe)
                        }
                        var xg = _.um(ug, CB, 1);
                        if (1 === _.fg(xg, 5, 0) || 1 === _.fg(xg, 6, 0)) return !0;
                        break;
                    case 10:
                        if (0 === K.length) throw Error("Cannot decode empty USCO section string.");
                        var ld = K.split(".");
                        if (2 < ld.length) throw Error("Expected at most 2 segments but got " + ld.length + " when decoding " + K + ".");
                        var Rb = void 0,
                            Fh = void 0,
                            Nd = void 0,
                            Be = void 0,
                            Gh = void 0,
                            rf = void 0,
                            sf = void 0,
                            Bb = void 0,
                            Hh = void 0,
                            Od = void 0,
                            yg = void 0,
                            Pd = void 0,
                            zg = void 0,
                            md = void 0,
                            Ag = void 0,
                            Bg = void 0,
                            tf = void 0,
                            Cg = void 0,
                            Dg = ld[0];
                        if (0 === Dg.length) throw Error("Cannot decode empty core segment string.");
                        var Sc = Tf(Dg, OB),
                            uf = Rf(Sc.slice(0, 6));
                        Sc = Sc.slice(6);
                        if (1 !== uf) throw Error("Unable to decode unsupported USCO Section specification version " + uf + " - only version 1 is supported.");
                        for (var Qd = 0, Db = [], Jg = 0; Jg < NB.length; Jg++) {
                            var Kj = NB[Jg];
                            Db.push(Rf(Sc.slice(Qd, Qd + Kj)));
                            Qd += Kj
                        }
                        var kn = new JB;
                        Cg = _.ul(kn, 1, uf);
                        var Kg = Db.shift();
                        tf = _.L(Cg, 2, Kg);
                        var LT = Db.shift();
                        Bg = _.L(tf, 3, LT);
                        var MT = Db.shift();
                        Ag = _.L(Bg, 4, MT);
                        var NT = Db.shift();
                        md = _.L(Ag, 5, NT);
                        var OT = Db.shift();
                        zg = _.L(md, 6, OT);
                        var PT = new IB,
                            QT = Db.shift();
                        Pd = _.L(PT, 1, QT);
                        var RT = Db.shift();
                        yg = _.L(Pd, 2, RT);
                        var ST = Db.shift();
                        Od = _.L(yg, 3, ST);
                        var TT = Db.shift();
                        Hh = _.L(Od, 4, TT);
                        var UT = Db.shift();
                        Bb = _.L(Hh, 5, UT);
                        var VT = Db.shift();
                        sf = _.L(Bb, 6, VT);
                        var WT = Db.shift();
                        rf = _.L(sf, 7, WT);
                        Gh = _.bi(zg, 7, rf);
                        var XT = Db.shift();
                        Be = _.L(Gh, 8, XT);
                        var YT = Db.shift();
                        Nd = _.L(Be, 9, YT);
                        var ZT = Db.shift();
                        Fh = _.L(Nd, 10, ZT);
                        var $T = Db.shift();
                        var rE = Rb = _.L(Fh, 11, $T);
                        if (1 === ld.length) var sE = MB(rE);
                        else {
                            var aU = MB(rE),
                                tE = void 0,
                                uE = void 0,
                                vE = void 0,
                                wE = ld[1];
                            if (0 === wE.length) throw Error("Cannot decode empty GPC segment string.");
                            var xE = Tf(wE, 3),
                                ln = Rf(xE.slice(0, 2));
                            if (0 > ln || 1 < ln) throw Error("Attempting to decode unknown GPC segment subsection type " + ln + ".");
                            vE = ln + 1;
                            var bU = Rf(xE.charAt(2)),
                                cU = new KB;
                            uE = _.L(cU, 2, vE);
                            tE = _.tl(uE, 1, !!bU);
                            sE = _.bi(aU, 2, tE)
                        }
                        var yE = _.um(sE, JB, 1);
                        if (1 === _.fg(yE, 5, 0) || 1 === _.fg(yE, 6, 0)) return !0;
                        break;
                    case 12:
                        if (0 === K.length) throw Error("Cannot decode empty usct section string.");
                        var Lj = K.split(".");
                        if (2 < Lj.length) throw Error("Expected at most 2 segments but got " + Lj.length + " when decoding " + K + ".");
                        var dU = void 0,
                            zE = void 0,
                            AE = void 0,
                            BE = void 0,
                            CE = void 0,
                            DE = void 0,
                            EE = void 0,
                            FE = void 0,
                            GE = void 0,
                            HE = void 0,
                            IE = void 0,
                            JE = void 0,
                            KE = void 0,
                            LE = void 0,
                            ME = void 0,
                            NE = void 0,
                            OE = void 0,
                            PE = void 0,
                            QE = void 0,
                            RE = void 0,
                            SE = void 0,
                            TE = void 0,
                            UE = Lj[0];
                        if (0 === UE.length) throw Error("Cannot decode empty core segment string.");
                        var mn = Tf(UE, WB),
                            yt = Rf(mn.slice(0, 6));
                        mn = mn.slice(6);
                        if (1 !== yt) throw Error("Unable to decode unsupported USCT Section specification version " + yt + " - only version 1 is supported.");
                        for (var zt = 0, Eb = [], At = 0; At < VB.length; At++) {
                            var VE = VB[At];
                            Eb.push(Rf(mn.slice(zt, zt + VE)));
                            zt += VE
                        }
                        var eU = new RB;
                        TE = _.ul(eU, 1, yt);
                        var fU = Eb.shift();
                        SE = _.L(TE, 2, fU);
                        var gU = Eb.shift();
                        RE = _.L(SE, 3, gU);
                        var hU = Eb.shift();
                        QE = _.L(RE, 4, hU);
                        var iU = Eb.shift();
                        PE = _.L(QE, 5, iU);
                        var jU = Eb.shift();
                        OE = _.L(PE, 6, jU);
                        var kU = new QB,
                            lU = Eb.shift();
                        NE = _.L(kU, 1, lU);
                        var mU = Eb.shift();
                        ME = _.L(NE, 2, mU);
                        var nU = Eb.shift();
                        LE = _.L(ME, 3, nU);
                        var oU = Eb.shift();
                        KE = _.L(LE, 4, oU);
                        var pU = Eb.shift();
                        JE = _.L(KE, 5, pU);
                        var qU = Eb.shift();
                        IE = _.L(JE, 6, qU);
                        var rU = Eb.shift();
                        HE = _.L(IE, 7, rU);
                        var sU = Eb.shift();
                        GE = _.L(HE, 8, sU);
                        FE = _.bi(OE, 7, GE);
                        var tU = new PB,
                            uU = Eb.shift();
                        EE = _.L(tU, 1, uU);
                        var vU = Eb.shift();
                        DE = _.L(EE, 2, vU);
                        var wU = Eb.shift();
                        CE = _.L(DE, 3, wU);
                        BE = _.bi(FE, 8, CE);
                        var xU = Eb.shift();
                        AE = _.L(BE, 9, xU);
                        var yU = Eb.shift();
                        zE = _.L(AE, 10, yU);
                        var zU = Eb.shift();
                        var WE = dU = _.L(zE, 11, zU);
                        if (1 === Lj.length) var XE = UB(WE);
                        else {
                            var AU = UB(WE),
                                YE = void 0,
                                ZE = void 0,
                                $E = void 0,
                                aF = Lj[1];
                            if (0 === aF.length) throw Error("Cannot decode empty GPC segment string.");
                            var bF = Tf(aF, 3),
                                nn = Rf(bF.slice(0, 2));
                            if (0 > nn || 1 < nn) throw Error("Attempting to decode unknown GPC segment subsection type " + nn + ".");
                            $E = nn + 1;
                            var BU = Rf(bF.charAt(2)),
                                CU = new SB;
                            ZE = _.L(CU, 2, $E);
                            YE = _.tl(ZE, 1, !!BU);
                            XE = _.bi(AU, 2, YE)
                        }
                        var cF = _.um(XE, RB, 1);
                        if (1 === _.fg(cF, 5, 0) || 1 === _.fg(cF, 6, 0)) return !0;
                        break;
                    case 9:
                        if (0 === K.length) throw Error("Cannot decode empty USVA section string.");
                        var on = Tf(K, $B),
                            Bt = Rf(on.slice(0, 6));
                        on = on.slice(6);
                        if (1 !== Bt) throw Error("Unable to decode unsupported USVA Section specification version " + Bt + " - only version 1 is supported.");
                        for (var Ct = 0, Tb = [], Dt = 0; Dt < ZB.length; Dt++) {
                            var dF = ZB[Dt];
                            Tb.push(Rf(on.slice(Ct, Ct + dF)));
                            Ct += dF
                        }
                        var DU = Bt,
                            EU = new YB,
                            FU = _.ul(EU, 1, DU),
                            GU = Tb.shift(),
                            HU = _.L(FU, 2, GU),
                            IU = Tb.shift(),
                            JU = _.L(HU, 3, IU),
                            KU = Tb.shift(),
                            LU = _.L(JU, 4, KU),
                            MU = Tb.shift(),
                            NU = _.L(LU, 5, MU),
                            OU = Tb.shift();
                        var PU = _.L(NU, 6, OU);
                        var QU = new XB,
                            RU = Tb.shift(),
                            SU = _.L(QU, 1, RU),
                            TU = Tb.shift(),
                            UU = _.L(SU, 2, TU),
                            VU = Tb.shift(),
                            WU = _.L(UU, 3, VU),
                            XU = Tb.shift(),
                            YU = _.L(WU, 4, XU),
                            ZU = Tb.shift(),
                            $U = _.L(YU, 5, ZU),
                            aV = Tb.shift(),
                            bV = _.L($U, 6, aV),
                            cV = Tb.shift(),
                            dV = _.L(bV, 7, cV),
                            eV = Tb.shift();
                        var fV = _.L(dV, 8, eV);
                        var gV = _.bi(PU, 7, fV),
                            hV = Tb.shift(),
                            iV = _.L(gV, 8, hV),
                            jV = Tb.shift(),
                            kV = _.L(iV, 9, jV),
                            lV = Tb.shift(),
                            mV = _.L(kV, 10, lV),
                            nV = Tb.shift(),
                            eF = _.L(mV, 11, nV);
                        if (1 === _.fg(eF, 5, 0) || 1 === _.fg(eF, 6, 0)) return !0
                }
            }
            return !1
        },
        xG = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        vG = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        wG = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };
    var to = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, to.prototype)
    };
    _.T(to, Error);
    to.prototype.name = "PublisherInputError";
    var zG = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, zG.prototype)
    };
    _.T(zG, Error);
    zG.prototype.name = "ServerError";
    var AG = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, AG.prototype)
    };
    _.T(AG, Error);
    AG.prototype.name = "NetworkError";
    var gh = function() {};
    gh.prototype.g = function() {};
    gh.prototype.l = function() {};
    gh.prototype.A = function() {
        return []
    };
    gh.prototype.j = function() {
        return []
    };
    var sh = function(a, b) {
        a.g = fh(1, b, function() {});
        a.A = function(c, d) {
            return fh(2, b, function() {
                return []
            })(c, 2, d)
        };
        a.j = function() {
            return fh(3, b, function() {
                return []
            })(2)
        };
        a.l = function(c) {
            fh(16, b, function() {})(c, 2)
        }
    };
    var qh = function() {
            this.g = function() {}
        },
        uh = function(a, b) {
            a.g = fh(14, b, function() {})
        };
    var Am = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Lm(b.innerWidth, b.innerHeight)).round() : _.xA(b || window).round()
            } catch (d) {
                return new _.Lm(-12245933, -12245933)
            }
        },
        BG = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        Lu = function(a, b) {
            b = void 0 === b ? _.t : b;
            a = a.scrollingElement || BG(a);
            return new _.Hm(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        Vm = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var CG = function(a) {
        this.F = _.A(a)
    };
    _.T(CG, _.D);
    CG.prototype.oi = function() {
        return _.Ai(this, 1)
    };
    CG.prototype.ni = function() {
        return _.Ai(this, 2)
    };
    var ah = function(a) {
            return _.Q(a, 5)
        },
        DG = function(a, b) {
            Sh(a, 13, b)
        },
        EG = function(a, b) {
            Sh(a, 12, b)
        },
        FG = function(a, b) {
            return _.Je(a, 10, b, _.dd)
        },
        GG = function(a, b) {
            return ki(a, 11, b)
        };
    CG.prototype.ki = function() {
        return _.Ai(this, 11)
    };
    CG.da = [10];
    var IG, JG, KG;
    _.HG = function(a) {
        this.g = a;
        this.A = 0
    };
    IG = function(a, b) {
        if (0 === a.A) {
            if (_.In(a, "__gads", b)) b = !0;
            else {
                var c = a.g;
                ah(b) && ch(c) && (new dh(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === eh("GoogleAdServingTest", b, a.g)) {
                    var d = a.g;
                    ah(b) && ch(d) && lG(new dh(d.document), "GoogleAdServingTest")
                }
                b = c
            }
            a.A = b ? 2 : 1
        }
        return 2 === a.A
    };
    _.In = function(a, b, c) {
        return c ? eh(b, c, a.g) : null
    };
    JG = function(a, b, c, d) {
        if (d) {
            var e = _.Lg(c, 2) - Date.now() / 1E3;
            e = {
                yg: Math.max(e, 0),
                path: _.I(c, 3),
                domain: _.I(c, 4),
                fm: !1
            };
            c = c.getValue();
            a = a.g;
            ah(d) && ch(a) && (new dh(a.document)).set(b, c, e)
        }
    };
    KG = function(a, b, c) {
        if (c && eh(b, c, a.g)) {
            var d = a.g.location.hostname;
            if ("localhost" === d) d = ["localhost"];
            else if (d = d.split("."), 2 > d.length) d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = _.y(d);
            for (e = d.next(); !e.done; e = d.next()) {
                f = b;
                var g = a.g;
                ah(c) && ch(g) && lG(new dh(g.document), f, "/", e.value)
            }
        }
    };
    var LG = {},
        MG = (LG[3] = eb(Uw(new Tw(Rw, "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), LG);
    ({})[3] = eb(Uw(new Tw(Rw, "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var NG = function(a) {
            this.g = a;
            this.A = oA()
        },
        OG = function(a) {
            var b = {};
            _.Ow(a, function(c) {
                b[c.g] = c.A
            });
            return b
        };
    _.PG = _.hw(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var QG = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.Ab = a;
        this.status = 1;
        this.j = b;
        this.l = c;
        this.H = d;
        this.Ud = !!e;
        this.D = Math.random();
        this.I = {};
        this.g = null;
        this.K = (0, _.Lw)(this.C, this);
        this.U = f
    };
    _.T(QG, _.V);
    QG.prototype.C = function(a) {
        if (!("*" !== this.l && a.origin !== this.l || !this.Ud && a.source != this.j)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ja(b) && (a = b.i, b.c === this.Ab && a != this.D)) {
                if (2 !== this.status) try {
                    this.status = 2, RG(this), this.g && (this.g(), this.g = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ja(b)) && this.I.hasOwnProperty(a)) this.I[a](b)
            }
        }
    };
    var RG = function(a) {
        var b = {};
        b.c = a.Ab;
        b.i = a.D;
        a.U && (b.e = a.U);
        a.j.postMessage(JSON.stringify(b), a.l)
    };
    QG.prototype.o = function() {
        if (1 === this.status) {
            try {
                this.j.postMessage && RG(this)
            } catch (a) {}
            window.setTimeout((0, _.Lw)(this.o, this), 50)
        }
    };
    QG.prototype.connect = function(a) {
        a && (this.g = a);
        _.pb(window, "message", this.K);
        this.H && this.o()
    };
    var SG = function(a, b, c) {
        a.I[b] = c
    };
    QG.prototype.send = function(a, b) {
        var c = {};
        c.c = this.Ab;
        c.i = this.D;
        c.s = a;
        c.p = b;
        try {
            this.j.postMessage(JSON.stringify(c), this.l)
        } catch (d) {}
    };
    QG.prototype.A = function() {
        this.status = 3;
        _.$f(window, "message", this.K);
        _.V.prototype.A.call(this)
    };
    var TG = new _.u.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        UG = new _.u.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var VG = function(a) {
        this.F = _.A(a)
    };
    _.T(VG, _.D);
    var WG = Hf(VG);
    var XG = function(a) {
        this.F = _.A(a)
    };
    _.T(XG, _.D);
    var YG = function(a) {
        this.F = _.A(a)
    };
    _.T(YG, _.D);
    var ZG, $G, aH, bH;
    _.Ir = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    ZG = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    $G = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    aH = function(a, b) {
        if (3 == _.Ir(b)) return !1;
        a();
        return !0
    };
    bH = function(a, b) {
        var c = !0;
        c = void 0 === c ? !1 : c;
        if (!aH(a, b))
            if (c) {
                var d = function() {
                    _.$f(b, "prerenderingchange", d);
                    a()
                };
                _.pb(b, "prerenderingchange", d)
            } else {
                var e = !1,
                    f = ZG(b),
                    g = function() {
                        !e && aH(a, b) && (e = !0, _.$f(b, f, g))
                    };
                f && _.pb(b, f, g)
            }
    };
    _.wh = function() {
        var a = this;
        this.promise = new _.u.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    _.cH = function() {
        this.g = Math.random()
    };
    _.Yi = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .001)) try {
            if (c instanceof _.kC) var f = c;
            else f = new _.kC, _.Bn(c, function(h, k) {
                var l = f,
                    m = l.j++;
                h = _.lC(k, h);
                l.g.push(m);
                l.A[m] = h
            });
            var g = pC(f, "/pagead/gen_204?id=" + b + "&");
            g && qC(_.t, g)
        } catch (h) {}
    };
    var wi = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        ui = new _.u.Map;
    var dH = function(a) {
        this.F = _.A(a)
    };
    _.T(dH, _.D);
    var eH = function(a) {
        this.F = _.A(a)
    };
    _.T(eH, _.D);
    var fH = function(a, b) {
        return _.Je(a, 1, b, _.rd)
    };
    eH.da = [1];
    var gH = function(a) {
        this.F = _.A(a)
    };
    _.T(gH, _.D);
    var hH = function(a, b) {
        return _.Je(a, 1, b, Yc)
    };
    gH.da = [1, 2];
    var iH = function(a) {
        this.F = _.A(a)
    };
    _.T(iH, _.D);
    var jH = function(a, b) {
        return _.L(a, 1, b)
    };
    var kH = function(a) {
        this.F = _.A(a)
    };
    _.T(kH, _.D);
    var lH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, lH.prototype);
        this.name = "InputError"
    };
    _.T(lH, Error);
    var mH = function() {
            this.gb = !1
        },
        nH = function() {
            mH.apply(this, arguments);
            this.pd = new _.wh
        };
    _.T(nH, mH);
    var oH = function(a, b) {
        a.gb || (a.gb = !0, a.fe = b, a.pd.resolve(b))
    };
    _.cw.Object.defineProperties(nH.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.pd.promise
            }
        },
        Lc: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.gb
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ee
            }
        }
    });
    var Xp = function() {
        nH.apply(this, arguments)
    };
    _.T(Xp, nH);
    _.q = Xp.prototype;
    _.q.G = function(a) {
        oH(this, a)
    };
    _.q.Ha = function(a) {
        oH(this, null != a ? a : null)
    };
    _.q.ca = function() {
        oH(this, null)
    };
    _.q.La = function(a) {
        var b = this;
        a.then(function(c) {
            oH(b, c)
        })
    };
    _.q.ib = function(a) {
        this.gb || (this.gb = !0, this.fe = null, this.ee = a, this.pd.reject(a))
    };
    var pH = function() {
        nH.apply(this, arguments)
    };
    _.T(pH, nH);
    pH.prototype.G = function(a) {
        oH(this, a)
    };
    pH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void oH(b, c)
        })
    };
    pH.prototype.ib = function(a) {
        this.gb || (this.gb = !0, this.ee = a, this.pd.reject(a))
    };
    var qH = function() {
        pH.apply(this, arguments)
    };
    _.T(qH, pH);
    qH.prototype.Ha = function(a) {
        oH(this, null != a ? a : null)
    };
    qH.prototype.ca = function() {
        oH(this, null)
    };
    qH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.Ha(c)
        })
    };
    var rH = function(a) {
        this.gb = !1;
        this.Vb = a
    };
    _.T(rH, mH);
    rH.prototype.Lc = function() {
        return this.Vb.gb
    };
    rH.prototype.ng = function() {
        return null != this.Vb.fe
    };
    _.cw.Object.defineProperties(rH.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Vb.ee
            }
        }
    });
    var sH = function(a) {
        rH.call(this, a);
        this.Vb = a
    };
    _.T(sH, rH);
    _.cw.Object.defineProperties(sH.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Vb.fe
            }
        }
    });
    var tH = function(a) {
        rH.call(this, a);
        this.Vb = a
    };
    _.T(tH, rH);
    _.cw.Object.defineProperties(tH.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.Vb.fe) ? a : null
            }
        }
    });
    var uH = function() {
        rH.apply(this, arguments)
    };
    _.T(uH, rH);
    _.cw.Object.defineProperties(uH.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.Vb.fe) ? a : null
            }
        }
    });
    var Jr = function() {
        nH.apply(this, arguments)
    };
    _.T(Jr, nH);
    Jr.prototype.notify = function() {
        oH(this, null)
    };
    var vH = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        wH = function(a, b) {
            b = void 0 === b ? !1 : b;
            nH.call(this);
            var c = this;
            a = a.map(function(d) {
                return d.promise.then(function(e) {
                    if (b || null != e) return e;
                    throw e;
                }, function(e) {
                    c.gb = !0;
                    c.ee = e;
                    c.pd.reject(e);
                    return null
                })
            });
            _.z(_.u.Promise, "any").call(_.u.Promise, a).then(function(d) {
                c.gb || oH(c, d)
            }, function() {
                c.gb || oH(c, null)
            })
        };
    _.T(wH, nH);
    var xH = function() {
        _.V.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = [];
        this.D = []
    };
    _.T(xH, _.V);
    var yH = function(a, b, c) {
        a.j.push({
            Hd: void 0 === c ? !1 : c,
            Th: b
        })
    };
    xH.prototype.A = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        this.D.length = 0;
        _.V.prototype.A.call(this)
    };
    var zH = function(a, b, c) {
        _.V.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.ia = c;
        this.started = !1;
        this.D = new xH;
        _.S(this, this.D)
    };
    _.T(zH, _.V);
    zH.prototype.start = function() {
        var a = this,
            b;
        return _.rb(function(c) {
            if (1 == c.g) {
                if (a.started) return c.return();
                a.started = !0;
                c.l = 2;
                return c.yield(Di(a.D.j, a.timeoutMs), 4)
            }
            if (2 != c.g) {
                if (!a.M) {
                    for (var d = 0, e = _.y(a.D.l), f = e.next(); !f.done; f = e.next()) {
                        if (!f.value.ng()) throw Error("missing input: " + a.id + "/" + d);
                        ++d
                    }
                    a.g()
                }
                c.g = 0;
                c.l = 0
            } else {
                b = tb(c);
                if (a.M) return c.return();
                b instanceof lH ? a.K(b) : b instanceof Error && (a.ia ? a.ia(a.id, b) : a.I(b), a.l(b));
                c.g = 0
            }
        })
    };
    var W = function(a, b) {
            b = void 0 === b ? new Xp : b;
            a.D.g.push(b);
            return b
        },
        AH = function(a) {
            var b = void 0 === b ? new qH : b;
            a.D.g.push(b);
            return b
        },
        BH = function(a, b) {
            b = void 0 === b ? new Jr : b;
            a.D.g.push(b);
            return b
        },
        X = function(a, b) {
            yH(a.D, b);
            b = new sH(b);
            a.D.l.push(b);
            return b
        },
        CH = function(a, b) {
            yH(a.D, b);
            return new tH(b)
        },
        DH = function(a, b) {
            yH(a.D, b, !0);
            return new tH(b)
        },
        EH = function(a, b) {
            yH(a.D, b)
        },
        FH = function(a, b) {
            b = new wH(b);
            yH(a.D, b);
            b = new sH(b);
            a.D.l.push(b);
            return b
        };
    zH.prototype.K = function() {};
    zH.prototype.l = function(a) {
        if (!this.ia && this.D.g.length) {
            a = new lH(a.message);
            for (var b = _.y(this.D.g), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.Lc) {
                    var d = a;
                    c.gb = !0;
                    c.ee = d;
                    c.pd.reject(d)
                }
        }
    };
    var GH = function(a, b, c, d, e, f) {
        zH.call(this, a, e, f);
        this.f = b;
        this.C = d;
        a = {};
        c = _.y(_.z(Object, "entries").call(Object, c));
        for (b = c.next(); !b.done; b = c.next()) d = _.y(b.value), b = d.next().value, (d = d.next().value) && (a[b] = CH(this, d));
        this.o = a
    };
    _.T(GH, zH);
    GH.prototype.g = function() {
        for (var a = this.f, b = {}, c = _.y(_.z(Object, "entries").call(Object, this.o)), d = c.next(); !d.done; d = c.next()) {
            var e = _.y(d.value);
            d = e.next().value;
            e = e.next().value;
            b[d] = e.value
        }
        a = a.call(this, b, this.C);
        this.j(a)
    };
    GH.prototype.I = function() {};
    var Gq = function(a, b, c, d, e, f) {
        GH.call(this, a, b, c, d, e, f);
        this.output = W(this, new Xp)
    };
    _.T(Gq, GH);
    Gq.prototype.j = function(a) {
        this.output.La(a)
    };
    var HH = function(a, b, c, d, e, f, g) {
        GH.call(this, a, b, c, d, f, g);
        this.finished = new Jr;
        a = _.z(Object, "keys").call(Object, e);
        a = _.y(a);
        for (b = a.next(); !b.done; b = a.next()) this[b.value] = W(this)
    };
    _.T(HH, GH);
    HH.prototype.j = function(a) {
        a = _.y(_.z(Object, "entries").call(Object, a));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            oH(this[b], c)
        }
        this.finished.notify()
    };
    var IH = function(a) {
        this.g = void 0 === a ? function() {} : a
    };
    var nk = function(a) {
        a = void 0 === a ? new IH : a;
        _.V.call(this);
        this.C = a;
        this.D = [];
        this.I = [];
        this.H = {};
        this.l = [];
        this.j = new _.wh;
        this.g = {}
    };
    _.T(nk, _.V);
    var J = function(a, b) {
            _.S(a, b);
            a.D.push(b);
            return b
        },
        Hk = function(a, b) {
            b = _.y(b);
            for (var c = b.next(); !c.done; c = b.next()) J(a, c.value)
        },
        JH = function(a, b, c, d, e, f) {
            b = new HH(b, c, d, e, f, void 0, a.C.g);
            return J(a, b)
        },
        $t = function(a, b) {
            a.I.push(b);
            _.S(a, b)
        },
        wk = function(a) {
            var b, c, d, e, f, g, h, k, l, m, n, p;
            return _.rb(function(r) {
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
                        b = _.y(a.D);
                        for (c = b.next(); !c.done; c = b.next()) d = c.value, d.start();
                        e = _.y(a.I);
                        for (f = e.next(); !f.done; f = e.next()) g = f.value, wk(g);
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
                        for (k = r.A, l = 0, m = _.y(h), n = m.next(); !n.done; n = m.next()) p = n.value, a.H[p] = k[l++];
                    case 4:
                        return a.j.resolve(a.H), r.return(a.j.promise)
                }
            })
        };
    nk.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.D.length = 0;
        this.I.length = 0;
        this.l.length = 0
    };
    var KH = function(a) {
        this.F = _.A(a)
    };
    _.T(KH, _.D);
    KH.da = [1];
    var LH = [0, Uy, Az];
    var MH = function(a) {
        this.F = _.A(a)
    };
    _.T(MH, _.D);
    MH.da = [1, 2];
    MH.prototype.g = Gf([0, Uy, Az, Uy, LH]);
    _.oq = 728 * 1.38;
    var OH, NH;
    OH = function() {
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
        this.floatingAdsStacking = new NH;
        this.sideRailProcessedFixedElements = new _.u.Set;
        this.sideRailAvailableSpace = new _.u.Map;
        this.sideRailPlasParam = new _.u.Map;
        this.A = [];
        this.g = null
    };
    _.Bj = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.u.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.u.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.u.Map)) : a.google_reactive_ads_global_state = new OH;
        return a.google_reactive_ads_global_state
    };
    NH = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var SH, UH, QH;
    _.PH = function(a) {
        this.g = _.Bj(a).floatingAdsStacking
    };
    _.RH = function(a, b) {
        return new QH(a, b)
    };
    SH = function(a) {
        a = _.LA(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    _.TH = function(a, b) {
        a.g.maxZIndexListeners.push(b);
        b(SH(a))
    };
    UH = function(a) {
        var b = SH(a);
        _.Ow(a.g.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    QH = function(a, b) {
        this.A = a;
        this.l = b;
        this.g = null
    };
    _.VH = function(a) {
        if (null == a.g) {
            var b = a.A,
                c = a.l,
                d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            UH(b);
            a.g = d
        }
    };
    _.WH = function(a) {
        if (null != a.g) {
            var b = a.A;
            delete b.g.maxZIndexRestrictions[a.g];
            UH(b);
            a.g = null
        }
    };
    var Ti, XH;
    _.Wi = function(a, b) {
        b = void 0 === b ? {} : b;
        this.pa = a;
        this.Fa = b
    };
    _.YH = function(a, b) {
        var c = Qi(a.pa.document, b);
        if (c) {
            var d;
            if (!(d = XH(a, c, b))) a: {
                d = a.pa.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    var e = XH(a, c, b);
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
    Ti = function(a, b) {
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = _.YH(a, c.value)) return c;
        return null
    };
    XH = function(a, b, c) {
        if ("fixed" !== qB(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= _.Jm(_.vB, b).width && 1 >= _.Jm(_.vB, b).height || a.Fa.Dk && !a.Fa.Dk(b) ? !0 : !1;
        a.Fa.bi && a.Fa.bi(b, c, d);
        return d ? null : b
    };
    var Si = 90 * 1.38;
    var ZH, $H, aI;
    ZH = _.hw(["* { pointer-events: none; }"]);
    $H = function(a, b) {
        var c = _.Zf("STYLE", a);
        c.textContent = _.sx(new _.rx(ZH[0], qx));
        null == a || a.head.appendChild(c);
        setTimeout(function() {
            null == a || a.head.removeChild(c)
        }, b)
    };
    _.bI = function(a, b, c) {
        if (!a.body) return null;
        var d = new aI;
        d.apply(a, b);
        return function() {
            var e = c || 0;
            0 < e && $H(b.document, e);
            _.nB(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.j,
                top: d.M
            });
            b.scrollTo(0, d.A)
        }
    };
    aI = function() {
        this.g = this.M = this.j = this.l = null;
        this.A = 0
    };
    aI.prototype.apply = function(a, b) {
        this.l = a.body.style.overflow;
        this.j = a.body.style.position;
        this.M = a.body.style.top;
        this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.A = _.Ni(b);
        _.nB(a.body, "top", -this.A + "px")
    };
    var gr = function(a, b) {
        this.g = a;
        this.A = void 0 === b ? 0 : b
    };
    gr.prototype.send = function(a, b) {
        var c = hq(lt(b, cj, 7), dj, 4),
            d = this.A++;
        _.ul(c, 1, d);
        a.fh(b)
    };
    _.cw.Object.defineProperties(gr.prototype, {
        Sh: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g()
            }
        }
    });
    var lq;
    lq = function(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            var b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (c) {
            return !1
        }
    };
    _.cI = function(a, b) {
        return 0 >= b || null == a || !lq(a) ? null : rj(a, b)
    };
    var Mj = ["auto", "inherit", "100%"],
        Nj = Mj.concat(["none"]);
    var dI = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var eI = function(a, b, c, d, e, f) {
            this.l = _.hB(a);
            this.A = _.hB(b);
            this.j = c;
            this.g = _.hB(d);
            this.M = e;
            this.D = f
        },
        fI = function(a) {
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
        gI = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.gB(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = sB(a);
            d = _.Jm(_.vB, a);
            var e = new iB(c.x, c.y, d.width, d.height);
            c = jB(e);
            d = String(qB(a, "zIndex"));
            var f = new _.gB(0, Infinity, Infinity, 0);
            for (var g = hg(a), h = g.g.body, k = g.g.documentElement, l = yA(g.g); a = rB(a);)
                if (!(_.Nx && 0 == a.clientWidth || Qx && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != qB(a, "overflow")) {
                    var m = sB(a),
                        n = new _.Hm(a.clientLeft, a.clientTop);
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
            g = _.xA(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new iB(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? kB(e, f) : null;
            g = a = 0;
            l && !(new _.Lm(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.gB(0, 0, 0, 0);
            if (h = f)(e = kB(e, f)) ? (k = jB(f), m = jB(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.gB(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new eI(b, c, d, l, a, g)
        };
    var hI = function(a) {
        this.M = a;
        this.j = null;
        this.C = this.status = 0;
        this.A = null;
        this.Ab = "sfchannel" + a
    };
    hI.prototype.tg = function() {
        return 2 == this.C
    };
    var iI = function(a) {
        this.g = a
    };
    iI.prototype.getValue = function(a, b) {
        return null == this.g[a] || null == this.g[a][b] ? null : this.g[a][b]
    };
    var jI = function(a, b) {
        this.Pe = a;
        this.Qe = b;
        this.A = this.g = !1
    };
    var kI = function(a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.g = a;
        this.A = b;
        this.l = c;
        this.permissions = d;
        this.metadata = e;
        this.j = f;
        this.Ud = g;
        this.hostpageLibraryTokens = h;
        this.U = ""
    };
    var lI = function(a, b) {
        this.A = a;
        this.U = b
    };
    lI.prototype.g = function(a) {
        this.U && a && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var mI = function(a, b, c) {
        lI.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.T(mI, lI);
    mI.prototype.g = function() {
        return lI.prototype.g.call(this, {
            uid: this.A,
            version: this.version
        })
    };
    var nI = function(a, b, c, d) {
        lI.call(this, a, void 0 === d ? "" : d);
        this.j = b;
        this.l = c
    };
    _.T(nI, lI);
    nI.prototype.g = function() {
        return lI.prototype.g.call(this, {
            uid: this.A,
            initialWidth: this.j,
            initialHeight: this.l
        })
    };
    var oI = function(a, b, c) {
        lI.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.T(oI, lI);
    oI.prototype.g = function() {
        return lI.prototype.g.call(this, {
            uid: this.A,
            description: this.description
        })
    };
    var pI = function(a, b, c, d) {
        lI.call(this, a, void 0 === d ? "" : d);
        this.l = b;
        this.push = c
    };
    _.T(pI, lI);
    pI.prototype.g = function() {
        return lI.prototype.g.call(this, {
            uid: this.A,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        })
    };
    var qI = function(a, b) {
        lI.call(this, a, void 0 === b ? "" : b)
    };
    _.T(qI, lI);
    qI.prototype.g = function() {
        return lI.prototype.g.call(this, {
            uid: this.A
        })
    };
    var rI = function(a, b, c) {
        lI.call(this, a, void 0 === c ? "" : c);
        this.j = b
    };
    _.T(rI, lI);
    rI.prototype.g = function() {
        var a = {
            uid: this.A,
            newGeometry: fI(this.j)
        };
        return lI.prototype.g.call(this, a)
    };
    var sI = function(a, b, c, d, e, f) {
        rI.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.l = d;
        this.push = e
    };
    _.T(sI, rI);
    sI.prototype.g = function() {
        var a = {
            uid: this.A,
            success: this.success,
            newGeometry: fI(this.j),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        };
        this.U && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var tI = function(a, b, c, d) {
        lI.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.T(tI, lI);
    tI.prototype.g = function() {
        return lI.prototype.g.call(this, {
            uid: this.A,
            width: this.width,
            height: this.height
        })
    };
    var uI = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        ll(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var vI, yI, zI, xI;
    vI = function() {
        this.g = []
    };
    _.wI = function(a) {
        return a + "px"
    };
    yI = function(a, b, c, d, e) {
        a.g.push(new xI(b, c, d, e))
    };
    zI = function(a) {
        for (var b = a.g.length - 1; 0 <= b; b--) {
            var c = a.g[b];
            c.A ? (c.l.style.removeProperty(c.g), c.l.style.setProperty(c.g, String(c.j), c.M)) : c.l.style[c.g] = c.j
        }
        a.g.length = 0
    };
    xI = function(a, b, c, d) {
        this.l = a;
        this.g = (this.A = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.j = this.A ? a.style.getPropertyValue(this.g) : a.style[this.g];
        this.M = this.A ? a.style.getPropertyPriority(this.g) : void 0;
        this.A ? (a.style.removeProperty(this.g), a.style.setProperty(this.g, String(c), d)) : a.style[this.g] = String(c)
    };
    var AI, BI;
    AI = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    BI = function() {
        var a = window,
            b = _.Wf(a);
        b && AI({
            label: "2",
            type: 9,
            value: b
        }, a)
    };
    _.CI = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = _.Wf(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && AI(_.z(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (_.Wf() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                }), f)
            }
            return l
        }
    };
    var HI = function(a) {
        hI.call(this, a.uniqueId);
        var b = this;
        this.I = a.V;
        this.o = 1 === a.size;
        this.P = new jI(a.permissions.Pe && !this.o, a.permissions.Qe && !this.o);
        this.D = a.Qg;
        var c;
        this.Ma = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.xa = "file:" == c ? "*" : c + "//" + d;
        this.bb = !!a.Ud;
        this.W = a.fj ? "//" + a.fj + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ua = a.vb ? "*" : "https:" + this.W;
        this.ka = DI(a);
        this.l = new vI;
        EI(this, a.Qg, a.size);
        this.j = this.ga = gI(a.Qg);
        this.J = a.dm || "1-0-40";
        var e;
        this.ra = null != (e = a.ek) ? e : "";
        FI(this, a);
        this.Da = _.CI(412, function() {
            return GI(b)
        }, a.sb);
        this.H = -1;
        this.K = 0;
        var f = _.CI(415, function() {
            b.g && (b.g.name = "", a.Oi && a.Oi(), _.$f(b.g, "load", f))
        }, a.sb);
        _.pb(this.g, "load", f);
        this.pg = _.CI(413, this.pg, a.sb);
        this.Vg = _.CI(417, this.Vg, a.sb);
        this.Zg = _.CI(419, this.Zg, a.sb);
        this.hg = _.CI(411, this.hg, a.sb);
        this.Rf = _.CI(409, this.Rf, a.sb);
        this.ia = _.CI(410, this.ia, a.sb);
        this.Jg = _.CI(416, this.Jg, a.sb);
        this.A = new QG(this.Ab, this.g.contentWindow, this.ua, !1);
        SG(this.A, "init_done", (0, _.Lw)(this.pg, this));
        SG(this.A, "register_done", (0, _.Lw)(this.Vg, this));
        SG(this.A, "report_error", (0, _.Lw)(this.Zg, this));
        SG(this.A, "expand_request", (0, _.Lw)(this.hg, this));
        SG(this.A, "collapse_request", (0, _.Lw)(this.Rf, this));
        SG(this.A, "creative_geometry_update", (0, _.Lw)(this.ia, this));
        this.A.connect((0, _.Lw)(this.Jg, this))
    };
    _.T(HI, hI);
    var EI = function(a, b, c) {
            a.o ? (b.style.width = _.uB("100%", !0), b.style.height = _.uB("auto", !0)) : (b.style.width = _.uB(c.width, !0), b.style.height = _.uB(c.height, !0))
        },
        FI = function(a, b) {
            var c = b.vb,
                d = b.content,
                e = b.Sd,
                f = b.size,
                g = void 0 === b.Td ? "3rd party ad content" : b.Td,
                h = b.Re;
            b = b.Kf;
            var k = {
                shared: {
                    sf_ver: a.J,
                    ck_on: mG() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.J + ";" + d.length + ";" + d;
            k = new kI(a.M, a.xa, a.ga, a.P, new iI(k), a.o, a.bb, a.Ma);
            var l = {};
            l.uid = k.g;
            l.hostPeerName = k.A;
            l.initialGeometry = fI(k.l);
            var m = k.permissions;
            m = JSON.stringify({
                expandByOverlay: m.Pe,
                expandByPush: m.Qe,
                readCookie: m.g,
                writeCookie: m.A
            });
            l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.g), l.reportCreativeGeometry = k.j, l.isDifferentSourceWindow = k.Ud, l.goog_safeframe_hlt = OG(k.hostpageLibraryTokens), l);
            k.U && (l.sentinel = k.U);
            k = JSON.stringify(l);
            l = f.width;
            f = f.height;
            a.o && (f = l = 0);
            m = {};
            e = (m.id = e, m.title = g, m.name = d + k, m.scrolling = "no", m.marginWidth = "0", m.marginHeight = "0", m.width = String(l), m.height = String(f), m["data-is-safeframe"] = "true", m);
            void 0 === c && (g = a.ra, f = a.W, d = a.J, (k = g) && (k = "?" + k), f = (void 0 === f ? "//tpc.googlesyndication.com" : f) + ("/safeframe/" + d + "/html/container.html" + k), (d = uI(_.zA(_.tA(a.D)))) && (f += (g ? "&" : "?") + "n=" + d), e.src = "https:" + f);
            null !== a.ka && (e.sandbox = a.ka);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.g = c, vA(a.g, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Ba(c, e), h = _.Zf("IFRAME"), vA(h, c), a.g = h);
            a.o && (a.g.style.minWidth = "100%");
            a.D.appendChild(a.g)
        };
    _.q = HI.prototype;
    _.q.Jg = function() {
        _.pb(window, "resize", this.Da);
        _.pb(window, "scroll", this.Da)
    };
    _.q.pg = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Rj(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new mI(b.uid, b.version, b.sentinel);
            if (this.M !== c.A || this.J !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.q.Vg = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Rj(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.M !== (new nI(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).A) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.q.Zg = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Rj(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new oI(b.uid, b.description, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d;
            null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    _.q.hg = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.C) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Rj(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new pI(b.uid, new _.gB(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            if (!(0 <= c.l.top && 0 <= c.l.left && 0 <= c.l.bottom && 0 <= c.l.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.P.Qe || !c.push && this.P.Pe) {
                var e = c.l,
                    f = c.push,
                    g = this.j = gI(this.g);
                if (e.top <= g.g.top && e.right <= g.g.right && e.bottom <= g.g.bottom && e.left <= g.g.left) {
                    if (!f)
                        for (var h = this.g.parentNode; h && h.style; h = h.parentNode) yI(this.l, h, "overflowX", "visible", "important"), yI(this.l, h, "overflowY", "visible", "important");
                    var k = jB(new iB(0, 0, this.j.A.getWidth(), this.j.A.getHeight()));
                    _.ja(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    yI(this.l, this.D, "position", "relative");
                    yI(this.l, this.g, "position", "absolute");
                    if (f) {
                        var l = this.l,
                            m = this.D,
                            n = k.getWidth();
                        yI(l, m, "width", _.wI(n));
                        var p = this.l,
                            r = this.D,
                            v = k.getHeight();
                        yI(p, r, "height", _.wI(v))
                    } else yI(this.l, this.g, "zIndex", "10000");
                    var w = this.l,
                        x = this.g,
                        B = k.getWidth();
                    yI(w, x, "width", _.wI(B));
                    var C = this.l,
                        F = this.g,
                        G = k.getHeight();
                    yI(C, F, "height", _.wI(G));
                    yI(this.l, this.g, "left", _.wI(k.left));
                    yI(this.l, this.g, "top", _.wI(k.top));
                    this.C = 2;
                    this.j = gI(this.g);
                    d = !0
                } else d = !1
            }
            a = d;
            this.A.send("expand_response", (new sI(this.M, a, this.j, c.l, c.push)).g());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (R) {
            var P;
            null == (P = this.I) || P.error("Invalid EXPAND_REQUEST message. Reason: " + R.message)
        }
    };
    _.q.Rf = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (!this.tg()) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Rj(b.uid)) throw Error("Cannot parse JSON message");
            if (this.M !== (new qI(b.uid, b.sentinel)).A) throw Error("Wrong source container");
            zI(this.l);
            this.C = 0;
            this.g && (this.j = gI(this.g));
            this.A.send("collapse_response", (new rI(this.M, this.j)).g())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var GI = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.K) {
            case 0:
                II(a);
                a.H = window.setTimeout((0, _.Lw)(a.fa, a), 1E3);
                a.K = 1;
                break;
            case 1:
                a.K = 2;
                break;
            case 2:
                a.K = 2
        }
    };
    HI.prototype.ia = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Rj(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new tI(b.uid, b.width, b.height, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.o) d !== this.g.height && (this.g.height = d, GI(this));
            else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    HI.prototype.fa = function() {
        if (1 == this.status || 2 == this.status) switch (this.K) {
            case 1:
                this.K = 0;
                break;
            case 2:
                II(this), this.H = window.setTimeout((0, _.Lw)(this.fa, this), 1E3), this.K = 1
        }
    };
    var II = function(a) {
            a.j = gI(a.g);
            a.A.send("geometry_update", (new rI(a.M, a.j)).g())
        },
        DI = function(a) {
            var b = null;
            a.hj && (b = a.hj);
            return null == b ? null : b.join(" ")
        },
        JI = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        KI = ["allow-top-navigation"],
        LI = ["allow-same-origin"],
        MI = SA([].concat(_.qi(JI), _.qi(KI)));
    SA([].concat(_.qi(JI), _.qi(LI)));
    SA([].concat(_.qi(JI), _.qi(KI), _.qi(LI)));
    var NI = _.hw(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        OI = {
            ml: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Cf) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Cf)) throw new RangeError("Invalid subdomain: " + a.Cf);
                return eb("https://" + a.Cf + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            vo: function(a) {
                return _.fb(NI, a)
            }
        };
    var PI = function() {};
    PI.g = function() {
        throw Error("Must be overridden");
    };
    var Vj = function() {
        this.g = 0
    };
    _.T(Vj, PI);
    Vj.Bc = void 0;
    Vj.g = function() {
        return Vj.Bc ? Vj.Bc : Vj.Bc = new Vj
    };
    var QI = function() {
            this.cache = {}
        },
        fk = function() {
            RI || (RI = new QI);
            return RI
        },
        gk = function(a) {
            var b = od(_.Zh(a, 3));
            if (!b) return 3;
            if (void 0 === ck(a, 2)) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    QI.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            Rc: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            Xj(6, a, null == (d = g) ? void 0 : d.message);
            return {
                Rc: null,
                success: !1
            }
        }
        if (!c) return {
            Rc: null,
            success: !0
        };
        try {
            var e = Oz(c);
            this.cache[a] = e;
            return {
                Rc: e,
                success: !0
            }
        } catch (g) {
            var f;
            Xj(5, a, null == (f = g) ? void 0 : f.message);
            return {
                Rc: null,
                success: !1
            }
        }
    };
    QI.prototype.set = function(a, b) {
        var c = ck(a, 1),
            d = "_GESPSK-" + c;
        Nz(a);
        try {
            b.setItem(d, bl(a))
        } catch (f) {
            var e;
            Xj(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var RI = null;
    var SI = function(a, b) {
        zH.call(this, a);
        this.id = a;
        this.C = b
    };
    _.T(SI, zH);
    SI.prototype.I = function(a) {
        this.C(this.id, a)
    };
    var pk = function(a, b, c, d) {
        SI.call(this, 1041, d);
        this.j = b;
        this.H = X(this, a);
        c && (this.o = CH(this, c))
    };
    _.T(pk, SI);
    pk.prototype.g = function() {
        var a = this.H.value,
            b, c, d = null != (c = this.j) ? c : null == (b = this.o) ? void 0 : b.value;
        d && fk().set(a, d) && _.Ai(a, 2) && Xj(27, ck(a, 1))
    };
    var rk = function(a, b) {
        SI.call(this, 1048, b);
        this.j = W(this);
        this.o = W(this);
        this.H = X(this, a)
    };
    _.T(rk, SI);
    rk.prototype.g = function() {
        var a = this.H.value,
            b = function(c) {
                var d = {};
                Xj(c, ck(a, 1), null, (d.tic = String(Math.round((Date.now() - od(_.Zh(a, 3))) / 6E4)), d))
            };
        switch (gk(a)) {
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
                Xj(9, ck(a, 1));
                this.j.G(a);
                break;
            case 4:
                b(23), this.j.G(a)
        }
    };
    var TI = function(a, b) {
        SI.call(this, 1094, b);
        this.j = BH(this);
        this.o = X(this, a)
    };
    _.T(TI, SI);
    TI.prototype.g = function() {
        var a = this.o.value;
        if (a) {
            if (void 0 !== a)
                for (var b = _.y(_.z(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, _.z(c, "startsWith").call(c, "_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            RI = new QI;
            this.j.notify()
        }
    };
    var Gk = function(a, b, c) {
        SI.call(this, 1049, c);
        this.j = b;
        EH(this, a)
    };
    _.T(Gk, SI);
    Gk.prototype.g = function() {
        for (var a = _.y(Zj(this.j)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = fk().get(b, this.j).Rc;
            if (c) {
                var d = gk(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = fk();
                    c = ck(c, 1);
                    try {
                        this.j.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (f) {
                        Xj(8, c, null == (d = f) ? void 0 : d.message)
                    }
                    Xj(40, b)
                }
            }
        }
    };
    var ok = function(a, b, c) {
        SI.call(this, 1027, c);
        this.He = a;
        this.H = b;
        this.j = W(this);
        this.o = W(this)
    };
    _.T(ok, SI);
    ok.prototype.g = function() {
        var a = fk().get(this.He, this.H).Rc;
        a || (a = Nz(Mz(this.He)), this.o.G(a.ib(ik(100))));
        this.j.G(a)
    };
    var mk = {
        nh: !1
    };
    var Kk = function(a, b) {
        SI.call(this, 1036, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(Kk, SI);
    Kk.prototype.g = function() {
        var a = this.o.value;
        0 !== gk(a) && this.j.G(a)
    };
    var vk = function(a, b, c) {
        SI.call(this, 1046, c);
        this.output = BH(this);
        this.j = W(this);
        this.o = X(this, b);
        EH(this, a)
    };
    _.T(vk, SI);
    vk.prototype.g = function() {
        this.j.G(this.o.value)
    };
    var sk = function(a, b, c) {
        SI.call(this, 1047, c);
        this.collectorFunction = a;
        this.j = W(this);
        this.o = W(this);
        this.H = W(this);
        this.J = X(this, b)
    };
    _.T(sk, SI);
    sk.prototype.g = function() {
        var a = this,
            b = this.J.value,
            c = ck(b, 1);
        Xj(18, c);
        try {
            var d = _.Vf();
            this.collectorFunction().then(function(e) {
                Xj(29, c, null, {
                    delta: String(_.Vf() - d)
                });
                a.j.G(ki(b, 2, e));
                a.H.Ha(e)
            }).catch(function(e) {
                Xj(28, c, lk(e));
                a.o.G(b.ib(ik(106)))
            })
        } catch (e) {
            Xj(1, c, lk(e)), this.o.G(b.ib(ik(107)))
        }
    };
    var qk = function(a, b) {
        SI.call(this, 1028, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(qk, SI);
    qk.prototype.g = function() {
        var a = this.o.value,
            b = ck(a, 1);
        null != od(_.Zh(a, 3)) || Xj(35, b);
        this.j.G(a)
    };
    var tk = function(a, b, c, d, e) {
        SI.call(this, 1050, e);
        this.J = c;
        this.H = d;
        this.j = W(this);
        this.o = X(this, a);
        this.P = CH(this, b)
    };
    _.T(tk, SI);
    tk.prototype.g = function() {
        var a = this.o.value,
            b = ck(a, 1),
            c = this.P.value;
        if (null == c) Xj(41, b), a.ib(ik(111)), this.j.G(a);
        else if ("string" !== typeof c) Xj(21, b), this.j.G(a.ib(ik(113)));
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.H : this.J)) {
                var d = {};
                Xj(12, b, null, (d.sl = String(c.length), d));
                b = a.ib(ik(108));
                _.hk(b, 2)
            } else c.length || Xj(20, b), _.hk(a, 10);
            this.j.G(a)
        }
    };
    var uk = function(a) {
        SI.call(this, 1046, a);
        this.output = BH(this)
    };
    _.T(uk, SI);
    uk.prototype.g = function() {
        var a = this;
        Yj().then(function() {
            a.output.notify()
        })
    };
    var UI = function(a, b, c, d, e) {
        e = void 0 === e ? mk : e;
        SI.call(this, 1059, d);
        this.P = b;
        this.J = c;
        this.o = e;
        this.j = W(this);
        this.W = X(this, a);
        this.H = CH(this, c)
    };
    _.T(UI, SI);
    UI.prototype.g = function() {
        var a = this.H.value;
        if (a) {
            var b = this.W.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            Xj(42, b, null, (c.ea = String(Number(this.P)), c));
            this.j.La(xk(b, d, a, this.J, this.C, this.o))
        }
    };
    var VI = function(a, b) {
        SI.call(this, 1057, b);
        this.j = a;
        this.o = W(this);
        this.H = W(this)
    };
    _.T(VI, SI);
    VI.prototype.g = function() {
        if (this.j)
            if ("object" !== typeof this.j) Xj(46, "UNKNOWN_COLLECTOR_ID"), WI(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.j.id,
                    b = this.j.networkCode;
                a && b && (delete this.j.id, Xj(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, Xj(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), WI(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (Xj(14, a), WI(this, a, 105)) : (_.H = Nf(dD), _.z(_.H, "includes")).call(_.H, a) ? (Xj(22, a), WI(this, a, 104)) : this.H.G(this.j)
            }
        else Xj(39, "UNKNOWN_COLLECTOR_ID"), WI(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var WI = function(a, b, c) {
        a.o.G(Mz(b).ib(ik(c)))
    };
    var Ek = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? mk : e;
        this.g = b;
        this.l = c;
        this.aa = f;
        this.K = d;
        this.I = e;
        this.D = [];
        this.M = [];
        this.j = [];
        this.A = 0;
        a = _.y(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    Ek.prototype.push = function(a) {
        var b = this;
        this.l || this.K();
        var c = function(f, g) {
            return void XI(b, f, g)
        };
        a = new VI(a, c);
        var d = new pk(a.o, void 0, this.g, c);
        c = new UI(a.H, this.l, this.g, c, this.I);
        var e = new nk;
        Hk(e, [a, d, c]);
        wk(e);
        a = c.j.promise;
        this.D.push(a);
        d = _.y(this.M);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    Ek.prototype.addOnSignalResolveCallback = function(a) {
        this.M.push(a);
        for (var b = _.y(this.D), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    Ek.prototype.addErrorHandler = function(a) {
        this.j.push(a)
    };
    Ek.prototype.clearAllCache = function() {
        var a = this,
            b = this.aa.currentScript instanceof HTMLScriptElement ? this.aa.currentScript.src : "";
        if (1 === this.A) {
            var c = {};
            Xj(49, "", null, (c.url = b, c))
        } else if (c = String(_.oh(null != b ? b : "")), (_.H = Nf(cD), _.z(_.H, "includes")).call(_.H, c)) c = {}, Xj(48, "", null, (c.url = b, c));
        else {
            var d = new nk;
            c = new TI(this.g, function(e, f) {
                return void XI(a, e, f)
            });
            J(d, c);
            wk(d);
            this.A = 1;
            setTimeout(function() {
                a.A = 0
            }, 1E3 * _.Lf(bD));
            d = {};
            Xj(43, "", null, (d.url = b, d));
            return c.j.promise
        }
    };
    var XI = function(a, b, c) {
            a = _.y(a.j);
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c)
        },
        Fk = function(a) {
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
    var Lk = function(a, b, c) {
        SI.call(this, 1035, c);
        this.o = b;
        this.j = W(this);
        this.H = X(this, a)
    };
    _.T(Lk, SI);
    Lk.prototype.g = function() {
        var a = this,
            b = this.H.value,
            c = ck(b, 1),
            d = this.o.toString(),
            e = {};
        Xj(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        ob(f, this.o);
        var g = function() {
            var h = {};
            Xj(31, c, null, (h.url = d, h));
            a.j.G(b.ib(ik(109)));
            _.$f(f, "error", g)
        };
        document.head.appendChild(f);
        _.pb(f, "error", g)
    };
    var Jk = new _.u.Set;
    var Nk = function(a, b) {
        try {
            var c = void 0 === _.Q(b, 6) ? !0 : _.Q(b, 6),
                d, e, f = If(_.fg(b, 2, 0)),
                g = _.I(b, 3);
            a: switch (_.fg(b, 4, 0)) {
                case 1:
                    var h = "pt";
                    break a;
                case 2:
                    h = "cr";
                    break a;
                default:
                    h = ""
            }
            var k = new $y(f, g, h),
                l = null != (e = null == (d = _.um(b, Xy, 5)) ? void 0 : _.I(d, 1)) ? e : "";
            k.Vd = l;
            k.g = c;
            k.B = a;
            var m = k.build();
            xb(m)
        } catch (n) {}
    };
    var YI = function(a) {
        this.F = _.A(a)
    };
    _.T(YI, _.D);
    YI.prototype.g = Gf([0, Oy, -3, Ry]);
    var ZI = [.05, .1, .2, .5],
        $I = [0, .5, 1],
        aJ = function(a) {
            a = Ak(a);
            if (!a) return -1;
            try {
                var b = BG(a.document);
                var c = new _.Lm(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Lm(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        bJ = function(a, b) {
            return 0 >= a || 0 >= b ? [] : ZI.map(function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        dJ = function(a) {
            this.M = a.B;
            this.j = a.Sb;
            this.I = a.timer;
            this.l = null;
            this.g = a.sb;
            this.A = cJ(this);
            this.D = a.rm || !1
        },
        eJ = function() {
            var a;
            return !!window.IntersectionObserver && dv(null == (a = window.performance) ? void 0 : a.now)
        };
    dJ.prototype.getSlotId = function() {
        return this.l
    };
    var gJ = function(a, b) {
            if (a.A) {
                if (null != a.l) {
                    try {
                        fJ(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.g && a.g(c)
                    }
                    a.A && a.A.unobserve(a.j)
                }
                a.l = b;
                a.A.observe(a.j)
            }
        },
        cJ = function(a) {
            if (!_.t.IntersectionObserver) return null;
            var b = a.j.offsetWidth * a.j.offsetHeight,
                c = aJ(a.M);
            b = [].concat(_.qi($I), _.qi(bJ(c, b)));
            la(b);
            return new _.t.IntersectionObserver(function(d) {
                try {
                    for (var e = aJ(a.M), f = _.y(d), g = f.next(); !g.done; g = f.next()) {
                        var h = g.value,
                            k = Math.round(h.boundingClientRect.width * h.boundingClientRect.height),
                            l = Math.round(h.intersectionRect.width * h.intersectionRect.height),
                            m = Math.round(h.time);
                        if (_.z(Number, "isSafeInteger").call(Number, k) && _.z(Number, "isSafeInteger").call(Number, l) && _.z(Number, "isSafeInteger").call(Number, e) && _.z(Number, "isSafeInteger").call(Number, m)) a.D && fJ(a, m, k, l, e, h.isIntersecting);
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
        fJ = function(a, b, c, d, e, f) {
            if (null == a.l) throw Error("Not Attached.");
            var g = new YI;
            c = _.Xh(g, 1, c);
            d = _.Xh(c, 2, d);
            e = _.Xh(d, 3, e);
            b = _.Xh(e, 4, b);
            f = Sh(b, 5, f);
            f = Jb(f.g(), 4);
            jC(a.I, "1", 10, f, void 0, a.l)
        };
    var hJ = function(a, b) {
            this.g = a;
            this.A = b
        },
        iJ = function(a) {
            if (a.g.frames.google_ads_top_frame) return !0;
            var b = VA(a.g);
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
    var $k = function(a) {
        this.F = _.A(a)
    };
    _.T($k, _.D);
    var dl = Hf($k),
        al = [1, 3];
    var Ng = {
        Xn: 0,
        Tn: 1,
        Un: 9,
        Qn: 2,
        Rn: 3,
        Wn: 5,
        Vn: 7,
        Sn: 10
    };
    var jJ = _.hw(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Uk = _.fb(jJ);
    var Vo = function(a) {
            var b = void 0 === b ? Wj(_.t) : b;
            this.id = a;
            this.g = .001 > Math.random();
            this.ge = {
                pvsid: String(b)
            }
        },
        kJ = function(a) {
            a = Al(a);
            var b;
            Ol.set(a, (null != (b = Ol.get(a)) ? b : 0) + 1)
        },
        Nl = function() {
            return [].concat(_.qi(_.z(Ol, "values").call(Ol))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        Xo = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.ge[b] = c : delete a.ge[b])
        },
        Zo = function(a) {
            var b = 1;
            b = void 0 === b ? null : b;
            if (lJ()) b = !0;
            else {
                var c = a.g;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && qC(window, mJ(a) || "", void 0, !0)
        },
        mJ = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Bn(a.ge, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        nJ = function(a) {
            var b = [].concat(_.qi(_.z(Ol, "keys").call(Ol)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? Xo(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), Xo(a, "nw_id", b.join()))
        },
        Wo = function(a, b) {
            Xo(a, "vrg", String(b.Fc || b.mb));
            nJ(a);
            Xo(a, "nslots", Nl().toString());
            b = ih();
            b.length && Xo(a, "eid", b.join());
            Xo(a, "pub_url", document.URL)
        },
        wp = function(a, b, c) {
            c = void 0 === c ? .001 : c;
            if (void 0 === c || 0 > c || 1 < c) c = .001;
            Math.random() < c && (a = new Vo(a), b(a), Zo(a))
        },
        Ol = new _.u.Map,
        lJ = zi(function() {
            return !!PA()
        });
    var Dl = function() {
        iC.call(this, _.E(El) || _.E(jF) ? 1 : 0, _.t);
        this.l = 0;
        var a = _.E(El) || _.E(jF);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.T(Dl, iC);
    _.oJ = function(a) {
        this.context = a
    };
    _.oJ.prototype.Db = function(a, b) {
        return Hl(this.context, a, b)
    };
    _.oJ.prototype.Ca = function(a, b) {
        return Bl(this.context, a, b)
    };
    _.oJ.prototype.Cb = function(a, b) {
        Fl(this.context, a, b);
        return !1
    };
    _.oJ.prototype.qd = ca(4);
    var pJ = function() {
            this.id = "goog_" + pA++
        },
        qJ = function(a) {
            _.V.call(this);
            this.context = a;
            this.l = new _.u.Map
        };
    _.T(qJ, _.V);
    qJ.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.clear()
    };
    qJ.prototype.listen = function(a, b) {
        var c = this;
        if (this.M) return function() {};
        var d = "string" === typeof a ? a : a.id,
            e, f, g = null != (f = null == (e = this.l.get(d)) ? void 0 : e.add(b)) ? f : new _.u.Set([b]);
        this.l.set(d, g);
        return function() {
            return void rJ(c, a, b)
        }
    };
    var sJ = function(a) {
            var b = Du;
            var c = void 0 === c ? function() {
                return !0
            } : c;
            return new _.u.Promise(function(d) {
                var e = a.listen(b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        rJ = function(a, b, c) {
            var d;
            return !(null == (d = a.l.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        },
        Ps = function(a, b, c, d) {
            var e, f, g, h, k, l, m, n;
            _.rb(function(p) {
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
                l = _.y(f);
                m = l.next();
                for (n = {}; !m.done; n = {
                        xg: void 0
                    }, m = l.next()) n.xg = m.value, k.push(new _.u.Promise(function(r) {
                    return function(v) {
                        return _.rb(function(w) {
                            if (1 == w.g) return w.yield(0, 2);
                            Hl(a.context, c, function() {
                                a.l.has(e) && f.has(r.xg) && (0, r.xg)(h)
                            }, !0);
                            v();
                            w.g = 0
                        })
                    }
                }(n)));
                return p.yield(_.u.Promise.all(k), 0)
            })
        },
        tJ = new pJ,
        uJ = new pJ,
        Qs = new pJ,
        vJ = new pJ,
        Rs = new pJ,
        wJ = new pJ,
        xJ = new pJ,
        Xq = new pJ,
        Du = new pJ,
        yJ = new pJ;
    var zJ = function() {
            this.data = void 0;
            this.status = 0;
            this.g = []
        },
        AJ = function(a) {
            a.data = void 0;
            a.status = 1
        };
    var BJ, FJ, IJ, Cu, JJ, EJ, DJ, CJ, yq;
    BJ = function() {
        this.g = new _.u.Map;
        this.D = 0;
        this.A = new _.u.Map;
        this.Jb = null;
        this.j = this.l = this.o = this.I = 0;
        this.Se = null;
        this.K = new zJ;
        this.M = new zJ
    };
    FJ = function(a, b) {
        a.g.get(b) || (a.g.set(b, {
            Kc: !0,
            Og: "",
            Fd: "",
            cj: 0,
            Kg: [],
            Mg: [],
            xc: !1,
            ko: -1
        }), _.jp(b, function() {
            a.g.delete(b);
            CJ(a, b)
        }), b.listen(uJ, function(c) {
            c = c.detail;
            var d = a.g.get(b);
            d.Og = ck(c, 33) || "";
            d.xc = !0;
            DJ(a, b, function() {
                return void(d.Og = "")
            });
            EJ(a, b, function() {
                return void(d.xc = !1)
            })
        }))
    };
    _.xq = function(a, b) {
        var c;
        return null == (c = a.g.get(b)) ? void 0 : c.Kc
    };
    _.GJ = function(a, b) {
        if (a = a.g.get(b)) a.Kc = !1
    };
    _.HJ = function(a, b) {
        if (a = a.g.get(b)) a.Kc = !0
    };
    IJ = function(a, b) {
        if (!b.length) return [];
        var c = Al(b[0].getAdUnitPath());
        b.every(function(g) {
            return Al(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.y(a.g);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            (f = f.next().value.Og) && Al(e.getAdUnitPath()) === c && !_.z(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    Cu = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.g.get(b)) ? void 0 : c.Fd) ? d : ""
    };
    JJ = function(a, b) {
        return (a = a.g.get(b)) ? a.cj - 1 : 0
    };
    EJ = function(a, b, c) {
        (a = a.g.get(b)) && a.Kg.push(c)
    };
    DJ = function(a, b, c) {
        (a = a.g.get(b)) && a.Mg.push(c)
    };
    CJ = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Mg.slice(), a.Mg.length = 0, a = _.y(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    yq = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Kg.slice(), a.Kg.length = 0, a = _.y(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    BJ.prototype.xc = function(a) {
        var b, c;
        return null != (c = null == (b = this.g.get(a)) ? void 0 : b.xc) ? c : !1
    };
    var KJ = function(a, b, c) {
            if (a = a.g.get(b)) a.bj = c
        },
        LJ = function(a, b) {
            if (a = a.g.get(b)) {
                var c;
                null == (c = a.bj) || c.za();
                delete a.bj
            }
        };
    var Rl = new _.u.Map,
        Ql = new _.u.Map;
    var Tl = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    Tl.prototype.getMessageId = function() {
        return this.messageId
    };
    Tl.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var MJ = N(2),
        NJ = N(3),
        OJ = N(4),
        PJ = N(5),
        QJ = N(6),
        RJ = N(12),
        SJ = N(14),
        TJ = N(16),
        mm = N(19),
        UJ = N(20),
        VJ = N(23),
        WJ = N(26),
        XJ = N(28),
        YJ = N(149),
        ZJ = N(30),
        $J = N(31),
        aK = N(34),
        bK = N(35),
        qn = N(36),
        ht = N(38),
        cK = N(40),
        dK = N(48),
        eK = N(50),
        fK = N(60),
        gK = N(63),
        hK = N(64),
        iK = N(66),
        jK = N(68),
        kK = N(69),
        lK = N(70),
        mK = N(71),
        nK = N(78),
        oK = N(80),
        Tn = N(82),
        nm = N(84),
        pK = N(85),
        qK = N(87),
        gm = N(88),
        rK = N(92),
        sK = N(93),
        tK = N(99),
        pm = N(103),
        Rn = N(104),
        uK = N(105),
        Ln = N(106),
        Mn = N(107),
        Sn = N(108),
        vK = N(113),
        wK = N(114),
        xK = N(115),
        yK = N(117),
        zK = N(118),
        AK = N(120),
        BK = N(119),
        Cn = N(121),
        CK = N(122),
        DK = N(123),
        EK = N(126),
        FK = N(127),
        GK = N(144),
        Cr = N(129),
        Fr = N(132),
        HK = N(134),
        IK = N(135),
        JK = N(136),
        KK = N(137),
        LK = N(138),
        MK = N(139),
        NK = N(140),
        OK = N(143),
        PK = N(145),
        QK = N(147),
        RK = N(150),
        SK = N(164),
        TK = N(152),
        UK = N(153),
        VK = N(154),
        Qr = N(155),
        WK = N(156),
        XK = N(157),
        YK = N(158),
        ZK = N(159),
        $K = N(160),
        Xu = N(161),
        wv = N(162);
    var aL = function(a, b, c) {
        var d = this;
        this.addEventListener = M(a, 86, function(e, f) {
            if ("function" !== typeof f) return O(b, Vl("Service.addEventListener", [e, f])), d;
            var g = Wl(e);
            if (!g) return O(b, sK(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = M(a, 904, function(e, f) {
            var g = Wl(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : O(b, Vl("Service.removeEventListener", [e, f]))
        });
        this.getSlots = M(a, 573, function() {
            return c.g.map(function(e) {
                return e.g
            })
        });
        this.getSlotIdMap = M(a, 574, function() {
            for (var e = {}, f = _.y(c.g), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.g;
            return e
        });
        this.getName = M(a, 575, function() {
            return c.getName()
        })
    };
    var Xl = function(a, b, c) {
        aL.call(this, a, b, c);
        this.setRefreshUnfilledSlots = M(a, 59, function(d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = M(a, 69, function(d) {
            c.Kc && bL(c, cL(c, d))
        });
        this.refreshAllSlots = M(a, 60, function() {
            c.Kc && bL(c)
        });
        this.setVideoSession = M(a, 61, function(d, e, f) {
            c.I = e;
            c.C = f;
            "number" === typeof d && (e = an().g, _.hk(e, 29, _.qd(d)))
        });
        this.getDisplayAdsCorrelator = M(a, 62, function() {
            return String(Cy(an().g, 26))
        });
        this.getVideoStreamCorrelator = M(a, 63, function() {
            var d = an().g;
            d = hs(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = M(a, 64, function(d) {
            var e = _.z(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            return !!e && dL(c, e)
        });
        this.onImplementationLoaded = M(a, 65, function() {
            c.R.info(dK("GPT CompanionAds"))
        });
        this.slotRenderEnded = M(a, 67, function(d, e, f) {
            var g = _.z(c.g, "find").call(c.g, function(h) {
                return h.g === d
            });
            return g && eL(c, g, e, f)
        })
    };
    _.T(Xl, aL);
    var Zl = function(a, b, c) {
        aL.call(this, a, b, c);
        this.setContent = M(a, 72, function(d) {
            var e = _.z(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            b.error(GK(), e)
        })
    };
    _.T(Zl, aL);
    var fm = function(a) {
        this.F = _.A(a)
    };
    _.T(fm, _.D);
    var em = function(a, b) {
            return ki(a, 1, b)
        },
        jm = function(a) {
            return mi(a, 2, 2)
        },
        dm = function(a, b) {
            return _.Je(a, 2, b, _.rd)
        },
        pn = function(a, b) {
            return Ly(a, 2, b)
        };
    fm.da = [2];
    var fL = function(a) {
        this.F = _.A(a)
    };
    _.T(fL, _.D);
    fL.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.$h(this, 5, a)
    };
    fL.prototype.clearTagForChildDirectedTreatment = function() {
        return _.hk(this, 5)
    };
    fL.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.$h(this, 6, a)
    };
    var Jp = function(a) {
        this.F = _.A(a)
    };
    _.T(Jp, _.D);
    var yo = function(a) {
        var b = new Jp;
        return Sh(b, 1, a)
    };
    var cu = function(a) {
        this.F = _.A(a)
    };
    _.T(cu, _.D);
    var pt = function(a) {
        this.F = _.A(a)
    };
    _.T(pt, _.D);
    pt.da = [1];
    var An = function(a) {
        this.F = _.A(a)
    };
    _.T(An, _.D);
    var yr = function(a) {
        this.F = _.A(a)
    };
    _.T(yr, _.D);
    var Er = function(a, b) {
            return _.$h(a, 1, b)
        },
        Br = function(a, b) {
            return _.Je(a, 2, b, _.rd)
        };
    yr.da = [2];
    var nt = function(a) {
        this.F = _.A(a)
    };
    _.T(nt, _.D);
    var Ar = function(a, b) {
        jk(a, 1, yr, b)
    };
    nt.da = [1];
    var mt = function(a) {
        this.F = _.A(a)
    };
    _.T(mt, _.D);
    var gL = function(a) {
        this.F = _.A(a)
    };
    _.T(gL, _.D);
    gL.prototype.getCategoryExclusions = function(a) {
        return Gy(this, 3, a)
    };
    gL.prototype.Pa = function() {
        return _.ak(this, fm, 14)
    };
    gL.prototype.vc = function() {
        return _.um(this, An, 18)
    };
    var Wu = function(a) {
        return _.um(a, fL, 25)
    };
    gL.prototype.getCorrelator = function() {
        return hs(this, 26)
    };
    gL.prototype.setCorrelator = function(a) {
        return _.hk(this, 26, _.qd(a))
    };
    gL.prototype.fi = function() {
        return By(this, mt, 33)
    };
    gL.da = [2, 3, 14];
    var Nm = function() {
        this.g = new _.u.Map
    };
    var hL = {},
        sm = (hL[253] = !1, hL[246] = [], hL[150] = "", hL[221] = !1, hL[36] = /^true$/.test("false"), hL[172] = null, hL[260] = void 0, hL[251] = null, hL),
        rm = function() {
            this.g = !1
        };
    var iL = function() {
            this.A = {};
            this.g = new gL;
            this.l = new _.u.Map;
            this.g.setCorrelator(bB());
            _.tm(36) && Sh(this.g, 15, !0)
        },
        jL = function(a) {
            var b = an(),
                c = a.getDomId();
            if (c && !b.A.hasOwnProperty(c)) {
                var d = _.Jf(Nm),
                    e = ++_.Jf(Dl).l;
                d.g.set(c, e);
                _.hk(a, 20, _.Zc(e));
                b.A[c] = a
            }
        },
        kL = function(a, b) {
            return a.A[b]
        },
        an = function() {
            return _.Jf(iL)
        };
    var lL = {},
        mL = (lL.companion_ads = "companionAds", lL.content = "content", lL.publisher_ads = "pubads", lL);
    var nL = zi(Qm);
    var bn = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = an().g,
            h = kL(an(), f.getDomId());
        this.set = M(a, 83, function(k, l) {
            "page_url" === k && l && (k = [dm(em(new fm, k), [String(l)])], _.om(h, 3, k));
            return e
        });
        this.get = M(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (_.H = h.Pa(), _.z(_.H, "find")).call(_.H, function(n) {
                return ck(n, 1) === k
            })) ? void 0 : jm(l)[0]) ? m : null
        });
        this.setClickUrl = M(a, 79, function(k) {
            am(k, h, f, b);
            return e
        });
        this.setTargeting = M(a, 81, function(k, l) {
            hm(k, l, f, h, b);
            return e
        });
        this.updateTargetingFromMap = M(a, 85, function(k) {
            im(k, f, h, b);
            return e
        });
        this.display = M(a, 78, function() {
            var k = Om(g, an().A);
            var l = void 0 === l ? document : l;
            var m;
            null != (m = k.T[f.getDomId()]) && Sh(m, 19, !0);
            m = f.getDomId();
            m = px(m);
            var n = {
                id: m
            };
            var p = void 0 === p ? xx : p;
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
                for (v = _.y(_.z(n, "entries").call(n)), n = v.next(); !n.done; n = v.next()) r = _.y(n.value), n = r.next().value, r = r.next().value, Cf(dI.test(n)), m[n] = r;
            if (!Ax.test("div")) throw Error("");
            if ("DIV" in Cx) throw Error("");
            v = "";
            if (m)
                for (w in m)
                    if (Object.prototype.hasOwnProperty.call(m, w)) {
                        if (!Ax.test(w)) throw Error("");
                        r = m[w];
                        if (null != r) {
                            n = w;
                            if (r instanceof Tw) r = Uw(r);
                            else {
                                if ("style" == n.toLowerCase()) throw Error("");
                                if (/^on/i.test(n)) throw Error("");
                                if (n.toLowerCase() in Bx)
                                    if (r instanceof _.Vw) r = _.gb(r).toString();
                                    else if (r instanceof _.Oa) r = _.Za(r);
                                else if ("string" === typeof r) r instanceof _.Oa || (r = String(r), dx.test(r) ? r = Qa(r) : (r = String(r), r = r.replace(/(%0A|%0D)/g, ""), r = r.match(cx) ? Qa(r) : null)), r = (r || fx).toString();
                                else throw Error("");
                            }
                            n = n + '="' + px(String(r)) + '"';
                            v += " " + n
                        }
                    }
            var w = "<div" + v;
            null == p ? p = [] : Array.isArray(p) || (p = [p]);
            !0 === Qw.div ? w += ">" : (m = _.zx(p), w += ">" + _.wx(m).toString() + "</div>");
            w = _.Tj(w);
            l.write(_.wx(w));
            Sm(f, l) && (jt(d), FJ(d.L, f), oL(d, k, f))
        });
        this.setTagForChildDirectedTreatment = M(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = Wu(g) || new fL;
                l.setTagForChildDirectedTreatment(k);
                _.bi(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = M(a, 567, function(k) {
            "boolean" === typeof k ? Sh(h, 12, k) : O(b, Vl("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = M(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = Wu(g) || new fL;
                l.setTagForUnderAgeOfConsent(k);
                _.bi(g, 25, l)
            }
            return e
        })
    };
    var pr = {
        Pn: 0,
        Mn: 1,
        Nn: 2,
        On: 3
    };
    var en = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5,
            GAME_MANUAL_INTERSTITIAL: 7,
            LEFT_SIDE_RAIL: 8,
            RIGHT_SIDE_RAIL: 9
        },
        gn = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        fn = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var pL = "",
        wn = null;
    var bo = function(a, b, c) {
        qJ.call(this, a);
        this.slotId = b;
        this.g = c
    };
    _.T(bo, qJ);
    bo.prototype.getSlotId = function() {
        return this.slotId
    };
    var Pg = function(a, b, c, d) {
        qJ.call(this, a);
        this.adUnitPath = b;
        this.Sb = d;
        this.g = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.T(Pg, qJ);
    _.q = Pg.prototype;
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
        return this.Sb
    };
    var qL = function(a, b) {
        a.g = b
    };
    var Vn = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    var Zn = _.Gx(function() {
            return void YA("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        rL = _.Gx(function() {
            return void YA("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        sL = _.Gx(function() {
            return void YA("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        eo = function(a, b, c, d, e) {
            aL.call(this, a, b, c);
            var f = this,
                g = an().g,
                h = an().A,
                k = !1;
            this.setTargeting = M(a, 1, function(l, m) {
                On({
                    key: l,
                    value: m,
                    Fa: g,
                    serviceName: c.getName(),
                    om: c.enabled,
                    fb: e,
                    R: b,
                    context: a
                });
                return f
            });
            this.clearTargeting = M(a, 2, function(l) {
                Un(l, g, c.getName(), b);
                return f
            });
            this.getTargeting = M(a, 38, function(l) {
                return Pn(l, g, b)
            });
            this.getTargetingKeys = M(a, 39, function() {
                return Qn(g)
            });
            this.setCategoryExclusion = M(a, 3, function(l) {
                "string" !== typeof l || bm(l) ? O(b, Vl("PubAdsService.setCategoryExclusion", [l])) : ((_.H = mi(g, 3, 2), _.z(_.H, "includes")).call(_.H, l) || Ly(g, 3, l), b.info(pK(l)));
                return f
            });
            this.clearCategoryExclusions = M(a, 4, function() {
                _.hk(g, 3);
                b.info(qK());
                return f
            });
            this.disableInitialLoad = M(a, 5, function() {
                Sh(g, 4, !0);
                k || (k = !0, $n())
            });
            this.enableSingleRequest = M(a, 6, function() {
                if (c.enabled && !_.Q(g, 6)) return O(b, fK("PubAdsService.enableSingleRequest")), !1;
                b.info(gK("single request"));
                Sh(g, 6, !0);
                return !0
            });
            this.enableAsyncRendering = M(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = M(a, 8, function() {
                YA("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = M(a, 485, function(l) {
                var m = new cu;
                m = _.pi(m, 1, 800);
                m = _.pi(m, 2, 400);
                m = _.hk(m, 3, _.Hc(3));
                if (_.ja(l)) {
                    var n = l.fetchMarginPercent;
                    "number" === typeof n && (0 <= n ? _.pi(m, 1, n) : -1 === n && _.hk(m, 1));
                    n = l.renderMarginPercent;
                    "number" === typeof n && (0 <= n ? _.pi(m, 2, n) : -1 === n && _.hk(m, 2));
                    l = l.mobileScaling;
                    "number" === typeof l && (0 < l ? _.hk(m, 3, _.Hc(l)) : -1 === l && _.hk(m, 3, _.Hc(1)))
                }
                window.IntersectionObserver || !Bi(m, 1) && !Bi(m, 2) ? _.bi(g, 5, m) : O(b, RK())
            });
            this.setCentering = M(a, 9, function(l) {
                l = !!l;
                b.info(hK("centering", String(l)));
                Sh(g, 15, l)
            });
            this.definePassback = M(a, 10, function(l, m) {
                return (l = co(a, b, c, l, m, d)) && l.Si
            });
            this.refresh = M(a, 11, function() {
                var l = _.Ua.apply(0, arguments),
                    m = _.y(l),
                    n = m.next().value;
                m = m.next().value;
                m = void 0 === m ? {} : m;
                n && !Array.isArray(n) || !_.ja(m) || m.changeCorrelator && "boolean" !== typeof m.changeCorrelator ? O(b, Vl("PubAdsService.refresh", l)) : (m && !1 === m.changeCorrelator || g.setCorrelator(bB()), n = n ? Yn(n, c) : _.E(YD) ? c.g.filter(function(p) {
                    var r = h[p.getDomId()];
                    return !(!Sm(p) && !Dm(lr(r)))
                }) : c.g, c.refresh(Om(g, h), n) || O(b, Vl("PubAdsService.refresh", l)))
            });
            this.enableVideoAds = M(a, 12, function() {
                Sh(g, 21, !0);
                tL(c, g)
            });
            this.setVideoContent = M(a, 13, function(l, m) {
                uL(c, l, m, g)
            });
            this.collapseEmptyDivs = M(a, 14, function(l) {
                l = void 0 === l ? !1 : l;
                l = void 0 === l ? !1 : l;
                Sh(g, 11, !0);
                l = !!l;
                Sh(g, 10, l);
                b.info(nK(String(l)));
                return !!_.Q(g, 11)
            });
            this.clear = M(a, 15, function(l) {
                if (Array.isArray(l)) return vL(c, g, h, Yn(l, c));
                if (void 0 === l) return vL(c, g, h, c.g);
                O(b, Vl("PubAdsService.clear", [l]));
                return !1
            });
            this.setLocation = M(a, 16, function(l) {
                "string" !== typeof l ? O(b, Vl("PubAdsService.setLocation", [l])) : ki(g, 8, l);
                return f
            });
            this.setCookieOptions = M(a, 17, function() {
                rL();
                return f
            });
            this.setTagForChildDirectedTreatment = M(a, 18, function(l) {
                sL();
                if (1 !== l && 0 !== l) return O(b, CK("PubadsService.setTagForChildDirectedTreatment", Dn(l), "0,1")), f;
                var m = Wu(g) || new fL;
                m.setTagForChildDirectedTreatment(l);
                _.bi(g, 25, m);
                return f
            });
            this.clearTagForChildDirectedTreatment = M(a, 19, function() {
                sL();
                var l = Wu(g);
                if (!l) return f;
                l.clearTagForChildDirectedTreatment();
                _.bi(g, 25, l);
                return f
            });
            this.setPublisherProvidedId = M(a, 20, function(l) {
                l = String(l);
                b.info(hK("PPID", l));
                ki(g, 16, l);
                return f
            });
            this.set = M(a, 21, function(l, m) {
                rn(l, m, g, c.getName(), b);
                return f
            });
            this.get = M(a, 22, function(l) {
                return sn(l, g, b)
            });
            this.getAttributeKeys = M(a, 23, function() {
                return tn(g)
            });
            this.display = M(a, 24, function(l, m, n, p) {
                return void c.display(l, m, d, n, p)
            });
            this.updateCorrelator = M(a, 25, function() {
                YA(Xn("update"));
                O(b, xK());
                g.setCorrelator(bB());
                return f
            });
            this.defineOutOfPagePassback = M(a, 35, function(l) {
                l = co(a, b, c, l, [1, 1], d);
                if (!l) return null;
                _.$h(l.Fa, 15, 1);
                return l.Si
            });
            this.setForceSafeFrame = M(a, 36, function(l) {
                "boolean" !== typeof l ? O(b, Vl("PubAdsService.setForceSafeFrame", [Dn(l)])) : Sh(g, 13, l);
                return f
            });
            this.setSafeFrameConfig = M(a, 37, function(l) {
                var m = En(b, l);
                m ? _.bi(g, 18, m) : O(b, Vl("PubAdsService.setSafeFrameConfig", [l]));
                return f
            });
            this.setRequestNonPersonalizedAds = M(a, 445, function(l) {
                sL();
                if (0 !== l && 1 !== l) return O(b, CK("PubAdsService.setRequestNonPersonalizedAds", Dn(l), "0,1")), f;
                var m = Wu(g) || new fL;
                Sh(m, 8, !!l);
                _.bi(g, 25, m);
                return f
            });
            this.setTagForUnderAgeOfConsent = M(a, 447, function(l) {
                l = void 0 === l ? 2 : l;
                sL();
                if (2 !== l && 0 !== l && 1 !== l) return O(b, CK("PubadsService.setTagForUnderAgeOfConsent", Dn(l), "2,0,1")), f;
                var m = Wu(g) || new fL;
                m.setTagForUnderAgeOfConsent(l);
                _.bi(g, 25, m);
                return f
            });
            this.getCorrelator = M(a, 27, function() {
                return String(Cy(g, 26))
            });
            this.getTagSessionCorrelator = M(a, 631, function() {
                return Wj(_.t)
            });
            this.getVideoContent = M(a, 30, function() {
                return wL(c, g)
            });
            this.getVersion = M(a, 568, function() {
                return a.Fc ? String(a.Fc) : a.mb
            });
            this.forceExperiment = M(a, 569, function(l) {
                return void c.forceExperiment(l)
            });
            this.setCorrelator = M(a, 28, function(l) {
                YA(Xn("set"));
                O(b, wK());
                if (Xg(window)) return f;
                if (!so(l)) return O(b, Vl("PubadsService.setCorrelator", [Dn(l)])), f;
                l = g.setCorrelator(l);
                Sh(l, 27, !0);
                return f
            });
            this.markAsAmp = M(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = M(a, 571, function() {
                return !!_.Q(g, 6)
            });
            this.setImaContent = M(a, 328, function(l, m) {
                _.Ai(g, 22) ? uL(c, l, m, g) : (Sh(g, 21, !0), tL(c, g), "string" === typeof l && ki(g, 19, l), "string" === typeof m && ki(g, 20, m))
            });
            this.getImaContent = M(a, 329, function() {
                return _.Ai(g, 22) ? wL(c, g) : c.enabled ? {
                    vid: _.I(g, 19) || "",
                    cmsid: _.I(g, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = M(a, 572, function() {
                return !!_.Q(g, 4)
            });
            this.setPrivacySettings = M(a, 648, function(l) {
                if (!_.ja(l)) return O(b, Vl("PubAdsService.setPrivacySettings", [l])), f;
                var m = l.restrictDataProcessing,
                    n = l.childDirectedTreatment,
                    p = l.underAgeOfConsent,
                    r = l.limitedAds,
                    v = l.nonPersonalizedAds,
                    w = l.userOptedOutOfPersonalization,
                    x = l.trafficSource,
                    B, C = null != (B = Wu(g)) ? B : new fL;
                "boolean" === typeof v ? Sh(C, 8, v) : void 0 !== v && O(b, Cn("PubAdsService.setPrivacySettings", Dn(l), "nonPersonalizedAds", Dn(v)));
                "boolean" === typeof w ? Sh(C, 13, w) : void 0 !== w && O(b, Cn("PubAdsService.setPrivacySettings", Dn(l), "userOptedOutOfPersonalization", Dn(w)));
                "boolean" === typeof m ? Sh(C, 1, m) : void 0 !== m && O(b, Cn("PubAdsService.setPrivacySettings", Dn(l), "restrictDataProcessing", Dn(m)));
                if ("boolean" === typeof r) {
                    m = Wn();
                    if (r && !_.Q(C, 9) && a.Oc) {
                        v = a.Ra;
                        w = v.Nc;
                        B = ql(a);
                        var F = new GC;
                        F = _.tl(F, 1, !0);
                        F = _.tl(F, 2, m);
                        B = _.gj(B, 11, vl, F);
                        w.call(v, B)
                    }
                    m ? Sh(C, 9, r) : r && O(b, QK())
                } else void 0 !== r && O(b, Cn("PubAdsService.setPrivacySettings", Dn(l), "limitedAds", Dn(r)));
                void 0 !== p && (null === p ? C.setTagForUnderAgeOfConsent(2) : !1 === p ? C.setTagForUnderAgeOfConsent(0) : !0 === p ? C.setTagForUnderAgeOfConsent(1) : O(b, Cn("PubAdsService.setPrivacySettings", Dn(l), "underAgeOfConsent", Dn(p))));
                void 0 !== n && (null === n ? C.clearTagForChildDirectedTreatment() : !1 === n ? C.setTagForChildDirectedTreatment(0) : !0 === n ? C.setTagForChildDirectedTreatment(1) : O(b, Cn("PubAdsService.setPrivacySettings", Dn(l), "childDirectedTreatment", Dn(n))));
                void 0 !== x && (null === x ? _.hk(C, 10) : (_.H = _.z(Object, "values").call(Object, fn), _.z(_.H, "includes")).call(_.H, x) ? _.$h(C, 10, x) : O(b, Cn("PubAdsService.setPrivacySettings", Dn(l), "trafficSource", Dn(x))));
                _.bi(g, 25, C);
                return f
            })
        };
    _.T(eo, aL);
    var xL = function(a, b) {
        this.getId = M(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = M(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = M(a, 595, function() {
            return b.getName()
        });
        this.toString = M(a, 596, function() {
            return b.toString()
        });
        this.getDomId = M(a, 597, function() {
            return b.getDomId()
        })
    };
    var yL = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        zL = function(a, b) {
            a.advertiserId = b
        },
        AL = function(a, b) {
            a.campaignId = b
        },
        BL = function(a, b) {
            a.yieldGroupIds = b
        },
        CL = function(a, b) {
            a.companyIds = b
        };
    var vm = function(a) {
        this.F = _.A(a)
    };
    _.T(vm, _.D);
    vm.prototype.getWidth = function() {
        return Os(this, 1)
    };
    vm.prototype.getHeight = function() {
        return Os(this, 2)
    };
    var mo = function() {
        var a = new vm;
        return Sh(a, 3, !0)
    };
    var ym = function(a) {
        this.F = _.A(a)
    };
    _.T(ym, _.D);
    ym.da = [2];
    var DL = function(a) {
        this.F = _.A(a)
    };
    _.T(DL, _.D);
    var EL = function(a) {
        var b = new DL;
        return _.$h(b, 1, a)
    };
    var FL = function(a) {
        this.F = _.A(a)
    };
    _.T(FL, _.D);
    FL.da = [1];
    var GL = function(a) {
        this.F = _.A(a)
    };
    _.T(GL, _.D);
    var HL = function(a) {
        this.F = _.A(a)
    };
    _.T(HL, _.D);
    HL.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    HL.prototype.getDomId = function() {
        return _.I(this, 2)
    };
    var IL = function(a, b) {
        ki(a, 2, b)
    };
    HL.prototype.Pa = function() {
        return _.ak(this, fm, 3)
    };
    HL.prototype.getServices = function(a) {
        return Gy(this, 4, a)
    };
    var JL = function(a, b) {
        _.om(a, 5, b)
    };
    HL.prototype.getClickUrl = function() {
        return _.I(this, 7)
    };
    HL.prototype.setClickUrl = function(a) {
        return ki(this, 7, a)
    };
    HL.prototype.getCategoryExclusions = function(a) {
        return Gy(this, 8, a)
    };
    var cm = function(a) {
        return _.ak(a, fm, 9)
    };
    HL.prototype.vc = function() {
        return _.um(this, An, 13)
    };
    var lr = function(a) {
        return _.fg(a, 15, 0)
    };
    HL.da = [3, 4, 5, 6, 8, 9, 27];
    var KL = function(a, b) {
        this.width = a;
        this.height = b
    };
    KL.prototype.getWidth = function() {
        return this.width
    };
    KL.prototype.getHeight = function() {
        return this.height
    };
    var LL = new _.u.Set(["unhideWindow", "navBar"]);
    var Bo = function(a, b, c) {
        var d = this,
            e = kL(an(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.jp(c, function() {
            e = new HL;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        c.listen(Qs, function(n) {
            var p = n.detail;
            n = p.Ph;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = M(a, 40, function(n, p) {
            go(n, p, c, e, b);
            return d
        });
        this.get = M(a, 41, function(n) {
            return ho(n, c, e, b)
        });
        this.getAttributeKeys = M(a, 42, function() {
            return io(e)
        });
        this.addService = M(a, 43, function(n) {
            n = Rl.get(n);
            if (!n) return O(b, Vl("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((_.H = mi(e, 4, 2), _.z(_.H, "includes")).call(_.H, p)) return b.info(RJ(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = M(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new to("Size mapping must be an array");
                var r = n.map(uo);
                _.om(p, 6, r)
            } catch (v) {
                n = v, Fl(a, 44, n), YA("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = M(a, 45, function(n) {
            am(n, e, c, b);
            return d
        });
        this.setCategoryExclusion = M(a, 46, function(n) {
            var p = e;
            "string" !== typeof n || bm(n) ? O(b, Vl("Slot.setCategoryExclusion", [n]), c) : ((_.H = mi(p, 8, 2), _.z(_.H, "includes")).call(_.H, n) || Ly(p, 8, n), b.info(SJ(n), c));
            return d
        });
        this.clearCategoryExclusions = M(a, 47, function() {
            _.hk(e, 8);
            b.info(TJ(), c);
            return d
        });
        this.getCategoryExclusions = M(a, 48, function() {
            return mi(e, 8, 2).slice()
        });
        this.setTargeting = M(a, 49, function(n, p) {
            hm(n, p, c, e, b);
            return d
        });
        this.updateTargetingFromMap = M(a, 649, function(n) {
            im(n, c, e, b);
            return d
        });
        this.clearTargeting = M(a, 50, function(n) {
            qm(n, c, e, b);
            return d
        });
        this.getTargeting = M(a, 51, function(n) {
            return km(n, c, e, b)
        });
        this.getTargetingKeys = M(a, 52, function() {
            return lm(e)
        });
        this.setCollapseEmptyDiv = M(a, 53, function(n, p) {
            var r = e;
            p = void 0 === p ? !1 : p;
            p = void 0 === p ? !1 : p;
            "boolean" !== typeof n || "boolean" !== typeof p ? O(b, Vl("Slot.setCollapseEmptyDiv", [n, p]), c) : (r = Sh(r, 10, n), Sh(r, 11, n && p), p && !n && O(b, UJ(c.toString()), c));
            return d
        });
        this.getAdUnitPath = M(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = M(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = M(a, 55, function(n) {
            var p = e;
            "boolean" !== typeof n ? O(b, Vl("Slot.setForceSafeFrame", [String(n)]), c) : Sh(p, 12, n);
            return d
        });
        this.setSafeFrameConfig = M(a, 56, function(n) {
            var p = e,
                r = En(b, n);
            r ? _.bi(p, 13, r) : b.error(Vl("Slot.setSafeFrameConfig", [n]), c);
            return d
        });
        c.listen(uJ, function(n) {
            n = n.detail;
            if (Fn(n, 8)) g = null;
            else {
                g = new yL;
                var p = !!Fn(n, 9);
                g.isBackfill = p;
                var r = Dy(n, 15),
                    v = Dy(n, 16);
                r.length && v.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = v[0], p || (g.creativeId = r[0], g.lineItemId = v[0], (p = Dy(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                Dy(n, 17).length && zL(g, Dy(n, 17)[0]);
                Dy(n, 18).length && AL(g, Dy(n, 18)[0]);
                Dy(n, 19).length && BL(g, Dy(n, 19));
                Dy(n, 20).length && CL(g, Dy(n, 20));
                n = Ce(n, 45, ge(n.F) & 34 ? De : Ee, 2).map(function(w) {
                    return Zd(w)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = M(a, 355, function() {
            return g
        });
        this.getName = M(a, 170, function() {
            b.error(OK());
            return c.getAdUnitPath()
        });
        var m = new xL(a, c);
        this.getSlotId = M(a, 579, function() {
            return m
        });
        this.getServices = M(a, 580, function() {
            return mi(e, 4, 2).map(function(n) {
                var p = mL[n];
                if (p) {
                    var r, v, w;
                    n = null != (w = null == (v = (r = vo())[p]) ? void 0 : v.call(r)) ? w : null
                } else n = null;
                return n
            })
        });
        this.getSizes = M(a, 581, function(n, p) {
            var r, v;
            return null != (v = null == (r = zm(e, n, p)) ? void 0 : r.map(function(w) {
                return _.Q(w, 3) ? "fluid" : new KL(w.getWidth(), w.getHeight())
            })) ? v : null
        });
        this.getClickUrl = M(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = M(a, 583, function() {
            for (var n = {}, p = _.y(cm(e)), r = p.next(); !r.done; r = p.next()) r = r.value, _.I(r, 1) && (n[ck(r, 1)] = jm(r));
            return n
        });
        this.getOutOfPage = M(a, 584, function(n) {
            return "number" === typeof n ? lr(e) === n : 0 !== lr(e)
        });
        this.getCollapseEmptyDiv = M(a, 585, function() {
            return null != Fn(e, 10) ? _.Q(e, 10) : null
        });
        this.getDivStartsCollapsed = M(a, 586, function() {
            return null != Fn(e, 11) ? _.Q(e, 11) : null
        });
        c.listen(vJ, function(n) {
            h = n.detail.qk
        });
        this.getContentUrl = M(a, 587, function() {
            return h()
        });
        this.getFirstLook = M(a, 588, function() {
            YA("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen(uJ, function(n) {
            var p;
            k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = M(a, 591, function() {
            return k
        });
        this.getHtml = M(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = M(a, 1022, function(n) {
            var p = e;
            if (Rg(n)) {
                var r = n.componentAuction,
                    v = n.adExpansion,
                    w = n.outstream;
                if (null != r) {
                    var x = {
                        componentAuction: r
                    };
                    if (_.ja(x)) {
                        if (r = He(p, 26, zd), void 0 !== x.componentAuction) {
                            x = _.y(x.componentAuction);
                            for (var B = x.next(); !B.done; B = x.next()) {
                                var C = B.value;
                                B = C.configKey;
                                C = C.auctionConfig;
                                "string" !== typeof B || bm(B) || (null === C ? r.delete(B) : C && r.set(B, JSON.stringify(C)))
                            }
                        }
                    } else O(b, Vl("googletag.Slot.setConfig", [x]))
                }
                if (_.z(Object, "hasOwn").call(Object, n, "interstitial"))
                    if (5 !== lr(p)) O(b, $K("interstitial"), c);
                    else {
                        x = n.interstitial;
                        b.info(WK("interstitial", Dn(x)), c);
                        if (Rg(x))
                            for (r = {}, x = _.y(_.z(Object, "entries").call(Object, x)), B = x.next(); !B.done; B = x.next()) switch (C = _.y(B.value), B = C.next().value, C = C.next().value, B) {
                                case "triggers":
                                    r.triggers = C;
                                    break;
                                default:
                                    O(b, YK("interstitial", B), c)
                            } else O(b, ZK("googletag.slot.setConfig", "interstitial", Dn(x)), c), r = null;
                        B = r;
                        r = new FL;
                        x = {};
                        if (B && B.triggers)
                            if (B = B.triggers, Rg(B))
                                for (x.triggers = {}, B = _.y(_.z(Object, "entries").call(Object, B)), C = B.next(); !C.done; C = B.next()) {
                                    var F = _.y(C.value);
                                    C = F.next().value;
                                    F = F.next().value;
                                    var G = C;
                                    C = F;
                                    if (LL.has(G))
                                        if (xo(C)) switch (G) {
                                            case "unhideWindow":
                                                F = EL(2);
                                                F = Sh(F, 2, C);
                                                jk(r, 1, DL, F);
                                                x.triggers.zo = C;
                                                break;
                                            case "navBar":
                                                _.E(JD) ? (F = EL(3), F = Sh(F, 2, C), jk(r, 1, DL, F), x.triggers.mo = C) : O(b, YK("interstitial.triggers", G), c)
                                        } else O(b, ZK("interstitial.triggers", G, Dn(C)), c);
                                        else O(b, YK("interstitial.triggers", G), c)
                                } else O(b, ZK("interstitial", "triggers", Dn(B)), c);
                        b.info(XK("interstitial", Dn(x)), c);
                        _.bi(p, 29, r)
                    }
                _.E(wo) ? _.z(Object, "hasOwn").call(Object, n, "adExpansion") && zo(p, v) : zo(p, v);
                if (_.E(eD) && _.z(Object, "hasOwn").call(Object, n, "outstream") && (_.hk(p, 31), null !== w))
                    if (Rg(w))
                        if (0 !== lr(p)) O(b, $K("outstream", String(lr(p))), c);
                        else {
                            a: {
                                v = ["exposeVast"];n = new _.u.Map;w = _.y(_.z(Object, "entries").call(Object, w));
                                for (r = w.next(); !r.done; r = w.next()) x = _.y(r.value),
                                r = x.next().value,
                                x = x.next().value,
                                _.z(v, "includes").call(v, r) ? n.set(r, x) : O(b, YK("outstream", r), c);
                                if (0 === n.size) w = null;
                                else
                                    for (w = new GL, n = _.y(n), v = n.next(); !v.done; v = n.next())
                                        if (r = _.y(v.value), v = r.next().value, r = r.next().value, "exposeVast" === v) {
                                            if (!xo(r)) {
                                                O(b, ZK("outstream", "exposeVast", Dn(r)), c);
                                                w = null;
                                                break a
                                            }
                                            Sh(w, 1, r)
                                        }
                            }
                            w && _.bi(p, 31, w)
                        }
                else O(b, ZK("googletag.slot.setConfig", "outstream", Dn(w)), c)
            } else O(b, Vl("googletag.slot.setConfig", [n]), c)
        })
    };
    var Y = function(a, b, c) {
        zH.call(this, b, c);
        this.context = a
    };
    _.T(Y, zH);
    Y.prototype.I = function(a) {
        Fl(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var Lo = function(a, b, c, d, e) {
        Y.call(this, a, 1226);
        this.Of = b;
        this.startTime = _.Vf();
        this.j = X(this, c);
        this.Ba = null != d ? d : this.context.Ra;
        this.o = null != e ? e : .01
    };
    _.T(Lo, Y);
    Lo.prototype.g = function() {
        _.nh() < this.o && this.Ba.Gc.Qc.hi.mk.nk.ie({
            me: _.Vf() - this.startTime,
            Of: this.Of,
            ni: !!_.I(this.j.value, 2),
            oi: !!_.I(this.j.value, 1),
            ki: !!_.I(this.j.value, 11)
        })
    };
    Lo.prototype.l = function(a) {
        this.I(a)
    };
    var Jo = function(a, b, c, d, e) {
        Y.call(this, a, 959);
        this.kb = b;
        this.output = W(this);
        this.j = X(this, b);
        EH(this, c);
        EH(this, d);
        e && EH(this, e)
    };
    _.T(Jo, Y);
    Jo.prototype.g = function() {
        this.output.G(this.j.value)
    };
    var Io = function(a, b, c, d, e, f) {
        Y.call(this, a, 1172);
        this.R = b;
        this.L = c;
        this.B = d;
        this.j = BH(this);
        EH(this, e);
        this.o = X(this, f)
    };
    _.T(Io, Y);
    Io.prototype.g = function() {
        var a = this,
            b = _.Lf(AD);
        b = new uG(this.B, {
            gppApiDetectionMode: b
        });
        _.S(this, b);
        if (AF(b.caller)) {
            var c = this.L.M,
                d = c.status,
                e = function(f) {
                    if (f.internalErrorState) GG(a.o.value, f.gppString);
                    else if ($g(f.applicableSections)) EG(FG(a.o.value, f.applicableSections.filter(function(k) {
                        return _.z(Number, "isInteger").call(Number, k)
                    })), !1);
                    else {
                        var g = GG(FG(a.o.value, f.applicableSections.filter(function(k) {
                            return _.z(Number, "isInteger").call(Number, k)
                        })), f.gppString);
                        try {
                            var h = yG(f.gppString)
                        } catch (k) {
                            Fl(a.context, 1182, k), h = !1
                        }
                        EG(g, h)
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
                    AJ(c);
                    c.g.push(e);
                    this.R.info(AK());
                    b.addEventListener(Bl(this.context, 1173, function(f) {
                        if ("ready" === f.pingData.signalStatus || $g(f.pingData.applicableSections)) c.data = f.pingData, c.status = 2, c.g.forEach(function(g) {
                            g(f.pingData)
                        }), c.g = []
                    }));
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Go = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 874);
        this.R = b;
        this.L = c;
        this.B = d;
        this.o = e;
        this.j = BH(this);
        EH(this, f);
        this.C = X(this, g)
    };
    _.T(Go, Y);
    Go.prototype.g = function() {
        var a = this,
            b = new HF(this.B, {
                timeoutMs: -1,
                Xj: !0
            });
        _.S(this, b);
        if (JF(b)) {
            var c = this.L.K,
                d = c.status,
                e = function(f) {
                    var g = a.C.value,
                        h, k;
                    if (k = !(a.o ? _.Q(a.o, 9) : _.E(rD) && Wn())) k = {
                        bl: _.E(qD) && _.tm(221)
                    }, k = void 0 === k ? {} : k, k = NF(f) ? !1 === f.gdprApplies ? !0 : "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !k.io || "string" !== typeof f.tcString || !f.tcString.length ? !k.bl : LF(f, "1") : !1;
                    k = Sh(g, 5, k);
                    var l = !OF(f, ["3", "4"]);
                    k = Sh(k, 9, l);
                    k = ki(k, 2, f.tcString);
                    l = null != (h = f.addtlConsent) ? h : "";
                    h = ki(k, 4, l);
                    _.$h(h, 7, f.internalErrorState);
                    null != f.gdprApplies && Sh(g, 3, f.gdprApplies);
                    OF(f, ["2", "7", "9", "10"]) || Sh(g, 8, !0);
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
                    AJ(c);
                    c.g.push(e);
                    this.R.info(zK());
                    b.addEventListener(function(f) {
                        NF(f) ? ("tcunavailable" === f.tcString ? a.R.info(BK("failed")) : a.R.info(BK("succeeded")), c.data = f, c.status = 2, c.g.forEach(function(g) {
                            g(f)
                        }), c.g = []) : AJ(c)
                    });
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Fo = function(a, b, c, d, e) {
        Y.call(this, a, 875);
        this.R = b;
        this.B = c;
        this.j = BH(this);
        EH(this, d);
        this.o = X(this, e)
    };
    _.T(Fo, Y);
    Fo.prototype.g = function() {
        var a = this,
            b = new iG(this.B);
        _.S(this, b);
        if (AF(b.caller)) {
            var c = Bl(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && (ki(a.o.value, 1, d.uspString), DG(a.o.value, Bl(a.context, 1187, function() {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    4 == f.length && (-1 == f.indexOf("-") || "---" === f.substring(1)) && "1" <= f[0] && "9" >= f[0] && yB.hasOwnProperty(f[1]) && yB.hasOwnProperty(f[2]) && yB.hasOwnProperty(f[3]) ? (f = new xB, f = _.ul(f, 1, parseInt(e[0], 10)), f = _.L(f, 2, yB[e[1]]), f = _.L(f, 3, yB[e[2]]), e = _.L(f, 4, yB[e[3]])) : e = null;
                    return 2 === (null == e ? void 0 : _.fg(e, 3, 0))
                })()));
                a.j.notify()
            });
            this.R.info(yK());
            jG(b, c)
        } else this.j.notify()
    };
    var Do = function(a, b) {
        Y.call(this, a, 958);
        this.j = b;
        this.kb = W(this)
    };
    _.T(Do, Y);
    Do.prototype.g = function() {
        var a = new CG,
            b = this.j ? _.Q(this.j, 9) : Wn(),
            c = _.E(pD) && _.tm(221);
        Sh(a, 5, !b && !c);
        this.kb.G(a)
    };
    var Eo = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Y.call(this, a, 960);
        this.B = b;
        this.o = d;
        this.j = X(this, c)
    };
    _.T(Eo, Y);
    Eo.prototype.g = function() {
        var a = this;
        Hl(this.context, 894, function() {
            return void wp("cmpMet", function(b) {
                Wo(b, a.context);
                var c = new HF(a.B);
                _.S(a, c);
                var d = new iG(a.B);
                _.S(a, d);
                Xo(b, "fc", Number(a.j.value));
                Xo(b, "tcfv1", Number(!!a.B.__cmp));
                Xo(b, "tcfv2", Number(JF(c)));
                Xo(b, "usp", Number(!!AF(d.caller)));
                Xo(b, "ptt", 17);
                b = _.Lf(AD);
                if (0 !== b) {
                    c = new uG(a.B, {
                        gppApiDetectionMode: b
                    });
                    if (AF(c.caller)) switch (b) {
                        case 1:
                            hh(31080194);
                            break;
                        case 2:
                            hh(31080195);
                            break;
                        case 3:
                            hh(31080196)
                    }
                    _.S(a, c)
                }
            }, a.o)
        })
    };
    var ML = function(a, b, c, d) {
        Y.call(this, a, 1103);
        this.j = b;
        this.Z = c;
        this.privacyTreatments = d;
        this.output = W(this)
    };
    _.T(ML, Y);
    ML.prototype.g = function() {
        this.output.G(!!ah(this.Z) && !_.Q(this.Z, 9) && !_.Q(this.Z, 13) && (!_.E(Ho) || !_.Q(this.Z, 12)) && (this.j ? _.Q(this.j, 9) || _.Q(this.j, 8) || _.Q(this.j, 1) || _.E(UD) && _.Q(this.j, 13) || 1 === _.fg(this.j, 6, 2) || 1 === _.Vc(_.Zh(this.j, 5)) || _.z(this.privacyTreatments, "includes").call(this.privacyTreatments, 1) ? !1 : !0 : !0))
    };
    var Po = function(a) {
        this.R = a;
        this.A = this.g = 0
    };
    Po.prototype.push = function() {
        for (var a = _.y(_.Ua.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.u.globalThis), this.g++)
            } catch (c) {
                this.A++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.R.error(ZJ(String(c)))
            }
        }
        this.R.info($J(String(this.g), String(this.A)));
        return this.g
    };
    var No = function(a, b) {
        this.push = M(a, 76, b.push.bind(b))
    };
    var NL = ["Debug", "Info", "Warning", "Error", "Fatal"],
        OL = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.g = c;
            this.timestamp = new Date
        };
    _.q = OL.prototype;
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
        return this.timestamp.toTimeString() + ": " + NL[this.level] + ": " + this.message
    };
    var PL = _.hw(["https://console.googletagservices.com/pubconsole/loader.js"]),
        ap = _.fb(PL),
        ep, dp = !1,
        Uo = !1,
        Yo = !1;
    var et = function(a, b) {
        this.getAllEvents = M(a, 563, function() {
            return Uo ? QL(b).slice() : []
        });
        this.getEventsBySlot = M(a, 565, function(c) {
            return Uo ? RL(b, c).slice() : []
        });
        this.getEventsByLevel = M(a, 566, function(c) {
            return Uo ? SL(b, c).slice() : []
        })
    };
    var TL = {
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
                return gp(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return gp(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return gp(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return gp(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return gp(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return gp(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return gp(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            145: function(a) {
                return gp(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
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
                return "Refresh is disabled for " + gp(a[0]) + " " + a[1] + "."
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
        UL = {
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
    var VL = function(a) {
            this.context = a;
            this.l = this.g = 0;
            this.j = window;
            this.A = [];
            this.A.length = 1E3
        },
        QL = function(a) {
            return [].concat(_.qi(a.A.slice(a.g)), _.qi(a.A.slice(0, a.g))).filter(function(b) {
                return !!b
            })
        },
        RL = function(a, b) {
            return QL(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        SL = function(a, b) {
            return QL(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    VL.prototype.log = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? !1 : d;
        var e, f, g = new OL(a, b, null != (f = null == (e = c) ? void 0 : e.g) ? f : null);
        this.A[this.g] = g;
        this.g = (this.g + 1) % 1E3;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs();
        e = b.getMessageId();
        var k = TL[e] || UL[e];
        e = void 0;
        if (k) {
            e = k(h);
            if (d) throw new to(e);
            d = this.l < _.Lf(vD) && f && _.t.console;
            if (this.j === top && d || _.z(_.t.navigator.userAgent, "includes").call(_.t.navigator.userAgent, "Lighthouse")) {
                d = "[GPT] " + e;
                var l, m, n, p;
                2 === a ? null == (m = (l = _.t.console).warn) || m.call(l, d) : null == (p = (n = _.t.console).error) || p.call(n, d);
                this.l++
            }
        }
        a: if (m = e, l = c, l = void 0 === l ? null : l, this.context.lm) {
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
            a = this.context.Ra;
            c = a.km;
            p = new KC;
            p = _.$i(p, 1, this.context.pvsid);
            d = ih();
            p = _.Je(p, 2, d, Wc);
            p = _.aj(p, 3, this.context.Zf);
            d = _.E(xD) ? this.context.zb : this.context.mb;
            p = _.aj(p, 4, d);
            p = _.$i(p, 5, this.context.Tl);
            n = _.L(p, 6, n);
            m = _.aj(n, 7, m);
            n = b.getMessageId();
            m = _.L(m, 8, n);
            b = b.getMessageArgs();
            b = _.Je(m, 9, b, _.rd);
            m = Al(null != (w = null == (r = l) ? void 0 : r.getAdUnitPath()) ? w : "");
            r = _.aj(b, 10, m);
            w = null == (v = l) ? void 0 : v.getAdUnitPath();
            v = _.aj(r, 11, w);
            c.call(a, v)
        }
        return g
    };
    VL.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var O = function(a, b, c) {
        return a.log(2, b, c, !1)
    };
    VL.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var WL = function() {
            var a = {
                    ba: an().g,
                    pj: new Date(Date.now()),
                    Rh: window.location.href
                },
                b = this;
            a = void 0 === a ? {} : a;
            var c = void 0 === a.ba ? an().g : a.ba,
                d = void 0 === a.pj ? new Date(Date.now()) : a.pj,
                e = void 0 === a.Rh ? window.location.href : a.Rh;
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
                l = null !== l ? _.oh("w5uHecUBa2S:" + h + ":" + l) % k === Math.floor(d.valueOf() / 864E5) % k : void 0;
                return l
            }, a[13] = function() {
                return _.Ua.apply(0, arguments).some(function(h) {
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
                return _.z(_.Ua.apply(0, arguments), "includes").call(_.Ua.apply(0, arguments), String(_.oh(e)))
            }, a), g[4] = (f[14] = function() {
                var h = Number(b.j || void 0);
                isNaN(h) ? h = void 0 : (h = new Date(1E3 * h), h = 1E4 * h.getFullYear() + 100 * (h.getMonth() + 1) + h.getDate());
                return h
            }, f), g[5] = {}, g)
        },
        XL = function(a, b) {
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
    var Gu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 863);
        this.o = c;
        this.Fd = Number(b);
        this.j = X(this, d);
        this.H = X(this, e);
        this.J = X(this, f);
        this.C = X(this, g)
    };
    _.T(Gu, Y);
    Gu.prototype.g = function() {
        var a = this.J.value,
            b = this.j.value,
            c = this.C.value,
            d = this.H.value,
            e = this.o;
        var f = ip(e);
        var g = b.getBoundingClientRect();
        e = _.Rk(e) ? Gm(b, e) : {
            x: 0,
            y: 0
        };
        b = e.x;
        e = e.y;
        g = new _.gB(e, b + g.right, e + g.bottom, b);
        b = new XG;
        b = _.pi(b, 1, g.top);
        b = _.pi(b, 3, g.bottom);
        b = _.pi(b, 2, g.left);
        g = _.pi(b, 4, g.right);
        b = new YG;
        b = _.hk(b, 1, _.Zc(this.Fd));
        d = Sh(b, 2, !d);
        d = _.bi(d, 3, g);
        c = _.pi(d, 4, c);
        f = _.pi(c, 5, f);
        f = {
            type: "asmres",
            payload: bl(f)
        };
        a.ports[0].postMessage(f)
    };
    var nr = function(a, b, c, d) {
        Y.call(this, a, 1061);
        var e = this;
        this.output = W(this);
        this.output.La(new _.u.Promise(function(f) {
            var g = b.listen(c, function(h) {
                h = d(h);
                null !== h && (g(), f(h))
            });
            _.jp(e, g)
        }))
    };
    _.T(nr, Y);
    nr.prototype.g = function() {};
    var Wq = function(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        Y.call(this, a, 1061);
        var e = this;
        this.output = BH(this);
        vH(this.output, new _.u.Promise(function(f) {
            var g = b.listen(c, function(h) {
                d(h) && (g(), f())
            });
            _.jp(e, g)
        }))
    };
    _.T(Wq, Y);
    Wq.prototype.g = function() {};
    var Bu = function(a, b, c, d) {
        nr.call(this, a, b, Xq, function(e) {
            e = e.detail;
            var f;
            return "asmreq" === (null == (f = e.data) ? void 0 : f.type) && Os(WG(e.data.payload), 1) === Number(c) ? e : null
        });
        this.o = d;
        this.j = W(this)
    };
    _.T(Bu, nr);
    Bu.prototype.g = function() {
        this.j.G(ip(this.o))
    };
    var YL = /(<head(\s+[^>]*)?>)/i,
        au = function(a, b, c, d, e) {
            Y.call(this, a, 665);
            this.Sa = b;
            this.Gd = c;
            this.isBackfill = d;
            this.Fb = e;
            this.output = W(this)
        };
    _.T(au, Y);
    au.prototype.g = function() {
        var a;
        0 !== this.Sa.kind || null == (a = this.Gd) || !_.I(a, 1) || this.Fb ? this.output.G(this.Sa) : (a = this.Sa.ub, Ja() || (a = a.replace(YL, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.isBackfill && (a = a.replace(YL, '$1<meta name="referrer" content="origin">')), this.output.G({
            kind: 0,
            ub: a
        }))
    };
    var ZL = function(a, b, c) {
        Y.call(this, a, 1124);
        this.ce = BH(this);
        this.o = X(this, b);
        this.j = X(this, c)
    };
    _.T(ZL, Y);
    ZL.prototype.g = function() {
        _.nB(this.j.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.nB(this.o.value, "min-width", "100%");
        this.ce.notify()
    };
    var $L = function(a, b, c, d, e) {
        Y.call(this, a, 1125);
        this.o = X(this, b);
        this.j = X(this, c);
        EH(this, d);
        EH(this, e)
    };
    _.T($L, Y);
    $L.prototype.g = function() {
        var a = this.o.value,
            b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.nB(this.j.value, "visibility", "visible"))
    };
    var Hu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 718);
        this.slotId = b;
        this.tb = c;
        this.Gd = d;
        this.o = e;
        this.C = f;
        this.output = W(this);
        this.j = new Wq(this.context, this.slotId, Du);
        this.H = X(this, g)
    };
    _.T(Hu, Y);
    Hu.prototype.g = function() {
        var a = !this.H.value;
        if (!this.Gd || "height" !== this.tb || a) this.j.za(), this.output.G(!1);
        else {
            a = new nk;
            _.S(this, a);
            var b = new ZL(this.context, this.o, this.C);
            J(a, b);
            J(a, this.j);
            J(a, new $L(this.context, this.o, this.C, this.j.output, b.ce));
            wk(a);
            this.output.G(!0)
        }
    };
    var aM = [2, 1];
    var bM = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Y.call(this, a, 699);
        this.aa = b;
        this.slotId = c;
        this.j = d;
        this.Dd = e;
        this.tb = f;
        this.Na = g;
        this.Jc = BH(this);
        this.H = X(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.J = CH(this, m);
        this.P = X(this, n)
    };
    _.T(bM, Y);
    bM.prototype.g = function() {
        var a = this.H.value,
            b = this.o.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.tb) {
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
                        l = this.Dd,
                        m = this.Na,
                        n, p = a.parentElement ? null == (n = Tm(a.parentElement, window)) ? void 0 : n.width : void 0;
                    n = c.width;
                    var r = c.height,
                        v = 0;
                    var w = 0;
                    var x = Bm(k);
                    x = _.y(x);
                    for (var B = x.next(); !B.done; B = x.next()) {
                        var C = B.value;
                        Array.isArray(C) && (B = C[0], C = C[1], v < B && (v = B), w < C && (w = C))
                    }
                    w = [v, w];
                    v = w[0] < n;
                    r = w[1] < r;
                    if (v || r) {
                        w = n + "px";
                        x = {
                            "max-height": "none",
                            "max-width": w,
                            padding: "0px",
                            width: w
                        };
                        r && (x.height = "auto");
                        qp(b, a, x);
                        b = {};
                        if ((_.H = [2, 5], _.z(_.H, "includes")).call(_.H, d) || v && n > np(e.width)) b.width = w, b["max-width"] = w;
                        r && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (F in b)
                                if (Object.prototype.hasOwnProperty.call(b, F)) {
                                    var F = !1;
                                    break c
                                }
                            F = !0
                        }
                        F ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.pp(a, b), b = !0)
                    } else b = !1;
                    b: switch (w = c.width, F = f.defaultView || f.parentWindow || _.t, d) {
                        case 2:
                        case 5:
                            a = rp(a, F, w, e, l);
                            break b;
                        case 1:
                        case 4:
                            if (e = a.parentElement)
                                if (l = Mm(e)) {
                                    B = l.width;
                                    l = Sm(h, F.document);
                                    n = Tm(l, F);
                                    r = n.position;
                                    C = np(n.width) || 0;
                                    v = Tm(e, F);
                                    x = "rtl" === v.direction ? "Right" : "Left";
                                    l = x.toLowerCase();
                                    F = "absolute" === r ? 0 : np(v["padding" + x]);
                                    v = np(v["border" + x + "Width"]);
                                    w = Math.max(Math.round((B - Math.max(C, w)) / 2), 0);
                                    B = {};
                                    C = 0;
                                    var G = Lp(n);
                                    G && (C = G[4] * ("Right" === x ? -1 : 1), x = G[3] || 1, 1 !== (G[0] || 1) || 1 !== x) && (G[0] = 1, G[3] = 1, B.transform = "matrix(" + G.join(",") + ")");
                                    x = 0;
                                    switch (r) {
                                        case "fixed":
                                            var P, R = null != (P = Number(Um(n.getPropertyValue(l)))) ? P : 0,
                                                K;
                                            P = null != (K = e.getBoundingClientRect().left) ? K : 0;
                                            x = R - P;
                                            break;
                                        case "relative":
                                            x = null != (R = Number(Um(n.getPropertyValue(l)))) ? R : 0;
                                            break;
                                        case "absolute":
                                            B[l] = "0"
                                    }
                                    B["margin-" + l] = w - F - v - x - C + "px";
                                    _.pp(a, B);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (_.z(aM, "includes").call(aM, d) && tp(g, f, h, k, d, c.width, c.height, p, "gpt_slotexp", m), f = !0) : f = !1;
                    break;
                case 3:
                    d = this.context, K = this.aa, f = this.slotId, h = this.j, p = this.Dd, k = this.Na, m = a.parentElement ? null == (g = Tm(a.parentElement, window)) ? void 0 : g.width : void 0, g = c.width, P = c.height, R = np(e.height) || 0, P >= R || "none" === e.display || "hidden" === e.visibility || !p || -12245933 === p.width || a.getBoundingClientRect().bottom <= p.height ? f = !1 : (p = {
                        height: P + "px"
                    }, qp(b, a, p), _.pp(a, p), tp(d, K, f, h, 3, g, P, m, "gpt_slotred", k), f = !0)
            }!f && _.E(fD) && tp(this.context, this.aa, this.slotId, this.j, 0, c.width, c.height, void 0, "gpt_pgbrk", this.Na)
        }
        this.Jc.notify()
    };
    var cM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1114);
        this.J = b;
        this.ja = c;
        this.j = d;
        this.H = e;
        this.C = W(this);
        this.o = W(this);
        this.P = X(this, f)
    };
    _.T(cM, Y);
    cM.prototype.g = function() {
        if (this.J) {
            var a = this.J.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0]) dM(this);
            else {
                var b = a[1];
                a = eM(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1], "ratio" === c ? c = a && this.j && this.H ? Math.floor(this.H / this.j * a) : null : (c = Number(c), c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                if (a || c) {
                    var d, e;
                    this.C.G(new _.Lm(null != (d = null != a ? a : this.j) ? d : 0, null != (e = null != c ? c : this.H) ? e : 0));
                    this.o.G(b)
                } else dM(this)
            }
        } else dM(this)
    };
    var eM = function(a, b) {
            b = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
            if (!b) return null;
            b = b[1];
            if ("viewport" === b) return a.ja;
            if ("parent" === b) {
                var c, d, e;
                return (b = null != (e = null == (d = Mm(null == (c = a.P.value) ? void 0 : c.parentElement)) ? void 0 : d.width) ? e : null) ? Math.min(b, a.ja) : null
            }
            a = Number(b);
            return 0 <= a ? a : null
        },
        dM = function(a) {
            a.C.ca();
            a.o.G([])
        };
    var fM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 681);
        this.adUnitPath = b;
        this.P = c;
        this.H = d;
        this.Mf = e;
        this.j = f;
        this.Ga = W(this);
        this.Ja = W(this);
        this.Ae = W(this);
        this.Ze = W(this);
        this.fa = CH(this, g);
        this.W = CH(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.J = X(this, m)
    };
    _.T(fM, Y);
    fM.prototype.g = function() {
        var a = gM(this),
            b = this.W.value,
            c;
        if (c = !this.H && a && b) this.o.value.length ? (c = this.adUnitPath.split("/"), c = _.z(this.o.value, "includes").call(this.o.value, c[c.length - 1])) : c = !0;
        if (c) {
            var d = this.J.value,
                e, f;
            c = null != (f = null == (e = Mm(d.parentElement)) ? void 0 : e.width) ? f : 0;
            e = b.width;
            b = b.height;
            hM(this, !0, e, b, {
                kind: 0,
                ub: '<html><body style="height:' + (b - 2 + "px;width:" + (e - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (e + "x" + b + "</p></body></html>")
            }, e <= c ? 1 : 2, d)
        } else if (a = this.fa.value, this.H) hM(this, !1, null != (d = this.j) ? d : 0, null != a ? a : 0, this.C.value);
        else {
            if (null == this.j) throw new to("Missing 'width'.");
            if (null == a) throw new to("Missing 'height'.");
            hM(this, !1, this.j, a, this.C.value)
        }
    };
    var gM = function(a) {
            a = Bm(a.P)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Lm(a[0], a[1]) : null
        },
        hM = function(a, b, c, d, e, f, g) {
            f = void 0 === f ? a.Mf : f;
            a.Ze.G(b);
            a.Ja.G(new _.Lm(c, d));
            a.Ga.G(e);
            a.Ae.Ha(f);
            g && _.nB(g, "opacity", .5)
        };
    var du = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        nk.call(this);
        b = new cM(a, b, c.width, k, l, n);
        J(this, b);
        a = new fM(a, d, e, f, h, k, g, b.C, b.o, m, n);
        J(this, a);
        this.K = {
            Ga: a.Ga,
            Ja: a.Ja,
            Ae: a.Ae,
            Ze: a.Ze
        }
    };
    _.T(du, nk);
    var iM = function(a, b, c) {
        Y.call(this, a, 698);
        this.B = b;
        this.output = W(this);
        this.j = X(this, c)
    };
    _.T(iM, Y);
    iM.prototype.g = function() {
        this.output.Ha(Tm(this.j.value, this.B))
    };
    var ku = function(a, b, c, d, e, f, g, h, k, l, m) {
        nk.call(this);
        var n = new iM(a, b, f);
        J(this, n);
        a = new bM(a, b.document, d, e, c, h, m, f, g, k, l, n.output);
        J(this, a);
        this.Jc = a.Jc
    };
    _.T(ku, nk);
    var jM = function(a, b, c, d, e) {
        Y.call(this, a, 937, _.Lf(OD));
        this.qb = b;
        this.j = W(this);
        this.o = W(this);
        this.C = W(this);
        this.lc = c;
        this.jc = d;
        this.Uc = e
    };
    _.T(jM, Y);
    jM.prototype.g = function() {
        var a = {},
            b;
        if (null == (b = _.um(this.qb, rz, 2)) ? 0 : _.Q(b, 2)) a["*"] = {
            hf: !0
        };
        b = new _.u.Set;
        for (var c = _.y(_.ak(this.qb, qz, 1)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.y([_.I(d, 2), _.I(d, 1)].filter(function(p) {
                    return !!p
                })), f = e.next(); !f.done; f = e.next()) a[f.value] = {
                hf: _.Q(d, 3)
            };
            d = _.y(Ce(d, 4, Xc, 2));
            for (e = d.next(); !e.done; e = d.next()) b.add(e.value)
        }
        this.lc.G(a);
        this.j.G([].concat(_.qi(b)));
        var g, h;
        a = null == (g = _.um(this.qb, rz, 2)) ? void 0 : null == (h = _.um(g, lz, 1)) ? void 0 : _.ak(h, kz, 1);
        this.o.Ha((null == a ? 0 : a.length) ? a : null);
        var k;
        this.jc.G(!(null == (k = _.um(this.qb, rz, 2)) || !_.Q(k, 4)));
        var l;
        this.Uc.G(!(null == (l = _.um(this.qb, rz, 2)) || !_.Q(l, 5)));
        var m, n;
        g = null == (m = _.um(this.qb, rz, 2)) ? void 0 : null == (n = _.um(m, lz, 3)) ? void 0 : _.ak(n, kz, 1);
        this.C.Ha((null == g ? 0 : g.length) ? g : null)
    };
    jM.prototype.K = function(a) {
        this.l(a)
    };
    jM.prototype.l = function() {
        this.lc.G({});
        this.j.G([]);
        this.o.ca();
        this.jc.G(!1);
        this.Uc.G(!1);
        this.C.ca()
    };
    var kM = function(a, b, c, d) {
        Y.call(this, a, 980);
        this.fb = b;
        this.output = new Jr;
        this.j = X(this, c);
        this.o = X(this, d)
    };
    _.T(kM, Y);
    kM.prototype.g = function() {
        (_.H = _.z(Object, "entries").call(Object, this.j.value), _.z(_.H, "find")).call(_.H, function(c) {
            var d = _.y(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.hf)
        }) && (this.fb.M = !0);
        Hn(25, this.context);
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next()) hh(b.value);
        this.output.notify()
    };
    var lM = function(a, b, c, d) {
        Y.call(this, a, 931);
        this.j = CH(this, b);
        this.Ic = c;
        this.kc = d
    };
    _.T(lM, Y);
    lM.prototype.g = function() {
        var a = this.j.value,
            b = new _.u.Map;
        this.Ic.G(new _.u.Map);
        if (a) {
            var c;
            a = _.y(null != (c = this.j.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = _.ak(d, jz, 1);
                c = 1 === _.fg(c[0], 1, 0) ? Iy(c[0]) : Jy(c[0], Hy);
                d = _.Lg(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.kc.G(b)
    };
    lM.prototype.l = function() {
        this.Ic.G(new _.u.Map);
        this.kc.G(new _.u.Map)
    };
    var mM = function(a, b, c) {
        Y.call(this, a, 981);
        this.o = W(this);
        this.C = CH(this, b);
        this.j = c
    };
    _.T(mM, Y);
    mM.prototype.g = function() {
        var a = new _.u.Map,
            b, c = _.y(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = _.ak(b, jz, 1);
            d = 1 === _.fg(d[0], 1, 0) ? Iy(d[0]) : Jy(d[0], Hy);
            a.set(d, _.Lg(b, 2))
        }
        this.o.G(a);
        this.j.G(new si)
    };
    mM.prototype.l = function() {
        this.o.G(new _.u.Map);
        var a = this.j,
            b = a.G;
        var c = new si;
        c = _.$h(c, 1, 2);
        b.call(a, c)
    };
    var nM = function(a, b, c, d, e, f) {
        Y.call(this, a, 976);
        this.nextFunction = d;
        this.j = e;
        this.requestBidsConfig = f;
        EH(this, b);
        EH(this, c)
    };
    _.T(nM, Y);
    nM.prototype.g = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.j, [this.requestBidsConfig])
    };
    var oM = function(a, b, c, d, e, f) {
        Y.call(this, a, 975);
        this.o = b;
        this.j = c;
        this.C = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new Jr
    };
    _.T(oM, Y);
    oM.prototype.g = function() {
        Qp(this.pbjs, this.o, this.j, this.C, this.requestBidsConfig);
        this.output.notify()
    };
    oM.prototype.l = function() {
        this.output.notify()
    };
    var pM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1100);
        this.pbjs = b;
        this.o = c;
        this.j = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.output = new Jr
    };
    _.T(pM, Y);
    pM.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.Lf(kD);
        if (c) this.Hd(c);
        else {
            var d, e, f, g;
            a = null != (g = null != (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits) ? f : null == (e = this.pbjs) ? void 0 : e.adUnits) ? g : [];
            d = _.y(a);
            for (e = d.next(); !e.done; e = d.next())
                if (e = e.value.code) {
                    a = g = f = void 0;
                    if (null == (b = this.o)) b = void 0;
                    else {
                        c = b.get;
                        if (_.E(jD)) {
                            var h = e.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                            h = 3 !== (null == h ? void 0 : h.length) ? e : "/" + h[1] + h[2]
                        } else h = e;
                        b = c.call(b, h)
                    }
                    b = null != (f = null != (g = b) ? g : null == (a = this.o) ? void 0 : a.get(_.oh(e))) ? f : 0;
                    this.Hd(b)
                }
        }
        this.output.notify()
    };
    pM.prototype.Hd = function(a) {
        var b;
        null != (b = this.j) && Sh(b, 2, this.C);
        if (a) {
            var c;
            null == (c = this.j) || _.$h(c, 1, 1);
            var d;
            null != (d = this.j) && _.Xh(d, 3, a);
            if (!this.C) {
                this.requestBidsConfig.timeout = a;
                var e, f, g;
                b = null != (g = null == (f = (e = this.pbjs).getConfig) ? void 0 : f.call(e).s2sConfig) ? g : [];
                if (Array.isArray(b))
                    for (e = _.y(b), f = e.next(); !f.done; f = e.next()) f.value.timeout = a;
                else b.timeout = a;
                var h, k;
                null == (k = (h = this.pbjs).setConfig) || k.call(h, {
                    bidderTimeout: a
                })
            }
        }
    };
    pM.prototype.l = function() {
        this.output.notify()
    };
    var qM = function(a, b, c, d, e, f, g, h) {
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
    _.T(qM, _.V);
    qM.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new nk;
            _.S(this, d);
            var e = new pM(this.g, this.pbjs, this.K, this.I, this.o, a),
                f = new oM(this.g, this.j, this.l, this.D, this.pbjs, a);
            J(d, e);
            J(d, f);
            J(d, new nM(this.g, f.output, e.output, c, b, a));
            wk(d)
        }
    };
    var Sp = function(a, b) {
        this.push = M(a, 932, function(c) {
            b.push(c)
        })
    };
    var rM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 951);
        this.B = window;
        this.H = X(this, b);
        this.o = CH(this, d);
        this.C = X(this, e);
        this.P = X(this, f);
        this.j = CH(this, g);
        this.W = CH(this, h);
        this.J = X(this, k);
        EH(this, c);
        this.tf = null != l ? l : W(this);
        this.uf = null != m ? m : W(this)
    };
    _.T(rM, Y);
    rM.prototype.g = function() {
        var a = !!vo().pbjs_hooks;
        this.uf.G(a);
        this.tf.Ha(a ? null : _.Vf());
        var b, c = null == (b = this.o.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.j.value) ? void 0 : d.size) || _.Lf(kD);
        d = this.H.value;
        var e, f = null != (e = vo().pbjs_hooks) ? e : [];
        e = new qM(this.context, this.o.value, this.C.value, this.P.value, this.j.value, this.W.value, this.J.value, d);
        _.S(this, e);
        f = _.y(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) vo().pbjs_hooks = Tp(this.context, e);
        !c && !b || a || Rp(d, this.B)
    };
    var sM = function(a, b, c) {
        Y.call(this, a, 966);
        this.B = b;
        this.Yb = c
    };
    _.T(sM, Y);
    sM.prototype.g = function() {
        var a = this,
            b = Nh(this.B);
        if (b) this.Yb.G(b);
        else if (b = Object.getOwnPropertyDescriptor(this.B, "_pbjsGlobals"), !b || b.configurable) {
            var c = null;
            Object.defineProperty(this.B, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Nh(a.B)) && a.Yb.G(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    sM.prototype.l = function() {};
    var Yp = function(a, b, c, d, e) {
        Y.call(this, a, 1146, _.Lf(OD));
        this.fb = b;
        this.B = d;
        this.j = e;
        this.o = DH(this, c)
    };
    _.T(Yp, Y);
    Yp.prototype.g = function() {
        var a = this.o.value,
            b = new nk;
        _.S(this, b);
        var c = new sM(this.context, this.B, this.j.Yb);
        J(b, c);
        if (a) {
            a = new jM(this.context, a, this.j.lc, this.j.jc, this.j.Uc);
            J(b, a);
            var d = new kM(this.context, this.fb, a.lc, a.j);
            J(b, d);
            var e = new lM(this.context, a.o, this.j.Ic, this.j.kc);
            J(b, e);
            var f = new mM(this.context, a.C, this.j.Lf);
            J(b, f);
            c = new rM(this.context, c.Yb, d.output, e.kc, this.j.jc, e.Ic, f.o, f.j, a.Uc, this.j.tf, this.j.uf);
            J(b, c)
        } else tM(this);
        wk(b)
    };
    var tM = function(a) {
        a.j.lc.G({});
        a.j.kc.G(new _.u.Map);
        a.j.jc.G(!1);
        a.j.Ic.G(new _.u.Map);
        a.j.tf.ca();
        a.j.uf.G(!1);
        a.j.Lf.G(new si);
        a.j.Uc.G(!1)
    };
    Yp.prototype.K = function(a) {
        this.l(a)
    };
    Yp.prototype.l = function() {
        tM(this)
    };
    var uM = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 920);
        this.R = b;
        this.T = c;
        this.pbjs = f;
        this.o = g;
        this.j = W(this);
        this.C = [];
        this.P = X(this, d);
        this.J = CH(this, e.kc);
        this.H = X(this, e.jc);
        this.fa = X(this, e.Ic);
        this.W = CH(this, e.Lf)
    };
    _.T(uM, Y);
    uM.prototype.g = function() {
        for (var a = new _.u.Map, b = !1, c = _.y(this.P.value), d = c.next(), e = {}; !d.done; e = {
                jh: void 0
            }, d = c.next()) {
            d = d.value;
            for (var f = {}, g = _.y(cm(this.T[d.getDomId()])), h = g.next(); !h.done; h = g.next()) h = h.value, f[_.I(h, 1)] = jm(h);
            var k = h = g = void 0;
            (f = Ci(this.pbjs, {
                Wc: d.getDomId(),
                adUnitCode: d.getAdUnitPath()
            }, f, null != (h = this.J.value) ? h : void 0, this.H.value, this.fa.value, null != (k = null == (g = this.W) ? void 0 : g.value) ? k : void 0)) ? (b = !0, a.set(d, f)) : (null === f && this.C.push(d), a.set(d, new ti));
            e.jh = d.getDomId() + d.getAdUnitPath();
            ui.has(e.jh) || _.jp(d, function(l) {
                return function() {
                    return ui.delete(l.jh)
                }
            }(e))
        }
        b ? (this.o.Ha(a), this.j.G(this.C)) : (this.o.ca(), this.j.ca())
    };
    uM.prototype.K = function(a) {
        this.l(a)
    };
    uM.prototype.l = function(a) {
        this.R.error(FK(a.message));
        this.o.ca();
        this.j.ca()
    };
    var vM = function(a, b, c, d) {
        Y.call(this, a, 1019);
        this.T = c;
        this.pbjs = d;
        this.j = CH(this, b)
    };
    _.T(vM, Y);
    vM.prototype.g = function() {
        wM(this)
    };
    var wM = function(a) {
        if (!(Math.random() >= _.Lf(iD))) {
            var b = (a.j.value || []).filter(function(k) {
                return cm(a.T[k.getDomId()]).some(function(l) {
                    return "hb_pb" === ck(l, 1)
                })
            });
            if (b.length) {
                var c, d, e, f, g, h = (null == (c = a.pbjs) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.qi(new _.u.Set(null == (e = a.pbjs) ? void 0 : e.adUnits.map(function(k) {
                    return k.code
                })))) : _.z(Object, "keys").call(Object, (null == (f = a.pbjs) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                c = new Vo("haux");
                Xo(c, "ius", b.map(function(k) {
                    return k.getAdUnitPath()
                }).join("~"));
                Xo(c, "dids", b.map(function(k) {
                    return k.getDomId()
                }).join("~"));
                Xo(c, "paucs", h.join("~"));
                Wo(c, a.context);
                Zo(c)
            }
        }
    };
    var $p = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1153);
        this.R = b;
        this.T = c;
        this.networkCode = d;
        this.H = e;
        this.Kd = f;
        this.j = h;
        this.J = X(this, f.lc);
        this.o = new uH(f.Yb);
        g && (this.C = CH(this, g))
    };
    _.T($p, Y);
    $p.prototype.g = function() {
        var a, b = null == (a = this.o) ? void 0 : a.value;
        if (a = xM(this)) null != b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.R.error(EK()), a = !1) : a = !0 : a = !1;
        if (a) {
            a = new nk;
            var c = new uM(this.context, this.R, this.T, this.H, this.Kd, b, this.j.ih);
            J(a, c);
            J(a, new vM(this.context, c.j, this.T, b));
            wk(a)
        } else this.j.ih.ca()
    };
    var xM = function(a) {
        var b;
        if (null == (b = a.C) ? 0 : b.value) return !0;
        var c = a.J.value;
        if (!c) return !1;
        var d;
        return !(null == (d = c["*"]) || !d.hf) || a.networkCode.split(",").some(function(e) {
            var f;
            return !(null == (f = c[e]) || !f.hf)
        })
    };
    var yM = function(a, b, c, d, e) {
        Y.call(this, a, 982);
        this.Fb = b;
        this.Na = c;
        this.j = d;
        this.sf = e
    };
    _.T(yM, Y);
    yM.prototype.g = function() {
        for (var a = this, b = _.y(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
                Oe: void 0,
                Lg: void 0
            }, c = b.next()) d.Oe = c.value, d.Lg = function(e) {
            return function(f) {
                if (a.j === f.adId) {
                    var g = new Vo("hbm_brt");
                    Wo(g, a.context);
                    Xo(g, "et", e.Oe);
                    Xo(g, "sf", a.Fb);
                    Xo(g, "qqid", a.Na);
                    var h, k, l;
                    Xo(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                    Zo(g)
                }
            }
        }(d), (0, this.sf.onEvent)(d.Oe, d.Lg), _.jp(this, function(e) {
            return function() {
                return void Hl(a.context, a.id, function() {
                    var f, g;
                    return void(null == (g = (f = a.sf).offEvent) ? void 0 : g.call(f, e.Oe, e.Lg))
                }, !0)
            }
        }(d))
    };
    yM.prototype.l = function() {};
    var bq = function(a, b, c, d, e) {
        Y.call(this, a, 1134);
        this.o = b;
        this.Fb = c;
        this.Na = d;
        this.j = new uH(e)
    };
    _.T(bq, Y);
    bq.prototype.g = function() {
        var a;
        if (this.o && null != (a = this.j.value) && a.onEvent) {
            a = new nk;
            var b = new yM(this.context, this.Fb, this.Na, this.o, this.j.value);
            J(a, b);
            wk(a)
        }
    };
    var CM = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.g = new _.u.Map;
            this.A = new _.u.Map;
            this.timer = _.Jf(Dl);
            eJ() && (_.pb(window, "DOMContentLoaded", Bl(a, 334, function() {
                for (var f = _.y(e.g), g = f.next(); !g.done; g = f.next()) {
                    var h = _.y(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    zM(e, g, h) && e.g.delete(g)
                }
            })), b.listen(wJ, function(f) {
                f = f.detail;
                var g = f.T;
                return void AM(e, BM(d, f.hh), Os(g, 20))
            }), b.listen(xJ, function(f) {
                f = f.detail;
                var g = f.T;
                f = BM(d, f.hh);
                g = Os(g, 20);
                var h = e.A.get(f);
                null != h ? gJ(h, g) : AM(e, f, g)
            }))
        },
        AM = function(a, b, c) {
            zM(a, b, c) ? a.g.delete(b) : (a.g.set(b, c), _.jp(b, function() {
                return a.g.delete(b)
            }))
        },
        zM = function(a, b, c) {
            var d = Sm(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new dJ({
                B: window,
                timer: a.timer,
                Sb: d,
                sb: function(e) {
                    return void Fl(a.context, 336, e)
                },
                rm: _.E(jF)
            });
            if (!d.A) return !1;
            gJ(d, c);
            a.A.set(b, d);
            EJ(a.L, b, function() {
                return void a.A.delete(b)
            });
            return !0
        };
    var DM = function(a, b, c, d, e) {
        Y.call(this, a, 1058);
        this.B = b;
        this.Z = c;
        this.output = BH(this);
        d && (this.j = CH(this, d.Sc));
        EH(this, e)
    };
    _.T(DM, Y);
    DM.prototype.g = function() {
        var a;
        if (mh(this.B.isSecureContext, this.B, this.B.document) && null != (a = this.j) && a.value && !_.E(mD) && ah(this.Z)) {
            a = {
                message: "goog:spam:client_age",
                pvsid: this.context.pvsid,
                useObfuscatedKey: _.E(nD)
            };
            var b = this.j.value;
            b(a)
        }
        this.output.notify()
    };
    var EM = function(a, b, c) {
        Y.call(this, a, 1199);
        this.j = c;
        this.o = CH(this, b)
    };
    _.T(EM, Y);
    EM.prototype.g = function() {
        var a = this.o.value;
        a && (a = kL(this.j, a.getSlotElementId()), Sh(a, 30, !0))
    };
    var FM = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1109);
        this.aa = c;
        this.ba = d;
        this.j = e;
        this.C = f;
        this.H = g;
        this.o = h;
        this.output = W(this);
        this.J = CH(this, b)
    };
    _.T(FM, Y);
    FM.prototype.g = function() {
        var a = this,
            b = this.J.value;
        b && (this.o.push(function() {
            b.addService(a.j)
        }), cB(this.aa, function() {
            a.H();
            a.C(b);
            _.Q(a.ba, 4) && a.j.refresh([b])
        }))
    };
    var GM = {},
        fq = (GM[64] = HK, GM[134217728] = IK, GM[32768] = JK, GM[536870912] = KK, GM[8] = LK, GM[512] = MK, GM[1048576] = NK, GM[4194304] = PK, GM);
    var HM = function(a) {
        return "22639388115" === Al(a.getAdUnitPath())
    };
    var IM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.xb = d;
        this.o = e;
        this.R = f;
        this.output = W(this);
        this.j = W(this)
    };
    _.T(IM, Y);
    IM.prototype.g = function() {
        var a = uq(this.context, this.R, this.o, {
            Wh: this.format,
            adUnitPath: this.adUnitPath,
            xb: this.xb
        });
        this.j.Ha(a);
        this.output.Ha(a ? a.g : null)
    };
    var JM = function(a, b, c, d) {
        Y.call(this, a, 1111);
        this.j = c;
        this.o = d;
        this.C = CH(this, b)
    };
    _.T(JM, Y);
    JM.prototype.g = function() {
        var a = this.C.value;
        a && (a = kL(this.j, a.getSlotElementId()), jk(a, 27, zz, this.o))
    };
    var KM = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v) {
        nk.call(this);
        this.context = a;
        this.aa = b;
        this.adUnitPath = c;
        this.format = d;
        this.xb = e;
        this.W = f;
        this.ia = g;
        this.P = h;
        this.J = k;
        this.ba = l;
        this.K = m;
        this.fa = n;
        this.R = p;
        this.ga = r;
        this.o = v;
        a = J(this, new IM(this.context, this.adUnitPath, this.format, this.xb, this.fa, this.R));
        this.o && J(this, new JM(this.context, a.output, this.K, this.o));
        this.ga && J(this, new EM(this.context, a.output, this.K));
        J(this, new FM(this.context, a.output, this.aa, this.ba, this.W, this.ia, this.P, this.J));
        this.g = {
            wo: a.j
        }
    };
    _.T(KM, nk);
    var Ju = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 1198);
        this.aa = b;
        this.googletag = c;
        this.ba = d;
        this.j = e;
        this.o = f;
        this.R = g;
        this.kd = h;
        this.C = k
    };
    _.T(Ju, Y);
    Ju.prototype.g = function() {
        for (var a = this, b = _.y(this.C), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d.getAdUnitPath();
            d = _.fg(d, 2, 0);
            c && d && (this.kd.add(Al(c)), c = new KM(this.context, this.aa, c, d, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, this.ba, this.j, this.o, this.R, !0), wk(c), _.S(this, c))
        }
    };
    var ut = function(a, b) {
        Y.call(this, a, 1110);
        this.B = b;
        this.output = W(this)
    };
    _.T(ut, Y);
    ut.prototype.g = function() {
        var a = this.B;
        a = _.E(fF) && void 0 !== a.credentialless && (_.E(gF) || a.crossOriginIsolated);
        this.output.G(a)
    };
    var LM = function(a, b, c, d, e, f) {
        Y.call(this, a, 935);
        this.L = b;
        this.O = c;
        this.aa = d;
        this.output = BH(this);
        this.j = X(this, e);
        EH(this, f)
    };
    _.T(LM, Y);
    LM.prototype.g = function() {
        var a = this.O,
            b = a.ba;
        a = a.T;
        for (var c = _.y(this.j.value), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            d = e;
            var f = b;
            e = a[e.getDomId()];
            var g = this.L,
                h = this.aa;
            vq(e, f) && !g.xc(d) && wq(d, h, e, f)
        }
        this.output.notify()
    };
    var Aq = function(a, b, c) {
        Y.call(this, a, 1208);
        this.j = b;
        this.eg = c;
        this.output = new Jr
    };
    _.T(Aq, Y);
    Aq.prototype.g = function() {
        var a, b = null == (a = this.eg) ? void 0 : _.um(a, Sz, 1);
        if (b) {
            a = this.j;
            var c = new CG;
            c = Sh(c, 5, !0);
            JG(a, "__eoi", b, c)
        }
        this.output.notify()
    };
    var Fq = function(a, b, c, d) {
        Y.call(this, a, 896);
        this.lg = b;
        this.wc = d;
        this.Cc = W(this);
        c && EH(this, c)
    };
    _.T(Fq, Y);
    Fq.prototype.g = function() {
        this.Cc.G(this.lg.dd(".google.cn" === this.wc))
    };
    var Nt = function(a, b) {
        Y.call(this, a, 1018);
        this.Yc = BH(this);
        this.j = CH(this, b)
    };
    _.T(Nt, Y);
    Nt.prototype.g = function() {
        var a, b, c;
        if (null == (a = this.j.value)) a = void 0;
        else {
            var d;
            null == (b = _.um(a, xF, 5)) ? d = void 0 : d = Ce(b, 1, Xc, 2);
            a = d
        }
        a = _.y(null != (c = a) ? c : []);
        for (c = a.next(); !c.done; c = a.next()) hh(c.value);
        this.Yc.notify()
    };
    var Ot = function(a, b) {
        Y.call(this, a, 1070);
        this.j = W(this);
        this.o = CH(this, b)
    };
    _.T(Ot, Y);
    Ot.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : _.um(a, xF, 5);
        if (b) {
            a = [];
            for (var c = _.y(Ce(b, 2, Pe, 1, void 0, void 0, 4096)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new zz;
                var f = new xz;
                e = _.hk(f, 1, ed(e));
                d = _.bi(d, 2, e);
                null != Bi(b, 3) && (e = new vz, e = _.$h(e, 1, 1), f = _.Ey(b, 3), e = _.Xh(e, 2, f), _.bi(d, 3, e));
                a.push(d)
            }
            this.j.G(a)
        } else this.j.G([])
    };
    var MM = function(a, b, c, d) {
        Y.call(this, a, 1016);
        this.output = W(this);
        this.o = CH(this, b);
        this.j = CH(this, c);
        this.C = FH(this, [b, d])
    };
    _.T(MM, Y);
    MM.prototype.g = function() {
        if (this.j.value) {
            var a = this.o.value || this.C.value;
            a && NM(this, a) ? this.output.G(a) : this.output.ca()
        } else this.output.ca()
    };
    MM.prototype.K = function(a) {
        this.l(a)
    };
    MM.prototype.l = function() {
        this.output.ca()
    };
    var NM = function(a, b) {
        return _.ak(a.j.value, tz, 1).some(function(c) {
            return _.I(c, 1) === b
        })
    };
    var OM = function(a, b) {
        Y.call(this, a, 1015);
        this.j = W(this);
        this.o = CH(this, b)
    };
    _.T(OM, Y);
    OM.prototype.g = function() {
        if (this.o.value)
            if (_.ak(this.o.value, tz, 1).length) {
                var a = _.ak(this.o.value, tz, 1)[0];
                (_.H = [2, 3], _.z(_.H, "includes")).call(_.H, _.fg(a, 3, 0)) ? this.j.G(_.I(a, 1)) : this.j.ca()
            } else this.j.ca();
        else this.j.ca()
    };
    OM.prototype.K = function(a) {
        this.l(a)
    };
    OM.prototype.l = function() {
        this.j.ca()
    };
    var PM = function(a, b, c) {
        Y.call(this, a, 1017);
        this.B = c;
        this.output = BH(this);
        this.j = CH(this, b)
    };
    _.T(PM, Y);
    PM.prototype.g = function() {
        var a = this;
        if (this.j.value) {
            var b = QF(this.B, this.j.value, function(c) {
                if (!c) {
                    c = hg(b.g);
                    for (var d = _.y(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.Mj(e.value)
                }
                a.output.notify()
            });
            b.start(_.E(yD))
        } else this.output.notify()
    };
    PM.prototype.K = function(a) {
        this.l(a)
    };
    PM.prototype.l = function() {
        this.output.notify()
    };
    var QM = function(a, b) {
        Y.call(this, a, 1056);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(QM, Y);
    QM.prototype.g = function() {
        var a = Al(this.j.value.getAdUnitPath());
        this.output.G(a)
    };
    QM.prototype.K = function(a) {
        this.l(a)
    };
    QM.prototype.l = function() {
        this.output.ca()
    };
    var Mt = function(a, b, c, d) {
        Y.call(this, a, 906, _.Lf(PD));
        this.j = BH(this);
        if (b === b.top) {
            var e = new nk;
            _.S(this, e);
            var f = new OM(a, c);
            J(e, f);
            d = new nr(a, d, wJ, function(g) {
                return g.detail.T
            });
            J(e, d);
            d = new QM(a, d.output);
            J(e, d);
            a = new MM(a, f.j, c, d.output);
            J(e, a);
            b = new PM(this.context, a.output, b);
            J(e, b);
            yH(this.D, b.output, !0);
            wk(e)
        } else this.j.notify()
    };
    _.T(Mt, Y);
    Mt.prototype.g = function() {
        this.j.notify()
    };
    Mt.prototype.K = function(a) {
        this.l(a)
    };
    Mt.prototype.l = function() {
        this.j.notify()
    };
    var su = function(a, b, c, d, e) {
        Y.call(this, a, 934);
        this.B = b;
        this.slotId = c;
        EH(this, d);
        this.j = X(this, e)
    };
    _.T(su, Y);
    su.prototype.g = function() {
        var a = this;
        this.slotId.listen(Xq, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.j.value,
                        g = new Sz;
                    var h = ki(g, 1, d ? "1" : "0");
                    var k = ki(_.Xh(h, 2, 2147483647), 3, "/");
                    var l = ki(k, 4, a.B.location.hostname);
                    var m = new _.HG(a.B);
                    JG(m, "__gpi_opt_out", l, f);
                    if (d || e) KG(m, "__gads", f), KG(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var RM = function(a, b, c) {
        Y.call(this, a, 944);
        this.B = b;
        this.j = new _.HG(this.B);
        this.o = X(this, c)
    };
    _.T(RM, Y);
    RM.prototype.g = function() {
        var a = this.o.value;
        if (IG(this.j, a)) {
            var b = _.In(this.j, "__gpi_opt_out", a);
            if (b) {
                var c = new Sz;
                b = ki(c, 1, b);
                b = ki(_.Xh(b, 2, 2147483647), 3, "/");
                b = ki(b, 4, this.B.location.hostname);
                JG(this.j, "__gpi_opt_out", b, a)
            }
        }
    };
    var SM = function(a, b, c, d) {
        Y.call(this, a, 821);
        this.Z = b;
        this.Ea = c;
        this.j = X(this, d)
    };
    _.T(SM, Y);
    SM.prototype.g = function() {
        if (ah(this.Z)) {
            var a = new _.u.Set;
            var b = _.ak(this.j.value, Sz, 14);
            b = _.y(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = Ky(c, 5)) ? d : 1;
                a.has(e) || (JG(this.Ea, 2 === e ? "__gpi" : "__gads", c, this.Z), a.add(e))
            }
        }
    };
    var TM = function() {
            this.A = [];
            this.hostpageLibraryTokens = [];
            this.g = {}
        },
        kt = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.g[b]) ? void 0 : _.z(c, "values").call(c)) ? d : [];
            return [].concat(_.qi(a))
        };
    var UM = function(a, b, c, d) {
        Y.call(this, a, 822);
        this.slotId = b;
        this.Za = c;
        this.j = X(this, d)
    };
    _.T(UM, Y);
    UM.prototype.g = function() {
        var a = Ce(this.j.value, 23, _.Vc, 2);
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = this.Za;
            if (!_.z(c.A, "includes").call(c.A, b) && (_.H = [1, 2, 3], _.z(_.H, "includes")).call(_.H, b)) {
                var d = MG[b];
                if (d) {
                    var e = b + "_hostpage_library";
                    if (d = _.$o(document, d)) d.id = e
                }
                c.A.push(b);
                e = new NG(b);
                c.hostpageLibraryTokens.push(e);
                c = vo();
                c.hostpageLibraryTokens || (c.hostpageLibraryTokens = {});
                c.hostpageLibraryTokens[e.g] = e.A
            }
            c = void 0;
            e = this.Za;
            d = this.slotId;
            e.g[b] = null != (c = e.g[b]) ? c : new _.u.Set;
            e.g[b].add(d)
        }
    };
    var Pq = 0;
    var Iu = function(a, b, c, d, e, f) {
        Y.call(this, a, 721);
        this.B = b;
        this.Ye = c;
        this.o = X(this, d);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(Iu, Y);
    Iu.prototype.g = function() {
        var a = this,
            b, c, d = null == (b = this.Ye) ? void 0 : null == (c = _.I(b, 1)) ? void 0 : c.toUpperCase(),
            e, f;
        b = null == (e = this.Ye) ? void 0 : null == (f = _.I(e, 2)) ? void 0 : f.toUpperCase();
        if (d && b) {
            e = this.o.value;
            f = this.j.value;
            var g = this.C.value,
                h = g.style.height,
                k = g.style.width,
                l = g.style.display,
                m = g.style.position,
                n = Rq(e.id + "_top", d),
                p = Rq(e.id + "_bottom", b);
            _.pp(p, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            g.appendChild(n);
            g.appendChild(p);
            _.pp(f, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.pp(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var r;
            _.pp(g, {
                position: "relative",
                display: (null == (r = this.B.screen.orientation) ? 0 : r.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            kp(this, 722, this.B, "orientationchange", function() {
                var v;
                (null == (v = a.B.screen.orientation) ? 0 : v.angle) ? _.pp(g, {
                    display: "none"
                }): _.pp(g, {
                    display: "block"
                })
            });
            _.jp(this, function() {
                _.CA(n);
                _.CA(p);
                g.style.position = m;
                g.style.height = h;
                g.style.width = k;
                g.style.display = l
            })
        }
    };
    var VM = _.hw(["https://td.doubleclick.net/td/kb?kbli=", ""]),
        pu = function(a, b, c, d, e) {
            Y.call(this, a, 1007);
            this.ug = b;
            this.j = X(this, d);
            c && (this.o = X(this, c));
            e && EH(this, e)
        };
    _.T(pu, Y);
    pu.prototype.g = function() {
        if (ah(this.j.value)) {
            var a;
            if (null == (a = this.o) || !a.value) {
                var b = this.ug;
                if (b.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
                    a = document.createElement("iframe");
                    b = Va(VM, encodeURIComponent(b.join()));
                    a.removeAttribute("srcdoc");
                    if (b instanceof _.Vw) throw new Jx("TrustedResourceUrl", 3);
                    var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
                    a.setAttribute("sandbox", "");
                    for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
                    b = _.$a(b);
                    void 0 !== b && (a.src = b);
                    a.id = "koelBirdIGRegisterIframe";
                    document.head.appendChild(a)
                }
            }
        }
    };
    var bu = function(a, b, c, d) {
        Y.call(this, a, 1176);
        this.o = b;
        this.T = c;
        this.R = d;
        this.j = W(this)
    };
    _.T(bu, Y);
    bu.prototype.g = function() {
        var a, b = null != (a = this.o) ? a : new cu;
        (a = null != Bi(b, 2) ? null != Tq(b) && 0 !== (0, _.Op)() ? Bi(b, 2) * Tq(b) : Bi(b, 2) : null) && _.E(LD) && (_.H = [8, 9], _.z(_.H, "includes")).call(_.H, lr(this.T)) ? (O(this.R, SK()), this.j.ca()) : this.j.Ha(a)
    };
    var ju = function(a, b, c, d, e, f) {
        f = void 0 === f ? Sq : f;
        Y.call(this, a, 666);
        this.o = f;
        this.output = BH(this);
        EH(this, b);
        e && EH(this, e);
        this.j = X(this, c);
        this.C = CH(this, d)
    };
    _.T(ju, Y);
    ju.prototype.g = function() {
        var a = this.C.value,
            b = this.j.value;
        null == a || 0 > a || !Vm(b) ? this.output.notify() : WM(this, a, b)
    };
    var WM = function(a, b, c) {
        var d = a.o(b, Bl(a.context, 291, function(e, f) {
            e = _.y(e);
            for (var g = e.next(); !g.done; g = e.next())
                if (g = g.value, !(0 >= g.intersectionRatio)) {
                    f.unobserve(g.target);
                    a.output.notify();
                    break
                }
        }));
        d ? (d.observe(c), _.jp(a, function() {
            d.disconnect()
        })) : a.output.notify()
    };
    var iu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 664);
        this.slotId = b;
        this.Dd = c;
        this.L = d;
        this.output = BH(this);
        this.o = X(this, e);
        this.j = CH(this, f);
        g && EH(this, g)
    };
    _.T(iu, Y);
    iu.prototype.g = function() {
        var a = this,
            b, c = null != (b = this.j.value) ? b : 0;
        if (0 !== (0, _.Op)() || 0 < c)
            if (b = ZG(document), $G(document) && b && (0 < JJ(this.L, this.slotId) || !XM(this)) && b) {
                var d = kp(this, 324, document, b, function() {
                    $G(document) || (d && d(), a.output.notify())
                });
                if (d) return
            }
        this.output.notify()
    };
    var XM = function(a) {
        try {
            var b = top;
            if (!b) return !0;
            var c = Lu(b.document, b).y,
                d = c + a.Dd.height,
                e = a.o.value;
            return e.y >= c && e.y <= d
        } catch (f) {
            return !0
        }
    };
    var hu = function(a, b) {
        Y.call(this, a, 676);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(hu, Y);
    hu.prototype.g = function() {
        var a = Im(this.j.value);
        this.output.G(a)
    };
    var Uq = function(a, b, c, d, e, f) {
        f = void 0 === f ? _.u.globalThis.IntersectionObserver : f;
        Y.call(this, a, 886);
        this.X = b;
        this.L = c;
        this.o = d;
        this.j = f;
        this.output = BH(this);
        e && EH(this, e)
    };
    _.T(Uq, Y);
    Uq.prototype.g = function() {
        this.X.some(function(a) {
            return !Vm(Sm(a))
        }) ? this.output.notify() : vH(this.output, YM(this, this.o))
    };
    var YM = function(a, b) {
        return new _.u.Promise(function(c) {
            if (a.j) {
                for (var d = new a.j(function(h, k) {
                        h.some(function(l) {
                            return 0 < l.intersectionRatio
                        }) && (k.disconnect(), c())
                    }, {
                        rootMargin: b + "%"
                    }), e = _.y(a.X), f = e.next(), g = {}; !f.done; g = {
                        xf: void 0
                    }, f = e.next()) {
                    f = f.value;
                    g.xf = Sm(f);
                    if (!g.xf) return;
                    d.observe(g.xf);
                    EJ(a.L, f, function(h) {
                        return function() {
                            return void d.unobserve(h.xf)
                        }
                    }(g))
                }
                _.jp(a, function() {
                    return void d.disconnect()
                })
            } else c()
        })
    };
    var ZM = [{
            name: "Interstitial",
            format: 1,
            de: 5
        }, {
            name: "TopAnchor",
            format: 2,
            de: 2
        }, {
            name: "BottomAnchor",
            format: 3,
            de: 3
        }, {
            name: "LeftSideRail",
            format: 4,
            de: 8
        }, {
            name: "RightSideRail",
            format: 5,
            de: 9
        }],
        Jt = function(a, b, c, d, e, f, g) {
            Y.call(this, a, 789);
            this.aa = b;
            this.googletag = c;
            this.o = d;
            this.j = e;
            this.R = f;
            this.C = g;
            this.output = W(this)
        };
    _.T(Jt, Y);
    Jt.prototype.g = function() {
        var a = this;
        ZM.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.C)
        }).forEach(function(b) {
            var c = b.name;
            b = b.de;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new KM(a.context, a.aa, "/22639388115/example/" + c.toLowerCase(), b, !1, a.googletag.pubads(), function(f) {
                return void a.googletag.display(f)
            }, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, a.googletag.cmd, a.j.g, a.j, a.o, a.R, !1);
            _.S(a, c);
            wk(c)
        })
    };
    var $M = function(a, b, c) {
        Y.call(this, a, 1163);
        _.E(tu);
        this.j = X(this, b);
        c && EH(this, c)
    };
    _.T($M, Y);
    $M.prototype.g = function() {
        this.j.value.Lj();
        this.j.value.Ma()
    };
    var vu = function(a, b, c, d, e, f, g, h, k, l) {
        Y.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.eb = f;
        this.j = W(this);
        this.o = X(this, g);
        this.J = X(this, h);
        this.C = CH(this, k);
        this.H = X(this, l)
    };
    _.T(vu, Y);
    vu.prototype.g = function() {
        var a = this,
            b;
        if (null != (b = this.eb) && _.Q(b, 12, !1)) {
            b = this.C.value.Nk;
            var c = _.xq(this.L, this.slotId),
                d = this.J.value,
                e = this.o.value;
            _.pp(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (aN) aN.Jj(e, this.H.value);
            else {
                var f, g;
                aN = new b(this.context, this.format, e, this.B, d, this.L, this.slotId, null != (g = null == (f = this.eb) ? void 0 : _.um(f, Jz, 16)) ? g : null);
                f = {};
                g = _.y(_.ak(this.eb, Iz, 13));
                for (b = g.next(); !b.done; b = g.next()) b = b.value, f[ck(b, 1)] = ck(b, 2);
                aN.Kj(f);
                _.E(tu) ? (aN.Gj(), this.j.G(aN)) : aN.Ma();
                DJ(this.L, this.slotId, function() {
                    aN && (aN.za(), aN = null);
                    c && _.HJ(a.L, a.slotId)
                })
            }
            _.jp(this, function() {
                return _.CA(e)
            })
        }
    };
    var aN = null;
    var uu = function(a, b, c, d, e, f, g, h, k, l) {
        Y.call(this, a, 1155);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.eb = f;
        this.j = g;
        this.C = h;
        this.o = k;
        this.H = l
    };
    _.T(uu, Y);
    uu.prototype.g = function() {
        var a;
        if (null != (a = this.eb) && null != Fn(a, 12)) {
            a = new nk;
            _.S(this, a);
            var b, c = (null == (b = this.eb) ? 0 : _.Q(b, 15)) ? J(a, new Wq(this.context, this.slotId, Xq, function(d) {
                d = d.detail.data;
                try {
                    var e = JSON.parse(d);
                    return "floating" === e.type && "loaded" === e.message
                } catch (f) {}
                return !1
            })).output : void 0;
            b = new vu(this.context, this.L, this.format, this.slotId, this.B, this.eb, this.j, this.C, this.o, this.H);
            J(a, b);
            b = new $M(this.context, b.j, c);
            J(a, b);
            wk(a)
        }
    };
    var cr = function(a, b, c) {
        Y.call(this, a, 1150);
        this.B = b;
        this.output = BH(this);
        EH(this, c)
    };
    _.T(cr, Y);
    cr.prototype.g = function() {
        var a = this;
        this.B.location.hash = "goog_game_inter";
        _.jp(this, function() {
            "goog_game_inter" === a.B.location.hash && (a.B.location.hash = "")
        });
        vH(this.output, new _.u.Promise(function(b) {
            return void kp(a, a.id, a.B, "hashchange", function(c) {
                gx(c.oldURL, "#goog_game_inter") && b()
            })
        }))
    };
    var bN = function(a, b) {
            this.serviceName = b;
            this.slot = a.g
        },
        cN = function(a, b) {
            bN.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.T(cN, bN);
    var dN = function() {
        bN.apply(this, arguments)
    };
    _.T(dN, bN);
    var eN = function(a, b, c) {
        bN.call(this, a, b);
        this.inViewPercentage = c
    };
    _.T(eN, bN);
    var fN = function() {
        bN.apply(this, arguments)
    };
    _.T(fN, bN);
    var gN = function() {
        bN.apply(this, arguments)
    };
    _.T(gN, bN);
    var hN = function() {
        bN.apply(this, arguments)
    };
    _.T(hN, bN);
    var iN = function() {
        bN.apply(this, arguments)
    };
    _.T(iN, bN);
    var jN = function(a, b, c, d) {
        bN.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.T(jN, bN);
    var kN = function(a, b, c) {
        bN.call(this, a, b);
        this.payload = c
    };
    _.T(kN, bN);
    var lN = function() {
        bN.apply(this, arguments)
    };
    _.T(lN, bN);
    var mN = function(a, b, c) {
        bN.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.T(mN, bN);
    var nN = function() {
        bN.apply(this, arguments)
    };
    _.T(nN, bN);
    var dr = function(a, b, c, d, e, f) {
        Y.call(this, a, 1151);
        this.slotId = b;
        this.Aa = c;
        EH(this, d);
        a = [e];
        f && a.push(f);
        f = new wH(a, !0);
        yH(this.D, f)
    };
    _.T(dr, Y);
    dr.prototype.g = function() {
        Ps(this.Aa, "gameManualInterstitialSlotClosed", 1148, new nN(this.slotId, "publisher_ads"))
    };
    var ar = function(a, b, c, d) {
        Y.call(this, a, 1149);
        this.slotId = b;
        this.Aa = c;
        this.output = BH(this);
        EH(this, d)
    };
    _.T(ar, Y);
    ar.prototype.g = function() {
        var a = new _.wh,
            b = a.promise;
        Ps(this.Aa, "gameManualInterstitialSlotReady", 1147, new mN(this.slotId, "publisher_ads", a.resolve));
        vH(this.output, b.then(function() {
            return dB(10)
        }))
    };
    var $q = function(a, b, c) {
        c = void 0 === c ? oN : c;
        Y.call(this, a, 1158);
        this.j = c;
        this.o = 1E3 * _.Lf(Zq);
        this.output = BH(this);
        EH(this, b)
    };
    _.T($q, Y);
    $q.prototype.g = function() {
        var a = this;
        this.j.rf++ ? vH(this.output, dB(this.o * (this.j.rf - 2) + (this.o - (Date.now() - this.j.vg))).then(function() {
            a.j.vg = Date.now();
            a.j.rf--
        })) : (this.j.vg = Date.now(), dB(this.o).then(function() {
            return void a.j.rf--
        }), this.output.notify())
    };
    var oN = {
        rf: 0,
        vg: Date.now()
    };
    var pN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        qN = {
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        br = function(a, b, c, d, e) {
            Y.call(this, a, 1150);
            this.B = b;
            this.j = X(this, c);
            this.C = X(this, d);
            EH(this, e);
            this.o = new _.PH(this.B)
        };
    _.T(br, Y);
    br.prototype.g = function() {
        var a = 0 === (0, _.Op)() ? "rgba(1,1,1,0.5)" : "white";
        _.pp(this.j.value, _.z(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.Op)() ? qN : pN));
        _.pp(this.C.value, _.z(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, pN));
        _.jp(this, _.bI(this.B.document, this.B));
        a = {};
        FA(this.j.value).postMessage(JSON.stringify((a.googMsgType = "sth", a.msg_type = "i-view", a)), "*");
        if (this.B === this.B.top) {
            var b = _.RH(this.o, 2147483646);
            _.VH(b);
            _.jp(this, function() {
                return void _.WH(b)
            })
        }
    };
    var fr = function() {
        this.Sh = 1E3
    };
    fr.prototype.send = function(a, b) {
        a.fh(b)
    };
    var rN = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 683);
        this.slotId = b;
        this.P = c;
        this.j = d;
        this.o = W(this);
        this.C = X(this, e);
        this.W = X(this, f);
        this.H = CH(this, g);
        this.J = CH(this, h);
        this.context.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.context, {
            U: 7
        }))
    };
    _.T(rN, Y);
    rN.prototype.g = function() {
        var a = this;
        this.context.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.context, {
            U: 8
        }));
        var b = this.W.value,
            c = this.C.value,
            d = this.J.value.el,
            e = new _.oJ(this.context),
            f = null != wm(this.j, 14) ? 60 * Os(this.j, 14) : 604800;
        b = new d(this.context, window, c, b, e, this.P, sN(this), new _.u.Set(Ce(this.j, 15, _.Vc, 2)), HM(this.slotId), function() {
            return void a.za()
        }, function() {
            jr(a.context, {
                Mc: 1,
                payload: function() {
                    var g = new cj,
                        h = hq(g, IC, 5);
                    _.pi(h, 1, _.Wf());
                    return g
                }
            });
            a.za()
        }, f, this.H.value);
        b.ia();
        _.S(this, b);
        this.o.G(b);
        this.context.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.context, {
            U: 9
        }))
    };
    var sN = function(a) {
        var b = {};
        a = _.ak(a.j, Iz, 13);
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[ck(c, 1)] = ck(c, 2);
        return b
    };
    var tN = function(a, b, c, d) {
        Y.call(this, a, 1210);
        this.action = b;
        this.j = CH(this, c);
        EH(this, d)
    };
    _.T(tN, Y);
    tN.prototype.g = function() {
        var a;
        null != (a = this.j.value) && a.pb() && this.action()
    };
    var uN = function(a, b, c) {
        Y.call(this, a, 1121);
        this.aa = b;
        this.output = BH(this);
        this.C = !1;
        this.H = X(this, c)
    };
    _.T(uN, Y);
    uN.prototype.g = function() {
        var a = this;
        if (this.o = kr(Bl(this.context, this.id, function(b) {
                b = _.y(b);
                for (var c = b.next(); !c.done; c = b.next()) c = 100 * c.value.intersectionRatio, _.z(Number, "isFinite").call(Number, c) && 50 <= c ? a.j || (a.C = !0, $G(a.aa) || vN(a)) : (a.C = !1, wN(a))
            }))) _.jp(this, function() {
            var b;
            null == (b = a.o) || b.disconnect();
            wN(a)
        }), this.o.observe(this.H.value), this.J = kp(this, this.id, this.aa, "visibilitychange", function() {
            $G(a.aa) ? wN(a) : a.C && !a.j && vN(a)
        })
    };
    var vN = function(a) {
            a.j = setTimeout(function() {
                a.j = void 0;
                if (!$G(a.aa)) {
                    a.output.notify();
                    var b;
                    null == (b = a.o) || b.disconnect();
                    var c;
                    null == (c = a.J) || c.call(a)
                }
            }, 1E3)
        },
        wN = function(a) {
            clearTimeout(a.j);
            a.j = void 0
        };
    var wu = function(a, b, c, d, e, f, g, h, k, l, m) {
        m = void 0 === m ? function() {
            return _.Wf()
        } : m;
        Y.call(this, a, 1141);
        this.slotId = b;
        this.J = c;
        this.o = d;
        this.aa = e;
        this.j = f;
        this.P = g;
        this.yb = h;
        this.H = k;
        this.C = l;
        this.ec = m;
        this.output = W(this)
    };
    _.T(wu, Y);
    wu.prototype.g = function() {
        var a = this;
        if (this.o) {
            var b = new nk;
            _.S(this, b);
            var c = J(b, new rN(this.context, this.slotId, this.J, this.o, this.j, this.P, this.yb, this.H));
            _.jp(c, function() {
                return void a.za()
            });
            this.output.La(c.o.promise.then(function() {
                return !0
            }));
            if (_.E(GD) || _.Lf(ID)) {
                var d = J(b, new uN(this.context, this.aa, this.j));
                _.Lf(ID) && J(b, new tN(this.context, function() {
                    jr(a.context, {
                        Mc: _.Lf(ID),
                        payload: function() {
                            var e = new HC,
                                f = a.ec();
                            null !== f && _.pi(e, 1, f);
                            return JC(e)
                        }
                    })
                }, c.o, d.output));
                _.E(GD) && J(b, new tN(this.context, function() {
                    jr(a.context, {
                        Mc: 1,
                        payload: function() {
                            var e = new HC,
                                f = a.ec();
                            null !== f && _.pi(e, 1, f);
                            Sh(e, 2, !0);
                            return JC(e)
                        }
                    });
                    a.C()
                }, c.o, d.output))
            }
            wk(b)
        } else this.output.G(!1)
    };
    var xN = function(a) {
        this.module = a
    };
    xN.prototype.toString = function() {
        return String(this.module)
    };
    _.yN = new xN(2);
    _.zN = new xN(5);
    _.AN = new xN(6);
    var ou = function(a, b, c, d, e, f) {
        Y.call(this, a, 846);
        this.o = b;
        this.format = c;
        this.eb = d;
        this.j = e;
        this.output = W(this);
        f && EH(this, f)
    };
    _.T(ou, Y);
    ou.prototype.g = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.eb) || !_.Q(a, 12, !1));
        a = 5 === this.format && this.j;
        b || a ? this.output.La(this.o.load(_.yN)) : this.output.ca()
    };
    var BN = function(a, b, c, d, e) {
        Y.call(this, a, 905);
        this.O = b;
        this.j = c;
        this.output = BH(this);
        this.o = X(this, d);
        EH(this, e)
    };
    _.T(BN, Y);
    BN.prototype.g = function() {
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            b = null == (c = this.O.T[b.value.getDomId()]) ? void 0 : lr(c);
            if (2 === b || 3 === b || 5 === b) {
                this.j.load(_.yN);
                return
            }
        }
        this.output.notify()
    };
    var CN = function(a, b, c, d, e, f) {
        Y.call(this, a, 696);
        this.slotId = b;
        this.Aa = c;
        EH(this, d);
        FH(this, [e, f])
    };
    _.T(CN, Y);
    CN.prototype.g = function() {
        Ps(this.Aa, "rewardedSlotClosed", 703, new lN(this.slotId, "publisher_ads"))
    };
    var DN = function(a, b, c, d, e) {
        Y.call(this, a, 694);
        this.slotId = b;
        this.Aa = c;
        EH(this, d);
        this.j = CH(this, e)
    };
    _.T(DN, Y);
    DN.prototype.g = function() {
        var a, b = null == (a = this.j.value) ? void 0 : a.payload;
        Ps(this.Aa, "rewardedSlotGranted", 702, new kN(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var EN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        FN = function(a, b, c, d, e, f) {
            Y.call(this, a, 693);
            this.B = b;
            this.H = f;
            this.output = BH(this);
            this.o = X(this, c);
            this.C = X(this, d);
            EH(this, e);
            this.j = new _.PH(this.B)
        };
    _.T(FN, Y);
    FN.prototype.g = function() {
        var a = this;
        if (!this.H.Lc) {
            var b = 0 === (0, _.Op)() ? "rgba(1,1,1,0.5)" : "white";
            _.pp(this.C.value, _.z(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, EN));
            _.jp(this, _.bI(this.B.document, this.B));
            FA(this.o.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.B === this.B.top) {
                this.B.location.hash = "goog_rewarded";
                var c = _.RH(this.j, 2147483646);
                _.VH(c);
                _.jp(this, function() {
                    _.WH(c);
                    "goog_rewarded" === a.B.location.hash && (a.B.location.hash = "")
                })
            }
            this.output.notify()
        }
    };
    var GN = function(a, b, c, d) {
        Y.call(this, a, 695);
        this.B = b;
        this.j = X(this, c);
        EH(this, d)
    };
    _.T(GN, Y);
    GN.prototype.g = function() {
        if (this.B === this.B.top) var a = FA(this.j.value),
            b = kp(this, 503, this.B, "hashchange", function(c) {
                gx(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var HN = function(a, b, c, d) {
        Y.call(this, a, 692);
        this.slotId = b;
        this.Aa = c;
        this.output = BH(this);
        this.j = X(this, d)
    };
    _.T(HN, Y);
    HN.prototype.g = function() {
        var a = this.j.value,
            b = new _.wh,
            c = b.promise,
            d;
        Ps(this.Aa, "rewardedSlotReady", 701, new jN(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        vH(this.output, c)
    };
    var IN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        JN = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        KN = function(a, b, c, d, e) {
            Y.call(this, a, 691);
            this.C = W(this);
            this.o = BH(this);
            this.H = X(this, c);
            this.j = FH(this, [d, e])
        };
    _.T(KN, Y);
    KN.prototype.g = function() {
        if ("ha_before_make_visible" === this.j.value.message) this.o.notify();
        else {
            var a = _.E(MD) ? IN : JN;
            _.pp(this.H.value, _.z(Object, "assign").call(Object, {
                position: "absolute"
            }, 0 === (0, _.Op)() ? a : IN));
            this.C.G(this.j.value)
        }
    };
    var xu = function(a, b, c, d, e, f) {
        nk.call(this);
        var g = or(b, "granted", a);
        J(this, g);
        var h = or(b, "prefetched", a);
        J(this, h);
        var k = or(b, "closed", a);
        J(this, k);
        var l = or(b, "ha_before_make_visible", a);
        J(this, l);
        var m = new KN(a, b, e, h.output, l.output);
        J(this, m);
        h = new HN(a, b, c, m.C);
        J(this, h);
        f = new FN(a, d, e, f, h.output, m.o);
        J(this, f);
        J(this, new GN(a, d, e, f.output));
        J(this, new DN(a, b, c, h.output, g.output));
        J(this, new CN(a, b, c, h.output, k.output, l.output))
    };
    _.T(xu, nk);
    var xt = function(a, b) {
        Y.call(this, a, 1031);
        this.B = b
    };
    _.T(xt, Y);
    xt.prototype.g = function() {
        this.B === this.B.top && kl(this.B)
    };
    var vt = function(a, b, c) {
        c = void 0 === c ? Lh : c;
        Y.call(this, a, 1063);
        this.B = b;
        this.o = c;
        this.j = W(this)
    };
    _.T(vt, Y);
    vt.prototype.g = function() {
        var a = this;
        if (_.E(zD) && Mh(this.B)) {
            var b = null,
                c = 0,
                d = Bl(this.context, this.id, function() {
                    var f, g, h, k;
                    return _.rb(function(l) {
                        switch (l.g) {
                            case 1:
                                return f = a.o(a.B), g = "0", l.l = 2, l.yield(f, 4);
                            case 4:
                                g = null != (h = l.A) ? h : "0";
                                1E4 < g.length && (Fl(a.context, a.id, new to("ML:" + g.length)), g = "0");
                                l.g = 3;
                                l.l = 0;
                                break;
                            case 2:
                                k = tb(l), Fl(a.context, a.id, k);
                            case 3:
                                b = g, c = _.Vf(a.B) + 3E5, l.g = 0
                        }
                    })
                });
            var e = (_.H = d(), _.z(_.H, "finally")).call(_.H, function() {
                e = void 0
            });
            this.j.G(function() {
                var f, g;
                return _.rb(function(h) {
                    if (1 == h.g) {
                        f = _.Vf(a.B) >= c;
                        g = null === b || "0" === b;
                        if (!f && !g) {
                            h.g = 2;
                            return
                        }
                        e || (e = (_.H = d(), _.z(_.H, "finally")).call(_.H, function() {
                            e = void 0
                        }));
                        return h.yield(e, 2)
                    }
                    return h.return(b)
                })
            })
        } else this.j.G(function() {
            return _.u.Promise.resolve("")
        })
    };
    vt.prototype.l = function() {
        this.j.G(function() {
            return _.u.Promise.resolve("")
        })
    };
    var LN = function(a, b) {
        Y.call(this, a, 1091);
        this.output = W(this);
        b && (this.j = CH(this, b))
    };
    _.T(LN, Y);
    LN.prototype.g = function() {
        var a;
        null != (a = this.j) && a.value ? this.output.La(this.j.value()) : this.output.G("")
    };
    LN.prototype.l = function() {
        this.output.G("")
    };
    var zr = new _.u.Map([
        ["IAB_AUDIENCE_1_1", 3],
        ["IAB_CONTENT_2_2", 5],
        ["IAB_CONTENT_3_0", 6]
    ]);
    var Gr = new _.u.Set(["disablePersonalization"]);
    var Kr = function(a, b, c) {
        Y.call(this, a, 1122);
        this.aa = b;
        this.j = c;
        BH(this, c)
    };
    _.T(Kr, Y);
    Kr.prototype.g = function() {
        var a = this,
            b = zl(this.context);
        vH(this.j, new _.u.Promise(function(c) {
            return void bH(function() {
                c();
                b()
            }, a.aa)
        }))
    };
    var Et = function(a, b, c) {
        Y.call(this, a, 1107);
        this.B = b;
        this.j = c;
        W(this, c)
    };
    _.T(Et, Y);
    Et.prototype.g = function() {
        var a = kh(this.B.isSecureContext, this.B.navigator, this.B.document),
            b = lh(this.B.isSecureContext, this.B.document),
            c = mh(this.B.isSecureContext, this.B, this.B.document),
            d = !(!this.B.isSecureContext || !jh("attribution-reporting", this.B.document)),
            e = 0;
        a && (e |= 1);
        b && (e |= 4);
        c && (e |= 8);
        d && (e |= 2);
        this.j.Ha(0 === e ? null : e)
    };
    Et.prototype.l = function() {
        this.j.ca()
    };
    var MN = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1118, _.Lf(SD));
        this.C = b;
        this.J = e;
        this.T = f;
        W(this, e);
        c && (this.P = CH(this, c));
        d && (this.H = CH(this, d));
        g && (this.o = X(this, g));
        h && (this.j = DH(this, h))
    };
    _.T(MN, Y);
    MN.prototype.g = function() {
        var a = new kH;
        a = _.Ke(a, 1, _.Zc(this.C), 0);
        if (this.j)
            if (this.j.value) {
                var b = _.aj(a, 3, this.j.value.label);
                _.L(b, 4, this.j.value.status)
            } else this.j.Lc() || _.L(a, 4, 5);
        if (this.C & 1) {
            var c, d;
            b = NN(this, null == (c = this.P) ? void 0 : c.value, null == (d = this.H) ? void 0 : d.value);
            _.bi(a, 2, b)
        }
        this.J.G(a)
    };
    var NN = function(a, b, c) {
            switch (_.Lf(Gt)) {
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
            var e = jH(new iH, d);
            null == b || b.forEach(function(h, k) {
                var l = hH(new gH, h),
                    m;
                null == (m = null == c ? void 0 : c.get(k)) || m.forEach(function(n, p) {
                    var r = new dH;
                    n = _.Ke(r, 2, _.Zc(n), 0);
                    p = _.Ke(n, 1, _.Zc(_.oh(p)), 0);
                    jk(l, 2, dH, p)
                });
                Ie(e, 2, gH).set(k, l)
            });
            var f;
            if ((null == (f = a.o) ? 0 : f.value) && a.T) {
                var g;
                b = _.y(null == (g = a.o) ? void 0 : g.value);
                for (g = b.next(); !g.done; g = b.next()) g = g.value, (d = ON(a, a.T[g.getDomId()])) && Ie(e, 3, eH).set(g.getAdUnitPath(), d)
            }
            return e
        },
        ON = function(a, b) {
            a = Ao(a.context, b);
            if (0 !== a.length) return fH(new eH, a.map(function(c) {
                return c.seller
            }))
        };
    var Mr = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1165);
        this.H = c;
        this.vf = d;
        this.T = e;
        this.C = f;
        this.o = g;
        this.j = CH(this, b.Ui)
    };
    _.T(Mr, Y);
    Mr.prototype.g = function() {
        if (this.j.value) {
            var a = new nk,
                b = new MN(this.context, this.j.value, this.H, void 0, this.vf.Tg, this.T, this.C, this.o);
            J(a, b);
            wk(a)
        } else this.vf.Tg.ca()
    };
    var Qt = function(a, b, c) {
        Y.call(this, a, 1206);
        this.o = b;
        this.j = W(this);
        this.Z = X(this, c)
    };
    _.T(Qt, Y);
    Qt.prototype.g = function() {
        var a = this;
        this.o.cookieDeprecationLabel ? ah(this.Z.value) ? this.j.La(this.o.cookieDeprecationLabel.getValue().then(function(b) {
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
    var PN = function(a, b) {
        Y.call(this, a, 1213, _.Lf(SD));
        this.j = W(this);
        b && (this.o = DH(this, b))
    };
    _.T(PN, Y);
    PN.prototype.g = function() {
        var a, b, c;
        (null == (c = null == (a = this.o) ? void 0 : null == (b = a.value) ? void 0 : b.label) ? 0 : c.match(Mf(RD))) ? this.j.G(!0): this.j.G(!1)
    };
    var QN = function(a, b) {
        Y.call(this, a, 1212, _.Lf(SD));
        this.j = W(this);
        this.o = W(this);
        b && (this.C = DH(this, b))
    };
    _.T(QN, Y);
    QN.prototype.g = function() {
        var a, b, c = null == (a = this.C) ? void 0 : null == (b = a.value) ? void 0 : b.label;
        c ? (this.o.G(!0), c.match(Mf(RD)) ? this.j.G(!0) : this.j.G(!1)) : (this.j.G(!1), this.o.G(!1))
    };
    var RN = function(a, b, c) {
        Y.call(this, a, 873);
        this.B = b;
        this.j = X(this, c)
    };
    _.T(RN, Y);
    RN.prototype.g = function() {
        var a = this.context,
            b = this.j.value,
            c = this.B;
        !vo()._pubconsole_disable_ && (b = eh("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || So(a, c))
    };
    var SN = function() {
        this.resources = {}
    };
    var Or = "3rd party ad content";
    var TN = function(a, b, c) {
        _.V.call(this);
        this.context = a;
        this.Sa = b;
        this.l = c;
        a = c.slotId;
        b = c.size;
        this.g = "height" === c.tb ? "fluid" : [b.width, b.height];
        this.Sd = Ym(a);
        this.Td = Or
    };
    _.T(TN, _.V);
    TN.prototype.render = function() {
        var a = this.Sa,
            b = this.l,
            c = b.slotId,
            d = b.O.T,
            e = b.size,
            f = b.Na,
            g = b.isBackfill,
            h = b.Qb;
        Oi(b.mj, _.zA(b.aa), null != f ? f : "", !1);
        Ns(_.Jf(Dl), "5", Os(d[c.getDomId()], 20));
        Ps(c, Qs, 801, {
            Ph: 0 === a.kind ? a.ub : "",
            isBackfill: g
        });
        a = this.D();
        h && a && a.setAttribute("data-google-container-id", h);
        Ps(c, Rs, 825, {
            size: e,
            isEmpty: !1
        });
        return a
    };
    TN.prototype.loaded = function(a) {
        var b = this.l,
            c = b.slotId,
            d = b.Aa;
        b = b.O.T;
        Ps(c, Du, 844);
        a && a.setAttribute("data-load-complete", !0);
        Ps(d, "slotOnload", 710, new fN(c, "publisher_ads"));
        Ns(_.Jf(Dl), "6", Os(b[c.getDomId()], 20))
    };
    var UN = function(a) {
        a = a.Sa;
        a = 0 === a.kind ? a.ub : "";
        var b = "";
        b = void 0 === b ? "" : b;
        if (a) {
            var c = a.toLowerCase();
            a = -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") || _.E(lA) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>"
        }
        return a
    };
    TN.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.mj.removeAttribute("data-google-query-id")
    };
    TN.prototype.I = function(a) {
        var b = this,
            c = VN(this, function() {
                return void b.loaded(c.g)
            }, a);
        _.jp(this, function() {
            100 != c.status && (c.tg() && (zI(c.l), c.C = 0), window.clearTimeout(c.H), c.H = -1, c.K = 3, c.A && (c.A.za(), c.A = null), _.$f(window, "resize", c.Da), _.$f(window, "scroll", c.Da), c.D && c.g && c.D == _.DA(c.g) && c.D.removeChild(c.g), c.g = null, c.D = null, c.status = 100)
        });
        return c
    };
    var VN = function(a, b, c) {
        var d = a.l,
            e = d.gj,
            f = d.isBackfill,
            g = d.Qb,
            h = d.Re,
            k = d.Kf,
            l = d.Za,
            m = Array.isArray(a.g) ? new _.Lm(Number(a.g[0]), Number(a.g[1])) : 1;
        return new HI({
            Qg: d.Ih,
            Sd: a.Sd,
            Td: a.Td,
            content: UN(a),
            size: m,
            Oi: b,
            hj: null != e ? e : void 0,
            permissions: {
                Pe: null != Fn(c, 1) ? !!_.Q(c, 1) : !f,
                Qe: null != Fn(c, 2) ? !!_.Q(c, 2) : !1
            },
            Ud: !!vo().fifWin,
            dm: pL ? pL : pL = vn(),
            ek: zn(),
            hostpageLibraryTokens: l.hostpageLibraryTokens,
            sb: function(n, p) {
                return void Fl(a.context, n, p)
            },
            uniqueId: g,
            fj: nL(),
            Re: null != h ? h : void 0,
            vb: void 0,
            Kf: null != k ? k : void 0
        })
    };
    var WN = function() {
        TN.apply(this, arguments)
    };
    _.T(WN, TN);
    WN.prototype.D = function() {
        var a = this.l,
            b = a.O,
            c = b.ba;
        a = b.T[a.slotId.getDomId()];
        b = new An;
        c = Gn([b, c.vc(), null == a ? void 0 : a.vc()]);
        return TN.prototype.I.call(this, c).g
    };
    WN.prototype.j = function() {
        return !1
    };
    var eu = function(a, b, c, d, e, f) {
        Y.call(this, a, 669);
        this.ba = b;
        this.T = c;
        this.j = d;
        this.Fb = e;
        this.output = W(this);
        f && (this.o = X(this, f))
    };
    _.T(eu, Y);
    eu.prototype.g = function() {
        var a;
        if (null == (a = this.o) ? 0 : a.value) this.output.G(!0);
        else {
            var b;
            a = !(null == (b = this.j) || !_.I(b, 1)) && (_.Q(this.T, 12) || Fn(this.ba, 13)) || this.Fb;
            this.output.G(!!a)
        }
    };
    var XN = function(a, b, c, d) {
        Y.call(this, a, 833);
        this.j = b;
        this.B = c;
        this.output = BH(this);
        EH(this, d)
    };
    _.T(XN, Y);
    XN.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = nL();
        c = {
            version: pL ? pL : pL = vn(),
            Cf: c
        };
        c = OI.ml(c);
        var d = uI(b);
        c = d ? _.hb(c, new _.u.Map([
            ["n", String(d)]
        ])) : c;
        d = Nf(xn);
        for (var e = new _.u.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
        c = _.hb(c, e);
        var g;
        a.resources[c.toString()] || (null == (g = vo()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.Zf("IFRAME"), a.src = _.gb(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)));
        this.output.notify()
    };
    var YN = function(a, b, c) {
        Y.call(this, a, 1135);
        this.o = b;
        this.C = c;
        this.j = W(this)
    };
    _.T(YN, Y);
    YN.prototype.g = function() {
        for (var a = new oz, b = new _.u.Map, c = new _.u.Set, d = _.y(this.o), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (_.Ai(f, 1)) {
                e = new _.u.Set;
                b.set(_.I(f, 1).toString(), e);
                f = _.y(_.ak(f, mz, 2));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = _.I(g, 1);
                    e.add(h);
                    c.has(h) || jk(a, 2, mz, g);
                    c.add(h)
                }
            }
        }
        this.C.G(b);
        this.j.G(a)
    };
    var ZN = function(a, b, c) {
        Y.call(this, a, 1051);
        this.o = b;
        this.j = CH(this, c)
    };
    _.T(ZN, Y);
    ZN.prototype.g = function() {
        var a = this;
        this.j.value && Ik(this.j.value, function(b, c) {
            Fl(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var $N = function(a, b) {
        Y.call(this, a, 1040);
        this.j = W(this);
        this.o = CH(this, b)
    };
    _.T($N, Y);
    $N.prototype.g = function() {
        var a = this.o.value;
        a ? (a = _.ak(a, mz, 2), this.j.G(a.map(function(b) {
            var c = Jy(b, nz);
            b = _.I(b, 1);
            c = c && (_.z(c, "startsWith").call(c, location.protocol) || _.z(c, "startsWith").call(c, "data:") && 80 >= c.length) ? eb(Sj(c)) : void 0;
            return {
                He: b,
                url: c
            }
        }))) : this.j.G([])
    };
    var aO = function(a, b, c) {
        Y.call(this, a, 813);
        this.yb = c;
        this.o = CH(this, b);
        this.j = CH(this, c)
    };
    _.T(aO, Y);
    aO.prototype.g = function() {
        var a = this,
            b = this.o.value,
            c = this.j.value;
        if (null != b && b.length && c) {
            b = _.y(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = e.He;
                (e = e.url) && _.S(this, Mk(d, e, c, this.yb, function(f, g) {
                    Fl(a.context, f, g);
                    var h, k;
                    null == (k = (h = console).error) || k.call(h, g)
                }))
            }
        }
    };
    var bO = function(a, b, c) {
        Y.call(this, a, 1045);
        this.j = b;
        this.yb = c
    };
    _.T(bO, Y);
    bO.prototype.g = function() {
        var a = new nk;
        _.S(this, a);
        var b = new $N(this.context, this.j);
        J(a, b);
        b = new aO(this.context, b.j, this.yb);
        J(a, b);
        wk(a)
    };
    var Xt = function(a, b, c, d) {
        Y.call(this, a, 706);
        this.B = b;
        this.output = null != d ? d : W(this);
        this.j = X(this, c)
    };
    _.T(Xt, Y);
    Xt.prototype.g = function() {
        this.output.Ha(bh(this.j.value, this.B))
    };
    var Tr = function(a, b, c, d) {
        Y.call(this, a, 1154);
        this.kb = c;
        this.j = d;
        this.o = CH(this, b)
    };
    _.T(Tr, Y);
    Tr.prototype.g = function() {
        if (this.o.value) {
            var a = new nk;
            _.S(this, a);
            var b = new Xt(this.context, window, this.kb, this.j.yb);
            J(a, b);
            b = new YN(this.context, this.o.value, this.j.Hg);
            J(a, b);
            J(a, new bO(this.context, b.j, this.j.yb));
            b = new ZN(this.context, console, this.j.yb);
            J(a, b);
            wk(a)
        } else this.j.Hg.ca(), this.j.yb.ca()
    };
    var cO = function(a, b, c, d, e, f) {
        Y.call(this, a, 1096);
        this.B = b;
        this.Z = c;
        this.j = d;
        this.wc = e;
        this.o = CH(this, f)
    };
    _.T(cO, Y);
    cO.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : a.Qj;
        b && b(this.j, this.Z, this.B, this.wc, this.context.Ra)
    };
    var dO = function(a, b) {
        Y.call(this, a, 1095);
        this.j = b;
        this.output = W(this)
    };
    _.T(dO, Y);
    dO.prototype.g = function() {
        this.output.La(this.j.load(_.zN))
    };
    var Vr = function(a, b, c, d, e) {
        Y.call(this, a, 1090);
        this.j = b;
        this.wc = c;
        this.o = X(this, d);
        this.C = CH(this, e)
    };
    _.T(Vr, Y);
    Vr.prototype.g = function() {
        var a = this.C.value,
            b;
        if (a && null != (b = _.um(a, _.Dz, 1)) && _.ak(b, _.Cz, 15).length) {
            b = new nk;
            _.S(this, b);
            var c = new dO(this.context, this.j);
            J(b, c);
            a = new cO(this.context, window, this.o.value, a, this.wc, c.output);
            J(b, a);
            wk(b)
        }
    };
    var zu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1205);
        this.B = b;
        this.J = c;
        this.H = X(this, d);
        this.o = X(this, e);
        this.j = X(this, f);
        this.C = X(this, g)
    };
    _.T(zu, Y);
    zu.prototype.g = function() {
        var a = this.H.value;
        a = new a.sm(this.o.value, this.B, this.j.value, this.J, this.C.value, new _.oJ(this.context), new a.Mk(this.B));
        _.S(this, a);
        _.S(this, a.ia)
    };
    var yu = function(a, b) {
        Y.call(this, a, 1204);
        this.j = b;
        this.output = W(this)
    };
    _.T(yu, Y);
    yu.prototype.g = function() {
        this.output.La(this.j.load(_.AN))
    };
    var ft = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = Bl(a, 88, function(f, g) {
            var h;
            if (h = lo(f)) h = g, h = ko(h) || Array.isArray(h) && h.every(ko);
            if (h) {
                if (_.E(dE)) {
                    var k = Yr(g);
                    h = k.size;
                    k.Yg && (g = Ul([f, g]), g = g.substring(1, g.length - 1), O(b, new Tl(151, ["SizeMappingBuilder.addSize", g])), g = h)
                }
                d.push([f, g])
            } else e.push([f, g]), O(b, Vl("SizeMappingBuilder.addSize", [f, g]));
            return c
        });
        this.build = Bl(a, 89, function() {
            if (e.length) return O(b, aK(Dn(e))), null;
            pa(d);
            return d
        })
    };
    var eO = function(a, b, c, d, e, f) {
        f = void 0 === f ? Ok : f;
        Y.call(this, a, 939);
        this.o = b;
        this.B = c;
        this.Z = d;
        this.j = f;
        this.output = BH(this);
        EH(this, e)
    };
    _.T(eO, Y);
    eO.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = new Yy;
        var d = new Xy;
        d = _.aj(d, 1, String(this.o));
        c = _.bi(c, 5, d);
        c = _.L(c, 4, 1);
        c = _.L(c, 2, 2);
        c = _.aj(c, 3, this.context.zb || this.context.mb);
        c = _.tl(c, 6, ah(this.Z));
        a.call(this, b, c);
        this.output.notify()
    };
    var mu = function(a, b, c, d, e) {
        Y.call(this, a, 807);
        this.B = b;
        this.Jb = c;
        this.output = BH(this);
        this.j = X(this, d);
        e && EH(this, e)
    };
    _.T(mu, Y);
    mu.prototype.g = function() {
        if (this.Jb && !this.j.value) {
            var a = eB(this.B);
            iJ(new hJ(a, this.Jb)) || this.I(new to("Cannot create top window frame"))
        }
        this.output.notify()
    };
    var fO = function(a, b) {
        Y.call(this, a, 820);
        this.B = b;
        this.output = W(this)
    };
    _.T(fO, Y);
    fO.prototype.g = function() {
        var a = this;
        this.output.La(Sk(this.B).then(function(b) {
            var c = b.Jb,
                d = b.status;
            wp("gpt_etu", function(e) {
                Wo(e, a.context);
                Xo(e, "rsn", d)
            }, c ? void 0 : 0);
            return null != c ? c : ""
        }))
    };
    var gO = function(a, b, c, d) {
        Y.call(this, a, 979);
        this.B = b;
        this.j = CH(this, d);
        this.output = c
    };
    _.T(gO, Y);
    gO.prototype.g = function() {
        var a = this;
        if (_.E(hE)) this.output.ca();
        else {
            var b;
            Wk(this.B, null != (b = this.j.value) ? b : !1).then(function(c) {
                a.output.G(c)
            })
        }
    };
    gO.prototype.l = function() {
        this.output.ca()
    };
    var cs = function(a, b, c, d) {
        Y.call(this, a, 1156);
        this.B = b;
        this.Uf = c;
        this.j = {
            Sc: new Xp
        };
        this.o = X(this, d)
    };
    _.T(cs, Y);
    cs.prototype.g = function() {
        if (ah(this.o.value)) {
            var a = new nk;
            _.S(this, a);
            var b = new gO(this.context, this.B, this.j.Sc, this.Uf);
            J(a, b);
            wk(a)
        } else this.j.Sc.ca()
    };
    var hO = function(a, b, c) {
        Y.call(this, a, 1123);
        this.j = b;
        this.o = c;
        W(this, b);
        W(this, c)
    };
    _.T(hO, Y);
    hO.prototype.g = function() {
        _.E(fE) ? (this.j.G(!1), this.o.ca()) : (this.j.G(!0), this.o.G(10))
    };
    var iO = function(a, b, c, d, e) {
        Y.call(this, a, 978);
        this.B = b;
        this.C = c;
        this.j = e;
        W(this, e);
        this.o = CH(this, d.Sc)
    };
    _.T(iO, Y);
    iO.prototype.g = function() {
        if (_.E(gE)) this.j.ca();
        else if (this.o.value) {
            var a = cl(this.o.value, this.B, new _.oJ(this.context), this.C);
            this.j.La(a)
        } else this.j.ca()
    };
    iO.prototype.l = function() {
        this.j.ca()
    };
    var es = function(a, b, c, d, e, f) {
        Y.call(this, a, 1164);
        this.o = b;
        this.se = c;
        this.j = e;
        this.C = X(this, d);
        f && (this.H = X(this, f))
    };
    _.T(es, Y);
    es.prototype.g = function() {
        var a;
        if (!lh(window.isSecureContext, window.document) || (null == (a = this.H) ? 0 : a.value)) this.j.zd.ca(), this.j.qe.G(!1), this.j.re.ca();
        else if (this.C.value) {
            a = new nk;
            _.S(this, a);
            J(a, new iO(this.context, window, this.o, this.se, this.j.zd));
            var b = new hO(this.context, this.j.qe, this.j.re);
            J(a, b);
            wk(a)
        } else this.j.zd.G(5), this.j.qe.G(!1), this.j.re.G(5)
    };
    var jO = function(a, b, c) {
        Y.call(this, a, 1101);
        this.B = b;
        this.j = c
    };
    _.T(jO, Y);
    jO.prototype.g = function() {
        if (!_.E(gE)) {
            var a = this.j,
                b = Tk(this.B);
            b.setTopicsCalled ? _.u.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }))
        }
    };
    var qu = function(a, b, c, d) {
        Y.call(this, a, 1180);
        this.B = b;
        this.Pf = c;
        this.j = CH(this, d.Sc)
    };
    _.T(qu, Y);
    qu.prototype.g = function() {
        if (this.Pf && this.j.value) {
            var a = new nk;
            _.S(this, a);
            J(a, new jO(this.context, this.B, this.j.value));
            wk(a)
        }
    };
    var ns = function(a) {
        this.F = _.A(a)
    };
    _.T(ns, _.D);
    var js = function(a, b) {
        return _.Ke(a, 2, _.qd(b), "0")
    };
    var kO = function(a) {
        this.F = _.A(a)
    };
    _.T(kO, _.D);
    var ms = Hf(kO);
    kO.da = [1];
    var St = function(a, b, c, d) {
        Y.call(this, a, 1186);
        this.L = b;
        this.B = c;
        this.output = W(this);
        this.Z = X(this, d)
    };
    _.T(St, Y);
    St.prototype.g = function() {
        if (!kh(this.B.isSecureContext, this.B.navigator, this.B.document) || _.E(Ft)) this.output.ca();
        else {
            var a = this.L.Se;
            if (null !== a) this.output.G(a);
            else {
                var b = _.In(new _.HG(this.B), "__gpi", this.Z.value);
                a = this.output;
                var c = a.G;
                b = _.oh(b || String(this.context.pvsid)) % 63001;
                this.L.Se = b;
                c.call(a, b)
            }
        }
    };
    var lO = function(a, b, c) {
        Y.call(this, a, 1171);
        this.j = c;
        W(this, c);
        this.Xg = X(this, b)
    };
    _.T(lO, Y);
    lO.prototype.g = function() {
        this.j.G(0 === this.Xg.value.kind)
    };
    var mO = function(a, b, c) {
        Y.call(this, a, 1160);
        this.j = c;
        W(this, c);
        this.o = X(this, b)
    };
    _.T(mO, Y);
    mO.prototype.g = function() {
        if (null != this.o.value.requestId) {
            var a = this.o.value.request;
            this.context.Ra.Gc.Qc.te.Vj.ie({
                me: a.byteLength
            });
            33792 < a.byteLength ? this.j.G({
                kind: 1,
                reason: 3
            }) : (a = Jb(a, 3), a.length ? this.j.G({
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
    mO.prototype.l = function() {
        this.j.G({
            kind: 1,
            reason: 4
        })
    };
    var nO = function(a, b) {
        Y.call(this, a, 1159);
        this.output = W(this);
        this.j = b
    };
    _.T(nO, Y);
    nO.prototype.g = function() {
        var a = this;
        this.output.La(this.j.getInterestGroupAdAuctionData({
            seller: "https://securepubads.g.doubleclick.net"
        }).catch(function(b) {
            a.I(b);
            return 4
        }))
    };
    nO.prototype.l = function() {
        this.output.G(4)
    };
    var rs = function(a, b, c, d, e, f) {
        Y.call(this, a, 1177);
        this.C = b;
        this.j = e;
        this.o = f;
        W(this, e);
        W(this, f);
        this.H = X(this, c);
        d && (this.J = X(this, d))
    };
    _.T(rs, Y);
    rs.prototype.g = function() {
        if (this.H.value) {
            var a;
            if (null == (a = this.J) ? 0 : a.value) this.j.G({
                kind: 1,
                reason: 6
            }), this.o.G(!1);
            else {
                a = new nk;
                _.S(this, a);
                var b = new nO(this.context, this.C);
                J(a, b);
                b = new mO(this.context, b.output, this.j);
                J(a, b);
                b = new lO(this.context, this.j, this.o);
                J(a, b);
                wk(a)
            }
        } else this.j.G({
            kind: 1,
            reason: 2
        }), this.o.G(!1)
    };
    var oO = function(a, b, c, d, e) {
        Y.call(this, a, 881);
        this.Fa = b;
        this.na = c;
        this.j = d;
        this.o = e;
        this.output = W(this)
    };
    _.T(oO, Y);
    oO.prototype.g = function() {
        if (4 === _.Lf(Gt)) {
            var a = _.um(this.na, Yz, 23);
            if (a) {
                var b;
                if (0 !== (null == (b = this.j) ? void 0 : b.kind)) throw new TypeError("Received remote auction config despite " + (this.j ? "invalid" : "absent") + " remarketing input.");
                this.output.G({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: mi(this.na, 3, 2),
                    requestId: this.j.requestId,
                    serverResponse: fl(gl(a, 1)),
                    resolveToConfig: !_.Q(this.na, 14)
                })
            } else this.output.ca()
        } else {
            b = this.output;
            a = b.G;
            var c = this.na,
                d = Ao(this.context, this.Fa),
                e = this.context.Ra,
                f = this.o,
                g = _.E(pE),
                h = _.Lf(iE),
                k = void 0 === h ? 0 : h;
            h = !_.Q(c, 14);
            var l = {};
            var m = _.ak(c, Vz, 7);
            m = _.y(m);
            for (var n = m.next(); !n.done; n = m.next()) {
                n = n.value;
                var p = {},
                    r = void 0,
                    v = null == (r = e) ? void 0 : r.Gc.Qc.te.dk;
                r = _.I(n, 1);
                if (_.I(n, 2).length) try {
                    if (p = JSON.parse(_.I(n, 2)), 1 > 100 * _.nh()) {
                        var w = void 0;
                        null == (w = v) || w.Ac({
                            Nf: r,
                            status: "SUCCESS",
                            Pc: 100
                        })
                    }
                } catch (F) {
                    w = void 0, null == (w = v) || w.Ac({
                        Nf: r,
                        status: "ERROR",
                        Pc: 1
                    })
                } else w = void 0, null == (w = v) || w.Ac({
                    Nf: r,
                    status: "EMPTY",
                    Pc: 1
                });
                l[_.I(n, 1)] = p
            }
            if (e = _.um(c, Uz, 6)) l["https://googleads.g.doubleclick.net"] = e.toJSON(), l["https://td.doubleclick.net"] = e.toJSON();
            m = {};
            e = _.y(_.ak(c, Xz, 11));
            for (n = e.next(); !n.done; n = e.next()) n = n.value, m[_.I(n, 1)] = _.Ey(n, 2);
            n = {};
            0 !== _.Ey(c, 21) && (n["*"] = _.Ey(c, 21));
            if (0 < _.ak(c, Wz, 32).length) {
                var x = {};
                e = _.y(_.ak(c, Wz, 32));
                for (p = e.next(); !p.done; p = e.next()) p = p.value, x[_.I(p, 1)] = _.Ey(p, 2)
            }
            p = {};
            null != wm(c, 18) && (p["https://googleads.g.doubleclick.net"] = Os(c, 18), p["https://td.doubleclick.net"] = Os(c, 18));
            e = _.y(Ie(c, 24, bA));
            for (v = e.next(); !v.done; v = e.next()) r = v.value, Os(r[1], 4) && (v = r[0], r = Os(r[1], 4), p[v] = r);
            e = _.I(c, 1).split("/td/")[0];
            var B;
            v = null == (B = _.um(c, $z, 5)) ? void 0 : _.je(B);
            var C;
            null != v && null != (C = _.um(v, Zz, 5)) && _.hk(C, 2);
            x = _.z(Object, "assign").call(Object, {}, {
                seller: e,
                decisionLogicUrl: _.I(c, 1),
                trustedScoringSignalsUrl: _.I(c, 2),
                interestGroupBuyers: mi(c, 3, 2),
                sellerExperimentGroupId: Os(c, 17),
                auctionSignals: JSON.parse(_.I(c, 4) || "{}"),
                sellerSignals: (null == v ? void 0 : v.toJSON()) || [],
                sellerTimeout: _.Ey(c, 15) || 50,
                perBuyerExperimentGroupIds: p,
                perBuyerSignals: l,
                perBuyerTimeouts: m,
                perBuyerCumulativeTimeouts: n
            }, x ? {
                perBuyerGroupLimits: x
            } : {}, h ? {
                resolveToConfig: h
            } : {});
            if (null == c ? 0 : _.Q(cA(c), 25)) x.sellerCurrency = "USD", x.perBuyerCurrencies = _.z(Object, "fromEntries").call(Object, He(c, 22, zd));
            _.I(c, 28) && (x.directFromSellerSignalsHeaderAdSlot = _.I(c, 28));
            f && (x.auctionNonce = f, x.additionalBids = _.u.Promise.resolve());
            g && He(c, 33, zd).size && (x.deprecatedRenderURLReplacements = _.z(Object, "fromEntries").call(Object, (_.H = He(c, 33, zd), _.z(_.H, "entries")).call(_.H)), (f = x.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (x.deprecatedRenderURLReplacements["${RENDER_DATA}"] = f));
            switch (k) {
                case 1:
                    x.allSlotsRequestedSizes = [{
                        width: c.getWidth(),
                        height: c.getHeight()
                    }]
            }
            f = Object;
            g = f.assign;
            k = _.I(c, 1);
            B = Os(c, 17);
            C = new $z;
            ci(cA(c), Zz, 5) && (l = new Zz, m = Fy(By(cA(c), Zz, 5), 2), l = _.Ke(l, 2, ed(m), "0"), m = Fy(By(cA(c), Zz, 5), 4), l = _.Ke(l, 4, ed(m), "0"), _.bi(C, 5, l));
            cA(c).getEscapedQemQueryId() && (l = cA(c).getEscapedQemQueryId(), _.aj(C, 2, l));
            _.I(cA(c), 6) && (l = _.I(cA(c), 6), _.aj(C, 6, l));
            _.Q(cA(c), 21) && _.tl(C, 21, !0);
            _.Q(cA(c), 4) && _.tl(C, 4, !0);
            _.I(cA(c), 11) && (l = _.I(cA(c), 11), _.aj(C, 11, l));
            C = C.toJSON();
            l = _.Ey(c, 15) || 50;
            if (_.Q(c, 30)) {
                if (null == d || !d.length) throw Error("top_td_without_component_auction");
            } else d = [x].concat(_.qi(null != d ? d : []));
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
    oO.prototype.l = function() {
        this.output.ca()
    };
    var pO = function(a, b, c, d) {
        Y.call(this, a, 1105);
        this.adUnitPath = b;
        this.na = c;
        this.j = d
    };
    _.T(pO, Y);
    pO.prototype.g = function() {
        var a = Date.now();
        if (!_.E(ws) || ps(a)) {
            var b = mi(this.na, 3, 2),
                c = gs(this.adUnitPath);
            if (_.Q(this.na, 20)) {
                if (_.E(oE)) {
                    var d;
                    var e = (null == (d = _.um(this.na, aA, 29)) ? void 0 : Os(d, 2)) || 864E5
                } else e = 864E5;
                a = xs(b, a + e);
                e = (b = this.j.getItem(c)) ? _.ak(ms(b), ns, 1) : [];
                var f;
                b = new kO;
                a = ks(e, a);
                a = _.om(b, 1, a);
                b = !(null == (f = _.um(this.na, aA, 29)) || !_.Q(f, 3));
                f = Sh(a, 2, b);
                this.j.setItem(c, bl(f))
            } else _.E(nE) && this.j.removeItem(c)
        }
    };
    Sg({
        google_signals: Sg({
            buyer_reporting_id: Vg
        })
    });
    var Bs = navigator,
        Cs = /(\$\{GDPR})/gi,
        Ds = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        Es = /(\$\{ADDTL_CONSENT})/gi,
        Fs = /(\$\{AD_WIDTH})/gi,
        Gs = /(\$\{AD_HEIGHT})/gi,
        Hs = /(\$\{RENDER_DATA})/gi;
    var qO = function() {
            var a = this;
            this.promise = new _.u.Promise(function(b, c) {
                a.reject = c;
                a.resolve = b
            })
        },
        rO = function() {
            this.auctionSignals = new qO;
            this.topLevelSellerSignals = new qO;
            this.g = new qO;
            this.perBuyerSignals = new qO;
            this.perBuyerTimeouts = new qO;
            this.perBuyerCumulativeTimeouts = new qO;
            this.directFromSellerSignals = new qO;
            this.directFromSellerSignalsHeaderAdSlot = new qO;
            this.perBuyerCurrencies = new qO;
            this.resolveToConfig = new qO;
            this.deprecatedRenderURLReplacements = new qO
        },
        sO = function(a, b, c, d) {
            this.g = a;
            this.Vf = b;
            this.interestGroupBuyers = c;
            this.Gb = d
        };
    var tO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Y.call(this, a, 1201);
        this.ga = b;
        this.Z = c;
        this.na = d;
        this.ka = e;
        this.W = k;
        this.H = l;
        this.J = m;
        this.P = n;
        this.C = p;
        this.j = r;
        this.ra = BH(this);
        this.o = W(this);
        this.xa = CH(this, f);
        this.Ma = X(this, g);
        this.ua = X(this, h);
        this.fa = X(this, w);
        X(this, v);
        W(this, p);
        W(this, n.Mb);
        W(this, n.Ga);
        W(this, n.Ja);
        W(this, this.j)
    };
    _.T(tO, Y);
    tO.prototype.g = function() {
        var a = Math.round(performance.now() - this.Ma.value),
            b = this.ua.value,
            c = this.xa.value,
            d = _.um(this.na, $z, 5),
            e = _.Q(d, 10),
            f = _.Q(d, 9),
            g = "string" === typeof c || Js(c),
            h = 3 !== c && 2 !== c && 1 !== c;
        this.j.G(g && !f);
        h && Ls(this.context, g, b, a, d);
        var k, l;
        h = null != (l = null == (k = this.fa.value.componentAuctions) ? void 0 : k.length) ? l : 0;
        Ks(this.context, c, a, b, !!this.ka, d, h, g);
        if (g)
            if (e) this.ga.deprecatedURNToURL(c, !0), this.C.G(!0), this.o.ca();
            else if (f) {
            _.Q(d, 17) ? zs(0, 0, d) : this.ga.deprecatedURNToURL(c, !0);
            var m;
            As(this.P, this.j, this.H, this.J, this.W, null == (m = this.na) ? void 0 : _.I(m, 25));
            this.C.G(!0);
            this.o.ca()
        } else {
            this.o.G(c);
            this.C.G(!0);
            if (_.E(mE)) {
                b = this.fa.value;
                d = this.na;
                var n;
                a = 1 === (null == (n = b.componentAuctions) ? void 0 : n.length) && qs(b.componentAuctions[0].seller) && ci(d, Tz, 26) ? dy(bl(By(d, Tz, 26)), 3) : ""
            } else a = void 0;
            n = a;
            vH(this.ra, Is(c, _.z(Object, "assign").call(Object, {}, {
                gdprApplies: null != Fn(this.Z, 3) ? _.Q(this.Z, 3) ? "1" : "0" : null,
                Uk: ck(this.Z, 2),
                Tj: ck(this.Z, 4),
                Pj: this.na.getWidth().toString(),
                Nj: this.na.getHeight().toString()
            }, n ? {
                Zl: n
            } : {})))
        } else {
            zs(a, 2 === c ? b : 0, d);
            if (!e) {
                var p;
                As(this.P, this.j, this.H, this.J, this.W, null == (p = this.na) ? void 0 : _.I(p, 25))
            }
            this.C.G(!0);
            this.o.ca()
        }
    };
    tO.prototype.l = function() {
        var a, b = null == (a = this.na) ? void 0 : _.um(a, $z, 5);
        a = this.ka;
        var c = this.P,
            d = this.j,
            e = this.H,
            f = this.J,
            g = this.W;
        b && zs(0, 0, b);
        null == a || a.Gb.abort();
        As(c, d, e, f, g)
    };
    var uO = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Y.call(this, a, 1200);
        this.L = b;
        this.ua = c;
        this.o = d;
        this.na = e;
        this.W = g;
        this.H = h;
        this.J = k;
        this.P = m;
        this.fa = n;
        this.C = AH(this);
        this.ra = W(this);
        this.ka = W(this);
        this.ga = W(this);
        this.j = CH(this, f);
        X(this, l);
        W(this, m.Mb);
        W(this, m.Ga);
        W(this, m.Ja);
        W(this, n)
    };
    _.T(uO, Y);
    uO.prototype.g = function() {
        if (this.j.value) {
            var a = cA(this.na);
            Ms(this.context, a);
            this.ra.G(performance.now());
            var b = _.Ey(this.na, 8) || 1E3;
            this.ka.G(b);
            var c = _.Ey(a, 14) || -1,
                d = _.Ey(a, 13) || -1;
            d = 0 < d && this.L.j >= d;
            if (0 < c && this.L.l >= c || d) this.C.G(1);
            else if (++this.L.l, ++this.L.j, this.j.value.signal = AbortSignal.timeout(b), _.Q(a, 15)) --this.L.l, this.C.La(new _.u.Promise(function(e) {
                setTimeout(function() {
                    e(1)
                }, 0)
            }));
            else {
                if (this.o && this.j.value.serverResponse) throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                a = this.o ? vO(this.j.value, b, this.o) : wO(this, this.j.value);
                --this.L.l;
                this.C.La(a)
            }
        } else null == (a = this.o) || a.Gb.abort(), As(this.P, this.fa, this.H, this.J, this.W), this.ga.G(!1)
    };
    var wO = function(a, b) {
            var c, d;
            return null == (d = (c = a.ua).runAdAuction) ? void 0 : d.call(c, b).catch(function(e) {
                if (e instanceof DOMException && "TimeoutError" === e.name) return 2;
                _.E(kE) && e instanceof Error && a.I(e);
                return 3
            })
        },
        vO = function(a, b, c) {
            vs(a, c);
            setTimeout(function() {
                c.Gb.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, b);
            return c.g
        };
    uO.prototype.l = function() {
        var a, b = null == (a = this.na) ? void 0 : _.um(a, $z, 5);
        a = this.o;
        var c = this.P,
            d = this.fa,
            e = this.H,
            f = this.J,
            g = this.W;
        b && zs(0, 0, b);
        null == a || a.Gb.abort();
        As(c, d, e, f, g)
    };
    var xO = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1202);
        this.na = b;
        this.C = c;
        this.j = d;
        this.o = CH(this, f);
        this.H = X(this, e);
        EH(this, g);
        W(this, d.Mb);
        W(this, d.Ga);
        W(this, d.Ja)
    };
    _.T(xO, Y);
    xO.prototype.g = function() {
        if (this.o.value) {
            Em(this.C) || (this.H.value.style.display = "");
            var a = this.o.value;
            var b = this.context.Ra;
            var c = _.I(this.na, 31);
            c ? Js(a) ? (b.Gc.Qc.te.gh.rh.Ac({
                Pc: 1,
                status: "FAILED_FENCED_FRAME"
            }), b = null) : (a = c.replace("%%srcfledge%%", a), a.length === c.length && a === c ? (b.Gc.Qc.te.gh.rh.Ac({
                Pc: 1,
                status: "FAILED_UNMODIFIED"
            }), b = null) : (b.Gc.Qc.te.gh.rh.Ac({
                Pc: 1,
                status: "OK"
            }), b = a)) : b = null;
            b ? this.j.Ga.G({
                kind: 0,
                ub: b
            }) : this.j.Ga.G({
                kind: 2,
                pe: this.o.value
            });
            this.j.Ja.G(new _.Lm(this.na.getWidth(), this.na.getHeight()));
            this.j.Mb.G(!1)
        }
    };
    var yO = function(a, b, c) {
        Y.call(this, a, 1054);
        this.j = b;
        this.output = BH(this);
        this.o = X(this, c)
    };
    _.T(yO, Y);
    yO.prototype.g = function() {
        this.o.value || this.j();
        this.output.notify()
    };
    var zO = function(a, b, c, d, e, f) {
        Y.call(this, a, 1053);
        this.slotId = b;
        this.O = c;
        this.L = d;
        this.Na = e;
        this.j = W(this);
        this.o = X(this, f)
    };
    _.T(zO, Y);
    zO.prototype.g = function() {
        this.o.value ? (Ss(this.slotId, this.L, this.O, this.Na), this.j.G(!1)) : this.j.G(!0)
    };
    var AO = function(a, b, c, d) {
        Y.call(this, a, 1055);
        this.j = d;
        EH(this, c);
        this.o = X(this, b);
        BH(this, this.j)
    };
    _.T(AO, Y);
    AO.prototype.g = function() {
        this.o.value && this.j.notify()
    };
    var fu = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B) {
        Y.call(this, a, 1179);
        this.slotId = b;
        this.T = d;
        this.L = e;
        this.Z = f;
        this.o = g;
        this.P = l;
        this.C = m;
        this.O = n;
        this.fa = p;
        this.Na = r;
        this.na = v;
        this.j = w;
        this.ka = x;
        this.ga = B;
        this.H = X(this, h);
        this.J = X(this, k);
        this.W = CH(this, c)
    };
    _.T(fu, Y);
    fu.prototype.g = function() {
        var a = new nk;
        _.S(this, a);
        var b = W(this);
        if (this.na) {
            var c = cA(this.na),
                d = _.Q(c, 10);
            if (this.na.getWidth() && this.na.getHeight())
                if (d)
                    if (As({
                            Mb: b,
                            Ga: this.j.Ga,
                            Ja: this.j.Ja
                        }, this.j.fd, this.H.value, this.J.value, this.o), _.Q(c, 17)) {
                        zs(0, 0, c);
                        var e;
                        null == (e = this.C) || e.Gb.abort()
                    } else BO(this, a, this.na);
            else b = BO(this, a, this.na);
            else {
                As({
                    Mb: b,
                    Ga: this.j.Ga,
                    Ja: this.j.Ja
                }, this.j.fd, this.H.value, this.J.value, this.o);
                zs(0, 0, c);
                var f;
                null == (f = this.C) || f.Gb.abort()
            }
        } else As({
            Mb: b,
            Ga: this.j.Ga,
            Ja: this.j.Ja
        }, this.j.fd, this.H.value, this.J.value, this.o), null == (c = this.C) || c.Gb.abort();
        e = new zO(this.context, this.slotId, this.O, this.L, this.Na, b);
        J(a, e);
        b = new yO(this.context, this.fa, b);
        J(a, b);
        b = new AO(this.context, e.j, b.output, this.j.Jc);
        J(a, b);
        wk(a)
    };
    var BO = function(a, b, c) {
        if (2 === _.Lf(Gt) && a.W.value && _.Q(c, 20) && 0 !== mi(c, 3, 2).length) {
            var d = new pO(a.context, a.slotId.getAdUnitPath(), c, a.W.value);
            J(b, d)
        }
        var e = new oO(a.context, a.T, c, a.ka, a.ga);
        J(b, e);
        var f = navigator,
            g = {
                Ga: a.j.Ga,
                Ja: a.j.Ja,
                Mb: new Xp
            };
        d = g.Mb;
        var h = new uO(a.context, a.L, f, a.C, c, e.output, a.o, a.H.value, a.J.value, a.P, g, a.j.fd);
        J(b, h);
        e = new tO(a.context, f, a.Z, c, a.C, h.C, h.ra, h.ka, a.o, a.H.value, a.J.value, g, h.ga, a.j.fd, a.P, e.output);
        J(b, e);
        c = new xO(a.context, c, lr(a.T), g, a.P, e.o, e.ra);
        J(b, c);
        a = new Wq(a.context, a.slotId, Rs);
        J(b, a);
        return d
    };
    var CO = function() {
        TN.apply(this, arguments)
    };
    _.T(CO, TN);
    var DO = function(a, b) {
            var c = _.Zf(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Sd;
            c.name = a.Sd;
            c.title = a.Td;
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
        EO = function(a, b) {
            "string" !== typeof a.g && (b.width = String(a.g[0]), b.height = String(a.g[1]));
            var c = Bl(a.context, 774, function() {
                a.loaded(b);
                _.$f(b, "load", c)
            });
            _.pb(b, "load", c);
            _.jp(a, function() {
                return _.$f(b, "load", c)
            });
            a.l.Ih.appendChild(b)
        };
    var FO = function() {
        CO.apply(this, arguments)
    };
    _.T(FO, CO);
    FO.prototype.D = function() {
        var a = DO(this, !this.l.Km);
        if ("string" === typeof this.Sa.pe) {
            var b = this.Sa.pe;
            /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = eb(b), a.src = _.gb(b).toString())
        } else a.config = this.Sa.pe;
        EO(this, a);
        return a
    };
    FO.prototype.j = function() {
        return !1
    };
    var GO = navigator,
        HO = function(a, b, c, d, e, f, g) {
            Y.call(this, a, 1089);
            this.Wb = b;
            this.X = c;
            this.T = d;
            this.j = f;
            this.o = g;
            W(this, g);
            e && (this.C = CH(this, e))
        };
    _.T(HO, Y);
    HO.prototype.g = function() {
        var a = {};
        if (1 === this.Wb)
            for (var b = _.y(this.X), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = this.T[c.getDomId()];
                a[c.getId()] = IO(this, d, ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"], this.j)
            } else if (2 === this.Wb) {
                b = null == (c = this.C) ? void 0 : c.value;
                if (!b) {
                    this.o.ca();
                    return
                }
                c = _.y(this.X);
                for (d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    var e = b.get(d.getId()),
                        f = void 0;
                    null != (f = e) && f.length && (f = this.T[d.getDomId()], a[d.getId()] = IO(this, f, e, this.j))
                }
            }
        this.o.G(a)
    };
    var IO = function(a, b, c, d) {
        var e = new rO,
            f = new AbortController;
        b = us({
            Vf: e,
            Gb: f,
            interestGroupBuyers: c,
            Gh: Ao(a.context, b),
            Xk: d,
            Sl: _.E(pE)
        });
        b = GO.runAdAuction(b).catch(function(g) {
            if (g instanceof DOMException && "TimeoutError" === g.name) return 2;
            _.E(kE) && g instanceof Error && a.I(g);
            return 3
        });
        return new sO(b, e, c, f)
    };
    var JO = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1106);
        this.Z = b;
        this.H = c;
        this.o = d;
        this.X = e;
        this.C = f;
        this.J = g;
        this.j = W(this);
        W(this, g)
    };
    _.T(JO, Y);
    JO.prototype.g = function() {
        for (var a = os(this.o, this.H, this.Z, this.C), b = new _.u.Map, c = Us(a), d = new _.u.Map, e = _.y(this.X), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            f = g.getAdUnitPath();
            var h = a.get(gs(f)),
                k = void 0,
                l = void 0,
                m = void 0,
                n = null != (m = null != (l = c) ? l : null == (k = h) ? void 0 : _.ak(k, ns, 1).map(function(p) {
                    return _.I(p, 1)
                })) ? m : [];
            b.set(g.getId(), n);
            if (!d.has(f)) {
                g = [];
                n = _.y(n.sort());
                for (h = n.next(); !h.done; h = n.next()) g.push(_.oh(h.value));
                d.set(f, g)
            }
        }
        this.j.G(b);
        this.J.G(d)
    };
    var Vs = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 1170);
        this.Wb = b;
        this.T = c;
        this.Z = d;
        this.o = e;
        this.C = Date.now();
        this.j = {
            Pg: W(this)
        };
        2 === b && this.o && (this.j.qg = W(this));
        this.P = X(this, f);
        this.J = X(this, g);
        h && (this.H = CH(this, h));
        k && (this.W = X(this, k))
    };
    _.T(Vs, Y);
    Vs.prototype.g = function() {
        var a = this.P.value,
            b;
        if (!this.J.value || !a.length || (null == (b = this.W) ? 0 : b.value) || _.E(ws) && !ps(this.C)) {
            this.j.Pg.ca();
            var c;
            null == (c = this.j.qg) || c.ca()
        } else {
            b = new nk;
            _.S(this, b);
            if (2 === this.Wb && this.o) {
                var d, e;
                var f = new JO(this.context, this.Z, this.o, this.C, a, null != (e = null == (d = this.H) ? void 0 : d.value) ? e : void 0, this.j.qg);
                J(b, f);
                f = f.j
            }
            var g, h;
            a = new HO(this.context, this.Wb, a, this.T, f, null != (h = null == (g = this.H) ? void 0 : g.value) ? h : void 0, this.j.Pg);
            J(b, a);
            wk(b)
        }
    };
    var KO = function(a, b, c) {
        Y.call(this, a, 1216);
        this.j = b;
        this.output = AH(this);
        this.o = X(this, c)
    };
    _.T(KO, Y);
    KO.prototype.g = function() {
        var a = this,
            b = this.o.value,
            c = new _.u.Map;
        if (b.length) {
            var d = this.j;
            b = b.map(function(e) {
                return d.createAuctionNonce().then(function(f) {
                    c.set(e, f)
                }).catch(function(f) {
                    a.I(f)
                })
            });
            this.output.La(_.u.Promise.all(b).then(function() {
                return c
            }))
        } else this.output.G(c)
    };
    var LO = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1166);
        this.fa = b;
        this.aa = c;
        this.H = d;
        this.j = AH(this);
        this.o = W(this);
        this.C = W(this);
        this.P = X(this, e);
        this.W = X(this, f);
        EH(this, g);
        this.J = X(this, h)
    };
    _.T(LO, Y);
    LO.prototype.g = function() {
        var a = this,
            b = this.P.value;
        if (b) {
            var c = ax(this.W.value, {
                    uuid: this.fa
                }),
                d = this.aa.createElement("script");
            b = {
                source: b,
                credentials: this.J.value ? "include" : "omit",
                resources: [c.toString()]
            };
            d.setAttribute("type", "webbundle");
            nb(d, bb(JSON.stringify(b).replace(/</g, "\\u003C")));
            this.aa.head.appendChild(d);
            this.o.G(d);
            this.C.G(b);
            this.j.La(MO(c).catch(function(e) {
                e instanceof AG ? a.H(e) : (a.I(e), a.l(e));
                return null
            }))
        } else this.j.ca(), this.o.ca(), this.C.ca()
    };
    var MO = function(a) {
        var b, c;
        return _.rb(function(d) {
            if (1 == d.g) return d.yield(fetch(a.toString()).catch(function() {
                throw new AG("Failed to fetch bundle index.");
            }), 2);
            if (3 != d.g) return b = d.A, d.yield(b.text(), 3);
            c = d.A;
            return d.return(fA(c))
        })
    };
    var NO = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 1167);
        this.aa = b;
        this.Z = c;
        this.H = d;
        this.j = e;
        this.C = f;
        this.o = X(this, g);
        this.P = CH(this, h);
        this.W = CH(this, k);
        this.fa = CH(this, l);
        m && (this.J = CH(this, m))
    };
    _.T(NO, Y);
    NO.prototype.g = function() {
        var a = this.P.value,
            b = this.W.value,
            c = this.fa.value;
        if (a)
            if (b && c) {
                var d = mi(a, 1, 2),
                    e = mi(a, 2, 2);
                a = mi(a, 3, 2);
                if (d.length !== e.length) this.j(new zG("Received " + d.length + " ad URLs but " + e.length + " metadatas"));
                else {
                    c.resources = [].concat(_.qi(d.filter(function(f) {
                        return f
                    })), _.qi(a.map(function(f) {
                        return "https://securepubads.g.doubleclick.net" + f
                    })));
                    c.resources.length ? (a = _.Zf("SCRIPT"), a.setAttribute("type", "webbundle"), nb(a, bb(JSON.stringify(c).replace(/</g, "\\u003C"))), this.aa.head.removeChild(b), this.aa.head.appendChild(a)) : this.aa.head.removeChild(b);
                    for (b = 0; b < d.length; b++) c = void 0, this.H(b, e[b], {
                        kind: 1,
                        url: d[b]
                    }, this.o.value, this.Z, null == (c = this.J) ? void 0 : c.value, void 0, void 0);
                    this.C(d.length - 1, this.o.value, this.Z)
                }
            } else this.j(Error("Lost bundle script"))
    };
    var OO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        nk.call(this);
        e = new LO(a, f, h, c, m, n, p, r);
        J(this, e);
        J(this, new NO(a, h, g, b, c, d, k, e.j, e.o, e.C, l));
        this.g = {
            output: e.j
        }
    };
    _.T(OO, nk);
    var gt = new _.u.Set,
        PO = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.t.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new to("Reached Limit for addEventListener");
        }, 3E5),
        QO = function(a, b, c) {
            _.V.call(this);
            this.context = a;
            this.R = b;
            this.l = c;
            this.g = [];
            this.enabled = !1;
            this.K = 0;
            this.D = new _.u.Map;
            gt.add(this);
            this.R.info(bK(this.getName()))
        };
    _.T(QO, _.V);
    var jt = function(a) {
        a.enabled || (a.enabled = !0, Hn(6, a.context), a.o())
    };
    QO.prototype.slotAdded = function(a, b) {
        this.g.push(a);
        var c = new gN(a, this.getName());
        Ps(this.l, "slotAdded", 818, c);
        this.R.info(cK(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        Ly(b, 4, a)
    };
    QO.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ea(b.g, c)
        })
    };
    QO.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.K >= _.Lf(uD) && 0 < _.Lf(uD)) return PO(), !1;
        if (!c.IntersectionObserver && (_.H = ["impressionViewable", "slotVisibilityChanged"], _.z(_.H, "includes")).call(_.H, a)) return O(this.R, RK()), !1;
        var e;
        if (null == (e = this.D.get(a)) ? 0 : e.has(b)) return !1;
        this.D.has(a) || this.D.set(a, new _.u.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (k) {
                d.R.error(rK(String(k), a));
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            }
        };
        this.D.get(a).set(b, c);
        this.l.listen(a, c);
        this.K++;
        return !0
    };
    QO.prototype.removeEventListener = function(a, b) {
        var c, d = null == (c = this.D.get(a)) ? void 0 : c.get(b);
        if (!d || !rJ(this.l, a, d)) return !1;
        this.K--;
        return this.D.get(a).delete(b)
    };
    var Zs = function(a) {
        for (var b = _.y(gt), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var ct = function(a, b, c, d) {
        QO.call(this, a, b, d);
        this.j = c;
        this.ads = new _.u.Map;
        this.Kc = !1
    };
    _.T(ct, QO);
    ct.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.Kc = a)
    };
    var dL = function(a, b) {
            var c;
            return a.j.enabled && !(null == (c = a.ads.get(b)) || !c.Kl)
        },
        eL = function(a, b, c, d) {
            b = new cN(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            Ps(a.l, "slotRenderEnded", 67, b)
        };
    ct.prototype.getName = function() {
        return "companion_ads"
    };
    ct.prototype.slotAdded = function(a, b) {
        var c = this;
        a.listen(uJ, function(d) {
            Fn(d.detail, 11) && (RO(c, a).Kl = !0)
        });
        QO.prototype.slotAdded.call(this, a, b)
    };
    ct.prototype.o = function() {};
    var RO = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.jp(b, function() {
                return a.ads.delete(b)
            }));
            return c
        },
        bL = function(a, b) {
            var c = an().g,
                d = an().A;
            if (a.j.enabled) {
                var e = {
                    Zb: 3
                };
                a.I && (e.Bd = a.I);
                a.C && (e.Cd = a.C);
                b = null != b ? b : a.g;
                c = Om(c, d);
                d = e.Bd;
                var f = e.Cd;
                d && "number" !== typeof d || f && "number" !== typeof f || a.j.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.R.error(iK(b[0].getDomId()))
        },
        cL = function(a, b) {
            return a.g.filter(function(c) {
                return _.z(b, "includes").call(b, c.toString())
            })
        };
    var dt = function(a, b, c) {
        QO.call(this, a, b, c)
    };
    _.T(dt, QO);
    dt.prototype.getName = function() {
        return "content"
    };
    dt.prototype.o = function() {};
    var Yv = function(a, b) {
        this.configuration = ir();
        this.Ba = a;
        this.g = b
    };
    Yv.prototype.log = function(a, b, c) {
        var d, e = null != (d = c.Mc) ? d : this.configuration[a].Sh;
        0 === e || 1 / e < this.g || (b = b(_.z(Object, "assign").call(Object, {}, {
            Mc: e
        }, c)), this.configuration[a].send(this.Ba, b))
    };
    var SO = _.hw(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        TO = _.hw(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        UO = _.hw(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        VO = _.hw(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        WO = new _.u.Map([
            [2, {
                Fg: "page_level_ads"
            }],
            [5, {
                Fg: "shoppit"
            }],
            [6, {
                Fg: "side_rails"
            }]
        ]),
        XO = function(a) {
            var b = void 0 === b ? WO : b;
            this.context = a;
            this.g = b;
            this.A = new _.u.Map;
            this.loaded = new _.u.Set
        },
        ZO;
    XO.prototype.load = function(a) {
        var b = _.YO(this, a),
            c, d = (null != (c = this.g.get(a.module)) ? c : {}).Fg;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            d = (c = _.tm(172)) && "pagead2.googlesyndication.com" === JA((c.src || "").match(_.IA)[3] || null) ? this.context.zb ? _.fb(UO, this.context.zb, d) : _.fb(VO, d, this.context.mb) : this.context.zb ? _.fb(SO, this.context.zb, d) : _.fb(TO, d, this.context.mb);
            c = {};
            var e = _.Lf(XD);
            e && (c.cb = e);
            d = _.z(Object, "keys").call(Object, c).length ? _.Yw(d, c) : d;
            ZO(this, a);
            _.$o(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.YO = function(a, b) {
        b = b.module;
        a.A.has(b) || a.A.set(b, new _.wh);
        return a.A.get(b)
    };
    ZO = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = Bl(a.context, 340, function(e) {
            if (a.g.has(c) && "function" === typeof e) {
                var f = a.g.get(c);
                f = (void 0 === f.wk ? [] : f.wk).map(function(g) {
                    return _.YO(a, g).promise
                });
                _.u.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(vo(), b, {
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
    var Lt = function(a, b) {
        Y.call(this, a, 980);
        this.output = new Jr;
        this.j = [];
        this.o = X(this, b)
    };
    _.T(Lt, Y);
    Lt.prototype.g = function() {
        for (var a = _.y((_.H = [this.o.value, this.j.map(function(c) {
                return c.value
            })], _.z(_.H, "flat")).call(_.H)), b = a.next(); !b.done; b = a.next()) hh(b.value);
        this.output.notify()
    };
    var st = function(a, b) {
        Y.call(this, a, 892, _.Lf(QD));
        this.Tc = W(this);
        this.cd = W(this);
        this.Xc = W(this);
        this.Lb = W(this);
        this.rd = W(this);
        this.vd = W(this);
        this.hc = W(this);
        this.j = DH(this, b);
        this.Kb = W(this)
    };
    _.T(st, Y);
    st.prototype.g = function() {
        var a = this.j.value;
        if (!a) throw Error("config timeout");
        this.Tc.Ha(_.um(a, sz, 3));
        this.cd.Ha(_.um(a, uz, 2));
        var b = this.Xc,
            c = b.G;
        var d = Ce(a, 4, Xc, 2);
        c.call(b, d);
        b = this.Lb;
        c = b.Ha;
        d = _.ak(a, oz, 6);
        c.call(b, d);
        b = this.rd;
        c = b.Ha;
        d = _.ak(a, rv, 5);
        c.call(b, d);
        this.vd.Ha(_.um(a, Ez, 7));
        var e;
        b = this.hc;
        c = b.G;
        d = _.u.Set;
        var f;
        null == (e = _.um(a, pz, 1)) ? f = void 0 : f = mi(e, 6, 2);
        c.call(b, new d(f || []));
        this.Kb.Ha(_.um(a, Gz, 8))
    };
    st.prototype.K = function(a) {
        this.l(a)
    };
    st.prototype.l = function(a) {
        this.Tc.ib(a);
        this.cd.ib(a);
        this.Xc.G([]);
        this.Lb.G([]);
        this.rd.G([]);
        this.vd.ca();
        this.Kb.ca()
    };
    var rt = function(a, b) {
        Y.call(this, a, 891);
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
                d.Lc || (c.error = Error("malformed response"), d.G([]))
            }
        })
    };
    _.T(rt, Y);
    rt.prototype.g = function() {
        if (this.error) throw this.error;
        this.j.G(Te(Hz, this.o.value))
    };
    var $O = function(a, b) {
        Y.call(this, a, 1081);
        this.Bb = W(this);
        this.j = CH(this, b)
    };
    _.T($O, Y);
    $O.prototype.g = function() {
        this.j.value ? this.Bb.G(this.j.value) : this.Bb.ca()
    };
    var aP = new _.u.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        bP = function(a, b, c, d, e, f, g, h, k) {
            Y.call(this, a, 1079);
            this.aa = b;
            this.googletag = c;
            this.ba = d;
            this.H = e;
            this.j = f;
            this.R = g;
            this.o = h;
            this.C = k;
            W(this)
        };
    _.T(bP, Y);
    bP.prototype.g = function() {
        var a = this,
            b = this.o.getAdUnitPath(),
            c = aP.get(_.fg(this.o, 2, 0));
        if (b && c) {
            var d, e = null != (d = this.ba) ? d : this.j.g;
            b = new KM(this.context, this.aa, b, c, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, e, this.j, this.H, this.R, !1, this.C);
            _.S(this, b);
            wk(b)
        }
    };
    var Kt = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1082);
        this.googletag = b;
        this.ba = c;
        this.H = d;
        this.o = e;
        this.R = f;
        this.C = W(this);
        this.j = new $O(this.context, this.C);
        this.Bb = this.j.Bb;
        _.S(this, this.j);
        this.J = X(this, g)
    };
    _.T(Kt, Y);
    Kt.prototype.g = function() {
        if (_.E(VD)) {
            for (var a = [], b = _.y(this.J.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, el(c, Fz)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
            }
            this.C.Ha(null == d ? void 0 : _.um(d, zz, 4));
            d = new nk;
            _.S(this, d);
            a = _.y(a);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, J(d, new bP(this.context, document, this.googletag, null != (c = this.ba) ? c : this.o.g, this.H, this.o, this.R, _.um(b, Bz, hl(b, Fz, 5)), _.um(b, zz, 4)));
            J(d, this.j);
            wk(d)
        } else this.Bb.ca()
    };
    var Tt = function(a, b, c, d, e, f, g, h) {
        _.V.call(this);
        this.context = a;
        this.j = b;
        this.l = c;
        this.R = d;
        this.L = e;
        this.g = f;
        this.fb = g;
        this.D = h
    };
    _.T(Tt, _.V);
    var Xv = function(a) {
        IH.call(this, function(b, c) {
            Fl(a, b, c);
            var d;
            null == (d = console) || d.error(c)
        })
    };
    _.T(Xv, IH);
    var cP = function() {
        CO.apply(this, arguments)
    };
    _.T(cP, CO);
    cP.prototype.D = function() {
        var a = this,
            b = this.l,
            c = b.gj;
        b = b.Re;
        var d = DO(this);
        if (null == c ? 0 : c.length)
            if (_.Nx) {
                c = _.y(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.qi(c));
        b && (d.allow = b);
        EO(this, d);
        Hl(this.context, 653, function() {
            var f;
            if (f = Uj(a.Sa.ub)) {
                var g = f.toString().toLowerCase();
                f = -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") || _.E(kF) ? f : Uj("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>")
            }
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ja() && g.open("text/html", "replace");
            g.write(_.wx(f));
            var l, m, n;
            if (gx(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    cP.prototype.j = function() {
        return !0
    };
    var ru = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R, K, Z) {
        Y.call(this, a, 680);
        this.slotId = b;
        this.L = c;
        this.O = d;
        this.Aa = e;
        this.Za = f;
        this.tb = g;
        this.Na = h;
        this.isBackfill = k;
        this.Qb = l;
        this.na = m;
        this.B = n;
        this.j = W(this);
        this.C = W(this);
        this.o = BH(this);
        this.J = X(this, p);
        this.ka = X(this, r);
        EH(this, v);
        this.W = X(this, w);
        this.H = X(this, x);
        this.P = X(this, B);
        EH(this, F);
        this.ra = CH(this, C);
        EH(this, G);
        this.ga = X(this, P);
        EH(this, R);
        Z && EH(this, Z);
        K && (this.fa = CH(this, K))
    };
    _.T(ru, Y);
    ru.prototype.g = function() {
        var a = this.J.value;
        if (0 === a.kind && null == a.ub) throw new zG("invalid html");
        var b, c;
        a: {
            var d = this.context,
                e = {
                    aa: document,
                    slotId: this.slotId,
                    L: this.L,
                    O: this.O,
                    Aa: this.Aa,
                    size: this.P.value,
                    mj: this.W.value,
                    Ih: this.H.value,
                    Na: this.Na,
                    tb: this.tb,
                    gj: this.ra.value,
                    isBackfill: this.isBackfill,
                    Qb: this.Qb,
                    Re: this.ga.value,
                    Km: null == (b = this.na) ? void 0 : _.Q(b, 14),
                    Kf: null == (c = this.fa) ? void 0 : c.value,
                    Za: this.Za
                };b = this.ka.value;c = a.kind;
            switch (c) {
                case 0:
                    a = new(b ? WN : cP)(d, a, e);
                    break a;
                case 2:
                    a = new FO(d, a, e);
                    break a;
                default:
                    lb(c)
            }
            a = void 0
        }
        _.S(this, a);
        d = a.render();
        dP(this, this.B, d);
        this.B.top && this.B.top !== this.B && _.Rk(this.B.top) && dP(this, this.B.top, d);
        this.o.notify();
        this.j.G(d);
        this.C.G(a.j())
    };
    var dP = function(a, b, c) {
        kp(a, a.id, b, "message", function(d) {
            c.contentWindow === d.source && Ps(a.slotId, Xq, 824, d)
        })
    };
    var Yt = function(a, b, c, d, e) {
        Y.call(this, a, 720);
        this.format = b;
        this.sa = c;
        this.eb = d;
        this.height = e;
        this.output = W(this)
    };
    _.T(Yt, Y);
    Yt.prototype.g = function() {
        if (null == this.height) this.output.ca();
        else {
            var a = Math.round(.3 * this.sa),
                b;
            2 !== this.format && 3 !== this.format || null == (b = this.eb) || !_.Q(b, 12, !1) || 0 >= a || this.height <= a ? this.output.G(this.height) : this.output.G(a)
        }
    };
    var gu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Y.call(this, a, 674);
        this.slotId = b;
        this.ba = c;
        this.o = d;
        this.aa = f;
        this.L = g;
        this.tb = m;
        this.output = W(this);
        this.J = 2 === e || 3 === e;
        this.j = X(this, h);
        this.H = X(this, k);
        this.C = CH(this, l);
        n && EH(this, n)
    };
    _.T(gu, Y);
    gu.prototype.g = function() {
        var a = eq(this.ba, this.o),
            b = Rm(this.slotId, this.aa) || Hp(this.j.value, Zm(this.slotId), a);
        this.H.value && !a && (b.style.display = "inline-block");
        this.J ? DJ(this.L, this.slotId, function() {
            return void _.CA(b)
        }) : _.jp(this, function() {
            return void _.CA(b)
        });
        a = eP(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.output.G(b)
    };
    var eP = function(a) {
        var b = a.j.value,
            c, d = null == (c = a.C.value) ? void 0 : c.height;
        if (b && !a.tb && d) {
            var e;
            c = (null != (e = dq(a.o, 23)) ? e : _.Q(a.ba, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var Wt = function(a, b) {
        Y.call(this, a, 859);
        this.B = b;
        this.output = W(this)
    };
    _.T(Wt, Y);
    Wt.prototype.g = function() {
        this.output.G(!_.Rk(this.B.top))
    };
    var nu = function(a, b, c) {
        Y.call(this, a, 840);
        this.format = b;
        this.aa = c;
        this.output = W(this)
    };
    _.T(nu, Y);
    nu.prototype.g = function() {
        var a = [],
            b = this.aa;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (_.H = c.features(), _.z(_.H, "includes")).call(_.H, "attribution-reporting") && a.push("attribution-reporting");
        switch (this.format) {
            case 5:
            case 4:
                _.E(gD) && a.push("autoplay");
                break;
            case 7:
                _.E(hD) && a.push("autoplay")
        }
        a.length ? this.output.G(a.join(";")) : this.output.G("")
    };
    var Fu = function(a, b, c, d) {
        Y.call(this, a, 1207);
        this.Aa = c;
        this.slotId = d;
        EH(this, b)
    };
    _.T(Fu, Y);
    Fu.prototype.g = function() {
        Ps(this.Aa, "impressionViewable", 715, new dN(this.slotId, "publisher_ads"))
    };
    var Eu = function(a, b, c, d) {
        uN.call(this, a, b, c);
        EH(this, d)
    };
    _.T(Eu, uN);
    var Au = function(a, b, c, d, e, f) {
        f = void 0 === f ? Vt : f;
        Y.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.aa = d;
        this.Aa = e;
        this.C = f;
        this.j = this.o = -1;
        this.J = _.Hx(function() {
            Ps(g.Aa, "slotVisibilityChanged", 716, new eN(g.slotId, "publisher_ads", g.j))
        }, 200);
        this.H = X(this, c);
        var h = new Jr;
        sJ(this.slotId).then(function() {
            return void h.notify()
        });
        EH(this, h)
    };
    _.T(Au, Y);
    Au.prototype.g = function() {
        var a = this,
            b = this.C(Bl(this.context, this.id, function(c) {
                c = _.y(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.z(Number, "isFinite").call(Number, a.o) && fP(a)
            }));
        b && (b.observe(this.H.value), kp(this, this.id, this.aa, "visibilitychange", function() {
            fP(a)
        }), _.jp(this, function() {
            b.disconnect()
        }))
    };
    var fP = function(a) {
        var b = Math.floor($G(a.aa) ? 0 : a.o);
        if (0 > b || 100 < b || b === a.j ? 0 : -1 !== a.j || 0 !== b) a.j = b, a.J()
    };
    var lu = function(a, b, c, d, e, f) {
        Y.call(this, a, 719);
        this.ba = b;
        this.o = c;
        this.oh = d;
        this.output = W(this);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(lu, Y);
    lu.prototype.g = function() {
        var a = this.j.value.kind;
        switch (a) {
            case 0:
                this.j.value.ub ? this.C.value ? (a = new An, a = Sh(a, 3, this.oh), _.Q(Gn([a, this.ba.vc(), this.o.vc()]), 3) ? this.output.G(MI) : this.output.ca()) : this.output.ca() : this.output.ca();
                break;
            case 2:
                this.output.ca();
                break;
            default:
                lb(a)
        }
    };
    var gP = function(a, b, c, d, e, f) {
        Y.call(this, a, 1119);
        this.slotId = b;
        this.o = c;
        this.documentElement = d;
        this.L = e;
        this.j = f;
        this.output = W(this)
    };
    _.T(gP, Y);
    gP.prototype.g = function() {
        var a = _.Zf("INS");
        a.id = this.o;
        Em(this.j) && _.pp(a, {
            display: "none"
        });
        this.documentElement.appendChild(a);
        var b = function() {
            return void _.CA(a)
        };
        (_.H = [2, 3], _.z(_.H, "includes")).call(_.H, this.j) ? DJ(this.L, this.slotId, b) : _.jp(this, b);
        this.output.G(a)
    };
    var hP = function(a, b, c, d, e) {
        Y.call(this, a, 1120);
        this.J = b;
        this.C = c;
        this.o = d;
        this.j = e;
        this.output = W(this);
        a = this.j;
        if (!_.ja(a) || !_.ja(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) this.H = X(this, this.j)
    };
    _.T(hP, Y);
    hP.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.H) ? void 0 : a.value) ? b : this.j;
        if (!(_.H = [2, 3], _.z(_.H, "includes")).call(_.H, this.C)) {
            a = _.y(_.z(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, 1 === b.nodeType && b.id !== this.J && _.CA(b);
            this.o || (c.style.display = "")
        }
        this.output.G(c)
    };
    var Zt = function(a, b, c, d, e, f, g, h, k) {
        nk.call(this);
        c ? (a = new hP(a, e, g, k, c), J(this, a), a = a.output) : Dm(g) ? (a = new gP(a, b, d, f, h, g), J(this, a), a = a.output) : (b = new nr(a, b, tJ, function(l) {
            return l.detail
        }), J(this, b), a = new hP(a, e, g, k, b.output), J(this, a), a = a.output);
        this.output = a
    };
    _.T(Zt, nk);
    var iP = function(a, b) {
            var c = an();
            this.context = a;
            this.L = b;
            this.g = c
        },
        jP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x) {
            var B = document,
                C = window;
            e || f || LJ(a.L, d);
            var F = Ku(a.context, b, a.g, c, d, e, f, g, h, k, l, B, m, n, p, r, v, function() {
                LJ(a.L, d);
                KJ(a.L, d, F)
            }, w, x);
            f || KJ(a.L, d, F);
            _.jp(d, function() {
                LJ(a.L, d)
            });
            C.top !== C && C.addEventListener("pagehide", function(G) {
                G.persisted || LJ(a.L, d)
            });
            wk(F)
        };
    var kP = function(a, b, c, d) {
        Y.call(this, a, 884);
        this.Ea = b;
        this.fb = c;
        this.o = W(this);
        this.j = X(this, d)
    };
    _.T(kP, Y);
    kP.prototype.g = function() {
        XL(this.fb, _.In(this.Ea, "__gads", this.j.value));
        Kn(20, this.context, this.Ea, this.j.value);
        Kn(2, this.context, this.Ea, this.j.value);
        this.o.G(ih())
    };
    var Mu = 0,
        lP = new _.Hm(-9, -9);
    var Qu = new _.u.Set([function(a, b) {
        var c = a.ma.O.ba;
        b.set("pvsid", {
            value: a.oa.context.pvsid
        }).set("correlator", {
            value: hs(c, 26)
        })
    }, function(a, b) {
        var c = a.ma.O.ba,
            d = a.Nm;
        a = d.Cd;
        d = d.Bd;
        var e = _.Q(c, 21);
        b = b.set("hxva", {
            value: e ? 1 : null
        }).set("cmsid", {
            value: e ? ck(c, 23) : null
        }).set("vid", {
            value: e ? ck(c, 22) : null
        }).set("pod", {
            value: d
        }).set("ppos", {
            value: a
        });
        a = b.set;
        c = Cy(c, 29);
        a.call(b, "scor", {
            value: null == c ? void 0 : c
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.X,
            e = c.O.T;
        c = a.Ug;
        var f = c.Yk,
            g = c.Sk;
        b.set("eid", {
            value: a.oa.ig
        }).set("debug_experiment_id", {
            value: dC().split(",")
        }).set("expflags", {
            value: _.tm(253) ? Mf(wD) || null : null
        }).set("pied", {
            value: function() {
                var h = new MH,
                    k = !1,
                    l = !1;
                f && (k = !0, jk(h, 1, zz, f));
                var m = d.map(function(p) {
                    var r = new KH,
                        v, w;
                    null == (v = e[p.getDomId()]) ? w = void 0 : w = _.ak(v, zz, 27);
                    p = w;
                    if (null == p || !p.length) return r;
                    l = k = !0;
                    p = _.y(p);
                    for (v = p.next(); !v.done; v = p.next()) jk(r, 1, zz, v.value);
                    return r
                });
                l && _.om(h, 2, m);
                m = _.y(null != g ? g : []);
                for (var n = m.next(); !n.done; n = m.next()) jk(h, 1, zz, n.value), k = !0;
                return k ? Jb(h.g(), 3) : null
            }()
        })
    }, function(a, b) {
        var c = a.oa;
        a = c.context;
        c = c.nb;
        b.set("output", {
            value: "ldjh"
        }).set("gdfp_req", {
            value: 1
        }).set("vrg", {
            value: a.Fc ? String(a.Fc) : a.mb
        }).set("ptt", {
            value: 17
        }).set("impl", {
            value: c ? "fifs" : "fif"
        })
    }, function(a, b) {
        var c = a.oa.Z;
        a = Wu(a.ma.O.ba) || new fL;
        var d = _.fg(a, 6, 2);
        b = b.set("rdp", {
            value: _.Q(a, 1) ? "1" : null
        }).set("ltd", {
            value: _.Q(a, 9) ? "1" : null
        }).set("ltd_cs", {
            value: _.E(pD) && _.tm(221) && null == Fn(c, 3) ? "1" : null
        }).set("gdpr_consent", {
            value: jv(c, 2)
        }).set("gdpr", {
            value: null != Fn(c, 3) ? _.Q(c, 3) ? "1" : "0" : null,
            options: {
                Ia: !0
            }
        }).set("addtl_consent", {
            value: jv(c, 4)
        }).set("tcfe", {
            value: Ky(c, 7)
        }).set("us_privacy", {
            value: jv(c, 1)
        }).set("npa", {
            value: _.Q(c, 6) || _.Q(a, 8) ? 1 : null
        }).set("puo", {
            value: _.E(UD) && _.Q(a, 13) ? 1 : null
        }).set("tfua", {
            value: 2 !== d ? d : null,
            options: {
                Ia: !0
            }
        }).set("tfcd", {
            value: null != _.Vc(_.Zh(a, 5)) ? _.fg(a, 5, 0) : null,
            options: {
                Ia: !0
            }
        }).set("trt", {
            value: null != _.Vc(_.Zh(a, 10)) ? _.fg(a, 10, 0) : null,
            options: {
                Ia: !0
            }
        }).set("tad", {
            value: _.E(Pu) && null != Fn(c, 8) ? _.Q(c, 8) ? "1" : "0" : null,
            options: {
                Ia: !0
            }
        }).set("gpp", {
            value: jv(c, 11)
        });
        a = b.set;
        c = Dy(c, 10);
        a.call(b, "gpp_sid", {
            value: c.join(",") || void 0
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.O,
            e = c.X,
            f = c.sg,
            g = a.oa.B,
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
                return Cm(l)
            })
        }).set("fluid", {
            value: function() {
                var l = !1,
                    m = h.map(function(n) {
                        n = (_.H = Bm(n), _.z(_.H, "includes")).call(_.H, "fluid");
                        l || (l = n);
                        return n ? "height" : "0"
                    });
                return l ? m : null
            }()
        }).set("ifi", {
            value: function() {
                var l = Cp(g);
                if (!f) {
                    l += 1;
                    var m = g,
                        n = e.length;
                    n = void 0 === n ? 1 : n;
                    m = lB(Of(m)) || m;
                    m.google_unique_id = (m.google_unique_id || 0) + n
                }
                return l
            }()
        }).set("didk", {
            value: _.E(aE) ? Wp(e, function(l) {
                return _.oh(l.getDomId())
            }) : null,
            options: _.z(Object, "assign").call(Object, {}, {
                Ta: "~"
            }, {
                ed: !0
            })
        })
    }, function(a, b) {
        var c = a.ma;
        a = c.X;
        c = c.O;
        var d = c.ba,
            e = c.T;
        b.set("sfv", {
            value: pL ? pL : pL = vn()
        }).set("fsfs", {
            value: Wp(a, function(f) {
                f = e[f.getDomId()];
                var g;
                return Number(null != (g = null == f ? void 0 : dq(f, 12)) ? g : Fn(d, 13))
            }),
            options: {
                Ta: ",",
                Ld: 0,
                ed: !0
            }
        }).set("fsbs", {
            value: Wp(a, function(f) {
                f = e[f.getDomId()].vc();
                var g = d.vc(),
                    h;
                return (null != (h = null == f ? void 0 : dq(f, 3)) ? h : null == g ? 0 : _.Q(g, 3)) ? 1 : 0
            }),
            options: {
                Ld: 0,
                ed: !0
            }
        })
    }, function(a, b) {
        var c = a.oa.L;
        a = a.ma;
        var d = a.sg;
        b.set("rcs", {
            value: Wp(a.X, function(e) {
                if (!d) {
                    var f = c.g.get(e);
                    f && f.cj++
                }
                return JJ(c, e)
            }),
            options: {
                Ld: 0,
                ed: !0
            }
        })
    }, function(a, b) {
        var c = a.ma;
        a = a.oa.nb;
        c = c.O.T[c.X[0].getDomId()];
        b.set("click", {
            value: !a && c.getClickUrl() ? ck(c, 7) : null
        })
    }, function(a, b, c) {
        var d = a.ma,
            e = d.X,
            f = d.O.T;
        a = a.oa;
        var g = a.Z,
            h = a.B;
        c = void 0 === c ? function(n, p) {
            return bh(n, p)
        } : c;
        a = e.map(function(n) {
            return f[n.getDomId()]
        });
        var k, l, m;
        b.set("ists", {
            value: Up(a, mr) || null
        }).set("fas", {
            value: Wp(a, function(n) {
                return nq(lr(n))
            }),
            options: {
                Ld: 0,
                ed: !0
            }
        }).set("itsi", {
            value: e.some(function(n) {
                var p;
                return !HM(n) && 5 === (null == (p = f[n.getDomId()]) ? void 0 : lr(p))
            }) ? function() {
                var n = c(g, h);
                if (!n) return 1;
                var p;
                n = Math.max.apply(Math, _.qi(null != (p = _.cI(n, 604800)) ? p : []));
                return isFinite(n) ? Math.floor(Math.max((Date.now() - n) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: Up(a, function(n) {
                return 5 === lr(n) && _.E(_.DD)
            }) || null
        }).set("ifs", {
            value: null != (m = null == (k = (_.H = _.z(Object, "values").call(Object, f), _.z(_.H, "find")).call(_.H, function(n) {
                return ci(n, FL, 29)
            })) ? void 0 : null == (l = _.um(k, FL, 29)) ? void 0 : bl(l)) ? m : null
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.O.T;
        a = a.X.map(function(d) {
            return c[d.getDomId()]
        });
        b.set("rbvs", {
            value: Up(a, function(d) {
                return 4 === lr(d)
            }) || null
        })
    }, function(a, b) {
        var c = a.ma,
            d = a.oa;
        a = d.isSecureContext;
        d = d.B;
        var e = b.set;
        var f = c.X;
        var g = c.O;
        c = c.Zb;
        var h = g.ba,
            k = g.T,
            l = new xp;
        l.set(0, 1 !== c);
        k = k[f[0].getDomId()];
        l.set(1, !!_.Q(k, 17));
        l.set(2, Oq(f, g));
        l.set(3, _.Q(h, 27) || !1);
        l.set(4, 3 === c);
        f = zp(l);
        e.call(b, "eri", {
            value: f
        }).set("gct", {
            value: Jq("google_preview", d)
        }).set("sc", {
            value: a ? 1 : 0,
            options: {
                Ia: !0
            }
        })
    }, function(a, b) {
        var c = a.oa,
            d = c.B,
            e = c.Z;
        c = c.Ea;
        var f = Lq(a.ma.O.ba.Pa()),
            g = _.In(c, "__gads", e);
        a = "1" === _.In(c, "__gpi_opt_out", e) ? "1" : null;
        b = b.set("cookie", {
            value: g,
            options: {
                Ia: !0
            }
        }).set("cookie_enabled", {
            value: !g && IG(c, e) ? "1" : null
        });
        g = d.document;
        var h = g.domain;
        d = b.set.call(b, "cdm", {
            value: (f || Fm(d)) === g.URL ? "" : h
        });
        f = d.set;
        e = (e = _.In(c, "__gpi", e)) && !_.z(e, "includes").call(e, "&") ? e : null;
        f.call(d, "gpic", {
            value: e
        }).set("pdopt", {
            value: a
        })
    }, function(a, b) {
        a = a.oa.B;
        b.set("arp", {
            value: mp(a) ? 1 : null
        }).set("abxe", {
            value: _.Rk(a.top) || dv(a.IntersectionObserver) ? 1 : null
        })
    }, function(a, b) {
        var c = a.oa.B;
        a = Lq(a.ma.O.ba.Pa());
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
        var c = a.ma,
            d = c.O;
        c = c.X;
        var e = a.oa;
        a = e.B;
        var f = e.nb;
        e = Am(!0, a);
        for (var g = d.ba, h = a.document, k = d.T, l = [], m = [], n = _.y(c), p = n.next(); !p.done; p = n.next()) {
            p = p.value;
            var r = k[p.getDomId()];
            p = Xm(p, r, h, eq(g, r));
            if (_.E(ZD)) r = void 0, p = null != (r = p) ? r : lP, l.push(Math.round(p.x)), m.push(Math.round(p.y));
            else {
                r = void 0;
                var v = f ? null != (r = p) ? r : lP : p;
                v && (l.push(Math.round(v.x)), m.push(Math.round(v.y)))
            }
        }
        e && (d.Dd = e);
        f = Xg(a) ? null : Am(!1, a);
        try {
            var w = a.top;
            var x = Lu(w.document, w)
        } catch (B) {
            x = new _.Hm(-12245933, -12245933)
        }
        b.set("adxs", {
            value: l,
            options: {
                Ia: !0
            }
        }).set("adys", {
            value: m,
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
            value: Math.round(x.x),
            options: {
                Ia: !0
            }
        }).set("scr_y", {
            value: Math.round(x.y),
            options: {
                Ia: !0
            }
        }).set("btvi", {
            value: Nu(c, a, d),
            options: {
                Ia: !0,
                Ta: "|"
            }
        })
    }, function(a, b) {
        var c = a.oa,
            d = c.L,
            e = c.B;
        b.set("ucis", {
            value: a.ma.X.map(function(f) {
                (f = d.g.get(f)) ? (null != f.Qb || (f.Qb = e === e.top ? (++d.o).toString(36) : oA()), f = f.Qb) : f = "";
                return f
            }),
            options: {
                Ta: "|"
            }
        }).set("oid", {
            value: 2
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.X,
            d = a.O,
            e = d.T;
        a = new _.u.Map;
        var f = Array(c.length),
            g = !1;
        d = _.y(d.ba.Pa());
        for (var h = d.next(); !h.done; h = d.next())
            if (h = h.value, "tag_origin" === _.I(h, 1)) {
                g = !0;
                for (var k = 0; k < c.length; k++) f[k] = [].concat(_.qi(jm(h)))
            } else a.set(_.I(h, 1), [jm(h)[0]]);
        for (d = 0; d < c.length; d++)
            if (h = e[c[d].getDomId()])
                for (h = _.y(h.Pa()), k = h.next(); !k.done; k = h.next()) {
                    k = k.value;
                    var l = _.I(k, 1);
                    if ("tag_origin" === _.I(k, 1)) {
                        g = !0;
                        var m = l = void 0;
                        (l = f)[m = d] || (l[m] = []);
                        f[d].push.apply(f[d], _.qi(jm(k)))
                    } else m = a.get(l) || [], k = jm(k)[0], 1 === c.length ? m[0] = k : k !== m[0] && (m[d + 1] = k), a.set(l, m)
                }
        c = [];
        e = _.y(_.z(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) h = d.value, d = jn()[h], h = a.get(h), d && h && "to" !== d && (1 < h.length ? (h = h.map(function(n) {
            return encodeURIComponent(n || "")
        }).join(), c.push(d + "," + h)) : 1 === h.length && "url" !== d && b.set(d, {
            value: h[0]
        }));
        c.length && b.set("sps", {
            value: c,
            options: {
                Ta: "|"
            }
        });
        b.set("tos", {
            value: g ? f.map(function(n) {
                return _.z(Array, "from").call(Array, new _.u.Set(n)).join("+")
            }) : void 0,
            options: {
                Ta: "~"
            }
        })
    }, function(a, b) {
        a = a.oa.B;
        var c, d, e, f, g, h, k;
        var l = a;
        l = void 0 === l ? gA : l;
        try {
            var m = l.history.length
        } catch (F) {
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
        d = new xp;
        "SVGElement" in k && "createElementNS" in k.document && d.set(0);
        e = TA();
        e["allow-top-navigation-by-user-activation"] && d.set(1);
        e["allow-popups-to-escape-sandbox"] && d.set(2);
        k.crypto && k.crypto.subtle && d.set(3);
        "TextDecoder" in k && "TextEncoder" in k && d.set(4);
        k = zp(d);
        h = h.call(c, "bc", {
            value: k
        });
        k = h.set;
        a: {
            try {
                var n, p, r = null == (n = a.performance) ? void 0 : null == (p = n.getEntriesByType("navigation")) ? void 0 : p[0];
                if (null == r ? 0 : r.type) {
                    var v;
                    var w = null != (v = TG.get(r.type)) ? v : null;
                    break a
                }
            } catch (F) {}
            var x, B, C;w = null != (C = UG.get(null == (x = a.performance) ? void 0 : null == (B = x.navigation) ? void 0 : B.type)) ? C : null
        }
        w = k.call(h, "nvt", {
            value: w
        });
        n = w.set;
        p = _.Lf(lD);
        p = 0 === p ? null : fB(a, 2 === p);
        w = n.call(w, "bz", {
            value: p
        });
        n = w.set;
        _.E(cE) ? a = Ka() && il(a) ? a.document.documentElement.lang : void 0 : a = null;
        n.call(w, "tl", {
            value: a
        })
    }, function(a, b) {
        (a = _.tm(251)) && b.set("uach", {
            value: dy(a, 3)
        })
    }, function(a, b) {
        a = a.oa;
        if (!a.Nb) {
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
        var c = a.oa,
            d = c.B,
            e = c.L;
        c = c.nb;
        a = a.ma;
        var f = a.X;
        a = a.O;
        var g = a.ba,
            h = a.T;
        a = Kq("google_preview", d);
        var k = d.document,
            l = a ? Mq(k.URL) : k.URL;
        k = a ? Mq(k.referrer) : k.referrer;
        a = !1;
        if (c) c = Lq(g.Pa());
        else {
            var m;
            c = null != (m = Lq(h[f[0].getDomId()].Pa())) ? m : Lq(g.Pa())
        }
        if (null != c) {
            var n = l;
            Xg(d) || (k = "", a = !0)
        } else c = l;
        m = Nq(d);
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
            m = _.Rk(d.top) && (null == (p = d.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
            var v;
            p = null == (v = d.location) ? void 0 : v.ancestorOrigins;
            d = ml(d) || "";
            v = (null == p ? void 0 : p[p.length - 1]) || "";
            d = (d = m || d || v) ? a ? JA(d.match(_.IA)[3] || null) : d : null;
            n.call(b, "top", {
                value: d
            }).set("etu", {
                value: e.Jb
            })
        }
    }, function(a, b) {
        a = a.oa.context.pvsid;
        b.set("rumc", {
            value: _.E(jF) || _.Jf(Dl).g ? a : null
        }).set("rume", {
            value: _.E(iF) ? 1 : null
        })
    }, function(a, b) {
        b.set("vis", {
            value: _.Ir(a.oa.B.document)
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.X;
        c = c.O;
        a = a.oa.B;
        var e = Kp(d, c.T, c.ba),
            f = Np(d, e, a);
        c = f.Dl;
        f = f.vm;
        var g = Pp(d, e, a),
            h = g.Ok;
        g = g.Bl;
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
                Ta: "|"
            }
        }).set("psz", {
            value: c,
            options: {
                Ta: "|"
            }
        }).set("msz", {
            value: f,
            options: {
                Ta: "|"
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
            value: IJ(a.oa.L, a.ma.X)
        })
    }, function(a, b) {
        var c = a.oa;
        a = c.Z;
        c = c.B;
        var d;
        var e = c.document.domain,
            f = null != (d = ah(a) && ch(c) ? c.document.cookie : null) ? d : "",
            g = c.history.length,
            h = c.screen,
            k = c.document.referrer;
        if (Of()) var l = window.gaGlobal || {};
        else {
            var m = Math.round((new Date).getTime() / 1E3),
                n = c.google_analytics_domain_name;
            e = "undefined" == typeof n ? cG("auto", e) : cG(n, e);
            var p = -1 < f.indexOf("__utma=" + e + "."),
                r = -1 < f.indexOf("__utmb=" + e);
            (d = (lB() || window).gaGlobal) || (d = {}, (lB() || window).gaGlobal = d);
            var v = !1;
            if (p) {
                var w = f.split("__utma=" + e + ".")[1].split(";")[0].split(".");
                r ? d.sid = w[3] : d.sid || (d.sid = m + "");
                d.vid = w[0] + "." + w[1];
                d.from_cookie = !0
            } else {
                d.sid || (d.sid = m + "");
                if (!d.vid) {
                    v = !0;
                    r = Math.round(2147483647 * Math.random());
                    p = aG.appName;
                    var x = aG.version,
                        B = aG.language ? aG.language : aG.browserLanguage,
                        C = aG.platform,
                        F = aG.userAgent;
                    try {
                        w = aG.javaEnabled()
                    } catch (G) {
                        w = !1
                    }
                    w = [p, x, B, C, F, w ? 1 : 0].join("");
                    h ? w += h.width + "x" + h.height + h.colorDepth : _.t.java && _.t.java.awt && (h = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), w += h.screen.width + "x" + h.screen.height);
                    w = w + f + (k || "");
                    for (k = w.length; 0 < g;) w += g-- ^ k++;
                    d.vid = (r ^ bG(w) & 2147483647) + "." + m
                }
                d.from_cookie || (d.from_cookie = !1)
            }
            if (!d.cid) {
                b: for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), w = 0; w < f.length; w++)
                    if (k = dG.exec(f[w]) || eG.exec(f[w]) || fG.exec(f[w])) {
                        h = k[1] || 0;
                        if (h == m) {
                            l = k[2];
                            break b
                        }
                        h < n && (n = h, l = k[2])
                    }v && l && -1 != l.search(/^\d+\.\d+$/) ? (d.vid = l, d.from_cookie = !0) : l != d.vid && (d.cid = l)
            }
            d.dh = e;
            d.hid || (d.hid = Math.round(2147483647 * Math.random()));
            l = d
        }
        e = l.sid;
        d = l.hid;
        v = l.from_cookie;
        f = l.cid;
        v && !ah(a) || b.set("ga_vid", {
            value: l.vid
        }).set("ga_sid", {
            value: e
        }).set("ga_hid", {
            value: d
        }).set("ga_fc", {
            value: v
        }).set("ga_cid", {
            value: f
        }).set("ga_wpids", {
            value: c.google_analytics_uacct
        })
    }, function(a, b) {
        var c = a.ma.X,
            d = a.oa.B;
        a = a.Jm;
        var e = a.Xg,
            f = a.Se,
            g = a.qm,
            h = a.Uj;
        if (!_.E(lF) && !g) {
            kh(d.isSecureContext, d.navigator, d.document) && b.set("td", {
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
                    lb(e)
            }
            void 0 !== f && b.set("egid", {
                value: f,
                options: {
                    Ia: !0
                }
            });
            (null == h ? 0 : h.size) && b.set("tan", {
                value: c.map(function(k) {
                    return h.get(k)
                })
            })
        }
    }, function(a, b) {
        var c = a.oa.B,
            d = a.Am;
        a = d.Dm;
        d = d.Bm;
        lh(c.isSecureContext, c.document) && (b.set("topics", {
            value: a instanceof Uint8Array ? Jb(a, 3) : a
        }), !a || a instanceof Uint8Array || b.set("tps", {
            value: a
        }), d && b.set("htps", {
            value: d
        }))
    }, function(a, b) {
        var c = a.oa,
            d = c.B,
            e = c.Z,
            f = a.ma.X;
        a = a.gm;
        c = a.sf;
        var g = a.Hk,
            h = a.wl;
        if (!_.E(tD)) {
            a = b.set;
            d = bh(e, d);
            e = Al(f[0].getAdUnitPath());
            var k = _.E(yk);
            k = void 0 === k ? !1 : k;
            f = new Rz;
            var l = null != g ? g : [];
            g = k ? 1024 : 300;
            if (e && c && l && "function" === typeof c.getUserIdsAsEidBySource) {
                if ("function" === typeof c.getUserIdsAsEids) try {
                    for (var m = _.y(c.getUserIdsAsEids()), n = m.next(); !n.done; n = m.next()) {
                        var p = n.value;
                        "string" === typeof p.source && Xj(52, p.source)
                    }
                } catch (w) {
                    var r;
                    Xj(45, "", null == (r = w) ? void 0 : r.message)
                }
                m = _.y(l);
                for (n = m.next(); !n.done; n = m.next())
                    if (n = n.value, String(_.I(n, 1)) === e)
                        for (n = _.y(_.ak(n, mz, 2)), p = n.next(); !p.done; p = n.next())
                            if (p = p.value, _.Q(p, hl(p, nz, 3)) && (p = _.I(p, 1), !dk(f, p))) {
                                r = null;
                                try {
                                    var v = l = k = void 0;
                                    r = null == (k = c.getUserIdsAsEidBySource(p)) ? void 0 : null == (l = k.uids) ? void 0 : null == (v = l[0]) ? void 0 : v.id
                                } catch (w) {
                                    k = void 0, Xj(45, p, null == (k = w) ? void 0 : k.message)
                                }
                                r && (r.length > g ? (k = {}, Xj(12, p, null, (k.sl = String(r.length), k.fp = "1", k))) : (k = Mz(p), l = ki(k, 2, r), k = f, l = Sh(l, 11, !0), jk(k, 2, bk, l), k = {}, Xj(19, p, null, (k.fp = "1", k.hs = r ? "1" : "0", k))))
                            }
            }
            kk(f, d, e, h);
            _.ak(f, bk, 2).length ? (c = {}, Xj(50, "", null, (c.ns = String(_.ak(f, bk, 2).length), c)), c = Jb(f.g(), 3)) : c = null;
            a.call(b, "a3p", {
                value: c
            })
        }
    }, function(a, b) {
        var c = a.qb.ye,
            d = a.ma.X;
        a = function() {
            return c ? d.map(function(e) {
                return c.get(e)
            }) : []
        }();
        b.set("cbidsp", {
            value: Wp(a, function(e) {
                return Jb(e.g(), 3)
            }),
            options: _.z(Object, "assign").call(Object, {}, {
                Ta: "~"
            }, {
                ed: !0
            })
        })
    }, function(a, b) {
        var c = [];
        a = _.y(_.ak(By(a.ma.O.ba.fi(), nt, 2), yr, 1));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            mi(e, 2, 2).length && (d = null != Bi(e, 3) ? _.Ey(e, 3) : _.fg(e, 1, 0) + 2, e = mi(e, 2, 2).join("|"), c.push(d + "=" + e))
        }
        b.set("pps", {
            value: c,
            options: {
                Ta: "~"
            }
        })
    }, function(a, b) {
        b.set("scar", {
            value: a.Gl.Wk
        })
    }, function(a, b) {
        a = a.oa.B;
        a = !(!a.isSecureContext || !jh("attribution-reporting", a.document));
        !_.E(hF) && a && b.set("nt", {
            value: 1
        })
    }, function(a, b) {
        if (a = a.Ql.Pl) a = dy(bl(a), 3), b.set("psd", {
            value: a
        })
    }, function(a, b) {
        a = _.Yf(a.oa.B);
        var c = Pq;
        0 < a && c >= a && b.set("dlt", {
            value: a
        }).set("idt", {
            value: c - a
        })
    }, function(a, b) {
        a = a.ma.O.ba;
        b.set("ppid", {
            value: _.Ai(a, 16) ? _.I(a, 16) : null,
            options: {
                Ia: !0
            }
        })
    }, function(a, b) {
        var c = b.set;
        (a = ck(a.ma.O.ba, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + dy('role:1 producer:12 loc:"' + a + '"')) : a = "";
        c.call(b, "uule", {
            value: a
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.O.ba;
        b.set("prev_scp", {
            value: $r(a.X, a.O),
            options: {
                ed: !0,
                Ta: "|"
            }
        }).set("cust_params", {
            value: bs(c),
            options: {
                Ta: "&"
            }
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.O;
        a = a.oa;
        var e = a.L,
            f = a.nb;
        b.set("adks", {
            value: c.X.map(function(g) {
                if (f) {
                    var h = d.T[g.getDomId()];
                    h = hp(h);
                    if (g = e.g.get(g)) g.Fd = h;
                    return h
                }
                h = d.ba;
                var k = d.T[g.getDomId()],
                    l;
                if (!(l = Cu(e, g))) {
                    h = hp(k, _.Q(h, 6) || _.Q(k, 17) ? null : Sm(g));
                    if (g = e.g.get(g)) g.Fd = h;
                    l = h
                }
                return l
            })
        })
    }, function(a, b) {
        var c = b.set;
        a = a.oa.B;
        var d = eB(a);
        a: {
            var e = a.google_ad_width || a.google_ad_width;
            var f = a.google_ad_height || a.google_ad_height;
            if (Xg(a)) e = !1;
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
        d === d.top ? d = !0 : (g = !1, (h = d.document) && h.referrer && (f = h.referrer, d.parent === d.top && (g = !0)), (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 === f.indexOf(d) && (g = !1), d = g);
        f = a.top == a ? 0 : _.Rk(a.top) ? 1 : 2;
        g = 4;
        e || 1 !== f ? e || 2 !== f ? e && 1 === f ? g = 7 : e && 2 === f && (g = 8) : g = 6 : g = 5;
        d && (g |= 16);
        d = String(g);
        if (a !== a.top)
            for (e = a; e && e !== e.top && _.Rk(e) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; e = e.parent);
        c.call(b, "frm", {
            value: d || null
        })
    }, function(a, b) {
        var c = b.set;
        a = By(a.ma.O.ba, pt, 36);
        a = Ce(a, 1, _.Vc, 2);
        c.call(b, "ppt", {
            value: a,
            options: {
                Ta: "~"
            }
        })
    }, function(a, b) {
        a = a.oa.B;
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
        var c = a.ma,
            d = c.networkCode,
            e = c.O.T;
        a = a.lk.kd;
        var f = [],
            g = !1;
        c = _.y(c.X);
        for (var h = c.next(); !h.done; h = c.next()) {
            var k = void 0;
            (null == (k = e[h.value.getDomId()]) ? 0 : _.Q(k, 30)) ? (f.push("1"), g = !0) : f.push("")
        }
        b.set("is_cau", {
            value: g ? f : null
        });
        _.E(oD) && b.set("no_cau_info", {
            value: a.has(d) ? "1" : null
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.O.T;
        a = a.oa.B;
        var e = [],
            f = !1;
        c = _.y(c.X);
        for (var g = c.next(); !g.done; g = c.next()) g = lr(d[g.value.getDomId()]), (_.H = [8, 9], _.z(_.H, "includes")).call(_.H, g) ? (f = 9 === g ? "right" : "left", e.push(_.Bj(a).sideRailPlasParam.get(f)), f = !0) : e.push("");
        f && b.set("plas", {
            value: e,
            options: {
                Ta: "|"
            }
        })
    }, function(a, b) {
        var c = a.oa,
            d = c.B;
        c = c.Z;
        var e = a.ma,
            f = e.O.ba;
        e = e.networkCode;
        a = a.Fk.Gk;
        if (_.E(sD)) {
            var g;
            (g = !a) || (g = !He(a, 1, yd).get(e));
            a = g;
            var h;
            f = !(null == (h = Wu(f)) || !_.Q(h, 9));
            d = new nG(d, {
                Vl: a,
                Ul: f
            });
            d = _.Q(c, 8) || (d.options.Ul || !ah(c)) && d.options.Vl ? void 0 : (new dh(d.g.document)).get("__eoi") || "";
            d && b.set("eo_id_str", {
                value: d
            })
        }
    }, function(a, b) {
        a = a.ma;
        var c = a.X,
            d = a.O.T;
        _.E(eD) && b.set("eov", {
            value: Up(c, function(e) {
                var f, g;
                return !!(null == (f = d[e.getDomId()]) ? 0 : null == (g = _.um(f, GL, 31)) ? 0 : _.Q(g, 1))
            })
        })
    }]);
    var mP = function(a, b, c) {
        Y.call(this, a, 798);
        this.output = W(this);
        this.j = CH(this, b);
        this.o = X(this, c)
    };
    _.T(mP, Y);
    mP.prototype.g = function() {
        var a = this,
            b = new _.u.Map;
        if (this.j.value) {
            var c = this.j.value,
                d = c.oa.nb,
                e = c.qb.ye;
            c = _.y(c.ma.X);
            for (var f = c.next(); !f.done; f = c.next()) {
                f = f.value;
                var g = void 0,
                    h = null == (g = e) ? void 0 : g.get(f);
                b.set(f, d ? nP(this, f, h) : function() {
                    return a.o.value
                })
            }
        }
        this.output.G(b)
    };
    var nP = function(a, b, c) {
        return zi(function() {
            var d = _.z(Object, "assign").call(Object, {}, a.j.value);
            d.ma.sg = !0;
            d.ma.X = [b];
            c && (d.qb.ye = new _.u.Map, d.qb.ye.set(b, c));
            return Iq(Vu(d)).url
        })
    };
    var oP = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 810);
        this.o = b;
        this.nb = c;
        this.O = d;
        this.R = e;
        this.B = f;
        this.Z = g;
        this.j = W(this)
    };
    _.T(oP, Y);
    oP.prototype.g = function() {
        var a = this,
            b = this.o;
        !this.nb && 1 < this.o.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.M) return !1;
            var d = a.O.T[c.getDomId()],
                e;
            if (e = !(sq(lr(d)) && (_.H = Nf(ND), _.z(_.H, "includes")).call(_.H, String(lr(d))))) e = a.R, Ii(a.B) && 4 === lr(d) ? (O(e, vK("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1, e = !e;
            if (e) {
                e = a.context;
                var f = a.R,
                    g = a.B,
                    h = a.Z;
                d = lr(d);
                5 !== d ? c = !1 : (e.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, e, {
                    U: 1
                })), (g = mq(g, !HM(c), h)) ? (gq(f, g, d, c.getAdUnitPath()), e.V.log(578856259, mj, _.z(Object, "assign").call(Object, {}, e, {
                    xl: g
                })), e.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, e, {
                    U: 2
                }))) : e.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, e, {
                    U: 3
                })), c = !!g);
                e = !c
            }
            return e
        });
        30 < b.length && (O(this.R, uK("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.j.G(b)
    };
    var pP = function(a, b, c) {
        Y.call(this, a, 919);
        this.j = b;
        this.Z = c;
        this.output = W(this)
    };
    _.T(pP, Y);
    pP.prototype.g = function() {
        var a, b = !(null == (a = this.j) ? 0 : _.Q(a, 9)) && !!ah(this.Z);
        this.output.G(b)
    };
    var qP = function(a, b, c, d, e, f) {
        Y.call(this, a, 928);
        this.requestId = b;
        this.C = f;
        this.output = BH(this);
        this.o = X(this, c);
        e && (this.j = X(this, e));
        EH(this, d)
    };
    _.T(qP, Y);
    var rP = function(a) {
        return a.j ? a.C.split(",").some(function(b) {
            var c;
            return null == (c = a.j) ? void 0 : c.value.has(b)
        }) : !1
    };
    qP.prototype.g = function() {
        var a = this.context,
            b = this.requestId,
            c = this.o.value.length,
            d = rP(this);
        if (a.Oc) {
            var e = a.Ra,
                f = e.Nc;
            a = ql(a);
            var g = new DC;
            b = _.$i(g, 2, b);
            c = _.ul(b, 1, c);
            d = _.tl(c, 3, d);
            d = _.gj(a, 7, vl, d);
            f.call(e, d)
        }
        this.output.notify()
    };
    var $u = new _.u.Map;
    var sP = function(a, b, c, d) {
        Y.call(this, a, 867);
        this.Aa = b;
        this.O = c;
        this.output = BH(this);
        this.j = X(this, d)
    };
    _.T(sP, Y);
    sP.prototype.g = function() {
        for (var a = _.y(this.j.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = wm(this.O.T[b.getDomId()], 20);
            Ps(b, vJ, 808, {
                qk: c,
                cm: d
            });
            Ps(this.Aa, "slotRequested", 705, new hN(b, "publisher_ads"))
        }
        this.output.notify()
    };
    var tP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R, K, Z, qa, wa, aa, ha, vb, Ta, db, Ab, Pa, Ib) {
        Y.call(this, a, 785, _.Lf(bE));
        this.nb = b;
        this.L = c;
        this.Ea = d;
        this.O = e;
        this.Zb = f;
        this.networkCode = g;
        this.Cd = h;
        this.Bd = k;
        this.ig = l;
        this.timer = m;
        this.Z = n;
        this.isSecureContext = p;
        this.Nb = r;
        this.B = v;
        this.Ge = w;
        this.j = W(this);
        this.o = W(this);
        this.P = W(this);
        EH(this, R);
        this.Ma = DH(this, x);
        this.W = DH(this, B);
        this.H = X(this, C);
        G && (this.C = _.E(eE) ? new uH(G.zd) : DH(this, G.zd), G.re && (this.Hb = CH(this, G.re)));
        P && (this.J = _.E(eE) ? new uH(P.Sc) : DH(this, P.Sc));
        EH(this, R);
        K && (this.jb = X(this, K));
        Z && (this.fa = new uH(Z));
        qa && (this.bb = CH(this, qa));
        wa && (this.ra = X(this, wa));
        aa && EH(this, aa);
        ha && (this.xa = X(this, ha));
        F && (this.ga = CH(this, F));
        vb && (this.ob = CH(this, vb.Tg));
        Ta && (this.uc = X(this, Ta));
        db && (this.ua = CH(this, db));
        Ab && (this.ka = CH(this, Ab));
        Pa && (this.pb = X(this, Pa));
        Ib && (this.qc = DH(this, Ib))
    };
    _.T(tP, Y);
    tP.prototype.g = function() {
        if (this.H.value.length) {
            var a = null;
            if (this.C) {
                var b = this.C.value;
                a = b ? b : this.J && !this.J.Lc() ? 9 : this.C.Lc() ? null : 1
            }
            this.W.value && (this.L.Jb = this.W.value);
            var c, d, e, f, g, h, k, l, m, n, p, r, v, w, x;
            b = {
                oa: {
                    B: this.B,
                    context: this.context,
                    L: this.L,
                    Ea: this.Ea,
                    Z: this.Z,
                    nb: this.nb,
                    ig: this.ig,
                    isSecureContext: this.isSecureContext,
                    Nb: this.Nb
                },
                ma: {
                    networkCode: this.networkCode,
                    X: this.H.value,
                    O: this.O,
                    Zb: this.Zb,
                    sg: !1
                },
                Nm: {
                    Cd: this.Cd,
                    Bd: this.Bd
                },
                Gl: {
                    Wk: null != (w = this.Ma.value) ? w : "0"
                },
                qb: {
                    ye: null == (c = this.ga) ? void 0 : c.value
                },
                Am: {
                    Dm: a,
                    Bm: null == (d = this.Hb) ? void 0 : d.value
                },
                gm: {
                    wl: null != (x = null == (e = this.jb) ? void 0 : e.value) ? x : void 0,
                    sf: null == (f = this.fa) ? void 0 : f.value,
                    Hk: null == (g = this.ra) ? void 0 : g.value
                },
                Ug: {
                    Yk: null == (h = this.bb) ? void 0 : h.value,
                    Sk: null == (k = this.xa) ? void 0 : k.value
                },
                Ql: {
                    Pl: null == (l = this.ob) ? void 0 : l.value
                },
                Jm: {
                    Xg: null == (m = this.uc) ? void 0 : m.value,
                    Se: null == (n = this.ua) ? void 0 : n.value,
                    qm: null == (p = this.pb) ? void 0 : p.value,
                    Uj: null == (r = this.qc) ? void 0 : r.value
                },
                Fk: {
                    Gk: null == (v = this.ka) ? void 0 : v.value
                },
                lk: {
                    kd: this.Ge.kd
                }
            };
            this.o.G(b);
            c = Iq(Vu(b));
            d = c.url;
            jC(this.timer, (9).toString(), 9, c.Ch);
            this.j.G(d);
            this.P.G(Ru(b) ? new Tw(Rw, "https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : new Tw(Rw, "https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.j.G(""), this.o.ca()
    };
    var uP = function(a, b, c, d, e, f) {
        Y.call(this, a, 878);
        this.j = b;
        this.aa = c;
        this.O = d;
        this.B = e;
        this.output = BH(this);
        f && EH(this, f)
    };
    _.T(uP, Y);
    uP.prototype.g = function() {
        for (var a = _.y(this.j), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Sm(b, this.aa);
            if (!Rm(b, this.aa) && c) {
                a: {
                    var d = c;
                    var e = this.O.T[b.getDomId()],
                        f = 0,
                        g = 0;e = _.y(Bm(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.y(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Ip(Tm(d, this.B)) || !d.parentElement || Ip(Tm(d.parentElement, this.B))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.O;f = g.ba;g = g.T[b.getDomId()];Hp(c, Zm(b), eq(f, g), d)
            }
        }
        this.output.notify()
    };
    var vP = function(a, b, c, d, e, f, g, h) {
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
        xP = function(a, b) {
            if (b)
                if (1 !== a.g && 2 !== a.g) wP(a, new zG("state err: (" + ([a.g, a.A.length].join() + ")")));
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
                                    ub: aB(c)
                                }, f.X, f.Z, f.C, f.I, null != (g = f.o) ? g : void 0), f.j = ""
                            } catch (h) {}
                            f.g = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.A = b.substr(c)
                }
        },
        wP = function(a, b) {
            a.g = 4;
            try {
                a.K(b)
            } catch (c) {}
        },
        yP = function(a) {
            1 !== a.g || a.A ? wP(a, new zG("state err (" + ([a.g, a.A.length].join() + ")"))) : (a.g = 3, a.M(a.l, a.X, a.Z))
        };
    var zP = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Y.call(this, a, 788);
        this.ka = b;
        this.ga = c;
        this.fa = d;
        this.Z = e;
        this.L = f;
        this.O = g;
        this.H = BH(this);
        this.C = W(this);
        this.o = W(this);
        this.W = 0;
        this.P = !1;
        this.j = null != p ? p : new XMLHttpRequest;
        this.J = X(this, h);
        k && (this.ua = CH(this, k));
        this.xa = X(this, l);
        EH(this, m);
        this.ra = X(this, n)
    };
    _.T(zP, Y);
    zP.prototype.g = function() {
        var a = this,
            b = this.xa.value;
        if (b) {
            var c, d = new vP(this.ka, this.ga, this.fa, this.J.value, this.Z, null == (c = this.ua) ? void 0 : c.value);
            this.j.open("GET", b);
            this.j.withCredentials = this.ra.value;
            this.j.onreadystatechange = function() {
                AP(a, d, !1)
            };
            this.j.onload = function() {
                AP(a, d, !0);
                a.C.G(a.j.status);
                if (300 <= a.j.status) {
                    var e;
                    a.o.G(null != (e = a.j.responseText) ? e : "")
                } else a.o.G("")
            };
            this.j.onerror = function() {
                wP(d, new AG("XHR error"));
                a.J.value.forEach(function(e) {
                    Ss(e, a.L, a.O, "")
                });
                a.C.G(0);
                a.o.G("")
            };
            this.j.send()
        }
        this.H.notify()
    };
    var AP = function(a, b, c) {
        try {
            if (3 === a.j.readyState || 4 === a.j.readyState)
                if (300 <= a.j.status) a.P || (wP(b, new AG("xhr_err-" + a.j.status)), a.P = !0);
                else {
                    var d = a.j.responseText.substr(a.W);
                    d && xP(b, d);
                    a.W = a.j.responseText.length;
                    c && 4 === a.j.readyState && yP(b)
                }
        } catch (e) {
            wP(b, e)
        }
    };
    var BP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Y.call(this, a, 1078);
        this.W = b;
        this.P = c;
        this.J = d;
        this.Z = e;
        this.L = f;
        this.O = g;
        this.C = BH(this);
        this.o = W(this);
        this.j = W(this);
        this.H = X(this, h);
        k && (this.ga = CH(this, k));
        l && (this.ka = X(this, l));
        this.ra = X(this, m);
        EH(this, n);
        this.fa = X(this, p);
        if (null == r ? 0 : r.qe) this.xa = CH(this, r.qe);
        v && (this.ua = X(this, v));
        w && (this.Ma = CH(this, w))
    };
    _.T(BP, Y);
    BP.prototype.g = function() {
        var a = this,
            b = this.ra.value;
        if (b) {
            var c, d, e, f = new vP(this.W, this.P, this.J, this.H.value, this.Z, null == (c = this.ga) ? void 0 : c.value, null == (d = this.ka) ? void 0 : d.value, null == (e = this.Ma) ? void 0 : e.value);
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
                CP(a, k, f)
            }).catch(function(k) {
                DP(a, k, f);
                a.H.value.forEach(function(l) {
                    Ss(l, a.L, a.O, "")
                })
            })
        }
        this.C.notify()
    };
    var CP = function(a, b, c) {
            a.o.G(b.status);
            if (300 <= b.status) a.j.La(b.text()), wP(c, new AG("fetch_status-" + b.status));
            else {
                a.j.G("");
                var d, e = null == (d = b.body) ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
                e ? e.read().then(function(f) {
                    EP(a, f, e, c)
                }).catch(function(f) {
                    DP(a, f, c)
                }) : wP(c, new AG("failed_reader"))
            }
        },
        EP = function(a, b, c, d) {
            var e = b.value;
            b.done ? yP(d) : (xP(d, e), c.read().then(function(f) {
                EP(a, f, c, d)
            }).catch(function(f) {
                DP(a, f, d)
            }))
        },
        DP = function(a, b, c) {
            wP(c, new AG("fetch error: " + (b instanceof Error ? b.message : void 0)));
            a.o.G(0);
            a.j.G("")
        };
    var FP = function(a, b, c, d, e) {
        Y.call(this, a, 918);
        this.O = b;
        this.timer = c;
        this.output = BH(this);
        this.j = X(this, e);
        EH(this, d)
    };
    _.T(FP, Y);
    FP.prototype.g = function() {
        var a = this.j.value;
        a.length && Ns(this.timer, "3", Os(this.O.T[a[0].getDomId()], 20));
        this.output.notify()
    };
    var GP = function(a, b, c, d, e) {
        Y.call(this, a, 803);
        this.j = b;
        this.slotId = c;
        this.Ea = d;
        this.Z = e;
        this.output = W(this)
    };
    _.T(GP, Y);
    GP.prototype.g = function() {
        var a = JSON.parse(this.j),
            b = lp(a, Fx);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.j);
        a = Te(dA, a);
        b = Ce(a, 27, Xc, 2);
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.Jf(gh).g(c);
        Kn(4, this.context, this.Ea, this.Z);
        Ps(this.slotId, uJ, 800, a);
        this.output.G(a)
    };
    var HP = function(a, b, c, d) {
        Y.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.j = X(this, d)
    };
    _.T(HP, Y);
    HP.prototype.g = function() {
        var a = this;
        Fn(this.j.value, 11) && (_.GJ(this.L, this.slotId), DJ(this.L, this.slotId, function() {
            _.HJ(a.L, a.slotId)
        }))
    };
    var IP = function(a, b, c, d) {
        nk.call(this);
        this.context = a;
        this.slotId = b;
        b = d.L;
        var e = d.Z,
            f = d.Za,
            g = d.Ea;
        a = d.Sa;
        d = d.R;
        c = new GP(this.context, c, this.slotId, g, e);
        J(this, c);
        e = new SM(this.context, e, g, c.output);
        J(this, e);
        f = new UM(this.context, this.slotId, f, c.output);
        J(this, f);
        b = new HP(this.context, this.slotId, b, c.output);
        J(this, b);
        a = JH(this, 1229, uv, {
            Ng: c.output
        }, {
            Sa: a
        }, {
            output: void 0
        });
        JH(this, 1220, yv, {
            Ng: c.output
        }, {
            R: d,
            context: this.context
        }, {});
        this.g = {
            vl: a.output
        }
    };
    _.T(IP, nk);
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var JP = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        KP = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = JP[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var LP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R, K) {
        Y.call(this, a, 973);
        this.ra = b;
        this.R = c;
        this.J = d;
        this.W = e;
        this.O = f;
        this.L = g;
        this.Ea = h;
        this.ga = k;
        this.P = l;
        this.H = m;
        this.je = n;
        this.ka = p;
        this.networkCode = r;
        this.isSecureContext = v;
        this.Nb = w;
        this.Za = x;
        this.B = B;
        this.aa = C;
        this.j = R;
        this.ua = K;
        this.o = [];
        this.C = CH(this, F);
        this.fa = X(this, G);
        this.xa = X(this, P);
        this.j.Ib && EH(this, this.j.Ib.Hh)
    };
    _.T(LP, Y);
    LP.prototype.g = function() {
        var a = this,
            b = new nk;
        _.S(this, b);
        var c = this.fa.value,
            d = Wu(this.O.ba);
        this.C.value && this.ua.G(this.C.value);
        var e = Lr(this.context, this.aa);
        e && _.S(b, e.Ka);
        var f = Vq(this.context, _.um(this.O.ba, cu, 5), this.L, this.J, null == e ? void 0 : e.Nl.ce);
        e = f.wg;
        (f = f.ol) && _.S(b, f);
        f = new uP(this.context, this.J, this.aa, this.O, this.B, e);
        J(b, f);
        var g = !!_.Q(this.O.ba, 6);
        e = new oP(this.context, this.J, g, this.O, this.R, this.B, c);
        J(b, e);
        var h, k = new ML(this.context, d, c, (null == (h = _.um(this.O.ba, pt, 36)) ? void 0 : Ce(h, 1, _.Vc, 2)) || []);
        J(b, k);
        h = this.j;
        var l = h.Hl,
            m = h.Rl,
            n = h.Em;
        h = h.Ge;
        var p, r = null != (p = this.j.Ib) ? p : {},
            v = r.Kd,
            w = r.td,
            x = r.Bb,
            B = r.Lb,
            C = r.Yc,
            F = r.di;
        p = r.hc;
        var G = r.jg,
            P = r.Mh;
        r = r.Kb;
        if (_.E(TD)) {
            var R = new PN(this.context, P);
            var K = new QN(this.context, P);
            J(b, R);
            J(b, K);
            var Z = R.j;
            R = K.j;
            K = K.o
        }
        if (G = Ws(this.context, n, this.O.T, c, this.C.value, e.j, k.output, G, R)) {
            var qa = G.Gm;
            G = G.Fm;
            var wa = qa.Pg;
            qa = qa.qg;
            _.S(b, G)
        }
        if (K = ss(this.context, n, this.B.navigator, k.output, K)) {
            var aa = K.sj;
            K = K.Hm;
            var ha = aa.aj;
            aa = aa.si;
            K && _.S(b, K)
        }
        _.E(lE) && (aa = W(this), aa.G(n.lh));
        var vb = new fO(this.context, this.B);
        J(b, vb);
        G = (null != v ? v : {}).Yb;
        var Ta;
        K = null == (Ta = this.j.Ib) ? void 0 : Ta.se;
        Ta = new LN(this.context, l.Il);
        J(b, Ta);
        if (l = aq(this.context, this.R, this.O.T, this.networkCode, e.j, v, x)) {
            var db = l.Wj;
            _.S(this, l.Ka)
        }
        if (qa = Nr(this.context, m, qa, this.O.T, e.j, P)) {
            var Ab = qa.vf;
            _.S(this, qa.Ka)
        }
        if (Z = fs(this.context, this.C.value, K, k.output, Z)) {
            var Pa = Z.Cm;
            _.S(this, Z.Ka);
            this.o.push(Pa.zd.promise)
        }
        if (n.Rj) {
            _.E(Ht);
            var Ib = new KO(this.context, this.B.navigator, e.j);
            J(b, Ib);
            Ib = Ib.output
        }
        Z = window.isSecureContext && _.E(qE) ? "wbn" : "ldjh";
        var jd = ++this.L.I;
        qa = "wbn" === Z ? KP().toLowerCase() : void 0;
        k = this.je;
        var cc, Zb;
        db = new tP(this.context, g, this.L, this.Ea, this.O, k.Zb, this.networkCode, k.Cd, k.Bd, this.xa.value, _.Jf(Dl), c, this.isSecureContext, this.Nb, this.B, h, Ta.output, vb.output, e.j, null == (cc = db) ? void 0 : cc.ih, Pa, K, f.output, null == w ? void 0 : w.Hg, G, x, B, C, F, Ab, ha, null == (Zb = this.j.Ib) ? void 0 : Zb.jg, r, R, Ib);
        J(b, db);
        Ab = new FP(this.context, this.O, _.Jf(Dl), db.j, e.j);
        J(b, Ab);
        this.context.mm && JH(b, 1231, bv, {
            so: db.j,
            X: e.j
        }, {
            Ba: this.context.Ra
        }, {});
        d = new pP(this.context, d, c);
        J(b, d);
        cc = Bl(this.context, 646, function(Ec, jc, dc, Id, Oc, lf, ve, Jd) {
            gv(function() {
                return void MP(a, Oc, Ec, jc, dc, Id, lf, ve, Jd)
            }, Ec, a.B)
        });
        Zb = Bl(this.context, 647, function(Ec, jc, dc) {
            gv(function() {
                return void NP(a, jd, dc, jc, Ec)
            }, -1, a.B)
        });
        "ldjh" === Z ? (R = OP(this, 289, "strm_err"), ev() ? (Pa = new BP(this.context, cc, R, Zb, c, this.L, this.O, e.j, wa, ha, db.j, Ab.output, d.output, Pa, aa, Ib), J(b, Pa), wa = Pa.C, ha = Pa.o, Pa = Pa.j) : (Pa = new zP(this.context, cc, R, Zb, c, this.L, this.O, e.j, wa, db.j, Ab.output, d.output), J(b, Pa), wa = Pa.H, ha = Pa.C, Pa = Pa.o), ha = JH(b, 1221, Yu, {
            status: ha,
            responseText: Pa
        }, {
            R: this.R
        }, {}).finished, this.o.push(ha.promise)) : (ha = new OO(this.context, cc, OP(this, 1042, "Unknown web bundle error."), Zb, Z, qa, c, this.aa, e.j, wa, db.j, db.P, Ab.output, d.output), $t(b, ha), wa = new Jr, vH(wa, wk(ha).then(function() {})));
        p = new qP(this.context, jd, e.j, wa, p, this.networkCode);
        J(b, p);
        ha = new mP(this.context, db.o, db.j);
        J(b, ha);
        ha = new sP(this.context, this.H.Aa, this.O, ha.output);
        J(b, ha);
        ha = new XN(this.context, this.ga, this.B, ha.output);
        J(b, ha);
        ha = new BN(this.context, this.O, this.P, e.j, ha.output);
        J(b, ha);
        e = new LM(this.context, this.L, this.O, this.aa, e.j, ha.output);
        J(b, e);
        ha = new eO(this.context, Wj(this.B), this.B, c, wa);
        J(b, ha);
        1 === jd && (c = new DM(this.context, this.B, c, K, wa), J(b, c), this.o.push(c.output.promise));
        this.o.push(p.output.promise, e.output.promise, ha.output.promise);
        wk(b)
    };
    var MP = function(a, b, c, d, e, f, g, h, k) {
            var l, m, n, p;
            return _.rb(function(r) {
                l = f[c];
                if (!l) return Fl(a.context, 646, Error("missing slot")), r.return();
                0 === c && (m = Os(a.O.T[l.getDomId()], 20), Ns(_.Jf(Dl), "4", m));
                return r.yield(PP(a, l, d, e, b, null == (n = g) ? void 0 : n[l.getId()], h, null == (p = k) ? void 0 : p.get(l)), 0)
            })
        },
        NP = function(a, b, c, d, e) {
            var f, g, h;
            return _.rb(function(k) {
                if (1 == k.g) {
                    var l = a.context,
                        m = e + 1,
                        n = d.length;
                    if (l.Oc) {
                        var p = l.Ra,
                            r = p.Nc;
                        l = ql(l);
                        var v = new EC;
                        v = _.$i(v, 3, b);
                        m = _.ul(v, 1, m);
                        n = _.ul(m, 2, n);
                        n = _.gj(l, 8, vl, n);
                        r.call(p, n)
                    }
                    f = e + 1
                }
                if (3 != k.g) {
                    if (!(f < d.length)) return k.yield(QP(a), 0);
                    if (!d[f]) {
                        k.g = 3;
                        return
                    }
                    p = new dA;
                    p = Sh(p, 8, !0);
                    g = bl(p);
                    h = '{"empty":' + g + "}";
                    return k.yield(MP(a, c, f, h, {
                        kind: 0,
                        ub: ""
                    }, d), 3)
                }++f;
                k.g = 2
            })
        },
        PP = function(a, b, c, d, e, f, g, h) {
            var k, l, m, n, p, r, v, w, x, B, C, F, G, P;
            return _.rb(function(R) {
                if (1 == R.g) return k = {
                    Z: e,
                    Za: a.Za,
                    L: a.L,
                    Ea: a.Ea,
                    Sa: d,
                    R: a.R
                }, l = new IP(a.context, b, c, k), R.yield(wk(l), 2);
                m = R.A;
                p = n = m.vl;
                r = p.isEmpty;
                v = p.Na;
                w = p.na;
                x = p.Om;
                B = p.Fb;
                C = p.eg;
                cq(a.context, null == (F = a.j.Ib) ? void 0 : F.Kd, x, B, v);
                _.E(sD) && Bq(a.context, a.Ea, C);
                if (b.M) return R.return();
                G = !!w;
                _.E(jE) || G && wp("gpt_td_init", function(K) {
                    Wo(K, a.context);
                    Xo(K, "noFill", r ? "1" : "0");
                    Xo(K, "publisher_tag", "gpt");
                    var Z = _.um(w, $z, 5);
                    Z && (Xo(K, "winner_qid", Z.getEscapedQemQueryId()), Xo(K, "xfpQid", _.I(Z, 6)))
                }, 1);
                (P = Kq("google_norender")) || r && !G ? Ss(b, a.L, a.O, v) : jP(a.ka, a.ra, a.R, b, r || P, G, a.L, a.O, a.Za, n, e, f, g, a.H.Aa, a.P, a.j, h);
                l.za();
                R.g = 0
            })
        },
        OP = function(a, b, c) {
            return Bl(a.context, b, function(d) {
                d = d instanceof Error ? d : Error();
                d.message = d.message || c;
                Fl(a.context, b, d);
                QP(a)
            })
        },
        QP = function(a) {
            return _.rb(function(b) {
                if (1 == b.g) {
                    var c = a.L,
                        d = a.W,
                        e = c.A.get(d) - 1;
                    0 === e ? c.A.delete(d) : c.A.set(d, e);
                    return e ? b.return() : b.yield(_.u.Promise.all(a.o), 2)
                }
                Ps(a.H.ji, yJ, 965, a.W);
                b.g = 0
            })
        };
    var RP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R) {
        Y.call(this, a, 885);
        this.fa = b;
        this.R = c;
        this.O = d;
        this.L = e;
        this.Ea = f;
        this.je = g;
        this.P = h;
        this.H = k;
        this.j = l;
        this.o = m;
        this.W = n;
        this.isSecureContext = p;
        this.fb = r;
        this.J = v;
        this.Nb = w;
        this.Za = x;
        this.B = B;
        this.aa = C;
        this.C = P;
        this.ga = R;
        this.ka = X(this, F);
        EH(this, G)
    };
    _.T(RP, Y);
    RP.prototype.g = function() {
        var a = this.ka.value;
        if (a.length) {
            var b = this.L,
                c = this.j,
                d = a.length;
            b.A.has(c);
            b.A.set(c, d);
            a = _.y(a);
            for (b = a.next(); !b.done; b = a.next()) {
                c = b.value;
                var e = void 0;
                b = c.networkCode;
                d = c.X;
                c = new nk;
                _.S(this, c);
                var f = Hq(this.context, this.J, null == (e = this.C.Ib) ? void 0 : e.Ni);
                e = f.Cc;
                var g = f.mg;
                _.S(c, f.Ka);
                e = Mo(this.context, this.R, this.L, this.B, e, g, 3, Wu(this.O.ba));
                f = e.kb;
                _.S(c, e.Ka);
                e = new RN(this.context, this.B, f);
                J(c, e);
                e = new RM(this.context, this.B, f);
                J(c, e);
                e = new Xt(this.context, this.B, f);
                J(c, e);
                g = new kP(this.context, this.Ea, this.fb, f);
                J(c, g);
                b = new LP(this.context, this.fa, this.R, d, this.j, this.O, this.L, this.Ea, this.P, this.H, this.o, this.je, this.W, b, this.isSecureContext, this.Nb, this.Za, this.B, this.aa, e.output, f, g.o, this.C, this.ga);
                J(c, b);
                wk(c)
            }
        } else Ps(this.o.ji, yJ, 965, this.j)
    };
    var SP = new _.u.Map,
        TP = function(a, b, c, d) {
            d = void 0 === d ? SP : d;
            Y.call(this, a, 834);
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
    _.T(TP, Y);
    TP.prototype.g = function() {};
    TP.prototype.C = function(a) {
        var b = this,
            c, d;
        return _.rb(function(e) {
            if (1 == e.g) {
                if (a.M) return e.return();
                b.j.has(a) || (b.j.set(a, _.E(WD) ? Av(a) : zv(a)), _.jp(a, function() {
                    return void b.j.delete(a)
                }));
                c = b.j.get(a);
                return e.yield(c(), 2)
            }
            d = e.A;
            if (b.M) return e.return();
            if (d) return e.return(a);
            O(b.R, DK(a.getAdUnitPath()));
            return e.return()
        })
    };
    var UP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B) {
        _.V.call(this);
        var C = this;
        this.context = a;
        this.C = b;
        this.R = c;
        this.L = d;
        this.Ea = e;
        this.Aa = f;
        this.K = g;
        this.j = h;
        this.o = k;
        this.isSecureContext = l;
        this.fb = m;
        this.I = n;
        this.Nb = p;
        this.Za = r;
        this.aa = v;
        this.B = w;
        this.D = x;
        this.H = B;
        this.g = new _.u.Map;
        this.l = new qJ(a);
        _.S(this, this.l);
        this.l.listen(yJ, function(F) {
            F = F.detail;
            var G = C.g.get(F);
            G && (C.g.delete(F), G.za())
        })
    };
    _.T(UP, _.V);
    var VP = function(a, b, c, d) {
        var e = ++a.L.D;
        a.g.has(e);
        var f = new nk;
        a.g.set(e, f);
        b = new TP(a.context, a.R, b);
        J(f, b);
        var g = JH(f, 845, Ev, {
            X: b.o
        }, {
            T: d.T
        }, {
            lj: void 0,
            vj: void 0
        });
        b = g.vj;
        g = JH(f, 847, Cv, {
            X: g.lj
        }, {
            L: a.L,
            nb: !!_.Q(d.ba, 6),
            il: Kq("google_nofetch")
        }, {
            he: void 0
        }).he;
        b = JH(f, 864, zq, {
            X: b
        }, {
            L: a.L,
            O: d,
            aa: document
        }, {}).finished;
        a = new RP(a.context, a.C, a.R, d, a.L, a.Ea, c, a.K, a.j, e, {
            ji: a.l,
            Aa: a.Aa
        }, a.o, a.isSecureContext, a.fb, a.I, a.Nb, a.Za, a.B, a.aa, g, b, a.D, a.H);
        J(f, a);
        wk(f)
    };
    var WP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        QO.call(this, a, c, h);
        this.context = a;
        this.L = d;
        this.j = new _.u.Set;
        this.I = {};
        this.C = new iP(a, d);
        this.H = new UP(a, b, c, d, new _.HG(window), this.l, m, e, this.C, f, g, k, l, n, document, window, p, r);
        _.S(this, this.H)
    };
    _.T(WP, QO);
    WP.prototype.getName = function() {
        return "publisher_ads"
    };
    WP.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.ja(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        jt(this);
        var h = ao(c, this.context, this.R, a, b, f),
            k = h.slotId;
        h = h.Fa;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            bt(this, null != (l = g) ? l : k.getDomId(), c)
        } else O(this.R, Vl("PubAdsService.display", [a, b, d]))
    };
    var bt = function(a, b, c) {
        var d = XP(b, c);
        c = d.slotId;
        var e = d.Bk;
        d = d.Ck;
        if (c) {
            if (b = an(), (d = kL(b, c.getDomId())) && !_.Q(d, 19))
                if (e && b.l.set(c, e), Sm(c) || Dm(lr(d))) {
                    if (Sh(d, 19, !0), e = Om(b.g, b.A), a.enabled) {
                        jt(a);
                        a.enabled && FJ(a.L, c);
                        a.R.info(eK());
                        b = e.ba;
                        d = e.T;
                        var f = _.Q(b, 6);
                        if (f || !a.L.xc(c)) f && (f = Sm(c)) && Ps(c, tJ, 778, f), _.Q(b, 4) && (d = d[c.getDomId()], vq(d, b) && !a.L.xc(c) && wq(c, document, d, b)), oL(a, e, c)
                    }
                } else O(a.R, VJ(String(ck(d, 1)), String(ck(d, 2))), c)
        } else d ? a.R.error(WJ(d)) : a.R.error(Vl("googletag.display", [String(b)]))
    };
    WP.prototype.slotAdded = function(a, b) {
        var c = this;
        _.Q(b, 17) || this.enabled && FJ(this.L, a);
        Ps(this.l, wJ, 724, {
            hh: a.getDomId(),
            T: b
        });
        a.listen(Rs, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new cN(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0, f.slotContentChanged = !1);
            e = a.g.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            Ps(c.l, "slotRenderEnded", 708, f)
        });
        a.listen(uJ, function() {
            Ps(c.l, "slotResponseReceived", 709, new iN(a, c.getName()))
        });
        4 === lr(b) && YP(this, "rewardedSlotClosed", a, b);
        7 === lr(b) && YP(this, "gameManualInterstitialSlotClosed", a, b);
        QO.prototype.slotAdded.call(this, a, b)
    };
    var YP = function(a, b, c, d) {
            _.jp(c, a.l.listen(b, function(e) {
                c.g === e.detail.slot && (e = {}, ZP(a, [c], an().g, (e[c.getDomId()] = d, e), a.L))
            }))
        },
        oL = function(a, b, c) {
            var d = $P(a, b, c);
            aQ(a, d, b, {
                Zb: 1
            });
            b = c.getAdUnitPath();
            if (c = a.I[b]) {
                c = _.y(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, aQ(a, d.X, d.O, d.je);
                delete a.I[b]
            }
        },
        $P = function(a, b, c) {
            var d = b.ba,
                e = b.T[c.getDomId()];
            return _.Q(d, 4) ? [] : !_.Q(d, 6) || (null == e ? 0 : _.Q(e, 17)) ? (a.j.add(c), _.jp(c, function() {
                return void a.j.delete(c)
            }), [c]) : a.g.filter(function(f) {
                if (a.j.has(f) || _.E(YD) && !Sm(f) && !Dm(lr(e))) return !1;
                a.j.add(f);
                _.jp(f, function() {
                    return void a.j.delete(f)
                });
                return !0
            })
        },
        aQ = function(a, b, c, d) {
            a.R.info(lK());
            if (bQ(a, b, d, c) && 1 !== d.Zb)
                for (b = _.y(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), Ps(a.l, xJ, 725, {
                    hh: d,
                    T: c.T[d]
                })
        },
        bQ = function(a, b, c, d) {
            b = b.filter(function(e) {
                var f = d.T[e.getDomId()],
                    g = _.xq(a.L, e);
                !1 === g && O(a.R, VK(String(lr(f)), e.getAdUnitPath()));
                if (!g) return !1;
                (_.H = [5, 4, 7], _.z(_.H, "includes")).call(_.H, lr(f)) && _.GJ(a.L, e);
                return !0
            });
            if (!b.length) return null;
            VP(a.H, b, c, d);
            return b
        };
    WP.prototype.refresh = function(a, b, c) {
        c = void 0 === c ? {
            Zb: 2
        } : c;
        b = cQ(this, b);
        if (!b.length) return !1;
        dQ(this, a, b, c);
        return !0
    };
    var cQ = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.M) return !0;
                O(a.R, oK(String(d)));
                return !1
            })
        },
        dQ = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.enabled) {
                var h = _.y(c);
                e = h.next();
                for (f = {}; !e.done; f = {
                        yf: void 0
                    }, e = h.next()) f.yf = e.value, a.j.add(f.yf), _.jp(f.yf, function(k) {
                    return function() {
                        return void a.j.delete(k.yf)
                    }
                }(f));
                aQ(a, c, b, d)
            } else c.length && _.Q(b.ba, 6) ? (O(a.R, kK(g), e), e = e.getAdUnitPath(), f = null != (h = a.I[e]) ? h : [], f.push({
                X: c,
                O: b,
                je: d
            }), a.I[e] = f) : O(a.R, iK(g), e)
        };
    WP.prototype.o = function() {
        var a = an().g;
        if (_.Q(a, 6))
            for (var b = _.y(this.g), c = b.next(); !c.done; c = b.next()) this.enabled && FJ(this.L, c.value);
        tL(this, a);
        a = vo();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    WP.prototype.destroySlots = function(a) {
        a = QO.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = an();
            eQ(this, a, b.g, b.A)
        }
        return a
    };
    var vL = function(a, b, c, d) {
            if (!a.enabled) return O(a.R, jK(), d[0]), !1;
            var e = cQ(a, d);
            if (!e.length) return O(a.R, Vl("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.R.info(mK());
            eQ(a, e, b, c);
            return !0
        },
        eQ = function(a, b, c, d) {
            for (var e = _.y(b), f = e.next(); !f.done; f = e.next()) CJ(a.L, f.value);
            ZP(a, b, c, d, a.L)
        };
    WP.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.Jf(gh).g(a)
    };
    var ZP = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.y(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                LJ(a.C.L, g);
                var h = d[g.getDomId()];
                vq(h, c) && wq(g, f.document, h, c);
                yq(e, g)
            }
        },
        uL = function(a, b, c, d) {
            if ("string" !== typeof b || "string" !== typeof c) O(a.R, Vl("PubAdsService.setVideoContent", [b, c]));
            else {
                var e = Sh(d, 21, !0);
                b = ki(e, 22, b);
                ki(b, 23, c);
                tL(a, d)
            }
        },
        wL = function(a, b) {
            if (!a.enabled) return null;
            var c, d;
            return {
                vid: null != (c = _.I(b, 22)) ? c : "",
                cmsid: null != (d = _.I(b, 23)) ? d : ""
            }
        },
        tL = function(a, b) {
            _.Q(b, 21) && a.enabled && (a = bB(), _.hk(b, 29, _.qd(a)))
        },
        XP = function(a, b) {
            var c = "";
            if ("string" === typeof a) c = a, b = BM(b, c);
            else if (_.ja(a) && 1 == a.nodeType) {
                var d = a;
                c = d.id;
                b = BM(b, c)
            } else b = (_.H = [].concat(_.qi(b.X)), _.z(_.H, "find")).call(_.H, function(e) {
                return e.g === a
            });
            return {
                slotId: b,
                Bk: d,
                Ck: c
            }
        };
    var Ov = _.hw(["https://pagead2.googlesyndication.com/pagead/js/rum_debug.js"]),
        Pv = _.hw(["https://pagead2.googlesyndication.com/pagead/js/rum.js"]);
    var fQ = iw(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]),
        gQ = _.Gx(function() {
            YA("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        iQ = function(a, b) {
            var c = this;
            var d = void 0 === d ? _.z(String, "raw").call(String, fQ) : d;
            this.L = a;
            this.A = d;
            this.g = new _.u.Map;
            this.X = new _.u.Set;
            b.l = function(e) {
                return hQ(c, e)
            }
        };
    iQ.prototype.defineSlot = function(a, b, c, d, e) {
        a = ao(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.g;
        a.Me || b.error(Vl("googletag.defineSlot", [c, d, e]));
        return null
    };
    var ao = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Sb: f,
            Ri: void 0 === g ? !1 : g
        }) : {}
    };
    iQ.prototype.add = function(a, b, c, d, e, f) {
        var g = this,
            h = e.Sb,
            k = void 0 === e.format ? 0 : e.format,
            l = void 0 === e.Ri ? !1 : e.Ri;
        e = void 0 === e.xb ? !1 : e.xb;
        f = void 0 === f ? _.t : f;
        try {
            var m = new RegExp(this.A, "u");
            if (m.test("/1") && !m.test(c)) return b.error(YJ(c)), {
                Me: !0
            }
        } catch (p) {}
        f = rq(k, f, e);
        null !== f && jq(a, f, nq(k));
        if (f) return gq(b, f, k, c), {};
        l && gQ();
        k = this.g.get(c) || Number(l);
        b = jQ(this, a, b, c, k, d, h || "gpt_unit_" + c + "_" + k);
        a = b.Fa;
        var n = b.slotId;
        b = b.Me;
        if (!n) return {
            Me: b
        };
        this.g.set(c, k + 1);
        this.X.add(n);
        _.jp(n, function() {
            return void g.X.delete(n)
        });
        kJ(c);
        return {
            slotId: n,
            Fa: a
        }
    };
    var BM = function(a, b) {
            a = _.y(a.X);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        $s = function(a) {
            a = _.y(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.za()
        },
        jQ = function(a, b, c, d, e, f, g) {
            var h = BM(a, g);
            if (h) return c.error(XJ(g, d, h.getAdUnitPath())), {
                Me: !0
            };
            var k = new HL;
            IL(ki(k, 1, d), g);
            JL(k, qo(f));
            jL(k);
            var l = new Pg(b, d, e, g);
            qL(l, Co(b, c, l));
            _.jp(l, function() {
                var m = an(),
                    n = l.getDomId();
                delete m.A[n];
                m.l.delete(l);
                m = l.getAdUnitPath();
                m = Al(m);
                var p;
                n = (null != (p = Ol.get(m)) ? p : 0) - 1;
                0 >= n ? Ol.delete(m) : Ol.set(m, n);
                c.info(tK(l.toString()), l);
                (p = Ql.get(l)) && Rl.delete(p);
                Ql.delete(l)
            });
            c.info(MJ(l.toString()), l);
            l.listen(vJ, function(m) {
                m = m.detail.cm;
                c.info(NJ(l.getAdUnitPath()), l);
                jC(_.Jf(Dl), "7", 9, JJ(a.L, l), 0, m)
            });
            l.listen(uJ, function(m) {
                var n = m.detail;
                c.info(OJ(l.getAdUnitPath()), l);
                var p;
                m = _.Jf(Dl);
                var r = Os(k, 20);
                n = null != (p = n.getEscapedQemQueryId()) ? p : "";
                m.g && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + r] = n)
            });
            l.listen(Qs, function() {
                return void c.info(PJ(l.getAdUnitPath()), l)
            });
            l.listen(Rs, function() {
                return void c.info(QJ(l.getAdUnitPath()), l)
            });
            return {
                Fa: k,
                slotId: l
            }
        },
        hQ = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.qi(a.X)).some(function(d) {
                return c.test(Al(d.getAdUnitPath()))
            })
        };
    (function(a, b) {
        var c = null != a ? a : {
            pvsid: Wj(window),
            mb: "1",
            zb: "m202403070101",
            Ra: new Wv(3, "m202403070101", 0),
            eh: !0,
            fg: 1
        };
        try {
            Bc(function(aa) {
                Fl(c, 1190, aa)
            });
            var d = vo();
            Cf(!_.Jf(rm).g);
            _.z(Object, "assign").call(Object, sm, d._vars_);
            d._vars_ = sm;
            if (d.evalScripts) d.evalScripts();
            else {
                BI();
                try {
                    vh()
                } catch (aa) {
                    Fl(c, 408, aa)
                }
                Qq();
                var e = new WL;
                try {
                    rh(e.I), Hn(13, c), Hn(3, c)
                } catch (aa) {
                    Fl(c, 408, aa)
                }
                var f = Vv(c, e),
                    g = null != a ? a : Zv(f, c),
                    h = null != b ? b : new VL(g);
                wl(g);
                wp("gpt_fifwin", function(aa) {
                    Wo(aa, g)
                }, d.fifWin ? .01 : 0);
                var k = new BJ,
                    l = new iQ(k, e),
                    m = new XO(g),
                    n = _.tm(260),
                    p = new qJ(g),
                    r = new qJ(g),
                    v = new qJ(g),
                    w = _.tm(150),
                    x = OA(),
                    B = Ut(g, l, h, k, n, e, m, p, w),
                    C = _.tm(221),
                    F = new SN,
                    G = new TM,
                    P, R, K, Z = null != (K = null == (P = B.Ib) ? void 0 : null == (R = P.td) ? void 0 : R.yb) ? K : new Xp,
                    qa = new WP(g, l, h, k, m, x, e, p, n, C, F, G, B, Z);
                _.E(jF) && new CM(g, p, k, l);
                var wa = an().g;
                qt(g, h, qa, wa, l, r, v, e, G, Z);
                Qo(g, d, h);
                window.setTimeout(function() {
                    for (var aa = window.document.scripts, ha = 0, vb = 0, Ta = 0; Ta < aa.length; Ta++) aa[Ta].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? ha++ : aa[Ta].src.match("www.googletagservices.com/tag/js/gpt.js") && vb++;
                    1 < ha && 0 === vb || 1 < vb && 0 === ha ? O(h, TK()) : 0 < vb && 0 < ha && h.error(UK())
                }, 1E3);
                Xs();
                if (_.E(jF) || _.Jf(Dl).g) Mv(), Qv();
                To(g)
            }
        } catch (aa) {
            Fl(c, 106, aa)
        }
    })();
    _.kQ = _.t.requestAnimationFrame || _.t.webkitRequestAnimationFrame;
    _.lQ = !!_.kQ && !/'iPhone'/.test(_.t.navigator.userAgent);
    _.mQ = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.j = a;
        this.g = b;
        this.l = c;
        this.P = null;
        _.jp(this, function() {
            return d.P = null
        })
    };
    _.T(_.mQ, _.V);
}).call(this, {});