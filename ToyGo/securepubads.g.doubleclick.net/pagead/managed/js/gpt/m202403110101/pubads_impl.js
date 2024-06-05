(function(_) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var ca, ea, ha, la, na, pa, ta, sa, ua, va, xa, ya, za, Ba, Ca, Ga, Ha, Ia, Ja, Ka, Ma, Va, bb, cb, jb, lb, mb, nb, ob, qb, ub, xb, Fb, Gb, Kb, Mb, Ob, Sb, Ub, Yb, ac, Zb, bc, ec, Vb, fc, gc, hc, kc, lc, nc, oc, qc, sc, tc, wc, yc, zc, Bc, Cc, Ec, Ic, Kc, Lc, Nc, Oc, Uc, Wc, Xc, Yc, $c, ed, fd, gd, hd, cd, id, bd, ad, nd, od, pd, sd, td, wd, vd, yd, zd, Bd, Ed, Fd, Hd, Rd, Sd, Wd, Yd, Xd, ae, ce, be, ee, de, fe, he, Gd, me, ne, qe, ve, re, te, ue, De, Ee, Ge, He, Ie, Le, Me, Ne, Oe, se, Pe, Qe, Re, Te, Ue, Ve, We, $e, af, bf, Ye, jf, Ze, kf, yf, Bf, Df, Hf, If, Jf, Nf, Of, Pf, Rf, Sf, Tf, Uf, Vf, Yf, bg, dg, cg, hg, jg, kg, ng, Fg, Hg, Ig, Ng, Pg, Rg, Tg, Ug, Xg, Yg, Zg, $g, ah, ch, dh, fh, gh, ih, jh, kh, lh, mh, nh, qh, sh, wh, uh, Lh, Mh, Nh, yh, zh, Oh, Ph, Zh, Xh, bi, ji, Qh, si, Di, Ei, Ii, Ji, Pi, Ri, Si, Vi, Yi, jj, qj, sj, uj, vj, wj, xj, yj, zj, Aj, Bj, Dj, Gj, Ej, Hj, Fj, Ij, Kj, Nj, Rj, Sj, Vj, Tj, Yj, Zj, ak, ek, fk, lk, mk, yk, Ek, Ck, Dk, Jk, Nk, Pk, Qk, Rk, Tk, Xk, dl, $k, Uk, ll, jl, kl, nl, ol, rl, xl, Al, Bl, M, Cl, Il, Gl, Tl, N, Vl, Wl, Xl, Zl, am, bm, im, jm, lm, mm, rm, ym, Am, Cm, Dm, Em, Fm, Gm, Jm, Nm, Pm, Rm, Qm, Xm, Ym, Zm, $m, Sm, an, Tm, dn, en, jn, kn, nn, tn, un, wn, An, Fn, Hn, In, Kn, Ln, Pn, Qn, Rn, Vn, On, Xn, Yn, Zn, ao, eo, go, ho, io, jo, lo, mo, oo, qo, ro, po, vo, wo, Ao, Bo, Do, No, Po, Ro, Uo, To, So, dp, gp, hp, ip, jp, lp, np, op, pp, rp, sp, up, tp, wp, Bp, zp, Cp, Ep, Fp, Ip, Jp, Lp, Op, Np, Qp, Rp, Sp, Up, Vp, Xp, Wp, $p, bq, dq, fq, hq, kq, nq, oq, tq, wq, uq, vq, xq, yq, Bq, Dq, Fq, Jq, Kq, Lq, Mq, Nq, Oq, Pq, Qq, Sq, Tq, Uq, Xq, gr, $q, lr, mr, nr, pr, rr, tr, wr, zr, Ir, xr, yr, Br, Cr, vr, Ar, Mr, Qr, Sr, Ur, Wr, Zr, as, oa, bs, cs, es, ds, fs, gs, is, ks, ls, ns, ps, ts, qs, us, vs, xs, zs, As, Cs, Es, Fs, Ns, Os, Ss, Ts, Us, Vs, at, ct, et, ft, gt, kt, zt, Ct, cu, du, Tu, Wu, dv, $u, av, gv, kv, nv, pv, ov, Dv, Gv, Hv, Iv, Kv, Jv, Mv, Uv, Yv, cw, gw, hw, iw, jw, lw, mw, nw, ow, qw, rw, sw, zw, Aw, Bw, tb, Dw, Gw, Ew, Fw, Hw, Iw;
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
    ha = function(a, b, c) {
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
                    for (var f = va.apply(null, ha(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
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
                if (d instanceof La && d.ul(a)) {
                    a = Pa(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.Qa
    };
    Va = function(a) {
        for (var b = _.Ta.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return Pa(c.join(""))
    };
    _.Ya = function(a) {
        if (Xa.test(a)) return a
    };
    _.$a = function(a) {
        return a instanceof _.Oa ? _.Za(a) : _.Ya(a)
    };
    bb = function(a) {
        var b = new ab;
        b.Yi = a;
        return b
    };
    cb = function(a) {
        var b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            he: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    };
    _.fb = function(a) {
        var b = _.Ta.apply(1, arguments);
        if (0 === b.length) return eb(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return eb(c)
    };
    _.hb = function(a, b) {
        a = cb(_.gb(a).toString());
        var c = a.he,
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
        if (b instanceof ab) b = b.Yi;
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
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.g + ("&tv=" + a.A + "&st=") + a.Bd, c = void 0, h.l = 2, h.yield(sb(b), 4);
                case 4:
                    c = h.A;
                    h.g = 3;
                    h.l = 0;
                    break;
                case 2:
                    tb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Xd || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.l ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.j,
                        dk: c.bg_hash_basename,
                        ck: c.bg_binary,
                        yl: a.g + "_" + a.A,
                        Xd: d,
                        Bd: a.Bd,
                        cf: e,
                        Af: f,
                        bf: g
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
                g.push((h._ctx_ = d.context, h._bgv_ = d.dk, h._bgp_ = d.ck, h._li_ = d.yl, h._jk_ = d.Xd, h._st_ = d.Bd, h._rc_ = d.cf, h._dl_ = d.Af, h._g2_ = d.bf, h));
                if (d = f.GoogleDX5YKUSk) f.GoogleDX5YKUSk = void 0, d[1]();
                e = _.fb(vb, e);
                qb(e)
            }
            return c.return(b)
        })
    };
    Fb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (yb) {
            if (b && (zb ? !a.vl() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
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
    oc = function(a, b) {
        mc(b, (a | 34) & -14557)
    };
    qc = function(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    sc = function(a) {
        return !(!a || "object" !== typeof a || a.zl !== rc)
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
    Ec = function(a) {
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
    Oc = function(a) {
        if (!_.z(Number, "isFinite").call(Number, a)) throw Ec("enum");
        return a | 0
    };
    Uc = function(a) {
        return null == a ? a : Oc(a)
    };
    _.Vc = function(a) {
        return null == a ? a : _.z(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Wc = function(a) {
        if ("number" !== typeof a) throw Ec("int32");
        if (!_.z(Number, "isFinite").call(Number, a)) throw Ec("int32");
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
        if ("number" !== typeof a) throw Ec("uint32");
        if (!_.z(Number, "isFinite").call(Number, a)) throw Ec("uint32");
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
        if (!Nc(a)) throw Ec("int64");
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
            if (!Nc(a)) throw Ec("uint64");
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
        if (null != a && "object" === typeof a && a.Cg === ud) return a;
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
            if (d & 2048) throw Error();
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
        return a.Cg === ud ? a.toJSON() : a instanceof Ud ? $d(a, ee) : Xd(a)
    };
    fe = function(a, b, c) {
        c = void 0 === c ? oc : c;
        if (null != a) {
            if (Nb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = xc(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? mc(a, (d | 34) & -12293) : be(a, fe, d & 4 ? oc : c, !0, !0)
            }
            a.Cg === ud ? (c = a.F, d = ge(c), a = d & 2 ? a : Bd(a.constructor, he(c, d, !0))) : a instanceof Ud && !(a.Kd & 2) && (c = kc(ie(a, fe)), a = new Ud(c, a.Hf, a.Yd, a.sh));
            return a
        }
    };
    _.je = function(a) {
        var b = a.F;
        return Bd(a.constructor, he(b, ge(b), !1))
    };
    he = function(a, b, c) {
        var d = c || b & 2 ? oc : nc,
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
    ve = function(a, b, c, d, e, f, g) {
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
                if (0 == (h.Kd & 2) || k) {
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
        !g && e && (a.jk = !0);
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
    Le = function(a, b, c, d) {
        var e = a.F,
            f = ge(e);
        zc(f);
        b = qe(e, f, b);
        e = xc(b);
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    };
    Me = function(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != oe(a, b, f) && (0 !== d && (b = ne(a, b, d)), d = f)
        }
        return d
    };
    Ne = function(a, b, c, d) {
        a = a.F;
        var e = ge(a),
            f = oe(a, e, c, d);
        b = wd(f, b, !1, e);
        b !== f && null != b && ne(a, e, c, b, d);
        return b
    };
    Oe = function(a, b, c, d, e, f) {
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
    Pe = function(a, b, c, d) {
        a = a.F;
        var e = ge(a);
        zc(e);
        b = Oe(a, e, c, b, !0);
        c = null != d ? d : new c;
        b.push(c);
        xc(c.F) & 2 ? Fe(b, 8) : Fe(b, 16);
        return c
    };
    Qe = function(a) {
        return pd(a, !0)
    };
    Re = function(a, b) {
        return null != a ? a : b
    };
    Te = function(a, b, c) {
        var d = Se ? void 0 : a.constructor.da;
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
    Ue = function(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        ic(b, 128);
        return Bd(a, lc(b))
    };
    Ve = function(a, b) {
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
    We = function(a, b, c) {
        a[b] = c
    };
    $e = function(a) {
        var b = a[Xe];
        if (!b) {
            var c = Ye(a);
            b = function(d, e) {
                return Ze(d, e, c)
            };
            a[Xe] = b
        }
        return b
    };
    af = function(a) {
        return a.g
    };
    bf = function(a, b) {
        var c, d, e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d || (d = Ye(b).g), c || (c = $e(b)))
        }
    };
    Ye = function(a) {
        var b = a[cf];
        if (b) return b;
        b = a[cf] = {};
        var c = af,
            d = bf;
        var e = void 0 === e ? We : e;
        b.g = Ed(a[0]);
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.Ok = g, g = a[++f], "function" === typeof g && (b.l = g, b.A = a[++f], g = a[++f]));
        for (var h = {}; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; void 0 !== g;) {
            "number" === typeof g && (k += g, g = a[++f]);
            var l = void 0;
            if (g instanceof df) var m = g;
            else m = ef, f--;
            if (m.Ij) {
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
        ff in a && gf in a && cf in a && (a.length = 0);
        return b
    };
    jf = function(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Ok)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof df ? c : [hf, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = $e(c),
                        f = Ye(c).g;
                    c = (c = a.A) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    };
    Ze = function(a, b, c) {
        for (var d = ge(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var l = h - e,
                    m = jf(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (d = +n, _.z(Number, "isNaN").call(Number, d) || (e = a[n], null != e && (f = jf(c, d)) && f(b, e, d)))
        }
    };
    kf = function(a) {
        return new df(a, !1)
    };
    yf = function(a, b, c) {
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
        }null != b && ("string" === typeof b && lf(b), null != b && (mf(a.g, 8 * c), "number" === typeof b ? (a = a.g, Yb(b), xf(a, Wb, Xb)) : (c = lf(b), xf(a.g, c.A, c.g))))
    };
    Bf = function(a, b, c, d, e) {
        b = b instanceof _.D ? b.F : Array.isArray(b) ? _.A(b, d[0], d[1]) : void 0;
        null != b && (c = zf(a, c), e(b, a), Af(a, c))
    };
    Df = function(a) {
        var b = _.Cf();
        if (!a) throw Error(b && b() || String(a));
    };
    _.Cf = function() {
        var a = Ef;
        Ef = void 0;
        return a
    };
    Hf = function(a) {
        return function() {
            var b = new Ff;
            Ze(this.F, b, Ye(a));
            Gf(b, b.g.end());
            for (var c = new Uint8Array(b.A), d = b.l, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.l = [c];
            return c
        }
    };
    If = function(a) {
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
    Jf = function(a) {
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
        return _.Kf(Lf).A(a.g, a.defaultValue)
    };
    _.Mf = function(a) {
        return _.Kf(Lf).l(a.g, a.defaultValue)
    };
    Nf = function(a) {
        return _.Kf(Lf).j(a.g, a.defaultValue)
    };
    Of = function(a) {
        return _.Kf(Lf).M(a.g, a.defaultValue)
    };
    Pf = function(a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    Rf = function(a) {
        return Qf(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (_.H = b.toString(2), _.z(_.H, "padStart")).call(_.H, 8, "0")
        }).join("")
    };
    Sf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    };
    Tf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };
    Uf = function(a, b) {
        a = Rf(a);
        return a.length < b ? _.z(a, "padEnd").call(a, b, "0") : a
    };
    Vf = function(a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    _.Wf = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    };
    _.Xf = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    Yf = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    _.Zf = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(Yf("domLoading", a) || Infinity, Yf("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(Yf("responseEnd", a), Yf("navigationStart", a)) : b
    };
    bg = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.$f("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && ea(a.google_image_requests, f);
                _.ag(f, "load", g);
                _.ag(f, "error", g)
            };
            _.pb(f, "load", g);
            _.pb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    dg = function(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.Uc] = d.Ic, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Xb
            }).map(c), b.toJSON(), a.filter(function(d) {
                return !d.Xb
            }).map(c)])
        } catch (d) {
            return cg(d, b), ""
        }
    };
    cg = function(a, b) {
        try {
            eg({
                m: _.fg(a instanceof Error ? a : Error(String(a))),
                b: _.gg(b, 1, 0) || null,
                v: _.I(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    };
    hg = function(a, b, c, d, e, f) {
        try {
            var g = a.g,
                h = _.$f("SCRIPT", g);
            h.async = !0;
            ob(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function() {
                0 < c ? hg(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    };
    jg = function(a, b, c, d) {
        c = void 0 === c ? function() {} : c;
        d = void 0 === d ? function() {} : d;
        hg(ig(a), b, 0, !1, c, d)
    };
    kg = function(a) {
        return a[_.z(_.u.Symbol, "iterator")]()
    };
    ng = function(a) {
        var b = lg(mg(a.location.href));
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    };
    Fg = function(a) {
        var b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = lg(mg(a.location.href)).get("fctype")) && -1 !== b.indexOf(a) ? a : null
    };
    Hg = function(a) {
        var b = mg(a),
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
        a = mg(b).toString();
        "/" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
        return 1E3 >= a.toString().length ? a : null
    };
    Ig = function(a) {
        a && "function" == typeof a.za && a.za()
    };
    Ng = function(a) {
        a = Jg(a.data.__fciReturn);
        return {
            payload: a,
            Tg: _.Mg(a, 1)
        }
    };
    Pg = function() {
        var a = Og;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    Rg = function() {
        var a = Qg;
        return function(b) {
            return b instanceof a
        }
    };
    Tg = function(a) {
        return function(b) {
            if (!Sg(b)) return !1;
            for (var c = _.y(_.z(Object, "entries").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
                var e = _.y(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!(d in b)) {
                    if (!0 === e.so) continue;
                    return !1
                }
                if (!e(b[d])) return !1
            }
            return !0
        }
    };
    Ug = function() {
        return function(a) {
            return Array.isArray(a)
        }
    };
    Xg = function() {
        return function(a) {
            return Vg(a) ? a.every(function(b) {
                return Wg(b)
            }) : !1
        }
    };
    Yg = function(a) {
        return !!a && a.top === a
    };
    Zg = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Tg: b.__uspapiReturn.callId
        }
    };
    $g = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Tg: b.__gppReturn.callId
        }
    };
    ah = function(a) {
        return !a || 1 === a.length && -1 === a[0]
    };
    ch = function(a, b) {
        b = void 0 === b ? window : b;
        if (bh(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    dh = function(a) {
        return "null" !== a.origin
    };
    fh = function(a, b, c) {
        b = bh(b) && dh(c) ? c.document.cookie : null;
        return null === b ? null : (new eh({
            cookie: b
        })).get(a) || ""
    };
    gh = function(a, b, c) {
        return b[a] || c
    };
    ih = function(a) {
        _.Kf(hh).l(a)
    };
    jh = function() {
        return _.Kf(hh).j()
    };
    kh = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.H = c.allowedFeatures(), _.z(_.H, "includes")).call(_.H, a))
    };
    lh = function(a, b, c) {
        return !!(a && "runAdAuction" in b && b.runAdAuction instanceof Function && kh("run-ad-auction", c))
    };
    mh = function(a, b) {
        return !!(a && "browsingTopics" in b && b.browsingTopics instanceof Function && kh("browsing-topics", b))
    };
    nh = function(a, b, c) {
        c = void 0 === c ? b.document : c;
        return !!(a && "sharedStorage" in b && b.sharedStorage && kh("shared-storage", c))
    };
    qh = function(a) {
        a = void 0 === a ? _.oh() : a;
        return function(b) {
            return _.ph(b + " + " + a) % 1E3
        }
    };
    sh = function(a) {
        _.Kf(rh).g(a)
    };
    wh = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.t : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        th(_.Kf(hh), a);
        uh(b);
        vh(_.Kf(rh), b);
        _.Kf(Lf).g()
    };
    uh = function(a) {
        var b = _.Kf(Lf);
        b.A = function(c, d) {
            return gh(5, a, function() {
                return !1
            })(c, d, 2)
        };
        b.l = function(c, d) {
            return gh(6, a, function() {
                return 0
            })(c, d, 2)
        };
        b.j = function(c, d) {
            return gh(7, a, function() {
                return ""
            })(c, d, 2)
        };
        b.M = function(c, d) {
            return gh(8, a, function() {
                return []
            })(c, d, 2)
        };
        b.g = function() {
            gh(15, a, function() {})(2)
        }
    };
    Lh = function(a, b, c, d) {
        var e = new _.xh,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.ag(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (m) {}
            },
            h = yh(a);
        return h ? (_.pb(a, "message", g), f = c(h), e.promise) : (c = zh(a)) ? (f = String(Math.floor(2147483647 * _.oh())), _.pb(a, "message", g), b(c, f), e.promise) : null
    };
    Mh = function(a) {
        return Lh(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Nh = function(a) {
        return !!yh(a) || !!zh(a)
    };
    yh = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    zh = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    Oh = function(a) {
        var b, c;
        return null != (c = (_.H = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.z(_.H, "find")).call(_.H, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Ph = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(_.ph(a))) ? d : 0
    };
    Zh = function(a, b, c, d, e) {
        var f = e.getBidResponsesForAdUnitCode;
        if (f) {
            var g, h, k, l, m, n = null != (m = null == (g = f(null != (k = b.Zc) ? k : "")) ? void 0 : g.bids) ? m : null == (h = f(null != (l = b.adUnitCode) ? l : "")) ? void 0 : h.bids;
            if (null != n && n.length && (g = n.filter(function(v) {
                    var w = v.adId;
                    return v.auctionId !== c && _.z(Object, "values").call(Object, d).some(function(x) {
                        return _.z(x, "includes").call(x, w)
                    })
                }), g.length)) {
                var p, r;
                f = null == (p = e.adUnits) ? void 0 : null == (r = _.z(p, "find").call(p, function(v) {
                    v = v.code;
                    return v === b.Zc || v === b.adUnitCode
                })) ? void 0 : r.mediaTypes;
                p = _.y(g);
                for (r = p.next(); !r.done; r = p.next()) r = r.value, g = Qh(r, d, f), g = Rh(a, Sh(Th(Uh(Vh(new Wh, r.bidder), 1), 6, !0), g)), Xh(r.bidder, e, g), "number" === typeof r.timeToRespond && _.Yh(g, 2, Math.round(r.timeToRespond))
            }
        }
    };
    Xh = function(a, b, c) {
        for (var d = []; a && !_.z(d, "includes").call(d, a);) {
            d.unshift(a);
            var e = void 0,
                f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.Je(c, 10, d, _.rd)
    };
    bi = function(a, b, c) {
        null != _.Vc(_.$h(a, 3)) || (c === b.adUnitCode ? _.ai(a, 3, 1) : c === b.Zc && _.ai(a, 3, 2))
    };
    ji = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : _.gg(f, 1, 0)) && _.ci(b, 5, f);
        di(a, ei, 5) || (f ? 1 === _.gg(f, 1, 0) ? fi(a, f) : fi(a, gi(hi(ii(new ei, e), 1), Ph(c, d))) : fi(a, hi(ii(new ei, e), Ph(c, d) ? 2 : 3)))
    };
    Qh = function(a, b, c) {
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
            v = new ki;
        "number" === typeof d && (_.Yh(v, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === _.Mg(v, 2) || _.Yh(v, 8, d)));
        "string" === typeof f && li(v, 3, f);
        (_.H = ["string", "number"], _.z(_.H, "includes")).call(_.H, typeof h) && (f = new mi, h = li(f, 1, String(h)), _.ci(v, 6, h));
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
                d = ni(v, 4, 2);
                _.Je(v, 4, d.concat(f), _.rd)
            }
        switch (n || "banner") {
            case "banner":
                _.ai(v, 5, 1);
                break;
            case "native":
                _.ai(v, 5, 2);
                break;
            case "video":
                _.ai(v, 5, 3);
                b = new oi;
                var B;
                if ("adpod" === (null == c ? void 0 : null == (B = c.video) ? void 0 : B.context)) {
                    var C, F = null == c ? void 0 : null == (C = c.video) ? void 0 : C.adPodDurationSec;
                    _.Yh(b, 1, F)
                } else C = null == c ? void 0 : null == (F = c.video) ? void 0 : F.maxduration, _.Yh(b, 1, C);
                var G;
                if ("number" === typeof(null == c ? void 0 : null == (G = c.video) ? void 0 : G.skip)) {
                    var P;
                    c = !!(null == c ? 0 : null == (P = c.video) ? 0 : P.skip);
                    Th(b, 2, c)
                }
                var R;
                a = null == (R = a.meta) ? void 0 : R.adServerCatId;
                R = li(b, 3, a);
                if ("object" !== typeof k) k = null;
                else {
                    var L, Z;
                    a = String(null != (Z = null != (L = k["hb_pb_cat_dur_" + l]) ? L : k.hb_pb_cat_dur) ? Z : "");
                    var qa, wa, aa, ia;
                    L = String(null != (ia = null != (aa = null != (wa = null != (qa = k["hb_cache_id_" + l]) ? qa : k["hb_uuid_" + l]) ? wa : k.hb_cache_id) ? aa : k.hb_uuid) ? ia : "");
                    k = a && L ? a + "_" + L : L ? L : null
                }
                li(R, 4, k);
                _.ci(v, 9, b)
        }
        _.z(Number, "isFinite").call(Number, p) && _.z(Number, "isFinite").call(Number, r) && (k = new pi, r = _.qi(k, 1, Math.round(r)), p = _.qi(r, 2, Math.round(p)), _.ci(v, 7, p));
        "string" === typeof m && li(v, 1, m);
        return v
    };
    si = function(a, b) {
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
            "bidTimeout" === h && e.push.apply(e, _.ri(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.y(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).km = f)
            }
        }
        d = new _.u.Map;
        a = _.y(_.z(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.y(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.km, g && h && d.set(f, {
            latency: h - g,
            Ci: !1
        });
        e = _.y(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Ci = !0;
        return d
    };
    Di = function(a, b, c, d, e, f, g) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? new _.u.Map : d;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? new _.u.Map : f;
        g = void 0 === g ? new ti : g;
        var h = new _.u.Map,
            k = (0, a.getEvents)(),
            l = k.filter(function(aa) {
                var ia = aa.args;
                return "auctionEnd" === aa.eventType && ia.auctionId
            }),
            m = new ui,
            n = function(aa) {
                return aa === b.Zc || aa === b.adUnitCode
            },
            p, r, v, w = null != (v = vi.get((null != (p = b.Zc) ? p : "") + (null != (r = b.adUnitCode) ? r : ""))) ? v : 0,
            x;
        l = null != (x = l.filter(function(aa) {
            var ia, wb, Ua;
            return Number(null == (ia = aa.args) ? void 0 : ia.timestamp) > w && (null == (wb = aa.args) ? void 0 : null == (Ua = wb.adUnitCodes) ? void 0 : _.z(Ua, "find").call(Ua, n))
        })) ? x : [];
        if (!l.length) return null;
        var B;
        if (l = null == (B = l.reduce(function(aa, ia) {
                return Number(ia.args.timestamp) > Number(aa.args.timestamp) ? ia : aa
            })) ? void 0 : B.args) {
            x = void 0 === l.bidderRequests ? [] : l.bidderRequests;
            B = void 0 === l.bidsReceived ? [] : l.bidsReceived;
            var C = l.auctionId;
            l = l.timestamp;
            if (C && null != l && x.length) {
                var F, G;
                vi.set((null != (F = b.Zc) ? F : "") + (null != (G = b.adUnitCode) ? G : ""), l);
                F = wi(m);
                a.version && xi.test(a.version) && li(F, 6, a.version);
                var P, R;
                yi(zi(F, null == (P = a.getConfig) ? void 0 : null == (R = P.call(a).cache) ? void 0 : R.url), g);
                g = Ai(function() {
                    return si(k, C)
                });
                P = _.y(x);
                G = P.next();
                for (R = {}; !G.done; R = {
                        bidderCode: void 0,
                        qj: void 0
                    }, G = P.next())
                    for (x = G.value, R.bidderCode = x.bidderCode, l = x.bids, G = x.timeout, R.qj = x.src, x = x.auctionStart, l = _.y(l), r = l.next(), p = {}; !r.done; p = {
                            Ae: void 0
                        }, r = l.next()) {
                        var L = r.value;
                        p.Ae = L.bidId;
                        var Z = L.transactionId;
                        r = L.adUnitCode;
                        v = L.getFloor;
                        L = L.mediaTypes;
                        if (p.Ae && n(r)) {
                            bi(F, b, r);
                            Z && (_.Bi(F, 4) || li(F, 4, Z), h.has(Z) || h.set(Z, x));
                            null == Ci(F, 8) && _.z(Number, "isFinite").call(Number, G) && _.qi(F, 8, G);
                            var qa = _.z(B, "find").call(B, function(aa) {
                                return function(ia) {
                                    return ia.requestId === aa.Ae
                                }
                            }(p));
                            Z = Rh(F, function(aa) {
                                return function() {
                                    var ia = Vh(new Wh, aa.bidderCode);
                                    Xh(aa.bidderCode, a, ia);
                                    switch (aa.qj) {
                                        case "client":
                                            _.ai(ia, 7, 1);
                                            break;
                                        case "s2s":
                                            _.ai(ia, 7, 2)
                                    }
                                    return ia
                                }
                            }(R)());
                            ji(F, Z, r, d, e, f, v);
                            qa ? (Uh(Z, 1), "number" === typeof qa.timeToRespond && _.z(Number, "isFinite").call(Number, qa.timeToRespond) && _.Yh(Z, 2, Math.round(qa.timeToRespond)), p = Qh(qa, c, L), Sh(Z, p)) : (p = g().get(p.Ae)) && !p.Ci ? (Uh(Z, 2), _.z(Number, "isFinite").call(Number, p.latency) && _.Yh(Z, 2, Math.round(p.latency))) : (p = Uh(Z, 3), _.z(Number, "isFinite").call(Number, G) && _.Yh(p, 2, Math.round(G)))
                        }
                    }
                var wa;
                (null == (wa = a.getConfig) ? 0 : wa.call(a).useBidCache) && Zh(F, b, C, c, a);
                return m
            }
        }
    };
    Ei = function(a, b) {
        var c, d;
        return _.rb(function(e) {
            if (1 == e.g) return c = b ? a.filter(function(f) {
                return !f.Jd
            }) : a, e.yield(_.u.Promise.all(c.map(function(f) {
                return f.Uh.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function(f) {
                return f.Jd
            });
            return e.yield(_.u.Promise.race([_.u.Promise.all(d.map(function(f) {
                return f.Uh.promise
            })), new _.u.Promise(function(f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    };
    _.Fi = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.Hi = function(a) {
        var b = _.Gi(a);
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    Ii = function(a, b, c) {
        b = void 0 === b ? 420 : b;
        return (a = _.Gi(a, void 0 === c ? !1 : c)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    Ji = function(a) {
        return (a = _.Hi(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Ki = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.Li = function(a) {
        return _.Ki(a).clientHeight
    };
    _.Gi = function(a, b) {
        var c = _.Ki(a).clientWidth;
        return (void 0 === b ? 0 : b) ? c * _.Mi(a) : c
    };
    _.Ni = function(a, b) {
        var c = _.Ki(a);
        return b ? (a = _.Li(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    };
    _.Oi = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    Pi = function(a, b, c, d) {
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
    _.Qi = function(a) {
        var b = a.Bf,
            c = a.Le,
            d = a.lf,
            e = a.Cf,
            f = a.Me;
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
    Ri = function(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };
    _.Wi = function(a) {
        var b = a.pa,
            c = a.Fg,
            d = a.ff,
            e = a.Fh,
            f = a.Ba,
            g = a.kk,
            h = a.Um;
        a = 0;
        try {
            a |= b !== b.top ? 512 : 0;
            var k = Math.min(b.screen.width || 0, b.screen.height || 0);
            a |= k ? 320 > k ? 8192 : 0 : 2048;
            a |= b.navigator && Si(b.navigator.userAgent) ? 1048576 : 0;
            if (c) {
                k = a;
                var l = b.innerHeight;
                var m = ((void 0 === h ? 0 : h) ? _.Mi(b) * l : l) >= c;
                var n = k | (m ? 0 : 1024)
            } else n = a | (_.Fi(b) ? 0 : 8);
            a = n;
            a |= Ii(b, d, h);
            h || (a |= Ji(b))
        } catch (p) {
            a |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = _.Qi({
                    Bf: 0,
                    Le: b.innerWidth,
                    lf: 3,
                    Cf: 0,
                    Me: Math.min(Math.round(b.innerWidth / 320 * 50), Ti) + 15,
                    mf: 3
                });
                null != Ui(Vi(b, c), d) && (a |= 16777216);
                break;
            case 1:
                c = f, c = void 0 === c ? null : c, d = b.innerWidth, e = b.innerHeight, n = Math.min(Math.round(b.innerWidth / 320 * 50), Ti) + 15, m = _.Qi({
                    Bf: 0,
                    Le: d,
                    lf: 3,
                    Cf: e - n,
                    Me: e,
                    mf: 3
                }), 25 < n && m.push({
                    x: d - 25,
                    y: e - 25
                }), null != Ui(Vi(b, c), m) && (a |= 16777216)
        }
        g && (f = void 0 === f ? null : f, f = void 0 === f ? null : f, g = b.innerHeight, g = _.Qi({
            Bf: 0,
            Le: b.innerWidth,
            lf: 10,
            Cf: g - 66,
            Me: g,
            mf: 10
        }), g = null != Ui(Vi(b, f), g));
        g && (a |= 16777216);
        return a
    };
    Si = function(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    };
    Vi = function(a, b) {
        return new _.Xi(a, {
            ci: Yi(a, void 0 === b ? null : b)
        })
    };
    Yi = function(a, b) {
        if (b = void 0 === b ? null : b) {
            var c = b;
            return function(d, e, f) {
                var g, h;
                _.Zi(c, "ach_evt", {
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
    _.cj = function(a) {
        var b;
        var c = new $i;
        c = _.aj(c, 2, a.pvsid);
        c = _.bj(c, 3, a.Bb);
        c = _.bj(c, 6, a.bg);
        var d = null != (b = a.no) ? b : _.Wf();
        b = _.aj(c, 1, d);
        c = jh();
        b = _.Je(b, 4, c, Wc);
        a.payload && (c = a.payload(), _.ci(b, 7, c));
        a.Qb && _.aj(b, 5, a.Qb);
        return b
    };
    jj = function(a) {
        return _.cj(_.z(Object, "assign").call(Object, {}, a, {
            payload: function() {
                var b = new _.dj;
                var c = new _.ej;
                c = fj(c, 4, _.gj, ed(a.El));
                return _.hj(b, 4, _.ij, c)
            }
        }))
    };
    _.kj = function(a) {
        return _.cj(_.z(Object, "assign").call(Object, {}, a, {
            payload: function() {
                var b = new _.dj;
                var c = new _.ej;
                c = fj(c, 3, _.gj, Uc(a.U));
                return _.hj(b, 4, _.ij, c)
            }
        }))
    };
    qj = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.lj(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    sj = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.rj(d, function(e) {
                    return !_.z(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = qj(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    uj = function(a, b) {
        return null !== _.tj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        }, !0)
    };
    vj = function(a, b) {
        return _.tj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position
        }, !0)
    };
    wj = function(a) {
        for (var b = [], c = _.y(a.document.querySelectorAll("*")), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a.getComputedStyle(d, null);
            "fixed" === e.position && "none" !== e.display && "hidden" !== e.visibility && b.push(d)
        }
        return b
    };
    xj = function(a, b) {
        b = b.getBoundingClientRect();
        var c = b.left,
            d = b.bottom,
            e = b.right;
        return 0 <= b.top && 0 <= c && d <= a.innerHeight && e <= a.innerWidth
    };
    yj = function(a) {
        return Math.round(10 * Math.round(a / 10))
    };
    zj = function(a) {
        return a.position + "-" + yj(a.ja) + "x" + yj(a.sa) + "-" + yj(a.scrollY + a.od) + "Y"
    };
    Aj = function(a) {
        return "f-" + zj({
            position: a.position,
            od: a.od,
            scrollY: 0,
            ja: a.ja,
            sa: a.sa
        })
    };
    Bj = function(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    };
    Dj = function(a, b, c) {
        var d = _.Cj(c.pa).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.sa),
                    g = Math.max(e.left - 10, 0),
                    h = Math.min(e.right + 10, c.ja),
                    k = .3 * c.ja;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (0 < h && g < k) {
                        var l = Aj({
                            position: "left",
                            od: e,
                            ja: c.ja,
                            sa: c.sa
                        });
                        b.set(l, Bj(b.get(l), g))
                    }
                    if (g < c.ja && h > c.ja - k) {
                        l = Aj({
                            position: "right",
                            od: e,
                            ja: c.ja,
                            sa: c.sa
                        });
                        var m = c.ja - h;
                        b.set(l, Bj(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    };
    Gj = function(a, b) {
        var c = b.pa,
            d = b.Cc,
            e = "f-" + yj(b.ja) + "x" + yj(b.sa);
        a.has(e) || (a.set(e, 0), e = wj(c), d ? (Ej(a, b, e.filter(function(f) {
            return xj(c, f)
        })), Fj(c, e.filter(function(f) {
            return !xj(c, f)
        }))) : Ej(a, b, e))
    };
    Ej = function(a, b, c) {
        var d = b.wc,
            e = b.pa;
        _.Cj(e).sideRailProcessedFixedElements.clear();
        d = new _.u.Set([].concat(_.ri(_.z(Array, "from").call(Array, e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), _.ri(d)));
        c = _.y(c);
        for (e = c.next(); !e.done; e = c.next()) e = e.value, uj(e, d) || Dj(e, a, b)
    };
    Hj = function(a) {
        if (1200 > a.ja || 650 > a.sa) return null;
        var b = _.Cj(a.pa).sideRailAvailableSpace;
        a.Bi || Gj(b, {
            pa: a.pa,
            ja: a.ja,
            sa: a.sa,
            wc: a.wc,
            Cc: a.Cc
        });
        for (var c = [], d = .9 * a.sa, e = _.Oi(a.pa), f = (a.sa - d) / 2, g = f, h = d / 7, k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            var n = g;
            var p = a.position,
                r = b,
                v = {
                    pa: a.pa,
                    ja: a.ja,
                    sa: a.sa,
                    wc: a.wc
                },
                w = Aj({
                    position: p,
                    od: n,
                    ja: v.ja,
                    sa: v.sa
                }),
                x = zj({
                    position: p,
                    od: n,
                    scrollY: e,
                    ja: v.ja,
                    sa: v.sa
                });
            if (!r.has(x)) {
                var B = "left" === p ? 20 : v.ja - 20,
                    C = B;
                p = .3 * v.ja / 5 * ("left" === p ? 1 : -1);
                for (var F = 0; 6 > F; F++) {
                    var G = Ri(v.pa.document, {
                            x: Math.round(C),
                            y: Math.round(n)
                        }),
                        P = uj(G, v.wc),
                        R = vj(G, v.pa);
                    if (!P && null !== R) {
                        Dj(R, r, v);
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
            n = Bj(r.get(w), r.get(x));
            m.call(l, n);
            g += h
        }
        b = a.lj;
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
    Fj = function(a, b) {
        var c = _.Cj(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(function() {
                setTimeout(function() {
                    Ij(a);
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
    Ij = function(a) {
        a = _.Cj(a).sideRailAvailableSpace;
        var b = _.z(Array, "from").call(Array, _.z(a, "keys").call(a)).filter(function(d) {
            return _.z(d, "startsWith").call(d, "f-")
        });
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next()) a.delete(c.value)
    };
    _.Jj = function(a) {
        if (a.la) return a.la.Eb(1228, function() {
            return Hj(a)
        }) || null;
        try {
            return Hj(a)
        } catch (b) {}
        return null
    };
    Kj = function(a, b, c, d, e) {
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
    Nj = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.z(Lj, "includes").call(Lj, e.height) || (null == e ? 0 : e.maxHeight) && !_.z(Mj, "includes").call(Mj, e.maxHeight) || Kj(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.z(Lj, "includes").call(Lj, g) || !!f && !_.z(Mj, "includes").call(Mj, f)
        }, c, d) ? !1 : !0
    };
    Rj = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        Qj(a, function(e) {
            return d = Nj(e, b, 10, 10)
        }, c);
        return d
    };
    Sj = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Vj = function(a) {
        a = Tj(a);
        return _.Uj(a)
    };
    Tj = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    Yj = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = Wj.g();
        0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
        2 === e.g && (e = {}, eg(_.z(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(Xj(window)), e.em = c, e.lid = b, e.eids = jh().join(), e), d), "esp"))
    };
    Zj = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new _.u.Promise(function(c) {
            var d = function() {
                c(b());
                _.ag(a, "load", d)
            };
            _.pb(a, "load", d)
        })
    };
    ak = function(a) {
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
    ek = function(a, b) {
        return _.bk(a, ck, 2).some(function(c) {
            return dk(c, 1) === b && _.Bi(c, 2)
        })
    };
    fk = function(a, b) {
        return _.bk(a, ck, 2).some(function(c) {
            return dk(c, 1) === b && _.Bi(c, 2)
        })
    };
    lk = function(a, b, c, d) {
        if (b)
            for (var e = _.y(ak(b)), f = e.next(), g = {}; !f.done; g = {
                    Bc: void 0
                }, f = e.next())
                if (g.Bc = f.value, (f = gk().get(g.Bc, b).Tc) && !fk(a, g.Bc)) {
                    var h = hk(f);
                    if (2 !== h && 3 !== h) {
                        h = !1;
                        if (c) {
                            var k = /^(\d+)$/.exec(g.Bc);
                            if (k && !(h = _.z(c.split(","), "includes").call(c.split(","), k[1]))) continue;
                            if (!h && !c.split(",").some(function(m) {
                                    return function(n) {
                                        var p;
                                        return null == d ? void 0 : null == (p = d.get(n)) ? void 0 : p.has(m.Bc)
                                    }
                                }(g))) continue
                        }
                        Th(f, 9, h);
                        (h = dk(f, 2)) && 1024 < h.length && (k = {}, Yj(55, g.Bc, null, (k.sl = String(h.length), k)), _.ik(f.ib(jk(108)), 2));
                        kk(a, 2, ck, f);
                        k = f = void 0;
                        var l = {};
                        Yj(19, g.Bc, null, (l.hs = h ? "1" : "0", l.sl = String(null != (k = null == (f = h) ? void 0 : f.length) ? k : -1), l))
                    }
                }
    };
    mk = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    yk = function(a, b, c, d, e, f) {
        f = void 0 === f ? nk : f;
        var g, h, k, l, m, n, p, r, v, w, x, B, C;
        return _.rb(function(F) {
            return 1 == F.g ? (g = new ok, h = new pk(a, c, e), J(g, h), J(g, new qk(h.o, void 0, d, e)), k = new rk(h.j, e), J(g, k), l = new sk(k.j, e), J(g, l), m = new tk(b, l.j, e), J(g, m), J(g, new qk(m.o, void 0, d, e)), n = new uk(m.j, m.H, f.qh ? 1024 : 300, f.qh ? 1024 : 1E3, e), J(g, n), J(g, new qk(n.j, void 0, d, e)), p = new vk(e), J(g, p), r = new wk(p.output, l.o, e), J(g, r), v = new tk(b, r.j, e), J(g, v), w = new qk(v.j, void 0, d, e), J(g, w), xk(g), C = a, F.yield(n.j.promise, 2)) : F.return({
                id: C,
                collectorGeneratedData: null != (B = null == (x = F.A) ? void 0 : dk(x, 2)) ? B : null
            })
        })
    };
    Ek = function(a, b, c, d) {
        var e = {
            qh: _.E(zk)
        };
        e = void 0 === e ? nk : e;
        Ak() !== Bk(window) ? Yj(16, "") : Ck(a, "encryptedSignalProviders", c) && Ck(a, "secureSignalProviders", c) || (Yj(38, ""), Dk(a, "encryptedSignalProviders", b, e, c, d), Dk(a, "secureSignalProviders", b, e, c, function() {}))
    };
    Ck = function(a, b, c) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    Dk = function(a, b, c, d, e, f) {
        var g, h = new Fk(null != (g = a[b]) ? g : [], c, "secureSignalProviders" === b, f, d);
        a[b] = new Gk(h);
        h.addErrorHandler(e)
    };
    Jk = function(a, b) {
        var c = new ok,
            d = new vk(b);
        a = new Hk(d.output, a, b);
        Ik(c, [d, a]);
        xk(c)
    };
    Nk = function(a, b, c, d, e) {
        var f = b.toString();
        if (Kk.has(f)) return null;
        Kk.add(f);
        f = new ok;
        a = new pk(a, c, e);
        var g = new qk(a.o, c, d, e),
            h = new Lk(a.j, e),
            k = new rk(h.j, e);
        b = new Mk(k.j, b, e);
        c = new qk(b.j, c, d, e);
        Ik(f, [a, g, h, k, b, c]);
        xk(f);
        return f
    };
    Pk = function(a, b, c) {
        c = void 0 === c ? Ok : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.pb(a, "load", function() {
            return void c(a, b)
        }))
    };
    Qk = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Rk = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Tk = function(a) {
        if (a === a.top || _.Sk(a.top)) return _.u.Promise.resolve({
            status: 4
        });
        var b = Qk(a);
        if (!b) return _.u.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Rk(a.document.referrer)) return _.u.Promise.resolve({
            status: 3
        });
        var c = new _.xh;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Kb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    Xk = function(a, b) {
        var c = Uk(a);
        return c.messageChannelSendRequestFn ? _.u.Promise.resolve(c.messageChannelSendRequestFn) : new _.u.Promise(function(d) {
            function e(k) {
                return h.g(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.$f("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.gb(Vk).toString();
            var g = (new URL(Vk.toString())).origin,
                h = Wk({
                    destination: a,
                    ub: f,
                    origin: g,
                    zb: "goog:gRpYw:doubleclick"
                });
            h.g("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    dl = function(a, b, c, d) {
        var e = {
            skipTopicsObservation: _.E(Yk),
            includeBuyerTopics: _.E(Zk)
        };
        e = void 0 === e ? {} : e;
        var f = $k(d),
            g = f.Ee,
            h = f.De;
        b = Uk(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics
        }).then(function(k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && ta(k, g)));
            else if (Pg()(k)) l || (l = k !== g);
            else return c.Db(989, Error(JSON.stringify(k))), 7;
            if (l && d) try {
                var m = new al;
                var n = _.Yh(m, 2, _.Wf());
                k instanceof Uint8Array ? fj(n, 1, bl, wc(k, !1, !1)) : fj(n, 3, bl, Uc(k));
                d.setItem("goog:cached:topics", cl(n))
            } catch (p) {}
            return k
        }), b.getTopicsPromise = a);
        return g && !h ? _.u.Promise.resolve(g) : b.getTopicsPromise
    };
    $k = function(a) {
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
            var c = el(b),
                d = fl(c, bl);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    e = gl(hl(c, il(c, bl, 1)));
                    break;
                case 3:
                    e = _.gg(c, il(c, bl, 3), 0);
                    break;
                default:
                    lb(d)
            }
            var f = _.Mg(c, 2) + 6048E5 < _.Wf();
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
    Uk = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    ll = function(a) {
        if (Ka()) {
            var b = a.document.documentElement.lang;
            jl(a) ? kl(Xj(a), !0, "", b) : (new MutationObserver(function(c, d) {
                jl(a) && (kl(Xj(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    jl = function(a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    };
    kl = function(a, b, c, d) {
        eg({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    nl = function(a) {
        var b = "";
        ml(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    ol = function() {
        var a = Date.now();
        return _.z(Number, "isFinite").call(Number, a) ? Math.round(a) : 0
    };
    rl = function(a) {
        var b = new pl;
        var c = ol();
        b = _.aj(b, 1, c);
        b = _.aj(b, 2, a.pvsid);
        b = _.bj(b, 3, a.yb || a.Bb);
        c = jh();
        b = _.Je(b, 4, c, Wc);
        b = _.aj(b, 5, a.Ii);
        a = _.bj(b, 12, a.bg);
        var d;
        if (b = null == (d = _.u.globalThis.performance) ? void 0 : d.memory) {
            d = new ql;
            try {
                _.aj(d, 1, b.jsHeapSizeLimit)
            } catch (e) {}
            try {
                _.aj(d, 2, b.totalJSHeapSize)
            } catch (e) {}
            try {
                _.aj(d, 3, b.usedJSHeapSize)
            } catch (e) {}
        } else d = void 0;
        d && _.ci(a, 10, d);
        return a
    };
    xl = function(a) {
        var b = _.Zf();
        if (a.Qc) {
            var c = a.Ra,
                d = c.Pc,
                e = rl(a),
                f = new sl;
            b = _.aj(f, 2, b);
            f = new tl;
            f = _.ul(f, 1, a.Qc);
            f = _.vl(f, 2, a.Ii);
            f = _.ul(f, 3, a.nj);
            f = _.vl(f, 4, a.Hi);
            f = _.ul(f, 5, a.gh);
            a = _.vl(f, 6, a.hg);
            a = _.ci(b, 3, a);
            e = _.hj(e, 6, wl, a);
            d.call(c, e)
        }
    };
    Al = function(a) {
        if (!a.Qc) return function() {};
        var b = ol();
        a.Ra.Pc(yl(rl(a)));
        return function() {
            var c = a.Ra,
                d = c.Pc,
                e = rl(a);
            var f = new zl;
            var g = ol() - b;
            f = _.aj(f, 1, g);
            e = _.hj(e, 14, wl, f);
            return void d.call(c, e)
        }
    };
    Bl = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    M = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function() {
            var e = _.Ta.apply(0, arguments),
                f = Cl(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Qc && a.nj) {
                    var h = a.Ra,
                        k = h.Pc,
                        l = rl(a);
                    var m = _.aj(l, 5, a.Hi);
                    var n = new Dl;
                    var p = _.K(n, 1, b);
                    var r = _.vl(p, 2, g);
                    var v = _.hj(m, 9, wl, r);
                    k.call(h, v)
                }
            } catch (w) {}
            return f
        }
    };
    Cl = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = _.Ta.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.Kf(El);
            try {
                var l = _.E(Fl);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) Gl.call(this, a, 110, m);
                    else if (Gl.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if (_.Hl(h), !g && !d) throw m;
                }
            }
            return f
        }
    };
    Il = function(a, b, c, d) {
        return Cl(a, b, c, void 0 === d ? !1 : d)()
    };
    Gl = function(a, b, c) {
        if (a.gh) {
            c = _.Jl(c) ? c.error : c;
            var d = new Kl,
                e = new Ll;
            try {
                var f = Xj(window);
                _.aj(e, 1, f)
            } catch (p) {}
            try {
                var g = jh();
                _.Je(e, 2, g, Wc)
            } catch (p) {}
            try {
                _.bj(e, 3, window.document.URL)
            } catch (p) {}
            f = _.ci(d, 2, e);
            g = new Ml;
            b = _.K(g, 1, b);
            try {
                var h = Wg(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.bj(b, 2, h)
            } catch (p) {}
            try {
                var k = Wg(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.bj(b, 3, k)
            } catch (p) {}
            try {
                var l = Wg(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.Je(b, 4, l.split(/\n\s*/), _.rd)
            } catch (p) {}
            h = _.ci(f, 1, b);
            k = new Nl;
            try {
                _.bj(k, 1, a.yb || a.Bb)
            } catch (p) {}
            try {
                var m = Ol();
                _.vl(k, 2, m)
            } catch (p) {}
            try {
                var n = [].concat(_.ri(_.z(Pl, "keys").call(Pl)));
                _.Je(k, 3, n, _.rd)
            } catch (p) {}
            _.hj(h, 4, Ql, k);
            _.aj(h, 5, a.hg);
            a.Ra.qm(h)
        }
    };
    Tl = function(a, b) {
        var c = Rl.get(a);
        c || (b = c = b(), Sl.set(b, a), Rl.set(a, b));
        return c
    };
    N = function(a) {
        return function() {
            return new Ul(a, [].concat(_.ri(_.Ta.apply(0, arguments))))
        }
    };
    Vl = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Vl(b) : String(b)
        }).join(", ") + "]"
    };
    Wl = function(a, b) {
        b = Vl(b);
        b = b.substring(1, b.length - 1);
        return new Ul(96, [a, b])
    };
    Xl = function(a) {
        return (_.H = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable gameManualInterstitialSlotReady gameManualInterstitialSlotClosed".split(" "), _.z(_.H, "includes")).call(_.H, a) ? a : null
    };
    Zl = function(a, b, c) {
        return Tl(c, function() {
            return new Yl(a, b, c)
        })
    };
    am = function(a, b, c) {
        return Tl(c, function() {
            return new $l(a, b, c)
        })
    };
    bm = function(a, b, c, d) {
        "string" === typeof a ? b.setClickUrl(a) : O(d, Wl("Slot.setClickUrl", [a]), c)
    };
    im = function(a, b, c, d, e) {
        if ("string" !== typeof a || cm(a)) O(e, Wl("Slot.setTargeting", [a, b]), c);
        else {
            var f = [];
            Array.isArray(b) ? f = b : _.ra(b) ? f = _.z(Array, "from").call(Array, b) : b && (f = [b]);
            f = f.map(String);
            (b = (_.H = dm(d), _.z(_.H, "find")).call(_.H, function(g) {
                return dk(g, 1) === a
            })) ? em(b, f): (b = em(fm(new gm, a), f), kk(d, 9, gm, b));
            e.info(hm(a, f.join(), d.getAdUnitPath()), c)
        }
    };
    jm = function(a, b, c, d) {
        if (null != a && "object" === typeof a)
            for (var e = _.y(_.z(Object, "keys").call(Object, a)), f = e.next(); !f.done; f = e.next()) f = f.value, im(f, a[f], b, c, d);
        else d.error(Wl("Slot.updateTargetingFromMap", [a]), b)
    };
    lm = function(a, b, c, d) {
        return "string" !== typeof a ? (O(d, Wl("Slot.getTargeting", [a]), b), []) : (b = (_.H = dm(c), _.z(_.H, "find")).call(_.H, function(e) {
            return dk(e, 1) === a
        })) ? km(b).slice() : []
    };
    mm = function(a) {
        return dm(a).map(function(b) {
            return _.I(b, 1)
        })
    };
    rm = function(a, b, c, d) {
        if (void 0 === a) _.ik(c, 9), d.info(nm(b.getAdUnitPath()), b);
        else {
            var e = dm(c),
                f = _.z(e, "findIndex").call(e, function(g) {
                    return dk(g, 1) === a
                });
            0 > f ? O(d, om(a, b.getAdUnitPath()), b) : (e.splice(f, 1), _.pm(c, 9, e), d.info(qm(a, b.getAdUnitPath()), b))
        }
    };
    _.um = function(a) {
        _.Kf(sm).g = !0;
        return tm[a]
    };
    ym = function(a, b, c) {
        var d, e;
        return null != (e = null == (d = _.z(a, "find").call(a, function(f) {
            f = _.vm(f, wm, 1);
            return xm(f, 1) <= b && xm(f, 2) <= c
        })) ? void 0 : _.bk(d, wm, 2)) ? e : null
    };
    Am = function(a, b, c) {
        var d;
        "number" === typeof b && "number" === typeof c && _.bk(a, zm, 6).length ? d = ym(_.bk(a, zm, 6), b, c) : d = _.bk(a, wm, 5);
        return d
    };
    Cm = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = Bm(!1, b), c = Am(a, b.width, b.height));
        null != c || (c = Am(a));
        return null == c ? [] : c.map(function(d) {
            return _.Q(d, 3) ? "fluid" : [xm(d, 1), xm(d, 2)]
        })
    };
    Dm = function(a) {
        var b = [],
            c = !1;
        a = _.y(Cm(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Em = function(a) {
        return 0 !== a && 1 !== a
    };
    Fm = function(a) {
        return Em(a) && !(_.H = [8, 9], _.z(_.H, "includes")).call(_.H, a)
    };
    Gm = function(a) {
        var b = a.document;
        return Yg(a) ? b.URL : b.referrer
    };
    Jm = function(a) {
        try {
            return Hm(a, window.top)
        } catch (b) {
            return new _.Im(-12245933, -12245933)
        }
    };
    Nm = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Km(Lm, a), a = new _.Mm(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Pm = function(a, b) {
        for (var c = {}, d = _.y(_.z(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = _.je(b[e]),
                g = _.Kf(Om),
                h = g.g.get(e);
            null == h ? h = ++_.Kf(El).l : g.g.delete(e);
            _.ik(f, 20, _.Zc(h));
            c[e] = f
        }
        return {
            ba: _.je(a),
            T: c
        }
    };
    Rm = function() {
        for (var a = "", b = _.y(Qm()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Qm = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    Xm = function(a, b, c, d) {
        var e = Sm(b, a) || Tm(b, a);
        if (!e) return null;
        var f = Jm(e),
            g = e === Tm(b, a),
            h = Ai(function() {
                var p = g ? Tm(b, a) : e;
                return p && Um(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = Cm(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = Vm(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = Vm(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && Wm(e) ? f : new _.Im(-12245933, -12245933)
    };
    Ym = function(a, b, c, d) {
        var e = Tm(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = Xm(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    Zm = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    $m = function(a) {
        return Zm(a) + "__container__"
    };
    Sm = function(a, b) {
        var c;
        return (null == (c = Tm(a, b)) ? void 0 : c.querySelector('[id="' + $m(a) + '"]')) || null
    };
    an = function(a, b) {
        var c, d;
        return null != (d = null == (c = Sm(a, b)) ? void 0 : c.querySelector('iframe[id="' + Zm(a) + '"]')) ? d : null
    };
    Tm = function(a, b) {
        b = void 0 === b ? document : b;
        return bn().l.get(a) || b.getElementById(a.getDomId())
    };
    dn = function(a, b, c) {
        return Tl(c, function() {
            return new cn(a, b, c, c.g)
        })
    };
    en = function(a) {
        return _.z(Object, "assign").call(Object, {}, a, _.z(Object, "fromEntries").call(Object, _.z(Object, "entries").call(Object, a).map(function(b) {
            b = _.y(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    jn = function() {
        var a = {},
            b = en(fn);
        a.OutOfPageFormat = b;
        b = en(gn);
        a.TrafficSource = b;
        b = en(hn);
        a.Taxonomy = b;
        return a
    };
    kn = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a.tag_origin = "to", a
    };
    nn = function(a, b, c, d, e) {
        if ("string" === typeof a && a.length && void 0 !== kn()[a] && "string" === typeof b) {
            var f = (_.H = c.Pa(), _.z(_.H, "find")).call(_.H, function(g) {
                return dk(g, 1) === a
            });
            f ? em(f, [b]) : (f = ln(fm(new gm, a), b), kk(c, 14, gm, f));
            e.info(mn(a, String(b), d))
        } else O(e, Wl("PubAdsService.set", [a, b]))
    };
    tn = function(a, b, c) {
        return "string" !== typeof a ? (O(c, Wl("PubAdsService.get", [a])), null) : (b = (b = (_.H = b.Pa(), _.z(_.H, "find")).call(_.H, function(d) {
            return dk(d, 1) === a
        })) && km(b)) ? b[0] : null
    };
    un = function(a) {
        return a.Pa().map(function(b) {
            return _.I(b, 1)
        })
    };
    wn = function() {
        for (var a = Nf(vn) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    An = function() {
        if (xn) return xn;
        for (var a = Of(yn), b = [], c = 0; c < a.length; c += 2) _.zn(a[c], a[c + 1], b);
        return xn = b.join("&")
    };
    Fn = function(a, b) {
        if (!b || !_.ja(b)) return null;
        var c = !1,
            d = new Bn;
        _.Cn(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? Th(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? Th(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? Th(d, 3, b.sandbox) : c = g = !0;
                    break;
                default:
                    g = !0
            }
            g && a.error(Dn("setSafeFrameConfig", En(b), f, En(e)))
        });
        return c ? null : d
    };
    Hn = function(a) {
        var b = new Bn;
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) null != Gn(c, 1) && Th(b, 1, _.Q(c, 1)), null != Gn(c, 2) && Th(b, 2, _.Q(c, 2)), null != Gn(c, 3) && Th(b, 3, _.Q(c, 3));
        return b
    };
    In = function(a, b) {
        var c = {};
        b = (c[0] = qh(b.pvsid), c);
        return _.Kf(hh).A(a, b)
    };
    Kn = function(a, b) {
        var c;
        return null == (c = _.Jn(a, "__gads", b)) ? void 0 : _.z(c.split(":"), "find").call(c.split(":"), function(d) {
            return 0 === d.indexOf("ID=")
        })
    };
    Ln = function(a, b, c, d) {
        (c = Kn(c, d)) ? (d = {}, b = (d[0] = qh(b.pvsid), d[1] = qh(c), d), _.Kf(hh).A(a, b)) : In(a, b)
    };
    Pn = function(a) {
        var b = a.key,
            c = a.value,
            d = a.Fa,
            e = a.serviceName,
            f = a.xm,
            g = a.fb,
            h = a.R;
        a = a.context;
        var k = null;
        "string" === typeof c ? k = [c] : Array.isArray(c) ? k = c : _.ra(c) && (k = _.z(Array, "from").call(Array, c));
        var l = "string" === typeof b && !cm(b);
        k = k && va(k);
        var m, n = null != (m = null == k ? void 0 : k.every(function(p) {
            return "string" === typeof p
        })) ? m : !1;
        if (l && n) {
            c = k;
            m = (_.H = _.bk(d, gm, 2), _.z(_.H, "find")).call(_.H, function(p) {
                return dk(p, 1) === b
            });
            if ("gpt-beta" === b) {
                if (f) {
                    O(h, Mn(c.join()));
                    return
                }
                if (m) {
                    O(h, Nn(c.join()));
                    return
                }
                c = On(c, g, a)
            }
            m ? em(m, c) : (f = em(fm(new gm, b), c), kk(d, 2, gm, f));
            h.info(hm(b, c.join(), e))
        } else O(h, Wl("PubAdsService.setTargeting", [b, c]))
    };
    Qn = function(a, b, c) {
        return "string" !== typeof a ? (O(c, Wl("PubAdsService.getTargeting", [a])), []) : (b = (_.H = _.bk(b, gm, 2), _.z(_.H, "find")).call(_.H, function(d) {
            return dk(d, 1) === a
        })) ? km(b).slice() : []
    };
    Rn = function(a) {
        return _.bk(a, gm, 2).map(function(b) {
            return _.I(b, 1)
        })
    };
    Vn = function(a, b, c, d) {
        if (void 0 === a) _.ik(b, 2), d.info(Sn(c));
        else if ("gpt-beta" === a) O(d, Tn(a));
        else {
            var e = _.bk(b, gm, 2),
                f = _.z(e, "findIndex").call(e, function(g) {
                    return dk(g, 1) === a
                });
            0 > f ? O(d, om(a, c)) : (e.splice(f, 1), _.pm(b, 2, e), d.info(Un(a, c)))
        }
    };
    On = function(a, b, c) {
        var d = [];
        a = _.y(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            b.g = e;
            var f = In(9, c);
            1 === f.length && (d.push(e), d.push(e + "-" + f[0]))
        }
        return d
    };
    Xn = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = Wn.exec(null != (b = null == (a = _.um(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    Yn = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    Zn = function(a, b) {
        var c = b.g;
        return a.map(function(d) {
            return _.z(c, "find").call(c, function(e) {
                return e.g === d
            })
        }).filter(Rg())
    };
    ao = function() {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function() {
                $n();
                return !0
            },
            set: function() {
                $n()
            },
            configurable: !0
        })
    };
    eo = function(a, b, c, d, e, f) {
        var g = bo(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Fa;
        if (!f || !g) return O(b, Wl("PubAdsService.definePassback", [d, e])), null;
        Th(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Vi: dn(a, b, new co(a, f, c)),
            Fa: g
        }
    };
    go = function(a, b, c, d, e) {
        return Tl(c, function() {
            return new fo(a, b, c, d, e)
        })
    };
    ho = function(a, b, c, d, e) {
        "string" !== typeof a || "string" !== typeof b || void 0 === kn()[a] ? O(e, Wl("Slot.set", [a, b]), c) : (c = (_.H = d.Pa(), _.z(_.H, "find")).call(_.H, function(f) {
            return dk(f, 1) === a
        })) ? em(c, [b]) : (b = ln(fm(new gm, a), b), kk(d, 3, gm, b))
    };
    io = function(a, b, c, d) {
        return "string" !== typeof a ? (O(d, Wl("Slot.get", [a]), b), null) : (b = (b = (_.H = c.Pa(), _.z(_.H, "find")).call(_.H, function(e) {
            return dk(e, 1) === a
        })) && km(b)) ? b[0] : null
    };
    jo = function(a) {
        return a.Pa().map(function(b) {
            return _.I(b, 1)
        })
    };
    lo = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(ko) : "fluid" === a
    };
    mo = function(a) {
        return Array.isArray(a) && 2 === a.length && ko(a[0]) && ko(a[1])
    };
    oo = function(a) {
        if (Array.isArray(a)) {
            var b = new wm;
            b = _.ik(b, 1, _.Zc(a[0]));
            a = _.ik(b, 2, _.Zc(a[1]))
        } else a = no();
        return a
    };
    qo = function(a) {
        var b = [];
        if (po(a)) b.push(oo(a));
        else if (Array.isArray(a)) {
            a = _.y(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, po(c) ? b.push(oo(c)) : ta(c, ["fluid"]) && b.push(no())
        }
        return b
    };
    ro = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return qo(a)
    };
    po = function(a) {
        return _.E(so) ? Array.isArray(a) && 2 === a.length ? a.every(to) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    vo = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new uo("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!mo(b)) throw new uo("Size must be an array of two non-negative integers");
        var c = new wm;
        c = _.ik(c, 1, _.Zc(b[0]));
        b = _.ik(c, 2, _.Zc(b[1]));
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = qo(a[1]), 0 === a.length) throw new uo("At least one slot size must be present");
        c = new zm;
        b = _.ci(c, 1, b);
        return _.pm(b, 2, a)
    };
    wo = function() {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {
            cmd: []
        }
    };
    Ao = function(a, b) {
        _.E(xo) ? (_.ik(a, 28), null !== b && Sg(b) && _.z(Object, "hasOwn").call(Object, b, "enabled") && (b = b.enabled, yo(b) && (b = zo(b), _.ci(a, 28, b)))) : void 0 === b || null === b ? _.ik(a, 28) : (b = b.enabled, yo(b) ? (b = zo(b), _.ci(a, 28, b)) : void 0 !== b && null !== b || _.ik(a, 28))
    };
    Bo = function(a, b) {
        if (!b) return [];
        var c = [];
        b = _.y((_.H = He(b, 26, zd), _.z(_.H, "values")).call(_.H));
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            try {
                c.push(JSON.parse(d))
            } catch (e) {
                Gl(a, 1023, e)
            }
        }
        return c
    };
    Do = function(a, b, c) {
        return Tl(c, function() {
            return new Co(a, b, c)
        })
    };
    No = function(a, b, c, d, e, f, g, h) {
        var k = new ok,
            l = new Eo(a, h);
        J(k, l);
        e = new Fo(a, d, e);
        J(k, e);
        e = new Go(a, b, d, f, l.kb);
        J(k, e);
        h = new Ho(a, b, c, d, h, f, l.kb);
        J(k, h);
        if (_.E(Io)) {
            b = new Jo(a, b, c, d, f, l.kb);
            J(k, b);
            var m = b.j
        }
        l = new Ko(a, l.kb, h.j, e.j, m);
        J(k, l);
        _.E(Lo) && J(k, new Mo(a, g, l.output));
        xk(k);
        return {
            kb: l.output,
            Ka: k
        }
    };
    Po = function(a, b) {
        return Tl(b, function() {
            return new Oo(a, b)
        })
    };
    Ro = function(a, b, c) {
        var d = Cl(a, 77, function() {
            var e = b.cmd;
            if (!e || Array.isArray(e)) {
                var f = new Qo(c);
                b.cmd = Po(a, f);
                null != e && e.length && f.push.apply(f, e)
            }
        });
        b.fifWin && "complete" !== document.readyState ? _.pb(window, "load", function() {
            return window.setTimeout(d, 0)
        }) : d()
    };
    Uo = function(a) {
        var b = window;
        "complete" === _.t.document.readyState ? Il(a, 94, function() {
            wo()._pubconsole_disable_ || null !== So(b) && To(a, b)
        }) : _.pb(_.t, "load", Cl(a, 94, function() {
            wo()._pubconsole_disable_ || null !== So(b) && To(a, b)
        }))
    };
    To = function(a, b) {
        b = void 0 === b ? _.t : b;
        if (!Vo) {
            var c = new Wo("gpt_pubconsole_loaded");
            Xo(c, a);
            Yo(c, "param", String(So(b)));
            Yo(c, "api", String(Zo));
            $o(c);
            _.ap(b.document, bp);
            Vo = !0
        }
    };
    So = function(a) {
        var b = Gm(a),
            c;
        return null != (c = (_.H = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.z(_.H, "find")).call(_.H, function(d) {
            var e = b.search(cp);
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
    dp = function() {
        wo()._pubconsole_disable_ = !0
    };
    gp = function() {
        ep && (wo().console.openConsole(fp), fp = void 0, ep = !1)
    };
    hp = function(a) {
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
    ip = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(dk(a, 1)), c.push(Dm(a)), c.push(dk(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.ph(c.join(":")).toString() : "0"
    };
    jp = function(a) {
        if (!_.Sk(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    lp = function(a, b, c, d, e) {
        var f = void 0,
            g = Cl(a.context, b, e);
        _.pb(c, d, g) && (f = function() {
            return void _.ag(c, d, g)
        }, _.kp(a, f));
        return f
    };
    np = function(a) {
        a = (_.Sk(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!mp(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    op = function(a) {
        return Math.round(Number(Vm(a)))
    };
    pp = function(a) {
        var b = a.parentElement;
        return !b || 1 >= b.children.length ? !1 : _.z(Array, "from").call(Array, b.children).some(function(c) {
            return c !== a && !(_.H = ["script", "style"], _.z(_.H, "includes")).call(_.H, c.tagName.toLowerCase())
        })
    };
    rp = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.qp(a, c), a = a.parentElement
    };
    sp = function(a, b, c, d, e) {
        _.qp(a, {
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
        }, c(-b), _.qp(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.qp(a, f)), !0) : !1
    };
    up = function(a, b, c, d, e, f, g, h, k, l) {
        window.setTimeout(function() {
            var m = Dm(d);
            if (window.IntersectionObserver) {
                var n, p = null != (n = an(c, b)) ? n : Tm(c, b);
                m = tp(a, b, c, e, f, g, m, h, k, l, p);
                (new window.IntersectionObserver(m, {
                    threshold: .98
                })).observe(p)
            }
        }, 500)
    };
    tp = function(a, b, c, d, e, f, g, h, k, l, m) {
        var n = window.location && "#flexibleAdSlotTest" === window.location.hash ? 1 : _.Mf(vp);
        return Cl(a, 459, function(p, r) {
            (p = null == p ? void 0 : p[0]) && wp(a, b, c, d, e, f, g, h, k, l, r, m, p, n)
        })
    };
    wp = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        var v = p.boundingClientRect,
            w = p.intersectionRatio,
            x = window.innerWidth,
            B = v.left,
            C = v.right,
            F = 0 > B + 2,
            G = 0 < C - (x + 2);
        (.98 <= w || F || G) && xp(k, function(P) {
            m.unobserve(n);
            var R = F || G;
            var L = new yp;
            zp(n, R) && L.set(10);
            if (void 0 !== h && pp(n)) {
                var Z, qa = null == (Z = Tm(c, b)) ? void 0 : Z.parentElement,
                    wa;
                Z = qa ? null == (wa = Um(qa, window)) ? void 0 : wa.width : void 0;
                h !== Z && L.set(16)
            }
            R ? (L.set(8), R = Ap(L)) : R = Bp(b, c, w, L);
            wa = Cp(c, n, f);
            L = wa.ol;
            wa = wa.tl;
            Xo(P, a);
            Yo(P, "qid", l);
            Yo(P, "iu", c.getAdUnitPath());
            Yo(P, "e", String(R));
            F && Yo(P, "ofl", String(B));
            G && Yo(P, "ofr", String(C - x));
            Yo(P, "ret", e + "x" + f);
            Yo(P, "req", g);
            Yo(P, "bm", String(d));
            Yo(P, "efh", Number(L));
            Yo(P, "stk", Number(wa));
            Yo(P, "ifi", Dp(window))
        }, r)
    };
    Bp = function(a, b, c, d) {
        var e = an(b, a) || Tm(b, a);
        try {
            var f = e.getBoundingClientRect(),
                g = f.left,
                h = f.top,
                k = f.width,
                l = f.height,
                m = Tm(b, a),
                n = Um(m, window);
            if ("hidden" === n.visibility || "none" === n.display) return Ap(d);
            var p = op(n.getPropertyValue("border-top-width") || 0) + 1;
            b = g + k;
            f = h + l;
            c = (1 - c) * l;
            var r = a.elementsFromPoint(g + p + 2, h + c + p);
            var v = a.elementsFromPoint(b - p - 2, h + c + p);
            var w = a.elementsFromPoint(b - p - 2, f - c - p);
            var x = a.elementsFromPoint(g + p + 2, f - c - p);
            var B = a.elementsFromPoint(b / 2, f - c - p)
        } catch (F) {
            return d.set(1), Ap(d)
        }
        if (!(r && r.length && v && v.length && w && w.length && x && x.length && B && B.length)) return d.set(7), Ap(d);
        a = function(F, G) {
            for (var P = !1, R = 0; R < F.length; R++) {
                var L = F[R];
                if (P) {
                    var Z = Um(L, window);
                    if ("hidden" !== Z.visibility && !Ep(L) && !C(e, L)) {
                        d.set(G);
                        "absolute" === Z.position && d.set(11);
                        break
                    }
                } else e === L && (P = !0)
            }
        };
        Fp(e) && d.set(9);
        var C = function(F, G) {
            return Gp(F, G) || Gp(G, F)
        };
        g = r[0];
        e === g || C(e, g) || Ep(g) || d.set(2);
        g = v[0];
        e === g || C(e, g) || Ep(g) || d.set(3);
        g = w[0];
        e === g || C(e, g) || Ep(g) || d.set(4);
        g = x[0];
        e === g || C(e, g) || Ep(g) || d.set(5);
        if (Ep(e)) return Ap(d);
        a(r, 12);
        a(v, 13);
        a(w, 14);
        a(x, 15);
        a(B, 6);
        return Ap(d)
    };
    zp = function(a, b) {
        var c = !1,
            d = !1;
        return Hp(a, function(e, f) {
            d = d || "scroll" === e.overflowX || "auto" === e.overflowX;
            c = c || "flex" === e.display;
            return b && c && d || "listbox" === f.role
        })
    };
    Cp = function(a, b, c) {
        var d = (a = Tm(a)) && Um(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        Qj(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = Nj(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.z(l, "endsWith").call(l, "px") ? op(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.z(Lj, "includes").call(Lj, l) || (e = !1)
                }
            f || (k = Um(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            ol: e,
            tl: f
        }
    };
    Ep = function(a) {
        return Hp(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    Fp = function(a) {
        return Hp(a, function(b) {
            var c;
            return (_.H = ["left", "right"], _.z(_.H, "includes")).call(_.H, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    Ip = function(a, b, c, d) {
        var e = _.$f("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Jp = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    Lp = function(a, b, c) {
        var d = new _.u.Map;
        a = _.y(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var f = b[e.getDomId()];
            f = di(f, Kp, 28) ? _.vm(f, Kp, 28) : _.vm(c, Kp, 34);
            var g = void 0;
            d.set(e, (null == (g = f) ? 0 : null != Gn(g, 1)) ? _.Q(f, 1) ? 2 : 1 : 0)
        }
        return d
    };
    Op = function(a, b, c) {
        var d, e, f = [],
            g = [];
        a = _.y(a);
        for (d = a.next(); !d.done; d = a.next())
            if (d = d.value, 1 === b.get(d)) f.push(null), g.push(null);
            else {
                var h = c,
                    k = Tm(d);
                d = Mp((null == k ? void 0 : k.parentElement) && Um(k.parentElement, h) || null);
                if (!d || 1 === d[0] && 1 === d[3]) {
                    var l = e = d = void 0,
                        m = null != (l = null == k ? void 0 : k.parentElement) ? l : null;
                    l = null != (e = Nm(m)) ? e : new _.Mm(0, 0);
                    Np(l, m, h, 100);
                    e = null != (d = Nm(k)) ? d : new _.Mm(0, 0);
                    Np(e, k, h, 1); - 1 === l.height && (e.height = -1);
                    d = l;
                    d = d.width + "x" + d.height;
                    e = e.width + "x" + e.height
                } else e = d = "-1x-1";
                f.push(d);
                g.push(e)
            }
        return {
            Kl: f,
            Dm: g
        }
    };
    Np = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b || !Rj(b, c, d))) {
                a: {
                    do {
                        var f = Um(b, c);
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
    Qp = function(a, b, c) {
        var d = 0 !== (0, _.Pp)(),
            e = Bm(!0, c, d).width,
            f = [],
            g = [],
            h = [];
        if (null !== c && c != c.top) {
            var k = Bm(!1, c).width;
            (-12245933 === e || -12245933 === k || k < e) && h.push(8)
        } - 12245933 !== e && (1.5 * e < c.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * c.outerWidth < e && h.push(10));
        a = _.y(a);
        for (d = a.next(); !d.done; d = a.next())
            if (k = d.value, 1 === b.get(k)) f.push(null), g.push(null);
            else {
                d = new yp;
                var l = Tm(k);
                k = 0;
                var m = !1,
                    n = !1,
                    p = !1;
                if (l) {
                    for (var r = 0, v = l; v && 100 > r; r++, v = v.parentElement) {
                        var w = Um(v, c);
                        if (w) {
                            var x = w,
                                B = x.display,
                                C = x.overflowX;
                            if ("visible" !== x.overflowY && (d.set(2), (x = Nm(v)) && (k = k ? Math.min(k, x.width) : x.width), d.get(9))) break;
                            Jp(w) && d.set(9);
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
                f.push(Ap(d));
                g.push(k)
            }
        return {
            Tk: f,
            Il: g
        }
    };
    Rp = function(a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = _.y(e);
            g = a.next();
            for (f = {}; !g.done; f = {
                    Ug: void 0
                }, g = a.next()) {
                e = g.value;
                g = e.code;
                e = e.bids;
                var h = void 0;
                if (g && null != (h = e) && h.length && (g = Ph(g, b), f.Ug = g / 1E6, !(0 >= g))) {
                    h = void 0;
                    e = _.y(null != (h = e) ? h : []);
                    var k = e.next();
                    for (h = {}; !k.done; h = {
                            Vb: void 0,
                            vi: void 0
                        }, k = e.next()) k = k.value, h.vi = "function" === typeof k.getFloor ? k.getFloor : void 0, h.Vb = ii(gi(hi(new ei, 4), g), c), k.getFloor = function(l, m) {
                        return function(n) {
                            4 === _.gg(l.Vb, 1, 0) && hi(l.Vb, 1);
                            var p, r = null == (p = l.vi) ? void 0 : p.apply(this, [n]);
                            n = c ? r || {} : {
                                currency: "USD",
                                floor: m.Ug
                            };
                            return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === _.gg(l.Vb, 1, 0) && (n = gi(hi(l.Vb, 6), 1E6 * r.floor), li(n, 3, r.currency)), r) : (r.floor || 0) > m.Ug ? (1 === _.gg(l.Vb, 1, 0) && gi(hi(l.Vb, 5), 1E6 * r.floor), r) : n : n
                        }
                    }(h, f), d.set(k.getFloor, h.Vb)
                }
            }
        }
    };
    Sp = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return wo().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    Up = function(a, b) {
        return Tl(b, function() {
            return new Tp(a, b)
        })
    };
    Vp = function(a, b) {
        for (var c = new yp, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return Ap(c)
    };
    Xp = function(a, b) {
        return Wp(a, b)
    };
    Wp = function(a, b) {
        return a.map(function(c) {
            return b(c)
        })
    };
    $p = function(a, b, c) {
        var d = {
                bc: new Yp,
                oc: new Yp,
                nc: new Yp,
                mc: new Yp,
                Xc: new Yp,
                Lc: new Yp,
                tf: new Yp,
                uf: new Yp,
                Mf: new Yp
            },
            e = new ok;
        J(e, new Zp(a, b, c, window, d));
        xk(e);
        return {
            Ch: d,
            Ka: e
        }
    };
    bq = function(a, b, c, d, e, f, g) {
        if (f) {
            var h = {
                    kh: new Yp
                },
                k = new ok;
            a = new aq(a, b, c, d, e, f, g, h);
            J(k, a);
            xk(k);
            return {
                ak: h,
                Ka: k
            }
        }
    };
    dq = function(a, b, c, d, e) {
        if (b && !(.01 < Math.random())) {
            var f = new ok;
            J(f, new cq(a, c, d, e, b.bc));
            xk(f)
        }
    };
    fq = function(a, b) {
        var c;
        return !(null != (c = eq(b, 22)) ? !c : !_.Q(a, 15))
    };
    hq = function(a, b, c, d) {
        for (var e = _.y(_.z(Object, "entries").call(Object, gq)), f = e.next(); !f.done; f = e.next()) {
            var g = _.y(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && O(a, g(String(c), d))
        }
    };
    kq = function(a, b, c) {
        a.rm && a.Ra.hh(_.cj(_.z(Object, "assign").call(Object, {}, a, {
            Qb: a.Hl,
            payload: function() {
                var d = new _.dj;
                var e = iq(d, jq, 1);
                e = _.qi(e, 1, b);
                _.qi(e, 2, c);
                return d
            }
        })))
    };
    nq = function(a, b, c) {
        c = (c = void 0 === c ? null : c) ? ch(c) : null;
        b = void 0 === b ? !1 : b;
        var d = _.E(_.lq);
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
            e |= Ii(a, 2500, d);
            d || (e |= Ji(a));
            !b || c && mq(c) || (e |= 4194304)
        } catch (h) {
            e |= 32
        }
        return e
    };
    oq = function(a) {
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
    tq = function(a, b, c) {
        a = oq(a);
        if (!a) return null;
        if (10 === a) return 0;
        var d = 0;
        if (!(_.H = [11, 10], _.z(_.H, "includes")).call(_.H, a)) {
            d |= b !== b.top ? 512 : 0;
            var e = _.Cj(b);
            e = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && e.adCount ? 1 == a || 2 == a ? !(!e.adCount[1] && !e.adCount[2]) : (e = e.adCount[a]) ? 1 <= e : !1 : !1;
            e && (d |= 64);
            if (d) return d
        }
        if (2 === a || 1 === a) {
            var f = {
                pa: b,
                ff: _.pq,
                Fh: c ? a : void 0,
                Um: _.E(_.qq)
            };
            0 === (0, _.Pp)() && (f.ff = 3E3, f.Fg = 650);
            d |= _.Wi(f)
        } else if (8 === a) d |= nq(b);
        else if (3 === a || 4 === a) {
            var g = a;
            e = !_.E(rq);
            var h = _.E(sq);
            g = void 0 === g ? null : g;
            c = b !== b.top ? 512 : 0;
            Si(null == (f = b.navigator) ? void 0 : f.userAgent) && (c |= 1048576);
            f = b.innerWidth;
            1200 > f && (c |= 65536);
            var k = b.innerHeight;
            650 > k && (c |= 2097152);
            g && 0 === c && (g = 3 === g ? "left" : "right", (f = _.Jj({
                pa: b,
                Bi: e,
                lj: 1,
                position: g,
                ja: f,
                sa: k,
                wc: new _.u.Set,
                minWidth: 120,
                minHeight: 500,
                Cc: void 0 === h ? !1 : h
            })) ? _.Cj(b).sideRailPlasParam.set(g, f.width + "x" + f.height + "_" + String(g).charAt(0)) : c |= 16);
            d |= c
        } else 11 !== a && 42 !== a && (d |= 32);
        d || (b = _.Cj(b), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return d
    };
    wq = function(a, b, c, d) {
        var e = d.Xh,
            f = d.adUnitPath;
        d = void 0 === d.wb ? !1 : d.wb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && uq(e)) ? vq(a, b, f, c, {
            Ub: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            wb: d
        }) : (b.error(Wl("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    uq = function(a) {
        switch (a) {
            case 6:
                return !0;
            case 7:
                return !0;
            default:
                return !!mp(fn, function(b) {
                    return b === a
                })
        }
    };
    vq = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            Ub: e.Ub,
            format: f,
            wb: e.wb
        });
        a = b.slotId;
        b = b.Fa;
        a && b && (_.ai(b, 15, f), _.kp(a, function() {
            var g = window,
                h = oq(f);
            if (h) {
                g = _.Cj(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    xq = function(a, b) {
        var c;
        return !(null != (c = eq(a, 11)) ? !c : !_.Q(b, 10))
    };
    yq = function(a, b, c, d) {
        if (a = Tm(a, b)) {
            var e;
            if (c = null != (e = eq(c, 24)) ? e : _.Q(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Bq = function(a, b) {
        var c = b.L,
            d = b.O;
        b = b.aa;
        a = _.y(a.X);
        for (var e = a.next(); !e.done; e = a.next())
            if (e = e.value, _.zq(c, e)) {
                var f = d,
                    g = f.ba;
                f = f.T[e.getDomId()];
                xq(f, g) && yq(e, b, f, g);
                Aq(c, e);
                var h = void 0,
                    k = void 0;
                null != (h = null != (k = eq(f, 10)) ? k : _.Q(g, 11)) && h && yq(e, b, f, g)
            }
        return {}
    };
    Dq = function(a, b, c) {
        var d = new ok;
        a = new Cq(a, b, c);
        J(d, a);
        xk(d)
    };
    Fq = function(a, b) {
        var c, d, e, f, g;
        return _.rb(function(h) {
            c = a;
            d = c.gd;
            e = b;
            f = e.ng;
            return (null != (g = d) ? g : f.gd()) ? h.return(Eq(f)) : h.return(null)
        })
    };
    Jq = function(a, b, c) {
        var d = window,
            e = new ok;
        d = new Gq(d);
        _.S(e, d);
        a = new Hq(a, d, c, _.um(150));
        J(e, a);
        b = new Iq(879, Fq, {
            gd: b ? a.Fc : void 0
        }, {
            ng: d,
            wo: !!b
        }, void 0, e.C.g);
        b = J(e, b).output;
        xk(e);
        return {
            Fc: a.Fc,
            og: b,
            Ka: e
        }
    };
    Kq = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Eh: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Eh: a.length - b.length + 8
        }
    };
    Lq = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Mq = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Lq(a, b)
    };
    Nq = function(a) {
        var b, c;
        return null != (c = null == (b = _.z(a, "find").call(a, function(d) {
            return "page_url" === dk(d, 1)
        })) ? void 0 : km(b)[0]) ? c : null
    };
    Oq = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Pq = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        ml(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    Qq = function(a, b) {
        var c = b.T;
        return !!Nq(b.ba.Pa()) || a.some(function(d) {
            return null !== Nq(c[d.getDomId()].Pa())
        })
    };
    Sq = function() {
        var a = void 0 === a ? window : a;
        Rq = _.Wf(a)
    };
    Tq = function(a, b) {
        var c = _.$f("DIV");
        c.id = a;
        c.textContent = b;
        _.qp(c, {
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
    Uq = function(a, b) {
        if ("undefined" !== typeof IntersectionObserver) return new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    Xq = function(a, b, c, d, e) {
        var f = void 0 === f ? _.u.globalThis.IntersectionObserver : f;
        if (!b) return {
            yg: e
        };
        var g = null != Ci(b, 1) ? null != Vq(b) && 0 !== (0, _.Pp)() ? Ci(b, 1) * Vq(b) : Ci(b, 1) : null;
        if (null == g) return {
            yg: e
        };
        b = new ok;
        a = new Wq(a, d, c, g, e, f);
        J(b, a);
        xk(b);
        return {
            yg: a.output,
            xl: b
        }
    };
    gr = function(a, b, c, d, e) {
        var f = window,
            g = new ok,
            h = J(g, new Yq(a, b, Zq, function(m) {
                return $q("i-adframe-load", m.detail.data)
            })),
            k = J(g, new Yq(a, b, Zq, function(m) {
                return $q("i-dismiss", m.detail.data)
            }));
        h = 0 < _.Mf(ar) ? J(g, new br(a, h.output, void 0)).output : h.output;
        h = J(g, new cr(a, b, c, h));
        J(g, new dr(a, f, d, e, h.output));
        if (f.top === f) var l = J(g, new er(a, f, h.output)).output;
        J(g, new fr(a, b, c, h.output, k.output, l));
        return g
    };
    $q = function(a, b) {
        try {
            var c = JSON.parse(b);
            return "sth" === c.googMsgType && c.msg_type === a
        } catch (d) {}
        return !1
    };
    lr = function() {
        var a = {};
        return a[576944485] = new hr, a[578856259] = new ir(function() {
            return _.Mf(jr)
        }), a[607368714] = new kr, a
    };
    mr = function(a, b) {
        a.V.log(576944485, _.cj, _.z(Object, "assign").call(Object, {}, a, b))
    };
    nr = function(a) {
        return window.IntersectionObserver && new IntersectionObserver(a, {
            threshold: [.5]
        })
    };
    pr = function(a) {
        return (_.H = [4, 5, 7, 1], _.z(_.H, "includes")).call(_.H, or(a))
    };
    rr = function(a, b, c) {
        return new qr(c, a, Zq, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    tr = function(a) {
        var b = {
            paw_id: sr(),
            gpa: 0
        };
        a.postMessage(JSON.stringify(b))
    };
    wr = function(a, b, c) {
        if (_.z(Object, "keys").call(Object, a).some(function(d) {
                return (_.H = _.z(Object, "values").call(Object, ur), _.z(_.H, "includes")).call(_.H, Number(d))
            })) return !0;
        vr("taxonomies", a, b, c);
        return !1
    };
    zr = function(a, b, c, d, e) {
        if (null == a) vr("taxonomy", a, d, e);
        else {
            var f = Number(a);
            (_.H = _.z(Object, "values").call(Object, hn), _.z(_.H, "includes")).call(_.H, Number(f)) ? a = !0 : (vr("taxonomy", a, d, e), a = !1);
            a && (null == b ? vr("taxonomyData", b, d, e) : xr(b, d, e) && yr(f, b, c, d))
        }
    };
    Ir = function(a, b, c, d, e) {
        if (!Ar(a)) vr("taxonomy", a, d, e);
        else if (null == b) vr("taxonomyData", b, d, e);
        else if (xr(b, d, e) && Br(_.z(b, "values"), d, b) && (b = Cr(a, _.z(b, "values"), d, b), b.size)) {
            b = [].concat(_.ri(b));
            e = new Dr;
            var f = Er.get(a);
            e = _.qi(e, 3, f);
            Fr(c, Gr(e, b));
            d.info(Hr(En(b), En(a)))
        }
    };
    xr = function(a, b, c) {
        if (Sg(a) && a.hasOwnProperty("values")) return !0;
        vr("taxonomyData", a, b, c);
        return !1
    };
    yr = function(a, b, c, d) {
        if (Br(_.z(b, "values"), d, b)) {
            var e = Cr(a, _.z(b, "values"), d, b);
            e.size && (b = (_.H = _.bk(c, Dr, 1), _.z(_.H, "find")).call(_.H, function(f) {
                return _.gg(f, 1, 0) === a
            }), e = [].concat(_.ri(e)), b ? Gr(b, e) : Fr(c, Gr(Jr(new Dr, a), e)), d.info(Hr(En(e), En(a))))
        }
    };
    Br = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        vr("taxonomyData.values", a, b, c);
        return !1
    };
    Cr = function(a, b, c, d) {
        if (!Xg()(b)) return vr("taxonomyData.values", b, c, d), new _.u.Set;
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
        e && O(c, Kr(En(a), En(10)));
        return d
    };
    vr = function(a, b, c, d) {
        O(c, Dn("googletag.setConfig.pps", En(d), a, En(b)))
    };
    Ar = function(a) {
        return Er.has(a)
    };
    Mr = function(a) {
        return Lr.has(a)
    };
    Qr = function(a, b) {
        if (3 === _.Nr(b)) {
            var c = {
                    de: new Or
                },
                d = new ok;
            J(d, new Pr(a, b, c.de));
            xk(d);
            return {
                Ka: d,
                Ul: c
            }
        }
    };
    Sr = function(a, b, c, d, e, f) {
        if (b) {
            var g = {
                    Vg: new Yp
                },
                h = new ok;
            J(h, new Rr(a, b, c, g, d, e, f));
            xk(h);
            return {
                Ka: h,
                vf: g
            }
        }
    };
    Ur = function(a) {
        Tr = a
    };
    Wr = function(a, b, c, d) {
        Ek(b, d, function(e, f) {
            Gl(a, e, f);
            var g, h;
            null == (h = (g = window.console).error) || h.call(g, f)
        }, function() {
            return void O(c, Vr())
        })
    };
    Zr = function(a, b, c) {
        if (!_.E(Xr) && !Xn()) {
            var d = {
                    Jg: new Yp,
                    xb: new Yp
                },
                e = new ok;
            J(e, new Yr(a, b, c, d));
            xk(e);
            return {
                xd: d,
                Ka: e
            }
        }
    };
    as = function(a, b, c, d, e) {
        var f = new ok;
        a = new $r(a, b, c, d, e);
        J(f, a);
        xk(f);
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
    bs = function(a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.z(a, "includes").call(a, 0)
    };
    cs = function(a) {
        if (bs(a)) return {
            size: [],
            ah: !0
        };
        if (Array.isArray(a) && 0 < a.length && "number" !== typeof a[0]) {
            var b = !1;
            a = a.filter(function(c) {
                c = bs(c);
                b = b || c;
                return !c
            });
            return {
                size: a,
                ah: b
            }
        }
        return {
            size: a,
            ah: !1
        }
    };
    es = function(a, b) {
        var c = b.T;
        return Xp(a, function(d) {
            return ds(c[d.getDomId()]).join("&")
        })
    };
    ds = function(a) {
        a = fs(a);
        var b = [];
        _.Cn(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    fs = function(a) {
        for (var b = {}, c = _.y(dm(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.I(d, 1)] = km(d);
        a = ni(a, 8, 2);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    gs = function(a) {
        var b = !1,
            c = _.bk(a, gm, 2).map(function(d) {
                var e = _.I(d, 1);
                b = "excl_cat" === e;
                d = km(d);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = ni(a, 3, 2);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    is = function(a, b, c) {
        var d = window,
            e = !mh(d.isSecureContext, d.document);
        if (nh(d.isSecureContext, d, d.document) || !e) return e = new ok, a = new hs(a, d, b, c), J(e, a), xk(e), a.j
    };
    ks = function(a, b, c, d, e) {
        if (c) {
            var f = {
                    re: new Yp,
                    se: new Yp,
                    Cd: new Yp
                },
                g = new ok;
            J(g, new js(a, b, c, d, f, e));
            xk(g);
            return {
                Ka: g,
                Km: f
            }
        }
    };
    ls = function(a) {
        return "gads_privacy_sandbox_td_buyerlist__" + a
    };
    ns = function(a, b) {
        return a.filter(function(c) {
            return ms(c, 2) > b
        })
    };
    ps = function(a, b) {
        a = new _.u.Map(a.map(function(e) {
            return [_.I(e, 1), e]
        }));
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.get(_.I(c, 1));
            d ? os(d, Math.max(ms(c, 2), ms(d, 2))) : a.set(_.I(c, 1), c)
        }
        return _.z(Array, "from").call(Array, _.z(a, "values").call(a))
    };
    ts = function(a, b, c, d) {
        if (qs(b, c, d)) return new _.u.Map;
        c = new _.u.Map(_.z(Object, "entries").call(Object, b).filter(function(k) {
            var l = _.y(k);
            k = l.next().value;
            l = l.next().value;
            return _.z(k, "startsWith").call(k, "gads_privacy_sandbox_td_buyerlist__") && l
        }).map(function(k) {
            var l = _.y(k);
            k = l.next().value;
            l = l.next().value;
            return [k, rs(l)]
        }));
        d = _.y(c);
        for (var e = d.next(); !e.done; e = d.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            f = f.next().value;
            var g = _.bk(f, ss, 1),
                h = ns(g, a);
            0 === h.length ? (c.delete(e), b.removeItem(e)) : h.length < g.length && (_.pm(f, 1, h), b.setItem(e, cl(f)))
        }
        return c
    };
    qs = function(a, b, c) {
        if (!_.Q(b, 3)) return !1;
        b = String(_.ph(c + "-" + _.I(b, 2) + _.I(b, 4) + _.Q(b, 3)));
        if (a.getItem("gads_privacy_sandbox_tcf_hash") === b) return !1;
        c = _.y(_.z(Object, "keys").call(Object, a).filter(function(e) {
            return _.z(e, "startsWith").call(e, "gads_privacy_sandbox_td_buyerlist__")
        }));
        for (var d = c.next(); !d.done; d = c.next()) a.removeItem(d.value);
        a.setItem("gads_privacy_sandbox_tcf_hash", b);
        return !0
    };
    us = function(a) {
        return null !== a && _.z(Number, "isFinite").call(Number, a) && 0 <= a
    };
    vs = function(a) {
        return (_.H = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"], _.z(_.H, "includes")).call(_.H, a)
    };
    xs = function(a, b, c, d, e) {
        if (b) {
            var f = b.Zb,
                g = b.gm;
            if (b.nh && 4 === f) {
                b = new Yp;
                f = new Yp;
                if (!g) return b.G({
                    kind: 1,
                    reason: 1
                }), f.G(!1), {
                    vj: {
                        dj: b,
                        ti: f
                    }
                };
                g = new ok;
                a = new ws(a, c, d, e, b, f);
                J(g, a);
                xk(g);
                return {
                    vj: {
                        dj: b,
                        ti: f
                    },
                    Qm: g
                }
            }
        }
    };
    zs = function(a) {
        var b = a.Xf,
            c = a.Hb,
            d = void 0 === a.Ih ? [] : a.Ih,
            e = a.interestGroupBuyers,
            f = a.cl,
            g = a.po;
        a = a.Zl;
        var h = _.Mf(ys),
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
            componentAuctions: [e].concat(_.ri(d)),
            resolveToConfig: b.resolveToConfig.promise
        };
        c.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        return c
    };
    As = function(a, b) {
        var c = b.Xf;
        c.topLevelSellerSignals.resolve(a.sellerSignals);
        c.directFromSellerSignals.resolve(a.directFromSellerSignals);
        c.directFromSellerSignalsHeaderAdSlot.resolve(a.directFromSellerSignalsHeaderAdSlot);
        c.resolveToConfig.resolve(!!a.resolveToConfig);
        var d;
        a = null == (d = a.componentAuctions) ? void 0 : _.z(d, "find").call(d, function(m) {
            return vs(m.seller)
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
    Cs = function(a, b) {
        if (_.E(Bs) && !us(b)) return [];
        var c = Math.round(b);
        return a.map(function(d) {
            var e = new ss;
            d = _.bj(e, 1, d);
            return os(d, c)
        })
    };
    Es = function(a, b, c) {
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
        Ds(d)
    };
    Fs = function(a, b, c, d, e) {
        a.Nb.G(e);
        a.Ga.G(c);
        a.Ja.G(d);
        null == b || b.G(!1)
    };
    Ns = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n, p, r, v, w;
        return _.rb(function(x) {
            if (1 == x.g) return ("string" !== typeof a || _.z(a, "startsWith").call(a, "urn:")) && Gs.deprecatedURNToURL && Gs.deprecatedReplaceInURN ? x.yield(Gs.deprecatedURNToURL(a), 2) : x.return();
            c = x.A;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Hs)) ? f : []).forEach(function(B) {
                d[B] = e
            });
            g = b.Zk || "";
            (null != (h = c.match(Is)) ? h : []).forEach(function(B) {
                d[B] = g
            });
            k = b.Wj || "";
            (null != (l = c.match(Js)) ? l : []).forEach(function(B) {
                d[B] = k
            });
            m = b.Sj || "";
            (null != (n = c.match(Ks)) ? n : []).forEach(function(B) {
                d[B] = m
            });
            p = b.Qj || "";
            (null != (r = c.match(Ls)) ? r : []).forEach(function(B) {
                d[B] = p
            });
            v = b.im || "";
            (null != (w = c.match(Ms)) ? w : []).forEach(function(B) {
                d[B] = v
            });
            return x.yield(Gs.deprecatedReplaceInURN(a, d), 0)
        })
    };
    Os = function(a) {
        return "function" === typeof FencedFrameConfig && a instanceof FencedFrameConfig
    };
    Ss = function(a) {
        var b = a.Yj,
            c = a.Hk,
            d = a.ll ? 4 : 3 === b ? 3 : 2 === b ? 1 : 1 === b ? 2 : 0,
            e = a.dm;
        b = a.dl;
        a = a.Qb;
        var f = new Ps;
        d = _.K(f, 3, d);
        e = _.bj(d, 2, e);
        c = _.vl(e, 1, c);
        void 0 !== b && _.bj(c, 4, b);
        b = new Qs;
        void 0 !== a && _.vl(b, 1, a);
        _.hj(b, 3, Rs, c);
        return b
    };
    Ts = function(a, b, c, d, e, f, g, h) {
        var k = 3 === b,
            l = 2 === b,
            m = 1 === b,
            n = f.getEscapedQemQueryId(),
            p = _.I(f, 6);
        xp("run_ad_auction_stats", function(r) {
            Xo(r, a);
            Yo(r, "duration_ms", c);
            Yo(r, "applied_timeout_ms", d);
            Yo(r, "timed_out", l ? 1 : 0);
            Yo(r, "error", k ? 1 : 0);
            Yo(r, "auction_skipped", m ? 1 : 0);
            Yo(r, "auction_winner", h ? 1 : 0);
            Yo(r, "thread_release_only", _.Q(f, 15) ? 1 : 0);
            Yo(r, "winner_qid", null != n ? n : "");
            Yo(r, "xfpQid", null != p ? p : "");
            Yo(r, "publisher_tag", "gpt");
            e && Yo(r, "parallel", "1");
            0 < g && Yo(r, "nc", g)
        }, 1)
    };
    Us = function(a, b, c, d, e) {
        var f = e.getEscapedQemQueryId(),
            g = _.I(e, 6);
        xp("run_ad_auction_complete", function(h) {
            Xo(h, a);
            Yo(h, "duration_ms", Math.round(d));
            Yo(h, "applied_timeout_ms", c);
            Yo(h, "auction_has_winner", b);
            f && Yo(h, "winner_qid", f);
            g && Yo(h, "xfpQid", g)
        }, 1)
    };
    Vs = function(a, b) {
        var c = b.getEscapedQemQueryId(),
            d = _.I(b, 6);
        xp("pre_run_ad_auction_ping", function(e) {
            Xo(e, a);
            Yo(e, "winner_qid", null != c ? c : "");
            Yo(e, "xfpQid", null != d ? d : "");
            Yo(e, "publisher_tag", "gpt")
        }, 1)
    };
    at = function(a, b, c, d) {
        var e = Tm(a, document);
        e && Pi(e, window, d, !0);
        Ws(_.Kf(El), "5", Xs(c.T[a.getDomId()], 20));
        Ys(a, Zs, 801, {
            Rh: null,
            isBackfill: !1
        });
        if (_.zq(b, a) && !an(a, document)) {
            b = c.ba;
            c = c.T[a.getDomId()];
            var f;
            (null != (f = eq(c, 10)) ? f : _.Q(b, 11)) && yq(a, document, c, b)
        }
        Ys(a, $s, 825, {
            isEmpty: !0
        })
    };
    ct = function(a) {
        if (!_.E(bt)) return null;
        var b = new _.u.Set;
        a = _.y(_.z(a, "values").call(a));
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, _.Q(c, 2) && _.bk(c, ss, 1).forEach(function(d) {
            b.add(_.I(d, 1))
        });
        return 0 < b.size ? _.z(Array, "from").call(Array, b) : null
    };
    et = function(a, b, c, d, e, f, g, h, k) {
        if (b) {
            var l = b.Zb;
            if (b.nh && 0 !== l) return b = new ok, a = new dt(a, l, c, d, e, f, g, h, k), J(b, a), xk(b), {
                Pm: a.j,
                Om: b
            }
        }
    };
    ft = function() {
        for (var a = _.y(_.z(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            d && (_.Fa(d, "/tag/js/gpt.js") || _.Fa(d, "/tag/js/gpt_mobile.js")) && !c.googletag_executed && b.textContent && (c.googletag_executed = !0, c = document.createElement("script"), b = bb(b.textContent), nb(c, b), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    gt = function(a, b) {
        b = _.y(_.z(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.y(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    kt = function(a, b, c) {
        var d = [];
        c = [].concat(_.ri(c.X)).slice();
        if (b) {
            if (!Array.isArray(b)) return O(a, Wl("googletag.destroySlots", [b])), !1;
            la(b);
            d = c.filter(function(e) {
                return _.z(b, "includes").call(b, e.g)
            })
        } else d = c;
        if (!d.length) return !1;
        ht(d);
        jt(d);
        return !0
    };
    zt = function(a, b, c, d, e, f, g, h, k, l) {
        var m = wo(),
            n, p, r = M(a, 74, function(w, x, B) {
                return e.defineSlot(a, b, w, x, B)
            }),
            v = {};
        r = (v._loaded_ = !0, v.cmd = [], v._vars_ = m._vars_, v.evalScripts = function() {
            try {
                ft()
            } catch (B) {
                Gl(a, 297, B);
                var w, x;
                null == (w = window.console) || null == (x = w.error) || x.call(w, B)
            }
        }, v.display = M(a, 95, function(w) {
            lt(c, w, e)
        }), v.defineOutOfPageSlot = M(a, 73, function(w, x) {
            return (w = wq(a, b, e, {
                Xh: x,
                adUnitPath: w
            })) ? w.g : null
        }), v.getVersion = M(a, 946, function() {
            return a.Hc ? String(a.Hc) : a.Bb
        }), v.pubads = M(a, 947, function() {
            return go(a, b, c, e, h)
        }), v.companionAds = M(a, 816, function() {
            null != n || (n = new mt(a, b, c, f));
            return Zl(a, b, n)
        }), v.content = M(a, 817, function() {
            null != p || (p = new nt(a, b, g));
            return am(a, b, p)
        }), v.setAdIframeTitle = M(a, 729, Ur), v.getEventLog = M(a, 945, function() {
            return new ot(a, b)
        }), v.sizeMapping = M(a, 90, function() {
            return new pt(a, b)
        }), v.enableServices = M(a, 91, function() {
            for (var w = _.y(qt), x = w.next(); !x.done; x = w.next()) x = x.value, x.enabled && b.info(rt()), st(x)
        }), v.destroySlots = M(a, 75, function(w) {
            return kt(b, w, e)
        }), v.enums = jn(), v.defineSlot = r, v.defineUnit = r, v.getWindowsThatCanCommunicateWithHostpageLibrary = M(a, 955, function(w) {
            return tt(k, w).map(function(x) {
                var B;
                return null == (B = an(x, document)) ? void 0 : B.contentWindow
            }).filter(function(x) {
                return !!x
            })
        }), v.disablePublisherConsole = M(a, 93, dp), v.onPubConsoleJsLoad = M(a, 731, gp), v.openConsole = M(a, 732, function(w) {
            Zo = !0;
            var x;
            (null == (x = wo()) ? 0 : x.console) ? wo().console.openConsole(w): (w && (fp = w), ep = !0, To(a))
        }), v.setConfig = M(a, 1034, function(w) {
            if (Sg(w)) {
                if (_.z(Object, "hasOwn").call(Object, w, "pps")) {
                    var x = w.pps;
                    if (null === x) {
                        var B = ut(d, vt, 33);
                        _.ik(B, 2)
                    } else {
                        B = ut(ut(d, vt, 33), wt, 2);
                        _.ik(B, 1);
                        if (Sg(x) && x.hasOwnProperty("taxonomies")) var C = !0;
                        else O(b, Wl("googletag.setConfig.pps", [x])), C = !1;
                        if (C)
                            if (C = x.taxonomies, Sg(C) && null !== C) {
                                var F;
                                _.z(Object, "keys").call(Object, C).some(Ar) ? F = Ir : wr(C, b, x) && (F = zr);
                                if (F) {
                                    x = _.y(_.z(Object, "entries").call(Object, C));
                                    for (var G = x.next(); !G.done; G = x.next()) {
                                        var P = _.y(G.value);
                                        G = P.next().value;
                                        P = P.next().value;
                                        F(G, P, B, b, C)
                                    }
                                }
                            } else vr("taxonomies", C, b, x)
                    }
                }
                _.z(Object, "hasOwn").call(Object, w, "adExpansion") && (_.ik(d, 34), B = w.adExpansion, null !== B && Sg(B) && _.z(Object, "hasOwn").call(Object, B, "enabled") && (B = B.enabled, yo(B) && (B = zo(B), _.ci(d, 34, B))));
                if (_.z(Object, "hasOwn").call(Object, w, "privacyTreatments")) {
                    w = w.privacyTreatments;
                    _.ik(d, 36);
                    a: {
                        if (null !== w && Sg(w) && _.z(Object, "hasOwn").call(Object, w, "treatments")) {
                            w = w.treatments;
                            if (xt(w) && w.every(Mr)) {
                                w = {
                                    treatments: w
                                };
                                break a
                            }
                            O(b, Wl("googletag.setConfig", [w]))
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
                            void 0 === C ? O(b, Wl("googletag.setConfig", [F])) : w.add(C)
                        }
                        if (w.size) {
                            B = new yt;
                            F = B.F;
                            C = xc(F);
                            zc(ge(B.F));
                            F = qe(F, C, 1, !1);
                            C = xc(F);
                            C = !!(4 & C) && !!(4096 & C);
                            if (Array.isArray(w))
                                for (x = 0; x < w.length; x++) F.push(Oc(w[x], C));
                            else
                                for (w = _.y(w), x = w.next(); !x.done; x = w.next()) F.push(Oc(x.value, C));
                            _.ci(d, 36, B)
                        }
                    }
                }
            } else O(b, Wl("googletag.setConfig", [w]))
        }), v.apiReady = !0, v);
        Wr(a, m, b, l);
        gt(m, r)
    };
    Ct = function(a, b) {
        var c = new ok;
        b = new At(a, b);
        J(c, b);
        a = new Bt(a, b.j);
        J(c, a);
        xk(c);
        return {
            Wc: a.Wc,
            fd: a.fd,
            bd: a.bd,
            Mb: a.Mb,
            vd: a.vd,
            zd: a.zd,
            kc: a.kc,
            Lb: a.Lb,
            Tl: c
        }
    };
    cu = function(a, b, c, d, e, f, g, h, k) {
        var l = window,
            m = bn(),
            n = new ok,
            p = new Dt(a, l);
        p = J(n, p).output;
        var r = new ok;
        var v = new Kt(a, l);
        J(r, v);
        xk(r);
        r = {
            Pl: v.o
        };
        _.E(Lt) && J(n, new Mt(a, l));
        if (Ka()) {
            v = {
                Xi: new Yp
            };
            var w = new ok;
            J(w, new Nt(a, window, v.Xi));
            xk(w)
        } else v = void 0;
        var x = _.E(Ot);
        w = l.navigator;
        l = lh(l.isSecureContext, l.navigator, l.document);
        l = !x && l;
        x = _.Mf(Pt);
        var B = !!w.getInterestGroupAdAuctionData;
        w = _.E(Qt) && !!w.createAuctionNonce;
        l = {
            nh: l,
            Zb: x,
            gm: B,
            Uj: w
        };
        if (e)
            if (_.E(Rt)) {
                var C = Ct(a, e);
                B = C.vd;
                x = C.bd;
                w = C.fd;
                var F = C.Wc;
                var G = C.Mb,
                    P = C.zd,
                    R = C.kc;
                C = C.Lb;
                var L, Z = new St(a, document, wo(), b, m, c, null != (L = window.location.hash) ? L : "");
                J(n, Z);
                b = new Tt(a, wo(), null, b, m, c, B);
                J(n, b);
                m = new Ut(a, x);
                J(n, m);
                h = new Vt(a, window, w, h);
                J(n, h);
                if (f = $p(a, f, F)) var qa = f.Ch;
                e = Jq(a, e, h.j);
                L = e.Fc;
                F = e.og;
                _.S(n, e.Ka);
                e = new Wt(a, F);
                J(n, e);
                f = new Xt(a, F);
                J(n, f);
                c = No(a, c, d, window, L, F, 2).kb;
                if (_.E(Yt)) {
                    L = new Zt(a, window.navigator, c);
                    var wa = L.j;
                    J(n, L)
                }
                L = void 0;
                _.E($t) && (d = new au(a, d, window, c), L = d.output, J(n, d));
                if (d = Zr(a, G, c)) var aa = d.xd;
                d = is(a, p, c);
                as(a, g, k, c, P);
                F = {
                    Md: qa,
                    xd: aa,
                    Qi: h.j,
                    Jh: m.output,
                    Cb: b.Cb,
                    Mb: G,
                    cd: e.cd,
                    ei: f.j,
                    kc: R,
                    te: d,
                    lg: L,
                    Oh: wa,
                    Lb: C
                }
            } else {
                a = new bu(a, b, m, c, d, e, f, g);
                g = new ok;
                _.S(a, g);
                m = Ct(a.context, a.g);
                c = m.vd;
                e = m.bd;
                b = m.fd;
                f = m.Wc;
                qa = m.Mb;
                wa = m.zd;
                aa = m.kc;
                d = m.Lb;
                _.S(a, m.Tl);
                m = new St(a.context, document, wo(), a.j, a.l, a.R, null != (C = window.location.hash) ? C : "");
                J(g, m);
                c = new Tt(a.context, wo(), null, a.j, a.l, a.R, c);
                J(g, c);
                e = new Ut(a.context, e);
                J(g, e);
                h = new Vt(a.context, window, b, h);
                J(g, h);
                if (f = $p(a.context, a.fb, f)) G = f.Ch, _.S(a, f.Ka);
                f = Jq(a.context, a.g, h.j);
                b = f.Fc;
                m = f.og;
                _.S(g, f.Ka);
                f = new Wt(a.context, m);
                J(g, f);
                C = new Xt(a.context, m);
                J(g, C);
                m = No(a.context, a.R, a.L, window, b, m, 2);
                b = m.kb;
                _.S(a, m.Ka);
                _.E(Yt) && (m = new Zt(a.context, window.navigator, b), P = m.j, J(g, m));
                m = void 0;
                _.E($t) && (L = new au(a.context, a.L, window, b), m = L.output, J(g, L));
                if (L = Zr(a.context, qa, b)) R = L.xd, _.S(a, L.Ka);
                L = is(a.context, p, b);
                _.S(a, as(a.context, a.D, k, b, wa));
                xk(g);
                F = {
                    Md: G,
                    xd: R,
                    Qi: h.j,
                    Jh: e.output,
                    Cb: c.Cb,
                    Mb: qa,
                    cd: f.cd,
                    ei: C.j,
                    kc: aa,
                    te: L,
                    lg: m,
                    Oh: P,
                    Lb: d
                }
            }
        xk(n);
        return {
            Ol: r,
            Yl: v,
            Vf: p,
            Nm: l,
            He: {
                nd: new _.u.Set
            },
            Jb: F
        }
    };
    du = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver && new IntersectionObserver(a, b)
    };
    Tu = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F) {
        var G = new ok,
            P = Bm(!0, window),
            R = k.ba,
            L = k.T[e.getDomId()],
            Z = C.Vf,
            qa = C.He.nd,
            wa, aa = null == (wa = C.Jb) ? void 0 : wa.te,
            ia = new eu(a, window);
        J(G, ia);
        var wb = m.height,
            Ua = m.width,
            db = m.sb,
            Ab = m.Na,
            Ra = m.Id,
            Ib = m.isBackfill,
            jd = m.Gb,
            cc = m.Yk,
            $b = m.eb,
            Fc = m.Nf,
            jc = m.rh,
            dc = m.wg,
            Id = m.Sb,
            Pc = m.Ze,
            nf = m.Kb,
            we = m.Sa,
            Jd = m.na,
            og = m.Wg,
            pg = m.pk,
            of = m.Qf,
            Qc = new Yp;
        Qc.G(p);
        var Kd = new fu(a, window.top, Qc);
        J(G, Kd);
        var xe = new gu(a, or(L), P.height, $b, wb);
        J(G, xe);
        var Wa = new hu(a, e, Tm(e, n), e.getDomId(), $m(e), n.documentElement, or(L), h, f);
        iu(G, Wa);
        var Qb = Wa.output,
            pf = new ju(a, we, Ra, Ib, jd);
        J(G, pf);
        var qg = new ku(a, _.vm(R, lu, 5), L, d);
        J(G, qg);
        var Ah = new mu(a, window.location.hash, P, e.getAdUnitPath(), L, f, xe.output, Fc, Ua, wb, pf.output, Qb);
        iu(G, Ah);
        var Ld = Ah.J,
            Md = new nu(a, R, L, Ra, jd, Ld.af);
        J(G, Md);
        var mj = Kd.output,
            nj = Ld.Ga,
            oj = Ld.Ja;
        if (lh(window.isSecureContext, window.navigator, window.document) && !_.E(Ot) && g) {
            var Bh = {
                    Mc: new Or,
                    Ga: new Yp,
                    Ja: new Yp,
                    jd: new Yp
                },
                qf = new ok;
            J(qf, new ou(a, e, mj, L, h, p, f, nj, oj, Qb, r, k, B, Ab, Jd, Bh, v, F));
            xk(qf);
            var Ch = {
                Ka: qf,
                Rm: Bh
            }
        } else Ch = void 0;
        var rg = Ch;
        if (rg) {
            _.S(G, rg.Ka);
            var rf = rg.Rm
        }
        var Dh, Eh, Fh = null != (Eh = null == (Dh = rf) ? void 0 : Dh.Ga) ? Eh : Ld.Ga,
            Gh, Hh, Gc = null != (Hh = null == (Gh = rf) ? void 0 : Gh.Ja) ? Hh : Ld.Ja,
            sg, Rc = null == (sg = rf) ? void 0 : sg.Mc,
            tg, kd = null == (tg = rf) ? void 0 : tg.jd,
            Sc = new pu(a, e, R, L, or(L), n, h, Qb, Md.output, Gc, db, Rc);
        J(G, Sc);
        var ug = new qu(a, Sc.output);
        J(G, ug);
        var vg = new ru(a, e, P, h, ug.output, qg.j, Rc);
        J(G, vg);
        var wg = new su(a, vg.output, Sc.output, qg.j, Rc);
        J(G, wg);
        var ye = new tu(a, window, P, e, L, Qb, Sc.output, db, Gc, Ld.Be, Ab);
        iu(G, ye);
        var xg = new uu(a, R, L, jc, Fh, Md.output);
        J(G, xg);
        var sf = new vu(a, window, nf, ia.output, Rc);
        J(G, sf);
        var ze = new wu(a, or(L), n);
        J(G, ze);
        var pc = new xu(a, x, or(L), $b, cc, Rc);
        J(G, pc);
        var Ae = new yu(a, dc, kd, Qc, Rc);
        J(G, Ae);
        var pj = window;
        if (_.E(Yk) && aa) {
            var Be = new ok;
            J(Be, new zu(a, pj, of , aa));
            xk(Be);
            var yg = Be
        } else yg = void 0;
        var ld = yg;
        ld && _.S(G, ld);
        var Rb = new Au(a, e, h, k, w, l, db, Ab, Ib, Id, Jd, window, Fh, Md.output, wg.output, Qb, Sc.output, Gc, xg.output, ye.Mc, sf.output, ze.output, pc.output, Z, Rc);
        J(G, Rb);
        var Ih = new Bu(a, window, e, Rb.o, Qc);
        J(G, Ih);
        var Nd = or(L);
        switch (Nd) {
            case 2:
            case 3:
                _.E(Cu) ? J(G, new Du(a, h, or(L), e, window, $b, Rb.j, Qb, pc.output, Gc)) : J(G, new Eu(a, h, or(L), e, window, $b, Rb.j, Qb, pc.output, Gc));
                break;
            case 5:
                J(G, new Fu(a, e, k.Fd, cc, n, Rb.j, Qb, Kd.output, pc.output, B));
                break;
            case 4:
                var Ce = new Gu(a, e, w, window, Rb.j, Qb);
                _.S(G, Ce);
                xk(Ce);
                break;
            case 7:
                iu(G, gr(a, e, w, Rb.j, Qb));
                break;
            case 8:
            case 9:
                var Jh = Rb.j,
                    tf = Sc.output,
                    uf = window,
                    Bb = new ok,
                    Kh = 8 === Nd ? 3 : 4,
                    Od = new Hu(a, x);
                J(Bb, Od);
                J(Bb, new Iu(a, uf, Kh, Od.output, Jh, tf, Gc));
                xk(Bb);
                Bb && _.S(G, Bb)
        }
        var zg = new Ju(a, e, Rb.j, n, w);
        J(G, zg);
        var Pd = new Ku(a, e, Lu(h, e), window.top);
        J(G, Pd);
        var Ag = Rb.j,
            md = new ok,
            Bg = J(md, new Yq(a, e, Mu)),
            Cg = J(md, new Nu(a, n, Ag, Bg.output));
        J(md, new Ou(a, Cg.output, w, e));
        xk(md);
        _.S(G, md);
        var vf = new Pu(a, Lu(h, e), window.top, Rb.j, ia.output, Pd.output, Pd.j);
        J(G, vf);
        J(G, new Qu(a, e, db, Ra, Rb.j, Sc.output, Rb.C));
        var Dg = new Ru(a, window, Pc, Rb.j, Sc.output, Qb);
        J(G, Dg);
        var Eg = wo(),
            Tc = new ok,
            wf = new Su(a, n, Eg, R, c, b, d, qa, pg);
        J(Tc, wf);
        xk(Tc);
        _.S(G, Tc);
        var Qd = new Yp;
        Qd.G(og);
        J(G, new Tt(a, wo(), R, b, c, d, Qd));
        return G
    };
    Wu = function(a, b, c) {
        var d = null;
        try {
            var e = Uu(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.ba,
                    h = c.T[f.getDomId()],
                    k;
                f = null == (k = Ym(f, h, b.document, fq(g, h))) ? void 0 : k.y;
                k = Bm(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++Vu
            })
        } catch (f) {}
        return d
    };
    dv = function(a) {
        return Il(a.oa.context, 1132, function() {
            if (a.ma.X.length) {
                var b = new _.u.Set(Of(Xu));
                var c = a.oa.Z;
                c = _.E(Yu) && _.Q(c, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id".split(" ") : [];
                c = _.y(c);
                for (var d = c.next(); !d.done; d = c.next()) b.add(d.value);
                d = new _.u.Map;
                c = _.y(Zu);
                for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a, d);
                c = "https://" + ($u(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
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
                        if (f = "object" !== typeof f ? null == f || !h && 0 === f ? null : encodeURIComponent(f) : Array.isArray(f) && f.length ? av(f, g) : null) "?" !== c[c.length - 1] && (c += "&"), c += e + "=" + f
                    }
                }
                if (1 === _.Mf(bv) || 2 === _.Mf(bv)) b = _.Mf(cv), b = 0 >= b ? "" : (_.H = _.z(Array, "from").call(Array, {
                    length: Math.ceil(b / 8)
                }), _.z(_.H, "fill")).call(_.H, "testdata").join("").substring(0, b), 2 === _.Mf(bv) && (c += "&dblt=" + b);
                b = c
            } else b = "";
            return b
        })
    };
    $u = function(a) {
        var b = a.oa.Z,
            c, d;
        a = null != (d = null == (c = ev(a.ma.O.ba)) ? void 0 : _.Q(c, 9)) ? d : !1;
        c = _.E(Yu) && _.Q(b, 8);
        return a || c || !bh(b)
    };
    av = function(a, b) {
        var c = void 0 === b.Ta ? "," : b.Ta,
            d = void 0 === b.Nd ? "" : b.Nd,
            e = void 0 === b.Ia ? !1 : b.Ia,
            f = !1;
        a = a.map(function(g) {
            f || (f = !!g);
            return String(0 === g && e ? g : g || d)
        });
        return f || e ? encodeURIComponent(a.join(c)) : null
    };
    gv = function(a, b) {
        var c = a.responseText;
        b = b.R;
        403 === a.status && b.error(fv(c));
        return {}
    };
    kv = function(a, b) {
        try {
            _.Mf(hv);
            var c, d = null != (c = b.Go) ? c : iv,
                e = _.y(a.X),
                f = e.next();
            for (a = {}; !f.done; a = {
                    pe: void 0
                }, f = e.next()) {
                a.pe = f.value;
                var g = d.get(a.pe);
                d.set(a.pe, (new Date).getTime());
                g ? b.Ba.Jc.Sc.ji.refresh.fm.je({
                    ne: (new Date).getTime() - g,
                    Gm: _.Mf(jv)
                }) : _.kp(a.pe, function(h) {
                    return function() {
                        return void d.delete(h.pe)
                    }
                }(a))
            }
        } catch (h) {}
        return {}
    };
    nv = function() {
        var a = _.Mf(lv);
        switch (a) {
            case 0:
                return Ka() && mv(window.fetch) && mv(window.TextDecoderStream);
            case 1:
                return Ka() && mv(window.fetch) && !!window.TextDecoderStream;
            case 2:
                return Ka() && !!window.fetch && !!window.TextDecoderStream;
            case 3:
                return !Ja() && mv(window.fetch) && !!window.TextDecoderStream;
            case 4:
                return !Ja() && !!window.fetch && !!window.TextDecoderStream;
            case 5:
                return mv(window.fetch) && !!window.TextDecoderStream;
            case 6:
                return !!window.fetch && !!window.TextDecoderStream;
            default:
                lb(a)
        }
    };
    pv = function(a, b, c) {
        b = ov(b, c);
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
    ov = function(a, b) {
        if (0 === a) return 0;
        a = _.Mf(qv);
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
    Dv = function(a, b) {
        a = a.Pg;
        var c = b.Sa,
            d, e;
        b = rv(a, 6);
        var f = rv(a, 7),
            g = !!Gn(a, 8),
            h = sv(a, 10),
            k = null != (e = a.getEscapedQemQueryId()) ? e : "";
        e = _.vm(a, tv, 43);
        var l = !!Gn(a, 9),
            m = !!Gn(a, 12),
            n = _.vm(a, uv, il(a, vv, 48)),
            p = _.vm(a, wv, il(a, vv, 39)),
            r = _.Vc(_.$h(a, 36)),
            v = !!Gn(a, 13),
            w = sv(a, 49),
            x = _.vm(a, xv, 51);
        if (0 !== c.kind) {
            var B;
            c = {
                kind: 0,
                tb: null != (B = dk(a, 4)) ? B : ""
            }
        }
        B = sv(a, 61);
        var C = _.vm(a, yv, 58),
            F = null == (d = _.vm(a, zv, 56)) ? void 0 : sv(d, 1);
        d = _.bk(a, Av, 62);
        var G = _.bk(a, Bv, 67),
            P = ve(a, 63, pd, 2, void 0, void 0, 0);
        return {
            output: {
                height: b,
                width: f,
                isEmpty: g,
                sb: h,
                Na: k,
                Id: e,
                isBackfill: l,
                Gb: m,
                Yk: n,
                eb: p,
                Nf: r,
                rh: v,
                Sb: w,
                Ze: x,
                Kb: B,
                Sa: c,
                na: C,
                Xm: F,
                Wg: d,
                pk: G,
                wg: P,
                Qf: !!Gn(a, 64),
                gg: _.vm(a, Cv, 68)
            }
        }
    };
    Gv = function(a, b) {
        var c = b.R;
        b = b.context;
        var d;
        (null == (d = _.vm(a.Pg, Ev, 69)) ? 0 : _.Q(d, 1)) && O(c, Fv(b.yb));
        return {}
    };
    Hv = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = _.Ta.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.ri(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.rb(function(l) {
                if (1 == l.g) return d && clearTimeout(d), d = 0, f = new _.xh, g = b(f.resolve), h = ++e, l.yield(0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, _.Mf(jv));
                _.kp(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    Iv = function(a) {
        var b = 0,
            c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k, l, m;
            return _.rb(function(n) {
                if (1 == n.g) return f = new _.xh, g = f.resolve, h = ++e, n.yield(0, 2);
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
                m > _.Mf(jv) ? l() : (d = setTimeout(l, _.Mf(jv) - m), _.kp(a, function() {
                    return void g(!1)
                }), c = g);
                return n.return(f.promise)
            })
        }
    };
    Kv = function(a, b) {
        a = a.X;
        var c = b.L,
            d = b.mb;
        b = b.rl;
        if (!a.length) return {
            ie: []
        };
        for (var e = _.y(a), f = e.next(); !f.done; f = e.next()) Aq(c, f.value);
        return b ? {
            ie: []
        } : d ? (c = Bl(a[0].getAdUnitPath()), {
            ie: Jv(a, c)
        }) : {
            ie: a.map(function(g) {
                return {
                    networkCode: Bl(g.getAdUnitPath()),
                    X: [g]
                }
            })
        }
    };
    Jv = function(a, b) {
        var c = [];
        a = ua(a, function(f) {
            return Bl(f.getAdUnitPath())
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
    Mv = function(a, b) {
        a = a.X;
        var c = function(d) {
            return !!Cm(b.T[d.getDomId()]).length
        };
        return {
            oj: a.filter(c),
            yj: a.filter(Lv(c))
        }
    };
    Uv = function() {
        var a = new Nv;
        var b = (new Ov).setCorrelator(Xj(_.t));
        var c = jh().join();
        b = _.bj(b, 5, c);
        b = _.K(b, 2, 1);
        a = _.ci(a, 1, b);
        b = new Pv;
        c = _.E(Qv);
        b = _.ul(b, 7, c);
        c = _.E(Rv);
        b = _.ul(b, 8, c);
        c = _.E(Sv);
        b = _.ul(b, 9, c);
        b = _.ul(b, 10, !0);
        c = _.E(Tv);
        b = _.ul(b, 13, c);
        b = _.ul(b, 16, !0);
        a = _.ci(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    Yv = function() {
        var a = _.E(Vv) ? _.fb(Wv) : _.fb(Xv);
        _.ap(document, a)
    };
    cw = function(a, b) {
        var c = Zv() || $v() ? 1 : _.oh(),
            d = .001 > c;
        d ? (b.D = !0, ih(31067358)) : .002 > c && ih(31067357);
        In(23, a);
        a = 1E-4 > c;
        b = _.Mf(aw);
        var e = 0 < b && c < b,
            f = _.Mf(bw),
            g = 0 < f && c < 1 / f,
            h = _.Mf(hv);
        return {
            Qc: d,
            Ii: 1E3,
            nj: a,
            Hi: 1E4,
            gh: d,
            hg: 1E3,
            tm: e,
            am: b,
            rm: g,
            Hl: f,
            um: 0 < h && c < 1 / h,
            Ph: c
        }
    };
    gw = function(a, b) {
        var c = _.z(Object, "assign").call(Object, {}, a);
        a = a.Ph;
        c = (delete c.Ph, c);
        var d = b.yb;
        /m\d+/.test(d) ? d = Number(d.substring(1)) : (d && eg({
            mjsv: d
        }, "gpt_inv_ver"), d = void 0);
        var e = window.document.URL,
            f = new dw(4, b.yb, 1E3);
        a = new ew(f, a);
        return _.z(Object, "assign").call(Object, {}, b, c, {
            Ao: new fw(b)
        }, {
            Hc: d,
            Ra: f,
            bg: e,
            qo: 2012,
            V: a
        })
    };
    _.ba = [];
    hw = function(a) {
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
    iw = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    jw = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    _.kw = jw(this);
    lw = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.u = {};
    mw = {};
    _.z = function(a, b, c) {
        if (!c || null != a) {
            c = mw[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    };
    nw = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in _.u ? f = _.u : f = _.kw;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = lw && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? iw(_.u, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === mw[d] && (a = 1E9 * Math.random() >>> 0, mw[d] = lw ? _.kw.Symbol(d) : "$jscp$" + a + "$" + d), iw(f, mw[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    nw("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            iw(this, "description", {
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
    nw("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, _.u.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.kw[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && iw(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ow(hw(this))
                }
            })
        }
        return a
    }, "es6");
    ow = function(a) {
        a = {
            next: a
        };
        a[_.z(_.u.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    _.pw = function(a) {
        return a.raw = a
    };
    qw = function(a, b) {
        a.raw = b;
        return a
    };
    _.y = function(a) {
        var b = "undefined" != typeof _.u.Symbol && _.z(_.u.Symbol, "iterator") && a[_.z(_.u.Symbol, "iterator")];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: hw(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.ri = function(a) {
        if (!(a instanceof Array)) {
            a = _.y(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    rw = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    sw = lw && "function" == typeof _.z(Object, "assign") ? _.z(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) rw(d, e) && (a[e] = d[e])
        }
        return a
    };
    nw("Object.assign", function(a) {
        return a || sw
    }, "es6");
    var tw = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        uw = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (lw && "undefined" != typeof Reflect && Reflect.construct) {
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
                e = tw(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        vw;
    if (lw && "function" == typeof _.z(Object, "setPrototypeOf")) vw = _.z(Object, "setPrototypeOf");
    else {
        var ww;
        a: {
            var xw = {
                    a: !0
                },
                yw = {};
            try {
                yw.__proto__ = xw;
                ww = yw.a;
                break a
            } catch (a) {}
            ww = !1
        }
        vw = ww ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    zw = vw;
    _.T = function(a, b) {
        a.prototype = tw(b.prototype);
        a.prototype.constructor = a;
        if (zw) zw(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Em = b.prototype
    };
    Aw = function() {
        this.D = !1;
        this.j = null;
        this.A = void 0;
        this.g = 1;
        this.J = this.l = 0;
        this.M = null
    };
    Bw = function(a) {
        if (a.D) throw new TypeError("Generator is already running");
        a.D = !0
    };
    Aw.prototype.I = function(a) {
        this.A = a
    };
    var Cw = function(a, b) {
        a.M = {
            exception: b,
            ml: !0
        };
        a.g = a.l || a.J
    };
    Aw.prototype.return = function(a) {
        this.M = {
            return: a
        };
        this.g = this.J
    };
    Aw.prototype.yield = function(a, b) {
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
    Dw = function(a) {
        this.g = new Aw;
        this.A = a
    };
    Gw = function(a, b) {
        Bw(a.g);
        var c = a.g.j;
        if (c) return Ew(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return Fw(a)
    };
    Ew = function(a, b, c, d) {
        try {
            var e = b.call(a.g.j, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.D = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.j = null, Cw(a.g, g), Fw(a)
        }
        a.g.j = null;
        d.call(a.g, f);
        return Fw(a)
    };
    Fw = function(a) {
        for (; a.g.g;) try {
            var b = a.A(a.g);
            if (b) return a.g.D = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.A = void 0, Cw(a.g, c)
        }
        a.g.D = !1;
        if (a.g.M) {
            b = a.g.M;
            a.g.M = null;
            if (b.ml) throw b.exception;
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
    Hw = function(a) {
        this.next = function(b) {
            Bw(a.g);
            a.g.j ? b = Ew(a, a.g.j.next, b, a.g.I) : (a.g.I(b), b = Fw(a));
            return b
        };
        this.throw = function(b) {
            Bw(a.g);
            a.g.j ? b = Ew(a, a.g.j["throw"], b, a.g.I) : (Cw(a.g, b), b = Fw(a));
            return b
        };
        this.return = function(b) {
            return Gw(a, b)
        };
        this[_.z(_.u.Symbol, "iterator")] = function() {
            return this
        }
    };
    Iw = function(a) {
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
        return Iw(new Hw(new Dw(a)))
    };
    _.Ta = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    nw("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    nw("Reflect.construct", function() {
        return uw
    }, "es6");
    nw("Reflect.setPrototypeOf", function(a) {
        return a ? a : zw ? function(b, c) {
            try {
                return zw(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    nw("Promise", function(a) {
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
        var d = _.kw.setTimeout;
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
            this.J(2, g)
        };
        e.prototype.D = function(g) {
            this.J(1, g)
        };
        e.prototype.J = function(g, h) {
            if (0 != this.A) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.A);
            this.A = g;
            this.l = h;
            2 === this.A && this.K();
            this.o()
        };
        e.prototype.K = function() {
            var g = this;
            d(function() {
                if (g.C()) {
                    var h = _.kw.console;
                    "undefined" !== typeof h && h.error(g.l)
                }
            }, 1)
        };
        e.prototype.C = function() {
            if (this.I) return !1;
            var g = _.kw.CustomEvent,
                h = _.kw.Event,
                k = _.kw.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = _.kw.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
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
                for (var l = _.y(g), m = l.next(); !m.done; m = l.next()) c(m.value).Fe(h, k)
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
                do p.push(void 0), r++, c(k.value).Fe(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    nw("Object.setPrototypeOf", function(a) {
        return a || zw
    }, "es6");
    nw("WeakMap", function(a) {
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
            if (!rw(g, d)) {
                var k = new b;
                iw(g, d, {
                    value: k
                })
            }
            if (!rw(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && rw(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && rw(g, d) && rw(g[d], this.g)
        };
        f.prototype.delete = function(g) {
            return c(g) && rw(g, d) && rw(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    nw("Map", function(a) {
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
                Pb: this[1].Pb,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.Ya), this[1].Pb.next = l.Ya, this[1].Pb = l.Ya, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.Ya && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.Ya.Pb.next = h.Ya.next, h.Ya.next.Pb = h.Ya.Pb, h.Ya.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Pb = f();
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
                if (m && rw(h[0], l))
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
                return ow(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Pb;
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
                return h.Pb = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var Jw = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    nw("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Jw(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var Kw = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                si: e,
                Aj: f
            }
        }
        return {
            si: -1,
            Aj: void 0
        }
    };
    nw("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Kw(this, b, c).Aj
        }
    }, "es6");
    var Lw = function(a, b) {
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
    nw("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Lw(this, function(b) {
                return b
            })
        }
    }, "es6");
    nw("Set", function(a) {
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
    nw("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Lw(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    nw("Number.EPSILON", function() {
        return Math.pow(2, -52)
    }, "es6");
    nw("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    nw("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    nw("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.z(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    nw("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return _.z(Number, "isInteger").call(Number, b) && Math.abs(b) <= _.z(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    nw("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    nw("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) rw(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    nw("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    nw("Array.prototype.includes", function(a) {
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
    nw("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Jw(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    nw("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    nw("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Lw(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    nw("Array.from", function(a) {
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
    nw("Array.prototype.fill", function(a) {
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
    var Mw = function(a) {
        return a ? a : _.z(Array.prototype, "fill")
    };
    nw("Int8Array.prototype.fill", Mw, "es6");
    nw("Uint8Array.prototype.fill", Mw, "es6");
    nw("Uint8ClampedArray.prototype.fill", Mw, "es6");
    nw("Int16Array.prototype.fill", Mw, "es6");
    nw("Uint16Array.prototype.fill", Mw, "es6");
    nw("Int32Array.prototype.fill", Mw, "es6");
    nw("Uint32Array.prototype.fill", Mw, "es6");
    nw("Float32Array.prototype.fill", Mw, "es6");
    nw("Float64Array.prototype.fill", Mw, "es6");
    nw("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) rw(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    nw("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Jw(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    nw("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Jw(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    nw("globalThis", function(a) {
        return a || _.kw
    }, "es_2020");
    var Nw = function(a, b) {
        a = void 0 !== a ? String(a) : " ";
        return 0 < b && a ? _.z(a, "repeat").call(a, Math.ceil(b / a.length)).substring(0, b) : ""
    };
    nw("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Jw(this, null, "padStart");
            return Nw(c, b - d.length) + d
        }
    }, "es8");
    nw("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = Jw(this, null, "padStart");
            return d + Nw(c, b - d.length)
        }
    }, "es8");
    nw("AggregateError", function(a) {
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
    nw("Promise.any", function(a) {
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
    nw("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Kw(this, b, c).si
        }
    }, "es6");
    nw("Object.fromEntries", function(a) {
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
    nw("Object.hasOwn", function(a) {
        return a ? a : function(b, c) {
            return Object.prototype.hasOwnProperty.call(b, c)
        }
    }, "es_next");
    nw("Promise.prototype.finally", function(a) {
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
    nw("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = _.z(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    nw("String.raw", function(a) {
        return a ? a : function(b, c) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g) f += d[g], g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
            return f
        }
    }, "es6");
    nw("Math.sign", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
        }
    }, "es6");
    nw("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    }, "es6");
    nw("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function(e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    var Ow, Jc, Pw, Qw, Rw, Sw;
    _.t = this || self;
    Ow = function(a) {
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
        return Object.prototype.hasOwnProperty.call(a, Pw) && a[Pw] || (a[Pw] = ++Qw)
    };
    Pw = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Qw = 0;
    Rw = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Sw = function(a, b, c) {
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
    _.Tw = function(a, b, c) {
        _.Tw = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Rw : Sw;
        return _.Tw.apply(null, arguments)
    };
    _.Uw = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    var Vw;
    _.da = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.Ww = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.lj = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.Xw = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    _.rj = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Aa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Yw = {
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
    var ax = function(a, b) {
        this.g = a === Zw && b || "";
        this.A = $w
    };
    ax.prototype.toString = function() {
        return this.g
    };
    var bx = function(a) {
            return a instanceof ax && a.constructor === ax && a.A === $w ? a.g : "type_error:Const"
        },
        $w = {},
        Zw = {};
    var ix, hx, gx, dx, jx, eb, ex;
    _.cx = function(a) {
        this.g = a
    };
    _.cx.prototype.toString = function() {
        return this.g + ""
    };
    _.fx = function(a, b) {
        a = dx.exec(_.gb(a).toString());
        var c = a[3] || "";
        return eb(a[1] + ex("?", a[2] || "", b) + ex("#", c))
    };
    _.gb = function(a) {
        return a instanceof _.cx && a.constructor === _.cx ? a.g : "type_error:TrustedResourceUrl"
    };
    ix = function(a, b) {
        var c = bx(a);
        if (!gx.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(hx, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof ax ? bx(d) : encodeURIComponent(String(d))
        });
        return eb(a)
    };
    hx = /%{(\w+)}/g;
    gx = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    dx = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    jx = {};
    eb = function(a) {
        return new _.cx(a, jx)
    };
    ex = function(a, b, c) {
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
    var kx, lx, mx, Pa, nx;
    _.Oa = function(a) {
        this.g = a
    };
    _.Oa.prototype.toString = function() {
        return this.g.toString()
    };
    _.Za = function(a) {
        return a instanceof _.Oa && a.constructor === _.Oa ? a.g : "type_error:SafeUrl"
    };
    kx = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    lx = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    mx = {};
    Pa = function(a) {
        return new _.Oa(a, mx)
    };
    nx = Pa("about:invalid#zClosurez");
    var ox, cm, px, xx, rx, sx, tx, ux, vx, wx, qx;
    ox = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    cm = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    px = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    xx = function(a) {
        if (!qx.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(rx, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(sx, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(tx, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ux, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(vx, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(wx, "&#0;"));
        return a
    };
    rx = /&/g;
    sx = /</g;
    tx = />/g;
    ux = /"/g;
    vx = /'/g;
    wx = /\x00/g;
    qx = /[\x00&<>"']/;
    _.Fa = function(a, b) {
        return -1 != a.indexOf(b)
    };
    var yx;
    yx = {};
    _.zx = function(a) {
        this.g = a
    };
    _.zx.prototype.toString = function() {
        return this.g.toString()
    };
    _.Ax = function(a) {
        return a instanceof _.zx && a.constructor === _.zx ? a.g : "type_error:SafeStyleSheet"
    };
    var Da = Ow(610401301),
        Se = Ow(188588736);
    var Ea, Bx = _.t.navigator;
    Ea = Bx ? Bx.userAgentData || null : null;
    var Cx, Gx, Ix, Jx, Kx, Fx;
    Cx = {};
    _.Dx = function(a) {
        this.g = a
    };
    _.Dx.prototype.toString = function() {
        return this.g.toString()
    };
    _.Ex = function(a) {
        return a instanceof _.Dx && a.constructor === _.Dx ? a.g : "type_error:SafeHtml"
    };
    Gx = function(a) {
        var b = Fx;
        b = b instanceof _.Dx ? b : _.Uj(xx(String(b)));
        var c = [],
            d = function(e) {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof _.Dx ? e : _.Uj(xx(String(e))), c.push(_.Ex(e).toString()))
            };
        a.forEach(d);
        return _.Uj(c.join(_.Ex(b).toString()))
    };
    _.Hx = function(a) {
        return Gx(Array.prototype.slice.call(arguments))
    };
    _.Uj = function(a) {
        return new _.Dx(a, Cx)
    };
    Ix = /^[a-zA-Z0-9-]+$/;
    Jx = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    Kx = {
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
    Fx = new _.Dx(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "", Cx);
    _.Lx = _.Uj("<br>");
    _.Qa = Pa("about:invalid#zClosurez");
    var La = function(a) {
            this.ul = a
        },
        Na = [Ma("data"), Ma("http"), Ma("https"), Ma("mailto"), Ma("ftp"), new La(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        })],
        Xa = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    var ab = function() {};
    ab.prototype.toString = function() {
        return this.Yi.toString()
    };
    var vb = _.pw(["https://tpc.googlesyndication.com/sodar/", ".js"]),
        Mx = _.pw(["https://www.google.com/recaptcha/api2/aframe"]);
    _.fb(Mx);
    var Nx, Lv, Ai;
    Nx = function() {
        return !0
    };
    Lv = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Ai = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.Ox = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    _.Px = function(a, b) {
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
    ib = Ai(function() {
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
    _.ag = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, jb(d)), !0) : !1
    };
    var Qx = {
            xn: 0,
            An: 1,
            vn: 2,
            wn: 3,
            0: "FORMATTED_HTML_CONTENT",
            1: "HTML_FORMATTED_CONTENT",
            2: "EMBEDDED_INTERNAL_CONTENT",
            3: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        Rx = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + Qx[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.T(Rx, Error);
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
    var Cb, zb = "function" === typeof String.prototype.vl,
        yb = "undefined" !== typeof TextEncoder;
    _.Sx = function(a) {
        _.Sx[" "](a);
        return a
    };
    _.Sx[" "] = function() {};
    var Tx = function(a, b) {
        try {
            return _.Sx(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Ux, Wx, Xx, Yx, Zx, $x;
    Ux = Ia() ? !1 : Ha("Opera");
    _.Vx = Ia() ? !1 : Ha("Trident") || Ha("MSIE");
    Wx = Ha("Edge");
    Xx = Ha("Gecko") && !(_.Fa(Ca().toLowerCase(), "webkit") && !Ha("Edge")) && !(Ha("Trident") || Ha("MSIE")) && !Ha("Edge");
    Yx = _.Fa(Ca().toLowerCase(), "webkit") && !Ha("Edge");
    Zx = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var ay = "",
            by = function() {
                var a = Ca();
                if (Xx) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Wx) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Vx) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Yx) return /WebKit\/(\S+)/.exec(a);
                if (Ux) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();by && (ay = by ? by[1] : "");
        if (_.Vx) {
            var cy = Zx();
            if (null != cy && cy > parseFloat(ay)) {
                $x = String(cy);
                break a
            }
        }
        $x = ay
    }
    var dy = $x,
        ey;
    if (_.t.document && _.Vx) {
        var fy = Zx();
        ey = fy ? fy : parseInt(dy, 10) || void 0
    } else ey = void 0;
    var gy = ey;
    !Ha("Android") || Ka();
    Ka();
    Ha("Safari") && (Ka() || (Ia() ? 0 : Ha("Coast")) || (Ia() ? 0 : Ha("Opera")) || (Ia() ? 0 : Ha("Edge")) || (Ia() ? Ga("Microsoft Edge") : Ha("Edg/")) || Ia() && Ga("Opera"));
    var hy = {},
        iy = null,
        jy = Xx || Yx || "function" == typeof _.t.btoa,
        Jb = function(a, b) {
            void 0 === b && (b = 0);
            ky();
            b = hy[b];
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
        ly = function(a, b) {
            if (jy && !b) a = _.t.btoa(a);
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
        Qf = function(a) {
            var b = [];
            my(a, function(c) {
                b.push(c)
            });
            return b
        },
        ny = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : _.Fa("=.", a[b - 1]) && (c = _.Fa("=.", a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            my(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        my = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = iy[l];
                    if (null != m) return m;
                    if (!cm(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            ky();
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
        ky = function() {
            if (!iy) {
                iy = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    hy[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === iy[f] && (iy[f] = e)
                    }
                }
            }
        };
    var Nb = "undefined" !== typeof Uint8Array,
        Hb = !_.Vx && "function" === typeof btoa,
        oy = /[-_.]/g,
        Lb = {
            "-": "+",
            _: "/",
            ".": "="
        },
        py, Pb = {};
    var qy, uc = function(a, b) {
            Sb(b);
            this.g = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        vc = function() {
            return qy || (qy = new uc(null, Pb))
        },
        Zd = function(a) {
            var b = a.g;
            return null == b ? "" : "string" === typeof b ? b : a.g = Kb(b)
        },
        gl = function(a) {
            Sb(Pb);
            var b = a.g;
            if (null != b && !Ob(b))
                if ("string" === typeof b)
                    if (Hb) {
                        oy.test(b) && (b = b.replace(oy, Mb));
                        b = atob(b);
                        for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                        b = c
                    } else b = ny(b);
            else b = null;
            return (a = null == b ? b : a.g = b) ? new Uint8Array(a) : py || (py = new Uint8Array(0))
        };
    uc.prototype.isEmpty = function() {
        return null == this.g
    };
    var Wb = 0,
        Xb = 0,
        ry;
    var sy = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        uy = function(a) {
            if (!a) return ty || (ty = new sy(0, 0));
            if (!/^\d+$/.test(a)) return null;
            ec(a);
            return new sy(Wb, Xb)
        },
        ty, vy = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        lf = function(a) {
            if (!a) return wy || (wy = new vy(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            ec(a);
            return new vy(Wb, Xb)
        },
        wy;
    var xy = function() {
        this.g = []
    };
    xy.prototype.length = function() {
        return this.g.length
    };
    xy.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var xf = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.g.push(b)
        },
        mf = function(a, b) {
            for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        yy = function(a, b) {
            if (0 <= b) mf(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
                a.g.push(1)
            }
        };
    var Ff = function() {
            this.l = [];
            this.A = 0;
            this.g = new xy
        },
        Gf = function(a, b) {
            0 !== b.length && (a.l.push(b), a.A += b.length)
        },
        zf = function(a, b) {
            mf(a.g, 8 * b + 2);
            b = a.g.end();
            Gf(a, b);
            b.push(a.A);
            return b
        },
        Af = function(a, b) {
            var c = b.pop();
            for (c = a.A + a.g.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.A++;
            b.push(c);
            a.A++
        },
        zy = function(a, b, c) {
            mf(a.g, 8 * b + 2);
            mf(a.g, c.length);
            Gf(a, a.g.end());
            Gf(a, c)
        };
    var df = function(a, b) {
        this.g = a;
        this.Ij = b
    };
    var Ay = gc(),
        xd = gc("0di"),
        le = gc("0dg");
    var ic = Ay ? function(a, b) {
            a[Ay] |= b
        } : function(a, b) {
            void 0 !== a.vb ? a.vb |= b : Object.defineProperties(a, {
                vb: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        Fe = Ay ? function(a, b) {
            a[Ay] &= ~b
        } : function(a, b) {
            void 0 !== a.vb && (a.vb &= ~b)
        },
        xc = Ay ? function(a) {
            return a[Ay] | 0
        } : function(a) {
            return a.vb | 0
        },
        ge = Ay ? function(a) {
            return a[Ay]
        } : function(a) {
            return a.vb
        },
        mc = Ay ? function(a, b) {
            a[Ay] = b;
            return a
        } : function(a, b) {
            void 0 !== a.vb ? a.vb = b : Object.defineProperties(a, {
                vb: {
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
        By, pe, Cy = [];
    mc(Cy, 55);
    pe = Object.freeze(Cy);
    var Dy = function(a, b, c) {
        this.l = 0;
        this.g = a;
        this.A = b;
        this.j = c
    };
    Dy.prototype.next = function() {
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
    Dy.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return new Dy(this.g, this.A, this.j)
    };
    _.Ey = Object.freeze(new function() {});
    Object.freeze(new function() {});
    var Ac;
    var Mc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    var Ad, Cd, Dd;
    var Vd = {},
        Fy = function() {
            try {
                var a = function() {
                    return uw(_.u.Map, [], this.constructor)
                };
                _.T(a, _.u.Map);
                new a;
                return !1
            } catch (b) {
                return !0
            }
        }(),
        Gy = function() {
            this.g = new _.u.Map
        };
    _.q = Gy.prototype;
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
    Gy.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return _.z(this, "entries").call(this)
    };
    var Hy = function() {
            if (Fy) return _.z(Object, "setPrototypeOf").call(Object, Gy.prototype, _.u.Map.prototype), Object.defineProperties(Gy.prototype, {
                size: {
                    value: 0,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            }), Gy;
            var a = function() {
                return uw(_.u.Map, [], this.constructor)
            };
            _.T(a, _.u.Map);
            return a
        }(),
        Ud = function(a, b, c, d) {
            c = void 0 === c ? Fd : c;
            d = void 0 === d ? Fd : d;
            var e = Hy.call(this) || this;
            var f = xc(a);
            f |= 64;
            mc(a, f);
            e.Kd = f;
            e.Hf = b;
            e.Yd = c;
            e.sh = e.Hf ? Hd : d;
            for (var g = 0; g < a.length; g++) {
                var h = a[g],
                    k = c(h[0], !1, !0),
                    l = h[1];
                b ? void 0 === l && (l = null) : l = d(h[1], !1, !0, void 0, void 0, f);
                Hy.prototype.set.call(e, k, l)
            }
            return e
        };
    _.T(Ud, Hy);
    var Iy = function(a) {
            if (a.Kd & 2) throw Error("Cannot mutate an immutable Map");
        },
        $d = function(a, b) {
            b = void 0 === b ? Rd : b;
            if (0 !== a.size) return ie(a, b)
        },
        ie = function(a, b) {
            b = void 0 === b ? Rd : b;
            var c = [];
            a = _.z(Hy.prototype, "entries").call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    _.q = Ud.prototype;
    _.q.clear = function() {
        Iy(this);
        Hy.prototype.clear.call(this)
    };
    _.q.delete = function(a) {
        Iy(this);
        return Hy.prototype.delete.call(this, this.Yd(a, !0, !1))
    };
    _.q.entries = function() {
        var a = _.z(Array, "from").call(Array, _.z(Hy.prototype, "keys").call(this));
        return new Dy(a, Sd, this)
    };
    _.q.keys = function() {
        return _.z(Hy.prototype, "keys").call(this)
    };
    _.q.values = function() {
        var a = _.z(Array, "from").call(Array, _.z(Hy.prototype, "keys").call(this));
        return new Dy(a, Ud.prototype.get, this)
    };
    _.q.forEach = function(a, b) {
        var c = this;
        Hy.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    _.q.set = function(a, b) {
        Iy(this);
        a = this.Yd(a, !0, !1);
        return null == a ? this : null == b ? (Hy.prototype.delete.call(this, a), this) : Hy.prototype.set.call(this, a, this.sh(b, !0, !0, this.Hf, !1, this.Kd))
    };
    _.q.has = function(a) {
        return Hy.prototype.has.call(this, this.Yd(a, !1, !1))
    };
    _.q.get = function(a) {
        a = this.Yd(a, !1, !1);
        var b = Hy.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.Hf;
            return c ? (c = this.sh(b, !1, !0, c, this.jk, this.Kd), c !== b && Hy.prototype.set.call(this, a, c), c) : b
        }
    };
    Ud.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return _.z(this, "entries").call(this)
    };
    Ud.prototype.toJSON = void 0;
    Ud.prototype.zl = rc;
    var Td;
    var oe, di, Vq, Gn, hl, fj, il, fl, iq, ut, Jy, kk, Ci, xm, Ky, Ly, dk, ni, Xs, ms, Ny, Oy, Qy, Ry, eq, rv, sv, Sy, Th, li;
    _.$h = function(a, b) {
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
    _.ik = function(a, b, c) {
        var d = a.F,
            e = ge(d);
        zc(e);
        ne(d, e, b, c);
        return a
    };
    di = function(a, b, c) {
        return void 0 !== Ne(a, b, c, !1)
    };
    Vq = function(a) {
        a = a.F;
        var b = ge(a),
            c = oe(a, b, 3),
            d = Ic(c);
        null != d && d !== c && ne(a, b, 3, d);
        return d
    };
    Gn = function(a, b) {
        return Lc(_.$h(a, b))
    };
    hl = function(a, b) {
        a = a.F;
        var c = ge(a),
            d = oe(a, c, b),
            e = wc(d, !0, !!(c & 34));
        null != e && e !== d && ne(a, c, b, e);
        return null == e ? vc() : e
    };
    fj = function(a, b, c, d) {
        var e = a.F,
            f = ge(e);
        zc(f);
        (c = Me(e, f, c)) && c !== b && null != d && (f = ne(e, f, c));
        ne(e, f, b, d);
        return a
    };
    il = function(a, b, c) {
        a = a.F;
        return Me(a, ge(a), b) === c ? c : -1
    };
    fl = function(a, b) {
        a = a.F;
        return Me(a, ge(a), b)
    };
    iq = function(a, b, c) {
        var d = a.F,
            e = ge(d),
            f = Me(d, e, _.ij);
        a = ut(a, b, c);
        f && f !== c && ne(d, e, f);
        return a
    };
    ut = function(a, b, c) {
        a = a.F;
        var d = ge(a);
        zc(d);
        var e = oe(a, d, c);
        b = Gd(wd(e, b, !0, d));
        e !== b && ne(a, d, c, b);
        return b
    };
    Jy = function(a, b, c) {
        return (a = Ne(a, b, c, !1)) ? a : vd(b)
    };
    _.vm = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Ne(a, b, c, d);
        if (null == b) return b;
        a = a.F;
        var e = ge(a);
        if (!(e & 2)) {
            var f = Gd(b);
            f !== b && (b = f, ne(a, e, c, b, d))
        }
        return b
    };
    _.bk = function(a, b, c) {
        a = a.F;
        var d = ge(a);
        return Oe(a, d, b, c, !1, !(2 & d))
    };
    _.ci = function(a, b, c) {
        null == c && (c = void 0);
        return _.ik(a, b, c)
    };
    _.hj = function(a, b, c, d) {
        null == d && (d = void 0);
        return fj(a, b, c, d)
    };
    _.pm = function(a, b, c) {
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
    kk = function(a, b, c, d) {
        Pe(a, b, c, d);
        return a
    };
    Ci = function(a, b) {
        return Xc(_.$h(a, b))
    };
    xm = function(a, b) {
        return $c(_.$h(a, b))
    };
    Ky = function(a, b) {
        a = _.$h(a, b);
        var c;
        null == a ? c = a : Nc(a) ? "number" === typeof a ? c = id(a) : c = nd(a) : c = void 0;
        return c
    };
    Ly = function(a, b) {
        return ve(a, b, od, 2, void 0, void 0, 0)
    };
    dk = function(a, b) {
        return td(_.$h(a, b))
    };
    ni = function(a, b, c, d, e) {
        return ve(a, b, td, c, d, e)
    };
    _.Q = function(a, b, c) {
        return Re(Gn(a, b), void 0 === c ? !1 : c)
    };
    _.My = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Re(Ci(a, b), c)
    };
    Xs = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Re(xm(a, b), c)
    };
    _.Mg = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Re(od(_.$h(a, b)), c)
    };
    ms = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Re(Ky(a, b), c)
    };
    _.I = function(a, b) {
        return Re(dk(a, b), "")
    };
    _.gg = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return Re(_.Vc(_.$h(a, b)), c)
    };
    Ny = function(a, b) {
        var c = void 0 === c ? "0" : c;
        return Re(pd(_.$h(a, b), !0), c)
    };
    Oy = function(a, b, c) {
        a = ni(a, b, 3, void 0, !0);
        if ("number" !== typeof c || 0 > c || c >= a.length) throw Error();
        return a[c]
    };
    Qy = function(a) {
        return _.Mg(a, il(a, Py, 3))
    };
    Ry = function(a, b) {
        return _.I(a, il(a, b, 2))
    };
    eq = function(a, b) {
        a = Gn(a, b);
        return null == a ? void 0 : a
    };
    rv = function(a, b) {
        a = Ci(a, b);
        return null == a ? void 0 : a
    };
    sv = function(a, b) {
        a = dk(a, b);
        return null == a ? void 0 : a
    };
    Sy = function(a, b) {
        a = _.Vc(_.$h(a, b));
        return null == a ? void 0 : a
    };
    Th = function(a, b, c) {
        return _.ik(a, b, null == c ? c : Kc(c))
    };
    _.ul = function(a, b, c) {
        return _.Ke(a, b, null == c ? c : Kc(c), !1)
    };
    _.qi = function(a, b, c) {
        return _.ik(a, b, null == c ? c : Wc(c))
    };
    _.vl = function(a, b, c) {
        return _.Ke(a, b, null == c ? c : Wc(c), 0)
    };
    _.Yh = function(a, b, c) {
        return _.ik(a, b, ed(c))
    };
    _.aj = function(a, b, c) {
        return _.Ke(a, b, ed(c), "0")
    };
    li = function(a, b, c) {
        return _.ik(a, b, sd(c))
    };
    _.bj = function(a, b, c) {
        return _.Ke(a, b, sd(c), "")
    };
    _.ai = function(a, b, c) {
        return _.ik(a, b, Uc(c))
    };
    _.K = function(a, b, c) {
        return _.Ke(a, b, Uc(c), 0)
    };
    _.Bi = function(a, b) {
        return null != dk(a, b)
    };
    _.D = function(a, b, c) {
        this.F = _.A(a, b, c)
    };
    _.D.prototype.toJSON = function() {
        return By ? Te(this, this.F, !1) : Te(this, be(this.F, de, void 0, void 0, !1), !0)
    };
    var cl = function(a) {
        By = !0;
        try {
            return JSON.stringify(a.toJSON(), Yd)
        } finally {
            By = !1
        }
    };
    _.D.prototype.Cg = ud;
    var gf = (0, _.u.Symbol)(),
        Xe = (0, _.u.Symbol)(),
        cf = (0, _.u.Symbol)(),
        ff = (0, _.u.Symbol)(),
        Ty = kf(function(a, b, c) {
            b = Ic(b);
            null != b && (mf(a.g, 8 * c + 5), a = a.g, c = ry || (ry = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Xb = 0, b = Wb = c.getUint32(0, !0), a.g.push(b >>> 0 & 255), a.g.push(b >>> 8 & 255), a.g.push(b >>> 16 & 255), a.g.push(b >>> 24 & 255))
        }),
        Uy = kf(yf),
        Vy = kf(yf),
        Wy = kf(function(a, b, c) {
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
            }null != b && ("string" === typeof b && uy(b), null != b && (mf(a.g, 8 * c), "number" === typeof b ? (a = a.g, Yb(b), xf(a, Wb, Xb)) : (c = uy(b), xf(a.g, c.A, c.g))))
        }),
        Xy = kf(function(a, b, c) {
            b = Xc(b);
            null != b && null != b && (mf(a.g, 8 * c), yy(a.g, b))
        }),
        Yy = kf(function(a, b, c) {
            b = Lc(b);
            null != b && (mf(a.g, 8 * c), a.g.g.push(b ? 1 : 0))
        }),
        Zy = kf(function(a, b, c) {
            b = td(b);
            null != b && zy(a, c, Fb(b))
        }),
        $y;
    $y = new df(function(a, b, c) {
        b = Ve(td, b);
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    g = b[d];
                null != g && zy(e, f, Fb(g))
            }
    }, !1);
    var hf = new df(Bf, !0),
        ef = new df(Bf, !0),
        az;
    az = new df(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Bf(a, b[f], c, d, e)
    }, !0);
    var bz = kf(function(a, b, c) {
            b = Xc(b);
            null != b && (b = parseInt(b, 10), mf(a.g, 8 * c), yy(a.g, b))
        }),
        cz;
    cz = new df(function(a, b, c) {
        b = Ve(Xc, b);
        if (null != b && b.length) {
            c = zf(a, c);
            for (var d = 0; d < b.length; d++) yy(a.g, b[d]);
            Af(a, c)
        }
    }, !1);
    var Ef = void 0;
    var dz = function(a) {
        this.F = _.A(a)
    };
    _.T(dz, _.D);
    var ez = function(a) {
        this.F = _.A(a)
    };
    _.T(ez, _.D);
    var fz = function(a) {
            this.g = a.A;
            this.A = a.l;
            this.j = a.j;
            this.Xd = a.Xd;
            this.B = a.B;
            this.Bd = a.Bd;
            this.cf = a.cf;
            this.Af = a.Af;
            this.bf = a.bf;
            this.l = a.g
        },
        gz = function(a, b, c) {
            this.A = a;
            this.l = b;
            this.j = c;
            this.B = window;
            this.Bd = "env";
            this.cf = "n";
            this.Af = "0";
            this.bf = "1";
            this.g = !0
        };
    gz.prototype.build = function() {
        return new fz(this)
    };
    var mi = function(a) {
        this.F = _.A(a)
    };
    _.T(mi, _.D);
    mi.prototype.getId = function() {
        return _.I(this, 1)
    };
    var hz = [0, Zy];
    var pi = function(a) {
        this.F = _.A(a)
    };
    _.T(pi, _.D);
    pi.prototype.getWidth = function() {
        return _.My(this, 1)
    };
    pi.prototype.getHeight = function() {
        return _.My(this, 2)
    };
    var iz = [0, Xy, -1];
    var oi = function(a) {
        this.F = _.A(a)
    };
    _.T(oi, _.D);
    var jz = [0, Vy, Yy, Zy, -1];
    var ki = function(a) {
        this.F = _.A(a)
    };
    _.T(ki, _.D);
    ki.da = [4];
    var kz = [0, Zy, Vy, Zy, $y, bz, hz, iz, Vy, jz];
    var ei = function(a) {
        this.F = _.A(a)
    };
    _.T(ei, _.D);
    var hi = function(a, b) {
            return _.ai(a, 1, b)
        },
        ii = function(a, b) {
            return Th(a, 4, b)
        },
        gi = function(a, b) {
            return _.qi(a, 2, b)
        },
        lz = [0, bz, Xy, Zy, Yy];
    var Wh = function(a) {
        this.F = _.A(a)
    };
    _.T(Wh, _.D);
    var Vh = function(a, b) {
            return li(a, 1, b)
        },
        Sh = function(a, b) {
            return kk(a, 3, ki, b)
        },
        Uh = function(a, b) {
            return _.ai(a, 4, b)
        };
    Wh.prototype.hi = function() {
        return _.gg(this, 7, 0)
    };
    Wh.da = [10, 3];
    var mz = [0, Zy, Vy, az, kz, bz, lz, Yy, bz, 2, $y];
    var ti = function(a) {
        this.F = _.A(a)
    };
    _.T(ti, _.D);
    var nz = [0, bz, Yy, Vy];
    var oz = function(a) {
        this.F = _.A(a)
    };
    _.T(oz, _.D);
    var Rh = function(a, b) {
            return Pe(a, 2, Wh, b)
        },
        fi = function(a, b) {
            _.ci(a, 5, b)
        },
        yi = function(a, b) {
            _.ci(a, 9, b)
        },
        zi = function(a, b) {
            return li(a, 10, b)
        };
    oz.da = [2];
    var pz = [0, bz, az, mz, bz, Zy, lz, Zy, Yy, Xy, nz, Zy];
    var ui = function(a) {
        this.F = _.A(a)
    };
    _.T(ui, _.D);
    var wi = function(a) {
        var b = new oz;
        b = _.ai(b, 1, 1);
        return Pe(a, 1, oz, b)
    };
    ui.da = [1];
    ui.prototype.g = Hf([0, az, pz]);
    var qz = function(a) {
        this.F = _.A(a)
    };
    _.T(qz, _.D);
    var Py = [2, 3];
    var rz = function(a) {
        this.F = _.A(a)
    };
    _.T(rz, _.D);
    rz.da = [1];
    var sz = function(a) {
        this.F = _.A(a)
    };
    _.T(sz, _.D);
    sz.da = [1];
    var tz = function(a) {
        this.F = _.A(a)
    };
    _.T(tz, _.D);
    var uz = [2, 3];
    var vz = function(a) {
        this.F = _.A(a)
    };
    _.T(vz, _.D);
    vz.da = [2];
    var wz = function(a) {
        this.F = _.A(a)
    };
    _.T(wz, _.D);
    wz.da = [6, 4];
    var xz = function(a) {
        this.F = _.A(a)
    };
    _.T(xz, _.D);
    xz.da = [4, 5];
    var yz = function(a) {
        this.F = _.A(a)
    };
    _.T(yz, _.D);
    var zz = function(a) {
        this.F = _.A(a)
    };
    _.T(zz, _.D);
    zz.prototype.gi = function() {
        return Jy(this, yz, 2)
    };
    zz.da = [1];
    var Az = function(a) {
        this.F = _.A(a)
    };
    _.T(Az, _.D);
    var Bz = function(a) {
        this.F = _.A(a)
    };
    _.T(Bz, _.D);
    Bz.da = [1];
    var Cz = function(a) {
        this.F = _.A(a)
    };
    _.T(Cz, _.D);
    var Dz = [0, bz, Vy];
    var Ez = function(a) {
        this.F = _.A(a)
    };
    _.T(Ez, _.D);
    var Fz = [0, Uy];
    var Gz = function(a) {
        this.F = _.A(a)
    };
    _.T(Gz, _.D);
    Gz.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 1)
    };
    var Hz = [0, Zy, Fz, Dz];
    var Iz = function(a) {
        this.F = _.A(a)
    };
    _.T(Iz, _.D);
    Iz.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    _.Jz = function(a) {
        this.F = _.A(a)
    };
    _.T(_.Jz, _.D);
    _.Kz = function(a) {
        this.F = _.A(a)
    };
    _.T(_.Kz, _.D);
    _.Kz.prototype.Ve = ca(0);
    _.Kz.prototype.Rd = ca(1);
    _.Kz.prototype.Xe = ca(2);
    _.Kz.da = [15, 24];
    var Lz = function(a) {
        this.F = _.A(a)
    };
    _.T(Lz, _.D);
    Lz.prototype.getAdUnitPath = function() {
        return _.I(this, 2)
    };
    var Av = function(a) {
        this.F = _.A(a)
    };
    _.T(Av, _.D);
    var Mz = [5, 7, 8, 9];
    var Nz = function(a) {
        this.F = _.A(a)
    };
    _.T(Nz, _.D);
    var Oz = function(a) {
        this.F = _.A(a)
    };
    _.T(Oz, _.D);
    Oz.da = [4, 5, 6];
    var Pz = function(a) {
        this.F = _.A(a)
    };
    _.T(Pz, _.D);
    Pz.prototype.getValue = function() {
        return _.I(this, 2)
    };
    Pz.prototype.pg = function() {
        return _.Bi(this, 2)
    };
    var Qz = function(a) {
        this.F = _.A(a)
    };
    _.T(Qz, _.D);
    var wv = function(a) {
        this.F = _.A(a)
    };
    _.T(wv, _.D);
    wv.da = [13];
    var uv = function(a) {
        this.F = _.A(a)
    };
    _.T(uv, _.D);
    uv.da = [15, 13];
    var Rz = function(a) {
        this.F = _.A(a)
    };
    _.T(Rz, _.D);
    var jk = function(a) {
            var b = new Rz;
            return _.ai(b, 1, a)
        },
        Sz = [0, bz];
    var ck = function(a) {
        this.F = _.A(a)
    };
    _.T(ck, _.D);
    var Tz = function(a) {
            var b = new ck;
            return li(b, 1, a)
        },
        Uz = function(a) {
            var b = window.Date.now();
            b = _.z(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
            return _.Yh(a, 3, b)
        };
    ck.prototype.ib = function(a) {
        return _.ci(this, 10, a)
    };
    var Vz = If(ck),
        Wz = [0, Zy, -1, Vy, Xy, -2, Vy, Ty, Yy, Sz, Yy];
    var Xz = [0, 1, [0, Wy, -2], -1, Zy, -1, Yy, [0, 3, bz, Zy], Vy, cz];
    var Yz = function(a) {
        this.F = _.A(a)
    };
    _.T(Yz, _.D);
    Yz.da = [1, 2];
    Yz.prototype.g = Hf([0, az, Xz, az, Wz]);
    var zv = function(a) {
        this.F = _.A(a)
    };
    _.T(zv, _.D);
    var Zz = function(a) {
        this.F = _.A(a)
    };
    _.T(Zz, _.D);
    Zz.prototype.getValue = function() {
        return _.I(this, 1)
    };
    Zz.prototype.pg = function() {
        return _.Bi(this, 1)
    };
    Zz.prototype.getVersion = function() {
        return _.gg(this, 5, 0)
    };
    var tv = function(a) {
        this.F = _.A(a)
    };
    _.T(tv, _.D);
    var Bv = function(a) {
        this.F = _.A(a)
    };
    _.T(Bv, _.D);
    Bv.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    var Cv = function(a) {
        this.F = _.A(a)
    };
    _.T(Cv, _.D);
    var xv = function(a) {
        this.F = _.A(a)
    };
    _.T(xv, _.D);
    var Ev = function(a) {
        this.F = _.A(a)
    };
    _.T(Ev, _.D);
    var $z = function(a) {
        this.F = _.A(a)
    };
    _.T($z, _.D);
    $z.prototype.getContentUrl = function() {
        return _.I(this, 2)
    };
    $z.da = [11];
    var aA = function(a) {
        this.F = _.A(a)
    };
    _.T(aA, _.D);
    aA.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 4)
    };
    aA.da = [2, 23, 29];
    var bA = function(a) {
        this.F = _.A(a)
    };
    _.T(bA, _.D);
    var cA = function(a) {
        this.F = _.A(a)
    };
    _.T(cA, _.D);
    var dA = function(a) {
        this.F = _.A(a)
    };
    _.T(dA, _.D);
    var eA = function(a) {
        this.F = _.A(a)
    };
    _.T(eA, _.D);
    var fA = function(a) {
        this.F = _.A(a)
    };
    _.T(fA, _.D);
    var gA = function(a) {
        this.F = _.A(a)
    };
    _.T(gA, _.D);
    gA.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 2)
    };
    var hA = function(a) {
        this.F = _.A(a)
    };
    _.T(hA, _.D);
    var iA = function(a) {
        this.F = _.A(a)
    };
    _.T(iA, _.D);
    var yv = function(a) {
        this.F = _.A(a)
    };
    _.T(yv, _.D);
    var jA = function(a) {
        return Jy(a, gA, 5)
    };
    yv.prototype.getWidth = function() {
        return _.My(this, 9)
    };
    yv.prototype.getHeight = function() {
        return _.My(this, 10)
    };
    yv.da = [3, 7, 27, 11, 32];
    var kA = function(a) {
        this.F = _.A(a)
    };
    _.T(kA, _.D);
    kA.prototype.getHeight = function() {
        return Ci(this, 6)
    };
    kA.prototype.getWidth = function() {
        return Ci(this, 7)
    };
    kA.prototype.getEscapedQemQueryId = function() {
        return dk(this, 34)
    };
    kA.da = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63, 67];
    var vv = [39, 48];
    var lA = function(a) {
        this.F = _.A(a)
    };
    _.T(lA, _.D);
    var mA = If(lA);
    lA.da = [1, 2, 3];
    var nA = window;
    var Pv = function(a) {
        this.F = _.A(a)
    };
    _.T(Pv, _.D);
    Pv.da = [15];
    var Ov = function(a) {
        this.F = _.A(a)
    };
    _.T(Ov, _.D);
    Ov.prototype.getCorrelator = function() {
        return _.Mg(this, 1)
    };
    Ov.prototype.setCorrelator = function(a) {
        return _.aj(this, 1, a)
    };
    var Nv = function(a) {
        this.F = _.A(a)
    };
    _.T(Nv, _.D);
    var oA, pA, qA;
    _.U = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    oA = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    pA = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? "" : b
    };
    qA = function(a) {
        var b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var rA = new _.U(590317302),
        sA = new _.U(1958);
    _.Kf = function(a) {
        var b = "Ec";
        if (a.Ec && a.hasOwnProperty(b)) return a.Ec;
        b = new a;
        return a.Ec = b
    };
    var Lf = function() {
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
    var tA = _.Vx || Yx;
    _.uA = Ai(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.Ex(Fx);
        return !b.parentElement
    });
    _.Im = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Im.prototype.equals = function(a) {
        return a instanceof _.Im && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    _.Im.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Im.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Im.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Mm = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.q = _.Mm.prototype;
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
    var vA, wA, yA;
    vA = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    wA = 2147483648 * Math.random() | 0;
    _.xA = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    yA = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var ig, CA, BA, FA, HA, MA;
    ig = function(a) {
        return a ? new _.zA(_.AA(a)) : Vw || (Vw = new _.zA)
    };
    CA = function(a, b) {
        xa(b, function(c, d) {
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : BA.hasOwnProperty(d) ? a.setAttribute(BA[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    BA = {
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
    _.EA = function(a) {
        a = a.document;
        a = _.DA(a) ? a.documentElement : a.body;
        return new _.Mm(a.clientWidth, a.clientHeight)
    };
    FA = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Yx && _.DA(a) ? a.documentElement : a.body || a.documentElement
    };
    _.GA = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    HA = function(a, b, c) {
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
                _.Ww(g ? _.fa(f) : f, d)
            }
        }
    };
    _.IA = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.DA = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.JA = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.KA = function(a) {
        var b;
        if (tA && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ja(b) && 1 == b.nodeType ? b : null
    };
    _.LA = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.AA = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    MA = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.GA(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    _.tj = function(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    _.zA = function(a) {
        this.g = a || _.t.document || document
    };
    _.q = _.zA.prototype;
    _.q.al = function(a) {
        var b = this.g;
        return "string" === typeof a ? b.getElementById(a) : a
    };
    _.q.bn = _.zA.prototype.al;
    _.q.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    _.q.createElement = function(a) {
        return _.IA(this.g, a)
    };
    _.q.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    _.q.append = function(a, b) {
        HA(_.AA(a), a, arguments)
    };
    _.q.Pj = _.JA;
    _.q.contains = _.LA;
    var OA = function() {
            return Da && Ea ? Ea.mobile : !NA() && (Ha("iPod") || Ha("iPhone") || Ha("Android") || Ha("IEMobile"))
        },
        NA = function() {
            return Da && Ea ? !Ea.mobile && (Ha("iPad") || Ha("Android") || Ha("Silk")) : Ha("iPad") || Ha("Android") && !Ha("Mobile") || Ha("Silk")
        };
    var QA, cp;
    _.PA = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    QA = function(a) {
        return a ? decodeURI(a) : a
    };
    _.zn = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) _.zn(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    cp = /#|$/;
    var ml, Ak, RA, Bk, Um, mp, $v, Zv, TA, UA, Vm, VA, WA, XA, YA, ZA, $A, mv, aB, bB, Gp, Qj, Hp, Mp, cB, eB, fB, gB, hB, iB, Xj, jB, to, ko, kB, En, lB, mB;
    _.Sk = function(a) {
        try {
            return !!a && null != a.location.href && Tx(a, "foo")
        } catch (b) {
            return !1
        }
    };
    ml = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? RA(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.Sk(c) || !a(c));) c = RA(c)
    };
    Ak = function() {
        var a = window;
        ml(function(b) {
            a = b;
            return !1
        });
        return a
    };
    RA = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Bk = function(a) {
        return _.Sk(a.top) ? a.top : null
    };
    _.ap = function(a, b) {
        var c = _.$f("SCRIPT", a);
        ob(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Um = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.oh = function() {
        if (!_.u.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.u.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Cn = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.SA = function(a) {
        var b = [];
        _.Cn(a, function(c) {
            b.push(c)
        });
        return b
    };
    mp = function(a, b) {
        return za(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.ph = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    $v = Ai(function() {
        return _.rj(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], TA) || 1E-4 > Math.random()
    });
    Zv = Ai(function() {
        return TA("MSIE")
    });
    TA = function(a) {
        return _.Fa(Ca(), a)
    };
    UA = /^([0-9.]+)px$/;
    Vm = function(a) {
        return (a = UA.exec(a)) ? +a[1] : null
    };
    VA = function() {
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
    WA = function() {
        var a = _.t.location.href;
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    XA = {
        fn: "allow-forms",
        gn: "allow-modals",
        hn: "allow-orientation-lock",
        jn: "allow-pointer-lock",
        kn: "allow-popups",
        ln: "allow-popups-to-escape-sandbox",
        mn: "allow-presentation",
        nn: "allow-same-origin",
        on: "allow-scripts",
        pn: "allow-top-navigation",
        qn: "allow-top-navigation-by-user-activation"
    };
    YA = Ai(function() {
        return _.SA(XA)
    });
    ZA = function(a) {
        var b = YA();
        return a.length ? _.lj(b, function(c) {
            return !(0 <= _.da(a, c))
        }) : b
    };
    $A = function() {
        var a = _.$f("IFRAME"),
            b = {};
        _.Ww(YA(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    mv = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && _.Fa(a, "[native code]")
    };
    aB = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = RA(a))) break
        }
        return null
    };
    bB = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.$f("IFRAME");
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
    _.Pp = Ai(function() {
        return OA() ? 2 : NA() ? 1 : 0
    });
    Gp = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.qp = function(a, b) {
        _.Cn(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    Qj = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    Hp = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Um(a, window);
            if (d) {
                if (b(d, a)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Mp = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.Xw(a, parseFloat)
    };
    cB = {};
    _.dB = (cB["http://googleads.g.doubleclick.net"] = !0, cB["http://pagead2.googlesyndication.com"] = !0, cB["https://googleads.g.doubleclick.net"] = !0, cB["https://pagead2.googlesyndication.com"] = !0, cB);
    eB = function(a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    };
    fB = [];
    gB = function() {
        var a = fB;
        fB = [];
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    hB = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    iB = function() {
        var a = void 0 === a ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    };
    Xj = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: iB(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    jB = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (fB.push(b), 1 == fB.length && (_.u.Promise ? _.u.Promise.resolve().then(gB) : window.setImmediate ? setImmediate(gB) : setTimeout(gB, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    to = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    ko = function(a) {
        return 0 === a || to(a)
    };
    kB = function(a) {
        return new _.u.Promise(function(b) {
            setTimeout(function() {
                return void b(void 0)
            }, a)
        })
    };
    En = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.$f = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    lB = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.Sk(a) && (b = a);
        return b
    };
    _.Mi = function(a) {
        return _.E(rA) || Ka() && OA() ? mB(a, !0) : 1
    };
    mB = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? Bk(a) : a;
        if (!c) return 1;
        a = 0 === (0, _.Pp)();
        b = !!c.document.querySelector('meta[name=viewport][content*="width=device-width"]');
        var d = c.innerWidth;
        c = c.outerWidth;
        if (0 === d) return 1;
        var e = Math.round(100 * (c / d + _.z(Number, "EPSILON"))) / 100;
        return 1 === e ? 1 : a || b ? e : Math.round(100 * (c / d / .4 + _.z(Number, "EPSILON"))) / 100
    };
    _.nB = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.nB.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.nB.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.oB = function(a) {
        return new _.nB(a.top, a.right, a.bottom, a.left)
    };
    _.nB.prototype.contains = function(a) {
        return this && a ? a instanceof _.nB ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.nB.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.nB.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.nB.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var pB = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        qB = function(a) {
            return new _.nB(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        rB = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new pB(c, e, d - c, a - e)
            }
            return null
        };
    pB.prototype.contains = function(a) {
        return a instanceof _.Im ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    pB.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    pB.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    pB.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var sB = function(a) {
        return (a = void 0 === a ? Pf() : a) ? _.Sk(a.master) ? a.master : null : null
    };
    var vB, xB, Lm, yB, zB, Hm;
    _.uB = function(a, b, c) {
        if ("string" === typeof b)(b = _.tB(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.tB(c, d);
                f && (c.style[f] = e)
            }
    };
    vB = {};
    _.tB = function(a, b) {
        var c = vB[b];
        if (!c) {
            var d = _.xA(b);
            c = d;
            void 0 === a.style[d] && (d = (Yx ? "Webkit" : Xx ? "Moz" : _.Vx ? "ms" : null) + yA(d), void 0 !== a.style[d] && (c = d));
            vB[b] = c
        }
        return c
    };
    _.wB = function(a, b) {
        var c = _.AA(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    xB = function(a, b) {
        return _.wB(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Lm = function(a) {
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
    yB = function(a) {
        if (_.Vx && !(8 <= Number(gy))) return a.offsetParent;
        var b = _.AA(a),
            c = xB(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = xB(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    zB = function(a) {
        var b = _.AA(a),
            c = new _.Im(0, 0);
        var d = b ? _.AA(b) : document;
        d = !_.Vx || 9 <= Number(gy) || _.DA(ig(d).g) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Lm(a);
        d = ig(b).g;
        b = FA(d);
        d = d.parentWindow || d.defaultView;
        b = _.Vx && d.pageYOffset != b.scrollTop ? new _.Im(b.scrollLeft, b.scrollTop) : new _.Im(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Hm = function(a, b) {
        var c = new _.Im(0, 0),
            d = _.GA(_.AA(a));
        if (!Tx(d, "parent")) return c;
        do {
            var e = d == b ? zB(a) : _.AB(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.AB = function(a) {
        a = Lm(a);
        return new _.Im(a.left, a.top)
    };
    _.BB = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Km = function(a, b) {
        if ("none" != xB(b, "display")) return a(b);
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
    _.CB = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Yx && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Lm(a), new _.Mm(a.right - a.left, a.bottom - a.top)) : new _.Mm(b, c)
    };
    var Dp;
    _.DB = _.pw(["//fonts.googleapis.com/css"]);
    Dp = function(a) {
        a = sB(Pf(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var EB = function(a) {
        this.F = _.A(a)
    };
    _.T(EB, _.D);
    EB.da = [1];
    var FB = function(a) {
        this.F = _.A(a)
    };
    _.T(FB, _.D);
    var GB = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var HB = function(a) {
        this.F = _.A(a)
    };
    _.T(HB, _.D);
    HB.prototype.getVersion = function() {
        return _.My(this, 2)
    };
    HB.da = [3];
    var IB = function(a) {
        this.F = _.A(a)
    };
    _.T(IB, _.D);
    var JB = function(a) {
        this.F = _.A(a)
    };
    _.T(JB, _.D);
    var KB = function(a) {
        this.F = _.A(a)
    };
    _.T(KB, _.D);
    KB.prototype.getVersion = function() {
        return _.My(this, 1)
    };
    var LB = function(a) {
        this.F = _.A(a)
    };
    _.T(LB, _.D);
    var MB = function(a) {
        this.F = _.A(a)
    };
    _.T(MB, _.D);
    var NB = function(a) {
        var b = new MB;
        return _.ci(b, 1, a)
    };
    var OB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        PB = 6 + OB.reduce(function(a, b) {
            return a + b
        });
    var QB = function(a) {
        this.F = _.A(a)
    };
    _.T(QB, _.D);
    var RB = function(a) {
        this.F = _.A(a)
    };
    _.T(RB, _.D);
    RB.prototype.getVersion = function() {
        return _.My(this, 1)
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
        return _.ci(b, 1, a)
    };
    var VB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
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
    var ZB = function(a) {
        this.F = _.A(a)
    };
    _.T(ZB, _.D);
    ZB.prototype.getVersion = function() {
        return _.My(this, 1)
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
        return _.ci(b, 1, a)
    };
    var cC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
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
        return _.My(this, 1)
    };
    var gC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        hC = 6 + gC.reduce(function(a, b) {
            return a + b
        });
    var iC = function(a) {
        this.F = _.A(a)
    };
    _.T(iC, _.D);
    _.Jl = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    _.jC = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var kC = null,
        lC = function() {
            if (null === kC) {
                kC = "";
                try {
                    var a = "";
                    try {
                        a = _.t.top.location.hash
                    } catch (c) {
                        a = _.t.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        kC = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return kC
        };
    var mC = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.slotId = e;
        this.taskId = void 0;
        this.uniqueId = Math.random()
    };
    var nC, oC, pC, qC, rC;
    nC = _.t.performance;
    oC = !!(nC && nC.mark && nC.measure && nC.clearMarks);
    pC = Ai(function() {
        var a;
        if (a = oC) a = lC(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    qC = function(a, b) {
        this.A = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.A = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.g = pC() || (null != c ? c : Math.random() < a)
    };
    _.Hl = function(a) {
        a && nC && pC() && (nC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), nC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    rC = function(a, b, c, d, e, f) {
        a.g && (b = new mC(b, c, d, void 0 === e ? 0 : e, f), !a.g || 2048 < a.A.length || a.A.push(b))
    };
    qC.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new mC(a, b, _.Xf() || _.Wf());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        nC && pC() && nC.mark(b);
        return a
    };
    qC.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (_.Xf() || _.Wf()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            nC && pC() && nC.mark(b);
            !this.g || 2048 < this.A.length || this.A.push(a)
        }
    };
    var Ws = function(a, b, c) {
        var d = _.Xf();
        d && rC(a, b, 9, d, 0, c)
    };
    var vC, uC, xC, wC;
    _.sC = function() {
        this.l = "&";
        this.A = {};
        this.j = 0;
        this.g = []
    };
    _.tC = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    vC = function(a, b, c, d, e) {
        var f = [];
        _.Cn(a, function(g, h) {
            (g = uC(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    };
    uC = function(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(uC(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(vC(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    xC = function(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = wC(a) - b.length;
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
                var l = vC(h[k], a.l, ",$");
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
    wC = function(a) {
        var b = 1,
            c;
        for (c in a.A) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    };
    _.fg = function(a) {
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
    var yC = function(a, b, c, d, e) {
            bg(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
        },
        eg = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.Cn(a, function(e, f) {
                if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            Ds(d, c)
        },
        Ds = function(a, b) {
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
            }), c.fetch(a, b)) : yC(c, a, void 0, b, d)
        };
    var zC = function(a, b) {
        var c = new iC;
        a = _.K(c, 1, a);
        b = _.bj(a, 2, b);
        this.j = _.ke(b)
    };
    var AC = function(a) {
        this.F = _.A(a)
    };
    _.T(AC, _.D);
    var CC = function(a, b) {
            return fj(a, 1, BC, sd(b))
        },
        DC = function(a, b) {
            return fj(a, 3, BC, null == b ? b : Kc(b))
        },
        BC = [1, 2, 3];
    var EC = function(a) {
        this.F = _.A(a)
    };
    _.T(EC, _.D);
    var GC = function(a, b) {
            return fj(a, 4, FC, _.Hc(b))
        },
        FC = [2, 4];
    var HC = function(a) {
        this.F = _.A(a)
    };
    _.T(HC, _.D);
    var IC = function(a) {
            var b = new HC;
            return _.bj(b, 1, a)
        },
        JC = function(a, b) {
            return _.ci(a, 3, b)
        },
        KC = function(a, b) {
            return kk(a, 4, AC, b)
        };
    HC.da = [4];
    var LC = function(a) {
        this.F = _.A(a)
    };
    _.T(LC, _.D);
    var MC = function(a) {
        this.F = _.A(a)
    };
    _.T(MC, _.D);
    var Dl = function(a) {
        this.F = _.A(a)
    };
    _.T(Dl, _.D);
    var tl = function(a) {
        this.F = _.A(a)
    };
    _.T(tl, _.D);
    var sl = function(a) {
        this.F = _.A(a)
    };
    _.T(sl, _.D);
    var ql = function(a) {
        this.F = _.A(a)
    };
    _.T(ql, _.D);
    var zl = function(a) {
        this.F = _.A(a)
    };
    _.T(zl, _.D);
    var NC = function(a) {
        this.F = _.A(a)
    };
    _.T(NC, _.D);
    var OC = function(a) {
        this.F = _.A(a)
    };
    _.T(OC, _.D);
    var pl = function(a) {
        this.F = _.A(a)
    };
    _.T(pl, _.D);
    pl.prototype.getTagSessionCorrelator = function() {
        return _.Mg(this, 2)
    };
    var yl = function(a) {
        var b = new NC;
        return _.hj(a, 13, wl, b)
    };
    pl.da = [4];
    var wl = [6, 7, 8, 9, 11, 13, 14];
    var PC = function(a) {
        this.F = _.A(a)
    };
    _.T(PC, _.D);
    var QC = function(a) {
        this.F = _.A(a)
    };
    _.T(QC, _.D);
    var jq = function(a) {
        this.F = _.A(a)
    };
    _.T(jq, _.D);
    _.ej = function(a) {
        this.F = _.A(a)
    };
    _.T(_.ej, _.D);
    _.gj = [3, 4, 6];
    var RC;
    _.dj = function(a) {
        this.F = _.A(a)
    };
    _.T(_.dj, _.D);
    RC = function(a) {
        var b = new _.dj;
        return _.hj(b, 2, _.ij, a)
    };
    _.ij = [1, 2, 3, 4, 5];
    var $i = function(a) {
        this.F = _.A(a)
    };
    _.T($i, _.D);
    $i.prototype.getTagSessionCorrelator = function() {
        return _.Mg(this, 2)
    };
    $i.da = [4];
    var Nl = function(a) {
        this.F = _.A(a)
    };
    _.T(Nl, _.D);
    Nl.da = [3];
    var Ml = function(a) {
        this.F = _.A(a)
    };
    _.T(Ml, _.D);
    Ml.da = [4, 5];
    var Ll = function(a) {
        this.F = _.A(a)
    };
    _.T(Ll, _.D);
    Ll.prototype.getTagSessionCorrelator = function() {
        return _.Mg(this, 1)
    };
    Ll.da = [2];
    var Kl = function(a) {
        this.F = _.A(a)
    };
    _.T(Kl, _.D);
    var Ql = [4, 6];
    var SC = function(a) {
        this.F = _.A(a)
    };
    _.T(SC, _.D);
    SC.prototype.getTagSessionCorrelator = function() {
        return _.Mg(this, 1)
    };
    SC.prototype.getMessageId = function() {
        return _.gg(this, 8, 0)
    };
    SC.prototype.getMessageArgs = function(a) {
        return Oy(this, 9, a)
    };
    SC.da = [2, 9];
    var Ps = function(a) {
        this.F = _.A(a)
    };
    _.T(Ps, _.D);
    var Qs = function(a) {
        this.F = _.A(a)
    };
    _.T(Qs, _.D);
    var Rs = [3];
    var UC = function(a) {
            this.Sc = new TC(a)
        },
        TC = function(a) {
            this.ji = new VC(a);
            this.ue = new WC(a)
        },
        VC = function(a) {
            this.rk = new XC(a);
            this.refresh = new YC(a)
        },
        XC = function(a) {
            this.sk = new ZC(a)
        },
        ZC = function(a) {
            this.je = function(b) {
                var c = b.ne,
                    d = b.Pf,
                    e = b.oi,
                    f = b.pi;
                b = b.li;
                var g = IC("XVNPAd"),
                    h = new AC;
                d = fj(h, 2, BC, ed(Math.round(d)));
                a(JC(KC(KC(KC(KC(g, d), DC(new AC, e)), DC(new AC, f)), DC(new AC, b)), GC(new EC, c)))
            }
        },
        YC = function(a) {
            this.fm = new $C(a)
        },
        $C = function(a) {
            this.je = function(b) {
                var c = b.ne,
                    d = b.Gm;
                b = IC("e1Ueh");
                var e = new AC;
                d = fj(e, 2, BC, ed(Math.round(d)));
                a(JC(KC(b, d), GC(new EC, c)))
            }
        },
        WC = function(a) {
            this.ih = new aD(a);
            this.Zj = new bD(a);
            this.hk = new cD(a)
        },
        bD = function(a) {
            this.je = function(b) {
                b = b.ne;
                a(JC(IC("rsv8Kc"), GC(new EC, b)))
            }
        },
        cD = function(a) {
            this.Dc = function(b) {
                var c = b.Rc,
                    d = b.Of;
                b = b.status;
                d = KC(KC(IC("SOomke"), CC(new AC, d)), CC(new AC, b));
                b = new EC;
                c = fj(b, 2, FC, ed(Math.round(c)));
                a(JC(d, c))
            }
        },
        aD = function(a) {
            this.th = new dD(a)
        },
        dD = function(a) {
            this.Dc = function(b) {
                var c = b.Rc;
                b = b.status;
                b = KC(IC("TP3y1d"), CC(new AC, b));
                var d = new EC;
                c = fj(d, 2, FC, ed(Math.round(c)));
                a(JC(b, c))
            }
        },
        eD = function() {
            zC.apply(this, arguments);
            var a = this;
            this.Jc = new UC(function(b) {
                return a.pm(b)
            })
        };
    _.T(eD, zC);
    _.fD = function() {
        eD.apply(this, arguments)
    };
    _.T(_.fD, eD);
    _.q = _.fD.prototype;
    _.q.qm = function() {
        this.A.apply(this, _.ri(_.Ta.apply(0, arguments).map(function(a) {
            return {
                Xb: !0,
                Uc: 2,
                Ic: a.toJSON()
            }
        })))
    };
    _.q.Pc = function() {
        this.A.apply(this, _.ri(_.Ta.apply(0, arguments).map(function(a) {
            return {
                Xb: !0,
                Uc: 5,
                Ic: a.toJSON()
            }
        })))
    };
    _.q.hh = function() {
        this.A.apply(this, _.ri(_.Ta.apply(0, arguments).map(function(a) {
            return {
                Xb: !0,
                Uc: 15,
                Ic: a.toJSON()
            }
        })))
    };
    _.q.mj = ca(3);
    _.q.sm = function() {
        this.A.apply(this, _.ri(_.Ta.apply(0, arguments).map(function(a) {
            return {
                Xb: !0,
                Uc: 17,
                Ic: a.toJSON()
            }
        })))
    };
    _.q.vm = function() {
        this.A.apply(this, _.ri(_.Ta.apply(0, arguments).map(function(a) {
            return {
                Xb: !0,
                Uc: 21,
                Ic: a.toJSON()
            }
        })))
    };
    _.q.pm = function() {
        this.A.apply(this, _.ri(_.Ta.apply(0, arguments).map(function(a) {
            return {
                Xb: !1,
                Uc: 1,
                Ic: a.toJSON()
            }
        })))
    };
    var gD = function(a, b) {
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
    var hD = function(a, b, c, d, e, f, g, h) {
        _.fD.call(this, a, b);
        this.C = c;
        this.o = d;
        this.Da = e;
        this.I = f;
        this.J = g;
        this.M = h;
        this.g = [];
        this.l = null;
        this.D = !1
    };
    _.T(hD, _.fD);
    var iD = function(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.g.length) {
            var b = dg(a.g, a.j);
            a.o(a.C + "?e=1", b);
            a.g = []
        }
    };
    hD.prototype.A = function() {
        var a = _.Ta.apply(0, arguments),
            b = this;
        try {
            this.J && 65536 <= dg(this.g.concat(a), this.j).length && iD(this), this.M && !this.D && (this.D = !0, this.M.g(function() {
                iD(b)
            })), this.g.push.apply(this.g, _.ri(a)), this.g.length >= this.I && iD(this), this.g.length && null === this.l && (this.l = setTimeout(function() {
                iD(b)
            }, this.Da))
        } catch (c) {
            cg(c, this.j)
        }
    };
    var dw = function(a, b, c, d, e, f) {
        hD.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", gD, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!_.u.globalThis.fetch, f)
    };
    _.T(dw, hD);
    var jD = new oA(494575051),
        kD = new qA(489560439),
        lD = new qA(505762507);
    var mD, xo, vp, nD, oD, pD, qD, rD, sD, cv, bv, qv, tD, bw, uD, vD, wD, xD, Lo, yD, zD, AD, BD, Xr, CD, DD, ED, aw, FD, lv, GD, HD, Io, ID, OD, RD, jr, SD, Fl, Cu, UD, ar, VD, sq, WD, rq, XD, YD, ZD, Rt, Yt, $D, aE, bE, cE, dE, jv, eE, hv, fE, yn, vn, gE, hE, zk, Xu, jE, kE, lE, so, mE, Yu, Zk, nE, oE, pE, qE, Yk, Ot, $t, Pt, rE, sE, Qt, tE, uE, vE, wE, bt, Bs, xE, yE, ys, zE, oF, pF, qF, rF, sF, tF, uF, Rv, Sv, vF, Tv, Qv, wF, xF, Lt, Vv, yF;
    mD = new _.U(607106222);
    xo = new _.U(577939489, !0);
    vp = new oA(7, .1);
    nD = new _.U(212);
    oD = new _.U(561694963, !0);
    pD = new _.U(609732864);
    qD = new oA(462420536);
    rD = new _.U(476475256, !0);
    sD = new oA(438663674);
    cv = new oA(45409629);
    bv = new oA(522348973);
    qv = new oA(550605190);
    tD = new oA(564509649);
    bw = new oA(578655462, 20);
    _.qq = new _.U(571050247, !0);
    _.lq = new _.U(570864697, !0);
    uD = new _.U(558225291);
    vD = new _.U(586621833, !0);
    wD = new _.U(591917863);
    xD = new _.U(613699219);
    Lo = new _.U(45619539);
    yD = new _.U(582386403);
    zD = new _.U(603086552);
    AD = new _.U(577861852);
    BD = new _.U(573236024, !0);
    Xr = new _.U(453);
    CD = new _.U(454);
    DD = new oA(377289019, 1E4);
    ED = new oA(529, 20);
    aw = new oA(573282293, .01);
    FD = new pA(10);
    lv = new oA(610770343);
    GD = new _.U(610525552);
    HD = new _.U(360245597, !0);
    Io = new _.U(540043576, !0);
    ID = new oA(592342304);
    _.JD = new _.U(479390945);
    _.KD = new _.U(518650310);
    _.LD = new _.U(547020083);
    _.MD = new _.U(561164161, !0);
    _.ND = new oA(550718589, 250);
    OD = new _.U(586382198);
    _.PD = new _.U(600451522, !0);
    _.QD = new oA(609494714);
    RD = new oA(575880738, 10);
    jr = new oA(586681283);
    SD = new _.U(599186119, !0);
    _.TD = new _.U(531615531);
    Fl = new _.U(85);
    Cu = new _.U(524098256);
    UD = new _.U(595824397, !0);
    ar = new oA(532520346, 120);
    VD = new _.U(557870754, !0);
    sq = new _.U(614048762);
    WD = new qA(466086960);
    rq = new _.U(596058628, !0);
    XD = new oA(398776877, 6E4);
    YD = new oA(374201269, 6E4);
    ZD = new oA(371364213, 6E4);
    Rt = new _.U(606310399);
    Yt = new _.U(570764855, !0);
    $D = new pA(579921177, "control_1\\.\\d");
    aE = new oA(570764854, 50);
    bE = new _.U(578725095, !0);
    cE = new _.U(453275889);
    dE = new _.U(377936516, !0);
    jv = new oA(599575765, 1E3);
    eE = new _.U(605401295);
    hv = new oA(609715571);
    fE = new oA(24);
    yn = new qA(1);
    vn = new pA(2, "1-0-40");
    gE = new _.U(608664189);
    hE = new _.U(608330569);
    zk = new _.U(602464517);
    _.iE = new oA(506394061, 100);
    Xu = new qA(489);
    jE = new _.U(392065905);
    kE = new oA(360245595, 500);
    lE = new _.U(561985307);
    so = new _.U(45397804, !0);
    mE = new _.U(45398607, !0);
    Yu = new _.U(424117738);
    Zk = new _.U(531493729);
    nE = new _.U(563462360, !0);
    oE = new _.U(555237688);
    pE = new _.U(555237687);
    qE = new _.U(555237686);
    Yk = new _.U(507033477, !0);
    Ot = new _.U(399705355);
    $t = new _.U(45420038);
    Pt = new oA(514795754, 2);
    rE = new oA(609173130);
    sE = new _.U(607425748);
    Qt = new _.U(590730356);
    tE = new _.U(609118749);
    uE = new _.U(564724551);
    vE = new _.U(567489814, !0);
    wE = new _.U(45415915, !0);
    bt = new _.U(582338617, !0);
    Bs = new _.U(588117531);
    xE = new _.U(612823209);
    yE = new _.U(582287318, !0);
    ys = new oA(596918936, 500);
    zE = new oA(607730666);
    oF = new _.U(609053740);
    pF = new _.U(612834765);
    qF = new _.U(501);
    rF = new _.U(439828594);
    sF = new _.U(483962503);
    tF = new _.U(506738118);
    uF = new _.U(592060684);
    Rv = new _.U(77);
    Sv = new _.U(78);
    vF = new _.U(83);
    Tv = new _.U(80);
    Qv = new _.U(76);
    wF = new _.U(84);
    xF = new _.U(1958);
    Lt = new _.U(1973);
    Vv = new _.U(188);
    yF = new _.U(485990406);
    ya({
        Ln: 0,
        Kn: 1,
        Hn: 2,
        Cn: 3,
        In: 4,
        Dn: 5,
        Jn: 6,
        Fn: 7,
        Gn: 8,
        Bn: 9,
        En: 10,
        Mn: 11
    }).map(function(a) {
        return Number(a)
    });
    ya({
        On: 0,
        Pn: 1,
        Nn: 2
    }).map(function(a) {
        return Number(a)
    });
    var zF = function(a, b) {
        this.g = kg(a);
        this.A = b
    };
    zF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return this
    };
    zF.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.A.call(void 0, a.value),
            done: a.done
        }
    };
    var AF = function(a, b) {
            return new zF(a, b)
        },
        BF = function(a) {
            this.A = a;
            this.g = 0
        };
    BF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return this
    };
    BF.prototype.next = function() {
        for (; this.g < this.A.length;) {
            var a = this.A[this.g].next();
            if (!a.done) return a;
            this.g++
        }
        return {
            done: !0
        }
    };
    var CF = function() {
        return new BF(_.Ta.apply(0, arguments).map(kg))
    };
    var DF = _.t.URL,
        EF;
    try {
        new DF("http://example.com"), EF = !0
    } catch (a) {
        EF = !1
    }
    var FF = EF,
        GF = function(a) {
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
    GF.prototype.get = function(a) {
        return (a = this.g.get(a)) && a.length ? a[0] : null
    };
    GF.prototype.getAll = function(a) {
        return [].concat(_.ri(this.g.get(a) || []))
    };
    GF.prototype.has = function(a) {
        return this.g.has(a)
    };
    GF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return CF.apply(null, _.ri(AF(this.g, function(a) {
            var b = a[0];
            return AF(a[1], function(c) {
                return [b, c]
            })
        })))
    };
    GF.prototype.toString = function() {
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
        IF = function(a) {
            var b = _.IA(document, "A");
            try {
                _.kb(b, Pa(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if ("" === c || ":" === c || ":" != c[c.length - 1]) throw Error(a + " is not a valid URL.");
            if (!HF.has(c)) throw Error(a + " is not a valid URL.");
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
            HF.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        },
        mg = function(a) {
            if (FF) {
                try {
                    var b = new DF(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = HF.get(b.protocol);
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
            return IF(a)
        },
        HF = new _.u.Map([
            ["http:", "80"],
            ["https:", "443"],
            ["ws:", "80"],
            ["wss:", "443"],
            ["ftp:", "21"]
        ]),
        lg = function(a) {
            return FF && a.searchParams ? a.searchParams : new GF(a.search)
        };
    var JF = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.$f("IFRAME", b);
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
    var KF = function(a) {
        this.F = _.A(a)
    };
    _.T(KF, _.D);
    KF.da = [1, 2];
    var LF = function(a) {
        this.F = _.A(a)
    };
    _.T(LF, _.D);
    var Jg = If(LF);
    _.V = function() {
        this.M = this.M;
        this.Da = this.Da
    };
    _.V.prototype.M = !1;
    _.V.prototype.za = function() {
        this.M || (this.M = !0, this.A())
    };
    _.S = function(a, b) {
        _.kp(a, _.Uw(Ig, b))
    };
    _.kp = function(a, b) {
        a.M ? b() : (a.Da || (a.Da = []), a.Da.push(b))
    };
    _.V.prototype.A = function() {
        if (this.Da)
            for (; this.Da.length;) this.Da.shift()()
    };
    var MF = function(a, b, c, d) {
        _.V.call(this);
        this.H = b;
        this.C = c;
        this.o = d;
        this.D = new _.u.Map;
        this.K = 0;
        this.l = new _.u.Map;
        this.J = new _.u.Map;
        this.I = void 0;
        this.j = a
    };
    _.T(MF, _.V);
    MF.prototype.A = function() {
        delete this.g;
        this.D.clear();
        this.l.clear();
        this.J.clear();
        this.I && (_.ag(this.j, "message", this.I), delete this.I);
        delete this.j;
        delete this.o;
        _.V.prototype.A.call(this)
    };
    var NF = function(a) {
            if (a.g) return a.g;
            a.C && a.C(a.j) ? a.g = a.j : a.g = aB(a.j, a.H);
            var b;
            return null != (b = a.g) ? b : null
        },
        PF = function(a, b, c) {
            if (NF(a))
                if (a.g === a.j)(b = a.D.get(b)) && b(a.g, c);
                else {
                    var d = a.l.get(b);
                    if (d && d.kd) {
                        OF(a);
                        var e = ++a.K;
                        a.J.set(e, {
                            Kc: d.Kc,
                            zk: d.ae(c),
                            Ql: "addEventListener" === b
                        });
                        a.g.postMessage(d.kd(c, e), "*")
                    }
                }
        },
        OF = function(a) {
            a.I || (a.I = function(b) {
                try {
                    var c = a.o ? a.o(b) : void 0;
                    if (c) {
                        var d = c.Tg,
                            e = a.J.get(d);
                        if (e) {
                            e.Ql || a.J.delete(d);
                            var f;
                            null == (f = e.Kc) || f.call(e, e.zk, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.pb(a.j, "message", a.I))
        };
    var QF = function(a, b) {
            var c = {
                cb: function(d) {
                    d = Jg(d);
                    b.Tb({
                        tc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        RF = {
            ae: function(a) {
                return a.Tb
            },
            kd: function(a, b) {
                return {
                    __fciCall: {
                        callId: b,
                        command: a.command,
                        spsp: a.spsp || void 0
                    }
                }
            },
            Kc: function(a, b) {
                a({
                    tc: b
                })
            }
        },
        Gq = function(a) {
            _.V.call(this);
            this.g = this.l = !1;
            this.caller = new MF(a, "googlefcPresent", void 0, Ng);
            this.caller.D.set("getDataWithCallback", QF);
            this.caller.l.set("getDataWithCallback", RF)
        };
    _.T(Gq, _.V);
    Gq.prototype.A = function() {
        this.caller.za();
        _.V.prototype.A.call(this)
    };
    Gq.prototype.gd = function(a) {
        if (void 0 === a ? 0 : a) return !1;
        this.l || (this.g = !!NF(this.caller), this.l = !0);
        return this.g
    };
    var Eq = function(a) {
            return new _.u.Promise(function(b) {
                a.gd() && PF(a.caller, "getDataWithCallback", {
                    command: "loaded",
                    Tb: function(c) {
                        b(c.tc)
                    }
                })
            })
        },
        SF = function(a, b) {
            a.gd() && PF(a.caller, "getDataWithCallback", {
                command: "prov",
                spsp: cl(b),
                Tb: function() {}
            })
        };
    var TF = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        UF = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            this.l = a;
            this.g = null;
            this.D = {};
            this.o = 0;
            var c;
            this.J = null != (c = b.timeoutMs) ? c : 500;
            var d;
            this.I = null != (d = b.bk) ? d : !1;
            this.j = null
        };
    _.T(UF, _.V);
    UF.prototype.A = function() {
        this.D = {};
        this.j && (_.ag(this.l, "message", this.j), delete this.j);
        delete this.D;
        delete this.l;
        delete this.g;
        _.V.prototype.A.call(this)
    };
    var WF = function(a) {
        return "function" === typeof a.l.__tcfapi || null != VF(a)
    };
    UF.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = _.Ox(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.J && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.J));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = TF(c), c.internalBlockOnErrors = b.I, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            XF(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    UF.prototype.removeEventListener = function(a) {
        a && a.listenerId && XF(this, "removeEventListener", null, a.listenerId)
    };
    var ZF = function(a, b, c) {
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
            a = 0 === f ? a.purpose && a.vendor ? (c = YF(a.vendor.consents, void 0 === d ? "755" : d)) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : c && YF(a.purpose.consents, b) : !0 : 1 === f ? a.purpose && a.vendor ? YF(a.purpose.legitimateInterests, b) && YF(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return a
        },
        YF = function(a, b) {
            return !(!a || !a[b])
        },
        XF = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
            else if (VF(a)) {
                $F(a);
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
        VF = function(a) {
            if (a.g) return a.g;
            a.g = aB(a.l, "__tcfapiLocator");
            return a.g
        },
        $F = function(a) {
            a.j || (a.j = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.pb(a.l, "message", a.j))
        },
        aG = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = TF(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (eg({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        bG = function(a, b, c) {
            return !1 === a.gdprApplies ? !0 : b.every(function(d) {
                return ZF(a, d, c)
            })
        };
    var cG = function(a, b, c) {
            this.g = a;
            this.l = b;
            this.A = void 0 === c ? function() {} : c
        },
        dG = function(a, b, c) {
            return new cG(a, b, c)
        };
    cG.prototype.start = function(a, b) {
        a = void 0 === a ? !1 : a;
        if (this.g === this.g.top) try {
            JF(this.g), eG(this, a, b)
        } catch (c) {}
    };
    var eG = function(a, b, c) {
            b = void 0 === b ? !1 : b;
            var d = {};
            try {
                var e = ng(a.g),
                    f = Fg(a.g);
                d.fc = e;
                d.fctype = f
            } catch (h) {}
            try {
                var g = Hg(a.g.location.href)
            } catch (h) {}
            b && g && (d.href = g);
            b = fG(a.l, d);
            jg(a.g, b, function() {
                a.A(!0)
            }, function() {
                a.A(!1)
            });
            c && SF(new Gq(a.g), c)
        },
        fG = function(a, b) {
            var c = new ax(Zw, "https://fundingchoicesmessages.google.com/i/%{id}");
            b = _.z(Object, "assign").call(Object, {}, b, {
                ers: 3
            });
            return _.fx(ix(c, {
                id: a
            }), b)
        };
    var gG = _.u.Promise;
    var hG = function(a) {
        this.A = a
    };
    hG.prototype.send = function(a, b, c) {
        this.A.then(function(d) {
            d.send(a, b, c)
        })
    };
    hG.prototype.g = function(a, b) {
        return this.A.then(function(c) {
            return c.g(a, b)
        })
    };
    var iG = function(a) {
        this.data = a
    };
    var jG = function(a) {
        this.A = a
    };
    jG.prototype.send = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        kG(d.port1, b);
        this.A.postMessage(a, [d.port2].concat(c))
    };
    jG.prototype.g = function(a, b) {
        var c = this;
        return new gG(function(d) {
            c.send(a, d, b)
        })
    };
    var lG = function(a, b) {
            kG(a, b);
            return new jG(a)
        },
        kG = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new iG(c.data, lG(c.ports[0])))
            })
        };
    var Wk = function(a) {
            var b = a.ub,
                c = void 0 === a.zb ? "ZNWN1d" : a.zb,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.nf ? void 0 : a.nf;
            return mG({
                destination: a.destination,
                hi: function() {
                    return b.contentWindow
                },
                Gl: nG(a.origin),
                zb: c,
                onMessage: d,
                nf: e
            })
        },
        mG = function(a) {
            var b = a.destination,
                c = a.hi,
                d = a.Gl,
                e = void 0 === a.qe ? void 0 : a.qe,
                f = a.zb,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.nf ? void 0 : a.nf,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new hG(new gG(function(l, m) {
                var n = function(p) {
                    p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(lG(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        nG = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var Wg = function(a) {
            return "string" === typeof a
        },
        yo = function(a) {
            return "boolean" === typeof a
        },
        Sg = function(a) {
            return !!a && ("object" === typeof a || "function" === typeof a)
        },
        xt = Ug(),
        Vg = Ug();
    var oG = navigator,
        pG = function(a) {
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
        qG = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return pG(a.toLowerCase())
        },
        rG = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        sG = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        tG = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var yp = function() {
        this.data = [];
        this.g = -1
    };
    yp.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.z(Number, "isInteger").call(Number, a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
    };
    yp.prototype.get = function(a) {
        return !!this.data[a]
    };
    var Ap = function(a) {
        -1 === a.g && (a.g = a.data.reduce(function(b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.g
    };
    var uG = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Tb({
                    tc: null != c ? c : void 0,
                    Oe: d ? void 0 : 2
                })
            })
        },
        vG = {
            ae: function(a) {
                return a.Tb
            },
            kd: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            Kc: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    tc: null != (c = b.returnValue) ? c : void 0,
                    Oe: b.success ? void 0 : 2
                })
            }
        },
        wG = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            var c;
            this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
            this.caller = new MF(a, "__uspapiLocator", function(d) {
                return "function" === typeof d.__uspapi
            }, Zg);
            this.caller.D.set("getDataWithCallback", uG);
            this.caller.l.set("getDataWithCallback", vG)
        };
    _.T(wG, _.V);
    wG.prototype.A = function() {
        this.caller.za();
        _.V.prototype.A.call(this)
    };
    var xG = function(a, b) {
        var c = {};
        if (NF(a.caller)) {
            var d = _.Ox(function() {
                b(c)
            });
            PF(a.caller, "getDataWithCallback", {
                Tb: function(e) {
                    e.Oe || (c = e.tc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var eh = function(a) {
            this.g = a || {
                cookie: ""
            }
        },
        AG = function() {
            var a = yG;
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Ag: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            zG(a, "TESTCOOKIESENABLED");
            return !0
        };
    eh.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Co;
            d = c.nm || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Ag
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    eh.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = px(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var zG = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Ag: 0,
            path: c,
            domain: d
        })
    };
    eh.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    eh.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = px(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) zG(this, b[a])
    };
    var yG = new eh("undefined" == typeof document ? null : document);
    var BG = function(a, b) {
        this.g = a;
        this.options = b
    };
    var CG = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        DG = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        EG = function(a, b) {
            (0, a.__gpp)("getSection", function(c) {
                b.Tb({
                    tc: null != c ? c : void 0,
                    Oe: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        FG = {
            ae: function(a) {
                return a.listener
            },
            kd: function(a, b) {
                a = {};
                return a.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, a
            },
            Kc: function(a, b) {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        GG = {
            ae: function(a) {
                return a.listener
            },
            kd: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }, c
            },
            Kc: function(a, b) {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                null == a || a(c, b.success)
            }
        },
        HG = {
            ae: function(a) {
                return a.Tb
            },
            kd: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "getSection",
                    version: "1.1",
                    parameter: a.apiPrefix
                }, c
            },
            Kc: function(a, b) {
                b = b.__gppReturn;
                var c;
                a({
                    tc: null != (c = b.returnValue) ? c : void 0,
                    Oe: b.success ? void 0 : 2
                })
            }
        },
        IG = function(a, b) {
            var c = void 0 === b ? {} : b;
            b = c.gppApiDetectionMode;
            var d = c.timeoutMs;
            c = c.addListenerRemovalCallback;
            _.V.call(this);
            this.caller = new MF(a, b && 1 !== b && 3 !== b ? "__gppLocator_non_existent" : "__gppLocator", b && 1 !== b && 2 !== b ? void 0 : function(e) {
                return "function" === typeof e.__gpp
            }, $g);
            this.caller.D.set("addEventListener", CG);
            this.caller.l.set("addEventListener", FG);
            this.caller.D.set("removeEventListener", DG);
            this.caller.l.set("removeEventListener", GG);
            this.caller.D.set("getDataWithCallback", EG);
            this.caller.l.set("getDataWithCallback", HG);
            this.timeoutMs = null != d ? d : 500;
            this.addListenerRemovalCallback = c
        };
    _.T(IG, _.V);
    IG.prototype.A = function() {
        this.caller.za();
        _.V.prototype.A.call(this)
    };
    IG.prototype.addEventListener = function(a) {
        var b = this,
            c = _.Ox(function() {
                a(JG, !0)
            }),
            d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        PF(this.caller, "addEventListener", {
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
                        a(KG, !0);
                        return
                    }
                    a(LG, !0)
                }
            }
        })
    };
    IG.prototype.removeEventListener = function(a) {
        PF(this.caller, "removeEventListener", {
            listener: this.addListenerRemovalCallback ? function() {} : void 0,
            listenerId: a
        })
    };
    var MG = function(a) {
            if (!a) return !1;
            var b = Rf(a.split("~")[0]),
                c = Sf(b.slice(0, 6)),
                d = Sf(b.slice(6, 12)),
                e = new HB;
            var f = _.vl(e, 1, c);
            var g = _.vl(f, 2, d);
            for (var h = b.slice(12), k = Sf(h.slice(0, 12)), l = [], m = h.slice(12).replace(/0+$/, ""), n = 0; n < k; n++) {
                if (0 === m.length) throw Error("Found " + n + " of " + k + " sections [" + l + "] but reached end of input [" + h + "]");
                var p = 0 === Sf(m[0]);
                m = m.slice(1);
                var r = Vf(m, h),
                    v = 0 === l.length ? 0 : l[l.length - 1],
                    w = Tf(r) + v;
                m = m.slice(r.length);
                if (p) l.push(w);
                else {
                    for (var x = Vf(m, h), B = Tf(x), C = 0; C <= B; C++) l.push(w + C);
                    m = m.slice(x.length)
                }
            }
            if (0 < m.length) throw Error("Found " + k + " sections [" + l + "] but has remaining input [" + m + "], entire input [" + h + "]");
            var F = _.Je(g, 3, l, Wc);
            var G = _.z(a, "includes").call(a, "~") ? a.split("~").slice(1) : [];
            for (var P = 0; P < ve(F, 3, Xc, 2).length; ++P) {
                var R = ve(F, 3, Xc, 2)[P],
                    L = G[P];
                switch (R) {
                    case 8:
                        if (0 === L.length) throw Error("Cannot decode empty USCA section string.");
                        var Z = L.split(".");
                        if (2 < Z.length) throw Error("Expected at most 1 sub-section but got " + (Z.length - 1) + " when decoding " + L + ".");
                        var qa = void 0,
                            wa = void 0,
                            aa = void 0,
                            ia = void 0,
                            wb = void 0,
                            Ua = void 0,
                            db = void 0,
                            Ab = void 0,
                            Ra = void 0,
                            Ib = void 0,
                            jd = void 0,
                            cc = void 0,
                            $b = void 0,
                            Fc = void 0,
                            jc = void 0,
                            dc = void 0,
                            Id = void 0,
                            Pc = void 0,
                            nf = void 0,
                            we = void 0,
                            Jd = void 0,
                            og = void 0,
                            pg = void 0,
                            of = Z[0];
                        if (0 === of .length) throw Error("Cannot decode empty core segment string.");
                        var Qc = Uf( of , PB),
                            Kd = Sf(Qc.slice(0, 6));
                        Qc = Qc.slice(6);
                        if (1 !== Kd) throw Error("Unable to decode unsupported USCA Section specification version " + Kd + " - only version 1 is supported.");
                        for (var xe = 0, Wa = [], Qb = 0; Qb < OB.length; Qb++) {
                            var pf = OB[Qb];
                            Wa.push(Sf(Qc.slice(xe, xe + pf)));
                            xe += pf
                        }
                        var qg = new KB;
                        pg = _.vl(qg, 1, Kd);
                        var Ah = Wa.shift();
                        og = _.K(pg, 2, Ah);
                        var Ld = Wa.shift();
                        Jd = _.K(og, 3, Ld);
                        var Md = Wa.shift();
                        we = _.K(Jd, 4, Md);
                        var mj = Wa.shift();
                        nf = _.K(we, 5, mj);
                        var nj = Wa.shift();
                        Pc = _.K(nf, 6, nj);
                        var oj = new JB,
                            Bh = Wa.shift();
                        Id = _.K(oj, 1, Bh);
                        var qf = Wa.shift();
                        dc = _.K(Id, 2, qf);
                        var Ch = Wa.shift();
                        jc = _.K(dc, 3, Ch);
                        var rg = Wa.shift();
                        Fc = _.K(jc, 4, rg);
                        var rf = Wa.shift();
                        $b = _.K(Fc, 5, rf);
                        var Dh = Wa.shift();
                        cc = _.K($b, 6, Dh);
                        var Eh = Wa.shift();
                        jd = _.K(cc, 7, Eh);
                        var Fh = Wa.shift();
                        Ib = _.K(jd, 8, Fh);
                        var Gh = Wa.shift();
                        Ra = _.K(Ib, 9, Gh);
                        Ab = _.ci(Pc, 7, Ra);
                        var Hh = new IB,
                            Gc = Wa.shift();
                        db = _.K(Hh, 1, Gc);
                        var sg = Wa.shift();
                        Ua = _.K(db, 2, sg);
                        wb = _.ci(Ab, 8, Ua);
                        var Rc = Wa.shift();
                        ia = _.K(wb, 9, Rc);
                        var tg = Wa.shift();
                        aa = _.K(ia, 10, tg);
                        var kd = Wa.shift();
                        wa = _.K(aa, 11, kd);
                        var Sc = Wa.shift();
                        var ug = qa = _.K(wa, 12, Sc);
                        if (1 === Z.length) var vg = NB(ug);
                        else {
                            var wg = NB(ug),
                                ye = void 0,
                                xg = void 0,
                                sf = void 0,
                                ze = Z[1];
                            if (0 === ze.length) throw Error("Cannot decode empty GPC segment string.");
                            var pc = Uf(ze, 3),
                                Ae = Sf(pc.slice(0, 2));
                            if (0 > Ae || 1 < Ae) throw Error("Attempting to decode unknown GPC segment subsection type " + Ae + ".");
                            sf = Ae + 1;
                            var pj = Sf(pc.charAt(2)),
                                Be = new LB;
                            xg = _.K(Be, 2, sf);
                            ye = _.ul(xg, 1, !!pj);
                            vg = _.ci(wg, 2, ye)
                        }
                        var yg = _.vm(vg, KB, 1);
                        if (1 === _.gg(yg, 5, 0) || 1 === _.gg(yg, 6, 0)) return !0;
                        break;
                    case 10:
                        if (0 === L.length) throw Error("Cannot decode empty USCO section string.");
                        var ld = L.split(".");
                        if (2 < ld.length) throw Error("Expected at most 2 segments but got " + ld.length + " when decoding " + L + ".");
                        var Rb = void 0,
                            Ih = void 0,
                            Nd = void 0,
                            Ce = void 0,
                            Jh = void 0,
                            tf = void 0,
                            uf = void 0,
                            Bb = void 0,
                            Kh = void 0,
                            Od = void 0,
                            zg = void 0,
                            Pd = void 0,
                            Ag = void 0,
                            md = void 0,
                            Bg = void 0,
                            Cg = void 0,
                            vf = void 0,
                            Dg = void 0,
                            Eg = ld[0];
                        if (0 === Eg.length) throw Error("Cannot decode empty core segment string.");
                        var Tc = Uf(Eg, WB),
                            wf = Sf(Tc.slice(0, 6));
                        Tc = Tc.slice(6);
                        if (1 !== wf) throw Error("Unable to decode unsupported USCO Section specification version " + wf + " - only version 1 is supported.");
                        for (var Qd = 0, Db = [], Kg = 0; Kg < VB.length; Kg++) {
                            var Oj = VB[Kg];
                            Db.push(Sf(Tc.slice(Qd, Qd + Oj)));
                            Qd += Oj
                        }
                        var on = new RB;
                        Dg = _.vl(on, 1, wf);
                        var Lg = Db.shift();
                        vf = _.K(Dg, 2, Lg);
                        var dU = Db.shift();
                        Cg = _.K(vf, 3, dU);
                        var eU = Db.shift();
                        Bg = _.K(Cg, 4, eU);
                        var fU = Db.shift();
                        md = _.K(Bg, 5, fU);
                        var gU = Db.shift();
                        Ag = _.K(md, 6, gU);
                        var hU = new QB,
                            iU = Db.shift();
                        Pd = _.K(hU, 1, iU);
                        var jU = Db.shift();
                        zg = _.K(Pd, 2, jU);
                        var kU = Db.shift();
                        Od = _.K(zg, 3, kU);
                        var lU = Db.shift();
                        Kh = _.K(Od, 4, lU);
                        var mU = Db.shift();
                        Bb = _.K(Kh, 5, mU);
                        var nU = Db.shift();
                        uf = _.K(Bb, 6, nU);
                        var oU = Db.shift();
                        tf = _.K(uf, 7, oU);
                        Jh = _.ci(Ag, 7, tf);
                        var pU = Db.shift();
                        Ce = _.K(Jh, 8, pU);
                        var qU = Db.shift();
                        Nd = _.K(Ce, 9, qU);
                        var rU = Db.shift();
                        Ih = _.K(Nd, 10, rU);
                        var sU = Db.shift();
                        var AE = Rb = _.K(Ih, 11, sU);
                        if (1 === ld.length) var BE = UB(AE);
                        else {
                            var tU = UB(AE),
                                CE = void 0,
                                DE = void 0,
                                EE = void 0,
                                FE = ld[1];
                            if (0 === FE.length) throw Error("Cannot decode empty GPC segment string.");
                            var GE = Uf(FE, 3),
                                pn = Sf(GE.slice(0, 2));
                            if (0 > pn || 1 < pn) throw Error("Attempting to decode unknown GPC segment subsection type " + pn + ".");
                            EE = pn + 1;
                            var uU = Sf(GE.charAt(2)),
                                vU = new SB;
                            DE = _.K(vU, 2, EE);
                            CE = _.ul(DE, 1, !!uU);
                            BE = _.ci(tU, 2, CE)
                        }
                        var HE = _.vm(BE, RB, 1);
                        if (1 === _.gg(HE, 5, 0) || 1 === _.gg(HE, 6, 0)) return !0;
                        break;
                    case 12:
                        if (0 === L.length) throw Error("Cannot decode empty usct section string.");
                        var Pj = L.split(".");
                        if (2 < Pj.length) throw Error("Expected at most 2 segments but got " + Pj.length + " when decoding " + L + ".");
                        var wU = void 0,
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
                            UE = void 0,
                            VE = void 0,
                            WE = void 0,
                            XE = void 0,
                            YE = void 0,
                            ZE = void 0,
                            $E = void 0,
                            aF = void 0,
                            bF = void 0,
                            cF = Pj[0];
                        if (0 === cF.length) throw Error("Cannot decode empty core segment string.");
                        var qn = Uf(cF, dC),
                            Et = Sf(qn.slice(0, 6));
                        qn = qn.slice(6);
                        if (1 !== Et) throw Error("Unable to decode unsupported USCT Section specification version " + Et + " - only version 1 is supported.");
                        for (var Ft = 0, Eb = [], Gt = 0; Gt < cC.length; Gt++) {
                            var dF = cC[Gt];
                            Eb.push(Sf(qn.slice(Ft, Ft + dF)));
                            Ft += dF
                        }
                        var xU = new ZB;
                        bF = _.vl(xU, 1, Et);
                        var yU = Eb.shift();
                        aF = _.K(bF, 2, yU);
                        var zU = Eb.shift();
                        $E = _.K(aF, 3, zU);
                        var AU = Eb.shift();
                        ZE = _.K($E, 4, AU);
                        var BU = Eb.shift();
                        YE = _.K(ZE, 5, BU);
                        var CU = Eb.shift();
                        XE = _.K(YE, 6, CU);
                        var DU = new YB,
                            EU = Eb.shift();
                        WE = _.K(DU, 1, EU);
                        var FU = Eb.shift();
                        VE = _.K(WE, 2, FU);
                        var GU = Eb.shift();
                        UE = _.K(VE, 3, GU);
                        var HU = Eb.shift();
                        TE = _.K(UE, 4, HU);
                        var IU = Eb.shift();
                        SE = _.K(TE, 5, IU);
                        var JU = Eb.shift();
                        RE = _.K(SE, 6, JU);
                        var KU = Eb.shift();
                        QE = _.K(RE, 7, KU);
                        var LU = Eb.shift();
                        PE = _.K(QE, 8, LU);
                        OE = _.ci(XE, 7, PE);
                        var MU = new XB,
                            NU = Eb.shift();
                        NE = _.K(MU, 1, NU);
                        var OU = Eb.shift();
                        ME = _.K(NE, 2, OU);
                        var PU = Eb.shift();
                        LE = _.K(ME, 3, PU);
                        KE = _.ci(OE, 8, LE);
                        var QU = Eb.shift();
                        JE = _.K(KE, 9, QU);
                        var RU = Eb.shift();
                        IE = _.K(JE, 10, RU);
                        var SU = Eb.shift();
                        var eF = wU = _.K(IE, 11, SU);
                        if (1 === Pj.length) var fF = bC(eF);
                        else {
                            var TU = bC(eF),
                                gF = void 0,
                                hF = void 0,
                                iF = void 0,
                                jF = Pj[1];
                            if (0 === jF.length) throw Error("Cannot decode empty GPC segment string.");
                            var kF = Uf(jF, 3),
                                rn = Sf(kF.slice(0, 2));
                            if (0 > rn || 1 < rn) throw Error("Attempting to decode unknown GPC segment subsection type " + rn + ".");
                            iF = rn + 1;
                            var UU = Sf(kF.charAt(2)),
                                VU = new $B;
                            hF = _.K(VU, 2, iF);
                            gF = _.ul(hF, 1, !!UU);
                            fF = _.ci(TU, 2, gF)
                        }
                        var lF = _.vm(fF, ZB, 1);
                        if (1 === _.gg(lF, 5, 0) || 1 === _.gg(lF, 6, 0)) return !0;
                        break;
                    case 9:
                        if (0 === L.length) throw Error("Cannot decode empty USVA section string.");
                        var sn = Uf(L, hC),
                            Ht = Sf(sn.slice(0, 6));
                        sn = sn.slice(6);
                        if (1 !== Ht) throw Error("Unable to decode unsupported USVA Section specification version " + Ht + " - only version 1 is supported.");
                        for (var It = 0, Tb = [], Jt = 0; Jt < gC.length; Jt++) {
                            var mF = gC[Jt];
                            Tb.push(Sf(sn.slice(It, It + mF)));
                            It += mF
                        }
                        var WU = Ht,
                            XU = new fC,
                            YU = _.vl(XU, 1, WU),
                            ZU = Tb.shift(),
                            $U = _.K(YU, 2, ZU),
                            aV = Tb.shift(),
                            bV = _.K($U, 3, aV),
                            cV = Tb.shift(),
                            dV = _.K(bV, 4, cV),
                            eV = Tb.shift(),
                            fV = _.K(dV, 5, eV),
                            gV = Tb.shift();
                        var hV = _.K(fV, 6, gV);
                        var iV = new eC,
                            jV = Tb.shift(),
                            kV = _.K(iV, 1, jV),
                            lV = Tb.shift(),
                            mV = _.K(kV, 2, lV),
                            nV = Tb.shift(),
                            oV = _.K(mV, 3, nV),
                            pV = Tb.shift(),
                            qV = _.K(oV, 4, pV),
                            rV = Tb.shift(),
                            sV = _.K(qV, 5, rV),
                            tV = Tb.shift(),
                            uV = _.K(sV, 6, tV),
                            vV = Tb.shift(),
                            wV = _.K(uV, 7, vV),
                            xV = Tb.shift();
                        var yV = _.K(wV, 8, xV);
                        var zV = _.ci(hV, 7, yV),
                            AV = Tb.shift(),
                            BV = _.K(zV, 8, AV),
                            CV = Tb.shift(),
                            DV = _.K(BV, 9, CV),
                            EV = Tb.shift(),
                            FV = _.K(DV, 10, EV),
                            GV = Tb.shift(),
                            nF = _.K(FV, 11, GV);
                        if (1 === _.gg(nF, 5, 0) || 1 === _.gg(nF, 6, 0)) return !0
                }
            }
            return !1
        },
        LG = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        JG = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        KG = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };
    var uo = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, uo.prototype)
    };
    _.T(uo, Error);
    uo.prototype.name = "PublisherInputError";
    var NG = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, NG.prototype)
    };
    _.T(NG, Error);
    NG.prototype.name = "ServerError";
    var OG = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, OG.prototype)
    };
    _.T(OG, Error);
    OG.prototype.name = "NetworkError";
    var hh = function() {};
    hh.prototype.g = function() {};
    hh.prototype.l = function() {};
    hh.prototype.A = function() {
        return []
    };
    hh.prototype.j = function() {
        return []
    };
    var th = function(a, b) {
        a.g = gh(1, b, function() {});
        a.A = function(c, d) {
            return gh(2, b, function() {
                return []
            })(c, 2, d)
        };
        a.j = function() {
            return gh(3, b, function() {
                return []
            })(2)
        };
        a.l = function(c) {
            gh(16, b, function() {})(c, 2)
        }
    };
    var rh = function() {
            this.g = function() {}
        },
        vh = function(a, b) {
            a.g = gh(14, b, function() {})
        };
    var Bm = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Mm(b.innerWidth, b.innerHeight)).round() : _.EA(b || window).round()
            } catch (d) {
                return new _.Mm(-12245933, -12245933)
            }
        },
        PG = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        Uu = function(a, b) {
            b = void 0 === b ? _.t : b;
            a = a.scrollingElement || PG(a);
            return new _.Im(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        Wm = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var QG = function(a) {
        this.F = _.A(a)
    };
    _.T(QG, _.D);
    QG.prototype.pi = function() {
        return _.Bi(this, 1)
    };
    QG.prototype.oi = function() {
        return _.Bi(this, 2)
    };
    var bh = function(a) {
            return _.Q(a, 5)
        },
        RG = function(a, b) {
            Th(a, 13, b)
        },
        SG = function(a, b) {
            Th(a, 12, b)
        },
        TG = function(a, b) {
            return _.Je(a, 10, b, _.dd)
        },
        UG = function(a, b) {
            return li(a, 11, b)
        };
    QG.prototype.li = function() {
        return _.Bi(this, 11)
    };
    QG.da = [10];
    var WG, XG, YG;
    _.VG = function(a) {
        this.g = a;
        this.A = 0
    };
    WG = function(a, b) {
        if (0 === a.A) {
            if (_.Jn(a, "__gads", b)) b = !0;
            else {
                var c = a.g;
                bh(b) && dh(c) && (new eh(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === fh("GoogleAdServingTest", b, a.g)) {
                    var d = a.g;
                    bh(b) && dh(d) && zG(new eh(d.document), "GoogleAdServingTest")
                }
                b = c
            }
            a.A = b ? 2 : 1
        }
        return 2 === a.A
    };
    _.Jn = function(a, b, c) {
        return c ? fh(b, c, a.g) : null
    };
    XG = function(a, b, c, d) {
        if (d) {
            var e = _.Mg(c, 2) - Date.now() / 1E3;
            e = {
                Ag: Math.max(e, 0),
                path: _.I(c, 3),
                domain: _.I(c, 4),
                nm: !1
            };
            c = c.getValue();
            a = a.g;
            bh(d) && dh(a) && (new eh(a.document)).set(b, c, e)
        }
    };
    YG = function(a, b, c) {
        if (c && fh(b, c, a.g)) {
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
                bh(c) && dh(g) && zG(new eh(g.document), f, "/", e.value)
            }
        }
    };
    var ZG = {},
        $G = (ZG[3] = eb(bx(new ax(Zw, "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), ZG);
    ({})[3] = eb(bx(new ax(Zw, "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var aH = function(a) {
            this.g = a;
            this.A = vA()
        },
        bH = function(a) {
            var b = {};
            _.Ww(a, function(c) {
                b[c.g] = c.A
            });
            return b
        };
    _.cH = _.pw(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var dH = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.zb = a;
        this.status = 1;
        this.j = b;
        this.l = c;
        this.H = d;
        this.Wd = !!e;
        this.D = Math.random();
        this.I = {};
        this.g = null;
        this.J = (0, _.Tw)(this.C, this);
        this.U = f
    };
    _.T(dH, _.V);
    dH.prototype.C = function(a) {
        if (!("*" !== this.l && a.origin !== this.l || !this.Wd && a.source != this.j)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ja(b) && (a = b.i, b.c === this.zb && a != this.D)) {
                if (2 !== this.status) try {
                    this.status = 2, eH(this), this.g && (this.g(), this.g = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ja(b)) && this.I.hasOwnProperty(a)) this.I[a](b)
            }
        }
    };
    var eH = function(a) {
        var b = {};
        b.c = a.zb;
        b.i = a.D;
        a.U && (b.e = a.U);
        a.j.postMessage(JSON.stringify(b), a.l)
    };
    dH.prototype.o = function() {
        if (1 === this.status) {
            try {
                this.j.postMessage && eH(this)
            } catch (a) {}
            window.setTimeout((0, _.Tw)(this.o, this), 50)
        }
    };
    dH.prototype.connect = function(a) {
        a && (this.g = a);
        _.pb(window, "message", this.J);
        this.H && this.o()
    };
    var fH = function(a, b, c) {
        a.I[b] = c
    };
    dH.prototype.send = function(a, b) {
        var c = {};
        c.c = this.zb;
        c.i = this.D;
        c.s = a;
        c.p = b;
        try {
            this.j.postMessage(JSON.stringify(c), this.l)
        } catch (d) {}
    };
    dH.prototype.A = function() {
        this.status = 3;
        _.ag(window, "message", this.J);
        _.V.prototype.A.call(this)
    };
    var gH = new _.u.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        hH = new _.u.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var iH = function(a) {
        this.F = _.A(a)
    };
    _.T(iH, _.D);
    var jH = If(iH);
    var kH = function(a) {
        this.F = _.A(a)
    };
    _.T(kH, _.D);
    var lH = function(a) {
        this.F = _.A(a)
    };
    _.T(lH, _.D);
    var mH, nH, oH, pH;
    _.Nr = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    mH = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    nH = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    oH = function(a, b) {
        if (3 == _.Nr(b)) return !1;
        a();
        return !0
    };
    pH = function(a, b) {
        var c = !0;
        c = void 0 === c ? !1 : c;
        if (!oH(a, b))
            if (c) {
                var d = function() {
                    _.ag(b, "prerenderingchange", d);
                    a()
                };
                _.pb(b, "prerenderingchange", d)
            } else {
                var e = !1,
                    f = mH(b),
                    g = function() {
                        !e && oH(a, b) && (e = !0, _.ag(b, f, g))
                    };
                f && _.pb(b, f, g)
            }
    };
    _.xh = function() {
        var a = this;
        this.promise = new _.u.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    _.qH = function() {
        this.g = Math.random()
    };
    _.Zi = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .001)) try {
            if (c instanceof _.sC) var f = c;
            else f = new _.sC, _.Cn(c, function(h, k) {
                var l = f,
                    m = l.j++;
                h = _.tC(k, h);
                l.g.push(m);
                l.A[m] = h
            });
            var g = xC(f, "/pagead/gen_204?id=" + b + "&");
            g && yC(_.t, g)
        } catch (h) {}
    };
    var xi = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        vi = new _.u.Map;
    var rH = function(a) {
        this.F = _.A(a)
    };
    _.T(rH, _.D);
    var sH = function(a) {
        this.F = _.A(a)
    };
    _.T(sH, _.D);
    var tH = function(a, b) {
        return _.Je(a, 1, b, _.rd)
    };
    sH.da = [1];
    var uH = function(a) {
        this.F = _.A(a)
    };
    _.T(uH, _.D);
    var vH = function(a, b) {
        return _.Je(a, 1, b, Yc)
    };
    uH.da = [1, 2];
    var wH = function(a) {
        this.F = _.A(a)
    };
    _.T(wH, _.D);
    var xH = function(a) {
        this.F = _.A(a)
    };
    _.T(xH, _.D);
    var yH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, yH.prototype);
        this.name = "InputError"
    };
    _.T(yH, Error);
    var zH = function() {
            this.gb = !1
        },
        AH = function() {
            zH.apply(this, arguments);
            this.td = new _.xh
        };
    _.T(AH, zH);
    var BH = function(a, b) {
        a.gb || (a.gb = !0, a.ge = b, a.td.resolve(b))
    };
    _.kw.Object.defineProperties(AH.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.td.promise
            }
        },
        Oc: {
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
                return this.fe
            }
        }
    });
    var Yp = function() {
        AH.apply(this, arguments)
    };
    _.T(Yp, AH);
    _.q = Yp.prototype;
    _.q.G = function(a) {
        BH(this, a)
    };
    _.q.Ha = function(a) {
        BH(this, null != a ? a : null)
    };
    _.q.ca = function() {
        BH(this, null)
    };
    _.q.La = function(a) {
        var b = this;
        a.then(function(c) {
            BH(b, c)
        })
    };
    _.q.ib = function(a) {
        this.gb || (this.gb = !0, this.ge = null, this.fe = a, this.td.reject(a))
    };
    var CH = function() {
        AH.apply(this, arguments)
    };
    _.T(CH, AH);
    CH.prototype.G = function(a) {
        BH(this, a)
    };
    CH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void BH(b, c)
        })
    };
    CH.prototype.ib = function(a) {
        this.gb || (this.gb = !0, this.fe = a, this.td.reject(a))
    };
    var DH = function() {
        CH.apply(this, arguments)
    };
    _.T(DH, CH);
    DH.prototype.Ha = function(a) {
        BH(this, null != a ? a : null)
    };
    DH.prototype.ca = function() {
        BH(this, null)
    };
    DH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.Ha(c)
        })
    };
    var EH = function(a) {
        this.gb = !1;
        this.Yb = a
    };
    _.T(EH, zH);
    EH.prototype.Oc = function() {
        return this.Yb.gb
    };
    EH.prototype.pg = function() {
        return null != this.Yb.ge
    };
    _.kw.Object.defineProperties(EH.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Yb.fe
            }
        }
    });
    var FH = function(a) {
        EH.call(this, a);
        this.Yb = a
    };
    _.T(FH, EH);
    _.kw.Object.defineProperties(FH.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Yb.ge
            }
        }
    });
    var GH = function(a) {
        EH.call(this, a);
        this.Yb = a
    };
    _.T(GH, EH);
    _.kw.Object.defineProperties(GH.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.Yb.ge) ? a : null
            }
        }
    });
    var HH = function() {
        EH.apply(this, arguments)
    };
    _.T(HH, EH);
    _.kw.Object.defineProperties(HH.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.Yb.ge) ? a : null
            }
        }
    });
    var Or = function() {
        AH.apply(this, arguments)
    };
    _.T(Or, AH);
    Or.prototype.notify = function() {
        BH(this, null)
    };
    var IH = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        JH = function(a, b) {
            b = void 0 === b ? !1 : b;
            AH.call(this);
            var c = this;
            a = a.map(function(d) {
                return d.promise.then(function(e) {
                    if (b || null != e) return e;
                    throw e;
                }, function(e) {
                    c.gb = !0;
                    c.fe = e;
                    c.td.reject(e);
                    return null
                })
            });
            _.z(_.u.Promise, "any").call(_.u.Promise, a).then(function(d) {
                c.gb || BH(c, d)
            }, function() {
                c.gb || BH(c, null)
            })
        };
    _.T(JH, AH);
    var KH = function() {
        _.V.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = [];
        this.D = []
    };
    _.T(KH, _.V);
    var LH = function(a, b, c) {
        a.j.push({
            Jd: void 0 === c ? !1 : c,
            Uh: b
        })
    };
    KH.prototype.A = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        this.D.length = 0;
        _.V.prototype.A.call(this)
    };
    var MH = function(a, b, c) {
        _.V.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.ia = c;
        this.started = !1;
        this.D = new KH;
        _.S(this, this.D)
    };
    _.T(MH, _.V);
    MH.prototype.start = function() {
        var a = this,
            b;
        return _.rb(function(c) {
            if (1 == c.g) {
                if (a.started) return c.return();
                a.started = !0;
                c.l = 2;
                return c.yield(Ei(a.D.j, a.timeoutMs), 4)
            }
            if (2 != c.g) {
                if (!a.M) {
                    for (var d = 0, e = _.y(a.D.l), f = e.next(); !f.done; f = e.next()) {
                        if (!f.value.pg()) throw Error("missing input: " + a.id + "/" + d);
                        ++d
                    }
                    a.g()
                }
                c.g = 0;
                c.l = 0
            } else {
                b = tb(c);
                if (a.M) return c.return();
                b instanceof yH ? a.J(b) : b instanceof Error && (a.ia ? a.ia(a.id, b) : a.I(b), a.l(b));
                c.g = 0
            }
        })
    };
    var W = function(a, b) {
            b = void 0 === b ? new Yp : b;
            a.D.g.push(b);
            return b
        },
        NH = function(a) {
            var b = void 0 === b ? new DH : b;
            a.D.g.push(b);
            return b
        },
        OH = function(a, b) {
            b = void 0 === b ? new Or : b;
            a.D.g.push(b);
            return b
        },
        X = function(a, b) {
            LH(a.D, b);
            b = new FH(b);
            a.D.l.push(b);
            return b
        },
        PH = function(a, b) {
            LH(a.D, b);
            return new GH(b)
        },
        QH = function(a, b) {
            LH(a.D, b, !0);
            return new GH(b)
        },
        RH = function(a, b) {
            LH(a.D, b)
        },
        SH = function(a, b) {
            b = new JH(b);
            LH(a.D, b);
            b = new FH(b);
            a.D.l.push(b);
            return b
        };
    MH.prototype.J = function() {};
    MH.prototype.l = function(a) {
        if (!this.ia && this.D.g.length) {
            a = new yH(a.message);
            for (var b = _.y(this.D.g), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.Oc) {
                    var d = a;
                    c.gb = !0;
                    c.fe = d;
                    c.td.reject(d)
                }
        }
    };
    var TH = function(a, b, c, d, e, f) {
        MH.call(this, a, e, f);
        this.f = b;
        this.C = d;
        a = {};
        c = _.y(_.z(Object, "entries").call(Object, c));
        for (b = c.next(); !b.done; b = c.next()) d = _.y(b.value), b = d.next().value, (d = d.next().value) && (a[b] = PH(this, d));
        this.o = a
    };
    _.T(TH, MH);
    TH.prototype.g = function() {
        for (var a = this.f, b = {}, c = _.y(_.z(Object, "entries").call(Object, this.o)), d = c.next(); !d.done; d = c.next()) {
            var e = _.y(d.value);
            d = e.next().value;
            e = e.next().value;
            b[d] = e.value
        }
        a = a.call(this, b, this.C);
        this.j(a)
    };
    TH.prototype.I = function() {};
    var Iq = function(a, b, c, d, e, f) {
        TH.call(this, a, b, c, d, e, f);
        this.output = W(this, new Yp)
    };
    _.T(Iq, TH);
    Iq.prototype.j = function(a) {
        this.output.La(a)
    };
    var UH = function(a, b, c, d, e, f, g) {
        TH.call(this, a, b, c, d, f, g);
        this.finished = new Or;
        a = _.z(Object, "keys").call(Object, e);
        a = _.y(a);
        for (b = a.next(); !b.done; b = a.next()) this[b.value] = W(this)
    };
    _.T(UH, TH);
    UH.prototype.j = function(a) {
        a = _.y(_.z(Object, "entries").call(Object, a));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            BH(this[b], c)
        }
        this.finished.notify()
    };
    var VH = function(a) {
        this.g = void 0 === a ? function() {} : a
    };
    var ok = function(a) {
        a = void 0 === a ? new VH : a;
        _.V.call(this);
        this.C = a;
        this.D = [];
        this.I = [];
        this.H = {};
        this.l = [];
        this.j = new _.xh;
        this.g = {}
    };
    _.T(ok, _.V);
    var J = function(a, b) {
            _.S(a, b);
            a.D.push(b);
            return b
        },
        Ik = function(a, b) {
            b = _.y(b);
            for (var c = b.next(); !c.done; c = b.next()) J(a, c.value)
        },
        WH = function(a, b, c, d, e, f) {
            b = new UH(b, c, d, e, f, void 0, a.C.g);
            return J(a, b)
        },
        iu = function(a, b) {
            a.I.push(b);
            _.S(a, b)
        },
        xk = function(a) {
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
                        for (f = e.next(); !f.done; f = e.next()) g = f.value, xk(g);
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
    ok.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.D.length = 0;
        this.I.length = 0;
        this.l.length = 0
    };
    var XH = function(a) {
        this.F = _.A(a)
    };
    _.T(XH, _.D);
    XH.da = [1];
    var YH = [0, az, Hz];
    var ZH = function(a) {
        this.F = _.A(a)
    };
    _.T(ZH, _.D);
    ZH.da = [1, 2];
    ZH.prototype.g = Hf([0, az, Hz, az, YH]);
    _.pq = 728 * 1.38;
    var aI, $H;
    aI = function() {
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
        this.floatingAdsStacking = new $H;
        this.sideRailProcessedFixedElements = new _.u.Set;
        this.sideRailAvailableSpace = new _.u.Map;
        this.sideRailPlasParam = new _.u.Map;
        this.A = [];
        this.g = null
    };
    _.Cj = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.u.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.u.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.u.Map)) : a.google_reactive_ads_global_state = new aI;
        return a.google_reactive_ads_global_state
    };
    $H = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var eI, gI, cI;
    _.bI = function(a) {
        this.g = _.Cj(a).floatingAdsStacking
    };
    _.dI = function(a, b) {
        return new cI(a, b)
    };
    eI = function(a) {
        a = _.SA(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    _.fI = function(a, b) {
        a.g.maxZIndexListeners.push(b);
        b(eI(a))
    };
    gI = function(a) {
        var b = eI(a);
        _.Ww(a.g.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    cI = function(a, b) {
        this.A = a;
        this.l = b;
        this.g = null
    };
    _.hI = function(a) {
        if (null == a.g) {
            var b = a.A,
                c = a.l,
                d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            gI(b);
            a.g = d
        }
    };
    _.iI = function(a) {
        if (null != a.g) {
            var b = a.A;
            delete b.g.maxZIndexRestrictions[a.g];
            gI(b);
            a.g = null
        }
    };
    var Ui, jI;
    _.Xi = function(a, b) {
        b = void 0 === b ? {} : b;
        this.pa = a;
        this.Fa = b
    };
    _.kI = function(a, b) {
        var c = Ri(a.pa.document, b);
        if (c) {
            var d;
            if (!(d = jI(a, c, b))) a: {
                d = a.pa.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    var e = jI(a, c, b);
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
    Ui = function(a, b) {
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = _.kI(a, c.value)) return c;
        return null
    };
    jI = function(a, b, c) {
        if ("fixed" !== xB(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= _.Km(_.CB, b).width && 1 >= _.Km(_.CB, b).height || a.Fa.Ik && !a.Fa.Ik(b) ? !0 : !1;
        a.Fa.ci && a.Fa.ci(b, c, d);
        return d ? null : b
    };
    var Ti = 90 * 1.38;
    var lI, mI, nI;
    lI = _.pw(["* { pointer-events: none; }"]);
    mI = function(a, b) {
        var c = _.$f("STYLE", a);
        c.textContent = _.Ax(new _.zx(lI[0], yx));
        null == a || a.head.appendChild(c);
        setTimeout(function() {
            null == a || a.head.removeChild(c)
        }, b)
    };
    _.oI = function(a, b, c) {
        if (!a.body) return null;
        var d = new nI;
        d.apply(a, b);
        return function() {
            var e = c || 0;
            0 < e && mI(b.document, e);
            _.uB(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.j,
                top: d.M
            });
            b.scrollTo(0, d.A)
        }
    };
    nI = function() {
        this.g = this.M = this.j = this.l = null;
        this.A = 0
    };
    nI.prototype.apply = function(a, b) {
        this.l = a.body.style.overflow;
        this.j = a.body.style.position;
        this.M = a.body.style.top;
        this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.A = _.Oi(b);
        _.uB(a.body, "top", -this.A + "px")
    };
    var ir = function(a, b) {
        this.g = a;
        this.A = void 0 === b ? 0 : b
    };
    ir.prototype.send = function(a, b) {
        var c = iq(ut(b, _.dj, 7), _.ej, 4),
            d = this.A++;
        _.vl(c, 1, d);
        a.hh(b)
    };
    _.kw.Object.defineProperties(ir.prototype, {
        Wf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g()
            }
        }
    });
    var mq;
    mq = function(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            var b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (c) {
            return !1
        }
    };
    _.pI = function(a, b) {
        return 0 >= b || null == a || !mq(a) ? null : sj(a, b)
    };
    var Lj = ["auto", "inherit", "100%"],
        Mj = Lj.concat(["none"]);
    var qI = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var rI = function(a, b, c, d, e, f) {
            this.l = _.oB(a);
            this.A = _.oB(b);
            this.j = c;
            this.g = _.oB(d);
            this.M = e;
            this.D = f
        },
        sI = function(a) {
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
        tI = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.nB(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = zB(a);
            d = _.Km(_.CB, a);
            var e = new pB(c.x, c.y, d.width, d.height);
            c = qB(e);
            d = String(xB(a, "zIndex"));
            var f = new _.nB(0, Infinity, Infinity, 0);
            for (var g = ig(a), h = g.g.body, k = g.g.documentElement, l = FA(g.g); a = yB(a);)
                if (!(_.Vx && 0 == a.clientWidth || Yx && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != xB(a, "overflow")) {
                    var m = zB(a),
                        n = new _.Im(a.clientLeft, a.clientTop);
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
            g = _.EA(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new pB(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? rB(e, f) : null;
            g = a = 0;
            l && !(new _.Mm(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.nB(0, 0, 0, 0);
            if (h = f)(e = rB(e, f)) ? (k = qB(f), m = qB(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.nB(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new rI(b, c, d, l, a, g)
        };
    var uI = function(a) {
        this.M = a;
        this.j = null;
        this.C = this.status = 0;
        this.A = null;
        this.zb = "sfchannel" + a
    };
    uI.prototype.vg = function() {
        return 2 == this.C
    };
    var vI = function(a) {
        this.g = a
    };
    vI.prototype.getValue = function(a, b) {
        return null == this.g[a] || null == this.g[a][b] ? null : this.g[a][b]
    };
    var wI = function(a, b) {
        this.Qe = a;
        this.Re = b;
        this.A = this.g = !1
    };
    var xI = function(a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.g = a;
        this.A = b;
        this.l = c;
        this.permissions = d;
        this.metadata = e;
        this.j = f;
        this.Wd = g;
        this.hostpageLibraryTokens = h;
        this.U = ""
    };
    var yI = function(a, b) {
        this.A = a;
        this.U = b
    };
    yI.prototype.g = function(a) {
        this.U && a && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var zI = function(a, b, c) {
        yI.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.T(zI, yI);
    zI.prototype.g = function() {
        return yI.prototype.g.call(this, {
            uid: this.A,
            version: this.version
        })
    };
    var AI = function(a, b, c, d) {
        yI.call(this, a, void 0 === d ? "" : d);
        this.j = b;
        this.l = c
    };
    _.T(AI, yI);
    AI.prototype.g = function() {
        return yI.prototype.g.call(this, {
            uid: this.A,
            initialWidth: this.j,
            initialHeight: this.l
        })
    };
    var BI = function(a, b, c) {
        yI.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.T(BI, yI);
    BI.prototype.g = function() {
        return yI.prototype.g.call(this, {
            uid: this.A,
            description: this.description
        })
    };
    var CI = function(a, b, c, d) {
        yI.call(this, a, void 0 === d ? "" : d);
        this.l = b;
        this.push = c
    };
    _.T(CI, yI);
    CI.prototype.g = function() {
        return yI.prototype.g.call(this, {
            uid: this.A,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        })
    };
    var DI = function(a, b) {
        yI.call(this, a, void 0 === b ? "" : b)
    };
    _.T(DI, yI);
    DI.prototype.g = function() {
        return yI.prototype.g.call(this, {
            uid: this.A
        })
    };
    var EI = function(a, b, c) {
        yI.call(this, a, void 0 === c ? "" : c);
        this.j = b
    };
    _.T(EI, yI);
    EI.prototype.g = function() {
        var a = {
            uid: this.A,
            newGeometry: sI(this.j)
        };
        return yI.prototype.g.call(this, a)
    };
    var FI = function(a, b, c, d, e, f) {
        EI.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.l = d;
        this.push = e
    };
    _.T(FI, EI);
    FI.prototype.g = function() {
        var a = {
            uid: this.A,
            success: this.success,
            newGeometry: sI(this.j),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        };
        this.U && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var GI = function(a, b, c, d) {
        yI.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.T(GI, yI);
    GI.prototype.g = function() {
        return yI.prototype.g.call(this, {
            uid: this.A,
            width: this.width,
            height: this.height
        })
    };
    var HI = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        ml(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var II, LI, MI, KI;
    II = function() {
        this.g = []
    };
    _.JI = function(a) {
        return a + "px"
    };
    LI = function(a, b, c, d, e) {
        a.g.push(new KI(b, c, d, e))
    };
    MI = function(a) {
        for (var b = a.g.length - 1; 0 <= b; b--) {
            var c = a.g[b];
            c.A ? (c.l.style.removeProperty(c.g), c.l.style.setProperty(c.g, String(c.j), c.M)) : c.l.style[c.g] = c.j
        }
        a.g.length = 0
    };
    KI = function(a, b, c, d) {
        this.l = a;
        this.g = (this.A = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.j = this.A ? a.style.getPropertyValue(this.g) : a.style[this.g];
        this.M = this.A ? a.style.getPropertyPriority(this.g) : void 0;
        this.A ? (a.style.removeProperty(this.g), a.style.setProperty(this.g, String(c), d)) : a.style[this.g] = String(c)
    };
    var NI, OI;
    NI = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    OI = function() {
        var a = window,
            b = _.Xf(a);
        b && NI({
            label: "2",
            type: 9,
            value: b
        }, a)
    };
    _.PI = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = _.Xf(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && NI(_.z(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (_.Xf() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                }), f)
            }
            return l
        }
    };
    var UI = function(a) {
        uI.call(this, a.uniqueId);
        var b = this;
        this.I = a.V;
        this.o = 1 === a.size;
        this.P = new wI(a.permissions.Qe && !this.o, a.permissions.Re && !this.o);
        this.D = a.Sg;
        var c;
        this.Ma = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.xa = "file:" == c ? "*" : c + "//" + d;
        this.bb = !!a.Wd;
        this.W = a.ij ? "//" + a.ij + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ua = a.ub ? "*" : "https:" + this.W;
        this.ka = QI(a);
        this.l = new II;
        RI(this, a.Sg, a.size);
        this.j = this.ha = tI(a.Sg);
        this.K = a.mm || "1-0-40";
        var e;
        this.ra = null != (e = a.ik) ? e : "";
        SI(this, a);
        this.Da = _.PI(412, function() {
            return TI(b)
        }, a.rb);
        this.H = -1;
        this.J = 0;
        var f = _.PI(415, function() {
            b.g && (b.g.name = "", a.Ri && a.Ri(), _.ag(b.g, "load", f))
        }, a.rb);
        _.pb(this.g, "load", f);
        this.rg = _.PI(413, this.rg, a.rb);
        this.Xg = _.PI(417, this.Xg, a.rb);
        this.bh = _.PI(419, this.bh, a.rb);
        this.jg = _.PI(411, this.jg, a.rb);
        this.Sf = _.PI(409, this.Sf, a.rb);
        this.ia = _.PI(410, this.ia, a.rb);
        this.Lg = _.PI(416, this.Lg, a.rb);
        this.A = new dH(this.zb, this.g.contentWindow, this.ua, !1);
        fH(this.A, "init_done", (0, _.Tw)(this.rg, this));
        fH(this.A, "register_done", (0, _.Tw)(this.Xg, this));
        fH(this.A, "report_error", (0, _.Tw)(this.bh, this));
        fH(this.A, "expand_request", (0, _.Tw)(this.jg, this));
        fH(this.A, "collapse_request", (0, _.Tw)(this.Sf, this));
        fH(this.A, "creative_geometry_update", (0, _.Tw)(this.ia, this));
        this.A.connect((0, _.Tw)(this.Lg, this))
    };
    _.T(UI, uI);
    var RI = function(a, b, c) {
            a.o ? (b.style.width = _.BB("100%", !0), b.style.height = _.BB("auto", !0)) : (b.style.width = _.BB(c.width, !0), b.style.height = _.BB(c.height, !0))
        },
        SI = function(a, b) {
            var c = b.ub,
                d = b.content,
                e = b.Ud,
                f = b.size,
                g = void 0 === b.Vd ? "3rd party ad content" : b.Vd,
                h = b.Se;
            b = b.Lf;
            var k = {
                shared: {
                    sf_ver: a.K,
                    ck_on: AG() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.K + ";" + d.length + ";" + d;
            k = new xI(a.M, a.xa, a.ha, a.P, new vI(k), a.o, a.bb, a.Ma);
            var l = {};
            l.uid = k.g;
            l.hostPeerName = k.A;
            l.initialGeometry = sI(k.l);
            var m = k.permissions;
            m = JSON.stringify({
                expandByOverlay: m.Qe,
                expandByPush: m.Re,
                readCookie: m.g,
                writeCookie: m.A
            });
            l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.g), l.reportCreativeGeometry = k.j, l.isDifferentSourceWindow = k.Wd, l.goog_safeframe_hlt = bH(k.hostpageLibraryTokens), l);
            k.U && (l.sentinel = k.U);
            k = JSON.stringify(l);
            l = f.width;
            f = f.height;
            a.o && (f = l = 0);
            m = {};
            e = (m.id = e, m.title = g, m.name = d + k, m.scrolling = "no", m.marginWidth = "0", m.marginHeight = "0", m.width = String(l), m.height = String(f), m["data-is-safeframe"] = "true", m);
            void 0 === c && (g = a.ra, f = a.W, d = a.K, (k = g) && (k = "?" + k), f = (void 0 === f ? "//tpc.googlesyndication.com" : f) + ("/safeframe/" + d + "/html/container.html" + k), (d = HI(_.GA(_.AA(a.D)))) && (f += (g ? "&" : "?") + "n=" + d), e.src = "https:" + f);
            null !== a.ka && (e.sandbox = a.ka);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.g = c, CA(a.g, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Ba(c, e), h = _.$f("IFRAME"), CA(h, c), a.g = h);
            a.o && (a.g.style.minWidth = "100%");
            a.D.appendChild(a.g)
        };
    _.q = UI.prototype;
    _.q.Lg = function() {
        _.pb(window, "resize", this.Da);
        _.pb(window, "scroll", this.Da)
    };
    _.q.rg = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new zI(b.uid, b.version, b.sentinel);
            if (this.M !== c.A || this.K !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.q.Xg = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.M !== (new AI(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).A) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.q.bh = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new BI(b.uid, b.description, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d;
            null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    _.q.jg = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.C) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new CI(b.uid, new _.nB(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            if (!(0 <= c.l.top && 0 <= c.l.left && 0 <= c.l.bottom && 0 <= c.l.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.P.Re || !c.push && this.P.Qe) {
                var e = c.l,
                    f = c.push,
                    g = this.j = tI(this.g);
                if (e.top <= g.g.top && e.right <= g.g.right && e.bottom <= g.g.bottom && e.left <= g.g.left) {
                    if (!f)
                        for (var h = this.g.parentNode; h && h.style; h = h.parentNode) LI(this.l, h, "overflowX", "visible", "important"), LI(this.l, h, "overflowY", "visible", "important");
                    var k = qB(new pB(0, 0, this.j.A.getWidth(), this.j.A.getHeight()));
                    _.ja(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    LI(this.l, this.D, "position", "relative");
                    LI(this.l, this.g, "position", "absolute");
                    if (f) {
                        var l = this.l,
                            m = this.D,
                            n = k.getWidth();
                        LI(l, m, "width", _.JI(n));
                        var p = this.l,
                            r = this.D,
                            v = k.getHeight();
                        LI(p, r, "height", _.JI(v))
                    } else LI(this.l, this.g, "zIndex", "10000");
                    var w = this.l,
                        x = this.g,
                        B = k.getWidth();
                    LI(w, x, "width", _.JI(B));
                    var C = this.l,
                        F = this.g,
                        G = k.getHeight();
                    LI(C, F, "height", _.JI(G));
                    LI(this.l, this.g, "left", _.JI(k.left));
                    LI(this.l, this.g, "top", _.JI(k.top));
                    this.C = 2;
                    this.j = tI(this.g);
                    d = !0
                } else d = !1
            }
            a = d;
            this.A.send("expand_response", (new FI(this.M, a, this.j, c.l, c.push)).g());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (R) {
            var P;
            null == (P = this.I) || P.error("Invalid EXPAND_REQUEST message. Reason: " + R.message)
        }
    };
    _.q.Sf = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (!this.vg()) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid)) throw Error("Cannot parse JSON message");
            if (this.M !== (new DI(b.uid, b.sentinel)).A) throw Error("Wrong source container");
            MI(this.l);
            this.C = 0;
            this.g && (this.j = tI(this.g));
            this.A.send("collapse_response", (new EI(this.M, this.j)).g())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var TI = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.J) {
            case 0:
                VI(a);
                a.H = window.setTimeout((0, _.Tw)(a.ga, a), 1E3);
                a.J = 1;
                break;
            case 1:
                a.J = 2;
                break;
            case 2:
                a.J = 2
        }
    };
    UI.prototype.ia = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new GI(b.uid, b.width, b.height, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.o) d !== this.g.height && (this.g.height = d, TI(this));
            else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    UI.prototype.ga = function() {
        if (1 == this.status || 2 == this.status) switch (this.J) {
            case 1:
                this.J = 0;
                break;
            case 2:
                VI(this), this.H = window.setTimeout((0, _.Tw)(this.ga, this), 1E3), this.J = 1
        }
    };
    var VI = function(a) {
            a.j = tI(a.g);
            a.A.send("geometry_update", (new EI(a.M, a.j)).g())
        },
        QI = function(a) {
            var b = null;
            a.kj && (b = a.kj);
            return null == b ? null : b.join(" ")
        },
        WI = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        XI = ["allow-top-navigation"],
        YI = ["allow-same-origin"],
        ZI = ZA([].concat(_.ri(WI), _.ri(XI)));
    ZA([].concat(_.ri(WI), _.ri(YI)));
    ZA([].concat(_.ri(WI), _.ri(XI), _.ri(YI)));
    var $I = _.pw(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        aJ = {
            wl: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Df) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Df)) throw new RangeError("Invalid subdomain: " + a.Df);
                return eb("https://" + a.Df + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            Eo: function(a) {
                return _.fb($I, a)
            }
        };
    var bJ = function() {};
    bJ.g = function() {
        throw Error("Must be overridden");
    };
    var Wj = function() {
        this.g = 0
    };
    _.T(Wj, bJ);
    Wj.Ec = void 0;
    Wj.g = function() {
        return Wj.Ec ? Wj.Ec : Wj.Ec = new Wj
    };
    var cJ = function() {
            this.cache = {}
        },
        gk = function() {
            dJ || (dJ = new cJ);
            return dJ
        },
        hk = function(a) {
            var b = od(_.$h(a, 3));
            if (!b) return 3;
            if (void 0 === dk(a, 2)) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    cJ.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            Tc: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            Yj(6, a, null == (d = g) ? void 0 : d.message);
            return {
                Tc: null,
                success: !1
            }
        }
        if (!c) return {
            Tc: null,
            success: !0
        };
        try {
            var e = Vz(c);
            this.cache[a] = e;
            return {
                Tc: e,
                success: !0
            }
        } catch (g) {
            var f;
            Yj(5, a, null == (f = g) ? void 0 : f.message);
            return {
                Tc: null,
                success: !1
            }
        }
    };
    cJ.prototype.set = function(a, b) {
        var c = dk(a, 1),
            d = "_GESPSK-" + c;
        Uz(a);
        try {
            b.setItem(d, cl(a))
        } catch (f) {
            var e;
            Yj(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var dJ = null;
    var eJ = function(a, b) {
        MH.call(this, a);
        this.id = a;
        this.C = b
    };
    _.T(eJ, MH);
    eJ.prototype.I = function(a) {
        this.C(this.id, a)
    };
    var qk = function(a, b, c, d) {
        eJ.call(this, 1041, d);
        this.j = b;
        this.H = X(this, a);
        c && (this.o = PH(this, c))
    };
    _.T(qk, eJ);
    qk.prototype.g = function() {
        var a = this.H.value,
            b, c, d = null != (c = this.j) ? c : null == (b = this.o) ? void 0 : b.value;
        d && gk().set(a, d) && _.Bi(a, 2) && Yj(27, dk(a, 1))
    };
    var sk = function(a, b) {
        eJ.call(this, 1048, b);
        this.j = W(this);
        this.o = W(this);
        this.H = X(this, a)
    };
    _.T(sk, eJ);
    sk.prototype.g = function() {
        var a = this.H.value,
            b = function(c) {
                var d = {};
                Yj(c, dk(a, 1), null, (d.tic = String(Math.round((Date.now() - od(_.$h(a, 3))) / 6E4)), d))
            };
        switch (hk(a)) {
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
                Yj(9, dk(a, 1));
                this.j.G(a);
                break;
            case 4:
                b(23), this.j.G(a)
        }
    };
    var fJ = function(a, b) {
        eJ.call(this, 1094, b);
        this.j = OH(this);
        this.o = X(this, a)
    };
    _.T(fJ, eJ);
    fJ.prototype.g = function() {
        var a = this.o.value;
        if (a) {
            if (void 0 !== a)
                for (var b = _.y(_.z(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, _.z(c, "startsWith").call(c, "_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            dJ = new cJ;
            this.j.notify()
        }
    };
    var Hk = function(a, b, c) {
        eJ.call(this, 1049, c);
        this.j = b;
        RH(this, a)
    };
    _.T(Hk, eJ);
    Hk.prototype.g = function() {
        for (var a = _.y(ak(this.j)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = gk().get(b, this.j).Tc;
            if (c) {
                var d = hk(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = gk();
                    c = dk(c, 1);
                    try {
                        this.j.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (f) {
                        Yj(8, c, null == (d = f) ? void 0 : d.message)
                    }
                    Yj(40, b)
                }
            }
        }
    };
    var pk = function(a, b, c) {
        eJ.call(this, 1027, c);
        this.Ie = a;
        this.H = b;
        this.j = W(this);
        this.o = W(this)
    };
    _.T(pk, eJ);
    pk.prototype.g = function() {
        var a = gk().get(this.Ie, this.H).Tc;
        a || (a = Uz(Tz(this.Ie)), this.o.G(a.ib(jk(100))));
        this.j.G(a)
    };
    var nk = {
        qh: !1
    };
    var Lk = function(a, b) {
        eJ.call(this, 1036, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(Lk, eJ);
    Lk.prototype.g = function() {
        var a = this.o.value;
        0 !== hk(a) && this.j.G(a)
    };
    var wk = function(a, b, c) {
        eJ.call(this, 1046, c);
        this.output = OH(this);
        this.j = W(this);
        this.o = X(this, b);
        RH(this, a)
    };
    _.T(wk, eJ);
    wk.prototype.g = function() {
        this.j.G(this.o.value)
    };
    var tk = function(a, b, c) {
        eJ.call(this, 1047, c);
        this.collectorFunction = a;
        this.j = W(this);
        this.o = W(this);
        this.H = W(this);
        this.K = X(this, b)
    };
    _.T(tk, eJ);
    tk.prototype.g = function() {
        var a = this,
            b = this.K.value,
            c = dk(b, 1);
        Yj(18, c);
        try {
            var d = _.Wf();
            this.collectorFunction().then(function(e) {
                Yj(29, c, null, {
                    delta: String(_.Wf() - d)
                });
                a.j.G(li(b, 2, e));
                a.H.Ha(e)
            }).catch(function(e) {
                Yj(28, c, mk(e));
                a.o.G(b.ib(jk(106)))
            })
        } catch (e) {
            Yj(1, c, mk(e)), this.o.G(b.ib(jk(107)))
        }
    };
    var rk = function(a, b) {
        eJ.call(this, 1028, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(rk, eJ);
    rk.prototype.g = function() {
        var a = this.o.value,
            b = dk(a, 1);
        null != od(_.$h(a, 3)) || Yj(35, b);
        this.j.G(a)
    };
    var uk = function(a, b, c, d, e) {
        eJ.call(this, 1050, e);
        this.K = c;
        this.H = d;
        this.j = W(this);
        this.o = X(this, a);
        this.P = PH(this, b)
    };
    _.T(uk, eJ);
    uk.prototype.g = function() {
        var a = this.o.value,
            b = dk(a, 1),
            c = this.P.value;
        if (null == c) Yj(41, b), a.ib(jk(111)), this.j.G(a);
        else if ("string" !== typeof c) Yj(21, b), this.j.G(a.ib(jk(113)));
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.H : this.K)) {
                var d = {};
                Yj(12, b, null, (d.sl = String(c.length), d));
                b = a.ib(jk(108));
                _.ik(b, 2)
            } else c.length || Yj(20, b), _.ik(a, 10);
            this.j.G(a)
        }
    };
    var vk = function(a) {
        eJ.call(this, 1046, a);
        this.output = OH(this)
    };
    _.T(vk, eJ);
    vk.prototype.g = function() {
        var a = this;
        Zj().then(function() {
            a.output.notify()
        })
    };
    var gJ = function(a, b, c, d, e) {
        e = void 0 === e ? nk : e;
        eJ.call(this, 1059, d);
        this.P = b;
        this.K = c;
        this.o = e;
        this.j = W(this);
        this.W = X(this, a);
        this.H = PH(this, c)
    };
    _.T(gJ, eJ);
    gJ.prototype.g = function() {
        var a = this.H.value;
        if (a) {
            var b = this.W.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            Yj(42, b, null, (c.ea = String(Number(this.P)), c));
            this.j.La(yk(b, d, a, this.K, this.C, this.o))
        }
    };
    var hJ = function(a, b) {
        eJ.call(this, 1057, b);
        this.j = a;
        this.o = W(this);
        this.H = W(this)
    };
    _.T(hJ, eJ);
    hJ.prototype.g = function() {
        if (this.j)
            if ("object" !== typeof this.j) Yj(46, "UNKNOWN_COLLECTOR_ID"), iJ(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.j.id,
                    b = this.j.networkCode;
                a && b && (delete this.j.id, Yj(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, Yj(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), iJ(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (Yj(14, a), iJ(this, a, 105)) : (_.H = Of(lD), _.z(_.H, "includes")).call(_.H, a) ? (Yj(22, a), iJ(this, a, 104)) : this.H.G(this.j)
            }
        else Yj(39, "UNKNOWN_COLLECTOR_ID"), iJ(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var iJ = function(a, b, c) {
        a.o.G(Tz(b).ib(jk(c)))
    };
    var Fk = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? nk : e;
        this.g = b;
        this.l = c;
        this.aa = f;
        this.J = d;
        this.I = e;
        this.D = [];
        this.M = [];
        this.j = [];
        this.A = 0;
        a = _.y(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    Fk.prototype.push = function(a) {
        var b = this;
        this.l || this.J();
        var c = function(f, g) {
            return void jJ(b, f, g)
        };
        a = new hJ(a, c);
        var d = new qk(a.o, void 0, this.g, c);
        c = new gJ(a.H, this.l, this.g, c, this.I);
        var e = new ok;
        Ik(e, [a, d, c]);
        xk(e);
        a = c.j.promise;
        this.D.push(a);
        d = _.y(this.M);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    Fk.prototype.addOnSignalResolveCallback = function(a) {
        this.M.push(a);
        for (var b = _.y(this.D), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    Fk.prototype.addErrorHandler = function(a) {
        this.j.push(a)
    };
    Fk.prototype.clearAllCache = function() {
        var a = this,
            b = this.aa.currentScript instanceof HTMLScriptElement ? this.aa.currentScript.src : "";
        if (1 === this.A) {
            var c = {};
            Yj(49, "", null, (c.url = b, c))
        } else if (c = String(_.ph(null != b ? b : "")), (_.H = Of(kD), _.z(_.H, "includes")).call(_.H, c)) c = {}, Yj(48, "", null, (c.url = b, c));
        else {
            var d = new ok;
            c = new fJ(this.g, function(e, f) {
                return void jJ(a, e, f)
            });
            J(d, c);
            xk(d);
            this.A = 1;
            setTimeout(function() {
                a.A = 0
            }, 1E3 * _.Mf(jD));
            d = {};
            Yj(43, "", null, (d.url = b, d));
            return c.j.promise
        }
    };
    var jJ = function(a, b, c) {
            a = _.y(a.j);
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c)
        },
        Gk = function(a) {
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
    var Mk = function(a, b, c) {
        eJ.call(this, 1035, c);
        this.o = b;
        this.j = W(this);
        this.H = X(this, a)
    };
    _.T(Mk, eJ);
    Mk.prototype.g = function() {
        var a = this,
            b = this.H.value,
            c = dk(b, 1),
            d = this.o.toString(),
            e = {};
        Yj(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        ob(f, this.o);
        var g = function() {
            var h = {};
            Yj(31, c, null, (h.url = d, h));
            a.j.G(b.ib(jk(109)));
            _.ag(f, "error", g)
        };
        document.head.appendChild(f);
        _.pb(f, "error", g)
    };
    var Kk = new _.u.Set;
    var Ok = function(a, b) {
        try {
            var c = void 0 === _.Q(b, 6) ? !0 : _.Q(b, 6),
                d, e, f = Jf(_.gg(b, 2, 0)),
                g = _.I(b, 3);
            a: switch (_.gg(b, 4, 0)) {
                case 1:
                    var h = "pt";
                    break a;
                case 2:
                    h = "cr";
                    break a;
                default:
                    h = ""
            }
            var k = new gz(f, g, h),
                l = null != (e = null == (d = _.vm(b, dz, 5)) ? void 0 : _.I(d, 1)) ? e : "";
            k.Xd = l;
            k.g = c;
            k.B = a;
            var m = k.build();
            xb(m)
        } catch (n) {}
    };
    var kJ = function(a) {
        this.F = _.A(a)
    };
    _.T(kJ, _.D);
    kJ.prototype.g = Hf([0, Vy, -3, Yy]);
    var lJ = [.05, .1, .2, .5],
        mJ = [0, .5, 1],
        nJ = function(a) {
            a = Bk(a);
            if (!a) return -1;
            try {
                var b = PG(a.document);
                var c = new _.Mm(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Mm(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        oJ = function(a, b) {
            return 0 >= a || 0 >= b ? [] : lJ.map(function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        qJ = function(a) {
            this.M = a.B;
            this.j = a.Ub;
            this.I = a.timer;
            this.l = null;
            this.g = a.rb;
            this.A = pJ(this);
            this.D = a.zm || !1
        },
        rJ = function() {
            var a;
            return !!window.IntersectionObserver && mv(null == (a = window.performance) ? void 0 : a.now)
        };
    qJ.prototype.getSlotId = function() {
        return this.l
    };
    var tJ = function(a, b) {
            if (a.A) {
                if (null != a.l) {
                    try {
                        sJ(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.g && a.g(c)
                    }
                    a.A && a.A.unobserve(a.j)
                }
                a.l = b;
                a.A.observe(a.j)
            }
        },
        pJ = function(a) {
            if (!_.t.IntersectionObserver) return null;
            var b = a.j.offsetWidth * a.j.offsetHeight,
                c = nJ(a.M);
            b = [].concat(_.ri(mJ), _.ri(oJ(c, b)));
            la(b);
            return new _.t.IntersectionObserver(function(d) {
                try {
                    for (var e = nJ(a.M), f = _.y(d), g = f.next(); !g.done; g = f.next()) {
                        var h = g.value,
                            k = Math.round(h.boundingClientRect.width * h.boundingClientRect.height),
                            l = Math.round(h.intersectionRect.width * h.intersectionRect.height),
                            m = Math.round(h.time);
                        if (_.z(Number, "isSafeInteger").call(Number, k) && _.z(Number, "isSafeInteger").call(Number, l) && _.z(Number, "isSafeInteger").call(Number, e) && _.z(Number, "isSafeInteger").call(Number, m)) a.D && sJ(a, m, k, l, e, h.isIntersecting);
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
        sJ = function(a, b, c, d, e, f) {
            if (null == a.l) throw Error("Not Attached.");
            var g = new kJ;
            c = _.Yh(g, 1, c);
            d = _.Yh(c, 2, d);
            e = _.Yh(d, 3, e);
            b = _.Yh(e, 4, b);
            f = Th(b, 5, f);
            f = Jb(f.g(), 4);
            rC(a.I, "1", 10, f, void 0, a.l)
        };
    var uJ = function(a, b) {
            this.g = a;
            this.A = b
        },
        vJ = function(a) {
            if (a.g.frames.google_ads_top_frame) return !0;
            var b = bB(a.g);
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
    var al = function(a) {
        this.F = _.A(a)
    };
    _.T(al, _.D);
    var el = If(al),
        bl = [1, 3];
    var Og = {
        io: 0,
        co: 1,
        eo: 9,
        Zn: 2,
        ao: 3,
        ho: 5,
        fo: 7,
        bo: 10
    };
    var wJ = _.pw(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Vk = _.fb(wJ);
    var Wo = function(a) {
            var b = void 0 === b ? Xj(_.t) : b;
            this.id = a;
            this.g = .001 > Math.random();
            this.he = {
                pvsid: String(b)
            }
        },
        xJ = function(a) {
            a = Bl(a);
            var b;
            Pl.set(a, (null != (b = Pl.get(a)) ? b : 0) + 1)
        },
        Ol = function() {
            return [].concat(_.ri(_.z(Pl, "values").call(Pl))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        Yo = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.he[b] = c : delete a.he[b])
        },
        $o = function(a) {
            var b = 1;
            b = void 0 === b ? null : b;
            if (yJ()) b = !0;
            else {
                var c = a.g;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && yC(window, zJ(a) || "", void 0, !0)
        },
        zJ = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Cn(a.he, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        AJ = function(a) {
            var b = [].concat(_.ri(_.z(Pl, "keys").call(Pl)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? Yo(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), Yo(a, "nw_id", b.join()))
        },
        Xo = function(a, b) {
            Yo(a, "vrg", String(b.Hc || b.Bb));
            AJ(a);
            Yo(a, "nslots", Ol().toString());
            b = jh();
            b.length && Yo(a, "eid", b.join());
            Yo(a, "pub_url", document.URL)
        },
        xp = function(a, b, c) {
            c = void 0 === c ? .001 : c;
            if (void 0 === c || 0 > c || 1 < c) c = .001;
            Math.random() < c && (a = new Wo(a), b(a), $o(a))
        },
        Pl = new _.u.Map,
        yJ = Ai(function() {
            return !!WA()
        });
    var El = function() {
        qC.call(this, _.E(Fl) || _.E(wF) ? 1 : 0, _.t);
        this.l = 0;
        var a = _.E(Fl) || _.E(wF);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.T(El, qC);
    _.BJ = function(a) {
        this.context = a
    };
    _.BJ.prototype.Eb = function(a, b) {
        return Il(this.context, a, b)
    };
    _.BJ.prototype.Ca = function(a, b) {
        return Cl(this.context, a, b)
    };
    _.BJ.prototype.Db = function(a, b) {
        Gl(this.context, a, b);
        return !1
    };
    _.BJ.prototype.ud = ca(4);
    var CJ = function() {
            this.id = "goog_" + wA++
        },
        DJ = function(a) {
            _.V.call(this);
            this.context = a;
            this.l = new _.u.Map
        };
    _.T(DJ, _.V);
    DJ.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.clear()
    };
    DJ.prototype.listen = function(a, b) {
        var c = this;
        if (this.M) return function() {};
        var d = "string" === typeof a ? a : a.id,
            e, f, g = null != (f = null == (e = this.l.get(d)) ? void 0 : e.add(b)) ? f : new _.u.Set([b]);
        this.l.set(d, g);
        return function() {
            return void EJ(c, a, b)
        }
    };
    var FJ = function(a) {
            var b = Mu;
            var c = void 0 === c ? function() {
                return !0
            } : c;
            return new _.u.Promise(function(d) {
                var e = a.listen(b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        EJ = function(a, b, c) {
            var d;
            return !(null == (d = a.l.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        },
        Ys = function(a, b, c, d) {
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
                        zg: void 0
                    }, m = l.next()) n.zg = m.value, k.push(new _.u.Promise(function(r) {
                    return function(v) {
                        return _.rb(function(w) {
                            if (1 == w.g) return w.yield(0, 2);
                            Il(a.context, c, function() {
                                a.l.has(e) && f.has(r.zg) && (0, r.zg)(h)
                            }, !0);
                            v();
                            w.g = 0
                        })
                    }
                }(n)));
                return p.yield(_.u.Promise.all(k), 0)
            })
        },
        GJ = new CJ,
        HJ = new CJ,
        Zs = new CJ,
        IJ = new CJ,
        $s = new CJ,
        JJ = new CJ,
        KJ = new CJ,
        Zq = new CJ,
        Mu = new CJ,
        LJ = new CJ;
    var MJ = function() {
            this.data = void 0;
            this.status = 0;
            this.g = []
        },
        NJ = function(a) {
            a.data = void 0;
            a.status = 1
        };
    var OJ, SJ, VJ, Lu, WJ, RJ, QJ, PJ, Aq;
    OJ = function() {
        this.g = new _.u.Map;
        this.D = 0;
        this.A = new _.u.Map;
        this.Kb = null;
        this.j = this.l = this.o = this.I = 0;
        this.Te = null;
        this.J = new MJ;
        this.M = new MJ
    };
    SJ = function(a, b) {
        a.g.get(b) || (a.g.set(b, {
            Nc: !0,
            Qg: "",
            Hd: "",
            fj: 0,
            Mg: [],
            Og: [],
            Ac: !1,
            to: -1
        }), _.kp(b, function() {
            a.g.delete(b);
            PJ(a, b)
        }), b.listen(HJ, function(c) {
            c = c.detail;
            var d = a.g.get(b);
            d.Qg = dk(c, 33) || "";
            d.Ac = !0;
            QJ(a, b, function() {
                return void(d.Qg = "")
            });
            RJ(a, b, function() {
                return void(d.Ac = !1)
            })
        }))
    };
    _.zq = function(a, b) {
        var c;
        return null == (c = a.g.get(b)) ? void 0 : c.Nc
    };
    _.TJ = function(a, b) {
        if (a = a.g.get(b)) a.Nc = !1
    };
    _.UJ = function(a, b) {
        if (a = a.g.get(b)) a.Nc = !0
    };
    VJ = function(a, b) {
        if (!b.length) return [];
        var c = Bl(b[0].getAdUnitPath());
        b.every(function(g) {
            return Bl(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.y(a.g);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            (f = f.next().value.Qg) && Bl(e.getAdUnitPath()) === c && !_.z(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    Lu = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.g.get(b)) ? void 0 : c.Hd) ? d : ""
    };
    WJ = function(a, b) {
        return (a = a.g.get(b)) ? a.fj - 1 : 0
    };
    RJ = function(a, b, c) {
        (a = a.g.get(b)) && a.Mg.push(c)
    };
    QJ = function(a, b, c) {
        (a = a.g.get(b)) && a.Og.push(c)
    };
    PJ = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Og.slice(), a.Og.length = 0, a = _.y(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    Aq = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Mg.slice(), a.Mg.length = 0, a = _.y(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    OJ.prototype.Ac = function(a) {
        var b, c;
        return null != (c = null == (b = this.g.get(a)) ? void 0 : b.Ac) ? c : !1
    };
    var XJ = function(a, b, c) {
            if (a = a.g.get(b)) a.ej = c
        },
        YJ = function(a, b) {
            if (a = a.g.get(b)) {
                var c;
                null == (c = a.ej) || c.za();
                delete a.ej
            }
        };
    var Sl = new _.u.Map,
        Rl = new _.u.Map;
    var Ul = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    Ul.prototype.getMessageId = function() {
        return this.messageId
    };
    Ul.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var ZJ = N(2),
        $J = N(3),
        aK = N(4),
        bK = N(5),
        cK = N(6),
        dK = N(12),
        eK = N(14),
        fK = N(16),
        nm = N(19),
        gK = N(20),
        hK = N(23),
        iK = N(26),
        jK = N(28),
        kK = N(149),
        lK = N(30),
        mK = N(31),
        nK = N(34),
        oK = N(35),
        mn = N(36),
        rt = N(38),
        pK = N(40),
        qK = N(48),
        rK = N(50),
        sK = N(60),
        tK = N(63),
        uK = N(64),
        vK = N(66),
        wK = N(68),
        xK = N(69),
        yK = N(70),
        zK = N(71),
        AK = N(78),
        BK = N(80),
        Un = N(82),
        om = N(84),
        CK = N(85),
        DK = N(87),
        hm = N(88),
        EK = N(92),
        FK = N(93),
        GK = N(99),
        qm = N(103),
        Sn = N(104),
        HK = N(105),
        Mn = N(106),
        Nn = N(107),
        Tn = N(108),
        IK = N(113),
        JK = N(114),
        KK = N(115),
        LK = N(117),
        MK = N(118),
        NK = N(120),
        OK = N(119),
        Dn = N(121),
        PK = N(122),
        QK = N(123),
        RK = N(126),
        SK = N(127),
        TK = N(144),
        Hr = N(129),
        Kr = N(132),
        UK = N(134),
        VK = N(135),
        WK = N(136),
        XK = N(137),
        YK = N(138),
        ZK = N(139),
        $K = N(140),
        aL = N(143),
        bL = N(145),
        cL = N(147),
        dL = N(150),
        eL = N(164),
        fL = N(152),
        gL = N(153),
        hL = N(154),
        Vr = N(155),
        iL = N(156),
        jL = N(157),
        kL = N(158),
        lL = N(159),
        mL = N(160),
        fv = N(161),
        Fv = N(162);
    var nL = function(a, b, c) {
        var d = this;
        this.addEventListener = M(a, 86, function(e, f) {
            if ("function" !== typeof f) return O(b, Wl("Service.addEventListener", [e, f])), d;
            var g = Xl(e);
            if (!g) return O(b, FK(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = M(a, 904, function(e, f) {
            var g = Xl(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : O(b, Wl("Service.removeEventListener", [e, f]))
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
    var Yl = function(a, b, c) {
        nL.call(this, a, b, c);
        this.setRefreshUnfilledSlots = M(a, 59, function(d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = M(a, 69, function(d) {
            c.Nc && oL(c, pL(c, d))
        });
        this.refreshAllSlots = M(a, 60, function() {
            c.Nc && oL(c)
        });
        this.setVideoSession = M(a, 61, function(d, e, f) {
            c.I = e;
            c.C = f;
            "number" === typeof d && (e = bn().g, _.ik(e, 29, _.qd(d)))
        });
        this.getDisplayAdsCorrelator = M(a, 62, function() {
            return String(Ky(bn().g, 26))
        });
        this.getVideoStreamCorrelator = M(a, 63, function() {
            var d = bn().g;
            d = ms(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = M(a, 64, function(d) {
            var e = _.z(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            return !!e && qL(c, e)
        });
        this.onImplementationLoaded = M(a, 65, function() {
            c.R.info(qK("GPT CompanionAds"))
        });
        this.slotRenderEnded = M(a, 67, function(d, e, f) {
            var g = _.z(c.g, "find").call(c.g, function(h) {
                return h.g === d
            });
            return g && rL(c, g, e, f)
        })
    };
    _.T(Yl, nL);
    var $l = function(a, b, c) {
        nL.call(this, a, b, c);
        this.setContent = M(a, 72, function(d) {
            var e = _.z(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            b.error(TK(), e)
        })
    };
    _.T($l, nL);
    var gm = function(a) {
        this.F = _.A(a)
    };
    _.T(gm, _.D);
    var fm = function(a, b) {
            return li(a, 1, b)
        },
        km = function(a) {
            return ni(a, 2, 2)
        },
        em = function(a, b) {
            return _.Je(a, 2, b, _.rd)
        },
        ln = function(a, b) {
            return Le(a, 2, _.rd, b)
        };
    gm.da = [2];
    var sL = function(a) {
        this.F = _.A(a)
    };
    _.T(sL, _.D);
    sL.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.ai(this, 5, a)
    };
    sL.prototype.clearTagForChildDirectedTreatment = function() {
        return _.ik(this, 5)
    };
    sL.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.ai(this, 6, a)
    };
    var Kp = function(a) {
        this.F = _.A(a)
    };
    _.T(Kp, _.D);
    var zo = function(a) {
        var b = new Kp;
        return Th(b, 1, a)
    };
    var lu = function(a) {
        this.F = _.A(a)
    };
    _.T(lu, _.D);
    var yt = function(a) {
        this.F = _.A(a)
    };
    _.T(yt, _.D);
    yt.da = [1];
    var Bn = function(a) {
        this.F = _.A(a)
    };
    _.T(Bn, _.D);
    var Dr = function(a) {
        this.F = _.A(a)
    };
    _.T(Dr, _.D);
    var Jr = function(a, b) {
            return _.ai(a, 1, b)
        },
        Gr = function(a, b) {
            return _.Je(a, 2, b, _.rd)
        };
    Dr.da = [2];
    var wt = function(a) {
        this.F = _.A(a)
    };
    _.T(wt, _.D);
    var Fr = function(a, b) {
        kk(a, 1, Dr, b)
    };
    wt.da = [1];
    var vt = function(a) {
        this.F = _.A(a)
    };
    _.T(vt, _.D);
    var tL = function(a) {
        this.F = _.A(a)
    };
    _.T(tL, _.D);
    tL.prototype.getCategoryExclusions = function(a) {
        return Oy(this, 3, a)
    };
    tL.prototype.Pa = function() {
        return _.bk(this, gm, 14)
    };
    tL.prototype.yc = function() {
        return _.vm(this, Bn, 18)
    };
    var ev = function(a) {
        return _.vm(a, sL, 25)
    };
    tL.prototype.getCorrelator = function() {
        return ms(this, 26)
    };
    tL.prototype.setCorrelator = function(a) {
        return _.ik(this, 26, _.qd(a))
    };
    tL.prototype.gi = function() {
        return Jy(this, vt, 33)
    };
    tL.da = [2, 3, 14];
    var Om = function() {
        this.g = new _.u.Map
    };
    var uL = {},
        tm = (uL[253] = !1, uL[246] = [], uL[150] = "", uL[221] = !1, uL[36] = /^true$/.test("false"), uL[172] = null, uL[260] = void 0, uL[251] = null, uL),
        sm = function() {
            this.g = !1
        };
    var vL = function() {
            this.A = {};
            this.g = new tL;
            this.l = new _.u.Map;
            this.g.setCorrelator(iB());
            _.um(36) && Th(this.g, 15, !0)
        },
        wL = function(a) {
            var b = bn(),
                c = a.getDomId();
            if (c && !b.A.hasOwnProperty(c)) {
                var d = _.Kf(Om),
                    e = ++_.Kf(El).l;
                d.g.set(c, e);
                _.ik(a, 20, _.Zc(e));
                b.A[c] = a
            }
        },
        xL = function(a, b) {
            return a.A[b]
        },
        bn = function() {
            return _.Kf(vL)
        };
    var yL = {},
        zL = (yL.companion_ads = "companionAds", yL.content = "content", yL.publisher_ads = "pubads", yL);
    var AL = Ai(Rm);
    var cn = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = bn().g,
            h = xL(bn(), f.getDomId());
        this.set = M(a, 83, function(k, l) {
            "page_url" === k && l && (k = [em(fm(new gm, k), [String(l)])], _.pm(h, 3, k));
            return e
        });
        this.get = M(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (_.H = h.Pa(), _.z(_.H, "find")).call(_.H, function(n) {
                return dk(n, 1) === k
            })) ? void 0 : km(l)[0]) ? m : null
        });
        this.setClickUrl = M(a, 79, function(k) {
            bm(k, h, f, b);
            return e
        });
        this.setTargeting = M(a, 81, function(k, l) {
            im(k, l, f, h, b);
            return e
        });
        this.updateTargetingFromMap = M(a, 85, function(k) {
            jm(k, f, h, b);
            return e
        });
        this.display = M(a, 78, function() {
            var k = Pm(g, bn().A);
            var l = void 0 === l ? document : l;
            var m;
            null != (m = k.T[f.getDomId()]) && Th(m, 19, !0);
            m = f.getDomId();
            m = xx(m);
            var n = {
                id: m
            };
            var p = void 0 === p ? Fx : p;
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
                for (v = _.y(_.z(n, "entries").call(n)), n = v.next(); !n.done; n = v.next()) r = _.y(n.value), n = r.next().value, r = r.next().value, Df(qI.test(n)), m[n] = r;
            if (!Ix.test("div")) throw Error("");
            if ("DIV" in Kx) throw Error("");
            v = "";
            if (m)
                for (w in m)
                    if (Object.prototype.hasOwnProperty.call(m, w)) {
                        if (!Ix.test(w)) throw Error("");
                        r = m[w];
                        if (null != r) {
                            n = w;
                            if (r instanceof ax) r = bx(r);
                            else {
                                if ("style" == n.toLowerCase()) throw Error("");
                                if (/^on/i.test(n)) throw Error("");
                                if (n.toLowerCase() in Jx)
                                    if (r instanceof _.cx) r = _.gb(r).toString();
                                    else if (r instanceof _.Oa) r = _.Za(r);
                                else if ("string" === typeof r) r instanceof _.Oa || (r = String(r), lx.test(r) ? r = Pa(r) : (r = String(r), r = r.replace(/(%0A|%0D)/g, ""), r = r.match(kx) ? Pa(r) : null)), r = (r || nx).toString();
                                else throw Error("");
                            }
                            n = n + '="' + xx(String(r)) + '"';
                            v += " " + n
                        }
                    }
            var w = "<div" + v;
            null == p ? p = [] : Array.isArray(p) || (p = [p]);
            !0 === Yw.div ? w += ">" : (m = _.Hx(p), w += ">" + _.Ex(m).toString() + "</div>");
            w = _.Uj(w);
            l.write(_.Ex(w));
            Tm(f, l) && (st(d), SJ(d.L, f), BL(d, k, f))
        });
        this.setTagForChildDirectedTreatment = M(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = ev(g) || new sL;
                l.setTagForChildDirectedTreatment(k);
                _.ci(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = M(a, 567, function(k) {
            "boolean" === typeof k ? Th(h, 12, k) : O(b, Wl("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = M(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = ev(g) || new sL;
                l.setTagForUnderAgeOfConsent(k);
                _.ci(g, 25, l)
            }
            return e
        })
    };
    var ur = {
        Yn: 0,
        Vn: 1,
        Wn: 2,
        Xn: 3
    };
    var fn = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5,
            GAME_MANUAL_INTERSTITIAL: 7,
            LEFT_SIDE_RAIL: 8,
            RIGHT_SIDE_RAIL: 9
        },
        hn = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        gn = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var CL = "",
        xn = null;
    var co = function(a, b, c) {
        DJ.call(this, a);
        this.slotId = b;
        this.g = c
    };
    _.T(co, DJ);
    co.prototype.getSlotId = function() {
        return this.slotId
    };
    var Qg = function(a, b, c, d) {
        DJ.call(this, a);
        this.adUnitPath = b;
        this.Ub = d;
        this.g = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.T(Qg, DJ);
    _.q = Qg.prototype;
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
        return this.Ub
    };
    var DL = function(a, b) {
        a.g = b
    };
    var Wn = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    var $n = _.Ox(function() {
            return void eB("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        EL = _.Ox(function() {
            return void eB("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        FL = _.Ox(function() {
            return void eB("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        fo = function(a, b, c, d, e) {
            nL.call(this, a, b, c);
            var f = this,
                g = bn().g,
                h = bn().A,
                k = !1;
            this.setTargeting = M(a, 1, function(l, m) {
                Pn({
                    key: l,
                    value: m,
                    Fa: g,
                    serviceName: c.getName(),
                    xm: c.enabled,
                    fb: e,
                    R: b,
                    context: a
                });
                return f
            });
            this.clearTargeting = M(a, 2, function(l) {
                Vn(l, g, c.getName(), b);
                return f
            });
            this.getTargeting = M(a, 38, function(l) {
                return Qn(l, g, b)
            });
            this.getTargetingKeys = M(a, 39, function() {
                return Rn(g)
            });
            this.setCategoryExclusion = M(a, 3, function(l) {
                "string" !== typeof l || cm(l) ? O(b, Wl("PubAdsService.setCategoryExclusion", [l])) : ((_.H = ni(g, 3, 2), _.z(_.H, "includes")).call(_.H, l) || Le(g, 3, _.rd, l), b.info(CK(l)));
                return f
            });
            this.clearCategoryExclusions = M(a, 4, function() {
                _.ik(g, 3);
                b.info(DK());
                return f
            });
            this.disableInitialLoad = M(a, 5, function() {
                Th(g, 4, !0);
                k || (k = !0, ao())
            });
            this.enableSingleRequest = M(a, 6, function() {
                if (c.enabled && !_.Q(g, 6)) return O(b, sK("PubAdsService.enableSingleRequest")), !1;
                b.info(tK("single request"));
                Th(g, 6, !0);
                return !0
            });
            this.enableAsyncRendering = M(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = M(a, 8, function() {
                eB("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = M(a, 485, function(l) {
                var m = new lu;
                m = _.qi(m, 1, 800);
                m = _.qi(m, 2, 400);
                m = _.ik(m, 3, _.Hc(3));
                if (_.ja(l)) {
                    var n = l.fetchMarginPercent;
                    "number" === typeof n && (0 <= n ? _.qi(m, 1, n) : -1 === n && _.ik(m, 1));
                    n = l.renderMarginPercent;
                    "number" === typeof n && (0 <= n ? _.qi(m, 2, n) : -1 === n && _.ik(m, 2));
                    l = l.mobileScaling;
                    "number" === typeof l && (0 < l ? _.ik(m, 3, _.Hc(l)) : -1 === l && _.ik(m, 3, _.Hc(1)))
                }
                window.IntersectionObserver || !Ci(m, 1) && !Ci(m, 2) ? _.ci(g, 5, m) : O(b, dL())
            });
            this.setCentering = M(a, 9, function(l) {
                l = !!l;
                b.info(uK("centering", String(l)));
                Th(g, 15, l)
            });
            this.definePassback = M(a, 10, function(l, m) {
                return (l = eo(a, b, c, l, m, d)) && l.Vi
            });
            this.refresh = M(a, 11, function() {
                var l = _.Ta.apply(0, arguments),
                    m = _.y(l),
                    n = m.next().value;
                m = m.next().value;
                m = void 0 === m ? {} : m;
                n && !Array.isArray(n) || !_.ja(m) || m.changeCorrelator && "boolean" !== typeof m.changeCorrelator ? O(b, Wl("PubAdsService.refresh", l)) : (m && !1 === m.changeCorrelator || g.setCorrelator(iB()), n = n ? Zn(n, c) : _.E(gE) ? c.g.filter(function(p) {
                    var r = h[p.getDomId()];
                    return !(!Tm(p) && !Em(or(r)))
                }) : c.g, c.refresh(Pm(g, h), n) || O(b, Wl("PubAdsService.refresh", l)))
            });
            this.enableVideoAds = M(a, 12, function() {
                Th(g, 21, !0);
                GL(c, g)
            });
            this.setVideoContent = M(a, 13, function(l, m) {
                HL(c, l, m, g)
            });
            this.collapseEmptyDivs = M(a, 14, function(l) {
                l = void 0 === l ? !1 : l;
                l = void 0 === l ? !1 : l;
                Th(g, 11, !0);
                l = !!l;
                Th(g, 10, l);
                b.info(AK(String(l)));
                return !!_.Q(g, 11)
            });
            this.clear = M(a, 15, function(l) {
                if (Array.isArray(l)) return IL(c, g, h, Zn(l, c));
                if (void 0 === l) return IL(c, g, h, c.g);
                O(b, Wl("PubAdsService.clear", [l]));
                return !1
            });
            this.setLocation = M(a, 16, function(l) {
                "string" !== typeof l ? O(b, Wl("PubAdsService.setLocation", [l])) : li(g, 8, l);
                return f
            });
            this.setCookieOptions = M(a, 17, function() {
                EL();
                return f
            });
            this.setTagForChildDirectedTreatment = M(a, 18, function(l) {
                FL();
                if (1 !== l && 0 !== l) return O(b, PK("PubadsService.setTagForChildDirectedTreatment", En(l), "0,1")), f;
                var m = ev(g) || new sL;
                m.setTagForChildDirectedTreatment(l);
                _.ci(g, 25, m);
                return f
            });
            this.clearTagForChildDirectedTreatment = M(a, 19, function() {
                FL();
                var l = ev(g);
                if (!l) return f;
                l.clearTagForChildDirectedTreatment();
                _.ci(g, 25, l);
                return f
            });
            this.setPublisherProvidedId = M(a, 20, function(l) {
                l = String(l);
                b.info(uK("PPID", l));
                li(g, 16, l);
                return f
            });
            this.set = M(a, 21, function(l, m) {
                nn(l, m, g, c.getName(), b);
                return f
            });
            this.get = M(a, 22, function(l) {
                return tn(l, g, b)
            });
            this.getAttributeKeys = M(a, 23, function() {
                return un(g)
            });
            this.display = M(a, 24, function(l, m, n, p) {
                return void c.display(l, m, d, n, p)
            });
            this.updateCorrelator = M(a, 25, function() {
                eB(Yn("update"));
                O(b, KK());
                g.setCorrelator(iB());
                return f
            });
            this.defineOutOfPagePassback = M(a, 35, function(l) {
                l = eo(a, b, c, l, [1, 1], d);
                if (!l) return null;
                _.ai(l.Fa, 15, 1);
                return l.Vi
            });
            this.setForceSafeFrame = M(a, 36, function(l) {
                "boolean" !== typeof l ? O(b, Wl("PubAdsService.setForceSafeFrame", [En(l)])) : Th(g, 13, l);
                return f
            });
            this.setSafeFrameConfig = M(a, 37, function(l) {
                var m = Fn(b, l);
                m ? _.ci(g, 18, m) : O(b, Wl("PubAdsService.setSafeFrameConfig", [l]));
                return f
            });
            this.setRequestNonPersonalizedAds = M(a, 445, function(l) {
                FL();
                if (0 !== l && 1 !== l) return O(b, PK("PubAdsService.setRequestNonPersonalizedAds", En(l), "0,1")), f;
                var m = ev(g) || new sL;
                Th(m, 8, !!l);
                _.ci(g, 25, m);
                return f
            });
            this.setTagForUnderAgeOfConsent = M(a, 447, function(l) {
                l = void 0 === l ? 2 : l;
                FL();
                if (2 !== l && 0 !== l && 1 !== l) return O(b, PK("PubadsService.setTagForUnderAgeOfConsent", En(l), "2,0,1")), f;
                var m = ev(g) || new sL;
                m.setTagForUnderAgeOfConsent(l);
                _.ci(g, 25, m);
                return f
            });
            this.getCorrelator = M(a, 27, function() {
                return String(Ky(g, 26))
            });
            this.getTagSessionCorrelator = M(a, 631, function() {
                return Xj(_.t)
            });
            this.getVideoContent = M(a, 30, function() {
                return JL(c, g)
            });
            this.getVersion = M(a, 568, function() {
                return a.Hc ? String(a.Hc) : a.Bb
            });
            this.forceExperiment = M(a, 569, function(l) {
                return void c.forceExperiment(l)
            });
            this.setCorrelator = M(a, 28, function(l) {
                eB(Yn("set"));
                O(b, JK());
                if (Yg(window)) return f;
                if (!to(l)) return O(b, Wl("PubadsService.setCorrelator", [En(l)])), f;
                l = g.setCorrelator(l);
                Th(l, 27, !0);
                return f
            });
            this.markAsAmp = M(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = M(a, 571, function() {
                return !!_.Q(g, 6)
            });
            this.setImaContent = M(a, 328, function(l, m) {
                _.Bi(g, 22) ? HL(c, l, m, g) : (Th(g, 21, !0), GL(c, g), "string" === typeof l && li(g, 19, l), "string" === typeof m && li(g, 20, m))
            });
            this.getImaContent = M(a, 329, function() {
                return _.Bi(g, 22) ? JL(c, g) : c.enabled ? {
                    vid: _.I(g, 19) || "",
                    cmsid: _.I(g, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = M(a, 572, function() {
                return !!_.Q(g, 4)
            });
            this.setPrivacySettings = M(a, 648, function(l) {
                if (!_.ja(l)) return O(b, Wl("PubAdsService.setPrivacySettings", [l])), f;
                var m = l.restrictDataProcessing,
                    n = l.childDirectedTreatment,
                    p = l.underAgeOfConsent,
                    r = l.limitedAds,
                    v = l.nonPersonalizedAds,
                    w = l.userOptedOutOfPersonalization,
                    x = l.trafficSource,
                    B, C = null != (B = ev(g)) ? B : new sL;
                "boolean" === typeof v ? Th(C, 8, v) : void 0 !== v && O(b, Dn("PubAdsService.setPrivacySettings", En(l), "nonPersonalizedAds", En(v)));
                "boolean" === typeof w ? Th(C, 13, w) : void 0 !== w && O(b, Dn("PubAdsService.setPrivacySettings", En(l), "userOptedOutOfPersonalization", En(w)));
                "boolean" === typeof m ? Th(C, 1, m) : void 0 !== m && O(b, Dn("PubAdsService.setPrivacySettings", En(l), "restrictDataProcessing", En(m)));
                if ("boolean" === typeof r) {
                    m = Xn();
                    if (r && !_.Q(C, 9) && a.Qc) {
                        v = a.Ra;
                        w = v.Pc;
                        B = rl(a);
                        var F = new OC;
                        F = _.ul(F, 1, !0);
                        F = _.ul(F, 2, m);
                        B = _.hj(B, 11, wl, F);
                        w.call(v, B)
                    }
                    m ? Th(C, 9, r) : r && O(b, cL())
                } else void 0 !== r && O(b, Dn("PubAdsService.setPrivacySettings", En(l), "limitedAds", En(r)));
                void 0 !== p && (null === p ? C.setTagForUnderAgeOfConsent(2) : !1 === p ? C.setTagForUnderAgeOfConsent(0) : !0 === p ? C.setTagForUnderAgeOfConsent(1) : O(b, Dn("PubAdsService.setPrivacySettings", En(l), "underAgeOfConsent", En(p))));
                void 0 !== n && (null === n ? C.clearTagForChildDirectedTreatment() : !1 === n ? C.setTagForChildDirectedTreatment(0) : !0 === n ? C.setTagForChildDirectedTreatment(1) : O(b, Dn("PubAdsService.setPrivacySettings", En(l), "childDirectedTreatment", En(n))));
                void 0 !== x && (null === x ? _.ik(C, 10) : (_.H = _.z(Object, "values").call(Object, gn), _.z(_.H, "includes")).call(_.H, x) ? _.ai(C, 10, x) : O(b, Dn("PubAdsService.setPrivacySettings", En(l), "trafficSource", En(x))));
                _.ci(g, 25, C);
                return f
            })
        };
    _.T(fo, nL);
    var KL = function(a, b) {
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
    var LL = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        ML = function(a, b) {
            a.advertiserId = b
        },
        NL = function(a, b) {
            a.campaignId = b
        },
        OL = function(a, b) {
            a.yieldGroupIds = b
        },
        PL = function(a, b) {
            a.companyIds = b
        };
    var wm = function(a) {
        this.F = _.A(a)
    };
    _.T(wm, _.D);
    wm.prototype.getWidth = function() {
        return Xs(this, 1)
    };
    wm.prototype.getHeight = function() {
        return Xs(this, 2)
    };
    var no = function() {
        var a = new wm;
        return Th(a, 3, !0)
    };
    var zm = function(a) {
        this.F = _.A(a)
    };
    _.T(zm, _.D);
    zm.da = [2];
    var QL = function(a) {
        this.F = _.A(a)
    };
    _.T(QL, _.D);
    var RL = function(a) {
        var b = new QL;
        return _.ai(b, 1, a)
    };
    var SL = function(a) {
        this.F = _.A(a)
    };
    _.T(SL, _.D);
    SL.da = [1];
    var TL = function(a) {
        this.F = _.A(a)
    };
    _.T(TL, _.D);
    var UL = function(a) {
        this.F = _.A(a)
    };
    _.T(UL, _.D);
    UL.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    UL.prototype.getDomId = function() {
        return _.I(this, 2)
    };
    var VL = function(a, b) {
        li(a, 2, b)
    };
    UL.prototype.Pa = function() {
        return _.bk(this, gm, 3)
    };
    UL.prototype.getServices = function(a) {
        return Oy(this, 4, a)
    };
    var WL = function(a, b) {
        _.pm(a, 5, b)
    };
    UL.prototype.getClickUrl = function() {
        return _.I(this, 7)
    };
    UL.prototype.setClickUrl = function(a) {
        return li(this, 7, a)
    };
    UL.prototype.getCategoryExclusions = function(a) {
        return Oy(this, 8, a)
    };
    var dm = function(a) {
        return _.bk(a, gm, 9)
    };
    UL.prototype.yc = function() {
        return _.vm(this, Bn, 13)
    };
    var or = function(a) {
        return _.gg(a, 15, 0)
    };
    UL.da = [3, 4, 5, 6, 8, 9, 27];
    var XL = function(a, b) {
        this.width = a;
        this.height = b
    };
    XL.prototype.getWidth = function() {
        return this.width
    };
    XL.prototype.getHeight = function() {
        return this.height
    };
    var YL = new _.u.Set(["unhideWindow", "navBar"]);
    var Co = function(a, b, c) {
        var d = this,
            e = xL(bn(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.kp(c, function() {
            e = new UL;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        c.listen(Zs, function(n) {
            var p = n.detail;
            n = p.Rh;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = M(a, 40, function(n, p) {
            ho(n, p, c, e, b);
            return d
        });
        this.get = M(a, 41, function(n) {
            return io(n, c, e, b)
        });
        this.getAttributeKeys = M(a, 42, function() {
            return jo(e)
        });
        this.addService = M(a, 43, function(n) {
            n = Sl.get(n);
            if (!n) return O(b, Wl("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((_.H = ni(e, 4, 2), _.z(_.H, "includes")).call(_.H, p)) return b.info(dK(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = M(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new uo("Size mapping must be an array");
                var r = n.map(vo);
                _.pm(p, 6, r)
            } catch (v) {
                n = v, Gl(a, 44, n), eB("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = M(a, 45, function(n) {
            bm(n, e, c, b);
            return d
        });
        this.setCategoryExclusion = M(a, 46, function(n) {
            var p = e;
            "string" !== typeof n || cm(n) ? O(b, Wl("Slot.setCategoryExclusion", [n]), c) : ((_.H = ni(p, 8, 2), _.z(_.H, "includes")).call(_.H, n) || Le(p, 8, _.rd, n), b.info(eK(n), c));
            return d
        });
        this.clearCategoryExclusions = M(a, 47, function() {
            _.ik(e, 8);
            b.info(fK(), c);
            return d
        });
        this.getCategoryExclusions = M(a, 48, function() {
            return ni(e, 8, 2).slice()
        });
        this.setTargeting = M(a, 49, function(n, p) {
            im(n, p, c, e, b);
            return d
        });
        this.updateTargetingFromMap = M(a, 649, function(n) {
            jm(n, c, e, b);
            return d
        });
        this.clearTargeting = M(a, 50, function(n) {
            rm(n, c, e, b);
            return d
        });
        this.getTargeting = M(a, 51, function(n) {
            return lm(n, c, e, b)
        });
        this.getTargetingKeys = M(a, 52, function() {
            return mm(e)
        });
        this.setCollapseEmptyDiv = M(a, 53, function(n, p) {
            var r = e;
            p = void 0 === p ? !1 : p;
            p = void 0 === p ? !1 : p;
            "boolean" !== typeof n || "boolean" !== typeof p ? O(b, Wl("Slot.setCollapseEmptyDiv", [n, p]), c) : (r = Th(r, 10, n), Th(r, 11, n && p), p && !n && O(b, gK(c.toString()), c));
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
            "boolean" !== typeof n ? O(b, Wl("Slot.setForceSafeFrame", [String(n)]), c) : Th(p, 12, n);
            return d
        });
        this.setSafeFrameConfig = M(a, 56, function(n) {
            var p = e,
                r = Fn(b, n);
            r ? _.ci(p, 13, r) : b.error(Wl("Slot.setSafeFrameConfig", [n]), c);
            return d
        });
        c.listen(HJ, function(n) {
            n = n.detail;
            if (Gn(n, 8)) g = null;
            else {
                g = new LL;
                var p = !!Gn(n, 9);
                g.isBackfill = p;
                var r = Ly(n, 15),
                    v = Ly(n, 16);
                r.length && v.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = v[0], p || (g.creativeId = r[0], g.lineItemId = v[0], (p = Ly(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                Ly(n, 17).length && ML(g, Ly(n, 17)[0]);
                Ly(n, 18).length && NL(g, Ly(n, 18)[0]);
                Ly(n, 19).length && OL(g, Ly(n, 19));
                Ly(n, 20).length && PL(g, Ly(n, 20));
                n = ve(n, 45, ge(n.F) & 34 ? De : Ee, 2).map(function(w) {
                    return Zd(w)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = M(a, 355, function() {
            return g
        });
        this.getName = M(a, 170, function() {
            b.error(aL());
            return c.getAdUnitPath()
        });
        var m = new KL(a, c);
        this.getSlotId = M(a, 579, function() {
            return m
        });
        this.getServices = M(a, 580, function() {
            return ni(e, 4, 2).map(function(n) {
                var p = zL[n];
                if (p) {
                    var r, v, w;
                    n = null != (w = null == (v = (r = wo())[p]) ? void 0 : v.call(r)) ? w : null
                } else n = null;
                return n
            })
        });
        this.getSizes = M(a, 581, function(n, p) {
            var r, v;
            return null != (v = null == (r = Am(e, n, p)) ? void 0 : r.map(function(w) {
                return _.Q(w, 3) ? "fluid" : new XL(w.getWidth(), w.getHeight())
            })) ? v : null
        });
        this.getClickUrl = M(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = M(a, 583, function() {
            for (var n = {}, p = _.y(dm(e)), r = p.next(); !r.done; r = p.next()) r = r.value, _.I(r, 1) && (n[dk(r, 1)] = km(r));
            return n
        });
        this.getOutOfPage = M(a, 584, function(n) {
            return "number" === typeof n ? or(e) === n : 0 !== or(e)
        });
        this.getCollapseEmptyDiv = M(a, 585, function() {
            return null != Gn(e, 10) ? _.Q(e, 10) : null
        });
        this.getDivStartsCollapsed = M(a, 586, function() {
            return null != Gn(e, 11) ? _.Q(e, 11) : null
        });
        c.listen(IJ, function(n) {
            h = n.detail.uk
        });
        this.getContentUrl = M(a, 587, function() {
            return h()
        });
        this.getFirstLook = M(a, 588, function() {
            eB("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen(HJ, function(n) {
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
            if (Sg(n)) {
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
                                "string" !== typeof B || cm(B) || (null === C ? r.delete(B) : C && r.set(B, JSON.stringify(C)))
                            }
                        }
                    } else O(b, Wl("googletag.Slot.setConfig", [x]))
                }
                if (_.z(Object, "hasOwn").call(Object, n, "interstitial"))
                    if (5 !== or(p)) O(b, mL("interstitial"), c);
                    else {
                        x = n.interstitial;
                        b.info(iL("interstitial", En(x)), c);
                        if (Sg(x))
                            for (r = {}, x = _.y(_.z(Object, "entries").call(Object, x)), B = x.next(); !B.done; B = x.next()) switch (C = _.y(B.value), B = C.next().value, C = C.next().value, B) {
                                case "triggers":
                                    r.triggers = C;
                                    break;
                                default:
                                    O(b, kL("interstitial", B), c)
                            } else O(b, lL("googletag.slot.setConfig", "interstitial", En(x)), c), r = null;
                        B = r;
                        r = new SL;
                        x = {};
                        if (B && B.triggers)
                            if (B = B.triggers, Sg(B))
                                for (x.triggers = {}, B = _.y(_.z(Object, "entries").call(Object, B)), C = B.next(); !C.done; C = B.next()) {
                                    var F = _.y(C.value);
                                    C = F.next().value;
                                    F = F.next().value;
                                    var G = C;
                                    C = F;
                                    if (YL.has(G))
                                        if (yo(C)) switch (G) {
                                            case "unhideWindow":
                                                F = RL(2);
                                                F = Th(F, 2, C);
                                                kk(r, 1, QL, F);
                                                x.triggers.Io = C;
                                                break;
                                            case "navBar":
                                                _.E(SD) ? (F = RL(3), F = Th(F, 2, C), kk(r, 1, QL, F), x.triggers.vo = C) : O(b, kL("interstitial.triggers", G), c)
                                        } else O(b, lL("interstitial.triggers", G, En(C)), c);
                                        else O(b, kL("interstitial.triggers", G), c)
                                } else O(b, lL("interstitial", "triggers", En(B)), c);
                        b.info(jL("interstitial", En(x)), c);
                        _.ci(p, 29, r)
                    }
                _.E(xo) ? _.z(Object, "hasOwn").call(Object, n, "adExpansion") && Ao(p, v) : Ao(p, v);
                if (_.E(mD) && _.z(Object, "hasOwn").call(Object, n, "outstream") && (_.ik(p, 31), null !== w))
                    if (Sg(w))
                        if (0 !== or(p)) O(b, mL("outstream", String(or(p))), c);
                        else {
                            a: {
                                v = ["exposeVast"];n = new _.u.Map;w = _.y(_.z(Object, "entries").call(Object, w));
                                for (r = w.next(); !r.done; r = w.next()) x = _.y(r.value),
                                r = x.next().value,
                                x = x.next().value,
                                _.z(v, "includes").call(v, r) ? n.set(r, x) : O(b, kL("outstream", r), c);
                                if (0 === n.size) w = null;
                                else
                                    for (w = new TL, n = _.y(n), v = n.next(); !v.done; v = n.next())
                                        if (r = _.y(v.value), v = r.next().value, r = r.next().value, "exposeVast" === v) {
                                            if (!yo(r)) {
                                                O(b, lL("outstream", "exposeVast", En(r)), c);
                                                w = null;
                                                break a
                                            }
                                            Th(w, 1, r)
                                        }
                            }
                            w && _.ci(p, 31, w)
                        }
                else O(b, lL("googletag.slot.setConfig", "outstream", En(w)), c)
            } else O(b, Wl("googletag.slot.setConfig", [n]), c)
        })
    };
    var Y = function(a, b, c) {
        MH.call(this, b, c);
        this.context = a
    };
    _.T(Y, MH);
    Y.prototype.I = function(a) {
        Gl(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var Mo = function(a, b, c, d, e) {
        Y.call(this, a, 1226);
        this.Pf = b;
        this.startTime = _.Wf();
        this.j = X(this, c);
        this.Ba = null != d ? d : this.context.Ra;
        this.o = null != e ? e : .01
    };
    _.T(Mo, Y);
    Mo.prototype.g = function() {
        _.oh() < this.o && this.Ba.Jc.Sc.ji.rk.sk.je({
            ne: _.Wf() - this.startTime,
            Pf: this.Pf,
            oi: !!_.I(this.j.value, 2),
            pi: !!_.I(this.j.value, 1),
            li: !!_.I(this.j.value, 11)
        })
    };
    Mo.prototype.l = function(a) {
        this.I(a)
    };
    var Ko = function(a, b, c, d, e) {
        Y.call(this, a, 959);
        this.kb = b;
        this.output = W(this);
        this.j = X(this, b);
        RH(this, c);
        RH(this, d);
        e && RH(this, e)
    };
    _.T(Ko, Y);
    Ko.prototype.g = function() {
        this.output.G(this.j.value)
    };
    var Jo = function(a, b, c, d, e, f) {
        Y.call(this, a, 1172);
        this.R = b;
        this.L = c;
        this.B = d;
        this.j = OH(this);
        RH(this, e);
        this.o = X(this, f)
    };
    _.T(Jo, Y);
    Jo.prototype.g = function() {
        var a = this,
            b = _.Mf(ID);
        b = new IG(this.B, {
            gppApiDetectionMode: b,
            addListenerRemovalCallback: _.E(xD)
        });
        _.S(this, b);
        if (NF(b.caller)) {
            var c = this.L.M,
                d = c.status,
                e = function(f) {
                    if (f.internalErrorState) UG(a.o.value, f.gppString);
                    else if (ah(f.applicableSections)) SG(TG(a.o.value, f.applicableSections.filter(function(k) {
                        return _.z(Number, "isInteger").call(Number, k)
                    })), !1);
                    else {
                        var g = UG(TG(a.o.value, f.applicableSections.filter(function(k) {
                            return _.z(Number, "isInteger").call(Number, k)
                        })), f.gppString);
                        try {
                            var h = MG(f.gppString)
                        } catch (k) {
                            Gl(a.context, 1182, k), h = !1
                        }
                        SG(g, h)
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
                    NJ(c);
                    c.g.push(e);
                    this.R.info(NK());
                    b.addEventListener(Cl(this.context, 1173, function(f) {
                        if ("ready" === f.pingData.signalStatus || ah(f.pingData.applicableSections)) c.data = f.pingData, c.status = 2, c.g.forEach(function(g) {
                            g(f.pingData)
                        }), c.g = []
                    }));
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Ho = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 874);
        this.R = b;
        this.L = c;
        this.B = d;
        this.o = e;
        this.j = OH(this);
        RH(this, f);
        this.C = X(this, g)
    };
    _.T(Ho, Y);
    Ho.prototype.g = function() {
        var a = this,
            b = new UF(this.B, {
                timeoutMs: -1,
                bk: !0
            });
        _.S(this, b);
        if (WF(b)) {
            var c = this.L.J,
                d = c.status,
                e = function(f) {
                    var g = a.C.value,
                        h, k;
                    if (k = !(a.o ? _.Q(a.o, 9) : _.E(AD) && Xn())) k = {
                        hl: _.E(zD) && _.um(221)
                    }, k = void 0 === k ? {} : k, k = aG(f) ? !1 === f.gdprApplies ? !0 : "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !k.ro || "string" !== typeof f.tcString || !f.tcString.length ? !k.hl : ZF(f, "1", 0) : !1;
                    k = Th(g, 5, k);
                    var l = !bG(f, ["3", "4"], 0);
                    k = Th(k, 9, l);
                    k = li(k, 2, f.tcString);
                    l = null != (h = f.addtlConsent) ? h : "";
                    h = li(k, 4, l);
                    _.ai(h, 7, f.internalErrorState);
                    null != f.gdprApplies && Th(g, 3, f.gdprApplies);
                    bG(f, ["2", "7", "9", "10"], 1) || Th(g, 8, !0);
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
                    NJ(c);
                    c.g.push(e);
                    this.R.info(MK());
                    b.addEventListener(function(f) {
                        aG(f) ? ("tcunavailable" === f.tcString ? a.R.info(OK("failed")) : a.R.info(OK("succeeded")), c.data = f, c.status = 2, c.g.forEach(function(g) {
                            g(f)
                        }), c.g = []) : NJ(c)
                    });
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Go = function(a, b, c, d, e) {
        Y.call(this, a, 875);
        this.R = b;
        this.B = c;
        this.j = OH(this);
        RH(this, d);
        this.o = X(this, e)
    };
    _.T(Go, Y);
    Go.prototype.g = function() {
        var a = this,
            b = new wG(this.B);
        _.S(this, b);
        if (NF(b.caller)) {
            var c = Cl(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && (li(a.o.value, 1, d.uspString), RG(a.o.value, Cl(a.context, 1187, function() {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    4 == f.length && (-1 == f.indexOf("-") || "---" === f.substring(1)) && "1" <= f[0] && "9" >= f[0] && GB.hasOwnProperty(f[1]) && GB.hasOwnProperty(f[2]) && GB.hasOwnProperty(f[3]) ? (f = new FB, f = _.vl(f, 1, parseInt(e[0], 10)), f = _.K(f, 2, GB[e[1]]), f = _.K(f, 3, GB[e[2]]), e = _.K(f, 4, GB[e[3]])) : e = null;
                    return 2 === (null == e ? void 0 : _.gg(e, 3, 0))
                })()));
                a.j.notify()
            });
            this.R.info(LK());
            xG(b, c)
        } else this.j.notify()
    };
    var Eo = function(a, b) {
        Y.call(this, a, 958);
        this.j = b;
        this.kb = W(this)
    };
    _.T(Eo, Y);
    Eo.prototype.g = function() {
        var a = new QG,
            b = this.j ? _.Q(this.j, 9) : Xn(),
            c = _.E(yD) && _.um(221);
        Th(a, 5, !b && !c);
        this.kb.G(a)
    };
    var Fo = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Y.call(this, a, 960);
        this.B = b;
        this.o = d;
        this.j = X(this, c)
    };
    _.T(Fo, Y);
    Fo.prototype.g = function() {
        var a = this;
        Il(this.context, 894, function() {
            return void xp("cmpMet", function(b) {
                Xo(b, a.context);
                var c = new UF(a.B);
                _.S(a, c);
                var d = new wG(a.B);
                _.S(a, d);
                Yo(b, "fc", Number(a.j.value));
                Yo(b, "tcfv1", Number(!!a.B.__cmp));
                Yo(b, "tcfv2", Number(WF(c)));
                Yo(b, "usp", Number(!!NF(d.caller)));
                Yo(b, "ptt", 17);
                b = _.Mf(ID);
                if (0 !== b) {
                    c = new IG(a.B, {
                        gppApiDetectionMode: b
                    });
                    if (NF(c.caller)) switch (b) {
                        case 1:
                            ih(31080194);
                            break;
                        case 2:
                            ih(31080195);
                            break;
                        case 3:
                            ih(31080196)
                    }
                    _.S(a, c)
                }
            }, a.o)
        })
    };
    var ZL = function(a, b, c, d) {
        Y.call(this, a, 1103);
        this.j = b;
        this.Z = c;
        this.privacyTreatments = d;
        this.output = W(this)
    };
    _.T(ZL, Y);
    ZL.prototype.g = function() {
        this.output.G(!!bh(this.Z) && !_.Q(this.Z, 9) && !_.Q(this.Z, 13) && (!_.E(Io) || !_.Q(this.Z, 12)) && (this.j ? _.Q(this.j, 9) || _.Q(this.j, 8) || _.Q(this.j, 1) || _.E(cE) && _.Q(this.j, 13) || 1 === _.gg(this.j, 6, 2) || 1 === _.Vc(_.$h(this.j, 5)) || _.z(this.privacyTreatments, "includes").call(this.privacyTreatments, 1) ? !1 : !0 : !0))
    };
    var Qo = function(a) {
        this.R = a;
        this.A = this.g = 0
    };
    Qo.prototype.push = function() {
        for (var a = _.y(_.Ta.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.u.globalThis), this.g++)
            } catch (c) {
                this.A++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.R.error(lK(String(c)))
            }
        }
        this.R.info(mK(String(this.g), String(this.A)));
        return this.g
    };
    var Oo = function(a, b) {
        this.push = M(a, 76, b.push.bind(b))
    };
    var $L = ["Debug", "Info", "Warning", "Error", "Fatal"],
        aM = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.g = c;
            this.timestamp = new Date
        };
    _.q = aM.prototype;
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
        return this.timestamp.toTimeString() + ": " + $L[this.level] + ": " + this.message
    };
    var bM = _.pw(["https://console.googletagservices.com/pubconsole/loader.js"]),
        bp = _.fb(bM),
        fp, ep = !1,
        Vo = !1,
        Zo = !1;
    var ot = function(a, b) {
        this.getAllEvents = M(a, 563, function() {
            return Vo ? cM(b).slice() : []
        });
        this.getEventsBySlot = M(a, 565, function(c) {
            return Vo ? dM(b, c).slice() : []
        });
        this.getEventsByLevel = M(a, 566, function(c) {
            return Vo ? eM(b, c).slice() : []
        })
    };
    var fM = {
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
                return hp(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return hp(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return hp(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return hp(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return hp(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return hp(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return hp(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            145: function(a) {
                return hp(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
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
                return "Refresh is disabled for " + hp(a[0]) + " " + a[1] + "."
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
        gM = {
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
    var hM = function(a) {
            this.context = a;
            this.l = this.g = 0;
            this.j = window;
            this.A = [];
            this.A.length = 1E3
        },
        cM = function(a) {
            return [].concat(_.ri(a.A.slice(a.g)), _.ri(a.A.slice(0, a.g))).filter(function(b) {
                return !!b
            })
        },
        dM = function(a, b) {
            return cM(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        eM = function(a, b) {
            return cM(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    hM.prototype.log = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? !1 : d;
        var e, f, g = new aM(a, b, null != (f = null == (e = c) ? void 0 : e.g) ? f : null);
        this.A[this.g] = g;
        this.g = (this.g + 1) % 1E3;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs();
        e = b.getMessageId();
        var k = fM[e] || gM[e];
        e = void 0;
        if (k) {
            e = k(h);
            if (d) throw new uo(e);
            d = this.l < _.Mf(ED) && f && _.t.console;
            if (this.j === top && d || _.z(_.t.navigator.userAgent, "includes").call(_.t.navigator.userAgent, "Lighthouse")) {
                d = "[GPT] " + e;
                var l, m, n, p;
                2 === a ? null == (m = (l = _.t.console).warn) || m.call(l, d) : null == (p = (n = _.t.console).error) || p.call(n, d);
                this.l++
            }
        }
        a: if (m = e, l = c, l = void 0 === l ? null : l, this.context.tm) {
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
            c = a.sm;
            p = new SC;
            p = _.aj(p, 1, this.context.pvsid);
            d = jh();
            p = _.Je(p, 2, d, Wc);
            p = _.bj(p, 3, this.context.bg);
            p = _.bj(p, 4, this.context.yb);
            p = _.aj(p, 5, this.context.am);
            n = _.K(p, 6, n);
            m = _.bj(n, 7, m);
            n = b.getMessageId();
            m = _.K(m, 8, n);
            b = b.getMessageArgs();
            b = _.Je(m, 9, b, _.rd);
            m = Bl(null != (w = null == (r = l) ? void 0 : r.getAdUnitPath()) ? w : "");
            r = _.bj(b, 10, m);
            w = null == (v = l) ? void 0 : v.getAdUnitPath();
            v = _.bj(r, 11, w);
            c.call(a, v)
        }
        return g
    };
    hM.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var O = function(a, b, c) {
        return a.log(2, b, c, !1)
    };
    hM.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var iM = function() {
            var a = {
                    ba: bn().g,
                    sj: new Date(Date.now()),
                    Th: window.location.href
                },
                b = this;
            a = void 0 === a ? {} : a;
            var c = void 0 === a.ba ? bn().g : a.ba,
                d = void 0 === a.sj ? new Date(Date.now()) : a.sj,
                e = void 0 === a.Th ? window.location.href : a.Th;
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
                l = null !== l ? _.ph("w5uHecUBa2S:" + h + ":" + l) % k === Math.floor(d.valueOf() / 864E5) % k : void 0;
                return l
            }, a[13] = function() {
                return _.Ta.apply(0, arguments).some(function(h) {
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
                return _.z(_.Ta.apply(0, arguments), "includes").call(_.Ta.apply(0, arguments), String(_.ph(e)))
            }, a), g[4] = (f[14] = function() {
                var h = Number(b.j || void 0);
                isNaN(h) ? h = void 0 : (h = new Date(1E3 * h), h = 1E4 * h.getFullYear() + 100 * (h.getMonth() + 1) + h.getDate());
                return h
            }, f), g[5] = {}, g)
        },
        jM = function(a, b) {
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
    var Pu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 863);
        this.o = c;
        this.Hd = Number(b);
        this.j = X(this, d);
        this.H = X(this, e);
        this.K = X(this, f);
        this.C = X(this, g)
    };
    _.T(Pu, Y);
    Pu.prototype.g = function() {
        var a = this.K.value,
            b = this.j.value,
            c = this.C.value,
            d = this.H.value,
            e = this.o;
        var f = jp(e);
        var g = b.getBoundingClientRect();
        e = _.Sk(e) ? Hm(b, e) : {
            x: 0,
            y: 0
        };
        b = e.x;
        e = e.y;
        g = new _.nB(e, b + g.right, e + g.bottom, b);
        b = new kH;
        b = _.qi(b, 1, g.top);
        b = _.qi(b, 3, g.bottom);
        b = _.qi(b, 2, g.left);
        g = _.qi(b, 4, g.right);
        b = new lH;
        b = _.ik(b, 1, _.Zc(this.Hd));
        d = Th(b, 2, !d);
        d = _.ci(d, 3, g);
        c = _.qi(d, 4, c);
        f = _.qi(c, 5, f);
        f = {
            type: "asmres",
            payload: cl(f)
        };
        a.ports[0].postMessage(f)
    };
    var qr = function(a, b, c, d) {
        Y.call(this, a, 1061);
        var e = this;
        this.output = W(this);
        this.output.La(new _.u.Promise(function(f) {
            var g = b.listen(c, function(h) {
                h = d(h);
                null !== h && (g(), f(h))
            });
            _.kp(e, g)
        }))
    };
    _.T(qr, Y);
    qr.prototype.g = function() {};
    var Yq = function(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        Y.call(this, a, 1061);
        var e = this;
        this.output = OH(this);
        IH(this.output, new _.u.Promise(function(f) {
            var g = b.listen(c, function(h) {
                d(h) && (g(), f())
            });
            _.kp(e, g)
        }))
    };
    _.T(Yq, Y);
    Yq.prototype.g = function() {};
    var Ku = function(a, b, c, d) {
        qr.call(this, a, b, Zq, function(e) {
            e = e.detail;
            var f;
            return "asmreq" === (null == (f = e.data) ? void 0 : f.type) && Xs(jH(e.data.payload), 1) === Number(c) ? e : null
        });
        this.o = d;
        this.j = W(this)
    };
    _.T(Ku, qr);
    Ku.prototype.g = function() {
        this.j.G(jp(this.o))
    };
    var kM = /(<head(\s+[^>]*)?>)/i,
        ju = function(a, b, c, d, e) {
            Y.call(this, a, 665);
            this.Sa = b;
            this.Id = c;
            this.isBackfill = d;
            this.Gb = e;
            this.output = W(this)
        };
    _.T(ju, Y);
    ju.prototype.g = function() {
        var a;
        0 !== this.Sa.kind || null == (a = this.Id) || !_.I(a, 1) || this.Gb ? this.output.G(this.Sa) : (a = this.Sa.tb, Ja() || (a = a.replace(kM, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.isBackfill && (a = a.replace(kM, '$1<meta name="referrer" content="origin">')), this.output.G({
            kind: 0,
            tb: a
        }))
    };
    var lM = function(a, b, c) {
        Y.call(this, a, 1124);
        this.de = OH(this);
        this.o = X(this, b);
        this.j = X(this, c)
    };
    _.T(lM, Y);
    lM.prototype.g = function() {
        _.uB(this.j.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.uB(this.o.value, "min-width", "100%");
        this.de.notify()
    };
    var mM = function(a, b, c, d, e) {
        Y.call(this, a, 1125);
        this.o = X(this, b);
        this.j = X(this, c);
        RH(this, d);
        RH(this, e)
    };
    _.T(mM, Y);
    mM.prototype.g = function() {
        var a = this.o.value,
            b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.uB(this.j.value, "visibility", "visible"))
    };
    var Qu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 718);
        this.slotId = b;
        this.sb = c;
        this.Id = d;
        this.o = e;
        this.C = f;
        this.output = W(this);
        this.j = new Yq(this.context, this.slotId, Mu);
        this.H = X(this, g)
    };
    _.T(Qu, Y);
    Qu.prototype.g = function() {
        var a = !this.H.value;
        if (!this.Id || "height" !== this.sb || a) this.j.za(), this.output.G(!1);
        else {
            a = new ok;
            _.S(this, a);
            var b = new lM(this.context, this.o, this.C);
            J(a, b);
            J(a, this.j);
            J(a, new mM(this.context, this.o, this.C, this.j.output, b.de));
            xk(a);
            this.output.G(!0)
        }
    };
    var nM = [2, 1];
    var oM = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Y.call(this, a, 699);
        this.aa = b;
        this.slotId = c;
        this.j = d;
        this.Fd = e;
        this.sb = f;
        this.Na = g;
        this.Mc = OH(this);
        this.H = X(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.K = PH(this, m);
        this.P = X(this, n)
    };
    _.T(oM, Y);
    oM.prototype.g = function() {
        var a = this.H.value,
            b = this.o.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.sb) {
            var c, d = null != (c = this.K.value) ? c : 0;
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
                        l = this.Fd,
                        m = this.Na,
                        n, p = a.parentElement ? null == (n = Um(a.parentElement, window)) ? void 0 : n.width : void 0;
                    n = c.width;
                    var r = c.height,
                        v = 0;
                    var w = 0;
                    var x = Cm(k);
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
                        rp(b, a, x);
                        b = {};
                        if ((_.H = [2, 5], _.z(_.H, "includes")).call(_.H, d) || v && n > op(e.width)) b.width = w, b["max-width"] = w;
                        r && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (F in b)
                                if (Object.prototype.hasOwnProperty.call(b, F)) {
                                    var F = !1;
                                    break c
                                }
                            F = !0
                        }
                        F ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.qp(a, b), b = !0)
                    } else b = !1;
                    b: switch (w = c.width, F = f.defaultView || f.parentWindow || _.t, d) {
                        case 2:
                        case 5:
                            a = sp(a, F, w, e, l);
                            break b;
                        case 1:
                        case 4:
                            if (e = a.parentElement)
                                if (l = Nm(e)) {
                                    B = l.width;
                                    l = Tm(h, F.document);
                                    n = Um(l, F);
                                    r = n.position;
                                    C = op(n.width) || 0;
                                    v = Um(e, F);
                                    x = "rtl" === v.direction ? "Right" : "Left";
                                    l = x.toLowerCase();
                                    F = "absolute" === r ? 0 : op(v["padding" + x]);
                                    v = op(v["border" + x + "Width"]);
                                    w = Math.max(Math.round((B - Math.max(C, w)) / 2), 0);
                                    B = {};
                                    C = 0;
                                    var G = Mp(n);
                                    G && (C = G[4] * ("Right" === x ? -1 : 1), x = G[3] || 1, 1 !== (G[0] || 1) || 1 !== x) && (G[0] = 1, G[3] = 1, B.transform = "matrix(" + G.join(",") + ")");
                                    x = 0;
                                    switch (r) {
                                        case "fixed":
                                            var P, R = null != (P = Number(Vm(n.getPropertyValue(l)))) ? P : 0,
                                                L;
                                            P = null != (L = e.getBoundingClientRect().left) ? L : 0;
                                            x = R - P;
                                            break;
                                        case "relative":
                                            x = null != (R = Number(Vm(n.getPropertyValue(l)))) ? R : 0;
                                            break;
                                        case "absolute":
                                            B[l] = "0"
                                    }
                                    B["margin-" + l] = w - F - v - x - C + "px";
                                    _.qp(a, B);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (_.z(nM, "includes").call(nM, d) && up(g, f, h, k, d, c.width, c.height, p, "gpt_slotexp", m), f = !0) : f = !1;
                    break;
                case 3:
                    d = this.context, L = this.aa, f = this.slotId, h = this.j, p = this.Fd, k = this.Na, m = a.parentElement ? null == (g = Um(a.parentElement, window)) ? void 0 : g.width : void 0, g = c.width, P = c.height, R = op(e.height) || 0, P >= R || "none" === e.display || "hidden" === e.visibility || !p || -12245933 === p.width || a.getBoundingClientRect().bottom <= p.height ? f = !1 : (p = {
                        height: P + "px"
                    }, rp(b, a, p), _.qp(a, p), up(d, L, f, h, 3, g, P, m, "gpt_slotred", k), f = !0)
            }!f && _.E(nD) && up(this.context, this.aa, this.slotId, this.j, 0, c.width, c.height, void 0, "gpt_pgbrk", this.Na)
        }
        this.Mc.notify()
    };
    var pM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1114);
        this.K = b;
        this.ja = c;
        this.j = d;
        this.H = e;
        this.C = W(this);
        this.o = W(this);
        this.P = X(this, f)
    };
    _.T(pM, Y);
    pM.prototype.g = function() {
        if (this.K) {
            var a = this.K.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0]) qM(this);
            else {
                var b = a[1];
                a = rM(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1], "ratio" === c ? c = a && this.j && this.H ? Math.floor(this.H / this.j * a) : null : (c = Number(c), c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                if (a || c) {
                    var d, e;
                    this.C.G(new _.Mm(null != (d = null != a ? a : this.j) ? d : 0, null != (e = null != c ? c : this.H) ? e : 0));
                    this.o.G(b)
                } else qM(this)
            }
        } else qM(this)
    };
    var rM = function(a, b) {
            b = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
            if (!b) return null;
            b = b[1];
            if ("viewport" === b) return a.ja;
            if ("parent" === b) {
                var c, d, e;
                return (b = null != (e = null == (d = Nm(null == (c = a.P.value) ? void 0 : c.parentElement)) ? void 0 : d.width) ? e : null) ? Math.min(b, a.ja) : null
            }
            a = Number(b);
            return 0 <= a ? a : null
        },
        qM = function(a) {
            a.C.ca();
            a.o.G([])
        };
    var sM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 681);
        this.adUnitPath = b;
        this.P = c;
        this.H = d;
        this.Nf = e;
        this.j = f;
        this.Ga = W(this);
        this.Ja = W(this);
        this.Be = W(this);
        this.af = W(this);
        this.ga = PH(this, g);
        this.W = PH(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.K = X(this, m)
    };
    _.T(sM, Y);
    sM.prototype.g = function() {
        var a = tM(this),
            b = this.W.value,
            c;
        if (c = !this.H && a && b) this.o.value.length ? (c = this.adUnitPath.split("/"), c = _.z(this.o.value, "includes").call(this.o.value, c[c.length - 1])) : c = !0;
        if (c) {
            var d = this.K.value,
                e, f;
            c = null != (f = null == (e = Nm(d.parentElement)) ? void 0 : e.width) ? f : 0;
            e = b.width;
            b = b.height;
            uM(this, !0, e, b, {
                kind: 0,
                tb: '<html><body style="height:' + (b - 2 + "px;width:" + (e - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (e + "x" + b + "</p></body></html>")
            }, e <= c ? 1 : 2, d)
        } else if (a = this.ga.value, this.H) uM(this, !1, null != (d = this.j) ? d : 0, null != a ? a : 0, this.C.value);
        else {
            if (null == this.j) throw new uo("Missing 'width'.");
            if (null == a) throw new uo("Missing 'height'.");
            uM(this, !1, this.j, a, this.C.value)
        }
    };
    var tM = function(a) {
            a = Cm(a.P)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Mm(a[0], a[1]) : null
        },
        uM = function(a, b, c, d, e, f, g) {
            f = void 0 === f ? a.Nf : f;
            a.af.G(b);
            a.Ja.G(new _.Mm(c, d));
            a.Ga.G(e);
            a.Be.Ha(f);
            g && _.uB(g, "opacity", .5)
        };
    var mu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        ok.call(this);
        b = new pM(a, b, c.width, k, l, n);
        J(this, b);
        a = new sM(a, d, e, f, h, k, g, b.C, b.o, m, n);
        J(this, a);
        this.J = {
            Ga: a.Ga,
            Ja: a.Ja,
            Be: a.Be,
            af: a.af
        }
    };
    _.T(mu, ok);
    var vM = function(a, b, c) {
        Y.call(this, a, 698);
        this.B = b;
        this.output = W(this);
        this.j = X(this, c)
    };
    _.T(vM, Y);
    vM.prototype.g = function() {
        this.output.Ha(Um(this.j.value, this.B))
    };
    var tu = function(a, b, c, d, e, f, g, h, k, l, m) {
        ok.call(this);
        var n = new vM(a, b, f);
        J(this, n);
        a = new oM(a, b.document, d, e, c, h, m, f, g, k, l, n.output);
        J(this, a);
        this.Mc = a.Mc
    };
    _.T(tu, ok);
    var wM = function(a, b, c, d, e) {
        Y.call(this, a, 937, _.Mf(XD));
        this.pb = b;
        this.j = W(this);
        this.o = W(this);
        this.C = W(this);
        this.oc = c;
        this.mc = d;
        this.Xc = e
    };
    _.T(wM, Y);
    wM.prototype.g = function() {
        var a = {},
            b;
        if (null == (b = _.vm(this.pb, yz, 2)) ? 0 : _.Q(b, 2)) a["*"] = {
            hf: !0
        };
        b = new _.u.Set;
        for (var c = _.y(_.bk(this.pb, xz, 1)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.y([_.I(d, 2), _.I(d, 1)].filter(function(p) {
                    return !!p
                })), f = e.next(); !f.done; f = e.next()) a[f.value] = {
                hf: _.Q(d, 3)
            };
            d = _.y(ve(d, 4, Xc, 2));
            for (e = d.next(); !e.done; e = d.next()) b.add(e.value)
        }
        this.oc.G(a);
        this.j.G([].concat(_.ri(b)));
        var g, h;
        a = null == (g = _.vm(this.pb, yz, 2)) ? void 0 : null == (h = _.vm(g, sz, 1)) ? void 0 : _.bk(h, rz, 1);
        this.o.Ha((null == a ? 0 : a.length) ? a : null);
        var k;
        this.mc.G(!(null == (k = _.vm(this.pb, yz, 2)) || !_.Q(k, 4)));
        var l;
        this.Xc.G(!(null == (l = _.vm(this.pb, yz, 2)) || !_.Q(l, 5)));
        var m, n;
        g = null == (m = _.vm(this.pb, yz, 2)) ? void 0 : null == (n = _.vm(m, sz, 3)) ? void 0 : _.bk(n, rz, 1);
        this.C.Ha((null == g ? 0 : g.length) ? g : null)
    };
    wM.prototype.J = function(a) {
        this.l(a)
    };
    wM.prototype.l = function() {
        this.oc.G({});
        this.j.G([]);
        this.o.ca();
        this.mc.G(!1);
        this.Xc.G(!1);
        this.C.ca()
    };
    var xM = function(a, b, c, d) {
        Y.call(this, a, 980);
        this.fb = b;
        this.output = new Or;
        this.j = X(this, c);
        this.o = X(this, d)
    };
    _.T(xM, Y);
    xM.prototype.g = function() {
        (_.H = _.z(Object, "entries").call(Object, this.j.value), _.z(_.H, "find")).call(_.H, function(c) {
            var d = _.y(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.hf)
        }) && (this.fb.M = !0);
        In(25, this.context);
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next()) ih(b.value);
        this.output.notify()
    };
    var yM = function(a, b, c, d) {
        Y.call(this, a, 931);
        this.j = PH(this, b);
        this.Lc = c;
        this.nc = d
    };
    _.T(yM, Y);
    yM.prototype.g = function() {
        var a = this.j.value,
            b = new _.u.Map;
        this.Lc.G(new _.u.Map);
        if (a) {
            var c;
            a = _.y(null != (c = this.j.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = _.bk(d, qz, 1);
                c = 1 === _.gg(c[0], 1, 0) ? Qy(c[0]) : Ry(c[0], Py);
                d = _.Mg(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.nc.G(b)
    };
    yM.prototype.l = function() {
        this.Lc.G(new _.u.Map);
        this.nc.G(new _.u.Map)
    };
    var zM = function(a, b, c) {
        Y.call(this, a, 981);
        this.o = W(this);
        this.C = PH(this, b);
        this.j = c
    };
    _.T(zM, Y);
    zM.prototype.g = function() {
        var a = new _.u.Map,
            b, c = _.y(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = _.bk(b, qz, 1);
            d = 1 === _.gg(d[0], 1, 0) ? Qy(d[0]) : Ry(d[0], Py);
            a.set(d, _.Mg(b, 2))
        }
        this.o.G(a);
        this.j.G(new ti)
    };
    zM.prototype.l = function() {
        this.o.G(new _.u.Map);
        var a = this.j,
            b = a.G;
        var c = new ti;
        c = _.ai(c, 1, 2);
        b.call(a, c)
    };
    var AM = function(a, b, c, d, e, f) {
        Y.call(this, a, 976);
        this.nextFunction = d;
        this.j = e;
        this.requestBidsConfig = f;
        RH(this, b);
        RH(this, c)
    };
    _.T(AM, Y);
    AM.prototype.g = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.j, [this.requestBidsConfig])
    };
    var BM = function(a, b, c, d, e, f) {
        Y.call(this, a, 975);
        this.o = b;
        this.j = c;
        this.C = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new Or
    };
    _.T(BM, Y);
    BM.prototype.g = function() {
        Rp(this.pbjs, this.o, this.j, this.C, this.requestBidsConfig);
        this.output.notify()
    };
    BM.prototype.l = function() {
        this.output.notify()
    };
    var CM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1100);
        this.pbjs = b;
        this.o = c;
        this.j = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.output = new Or
    };
    _.T(CM, Y);
    CM.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.Mf(sD);
        if (c) this.Jd(c);
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
                        if (_.E(rD)) {
                            var h = e.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                            h = 3 !== (null == h ? void 0 : h.length) ? e : "/" + h[1] + h[2]
                        } else h = e;
                        b = c.call(b, h)
                    }
                    b = null != (f = null != (g = b) ? g : null == (a = this.o) ? void 0 : a.get(_.ph(e))) ? f : 0;
                    this.Jd(b)
                }
        }
        this.output.notify()
    };
    CM.prototype.Jd = function(a) {
        var b;
        null != (b = this.j) && Th(b, 2, this.C);
        if (a) {
            var c;
            null == (c = this.j) || _.ai(c, 1, 1);
            var d;
            null != (d = this.j) && _.Yh(d, 3, a);
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
    CM.prototype.l = function() {
        this.output.notify()
    };
    var DM = function(a, b, c, d, e, f, g, h) {
        _.V.call(this);
        this.g = a;
        this.j = b;
        this.l = c;
        this.D = d;
        this.J = e;
        this.I = f;
        this.o = g;
        this.pbjs = h
    };
    _.T(DM, _.V);
    DM.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new ok;
            _.S(this, d);
            var e = new CM(this.g, this.pbjs, this.J, this.I, this.o, a),
                f = new BM(this.g, this.j, this.l, this.D, this.pbjs, a);
            J(d, e);
            J(d, f);
            J(d, new AM(this.g, f.output, e.output, c, b, a));
            xk(d)
        }
    };
    var Tp = function(a, b) {
        this.push = M(a, 932, function(c) {
            b.push(c)
        })
    };
    var EM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 951);
        this.B = window;
        this.H = X(this, b);
        this.o = PH(this, d);
        this.C = X(this, e);
        this.P = X(this, f);
        this.j = PH(this, g);
        this.W = PH(this, h);
        this.K = X(this, k);
        RH(this, c);
        this.tf = null != l ? l : W(this);
        this.uf = null != m ? m : W(this)
    };
    _.T(EM, Y);
    EM.prototype.g = function() {
        var a = !!wo().pbjs_hooks;
        this.uf.G(a);
        this.tf.Ha(a ? null : _.Wf());
        var b, c = null == (b = this.o.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.j.value) ? void 0 : d.size) || _.Mf(sD);
        d = this.H.value;
        var e, f = null != (e = wo().pbjs_hooks) ? e : [];
        e = new DM(this.context, this.o.value, this.C.value, this.P.value, this.j.value, this.W.value, this.K.value, d);
        _.S(this, e);
        f = _.y(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) wo().pbjs_hooks = Up(this.context, e);
        !c && !b || a || Sp(d, this.B)
    };
    var FM = function(a, b, c) {
        Y.call(this, a, 966);
        this.B = b;
        this.bc = c
    };
    _.T(FM, Y);
    FM.prototype.g = function() {
        var a = this,
            b = Oh(this.B);
        if (b) this.bc.G(b);
        else if (b = Object.getOwnPropertyDescriptor(this.B, "_pbjsGlobals"), !b || b.configurable) {
            var c = null;
            Object.defineProperty(this.B, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Oh(a.B)) && a.bc.G(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    FM.prototype.l = function() {};
    var Zp = function(a, b, c, d, e) {
        Y.call(this, a, 1146, _.Mf(XD));
        this.fb = b;
        this.B = d;
        this.j = e;
        this.o = QH(this, c)
    };
    _.T(Zp, Y);
    Zp.prototype.g = function() {
        var a = this.o.value,
            b = new ok;
        _.S(this, b);
        var c = new FM(this.context, this.B, this.j.bc);
        J(b, c);
        if (a) {
            a = new wM(this.context, a, this.j.oc, this.j.mc, this.j.Xc);
            J(b, a);
            var d = new xM(this.context, this.fb, a.oc, a.j);
            J(b, d);
            var e = new yM(this.context, a.o, this.j.Lc, this.j.nc);
            J(b, e);
            var f = new zM(this.context, a.C, this.j.Mf);
            J(b, f);
            c = new EM(this.context, c.bc, d.output, e.nc, this.j.mc, e.Lc, f.o, f.j, a.Xc, this.j.tf, this.j.uf);
            J(b, c)
        } else GM(this);
        xk(b)
    };
    var GM = function(a) {
        a.j.oc.G({});
        a.j.nc.G(new _.u.Map);
        a.j.mc.G(!1);
        a.j.Lc.G(new _.u.Map);
        a.j.tf.ca();
        a.j.uf.G(!1);
        a.j.Mf.G(new ti);
        a.j.Xc.G(!1)
    };
    Zp.prototype.J = function(a) {
        this.l(a)
    };
    Zp.prototype.l = function() {
        GM(this)
    };
    var HM = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 920);
        this.R = b;
        this.T = c;
        this.pbjs = f;
        this.o = g;
        this.j = W(this);
        this.C = [];
        this.P = X(this, d);
        this.K = PH(this, e.nc);
        this.H = X(this, e.mc);
        this.ga = X(this, e.Lc);
        this.W = PH(this, e.Mf)
    };
    _.T(HM, Y);
    HM.prototype.g = function() {
        for (var a = new _.u.Map, b = !1, c = _.y(this.P.value), d = c.next(), e = {}; !d.done; e = {
                lh: void 0
            }, d = c.next()) {
            d = d.value;
            for (var f = {}, g = _.y(dm(this.T[d.getDomId()])), h = g.next(); !h.done; h = g.next()) h = h.value, f[_.I(h, 1)] = km(h);
            var k = h = g = void 0;
            (f = Di(this.pbjs, {
                Zc: d.getDomId(),
                adUnitCode: d.getAdUnitPath()
            }, f, null != (h = this.K.value) ? h : void 0, this.H.value, this.ga.value, null != (k = null == (g = this.W) ? void 0 : g.value) ? k : void 0)) ? (b = !0, a.set(d, f)) : (null === f && this.C.push(d), a.set(d, new ui));
            e.lh = d.getDomId() + d.getAdUnitPath();
            vi.has(e.lh) || _.kp(d, function(l) {
                return function() {
                    return vi.delete(l.lh)
                }
            }(e))
        }
        b ? (this.o.Ha(a), this.j.G(this.C)) : (this.o.ca(), this.j.ca())
    };
    HM.prototype.J = function(a) {
        this.l(a)
    };
    HM.prototype.l = function(a) {
        this.R.error(SK(a.message));
        this.o.ca();
        this.j.ca()
    };
    var IM = function(a, b, c, d) {
        Y.call(this, a, 1019);
        this.T = c;
        this.pbjs = d;
        this.j = PH(this, b)
    };
    _.T(IM, Y);
    IM.prototype.g = function() {
        JM(this)
    };
    var JM = function(a) {
        if (!(Math.random() >= _.Mf(qD))) {
            var b = (a.j.value || []).filter(function(k) {
                return dm(a.T[k.getDomId()]).some(function(l) {
                    return "hb_pb" === dk(l, 1)
                })
            });
            if (b.length) {
                var c, d, e, f, g, h = (null == (c = a.pbjs) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.ri(new _.u.Set(null == (e = a.pbjs) ? void 0 : e.adUnits.map(function(k) {
                    return k.code
                })))) : _.z(Object, "keys").call(Object, (null == (f = a.pbjs) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                c = new Wo("haux");
                Yo(c, "ius", b.map(function(k) {
                    return k.getAdUnitPath()
                }).join("~"));
                Yo(c, "dids", b.map(function(k) {
                    return k.getDomId()
                }).join("~"));
                Yo(c, "paucs", h.join("~"));
                Xo(c, a.context);
                $o(c)
            }
        }
    };
    var aq = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1153);
        this.R = b;
        this.T = c;
        this.networkCode = d;
        this.H = e;
        this.Md = f;
        this.j = h;
        this.K = X(this, f.oc);
        this.o = new HH(f.bc);
        g && (this.C = PH(this, g))
    };
    _.T(aq, Y);
    aq.prototype.g = function() {
        var a, b = null == (a = this.o) ? void 0 : a.value;
        if (a = KM(this)) null != b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.R.error(RK()), a = !1) : a = !0 : a = !1;
        if (a) {
            a = new ok;
            var c = new HM(this.context, this.R, this.T, this.H, this.Md, b, this.j.kh);
            J(a, c);
            J(a, new IM(this.context, c.j, this.T, b));
            xk(a)
        } else this.j.kh.ca()
    };
    var KM = function(a) {
        var b;
        if (null == (b = a.C) ? 0 : b.value) return !0;
        var c = a.K.value;
        if (!c) return !1;
        var d;
        return !(null == (d = c["*"]) || !d.hf) || a.networkCode.split(",").some(function(e) {
            var f;
            return !(null == (f = c[e]) || !f.hf)
        })
    };
    var LM = function(a, b, c, d, e) {
        Y.call(this, a, 982);
        this.Gb = b;
        this.Na = c;
        this.j = d;
        this.sf = e
    };
    _.T(LM, Y);
    LM.prototype.g = function() {
        for (var a = this, b = _.y(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
                Pe: void 0,
                Ng: void 0
            }, c = b.next()) d.Pe = c.value, d.Ng = function(e) {
            return function(f) {
                if (a.j === f.adId) {
                    var g = new Wo("hbm_brt");
                    Xo(g, a.context);
                    Yo(g, "et", e.Pe);
                    Yo(g, "sf", a.Gb);
                    Yo(g, "qqid", a.Na);
                    var h, k, l;
                    Yo(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                    $o(g)
                }
            }
        }(d), (0, this.sf.onEvent)(d.Pe, d.Ng), _.kp(this, function(e) {
            return function() {
                return void Il(a.context, a.id, function() {
                    var f, g;
                    return void(null == (g = (f = a.sf).offEvent) ? void 0 : g.call(f, e.Pe, e.Ng))
                }, !0)
            }
        }(d))
    };
    LM.prototype.l = function() {};
    var cq = function(a, b, c, d, e) {
        Y.call(this, a, 1134);
        this.o = b;
        this.Gb = c;
        this.Na = d;
        this.j = new HH(e)
    };
    _.T(cq, Y);
    cq.prototype.g = function() {
        var a;
        if (this.o && null != (a = this.j.value) && a.onEvent) {
            a = new ok;
            var b = new LM(this.context, this.Gb, this.Na, this.o, this.j.value);
            J(a, b);
            xk(a)
        }
    };
    var PM = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.g = new _.u.Map;
            this.A = new _.u.Map;
            this.timer = _.Kf(El);
            rJ() && (_.pb(window, "DOMContentLoaded", Cl(a, 334, function() {
                for (var f = _.y(e.g), g = f.next(); !g.done; g = f.next()) {
                    var h = _.y(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    MM(e, g, h) && e.g.delete(g)
                }
            })), b.listen(JJ, function(f) {
                f = f.detail;
                var g = f.T;
                return void NM(e, OM(d, f.jh), Xs(g, 20))
            }), b.listen(KJ, function(f) {
                f = f.detail;
                var g = f.T;
                f = OM(d, f.jh);
                g = Xs(g, 20);
                var h = e.A.get(f);
                null != h ? tJ(h, g) : NM(e, f, g)
            }))
        },
        NM = function(a, b, c) {
            MM(a, b, c) ? a.g.delete(b) : (a.g.set(b, c), _.kp(b, function() {
                return a.g.delete(b)
            }))
        },
        MM = function(a, b, c) {
            var d = Tm(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new qJ({
                B: window,
                timer: a.timer,
                Ub: d,
                rb: function(e) {
                    return void Gl(a.context, 336, e)
                },
                zm: _.E(wF)
            });
            if (!d.A) return !1;
            tJ(d, c);
            a.A.set(b, d);
            RJ(a.L, b, function() {
                return void a.A.delete(b)
            });
            return !0
        };
    var QM = function(a, b, c, d, e) {
        Y.call(this, a, 1058);
        this.B = b;
        this.Z = c;
        this.output = OH(this);
        d && (this.j = PH(this, d.Vc));
        RH(this, e)
    };
    _.T(QM, Y);
    QM.prototype.g = function() {
        var a;
        if (nh(this.B.isSecureContext, this.B, this.B.document) && null != (a = this.j) && a.value && !_.E(uD) && bh(this.Z)) {
            a = {
                message: "goog:spam:client_age",
                pvsid: this.context.pvsid,
                useObfuscatedKey: _.E(vD)
            };
            var b = this.j.value;
            b(a)
        }
        this.output.notify()
    };
    var RM = function(a, b, c) {
        Y.call(this, a, 1199);
        this.j = c;
        this.o = PH(this, b)
    };
    _.T(RM, Y);
    RM.prototype.g = function() {
        var a = this.o.value;
        a && (a = xL(this.j, a.getSlotElementId()), Th(a, 30, !0))
    };
    var SM = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1109);
        this.aa = c;
        this.ba = d;
        this.j = e;
        this.C = f;
        this.H = g;
        this.o = h;
        this.output = W(this);
        this.K = PH(this, b)
    };
    _.T(SM, Y);
    SM.prototype.g = function() {
        var a = this,
            b = this.K.value;
        b && (this.o.push(function() {
            b.addService(a.j)
        }), jB(this.aa, function() {
            a.H();
            a.C(b);
            _.Q(a.ba, 4) && a.j.refresh([b])
        }))
    };
    var TM = {},
        gq = (TM[64] = UK, TM[134217728] = VK, TM[32768] = WK, TM[536870912] = XK, TM[8] = YK, TM[512] = ZK, TM[1048576] = $K, TM[4194304] = bL, TM);
    var UM = function(a) {
        return "22639388115" === Bl(a.getAdUnitPath())
    };
    var VM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.wb = d;
        this.o = e;
        this.R = f;
        this.output = W(this);
        this.j = W(this)
    };
    _.T(VM, Y);
    VM.prototype.g = function() {
        var a = wq(this.context, this.R, this.o, {
            Xh: this.format,
            adUnitPath: this.adUnitPath,
            wb: this.wb
        });
        this.j.Ha(a);
        this.output.Ha(a ? a.g : null)
    };
    var WM = function(a, b, c, d) {
        Y.call(this, a, 1111);
        this.j = c;
        this.o = d;
        this.C = PH(this, b)
    };
    _.T(WM, Y);
    WM.prototype.g = function() {
        var a = this.C.value;
        a && (a = xL(this.j, a.getSlotElementId()), kk(a, 27, Gz, this.o))
    };
    var XM = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v) {
        ok.call(this);
        this.context = a;
        this.aa = b;
        this.adUnitPath = c;
        this.format = d;
        this.wb = e;
        this.W = f;
        this.ia = g;
        this.P = h;
        this.K = k;
        this.ba = l;
        this.J = m;
        this.ga = n;
        this.R = p;
        this.ha = r;
        this.o = v;
        a = J(this, new VM(this.context, this.adUnitPath, this.format, this.wb, this.ga, this.R));
        this.o && J(this, new WM(this.context, a.output, this.J, this.o));
        this.ha && J(this, new RM(this.context, a.output, this.J));
        J(this, new SM(this.context, a.output, this.aa, this.ba, this.W, this.ia, this.P, this.K));
        this.g = {
            Fo: a.j
        }
    };
    _.T(XM, ok);
    var Su = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 1198);
        this.aa = b;
        this.googletag = c;
        this.ba = d;
        this.j = e;
        this.o = f;
        this.R = g;
        this.nd = h;
        this.C = k
    };
    _.T(Su, Y);
    Su.prototype.g = function() {
        for (var a = this, b = _.y(this.C), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d.getAdUnitPath();
            d = _.gg(d, 2, 0);
            c && d && (this.nd.add(Bl(c)), c = new XM(this.context, this.aa, c, d, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, this.ba, this.j, this.o, this.R, !0), xk(c), _.S(this, c))
        }
    };
    var Dt = function(a, b) {
        Y.call(this, a, 1110);
        this.B = b;
        this.output = W(this)
    };
    _.T(Dt, Y);
    Dt.prototype.g = function() {
        var a = this.B;
        a = _.E(rF) && void 0 !== a.credentialless && (_.E(sF) || a.crossOriginIsolated);
        this.output.G(a)
    };
    var YM = function(a, b, c, d, e, f) {
        Y.call(this, a, 935);
        this.L = b;
        this.O = c;
        this.aa = d;
        this.output = OH(this);
        this.j = X(this, e);
        RH(this, f)
    };
    _.T(YM, Y);
    YM.prototype.g = function() {
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
            xq(e, f) && !g.Ac(d) && yq(d, h, e, f)
        }
        this.output.notify()
    };
    var Cq = function(a, b, c) {
        Y.call(this, a, 1208);
        this.j = b;
        this.gg = c;
        this.output = new Or
    };
    _.T(Cq, Y);
    Cq.prototype.g = function() {
        var a, b = null == (a = this.gg) ? void 0 : _.vm(a, Zz, 1);
        if (b) {
            a = this.j;
            var c = new QG;
            c = Th(c, 5, !0);
            XG(a, "__eoi", b, c)
        }
        this.output.notify()
    };
    var Hq = function(a, b, c, d) {
        Y.call(this, a, 896);
        this.ng = b;
        this.zc = d;
        this.Fc = W(this);
        c && RH(this, c)
    };
    _.T(Hq, Y);
    Hq.prototype.g = function() {
        this.Fc.G(this.ng.gd(".google.cn" === this.zc))
    };
    var Wt = function(a, b) {
        Y.call(this, a, 1018);
        this.cd = OH(this);
        this.j = PH(this, b)
    };
    _.T(Wt, Y);
    Wt.prototype.g = function() {
        var a, b, c;
        if (null == (a = this.j.value)) a = void 0;
        else {
            var d;
            null == (b = _.vm(a, KF, 5)) ? d = void 0 : d = ve(b, 1, Xc, 2);
            a = d
        }
        a = _.y(null != (c = a) ? c : []);
        for (c = a.next(); !c.done; c = a.next()) ih(c.value);
        this.cd.notify()
    };
    var Xt = function(a, b) {
        Y.call(this, a, 1070);
        this.j = W(this);
        this.o = PH(this, b)
    };
    _.T(Xt, Y);
    Xt.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : _.vm(a, KF, 5);
        if (b) {
            a = [];
            for (var c = _.y(ve(b, 2, Qe, 1, void 0, void 0, 4096)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new Gz;
                var f = new Ez;
                e = _.ik(f, 1, ed(e));
                d = _.ci(d, 2, e);
                null != Ci(b, 3) && (e = new Cz, e = _.ai(e, 1, 1), f = _.My(b, 3), e = _.Yh(e, 2, f), _.ci(d, 3, e));
                a.push(d)
            }
            this.j.G(a)
        } else this.j.G([])
    };
    var ZM = function(a, b, c, d) {
        Y.call(this, a, 1016);
        this.output = W(this);
        this.o = PH(this, b);
        this.j = PH(this, c);
        this.C = SH(this, [b, d])
    };
    _.T(ZM, Y);
    ZM.prototype.g = function() {
        if (this.j.value) {
            var a = this.o.value || this.C.value;
            a && $M(this, a) ? this.output.G(a) : this.output.ca()
        } else this.output.ca()
    };
    ZM.prototype.J = function(a) {
        this.l(a)
    };
    ZM.prototype.l = function() {
        this.output.ca()
    };
    var $M = function(a, b) {
        return _.bk(a.j.value, Az, 1).some(function(c) {
            return _.I(c, 1) === b
        })
    };
    var aN = function(a, b) {
        Y.call(this, a, 1015);
        this.j = W(this);
        this.o = PH(this, b)
    };
    _.T(aN, Y);
    aN.prototype.g = function() {
        if (this.o.value)
            if (_.bk(this.o.value, Az, 1).length) {
                var a = _.bk(this.o.value, Az, 1)[0];
                (_.H = [2, 3], _.z(_.H, "includes")).call(_.H, _.gg(a, 3, 0)) ? this.j.G(_.I(a, 1)) : this.j.ca()
            } else this.j.ca();
        else this.j.ca()
    };
    aN.prototype.J = function(a) {
        this.l(a)
    };
    aN.prototype.l = function() {
        this.j.ca()
    };
    var bN = function(a, b, c) {
        Y.call(this, a, 1017);
        this.B = c;
        this.output = OH(this);
        this.j = PH(this, b)
    };
    _.T(bN, Y);
    bN.prototype.g = function() {
        var a = this;
        if (this.j.value) {
            var b = dG(this.B, this.j.value, function(c) {
                if (!c) {
                    c = ig(b.g);
                    for (var d = _.y(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.Pj(e.value)
                }
                a.output.notify()
            });
            b.start(_.E(GD))
        } else this.output.notify()
    };
    bN.prototype.J = function(a) {
        this.l(a)
    };
    bN.prototype.l = function() {
        this.output.notify()
    };
    var cN = function(a, b) {
        Y.call(this, a, 1056);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(cN, Y);
    cN.prototype.g = function() {
        var a = Bl(this.j.value.getAdUnitPath());
        this.output.G(a)
    };
    cN.prototype.J = function(a) {
        this.l(a)
    };
    cN.prototype.l = function() {
        this.output.ca()
    };
    var Vt = function(a, b, c, d) {
        Y.call(this, a, 906, _.Mf(YD));
        this.j = OH(this);
        if (b === b.top) {
            var e = new ok;
            _.S(this, e);
            var f = new aN(a, c);
            J(e, f);
            d = new qr(a, d, JJ, function(g) {
                return g.detail.T
            });
            J(e, d);
            d = new cN(a, d.output);
            J(e, d);
            a = new ZM(a, f.j, c, d.output);
            J(e, a);
            b = new bN(this.context, a.output, b);
            J(e, b);
            LH(this.D, b.output, !0);
            xk(e)
        } else this.j.notify()
    };
    _.T(Vt, Y);
    Vt.prototype.g = function() {
        this.j.notify()
    };
    Vt.prototype.J = function(a) {
        this.l(a)
    };
    Vt.prototype.l = function() {
        this.j.notify()
    };
    var Bu = function(a, b, c, d, e) {
        Y.call(this, a, 934);
        this.B = b;
        this.slotId = c;
        RH(this, d);
        this.j = X(this, e)
    };
    _.T(Bu, Y);
    Bu.prototype.g = function() {
        var a = this;
        this.slotId.listen(Zq, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.j.value,
                        g = new Zz;
                    var h = li(g, 1, d ? "1" : "0");
                    var k = li(_.Yh(h, 2, 2147483647), 3, "/");
                    var l = li(k, 4, a.B.location.hostname);
                    var m = new _.VG(a.B);
                    XG(m, "__gpi_opt_out", l, f);
                    if (d || e) YG(m, "__gads", f), YG(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var dN = function(a, b, c) {
        Y.call(this, a, 944);
        this.B = b;
        this.j = new _.VG(this.B);
        this.o = X(this, c)
    };
    _.T(dN, Y);
    dN.prototype.g = function() {
        var a = this.o.value;
        if (WG(this.j, a)) {
            var b = _.Jn(this.j, "__gpi_opt_out", a);
            if (b) {
                var c = new Zz;
                b = li(c, 1, b);
                b = li(_.Yh(b, 2, 2147483647), 3, "/");
                b = li(b, 4, this.B.location.hostname);
                XG(this.j, "__gpi_opt_out", b, a)
            }
        }
    };
    var eN = function(a, b, c, d) {
        Y.call(this, a, 821);
        this.Z = b;
        this.Ea = c;
        this.j = X(this, d)
    };
    _.T(eN, Y);
    eN.prototype.g = function() {
        if (bh(this.Z)) {
            var a = new _.u.Set;
            var b = _.bk(this.j.value, Zz, 14);
            b = _.y(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = Sy(c, 5)) ? d : 1;
                a.has(e) || (XG(this.Ea, 2 === e ? "__gpi" : "__gads", c, this.Z), a.add(e))
            }
        }
    };
    var fN = function() {
            this.A = [];
            this.hostpageLibraryTokens = [];
            this.g = {}
        },
        tt = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.g[b]) ? void 0 : _.z(c, "values").call(c)) ? d : [];
            return [].concat(_.ri(a))
        };
    var gN = function(a, b, c, d) {
        Y.call(this, a, 822);
        this.slotId = b;
        this.Za = c;
        this.j = X(this, d)
    };
    _.T(gN, Y);
    gN.prototype.g = function() {
        var a = ve(this.j.value, 23, _.Vc, 2);
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = this.Za;
            if (!_.z(c.A, "includes").call(c.A, b) && (_.H = [1, 2, 3], _.z(_.H, "includes")).call(_.H, b)) {
                var d = $G[b];
                if (d) {
                    var e = b + "_hostpage_library";
                    if (d = _.ap(document, d)) d.id = e
                }
                c.A.push(b);
                e = new aH(b);
                c.hostpageLibraryTokens.push(e);
                c = wo();
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
    var Rq = 0;
    var Ru = function(a, b, c, d, e, f) {
        Y.call(this, a, 721);
        this.B = b;
        this.Ze = c;
        this.o = X(this, d);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(Ru, Y);
    Ru.prototype.g = function() {
        var a = this,
            b, c, d = null == (b = this.Ze) ? void 0 : null == (c = _.I(b, 1)) ? void 0 : c.toUpperCase(),
            e, f;
        b = null == (e = this.Ze) ? void 0 : null == (f = _.I(e, 2)) ? void 0 : f.toUpperCase();
        if (d && b) {
            e = this.o.value;
            f = this.j.value;
            var g = this.C.value,
                h = g.style.height,
                k = g.style.width,
                l = g.style.display,
                m = g.style.position,
                n = Tq(e.id + "_top", d),
                p = Tq(e.id + "_bottom", b);
            _.qp(p, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            g.appendChild(n);
            g.appendChild(p);
            _.qp(f, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.qp(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var r;
            _.qp(g, {
                position: "relative",
                display: (null == (r = this.B.screen.orientation) ? 0 : r.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            lp(this, 722, this.B, "orientationchange", function() {
                var v;
                (null == (v = a.B.screen.orientation) ? 0 : v.angle) ? _.qp(g, {
                    display: "none"
                }): _.qp(g, {
                    display: "block"
                })
            });
            _.kp(this, function() {
                _.JA(n);
                _.JA(p);
                g.style.position = m;
                g.style.height = h;
                g.style.width = k;
                g.style.display = l
            })
        }
    };
    var hN = _.pw(["https://td.doubleclick.net/td/kb?kbli=", ""]),
        yu = function(a, b, c, d, e) {
            Y.call(this, a, 1007);
            this.wg = b;
            this.j = X(this, d);
            c && (this.o = X(this, c));
            e && RH(this, e)
        };
    _.T(yu, Y);
    yu.prototype.g = function() {
        if (bh(this.j.value)) {
            var a;
            if (null == (a = this.o) || !a.value) {
                var b = this.wg;
                if (b.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
                    a = document.createElement("iframe");
                    b = Va(hN, encodeURIComponent(b.join()));
                    a.removeAttribute("srcdoc");
                    if (b instanceof _.cx) throw new Rx("TrustedResourceUrl", 3);
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
    var ku = function(a, b, c, d) {
        Y.call(this, a, 1176);
        this.o = b;
        this.T = c;
        this.R = d;
        this.j = W(this)
    };
    _.T(ku, Y);
    ku.prototype.g = function() {
        var a, b = null != (a = this.o) ? a : new lu;
        (a = null != Ci(b, 2) ? null != Vq(b) && 0 !== (0, _.Pp)() ? Ci(b, 2) * Vq(b) : Ci(b, 2) : null) && _.E(UD) && (_.H = [8, 9], _.z(_.H, "includes")).call(_.H, or(this.T)) ? (O(this.R, eL()), this.j.ca()) : this.j.Ha(a)
    };
    var su = function(a, b, c, d, e, f) {
        f = void 0 === f ? Uq : f;
        Y.call(this, a, 666);
        this.o = f;
        this.output = OH(this);
        RH(this, b);
        e && RH(this, e);
        this.j = X(this, c);
        this.C = PH(this, d)
    };
    _.T(su, Y);
    su.prototype.g = function() {
        var a = this.C.value,
            b = this.j.value;
        null == a || 0 > a || !Wm(b) ? this.output.notify() : iN(this, a, b)
    };
    var iN = function(a, b, c) {
        var d = a.o(b, Cl(a.context, 291, function(e, f) {
            e = _.y(e);
            for (var g = e.next(); !g.done; g = e.next())
                if (g = g.value, !(0 >= g.intersectionRatio)) {
                    f.unobserve(g.target);
                    a.output.notify();
                    break
                }
        }));
        d ? (d.observe(c), _.kp(a, function() {
            d.disconnect()
        })) : a.output.notify()
    };
    var ru = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 664);
        this.slotId = b;
        this.Fd = c;
        this.L = d;
        this.output = OH(this);
        this.o = X(this, e);
        this.j = PH(this, f);
        g && RH(this, g)
    };
    _.T(ru, Y);
    ru.prototype.g = function() {
        var a = this,
            b, c = null != (b = this.j.value) ? b : 0;
        if (0 !== (0, _.Pp)() || 0 < c)
            if (b = mH(document), nH(document) && b && (0 < WJ(this.L, this.slotId) || !jN(this)) && b) {
                var d = lp(this, 324, document, b, function() {
                    nH(document) || (d && d(), a.output.notify())
                });
                if (d) return
            }
        this.output.notify()
    };
    var jN = function(a) {
        try {
            var b = top;
            if (!b) return !0;
            var c = Uu(b.document, b).y,
                d = c + a.Fd.height,
                e = a.o.value;
            return e.y >= c && e.y <= d
        } catch (f) {
            return !0
        }
    };
    var qu = function(a, b) {
        Y.call(this, a, 676);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(qu, Y);
    qu.prototype.g = function() {
        var a = Jm(this.j.value);
        this.output.G(a)
    };
    var Wq = function(a, b, c, d, e, f) {
        f = void 0 === f ? _.u.globalThis.IntersectionObserver : f;
        Y.call(this, a, 886);
        this.X = b;
        this.L = c;
        this.o = d;
        this.j = f;
        this.output = OH(this);
        e && RH(this, e)
    };
    _.T(Wq, Y);
    Wq.prototype.g = function() {
        this.X.some(function(a) {
            return !Wm(Tm(a))
        }) ? this.output.notify() : IH(this.output, kN(this, this.o))
    };
    var kN = function(a, b) {
        return new _.u.Promise(function(c) {
            if (a.j) {
                for (var d = new a.j(function(h, k) {
                        h.some(function(l) {
                            return 0 < l.intersectionRatio
                        }) && (k.disconnect(), c())
                    }, {
                        rootMargin: b + "%"
                    }), e = _.y(a.X), f = e.next(), g = {}; !f.done; g = {
                        yf: void 0
                    }, f = e.next()) {
                    f = f.value;
                    g.yf = Tm(f);
                    if (!g.yf) return;
                    d.observe(g.yf);
                    RJ(a.L, f, function(h) {
                        return function() {
                            return void d.unobserve(h.yf)
                        }
                    }(g))
                }
                _.kp(a, function() {
                    return void d.disconnect()
                })
            } else c()
        })
    };
    var lN = [{
            name: "Interstitial",
            format: 1,
            ee: 5
        }, {
            name: "TopAnchor",
            format: 2,
            ee: 2
        }, {
            name: "BottomAnchor",
            format: 3,
            ee: 3
        }, {
            name: "LeftSideRail",
            format: 4,
            ee: 8
        }, {
            name: "RightSideRail",
            format: 5,
            ee: 9
        }],
        St = function(a, b, c, d, e, f, g) {
            Y.call(this, a, 789);
            this.aa = b;
            this.googletag = c;
            this.o = d;
            this.j = e;
            this.R = f;
            this.C = g;
            this.output = W(this)
        };
    _.T(St, Y);
    St.prototype.g = function() {
        var a = this;
        lN.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.C)
        }).forEach(function(b) {
            var c = b.name;
            b = b.ee;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new XM(a.context, a.aa, "/22639388115/example/" + c.toLowerCase(), b, !1, a.googletag.pubads(), function(f) {
                return void a.googletag.display(f)
            }, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, a.googletag.cmd, a.j.g, a.j, a.o, a.R, !1);
            _.S(a, c);
            xk(c)
        })
    };
    var mN = function(a, b, c) {
        Y.call(this, a, 1163);
        _.E(Cu);
        this.j = X(this, b);
        c && RH(this, c)
    };
    _.T(mN, Y);
    mN.prototype.g = function() {
        this.j.value.Oj();
        this.j.value.Ma()
    };
    var Eu = function(a, b, c, d, e, f, g, h, k, l) {
        Y.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.eb = f;
        this.j = W(this);
        this.o = X(this, g);
        this.K = X(this, h);
        this.C = PH(this, k);
        this.H = X(this, l)
    };
    _.T(Eu, Y);
    Eu.prototype.g = function() {
        var a = this,
            b;
        if (null != (b = this.eb) && _.Q(b, 12, !1)) {
            b = this.C.value.Sk;
            var c = _.zq(this.L, this.slotId),
                d = this.K.value,
                e = this.o.value;
            _.qp(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (nN) nN.Mj(e, this.H.value);
            else {
                var f, g;
                nN = new b(this.context, this.format, e, this.B, d, this.L, this.slotId, null != (g = null == (f = this.eb) ? void 0 : _.vm(f, Qz, 16)) ? g : null);
                f = {};
                g = _.y(_.bk(this.eb, Pz, 13));
                for (b = g.next(); !b.done; b = g.next()) b = b.value, f[dk(b, 1)] = dk(b, 2);
                nN.Nj(f);
                _.E(Cu) ? (nN.Jj(), this.j.G(nN)) : nN.Ma();
                QJ(this.L, this.slotId, function() {
                    nN && (nN.za(), nN = null);
                    c && _.UJ(a.L, a.slotId)
                })
            }
            _.kp(this, function() {
                return _.JA(e)
            })
        }
    };
    var nN = null;
    var Du = function(a, b, c, d, e, f, g, h, k, l) {
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
    _.T(Du, Y);
    Du.prototype.g = function() {
        var a;
        if (null != (a = this.eb) && null != Gn(a, 12)) {
            a = new ok;
            _.S(this, a);
            var b, c = (null == (b = this.eb) ? 0 : _.Q(b, 15)) ? J(a, new Yq(this.context, this.slotId, Zq, function(d) {
                d = d.detail.data;
                try {
                    var e = JSON.parse(d);
                    return "floating" === e.type && "loaded" === e.message
                } catch (f) {}
                return !1
            })).output : void 0;
            b = new Eu(this.context, this.L, this.format, this.slotId, this.B, this.eb, this.j, this.C, this.o, this.H);
            J(a, b);
            b = new mN(this.context, b.j, c);
            J(a, b);
            xk(a)
        }
    };
    var er = function(a, b, c) {
        Y.call(this, a, 1150);
        this.B = b;
        this.output = OH(this);
        RH(this, c)
    };
    _.T(er, Y);
    er.prototype.g = function() {
        var a = this;
        this.B.location.hash = "goog_game_inter";
        _.kp(this, function() {
            "goog_game_inter" === a.B.location.hash && (a.B.location.hash = "")
        });
        IH(this.output, new _.u.Promise(function(b) {
            return void lp(a, a.id, a.B, "hashchange", function(c) {
                ox(c.oldURL, "#goog_game_inter") && b()
            })
        }))
    };
    var oN = function(a, b) {
            this.serviceName = b;
            this.slot = a.g
        },
        pN = function(a, b) {
            oN.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.T(pN, oN);
    var qN = function() {
        oN.apply(this, arguments)
    };
    _.T(qN, oN);
    var rN = function(a, b, c) {
        oN.call(this, a, b);
        this.inViewPercentage = c
    };
    _.T(rN, oN);
    var sN = function() {
        oN.apply(this, arguments)
    };
    _.T(sN, oN);
    var tN = function() {
        oN.apply(this, arguments)
    };
    _.T(tN, oN);
    var uN = function() {
        oN.apply(this, arguments)
    };
    _.T(uN, oN);
    var vN = function() {
        oN.apply(this, arguments)
    };
    _.T(vN, oN);
    var wN = function(a, b, c, d) {
        oN.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.T(wN, oN);
    var xN = function(a, b, c) {
        oN.call(this, a, b);
        this.payload = c
    };
    _.T(xN, oN);
    var yN = function() {
        oN.apply(this, arguments)
    };
    _.T(yN, oN);
    var zN = function(a, b, c) {
        oN.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.T(zN, oN);
    var AN = function() {
        oN.apply(this, arguments)
    };
    _.T(AN, oN);
    var fr = function(a, b, c, d, e, f) {
        Y.call(this, a, 1151);
        this.slotId = b;
        this.Aa = c;
        RH(this, d);
        a = [e];
        f && a.push(f);
        f = new JH(a, !0);
        LH(this.D, f)
    };
    _.T(fr, Y);
    fr.prototype.g = function() {
        Ys(this.Aa, "gameManualInterstitialSlotClosed", 1148, new AN(this.slotId, "publisher_ads"))
    };
    var cr = function(a, b, c, d) {
        Y.call(this, a, 1149);
        this.slotId = b;
        this.Aa = c;
        this.output = OH(this);
        RH(this, d)
    };
    _.T(cr, Y);
    cr.prototype.g = function() {
        var a = new _.xh,
            b = a.promise;
        Ys(this.Aa, "gameManualInterstitialSlotReady", 1147, new zN(this.slotId, "publisher_ads", a.resolve));
        IH(this.output, b.then(function() {
            return kB(10)
        }))
    };
    var br = function(a, b, c) {
        c = void 0 === c ? BN : c;
        Y.call(this, a, 1158);
        this.j = c;
        this.o = 1E3 * _.Mf(ar);
        this.output = OH(this);
        RH(this, b)
    };
    _.T(br, Y);
    br.prototype.g = function() {
        var a = this;
        this.j.rf++ ? IH(this.output, kB(this.o * (this.j.rf - 2) + (this.o - (Date.now() - this.j.xg))).then(function() {
            a.j.xg = Date.now();
            a.j.rf--
        })) : (this.j.xg = Date.now(), kB(this.o).then(function() {
            return void a.j.rf--
        }), this.output.notify())
    };
    var BN = {
        rf: 0,
        xg: Date.now()
    };
    var CN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        DN = {
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        dr = function(a, b, c, d, e) {
            Y.call(this, a, 1150);
            this.B = b;
            this.j = X(this, c);
            this.C = X(this, d);
            RH(this, e);
            this.o = new _.bI(this.B)
        };
    _.T(dr, Y);
    dr.prototype.g = function() {
        var a = 0 === (0, _.Pp)() ? "rgba(1,1,1,0.5)" : "white";
        _.qp(this.j.value, _.z(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.Pp)() ? DN : CN));
        _.qp(this.C.value, _.z(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, CN));
        _.kp(this, _.oI(this.B.document, this.B));
        a = {};
        MA(this.j.value).postMessage(JSON.stringify((a.googMsgType = "sth", a.msg_type = "i-view", a)), "*");
        if (this.B === this.B.top) {
            var b = _.dI(this.o, 2147483646);
            _.hI(b);
            _.kp(this, function() {
                return void _.iI(b)
            })
        }
    };
    var hr = function() {
        this.Wf = 1E3
    };
    hr.prototype.send = function(a, b) {
        a.hh(b)
    };
    var kr = function() {
        this.Wf = _.Mf(zE)
    };
    kr.prototype.send = function(a, b) {
        var c = ut(b, EB, 2);
        Le(c, 1, Oc, 17);
        a.vm(b)
    };
    var EN = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 683);
        this.slotId = b;
        this.P = c;
        this.j = d;
        this.o = W(this);
        this.C = X(this, e);
        this.W = X(this, f);
        this.H = PH(this, g);
        this.K = PH(this, h);
        this.context.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.context, {
            U: 7
        }))
    };
    _.T(EN, Y);
    EN.prototype.g = function() {
        var a = this;
        this.context.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.context, {
            U: 8
        }));
        var b = this.W.value,
            c = this.C.value,
            d = this.K.value.kl,
            e = new _.BJ(this.context),
            f = null != xm(this.j, 14) ? 60 * Xs(this.j, 14) : 604800;
        b = new d(this.context, window, c, b, e, this.P, FN(this), new _.u.Set(ve(this.j, 15, _.Vc, 2)), UM(this.slotId), function() {
            return void a.za()
        }, function() {
            mr(a.context, {
                Qb: 1,
                payload: function() {
                    var g = new _.dj,
                        h = iq(g, QC, 5);
                    _.qi(h, 1, _.Xf());
                    return g
                }
            });
            a.za()
        }, f, this.H.value);
        b.ia();
        _.S(this, b);
        this.o.G(b);
        this.context.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.context, {
            U: 9
        }))
    };
    var FN = function(a) {
        var b = {};
        a = _.bk(a.j, Pz, 13);
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[dk(c, 1)] = dk(c, 2);
        return b
    };
    var GN = function(a, b, c, d) {
        Y.call(this, a, 1210);
        this.action = b;
        this.j = PH(this, c);
        RH(this, d)
    };
    _.T(GN, Y);
    GN.prototype.g = function() {
        var a;
        null != (a = this.j.value) && a.ob() && this.action()
    };
    var HN = function(a, b, c) {
        Y.call(this, a, 1121);
        this.aa = b;
        this.output = OH(this);
        this.C = !1;
        this.H = X(this, c)
    };
    _.T(HN, Y);
    HN.prototype.g = function() {
        var a = this;
        if (this.o = nr(Cl(this.context, this.id, function(b) {
                b = _.y(b);
                for (var c = b.next(); !c.done; c = b.next()) c = 100 * c.value.intersectionRatio, _.z(Number, "isFinite").call(Number, c) && 50 <= c ? a.j || (a.C = !0, nH(a.aa) || IN(a)) : (a.C = !1, JN(a))
            }))) _.kp(this, function() {
            var b;
            null == (b = a.o) || b.disconnect();
            JN(a)
        }), this.o.observe(this.H.value), this.K = lp(this, this.id, this.aa, "visibilitychange", function() {
            nH(a.aa) ? JN(a) : a.C && !a.j && IN(a)
        })
    };
    var IN = function(a) {
            a.j = setTimeout(function() {
                a.j = void 0;
                if (!nH(a.aa)) {
                    a.output.notify();
                    var b;
                    null == (b = a.o) || b.disconnect();
                    var c;
                    null == (c = a.K) || c.call(a)
                }
            }, 1E3)
        },
        JN = function(a) {
            clearTimeout(a.j);
            a.j = void 0
        };
    var Fu = function(a, b, c, d, e, f, g, h, k, l, m) {
        m = void 0 === m ? function() {
            return _.Xf()
        } : m;
        Y.call(this, a, 1141);
        this.slotId = b;
        this.K = c;
        this.o = d;
        this.aa = e;
        this.j = f;
        this.P = g;
        this.xb = h;
        this.H = k;
        this.C = l;
        this.jc = m;
        this.output = W(this)
    };
    _.T(Fu, Y);
    Fu.prototype.g = function() {
        var a = this;
        if (this.o) {
            var b = new ok;
            _.S(this, b);
            var c = J(b, new EN(this.context, this.slotId, this.K, this.o, this.j, this.P, this.xb, this.H));
            _.kp(c, function() {
                return void a.za()
            });
            this.output.La(c.o.promise.then(function() {
                return !0
            }));
            if (_.E(OD) || _.Mf(RD)) {
                var d = J(b, new HN(this.context, this.aa, this.j));
                _.Mf(RD) && J(b, new GN(this.context, function() {
                    mr(a.context, {
                        Qb: _.Mf(RD),
                        payload: function() {
                            var e = new PC,
                                f = a.jc();
                            null !== f && _.qi(e, 1, f);
                            return RC(e)
                        }
                    })
                }, c.o, d.output));
                _.E(OD) && J(b, new GN(this.context, function() {
                    mr(a.context, {
                        Qb: 1,
                        payload: function() {
                            var e = new PC,
                                f = a.jc();
                            null !== f && _.qi(e, 1, f);
                            Th(e, 2, !0);
                            return RC(e)
                        }
                    });
                    a.C()
                }, c.o, d.output))
            }
            xk(b)
        } else this.output.G(!1)
    };
    var KN = function(a) {
        this.module = a
    };
    KN.prototype.toString = function() {
        return String(this.module)
    };
    _.LN = new KN(2);
    _.MN = new KN(5);
    _.NN = new KN(6);
    var xu = function(a, b, c, d, e, f) {
        Y.call(this, a, 846);
        this.o = b;
        this.format = c;
        this.eb = d;
        this.j = e;
        this.output = W(this);
        f && RH(this, f)
    };
    _.T(xu, Y);
    xu.prototype.g = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.eb) || !_.Q(a, 12, !1));
        a = 5 === this.format && this.j;
        b || a ? this.output.La(this.o.load(_.LN)) : this.output.ca()
    };
    var ON = function(a, b, c, d, e) {
        Y.call(this, a, 905);
        this.O = b;
        this.j = c;
        this.output = OH(this);
        this.o = X(this, d);
        RH(this, e)
    };
    _.T(ON, Y);
    ON.prototype.g = function() {
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            b = null == (c = this.O.T[b.value.getDomId()]) ? void 0 : or(c);
            if (2 === b || 3 === b || 5 === b) {
                this.j.load(_.LN);
                return
            }
        }
        this.output.notify()
    };
    var PN = function(a, b, c, d, e, f) {
        Y.call(this, a, 696);
        this.slotId = b;
        this.Aa = c;
        RH(this, d);
        SH(this, [e, f])
    };
    _.T(PN, Y);
    PN.prototype.g = function() {
        Ys(this.Aa, "rewardedSlotClosed", 703, new yN(this.slotId, "publisher_ads"))
    };
    var QN = function(a, b, c, d, e) {
        Y.call(this, a, 694);
        this.slotId = b;
        this.Aa = c;
        RH(this, d);
        this.j = PH(this, e)
    };
    _.T(QN, Y);
    QN.prototype.g = function() {
        var a, b = null == (a = this.j.value) ? void 0 : a.payload;
        Ys(this.Aa, "rewardedSlotGranted", 702, new xN(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var RN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        SN = function(a, b, c, d, e, f) {
            Y.call(this, a, 693);
            this.B = b;
            this.H = f;
            this.output = OH(this);
            this.o = X(this, c);
            this.C = X(this, d);
            RH(this, e);
            this.j = new _.bI(this.B)
        };
    _.T(SN, Y);
    SN.prototype.g = function() {
        var a = this;
        if (!this.H.Oc) {
            var b = 0 === (0, _.Pp)() ? "rgba(1,1,1,0.5)" : "white";
            _.qp(this.C.value, _.z(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, RN));
            _.kp(this, _.oI(this.B.document, this.B));
            MA(this.o.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.B === this.B.top) {
                this.B.location.hash = "goog_rewarded";
                var c = _.dI(this.j, 2147483646);
                _.hI(c);
                _.kp(this, function() {
                    _.iI(c);
                    "goog_rewarded" === a.B.location.hash && (a.B.location.hash = "")
                })
            }
            this.output.notify()
        }
    };
    var TN = function(a, b, c, d) {
        Y.call(this, a, 695);
        this.B = b;
        this.j = X(this, c);
        RH(this, d)
    };
    _.T(TN, Y);
    TN.prototype.g = function() {
        if (this.B === this.B.top) var a = MA(this.j.value),
            b = lp(this, 503, this.B, "hashchange", function(c) {
                ox(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var UN = function(a, b, c, d) {
        Y.call(this, a, 692);
        this.slotId = b;
        this.Aa = c;
        this.output = OH(this);
        this.j = X(this, d)
    };
    _.T(UN, Y);
    UN.prototype.g = function() {
        var a = this.j.value,
            b = new _.xh,
            c = b.promise,
            d;
        Ys(this.Aa, "rewardedSlotReady", 701, new wN(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        IH(this.output, c)
    };
    var VN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        WN = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        XN = function(a, b, c, d, e) {
            Y.call(this, a, 691);
            this.C = W(this);
            this.o = OH(this);
            this.H = X(this, c);
            this.j = SH(this, [d, e])
        };
    _.T(XN, Y);
    XN.prototype.g = function() {
        if ("ha_before_make_visible" === this.j.value.message) this.o.notify();
        else {
            var a = _.E(VD) ? VN : WN;
            _.qp(this.H.value, _.z(Object, "assign").call(Object, {
                position: "absolute"
            }, 0 === (0, _.Pp)() ? a : VN));
            this.C.G(this.j.value)
        }
    };
    var Gu = function(a, b, c, d, e, f) {
        ok.call(this);
        var g = rr(b, "granted", a);
        J(this, g);
        var h = rr(b, "prefetched", a);
        J(this, h);
        var k = rr(b, "closed", a);
        J(this, k);
        var l = rr(b, "ha_before_make_visible", a);
        J(this, l);
        var m = new XN(a, b, e, h.output, l.output);
        J(this, m);
        h = new UN(a, b, c, m.C);
        J(this, h);
        f = new SN(a, d, e, f, h.output, m.o);
        J(this, f);
        J(this, new TN(a, d, e, f.output));
        J(this, new QN(a, b, c, h.output, g.output));
        J(this, new PN(a, b, c, h.output, k.output, l.output))
    };
    _.T(Gu, ok);
    var Mt = function(a, b) {
        Y.call(this, a, 1031);
        this.B = b
    };
    _.T(Mt, Y);
    Mt.prototype.g = function() {
        this.B === this.B.top && ll(this.B)
    };
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var YN = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        sr = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = YN[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var ZN = Tg({
            gsppack: yo,
            fpt: Wg,
            eids: Xg()
        }),
        $N = Tg({
            paw_id: Wg,
            signal: Wg,
            error: Wg,
            eids: Xg()
        }),
        aO = function(a, b, c, d, e) {
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
    _.T(aO, _.V);
    aO.prototype.A = function() {
        _.V.prototype.A.call(this);
        bO(this);
        for (var a = _.y(this.ports), b = a.next(); !b.done; b = a.next()) b = b.value, this.ports.delete(b), b.onmessage = null
    };
    var cO = function(a, b, c) {
            b.onmessage = c;
            a.ports.add(b)
        },
        bO = function(a) {
            null !== a.l && (_.ag(a.B, "message", a.l), a.l = null)
        },
        dO = function(a, b) {
            for (var c = _.y(a.ports), d = c.next(); !d.done; d = c.next()) d = d.value, d !== b && (a.ports.delete(d), d.onmessage = null);
            bO(a);
            a.g = b
        },
        eO = function(a, b) {
            cO(a, b, function(c) {
                a: {
                    try {
                        var d = JSON.parse(c.data);
                        if ($N(d)) {
                            var e = d;
                            break a
                        }
                    } catch (k) {}
                    e = void 0
                }
                if (e) {
                    null === a.g && dO(a, b);
                    var f;
                    null == (f = a.j) || f.resolve(e.signal);
                    a.j = null
                } else {
                    a: {
                        try {
                            var g = JSON.parse(c.data);
                            if (ZN(g) && g.gsppack) {
                                var h = g;
                                break a
                            }
                        } catch (k) {}
                        h = void 0
                    }
                    h && null === a.g && dO(a, b)
                }
            });
            tr(b)
        },
        fO = function(a) {
            if (a.j) return a.j.promise;
            if (null !== a.l) throw Error("a poll message listener is already registered");
            a.j = new _.xh;
            null === a.g ? (a.l = function(b) {
                b = null == b.data || "" === b.data ? b.ports[0] : void 0;
                b && eO(a, b)
            }, _.pb(a.B, "message", a.l)) : tr(a.g);
            return a.j.promise
        };
    var Kt = function(a, b, c, d) {
        c = void 0 === c ? Mh : c;
        d = void 0 === d ? new aO(b) : d;
        Y.call(this, a, 1063);
        this.B = b;
        this.H = c;
        this.j = d;
        this.o = W(this);
        this.C = W(this);
        _.S(this, d)
    };
    _.T(Kt, Y);
    Kt.prototype.g = function() {
        var a = this;
        if (_.E(HD)) {
            var b = Nh(this.B),
                c = !b && _.E(uF) ? fO(this.j) : void 0,
                d = null,
                e = 0,
                f = function() {
                    return _.E(uF) && null !== a.j.g ? c ? c.then(function(k) {
                        c = void 0;
                        return k
                    }) : fO(a.j) : a.H(a.B)
                },
                g = Cl(this.context, this.id, function() {
                    var k, l, m;
                    return _.rb(function(n) {
                        switch (n.g) {
                            case 1:
                                return k = "0", n.l = 2, n.yield(f(), 4);
                            case 4:
                                k = null != (l = n.A) ? l : "0";
                                1E4 < k.length && (Gl(a.context, a.id, new uo("ML:" + k.length)), k = "0");
                                n.g = 3;
                                n.l = 0;
                                break;
                            case 2:
                                m = tb(n), Gl(a.context, a.id, m);
                            case 3:
                                d = k, e = _.Wf(a.B) + 3E5, n.g = 0
                        }
                    })
                });
            if (!_.E(uF) || b) var h = (_.H = g(), _.z(_.H, "finally")).call(_.H, function() {
                h = void 0
            });
            this.o.G(function() {
                var k, l, m;
                return _.rb(function(n) {
                    if (1 == n.g) {
                        k = _.E(uF) && null !== a.j.g;
                        if (!b && !k) return n.return("");
                        l = _.Wf(a.B) >= e;
                        m = null === d || "0" === d;
                        if (!l && !m) {
                            n.g = 2;
                            return
                        }
                        h || (h = (_.H = g(), _.z(_.H, "finally")).call(_.H, function() {
                            h = void 0
                        }));
                        return n.yield(h, 2)
                    }
                    return n.return(d)
                })
            });
            this.C.G("WEBVIEW_SDK_PAW")
        } else this.o.G(function() {
            return _.u.Promise.resolve("")
        })
    };
    Kt.prototype.l = function() {
        this.o.G(function() {
            return _.u.Promise.resolve("")
        });
        this.C.G("WEBVIEW_SDK_PAW")
    };
    var gO = function(a, b) {
        Y.call(this, a, 1091);
        this.output = W(this);
        b && (this.j = PH(this, b))
    };
    _.T(gO, Y);
    gO.prototype.g = function() {
        var a;
        null != (a = this.j) && a.value ? this.output.La(this.j.value()) : this.output.G("")
    };
    gO.prototype.l = function() {
        this.output.G("")
    };
    var Er = new _.u.Map([
        ["IAB_AUDIENCE_1_1", 3],
        ["IAB_CONTENT_2_2", 5],
        ["IAB_CONTENT_3_0", 6]
    ]);
    var Lr = new _.u.Set(["disablePersonalization"]);
    var Pr = function(a, b, c) {
        Y.call(this, a, 1122);
        this.aa = b;
        this.j = c;
        OH(this, c)
    };
    _.T(Pr, Y);
    Pr.prototype.g = function() {
        var a = this,
            b = Al(this.context);
        IH(this.j, new _.u.Promise(function(c) {
            return void pH(function() {
                c();
                b()
            }, a.aa)
        }))
    };
    var Nt = function(a, b, c) {
        Y.call(this, a, 1107);
        this.B = b;
        this.j = c;
        W(this, c)
    };
    _.T(Nt, Y);
    Nt.prototype.g = function() {
        var a = lh(this.B.isSecureContext, this.B.navigator, this.B.document),
            b = mh(this.B.isSecureContext, this.B.document),
            c = nh(this.B.isSecureContext, this.B, this.B.document),
            d = !(!this.B.isSecureContext || !kh("attribution-reporting", this.B.document)),
            e = 0;
        a && (e |= 1);
        b && (e |= 4);
        c && (e |= 8);
        d && (e |= 2);
        this.j.Ha(0 === e ? null : e)
    };
    Nt.prototype.l = function() {
        this.j.ca()
    };
    var hO = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1118, _.Mf(aE));
        this.C = b;
        this.K = e;
        this.T = f;
        W(this, e);
        c && (this.P = PH(this, c));
        d && (this.H = PH(this, d));
        g && (this.o = X(this, g));
        h && (this.j = QH(this, h))
    };
    _.T(hO, Y);
    hO.prototype.g = function() {
        var a = new xH;
        a = _.Ke(a, 1, _.Zc(this.C), 0);
        if (this.j)
            if (this.j.value) {
                var b = _.bj(a, 3, this.j.value.label);
                _.K(b, 4, this.j.value.status)
            } else this.j.Oc() || _.K(a, 4, 5);
        if (this.C & 1) {
            var c, d;
            b = iO(this, null == (c = this.P) ? void 0 : c.value, null == (d = this.H) ? void 0 : d.value);
            _.ci(a, 2, b)
        }
        this.K.G(a)
    };
    var iO = function(a, b, c) {
            switch (_.Mf(Pt)) {
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
            var e = new wH;
            _.E(pF) || _.K(e, 1, d);
            null == b || b.forEach(function(h, k) {
                if (!_.E(xE) || h.length) {
                    var l = vH(new uH, h),
                        m;
                    null == (m = null == c ? void 0 : c.get(k)) || m.forEach(function(n, p) {
                        var r = new rH;
                        n = _.Ke(r, 2, _.Zc(n), 0);
                        p = _.Ke(n, 1, _.Zc(_.ph(p)), 0);
                        kk(l, 2, rH, p)
                    });
                    Ie(e, 2, uH).set(k, l)
                }
            });
            var f;
            if ((null == (f = a.o) ? 0 : f.value) && a.T) {
                var g;
                b = _.y(null == (g = a.o) ? void 0 : g.value);
                for (g = b.next(); !g.done; g = b.next()) g = g.value, (d = jO(a, a.T[g.getDomId()])) && Ie(e, 3, sH).set(g.getAdUnitPath(), d)
            }
            return e
        },
        jO = function(a, b) {
            a = Bo(a.context, b);
            if (0 !== a.length) return tH(new sH, a.map(function(c) {
                return c.seller
            }))
        };
    var Rr = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1165);
        this.H = c;
        this.vf = d;
        this.T = e;
        this.C = f;
        this.o = g;
        this.j = PH(this, b.Xi)
    };
    _.T(Rr, Y);
    Rr.prototype.g = function() {
        if (this.j.value) {
            var a = new ok,
                b = new hO(this.context, this.j.value, this.H, void 0, this.vf.Vg, this.T, this.C, this.o);
            J(a, b);
            xk(a)
        } else this.vf.Vg.ca()
    };
    var Zt = function(a, b, c) {
        Y.call(this, a, 1206);
        this.o = b;
        this.j = W(this);
        this.Z = X(this, c)
    };
    _.T(Zt, Y);
    Zt.prototype.g = function() {
        var a = this;
        this.o.cookieDeprecationLabel ? bh(this.Z.value) ? this.j.La(this.o.cookieDeprecationLabel.getValue().then(function(b) {
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
    var kO = function(a, b) {
        Y.call(this, a, 1213, _.Mf(aE));
        this.j = W(this);
        b && (this.o = QH(this, b))
    };
    _.T(kO, Y);
    kO.prototype.g = function() {
        var a, b, c;
        (null == (c = null == (a = this.o) ? void 0 : null == (b = a.value) ? void 0 : b.label) ? 0 : c.match(Nf($D))) ? this.j.G(!0): this.j.G(!1)
    };
    var lO = function(a, b) {
        Y.call(this, a, 1212, _.Mf(aE));
        this.j = W(this);
        this.o = W(this);
        b && (this.C = QH(this, b))
    };
    _.T(lO, Y);
    lO.prototype.g = function() {
        var a, b, c = null == (a = this.C) ? void 0 : null == (b = a.value) ? void 0 : b.label;
        c ? (this.o.G(!0), c.match(Nf($D)) ? this.j.G(!0) : this.j.G(!1)) : (this.j.G(!1), this.o.G(!1))
    };
    var mO = function(a, b, c) {
        Y.call(this, a, 873);
        this.B = b;
        this.j = X(this, c)
    };
    _.T(mO, Y);
    mO.prototype.g = function() {
        var a = this.context,
            b = this.j.value,
            c = this.B;
        !wo()._pubconsole_disable_ && (b = fh("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || To(a, c))
    };
    var nO = function() {
        this.resources = {}
    };
    var Tr = "3rd party ad content";
    var oO = function(a, b, c) {
        _.V.call(this);
        this.context = a;
        this.Sa = b;
        this.l = c;
        a = c.slotId;
        b = c.size;
        this.g = "height" === c.sb ? "fluid" : [b.width, b.height];
        this.Ud = Zm(a);
        this.Vd = Tr
    };
    _.T(oO, _.V);
    oO.prototype.render = function() {
        var a = this.Sa,
            b = this.l,
            c = b.slotId,
            d = b.O.T,
            e = b.size,
            f = b.Na,
            g = b.isBackfill,
            h = b.Sb;
        Pi(b.pj, _.GA(b.aa), null != f ? f : "", !1);
        Ws(_.Kf(El), "5", Xs(d[c.getDomId()], 20));
        Ys(c, Zs, 801, {
            Rh: 0 === a.kind ? a.tb : "",
            isBackfill: g
        });
        a = this.D();
        h && a && a.setAttribute("data-google-container-id", h);
        Ys(c, $s, 825, {
            size: e,
            isEmpty: !1
        });
        return a
    };
    oO.prototype.loaded = function(a) {
        var b = this.l,
            c = b.slotId,
            d = b.Aa;
        b = b.O.T;
        Ys(c, Mu, 844);
        a && a.setAttribute("data-load-complete", !0);
        Ys(d, "slotOnload", 710, new sN(c, "publisher_ads"));
        Ws(_.Kf(El), "6", Xs(b[c.getDomId()], 20))
    };
    var pO = function(a) {
        a = a.Sa;
        a = 0 === a.kind ? a.tb : "";
        var b = "";
        b = void 0 === b ? "" : b;
        if (a) {
            var c = a.toLowerCase();
            a = -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") || _.E(sA) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>"
        }
        return a
    };
    oO.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.pj.removeAttribute("data-google-query-id")
    };
    oO.prototype.I = function(a) {
        var b = this,
            c = qO(this, function() {
                return void b.loaded(c.g)
            }, a);
        _.kp(this, function() {
            100 != c.status && (c.vg() && (MI(c.l), c.C = 0), window.clearTimeout(c.H), c.H = -1, c.J = 3, c.A && (c.A.za(), c.A = null), _.ag(window, "resize", c.Da), _.ag(window, "scroll", c.Da), c.D && c.g && c.D == _.KA(c.g) && c.D.removeChild(c.g), c.g = null, c.D = null, c.status = 100)
        });
        return c
    };
    var qO = function(a, b, c) {
        var d = a.l,
            e = d.jj,
            f = d.isBackfill,
            g = d.Sb,
            h = d.Se,
            k = d.Lf,
            l = d.Za,
            m = Array.isArray(a.g) ? new _.Mm(Number(a.g[0]), Number(a.g[1])) : 1;
        return new UI({
            Sg: d.Kh,
            Ud: a.Ud,
            Vd: a.Vd,
            content: pO(a),
            size: m,
            Ri: b,
            kj: null != e ? e : void 0,
            permissions: {
                Qe: null != Gn(c, 1) ? !!_.Q(c, 1) : !f,
                Re: null != Gn(c, 2) ? !!_.Q(c, 2) : !1
            },
            Wd: !!wo().fifWin,
            mm: CL ? CL : CL = wn(),
            ik: An(),
            hostpageLibraryTokens: l.hostpageLibraryTokens,
            rb: function(n, p) {
                return void Gl(a.context, n, p)
            },
            uniqueId: g,
            ij: AL(),
            Se: null != h ? h : void 0,
            ub: void 0,
            Lf: null != k ? k : void 0
        })
    };
    var rO = function() {
        oO.apply(this, arguments)
    };
    _.T(rO, oO);
    rO.prototype.D = function() {
        var a = this.l,
            b = a.O,
            c = b.ba;
        a = b.T[a.slotId.getDomId()];
        b = new Bn;
        c = Hn([b, c.yc(), null == a ? void 0 : a.yc()]);
        return oO.prototype.I.call(this, c).g
    };
    rO.prototype.j = function() {
        return !1
    };
    var nu = function(a, b, c, d, e, f) {
        Y.call(this, a, 669);
        this.ba = b;
        this.T = c;
        this.j = d;
        this.Gb = e;
        this.output = W(this);
        f && (this.o = X(this, f))
    };
    _.T(nu, Y);
    nu.prototype.g = function() {
        var a;
        if (null == (a = this.o) ? 0 : a.value) this.output.G(!0);
        else {
            var b;
            a = !(null == (b = this.j) || !_.I(b, 1)) && (_.Q(this.T, 12) || Gn(this.ba, 13)) || this.Gb;
            this.output.G(!!a)
        }
    };
    var sO = function(a, b, c, d) {
        Y.call(this, a, 833);
        this.j = b;
        this.B = c;
        this.output = OH(this);
        RH(this, d)
    };
    _.T(sO, Y);
    sO.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = AL();
        c = {
            version: CL ? CL : CL = wn(),
            Df: c
        };
        c = aJ.wl(c);
        var d = HI(b);
        c = d ? _.hb(c, new _.u.Map([
            ["n", String(d)]
        ])) : c;
        d = Of(yn);
        for (var e = new _.u.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
        c = _.hb(c, e);
        var g;
        a.resources[c.toString()] || (null == (g = wo()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.$f("IFRAME"), a.src = _.gb(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)));
        this.output.notify()
    };
    var tO = function(a, b, c) {
        Y.call(this, a, 1135);
        this.o = b;
        this.C = c;
        this.j = W(this)
    };
    _.T(tO, Y);
    tO.prototype.g = function() {
        for (var a = new vz, b = new _.u.Map, c = new _.u.Set, d = _.y(this.o), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (_.Bi(f, 1)) {
                e = new _.u.Set;
                b.set(_.I(f, 1).toString(), e);
                f = _.y(_.bk(f, tz, 2));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = _.I(g, 1);
                    e.add(h);
                    c.has(h) || kk(a, 2, tz, g);
                    c.add(h)
                }
            }
        }
        this.C.G(b);
        this.j.G(a)
    };
    var uO = function(a, b, c) {
        Y.call(this, a, 1051);
        this.o = b;
        this.j = PH(this, c)
    };
    _.T(uO, Y);
    uO.prototype.g = function() {
        var a = this;
        this.j.value && Jk(this.j.value, function(b, c) {
            Gl(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var vO = function(a, b) {
        Y.call(this, a, 1040);
        this.j = W(this);
        this.o = PH(this, b)
    };
    _.T(vO, Y);
    vO.prototype.g = function() {
        var a = this.o.value;
        a ? (a = _.bk(a, tz, 2), this.j.G(a.map(function(b) {
            var c = Ry(b, uz);
            b = _.I(b, 1);
            c = c && (_.z(c, "startsWith").call(c, location.protocol) || _.z(c, "startsWith").call(c, "data:") && 80 >= c.length) ? eb(Tj(c)) : void 0;
            return {
                Ie: b,
                url: c
            }
        }))) : this.j.G([])
    };
    var wO = function(a, b, c) {
        Y.call(this, a, 813);
        this.xb = c;
        this.o = PH(this, b);
        this.j = PH(this, c)
    };
    _.T(wO, Y);
    wO.prototype.g = function() {
        var a = this,
            b = this.o.value,
            c = this.j.value;
        if (null != b && b.length && c) {
            b = _.y(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = e.Ie;
                (e = e.url) && _.S(this, Nk(d, e, c, this.xb, function(f, g) {
                    Gl(a.context, f, g);
                    var h, k;
                    null == (k = (h = console).error) || k.call(h, g)
                }))
            }
        }
    };
    var xO = function(a, b, c) {
        Y.call(this, a, 1045);
        this.j = b;
        this.xb = c
    };
    _.T(xO, Y);
    xO.prototype.g = function() {
        var a = new ok;
        _.S(this, a);
        var b = new vO(this.context, this.j);
        J(a, b);
        b = new wO(this.context, b.j, this.xb);
        J(a, b);
        xk(a)
    };
    var fu = function(a, b, c, d) {
        Y.call(this, a, 706);
        this.B = b;
        this.output = null != d ? d : W(this);
        this.j = X(this, c)
    };
    _.T(fu, Y);
    fu.prototype.g = function() {
        this.output.Ha(ch(this.j.value, this.B))
    };
    var Yr = function(a, b, c, d) {
        Y.call(this, a, 1154);
        this.kb = c;
        this.j = d;
        this.o = PH(this, b)
    };
    _.T(Yr, Y);
    Yr.prototype.g = function() {
        if (this.o.value) {
            var a = new ok;
            _.S(this, a);
            var b = new fu(this.context, window, this.kb, this.j.xb);
            J(a, b);
            b = new tO(this.context, this.o.value, this.j.Jg);
            J(a, b);
            J(a, new xO(this.context, b.j, this.j.xb));
            b = new uO(this.context, console, this.j.xb);
            J(a, b);
            xk(a)
        } else this.j.Jg.ca(), this.j.xb.ca()
    };
    var yO = function(a, b, c, d, e, f) {
        Y.call(this, a, 1096);
        this.B = b;
        this.Z = c;
        this.j = d;
        this.zc = e;
        this.o = PH(this, f)
    };
    _.T(yO, Y);
    yO.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : a.Tj;
        b && b(this.j, this.Z, this.B, this.zc, this.context.Ra)
    };
    var zO = function(a, b) {
        Y.call(this, a, 1095);
        this.j = b;
        this.output = W(this)
    };
    _.T(zO, Y);
    zO.prototype.g = function() {
        this.output.La(this.j.load(_.MN))
    };
    var $r = function(a, b, c, d, e) {
        Y.call(this, a, 1090);
        this.j = b;
        this.zc = c;
        this.o = X(this, d);
        this.C = PH(this, e)
    };
    _.T($r, Y);
    $r.prototype.g = function() {
        var a = this.C.value,
            b;
        if (a && null != (b = _.vm(a, _.Kz, 1)) && _.bk(b, _.Jz, 15).length) {
            b = new ok;
            _.S(this, b);
            var c = new zO(this.context, this.j);
            J(b, c);
            a = new yO(this.context, window, this.o.value, a, this.zc, c.output);
            J(b, a);
            xk(b)
        }
    };
    var Iu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1205);
        this.B = b;
        this.K = c;
        this.H = X(this, d);
        this.o = X(this, e);
        this.j = X(this, f);
        this.C = X(this, g)
    };
    _.T(Iu, Y);
    Iu.prototype.g = function() {
        var a = this.H.value;
        a = new a.Am(this.o.value, this.B, this.j.value, this.K, this.C.value, new _.BJ(this.context), new a.Rk(this.B));
        _.S(this, a);
        _.S(this, a.ia)
    };
    var Hu = function(a, b) {
        Y.call(this, a, 1204);
        this.j = b;
        this.output = W(this)
    };
    _.T(Hu, Y);
    Hu.prototype.g = function() {
        this.output.La(this.j.load(_.NN))
    };
    var pt = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = Cl(a, 88, function(f, g) {
            var h;
            if (h = mo(f)) h = g, h = lo(h) || Array.isArray(h) && h.every(lo);
            if (h) {
                if (_.E(mE)) {
                    var k = cs(g);
                    h = k.size;
                    k.ah && (g = Vl([f, g]), g = g.substring(1, g.length - 1), O(b, new Ul(151, ["SizeMappingBuilder.addSize", g])), g = h)
                }
                d.push([f, g])
            } else e.push([f, g]), O(b, Wl("SizeMappingBuilder.addSize", [f, g]));
            return c
        });
        this.build = Cl(a, 89, function() {
            if (e.length) return O(b, nK(En(e))), null;
            pa(d);
            return d
        })
    };
    var AO = function(a, b, c, d, e, f) {
        f = void 0 === f ? Pk : f;
        Y.call(this, a, 939);
        this.o = b;
        this.B = c;
        this.Z = d;
        this.j = f;
        this.output = OH(this);
        RH(this, e)
    };
    _.T(AO, Y);
    AO.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = new ez;
        var d = new dz;
        d = _.bj(d, 1, String(this.o));
        c = _.ci(c, 5, d);
        c = _.K(c, 4, 1);
        c = _.K(c, 2, 2);
        c = _.bj(c, 3, this.context.yb || this.context.Bb);
        c = _.ul(c, 6, bh(this.Z));
        a.call(this, b, c);
        this.output.notify()
    };
    var vu = function(a, b, c, d, e) {
        Y.call(this, a, 807);
        this.B = b;
        this.Kb = c;
        this.output = OH(this);
        this.j = X(this, d);
        e && RH(this, e)
    };
    _.T(vu, Y);
    vu.prototype.g = function() {
        if (this.Kb && !this.j.value) {
            var a = lB(this.B);
            vJ(new uJ(a, this.Kb)) || this.I(new uo("Cannot create top window frame"))
        }
        this.output.notify()
    };
    var BO = function(a, b) {
        Y.call(this, a, 820);
        this.B = b;
        this.output = W(this)
    };
    _.T(BO, Y);
    BO.prototype.g = function() {
        var a = this;
        this.output.La(Tk(this.B).then(function(b) {
            var c = b.Kb,
                d = b.status;
            xp("gpt_etu", function(e) {
                Xo(e, a.context);
                Yo(e, "rsn", d)
            }, c ? void 0 : 0);
            return null != c ? c : ""
        }))
    };
    var CO = function(a, b, c, d) {
        Y.call(this, a, 979);
        this.B = b;
        this.j = PH(this, d);
        this.output = c
    };
    _.T(CO, Y);
    CO.prototype.g = function() {
        var a = this;
        if (_.E(qE)) this.output.ca();
        else {
            var b;
            Xk(this.B, null != (b = this.j.value) ? b : !1).then(function(c) {
                a.output.G(c)
            })
        }
    };
    CO.prototype.l = function() {
        this.output.ca()
    };
    var hs = function(a, b, c, d) {
        Y.call(this, a, 1156);
        this.B = b;
        this.Vf = c;
        this.j = {
            Vc: new Yp
        };
        this.o = X(this, d)
    };
    _.T(hs, Y);
    hs.prototype.g = function() {
        if (bh(this.o.value)) {
            var a = new ok;
            _.S(this, a);
            var b = new CO(this.context, this.B, this.j.Vc, this.Vf);
            J(a, b);
            xk(a)
        } else this.j.Vc.ca()
    };
    var DO = function(a, b, c) {
        Y.call(this, a, 1123);
        this.j = b;
        this.o = c;
        W(this, b);
        W(this, c)
    };
    _.T(DO, Y);
    DO.prototype.g = function() {
        _.E(oE) ? (this.j.G(!1), this.o.ca()) : (this.j.G(!0), this.o.G(10))
    };
    var EO = function(a, b, c, d, e) {
        Y.call(this, a, 978);
        this.B = b;
        this.C = c;
        this.j = e;
        W(this, e);
        this.o = PH(this, d.Vc)
    };
    _.T(EO, Y);
    EO.prototype.g = function() {
        if (_.E(pE)) this.j.ca();
        else if (this.o.value) {
            var a = dl(this.o.value, this.B, new _.BJ(this.context), this.C);
            this.j.La(a)
        } else this.j.ca()
    };
    EO.prototype.l = function() {
        this.j.ca()
    };
    var js = function(a, b, c, d, e, f) {
        Y.call(this, a, 1164);
        this.o = b;
        this.te = c;
        this.j = e;
        this.C = X(this, d);
        f && (this.H = X(this, f))
    };
    _.T(js, Y);
    js.prototype.g = function() {
        var a;
        if (!mh(window.isSecureContext, window.document) || (null == (a = this.H) ? 0 : a.value)) this.j.Cd.ca(), this.j.re.G(!1), this.j.se.ca();
        else if (this.C.value) {
            a = new ok;
            _.S(this, a);
            J(a, new EO(this.context, window, this.o, this.te, this.j.Cd));
            var b = new DO(this.context, this.j.re, this.j.se);
            J(a, b);
            xk(a)
        } else this.j.Cd.G(5), this.j.re.G(!1), this.j.se.G(5)
    };
    var FO = function(a, b, c) {
        Y.call(this, a, 1101);
        this.B = b;
        this.j = c
    };
    _.T(FO, Y);
    FO.prototype.g = function() {
        if (!_.E(pE)) {
            var a = this.j,
                b = Uk(this.B);
            b.setTopicsCalled ? _.u.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }))
        }
    };
    var zu = function(a, b, c, d) {
        Y.call(this, a, 1180);
        this.B = b;
        this.Qf = c;
        this.j = PH(this, d.Vc)
    };
    _.T(zu, Y);
    zu.prototype.g = function() {
        if (this.Qf && this.j.value) {
            var a = new ok;
            _.S(this, a);
            J(a, new FO(this.context, this.B, this.j.value));
            xk(a)
        }
    };
    var ss = function(a) {
        this.F = _.A(a)
    };
    _.T(ss, _.D);
    var os = function(a, b) {
        return _.Ke(a, 2, _.qd(b), "0")
    };
    var GO = function(a) {
        this.F = _.A(a)
    };
    _.T(GO, _.D);
    var rs = If(GO);
    GO.da = [1];
    var au = function(a, b, c, d) {
        Y.call(this, a, 1186);
        this.L = b;
        this.B = c;
        this.output = W(this);
        this.Z = X(this, d)
    };
    _.T(au, Y);
    au.prototype.g = function() {
        if (!lh(this.B.isSecureContext, this.B.navigator, this.B.document) || _.E(Ot)) this.output.ca();
        else {
            var a = this.L.Te;
            if (null !== a) this.output.G(a);
            else {
                var b = _.Jn(new _.VG(this.B), "__gpi", this.Z.value);
                a = this.output;
                var c = a.G;
                b = _.ph(b || String(this.context.pvsid)) % 63001;
                this.L.Te = b;
                c.call(a, b)
            }
        }
    };
    var HO = function(a, b, c) {
        Y.call(this, a, 1171);
        this.j = c;
        W(this, c);
        this.Zg = X(this, b)
    };
    _.T(HO, Y);
    HO.prototype.g = function() {
        this.j.G(0 === this.Zg.value.kind)
    };
    var IO = function(a, b, c) {
        Y.call(this, a, 1160);
        this.j = c;
        W(this, c);
        this.o = X(this, b)
    };
    _.T(IO, Y);
    IO.prototype.g = function() {
        if (null != this.o.value.requestId) {
            var a = this.o.value.request;
            this.context.Ra.Jc.Sc.ue.Zj.je({
                ne: a.byteLength
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
    IO.prototype.l = function() {
        this.j.G({
            kind: 1,
            reason: 4
        })
    };
    var JO = function(a, b) {
        Y.call(this, a, 1159);
        this.output = W(this);
        this.j = b
    };
    _.T(JO, Y);
    JO.prototype.g = function() {
        var a = this;
        this.output.La(this.j.getInterestGroupAdAuctionData({
            seller: "https://securepubads.g.doubleclick.net"
        }).catch(function(b) {
            a.I(b);
            return 4
        }))
    };
    JO.prototype.l = function() {
        this.output.G(4)
    };
    var ws = function(a, b, c, d, e, f) {
        Y.call(this, a, 1177);
        this.C = b;
        this.j = e;
        this.o = f;
        W(this, e);
        W(this, f);
        this.H = X(this, c);
        d && (this.K = X(this, d))
    };
    _.T(ws, Y);
    ws.prototype.g = function() {
        if (this.H.value) {
            var a;
            if (null == (a = this.K) ? 0 : a.value) this.j.G({
                kind: 1,
                reason: 6
            }), this.o.G(!1);
            else {
                a = new ok;
                _.S(this, a);
                var b = new JO(this.context, this.C);
                J(a, b);
                b = new IO(this.context, b.output, this.j);
                J(a, b);
                b = new HO(this.context, this.j, this.o);
                J(a, b);
                xk(a)
            }
        } else this.j.G({
            kind: 1,
            reason: 2
        }), this.o.G(!1)
    };
    var KO = function(a, b, c, d, e) {
        Y.call(this, a, 881);
        this.Fa = b;
        this.na = c;
        this.j = d;
        this.o = e;
        this.output = W(this)
    };
    _.T(KO, Y);
    KO.prototype.g = function() {
        if (4 === _.Mf(Pt)) {
            var a = _.vm(this.na, eA, 23);
            if (a) {
                var b;
                if (0 !== (null == (b = this.j) ? void 0 : b.kind)) throw new TypeError("Received remote auction config despite " + (this.j ? "invalid" : "absent") + " remarketing input.");
                this.output.G({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: ni(this.na, 3, 2),
                    requestId: this.j.requestId,
                    serverResponse: gl(hl(a, 1)),
                    resolveToConfig: !_.Q(this.na, 14)
                })
            } else this.output.ca()
        } else {
            b = this.output;
            a = b.G;
            var c = this.na,
                d = Bo(this.context, this.Fa),
                e = this.context.Ra,
                f = this.o,
                g = _.E(oF),
                h = _.Mf(rE),
                k = void 0 === h ? 0 : h;
            h = !_.Q(c, 14);
            var l = {};
            var m = _.bk(c, bA, 7);
            m = _.y(m);
            for (var n = m.next(); !n.done; n = m.next()) {
                n = n.value;
                var p = {},
                    r = void 0,
                    v = null == (r = e) ? void 0 : r.Jc.Sc.ue.hk;
                r = _.I(n, 1);
                if (_.I(n, 2).length) try {
                    if (p = JSON.parse(_.I(n, 2)), 1 > 100 * _.oh()) {
                        var w = void 0;
                        null == (w = v) || w.Dc({
                            Of: r,
                            status: "SUCCESS",
                            Rc: 100
                        })
                    }
                } catch (F) {
                    w = void 0, null == (w = v) || w.Dc({
                        Of: r,
                        status: "ERROR",
                        Rc: 1
                    })
                } else w = void 0, null == (w = v) || w.Dc({
                    Of: r,
                    status: "EMPTY",
                    Rc: 1
                });
                l[_.I(n, 1)] = p
            }
            if (e = _.vm(c, aA, 6)) l["https://googleads.g.doubleclick.net"] = e.toJSON(), l["https://td.doubleclick.net"] = e.toJSON();
            m = {};
            e = _.y(_.bk(c, dA, 11));
            for (n = e.next(); !n.done; n = e.next()) n = n.value, m[_.I(n, 1)] = _.My(n, 2);
            n = {};
            0 !== _.My(c, 21) && (n["*"] = _.My(c, 21));
            if (0 < _.bk(c, cA, 32).length) {
                var x = {};
                e = _.y(_.bk(c, cA, 32));
                for (p = e.next(); !p.done; p = e.next()) p = p.value, x[_.I(p, 1)] = _.My(p, 2)
            }
            p = {};
            null != xm(c, 18) && (p["https://googleads.g.doubleclick.net"] = Xs(c, 18), p["https://td.doubleclick.net"] = Xs(c, 18));
            e = _.y(Ie(c, 24, iA));
            for (v = e.next(); !v.done; v = e.next()) r = v.value, Xs(r[1], 4) && (v = r[0], r = Xs(r[1], 4), p[v] = r);
            e = _.I(c, 1).split("/td/")[0];
            var B;
            v = null == (B = _.vm(c, gA, 5)) ? void 0 : _.je(B);
            var C;
            null != v && null != (C = _.vm(v, fA, 5)) && _.ik(C, 2);
            x = _.z(Object, "assign").call(Object, {}, {
                seller: e,
                decisionLogicUrl: _.I(c, 1),
                trustedScoringSignalsUrl: _.I(c, 2),
                interestGroupBuyers: ni(c, 3, 2),
                sellerExperimentGroupId: Xs(c, 17),
                auctionSignals: JSON.parse(_.I(c, 4) || "{}"),
                sellerSignals: (null == v ? void 0 : v.toJSON()) || [],
                sellerTimeout: _.My(c, 15) || 50,
                perBuyerExperimentGroupIds: p,
                perBuyerSignals: l,
                perBuyerTimeouts: m,
                perBuyerCumulativeTimeouts: n
            }, x ? {
                perBuyerGroupLimits: x
            } : {}, h ? {
                resolveToConfig: h
            } : {});
            if (null == c ? 0 : _.Q(jA(c), 25)) x.sellerCurrency = "USD", x.perBuyerCurrencies = _.z(Object, "fromEntries").call(Object, He(c, 22, zd));
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
            B = Xs(c, 17);
            C = new gA;
            di(jA(c), fA, 5) && (l = new fA, m = Ny(Jy(jA(c), fA, 5), 2), l = _.Ke(l, 2, ed(m), "0"), m = Ny(Jy(jA(c), fA, 5), 4), l = _.Ke(l, 4, ed(m), "0"), _.ci(C, 5, l));
            jA(c).getEscapedQemQueryId() && (l = jA(c).getEscapedQemQueryId(), _.bj(C, 2, l));
            _.I(jA(c), 6) && (l = _.I(jA(c), 6), _.bj(C, 6, l));
            _.Q(jA(c), 21) && _.ul(C, 21, !0);
            _.Q(jA(c), 4) && _.ul(C, 4, !0);
            _.I(jA(c), 11) && (l = _.I(jA(c), 11), _.bj(C, 11, l));
            C = C.toJSON();
            l = _.My(c, 15) || 50;
            if (_.Q(c, 30)) {
                if (null == d || !d.length) throw Error("top_td_without_component_auction");
            } else d = [x].concat(_.ri(null != d ? d : []));
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
    KO.prototype.l = function() {
        this.output.ca()
    };
    var LO = function(a, b, c, d) {
        Y.call(this, a, 1105);
        this.adUnitPath = b;
        this.na = c;
        this.j = d
    };
    _.T(LO, Y);
    LO.prototype.g = function() {
        var a = Date.now();
        if (!_.E(Bs) || us(a)) {
            var b = ni(this.na, 3, 2),
                c = ls(this.adUnitPath);
            if (_.Q(this.na, 20)) {
                if (_.E(yE)) {
                    var d;
                    var e = (null == (d = _.vm(this.na, hA, 29)) ? void 0 : Xs(d, 2)) || 864E5
                } else e = 864E5;
                a = Cs(b, a + e);
                e = (b = this.j.getItem(c)) ? _.bk(rs(b), ss, 1) : [];
                var f;
                b = new GO;
                a = ps(e, a);
                a = _.pm(b, 1, a);
                b = !(null == (f = _.vm(this.na, hA, 29)) || !_.Q(f, 3));
                f = Th(a, 2, b);
                this.j.setItem(c, cl(f))
            } else _.E(wE) && this.j.removeItem(c)
        }
    };
    Tg({
        google_signals: Tg({
            buyer_reporting_id: Wg
        })
    });
    var Gs = navigator,
        Hs = /(\$\{GDPR})/gi,
        Is = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        Js = /(\$\{ADDTL_CONSENT})/gi,
        Ks = /(\$\{AD_WIDTH})/gi,
        Ls = /(\$\{AD_HEIGHT})/gi,
        Ms = /(\$\{RENDER_DATA})/gi;
    var MO = function() {
            var a = this;
            this.promise = new _.u.Promise(function(b, c) {
                a.reject = c;
                a.resolve = b
            })
        },
        NO = function() {
            this.auctionSignals = new MO;
            this.topLevelSellerSignals = new MO;
            this.g = new MO;
            this.perBuyerSignals = new MO;
            this.perBuyerTimeouts = new MO;
            this.perBuyerCumulativeTimeouts = new MO;
            this.directFromSellerSignals = new MO;
            this.directFromSellerSignalsHeaderAdSlot = new MO;
            this.perBuyerCurrencies = new MO;
            this.resolveToConfig = new MO;
            this.deprecatedRenderURLReplacements = new MO
        },
        OO = function(a, b, c, d) {
            this.g = a;
            this.Xf = b;
            this.interestGroupBuyers = c;
            this.Hb = d
        };
    var PO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Y.call(this, a, 1201);
        this.ha = b;
        this.Z = c;
        this.na = d;
        this.ka = e;
        this.W = k;
        this.H = l;
        this.K = m;
        this.P = n;
        this.C = p;
        this.j = r;
        this.ra = OH(this);
        this.o = W(this);
        this.xa = PH(this, f);
        this.Ma = X(this, g);
        this.ua = X(this, h);
        this.ga = X(this, w);
        X(this, v);
        W(this, p);
        W(this, n.Nb);
        W(this, n.Ga);
        W(this, n.Ja);
        W(this, this.j)
    };
    _.T(PO, Y);
    PO.prototype.g = function() {
        var a = Math.round(performance.now() - this.Ma.value),
            b = this.ua.value,
            c = this.xa.value,
            d = _.vm(this.na, gA, 5),
            e = _.Q(d, 10),
            f = _.Q(d, 9),
            g = "string" === typeof c || Os(c),
            h = 3 !== c && 2 !== c && 1 !== c;
        this.j.G(g && !f);
        h && Us(this.context, g, b, a, d);
        this.context.V.log(607368714, Ss, {
            Hk: a,
            ll: g,
            Yj: c,
            dm: d.getEscapedQemQueryId(),
            dl: _.I(d, 6)
        });
        var k, l;
        h = null != (l = null == (k = this.ga.value.componentAuctions) ? void 0 : k.length) ? l : 0;
        Ts(this.context, c, a, b, !!this.ka, d, h, g);
        if (g)
            if (e) this.ha.deprecatedURNToURL(c, !0), this.C.G(!0), this.o.ca();
            else if (f) {
            _.Q(d, 17) ? Es(0, 0, d) : this.ha.deprecatedURNToURL(c, !0);
            var m;
            Fs(this.P, this.j, this.H, this.K, this.W, null == (m = this.na) ? void 0 : _.I(m, 25));
            this.C.G(!0);
            this.o.ca()
        } else {
            this.o.G(c);
            this.C.G(!0);
            if (_.E(vE)) {
                b = this.ga.value;
                d = this.na;
                var n;
                a = 1 === (null == (n = b.componentAuctions) ? void 0 : n.length) && vs(b.componentAuctions[0].seller) && di(d, $z, 26) ? ly(cl(Jy(d, $z, 26)), 3) : ""
            } else a = void 0;
            n = a;
            IH(this.ra, Ns(c, _.z(Object, "assign").call(Object, {}, {
                gdprApplies: null != Gn(this.Z, 3) ? _.Q(this.Z, 3) ? "1" : "0" : null,
                Zk: dk(this.Z, 2),
                Wj: dk(this.Z, 4),
                Sj: this.na.getWidth().toString(),
                Qj: this.na.getHeight().toString()
            }, n ? {
                im: n
            } : {})))
        } else {
            Es(a, 2 === c ? b : 0, d);
            if (!e) {
                var p;
                Fs(this.P, this.j, this.H, this.K, this.W, null == (p = this.na) ? void 0 : _.I(p, 25))
            }
            this.C.G(!0);
            this.o.ca()
        }
    };
    PO.prototype.l = function() {
        var a, b = null == (a = this.na) ? void 0 : _.vm(a, gA, 5);
        a = this.ka;
        var c = this.P,
            d = this.j,
            e = this.H,
            f = this.K,
            g = this.W;
        b && Es(0, 0, b);
        null == a || a.Hb.abort();
        Fs(c, d, e, f, g)
    };
    var QO = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Y.call(this, a, 1200);
        this.L = b;
        this.ua = c;
        this.o = d;
        this.na = e;
        this.W = g;
        this.H = h;
        this.K = k;
        this.P = m;
        this.ga = n;
        this.C = NH(this);
        this.ra = W(this);
        this.ka = W(this);
        this.ha = W(this);
        this.j = PH(this, f);
        X(this, l);
        W(this, m.Nb);
        W(this, m.Ga);
        W(this, m.Ja);
        W(this, n)
    };
    _.T(QO, Y);
    QO.prototype.g = function() {
        if (this.j.value) {
            var a = jA(this.na);
            Vs(this.context, a);
            this.ra.G(performance.now());
            var b = _.My(this.na, 8) || 1E3;
            this.ka.G(b);
            var c = _.My(a, 14) || -1,
                d = _.My(a, 13) || -1;
            d = 0 < d && this.L.j >= d;
            if (0 < c && this.L.l >= c || d) this.C.G(1);
            else if (++this.L.l, ++this.L.j, this.j.value.signal = AbortSignal.timeout(b), _.Q(a, 15)) --this.L.l, this.C.La(new _.u.Promise(function(e) {
                setTimeout(function() {
                    e(1)
                }, 0)
            }));
            else {
                if (this.o && this.j.value.serverResponse) throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                a = this.o ? RO(this.j.value, b, this.o) : SO(this, this.j.value);
                --this.L.l;
                this.C.La(a)
            }
        } else null == (a = this.o) || a.Hb.abort(), Fs(this.P, this.ga, this.H, this.K, this.W), this.ha.G(!1)
    };
    var SO = function(a, b) {
            var c, d;
            return null == (d = (c = a.ua).runAdAuction) ? void 0 : d.call(c, b).catch(function(e) {
                if (e instanceof DOMException && "TimeoutError" === e.name) return 2;
                _.E(tE) && e instanceof Error && a.I(e);
                return 3
            })
        },
        RO = function(a, b, c) {
            As(a, c);
            setTimeout(function() {
                c.Hb.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, b);
            return c.g
        };
    QO.prototype.l = function() {
        var a, b = null == (a = this.na) ? void 0 : _.vm(a, gA, 5);
        a = this.o;
        var c = this.P,
            d = this.ga,
            e = this.H,
            f = this.K,
            g = this.W;
        b && Es(0, 0, b);
        null == a || a.Hb.abort();
        Fs(c, d, e, f, g)
    };
    var TO = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1202);
        this.na = b;
        this.C = c;
        this.j = d;
        this.o = PH(this, f);
        this.H = X(this, e);
        RH(this, g);
        W(this, d.Nb);
        W(this, d.Ga);
        W(this, d.Ja)
    };
    _.T(TO, Y);
    TO.prototype.g = function() {
        if (this.o.value) {
            Fm(this.C) || (this.H.value.style.display = "");
            var a = this.o.value;
            var b = this.context.Ra;
            var c = _.I(this.na, 31);
            c ? Os(a) ? (b.Jc.Sc.ue.ih.th.Dc({
                Rc: 1,
                status: "FAILED_FENCED_FRAME"
            }), b = null) : (a = c.replace("%%srcfledge%%", a), a.length === c.length && a === c ? (b.Jc.Sc.ue.ih.th.Dc({
                Rc: 1,
                status: "FAILED_UNMODIFIED"
            }), b = null) : (b.Jc.Sc.ue.ih.th.Dc({
                Rc: 1,
                status: "OK"
            }), b = a)) : b = null;
            b ? this.j.Ga.G({
                kind: 0,
                tb: b
            }) : this.j.Ga.G({
                kind: 2,
                qe: this.o.value
            });
            this.j.Ja.G(new _.Mm(this.na.getWidth(), this.na.getHeight()));
            this.j.Nb.G(!1)
        }
    };
    var UO = function(a, b, c) {
        Y.call(this, a, 1054);
        this.j = b;
        this.output = OH(this);
        this.o = X(this, c)
    };
    _.T(UO, Y);
    UO.prototype.g = function() {
        this.o.value || this.j();
        this.output.notify()
    };
    var VO = function(a, b, c, d, e, f) {
        Y.call(this, a, 1053);
        this.slotId = b;
        this.O = c;
        this.L = d;
        this.Na = e;
        this.j = W(this);
        this.o = X(this, f)
    };
    _.T(VO, Y);
    VO.prototype.g = function() {
        this.o.value ? (at(this.slotId, this.L, this.O, this.Na), this.j.G(!1)) : this.j.G(!0)
    };
    var WO = function(a, b, c, d) {
        Y.call(this, a, 1055);
        this.j = d;
        RH(this, c);
        this.o = X(this, b);
        OH(this, this.j)
    };
    _.T(WO, Y);
    WO.prototype.g = function() {
        this.o.value && this.j.notify()
    };
    var ou = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B) {
        Y.call(this, a, 1179);
        this.slotId = b;
        this.T = d;
        this.L = e;
        this.Z = f;
        this.o = g;
        this.P = l;
        this.C = m;
        this.O = n;
        this.ga = p;
        this.Na = r;
        this.na = v;
        this.j = w;
        this.ka = x;
        this.ha = B;
        this.H = X(this, h);
        this.K = X(this, k);
        this.W = PH(this, c)
    };
    _.T(ou, Y);
    ou.prototype.g = function() {
        var a = new ok;
        _.S(this, a);
        var b = W(this);
        if (this.na) {
            var c = jA(this.na),
                d = _.Q(c, 10);
            if (this.na.getWidth() && this.na.getHeight())
                if (d)
                    if (Fs({
                            Nb: b,
                            Ga: this.j.Ga,
                            Ja: this.j.Ja
                        }, this.j.jd, this.H.value, this.K.value, this.o), _.Q(c, 17)) {
                        Es(0, 0, c);
                        var e;
                        null == (e = this.C) || e.Hb.abort()
                    } else XO(this, a, this.na);
            else b = XO(this, a, this.na);
            else {
                Fs({
                    Nb: b,
                    Ga: this.j.Ga,
                    Ja: this.j.Ja
                }, this.j.jd, this.H.value, this.K.value, this.o);
                Es(0, 0, c);
                var f;
                null == (f = this.C) || f.Hb.abort()
            }
        } else Fs({
            Nb: b,
            Ga: this.j.Ga,
            Ja: this.j.Ja
        }, this.j.jd, this.H.value, this.K.value, this.o), null == (c = this.C) || c.Hb.abort();
        e = new VO(this.context, this.slotId, this.O, this.L, this.Na, b);
        J(a, e);
        b = new UO(this.context, this.ga, b);
        J(a, b);
        b = new WO(this.context, e.j, b.output, this.j.Mc);
        J(a, b);
        xk(a)
    };
    var XO = function(a, b, c) {
        if (2 === _.Mf(Pt) && a.W.value && _.Q(c, 20) && 0 !== ni(c, 3, 2).length) {
            var d = new LO(a.context, a.slotId.getAdUnitPath(), c, a.W.value);
            J(b, d)
        }
        var e = new KO(a.context, a.T, c, a.ka, a.ha);
        J(b, e);
        var f = navigator,
            g = {
                Ga: a.j.Ga,
                Ja: a.j.Ja,
                Nb: new Yp
            };
        d = g.Nb;
        var h = new QO(a.context, a.L, f, a.C, c, e.output, a.o, a.H.value, a.K.value, a.P, g, a.j.jd);
        J(b, h);
        e = new PO(a.context, f, a.Z, c, a.C, h.C, h.ra, h.ka, a.o, a.H.value, a.K.value, g, h.ha, a.j.jd, a.P, e.output);
        J(b, e);
        c = new TO(a.context, c, or(a.T), g, a.P, e.o, e.ra);
        J(b, c);
        a = new Yq(a.context, a.slotId, $s);
        J(b, a);
        return d
    };
    var YO = function() {
        oO.apply(this, arguments)
    };
    _.T(YO, oO);
    var ZO = function(a, b) {
            var c = _.$f(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Ud;
            c.name = a.Ud;
            c.title = a.Vd;
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
        $O = function(a, b) {
            "string" !== typeof a.g && (b.width = String(a.g[0]), b.height = String(a.g[1]));
            var c = Cl(a.context, 774, function() {
                a.loaded(b);
                _.ag(b, "load", c)
            });
            _.pb(b, "load", c);
            _.kp(a, function() {
                return _.ag(b, "load", c)
            });
            a.l.Kh.appendChild(b)
        };
    var aP = function() {
        YO.apply(this, arguments)
    };
    _.T(aP, YO);
    aP.prototype.D = function() {
        var a = ZO(this, !this.l.Tm);
        if ("string" === typeof this.Sa.qe) {
            var b = this.Sa.qe;
            /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = eb(b), a.src = _.gb(b).toString())
        } else a.config = this.Sa.qe;
        $O(this, a);
        return a
    };
    aP.prototype.j = function() {
        return !1
    };
    var bP = navigator,
        cP = function(a, b, c, d, e, f, g) {
            Y.call(this, a, 1089);
            this.Zb = b;
            this.X = c;
            this.T = d;
            this.j = f;
            this.o = g;
            W(this, g);
            e && (this.C = PH(this, e))
        };
    _.T(cP, Y);
    cP.prototype.g = function() {
        var a = {};
        if (1 === this.Zb)
            for (var b = _.y(this.X), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = this.T[c.getDomId()];
                a[c.getId()] = dP(this, d, ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"], this.j)
            } else if (2 === this.Zb) {
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
                    null != (f = e) && f.length && (f = this.T[d.getDomId()], a[d.getId()] = dP(this, f, e, this.j))
                }
            }
        this.o.G(a)
    };
    var dP = function(a, b, c, d) {
        var e = new NO,
            f = new AbortController;
        b = zs({
            Xf: e,
            Hb: f,
            interestGroupBuyers: c,
            Ih: Bo(a.context, b),
            cl: d,
            Zl: _.E(oF)
        });
        b = bP.runAdAuction(b).catch(function(g) {
            if (g instanceof DOMException && "TimeoutError" === g.name) return 2;
            _.E(tE) && g instanceof Error && a.I(g);
            return 3
        });
        return new OO(b, e, c, f)
    };
    var eP = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1106);
        this.Z = b;
        this.H = c;
        this.o = d;
        this.X = e;
        this.C = f;
        this.K = g;
        this.j = W(this);
        W(this, g)
    };
    _.T(eP, Y);
    eP.prototype.g = function() {
        for (var a = ts(this.o, this.H, this.Z, this.C), b = new _.u.Map, c = ct(a), d = new _.u.Map, e = _.y(this.X), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            f = g.getAdUnitPath();
            var h = a.get(ls(f)),
                k = void 0,
                l = void 0,
                m = void 0,
                n = null != (m = null != (l = c) ? l : null == (k = h) ? void 0 : _.bk(k, ss, 1).map(function(p) {
                    return _.I(p, 1)
                })) ? m : [];
            b.set(g.getId(), n);
            if (!d.has(f)) {
                g = [];
                n = _.y(n.sort());
                for (h = n.next(); !h.done; h = n.next()) g.push(_.ph(h.value));
                d.set(f, g)
            }
        }
        this.j.G(b);
        this.K.G(d)
    };
    var dt = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 1170);
        this.Zb = b;
        this.T = c;
        this.Z = d;
        this.o = e;
        this.C = Date.now();
        this.j = {
            Rg: W(this)
        };
        2 === b && this.o && (this.j.sg = W(this));
        this.P = X(this, f);
        this.K = X(this, g);
        h && (this.H = PH(this, h));
        k && (this.W = X(this, k))
    };
    _.T(dt, Y);
    dt.prototype.g = function() {
        var a = this.P.value,
            b;
        if (!this.K.value || !a.length || (null == (b = this.W) ? 0 : b.value) || _.E(Bs) && !us(this.C)) {
            this.j.Rg.ca();
            var c;
            null == (c = this.j.sg) || c.ca()
        } else {
            b = new ok;
            _.S(this, b);
            if (2 === this.Zb && this.o) {
                var d, e;
                var f = new eP(this.context, this.Z, this.o, this.C, a, null != (e = null == (d = this.H) ? void 0 : d.value) ? e : void 0, this.j.sg);
                J(b, f);
                f = f.j
            }
            var g, h;
            a = new cP(this.context, this.Zb, a, this.T, f, null != (h = null == (g = this.H) ? void 0 : g.value) ? h : void 0, this.j.Rg);
            J(b, a);
            xk(b)
        }
    };
    var fP = function(a, b, c) {
        Y.call(this, a, 1216);
        this.j = b;
        this.output = NH(this);
        this.o = X(this, c)
    };
    _.T(fP, Y);
    fP.prototype.g = function() {
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
    var gP = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1166);
        this.ga = b;
        this.aa = c;
        this.H = d;
        this.j = NH(this);
        this.o = W(this);
        this.C = W(this);
        this.P = X(this, e);
        this.W = X(this, f);
        RH(this, g);
        this.K = X(this, h)
    };
    _.T(gP, Y);
    gP.prototype.g = function() {
        var a = this,
            b = this.P.value;
        if (b) {
            var c = ix(this.W.value, {
                    uuid: this.ga
                }),
                d = this.aa.createElement("script");
            b = {
                source: b,
                credentials: this.K.value ? "include" : "omit",
                resources: [c.toString()]
            };
            d.setAttribute("type", "webbundle");
            nb(d, bb(JSON.stringify(b).replace(/</g, "\\u003C")));
            this.aa.head.appendChild(d);
            this.o.G(d);
            this.C.G(b);
            this.j.La(hP(c).catch(function(e) {
                e instanceof OG ? a.H(e) : (a.I(e), a.l(e));
                return null
            }))
        } else this.j.ca(), this.o.ca(), this.C.ca()
    };
    var hP = function(a) {
        var b, c;
        return _.rb(function(d) {
            if (1 == d.g) return d.yield(fetch(a.toString()).catch(function() {
                throw new OG("Failed to fetch bundle index.");
            }), 2);
            if (3 != d.g) return b = d.A, d.yield(b.text(), 3);
            c = d.A;
            return d.return(mA(c))
        })
    };
    var iP = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 1167);
        this.aa = b;
        this.Z = c;
        this.H = d;
        this.j = e;
        this.C = f;
        this.o = X(this, g);
        this.P = PH(this, h);
        this.W = PH(this, k);
        this.ga = PH(this, l);
        m && (this.K = PH(this, m))
    };
    _.T(iP, Y);
    iP.prototype.g = function() {
        var a = this.P.value,
            b = this.W.value,
            c = this.ga.value;
        if (a)
            if (b && c) {
                var d = ni(a, 1, 2),
                    e = ni(a, 2, 2);
                a = ni(a, 3, 2);
                if (d.length !== e.length) this.j(new NG("Received " + d.length + " ad URLs but " + e.length + " metadatas"));
                else {
                    c.resources = [].concat(_.ri(d.filter(function(f) {
                        return f
                    })), _.ri(a.map(function(f) {
                        return "https://securepubads.g.doubleclick.net" + f
                    })));
                    c.resources.length ? (a = _.$f("SCRIPT"), a.setAttribute("type", "webbundle"), nb(a, bb(JSON.stringify(c).replace(/</g, "\\u003C"))), this.aa.head.removeChild(b), this.aa.head.appendChild(a)) : this.aa.head.removeChild(b);
                    for (b = 0; b < d.length; b++) c = void 0, this.H(b, e[b], {
                        kind: 1,
                        url: d[b]
                    }, this.o.value, this.Z, null == (c = this.K) ? void 0 : c.value, void 0, void 0);
                    this.C(d.length - 1, this.o.value, this.Z)
                }
            } else this.j(Error("Lost bundle script"))
    };
    var jP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        ok.call(this);
        e = new gP(a, f, h, c, m, n, p, r);
        J(this, e);
        J(this, new iP(a, h, g, b, c, d, k, e.j, e.o, e.C, l));
        this.g = {
            output: e.j
        }
    };
    _.T(jP, ok);
    var qt = new _.u.Set,
        kP = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.t.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new uo("Reached Limit for addEventListener");
        }, 3E5),
        lP = function(a, b, c) {
            _.V.call(this);
            this.context = a;
            this.R = b;
            this.l = c;
            this.g = [];
            this.enabled = !1;
            this.J = 0;
            this.D = new _.u.Map;
            qt.add(this);
            this.R.info(oK(this.getName()))
        };
    _.T(lP, _.V);
    var st = function(a) {
        a.enabled || (a.enabled = !0, In(6, a.context), a.o())
    };
    lP.prototype.slotAdded = function(a, b) {
        this.g.push(a);
        var c = new tN(a, this.getName());
        Ys(this.l, "slotAdded", 818, c);
        this.R.info(pK(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        Le(b, 4, _.rd, a)
    };
    lP.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ea(b.g, c)
        })
    };
    lP.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.J >= _.Mf(DD) && 0 < _.Mf(DD)) return kP(), !1;
        if (!c.IntersectionObserver && (_.H = ["impressionViewable", "slotVisibilityChanged"], _.z(_.H, "includes")).call(_.H, a)) return O(this.R, dL()), !1;
        var e;
        if (null == (e = this.D.get(a)) ? 0 : e.has(b)) return !1;
        this.D.has(a) || this.D.set(a, new _.u.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (k) {
                d.R.error(EK(String(k), a));
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            }
        };
        this.D.get(a).set(b, c);
        this.l.listen(a, c);
        this.J++;
        return !0
    };
    lP.prototype.removeEventListener = function(a, b) {
        var c, d = null == (c = this.D.get(a)) ? void 0 : c.get(b);
        if (!d || !EJ(this.l, a, d)) return !1;
        this.J--;
        return this.D.get(a).delete(b)
    };
    var ht = function(a) {
        for (var b = _.y(qt), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var mt = function(a, b, c, d) {
        lP.call(this, a, b, d);
        this.j = c;
        this.ads = new _.u.Map;
        this.Nc = !1
    };
    _.T(mt, lP);
    mt.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.Nc = a)
    };
    var qL = function(a, b) {
            var c;
            return a.j.enabled && !(null == (c = a.ads.get(b)) || !c.Rl)
        },
        rL = function(a, b, c, d) {
            b = new pN(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            Ys(a.l, "slotRenderEnded", 67, b)
        };
    mt.prototype.getName = function() {
        return "companion_ads"
    };
    mt.prototype.slotAdded = function(a, b) {
        var c = this;
        a.listen(HJ, function(d) {
            Gn(d.detail, 11) && (mP(c, a).Rl = !0)
        });
        lP.prototype.slotAdded.call(this, a, b)
    };
    mt.prototype.o = function() {};
    var mP = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.kp(b, function() {
                return a.ads.delete(b)
            }));
            return c
        },
        oL = function(a, b) {
            var c = bn().g,
                d = bn().A;
            if (a.j.enabled) {
                var e = {
                    ec: 3
                };
                a.I && (e.Dd = a.I);
                a.C && (e.Ed = a.C);
                b = null != b ? b : a.g;
                c = Pm(c, d);
                d = e.Dd;
                var f = e.Ed;
                d && "number" !== typeof d || f && "number" !== typeof f || a.j.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.R.error(vK(b[0].getDomId()))
        },
        pL = function(a, b) {
            return a.g.filter(function(c) {
                return _.z(b, "includes").call(b, c.toString())
            })
        };
    var nt = function(a, b, c) {
        lP.call(this, a, b, c)
    };
    _.T(nt, lP);
    nt.prototype.getName = function() {
        return "content"
    };
    nt.prototype.o = function() {};
    var ew = function(a, b) {
        this.configuration = lr();
        this.Ba = a;
        this.g = b
    };
    ew.prototype.log = function(a, b, c) {
        var d, e = null != (d = c.Qb) ? d : this.configuration[a].Wf;
        0 === e || 1 / e < this.g || (b = b(_.z(Object, "assign").call(Object, {}, {
            Qb: e
        }, c)), this.configuration[a].send(this.Ba, b))
    };
    var nP = _.pw(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        oP = _.pw(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        pP = _.pw(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        qP = _.pw(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        rP = new _.u.Map([
            [2, {
                Hg: "page_level_ads"
            }],
            [5, {
                Hg: "shoppit"
            }],
            [6, {
                Hg: "side_rails"
            }]
        ]),
        sP = function(a) {
            var b = void 0 === b ? rP : b;
            this.context = a;
            this.g = b;
            this.A = new _.u.Map;
            this.loaded = new _.u.Set
        },
        uP;
    sP.prototype.load = function(a) {
        var b = _.tP(this, a),
            c, d = (null != (c = this.g.get(a.module)) ? c : {}).Hg;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            d = (c = _.um(172)) && "pagead2.googlesyndication.com" === QA((c.src || "").match(_.PA)[3] || null) ? this.context.yb ? _.fb(pP, this.context.yb, d) : _.fb(qP, d, this.context.Bb) : this.context.yb ? _.fb(nP, this.context.yb, d) : _.fb(oP, d, this.context.Bb);
            c = {};
            var e = _.Mf(fE);
            e && (c.cb = e);
            d = _.z(Object, "keys").call(Object, c).length ? _.fx(d, c) : d;
            uP(this, a);
            _.ap(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.tP = function(a, b) {
        b = b.module;
        a.A.has(b) || a.A.set(b, new _.xh);
        return a.A.get(b)
    };
    uP = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = Cl(a.context, 340, function(e) {
            if (a.g.has(c) && "function" === typeof e) {
                var f = a.g.get(c);
                f = (void 0 === f.Ak ? [] : f.Ak).map(function(g) {
                    return _.tP(a, g).promise
                });
                _.u.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(wo(), b, {
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
    var Ut = function(a, b) {
        Y.call(this, a, 980);
        this.output = new Or;
        this.j = [];
        this.o = X(this, b)
    };
    _.T(Ut, Y);
    Ut.prototype.g = function() {
        for (var a = _.y((_.H = [this.o.value, this.j.map(function(c) {
                return c.value
            })], _.z(_.H, "flat")).call(_.H)), b = a.next(); !b.done; b = a.next()) ih(b.value);
        this.output.notify()
    };
    var Bt = function(a, b) {
        Y.call(this, a, 892, _.Mf(ZD));
        this.Wc = W(this);
        this.fd = W(this);
        this.bd = W(this);
        this.Mb = W(this);
        this.vd = W(this);
        this.zd = W(this);
        this.kc = W(this);
        this.j = QH(this, b);
        this.Lb = W(this)
    };
    _.T(Bt, Y);
    Bt.prototype.g = function() {
        var a = this.j.value;
        if (!a) throw Error("config timeout");
        this.Wc.Ha(_.vm(a, zz, 3));
        this.fd.Ha(_.vm(a, Bz, 2));
        var b = this.bd,
            c = b.G;
        var d = ve(a, 4, Xc, 2);
        c.call(b, d);
        b = this.Mb;
        c = b.Ha;
        d = _.bk(a, vz, 6);
        c.call(b, d);
        b = this.vd;
        c = b.Ha;
        d = _.bk(a, Av, 5);
        c.call(b, d);
        this.zd.Ha(_.vm(a, Lz, 7));
        var e;
        b = this.kc;
        c = b.G;
        d = _.u.Set;
        var f;
        null == (e = _.vm(a, wz, 1)) ? f = void 0 : f = ni(e, 6, 2);
        c.call(b, new d(f || []));
        this.Lb.Ha(_.vm(a, Nz, 8))
    };
    Bt.prototype.J = function(a) {
        this.l(a)
    };
    Bt.prototype.l = function(a) {
        this.Wc.ib(a);
        this.fd.ib(a);
        this.bd.G([]);
        this.Mb.G([]);
        this.vd.G([]);
        this.zd.ca();
        this.Lb.ca()
    };
    var At = function(a, b) {
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
                d.Oc || (c.error = Error("malformed response"), d.G([]))
            }
        })
    };
    _.T(At, Y);
    At.prototype.g = function() {
        if (this.error) throw this.error;
        this.j.G(Ue(Oz, this.o.value))
    };
    var vP = function(a, b) {
        Y.call(this, a, 1081);
        this.Cb = W(this);
        this.j = PH(this, b)
    };
    _.T(vP, Y);
    vP.prototype.g = function() {
        this.j.value ? this.Cb.G(this.j.value) : this.Cb.ca()
    };
    var wP = new _.u.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        xP = function(a, b, c, d, e, f, g, h, k) {
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
    _.T(xP, Y);
    xP.prototype.g = function() {
        var a = this,
            b = this.o.getAdUnitPath(),
            c = wP.get(_.gg(this.o, 2, 0));
        if (b && c) {
            var d, e = null != (d = this.ba) ? d : this.j.g;
            b = new XM(this.context, this.aa, b, c, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, e, this.j, this.H, this.R, !1, this.C);
            _.S(this, b);
            xk(b)
        }
    };
    var Tt = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1082);
        this.googletag = b;
        this.ba = c;
        this.H = d;
        this.o = e;
        this.R = f;
        this.C = W(this);
        this.j = new vP(this.context, this.C);
        this.Cb = this.j.Cb;
        _.S(this, this.j);
        this.K = X(this, g)
    };
    _.T(Tt, Y);
    Tt.prototype.g = function() {
        if (_.E(dE)) {
            for (var a = [], b = _.y(this.K.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, fl(c, Mz)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
            }
            this.C.Ha(null == d ? void 0 : _.vm(d, Gz, 4));
            d = new ok;
            _.S(this, d);
            a = _.y(a);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, J(d, new xP(this.context, document, this.googletag, null != (c = this.ba) ? c : this.o.g, this.H, this.o, this.R, _.vm(b, Iz, il(b, Mz, 5)), _.vm(b, Gz, 4)));
            J(d, this.j);
            xk(d)
        } else this.Cb.ca()
    };
    var bu = function(a, b, c, d, e, f, g, h) {
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
    _.T(bu, _.V);
    var fw = function(a) {
        VH.call(this, function(b, c) {
            Gl(a, b, c);
            var d;
            null == (d = console) || d.error(c)
        })
    };
    _.T(fw, VH);
    var yP = function() {
        YO.apply(this, arguments)
    };
    _.T(yP, YO);
    yP.prototype.D = function() {
        var a = this,
            b = this.l,
            c = b.jj;
        b = b.Se;
        var d = ZO(this);
        if (null == c ? 0 : c.length)
            if (_.Vx) {
                c = _.y(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.ri(c));
        b && (d.allow = b);
        $O(this, d);
        Il(this.context, 653, function() {
            var f;
            if (f = Vj(a.Sa.tb)) {
                var g = f.toString().toLowerCase();
                f = -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") || _.E(xF) ? f : Vj("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>")
            }
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ja() && g.open("text/html", "replace");
            g.write(_.Ex(f));
            var l, m, n;
            if (ox(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    yP.prototype.j = function() {
        return !0
    };
    var Au = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R, L, Z) {
        Y.call(this, a, 680);
        this.slotId = b;
        this.L = c;
        this.O = d;
        this.Aa = e;
        this.Za = f;
        this.sb = g;
        this.Na = h;
        this.isBackfill = k;
        this.Sb = l;
        this.na = m;
        this.B = n;
        this.j = W(this);
        this.C = W(this);
        this.o = OH(this);
        this.K = X(this, p);
        this.ka = X(this, r);
        RH(this, v);
        this.W = X(this, w);
        this.H = X(this, x);
        this.P = X(this, B);
        RH(this, F);
        this.ra = PH(this, C);
        RH(this, G);
        this.ha = X(this, P);
        RH(this, R);
        Z && RH(this, Z);
        L && (this.ga = PH(this, L))
    };
    _.T(Au, Y);
    Au.prototype.g = function() {
        var a = this.K.value;
        if (0 === a.kind && null == a.tb) throw new NG("invalid html");
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
                    pj: this.W.value,
                    Kh: this.H.value,
                    Na: this.Na,
                    sb: this.sb,
                    jj: this.ra.value,
                    isBackfill: this.isBackfill,
                    Sb: this.Sb,
                    Se: this.ha.value,
                    Tm: null == (b = this.na) ? void 0 : _.Q(b, 14),
                    Lf: null == (c = this.ga) ? void 0 : c.value,
                    Za: this.Za
                };b = this.ka.value;c = a.kind;
            switch (c) {
                case 0:
                    a = new(b ? rO : yP)(d, a, e);
                    break a;
                case 2:
                    a = new aP(d, a, e);
                    break a;
                default:
                    lb(c)
            }
            a = void 0
        }
        _.S(this, a);
        d = a.render();
        zP(this, this.B, d);
        this.B.top && this.B.top !== this.B && _.Sk(this.B.top) && zP(this, this.B.top, d);
        this.o.notify();
        this.j.G(d);
        this.C.G(a.j())
    };
    var zP = function(a, b, c) {
        lp(a, a.id, b, "message", function(d) {
            c.contentWindow === d.source && Ys(a.slotId, Zq, 824, d)
        })
    };
    var gu = function(a, b, c, d, e) {
        Y.call(this, a, 720);
        this.format = b;
        this.sa = c;
        this.eb = d;
        this.height = e;
        this.output = W(this)
    };
    _.T(gu, Y);
    gu.prototype.g = function() {
        if (null == this.height) this.output.ca();
        else {
            var a = Math.round(.3 * this.sa),
                b;
            2 !== this.format && 3 !== this.format || null == (b = this.eb) || !_.Q(b, 12, !1) || 0 >= a || this.height <= a ? this.output.G(this.height) : this.output.G(a)
        }
    };
    var pu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Y.call(this, a, 674);
        this.slotId = b;
        this.ba = c;
        this.o = d;
        this.aa = f;
        this.L = g;
        this.sb = m;
        this.output = W(this);
        this.K = 2 === e || 3 === e;
        this.j = X(this, h);
        this.H = X(this, k);
        this.C = PH(this, l);
        n && RH(this, n)
    };
    _.T(pu, Y);
    pu.prototype.g = function() {
        var a = fq(this.ba, this.o),
            b = Sm(this.slotId, this.aa) || Ip(this.j.value, $m(this.slotId), a);
        this.H.value && !a && (b.style.display = "inline-block");
        this.K ? QJ(this.L, this.slotId, function() {
            return void _.JA(b)
        }) : _.kp(this, function() {
            return void _.JA(b)
        });
        a = AP(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.output.G(b)
    };
    var AP = function(a) {
        var b = a.j.value,
            c, d = null == (c = a.C.value) ? void 0 : c.height;
        if (b && !a.sb && d) {
            var e;
            c = (null != (e = eq(a.o, 23)) ? e : _.Q(a.ba, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var eu = function(a, b) {
        Y.call(this, a, 859);
        this.B = b;
        this.output = W(this)
    };
    _.T(eu, Y);
    eu.prototype.g = function() {
        this.output.G(!_.Sk(this.B.top))
    };
    var wu = function(a, b, c) {
        Y.call(this, a, 840);
        this.format = b;
        this.aa = c;
        this.output = W(this)
    };
    _.T(wu, Y);
    wu.prototype.g = function() {
        var a = [],
            b = this.aa;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (_.H = c.features(), _.z(_.H, "includes")).call(_.H, "attribution-reporting") && a.push("attribution-reporting");
        switch (this.format) {
            case 5:
            case 4:
                _.E(oD) && a.push("autoplay");
                break;
            case 7:
                _.E(pD) && a.push("autoplay")
        }
        a.length ? this.output.G(a.join(";")) : this.output.G("")
    };
    var Ou = function(a, b, c, d) {
        Y.call(this, a, 1207);
        this.Aa = c;
        this.slotId = d;
        RH(this, b)
    };
    _.T(Ou, Y);
    Ou.prototype.g = function() {
        Ys(this.Aa, "impressionViewable", 715, new qN(this.slotId, "publisher_ads"))
    };
    var Nu = function(a, b, c, d) {
        HN.call(this, a, b, c);
        RH(this, d)
    };
    _.T(Nu, HN);
    var Ju = function(a, b, c, d, e, f) {
        f = void 0 === f ? du : f;
        Y.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.aa = d;
        this.Aa = e;
        this.C = f;
        this.j = this.o = -1;
        this.K = _.Px(function() {
            Ys(g.Aa, "slotVisibilityChanged", 716, new rN(g.slotId, "publisher_ads", g.j))
        }, 200);
        this.H = X(this, c);
        var h = new Or;
        FJ(this.slotId).then(function() {
            return void h.notify()
        });
        RH(this, h)
    };
    _.T(Ju, Y);
    Ju.prototype.g = function() {
        var a = this,
            b = this.C(Cl(this.context, this.id, function(c) {
                c = _.y(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.z(Number, "isFinite").call(Number, a.o) && BP(a)
            }));
        b && (b.observe(this.H.value), lp(this, this.id, this.aa, "visibilitychange", function() {
            BP(a)
        }), _.kp(this, function() {
            b.disconnect()
        }))
    };
    var BP = function(a) {
        var b = Math.floor(nH(a.aa) ? 0 : a.o);
        if (0 > b || 100 < b || b === a.j ? 0 : -1 !== a.j || 0 !== b) a.j = b, a.K()
    };
    var uu = function(a, b, c, d, e, f) {
        Y.call(this, a, 719);
        this.ba = b;
        this.o = c;
        this.rh = d;
        this.output = W(this);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(uu, Y);
    uu.prototype.g = function() {
        var a = this.j.value.kind;
        switch (a) {
            case 0:
                this.j.value.tb ? this.C.value ? (a = new Bn, a = Th(a, 3, this.rh), _.Q(Hn([a, this.ba.yc(), this.o.yc()]), 3) ? this.output.G(ZI) : this.output.ca()) : this.output.ca() : this.output.ca();
                break;
            case 2:
                this.output.ca();
                break;
            default:
                lb(a)
        }
    };
    var CP = function(a, b, c, d, e, f) {
        Y.call(this, a, 1119);
        this.slotId = b;
        this.o = c;
        this.documentElement = d;
        this.L = e;
        this.j = f;
        this.output = W(this)
    };
    _.T(CP, Y);
    CP.prototype.g = function() {
        var a = _.$f("INS");
        a.id = this.o;
        Fm(this.j) && _.qp(a, {
            display: "none"
        });
        this.documentElement.appendChild(a);
        var b = function() {
            return void _.JA(a)
        };
        (_.H = [2, 3], _.z(_.H, "includes")).call(_.H, this.j) ? QJ(this.L, this.slotId, b) : _.kp(this, b);
        this.output.G(a)
    };
    var DP = function(a, b, c, d, e) {
        Y.call(this, a, 1120);
        this.K = b;
        this.C = c;
        this.o = d;
        this.j = e;
        this.output = W(this);
        a = this.j;
        if (!_.ja(a) || !_.ja(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) this.H = X(this, this.j)
    };
    _.T(DP, Y);
    DP.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.H) ? void 0 : a.value) ? b : this.j;
        if (!(_.H = [2, 3], _.z(_.H, "includes")).call(_.H, this.C)) {
            a = _.y(_.z(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, 1 === b.nodeType && b.id !== this.K && _.JA(b);
            this.o || (c.style.display = "")
        }
        this.output.G(c)
    };
    var hu = function(a, b, c, d, e, f, g, h, k) {
        ok.call(this);
        c ? (a = new DP(a, e, g, k, c), J(this, a), a = a.output) : Em(g) ? (a = new CP(a, b, d, f, h, g), J(this, a), a = a.output) : (b = new qr(a, b, GJ, function(l) {
            return l.detail
        }), J(this, b), a = new DP(a, e, g, k, b.output), J(this, a), a = a.output);
        this.output = a
    };
    _.T(hu, ok);
    var EP = function(a, b) {
            var c = bn();
            this.context = a;
            this.L = b;
            this.g = c
        },
        FP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x) {
            var B = document,
                C = window;
            e || f || YJ(a.L, d);
            var F = Tu(a.context, b, a.g, c, d, e, f, g, h, k, l, B, m, n, p, r, v, function() {
                YJ(a.L, d);
                XJ(a.L, d, F)
            }, w, x);
            f || XJ(a.L, d, F);
            _.kp(d, function() {
                YJ(a.L, d)
            });
            C.top !== C && C.addEventListener("pagehide", function(G) {
                G.persisted || YJ(a.L, d)
            });
            xk(F)
        };
    var GP = function(a, b, c, d) {
        Y.call(this, a, 884);
        this.Ea = b;
        this.fb = c;
        this.o = W(this);
        this.j = X(this, d)
    };
    _.T(GP, Y);
    GP.prototype.g = function() {
        jM(this.fb, _.Jn(this.Ea, "__gads", this.j.value));
        Ln(20, this.context, this.Ea, this.j.value);
        Ln(2, this.context, this.Ea, this.j.value);
        this.o.G(jh())
    };
    var Vu = 0,
        HP = new _.Im(-9, -9);
    var Zu = new _.u.Set([function(a, b) {
        var c = a.ma.O.ba;
        b.set("pvsid", {
            value: a.oa.context.pvsid
        }).set("correlator", {
            value: ms(c, 26)
        })
    }, function(a, b) {
        var c = a.ma.O.ba,
            d = a.Wm;
        a = d.Ed;
        d = d.Dd;
        var e = _.Q(c, 21);
        b = b.set("hxva", {
            value: e ? 1 : null
        }).set("cmsid", {
            value: e ? dk(c, 23) : null
        }).set("vid", {
            value: e ? dk(c, 22) : null
        }).set("pod", {
            value: d
        }).set("ppos", {
            value: a
        });
        a = b.set;
        c = Ky(c, 29);
        a.call(b, "scor", {
            value: null == c ? void 0 : c
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.X,
            e = c.O.T;
        c = a.Wg;
        var f = c.el,
            g = c.Xk;
        b.set("eid", {
            value: a.oa.kg
        }).set("debug_experiment_id", {
            value: lC().split(",")
        }).set("expflags", {
            value: _.um(253) ? Nf(FD) || null : null
        }).set("pied", {
            value: function() {
                var h = new ZH,
                    k = !1,
                    l = !1;
                f && (k = !0, kk(h, 1, Gz, f));
                var m = d.map(function(p) {
                    var r = new XH,
                        v, w;
                    null == (v = e[p.getDomId()]) ? w = void 0 : w = _.bk(v, Gz, 27);
                    p = w;
                    if (null == p || !p.length) return r;
                    l = k = !0;
                    p = _.y(p);
                    for (v = p.next(); !v.done; v = p.next()) kk(r, 1, Gz, v.value);
                    return r
                });
                l && _.pm(h, 2, m);
                m = _.y(null != g ? g : []);
                for (var n = m.next(); !n.done; n = m.next()) kk(h, 1, Gz, n.value), k = !0;
                return k ? Jb(h.g(), 3) : null
            }()
        })
    }, function(a, b) {
        var c = a.oa;
        a = c.context;
        c = c.mb;
        b.set("output", {
            value: "ldjh"
        }).set("gdfp_req", {
            value: 1
        }).set("vrg", {
            value: a.Hc ? String(a.Hc) : a.Bb
        }).set("ptt", {
            value: 17
        }).set("impl", {
            value: c ? "fifs" : "fif"
        })
    }, function(a, b) {
        var c = a.oa.Z;
        a = ev(a.ma.O.ba) || new sL;
        var d = _.gg(a, 6, 2);
        b = b.set("rdp", {
            value: _.Q(a, 1) ? "1" : null
        }).set("ltd", {
            value: _.Q(a, 9) ? "1" : null
        }).set("ltd_cs", {
            value: _.E(yD) && _.um(221) && null == Gn(c, 3) ? "1" : null
        }).set("gdpr_consent", {
            value: sv(c, 2)
        }).set("gdpr", {
            value: null != Gn(c, 3) ? _.Q(c, 3) ? "1" : "0" : null,
            options: {
                Ia: !0
            }
        }).set("addtl_consent", {
            value: sv(c, 4)
        }).set("tcfe", {
            value: Sy(c, 7)
        }).set("us_privacy", {
            value: sv(c, 1)
        }).set("npa", {
            value: _.Q(c, 6) || _.Q(a, 8) ? 1 : null
        }).set("puo", {
            value: _.E(cE) && _.Q(a, 13) ? 1 : null
        }).set("tfua", {
            value: 2 !== d ? d : null,
            options: {
                Ia: !0
            }
        }).set("tfcd", {
            value: null != _.Vc(_.$h(a, 5)) ? _.gg(a, 5, 0) : null,
            options: {
                Ia: !0
            }
        }).set("trt", {
            value: null != _.Vc(_.$h(a, 10)) ? _.gg(a, 10, 0) : null,
            options: {
                Ia: !0
            }
        }).set("tad", {
            value: _.E(Yu) && null != Gn(c, 8) ? _.Q(c, 8) ? "1" : "0" : null,
            options: {
                Ia: !0
            }
        }).set("gpp", {
            value: sv(c, 11)
        });
        a = b.set;
        c = Ly(c, 10);
        a.call(b, "gpp_sid", {
            value: c.join(",") || void 0
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.O,
            e = c.X,
            f = c.ug,
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
                return Dm(l)
            })
        }).set("fluid", {
            value: function() {
                var l = !1,
                    m = h.map(function(n) {
                        n = (_.H = Cm(n), _.z(_.H, "includes")).call(_.H, "fluid");
                        l || (l = n);
                        return n ? "height" : "0"
                    });
                return l ? m : null
            }()
        }).set("ifi", {
            value: function() {
                var l = Dp(g);
                if (!f) {
                    l += 1;
                    var m = g,
                        n = e.length;
                    n = void 0 === n ? 1 : n;
                    m = sB(Pf(m)) || m;
                    m.google_unique_id = (m.google_unique_id || 0) + n
                }
                return l
            }()
        }).set("didk", {
            value: _.E(jE) ? Xp(e, function(l) {
                return _.ph(l.getDomId())
            }) : null,
            options: _.z(Object, "assign").call(Object, {}, {
                Ta: "~"
            }, {
                hd: !0
            })
        })
    }, function(a, b) {
        var c = a.ma;
        a = c.X;
        c = c.O;
        var d = c.ba,
            e = c.T;
        b.set("sfv", {
            value: CL ? CL : CL = wn()
        }).set("fsfs", {
            value: Xp(a, function(f) {
                f = e[f.getDomId()];
                var g;
                return Number(null != (g = null == f ? void 0 : eq(f, 12)) ? g : Gn(d, 13))
            }),
            options: {
                Ta: ",",
                Nd: 0,
                hd: !0
            }
        }).set("fsbs", {
            value: Xp(a, function(f) {
                f = e[f.getDomId()].yc();
                var g = d.yc(),
                    h;
                return (null != (h = null == f ? void 0 : eq(f, 3)) ? h : null == g ? 0 : _.Q(g, 3)) ? 1 : 0
            }),
            options: {
                Nd: 0,
                hd: !0
            }
        })
    }, function(a, b) {
        var c = a.oa.L;
        a = a.ma;
        var d = a.ug;
        b.set("rcs", {
            value: Xp(a.X, function(e) {
                if (!d) {
                    var f = c.g.get(e);
                    f && f.fj++
                }
                return WJ(c, e)
            }),
            options: {
                Nd: 0,
                hd: !0
            }
        })
    }, function(a, b) {
        var c = a.ma;
        a = a.oa.mb;
        c = c.O.T[c.X[0].getDomId()];
        b.set("click", {
            value: !a && c.getClickUrl() ? dk(c, 7) : null
        })
    }, function(a, b, c) {
        var d = a.ma,
            e = d.X,
            f = d.O.T;
        a = a.oa;
        var g = a.Z,
            h = a.B;
        c = void 0 === c ? function(n, p) {
            return ch(n, p)
        } : c;
        a = e.map(function(n) {
            return f[n.getDomId()]
        });
        var k, l, m;
        b.set("ists", {
            value: Vp(a, pr) || null
        }).set("fas", {
            value: Xp(a, function(n) {
                return oq(or(n))
            }),
            options: {
                Nd: 0,
                hd: !0
            }
        }).set("itsi", {
            value: e.some(function(n) {
                var p;
                return !UM(n) && 5 === (null == (p = f[n.getDomId()]) ? void 0 : or(p))
            }) ? function() {
                var n = c(g, h);
                if (!n) return 1;
                var p;
                n = Math.max.apply(Math, _.ri(null != (p = _.pI(n, 604800)) ? p : []));
                return isFinite(n) ? Math.floor(Math.max((Date.now() - n) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: Vp(a, function(n) {
                return 5 === or(n) && _.E(_.LD)
            }) || null
        }).set("ifs", {
            value: null != (m = null == (k = (_.H = _.z(Object, "values").call(Object, f), _.z(_.H, "find")).call(_.H, function(n) {
                return di(n, SL, 29)
            })) ? void 0 : null == (l = _.vm(k, SL, 29)) ? void 0 : cl(l)) ? m : null
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.O.T;
        a = a.X.map(function(d) {
            return c[d.getDomId()]
        });
        b.set("rbvs", {
            value: Vp(a, function(d) {
                return 4 === or(d)
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
        c = c.ec;
        var h = g.ba,
            k = g.T,
            l = new yp;
        l.set(0, 1 !== c);
        k = k[f[0].getDomId()];
        l.set(1, !!_.Q(k, 17));
        l.set(2, Qq(f, g));
        l.set(3, _.Q(h, 27) || !1);
        l.set(4, 3 === c);
        f = Ap(l);
        e.call(b, "eri", {
            value: f
        }).set("gct", {
            value: Lq("google_preview", d)
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
        var f = Nq(a.ma.O.ba.Pa()),
            g = _.Jn(c, "__gads", e);
        a = "1" === _.Jn(c, "__gpi_opt_out", e) ? "1" : null;
        b = b.set("cookie", {
            value: g,
            options: {
                Ia: !0
            }
        }).set("cookie_enabled", {
            value: !g && WG(c, e) ? "1" : null
        });
        g = d.document;
        var h = g.domain;
        d = b.set.call(b, "cdm", {
            value: (f || Gm(d)) === g.URL ? "" : h
        });
        f = d.set;
        e = (e = _.Jn(c, "__gpi", e)) && !_.z(e, "includes").call(e, "&") ? e : null;
        f.call(d, "gpic", {
            value: e
        }).set("pdopt", {
            value: a
        })
    }, function(a, b) {
        a = a.oa.B;
        b.set("arp", {
            value: np(a) ? 1 : null
        }).set("abxe", {
            value: _.Sk(a.top) || mv(a.IntersectionObserver) ? 1 : null
        })
    }, function(a, b) {
        var c = a.oa.B;
        a = Nq(a.ma.O.ba.Pa());
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
        var f = e.mb;
        e = Bm(!0, a);
        for (var g = d.ba, h = a.document, k = d.T, l = [], m = [], n = _.y(c), p = n.next(); !p.done; p = n.next()) {
            p = p.value;
            var r = k[p.getDomId()];
            p = Ym(p, r, h, fq(g, r));
            if (_.E(hE)) r = void 0, p = null != (r = p) ? r : HP, l.push(Math.round(p.x)), m.push(Math.round(p.y));
            else {
                r = void 0;
                var v = f ? null != (r = p) ? r : HP : p;
                v && (l.push(Math.round(v.x)), m.push(Math.round(v.y)))
            }
        }
        e && (d.Fd = e);
        f = Yg(a) ? null : Bm(!1, a);
        try {
            var w = a.top;
            var x = Uu(w.document, w)
        } catch (B) {
            x = new _.Im(-12245933, -12245933)
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
            value: Wu(c, a, d),
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
                (f = d.g.get(f)) ? (null != f.Sb || (f.Sb = e === e.top ? (++d.o).toString(36) : vA()), f = f.Sb) : f = "";
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
                for (var k = 0; k < c.length; k++) f[k] = [].concat(_.ri(km(h)))
            } else a.set(_.I(h, 1), [km(h)[0]]);
        for (d = 0; d < c.length; d++)
            if (h = e[c[d].getDomId()])
                for (h = _.y(h.Pa()), k = h.next(); !k.done; k = h.next()) {
                    k = k.value;
                    var l = _.I(k, 1);
                    if ("tag_origin" === _.I(k, 1)) {
                        g = !0;
                        var m = l = void 0;
                        (l = f)[m = d] || (l[m] = []);
                        f[d].push.apply(f[d], _.ri(km(k)))
                    } else m = a.get(l) || [], k = km(k)[0], 1 === c.length ? m[0] = k : k !== m[0] && (m[d + 1] = k), a.set(l, m)
                }
        c = [];
        e = _.y(_.z(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) h = d.value, d = kn()[h], h = a.get(h), d && h && "to" !== d && (1 < h.length ? (h = h.map(function(n) {
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
        l = void 0 === l ? nA : l;
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
        d = new yp;
        "SVGElement" in k && "createElementNS" in k.document && d.set(0);
        e = $A();
        e["allow-top-navigation-by-user-activation"] && d.set(1);
        e["allow-popups-to-escape-sandbox"] && d.set(2);
        k.crypto && k.crypto.subtle && d.set(3);
        "TextDecoder" in k && "TextEncoder" in k && d.set(4);
        k = Ap(d);
        h = h.call(c, "bc", {
            value: k
        });
        k = h.set;
        a: {
            try {
                var n, p, r = null == (n = a.performance) ? void 0 : null == (p = n.getEntriesByType("navigation")) ? void 0 : p[0];
                if (null == r ? 0 : r.type) {
                    var v;
                    var w = null != (v = gH.get(r.type)) ? v : null;
                    break a
                }
            } catch (F) {}
            var x, B, C;w = null != (C = hH.get(null == (x = a.performance) ? void 0 : null == (B = x.navigation) ? void 0 : B.type)) ? C : null
        }
        w = k.call(h, "nvt", {
            value: w
        });
        n = w.set;
        p = _.Mf(tD);
        p = 0 === p ? null : mB(a, 2 === p);
        w = n.call(w, "bz", {
            value: p
        });
        n = w.set;
        _.E(lE) ? a = Ka() && jl(a) ? a.document.documentElement.lang : void 0 : a = null;
        n.call(w, "tl", {
            value: a
        })
    }, function(a, b) {
        (a = _.um(251)) && b.set("uach", {
            value: ly(a, 3)
        })
    }, function(a, b) {
        a = a.oa;
        if (!a.Ob) {
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
        c = c.mb;
        a = a.ma;
        var f = a.X;
        a = a.O;
        var g = a.ba,
            h = a.T;
        a = Mq("google_preview", d);
        var k = d.document,
            l = a ? Oq(k.URL) : k.URL;
        k = a ? Oq(k.referrer) : k.referrer;
        a = !1;
        if (c) c = Nq(g.Pa());
        else {
            var m;
            c = null != (m = Nq(h[f[0].getDomId()].Pa())) ? m : Nq(g.Pa())
        }
        if (null != c) {
            var n = l;
            Yg(d) || (k = "", a = !0)
        } else c = l;
        m = Pq(d);
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
            m = _.Sk(d.top) && (null == (p = d.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
            var v;
            p = null == (v = d.location) ? void 0 : v.ancestorOrigins;
            d = nl(d) || "";
            v = (null == p ? void 0 : p[p.length - 1]) || "";
            d = (d = m || d || v) ? a ? QA(d.match(_.PA)[3] || null) : d : null;
            n.call(b, "top", {
                value: d
            }).set("etu", {
                value: e.Kb
            })
        }
    }, function(a, b) {
        a = a.oa.context.pvsid;
        b.set("rumc", {
            value: _.E(wF) || _.Kf(El).g ? a : null
        }).set("rume", {
            value: _.E(vF) ? 1 : null
        })
    }, function(a, b) {
        b.set("vis", {
            value: _.Nr(a.oa.B.document)
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.X;
        c = c.O;
        a = a.oa.B;
        var e = Lp(d, c.T, c.ba),
            f = Op(d, e, a);
        c = f.Kl;
        f = f.Dm;
        var g = Qp(d, e, a),
            h = g.Tk;
        g = g.Il;
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
            value: VJ(a.oa.L, a.ma.X)
        })
    }, function(a, b) {
        var c = a.oa;
        a = c.Z;
        c = c.B;
        var d;
        var e = c.document.domain,
            f = null != (d = bh(a) && dh(c) ? c.document.cookie : null) ? d : "",
            g = c.history.length,
            h = c.screen,
            k = c.document.referrer;
        if (Pf()) var l = window.gaGlobal || {};
        else {
            var m = Math.round((new Date).getTime() / 1E3),
                n = c.google_analytics_domain_name;
            e = "undefined" == typeof n ? qG("auto", e) : qG(n, e);
            var p = -1 < f.indexOf("__utma=" + e + "."),
                r = -1 < f.indexOf("__utmb=" + e);
            (d = (sB() || window).gaGlobal) || (d = {}, (sB() || window).gaGlobal = d);
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
                    p = oG.appName;
                    var x = oG.version,
                        B = oG.language ? oG.language : oG.browserLanguage,
                        C = oG.platform,
                        F = oG.userAgent;
                    try {
                        w = oG.javaEnabled()
                    } catch (G) {
                        w = !1
                    }
                    w = [p, x, B, C, F, w ? 1 : 0].join("");
                    h ? w += h.width + "x" + h.height + h.colorDepth : _.t.java && _.t.java.awt && (h = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), w += h.screen.width + "x" + h.screen.height);
                    w = w + f + (k || "");
                    for (k = w.length; 0 < g;) w += g-- ^ k++;
                    d.vid = (r ^ pG(w) & 2147483647) + "." + m
                }
                d.from_cookie || (d.from_cookie = !1)
            }
            if (!d.cid) {
                b: for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), w = 0; w < f.length; w++)
                    if (k = rG.exec(f[w]) || sG.exec(f[w]) || tG.exec(f[w])) {
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
        v && !bh(a) || b.set("ga_vid", {
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
        a = a.Sm;
        var e = a.Zg,
            f = a.Te,
            g = a.ym,
            h = a.Xj;
        if (!_.E(yF) && !g) {
            lh(d.isSecureContext, d.navigator, d.document) && b.set("td", {
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
            d = a.Im;
        a = d.Lm;
        d = d.Jm;
        mh(c.isSecureContext, c.document) && (b.set("topics", {
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
        a = a.om;
        c = a.sf;
        var g = a.Mk,
            h = a.Dl;
        if (!_.E(CD)) {
            a = b.set;
            d = ch(e, d);
            e = Bl(f[0].getAdUnitPath());
            var k = _.E(zk);
            k = void 0 === k ? !1 : k;
            f = new Yz;
            var l = null != g ? g : [];
            g = k ? 1024 : 300;
            if (e && c && l && "function" === typeof c.getUserIdsAsEidBySource) {
                if ("function" === typeof c.getUserIdsAsEids) try {
                    for (var m = _.y(c.getUserIdsAsEids()), n = m.next(); !n.done; n = m.next()) {
                        var p = n.value;
                        "string" === typeof p.source && Yj(52, p.source)
                    }
                } catch (w) {
                    var r;
                    Yj(45, "", null == (r = w) ? void 0 : r.message)
                }
                m = _.y(l);
                for (n = m.next(); !n.done; n = m.next())
                    if (n = n.value, String(_.I(n, 1)) === e)
                        for (n = _.y(_.bk(n, tz, 2)), p = n.next(); !p.done; p = n.next())
                            if (p = p.value, _.Q(p, il(p, uz, 3)) && (p = _.I(p, 1), !ek(f, p))) {
                                r = null;
                                try {
                                    var v = l = k = void 0;
                                    r = null == (k = c.getUserIdsAsEidBySource(p)) ? void 0 : null == (l = k.uids) ? void 0 : null == (v = l[0]) ? void 0 : v.id
                                } catch (w) {
                                    k = void 0, Yj(45, p, null == (k = w) ? void 0 : k.message)
                                }
                                r && (r.length > g ? (k = {}, Yj(12, p, null, (k.sl = String(r.length), k.fp = "1", k))) : (k = Tz(p), l = li(k, 2, r), k = f, l = Th(l, 11, !0), kk(k, 2, ck, l), k = {}, Yj(19, p, null, (k.fp = "1", k.hs = r ? "1" : "0", k))))
                            }
            }
            lk(f, d, e, h);
            _.bk(f, ck, 2).length ? (c = {}, Yj(50, "", null, (c.ns = String(_.bk(f, ck, 2).length), c)), c = Jb(f.g(), 3)) : c = null;
            a.call(b, "a3p", {
                value: c
            })
        }
    }, function(a, b) {
        var c = a.pb.ze,
            d = a.ma.X;
        a = function() {
            return c ? d.map(function(e) {
                return c.get(e)
            }) : []
        }();
        b.set("cbidsp", {
            value: Xp(a, function(e) {
                return Jb(e.g(), 3)
            }),
            options: _.z(Object, "assign").call(Object, {}, {
                Ta: "~"
            }, {
                hd: !0
            })
        })
    }, function(a, b) {
        var c = [];
        a = _.y(_.bk(Jy(a.ma.O.ba.gi(), wt, 2), Dr, 1));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            ni(e, 2, 2).length && (d = null != Ci(e, 3) ? _.My(e, 3) : _.gg(e, 1, 0) + 2, e = ni(e, 2, 2).join("|"), c.push(d + "=" + e))
        }
        b.set("pps", {
            value: c,
            options: {
                Ta: "~"
            }
        })
    }, function(a, b) {
        b.set("scar", {
            value: a.Nl.bl
        })
    }, function(a, b) {
        a = a.oa.B;
        a = !(!a.isSecureContext || !kh("attribution-reporting", a.document));
        !_.E(tF) && a && b.set("nt", {
            value: 1
        })
    }, function(a, b) {
        if (a = a.Xl.Wl) a = ly(cl(a), 3), b.set("psd", {
            value: a
        })
    }, function(a, b) {
        a = _.Zf(a.oa.B);
        var c = Rq;
        0 < a && c >= a && b.set("dlt", {
            value: a
        }).set("idt", {
            value: c - a
        })
    }, function(a, b) {
        a = a.ma.O.ba;
        b.set("ppid", {
            value: _.Bi(a, 16) ? _.I(a, 16) : null,
            options: {
                Ia: !0
            }
        })
    }, function(a, b) {
        var c = b.set;
        (a = dk(a.ma.O.ba, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + ly('role:1 producer:12 loc:"' + a + '"')) : a = "";
        c.call(b, "uule", {
            value: a
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.O.ba;
        b.set("prev_scp", {
            value: es(a.X, a.O),
            options: {
                hd: !0,
                Ta: "|"
            }
        }).set("cust_params", {
            value: gs(c),
            options: {
                Ta: "&"
            }
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.O;
        a = a.oa;
        var e = a.L,
            f = a.mb;
        b.set("adks", {
            value: c.X.map(function(g) {
                if (f) {
                    var h = d.T[g.getDomId()];
                    h = ip(h);
                    if (g = e.g.get(g)) g.Hd = h;
                    return h
                }
                h = d.ba;
                var k = d.T[g.getDomId()],
                    l;
                if (!(l = Lu(e, g))) {
                    h = ip(k, _.Q(h, 6) || _.Q(k, 17) ? null : Tm(g));
                    if (g = e.g.get(g)) g.Hd = h;
                    l = h
                }
                return l
            })
        })
    }, function(a, b) {
        var c = b.set;
        a = a.oa.B;
        var d = lB(a);
        a: {
            var e = a.google_ad_width || a.google_ad_width;
            var f = a.google_ad_height || a.google_ad_height;
            if (Yg(a)) e = !1;
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
        f = a.top == a ? 0 : _.Sk(a.top) ? 1 : 2;
        g = 4;
        d || 1 !== f ? d || 2 !== f ? d && 1 === f ? g = 7 : d && 2 === f && (g = 8) : g = 6 : g = 5;
        e && (g |= 16);
        d = String(g);
        if (a !== a.top)
            for (e = a; e && e !== e.top && _.Sk(e) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; e = e.parent);
        c.call(b, "frm", {
            value: d || null
        })
    }, function(a, b) {
        var c = b.set;
        a = Jy(a.ma.O.ba, yt, 36);
        a = ve(a, 1, _.Vc, 2);
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
        a = a.qk.nd;
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
        _.E(wD) && b.set("no_cau_info", {
            value: a.has(d) ? "1" : null
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.O.T;
        a = a.oa.B;
        var e = [],
            f = !1;
        c = _.y(c.X);
        for (var g = c.next(); !g.done; g = c.next()) g = or(d[g.value.getDomId()]), (_.H = [8, 9], _.z(_.H, "includes")).call(_.H, g) ? (f = 9 === g ? "right" : "left", e.push(_.Cj(a).sideRailPlasParam.get(f)), f = !0) : e.push("");
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
        a = a.Kk.Lk;
        if (_.E(BD)) {
            var g;
            (g = !a) || (g = !He(a, 1, yd).get(e));
            a = g;
            var h;
            f = !(null == (h = ev(f)) || !_.Q(h, 9));
            d = new BG(d, {
                cm: a,
                bm: f
            });
            d = _.Q(c, 8) || (d.options.bm || !bh(c)) && d.options.cm ? void 0 : (new eh(d.g.document)).get("__eoi") || "";
            d && b.set("eo_id_str", {
                value: d
            })
        }
    }, function(a, b) {
        a = a.ma;
        var c = a.X,
            d = a.O.T;
        _.E(mD) && b.set("eov", {
            value: Vp(c, function(e) {
                var f, g;
                return !!(null == (f = d[e.getDomId()]) ? 0 : null == (g = _.vm(f, TL, 31)) ? 0 : _.Q(g, 1))
            })
        })
    }]);
    var IP = function(a, b, c) {
        Y.call(this, a, 798);
        this.output = W(this);
        this.j = PH(this, b);
        this.o = X(this, c)
    };
    _.T(IP, Y);
    IP.prototype.g = function() {
        var a = this,
            b = new _.u.Map;
        if (this.j.value) {
            var c = this.j.value,
                d = c.oa.mb,
                e = c.pb.ze;
            c = _.y(c.ma.X);
            for (var f = c.next(); !f.done; f = c.next()) {
                f = f.value;
                var g = void 0,
                    h = null == (g = e) ? void 0 : g.get(f);
                b.set(f, d ? JP(this, f, h) : function() {
                    return a.o.value
                })
            }
        }
        this.output.G(b)
    };
    var JP = function(a, b, c) {
        return Ai(function() {
            var d = _.z(Object, "assign").call(Object, {}, a.j.value);
            d.ma.ug = !0;
            d.ma.X = [b];
            c && (d.pb.ze = new _.u.Map, d.pb.ze.set(b, c));
            return Kq(dv(d)).url
        })
    };
    var KP = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 810);
        this.o = b;
        this.mb = c;
        this.O = d;
        this.R = e;
        this.B = f;
        this.Z = g;
        this.j = W(this)
    };
    _.T(KP, Y);
    KP.prototype.g = function() {
        var a = this,
            b = this.o;
        !this.mb && 1 < this.o.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.M) return !1;
            var d = a.O.T[c.getDomId()],
                e;
            if (e = !(uq(or(d)) && (_.H = Of(WD), _.z(_.H, "includes")).call(_.H, String(or(d))))) e = a.R, Ji(a.B) && 4 === or(d) ? (O(e, IK("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1, e = !e;
            if (e) {
                e = a.context;
                var f = a.R,
                    g = a.B,
                    h = a.Z;
                d = or(d);
                5 !== d ? c = !1 : (e.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, e, {
                    U: 1
                })), (g = nq(g, !UM(c), h)) ? (hq(f, g, d, c.getAdUnitPath()), e.V.log(578856259, jj, _.z(Object, "assign").call(Object, {}, e, {
                    El: g
                })), e.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, e, {
                    U: 2
                }))) : e.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, e, {
                    U: 3
                })), c = !!g);
                e = !c
            }
            return e
        });
        30 < b.length && (O(this.R, HK("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.j.G(b)
    };
    var LP = function(a, b, c) {
        Y.call(this, a, 919);
        this.j = b;
        this.Z = c;
        this.output = W(this)
    };
    _.T(LP, Y);
    LP.prototype.g = function() {
        var a, b = !(null == (a = this.j) ? 0 : _.Q(a, 9)) && !!bh(this.Z);
        this.output.G(b)
    };
    var MP = function(a, b, c, d, e, f) {
        Y.call(this, a, 928);
        this.requestId = b;
        this.C = f;
        this.output = OH(this);
        this.o = X(this, c);
        e && (this.j = X(this, e));
        RH(this, d)
    };
    _.T(MP, Y);
    var NP = function(a) {
        return a.j ? a.C.split(",").some(function(b) {
            var c;
            return null == (c = a.j) ? void 0 : c.value.has(b)
        }) : !1
    };
    MP.prototype.g = function() {
        var a = this.context,
            b = this.requestId,
            c = this.o.value.length,
            d = NP(this);
        if (a.Qc) {
            var e = a.Ra,
                f = e.Pc;
            a = rl(a);
            var g = new LC;
            b = _.aj(g, 2, b);
            c = _.vl(b, 1, c);
            d = _.ul(c, 3, d);
            d = _.hj(a, 7, wl, d);
            f.call(e, d)
        }
        this.output.notify()
    };
    var iv = new _.u.Map;
    var OP = function(a, b, c, d) {
        Y.call(this, a, 867);
        this.Aa = b;
        this.O = c;
        this.output = OH(this);
        this.j = X(this, d)
    };
    _.T(OP, Y);
    OP.prototype.g = function() {
        for (var a = _.y(this.j.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = xm(this.O.T[b.getDomId()], 20);
            Ys(b, IJ, 808, {
                uk: c,
                lm: d
            });
            Ys(this.Aa, "slotRequested", 705, new uN(b, "publisher_ads"))
        }
        this.output.notify()
    };
    var PP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R, L, Z, qa, wa, aa, ia, wb, Ua, db, Ab, Ra, Ib) {
        Y.call(this, a, 785, _.Mf(kE));
        this.mb = b;
        this.L = c;
        this.Ea = d;
        this.O = e;
        this.ec = f;
        this.networkCode = g;
        this.Ed = h;
        this.Dd = k;
        this.kg = l;
        this.timer = m;
        this.Z = n;
        this.isSecureContext = p;
        this.Ob = r;
        this.B = v;
        this.He = w;
        this.j = W(this);
        this.o = W(this);
        this.P = W(this);
        RH(this, R);
        this.Ma = QH(this, x);
        this.W = QH(this, B);
        this.H = X(this, C);
        G && (this.C = _.E(nE) ? new HH(G.Cd) : QH(this, G.Cd), G.se && (this.Ib = PH(this, G.se)));
        P && (this.K = _.E(nE) ? new HH(P.Vc) : QH(this, P.Vc));
        RH(this, R);
        L && (this.jb = X(this, L));
        Z && (this.ga = new HH(Z));
        qa && (this.bb = PH(this, qa));
        wa && (this.ra = X(this, wa));
        aa && RH(this, aa);
        ia && (this.xa = X(this, ia));
        F && (this.ha = PH(this, F));
        wb && (this.nb = PH(this, wb.Vg));
        Ua && (this.xc = X(this, Ua));
        db && (this.ua = PH(this, db));
        Ab && (this.ka = PH(this, Ab));
        Ra && (this.ob = X(this, Ra));
        Ib && (this.uc = QH(this, Ib))
    };
    _.T(PP, Y);
    PP.prototype.g = function() {
        if (this.H.value.length) {
            var a = null;
            if (this.C) {
                var b = this.C.value;
                a = b ? b : this.K && !this.K.Oc() ? 9 : this.C.Oc() ? null : 1
            }
            this.W.value && (this.L.Kb = this.W.value);
            var c, d, e, f, g, h, k, l, m, n, p, r, v, w, x;
            b = {
                oa: {
                    B: this.B,
                    context: this.context,
                    L: this.L,
                    Ea: this.Ea,
                    Z: this.Z,
                    mb: this.mb,
                    kg: this.kg,
                    isSecureContext: this.isSecureContext,
                    Ob: this.Ob
                },
                ma: {
                    networkCode: this.networkCode,
                    X: this.H.value,
                    O: this.O,
                    ec: this.ec,
                    ug: !1
                },
                Wm: {
                    Ed: this.Ed,
                    Dd: this.Dd
                },
                Nl: {
                    bl: null != (w = this.Ma.value) ? w : "0"
                },
                pb: {
                    ze: null == (c = this.ha) ? void 0 : c.value
                },
                Im: {
                    Lm: a,
                    Jm: null == (d = this.Ib) ? void 0 : d.value
                },
                om: {
                    Dl: null != (x = null == (e = this.jb) ? void 0 : e.value) ? x : void 0,
                    sf: null == (f = this.ga) ? void 0 : f.value,
                    Mk: null == (g = this.ra) ? void 0 : g.value
                },
                Wg: {
                    el: null == (h = this.bb) ? void 0 : h.value,
                    Xk: null == (k = this.xa) ? void 0 : k.value
                },
                Xl: {
                    Wl: null == (l = this.nb) ? void 0 : l.value
                },
                Sm: {
                    Zg: null == (m = this.xc) ? void 0 : m.value,
                    Te: null == (n = this.ua) ? void 0 : n.value,
                    ym: null == (p = this.ob) ? void 0 : p.value,
                    Xj: null == (r = this.uc) ? void 0 : r.value
                },
                Kk: {
                    Lk: null == (v = this.ka) ? void 0 : v.value
                },
                qk: {
                    nd: this.He.nd
                }
            };
            this.o.G(b);
            c = Kq(dv(b));
            d = c.url;
            rC(this.timer, (9).toString(), 9, c.Eh);
            this.j.G(d);
            this.P.G($u(b) ? new ax(Zw, "https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : new ax(Zw, "https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.j.G(""), this.o.ca()
    };
    var QP = function(a, b, c, d, e, f) {
        Y.call(this, a, 878);
        this.j = b;
        this.aa = c;
        this.O = d;
        this.B = e;
        this.output = OH(this);
        f && RH(this, f)
    };
    _.T(QP, Y);
    QP.prototype.g = function() {
        for (var a = _.y(this.j), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Tm(b, this.aa);
            if (!Sm(b, this.aa) && c) {
                a: {
                    var d = c;
                    var e = this.O.T[b.getDomId()],
                        f = 0,
                        g = 0;e = _.y(Cm(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.y(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Jp(Um(d, this.B)) || !d.parentElement || Jp(Um(d.parentElement, this.B))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.O;f = g.ba;g = g.T[b.getDomId()];Ip(c, $m(b), fq(f, g), d)
            }
        }
        this.output.notify()
    };
    var RP = function(a, b, c, d, e, f, g, h) {
            this.D = a;
            this.J = b;
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
        TP = function(a, b) {
            if (b)
                if (1 !== a.g && 2 !== a.g) SP(a, new NG("state err: (" + ([a.g, a.A.length].join() + ")")));
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
                                    tb: hB(c)
                                }, f.X, f.Z, f.C, f.I, null != (g = f.o) ? g : void 0), f.j = ""
                            } catch (h) {}
                            f.g = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.A = b.substr(c)
                }
        },
        SP = function(a, b) {
            a.g = 4;
            try {
                a.J(b)
            } catch (c) {}
        },
        UP = function(a) {
            1 !== a.g || a.A ? SP(a, new NG("state err (" + ([a.g, a.A.length].join() + ")"))) : (a.g = 3, a.M(a.l, a.X, a.Z))
        };
    var VP = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Y.call(this, a, 788);
        this.ka = b;
        this.ha = c;
        this.ga = d;
        this.Z = e;
        this.L = f;
        this.O = g;
        this.H = OH(this);
        this.C = W(this);
        this.o = W(this);
        this.W = 0;
        this.P = !1;
        this.j = null != p ? p : new XMLHttpRequest;
        this.K = X(this, h);
        k && (this.ua = PH(this, k));
        this.xa = X(this, l);
        RH(this, m);
        this.ra = X(this, n)
    };
    _.T(VP, Y);
    VP.prototype.g = function() {
        var a = this,
            b = this.xa.value;
        if (b) {
            var c, d = new RP(this.ka, this.ha, this.ga, this.K.value, this.Z, null == (c = this.ua) ? void 0 : c.value);
            this.j.open("GET", b);
            this.j.withCredentials = this.ra.value;
            this.j.onreadystatechange = function() {
                WP(a, d, !1)
            };
            this.j.onload = function() {
                WP(a, d, !0);
                a.C.G(a.j.status);
                if (300 <= a.j.status) {
                    var e;
                    a.o.G(null != (e = a.j.responseText) ? e : "")
                } else a.o.G("")
            };
            this.j.onerror = function() {
                SP(d, new OG("XHR error"));
                a.K.value.forEach(function(e) {
                    at(e, a.L, a.O, "")
                });
                a.C.G(0);
                a.o.G("")
            };
            this.j.send()
        }
        this.H.notify()
    };
    var WP = function(a, b, c) {
        try {
            if (3 === a.j.readyState || 4 === a.j.readyState)
                if (300 <= a.j.status) a.P || (SP(b, new OG("xhr_err-" + a.j.status)), a.P = !0);
                else {
                    var d = a.j.responseText.substr(a.W);
                    d && TP(b, d);
                    a.W = a.j.responseText.length;
                    c && 4 === a.j.readyState && UP(b)
                }
        } catch (e) {
            SP(b, e)
        }
    };
    var XP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Y.call(this, a, 1078);
        this.W = b;
        this.P = c;
        this.K = d;
        this.Z = e;
        this.L = f;
        this.O = g;
        this.C = OH(this);
        this.o = W(this);
        this.j = W(this);
        this.H = X(this, h);
        k && (this.ha = PH(this, k));
        l && (this.ka = X(this, l));
        this.ra = X(this, m);
        RH(this, n);
        this.ga = X(this, p);
        if (null == r ? 0 : r.re) this.xa = PH(this, r.re);
        v && (this.ua = X(this, v));
        w && (this.Ma = PH(this, w))
    };
    _.T(XP, Y);
    XP.prototype.g = function() {
        var a = this,
            b = this.ra.value;
        if (b) {
            var c, d, e, f = new RP(this.W, this.P, this.K, this.H.value, this.Z, null == (c = this.ha) ? void 0 : c.value, null == (d = this.ka) ? void 0 : d.value, null == (e = this.Ma) ? void 0 : e.value);
            c = this.ga.value ? "include" : "omit";
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
                YP(a, k, f)
            }).catch(function(k) {
                ZP(a, k, f);
                a.H.value.forEach(function(l) {
                    at(l, a.L, a.O, "")
                })
            })
        }
        this.C.notify()
    };
    var YP = function(a, b, c) {
            a.o.G(b.status);
            if (300 <= b.status) a.j.La(b.text()), SP(c, new OG("fetch_status-" + b.status));
            else {
                a.j.G("");
                var d, e = null == (d = b.body) ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
                e ? e.read().then(function(f) {
                    $P(a, f, e, c)
                }).catch(function(f) {
                    ZP(a, f, c)
                }) : SP(c, new OG("failed_reader"))
            }
        },
        $P = function(a, b, c, d) {
            var e = b.value;
            b.done ? UP(d) : (TP(d, e), c.read().then(function(f) {
                $P(a, f, c, d)
            }).catch(function(f) {
                ZP(a, f, d)
            }))
        },
        ZP = function(a, b, c) {
            SP(c, new OG("fetch error: " + (b instanceof Error ? b.message : void 0)));
            a.o.G(0);
            a.j.G("")
        };
    var aQ = function(a, b, c, d, e) {
        Y.call(this, a, 918);
        this.O = b;
        this.timer = c;
        this.output = OH(this);
        this.j = X(this, e);
        RH(this, d)
    };
    _.T(aQ, Y);
    aQ.prototype.g = function() {
        var a = this.j.value;
        a.length && Ws(this.timer, "3", Xs(this.O.T[a[0].getDomId()], 20));
        this.output.notify()
    };
    var bQ = function(a, b, c, d, e) {
        Y.call(this, a, 803);
        this.j = b;
        this.slotId = c;
        this.Ea = d;
        this.Z = e;
        this.output = W(this)
    };
    _.T(bQ, Y);
    bQ.prototype.g = function() {
        var a = JSON.parse(this.j),
            b = mp(a, Nx);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.j);
        a = Ue(kA, a);
        b = ve(a, 27, Xc, 2);
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.Kf(hh).g(c);
        Ln(4, this.context, this.Ea, this.Z);
        Ys(this.slotId, HJ, 800, a);
        this.output.G(a)
    };
    var cQ = function(a, b, c, d) {
        Y.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.j = X(this, d)
    };
    _.T(cQ, Y);
    cQ.prototype.g = function() {
        var a = this;
        Gn(this.j.value, 11) && (_.TJ(this.L, this.slotId), QJ(this.L, this.slotId, function() {
            _.UJ(a.L, a.slotId)
        }))
    };
    var dQ = function(a, b, c, d) {
        ok.call(this);
        this.context = a;
        this.slotId = b;
        b = d.L;
        var e = d.Z,
            f = d.Za,
            g = d.Ea;
        a = d.Sa;
        d = d.R;
        c = new bQ(this.context, c, this.slotId, g, e);
        J(this, c);
        e = new eN(this.context, e, g, c.output);
        J(this, e);
        f = new gN(this.context, this.slotId, f, c.output);
        J(this, f);
        b = new cQ(this.context, this.slotId, b, c.output);
        J(this, b);
        a = WH(this, 1229, Dv, {
            Pg: c.output
        }, {
            Sa: a
        }, {
            output: void 0
        });
        WH(this, 1220, Gv, {
            Pg: c.output
        }, {
            R: d,
            context: this.context
        }, {});
        this.g = {
            Cl: a.output
        }
    };
    _.T(dQ, ok);
    var eQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R, L) {
        Y.call(this, a, 973);
        this.ra = b;
        this.R = c;
        this.K = d;
        this.W = e;
        this.O = f;
        this.L = g;
        this.Ea = h;
        this.ha = k;
        this.P = l;
        this.H = m;
        this.ke = n;
        this.ka = p;
        this.networkCode = r;
        this.isSecureContext = v;
        this.Ob = w;
        this.Za = x;
        this.B = B;
        this.aa = C;
        this.j = R;
        this.ua = L;
        this.o = [];
        this.C = PH(this, F);
        this.ga = X(this, G);
        this.xa = X(this, P);
        this.j.Jb && RH(this, this.j.Jb.Jh)
    };
    _.T(eQ, Y);
    eQ.prototype.g = function() {
        var a = this,
            b = new ok;
        _.S(this, b);
        var c = this.ga.value,
            d = ev(this.O.ba);
        this.C.value && this.ua.G(this.C.value);
        var e = Qr(this.context, this.aa);
        e && _.S(b, e.Ka);
        var f = Xq(this.context, _.vm(this.O.ba, lu, 5), this.L, this.K, null == e ? void 0 : e.Ul.de);
        e = f.yg;
        (f = f.xl) && _.S(b, f);
        f = new QP(this.context, this.K, this.aa, this.O, this.B, e);
        J(b, f);
        var g = !!_.Q(this.O.ba, 6);
        e = new KP(this.context, this.K, g, this.O, this.R, this.B, c);
        J(b, e);
        var h, k = new ZL(this.context, d, c, (null == (h = _.vm(this.O.ba, yt, 36)) ? void 0 : ve(h, 1, _.Vc, 2)) || []);
        J(b, k);
        h = this.j;
        var l = h.Ol,
            m = h.Yl,
            n = h.Nm;
        h = h.He;
        var p, r = null != (p = this.j.Jb) ? p : {},
            v = r.Md,
            w = r.xd,
            x = r.Cb,
            B = r.Mb,
            C = r.cd,
            F = r.ei;
        p = r.kc;
        var G = r.lg,
            P = r.Oh;
        r = r.Lb;
        if (_.E(bE)) {
            var R = new kO(this.context, P);
            var L = new lO(this.context, P);
            J(b, R);
            J(b, L);
            var Z = R.j;
            R = L.j;
            L = L.o
        }
        if (G = et(this.context, n, this.O.T, c, this.C.value, e.j, k.output, G, R)) {
            var qa = G.Pm;
            G = G.Om;
            var wa = qa.Rg;
            qa = qa.sg;
            _.S(b, G)
        }
        if (L = xs(this.context, n, this.B.navigator, k.output, L)) {
            var aa = L.vj;
            L = L.Qm;
            var ia = aa.dj;
            aa = aa.ti;
            L && _.S(b, L)
        }
        _.E(uE) && (aa = W(this), aa.G(n.nh));
        var wb = new BO(this.context, this.B);
        J(b, wb);
        G = (null != v ? v : {}).bc;
        var Ua;
        L = null == (Ua = this.j.Jb) ? void 0 : Ua.te;
        Ua = new gO(this.context, l.Pl);
        J(b, Ua);
        if (l = bq(this.context, this.R, this.O.T, this.networkCode, e.j, v, x)) {
            var db = l.ak;
            _.S(this, l.Ka)
        }
        if (qa = Sr(this.context, m, qa, this.O.T, e.j, P)) {
            var Ab = qa.vf;
            _.S(this, qa.Ka)
        }
        if (Z = ks(this.context, this.C.value, L, k.output, Z)) {
            var Ra = Z.Km;
            _.S(this, Z.Ka);
            this.o.push(Ra.Cd.promise)
        }
        if (n.Uj) {
            _.E(Qt);
            var Ib = new fP(this.context, this.B.navigator, e.j);
            J(b, Ib);
            Ib = Ib.output
        }
        Z = window.isSecureContext && _.E(qF) ? "wbn" : "ldjh";
        var jd = ++this.L.I;
        qa = "wbn" === Z ? sr().toLowerCase() : void 0;
        k = this.ke;
        var cc, $b;
        db = new PP(this.context, g, this.L, this.Ea, this.O, k.ec, this.networkCode, k.Ed, k.Dd, this.xa.value, _.Kf(El), c, this.isSecureContext, this.Ob, this.B, h, Ua.output, wb.output, e.j, null == (cc = db) ? void 0 : cc.kh, Ra, L, f.output, null == w ? void 0 : w.Jg, G, x, B, C, F, Ab, ia, null == ($b = this.j.Jb) ? void 0 : $b.lg, r, R, Ib);
        J(b, db);
        Ab = new aQ(this.context, this.O, _.Kf(El), db.j, e.j);
        J(b, Ab);
        this.context.um && WH(b, 1231, kv, {
            Bo: db.j,
            X: e.j
        }, {
            Ba: this.context.Ra
        }, {});
        d = new LP(this.context, d, c);
        J(b, d);
        cc = Cl(this.context, 646, function(Fc, jc, dc, Id, Pc, nf, we, Jd) {
            pv(function() {
                return void fQ(a, Pc, Fc, jc, dc, Id, nf, we, Jd)
            }, Fc, a.B)
        });
        $b = Cl(this.context, 647, function(Fc, jc, dc) {
            pv(function() {
                return void gQ(a, jd, dc, jc, Fc)
            }, -1, a.B)
        });
        "ldjh" === Z ? (R = hQ(this, 289, "strm_err"), nv() ? (Ra = new XP(this.context, cc, R, $b, c, this.L, this.O, e.j, wa, ia, db.j, Ab.output, d.output, Ra, aa, Ib), J(b, Ra), wa = Ra.C, ia = Ra.o, Ra = Ra.j) : (Ra = new VP(this.context, cc, R, $b, c, this.L, this.O, e.j, wa, db.j, Ab.output, d.output), J(b, Ra), wa = Ra.H, ia = Ra.C, Ra = Ra.o), ia = WH(b, 1221, gv, {
            status: ia,
            responseText: Ra
        }, {
            R: this.R
        }, {}).finished, this.o.push(ia.promise)) : (ia = new jP(this.context, cc, hQ(this, 1042, "Unknown web bundle error."), $b, Z, qa, c, this.aa, e.j, wa, db.j, db.P, Ab.output, d.output), iu(b, ia), wa = new Or, IH(wa, xk(ia).then(function() {})));
        p = new MP(this.context, jd, e.j, wa, p, this.networkCode);
        J(b, p);
        ia = new IP(this.context, db.o, db.j);
        J(b, ia);
        ia = new OP(this.context, this.H.Aa, this.O, ia.output);
        J(b, ia);
        ia = new sO(this.context, this.ha, this.B, ia.output);
        J(b, ia);
        ia = new ON(this.context, this.O, this.P, e.j, ia.output);
        J(b, ia);
        e = new YM(this.context, this.L, this.O, this.aa, e.j, ia.output);
        J(b, e);
        ia = new AO(this.context, Xj(this.B), this.B, c, wa);
        J(b, ia);
        1 === jd && (c = new QM(this.context, this.B, c, L, wa), J(b, c), this.o.push(c.output.promise));
        this.o.push(p.output.promise, e.output.promise, ia.output.promise);
        xk(b)
    };
    var fQ = function(a, b, c, d, e, f, g, h, k) {
            var l, m, n, p;
            return _.rb(function(r) {
                l = f[c];
                if (!l) return Gl(a.context, 646, Error("missing slot")), r.return();
                0 === c && (m = Xs(a.O.T[l.getDomId()], 20), Ws(_.Kf(El), "4", m));
                return r.yield(iQ(a, l, d, e, b, null == (n = g) ? void 0 : n[l.getId()], h, null == (p = k) ? void 0 : p.get(l)), 0)
            })
        },
        gQ = function(a, b, c, d, e) {
            var f, g, h;
            return _.rb(function(k) {
                if (1 == k.g) {
                    var l = a.context,
                        m = e + 1,
                        n = d.length;
                    if (l.Qc) {
                        var p = l.Ra,
                            r = p.Pc;
                        l = rl(l);
                        var v = new MC;
                        v = _.aj(v, 3, b);
                        m = _.vl(v, 1, m);
                        n = _.vl(m, 2, n);
                        n = _.hj(l, 8, wl, n);
                        r.call(p, n)
                    }
                    f = e + 1
                }
                if (3 != k.g) {
                    if (!(f < d.length)) return k.yield(jQ(a), 0);
                    if (!d[f]) {
                        k.g = 3;
                        return
                    }
                    p = new kA;
                    p = Th(p, 8, !0);
                    g = cl(p);
                    h = '{"empty":' + g + "}";
                    return k.yield(fQ(a, c, f, h, {
                        kind: 0,
                        tb: ""
                    }, d), 3)
                }++f;
                k.g = 2
            })
        },
        iQ = function(a, b, c, d, e, f, g, h) {
            var k, l, m, n, p, r, v, w, x, B, C, F, G, P;
            return _.rb(function(R) {
                if (1 == R.g) return k = {
                    Z: e,
                    Za: a.Za,
                    L: a.L,
                    Ea: a.Ea,
                    Sa: d,
                    R: a.R
                }, l = new dQ(a.context, b, c, k), R.yield(xk(l), 2);
                m = R.A;
                p = n = m.Cl;
                r = p.isEmpty;
                v = p.Na;
                w = p.na;
                x = p.Xm;
                B = p.Gb;
                C = p.gg;
                dq(a.context, null == (F = a.j.Jb) ? void 0 : F.Md, x, B, v);
                _.E(BD) && Dq(a.context, a.Ea, C);
                if (b.M) return R.return();
                G = !!w;
                _.E(sE) || G && xp("gpt_td_init", function(L) {
                    Xo(L, a.context);
                    Yo(L, "noFill", r ? "1" : "0");
                    Yo(L, "publisher_tag", "gpt");
                    var Z = _.vm(w, gA, 5);
                    Z && (Yo(L, "winner_qid", Z.getEscapedQemQueryId()), Yo(L, "xfpQid", _.I(Z, 6)))
                }, 1);
                (P = Mq("google_norender")) || r && !G ? at(b, a.L, a.O, v) : FP(a.ka, a.ra, a.R, b, r || P, G, a.L, a.O, a.Za, n, e, f, g, a.H.Aa, a.P, a.j, h);
                l.za();
                R.g = 0
            })
        },
        hQ = function(a, b, c) {
            return Cl(a.context, b, function(d) {
                d = d instanceof Error ? d : Error();
                d.message = d.message || c;
                Gl(a.context, b, d);
                jQ(a)
            })
        },
        jQ = function(a) {
            return _.rb(function(b) {
                if (1 == b.g) {
                    var c = a.L,
                        d = a.W,
                        e = c.A.get(d) - 1;
                    0 === e ? c.A.delete(d) : c.A.set(d, e);
                    return e ? b.return() : b.yield(_.u.Promise.all(a.o), 2)
                }
                Ys(a.H.ki, LJ, 965, a.W);
                b.g = 0
            })
        };
    var kQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R) {
        Y.call(this, a, 885);
        this.ga = b;
        this.R = c;
        this.O = d;
        this.L = e;
        this.Ea = f;
        this.ke = g;
        this.P = h;
        this.H = k;
        this.j = l;
        this.o = m;
        this.W = n;
        this.isSecureContext = p;
        this.fb = r;
        this.K = v;
        this.Ob = w;
        this.Za = x;
        this.B = B;
        this.aa = C;
        this.C = P;
        this.ha = R;
        this.ka = X(this, F);
        RH(this, G)
    };
    _.T(kQ, Y);
    kQ.prototype.g = function() {
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
                c = new ok;
                _.S(this, c);
                var f = Jq(this.context, this.K, null == (e = this.C.Jb) ? void 0 : e.Qi);
                e = f.Fc;
                var g = f.og;
                _.S(c, f.Ka);
                e = No(this.context, this.R, this.L, this.B, e, g, 3, ev(this.O.ba));
                f = e.kb;
                _.S(c, e.Ka);
                e = new mO(this.context, this.B, f);
                J(c, e);
                e = new dN(this.context, this.B, f);
                J(c, e);
                e = new fu(this.context, this.B, f);
                J(c, e);
                g = new GP(this.context, this.Ea, this.fb, f);
                J(c, g);
                b = new eQ(this.context, this.ga, this.R, d, this.j, this.O, this.L, this.Ea, this.P, this.H, this.o, this.ke, this.W, b, this.isSecureContext, this.Ob, this.Za, this.B, this.aa, e.output, f, g.o, this.C, this.ha);
                J(c, b);
                xk(c)
            }
        } else Ys(this.o.ki, LJ, 965, this.j)
    };
    var lQ = new _.u.Map,
        mQ = function(a, b, c, d) {
            d = void 0 === d ? lQ : d;
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
    _.T(mQ, Y);
    mQ.prototype.g = function() {};
    mQ.prototype.C = function(a) {
        var b = this,
            c, d;
        return _.rb(function(e) {
            if (1 == e.g) {
                if (a.M) return e.return();
                b.j.has(a) || (b.j.set(a, _.E(eE) ? Iv(a) : Hv(a)), _.kp(a, function() {
                    return void b.j.delete(a)
                }));
                c = b.j.get(a);
                return e.yield(c(), 2)
            }
            d = e.A;
            if (b.M) return e.return();
            if (d) return e.return(a);
            O(b.R, QK(a.getAdUnitPath()));
            return e.return()
        })
    };
    var nQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B) {
        _.V.call(this);
        var C = this;
        this.context = a;
        this.C = b;
        this.R = c;
        this.L = d;
        this.Ea = e;
        this.Aa = f;
        this.J = g;
        this.j = h;
        this.o = k;
        this.isSecureContext = l;
        this.fb = m;
        this.I = n;
        this.Ob = p;
        this.Za = r;
        this.aa = v;
        this.B = w;
        this.D = x;
        this.H = B;
        this.g = new _.u.Map;
        this.l = new DJ(a);
        _.S(this, this.l);
        this.l.listen(LJ, function(F) {
            F = F.detail;
            var G = C.g.get(F);
            G && (C.g.delete(F), G.za())
        })
    };
    _.T(nQ, _.V);
    var oQ = function(a, b, c, d) {
        var e = ++a.L.D;
        a.g.has(e);
        var f = new ok;
        a.g.set(e, f);
        b = new mQ(a.context, a.R, b);
        J(f, b);
        var g = WH(f, 845, Mv, {
            X: b.o
        }, {
            T: d.T
        }, {
            oj: void 0,
            yj: void 0
        });
        b = g.yj;
        g = WH(f, 847, Kv, {
            X: g.oj
        }, {
            L: a.L,
            mb: !!_.Q(d.ba, 6),
            rl: Mq("google_nofetch")
        }, {
            ie: void 0
        }).ie;
        b = WH(f, 864, Bq, {
            X: b
        }, {
            L: a.L,
            O: d,
            aa: document
        }, {}).finished;
        a = new kQ(a.context, a.C, a.R, d, a.L, a.Ea, c, a.J, a.j, e, {
            ki: a.l,
            Aa: a.Aa
        }, a.o, a.isSecureContext, a.fb, a.I, a.Ob, a.Za, a.B, a.aa, g, b, a.D, a.H);
        J(f, a);
        xk(f)
    };
    var pQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        lP.call(this, a, c, h);
        this.context = a;
        this.L = d;
        this.j = new _.u.Set;
        this.I = {};
        this.C = new EP(a, d);
        this.H = new nQ(a, b, c, d, new _.VG(window), this.l, m, e, this.C, f, g, k, l, n, document, window, p, r);
        _.S(this, this.H)
    };
    _.T(pQ, lP);
    pQ.prototype.getName = function() {
        return "publisher_ads"
    };
    pQ.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.ja(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        st(this);
        var h = bo(c, this.context, this.R, a, b, f),
            k = h.slotId;
        h = h.Fa;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            lt(this, null != (l = g) ? l : k.getDomId(), c)
        } else O(this.R, Wl("PubAdsService.display", [a, b, d]))
    };
    var lt = function(a, b, c) {
        var d = qQ(b, c);
        c = d.slotId;
        var e = d.Fk;
        d = d.Gk;
        if (c) {
            if (b = bn(), (d = xL(b, c.getDomId())) && !_.Q(d, 19))
                if (e && b.l.set(c, e), Tm(c) || Em(or(d))) {
                    if (Th(d, 19, !0), e = Pm(b.g, b.A), a.enabled) {
                        st(a);
                        a.enabled && SJ(a.L, c);
                        a.R.info(rK());
                        b = e.ba;
                        d = e.T;
                        var f = _.Q(b, 6);
                        if (f || !a.L.Ac(c)) f && (f = Tm(c)) && Ys(c, GJ, 778, f), _.Q(b, 4) && (d = d[c.getDomId()], xq(d, b) && !a.L.Ac(c) && yq(c, document, d, b)), BL(a, e, c)
                    }
                } else O(a.R, hK(String(dk(d, 1)), String(dk(d, 2))), c)
        } else d ? a.R.error(iK(d)) : a.R.error(Wl("googletag.display", [String(b)]))
    };
    pQ.prototype.slotAdded = function(a, b) {
        var c = this;
        _.Q(b, 17) || this.enabled && SJ(this.L, a);
        Ys(this.l, JJ, 724, {
            jh: a.getDomId(),
            T: b
        });
        a.listen($s, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new pN(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0, f.slotContentChanged = !1);
            e = a.g.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            Ys(c.l, "slotRenderEnded", 708, f)
        });
        a.listen(HJ, function() {
            Ys(c.l, "slotResponseReceived", 709, new vN(a, c.getName()))
        });
        4 === or(b) && rQ(this, "rewardedSlotClosed", a, b);
        7 === or(b) && rQ(this, "gameManualInterstitialSlotClosed", a, b);
        lP.prototype.slotAdded.call(this, a, b)
    };
    var rQ = function(a, b, c, d) {
            _.kp(c, a.l.listen(b, function(e) {
                c.g === e.detail.slot && (e = {}, sQ(a, [c], bn().g, (e[c.getDomId()] = d, e), a.L))
            }))
        },
        BL = function(a, b, c) {
            var d = tQ(a, b, c);
            uQ(a, d, b, {
                ec: 1
            });
            b = c.getAdUnitPath();
            if (c = a.I[b]) {
                c = _.y(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, uQ(a, d.X, d.O, d.ke);
                delete a.I[b]
            }
        },
        tQ = function(a, b, c) {
            var d = b.ba,
                e = b.T[c.getDomId()];
            return _.Q(d, 4) ? [] : !_.Q(d, 6) || (null == e ? 0 : _.Q(e, 17)) ? (a.j.add(c), _.kp(c, function() {
                return void a.j.delete(c)
            }), [c]) : a.g.filter(function(f) {
                if (a.j.has(f) || _.E(gE) && !Tm(f) && !Em(or(e))) return !1;
                a.j.add(f);
                _.kp(f, function() {
                    return void a.j.delete(f)
                });
                return !0
            })
        },
        uQ = function(a, b, c, d) {
            a.R.info(yK());
            if (vQ(a, b, d, c) && 1 !== d.ec)
                for (b = _.y(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), Ys(a.l, KJ, 725, {
                    jh: d,
                    T: c.T[d]
                })
        },
        vQ = function(a, b, c, d) {
            b = b.filter(function(e) {
                var f = d.T[e.getDomId()],
                    g = _.zq(a.L, e);
                !1 === g && O(a.R, hL(String(or(f)), e.getAdUnitPath()));
                if (!g) return !1;
                (_.H = [5, 4, 7], _.z(_.H, "includes")).call(_.H, or(f)) && _.TJ(a.L, e);
                return !0
            });
            if (!b.length) return null;
            oQ(a.H, b, c, d);
            return b
        };
    pQ.prototype.refresh = function(a, b, c) {
        c = void 0 === c ? {
            ec: 2
        } : c;
        b = wQ(this, b);
        if (!b.length) return !1;
        xQ(this, a, b, c);
        return !0
    };
    var wQ = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.M) return !0;
                O(a.R, BK(String(d)));
                return !1
            })
        },
        xQ = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.enabled) {
                var h = _.y(c);
                e = h.next();
                for (f = {}; !e.done; f = {
                        zf: void 0
                    }, e = h.next()) f.zf = e.value, a.j.add(f.zf), _.kp(f.zf, function(k) {
                    return function() {
                        return void a.j.delete(k.zf)
                    }
                }(f));
                uQ(a, c, b, d)
            } else c.length && _.Q(b.ba, 6) ? (O(a.R, xK(g), e), e = e.getAdUnitPath(), f = null != (h = a.I[e]) ? h : [], f.push({
                X: c,
                O: b,
                ke: d
            }), a.I[e] = f) : O(a.R, vK(g), e)
        };
    pQ.prototype.o = function() {
        var a = bn().g;
        if (_.Q(a, 6))
            for (var b = _.y(this.g), c = b.next(); !c.done; c = b.next()) this.enabled && SJ(this.L, c.value);
        GL(this, a);
        a = wo();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    pQ.prototype.destroySlots = function(a) {
        a = lP.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = bn();
            yQ(this, a, b.g, b.A)
        }
        return a
    };
    var IL = function(a, b, c, d) {
            if (!a.enabled) return O(a.R, wK(), d[0]), !1;
            var e = wQ(a, d);
            if (!e.length) return O(a.R, Wl("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.R.info(zK());
            yQ(a, e, b, c);
            return !0
        },
        yQ = function(a, b, c, d) {
            for (var e = _.y(b), f = e.next(); !f.done; f = e.next()) PJ(a.L, f.value);
            sQ(a, b, c, d, a.L)
        };
    pQ.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.Kf(hh).g(a)
    };
    var sQ = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.y(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                YJ(a.C.L, g);
                var h = d[g.getDomId()];
                xq(h, c) && yq(g, f.document, h, c);
                Aq(e, g)
            }
        },
        HL = function(a, b, c, d) {
            if ("string" !== typeof b || "string" !== typeof c) O(a.R, Wl("PubAdsService.setVideoContent", [b, c]));
            else {
                var e = Th(d, 21, !0);
                b = li(e, 22, b);
                li(b, 23, c);
                GL(a, d)
            }
        },
        JL = function(a, b) {
            if (!a.enabled) return null;
            var c, d;
            return {
                vid: null != (c = _.I(b, 22)) ? c : "",
                cmsid: null != (d = _.I(b, 23)) ? d : ""
            }
        },
        GL = function(a, b) {
            _.Q(b, 21) && a.enabled && (a = iB(), _.ik(b, 29, _.qd(a)))
        },
        qQ = function(a, b) {
            var c = "";
            if ("string" === typeof a) c = a, b = OM(b, c);
            else if (_.ja(a) && 1 == a.nodeType) {
                var d = a;
                c = d.id;
                b = OM(b, c)
            } else b = (_.H = [].concat(_.ri(b.X)), _.z(_.H, "find")).call(_.H, function(e) {
                return e.g === a
            });
            return {
                slotId: b,
                Fk: d,
                Gk: c
            }
        };
    var Wv = _.pw(["https://pagead2.googlesyndication.com/pagead/js/rum_debug.js"]),
        Xv = _.pw(["https://pagead2.googlesyndication.com/pagead/js/rum.js"]);
    var zQ = qw(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]),
        AQ = _.Ox(function() {
            eB("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        CQ = function(a, b) {
            var c = this;
            var d = void 0 === d ? _.z(String, "raw").call(String, zQ) : d;
            this.L = a;
            this.A = d;
            this.g = new _.u.Map;
            this.X = new _.u.Set;
            b.l = function(e) {
                return BQ(c, e)
            }
        };
    CQ.prototype.defineSlot = function(a, b, c, d, e) {
        a = bo(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.g;
        a.Ne || b.error(Wl("googletag.defineSlot", [c, d, e]));
        return null
    };
    var bo = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Ub: f,
            Ui: void 0 === g ? !1 : g
        }) : {}
    };
    CQ.prototype.add = function(a, b, c, d, e, f) {
        var g = this,
            h = e.Ub,
            k = void 0 === e.format ? 0 : e.format,
            l = void 0 === e.Ui ? !1 : e.Ui;
        e = void 0 === e.wb ? !1 : e.wb;
        f = void 0 === f ? _.t : f;
        try {
            var m = new RegExp(this.A, "u");
            if (m.test("/1") && !m.test(c)) return b.error(kK(c)), {
                Ne: !0
            }
        } catch (p) {}
        f = tq(k, f, e);
        null !== f && kq(a, f, oq(k));
        if (f) return hq(b, f, k, c), {};
        l && AQ();
        k = this.g.get(c) || Number(l);
        b = DQ(this, a, b, c, k, d, h || "gpt_unit_" + c + "_" + k);
        a = b.Fa;
        var n = b.slotId;
        b = b.Ne;
        if (!n) return {
            Ne: b
        };
        this.g.set(c, k + 1);
        this.X.add(n);
        _.kp(n, function() {
            return void g.X.delete(n)
        });
        xJ(c);
        return {
            slotId: n,
            Fa: a
        }
    };
    var OM = function(a, b) {
            a = _.y(a.X);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        jt = function(a) {
            a = _.y(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.za()
        },
        DQ = function(a, b, c, d, e, f, g) {
            var h = OM(a, g);
            if (h) return c.error(jK(g, d, h.getAdUnitPath())), {
                Ne: !0
            };
            var k = new UL;
            VL(li(k, 1, d), g);
            WL(k, ro(f));
            wL(k);
            var l = new Qg(b, d, e, g);
            DL(l, Do(b, c, l));
            _.kp(l, function() {
                var m = bn(),
                    n = l.getDomId();
                delete m.A[n];
                m.l.delete(l);
                m = l.getAdUnitPath();
                m = Bl(m);
                var p;
                n = (null != (p = Pl.get(m)) ? p : 0) - 1;
                0 >= n ? Pl.delete(m) : Pl.set(m, n);
                c.info(GK(l.toString()), l);
                (p = Rl.get(l)) && Sl.delete(p);
                Rl.delete(l)
            });
            c.info(ZJ(l.toString()), l);
            l.listen(IJ, function(m) {
                m = m.detail.lm;
                c.info($J(l.getAdUnitPath()), l);
                rC(_.Kf(El), "7", 9, WJ(a.L, l), 0, m)
            });
            l.listen(HJ, function(m) {
                var n = m.detail;
                c.info(aK(l.getAdUnitPath()), l);
                var p;
                m = _.Kf(El);
                var r = Xs(k, 20);
                n = null != (p = n.getEscapedQemQueryId()) ? p : "";
                m.g && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + r] = n)
            });
            l.listen(Zs, function() {
                return void c.info(bK(l.getAdUnitPath()), l)
            });
            l.listen($s, function() {
                return void c.info(cK(l.getAdUnitPath()), l)
            });
            return {
                Fa: k,
                slotId: l
            }
        },
        BQ = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.ri(a.X)).some(function(d) {
                return c.test(Bl(d.getAdUnitPath()))
            })
        };
    (function(a, b) {
        var c = null != a ? a : {
            pvsid: Xj(window),
            Bb: "1",
            yb: "m202403110101",
            Ra: new dw(3, "m202403110101", 0),
            gh: !0,
            hg: 1
        };
        try {
            Bc(function(aa) {
                Gl(c, 1190, aa)
            });
            var d = wo();
            Df(!_.Kf(sm).g);
            _.z(Object, "assign").call(Object, tm, d._vars_);
            d._vars_ = tm;
            if (d.evalScripts) d.evalScripts();
            else {
                OI();
                try {
                    wh()
                } catch (aa) {
                    Gl(c, 408, aa)
                }
                Sq();
                var e = new iM;
                try {
                    sh(e.I), In(13, c), In(3, c)
                } catch (aa) {
                    Gl(c, 408, aa)
                }
                var f = cw(c, e),
                    g = null != a ? a : gw(f, c),
                    h = null != b ? b : new hM(g);
                xl(g);
                xp("gpt_fifwin", function(aa) {
                    Xo(aa, g)
                }, d.fifWin ? .01 : 0);
                var k = new OJ,
                    l = new CQ(k, e),
                    m = new sP(g),
                    n = _.um(260),
                    p = new DJ(g),
                    r = new DJ(g),
                    v = new DJ(g),
                    w = _.um(150),
                    x = VA(),
                    B = cu(g, l, h, k, n, e, m, p, w),
                    C = _.um(221),
                    F = new nO,
                    G = new fN,
                    P, R, L, Z = null != (L = null == (P = B.Jb) ? void 0 : null == (R = P.xd) ? void 0 : R.xb) ? L : new Yp,
                    qa = new pQ(g, l, h, k, m, x, e, p, n, C, F, G, B, Z);
                _.E(wF) && new PM(g, p, k, l);
                var wa = bn().g;
                zt(g, h, qa, wa, l, r, v, e, G, Z);
                Ro(g, d, h);
                window.setTimeout(function() {
                    for (var aa = window.document.scripts, ia = 0, wb = 0, Ua = 0; Ua < aa.length; Ua++) aa[Ua].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? ia++ : aa[Ua].src.match("www.googletagservices.com/tag/js/gpt.js") && wb++;
                    1 < ia && 0 === wb || 1 < wb && 0 === ia ? O(h, fL()) : 0 < wb && 0 < ia && h.error(gL())
                }, 1E3);
                ft();
                if (_.E(wF) || _.Kf(El).g) Uv(), Yv();
                Uo(g)
            }
        } catch (aa) {
            Gl(c, 106, aa)
        }
    })();
    _.EQ = _.t.requestAnimationFrame || _.t.webkitRequestAnimationFrame;
    _.FQ = !!_.EQ && !/'iPhone'/.test(_.t.navigator.userAgent);
    _.GQ = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.j = a;
        this.g = b;
        this.l = c;
        this.P = null;
        _.kp(this, function() {
            return d.P = null
        })
    };
    _.T(_.GQ, _.V);
}).call(this, {});