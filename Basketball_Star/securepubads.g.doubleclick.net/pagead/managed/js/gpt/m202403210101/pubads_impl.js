(function(_) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var ba, da, ia, la, na, pa, ta, sa, ua, va, xa, ya, za, Ba, Da, Ga, Ha, Ia, Ja, Ka, Ma, Wa, db, eb, lb, nb, ob, pb, qb, sb, wb, yb, Cb, Fb, Ib, Kb, Mb, Ob, Sb, Xb, Zb, Yb, ac, bc, Ub, cc, gc, hc, jc, lc, nc, oc, pc, rc, sc, vc, xc, yc, Ac, Bc, Dc, Hc, Jc, Lc, Mc, Oc, Wc, Yc, Zc, $c, bd, gd, hd, id, jd, ed, kd, dd, cd, qd, rd, sd, vd, wd, zd, yd, Bd, Cd, Ed, Hd, Id, Kd, Ld, Qd, Ud, Wd, Vd, Zd, ae, $d, ce, be, de, fe, Jd, ke, le, me, pe, ue, qe, se, te, ve, Fe, He, Ie, Je, Ne, Oe, Pe, re, Qe, Re, Se, Ue, Ve, We, Xe, af, bf, cf, Ze, kf, $e, lf, pf, Ef, Gf, Kf, Lf, Mf, Qf, Rf, Sf, Uf, Vf, Wf, Xf, Yf, ag, eg, gg, fg, kg, mg, ng, qg, rg, Hg, Ig, Ng, Qg, Rg, Tg, Vg, Xg, Yg, ah, bh, ch, dh, eh, gh, ih, jh, lh, mh, nh, oh, ph, qh, th, vh, zh, xh, Rh, Sh, Th, Bh, Qh, Uh, Vh, ei, ci, hi, pi, Wh, yi, Ki, Li, Pi, Qi, Wi, Yi, Zi, bj, ej, oj, tj, uj, wj, xj, yj, zj, Aj, Bj, Cj, Dj, Fj, Ij, Gj, Jj, Hj, Kj, Mj, Tj, Vj, Wj, Zj, Xj, ck, dk, ek, ik, jk, pk, qk, Ck, Ik, Gk, Hk, Nk, Rk, Tk, Uk, Vk, Xk, al, hl, dl, Yk, pl, nl, ol, rl, sl, vl, Cl, Fl, Gl, L, Hl, Nl, Ll, Yl, O, $l, am, bm, dm, fm, gm, nm, om, qm, rm, wm, Dm, Fm, Hm, Im, Jm, Km, Lm, Om, Sm, Um, Wm, Vm, bn, cn, dn, en, Xm, fn, Ym, jn, kn, on, pn, zn, An, Bn, Dn, Hn, Mn, On, Pn, Rn, Sn, Wn, Xn, Yn, bo, Vn, eo, fo, go, io, lo, no, oo, po, qo, so, to, vo, xo, yo, wo, Co, Do, Ho, Io, Ko, Uo, Wo, Yo, ap, $o, Zo, kp, np, op, pp, qp, sp, up, vp, wp, yp, zp, Bp, Ap, Dp, Ip, Gp, Jp, Lp, Mp, Pp, Qp, Sp, Vp, Up, Xp, Yp, Zp, aq, bq, dq, cq, gq, iq, kq, mq, oq, qq, vq, xq, yq, Cq, Fq, Dq, Eq, Gq, Hq, Kq, Mq, Nq, Oq, Pq, Qq, Rq, Sq, Tq, Vq, Zq, ar, br, cr, fr, pr, ir, ur, vr, wr, yr, Ar, Cr, Fr, Ir, Rr, Gr, Hr, Kr, Lr, Er, Jr, Vr, Zr, as, cs, es, hs, js, oa, ks, ls, ns, ms, os, ps, rs, ts, us, ws, ys, Cs, Ds, zs, Es, Fs, Hs, Js, Ks, Ms, Os, Ps, Xs, Ys, bt, ct, dt, et, lt, nt, pt, qt, rt, ut, It, Lt, lu, mu, bv, ev, mv, iv, jv, pv, tv, wv, yv, xv, Nv, Qv, Rv, Sv, Tv, Vv, Uv, Xv, ew, iw, ow, sw, tw, uw, vw, xw, yw, zw, Aw, Cw, Dw, Ew, Lw, Mw, Nw, vb, Pw, Sw, Qw, Rw, Tw, Uw;
    ba = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    da = function(a, b) {
        b = _.ca(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    _.ha = function(a) {
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
    Da = function() {
        var a = _.t.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Ga = function(a) {
        return Ea ? Fa ? Fa.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    };
    Ha = function(a) {
        return -1 != Da().indexOf(a)
    };
    Ia = function() {
        return Ea ? !!Fa && 0 < Fa.brands.length : !1
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
    _.Ta = function(a) {
        var b = void 0 === b ? Oa : b;
        a: if (b = void 0 === b ? Oa : b, !(a instanceof _.Qa)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof La && d.yl(a)) {
                    a = Ra(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.Sa
    };
    Wa = function(a) {
        for (var b = _.Va.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return Ra(c.join(""))
    };
    _.Za = function(a) {
        if (Ya.test(a)) return a
    };
    _.ab = function(a) {
        return a instanceof _.Qa ? _.$a(a) : _.Za(a)
    };
    db = function(a) {
        var b = new cb;
        b.aj = a;
        return b
    };
    eb = function(a) {
        var b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            ke: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    };
    _.hb = function(a) {
        var b = _.Va.apply(1, arguments);
        if (0 === b.length) return gb(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return gb(c)
    };
    _.jb = function(a, b) {
        a = eb(_.ib(a).toString());
        var c = a.ke,
            d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return gb(a.path + c + a.hash)
    };
    lb = function(a) {
        return a ? a.passive && kb() ? a : a.capture || !1 : !1
    };
    _.mb = function(a, b) {
        b = _.ab(b);
        void 0 !== b && (a.href = b)
    };
    nb = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    ob = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    pb = function(a, b) {
        if (b instanceof cb) b = b.aj;
        else throw Error("");
        a.textContent = b;
        ob(a)
    };
    qb = function(a, b) {
        a.src = _.ib(b);
        ob(a)
    };
    sb = function(a) {
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
            qb(g, a);
            c && "complete" !== b.document.readyState ? _.rb(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    wb = function(a) {
        var b, c, d, e, f, g;
        return _.tb(function(h) {
            switch (h.g) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.g + ("&tv=" + a.A + "&st=") + a.Ed, c = void 0, h.l = 2, h.yield(ub(b), 4);
                case 4:
                    c = h.A;
                    h.g = 3;
                    h.l = 0;
                    break;
                case 2:
                    vb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.ae || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.l ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.j,
                        gk: c.bg_hash_basename,
                        fk: c.bg_binary,
                        Cl: a.g + "_" + a.A,
                        ae: d,
                        Ed: a.Ed,
                        ef: e,
                        Cf: f,
                        df: g
                    }) : h.return(void 0)
            }
        })
    };
    yb = function(a) {
        var b;
        _.tb(function(c) {
            if (1 == c.g) return c.yield(wb(a), 2);
            if (b = c.A) {
                var d = b,
                    e = "sodar2";
                e = void 0 === e ? "sodar2" : e;
                var f = window,
                    g = f.GoogleGcLKhOms;
                g && "function" === typeof g.push || (g = f.GoogleGcLKhOms = []);
                var h = {};
                g.push((h._ctx_ = d.context, h._bgv_ = d.gk, h._bgp_ = d.fk, h._li_ = d.Cl, h._jk_ = d.ae, h._st_ = d.Ed, h._rc_ = d.ef, h._dl_ = d.Cf, h._g2_ = d.df, h));
                if (d = f.GoogleDX5YKUSk) f.GoogleDX5YKUSk = void 0, d[1]();
                e = _.hb(xb, e);
                sb(e)
            }
            return c.return(b)
        })
    };
    Cb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (zb) {
            if (b && (Ab ? !a.zl() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
            a = (Bb || (Bb = new TextEncoder)).encode(a)
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
    Fb = function(a) {
        _.t.setTimeout(function() {
            throw a;
        }, 0)
    };
    Ib = function(a) {
        if (!Gb) return Hb(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    };
    Kb = function(a) {
        return Jb[a] || ""
    };
    Mb = function(a) {
        return Lb && null != a && a instanceof Uint8Array
    };
    Ob = function(a) {
        if (a !== Nb) throw Error("illegal external caller");
    };
    Sb = function() {
        return "function" === typeof BigInt
    };
    Xb = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.x(Ub(c, a)), b = c.next().value, a = c.next().value, c = b);
        Vb = c >>> 0;
        Wb = a >>> 0
    };
    Zb = function(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else Sb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + Yb(c) + Yb(a));
        return c
    };
    Yb = function(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    };
    ac = function() {
        var a = Vb,
            b = Wb;
        b & 2147483648 ? Sb() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = _.x(Ub(a, b)), a = b.next().value, b = b.next().value, a = "-" + Zb(a, b)) : a = Zb(a, b);
        return a
    };
    bc = function(a) {
        if (16 > a.length) Xb(Number(a));
        else if (Sb()) a = BigInt(a), Vb = Number(a & BigInt(4294967295)) >>> 0, Wb = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Wb = Vb = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Wb *= 1E6, Vb = 1E6 * Vb + d, 4294967296 <= Vb && (Wb += _.z(Math, "trunc").call(Math, Vb / 4294967296), Wb >>>= 0, Vb >>>= 0);
            b && (b = _.x(Ub(Vb, Wb)), a = b.next().value, b = b.next().value, Vb = a, Wb = b)
        }
    };
    Ub = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    cc = function(a) {
        return Array.prototype.slice.call(a)
    };
    gc = function(a) {
        return "function" === typeof _.u.Symbol && "symbol" === typeof(0, _.u.Symbol)() ? (0, _.u.Symbol)() : a
    };
    hc = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    jc = function(a) {
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
    oc = function(a, b) {
        mc(b, (a | 34) & -14557)
    };
    pc = function(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    rc = function(a) {
        return !(!a || "object" !== typeof a || a.Dl !== qc)
    };
    sc = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    vc = function(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new tc(a, Nb) : uc();
            else if (a.constructor !== tc)
            if (Mb(a)) a = a.length ? new tc(c ? a : new Uint8Array(a), Nb) : uc();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    xc = function(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = wc(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? _.z(b, "includes").call(b, c) : b.has(c)))) return !1;
        mc(a, d | 1);
        return !0
    };
    yc = function(a) {
        if (a & 2) throw Error();
    };
    Ac = function(a) {
        if (zc) throw Error("");
        zc = function(b) {
            _.t.setTimeout(function() {
                a(b)
            }, 0)
        }
    };
    Bc = function(a) {
        if (zc) try {
            zc(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    };
    Dc = function() {
        var a = Error();
        Cc(a, "incident");
        zc ? Bc(a) : Fb(a)
    };
    Hc = function(a) {
        a = Error(a);
        Cc(a, "warning");
        Bc(a);
        return a
    };
    _.Ic = function(a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
        return a
    };
    Jc = function(a) {
        if (null == a || "number" === typeof a) return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    };
    Lc = function(a) {
        if ("boolean" !== typeof a) throw Error("Expected boolean but got " + Kc(a) + ": " + a);
        return a
    };
    Mc = function(a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    };
    Oc = function(a) {
        var b = typeof a;
        return "number" === b ? _.z(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : Nc.test(a)
    };
    _.Vc = function(a) {
        if (!_.z(Number, "isFinite").call(Number, a)) throw Hc("enum");
        return a | 0
    };
    Wc = function(a) {
        return null == a ? a : _.Vc(a)
    };
    _.Xc = function(a) {
        return null == a ? a : _.z(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Yc = function(a) {
        if ("number" !== typeof a) throw Hc("int32");
        if (!_.z(Number, "isFinite").call(Number, a)) throw Hc("int32");
        return a | 0
    };
    Zc = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.z(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    $c = function(a) {
        if ("number" !== typeof a) throw Hc("uint32");
        if (!_.z(Number, "isFinite").call(Number, a)) throw Hc("uint32");
        return a >>> 0
    };
    _.ad = function(a) {
        return null == a ? a : $c(a)
    };
    bd = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.z(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    };
    _.fd = function(a, b) {
        b = !!b;
        if (!Oc(a)) throw Hc("int64");
        return "string" === typeof a ? cd(a) : b ? dd(a) : ed(a)
    };
    gd = function(a) {
        return null == a ? a : _.fd(a)
    };
    hd = function(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    };
    id = function(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    };
    jd = function(a) {
        if (0 > a) {
            Xb(a);
            var b = Zb(Vb, Wb);
            a = Number(b);
            return _.z(Number, "isSafeInteger").call(Number, a) ? a : b
        }
        if (hd(String(a))) return a;
        Xb(a);
        return 4294967296 * Wb + (Vb >>> 0)
    };
    ed = function(a) {
        a = _.z(Math, "trunc").call(Math, a);
        if (!_.z(Number, "isSafeInteger").call(Number, a)) {
            Xb(a);
            var b = Vb,
                c = Wb;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    };
    kd = function(a) {
        a = _.z(Math, "trunc").call(Math, a);
        return 0 <= a && _.z(Number, "isSafeInteger").call(Number, a) ? a : jd(a)
    };
    dd = function(a) {
        a = _.z(Math, "trunc").call(Math, a);
        if (_.z(Number, "isSafeInteger").call(Number, a)) a = String(a);
        else {
            var b = String(a);
            id(b) ? a = b : (Xb(a), a = ac())
        }
        return a
    };
    cd = function(a) {
        var b = _.z(Math, "trunc").call(Math, Number(a));
        if (_.z(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        id(a) || (bc(a), a = ac());
        return a
    };
    qd = function(a) {
        var b = _.z(Math, "trunc").call(Math, Number(a));
        if (_.z(Number, "isSafeInteger").call(Number, b) && 0 <= b) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        hd(a) || (bc(a), a = Zb(Vb, Wb));
        return a
    };
    rd = function(a) {
        if (null == a) return a;
        if (Oc(a)) {
            var b;
            "number" === typeof a ? b = ed(a) : b = cd(a);
            return b
        }
    };
    sd = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (null == a) return a;
        if (Oc(a)) return "string" === typeof a ? cd(a) : b ? dd(a) : ed(a)
    };
    _.td = function(a) {
        if (null != a) {
            var b = !!b;
            if (!Oc(a)) throw Hc("uint64");
            "string" === typeof a ? a = qd(a) : b ? (a = _.z(Math, "trunc").call(Math, a), 0 <= a && _.z(Number, "isSafeInteger").call(Number, a) ? a = String(a) : (b = String(a), hd(b) ? a = b : (Xb(a), a = Zb(Vb, Wb)))) : a = kd(a)
        }
        return a
    };
    _.ud = function(a) {
        if ("string" !== typeof a) throw Error();
        return a
    };
    vd = function(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    };
    wd = function(a) {
        return null == a || "string" === typeof a ? a : void 0
    };
    zd = function(a, b, c, d) {
        if (null != a && "object" === typeof a && a.Eg === xd) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? yd(b) : new b : void 0;
        var e = c = wc(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && mc(a, e);
        return new b(a)
    };
    yd = function(a) {
        var b = a[Ad];
        if (b) return b;
        b = new a;
        jc(b.F);
        return a[Ad] = b
    };
    Bd = function(a, b, c) {
        if (b) return Lc(a);
        var d;
        return null != (d = Mc(a)) ? d : c ? !1 : void 0
    };
    Cd = function(a, b, c) {
        if (b) return _.ud(a);
        var d;
        return null != (d = wd(a)) ? d : c ? "" : void 0
    };
    Ed = function(a, b) {
        Dd = b;
        a = new a(b);
        Dd = void 0;
        return a
    };
    Hd = function(a) {
        switch (typeof a) {
            case "boolean":
                return Fd || (Fd = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? Gd || (Gd = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    };
    _.A = function(a, b, c) {
        null == a && (a = Dd);
        Dd = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error();
            d = wc(a);
            if (d & 2048) throw Error();
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error();
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (sc(c[f])) {
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
    Id = function(a) {
        return a
    };
    Kd = function(a, b, c, d, e, f) {
        a = zd(a, d, c, f);
        e && (a = Jd(a));
        return a
    };
    Ld = function(a) {
        return a
    };
    Qd = function(a) {
        return [a, this.get(a)]
    };
    Ud = function() {
        return Rd || (Rd = new Sd(jc([]), void 0, void 0, void 0, Td))
    };
    Wd = function(a, b) {
        return Vd(b)
    };
    Vd = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (xc(a, void 0, 0)) return
                    } else {
                        if (Mb(a)) return Ib(a);
                        if (a instanceof tc) return Xd(a);
                        if (a instanceof Sd) return Yd(a)
                    }
        }
        return a
    };
    Zd = function(a, b, c) {
        a = cc(a);
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
    ae = function(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = xc(a, void 0, 0) ? void 0 : e && wc(a) & 2 ? a : $d(a, b, c, void 0 !== d, e);
            else if (sc(a)) {
                var f = {},
                    g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = ae(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    };
    $d = function(a, b, c, d, e) {
        var f = d || c ? wc(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = cc(a);
        for (var g = 0; g < a.length; g++) a[g] = ae(a[g], b, c, d, e);
        c && c(f, a);
        return a
    };
    ce = function(a) {
        return ae(a, be, void 0, void 0, !1)
    };
    be = function(a) {
        return a.Eg === xd ? a.toJSON() : a instanceof Sd ? Yd(a, ce) : Vd(a)
    };
    de = function(a, b, c) {
        c = void 0 === c ? oc : c;
        if (null != a) {
            if (Lb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = wc(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? mc(a, (d | 34) & -12293) : $d(a, de, d & 4 ? oc : c, !0, !0)
            }
            a.Eg === xd ? (c = a.F, d = ee(c), a = d & 2 ? a : Ed(a.constructor, fe(c, d, !0))) : a instanceof Sd && !(a.Od & 2) && (c = jc(ge(a, de)), a = new Sd(c, a.Jf, a.be, a.th));
            return a
        }
    };
    _.he = function(a) {
        var b = a.F;
        return Ed(a.constructor, fe(b, ee(b), !1))
    };
    fe = function(a, b, c) {
        var d = c || b & 2 ? oc : nc,
            e = !!(b & 32);
        a = Zd(a, b, function(f) {
            return de(f, e, d)
        });
        ic(a, 32 | (c ? 2 : 0));
        return a
    };
    Jd = function(a) {
        var b = a.F,
            c = ee(b);
        return c & 2 ? Ed(a.constructor, fe(b, c, !1)) : a
    };
    _.ie = function(a) {
        var b = a.F,
            c = ee(b);
        return c & 2 ? a : Ed(a.constructor, fe(b, c, !0))
    };
    ke = function(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (null == c) return !1;
        !d && 0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[je] = (a.constructor[je] | 0) + 1) && Dc();
        return 0 === c ? !1 : !(c & b)
    };
    le = function(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    };
    me = function(a, b, c, d, e) {
        var f = pc(b);
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
    pe = function(a, b, c, d) {
        var e = b & 2,
            f = ne(a, b, c, d);
        Array.isArray(f) || (f = oe);
        var g = !!(b & 32),
            h = wc(f);
        0 === h && g && !e ? (h |= 33, mc(f, h)) : h & 1 || (h |= 1, mc(f, h));
        if (e) h & 2 || jc(f), Object.freeze(f);
        else if (2 & h || 2048 & h) f = cc(f), e = 1, g && (e |= 32), mc(f, e), me(a, b, c, f, d);
        return f
    };
    ue = function(a, b, c, d, e, f, g) {
        var h = a.F,
            k = ee(h);
        d = 2 & k ? 1 : d;
        f = !!f;
        var l = qe(h, k, b, e),
            m = wc(l);
        if (ke(a, m, g, f)) {
            if (4 & m || Object.isFrozen(l)) l = cc(l), m = re(m, k, f), k = me(h, k, b, l, e);
            for (var n = a = 0; a < l.length; a++) {
                var p = c(l[a]);
                null != p && (l[n++] = p)
            }
            n < a && (l.length = n);
            m = se(m, k, f);
            m = hc(m, 20, !0);
            m = hc(m, 4096, !1);
            m = hc(m, 8192, !1);
            g && (m = hc(m, g, !0));
            mc(l, m);
            2 & m && Object.freeze(l)
        }
        te(m) || (g = m, (c = 1 === d) ? m = hc(m, 2, !0) : f || (m = hc(m, 32, !1)), m !== g && mc(l, m), c && Object.freeze(l));
        2 === d && te(m) && (l = cc(l), m = re(m, k, f), mc(l, m), me(h, k, b, l, e));
        return l
    };
    qe = function(a, b, c, d) {
        a = ne(a, b, c, d);
        return Array.isArray(a) ? a : oe
    };
    se = function(a, b, c) {
        0 === a && (a = re(a, b, c));
        return a = hc(a, 1, !0)
    };
    te = function(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    };
    ve = function(a) {
        return vc(a, !0, !0)
    };
    Fe = function(a) {
        return vc(a, !0, !1)
    };
    He = function(a, b, c, d, e, f) {
        var g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (null == h) {
                if (k) {
                    a = Ud();
                    break a
                }
                h = []
            } else if (h.constructor === Sd) {
                if (0 == (h.Od & 2) || k) {
                    a = h;
                    break a
                }
                h = ge(h)
            } else Array.isArray(h) ? c = !!(wc(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Ud();
                    break a
                }
                c || (c = !0, jc(h))
            } else if (c) {
                c = !1;
                k = cc(h);
                for (h = 0; h < k.length; h++) {
                    var l = k[h] = cc(k[h]);
                    Array.isArray(l[1]) && (l[1] = jc(l[1]))
                }
                h = k
            }
            c || (wc(h) & 64 ? Ge(h, 32) : 32 & b && lc(h));f = new Sd(h, e, Cd, f);me(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !g && e && (a.mk = !0);
        return a
    };
    Ie = function(a, b, c) {
        a = a.F;
        var d = ee(a);
        return He(a, d, ne(a, d, b), b, void 0, c)
    };
    Je = function(a, b, c) {
        a = a.F;
        var d = ee(a);
        return He(a, d, ne(a, d, b), b, c)
    };
    _.Ke = function(a, b, c, d) {
        var e = a.F,
            f = ee(e);
        yc(f);
        if (null == c) return me(e, f, b), a;
        var g = wc(c),
            h = g,
            k = !!(2 & g) || Object.isFrozen(c),
            l = !k && !1;
        if (ke(a, g))
            for (g = 21, k && (c = cc(c), h = 0, g = re(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = cc(c), h = 0, g = re(g, f, !0));
        g !== h && mc(c, g);
        me(e, f, b, c);
        return a
    };
    _.Le = function(a, b, c, d) {
        var e = a.F,
            f = ee(e);
        yc(f);
        me(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    };
    _.Me = function(a, b, c, d) {
        var e = a.F,
            f = ee(e);
        yc(f);
        b = pe(e, f, b);
        e = wc(b);
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    };
    Ne = function(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != ne(a, b, f) && (0 !== d && (b = me(a, b, d)), d = f)
        }
        return d
    };
    Oe = function(a, b, c, d) {
        a = a.F;
        var e = ee(a),
            f = ne(a, e, c, d);
        b = zd(f, b, !1, e);
        b !== f && null != b && me(a, e, c, b, d);
        return b
    };
    Pe = function(a, b, c, d, e, f) {
        var g = !!(2 & b),
            h = g ? 1 : 2,
            k = 1 === h;
        h = 2 === h;
        e = !!e;
        f && (f = !g);
        g = qe(a, b, d);
        var l = wc(g),
            m = !!(4 & l);
        if (!m) {
            l = se(l, b, e);
            var n = g,
                p = b,
                r;
            (r = !!(2 & l)) && (p = hc(p, 2, !0));
            for (var v = !r, w = !0, y = 0, B = 0; y < n.length; y++) {
                var C = zd(n[y], c, !1, p);
                if (C instanceof c) {
                    if (!r) {
                        var G = !!(wc(C.F) & 2);
                        v && (v = !G);
                        w && (w = G)
                    }
                    n[B++] = C
                }
            }
            B < y && (n.length = B);
            l = hc(l, 4, !0);
            l = hc(l, 16, w);
            l = hc(l, 8, v);
            mc(n, l);
            r && Object.freeze(n)
        }
        c = !!(8 & l) || k && !g.length;
        if (f && !c) {
            te(l) && (g = cc(g), l = re(l, b, e), b = me(a, b, d, g));
            f = g;
            c = l;
            for (n = 0; n < f.length; n++) l = f[n], p = Jd(l), l !== p && (f[n] = p);
            c = hc(c, 8, !0);
            c = hc(c, 16, !f.length);
            mc(f, c);
            l = c
        }
        te(l) || (f = l, k ? l = hc(l, !g.length || 16 & l && (!m || 32 & l) ? 2 : 2048, !0) : e || (l = hc(l, 32, !1)), l !== f && mc(g, l), k && Object.freeze(g));
        h && te(l) && (g = cc(g), l = re(l, b, e), mc(g, l), me(a, b, d, g));
        return g
    };
    re = function(a, b, c) {
        a = hc(a, 2, !!(2 & b));
        a = hc(a, 32, !!(32 & b) && c);
        return a = hc(a, 2048, !1)
    };
    Qe = function(a, b, c, d) {
        a = a.F;
        var e = ee(a);
        yc(e);
        b = Pe(a, e, c, b, !0);
        c = null != d ? d : new c;
        b.push(c);
        wc(c.F) & 2 ? Ge(b, 8) : Ge(b, 16);
        return c
    };
    Re = function(a) {
        return sd(a, !0)
    };
    Se = function(a, b) {
        return null != a ? a : b
    };
    Ue = function(a, b, c) {
        var d = Te ? void 0 : a.constructor.da;
        var e = ee(c ? a.F : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (sc(c = b[a - 1])) {
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
                            if (xc(m, d, +l) || rc(m) && 0 === m.size) m = null;
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
            if (!(null == c || xc(c, d, p) || rc(c) && 0 === c.size)) break;
            var r = !0
        }
        if (!f && !r) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };
    Ve = function(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        ic(b, 128);
        return Ed(a, lc(b))
    };
    We = function(a, b) {
        if (Array.isArray(b)) {
            var c = wc(b);
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
    Xe = function(a, b, c) {
        a[b] = c
    };
    af = function(a) {
        var b = a[Ye];
        if (!b) {
            var c = Ze(a);
            b = function(d, e) {
                return $e(d, e, c)
            };
            a[Ye] = b
        }
        return b
    };
    bf = function(a) {
        return a.g
    };
    cf = function(a, b) {
        var c, d, e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d || (d = Ze(b).g), c || (c = af(b)))
        }
    };
    Ze = function(a) {
        var b = a[df];
        if (b) return b;
        b = a[df] = {};
        var c = bf,
            d = cf;
        var e = void 0 === e ? Xe : e;
        b.g = Hd(a[0]);
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.Tk = g, g = a[++f], "function" === typeof g && (b.l = g, b.A = a[++f], g = a[++f]));
        for (var h = {}; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; void 0 !== g;) {
            "number" === typeof g && (k += g, g = a[++f]);
            var l = void 0;
            if (g instanceof ef) var m = g;
            else m = ff, f--;
            if (m.Lj) {
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
        gf in a && hf in a && df in a && (a.length = 0);
        return b
    };
    kf = function(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Tk)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof ef ? c : [jf, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = af(c),
                        f = Ze(c).g;
                    c = (c = a.A) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    };
    $e = function(a, b, c) {
        for (var d = ee(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var l = h - e,
                    m = kf(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (d = +n, _.z(Number, "isNaN").call(Number, d) || (e = a[n], null != e && (f = kf(c, d)) && f(b, e, d)))
        }
    };
    lf = function(a) {
        return new ef(a, !1)
    };
    pf = function(a, b, c) {
        a: if (null != b) {
            if (Oc(b)) {
                if ("string" === typeof b) {
                    b = cd(b);
                    break a
                }
                if ("number" === typeof b) {
                    b = ed(b);
                    break a
                }
            }
            b = void 0
        }null != b && ("string" === typeof b && mf(b), null != b && (nf(a, c, 0), "number" === typeof b ? (a = a.g, Xb(b), of (a, Vb, Wb)) : (c = mf(b), of (a.g, c.A, c.g))))
    };
    Ef = function(a, b, c, d, e) {
        b = b instanceof _.D ? b.F : Array.isArray(b) ? _.A(b, d[0], d[1]) : void 0;
        null != b && (c = Cf(a, c), e(b, a), Df(a, c))
    };
    Gf = function(a) {
        var b = _.Ff();
        if (!a) throw Error(b && b() || String(a));
    };
    _.Ff = function() {
        var a = Hf;
        Hf = void 0;
        return a
    };
    Kf = function(a) {
        return function() {
            var b = new If;
            $e(this.F, b, Ze(a));
            Jf(b, b.g.end());
            for (var c = new Uint8Array(b.A), d = b.l, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.l = [c];
            return c
        }
    };
    Lf = function(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Ed(a, lc(b))
            }
            return b
        }
    };
    Mf = function(a) {
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
        return _.Nf(Of).A(a.g, a.defaultValue)
    };
    _.Pf = function(a) {
        return _.Nf(Of).l(a.g, a.defaultValue)
    };
    Qf = function(a) {
        return _.Nf(Of).j(a.g, a.defaultValue)
    };
    Rf = function(a) {
        return _.Nf(Of).M(a.g, a.defaultValue)
    };
    Sf = function(a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    Uf = function(a) {
        return Tf(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (_.H = b.toString(2), _.z(_.H, "padStart")).call(_.H, 8, "0")
        }).join("")
    };
    Vf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    };
    Wf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };
    Xf = function(a, b) {
        a = Uf(a);
        return a.length < b ? _.z(a, "padEnd").call(a, b, "0") : a
    };
    Yf = function(a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    _.Zf = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    };
    _.$f = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    ag = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    _.bg = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(ag("domLoading", a) || Infinity, ag("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(ag("responseEnd", a), ag("navigationStart", a)) : b
    };
    eg = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.cg("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && da(a.google_image_requests, f);
                _.dg(f, "load", g);
                _.dg(f, "error", g)
            };
            _.rb(f, "load", g);
            _.rb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    gg = function(a, b) {
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
            return fg(d, b), ""
        }
    };
    fg = function(a, b) {
        try {
            hg({
                m: _.ig(a instanceof Error ? a : Error(String(a))),
                b: _.jg(b, 1, 0) || null,
                v: _.I(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    };
    kg = function(a, b, c, d, e, f) {
        try {
            var g = a.g,
                h = _.cg("SCRIPT", g);
            h.async = !0;
            qb(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function() {
                0 < c ? kg(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    };
    mg = function(a, b, c, d) {
        c = void 0 === c ? function() {} : c;
        d = void 0 === d ? function() {} : d;
        kg(lg(a), b, 0, !1, c, d)
    };
    ng = function(a) {
        return a[_.z(_.u.Symbol, "iterator")]()
    };
    qg = function(a) {
        var b = og(pg(a.location.href));
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    };
    rg = function(a) {
        var b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = og(pg(a.location.href)).get("fctype")) && -1 !== b.indexOf(a) ? a : null
    };
    Hg = function(a) {
        var b = pg(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        _.z(Object, "assign").call(Object, a, c);
        if (a.port && ":" === a.port[0]) throw Error("port should not start with ':'");
        a.hash && "#" != a.hash[0] && (a.hash = "#" + a.hash);
        c.search ? "?" != c.search[0] && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + Gg(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol + "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = pg(b).toString();
        "/" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
        return 1E3 >= a.toString().length ? a : null
    };
    Ig = function(a) {
        a && "function" == typeof a.ya && a.ya()
    };
    Ng = function(a) {
        a = Jg(a.data.__fciReturn);
        return {
            payload: a,
            Vg: _.Kg(a, 1)
        }
    };
    Qg = function() {
        var a = Da();
        return a ? _.Og("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return _.Pg(a, b)
        }) || _.Pg(a, "OMI/") && !_.Pg(a, "XiaoMi/") ? !0 : _.Pg(a, "Presto") && _.Pg(a, "Linux") && !_.Pg(a, "X11") && !_.Pg(a, "Android") && !_.Pg(a, "Mobi") : !1
    };
    Rg = function() {
        return function(a) {
            return 0 === a
        }
    };
    Tg = function() {
        var a = Sg;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    Vg = function() {
        var a = Ug;
        return function(b) {
            return b instanceof a
        }
    };
    Xg = function(a) {
        return function(b) {
            if (!Wg(b)) return !1;
            for (var c = _.x(_.z(Object, "entries").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
                var e = _.x(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!(d in b)) {
                    if (!0 === e.yo) continue;
                    return !1
                }
                if (!e(b[d])) return !1
            }
            return !0
        }
    };
    Yg = function() {
        return function(a) {
            return Array.isArray(a)
        }
    };
    ah = function() {
        return function(a) {
            return Zg(a) ? a.every(function(b) {
                return $g(b)
            }) : !1
        }
    };
    bh = function(a) {
        return !!a && a.top === a
    };
    ch = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Vg: b.__uspapiReturn.callId
        }
    };
    dh = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Vg: b.__gppReturn.callId
        }
    };
    eh = function(a) {
        return !a || 1 === a.length && -1 === a[0]
    };
    gh = function(a, b) {
        b = void 0 === b ? window : b;
        if (fh(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    ih = function(a, b, c) {
        fh(b) ? (b = "null" !== c.origin ? c.document.cookie : null, a = null === b ? null : (new hh({
            cookie: b
        })).get(a) || "") : a = null;
        return a
    };
    jh = function(a, b, c) {
        return b[a] || c
    };
    lh = function(a) {
        _.Nf(kh).l(a)
    };
    mh = function() {
        return _.Nf(kh).j()
    };
    nh = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.H = c.allowedFeatures(), _.z(_.H, "includes")).call(_.H, a))
    };
    oh = function(a, b, c) {
        return !!(a && "runAdAuction" in b && b.runAdAuction instanceof Function && nh("run-ad-auction", c))
    };
    ph = function(a, b) {
        return !!(a && "browsingTopics" in b && b.browsingTopics instanceof Function && nh("browsing-topics", b))
    };
    qh = function(a, b, c) {
        c = void 0 === c ? b.document : c;
        return !!(a && "sharedStorage" in b && b.sharedStorage && nh("shared-storage", c))
    };
    th = function(a) {
        a = void 0 === a ? _.rh() : a;
        return function(b) {
            return _.sh(b + " + " + a) % 1E3
        }
    };
    vh = function(a) {
        _.Nf(uh).g(a)
    };
    zh = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.t : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        wh(_.Nf(kh), a);
        xh(b);
        yh(_.Nf(uh), b);
        _.Nf(Of).g()
    };
    xh = function(a) {
        var b = _.Nf(Of);
        b.A = function(c, d) {
            return jh(5, a, function() {
                return !1
            })(c, d, 2)
        };
        b.l = function(c, d) {
            return jh(6, a, function() {
                return 0
            })(c, d, 2)
        };
        b.j = function(c, d) {
            return jh(7, a, function() {
                return ""
            })(c, d, 2)
        };
        b.M = function(c, d) {
            return jh(8, a, function() {
                return []
            })(c, d, 2)
        };
        b.g = function() {
            jh(15, a, function() {})(2)
        }
    };
    Rh = function(a, b, c, d) {
        var e = new _.Ah,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.dg(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (m) {}
            },
            h = Bh(a);
        return h ? (_.rb(a, "message", g), f = c(h), e.promise) : (c = Qh(a)) ? (f = String(Math.floor(2147483647 * _.rh())), _.rb(a, "message", g), b(c, f), e.promise) : null
    };
    Sh = function(a) {
        return Rh(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Th = function(a) {
        return !!Bh(a) || !!Qh(a)
    };
    Bh = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    Qh = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    Uh = function(a) {
        var b, c;
        return null != (c = (_.H = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.z(_.H, "find")).call(_.H, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Vh = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(_.sh(a))) ? d : 0
    };
    ei = function(a, b, c, d, e) {
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
                for (r = p.next(); !r.done; r = p.next()) r = r.value, g = Wh(r, d, f), g = Xh(a, Yh(Zh($h(ai(new bi, r.bidder), 1), 6, !0), g)), ci(r.bidder, e, g), "number" === typeof r.timeToRespond && _.di(g, 2, Math.round(r.timeToRespond))
            }
        }
    };
    ci = function(a, b, c) {
        for (var d = []; a && !_.z(d, "includes").call(d, a);) {
            d.unshift(a);
            var e = void 0,
                f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.Ke(c, 10, d, _.ud)
    };
    hi = function(a, b, c) {
        null != _.Xc(_.fi(a, 3)) || (c === b.adUnitCode ? _.gi(a, 3, 1) : c === b.ed && _.gi(a, 3, 2))
    };
    pi = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : _.jg(f, 1, 0)) && _.ii(b, 5, f);
        ji(a, ki, 5) || (f ? 1 === _.jg(f, 1, 0) ? li(a, f) : li(a, mi(ni(oi(new ki, e), 1), Vh(c, d))) : li(a, ni(oi(new ki, e), Vh(c, d) ? 2 : 3)))
    };
    Wh = function(a, b, c) {
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
            v = new qi;
        "number" === typeof d && (_.di(v, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === _.Kg(v, 2) || _.di(v, 8, d)));
        "string" === typeof f && ri(v, 3, f);
        (_.H = ["string", "number"], _.z(_.H, "includes")).call(_.H, typeof h) && (f = new si, h = ri(f, 1, String(h)), _.ii(v, 6, h));
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
                d = ti(v, 4, 2);
                _.Ke(v, 4, d.concat(f), _.ud)
            }
        switch (n || "banner") {
            case "banner":
                _.gi(v, 5, 1);
                break;
            case "native":
                _.gi(v, 5, 2);
                break;
            case "video":
                _.gi(v, 5, 3);
                b = new ui;
                var B;
                if ("adpod" === (null == c ? void 0 : null == (B = c.video) ? void 0 : B.context)) {
                    var C, G = null == c ? void 0 : null == (C = c.video) ? void 0 : C.adPodDurationSec;
                    _.di(b, 1, G)
                } else C = null == c ? void 0 : null == (G = c.video) ? void 0 : G.maxduration, _.di(b, 1, C);
                var F;
                if ("number" === typeof(null == c ? void 0 : null == (F = c.video) ? void 0 : F.skip)) {
                    var N;
                    c = !!(null == c ? 0 : null == (N = c.video) ? 0 : N.skip);
                    Zh(b, 2, c)
                }
                var R;
                a = null == (R = a.meta) ? void 0 : R.adServerCatId;
                R = ri(b, 3, a);
                if ("object" !== typeof k) k = null;
                else {
                    var M, Z;
                    a = String(null != (Z = null != (M = k["hb_pb_cat_dur_" + l]) ? M : k.hb_pb_cat_dur) ? Z : "");
                    var fa, qa, ea, Pa;
                    M = String(null != (Pa = null != (ea = null != (qa = null != (fa = k["hb_cache_id_" + l]) ? fa : k["hb_uuid_" + l]) ? qa : k.hb_cache_id) ? ea : k.hb_uuid) ? Pa : "");
                    k = a && M ? a + "_" + M : M ? M : null
                }
                ri(R, 4, k);
                _.ii(v, 9, b)
        }
        _.z(Number, "isFinite").call(Number, p) && _.z(Number, "isFinite").call(Number, r) && (k = new vi, r = _.wi(k, 1, Math.round(r)), p = _.wi(r, 2, Math.round(p)), _.ii(v, 7, p));
        "string" === typeof m && ri(v, 1, m);
        return v
    };
    yi = function(a, b) {
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
            "bidTimeout" === h && e.push.apply(e, _.xi(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.x(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).pm = f)
            }
        }
        d = new _.u.Map;
        a = _.x(_.z(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.x(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.pm, g && h && d.set(f, {
            latency: h - g,
            Di: !1
        });
        e = _.x(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Di = !0;
        return d
    };
    Ki = function(a, b, c, d, e, f, g) {
        var h = _.Pf(zi);
        c = void 0 === c ? {} : c;
        d = void 0 === d ? new _.u.Map : d;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? new _.u.Map : f;
        g = void 0 === g ? new Ai : g;
        h = void 0 === h ? 0 : h;
        var k = new _.u.Map,
            l = (0, a.getEvents)(),
            m = l.filter(function(Ca) {
                var Na = Ca.args;
                return "auctionEnd" === Ca.eventType && Na.auctionId
            }),
            n = new Bi,
            p = function(Ca) {
                return Ca === b.ed || Ca === b.adUnitCode
            },
            r, v, w, y = null != (w = Ci.get((null != (r = b.ed) ? r : "") + (null != (v = b.adUnitCode) ? v : ""))) ? w : 0,
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
                var F, N;
                Ci.set((null != (F = b.ed) ? F : "") + (null != (N = b.adUnitCode) ? N : ""), m);
                F = Di(n);
                a.version && Ei.test(a.version) && ri(F, 6, a.version);
                var R, M;
                Fi(Gi(F, null == (R = a.getConfig) ? void 0 : null == (M = R.call(a).cache) ? void 0 : M.url), g);
                g = Hi(function() {
                    return yi(l, G)
                });
                R = _.x(B);
                N = R.next();
                for (M = {}; !N.done; M = {
                        bidderCode: void 0,
                        tj: void 0
                    }, N = R.next())
                    for (B = N.value, M.bidderCode = B.bidderCode, m = B.bids, N = B.timeout, M.tj = B.src, B = B.auctionStart, m = _.x(m), v = m.next(), r = {}; !v.done; r = {
                            Ae: void 0
                        }, v = m.next()) {
                        var Z = v.value;
                        r.Ae = Z.bidId;
                        var fa = Z.transactionId;
                        v = Z.adUnitCode;
                        w = Z.getFloor;
                        var qa = Z.mediaTypes;
                        Z = Z.ortb2Imp;
                        if (r.Ae && p(v)) {
                            hi(F, b, v);
                            var ea = void 0,
                                Pa = void 0;
                            h && !_.Ii(F, 11) && "string" === typeof(null == (ea = Z) ? void 0 : null == (Pa = ea.ext) ? void 0 : Pa.gpid) && ri(F, 11, Z.ext.gpid.substring(0, h));
                            fa && (_.Ii(F, 4) || ri(F, 4, fa), k.has(fa) || k.set(fa, B));
                            null == Ji(F, 8) && _.z(Number, "isFinite").call(Number, N) && _.wi(F, 8, N);
                            Z = _.z(C, "find").call(C, function(Ca) {
                                return function(Na) {
                                    return Na.requestId === Ca.Ae
                                }
                            }(r));
                            fa = Xh(F, function(Ca) {
                                return function() {
                                    var Na = ai(new bi, Ca.bidderCode);
                                    ci(Ca.bidderCode, a, Na);
                                    switch (Ca.tj) {
                                        case "client":
                                            _.gi(Na, 7, 1);
                                            break;
                                        case "s2s":
                                            _.gi(Na, 7, 2)
                                    }
                                    return Na
                                }
                            }(M)());
                            pi(F, fa, v, d, e, f, w);
                            Z ? ($h(fa, 1), "number" === typeof Z.timeToRespond && _.z(Number, "isFinite").call(Number, Z.timeToRespond) && _.di(fa, 2, Math.round(Z.timeToRespond)), r = Wh(Z, c, qa), Yh(fa, r)) : (r = g().get(r.Ae)) && !r.Di ? ($h(fa, 2), _.z(Number, "isFinite").call(Number, r.latency) && _.di(fa, 2, Math.round(r.latency))) : (r = $h(fa, 3), _.z(Number, "isFinite").call(Number, N) && _.di(r, 2, Math.round(N)))
                        }
                    }
                var wa;
                (null == (wa = a.getConfig) ? 0 : wa.call(a).useBidCache) && ei(F, b, G, c, a);
                return n
            }
        }
    };
    Li = function(a, b) {
        var c, d;
        return _.tb(function(e) {
            if (1 == e.g) return c = b ? a.filter(function(f) {
                return !f.Nd
            }) : a, e.yield(_.u.Promise.all(c.map(function(f) {
                return f.Vh.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function(f) {
                return f.Nd
            });
            return e.yield(_.u.Promise.race([_.u.Promise.all(d.map(function(f) {
                return f.Vh.promise
            })), new _.u.Promise(function(f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    };
    _.Mi = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.Oi = function(a) {
        var b = _.Ni(a);
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    Pi = function(a, b, c) {
        b = void 0 === b ? 420 : b;
        return (a = _.Ni(a, void 0 === c ? !1 : c)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    Qi = function(a) {
        return (a = _.Oi(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Ri = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.Si = function(a) {
        return _.Ri(a).clientHeight
    };
    _.Ni = function(a, b) {
        var c = _.Ri(a).clientWidth;
        return (void 0 === b ? 0 : b) ? c * _.Ti(a) : c
    };
    _.Ui = function(a, b) {
        var c = _.Ri(a);
        return b ? (a = _.Si(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    };
    _.Vi = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    Wi = function(a, b, c, d) {
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
    _.Xi = function(a) {
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
    Yi = function(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };
    _.cj = function(a) {
        var b = a.pa,
            c = a.Hg,
            d = a.hf,
            e = a.Gh,
            f = a.wa,
            g = a.nk,
            h = a.bn;
        a = 0;
        try {
            a |= b !== b.top ? 512 : 0;
            var k = Math.min(b.screen.width || 0, b.screen.height || 0);
            a |= k ? 320 > k ? 8192 : 0 : 2048;
            a |= b.navigator && Zi(b.navigator.userAgent) ? 1048576 : 0;
            if (c) {
                k = a;
                var l = b.innerHeight;
                var m = ((void 0 === h ? 0 : h) ? _.Ti(b) * l : l) >= c;
                var n = k | (m ? 0 : 1024)
            } else n = a | (_.Mi(b) ? 0 : 8);
            a = n;
            a |= Pi(b, d, h);
            h || (a |= Qi(b))
        } catch (p) {
            a |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = _.Xi({
                    Df: 0,
                    Le: b.innerWidth,
                    nf: 3,
                    Ef: 0,
                    Me: Math.min(Math.round(b.innerWidth / 320 * 50), $i) + 15,
                    pf: 3
                });
                null != aj(bj(b, c), d) && (a |= 16777216);
                break;
            case 1:
                c = f, c = void 0 === c ? null : c, d = b.innerWidth, e = b.innerHeight, n = Math.min(Math.round(b.innerWidth / 320 * 50), $i) + 15, m = _.Xi({
                    Df: 0,
                    Le: d,
                    nf: 3,
                    Ef: e - n,
                    Me: e,
                    pf: 3
                }), 25 < n && m.push({
                    x: d - 25,
                    y: e - 25
                }), null != aj(bj(b, c), m) && (a |= 16777216)
        }
        g && (f = void 0 === f ? null : f, f = void 0 === f ? null : f, g = b.innerHeight, g = _.Xi({
            Df: 0,
            Le: b.innerWidth,
            nf: 10,
            Ef: g - 66,
            Me: g,
            pf: 10
        }), g = null != aj(bj(b, f), g));
        g && (a |= 16777216);
        return a
    };
    Zi = function(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    };
    bj = function(a, b) {
        return new _.dj(a, {
            di: ej(a, void 0 === b ? null : b)
        })
    };
    ej = function(a, b) {
        if (b = void 0 === b ? null : b) {
            var c = b;
            return function(d, e, f) {
                var g, h;
                _.fj(c, "ach_evt", {
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
    oj = function(a) {
        var b = _.gj(new _.hj, a.pb);
        b = ij(b, 4, _.jj, gd(a.Il));
        b = _.kj(b, 11, a.Ea);
        b = _.lj(b, 8, a.pvsid);
        b = _.lj(b, 7, a.Qf);
        b = _.kj(b, 9, a.Hb);
        var c = _.mj(b, _.nj, 5);
        _.Me(c, 1, _.Vc, a.fb);
        return b
    };
    _.pj = function(a) {
        var b = _.gj(new _.hj, a.pb);
        b = ij(b, 3, _.jj, Wc(a.U));
        b = _.kj(b, 11, a.Ea);
        b = _.lj(b, 8, a.pvsid);
        b = _.lj(b, 7, a.Qf);
        b = _.kj(b, 9, a.Hb);
        var c = _.mj(b, _.nj, 5);
        _.Me(c, 1, _.Vc, a.fb);
        return b
    };
    tj = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.sj(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    uj = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.Og(d, function(e) {
                    return !_.z(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = tj(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    wj = function(a, b) {
        return null !== _.vj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        }, !0)
    };
    xj = function(a, b) {
        return _.vj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position
        }, !0)
    };
    yj = function(a) {
        for (var b = [], c = _.x(a.document.querySelectorAll("*")), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a.getComputedStyle(d, null);
            "fixed" === e.position && "none" !== e.display && "hidden" !== e.visibility && b.push(d)
        }
        return b
    };
    zj = function(a, b) {
        b = b.getBoundingClientRect();
        var c = b.left,
            d = b.bottom,
            e = b.right;
        return 0 <= b.top && 0 <= c && d <= a.innerHeight && e <= a.innerWidth
    };
    Aj = function(a) {
        return Math.round(10 * Math.round(a / 10))
    };
    Bj = function(a) {
        return a.position + "-" + Aj(a.ja) + "x" + Aj(a.sa) + "-" + Aj(a.scrollY + a.td) + "Y"
    };
    Cj = function(a) {
        return "f-" + Bj({
            position: a.position,
            td: a.td,
            scrollY: 0,
            ja: a.ja,
            sa: a.sa
        })
    };
    Dj = function(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    };
    Fj = function(a, b, c) {
        var d = _.Ej(c.pa).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.sa),
                    g = Math.max(e.left - 10, 0),
                    h = Math.min(e.right + 10, c.ja),
                    k = .3 * c.ja;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (0 < h && g < k) {
                        var l = Cj({
                            position: "left",
                            td: e,
                            ja: c.ja,
                            sa: c.sa
                        });
                        b.set(l, Dj(b.get(l), g))
                    }
                    if (g < c.ja && h > c.ja - k) {
                        l = Cj({
                            position: "right",
                            td: e,
                            ja: c.ja,
                            sa: c.sa
                        });
                        var m = c.ja - h;
                        b.set(l, Dj(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    };
    Ij = function(a, b) {
        var c = b.pa,
            d = b.Jc,
            e = "f-" + Aj(b.ja) + "x" + Aj(b.sa);
        a.has(e) || (a.set(e, 0), e = yj(c), d ? (Gj(a, b, e.filter(function(f) {
            return zj(c, f)
        })), Hj(c, e.filter(function(f) {
            return !zj(c, f)
        }))) : Gj(a, b, e))
    };
    Gj = function(a, b, c) {
        var d = b.Cc,
            e = b.pa;
        _.Ej(e).sideRailProcessedFixedElements.clear();
        d = new _.u.Set([].concat(_.xi(_.z(Array, "from").call(Array, e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), _.xi(d)));
        c = _.x(c);
        for (e = c.next(); !e.done; e = c.next()) e = e.value, wj(e, d) || Fj(e, a, b)
    };
    Jj = function(a) {
        if (1200 > a.ja || 650 > a.sa) return null;
        var b = _.Ej(a.pa).sideRailAvailableSpace;
        a.Ci || Ij(b, {
            pa: a.pa,
            ja: a.ja,
            sa: a.sa,
            Cc: a.Cc,
            Jc: a.Jc
        });
        for (var c = [], d = .9 * a.sa, e = _.Vi(a.pa), f = (a.sa - d) / 2, g = f, h = d / 7, k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            var n = g;
            var p = a.position,
                r = b,
                v = {
                    pa: a.pa,
                    ja: a.ja,
                    sa: a.sa,
                    Cc: a.Cc
                },
                w = Cj({
                    position: p,
                    td: n,
                    ja: v.ja,
                    sa: v.sa
                }),
                y = Bj({
                    position: p,
                    td: n,
                    scrollY: e,
                    ja: v.ja,
                    sa: v.sa
                });
            if (!r.has(y)) {
                var B = "left" === p ? 20 : v.ja - 20,
                    C = B;
                p = .3 * v.ja / 5 * ("left" === p ? 1 : -1);
                for (var G = 0; 6 > G; G++) {
                    var F = Yi(v.pa.document, {
                            x: Math.round(C),
                            y: Math.round(n)
                        }),
                        N = wj(F, v.Cc),
                        R = xj(F, v.pa);
                    if (!N && null !== R) {
                        Fj(R, r, v);
                        r.delete(y);
                        break
                    }
                    N || (N = v, "true" === F.getAttribute("google-side-rail-overlap") ? N = !0 : "false" === F.getAttribute("google-side-rail-overlap") ? N = !1 : (R = F.offsetHeight >= .25 * N.sa, N = F.offsetWidth >= .9 * N.ja && R));
                    if (N) r.set(y, Math.round(Math.abs(C - B) + 20));
                    else if (C !== B) C -= p, p /= 2;
                    else {
                        r.set(y, 0);
                        break
                    }
                    C += p
                }
            }
            n = Dj(r.get(w), r.get(y));
            m.call(l, n);
            g += h
        }
        b = a.nj;
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
    Hj = function(a, b) {
        var c = _.Ej(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(function() {
                setTimeout(function() {
                    Kj(a);
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
    Kj = function(a) {
        a = _.Ej(a).sideRailAvailableSpace;
        var b = _.z(Array, "from").call(Array, _.z(a, "keys").call(a)).filter(function(d) {
            return _.z(d, "startsWith").call(d, "f-")
        });
        b = _.x(b);
        for (var c = b.next(); !c.done; c = b.next()) a.delete(c.value)
    };
    _.Lj = function(a) {
        if (a.la) return a.la.Gb(1228, function() {
            return Jj(a)
        }) || null;
        try {
            return Jj(a)
        } catch (b) {}
        return null
    };
    Mj = function(a, b, c, d, e) {
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
    Tj = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.z(Nj, "includes").call(Nj, e.height) || (null == e ? 0 : e.maxHeight) && !_.z(Oj, "includes").call(Oj, e.maxHeight) || Mj(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.z(Nj, "includes").call(Nj, g) || !!f && !_.z(Oj, "includes").call(Oj, f)
        }, c, d) ? !1 : !0
    };
    Vj = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        Uj(a, function(e) {
            return d = Tj(e, b, 10, 10)
        }, c);
        return d
    };
    Wj = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Zj = function(a) {
        a = Xj(a);
        return _.Yj(a)
    };
    Xj = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    ck = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = ak.g();
        0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
        2 === e.g && (e = {}, hg(_.z(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(bk(window)), e.em = c, e.lid = b, e.eids = mh().join(), e), d), "esp"))
    };
    dk = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new _.u.Promise(function(c) {
            var d = function() {
                c(b());
                _.dg(a, "load", d)
            };
            _.rb(a, "load", d)
        })
    };
    ek = function(a) {
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
    ik = function(a, b) {
        return _.fk(a, gk, 2).some(function(c) {
            return hk(c, 1) === b && _.Ii(c, 2)
        })
    };
    jk = function(a, b) {
        return _.fk(a, gk, 2).some(function(c) {
            return hk(c, 1) === b && _.Ii(c, 2)
        })
    };
    pk = function(a, b, c, d) {
        if (b)
            for (var e = _.x(ek(b)), f = e.next(), g = {}; !f.done; g = {
                    Ic: void 0
                }, f = e.next())
                if (g.Ic = f.value, (f = kk().get(g.Ic, b).Yc) && !jk(a, g.Ic)) {
                    var h = lk(f);
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
                        Zh(f, 9, h);
                        (h = hk(f, 2)) && 1024 < h.length && (k = {}, ck(55, g.Ic, null, (k.sl = String(h.length), k)), _.mk(f.lb(nk(108)), 2));
                        ok(a, 2, gk, f);
                        f = hk(f, 2);
                        k = h = void 0;
                        var l = {};
                        ck(19, g.Ic, null, (l.hs = f ? "1" : "0", l.sl = String(null != (k = null == (h = f) ? void 0 : h.length) ? k : -1), l))
                    }
                }
    };
    qk = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    Ck = function(a, b, c, d, e, f) {
        f = void 0 === f ? rk : f;
        var g, h, k, l, m, n, p, r, v, w, y, B, C;
        return _.tb(function(G) {
            return 1 == G.g ? (g = new sk, h = new tk(a, c, e), J(g, h), J(g, new uk(h.o, void 0, d, e)), k = new vk(h.j, e), J(g, k), l = new wk(k.j, e), J(g, l), m = new xk(b, l.j, e), J(g, m), J(g, new uk(m.o, void 0, d, e)), n = new yk(m.j, m.H, f.rh ? 1024 : 300, f.rh ? 1024 : 1E3, e), J(g, n), J(g, new uk(n.j, void 0, d, e)), p = new zk(e), J(g, p), r = new Ak(p.output, l.o, e), J(g, r), v = new xk(b, r.j, e), J(g, v), w = new uk(v.j, void 0, d, e), J(g, w), Bk(g), C = a, G.yield(n.j.promise, 2)) : G.return({
                id: C,
                collectorGeneratedData: null != (B = null == (y = G.A) ? void 0 : hk(y, 2)) ? B : null
            })
        })
    };
    Ik = function(a, b, c, d) {
        var e = {
            rh: _.E(Dk)
        };
        e = void 0 === e ? rk : e;
        Ek() !== Fk(window) ? ck(16, "") : Gk(a, "encryptedSignalProviders", c) && Gk(a, "secureSignalProviders", c) || (ck(38, ""), Hk(a, "encryptedSignalProviders", b, e, c, d), Hk(a, "secureSignalProviders", b, e, c, function() {}))
    };
    Gk = function(a, b, c) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    Hk = function(a, b, c, d, e, f) {
        var g, h = new Jk(null != (g = a[b]) ? g : [], c, "secureSignalProviders" === b, f, d);
        a[b] = new Kk(h);
        h.addErrorHandler(e)
    };
    Nk = function(a, b) {
        var c = new sk,
            d = new zk(b);
        a = new Lk(d.output, a, b);
        Mk(c, [d, a]);
        Bk(c)
    };
    Rk = function(a, b, c, d, e) {
        var f = b.toString();
        if (Ok.has(f)) return null;
        Ok.add(f);
        f = new sk;
        a = new tk(a, c, e);
        var g = new uk(a.o, c, d, e),
            h = new Pk(a.j, e),
            k = new vk(h.j, e);
        b = new Qk(k.j, b, e);
        c = new uk(b.j, c, d, e);
        Mk(f, [a, g, h, k, b, c]);
        Bk(f);
        return f
    };
    Tk = function(a, b, c) {
        c = void 0 === c ? Sk : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.rb(a, "load", function() {
            return void c(a, b)
        }))
    };
    Uk = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Vk = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Xk = function(a) {
        if (a === a.top || _.Wk(a.top)) return _.u.Promise.resolve({
            status: 4
        });
        var b = Uk(a);
        if (!b) return _.u.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Vk(a.document.referrer)) return _.u.Promise.resolve({
            status: 3
        });
        var c = new _.Ah;
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
    al = function(a, b) {
        var c = Yk(a);
        return c.messageChannelSendRequestFn ? _.u.Promise.resolve(c.messageChannelSendRequestFn) : new _.u.Promise(function(d) {
            function e(k) {
                return h.g(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.cg("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.ib(Zk).toString();
            var g = (new URL(Zk.toString())).origin,
                h = $k({
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
    hl = function(a, b, c, d) {
        var e = {
            skipTopicsObservation: _.E(bl),
            includeBuyerTopics: _.E(cl)
        };
        e = void 0 === e ? {} : e;
        var f = dl(d),
            g = f.Ee,
            h = f.De;
        b = Yk(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics
        }).then(function(k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && ta(k, g)));
            else if (Tg()(k)) l || (l = k !== g);
            else return c.Fb(989, Error(JSON.stringify(k))), 7;
            if (l && d) try {
                var m = new el;
                var n = _.di(m, 2, _.Zf());
                k instanceof Uint8Array ? ij(n, 1, fl, vc(k, !1, !1)) : ij(n, 3, fl, Wc(k));
                d.setItem("goog:cached:topics", gl(n))
            } catch (p) {}
            return k
        }), b.getTopicsPromise = a);
        return g && !h ? _.u.Promise.resolve(g) : b.getTopicsPromise
    };
    dl = function(a) {
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
            var c = il(b),
                d = jl(c, fl);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    e = kl(ll(c, ml(c, fl, 1)));
                    break;
                case 3:
                    e = _.jg(c, ml(c, fl, 3), 0);
                    break;
                default:
                    nb(d)
            }
            var f = _.Kg(c, 2) + 6048E5 < _.Zf();
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
    Yk = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    pl = function(a) {
        if (Ka()) {
            var b = a.document.documentElement.lang;
            nl(a) ? ol(bk(a), !0, "", b) : (new MutationObserver(function(c, d) {
                nl(a) && (ol(bk(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    nl = function(a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    };
    ol = function(a, b, c, d) {
        hg({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    rl = function(a) {
        var b = "";
        ql(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    sl = function() {
        var a = Date.now();
        return _.z(Number, "isFinite").call(Number, a) ? Math.round(a) : 0
    };
    vl = function(a) {
        var b = new tl;
        var c = sl();
        b = _.lj(b, 1, c);
        b = _.lj(b, 2, a.pvsid);
        b = _.kj(b, 3, a.Pa);
        c = mh();
        b = _.Ke(b, 4, c, Yc);
        b = _.lj(b, 5, a.Ji);
        a = _.kj(b, 12, a.Ea);
        var d;
        if (b = null == (d = _.u.globalThis.performance) ? void 0 : d.memory) {
            d = new ul;
            try {
                _.lj(d, 1, b.jsHeapSizeLimit)
            } catch (e) {}
            try {
                _.lj(d, 2, b.totalJSHeapSize)
            } catch (e) {}
            try {
                _.lj(d, 3, b.usedJSHeapSize)
            } catch (e) {}
        } else d = void 0;
        d && _.ii(a, 10, d);
        return a
    };
    Cl = function(a) {
        var b = _.bg();
        if (a.Wc) {
            var c = a.Qa,
                d = c.Vc,
                e = vl(a),
                f = new wl;
            b = _.lj(f, 2, b);
            f = new xl;
            f = _.yl(f, 1, a.Wc);
            f = _.zl(f, 2, a.Ji);
            f = _.yl(f, 3, a.qj);
            f = _.zl(f, 4, a.Ii);
            f = _.yl(f, 5, a.ih);
            a = _.zl(f, 6, a.ig);
            a = _.ii(b, 3, a);
            e = _.Al(e, 6, Bl, a);
            d.call(c, e)
        }
    };
    Fl = function(a) {
        if (!a.Wc) return function() {};
        var b = sl();
        a.Qa.Vc(Dl(vl(a)));
        return function() {
            var c = a.Qa,
                d = c.Vc,
                e = vl(a);
            var f = new El;
            var g = sl() - b;
            f = _.lj(f, 1, g);
            e = _.Al(e, 14, Bl, f);
            return void d.call(c, e)
        }
    };
    Gl = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    L = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function() {
            var e = _.Va.apply(0, arguments),
                f = Hl(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Wc && a.qj) {
                    var h = a.Qa,
                        k = h.Vc,
                        l = vl(a);
                    var m = _.lj(l, 5, a.Ii);
                    var n = new Il;
                    var p = _.K(n, 1, b);
                    var r = _.zl(p, 2, g);
                    var v = _.Al(m, 9, Bl, r);
                    k.call(h, v)
                }
            } catch (w) {}
            return f
        }
    };
    Hl = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = _.Va.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.Nf(Jl);
            try {
                var l = _.E(Kl);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) Ll.call(this, a, 110, m);
                    else if (Ll.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if (_.Ml(h), !g && !d) throw m;
                }
            }
            return f
        }
    };
    Nl = function(a, b, c, d) {
        return Hl(a, b, c, void 0 === d ? !1 : d)()
    };
    Ll = function(a, b, c) {
        if (a.ih) {
            c = _.Ol(c) ? c.error : c;
            var d = new Pl,
                e = new Ql;
            try {
                var f = bk(window);
                _.lj(e, 1, f)
            } catch (p) {}
            try {
                var g = mh();
                _.Ke(e, 2, g, Yc)
            } catch (p) {}
            try {
                _.kj(e, 3, window.document.URL)
            } catch (p) {}
            f = _.ii(d, 2, e);
            g = new Rl;
            b = _.K(g, 1, b);
            try {
                var h = $g(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.kj(b, 2, h)
            } catch (p) {}
            try {
                var k = $g(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.kj(b, 3, k)
            } catch (p) {}
            try {
                var l = $g(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.Ke(b, 4, l.split(/\n\s*/), _.ud)
            } catch (p) {}
            h = _.ii(f, 1, b);
            k = new Sl;
            try {
                _.kj(k, 1, a.Pa)
            } catch (p) {}
            try {
                var m = Tl();
                _.zl(k, 2, m)
            } catch (p) {}
            try {
                var n = [].concat(_.xi(_.z(Ul, "keys").call(Ul)));
                _.Ke(k, 3, n, _.ud)
            } catch (p) {}
            _.Al(h, 4, Vl, k);
            _.lj(h, 5, a.ig);
            a.Qa.vm(h)
        }
    };
    Yl = function(a, b) {
        var c = Wl.get(a);
        c || (b = c = b(), Xl.set(b, a), Wl.set(a, b));
        return c
    };
    O = function(a) {
        return function() {
            return new Zl(a, [].concat(_.xi(_.Va.apply(0, arguments))))
        }
    };
    $l = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? $l(b) : String(b)
        }).join(", ") + "]"
    };
    am = function(a, b) {
        b = $l(b);
        b = b.substring(1, b.length - 1);
        return new Zl(96, [a, b])
    };
    bm = function(a) {
        return (_.H = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable gameManualInterstitialSlotReady gameManualInterstitialSlotClosed".split(" "), _.z(_.H, "includes")).call(_.H, a) ? a : null
    };
    dm = function(a, b, c) {
        return Yl(c, function() {
            return new cm(a, b, c)
        })
    };
    fm = function(a, b, c) {
        return Yl(c, function() {
            return new em(a, b, c)
        })
    };
    gm = function(a, b, c, d) {
        "string" === typeof a ? b.setClickUrl(a) : P(d, am("Slot.setClickUrl", [a]), c)
    };
    nm = function(a, b, c, d, e) {
        if ("string" !== typeof a || hm(a)) P(e, am("Slot.setTargeting", [a, b]), c);
        else {
            var f = [];
            Array.isArray(b) ? f = b : _.ra(b) ? f = _.z(Array, "from").call(Array, b) : b && (f = [b]);
            f = f.map(String);
            (b = (_.H = im(d), _.z(_.H, "find")).call(_.H, function(g) {
                return hk(g, 1) === a
            })) ? jm(b, f): (b = jm(km(new lm, a), f), ok(d, 9, lm, b));
            e.info(mm(a, f.join(), d.getAdUnitPath()), c)
        }
    };
    om = function(a, b, c, d) {
        if (null != a && "object" === typeof a)
            for (var e = _.x(_.z(Object, "keys").call(Object, a)), f = e.next(); !f.done; f = e.next()) f = f.value, nm(f, a[f], b, c, d);
        else d.error(am("Slot.updateTargetingFromMap", [a]), b)
    };
    qm = function(a, b, c, d) {
        return "string" !== typeof a ? (P(d, am("Slot.getTargeting", [a]), b), []) : (b = (_.H = im(c), _.z(_.H, "find")).call(_.H, function(e) {
            return hk(e, 1) === a
        })) ? pm(b).slice() : []
    };
    rm = function(a) {
        return im(a).map(function(b) {
            return _.I(b, 1)
        })
    };
    wm = function(a, b, c, d) {
        if (void 0 === a) _.mk(c, 9), d.info(sm(b.getAdUnitPath()), b);
        else {
            var e = im(c),
                f = _.z(e, "findIndex").call(e, function(g) {
                    return hk(g, 1) === a
                });
            0 > f ? P(d, tm(a, b.getAdUnitPath()), b) : (e.splice(f, 1), _.um(c, 9, e), d.info(vm(a, b.getAdUnitPath()), b))
        }
    };
    _.zm = function(a) {
        _.Nf(xm).g = !0;
        return ym[a]
    };
    Dm = function(a, b, c) {
        var d, e;
        return null != (e = null == (d = _.z(a, "find").call(a, function(f) {
            f = _.Am(f, Bm, 1);
            return Cm(f, 1) <= b && Cm(f, 2) <= c
        })) ? void 0 : _.fk(d, Bm, 2)) ? e : null
    };
    Fm = function(a, b, c) {
        var d;
        "number" === typeof b && "number" === typeof c && _.fk(a, Em, 6).length ? d = Dm(_.fk(a, Em, 6), b, c) : d = _.fk(a, Bm, 5);
        return d
    };
    Hm = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = Gm(!1, b), c = Fm(a, b.width, b.height));
        null != c || (c = Fm(a));
        return null == c ? [] : c.map(function(d) {
            return _.Q(d, 3) ? "fluid" : [Cm(d, 1), Cm(d, 2)]
        })
    };
    Im = function(a) {
        var b = [],
            c = !1;
        a = _.x(Hm(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Jm = function(a) {
        return 0 !== a && 1 !== a
    };
    Km = function(a) {
        return Jm(a) && !(_.H = [8, 9], _.z(_.H, "includes")).call(_.H, a)
    };
    Lm = function(a) {
        var b = a.document;
        return bh(a) ? b.URL : b.referrer
    };
    Om = function(a) {
        try {
            return Mm(a, window.top)
        } catch (b) {
            return new _.Nm(-12245933, -12245933)
        }
    };
    Sm = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Pm(Qm, a), a = new _.Rm(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Um = function(a, b) {
        for (var c = {}, d = _.x(_.z(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = _.he(b[e]),
                g = _.Nf(Tm),
                h = g.g.get(e);
            null == h ? h = ++_.Nf(Jl).l : g.g.delete(e);
            _.mk(f, 20, _.ad(h));
            c[e] = f
        }
        return {
            ca: _.he(a),
            T: c
        }
    };
    Wm = function() {
        for (var a = "", b = _.x(Vm()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Vm = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    bn = function(a, b, c, d) {
        var e = Xm(b, a) || Ym(b, a);
        if (!e) return null;
        var f = Om(e),
            g = e === Ym(b, a),
            h = Hi(function() {
                var p = g ? Ym(b, a) : e;
                return p && Zm(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = Hm(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = $m(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = $m(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && an(e) ? f : new _.Nm(-12245933, -12245933)
    };
    cn = function(a, b, c, d) {
        var e = Ym(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = bn(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    dn = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    en = function(a) {
        return dn(a) + "__container__"
    };
    Xm = function(a, b) {
        var c;
        return (null == (c = Ym(a, b)) ? void 0 : c.querySelector('[id="' + en(a) + '"]')) || null
    };
    fn = function(a, b) {
        var c, d;
        return null != (d = null == (c = Xm(a, b)) ? void 0 : c.querySelector('iframe[id="' + dn(a) + '"]')) ? d : null
    };
    Ym = function(a, b) {
        b = void 0 === b ? document : b;
        return gn().l.get(a) || b.getElementById(a.getDomId())
    };
    jn = function(a, b, c) {
        return Yl(c, function() {
            return new hn(a, b, c, c.g)
        })
    };
    kn = function(a) {
        return _.z(Object, "assign").call(Object, {}, a, _.z(Object, "fromEntries").call(Object, _.z(Object, "entries").call(Object, a).map(function(b) {
            b = _.x(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    on = function() {
        var a = {},
            b = kn(ln);
        a.OutOfPageFormat = b;
        b = kn(mn);
        a.TrafficSource = b;
        b = kn(nn);
        a.Taxonomy = b;
        return a
    };
    pn = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a.tag_origin = "to", a
    };
    zn = function(a, b, c, d, e) {
        if ("string" === typeof a && a.length && void 0 !== pn()[a] && "string" === typeof b) {
            var f = (_.H = c.Sa(), _.z(_.H, "find")).call(_.H, function(g) {
                return hk(g, 1) === a
            });
            f ? jm(f, [b]) : (f = qn(km(new lm, a), b), ok(c, 14, lm, f));
            e.info(rn(a, String(b), d))
        } else P(e, am("PubAdsService.set", [a, b]))
    };
    An = function(a, b, c) {
        return "string" !== typeof a ? (P(c, am("PubAdsService.get", [a])), null) : (b = (b = (_.H = b.Sa(), _.z(_.H, "find")).call(_.H, function(d) {
            return hk(d, 1) === a
        })) && pm(b)) ? b[0] : null
    };
    Bn = function(a) {
        return a.Sa().map(function(b) {
            return _.I(b, 1)
        })
    };
    Dn = function() {
        for (var a = Qf(Cn) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    Hn = function() {
        if (En) return En;
        for (var a = Rf(Fn), b = [], c = 0; c < a.length; c += 2) _.Gn(a[c], a[c + 1], b);
        return En = b.join("&")
    };
    Mn = function(a, b) {
        if (!b || !_.ja(b)) return null;
        var c = !1,
            d = new In;
        _.Jn(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? Zh(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? Zh(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? Zh(d, 3, b.sandbox) : c = g = !0;
                    break;
                default:
                    g = !0
            }
            g && a.error(Kn("setSafeFrameConfig", Ln(b), f, Ln(e)))
        });
        return c ? null : d
    };
    On = function(a) {
        var b = new In;
        a = _.x(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) {
                if (null != Nn(c, 1)) {
                    var d = b,
                        e = _.Q(c, 1);
                    Zh(d, 1, e)
                }
                null != Nn(c, 2) && (d = b, e = _.Q(c, 2), Zh(d, 2, e));
                null != Nn(c, 3) && (d = b, c = _.Q(c, 3), Zh(d, 3, c))
            }
        return b
    };
    Pn = function(a, b) {
        var c = {};
        b = (c[0] = th(b.pvsid), c);
        return _.Nf(kh).A(a, b)
    };
    Rn = function(a, b) {
        var c;
        return null == (c = _.Qn(a, "__gads", b)) ? void 0 : _.z(c.split(":"), "find").call(c.split(":"), function(d) {
            return 0 === d.indexOf("ID=")
        })
    };
    Sn = function(a, b, c, d) {
        (c = Rn(c, d)) ? (d = {}, b = (d[0] = th(b.pvsid), d[1] = th(c), d), _.Nf(kh).A(a, b)) : Pn(a, b)
    };
    Wn = function(a) {
        var b = a.key,
            c = a.value,
            d = a.Fa,
            e = a.serviceName,
            f = a.Em,
            g = a.ib,
            h = a.R;
        a = a.context;
        var k = null;
        "string" === typeof c ? k = [c] : Array.isArray(c) ? k = c : _.ra(c) && (k = _.z(Array, "from").call(Array, c));
        var l = "string" === typeof b && !hm(b);
        k = k && va(k);
        var m, n = null != (m = null == k ? void 0 : k.every(function(p) {
            return "string" === typeof p
        })) ? m : !1;
        if (l && n) {
            c = k;
            m = (_.H = _.fk(d, lm, 2), _.z(_.H, "find")).call(_.H, function(p) {
                return hk(p, 1) === b
            });
            if ("gpt-beta" === b) {
                if (f) {
                    P(h, Tn(c.join()));
                    return
                }
                if (m) {
                    P(h, Un(c.join()));
                    return
                }
                c = Vn(c, g, a)
            }
            m ? jm(m, c) : (f = jm(km(new lm, b), c), ok(d, 2, lm, f));
            h.info(mm(b, c.join(), e))
        } else P(h, am("PubAdsService.setTargeting", [b, c]))
    };
    Xn = function(a, b, c) {
        return "string" !== typeof a ? (P(c, am("PubAdsService.getTargeting", [a])), []) : (b = (_.H = _.fk(b, lm, 2), _.z(_.H, "find")).call(_.H, function(d) {
            return hk(d, 1) === a
        })) ? pm(b).slice() : []
    };
    Yn = function(a) {
        return _.fk(a, lm, 2).map(function(b) {
            return _.I(b, 1)
        })
    };
    bo = function(a, b, c, d) {
        if (void 0 === a) _.mk(b, 2), d.info(Zn(c));
        else if ("gpt-beta" === a) P(d, $n(a));
        else {
            var e = _.fk(b, lm, 2),
                f = _.z(e, "findIndex").call(e, function(g) {
                    return hk(g, 1) === a
                });
            0 > f ? P(d, tm(a, c)) : (e.splice(f, 1), _.um(b, 2, e), d.info(ao(a, c)))
        }
    };
    Vn = function(a, b, c) {
        var d = [];
        a = _.x(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            b.g = e;
            var f = Pn(9, c);
            1 === f.length && (d.push(e), d.push(e + "-" + f[0]))
        }
        return d
    };
    eo = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = co.exec(null != (b = null == (a = _.zm(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    fo = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    go = function(a, b) {
        var c = b.g;
        return a.map(function(d) {
            return _.z(c, "find").call(c, function(e) {
                return e.g === d
            })
        }).filter(Vg())
    };
    io = function() {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function() {
                ho();
                return !0
            },
            set: function() {
                ho()
            },
            configurable: !0
        })
    };
    lo = function(a, b, c, d, e, f) {
        var g = jo(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Fa;
        if (!f || !g) return P(b, am("PubAdsService.definePassback", [d, e])), null;
        Zh(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Xi: jn(a, b, new ko(a, f, c)),
            Fa: g
        }
    };
    no = function(a, b, c, d, e) {
        return Yl(c, function() {
            return new mo(a, b, c, d, e)
        })
    };
    oo = function(a, b, c, d, e) {
        "string" !== typeof a || "string" !== typeof b || void 0 === pn()[a] ? P(e, am("Slot.set", [a, b]), c) : (c = (_.H = d.Sa(), _.z(_.H, "find")).call(_.H, function(f) {
            return hk(f, 1) === a
        })) ? jm(c, [b]) : (b = qn(km(new lm, a), b), ok(d, 3, lm, b))
    };
    po = function(a, b, c, d) {
        return "string" !== typeof a ? (P(d, am("Slot.get", [a]), b), null) : (b = (b = (_.H = c.Sa(), _.z(_.H, "find")).call(_.H, function(e) {
            return hk(e, 1) === a
        })) && pm(b)) ? b[0] : null
    };
    qo = function(a) {
        return a.Sa().map(function(b) {
            return _.I(b, 1)
        })
    };
    so = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(ro) : "fluid" === a
    };
    to = function(a) {
        return Array.isArray(a) && 2 === a.length && ro(a[0]) && ro(a[1])
    };
    vo = function(a) {
        if (Array.isArray(a)) {
            var b = new Bm;
            b = _.mk(b, 1, _.ad(a[0]));
            a = _.mk(b, 2, _.ad(a[1]))
        } else a = uo();
        return a
    };
    xo = function(a) {
        var b = [];
        if (wo(a)) b.push(vo(a));
        else if (Array.isArray(a)) {
            a = _.x(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, wo(c) ? b.push(vo(c)) : ta(c, ["fluid"]) && b.push(uo())
        }
        return b
    };
    yo = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return xo(a)
    };
    wo = function(a) {
        return _.E(zo) ? Array.isArray(a) && 2 === a.length ? a.every(Ao) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    Co = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new Bo("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!to(b)) throw new Bo("Size must be an array of two non-negative integers");
        var c = new Bm;
        c = _.mk(c, 1, _.ad(b[0]));
        b = _.mk(c, 2, _.ad(b[1]));
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = xo(a[1]), 0 === a.length) throw new Bo("At least one slot size must be present");
        c = new Em;
        b = _.ii(c, 1, b);
        return _.um(b, 2, a)
    };
    Do = function() {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {
            cmd: []
        }
    };
    Ho = function(a, b) {
        _.E(Eo) ? (_.mk(a, 28), null !== b && Wg(b) && _.z(Object, "hasOwn").call(Object, b, "enabled") && (b = b.enabled, Fo(b) && (b = Go(b), _.ii(a, 28, b)))) : void 0 === b || null === b ? _.mk(a, 28) : (b = b.enabled, Fo(b) ? (b = Go(b), _.ii(a, 28, b)) : void 0 !== b && null !== b || _.mk(a, 28))
    };
    Io = function(a, b) {
        if (!b) return [];
        var c = [];
        b = _.x((_.H = Ie(b, 26, Cd), _.z(_.H, "values")).call(_.H));
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            try {
                c.push(JSON.parse(d))
            } catch (e) {
                Ll(a, 1023, e)
            }
        }
        return c
    };
    Ko = function(a, b, c) {
        return Yl(c, function() {
            return new Jo(a, b, c)
        })
    };
    Uo = function(a, b, c, d, e, f, g, h) {
        var k = new sk,
            l = new Lo(a, h);
        J(k, l);
        e = new Mo(a, d, e);
        J(k, e);
        e = new No(a, b, d, f, l.nb);
        J(k, e);
        h = new Oo(a, b, c, d, h, f, l.nb);
        J(k, h);
        if (_.E(Po)) {
            b = new Qo(a, b, c, d, f, l.nb);
            J(k, b);
            var m = b.j
        }
        l = new Ro(a, l.nb, h.j, e.j, m);
        J(k, l);
        _.E(So) && J(k, new To(a, g, l.output));
        Bk(k);
        return {
            nb: l.output,
            Ka: k
        }
    };
    Wo = function(a, b) {
        return Yl(b, function() {
            return new Vo(a, b)
        })
    };
    Yo = function(a, b, c) {
        var d = Hl(a, 77, function() {
            var e = b.cmd;
            if (!e || Array.isArray(e)) {
                var f = new Xo(c);
                b.cmd = Wo(a, f);
                null != e && e.length && f.push.apply(f, e)
            }
        });
        b.fifWin && "complete" !== document.readyState ? _.rb(window, "load", function() {
            return window.setTimeout(d, 0)
        }) : d()
    };
    ap = function(a) {
        var b = window;
        "complete" === _.t.document.readyState ? Nl(a, 94, function() {
            Do()._pubconsole_disable_ || null !== Zo(b) && $o(a, b)
        }) : _.rb(_.t, "load", Hl(a, 94, function() {
            Do()._pubconsole_disable_ || null !== Zo(b) && $o(a, b)
        }))
    };
    $o = function(a, b) {
        b = void 0 === b ? _.t : b;
        if (!bp) {
            var c = new cp("gpt_pubconsole_loaded");
            dp(c, a);
            ep(c, "param", String(Zo(b)));
            ep(c, "api", String(fp));
            gp(c);
            _.hp(b.document, ip);
            bp = !0
        }
    };
    Zo = function(a) {
        var b = Lm(a),
            c;
        return null != (c = (_.H = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.z(_.H, "find")).call(_.H, function(d) {
            var e = b.search(jp);
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
    kp = function() {
        Do()._pubconsole_disable_ = !0
    };
    np = function() {
        lp && (Do().console.openConsole(mp), mp = void 0, lp = !1)
    };
    op = function(a) {
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
    pp = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(hk(a, 1)), c.push(Im(a)), c.push(hk(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.sh(c.join(":")).toString() : "0"
    };
    qp = function(a) {
        if (!_.Wk(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    sp = function(a, b, c, d, e) {
        var f = void 0,
            g = Hl(a.context, b, e);
        _.rb(c, d, g) && (f = function() {
            return void _.dg(c, d, g)
        }, _.rp(a, f));
        return f
    };
    up = function(a) {
        a = (_.Wk(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!tp(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    vp = function(a) {
        return Math.round(Number($m(a)))
    };
    wp = function(a) {
        var b = a.parentElement;
        return !b || 1 >= b.children.length ? !1 : _.z(Array, "from").call(Array, b.children).some(function(c) {
            return c !== a && !(_.H = ["script", "style"], _.z(_.H, "includes")).call(_.H, c.tagName.toLowerCase())
        })
    };
    yp = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.xp(a, c), a = a.parentElement
    };
    zp = function(a, b, c, d, e) {
        _.xp(a, {
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
        }, c(-b), _.xp(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.xp(a, f)), !0) : !1
    };
    Bp = function(a, b, c, d, e, f, g, h, k, l) {
        window.setTimeout(function() {
            var m = Im(d);
            if (window.IntersectionObserver) {
                var n, p = null != (n = fn(c, b)) ? n : Ym(c, b);
                m = Ap(a, b, c, e, f, g, m, h, k, l, p);
                (new window.IntersectionObserver(m, {
                    threshold: .98
                })).observe(p)
            }
        }, 500)
    };
    Ap = function(a, b, c, d, e, f, g, h, k, l, m) {
        var n = window.location && "#flexibleAdSlotTest" === window.location.hash ? 1 : _.Pf(Cp);
        return Hl(a, 459, function(p, r) {
            (p = null == p ? void 0 : p[0]) && Dp(a, b, c, d, e, f, g, h, k, l, r, m, p, n)
        })
    };
    Dp = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        var v = p.boundingClientRect,
            w = p.intersectionRatio,
            y = window.innerWidth,
            B = v.left,
            C = v.right,
            G = 0 > B + 2,
            F = 0 < C - (y + 2);
        (.98 <= w || G || F) && Ep(k, function(N) {
            m.unobserve(n);
            var R = G || F;
            var M = new Fp;
            Gp(n, R) && M.set(10);
            if (void 0 !== h && wp(n)) {
                var Z, fa = null == (Z = Ym(c, b)) ? void 0 : Z.parentElement,
                    qa;
                Z = fa ? null == (qa = Zm(fa, window)) ? void 0 : qa.width : void 0;
                h !== Z && M.set(16)
            }
            R ? (M.set(8), R = Hp(M)) : R = Ip(b, c, w, M);
            qa = Jp(c, n, f);
            M = qa.ul;
            qa = qa.xl;
            dp(N, a);
            ep(N, "qid", l);
            ep(N, "iu", c.getAdUnitPath());
            ep(N, "e", String(R));
            G && ep(N, "ofl", String(B));
            F && ep(N, "ofr", String(C - y));
            ep(N, "ret", e + "x" + f);
            ep(N, "req", g);
            ep(N, "bm", String(d));
            ep(N, "efh", Number(M));
            ep(N, "stk", Number(qa));
            ep(N, "ifi", Kp(window))
        }, r)
    };
    Ip = function(a, b, c, d) {
        var e = fn(b, a) || Ym(b, a);
        try {
            var f = e.getBoundingClientRect(),
                g = f.left,
                h = f.top,
                k = f.width,
                l = f.height,
                m = Ym(b, a),
                n = Zm(m, window);
            if ("hidden" === n.visibility || "none" === n.display) return Hp(d);
            var p = vp(n.getPropertyValue("border-top-width") || 0) + 1;
            b = g + k;
            f = h + l;
            c = (1 - c) * l;
            var r = a.elementsFromPoint(g + p + 2, h + c + p);
            var v = a.elementsFromPoint(b - p - 2, h + c + p);
            var w = a.elementsFromPoint(b - p - 2, f - c - p);
            var y = a.elementsFromPoint(g + p + 2, f - c - p);
            var B = a.elementsFromPoint(b / 2, f - c - p)
        } catch (G) {
            return d.set(1), Hp(d)
        }
        if (!(r && r.length && v && v.length && w && w.length && y && y.length && B && B.length)) return d.set(7), Hp(d);
        a = function(G, F) {
            for (var N = !1, R = 0; R < G.length; R++) {
                var M = G[R];
                if (N) {
                    var Z = Zm(M, window);
                    if ("hidden" !== Z.visibility && !Lp(M) && !C(e, M)) {
                        d.set(F);
                        "absolute" === Z.position && d.set(11);
                        break
                    }
                } else e === M && (N = !0)
            }
        };
        Mp(e) && d.set(9);
        var C = function(G, F) {
            return Np(G, F) || Np(F, G)
        };
        g = r[0];
        e === g || C(e, g) || Lp(g) || d.set(2);
        g = v[0];
        e === g || C(e, g) || Lp(g) || d.set(3);
        g = w[0];
        e === g || C(e, g) || Lp(g) || d.set(4);
        g = y[0];
        e === g || C(e, g) || Lp(g) || d.set(5);
        if (Lp(e)) return Hp(d);
        a(r, 12);
        a(v, 13);
        a(w, 14);
        a(y, 15);
        a(B, 6);
        return Hp(d)
    };
    Gp = function(a, b) {
        var c = !1,
            d = !1;
        return Op(a, function(e, f) {
            d = d || "scroll" === e.overflowX || "auto" === e.overflowX;
            c = c || "flex" === e.display;
            return b && c && d || "listbox" === f.role
        })
    };
    Jp = function(a, b, c) {
        var d = (a = Ym(a)) && Zm(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        Uj(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = Tj(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.z(l, "endsWith").call(l, "px") ? vp(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.z(Nj, "includes").call(Nj, l) || (e = !1)
                }
            f || (k = Zm(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            ul: e,
            xl: f
        }
    };
    Lp = function(a) {
        return Op(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    Mp = function(a) {
        return Op(a, function(b) {
            var c;
            return (_.H = ["left", "right"], _.z(_.H, "includes")).call(_.H, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    Pp = function(a, b, c, d) {
        var e = _.cg("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Qp = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    Sp = function(a, b, c) {
        var d = new _.u.Map;
        a = _.x(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var f = b[e.getDomId()];
            f = ji(f, Rp, 28) ? _.Am(f, Rp, 28) : _.Am(c, Rp, 34);
            var g = void 0;
            d.set(e, (null == (g = f) ? 0 : null != Nn(g, 1)) ? _.Q(f, 1) ? 2 : 1 : 0)
        }
        return d
    };
    Vp = function(a, b, c) {
        var d, e, f = [],
            g = [];
        a = _.x(a);
        for (d = a.next(); !d.done; d = a.next())
            if (d = d.value, 1 === b.get(d)) f.push(null), g.push(null);
            else {
                var h = c,
                    k = Ym(d);
                d = Tp((null == k ? void 0 : k.parentElement) && Zm(k.parentElement, h) || null);
                if (!d || 1 === d[0] && 1 === d[3]) {
                    var l = e = d = void 0,
                        m = null != (l = null == k ? void 0 : k.parentElement) ? l : null;
                    l = null != (e = Sm(m)) ? e : new _.Rm(0, 0);
                    Up(l, m, h, 100);
                    e = null != (d = Sm(k)) ? d : new _.Rm(0, 0);
                    Up(e, k, h, 1); - 1 === l.height && (e.height = -1);
                    d = l;
                    d = d.width + "x" + d.height;
                    e = e.width + "x" + e.height
                } else e = d = "-1x-1";
                f.push(d);
                g.push(e)
            }
        return {
            Pl: f,
            Km: g
        }
    };
    Up = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b || !Vj(b, c, d))) {
                a: {
                    do {
                        var f = Zm(b, c);
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
    Xp = function(a, b, c) {
        var d = 0 !== (0, _.Wp)(),
            e = Gm(!0, c, d).width,
            f = [],
            g = [],
            h = [];
        if (null !== c && c != c.top) {
            var k = Gm(!1, c).width;
            (-12245933 === e || -12245933 === k || k < e) && h.push(8)
        } - 12245933 !== e && (1.5 * e < c.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * c.outerWidth < e && h.push(10));
        a = _.x(a);
        for (d = a.next(); !d.done; d = a.next())
            if (k = d.value, 1 === b.get(k)) f.push(null), g.push(null);
            else {
                d = new Fp;
                var l = Ym(k);
                k = 0;
                var m = !1,
                    n = !1,
                    p = !1;
                if (l) {
                    for (var r = 0, v = l; v && 100 > r; r++, v = v.parentElement) {
                        var w = Zm(v, c);
                        if (w) {
                            var y = w,
                                B = y.display,
                                C = y.overflowX;
                            if ("visible" !== y.overflowY && (d.set(2), (y = Sm(v)) && (k = k ? Math.min(k, y.width) : y.width), d.get(9))) break;
                            Qp(w) && d.set(9);
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
                f.push(Hp(d));
                g.push(k)
            }
        return {
            Zk: f,
            Nl: g
        }
    };
    Yp = function(a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = _.x(e);
            g = a.next();
            for (f = {}; !g.done; f = {
                    Wg: void 0
                }, g = a.next()) {
                e = g.value;
                g = e.code;
                e = e.bids;
                var h = void 0;
                if (g && null != (h = e) && h.length && (g = Vh(g, b), f.Wg = g / 1E6, !(0 >= g))) {
                    h = void 0;
                    e = _.x(null != (h = e) ? h : []);
                    var k = e.next();
                    for (h = {}; !k.done; h = {
                            Xb: void 0,
                            wi: void 0
                        }, k = e.next()) k = k.value, h.wi = "function" === typeof k.getFloor ? k.getFloor : void 0, h.Xb = oi(mi(ni(new ki, 4), g), c), k.getFloor = function(l, m) {
                        return function(n) {
                            4 === _.jg(l.Xb, 1, 0) && ni(l.Xb, 1);
                            var p, r = null == (p = l.wi) ? void 0 : p.apply(this, [n]);
                            n = c ? r || {} : {
                                currency: "USD",
                                floor: m.Wg
                            };
                            return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === _.jg(l.Xb, 1, 0) && (n = mi(ni(l.Xb, 6), 1E6 * r.floor), ri(n, 3, r.currency)), r) : (r.floor || 0) > m.Wg ? (1 === _.jg(l.Xb, 1, 0) && mi(ni(l.Xb, 5), 1E6 * r.floor), r) : n : n
                        }
                    }(h, f), d.set(k.getFloor, h.Xb)
                }
            }
        }
    };
    Zp = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return Do().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    aq = function(a, b) {
        return Yl(b, function() {
            return new $p(a, b)
        })
    };
    bq = function(a, b) {
        for (var c = new Fp, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return Hp(c)
    };
    dq = function(a, b) {
        return cq(a, b)
    };
    cq = function(a, b) {
        return a.map(function(c) {
            return b(c)
        })
    };
    gq = function(a, b, c) {
        var d = {
                ic: new eq,
                wc: new eq,
                vc: new eq,
                uc: new eq,
                cd: new eq,
                Pc: new eq,
                vf: new eq,
                wf: new eq,
                Of: new eq
            },
            e = new sk;
        J(e, new fq(a, b, c, window, d));
        Bk(e);
        return {
            Dh: d,
            Ka: e
        }
    };
    iq = function(a, b, c, d, e, f, g) {
        if (f) {
            var h = {
                    lh: new eq
                },
                k = new sk;
            a = new hq(a, b, c, d, e, f, g, h);
            J(k, a);
            Bk(k);
            return {
                dk: h,
                Ka: k
            }
        }
    };
    kq = function(a, b, c, d, e) {
        if (b && !(.01 < Math.random())) {
            var f = new sk;
            J(f, new jq(a, c, d, e, b.ic));
            Bk(f)
        }
    };
    mq = function(a, b) {
        var c;
        return !(null != (c = lq(b, 22)) ? !c : !_.Q(a, 15))
    };
    oq = function(a) {
        var b;
        var c = new nq;
        c = _.lj(c, 2, a.pvsid);
        c = _.kj(c, 3, a.Pa);
        c = _.kj(c, 6, a.Ea);
        var d = null != (b = a.Qf) ? b : _.Zf();
        b = _.lj(c, 1, d);
        c = mh();
        b = _.Ke(b, 4, c, Yc);
        a.payload && (c = a.payload(), _.ii(b, 7, c));
        a.pb && _.lj(b, 5, a.pb);
        return b
    };
    qq = function(a, b, c, d) {
        for (var e = _.x(_.z(Object, "entries").call(Object, pq)), f = e.next(); !f.done; f = e.next()) {
            var g = _.x(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && P(a, g(String(c), d))
        }
    };
    vq = function(a, b, c) {
        a.xm && a.Qa.oj(oq(_.z(Object, "assign").call(Object, {}, a, {
            pb: a.Ml,
            payload: function() {
                var d = new rq;
                var e = _.sq(d, tq, 1, uq);
                e = _.wi(e, 1, b);
                _.wi(e, 2, c);
                return d
            }
        })))
    };
    xq = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = (c = void 0 === c ? null : c) ? gh(c) : null;
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
            e |= Pi(a, 2500, d);
            d || (e |= Qi(a));
            !b || c && wq(c) || (e |= 4194304)
        } catch (h) {
            e |= 32
        }
        return e
    };
    yq = function(a) {
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
        a = yq(a);
        if (!a) return null;
        if (10 === a) return 0;
        var d = 0;
        if (!(_.H = [11, 10], _.z(_.H, "includes")).call(_.H, a)) {
            d |= b !== b.top ? 512 : 0;
            var e = _.Ej(b);
            e = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && e.adCount ? 1 == a || 2 == a ? !(!e.adCount[1] && !e.adCount[2]) : (e = e.adCount[a]) ? 1 <= e : !1 : !1;
            e && (d |= 64);
            if (d) return d
        }
        if (2 === a || 1 === a) {
            var f = {
                pa: b,
                hf: _.zq,
                Gh: c ? a : void 0,
                bn: !0
            };
            0 === (0, _.Wp)() && (f.hf = 3E3, f.Hg = 650);
            d |= _.cj(f)
        } else if (8 === a) d |= xq(b);
        else if (3 === a || 4 === a) {
            var g = a;
            e = !_.E(Aq);
            var h = _.E(Bq);
            g = void 0 === g ? null : g;
            c = b !== b.top ? 512 : 0;
            Zi(null == (f = b.navigator) ? void 0 : f.userAgent) && (c |= 1048576);
            f = b.innerWidth;
            1200 > f && (c |= 65536);
            var k = b.innerHeight;
            650 > k && (c |= 2097152);
            g && 0 === c && (g = 3 === g ? "left" : "right", (f = _.Lj({
                pa: b,
                Ci: e,
                nj: 1,
                position: g,
                ja: f,
                sa: k,
                Cc: new _.u.Set,
                minWidth: 120,
                minHeight: 500,
                Jc: void 0 === h ? !1 : h
            })) ? _.Ej(b).sideRailPlasParam.set(g, f.width + "x" + f.height + "_" + String(g).charAt(0)) : c |= 16);
            d |= c
        } else 11 !== a && 42 !== a && (d |= 32);
        d || (b = _.Ej(b), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return d
    };
    Fq = function(a, b, c, d) {
        var e = d.Yh,
            f = d.adUnitPath;
        d = void 0 === d.yb ? !1 : d.yb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && Dq(e)) ? Eq(a, b, f, c, {
            Wb: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            yb: d
        }) : (b.error(am("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    Dq = function(a) {
        switch (a) {
            case 6:
                return !0;
            case 7:
                return !0;
            default:
                return !!tp(ln, function(b) {
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
        a && b && (_.gi(b, 15, f), _.rp(a, function() {
            var g = window,
                h = yq(f);
            if (h) {
                g = _.Ej(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    Gq = function(a, b) {
        var c;
        return !(null != (c = lq(a, 11)) ? !c : !_.Q(b, 10))
    };
    Hq = function(a, b, c, d) {
        if (a = Ym(a, b)) {
            var e;
            if (c = null != (e = lq(c, 24)) ? e : _.Q(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
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
                null != (h = null != (k = lq(f, 10)) ? k : _.Q(g, 11)) && h && Hq(e, b, f, g)
            }
        return {}
    };
    Mq = function(a, b, c) {
        var d = new sk;
        a = new Lq(a, b, c);
        J(d, a);
        Bk(d)
    };
    Nq = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Fh: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Fh: a.length - b.length + 8
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
            return "page_url" === hk(d, 1)
        })) ? void 0 : pm(b)[0]) ? c : null
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
        ql(function() {
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
        return _.tb(function(h) {
            c = a;
            d = c.ld;
            e = b;
            f = e.og;
            return (null != (g = d) ? g : f.ld()) ? h.return(Uq(f)) : h.return(null)
        })
    };
    Zq = function(a, b, c) {
        var d = window,
            e = new sk;
        d = new Wq(d);
        _.S(e, d);
        a = new Xq(a, d, c, _.zm(150));
        J(e, a);
        b = new Yq(879, Vq, {
            ld: b ? a.Mc : void 0
        }, {
            og: d,
            Co: !!b
        }, void 0, e.C.g);
        b = J(e, b).output;
        Bk(e);
        return {
            Mc: a.Mc,
            pg: b,
            Ka: e
        }
    };
    ar = function() {
        var a = void 0 === a ? window : a;
        $q = _.Zf(a)
    };
    br = function(a, b) {
        var c = _.cg("DIV");
        c.id = a;
        c.textContent = b;
        _.xp(c, {
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
            Ag: e
        };
        var g = null != Ji(b, 1) ? null != dr(b) && 0 !== (0, _.Wp)() ? Ji(b, 1) * dr(b) : Ji(b, 1) : null;
        if (null == g) return {
            Ag: e
        };
        b = new sk;
        a = new er(a, d, c, g, e, f);
        J(b, a);
        Bk(b);
        return {
            Ag: a.output,
            Bl: b
        }
    };
    pr = function(a, b, c, d, e) {
        var f = window,
            g = new sk,
            h = J(g, new gr(a, b, hr, function(m) {
                return ir("i-adframe-load", m.detail.data)
            })),
            k = J(g, new gr(a, b, hr, function(m) {
                return ir("i-dismiss", m.detail.data)
            }));
        h = 0 < _.Pf(jr) ? J(g, new kr(a, h.output, void 0)).output : h.output;
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
            return _.Pf(sr)
        }), a[607368714] = new tr, a
    };
    vr = function(a, b) {
        a.V.log(576944485, oq, _.z(Object, "assign").call(Object, {}, a, b))
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
            (_.H = _.z(Object, "values").call(Object, nn), _.z(_.H, "includes")).call(_.H, Number(f)) ? a = !0 : (Er("taxonomy", a, d, e), a = !1);
            a && (null == b ? Er("taxonomyData", b, d, e) : Gr(b, d, e) && Hr(f, b, c, d))
        }
    };
    Rr = function(a, b, c, d, e) {
        if (!Jr(a)) Er("taxonomy", a, d, e);
        else if (null == b) Er("taxonomyData", b, d, e);
        else if (Gr(b, d, e) && Kr(_.z(b, "values"), d, b) && (b = Lr(a, _.z(b, "values"), d, b), b.size)) {
            b = [].concat(_.xi(b));
            e = new Mr;
            var f = Nr.get(a);
            e = _.wi(e, 3, f);
            Or(c, Pr(e, b));
            d.info(Qr(Ln(b), Ln(a)))
        }
    };
    Gr = function(a, b, c) {
        if (Wg(a) && a.hasOwnProperty("values")) return !0;
        Er("taxonomyData", a, b, c);
        return !1
    };
    Hr = function(a, b, c, d) {
        if (Kr(_.z(b, "values"), d, b)) {
            var e = Lr(a, _.z(b, "values"), d, b);
            e.size && (b = (_.H = _.fk(c, Mr, 1), _.z(_.H, "find")).call(_.H, function(f) {
                return _.jg(f, 1, 0) === a
            }), e = [].concat(_.xi(e)), b ? Pr(b, e) : Or(c, Pr(Sr(new Mr, a), e)), d.info(Qr(Ln(e), Ln(a))))
        }
    };
    Kr = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        Er("taxonomyData.values", a, b, c);
        return !1
    };
    Lr = function(a, b, c, d) {
        if (!ah()(b)) return Er("taxonomyData.values", b, c, d), new _.u.Set;
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
        e && P(c, Tr(Ln(a), Ln(10)));
        return d
    };
    Er = function(a, b, c, d) {
        P(c, Kn("googletag.setConfig.pps", Ln(d), a, Ln(b)))
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
                d = new sk;
            J(d, new Yr(a, b, c.ge));
            Bk(d);
            return {
                Ka: d,
                Zl: c
            }
        }
    };
    as = function(a, b, c, d, e, f, g) {
        if (b) {
            var h = {
                    Xg: new eq
                },
                k = new sk;
            J(k, new $r(a, b, c, d, h, e, f, g));
            Bk(k);
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
        Ik(b, d, function(e, f) {
            Ll(a, e, f);
            var g, h;
            null == (h = (g = window.console).error) || h.call(g, f)
        }, function() {
            return void P(c, ds())
        })
    };
    hs = function(a, b, c) {
        if (!_.E(fs) && !eo()) {
            var d = {
                    Lg: new eq,
                    Ab: new eq
                },
                e = new sk;
            J(e, new gs(a, b, c, d));
            Bk(e);
            return {
                Cd: d,
                Ka: e
            }
        }
    };
    js = function(a, b, c, d, e) {
        var f = new sk;
        a = new is(a, b, c, d, e);
        J(f, a);
        Bk(f);
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
    ks = function(a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.z(a, "includes").call(a, 0)
    };
    ls = function(a) {
        if (ks(a)) return {
            size: [],
            eh: !0
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
                eh: b
            }
        }
        return {
            size: a,
            eh: !1
        }
    };
    ns = function(a, b) {
        var c = b.T;
        return dq(a, function(d) {
            return ms(c[d.getDomId()]).join("&")
        })
    };
    ms = function(a) {
        a = os(a);
        var b = [];
        _.Jn(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    os = function(a) {
        for (var b = {}, c = _.x(im(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.I(d, 1)] = pm(d);
        a = ti(a, 8, 2);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    ps = function(a) {
        var b = !1,
            c = _.fk(a, lm, 2).map(function(d) {
                var e = _.I(d, 1);
                b = "excl_cat" === e;
                d = pm(d);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = ti(a, 3, 2);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    rs = function(a, b, c) {
        var d = window,
            e = !ph(d.isSecureContext, d.document);
        if (qh(d.isSecureContext, d, d.document) || !e) return e = new sk, a = new qs(a, d, b, c), J(e, a), Bk(e), a.j
    };
    ts = function(a, b, c, d, e) {
        if (c) {
            var f = {
                    se: new eq,
                    te: new eq,
                    Fd: new eq
                },
                g = new sk;
            J(g, new ss(a, b, c, d, f, e));
            Bk(g);
            return {
                Ka: g,
                Rm: f
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
            var g = _.fk(f, Bs, 1),
                h = ws(g, a);
            0 === h.length ? (c.delete(e), b.removeItem(e)) : h.length < g.length && (_.um(f, 1, h), b.setItem(e, gl(f)))
        }
        return c
    };
    Ds = function(a, b) {
        return String(_.sh(b + "-" + _.I(a, 2) + _.I(a, 4) + _.Q(a, 3)))
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
                g = b.lm;
            if (b.oh && 4 === f) {
                b = new eq;
                f = new eq;
                if (!g) return b.G({
                    kind: 1,
                    reason: 1
                }), f.G(!1), {
                    yj: {
                        fj: b,
                        vi: f
                    }
                };
                g = new sk;
                a = new Gs(a, c, d, e, b, f);
                J(g, a);
                Bk(g);
                return {
                    yj: {
                        fj: b,
                        vi: f
                    },
                    Xm: g
                }
            }
        }
    };
    Js = function(a) {
        var b = a.ag,
            c = a.Bb,
            d = void 0 === a.Jh ? [] : a.Jh,
            e = a.interestGroupBuyers,
            f = a.il,
            g = a.Uk;
        a = a.fm;
        var h = _.Pf(Is),
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
            componentAuctions: [e].concat(_.xi(d)),
            resolveToConfig: b.resolveToConfig.promise
        };
        c.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        return c
    };
    Ks = function(a, b) {
        var c = b.ag;
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
            d = _.kj(e, 1, d);
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
        return _.tb(function(y) {
            if (1 == y.g) return ("string" !== typeof a || _.z(a, "startsWith").call(a, "urn:")) && Qs.deprecatedURNToURL && Qs.deprecatedReplaceInURN ? y.yield(Qs.deprecatedURNToURL(a), 2) : y.return();
            c = y.A;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Rs)) ? f : []).forEach(function(B) {
                d[B] = e
            });
            g = b.fl || "";
            (null != (h = c.match(Ss)) ? h : []).forEach(function(B) {
                d[B] = g
            });
            k = b.Zj || "";
            (null != (l = c.match(Ts)) ? l : []).forEach(function(B) {
                d[B] = k
            });
            m = b.Vj || "";
            (null != (n = c.match(Us)) ? n : []).forEach(function(B) {
                d[B] = m
            });
            p = b.Tj || "";
            (null != (r = c.match(Vs)) ? r : []).forEach(function(B) {
                d[B] = p
            });
            v = b.nm || "";
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
        var b = a.Mk,
            c = a.bk,
            d = a.jm,
            e = a.jl;
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
        d = _.kj(c, 2, d);
        b = _.zl(d, 1, b);
        void 0 !== e && _.kj(b, 4, e);
        e = new $s;
        void 0 !== a && _.zl(e, 1, a);
        _.Al(e, 3, at, b);
        return e
    };
    ct = function(a, b, c, d, e, f, g, h) {
        var k = 3 === b,
            l = 2 === b,
            m = 1 === b,
            n = f.getEscapedQemQueryId(),
            p = _.I(f, 6);
        Ep("run_ad_auction_stats", function(r) {
            dp(r, a);
            ep(r, "duration_ms", c);
            ep(r, "applied_timeout_ms", d);
            ep(r, "timed_out", l ? 1 : 0);
            ep(r, "error", k ? 1 : 0);
            ep(r, "auction_skipped", m ? 1 : 0);
            ep(r, "auction_winner", h ? 1 : 0);
            ep(r, "thread_release_only", _.Q(f, 15) ? 1 : 0);
            ep(r, "winner_qid", null != n ? n : "");
            ep(r, "xfpQid", null != p ? p : "");
            ep(r, "publisher_tag", "gpt");
            e && ep(r, "parallel", "1");
            0 < g && ep(r, "nc", g)
        }, 1)
    };
    dt = function(a, b, c, d, e) {
        var f = e.getEscapedQemQueryId(),
            g = _.I(e, 6);
        Ep("run_ad_auction_complete", function(h) {
            dp(h, a);
            ep(h, "duration_ms", Math.round(d));
            ep(h, "applied_timeout_ms", c);
            ep(h, "auction_has_winner", b);
            f && ep(h, "winner_qid", f);
            g && ep(h, "xfpQid", g)
        }, 1)
    };
    et = function(a, b) {
        var c = b.getEscapedQemQueryId(),
            d = _.I(b, 6);
        Ep("pre_run_ad_auction_ping", function(e) {
            dp(e, a);
            ep(e, "winner_qid", null != c ? c : "");
            ep(e, "xfpQid", null != d ? d : "");
            ep(e, "publisher_tag", "gpt")
        }, 1)
    };
    lt = function(a, b, c, d) {
        var e = Ym(a, document);
        e && Wi(e, window, d, !0);
        ft(_.Nf(Jl), "5", gt(c.T[a.getDomId()], 20));
        ht(a, jt, 801, {
            Sh: null,
            isBackfill: !1
        });
        if (_.Iq(b, a) && !fn(a, document)) {
            b = c.ca;
            c = c.T[a.getDomId()];
            var f;
            (null != (f = lq(c, 10)) ? f : _.Q(b, 11)) && Hq(a, document, c, b)
        }
        ht(a, kt, 825, {
            isEmpty: !0
        })
    };
    nt = function(a) {
        if (!_.E(mt)) return null;
        var b = new _.u.Set;
        a = _.x(_.z(a, "values").call(a));
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, _.Q(c, 2) && _.fk(c, Bs, 1).forEach(function(d) {
            b.add(_.I(d, 1))
        });
        return 0 < b.size ? _.z(Array, "from").call(Array, b) : null
    };
    pt = function(a, b, c, d, e, f, g, h, k) {
        if (b) {
            var l = b.ec;
            if (b.oh && 0 !== l) return b = new sk, a = new ot(a, l, c, d, e, f, g, h, k), J(b, a), Bk(b), {
                Wm: a.j,
                Vm: b
            }
        }
    };
    qt = function() {
        for (var a = _.x(_.z(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0, c = document.createElement("script"), b = db(b.textContent), pb(c, b), document.head.appendChild(c), document.head.removeChild(c))
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
        c = [].concat(_.xi(c.X)).slice();
        if (b) {
            if (!Array.isArray(b)) return P(a, am("googletag.destroySlots", [b])), !1;
            la(b);
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
        var m = Do(),
            n, p, r = L(a, 74, function(w, y, B) {
                return e.defineSlot(a, b, w, y, B)
            }),
            v = {};
        r = (v._loaded_ = !0, v.cmd = [], v._vars_ = m._vars_, v.evalScripts = function() {
            try {
                qt()
            } catch (B) {
                Ll(a, 297, B);
                var w, y;
                null == (w = window.console) || null == (y = w.error) || y.call(w, B)
            }
        }, v.display = L(a, 95, function(w) {
            vt(c, w, e)
        }), v.defineOutOfPageSlot = L(a, 73, function(w, y) {
            return (w = Fq(a, b, e, {
                Yh: y,
                adUnitPath: w
            })) ? w.g : null
        }), v.getVersion = L(a, 946, function() {
            return a.Ze
        }), v.pubads = L(a, 947, function() {
            return no(a, b, c, e, h)
        }), v.companionAds = L(a, 816, function() {
            null != n || (n = new wt(a, b, c, f));
            return dm(a, b, n)
        }), v.content = L(a, 817, function() {
            null != p || (p = new xt(a, b, g));
            return fm(a, b, p)
        }), v.setAdIframeTitle = L(a, 729, cs), v.getEventLog = L(a, 945, function() {
            return new yt(a, b)
        }), v.sizeMapping = L(a, 90, function() {
            return new zt(a, b)
        }), v.enableServices = L(a, 91, function() {
            for (var w = _.x(At), y = w.next(); !y.done; y = w.next()) y = y.value, y.enabled && b.info(Bt()), Ct(y)
        }), v.destroySlots = L(a, 75, function(w) {
            return ut(b, w, e)
        }), v.enums = on(), v.defineSlot = r, v.defineUnit = r, v.getWindowsThatCanCommunicateWithHostpageLibrary = L(a, 955, function(w) {
            return Dt(k, w).map(function(y) {
                var B;
                return null == (B = fn(y, document)) ? void 0 : B.contentWindow
            }).filter(function(y) {
                return !!y
            })
        }), v.disablePublisherConsole = L(a, 93, kp), v.onPubConsoleJsLoad = L(a, 731, np), v.openConsole = L(a, 732, function(w) {
            fp = !0;
            var y;
            (null == (y = Do()) ? 0 : y.console) ? Do().console.openConsole(w): (w && (mp = w), lp = !0, $o(a))
        }), v.setConfig = L(a, 1034, function(w) {
            if (Wg(w)) {
                if (_.z(Object, "hasOwn").call(Object, w, "pps")) {
                    var y = w.pps;
                    if (null === y) {
                        var B = _.mj(d, Et, 33);
                        _.mk(B, 2)
                    } else {
                        B = _.mj(_.mj(d, Et, 33), Ft, 2);
                        _.mk(B, 1);
                        if (Wg(y) && y.hasOwnProperty("taxonomies")) var C = !0;
                        else P(b, am("googletag.setConfig.pps", [y])), C = !1;
                        if (C)
                            if (C = y.taxonomies, Wg(C) && null !== C) {
                                var G;
                                _.z(Object, "keys").call(Object, C).some(Jr) ? G = Rr : Fr(C, b, y) && (G = Ir);
                                if (G) {
                                    y = _.x(_.z(Object, "entries").call(Object, C));
                                    for (var F = y.next(); !F.done; F = y.next()) {
                                        var N = _.x(F.value);
                                        F = N.next().value;
                                        N = N.next().value;
                                        G(F, N, B, b, C)
                                    }
                                }
                            } else Er("taxonomies", C, b, y)
                    }
                }
                _.z(Object, "hasOwn").call(Object, w, "adExpansion") && (_.mk(d, 34), B = w.adExpansion, null !== B && Wg(B) && _.z(Object, "hasOwn").call(Object, B, "enabled") && (B = B.enabled, Fo(B) && (B = Go(B), _.ii(d, 34, B))));
                if (_.z(Object, "hasOwn").call(Object, w, "privacyTreatments")) {
                    w = w.privacyTreatments;
                    _.mk(d, 36);
                    a: {
                        if (null !== w && Wg(w) && _.z(Object, "hasOwn").call(Object, w, "treatments")) {
                            w = w.treatments;
                            if (Gt(w) && w.every(Vr)) {
                                w = {
                                    treatments: w
                                };
                                break a
                            }
                            P(b, am("googletag.setConfig", [w]))
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
                            void 0 === C ? P(b, am("googletag.setConfig", [G])) : w.add(C)
                        }
                        if (w.size) {
                            B = new Ht;
                            G = B.F;
                            C = wc(G);
                            yc(ee(B.F));
                            G = pe(G, C, 1, !1);
                            C = wc(G);
                            C = !!(4 & C) && !!(4096 & C);
                            if (Array.isArray(w))
                                for (y = 0; y < w.length; y++) G.push(_.Vc(w[y], C));
                            else
                                for (w = _.x(w), y = w.next(); !y.done; y = w.next()) G.push(_.Vc(y.value, C));
                            _.ii(d, 36, B)
                        }
                    }
                }
            } else P(b, am("googletag.setConfig", [w]))
        }), v.apiReady = !0, v);
        es(a, m, b, l);
        rt(m, r)
    };
    Lt = function(a, b) {
        var c = new sk;
        b = new Jt(a, b);
        J(c, b);
        a = new Kt(a, b.j);
        J(c, a);
        Bk(c);
        return {
            bd: a.bd,
            kd: a.kd,
            fd: a.fd,
            Ob: a.Ob,
            Bd: a.Bd,
            Dd: a.Dd,
            qc: a.qc,
            Nb: a.Nb,
            Yl: c
        }
    };
    lu = function(a, b, c, d, e, f, g, h, k) {
        var l = window,
            m = gn(),
            n = new sk,
            p = new Mt(a, l);
        p = J(n, p).output;
        var r = new sk;
        var v = new Nt(a, l);
        J(r, v);
        Bk(r);
        r = {
            Ul: v.C,
            rc: v.rc
        };
        _.E(Ut) && J(n, new Vt(a, l));
        if (Ka()) {
            v = {
                Zi: new eq
            };
            var w = new sk;
            J(w, new Wt(a, window, v.Zi));
            Bk(w)
        } else v = void 0;
        var y = _.E(Xt);
        w = l.navigator;
        l = oh(l.isSecureContext, l.navigator, l.document);
        l = !y && l;
        y = _.Pf(Yt);
        var B = !!w.getInterestGroupAdAuctionData;
        w = _.E(Zt) && !!w.createAuctionNonce;
        l = {
            oh: l,
            ec: y,
            lm: B,
            Xj: w
        };
        if (e)
            if (_.E($t)) {
                var C = Lt(a, e);
                B = C.Bd;
                y = C.fd;
                w = C.kd;
                var G = C.bd;
                var F = C.Ob,
                    N = C.Dd,
                    R = C.qc;
                C = C.Nb;
                var M, Z = new au(a, document, Do(), b, m, c, null != (M = window.location.hash) ? M : "");
                J(n, Z);
                b = new bu(a, Do(), null, b, m, c, B);
                J(n, b);
                m = new cu(a, y);
                J(n, m);
                h = new du(a, window, w, h);
                J(n, h);
                if (f = gq(a, f, G)) var fa = f.Dh;
                e = Zq(a, e, h.j);
                M = e.Mc;
                G = e.pg;
                _.S(n, e.Ka);
                e = new eu(a, G);
                J(n, e);
                f = new fu(a, G);
                J(n, f);
                c = Uo(a, c, d, window, M, G, 2).nb;
                if (_.E(gu)) {
                    M = new hu(a, window.navigator, c);
                    var qa = M.j;
                    J(n, M)
                }
                M = void 0;
                _.E(iu) && (d = new ju(a, d, window, c), M = d.output, J(n, d));
                if (d = hs(a, F, c)) var ea = d.Cd;
                d = rs(a, p, c);
                js(a, g, k, c, N);
                G = {
                    Qd: fa,
                    Cd: ea,
                    Si: h.j,
                    Kh: m.output,
                    Eb: b.Eb,
                    Ob: F,
                    gd: e.gd,
                    fi: f.j,
                    qc: R,
                    ue: d,
                    mg: M,
                    Ph: qa,
                    Nb: C
                }
            } else {
                a = new ku(a, b, m, c, d, e, f, g);
                g = new sk;
                _.S(a, g);
                m = Lt(a.context, a.g);
                c = m.Bd;
                e = m.fd;
                b = m.kd;
                f = m.bd;
                fa = m.Ob;
                qa = m.Dd;
                ea = m.qc;
                d = m.Nb;
                _.S(a, m.Yl);
                m = new au(a.context, document, Do(), a.j, a.l, a.R, null != (C = window.location.hash) ? C : "");
                J(g, m);
                c = new bu(a.context, Do(), null, a.j, a.l, a.R, c);
                J(g, c);
                e = new cu(a.context, e);
                J(g, e);
                h = new du(a.context, window, b, h);
                J(g, h);
                if (f = gq(a.context, a.ib, f)) F = f.Dh, _.S(a, f.Ka);
                f = Zq(a.context, a.g, h.j);
                b = f.Mc;
                m = f.pg;
                _.S(g, f.Ka);
                f = new eu(a.context, m);
                J(g, f);
                C = new fu(a.context, m);
                J(g, C);
                m = Uo(a.context, a.R, a.L, window, b, m, 2);
                b = m.nb;
                _.S(a, m.Ka);
                _.E(gu) && (m = new hu(a.context, window.navigator, b), N = m.j, J(g, m));
                m = void 0;
                _.E(iu) && (M = new ju(a.context, a.L, window, b), m = M.output, J(g, M));
                if (M = hs(a.context, fa, b)) R = M.Cd, _.S(a, M.Ka);
                M = rs(a.context, p, b);
                _.S(a, js(a.context, a.D, k, b, qa));
                Bk(g);
                G = {
                    Qd: F,
                    Cd: R,
                    Si: h.j,
                    Kh: e.output,
                    Eb: c.Eb,
                    Ob: fa,
                    gd: f.gd,
                    fi: C.j,
                    qc: ea,
                    ue: M,
                    mg: m,
                    Ph: N,
                    Nb: d
                }
            }
        Bk(n);
        return {
            Tl: r,
            dm: v,
            Yf: p,
            Um: l,
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
        var F = new sk,
            N = Gm(!0, window),
            R = k.ca,
            M = k.T[e.getDomId()],
            Z = C.Yf,
            fa = C.He.rd,
            qa, ea = null == (qa = C.Lb) ? void 0 : qa.ue,
            Pa = new nu(a, window);
        J(F, Pa);
        var wa = m.height,
            Ca = m.width,
            Na = m.vb,
            Xa = m.Oa,
            fb = m.Md,
            Ua = m.isBackfill,
            dc = m.Jb,
            Ec = m.el,
            $b = m.gb,
            kc = m.Pf,
            ec = m.sh,
            fc = m.yg,
            Pc = m.Ub,
            Qc = m.bf,
            qf = m.Mb,
            we = m.Ra,
            Md = m.ha,
            xe = m.Yg,
            sg = m.sk,
            tg = m.Tf,
            Rc = new eq;
        Rc.G(p);
        var Nd = new ou(a, window.top, Rc);
        J(F, Nd);
        var Od = new pu(a, xr(M), N.height, $b, wa);
        J(F, Od);
        var bb = new qu(a, e, Ym(e, n), e.getDomId(), en(e), n.documentElement, xr(M), h, f);
        ru(F, bb);
        var Pb = bb.output,
            rf = new su(a, we, fb, Ua, dc);
        J(F, rf);
        var ye = new tu(a, _.Am(R, uu, 5), M, d);
        J(F, ye);
        var ug = new vu(a, window.location.hash, N, e.getAdUnitPath(), M, f, Od.output, kc, Ca, wa, rf.output, Pb);
        ru(F, ug);
        var ld = ug.K,
            sf = new wu(a, R, M, fb, dc, ld.cf);
        J(F, sf);
        var qj = Nd.output,
            rj = ld.Ga,
            vg = ld.Ja;
        if (oh(window.isSecureContext, window.navigator, window.document) && !_.E(Xt) && g) {
            var Ch = {
                    Qc: new Xr,
                    Ga: new eq,
                    Ja: new eq,
                    nd: new eq
                },
                wg = new sk;
            J(wg, new xu(a, e, qj, M, h, p, f, rj, vg, Pb, r, k, B, Xa, Md, Ch, v, G));
            Bk(wg);
            var Dh = {
                Ka: wg,
                Ym: Ch
            }
        } else Dh = void 0;
        var xg = Dh;
        if (xg) {
            _.S(F, xg.Ka);
            var ze = xg.Ym
        }
        var Eh, Fh, Gh = null != (Fh = null == (Eh = ze) ? void 0 : Eh.Ga) ? Fh : ld.Ga,
            Hh, Ih, Pd = null != (Ih = null == (Hh = ze) ? void 0 : Hh.Ja) ? Ih : ld.Ja,
            Jh, md = null == (Jh = ze) ? void 0 : Jh.Qc,
            Kh, tf = null == (Kh = ze) ? void 0 : Kh.nd,
            Fc = new yu(a, e, R, M, xr(M), n, h, Pb, sf.output, Pd, Na, md);
        J(F, Fc);
        var uf = new zu(a, Fc.output);
        J(F, uf);
        var vf = new Au(a, e, N, h, uf.output, ye.j, md);
        J(F, vf);
        var Sc = new Bu(a, vf.output, Fc.output, ye.j, md);
        J(F, Sc);
        var yg = new Cu(a, window, N, e, M, Pb, Fc.output, Na, Pd, ld.Be, Xa);
        ru(F, yg);
        var zg = new Du(a, R, M, ec, Gh, sf.output);
        J(F, zg);
        var Ag = new Eu(a, window, qf, Pa.output, md);
        J(F, Ag);
        var wf = new Fu(a, xr(M), n);
        J(F, wf);
        var Tc = new Gu(a, y, xr(M), $b, Ec, md);
        J(F, Tc);
        var xf = new Hu(a, fc, tf, Rc, md);
        J(F, xf);
        var Lh = window;
        if (_.E(bl) && ea) {
            var Ae = new sk;
            J(Ae, new Iu(a, Lh, tg, ea));
            Bk(Ae);
            var nd = Ae
        } else nd = void 0;
        var od = nd;
        od && _.S(F, od);
        var Qb = new Ju(a, e, h, k, w, l, Na, Xa, Ua, Pc, Md, window, Gh, sf.output, Sc.output, Pb, Fc.output, Pd, zg.output, yg.Qc, Ag.output, wf.output, Tc.output, Z, md);
        J(F, Qb);
        var yf = new Ku(a, window, e, Qb.o, Rc);
        J(F, yf);
        var Bg = xr(M);
        switch (Bg) {
            case 2:
            case 3:
                _.E(Lu) ? J(F, new Mu(a, h, xr(M), e, window, $b, Qb.j, Pb, Tc.output, Pd)) : J(F, new Nu(a, h, xr(M), e, window, $b, Qb.j, Pb, Tc.output, Pd));
                break;
            case 5:
                J(F, new Ou(a, e, k.Jd, Ec, n, Qb.j, Pb, Nd.output, Tc.output, B));
                break;
            case 4:
                var zf = new Pu(a, e, w, window, Qb.j, Pb);
                _.S(F, zf);
                Bk(zf);
                break;
            case 7:
                ru(F, pr(a, e, w, Qb.j, Pb));
                break;
            case 8:
            case 9:
                var Mh = Qb.j,
                    Nh = Fc.output,
                    Be = window,
                    Uc = new sk,
                    Oh = 8 === Bg ? 3 : 4,
                    Ce = new Qu(a, y);
                J(Uc, Ce);
                J(Uc, new Ru(a, Be, Oh, Ce.output, Mh, Nh, Pd));
                Bk(Uc);
                Uc && _.S(F, Uc)
        }
        var Af = new Su(a, e, Qb.j, n, w);
        J(F, Af);
        var Rb = new Tu(a, e, Uu(h, e), window.top);
        J(F, Rb);
        var Ph = Qb.j,
            Gc = new sk,
            Cg = J(Gc, new gr(a, e, Vu)),
            Bf = J(Gc, new Wu(a, n, Ph, Cg.output));
        J(Gc, new Xu(a, Bf.output, w, e));
        Bk(Gc);
        _.S(F, Gc);
        var Dg = new Yu(a, Uu(h, e), window.top, Qb.j, Pa.output, Rb.output, Rb.j);
        J(F, Dg);
        J(F, new Zu(a, e, Na, fb, Qb.j, Fc.output, Qb.C));
        var Eg = new $u(a, window, Qc, Qb.j, Fc.output, Pb);
        J(F, Eg);
        var Fg = Do(),
            pd = new sk,
            De = new av(a, n, Fg, R, c, b, d, fa, sg);
        J(pd, De);
        Bk(pd);
        _.S(F, pd);
        var Ee = new eq;
        Ee.G(xe);
        J(F, new bu(a, Do(), R, b, c, d, Ee));
        return F
    };
    ev = function(a, b, c) {
        var d = null;
        try {
            var e = cv(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.ca,
                    h = c.T[f.getDomId()];
                g = mq(g, h);
                var k;
                f = null == (k = cn(f, h, b.document, g)) ? void 0 : k.y;
                k = Gm(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++dv
            })
        } catch (f) {}
        return d
    };
    mv = function(a) {
        return Nl(a.na.context, 1132, function() {
            if (a.oa.X.length) {
                var b = new _.u.Set(Rf(fv));
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
                if (1 === _.Pf(kv) || 2 === _.Pf(kv)) b = _.Pf(lv), b = 0 >= b ? "" : (_.H = _.z(Array, "from").call(Array, {
                    length: Math.ceil(b / 8)
                }), _.z(_.H, "fill")).call(_.H, "testdata").join("").substring(0, b), 2 === _.Pf(kv) && (c += "&dblt=" + b);
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
        return a || c || !fh(b)
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
            _.Pf(qv);
            var c, d = null != (c = b.Mo) ? c : rv,
                e = _.x(a.X),
                f = e.next();
            for (a = {}; !f.done; a = {
                    qe: void 0
                }, f = e.next()) {
                a.qe = f.value;
                var g = d.get(a.qe);
                d.set(a.qe, (new Date).getTime());
                g ? b.wa.ac.mc.ki.refresh.km.Rc({
                    Uc: (new Date).getTime() - g,
                    Nm: _.Pf(sv)
                }) : _.rp(a.qe, function(h) {
                    return function() {
                        return void d.delete(h.qe)
                    }
                }(a))
            }
        } catch (h) {}
        return {}
    };
    wv = function() {
        var a = _.Pf(uv);
        switch (a) {
            case 0:
                return Ka() && vv(window.fetch) && vv(window.TextDecoderStream);
            case 1:
                return Ka() && vv(window.fetch) && !!window.TextDecoderStream;
            case 2:
                return Ka() && !!window.fetch && !!window.TextDecoderStream;
            case 3:
                return !Ja() && vv(window.fetch) && !!window.TextDecoderStream;
            case 4:
                return !Ja() && !!window.fetch && !!window.TextDecoderStream;
            case 5:
                return vv(window.fetch) && !!window.TextDecoderStream;
            case 6:
                return !!window.fetch && !!window.TextDecoderStream;
            default:
                nb(a)
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
                nb(b)
        }
    };
    xv = function(a, b) {
        if (0 === a) return 0;
        a = _.Pf(zv);
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
                nb(a)
        }
    };
    Nv = function(a, b) {
        a = a.Rg;
        var c = b.Ra,
            d, e;
        b = Av(a, 6);
        var f = Av(a, 7),
            g = !!Nn(a, 8),
            h = Bv(a, 10),
            k = null != (e = a.getEscapedQemQueryId()) ? e : "";
        e = _.Am(a, Cv, 43);
        var l = !!Nn(a, 9),
            m = !!Nn(a, 12),
            n = _.Am(a, Dv, ml(a, Ev, 48)),
            p = _.Am(a, Fv, ml(a, Ev, 39)),
            r = _.Xc(_.fi(a, 36)),
            v = !!Nn(a, 13),
            w = Bv(a, 49),
            y = _.Am(a, Gv, 51),
            B = Bv(a, 61);
        if (0 !== c.kind) {
            var C;
            c = {
                kind: 0,
                hb: null != (C = hk(a, 4)) ? C : ""
            }
        }
        C = c;
        c = _.Am(a, Hv, 58);
        var G = null == (d = _.Am(a, Iv, 56)) ? void 0 : Bv(d, 1);
        d = _.fk(a, Jv, 62);
        var F = _.fk(a, Kv, 67),
            N = ue(a, 63, sd, 2, void 0, void 0, 0);
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
                el: n,
                gb: p,
                Pf: r,
                sh: v,
                Ub: w,
                bf: y,
                Mb: B,
                Ra: C,
                ha: c,
                fn: G,
                Yg: d,
                sk: F,
                yg: N,
                Tf: !!Nn(a, 64),
                hg: _.Am(a, Lv, 68),
                zk: _.E(Mv) ? Bv(a, 1) : void 0
            }
        }
    };
    Qv = function(a, b) {
        var c = b.R;
        b = b.context;
        var d;
        (null == (d = _.Am(a.Rg, Ov, 69)) ? 0 : _.Q(d, 1)) && P(c, Pv(b.Pa));
        return {}
    };
    Rv = function(a) {
        var b = a;
        return function() {
            var c = _.Va.apply(0, arguments);
            if (b) {
                var d = b;
                b = null;
                d.apply(null, _.xi(c))
            }
        }
    };
    Sv = function(a) {
        var b = null,
            c = 0,
            d = 0;
        return function() {
            var e, f, g, h;
            return _.tb(function(k) {
                if (1 == k.g) return c && clearTimeout(c), c = 0, e = new _.Ah, f = Rv(e.resolve), g = ++d, k.yield(0, 2);
                if (d !== g) return f(!1), k.return(e.promise);
                b ? b(!1) : f(!0);
                h = Rv(function() {
                    b = null;
                    c = 0;
                    f(!0)
                });
                c = setTimeout(h, _.Pf(sv));
                _.rp(a, function() {
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
            return _.tb(function(n) {
                if (1 == n.g) return f = new _.Ah, g = Rv(f.resolve), h = ++e, n.yield(0, 2);
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
                m > _.Pf(sv) ? l() : (d = setTimeout(l, _.Pf(sv) - m), _.rp(a, function() {
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
        b = b.wl;
        if (!a.length) return {
            me: []
        };
        for (var e = _.x(a), f = e.next(); !f.done; f = e.next()) Jq(c, f.value);
        return b ? {
            me: []
        } : d ? (c = Gl(a[0].getAdUnitPath()), {
            me: Uv(a, c)
        }) : {
            me: a.map(function(g) {
                return {
                    networkCode: Gl(g.getAdUnitPath()),
                    X: [g]
                }
            })
        }
    };
    Uv = function(a, b) {
        var c = [];
        a = ua(a, function(f) {
            return Gl(f.getAdUnitPath())
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
            return !!Hm(b.T[d.getDomId()]).length
        };
        return {
            rj: a.filter(c),
            Bj: a.filter(Wv(c))
        }
    };
    ew = function() {
        var a = new Yv;
        var b = (new Zv).setCorrelator(bk(_.t));
        var c = mh().join();
        b = _.kj(b, 5, c);
        b = _.K(b, 2, 1);
        a = _.ii(a, 1, b);
        b = new $v;
        c = _.E(aw);
        b = _.yl(b, 7, c);
        c = _.E(bw);
        b = _.yl(b, 8, c);
        c = _.E(cw);
        b = _.yl(b, 9, c);
        b = _.yl(b, 10, !0);
        c = _.E(dw);
        b = _.yl(b, 13, c);
        b = _.yl(b, 16, !0);
        a = _.ii(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    iw = function() {
        var a = _.E(fw) ? _.hb(gw) : _.hb(hw);
        _.hp(document, a)
    };
    ow = function(a, b) {
        var c = jw() || kw() ? 1 : _.rh(),
            d = .001 > c;
        d ? (b.D = !0, lh(31067358)) : .002 > c && lh(31067357);
        Pn(23, a);
        a = 1E-4 > c;
        b = _.Pf(lw);
        var e = 0 < b && c < b,
            f = _.Pf(mw),
            g = 0 < f && c < 1 / f,
            h = _.Pf(qv);
        h = 0 < h && c < 1 / h;
        var k = _.Pf(nw);
        return {
            Wc: d,
            Ji: 1E3,
            qj: a,
            Ii: 1E4,
            ih: d,
            ig: 1E3,
            zm: e,
            gm: b,
            xm: g,
            Ml: f,
            Am: h,
            Bm: 0 < k && c < 1 / k,
            Qh: c
        }
    };
    sw = function(a, b) {
        var c = _.z(Object, "assign").call(Object, {}, a);
        a = a.Qh;
        c = (delete c.Qh, c);
        var d = window.document.URL,
            e = new pw(4, b.Pa, 1E3);
        a = new qw(e, a);
        return _.z(Object, "assign").call(Object, {}, b, c, {
            Go: new rw(b)
        }, {
            Qa: e,
            Ea: d,
            wo: 2012,
            V: a
        })
    };
    _.aa = [];
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
    _.xi = function(a) {
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
        a.Lm = b.prototype
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
            tl: !0
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
    vb = function(a) {
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
            if (b.tl) throw b.exception;
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
    _.tb = function(a) {
        return Uw(new Tw(new Pw(a)))
    };
    _.Va = function() {
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
                ti: e,
                Dj: f
            }
        }
        return {
            ti: -1,
            Dj: void 0
        }
    };
    zw("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Ww(this, b, c).Dj
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
            return Ww(this, b, c).ti
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
    var $w, Kc, ax, bx, cx, dx;
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
    Kc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.ra = function(a) {
        var b = Kc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ja = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.ka = function(a) {
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
    _.ca = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.hx = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.sj = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.ix = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    _.Og = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Aa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
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
    var ux, tx, sx, px, vx, gb, qx;
    _.ox = function(a) {
        this.g = a
    };
    _.ox.prototype.toString = function() {
        return this.g + ""
    };
    _.rx = function(a, b) {
        a = px.exec(_.ib(a).toString());
        var c = a[3] || "";
        return gb(a[1] + qx("?", a[2] || "", b) + qx("#", c))
    };
    _.ib = function(a) {
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
        return gb(a)
    };
    tx = /%{(\w+)}/g;
    sx = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    px = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    vx = {};
    gb = function(a) {
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
    var wx, xx, yx, Ra, zx;
    _.Qa = function(a) {
        this.g = a
    };
    _.Qa.prototype.toString = function() {
        return this.g.toString()
    };
    _.$a = function(a) {
        return a instanceof _.Qa && a.constructor === _.Qa ? a.g : "type_error:SafeUrl"
    };
    wx = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    xx = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    yx = {};
    Ra = function(a) {
        return new _.Qa(a, yx)
    };
    zx = Ra("about:invalid#zClosurez");
    var Ax, hm, Bx, Jx, Dx, Ex, Fx, Gx, Hx, Ix, Cx;
    Ax = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    hm = function(a) {
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
    _.Pg = function(a, b) {
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
    var Ea = $w(610401301),
        Te = $w(188588736);
    var Fa, Nx = _.t.navigator;
    Fa = Nx ? Nx.userAgentData || null : null;
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
        b = b instanceof _.Px ? b : _.Yj(Jx(String(b)));
        var c = [],
            d = function(e) {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof _.Px ? e : _.Yj(Jx(String(e))), c.push(_.Qx(e).toString()))
            };
        a.forEach(d);
        return _.Yj(c.join(_.Qx(b).toString()))
    };
    _.Tx = function(a) {
        return Sx(Array.prototype.slice.call(arguments))
    };
    _.Yj = function(a) {
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
    _.Xx = _.Yj("<br>");
    _.Sa = Ra("about:invalid#zClosurez");
    var La = function(a) {
            this.yl = a
        },
        Oa = [Ma("data"), Ma("http"), Ma("https"), Ma("mailto"), Ma("ftp"), new La(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        })],
        Ya = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    var cb = function() {};
    cb.prototype.toString = function() {
        return this.aj.toString()
    };
    var xb = _.Bw(["https://tpc.googlesyndication.com/sodar/", ".js"]),
        Yx = _.Bw(["https://www.google.com/recaptcha/api2/aframe"]);
    _.hb(Yx);
    var Zx, Wv, Hi;
    Zx = function() {
        return !0
    };
    Wv = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Hi = function(a) {
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
    var kb;
    kb = Hi(function() {
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
    _.rb = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, lb(d)), !0) : !1
    };
    _.dg = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, lb(d)), !0) : !1
    };
    var by = {
            Fn: 0,
            In: 1,
            Dn: 2,
            En: 3,
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
    var Cc = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var ub = function(a) {
        return new _.u.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var Bb, Ab = "function" === typeof String.prototype.zl,
        zb = "undefined" !== typeof TextEncoder;
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
    fy = Ia() ? !1 : Ha("Opera");
    _.gy = Ia() ? !1 : Ha("Trident") || Ha("MSIE");
    hy = Ha("Edge");
    iy = Ha("Gecko") && !(_.Pg(Da(), "WebKit") && !Ha("Edge")) && !(Ha("Trident") || Ha("MSIE")) && !Ha("Edge");
    jy = _.Pg(Da(), "WebKit") && !Ha("Edge");
    ky = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var my = "",
            ny = function() {
                var a = Da();
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
    !Ha("Android") || Ka();
    Ka();
    Ha("Safari") && (Ka() || (Ia() ? 0 : Ha("Coast")) || (Ia() ? 0 : Ha("Opera")) || (Ia() ? 0 : Ha("Edge")) || (Ia() ? Ga("Microsoft Edge") : Ha("Edg/")) || Ia() && Ga("Opera"));
    var ty = {},
        uy = null,
        vy = iy || jy || "function" == typeof _.t.btoa,
        Hb = function(a, b) {
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
                a = Hb(c, b)
            }
            return a
        },
        Tf = function(a) {
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
                    if (!hm(l)) throw Error("Unknown base64 encoding at char: " + l);
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
    var Lb = "undefined" !== typeof Uint8Array,
        Gb = !_.gy && "function" === typeof btoa,
        Ay = /[-_.]/g,
        Jb = {
            "-": "+",
            _: "/",
            ".": "="
        },
        By, Nb = {};
    var Cy, tc = function(a, b) {
            Ob(b);
            this.g = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        uc = function() {
            return Cy || (Cy = new tc(null, Nb))
        },
        Xd = function(a) {
            var b = a.g;
            return null == b ? "" : "string" === typeof b ? b : a.g = Ib(b)
        },
        kl = function(a) {
            Ob(Nb);
            var b = a.g;
            if (null != b && !Mb(b))
                if ("string" === typeof b)
                    if (Gb) {
                        Ay.test(b) && (b = b.replace(Ay, Kb));
                        b = atob(b);
                        for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                        b = c
                    } else b = zy(b);
            else b = null;
            return (a = null == b ? b : a.g = b) ? new Uint8Array(a) : By || (By = new Uint8Array(0))
        };
    tc.prototype.isEmpty = function() {
        return null == this.g
    };
    var Vb = 0,
        Wb = 0,
        Dy;
    var Ey = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        Gy = function(a) {
            if (!a) return Fy || (Fy = new Ey(0, 0));
            if (!/^\d+$/.test(a)) return null;
            bc(a);
            return new Ey(Vb, Wb)
        },
        Fy, Hy = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        mf = function(a) {
            if (!a) return Iy || (Iy = new Hy(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            bc(a);
            return new Hy(Vb, Wb)
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
    var of = function(a, b, c) {
        for (; 0 < c || 127 < b;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
        a.g.push(b)
    }, Ky = function(a, b) {
        for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
        a.g.push(b)
    }, Ly = function(a, b) {
        if (0 <= b) Ky(a, b);
        else {
            for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
            a.g.push(1)
        }
    };
    var If = function() {
            this.l = [];
            this.A = 0;
            this.g = new Jy
        },
        Jf = function(a, b) {
            0 !== b.length && (a.l.push(b), a.A += b.length)
        },
        Cf = function(a, b) {
            nf(a, b, 2);
            b = a.g.end();
            Jf(a, b);
            b.push(a.A);
            return b
        },
        Df = function(a, b) {
            var c = b.pop();
            for (c = a.A + a.g.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.A++;
            b.push(c);
            a.A++
        },
        nf = function(a, b, c) {
            Ky(a.g, 8 * b + c)
        },
        My = function(a, b, c) {
            nf(a, b, 2);
            Ky(a.g, c.length);
            Jf(a, a.g.end());
            Jf(a, c)
        };
    var ef = function(a, b) {
        this.g = a;
        this.Lj = b
    };
    var Ny = gc(),
        Ad = gc("0di"),
        Oy = gc("2ex"),
        je = gc("0dg");
    var ic = Ny ? function(a, b) {
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
        Ge = Ny ? function(a, b) {
            a[Ny] &= ~b
        } : function(a, b) {
            void 0 !== a.xb && (a.xb &= ~b)
        },
        wc = Ny ? function(a) {
            return a[Ny] | 0
        } : function(a) {
            return a.xb | 0
        },
        ee = Ny ? function(a) {
            return a[Ny]
        } : function(a) {
            return a.xb
        },
        mc = Ny ? function(a, b) {
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
    var xd = {},
        qc = {},
        Py, oe, Qy = [];
    mc(Qy, 55);
    oe = Object.freeze(Qy);
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
    var Ty, zc;
    var Nc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    var Dd, Fd, Gd;
    var Td = {},
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
        Sd = function(a, b, c, d) {
            c = void 0 === c ? Id : c;
            d = void 0 === d ? Id : d;
            var e = Wy.call(this) || this;
            var f = wc(a);
            f |= 64;
            mc(a, f);
            e.Od = f;
            e.Jf = b;
            e.be = c;
            e.th = e.Jf ? Kd : d;
            for (var g = 0; g < a.length; g++) {
                var h = a[g],
                    k = c(h[0], !1, !0),
                    l = h[1];
                b ? void 0 === l && (l = null) : l = d(h[1], !1, !0, void 0, void 0, f);
                Wy.prototype.set.call(e, k, l)
            }
            return e
        };
    _.T(Sd, Wy);
    var Xy = function(a) {
            if (a.Od & 2) throw Error("Cannot mutate an immutable Map");
        },
        Yd = function(a, b) {
            b = void 0 === b ? Ld : b;
            if (0 !== a.size) return ge(a, b)
        },
        ge = function(a, b) {
            b = void 0 === b ? Ld : b;
            var c = [];
            a = _.z(Wy.prototype, "entries").call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    _.q = Sd.prototype;
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
        return new Ry(a, Qd, this)
    };
    _.q.keys = function() {
        return _.z(Wy.prototype, "keys").call(this)
    };
    _.q.values = function() {
        var a = _.z(Array, "from").call(Array, _.z(Wy.prototype, "keys").call(this));
        return new Ry(a, Sd.prototype.get, this)
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
        return null == a ? this : null == b ? (Wy.prototype.delete.call(this, a), this) : Wy.prototype.set.call(this, a, this.th(b, !0, !0, this.Jf, !1, this.Od))
    };
    _.q.has = function(a) {
        return Wy.prototype.has.call(this, this.be(a, !1, !1))
    };
    _.q.get = function(a) {
        a = this.be(a, !1, !1);
        var b = Wy.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.Jf;
            return c ? (c = this.th(b, !1, !0, c, this.mk, this.Od), c !== b && Wy.prototype.set.call(this, a, c), c) : b
        }
    };
    Sd.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return _.z(this, "entries").call(this)
    };
    Sd.prototype.toJSON = void 0;
    Sd.prototype.Dl = qc;
    var Rd;
    var ne, ji, dr, Nn, ll, ij, ml, jl, Yy, ok, Ji, Cm, Zy, $y, hk, ti, gt, vs, bz, cz, ez, fz, lq, Av, Bv, gz, Zh, ri;
    _.fi = function(a, b) {
        a = a.F;
        return ne(a, ee(a), b)
    };
    ne = function(a, b, c, d) {
        if (-1 === c) return null;
        var e = pc(b);
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], null != d)) {
                if (le(a, b, e, c) && null != Oy) {
                    var g;
                    a = null != (g = Ty) ? g : Ty = {};
                    g = a[Oy] || 0;
                    4 <= g || (a[Oy] = g + 1, Dc())
                }
                return d
            }
            return le(a, b, e, c)
        }
    };
    _.mk = function(a, b, c) {
        var d = a.F,
            e = ee(d);
        yc(e);
        me(d, e, b, c);
        return a
    };
    ji = function(a, b, c) {
        return void 0 !== Oe(a, b, c, !1)
    };
    dr = function(a) {
        a = a.F;
        var b = ee(a),
            c = ne(a, b, 3),
            d = Jc(c);
        null != d && d !== c && me(a, b, 3, d);
        return d
    };
    Nn = function(a, b) {
        return Mc(_.fi(a, b))
    };
    ll = function(a, b) {
        a = a.F;
        var c = ee(a),
            d = ne(a, c, b),
            e = vc(d, !0, !!(c & 34));
        null != e && e !== d && me(a, c, b, e);
        return null == e ? uc() : e
    };
    ij = function(a, b, c, d) {
        var e = a.F,
            f = ee(e);
        yc(f);
        (c = Ne(e, f, c)) && c !== b && null != d && (f = me(e, f, c));
        me(e, f, b, d);
        return a
    };
    ml = function(a, b, c) {
        a = a.F;
        return Ne(a, ee(a), b) === c ? c : -1
    };
    jl = function(a, b) {
        a = a.F;
        return Ne(a, ee(a), b)
    };
    _.sq = function(a, b, c, d) {
        var e = a.F,
            f = ee(e);
        d = Ne(e, f, d);
        a = _.mj(a, b, c);
        d && d !== c && me(e, f, d);
        return a
    };
    _.mj = function(a, b, c) {
        a = a.F;
        var d = ee(a);
        yc(d);
        var e = ne(a, d, c);
        b = Jd(zd(e, b, !0, d));
        e !== b && me(a, d, c, b);
        return b
    };
    Yy = function(a, b, c) {
        return (a = Oe(a, b, c, !1)) ? a : yd(b)
    };
    _.Am = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Oe(a, b, c, d);
        if (null == b) return b;
        a = a.F;
        var e = ee(a);
        if (!(e & 2)) {
            var f = Jd(b);
            f !== b && (b = f, me(a, e, c, b, d))
        }
        return b
    };
    _.fk = function(a, b, c) {
        a = a.F;
        var d = ee(a);
        return Pe(a, d, b, c, !1, !(2 & d))
    };
    _.ii = function(a, b, c) {
        null == c && (c = void 0);
        return _.mk(a, b, c)
    };
    _.Al = function(a, b, c, d) {
        null == d && (d = void 0);
        return ij(a, b, c, d)
    };
    _.um = function(a, b, c) {
        var d = a.F,
            e = ee(d);
        yc(e);
        if (null == c) return me(d, e, b), a;
        for (var f = wc(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !0, m = !0, n = 0; n < c.length; n++) {
            var p = c[n];
            h || (p = !!(wc(p.F) & 2), l && (l = !p), m && (m = p))
        }
        h || (f = hc(f, 5, !0), f = hc(f, 8, l), f = hc(f, 16, m));
        k && f !== g && (c = cc(c), g = 0, f = re(f, e, !0));
        f !== g && mc(c, f);
        me(d, e, b, c);
        return a
    };
    ok = function(a, b, c, d) {
        Qe(a, b, c, d);
        return a
    };
    Ji = function(a, b) {
        return Zc(_.fi(a, b))
    };
    Cm = function(a, b) {
        return bd(_.fi(a, b))
    };
    Zy = function(a, b) {
        a = _.fi(a, b);
        var c;
        null == a ? c = a : Oc(a) ? "number" === typeof a ? c = kd(a) : c = qd(a) : c = void 0;
        return c
    };
    $y = function(a, b) {
        return ue(a, b, rd, 2, void 0, void 0, 0)
    };
    hk = function(a, b) {
        return wd(_.fi(a, b))
    };
    ti = function(a, b, c, d, e) {
        return ue(a, b, wd, c, d, e)
    };
    _.Q = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        return Se(Nn(a, b), c)
    };
    _.az = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Se(Ji(a, b), c)
    };
    gt = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Se(Cm(a, b), c)
    };
    _.Kg = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Se(rd(_.fi(a, b)), c)
    };
    vs = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Se(Zy(a, b), c)
    };
    _.I = function(a, b) {
        var c = void 0 === c ? "" : c;
        return Se(hk(a, b), c)
    };
    _.jg = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return Se(_.Xc(_.fi(a, b)), c)
    };
    bz = function(a, b) {
        var c = void 0 === c ? "0" : c;
        return Se(sd(_.fi(a, b), !0), c)
    };
    cz = function(a, b, c) {
        a = ti(a, b, 3, void 0, !0);
        if ("number" !== typeof c || 0 > c || c >= a.length) throw Error();
        return a[c]
    };
    ez = function(a) {
        return _.Kg(a, ml(a, dz, 3))
    };
    fz = function(a, b) {
        return _.I(a, ml(a, b, 2))
    };
    lq = function(a, b) {
        a = Nn(a, b);
        return null == a ? void 0 : a
    };
    Av = function(a, b) {
        a = Ji(a, b);
        return null == a ? void 0 : a
    };
    Bv = function(a, b) {
        a = hk(a, b);
        return null == a ? void 0 : a
    };
    gz = function(a, b) {
        a = _.Xc(_.fi(a, b));
        return null == a ? void 0 : a
    };
    Zh = function(a, b, c) {
        return _.mk(a, b, null == c ? c : Lc(c))
    };
    _.yl = function(a, b, c) {
        return _.Le(a, b, null == c ? c : Lc(c), !1)
    };
    _.wi = function(a, b, c) {
        return _.mk(a, b, null == c ? c : Yc(c))
    };
    _.zl = function(a, b, c) {
        return _.Le(a, b, null == c ? c : Yc(c), 0)
    };
    _.di = function(a, b, c) {
        return _.mk(a, b, gd(c))
    };
    _.lj = function(a, b, c) {
        return _.Le(a, b, gd(c), "0")
    };
    ri = function(a, b, c) {
        return _.mk(a, b, vd(c))
    };
    _.kj = function(a, b, c) {
        return _.Le(a, b, vd(c), "")
    };
    _.gi = function(a, b, c) {
        return _.mk(a, b, Wc(c))
    };
    _.K = function(a, b, c) {
        return _.Le(a, b, Wc(c), 0)
    };
    _.Ii = function(a, b) {
        return null != hk(a, b)
    };
    _.D = function(a, b, c) {
        this.F = _.A(a, b, c)
    };
    _.D.prototype.toJSON = function() {
        return Py ? Ue(this, this.F, !1) : Ue(this, $d(this.F, be, void 0, void 0, !1), !0)
    };
    var gl = function(a) {
        Py = !0;
        try {
            return JSON.stringify(a.toJSON(), Wd)
        } finally {
            Py = !1
        }
    };
    _.D.prototype.Eg = xd;
    var hf = (0, _.u.Symbol)(),
        Ye = (0, _.u.Symbol)(),
        df = (0, _.u.Symbol)(),
        gf = (0, _.u.Symbol)(),
        hz = lf(function(a, b, c) {
            b = Jc(b);
            null != b && (nf(a, c, 5), a = a.g, c = Dy || (Dy = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Wb = 0, b = Vb = c.getUint32(0, !0), a.g.push(b >>> 0 & 255), a.g.push(b >>> 8 & 255), a.g.push(b >>> 16 & 255), a.g.push(b >>> 24 & 255))
        }),
        iz = lf(pf),
        jz = lf(pf),
        kz = lf(function(a, b, c) {
            a: if (null != b) {
                if (Oc(b)) {
                    if ("string" === typeof b) {
                        b = qd(b);
                        break a
                    }
                    if ("number" === typeof b) {
                        b = kd(b);
                        break a
                    }
                }
                b = void 0
            }null != b && ("string" === typeof b && Gy(b), null != b && (nf(a, c, 0), "number" === typeof b ? (a = a.g, Xb(b), of (a, Vb, Wb)) : (c = Gy(b), of (a.g, c.A, c.g))))
        }),
        lz = lf(function(a, b, c) {
            b = Zc(b);
            null != b && null != b && (nf(a, c, 0), Ly(a.g, b))
        }),
        mz = lf(function(a, b, c) {
            b = Mc(b);
            null != b && (nf(a, c, 0), a.g.g.push(b ? 1 : 0))
        }),
        nz = lf(function(a, b, c) {
            b = wd(b);
            null != b && My(a, c, Cb(b))
        }),
        oz;
    oz = new ef(function(a, b, c) {
        b = We(wd, b);
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    g = b[d];
                null != g && My(e, f, Cb(g))
            }
    }, !1);
    var jf = new ef(Ef, !0),
        ff = new ef(Ef, !0),
        pz;
    pz = new ef(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Ef(a, b[f], c, d, e)
    }, !0);
    var qz = lf(function(a, b, c) {
            b = bd(b);
            null != b && null != b && (nf(a, c, 0), Ky(a.g, b))
        }),
        rz = lf(function(a, b, c) {
            b = Zc(b);
            null != b && (b = parseInt(b, 10), nf(a, c, 0), Ly(a.g, b))
        }),
        sz;
    sz = new ef(function(a, b, c) {
        b = We(Zc, b);
        if (null != b && b.length) {
            c = Cf(a, c);
            for (var d = 0; d < b.length; d++) Ly(a.g, b[d]);
            Df(a, c)
        }
    }, !1);
    var Hf = void 0;
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
    var si = function(a) {
        this.F = _.A(a)
    };
    _.T(si, _.D);
    si.prototype.getId = function() {
        return _.I(this, 1)
    };
    var xz = [0, nz];
    var vi = function(a) {
        this.F = _.A(a)
    };
    _.T(vi, _.D);
    vi.prototype.getWidth = function() {
        return _.az(this, 1)
    };
    vi.prototype.getHeight = function() {
        return _.az(this, 2)
    };
    var yz = [0, lz, -1];
    var ui = function(a) {
        this.F = _.A(a)
    };
    _.T(ui, _.D);
    var zz = [0, jz, mz, nz, -1];
    var qi = function(a) {
        this.F = _.A(a)
    };
    _.T(qi, _.D);
    qi.da = [4];
    var Az = [0, nz, jz, nz, oz, rz, xz, yz, jz, zz];
    var ki = function(a) {
        this.F = _.A(a)
    };
    _.T(ki, _.D);
    var ni = function(a, b) {
            return _.gi(a, 1, b)
        },
        oi = function(a, b) {
            return Zh(a, 4, b)
        },
        mi = function(a, b) {
            return _.wi(a, 2, b)
        },
        Bz = [0, rz, lz, nz, mz];
    var bi = function(a) {
        this.F = _.A(a)
    };
    _.T(bi, _.D);
    var ai = function(a, b) {
            return ri(a, 1, b)
        },
        Yh = function(a, b) {
            return ok(a, 3, qi, b)
        },
        $h = function(a, b) {
            return _.gi(a, 4, b)
        };
    bi.prototype.ji = function() {
        return _.jg(this, 7, 0)
    };
    bi.da = [10, 3];
    var Cz = [0, nz, jz, pz, Az, rz, Bz, mz, rz, 2, oz];
    var Ai = function(a) {
        this.F = _.A(a)
    };
    _.T(Ai, _.D);
    var Dz = [0, rz, mz, jz];
    var Ez = function(a) {
        this.F = _.A(a)
    };
    _.T(Ez, _.D);
    var Xh = function(a, b) {
            return Qe(a, 2, bi, b)
        },
        li = function(a, b) {
            _.ii(a, 5, b)
        },
        Fi = function(a, b) {
            _.ii(a, 9, b)
        },
        Gi = function(a, b) {
            return ri(a, 10, b)
        };
    Ez.da = [2];
    var Fz = [0, rz, pz, Cz, rz, nz, Bz, nz, mz, lz, Dz, nz, -1];
    var Bi = function(a) {
        this.F = _.A(a)
    };
    _.T(Bi, _.D);
    var Di = function(a) {
        var b = new Ez;
        b = _.gi(b, 1, 1);
        return Qe(a, 1, Ez, b)
    };
    Bi.da = [1];
    Bi.prototype.g = Kf([0, pz, Fz]);
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
    Pz.prototype.hi = function() {
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
    _.$z.prototype.We = ba(0);
    _.$z.prototype.Ud = ba(1);
    _.$z.prototype.Ye = ba(2);
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
    eA.prototype.qg = function() {
        return _.Ii(this, 2)
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
    var nk = function(a) {
            var b = new gA;
            return _.gi(b, 1, a)
        },
        hA = [0, rz];
    var gk = function(a) {
        this.F = _.A(a)
    };
    _.T(gk, _.D);
    var iA = function(a) {
            var b = new gk;
            return ri(b, 1, a)
        },
        jA = function(a) {
            var b = window.Date.now();
            b = _.z(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
            return _.di(a, 3, b)
        };
    gk.prototype.lb = function(a) {
        return _.ii(this, 10, a)
    };
    var kA = Lf(gk),
        lA = [0, nz, -1, jz, lz, -2, jz, hz, mz, hA, mz];
    var mA = [0, 1, [0, kz, -2], -1, nz, -1, mz, [0, 3, rz, nz], jz, sz, qz];
    var nA = function(a) {
        this.F = _.A(a)
    };
    _.T(nA, _.D);
    nA.da = [1, 2];
    nA.prototype.g = Kf([0, pz, mA, pz, lA]);
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
    oA.prototype.qg = function() {
        return _.Ii(this, 1)
    };
    oA.prototype.getVersion = function() {
        return _.jg(this, 5, 0)
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
        return Ji(this, 6)
    };
    AA.prototype.getWidth = function() {
        return Ji(this, 7)
    };
    AA.prototype.getEscapedQemQueryId = function() {
        return hk(this, 34)
    };
    AA.da = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63, 67];
    var Ev = [39, 48];
    var BA = function(a) {
        this.F = _.A(a)
    };
    _.T(BA, _.D);
    var CA = Lf(BA);
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
        return _.Kg(this, 1)
    };
    Zv.prototype.setCorrelator = function(a) {
        return _.lj(this, 1, a)
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
    _.Nf = function(a) {
        var b = "Lc";
        if (a.Lc && a.hasOwnProperty(b)) return a.Lc;
        b = new a;
        return a.Lc = b
    };
    var Of = function() {
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
    _.KA = Hi(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.Qx(Rx);
        return !b.parentElement
    });
    _.Nm = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Nm.prototype.equals = function(a) {
        return a instanceof _.Nm && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    _.Nm.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Nm.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Nm.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Rm = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.q = _.Rm.prototype;
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
    var lg, SA, RA, VA, XA, bB;
    lg = function(a) {
        return a ? new _.PA(_.QA(a)) : gx || (gx = new _.PA)
    };
    SA = function(a, b) {
        xa(b, function(c, d) {
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
        return new _.Rm(a.clientWidth, a.clientHeight)
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
                _.hx(g ? _.ha(f) : f, d)
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
        return _.ja(b) && 1 == b.nodeType ? b : null
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
    _.vj = function(a, b, c, d) {
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
    _.q.gl = function(a) {
        var b = this.g;
        return "string" === typeof a ? b.getElementById(a) : a
    };
    _.q.kn = _.PA.prototype.gl;
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
    _.q.Sj = _.ZA;
    _.q.contains = _.aB;
    var dB = function() {
            return Ea && Fa ? Fa.mobile : !cB() && (Ha("iPod") || Ha("iPhone") || Ha("Android") || Ha("IEMobile"))
        },
        cB = function() {
            return Ea && Fa ? !Fa.mobile && (Ha("iPad") || Ha("Android") || Ha("Silk")) : Ha("iPad") || Ha("Android") && !Ha("Mobile") || Ha("Silk")
        };
    var fB, jp;
    _.eB = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    fB = function(a) {
        return a ? decodeURI(a) : a
    };
    _.Gn = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) _.Gn(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    jp = /#|$/;
    var ql, Ek, gB, Fk, Zm, tp, kw, jw, iB, jB, $m, kB, lB, mB, nB, oB, pB, vv, qB, rB, Np, Uj, Op, Tp, sB, uB, vB, wB, xB, yB, bk, zB, Ao, ro, AB, Ln, BB, CB;
    _.Wk = function(a) {
        try {
            return !!a && null != a.location.href && ey(a, "foo")
        } catch (b) {
            return !1
        }
    };
    ql = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? gB(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.Wk(c) || !a(c));) c = gB(c)
    };
    Ek = function() {
        var a = window;
        ql(function(b) {
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
    Fk = function(a) {
        return _.Wk(a.top) ? a.top : null
    };
    _.hp = function(a, b) {
        var c = _.cg("SCRIPT", a);
        qb(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Zm = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.rh = function() {
        if (!_.u.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.u.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Jn = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.hB = function(a) {
        var b = [];
        _.Jn(a, function(c) {
            b.push(c)
        });
        return b
    };
    tp = function(a, b) {
        return za(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.sh = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    kw = Hi(function() {
        return _.Og(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], iB) || 1E-4 > Math.random()
    });
    jw = Hi(function() {
        return iB("MSIE")
    });
    iB = function(a) {
        return -1 != Da().indexOf(a)
    };
    jB = /^([0-9.]+)px$/;
    $m = function(a) {
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
        on: "allow-forms",
        pn: "allow-modals",
        qn: "allow-orientation-lock",
        rn: "allow-pointer-lock",
        sn: "allow-popups",
        un: "allow-popups-to-escape-sandbox",
        vn: "allow-presentation",
        wn: "allow-same-origin",
        xn: "allow-scripts",
        yn: "allow-top-navigation",
        zn: "allow-top-navigation-by-user-activation"
    };
    nB = Hi(function() {
        return _.hB(mB)
    });
    oB = function(a) {
        var b = nB();
        return a.length ? _.sj(b, function(c) {
            return !(0 <= _.ca(a, c))
        }) : b
    };
    pB = function() {
        var a = _.cg("IFRAME"),
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
                var f = _.cg("IFRAME");
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
    _.Wp = Hi(function() {
        return dB() ? 2 : cB() ? 1 : 0
    });
    Np = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.xp = function(a, b) {
        _.Jn(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    Uj = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    Op = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Zm(a, window);
            if (d) {
                if (b(d, a)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Tp = function(a) {
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
    bk = function(a) {
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
    Ao = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    ro = function(a) {
        return 0 === a || Ao(a)
    };
    AB = function(a) {
        return new _.u.Promise(function(b) {
            setTimeout(function() {
                return void b(void 0)
            }, a)
        })
    };
    Ln = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.cg = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    BB = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.Wk(a) && (b = a);
        return b
    };
    _.Ti = function(a) {
        return _.E(HA) || Ka() && dB() ? CB(a, !0) : 1
    };
    CB = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? Fk(a) : a;
        if (!c) return 1;
        a = 0 === (0, _.Wp)();
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
        return a instanceof _.Nm ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
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
        return (a = void 0 === a ? Sf() : a) ? _.Wk(a.master) ? a.master : null : null
    };
    var LB, NB, Qm, OB, PB, Mm;
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
    Qm = function(a) {
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
            c = new _.Nm(0, 0);
        var d = b ? _.QA(b) : document;
        d = !_.gy || 9 <= Number(sy) || _.TA(lg(d).g) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Qm(a);
        d = lg(b).g;
        b = VA(d);
        d = d.parentWindow || d.defaultView;
        b = _.gy && d.pageYOffset != b.scrollTop ? new _.Nm(b.scrollLeft, b.scrollTop) : new _.Nm(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Mm = function(a, b) {
        var c = new _.Nm(0, 0),
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
        a = Qm(a);
        return new _.Nm(a.left, a.top)
    };
    _.RB = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Pm = function(a, b) {
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
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Qm(a), new _.Rm(a.right - a.left, a.bottom - a.top)) : new _.Rm(b, c)
    };
    var Kp;
    _.TB = _.Bw(["//fonts.googleapis.com/css"]);
    Kp = function(a) {
        a = IB(Sf(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    _.nj = function(a) {
        this.F = _.A(a)
    };
    _.T(_.nj, _.D);
    _.nj.da = [1];
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
        return _.ii(b, 1, a)
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
        return _.ii(b, 1, a)
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
        return _.ii(b, 1, a)
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
    _.Ol = function(a) {
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
    EC = Hi(function() {
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
    _.Ml = function(a) {
        a && CC && EC() && (CC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), CC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    GC = function(a, b, c, d, e, f) {
        a.g && (b = new BC(b, c, d, void 0 === e ? 0 : e, f), !a.g || 2048 < a.A.length || a.A.push(b))
    };
    FC.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new BC(a, b, _.$f() || _.Zf());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        CC && EC() && CC.mark(b);
        return a
    };
    FC.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (_.$f() || _.Zf()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            CC && EC() && CC.mark(b);
            !this.g || 2048 < this.A.length || this.A.push(a)
        }
    };
    var ft = function(a, b, c) {
        var d = _.$f();
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
        _.Jn(a, function(g, h) {
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
    _.ig = function(a) {
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
            eg(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
        },
        hg = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.Jn(a, function(e, f) {
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
        b = _.kj(a, 2, b);
        this.j = _.ie(b)
    };
    var PC = function(a) {
        this.F = _.A(a)
    };
    _.T(PC, _.D);
    var RC = function(a, b) {
            return ij(a, 1, QC, vd(b))
        },
        SC = function(a, b) {
            return ij(a, 2, QC, gd(b))
        },
        TC = function(a, b) {
            return ij(a, 3, QC, null == b ? b : Lc(b))
        },
        QC = [1, 2, 3];
    var UC = function(a) {
        this.F = _.A(a)
    };
    _.T(UC, _.D);
    var WC = function(a, b) {
            return ij(a, 4, VC, _.Ic(b))
        },
        VC = [2, 4];
    var XC = function(a) {
        this.F = _.A(a)
    };
    _.T(XC, _.D);
    var YC = function(a) {
            var b = new XC;
            return _.kj(b, 1, a)
        },
        ZC = function(a, b) {
            return _.ii(a, 3, b)
        },
        $C = function(a, b) {
            return ok(a, 4, PC, b)
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
    var Il = function(a) {
        this.F = _.A(a)
    };
    _.T(Il, _.D);
    var xl = function(a) {
        this.F = _.A(a)
    };
    _.T(xl, _.D);
    var wl = function(a) {
        this.F = _.A(a)
    };
    _.T(wl, _.D);
    var ul = function(a) {
        this.F = _.A(a)
    };
    _.T(ul, _.D);
    var El = function(a) {
        this.F = _.A(a)
    };
    _.T(El, _.D);
    var cD = function(a) {
        this.F = _.A(a)
    };
    _.T(cD, _.D);
    var dD = function(a) {
        this.F = _.A(a)
    };
    _.T(dD, _.D);
    var tl = function(a) {
        this.F = _.A(a)
    };
    _.T(tl, _.D);
    tl.prototype.getTagSessionCorrelator = function() {
        return _.Kg(this, 2)
    };
    var Dl = function(a) {
        var b = new cD;
        return _.Al(a, 13, Bl, b)
    };
    tl.da = [4];
    var Bl = [6, 7, 8, 9, 11, 13, 14];
    var eD = function(a) {
        this.F = _.A(a)
    };
    _.T(eD, _.D);
    var fD = function(a) {
        this.F = _.A(a)
    };
    _.T(fD, _.D);
    var tq = function(a) {
        this.F = _.A(a)
    };
    _.T(tq, _.D);
    _.hj = function(a) {
        this.F = _.A(a)
    };
    _.T(_.hj, _.D);
    _.hj.prototype.getTagSessionCorrelator = function() {
        return _.Kg(this, 8)
    };
    _.gj = function(a, b) {
        return _.zl(a, 10, b)
    };
    _.jj = [3, 4, 6];
    var rq = function(a) {
        this.F = _.A(a)
    };
    _.T(rq, _.D);
    var gD = function(a) {
            var b = new rq;
            return _.Al(b, 2, uq, a)
        },
        uq = [1, 2, 3, 4, 5];
    var nq = function(a) {
        this.F = _.A(a)
    };
    _.T(nq, _.D);
    nq.prototype.getTagSessionCorrelator = function() {
        return _.Kg(this, 2)
    };
    nq.da = [4];
    var Sl = function(a) {
        this.F = _.A(a)
    };
    _.T(Sl, _.D);
    Sl.da = [3];
    var Rl = function(a) {
        this.F = _.A(a)
    };
    _.T(Rl, _.D);
    Rl.da = [4, 5];
    var Ql = function(a) {
        this.F = _.A(a)
    };
    _.T(Ql, _.D);
    Ql.prototype.getTagSessionCorrelator = function() {
        return _.Kg(this, 1)
    };
    Ql.da = [2];
    var Pl = function(a) {
        this.F = _.A(a)
    };
    _.T(Pl, _.D);
    var Vl = [4, 6];
    var hD = function(a) {
        this.F = _.A(a)
    };
    _.T(hD, _.D);
    hD.prototype.getTagSessionCorrelator = function() {
        return _.Kg(this, 1)
    };
    hD.prototype.getMessageId = function() {
        return _.jg(this, 8, 0)
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
            this.ki = new kD(a);
            this.Gd = new lD(a)
        },
        kD = function(a) {
            this.uk = new mD(a);
            this.refresh = new nD(a)
        },
        mD = function(a) {
            this.vk = new oD(a)
        },
        oD = function(a) {
            this.Rc = function(b) {
                var c = b.Uc,
                    d = b.Sf,
                    e = b.pi,
                    f = b.ri;
                b = b.mi;
                a(ZC($C($C($C($C(YC("XVNPAd"), SC(new PC, Math.round(d))), TC(new PC, e)), TC(new PC, f)), TC(new PC, b)), WC(new UC, c)))
            }
        },
        nD = function(a) {
            this.km = new pD(a)
        },
        pD = function(a) {
            this.Rc = function(b) {
                var c = b.Uc;
                b = b.Nm;
                a(ZC($C(YC("e1Ueh"), SC(new PC, Math.round(b))), WC(new UC, c)))
            }
        },
        lD = function(a) {
            this.jh = new qD(a);
            this.ck = new rD(a);
            this.kk = new sD(a);
            this.yk = new tD(a)
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
                    d = b.Rf;
                b = b.status;
                d = $C($C(YC("SOomke"), RC(new PC, d)), RC(new PC, b));
                b = new UC;
                c = ij(b, 2, VC, gd(Math.round(c)));
                a(ZC(d, c))
            }
        },
        tD = function(a) {
            this.Rc = function(b) {
                var c = b.Uc;
                b = b.Kl;
                a(ZC($C(YC("zi5kKf"), SC(new PC, Math.round(b))), WC(new UC, c)))
            }
        },
        qD = function(a) {
            this.uh = new uD(a)
        },
        uD = function(a) {
            this.Kc = function(b) {
                var c = b.Xc;
                b = b.status;
                b = $C(YC("TP3y1d"), RC(new PC, b));
                var d = new UC;
                c = ij(d, 2, VC, gd(Math.round(c)));
                a(ZC(b, c))
            }
        },
        vD = function() {
            OC.apply(this, arguments);
            var a = this;
            this.ac = new jD(function(b) {
                return a.um(b)
            })
        };
    _.T(vD, OC);
    _.wD = function() {
        vD.apply(this, arguments)
    };
    _.T(_.wD, vD);
    _.q = _.wD.prototype;
    _.q.vm = function() {
        this.A.apply(this, _.xi(_.Va.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 2,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.Vc = function() {
        this.A.apply(this, _.xi(_.Va.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 5,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.oj = function() {
        this.A.apply(this, _.xi(_.Va.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 15,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.pj = ba(3);
    _.q.ym = function() {
        this.A.apply(this, _.xi(_.Va.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 17,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.wm = function() {
        this.A.apply(this, _.xi(_.Va.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 19,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.Cm = function() {
        this.A.apply(this, _.xi(_.Va.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 21,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.um = function() {
        this.A.apply(this, _.xi(_.Va.apply(0, arguments).map(function(a) {
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
            var b = gg(a.g, a.j);
            a.o(a.C + "?e=1", b);
            a.g = []
        }
    };
    yD.prototype.A = function() {
        var a = _.Va.apply(0, arguments),
            b = this;
        try {
            this.K && 65536 <= gg(this.g.concat(a), this.j).length && zD(this), this.M && !this.D && (this.D = !0, this.M.g(function() {
                zD(b)
            })), this.g.push.apply(this.g, _.xi(a)), this.g.length >= this.I && zD(this), this.g.length && null === this.l && (this.l = setTimeout(function() {
                zD(b)
            }, this.Ca))
        } catch (c) {
            fg(c, this.j)
        }
    };
    var pw = function(a, b, c, d, e, f) {
        yD.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", xD, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!_.u.globalThis.fetch, f)
    };
    _.T(pw, yD);
    var AD = new EA(494575051),
        BD = new GA(489560439),
        CD = new GA(505762507);
    var Mv, Eo, Cp, DD, ED, FD, zi, GD, HD, ID, lv, kv, zv, JD, mw, KD, LD, MD, ND, So, OD, PD, QD, RD, fs, SD, TD, UD, lw, VD, uv, WD, XD, YD, Po, dE, gE, sr, hE, Kl, Lu, jE, jr, kE, Bq, lE, Aq, mE, nE, oE, $t, gu, pE, qE, rE, sE, tE, sv, uE, qv, vE, Fn, Cn, wE, Dk, fv, yE, zE, AE, zo, BE, gv, cl, CE, DE, EE, FE, bl, Xt, iu, Yt, GE, nw, HE, IE, JE, KE, LE, Zt, ME, NE, OE, PE, QE, FF, mt, Ls, GF, HF, Is, IF, JF, KF, LF, MF, NF, OF, PF, bw, cw, QF, dw, aw, RF, SF, Ut, fw, TF;
    Mv = new _.U(607106222);
    Eo = new _.U(577939489, !0);
    Cp = new EA(7, .1);
    DD = new _.U(212);
    ED = new _.U(561694963, !0);
    FD = new _.U(609732864);
    zi = new EA(612427113);
    GD = new EA(462420536);
    HD = new _.U(476475256, !0);
    ID = new EA(438663674);
    lv = new EA(45409629);
    kv = new EA(522348973);
    zv = new EA(550605190);
    JD = new EA(564509649);
    mw = new EA(578655462, 20);
    KD = new _.U(558225291);
    LD = new _.U(586621833, !0);
    MD = new _.U(591917863);
    ND = new _.U(613699219);
    So = new _.U(45619539);
    OD = new _.U(582386403, !0);
    PD = new _.U(603086552, !0);
    QD = new _.U(577861852);
    RD = new _.U(573236024, !0);
    fs = new _.U(453);
    SD = new _.U(454);
    TD = new EA(377289019, 1E4);
    UD = new EA(529, 20);
    lw = new EA(573282293, .01);
    VD = new FA(10);
    uv = new EA(610770343);
    WD = new _.U(610525552);
    XD = new _.U(45622305);
    YD = new _.U(360245597, !0);
    Po = new _.U(540043576, !0);
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
    Kl = new _.U(85);
    Lu = new _.U(524098256);
    jE = new _.U(595824397, !0);
    jr = new EA(532520346, 120);
    kE = new _.U(557870754, !0);
    Bq = new _.U(614048762);
    lE = new GA(466086960);
    Aq = new _.U(596058628, !0);
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
    Fn = new GA(1);
    Cn = new FA(2, "1-0-40");
    wE = new _.U(608664189);
    Dk = new _.U(602464517);
    _.xE = new EA(506394061, 100);
    fv = new GA(489);
    yE = new _.U(392065905);
    zE = new EA(360245595, 500);
    AE = new _.U(561985307);
    zo = new _.U(45397804, !0);
    BE = new _.U(45398607, !0);
    gv = new _.U(424117738);
    cl = new _.U(531493729);
    CE = new _.U(563462360, !0);
    DE = new _.U(555237688);
    EE = new _.U(555237687);
    FE = new _.U(555237686);
    bl = new _.U(507033477, !0);
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
    FF = new _.U(609010285);
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
    PF = new _.U(592060684);
    bw = new _.U(77);
    cw = new _.U(78);
    QF = new _.U(83);
    dw = new _.U(80);
    aw = new _.U(76);
    RF = new _.U(84);
    SF = new _.U(1958);
    Ut = new _.U(1973);
    fw = new _.U(188);
    TF = new _.U(485990406);
    ya({
        Tn: 0,
        Sn: 1,
        Pn: 2,
        Kn: 3,
        Qn: 4,
        Ln: 5,
        Rn: 6,
        Nn: 7,
        On: 8,
        Jn: 9,
        Mn: 10,
        Un: 11
    }).map(function(a) {
        return Number(a)
    });
    ya({
        Wn: 0,
        Xn: 1,
        Vn: 2
    }).map(function(a) {
        return Number(a)
    });
    var UF = function(a, b) {
        this.g = ng(a);
        this.A = b
    };
    UF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return this
    };
    UF.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.A.call(void 0, a.value),
            done: a.done
        }
    };
    var VF = function(a, b) {
            return new UF(a, b)
        },
        WF = function(a) {
            this.A = a;
            this.g = 0
        };
    WF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return this
    };
    WF.prototype.next = function() {
        for (; this.g < this.A.length;) {
            var a = this.A[this.g].next();
            if (!a.done) return a;
            this.g++
        }
        return {
            done: !0
        }
    };
    var XF = function() {
        return new WF(_.Va.apply(0, arguments).map(ng))
    };
    var YF = _.t.URL,
        ZF;
    try {
        new YF("http://example.com"), ZF = !0
    } catch (a) {
        ZF = !1
    }
    var $F = ZF,
        aG = function(a) {
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
    aG.prototype.get = function(a) {
        return (a = this.g.get(a)) && a.length ? a[0] : null
    };
    aG.prototype.getAll = function(a) {
        return [].concat(_.xi(this.g.get(a) || []))
    };
    aG.prototype.has = function(a) {
        return this.g.has(a)
    };
    aG.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return XF.apply(null, _.xi(VF(this.g, function(a) {
            var b = a[0];
            return VF(a[1], function(c) {
                return [b, c]
            })
        })))
    };
    aG.prototype.toString = function() {
        return Gg(this)
    };
    var Gg = function(a) {
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
        cG = function(a) {
            var b = _.YA(document, "A");
            try {
                _.mb(b, Ra(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if ("" === c || ":" === c || ":" != c[c.length - 1]) throw Error(a + " is not a valid URL.");
            if (!bG.has(c)) throw Error(a + " is not a valid URL.");
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
            bG.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        },
        pg = function(a) {
            if ($F) {
                try {
                    var b = new YF(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = bG.get(b.protocol);
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
            return cG(a)
        },
        bG = new _.u.Map([
            ["http:", "80"],
            ["https:", "443"],
            ["ws:", "80"],
            ["wss:", "443"],
            ["ftp:", "21"]
        ]),
        og = function(a) {
            return $F && a.searchParams ? a.searchParams : new aG(a.search)
        };
    var dG = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.cg("IFRAME", b);
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
    var eG = function(a) {
        this.F = _.A(a)
    };
    _.T(eG, _.D);
    eG.da = [1, 2];
    var fG = function(a) {
        this.F = _.A(a)
    };
    _.T(fG, _.D);
    var Jg = Lf(fG);
    _.V = function() {
        this.M = this.M;
        this.Ca = this.Ca
    };
    _.V.prototype.M = !1;
    _.V.prototype.ya = function() {
        this.M || (this.M = !0, this.A())
    };
    _.S = function(a, b) {
        _.rp(a, _.fx(Ig, b))
    };
    _.rp = function(a, b) {
        a.M ? b() : (a.Ca || (a.Ca = []), a.Ca.push(b))
    };
    _.V.prototype.A = function() {
        if (this.Ca)
            for (; this.Ca.length;) this.Ca.shift()()
    };
    var gG = function(a, b, c, d) {
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
    _.T(gG, _.V);
    gG.prototype.A = function() {
        delete this.g;
        this.D.clear();
        this.l.clear();
        this.K.clear();
        this.I && (_.dg(this.j, "message", this.I), delete this.I);
        delete this.j;
        delete this.o;
        _.V.prototype.A.call(this)
    };
    var hG = function(a) {
            if (a.g) return a.g;
            a.C && a.C(a.j) ? a.g = a.j : a.g = qB(a.j, a.H);
            var b;
            return null != (b = a.g) ? b : null
        },
        jG = function(a, b, c) {
            if (hG(a))
                if (a.g === a.j)(b = a.D.get(b)) && b(a.g, c);
                else {
                    var d = a.l.get(b);
                    if (d && d.od) {
                        iG(a);
                        var e = ++a.J;
                        a.K.set(e, {
                            Oc: d.Oc,
                            Ek: d.de(c),
                            Vl: "addEventListener" === b
                        });
                        a.g.postMessage(d.od(c, e), "*")
                    }
                }
        },
        iG = function(a) {
            a.I || (a.I = function(b) {
                try {
                    var c = a.o ? a.o(b) : void 0;
                    if (c) {
                        var d = c.Vg,
                            e = a.K.get(d);
                        if (e) {
                            e.Vl || a.K.delete(d);
                            var f;
                            null == (f = e.Oc) || f.call(e, e.Ek, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.rb(a.j, "message", a.I))
        };
    var kG = function(a, b) {
            var c = {
                cb: function(d) {
                    d = Jg(d);
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
        lG = {
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
            this.caller = new gG(a, "googlefcPresent", void 0, Ng);
            this.caller.D.set("getDataWithCallback", kG);
            this.caller.l.set("getDataWithCallback", lG)
        };
    _.T(Wq, _.V);
    Wq.prototype.A = function() {
        this.caller.ya();
        _.V.prototype.A.call(this)
    };
    Wq.prototype.ld = function(a) {
        if (void 0 === a ? 0 : a) return !1;
        this.l || (this.g = !!hG(this.caller), this.l = !0);
        return this.g
    };
    var Uq = function(a) {
            return new _.u.Promise(function(b) {
                a.ld() && jG(a.caller, "getDataWithCallback", {
                    command: "loaded",
                    Vb: function(c) {
                        b(c.zc)
                    }
                })
            })
        },
        mG = function(a, b) {
            a.ld() && jG(a.caller, "getDataWithCallback", {
                command: "prov",
                spsp: gl(b),
                Vb: function() {}
            })
        };
    var nG = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        oG = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            this.l = a;
            this.g = null;
            this.D = {};
            this.o = 0;
            var c;
            this.K = null != (c = b.timeoutMs) ? c : 500;
            var d;
            this.I = null != (d = b.ek) ? d : !1;
            this.j = null
        };
    _.T(oG, _.V);
    oG.prototype.A = function() {
        this.D = {};
        this.j && (_.dg(this.l, "message", this.j), delete this.j);
        delete this.D;
        delete this.l;
        delete this.g;
        _.V.prototype.A.call(this)
    };
    var qG = function(a) {
        return "function" === typeof a.l.__tcfapi || null != pG(a)
    };
    oG.prototype.addEventListener = function(a) {
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
            g ? (c = g, c.internalErrorState = nG(c), c.internalBlockOnErrors = b.I, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            rG(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    oG.prototype.removeEventListener = function(a) {
        a && a.listenerId && rG(this, "removeEventListener", null, a.listenerId)
    };
    var tG = function(a, b, c) {
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
            a = 0 === f ? a.purpose && a.vendor ? (c = sG(a.vendor.consents, void 0 === d ? "755" : d)) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : c && sG(a.purpose.consents, b) : !0 : 1 === f ? a.purpose && a.vendor ? sG(a.purpose.legitimateInterests, b) && sG(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return a
        },
        sG = function(a, b) {
            return !(!a || !a[b])
        },
        rG = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
            else if (pG(a)) {
                uG(a);
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
        pG = function(a) {
            if (a.g) return a.g;
            a.g = qB(a.l, "__tcfapiLocator");
            return a.g
        },
        uG = function(a) {
            a.j || (a.j = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.rb(a.l, "message", a.j))
        },
        vG = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = nG(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (hg({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        wG = function(a, b, c) {
            return !1 === a.gdprApplies ? !0 : b.every(function(d) {
                return tG(a, d, c)
            })
        };
    var xG = function(a, b, c) {
            this.g = a;
            this.l = b;
            this.A = void 0 === c ? function() {} : c
        },
        yG = function(a, b, c) {
            return new xG(a, b, c)
        };
    xG.prototype.start = function(a, b) {
        a = void 0 === a ? !1 : a;
        if (this.g === this.g.top) try {
            dG(this.g), zG(this, a, b)
        } catch (c) {}
    };
    var zG = function(a, b, c) {
            b = void 0 === b ? !1 : b;
            var d = {};
            try {
                var e = qg(a.g),
                    f = rg(a.g);
                d.fc = e;
                d.fctype = f
            } catch (h) {}
            try {
                var g = Hg(a.g.location.href)
            } catch (h) {}
            b && g && (d.href = g);
            b = AG(a.l, d);
            mg(a.g, b, function() {
                a.A(!0)
            }, function() {
                a.A(!1)
            });
            c && mG(new Wq(a.g), c)
        },
        AG = function(a, b) {
            var c = new mx(kx, "https://fundingchoicesmessages.google.com/i/%{id}");
            b = _.z(Object, "assign").call(Object, {}, b, {
                ers: 3
            });
            return _.rx(ux(c, {
                id: a
            }), b)
        };
    var BG = _.u.Promise;
    var CG = function(a) {
        this.A = a
    };
    CG.prototype.send = function(a, b, c) {
        this.A.then(function(d) {
            d.send(a, b, c)
        })
    };
    CG.prototype.g = function(a, b) {
        return this.A.then(function(c) {
            return c.g(a, b)
        })
    };
    var DG = function(a) {
        this.data = a
    };
    var EG = function(a) {
        this.A = a
    };
    EG.prototype.send = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        FG(d.port1, b);
        this.A.postMessage(a, [d.port2].concat(c))
    };
    EG.prototype.g = function(a, b) {
        var c = this;
        return new BG(function(d) {
            c.send(a, d, b)
        })
    };
    var GG = function(a, b) {
            FG(a, b);
            return new EG(a)
        },
        FG = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new DG(c.data, GG(c.ports[0])))
            })
        };
    var $k = function(a) {
            var b = a.wb,
                c = void 0 === a.Cb ? "ZNWN1d" : a.Cb,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.qf ? void 0 : a.qf;
            return HG({
                destination: a.destination,
                ji: function() {
                    return b.contentWindow
                },
                Ll: IG(a.origin),
                Cb: c,
                onMessage: d,
                qf: e
            })
        },
        HG = function(a) {
            var b = a.destination,
                c = a.ji,
                d = a.Ll,
                e = void 0 === a.re ? void 0 : a.re,
                f = a.Cb,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.qf ? void 0 : a.qf,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new CG(new BG(function(l, m) {
                var n = function(p) {
                    p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(GG(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        IG = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var $g = function(a) {
            return "string" === typeof a
        },
        Fo = function(a) {
            return "boolean" === typeof a
        },
        Wg = function(a) {
            return !!a && ("object" === typeof a || "function" === typeof a)
        },
        Gt = Yg(),
        Zg = Yg();
    var JG = navigator,
        KG = function(a) {
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
        LG = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return KG(a.toLowerCase())
        },
        MG = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        NG = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        OG = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Fp = function() {
        this.data = [];
        this.g = -1
    };
    Fp.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.z(Number, "isInteger").call(Number, a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
    };
    Fp.prototype.get = function(a) {
        return !!this.data[a]
    };
    var Hp = function(a) {
        -1 === a.g && (a.g = a.data.reduce(function(b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.g
    };
    var PG = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Vb({
                    zc: null != c ? c : void 0,
                    Oe: d ? void 0 : 2
                })
            })
        },
        QG = {
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
        RG = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            var c;
            this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
            this.caller = new gG(a, "__uspapiLocator", function(d) {
                return "function" === typeof d.__uspapi
            }, ch);
            this.caller.D.set("getDataWithCallback", PG);
            this.caller.l.set("getDataWithCallback", QG)
        };
    _.T(RG, _.V);
    RG.prototype.A = function() {
        this.caller.ya();
        _.V.prototype.A.call(this)
    };
    var SG = function(a, b) {
        var c = {};
        if (hG(a.caller)) {
            var d = _.$x(function() {
                b(c)
            });
            jG(a.caller, "getDataWithCallback", {
                Vb: function(e) {
                    e.Oe || (c = e.zc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var hh = function(a) {
            this.g = a || {
                cookie: ""
            }
        },
        VG = function() {
            var a = TG;
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Cg: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            UG(a, "TESTCOOKIESENABLED");
            return !0
        };
    hh.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Io;
            d = c.sm || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Cg
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    hh.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Bx(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var UG = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Cg: 0,
            path: c,
            domain: d
        })
    };
    hh.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    hh.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Bx(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) UG(this, b[a])
    };
    var TG = new hh("undefined" == typeof document ? null : document);
    var WG = function(a, b) {
        this.g = a;
        this.options = b
    };
    var XG = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        YG = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        ZG = function(a, b) {
            (0, a.__gpp)("getSection", function(c) {
                b.Vb({
                    zc: null != c ? c : void 0,
                    Oe: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        $G = {
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
        aH = {
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
        bH = {
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
        cH = function(a, b) {
            var c = void 0 === b ? {} : b;
            b = c.timeoutMs;
            c = c.addListenerRemovalCallback;
            _.V.call(this);
            this.caller = new gG(a, "__gppLocator", function(d) {
                return "function" === typeof d.__gpp
            }, dh);
            this.caller.D.set("addEventListener", XG);
            this.caller.l.set("addEventListener", $G);
            this.caller.D.set("removeEventListener", YG);
            this.caller.l.set("removeEventListener", aH);
            this.caller.D.set("getDataWithCallback", ZG);
            this.caller.l.set("getDataWithCallback", bH);
            this.timeoutMs = null != b ? b : 500;
            this.addListenerRemovalCallback = c
        };
    _.T(cH, _.V);
    cH.prototype.A = function() {
        this.caller.ya();
        _.V.prototype.A.call(this)
    };
    cH.prototype.addEventListener = function(a) {
        var b = this,
            c = _.$x(function() {
                a(dH, !0)
            }),
            d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        jG(this.caller, "addEventListener", {
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
                        a(eH, !0);
                        return
                    }
                    a(fH, !0)
                }
            }
        })
    };
    cH.prototype.removeEventListener = function(a) {
        jG(this.caller, "removeEventListener", {
            listener: this.addListenerRemovalCallback ? function() {} : void 0,
            listenerId: a
        })
    };
    var gH = function(a) {
            if (!a) return !1;
            var b = Uf(a.split("~")[0]),
                c = Vf(b.slice(0, 6)),
                d = Vf(b.slice(6, 12)),
                e = new WB;
            var f = _.zl(e, 1, c);
            var g = _.zl(f, 2, d);
            for (var h = b.slice(12), k = Vf(h.slice(0, 12)), l = [], m = h.slice(12).replace(/0+$/, ""), n = 0; n < k; n++) {
                if (0 === m.length) throw Error("Found " + n + " of " + k + " sections [" + l + "] but reached end of input [" + h + "]");
                var p = 0 === Vf(m[0]);
                m = m.slice(1);
                var r = Yf(m, h),
                    v = 0 === l.length ? 0 : l[l.length - 1],
                    w = Wf(r) + v;
                m = m.slice(r.length);
                if (p) l.push(w);
                else {
                    for (var y = Yf(m, h), B = Wf(y), C = 0; C <= B; C++) l.push(w + C);
                    m = m.slice(y.length)
                }
            }
            if (0 < m.length) throw Error("Found " + k + " sections [" + l + "] but has remaining input [" + m + "], entire input [" + h + "]");
            var G = _.Ke(g, 3, l, Yc);
            var F = _.z(a, "includes").call(a, "~") ? a.split("~").slice(1) : [];
            for (var N = 0; N < ue(G, 3, Zc, 2).length; ++N) {
                var R = ue(G, 3, Zc, 2)[N],
                    M = F[N];
                switch (R) {
                    case 8:
                        if (0 === M.length) throw Error("Cannot decode empty USCA section string.");
                        var Z = M.split(".");
                        if (2 < Z.length) throw Error("Expected at most 1 sub-section but got " + (Z.length - 1) + " when decoding " + M + ".");
                        var fa = void 0,
                            qa = void 0,
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
                            tg = Z[0];
                        if (0 === tg.length) throw Error("Cannot decode empty core segment string.");
                        var Rc = Xf(tg, dC),
                            Nd = Vf(Rc.slice(0, 6));
                        Rc = Rc.slice(6);
                        if (1 !== Nd) throw Error("Unable to decode unsupported USCA Section specification version " + Nd + " - only version 1 is supported.");
                        for (var Od = 0, bb = [], Pb = 0; Pb < cC.length; Pb++) {
                            var rf = cC[Pb];
                            bb.push(Vf(Rc.slice(Od, Od + rf)));
                            Od += rf
                        }
                        var ye = new ZB;
                        sg = _.zl(ye, 1, Nd);
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
                        Xa = _.ii(Qc, 7, fb);
                        var Ih = new XB,
                            Pd = bb.shift();
                        Na = _.K(Ih, 1, Pd);
                        var Jh = bb.shift();
                        Ca = _.K(Na, 2, Jh);
                        wa = _.ii(Xa, 8, Ca);
                        var md = bb.shift();
                        Pa = _.K(wa, 9, md);
                        var Kh = bb.shift();
                        ea = _.K(Pa, 10, Kh);
                        var tf = bb.shift();
                        qa = _.K(ea, 11, tf);
                        var Fc = bb.shift();
                        var uf = fa = _.K(qa, 12, Fc);
                        if (1 === Z.length) var vf = bC(uf);
                        else {
                            var Sc = bC(uf),
                                yg = void 0,
                                zg = void 0,
                                Ag = void 0,
                                wf = Z[1];
                            if (0 === wf.length) throw Error("Cannot decode empty GPC segment string.");
                            var Tc = Xf(wf, 3),
                                xf = Vf(Tc.slice(0, 2));
                            if (0 > xf || 1 < xf) throw Error("Attempting to decode unknown GPC segment subsection type " + xf + ".");
                            Ag = xf + 1;
                            var Lh = Vf(Tc.charAt(2)),
                                Ae = new $B;
                            zg = _.K(Ae, 2, Ag);
                            yg = _.yl(zg, 1, !!Lh);
                            vf = _.ii(Sc, 2, yg)
                        }
                        var nd = _.Am(vf, ZB, 1);
                        if (1 === _.jg(nd, 5, 0) || 1 === _.jg(nd, 6, 0)) return !0;
                        break;
                    case 10:
                        if (0 === M.length) throw Error("Cannot decode empty USCO section string.");
                        var od = M.split(".");
                        if (2 < od.length) throw Error("Expected at most 2 segments but got " + od.length + " when decoding " + M + ".");
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
                        var pd = Xf(Fg, kC),
                            De = Vf(pd.slice(0, 6));
                        pd = pd.slice(6);
                        if (1 !== De) throw Error("Unable to decode unsupported USCO Section specification version " + De + " - only version 1 is supported.");
                        for (var Ee = 0, Db = [], Lg = 0; Lg < jC.length; Lg++) {
                            var Pj = jC[Lg];
                            Db.push(Vf(pd.slice(Ee, Ee + Pj)));
                            Ee += Pj
                        }
                        var Qj = new fC;
                        Eg = _.zl(Qj, 1, De);
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
                        Mh = _.ii(Ph, 7, Nh);
                        var IU = Db.shift();
                        zf = _.K(Mh, 8, IU);
                        var JU = Db.shift();
                        Bg = _.K(zf, 9, JU);
                        var KU = Db.shift();
                        yf = _.K(Bg, 10, KU);
                        var LU = Db.shift();
                        var RE = Qb = _.K(yf, 11, LU);
                        if (1 === od.length) var SE = iC(RE);
                        else {
                            var MU = iC(RE),
                                TE = void 0,
                                UE = void 0,
                                VE = void 0,
                                WE = od[1];
                            if (0 === WE.length) throw Error("Cannot decode empty GPC segment string.");
                            var XE = Xf(WE, 3),
                                vn = Vf(XE.slice(0, 2));
                            if (0 > vn || 1 < vn) throw Error("Attempting to decode unknown GPC segment subsection type " + vn + ".");
                            VE = vn + 1;
                            var NU = Vf(XE.charAt(2)),
                                OU = new gC;
                            UE = _.K(OU, 2, VE);
                            TE = _.yl(UE, 1, !!NU);
                            SE = _.ii(MU, 2, TE)
                        }
                        var YE = _.Am(SE, fC, 1);
                        if (1 === _.jg(YE, 5, 0) || 1 === _.jg(YE, 6, 0)) return !0;
                        break;
                    case 12:
                        if (0 === M.length) throw Error("Cannot decode empty usct section string.");
                        var Sj = M.split(".");
                        if (2 < Sj.length) throw Error("Expected at most 2 segments but got " + Sj.length + " when decoding " + M + ".");
                        var PU = void 0,
                            ZE = void 0,
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
                            tF = Sj[0];
                        if (0 === tF.length) throw Error("Cannot decode empty core segment string.");
                        var wn = Xf(tF, sC),
                            Ot = Vf(wn.slice(0, 6));
                        wn = wn.slice(6);
                        if (1 !== Ot) throw Error("Unable to decode unsupported USCT Section specification version " + Ot + " - only version 1 is supported.");
                        for (var Pt = 0, Eb = [], Qt = 0; Qt < rC.length; Qt++) {
                            var uF = rC[Qt];
                            Eb.push(Vf(wn.slice(Pt, Pt + uF)));
                            Pt += uF
                        }
                        var QU = new nC;
                        sF = _.zl(QU, 1, Ot);
                        var RU = Eb.shift();
                        rF = _.K(sF, 2, RU);
                        var SU = Eb.shift();
                        qF = _.K(rF, 3, SU);
                        var TU = Eb.shift();
                        pF = _.K(qF, 4, TU);
                        var UU = Eb.shift();
                        oF = _.K(pF, 5, UU);
                        var VU = Eb.shift();
                        nF = _.K(oF, 6, VU);
                        var WU = new mC,
                            XU = Eb.shift();
                        mF = _.K(WU, 1, XU);
                        var YU = Eb.shift();
                        lF = _.K(mF, 2, YU);
                        var ZU = Eb.shift();
                        kF = _.K(lF, 3, ZU);
                        var $U = Eb.shift();
                        jF = _.K(kF, 4, $U);
                        var aV = Eb.shift();
                        iF = _.K(jF, 5, aV);
                        var bV = Eb.shift();
                        hF = _.K(iF, 6, bV);
                        var cV = Eb.shift();
                        gF = _.K(hF, 7, cV);
                        var dV = Eb.shift();
                        fF = _.K(gF, 8, dV);
                        eF = _.ii(nF, 7, fF);
                        var eV = new lC,
                            fV = Eb.shift();
                        dF = _.K(eV, 1, fV);
                        var gV = Eb.shift();
                        cF = _.K(dF, 2, gV);
                        var hV = Eb.shift();
                        bF = _.K(cF, 3, hV);
                        aF = _.ii(eF, 8, bF);
                        var iV = Eb.shift();
                        $E = _.K(aF, 9, iV);
                        var jV = Eb.shift();
                        ZE = _.K($E, 10, jV);
                        var kV = Eb.shift();
                        var vF = PU = _.K(ZE, 11, kV);
                        if (1 === Sj.length) var wF = qC(vF);
                        else {
                            var lV = qC(vF),
                                xF = void 0,
                                yF = void 0,
                                zF = void 0,
                                AF = Sj[1];
                            if (0 === AF.length) throw Error("Cannot decode empty GPC segment string.");
                            var BF = Xf(AF, 3),
                                xn = Vf(BF.slice(0, 2));
                            if (0 > xn || 1 < xn) throw Error("Attempting to decode unknown GPC segment subsection type " + xn + ".");
                            zF = xn + 1;
                            var mV = Vf(BF.charAt(2)),
                                nV = new oC;
                            yF = _.K(nV, 2, zF);
                            xF = _.yl(yF, 1, !!mV);
                            wF = _.ii(lV, 2, xF)
                        }
                        var CF = _.Am(wF, nC, 1);
                        if (1 === _.jg(CF, 5, 0) || 1 === _.jg(CF, 6, 0)) return !0;
                        break;
                    case 9:
                        if (0 === M.length) throw Error("Cannot decode empty USVA section string.");
                        var yn = Xf(M, wC),
                            Rt = Vf(yn.slice(0, 6));
                        yn = yn.slice(6);
                        if (1 !== Rt) throw Error("Unable to decode unsupported USVA Section specification version " + Rt + " - only version 1 is supported.");
                        for (var St = 0, Tb = [], Tt = 0; Tt < vC.length; Tt++) {
                            var DF = vC[Tt];
                            Tb.push(Vf(yn.slice(St, St + DF)));
                            St += DF
                        }
                        var oV = Rt,
                            pV = new uC,
                            qV = _.zl(pV, 1, oV),
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
                        var SV = _.ii(AV, 7, RV),
                            TV = Tb.shift(),
                            UV = _.K(SV, 8, TV),
                            VV = Tb.shift(),
                            WV = _.K(UV, 9, VV),
                            XV = Tb.shift(),
                            YV = _.K(WV, 10, XV),
                            ZV = Tb.shift(),
                            EF = _.K(YV, 11, ZV);
                        if (1 === _.jg(EF, 5, 0) || 1 === _.jg(EF, 6, 0)) return !0
                }
            }
            return !1
        },
        fH = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        dH = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        eH = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };
    var Bo = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, Bo.prototype)
    };
    _.T(Bo, Error);
    Bo.prototype.name = "PublisherInputError";
    var hH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, hH.prototype)
    };
    _.T(hH, Error);
    hH.prototype.name = "ServerError";
    var iH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, iH.prototype)
    };
    _.T(iH, Error);
    iH.prototype.name = "NetworkError";
    var kh = function() {};
    kh.prototype.g = function() {};
    kh.prototype.l = function() {};
    kh.prototype.A = function() {
        return []
    };
    kh.prototype.j = function() {
        return []
    };
    var wh = function(a, b) {
        a.g = jh(1, b, function() {});
        a.A = function(c, d) {
            return jh(2, b, function() {
                return []
            })(c, 2, d)
        };
        a.j = function() {
            return jh(3, b, function() {
                return []
            })(2)
        };
        a.l = function(c) {
            jh(16, b, function() {})(c, 2)
        }
    };
    var uh = function() {
            this.g = function() {}
        },
        yh = function(a, b) {
            a.g = jh(14, b, function() {})
        };
    var Gm = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Rm(b.innerWidth, b.innerHeight)).round() : _.UA(b || window).round()
            } catch (d) {
                return new _.Rm(-12245933, -12245933)
            }
        },
        jH = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        cv = function(a, b) {
            b = void 0 === b ? _.t : b;
            a = a.scrollingElement || jH(a);
            return new _.Nm(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        an = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var kH = function(a) {
        this.F = _.A(a)
    };
    _.T(kH, _.D);
    kH.prototype.ri = function() {
        return _.Ii(this, 1)
    };
    kH.prototype.pi = function() {
        return _.Ii(this, 2)
    };
    var fh = function(a) {
            return _.Q(a, 5)
        },
        lH = function(a, b) {
            Zh(a, 13, b)
        },
        mH = function(a, b) {
            Zh(a, 12, b)
        },
        nH = function(a, b) {
            return _.Ke(a, 10, b, _.fd)
        },
        oH = function(a, b) {
            return ri(a, 11, b)
        };
    kH.prototype.mi = function() {
        return _.Ii(this, 11)
    };
    kH.da = [10];
    var qH, rH, sH;
    _.pH = function(a) {
        this.g = a;
        this.A = 0
    };
    qH = function(a, b) {
        if (0 === a.A) {
            if (_.Qn(a, "__gads", b)) b = !0;
            else {
                var c = a.g;
                fh(b) && "null" !== c.origin && (new hh(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === ih("GoogleAdServingTest", b, a.g)) {
                    var d = a.g;
                    fh(b) && "null" !== d.origin && UG(new hh(d.document), "GoogleAdServingTest")
                }
                b = c
            }
            a.A = b ? 2 : 1
        }
        return 2 === a.A
    };
    _.Qn = function(a, b, c) {
        return c ? ih(b, c, a.g) : null
    };
    rH = function(a, b, c, d) {
        if (d) {
            var e = _.Kg(c, 2) - Date.now() / 1E3;
            e = {
                Cg: Math.max(e, 0),
                path: _.I(c, 3),
                domain: _.I(c, 4),
                sm: !1
            };
            c = c.getValue();
            a = a.g;
            fh(d) && "null" !== a.origin && (new hh(a.document)).set(b, c, e)
        }
    };
    sH = function(a, b, c) {
        if (c && ih(b, c, a.g)) {
            var d = a.g.location.hostname;
            if ("localhost" === d) d = ["localhost"];
            else if (d = d.split("."), 2 > d.length) d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = _.x(d);
            for (var g = d.next(); !g.done; g = d.next()) e = b, f = a.g, g = g.value, fh(c) && "null" !== f.origin && UG(new hh(f.document), e, "/", g)
        }
    };
    var tH = {},
        uH = (tH[3] = gb(nx(new mx(kx, "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), tH);
    ({})[3] = gb(nx(new mx(kx, "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var vH = function(a) {
            this.g = a;
            this.A = LA()
        },
        wH = function(a) {
            var b = {};
            _.hx(a, function(c) {
                b[c.g] = c.A
            });
            return b
        };
    _.xH = _.Bw(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var yH = function(a, b, c, d, e, f) {
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
    _.T(yH, _.V);
    yH.prototype.C = function(a) {
        if (!("*" !== this.l && a.origin !== this.l || !this.Zd && a.source != this.j)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ja(b) && (a = b.i, b.c === this.Cb && a != this.D)) {
                if (2 !== this.status) try {
                    this.status = 2, zH(this), this.g && (this.g(), this.g = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ja(b)) && this.I.hasOwnProperty(a)) this.I[a](b)
            }
        }
    };
    var zH = function(a) {
        var b = {};
        b.c = a.Cb;
        b.i = a.D;
        a.U && (b.e = a.U);
        a.j.postMessage(JSON.stringify(b), a.l)
    };
    yH.prototype.o = function() {
        if (1 === this.status) {
            try {
                this.j.postMessage && zH(this)
            } catch (a) {}
            window.setTimeout((0, _.ex)(this.o, this), 50)
        }
    };
    yH.prototype.connect = function(a) {
        a && (this.g = a);
        _.rb(window, "message", this.K);
        this.H && this.o()
    };
    var AH = function(a, b, c) {
        a.I[b] = c
    };
    yH.prototype.send = function(a, b) {
        var c = {};
        c.c = this.Cb;
        c.i = this.D;
        c.s = a;
        c.p = b;
        try {
            this.j.postMessage(JSON.stringify(c), this.l)
        } catch (d) {}
    };
    yH.prototype.A = function() {
        this.status = 3;
        _.dg(window, "message", this.K);
        _.V.prototype.A.call(this)
    };
    var BH = new _.u.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        CH = new _.u.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var DH = function(a) {
        this.F = _.A(a)
    };
    _.T(DH, _.D);
    var EH = Lf(DH);
    var FH = function(a) {
        this.F = _.A(a)
    };
    _.T(FH, _.D);
    var GH = function(a) {
        this.F = _.A(a)
    };
    _.T(GH, _.D);
    var HH, IH, JH, KH;
    _.Wr = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    HH = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    IH = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    JH = function(a, b) {
        if (3 == _.Wr(b)) return !1;
        a();
        return !0
    };
    KH = function(a, b) {
        var c = !0;
        c = void 0 === c ? !1 : c;
        if (!JH(a, b))
            if (c) {
                var d = function() {
                    _.dg(b, "prerenderingchange", d);
                    a()
                };
                _.rb(b, "prerenderingchange", d)
            } else {
                var e = !1,
                    f = HH(b),
                    g = function() {
                        !e && JH(a, b) && (e = !0, _.dg(b, f, g))
                    };
                f && _.rb(b, f, g)
            }
    };
    _.Ah = function() {
        var a = this;
        this.promise = new _.u.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    _.LH = function() {
        this.g = Math.random()
    };
    _.fj = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .001)) try {
            if (c instanceof _.HC) var f = c;
            else f = new _.HC, _.Jn(c, function(h, k) {
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
    var Ei = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        Ci = new _.u.Map;
    var MH = function(a) {
        this.F = _.A(a)
    };
    _.T(MH, _.D);
    var NH = function(a) {
        this.F = _.A(a)
    };
    _.T(NH, _.D);
    var OH = function(a, b) {
        return _.Ke(a, 1, b, _.ud)
    };
    NH.da = [1];
    var PH = function(a) {
        this.F = _.A(a)
    };
    _.T(PH, _.D);
    var QH = function(a, b) {
        return _.Ke(a, 1, b, $c)
    };
    PH.da = [1, 2];
    var RH = function(a) {
        this.F = _.A(a)
    };
    _.T(RH, _.D);
    var SH = function(a) {
        this.F = _.A(a)
    };
    _.T(SH, _.D);
    var TH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, TH.prototype);
        this.name = "InputError"
    };
    _.T(TH, Error);
    var UH = function() {
            this.jb = !1
        },
        VH = function() {
            UH.apply(this, arguments);
            this.yd = new _.Ah
        };
    _.T(VH, UH);
    var WH = function(a, b) {
        a.jb || (a.jb = !0, a.je = b, a.yd.resolve(b))
    };
    _.ww.Object.defineProperties(VH.prototype, {
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
    var eq = function() {
        VH.apply(this, arguments)
    };
    _.T(eq, VH);
    _.q = eq.prototype;
    _.q.G = function(a) {
        WH(this, a)
    };
    _.q.Ha = function(a) {
        WH(this, null != a ? a : null)
    };
    _.q.ba = function() {
        WH(this, null)
    };
    _.q.La = function(a) {
        var b = this;
        a.then(function(c) {
            WH(b, c)
        })
    };
    _.q.lb = function(a) {
        this.jb || (this.jb = !0, this.je = null, this.ie = a, this.yd.reject(a))
    };
    var XH = function() {
        VH.apply(this, arguments)
    };
    _.T(XH, VH);
    XH.prototype.G = function(a) {
        WH(this, a)
    };
    XH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void WH(b, c)
        })
    };
    XH.prototype.lb = function(a) {
        this.jb || (this.jb = !0, this.ie = a, this.yd.reject(a))
    };
    var YH = function() {
        XH.apply(this, arguments)
    };
    _.T(YH, XH);
    YH.prototype.Ha = function(a) {
        WH(this, null != a ? a : null)
    };
    YH.prototype.ba = function() {
        WH(this, null)
    };
    YH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.Ha(c)
        })
    };
    var ZH = function(a) {
        this.jb = !1;
        this.bc = a
    };
    _.T(ZH, UH);
    ZH.prototype.Tc = function() {
        return this.bc.jb
    };
    ZH.prototype.qg = function() {
        return null != this.bc.je
    };
    _.ww.Object.defineProperties(ZH.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.bc.ie
            }
        }
    });
    var $H = function(a) {
        ZH.call(this, a);
        this.bc = a
    };
    _.T($H, ZH);
    _.ww.Object.defineProperties($H.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.bc.je
            }
        }
    });
    var aI = function(a) {
        ZH.call(this, a);
        this.bc = a
    };
    _.T(aI, ZH);
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
    var bI = function() {
        ZH.apply(this, arguments)
    };
    _.T(bI, ZH);
    _.ww.Object.defineProperties(bI.prototype, {
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
        VH.apply(this, arguments)
    };
    _.T(Xr, VH);
    Xr.prototype.notify = function() {
        WH(this, null)
    };
    var cI = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        dI = function(a, b) {
            b = void 0 === b ? !1 : b;
            VH.call(this);
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
                c.jb || WH(c, d)
            }, function() {
                c.jb || WH(c, null)
            })
        };
    _.T(dI, VH);
    var eI = function() {
        _.V.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = []
    };
    _.T(eI, _.V);
    var fI = function(a, b, c) {
        a.j.push({
            Nd: void 0 === c ? !1 : c,
            Vh: b
        })
    };
    eI.prototype.A = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        _.V.prototype.A.call(this)
    };
    var gI = function(a, b, c) {
        _.V.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.ia = c;
        this.started = !1;
        this.D = new eI;
        _.S(this, this.D)
    };
    _.T(gI, _.V);
    gI.prototype.start = function() {
        var a = this,
            b;
        return _.tb(function(c) {
            if (1 == c.g) {
                if (a.started) return c.return();
                a.started = !0;
                c.l = 2;
                return c.yield(Li(a.D.j, a.timeoutMs), 4)
            }
            if (2 != c.g) {
                if (!a.M) {
                    for (var d = 0, e = _.x(a.D.l), f = e.next(); !f.done; f = e.next()) {
                        if (!f.value.qg()) throw Error("missing input: " + a.id + "/" + d);
                        ++d
                    }
                    a.g()
                }
                c.g = 0;
                c.l = 0
            } else {
                b = vb(c);
                if (a.M) return c.return();
                b instanceof TH ? a.K(b) : b instanceof Error && (a.ia ? a.ia(a.id, b) : a.I(b), a.l(b));
                c.g = 0
            }
        })
    };
    var W = function(a, b) {
            b = void 0 === b ? new eq : b;
            a.D.g.push(b);
            return b
        },
        hI = function(a) {
            var b = void 0 === b ? new YH : b;
            a.D.g.push(b);
            return b
        },
        iI = function(a, b) {
            b = void 0 === b ? new Xr : b;
            a.D.g.push(b);
            return b
        },
        X = function(a, b) {
            fI(a.D, b);
            b = new $H(b);
            a.D.l.push(b);
            return b
        },
        jI = function(a, b) {
            fI(a.D, b);
            return new aI(b)
        },
        kI = function(a, b) {
            fI(a.D, b, !0);
            return new aI(b)
        },
        lI = function(a, b) {
            fI(a.D, b)
        },
        mI = function(a, b) {
            b = new dI(b);
            fI(a.D, b);
            b = new $H(b);
            a.D.l.push(b);
            return b
        };
    gI.prototype.K = function() {};
    gI.prototype.l = function(a) {
        if (!this.ia && this.D.g.length) {
            a = new TH(a.message);
            for (var b = _.x(this.D.g), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.Tc) {
                    var d = a;
                    c.jb = !0;
                    c.ie = d;
                    c.yd.reject(d)
                }
        }
    };
    var nI = function(a, b, c, d, e, f) {
        gI.call(this, a, e, f);
        this.f = b;
        this.C = d;
        a = {};
        c = _.x(_.z(Object, "entries").call(Object, c));
        for (b = c.next(); !b.done; b = c.next()) d = _.x(b.value), b = d.next().value, (d = d.next().value) && (a[b] = jI(this, d));
        this.o = a
    };
    _.T(nI, gI);
    nI.prototype.g = function() {
        for (var a = this.f, b = {}, c = _.x(_.z(Object, "entries").call(Object, this.o)), d = c.next(); !d.done; d = c.next()) {
            var e = _.x(d.value);
            d = e.next().value;
            e = e.next().value;
            b[d] = e.value
        }
        a = a.call(this, b, this.C);
        this.j(a)
    };
    nI.prototype.I = function() {};
    var Yq = function(a, b, c, d, e, f) {
        nI.call(this, a, b, c, d, e, f);
        this.output = W(this, new eq)
    };
    _.T(Yq, nI);
    Yq.prototype.j = function(a) {
        this.output.La(a)
    };
    var oI = function(a, b, c, d, e, f, g) {
        nI.call(this, a, b, c, d, f, g);
        this.finished = new Xr;
        a = _.z(Object, "keys").call(Object, e);
        a = _.x(a);
        for (b = a.next(); !b.done; b = a.next()) this[b.value] = W(this)
    };
    _.T(oI, nI);
    oI.prototype.j = function(a) {
        a = _.x(_.z(Object, "entries").call(Object, a));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = _.x(b.value);
            b = c.next().value;
            c = c.next().value;
            WH(this[b], c)
        }
        this.finished.notify()
    };
    var pI = function(a) {
        this.g = void 0 === a ? function() {} : a
    };
    var sk = function(a) {
        a = void 0 === a ? new pI : a;
        _.V.call(this);
        this.C = a;
        this.D = [];
        this.I = [];
        this.H = {};
        this.l = [];
        this.j = new _.Ah;
        this.g = {}
    };
    _.T(sk, _.V);
    var J = function(a, b) {
            _.S(a, b);
            a.D.push(b);
            return b
        },
        Mk = function(a, b) {
            b = _.x(b);
            for (var c = b.next(); !c.done; c = b.next()) J(a, c.value)
        },
        qI = function(a, b, c, d, e, f) {
            b = new oI(b, c, d, e, f, void 0, a.C.g);
            return J(a, b)
        },
        ru = function(a, b) {
            a.I.push(b);
            _.S(a, b)
        },
        Bk = function(a) {
            var b, c, d, e, f, g, h, k, l, m, n, p;
            return _.tb(function(r) {
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
                        for (f = e.next(); !f.done; f = e.next()) g = f.value, Bk(g);
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
    sk.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.D.length = 0;
        this.I.length = 0;
        this.l.length = 0
    };
    var rI = function(a) {
        this.F = _.A(a)
    };
    _.T(rI, _.D);
    rI.da = [1];
    var sI = [0, pz, Xz];
    var tI = function(a) {
        this.F = _.A(a)
    };
    _.T(tI, _.D);
    tI.da = [1, 2];
    tI.prototype.g = Kf([0, pz, Xz, pz, sI]);
    _.zq = 728 * 1.38;
    var vI, uI;
    vI = function() {
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
        this.floatingAdsStacking = new uI;
        this.sideRailProcessedFixedElements = new _.u.Set;
        this.sideRailAvailableSpace = new _.u.Map;
        this.sideRailPlasParam = new _.u.Map;
        this.A = [];
        this.g = null
    };
    _.Ej = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.u.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.u.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.u.Map)) : a.google_reactive_ads_global_state = new vI;
        return a.google_reactive_ads_global_state
    };
    uI = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var zI, BI, xI;
    _.wI = function(a) {
        this.g = _.Ej(a).floatingAdsStacking
    };
    _.yI = function(a, b) {
        return new xI(a, b)
    };
    zI = function(a) {
        a = _.hB(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    _.AI = function(a, b) {
        a.g.maxZIndexListeners.push(b);
        b(zI(a))
    };
    BI = function(a) {
        var b = zI(a);
        _.hx(a.g.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    xI = function(a, b) {
        this.A = a;
        this.l = b;
        this.g = null
    };
    _.CI = function(a) {
        if (null == a.g) {
            var b = a.A,
                c = a.l,
                d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            BI(b);
            a.g = d
        }
    };
    _.DI = function(a) {
        if (null != a.g) {
            var b = a.A;
            delete b.g.maxZIndexRestrictions[a.g];
            BI(b);
            a.g = null
        }
    };
    var aj, EI;
    _.dj = function(a, b) {
        b = void 0 === b ? {} : b;
        this.pa = a;
        this.Fa = b
    };
    _.FI = function(a, b) {
        var c = Yi(a.pa.document, b);
        if (c) {
            var d;
            if (!(d = EI(a, c, b))) a: {
                d = a.pa.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    var e = EI(a, c, b);
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
    aj = function(a, b) {
        b = _.x(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = _.FI(a, c.value)) return c;
        return null
    };
    EI = function(a, b, c) {
        if ("fixed" !== NB(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= _.Pm(_.SB, b).width && 1 >= _.Pm(_.SB, b).height || a.Fa.Nk && !a.Fa.Nk(b) ? !0 : !1;
        a.Fa.di && a.Fa.di(b, c, d);
        return d ? null : b
    };
    var $i = 90 * 1.38;
    var GI, HI, II;
    GI = _.Bw(["* { pointer-events: none; }"]);
    HI = function(a, b) {
        var c = _.cg("STYLE", a);
        c.textContent = _.Mx(new _.Lx(GI[0], Kx));
        null == a || a.head.appendChild(c);
        setTimeout(function() {
            null == a || a.head.removeChild(c)
        }, b)
    };
    _.JI = function(a, b, c) {
        if (!a.body) return null;
        var d = new II;
        d.apply(a, b);
        return function() {
            var e = c || 0;
            0 < e && HI(b.document, e);
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
    II = function() {
        this.g = this.M = this.j = this.l = null;
        this.A = 0
    };
    II.prototype.apply = function(a, b) {
        this.l = a.body.style.overflow;
        this.j = a.body.style.position;
        this.M = a.body.style.top;
        this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.A = _.Vi(b);
        _.KB(a.body, "top", -this.A + "px")
    };
    var rr = function(a, b) {
        this.g = a;
        this.A = void 0 === b ? 0 : b
    };
    rr.prototype.send = function(a, b) {
        var c = a.wm,
            d = this.A++;
        b = _.zl(b, 1, d);
        c.call(a, b)
    };
    _.ww.Object.defineProperties(rr.prototype, {
        Zf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g()
            }
        }
    });
    var wq;
    wq = function(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            var b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (c) {
            return !1
        }
    };
    _.KI = function(a, b) {
        return 0 >= b || null == a || !wq(a) ? null : uj(a, b)
    };
    var Nj = ["auto", "inherit", "100%"],
        Oj = Nj.concat(["none"]);
    var LI = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var MI = function(a, b, c, d, e, f) {
            this.l = _.EB(a);
            this.A = _.EB(b);
            this.j = c;
            this.g = _.EB(d);
            this.M = e;
            this.D = f
        },
        NI = function(a) {
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
        OI = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.DB(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = PB(a);
            d = _.Pm(_.SB, a);
            var e = new FB(c.x, c.y, d.width, d.height);
            c = GB(e);
            d = String(NB(a, "zIndex"));
            var f = new _.DB(0, Infinity, Infinity, 0);
            for (var g = lg(a), h = g.g.body, k = g.g.documentElement, l = VA(g.g); a = OB(a);)
                if (!(_.gy && 0 == a.clientWidth || jy && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != NB(a, "overflow")) {
                    var m = PB(a),
                        n = new _.Nm(a.clientLeft, a.clientTop);
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
            l && !(new _.Rm(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.DB(0, 0, 0, 0);
            if (h = f)(e = HB(e, f)) ? (k = GB(f), m = GB(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.DB(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new MI(b, c, d, l, a, g)
        };
    var PI = function(a) {
        this.M = a;
        this.j = null;
        this.C = this.status = 0;
        this.A = null;
        this.Cb = "sfchannel" + a
    };
    PI.prototype.xg = function() {
        return 2 == this.C
    };
    var QI = function(a) {
        this.g = a
    };
    QI.prototype.getValue = function(a, b) {
        return null == this.g[a] || null == this.g[a][b] ? null : this.g[a][b]
    };
    var RI = function(a, b) {
        this.Qe = a;
        this.Re = b;
        this.A = this.g = !1
    };
    var SI = function(a, b, c, d, e, f, g, h) {
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
    var TI = function(a, b) {
        this.A = a;
        this.U = b
    };
    TI.prototype.g = function(a) {
        this.U && a && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var UI = function(a, b, c) {
        TI.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.T(UI, TI);
    UI.prototype.g = function() {
        return TI.prototype.g.call(this, {
            uid: this.A,
            version: this.version
        })
    };
    var VI = function(a, b, c, d) {
        TI.call(this, a, void 0 === d ? "" : d);
        this.j = b;
        this.l = c
    };
    _.T(VI, TI);
    VI.prototype.g = function() {
        return TI.prototype.g.call(this, {
            uid: this.A,
            initialWidth: this.j,
            initialHeight: this.l
        })
    };
    var WI = function(a, b, c) {
        TI.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.T(WI, TI);
    WI.prototype.g = function() {
        return TI.prototype.g.call(this, {
            uid: this.A,
            description: this.description
        })
    };
    var XI = function(a, b, c, d) {
        TI.call(this, a, void 0 === d ? "" : d);
        this.l = b;
        this.push = c
    };
    _.T(XI, TI);
    XI.prototype.g = function() {
        return TI.prototype.g.call(this, {
            uid: this.A,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        })
    };
    var YI = function(a, b) {
        TI.call(this, a, void 0 === b ? "" : b)
    };
    _.T(YI, TI);
    YI.prototype.g = function() {
        return TI.prototype.g.call(this, {
            uid: this.A
        })
    };
    var ZI = function(a, b, c) {
        TI.call(this, a, void 0 === c ? "" : c);
        this.j = b
    };
    _.T(ZI, TI);
    ZI.prototype.g = function() {
        var a = {
            uid: this.A,
            newGeometry: NI(this.j)
        };
        return TI.prototype.g.call(this, a)
    };
    var $I = function(a, b, c, d, e, f) {
        ZI.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.l = d;
        this.push = e
    };
    _.T($I, ZI);
    $I.prototype.g = function() {
        var a = {
            uid: this.A,
            success: this.success,
            newGeometry: NI(this.j),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        };
        this.U && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var aJ = function(a, b, c, d) {
        TI.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.T(aJ, TI);
    aJ.prototype.g = function() {
        return TI.prototype.g.call(this, {
            uid: this.A,
            width: this.width,
            height: this.height
        })
    };
    var bJ = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        ql(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var cJ, fJ, gJ, eJ;
    cJ = function() {
        this.g = []
    };
    _.dJ = function(a) {
        return a + "px"
    };
    fJ = function(a, b, c, d, e) {
        a.g.push(new eJ(b, c, d, e))
    };
    gJ = function(a) {
        for (var b = a.g.length - 1; 0 <= b; b--) {
            var c = a.g[b];
            c.A ? (c.l.style.removeProperty(c.g), c.l.style.setProperty(c.g, String(c.j), c.M)) : c.l.style[c.g] = c.j
        }
        a.g.length = 0
    };
    eJ = function(a, b, c, d) {
        this.l = a;
        this.g = (this.A = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.j = this.A ? a.style.getPropertyValue(this.g) : a.style[this.g];
        this.M = this.A ? a.style.getPropertyPriority(this.g) : void 0;
        this.A ? (a.style.removeProperty(this.g), a.style.setProperty(this.g, String(c), d)) : a.style[this.g] = String(c)
    };
    var hJ, iJ;
    hJ = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    iJ = function() {
        var a = window,
            b = _.$f(a);
        b && hJ({
            label: "2",
            type: 9,
            value: b
        }, a)
    };
    _.jJ = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = _.$f(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && hJ(_.z(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (_.$f() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                }), f)
            }
            return l
        }
    };
    var oJ = function(a) {
        PI.call(this, a.uniqueId);
        var b = this;
        this.I = a.V;
        this.o = 1 === a.size;
        this.P = new RI(a.permissions.Qe && !this.o, a.permissions.Re && !this.o);
        this.D = a.Ug;
        var c;
        this.Ma = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.xa = "file:" == c ? "*" : c + "//" + d;
        this.eb = !!a.Zd;
        this.W = a.kj ? "//" + a.kj + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ta = a.wb ? "*" : "https:" + this.W;
        this.ka = kJ(a);
        this.l = new cJ;
        lJ(this, a.Ug, a.size);
        this.j = this.ga = OI(a.Ug);
        this.J = a.rm || "1-0-40";
        var e;
        this.ra = null != (e = a.lk) ? e : "";
        mJ(this, a);
        this.Ca = _.jJ(412, function() {
            return nJ(b)
        }, a.ub);
        this.H = -1;
        this.K = 0;
        var f = _.jJ(415, function() {
            b.g && (b.g.name = "", a.Ti && a.Ti(), _.dg(b.g, "load", f))
        }, a.ub);
        _.rb(this.g, "load", f);
        this.tg = _.jJ(413, this.tg, a.ub);
        this.Zg = _.jJ(417, this.Zg, a.ub);
        this.fh = _.jJ(419, this.fh, a.ub);
        this.kg = _.jJ(411, this.kg, a.ub);
        this.Vf = _.jJ(409, this.Vf, a.ub);
        this.ia = _.jJ(410, this.ia, a.ub);
        this.Ng = _.jJ(416, this.Ng, a.ub);
        this.A = new yH(this.Cb, this.g.contentWindow, this.ta, !1);
        AH(this.A, "init_done", (0, _.ex)(this.tg, this));
        AH(this.A, "register_done", (0, _.ex)(this.Zg, this));
        AH(this.A, "report_error", (0, _.ex)(this.fh, this));
        AH(this.A, "expand_request", (0, _.ex)(this.kg, this));
        AH(this.A, "collapse_request", (0, _.ex)(this.Vf, this));
        AH(this.A, "creative_geometry_update", (0, _.ex)(this.ia, this));
        this.A.connect((0, _.ex)(this.Ng, this))
    };
    _.T(oJ, PI);
    var lJ = function(a, b, c) {
            a.o ? (b.style.width = _.RB("100%", !0), b.style.height = _.RB("auto", !0)) : (b.style.width = _.RB(c.width, !0), b.style.height = _.RB(c.height, !0))
        },
        mJ = function(a, b) {
            var c = b.wb,
                d = b.content,
                e = b.Xd,
                f = b.size,
                g = void 0 === b.Yd ? "3rd party ad content" : b.Yd,
                h = b.Te;
            b = b.Nf;
            var k = {
                shared: {
                    sf_ver: a.J,
                    ck_on: VG() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.J + ";" + d.length + ";" + d;
            k = new SI(a.M, a.xa, a.ga, a.P, new QI(k), a.o, a.eb, a.Ma);
            var l = {};
            l.uid = k.g;
            l.hostPeerName = k.A;
            l.initialGeometry = NI(k.l);
            var m = k.permissions;
            m = JSON.stringify({
                expandByOverlay: m.Qe,
                expandByPush: m.Re,
                readCookie: m.g,
                writeCookie: m.A
            });
            l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.g), l.reportCreativeGeometry = k.j, l.isDifferentSourceWindow = k.Zd, l.goog_safeframe_hlt = wH(k.hostpageLibraryTokens), l);
            k.U && (l.sentinel = k.U);
            k = JSON.stringify(l);
            l = f.width;
            f = f.height;
            a.o && (f = l = 0);
            m = {};
            e = (m.id = e, m.title = g, m.name = d + k, m.scrolling = "no", m.marginWidth = "0", m.marginHeight = "0", m.width = String(l), m.height = String(f), m["data-is-safeframe"] = "true", m);
            void 0 === c && (g = a.ra, f = a.W, d = a.J, (k = g) && (k = "?" + k), f = (void 0 === f ? "//tpc.googlesyndication.com" : f) + ("/safeframe/" + d + "/html/container.html" + k), (d = bJ(_.WA(_.QA(a.D)))) && (f += (g ? "&" : "?") + "n=" + d), e.src = "https:" + f);
            null !== a.ka && (e.sandbox = a.ka);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.g = c, SA(a.g, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Ba(c, e), h = _.cg("IFRAME"), SA(h, c), a.g = h);
            a.o && (a.g.style.minWidth = "100%");
            a.D.appendChild(a.g)
        };
    _.q = oJ.prototype;
    _.q.Ng = function() {
        _.rb(window, "resize", this.Ca);
        _.rb(window, "scroll", this.Ca)
    };
    _.q.tg = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Wj(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new UI(b.uid, b.version, b.sentinel);
            if (this.M !== c.A || this.J !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.q.Zg = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Wj(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.M !== (new VI(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).A) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.q.fh = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Wj(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new WI(b.uid, b.description, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d;
            null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    _.q.kg = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.C) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Wj(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new XI(b.uid, new _.DB(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            if (!(0 <= c.l.top && 0 <= c.l.left && 0 <= c.l.bottom && 0 <= c.l.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.P.Re || !c.push && this.P.Qe) {
                var e = c.l,
                    f = c.push,
                    g = this.j = OI(this.g);
                if (e.top <= g.g.top && e.right <= g.g.right && e.bottom <= g.g.bottom && e.left <= g.g.left) {
                    if (!f)
                        for (var h = this.g.parentNode; h && h.style; h = h.parentNode) fJ(this.l, h, "overflowX", "visible", "important"), fJ(this.l, h, "overflowY", "visible", "important");
                    var k = GB(new FB(0, 0, this.j.A.getWidth(), this.j.A.getHeight()));
                    _.ja(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    fJ(this.l, this.D, "position", "relative");
                    fJ(this.l, this.g, "position", "absolute");
                    if (f) {
                        var l = this.l,
                            m = this.D,
                            n = k.getWidth();
                        fJ(l, m, "width", _.dJ(n));
                        var p = this.l,
                            r = this.D,
                            v = k.getHeight();
                        fJ(p, r, "height", _.dJ(v))
                    } else fJ(this.l, this.g, "zIndex", "10000");
                    var w = this.l,
                        y = this.g,
                        B = k.getWidth();
                    fJ(w, y, "width", _.dJ(B));
                    var C = this.l,
                        G = this.g,
                        F = k.getHeight();
                    fJ(C, G, "height", _.dJ(F));
                    fJ(this.l, this.g, "left", _.dJ(k.left));
                    fJ(this.l, this.g, "top", _.dJ(k.top));
                    this.C = 2;
                    this.j = OI(this.g);
                    d = !0
                } else d = !1
            }
            a = d;
            this.A.send("expand_response", (new $I(this.M, a, this.j, c.l, c.push)).g());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (R) {
            var N;
            null == (N = this.I) || N.error("Invalid EXPAND_REQUEST message. Reason: " + R.message)
        }
    };
    _.q.Vf = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (!this.xg()) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Wj(b.uid)) throw Error("Cannot parse JSON message");
            if (this.M !== (new YI(b.uid, b.sentinel)).A) throw Error("Wrong source container");
            gJ(this.l);
            this.C = 0;
            this.g && (this.j = OI(this.g));
            this.A.send("collapse_response", (new ZI(this.M, this.j)).g())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var nJ = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.K) {
            case 0:
                pJ(a);
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
    oJ.prototype.ia = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Wj(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new aJ(b.uid, b.width, b.height, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.o) d !== this.g.height && (this.g.height = d, nJ(this));
            else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    oJ.prototype.fa = function() {
        if (1 == this.status || 2 == this.status) switch (this.K) {
            case 1:
                this.K = 0;
                break;
            case 2:
                pJ(this), this.H = window.setTimeout((0, _.ex)(this.fa, this), 1E3), this.K = 1
        }
    };
    var pJ = function(a) {
            a.j = OI(a.g);
            a.A.send("geometry_update", (new ZI(a.M, a.j)).g())
        },
        kJ = function(a) {
            var b = null;
            a.mj && (b = a.mj);
            return null == b ? null : b.join(" ")
        },
        qJ = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        rJ = ["allow-top-navigation"],
        sJ = ["allow-same-origin"],
        tJ = oB([].concat(_.xi(qJ), _.xi(rJ)));
    oB([].concat(_.xi(qJ), _.xi(sJ)));
    oB([].concat(_.xi(qJ), _.xi(rJ), _.xi(sJ)));
    var uJ = _.Bw(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        vJ = {
            Al: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Ff) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Ff)) throw new RangeError("Invalid subdomain: " + a.Ff);
                return gb("https://" + a.Ff + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            Ko: function(a) {
                return _.hb(uJ, a)
            }
        };
    var wJ = function() {};
    wJ.g = function() {
        throw Error("Must be overridden");
    };
    var ak = function() {
        this.g = 0
    };
    _.T(ak, wJ);
    ak.Lc = void 0;
    ak.g = function() {
        return ak.Lc ? ak.Lc : ak.Lc = new ak
    };
    var xJ = function() {
            this.cache = {}
        },
        kk = function() {
            yJ || (yJ = new xJ);
            return yJ
        },
        lk = function(a) {
            var b = rd(_.fi(a, 3));
            if (!b) return 3;
            if (void 0 === hk(a, 2)) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    xJ.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            Yc: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            ck(6, a, null == (d = g) ? void 0 : d.message);
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
            ck(5, a, null == (f = g) ? void 0 : f.message);
            return {
                Yc: null,
                success: !1
            }
        }
    };
    xJ.prototype.set = function(a, b) {
        var c = hk(a, 1),
            d = "_GESPSK-" + c;
        jA(a);
        try {
            b.setItem(d, gl(a))
        } catch (f) {
            var e;
            ck(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var yJ = null;
    var zJ = function(a, b) {
        gI.call(this, a);
        this.id = a;
        this.C = b
    };
    _.T(zJ, gI);
    zJ.prototype.I = function(a) {
        this.C(this.id, a)
    };
    var uk = function(a, b, c, d) {
        zJ.call(this, 1041, d);
        this.j = b;
        this.H = X(this, a);
        c && (this.o = jI(this, c))
    };
    _.T(uk, zJ);
    uk.prototype.g = function() {
        var a = this.H.value,
            b, c, d = null != (c = this.j) ? c : null == (b = this.o) ? void 0 : b.value;
        d && kk().set(a, d) && _.Ii(a, 2) && ck(27, hk(a, 1))
    };
    var wk = function(a, b) {
        zJ.call(this, 1048, b);
        this.j = W(this);
        this.o = W(this);
        this.H = X(this, a)
    };
    _.T(wk, zJ);
    wk.prototype.g = function() {
        var a = this.H.value,
            b = function(c) {
                var d = {};
                ck(c, hk(a, 1), null, (d.tic = String(Math.round((Date.now() - rd(_.fi(a, 3))) / 6E4)), d))
            };
        switch (lk(a)) {
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
                ck(9, hk(a, 1));
                this.j.G(a);
                break;
            case 4:
                b(23), this.j.G(a)
        }
    };
    var AJ = function(a, b) {
        zJ.call(this, 1094, b);
        this.j = iI(this);
        this.o = X(this, a)
    };
    _.T(AJ, zJ);
    AJ.prototype.g = function() {
        var a = this.o.value;
        if (a) {
            if (void 0 !== a)
                for (var b = _.x(_.z(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, _.z(c, "startsWith").call(c, "_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            yJ = new xJ;
            this.j.notify()
        }
    };
    var Lk = function(a, b, c) {
        zJ.call(this, 1049, c);
        this.j = b;
        lI(this, a)
    };
    _.T(Lk, zJ);
    Lk.prototype.g = function() {
        for (var a = _.x(ek(this.j)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = kk().get(b, this.j).Yc;
            if (c) {
                var d = lk(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = kk(),
                        f = this.j;
                    c = hk(c, 1);
                    try {
                        f.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (g) {
                        ck(8, c, null == (d = g) ? void 0 : d.message)
                    }
                    ck(40, b)
                }
            }
        }
    };
    var tk = function(a, b, c) {
        zJ.call(this, 1027, c);
        this.Ie = a;
        this.H = b;
        this.j = W(this);
        this.o = W(this)
    };
    _.T(tk, zJ);
    tk.prototype.g = function() {
        var a = kk().get(this.Ie, this.H).Yc;
        a || (a = jA(iA(this.Ie)), this.o.G(a.lb(nk(100))));
        this.j.G(a)
    };
    var rk = {
        rh: !1
    };
    var Pk = function(a, b) {
        zJ.call(this, 1036, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(Pk, zJ);
    Pk.prototype.g = function() {
        var a = this.o.value;
        0 !== lk(a) && this.j.G(a)
    };
    var Ak = function(a, b, c) {
        zJ.call(this, 1046, c);
        this.output = iI(this);
        this.j = W(this);
        this.o = X(this, b);
        lI(this, a)
    };
    _.T(Ak, zJ);
    Ak.prototype.g = function() {
        this.j.G(this.o.value)
    };
    var xk = function(a, b, c) {
        zJ.call(this, 1047, c);
        this.collectorFunction = a;
        this.j = W(this);
        this.o = W(this);
        this.H = W(this);
        this.J = X(this, b)
    };
    _.T(xk, zJ);
    xk.prototype.g = function() {
        var a = this,
            b = this.J.value,
            c = hk(b, 1);
        ck(18, c);
        try {
            var d = _.Zf();
            this.collectorFunction().then(function(e) {
                ck(29, c, null, {
                    delta: String(_.Zf() - d)
                });
                a.j.G(ri(b, 2, e));
                a.H.Ha(e)
            }).catch(function(e) {
                ck(28, c, qk(e));
                a.o.G(b.lb(nk(106)))
            })
        } catch (e) {
            ck(1, c, qk(e)), this.o.G(b.lb(nk(107)))
        }
    };
    var vk = function(a, b) {
        zJ.call(this, 1028, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(vk, zJ);
    vk.prototype.g = function() {
        var a = this.o.value,
            b = hk(a, 1);
        null != rd(_.fi(a, 3)) || ck(35, b);
        this.j.G(a)
    };
    var yk = function(a, b, c, d, e) {
        zJ.call(this, 1050, e);
        this.J = c;
        this.H = d;
        this.j = W(this);
        this.o = X(this, a);
        this.P = jI(this, b)
    };
    _.T(yk, zJ);
    yk.prototype.g = function() {
        var a = this.o.value,
            b = hk(a, 1),
            c = this.P.value;
        if (null == c) ck(41, b), a.lb(nk(111)), this.j.G(a);
        else if ("string" !== typeof c) ck(21, b), this.j.G(a.lb(nk(113)));
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.H : this.J)) {
                var d = {};
                ck(12, b, null, (d.sl = String(c.length), d));
                b = a.lb(nk(108));
                _.mk(b, 2)
            } else c.length || ck(20, b), _.mk(a, 10);
            this.j.G(a)
        }
    };
    var zk = function(a) {
        zJ.call(this, 1046, a);
        this.output = iI(this)
    };
    _.T(zk, zJ);
    zk.prototype.g = function() {
        var a = this;
        dk().then(function() {
            a.output.notify()
        })
    };
    var BJ = function(a, b, c, d, e) {
        e = void 0 === e ? rk : e;
        zJ.call(this, 1059, d);
        this.P = b;
        this.J = c;
        this.o = e;
        this.j = W(this);
        this.W = X(this, a);
        this.H = jI(this, c)
    };
    _.T(BJ, zJ);
    BJ.prototype.g = function() {
        var a = this.H.value;
        if (a) {
            var b = this.W.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            ck(42, b, null, (c.ea = String(Number(this.P)), c));
            this.j.La(Ck(b, d, a, this.J, this.C, this.o))
        }
    };
    var CJ = function(a, b) {
        zJ.call(this, 1057, b);
        this.j = a;
        this.o = W(this);
        this.H = W(this)
    };
    _.T(CJ, zJ);
    CJ.prototype.g = function() {
        if (this.j)
            if ("object" !== typeof this.j) ck(46, "UNKNOWN_COLLECTOR_ID"), DJ(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.j.id,
                    b = this.j.networkCode;
                a && b && (delete this.j.id, ck(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, ck(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), DJ(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (ck(14, a), DJ(this, a, 105)) : (_.H = Rf(CD), _.z(_.H, "includes")).call(_.H, a) ? (ck(22, a), DJ(this, a, 104)) : this.H.G(this.j)
            }
        else ck(39, "UNKNOWN_COLLECTOR_ID"), DJ(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var DJ = function(a, b, c) {
        a.o.G(iA(b).lb(nk(c)))
    };
    var Jk = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? rk : e;
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
    Jk.prototype.push = function(a) {
        var b = this;
        this.l || this.K();
        var c = function(f, g) {
            return void EJ(b, f, g)
        };
        a = new CJ(a, c);
        var d = new uk(a.o, void 0, this.g, c);
        c = new BJ(a.H, this.l, this.g, c, this.I);
        var e = new sk;
        Mk(e, [a, d, c]);
        Bk(e);
        a = c.j.promise;
        this.D.push(a);
        d = _.x(this.M);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    Jk.prototype.addOnSignalResolveCallback = function(a) {
        this.M.push(a);
        for (var b = _.x(this.D), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    Jk.prototype.addErrorHandler = function(a) {
        this.j.push(a)
    };
    Jk.prototype.clearAllCache = function() {
        var a = this,
            b = this.aa.currentScript instanceof HTMLScriptElement ? this.aa.currentScript.src : "";
        if (1 === this.A) {
            var c = {};
            ck(49, "", null, (c.url = b, c))
        } else if (c = String(_.sh(null != b ? b : "")), (_.H = Rf(BD), _.z(_.H, "includes")).call(_.H, c)) c = {}, ck(48, "", null, (c.url = b, c));
        else {
            var d = new sk;
            c = new AJ(this.g, function(e, f) {
                return void EJ(a, e, f)
            });
            J(d, c);
            Bk(d);
            this.A = 1;
            setTimeout(function() {
                a.A = 0
            }, 1E3 * _.Pf(AD));
            d = {};
            ck(43, "", null, (d.url = b, d));
            return c.j.promise
        }
    };
    var EJ = function(a, b, c) {
            a = _.x(a.j);
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c)
        },
        Kk = function(a) {
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
    var Qk = function(a, b, c) {
        zJ.call(this, 1035, c);
        this.o = b;
        this.j = W(this);
        this.H = X(this, a)
    };
    _.T(Qk, zJ);
    Qk.prototype.g = function() {
        var a = this,
            b = this.H.value,
            c = hk(b, 1),
            d = this.o.toString(),
            e = {};
        ck(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        qb(f, this.o);
        var g = function() {
            var h = {};
            ck(31, c, null, (h.url = d, h));
            a.j.G(b.lb(nk(109)));
            _.dg(f, "error", g)
        };
        document.head.appendChild(f);
        _.rb(f, "error", g)
    };
    var Ok = new _.u.Set;
    var Sk = function(a, b) {
        try {
            var c = void 0 === _.Q(b, 6) ? !0 : _.Q(b, 6),
                d, e, f = Mf(_.jg(b, 2, 0)),
                g = _.I(b, 3);
            a: switch (_.jg(b, 4, 0)) {
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
                l = null != (e = null == (d = _.Am(b, tz, 5)) ? void 0 : _.I(d, 1)) ? e : "";
            k.ae = l;
            k.g = c;
            k.B = a;
            var m = k.build();
            yb(m)
        } catch (n) {}
    };
    var FJ = function(a) {
        this.F = _.A(a)
    };
    _.T(FJ, _.D);
    FJ.prototype.g = Kf([0, jz, -3, mz]);
    var GJ = [.05, .1, .2, .5],
        HJ = [0, .5, 1],
        IJ = function(a) {
            a = Fk(a);
            if (!a) return -1;
            try {
                var b = jH(a.document);
                var c = new _.Rm(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Rm(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        JJ = function(a, b) {
            return 0 >= a || 0 >= b ? [] : GJ.map(function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        LJ = function(a) {
            this.M = a.B;
            this.j = a.Wb;
            this.I = a.timer;
            this.l = null;
            this.g = a.ub;
            this.A = KJ(this);
            this.D = a.Gm || !1
        },
        MJ = function() {
            var a;
            return !!window.IntersectionObserver && vv(null == (a = window.performance) ? void 0 : a.now)
        };
    LJ.prototype.getSlotId = function() {
        return this.l
    };
    var OJ = function(a, b) {
            if (a.A) {
                if (null != a.l) {
                    try {
                        NJ(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.g && a.g(c)
                    }
                    a.A && a.A.unobserve(a.j)
                }
                a.l = b;
                a.A.observe(a.j)
            }
        },
        KJ = function(a) {
            if (!_.t.IntersectionObserver) return null;
            var b = a.j.offsetWidth * a.j.offsetHeight,
                c = IJ(a.M);
            b = [].concat(_.xi(HJ), _.xi(JJ(c, b)));
            la(b);
            return new _.t.IntersectionObserver(function(d) {
                try {
                    for (var e = IJ(a.M), f = _.x(d), g = f.next(); !g.done; g = f.next()) {
                        var h = g.value,
                            k = Math.round(h.boundingClientRect.width * h.boundingClientRect.height),
                            l = Math.round(h.intersectionRect.width * h.intersectionRect.height),
                            m = Math.round(h.time);
                        if (_.z(Number, "isSafeInteger").call(Number, k) && _.z(Number, "isSafeInteger").call(Number, l) && _.z(Number, "isSafeInteger").call(Number, e) && _.z(Number, "isSafeInteger").call(Number, m)) a.D && NJ(a, m, k, l, e, h.isIntersecting);
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
        NJ = function(a, b, c, d, e, f) {
            if (null == a.l) throw Error("Not Attached.");
            var g = new FJ;
            c = _.di(g, 1, c);
            d = _.di(c, 2, d);
            e = _.di(d, 3, e);
            b = _.di(e, 4, b);
            f = Zh(b, 5, f);
            f = Hb(f.g(), 4);
            GC(a.I, "1", 10, f, void 0, a.l)
        };
    var PJ = function(a, b) {
            this.g = a;
            this.A = b
        },
        QJ = function(a) {
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
    var el = function(a) {
        this.F = _.A(a)
    };
    _.T(el, _.D);
    var il = Lf(el),
        fl = [1, 3];
    var Sg = {
        qo: 0,
        mo: 1,
        no: 9,
        jo: 2,
        ko: 3,
        po: 5,
        oo: 7,
        lo: 10
    };
    var RJ = _.Bw(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Zk = _.hb(RJ);
    var cp = function(a) {
            var b = void 0 === b ? bk(_.t) : b;
            this.id = a;
            this.g = .001 > Math.random();
            this.ke = {
                pvsid: String(b)
            }
        },
        SJ = function(a) {
            a = Gl(a);
            var b;
            Ul.set(a, (null != (b = Ul.get(a)) ? b : 0) + 1)
        },
        Tl = function() {
            return [].concat(_.xi(_.z(Ul, "values").call(Ul))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        ep = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.ke[b] = c : delete a.ke[b])
        },
        gp = function(a) {
            var b = 1;
            b = void 0 === b ? null : b;
            if (TJ()) b = !0;
            else {
                var c = a.g;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && NC(window, UJ(a) || "", void 0, !0)
        },
        UJ = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Jn(a.ke, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        VJ = function(a) {
            var b = [].concat(_.xi(_.z(Ul, "keys").call(Ul)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? ep(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), ep(a, "nw_id", b.join()))
        },
        dp = function(a, b) {
            ep(a, "vrg", b.Ze);
            VJ(a);
            ep(a, "nslots", Tl().toString());
            b = mh();
            b.length && ep(a, "eid", b.join());
            ep(a, "pub_url", document.URL)
        },
        Ep = function(a, b, c) {
            c = void 0 === c ? .001 : c;
            if (void 0 === c || 0 > c || 1 < c) c = .001;
            Math.random() < c && (a = new cp(a), b(a), gp(a))
        },
        Ul = new _.u.Map,
        TJ = Hi(function() {
            return !!lB()
        });
    var Jl = function() {
        FC.call(this, _.E(Kl) || _.E(RF) ? 1 : 0, _.t);
        this.l = 0;
        var a = _.E(Kl) || _.E(RF);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.T(Jl, FC);
    _.WJ = function(a) {
        this.context = a
    };
    _.WJ.prototype.Gb = function(a, b) {
        return Nl(this.context, a, b)
    };
    _.WJ.prototype.Ba = function(a, b) {
        return Hl(this.context, a, b)
    };
    _.WJ.prototype.Fb = function(a, b) {
        Ll(this.context, a, b);
        return !1
    };
    _.WJ.prototype.zd = ba(4);
    var XJ = function() {
            this.id = "goog_" + MA++
        },
        YJ = function(a) {
            _.V.call(this);
            this.context = a;
            this.l = new _.u.Map
        };
    _.T(YJ, _.V);
    YJ.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.clear()
    };
    YJ.prototype.listen = function(a, b) {
        var c = this;
        if (this.M) return function() {};
        var d = "string" === typeof a ? a : a.id,
            e, f, g = null != (f = null == (e = this.l.get(d)) ? void 0 : e.add(b)) ? f : new _.u.Set([b]);
        this.l.set(d, g);
        return function() {
            return void ZJ(c, a, b)
        }
    };
    var $J = function(a) {
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
        ZJ = function(a, b, c) {
            var d;
            return !(null == (d = a.l.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        },
        ht = function(a, b, c, d) {
            var e, f, g, h, k, l, m, n;
            _.tb(function(p) {
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
                        Bg: void 0
                    }, m = l.next()) n.Bg = m.value, k.push(new _.u.Promise(function(r) {
                    return function(v) {
                        return _.tb(function(w) {
                            if (1 == w.g) return w.yield(0, 2);
                            Nl(a.context, c, function() {
                                a.l.has(e) && f.has(r.Bg) && (0, r.Bg)(h)
                            }, !0);
                            v();
                            w.g = 0
                        })
                    }
                }(n)));
                return p.yield(_.u.Promise.all(k), 0)
            })
        },
        aK = new XJ,
        bK = new XJ,
        jt = new XJ,
        cK = new XJ,
        kt = new XJ,
        dK = new XJ,
        eK = new XJ,
        hr = new XJ,
        Vu = new XJ,
        fK = new XJ;
    var gK = function() {
            this.data = void 0;
            this.status = 0;
            this.g = []
        },
        hK = function(a) {
            a.data = void 0;
            a.status = 1
        };
    var iK, mK, pK, Uu, qK, lK, kK, jK, Jq;
    iK = function() {
        this.g = new _.u.Map;
        this.D = 0;
        this.A = new _.u.Map;
        this.Mb = null;
        this.j = this.l = this.o = this.I = 0;
        this.Ue = null;
        this.K = new gK;
        this.M = new gK
    };
    mK = function(a, b) {
        a.g.get(b) || (a.g.set(b, {
            Sc: !0,
            Sg: "",
            Ld: "",
            hj: 0,
            Og: [],
            Qg: [],
            Hc: !1,
            zo: -1
        }), _.rp(b, function() {
            a.g.delete(b);
            jK(a, b)
        }), b.listen(bK, function(c) {
            c = c.detail;
            var d = a.g.get(b);
            d.Sg = hk(c, 33) || "";
            d.Hc = !0;
            kK(a, b, function() {
                return void(d.Sg = "")
            });
            lK(a, b, function() {
                return void(d.Hc = !1)
            })
        }))
    };
    _.Iq = function(a, b) {
        var c;
        return null == (c = a.g.get(b)) ? void 0 : c.Sc
    };
    _.nK = function(a, b) {
        if (a = a.g.get(b)) a.Sc = !1
    };
    _.oK = function(a, b) {
        if (a = a.g.get(b)) a.Sc = !0
    };
    pK = function(a, b) {
        if (!b.length) return [];
        var c = Gl(b[0].getAdUnitPath());
        b.every(function(g) {
            return Gl(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.x(a.g);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.x(e.value);
            e = f.next().value;
            (f = f.next().value.Sg) && Gl(e.getAdUnitPath()) === c && !_.z(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    Uu = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.g.get(b)) ? void 0 : c.Ld) ? d : ""
    };
    qK = function(a, b) {
        return (a = a.g.get(b)) ? a.hj - 1 : 0
    };
    lK = function(a, b, c) {
        (a = a.g.get(b)) && a.Og.push(c)
    };
    kK = function(a, b, c) {
        (a = a.g.get(b)) && a.Qg.push(c)
    };
    jK = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Qg.slice(), a.Qg.length = 0, a = _.x(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    Jq = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Og.slice(), a.Og.length = 0, a = _.x(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    iK.prototype.Hc = function(a) {
        var b, c;
        return null != (c = null == (b = this.g.get(a)) ? void 0 : b.Hc) ? c : !1
    };
    var rK = function(a, b, c) {
            if (a = a.g.get(b)) a.gj = c
        },
        sK = function(a, b) {
            if (a = a.g.get(b)) {
                var c;
                null == (c = a.gj) || c.ya();
                delete a.gj
            }
        };
    var Xl = new _.u.Map,
        Wl = new _.u.Map;
    var Zl = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    Zl.prototype.getMessageId = function() {
        return this.messageId
    };
    Zl.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var tK = O(2),
        uK = O(3),
        vK = O(4),
        wK = O(5),
        xK = O(6),
        yK = O(12),
        zK = O(14),
        AK = O(16),
        sm = O(19),
        BK = O(20),
        CK = O(23),
        DK = O(26),
        EK = O(28),
        FK = O(149),
        GK = O(30),
        HK = O(31),
        IK = O(34),
        JK = O(35),
        rn = O(36),
        Bt = O(38),
        KK = O(40),
        LK = O(48),
        MK = O(50),
        NK = O(60),
        OK = O(63),
        PK = O(64),
        QK = O(66),
        RK = O(68),
        SK = O(69),
        TK = O(70),
        UK = O(71),
        VK = O(78),
        WK = O(80),
        ao = O(82),
        tm = O(84),
        XK = O(85),
        YK = O(87),
        mm = O(88),
        ZK = O(92),
        $K = O(93),
        aL = O(99),
        vm = O(103),
        Zn = O(104),
        bL = O(105),
        Tn = O(106),
        Un = O(107),
        $n = O(108),
        cL = O(113),
        dL = O(114),
        eL = O(115),
        fL = O(117),
        gL = O(118),
        hL = O(120),
        iL = O(119),
        Kn = O(121),
        jL = O(122),
        kL = O(123),
        lL = O(126),
        mL = O(127),
        nL = O(144),
        Qr = O(129),
        Tr = O(132),
        oL = O(134),
        pL = O(135),
        qL = O(136),
        rL = O(137),
        sL = O(138),
        tL = O(139),
        uL = O(140),
        vL = O(143),
        wL = O(145),
        xL = O(147),
        yL = O(150),
        zL = O(164),
        AL = O(152),
        BL = O(153),
        CL = O(154),
        ds = O(155),
        DL = O(156),
        EL = O(157),
        FL = O(158),
        GL = O(159),
        HL = O(160),
        ov = O(161),
        Pv = O(162);
    var IL = function(a, b, c) {
        var d = this;
        this.addEventListener = L(a, 86, function(e, f) {
            if ("function" !== typeof f) return P(b, am("Service.addEventListener", [e, f])), d;
            var g = bm(e);
            if (!g) return P(b, $K(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = L(a, 904, function(e, f) {
            var g = bm(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : P(b, am("Service.removeEventListener", [e, f]))
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
    var cm = function(a, b, c) {
        IL.call(this, a, b, c);
        this.setRefreshUnfilledSlots = L(a, 59, function(d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = L(a, 69, function(d) {
            c.Sc && JL(c, KL(c, d))
        });
        this.refreshAllSlots = L(a, 60, function() {
            c.Sc && JL(c)
        });
        this.setVideoSession = L(a, 61, function(d, e, f) {
            c.I = e;
            c.C = f;
            "number" === typeof d && (e = gn().g, _.mk(e, 29, _.td(d)))
        });
        this.getDisplayAdsCorrelator = L(a, 62, function() {
            return String(Zy(gn().g, 26))
        });
        this.getVideoStreamCorrelator = L(a, 63, function() {
            var d = gn().g;
            d = vs(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = L(a, 64, function(d) {
            var e = _.z(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            return !!e && LL(c, e)
        });
        this.onImplementationLoaded = L(a, 65, function() {
            c.R.info(LK("GPT CompanionAds"))
        });
        this.slotRenderEnded = L(a, 67, function(d, e, f) {
            var g = _.z(c.g, "find").call(c.g, function(h) {
                return h.g === d
            });
            return g && ML(c, g, e, f)
        })
    };
    _.T(cm, IL);
    var em = function(a, b, c) {
        IL.call(this, a, b, c);
        this.setContent = L(a, 72, function(d) {
            var e = _.z(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            b.error(nL(), e)
        })
    };
    _.T(em, IL);
    var lm = function(a) {
        this.F = _.A(a)
    };
    _.T(lm, _.D);
    var km = function(a, b) {
            return ri(a, 1, b)
        },
        pm = function(a) {
            return ti(a, 2, 2)
        },
        jm = function(a, b) {
            return _.Ke(a, 2, b, _.ud)
        },
        qn = function(a, b) {
            return _.Me(a, 2, _.ud, b)
        };
    lm.da = [2];
    var NL = function(a) {
        this.F = _.A(a)
    };
    _.T(NL, _.D);
    NL.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.gi(this, 5, a)
    };
    NL.prototype.clearTagForChildDirectedTreatment = function() {
        return _.mk(this, 5)
    };
    NL.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.gi(this, 6, a)
    };
    var Rp = function(a) {
        this.F = _.A(a)
    };
    _.T(Rp, _.D);
    var Go = function(a) {
        var b = new Rp;
        return Zh(b, 1, a)
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
    var In = function(a) {
        this.F = _.A(a)
    };
    _.T(In, _.D);
    var Mr = function(a) {
        this.F = _.A(a)
    };
    _.T(Mr, _.D);
    var Sr = function(a, b) {
            return _.gi(a, 1, b)
        },
        Pr = function(a, b) {
            return _.Ke(a, 2, b, _.ud)
        };
    Mr.da = [2];
    var Ft = function(a) {
        this.F = _.A(a)
    };
    _.T(Ft, _.D);
    var Or = function(a, b) {
        ok(a, 1, Mr, b)
    };
    Ft.da = [1];
    var Et = function(a) {
        this.F = _.A(a)
    };
    _.T(Et, _.D);
    var OL = function(a) {
        this.F = _.A(a)
    };
    _.T(OL, _.D);
    OL.prototype.getCategoryExclusions = function(a) {
        return cz(this, 3, a)
    };
    OL.prototype.Sa = function() {
        return _.fk(this, lm, 14)
    };
    OL.prototype.Fc = function() {
        return _.Am(this, In, 18)
    };
    var nv = function(a) {
        return _.Am(a, NL, 25)
    };
    OL.prototype.getCorrelator = function() {
        return vs(this, 26)
    };
    OL.prototype.setCorrelator = function(a) {
        return _.mk(this, 26, _.td(a))
    };
    OL.prototype.hi = function() {
        return Yy(this, Et, 33)
    };
    OL.da = [2, 3, 14];
    var Tm = function() {
        this.g = new _.u.Map
    };
    var PL = {},
        ym = (PL[253] = !1, PL[246] = [], PL[150] = "", PL[221] = !1, PL[36] = /^true$/.test("false"), PL[172] = null, PL[260] = void 0, PL[251] = null, PL),
        xm = function() {
            this.g = !1
        };
    var QL = function() {
            this.A = {};
            this.g = new OL;
            this.l = new _.u.Map;
            this.g.setCorrelator(yB());
            _.zm(36) && Zh(this.g, 15, !0)
        },
        RL = function(a) {
            var b = gn(),
                c = a.getDomId();
            if (c && !b.A.hasOwnProperty(c)) {
                var d = _.Nf(Tm),
                    e = ++_.Nf(Jl).l;
                d.g.set(c, e);
                _.mk(a, 20, _.ad(e));
                b.A[c] = a
            }
        },
        SL = function(a, b) {
            return a.A[b]
        },
        gn = function() {
            return _.Nf(QL)
        };
    var TL = {},
        UL = (TL.companion_ads = "companionAds", TL.content = "content", TL.publisher_ads = "pubads", TL);
    var VL = Hi(Wm);
    var hn = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = gn().g,
            h = SL(gn(), f.getDomId());
        this.set = L(a, 83, function(k, l) {
            "page_url" === k && l && (k = [jm(km(new lm, k), [String(l)])], _.um(h, 3, k));
            return e
        });
        this.get = L(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (_.H = h.Sa(), _.z(_.H, "find")).call(_.H, function(n) {
                return hk(n, 1) === k
            })) ? void 0 : pm(l)[0]) ? m : null
        });
        this.setClickUrl = L(a, 79, function(k) {
            gm(k, h, f, b);
            return e
        });
        this.setTargeting = L(a, 81, function(k, l) {
            nm(k, l, f, h, b);
            return e
        });
        this.updateTargetingFromMap = L(a, 85, function(k) {
            om(k, f, h, b);
            return e
        });
        this.display = L(a, 78, function() {
            var k = Um(g, gn().A);
            var l = void 0 === l ? document : l;
            var m;
            null != (m = k.T[f.getDomId()]) && Zh(m, 19, !0);
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
                for (v = _.x(_.z(n, "entries").call(n)), n = v.next(); !n.done; n = v.next()) r = _.x(n.value), n = r.next().value, r = r.next().value, Gf(LI.test(n)), m[n] = r;
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
                                    if (r instanceof _.ox) r = _.ib(r).toString();
                                    else if (r instanceof _.Qa) r = _.$a(r);
                                else if ("string" === typeof r) r instanceof _.Qa || (r = String(r), xx.test(r) ? r = Ra(r) : (r = String(r), r = r.replace(/(%0A|%0D)/g, ""), r = r.match(wx) ? Ra(r) : null)), r = (r || zx).toString();
                                else throw Error("");
                            }
                            n = n + '="' + Jx(String(r)) + '"';
                            v += " " + n
                        }
                    }
            var w = "<div" + v;
            null == p ? p = [] : Array.isArray(p) || (p = [p]);
            !0 === jx.div ? w += ">" : (m = _.Tx(p), w += ">" + _.Qx(m).toString() + "</div>");
            w = _.Yj(w);
            l.write(_.Qx(w));
            Ym(f, l) && (Ct(d), mK(d.L, f), WL(d, k, f))
        });
        this.setTagForChildDirectedTreatment = L(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = nv(g) || new NL;
                l.setTagForChildDirectedTreatment(k);
                _.ii(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = L(a, 567, function(k) {
            "boolean" === typeof k ? Zh(h, 12, k) : P(b, am("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = L(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = nv(g) || new NL;
                l.setTagForUnderAgeOfConsent(k);
                _.ii(g, 25, l)
            }
            return e
        })
    };
    var Dr = {
        io: 0,
        eo: 1,
        fo: 2,
        ho: 3
    };
    var ln = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5,
            GAME_MANUAL_INTERSTITIAL: 7,
            LEFT_SIDE_RAIL: 8,
            RIGHT_SIDE_RAIL: 9
        },
        nn = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        mn = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var XL = "",
        En = null;
    var ko = function(a, b, c) {
        YJ.call(this, a);
        this.slotId = b;
        this.g = c
    };
    _.T(ko, YJ);
    ko.prototype.getSlotId = function() {
        return this.slotId
    };
    var Ug = function(a, b, c, d) {
        YJ.call(this, a);
        this.adUnitPath = b;
        this.Wb = d;
        this.g = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.T(Ug, YJ);
    _.q = Ug.prototype;
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
    var YL = function(a, b) {
        a.g = b
    };
    var co = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    var ho = _.$x(function() {
            return void uB("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        ZL = _.$x(function() {
            return void uB("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        $L = _.$x(function() {
            return void uB("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        mo = function(a, b, c, d, e) {
            IL.call(this, a, b, c);
            var f = this,
                g = gn().g,
                h = gn().A,
                k = !1;
            this.setTargeting = L(a, 1, function(l, m) {
                Wn({
                    key: l,
                    value: m,
                    Fa: g,
                    serviceName: c.getName(),
                    Em: c.enabled,
                    ib: e,
                    R: b,
                    context: a
                });
                return f
            });
            this.clearTargeting = L(a, 2, function(l) {
                bo(l, g, c.getName(), b);
                return f
            });
            this.getTargeting = L(a, 38, function(l) {
                return Xn(l, g, b)
            });
            this.getTargetingKeys = L(a, 39, function() {
                return Yn(g)
            });
            this.setCategoryExclusion = L(a, 3, function(l) {
                "string" !== typeof l || hm(l) ? P(b, am("PubAdsService.setCategoryExclusion", [l])) : ((_.H = ti(g, 3, 2), _.z(_.H, "includes")).call(_.H, l) || _.Me(g, 3, _.ud, l), b.info(XK(l)));
                return f
            });
            this.clearCategoryExclusions = L(a, 4, function() {
                _.mk(g, 3);
                b.info(YK());
                return f
            });
            this.disableInitialLoad = L(a, 5, function() {
                Zh(g, 4, !0);
                k || (k = !0, io())
            });
            this.enableSingleRequest = L(a, 6, function() {
                if (c.enabled && !_.Q(g, 6)) return P(b, NK("PubAdsService.enableSingleRequest")), !1;
                b.info(OK("single request"));
                Zh(g, 6, !0);
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
                m = _.wi(m, 1, 800);
                m = _.wi(m, 2, 400);
                m = _.mk(m, 3, _.Ic(3));
                if (_.ja(l)) {
                    var n = l.fetchMarginPercent;
                    "number" === typeof n && (0 <= n ? _.wi(m, 1, n) : -1 === n && _.mk(m, 1));
                    n = l.renderMarginPercent;
                    "number" === typeof n && (0 <= n ? _.wi(m, 2, n) : -1 === n && _.mk(m, 2));
                    l = l.mobileScaling;
                    "number" === typeof l && (0 < l ? _.mk(m, 3, _.Ic(l)) : -1 === l && _.mk(m, 3, _.Ic(1)))
                }
                window.IntersectionObserver || !Ji(m, 1) && !Ji(m, 2) ? _.ii(g, 5, m) : P(b, yL())
            });
            this.setCentering = L(a, 9, function(l) {
                l = !!l;
                b.info(PK("centering", String(l)));
                Zh(g, 15, l)
            });
            this.definePassback = L(a, 10, function(l, m) {
                return (l = lo(a, b, c, l, m, d)) && l.Xi
            });
            this.refresh = L(a, 11, function() {
                var l = _.Va.apply(0, arguments),
                    m = _.x(l),
                    n = m.next().value;
                m = m.next().value;
                m = void 0 === m ? {} : m;
                n && !Array.isArray(n) || !_.ja(m) || m.changeCorrelator && "boolean" !== typeof m.changeCorrelator ? P(b, am("PubAdsService.refresh", l)) : (m && !1 === m.changeCorrelator || g.setCorrelator(yB()), n = n ? go(n, c) : _.E(wE) ? c.g.filter(function(p) {
                    var r = h[p.getDomId()];
                    return !(!Ym(p) && !Jm(xr(r)))
                }) : c.g, c.refresh(Um(g, h), n) || P(b, am("PubAdsService.refresh", l)))
            });
            this.enableVideoAds = L(a, 12, function() {
                Zh(g, 21, !0);
                aM(c, g)
            });
            this.setVideoContent = L(a, 13, function(l, m) {
                bM(c, l, m, g)
            });
            this.collapseEmptyDivs = L(a, 14, function(l) {
                l = void 0 === l ? !1 : l;
                l = void 0 === l ? !1 : l;
                Zh(g, 11, !0);
                l = !!l;
                Zh(g, 10, l);
                b.info(VK(String(l)));
                return !!_.Q(g, 11)
            });
            this.clear = L(a, 15, function(l) {
                if (Array.isArray(l)) return cM(c, g, h, go(l, c));
                if (void 0 === l) return cM(c, g, h, c.g);
                P(b, am("PubAdsService.clear", [l]));
                return !1
            });
            this.setLocation = L(a, 16, function(l) {
                "string" !== typeof l ? P(b, am("PubAdsService.setLocation", [l])) : ri(g, 8, l);
                return f
            });
            this.setCookieOptions = L(a, 17, function() {
                ZL();
                return f
            });
            this.setTagForChildDirectedTreatment = L(a, 18, function(l) {
                $L();
                if (1 !== l && 0 !== l) return P(b, jL("PubadsService.setTagForChildDirectedTreatment", Ln(l), "0,1")), f;
                var m = nv(g) || new NL;
                m.setTagForChildDirectedTreatment(l);
                _.ii(g, 25, m);
                return f
            });
            this.clearTagForChildDirectedTreatment = L(a, 19, function() {
                $L();
                var l = nv(g);
                if (!l) return f;
                l.clearTagForChildDirectedTreatment();
                _.ii(g, 25, l);
                return f
            });
            this.setPublisherProvidedId = L(a, 20, function(l) {
                l = String(l);
                b.info(PK("PPID", l));
                ri(g, 16, l);
                return f
            });
            this.set = L(a, 21, function(l, m) {
                zn(l, m, g, c.getName(), b);
                return f
            });
            this.get = L(a, 22, function(l) {
                return An(l, g, b)
            });
            this.getAttributeKeys = L(a, 23, function() {
                return Bn(g)
            });
            this.display = L(a, 24, function(l, m, n, p) {
                return void c.display(l, m, d, n, p)
            });
            this.updateCorrelator = L(a, 25, function() {
                uB(fo("update"));
                P(b, eL());
                g.setCorrelator(yB());
                return f
            });
            this.defineOutOfPagePassback = L(a, 35, function(l) {
                l = lo(a, b, c, l, [1, 1], d);
                if (!l) return null;
                _.gi(l.Fa, 15, 1);
                return l.Xi
            });
            this.setForceSafeFrame = L(a, 36, function(l) {
                "boolean" !== typeof l ? P(b, am("PubAdsService.setForceSafeFrame", [Ln(l)])) : Zh(g, 13, l);
                return f
            });
            this.setSafeFrameConfig = L(a, 37, function(l) {
                var m = Mn(b, l);
                m ? _.ii(g, 18, m) : P(b, am("PubAdsService.setSafeFrameConfig", [l]));
                return f
            });
            this.setRequestNonPersonalizedAds = L(a, 445, function(l) {
                $L();
                if (0 !== l && 1 !== l) return P(b, jL("PubAdsService.setRequestNonPersonalizedAds", Ln(l), "0,1")), f;
                var m = nv(g) || new NL;
                Zh(m, 8, !!l);
                _.ii(g, 25, m);
                return f
            });
            this.setTagForUnderAgeOfConsent = L(a, 447, function(l) {
                l = void 0 === l ? 2 : l;
                $L();
                if (2 !== l && 0 !== l && 1 !== l) return P(b, jL("PubadsService.setTagForUnderAgeOfConsent", Ln(l), "2,0,1")), f;
                var m = nv(g) || new NL;
                m.setTagForUnderAgeOfConsent(l);
                _.ii(g, 25, m);
                return f
            });
            this.getCorrelator = L(a, 27, function() {
                return String(Zy(g, 26))
            });
            this.getTagSessionCorrelator = L(a, 631, function() {
                return bk(_.t)
            });
            this.getVideoContent = L(a, 30, function() {
                return dM(c, g)
            });
            this.getVersion = L(a, 568, function() {
                return a.Ze
            });
            this.forceExperiment = L(a, 569, function(l) {
                return void c.forceExperiment(l)
            });
            this.setCorrelator = L(a, 28, function(l) {
                uB(fo("set"));
                P(b, dL());
                if (bh(window)) return f;
                if (!Ao(l)) return P(b, am("PubadsService.setCorrelator", [Ln(l)])), f;
                l = g.setCorrelator(l);
                Zh(l, 27, !0);
                return f
            });
            this.markAsAmp = L(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = L(a, 571, function() {
                return !!_.Q(g, 6)
            });
            this.setImaContent = L(a, 328, function(l, m) {
                _.Ii(g, 22) ? bM(c, l, m, g) : (Zh(g, 21, !0), aM(c, g), "string" === typeof l && ri(g, 19, l), "string" === typeof m && ri(g, 20, m))
            });
            this.getImaContent = L(a, 329, function() {
                return _.Ii(g, 22) ? dM(c, g) : c.enabled ? {
                    vid: _.I(g, 19) || "",
                    cmsid: _.I(g, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = L(a, 572, function() {
                return !!_.Q(g, 4)
            });
            this.setPrivacySettings = L(a, 648, function(l) {
                if (!_.ja(l)) return P(b, am("PubAdsService.setPrivacySettings", [l])), f;
                var m = l.restrictDataProcessing,
                    n = l.childDirectedTreatment,
                    p = l.underAgeOfConsent,
                    r = l.limitedAds,
                    v = l.nonPersonalizedAds,
                    w = l.userOptedOutOfPersonalization,
                    y = l.trafficSource,
                    B, C = null != (B = nv(g)) ? B : new NL;
                "boolean" === typeof v ? Zh(C, 8, v) : void 0 !== v && P(b, Kn("PubAdsService.setPrivacySettings", Ln(l), "nonPersonalizedAds", Ln(v)));
                "boolean" === typeof w ? Zh(C, 13, w) : void 0 !== w && P(b, Kn("PubAdsService.setPrivacySettings", Ln(l), "userOptedOutOfPersonalization", Ln(w)));
                "boolean" === typeof m ? Zh(C, 1, m) : void 0 !== m && P(b, Kn("PubAdsService.setPrivacySettings", Ln(l), "restrictDataProcessing", Ln(m)));
                if ("boolean" === typeof r) {
                    m = eo();
                    if (r && !_.Q(C, 9) && a.Wc) {
                        v = a.Qa;
                        w = v.Vc;
                        B = vl(a);
                        var G = new dD;
                        G = _.yl(G, 1, !0);
                        G = _.yl(G, 2, m);
                        B = _.Al(B, 11, Bl, G);
                        w.call(v, B)
                    }
                    m ? Zh(C, 9, r) : r && P(b, xL())
                } else void 0 !== r && P(b, Kn("PubAdsService.setPrivacySettings", Ln(l), "limitedAds", Ln(r)));
                void 0 !== p && (null === p ? C.setTagForUnderAgeOfConsent(2) : !1 === p ? C.setTagForUnderAgeOfConsent(0) : !0 === p ? C.setTagForUnderAgeOfConsent(1) : P(b, Kn("PubAdsService.setPrivacySettings", Ln(l), "underAgeOfConsent", Ln(p))));
                void 0 !== n && (null === n ? C.clearTagForChildDirectedTreatment() : !1 === n ? C.setTagForChildDirectedTreatment(0) : !0 === n ? C.setTagForChildDirectedTreatment(1) : P(b, Kn("PubAdsService.setPrivacySettings", Ln(l), "childDirectedTreatment", Ln(n))));
                void 0 !== y && (null === y ? _.mk(C, 10) : (_.H = _.z(Object, "values").call(Object, mn), _.z(_.H, "includes")).call(_.H, y) ? _.gi(C, 10, y) : P(b, Kn("PubAdsService.setPrivacySettings", Ln(l), "trafficSource", Ln(y))));
                _.ii(g, 25, C);
                return f
            })
        };
    _.T(mo, IL);
    var eM = function(a, b) {
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
    var fM = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        gM = function(a, b) {
            a.advertiserId = b
        },
        hM = function(a, b) {
            a.campaignId = b
        },
        iM = function(a, b) {
            a.yieldGroupIds = b
        },
        jM = function(a, b) {
            a.companyIds = b
        };
    var Bm = function(a) {
        this.F = _.A(a)
    };
    _.T(Bm, _.D);
    Bm.prototype.getWidth = function() {
        return gt(this, 1)
    };
    Bm.prototype.getHeight = function() {
        return gt(this, 2)
    };
    var uo = function() {
        var a = new Bm;
        return Zh(a, 3, !0)
    };
    var Em = function(a) {
        this.F = _.A(a)
    };
    _.T(Em, _.D);
    Em.da = [2];
    var kM = function(a) {
        this.F = _.A(a)
    };
    _.T(kM, _.D);
    var lM = function(a) {
        var b = new kM;
        return _.gi(b, 1, a)
    };
    var mM = function(a) {
        this.F = _.A(a)
    };
    _.T(mM, _.D);
    mM.da = [1];
    var nM = function(a) {
        this.F = _.A(a)
    };
    _.T(nM, _.D);
    var oM = function(a) {
        this.F = _.A(a)
    };
    _.T(oM, _.D);
    oM.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    oM.prototype.getDomId = function() {
        return _.I(this, 2)
    };
    var pM = function(a, b) {
        ri(a, 2, b)
    };
    oM.prototype.Sa = function() {
        return _.fk(this, lm, 3)
    };
    oM.prototype.getServices = function(a) {
        return cz(this, 4, a)
    };
    var qM = function(a, b) {
        _.um(a, 5, b)
    };
    oM.prototype.getClickUrl = function() {
        return _.I(this, 7)
    };
    oM.prototype.setClickUrl = function(a) {
        return ri(this, 7, a)
    };
    oM.prototype.getCategoryExclusions = function(a) {
        return cz(this, 8, a)
    };
    var im = function(a) {
        return _.fk(a, lm, 9)
    };
    oM.prototype.Fc = function() {
        return _.Am(this, In, 13)
    };
    var xr = function(a) {
        return _.jg(a, 15, 0)
    };
    oM.da = [3, 4, 5, 6, 8, 9, 27];
    var rM = function(a, b) {
        this.width = a;
        this.height = b
    };
    rM.prototype.getWidth = function() {
        return this.width
    };
    rM.prototype.getHeight = function() {
        return this.height
    };
    var sM = new _.u.Set(["unhideWindow", "navBar"]);
    var Jo = function(a, b, c) {
        var d = this,
            e = SL(gn(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.rp(c, function() {
            e = new oM;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        c.listen(jt, function(n) {
            var p = n.detail;
            n = p.Sh;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = L(a, 40, function(n, p) {
            oo(n, p, c, e, b);
            return d
        });
        this.get = L(a, 41, function(n) {
            return po(n, c, e, b)
        });
        this.getAttributeKeys = L(a, 42, function() {
            return qo(e)
        });
        this.addService = L(a, 43, function(n) {
            n = Xl.get(n);
            if (!n) return P(b, am("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((_.H = ti(e, 4, 2), _.z(_.H, "includes")).call(_.H, p)) return b.info(yK(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = L(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new Bo("Size mapping must be an array");
                var r = n.map(Co);
                _.um(p, 6, r)
            } catch (v) {
                n = v, Ll(a, 44, n), uB("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = L(a, 45, function(n) {
            gm(n, e, c, b);
            return d
        });
        this.setCategoryExclusion = L(a, 46, function(n) {
            var p = e;
            "string" !== typeof n || hm(n) ? P(b, am("Slot.setCategoryExclusion", [n]), c) : ((_.H = ti(p, 8, 2), _.z(_.H, "includes")).call(_.H, n) || _.Me(p, 8, _.ud, n), b.info(zK(n), c));
            return d
        });
        this.clearCategoryExclusions = L(a, 47, function() {
            _.mk(e, 8);
            b.info(AK(), c);
            return d
        });
        this.getCategoryExclusions = L(a, 48, function() {
            return ti(e, 8, 2).slice()
        });
        this.setTargeting = L(a, 49, function(n, p) {
            nm(n, p, c, e, b);
            return d
        });
        this.updateTargetingFromMap = L(a, 649, function(n) {
            om(n, c, e, b);
            return d
        });
        this.clearTargeting = L(a, 50, function(n) {
            wm(n, c, e, b);
            return d
        });
        this.getTargeting = L(a, 51, function(n) {
            return qm(n, c, e, b)
        });
        this.getTargetingKeys = L(a, 52, function() {
            return rm(e)
        });
        this.setCollapseEmptyDiv = L(a, 53, function(n, p) {
            var r = e;
            p = void 0 === p ? !1 : p;
            p = void 0 === p ? !1 : p;
            "boolean" !== typeof n || "boolean" !== typeof p ? P(b, am("Slot.setCollapseEmptyDiv", [n, p]), c) : (r = Zh(r, 10, n), Zh(r, 11, n && p), p && !n && P(b, BK(c.toString()), c));
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
            "boolean" !== typeof n ? P(b, am("Slot.setForceSafeFrame", [String(n)]), c) : Zh(p, 12, n);
            return d
        });
        this.setSafeFrameConfig = L(a, 56, function(n) {
            var p = e,
                r = Mn(b, n);
            r ? _.ii(p, 13, r) : b.error(am("Slot.setSafeFrameConfig", [n]), c);
            return d
        });
        c.listen(bK, function(n) {
            n = n.detail;
            if (Nn(n, 8)) g = null;
            else {
                g = new fM;
                var p = !!Nn(n, 9);
                g.isBackfill = p;
                var r = $y(n, 15),
                    v = $y(n, 16);
                r.length && v.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = v[0], p || (g.creativeId = r[0], g.lineItemId = v[0], (p = $y(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                $y(n, 17).length && gM(g, $y(n, 17)[0]);
                $y(n, 18).length && hM(g, $y(n, 18)[0]);
                $y(n, 19).length && iM(g, $y(n, 19));
                $y(n, 20).length && jM(g, $y(n, 20));
                n = ue(n, 45, ee(n.F) & 34 ? ve : Fe, 2).map(function(w) {
                    return Xd(w)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = L(a, 355, function() {
            return g
        });
        this.getName = L(a, 170, function() {
            b.error(vL());
            return c.getAdUnitPath()
        });
        var m = new eM(a, c);
        this.getSlotId = L(a, 579, function() {
            return m
        });
        this.getServices = L(a, 580, function() {
            return ti(e, 4, 2).map(function(n) {
                var p = UL[n];
                if (p) {
                    var r, v, w;
                    n = null != (w = null == (v = (r = Do())[p]) ? void 0 : v.call(r)) ? w : null
                } else n = null;
                return n
            })
        });
        this.getSizes = L(a, 581, function(n, p) {
            var r, v;
            return null != (v = null == (r = Fm(e, n, p)) ? void 0 : r.map(function(w) {
                return _.Q(w, 3) ? "fluid" : new rM(w.getWidth(), w.getHeight())
            })) ? v : null
        });
        this.getClickUrl = L(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = L(a, 583, function() {
            for (var n = {}, p = _.x(im(e)), r = p.next(); !r.done; r = p.next()) r = r.value, _.I(r, 1) && (n[hk(r, 1)] = pm(r));
            return n
        });
        this.getOutOfPage = L(a, 584, function(n) {
            return "number" === typeof n ? xr(e) === n : 0 !== xr(e)
        });
        this.getCollapseEmptyDiv = L(a, 585, function() {
            var n = e;
            return null != Nn(n, 10) ? _.Q(n, 10) : null
        });
        this.getDivStartsCollapsed = L(a, 586, function() {
            var n = e;
            return null != Nn(n, 11) ? _.Q(n, 11) : null
        });
        c.listen(cK, function(n) {
            h = n.detail.xk
        });
        this.getContentUrl = L(a, 587, function() {
            return h()
        });
        this.getFirstLook = L(a, 588, function() {
            uB("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen(bK, function(n) {
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
            if (Wg(n)) {
                var r = n.componentAuction,
                    v = n.adExpansion,
                    w = n.outstream;
                if (null != r) {
                    var y = {
                        componentAuction: r
                    };
                    if (_.ja(y)) {
                        if (r = Ie(p, 26, Cd), void 0 !== y.componentAuction) {
                            y = _.x(y.componentAuction);
                            for (var B = y.next(); !B.done; B = y.next()) {
                                var C = B.value;
                                B = C.configKey;
                                C = C.auctionConfig;
                                "string" !== typeof B || hm(B) || (null === C ? r.delete(B) : C && r.set(B, JSON.stringify(C)))
                            }
                        }
                    } else P(b, am("googletag.Slot.setConfig", [y]))
                }
                if (_.z(Object, "hasOwn").call(Object, n, "interstitial"))
                    if (5 !== xr(p)) P(b, HL("interstitial"), c);
                    else {
                        y = n.interstitial;
                        b.info(DL("interstitial", Ln(y)), c);
                        if (Wg(y))
                            for (r = {}, y = _.x(_.z(Object, "entries").call(Object, y)), B = y.next(); !B.done; B = y.next()) switch (C = _.x(B.value), B = C.next().value, C = C.next().value, B) {
                                case "triggers":
                                    r.triggers = C;
                                    break;
                                default:
                                    P(b, FL("interstitial", B), c)
                            } else P(b, GL("googletag.slot.setConfig", "interstitial", Ln(y)), c), r = null;
                        B = r;
                        r = new mM;
                        y = {};
                        if (B && B.triggers)
                            if (B = B.triggers, Wg(B))
                                for (y.triggers = {}, B = _.x(_.z(Object, "entries").call(Object, B)), C = B.next(); !C.done; C = B.next()) {
                                    var G = _.x(C.value);
                                    C = G.next().value;
                                    G = G.next().value;
                                    var F = C;
                                    C = G;
                                    if (sM.has(F))
                                        if (Fo(C)) switch (F) {
                                            case "unhideWindow":
                                                G = lM(2);
                                                G = Zh(G, 2, C);
                                                ok(r, 1, kM, G);
                                                y.triggers.Oo = C;
                                                break;
                                            case "navBar":
                                                _.E(hE) ? (G = lM(3), G = Zh(G, 2, C), ok(r, 1, kM, G), y.triggers.Bo = C) : P(b, FL("interstitial.triggers", F), c)
                                        } else P(b, GL("interstitial.triggers", F, Ln(C)), c);
                                        else P(b, FL("interstitial.triggers", F), c)
                                } else P(b, GL("interstitial", "triggers", Ln(B)), c);
                        b.info(EL("interstitial", Ln(y)), c);
                        _.ii(p, 29, r)
                    }
                _.E(Eo) ? _.z(Object, "hasOwn").call(Object, n, "adExpansion") && Ho(p, v) : Ho(p, v);
                if (_.E(Mv) && _.z(Object, "hasOwn").call(Object, n, "outstream") && (_.mk(p, 31), null !== w))
                    if (Wg(w))
                        if (0 !== xr(p)) P(b, HL("outstream", String(xr(p))), c);
                        else {
                            a: {
                                v = ["exposeVast"];n = new _.u.Map;w = _.x(_.z(Object, "entries").call(Object, w));
                                for (r = w.next(); !r.done; r = w.next()) y = _.x(r.value),
                                r = y.next().value,
                                y = y.next().value,
                                _.z(v, "includes").call(v, r) ? n.set(r, y) : P(b, FL("outstream", r), c);
                                if (0 === n.size) w = null;
                                else
                                    for (w = new nM, n = _.x(n), v = n.next(); !v.done; v = n.next())
                                        if (r = _.x(v.value), v = r.next().value, r = r.next().value, "exposeVast" === v) {
                                            if (!Fo(r)) {
                                                P(b, GL("outstream", "exposeVast", Ln(r)), c);
                                                w = null;
                                                break a
                                            }
                                            Zh(w, 1, r)
                                        }
                            }
                            w && _.ii(p, 31, w)
                        }
                else P(b, GL("googletag.slot.setConfig", "outstream", Ln(w)), c)
            } else P(b, am("googletag.slot.setConfig", [n]), c)
        })
    };
    var Y = function(a, b, c) {
        gI.call(this, b, c);
        this.context = a
    };
    _.T(Y, gI);
    Y.prototype.I = function(a) {
        Ll(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var To = function(a, b, c, d, e) {
        Y.call(this, a, 1226);
        this.Sf = b;
        this.startTime = _.Zf();
        this.j = X(this, c);
        this.wa = null != d ? d : this.context.Qa;
        this.o = null != e ? e : .01
    };
    _.T(To, Y);
    To.prototype.g = function() {
        _.rh() < this.o && this.wa.ac.mc.ki.uk.vk.Rc({
            Uc: _.Zf() - this.startTime,
            Sf: this.Sf,
            pi: !!_.I(this.j.value, 2),
            ri: !!_.I(this.j.value, 1),
            mi: !!_.I(this.j.value, 11)
        })
    };
    To.prototype.l = function(a) {
        this.I(a)
    };
    var Ro = function(a, b, c, d, e) {
        Y.call(this, a, 959);
        this.nb = b;
        this.output = W(this);
        this.j = X(this, b);
        lI(this, c);
        lI(this, d);
        e && lI(this, e)
    };
    _.T(Ro, Y);
    Ro.prototype.g = function() {
        this.output.G(this.j.value)
    };
    var Qo = function(a, b, c, d, e, f) {
        Y.call(this, a, 1172);
        this.R = b;
        this.L = c;
        this.B = d;
        this.j = iI(this);
        lI(this, e);
        this.o = X(this, f)
    };
    _.T(Qo, Y);
    Qo.prototype.g = function() {
        var a = this,
            b = new cH(this.B, {
                addListenerRemovalCallback: _.E(ND)
            });
        _.S(this, b);
        if (hG(b.caller)) {
            var c = this.L.M,
                d = c.status,
                e = function(f) {
                    if (f.internalErrorState) oH(a.o.value, f.gppString);
                    else if (eh(f.applicableSections)) mH(nH(a.o.value, f.applicableSections.filter(function(k) {
                        return _.z(Number, "isInteger").call(Number, k)
                    })), !1);
                    else {
                        var g = oH(nH(a.o.value, f.applicableSections.filter(function(k) {
                            return _.z(Number, "isInteger").call(Number, k)
                        })), f.gppString);
                        try {
                            var h = gH(f.gppString)
                        } catch (k) {
                            Ll(a.context, 1182, k), h = !1
                        }
                        mH(g, h)
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
                    hK(c);
                    c.g.push(e);
                    this.R.info(hL());
                    b.addEventListener(Hl(this.context, 1173, function(f) {
                        if ("ready" === f.pingData.signalStatus || eh(f.pingData.applicableSections)) c.data = f.pingData, c.status = 2, c.g.forEach(function(g) {
                            g(f.pingData)
                        }), c.g = []
                    }));
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Oo = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 874);
        this.R = b;
        this.L = c;
        this.B = d;
        this.o = e;
        this.j = iI(this);
        lI(this, f);
        this.C = X(this, g)
    };
    _.T(Oo, Y);
    Oo.prototype.g = function() {
        var a = this,
            b = new oG(this.B, {
                timeoutMs: -1,
                ek: !0
            });
        _.S(this, b);
        if (qG(b)) {
            var c = this.L.K,
                d = c.status,
                e = function(f) {
                    var g = a.C.value,
                        h, k;
                    if (k = !(a.o ? _.Q(a.o, 9) : _.E(QD) && eo())) k = {
                        sg: _.E(PD) && _.zm(221) && !Qg()
                    }, k = void 0 === k ? {} : k, k = vG(f) ? !1 === f.gdprApplies ? !0 : "tcunavailable" === f.tcString ? !k.sg : (k.sg || void 0 !== f.gdprApplies || k.xo) && (k.sg || "string" === typeof f.tcString && f.tcString.length) ? tG(f, "1", 0) : !0 : !1;
                    k = Zh(g, 5, k);
                    var l = !wG(f, ["3", "4"], 0);
                    k = Zh(k, 9, l);
                    k = ri(k, 2, f.tcString);
                    l = null != (h = f.addtlConsent) ? h : "";
                    h = ri(k, 4, l);
                    _.gi(h, 7, f.internalErrorState);
                    null != f.gdprApplies && Zh(g, 3, f.gdprApplies);
                    wG(f, ["2", "7", "9", "10"], 1) || Zh(g, 8, !0);
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
                    hK(c);
                    c.g.push(e);
                    this.R.info(gL());
                    b.addEventListener(function(f) {
                        vG(f) ? ("tcunavailable" === f.tcString ? a.R.info(iL("failed")) : a.R.info(iL("succeeded")), c.data = f, c.status = 2, c.g.forEach(function(g) {
                            g(f)
                        }), c.g = []) : hK(c)
                    });
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var No = function(a, b, c, d, e) {
        Y.call(this, a, 875);
        this.R = b;
        this.B = c;
        this.j = iI(this);
        lI(this, d);
        this.o = X(this, e)
    };
    _.T(No, Y);
    No.prototype.g = function() {
        var a = this,
            b = new RG(this.B);
        _.S(this, b);
        if (hG(b.caller)) {
            var c = Hl(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && (ri(a.o.value, 1, d.uspString), lH(a.o.value, Hl(a.context, 1187, function() {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    4 == f.length && (-1 == f.indexOf("-") || "---" === f.substring(1)) && "1" <= f[0] && "9" >= f[0] && VB.hasOwnProperty(f[1]) && VB.hasOwnProperty(f[2]) && VB.hasOwnProperty(f[3]) ? (f = new UB, f = _.zl(f, 1, parseInt(e[0], 10)), f = _.K(f, 2, VB[e[1]]), f = _.K(f, 3, VB[e[2]]), e = _.K(f, 4, VB[e[3]])) : e = null;
                    return 2 === (null == e ? void 0 : _.jg(e, 3, 0))
                })()));
                a.j.notify()
            });
            this.R.info(fL());
            SG(b, c)
        } else this.j.notify()
    };
    var Lo = function(a, b) {
        Y.call(this, a, 958);
        this.j = b;
        this.nb = W(this)
    };
    _.T(Lo, Y);
    Lo.prototype.g = function() {
        var a = new kH,
            b = this.j ? _.Q(this.j, 9) : eo(),
            c = _.E(OD) && _.zm(221) && !Qg();
        Zh(a, 5, !b && !c);
        this.nb.G(a)
    };
    var Mo = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Y.call(this, a, 960);
        this.B = b;
        this.o = d;
        this.j = X(this, c)
    };
    _.T(Mo, Y);
    Mo.prototype.g = function() {
        var a = this;
        Nl(this.context, 894, function() {
            return void Ep("cmpMet", function(b) {
                dp(b, a.context);
                var c = new oG(a.B);
                _.S(a, c);
                var d = new RG(a.B);
                _.S(a, d);
                ep(b, "fc", Number(a.j.value));
                ep(b, "tcfv1", Number(!!a.B.__cmp));
                ep(b, "tcfv2", Number(qG(c)));
                ep(b, "usp", Number(!!hG(d.caller)));
                ep(b, "ptt", 17)
            }, a.o)
        })
    };
    var tM = function(a, b, c, d) {
        Y.call(this, a, 1103);
        this.j = b;
        this.Z = c;
        this.privacyTreatments = d;
        this.output = W(this)
    };
    _.T(tM, Y);
    tM.prototype.g = function() {
        this.output.G(!!fh(this.Z) && !_.Q(this.Z, 9) && !_.Q(this.Z, 13) && (!_.E(Po) || !_.Q(this.Z, 12)) && (this.j ? _.Q(this.j, 9) || _.Q(this.j, 8) || _.Q(this.j, 1) || _.E(sE) && _.Q(this.j, 13) || 1 === _.jg(this.j, 6, 2) || 1 === _.Xc(_.fi(this.j, 5)) || _.z(this.privacyTreatments, "includes").call(this.privacyTreatments, 1) ? !1 : !0 : !0))
    };
    var Xo = function(a) {
        this.R = a;
        this.A = this.g = 0
    };
    Xo.prototype.push = function() {
        for (var a = _.x(_.Va.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.u.globalThis), this.g++)
            } catch (c) {
                this.A++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.R.error(GK(String(c)))
            }
        }
        this.R.info(HK(String(this.g), String(this.A)));
        return this.g
    };
    var Vo = function(a, b) {
        this.push = L(a, 76, b.push.bind(b))
    };
    var uM = ["Debug", "Info", "Warning", "Error", "Fatal"],
        vM = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.g = c;
            this.timestamp = new Date
        };
    _.q = vM.prototype;
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
        return this.timestamp.toTimeString() + ": " + uM[this.level] + ": " + this.message
    };
    var wM = _.Bw(["https://console.googletagservices.com/pubconsole/loader.js"]),
        ip = _.hb(wM),
        mp, lp = !1,
        bp = !1,
        fp = !1;
    var yt = function(a, b) {
        this.getAllEvents = L(a, 563, function() {
            return bp ? xM(b).slice() : []
        });
        this.getEventsBySlot = L(a, 565, function(c) {
            return bp ? yM(b, c).slice() : []
        });
        this.getEventsByLevel = L(a, 566, function(c) {
            return bp ? zM(b, c).slice() : []
        })
    };
    var AM = {
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
                return op(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return op(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return op(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return op(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return op(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return op(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return op(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            145: function(a) {
                return op(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
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
                return "Refresh is disabled for " + op(a[0]) + " " + a[1] + "."
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
        BM = {
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
    var CM = function(a) {
            this.context = a;
            this.l = this.g = 0;
            this.j = window;
            this.A = [];
            this.A.length = 1E3
        },
        xM = function(a) {
            return [].concat(_.xi(a.A.slice(a.g)), _.xi(a.A.slice(0, a.g))).filter(function(b) {
                return !!b
            })
        },
        yM = function(a, b) {
            return xM(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        zM = function(a, b) {
            return xM(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    CM.prototype.log = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? !1 : d;
        var e, f, g = new vM(a, b, null != (f = null == (e = c) ? void 0 : e.g) ? f : null);
        this.A[this.g] = g;
        this.g = (this.g + 1) % 1E3;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs();
        e = b.getMessageId();
        var k = AM[e] || BM[e];
        e = void 0;
        if (k) {
            e = k(h);
            if (d) throw new Bo(e);
            d = this.l < _.Pf(UD) && f && _.t.console;
            if (this.j === top && d || _.z(_.t.navigator.userAgent, "includes").call(_.t.navigator.userAgent, "Lighthouse")) {
                d = "[GPT] " + e;
                var l, m, n, p;
                2 === a ? null == (m = (l = _.t.console).warn) || m.call(l, d) : null == (p = (n = _.t.console).error) || p.call(n, d);
                this.l++
            }
        }
        a: if (m = e, l = c, l = void 0 === l ? null : l, this.context.zm) {
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
            c = a.ym;
            p = new hD;
            p = _.lj(p, 1, this.context.pvsid);
            d = mh();
            p = _.Ke(p, 2, d, Yc);
            p = _.kj(p, 3, this.context.Ea);
            p = _.kj(p, 4, this.context.Pa);
            p = _.lj(p, 5, this.context.gm);
            n = _.K(p, 6, n);
            m = _.kj(n, 7, m);
            n = b.getMessageId();
            m = _.K(m, 8, n);
            b = b.getMessageArgs();
            b = _.Ke(m, 9, b, _.ud);
            m = Gl(null != (w = null == (r = l) ? void 0 : r.getAdUnitPath()) ? w : "");
            r = _.kj(b, 10, m);
            w = null == (v = l) ? void 0 : v.getAdUnitPath();
            v = _.kj(r, 11, w);
            c.call(a, v)
        }
        return g
    };
    CM.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var P = function(a, b, c) {
        return a.log(2, b, c, !1)
    };
    CM.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var DM = function() {
            var a = {
                    ca: gn().g,
                    vj: new Date(Date.now()),
                    Uh: window.location.href
                },
                b = this;
            a = void 0 === a ? {} : a;
            var c = void 0 === a.ca ? gn().g : a.ca,
                d = void 0 === a.vj ? new Date(Date.now()) : a.vj,
                e = void 0 === a.Uh ? window.location.href : a.Uh;
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
                l = null !== l ? _.sh("w5uHecUBa2S:" + h + ":" + l) % k === Math.floor(d.valueOf() / 864E5) % k : void 0;
                return l
            }, a[13] = function() {
                return _.Va.apply(0, arguments).some(function(h) {
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
                return _.z(_.Va.apply(0, arguments), "includes").call(_.Va.apply(0, arguments), String(_.sh(e)))
            }, a), g[4] = (f[14] = function() {
                var h = Number(b.j || void 0);
                isNaN(h) ? h = void 0 : (h = new Date(1E3 * h), h = 1E4 * h.getFullYear() + 100 * (h.getMonth() + 1) + h.getDate());
                return h
            }, f), g[5] = {}, g)
        },
        EM = function(a, b) {
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
        Y.call(this, a, 863);
        this.o = c;
        this.Ld = Number(b);
        this.j = X(this, d);
        this.H = X(this, e);
        this.J = X(this, f);
        this.C = X(this, g)
    };
    _.T(Yu, Y);
    Yu.prototype.g = function() {
        var a = this.J.value,
            b = this.j.value,
            c = this.C.value,
            d = this.H.value,
            e = this.o;
        var f = qp(e);
        var g = b.getBoundingClientRect();
        e = _.Wk(e) ? Mm(b, e) : {
            x: 0,
            y: 0
        };
        b = e.x;
        e = e.y;
        g = new _.DB(e, b + g.right, e + g.bottom, b);
        b = new FH;
        b = _.wi(b, 1, g.top);
        b = _.wi(b, 3, g.bottom);
        b = _.wi(b, 2, g.left);
        g = _.wi(b, 4, g.right);
        b = new GH;
        b = _.mk(b, 1, _.ad(this.Ld));
        d = Zh(b, 2, !d);
        d = _.ii(d, 3, g);
        c = _.wi(d, 4, c);
        f = _.wi(c, 5, f);
        f = {
            type: "asmres",
            payload: gl(f)
        };
        a.ports[0].postMessage(f)
    };
    var zr = function(a, b, c, d) {
        Y.call(this, a, 1061);
        var e = this;
        this.output = W(this);
        this.output.La(new _.u.Promise(function(f) {
            var g = b.listen(c, function(h) {
                h = d(h);
                null !== h && (g(), f(h))
            });
            _.rp(e, g)
        }))
    };
    _.T(zr, Y);
    zr.prototype.g = function() {};
    var gr = function(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        Y.call(this, a, 1061);
        var e = this;
        this.output = iI(this);
        cI(this.output, new _.u.Promise(function(f) {
            var g = b.listen(c, function(h) {
                d(h) && (g(), f())
            });
            _.rp(e, g)
        }))
    };
    _.T(gr, Y);
    gr.prototype.g = function() {};
    var Tu = function(a, b, c, d) {
        zr.call(this, a, b, hr, function(e) {
            e = e.detail;
            var f;
            return "asmreq" === (null == (f = e.data) ? void 0 : f.type) && gt(EH(e.data.payload), 1) === Number(c) ? e : null
        });
        this.o = d;
        this.j = W(this)
    };
    _.T(Tu, zr);
    Tu.prototype.g = function() {
        this.j.G(qp(this.o))
    };
    var FM = /(<head(\s+[^>]*)?>)/i,
        su = function(a, b, c, d, e) {
            Y.call(this, a, 665);
            this.Ra = b;
            this.Md = c;
            this.isBackfill = d;
            this.Jb = e;
            this.output = W(this)
        };
    _.T(su, Y);
    su.prototype.g = function() {
        var a;
        0 !== this.Ra.kind || null == (a = this.Md) || !_.I(a, 1) || this.Jb ? this.output.G(this.Ra) : (a = this.Ra.hb, Ja() || (a = a.replace(FM, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.isBackfill && (a = a.replace(FM, '$1<meta name="referrer" content="origin">')), this.output.G({
            kind: 0,
            hb: a
        }))
    };
    var GM = function(a, b, c) {
        Y.call(this, a, 1124);
        this.ge = iI(this);
        this.o = X(this, b);
        this.j = X(this, c)
    };
    _.T(GM, Y);
    GM.prototype.g = function() {
        _.KB(this.j.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.KB(this.o.value, "min-width", "100%");
        this.ge.notify()
    };
    var HM = function(a, b, c, d, e) {
        Y.call(this, a, 1125);
        this.o = X(this, b);
        this.j = X(this, c);
        lI(this, d);
        lI(this, e)
    };
    _.T(HM, Y);
    HM.prototype.g = function() {
        var a = this.o.value,
            b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.KB(this.j.value, "visibility", "visible"))
    };
    var Zu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 718);
        this.slotId = b;
        this.vb = c;
        this.Md = d;
        this.o = e;
        this.C = f;
        this.output = W(this);
        this.j = new gr(this.context, this.slotId, Vu);
        this.H = X(this, g)
    };
    _.T(Zu, Y);
    Zu.prototype.g = function() {
        var a = !this.H.value;
        if (!this.Md || "height" !== this.vb || a) this.j.ya(), this.output.G(!1);
        else {
            a = new sk;
            _.S(this, a);
            var b = new GM(this.context, this.o, this.C);
            J(a, b);
            J(a, this.j);
            J(a, new HM(this.context, this.o, this.C, this.j.output, b.ge));
            Bk(a);
            this.output.G(!0)
        }
    };
    var IM = [2, 1];
    var JM = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Y.call(this, a, 699);
        this.aa = b;
        this.slotId = c;
        this.j = d;
        this.Jd = e;
        this.vb = f;
        this.Oa = g;
        this.Qc = iI(this);
        this.H = X(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.J = jI(this, m);
        this.P = X(this, n)
    };
    _.T(JM, Y);
    JM.prototype.g = function() {
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
                        n, p = a.parentElement ? null == (n = Zm(a.parentElement, window)) ? void 0 : n.width : void 0;
                    n = c.width;
                    var r = c.height,
                        v = 0;
                    var w = 0;
                    var y = Hm(k);
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
                        yp(b, a, y);
                        b = {};
                        if ((_.H = [2, 5], _.z(_.H, "includes")).call(_.H, d) || v && n > vp(e.width)) b.width = w, b["max-width"] = w;
                        r && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (G in b)
                                if (Object.prototype.hasOwnProperty.call(b, G)) {
                                    var G = !1;
                                    break c
                                }
                            G = !0
                        }
                        G ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.xp(a, b), b = !0)
                    } else b = !1;
                    b: switch (w = c.width, G = f.defaultView || f.parentWindow || _.t, d) {
                        case 2:
                        case 5:
                            a = zp(a, G, w, e, l);
                            break b;
                        case 1:
                        case 4:
                            if (e = a.parentElement)
                                if (l = Sm(e)) {
                                    B = l.width;
                                    l = Ym(h, G.document);
                                    n = Zm(l, G);
                                    r = n.position;
                                    C = vp(n.width) || 0;
                                    v = Zm(e, G);
                                    y = "rtl" === v.direction ? "Right" : "Left";
                                    l = y.toLowerCase();
                                    G = "absolute" === r ? 0 : vp(v["padding" + y]);
                                    v = vp(v["border" + y + "Width"]);
                                    w = Math.max(Math.round((B - Math.max(C, w)) / 2), 0);
                                    B = {};
                                    C = 0;
                                    var F = Tp(n);
                                    F && (C = F[4] * ("Right" === y ? -1 : 1), y = F[3] || 1, 1 !== (F[0] || 1) || 1 !== y) && (F[0] = 1, F[3] = 1, B.transform = "matrix(" + F.join(",") + ")");
                                    y = 0;
                                    switch (r) {
                                        case "fixed":
                                            var N, R = null != (N = Number($m(n.getPropertyValue(l)))) ? N : 0,
                                                M;
                                            N = null != (M = e.getBoundingClientRect().left) ? M : 0;
                                            y = R - N;
                                            break;
                                        case "relative":
                                            y = null != (R = Number($m(n.getPropertyValue(l)))) ? R : 0;
                                            break;
                                        case "absolute":
                                            B[l] = "0"
                                    }
                                    B["margin-" + l] = w - G - v - y - C + "px";
                                    _.xp(a, B);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (_.z(IM, "includes").call(IM, d) && Bp(g, f, h, k, d, c.width, c.height, p, "gpt_slotexp", m), f = !0) : f = !1;
                    break;
                case 3:
                    d = this.context, M = this.aa, f = this.slotId, h = this.j, p = this.Jd, k = this.Oa, m = a.parentElement ? null == (g = Zm(a.parentElement, window)) ? void 0 : g.width : void 0, g = c.width, N = c.height, R = vp(e.height) || 0, N >= R || "none" === e.display || "hidden" === e.visibility || !p || -12245933 === p.width || a.getBoundingClientRect().bottom <= p.height ? f = !1 : (p = {
                        height: N + "px"
                    }, yp(b, a, p), _.xp(a, p), Bp(d, M, f, h, 3, g, N, m, "gpt_slotred", k), f = !0)
            }!f && _.E(DD) && Bp(this.context, this.aa, this.slotId, this.j, 0, c.width, c.height, void 0, "gpt_pgbrk", this.Oa)
        }
        this.Qc.notify()
    };
    var KM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1114);
        this.J = b;
        this.ja = c;
        this.j = d;
        this.H = e;
        this.C = W(this);
        this.o = W(this);
        this.P = X(this, f)
    };
    _.T(KM, Y);
    KM.prototype.g = function() {
        if (this.J) {
            var a = this.J.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0]) LM(this);
            else {
                var b = a[1];
                a = MM(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1], "ratio" === c ? c = a && this.j && this.H ? Math.floor(this.H / this.j * a) : null : (c = Number(c), c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                if (a || c) {
                    var d, e;
                    this.C.G(new _.Rm(null != (d = null != a ? a : this.j) ? d : 0, null != (e = null != c ? c : this.H) ? e : 0));
                    this.o.G(b)
                } else LM(this)
            }
        } else LM(this)
    };
    var MM = function(a, b) {
            b = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
            if (!b) return null;
            b = b[1];
            if ("viewport" === b) return a.ja;
            if ("parent" === b) {
                var c, d, e;
                return (b = null != (e = null == (d = Sm(null == (c = a.P.value) ? void 0 : c.parentElement)) ? void 0 : d.width) ? e : null) ? Math.min(b, a.ja) : null
            }
            a = Number(b);
            return 0 <= a ? a : null
        },
        LM = function(a) {
            a.C.ba();
            a.o.G([])
        };
    var NM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 681);
        this.adUnitPath = b;
        this.P = c;
        this.H = d;
        this.Pf = e;
        this.j = f;
        this.Ga = W(this);
        this.Ja = W(this);
        this.Be = W(this);
        this.cf = W(this);
        this.fa = jI(this, g);
        this.W = jI(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.J = X(this, m)
    };
    _.T(NM, Y);
    NM.prototype.g = function() {
        var a = OM(this),
            b = this.W.value,
            c;
        if (c = !this.H && a && b) this.o.value.length ? (c = this.adUnitPath.split("/"), c = _.z(this.o.value, "includes").call(this.o.value, c[c.length - 1])) : c = !0;
        if (c) {
            var d = this.J.value,
                e, f;
            c = null != (f = null == (e = Sm(d.parentElement)) ? void 0 : e.width) ? f : 0;
            e = b.width;
            b = b.height;
            PM(this, !0, e, b, {
                kind: 0,
                hb: '<html><body style="height:' + (b - 2 + "px;width:" + (e - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (e + "x" + b + "</p></body></html>")
            }, e <= c ? 1 : 2, d)
        } else if (a = this.fa.value, this.H) PM(this, !1, null != (d = this.j) ? d : 0, null != a ? a : 0, this.C.value);
        else {
            if (null == this.j) throw new Bo("Missing 'width'.");
            if (null == a) throw new Bo("Missing 'height'.");
            PM(this, !1, this.j, a, this.C.value)
        }
    };
    var OM = function(a) {
            a = Hm(a.P)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Rm(a[0], a[1]) : null
        },
        PM = function(a, b, c, d, e, f, g) {
            f = void 0 === f ? a.Pf : f;
            a.cf.G(b);
            a.Ja.G(new _.Rm(c, d));
            a.Ga.G(e);
            a.Be.Ha(f);
            g && _.KB(g, "opacity", .5)
        };
    var vu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        sk.call(this);
        b = new KM(a, b, c.width, k, l, n);
        J(this, b);
        a = new NM(a, d, e, f, h, k, g, b.C, b.o, m, n);
        J(this, a);
        this.K = {
            Ga: a.Ga,
            Ja: a.Ja,
            Be: a.Be,
            cf: a.cf
        }
    };
    _.T(vu, sk);
    var QM = function(a, b, c) {
        Y.call(this, a, 698);
        this.B = b;
        this.output = W(this);
        this.j = X(this, c)
    };
    _.T(QM, Y);
    QM.prototype.g = function() {
        this.output.Ha(Zm(this.j.value, this.B))
    };
    var Cu = function(a, b, c, d, e, f, g, h, k, l, m) {
        sk.call(this);
        var n = new QM(a, b, f);
        J(this, n);
        a = new JM(a, b.document, d, e, c, h, m, f, g, k, l, n.output);
        J(this, a);
        this.Qc = a.Qc
    };
    _.T(Cu, sk);
    var RM = function(a, b, c, d, e) {
        Y.call(this, a, 937, _.Pf(mE));
        this.sb = b;
        this.j = W(this);
        this.o = W(this);
        this.C = W(this);
        this.wc = c;
        this.uc = d;
        this.cd = e
    };
    _.T(RM, Y);
    RM.prototype.g = function() {
        var a = {},
            b;
        if (null == (b = _.Am(this.sb, Oz, 2)) ? 0 : _.Q(b, 2)) a["*"] = {
            kf: !0
        };
        b = new _.u.Set;
        for (var c = _.x(_.fk(this.sb, Nz, 1)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.x([_.I(d, 2), _.I(d, 1)].filter(function(p) {
                    return !!p
                })), f = e.next(); !f.done; f = e.next()) a[f.value] = {
                kf: _.Q(d, 3)
            };
            d = _.x(ue(d, 4, Zc, 2));
            for (e = d.next(); !e.done; e = d.next()) b.add(e.value)
        }
        this.wc.G(a);
        this.j.G([].concat(_.xi(b)));
        var g, h;
        a = null == (g = _.Am(this.sb, Oz, 2)) ? void 0 : null == (h = _.Am(g, Iz, 1)) ? void 0 : _.fk(h, Hz, 1);
        this.o.Ha((null == a ? 0 : a.length) ? a : null);
        var k;
        this.uc.G(!(null == (k = _.Am(this.sb, Oz, 2)) || !_.Q(k, 4)));
        var l;
        this.cd.G(!(null == (l = _.Am(this.sb, Oz, 2)) || !_.Q(l, 5)));
        var m, n;
        g = null == (m = _.Am(this.sb, Oz, 2)) ? void 0 : null == (n = _.Am(m, Iz, 3)) ? void 0 : _.fk(n, Hz, 1);
        this.C.Ha((null == g ? 0 : g.length) ? g : null)
    };
    RM.prototype.K = function(a) {
        this.l(a)
    };
    RM.prototype.l = function() {
        this.wc.G({});
        this.j.G([]);
        this.o.ba();
        this.uc.G(!1);
        this.cd.G(!1);
        this.C.ba()
    };
    var SM = function(a, b, c, d) {
        Y.call(this, a, 980);
        this.ib = b;
        this.output = new Xr;
        this.j = X(this, c);
        this.o = X(this, d)
    };
    _.T(SM, Y);
    SM.prototype.g = function() {
        (_.H = _.z(Object, "entries").call(Object, this.j.value), _.z(_.H, "find")).call(_.H, function(c) {
            var d = _.x(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.kf)
        }) && (this.ib.M = !0);
        Pn(25, this.context);
        for (var a = _.x(this.o.value), b = a.next(); !b.done; b = a.next()) lh(b.value);
        this.output.notify()
    };
    var TM = function(a, b, c, d) {
        Y.call(this, a, 931);
        this.j = jI(this, b);
        this.Pc = c;
        this.vc = d
    };
    _.T(TM, Y);
    TM.prototype.g = function() {
        var a = this.j.value,
            b = new _.u.Map;
        this.Pc.G(new _.u.Map);
        if (a) {
            var c;
            a = _.x(null != (c = this.j.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = _.fk(d, Gz, 1);
                c = 1 === _.jg(c[0], 1, 0) ? ez(c[0]) : fz(c[0], dz);
                d = _.Kg(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.vc.G(b)
    };
    TM.prototype.l = function() {
        this.Pc.G(new _.u.Map);
        this.vc.G(new _.u.Map)
    };
    var UM = function(a, b, c) {
        Y.call(this, a, 981);
        this.o = W(this);
        this.C = jI(this, b);
        this.j = c
    };
    _.T(UM, Y);
    UM.prototype.g = function() {
        var a = new _.u.Map,
            b, c = _.x(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = _.fk(b, Gz, 1);
            d = 1 === _.jg(d[0], 1, 0) ? ez(d[0]) : fz(d[0], dz);
            a.set(d, _.Kg(b, 2))
        }
        this.o.G(a);
        this.j.G(new Ai)
    };
    UM.prototype.l = function() {
        this.o.G(new _.u.Map);
        var a = this.j,
            b = a.G;
        var c = new Ai;
        c = _.gi(c, 1, 2);
        b.call(a, c)
    };
    var VM = function(a, b, c, d, e, f) {
        Y.call(this, a, 976);
        this.nextFunction = d;
        this.j = e;
        this.requestBidsConfig = f;
        lI(this, b);
        lI(this, c)
    };
    _.T(VM, Y);
    VM.prototype.g = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.j, [this.requestBidsConfig])
    };
    var WM = function(a, b, c, d, e, f) {
        Y.call(this, a, 975);
        this.o = b;
        this.j = c;
        this.C = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new Xr
    };
    _.T(WM, Y);
    WM.prototype.g = function() {
        Yp(this.pbjs, this.o, this.j, this.C, this.requestBidsConfig);
        this.output.notify()
    };
    WM.prototype.l = function() {
        this.output.notify()
    };
    var XM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1100);
        this.pbjs = b;
        this.o = c;
        this.j = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.output = new Xr
    };
    _.T(XM, Y);
    XM.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.Pf(ID);
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
                    b = null != (f = null != (g = b) ? g : null == (a = this.o) ? void 0 : a.get(_.sh(e))) ? f : 0;
                    this.Nd(b)
                }
        }
        this.output.notify()
    };
    XM.prototype.Nd = function(a) {
        var b;
        null != (b = this.j) && Zh(b, 2, this.C);
        if (a) {
            var c;
            null == (c = this.j) || _.gi(c, 1, 1);
            var d;
            null != (d = this.j) && _.di(d, 3, a);
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
    XM.prototype.l = function() {
        this.output.notify()
    };
    var YM = function(a, b, c, d, e, f, g, h) {
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
    _.T(YM, _.V);
    YM.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new sk;
            _.S(this, d);
            var e = new XM(this.g, this.pbjs, this.K, this.I, this.o, a),
                f = new WM(this.g, this.j, this.l, this.D, this.pbjs, a);
            J(d, e);
            J(d, f);
            J(d, new VM(this.g, f.output, e.output, c, b, a));
            Bk(d)
        }
    };
    var $p = function(a, b) {
        this.push = L(a, 932, function(c) {
            b.push(c)
        })
    };
    var ZM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 951);
        this.B = window;
        this.H = X(this, b);
        this.o = jI(this, d);
        this.C = X(this, e);
        this.P = X(this, f);
        this.j = jI(this, g);
        this.W = jI(this, h);
        this.J = X(this, k);
        lI(this, c);
        this.vf = null != l ? l : W(this);
        this.wf = null != m ? m : W(this)
    };
    _.T(ZM, Y);
    ZM.prototype.g = function() {
        var a = !!Do().pbjs_hooks;
        this.wf.G(a);
        this.vf.Ha(a ? null : _.Zf());
        var b, c = null == (b = this.o.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.j.value) ? void 0 : d.size) || _.Pf(ID);
        d = this.H.value;
        var e, f = null != (e = Do().pbjs_hooks) ? e : [];
        e = new YM(this.context, this.o.value, this.C.value, this.P.value, this.j.value, this.W.value, this.J.value, d);
        _.S(this, e);
        f = _.x(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) Do().pbjs_hooks = aq(this.context, e);
        !c && !b || a || Zp(d, this.B)
    };
    var $M = function(a, b, c) {
        Y.call(this, a, 966);
        this.B = b;
        this.ic = c
    };
    _.T($M, Y);
    $M.prototype.g = function() {
        var a = this,
            b = Uh(this.B);
        if (b) this.ic.G(b);
        else if (b = Object.getOwnPropertyDescriptor(this.B, "_pbjsGlobals"), !b || b.configurable) {
            var c = null;
            Object.defineProperty(this.B, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Uh(a.B)) && a.ic.G(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    $M.prototype.l = function() {};
    var fq = function(a, b, c, d, e) {
        Y.call(this, a, 1146, _.Pf(mE));
        this.ib = b;
        this.B = d;
        this.j = e;
        this.o = kI(this, c)
    };
    _.T(fq, Y);
    fq.prototype.g = function() {
        var a = this.o.value,
            b = new sk;
        _.S(this, b);
        var c = new $M(this.context, this.B, this.j.ic);
        J(b, c);
        if (a) {
            a = new RM(this.context, a, this.j.wc, this.j.uc, this.j.cd);
            J(b, a);
            var d = new SM(this.context, this.ib, a.wc, a.j);
            J(b, d);
            var e = new TM(this.context, a.o, this.j.Pc, this.j.vc);
            J(b, e);
            var f = new UM(this.context, a.C, this.j.Of);
            J(b, f);
            c = new ZM(this.context, c.ic, d.output, e.vc, this.j.uc, e.Pc, f.o, f.j, a.cd, this.j.vf, this.j.wf);
            J(b, c)
        } else aN(this);
        Bk(b)
    };
    var aN = function(a) {
        a.j.wc.G({});
        a.j.vc.G(new _.u.Map);
        a.j.uc.G(!1);
        a.j.Pc.G(new _.u.Map);
        a.j.vf.ba();
        a.j.wf.G(!1);
        a.j.Of.G(new Ai);
        a.j.cd.G(!1)
    };
    fq.prototype.K = function(a) {
        this.l(a)
    };
    fq.prototype.l = function() {
        aN(this)
    };
    var bN = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 920);
        this.R = b;
        this.T = c;
        this.pbjs = f;
        this.o = g;
        this.j = W(this);
        this.C = [];
        this.P = X(this, d);
        this.J = jI(this, e.vc);
        this.H = X(this, e.uc);
        this.fa = X(this, e.Pc);
        this.W = jI(this, e.Of)
    };
    _.T(bN, Y);
    bN.prototype.g = function() {
        for (var a = new _.u.Map, b = !1, c = _.x(this.P.value), d = c.next(), e = {}; !d.done; e = {
                mh: void 0
            }, d = c.next()) {
            d = d.value;
            for (var f = {}, g = _.x(im(this.T[d.getDomId()])), h = g.next(); !h.done; h = g.next()) h = h.value, f[_.I(h, 1)] = pm(h);
            var k = h = g = void 0;
            (f = Ki(this.pbjs, {
                ed: d.getDomId(),
                adUnitCode: d.getAdUnitPath()
            }, f, null != (h = this.J.value) ? h : void 0, this.H.value, this.fa.value, null != (k = null == (g = this.W) ? void 0 : g.value) ? k : void 0)) ? (b = !0, a.set(d, f)) : (null === f && this.C.push(d), a.set(d, new Bi));
            e.mh = d.getDomId() + d.getAdUnitPath();
            Ci.has(e.mh) || _.rp(d, function(l) {
                return function() {
                    return Ci.delete(l.mh)
                }
            }(e))
        }
        b ? (this.o.Ha(a), this.j.G(this.C)) : (this.o.ba(), this.j.ba())
    };
    bN.prototype.K = function(a) {
        this.l(a)
    };
    bN.prototype.l = function(a) {
        this.R.error(mL(a.message));
        this.o.ba();
        this.j.ba()
    };
    var cN = function(a, b, c, d) {
        Y.call(this, a, 1019);
        this.T = c;
        this.pbjs = d;
        this.j = jI(this, b)
    };
    _.T(cN, Y);
    cN.prototype.g = function() {
        dN(this)
    };
    var dN = function(a) {
        if (!(Math.random() >= _.Pf(GD))) {
            var b = (a.j.value || []).filter(function(k) {
                return im(a.T[k.getDomId()]).some(function(l) {
                    return "hb_pb" === hk(l, 1)
                })
            });
            if (b.length) {
                var c, d, e, f, g, h = (null == (c = a.pbjs) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.xi(new _.u.Set(null == (e = a.pbjs) ? void 0 : e.adUnits.map(function(k) {
                    return k.code
                })))) : _.z(Object, "keys").call(Object, (null == (f = a.pbjs) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                c = new cp("haux");
                ep(c, "ius", b.map(function(k) {
                    return k.getAdUnitPath()
                }).join("~"));
                ep(c, "dids", b.map(function(k) {
                    return k.getDomId()
                }).join("~"));
                ep(c, "paucs", h.join("~"));
                dp(c, a.context);
                gp(c)
            }
        }
    };
    var hq = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1153);
        this.R = b;
        this.T = c;
        this.networkCode = d;
        this.H = e;
        this.Qd = f;
        this.j = h;
        this.J = X(this, f.wc);
        this.o = new bI(f.ic);
        g && (this.C = jI(this, g))
    };
    _.T(hq, Y);
    hq.prototype.g = function() {
        var a, b = null == (a = this.o) ? void 0 : a.value;
        if (a = eN(this)) null != b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.R.error(lL()), a = !1) : a = !0 : a = !1;
        if (a) {
            a = new sk;
            var c = new bN(this.context, this.R, this.T, this.H, this.Qd, b, this.j.lh);
            J(a, c);
            J(a, new cN(this.context, c.j, this.T, b));
            Bk(a)
        } else this.j.lh.ba()
    };
    var eN = function(a) {
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
    var fN = function(a, b, c, d, e) {
        Y.call(this, a, 982);
        this.Jb = b;
        this.Oa = c;
        this.j = d;
        this.uf = e
    };
    _.T(fN, Y);
    fN.prototype.g = function() {
        for (var a = this, b = _.x(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
                Pe: void 0,
                Pg: void 0
            }, c = b.next()) d.Pe = c.value, d.Pg = function(e) {
            return function(f) {
                if (a.j === f.adId) {
                    var g = new cp("hbm_brt");
                    dp(g, a.context);
                    ep(g, "et", e.Pe);
                    ep(g, "sf", a.Jb);
                    ep(g, "qqid", a.Oa);
                    var h, k, l;
                    ep(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                    gp(g)
                }
            }
        }(d), (0, this.uf.onEvent)(d.Pe, d.Pg), _.rp(this, function(e) {
            return function() {
                return void Nl(a.context, a.id, function() {
                    var f, g;
                    return void(null == (g = (f = a.uf).offEvent) ? void 0 : g.call(f, e.Pe, e.Pg))
                }, !0)
            }
        }(d))
    };
    fN.prototype.l = function() {};
    var jq = function(a, b, c, d, e) {
        Y.call(this, a, 1134);
        this.o = b;
        this.Jb = c;
        this.Oa = d;
        this.j = new bI(e)
    };
    _.T(jq, Y);
    jq.prototype.g = function() {
        var a;
        if (this.o && null != (a = this.j.value) && a.onEvent) {
            a = new sk;
            var b = new fN(this.context, this.Jb, this.Oa, this.o, this.j.value);
            J(a, b);
            Bk(a)
        }
    };
    var jN = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.g = new _.u.Map;
            this.A = new _.u.Map;
            this.timer = _.Nf(Jl);
            MJ() && (_.rb(window, "DOMContentLoaded", Hl(a, 334, function() {
                for (var f = _.x(e.g), g = f.next(); !g.done; g = f.next()) {
                    var h = _.x(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    gN(e, g, h) && e.g.delete(g)
                }
            })), b.listen(dK, function(f) {
                f = f.detail;
                var g = f.T;
                return void hN(e, iN(d, f.kh), gt(g, 20))
            }), b.listen(eK, function(f) {
                f = f.detail;
                var g = f.T;
                f = iN(d, f.kh);
                g = gt(g, 20);
                var h = e.A.get(f);
                null != h ? OJ(h, g) : hN(e, f, g)
            }))
        },
        hN = function(a, b, c) {
            gN(a, b, c) ? a.g.delete(b) : (a.g.set(b, c), _.rp(b, function() {
                return a.g.delete(b)
            }))
        },
        gN = function(a, b, c) {
            var d = Ym(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new LJ({
                B: window,
                timer: a.timer,
                Wb: d,
                ub: function(e) {
                    return void Ll(a.context, 336, e)
                },
                Gm: _.E(RF)
            });
            if (!d.A) return !1;
            OJ(d, c);
            a.A.set(b, d);
            lK(a.L, b, function() {
                return void a.A.delete(b)
            });
            return !0
        };
    var kN = function(a, b, c, d, e) {
        Y.call(this, a, 1058);
        this.B = b;
        this.Z = c;
        this.output = iI(this);
        d && (this.j = jI(this, d.Zc));
        lI(this, e)
    };
    _.T(kN, Y);
    kN.prototype.g = function() {
        var a;
        if (qh(this.B.isSecureContext, this.B, this.B.document) && null != (a = this.j) && a.value && !_.E(KD) && fh(this.Z)) {
            a = {
                message: "goog:spam:client_age",
                pvsid: this.context.pvsid,
                useObfuscatedKey: _.E(LD)
            };
            var b = this.j.value;
            b(a)
        }
        this.output.notify()
    };
    var lN = function(a, b, c) {
        Y.call(this, a, 1199);
        this.j = c;
        this.o = jI(this, b)
    };
    _.T(lN, Y);
    lN.prototype.g = function() {
        var a = this.o.value;
        a && (a = SL(this.j, a.getSlotElementId()), Zh(a, 30, !0))
    };
    var mN = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1109);
        this.aa = c;
        this.ca = d;
        this.j = e;
        this.C = f;
        this.H = g;
        this.o = h;
        this.output = W(this);
        this.J = jI(this, b)
    };
    _.T(mN, Y);
    mN.prototype.g = function() {
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
    var nN = {},
        pq = (nN[64] = oL, nN[134217728] = pL, nN[32768] = qL, nN[536870912] = rL, nN[8] = sL, nN[512] = tL, nN[1048576] = uL, nN[4194304] = wL, nN);
    var oN = function(a) {
        return "22639388115" === Gl(a.getAdUnitPath())
    };
    var pN = function(a, b, c, d, e, f) {
        Y.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.yb = d;
        this.o = e;
        this.R = f;
        this.output = W(this);
        this.j = W(this)
    };
    _.T(pN, Y);
    pN.prototype.g = function() {
        var a = Fq(this.context, this.R, this.o, {
            Yh: this.format,
            adUnitPath: this.adUnitPath,
            yb: this.yb
        });
        this.j.Ha(a);
        this.output.Ha(a ? a.g : null)
    };
    var qN = function(a, b, c, d) {
        Y.call(this, a, 1111);
        this.j = c;
        this.o = d;
        this.C = jI(this, b)
    };
    _.T(qN, Y);
    qN.prototype.g = function() {
        var a = this.C.value;
        a && (a = SL(this.j, a.getSlotElementId()), ok(a, 27, Wz, this.o))
    };
    var rN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v) {
        sk.call(this);
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
        a = J(this, new pN(this.context, this.adUnitPath, this.format, this.yb, this.fa, this.R));
        this.o && J(this, new qN(this.context, a.output, this.K, this.o));
        this.ga && J(this, new lN(this.context, a.output, this.K));
        J(this, new mN(this.context, a.output, this.aa, this.ca, this.W, this.ia, this.P, this.J));
        this.g = {
            Lo: a.j
        }
    };
    _.T(rN, sk);
    var av = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 1198);
        this.aa = b;
        this.googletag = c;
        this.ca = d;
        this.j = e;
        this.o = f;
        this.R = g;
        this.rd = h;
        this.C = k
    };
    _.T(av, Y);
    av.prototype.g = function() {
        for (var a = this, b = _.x(this.C), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d.getAdUnitPath();
            d = _.jg(d, 2, 0);
            c && d && (this.rd.add(Gl(c)), c = new rN(this.context, this.aa, c, d, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, this.ca, this.j, this.o, this.R, !0), Bk(c), _.S(this, c))
        }
    };
    var Mt = function(a, b) {
        Y.call(this, a, 1110);
        this.B = b;
        this.output = W(this)
    };
    _.T(Mt, Y);
    Mt.prototype.g = function() {
        var a = this.B;
        a = _.E(MF) && void 0 !== a.credentialless && (_.E(NF) || a.crossOriginIsolated);
        this.output.G(a)
    };
    var sN = function(a, b, c, d, e, f) {
        Y.call(this, a, 935);
        this.L = b;
        this.O = c;
        this.aa = d;
        this.output = iI(this);
        this.j = X(this, e);
        lI(this, f)
    };
    _.T(sN, Y);
    sN.prototype.g = function() {
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
        Y.call(this, a, 1208);
        this.j = b;
        this.hg = c;
        this.output = new Xr
    };
    _.T(Lq, Y);
    Lq.prototype.g = function() {
        var a, b = null == (a = this.hg) ? void 0 : _.Am(a, oA, 1);
        if (b) {
            a = this.j;
            var c = new kH;
            c = Zh(c, 5, !0);
            rH(a, "__eoi", b, c)
        }
        this.output.notify()
    };
    var Xq = function(a, b, c, d) {
        Y.call(this, a, 896);
        this.og = b;
        this.Gc = d;
        this.Mc = W(this);
        c && lI(this, c)
    };
    _.T(Xq, Y);
    Xq.prototype.g = function() {
        this.Mc.G(this.og.ld(".google.cn" === this.Gc))
    };
    var eu = function(a, b) {
        Y.call(this, a, 1018);
        this.gd = iI(this);
        this.j = jI(this, b)
    };
    _.T(eu, Y);
    eu.prototype.g = function() {
        var a, b, c;
        if (null == (a = this.j.value)) a = void 0;
        else {
            var d;
            null == (b = _.Am(a, eG, 5)) ? d = void 0 : d = ue(b, 1, Zc, 2);
            a = d
        }
        a = _.x(null != (c = a) ? c : []);
        for (c = a.next(); !c.done; c = a.next()) lh(c.value);
        this.gd.notify()
    };
    var fu = function(a, b) {
        Y.call(this, a, 1070);
        this.j = W(this);
        this.o = jI(this, b)
    };
    _.T(fu, Y);
    fu.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : _.Am(a, eG, 5);
        if (b) {
            a = [];
            for (var c = _.x(ue(b, 2, Re, 1, void 0, void 0, 4096)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new Wz;
                var f = new Uz;
                e = _.mk(f, 1, gd(e));
                d = _.ii(d, 2, e);
                null != Ji(b, 3) && (e = new Sz, e = _.gi(e, 1, 1), f = _.az(b, 3), e = _.di(e, 2, f), _.ii(d, 3, e));
                a.push(d)
            }
            this.j.G(a)
        } else this.j.G([])
    };
    var tN = function(a, b, c, d) {
        Y.call(this, a, 1016);
        this.output = W(this);
        this.o = jI(this, b);
        this.j = jI(this, c);
        this.C = mI(this, [b, d])
    };
    _.T(tN, Y);
    tN.prototype.g = function() {
        if (this.j.value) {
            var a = this.o.value || this.C.value;
            a && uN(this, a) ? this.output.G(a) : this.output.ba()
        } else this.output.ba()
    };
    tN.prototype.K = function(a) {
        this.l(a)
    };
    tN.prototype.l = function() {
        this.output.ba()
    };
    var uN = function(a, b) {
        return _.fk(a.j.value, Qz, 1).some(function(c) {
            return _.I(c, 1) === b
        })
    };
    var vN = function(a, b) {
        Y.call(this, a, 1015);
        this.j = W(this);
        this.o = jI(this, b)
    };
    _.T(vN, Y);
    vN.prototype.g = function() {
        if (this.o.value)
            if (_.fk(this.o.value, Qz, 1).length) {
                var a = _.fk(this.o.value, Qz, 1)[0];
                (_.H = [2, 3], _.z(_.H, "includes")).call(_.H, _.jg(a, 3, 0)) ? this.j.G(_.I(a, 1)) : this.j.ba()
            } else this.j.ba();
        else this.j.ba()
    };
    vN.prototype.K = function(a) {
        this.l(a)
    };
    vN.prototype.l = function() {
        this.j.ba()
    };
    var wN = function(a, b, c) {
        Y.call(this, a, 1017);
        this.B = c;
        this.output = iI(this);
        this.j = jI(this, b)
    };
    _.T(wN, Y);
    wN.prototype.g = function() {
        var a = this;
        if (this.j.value) {
            var b = yG(this.B, this.j.value, function(c) {
                if (!c) {
                    c = lg(b.g);
                    for (var d = _.x(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.Sj(e.value)
                }
                a.output.notify()
            });
            b.start(_.E(WD))
        } else this.output.notify()
    };
    wN.prototype.K = function(a) {
        this.l(a)
    };
    wN.prototype.l = function() {
        this.output.notify()
    };
    var xN = function(a, b) {
        Y.call(this, a, 1056);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(xN, Y);
    xN.prototype.g = function() {
        var a = Gl(this.j.value.getAdUnitPath());
        this.output.G(a)
    };
    xN.prototype.K = function(a) {
        this.l(a)
    };
    xN.prototype.l = function() {
        this.output.ba()
    };
    var du = function(a, b, c, d) {
        Y.call(this, a, 906, _.Pf(nE));
        this.j = iI(this);
        if (b === b.top) {
            var e = new sk;
            _.S(this, e);
            var f = new vN(a, c);
            J(e, f);
            d = new zr(a, d, dK, function(g) {
                return g.detail.T
            });
            J(e, d);
            d = new xN(a, d.output);
            J(e, d);
            a = new tN(a, f.j, c, d.output);
            J(e, a);
            b = new wN(this.context, a.output, b);
            J(e, b);
            fI(this.D, b.output, !0);
            Bk(e)
        } else this.j.notify()
    };
    _.T(du, Y);
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
        Y.call(this, a, 934);
        this.B = b;
        this.slotId = c;
        lI(this, d);
        this.j = X(this, e)
    };
    _.T(Ku, Y);
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
                    var h = ri(g, 1, d ? "1" : "0");
                    var k = ri(_.di(h, 2, 2147483647), 3, "/");
                    var l = ri(k, 4, a.B.location.hostname);
                    var m = new _.pH(a.B);
                    rH(m, "__gpi_opt_out", l, f);
                    if (d || e) sH(m, "__gads", f), sH(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var yN = function(a, b, c) {
        Y.call(this, a, 944);
        this.B = b;
        this.j = new _.pH(this.B);
        this.o = X(this, c)
    };
    _.T(yN, Y);
    yN.prototype.g = function() {
        var a = this.o.value;
        if (qH(this.j, a)) {
            var b = _.Qn(this.j, "__gpi_opt_out", a);
            if (b) {
                var c = new oA;
                b = ri(c, 1, b);
                b = ri(_.di(b, 2, 2147483647), 3, "/");
                b = ri(b, 4, this.B.location.hostname);
                rH(this.j, "__gpi_opt_out", b, a)
            }
        }
    };
    var zN = function(a, b, c, d) {
        Y.call(this, a, 821);
        this.Z = b;
        this.Da = c;
        this.j = X(this, d)
    };
    _.T(zN, Y);
    zN.prototype.g = function() {
        if (fh(this.Z)) {
            var a = new _.u.Set;
            var b = _.fk(this.j.value, oA, 14);
            b = _.x(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = gz(c, 5)) ? d : 1;
                a.has(e) || (rH(this.Da, 2 === e ? "__gpi" : "__gads", c, this.Z), a.add(e))
            }
        }
    };
    var AN = function() {
            this.A = [];
            this.hostpageLibraryTokens = [];
            this.g = {}
        },
        Dt = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.g[b]) ? void 0 : _.z(c, "values").call(c)) ? d : [];
            return [].concat(_.xi(a))
        };
    var BN = function(a, b, c, d) {
        Y.call(this, a, 822);
        this.slotId = b;
        this.ab = c;
        this.j = X(this, d)
    };
    _.T(BN, Y);
    BN.prototype.g = function() {
        var a = ue(this.j.value, 23, _.Xc, 2);
        a = _.x(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = this.ab;
            if (!_.z(c.A, "includes").call(c.A, b) && (_.H = [1, 2, 3], _.z(_.H, "includes")).call(_.H, b)) {
                var d = uH[b];
                if (d) {
                    var e = b + "_hostpage_library";
                    if (d = _.hp(document, d)) d.id = e
                }
                c.A.push(b);
                e = new vH(b);
                c.hostpageLibraryTokens.push(e);
                c = Do();
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
        Y.call(this, a, 721);
        this.B = b;
        this.bf = c;
        this.o = X(this, d);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T($u, Y);
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
            _.xp(p, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            g.appendChild(n);
            g.appendChild(p);
            _.xp(f, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.xp(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var r;
            _.xp(g, {
                position: "relative",
                display: (null == (r = this.B.screen.orientation) ? 0 : r.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            sp(this, 722, this.B, "orientationchange", function() {
                var v;
                (null == (v = a.B.screen.orientation) ? 0 : v.angle) ? _.xp(g, {
                    display: "none"
                }): _.xp(g, {
                    display: "block"
                })
            });
            _.rp(this, function() {
                _.ZA(n);
                _.ZA(p);
                g.style.position = m;
                g.style.height = h;
                g.style.width = k;
                g.style.display = l
            })
        }
    };
    var CN = _.Bw(["https://td.doubleclick.net/td/kb?kbli=", ""]),
        Hu = function(a, b, c, d, e) {
            Y.call(this, a, 1007);
            this.yg = b;
            this.j = X(this, d);
            c && (this.o = X(this, c));
            e && lI(this, e)
        };
    _.T(Hu, Y);
    Hu.prototype.g = function() {
        if (fh(this.j.value)) {
            var a;
            if (null == (a = this.o) || !a.value) {
                var b = this.yg;
                if (b.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
                    a = document.createElement("iframe");
                    b = Wa(CN, encodeURIComponent(b.join()));
                    a.removeAttribute("srcdoc");
                    if (b instanceof _.ox) throw new cy("TrustedResourceUrl", 3);
                    var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
                    a.setAttribute("sandbox", "");
                    for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
                    b = _.ab(b);
                    void 0 !== b && (a.src = b);
                    a.id = "koelBirdIGRegisterIframe";
                    document.head.appendChild(a)
                }
            }
        }
    };
    var tu = function(a, b, c, d) {
        Y.call(this, a, 1176);
        this.o = b;
        this.T = c;
        this.R = d;
        this.j = W(this)
    };
    _.T(tu, Y);
    tu.prototype.g = function() {
        var a, b = null != (a = this.o) ? a : new uu;
        (a = null != Ji(b, 2) ? null != dr(b) && 0 !== (0, _.Wp)() ? Ji(b, 2) * dr(b) : Ji(b, 2) : null) && _.E(jE) && (_.H = [8, 9], _.z(_.H, "includes")).call(_.H, xr(this.T)) ? (P(this.R, zL()), this.j.ba()) : this.j.Ha(a)
    };
    var Bu = function(a, b, c, d, e, f) {
        f = void 0 === f ? cr : f;
        Y.call(this, a, 666);
        this.o = f;
        this.output = iI(this);
        lI(this, b);
        e && lI(this, e);
        this.j = X(this, c);
        this.C = jI(this, d)
    };
    _.T(Bu, Y);
    Bu.prototype.g = function() {
        var a = this.C.value,
            b = this.j.value;
        null == a || 0 > a || !an(b) ? this.output.notify() : DN(this, a, b)
    };
    var DN = function(a, b, c) {
        var d = a.o(b, Hl(a.context, 291, function(e, f) {
            e = _.x(e);
            for (var g = e.next(); !g.done; g = e.next())
                if (g = g.value, !(0 >= g.intersectionRatio)) {
                    f.unobserve(g.target);
                    a.output.notify();
                    break
                }
        }));
        d ? (d.observe(c), _.rp(a, function() {
            d.disconnect()
        })) : a.output.notify()
    };
    var Au = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 664);
        this.slotId = b;
        this.Jd = c;
        this.L = d;
        this.output = iI(this);
        this.o = X(this, e);
        this.j = jI(this, f);
        g && lI(this, g)
    };
    _.T(Au, Y);
    Au.prototype.g = function() {
        var a = this,
            b, c = null != (b = this.j.value) ? b : 0;
        if (0 !== (0, _.Wp)() || 0 < c)
            if (b = HH(document), IH(document) && b && (0 < qK(this.L, this.slotId) || !EN(this)) && b) {
                var d = sp(this, 324, document, b, function() {
                    IH(document) || (d && d(), a.output.notify())
                });
                if (d) return
            }
        this.output.notify()
    };
    var EN = function(a) {
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
        Y.call(this, a, 676);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(zu, Y);
    zu.prototype.g = function() {
        var a = Om(this.j.value);
        this.output.G(a)
    };
    var er = function(a, b, c, d, e, f) {
        f = void 0 === f ? _.u.globalThis.IntersectionObserver : f;
        Y.call(this, a, 886);
        this.X = b;
        this.L = c;
        this.o = d;
        this.j = f;
        this.output = iI(this);
        e && lI(this, e)
    };
    _.T(er, Y);
    er.prototype.g = function() {
        this.X.some(function(a) {
            return !an(Ym(a))
        }) ? this.output.notify() : cI(this.output, FN(this, this.o))
    };
    var FN = function(a, b) {
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
                    g.Af = Ym(f);
                    if (!g.Af) return;
                    d.observe(g.Af);
                    lK(a.L, f, function(h) {
                        return function() {
                            return void d.unobserve(h.Af)
                        }
                    }(g))
                }
                _.rp(a, function() {
                    return void d.disconnect()
                })
            } else c()
        })
    };
    var GN = [{
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
            Y.call(this, a, 789);
            this.aa = b;
            this.googletag = c;
            this.o = d;
            this.j = e;
            this.R = f;
            this.C = g;
            this.output = W(this)
        };
    _.T(au, Y);
    au.prototype.g = function() {
        var a = this;
        GN.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.C)
        }).forEach(function(b) {
            var c = b.name;
            b = b.he;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new rN(a.context, a.aa, "/22639388115/example/" + c.toLowerCase(), b, !1, a.googletag.pubads(), function(f) {
                return void a.googletag.display(f)
            }, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, a.googletag.cmd, a.j.g, a.j, a.o, a.R, !1);
            _.S(a, c);
            Bk(c)
        })
    };
    var HN = function(a, b, c) {
        Y.call(this, a, 1163);
        _.E(Lu);
        this.j = X(this, b);
        c && lI(this, c)
    };
    _.T(HN, Y);
    HN.prototype.g = function() {
        this.j.value.Rj();
        this.j.value.Ma()
    };
    var Nu = function(a, b, c, d, e, f, g, h, k, l) {
        Y.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.gb = f;
        this.j = W(this);
        this.o = X(this, g);
        this.J = X(this, h);
        this.C = jI(this, k);
        this.H = X(this, l)
    };
    _.T(Nu, Y);
    Nu.prototype.g = function() {
        var a = this,
            b;
        if (null != (b = this.gb) && _.Q(b, 12, !1)) {
            b = this.C.value.Yk;
            var c = _.Iq(this.L, this.slotId),
                d = this.J.value,
                e = this.o.value;
            _.xp(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (IN) IN.Pj(e, this.H.value);
            else {
                var f, g;
                IN = new b(this.context, this.format, e, this.B, d, this.L, this.slotId, null != (g = null == (f = this.gb) ? void 0 : _.Am(f, fA, 16)) ? g : null);
                f = {};
                g = _.x(_.fk(this.gb, eA, 13));
                for (b = g.next(); !b.done; b = g.next()) b = b.value, f[hk(b, 1)] = hk(b, 2);
                IN.Qj(f);
                _.E(Lu) ? (IN.Mj(), this.j.G(IN)) : IN.Ma();
                kK(this.L, this.slotId, function() {
                    IN && (IN.ya(), IN = null);
                    c && _.oK(a.L, a.slotId)
                })
            }
            _.rp(this, function() {
                return _.ZA(e)
            })
        }
    };
    var IN = null;
    var Mu = function(a, b, c, d, e, f, g, h, k, l) {
        Y.call(this, a, 1155);
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
    _.T(Mu, Y);
    Mu.prototype.g = function() {
        var a;
        if (null != (a = this.gb) && null != Nn(a, 12)) {
            a = new sk;
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
            b = new HN(this.context, b.j, c);
            J(a, b);
            Bk(a)
        }
    };
    var nr = function(a, b, c) {
        Y.call(this, a, 1150);
        this.B = b;
        this.output = iI(this);
        lI(this, c)
    };
    _.T(nr, Y);
    nr.prototype.g = function() {
        var a = this;
        this.B.location.hash = "goog_game_inter";
        _.rp(this, function() {
            "goog_game_inter" === a.B.location.hash && (a.B.location.hash = "")
        });
        cI(this.output, new _.u.Promise(function(b) {
            return void sp(a, a.id, a.B, "hashchange", function(c) {
                Ax(c.oldURL, "#goog_game_inter") && b()
            })
        }))
    };
    var JN = function(a, b) {
            this.serviceName = b;
            this.slot = a.g
        },
        KN = function(a, b) {
            JN.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.vast = this.companyIds = this.yieldGroupIds = null
        };
    _.T(KN, JN);
    var LN = function() {
        JN.apply(this, arguments)
    };
    _.T(LN, JN);
    var MN = function(a, b, c) {
        JN.call(this, a, b);
        this.inViewPercentage = c
    };
    _.T(MN, JN);
    var NN = function() {
        JN.apply(this, arguments)
    };
    _.T(NN, JN);
    var ON = function() {
        JN.apply(this, arguments)
    };
    _.T(ON, JN);
    var PN = function() {
        JN.apply(this, arguments)
    };
    _.T(PN, JN);
    var QN = function() {
        JN.apply(this, arguments)
    };
    _.T(QN, JN);
    var RN = function(a, b, c, d) {
        JN.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.T(RN, JN);
    var SN = function(a, b, c) {
        JN.call(this, a, b);
        this.payload = c
    };
    _.T(SN, JN);
    var TN = function() {
        JN.apply(this, arguments)
    };
    _.T(TN, JN);
    var UN = function(a, b, c) {
        JN.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.T(UN, JN);
    var VN = function() {
        JN.apply(this, arguments)
    };
    _.T(VN, JN);
    var or = function(a, b, c, d, e, f) {
        Y.call(this, a, 1151);
        this.slotId = b;
        this.za = c;
        lI(this, d);
        a = [e];
        f && a.push(f);
        f = new dI(a, !0);
        fI(this.D, f)
    };
    _.T(or, Y);
    or.prototype.g = function() {
        ht(this.za, "gameManualInterstitialSlotClosed", 1148, new VN(this.slotId, "publisher_ads"))
    };
    var lr = function(a, b, c, d) {
        Y.call(this, a, 1149);
        this.slotId = b;
        this.za = c;
        this.output = iI(this);
        lI(this, d)
    };
    _.T(lr, Y);
    lr.prototype.g = function() {
        var a = new _.Ah,
            b = a.promise;
        ht(this.za, "gameManualInterstitialSlotReady", 1147, new UN(this.slotId, "publisher_ads", a.resolve));
        cI(this.output, b.then(function() {
            return AB(10)
        }))
    };
    var kr = function(a, b, c) {
        c = void 0 === c ? WN : c;
        Y.call(this, a, 1158);
        this.j = c;
        this.o = 1E3 * _.Pf(jr);
        this.output = iI(this);
        lI(this, b)
    };
    _.T(kr, Y);
    kr.prototype.g = function() {
        var a = this;
        this.j.tf++ ? cI(this.output, AB(this.o * (this.j.tf - 2) + (this.o - (Date.now() - this.j.zg))).then(function() {
            a.j.zg = Date.now();
            a.j.tf--
        })) : (this.j.zg = Date.now(), AB(this.o).then(function() {
            return void a.j.tf--
        }), this.output.notify())
    };
    var WN = {
        tf: 0,
        zg: Date.now()
    };
    var XN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        YN = {
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        mr = function(a, b, c, d, e) {
            Y.call(this, a, 1150);
            this.B = b;
            this.j = X(this, c);
            this.C = X(this, d);
            lI(this, e);
            this.o = new _.wI(this.B)
        };
    _.T(mr, Y);
    mr.prototype.g = function() {
        var a = 0 === (0, _.Wp)() ? "rgba(1,1,1,0.5)" : "white";
        _.xp(this.j.value, _.z(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.Wp)() ? YN : XN));
        _.xp(this.C.value, _.z(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, XN));
        _.rp(this, _.JI(this.B.document, this.B));
        a = {};
        bB(this.j.value).postMessage(JSON.stringify((a.googMsgType = "sth", a.msg_type = "i-view", a)), "*");
        if (this.B === this.B.top) {
            var b = _.yI(this.o, 2147483646);
            _.CI(b);
            _.rp(this, function() {
                return void _.DI(b)
            })
        }
    };
    var qr = function() {
        this.Zf = 1E3
    };
    qr.prototype.send = function(a, b) {
        a.oj(b)
    };
    var tr = function() {
        this.Zf = _.Pf(IF);
        this.fb = 17
    };
    tr.prototype.send = function(a, b) {
        var c = _.mj(b, _.nj, 2);
        _.Me(c, 1, _.Vc, this.fb);
        a.Cm(b)
    };
    var ZN = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 683);
        this.slotId = b;
        this.P = c;
        this.j = d;
        this.o = W(this);
        this.C = X(this, e);
        this.W = X(this, f);
        this.H = jI(this, g);
        this.J = jI(this, h);
        this.context.V.log(578856259, _.pj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Hb: this.context.Pa,
            U: 7
        })
    };
    _.T(ZN, Y);
    ZN.prototype.g = function() {
        var a = this;
        this.context.V.log(578856259, _.pj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Hb: this.context.Pa,
            U: 8
        });
        var b = this.W.value,
            c = this.C.value,
            d = this.J.value.rl,
            e = new _.WJ(this.context),
            f = null != Cm(this.j, 14) ? 60 * gt(this.j, 14) : 604800;
        b = new d(this.context, window, c, b, e, this.P, $N(this), new _.u.Set(ue(this.j, 15, _.Xc, 2)), oN(this.slotId), function() {
            return void a.ya()
        }, function() {
            vr(a.context, {
                pb: 1,
                payload: function() {
                    var g = new rq,
                        h = _.sq(g, fD, 5, uq);
                    _.wi(h, 1, _.$f());
                    return g
                }
            });
            a.ya()
        }, f, this.H.value);
        b.ia();
        _.S(this, b);
        this.o.G(b);
        this.context.V.log(578856259, _.pj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Hb: this.context.Pa,
            U: 9
        })
    };
    var $N = function(a) {
        var b = {};
        a = _.fk(a.j, eA, 13);
        a = _.x(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[hk(c, 1)] = hk(c, 2);
        return b
    };
    var aO = function(a, b, c, d) {
        Y.call(this, a, 1210);
        this.action = b;
        this.j = jI(this, c);
        lI(this, d)
    };
    _.T(aO, Y);
    aO.prototype.g = function() {
        var a;
        null != (a = this.j.value) && a.rb() && this.action()
    };
    var bO = function(a, b, c) {
        Y.call(this, a, 1121);
        this.aa = b;
        this.output = iI(this);
        this.C = !1;
        this.H = X(this, c)
    };
    _.T(bO, Y);
    bO.prototype.g = function() {
        var a = this;
        if (this.o = wr(Hl(this.context, this.id, function(b) {
                b = _.x(b);
                for (var c = b.next(); !c.done; c = b.next()) c = 100 * c.value.intersectionRatio, _.z(Number, "isFinite").call(Number, c) && 50 <= c ? a.j || (a.C = !0, IH(a.aa) || cO(a)) : (a.C = !1, dO(a))
            }))) _.rp(this, function() {
            var b;
            null == (b = a.o) || b.disconnect();
            dO(a)
        }), this.o.observe(this.H.value), this.J = sp(this, this.id, this.aa, "visibilitychange", function() {
            IH(a.aa) ? dO(a) : a.C && !a.j && cO(a)
        })
    };
    var cO = function(a) {
            a.j = setTimeout(function() {
                a.j = void 0;
                if (!IH(a.aa)) {
                    a.output.notify();
                    var b;
                    null == (b = a.o) || b.disconnect();
                    var c;
                    null == (c = a.J) || c.call(a)
                }
            }, 1E3)
        },
        dO = function(a) {
            clearTimeout(a.j);
            a.j = void 0
        };
    var Ou = function(a, b, c, d, e, f, g, h, k, l, m) {
        m = void 0 === m ? function() {
            return _.$f()
        } : m;
        Y.call(this, a, 1141);
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
    _.T(Ou, Y);
    Ou.prototype.g = function() {
        var a = this;
        if (this.o) {
            var b = new sk;
            _.S(this, b);
            var c = J(b, new ZN(this.context, this.slotId, this.J, this.o, this.j, this.P, this.Ab, this.H));
            _.rp(c, function() {
                return void a.ya()
            });
            this.output.La(c.o.promise.then(function() {
                return !0
            }));
            if (_.E(dE) || _.Pf(gE)) {
                var d = J(b, new bO(this.context, this.aa, this.j));
                _.Pf(gE) && J(b, new aO(this.context, function() {
                    vr(a.context, {
                        pb: _.Pf(gE),
                        payload: function() {
                            var e = new eD,
                                f = a.nc();
                            null !== f && _.wi(e, 1, f);
                            return gD(e)
                        }
                    })
                }, c.o, d.output));
                _.E(dE) && J(b, new aO(this.context, function() {
                    vr(a.context, {
                        pb: 1,
                        payload: function() {
                            var e = new eD,
                                f = a.nc();
                            null !== f && _.wi(e, 1, f);
                            Zh(e, 2, !0);
                            return gD(e)
                        }
                    });
                    a.C()
                }, c.o, d.output))
            }
            Bk(b)
        } else this.output.G(!1)
    };
    var eO = function(a) {
        this.module = a
    };
    eO.prototype.toString = function() {
        return String(this.module)
    };
    _.fO = new eO(2);
    _.gO = new eO(5);
    _.hO = new eO(6);
    var Gu = function(a, b, c, d, e, f) {
        Y.call(this, a, 846);
        this.o = b;
        this.format = c;
        this.gb = d;
        this.j = e;
        this.output = W(this);
        f && lI(this, f)
    };
    _.T(Gu, Y);
    Gu.prototype.g = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.gb) || !_.Q(a, 12, !1));
        a = 5 === this.format && this.j;
        b || a ? this.output.La(this.o.load(_.fO)) : this.output.ba()
    };
    var iO = function(a, b, c, d, e) {
        Y.call(this, a, 905);
        this.O = b;
        this.j = c;
        this.output = iI(this);
        this.o = X(this, d);
        lI(this, e)
    };
    _.T(iO, Y);
    iO.prototype.g = function() {
        for (var a = _.x(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            b = null == (c = this.O.T[b.value.getDomId()]) ? void 0 : xr(c);
            if (2 === b || 3 === b || 5 === b) {
                this.j.load(_.fO);
                return
            }
        }
        this.output.notify()
    };
    var jO = function(a, b, c, d, e, f) {
        Y.call(this, a, 696);
        this.slotId = b;
        this.za = c;
        lI(this, d);
        mI(this, [e, f])
    };
    _.T(jO, Y);
    jO.prototype.g = function() {
        ht(this.za, "rewardedSlotClosed", 703, new TN(this.slotId, "publisher_ads"))
    };
    var kO = function(a, b, c, d, e) {
        Y.call(this, a, 694);
        this.slotId = b;
        this.za = c;
        lI(this, d);
        this.j = jI(this, e)
    };
    _.T(kO, Y);
    kO.prototype.g = function() {
        var a, b = null == (a = this.j.value) ? void 0 : a.payload;
        ht(this.za, "rewardedSlotGranted", 702, new SN(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var lO = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        mO = function(a, b, c, d, e, f) {
            Y.call(this, a, 693);
            this.B = b;
            this.H = f;
            this.output = iI(this);
            this.o = X(this, c);
            this.C = X(this, d);
            lI(this, e);
            this.j = new _.wI(this.B)
        };
    _.T(mO, Y);
    mO.prototype.g = function() {
        var a = this;
        if (!this.H.Tc) {
            var b = 0 === (0, _.Wp)() ? "rgba(1,1,1,0.5)" : "white";
            _.xp(this.C.value, _.z(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, lO));
            _.rp(this, _.JI(this.B.document, this.B));
            bB(this.o.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.B === this.B.top) {
                this.B.location.hash = "goog_rewarded";
                var c = _.yI(this.j, 2147483646);
                _.CI(c);
                _.rp(this, function() {
                    _.DI(c);
                    "goog_rewarded" === a.B.location.hash && (a.B.location.hash = "")
                })
            }
            this.output.notify()
        }
    };
    var nO = function(a, b, c, d) {
        Y.call(this, a, 695);
        this.B = b;
        this.j = X(this, c);
        lI(this, d)
    };
    _.T(nO, Y);
    nO.prototype.g = function() {
        if (this.B === this.B.top) var a = bB(this.j.value),
            b = sp(this, 503, this.B, "hashchange", function(c) {
                Ax(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var oO = function(a, b, c, d) {
        Y.call(this, a, 692);
        this.slotId = b;
        this.za = c;
        this.output = iI(this);
        this.j = X(this, d)
    };
    _.T(oO, Y);
    oO.prototype.g = function() {
        var a = this.j.value,
            b = new _.Ah,
            c = b.promise,
            d;
        ht(this.za, "rewardedSlotReady", 701, new RN(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        cI(this.output, c)
    };
    var pO = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        qO = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        rO = function(a, b, c, d, e) {
            Y.call(this, a, 691);
            this.C = W(this);
            this.o = iI(this);
            this.H = X(this, c);
            this.j = mI(this, [d, e])
        };
    _.T(rO, Y);
    rO.prototype.g = function() {
        if ("ha_before_make_visible" === this.j.value.message) this.o.notify();
        else {
            var a = _.E(kE) ? pO : qO;
            _.xp(this.H.value, _.z(Object, "assign").call(Object, {
                position: "absolute"
            }, 0 === (0, _.Wp)() ? a : pO));
            this.C.G(this.j.value)
        }
    };
    var Pu = function(a, b, c, d, e, f) {
        sk.call(this);
        var g = Ar(b, "granted", a);
        J(this, g);
        var h = Ar(b, "prefetched", a);
        J(this, h);
        var k = Ar(b, "closed", a);
        J(this, k);
        var l = Ar(b, "ha_before_make_visible", a);
        J(this, l);
        var m = new rO(a, b, e, h.output, l.output);
        J(this, m);
        h = new oO(a, b, c, m.C);
        J(this, h);
        f = new mO(a, d, e, f, h.output, m.o);
        J(this, f);
        J(this, new nO(a, d, e, f.output));
        J(this, new kO(a, b, c, h.output, g.output));
        J(this, new jO(a, b, c, h.output, k.output, l.output))
    };
    _.T(Pu, sk);
    var Vt = function(a, b) {
        Y.call(this, a, 1031);
        this.B = b
    };
    _.T(Vt, Y);
    Vt.prototype.g = function() {
        this.B === this.B.top && pl(this.B)
    };
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var sO = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        Br = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = sO[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var tO = Xg({
            gsppack: Fo,
            fpt: $g,
            eids: ah()
        }),
        uO = Xg({
            paw_id: $g,
            signal: $g,
            error: $g,
            eids: ah()
        }),
        vO = function(a, b, c, d, e) {
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
    _.T(vO, _.V);
    vO.prototype.A = function() {
        _.V.prototype.A.call(this);
        wO(this);
        for (var a = _.x(this.ports), b = a.next(); !b.done; b = a.next()) b = b.value, this.ports.delete(b), b.onmessage = null
    };
    var xO = function(a, b, c) {
            b.onmessage = c;
            a.ports.add(b)
        },
        wO = function(a) {
            null !== a.l && (_.dg(a.B, "message", a.l), a.l = null)
        },
        yO = function(a, b) {
            for (var c = _.x(a.ports), d = c.next(); !d.done; d = c.next()) d = d.value, d !== b && (a.ports.delete(d), d.onmessage = null);
            wO(a);
            a.g = b
        },
        zO = function(a, b) {
            xO(a, b, function(c) {
                a: {
                    try {
                        var d = JSON.parse(c.data);
                        if (uO(d)) {
                            var e = d;
                            break a
                        }
                    } catch (k) {}
                    e = void 0
                }
                if (e) {
                    null === a.g && yO(a, b);
                    var f;
                    null == (f = a.j) || f.resolve(e.signal);
                    a.j = null
                } else {
                    a: {
                        try {
                            var g = JSON.parse(c.data);
                            if (tO(g) && g.gsppack) {
                                var h = g;
                                break a
                            }
                        } catch (k) {}
                        h = void 0
                    }
                    h && null === a.g && yO(a, b)
                }
            });
            Cr(b)
        },
        AO = function(a) {
            if (a.j) return a.j.promise;
            if (null !== a.l) throw Error("a poll message listener is already registered");
            a.j = new _.Ah;
            null === a.g ? (a.l = function(b) {
                b = null == b.data || "" === b.data ? b.ports[0] : void 0;
                b && zO(a, b)
            }, _.rb(a.B, "message", a.l)) : Cr(a.g);
            return a.j.promise
        };
    var Nt = function(a, b, c, d) {
        c = void 0 === c ? Sh : c;
        d = void 0 === d ? new vO(b) : d;
        Y.call(this, a, 1063);
        this.B = b;
        this.H = c;
        this.o = d;
        this.C = W(this);
        this.rc = W(this);
        this.j = !1;
        _.S(this, d)
    };
    _.T(Nt, Y);
    Nt.prototype.g = function() {
        var a = this;
        if (_.E(YD)) {
            this.j = Th(this.B);
            var b = !this.j && _.E(PF) ? AO(this.o) : void 0,
                c = null,
                d = 0,
                e = function() {
                    return _.E(PF) && null !== a.o.g ? b ? b.then(function(h) {
                        b = void 0;
                        return h
                    }) : AO(a.o) : a.H(a.B)
                },
                f = Hl(this.context, this.id, function() {
                    var h, k, l;
                    return _.tb(function(m) {
                        switch (m.g) {
                            case 1:
                                return h = "0", m.l = 2, m.yield(e(), 4);
                            case 4:
                                h = null != (k = m.A) ? k : "0";
                                1E4 < h.length && (Ll(a.context, a.id, new Bo("ML:" + h.length)), h = "0");
                                m.g = 3;
                                m.l = 0;
                                break;
                            case 2:
                                l = vb(m), Ll(a.context, a.id, l);
                            case 3:
                                c = h, d = _.Zf(a.B) + 3E5, m.g = 0
                        }
                    })
                });
            if (!_.E(PF) || this.j) var g = (_.H = f(), _.z(_.H, "finally")).call(_.H, function() {
                g = void 0
            });
            this.C.G(function() {
                var h, k, l;
                return _.tb(function(m) {
                    if (1 == m.g) {
                        h = _.E(PF) && null !== a.o.g;
                        if (!a.j && !h) return m.return("");
                        k = _.Zf(a.B) >= d;
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
    var BO = function(a, b) {
        Y.call(this, a, 1091);
        this.output = W(this);
        b && (this.j = jI(this, b))
    };
    _.T(BO, Y);
    BO.prototype.g = function() {
        var a;
        null != (a = this.j) && a.value ? this.output.La(this.j.value()) : this.output.G("")
    };
    BO.prototype.l = function() {
        this.output.G("")
    };
    var Nr = new _.u.Map([
        ["IAB_AUDIENCE_1_1", 3],
        ["IAB_CONTENT_2_2", 5],
        ["IAB_CONTENT_3_0", 6]
    ]);
    var Ur = new _.u.Set(["disablePersonalization"]);
    var Yr = function(a, b, c) {
        Y.call(this, a, 1122);
        this.aa = b;
        this.j = c;
        iI(this, c)
    };
    _.T(Yr, Y);
    Yr.prototype.g = function() {
        var a = this,
            b = Fl(this.context);
        cI(this.j, new _.u.Promise(function(c) {
            return void KH(function() {
                c();
                b()
            }, a.aa)
        }))
    };
    var Wt = function(a, b, c) {
        Y.call(this, a, 1107);
        this.B = b;
        this.j = c;
        W(this, c)
    };
    _.T(Wt, Y);
    Wt.prototype.g = function() {
        var a = oh(this.B.isSecureContext, this.B.navigator, this.B.document),
            b = ph(this.B.isSecureContext, this.B.document),
            c = qh(this.B.isSecureContext, this.B, this.B.document),
            d = !(!this.B.isSecureContext || !nh("attribution-reporting", this.B.document)),
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
    var CO = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1118, _.Pf(qE));
        this.C = b;
        this.J = e;
        this.T = f;
        W(this, e);
        c && (this.P = jI(this, c));
        d && (this.H = jI(this, d));
        g && (this.o = X(this, g));
        h && (this.j = kI(this, h))
    };
    _.T(CO, Y);
    CO.prototype.g = function() {
        var a = new SH;
        a = _.Le(a, 1, _.ad(this.C), 0);
        if (this.j)
            if (this.j.value) {
                var b = _.kj(a, 3, this.j.value.label);
                _.K(b, 4, this.j.value.status)
            } else this.j.Tc() || _.K(a, 4, 5);
        if (this.C & 1) {
            var c, d;
            b = DO(this, null == (c = this.P) ? void 0 : c.value, null == (d = this.H) ? void 0 : d.value);
            _.ii(a, 2, b)
        }
        this.J.G(a)
    };
    var DO = function(a, b, c) {
            switch (_.Pf(Yt)) {
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
            var e = new RH;
            _.E(KF) || _.K(e, 1, d);
            null == b || b.forEach(function(h, k) {
                if (!_.E(GF) || h.length) {
                    var l = QH(new PH, h),
                        m;
                    null == (m = null == c ? void 0 : c.get(k)) || m.forEach(function(n, p) {
                        var r = new MH;
                        n = _.Le(r, 2, _.ad(n), 0);
                        p = _.Le(n, 1, _.ad(_.sh(p)), 0);
                        ok(l, 2, MH, p)
                    });
                    Je(e, 2, PH).set(k, l)
                }
            });
            var f;
            if ((null == (f = a.o) ? 0 : f.value) && a.T) {
                var g;
                b = _.x(null == (g = a.o) ? void 0 : g.value);
                for (g = b.next(); !g.done; g = b.next()) g = g.value, (d = EO(a, a.T[g.getDomId()])) && Je(e, 3, NH).set(g.getAdUnitPath(), d)
            }
            return e
        },
        EO = function(a, b) {
            a = Io(a.context, b);
            if (0 !== a.length) return OH(new NH, a.map(function(c) {
                return c.seller
            }))
        };
    var $r = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1165);
        this.J = c;
        this.H = d;
        this.xf = e;
        this.T = f;
        this.C = g;
        this.o = h;
        this.j = jI(this, b.Zi)
    };
    _.T($r, Y);
    $r.prototype.g = function() {
        if (this.j.value) {
            var a = new sk,
                b = new CO(this.context, this.j.value, this.J, this.H, this.xf.Xg, this.T, this.C, this.o);
            J(a, b);
            Bk(a)
        } else this.xf.Xg.ba()
    };
    var hu = function(a, b, c) {
        Y.call(this, a, 1206);
        this.o = b;
        this.j = W(this);
        this.Z = X(this, c)
    };
    _.T(hu, Y);
    hu.prototype.g = function() {
        var a = this;
        this.o.cookieDeprecationLabel ? fh(this.Z.value) ? this.j.La(this.o.cookieDeprecationLabel.getValue().then(function(b) {
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
    var FO = function(a, b) {
        Y.call(this, a, 1213, _.Pf(qE));
        this.j = W(this);
        b && (this.o = kI(this, b))
    };
    _.T(FO, Y);
    FO.prototype.g = function() {
        var a, b, c;
        (null == (c = null == (a = this.o) ? void 0 : null == (b = a.value) ? void 0 : b.label) ? 0 : c.match(Qf(pE))) ? this.j.G(!0): this.j.G(!1)
    };
    var GO = function(a, b) {
        Y.call(this, a, 1212, _.Pf(qE));
        this.j = W(this);
        this.o = W(this);
        b && (this.C = kI(this, b))
    };
    _.T(GO, Y);
    GO.prototype.g = function() {
        var a, b, c = null == (a = this.C) ? void 0 : null == (b = a.value) ? void 0 : b.label;
        c ? (this.o.G(!0), c.match(Qf(pE)) ? this.j.G(!0) : this.j.G(!1)) : (this.j.G(!1), this.o.G(!1))
    };
    var HO = function(a, b, c) {
        Y.call(this, a, 873);
        this.B = b;
        this.j = X(this, c)
    };
    _.T(HO, Y);
    HO.prototype.g = function() {
        var a = this.context,
            b = this.j.value,
            c = this.B;
        !Do()._pubconsole_disable_ && (b = ih("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || $o(a, c))
    };
    var IO = function() {
        this.resources = {}
    };
    var bs = "3rd party ad content";
    var JO = function(a, b, c) {
        _.V.call(this);
        this.context = a;
        this.Ra = b;
        this.l = c;
        a = c.slotId;
        b = c.size;
        this.g = "height" === c.vb ? "fluid" : [b.width, b.height];
        this.Xd = dn(a);
        this.Yd = bs
    };
    _.T(JO, _.V);
    JO.prototype.render = function() {
        var a = this.Ra,
            b = this.l,
            c = b.slotId,
            d = b.O.T,
            e = b.size,
            f = b.Oa,
            g = b.isBackfill,
            h = b.Ub;
        Wi(b.sj, _.WA(b.aa), null != f ? f : "", !1);
        ft(_.Nf(Jl), "5", gt(d[c.getDomId()], 20));
        ht(c, jt, 801, {
            Sh: 0 === a.kind ? a.hb : "",
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
    JO.prototype.loaded = function(a) {
        var b = this.l,
            c = b.slotId,
            d = b.za;
        b = b.O.T;
        ht(c, Vu, 844);
        a && a.setAttribute("data-load-complete", !0);
        ht(d, "slotOnload", 710, new NN(c, "publisher_ads"));
        ft(_.Nf(Jl), "6", gt(b[c.getDomId()], 20))
    };
    var KO = function(a) {
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
    JO.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.sj.removeAttribute("data-google-query-id")
    };
    JO.prototype.I = function(a) {
        var b = this,
            c = LO(this, function() {
                return void b.loaded(c.g)
            }, a);
        _.rp(this, function() {
            100 != c.status && (c.xg() && (gJ(c.l), c.C = 0), window.clearTimeout(c.H), c.H = -1, c.K = 3, c.A && (c.A.ya(), c.A = null), _.dg(window, "resize", c.Ca), _.dg(window, "scroll", c.Ca), c.D && c.g && c.D == _.$A(c.g) && c.D.removeChild(c.g), c.g = null, c.D = null, c.status = 100)
        });
        return c
    };
    var LO = function(a, b, c) {
        var d = a.l,
            e = d.lj,
            f = d.isBackfill,
            g = d.Ub,
            h = d.Te,
            k = d.Nf,
            l = d.ab,
            m = Array.isArray(a.g) ? new _.Rm(Number(a.g[0]), Number(a.g[1])) : 1;
        return new oJ({
            Ug: d.Lh,
            Xd: a.Xd,
            Yd: a.Yd,
            content: KO(a),
            size: m,
            Ti: b,
            mj: null != e ? e : void 0,
            permissions: {
                Qe: null != Nn(c, 1) ? !!_.Q(c, 1) : !f,
                Re: null != Nn(c, 2) ? !!_.Q(c, 2) : !1
            },
            Zd: !!Do().fifWin,
            rm: XL ? XL : XL = Dn(),
            lk: Hn(),
            hostpageLibraryTokens: l.hostpageLibraryTokens,
            ub: function(n, p) {
                return void Ll(a.context, n, p)
            },
            uniqueId: g,
            kj: VL(),
            Te: null != h ? h : void 0,
            wb: void 0,
            Nf: null != k ? k : void 0
        })
    };
    var MO = function() {
        JO.apply(this, arguments)
    };
    _.T(MO, JO);
    MO.prototype.D = function() {
        var a = this.l,
            b = a.O,
            c = b.ca;
        a = b.T[a.slotId.getDomId()];
        b = new In;
        c = On([b, c.Fc(), null == a ? void 0 : a.Fc()]);
        return JO.prototype.I.call(this, c).g
    };
    MO.prototype.j = function() {
        return !1
    };
    var wu = function(a, b, c, d, e, f) {
        Y.call(this, a, 669);
        this.ca = b;
        this.T = c;
        this.j = d;
        this.Jb = e;
        this.output = W(this);
        f && (this.o = X(this, f))
    };
    _.T(wu, Y);
    wu.prototype.g = function() {
        var a;
        if (null == (a = this.o) ? 0 : a.value) this.output.G(!0);
        else {
            var b;
            a = !(null == (b = this.j) || !_.I(b, 1)) && (_.Q(this.T, 12) || Nn(this.ca, 13)) || this.Jb;
            this.output.G(!!a)
        }
    };
    var NO = function(a, b, c, d) {
        Y.call(this, a, 833);
        this.j = b;
        this.B = c;
        this.output = iI(this);
        lI(this, d)
    };
    _.T(NO, Y);
    NO.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = VL();
        c = {
            version: XL ? XL : XL = Dn(),
            Ff: c
        };
        c = vJ.Al(c);
        var d = bJ(b);
        c = d ? _.jb(c, new _.u.Map([
            ["n", String(d)]
        ])) : c;
        d = Rf(Fn);
        for (var e = new _.u.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
        c = _.jb(c, e);
        var g;
        a.resources[c.toString()] || (null == (g = Do()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.cg("IFRAME"), a.src = _.ib(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)));
        this.output.notify()
    };
    var OO = function(a, b, c) {
        Y.call(this, a, 1135);
        this.o = b;
        this.C = c;
        this.j = W(this)
    };
    _.T(OO, Y);
    OO.prototype.g = function() {
        for (var a = new Lz, b = new _.u.Map, c = new _.u.Set, d = _.x(this.o), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (_.Ii(f, 1)) {
                e = new _.u.Set;
                b.set(_.I(f, 1).toString(), e);
                f = _.x(_.fk(f, Jz, 2));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = _.I(g, 1);
                    e.add(h);
                    c.has(h) || ok(a, 2, Jz, g);
                    c.add(h)
                }
            }
        }
        this.C.G(b);
        this.j.G(a)
    };
    var PO = function(a, b, c) {
        Y.call(this, a, 1051);
        this.o = b;
        this.j = jI(this, c)
    };
    _.T(PO, Y);
    PO.prototype.g = function() {
        var a = this;
        this.j.value && Nk(this.j.value, function(b, c) {
            Ll(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var QO = function(a, b) {
        Y.call(this, a, 1040);
        this.j = W(this);
        this.o = jI(this, b)
    };
    _.T(QO, Y);
    QO.prototype.g = function() {
        var a = this.o.value;
        a ? (a = _.fk(a, Jz, 2), this.j.G(a.map(function(b) {
            var c = fz(b, Kz);
            b = _.I(b, 1);
            c = c && (_.z(c, "startsWith").call(c, location.protocol) || _.z(c, "startsWith").call(c, "data:") && 80 >= c.length) ? gb(Xj(c)) : void 0;
            return {
                Ie: b,
                url: c
            }
        }))) : this.j.G([])
    };
    var RO = function(a, b, c) {
        Y.call(this, a, 813);
        this.Ab = c;
        this.o = jI(this, b);
        this.j = jI(this, c)
    };
    _.T(RO, Y);
    RO.prototype.g = function() {
        var a = this,
            b = this.o.value,
            c = this.j.value;
        if (null != b && b.length && c) {
            b = _.x(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = e.Ie;
                (e = e.url) && _.S(this, Rk(d, e, c, this.Ab, function(f, g) {
                    Ll(a.context, f, g);
                    var h, k;
                    null == (k = (h = console).error) || k.call(h, g)
                }))
            }
        }
    };
    var SO = function(a, b, c) {
        Y.call(this, a, 1045);
        this.j = b;
        this.Ab = c
    };
    _.T(SO, Y);
    SO.prototype.g = function() {
        var a = new sk;
        _.S(this, a);
        var b = new QO(this.context, this.j);
        J(a, b);
        b = new RO(this.context, b.j, this.Ab);
        J(a, b);
        Bk(a)
    };
    var ou = function(a, b, c, d) {
        Y.call(this, a, 706);
        this.B = b;
        this.output = null != d ? d : W(this);
        this.j = X(this, c)
    };
    _.T(ou, Y);
    ou.prototype.g = function() {
        this.output.Ha(gh(this.j.value, this.B))
    };
    var gs = function(a, b, c, d) {
        Y.call(this, a, 1154);
        this.nb = c;
        this.j = d;
        this.o = jI(this, b)
    };
    _.T(gs, Y);
    gs.prototype.g = function() {
        if (this.o.value) {
            var a = new sk;
            _.S(this, a);
            var b = new ou(this.context, window, this.nb, this.j.Ab);
            J(a, b);
            b = new OO(this.context, this.o.value, this.j.Lg);
            J(a, b);
            J(a, new SO(this.context, b.j, this.j.Ab));
            b = new PO(this.context, console, this.j.Ab);
            J(a, b);
            Bk(a)
        } else this.j.Lg.ba(), this.j.Ab.ba()
    };
    var TO = function(a, b, c, d, e, f) {
        Y.call(this, a, 1096);
        this.B = b;
        this.Z = c;
        this.j = d;
        this.Gc = e;
        this.o = jI(this, f)
    };
    _.T(TO, Y);
    TO.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : a.Wj;
        b && b(this.j, this.Z, this.B, this.Gc, this.context.Qa)
    };
    var UO = function(a, b) {
        Y.call(this, a, 1095);
        this.j = b;
        this.output = W(this)
    };
    _.T(UO, Y);
    UO.prototype.g = function() {
        this.output.La(this.j.load(_.gO))
    };
    var is = function(a, b, c, d, e) {
        Y.call(this, a, 1090);
        this.j = b;
        this.Gc = c;
        this.o = X(this, d);
        this.C = jI(this, e)
    };
    _.T(is, Y);
    is.prototype.g = function() {
        var a = this.C.value,
            b;
        if (a && null != (b = _.Am(a, _.$z, 1)) && _.fk(b, _.Zz, 15).length) {
            b = new sk;
            _.S(this, b);
            var c = new UO(this.context, this.j);
            J(b, c);
            a = new TO(this.context, window, this.o.value, a, this.Gc, c.output);
            J(b, a);
            Bk(b)
        }
    };
    var Ru = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1205);
        this.B = b;
        this.J = c;
        this.H = X(this, d);
        this.o = X(this, e);
        this.j = X(this, f);
        this.C = X(this, g)
    };
    _.T(Ru, Y);
    Ru.prototype.g = function() {
        var a = this.H.value;
        a = new a.Hm(this.o.value, this.B, this.j.value, this.J, this.C.value, new _.WJ(this.context), new a.Xk(this.B));
        _.S(this, a);
        _.S(this, a.ia)
    };
    var Qu = function(a, b) {
        Y.call(this, a, 1204);
        this.j = b;
        this.output = W(this)
    };
    _.T(Qu, Y);
    Qu.prototype.g = function() {
        this.output.La(this.j.load(_.hO))
    };
    var zt = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = Hl(a, 88, function(f, g) {
            var h;
            if (h = to(f)) h = g, h = so(h) || Array.isArray(h) && h.every(so);
            if (h) {
                if (_.E(BE)) {
                    var k = ls(g);
                    h = k.size;
                    k.eh && (g = $l([f, g]), g = g.substring(1, g.length - 1), P(b, new Zl(151, ["SizeMappingBuilder.addSize", g])), g = h)
                }
                d.push([f, g])
            } else e.push([f, g]), P(b, am("SizeMappingBuilder.addSize", [f, g]));
            return c
        });
        this.build = Hl(a, 89, function() {
            if (e.length) return P(b, IK(Ln(e))), null;
            pa(d);
            return d
        })
    };
    var VO = function(a, b, c, d, e, f) {
        f = void 0 === f ? Tk : f;
        Y.call(this, a, 939);
        this.o = b;
        this.B = c;
        this.Z = d;
        this.j = f;
        this.output = iI(this);
        lI(this, e)
    };
    _.T(VO, Y);
    VO.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = new uz;
        var d = new tz;
        d = _.kj(d, 1, String(this.o));
        c = _.ii(c, 5, d);
        c = _.K(c, 4, 1);
        c = _.K(c, 2, 2);
        c = _.kj(c, 3, this.context.Pa);
        d = fh(this.Z);
        c = _.yl(c, 6, d);
        a.call(this, b, c);
        this.output.notify()
    };
    var Eu = function(a, b, c, d, e) {
        Y.call(this, a, 807);
        this.B = b;
        this.Mb = c;
        this.output = iI(this);
        this.j = X(this, d);
        e && lI(this, e)
    };
    _.T(Eu, Y);
    Eu.prototype.g = function() {
        if (this.Mb && !this.j.value) {
            var a = BB(this.B);
            QJ(new PJ(a, this.Mb)) || this.I(new Bo("Cannot create top window frame"))
        }
        this.output.notify()
    };
    var WO = function(a, b) {
        Y.call(this, a, 820);
        this.B = b;
        this.output = W(this)
    };
    _.T(WO, Y);
    WO.prototype.g = function() {
        var a = this;
        this.output.La(Xk(this.B).then(function(b) {
            var c = b.Mb,
                d = b.status;
            Ep("gpt_etu", function(e) {
                dp(e, a.context);
                ep(e, "rsn", d)
            }, c ? void 0 : 0);
            return null != c ? c : ""
        }))
    };
    var XO = function(a, b, c, d) {
        Y.call(this, a, 979);
        this.B = b;
        this.j = jI(this, d);
        this.output = c
    };
    _.T(XO, Y);
    XO.prototype.g = function() {
        var a = this;
        if (_.E(FE)) this.output.ba();
        else {
            var b;
            al(this.B, null != (b = this.j.value) ? b : !1).then(function(c) {
                a.output.G(c)
            })
        }
    };
    XO.prototype.l = function() {
        this.output.ba()
    };
    var qs = function(a, b, c, d) {
        Y.call(this, a, 1156);
        this.B = b;
        this.Yf = c;
        this.j = {
            Zc: new eq
        };
        this.o = X(this, d)
    };
    _.T(qs, Y);
    qs.prototype.g = function() {
        if (fh(this.o.value)) {
            var a = new sk;
            _.S(this, a);
            var b = new XO(this.context, this.B, this.j.Zc, this.Yf);
            J(a, b);
            Bk(a)
        } else this.j.Zc.ba()
    };
    var YO = function(a, b, c) {
        Y.call(this, a, 1123);
        this.j = b;
        this.o = c;
        W(this, b);
        W(this, c)
    };
    _.T(YO, Y);
    YO.prototype.g = function() {
        _.E(DE) ? (this.j.G(!1), this.o.ba()) : (this.j.G(!0), this.o.G(10))
    };
    var ZO = function(a, b, c, d, e) {
        Y.call(this, a, 978);
        this.B = b;
        this.C = c;
        this.j = e;
        W(this, e);
        this.o = jI(this, d.Zc)
    };
    _.T(ZO, Y);
    ZO.prototype.g = function() {
        if (_.E(EE)) this.j.ba();
        else if (this.o.value) {
            var a = hl(this.o.value, this.B, new _.WJ(this.context), this.C);
            this.j.La(a)
        } else this.j.ba()
    };
    ZO.prototype.l = function() {
        this.j.ba()
    };
    var ss = function(a, b, c, d, e, f) {
        Y.call(this, a, 1164);
        this.o = b;
        this.ue = c;
        this.j = e;
        this.C = X(this, d);
        f && (this.H = X(this, f))
    };
    _.T(ss, Y);
    ss.prototype.g = function() {
        var a;
        if (!ph(window.isSecureContext, window.document) || (null == (a = this.H) ? 0 : a.value)) this.j.Fd.ba(), this.j.se.G(!1), this.j.te.ba();
        else if (this.C.value) {
            a = new sk;
            _.S(this, a);
            J(a, new ZO(this.context, window, this.o, this.ue, this.j.Fd));
            var b = new YO(this.context, this.j.se, this.j.te);
            J(a, b);
            Bk(a)
        } else this.j.Fd.G(5), this.j.se.G(!1), this.j.te.G(5)
    };
    var $O = function(a, b, c) {
        Y.call(this, a, 1101);
        this.B = b;
        this.j = c
    };
    _.T($O, Y);
    $O.prototype.g = function() {
        if (!_.E(EE)) {
            var a = this.j,
                b = Yk(this.B);
            b.setTopicsCalled ? _.u.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }))
        }
    };
    var Iu = function(a, b, c, d) {
        Y.call(this, a, 1180);
        this.B = b;
        this.Tf = c;
        this.j = jI(this, d.Zc)
    };
    _.T(Iu, Y);
    Iu.prototype.g = function() {
        if (this.Tf && this.j.value) {
            var a = new sk;
            _.S(this, a);
            J(a, new $O(this.context, this.B, this.j.value));
            Bk(a)
        }
    };
    var Bs = function(a) {
        this.F = _.A(a)
    };
    _.T(Bs, _.D);
    var xs = function(a, b) {
        return _.Le(a, 2, _.td(b), "0")
    };
    var aP = function(a) {
        this.F = _.A(a)
    };
    _.T(aP, _.D);
    var As = Lf(aP);
    aP.da = [1];
    var ju = function(a, b, c, d) {
        Y.call(this, a, 1186);
        this.L = b;
        this.B = c;
        this.output = W(this);
        this.Z = X(this, d)
    };
    _.T(ju, Y);
    ju.prototype.g = function() {
        if (!oh(this.B.isSecureContext, this.B.navigator, this.B.document) || _.E(Xt)) this.output.ba();
        else {
            var a = this.L.Ue;
            if (null !== a) this.output.G(a);
            else {
                var b = _.Qn(new _.pH(this.B), "__gpi", this.Z.value);
                a = this.output;
                var c = a.G;
                b = _.sh(b || String(this.context.pvsid)) % 63001;
                this.L.Ue = b;
                c.call(a, b)
            }
        }
    };
    var bP = function(a, b, c) {
        Y.call(this, a, 1171);
        this.j = c;
        W(this, c);
        this.bh = X(this, b)
    };
    _.T(bP, Y);
    bP.prototype.g = function() {
        this.j.G(0 === this.bh.value.kind)
    };
    var cP = function(a, b, c) {
        Y.call(this, a, 1160);
        this.j = c;
        W(this, c);
        this.o = X(this, b)
    };
    _.T(cP, Y);
    cP.prototype.g = function() {
        if (null != this.o.value.requestId) {
            var a = this.o.value.request;
            this.context.Qa.ac.mc.Gd.ck.Rc({
                Uc: a.byteLength
            });
            33792 < a.byteLength ? this.j.G({
                kind: 1,
                reason: 3
            }) : (a = Hb(a, 3), a.length ? this.j.G({
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
    cP.prototype.l = function() {
        this.j.G({
            kind: 1,
            reason: 4
        })
    };
    var dP = function(a, b) {
        Y.call(this, a, 1159);
        this.output = W(this);
        this.j = b
    };
    _.T(dP, Y);
    dP.prototype.g = function() {
        var a = this;
        this.output.La(this.j.getInterestGroupAdAuctionData({
            seller: "https://securepubads.g.doubleclick.net"
        }).catch(function(b) {
            a.I(b);
            return 4
        }))
    };
    dP.prototype.l = function() {
        this.output.G(4)
    };
    var Gs = function(a, b, c, d, e, f) {
        Y.call(this, a, 1177);
        this.C = b;
        this.j = e;
        this.o = f;
        W(this, e);
        W(this, f);
        this.H = X(this, c);
        d && (this.J = X(this, d))
    };
    _.T(Gs, Y);
    Gs.prototype.g = function() {
        if (this.H.value) {
            var a;
            if (null == (a = this.J) ? 0 : a.value) this.j.G({
                kind: 1,
                reason: 6
            }), this.o.G(!1);
            else {
                a = new sk;
                _.S(this, a);
                var b = new dP(this.context, this.C);
                J(a, b);
                b = new cP(this.context, b.output, this.j);
                J(a, b);
                b = new bP(this.context, this.j, this.o);
                J(a, b);
                Bk(a)
            }
        } else this.j.G({
            kind: 1,
            reason: 2
        }), this.o.G(!1)
    };
    var eP = function(a, b, c, d, e) {
        Y.call(this, a, 881);
        this.Fa = b;
        this.ha = c;
        this.j = d;
        this.o = e;
        this.output = W(this)
    };
    _.T(eP, Y);
    eP.prototype.g = function() {
        if (4 === _.Pf(Yt)) {
            var a = _.Am(this.ha, uA, 23);
            if (a) {
                var b;
                if (0 !== (null == (b = this.j) ? void 0 : b.kind)) throw new TypeError("Received remote auction config despite " + (this.j ? "invalid" : "absent") + " remarketing input.");
                this.output.G({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: ti(this.ha, 3, 2),
                    requestId: this.j.requestId,
                    serverResponse: kl(ll(a, 1)),
                    resolveToConfig: !_.Q(this.ha, 14)
                })
            } else this.output.ba()
        } else {
            b = this.output;
            a = b.G;
            var c = this.ha,
                d = Io(this.context, this.Fa),
                e = this.context.Qa,
                f = _.E(JE) ? void 0 : this.o,
                g = _.E(JF),
                h = _.Pf(GE),
                k = void 0 === h ? 0 : h;
            h = !_.Q(c, 14);
            var l = {};
            var m = _.fk(c, rA, 7);
            m = _.x(m);
            for (var n = m.next(); !n.done; n = m.next()) {
                n = n.value;
                var p = {},
                    r = void 0,
                    v = null == (r = e) ? void 0 : r.ac.mc.Gd.kk;
                r = _.I(n, 1);
                if (_.I(n, 2).length) try {
                    if (p = JSON.parse(_.I(n, 2)), 1 > 100 * _.rh()) {
                        var w = void 0;
                        null == (w = v) || w.Kc({
                            Rf: r,
                            status: "SUCCESS",
                            Xc: 100
                        })
                    }
                } catch (G) {
                    w = void 0, null == (w = v) || w.Kc({
                        Rf: r,
                        status: "ERROR",
                        Xc: 1
                    })
                } else w = void 0, null == (w = v) || w.Kc({
                    Rf: r,
                    status: "EMPTY",
                    Xc: 1
                });
                l[_.I(n, 1)] = p
            }
            if (e = _.Am(c, qA, 6)) l["https://googleads.g.doubleclick.net"] = e.toJSON(), l["https://td.doubleclick.net"] = e.toJSON();
            m = {};
            e = _.x(_.fk(c, tA, 11));
            for (n = e.next(); !n.done; n = e.next()) n = n.value, m[_.I(n, 1)] = _.az(n, 2);
            n = {};
            0 !== _.az(c, 21) && (n["*"] = _.az(c, 21));
            if (0 < _.fk(c, sA, 32).length) {
                var y = {};
                e = _.x(_.fk(c, sA, 32));
                for (p = e.next(); !p.done; p = e.next()) p = p.value, y[_.I(p, 1)] = _.az(p, 2)
            }
            p = {};
            null != Cm(c, 18) && (p["https://googleads.g.doubleclick.net"] = gt(c, 18), p["https://td.doubleclick.net"] = gt(c, 18));
            e = _.x(Je(c, 24, yA));
            for (v = e.next(); !v.done; v = e.next()) r = v.value, gt(r[1], 4) && (v = r[0], r = gt(r[1], 4), p[v] = r);
            e = _.I(c, 1).split("/td/")[0];
            var B;
            v = null == (B = _.Am(c, wA, 5)) ? void 0 : _.he(B);
            var C;
            null != v && null != (C = _.Am(v, vA, 5)) && _.mk(C, 2);
            y = _.z(Object, "assign").call(Object, {}, {
                seller: e,
                decisionLogicUrl: _.I(c, 1),
                trustedScoringSignalsUrl: _.I(c, 2),
                interestGroupBuyers: ti(c, 3, 2),
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
            if (null == c ? 0 : _.Q(zA(c), 25)) y.sellerCurrency = "USD", y.perBuyerCurrencies = _.z(Object, "fromEntries").call(Object, Ie(c, 22, Cd));
            _.I(c, 28) && (y.directFromSellerSignalsHeaderAdSlot = _.I(c, 28));
            f && (y.auctionNonce = f, y.additionalBids = _.u.Promise.resolve());
            g && Ie(c, 33, Cd).size && (y.deprecatedRenderURLReplacements = _.z(Object, "fromEntries").call(Object, (_.H = Ie(c, 33, Cd), _.z(_.H, "entries")).call(_.H)), (f = y.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (y.deprecatedRenderURLReplacements["${RENDER_DATA}"] = f));
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
            ji(zA(c), vA, 5) && (l = new vA, m = bz(Yy(zA(c), vA, 5), 2), l = _.Le(l, 2, gd(m), "0"), m = bz(Yy(zA(c), vA, 5), 4), l = _.Le(l, 4, gd(m), "0"), _.ii(C, 5, l));
            zA(c).getEscapedQemQueryId() && (l = zA(c).getEscapedQemQueryId(), _.kj(C, 2, l));
            _.I(zA(c), 6) && (l = _.I(zA(c), 6), _.kj(C, 6, l));
            _.Q(zA(c), 21) && _.yl(C, 21, !0);
            _.Q(zA(c), 4) && _.yl(C, 4, !0);
            _.I(zA(c), 11) && (l = _.I(zA(c), 11), _.kj(C, 11, l));
            C = C.toJSON();
            l = _.az(c, 15) || 50;
            if (_.Q(c, 30)) {
                if (null == d || !d.length) throw Error("top_td_without_component_auction");
            } else d = [y].concat(_.xi(null != d ? d : []));
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
    eP.prototype.l = function() {
        this.output.ba()
    };
    var fP = function(a, b, c, d) {
        Y.call(this, a, 1105);
        this.adUnitPath = b;
        this.ha = c;
        this.j = d
    };
    _.T(fP, Y);
    fP.prototype.g = function() {
        var a = Date.now();
        if (!_.E(Ls) || Es(a)) {
            var b = ti(this.ha, 3, 2),
                c = us(this.adUnitPath);
            if (_.Q(this.ha, 20)) {
                if (_.E(HF)) {
                    var d;
                    var e = (null == (d = _.Am(this.ha, xA, 29)) ? void 0 : gt(d, 2)) || 864E5
                } else e = 864E5;
                a = Ms(b, a + e);
                e = (b = this.j.getItem(c)) ? _.fk(As(b), Bs, 1) : [];
                var f;
                b = new aP;
                a = ys(e, a);
                a = _.um(b, 1, a);
                b = !(null == (f = _.Am(this.ha, xA, 29)) || !_.Q(f, 3));
                f = Zh(a, 2, b);
                this.j.setItem(c, gl(f))
            } else _.E(PE) && this.j.removeItem(c)
        }
    };
    Xg({
        google_signals: Xg({
            buyer_reporting_id: $g
        })
    });
    var Qs = navigator,
        Rs = /(\$\{GDPR})/gi,
        Ss = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        Ts = /(\$\{ADDTL_CONSENT})/gi,
        Us = /(\$\{AD_WIDTH})/gi,
        Vs = /(\$\{AD_HEIGHT})/gi,
        Ws = /(\$\{RENDER_DATA})/gi;
    var gP = function() {
            var a = this;
            this.promise = new _.u.Promise(function(b, c) {
                a.reject = c;
                a.resolve = b
            })
        },
        hP = function() {
            this.auctionSignals = new gP;
            this.topLevelSellerSignals = new gP;
            this.g = new gP;
            this.perBuyerSignals = new gP;
            this.perBuyerTimeouts = new gP;
            this.perBuyerCumulativeTimeouts = new gP;
            this.directFromSellerSignals = new gP;
            this.directFromSellerSignalsHeaderAdSlot = new gP;
            this.perBuyerCurrencies = new gP;
            this.resolveToConfig = new gP;
            this.deprecatedRenderURLReplacements = new gP
        },
        iP = function(a, b, c, d) {
            this.g = a;
            this.ag = b;
            this.interestGroupBuyers = c;
            this.Bb = d
        };
    var jP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Y.call(this, a, 1201);
        this.ga = b;
        this.Z = c;
        this.ha = d;
        this.ka = e;
        this.W = k;
        this.H = l;
        this.J = m;
        this.P = n;
        this.C = p;
        this.j = r;
        this.ra = iI(this);
        this.o = W(this);
        this.xa = jI(this, f);
        this.Ma = X(this, g);
        this.ta = X(this, h);
        this.fa = X(this, w);
        X(this, v);
        W(this, p);
        W(this, n.Pb);
        W(this, n.Ga);
        W(this, n.Ja);
        W(this, this.j)
    };
    _.T(jP, Y);
    jP.prototype.g = function() {
        var a = Math.round(performance.now() - this.Ma.value),
            b = this.ta.value,
            c = this.xa.value,
            d = _.Am(this.ha, wA, 5),
            e = _.Q(d, 10),
            f = _.Q(d, 9),
            g = "string" === typeof c || Ys(c),
            h = 3 !== c && 2 !== c && 1 !== c;
        this.j.G(g && !f);
        h && dt(this.context, g, b, a, d);
        this.context.V.log(607368714, bt, {
            Mk: a,
            bk: c,
            jm: d.getEscapedQemQueryId(),
            jl: _.I(d, 6)
        });
        var k, l;
        h = null != (l = null == (k = this.fa.value.componentAuctions) ? void 0 : k.length) ? l : 0;
        ct(this.context, c, a, b, !!this.ka, d, h, g);
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
                a = 1 === (null == (n = b.componentAuctions) ? void 0 : n.length) && Fs(b.componentAuctions[0].seller) && ji(d, pA, 26) ? xy(gl(Yy(d, pA, 26)), 3) : ""
            } else a = void 0;
            n = a;
            cI(this.ra, Xs(c, _.z(Object, "assign").call(Object, {}, {
                gdprApplies: null != Nn(this.Z, 3) ? _.Q(this.Z, 3) ? "1" : "0" : null,
                fl: hk(this.Z, 2),
                Zj: hk(this.Z, 4),
                Vj: this.ha.getWidth().toString(),
                Tj: this.ha.getHeight().toString()
            }, n ? {
                nm: n
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
    jP.prototype.l = function() {
        var a, b, c = null == (a = this.ha) ? void 0 : _.Am(a, wA, 5);
        a = this.ka;
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
    var kP = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Y.call(this, a, 1200);
        this.L = b;
        this.ta = c;
        this.o = d;
        this.ha = e;
        this.W = g;
        this.H = h;
        this.J = k;
        this.P = m;
        this.fa = n;
        this.C = hI(this);
        this.ra = W(this);
        this.ka = W(this);
        this.ga = W(this);
        this.j = jI(this, f);
        X(this, l);
        W(this, m.Pb);
        W(this, m.Ga);
        W(this, m.Ja);
        W(this, n)
    };
    _.T(kP, Y);
    kP.prototype.g = function() {
        if (this.j.value) {
            var a = zA(this.ha);
            et(this.context, a);
            this.ra.G(performance.now());
            var b = _.az(this.ha, 8) || 1E3;
            this.ka.G(b);
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
                a = this.o ? lP(this.j.value, b, this.o) : mP(this, this.j.value);
                --this.L.l;
                this.C.La(a)
            }
        } else null == (a = this.o) || a.Bb.abort(), Ps(this.P, this.fa, this.H, this.J, this.W, _.I(this.ha, 25)), this.ga.G(!1)
    };
    var mP = function(a, b) {
            var c, d;
            return null == (d = (c = a.ta).runAdAuction) ? void 0 : d.call(c, b).catch(function(e) {
                if (e instanceof DOMException && "TimeoutError" === e.name) return 2;
                _.E(ME) && e instanceof Error && a.I(e);
                return 3
            })
        },
        lP = function(a, b, c) {
            Ks(a, c);
            setTimeout(function() {
                c.Bb.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, b);
            return c.g
        };
    kP.prototype.l = function() {
        var a, b = null == (a = this.ha) ? void 0 : _.Am(a, wA, 5);
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
    var nP = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1202);
        this.ha = b;
        this.C = c;
        this.j = d;
        this.o = jI(this, f);
        this.H = X(this, e);
        lI(this, g);
        W(this, d.Pb);
        W(this, d.Ga);
        W(this, d.Ja)
    };
    _.T(nP, Y);
    nP.prototype.g = function() {
        if (this.o.value) {
            Km(this.C) || (this.H.value.style.display = "");
            var a = this.o.value;
            var b = this.context.Qa;
            var c = _.I(this.ha, 31);
            c ? Ys(a) ? (b.ac.mc.Gd.jh.uh.Kc({
                Xc: 1,
                status: "FAILED_FENCED_FRAME"
            }), b = null) : (a = c.replace("%%srcfledge%%", a), a.length === c.length && a === c ? (b.ac.mc.Gd.jh.uh.Kc({
                Xc: 1,
                status: "FAILED_UNMODIFIED"
            }), b = null) : (b.ac.mc.Gd.jh.uh.Kc({
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
            this.j.Ja.G(new _.Rm(this.ha.getWidth(), this.ha.getHeight()));
            this.j.Pb.G(!1)
        }
    };
    var oP = function(a, b, c) {
        Y.call(this, a, 1054);
        this.j = b;
        this.output = iI(this);
        this.o = X(this, c)
    };
    _.T(oP, Y);
    oP.prototype.g = function() {
        this.o.value || this.j();
        this.output.notify()
    };
    var pP = function(a, b, c, d, e, f) {
        Y.call(this, a, 1053);
        this.slotId = b;
        this.O = c;
        this.L = d;
        this.Oa = e;
        this.j = W(this);
        this.o = X(this, f)
    };
    _.T(pP, Y);
    pP.prototype.g = function() {
        this.o.value ? (lt(this.slotId, this.L, this.O, this.Oa), this.j.G(!1)) : this.j.G(!0)
    };
    var qP = function(a, b, c, d) {
        Y.call(this, a, 1055);
        this.j = d;
        lI(this, c);
        this.o = X(this, b);
        iI(this, this.j)
    };
    _.T(qP, Y);
    qP.prototype.g = function() {
        this.o.value && this.j.notify()
    };
    var xu = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B) {
        Y.call(this, a, 1179);
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
        this.ka = y;
        this.ga = B;
        this.H = X(this, h);
        this.J = X(this, k);
        this.W = jI(this, c)
    };
    _.T(xu, Y);
    xu.prototype.g = function() {
        var a = new sk;
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
                    } else rP(this, a, this.ha);
            else b = rP(this, a, this.ha);
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
        e = new pP(this.context, this.slotId, this.O, this.L, this.Oa, b);
        J(a, e);
        b = new oP(this.context, this.fa, b);
        J(a, b);
        b = new qP(this.context, e.j, b.output, this.j.Qc);
        J(a, b);
        Bk(a)
    };
    var rP = function(a, b, c) {
        if (2 === _.Pf(Yt) && a.W.value && _.Q(c, 20) && 0 !== ti(c, 3, 2).length) {
            var d = new fP(a.context, a.slotId.getAdUnitPath(), c, a.W.value);
            J(b, d)
        }
        var e = new eP(a.context, a.T, c, a.ka, a.ga);
        J(b, e);
        var f = navigator,
            g = {
                Ga: a.j.Ga,
                Ja: a.j.Ja,
                Pb: new eq
            };
        d = g.Pb;
        var h = new kP(a.context, a.L, f, a.o, c, e.output, a.C, a.H.value, a.J.value, a.P, g, a.j.nd);
        J(b, h);
        e = new jP(a.context, f, a.Z, c, a.o, h.C, h.ra, h.ka, a.C, a.H.value, a.J.value, g, h.ga, a.j.nd, a.P, e.output);
        J(b, e);
        c = new nP(a.context, c, xr(a.T), g, a.P, e.o, e.ra);
        J(b, c);
        a = new gr(a.context, a.slotId, kt);
        J(b, a);
        return d
    };
    var sP = function() {
        JO.apply(this, arguments)
    };
    _.T(sP, JO);
    var tP = function(a, b) {
            var c = _.cg(b ? "fencedframe" : "IFRAME");
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
        uP = function(a, b) {
            "string" !== typeof a.g && (b.width = String(a.g[0]), b.height = String(a.g[1]));
            var c = Hl(a.context, 774, function() {
                a.loaded(b);
                _.dg(b, "load", c)
            });
            _.rb(b, "load", c);
            _.rp(a, function() {
                return _.dg(b, "load", c)
            });
            a.l.Lh.appendChild(b)
        };
    var vP = function() {
        sP.apply(this, arguments)
    };
    _.T(vP, sP);
    vP.prototype.D = function() {
        var a = tP(this, !this.l.an);
        if ("string" === typeof this.Ra.re) {
            var b = this.Ra.re;
            /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = gb(b), a.src = _.ib(b).toString())
        } else a.config = this.Ra.re;
        uP(this, a);
        return a
    };
    vP.prototype.j = function() {
        return !1
    };
    var wP = navigator,
        xP = function(a, b, c, d, e, f, g, h) {
            Y.call(this, a, 1089);
            this.ec = b;
            this.X = c;
            this.T = d;
            this.j = f;
            this.o = h;
            W(this, h);
            e && (this.C = jI(this, e));
            g && (this.H = jI(this, g))
        };
    _.T(xP, Y);
    xP.prototype.g = function() {
        var a = {};
        if (1 === this.ec)
            for (var b = _.x(this.X), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = this.T[c.getDomId()];
                a[c.getId()] = yP(this, d, ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"], this.j)
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
                        a[e.getId()] = yP(this, g, f, this.j, k)
                    }
                }
            }
        this.o.G(a)
    };
    var yP = function(a, b, c, d, e) {
        var f = new hP,
            g = new AbortController;
        b = Js({
            ag: f,
            Bb: g,
            interestGroupBuyers: c,
            Jh: Io(a.context, b),
            il: d,
            Uk: e,
            fm: _.E(JF)
        });
        b = wP.runAdAuction(b).catch(function(h) {
            if (h instanceof DOMException && "TimeoutError" === h.name) return 2;
            if (_.E(QE) && h instanceof DOMException && "ThrottledError" === h.name) return 4;
            _.E(ME) && h instanceof Error && a.I(h);
            return 3
        });
        return new iP(b, f, c, g)
    };
    var zP = function(a, b, c, d) {
        Y.call(this, a, 1230);
        this.X = b;
        this.o = d;
        this.j = jI(this, c);
        W(this, d)
    };
    _.T(zP, Y);
    zP.prototype.g = function() {
        var a = this.j.value,
            b = new _.u.Map;
        if (null != a && a.size && !kw()) {
            var c = Rf(LE);
            if (0 !== c.length)
                for (var d = _.x(this.X), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f = a.get(e.getId()),
                        g = void 0;
                    if (null != (g = f) && g.length) {
                        g = new _.u.Map;
                        f = _.x(f);
                        for (var h = f.next(); !h.done; h = f.next()) h = h.value, _.z(c, "includes").call(c, _.sh(h).toString()) && g.set(h, Math.floor(63001 * _.rh()));
                        g.size && b.set(e.getAdUnitPath(), g)
                    }
                }
        }
        this.o.G(b)
    };
    var AP = function(a, b, c, d, e, f, g) {
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
    _.T(AP, Y);
    AP.prototype.g = function() {
        for (var a = Cs(this.o, this.H, this.Z, this.C), b = new _.u.Map, c = nt(a), d = new _.u.Map, e = _.x(this.X), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            f = g.getAdUnitPath();
            var h = a.get(us(f)),
                k = void 0,
                l = void 0,
                m = void 0,
                n = null != (m = null != (l = c) ? l : null == (k = h) ? void 0 : _.fk(k, Bs, 1).map(function(p) {
                    return _.I(p, 1)
                })) ? m : [];
            b.set(g.getId(), n);
            if (!d.has(f)) {
                g = [];
                n = _.x(n.sort());
                for (h = n.next(); !h.done; h = n.next()) g.push(_.sh(h.value));
                d.set(f, g)
            }
        }
        this.j.G(b);
        this.J.G(d)
    };
    var ot = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 1170);
        this.ec = b;
        this.T = c;
        this.Z = d;
        this.o = e;
        this.C = Date.now();
        this.j = {
            Tg: W(this)
        };
        2 === b && this.o && (this.j.ug = W(this));
        _.E(FF) && (this.j.Se = W(this));
        this.P = X(this, f);
        this.J = X(this, g);
        h && (this.H = jI(this, h));
        k && (this.W = X(this, k))
    };
    _.T(ot, Y);
    ot.prototype.g = function() {
        var a = this.P.value,
            b;
        if (!this.J.value || !a.length || (null == (b = this.W) ? 0 : b.value) || _.E(Ls) && !Es(this.C)) {
            this.j.Tg.ba();
            var c;
            null == (c = this.j.ug) || c.ba();
            var d;
            null == (d = this.j.Se) || d.ba()
        } else {
            b = new sk;
            _.S(this, b);
            if (2 === this.ec && this.o) {
                var e, f;
                var g = new AP(this.context, this.Z, this.o, this.C, a, null != (f = null == (e = this.H) ? void 0 : e.value) ? f : void 0, this.j.ug);
                J(b, g);
                g = g.j;
                _.E(FF) && (e = new zP(this.context, a, g, this.j.Se), J(b, e))
            }
            var h, k;
            a = new xP(this.context, this.ec, a, this.T, g, null != (k = null == (h = this.H) ? void 0 : h.value) ? k : void 0, this.j.Se, this.j.Tg);
            J(b, a);
            Bk(b)
        }
    };
    var BP = function(a, b, c) {
        Y.call(this, a, 1216);
        this.j = b;
        this.output = hI(this);
        this.o = X(this, c);
        this.wa = this.context.Qa
    };
    _.T(BP, Y);
    BP.prototype.g = function() {
        var a = this,
            b = this.o.value,
            c = new _.u.Map;
        if (!b.length || _.E(HE)) this.output.G(c);
        else {
            var d = this.j,
                e = _.Zf(),
                f = b.map(function(g) {
                    return d.createAuctionNonce().then(function(h) {
                        c.set(g, h)
                    }).catch(function(h) {
                        a.I(h)
                    })
                });
            this.output.La(_.u.Promise.all(f).then(function() {
                a.context.Bm && a.wa.ac.mc.Gd.yk.Rc({
                    Uc: _.Zf() - e,
                    Kl: b.length
                });
                return c
            }))
        }
    };
    var CP = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1166);
        this.fa = b;
        this.aa = c;
        this.H = d;
        this.j = hI(this);
        this.o = W(this);
        this.C = W(this);
        this.P = X(this, e);
        this.W = X(this, f);
        lI(this, g);
        this.J = X(this, h)
    };
    _.T(CP, Y);
    CP.prototype.g = function() {
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
            pb(d, db(JSON.stringify(b).replace(/</g, "\\u003C")));
            this.aa.head.appendChild(d);
            this.o.G(d);
            this.C.G(b);
            this.j.La(DP(c).catch(function(e) {
                e instanceof iH ? a.H(e) : (a.I(e), a.l(e));
                return null
            }))
        } else this.j.ba(), this.o.ba(), this.C.ba()
    };
    var DP = function(a) {
        var b, c;
        return _.tb(function(d) {
            if (1 == d.g) return d.yield(fetch(a.toString()).catch(function() {
                throw new iH("Failed to fetch bundle index.");
            }), 2);
            if (3 != d.g) return b = d.A, d.yield(b.text(), 3);
            c = d.A;
            return d.return(CA(c))
        })
    };
    var EP = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 1167);
        this.aa = b;
        this.Z = c;
        this.H = d;
        this.j = e;
        this.C = f;
        this.o = X(this, g);
        this.P = jI(this, h);
        this.W = jI(this, k);
        this.fa = jI(this, l);
        m && (this.J = jI(this, m))
    };
    _.T(EP, Y);
    EP.prototype.g = function() {
        var a = this.P.value,
            b = this.W.value,
            c = this.fa.value;
        if (a)
            if (b && c) {
                var d = ti(a, 1, 2),
                    e = ti(a, 2, 2);
                a = ti(a, 3, 2);
                if (d.length !== e.length) this.j(new hH("Received " + d.length + " ad URLs but " + e.length + " metadatas"));
                else {
                    c.resources = [].concat(_.xi(d.filter(function(f) {
                        return f
                    })), _.xi(a.map(function(f) {
                        return "https://securepubads.g.doubleclick.net" + f
                    })));
                    c.resources.length ? (a = _.cg("SCRIPT"), a.setAttribute("type", "webbundle"), pb(a, db(JSON.stringify(c).replace(/</g, "\\u003C"))), this.aa.head.removeChild(b), this.aa.head.appendChild(a)) : this.aa.head.removeChild(b);
                    for (b = 0; b < d.length; b++) c = void 0, this.H(b, e[b], {
                        kind: 1,
                        url: d[b]
                    }, this.o.value, this.Z, null == (c = this.J) ? void 0 : c.value, void 0, void 0);
                    this.C(d.length - 1, this.o.value, this.Z)
                }
            } else this.j(Error("Lost bundle script"))
    };
    var FP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        sk.call(this);
        e = new CP(a, f, h, c, m, n, p, r);
        J(this, e);
        J(this, new EP(a, h, g, b, c, d, k, e.j, e.o, e.C, l));
        this.g = {
            output: e.j
        }
    };
    _.T(FP, sk);
    var At = new _.u.Set,
        GP = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.t.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new Bo("Reached Limit for addEventListener");
        }, 3E5),
        HP = function(a, b, c) {
            _.V.call(this);
            this.context = a;
            this.R = b;
            this.l = c;
            this.g = [];
            this.enabled = !1;
            this.K = 0;
            this.D = new _.u.Map;
            At.add(this);
            this.R.info(JK(this.getName()))
        };
    _.T(HP, _.V);
    var Ct = function(a) {
        a.enabled || (a.enabled = !0, Pn(6, a.context), a.o())
    };
    HP.prototype.slotAdded = function(a, b) {
        this.g.push(a);
        var c = new ON(a, this.getName());
        ht(this.l, "slotAdded", 818, c);
        this.R.info(KK(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        _.Me(b, 4, _.ud, a)
    };
    HP.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return da(b.g, c)
        })
    };
    HP.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.K >= _.Pf(TD) && 0 < _.Pf(TD)) return GP(), !1;
        if (!c.IntersectionObserver && (_.H = ["impressionViewable", "slotVisibilityChanged"], _.z(_.H, "includes")).call(_.H, a)) return P(this.R, yL()), !1;
        var e;
        if (null == (e = this.D.get(a)) ? 0 : e.has(b)) return !1;
        this.D.has(a) || this.D.set(a, new _.u.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (k) {
                d.R.error(ZK(String(k), a));
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            }
        };
        this.D.get(a).set(b, c);
        this.l.listen(a, c);
        this.K++;
        return !0
    };
    HP.prototype.removeEventListener = function(a, b) {
        var c, d = null == (c = this.D.get(a)) ? void 0 : c.get(b);
        if (!d || !ZJ(this.l, a, d)) return !1;
        this.K--;
        return this.D.get(a).delete(b)
    };
    var st = function(a) {
        for (var b = _.x(At), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var wt = function(a, b, c, d) {
        HP.call(this, a, b, d);
        this.j = c;
        this.ads = new _.u.Map;
        this.Sc = !1
    };
    _.T(wt, HP);
    wt.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.Sc = a)
    };
    var LL = function(a, b) {
            var c;
            return a.j.enabled && !(null == (c = a.ads.get(b)) || !c.Wl)
        },
        ML = function(a, b, c, d) {
            b = new KN(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            ht(a.l, "slotRenderEnded", 67, b)
        };
    wt.prototype.getName = function() {
        return "companion_ads"
    };
    wt.prototype.slotAdded = function(a, b) {
        var c = this;
        a.listen(bK, function(d) {
            Nn(d.detail, 11) && (IP(c, a).Wl = !0)
        });
        HP.prototype.slotAdded.call(this, a, b)
    };
    wt.prototype.o = function() {};
    var IP = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.rp(b, function() {
                return a.ads.delete(b)
            }));
            return c
        },
        JL = function(a, b) {
            var c = gn().g,
                d = gn().A;
            if (a.j.enabled) {
                var e = {
                    jc: 3
                };
                a.I && (e.Hd = a.I);
                a.C && (e.Id = a.C);
                b = null != b ? b : a.g;
                c = Um(c, d);
                d = e.Hd;
                var f = e.Id;
                d && "number" !== typeof d || f && "number" !== typeof f || a.j.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.R.error(QK(b[0].getDomId()))
        },
        KL = function(a, b) {
            return a.g.filter(function(c) {
                return _.z(b, "includes").call(b, c.toString())
            })
        };
    var xt = function(a, b, c) {
        HP.call(this, a, b, c)
    };
    _.T(xt, HP);
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
        var d, e = null != (d = c.pb) ? d : this.configuration[a].Zf;
        0 === e || 1 / e < this.g || (b = b(_.z(Object, "assign").call(Object, {}, {
            pb: e
        }, c)), this.configuration[a].send(this.wa, b))
    };
    var JP = _.Bw(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        KP = _.Bw(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        LP = new _.u.Map([
            [2, {
                Jg: "page_level_ads"
            }],
            [5, {
                Jg: "shoppit"
            }],
            [6, {
                Jg: "side_rails"
            }]
        ]),
        MP = function(a) {
            var b = void 0 === b ? LP : b;
            this.context = a;
            this.g = b;
            this.A = new _.u.Map;
            this.loaded = new _.u.Set
        },
        OP;
    MP.prototype.load = function(a) {
        var b = _.NP(this, a),
            c, d = (null != (c = this.g.get(a.module)) ? c : {}).Jg;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            d = (c = _.zm(172)) && "pagead2.googlesyndication.com" === fB((c.src || "").match(_.eB)[3] || null) ? _.hb(KP, this.context.Pa, d) : _.hb(JP, this.context.Pa, d);
            c = {};
            var e = _.Pf(vE);
            e && (c.cb = e);
            d = _.z(Object, "keys").call(Object, c).length ? _.rx(d, c) : d;
            OP(this, a);
            _.hp(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.NP = function(a, b) {
        b = b.module;
        a.A.has(b) || a.A.set(b, new _.Ah);
        return a.A.get(b)
    };
    OP = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = Hl(a.context, 340, function(e) {
            if (a.g.has(c) && "function" === typeof e) {
                var f = a.g.get(c);
                f = (void 0 === f.Fk ? [] : f.Fk).map(function(g) {
                    return _.NP(a, g).promise
                });
                _.u.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(Do(), b, {
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
        Y.call(this, a, 980);
        this.output = new Xr;
        this.j = [];
        this.o = X(this, b)
    };
    _.T(cu, Y);
    cu.prototype.g = function() {
        for (var a = _.x((_.H = [this.o.value, this.j.map(function(c) {
                return c.value
            })], _.z(_.H, "flat")).call(_.H)), b = a.next(); !b.done; b = a.next()) lh(b.value);
        this.output.notify()
    };
    var Kt = function(a, b) {
        Y.call(this, a, 892, _.Pf(oE));
        this.bd = W(this);
        this.kd = W(this);
        this.fd = W(this);
        this.Ob = W(this);
        this.Bd = W(this);
        this.Dd = W(this);
        this.qc = W(this);
        this.j = kI(this, b);
        this.Nb = W(this)
    };
    _.T(Kt, Y);
    Kt.prototype.g = function() {
        var a = this.j.value;
        if (!a) throw Error("config timeout");
        this.bd.Ha(_.Am(a, Pz, 3));
        this.kd.Ha(_.Am(a, Rz, 2));
        var b = this.fd,
            c = b.G;
        var d = ue(a, 4, Zc, 2);
        c.call(b, d);
        b = this.Ob;
        c = b.Ha;
        d = _.fk(a, Lz, 6);
        c.call(b, d);
        b = this.Bd;
        c = b.Ha;
        d = _.fk(a, Jv, 5);
        c.call(b, d);
        this.Dd.Ha(_.Am(a, aA, 7));
        var e;
        b = this.qc;
        c = b.G;
        d = _.u.Set;
        var f;
        null == (e = _.Am(a, Mz, 1)) ? f = void 0 : f = ti(e, 6, 2);
        c.call(b, new d(f || []));
        this.Nb.Ha(_.Am(a, cA, 8))
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
                d.Tc || (c.error = Error("malformed response"), d.G([]))
            }
        })
    };
    _.T(Jt, Y);
    Jt.prototype.g = function() {
        if (this.error) throw this.error;
        this.j.G(Ve(dA, this.o.value))
    };
    var PP = function(a, b) {
        Y.call(this, a, 1081);
        this.Eb = W(this);
        this.j = jI(this, b)
    };
    _.T(PP, Y);
    PP.prototype.g = function() {
        this.j.value ? this.Eb.G(this.j.value) : this.Eb.ba()
    };
    var QP = new _.u.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        RP = function(a, b, c, d, e, f, g, h, k) {
            Y.call(this, a, 1079);
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
    _.T(RP, Y);
    RP.prototype.g = function() {
        var a = this,
            b = this.o.getAdUnitPath(),
            c = QP.get(_.jg(this.o, 2, 0));
        if (b && c) {
            var d, e = null != (d = this.ca) ? d : this.j.g;
            b = new rN(this.context, this.aa, b, c, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, e, this.j, this.H, this.R, !1, this.C);
            _.S(this, b);
            Bk(b)
        }
    };
    var bu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1082);
        this.googletag = b;
        this.ca = c;
        this.H = d;
        this.o = e;
        this.R = f;
        this.C = W(this);
        this.j = new PP(this.context, this.C);
        this.Eb = this.j.Eb;
        _.S(this, this.j);
        this.J = X(this, g)
    };
    _.T(bu, Y);
    bu.prototype.g = function() {
        if (_.E(tE)) {
            for (var a = [], b = _.x(this.J.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, jl(c, bA)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
            }
            this.C.Ha(null == d ? void 0 : _.Am(d, Wz, 4));
            d = new sk;
            _.S(this, d);
            a = _.x(a);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, J(d, new RP(this.context, document, this.googletag, null != (c = this.ca) ? c : this.o.g, this.H, this.o, this.R, _.Am(b, Yz, ml(b, bA, 5)), _.Am(b, Wz, 4)));
            J(d, this.j);
            Bk(d)
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
        pI.call(this, function(b, c) {
            Ll(a, b, c);
            var d;
            null == (d = console) || d.error(c)
        })
    };
    _.T(rw, pI);
    var SP = function() {
        sP.apply(this, arguments)
    };
    _.T(SP, sP);
    SP.prototype.D = function() {
        var a = this,
            b = this.l,
            c = b.lj;
        b = b.Te;
        var d = tP(this);
        if (null == c ? 0 : c.length)
            if (_.gy) {
                c = _.x(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.xi(c));
        b && (d.allow = b);
        uP(this, d);
        Nl(this.context, 653, function() {
            var f;
            if (f = Zj(a.Ra.hb)) {
                var g = f.toString().toLowerCase();
                f = -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") || _.E(SF) ? f : Zj("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>")
            }
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ja() && g.open("text/html", "replace");
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
    SP.prototype.j = function() {
        return !0
    };
    var Ju = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, N, R, M, Z) {
        Y.call(this, a, 680);
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
        this.o = iI(this);
        this.J = X(this, p);
        this.ka = X(this, r);
        lI(this, v);
        this.W = X(this, w);
        this.H = X(this, y);
        this.P = X(this, B);
        lI(this, G);
        this.ra = jI(this, C);
        lI(this, F);
        this.ga = X(this, N);
        lI(this, R);
        Z && lI(this, Z);
        M && (this.fa = jI(this, M))
    };
    _.T(Ju, Y);
    Ju.prototype.g = function() {
        var a = this.J.value;
        if (0 === a.kind && null == a.hb) throw new hH("invalid html");
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
                    sj: this.W.value,
                    Lh: this.H.value,
                    Oa: this.Oa,
                    vb: this.vb,
                    lj: this.ra.value,
                    isBackfill: this.isBackfill,
                    Ub: this.Ub,
                    Te: this.ga.value,
                    an: null == (b = this.ha) ? void 0 : _.Q(b, 14),
                    Nf: null == (c = this.fa) ? void 0 : c.value,
                    ab: this.ab
                };b = this.ka.value;c = a.kind;
            switch (c) {
                case 0:
                    a = new(b ? MO : SP)(d, a, e);
                    break a;
                case 2:
                    a = new vP(d, a, e);
                    break a;
                default:
                    nb(c)
            }
            a = void 0
        }
        _.S(this, a);
        d = a.render();
        TP(this, this.B, d);
        this.B.top && this.B.top !== this.B && _.Wk(this.B.top) && TP(this, this.B.top, d);
        this.o.notify();
        this.j.G(d);
        this.C.G(a.j())
    };
    var TP = function(a, b, c) {
        sp(a, a.id, b, "message", function(d) {
            c.contentWindow === d.source && ht(a.slotId, hr, 824, d)
        })
    };
    var pu = function(a, b, c, d, e) {
        Y.call(this, a, 720);
        this.format = b;
        this.sa = c;
        this.gb = d;
        this.height = e;
        this.output = W(this)
    };
    _.T(pu, Y);
    pu.prototype.g = function() {
        if (null == this.height) this.output.ba();
        else {
            var a = Math.round(.3 * this.sa),
                b;
            2 !== this.format && 3 !== this.format || null == (b = this.gb) || !_.Q(b, 12, !1) || 0 >= a || this.height <= a ? this.output.G(this.height) : this.output.G(a)
        }
    };
    var yu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Y.call(this, a, 674);
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
        this.C = jI(this, l);
        n && lI(this, n)
    };
    _.T(yu, Y);
    yu.prototype.g = function() {
        var a = mq(this.ca, this.o),
            b = Xm(this.slotId, this.aa) || Pp(this.j.value, en(this.slotId), a);
        this.H.value && !a && (b.style.display = "inline-block");
        this.J ? kK(this.L, this.slotId, function() {
            return void _.ZA(b)
        }) : _.rp(this, function() {
            return void _.ZA(b)
        });
        a = UP(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.output.G(b)
    };
    var UP = function(a) {
        var b = a.j.value,
            c, d = null == (c = a.C.value) ? void 0 : c.height;
        if (b && !a.vb && d) {
            c = a.ca;
            var e;
            a = (null != (e = lq(a.o, 23)) ? e : _.Q(c, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else a = 0;
        return a
    };
    var nu = function(a, b) {
        Y.call(this, a, 859);
        this.B = b;
        this.output = W(this)
    };
    _.T(nu, Y);
    nu.prototype.g = function() {
        this.output.G(!_.Wk(this.B.top))
    };
    var Fu = function(a, b, c) {
        Y.call(this, a, 840);
        this.format = b;
        this.aa = c;
        this.output = W(this)
    };
    _.T(Fu, Y);
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
        Y.call(this, a, 1207);
        this.za = c;
        this.slotId = d;
        lI(this, b)
    };
    _.T(Xu, Y);
    Xu.prototype.g = function() {
        ht(this.za, "impressionViewable", 715, new LN(this.slotId, "publisher_ads"))
    };
    var Wu = function(a, b, c, d) {
        bO.call(this, a, b, c);
        lI(this, d)
    };
    _.T(Wu, bO);
    var Su = function(a, b, c, d, e, f) {
        f = void 0 === f ? mu : f;
        Y.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.aa = d;
        this.za = e;
        this.C = f;
        this.j = this.o = -1;
        this.J = _.ay(function() {
            ht(g.za, "slotVisibilityChanged", 716, new MN(g.slotId, "publisher_ads", g.j))
        }, 200);
        this.H = X(this, c);
        var h = new Xr;
        $J(this.slotId).then(function() {
            return void h.notify()
        });
        lI(this, h)
    };
    _.T(Su, Y);
    Su.prototype.g = function() {
        var a = this,
            b = this.C(Hl(this.context, this.id, function(c) {
                c = _.x(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.z(Number, "isFinite").call(Number, a.o) && VP(a)
            }));
        b && (b.observe(this.H.value), sp(this, this.id, this.aa, "visibilitychange", function() {
            VP(a)
        }), _.rp(this, function() {
            b.disconnect()
        }))
    };
    var VP = function(a) {
        var b = Math.floor(IH(a.aa) ? 0 : a.o);
        if (0 > b || 100 < b || b === a.j ? 0 : -1 !== a.j || 0 !== b) a.j = b, a.J()
    };
    var Du = function(a, b, c, d, e, f) {
        Y.call(this, a, 719);
        this.ca = b;
        this.o = c;
        this.sh = d;
        this.output = W(this);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(Du, Y);
    Du.prototype.g = function() {
        var a = this.j.value.kind;
        switch (a) {
            case 0:
                this.j.value.hb ? this.C.value ? (a = new In, a = Zh(a, 3, this.sh), _.Q(On([a, this.ca.Fc(), this.o.Fc()]), 3) ? this.output.G(tJ) : this.output.ba()) : this.output.ba() : this.output.ba();
                break;
            case 2:
                this.output.ba();
                break;
            default:
                nb(a)
        }
    };
    var WP = function(a, b, c, d, e, f) {
        Y.call(this, a, 1119);
        this.slotId = b;
        this.o = c;
        this.documentElement = d;
        this.L = e;
        this.j = f;
        this.output = W(this)
    };
    _.T(WP, Y);
    WP.prototype.g = function() {
        var a = _.cg("INS");
        a.id = this.o;
        Km(this.j) && _.xp(a, {
            display: "none"
        });
        this.documentElement.appendChild(a);
        var b = function() {
            return void _.ZA(a)
        };
        (_.H = [2, 3], _.z(_.H, "includes")).call(_.H, this.j) ? kK(this.L, this.slotId, b) : _.rp(this, b);
        this.output.G(a)
    };
    var XP = function(a, b, c, d, e) {
        Y.call(this, a, 1120);
        this.J = b;
        this.C = c;
        this.o = d;
        this.j = e;
        this.output = W(this);
        a = this.j;
        if (!_.ja(a) || !_.ja(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) this.H = X(this, this.j)
    };
    _.T(XP, Y);
    XP.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.H) ? void 0 : a.value) ? b : this.j;
        if (!(_.H = [2, 3], _.z(_.H, "includes")).call(_.H, this.C)) {
            a = _.x(_.z(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, 1 === b.nodeType && b.id !== this.J && _.ZA(b);
            this.o || (c.style.display = "")
        }
        this.output.G(c)
    };
    var qu = function(a, b, c, d, e, f, g, h, k) {
        sk.call(this);
        c ? (a = new XP(a, e, g, k, c), J(this, a), a = a.output) : Jm(g) ? (a = new WP(a, b, d, f, h, g), J(this, a), a = a.output) : (b = new zr(a, b, aK, function(l) {
            return l.detail
        }), J(this, b), a = new XP(a, e, g, k, b.output), J(this, a), a = a.output);
        this.output = a
    };
    _.T(qu, sk);
    var YP = function(a, b) {
            var c = gn();
            this.context = a;
            this.L = b;
            this.g = c
        },
        ZP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y) {
            var B = document,
                C = window;
            e || f || sK(a.L, d);
            var G = bv(a.context, b, a.g, c, d, e, f, g, h, k, l, B, m, n, p, r, v, function() {
                sK(a.L, d);
                rK(a.L, d, G)
            }, w, y);
            f || rK(a.L, d, G);
            _.rp(d, function() {
                sK(a.L, d)
            });
            C.top !== C && C.addEventListener("pagehide", function(F) {
                F.persisted || sK(a.L, d)
            });
            Bk(G)
        };
    var $P = function(a, b, c, d) {
        Y.call(this, a, 884);
        this.Da = b;
        this.ib = c;
        this.o = W(this);
        this.j = X(this, d)
    };
    _.T($P, Y);
    $P.prototype.g = function() {
        EM(this.ib, _.Qn(this.Da, "__gads", this.j.value));
        Sn(20, this.context, this.Da, this.j.value);
        Sn(2, this.context, this.Da, this.j.value);
        this.o.G(mh())
    };
    var dv = 0,
        aQ = new _.Nm(-9, -9);
    var hv = new _.u.Set([function(a, b) {
        var c = a.oa.O.ca;
        b.set("pvsid", {
            value: a.na.context.pvsid
        }).set("correlator", {
            value: vs(c, 26)
        })
    }, function(a, b) {
        var c = a.oa.O.ca,
            d = a.dn;
        a = d.Id;
        d = d.Hd;
        var e = _.Q(c, 21);
        b = b.set("hxva", {
            value: e ? 1 : null
        }).set("cmsid", {
            value: e ? hk(c, 23) : null
        }).set("vid", {
            value: e ? hk(c, 22) : null
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
        c = a.Yg;
        var f = c.kl,
            g = c.dl;
        b.set("eid", {
            value: a.na.lg
        }).set("debug_experiment_id", {
            value: AC().split(",")
        }).set("expflags", {
            value: _.zm(253) ? Qf(VD) || null : null
        }).set("pied", {
            value: function() {
                var h = new tI,
                    k = !1,
                    l = !1;
                f && (k = !0, ok(h, 1, Wz, f));
                var m = d.map(function(p) {
                    var r = new rI,
                        v, w;
                    null == (v = e[p.getDomId()]) ? w = void 0 : w = _.fk(v, Wz, 27);
                    p = w;
                    if (null == p || !p.length) return r;
                    l = k = !0;
                    p = _.x(p);
                    for (v = p.next(); !v.done; v = p.next()) ok(r, 1, Wz, v.value);
                    return r
                });
                l && _.um(h, 2, m);
                m = _.x(null != g ? g : []);
                for (var n = m.next(); !n.done; n = m.next()) ok(h, 1, Wz, n.value), k = !0;
                return k ? Hb(h.g(), 3) : null
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
        a = nv(a.oa.O.ca) || new NL;
        var d = _.jg(a, 6, 2);
        b = b.set("rdp", {
            value: _.Q(a, 1) ? "1" : null
        }).set("ltd", {
            value: _.Q(a, 9) ? "1" : null
        }).set("ltd_cs", {
            value: _.E(OD) && _.zm(221) && null == Nn(c, 3) ? "1" : null
        }).set("gdpr_consent", {
            value: Bv(c, 2)
        }).set("gdpr", {
            value: null != Nn(c, 3) ? _.Q(c, 3) ? "1" : "0" : null,
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
            value: null != _.Xc(_.fi(a, 5)) ? _.jg(a, 5, 0) : null,
            options: {
                Ia: !0
            }
        }).set("trt", {
            value: null != _.Xc(_.fi(a, 10)) ? _.jg(a, 10, 0) : null,
            options: {
                Ia: !0
            }
        }).set("tad", {
            value: _.E(gv) && null != Nn(c, 8) ? _.Q(c, 8) ? "1" : "0" : null,
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
            f = c.wg,
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
                return Im(l)
            })
        }).set("fluid", {
            value: function() {
                var l = !1,
                    m = h.map(function(n) {
                        n = (_.H = Hm(n), _.z(_.H, "includes")).call(_.H, "fluid");
                        l || (l = n);
                        return n ? "height" : "0"
                    });
                return l ? m : null
            }()
        }).set("ifi", {
            value: function() {
                var l = Kp(g);
                if (!f) {
                    l += 1;
                    var m = g,
                        n = e.length;
                    n = void 0 === n ? 1 : n;
                    m = IB(Sf(m)) || m;
                    m.google_unique_id = (m.google_unique_id || 0) + n
                }
                return l
            }()
        }).set("didk", {
            value: _.E(yE) ? dq(e, function(l) {
                return _.sh(l.getDomId())
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
            value: XL ? XL : XL = Dn()
        }).set("fsfs", {
            value: dq(a, function(f) {
                f = e[f.getDomId()];
                var g;
                return Number(null != (g = null == f ? void 0 : lq(f, 12)) ? g : Nn(d, 13))
            }),
            options: {
                Ua: ",",
                Rd: 0,
                md: !0
            }
        }).set("fsbs", {
            value: dq(a, function(f) {
                f = e[f.getDomId()].Fc();
                var g = d.Fc(),
                    h;
                return (null != (h = null == f ? void 0 : lq(f, 3)) ? h : null == g ? 0 : _.Q(g, 3)) ? 1 : 0
            }),
            options: {
                Rd: 0,
                md: !0
            }
        })
    }, function(a, b) {
        var c = a.na.L;
        a = a.oa;
        var d = a.wg;
        b.set("rcs", {
            value: dq(a.X, function(e) {
                if (!d) {
                    var f = c.g.get(e);
                    f && f.hj++
                }
                return qK(c, e)
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
            value: !a && c.getClickUrl() ? hk(c, 7) : null
        })
    }, function(a, b, c) {
        var d = a.oa,
            e = d.X,
            f = d.O.T;
        a = a.na;
        var g = a.Z,
            h = a.B;
        c = void 0 === c ? function(n, p) {
            return gh(n, p)
        } : c;
        a = e.map(function(n) {
            return f[n.getDomId()]
        });
        var k, l, m;
        b.set("ists", {
            value: bq(a, yr) || null
        }).set("fas", {
            value: dq(a, function(n) {
                return yq(xr(n))
            }),
            options: {
                Rd: 0,
                md: !0
            }
        }).set("itsi", {
            value: e.some(function(n) {
                var p;
                return !oN(n) && 5 === (null == (p = f[n.getDomId()]) ? void 0 : xr(p))
            }) ? function() {
                var n = c(g, h);
                if (!n) return 1;
                var p;
                n = Math.max.apply(Math, _.xi(null != (p = _.KI(n, 604800)) ? p : []));
                return isFinite(n) ? Math.floor(Math.max((Date.now() - n) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: bq(a, function(n) {
                return 5 === xr(n) && _.E(_.aE)
            }) || null
        }).set("ifs", {
            value: null != (m = null == (k = (_.H = _.z(Object, "values").call(Object, f), _.z(_.H, "find")).call(_.H, function(n) {
                return ji(n, mM, 29)
            })) ? void 0 : null == (l = _.Am(k, mM, 29)) ? void 0 : gl(l)) ? m : null
        })
    }, function(a, b) {
        a = a.oa;
        var c = a.O.T;
        a = a.X.map(function(d) {
            return c[d.getDomId()]
        });
        b.set("rbvs", {
            value: bq(a, function(d) {
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
            l = new Fp;
        l.set(0, 1 !== c);
        k = k[f[0].getDomId()];
        l.set(1, !!_.Q(k, 17));
        l.set(2, Tq(f, g));
        l.set(3, _.Q(h, 27) || !1);
        l.set(4, 3 === c);
        f = Hp(l);
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
            e = _.Qn(d, "__gads", c);
        a = "1" === _.Qn(d, "__gpi_opt_out", c) ? "1" : null;
        b = b.set("cookie", {
            value: e,
            options: {
                Ia: !0
            }
        }).set("cookie_enabled", {
            value: !e && qH(d, c) ? "1" : null
        });
        e = b.set;
        c = (c = _.Qn(d, "__gpi", c)) && !_.z(c, "includes").call(c, "&") ? c : null;
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
            value: (a || Lm(c)) === d.URL ? "" : e
        })
    }, function(a, b) {
        a = a.na.B;
        b.set("arp", {
            value: up(a) ? 1 : null
        }).set("abxe", {
            value: _.Wk(a.top) || vv(a.IntersectionObserver) ? 1 : null
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
        for (var e = Gm(!0, a), f = d.ca, g = a.document, h = d.T, k = [], l = [], m = _.x(c), n = m.next(); !n.done; n = m.next()) {
            var p = n.value,
                r = h[p.getDomId()],
                v = mq(f, r);
            n = void 0;
            p = null != (n = cn(p, r, g, v)) ? n : aQ;
            k.push(Math.round(p.x));
            l.push(Math.round(p.y))
        }
        e && (d.Jd = e);
        f = bh(a) ? null : Gm(!1, a);
        try {
            var w = a.top;
            var y = cv(w.document, w)
        } catch (B) {
            y = new _.Nm(-12245933, -12245933)
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
                for (var k = 0; k < c.length; k++) f[k] = [].concat(_.xi(pm(h)))
            } else a.set(_.I(h, 1), [pm(h)[0]]);
        for (d = 0; d < c.length; d++)
            if (h = e[c[d].getDomId()])
                for (h = _.x(h.Sa()), k = h.next(); !k.done; k = h.next()) {
                    k = k.value;
                    var l = _.I(k, 1);
                    if ("tag_origin" === _.I(k, 1)) {
                        g = !0;
                        var m = l = void 0;
                        (l = f)[m = d] || (l[m] = []);
                        f[d].push.apply(f[d], _.xi(pm(k)))
                    } else m = a.get(l) || [], k = pm(k)[0], 1 === c.length ? m[0] = k : k !== m[0] && (m[d + 1] = k), a.set(l, m)
                }
        c = [];
        e = _.x(_.z(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) h = d.value, d = pn()[h], h = a.get(h), d && h && "to" !== d && (1 < h.length ? (h = h.map(function(n) {
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
        d = new Fp;
        "SVGElement" in k && "createElementNS" in k.document && d.set(0);
        e = pB();
        e["allow-top-navigation-by-user-activation"] && d.set(1);
        e["allow-popups-to-escape-sandbox"] && d.set(2);
        k.crypto && k.crypto.subtle && d.set(3);
        "TextDecoder" in k && "TextEncoder" in k && d.set(4);
        k = Hp(d);
        h = h.call(c, "bc", {
            value: k
        });
        k = h.set;
        a: {
            try {
                var n, p, r = null == (n = a.performance) ? void 0 : null == (p = n.getEntriesByType("navigation")) ? void 0 : p[0];
                if (null == r ? 0 : r.type) {
                    var v;
                    var w = null != (v = BH.get(r.type)) ? v : null;
                    break a
                }
            } catch (G) {}
            var y, B, C;w = null != (C = CH.get(null == (y = a.performance) ? void 0 : null == (B = y.navigation) ? void 0 : B.type)) ? C : null
        }
        w = k.call(h, "nvt", {
            value: w
        });
        n = w.set;
        p = _.Pf(JD);
        p = 0 === p ? null : CB(a, 2 === p);
        w = n.call(w, "bz", {
            value: p
        });
        n = w.set;
        _.E(AE) ? a = Ka() && nl(a) ? a.document.documentElement.lang : void 0 : a = null;
        n.call(w, "tl", {
            value: a
        })
    }, function(a, b) {
        (a = _.zm(251)) && b.set("uach", {
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
            bh(d) || (k = "", a = !0)
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
            m = _.Wk(d.top) && (null == (p = d.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
            var v;
            p = null == (v = d.location) ? void 0 : v.ancestorOrigins;
            d = rl(d) || "";
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
            value: _.E(RF) || _.Nf(Jl).g ? a : null
        }).set("rume", {
            value: _.E(QF) ? 1 : null
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
        var e = Sp(d, c.T, c.ca),
            f = Vp(d, e, a);
        c = f.Pl;
        f = f.Km;
        var g = Xp(d, e, a),
            h = g.Zk;
        g = g.Nl;
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
            value: pK(a.na.L, a.oa.X)
        })
    }, function(a, b) {
        var c = a.na;
        a = c.Z;
        c = c.B;
        var d = c.document.domain;
        var e = fh(a) ? "null" !== c.origin ? c.document.cookie : null : null;
        var f = null != e ? e : "",
            g = c.history.length,
            h = c.screen,
            k = c.document.referrer;
        if (Sf()) var l = window.gaGlobal || {};
        else {
            var m = Math.round((new Date).getTime() / 1E3),
                n = c.google_analytics_domain_name;
            d = "undefined" == typeof n ? LG("auto", d) : LG(n, d);
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
                    p = JG.appName;
                    var y = JG.version,
                        B = JG.language ? JG.language : JG.browserLanguage,
                        C = JG.platform,
                        G = JG.userAgent;
                    try {
                        w = JG.javaEnabled()
                    } catch (F) {
                        w = !1
                    }
                    w = [p, y, B, C, G, w ? 1 : 0].join("");
                    h ? w += h.width + "x" + h.height + h.colorDepth : _.t.java && _.t.java.awt && (h = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), w += h.screen.width + "x" + h.screen.height);
                    w = w + f + (k || "");
                    for (k = w.length; 0 < g;) w += g-- ^ k++;
                    e.vid = (r ^ KG(w) & 2147483647) + "." + m
                }
                e.from_cookie || (e.from_cookie = !1)
            }
            if (!e.cid) {
                b: for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), w = 0; w < f.length; w++)
                    if (k = MG.exec(f[w]) || NG.exec(f[w]) || OG.exec(f[w])) {
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
        v && !fh(a) || b.set("ga_vid", {
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
        a = a.Zm;
        var e = a.bh,
            f = a.Ue,
            g = a.Fm,
            h = a.ak;
        if (!_.E(TF) && !g) {
            oh(d.isSecureContext, d.navigator, d.document) && b.set("td", {
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
                    nb(e)
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
            d = a.Pm;
        a = d.Sm;
        d = d.Qm;
        ph(c.isSecureContext, c.document) && (b.set("topics", {
            value: a instanceof Uint8Array ? Hb(a, 3) : a
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
        a = a.tm;
        c = a.uf;
        var g = a.Rk,
            h = a.Hl;
        if (!_.E(SD)) {
            a = b.set;
            d = gh(e, d);
            e = Gl(f[0].getAdUnitPath());
            var k = _.E(Dk);
            k = void 0 === k ? !1 : k;
            f = new nA;
            var l = null != g ? g : [];
            g = k ? 1024 : 300;
            if (e && c && l && "function" === typeof c.getUserIdsAsEidBySource) {
                if ("function" === typeof c.getUserIdsAsEids) try {
                    for (var m = _.x(c.getUserIdsAsEids()), n = m.next(); !n.done; n = m.next()) {
                        var p = n.value;
                        "string" === typeof p.source && ck(52, p.source)
                    }
                } catch (w) {
                    var r;
                    ck(45, "", null == (r = w) ? void 0 : r.message)
                }
                m = _.x(l);
                for (n = m.next(); !n.done; n = m.next())
                    if (n = n.value, String(_.I(n, 1)) === e)
                        for (n = _.x(_.fk(n, Jz, 2)), p = n.next(); !p.done; p = n.next())
                            if (p = p.value, _.Q(p, ml(p, Kz, 3)) && (p = _.I(p, 1), !ik(f, p))) {
                                r = null;
                                try {
                                    var v = l = k = void 0;
                                    r = null == (k = c.getUserIdsAsEidBySource(p)) ? void 0 : null == (l = k.uids) ? void 0 : null == (v = l[0]) ? void 0 : v.id
                                } catch (w) {
                                    k = void 0, ck(45, p, null == (k = w) ? void 0 : k.message)
                                }
                                r && (r.length > g ? (k = {}, ck(12, p, null, (k.sl = String(r.length), k.fp = "1", k))) : (k = iA(p), l = ri(k, 2, r), k = f, l = Zh(l, 11, !0), ok(k, 2, gk, l), k = {}, ck(19, p, null, (k.fp = "1", k.hs = r ? "1" : "0", k))))
                            }
            }
            pk(f, d, e, h);
            _.fk(f, gk, 2).length ? (c = {}, ck(50, "", null, (c.ns = String(_.fk(f, gk, 2).length), c)), c = Hb(f.g(), 3)) : c = null;
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
            value: dq(a, function(e) {
                return Hb(e.g(), 3)
            }),
            options: _.z(Object, "assign").call(Object, {}, {
                Ua: "~"
            }, {
                md: !0
            })
        })
    }, function(a, b) {
        var c = [];
        a = _.x(_.fk(Yy(a.oa.O.ca.hi(), Ft, 2), Mr, 1));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            ti(e, 2, 2).length && (d = null != Ji(e, 3) ? _.az(e, 3) : _.jg(e, 1, 0) + 2, e = ti(e, 2, 2).join("|"), c.push(d + "=" + e))
        }
        b.set("pps", {
            value: c,
            options: {
                Ua: "~"
            }
        })
    }, function(a, b) {
        var c = a.Sl;
        a = c.hl;
        c = c.en;
        b.set("scar", {
            value: a
        });
        _.E(XD) && (null == a ? 0 : a.length) && null != c && b.set("wst", {
            value: "0" === a ? "WEBVIEW_SDK_PAW" === c ? (3).toString() : (5).toString() : "WEBVIEW_SDK_PAW" === c ? (2).toString() : (4).toString()
        })
    }, function(a, b) {
        a = a.na.B;
        a = !(!a.isSecureContext || !nh("attribution-reporting", a.document));
        !_.E(OF) && a && b.set("nt", {
            value: 1
        })
    }, function(a, b) {
        if (a = a.cm.bm) a = xy(gl(a), 3), b.set("psd", {
            value: a
        })
    }, function(a, b) {
        a = _.bg(a.na.B);
        var c = $q;
        0 < a && c >= a && b.set("dlt", {
            value: a
        }).set("idt", {
            value: c - a
        })
    }, function(a, b) {
        a = a.oa.O.ca;
        b.set("ppid", {
            value: _.Ii(a, 16) ? _.I(a, 16) : null,
            options: {
                Ia: !0
            }
        })
    }, function(a, b) {
        var c = b.set;
        (a = hk(a.oa.O.ca, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + xy('role:1 producer:12 loc:"' + a + '"')) : a = "";
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
                    h = pp(h);
                    if (g = e.g.get(g)) g.Ld = h;
                    return h
                }
                h = d.ca;
                var k = d.T[g.getDomId()],
                    l;
                if (!(l = Uu(e, g))) {
                    h = pp(k, _.Q(h, 6) || _.Q(k, 17) ? null : Ym(g));
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
            if (bh(a)) e = !1;
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
        f = a.top == a ? 0 : _.Wk(a.top) ? 1 : 2;
        g = 4;
        d || 1 !== f ? d || 2 !== f ? d && 1 === f ? g = 7 : d && 2 === f && (g = 8) : g = 6 : g = 5;
        e && (g |= 16);
        d = String(g);
        if (a !== a.top)
            for (e = a; e && e !== e.top && _.Wk(e) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; e = e.parent);
        c.call(b, "frm", {
            value: d || null
        })
    }, function(a, b) {
        var c = b.set;
        a = Yy(a.oa.O.ca, Ht, 36);
        a = ue(a, 1, _.Xc, 2);
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
        a = a.tk.rd;
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
        _.E(MD) && b.set("no_cau_info", {
            value: a.has(d) ? "1" : null
        })
    }, function(a, b) {
        var c = a.oa,
            d = c.O.T;
        a = a.na.B;
        var e = [],
            f = !1;
        c = _.x(c.X);
        for (var g = c.next(); !g.done; g = c.next()) g = xr(d[g.value.getDomId()]), (_.H = [8, 9], _.z(_.H, "includes")).call(_.H, g) ? (f = 9 === g ? "right" : "left", e.push(_.Ej(a).sideRailPlasParam.get(f)), f = !0) : e.push("");
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
        a = a.Pk.Qk;
        if (_.E(RD)) {
            var g;
            (g = !a) || (g = !Ie(a, 1, Bd).get(e));
            a = g;
            var h;
            f = !(null == (h = nv(f)) || !_.Q(h, 9));
            d = new WG(d, {
                im: a,
                hm: f
            });
            d = _.Q(c, 8) || (d.options.hm || !fh(c)) && d.options.im ? void 0 : (new hh(d.g.document)).get("__eoi") || "";
            d && b.set("eo_id_str", {
                value: d
            })
        }
    }, function(a, b) {
        a = a.oa;
        var c = a.X,
            d = a.O.T;
        _.E(Mv) && b.set("eov", {
            value: bq(c, function(e) {
                var f, g;
                return !!(null == (f = d[e.getDomId()]) ? 0 : null == (g = _.Am(f, nM, 31)) ? 0 : _.Q(g, 1))
            })
        })
    }]);
    var bQ = function(a, b, c) {
        Y.call(this, a, 798);
        this.output = W(this);
        this.j = jI(this, b);
        this.o = X(this, c)
    };
    _.T(bQ, Y);
    bQ.prototype.g = function() {
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
                b.set(f, d ? cQ(this, f, h) : function() {
                    return a.o.value
                })
            }
        }
        this.output.G(b)
    };
    var cQ = function(a, b, c) {
        return Hi(function() {
            var d = _.z(Object, "assign").call(Object, {}, a.j.value);
            d.oa.wg = !0;
            d.oa.X = [b];
            c && (d.sb.ze = new _.u.Map, d.sb.ze.set(b, c));
            return Nq(mv(d)).url
        })
    };
    var dQ = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 810);
        this.o = b;
        this.zb = c;
        this.O = d;
        this.R = e;
        this.B = f;
        this.Z = g;
        this.j = W(this)
    };
    _.T(dQ, Y);
    dQ.prototype.g = function() {
        var a = this,
            b = this.o;
        !this.zb && 1 < this.o.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.M) return !1;
            var d = a.O.T[c.getDomId()],
                e;
            if (e = !(Dq(xr(d)) && (_.H = Rf(lE), _.z(_.H, "includes")).call(_.H, String(xr(d))))) e = a.R, Qi(a.B) && 4 === xr(d) ? (P(e, cL("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1, e = !e;
            if (e) {
                e = a.context;
                var f = a.R,
                    g = a.B,
                    h = a.Z;
                d = xr(d);
                5 !== d ? c = !1 : (e.V.log(578856259, _.pj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Hb: e.Pa,
                    U: 1
                }), (g = xq(g, !oN(c), h)) ? (qq(f, g, d, c.getAdUnitPath()), e.V.log(578856259, oj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Hb: e.Pa,
                    Il: g
                }), e.V.log(578856259, _.pj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Hb: e.Pa,
                    U: 2
                })) : e.V.log(578856259, _.pj, {
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
        30 < b.length && (P(this.R, bL("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.j.G(b)
    };
    var eQ = function(a, b, c) {
        Y.call(this, a, 919);
        this.j = b;
        this.Z = c;
        this.output = W(this)
    };
    _.T(eQ, Y);
    eQ.prototype.g = function() {
        var a, b = !(null == (a = this.j) ? 0 : _.Q(a, 9)) && !!fh(this.Z);
        this.output.G(b)
    };
    var fQ = function(a, b, c, d, e, f) {
        Y.call(this, a, 928);
        this.requestId = b;
        this.C = f;
        this.output = iI(this);
        this.o = X(this, c);
        e && (this.j = X(this, e));
        lI(this, d)
    };
    _.T(fQ, Y);
    var gQ = function(a) {
        return a.j ? a.C.split(",").some(function(b) {
            var c;
            return null == (c = a.j) ? void 0 : c.value.has(b)
        }) : !1
    };
    fQ.prototype.g = function() {
        var a = this.context,
            b = this.requestId,
            c = this.o.value.length,
            d = gQ(this);
        if (a.Wc) {
            var e = a.Qa,
                f = e.Vc;
            a = vl(a);
            var g = new aD;
            b = _.lj(g, 2, b);
            c = _.zl(b, 1, c);
            d = _.yl(c, 3, d);
            d = _.Al(a, 7, Bl, d);
            f.call(e, d)
        }
        this.output.notify()
    };
    var rv = new _.u.Map;
    var hQ = function(a, b, c, d) {
        Y.call(this, a, 867);
        this.za = b;
        this.O = c;
        this.output = iI(this);
        this.j = X(this, d)
    };
    _.T(hQ, Y);
    hQ.prototype.g = function() {
        for (var a = _.x(this.j.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.x(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = Cm(this.O.T[b.getDomId()], 20);
            ht(b, cK, 808, {
                xk: c,
                qm: d
            });
            ht(this.za, "slotRequested", 705, new PN(b, "publisher_ads"))
        }
        this.output.notify()
    };
    var iQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, N, R, M, Z, fa, qa, ea, Pa, wa, Ca, Na, Xa, fb, Ua, dc) {
        Y.call(this, a, 785, _.Pf(zE));
        this.zb = b;
        this.L = c;
        this.Da = d;
        this.O = e;
        this.jc = f;
        this.networkCode = g;
        this.Id = h;
        this.Hd = k;
        this.lg = l;
        this.timer = m;
        this.Z = n;
        this.isSecureContext = p;
        this.Qb = r;
        this.B = v;
        this.He = w;
        this.j = W(this);
        this.o = W(this);
        this.P = W(this);
        lI(this, M);
        this.Ma = kI(this, y);
        this.Ec = kI(this, B);
        this.W = kI(this, C);
        this.H = X(this, G);
        N && (this.C = _.E(CE) ? new bI(N.Fd) : kI(this, N.Fd), N.te && (this.Kb = jI(this, N.te)));
        R && (this.J = _.E(CE) ? new bI(R.Zc) : kI(this, R.Zc));
        lI(this, M);
        Z && (this.mb = X(this, Z));
        fa && (this.fa = new bI(fa));
        qa && (this.eb = jI(this, qa));
        ea && (this.ra = X(this, ea));
        Pa && lI(this, Pa);
        wa && (this.xa = X(this, wa));
        F && (this.ga = jI(this, F));
        Ca && (this.qb = jI(this, Ca.Xg));
        Na && (this.Dc = X(this, Na));
        Xa && (this.ta = jI(this, Xa));
        fb && (this.ka = jI(this, fb));
        Ua && (this.rb = X(this, Ua));
        dc && (this.Ac = kI(this, dc))
    };
    _.T(iQ, Y);
    iQ.prototype.g = function() {
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
                    lg: this.lg,
                    isSecureContext: this.isSecureContext,
                    Qb: this.Qb
                },
                oa: {
                    networkCode: this.networkCode,
                    X: this.H.value,
                    O: this.O,
                    jc: this.jc,
                    wg: !1
                },
                dn: {
                    Id: this.Id,
                    Hd: this.Hd
                },
                Sl: {
                    hl: null != (w = this.Ma.value) ? w : "0",
                    en: null != (y = this.Ec.value) ? y : "WEBVIEW_SDK_PAW"
                },
                sb: {
                    ze: null == (c = this.ga) ? void 0 : c.value
                },
                Pm: {
                    Sm: a,
                    Qm: null == (d = this.Kb) ? void 0 : d.value
                },
                tm: {
                    Hl: null != (B = null == (e = this.mb) ? void 0 : e.value) ? B : void 0,
                    uf: null == (f = this.fa) ? void 0 : f.value,
                    Rk: null == (g = this.ra) ? void 0 : g.value
                },
                Yg: {
                    kl: null == (h = this.eb) ? void 0 : h.value,
                    dl: null == (k = this.xa) ? void 0 : k.value
                },
                cm: {
                    bm: null == (l = this.qb) ? void 0 : l.value
                },
                Zm: {
                    bh: null == (m = this.Dc) ? void 0 : m.value,
                    Ue: null == (n = this.ta) ? void 0 : n.value,
                    Fm: null == (p = this.rb) ? void 0 : p.value,
                    ak: null == (r = this.Ac) ? void 0 : r.value
                },
                Pk: {
                    Qk: null == (v = this.ka) ? void 0 : v.value
                },
                tk: {
                    rd: this.He.rd
                }
            };
            this.o.G(b);
            c = Nq(mv(b));
            d = c.url;
            GC(this.timer, (9).toString(), 9, c.Fh);
            this.j.G(d);
            this.P.G(iv(b) ? new mx(kx, "https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : new mx(kx, "https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.j.G(""), this.o.ba()
    };
    var jQ = function(a, b, c, d, e, f) {
        Y.call(this, a, 878);
        this.j = b;
        this.aa = c;
        this.O = d;
        this.B = e;
        this.output = iI(this);
        f && lI(this, f)
    };
    _.T(jQ, Y);
    jQ.prototype.g = function() {
        for (var a = _.x(this.j), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Ym(b, this.aa);
            if (!Xm(b, this.aa) && c) {
                a: {
                    var d = c;
                    var e = this.O.T[b.getDomId()],
                        f = 0,
                        g = 0;e = _.x(Hm(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.x(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Qp(Zm(d, this.B)) || !d.parentElement || Qp(Zm(d.parentElement, this.B))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.O;f = g.ca;g = g.T[b.getDomId()];Pp(c, en(b), mq(f, g), d)
            }
        }
        this.output.notify()
    };
    var kQ = function(a, b, c, d, e, f, g, h) {
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
        mQ = function(a, b) {
            if (b)
                if (1 !== a.g && 2 !== a.g) lQ(a, new hH("state err: (" + ([a.g, a.A.length].join() + ")")));
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
        lQ = function(a, b) {
            a.g = 4;
            try {
                a.K(b)
            } catch (c) {}
        },
        nQ = function(a) {
            1 !== a.g || a.A ? lQ(a, new hH("state err (" + ([a.g, a.A.length].join() + ")"))) : (a.g = 3, a.M(a.l, a.X, a.Z))
        };
    var oQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Y.call(this, a, 788);
        this.ka = b;
        this.ga = c;
        this.fa = d;
        this.Z = e;
        this.L = f;
        this.O = g;
        this.H = iI(this);
        this.C = W(this);
        this.o = W(this);
        this.W = 0;
        this.P = !1;
        this.j = null != p ? p : new XMLHttpRequest;
        this.J = X(this, h);
        k && (this.ta = jI(this, k));
        this.xa = X(this, l);
        lI(this, m);
        this.ra = X(this, n)
    };
    _.T(oQ, Y);
    oQ.prototype.g = function() {
        var a = this,
            b = this.xa.value;
        if (b) {
            var c, d = new kQ(this.ka, this.ga, this.fa, this.J.value, this.Z, null == (c = this.ta) ? void 0 : c.value);
            this.j.open("GET", b);
            this.j.withCredentials = this.ra.value;
            this.j.onreadystatechange = function() {
                pQ(a, d, !1)
            };
            this.j.onload = function() {
                pQ(a, d, !0);
                a.C.G(a.j.status);
                if (300 <= a.j.status) {
                    var e;
                    a.o.G(null != (e = a.j.responseText) ? e : "")
                } else a.o.G("")
            };
            this.j.onerror = function() {
                lQ(d, new iH("XHR error"));
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
    var pQ = function(a, b, c) {
        try {
            if (3 === a.j.readyState || 4 === a.j.readyState)
                if (300 <= a.j.status) a.P || (lQ(b, new iH("xhr_err-" + a.j.status)), a.P = !0);
                else {
                    var d = a.j.responseText.substr(a.W);
                    d && mQ(b, d);
                    a.W = a.j.responseText.length;
                    c && 4 === a.j.readyState && nQ(b)
                }
        } catch (e) {
            lQ(b, e)
        }
    };
    var qQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Y.call(this, a, 1078);
        this.W = b;
        this.P = c;
        this.J = d;
        this.Z = e;
        this.L = f;
        this.O = g;
        this.C = iI(this);
        this.o = W(this);
        this.j = W(this);
        this.H = X(this, h);
        k && (this.ga = jI(this, k));
        l && (this.ka = X(this, l));
        this.ra = X(this, m);
        lI(this, n);
        this.fa = X(this, p);
        if (null == r ? 0 : r.se) this.xa = jI(this, r.se);
        v && (this.ta = X(this, v));
        w && (this.Ma = jI(this, w))
    };
    _.T(qQ, Y);
    qQ.prototype.g = function() {
        var a = this,
            b = this.ra.value;
        if (b) {
            var c, d, e, f = new kQ(this.W, this.P, this.J, this.H.value, this.Z, null == (c = this.ga) ? void 0 : c.value, null == (d = this.ka) ? void 0 : d.value, null == (e = this.Ma) ? void 0 : e.value);
            c = this.fa.value ? "include" : "omit";
            var g;
            d = null == (g = this.xa) ? void 0 : g.value;
            var h;
            g = null == (h = this.ta) ? void 0 : h.value;
            h = _.z(Object, "assign").call(Object, {}, {
                credentials: c
            }, d ? {
                browsingTopics: d
            } : {}, g ? {
                adAuctionHeaders: g
            } : {});
            fetch(b, h).then(function(k) {
                rQ(a, k, f)
            }).catch(function(k) {
                sQ(a, k, f);
                a.H.value.forEach(function(l) {
                    lt(l, a.L, a.O, "")
                })
            })
        }
        this.C.notify()
    };
    var rQ = function(a, b, c) {
            a.o.G(b.status);
            if (300 <= b.status) a.j.La(b.text()), lQ(c, new iH("fetch_status-" + b.status));
            else {
                a.j.G("");
                var d, e = null == (d = b.body) ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
                e ? e.read().then(function(f) {
                    tQ(a, f, e, c)
                }).catch(function(f) {
                    sQ(a, f, c)
                }) : lQ(c, new iH("failed_reader"))
            }
        },
        tQ = function(a, b, c, d) {
            var e = b.value;
            b.done ? nQ(d) : (mQ(d, e), c.read().then(function(f) {
                tQ(a, f, c, d)
            }).catch(function(f) {
                sQ(a, f, d)
            }))
        },
        sQ = function(a, b, c) {
            lQ(c, new iH("fetch error: " + (b instanceof Error ? b.message : void 0)));
            a.o.G(0);
            a.j.G("")
        };
    var uQ = function(a, b, c, d, e) {
        Y.call(this, a, 918);
        this.O = b;
        this.timer = c;
        this.output = iI(this);
        this.j = X(this, e);
        lI(this, d)
    };
    _.T(uQ, Y);
    uQ.prototype.g = function() {
        var a = this.j.value;
        a.length && ft(this.timer, "3", gt(this.O.T[a[0].getDomId()], 20));
        this.output.notify()
    };
    var vQ = function(a, b, c, d, e) {
        Y.call(this, a, 803);
        this.j = b;
        this.slotId = c;
        this.Da = d;
        this.Z = e;
        this.output = W(this)
    };
    _.T(vQ, Y);
    vQ.prototype.g = function() {
        var a = JSON.parse(this.j),
            b = tp(a, Zx);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.j);
        a = Ve(AA, a);
        b = ue(a, 27, Zc, 2);
        b = _.x(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.Nf(kh).g(c);
        Sn(4, this.context, this.Da, this.Z);
        ht(this.slotId, bK, 800, a);
        this.output.G(a)
    };
    var wQ = function(a, b, c, d) {
        Y.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.j = X(this, d)
    };
    _.T(wQ, Y);
    wQ.prototype.g = function() {
        var a = this;
        Nn(this.j.value, 11) && (_.nK(this.L, this.slotId), kK(this.L, this.slotId, function() {
            _.oK(a.L, a.slotId)
        }))
    };
    var xQ = function(a, b, c, d) {
        sk.call(this);
        this.context = a;
        this.slotId = b;
        b = d.L;
        var e = d.Z,
            f = d.ab,
            g = d.Da;
        a = d.Ra;
        d = d.R;
        c = new vQ(this.context, c, this.slotId, g, e);
        J(this, c);
        e = new zN(this.context, e, g, c.output);
        J(this, e);
        f = new BN(this.context, this.slotId, f, c.output);
        J(this, f);
        b = new wQ(this.context, this.slotId, b, c.output);
        J(this, b);
        a = qI(this, 1229, Nv, {
            Rg: c.output
        }, {
            Ra: a
        }, {
            output: void 0
        });
        qI(this, 1220, Qv, {
            Rg: c.output
        }, {
            R: d,
            context: this.context
        }, {});
        this.g = {
            Gl: a.output
        }
    };
    _.T(xQ, sk);
    var yQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, N, R, M) {
        Y.call(this, a, 973);
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
        this.ka = p;
        this.networkCode = r;
        this.isSecureContext = v;
        this.Qb = w;
        this.ab = y;
        this.B = B;
        this.aa = C;
        this.j = R;
        this.ta = M;
        this.o = [];
        this.C = jI(this, G);
        this.fa = X(this, F);
        this.xa = X(this, N);
        this.j.Lb && lI(this, this.j.Lb.Kh)
    };
    _.T(yQ, Y);
    yQ.prototype.g = function() {
        var a = this,
            b = new sk;
        _.S(this, b);
        var c = this.fa.value,
            d = nv(this.O.ca);
        this.C.value && this.ta.G(this.C.value);
        var e = Zr(this.context, this.aa);
        e && _.S(b, e.Ka);
        var f = fr(this.context, _.Am(this.O.ca, uu, 5), this.L, this.J, null == e ? void 0 : e.Zl.ge);
        e = f.Ag;
        (f = f.Bl) && _.S(b, f);
        f = new jQ(this.context, this.J, this.aa, this.O, this.B, e);
        J(b, f);
        var g = !!_.Q(this.O.ca, 6);
        e = new dQ(this.context, this.J, g, this.O, this.R, this.B, c);
        J(b, e);
        var h, k = new tM(this.context, d, c, (null == (h = _.Am(this.O.ca, Ht, 36)) ? void 0 : ue(h, 1, _.Xc, 2)) || []);
        J(b, k);
        var l = this.j;
        h = l.Tl;
        var m = l.dm,
            n = l.Um;
        l = l.He;
        var p, r = null != (p = this.j.Lb) ? p : {},
            v = r.Qd,
            w = r.Cd,
            y = r.Eb,
            B = r.Ob,
            C = r.gd,
            G = r.fi;
        p = r.qc;
        var F = r.mg,
            N = r.Ph;
        r = r.Nb;
        if (_.E(rE)) {
            var R = new FO(this.context, N);
            var M = new GO(this.context, N);
            J(b, R);
            J(b, M);
            var Z = R.j;
            R = M.j;
            M = M.o
        }
        if (F = pt(this.context, n, this.O.T, c, this.C.value, e.j, k.output, F, R)) {
            var fa = F.Wm;
            F = F.Vm;
            var qa = fa.Tg;
            var ea = fa.ug;
            fa = fa.Se;
            _.S(b, F)
        }
        if (M = Hs(this.context, n, this.B.navigator, k.output, M)) {
            var Pa = M.yj;
            M = M.Xm;
            var wa = Pa.fj;
            Pa = Pa.vi;
            M && _.S(b, M)
        }
        _.E(NE) && (Pa = W(this), Pa.G(n.oh));
        var Ca = new WO(this.context, this.B);
        J(b, Ca);
        F = (null != v ? v : {}).ic;
        var Na;
        M = null == (Na = this.j.Lb) ? void 0 : Na.ue;
        Na = new BO(this.context, h.Ul);
        J(b, Na);
        if (v = iq(this.context, this.R, this.O.T, this.networkCode, e.j, v, y)) {
            var Xa = v.dk;
            _.S(this, v.Ka)
        }
        if (ea = as(this.context, m, ea, fa, this.O.T, e.j, N)) {
            var fb = ea.xf;
            _.S(this, ea.Ka)
        }
        if (Z = ts(this.context, this.C.value, M, k.output, Z)) {
            var Ua = Z.Rm;
            _.S(this, Z.Ka);
            this.o.push(Ua.Fd.promise)
        }
        if (n.Xj) {
            _.E(Zt);
            var dc = new BP(this.context, this.B.navigator, e.j);
            J(b, dc);
            dc = dc.output
        }
        Z = window.isSecureContext && _.E(LF) ? "wbn" : "ldjh";
        var Ec = ++this.L.I;
        ea = "wbn" === Z ? Br().toLowerCase() : void 0;
        fa = this.ne;
        var $b, kc;
        Xa = new iQ(this.context, g, this.L, this.Da, this.O, fa.jc, this.networkCode, fa.Id, fa.Hd, this.xa.value, _.Nf(Jl), c, this.isSecureContext, this.Qb, this.B, l, Na.output, h.rc, Ca.output, e.j, null == ($b = Xa) ? void 0 : $b.lh, Ua, M, f.output, null == w ? void 0 : w.Lg, F, y, B, C, G, fb, wa, null == (kc = this.j.Lb) ? void 0 : kc.mg, r, R, dc);
        J(b, Xa);
        fb = new uQ(this.context, this.O, _.Nf(Jl), Xa.j, e.j);
        J(b, fb);
        this.context.Am && qI(b, 1231, tv, {
            Ho: Xa.j,
            X: e.j
        }, {
            wa: this.context.Qa
        }, {});
        d = new eQ(this.context, d, c);
        J(b, d);
        $b = Hl(this.context, 646, function(ec, fc, Pc, Qc, qf, we, Md, xe) {
            yv(function() {
                return void zQ(a, qf, ec, fc, Pc, Qc, we, Md, xe)
            }, ec, a.B)
        });
        kc = Hl(this.context, 647, function(ec, fc, Pc) {
            yv(function() {
                return void AQ(a, Ec, Pc, fc, ec)
            }, -1, a.B)
        });
        "ldjh" === Z ? (R = BQ(this, 289, "strm_err"), wv() ? (Ua = new qQ(this.context, $b, R, kc, c, this.L, this.O, e.j, qa, wa, Xa.j, fb.output, d.output, Ua, Pa, dc), J(b, Ua), qa = Ua.C, wa = Ua.o, Ua = Ua.j) : (Ua = new oQ(this.context, $b, R, kc, c, this.L, this.O, e.j, qa, Xa.j, fb.output, d.output), J(b, Ua), qa = Ua.H, wa = Ua.C, Ua = Ua.o), wa = qI(b, 1221, pv, {
            status: wa,
            responseText: Ua
        }, {
            R: this.R
        }, {}).finished, this.o.push(wa.promise)) : (wa = new FP(this.context, $b, BQ(this, 1042, "Unknown web bundle error."), kc, Z, ea, c, this.aa, e.j, qa, Xa.j, Xa.P, fb.output, d.output), ru(b, wa), qa = new Xr, cI(qa, Bk(wa).then(function() {})));
        p = new fQ(this.context, Ec, e.j, qa, p, this.networkCode);
        J(b, p);
        wa = new bQ(this.context, Xa.o, Xa.j);
        J(b, wa);
        wa = new hQ(this.context, this.H.za, this.O, wa.output);
        J(b, wa);
        wa = new NO(this.context, this.ga, this.B, wa.output);
        J(b, wa);
        wa = new iO(this.context, this.O, this.P, e.j, wa.output);
        J(b, wa);
        e = new sN(this.context, this.L, this.O, this.aa, e.j, wa.output);
        J(b, e);
        wa = new VO(this.context, bk(this.B), this.B, c, qa);
        J(b, wa);
        1 === Ec && (c = new kN(this.context, this.B, c, M, qa), J(b, c), this.o.push(c.output.promise));
        this.o.push(p.output.promise, e.output.promise, wa.output.promise);
        Bk(b)
    };
    var zQ = function(a, b, c, d, e, f, g, h, k) {
            var l, m, n, p;
            return _.tb(function(r) {
                l = f[c];
                if (!l) return Ll(a.context, 646, Error("missing slot")), r.return();
                0 === c && (m = gt(a.O.T[l.getDomId()], 20), ft(_.Nf(Jl), "4", m));
                return r.yield(CQ(a, l, d, e, b, null == (n = g) ? void 0 : n[l.getId()], h, null == (p = k) ? void 0 : p.get(l)), 0)
            })
        },
        AQ = function(a, b, c, d, e) {
            var f, g, h;
            return _.tb(function(k) {
                if (1 == k.g) {
                    var l = a.context,
                        m = e + 1,
                        n = d.length;
                    if (l.Wc) {
                        var p = l.Qa,
                            r = p.Vc;
                        l = vl(l);
                        var v = new bD;
                        v = _.lj(v, 3, b);
                        m = _.zl(v, 1, m);
                        n = _.zl(m, 2, n);
                        n = _.Al(l, 8, Bl, n);
                        r.call(p, n)
                    }
                    f = e + 1
                }
                if (3 != k.g) {
                    if (!(f < d.length)) return k.yield(DQ(a), 0);
                    if (!d[f]) {
                        k.g = 3;
                        return
                    }
                    p = new AA;
                    p = Zh(p, 8, !0);
                    g = gl(p);
                    h = '{"empty":' + g + "}";
                    return k.yield(zQ(a, c, f, h, {
                        kind: 0,
                        hb: ""
                    }, d), 3)
                }++f;
                k.g = 2
            })
        },
        CQ = function(a, b, c, d, e, f, g, h) {
            var k, l, m, n, p, r, v, w, y, B, C, G, F, N, R, M, Z, fa;
            return _.tb(function(qa) {
                if (1 == qa.g) return k = {
                    Z: e,
                    ab: a.ab,
                    L: a.L,
                    Da: a.Da,
                    Ra: d,
                    R: a.R
                }, l = new xQ(a.context, b, c, k), qa.yield(Bk(l), 2);
                m = qa.A;
                p = n = m.Gl;
                r = p.isEmpty;
                v = p.Oa;
                w = p.ha;
                y = p.fn;
                B = p.Jb;
                C = p.hg;
                G = p.zk;
                F = p.Ra;
                N = p.height;
                R = p.width;
                kq(a.context, null == (M = a.j.Lb) ? void 0 : M.Qd, y, B, v);
                _.E(RD) && Mq(a.context, a.Da, C);
                if (b.M) return qa.return();
                Z = !!w || _.E(QE) && !!f;
                _.E(KE) || Z && Ep("gpt_td_init", function(ea) {
                    dp(ea, a.context);
                    ep(ea, "noFill", r ? "1" : "0");
                    ep(ea, "publisher_tag", "gpt");
                    var Pa, wa = null == (Pa = w) ? void 0 : _.Am(Pa, wA, 5);
                    wa && (ep(ea, "winner_qid", wa.getEscapedQemQueryId()), ep(ea, "xfpQid", _.I(wa, 6)))
                }, 1);
                (fa = Pq("google_norender")) || r && !Z ? lt(b, a.L, a.O, v) : _.E(Mv) && "vast" === G ? (Xg({
                    kind: Rg(),
                    hb: $g
                }), ht(b, kt, 825, {
                    isEmpty: !1,
                    vast: F.hb,
                    size: void 0 === R || void 0 === N ? void 0 : new _.Rm(R, N)
                })) : ZP(a.ka, a.ra, a.R, b, r || fa, Z, a.L, a.O, a.ab, n, e, f, g, a.H.za, a.P, a.j, h);
                l.ya();
                qa.g = 0
            })
        },
        BQ = function(a, b, c) {
            return Hl(a.context, b, function(d) {
                d = d instanceof Error ? d : Error();
                d.message = d.message || c;
                Ll(a.context, b, d);
                DQ(a)
            })
        },
        DQ = function(a) {
            return _.tb(function(b) {
                if (1 == b.g) {
                    var c = a.L,
                        d = a.W,
                        e = c.A.get(d) - 1;
                    0 === e ? c.A.delete(d) : c.A.set(d, e);
                    return e ? b.return() : b.yield(_.u.Promise.all(a.o), 2)
                }
                ht(a.H.li, fK, 965, a.W);
                b.g = 0
            })
        };
    var EQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, N, R) {
        Y.call(this, a, 885);
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
        this.C = N;
        this.ga = R;
        this.ka = X(this, G);
        lI(this, F)
    };
    _.T(EQ, Y);
    EQ.prototype.g = function() {
        var a = this.ka.value;
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
                c = new sk;
                _.S(this, c);
                var f = Zq(this.context, this.J, null == (e = this.C.Lb) ? void 0 : e.Si);
                e = f.Mc;
                var g = f.pg;
                _.S(c, f.Ka);
                e = Uo(this.context, this.R, this.L, this.B, e, g, 3, nv(this.O.ca));
                f = e.nb;
                _.S(c, e.Ka);
                e = new HO(this.context, this.B, f);
                J(c, e);
                e = new yN(this.context, this.B, f);
                J(c, e);
                e = new ou(this.context, this.B, f);
                J(c, e);
                g = new $P(this.context, this.Da, this.ib, f);
                J(c, g);
                b = new yQ(this.context, this.fa, this.R, d, this.j, this.O, this.L, this.Da, this.P, this.H, this.o, this.ne, this.W, b, this.isSecureContext, this.Qb, this.ab, this.B, this.aa, e.output, f, g.o, this.C, this.ga);
                J(c, b);
                Bk(c)
            }
        } else ht(this.o.li, fK, 965, this.j)
    };
    var FQ = new _.u.Map,
        GQ = function(a, b, c, d) {
            d = void 0 === d ? FQ : d;
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
    _.T(GQ, Y);
    GQ.prototype.g = function() {};
    GQ.prototype.C = function(a) {
        var b = this,
            c, d;
        return _.tb(function(e) {
            if (1 == e.g) {
                if (a.M) return e.return();
                b.j.has(a) || (b.j.set(a, _.E(uE) ? Tv(a) : Sv(a)), _.rp(a, function() {
                    return void b.j.delete(a)
                }));
                c = b.j.get(a);
                return e.yield(c(), 2)
            }
            d = e.A;
            if (b.M) return e.return();
            if (d) return e.return(a);
            P(b.R, kL(a.getAdUnitPath()));
            return e.return()
        })
    };
    var HQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B) {
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
        this.l = new YJ(a);
        _.S(this, this.l);
        this.l.listen(fK, function(G) {
            G = G.detail;
            var F = C.g.get(G);
            F && (C.g.delete(G), F.ya())
        })
    };
    _.T(HQ, _.V);
    var IQ = function(a, b, c, d) {
        var e = ++a.L.D;
        a.g.has(e);
        var f = new sk;
        a.g.set(e, f);
        b = new GQ(a.context, a.R, b);
        J(f, b);
        var g = qI(f, 845, Xv, {
            X: b.o
        }, {
            T: d.T
        }, {
            rj: void 0,
            Bj: void 0
        });
        b = g.Bj;
        g = qI(f, 847, Vv, {
            X: g.rj
        }, {
            L: a.L,
            zb: !!_.Q(d.ca, 6),
            wl: Pq("google_nofetch")
        }, {
            me: void 0
        }).me;
        b = qI(f, 864, Kq, {
            X: b
        }, {
            L: a.L,
            O: d,
            aa: document
        }, {}).finished;
        a = new EQ(a.context, a.C, a.R, d, a.L, a.Da, c, a.K, a.j, e, {
            li: a.l,
            za: a.za
        }, a.o, a.isSecureContext, a.ib, a.I, a.Qb, a.ab, a.B, a.aa, g, b, a.D, a.H);
        J(f, a);
        Bk(f)
    };
    var JQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        HP.call(this, a, c, h);
        this.context = a;
        this.L = d;
        this.j = new _.u.Set;
        this.I = {};
        this.C = new YP(a, d);
        this.H = new HQ(a, b, c, d, new _.pH(window), this.l, m, e, this.C, f, g, k, l, n, document, window, p, r);
        _.S(this, this.H)
    };
    _.T(JQ, HP);
    JQ.prototype.getName = function() {
        return "publisher_ads"
    };
    JQ.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.ja(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        Ct(this);
        var h = jo(c, this.context, this.R, a, b, f),
            k = h.slotId;
        h = h.Fa;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            vt(this, null != (l = g) ? l : k.getDomId(), c)
        } else P(this.R, am("PubAdsService.display", [a, b, d]))
    };
    var vt = function(a, b, c) {
        var d = KQ(b, c);
        c = d.slotId;
        var e = d.Kk;
        d = d.Lk;
        if (c) {
            if (b = gn(), (d = SL(b, c.getDomId())) && !_.Q(d, 19))
                if (e && b.l.set(c, e), Ym(c) || Jm(xr(d))) {
                    if (Zh(d, 19, !0), e = Um(b.g, b.A), a.enabled) {
                        Ct(a);
                        a.enabled && mK(a.L, c);
                        a.R.info(MK());
                        b = e.ca;
                        d = e.T;
                        var f = _.Q(b, 6);
                        if (f || !a.L.Hc(c)) f && (f = Ym(c)) && ht(c, aK, 778, f), _.Q(b, 4) && (d = d[c.getDomId()], f = a.L, Gq(d, b) && !f.Hc(c) && Hq(c, document, d, b)), WL(a, e, c)
                    }
                } else P(a.R, CK(String(hk(d, 1)), String(hk(d, 2))), c)
        } else d ? a.R.error(DK(d)) : a.R.error(am("googletag.display", [String(b)]))
    };
    JQ.prototype.slotAdded = function(a, b) {
        var c = this;
        _.Q(b, 17) || this.enabled && mK(this.L, a);
        ht(this.l, dK, 724, {
            kh: a.getDomId(),
            T: b
        });
        a.listen(kt, function(d) {
            var e = d.detail;
            d = e.size;
            var f = e.vast,
                g = new KN(a, "publisher_ads");
            e.isEmpty && (g.isEmpty = !0, g.slotContentChanged = !1);
            f && _.E(Mv) && (g.vast = f);
            e = a.g.getResponseInformation();
            d && e && (g.size = [d.width, d.height], g.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, g.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, g.isBackfill = e.isBackfill, g.creativeId = e.creativeId, g.lineItemId = e.lineItemId, g.creativeTemplateId = e.creativeTemplateId, g.advertiserId = e.advertiserId, g.campaignId = e.campaignId, g.yieldGroupIds = e.yieldGroupIds, g.companyIds = e.companyIds);
            ht(c.l, "slotRenderEnded", 708, g)
        });
        a.listen(bK, function() {
            ht(c.l, "slotResponseReceived", 709, new QN(a, c.getName()))
        });
        4 === xr(b) && LQ(this, "rewardedSlotClosed", a, b);
        7 === xr(b) && LQ(this, "gameManualInterstitialSlotClosed", a, b);
        HP.prototype.slotAdded.call(this, a, b)
    };
    var LQ = function(a, b, c, d) {
            _.rp(c, a.l.listen(b, function(e) {
                c.g === e.detail.slot && (e = {}, MQ(a, [c], gn().g, (e[c.getDomId()] = d, e), a.L))
            }))
        },
        WL = function(a, b, c) {
            var d = NQ(a, b, c);
            OQ(a, d, b, {
                jc: 1
            });
            b = c.getAdUnitPath();
            if (c = a.I[b]) {
                c = _.x(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, OQ(a, d.X, d.O, d.ne);
                delete a.I[b]
            }
        },
        NQ = function(a, b, c) {
            var d = b.ca,
                e = b.T[c.getDomId()];
            return _.Q(d, 4) ? [] : !_.Q(d, 6) || (null == e ? 0 : _.Q(e, 17)) ? (a.j.add(c), _.rp(c, function() {
                return void a.j.delete(c)
            }), [c]) : a.g.filter(function(f) {
                if (a.j.has(f) || _.E(wE) && !Ym(f) && !Jm(xr(e))) return !1;
                a.j.add(f);
                _.rp(f, function() {
                    return void a.j.delete(f)
                });
                return !0
            })
        },
        OQ = function(a, b, c, d) {
            a.R.info(TK());
            if (PQ(a, b, d, c) && 1 !== d.jc)
                for (b = _.x(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), ht(a.l, eK, 725, {
                    kh: d,
                    T: c.T[d]
                })
        },
        PQ = function(a, b, c, d) {
            b = b.filter(function(e) {
                var f = d.T[e.getDomId()],
                    g = _.Iq(a.L, e);
                !1 === g && P(a.R, CL(String(xr(f)), e.getAdUnitPath()));
                if (!g) return !1;
                (_.H = [5, 4, 7], _.z(_.H, "includes")).call(_.H, xr(f)) && _.nK(a.L, e);
                return !0
            });
            if (!b.length) return null;
            IQ(a.H, b, c, d);
            return b
        };
    JQ.prototype.refresh = function(a, b, c) {
        c = void 0 === c ? {
            jc: 2
        } : c;
        b = QQ(this, b);
        if (!b.length) return !1;
        RQ(this, a, b, c);
        return !0
    };
    var QQ = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.M) return !0;
                P(a.R, WK(String(d)));
                return !1
            })
        },
        RQ = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.enabled) {
                var h = _.x(c);
                e = h.next();
                for (f = {}; !e.done; f = {
                        Bf: void 0
                    }, e = h.next()) f.Bf = e.value, a.j.add(f.Bf), _.rp(f.Bf, function(k) {
                    return function() {
                        return void a.j.delete(k.Bf)
                    }
                }(f));
                OQ(a, c, b, d)
            } else c.length && _.Q(b.ca, 6) ? (P(a.R, SK(g), e), e = e.getAdUnitPath(), f = null != (h = a.I[e]) ? h : [], f.push({
                X: c,
                O: b,
                ne: d
            }), a.I[e] = f) : P(a.R, QK(g), e)
        };
    JQ.prototype.o = function() {
        var a = gn().g;
        if (_.Q(a, 6))
            for (var b = _.x(this.g), c = b.next(); !c.done; c = b.next()) this.enabled && mK(this.L, c.value);
        aM(this, a);
        a = Do();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    JQ.prototype.destroySlots = function(a) {
        a = HP.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = gn();
            SQ(this, a, b.g, b.A)
        }
        return a
    };
    var cM = function(a, b, c, d) {
            if (!a.enabled) return P(a.R, RK(), d[0]), !1;
            var e = QQ(a, d);
            if (!e.length) return P(a.R, am("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.R.info(UK());
            SQ(a, e, b, c);
            return !0
        },
        SQ = function(a, b, c, d) {
            for (var e = _.x(b), f = e.next(); !f.done; f = e.next()) jK(a.L, f.value);
            MQ(a, b, c, d, a.L)
        };
    JQ.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.Nf(kh).g(a)
    };
    var MQ = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.x(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                sK(a.C.L, g);
                var h = d[g.getDomId()];
                Gq(h, c) && Hq(g, f.document, h, c);
                Jq(e, g)
            }
        },
        bM = function(a, b, c, d) {
            if ("string" !== typeof b || "string" !== typeof c) P(a.R, am("PubAdsService.setVideoContent", [b, c]));
            else {
                var e = Zh(d, 21, !0);
                b = ri(e, 22, b);
                ri(b, 23, c);
                aM(a, d)
            }
        },
        dM = function(a, b) {
            if (!a.enabled) return null;
            var c, d;
            return {
                vid: null != (c = _.I(b, 22)) ? c : "",
                cmsid: null != (d = _.I(b, 23)) ? d : ""
            }
        },
        aM = function(a, b) {
            _.Q(b, 21) && a.enabled && (a = yB(), _.mk(b, 29, _.td(a)))
        },
        KQ = function(a, b) {
            var c = "";
            if ("string" === typeof a) c = a, b = iN(b, c);
            else if (_.ja(a) && 1 == a.nodeType) {
                var d = a;
                c = d.id;
                b = iN(b, c)
            } else b = (_.H = [].concat(_.xi(b.X)), _.z(_.H, "find")).call(_.H, function(e) {
                return e.g === a
            });
            return {
                slotId: b,
                Kk: d,
                Lk: c
            }
        };
    var gw = _.Bw(["https://pagead2.googlesyndication.com/pagead/js/rum_debug.js"]),
        hw = _.Bw(["https://pagead2.googlesyndication.com/pagead/js/rum.js"]);
    var TQ = Cw(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]),
        UQ = _.$x(function() {
            uB("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        WQ = function(a, b) {
            var c = this;
            var d = void 0 === d ? _.z(String, "raw").call(String, TQ) : d;
            this.L = a;
            this.A = d;
            this.g = new _.u.Map;
            this.X = new _.u.Set;
            b.l = function(e) {
                return VQ(c, e)
            }
        };
    WQ.prototype.defineSlot = function(a, b, c, d, e) {
        a = jo(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.g;
        a.Ne || b.error(am("googletag.defineSlot", [c, d, e]));
        return null
    };
    var jo = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Wb: f,
            Wi: void 0 === g ? !1 : g
        }) : {}
    };
    WQ.prototype.add = function(a, b, c, d, e, f) {
        var g = this,
            h = e.Wb,
            k = void 0 === e.format ? 0 : e.format,
            l = void 0 === e.Wi ? !1 : e.Wi;
        e = void 0 === e.yb ? !1 : e.yb;
        f = void 0 === f ? _.t : f;
        try {
            var m = new RegExp(this.A, "u");
            if (m.test("/1") && !m.test(c)) return b.error(FK(c)), {
                Ne: !0
            }
        } catch (p) {}
        f = Cq(k, f, e);
        null !== f && vq(a, f, yq(k));
        if (f) return qq(b, f, k, c), {};
        l && UQ();
        k = this.g.get(c) || Number(l);
        b = XQ(this, a, b, c, k, d, h || "gpt_unit_" + c + "_" + k);
        a = b.Fa;
        var n = b.slotId;
        b = b.Ne;
        if (!n) return {
            Ne: b
        };
        this.g.set(c, k + 1);
        this.X.add(n);
        _.rp(n, function() {
            return void g.X.delete(n)
        });
        SJ(c);
        return {
            slotId: n,
            Fa: a
        }
    };
    var iN = function(a, b) {
            a = _.x(a.X);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        tt = function(a) {
            a = _.x(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.ya()
        },
        XQ = function(a, b, c, d, e, f, g) {
            var h = iN(a, g);
            if (h) return c.error(EK(g, d, h.getAdUnitPath())), {
                Ne: !0
            };
            var k = new oM;
            pM(ri(k, 1, d), g);
            qM(k, yo(f));
            RL(k);
            var l = new Ug(b, d, e, g);
            YL(l, Ko(b, c, l));
            _.rp(l, function() {
                var m = gn(),
                    n = l.getDomId();
                delete m.A[n];
                m.l.delete(l);
                m = l.getAdUnitPath();
                m = Gl(m);
                var p;
                n = (null != (p = Ul.get(m)) ? p : 0) - 1;
                0 >= n ? Ul.delete(m) : Ul.set(m, n);
                c.info(aL(l.toString()), l);
                (p = Wl.get(l)) && Xl.delete(p);
                Wl.delete(l)
            });
            c.info(tK(l.toString()), l);
            l.listen(cK, function(m) {
                m = m.detail.qm;
                c.info(uK(l.getAdUnitPath()), l);
                GC(_.Nf(Jl), "7", 9, qK(a.L, l), 0, m)
            });
            l.listen(bK, function(m) {
                var n = m.detail;
                c.info(vK(l.getAdUnitPath()), l);
                var p;
                m = _.Nf(Jl);
                var r = gt(k, 20);
                n = null != (p = n.getEscapedQemQueryId()) ? p : "";
                m.g && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + r] = n)
            });
            l.listen(jt, function() {
                return void c.info(wK(l.getAdUnitPath()), l)
            });
            l.listen(kt, function() {
                return void c.info(xK(l.getAdUnitPath()), l)
            });
            return {
                Fa: k,
                slotId: l
            }
        },
        VQ = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.xi(a.X)).some(function(d) {
                return c.test(Gl(d.getAdUnitPath()))
            })
        };
    (function(a, b) {
        var c = null != a ? a : {
            pvsid: bk(window),
            Pa: "m202403210101",
            Ze: "202403210101",
            Qa: new pw(3, "m202403210101", 0),
            ih: !0,
            ig: 1
        };
        try {
            Ac(function(ea) {
                Ll(c, 1190, ea)
            });
            var d = Do();
            Gf(!_.Nf(xm).g);
            _.z(Object, "assign").call(Object, ym, d._vars_);
            d._vars_ = ym;
            if (d.evalScripts) d.evalScripts();
            else {
                iJ();
                try {
                    zh()
                } catch (ea) {
                    Ll(c, 408, ea)
                }
                ar();
                var e = new DM;
                try {
                    vh(e.I), Pn(13, c), Pn(3, c)
                } catch (ea) {
                    Ll(c, 408, ea)
                }
                var f = ow(c, e),
                    g = null != a ? a : sw(f, c),
                    h = null != b ? b : new CM(g);
                Cl(g);
                Ep("gpt_fifwin", function(ea) {
                    dp(ea, g)
                }, d.fifWin ? .01 : 0);
                var k = new iK,
                    l = new WQ(k, e),
                    m = new MP(g),
                    n = _.zm(260),
                    p = new YJ(g),
                    r = new YJ(g),
                    v = new YJ(g),
                    w = _.zm(150),
                    y = kB(),
                    B = lu(g, l, h, k, n, e, m, p, w),
                    C = _.zm(221),
                    G = new IO,
                    F = new AN,
                    N, R, M, Z = null != (M = null == (N = B.Lb) ? void 0 : null == (R = N.Cd) ? void 0 : R.Ab) ? M : new eq,
                    fa = new JQ(g, l, h, k, m, y, e, p, n, C, G, F, B, Z);
                _.E(RF) && new jN(g, p, k, l);
                var qa = gn().g;
                It(g, h, fa, qa, l, r, v, e, F, Z);
                Yo(g, d, h);
                window.setTimeout(function() {
                    for (var ea = window.document.scripts, Pa = 0, wa = 0, Ca = 0; Ca < ea.length; Ca++) ea[Ca].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? Pa++ : ea[Ca].src.match("www.googletagservices.com/tag/js/gpt.js") && wa++;
                    1 < Pa && 0 === wa || 1 < wa && 0 === Pa ? P(h, AL()) : 0 < wa && 0 < Pa && h.error(BL())
                }, 1E3);
                qt();
                if (_.E(RF) || _.Nf(Jl).g) ew(), iw();
                ap(g)
            }
        } catch (ea) {
            Ll(c, 106, ea)
        }
    })();
    _.YQ = _.t.requestAnimationFrame || _.t.webkitRequestAnimationFrame;
    _.ZQ = !!_.YQ && !/'iPhone'/.test(_.t.navigator.userAgent);
    _.$Q = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.j = a;
        this.g = b;
        this.l = c;
        this.P = null;
        _.rp(this, function() {
            return d.P = null
        })
    };
    _.T(_.$Q, _.V);
}).call(this, {});