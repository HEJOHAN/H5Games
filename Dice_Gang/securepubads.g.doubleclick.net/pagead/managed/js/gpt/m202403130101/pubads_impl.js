(function(_) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var ca, ea, ia, la, na, pa, ta, sa, ua, va, xa, ya, za, Ba, Ca, Fa, Ga, Ha, Ia, Ja, La, Ua, ab, bb, ib, kb, lb, mb, nb, pb, tb, wb, Cb, Fb, Jb, Lb, Nb, Pb, Sb, Xb, $b, Yb, ac, bc, Ub, ec, fc, gc, ic, kc, mc, nc, pc, rc, sc, vc, xc, yc, Ac, Bc, Dc, Hc, Jc, Kc, Mc, Nc, Tc, Vc, Wc, Xc, Zc, dd, ed, fd, gd, bd, hd, ad, $c, id, nd, od, rd, sd, vd, ud, xd, yd, Ad, Dd, Ed, Gd, Hd, Rd, Vd, Xd, Wd, $d, be, ae, de, ce, ee, ge, Fd, le, me, pe, ue, qe, se, te, Ce, De, Fe, Ge, He, Ke, Le, Me, re, Ne, Oe, Pe, Re, Se, Te, Ue, Ye, Ze, $e, We, gf, Xe, hf, wf, zf, Bf, Ff, Gf, Hf, Lf, Mf, Nf, Pf, Qf, Rf, Sf, Tf, Wf, $f, bg, ag, fg, hg, ig, lg, mg, Fg, Gg, Lg, Og, Qg, Sg, Ug, Vg, Yg, Zg, $g, ah, bh, dh, eh, gh, hh, jh, kh, lh, mh, nh, oh, rh, th, xh, vh, Mh, Nh, Oh, Kh, Lh, Ph, Qh, $h, Yh, ci, ki, Rh, ti, Ei, Fi, Ji, Ki, Qi, Si, Ti, Wi, Zi, dj, oj, rj, sj, uj, vj, wj, xj, yj, zj, Aj, Bj, Dj, Gj, Ej, Hj, Fj, Ij, Kj, Pj, Rj, Sj, Vj, Tj, Yj, Zj, ak, ek, fk, lk, mk, yk, Ek, Ck, Dk, Jk, Nk, Pk, Qk, Rk, Tk, Xk, dl, $k, Uk, ll, jl, kl, nl, ol, rl, xl, Al, Bl, M, Cl, Il, Gl, Tl, N, Vl, Wl, Xl, Zl, am, bm, im, jm, lm, mm, rm, ym, Am, Cm, Dm, Em, Fm, Gm, Jm, Nm, Pm, Rm, Qm, Xm, Ym, Zm, $m, Sm, an, Tm, dn, en, jn, pn, sn, tn, un, wn, An, Fn, Hn, In, Kn, Ln, Pn, Qn, Rn, Vn, On, Xn, Yn, Zn, ao, eo, go, ho, io, jo, lo, mo, oo, qo, ro, po, vo, wo, Ao, Bo, Do, No, Po, Ro, Uo, To, So, dp, gp, hp, ip, jp, lp, np, op, pp, rp, sp, up, tp, wp, Bp, zp, Cp, Ep, Fp, Ip, Jp, Lp, Op, Np, Qp, Rp, Sp, Up, Vp, Xp, Wp, $p, bq, dq, fq, hq, kq, nq, oq, sq, vq, tq, uq, wq, xq, Aq, Cq, Eq, Iq, Jq, Kq, Lq, Mq, Nq, Oq, Pq, Rq, Sq, Tq, Wq, fr, Zq, jr, kr, lr, nr, pr, sr, vr, Er, tr, ur, xr, yr, rr, wr, Ir, Mr, Or, Qr, Sr, Vr, Xr, oa, Yr, Zr, as, $r, bs, cs, es, gs, hs, js, ls, ps, ms, qs, rs, ts, vs, ws, ys, As, Bs, Js, Ks, Ls, Ms, Ns, Ts, Vs, Xs, Ys, Zs, bt, rt, ut, Vt, Wt, Lu, Ou, Wu, Su, Tu, Zu, cv, fv, hv, gv, vv, zv, Av, Bv, Dv, Cv, Fv, Nv, Rv, Wv, $v, aw, bw, cw, ew, fw, gw, hw, jw, kw, lw, sw, tw, uw, sb, ww, zw, xw, yw, Aw, Bw;
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
    Fa = function(a) {
        return Da ? Ea ? Ea.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    };
    Ga = function(a) {
        return -1 != Ca().indexOf(a)
    };
    Ha = function() {
        return Da ? !!Ea && 0 < Ea.brands.length : !1
    };
    Ia = function() {
        return Ga("Firefox") || Ga("FxiOS")
    };
    Ja = function() {
        return Ha() ? Fa("Chromium") : (Ga("Chrome") || Ga("CriOS")) && !(Ha() ? 0 : Ga("Edge")) || Ga("Silk")
    };
    La = function(a) {
        return new Ka(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    _.Ra = function(a) {
        var b = void 0 === b ? Ma : b;
        a: if (b = void 0 === b ? Ma : b, !(a instanceof _.Na)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof Ka && d.kl(a)) {
                    a = Oa(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.Qa
    };
    Ua = function(a) {
        for (var b = _.Sa.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return Oa(c.join(""))
    };
    _.Xa = function(a) {
        if (Va.test(a)) return a
    };
    _.Za = function(a) {
        return a instanceof _.Na ? _.Ya(a) : _.Xa(a)
    };
    ab = function(a) {
        var b = new $a;
        b.Wi = a;
        return b
    };
    bb = function(a) {
        var b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            ge: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    };
    _.eb = function(a) {
        var b = _.Sa.apply(1, arguments);
        if (0 === b.length) return cb(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return cb(c)
    };
    _.gb = function(a, b) {
        a = bb(_.fb(a).toString());
        var c = a.ge,
            d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return cb(a.path + c + a.hash)
    };
    ib = function(a) {
        return a ? a.passive && hb() ? a : a.capture || !1 : !1
    };
    _.jb = function(a, b) {
        b = _.Za(b);
        void 0 !== b && (a.href = b)
    };
    kb = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    lb = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    mb = function(a, b) {
        if (b instanceof $a) b = b.Wi;
        else throw Error("");
        a.textContent = b;
        lb(a)
    };
    nb = function(a, b) {
        a.src = _.fb(b);
        lb(a)
    };
    pb = function(a) {
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
            nb(g, a);
            c && "complete" !== b.document.readyState ? _.ob(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    tb = function(a) {
        var b, c, d, e, f, g;
        return _.qb(function(h) {
            switch (h.g) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.g + ("&tv=" + a.A + "&st=") + a.xd, c = void 0, h.l = 2, h.yield(rb(b), 4);
                case 4:
                    c = h.A;
                    h.g = 3;
                    h.l = 0;
                    break;
                case 2:
                    sb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Vd || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.l ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.j,
                        ak: c.bg_hash_basename,
                        Zj: c.bg_binary,
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
    wb = function(a) {
        var b;
        _.qb(function(c) {
            if (1 == c.g) return c.yield(tb(a), 2);
            if (b = c.A) {
                var d = b,
                    e = "sodar2";
                e = void 0 === e ? "sodar2" : e;
                var f = window,
                    g = f.GoogleGcLKhOms;
                g && "function" === typeof g.push || (g = f.GoogleGcLKhOms = []);
                var h = {};
                g.push((h._ctx_ = d.context, h._bgv_ = d.ak, h._bgp_ = d.Zj, h._li_ = d.ql, h._jk_ = d.Vd, h._st_ = d.xd, h._rc_ = d.bf, h._dl_ = d.zf, h._g2_ = d.af, h));
                if (d = f.GoogleDX5YKUSk) f.GoogleDX5YKUSk = void 0, d[1]();
                e = _.eb(ub, e);
                pb(e)
            }
            return c.return(b)
        })
    };
    Cb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (xb) {
            if (b && (yb ? !a.ll() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
            a = (zb || (zb = new TextEncoder)).encode(a)
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
    Jb = function(a) {
        if (!Gb) return Hb(a);
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
    Pb = function(a) {
        if (a !== Ob) throw Error("illegal external caller");
    };
    Sb = function() {
        return "function" === typeof BigInt
    };
    Xb = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.y(Ub(c, a)), b = c.next().value, a = c.next().value, c = b);
        Vb = c >>> 0;
        Wb = a >>> 0
    };
    $b = function(a, b) {
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
        b & 2147483648 ? Sb() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = _.y(Ub(a, b)), a = b.next().value, b = b.next().value, a = "-" + $b(a, b)) : a = $b(a, b);
        return a
    };
    bc = function(a) {
        if (16 > a.length) Xb(Number(a));
        else if (Sb()) a = BigInt(a), Vb = Number(a & BigInt(4294967295)) >>> 0, Wb = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Wb = Vb = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Wb *= 1E6, Vb = 1E6 * Vb + d, 4294967296 <= Vb && (Wb += _.z(Math, "trunc").call(Math, Vb / 4294967296), Wb >>>= 0, Vb >>>= 0);
            b && (b = _.y(Ub(Vb, Wb)), a = b.next().value, b = b.next().value, Vb = a, Wb = b)
        }
    };
    Ub = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    ec = function(a) {
        return Array.prototype.slice.call(a)
    };
    fc = function(a) {
        return "function" === typeof _.u.Symbol && "symbol" === typeof(0, _.u.Symbol)() ? (0, _.u.Symbol)() : a
    };
    gc = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    ic = function(a) {
        hc(a, 34);
        return a
    };
    kc = function(a) {
        hc(a, 32);
        return a
    };
    mc = function(a, b) {
        lc(b, (a | 0) & -14591)
    };
    nc = function(a, b) {
        lc(b, (a | 34) & -14557)
    };
    pc = function(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    rc = function(a) {
        return !(!a || "object" !== typeof a || a.rl !== qc)
    };
    sc = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    vc = function(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new tc(a, Ob) : uc();
            else if (a.constructor !== tc)
            if (Nb(a)) a = a.length ? new tc(c ? a : new Uint8Array(a), Ob) : uc();
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
        lc(a, d | 1);
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
    Dc = function(a) {
        a = Error(a);
        Cc(a, "warning");
        Bc(a);
        return a
    };
    _.Gc = function(a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
        return a
    };
    Hc = function(a) {
        if (null == a || "number" === typeof a) return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    };
    Jc = function(a) {
        if ("boolean" !== typeof a) throw Error("Expected boolean but got " + Ic(a) + ": " + a);
        return a
    };
    Kc = function(a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    };
    Mc = function(a) {
        var b = typeof a;
        return "number" === b ? _.z(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : Lc.test(a)
    };
    Nc = function(a) {
        if (!_.z(Number, "isFinite").call(Number, a)) throw Dc("enum");
        return a | 0
    };
    Tc = function(a) {
        return null == a ? a : Nc(a)
    };
    _.Uc = function(a) {
        return null == a ? a : _.z(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Vc = function(a) {
        if ("number" !== typeof a) throw Dc("int32");
        if (!_.z(Number, "isFinite").call(Number, a)) throw Dc("int32");
        return a | 0
    };
    Wc = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.z(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Xc = function(a) {
        if ("number" !== typeof a) throw Dc("uint32");
        if (!_.z(Number, "isFinite").call(Number, a)) throw Dc("uint32");
        return a >>> 0
    };
    _.Yc = function(a) {
        return null == a ? a : Xc(a)
    };
    Zc = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.z(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    };
    _.cd = function(a, b) {
        b = !!b;
        if (!Mc(a)) throw Dc("int64");
        return "string" === typeof a ? $c(a) : b ? ad(a) : bd(a)
    };
    dd = function(a) {
        return null == a ? a : _.cd(a)
    };
    ed = function(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    };
    fd = function(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    };
    gd = function(a) {
        if (0 > a) {
            Xb(a);
            var b = $b(Vb, Wb);
            a = Number(b);
            return _.z(Number, "isSafeInteger").call(Number, a) ? a : b
        }
        if (ed(String(a))) return a;
        Xb(a);
        return 4294967296 * Wb + (Vb >>> 0)
    };
    bd = function(a) {
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
    hd = function(a) {
        a = _.z(Math, "trunc").call(Math, a);
        return 0 <= a && _.z(Number, "isSafeInteger").call(Number, a) ? a : gd(a)
    };
    ad = function(a) {
        a = _.z(Math, "trunc").call(Math, a);
        if (_.z(Number, "isSafeInteger").call(Number, a)) a = String(a);
        else {
            var b = String(a);
            fd(b) ? a = b : (Xb(a), a = ac())
        }
        return a
    };
    $c = function(a) {
        var b = _.z(Math, "trunc").call(Math, Number(a));
        if (_.z(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        fd(a) || (bc(a), a = ac());
        return a
    };
    id = function(a) {
        var b = _.z(Math, "trunc").call(Math, Number(a));
        if (_.z(Number, "isSafeInteger").call(Number, b) && 0 <= b) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        ed(a) || (bc(a), a = $b(Vb, Wb));
        return a
    };
    nd = function(a) {
        if (null == a) return a;
        if (Mc(a)) {
            var b;
            "number" === typeof a ? b = bd(a) : b = $c(a);
            return b
        }
    };
    od = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (null == a) return a;
        if (Mc(a)) return "string" === typeof a ? $c(a) : b ? ad(a) : bd(a)
    };
    _.pd = function(a) {
        if (null != a) {
            var b = !!b;
            if (!Mc(a)) throw Dc("uint64");
            "string" === typeof a ? a = id(a) : b ? (a = _.z(Math, "trunc").call(Math, a), 0 <= a && _.z(Number, "isSafeInteger").call(Number, a) ? a = String(a) : (b = String(a), ed(b) ? a = b : (Xb(a), a = $b(Vb, Wb)))) : a = hd(a)
        }
        return a
    };
    _.qd = function(a) {
        if ("string" !== typeof a) throw Error();
        return a
    };
    rd = function(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    };
    sd = function(a) {
        return null == a || "string" === typeof a ? a : void 0
    };
    vd = function(a, b, c, d) {
        if (null != a && "object" === typeof a && a.Bg === td) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? ud(b) : new b : void 0;
        var e = c = wc(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && lc(a, e);
        return new b(a)
    };
    ud = function(a) {
        var b = a[wd];
        if (b) return b;
        b = new a;
        ic(b.F);
        return a[wd] = b
    };
    xd = function(a, b, c) {
        if (b) return Jc(a);
        var d;
        return null != (d = Kc(a)) ? d : c ? !1 : void 0
    };
    yd = function(a, b, c) {
        if (b) return _.qd(a);
        var d;
        return null != (d = sd(a)) ? d : c ? "" : void 0
    };
    Ad = function(a, b) {
        zd = b;
        a = new a(b);
        zd = void 0;
        return a
    };
    Dd = function(a) {
        switch (typeof a) {
            case "boolean":
                return Bd || (Bd = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? Cd || (Cd = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    };
    _.A = function(a, b, c) {
        null == a && (a = zd);
        zd = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error();
            d = wc(a);
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
        lc(a, d);
        return a
    };
    Ed = function(a) {
        return a
    };
    Gd = function(a, b, c, d, e, f) {
        a = vd(a, d, c, f);
        e && (a = Fd(a));
        return a
    };
    Hd = function(a) {
        return a
    };
    Rd = function(a) {
        return [a, this.get(a)]
    };
    Vd = function() {
        return Sd || (Sd = new Td(ic([]), void 0, void 0, void 0, Ud))
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
                        if (xc(a, void 0, 0)) return
                    } else {
                        if (Nb(a)) return Jb(a);
                        if (a instanceof tc) return Yd(a);
                        if (a instanceof Td) return Zd(a)
                    }
        }
        return a
    };
    $d = function(a, b, c) {
        a = ec(a);
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
            if (Array.isArray(a)) a = xc(a, void 0, 0) ? void 0 : e && wc(a) & 2 ? a : ae(a, b, c, void 0 !== d, e);
            else if (sc(a)) {
                var f = {},
                    g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = be(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    };
    ae = function(a, b, c, d, e) {
        var f = d || c ? wc(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = ec(a);
        for (var g = 0; g < a.length; g++) a[g] = be(a[g], b, c, d, e);
        c && c(f, a);
        return a
    };
    de = function(a) {
        return be(a, ce, void 0, void 0, !1)
    };
    ce = function(a) {
        return a.Bg === td ? a.toJSON() : a instanceof Td ? Zd(a, de) : Wd(a)
    };
    ee = function(a, b, c) {
        c = void 0 === c ? nc : c;
        if (null != a) {
            if (Mb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = wc(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? lc(a, (d | 34) & -12293) : ae(a, ee, d & 4 ? nc : c, !0, !0)
            }
            a.Bg === td ? (c = a.F, d = fe(c), a = d & 2 ? a : Ad(a.constructor, ge(c, d, !0))) : a instanceof Td && !(a.Id & 2) && (c = ic(he(a, ee)), a = new Td(c, a.Gf, a.Wd, a.rh));
            return a
        }
    };
    _.ie = function(a) {
        var b = a.F;
        return Ad(a.constructor, ge(b, fe(b), !1))
    };
    ge = function(a, b, c) {
        var d = c || b & 2 ? nc : mc,
            e = !!(b & 32);
        a = $d(a, b, function(f) {
            return ee(f, e, d)
        });
        hc(a, 32 | (c ? 2 : 0));
        return a
    };
    Fd = function(a) {
        var b = a.F,
            c = fe(b);
        return c & 2 ? Ad(a.constructor, ge(b, c, !1)) : a
    };
    _.je = function(a) {
        var b = a.F,
            c = fe(b);
        return c & 2 ? a : Ad(a.constructor, ge(b, c, !0))
    };
    le = function(a, b, c) {
        if (!(4 & b)) return !0;
        if (null == c) return !1;
        0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[ke] = (a.constructor[ke] | 0) + 1) && (a = Error(), Cc(a, "incident"), zc ? Bc(a) : Fb(a));
        return 0 === c ? !1 : !(c & b)
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
            g !== b && lc(a, g);
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
        0 === h && g && !e ? (h |= 33, lc(f, h)) : h & 1 || (h |= 1, lc(f, h));
        if (e) h & 2 || ic(f), Object.freeze(f);
        else if (2 & h || 2048 & h) f = ec(f), e = 1, g && (e |= 32), lc(f, e), me(a, b, c, f, d);
        return f
    };
    ue = function(a, b, c, d, e, f, g) {
        var h = a.F,
            k = fe(h);
        d = 2 & k ? 1 : d;
        f = !!f;
        var l = qe(h, k, b, e),
            m = wc(l);
        if (le(a, m, g)) {
            if (4 & m || Object.isFrozen(l)) l = ec(l), m = re(m, k, f), k = me(h, k, b, l, e);
            for (var n = a = 0; a < l.length; a++) {
                var p = c(l[a]);
                null != p && (l[n++] = p)
            }
            n < a && (l.length = n);
            m = se(m, k, f);
            m = gc(m, 20, !0);
            m = gc(m, 4096, !1);
            m = gc(m, 8192, !1);
            g && (m = gc(m, g, !0));
            lc(l, m);
            2 & m && Object.freeze(l)
        }
        te(m) || (g = m, (c = 1 === d) ? m = gc(m, 2, !0) : f || (m = gc(m, 32, !1)), m !== g && lc(l, m), c && Object.freeze(l));
        2 === d && te(m) && (l = ec(l), m = re(m, k, f), lc(l, m), me(h, k, b, l, e));
        return l
    };
    qe = function(a, b, c, d) {
        a = ne(a, b, c, d);
        return Array.isArray(a) ? a : oe
    };
    se = function(a, b, c) {
        0 === a && (a = re(a, b, c));
        return a = gc(a, 1, !0)
    };
    te = function(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    };
    Ce = function(a) {
        return vc(a, !0, !0)
    };
    De = function(a) {
        return vc(a, !0, !1)
    };
    Fe = function(a, b, c, d, e, f) {
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
                if (0 == (h.Id & 2) || k) {
                    a = h;
                    break a
                }
                h = he(h)
            } else Array.isArray(h) ? c = !!(wc(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Vd();
                    break a
                }
                c || (c = !0, ic(h))
            } else if (c) {
                c = !1;
                k = ec(h);
                for (h = 0; h < k.length; h++) {
                    var l = k[h] = ec(k[h]);
                    Array.isArray(l[1]) && (l[1] = ic(l[1]))
                }
                h = k
            }
            c || (wc(h) & 64 ? Ee(h, 32) : 32 & b && kc(h));f = new Td(h, e, yd, f);me(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !g && e && (a.gk = !0);
        return a
    };
    Ge = function(a, b, c) {
        a = a.F;
        var d = fe(a);
        return Fe(a, d, ne(a, d, b), b, void 0, c)
    };
    He = function(a, b, c) {
        a = a.F;
        var d = fe(a);
        return Fe(a, d, ne(a, d, b), b, c)
    };
    _.Ie = function(a, b, c, d) {
        var e = a.F,
            f = fe(e);
        yc(f);
        if (null == c) return me(e, f, b), a;
        var g = wc(c),
            h = g,
            k = !!(2 & g) || Object.isFrozen(c),
            l = !k && !1;
        if (le(a, g))
            for (g = 21, k && (c = ec(c), h = 0, g = re(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = ec(c), h = 0, g = re(g, f, !0));
        g !== h && lc(c, g);
        me(e, f, b, c);
        return a
    };
    _.Je = function(a, b, c, d) {
        var e = a.F,
            f = fe(e);
        yc(f);
        me(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    };
    Ke = function(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != ne(a, b, f) && (0 !== d && (b = me(a, b, d)), d = f)
        }
        return d
    };
    Le = function(a, b, c, d) {
        a = a.F;
        var e = fe(a),
            f = ne(a, e, c, d);
        b = vd(f, b, !1, e);
        b !== f && null != b && me(a, e, c, b, d);
        return b
    };
    Me = function(a, b, c, d, e, f) {
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
            (r = !!(2 & l)) && (p = gc(p, 2, !0));
            for (var v = !r, w = !0, x = 0, B = 0; x < n.length; x++) {
                var C = vd(n[x], c, !1, p);
                if (C instanceof c) {
                    if (!r) {
                        var F = !!(wc(C.F) & 2);
                        v && (v = !F);
                        w && (w = F)
                    }
                    n[B++] = C
                }
            }
            B < x && (n.length = B);
            l = gc(l, 4, !0);
            l = gc(l, 16, w);
            l = gc(l, 8, v);
            lc(n, l);
            r && Object.freeze(n)
        }
        c = !!(8 & l) || k && !g.length;
        if (f && !c) {
            te(l) && (g = ec(g), l = re(l, b, e), b = me(a, b, d, g));
            f = g;
            c = l;
            for (n = 0; n < f.length; n++) l = f[n], p = Fd(l), l !== p && (f[n] = p);
            c = gc(c, 8, !0);
            c = gc(c, 16, !f.length);
            lc(f, c);
            l = c
        }
        te(l) || (f = l, k ? l = gc(l, !g.length || 16 & l && (!m || 32 & l) ? 2 : 2048, !0) : e || (l = gc(l, 32, !1)), l !== f && lc(g, l), k && Object.freeze(g));
        h && te(l) && (g = ec(g), l = re(l, b, e), lc(g, l), me(a, b, d, g));
        return g
    };
    re = function(a, b, c) {
        a = gc(a, 2, !!(2 & b));
        a = gc(a, 32, !!(32 & b) && c);
        return a = gc(a, 2048, !1)
    };
    Ne = function(a, b, c, d) {
        a = a.F;
        var e = fe(a);
        yc(e);
        b = Me(a, e, c, b, !0);
        c = null != d ? d : new c;
        b.push(c);
        wc(c.F) & 2 ? Ee(b, 8) : Ee(b, 16);
        return c
    };
    Oe = function(a) {
        return od(a, !0)
    };
    Pe = function(a, b) {
        return null != a ? a : b
    };
    Re = function(a, b, c) {
        var d = Qe ? void 0 : a.constructor.da;
        var e = fe(c ? a.F : b);
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
    Se = function(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        hc(b, 128);
        return Ad(a, kc(b))
    };
    Te = function(a, b) {
        if (Array.isArray(b)) {
            var c = wc(b);
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                null != f && (b[e++] = f)
            }
            e < d && (b.length = e);
            lc(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    };
    Ue = function(a, b, c) {
        a[b] = c
    };
    Ye = function(a) {
        var b = a[Ve];
        if (!b) {
            var c = We(a);
            b = function(d, e) {
                return Xe(d, e, c)
            };
            a[Ve] = b
        }
        return b
    };
    Ze = function(a) {
        return a.g
    };
    $e = function(a, b) {
        var c, d, e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d || (d = We(b).g), c || (c = Ye(b)))
        }
    };
    We = function(a) {
        var b = a[af];
        if (b) return b;
        b = a[af] = {};
        var c = Ze,
            d = $e;
        var e = void 0 === e ? Ue : e;
        b.g = Dd(a[0]);
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.Kk = g, g = a[++f], "function" === typeof g && (b.l = g, b.A = a[++f], g = a[++f]));
        for (var h = {}; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; void 0 !== g;) {
            "number" === typeof g && (k += g, g = a[++f]);
            var l = void 0;
            if (g instanceof bf) var m = g;
            else m = cf, f--;
            if (m.Gj) {
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
        df in a && ef in a && af in a && (a.length = 0);
        return b
    };
    gf = function(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Kk)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof bf ? c : [ff, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = Ye(c),
                        f = We(c).g;
                    c = (c = a.A) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    };
    Xe = function(a, b, c) {
        for (var d = fe(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var l = h - e,
                    m = gf(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (d = +n, _.z(Number, "isNaN").call(Number, d) || (e = a[n], null != e && (f = gf(c, d)) && f(b, e, d)))
        }
    };
    hf = function(a) {
        return new bf(a, !1)
    };
    wf = function(a, b, c) {
        a: if (null != b) {
            if (Mc(b)) {
                if ("string" === typeof b) {
                    b = $c(b);
                    break a
                }
                if ("number" === typeof b) {
                    b = bd(b);
                    break a
                }
            }
            b = void 0
        }null != b && ("string" === typeof b && jf(b), null != b && (kf(a.g, 8 * c), "number" === typeof b ? (a = a.g, Xb(b), vf(a, Vb, Wb)) : (c = jf(b), vf(a.g, c.A, c.g))))
    };
    zf = function(a, b, c, d, e) {
        b = b instanceof _.D ? b.F : Array.isArray(b) ? _.A(b, d[0], d[1]) : void 0;
        null != b && (c = xf(a, c), e(b, a), yf(a, c))
    };
    Bf = function(a) {
        var b = _.Af();
        if (!a) throw Error(b && b() || String(a));
    };
    _.Af = function() {
        var a = Cf;
        Cf = void 0;
        return a
    };
    Ff = function(a) {
        return function() {
            var b = new Df;
            Xe(this.F, b, We(a));
            Ef(b, b.g.end());
            for (var c = new Uint8Array(b.A), d = b.l, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.l = [c];
            return c
        }
    };
    Gf = function(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Ad(a, kc(b))
            }
            return b
        }
    };
    Hf = function(a) {
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
        return _.If(Jf).A(a.g, a.defaultValue)
    };
    _.Kf = function(a) {
        return _.If(Jf).l(a.g, a.defaultValue)
    };
    Lf = function(a) {
        return _.If(Jf).j(a.g, a.defaultValue)
    };
    Mf = function(a) {
        return _.If(Jf).M(a.g, a.defaultValue)
    };
    Nf = function(a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    Pf = function(a) {
        return Of(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (_.H = b.toString(2), _.z(_.H, "padStart")).call(_.H, 8, "0")
        }).join("")
    };
    Qf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    };
    Rf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };
    Sf = function(a, b) {
        a = Pf(a);
        return a.length < b ? _.z(a, "padEnd").call(a, b, "0") : a
    };
    Tf = function(a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    _.Uf = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    };
    _.Vf = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    Wf = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    _.Xf = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(Wf("domLoading", a) || Infinity, Wf("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(Wf("responseEnd", a), Wf("navigationStart", a)) : b
    };
    $f = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.Yf("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && ea(a.google_image_requests, f);
                _.Zf(f, "load", g);
                _.Zf(f, "error", g)
            };
            _.ob(f, "load", g);
            _.ob(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    bg = function(a, b) {
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
            return ag(d, b), ""
        }
    };
    ag = function(a, b) {
        try {
            cg({
                m: _.dg(a instanceof Error ? a : Error(String(a))),
                b: _.eg(b, 1, 0) || null,
                v: _.I(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    };
    fg = function(a, b, c, d, e, f) {
        try {
            var g = a.g,
                h = _.Yf("SCRIPT", g);
            h.async = !0;
            nb(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function() {
                0 < c ? fg(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    };
    hg = function(a, b, c, d) {
        c = void 0 === c ? function() {} : c;
        d = void 0 === d ? function() {} : d;
        fg(gg(a), b, 0, !1, c, d)
    };
    ig = function(a) {
        return a[_.z(_.u.Symbol, "iterator")]()
    };
    lg = function(a) {
        var b = jg(kg(a.location.href));
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    };
    mg = function(a) {
        var b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = jg(kg(a.location.href)).get("fctype")) && -1 !== b.indexOf(a) ? a : null
    };
    Fg = function(a) {
        var b = kg(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        _.z(Object, "assign").call(Object, a, c);
        if (a.port && ":" === a.port[0]) throw Error("port should not start with ':'");
        a.hash && "#" != a.hash[0] && (a.hash = "#" + a.hash);
        c.search ? "?" != c.search[0] && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + Eg(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol + "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = kg(b).toString();
        "/" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
        return 1E3 >= a.toString().length ? a : null
    };
    Gg = function(a) {
        a && "function" == typeof a.za && a.za()
    };
    Lg = function(a) {
        a = Hg(a.data.__fciReturn);
        return {
            payload: a,
            Sg: _.Ig(a, 1)
        }
    };
    Og = function() {
        var a = Ca();
        return a ? _.Mg("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return _.Ng(a, b)
        }) || _.Ng(a, "OMI/") && !_.Ng(a, "XiaoMi/") ? !0 : _.Ng(a, "Presto") && _.Ng(a, "Linux") && !_.Ng(a, "X11") && !_.Ng(a, "Android") && !_.Ng(a, "Mobi") : !1
    };
    Qg = function() {
        var a = Pg;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    Sg = function() {
        var a = Rg;
        return function(b) {
            return b instanceof a
        }
    };
    Ug = function(a) {
        return function(b) {
            if (!Tg(b)) return !1;
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
    Vg = function() {
        return function(a) {
            return Array.isArray(a)
        }
    };
    Yg = function() {
        return function(a) {
            return Wg(a) ? a.every(function(b) {
                return Xg(b)
            }) : !1
        }
    };
    Zg = function(a) {
        return !!a && a.top === a
    };
    $g = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Sg: b.__uspapiReturn.callId
        }
    };
    ah = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Sg: b.__gppReturn.callId
        }
    };
    bh = function(a) {
        return !a || 1 === a.length && -1 === a[0]
    };
    dh = function(a, b) {
        b = void 0 === b ? window : b;
        if (ch(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    eh = function(a) {
        return "null" !== a.origin
    };
    gh = function(a, b, c) {
        b = ch(b) && eh(c) ? c.document.cookie : null;
        return null === b ? null : (new fh({
            cookie: b
        })).get(a) || ""
    };
    hh = function(a, b, c) {
        return b[a] || c
    };
    jh = function(a) {
        _.If(ih).l(a)
    };
    kh = function() {
        return _.If(ih).j()
    };
    lh = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.H = c.allowedFeatures(), _.z(_.H, "includes")).call(_.H, a))
    };
    mh = function(a, b, c) {
        return !!(a && "runAdAuction" in b && b.runAdAuction instanceof Function && lh("run-ad-auction", c))
    };
    nh = function(a, b) {
        return !!(a && "browsingTopics" in b && b.browsingTopics instanceof Function && lh("browsing-topics", b))
    };
    oh = function(a, b, c) {
        c = void 0 === c ? b.document : c;
        return !!(a && "sharedStorage" in b && b.sharedStorage && lh("shared-storage", c))
    };
    rh = function(a) {
        a = void 0 === a ? _.ph() : a;
        return function(b) {
            return _.qh(b + " + " + a) % 1E3
        }
    };
    th = function(a) {
        _.If(sh).g(a)
    };
    xh = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.t : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        uh(_.If(ih), a);
        vh(b);
        wh(_.If(sh), b);
        _.If(Jf).g()
    };
    vh = function(a) {
        var b = _.If(Jf);
        b.A = function(c, d) {
            return hh(5, a, function() {
                return !1
            })(c, d, 2)
        };
        b.l = function(c, d) {
            return hh(6, a, function() {
                return 0
            })(c, d, 2)
        };
        b.j = function(c, d) {
            return hh(7, a, function() {
                return ""
            })(c, d, 2)
        };
        b.M = function(c, d) {
            return hh(8, a, function() {
                return []
            })(c, d, 2)
        };
        b.g = function() {
            hh(15, a, function() {})(2)
        }
    };
    Mh = function(a, b, c, d) {
        var e = new _.Jh,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.Zf(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (m) {}
            },
            h = Kh(a);
        return h ? (_.ob(a, "message", g), f = c(h), e.promise) : (c = Lh(a)) ? (f = String(Math.floor(2147483647 * _.ph())), _.ob(a, "message", g), b(c, f), e.promise) : null
    };
    Nh = function(a) {
        return Mh(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Oh = function(a) {
        return !!Kh(a) || !!Lh(a)
    };
    Kh = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    Lh = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    Ph = function(a) {
        var b, c;
        return null != (c = (_.H = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.z(_.H, "find")).call(_.H, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Qh = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(_.qh(a))) ? d : 0
    };
    $h = function(a, b, c, d, e) {
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
                for (r = p.next(); !r.done; r = p.next()) r = r.value, g = Rh(r, d, f), g = Sh(a, Th(Uh(Vh(Wh(new Xh, r.bidder), 1), 6, !0), g)), Yh(r.bidder, e, g), "number" === typeof r.timeToRespond && _.Zh(g, 2, Math.round(r.timeToRespond))
            }
        }
    };
    Yh = function(a, b, c) {
        for (var d = []; a && !_.z(d, "includes").call(d, a);) {
            d.unshift(a);
            var e = void 0,
                f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.Ie(c, 10, d, _.qd)
    };
    ci = function(a, b, c) {
        null != _.Uc(_.ai(a, 3)) || (c === b.adUnitCode ? _.bi(a, 3, 1) : c === b.Wc && _.bi(a, 3, 2))
    };
    ki = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : _.eg(f, 1, 0)) && _.di(b, 5, f);
        ei(a, fi, 5) || (f ? 1 === _.eg(f, 1, 0) ? gi(a, f) : gi(a, hi(ii(ji(new fi, e), 1), Qh(c, d))) : gi(a, ii(ji(new fi, e), Qh(c, d) ? 2 : 3)))
    };
    Rh = function(a, b, c) {
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
            v = new li;
        "number" === typeof d && (_.Zh(v, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === _.Ig(v, 2) || _.Zh(v, 8, d)));
        "string" === typeof f && mi(v, 3, f);
        (_.H = ["string", "number"], _.z(_.H, "includes")).call(_.H, typeof h) && (f = new ni, h = mi(f, 1, String(h)), _.di(v, 6, h));
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
                d = oi(v, 4, 2);
                _.Ie(v, 4, d.concat(f), _.qd)
            }
        switch (n || "banner") {
            case "banner":
                _.bi(v, 5, 1);
                break;
            case "native":
                _.bi(v, 5, 2);
                break;
            case "video":
                _.bi(v, 5, 3);
                b = new pi;
                var B;
                if ("adpod" === (null == c ? void 0 : null == (B = c.video) ? void 0 : B.context)) {
                    var C, F = null == c ? void 0 : null == (C = c.video) ? void 0 : C.adPodDurationSec;
                    _.Zh(b, 1, F)
                } else C = null == c ? void 0 : null == (F = c.video) ? void 0 : F.maxduration, _.Zh(b, 1, C);
                var G;
                if ("number" === typeof(null == c ? void 0 : null == (G = c.video) ? void 0 : G.skip)) {
                    var P;
                    c = !!(null == c ? 0 : null == (P = c.video) ? 0 : P.skip);
                    Uh(b, 2, c)
                }
                var R;
                a = null == (R = a.meta) ? void 0 : R.adServerCatId;
                R = mi(b, 3, a);
                if ("object" !== typeof k) k = null;
                else {
                    var K, Z;
                    a = String(null != (Z = null != (K = k["hb_pb_cat_dur_" + l]) ? K : k.hb_pb_cat_dur) ? Z : "");
                    var qa, wa, aa, ha;
                    K = String(null != (ha = null != (aa = null != (wa = null != (qa = k["hb_cache_id_" + l]) ? qa : k["hb_uuid_" + l]) ? wa : k.hb_cache_id) ? aa : k.hb_uuid) ? ha : "");
                    k = a && K ? a + "_" + K : K ? K : null
                }
                mi(R, 4, k);
                _.di(v, 9, b)
        }
        _.z(Number, "isFinite").call(Number, p) && _.z(Number, "isFinite").call(Number, r) && (k = new qi, r = _.ri(k, 1, Math.round(r)), p = _.ri(r, 2, Math.round(p)), _.di(v, 7, p));
        "string" === typeof m && mi(v, 1, m);
        return v
    };
    ti = function(a, b) {
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
            "bidTimeout" === h && e.push.apply(e, _.si(g));
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
            Bi: !1
        });
        e = _.y(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Bi = !0;
        return d
    };
    Ei = function(a, b, c, d, e, f, g) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? new _.u.Map : d;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? new _.u.Map : f;
        g = void 0 === g ? new ui : g;
        var h = new _.u.Map,
            k = (0, a.getEvents)(),
            l = k.filter(function(aa) {
                var ha = aa.args;
                return "auctionEnd" === aa.eventType && ha.auctionId
            }),
            m = new vi,
            n = function(aa) {
                return aa === b.Wc || aa === b.adUnitCode
            },
            p, r, v, w = null != (v = wi.get((null != (p = b.Wc) ? p : "") + (null != (r = b.adUnitCode) ? r : ""))) ? v : 0,
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
                wi.set((null != (F = b.Wc) ? F : "") + (null != (G = b.adUnitCode) ? G : ""), l);
                F = xi(m);
                a.version && yi.test(a.version) && mi(F, 6, a.version);
                var P, R;
                zi(Ai(F, null == (P = a.getConfig) ? void 0 : null == (R = P.call(a).cache) ? void 0 : R.url), g);
                g = Bi(function() {
                    return ti(k, C)
                });
                P = _.y(x);
                G = P.next();
                for (R = {}; !G.done; R = {
                        bidderCode: void 0,
                        oj: void 0
                    }, G = P.next())
                    for (x = G.value, R.bidderCode = x.bidderCode, l = x.bids, G = x.timeout, R.oj = x.src, x = x.auctionStart, l = _.y(l), r = l.next(), p = {}; !r.done; p = {
                            ze: void 0
                        }, r = l.next()) {
                        var K = r.value;
                        p.ze = K.bidId;
                        var Z = K.transactionId;
                        r = K.adUnitCode;
                        v = K.getFloor;
                        K = K.mediaTypes;
                        if (p.ze && n(r)) {
                            ci(F, b, r);
                            Z && (_.Ci(F, 4) || mi(F, 4, Z), h.has(Z) || h.set(Z, x));
                            null == Di(F, 8) && _.z(Number, "isFinite").call(Number, G) && _.ri(F, 8, G);
                            var qa = _.z(B, "find").call(B, function(aa) {
                                return function(ha) {
                                    return ha.requestId === aa.ze
                                }
                            }(p));
                            Z = Sh(F, function(aa) {
                                return function() {
                                    var ha = Wh(new Xh, aa.bidderCode);
                                    Yh(aa.bidderCode, a, ha);
                                    switch (aa.oj) {
                                        case "client":
                                            _.bi(ha, 7, 1);
                                            break;
                                        case "s2s":
                                            _.bi(ha, 7, 2)
                                    }
                                    return ha
                                }
                            }(R)());
                            ki(F, Z, r, d, e, f, v);
                            qa ? (Vh(Z, 1), "number" === typeof qa.timeToRespond && _.z(Number, "isFinite").call(Number, qa.timeToRespond) && _.Zh(Z, 2, Math.round(qa.timeToRespond)), p = Rh(qa, c, K), Th(Z, p)) : (p = g().get(p.ze)) && !p.Bi ? (Vh(Z, 2), _.z(Number, "isFinite").call(Number, p.latency) && _.Zh(Z, 2, Math.round(p.latency))) : (p = Vh(Z, 3), _.z(Number, "isFinite").call(Number, G) && _.Zh(p, 2, Math.round(G)))
                        }
                    }
                var wa;
                (null == (wa = a.getConfig) ? 0 : wa.call(a).useBidCache) && $h(F, b, C, c, a);
                return m
            }
        }
    };
    Fi = function(a, b) {
        var c, d;
        return _.qb(function(e) {
            if (1 == e.g) return c = b ? a.filter(function(f) {
                return !f.Hd
            }) : a, e.yield(_.u.Promise.all(c.map(function(f) {
                return f.Uh.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function(f) {
                return f.Hd
            });
            return e.yield(_.u.Promise.race([_.u.Promise.all(d.map(function(f) {
                return f.Uh.promise
            })), new _.u.Promise(function(f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    };
    _.Gi = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.Ii = function(a) {
        var b = _.Hi(a);
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    Ji = function(a, b, c) {
        b = void 0 === b ? 420 : b;
        return (a = _.Hi(a, void 0 === c ? !1 : c)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    Ki = function(a) {
        return (a = _.Ii(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Li = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.Mi = function(a) {
        return _.Li(a).clientHeight
    };
    _.Hi = function(a, b) {
        var c = _.Li(a).clientWidth;
        return (void 0 === b ? 0 : b) ? c * _.Ni(a) : c
    };
    _.Oi = function(a, b) {
        var c = _.Li(a);
        return b ? (a = _.Mi(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    };
    _.Pi = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    Qi = function(a, b, c, d) {
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
    _.Ri = function(a) {
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
    Si = function(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };
    _.Xi = function(a) {
        var b = a.pa,
            c = a.Eg,
            d = a.ff,
            e = a.Eh,
            f = a.Ba,
            g = a.hk,
            h = a.Lm;
        a = 0;
        try {
            a |= b !== b.top ? 512 : 0;
            var k = Math.min(b.screen.width || 0, b.screen.height || 0);
            a |= k ? 320 > k ? 8192 : 0 : 2048;
            a |= b.navigator && Ti(b.navigator.userAgent) ? 1048576 : 0;
            if (c) {
                k = a;
                var l = b.innerHeight;
                var m = ((void 0 === h ? 0 : h) ? _.Ni(b) * l : l) >= c;
                var n = k | (m ? 0 : 1024)
            } else n = a | (_.Gi(b) ? 0 : 8);
            a = n;
            a |= Ji(b, d, h);
            h || (a |= Ki(b))
        } catch (p) {
            a |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = _.Ri({
                    Af: 0,
                    Ke: b.innerWidth,
                    lf: 3,
                    Bf: 0,
                    Le: Math.min(Math.round(b.innerWidth / 320 * 50), Ui) + 15,
                    mf: 3
                });
                null != Vi(Wi(b, c), d) && (a |= 16777216);
                break;
            case 1:
                c = f, c = void 0 === c ? null : c, d = b.innerWidth, e = b.innerHeight, n = Math.min(Math.round(b.innerWidth / 320 * 50), Ui) + 15, m = _.Ri({
                    Af: 0,
                    Ke: d,
                    lf: 3,
                    Bf: e - n,
                    Le: e,
                    mf: 3
                }), 25 < n && m.push({
                    x: d - 25,
                    y: e - 25
                }), null != Vi(Wi(b, c), m) && (a |= 16777216)
        }
        g && (f = void 0 === f ? null : f, f = void 0 === f ? null : f, g = b.innerHeight, g = _.Ri({
            Af: 0,
            Ke: b.innerWidth,
            lf: 10,
            Bf: g - 66,
            Le: g,
            mf: 10
        }), g = null != Vi(Wi(b, f), g));
        g && (a |= 16777216);
        return a
    };
    Ti = function(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    };
    Wi = function(a, b) {
        return new _.Yi(a, {
            ci: Zi(a, void 0 === b ? null : b)
        })
    };
    Zi = function(a, b) {
        if (b = void 0 === b ? null : b) {
            var c = b;
            return function(d, e, f) {
                var g, h;
                _.$i(c, "ach_evt", {
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
    dj = function(a) {
        var b;
        var c = new aj;
        c = _.bj(c, 2, a.pvsid);
        c = _.cj(c, 3, a.mb);
        c = _.cj(c, 6, a.Zf);
        var d = null != (b = a.co) ? b : _.Uf();
        b = _.bj(c, 1, d);
        c = kh();
        b = _.Ie(b, 4, c, Vc);
        a.payload && (c = a.payload(), _.di(b, 7, c));
        a.Mc && _.bj(b, 5, a.Mc);
        return b
    };
    oj = function(a) {
        return dj(_.z(Object, "assign").call(Object, {}, a, {
            payload: function() {
                var b = new ej;
                var c = new fj;
                c = gj(c, 4, hj, dd(a.xl));
                return _.ij(b, 4, nj, c)
            }
        }))
    };
    _.pj = function(a) {
        return dj(_.z(Object, "assign").call(Object, {}, a, {
            payload: function() {
                var b = new ej;
                var c = new fj;
                c = gj(c, 3, hj, Tc(a.U));
                return _.ij(b, 4, nj, c)
            }
        }))
    };
    rj = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.qj(b, function(d) {
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
            if (!Array.isArray(d) || _.Mg(d, function(e) {
                    return !_.z(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = rj(b, d);
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
        return a.position + "-" + yj(a.ja) + "x" + yj(a.sa) + "-" + yj(a.scrollY + a.ld) + "Y"
    };
    Aj = function(a) {
        return "f-" + zj({
            position: a.position,
            ld: a.ld,
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
                            ld: e,
                            ja: c.ja,
                            sa: c.sa
                        });
                        b.set(l, Bj(b.get(l), g))
                    }
                    if (g < c.ja && h > c.ja - k) {
                        l = Aj({
                            position: "right",
                            ld: e,
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
            d = b.zc,
            e = "f-" + yj(b.ja) + "x" + yj(b.sa);
        a.has(e) || (a.set(e, 0), e = wj(c), d ? (Ej(a, b, e.filter(function(f) {
            return xj(c, f)
        })), Fj(c, e.filter(function(f) {
            return !xj(c, f)
        }))) : Ej(a, b, e))
    };
    Ej = function(a, b, c) {
        var d = b.tc,
            e = b.pa;
        _.Cj(e).sideRailProcessedFixedElements.clear();
        d = new _.u.Set([].concat(_.si(_.z(Array, "from").call(Array, e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), _.si(d)));
        c = _.y(c);
        for (e = c.next(); !e.done; e = c.next()) e = e.value, uj(e, d) || Dj(e, a, b)
    };
    Hj = function(a) {
        if (1200 > a.ja || 650 > a.sa) return null;
        var b = _.Cj(a.pa).sideRailAvailableSpace;
        a.Ai || Gj(b, {
            pa: a.pa,
            ja: a.ja,
            sa: a.sa,
            tc: a.tc,
            zc: a.zc
        });
        for (var c = [], d = .9 * a.sa, e = _.Pi(a.pa), f = (a.sa - d) / 2, g = f, h = d / 7, k = 0; 8 > k; k++) {
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
                w = Aj({
                    position: p,
                    ld: n,
                    ja: v.ja,
                    sa: v.sa
                }),
                x = zj({
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
                    var G = Si(v.pa.document, {
                            x: Math.round(C),
                            y: Math.round(n)
                        }),
                        P = uj(G, v.tc),
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
        b = a.jj;
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
        if (a.la) return a.la.Db(1228, function() {
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
    Pj = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.z(Nj, "includes").call(Nj, e.height) || (null == e ? 0 : e.maxHeight) && !_.z(Oj, "includes").call(Oj, e.maxHeight) || Kj(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.z(Nj, "includes").call(Nj, g) || !!f && !_.z(Oj, "includes").call(Oj, f)
        }, c, d) ? !1 : !0
    };
    Rj = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        Qj(a, function(e) {
            return d = Pj(e, b, 10, 10)
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
        2 === e.g && (e = {}, cg(_.z(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(Xj(window)), e.em = c, e.lid = b, e.eids = kh().join(), e), d), "esp"))
    };
    Zj = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new _.u.Promise(function(c) {
            var d = function() {
                c(b());
                _.Zf(a, "load", d)
            };
            _.ob(a, "load", d)
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
            return dk(c, 1) === b && _.Ci(c, 2)
        })
    };
    fk = function(a, b) {
        return _.bk(a, ck, 2).some(function(c) {
            return dk(c, 1) === b && _.Ci(c, 2)
        })
    };
    lk = function(a, b, c, d) {
        if (b)
            for (var e = _.y(ak(b)), f = e.next(), g = {}; !f.done; g = {
                    yc: void 0
                }, f = e.next())
                if (g.yc = f.value, (f = gk().get(g.yc, b).Rc) && !fk(a, g.yc)) {
                    var h = hk(f);
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
                        Uh(f, 9, h);
                        (h = dk(f, 2)) && 1024 < h.length && (k = {}, Yj(55, g.yc, null, (k.sl = String(h.length), k)), _.ik(f.ib(jk(108)), 2));
                        kk(a, 2, ck, f);
                        k = f = void 0;
                        var l = {};
                        Yj(19, g.yc, null, (l.hs = h ? "1" : "0", l.sl = String(null != (k = null == (f = h) ? void 0 : f.length) ? k : -1), l))
                    }
                }
    };
    mk = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    yk = function(a, b, c, d, e, f) {
        f = void 0 === f ? nk : f;
        var g, h, k, l, m, n, p, r, v, w, x, B, C;
        return _.qb(function(F) {
            return 1 == F.g ? (g = new ok, h = new pk(a, c, e), J(g, h), J(g, new qk(h.o, void 0, d, e)), k = new rk(h.j, e), J(g, k), l = new sk(k.j, e), J(g, l), m = new tk(b, l.j, e), J(g, m), J(g, new qk(m.o, void 0, d, e)), n = new uk(m.j, m.H, f.oh ? 1024 : 300, f.oh ? 1024 : 1E3, e), J(g, n), J(g, new qk(n.j, void 0, d, e)), p = new vk(e), J(g, p), r = new wk(p.output, l.o, e), J(g, r), v = new tk(b, r.j, e), J(g, v), w = new qk(v.j, void 0, d, e), J(g, w), xk(g), C = a, F.yield(n.j.promise, 2)) : F.return({
                id: C,
                collectorGeneratedData: null != (B = null == (x = F.A) ? void 0 : dk(x, 2)) ? B : null
            })
        })
    };
    Ek = function(a, b, c, d) {
        var e = {
            oh: _.E(zk)
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
        }), "complete" === a.document.readyState ? c(a, b) : _.ob(a, "load", function() {
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
        var c = new _.Jh;
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
    Xk = function(a, b) {
        var c = Uk(a);
        return c.messageChannelSendRequestFn ? _.u.Promise.resolve(c.messageChannelSendRequestFn) : new _.u.Promise(function(d) {
            function e(k) {
                return h.g(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.Yf("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.fb(Vk).toString();
            var g = (new URL(Vk.toString())).origin,
                h = Wk({
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
    dl = function(a, b, c, d) {
        var e = {
            skipTopicsObservation: _.E(Yk),
            includeBuyerTopics: _.E(Zk)
        };
        e = void 0 === e ? {} : e;
        var f = $k(d),
            g = f.De,
            h = f.Ce;
        b = Uk(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics
        }).then(function(k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && ta(k, g)));
            else if (Qg()(k)) l || (l = k !== g);
            else return c.Cb(989, Error(JSON.stringify(k))), 7;
            if (l && d) try {
                var m = new al;
                var n = _.Zh(m, 2, _.Uf());
                k instanceof Uint8Array ? gj(n, 1, bl, vc(k, !1, !1)) : gj(n, 3, bl, Tc(k));
                d.setItem("goog:cached:topics", cl(n))
            } catch (p) {}
            return k
        }), b.getTopicsPromise = a);
        return g && !h ? _.u.Promise.resolve(g) : b.getTopicsPromise
    };
    $k = function(a) {
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
                    e = _.eg(c, il(c, bl, 3), 0);
                    break;
                default:
                    kb(d)
            }
            var f = _.Ig(c, 2) + 6048E5 < _.Uf();
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
    Uk = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    ll = function(a) {
        if (Ja()) {
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
        cg({
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
        b = _.bj(b, 1, c);
        b = _.bj(b, 2, a.pvsid);
        b = _.cj(b, 3, a.zb || a.mb);
        c = kh();
        b = _.Ie(b, 4, c, Vc);
        b = _.bj(b, 5, a.Gi);
        a = _.cj(b, 12, a.Zf);
        var d;
        if (b = null == (d = _.u.globalThis.performance) ? void 0 : d.memory) {
            d = new ql;
            try {
                _.bj(d, 1, b.jsHeapSizeLimit)
            } catch (e) {}
            try {
                _.bj(d, 2, b.totalJSHeapSize)
            } catch (e) {}
            try {
                _.bj(d, 3, b.usedJSHeapSize)
            } catch (e) {}
        } else d = void 0;
        d && _.di(a, 10, d);
        return a
    };
    xl = function(a) {
        var b = _.Xf();
        if (a.Oc) {
            var c = a.Ra,
                d = c.Nc,
                e = rl(a),
                f = new sl;
            b = _.bj(f, 2, b);
            f = new tl;
            f = _.ul(f, 1, a.Oc);
            f = _.vl(f, 2, a.Gi);
            f = _.ul(f, 3, a.lj);
            f = _.vl(f, 4, a.Fi);
            f = _.ul(f, 5, a.fh);
            a = _.vl(f, 6, a.fg);
            a = _.di(b, 3, a);
            e = _.ij(e, 6, wl, a);
            d.call(c, e)
        }
    };
    Al = function(a) {
        if (!a.Oc) return function() {};
        var b = ol();
        a.Ra.Nc(yl(rl(a)));
        return function() {
            var c = a.Ra,
                d = c.Nc,
                e = rl(a);
            var f = new zl;
            var g = ol() - b;
            f = _.bj(f, 1, g);
            e = _.ij(e, 14, wl, f);
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
            var e = _.Sa.apply(0, arguments),
                f = Cl(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Oc && a.lj) {
                    var h = a.Ra,
                        k = h.Nc,
                        l = rl(a);
                    var m = _.bj(l, 5, a.Fi);
                    var n = new Dl;
                    var p = _.L(n, 1, b);
                    var r = _.vl(p, 2, g);
                    var v = _.ij(m, 9, wl, r);
                    k.call(h, v)
                }
            } catch (w) {}
            return f
        }
    };
    Cl = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = _.Sa.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.If(El);
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
        if (a.fh) {
            c = _.Jl(c) ? c.error : c;
            var d = new Kl,
                e = new Ll;
            try {
                var f = Xj(window);
                _.bj(e, 1, f)
            } catch (p) {}
            try {
                var g = kh();
                _.Ie(e, 2, g, Vc)
            } catch (p) {}
            try {
                _.cj(e, 3, window.document.URL)
            } catch (p) {}
            f = _.di(d, 2, e);
            g = new Ml;
            b = _.L(g, 1, b);
            try {
                var h = Xg(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.cj(b, 2, h)
            } catch (p) {}
            try {
                var k = Xg(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.cj(b, 3, k)
            } catch (p) {}
            try {
                var l = Xg(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.Ie(b, 4, l.split(/\n\s*/), _.qd)
            } catch (p) {}
            h = _.di(f, 1, b);
            k = new Nl;
            try {
                _.cj(k, 1, a.zb || a.mb)
            } catch (p) {}
            try {
                var m = Ol();
                _.vl(k, 2, m)
            } catch (p) {}
            try {
                var n = [].concat(_.si(_.z(Pl, "keys").call(Pl)));
                _.Ie(k, 3, n, _.qd)
            } catch (p) {}
            _.ij(h, 4, Ql, k);
            _.bj(h, 5, a.fg);
            a.Ra.im(h)
        }
    };
    Tl = function(a, b) {
        var c = Rl.get(a);
        c || (b = c = b(), Sl.set(b, a), Rl.set(a, b));
        return c
    };
    N = function(a) {
        return function() {
            return new Ul(a, [].concat(_.si(_.Sa.apply(0, arguments))))
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
        _.If(sm).g = !0;
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
        return Zg(a) ? b.URL : b.referrer
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
            var f = _.ie(b[e]),
                g = _.If(Om),
                h = g.g.get(e);
            null == h ? h = ++_.If(El).l : g.g.delete(e);
            _.ik(f, 20, _.Yc(h));
            c[e] = f
        }
        return {
            ba: _.ie(a),
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
            h = Bi(function() {
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
    pn = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a.tag_origin = "to", a
    };
    sn = function(a, b, c, d, e) {
        if ("string" === typeof a && a.length && void 0 !== pn()[a] && "string" === typeof b) {
            var f = (_.H = c.Pa(), _.z(_.H, "find")).call(_.H, function(g) {
                return dk(g, 1) === a
            });
            f ? em(f, [b]) : (f = qn(fm(new gm, a), b), kk(c, 14, gm, f));
            e.info(rn(a, String(b), d))
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
        for (var a = Lf(vn) || "0-0-0", b = a.split("-").map(function(e) {
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
        for (var a = Mf(yn), b = [], c = 0; c < a.length; c += 2) _.zn(a[c], a[c + 1], b);
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
                    "boolean" === typeof e ? Uh(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? Uh(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? Uh(d, 3, b.sandbox) : c = g = !0;
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
            if (c = c.value) null != Gn(c, 1) && Uh(b, 1, _.Q(c, 1)), null != Gn(c, 2) && Uh(b, 2, _.Q(c, 2)), null != Gn(c, 3) && Uh(b, 3, _.Q(c, 3));
        return b
    };
    In = function(a, b) {
        var c = {};
        b = (c[0] = rh(b.pvsid), c);
        return _.If(ih).A(a, b)
    };
    Kn = function(a, b) {
        var c;
        return null == (c = _.Jn(a, "__gads", b)) ? void 0 : _.z(c.split(":"), "find").call(c.split(":"), function(d) {
            return 0 === d.indexOf("ID=")
        })
    };
    Ln = function(a, b, c, d) {
        (c = Kn(c, d)) ? (d = {}, b = (d[0] = rh(b.pvsid), d[1] = rh(c), d), _.If(ih).A(a, b)) : In(a, b)
    };
    Pn = function(a) {
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
        }).filter(Sg())
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
        Uh(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Ti: dn(a, b, new co(a, f, c)),
            Fa: g
        }
    };
    go = function(a, b, c, d, e) {
        return Tl(c, function() {
            return new fo(a, b, c, d, e)
        })
    };
    ho = function(a, b, c, d, e) {
        "string" !== typeof a || "string" !== typeof b || void 0 === pn()[a] ? O(e, Wl("Slot.set", [a, b]), c) : (c = (_.H = d.Pa(), _.z(_.H, "find")).call(_.H, function(f) {
            return dk(f, 1) === a
        })) ? em(c, [b]) : (b = qn(fm(new gm, a), b), kk(d, 3, gm, b))
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
            b = _.ik(b, 1, _.Yc(a[0]));
            a = _.ik(b, 2, _.Yc(a[1]))
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
        c = _.ik(c, 1, _.Yc(b[0]));
        b = _.ik(c, 2, _.Yc(b[1]));
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = qo(a[1]), 0 === a.length) throw new uo("At least one slot size must be present");
        c = new zm;
        b = _.di(c, 1, b);
        return _.pm(b, 2, a)
    };
    wo = function() {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {
            cmd: []
        }
    };
    Ao = function(a, b) {
        _.E(xo) ? (_.ik(a, 28), null !== b && Tg(b) && _.z(Object, "hasOwn").call(Object, b, "enabled") && (b = b.enabled, yo(b) && (b = zo(b), _.di(a, 28, b)))) : void 0 === b || null === b ? _.ik(a, 28) : (b = b.enabled, yo(b) ? (b = zo(b), _.di(a, 28, b)) : void 0 !== b && null !== b || _.ik(a, 28))
    };
    Bo = function(a, b) {
        if (!b) return [];
        var c = [];
        b = _.y((_.H = Ge(b, 26, yd), _.z(_.H, "values")).call(_.H));
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
        b.fifWin && "complete" !== document.readyState ? _.ob(window, "load", function() {
            return window.setTimeout(d, 0)
        }) : d()
    };
    Uo = function(a) {
        var b = window;
        "complete" === _.t.document.readyState ? Il(a, 94, function() {
            wo()._pubconsole_disable_ || null !== So(b) && To(a, b)
        }) : _.ob(_.t, "load", Cl(a, 94, function() {
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
        return c.length ? _.qh(c.join(":")).toString() : "0"
    };
    jp = function(a) {
        if (!_.Sk(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    lp = function(a, b, c, d, e) {
        var f = void 0,
            g = Cl(a.context, b, e);
        _.ob(c, d, g) && (f = function() {
            return void _.Zf(c, d, g)
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
        var n = window.location && "#flexibleAdSlotTest" === window.location.hash ? 1 : _.Kf(vp);
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
            var K = new yp;
            zp(n, R) && K.set(10);
            if (void 0 !== h && pp(n)) {
                var Z, qa = null == (Z = Tm(c, b)) ? void 0 : Z.parentElement,
                    wa;
                Z = qa ? null == (wa = Um(qa, window)) ? void 0 : wa.width : void 0;
                h !== Z && K.set(16)
            }
            R ? (K.set(8), R = Ap(K)) : R = Bp(b, c, w, K);
            wa = Cp(c, n, f);
            K = wa.gl;
            wa = wa.jl;
            Xo(P, a);
            Yo(P, "qid", l);
            Yo(P, "iu", c.getAdUnitPath());
            Yo(P, "e", String(R));
            F && Yo(P, "ofl", String(B));
            G && Yo(P, "ofr", String(C - x));
            Yo(P, "ret", e + "x" + f);
            Yo(P, "req", g);
            Yo(P, "bm", String(d));
            Yo(P, "efh", Number(K));
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
                var K = F[R];
                if (P) {
                    var Z = Um(K, window);
                    if ("hidden" !== Z.visibility && !Ep(K) && !C(e, K)) {
                        d.set(G);
                        "absolute" === Z.position && d.set(11);
                        break
                    }
                } else e === K && (P = !0)
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
                if (h || (h = k === g)) e = Pj(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.z(l, "endsWith").call(l, "px") ? op(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.z(Nj, "includes").call(Nj, l) || (e = !1)
                }
            f || (k = Um(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            gl: e,
            jl: f
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
        var e = _.Yf("DIV");
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
            f = ei(f, Kp, 28) ? _.vm(f, Kp, 28) : _.vm(c, Kp, 34);
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
            Dl: f,
            vm: g
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
            Pk: f,
            Bl: g
        }
    };
    Rp = function(a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = _.y(e);
            g = a.next();
            for (f = {}; !g.done; f = {
                    Tg: void 0
                }, g = a.next()) {
                e = g.value;
                g = e.code;
                e = e.bids;
                var h = void 0;
                if (g && null != (h = e) && h.length && (g = Qh(g, b), f.Tg = g / 1E6, !(0 >= g))) {
                    h = void 0;
                    e = _.y(null != (h = e) ? h : []);
                    var k = e.next();
                    for (h = {}; !k.done; h = {
                            Tb: void 0,
                            vi: void 0
                        }, k = e.next()) k = k.value, h.vi = "function" === typeof k.getFloor ? k.getFloor : void 0, h.Tb = ji(hi(ii(new fi, 4), g), c), k.getFloor = function(l, m) {
                        return function(n) {
                            4 === _.eg(l.Tb, 1, 0) && ii(l.Tb, 1);
                            var p, r = null == (p = l.vi) ? void 0 : p.apply(this, [n]);
                            n = c ? r || {} : {
                                currency: "USD",
                                floor: m.Tg
                            };
                            return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === _.eg(l.Tb, 1, 0) && (n = hi(ii(l.Tb, 6), 1E6 * r.floor), mi(n, 3, r.currency)), r) : (r.floor || 0) > m.Tg ? (1 === _.eg(l.Tb, 1, 0) && hi(ii(l.Tb, 5), 1E6 * r.floor), r) : n : n
                        }
                    }(h, f), d.set(k.getFloor, h.Tb)
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
                Yb: new Yp,
                lc: new Yp,
                kc: new Yp,
                jc: new Yp,
                Uc: new Yp,
                Ic: new Yp,
                tf: new Yp,
                uf: new Yp,
                Lf: new Yp
            },
            e = new ok;
        J(e, new Zp(a, b, c, window, d));
        xk(e);
        return {
            Bh: d,
            Ka: e
        }
    };
    bq = function(a, b, c, d, e, f, g) {
        if (f) {
            var h = {
                    jh: new Yp
                },
                k = new ok;
            a = new aq(a, b, c, d, e, f, g, h);
            J(k, a);
            xk(k);
            return {
                Xj: h,
                Ka: k
            }
        }
    };
    dq = function(a, b, c, d, e) {
        if (b && !(.01 < Math.random())) {
            var f = new ok;
            J(f, new cq(a, c, d, e, b.Yb));
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
        a.jm && a.Ra.gh(dj(_.z(Object, "assign").call(Object, {}, a, {
            Mc: a.Al,
            payload: function() {
                var d = new ej;
                var e = iq(d, jq, 1);
                e = _.ri(e, 1, b);
                _.ri(e, 2, c);
                return d
            }
        })))
    };
    nq = function(a, b, c) {
        c = (c = void 0 === c ? null : c) ? dh(c) : null;
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
            e |= Ji(a, 2500, d);
            d || (e |= Ki(a));
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
    sq = function(a, b, c) {
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
                Eh: c ? a : void 0,
                Lm: _.E(_.qq)
            };
            0 === (0, _.Pp)() && (f.ff = 3E3, f.Eg = 650);
            d |= _.Xi(f)
        } else if (8 === a) d |= nq(b);
        else if (3 === a || 4 === a) {
            var g = a;
            e = !_.E(rq);
            g = void 0 === g ? null : g;
            c = b !== b.top ? 512 : 0;
            Ti(null == (f = b.navigator) ? void 0 : f.userAgent) && (c |= 1048576);
            f = b.innerWidth;
            1200 > f && (c |= 65536);
            var h = b.innerHeight;
            650 > h && (c |= 2097152);
            g && 0 === c && (g = 3 === g ? "left" : "right", (f = _.Jj({
                pa: b,
                Ai: e,
                jj: 1,
                position: g,
                ja: f,
                sa: h,
                tc: new _.u.Set,
                minWidth: 120,
                minHeight: 500,
                zc: !1
            })) ? _.Cj(b).sideRailPlasParam.set(g, f.width + "x" + f.height + "_" + String(g).charAt(0)) : c |= 16);
            d |= c
        } else 11 !== a && 42 !== a && (d |= 32);
        d || (b = _.Cj(b), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return d
    };
    vq = function(a, b, c, d) {
        var e = d.Xh,
            f = d.adUnitPath;
        d = void 0 === d.xb ? !1 : d.xb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && tq(e)) ? uq(a, b, f, c, {
            Sb: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            xb: d
        }) : (b.error(Wl("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    tq = function(a) {
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
    uq = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            Sb: e.Sb,
            format: f,
            xb: e.xb
        });
        a = b.slotId;
        b = b.Fa;
        a && b && (_.bi(b, 15, f), _.kp(a, function() {
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
    wq = function(a, b) {
        var c;
        return !(null != (c = eq(a, 11)) ? !c : !_.Q(b, 10))
    };
    xq = function(a, b, c, d) {
        if (a = Tm(a, b)) {
            var e;
            if (c = null != (e = eq(c, 24)) ? e : _.Q(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Aq = function(a, b) {
        var c = b.L,
            d = b.O;
        b = b.aa;
        a = _.y(a.X);
        for (var e = a.next(); !e.done; e = a.next())
            if (e = e.value, _.yq(c, e)) {
                var f = d,
                    g = f.ba;
                f = f.T[e.getDomId()];
                wq(f, g) && xq(e, b, f, g);
                zq(c, e);
                var h = void 0,
                    k = void 0;
                null != (h = null != (k = eq(f, 10)) ? k : _.Q(g, 11)) && h && xq(e, b, f, g)
            }
        return {}
    };
    Cq = function(a, b, c) {
        var d = new ok;
        a = new Bq(a, b, c);
        J(d, a);
        xk(d)
    };
    Eq = function(a, b) {
        var c, d, e, f, g;
        return _.qb(function(h) {
            c = a;
            d = c.dd;
            e = b;
            f = e.lg;
            return (null != (g = d) ? g : f.dd()) ? h.return(Dq(f)) : h.return(null)
        })
    };
    Iq = function(a, b, c) {
        var d = window,
            e = new ok;
        d = new Fq(d);
        _.S(e, d);
        a = new Gq(a, d, c, _.um(150));
        J(e, a);
        b = new Hq(879, Eq, {
            dd: b ? a.Cc : void 0
        }, {
            lg: d,
            no: !!b
        }, void 0, e.C.g);
        b = J(e, b).output;
        xk(e);
        return {
            Cc: a.Cc,
            mg: b,
            Ka: e
        }
    };
    Jq = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Dh: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Dh: a.length - b.length + 8
        }
    };
    Kq = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Lq = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Kq(a, b)
    };
    Mq = function(a) {
        var b, c;
        return null != (c = null == (b = _.z(a, "find").call(a, function(d) {
            return "page_url" === dk(d, 1)
        })) ? void 0 : km(b)[0]) ? c : null
    };
    Nq = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Oq = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        ml(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    Pq = function(a, b) {
        var c = b.T;
        return !!Mq(b.ba.Pa()) || a.some(function(d) {
            return null !== Mq(c[d.getDomId()].Pa())
        })
    };
    Rq = function() {
        var a = void 0 === a ? window : a;
        Qq = _.Uf(a)
    };
    Sq = function(a, b) {
        var c = _.Yf("DIV");
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
    Tq = function(a, b) {
        if ("undefined" !== typeof IntersectionObserver) return new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    Wq = function(a, b, c, d, e) {
        var f = void 0 === f ? _.u.globalThis.IntersectionObserver : f;
        if (!b) return {
            xg: e
        };
        var g = null != Di(b, 1) ? null != Uq(b) && 0 !== (0, _.Pp)() ? Di(b, 1) * Uq(b) : Di(b, 1) : null;
        if (null == g) return {
            xg: e
        };
        b = new ok;
        a = new Vq(a, d, c, g, e, f);
        J(b, a);
        xk(b);
        return {
            xg: a.output,
            ol: b
        }
    };
    fr = function(a, b, c, d, e) {
        var f = window,
            g = new ok,
            h = J(g, new Xq(a, b, Yq, function(m) {
                return Zq("i-adframe-load", m.detail.data)
            })),
            k = J(g, new Xq(a, b, Yq, function(m) {
                return Zq("i-dismiss", m.detail.data)
            }));
        h = 0 < _.Kf($q) ? J(g, new ar(a, h.output, void 0)).output : h.output;
        h = J(g, new br(a, b, c, h));
        J(g, new cr(a, f, d, e, h.output));
        if (f.top === f) var l = J(g, new dr(a, f, h.output)).output;
        J(g, new er(a, b, c, h.output, k.output, l));
        return g
    };
    Zq = function(a, b) {
        try {
            var c = JSON.parse(b);
            return "sth" === c.googMsgType && c.msg_type === a
        } catch (d) {}
        return !1
    };
    jr = function() {
        var a = {};
        return a[576944485] = new gr, a[578856259] = new hr(function() {
            return _.Kf(ir)
        }), a
    };
    kr = function(a, b) {
        a.V.log(576944485, dj, _.z(Object, "assign").call(Object, {}, a, b))
    };
    lr = function(a) {
        return window.IntersectionObserver && new IntersectionObserver(a, {
            threshold: [.5]
        })
    };
    nr = function(a) {
        return (_.H = [4, 5, 7, 1], _.z(_.H, "includes")).call(_.H, mr(a))
    };
    pr = function(a, b, c) {
        return new or(c, a, Yq, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    sr = function(a, b, c) {
        if (_.z(Object, "keys").call(Object, a).some(function(d) {
                return (_.H = _.z(Object, "values").call(Object, qr), _.z(_.H, "includes")).call(_.H, Number(d))
            })) return !0;
        rr("taxonomies", a, b, c);
        return !1
    };
    vr = function(a, b, c, d, e) {
        if (null == a) rr("taxonomy", a, d, e);
        else {
            var f = Number(a);
            (_.H = _.z(Object, "values").call(Object, hn), _.z(_.H, "includes")).call(_.H, Number(f)) ? a = !0 : (rr("taxonomy", a, d, e), a = !1);
            a && (null == b ? rr("taxonomyData", b, d, e) : tr(b, d, e) && ur(f, b, c, d))
        }
    };
    Er = function(a, b, c, d, e) {
        if (!wr(a)) rr("taxonomy", a, d, e);
        else if (null == b) rr("taxonomyData", b, d, e);
        else if (tr(b, d, e) && xr(_.z(b, "values"), d, b) && (b = yr(a, _.z(b, "values"), d, b), b.size)) {
            b = [].concat(_.si(b));
            e = new zr;
            var f = Ar.get(a);
            e = _.ri(e, 3, f);
            Br(c, Cr(e, b));
            d.info(Dr(En(b), En(a)))
        }
    };
    tr = function(a, b, c) {
        if (Tg(a) && a.hasOwnProperty("values")) return !0;
        rr("taxonomyData", a, b, c);
        return !1
    };
    ur = function(a, b, c, d) {
        if (xr(_.z(b, "values"), d, b)) {
            var e = yr(a, _.z(b, "values"), d, b);
            e.size && (b = (_.H = _.bk(c, zr, 1), _.z(_.H, "find")).call(_.H, function(f) {
                return _.eg(f, 1, 0) === a
            }), e = [].concat(_.si(e)), b ? Cr(b, e) : Br(c, Cr(Fr(new zr, a), e)), d.info(Dr(En(e), En(a))))
        }
    };
    xr = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        rr("taxonomyData.values", a, b, c);
        return !1
    };
    yr = function(a, b, c, d) {
        if (!Yg()(b)) return rr("taxonomyData.values", b, c, d), new _.u.Set;
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
        e && O(c, Gr(En(a), En(10)));
        return d
    };
    rr = function(a, b, c, d) {
        O(c, Dn("googletag.setConfig.pps", En(d), a, En(b)))
    };
    wr = function(a) {
        return Ar.has(a)
    };
    Ir = function(a) {
        return Hr.has(a)
    };
    Mr = function(a, b) {
        if (3 === _.Jr(b)) {
            var c = {
                    ce: new Kr
                },
                d = new ok;
            J(d, new Lr(a, b, c.ce));
            xk(d);
            return {
                Ka: d,
                Nl: c
            }
        }
    };
    Or = function(a, b, c, d, e, f) {
        if (b) {
            var g = {
                    Ug: new Yp
                },
                h = new ok;
            J(h, new Nr(a, b, c, g, d, e, f));
            xk(h);
            return {
                Ka: h,
                vf: g
            }
        }
    };
    Qr = function(a) {
        Pr = a
    };
    Sr = function(a, b, c, d) {
        Ek(b, d, function(e, f) {
            Gl(a, e, f);
            var g, h;
            null == (h = (g = window.console).error) || h.call(g, f)
        }, function() {
            return void O(c, Rr())
        })
    };
    Vr = function(a, b, c) {
        if (!_.E(Tr) && !Xn()) {
            var d = {
                    Ig: new Yp,
                    yb: new Yp
                },
                e = new ok;
            J(e, new Ur(a, b, c, d));
            xk(e);
            return {
                td: d,
                Ka: e
            }
        }
    };
    Xr = function(a, b, c, d, e) {
        var f = new ok;
        a = new Wr(a, b, c, d, e);
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
    Yr = function(a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.z(a, "includes").call(a, 0)
    };
    Zr = function(a) {
        if (Yr(a)) return {
            size: [],
            Zg: !0
        };
        if (Array.isArray(a) && 0 < a.length && "number" !== typeof a[0]) {
            var b = !1;
            a = a.filter(function(c) {
                c = Yr(c);
                b = b || c;
                return !c
            });
            return {
                size: a,
                Zg: b
            }
        }
        return {
            size: a,
            Zg: !1
        }
    };
    as = function(a, b) {
        var c = b.T;
        return Xp(a, function(d) {
            return $r(c[d.getDomId()]).join("&")
        })
    };
    $r = function(a) {
        a = bs(a);
        var b = [];
        _.Cn(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    bs = function(a) {
        for (var b = {}, c = _.y(dm(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.I(d, 1)] = km(d);
        a = oi(a, 8, 2);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    cs = function(a) {
        var b = !1,
            c = _.bk(a, gm, 2).map(function(d) {
                var e = _.I(d, 1);
                b = "excl_cat" === e;
                d = km(d);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = oi(a, 3, 2);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    es = function(a, b, c) {
        var d = window,
            e = !nh(d.isSecureContext, d.document);
        if (oh(d.isSecureContext, d, d.document) || !e) return e = new ok, a = new ds(a, d, b, c), J(e, a), xk(e), a.j
    };
    gs = function(a, b, c, d, e) {
        if (c) {
            var f = {
                    qe: new Yp,
                    re: new Yp,
                    zd: new Yp
                },
                g = new ok;
            J(g, new fs(a, b, c, d, f, e));
            xk(g);
            return {
                Ka: g,
                Cm: f
            }
        }
    };
    hs = function(a) {
        return "gads_privacy_sandbox_td_buyerlist__" + a
    };
    js = function(a, b) {
        return a.filter(function(c) {
            return is(c, 2) > b
        })
    };
    ls = function(a, b) {
        a = new _.u.Map(a.map(function(e) {
            return [_.I(e, 1), e]
        }));
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.get(_.I(c, 1));
            d ? ks(d, Math.max(is(c, 2), is(d, 2))) : a.set(_.I(c, 1), c)
        }
        return _.z(Array, "from").call(Array, _.z(a, "values").call(a))
    };
    ps = function(a, b, c, d) {
        if (ms(b, c, d)) return new _.u.Map;
        c = new _.u.Map(_.z(Object, "entries").call(Object, b).filter(function(k) {
            var l = _.y(k);
            k = l.next().value;
            l = l.next().value;
            return _.z(k, "startsWith").call(k, "gads_privacy_sandbox_td_buyerlist__") && l
        }).map(function(k) {
            var l = _.y(k);
            k = l.next().value;
            l = l.next().value;
            return [k, ns(l)]
        }));
        d = _.y(c);
        for (var e = d.next(); !e.done; e = d.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            f = f.next().value;
            var g = _.bk(f, os, 1),
                h = js(g, a);
            0 === h.length ? (c.delete(e), b.removeItem(e)) : h.length < g.length && (_.pm(f, 1, h), b.setItem(e, cl(f)))
        }
        return c
    };
    ms = function(a, b, c) {
        if (!_.Q(b, 3)) return !1;
        b = String(_.qh(c + "-" + _.I(b, 2) + _.I(b, 4) + _.Q(b, 3)));
        if (a.getItem("gads_privacy_sandbox_tcf_hash") === b) return !1;
        c = _.y(_.z(Object, "keys").call(Object, a).filter(function(e) {
            return _.z(e, "startsWith").call(e, "gads_privacy_sandbox_td_buyerlist__")
        }));
        for (var d = c.next(); !d.done; d = c.next()) a.removeItem(d.value);
        a.setItem("gads_privacy_sandbox_tcf_hash", b);
        return !0
    };
    qs = function(a) {
        return null !== a && _.z(Number, "isFinite").call(Number, a) && 0 <= a
    };
    rs = function(a) {
        return (_.H = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"], _.z(_.H, "includes")).call(_.H, a)
    };
    ts = function(a, b, c, d, e) {
        if (b) {
            var f = b.Wb,
                g = b.Xl;
            if (b.mh && 4 === f) {
                b = new Yp;
                f = new Yp;
                if (!g) return b.G({
                    kind: 1,
                    reason: 1
                }), f.G(!1), {
                    tj: {
                        bj: b,
                        ti: f
                    }
                };
                g = new ok;
                a = new ss(a, c, d, e, b, f);
                J(g, a);
                xk(g);
                return {
                    tj: {
                        bj: b,
                        ti: f
                    },
                    Hm: g
                }
            }
        }
    };
    vs = function(a) {
        var b = a.Vf,
            c = a.Gb,
            d = void 0 === a.Hh ? [] : a.Hh,
            e = a.interestGroupBuyers,
            f = a.Yk,
            g = a.fo;
        a = a.Sl;
        var h = _.Kf(us),
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
            componentAuctions: [e].concat(_.si(d)),
            resolveToConfig: b.resolveToConfig.promise
        };
        c.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        return c
    };
    ws = function(a, b) {
        var c = b.Vf;
        c.topLevelSellerSignals.resolve(a.sellerSignals);
        c.directFromSellerSignals.resolve(a.directFromSellerSignals);
        c.directFromSellerSignalsHeaderAdSlot.resolve(a.directFromSellerSignalsHeaderAdSlot);
        c.resolveToConfig.resolve(!!a.resolveToConfig);
        var d;
        a = null == (d = a.componentAuctions) ? void 0 : _.z(d, "find").call(d, function(m) {
            return rs(m.seller)
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
    ys = function(a, b) {
        if (_.E(xs) && !qs(b)) return [];
        var c = Math.round(b);
        return a.map(function(d) {
            var e = new os;
            d = _.cj(e, 1, d);
            return ks(d, c)
        })
    };
    As = function(a, b, c) {
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
        zs(d)
    };
    Bs = function(a, b, c, d, e) {
        a.Mb.G(e);
        a.Ga.G(c);
        a.Ja.G(d);
        null == b || b.G(!1)
    };
    Js = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n, p, r, v, w;
        return _.qb(function(x) {
            if (1 == x.g) return ("string" !== typeof a || _.z(a, "startsWith").call(a, "urn:")) && Cs.deprecatedURNToURL && Cs.deprecatedReplaceInURN ? x.yield(Cs.deprecatedURNToURL(a), 2) : x.return();
            c = x.A;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Ds)) ? f : []).forEach(function(B) {
                d[B] = e
            });
            g = b.Vk || "";
            (null != (h = c.match(Es)) ? h : []).forEach(function(B) {
                d[B] = g
            });
            k = b.Uj || "";
            (null != (l = c.match(Fs)) ? l : []).forEach(function(B) {
                d[B] = k
            });
            m = b.Qj || "";
            (null != (n = c.match(Gs)) ? n : []).forEach(function(B) {
                d[B] = m
            });
            p = b.Oj || "";
            (null != (r = c.match(Hs)) ? r : []).forEach(function(B) {
                d[B] = p
            });
            v = b.Zl || "";
            (null != (w = c.match(Is)) ? w : []).forEach(function(B) {
                d[B] = v
            });
            return x.yield(Cs.deprecatedReplaceInURN(a, d), 0)
        })
    };
    Ks = function(a) {
        return "function" === typeof FencedFrameConfig && a instanceof FencedFrameConfig
    };
    Ls = function(a, b, c, d, e, f, g, h) {
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
    Ms = function(a, b, c, d, e) {
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
    Ns = function(a, b) {
        var c = b.getEscapedQemQueryId(),
            d = _.I(b, 6);
        xp("pre_run_ad_auction_ping", function(e) {
            Xo(e, a);
            Yo(e, "winner_qid", null != c ? c : "");
            Yo(e, "xfpQid", null != d ? d : "");
            Yo(e, "publisher_tag", "gpt")
        }, 1)
    };
    Ts = function(a, b, c, d) {
        var e = Tm(a, document);
        e && Qi(e, window, d, !0);
        Os(_.If(El), "5", Ps(c.T[a.getDomId()], 20));
        Qs(a, Rs, 801, {
            Qh: null,
            isBackfill: !1
        });
        if (_.yq(b, a) && !an(a, document)) {
            b = c.ba;
            c = c.T[a.getDomId()];
            var f;
            (null != (f = eq(c, 10)) ? f : _.Q(b, 11)) && xq(a, document, c, b)
        }
        Qs(a, Ss, 825, {
            isEmpty: !0
        })
    };
    Vs = function(a) {
        if (!_.E(Us)) return null;
        var b = new _.u.Set;
        a = _.y(_.z(a, "values").call(a));
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, _.Q(c, 2) && _.bk(c, os, 1).forEach(function(d) {
            b.add(_.I(d, 1))
        });
        return 0 < b.size ? _.z(Array, "from").call(Array, b) : null
    };
    Xs = function(a, b, c, d, e, f, g, h, k) {
        if (b) {
            var l = b.Wb;
            if (b.mh && 0 !== l) return b = new ok, a = new Ws(a, l, c, d, e, f, g, h, k), J(b, a), xk(b), {
                Gm: a.j,
                Fm: b
            }
        }
    };
    Ys = function() {
        for (var a = _.y(_.z(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0, c = document.createElement("script"), b = ab(b.textContent), mb(c, b), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    Zs = function(a, b) {
        b = _.y(_.z(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.y(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    bt = function(a, b, c) {
        var d = [];
        c = [].concat(_.si(c.X)).slice();
        if (b) {
            if (!Array.isArray(b)) return O(a, Wl("googletag.destroySlots", [b])), !1;
            la(b);
            d = c.filter(function(e) {
                return _.z(b, "includes").call(b, e.g)
            })
        } else d = c;
        if (!d.length) return !1;
        $s(d);
        at(d);
        return !0
    };
    rt = function(a, b, c, d, e, f, g, h, k, l) {
        var m = wo(),
            n, p, r = M(a, 74, function(w, x, B) {
                return e.defineSlot(a, b, w, x, B)
            }),
            v = {};
        r = (v._loaded_ = !0, v.cmd = [], v._vars_ = m._vars_, v.evalScripts = function() {
            try {
                Ys()
            } catch (B) {
                Gl(a, 297, B);
                var w, x;
                null == (w = window.console) || null == (x = w.error) || x.call(w, B)
            }
        }, v.display = M(a, 95, function(w) {
            ct(c, w, e)
        }), v.defineOutOfPageSlot = M(a, 73, function(w, x) {
            return (w = vq(a, b, e, {
                Xh: x,
                adUnitPath: w
            })) ? w.g : null
        }), v.getVersion = M(a, 946, function() {
            return a.Fc ? String(a.Fc) : a.mb
        }), v.pubads = M(a, 947, function() {
            return go(a, b, c, e, h)
        }), v.companionAds = M(a, 816, function() {
            null != n || (n = new dt(a, b, c, f));
            return Zl(a, b, n)
        }), v.content = M(a, 817, function() {
            null != p || (p = new et(a, b, g));
            return am(a, b, p)
        }), v.setAdIframeTitle = M(a, 729, Qr), v.getEventLog = M(a, 945, function() {
            return new ft(a, b)
        }), v.sizeMapping = M(a, 90, function() {
            return new gt(a, b)
        }), v.enableServices = M(a, 91, function() {
            for (var w = _.y(ht), x = w.next(); !x.done; x = w.next()) x = x.value, x.enabled && b.info(jt()), kt(x)
        }), v.destroySlots = M(a, 75, function(w) {
            return bt(b, w, e)
        }), v.enums = jn(), v.defineSlot = r, v.defineUnit = r, v.getWindowsThatCanCommunicateWithHostpageLibrary = M(a, 955, function(w) {
            return lt(k, w).map(function(x) {
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
            if (Tg(w)) {
                if (_.z(Object, "hasOwn").call(Object, w, "pps")) {
                    var x = w.pps;
                    if (null === x) {
                        var B = mt(d, nt, 33);
                        _.ik(B, 2)
                    } else {
                        B = mt(mt(d, nt, 33), ot, 2);
                        _.ik(B, 1);
                        if (Tg(x) && x.hasOwnProperty("taxonomies")) var C = !0;
                        else O(b, Wl("googletag.setConfig.pps", [x])), C = !1;
                        if (C)
                            if (C = x.taxonomies, Tg(C) && null !== C) {
                                var F;
                                _.z(Object, "keys").call(Object, C).some(wr) ? F = Er : sr(C, b, x) && (F = vr);
                                if (F) {
                                    x = _.y(_.z(Object, "entries").call(Object, C));
                                    for (var G = x.next(); !G.done; G = x.next()) {
                                        var P = _.y(G.value);
                                        G = P.next().value;
                                        P = P.next().value;
                                        F(G, P, B, b, C)
                                    }
                                }
                            } else rr("taxonomies", C, b, x)
                    }
                }
                _.z(Object, "hasOwn").call(Object, w, "adExpansion") && (_.ik(d, 34), B = w.adExpansion, null !== B && Tg(B) && _.z(Object, "hasOwn").call(Object, B, "enabled") && (B = B.enabled, yo(B) && (B = zo(B), _.di(d, 34, B))));
                if (_.z(Object, "hasOwn").call(Object, w, "privacyTreatments")) {
                    w = w.privacyTreatments;
                    _.ik(d, 36);
                    a: {
                        if (null !== w && Tg(w) && _.z(Object, "hasOwn").call(Object, w, "treatments")) {
                            w = w.treatments;
                            if (pt(w) && w.every(Ir)) {
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
                            B = new qt;
                            F = B.F;
                            C = wc(F);
                            yc(fe(B.F));
                            F = pe(F, C, 1, !1);
                            if (Array.isArray(w))
                                for (C = 0; C < w.length; C++) F.push(Nc(w[C]));
                            else
                                for (w = _.y(w), C = w.next(); !C.done; C = w.next()) F.push(Nc(C.value));
                            _.di(d, 36, B)
                        }
                    }
                }
            } else O(b, Wl("googletag.setConfig", [w]))
        }), v.apiReady = !0, v);
        Sr(a, m, b, l);
        Zs(m, r)
    };
    ut = function(a, b) {
        var c = new ok;
        b = new st(a, b);
        J(c, b);
        a = new tt(a, b.j);
        J(c, a);
        xk(c);
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
    Vt = function(a, b, c, d, e, f, g, h, k) {
        var l = window,
            m = bn(),
            n = new ok,
            p = new vt(a, l);
        p = J(n, p).output;
        var r = new ok;
        var v = new wt(a, l);
        J(r, v);
        xk(r);
        r = {
            Il: v.j
        };
        _.E(xt) && J(n, new Et(a, l));
        if (Ja()) {
            v = {
                Vi: new Yp
            };
            var w = new ok;
            J(w, new Ft(a, window, v.Vi));
            xk(w)
        } else v = void 0;
        var x = _.E(Gt);
        w = l.navigator;
        l = mh(l.isSecureContext, l.navigator, l.document);
        l = !x && l;
        x = _.Kf(Ht);
        var B = !!w.getInterestGroupAdAuctionData;
        w = _.E(It) && !!w.createAuctionNonce;
        l = {
            mh: l,
            Wb: x,
            Xl: B,
            Sj: w
        };
        if (e)
            if (_.E(Jt)) {
                var C = ut(a, e);
                B = C.rd;
                x = C.Xc;
                w = C.cd;
                var F = C.Tc;
                var G = C.Lb,
                    P = C.vd,
                    R = C.hc;
                C = C.Kb;
                var K, Z = new Kt(a, document, wo(), b, m, c, null != (K = window.location.hash) ? K : "");
                J(n, Z);
                b = new Lt(a, wo(), null, b, m, c, B);
                J(n, b);
                m = new Mt(a, x);
                J(n, m);
                h = new Nt(a, window, w, h);
                J(n, h);
                if (f = $p(a, f, F)) var qa = f.Bh;
                e = Iq(a, e, h.j);
                K = e.Cc;
                F = e.mg;
                _.S(n, e.Ka);
                e = new Ot(a, F);
                J(n, e);
                f = new Pt(a, F);
                J(n, f);
                c = No(a, c, d, window, K, F, 2).kb;
                if (_.E(Qt)) {
                    K = new Rt(a, window.navigator, c);
                    var wa = K.j;
                    J(n, K)
                }
                K = void 0;
                _.E(St) && (d = new Tt(a, d, window, c), K = d.output, J(n, d));
                if (d = Vr(a, G, c)) var aa = d.td;
                d = es(a, p, c);
                Xr(a, g, k, c, P);
                F = {
                    Kd: qa,
                    td: aa,
                    Oi: h.j,
                    Ih: m.output,
                    Bb: b.Bb,
                    Lb: G,
                    Yc: e.Yc,
                    ei: f.j,
                    hc: R,
                    se: d,
                    jg: K,
                    Nh: wa,
                    Kb: C
                }
            } else {
                a = new Ut(a, b, m, c, d, e, f, g);
                g = new ok;
                _.S(a, g);
                m = ut(a.context, a.g);
                c = m.rd;
                e = m.Xc;
                b = m.cd;
                f = m.Tc;
                qa = m.Lb;
                wa = m.vd;
                aa = m.hc;
                d = m.Kb;
                _.S(a, m.Ml);
                m = new Kt(a.context, document, wo(), a.j, a.l, a.R, null != (C = window.location.hash) ? C : "");
                J(g, m);
                c = new Lt(a.context, wo(), null, a.j, a.l, a.R, c);
                J(g, c);
                e = new Mt(a.context, e);
                J(g, e);
                h = new Nt(a.context, window, b, h);
                J(g, h);
                if (f = $p(a.context, a.fb, f)) G = f.Bh, _.S(a, f.Ka);
                f = Iq(a.context, a.g, h.j);
                b = f.Cc;
                m = f.mg;
                _.S(g, f.Ka);
                f = new Ot(a.context, m);
                J(g, f);
                C = new Pt(a.context, m);
                J(g, C);
                m = No(a.context, a.R, a.L, window, b, m, 2);
                b = m.kb;
                _.S(a, m.Ka);
                _.E(Qt) && (m = new Rt(a.context, window.navigator, b), P = m.j, J(g, m));
                m = void 0;
                _.E(St) && (K = new Tt(a.context, a.L, window, b), m = K.output, J(g, K));
                if (K = Vr(a.context, qa, b)) R = K.td, _.S(a, K.Ka);
                K = es(a.context, p, b);
                _.S(a, Xr(a.context, a.D, k, b, wa));
                xk(g);
                F = {
                    Kd: G,
                    td: R,
                    Oi: h.j,
                    Ih: e.output,
                    Bb: c.Bb,
                    Lb: qa,
                    Yc: f.Yc,
                    ei: C.j,
                    hc: aa,
                    se: K,
                    jg: m,
                    Nh: P,
                    Kb: d
                }
            }
        xk(n);
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
    Wt = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver && new IntersectionObserver(a, b)
    };
    Lu = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F) {
        var G = new ok,
            P = Bm(!0, window),
            R = k.ba,
            K = k.T[e.getDomId()],
            Z = C.Uf,
            qa = C.Ge.kd,
            wa, aa = null == (wa = C.Ib) ? void 0 : wa.se,
            ha = new Xt(a, window);
        J(G, ha);
        var vb = m.height,
            Ta = m.width,
            db = m.tb,
            Ab = m.Na,
            Pa = m.Gd,
            Ib = m.isBackfill,
            jd = m.Fb,
            cc = m.Uk,
            Zb = m.eb,
            Ec = m.Mf,
            jc = m.qh,
            dc = m.vg,
            Id = m.Qb,
            Oc = m.Ye,
            lf = m.Jb,
            ve = m.Sa,
            Jd = m.na,
            ng = m.Vg,
            og = m.lk,
            mf = m.Pf,
            Pc = new Yp;
        Pc.G(p);
        var Kd = new Yt(a, window.top, Pc);
        J(G, Kd);
        var we = new Zt(a, mr(K), P.height, Zb, vb);
        J(G, we);
        var Wa = new $t(a, e, Tm(e, n), e.getDomId(), $m(e), n.documentElement, mr(K), h, f);
        au(G, Wa);
        var Qb = Wa.output,
            nf = new bu(a, ve, Pa, Ib, jd);
        J(G, nf);
        var pg = new cu(a, _.vm(R, du, 5), K, d);
        J(G, pg);
        var yh = new eu(a, window.location.hash, P, e.getAdUnitPath(), K, f, we.output, Ec, Ta, vb, nf.output, Qb);
        au(G, yh);
        var Ld = yh.K,
            Md = new fu(a, R, K, Pa, jd, Ld.Ze);
        J(G, Md);
        var jj = Kd.output,
            kj = Ld.Ga,
            lj = Ld.Ja;
        if (mh(window.isSecureContext, window.navigator, window.document) && !_.E(Gt) && g) {
            var zh = {
                    Jc: new Kr,
                    Ga: new Yp,
                    Ja: new Yp,
                    fd: new Yp
                },
                of = new ok;
            J( of , new gu(a, e, jj, K, h, p, f, kj, lj, Qb, r, k, B, Ab, Jd, zh, v, F));
            xk( of );
            var Ah = {
                Ka: of ,
                Im: zh
            }
        } else Ah = void 0;
        var qg = Ah;
        if (qg) {
            _.S(G, qg.Ka);
            var pf = qg.Im
        }
        var Bh, Ch, Dh = null != (Ch = null == (Bh = pf) ? void 0 : Bh.Ga) ? Ch : Ld.Ga,
            Eh, Fh, Fc = null != (Fh = null == (Eh = pf) ? void 0 : Eh.Ja) ? Fh : Ld.Ja,
            rg, Qc = null == (rg = pf) ? void 0 : rg.Jc,
            sg, kd = null == (sg = pf) ? void 0 : sg.fd,
            Rc = new hu(a, e, R, K, mr(K), n, h, Qb, Md.output, Fc, db, Qc);
        J(G, Rc);
        var tg = new iu(a, Rc.output);
        J(G, tg);
        var ug = new ju(a, e, P, h, tg.output, pg.j, Qc);
        J(G, ug);
        var vg = new ku(a, ug.output, Rc.output, pg.j, Qc);
        J(G, vg);
        var xe = new lu(a, window, P, e, K, Qb, Rc.output, db, Fc, Ld.Ae, Ab);
        au(G, xe);
        var wg = new mu(a, R, K, jc, Dh, Md.output);
        J(G, wg);
        var qf = new nu(a, window, lf, ha.output, Qc);
        J(G, qf);
        var ye = new ou(a, mr(K), n);
        J(G, ye);
        var oc = new pu(a, x, mr(K), Zb, cc, Qc);
        J(G, oc);
        var ze = new qu(a, dc, kd, Pc, Qc);
        J(G, ze);
        var mj = window;
        if (_.E(Yk) && aa) {
            var Ae = new ok;
            J(Ae, new ru(a, mj, mf, aa));
            xk(Ae);
            var xg = Ae
        } else xg = void 0;
        var ld = xg;
        ld && _.S(G, ld);
        var Rb = new su(a, e, h, k, w, l, db, Ab, Ib, Id, Jd, window, Dh, Md.output, vg.output, Qb, Rc.output, Fc, wg.output, xe.Jc, qf.output, ye.output, oc.output, Z, Qc);
        J(G, Rb);
        var Gh = new tu(a, window, e, Rb.o, Pc);
        J(G, Gh);
        var Nd = mr(K);
        switch (Nd) {
            case 2:
            case 3:
                _.E(uu) ? J(G, new vu(a, h, mr(K), e, window, Zb, Rb.j, Qb, oc.output, Fc)) : J(G, new wu(a, h, mr(K), e, window, Zb, Rb.j, Qb, oc.output, Fc));
                break;
            case 5:
                J(G, new xu(a, e, k.Dd, cc, n, Rb.j, Qb, Kd.output, oc.output, B));
                break;
            case 4:
                var Be = new yu(a, e, w, window, Rb.j, Qb);
                _.S(G, Be);
                xk(Be);
                break;
            case 7:
                au(G, fr(a, e, w, Rb.j, Qb));
                break;
            case 8:
            case 9:
                var Hh = Rb.j,
                    rf = Rc.output,
                    sf = window,
                    Bb = new ok,
                    Ih = 8 === Nd ? 3 : 4,
                    Od = new zu(a, x);
                J(Bb, Od);
                J(Bb, new Au(a, sf, Ih, Od.output, Hh, rf, Fc));
                xk(Bb);
                Bb && _.S(G, Bb)
        }
        var yg = new Bu(a, e, Rb.j, n, w);
        J(G, yg);
        var Pd = new Cu(a, e, Du(h, e), window.top);
        J(G, Pd);
        var zg = Rb.j,
            md = new ok,
            Ag = J(md, new Xq(a, e, Eu)),
            Bg = J(md, new Fu(a, n, zg, Ag.output));
        J(md, new Gu(a, Bg.output, w, e));
        xk(md);
        _.S(G, md);
        var tf = new Hu(a, Du(h, e), window.top, Rb.j, ha.output, Pd.output, Pd.j);
        J(G, tf);
        J(G, new Iu(a, e, db, Pa, Rb.j, Rc.output, Rb.C));
        var Cg = new Ju(a, window, Oc, Rb.j, Rc.output, Qb);
        J(G, Cg);
        var Dg = wo(),
            Sc = new ok,
            uf = new Ku(a, n, Dg, R, c, b, d, qa, og);
        J(Sc, uf);
        xk(Sc);
        _.S(G, Sc);
        var Qd = new Yp;
        Qd.G(ng);
        J(G, new Lt(a, wo(), R, b, c, d, Qd));
        return G
    };
    Ou = function(a, b, c) {
        var d = null;
        try {
            var e = Mu(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.ba,
                    h = c.T[f.getDomId()],
                    k;
                f = null == (k = Ym(f, h, b.document, fq(g, h))) ? void 0 : k.y;
                k = Bm(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++Nu
            })
        } catch (f) {}
        return d
    };
    Wu = function(a) {
        return Il(a.oa.context, 1132, function() {
            if (a.ma.X.length) {
                var b = new _.u.Set(Mf(Pu));
                var c = a.oa.Z;
                c = _.E(Qu) && _.Q(c, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id".split(" ") : [];
                c = _.y(c);
                for (var d = c.next(); !d.done; d = c.next()) b.add(d.value);
                d = new _.u.Map;
                c = _.y(Ru);
                for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a, d);
                c = "https://" + (Su(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
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
                        if (f = "object" !== typeof f ? null == f || !h && 0 === f ? null : encodeURIComponent(f) : Array.isArray(f) && f.length ? Tu(f, g) : null) "?" !== c[c.length - 1] && (c += "&"), c += e + "=" + f
                    }
                }
                if (1 === _.Kf(Uu) || 2 === _.Kf(Uu)) b = _.Kf(Vu), b = 0 >= b ? "" : (_.H = _.z(Array, "from").call(Array, {
                    length: Math.ceil(b / 8)
                }), _.z(_.H, "fill")).call(_.H, "testdata").join("").substring(0, b), 2 === _.Kf(Uu) && (c += "&dblt=" + b);
                b = c
            } else b = "";
            return b
        })
    };
    Su = function(a) {
        var b = a.oa.Z,
            c, d;
        a = null != (d = null == (c = Xu(a.ma.O.ba)) ? void 0 : _.Q(c, 9)) ? d : !1;
        c = _.E(Qu) && _.Q(b, 8);
        return a || c || !ch(b)
    };
    Tu = function(a, b) {
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
    Zu = function(a, b) {
        var c = a.responseText;
        b = b.R;
        403 === a.status && b.error(Yu(c));
        return {}
    };
    cv = function(a, b) {
        try {
            _.Kf($u);
            var c, d = null != (c = b.xo) ? c : av,
                e = _.y(a.X),
                f = e.next();
            for (a = {}; !f.done; a = {
                    oe: void 0
                }, f = e.next()) {
                a.oe = f.value;
                var g = d.get(a.oe);
                d.set(a.oe, (new Date).getTime());
                g ? b.Ba.Gc.Qc.ji.refresh.Wl.ie({
                    me: (new Date).getTime() - g,
                    ym: _.Kf(bv)
                }) : _.kp(a.oe, function(h) {
                    return function() {
                        return void d.delete(h.oe)
                    }
                }(a))
            }
        } catch (h) {}
        return {}
    };
    fv = function() {
        var a = _.Kf(dv);
        switch (a) {
            case 0:
                return Ja() && ev(window.fetch) && ev(window.TextDecoderStream);
            case 1:
                return Ja() && ev(window.fetch) && !!window.TextDecoderStream;
            case 2:
                return Ja() && !!window.fetch && !!window.TextDecoderStream;
            case 3:
                return !Ia() && ev(window.fetch) && !!window.TextDecoderStream;
            case 4:
                return !Ia() && !!window.fetch && !!window.TextDecoderStream;
            case 5:
                return ev(window.fetch) && !!window.TextDecoderStream;
            case 6:
                return !!window.fetch && !!window.TextDecoderStream;
            default:
                kb(a)
        }
    };
    hv = function(a, b, c) {
        b = gv(b, c);
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
                kb(b)
        }
    };
    gv = function(a, b) {
        if (0 === a) return 0;
        a = _.Kf(iv);
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
                kb(a)
        }
    };
    vv = function(a, b) {
        a = a.Og;
        var c = b.Sa,
            d, e;
        b = jv(a, 6);
        var f = jv(a, 7),
            g = !!Gn(a, 8),
            h = kv(a, 10),
            k = null != (e = a.getEscapedQemQueryId()) ? e : "";
        e = _.vm(a, lv, 43);
        var l = !!Gn(a, 9),
            m = !!Gn(a, 12),
            n = _.vm(a, mv, il(a, nv, 48)),
            p = _.vm(a, ov, il(a, nv, 39)),
            r = _.Uc(_.ai(a, 36)),
            v = !!Gn(a, 13),
            w = kv(a, 49),
            x = _.vm(a, pv, 51);
        if (0 !== c.kind) {
            var B;
            c = {
                kind: 0,
                ub: null != (B = dk(a, 4)) ? B : ""
            }
        }
        B = kv(a, 61);
        var C = _.vm(a, qv, 58),
            F = null == (d = _.vm(a, rv, 56)) ? void 0 : kv(d, 1);
        d = _.bk(a, sv, 62);
        var G = _.bk(a, tv, 67),
            P = ue(a, 63, od, 2, void 0, void 0, 0);
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
                Uk: n,
                eb: p,
                Mf: r,
                qh: v,
                Qb: w,
                Ye: x,
                Jb: B,
                Sa: c,
                na: C,
                Om: F,
                Vg: d,
                lk: G,
                vg: P,
                Pf: !!Gn(a, 64),
                eg: _.vm(a, uv, 68)
            }
        }
    };
    zv = function(a, b) {
        var c = b.R;
        b = b.context;
        var d;
        (null == (d = _.vm(a.Og, wv, 69)) ? 0 : _.Q(d, 1)) && O(c, xv(_.E(yv) ? b.zb : b.mb));
        return {}
    };
    Av = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = _.Sa.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.si(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.qb(function(l) {
                if (1 == l.g) return d && clearTimeout(d), d = 0, f = new _.Jh, g = b(f.resolve), h = ++e, l.yield(0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, _.Kf(bv));
                _.kp(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    Bv = function(a) {
        var b = 0,
            c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k, l, m;
            return _.qb(function(n) {
                if (1 == n.g) return f = new _.Jh, g = f.resolve, h = ++e, n.yield(0, 2);
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
                m > _.Kf(bv) ? l() : (d = setTimeout(l, _.Kf(bv) - m), _.kp(a, function() {
                    return void g(!1)
                }), c = g);
                return n.return(f.promise)
            })
        }
    };
    Dv = function(a, b) {
        a = a.X;
        var c = b.L,
            d = b.nb;
        b = b.il;
        if (!a.length) return {
            he: []
        };
        for (var e = _.y(a), f = e.next(); !f.done; f = e.next()) zq(c, f.value);
        return b ? {
            he: []
        } : d ? (c = Bl(a[0].getAdUnitPath()), {
            he: Cv(a, c)
        }) : {
            he: a.map(function(g) {
                return {
                    networkCode: Bl(g.getAdUnitPath()),
                    X: [g]
                }
            })
        }
    };
    Cv = function(a, b) {
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
    Fv = function(a, b) {
        a = a.X;
        var c = function(d) {
            return !!Cm(b.T[d.getDomId()]).length
        };
        return {
            mj: a.filter(c),
            wj: a.filter(Ev(c))
        }
    };
    Nv = function() {
        var a = new Gv;
        var b = (new Hv).setCorrelator(Xj(_.t));
        var c = kh().join();
        b = _.cj(b, 5, c);
        b = _.L(b, 2, 1);
        a = _.di(a, 1, b);
        b = new Iv;
        c = _.E(Jv);
        b = _.ul(b, 7, c);
        c = _.E(Kv);
        b = _.ul(b, 8, c);
        c = _.E(Lv);
        b = _.ul(b, 9, c);
        b = _.ul(b, 10, !0);
        c = _.E(Mv);
        b = _.ul(b, 13, c);
        b = _.ul(b, 16, !0);
        a = _.di(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    Rv = function() {
        var a = _.E(Ov) ? _.eb(Pv) : _.eb(Qv);
        _.ap(document, a)
    };
    Wv = function(a, b) {
        var c = Sv() || Tv() ? 1 : _.ph(),
            d = .001 > c;
        d ? (b.D = !0, jh(31067358)) : .002 > c && jh(31067357);
        In(23, a);
        a = 1E-4 > c;
        b = _.Kf(Uv);
        var e = 0 < b && c < b,
            f = _.Kf(Vv),
            g = 0 < f && c < 1 / f,
            h = _.Kf($u);
        return {
            Oc: d,
            Gi: 1E3,
            lj: a,
            Fi: 1E4,
            fh: d,
            fg: 1E3,
            lm: e,
            Tl: b,
            jm: g,
            Al: f,
            mm: 0 < h && c < 1 / h,
            Oh: c
        }
    };
    $v = function(a, b) {
        var c = _.z(Object, "assign").call(Object, {}, a);
        a = a.Oh;
        c = (delete c.Oh, c);
        var d = b.zb;
        /m\d+/.test(d) ? d = Number(d.substring(1)) : (d && cg({
            mjsv: d
        }, "gpt_inv_ver"), d = void 0);
        var e = window.document.URL,
            f = new Xv(4, b.zb, 1E3);
        return _.z(Object, "assign").call(Object, {}, b, c, {
            ro: new Yv(b)
        }, {
            Fc: d,
            Ra: f,
            Zf: e,
            ho: 2012,
            V: new Zv(f, a)
        })
    };
    _.ba = [];
    aw = function(a) {
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
    bw = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    cw = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    _.dw = cw(this);
    ew = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.u = {};
    fw = {};
    _.z = function(a, b, c) {
        if (!c || null != a) {
            c = fw[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    };
    gw = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in _.u ? f = _.u : f = _.dw;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ew && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? bw(_.u, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === fw[d] && (a = 1E9 * Math.random() >>> 0, fw[d] = ew ? _.dw.Symbol(d) : "$jscp$" + a + "$" + d), bw(f, fw[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    gw("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            bw(this, "description", {
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
    gw("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, _.u.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.dw[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && bw(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return hw(aw(this))
                }
            })
        }
        return a
    }, "es6");
    hw = function(a) {
        a = {
            next: a
        };
        a[_.z(_.u.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    _.iw = function(a) {
        return a.raw = a
    };
    jw = function(a, b) {
        a.raw = b;
        return a
    };
    _.y = function(a) {
        var b = "undefined" != typeof _.u.Symbol && _.z(_.u.Symbol, "iterator") && a[_.z(_.u.Symbol, "iterator")];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: aw(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.si = function(a) {
        if (!(a instanceof Array)) {
            a = _.y(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    kw = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    lw = ew && "function" == typeof _.z(Object, "assign") ? _.z(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) kw(d, e) && (a[e] = d[e])
        }
        return a
    };
    gw("Object.assign", function(a) {
        return a || lw
    }, "es6");
    var mw = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        nw = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (ew && "undefined" != typeof Reflect && Reflect.construct) {
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
                e = mw(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        ow;
    if (ew && "function" == typeof _.z(Object, "setPrototypeOf")) ow = _.z(Object, "setPrototypeOf");
    else {
        var pw;
        a: {
            var qw = {
                    a: !0
                },
                rw = {};
            try {
                rw.__proto__ = qw;
                pw = rw.a;
                break a
            } catch (a) {}
            pw = !1
        }
        ow = pw ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    sw = ow;
    _.T = function(a, b) {
        a.prototype = mw(b.prototype);
        a.prototype.constructor = a;
        if (sw) sw(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.wm = b.prototype
    };
    tw = function() {
        this.D = !1;
        this.j = null;
        this.A = void 0;
        this.g = 1;
        this.K = this.l = 0;
        this.M = null
    };
    uw = function(a) {
        if (a.D) throw new TypeError("Generator is already running");
        a.D = !0
    };
    tw.prototype.I = function(a) {
        this.A = a
    };
    var vw = function(a, b) {
        a.M = {
            exception: b,
            fl: !0
        };
        a.g = a.l || a.K
    };
    tw.prototype.return = function(a) {
        this.M = {
            return: a
        };
        this.g = this.K
    };
    tw.prototype.yield = function(a, b) {
        this.g = b;
        return {
            value: a
        }
    };
    sb = function(a) {
        a.l = 0;
        var b = a.M.exception;
        a.M = null;
        return b
    };
    ww = function(a) {
        this.g = new tw;
        this.A = a
    };
    zw = function(a, b) {
        uw(a.g);
        var c = a.g.j;
        if (c) return xw(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return yw(a)
    };
    xw = function(a, b, c, d) {
        try {
            var e = b.call(a.g.j, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.D = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.j = null, vw(a.g, g), yw(a)
        }
        a.g.j = null;
        d.call(a.g, f);
        return yw(a)
    };
    yw = function(a) {
        for (; a.g.g;) try {
            var b = a.A(a.g);
            if (b) return a.g.D = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.A = void 0, vw(a.g, c)
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
    Aw = function(a) {
        this.next = function(b) {
            uw(a.g);
            a.g.j ? b = xw(a, a.g.j.next, b, a.g.I) : (a.g.I(b), b = yw(a));
            return b
        };
        this.throw = function(b) {
            uw(a.g);
            a.g.j ? b = xw(a, a.g.j["throw"], b, a.g.I) : (vw(a.g, b), b = yw(a));
            return b
        };
        this.return = function(b) {
            return zw(a, b)
        };
        this[_.z(_.u.Symbol, "iterator")] = function() {
            return this
        }
    };
    Bw = function(a) {
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
    _.qb = function(a) {
        return Bw(new Aw(new ww(a)))
    };
    _.Sa = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    gw("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    gw("Reflect.construct", function() {
        return nw
    }, "es6");
    gw("Reflect.setPrototypeOf", function(a) {
        return a ? a : sw ? function(b, c) {
            try {
                return sw(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    gw("Promise", function(a) {
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
        var d = _.dw.setTimeout;
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
                    var h = _.dw.console;
                    "undefined" !== typeof h && h.error(g.l)
                }
            }, 1)
        };
        e.prototype.C = function() {
            if (this.I) return !1;
            var g = _.dw.CustomEvent,
                h = _.dw.Event,
                k = _.dw.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = _.dw.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
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
    gw("Object.setPrototypeOf", function(a) {
        return a || sw
    }, "es6");
    gw("WeakMap", function(a) {
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
            if (!kw(g, d)) {
                var k = new b;
                bw(g, d, {
                    value: k
                })
            }
            if (!kw(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && kw(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && kw(g, d) && kw(g[d], this.g)
        };
        f.prototype.delete = function(g) {
            return c(g) && kw(g, d) && kw(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    gw("Map", function(a) {
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
                if (m && kw(h[0], l))
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
                return hw(function() {
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
    var Cw = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    gw("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Cw(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var Dw = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                si: e,
                yj: f
            }
        }
        return {
            si: -1,
            yj: void 0
        }
    };
    gw("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Dw(this, b, c).yj
        }
    }, "es6");
    var Ew = function(a, b) {
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
    gw("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ew(this, function(b) {
                return b
            })
        }
    }, "es6");
    gw("Set", function(a) {
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
    gw("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ew(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    gw("Number.EPSILON", function() {
        return Math.pow(2, -52)
    }, "es6");
    gw("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    gw("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    gw("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.z(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    gw("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return _.z(Number, "isInteger").call(Number, b) && Math.abs(b) <= _.z(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    gw("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    gw("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) kw(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    gw("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    gw("Array.prototype.includes", function(a) {
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
    gw("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Cw(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    gw("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    gw("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ew(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    gw("Array.from", function(a) {
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
    gw("Array.prototype.fill", function(a) {
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
    var Fw = function(a) {
        return a ? a : _.z(Array.prototype, "fill")
    };
    gw("Int8Array.prototype.fill", Fw, "es6");
    gw("Uint8Array.prototype.fill", Fw, "es6");
    gw("Uint8ClampedArray.prototype.fill", Fw, "es6");
    gw("Int16Array.prototype.fill", Fw, "es6");
    gw("Uint16Array.prototype.fill", Fw, "es6");
    gw("Int32Array.prototype.fill", Fw, "es6");
    gw("Uint32Array.prototype.fill", Fw, "es6");
    gw("Float32Array.prototype.fill", Fw, "es6");
    gw("Float64Array.prototype.fill", Fw, "es6");
    gw("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) kw(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    gw("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Cw(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    gw("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Cw(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    gw("globalThis", function(a) {
        return a || _.dw
    }, "es_2020");
    var Gw = function(a, b) {
        a = void 0 !== a ? String(a) : " ";
        return 0 < b && a ? _.z(a, "repeat").call(a, Math.ceil(b / a.length)).substring(0, b) : ""
    };
    gw("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Cw(this, null, "padStart");
            return Gw(c, b - d.length) + d
        }
    }, "es8");
    gw("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = Cw(this, null, "padStart");
            return d + Gw(c, b - d.length)
        }
    }, "es8");
    gw("AggregateError", function(a) {
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
    gw("Promise.any", function(a) {
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
    gw("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Dw(this, b, c).si
        }
    }, "es6");
    gw("Object.fromEntries", function(a) {
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
    gw("Object.hasOwn", function(a) {
        return a ? a : function(b, c) {
            return Object.prototype.hasOwnProperty.call(b, c)
        }
    }, "es_next");
    gw("Promise.prototype.finally", function(a) {
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
    gw("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = _.z(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    gw("String.raw", function(a) {
        return a ? a : function(b, c) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g) f += d[g], g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
            return f
        }
    }, "es6");
    gw("Math.sign", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
        }
    }, "es6");
    gw("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    }, "es6");
    gw("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function(e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    var Hw, Ic, Iw, Jw, Kw, Lw;
    _.t = this || self;
    Hw = function(a) {
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
    Ic = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.ra = function(a) {
        var b = Ic(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ja = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.ka = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Iw) && a[Iw] || (a[Iw] = ++Jw)
    };
    Iw = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Jw = 0;
    Kw = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Lw = function(a, b, c) {
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
    _.Mw = function(a, b, c) {
        _.Mw = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Kw : Lw;
        return _.Mw.apply(null, arguments)
    };
    _.Nw = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    var Ow;
    _.da = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.Pw = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.qj = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.Qw = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    _.Mg = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Aa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Rw = {
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
    var Uw = function(a, b) {
        this.g = a === Sw && b || "";
        this.A = Tw
    };
    Uw.prototype.toString = function() {
        return this.g
    };
    var Vw = function(a) {
            return a instanceof Uw && a.constructor === Uw && a.A === Tw ? a.g : "type_error:Const"
        },
        Tw = {},
        Sw = {};
    var bx, ax, $w, Xw, cx, cb, Yw;
    _.Ww = function(a) {
        this.g = a
    };
    _.Ww.prototype.toString = function() {
        return this.g + ""
    };
    _.Zw = function(a, b) {
        a = Xw.exec(_.fb(a).toString());
        var c = a[3] || "";
        return cb(a[1] + Yw("?", a[2] || "", b) + Yw("#", c))
    };
    _.fb = function(a) {
        return a instanceof _.Ww && a.constructor === _.Ww ? a.g : "type_error:TrustedResourceUrl"
    };
    bx = function(a, b) {
        var c = Vw(a);
        if (!$w.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(ax, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Uw ? Vw(d) : encodeURIComponent(String(d))
        });
        return cb(a)
    };
    ax = /%{(\w+)}/g;
    $w = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    Xw = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    cx = {};
    cb = function(a) {
        return new _.Ww(a, cx)
    };
    Yw = function(a, b, c) {
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
    var dx, ex, fx, Oa, gx;
    _.Na = function(a) {
        this.g = a
    };
    _.Na.prototype.toString = function() {
        return this.g.toString()
    };
    _.Ya = function(a) {
        return a instanceof _.Na && a.constructor === _.Na ? a.g : "type_error:SafeUrl"
    };
    dx = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    ex = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    fx = {};
    Oa = function(a) {
        return new _.Na(a, fx)
    };
    gx = Oa("about:invalid#zClosurez");
    var hx, cm, ix, qx, kx, lx, mx, nx, ox, px, jx;
    hx = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    cm = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    ix = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    qx = function(a) {
        if (!jx.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(kx, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(lx, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(mx, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(nx, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ox, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(px, "&#0;"));
        return a
    };
    kx = /&/g;
    lx = /</g;
    mx = />/g;
    nx = /"/g;
    ox = /'/g;
    px = /\x00/g;
    jx = /[\x00&<>"']/;
    _.Ng = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };
    var rx;
    rx = {};
    _.sx = function(a) {
        this.g = a
    };
    _.sx.prototype.toString = function() {
        return this.g.toString()
    };
    _.tx = function(a) {
        return a instanceof _.sx && a.constructor === _.sx ? a.g : "type_error:SafeStyleSheet"
    };
    var Da = Hw(610401301),
        Qe = Hw(188588736);
    var Ea, ux = _.t.navigator;
    Ea = ux ? ux.userAgentData || null : null;
    var vx, zx, Bx, Cx, Dx, yx;
    vx = {};
    _.wx = function(a) {
        this.g = a
    };
    _.wx.prototype.toString = function() {
        return this.g.toString()
    };
    _.xx = function(a) {
        return a instanceof _.wx && a.constructor === _.wx ? a.g : "type_error:SafeHtml"
    };
    zx = function(a) {
        var b = yx;
        b = b instanceof _.wx ? b : _.Uj(qx(String(b)));
        var c = [],
            d = function(e) {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof _.wx ? e : _.Uj(qx(String(e))), c.push(_.xx(e).toString()))
            };
        a.forEach(d);
        return _.Uj(c.join(_.xx(b).toString()))
    };
    _.Ax = function(a) {
        return zx(Array.prototype.slice.call(arguments))
    };
    _.Uj = function(a) {
        return new _.wx(a, vx)
    };
    Bx = /^[a-zA-Z0-9-]+$/;
    Cx = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    Dx = {
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
    yx = new _.wx(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "", vx);
    _.Ex = _.Uj("<br>");
    _.Qa = Oa("about:invalid#zClosurez");
    var Ka = function(a) {
            this.kl = a
        },
        Ma = [La("data"), La("http"), La("https"), La("mailto"), La("ftp"), new Ka(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        })],
        Va = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    var $a = function() {};
    $a.prototype.toString = function() {
        return this.Wi.toString()
    };
    var ub = _.iw(["https://tpc.googlesyndication.com/sodar/", ".js"]),
        Fx = _.iw(["https://www.google.com/recaptcha/api2/aframe"]);
    _.eb(Fx);
    var Gx, Ev, Bi;
    Gx = function() {
        return !0
    };
    Ev = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Bi = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.Hx = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    _.Ix = function(a, b) {
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
    var hb;
    hb = Bi(function() {
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
    _.ob = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ib(d)), !0) : !1
    };
    _.Zf = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ib(d)), !0) : !1
    };
    var Jx = {
            nn: 0,
            qn: 1,
            ln: 2,
            mn: 3,
            0: "FORMATTED_HTML_CONTENT",
            1: "HTML_FORMATTED_CONTENT",
            2: "EMBEDDED_INTERNAL_CONTENT",
            3: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        Kx = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + Jx[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.T(Kx, Error);
    var Cc = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var rb = function(a) {
        return new _.u.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var zb, yb = "function" === typeof String.prototype.ll,
        xb = "undefined" !== typeof TextEncoder;
    _.Lx = function(a) {
        _.Lx[" "](a);
        return a
    };
    _.Lx[" "] = function() {};
    var Mx = function(a, b) {
        try {
            return _.Lx(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Nx, Px, Qx, Rx, Sx, Tx;
    Nx = Ha() ? !1 : Ga("Opera");
    _.Ox = Ha() ? !1 : Ga("Trident") || Ga("MSIE");
    Px = Ga("Edge");
    Qx = Ga("Gecko") && !(_.Ng(Ca(), "WebKit") && !Ga("Edge")) && !(Ga("Trident") || Ga("MSIE")) && !Ga("Edge");
    Rx = _.Ng(Ca(), "WebKit") && !Ga("Edge");
    Sx = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Ux = "",
            Vx = function() {
                var a = Ca();
                if (Qx) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Px) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Ox) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Rx) return /WebKit\/(\S+)/.exec(a);
                if (Nx) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Vx && (Ux = Vx ? Vx[1] : "");
        if (_.Ox) {
            var Wx = Sx();
            if (null != Wx && Wx > parseFloat(Ux)) {
                Tx = String(Wx);
                break a
            }
        }
        Tx = Ux
    }
    var Xx = Tx,
        Yx;
    if (_.t.document && _.Ox) {
        var Zx = Sx();
        Yx = Zx ? Zx : parseInt(Xx, 10) || void 0
    } else Yx = void 0;
    var $x = Yx;
    !Ga("Android") || Ja();
    Ja();
    Ga("Safari") && (Ja() || (Ha() ? 0 : Ga("Coast")) || (Ha() ? 0 : Ga("Opera")) || (Ha() ? 0 : Ga("Edge")) || (Ha() ? Fa("Microsoft Edge") : Ga("Edg/")) || Ha() && Fa("Opera"));
    var ay = {},
        by = null,
        cy = Qx || Rx || "function" == typeof _.t.btoa,
        Hb = function(a, b) {
            void 0 === b && (b = 0);
            dy();
            b = ay[b];
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
        ey = function(a, b) {
            if (cy && !b) a = _.t.btoa(a);
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
        Of = function(a) {
            var b = [];
            fy(a, function(c) {
                b.push(c)
            });
            return b
        },
        gy = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            fy(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        fy = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = by[l];
                    if (null != m) return m;
                    if (!cm(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            dy();
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
        dy = function() {
            if (!by) {
                by = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    ay[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === by[f] && (by[f] = e)
                    }
                }
            }
        };
    var Mb = "undefined" !== typeof Uint8Array,
        Gb = !_.Ox && "function" === typeof btoa,
        hy = /[-_.]/g,
        Kb = {
            "-": "+",
            _: "/",
            ".": "="
        },
        iy, Ob = {};
    var jy, tc = function(a, b) {
            Pb(b);
            this.g = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        uc = function() {
            return jy || (jy = new tc(null, Ob))
        },
        Yd = function(a) {
            var b = a.g;
            return null == b ? "" : "string" === typeof b ? b : a.g = Jb(b)
        },
        gl = function(a) {
            Pb(Ob);
            var b = a.g;
            if (null != b && !Nb(b))
                if ("string" === typeof b)
                    if (Gb) {
                        hy.test(b) && (b = b.replace(hy, Lb));
                        b = atob(b);
                        for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                        b = c
                    } else b = gy(b);
            else b = null;
            return (a = null == b ? b : a.g = b) ? new Uint8Array(a) : iy || (iy = new Uint8Array(0))
        };
    tc.prototype.isEmpty = function() {
        return null == this.g
    };
    var Vb = 0,
        Wb = 0,
        ky;
    var ly = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        ny = function(a) {
            if (!a) return my || (my = new ly(0, 0));
            if (!/^\d+$/.test(a)) return null;
            bc(a);
            return new ly(Vb, Wb)
        },
        my, oy = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        jf = function(a) {
            if (!a) return py || (py = new oy(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            bc(a);
            return new oy(Vb, Wb)
        },
        py;
    var qy = function() {
        this.g = []
    };
    qy.prototype.length = function() {
        return this.g.length
    };
    qy.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var vf = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.g.push(b)
        },
        kf = function(a, b) {
            for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        ry = function(a, b) {
            if (0 <= b) kf(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
                a.g.push(1)
            }
        };
    var Df = function() {
            this.l = [];
            this.A = 0;
            this.g = new qy
        },
        Ef = function(a, b) {
            0 !== b.length && (a.l.push(b), a.A += b.length)
        },
        xf = function(a, b) {
            kf(a.g, 8 * b + 2);
            b = a.g.end();
            Ef(a, b);
            b.push(a.A);
            return b
        },
        yf = function(a, b) {
            var c = b.pop();
            for (c = a.A + a.g.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.A++;
            b.push(c);
            a.A++
        },
        sy = function(a, b, c) {
            kf(a.g, 8 * b + 2);
            kf(a.g, c.length);
            Ef(a, a.g.end());
            Ef(a, c)
        };
    var bf = function(a, b) {
        this.g = a;
        this.Gj = b
    };
    var ty = fc(),
        wd = fc("0di"),
        ke = fc("0dg");
    var hc = ty ? function(a, b) {
            a[ty] |= b
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
        Ee = ty ? function(a, b) {
            a[ty] &= ~b
        } : function(a, b) {
            void 0 !== a.wb && (a.wb &= ~b)
        },
        wc = ty ? function(a) {
            return a[ty] | 0
        } : function(a) {
            return a.wb | 0
        },
        fe = ty ? function(a) {
            return a[ty]
        } : function(a) {
            return a.wb
        },
        lc = ty ? function(a, b) {
            a[ty] = b;
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
    var td = {},
        qc = {},
        uy, oe, vy = [];
    lc(vy, 55);
    oe = Object.freeze(vy);
    var wy = function(a, b, c) {
        this.l = 0;
        this.g = a;
        this.A = b;
        this.j = c
    };
    wy.prototype.next = function() {
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
    wy.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return new wy(this.g, this.A, this.j)
    };
    _.xy = Object.freeze(new function() {});
    Object.freeze(new function() {});
    var zc;
    var Lc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    var zd, Bd, Cd;
    var Ud = {},
        yy = function() {
            try {
                var a = function() {
                    return nw(_.u.Map, [], this.constructor)
                };
                _.T(a, _.u.Map);
                new a;
                return !1
            } catch (b) {
                return !0
            }
        }(),
        zy = function() {
            this.g = new _.u.Map
        };
    _.q = zy.prototype;
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
    zy.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return _.z(this, "entries").call(this)
    };
    var Ay = function() {
            if (yy) return _.z(Object, "setPrototypeOf").call(Object, zy.prototype, _.u.Map.prototype), Object.defineProperties(zy.prototype, {
                size: {
                    value: 0,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            }), zy;
            var a = function() {
                return nw(_.u.Map, [], this.constructor)
            };
            _.T(a, _.u.Map);
            return a
        }(),
        Td = function(a, b, c, d) {
            c = void 0 === c ? Ed : c;
            d = void 0 === d ? Ed : d;
            var e = Ay.call(this) || this;
            var f = wc(a);
            f |= 64;
            lc(a, f);
            e.Id = f;
            e.Gf = b;
            e.Wd = c;
            e.rh = e.Gf ? Gd : d;
            for (var g = 0; g < a.length; g++) {
                var h = a[g],
                    k = c(h[0], !1, !0),
                    l = h[1];
                b ? void 0 === l && (l = null) : l = d(h[1], !1, !0, void 0, void 0, f);
                Ay.prototype.set.call(e, k, l)
            }
            return e
        };
    _.T(Td, Ay);
    var By = function(a) {
            if (a.Id & 2) throw Error("Cannot mutate an immutable Map");
        },
        Zd = function(a, b) {
            b = void 0 === b ? Hd : b;
            if (0 !== a.size) return he(a, b)
        },
        he = function(a, b) {
            b = void 0 === b ? Hd : b;
            var c = [];
            a = _.z(Ay.prototype, "entries").call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    _.q = Td.prototype;
    _.q.clear = function() {
        By(this);
        Ay.prototype.clear.call(this)
    };
    _.q.delete = function(a) {
        By(this);
        return Ay.prototype.delete.call(this, this.Wd(a, !0, !1))
    };
    _.q.entries = function() {
        var a = _.z(Array, "from").call(Array, _.z(Ay.prototype, "keys").call(this));
        return new wy(a, Rd, this)
    };
    _.q.keys = function() {
        return _.z(Ay.prototype, "keys").call(this)
    };
    _.q.values = function() {
        var a = _.z(Array, "from").call(Array, _.z(Ay.prototype, "keys").call(this));
        return new wy(a, Td.prototype.get, this)
    };
    _.q.forEach = function(a, b) {
        var c = this;
        Ay.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    _.q.set = function(a, b) {
        By(this);
        a = this.Wd(a, !0, !1);
        return null == a ? this : null == b ? (Ay.prototype.delete.call(this, a), this) : Ay.prototype.set.call(this, a, this.rh(b, !0, !0, this.Gf, !1, this.Id))
    };
    _.q.has = function(a) {
        return Ay.prototype.has.call(this, this.Wd(a, !1, !1))
    };
    _.q.get = function(a) {
        a = this.Wd(a, !1, !1);
        var b = Ay.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.Gf;
            return c ? (c = this.rh(b, !1, !0, c, this.gk, this.Id), c !== b && Ay.prototype.set.call(this, a, c), c) : b
        }
    };
    Td.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return _.z(this, "entries").call(this)
    };
    Td.prototype.toJSON = void 0;
    Td.prototype.rl = qc;
    var Sd;
    var ne, ei, Uq, Gn, hl, gj, il, fl, iq, mt, Cy, kk, Di, xm, Dy, Ey, dk, oi, Ps, is, Gy, Hy, Jy, Ky, eq, jv, kv, Ly, Uh, mi, My;
    _.ai = function(a, b) {
        a = a.F;
        return ne(a, fe(a), b)
    };
    ne = function(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= pc(b)) {
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
            e = fe(d);
        yc(e);
        me(d, e, b, c);
        return a
    };
    ei = function(a, b, c) {
        return void 0 !== Le(a, b, c, !1)
    };
    Uq = function(a) {
        a = a.F;
        var b = fe(a),
            c = ne(a, b, 3),
            d = Hc(c);
        null != d && d !== c && me(a, b, 3, d);
        return d
    };
    Gn = function(a, b) {
        return Kc(_.ai(a, b))
    };
    hl = function(a, b) {
        a = a.F;
        var c = fe(a),
            d = ne(a, c, b),
            e = vc(d, !0, !!(c & 34));
        null != e && e !== d && me(a, c, b, e);
        return null == e ? uc() : e
    };
    gj = function(a, b, c, d) {
        var e = a.F,
            f = fe(e);
        yc(f);
        (c = Ke(e, f, c)) && c !== b && null != d && (f = me(e, f, c));
        me(e, f, b, d);
        return a
    };
    il = function(a, b, c) {
        a = a.F;
        return Ke(a, fe(a), b) === c ? c : -1
    };
    fl = function(a, b) {
        a = a.F;
        return Ke(a, fe(a), b)
    };
    iq = function(a, b, c) {
        var d = a.F,
            e = fe(d),
            f = Ke(d, e, nj);
        a = mt(a, b, c);
        f && f !== c && me(d, e, f);
        return a
    };
    mt = function(a, b, c) {
        a = a.F;
        var d = fe(a);
        yc(d);
        var e = ne(a, d, c);
        b = Fd(vd(e, b, !0, d));
        e !== b && me(a, d, c, b);
        return b
    };
    Cy = function(a, b, c) {
        return (a = Le(a, b, c, !1)) ? a : ud(b)
    };
    _.vm = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Le(a, b, c, d);
        if (null == b) return b;
        a = a.F;
        var e = fe(a);
        if (!(e & 2)) {
            var f = Fd(b);
            f !== b && (b = f, me(a, e, c, b, d))
        }
        return b
    };
    _.bk = function(a, b, c) {
        a = a.F;
        var d = fe(a);
        return Me(a, d, b, c, !1, !(2 & d))
    };
    _.di = function(a, b, c) {
        null == c && (c = void 0);
        return _.ik(a, b, c)
    };
    _.ij = function(a, b, c, d) {
        null == d && (d = void 0);
        return gj(a, b, c, d)
    };
    _.pm = function(a, b, c) {
        var d = a.F,
            e = fe(d);
        yc(e);
        if (null == c) return me(d, e, b), a;
        for (var f = wc(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !0, m = !0, n = 0; n < c.length; n++) {
            var p = c[n];
            h || (p = !!(wc(p.F) & 2), l && (l = !p), m && (m = p))
        }
        h || (f = gc(f, 5, !0), f = gc(f, 8, l), f = gc(f, 16, m));
        k && f !== g && (c = ec(c), g = 0, f = re(f, e, !0));
        f !== g && lc(c, f);
        me(d, e, b, c);
        return a
    };
    kk = function(a, b, c, d) {
        Ne(a, b, c, d);
        return a
    };
    Di = function(a, b) {
        return Wc(_.ai(a, b))
    };
    xm = function(a, b) {
        return Zc(_.ai(a, b))
    };
    Dy = function(a, b) {
        a = _.ai(a, b);
        var c;
        null == a ? c = a : Mc(a) ? "number" === typeof a ? c = hd(a) : c = id(a) : c = void 0;
        return c
    };
    Ey = function(a, b) {
        return ue(a, b, nd, 2, void 0, void 0, 0)
    };
    dk = function(a, b) {
        return sd(_.ai(a, b))
    };
    oi = function(a, b, c, d, e) {
        return ue(a, b, sd, c, d, e)
    };
    _.Q = function(a, b, c) {
        return Pe(Gn(a, b), void 0 === c ? !1 : c)
    };
    _.Fy = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Pe(Di(a, b), c)
    };
    Ps = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Pe(xm(a, b), c)
    };
    _.Ig = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Pe(nd(_.ai(a, b)), c)
    };
    is = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Pe(Dy(a, b), c)
    };
    _.I = function(a, b) {
        return Pe(dk(a, b), "")
    };
    _.eg = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return Pe(_.Uc(_.ai(a, b)), c)
    };
    Gy = function(a, b) {
        var c = void 0 === c ? "0" : c;
        return Pe(od(_.ai(a, b), !0), c)
    };
    Hy = function(a, b, c) {
        a = oi(a, b, 3, void 0, !0);
        if ("number" !== typeof c || 0 > c || c >= a.length) throw Error();
        return a[c]
    };
    Jy = function(a) {
        return _.Ig(a, il(a, Iy, 3))
    };
    Ky = function(a, b) {
        return _.I(a, il(a, b, 2))
    };
    eq = function(a, b) {
        a = Gn(a, b);
        return null == a ? void 0 : a
    };
    jv = function(a, b) {
        a = Di(a, b);
        return null == a ? void 0 : a
    };
    kv = function(a, b) {
        a = dk(a, b);
        return null == a ? void 0 : a
    };
    Ly = function(a, b) {
        a = _.Uc(_.ai(a, b));
        return null == a ? void 0 : a
    };
    Uh = function(a, b, c) {
        return _.ik(a, b, null == c ? c : Jc(c))
    };
    _.ul = function(a, b, c) {
        return _.Je(a, b, null == c ? c : Jc(c), !1)
    };
    _.ri = function(a, b, c) {
        return _.ik(a, b, null == c ? c : Vc(c))
    };
    _.vl = function(a, b, c) {
        return _.Je(a, b, null == c ? c : Vc(c), 0)
    };
    _.Zh = function(a, b, c) {
        return _.ik(a, b, dd(c))
    };
    _.bj = function(a, b, c) {
        return _.Je(a, b, dd(c), "0")
    };
    mi = function(a, b, c) {
        return _.ik(a, b, rd(c))
    };
    _.cj = function(a, b, c) {
        return _.Je(a, b, rd(c), "")
    };
    _.bi = function(a, b, c) {
        return _.ik(a, b, Tc(c))
    };
    _.L = function(a, b, c) {
        return _.Je(a, b, Tc(c), 0)
    };
    My = function(a, b, c) {
        var d = a.F,
            e = fe(d);
        yc(e);
        b = pe(d, e, b);
        d = wc(b);
        c = _.qd(c, !!(4 & d) && !!(4096 & d));
        b.push(c);
        return a
    };
    _.Ci = function(a, b) {
        return null != dk(a, b)
    };
    _.D = function(a, b, c) {
        this.F = _.A(a, b, c)
    };
    _.D.prototype.toJSON = function() {
        return uy ? Re(this, this.F, !1) : Re(this, ae(this.F, ce, void 0, void 0, !1), !0)
    };
    var cl = function(a) {
        uy = !0;
        try {
            return JSON.stringify(a.toJSON(), Xd)
        } finally {
            uy = !1
        }
    };
    _.D.prototype.Bg = td;
    var ef = (0, _.u.Symbol)(),
        Ve = (0, _.u.Symbol)(),
        af = (0, _.u.Symbol)(),
        df = (0, _.u.Symbol)(),
        Ny = hf(function(a, b, c) {
            b = Hc(b);
            null != b && (kf(a.g, 8 * c + 5), a = a.g, c = ky || (ky = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Wb = 0, b = Vb = c.getUint32(0, !0), a.g.push(b >>> 0 & 255), a.g.push(b >>> 8 & 255), a.g.push(b >>> 16 & 255), a.g.push(b >>> 24 & 255))
        }),
        Oy = hf(wf),
        Py = hf(wf),
        Qy = hf(function(a, b, c) {
            a: if (null != b) {
                if (Mc(b)) {
                    if ("string" === typeof b) {
                        b = id(b);
                        break a
                    }
                    if ("number" === typeof b) {
                        b = hd(b);
                        break a
                    }
                }
                b = void 0
            }null != b && ("string" === typeof b && ny(b), null != b && (kf(a.g, 8 * c), "number" === typeof b ? (a = a.g, Xb(b), vf(a, Vb, Wb)) : (c = ny(b), vf(a.g, c.A, c.g))))
        }),
        Ry = hf(function(a, b, c) {
            b = Wc(b);
            null != b && null != b && (kf(a.g, 8 * c), ry(a.g, b))
        }),
        Sy = hf(function(a, b, c) {
            b = Kc(b);
            null != b && (kf(a.g, 8 * c), a.g.g.push(b ? 1 : 0))
        }),
        Ty = hf(function(a, b, c) {
            b = sd(b);
            null != b && sy(a, c, Cb(b))
        }),
        Uy;
    Uy = new bf(function(a, b, c) {
        b = Te(sd, b);
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    g = b[d];
                null != g && sy(e, f, Cb(g))
            }
    }, !1);
    var ff = new bf(zf, !0),
        cf = new bf(zf, !0),
        Vy;
    Vy = new bf(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) zf(a, b[f], c, d, e)
    }, !0);
    var Wy = hf(function(a, b, c) {
            b = Wc(b);
            null != b && (b = parseInt(b, 10), kf(a.g, 8 * c), ry(a.g, b))
        }),
        Xy;
    Xy = new bf(function(a, b, c) {
        b = Te(Wc, b);
        if (null != b && b.length) {
            c = xf(a, c);
            for (var d = 0; d < b.length; d++) ry(a.g, b[d]);
            yf(a, c)
        }
    }, !1);
    var Cf = void 0;
    var Yy = function(a) {
        this.F = _.A(a)
    };
    _.T(Yy, _.D);
    var Zy = function(a) {
        this.F = _.A(a)
    };
    _.T(Zy, _.D);
    var $y = function(a) {
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
        az = function(a, b, c) {
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
    az.prototype.build = function() {
        return new $y(this)
    };
    var ni = function(a) {
        this.F = _.A(a)
    };
    _.T(ni, _.D);
    ni.prototype.getId = function() {
        return _.I(this, 1)
    };
    var bz = [0, Ty];
    var qi = function(a) {
        this.F = _.A(a)
    };
    _.T(qi, _.D);
    qi.prototype.getWidth = function() {
        return _.Fy(this, 1)
    };
    qi.prototype.getHeight = function() {
        return _.Fy(this, 2)
    };
    var cz = [0, Ry, -1];
    var pi = function(a) {
        this.F = _.A(a)
    };
    _.T(pi, _.D);
    var dz = [0, Py, Sy, Ty, -1];
    var li = function(a) {
        this.F = _.A(a)
    };
    _.T(li, _.D);
    li.da = [4];
    var ez = [0, Ty, Py, Ty, Uy, Wy, bz, cz, Py, dz];
    var fi = function(a) {
        this.F = _.A(a)
    };
    _.T(fi, _.D);
    var ii = function(a, b) {
            return _.bi(a, 1, b)
        },
        ji = function(a, b) {
            return Uh(a, 4, b)
        },
        hi = function(a, b) {
            return _.ri(a, 2, b)
        },
        fz = [0, Wy, Ry, Ty, Sy];
    var Xh = function(a) {
        this.F = _.A(a)
    };
    _.T(Xh, _.D);
    var Wh = function(a, b) {
            return mi(a, 1, b)
        },
        Th = function(a, b) {
            return kk(a, 3, li, b)
        },
        Vh = function(a, b) {
            return _.bi(a, 4, b)
        };
    Xh.prototype.hi = function() {
        return _.eg(this, 7, 0)
    };
    Xh.da = [10, 3];
    var gz = [0, Ty, Py, Vy, ez, Wy, fz, Sy, Wy, 2, Uy];
    var ui = function(a) {
        this.F = _.A(a)
    };
    _.T(ui, _.D);
    var hz = [0, Wy, Sy, Py];
    var iz = function(a) {
        this.F = _.A(a)
    };
    _.T(iz, _.D);
    var Sh = function(a, b) {
            return Ne(a, 2, Xh, b)
        },
        gi = function(a, b) {
            _.di(a, 5, b)
        },
        zi = function(a, b) {
            _.di(a, 9, b)
        },
        Ai = function(a, b) {
            return mi(a, 10, b)
        };
    iz.da = [2];
    var jz = [0, Wy, Vy, gz, Wy, Ty, fz, Ty, Sy, Ry, hz, Ty];
    var vi = function(a) {
        this.F = _.A(a)
    };
    _.T(vi, _.D);
    var xi = function(a) {
        var b = new iz;
        b = _.bi(b, 1, 1);
        return Ne(a, 1, iz, b)
    };
    vi.da = [1];
    vi.prototype.g = Ff([0, Vy, jz]);
    var kz = function(a) {
        this.F = _.A(a)
    };
    _.T(kz, _.D);
    var Iy = [2, 3];
    var lz = function(a) {
        this.F = _.A(a)
    };
    _.T(lz, _.D);
    lz.da = [1];
    var mz = function(a) {
        this.F = _.A(a)
    };
    _.T(mz, _.D);
    mz.da = [1];
    var nz = function(a) {
        this.F = _.A(a)
    };
    _.T(nz, _.D);
    var oz = [2, 3];
    var pz = function(a) {
        this.F = _.A(a)
    };
    _.T(pz, _.D);
    pz.da = [2];
    var qz = function(a) {
        this.F = _.A(a)
    };
    _.T(qz, _.D);
    qz.da = [6, 4];
    var rz = function(a) {
        this.F = _.A(a)
    };
    _.T(rz, _.D);
    rz.da = [4, 5];
    var sz = function(a) {
        this.F = _.A(a)
    };
    _.T(sz, _.D);
    var tz = function(a) {
        this.F = _.A(a)
    };
    _.T(tz, _.D);
    tz.prototype.gi = function() {
        return Cy(this, sz, 2)
    };
    tz.da = [1];
    var uz = function(a) {
        this.F = _.A(a)
    };
    _.T(uz, _.D);
    var vz = function(a) {
        this.F = _.A(a)
    };
    _.T(vz, _.D);
    vz.da = [1];
    var wz = function(a) {
        this.F = _.A(a)
    };
    _.T(wz, _.D);
    var xz = [0, Wy, Py];
    var yz = function(a) {
        this.F = _.A(a)
    };
    _.T(yz, _.D);
    var zz = [0, Oy];
    var Az = function(a) {
        this.F = _.A(a)
    };
    _.T(Az, _.D);
    Az.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 1)
    };
    var Bz = [0, Ty, zz, xz];
    var Cz = function(a) {
        this.F = _.A(a)
    };
    _.T(Cz, _.D);
    Cz.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    _.Dz = function(a) {
        this.F = _.A(a)
    };
    _.T(_.Dz, _.D);
    _.Ez = function(a) {
        this.F = _.A(a)
    };
    _.T(_.Ez, _.D);
    _.Ez.prototype.Ue = ca(0);
    _.Ez.prototype.Pd = ca(1);
    _.Ez.prototype.We = ca(2);
    _.Ez.da = [15, 24];
    var Fz = function(a) {
        this.F = _.A(a)
    };
    _.T(Fz, _.D);
    Fz.prototype.getAdUnitPath = function() {
        return _.I(this, 2)
    };
    var sv = function(a) {
        this.F = _.A(a)
    };
    _.T(sv, _.D);
    var Gz = [5, 7, 8, 9];
    var Hz = function(a) {
        this.F = _.A(a)
    };
    _.T(Hz, _.D);
    var Iz = function(a) {
        this.F = _.A(a)
    };
    _.T(Iz, _.D);
    Iz.da = [4, 5, 6];
    var Jz = function(a) {
        this.F = _.A(a)
    };
    _.T(Jz, _.D);
    Jz.prototype.getValue = function() {
        return _.I(this, 2)
    };
    Jz.prototype.ng = function() {
        return _.Ci(this, 2)
    };
    var Kz = function(a) {
        this.F = _.A(a)
    };
    _.T(Kz, _.D);
    var ov = function(a) {
        this.F = _.A(a)
    };
    _.T(ov, _.D);
    ov.da = [13];
    var mv = function(a) {
        this.F = _.A(a)
    };
    _.T(mv, _.D);
    mv.da = [15, 13];
    var Lz = function(a) {
        this.F = _.A(a)
    };
    _.T(Lz, _.D);
    var jk = function(a) {
            var b = new Lz;
            return _.bi(b, 1, a)
        },
        Mz = [0, Wy];
    var ck = function(a) {
        this.F = _.A(a)
    };
    _.T(ck, _.D);
    var Nz = function(a) {
            var b = new ck;
            return mi(b, 1, a)
        },
        Oz = function(a) {
            var b = window.Date.now();
            b = _.z(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
            return _.Zh(a, 3, b)
        };
    ck.prototype.ib = function(a) {
        return _.di(this, 10, a)
    };
    var Pz = Gf(ck),
        Qz = [0, Ty, -1, Py, Ry, -2, Py, Ny, Sy, Mz, Sy];
    var Rz = [0, 1, [0, Qy, -2], -1, Ty, -1, Sy, [0, 3, Wy, Ty], Py, Xy];
    var Sz = function(a) {
        this.F = _.A(a)
    };
    _.T(Sz, _.D);
    Sz.da = [1, 2];
    Sz.prototype.g = Ff([0, Vy, Rz, Vy, Qz]);
    var rv = function(a) {
        this.F = _.A(a)
    };
    _.T(rv, _.D);
    var Tz = function(a) {
        this.F = _.A(a)
    };
    _.T(Tz, _.D);
    Tz.prototype.getValue = function() {
        return _.I(this, 1)
    };
    Tz.prototype.ng = function() {
        return _.Ci(this, 1)
    };
    Tz.prototype.getVersion = function() {
        return _.eg(this, 5, 0)
    };
    var lv = function(a) {
        this.F = _.A(a)
    };
    _.T(lv, _.D);
    var tv = function(a) {
        this.F = _.A(a)
    };
    _.T(tv, _.D);
    tv.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    var uv = function(a) {
        this.F = _.A(a)
    };
    _.T(uv, _.D);
    var pv = function(a) {
        this.F = _.A(a)
    };
    _.T(pv, _.D);
    var wv = function(a) {
        this.F = _.A(a)
    };
    _.T(wv, _.D);
    var Uz = function(a) {
        this.F = _.A(a)
    };
    _.T(Uz, _.D);
    Uz.prototype.getContentUrl = function() {
        return _.I(this, 2)
    };
    Uz.da = [11];
    var Vz = function(a) {
        this.F = _.A(a)
    };
    _.T(Vz, _.D);
    Vz.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 4)
    };
    Vz.da = [2, 23];
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
    var aA = function(a) {
        this.F = _.A(a)
    };
    _.T(aA, _.D);
    aA.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 2)
    };
    var bA = function(a) {
        this.F = _.A(a)
    };
    _.T(bA, _.D);
    var cA = function(a) {
        this.F = _.A(a)
    };
    _.T(cA, _.D);
    var qv = function(a) {
        this.F = _.A(a)
    };
    _.T(qv, _.D);
    var dA = function(a) {
        return Cy(a, aA, 5)
    };
    qv.prototype.getWidth = function() {
        return _.Fy(this, 9)
    };
    qv.prototype.getHeight = function() {
        return _.Fy(this, 10)
    };
    qv.da = [3, 7, 27, 11, 32];
    var eA = function(a) {
        this.F = _.A(a)
    };
    _.T(eA, _.D);
    eA.prototype.getHeight = function() {
        return Di(this, 6)
    };
    eA.prototype.getWidth = function() {
        return Di(this, 7)
    };
    eA.prototype.getEscapedQemQueryId = function() {
        return dk(this, 34)
    };
    eA.da = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63, 67];
    var nv = [39, 48];
    var fA = function(a) {
        this.F = _.A(a)
    };
    _.T(fA, _.D);
    var gA = Gf(fA);
    fA.da = [1, 2, 3];
    var hA = window;
    var Iv = function(a) {
        this.F = _.A(a)
    };
    _.T(Iv, _.D);
    Iv.da = [15];
    var Hv = function(a) {
        this.F = _.A(a)
    };
    _.T(Hv, _.D);
    Hv.prototype.getCorrelator = function() {
        return _.Ig(this, 1)
    };
    Hv.prototype.setCorrelator = function(a) {
        return _.bj(this, 1, a)
    };
    var Gv = function(a) {
        this.F = _.A(a)
    };
    _.T(Gv, _.D);
    var iA, jA, kA;
    _.U = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    iA = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    jA = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? "" : b
    };
    kA = function(a) {
        var b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var lA = new _.U(590317302),
        mA = new _.U(1958);
    _.If = function(a) {
        var b = "Bc";
        if (a.Bc && a.hasOwnProperty(b)) return a.Bc;
        b = new a;
        return a.Bc = b
    };
    var Jf = function() {
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
    var nA = _.Ox || Rx;
    _.oA = Bi(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.xx(yx);
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
    var pA, qA, sA;
    pA = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    qA = 2147483648 * Math.random() | 0;
    _.rA = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    sA = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var gg, wA, vA, zA, BA, GA;
    gg = function(a) {
        return a ? new _.tA(_.uA(a)) : Ow || (Ow = new _.tA)
    };
    wA = function(a, b) {
        xa(b, function(c, d) {
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : vA.hasOwnProperty(d) ? a.setAttribute(vA[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    vA = {
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
    _.yA = function(a) {
        a = a.document;
        a = _.xA(a) ? a.documentElement : a.body;
        return new _.Mm(a.clientWidth, a.clientHeight)
    };
    zA = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Rx && _.xA(a) ? a.documentElement : a.body || a.documentElement
    };
    _.AA = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    BA = function(a, b, c) {
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
                _.Pw(g ? _.fa(f) : f, d)
            }
        }
    };
    _.CA = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.xA = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.DA = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.EA = function(a) {
        var b;
        if (nA && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ja(b) && 1 == b.nodeType ? b : null
    };
    _.FA = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.uA = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    GA = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.AA(a.contentDocument) : null)
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
    _.tA = function(a) {
        this.g = a || _.t.document || document
    };
    _.q = _.tA.prototype;
    _.q.Wk = function(a) {
        var b = this.g;
        return "string" === typeof a ? b.getElementById(a) : a
    };
    _.q.Sm = _.tA.prototype.Wk;
    _.q.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    _.q.createElement = function(a) {
        return _.CA(this.g, a)
    };
    _.q.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    _.q.append = function(a, b) {
        BA(_.uA(a), a, arguments)
    };
    _.q.Nj = _.DA;
    _.q.contains = _.FA;
    var IA = function() {
            return Da && Ea ? Ea.mobile : !HA() && (Ga("iPod") || Ga("iPhone") || Ga("Android") || Ga("IEMobile"))
        },
        HA = function() {
            return Da && Ea ? !Ea.mobile && (Ga("iPad") || Ga("Android") || Ga("Silk")) : Ga("iPad") || Ga("Android") && !Ga("Mobile") || Ga("Silk")
        };
    var KA, cp;
    _.JA = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    KA = function(a) {
        return a ? decodeURI(a) : a
    };
    _.zn = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) _.zn(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    cp = /#|$/;
    var ml, Ak, LA, Bk, Um, mp, Tv, Sv, NA, OA, Vm, PA, QA, RA, SA, TA, UA, ev, VA, WA, Gp, Qj, Hp, Mp, XA, ZA, $A, aB, bB, cB, Xj, dB, to, ko, eB, En, fB, gB;
    _.Sk = function(a) {
        try {
            return !!a && null != a.location.href && Mx(a, "foo")
        } catch (b) {
            return !1
        }
    };
    ml = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? LA(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.Sk(c) || !a(c));) c = LA(c)
    };
    Ak = function() {
        var a = window;
        ml(function(b) {
            a = b;
            return !1
        });
        return a
    };
    LA = function(a) {
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
        var c = _.Yf("SCRIPT", a);
        nb(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Um = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.ph = function() {
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
    _.MA = function(a) {
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
    _.qh = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    Tv = Bi(function() {
        return _.Mg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], NA) || 1E-4 > Math.random()
    });
    Sv = Bi(function() {
        return NA("MSIE")
    });
    NA = function(a) {
        return -1 != Ca().indexOf(a)
    };
    OA = /^([0-9.]+)px$/;
    Vm = function(a) {
        return (a = OA.exec(a)) ? +a[1] : null
    };
    PA = function() {
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
    QA = function() {
        var a = _.t.location.href;
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    RA = {
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
    SA = Bi(function() {
        return _.MA(RA)
    });
    TA = function(a) {
        var b = SA();
        return a.length ? _.qj(b, function(c) {
            return !(0 <= _.da(a, c))
        }) : b
    };
    UA = function() {
        var a = _.Yf("IFRAME"),
            b = {};
        _.Pw(SA(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    ev = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    VA = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = LA(a))) break
        }
        return null
    };
    WA = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Yf("IFRAME");
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
    _.Pp = Bi(function() {
        return IA() ? 2 : HA() ? 1 : 0
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
        return 6 != a.length ? null : _.Qw(a, parseFloat)
    };
    XA = {};
    _.YA = (XA["http://googleads.g.doubleclick.net"] = !0, XA["http://pagead2.googlesyndication.com"] = !0, XA["https://googleads.g.doubleclick.net"] = !0, XA["https://pagead2.googlesyndication.com"] = !0, XA);
    ZA = function(a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    };
    $A = [];
    aB = function() {
        var a = $A;
        $A = [];
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    bB = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    cB = function() {
        var a = void 0 === a ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    };
    Xj = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: cB(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    dB = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? ($A.push(b), 1 == $A.length && (_.u.Promise ? _.u.Promise.resolve().then(aB) : window.setImmediate ? setImmediate(aB) : setTimeout(aB, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    to = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    ko = function(a) {
        return 0 === a || to(a)
    };
    eB = function(a) {
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
    _.Yf = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    fB = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.Sk(a) && (b = a);
        return b
    };
    _.Ni = function(a) {
        return _.E(lA) || Ja() && IA() ? gB(a, !0) : 1
    };
    gB = function(a, b) {
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
    _.hB = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.hB.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.hB.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.iB = function(a) {
        return new _.hB(a.top, a.right, a.bottom, a.left)
    };
    _.hB.prototype.contains = function(a) {
        return this && a ? a instanceof _.hB ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.hB.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.hB.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.hB.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var jB = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        kB = function(a) {
            return new _.hB(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        lB = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new jB(c, e, d - c, a - e)
            }
            return null
        };
    jB.prototype.contains = function(a) {
        return a instanceof _.Im ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    jB.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    jB.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    jB.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var mB = function(a) {
        return (a = void 0 === a ? Nf() : a) ? _.Sk(a.master) ? a.master : null : null
    };
    var pB, rB, Lm, sB, tB, Hm;
    _.oB = function(a, b, c) {
        if ("string" === typeof b)(b = _.nB(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.nB(c, d);
                f && (c.style[f] = e)
            }
    };
    pB = {};
    _.nB = function(a, b) {
        var c = pB[b];
        if (!c) {
            var d = _.rA(b);
            c = d;
            void 0 === a.style[d] && (d = (Rx ? "Webkit" : Qx ? "Moz" : _.Ox ? "ms" : null) + sA(d), void 0 !== a.style[d] && (c = d));
            pB[b] = c
        }
        return c
    };
    _.qB = function(a, b) {
        var c = _.uA(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    rB = function(a, b) {
        return _.qB(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
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
    sB = function(a) {
        if (_.Ox && !(8 <= Number($x))) return a.offsetParent;
        var b = _.uA(a),
            c = rB(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = rB(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    tB = function(a) {
        var b = _.uA(a),
            c = new _.Im(0, 0);
        var d = b ? _.uA(b) : document;
        d = !_.Ox || 9 <= Number($x) || _.xA(gg(d).g) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Lm(a);
        d = gg(b).g;
        b = zA(d);
        d = d.parentWindow || d.defaultView;
        b = _.Ox && d.pageYOffset != b.scrollTop ? new _.Im(b.scrollLeft, b.scrollTop) : new _.Im(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Hm = function(a, b) {
        var c = new _.Im(0, 0),
            d = _.AA(_.uA(a));
        if (!Mx(d, "parent")) return c;
        do {
            var e = d == b ? tB(a) : _.uB(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.uB = function(a) {
        a = Lm(a);
        return new _.Im(a.left, a.top)
    };
    _.vB = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Km = function(a, b) {
        if ("none" != rB(b, "display")) return a(b);
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
    _.wB = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Rx && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Lm(a), new _.Mm(a.right - a.left, a.bottom - a.top)) : new _.Mm(b, c)
    };
    var Dp;
    _.xB = _.iw(["//fonts.googleapis.com/css"]);
    Dp = function(a) {
        a = mB(Nf(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var yB = function(a) {
        this.F = _.A(a)
    };
    _.T(yB, _.D);
    var zB = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var AB = function(a) {
        this.F = _.A(a)
    };
    _.T(AB, _.D);
    AB.prototype.getVersion = function() {
        return _.Fy(this, 2)
    };
    AB.da = [3];
    var BB = function(a) {
        this.F = _.A(a)
    };
    _.T(BB, _.D);
    var CB = function(a) {
        this.F = _.A(a)
    };
    _.T(CB, _.D);
    var DB = function(a) {
        this.F = _.A(a)
    };
    _.T(DB, _.D);
    DB.prototype.getVersion = function() {
        return _.Fy(this, 1)
    };
    var EB = function(a) {
        this.F = _.A(a)
    };
    _.T(EB, _.D);
    var FB = function(a) {
        this.F = _.A(a)
    };
    _.T(FB, _.D);
    var GB = function(a) {
        var b = new FB;
        return _.di(b, 1, a)
    };
    var HB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        IB = 6 + HB.reduce(function(a, b) {
            return a + b
        });
    var JB = function(a) {
        this.F = _.A(a)
    };
    _.T(JB, _.D);
    var KB = function(a) {
        this.F = _.A(a)
    };
    _.T(KB, _.D);
    KB.prototype.getVersion = function() {
        return _.Fy(this, 1)
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
        return _.di(b, 1, a)
    };
    var OB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
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
    var SB = function(a) {
        this.F = _.A(a)
    };
    _.T(SB, _.D);
    SB.prototype.getVersion = function() {
        return _.Fy(this, 1)
    };
    var TB = function(a) {
        this.F = _.A(a)
    };
    _.T(TB, _.D);
    var UB = function(a) {
        this.F = _.A(a)
    };
    _.T(UB, _.D);
    var VB = function(a) {
        var b = new UB;
        return _.di(b, 1, a)
    };
    var WB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        XB = 6 + WB.reduce(function(a, b) {
            return a + b
        });
    var YB = function(a) {
        this.F = _.A(a)
    };
    _.T(YB, _.D);
    var ZB = function(a) {
        this.F = _.A(a)
    };
    _.T(ZB, _.D);
    ZB.prototype.getVersion = function() {
        return _.Fy(this, 1)
    };
    var $B = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        aC = 6 + $B.reduce(function(a, b) {
            return a + b
        });
    var bC = function(a) {
        this.F = _.A(a)
    };
    _.T(bC, _.D);
    _.Jl = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    _.cC = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var dC = null,
        eC = function() {
            if (null === dC) {
                dC = "";
                try {
                    var a = "";
                    try {
                        a = _.t.top.location.hash
                    } catch (c) {
                        a = _.t.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        dC = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return dC
        };
    var fC = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.slotId = e;
        this.taskId = void 0;
        this.uniqueId = Math.random()
    };
    var gC, hC, iC, jC, kC;
    gC = _.t.performance;
    hC = !!(gC && gC.mark && gC.measure && gC.clearMarks);
    iC = Bi(function() {
        var a;
        if (a = hC) a = eC(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    jC = function(a, b) {
        this.A = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.A = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.g = iC() || (null != c ? c : Math.random() < a)
    };
    _.Hl = function(a) {
        a && gC && iC() && (gC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), gC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    kC = function(a, b, c, d, e, f) {
        a.g && (b = new fC(b, c, d, void 0 === e ? 0 : e, f), !a.g || 2048 < a.A.length || a.A.push(b))
    };
    jC.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new fC(a, b, _.Vf() || _.Uf());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        gC && iC() && gC.mark(b);
        return a
    };
    jC.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (_.Vf() || _.Uf()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            gC && iC() && gC.mark(b);
            !this.g || 2048 < this.A.length || this.A.push(a)
        }
    };
    var Os = function(a, b, c) {
        var d = _.Vf();
        d && kC(a, b, 9, d, 0, c)
    };
    var oC, nC, qC, pC;
    _.lC = function() {
        this.l = "&";
        this.A = {};
        this.j = 0;
        this.g = []
    };
    _.mC = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    oC = function(a, b, c, d, e) {
        var f = [];
        _.Cn(a, function(g, h) {
            (g = nC(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    };
    nC = function(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(nC(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(oC(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    qC = function(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = pC(a) - b.length;
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
                var l = oC(h[k], a.l, ",$");
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
    pC = function(a) {
        var b = 1,
            c;
        for (c in a.A) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    };
    _.dg = function(a) {
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
    var rC = function(a, b, c, d, e) {
            $f(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
        },
        cg = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.Cn(a, function(e, f) {
                if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            zs(d, c)
        },
        zs = function(a, b) {
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
            }), c.fetch(a, b)) : rC(c, a, void 0, b, d)
        };
    var sC = function(a, b) {
        var c = new bC;
        a = _.L(c, 1, a);
        b = _.cj(a, 2, b);
        this.j = _.je(b)
    };
    var tC = function(a) {
        this.F = _.A(a)
    };
    _.T(tC, _.D);
    var vC = function(a, b) {
            return gj(a, 1, uC, rd(b))
        },
        wC = function(a, b) {
            return gj(a, 3, uC, null == b ? b : Jc(b))
        },
        uC = [1, 2, 3];
    var xC = function(a) {
        this.F = _.A(a)
    };
    _.T(xC, _.D);
    var zC = function(a, b) {
            return gj(a, 4, yC, _.Gc(b))
        },
        yC = [2, 4];
    var AC = function(a) {
        this.F = _.A(a)
    };
    _.T(AC, _.D);
    var BC = function(a) {
            var b = new AC;
            return _.cj(b, 1, a)
        },
        CC = function(a, b) {
            return _.di(a, 3, b)
        },
        DC = function(a, b) {
            return kk(a, 4, tC, b)
        };
    AC.da = [4];
    var EC = function(a) {
        this.F = _.A(a)
    };
    _.T(EC, _.D);
    var FC = function(a) {
        this.F = _.A(a)
    };
    _.T(FC, _.D);
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
    var GC = function(a) {
        this.F = _.A(a)
    };
    _.T(GC, _.D);
    var HC = function(a) {
        this.F = _.A(a)
    };
    _.T(HC, _.D);
    var pl = function(a) {
        this.F = _.A(a)
    };
    _.T(pl, _.D);
    pl.prototype.getTagSessionCorrelator = function() {
        return _.Ig(this, 2)
    };
    var yl = function(a) {
        var b = new GC;
        return _.ij(a, 13, wl, b)
    };
    pl.da = [4];
    var wl = [6, 7, 8, 9, 11, 13, 14];
    var IC = function(a) {
        this.F = _.A(a)
    };
    _.T(IC, _.D);
    var JC = function(a) {
        this.F = _.A(a)
    };
    _.T(JC, _.D);
    var jq = function(a) {
        this.F = _.A(a)
    };
    _.T(jq, _.D);
    var fj = function(a) {
        this.F = _.A(a)
    };
    _.T(fj, _.D);
    var hj = [3, 4];
    var ej = function(a) {
        this.F = _.A(a)
    };
    _.T(ej, _.D);
    var KC = function(a) {
            var b = new ej;
            return _.ij(b, 2, nj, a)
        },
        nj = [1, 2, 3, 4, 5];
    var aj = function(a) {
        this.F = _.A(a)
    };
    _.T(aj, _.D);
    aj.prototype.getTagSessionCorrelator = function() {
        return _.Ig(this, 2)
    };
    aj.da = [4];
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
        return _.Ig(this, 1)
    };
    Ll.da = [2];
    var Kl = function(a) {
        this.F = _.A(a)
    };
    _.T(Kl, _.D);
    var Ql = [4, 6];
    var LC = function(a) {
        this.F = _.A(a)
    };
    _.T(LC, _.D);
    LC.prototype.getTagSessionCorrelator = function() {
        return _.Ig(this, 1)
    };
    LC.prototype.getMessageId = function() {
        return _.eg(this, 8, 0)
    };
    LC.prototype.getMessageArgs = function(a) {
        return Hy(this, 9, a)
    };
    LC.da = [2, 9];
    var NC = function(a) {
            this.Qc = new MC(a)
        },
        MC = function(a) {
            this.ji = new OC(a);
            this.te = new PC(a)
        },
        OC = function(a) {
            this.nk = new QC(a);
            this.refresh = new RC(a)
        },
        QC = function(a) {
            this.pk = new SC(a)
        },
        SC = function(a) {
            this.ie = function(b) {
                var c = b.me,
                    d = b.Of,
                    e = b.oi,
                    f = b.pi;
                b = b.li;
                var g = BC("XVNPAd"),
                    h = new tC;
                d = gj(h, 2, uC, dd(Math.round(d)));
                a(CC(DC(DC(DC(DC(g, d), wC(new tC, e)), wC(new tC, f)), wC(new tC, b)), zC(new xC, c)))
            }
        },
        RC = function(a) {
            this.Wl = new TC(a)
        },
        TC = function(a) {
            this.ie = function(b) {
                var c = b.me,
                    d = b.ym;
                b = BC("e1Ueh");
                var e = new tC;
                d = gj(e, 2, uC, dd(Math.round(d)));
                a(CC(DC(b, d), zC(new xC, c)))
            }
        },
        PC = function(a) {
            this.hh = new UC(a);
            this.Wj = new VC(a);
            this.ek = new WC(a)
        },
        VC = function(a) {
            this.ie = function(b) {
                b = b.me;
                a(CC(BC("rsv8Kc"), zC(new xC, b)))
            }
        },
        WC = function(a) {
            this.Ac = function(b) {
                var c = b.Pc,
                    d = b.Nf;
                b = b.status;
                d = DC(DC(BC("SOomke"), vC(new tC, d)), vC(new tC, b));
                b = new xC;
                c = gj(b, 2, yC, dd(Math.round(c)));
                a(CC(d, c))
            }
        },
        UC = function(a) {
            this.sh = new XC(a)
        },
        XC = function(a) {
            this.Ac = function(b) {
                var c = b.Pc;
                b = b.status;
                b = DC(BC("TP3y1d"), vC(new tC, b));
                var d = new xC;
                c = gj(d, 2, yC, dd(Math.round(c)));
                a(CC(b, c))
            }
        },
        YC = function() {
            sC.apply(this, arguments);
            var a = this;
            this.Gc = new NC(function(b) {
                return a.hm(b)
            })
        };
    _.T(YC, sC);
    _.ZC = function() {
        YC.apply(this, arguments)
    };
    _.T(_.ZC, YC);
    _.q = _.ZC.prototype;
    _.q.im = function() {
        this.A.apply(this, _.si(_.Sa.apply(0, arguments).map(function(a) {
            return {
                Ec: !0,
                yd: 2,
                jd: a.toJSON()
            }
        })))
    };
    _.q.Nc = function() {
        this.A.apply(this, _.si(_.Sa.apply(0, arguments).map(function(a) {
            return {
                Ec: !0,
                yd: 5,
                jd: a.toJSON()
            }
        })))
    };
    _.q.gh = function() {
        this.A.apply(this, _.si(_.Sa.apply(0, arguments).map(function(a) {
            return {
                Ec: !0,
                yd: 15,
                jd: a.toJSON()
            }
        })))
    };
    _.q.kj = ca(3);
    _.q.km = function() {
        this.A.apply(this, _.si(_.Sa.apply(0, arguments).map(function(a) {
            return {
                Ec: !0,
                yd: 17,
                jd: a.toJSON()
            }
        })))
    };
    _.q.hm = function() {
        this.A.apply(this, _.si(_.Sa.apply(0, arguments).map(function(a) {
            return {
                Ec: !1,
                yd: 1,
                jd: a.toJSON()
            }
        })))
    };
    var $C = function(a, b) {
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
    var aD = function(a, b, c, d, e, f, g, h) {
        _.ZC.call(this, a, b);
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
    _.T(aD, _.ZC);
    var bD = function(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.g.length) {
            var b = bg(a.g, a.j);
            a.o(a.C + "?e=1", b);
            a.g = []
        }
    };
    aD.prototype.A = function() {
        var a = _.Sa.apply(0, arguments),
            b = this;
        try {
            this.K && 65536 <= bg(this.g.concat(a), this.j).length && bD(this), this.M && !this.D && (this.D = !0, this.M.g(function() {
                bD(b)
            })), this.g.push.apply(this.g, _.si(a)), this.g.length >= this.I && bD(this), this.g.length && null === this.l && (this.l = setTimeout(function() {
                bD(b)
            }, this.Da))
        } catch (c) {
            ag(c, this.j)
        }
    };
    var Xv = function(a, b, c, d, e, f) {
        aD.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", $C, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!_.u.globalThis.fetch, f)
    };
    _.T(Xv, aD);
    var cD = new iA(494575051),
        dD = new kA(489560439),
        eD = new kA(505762507);
    var fD, xo, vp, gD, hD, iD, jD, kD, lD, Vu, Uu, iv, mD, Vv, nD, oD, pD, Lo, qD, rD, sD, tD, Tr, uD, vD, wD, Uv, yv, xD, dv, yD, zD, AD, Io, BD, HD, JD, ir, KD, Fl, uu, MD, $q, ND, OD, rq, PD, QD, RD, Jt, Qt, SD, TD, UD, VD, WD, bv, XD, $u, YD, yn, vn, ZD, $D, zk, Pu, bE, cE, dE, so, eE, Qu, Zk, fE, gE, hE, iE, Yk, Gt, St, Ht, jE, kE, It, lE, mE, nE, oE, Us, xs, pE, us, qE, rE, gF, hF, iF, Kv, Lv, jF, Mv, Jv, kF, lF, xt, Ov, mF;
    fD = new _.U(607106222);
    xo = new _.U(577939489, !0);
    vp = new iA(7, .1);
    gD = new _.U(212);
    hD = new _.U(561694963, !0);
    iD = new _.U(609732864);
    jD = new iA(462420536);
    kD = new _.U(476475256, !0);
    lD = new iA(438663674);
    Vu = new iA(45409629);
    Uu = new iA(522348973);
    iv = new iA(550605190);
    mD = new iA(564509649);
    Vv = new iA(578655462, 20);
    _.qq = new _.U(571050247, !0);
    _.lq = new _.U(570864697, !0);
    nD = new _.U(558225291);
    oD = new _.U(586621833, !0);
    pD = new _.U(591917863);
    Lo = new _.U(45619539);
    qD = new _.U(582386403);
    rD = new _.U(603086552);
    sD = new _.U(577861852);
    tD = new _.U(573236024, !0);
    Tr = new _.U(453);
    uD = new _.U(454);
    vD = new iA(377289019, 1E4);
    wD = new iA(529, 20);
    Uv = new iA(573282293, .01);
    yv = new _.U(605625700, !0);
    xD = new jA(10);
    dv = new iA(610770343);
    yD = new _.U(607352955, !0);
    zD = new _.U(610525552);
    AD = new _.U(360245597, !0);
    Io = new _.U(540043576, !0);
    BD = new iA(592342304);
    _.CD = new _.U(479390945);
    _.DD = new _.U(518650310);
    _.ED = new _.U(547020083);
    _.FD = new _.U(561164161, !0);
    _.GD = new iA(550718589, 250);
    HD = new _.U(586382198);
    _.ID = new _.U(600451522, !0);
    JD = new iA(575880738, 10);
    ir = new iA(586681283);
    KD = new _.U(599186119, !0);
    _.LD = new _.U(531615531);
    Fl = new _.U(85);
    uu = new _.U(524098256);
    MD = new _.U(595824397, !0);
    $q = new iA(532520346, 120);
    ND = new _.U(557870754, !0);
    OD = new kA(466086960);
    rq = new _.U(596058628, !0);
    PD = new iA(398776877, 6E4);
    QD = new iA(374201269, 6E4);
    RD = new iA(371364213, 6E4);
    Jt = new _.U(606310399);
    Qt = new _.U(570764855, !0);
    SD = new jA(579921177, "control_1\\.\\d");
    TD = new iA(570764854, 50);
    UD = new _.U(578725095, !0);
    VD = new _.U(453275889);
    WD = new _.U(377936516, !0);
    bv = new iA(599575765, 1E3);
    XD = new _.U(605401295);
    $u = new iA(609715571);
    YD = new iA(24);
    yn = new kA(1);
    vn = new jA(2, "1-0-40");
    ZD = new _.U(608664189);
    $D = new _.U(608330569);
    zk = new _.U(602464517);
    _.aE = new iA(506394061, 100);
    Pu = new kA(489);
    bE = new _.U(392065905);
    cE = new iA(360245595, 500);
    dE = new _.U(561985307);
    so = new _.U(45397804, !0);
    eE = new _.U(45398607, !0);
    Qu = new _.U(424117738);
    Zk = new _.U(531493729);
    fE = new _.U(563462360, !0);
    gE = new _.U(555237688);
    hE = new _.U(555237687);
    iE = new _.U(555237686);
    Yk = new _.U(507033477, !0);
    Gt = new _.U(399705355);
    St = new _.U(45420038);
    Ht = new iA(514795754, 2);
    jE = new iA(609173130);
    kE = new _.U(607425748);
    It = new _.U(590730356);
    lE = new _.U(609118749);
    mE = new _.U(564724551);
    nE = new _.U(567489814, !0);
    oE = new _.U(45415915, !0);
    Us = new _.U(582338617, !0);
    xs = new _.U(588117531);
    pE = new _.U(582287318, !0);
    us = new iA(596918936, 500);
    qE = new _.U(609053740);
    rE = new _.U(501);
    gF = new _.U(439828594);
    hF = new _.U(483962503);
    iF = new _.U(506738118);
    Kv = new _.U(77);
    Lv = new _.U(78);
    jF = new _.U(83);
    Mv = new _.U(80);
    Jv = new _.U(76);
    kF = new _.U(84);
    lF = new _.U(1958);
    xt = new _.U(1973);
    Ov = new _.U(188);
    mF = new _.U(485990406);
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
    var nF = function(a, b) {
        this.g = ig(a);
        this.A = b
    };
    nF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return this
    };
    nF.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.A.call(void 0, a.value),
            done: a.done
        }
    };
    var oF = function(a, b) {
            return new nF(a, b)
        },
        pF = function(a) {
            this.A = a;
            this.g = 0
        };
    pF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return this
    };
    pF.prototype.next = function() {
        for (; this.g < this.A.length;) {
            var a = this.A[this.g].next();
            if (!a.done) return a;
            this.g++
        }
        return {
            done: !0
        }
    };
    var qF = function() {
        return new pF(_.Sa.apply(0, arguments).map(ig))
    };
    var rF = _.t.URL,
        sF;
    try {
        new rF("http://example.com"), sF = !0
    } catch (a) {
        sF = !1
    }
    var tF = sF,
        uF = function(a) {
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
    uF.prototype.get = function(a) {
        return (a = this.g.get(a)) && a.length ? a[0] : null
    };
    uF.prototype.getAll = function(a) {
        return [].concat(_.si(this.g.get(a) || []))
    };
    uF.prototype.has = function(a) {
        return this.g.has(a)
    };
    uF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return qF.apply(null, _.si(oF(this.g, function(a) {
            var b = a[0];
            return oF(a[1], function(c) {
                return [b, c]
            })
        })))
    };
    uF.prototype.toString = function() {
        return Eg(this)
    };
    var Eg = function(a) {
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
        wF = function(a) {
            var b = _.CA(document, "A");
            try {
                _.jb(b, Oa(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if ("" === c || ":" === c || ":" != c[c.length - 1]) throw Error(a + " is not a valid URL.");
            if (!vF.has(c)) throw Error(a + " is not a valid URL.");
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
            vF.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        },
        kg = function(a) {
            if (tF) {
                try {
                    var b = new rF(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = vF.get(b.protocol);
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
            return wF(a)
        },
        vF = new _.u.Map([
            ["http:", "80"],
            ["https:", "443"],
            ["ws:", "80"],
            ["wss:", "443"],
            ["ftp:", "21"]
        ]),
        jg = function(a) {
            return tF && a.searchParams ? a.searchParams : new uF(a.search)
        };
    var xF = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.Yf("IFRAME", b);
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
    var yF = function(a) {
        this.F = _.A(a)
    };
    _.T(yF, _.D);
    yF.da = [1, 2];
    var zF = function(a) {
        this.F = _.A(a)
    };
    _.T(zF, _.D);
    var Hg = Gf(zF);
    _.V = function() {
        this.M = this.M;
        this.Da = this.Da
    };
    _.V.prototype.M = !1;
    _.V.prototype.za = function() {
        this.M || (this.M = !0, this.A())
    };
    _.S = function(a, b) {
        _.kp(a, _.Nw(Gg, b))
    };
    _.kp = function(a, b) {
        a.M ? b() : (a.Da || (a.Da = []), a.Da.push(b))
    };
    _.V.prototype.A = function() {
        if (this.Da)
            for (; this.Da.length;) this.Da.shift()()
    };
    var AF = function(a, b, c, d) {
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
    _.T(AF, _.V);
    AF.prototype.A = function() {
        delete this.g;
        this.D.clear();
        this.l.clear();
        this.K.clear();
        this.I && (_.Zf(this.j, "message", this.I), delete this.I);
        delete this.j;
        delete this.o;
        _.V.prototype.A.call(this)
    };
    var BF = function(a) {
            if (a.g) return a.g;
            a.C && a.C(a.j) ? a.g = a.j : a.g = VA(a.j, a.H);
            var b;
            return null != (b = a.g) ? b : null
        },
        DF = function(a, b, c) {
            if (BF(a))
                if (a.g === a.j)(b = a.D.get(b)) && b(a.g, c);
                else {
                    var d = a.l.get(b);
                    if (d && d.gd) {
                        CF(a);
                        var e = ++a.J;
                        a.K.set(e, {
                            Hc: d.Hc,
                            wk: d.Yd(c),
                            Jl: "addEventListener" === b
                        });
                        a.g.postMessage(d.gd(c, e), "*")
                    }
                }
        },
        CF = function(a) {
            a.I || (a.I = function(b) {
                try {
                    var c = a.o ? a.o(b) : void 0;
                    if (c) {
                        var d = c.Sg,
                            e = a.K.get(d);
                        if (e) {
                            e.Jl || a.K.delete(d);
                            var f;
                            null == (f = e.Hc) || f.call(e, e.wk, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.ob(a.j, "message", a.I))
        };
    var EF = function(a, b) {
            var c = {
                cb: function(d) {
                    d = Hg(d);
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
        FF = {
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
        Fq = function(a) {
            _.V.call(this);
            this.g = this.l = !1;
            this.caller = new AF(a, "googlefcPresent", void 0, Lg);
            this.caller.D.set("getDataWithCallback", EF);
            this.caller.l.set("getDataWithCallback", FF)
        };
    _.T(Fq, _.V);
    Fq.prototype.A = function() {
        this.caller.za();
        _.V.prototype.A.call(this)
    };
    Fq.prototype.dd = function(a) {
        if (void 0 === a ? 0 : a) return !1;
        this.l || (this.g = !!BF(this.caller), this.l = !0);
        return this.g
    };
    var Dq = function(a) {
            return new _.u.Promise(function(b) {
                a.dd() && DF(a.caller, "getDataWithCallback", {
                    command: "loaded",
                    Rb: function(c) {
                        b(c.oc)
                    }
                })
            })
        },
        GF = function(a, b) {
            a.dd() && DF(a.caller, "getDataWithCallback", {
                command: "prov",
                spsp: cl(b),
                Rb: function() {}
            })
        };
    var HF = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        IF = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            this.l = a;
            this.g = null;
            this.D = {};
            this.o = 0;
            var c;
            this.K = null != (c = b.timeoutMs) ? c : 500;
            var d;
            this.I = null != (d = b.Yj) ? d : !1;
            this.j = null
        };
    _.T(IF, _.V);
    IF.prototype.A = function() {
        this.D = {};
        this.j && (_.Zf(this.l, "message", this.j), delete this.j);
        delete this.D;
        delete this.l;
        delete this.g;
        _.V.prototype.A.call(this)
    };
    var KF = function(a) {
        return "function" === typeof a.l.__tcfapi || null != JF(a)
    };
    IF.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = _.Hx(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.K && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.K));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = HF(c), c.internalBlockOnErrors = b.I, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            LF(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    IF.prototype.removeEventListener = function(a) {
        a && a.listenerId && LF(this, "removeEventListener", null, a.listenerId)
    };
    var MF = function(a, b) {
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
        LF = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
            else if (JF(a)) {
                NF(a);
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
        JF = function(a) {
            if (a.g) return a.g;
            a.g = VA(a.l, "__tcfapiLocator");
            return a.g
        },
        NF = function(a) {
            a.j || (a.j = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.ob(a.l, "message", a.j))
        },
        OF = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = HF(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (cg({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        PF = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return MF(a, c)
            })
        };
    var QF = function(a, b, c) {
            this.g = a;
            this.l = b;
            this.A = void 0 === c ? function() {} : c
        },
        RF = function(a, b, c) {
            return new QF(a, b, c)
        };
    QF.prototype.start = function(a, b) {
        a = void 0 === a ? !1 : a;
        if (this.g === this.g.top) try {
            xF(this.g), SF(this, a, b)
        } catch (c) {}
    };
    var SF = function(a, b, c) {
            b = void 0 === b ? !1 : b;
            var d = {};
            try {
                var e = lg(a.g),
                    f = mg(a.g);
                d.fc = e;
                d.fctype = f
            } catch (h) {}
            try {
                var g = Fg(a.g.location.href)
            } catch (h) {}
            b && g && (d.href = g);
            b = TF(a.l, d);
            hg(a.g, b, function() {
                a.A(!0)
            }, function() {
                a.A(!1)
            });
            c && GF(new Fq(a.g), c)
        },
        TF = function(a, b) {
            var c = new Uw(Sw, "https://fundingchoicesmessages.google.com/i/%{id}");
            b = _.z(Object, "assign").call(Object, {}, b, {
                ers: 3
            });
            return _.Zw(bx(c, {
                id: a
            }), b)
        };
    var UF = _.u.Promise;
    var VF = function(a) {
        this.A = a
    };
    VF.prototype.send = function(a, b, c) {
        this.A.then(function(d) {
            d.send(a, b, c)
        })
    };
    VF.prototype.g = function(a, b) {
        return this.A.then(function(c) {
            return c.g(a, b)
        })
    };
    var WF = function(a) {
        this.data = a
    };
    var XF = function(a) {
        this.A = a
    };
    XF.prototype.send = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        YF(d.port1, b);
        this.A.postMessage(a, [d.port2].concat(c))
    };
    XF.prototype.g = function(a, b) {
        var c = this;
        return new UF(function(d) {
            c.send(a, d, b)
        })
    };
    var ZF = function(a, b) {
            YF(a, b);
            return new XF(a)
        },
        YF = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new WF(c.data, ZF(c.ports[0])))
            })
        };
    var Wk = function(a) {
            var b = a.vb,
                c = void 0 === a.Ab ? "ZNWN1d" : a.Ab,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.nf ? void 0 : a.nf;
            return $F({
                destination: a.destination,
                hi: function() {
                    return b.contentWindow
                },
                zl: aG(a.origin),
                Ab: c,
                onMessage: d,
                nf: e
            })
        },
        $F = function(a) {
            var b = a.destination,
                c = a.hi,
                d = a.zl,
                e = void 0 === a.pe ? void 0 : a.pe,
                f = a.Ab,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.nf ? void 0 : a.nf,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new VF(new UF(function(l, m) {
                var n = function(p) {
                    p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(ZF(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        aG = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var Xg = function(a) {
            return "string" === typeof a
        },
        yo = function(a) {
            return "boolean" === typeof a
        },
        Tg = function(a) {
            return !!a && ("object" === typeof a || "function" === typeof a)
        },
        pt = Vg(),
        Wg = Vg();
    var bG = navigator,
        cG = function(a) {
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
        dG = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return cG(a.toLowerCase())
        },
        eG = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        fG = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        gG = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
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
    var hG = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Rb({
                    oc: null != c ? c : void 0,
                    Ne: d ? void 0 : 2
                })
            })
        },
        iG = {
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
        jG = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            var c;
            this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
            this.caller = new AF(a, "__uspapiLocator", function(d) {
                return "function" === typeof d.__uspapi
            }, $g);
            this.caller.D.set("getDataWithCallback", hG);
            this.caller.l.set("getDataWithCallback", iG)
        };
    _.T(jG, _.V);
    jG.prototype.A = function() {
        this.caller.za();
        _.V.prototype.A.call(this)
    };
    var kG = function(a, b) {
        var c = {};
        if (BF(a.caller)) {
            var d = _.Hx(function() {
                b(c)
            });
            DF(a.caller, "getDataWithCallback", {
                Rb: function(e) {
                    e.Ne || (c = e.oc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var fh = function(a) {
            this.g = a || {
                cookie: ""
            }
        },
        nG = function() {
            var a = lG;
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                zg: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            mG(a, "TESTCOOKIESENABLED");
            return !0
        };
    fh.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.to;
            d = c.fm || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.zg
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    fh.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = ix(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var mG = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            zg: 0,
            path: c,
            domain: d
        })
    };
    fh.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    fh.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = ix(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) mG(this, b[a])
    };
    var lG = new fh("undefined" == typeof document ? null : document);
    var oG = function(a, b) {
        this.g = a;
        this.options = b
    };
    var pG = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        qG = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        rG = function(a, b) {
            (0, a.__gpp)("getSection", function(c) {
                b.Rb({
                    oc: null != c ? c : void 0,
                    Ne: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        sG = {
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
        tG = {
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
        uG = {
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
        vG = function(a, b) {
            var c = void 0 === b ? {} : b;
            b = c.gppApiDetectionMode;
            c = c.timeoutMs;
            _.V.call(this);
            this.caller = new AF(a, b && 1 !== b && 3 !== b ? "__gppLocator_non_existent" : "__gppLocator", b && 1 !== b && 2 !== b ? void 0 : function(d) {
                return "function" === typeof d.__gpp
            }, ah);
            this.caller.D.set("addEventListener", pG);
            this.caller.l.set("addEventListener", sG);
            this.caller.D.set("removeEventListener", qG);
            this.caller.l.set("removeEventListener", tG);
            this.caller.D.set("getDataWithCallback", rG);
            this.caller.l.set("getDataWithCallback", uG);
            this.timeoutMs = null != c ? c : 500
        };
    _.T(vG, _.V);
    vG.prototype.A = function() {
        this.caller.za();
        _.V.prototype.A.call(this)
    };
    vG.prototype.addEventListener = function(a) {
        var b = this,
            c = _.Hx(function() {
                a(wG, !0)
            }),
            d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        DF(this.caller, "addEventListener", {
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
                        a(xG, !0);
                        return
                    }
                    a(yG, !0)
                }
            }
        })
    };
    vG.prototype.removeEventListener = function(a) {
        DF(this.caller, "removeEventListener", {
            listenerId: a
        })
    };
    var zG = function(a) {
            if (!a) return !1;
            var b = Pf(a.split("~")[0]),
                c = Qf(b.slice(0, 6)),
                d = Qf(b.slice(6, 12)),
                e = new AB;
            var f = _.vl(e, 1, c);
            var g = _.vl(f, 2, d);
            for (var h = b.slice(12), k = Qf(h.slice(0, 12)), l = [], m = h.slice(12).replace(/0+$/, ""), n = 0; n < k; n++) {
                if (0 === m.length) throw Error("Found " + n + " of " + k + " sections [" + l + "] but reached end of input [" + h + "]");
                var p = 0 === Qf(m[0]);
                m = m.slice(1);
                var r = Tf(m, h),
                    v = 0 === l.length ? 0 : l[l.length - 1],
                    w = Rf(r) + v;
                m = m.slice(r.length);
                if (p) l.push(w);
                else {
                    for (var x = Tf(m, h), B = Rf(x), C = 0; C <= B; C++) l.push(w + C);
                    m = m.slice(x.length)
                }
            }
            if (0 < m.length) throw Error("Found " + k + " sections [" + l + "] but has remaining input [" + m + "], entire input [" + h + "]");
            var F = _.Ie(g, 3, l, Vc);
            var G = _.z(a, "includes").call(a, "~") ? a.split("~").slice(1) : [];
            for (var P = 0; P < ue(F, 3, Wc, 2).length; ++P) {
                var R = ue(F, 3, Wc, 2)[P],
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
                        var Pc = Sf(mf, IB),
                            Kd = Qf(Pc.slice(0, 6));
                        Pc = Pc.slice(6);
                        if (1 !== Kd) throw Error("Unable to decode unsupported USCA Section specification version " + Kd + " - only version 1 is supported.");
                        for (var we = 0, Wa = [], Qb = 0; Qb < HB.length; Qb++) {
                            var nf = HB[Qb];
                            Wa.push(Qf(Pc.slice(we, we + nf)));
                            we += nf
                        }
                        var pg = new DB;
                        og = _.vl(pg, 1, Kd);
                        var yh = Wa.shift();
                        ng = _.L(og, 2, yh);
                        var Ld = Wa.shift();
                        Jd = _.L(ng, 3, Ld);
                        var Md = Wa.shift();
                        ve = _.L(Jd, 4, Md);
                        var jj = Wa.shift();
                        lf = _.L(ve, 5, jj);
                        var kj = Wa.shift();
                        Oc = _.L(lf, 6, kj);
                        var lj = new CB,
                            zh = Wa.shift();
                        Id = _.L(lj, 1, zh);
                        var of = Wa.shift();
                        dc = _.L(Id, 2, of );
                        var Ah = Wa.shift();
                        jc = _.L(dc, 3, Ah);
                        var qg = Wa.shift();
                        Ec = _.L(jc, 4, qg);
                        var pf = Wa.shift();
                        Zb = _.L(Ec, 5, pf);
                        var Bh = Wa.shift();
                        cc = _.L(Zb, 6, Bh);
                        var Ch = Wa.shift();
                        jd = _.L(cc, 7, Ch);
                        var Dh = Wa.shift();
                        Ib = _.L(jd, 8, Dh);
                        var Eh = Wa.shift();
                        Pa = _.L(Ib, 9, Eh);
                        Ab = _.di(Oc, 7, Pa);
                        var Fh = new BB,
                            Fc = Wa.shift();
                        db = _.L(Fh, 1, Fc);
                        var rg = Wa.shift();
                        Ta = _.L(db, 2, rg);
                        vb = _.di(Ab, 8, Ta);
                        var Qc = Wa.shift();
                        ha = _.L(vb, 9, Qc);
                        var sg = Wa.shift();
                        aa = _.L(ha, 10, sg);
                        var kd = Wa.shift();
                        wa = _.L(aa, 11, kd);
                        var Rc = Wa.shift();
                        var tg = qa = _.L(wa, 12, Rc);
                        if (1 === Z.length) var ug = GB(tg);
                        else {
                            var vg = GB(tg),
                                xe = void 0,
                                wg = void 0,
                                qf = void 0,
                                ye = Z[1];
                            if (0 === ye.length) throw Error("Cannot decode empty GPC segment string.");
                            var oc = Sf(ye, 3),
                                ze = Qf(oc.slice(0, 2));
                            if (0 > ze || 1 < ze) throw Error("Attempting to decode unknown GPC segment subsection type " + ze + ".");
                            qf = ze + 1;
                            var mj = Qf(oc.charAt(2)),
                                Ae = new EB;
                            wg = _.L(Ae, 2, qf);
                            xe = _.ul(wg, 1, !!mj);
                            ug = _.di(vg, 2, xe)
                        }
                        var xg = _.vm(ug, DB, 1);
                        if (1 === _.eg(xg, 5, 0) || 1 === _.eg(xg, 6, 0)) return !0;
                        break;
                    case 10:
                        if (0 === K.length) throw Error("Cannot decode empty USCO section string.");
                        var ld = K.split(".");
                        if (2 < ld.length) throw Error("Expected at most 2 segments but got " + ld.length + " when decoding " + K + ".");
                        var Rb = void 0,
                            Gh = void 0,
                            Nd = void 0,
                            Be = void 0,
                            Hh = void 0,
                            rf = void 0,
                            sf = void 0,
                            Bb = void 0,
                            Ih = void 0,
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
                        var Sc = Sf(Dg, PB),
                            uf = Qf(Sc.slice(0, 6));
                        Sc = Sc.slice(6);
                        if (1 !== uf) throw Error("Unable to decode unsupported USCO Section specification version " + uf + " - only version 1 is supported.");
                        for (var Qd = 0, Db = [], Jg = 0; Jg < OB.length; Jg++) {
                            var Lj = OB[Jg];
                            Db.push(Qf(Sc.slice(Qd, Qd + Lj)));
                            Qd += Lj
                        }
                        var kn = new KB;
                        Cg = _.vl(kn, 1, uf);
                        var Kg = Db.shift();
                        tf = _.L(Cg, 2, Kg);
                        var MT = Db.shift();
                        Bg = _.L(tf, 3, MT);
                        var NT = Db.shift();
                        Ag = _.L(Bg, 4, NT);
                        var OT = Db.shift();
                        md = _.L(Ag, 5, OT);
                        var PT = Db.shift();
                        zg = _.L(md, 6, PT);
                        var QT = new JB,
                            RT = Db.shift();
                        Pd = _.L(QT, 1, RT);
                        var ST = Db.shift();
                        yg = _.L(Pd, 2, ST);
                        var TT = Db.shift();
                        Od = _.L(yg, 3, TT);
                        var UT = Db.shift();
                        Ih = _.L(Od, 4, UT);
                        var VT = Db.shift();
                        Bb = _.L(Ih, 5, VT);
                        var WT = Db.shift();
                        sf = _.L(Bb, 6, WT);
                        var XT = Db.shift();
                        rf = _.L(sf, 7, XT);
                        Hh = _.di(zg, 7, rf);
                        var YT = Db.shift();
                        Be = _.L(Hh, 8, YT);
                        var ZT = Db.shift();
                        Nd = _.L(Be, 9, ZT);
                        var $T = Db.shift();
                        Gh = _.L(Nd, 10, $T);
                        var aU = Db.shift();
                        var sE = Rb = _.L(Gh, 11, aU);
                        if (1 === ld.length) var tE = NB(sE);
                        else {
                            var bU = NB(sE),
                                uE = void 0,
                                vE = void 0,
                                wE = void 0,
                                xE = ld[1];
                            if (0 === xE.length) throw Error("Cannot decode empty GPC segment string.");
                            var yE = Sf(xE, 3),
                                ln = Qf(yE.slice(0, 2));
                            if (0 > ln || 1 < ln) throw Error("Attempting to decode unknown GPC segment subsection type " + ln + ".");
                            wE = ln + 1;
                            var cU = Qf(yE.charAt(2)),
                                dU = new LB;
                            vE = _.L(dU, 2, wE);
                            uE = _.ul(vE, 1, !!cU);
                            tE = _.di(bU, 2, uE)
                        }
                        var zE = _.vm(tE, KB, 1);
                        if (1 === _.eg(zE, 5, 0) || 1 === _.eg(zE, 6, 0)) return !0;
                        break;
                    case 12:
                        if (0 === K.length) throw Error("Cannot decode empty usct section string.");
                        var Mj = K.split(".");
                        if (2 < Mj.length) throw Error("Expected at most 2 segments but got " + Mj.length + " when decoding " + K + ".");
                        var eU = void 0,
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
                            UE = void 0,
                            VE = Mj[0];
                        if (0 === VE.length) throw Error("Cannot decode empty core segment string.");
                        var mn = Sf(VE, XB),
                            yt = Qf(mn.slice(0, 6));
                        mn = mn.slice(6);
                        if (1 !== yt) throw Error("Unable to decode unsupported USCT Section specification version " + yt + " - only version 1 is supported.");
                        for (var zt = 0, Eb = [], At = 0; At < WB.length; At++) {
                            var WE = WB[At];
                            Eb.push(Qf(mn.slice(zt, zt + WE)));
                            zt += WE
                        }
                        var fU = new SB;
                        UE = _.vl(fU, 1, yt);
                        var gU = Eb.shift();
                        TE = _.L(UE, 2, gU);
                        var hU = Eb.shift();
                        SE = _.L(TE, 3, hU);
                        var iU = Eb.shift();
                        RE = _.L(SE, 4, iU);
                        var jU = Eb.shift();
                        QE = _.L(RE, 5, jU);
                        var kU = Eb.shift();
                        PE = _.L(QE, 6, kU);
                        var lU = new RB,
                            mU = Eb.shift();
                        OE = _.L(lU, 1, mU);
                        var nU = Eb.shift();
                        NE = _.L(OE, 2, nU);
                        var oU = Eb.shift();
                        ME = _.L(NE, 3, oU);
                        var pU = Eb.shift();
                        LE = _.L(ME, 4, pU);
                        var qU = Eb.shift();
                        KE = _.L(LE, 5, qU);
                        var rU = Eb.shift();
                        JE = _.L(KE, 6, rU);
                        var sU = Eb.shift();
                        IE = _.L(JE, 7, sU);
                        var tU = Eb.shift();
                        HE = _.L(IE, 8, tU);
                        GE = _.di(PE, 7, HE);
                        var uU = new QB,
                            vU = Eb.shift();
                        FE = _.L(uU, 1, vU);
                        var wU = Eb.shift();
                        EE = _.L(FE, 2, wU);
                        var xU = Eb.shift();
                        DE = _.L(EE, 3, xU);
                        CE = _.di(GE, 8, DE);
                        var yU = Eb.shift();
                        BE = _.L(CE, 9, yU);
                        var zU = Eb.shift();
                        AE = _.L(BE, 10, zU);
                        var AU = Eb.shift();
                        var XE = eU = _.L(AE, 11, AU);
                        if (1 === Mj.length) var YE = VB(XE);
                        else {
                            var BU = VB(XE),
                                ZE = void 0,
                                $E = void 0,
                                aF = void 0,
                                bF = Mj[1];
                            if (0 === bF.length) throw Error("Cannot decode empty GPC segment string.");
                            var cF = Sf(bF, 3),
                                nn = Qf(cF.slice(0, 2));
                            if (0 > nn || 1 < nn) throw Error("Attempting to decode unknown GPC segment subsection type " + nn + ".");
                            aF = nn + 1;
                            var CU = Qf(cF.charAt(2)),
                                DU = new TB;
                            $E = _.L(DU, 2, aF);
                            ZE = _.ul($E, 1, !!CU);
                            YE = _.di(BU, 2, ZE)
                        }
                        var dF = _.vm(YE, SB, 1);
                        if (1 === _.eg(dF, 5, 0) || 1 === _.eg(dF, 6, 0)) return !0;
                        break;
                    case 9:
                        if (0 === K.length) throw Error("Cannot decode empty USVA section string.");
                        var on = Sf(K, aC),
                            Bt = Qf(on.slice(0, 6));
                        on = on.slice(6);
                        if (1 !== Bt) throw Error("Unable to decode unsupported USVA Section specification version " + Bt + " - only version 1 is supported.");
                        for (var Ct = 0, Tb = [], Dt = 0; Dt < $B.length; Dt++) {
                            var eF = $B[Dt];
                            Tb.push(Qf(on.slice(Ct, Ct + eF)));
                            Ct += eF
                        }
                        var EU = Bt,
                            FU = new ZB,
                            GU = _.vl(FU, 1, EU),
                            HU = Tb.shift(),
                            IU = _.L(GU, 2, HU),
                            JU = Tb.shift(),
                            KU = _.L(IU, 3, JU),
                            LU = Tb.shift(),
                            MU = _.L(KU, 4, LU),
                            NU = Tb.shift(),
                            OU = _.L(MU, 5, NU),
                            PU = Tb.shift();
                        var QU = _.L(OU, 6, PU);
                        var RU = new YB,
                            SU = Tb.shift(),
                            TU = _.L(RU, 1, SU),
                            UU = Tb.shift(),
                            VU = _.L(TU, 2, UU),
                            WU = Tb.shift(),
                            XU = _.L(VU, 3, WU),
                            YU = Tb.shift(),
                            ZU = _.L(XU, 4, YU),
                            $U = Tb.shift(),
                            aV = _.L(ZU, 5, $U),
                            bV = Tb.shift(),
                            cV = _.L(aV, 6, bV),
                            dV = Tb.shift(),
                            eV = _.L(cV, 7, dV),
                            fV = Tb.shift();
                        var gV = _.L(eV, 8, fV);
                        var hV = _.di(QU, 7, gV),
                            iV = Tb.shift(),
                            jV = _.L(hV, 8, iV),
                            kV = Tb.shift(),
                            lV = _.L(jV, 9, kV),
                            mV = Tb.shift(),
                            nV = _.L(lV, 10, mV),
                            oV = Tb.shift(),
                            fF = _.L(nV, 11, oV);
                        if (1 === _.eg(fF, 5, 0) || 1 === _.eg(fF, 6, 0)) return !0
                }
            }
            return !1
        },
        yG = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        wG = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        xG = {
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
    var AG = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, AG.prototype)
    };
    _.T(AG, Error);
    AG.prototype.name = "ServerError";
    var BG = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, BG.prototype)
    };
    _.T(BG, Error);
    BG.prototype.name = "NetworkError";
    var ih = function() {};
    ih.prototype.g = function() {};
    ih.prototype.l = function() {};
    ih.prototype.A = function() {
        return []
    };
    ih.prototype.j = function() {
        return []
    };
    var uh = function(a, b) {
        a.g = hh(1, b, function() {});
        a.A = function(c, d) {
            return hh(2, b, function() {
                return []
            })(c, 2, d)
        };
        a.j = function() {
            return hh(3, b, function() {
                return []
            })(2)
        };
        a.l = function(c) {
            hh(16, b, function() {})(c, 2)
        }
    };
    var sh = function() {
            this.g = function() {}
        },
        wh = function(a, b) {
            a.g = hh(14, b, function() {})
        };
    var Bm = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Mm(b.innerWidth, b.innerHeight)).round() : _.yA(b || window).round()
            } catch (d) {
                return new _.Mm(-12245933, -12245933)
            }
        },
        CG = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        Mu = function(a, b) {
            b = void 0 === b ? _.t : b;
            a = a.scrollingElement || CG(a);
            return new _.Im(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        Wm = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var DG = function(a) {
        this.F = _.A(a)
    };
    _.T(DG, _.D);
    DG.prototype.pi = function() {
        return _.Ci(this, 1)
    };
    DG.prototype.oi = function() {
        return _.Ci(this, 2)
    };
    var ch = function(a) {
            return _.Q(a, 5)
        },
        EG = function(a, b) {
            Uh(a, 13, b)
        },
        FG = function(a, b) {
            Uh(a, 12, b)
        },
        GG = function(a, b) {
            return _.Ie(a, 10, b, _.cd)
        },
        HG = function(a, b) {
            return mi(a, 11, b)
        };
    DG.prototype.li = function() {
        return _.Ci(this, 11)
    };
    DG.da = [10];
    var JG, KG, LG;
    _.IG = function(a) {
        this.g = a;
        this.A = 0
    };
    JG = function(a, b) {
        if (0 === a.A) {
            if (_.Jn(a, "__gads", b)) b = !0;
            else {
                var c = a.g;
                ch(b) && eh(c) && (new fh(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === gh("GoogleAdServingTest", b, a.g)) {
                    var d = a.g;
                    ch(b) && eh(d) && mG(new fh(d.document), "GoogleAdServingTest")
                }
                b = c
            }
            a.A = b ? 2 : 1
        }
        return 2 === a.A
    };
    _.Jn = function(a, b, c) {
        return c ? gh(b, c, a.g) : null
    };
    KG = function(a, b, c, d) {
        if (d) {
            var e = _.Ig(c, 2) - Date.now() / 1E3;
            e = {
                zg: Math.max(e, 0),
                path: _.I(c, 3),
                domain: _.I(c, 4),
                fm: !1
            };
            c = c.getValue();
            a = a.g;
            ch(d) && eh(a) && (new fh(a.document)).set(b, c, e)
        }
    };
    LG = function(a, b, c) {
        if (c && gh(b, c, a.g)) {
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
                ch(c) && eh(g) && mG(new fh(g.document), f, "/", e.value)
            }
        }
    };
    var MG = {},
        NG = (MG[3] = cb(Vw(new Uw(Sw, "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), MG);
    ({})[3] = cb(Vw(new Uw(Sw, "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var OG = function(a) {
            this.g = a;
            this.A = pA()
        },
        PG = function(a) {
            var b = {};
            _.Pw(a, function(c) {
                b[c.g] = c.A
            });
            return b
        };
    _.QG = _.iw(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var RG = function(a, b, c, d, e, f) {
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
        this.K = (0, _.Mw)(this.C, this);
        this.U = f
    };
    _.T(RG, _.V);
    RG.prototype.C = function(a) {
        if (!("*" !== this.l && a.origin !== this.l || !this.Ud && a.source != this.j)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ja(b) && (a = b.i, b.c === this.Ab && a != this.D)) {
                if (2 !== this.status) try {
                    this.status = 2, SG(this), this.g && (this.g(), this.g = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ja(b)) && this.I.hasOwnProperty(a)) this.I[a](b)
            }
        }
    };
    var SG = function(a) {
        var b = {};
        b.c = a.Ab;
        b.i = a.D;
        a.U && (b.e = a.U);
        a.j.postMessage(JSON.stringify(b), a.l)
    };
    RG.prototype.o = function() {
        if (1 === this.status) {
            try {
                this.j.postMessage && SG(this)
            } catch (a) {}
            window.setTimeout((0, _.Mw)(this.o, this), 50)
        }
    };
    RG.prototype.connect = function(a) {
        a && (this.g = a);
        _.ob(window, "message", this.K);
        this.H && this.o()
    };
    var TG = function(a, b, c) {
        a.I[b] = c
    };
    RG.prototype.send = function(a, b) {
        var c = {};
        c.c = this.Ab;
        c.i = this.D;
        c.s = a;
        c.p = b;
        try {
            this.j.postMessage(JSON.stringify(c), this.l)
        } catch (d) {}
    };
    RG.prototype.A = function() {
        this.status = 3;
        _.Zf(window, "message", this.K);
        _.V.prototype.A.call(this)
    };
    var UG = new _.u.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        VG = new _.u.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var WG = function(a) {
        this.F = _.A(a)
    };
    _.T(WG, _.D);
    var XG = Gf(WG);
    var YG = function(a) {
        this.F = _.A(a)
    };
    _.T(YG, _.D);
    var ZG = function(a) {
        this.F = _.A(a)
    };
    _.T(ZG, _.D);
    var $G, aH, bH, cH;
    _.Jr = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    $G = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    aH = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    bH = function(a, b) {
        if (3 == _.Jr(b)) return !1;
        a();
        return !0
    };
    cH = function(a, b) {
        var c = !0;
        c = void 0 === c ? !1 : c;
        if (!bH(a, b))
            if (c) {
                var d = function() {
                    _.Zf(b, "prerenderingchange", d);
                    a()
                };
                _.ob(b, "prerenderingchange", d)
            } else {
                var e = !1,
                    f = $G(b),
                    g = function() {
                        !e && bH(a, b) && (e = !0, _.Zf(b, f, g))
                    };
                f && _.ob(b, f, g)
            }
    };
    _.Jh = function() {
        var a = this;
        this.promise = new _.u.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    _.dH = function() {
        this.g = Math.random()
    };
    _.$i = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .001)) try {
            if (c instanceof _.lC) var f = c;
            else f = new _.lC, _.Cn(c, function(h, k) {
                var l = f,
                    m = l.j++;
                h = _.mC(k, h);
                l.g.push(m);
                l.A[m] = h
            });
            var g = qC(f, "/pagead/gen_204?id=" + b + "&");
            g && rC(_.t, g)
        } catch (h) {}
    };
    var yi = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        wi = new _.u.Map;
    var eH = function(a) {
        this.F = _.A(a)
    };
    _.T(eH, _.D);
    var fH = function(a) {
        this.F = _.A(a)
    };
    _.T(fH, _.D);
    var gH = function(a, b) {
        return _.Ie(a, 1, b, _.qd)
    };
    fH.da = [1];
    var hH = function(a) {
        this.F = _.A(a)
    };
    _.T(hH, _.D);
    var iH = function(a, b) {
        return _.Ie(a, 1, b, Xc)
    };
    hH.da = [1, 2];
    var jH = function(a) {
        this.F = _.A(a)
    };
    _.T(jH, _.D);
    var kH = function(a, b) {
        return _.L(a, 1, b)
    };
    var lH = function(a) {
        this.F = _.A(a)
    };
    _.T(lH, _.D);
    var mH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, mH.prototype);
        this.name = "InputError"
    };
    _.T(mH, Error);
    var nH = function() {
            this.gb = !1
        },
        oH = function() {
            nH.apply(this, arguments);
            this.pd = new _.Jh
        };
    _.T(oH, nH);
    var pH = function(a, b) {
        a.gb || (a.gb = !0, a.fe = b, a.pd.resolve(b))
    };
    _.dw.Object.defineProperties(oH.prototype, {
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
    var Yp = function() {
        oH.apply(this, arguments)
    };
    _.T(Yp, oH);
    _.q = Yp.prototype;
    _.q.G = function(a) {
        pH(this, a)
    };
    _.q.Ha = function(a) {
        pH(this, null != a ? a : null)
    };
    _.q.ca = function() {
        pH(this, null)
    };
    _.q.La = function(a) {
        var b = this;
        a.then(function(c) {
            pH(b, c)
        })
    };
    _.q.ib = function(a) {
        this.gb || (this.gb = !0, this.fe = null, this.ee = a, this.pd.reject(a))
    };
    var qH = function() {
        oH.apply(this, arguments)
    };
    _.T(qH, oH);
    qH.prototype.G = function(a) {
        pH(this, a)
    };
    qH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void pH(b, c)
        })
    };
    qH.prototype.ib = function(a) {
        this.gb || (this.gb = !0, this.ee = a, this.pd.reject(a))
    };
    var rH = function() {
        qH.apply(this, arguments)
    };
    _.T(rH, qH);
    rH.prototype.Ha = function(a) {
        pH(this, null != a ? a : null)
    };
    rH.prototype.ca = function() {
        pH(this, null)
    };
    rH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.Ha(c)
        })
    };
    var sH = function(a) {
        this.gb = !1;
        this.Vb = a
    };
    _.T(sH, nH);
    sH.prototype.Lc = function() {
        return this.Vb.gb
    };
    sH.prototype.ng = function() {
        return null != this.Vb.fe
    };
    _.dw.Object.defineProperties(sH.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Vb.ee
            }
        }
    });
    var tH = function(a) {
        sH.call(this, a);
        this.Vb = a
    };
    _.T(tH, sH);
    _.dw.Object.defineProperties(tH.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Vb.fe
            }
        }
    });
    var uH = function(a) {
        sH.call(this, a);
        this.Vb = a
    };
    _.T(uH, sH);
    _.dw.Object.defineProperties(uH.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.Vb.fe) ? a : null
            }
        }
    });
    var vH = function() {
        sH.apply(this, arguments)
    };
    _.T(vH, sH);
    _.dw.Object.defineProperties(vH.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.Vb.fe) ? a : null
            }
        }
    });
    var Kr = function() {
        oH.apply(this, arguments)
    };
    _.T(Kr, oH);
    Kr.prototype.notify = function() {
        pH(this, null)
    };
    var wH = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        xH = function(a, b) {
            b = void 0 === b ? !1 : b;
            oH.call(this);
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
                c.gb || pH(c, d)
            }, function() {
                c.gb || pH(c, null)
            })
        };
    _.T(xH, oH);
    var yH = function() {
        _.V.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = [];
        this.D = []
    };
    _.T(yH, _.V);
    var zH = function(a, b, c) {
        a.j.push({
            Hd: void 0 === c ? !1 : c,
            Uh: b
        })
    };
    yH.prototype.A = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        this.D.length = 0;
        _.V.prototype.A.call(this)
    };
    var AH = function(a, b, c) {
        _.V.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.ia = c;
        this.started = !1;
        this.D = new yH;
        _.S(this, this.D)
    };
    _.T(AH, _.V);
    AH.prototype.start = function() {
        var a = this,
            b;
        return _.qb(function(c) {
            if (1 == c.g) {
                if (a.started) return c.return();
                a.started = !0;
                c.l = 2;
                return c.yield(Fi(a.D.j, a.timeoutMs), 4)
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
                b = sb(c);
                if (a.M) return c.return();
                b instanceof mH ? a.K(b) : b instanceof Error && (a.ia ? a.ia(a.id, b) : a.I(b), a.l(b));
                c.g = 0
            }
        })
    };
    var W = function(a, b) {
            b = void 0 === b ? new Yp : b;
            a.D.g.push(b);
            return b
        },
        BH = function(a) {
            var b = void 0 === b ? new rH : b;
            a.D.g.push(b);
            return b
        },
        CH = function(a, b) {
            b = void 0 === b ? new Kr : b;
            a.D.g.push(b);
            return b
        },
        X = function(a, b) {
            zH(a.D, b);
            b = new tH(b);
            a.D.l.push(b);
            return b
        },
        DH = function(a, b) {
            zH(a.D, b);
            return new uH(b)
        },
        EH = function(a, b) {
            zH(a.D, b, !0);
            return new uH(b)
        },
        FH = function(a, b) {
            zH(a.D, b)
        },
        GH = function(a, b) {
            b = new xH(b);
            zH(a.D, b);
            b = new tH(b);
            a.D.l.push(b);
            return b
        };
    AH.prototype.K = function() {};
    AH.prototype.l = function(a) {
        if (!this.ia && this.D.g.length) {
            a = new mH(a.message);
            for (var b = _.y(this.D.g), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.Lc) {
                    var d = a;
                    c.gb = !0;
                    c.ee = d;
                    c.pd.reject(d)
                }
        }
    };
    var HH = function(a, b, c, d, e, f) {
        AH.call(this, a, e, f);
        this.f = b;
        this.C = d;
        a = {};
        c = _.y(_.z(Object, "entries").call(Object, c));
        for (b = c.next(); !b.done; b = c.next()) d = _.y(b.value), b = d.next().value, (d = d.next().value) && (a[b] = DH(this, d));
        this.o = a
    };
    _.T(HH, AH);
    HH.prototype.g = function() {
        for (var a = this.f, b = {}, c = _.y(_.z(Object, "entries").call(Object, this.o)), d = c.next(); !d.done; d = c.next()) {
            var e = _.y(d.value);
            d = e.next().value;
            e = e.next().value;
            b[d] = e.value
        }
        a = a.call(this, b, this.C);
        this.j(a)
    };
    HH.prototype.I = function() {};
    var Hq = function(a, b, c, d, e, f) {
        HH.call(this, a, b, c, d, e, f);
        this.output = W(this, new Yp)
    };
    _.T(Hq, HH);
    Hq.prototype.j = function(a) {
        this.output.La(a)
    };
    var IH = function(a, b, c, d, e, f, g) {
        HH.call(this, a, b, c, d, f, g);
        this.finished = new Kr;
        a = _.z(Object, "keys").call(Object, e);
        a = _.y(a);
        for (b = a.next(); !b.done; b = a.next()) this[b.value] = W(this)
    };
    _.T(IH, HH);
    IH.prototype.j = function(a) {
        a = _.y(_.z(Object, "entries").call(Object, a));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            pH(this[b], c)
        }
        this.finished.notify()
    };
    var JH = function(a) {
        this.g = void 0 === a ? function() {} : a
    };
    var ok = function(a) {
        a = void 0 === a ? new JH : a;
        _.V.call(this);
        this.C = a;
        this.D = [];
        this.I = [];
        this.H = {};
        this.l = [];
        this.j = new _.Jh;
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
        KH = function(a, b, c, d, e, f) {
            b = new IH(b, c, d, e, f, void 0, a.C.g);
            return J(a, b)
        },
        au = function(a, b) {
            a.I.push(b);
            _.S(a, b)
        },
        xk = function(a) {
            var b, c, d, e, f, g, h, k, l, m, n, p;
            return _.qb(function(r) {
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
    var LH = function(a) {
        this.F = _.A(a)
    };
    _.T(LH, _.D);
    LH.da = [1];
    var MH = [0, Vy, Bz];
    var NH = function(a) {
        this.F = _.A(a)
    };
    _.T(NH, _.D);
    NH.da = [1, 2];
    NH.prototype.g = Ff([0, Vy, Bz, Vy, MH]);
    _.pq = 728 * 1.38;
    var PH, OH;
    PH = function() {
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
        this.floatingAdsStacking = new OH;
        this.sideRailProcessedFixedElements = new _.u.Set;
        this.sideRailAvailableSpace = new _.u.Map;
        this.sideRailPlasParam = new _.u.Map;
        this.A = [];
        this.g = null
    };
    _.Cj = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.u.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.u.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.u.Map)) : a.google_reactive_ads_global_state = new PH;
        return a.google_reactive_ads_global_state
    };
    OH = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var TH, VH, RH;
    _.QH = function(a) {
        this.g = _.Cj(a).floatingAdsStacking
    };
    _.SH = function(a, b) {
        return new RH(a, b)
    };
    TH = function(a) {
        a = _.MA(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    _.UH = function(a, b) {
        a.g.maxZIndexListeners.push(b);
        b(TH(a))
    };
    VH = function(a) {
        var b = TH(a);
        _.Pw(a.g.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    RH = function(a, b) {
        this.A = a;
        this.l = b;
        this.g = null
    };
    _.WH = function(a) {
        if (null == a.g) {
            var b = a.A,
                c = a.l,
                d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            VH(b);
            a.g = d
        }
    };
    _.XH = function(a) {
        if (null != a.g) {
            var b = a.A;
            delete b.g.maxZIndexRestrictions[a.g];
            VH(b);
            a.g = null
        }
    };
    var Vi, YH;
    _.Yi = function(a, b) {
        b = void 0 === b ? {} : b;
        this.pa = a;
        this.Fa = b
    };
    _.ZH = function(a, b) {
        var c = Si(a.pa.document, b);
        if (c) {
            var d;
            if (!(d = YH(a, c, b))) a: {
                d = a.pa.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    var e = YH(a, c, b);
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
    Vi = function(a, b) {
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = _.ZH(a, c.value)) return c;
        return null
    };
    YH = function(a, b, c) {
        if ("fixed" !== rB(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= _.Km(_.wB, b).width && 1 >= _.Km(_.wB, b).height || a.Fa.Ek && !a.Fa.Ek(b) ? !0 : !1;
        a.Fa.ci && a.Fa.ci(b, c, d);
        return d ? null : b
    };
    var Ui = 90 * 1.38;
    var $H, aI, bI;
    $H = _.iw(["* { pointer-events: none; }"]);
    aI = function(a, b) {
        var c = _.Yf("STYLE", a);
        c.textContent = _.tx(new _.sx($H[0], rx));
        null == a || a.head.appendChild(c);
        setTimeout(function() {
            null == a || a.head.removeChild(c)
        }, b)
    };
    _.cI = function(a, b, c) {
        if (!a.body) return null;
        var d = new bI;
        d.apply(a, b);
        return function() {
            var e = c || 0;
            0 < e && aI(b.document, e);
            _.oB(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.j,
                top: d.M
            });
            b.scrollTo(0, d.A)
        }
    };
    bI = function() {
        this.g = this.M = this.j = this.l = null;
        this.A = 0
    };
    bI.prototype.apply = function(a, b) {
        this.l = a.body.style.overflow;
        this.j = a.body.style.position;
        this.M = a.body.style.top;
        this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.A = _.Pi(b);
        _.oB(a.body, "top", -this.A + "px")
    };
    var hr = function(a, b) {
        this.g = a;
        this.A = void 0 === b ? 0 : b
    };
    hr.prototype.send = function(a, b) {
        var c = iq(mt(b, ej, 7), fj, 4),
            d = this.A++;
        _.vl(c, 1, d);
        a.gh(b)
    };
    _.dw.Object.defineProperties(hr.prototype, {
        Th: {
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
    _.dI = function(a, b) {
        return 0 >= b || null == a || !mq(a) ? null : sj(a, b)
    };
    var Nj = ["auto", "inherit", "100%"],
        Oj = Nj.concat(["none"]);
    var eI = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var fI = function(a, b, c, d, e, f) {
            this.l = _.iB(a);
            this.A = _.iB(b);
            this.j = c;
            this.g = _.iB(d);
            this.M = e;
            this.D = f
        },
        gI = function(a) {
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
        hI = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.hB(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = tB(a);
            d = _.Km(_.wB, a);
            var e = new jB(c.x, c.y, d.width, d.height);
            c = kB(e);
            d = String(rB(a, "zIndex"));
            var f = new _.hB(0, Infinity, Infinity, 0);
            for (var g = gg(a), h = g.g.body, k = g.g.documentElement, l = zA(g.g); a = sB(a);)
                if (!(_.Ox && 0 == a.clientWidth || Rx && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != rB(a, "overflow")) {
                    var m = tB(a),
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
            g = _.yA(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new jB(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? lB(e, f) : null;
            g = a = 0;
            l && !(new _.Mm(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.hB(0, 0, 0, 0);
            if (h = f)(e = lB(e, f)) ? (k = kB(f), m = kB(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.hB(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new fI(b, c, d, l, a, g)
        };
    var iI = function(a) {
        this.M = a;
        this.j = null;
        this.C = this.status = 0;
        this.A = null;
        this.Ab = "sfchannel" + a
    };
    iI.prototype.ug = function() {
        return 2 == this.C
    };
    var jI = function(a) {
        this.g = a
    };
    jI.prototype.getValue = function(a, b) {
        return null == this.g[a] || null == this.g[a][b] ? null : this.g[a][b]
    };
    var kI = function(a, b) {
        this.Pe = a;
        this.Qe = b;
        this.A = this.g = !1
    };
    var lI = function(a, b, c, d, e, f, g, h) {
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
    var mI = function(a, b) {
        this.A = a;
        this.U = b
    };
    mI.prototype.g = function(a) {
        this.U && a && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var nI = function(a, b, c) {
        mI.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.T(nI, mI);
    nI.prototype.g = function() {
        return mI.prototype.g.call(this, {
            uid: this.A,
            version: this.version
        })
    };
    var oI = function(a, b, c, d) {
        mI.call(this, a, void 0 === d ? "" : d);
        this.j = b;
        this.l = c
    };
    _.T(oI, mI);
    oI.prototype.g = function() {
        return mI.prototype.g.call(this, {
            uid: this.A,
            initialWidth: this.j,
            initialHeight: this.l
        })
    };
    var pI = function(a, b, c) {
        mI.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.T(pI, mI);
    pI.prototype.g = function() {
        return mI.prototype.g.call(this, {
            uid: this.A,
            description: this.description
        })
    };
    var qI = function(a, b, c, d) {
        mI.call(this, a, void 0 === d ? "" : d);
        this.l = b;
        this.push = c
    };
    _.T(qI, mI);
    qI.prototype.g = function() {
        return mI.prototype.g.call(this, {
            uid: this.A,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        })
    };
    var rI = function(a, b) {
        mI.call(this, a, void 0 === b ? "" : b)
    };
    _.T(rI, mI);
    rI.prototype.g = function() {
        return mI.prototype.g.call(this, {
            uid: this.A
        })
    };
    var sI = function(a, b, c) {
        mI.call(this, a, void 0 === c ? "" : c);
        this.j = b
    };
    _.T(sI, mI);
    sI.prototype.g = function() {
        var a = {
            uid: this.A,
            newGeometry: gI(this.j)
        };
        return mI.prototype.g.call(this, a)
    };
    var tI = function(a, b, c, d, e, f) {
        sI.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.l = d;
        this.push = e
    };
    _.T(tI, sI);
    tI.prototype.g = function() {
        var a = {
            uid: this.A,
            success: this.success,
            newGeometry: gI(this.j),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        };
        this.U && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var uI = function(a, b, c, d) {
        mI.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.T(uI, mI);
    uI.prototype.g = function() {
        return mI.prototype.g.call(this, {
            uid: this.A,
            width: this.width,
            height: this.height
        })
    };
    var vI = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        ml(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var wI, zI, AI, yI;
    wI = function() {
        this.g = []
    };
    _.xI = function(a) {
        return a + "px"
    };
    zI = function(a, b, c, d, e) {
        a.g.push(new yI(b, c, d, e))
    };
    AI = function(a) {
        for (var b = a.g.length - 1; 0 <= b; b--) {
            var c = a.g[b];
            c.A ? (c.l.style.removeProperty(c.g), c.l.style.setProperty(c.g, String(c.j), c.M)) : c.l.style[c.g] = c.j
        }
        a.g.length = 0
    };
    yI = function(a, b, c, d) {
        this.l = a;
        this.g = (this.A = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.j = this.A ? a.style.getPropertyValue(this.g) : a.style[this.g];
        this.M = this.A ? a.style.getPropertyPriority(this.g) : void 0;
        this.A ? (a.style.removeProperty(this.g), a.style.setProperty(this.g, String(c), d)) : a.style[this.g] = String(c)
    };
    var BI, CI;
    BI = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    CI = function() {
        var a = window,
            b = _.Vf(a);
        b && BI({
            label: "2",
            type: 9,
            value: b
        }, a)
    };
    _.DI = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = _.Vf(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && BI(_.z(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (_.Vf() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                }), f)
            }
            return l
        }
    };
    var II = function(a) {
        iI.call(this, a.uniqueId);
        var b = this;
        this.I = a.V;
        this.o = 1 === a.size;
        this.P = new kI(a.permissions.Pe && !this.o, a.permissions.Qe && !this.o);
        this.D = a.Rg;
        var c;
        this.Ma = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.xa = "file:" == c ? "*" : c + "//" + d;
        this.bb = !!a.Ud;
        this.W = a.gj ? "//" + a.gj + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ua = a.vb ? "*" : "https:" + this.W;
        this.ka = EI(a);
        this.l = new wI;
        FI(this, a.Rg, a.size);
        this.j = this.ga = hI(a.Rg);
        this.J = a.dm || "1-0-40";
        var e;
        this.ra = null != (e = a.fk) ? e : "";
        GI(this, a);
        this.Da = _.DI(412, function() {
            return HI(b)
        }, a.sb);
        this.H = -1;
        this.K = 0;
        var f = _.DI(415, function() {
            b.g && (b.g.name = "", a.Pi && a.Pi(), _.Zf(b.g, "load", f))
        }, a.sb);
        _.ob(this.g, "load", f);
        this.qg = _.DI(413, this.qg, a.sb);
        this.Wg = _.DI(417, this.Wg, a.sb);
        this.ah = _.DI(419, this.ah, a.sb);
        this.hg = _.DI(411, this.hg, a.sb);
        this.Rf = _.DI(409, this.Rf, a.sb);
        this.ia = _.DI(410, this.ia, a.sb);
        this.Kg = _.DI(416, this.Kg, a.sb);
        this.A = new RG(this.Ab, this.g.contentWindow, this.ua, !1);
        TG(this.A, "init_done", (0, _.Mw)(this.qg, this));
        TG(this.A, "register_done", (0, _.Mw)(this.Wg, this));
        TG(this.A, "report_error", (0, _.Mw)(this.ah, this));
        TG(this.A, "expand_request", (0, _.Mw)(this.hg, this));
        TG(this.A, "collapse_request", (0, _.Mw)(this.Rf, this));
        TG(this.A, "creative_geometry_update", (0, _.Mw)(this.ia, this));
        this.A.connect((0, _.Mw)(this.Kg, this))
    };
    _.T(II, iI);
    var FI = function(a, b, c) {
            a.o ? (b.style.width = _.vB("100%", !0), b.style.height = _.vB("auto", !0)) : (b.style.width = _.vB(c.width, !0), b.style.height = _.vB(c.height, !0))
        },
        GI = function(a, b) {
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
                    ck_on: nG() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.J + ";" + d.length + ";" + d;
            k = new lI(a.M, a.xa, a.ga, a.P, new jI(k), a.o, a.bb, a.Ma);
            var l = {};
            l.uid = k.g;
            l.hostPeerName = k.A;
            l.initialGeometry = gI(k.l);
            var m = k.permissions;
            m = JSON.stringify({
                expandByOverlay: m.Pe,
                expandByPush: m.Qe,
                readCookie: m.g,
                writeCookie: m.A
            });
            l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.g), l.reportCreativeGeometry = k.j, l.isDifferentSourceWindow = k.Ud, l.goog_safeframe_hlt = PG(k.hostpageLibraryTokens), l);
            k.U && (l.sentinel = k.U);
            k = JSON.stringify(l);
            l = f.width;
            f = f.height;
            a.o && (f = l = 0);
            m = {};
            e = (m.id = e, m.title = g, m.name = d + k, m.scrolling = "no", m.marginWidth = "0", m.marginHeight = "0", m.width = String(l), m.height = String(f), m["data-is-safeframe"] = "true", m);
            void 0 === c && (g = a.ra, f = a.W, d = a.J, (k = g) && (k = "?" + k), f = (void 0 === f ? "//tpc.googlesyndication.com" : f) + ("/safeframe/" + d + "/html/container.html" + k), (d = vI(_.AA(_.uA(a.D)))) && (f += (g ? "&" : "?") + "n=" + d), e.src = "https:" + f);
            null !== a.ka && (e.sandbox = a.ka);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.g = c, wA(a.g, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Ba(c, e), h = _.Yf("IFRAME"), wA(h, c), a.g = h);
            a.o && (a.g.style.minWidth = "100%");
            a.D.appendChild(a.g)
        };
    _.q = II.prototype;
    _.q.Kg = function() {
        _.ob(window, "resize", this.Da);
        _.ob(window, "scroll", this.Da)
    };
    _.q.qg = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new nI(b.uid, b.version, b.sentinel);
            if (this.M !== c.A || this.J !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.q.Wg = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.M !== (new oI(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).A) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.q.ah = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new pI(b.uid, b.description, b.sentinel);
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
            if (!_.ja(b) || !Sj(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new qI(b.uid, new _.hB(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            if (!(0 <= c.l.top && 0 <= c.l.left && 0 <= c.l.bottom && 0 <= c.l.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.P.Qe || !c.push && this.P.Pe) {
                var e = c.l,
                    f = c.push,
                    g = this.j = hI(this.g);
                if (e.top <= g.g.top && e.right <= g.g.right && e.bottom <= g.g.bottom && e.left <= g.g.left) {
                    if (!f)
                        for (var h = this.g.parentNode; h && h.style; h = h.parentNode) zI(this.l, h, "overflowX", "visible", "important"), zI(this.l, h, "overflowY", "visible", "important");
                    var k = kB(new jB(0, 0, this.j.A.getWidth(), this.j.A.getHeight()));
                    _.ja(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    zI(this.l, this.D, "position", "relative");
                    zI(this.l, this.g, "position", "absolute");
                    if (f) {
                        var l = this.l,
                            m = this.D,
                            n = k.getWidth();
                        zI(l, m, "width", _.xI(n));
                        var p = this.l,
                            r = this.D,
                            v = k.getHeight();
                        zI(p, r, "height", _.xI(v))
                    } else zI(this.l, this.g, "zIndex", "10000");
                    var w = this.l,
                        x = this.g,
                        B = k.getWidth();
                    zI(w, x, "width", _.xI(B));
                    var C = this.l,
                        F = this.g,
                        G = k.getHeight();
                    zI(C, F, "height", _.xI(G));
                    zI(this.l, this.g, "left", _.xI(k.left));
                    zI(this.l, this.g, "top", _.xI(k.top));
                    this.C = 2;
                    this.j = hI(this.g);
                    d = !0
                } else d = !1
            }
            a = d;
            this.A.send("expand_response", (new tI(this.M, a, this.j, c.l, c.push)).g());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (R) {
            var P;
            null == (P = this.I) || P.error("Invalid EXPAND_REQUEST message. Reason: " + R.message)
        }
    };
    _.q.Rf = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (!this.ug()) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid)) throw Error("Cannot parse JSON message");
            if (this.M !== (new rI(b.uid, b.sentinel)).A) throw Error("Wrong source container");
            AI(this.l);
            this.C = 0;
            this.g && (this.j = hI(this.g));
            this.A.send("collapse_response", (new sI(this.M, this.j)).g())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var HI = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.K) {
            case 0:
                JI(a);
                a.H = window.setTimeout((0, _.Mw)(a.fa, a), 1E3);
                a.K = 1;
                break;
            case 1:
                a.K = 2;
                break;
            case 2:
                a.K = 2
        }
    };
    II.prototype.ia = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Sj(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new uI(b.uid, b.width, b.height, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.o) d !== this.g.height && (this.g.height = d, HI(this));
            else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    II.prototype.fa = function() {
        if (1 == this.status || 2 == this.status) switch (this.K) {
            case 1:
                this.K = 0;
                break;
            case 2:
                JI(this), this.H = window.setTimeout((0, _.Mw)(this.fa, this), 1E3), this.K = 1
        }
    };
    var JI = function(a) {
            a.j = hI(a.g);
            a.A.send("geometry_update", (new sI(a.M, a.j)).g())
        },
        EI = function(a) {
            var b = null;
            a.ij && (b = a.ij);
            return null == b ? null : b.join(" ")
        },
        KI = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        LI = ["allow-top-navigation"],
        MI = ["allow-same-origin"],
        NI = TA([].concat(_.si(KI), _.si(LI)));
    TA([].concat(_.si(KI), _.si(MI)));
    TA([].concat(_.si(KI), _.si(LI), _.si(MI)));
    var OI = _.iw(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        PI = {
            ml: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Cf) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Cf)) throw new RangeError("Invalid subdomain: " + a.Cf);
                return cb("https://" + a.Cf + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            vo: function(a) {
                return _.eb(OI, a)
            }
        };
    var QI = function() {};
    QI.g = function() {
        throw Error("Must be overridden");
    };
    var Wj = function() {
        this.g = 0
    };
    _.T(Wj, QI);
    Wj.Bc = void 0;
    Wj.g = function() {
        return Wj.Bc ? Wj.Bc : Wj.Bc = new Wj
    };
    var RI = function() {
            this.cache = {}
        },
        gk = function() {
            SI || (SI = new RI);
            return SI
        },
        hk = function(a) {
            var b = nd(_.ai(a, 3));
            if (!b) return 3;
            if (void 0 === dk(a, 2)) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    RI.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            Rc: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            Yj(6, a, null == (d = g) ? void 0 : d.message);
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
            var e = Pz(c);
            this.cache[a] = e;
            return {
                Rc: e,
                success: !0
            }
        } catch (g) {
            var f;
            Yj(5, a, null == (f = g) ? void 0 : f.message);
            return {
                Rc: null,
                success: !1
            }
        }
    };
    RI.prototype.set = function(a, b) {
        var c = dk(a, 1),
            d = "_GESPSK-" + c;
        Oz(a);
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
    var SI = null;
    var TI = function(a, b) {
        AH.call(this, a);
        this.id = a;
        this.C = b
    };
    _.T(TI, AH);
    TI.prototype.I = function(a) {
        this.C(this.id, a)
    };
    var qk = function(a, b, c, d) {
        TI.call(this, 1041, d);
        this.j = b;
        this.H = X(this, a);
        c && (this.o = DH(this, c))
    };
    _.T(qk, TI);
    qk.prototype.g = function() {
        var a = this.H.value,
            b, c, d = null != (c = this.j) ? c : null == (b = this.o) ? void 0 : b.value;
        d && gk().set(a, d) && _.Ci(a, 2) && Yj(27, dk(a, 1))
    };
    var sk = function(a, b) {
        TI.call(this, 1048, b);
        this.j = W(this);
        this.o = W(this);
        this.H = X(this, a)
    };
    _.T(sk, TI);
    sk.prototype.g = function() {
        var a = this.H.value,
            b = function(c) {
                var d = {};
                Yj(c, dk(a, 1), null, (d.tic = String(Math.round((Date.now() - nd(_.ai(a, 3))) / 6E4)), d))
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
    var UI = function(a, b) {
        TI.call(this, 1094, b);
        this.j = CH(this);
        this.o = X(this, a)
    };
    _.T(UI, TI);
    UI.prototype.g = function() {
        var a = this.o.value;
        if (a) {
            if (void 0 !== a)
                for (var b = _.y(_.z(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, _.z(c, "startsWith").call(c, "_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            SI = new RI;
            this.j.notify()
        }
    };
    var Hk = function(a, b, c) {
        TI.call(this, 1049, c);
        this.j = b;
        FH(this, a)
    };
    _.T(Hk, TI);
    Hk.prototype.g = function() {
        for (var a = _.y(ak(this.j)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = gk().get(b, this.j).Rc;
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
        TI.call(this, 1027, c);
        this.He = a;
        this.H = b;
        this.j = W(this);
        this.o = W(this)
    };
    _.T(pk, TI);
    pk.prototype.g = function() {
        var a = gk().get(this.He, this.H).Rc;
        a || (a = Oz(Nz(this.He)), this.o.G(a.ib(jk(100))));
        this.j.G(a)
    };
    var nk = {
        oh: !1
    };
    var Lk = function(a, b) {
        TI.call(this, 1036, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(Lk, TI);
    Lk.prototype.g = function() {
        var a = this.o.value;
        0 !== hk(a) && this.j.G(a)
    };
    var wk = function(a, b, c) {
        TI.call(this, 1046, c);
        this.output = CH(this);
        this.j = W(this);
        this.o = X(this, b);
        FH(this, a)
    };
    _.T(wk, TI);
    wk.prototype.g = function() {
        this.j.G(this.o.value)
    };
    var tk = function(a, b, c) {
        TI.call(this, 1047, c);
        this.collectorFunction = a;
        this.j = W(this);
        this.o = W(this);
        this.H = W(this);
        this.J = X(this, b)
    };
    _.T(tk, TI);
    tk.prototype.g = function() {
        var a = this,
            b = this.J.value,
            c = dk(b, 1);
        Yj(18, c);
        try {
            var d = _.Uf();
            this.collectorFunction().then(function(e) {
                Yj(29, c, null, {
                    delta: String(_.Uf() - d)
                });
                a.j.G(mi(b, 2, e));
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
        TI.call(this, 1028, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(rk, TI);
    rk.prototype.g = function() {
        var a = this.o.value,
            b = dk(a, 1);
        null != nd(_.ai(a, 3)) || Yj(35, b);
        this.j.G(a)
    };
    var uk = function(a, b, c, d, e) {
        TI.call(this, 1050, e);
        this.J = c;
        this.H = d;
        this.j = W(this);
        this.o = X(this, a);
        this.P = DH(this, b)
    };
    _.T(uk, TI);
    uk.prototype.g = function() {
        var a = this.o.value,
            b = dk(a, 1),
            c = this.P.value;
        if (null == c) Yj(41, b), a.ib(jk(111)), this.j.G(a);
        else if ("string" !== typeof c) Yj(21, b), this.j.G(a.ib(jk(113)));
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.H : this.J)) {
                var d = {};
                Yj(12, b, null, (d.sl = String(c.length), d));
                b = a.ib(jk(108));
                _.ik(b, 2)
            } else c.length || Yj(20, b), _.ik(a, 10);
            this.j.G(a)
        }
    };
    var vk = function(a) {
        TI.call(this, 1046, a);
        this.output = CH(this)
    };
    _.T(vk, TI);
    vk.prototype.g = function() {
        var a = this;
        Zj().then(function() {
            a.output.notify()
        })
    };
    var VI = function(a, b, c, d, e) {
        e = void 0 === e ? nk : e;
        TI.call(this, 1059, d);
        this.P = b;
        this.J = c;
        this.o = e;
        this.j = W(this);
        this.W = X(this, a);
        this.H = DH(this, c)
    };
    _.T(VI, TI);
    VI.prototype.g = function() {
        var a = this.H.value;
        if (a) {
            var b = this.W.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            Yj(42, b, null, (c.ea = String(Number(this.P)), c));
            this.j.La(yk(b, d, a, this.J, this.C, this.o))
        }
    };
    var WI = function(a, b) {
        TI.call(this, 1057, b);
        this.j = a;
        this.o = W(this);
        this.H = W(this)
    };
    _.T(WI, TI);
    WI.prototype.g = function() {
        if (this.j)
            if ("object" !== typeof this.j) Yj(46, "UNKNOWN_COLLECTOR_ID"), XI(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.j.id,
                    b = this.j.networkCode;
                a && b && (delete this.j.id, Yj(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, Yj(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), XI(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (Yj(14, a), XI(this, a, 105)) : (_.H = Mf(eD), _.z(_.H, "includes")).call(_.H, a) ? (Yj(22, a), XI(this, a, 104)) : this.H.G(this.j)
            }
        else Yj(39, "UNKNOWN_COLLECTOR_ID"), XI(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var XI = function(a, b, c) {
        a.o.G(Nz(b).ib(jk(c)))
    };
    var Fk = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? nk : e;
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
    Fk.prototype.push = function(a) {
        var b = this;
        this.l || this.K();
        var c = function(f, g) {
            return void YI(b, f, g)
        };
        a = new WI(a, c);
        var d = new qk(a.o, void 0, this.g, c);
        c = new VI(a.H, this.l, this.g, c, this.I);
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
        } else if (c = String(_.qh(null != b ? b : "")), (_.H = Mf(dD), _.z(_.H, "includes")).call(_.H, c)) c = {}, Yj(48, "", null, (c.url = b, c));
        else {
            var d = new ok;
            c = new UI(this.g, function(e, f) {
                return void YI(a, e, f)
            });
            J(d, c);
            xk(d);
            this.A = 1;
            setTimeout(function() {
                a.A = 0
            }, 1E3 * _.Kf(cD));
            d = {};
            Yj(43, "", null, (d.url = b, d));
            return c.j.promise
        }
    };
    var YI = function(a, b, c) {
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
        TI.call(this, 1035, c);
        this.o = b;
        this.j = W(this);
        this.H = X(this, a)
    };
    _.T(Mk, TI);
    Mk.prototype.g = function() {
        var a = this,
            b = this.H.value,
            c = dk(b, 1),
            d = this.o.toString(),
            e = {};
        Yj(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        nb(f, this.o);
        var g = function() {
            var h = {};
            Yj(31, c, null, (h.url = d, h));
            a.j.G(b.ib(jk(109)));
            _.Zf(f, "error", g)
        };
        document.head.appendChild(f);
        _.ob(f, "error", g)
    };
    var Kk = new _.u.Set;
    var Ok = function(a, b) {
        try {
            var c = void 0 === _.Q(b, 6) ? !0 : _.Q(b, 6),
                d, e, f = Hf(_.eg(b, 2, 0)),
                g = _.I(b, 3);
            a: switch (_.eg(b, 4, 0)) {
                case 1:
                    var h = "pt";
                    break a;
                case 2:
                    h = "cr";
                    break a;
                default:
                    h = ""
            }
            var k = new az(f, g, h),
                l = null != (e = null == (d = _.vm(b, Yy, 5)) ? void 0 : _.I(d, 1)) ? e : "";
            k.Vd = l;
            k.g = c;
            k.B = a;
            var m = k.build();
            wb(m)
        } catch (n) {}
    };
    var ZI = function(a) {
        this.F = _.A(a)
    };
    _.T(ZI, _.D);
    ZI.prototype.g = Ff([0, Py, -3, Sy]);
    var $I = [.05, .1, .2, .5],
        aJ = [0, .5, 1],
        bJ = function(a) {
            a = Bk(a);
            if (!a) return -1;
            try {
                var b = CG(a.document);
                var c = new _.Mm(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Mm(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        cJ = function(a, b) {
            return 0 >= a || 0 >= b ? [] : $I.map(function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        eJ = function(a) {
            this.M = a.B;
            this.j = a.Sb;
            this.I = a.timer;
            this.l = null;
            this.g = a.sb;
            this.A = dJ(this);
            this.D = a.rm || !1
        },
        fJ = function() {
            var a;
            return !!window.IntersectionObserver && ev(null == (a = window.performance) ? void 0 : a.now)
        };
    eJ.prototype.getSlotId = function() {
        return this.l
    };
    var hJ = function(a, b) {
            if (a.A) {
                if (null != a.l) {
                    try {
                        gJ(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.g && a.g(c)
                    }
                    a.A && a.A.unobserve(a.j)
                }
                a.l = b;
                a.A.observe(a.j)
            }
        },
        dJ = function(a) {
            if (!_.t.IntersectionObserver) return null;
            var b = a.j.offsetWidth * a.j.offsetHeight,
                c = bJ(a.M);
            b = [].concat(_.si(aJ), _.si(cJ(c, b)));
            la(b);
            return new _.t.IntersectionObserver(function(d) {
                try {
                    for (var e = bJ(a.M), f = _.y(d), g = f.next(); !g.done; g = f.next()) {
                        var h = g.value,
                            k = Math.round(h.boundingClientRect.width * h.boundingClientRect.height),
                            l = Math.round(h.intersectionRect.width * h.intersectionRect.height),
                            m = Math.round(h.time);
                        if (_.z(Number, "isSafeInteger").call(Number, k) && _.z(Number, "isSafeInteger").call(Number, l) && _.z(Number, "isSafeInteger").call(Number, e) && _.z(Number, "isSafeInteger").call(Number, m)) a.D && gJ(a, m, k, l, e, h.isIntersecting);
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
        gJ = function(a, b, c, d, e, f) {
            if (null == a.l) throw Error("Not Attached.");
            var g = new ZI;
            c = _.Zh(g, 1, c);
            d = _.Zh(c, 2, d);
            e = _.Zh(d, 3, e);
            b = _.Zh(e, 4, b);
            f = Uh(b, 5, f);
            f = Hb(f.g(), 4);
            kC(a.I, "1", 10, f, void 0, a.l)
        };
    var iJ = function(a, b) {
            this.g = a;
            this.A = b
        },
        jJ = function(a) {
            if (a.g.frames.google_ads_top_frame) return !0;
            var b = WA(a.g);
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
    var el = Gf(al),
        bl = [1, 3];
    var Pg = {
        Xn: 0,
        Tn: 1,
        Un: 9,
        Qn: 2,
        Rn: 3,
        Wn: 5,
        Vn: 7,
        Sn: 10
    };
    var kJ = _.iw(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Vk = _.eb(kJ);
    var Wo = function(a) {
            var b = void 0 === b ? Xj(_.t) : b;
            this.id = a;
            this.g = .001 > Math.random();
            this.ge = {
                pvsid: String(b)
            }
        },
        lJ = function(a) {
            a = Bl(a);
            var b;
            Pl.set(a, (null != (b = Pl.get(a)) ? b : 0) + 1)
        },
        Ol = function() {
            return [].concat(_.si(_.z(Pl, "values").call(Pl))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        Yo = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.ge[b] = c : delete a.ge[b])
        },
        $o = function(a) {
            var b = 1;
            b = void 0 === b ? null : b;
            if (mJ()) b = !0;
            else {
                var c = a.g;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && rC(window, nJ(a) || "", void 0, !0)
        },
        nJ = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Cn(a.ge, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        oJ = function(a) {
            var b = [].concat(_.si(_.z(Pl, "keys").call(Pl)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? Yo(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), Yo(a, "nw_id", b.join()))
        },
        Xo = function(a, b) {
            Yo(a, "vrg", String(b.Fc || b.mb));
            oJ(a);
            Yo(a, "nslots", Ol().toString());
            b = kh();
            b.length && Yo(a, "eid", b.join());
            Yo(a, "pub_url", document.URL)
        },
        xp = function(a, b, c) {
            c = void 0 === c ? .001 : c;
            if (void 0 === c || 0 > c || 1 < c) c = .001;
            Math.random() < c && (a = new Wo(a), b(a), $o(a))
        },
        Pl = new _.u.Map,
        mJ = Bi(function() {
            return !!QA()
        });
    var El = function() {
        jC.call(this, _.E(Fl) || _.E(kF) ? 1 : 0, _.t);
        this.l = 0;
        var a = _.E(Fl) || _.E(kF);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.T(El, jC);
    _.pJ = function(a) {
        this.context = a
    };
    _.pJ.prototype.Db = function(a, b) {
        return Il(this.context, a, b)
    };
    _.pJ.prototype.Ca = function(a, b) {
        return Cl(this.context, a, b)
    };
    _.pJ.prototype.Cb = function(a, b) {
        Gl(this.context, a, b);
        return !1
    };
    _.pJ.prototype.qd = ca(4);
    var qJ = function() {
            this.id = "goog_" + qA++
        },
        rJ = function(a) {
            _.V.call(this);
            this.context = a;
            this.l = new _.u.Map
        };
    _.T(rJ, _.V);
    rJ.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.clear()
    };
    rJ.prototype.listen = function(a, b) {
        var c = this;
        if (this.M) return function() {};
        var d = "string" === typeof a ? a : a.id,
            e, f, g = null != (f = null == (e = this.l.get(d)) ? void 0 : e.add(b)) ? f : new _.u.Set([b]);
        this.l.set(d, g);
        return function() {
            return void sJ(c, a, b)
        }
    };
    var tJ = function(a) {
            var b = Eu;
            var c = void 0 === c ? function() {
                return !0
            } : c;
            return new _.u.Promise(function(d) {
                var e = a.listen(b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        sJ = function(a, b, c) {
            var d;
            return !(null == (d = a.l.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        },
        Qs = function(a, b, c, d) {
            var e, f, g, h, k, l, m, n;
            _.qb(function(p) {
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
                        yg: void 0
                    }, m = l.next()) n.yg = m.value, k.push(new _.u.Promise(function(r) {
                    return function(v) {
                        return _.qb(function(w) {
                            if (1 == w.g) return w.yield(0, 2);
                            Il(a.context, c, function() {
                                a.l.has(e) && f.has(r.yg) && (0, r.yg)(h)
                            }, !0);
                            v();
                            w.g = 0
                        })
                    }
                }(n)));
                return p.yield(_.u.Promise.all(k), 0)
            })
        },
        uJ = new qJ,
        vJ = new qJ,
        Rs = new qJ,
        wJ = new qJ,
        Ss = new qJ,
        xJ = new qJ,
        yJ = new qJ,
        Yq = new qJ,
        Eu = new qJ,
        zJ = new qJ;
    var AJ = function() {
            this.data = void 0;
            this.status = 0;
            this.g = []
        },
        BJ = function(a) {
            a.data = void 0;
            a.status = 1
        };
    var CJ, GJ, JJ, Du, KJ, FJ, EJ, DJ, zq;
    CJ = function() {
        this.g = new _.u.Map;
        this.D = 0;
        this.A = new _.u.Map;
        this.Jb = null;
        this.j = this.l = this.o = this.I = 0;
        this.Se = null;
        this.K = new AJ;
        this.M = new AJ
    };
    GJ = function(a, b) {
        a.g.get(b) || (a.g.set(b, {
            Kc: !0,
            Pg: "",
            Fd: "",
            dj: 0,
            Lg: [],
            Ng: [],
            xc: !1,
            ko: -1
        }), _.kp(b, function() {
            a.g.delete(b);
            DJ(a, b)
        }), b.listen(vJ, function(c) {
            c = c.detail;
            var d = a.g.get(b);
            d.Pg = dk(c, 33) || "";
            d.xc = !0;
            EJ(a, b, function() {
                return void(d.Pg = "")
            });
            FJ(a, b, function() {
                return void(d.xc = !1)
            })
        }))
    };
    _.yq = function(a, b) {
        var c;
        return null == (c = a.g.get(b)) ? void 0 : c.Kc
    };
    _.HJ = function(a, b) {
        if (a = a.g.get(b)) a.Kc = !1
    };
    _.IJ = function(a, b) {
        if (a = a.g.get(b)) a.Kc = !0
    };
    JJ = function(a, b) {
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
            (f = f.next().value.Pg) && Bl(e.getAdUnitPath()) === c && !_.z(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    Du = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.g.get(b)) ? void 0 : c.Fd) ? d : ""
    };
    KJ = function(a, b) {
        return (a = a.g.get(b)) ? a.dj - 1 : 0
    };
    FJ = function(a, b, c) {
        (a = a.g.get(b)) && a.Lg.push(c)
    };
    EJ = function(a, b, c) {
        (a = a.g.get(b)) && a.Ng.push(c)
    };
    DJ = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Ng.slice(), a.Ng.length = 0, a = _.y(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    zq = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Lg.slice(), a.Lg.length = 0, a = _.y(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    CJ.prototype.xc = function(a) {
        var b, c;
        return null != (c = null == (b = this.g.get(a)) ? void 0 : b.xc) ? c : !1
    };
    var LJ = function(a, b, c) {
            if (a = a.g.get(b)) a.cj = c
        },
        MJ = function(a, b) {
            if (a = a.g.get(b)) {
                var c;
                null == (c = a.cj) || c.za();
                delete a.cj
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
    var NJ = N(2),
        OJ = N(3),
        PJ = N(4),
        QJ = N(5),
        RJ = N(6),
        SJ = N(12),
        TJ = N(14),
        UJ = N(16),
        nm = N(19),
        VJ = N(20),
        WJ = N(23),
        XJ = N(26),
        YJ = N(28),
        ZJ = N(149),
        $J = N(30),
        aK = N(31),
        bK = N(34),
        cK = N(35),
        rn = N(36),
        jt = N(38),
        dK = N(40),
        eK = N(48),
        fK = N(50),
        gK = N(60),
        hK = N(63),
        iK = N(64),
        jK = N(66),
        kK = N(68),
        lK = N(69),
        mK = N(70),
        nK = N(71),
        oK = N(78),
        pK = N(80),
        Un = N(82),
        om = N(84),
        qK = N(85),
        rK = N(87),
        hm = N(88),
        sK = N(92),
        tK = N(93),
        uK = N(99),
        qm = N(103),
        Sn = N(104),
        vK = N(105),
        Mn = N(106),
        Nn = N(107),
        Tn = N(108),
        wK = N(113),
        xK = N(114),
        yK = N(115),
        zK = N(117),
        AK = N(118),
        BK = N(120),
        CK = N(119),
        Dn = N(121),
        DK = N(122),
        EK = N(123),
        FK = N(126),
        GK = N(127),
        HK = N(144),
        Dr = N(129),
        Gr = N(132),
        IK = N(134),
        JK = N(135),
        KK = N(136),
        LK = N(137),
        MK = N(138),
        NK = N(139),
        OK = N(140),
        PK = N(143),
        QK = N(145),
        RK = N(147),
        SK = N(150),
        TK = N(164),
        UK = N(152),
        VK = N(153),
        WK = N(154),
        Rr = N(155),
        XK = N(156),
        YK = N(157),
        ZK = N(158),
        $K = N(159),
        aL = N(160),
        Yu = N(161),
        xv = N(162);
    var bL = function(a, b, c) {
        var d = this;
        this.addEventListener = M(a, 86, function(e, f) {
            if ("function" !== typeof f) return O(b, Wl("Service.addEventListener", [e, f])), d;
            var g = Xl(e);
            if (!g) return O(b, tK(e)), d;
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
        bL.call(this, a, b, c);
        this.setRefreshUnfilledSlots = M(a, 59, function(d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = M(a, 69, function(d) {
            c.Kc && cL(c, dL(c, d))
        });
        this.refreshAllSlots = M(a, 60, function() {
            c.Kc && cL(c)
        });
        this.setVideoSession = M(a, 61, function(d, e, f) {
            c.I = e;
            c.C = f;
            "number" === typeof d && (e = bn().g, _.ik(e, 29, _.pd(d)))
        });
        this.getDisplayAdsCorrelator = M(a, 62, function() {
            return String(Dy(bn().g, 26))
        });
        this.getVideoStreamCorrelator = M(a, 63, function() {
            var d = bn().g;
            d = is(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = M(a, 64, function(d) {
            var e = _.z(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            return !!e && eL(c, e)
        });
        this.onImplementationLoaded = M(a, 65, function() {
            c.R.info(eK("GPT CompanionAds"))
        });
        this.slotRenderEnded = M(a, 67, function(d, e, f) {
            var g = _.z(c.g, "find").call(c.g, function(h) {
                return h.g === d
            });
            return g && fL(c, g, e, f)
        })
    };
    _.T(Yl, bL);
    var $l = function(a, b, c) {
        bL.call(this, a, b, c);
        this.setContent = M(a, 72, function(d) {
            var e = _.z(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            b.error(HK(), e)
        })
    };
    _.T($l, bL);
    var gm = function(a) {
        this.F = _.A(a)
    };
    _.T(gm, _.D);
    var fm = function(a, b) {
            return mi(a, 1, b)
        },
        km = function(a) {
            return oi(a, 2, 2)
        },
        em = function(a, b) {
            return _.Ie(a, 2, b, _.qd)
        },
        qn = function(a, b) {
            return My(a, 2, b)
        };
    gm.da = [2];
    var gL = function(a) {
        this.F = _.A(a)
    };
    _.T(gL, _.D);
    gL.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.bi(this, 5, a)
    };
    gL.prototype.clearTagForChildDirectedTreatment = function() {
        return _.ik(this, 5)
    };
    gL.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.bi(this, 6, a)
    };
    var Kp = function(a) {
        this.F = _.A(a)
    };
    _.T(Kp, _.D);
    var zo = function(a) {
        var b = new Kp;
        return Uh(b, 1, a)
    };
    var du = function(a) {
        this.F = _.A(a)
    };
    _.T(du, _.D);
    var qt = function(a) {
        this.F = _.A(a)
    };
    _.T(qt, _.D);
    qt.da = [1];
    var Bn = function(a) {
        this.F = _.A(a)
    };
    _.T(Bn, _.D);
    var zr = function(a) {
        this.F = _.A(a)
    };
    _.T(zr, _.D);
    var Fr = function(a, b) {
            return _.bi(a, 1, b)
        },
        Cr = function(a, b) {
            return _.Ie(a, 2, b, _.qd)
        };
    zr.da = [2];
    var ot = function(a) {
        this.F = _.A(a)
    };
    _.T(ot, _.D);
    var Br = function(a, b) {
        kk(a, 1, zr, b)
    };
    ot.da = [1];
    var nt = function(a) {
        this.F = _.A(a)
    };
    _.T(nt, _.D);
    var hL = function(a) {
        this.F = _.A(a)
    };
    _.T(hL, _.D);
    hL.prototype.getCategoryExclusions = function(a) {
        return Hy(this, 3, a)
    };
    hL.prototype.Pa = function() {
        return _.bk(this, gm, 14)
    };
    hL.prototype.vc = function() {
        return _.vm(this, Bn, 18)
    };
    var Xu = function(a) {
        return _.vm(a, gL, 25)
    };
    hL.prototype.getCorrelator = function() {
        return is(this, 26)
    };
    hL.prototype.setCorrelator = function(a) {
        return _.ik(this, 26, _.pd(a))
    };
    hL.prototype.gi = function() {
        return Cy(this, nt, 33)
    };
    hL.da = [2, 3, 14];
    var Om = function() {
        this.g = new _.u.Map
    };
    var iL = {},
        tm = (iL[253] = !1, iL[246] = [], iL[150] = "", iL[221] = !1, iL[36] = /^true$/.test("false"), iL[172] = null, iL[260] = void 0, iL[251] = null, iL),
        sm = function() {
            this.g = !1
        };
    var jL = function() {
            this.A = {};
            this.g = new hL;
            this.l = new _.u.Map;
            this.g.setCorrelator(cB());
            _.um(36) && Uh(this.g, 15, !0)
        },
        kL = function(a) {
            var b = bn(),
                c = a.getDomId();
            if (c && !b.A.hasOwnProperty(c)) {
                var d = _.If(Om),
                    e = ++_.If(El).l;
                d.g.set(c, e);
                _.ik(a, 20, _.Yc(e));
                b.A[c] = a
            }
        },
        lL = function(a, b) {
            return a.A[b]
        },
        bn = function() {
            return _.If(jL)
        };
    var mL = {},
        nL = (mL.companion_ads = "companionAds", mL.content = "content", mL.publisher_ads = "pubads", mL);
    var oL = Bi(Rm);
    var cn = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = bn().g,
            h = lL(bn(), f.getDomId());
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
            null != (m = k.T[f.getDomId()]) && Uh(m, 19, !0);
            m = f.getDomId();
            m = qx(m);
            var n = {
                id: m
            };
            var p = void 0 === p ? yx : p;
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
                for (v = _.y(_.z(n, "entries").call(n)), n = v.next(); !n.done; n = v.next()) r = _.y(n.value), n = r.next().value, r = r.next().value, Bf(eI.test(n)), m[n] = r;
            if (!Bx.test("div")) throw Error("");
            if ("DIV" in Dx) throw Error("");
            v = "";
            if (m)
                for (w in m)
                    if (Object.prototype.hasOwnProperty.call(m, w)) {
                        if (!Bx.test(w)) throw Error("");
                        r = m[w];
                        if (null != r) {
                            n = w;
                            if (r instanceof Uw) r = Vw(r);
                            else {
                                if ("style" == n.toLowerCase()) throw Error("");
                                if (/^on/i.test(n)) throw Error("");
                                if (n.toLowerCase() in Cx)
                                    if (r instanceof _.Ww) r = _.fb(r).toString();
                                    else if (r instanceof _.Na) r = _.Ya(r);
                                else if ("string" === typeof r) r instanceof _.Na || (r = String(r), ex.test(r) ? r = Oa(r) : (r = String(r), r = r.replace(/(%0A|%0D)/g, ""), r = r.match(dx) ? Oa(r) : null)), r = (r || gx).toString();
                                else throw Error("");
                            }
                            n = n + '="' + qx(String(r)) + '"';
                            v += " " + n
                        }
                    }
            var w = "<div" + v;
            null == p ? p = [] : Array.isArray(p) || (p = [p]);
            !0 === Rw.div ? w += ">" : (m = _.Ax(p), w += ">" + _.xx(m).toString() + "</div>");
            w = _.Uj(w);
            l.write(_.xx(w));
            Tm(f, l) && (kt(d), GJ(d.L, f), pL(d, k, f))
        });
        this.setTagForChildDirectedTreatment = M(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = Xu(g) || new gL;
                l.setTagForChildDirectedTreatment(k);
                _.di(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = M(a, 567, function(k) {
            "boolean" === typeof k ? Uh(h, 12, k) : O(b, Wl("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = M(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = Xu(g) || new gL;
                l.setTagForUnderAgeOfConsent(k);
                _.di(g, 25, l)
            }
            return e
        })
    };
    var qr = {
        Pn: 0,
        Mn: 1,
        Nn: 2,
        On: 3
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
    var qL = "",
        xn = null;
    var co = function(a, b, c) {
        rJ.call(this, a);
        this.slotId = b;
        this.g = c
    };
    _.T(co, rJ);
    co.prototype.getSlotId = function() {
        return this.slotId
    };
    var Rg = function(a, b, c, d) {
        rJ.call(this, a);
        this.adUnitPath = b;
        this.Sb = d;
        this.g = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.T(Rg, rJ);
    _.q = Rg.prototype;
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
    var rL = function(a, b) {
        a.g = b
    };
    var Wn = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    var $n = _.Hx(function() {
            return void ZA("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        sL = _.Hx(function() {
            return void ZA("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        tL = _.Hx(function() {
            return void ZA("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        fo = function(a, b, c, d, e) {
            bL.call(this, a, b, c);
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
                    om: c.enabled,
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
                "string" !== typeof l || cm(l) ? O(b, Wl("PubAdsService.setCategoryExclusion", [l])) : ((_.H = oi(g, 3, 2), _.z(_.H, "includes")).call(_.H, l) || My(g, 3, l), b.info(qK(l)));
                return f
            });
            this.clearCategoryExclusions = M(a, 4, function() {
                _.ik(g, 3);
                b.info(rK());
                return f
            });
            this.disableInitialLoad = M(a, 5, function() {
                Uh(g, 4, !0);
                k || (k = !0, ao())
            });
            this.enableSingleRequest = M(a, 6, function() {
                if (c.enabled && !_.Q(g, 6)) return O(b, gK("PubAdsService.enableSingleRequest")), !1;
                b.info(hK("single request"));
                Uh(g, 6, !0);
                return !0
            });
            this.enableAsyncRendering = M(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = M(a, 8, function() {
                ZA("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = M(a, 485, function(l) {
                var m = new du;
                m = _.ri(m, 1, 800);
                m = _.ri(m, 2, 400);
                m = _.ik(m, 3, _.Gc(3));
                if (_.ja(l)) {
                    var n = l.fetchMarginPercent;
                    "number" === typeof n && (0 <= n ? _.ri(m, 1, n) : -1 === n && _.ik(m, 1));
                    n = l.renderMarginPercent;
                    "number" === typeof n && (0 <= n ? _.ri(m, 2, n) : -1 === n && _.ik(m, 2));
                    l = l.mobileScaling;
                    "number" === typeof l && (0 < l ? _.ik(m, 3, _.Gc(l)) : -1 === l && _.ik(m, 3, _.Gc(1)))
                }
                window.IntersectionObserver || !Di(m, 1) && !Di(m, 2) ? _.di(g, 5, m) : O(b, SK())
            });
            this.setCentering = M(a, 9, function(l) {
                l = !!l;
                b.info(iK("centering", String(l)));
                Uh(g, 15, l)
            });
            this.definePassback = M(a, 10, function(l, m) {
                return (l = eo(a, b, c, l, m, d)) && l.Ti
            });
            this.refresh = M(a, 11, function() {
                var l = _.Sa.apply(0, arguments),
                    m = _.y(l),
                    n = m.next().value;
                m = m.next().value;
                m = void 0 === m ? {} : m;
                n && !Array.isArray(n) || !_.ja(m) || m.changeCorrelator && "boolean" !== typeof m.changeCorrelator ? O(b, Wl("PubAdsService.refresh", l)) : (m && !1 === m.changeCorrelator || g.setCorrelator(cB()), n = n ? Zn(n, c) : _.E(ZD) ? c.g.filter(function(p) {
                    var r = h[p.getDomId()];
                    return !(!Tm(p) && !Em(mr(r)))
                }) : c.g, c.refresh(Pm(g, h), n) || O(b, Wl("PubAdsService.refresh", l)))
            });
            this.enableVideoAds = M(a, 12, function() {
                Uh(g, 21, !0);
                uL(c, g)
            });
            this.setVideoContent = M(a, 13, function(l, m) {
                vL(c, l, m, g)
            });
            this.collapseEmptyDivs = M(a, 14, function(l) {
                l = void 0 === l ? !1 : l;
                l = void 0 === l ? !1 : l;
                Uh(g, 11, !0);
                l = !!l;
                Uh(g, 10, l);
                b.info(oK(String(l)));
                return !!_.Q(g, 11)
            });
            this.clear = M(a, 15, function(l) {
                if (Array.isArray(l)) return wL(c, g, h, Zn(l, c));
                if (void 0 === l) return wL(c, g, h, c.g);
                O(b, Wl("PubAdsService.clear", [l]));
                return !1
            });
            this.setLocation = M(a, 16, function(l) {
                "string" !== typeof l ? O(b, Wl("PubAdsService.setLocation", [l])) : mi(g, 8, l);
                return f
            });
            this.setCookieOptions = M(a, 17, function() {
                sL();
                return f
            });
            this.setTagForChildDirectedTreatment = M(a, 18, function(l) {
                tL();
                if (1 !== l && 0 !== l) return O(b, DK("PubadsService.setTagForChildDirectedTreatment", En(l), "0,1")), f;
                var m = Xu(g) || new gL;
                m.setTagForChildDirectedTreatment(l);
                _.di(g, 25, m);
                return f
            });
            this.clearTagForChildDirectedTreatment = M(a, 19, function() {
                tL();
                var l = Xu(g);
                if (!l) return f;
                l.clearTagForChildDirectedTreatment();
                _.di(g, 25, l);
                return f
            });
            this.setPublisherProvidedId = M(a, 20, function(l) {
                l = String(l);
                b.info(iK("PPID", l));
                mi(g, 16, l);
                return f
            });
            this.set = M(a, 21, function(l, m) {
                sn(l, m, g, c.getName(), b);
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
                ZA(Yn("update"));
                O(b, yK());
                g.setCorrelator(cB());
                return f
            });
            this.defineOutOfPagePassback = M(a, 35, function(l) {
                l = eo(a, b, c, l, [1, 1], d);
                if (!l) return null;
                _.bi(l.Fa, 15, 1);
                return l.Ti
            });
            this.setForceSafeFrame = M(a, 36, function(l) {
                "boolean" !== typeof l ? O(b, Wl("PubAdsService.setForceSafeFrame", [En(l)])) : Uh(g, 13, l);
                return f
            });
            this.setSafeFrameConfig = M(a, 37, function(l) {
                var m = Fn(b, l);
                m ? _.di(g, 18, m) : O(b, Wl("PubAdsService.setSafeFrameConfig", [l]));
                return f
            });
            this.setRequestNonPersonalizedAds = M(a, 445, function(l) {
                tL();
                if (0 !== l && 1 !== l) return O(b, DK("PubAdsService.setRequestNonPersonalizedAds", En(l), "0,1")), f;
                var m = Xu(g) || new gL;
                Uh(m, 8, !!l);
                _.di(g, 25, m);
                return f
            });
            this.setTagForUnderAgeOfConsent = M(a, 447, function(l) {
                l = void 0 === l ? 2 : l;
                tL();
                if (2 !== l && 0 !== l && 1 !== l) return O(b, DK("PubadsService.setTagForUnderAgeOfConsent", En(l), "2,0,1")), f;
                var m = Xu(g) || new gL;
                m.setTagForUnderAgeOfConsent(l);
                _.di(g, 25, m);
                return f
            });
            this.getCorrelator = M(a, 27, function() {
                return String(Dy(g, 26))
            });
            this.getTagSessionCorrelator = M(a, 631, function() {
                return Xj(_.t)
            });
            this.getVideoContent = M(a, 30, function() {
                return xL(c, g)
            });
            this.getVersion = M(a, 568, function() {
                return a.Fc ? String(a.Fc) : a.mb
            });
            this.forceExperiment = M(a, 569, function(l) {
                return void c.forceExperiment(l)
            });
            this.setCorrelator = M(a, 28, function(l) {
                ZA(Yn("set"));
                O(b, xK());
                if (Zg(window)) return f;
                if (!to(l)) return O(b, Wl("PubadsService.setCorrelator", [En(l)])), f;
                l = g.setCorrelator(l);
                Uh(l, 27, !0);
                return f
            });
            this.markAsAmp = M(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = M(a, 571, function() {
                return !!_.Q(g, 6)
            });
            this.setImaContent = M(a, 328, function(l, m) {
                _.Ci(g, 22) ? vL(c, l, m, g) : (Uh(g, 21, !0), uL(c, g), "string" === typeof l && mi(g, 19, l), "string" === typeof m && mi(g, 20, m))
            });
            this.getImaContent = M(a, 329, function() {
                return _.Ci(g, 22) ? xL(c, g) : c.enabled ? {
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
                    B, C = null != (B = Xu(g)) ? B : new gL;
                "boolean" === typeof v ? Uh(C, 8, v) : void 0 !== v && O(b, Dn("PubAdsService.setPrivacySettings", En(l), "nonPersonalizedAds", En(v)));
                "boolean" === typeof w ? Uh(C, 13, w) : void 0 !== w && O(b, Dn("PubAdsService.setPrivacySettings", En(l), "userOptedOutOfPersonalization", En(w)));
                "boolean" === typeof m ? Uh(C, 1, m) : void 0 !== m && O(b, Dn("PubAdsService.setPrivacySettings", En(l), "restrictDataProcessing", En(m)));
                if ("boolean" === typeof r) {
                    m = Xn();
                    if (r && !_.Q(C, 9) && a.Oc) {
                        v = a.Ra;
                        w = v.Nc;
                        B = rl(a);
                        var F = new HC;
                        F = _.ul(F, 1, !0);
                        F = _.ul(F, 2, m);
                        B = _.ij(B, 11, wl, F);
                        w.call(v, B)
                    }
                    m ? Uh(C, 9, r) : r && O(b, RK())
                } else void 0 !== r && O(b, Dn("PubAdsService.setPrivacySettings", En(l), "limitedAds", En(r)));
                void 0 !== p && (null === p ? C.setTagForUnderAgeOfConsent(2) : !1 === p ? C.setTagForUnderAgeOfConsent(0) : !0 === p ? C.setTagForUnderAgeOfConsent(1) : O(b, Dn("PubAdsService.setPrivacySettings", En(l), "underAgeOfConsent", En(p))));
                void 0 !== n && (null === n ? C.clearTagForChildDirectedTreatment() : !1 === n ? C.setTagForChildDirectedTreatment(0) : !0 === n ? C.setTagForChildDirectedTreatment(1) : O(b, Dn("PubAdsService.setPrivacySettings", En(l), "childDirectedTreatment", En(n))));
                void 0 !== x && (null === x ? _.ik(C, 10) : (_.H = _.z(Object, "values").call(Object, gn), _.z(_.H, "includes")).call(_.H, x) ? _.bi(C, 10, x) : O(b, Dn("PubAdsService.setPrivacySettings", En(l), "trafficSource", En(x))));
                _.di(g, 25, C);
                return f
            })
        };
    _.T(fo, bL);
    var yL = function(a, b) {
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
    var zL = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        AL = function(a, b) {
            a.advertiserId = b
        },
        BL = function(a, b) {
            a.campaignId = b
        },
        CL = function(a, b) {
            a.yieldGroupIds = b
        },
        DL = function(a, b) {
            a.companyIds = b
        };
    var wm = function(a) {
        this.F = _.A(a)
    };
    _.T(wm, _.D);
    wm.prototype.getWidth = function() {
        return Ps(this, 1)
    };
    wm.prototype.getHeight = function() {
        return Ps(this, 2)
    };
    var no = function() {
        var a = new wm;
        return Uh(a, 3, !0)
    };
    var zm = function(a) {
        this.F = _.A(a)
    };
    _.T(zm, _.D);
    zm.da = [2];
    var EL = function(a) {
        this.F = _.A(a)
    };
    _.T(EL, _.D);
    var FL = function(a) {
        var b = new EL;
        return _.bi(b, 1, a)
    };
    var GL = function(a) {
        this.F = _.A(a)
    };
    _.T(GL, _.D);
    GL.da = [1];
    var HL = function(a) {
        this.F = _.A(a)
    };
    _.T(HL, _.D);
    var IL = function(a) {
        this.F = _.A(a)
    };
    _.T(IL, _.D);
    IL.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    IL.prototype.getDomId = function() {
        return _.I(this, 2)
    };
    var JL = function(a, b) {
        mi(a, 2, b)
    };
    IL.prototype.Pa = function() {
        return _.bk(this, gm, 3)
    };
    IL.prototype.getServices = function(a) {
        return Hy(this, 4, a)
    };
    var KL = function(a, b) {
        _.pm(a, 5, b)
    };
    IL.prototype.getClickUrl = function() {
        return _.I(this, 7)
    };
    IL.prototype.setClickUrl = function(a) {
        return mi(this, 7, a)
    };
    IL.prototype.getCategoryExclusions = function(a) {
        return Hy(this, 8, a)
    };
    var dm = function(a) {
        return _.bk(a, gm, 9)
    };
    IL.prototype.vc = function() {
        return _.vm(this, Bn, 13)
    };
    var mr = function(a) {
        return _.eg(a, 15, 0)
    };
    IL.da = [3, 4, 5, 6, 8, 9, 27];
    var LL = function(a, b) {
        this.width = a;
        this.height = b
    };
    LL.prototype.getWidth = function() {
        return this.width
    };
    LL.prototype.getHeight = function() {
        return this.height
    };
    var ML = new _.u.Set(["unhideWindow", "navBar"]);
    var Co = function(a, b, c) {
        var d = this,
            e = lL(bn(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.kp(c, function() {
            e = new IL;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        c.listen(Rs, function(n) {
            var p = n.detail;
            n = p.Qh;
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
            if ((_.H = oi(e, 4, 2), _.z(_.H, "includes")).call(_.H, p)) return b.info(SJ(p, c.toString()), c), d;
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
                n = v, Gl(a, 44, n), ZA("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = M(a, 45, function(n) {
            bm(n, e, c, b);
            return d
        });
        this.setCategoryExclusion = M(a, 46, function(n) {
            var p = e;
            "string" !== typeof n || cm(n) ? O(b, Wl("Slot.setCategoryExclusion", [n]), c) : ((_.H = oi(p, 8, 2), _.z(_.H, "includes")).call(_.H, n) || My(p, 8, n), b.info(TJ(n), c));
            return d
        });
        this.clearCategoryExclusions = M(a, 47, function() {
            _.ik(e, 8);
            b.info(UJ(), c);
            return d
        });
        this.getCategoryExclusions = M(a, 48, function() {
            return oi(e, 8, 2).slice()
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
            "boolean" !== typeof n || "boolean" !== typeof p ? O(b, Wl("Slot.setCollapseEmptyDiv", [n, p]), c) : (r = Uh(r, 10, n), Uh(r, 11, n && p), p && !n && O(b, VJ(c.toString()), c));
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
            "boolean" !== typeof n ? O(b, Wl("Slot.setForceSafeFrame", [String(n)]), c) : Uh(p, 12, n);
            return d
        });
        this.setSafeFrameConfig = M(a, 56, function(n) {
            var p = e,
                r = Fn(b, n);
            r ? _.di(p, 13, r) : b.error(Wl("Slot.setSafeFrameConfig", [n]), c);
            return d
        });
        c.listen(vJ, function(n) {
            n = n.detail;
            if (Gn(n, 8)) g = null;
            else {
                g = new zL;
                var p = !!Gn(n, 9);
                g.isBackfill = p;
                var r = Ey(n, 15),
                    v = Ey(n, 16);
                r.length && v.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = v[0], p || (g.creativeId = r[0], g.lineItemId = v[0], (p = Ey(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                Ey(n, 17).length && AL(g, Ey(n, 17)[0]);
                Ey(n, 18).length && BL(g, Ey(n, 18)[0]);
                Ey(n, 19).length && CL(g, Ey(n, 19));
                Ey(n, 20).length && DL(g, Ey(n, 20));
                n = ue(n, 45, fe(n.F) & 34 ? Ce : De, 2).map(function(w) {
                    return Yd(w)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = M(a, 355, function() {
            return g
        });
        this.getName = M(a, 170, function() {
            b.error(PK());
            return c.getAdUnitPath()
        });
        var m = new yL(a, c);
        this.getSlotId = M(a, 579, function() {
            return m
        });
        this.getServices = M(a, 580, function() {
            return oi(e, 4, 2).map(function(n) {
                var p = nL[n];
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
                return _.Q(w, 3) ? "fluid" : new LL(w.getWidth(), w.getHeight())
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
            return "number" === typeof n ? mr(e) === n : 0 !== mr(e)
        });
        this.getCollapseEmptyDiv = M(a, 585, function() {
            return null != Gn(e, 10) ? _.Q(e, 10) : null
        });
        this.getDivStartsCollapsed = M(a, 586, function() {
            return null != Gn(e, 11) ? _.Q(e, 11) : null
        });
        c.listen(wJ, function(n) {
            h = n.detail.rk
        });
        this.getContentUrl = M(a, 587, function() {
            return h()
        });
        this.getFirstLook = M(a, 588, function() {
            ZA("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen(vJ, function(n) {
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
            if (Tg(n)) {
                var r = n.componentAuction,
                    v = n.adExpansion,
                    w = n.outstream;
                if (null != r) {
                    var x = {
                        componentAuction: r
                    };
                    if (_.ja(x)) {
                        if (r = Ge(p, 26, yd), void 0 !== x.componentAuction) {
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
                    if (5 !== mr(p)) O(b, aL("interstitial"), c);
                    else {
                        x = n.interstitial;
                        b.info(XK("interstitial", En(x)), c);
                        if (Tg(x))
                            for (r = {}, x = _.y(_.z(Object, "entries").call(Object, x)), B = x.next(); !B.done; B = x.next()) switch (C = _.y(B.value), B = C.next().value, C = C.next().value, B) {
                                case "triggers":
                                    r.triggers = C;
                                    break;
                                default:
                                    O(b, ZK("interstitial", B), c)
                            } else O(b, $K("googletag.slot.setConfig", "interstitial", En(x)), c), r = null;
                        B = r;
                        r = new GL;
                        x = {};
                        if (B && B.triggers)
                            if (B = B.triggers, Tg(B))
                                for (x.triggers = {}, B = _.y(_.z(Object, "entries").call(Object, B)), C = B.next(); !C.done; C = B.next()) {
                                    var F = _.y(C.value);
                                    C = F.next().value;
                                    F = F.next().value;
                                    var G = C;
                                    C = F;
                                    if (ML.has(G))
                                        if (yo(C)) switch (G) {
                                            case "unhideWindow":
                                                F = FL(2);
                                                F = Uh(F, 2, C);
                                                kk(r, 1, EL, F);
                                                x.triggers.zo = C;
                                                break;
                                            case "navBar":
                                                _.E(KD) ? (F = FL(3), F = Uh(F, 2, C), kk(r, 1, EL, F), x.triggers.mo = C) : O(b, ZK("interstitial.triggers", G), c)
                                        } else O(b, $K("interstitial.triggers", G, En(C)), c);
                                        else O(b, ZK("interstitial.triggers", G), c)
                                } else O(b, $K("interstitial", "triggers", En(B)), c);
                        b.info(YK("interstitial", En(x)), c);
                        _.di(p, 29, r)
                    }
                _.E(xo) ? _.z(Object, "hasOwn").call(Object, n, "adExpansion") && Ao(p, v) : Ao(p, v);
                if (_.E(fD) && _.z(Object, "hasOwn").call(Object, n, "outstream") && (_.ik(p, 31), null !== w))
                    if (Tg(w))
                        if (0 !== mr(p)) O(b, aL("outstream", String(mr(p))), c);
                        else {
                            a: {
                                v = ["exposeVast"];n = new _.u.Map;w = _.y(_.z(Object, "entries").call(Object, w));
                                for (r = w.next(); !r.done; r = w.next()) x = _.y(r.value),
                                r = x.next().value,
                                x = x.next().value,
                                _.z(v, "includes").call(v, r) ? n.set(r, x) : O(b, ZK("outstream", r), c);
                                if (0 === n.size) w = null;
                                else
                                    for (w = new HL, n = _.y(n), v = n.next(); !v.done; v = n.next())
                                        if (r = _.y(v.value), v = r.next().value, r = r.next().value, "exposeVast" === v) {
                                            if (!yo(r)) {
                                                O(b, $K("outstream", "exposeVast", En(r)), c);
                                                w = null;
                                                break a
                                            }
                                            Uh(w, 1, r)
                                        }
                            }
                            w && _.di(p, 31, w)
                        }
                else O(b, $K("googletag.slot.setConfig", "outstream", En(w)), c)
            } else O(b, Wl("googletag.slot.setConfig", [n]), c)
        })
    };
    var Y = function(a, b, c) {
        AH.call(this, b, c);
        this.context = a
    };
    _.T(Y, AH);
    Y.prototype.I = function(a) {
        Gl(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var Mo = function(a, b, c, d, e) {
        Y.call(this, a, 1226);
        this.Of = b;
        this.startTime = _.Uf();
        this.j = X(this, c);
        this.Ba = null != d ? d : this.context.Ra;
        this.o = null != e ? e : .01
    };
    _.T(Mo, Y);
    Mo.prototype.g = function() {
        _.ph() < this.o && this.Ba.Gc.Qc.ji.nk.pk.ie({
            me: _.Uf() - this.startTime,
            Of: this.Of,
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
        FH(this, c);
        FH(this, d);
        e && FH(this, e)
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
        this.j = CH(this);
        FH(this, e);
        this.o = X(this, f)
    };
    _.T(Jo, Y);
    Jo.prototype.g = function() {
        var a = this,
            b = _.Kf(BD);
        b = new vG(this.B, {
            gppApiDetectionMode: b
        });
        _.S(this, b);
        if (BF(b.caller)) {
            var c = this.L.M,
                d = c.status,
                e = function(f) {
                    if (f.internalErrorState) HG(a.o.value, f.gppString);
                    else if (bh(f.applicableSections)) FG(GG(a.o.value, f.applicableSections.filter(function(k) {
                        return _.z(Number, "isInteger").call(Number, k)
                    })), !1);
                    else {
                        var g = HG(GG(a.o.value, f.applicableSections.filter(function(k) {
                            return _.z(Number, "isInteger").call(Number, k)
                        })), f.gppString);
                        try {
                            var h = zG(f.gppString)
                        } catch (k) {
                            Gl(a.context, 1182, k), h = !1
                        }
                        FG(g, h)
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
                    BJ(c);
                    c.g.push(e);
                    this.R.info(BK());
                    b.addEventListener(Cl(this.context, 1173, function(f) {
                        if ("ready" === f.pingData.signalStatus || bh(f.pingData.applicableSections)) c.data = f.pingData, c.status = 2, c.g.forEach(function(g) {
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
        this.j = CH(this);
        FH(this, f);
        this.C = X(this, g)
    };
    _.T(Ho, Y);
    Ho.prototype.g = function() {
        var a = this,
            b = new IF(this.B, {
                timeoutMs: -1,
                Yj: !0
            });
        _.S(this, b);
        if (KF(b)) {
            var c = this.L.K,
                d = c.status,
                e = function(f) {
                    var g = a.C.value,
                        h, k;
                    if (k = !(a.o ? _.Q(a.o, 9) : _.E(sD) && Xn())) k = {
                        pg: _.E(rD) && _.um(221) && !Og()
                    }, k = void 0 === k ? {} : k, k = OF(f) ? !1 === f.gdprApplies ? !0 : "tcunavailable" === f.tcString ? !k.pg : (k.pg || void 0 !== f.gdprApplies || k.io) && (k.pg || "string" === typeof f.tcString && f.tcString.length) ? MF(f, "1") : !0 : !1;
                    k = Uh(g, 5, k);
                    var l = !PF(f, ["3", "4"]);
                    k = Uh(k, 9, l);
                    k = mi(k, 2, f.tcString);
                    l = null != (h = f.addtlConsent) ? h : "";
                    h = mi(k, 4, l);
                    _.bi(h, 7, f.internalErrorState);
                    null != f.gdprApplies && Uh(g, 3, f.gdprApplies);
                    PF(f, ["2", "7", "9", "10"]) || Uh(g, 8, !0);
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
                    BJ(c);
                    c.g.push(e);
                    this.R.info(AK());
                    b.addEventListener(function(f) {
                        OF(f) ? ("tcunavailable" === f.tcString ? a.R.info(CK("failed")) : a.R.info(CK("succeeded")), c.data = f, c.status = 2, c.g.forEach(function(g) {
                            g(f)
                        }), c.g = []) : BJ(c)
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
        this.j = CH(this);
        FH(this, d);
        this.o = X(this, e)
    };
    _.T(Go, Y);
    Go.prototype.g = function() {
        var a = this,
            b = new jG(this.B);
        _.S(this, b);
        if (BF(b.caller)) {
            var c = Cl(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && (mi(a.o.value, 1, d.uspString), EG(a.o.value, Cl(a.context, 1187, function() {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    4 == f.length && (-1 == f.indexOf("-") || "---" === f.substring(1)) && "1" <= f[0] && "9" >= f[0] && zB.hasOwnProperty(f[1]) && zB.hasOwnProperty(f[2]) && zB.hasOwnProperty(f[3]) ? (f = new yB, f = _.vl(f, 1, parseInt(e[0], 10)), f = _.L(f, 2, zB[e[1]]), f = _.L(f, 3, zB[e[2]]), e = _.L(f, 4, zB[e[3]])) : e = null;
                    return 2 === (null == e ? void 0 : _.eg(e, 3, 0))
                })()));
                a.j.notify()
            });
            this.R.info(zK());
            kG(b, c)
        } else this.j.notify()
    };
    var Eo = function(a, b) {
        Y.call(this, a, 958);
        this.j = b;
        this.kb = W(this)
    };
    _.T(Eo, Y);
    Eo.prototype.g = function() {
        var a = new DG,
            b = this.j ? _.Q(this.j, 9) : Xn(),
            c = _.E(qD) && _.um(221) && !Og();
        Uh(a, 5, !b && !c);
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
                var c = new IF(a.B);
                _.S(a, c);
                var d = new jG(a.B);
                _.S(a, d);
                Yo(b, "fc", Number(a.j.value));
                Yo(b, "tcfv1", Number(!!a.B.__cmp));
                Yo(b, "tcfv2", Number(KF(c)));
                Yo(b, "usp", Number(!!BF(d.caller)));
                Yo(b, "ptt", 17);
                b = _.Kf(BD);
                if (0 !== b) {
                    c = new vG(a.B, {
                        gppApiDetectionMode: b
                    });
                    if (BF(c.caller)) switch (b) {
                        case 1:
                            jh(31080194);
                            break;
                        case 2:
                            jh(31080195);
                            break;
                        case 3:
                            jh(31080196)
                    }
                    _.S(a, c)
                }
            }, a.o)
        })
    };
    var NL = function(a, b, c, d) {
        Y.call(this, a, 1103);
        this.j = b;
        this.Z = c;
        this.privacyTreatments = d;
        this.output = W(this)
    };
    _.T(NL, Y);
    NL.prototype.g = function() {
        this.output.G(!!ch(this.Z) && !_.Q(this.Z, 9) && !_.Q(this.Z, 13) && (!_.E(Io) || !_.Q(this.Z, 12)) && (this.j ? _.Q(this.j, 9) || _.Q(this.j, 8) || _.Q(this.j, 1) || _.E(VD) && _.Q(this.j, 13) || 1 === _.eg(this.j, 6, 2) || 1 === _.Uc(_.ai(this.j, 5)) || _.z(this.privacyTreatments, "includes").call(this.privacyTreatments, 1) ? !1 : !0 : !0))
    };
    var Qo = function(a) {
        this.R = a;
        this.A = this.g = 0
    };
    Qo.prototype.push = function() {
        for (var a = _.y(_.Sa.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.u.globalThis), this.g++)
            } catch (c) {
                this.A++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.R.error($J(String(c)))
            }
        }
        this.R.info(aK(String(this.g), String(this.A)));
        return this.g
    };
    var Oo = function(a, b) {
        this.push = M(a, 76, b.push.bind(b))
    };
    var OL = ["Debug", "Info", "Warning", "Error", "Fatal"],
        PL = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.g = c;
            this.timestamp = new Date
        };
    _.q = PL.prototype;
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
        return this.timestamp.toTimeString() + ": " + OL[this.level] + ": " + this.message
    };
    var QL = _.iw(["https://console.googletagservices.com/pubconsole/loader.js"]),
        bp = _.eb(QL),
        fp, ep = !1,
        Vo = !1,
        Zo = !1;
    var ft = function(a, b) {
        this.getAllEvents = M(a, 563, function() {
            return Vo ? RL(b).slice() : []
        });
        this.getEventsBySlot = M(a, 565, function(c) {
            return Vo ? SL(b, c).slice() : []
        });
        this.getEventsByLevel = M(a, 566, function(c) {
            return Vo ? TL(b, c).slice() : []
        })
    };
    var UL = {
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
        VL = {
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
    var WL = function(a) {
            this.context = a;
            this.l = this.g = 0;
            this.j = window;
            this.A = [];
            this.A.length = 1E3
        },
        RL = function(a) {
            return [].concat(_.si(a.A.slice(a.g)), _.si(a.A.slice(0, a.g))).filter(function(b) {
                return !!b
            })
        },
        SL = function(a, b) {
            return RL(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        TL = function(a, b) {
            return RL(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    WL.prototype.log = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? !1 : d;
        var e, f, g = new PL(a, b, null != (f = null == (e = c) ? void 0 : e.g) ? f : null);
        this.A[this.g] = g;
        this.g = (this.g + 1) % 1E3;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs();
        e = b.getMessageId();
        var k = UL[e] || VL[e];
        e = void 0;
        if (k) {
            e = k(h);
            if (d) throw new uo(e);
            d = this.l < _.Kf(wD) && f && _.t.console;
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
            p = new LC;
            p = _.bj(p, 1, this.context.pvsid);
            d = kh();
            p = _.Ie(p, 2, d, Vc);
            p = _.cj(p, 3, this.context.Zf);
            d = _.E(yD) ? this.context.zb : this.context.mb;
            p = _.cj(p, 4, d);
            p = _.bj(p, 5, this.context.Tl);
            n = _.L(p, 6, n);
            m = _.cj(n, 7, m);
            n = b.getMessageId();
            m = _.L(m, 8, n);
            b = b.getMessageArgs();
            b = _.Ie(m, 9, b, _.qd);
            m = Bl(null != (w = null == (r = l) ? void 0 : r.getAdUnitPath()) ? w : "");
            r = _.cj(b, 10, m);
            w = null == (v = l) ? void 0 : v.getAdUnitPath();
            v = _.cj(r, 11, w);
            c.call(a, v)
        }
        return g
    };
    WL.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var O = function(a, b, c) {
        return a.log(2, b, c, !1)
    };
    WL.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var XL = function() {
            var a = {
                    ba: bn().g,
                    qj: new Date(Date.now()),
                    Sh: window.location.href
                },
                b = this;
            a = void 0 === a ? {} : a;
            var c = void 0 === a.ba ? bn().g : a.ba,
                d = void 0 === a.qj ? new Date(Date.now()) : a.qj,
                e = void 0 === a.Sh ? window.location.href : a.Sh;
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
                l = null !== l ? _.qh("w5uHecUBa2S:" + h + ":" + l) % k === Math.floor(d.valueOf() / 864E5) % k : void 0;
                return l
            }, a[13] = function() {
                return _.Sa.apply(0, arguments).some(function(h) {
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
                return _.z(_.Sa.apply(0, arguments), "includes").call(_.Sa.apply(0, arguments), String(_.qh(e)))
            }, a), g[4] = (f[14] = function() {
                var h = Number(b.j || void 0);
                isNaN(h) ? h = void 0 : (h = new Date(1E3 * h), h = 1E4 * h.getFullYear() + 100 * (h.getMonth() + 1) + h.getDate());
                return h
            }, f), g[5] = {}, g)
        },
        YL = function(a, b) {
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
    var Hu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 863);
        this.o = c;
        this.Fd = Number(b);
        this.j = X(this, d);
        this.H = X(this, e);
        this.J = X(this, f);
        this.C = X(this, g)
    };
    _.T(Hu, Y);
    Hu.prototype.g = function() {
        var a = this.J.value,
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
        g = new _.hB(e, b + g.right, e + g.bottom, b);
        b = new YG;
        b = _.ri(b, 1, g.top);
        b = _.ri(b, 3, g.bottom);
        b = _.ri(b, 2, g.left);
        g = _.ri(b, 4, g.right);
        b = new ZG;
        b = _.ik(b, 1, _.Yc(this.Fd));
        d = Uh(b, 2, !d);
        d = _.di(d, 3, g);
        c = _.ri(d, 4, c);
        f = _.ri(c, 5, f);
        f = {
            type: "asmres",
            payload: cl(f)
        };
        a.ports[0].postMessage(f)
    };
    var or = function(a, b, c, d) {
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
    _.T(or, Y);
    or.prototype.g = function() {};
    var Xq = function(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        Y.call(this, a, 1061);
        var e = this;
        this.output = CH(this);
        wH(this.output, new _.u.Promise(function(f) {
            var g = b.listen(c, function(h) {
                d(h) && (g(), f())
            });
            _.kp(e, g)
        }))
    };
    _.T(Xq, Y);
    Xq.prototype.g = function() {};
    var Cu = function(a, b, c, d) {
        or.call(this, a, b, Yq, function(e) {
            e = e.detail;
            var f;
            return "asmreq" === (null == (f = e.data) ? void 0 : f.type) && Ps(XG(e.data.payload), 1) === Number(c) ? e : null
        });
        this.o = d;
        this.j = W(this)
    };
    _.T(Cu, or);
    Cu.prototype.g = function() {
        this.j.G(jp(this.o))
    };
    var ZL = /(<head(\s+[^>]*)?>)/i,
        bu = function(a, b, c, d, e) {
            Y.call(this, a, 665);
            this.Sa = b;
            this.Gd = c;
            this.isBackfill = d;
            this.Fb = e;
            this.output = W(this)
        };
    _.T(bu, Y);
    bu.prototype.g = function() {
        var a;
        0 !== this.Sa.kind || null == (a = this.Gd) || !_.I(a, 1) || this.Fb ? this.output.G(this.Sa) : (a = this.Sa.ub, Ia() || (a = a.replace(ZL, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.isBackfill && (a = a.replace(ZL, '$1<meta name="referrer" content="origin">')), this.output.G({
            kind: 0,
            ub: a
        }))
    };
    var $L = function(a, b, c) {
        Y.call(this, a, 1124);
        this.ce = CH(this);
        this.o = X(this, b);
        this.j = X(this, c)
    };
    _.T($L, Y);
    $L.prototype.g = function() {
        _.oB(this.j.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.oB(this.o.value, "min-width", "100%");
        this.ce.notify()
    };
    var aM = function(a, b, c, d, e) {
        Y.call(this, a, 1125);
        this.o = X(this, b);
        this.j = X(this, c);
        FH(this, d);
        FH(this, e)
    };
    _.T(aM, Y);
    aM.prototype.g = function() {
        var a = this.o.value,
            b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.oB(this.j.value, "visibility", "visible"))
    };
    var Iu = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 718);
        this.slotId = b;
        this.tb = c;
        this.Gd = d;
        this.o = e;
        this.C = f;
        this.output = W(this);
        this.j = new Xq(this.context, this.slotId, Eu);
        this.H = X(this, g)
    };
    _.T(Iu, Y);
    Iu.prototype.g = function() {
        var a = !this.H.value;
        if (!this.Gd || "height" !== this.tb || a) this.j.za(), this.output.G(!1);
        else {
            a = new ok;
            _.S(this, a);
            var b = new $L(this.context, this.o, this.C);
            J(a, b);
            J(a, this.j);
            J(a, new aM(this.context, this.o, this.C, this.j.output, b.ce));
            xk(a);
            this.output.G(!0)
        }
    };
    var bM = [2, 1];
    var cM = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Y.call(this, a, 699);
        this.aa = b;
        this.slotId = c;
        this.j = d;
        this.Dd = e;
        this.tb = f;
        this.Na = g;
        this.Jc = CH(this);
        this.H = X(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.J = DH(this, m);
        this.P = X(this, n)
    };
    _.T(cM, Y);
    cM.prototype.g = function() {
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
                                                K;
                                            P = null != (K = e.getBoundingClientRect().left) ? K : 0;
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
                    b || a ? (_.z(bM, "includes").call(bM, d) && up(g, f, h, k, d, c.width, c.height, p, "gpt_slotexp", m), f = !0) : f = !1;
                    break;
                case 3:
                    d = this.context, K = this.aa, f = this.slotId, h = this.j, p = this.Dd, k = this.Na, m = a.parentElement ? null == (g = Um(a.parentElement, window)) ? void 0 : g.width : void 0, g = c.width, P = c.height, R = op(e.height) || 0, P >= R || "none" === e.display || "hidden" === e.visibility || !p || -12245933 === p.width || a.getBoundingClientRect().bottom <= p.height ? f = !1 : (p = {
                        height: P + "px"
                    }, rp(b, a, p), _.qp(a, p), up(d, K, f, h, 3, g, P, m, "gpt_slotred", k), f = !0)
            }!f && _.E(gD) && up(this.context, this.aa, this.slotId, this.j, 0, c.width, c.height, void 0, "gpt_pgbrk", this.Na)
        }
        this.Jc.notify()
    };
    var dM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1114);
        this.J = b;
        this.ja = c;
        this.j = d;
        this.H = e;
        this.C = W(this);
        this.o = W(this);
        this.P = X(this, f)
    };
    _.T(dM, Y);
    dM.prototype.g = function() {
        if (this.J) {
            var a = this.J.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0]) eM(this);
            else {
                var b = a[1];
                a = fM(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1], "ratio" === c ? c = a && this.j && this.H ? Math.floor(this.H / this.j * a) : null : (c = Number(c), c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                if (a || c) {
                    var d, e;
                    this.C.G(new _.Mm(null != (d = null != a ? a : this.j) ? d : 0, null != (e = null != c ? c : this.H) ? e : 0));
                    this.o.G(b)
                } else eM(this)
            }
        } else eM(this)
    };
    var fM = function(a, b) {
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
        eM = function(a) {
            a.C.ca();
            a.o.G([])
        };
    var gM = function(a, b, c, d, e, f, g, h, k, l, m) {
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
        this.fa = DH(this, g);
        this.W = DH(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.J = X(this, m)
    };
    _.T(gM, Y);
    gM.prototype.g = function() {
        var a = hM(this),
            b = this.W.value,
            c;
        if (c = !this.H && a && b) this.o.value.length ? (c = this.adUnitPath.split("/"), c = _.z(this.o.value, "includes").call(this.o.value, c[c.length - 1])) : c = !0;
        if (c) {
            var d = this.J.value,
                e, f;
            c = null != (f = null == (e = Nm(d.parentElement)) ? void 0 : e.width) ? f : 0;
            e = b.width;
            b = b.height;
            iM(this, !0, e, b, {
                kind: 0,
                ub: '<html><body style="height:' + (b - 2 + "px;width:" + (e - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (e + "x" + b + "</p></body></html>")
            }, e <= c ? 1 : 2, d)
        } else if (a = this.fa.value, this.H) iM(this, !1, null != (d = this.j) ? d : 0, null != a ? a : 0, this.C.value);
        else {
            if (null == this.j) throw new uo("Missing 'width'.");
            if (null == a) throw new uo("Missing 'height'.");
            iM(this, !1, this.j, a, this.C.value)
        }
    };
    var hM = function(a) {
            a = Cm(a.P)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Mm(a[0], a[1]) : null
        },
        iM = function(a, b, c, d, e, f, g) {
            f = void 0 === f ? a.Mf : f;
            a.Ze.G(b);
            a.Ja.G(new _.Mm(c, d));
            a.Ga.G(e);
            a.Ae.Ha(f);
            g && _.oB(g, "opacity", .5)
        };
    var eu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        ok.call(this);
        b = new dM(a, b, c.width, k, l, n);
        J(this, b);
        a = new gM(a, d, e, f, h, k, g, b.C, b.o, m, n);
        J(this, a);
        this.K = {
            Ga: a.Ga,
            Ja: a.Ja,
            Ae: a.Ae,
            Ze: a.Ze
        }
    };
    _.T(eu, ok);
    var jM = function(a, b, c) {
        Y.call(this, a, 698);
        this.B = b;
        this.output = W(this);
        this.j = X(this, c)
    };
    _.T(jM, Y);
    jM.prototype.g = function() {
        this.output.Ha(Um(this.j.value, this.B))
    };
    var lu = function(a, b, c, d, e, f, g, h, k, l, m) {
        ok.call(this);
        var n = new jM(a, b, f);
        J(this, n);
        a = new cM(a, b.document, d, e, c, h, m, f, g, k, l, n.output);
        J(this, a);
        this.Jc = a.Jc
    };
    _.T(lu, ok);
    var kM = function(a, b, c, d, e) {
        Y.call(this, a, 937, _.Kf(PD));
        this.qb = b;
        this.j = W(this);
        this.o = W(this);
        this.C = W(this);
        this.lc = c;
        this.jc = d;
        this.Uc = e
    };
    _.T(kM, Y);
    kM.prototype.g = function() {
        var a = {},
            b;
        if (null == (b = _.vm(this.qb, sz, 2)) ? 0 : _.Q(b, 2)) a["*"] = {
            hf: !0
        };
        b = new _.u.Set;
        for (var c = _.y(_.bk(this.qb, rz, 1)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.y([_.I(d, 2), _.I(d, 1)].filter(function(p) {
                    return !!p
                })), f = e.next(); !f.done; f = e.next()) a[f.value] = {
                hf: _.Q(d, 3)
            };
            d = _.y(ue(d, 4, Wc, 2));
            for (e = d.next(); !e.done; e = d.next()) b.add(e.value)
        }
        this.lc.G(a);
        this.j.G([].concat(_.si(b)));
        var g, h;
        a = null == (g = _.vm(this.qb, sz, 2)) ? void 0 : null == (h = _.vm(g, mz, 1)) ? void 0 : _.bk(h, lz, 1);
        this.o.Ha((null == a ? 0 : a.length) ? a : null);
        var k;
        this.jc.G(!(null == (k = _.vm(this.qb, sz, 2)) || !_.Q(k, 4)));
        var l;
        this.Uc.G(!(null == (l = _.vm(this.qb, sz, 2)) || !_.Q(l, 5)));
        var m, n;
        g = null == (m = _.vm(this.qb, sz, 2)) ? void 0 : null == (n = _.vm(m, mz, 3)) ? void 0 : _.bk(n, lz, 1);
        this.C.Ha((null == g ? 0 : g.length) ? g : null)
    };
    kM.prototype.K = function(a) {
        this.l(a)
    };
    kM.prototype.l = function() {
        this.lc.G({});
        this.j.G([]);
        this.o.ca();
        this.jc.G(!1);
        this.Uc.G(!1);
        this.C.ca()
    };
    var lM = function(a, b, c, d) {
        Y.call(this, a, 980);
        this.fb = b;
        this.output = new Kr;
        this.j = X(this, c);
        this.o = X(this, d)
    };
    _.T(lM, Y);
    lM.prototype.g = function() {
        (_.H = _.z(Object, "entries").call(Object, this.j.value), _.z(_.H, "find")).call(_.H, function(c) {
            var d = _.y(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.hf)
        }) && (this.fb.M = !0);
        In(25, this.context);
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next()) jh(b.value);
        this.output.notify()
    };
    var mM = function(a, b, c, d) {
        Y.call(this, a, 931);
        this.j = DH(this, b);
        this.Ic = c;
        this.kc = d
    };
    _.T(mM, Y);
    mM.prototype.g = function() {
        var a = this.j.value,
            b = new _.u.Map;
        this.Ic.G(new _.u.Map);
        if (a) {
            var c;
            a = _.y(null != (c = this.j.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = _.bk(d, kz, 1);
                c = 1 === _.eg(c[0], 1, 0) ? Jy(c[0]) : Ky(c[0], Iy);
                d = _.Ig(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.kc.G(b)
    };
    mM.prototype.l = function() {
        this.Ic.G(new _.u.Map);
        this.kc.G(new _.u.Map)
    };
    var nM = function(a, b, c) {
        Y.call(this, a, 981);
        this.o = W(this);
        this.C = DH(this, b);
        this.j = c
    };
    _.T(nM, Y);
    nM.prototype.g = function() {
        var a = new _.u.Map,
            b, c = _.y(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = _.bk(b, kz, 1);
            d = 1 === _.eg(d[0], 1, 0) ? Jy(d[0]) : Ky(d[0], Iy);
            a.set(d, _.Ig(b, 2))
        }
        this.o.G(a);
        this.j.G(new ui)
    };
    nM.prototype.l = function() {
        this.o.G(new _.u.Map);
        var a = this.j,
            b = a.G;
        var c = new ui;
        c = _.bi(c, 1, 2);
        b.call(a, c)
    };
    var oM = function(a, b, c, d, e, f) {
        Y.call(this, a, 976);
        this.nextFunction = d;
        this.j = e;
        this.requestBidsConfig = f;
        FH(this, b);
        FH(this, c)
    };
    _.T(oM, Y);
    oM.prototype.g = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.j, [this.requestBidsConfig])
    };
    var pM = function(a, b, c, d, e, f) {
        Y.call(this, a, 975);
        this.o = b;
        this.j = c;
        this.C = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new Kr
    };
    _.T(pM, Y);
    pM.prototype.g = function() {
        Rp(this.pbjs, this.o, this.j, this.C, this.requestBidsConfig);
        this.output.notify()
    };
    pM.prototype.l = function() {
        this.output.notify()
    };
    var qM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1100);
        this.pbjs = b;
        this.o = c;
        this.j = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.output = new Kr
    };
    _.T(qM, Y);
    qM.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.Kf(lD);
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
                        if (_.E(kD)) {
                            var h = e.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                            h = 3 !== (null == h ? void 0 : h.length) ? e : "/" + h[1] + h[2]
                        } else h = e;
                        b = c.call(b, h)
                    }
                    b = null != (f = null != (g = b) ? g : null == (a = this.o) ? void 0 : a.get(_.qh(e))) ? f : 0;
                    this.Hd(b)
                }
        }
        this.output.notify()
    };
    qM.prototype.Hd = function(a) {
        var b;
        null != (b = this.j) && Uh(b, 2, this.C);
        if (a) {
            var c;
            null == (c = this.j) || _.bi(c, 1, 1);
            var d;
            null != (d = this.j) && _.Zh(d, 3, a);
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
    qM.prototype.l = function() {
        this.output.notify()
    };
    var rM = function(a, b, c, d, e, f, g, h) {
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
    _.T(rM, _.V);
    rM.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new ok;
            _.S(this, d);
            var e = new qM(this.g, this.pbjs, this.K, this.I, this.o, a),
                f = new pM(this.g, this.j, this.l, this.D, this.pbjs, a);
            J(d, e);
            J(d, f);
            J(d, new oM(this.g, f.output, e.output, c, b, a));
            xk(d)
        }
    };
    var Tp = function(a, b) {
        this.push = M(a, 932, function(c) {
            b.push(c)
        })
    };
    var sM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 951);
        this.B = window;
        this.H = X(this, b);
        this.o = DH(this, d);
        this.C = X(this, e);
        this.P = X(this, f);
        this.j = DH(this, g);
        this.W = DH(this, h);
        this.J = X(this, k);
        FH(this, c);
        this.tf = null != l ? l : W(this);
        this.uf = null != m ? m : W(this)
    };
    _.T(sM, Y);
    sM.prototype.g = function() {
        var a = !!wo().pbjs_hooks;
        this.uf.G(a);
        this.tf.Ha(a ? null : _.Uf());
        var b, c = null == (b = this.o.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.j.value) ? void 0 : d.size) || _.Kf(lD);
        d = this.H.value;
        var e, f = null != (e = wo().pbjs_hooks) ? e : [];
        e = new rM(this.context, this.o.value, this.C.value, this.P.value, this.j.value, this.W.value, this.J.value, d);
        _.S(this, e);
        f = _.y(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) wo().pbjs_hooks = Up(this.context, e);
        !c && !b || a || Sp(d, this.B)
    };
    var tM = function(a, b, c) {
        Y.call(this, a, 966);
        this.B = b;
        this.Yb = c
    };
    _.T(tM, Y);
    tM.prototype.g = function() {
        var a = this,
            b = Ph(this.B);
        if (b) this.Yb.G(b);
        else if (b = Object.getOwnPropertyDescriptor(this.B, "_pbjsGlobals"), !b || b.configurable) {
            var c = null;
            Object.defineProperty(this.B, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Ph(a.B)) && a.Yb.G(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    tM.prototype.l = function() {};
    var Zp = function(a, b, c, d, e) {
        Y.call(this, a, 1146, _.Kf(PD));
        this.fb = b;
        this.B = d;
        this.j = e;
        this.o = EH(this, c)
    };
    _.T(Zp, Y);
    Zp.prototype.g = function() {
        var a = this.o.value,
            b = new ok;
        _.S(this, b);
        var c = new tM(this.context, this.B, this.j.Yb);
        J(b, c);
        if (a) {
            a = new kM(this.context, a, this.j.lc, this.j.jc, this.j.Uc);
            J(b, a);
            var d = new lM(this.context, this.fb, a.lc, a.j);
            J(b, d);
            var e = new mM(this.context, a.o, this.j.Ic, this.j.kc);
            J(b, e);
            var f = new nM(this.context, a.C, this.j.Lf);
            J(b, f);
            c = new sM(this.context, c.Yb, d.output, e.kc, this.j.jc, e.Ic, f.o, f.j, a.Uc, this.j.tf, this.j.uf);
            J(b, c)
        } else uM(this);
        xk(b)
    };
    var uM = function(a) {
        a.j.lc.G({});
        a.j.kc.G(new _.u.Map);
        a.j.jc.G(!1);
        a.j.Ic.G(new _.u.Map);
        a.j.tf.ca();
        a.j.uf.G(!1);
        a.j.Lf.G(new ui);
        a.j.Uc.G(!1)
    };
    Zp.prototype.K = function(a) {
        this.l(a)
    };
    Zp.prototype.l = function() {
        uM(this)
    };
    var vM = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 920);
        this.R = b;
        this.T = c;
        this.pbjs = f;
        this.o = g;
        this.j = W(this);
        this.C = [];
        this.P = X(this, d);
        this.J = DH(this, e.kc);
        this.H = X(this, e.jc);
        this.fa = X(this, e.Ic);
        this.W = DH(this, e.Lf)
    };
    _.T(vM, Y);
    vM.prototype.g = function() {
        for (var a = new _.u.Map, b = !1, c = _.y(this.P.value), d = c.next(), e = {}; !d.done; e = {
                kh: void 0
            }, d = c.next()) {
            d = d.value;
            for (var f = {}, g = _.y(dm(this.T[d.getDomId()])), h = g.next(); !h.done; h = g.next()) h = h.value, f[_.I(h, 1)] = km(h);
            var k = h = g = void 0;
            (f = Ei(this.pbjs, {
                Wc: d.getDomId(),
                adUnitCode: d.getAdUnitPath()
            }, f, null != (h = this.J.value) ? h : void 0, this.H.value, this.fa.value, null != (k = null == (g = this.W) ? void 0 : g.value) ? k : void 0)) ? (b = !0, a.set(d, f)) : (null === f && this.C.push(d), a.set(d, new vi));
            e.kh = d.getDomId() + d.getAdUnitPath();
            wi.has(e.kh) || _.kp(d, function(l) {
                return function() {
                    return wi.delete(l.kh)
                }
            }(e))
        }
        b ? (this.o.Ha(a), this.j.G(this.C)) : (this.o.ca(), this.j.ca())
    };
    vM.prototype.K = function(a) {
        this.l(a)
    };
    vM.prototype.l = function(a) {
        this.R.error(GK(a.message));
        this.o.ca();
        this.j.ca()
    };
    var wM = function(a, b, c, d) {
        Y.call(this, a, 1019);
        this.T = c;
        this.pbjs = d;
        this.j = DH(this, b)
    };
    _.T(wM, Y);
    wM.prototype.g = function() {
        xM(this)
    };
    var xM = function(a) {
        if (!(Math.random() >= _.Kf(jD))) {
            var b = (a.j.value || []).filter(function(k) {
                return dm(a.T[k.getDomId()]).some(function(l) {
                    return "hb_pb" === dk(l, 1)
                })
            });
            if (b.length) {
                var c, d, e, f, g, h = (null == (c = a.pbjs) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.si(new _.u.Set(null == (e = a.pbjs) ? void 0 : e.adUnits.map(function(k) {
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
        this.Kd = f;
        this.j = h;
        this.J = X(this, f.lc);
        this.o = new vH(f.Yb);
        g && (this.C = DH(this, g))
    };
    _.T(aq, Y);
    aq.prototype.g = function() {
        var a, b = null == (a = this.o) ? void 0 : a.value;
        if (a = yM(this)) null != b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.R.error(FK()), a = !1) : a = !0 : a = !1;
        if (a) {
            a = new ok;
            var c = new vM(this.context, this.R, this.T, this.H, this.Kd, b, this.j.jh);
            J(a, c);
            J(a, new wM(this.context, c.j, this.T, b));
            xk(a)
        } else this.j.jh.ca()
    };
    var yM = function(a) {
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
    var zM = function(a, b, c, d, e) {
        Y.call(this, a, 982);
        this.Fb = b;
        this.Na = c;
        this.j = d;
        this.sf = e
    };
    _.T(zM, Y);
    zM.prototype.g = function() {
        for (var a = this, b = _.y(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
                Oe: void 0,
                Mg: void 0
            }, c = b.next()) d.Oe = c.value, d.Mg = function(e) {
            return function(f) {
                if (a.j === f.adId) {
                    var g = new Wo("hbm_brt");
                    Xo(g, a.context);
                    Yo(g, "et", e.Oe);
                    Yo(g, "sf", a.Fb);
                    Yo(g, "qqid", a.Na);
                    var h, k, l;
                    Yo(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                    $o(g)
                }
            }
        }(d), (0, this.sf.onEvent)(d.Oe, d.Mg), _.kp(this, function(e) {
            return function() {
                return void Il(a.context, a.id, function() {
                    var f, g;
                    return void(null == (g = (f = a.sf).offEvent) ? void 0 : g.call(f, e.Oe, e.Mg))
                }, !0)
            }
        }(d))
    };
    zM.prototype.l = function() {};
    var cq = function(a, b, c, d, e) {
        Y.call(this, a, 1134);
        this.o = b;
        this.Fb = c;
        this.Na = d;
        this.j = new vH(e)
    };
    _.T(cq, Y);
    cq.prototype.g = function() {
        var a;
        if (this.o && null != (a = this.j.value) && a.onEvent) {
            a = new ok;
            var b = new zM(this.context, this.Fb, this.Na, this.o, this.j.value);
            J(a, b);
            xk(a)
        }
    };
    var DM = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.g = new _.u.Map;
            this.A = new _.u.Map;
            this.timer = _.If(El);
            fJ() && (_.ob(window, "DOMContentLoaded", Cl(a, 334, function() {
                for (var f = _.y(e.g), g = f.next(); !g.done; g = f.next()) {
                    var h = _.y(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    AM(e, g, h) && e.g.delete(g)
                }
            })), b.listen(xJ, function(f) {
                f = f.detail;
                var g = f.T;
                return void BM(e, CM(d, f.ih), Ps(g, 20))
            }), b.listen(yJ, function(f) {
                f = f.detail;
                var g = f.T;
                f = CM(d, f.ih);
                g = Ps(g, 20);
                var h = e.A.get(f);
                null != h ? hJ(h, g) : BM(e, f, g)
            }))
        },
        BM = function(a, b, c) {
            AM(a, b, c) ? a.g.delete(b) : (a.g.set(b, c), _.kp(b, function() {
                return a.g.delete(b)
            }))
        },
        AM = function(a, b, c) {
            var d = Tm(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new eJ({
                B: window,
                timer: a.timer,
                Sb: d,
                sb: function(e) {
                    return void Gl(a.context, 336, e)
                },
                rm: _.E(kF)
            });
            if (!d.A) return !1;
            hJ(d, c);
            a.A.set(b, d);
            FJ(a.L, b, function() {
                return void a.A.delete(b)
            });
            return !0
        };
    var EM = function(a, b, c, d, e) {
        Y.call(this, a, 1058);
        this.B = b;
        this.Z = c;
        this.output = CH(this);
        d && (this.j = DH(this, d.Sc));
        FH(this, e)
    };
    _.T(EM, Y);
    EM.prototype.g = function() {
        var a;
        if (oh(this.B.isSecureContext, this.B, this.B.document) && null != (a = this.j) && a.value && !_.E(nD) && ch(this.Z)) {
            a = {
                message: "goog:spam:client_age",
                pvsid: this.context.pvsid,
                useObfuscatedKey: _.E(oD)
            };
            var b = this.j.value;
            b(a)
        }
        this.output.notify()
    };
    var FM = function(a, b, c) {
        Y.call(this, a, 1199);
        this.j = c;
        this.o = DH(this, b)
    };
    _.T(FM, Y);
    FM.prototype.g = function() {
        var a = this.o.value;
        a && (a = lL(this.j, a.getSlotElementId()), Uh(a, 30, !0))
    };
    var GM = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1109);
        this.aa = c;
        this.ba = d;
        this.j = e;
        this.C = f;
        this.H = g;
        this.o = h;
        this.output = W(this);
        this.J = DH(this, b)
    };
    _.T(GM, Y);
    GM.prototype.g = function() {
        var a = this,
            b = this.J.value;
        b && (this.o.push(function() {
            b.addService(a.j)
        }), dB(this.aa, function() {
            a.H();
            a.C(b);
            _.Q(a.ba, 4) && a.j.refresh([b])
        }))
    };
    var HM = {},
        gq = (HM[64] = IK, HM[134217728] = JK, HM[32768] = KK, HM[536870912] = LK, HM[8] = MK, HM[512] = NK, HM[1048576] = OK, HM[4194304] = QK, HM);
    var IM = function(a) {
        return "22639388115" === Bl(a.getAdUnitPath())
    };
    var JM = function(a, b, c, d, e, f) {
        Y.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.xb = d;
        this.o = e;
        this.R = f;
        this.output = W(this);
        this.j = W(this)
    };
    _.T(JM, Y);
    JM.prototype.g = function() {
        var a = vq(this.context, this.R, this.o, {
            Xh: this.format,
            adUnitPath: this.adUnitPath,
            xb: this.xb
        });
        this.j.Ha(a);
        this.output.Ha(a ? a.g : null)
    };
    var KM = function(a, b, c, d) {
        Y.call(this, a, 1111);
        this.j = c;
        this.o = d;
        this.C = DH(this, b)
    };
    _.T(KM, Y);
    KM.prototype.g = function() {
        var a = this.C.value;
        a && (a = lL(this.j, a.getSlotElementId()), kk(a, 27, Az, this.o))
    };
    var LM = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v) {
        ok.call(this);
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
        a = J(this, new JM(this.context, this.adUnitPath, this.format, this.xb, this.fa, this.R));
        this.o && J(this, new KM(this.context, a.output, this.K, this.o));
        this.ga && J(this, new FM(this.context, a.output, this.K));
        J(this, new GM(this.context, a.output, this.aa, this.ba, this.W, this.ia, this.P, this.J));
        this.g = {
            wo: a.j
        }
    };
    _.T(LM, ok);
    var Ku = function(a, b, c, d, e, f, g, h, k) {
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
    _.T(Ku, Y);
    Ku.prototype.g = function() {
        for (var a = this, b = _.y(this.C), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d.getAdUnitPath();
            d = _.eg(d, 2, 0);
            c && d && (this.kd.add(Bl(c)), c = new LM(this.context, this.aa, c, d, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, this.ba, this.j, this.o, this.R, !0), xk(c), _.S(this, c))
        }
    };
    var vt = function(a, b) {
        Y.call(this, a, 1110);
        this.B = b;
        this.output = W(this)
    };
    _.T(vt, Y);
    vt.prototype.g = function() {
        var a = this.B;
        a = _.E(gF) && void 0 !== a.credentialless && (_.E(hF) || a.crossOriginIsolated);
        this.output.G(a)
    };
    var MM = function(a, b, c, d, e, f) {
        Y.call(this, a, 935);
        this.L = b;
        this.O = c;
        this.aa = d;
        this.output = CH(this);
        this.j = X(this, e);
        FH(this, f)
    };
    _.T(MM, Y);
    MM.prototype.g = function() {
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
            wq(e, f) && !g.xc(d) && xq(d, h, e, f)
        }
        this.output.notify()
    };
    var Bq = function(a, b, c) {
        Y.call(this, a, 1208);
        this.j = b;
        this.eg = c;
        this.output = new Kr
    };
    _.T(Bq, Y);
    Bq.prototype.g = function() {
        var a, b = null == (a = this.eg) ? void 0 : _.vm(a, Tz, 1);
        if (b) {
            a = this.j;
            var c = new DG;
            c = Uh(c, 5, !0);
            KG(a, "__eoi", b, c)
        }
        this.output.notify()
    };
    var Gq = function(a, b, c, d) {
        Y.call(this, a, 896);
        this.lg = b;
        this.wc = d;
        this.Cc = W(this);
        c && FH(this, c)
    };
    _.T(Gq, Y);
    Gq.prototype.g = function() {
        this.Cc.G(this.lg.dd(".google.cn" === this.wc))
    };
    var Ot = function(a, b) {
        Y.call(this, a, 1018);
        this.Yc = CH(this);
        this.j = DH(this, b)
    };
    _.T(Ot, Y);
    Ot.prototype.g = function() {
        var a, b, c;
        if (null == (a = this.j.value)) a = void 0;
        else {
            var d;
            null == (b = _.vm(a, yF, 5)) ? d = void 0 : d = ue(b, 1, Wc, 2);
            a = d
        }
        a = _.y(null != (c = a) ? c : []);
        for (c = a.next(); !c.done; c = a.next()) jh(c.value);
        this.Yc.notify()
    };
    var Pt = function(a, b) {
        Y.call(this, a, 1070);
        this.j = W(this);
        this.o = DH(this, b)
    };
    _.T(Pt, Y);
    Pt.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : _.vm(a, yF, 5);
        if (b) {
            a = [];
            for (var c = _.y(ue(b, 2, Oe, 1, void 0, void 0, 4096)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new Az;
                var f = new yz;
                e = _.ik(f, 1, dd(e));
                d = _.di(d, 2, e);
                null != Di(b, 3) && (e = new wz, e = _.bi(e, 1, 1), f = _.Fy(b, 3), e = _.Zh(e, 2, f), _.di(d, 3, e));
                a.push(d)
            }
            this.j.G(a)
        } else this.j.G([])
    };
    var NM = function(a, b, c, d) {
        Y.call(this, a, 1016);
        this.output = W(this);
        this.o = DH(this, b);
        this.j = DH(this, c);
        this.C = GH(this, [b, d])
    };
    _.T(NM, Y);
    NM.prototype.g = function() {
        if (this.j.value) {
            var a = this.o.value || this.C.value;
            a && OM(this, a) ? this.output.G(a) : this.output.ca()
        } else this.output.ca()
    };
    NM.prototype.K = function(a) {
        this.l(a)
    };
    NM.prototype.l = function() {
        this.output.ca()
    };
    var OM = function(a, b) {
        return _.bk(a.j.value, uz, 1).some(function(c) {
            return _.I(c, 1) === b
        })
    };
    var PM = function(a, b) {
        Y.call(this, a, 1015);
        this.j = W(this);
        this.o = DH(this, b)
    };
    _.T(PM, Y);
    PM.prototype.g = function() {
        if (this.o.value)
            if (_.bk(this.o.value, uz, 1).length) {
                var a = _.bk(this.o.value, uz, 1)[0];
                (_.H = [2, 3], _.z(_.H, "includes")).call(_.H, _.eg(a, 3, 0)) ? this.j.G(_.I(a, 1)) : this.j.ca()
            } else this.j.ca();
        else this.j.ca()
    };
    PM.prototype.K = function(a) {
        this.l(a)
    };
    PM.prototype.l = function() {
        this.j.ca()
    };
    var QM = function(a, b, c) {
        Y.call(this, a, 1017);
        this.B = c;
        this.output = CH(this);
        this.j = DH(this, b)
    };
    _.T(QM, Y);
    QM.prototype.g = function() {
        var a = this;
        if (this.j.value) {
            var b = RF(this.B, this.j.value, function(c) {
                if (!c) {
                    c = gg(b.g);
                    for (var d = _.y(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.Nj(e.value)
                }
                a.output.notify()
            });
            b.start(_.E(zD))
        } else this.output.notify()
    };
    QM.prototype.K = function(a) {
        this.l(a)
    };
    QM.prototype.l = function() {
        this.output.notify()
    };
    var RM = function(a, b) {
        Y.call(this, a, 1056);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(RM, Y);
    RM.prototype.g = function() {
        var a = Bl(this.j.value.getAdUnitPath());
        this.output.G(a)
    };
    RM.prototype.K = function(a) {
        this.l(a)
    };
    RM.prototype.l = function() {
        this.output.ca()
    };
    var Nt = function(a, b, c, d) {
        Y.call(this, a, 906, _.Kf(QD));
        this.j = CH(this);
        if (b === b.top) {
            var e = new ok;
            _.S(this, e);
            var f = new PM(a, c);
            J(e, f);
            d = new or(a, d, xJ, function(g) {
                return g.detail.T
            });
            J(e, d);
            d = new RM(a, d.output);
            J(e, d);
            a = new NM(a, f.j, c, d.output);
            J(e, a);
            b = new QM(this.context, a.output, b);
            J(e, b);
            zH(this.D, b.output, !0);
            xk(e)
        } else this.j.notify()
    };
    _.T(Nt, Y);
    Nt.prototype.g = function() {
        this.j.notify()
    };
    Nt.prototype.K = function(a) {
        this.l(a)
    };
    Nt.prototype.l = function() {
        this.j.notify()
    };
    var tu = function(a, b, c, d, e) {
        Y.call(this, a, 934);
        this.B = b;
        this.slotId = c;
        FH(this, d);
        this.j = X(this, e)
    };
    _.T(tu, Y);
    tu.prototype.g = function() {
        var a = this;
        this.slotId.listen(Yq, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.j.value,
                        g = new Tz;
                    var h = mi(g, 1, d ? "1" : "0");
                    var k = mi(_.Zh(h, 2, 2147483647), 3, "/");
                    var l = mi(k, 4, a.B.location.hostname);
                    var m = new _.IG(a.B);
                    KG(m, "__gpi_opt_out", l, f);
                    if (d || e) LG(m, "__gads", f), LG(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var SM = function(a, b, c) {
        Y.call(this, a, 944);
        this.B = b;
        this.j = new _.IG(this.B);
        this.o = X(this, c)
    };
    _.T(SM, Y);
    SM.prototype.g = function() {
        var a = this.o.value;
        if (JG(this.j, a)) {
            var b = _.Jn(this.j, "__gpi_opt_out", a);
            if (b) {
                var c = new Tz;
                b = mi(c, 1, b);
                b = mi(_.Zh(b, 2, 2147483647), 3, "/");
                b = mi(b, 4, this.B.location.hostname);
                KG(this.j, "__gpi_opt_out", b, a)
            }
        }
    };
    var TM = function(a, b, c, d) {
        Y.call(this, a, 821);
        this.Z = b;
        this.Ea = c;
        this.j = X(this, d)
    };
    _.T(TM, Y);
    TM.prototype.g = function() {
        if (ch(this.Z)) {
            var a = new _.u.Set;
            var b = _.bk(this.j.value, Tz, 14);
            b = _.y(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = Ly(c, 5)) ? d : 1;
                a.has(e) || (KG(this.Ea, 2 === e ? "__gpi" : "__gads", c, this.Z), a.add(e))
            }
        }
    };
    var UM = function() {
            this.A = [];
            this.hostpageLibraryTokens = [];
            this.g = {}
        },
        lt = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.g[b]) ? void 0 : _.z(c, "values").call(c)) ? d : [];
            return [].concat(_.si(a))
        };
    var VM = function(a, b, c, d) {
        Y.call(this, a, 822);
        this.slotId = b;
        this.Za = c;
        this.j = X(this, d)
    };
    _.T(VM, Y);
    VM.prototype.g = function() {
        var a = ue(this.j.value, 23, _.Uc, 2);
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = this.Za;
            if (!_.z(c.A, "includes").call(c.A, b) && (_.H = [1, 2, 3], _.z(_.H, "includes")).call(_.H, b)) {
                var d = NG[b];
                if (d) {
                    var e = b + "_hostpage_library";
                    if (d = _.ap(document, d)) d.id = e
                }
                c.A.push(b);
                e = new OG(b);
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
    var Qq = 0;
    var Ju = function(a, b, c, d, e, f) {
        Y.call(this, a, 721);
        this.B = b;
        this.Ye = c;
        this.o = X(this, d);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(Ju, Y);
    Ju.prototype.g = function() {
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
                n = Sq(e.id + "_top", d),
                p = Sq(e.id + "_bottom", b);
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
                _.DA(n);
                _.DA(p);
                g.style.position = m;
                g.style.height = h;
                g.style.width = k;
                g.style.display = l
            })
        }
    };
    var WM = _.iw(["https://td.doubleclick.net/td/kb?kbli=", ""]),
        qu = function(a, b, c, d, e) {
            Y.call(this, a, 1007);
            this.vg = b;
            this.j = X(this, d);
            c && (this.o = X(this, c));
            e && FH(this, e)
        };
    _.T(qu, Y);
    qu.prototype.g = function() {
        if (ch(this.j.value)) {
            var a;
            if (null == (a = this.o) || !a.value) {
                var b = this.vg;
                if (b.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
                    a = document.createElement("iframe");
                    b = Ua(WM, encodeURIComponent(b.join()));
                    a.removeAttribute("srcdoc");
                    if (b instanceof _.Ww) throw new Kx("TrustedResourceUrl", 3);
                    var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
                    a.setAttribute("sandbox", "");
                    for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
                    b = _.Za(b);
                    void 0 !== b && (a.src = b);
                    a.id = "koelBirdIGRegisterIframe";
                    document.head.appendChild(a)
                }
            }
        }
    };
    var cu = function(a, b, c, d) {
        Y.call(this, a, 1176);
        this.o = b;
        this.T = c;
        this.R = d;
        this.j = W(this)
    };
    _.T(cu, Y);
    cu.prototype.g = function() {
        var a, b = null != (a = this.o) ? a : new du;
        (a = null != Di(b, 2) ? null != Uq(b) && 0 !== (0, _.Pp)() ? Di(b, 2) * Uq(b) : Di(b, 2) : null) && _.E(MD) && (_.H = [8, 9], _.z(_.H, "includes")).call(_.H, mr(this.T)) ? (O(this.R, TK()), this.j.ca()) : this.j.Ha(a)
    };
    var ku = function(a, b, c, d, e, f) {
        f = void 0 === f ? Tq : f;
        Y.call(this, a, 666);
        this.o = f;
        this.output = CH(this);
        FH(this, b);
        e && FH(this, e);
        this.j = X(this, c);
        this.C = DH(this, d)
    };
    _.T(ku, Y);
    ku.prototype.g = function() {
        var a = this.C.value,
            b = this.j.value;
        null == a || 0 > a || !Wm(b) ? this.output.notify() : XM(this, a, b)
    };
    var XM = function(a, b, c) {
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
    var ju = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 664);
        this.slotId = b;
        this.Dd = c;
        this.L = d;
        this.output = CH(this);
        this.o = X(this, e);
        this.j = DH(this, f);
        g && FH(this, g)
    };
    _.T(ju, Y);
    ju.prototype.g = function() {
        var a = this,
            b, c = null != (b = this.j.value) ? b : 0;
        if (0 !== (0, _.Pp)() || 0 < c)
            if (b = $G(document), aH(document) && b && (0 < KJ(this.L, this.slotId) || !YM(this)) && b) {
                var d = lp(this, 324, document, b, function() {
                    aH(document) || (d && d(), a.output.notify())
                });
                if (d) return
            }
        this.output.notify()
    };
    var YM = function(a) {
        try {
            var b = top;
            if (!b) return !0;
            var c = Mu(b.document, b).y,
                d = c + a.Dd.height,
                e = a.o.value;
            return e.y >= c && e.y <= d
        } catch (f) {
            return !0
        }
    };
    var iu = function(a, b) {
        Y.call(this, a, 676);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(iu, Y);
    iu.prototype.g = function() {
        var a = Jm(this.j.value);
        this.output.G(a)
    };
    var Vq = function(a, b, c, d, e, f) {
        f = void 0 === f ? _.u.globalThis.IntersectionObserver : f;
        Y.call(this, a, 886);
        this.X = b;
        this.L = c;
        this.o = d;
        this.j = f;
        this.output = CH(this);
        e && FH(this, e)
    };
    _.T(Vq, Y);
    Vq.prototype.g = function() {
        this.X.some(function(a) {
            return !Wm(Tm(a))
        }) ? this.output.notify() : wH(this.output, ZM(this, this.o))
    };
    var ZM = function(a, b) {
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
                    g.xf = Tm(f);
                    if (!g.xf) return;
                    d.observe(g.xf);
                    FJ(a.L, f, function(h) {
                        return function() {
                            return void d.unobserve(h.xf)
                        }
                    }(g))
                }
                _.kp(a, function() {
                    return void d.disconnect()
                })
            } else c()
        })
    };
    var $M = [{
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
        Kt = function(a, b, c, d, e, f, g) {
            Y.call(this, a, 789);
            this.aa = b;
            this.googletag = c;
            this.o = d;
            this.j = e;
            this.R = f;
            this.C = g;
            this.output = W(this)
        };
    _.T(Kt, Y);
    Kt.prototype.g = function() {
        var a = this;
        $M.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.C)
        }).forEach(function(b) {
            var c = b.name;
            b = b.de;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new LM(a.context, a.aa, "/22639388115/example/" + c.toLowerCase(), b, !1, a.googletag.pubads(), function(f) {
                return void a.googletag.display(f)
            }, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, a.googletag.cmd, a.j.g, a.j, a.o, a.R, !1);
            _.S(a, c);
            xk(c)
        })
    };
    var aN = function(a, b, c) {
        Y.call(this, a, 1163);
        _.E(uu);
        this.j = X(this, b);
        c && FH(this, c)
    };
    _.T(aN, Y);
    aN.prototype.g = function() {
        this.j.value.Mj();
        this.j.value.Ma()
    };
    var wu = function(a, b, c, d, e, f, g, h, k, l) {
        Y.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.eb = f;
        this.j = W(this);
        this.o = X(this, g);
        this.J = X(this, h);
        this.C = DH(this, k);
        this.H = X(this, l)
    };
    _.T(wu, Y);
    wu.prototype.g = function() {
        var a = this,
            b;
        if (null != (b = this.eb) && _.Q(b, 12, !1)) {
            b = this.C.value.Ok;
            var c = _.yq(this.L, this.slotId),
                d = this.J.value,
                e = this.o.value;
            _.qp(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (bN) bN.Kj(e, this.H.value);
            else {
                var f, g;
                bN = new b(this.context, this.format, e, this.B, d, this.L, this.slotId, null != (g = null == (f = this.eb) ? void 0 : _.vm(f, Kz, 16)) ? g : null);
                f = {};
                g = _.y(_.bk(this.eb, Jz, 13));
                for (b = g.next(); !b.done; b = g.next()) b = b.value, f[dk(b, 1)] = dk(b, 2);
                bN.Lj(f);
                _.E(uu) ? (bN.Hj(), this.j.G(bN)) : bN.Ma();
                EJ(this.L, this.slotId, function() {
                    bN && (bN.za(), bN = null);
                    c && _.IJ(a.L, a.slotId)
                })
            }
            _.kp(this, function() {
                return _.DA(e)
            })
        }
    };
    var bN = null;
    var vu = function(a, b, c, d, e, f, g, h, k, l) {
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
    _.T(vu, Y);
    vu.prototype.g = function() {
        var a;
        if (null != (a = this.eb) && null != Gn(a, 12)) {
            a = new ok;
            _.S(this, a);
            var b, c = (null == (b = this.eb) ? 0 : _.Q(b, 15)) ? J(a, new Xq(this.context, this.slotId, Yq, function(d) {
                d = d.detail.data;
                try {
                    var e = JSON.parse(d);
                    return "floating" === e.type && "loaded" === e.message
                } catch (f) {}
                return !1
            })).output : void 0;
            b = new wu(this.context, this.L, this.format, this.slotId, this.B, this.eb, this.j, this.C, this.o, this.H);
            J(a, b);
            b = new aN(this.context, b.j, c);
            J(a, b);
            xk(a)
        }
    };
    var dr = function(a, b, c) {
        Y.call(this, a, 1150);
        this.B = b;
        this.output = CH(this);
        FH(this, c)
    };
    _.T(dr, Y);
    dr.prototype.g = function() {
        var a = this;
        this.B.location.hash = "goog_game_inter";
        _.kp(this, function() {
            "goog_game_inter" === a.B.location.hash && (a.B.location.hash = "")
        });
        wH(this.output, new _.u.Promise(function(b) {
            return void lp(a, a.id, a.B, "hashchange", function(c) {
                hx(c.oldURL, "#goog_game_inter") && b()
            })
        }))
    };
    var cN = function(a, b) {
            this.serviceName = b;
            this.slot = a.g
        },
        dN = function(a, b) {
            cN.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.T(dN, cN);
    var eN = function() {
        cN.apply(this, arguments)
    };
    _.T(eN, cN);
    var fN = function(a, b, c) {
        cN.call(this, a, b);
        this.inViewPercentage = c
    };
    _.T(fN, cN);
    var gN = function() {
        cN.apply(this, arguments)
    };
    _.T(gN, cN);
    var hN = function() {
        cN.apply(this, arguments)
    };
    _.T(hN, cN);
    var iN = function() {
        cN.apply(this, arguments)
    };
    _.T(iN, cN);
    var jN = function() {
        cN.apply(this, arguments)
    };
    _.T(jN, cN);
    var kN = function(a, b, c, d) {
        cN.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.T(kN, cN);
    var lN = function(a, b, c) {
        cN.call(this, a, b);
        this.payload = c
    };
    _.T(lN, cN);
    var mN = function() {
        cN.apply(this, arguments)
    };
    _.T(mN, cN);
    var nN = function(a, b, c) {
        cN.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.T(nN, cN);
    var oN = function() {
        cN.apply(this, arguments)
    };
    _.T(oN, cN);
    var er = function(a, b, c, d, e, f) {
        Y.call(this, a, 1151);
        this.slotId = b;
        this.Aa = c;
        FH(this, d);
        a = [e];
        f && a.push(f);
        f = new xH(a, !0);
        zH(this.D, f)
    };
    _.T(er, Y);
    er.prototype.g = function() {
        Qs(this.Aa, "gameManualInterstitialSlotClosed", 1148, new oN(this.slotId, "publisher_ads"))
    };
    var br = function(a, b, c, d) {
        Y.call(this, a, 1149);
        this.slotId = b;
        this.Aa = c;
        this.output = CH(this);
        FH(this, d)
    };
    _.T(br, Y);
    br.prototype.g = function() {
        var a = new _.Jh,
            b = a.promise;
        Qs(this.Aa, "gameManualInterstitialSlotReady", 1147, new nN(this.slotId, "publisher_ads", a.resolve));
        wH(this.output, b.then(function() {
            return eB(10)
        }))
    };
    var ar = function(a, b, c) {
        c = void 0 === c ? pN : c;
        Y.call(this, a, 1158);
        this.j = c;
        this.o = 1E3 * _.Kf($q);
        this.output = CH(this);
        FH(this, b)
    };
    _.T(ar, Y);
    ar.prototype.g = function() {
        var a = this;
        this.j.rf++ ? wH(this.output, eB(this.o * (this.j.rf - 2) + (this.o - (Date.now() - this.j.wg))).then(function() {
            a.j.wg = Date.now();
            a.j.rf--
        })) : (this.j.wg = Date.now(), eB(this.o).then(function() {
            return void a.j.rf--
        }), this.output.notify())
    };
    var pN = {
        rf: 0,
        wg: Date.now()
    };
    var qN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        rN = {
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        cr = function(a, b, c, d, e) {
            Y.call(this, a, 1150);
            this.B = b;
            this.j = X(this, c);
            this.C = X(this, d);
            FH(this, e);
            this.o = new _.QH(this.B)
        };
    _.T(cr, Y);
    cr.prototype.g = function() {
        var a = 0 === (0, _.Pp)() ? "rgba(1,1,1,0.5)" : "white";
        _.qp(this.j.value, _.z(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.Pp)() ? rN : qN));
        _.qp(this.C.value, _.z(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, qN));
        _.kp(this, _.cI(this.B.document, this.B));
        a = {};
        GA(this.j.value).postMessage(JSON.stringify((a.googMsgType = "sth", a.msg_type = "i-view", a)), "*");
        if (this.B === this.B.top) {
            var b = _.SH(this.o, 2147483646);
            _.WH(b);
            _.kp(this, function() {
                return void _.XH(b)
            })
        }
    };
    var gr = function() {
        this.Th = 1E3
    };
    gr.prototype.send = function(a, b) {
        a.gh(b)
    };
    var sN = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 683);
        this.slotId = b;
        this.P = c;
        this.j = d;
        this.o = W(this);
        this.C = X(this, e);
        this.W = X(this, f);
        this.H = DH(this, g);
        this.J = DH(this, h);
        this.context.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.context, {
            U: 7
        }))
    };
    _.T(sN, Y);
    sN.prototype.g = function() {
        var a = this;
        this.context.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.context, {
            U: 8
        }));
        var b = this.W.value,
            c = this.C.value,
            d = this.J.value.el,
            e = new _.pJ(this.context),
            f = null != xm(this.j, 14) ? 60 * Ps(this.j, 14) : 604800;
        b = new d(this.context, window, c, b, e, this.P, tN(this), new _.u.Set(ue(this.j, 15, _.Uc, 2)), IM(this.slotId), function() {
            return void a.za()
        }, function() {
            kr(a.context, {
                Mc: 1,
                payload: function() {
                    var g = new ej,
                        h = iq(g, JC, 5);
                    _.ri(h, 1, _.Vf());
                    return g
                }
            });
            a.za()
        }, f, this.H.value);
        b.ia();
        _.S(this, b);
        this.o.G(b);
        this.context.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.context, {
            U: 9
        }))
    };
    var tN = function(a) {
        var b = {};
        a = _.bk(a.j, Jz, 13);
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[dk(c, 1)] = dk(c, 2);
        return b
    };
    var uN = function(a, b, c, d) {
        Y.call(this, a, 1210);
        this.action = b;
        this.j = DH(this, c);
        FH(this, d)
    };
    _.T(uN, Y);
    uN.prototype.g = function() {
        var a;
        null != (a = this.j.value) && a.pb() && this.action()
    };
    var vN = function(a, b, c) {
        Y.call(this, a, 1121);
        this.aa = b;
        this.output = CH(this);
        this.C = !1;
        this.H = X(this, c)
    };
    _.T(vN, Y);
    vN.prototype.g = function() {
        var a = this;
        if (this.o = lr(Cl(this.context, this.id, function(b) {
                b = _.y(b);
                for (var c = b.next(); !c.done; c = b.next()) c = 100 * c.value.intersectionRatio, _.z(Number, "isFinite").call(Number, c) && 50 <= c ? a.j || (a.C = !0, aH(a.aa) || wN(a)) : (a.C = !1, xN(a))
            }))) _.kp(this, function() {
            var b;
            null == (b = a.o) || b.disconnect();
            xN(a)
        }), this.o.observe(this.H.value), this.J = lp(this, this.id, this.aa, "visibilitychange", function() {
            aH(a.aa) ? xN(a) : a.C && !a.j && wN(a)
        })
    };
    var wN = function(a) {
            a.j = setTimeout(function() {
                a.j = void 0;
                if (!aH(a.aa)) {
                    a.output.notify();
                    var b;
                    null == (b = a.o) || b.disconnect();
                    var c;
                    null == (c = a.J) || c.call(a)
                }
            }, 1E3)
        },
        xN = function(a) {
            clearTimeout(a.j);
            a.j = void 0
        };
    var xu = function(a, b, c, d, e, f, g, h, k, l, m) {
        m = void 0 === m ? function() {
            return _.Vf()
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
    _.T(xu, Y);
    xu.prototype.g = function() {
        var a = this;
        if (this.o) {
            var b = new ok;
            _.S(this, b);
            var c = J(b, new sN(this.context, this.slotId, this.J, this.o, this.j, this.P, this.yb, this.H));
            _.kp(c, function() {
                return void a.za()
            });
            this.output.La(c.o.promise.then(function() {
                return !0
            }));
            if (_.E(HD) || _.Kf(JD)) {
                var d = J(b, new vN(this.context, this.aa, this.j));
                _.Kf(JD) && J(b, new uN(this.context, function() {
                    kr(a.context, {
                        Mc: _.Kf(JD),
                        payload: function() {
                            var e = new IC,
                                f = a.ec();
                            null !== f && _.ri(e, 1, f);
                            return KC(e)
                        }
                    })
                }, c.o, d.output));
                _.E(HD) && J(b, new uN(this.context, function() {
                    kr(a.context, {
                        Mc: 1,
                        payload: function() {
                            var e = new IC,
                                f = a.ec();
                            null !== f && _.ri(e, 1, f);
                            Uh(e, 2, !0);
                            return KC(e)
                        }
                    });
                    a.C()
                }, c.o, d.output))
            }
            xk(b)
        } else this.output.G(!1)
    };
    var yN = function(a) {
        this.module = a
    };
    yN.prototype.toString = function() {
        return String(this.module)
    };
    _.zN = new yN(2);
    _.AN = new yN(5);
    _.BN = new yN(6);
    var pu = function(a, b, c, d, e, f) {
        Y.call(this, a, 846);
        this.o = b;
        this.format = c;
        this.eb = d;
        this.j = e;
        this.output = W(this);
        f && FH(this, f)
    };
    _.T(pu, Y);
    pu.prototype.g = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.eb) || !_.Q(a, 12, !1));
        a = 5 === this.format && this.j;
        b || a ? this.output.La(this.o.load(_.zN)) : this.output.ca()
    };
    var CN = function(a, b, c, d, e) {
        Y.call(this, a, 905);
        this.O = b;
        this.j = c;
        this.output = CH(this);
        this.o = X(this, d);
        FH(this, e)
    };
    _.T(CN, Y);
    CN.prototype.g = function() {
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            b = null == (c = this.O.T[b.value.getDomId()]) ? void 0 : mr(c);
            if (2 === b || 3 === b || 5 === b) {
                this.j.load(_.zN);
                return
            }
        }
        this.output.notify()
    };
    var DN = function(a, b, c, d, e, f) {
        Y.call(this, a, 696);
        this.slotId = b;
        this.Aa = c;
        FH(this, d);
        GH(this, [e, f])
    };
    _.T(DN, Y);
    DN.prototype.g = function() {
        Qs(this.Aa, "rewardedSlotClosed", 703, new mN(this.slotId, "publisher_ads"))
    };
    var EN = function(a, b, c, d, e) {
        Y.call(this, a, 694);
        this.slotId = b;
        this.Aa = c;
        FH(this, d);
        this.j = DH(this, e)
    };
    _.T(EN, Y);
    EN.prototype.g = function() {
        var a, b = null == (a = this.j.value) ? void 0 : a.payload;
        Qs(this.Aa, "rewardedSlotGranted", 702, new lN(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var FN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        GN = function(a, b, c, d, e, f) {
            Y.call(this, a, 693);
            this.B = b;
            this.H = f;
            this.output = CH(this);
            this.o = X(this, c);
            this.C = X(this, d);
            FH(this, e);
            this.j = new _.QH(this.B)
        };
    _.T(GN, Y);
    GN.prototype.g = function() {
        var a = this;
        if (!this.H.Lc) {
            var b = 0 === (0, _.Pp)() ? "rgba(1,1,1,0.5)" : "white";
            _.qp(this.C.value, _.z(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, FN));
            _.kp(this, _.cI(this.B.document, this.B));
            GA(this.o.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.B === this.B.top) {
                this.B.location.hash = "goog_rewarded";
                var c = _.SH(this.j, 2147483646);
                _.WH(c);
                _.kp(this, function() {
                    _.XH(c);
                    "goog_rewarded" === a.B.location.hash && (a.B.location.hash = "")
                })
            }
            this.output.notify()
        }
    };
    var HN = function(a, b, c, d) {
        Y.call(this, a, 695);
        this.B = b;
        this.j = X(this, c);
        FH(this, d)
    };
    _.T(HN, Y);
    HN.prototype.g = function() {
        if (this.B === this.B.top) var a = GA(this.j.value),
            b = lp(this, 503, this.B, "hashchange", function(c) {
                hx(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var IN = function(a, b, c, d) {
        Y.call(this, a, 692);
        this.slotId = b;
        this.Aa = c;
        this.output = CH(this);
        this.j = X(this, d)
    };
    _.T(IN, Y);
    IN.prototype.g = function() {
        var a = this.j.value,
            b = new _.Jh,
            c = b.promise,
            d;
        Qs(this.Aa, "rewardedSlotReady", 701, new kN(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        wH(this.output, c)
    };
    var JN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        KN = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        LN = function(a, b, c, d, e) {
            Y.call(this, a, 691);
            this.C = W(this);
            this.o = CH(this);
            this.H = X(this, c);
            this.j = GH(this, [d, e])
        };
    _.T(LN, Y);
    LN.prototype.g = function() {
        if ("ha_before_make_visible" === this.j.value.message) this.o.notify();
        else {
            var a = _.E(ND) ? JN : KN;
            _.qp(this.H.value, _.z(Object, "assign").call(Object, {
                position: "absolute"
            }, 0 === (0, _.Pp)() ? a : JN));
            this.C.G(this.j.value)
        }
    };
    var yu = function(a, b, c, d, e, f) {
        ok.call(this);
        var g = pr(b, "granted", a);
        J(this, g);
        var h = pr(b, "prefetched", a);
        J(this, h);
        var k = pr(b, "closed", a);
        J(this, k);
        var l = pr(b, "ha_before_make_visible", a);
        J(this, l);
        var m = new LN(a, b, e, h.output, l.output);
        J(this, m);
        h = new IN(a, b, c, m.C);
        J(this, h);
        f = new GN(a, d, e, f, h.output, m.o);
        J(this, f);
        J(this, new HN(a, d, e, f.output));
        J(this, new EN(a, b, c, h.output, g.output));
        J(this, new DN(a, b, c, h.output, k.output, l.output))
    };
    _.T(yu, ok);
    var Et = function(a, b) {
        Y.call(this, a, 1031);
        this.B = b
    };
    _.T(Et, Y);
    Et.prototype.g = function() {
        this.B === this.B.top && ll(this.B)
    };
    var wt = function(a, b, c) {
        c = void 0 === c ? Nh : c;
        Y.call(this, a, 1063);
        this.B = b;
        this.o = c;
        this.j = W(this)
    };
    _.T(wt, Y);
    wt.prototype.g = function() {
        var a = this;
        if (_.E(AD) && Oh(this.B)) {
            var b = null,
                c = 0,
                d = Cl(this.context, this.id, function() {
                    var f, g, h, k;
                    return _.qb(function(l) {
                        switch (l.g) {
                            case 1:
                                return f = a.o(a.B), g = "0", l.l = 2, l.yield(f, 4);
                            case 4:
                                g = null != (h = l.A) ? h : "0";
                                1E4 < g.length && (Gl(a.context, a.id, new uo("ML:" + g.length)), g = "0");
                                l.g = 3;
                                l.l = 0;
                                break;
                            case 2:
                                k = sb(l), Gl(a.context, a.id, k);
                            case 3:
                                b = g, c = _.Uf(a.B) + 3E5, l.g = 0
                        }
                    })
                });
            var e = (_.H = d(), _.z(_.H, "finally")).call(_.H, function() {
                e = void 0
            });
            this.j.G(function() {
                var f, g;
                return _.qb(function(h) {
                    if (1 == h.g) {
                        f = _.Uf(a.B) >= c;
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
    wt.prototype.l = function() {
        this.j.G(function() {
            return _.u.Promise.resolve("")
        })
    };
    var MN = function(a, b) {
        Y.call(this, a, 1091);
        this.output = W(this);
        b && (this.j = DH(this, b))
    };
    _.T(MN, Y);
    MN.prototype.g = function() {
        var a;
        null != (a = this.j) && a.value ? this.output.La(this.j.value()) : this.output.G("")
    };
    MN.prototype.l = function() {
        this.output.G("")
    };
    var Ar = new _.u.Map([
        ["IAB_AUDIENCE_1_1", 3],
        ["IAB_CONTENT_2_2", 5],
        ["IAB_CONTENT_3_0", 6]
    ]);
    var Hr = new _.u.Set(["disablePersonalization"]);
    var Lr = function(a, b, c) {
        Y.call(this, a, 1122);
        this.aa = b;
        this.j = c;
        CH(this, c)
    };
    _.T(Lr, Y);
    Lr.prototype.g = function() {
        var a = this,
            b = Al(this.context);
        wH(this.j, new _.u.Promise(function(c) {
            return void cH(function() {
                c();
                b()
            }, a.aa)
        }))
    };
    var Ft = function(a, b, c) {
        Y.call(this, a, 1107);
        this.B = b;
        this.j = c;
        W(this, c)
    };
    _.T(Ft, Y);
    Ft.prototype.g = function() {
        var a = mh(this.B.isSecureContext, this.B.navigator, this.B.document),
            b = nh(this.B.isSecureContext, this.B.document),
            c = oh(this.B.isSecureContext, this.B, this.B.document),
            d = !(!this.B.isSecureContext || !lh("attribution-reporting", this.B.document)),
            e = 0;
        a && (e |= 1);
        b && (e |= 4);
        c && (e |= 8);
        d && (e |= 2);
        this.j.Ha(0 === e ? null : e)
    };
    Ft.prototype.l = function() {
        this.j.ca()
    };
    var NN = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1118, _.Kf(TD));
        this.C = b;
        this.J = e;
        this.T = f;
        W(this, e);
        c && (this.P = DH(this, c));
        d && (this.H = DH(this, d));
        g && (this.o = X(this, g));
        h && (this.j = EH(this, h))
    };
    _.T(NN, Y);
    NN.prototype.g = function() {
        var a = new lH;
        a = _.Je(a, 1, _.Yc(this.C), 0);
        if (this.j)
            if (this.j.value) {
                var b = _.cj(a, 3, this.j.value.label);
                _.L(b, 4, this.j.value.status)
            } else this.j.Lc() || _.L(a, 4, 5);
        if (this.C & 1) {
            var c, d;
            b = ON(this, null == (c = this.P) ? void 0 : c.value, null == (d = this.H) ? void 0 : d.value);
            _.di(a, 2, b)
        }
        this.J.G(a)
    };
    var ON = function(a, b, c) {
            switch (_.Kf(Ht)) {
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
            var e = kH(new jH, d);
            null == b || b.forEach(function(h, k) {
                var l = iH(new hH, h),
                    m;
                null == (m = null == c ? void 0 : c.get(k)) || m.forEach(function(n, p) {
                    var r = new eH;
                    n = _.Je(r, 2, _.Yc(n), 0);
                    p = _.Je(n, 1, _.Yc(_.qh(p)), 0);
                    kk(l, 2, eH, p)
                });
                He(e, 2, hH).set(k, l)
            });
            var f;
            if ((null == (f = a.o) ? 0 : f.value) && a.T) {
                var g;
                b = _.y(null == (g = a.o) ? void 0 : g.value);
                for (g = b.next(); !g.done; g = b.next()) g = g.value, (d = PN(a, a.T[g.getDomId()])) && He(e, 3, fH).set(g.getAdUnitPath(), d)
            }
            return e
        },
        PN = function(a, b) {
            a = Bo(a.context, b);
            if (0 !== a.length) return gH(new fH, a.map(function(c) {
                return c.seller
            }))
        };
    var Nr = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1165);
        this.H = c;
        this.vf = d;
        this.T = e;
        this.C = f;
        this.o = g;
        this.j = DH(this, b.Vi)
    };
    _.T(Nr, Y);
    Nr.prototype.g = function() {
        if (this.j.value) {
            var a = new ok,
                b = new NN(this.context, this.j.value, this.H, void 0, this.vf.Ug, this.T, this.C, this.o);
            J(a, b);
            xk(a)
        } else this.vf.Ug.ca()
    };
    var Rt = function(a, b, c) {
        Y.call(this, a, 1206);
        this.o = b;
        this.j = W(this);
        this.Z = X(this, c)
    };
    _.T(Rt, Y);
    Rt.prototype.g = function() {
        var a = this;
        this.o.cookieDeprecationLabel ? ch(this.Z.value) ? this.j.La(this.o.cookieDeprecationLabel.getValue().then(function(b) {
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
    var QN = function(a, b) {
        Y.call(this, a, 1213, _.Kf(TD));
        this.j = W(this);
        b && (this.o = EH(this, b))
    };
    _.T(QN, Y);
    QN.prototype.g = function() {
        var a, b, c;
        (null == (c = null == (a = this.o) ? void 0 : null == (b = a.value) ? void 0 : b.label) ? 0 : c.match(Lf(SD))) ? this.j.G(!0): this.j.G(!1)
    };
    var RN = function(a, b) {
        Y.call(this, a, 1212, _.Kf(TD));
        this.j = W(this);
        this.o = W(this);
        b && (this.C = EH(this, b))
    };
    _.T(RN, Y);
    RN.prototype.g = function() {
        var a, b, c = null == (a = this.C) ? void 0 : null == (b = a.value) ? void 0 : b.label;
        c ? (this.o.G(!0), c.match(Lf(SD)) ? this.j.G(!0) : this.j.G(!1)) : (this.j.G(!1), this.o.G(!1))
    };
    var SN = function(a, b, c) {
        Y.call(this, a, 873);
        this.B = b;
        this.j = X(this, c)
    };
    _.T(SN, Y);
    SN.prototype.g = function() {
        var a = this.context,
            b = this.j.value,
            c = this.B;
        !wo()._pubconsole_disable_ && (b = gh("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || To(a, c))
    };
    var TN = function() {
        this.resources = {}
    };
    var Pr = "3rd party ad content";
    var UN = function(a, b, c) {
        _.V.call(this);
        this.context = a;
        this.Sa = b;
        this.l = c;
        a = c.slotId;
        b = c.size;
        this.g = "height" === c.tb ? "fluid" : [b.width, b.height];
        this.Sd = Zm(a);
        this.Td = Pr
    };
    _.T(UN, _.V);
    UN.prototype.render = function() {
        var a = this.Sa,
            b = this.l,
            c = b.slotId,
            d = b.O.T,
            e = b.size,
            f = b.Na,
            g = b.isBackfill,
            h = b.Qb;
        Qi(b.nj, _.AA(b.aa), null != f ? f : "", !1);
        Os(_.If(El), "5", Ps(d[c.getDomId()], 20));
        Qs(c, Rs, 801, {
            Qh: 0 === a.kind ? a.ub : "",
            isBackfill: g
        });
        a = this.D();
        h && a && a.setAttribute("data-google-container-id", h);
        Qs(c, Ss, 825, {
            size: e,
            isEmpty: !1
        });
        return a
    };
    UN.prototype.loaded = function(a) {
        var b = this.l,
            c = b.slotId,
            d = b.Aa;
        b = b.O.T;
        Qs(c, Eu, 844);
        a && a.setAttribute("data-load-complete", !0);
        Qs(d, "slotOnload", 710, new gN(c, "publisher_ads"));
        Os(_.If(El), "6", Ps(b[c.getDomId()], 20))
    };
    var VN = function(a) {
        a = a.Sa;
        a = 0 === a.kind ? a.ub : "";
        var b = "";
        b = void 0 === b ? "" : b;
        if (a) {
            var c = a.toLowerCase();
            a = -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") || _.E(mA) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>"
        }
        return a
    };
    UN.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.nj.removeAttribute("data-google-query-id")
    };
    UN.prototype.I = function(a) {
        var b = this,
            c = WN(this, function() {
                return void b.loaded(c.g)
            }, a);
        _.kp(this, function() {
            100 != c.status && (c.ug() && (AI(c.l), c.C = 0), window.clearTimeout(c.H), c.H = -1, c.K = 3, c.A && (c.A.za(), c.A = null), _.Zf(window, "resize", c.Da), _.Zf(window, "scroll", c.Da), c.D && c.g && c.D == _.EA(c.g) && c.D.removeChild(c.g), c.g = null, c.D = null, c.status = 100)
        });
        return c
    };
    var WN = function(a, b, c) {
        var d = a.l,
            e = d.hj,
            f = d.isBackfill,
            g = d.Qb,
            h = d.Re,
            k = d.Kf,
            l = d.Za,
            m = Array.isArray(a.g) ? new _.Mm(Number(a.g[0]), Number(a.g[1])) : 1;
        return new II({
            Rg: d.Jh,
            Sd: a.Sd,
            Td: a.Td,
            content: VN(a),
            size: m,
            Pi: b,
            ij: null != e ? e : void 0,
            permissions: {
                Pe: null != Gn(c, 1) ? !!_.Q(c, 1) : !f,
                Qe: null != Gn(c, 2) ? !!_.Q(c, 2) : !1
            },
            Ud: !!wo().fifWin,
            dm: qL ? qL : qL = wn(),
            fk: An(),
            hostpageLibraryTokens: l.hostpageLibraryTokens,
            sb: function(n, p) {
                return void Gl(a.context, n, p)
            },
            uniqueId: g,
            gj: oL(),
            Re: null != h ? h : void 0,
            vb: void 0,
            Kf: null != k ? k : void 0
        })
    };
    var XN = function() {
        UN.apply(this, arguments)
    };
    _.T(XN, UN);
    XN.prototype.D = function() {
        var a = this.l,
            b = a.O,
            c = b.ba;
        a = b.T[a.slotId.getDomId()];
        b = new Bn;
        c = Hn([b, c.vc(), null == a ? void 0 : a.vc()]);
        return UN.prototype.I.call(this, c).g
    };
    XN.prototype.j = function() {
        return !1
    };
    var fu = function(a, b, c, d, e, f) {
        Y.call(this, a, 669);
        this.ba = b;
        this.T = c;
        this.j = d;
        this.Fb = e;
        this.output = W(this);
        f && (this.o = X(this, f))
    };
    _.T(fu, Y);
    fu.prototype.g = function() {
        var a;
        if (null == (a = this.o) ? 0 : a.value) this.output.G(!0);
        else {
            var b;
            a = !(null == (b = this.j) || !_.I(b, 1)) && (_.Q(this.T, 12) || Gn(this.ba, 13)) || this.Fb;
            this.output.G(!!a)
        }
    };
    var YN = function(a, b, c, d) {
        Y.call(this, a, 833);
        this.j = b;
        this.B = c;
        this.output = CH(this);
        FH(this, d)
    };
    _.T(YN, Y);
    YN.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = oL();
        c = {
            version: qL ? qL : qL = wn(),
            Cf: c
        };
        c = PI.ml(c);
        var d = vI(b);
        c = d ? _.gb(c, new _.u.Map([
            ["n", String(d)]
        ])) : c;
        d = Mf(yn);
        for (var e = new _.u.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
        c = _.gb(c, e);
        var g;
        a.resources[c.toString()] || (null == (g = wo()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.Yf("IFRAME"), a.src = _.fb(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)));
        this.output.notify()
    };
    var ZN = function(a, b, c) {
        Y.call(this, a, 1135);
        this.o = b;
        this.C = c;
        this.j = W(this)
    };
    _.T(ZN, Y);
    ZN.prototype.g = function() {
        for (var a = new pz, b = new _.u.Map, c = new _.u.Set, d = _.y(this.o), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (_.Ci(f, 1)) {
                e = new _.u.Set;
                b.set(_.I(f, 1).toString(), e);
                f = _.y(_.bk(f, nz, 2));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = _.I(g, 1);
                    e.add(h);
                    c.has(h) || kk(a, 2, nz, g);
                    c.add(h)
                }
            }
        }
        this.C.G(b);
        this.j.G(a)
    };
    var $N = function(a, b, c) {
        Y.call(this, a, 1051);
        this.o = b;
        this.j = DH(this, c)
    };
    _.T($N, Y);
    $N.prototype.g = function() {
        var a = this;
        this.j.value && Jk(this.j.value, function(b, c) {
            Gl(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var aO = function(a, b) {
        Y.call(this, a, 1040);
        this.j = W(this);
        this.o = DH(this, b)
    };
    _.T(aO, Y);
    aO.prototype.g = function() {
        var a = this.o.value;
        a ? (a = _.bk(a, nz, 2), this.j.G(a.map(function(b) {
            var c = Ky(b, oz);
            b = _.I(b, 1);
            c = c && (_.z(c, "startsWith").call(c, location.protocol) || _.z(c, "startsWith").call(c, "data:") && 80 >= c.length) ? cb(Tj(c)) : void 0;
            return {
                He: b,
                url: c
            }
        }))) : this.j.G([])
    };
    var bO = function(a, b, c) {
        Y.call(this, a, 813);
        this.yb = c;
        this.o = DH(this, b);
        this.j = DH(this, c)
    };
    _.T(bO, Y);
    bO.prototype.g = function() {
        var a = this,
            b = this.o.value,
            c = this.j.value;
        if (null != b && b.length && c) {
            b = _.y(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = e.He;
                (e = e.url) && _.S(this, Nk(d, e, c, this.yb, function(f, g) {
                    Gl(a.context, f, g);
                    var h, k;
                    null == (k = (h = console).error) || k.call(h, g)
                }))
            }
        }
    };
    var cO = function(a, b, c) {
        Y.call(this, a, 1045);
        this.j = b;
        this.yb = c
    };
    _.T(cO, Y);
    cO.prototype.g = function() {
        var a = new ok;
        _.S(this, a);
        var b = new aO(this.context, this.j);
        J(a, b);
        b = new bO(this.context, b.j, this.yb);
        J(a, b);
        xk(a)
    };
    var Yt = function(a, b, c, d) {
        Y.call(this, a, 706);
        this.B = b;
        this.output = null != d ? d : W(this);
        this.j = X(this, c)
    };
    _.T(Yt, Y);
    Yt.prototype.g = function() {
        this.output.Ha(dh(this.j.value, this.B))
    };
    var Ur = function(a, b, c, d) {
        Y.call(this, a, 1154);
        this.kb = c;
        this.j = d;
        this.o = DH(this, b)
    };
    _.T(Ur, Y);
    Ur.prototype.g = function() {
        if (this.o.value) {
            var a = new ok;
            _.S(this, a);
            var b = new Yt(this.context, window, this.kb, this.j.yb);
            J(a, b);
            b = new ZN(this.context, this.o.value, this.j.Ig);
            J(a, b);
            J(a, new cO(this.context, b.j, this.j.yb));
            b = new $N(this.context, console, this.j.yb);
            J(a, b);
            xk(a)
        } else this.j.Ig.ca(), this.j.yb.ca()
    };
    var dO = function(a, b, c, d, e, f) {
        Y.call(this, a, 1096);
        this.B = b;
        this.Z = c;
        this.j = d;
        this.wc = e;
        this.o = DH(this, f)
    };
    _.T(dO, Y);
    dO.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : a.Rj;
        b && b(this.j, this.Z, this.B, this.wc, this.context.Ra)
    };
    var eO = function(a, b) {
        Y.call(this, a, 1095);
        this.j = b;
        this.output = W(this)
    };
    _.T(eO, Y);
    eO.prototype.g = function() {
        this.output.La(this.j.load(_.AN))
    };
    var Wr = function(a, b, c, d, e) {
        Y.call(this, a, 1090);
        this.j = b;
        this.wc = c;
        this.o = X(this, d);
        this.C = DH(this, e)
    };
    _.T(Wr, Y);
    Wr.prototype.g = function() {
        var a = this.C.value,
            b;
        if (a && null != (b = _.vm(a, _.Ez, 1)) && _.bk(b, _.Dz, 15).length) {
            b = new ok;
            _.S(this, b);
            var c = new eO(this.context, this.j);
            J(b, c);
            a = new dO(this.context, window, this.o.value, a, this.wc, c.output);
            J(b, a);
            xk(b)
        }
    };
    var Au = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1205);
        this.B = b;
        this.J = c;
        this.H = X(this, d);
        this.o = X(this, e);
        this.j = X(this, f);
        this.C = X(this, g)
    };
    _.T(Au, Y);
    Au.prototype.g = function() {
        var a = this.H.value;
        a = new a.sm(this.o.value, this.B, this.j.value, this.J, this.C.value, new _.pJ(this.context), new a.Nk(this.B));
        _.S(this, a);
        _.S(this, a.ia)
    };
    var zu = function(a, b) {
        Y.call(this, a, 1204);
        this.j = b;
        this.output = W(this)
    };
    _.T(zu, Y);
    zu.prototype.g = function() {
        this.output.La(this.j.load(_.BN))
    };
    var gt = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = Cl(a, 88, function(f, g) {
            var h;
            if (h = mo(f)) h = g, h = lo(h) || Array.isArray(h) && h.every(lo);
            if (h) {
                if (_.E(eE)) {
                    var k = Zr(g);
                    h = k.size;
                    k.Zg && (g = Vl([f, g]), g = g.substring(1, g.length - 1), O(b, new Ul(151, ["SizeMappingBuilder.addSize", g])), g = h)
                }
                d.push([f, g])
            } else e.push([f, g]), O(b, Wl("SizeMappingBuilder.addSize", [f, g]));
            return c
        });
        this.build = Cl(a, 89, function() {
            if (e.length) return O(b, bK(En(e))), null;
            pa(d);
            return d
        })
    };
    var fO = function(a, b, c, d, e, f) {
        f = void 0 === f ? Pk : f;
        Y.call(this, a, 939);
        this.o = b;
        this.B = c;
        this.Z = d;
        this.j = f;
        this.output = CH(this);
        FH(this, e)
    };
    _.T(fO, Y);
    fO.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = new Zy;
        var d = new Yy;
        d = _.cj(d, 1, String(this.o));
        c = _.di(c, 5, d);
        c = _.L(c, 4, 1);
        c = _.L(c, 2, 2);
        c = _.cj(c, 3, this.context.zb || this.context.mb);
        c = _.ul(c, 6, ch(this.Z));
        a.call(this, b, c);
        this.output.notify()
    };
    var nu = function(a, b, c, d, e) {
        Y.call(this, a, 807);
        this.B = b;
        this.Jb = c;
        this.output = CH(this);
        this.j = X(this, d);
        e && FH(this, e)
    };
    _.T(nu, Y);
    nu.prototype.g = function() {
        if (this.Jb && !this.j.value) {
            var a = fB(this.B);
            jJ(new iJ(a, this.Jb)) || this.I(new uo("Cannot create top window frame"))
        }
        this.output.notify()
    };
    var gO = function(a, b) {
        Y.call(this, a, 820);
        this.B = b;
        this.output = W(this)
    };
    _.T(gO, Y);
    gO.prototype.g = function() {
        var a = this;
        this.output.La(Tk(this.B).then(function(b) {
            var c = b.Jb,
                d = b.status;
            xp("gpt_etu", function(e) {
                Xo(e, a.context);
                Yo(e, "rsn", d)
            }, c ? void 0 : 0);
            return null != c ? c : ""
        }))
    };
    var hO = function(a, b, c, d) {
        Y.call(this, a, 979);
        this.B = b;
        this.j = DH(this, d);
        this.output = c
    };
    _.T(hO, Y);
    hO.prototype.g = function() {
        var a = this;
        if (_.E(iE)) this.output.ca();
        else {
            var b;
            Xk(this.B, null != (b = this.j.value) ? b : !1).then(function(c) {
                a.output.G(c)
            })
        }
    };
    hO.prototype.l = function() {
        this.output.ca()
    };
    var ds = function(a, b, c, d) {
        Y.call(this, a, 1156);
        this.B = b;
        this.Uf = c;
        this.j = {
            Sc: new Yp
        };
        this.o = X(this, d)
    };
    _.T(ds, Y);
    ds.prototype.g = function() {
        if (ch(this.o.value)) {
            var a = new ok;
            _.S(this, a);
            var b = new hO(this.context, this.B, this.j.Sc, this.Uf);
            J(a, b);
            xk(a)
        } else this.j.Sc.ca()
    };
    var iO = function(a, b, c) {
        Y.call(this, a, 1123);
        this.j = b;
        this.o = c;
        W(this, b);
        W(this, c)
    };
    _.T(iO, Y);
    iO.prototype.g = function() {
        _.E(gE) ? (this.j.G(!1), this.o.ca()) : (this.j.G(!0), this.o.G(10))
    };
    var jO = function(a, b, c, d, e) {
        Y.call(this, a, 978);
        this.B = b;
        this.C = c;
        this.j = e;
        W(this, e);
        this.o = DH(this, d.Sc)
    };
    _.T(jO, Y);
    jO.prototype.g = function() {
        if (_.E(hE)) this.j.ca();
        else if (this.o.value) {
            var a = dl(this.o.value, this.B, new _.pJ(this.context), this.C);
            this.j.La(a)
        } else this.j.ca()
    };
    jO.prototype.l = function() {
        this.j.ca()
    };
    var fs = function(a, b, c, d, e, f) {
        Y.call(this, a, 1164);
        this.o = b;
        this.se = c;
        this.j = e;
        this.C = X(this, d);
        f && (this.H = X(this, f))
    };
    _.T(fs, Y);
    fs.prototype.g = function() {
        var a;
        if (!nh(window.isSecureContext, window.document) || (null == (a = this.H) ? 0 : a.value)) this.j.zd.ca(), this.j.qe.G(!1), this.j.re.ca();
        else if (this.C.value) {
            a = new ok;
            _.S(this, a);
            J(a, new jO(this.context, window, this.o, this.se, this.j.zd));
            var b = new iO(this.context, this.j.qe, this.j.re);
            J(a, b);
            xk(a)
        } else this.j.zd.G(5), this.j.qe.G(!1), this.j.re.G(5)
    };
    var kO = function(a, b, c) {
        Y.call(this, a, 1101);
        this.B = b;
        this.j = c
    };
    _.T(kO, Y);
    kO.prototype.g = function() {
        if (!_.E(hE)) {
            var a = this.j,
                b = Uk(this.B);
            b.setTopicsCalled ? _.u.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }))
        }
    };
    var ru = function(a, b, c, d) {
        Y.call(this, a, 1180);
        this.B = b;
        this.Pf = c;
        this.j = DH(this, d.Sc)
    };
    _.T(ru, Y);
    ru.prototype.g = function() {
        if (this.Pf && this.j.value) {
            var a = new ok;
            _.S(this, a);
            J(a, new kO(this.context, this.B, this.j.value));
            xk(a)
        }
    };
    var os = function(a) {
        this.F = _.A(a)
    };
    _.T(os, _.D);
    var ks = function(a, b) {
        return _.Je(a, 2, _.pd(b), "0")
    };
    var lO = function(a) {
        this.F = _.A(a)
    };
    _.T(lO, _.D);
    var ns = Gf(lO);
    lO.da = [1];
    var Tt = function(a, b, c, d) {
        Y.call(this, a, 1186);
        this.L = b;
        this.B = c;
        this.output = W(this);
        this.Z = X(this, d)
    };
    _.T(Tt, Y);
    Tt.prototype.g = function() {
        if (!mh(this.B.isSecureContext, this.B.navigator, this.B.document) || _.E(Gt)) this.output.ca();
        else {
            var a = this.L.Se;
            if (null !== a) this.output.G(a);
            else {
                var b = _.Jn(new _.IG(this.B), "__gpi", this.Z.value);
                a = this.output;
                var c = a.G;
                b = _.qh(b || String(this.context.pvsid)) % 63001;
                this.L.Se = b;
                c.call(a, b)
            }
        }
    };
    var mO = function(a, b, c) {
        Y.call(this, a, 1171);
        this.j = c;
        W(this, c);
        this.Yg = X(this, b)
    };
    _.T(mO, Y);
    mO.prototype.g = function() {
        this.j.G(0 === this.Yg.value.kind)
    };
    var nO = function(a, b, c) {
        Y.call(this, a, 1160);
        this.j = c;
        W(this, c);
        this.o = X(this, b)
    };
    _.T(nO, Y);
    nO.prototype.g = function() {
        if (null != this.o.value.requestId) {
            var a = this.o.value.request;
            this.context.Ra.Gc.Qc.te.Wj.ie({
                me: a.byteLength
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
    nO.prototype.l = function() {
        this.j.G({
            kind: 1,
            reason: 4
        })
    };
    var oO = function(a, b) {
        Y.call(this, a, 1159);
        this.output = W(this);
        this.j = b
    };
    _.T(oO, Y);
    oO.prototype.g = function() {
        var a = this;
        this.output.La(this.j.getInterestGroupAdAuctionData({
            seller: "https://securepubads.g.doubleclick.net"
        }).catch(function(b) {
            a.I(b);
            return 4
        }))
    };
    oO.prototype.l = function() {
        this.output.G(4)
    };
    var ss = function(a, b, c, d, e, f) {
        Y.call(this, a, 1177);
        this.C = b;
        this.j = e;
        this.o = f;
        W(this, e);
        W(this, f);
        this.H = X(this, c);
        d && (this.J = X(this, d))
    };
    _.T(ss, Y);
    ss.prototype.g = function() {
        if (this.H.value) {
            var a;
            if (null == (a = this.J) ? 0 : a.value) this.j.G({
                kind: 1,
                reason: 6
            }), this.o.G(!1);
            else {
                a = new ok;
                _.S(this, a);
                var b = new oO(this.context, this.C);
                J(a, b);
                b = new nO(this.context, b.output, this.j);
                J(a, b);
                b = new mO(this.context, this.j, this.o);
                J(a, b);
                xk(a)
            }
        } else this.j.G({
            kind: 1,
            reason: 2
        }), this.o.G(!1)
    };
    var pO = function(a, b, c, d, e) {
        Y.call(this, a, 881);
        this.Fa = b;
        this.na = c;
        this.j = d;
        this.o = e;
        this.output = W(this)
    };
    _.T(pO, Y);
    pO.prototype.g = function() {
        if (4 === _.Kf(Ht)) {
            var a = _.vm(this.na, Zz, 23);
            if (a) {
                var b;
                if (0 !== (null == (b = this.j) ? void 0 : b.kind)) throw new TypeError("Received remote auction config despite " + (this.j ? "invalid" : "absent") + " remarketing input.");
                this.output.G({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: oi(this.na, 3, 2),
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
                g = _.E(qE),
                h = _.Kf(jE),
                k = void 0 === h ? 0 : h;
            h = !_.Q(c, 14);
            var l = {};
            var m = _.bk(c, Wz, 7);
            m = _.y(m);
            for (var n = m.next(); !n.done; n = m.next()) {
                n = n.value;
                var p = {},
                    r = void 0,
                    v = null == (r = e) ? void 0 : r.Gc.Qc.te.ek;
                r = _.I(n, 1);
                if (_.I(n, 2).length) try {
                    if (p = JSON.parse(_.I(n, 2)), 1 > 100 * _.ph()) {
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
            if (e = _.vm(c, Vz, 6)) l["https://googleads.g.doubleclick.net"] = e.toJSON(), l["https://td.doubleclick.net"] = e.toJSON();
            m = {};
            e = _.y(_.bk(c, Yz, 11));
            for (n = e.next(); !n.done; n = e.next()) n = n.value, m[_.I(n, 1)] = _.Fy(n, 2);
            n = {};
            0 !== _.Fy(c, 21) && (n["*"] = _.Fy(c, 21));
            if (0 < _.bk(c, Xz, 32).length) {
                var x = {};
                e = _.y(_.bk(c, Xz, 32));
                for (p = e.next(); !p.done; p = e.next()) p = p.value, x[_.I(p, 1)] = _.Fy(p, 2)
            }
            p = {};
            null != xm(c, 18) && (p["https://googleads.g.doubleclick.net"] = Ps(c, 18), p["https://td.doubleclick.net"] = Ps(c, 18));
            e = _.y(He(c, 24, cA));
            for (v = e.next(); !v.done; v = e.next()) r = v.value, Ps(r[1], 4) && (v = r[0], r = Ps(r[1], 4), p[v] = r);
            e = _.I(c, 1).split("/td/")[0];
            var B;
            v = null == (B = _.vm(c, aA, 5)) ? void 0 : _.ie(B);
            var C;
            null != v && null != (C = _.vm(v, $z, 5)) && _.ik(C, 2);
            x = _.z(Object, "assign").call(Object, {}, {
                seller: e,
                decisionLogicUrl: _.I(c, 1),
                trustedScoringSignalsUrl: _.I(c, 2),
                interestGroupBuyers: oi(c, 3, 2),
                sellerExperimentGroupId: Ps(c, 17),
                auctionSignals: JSON.parse(_.I(c, 4) || "{}"),
                sellerSignals: (null == v ? void 0 : v.toJSON()) || [],
                sellerTimeout: _.Fy(c, 15) || 50,
                perBuyerExperimentGroupIds: p,
                perBuyerSignals: l,
                perBuyerTimeouts: m,
                perBuyerCumulativeTimeouts: n
            }, x ? {
                perBuyerGroupLimits: x
            } : {}, h ? {
                resolveToConfig: h
            } : {});
            if (null == c ? 0 : _.Q(dA(c), 25)) x.sellerCurrency = "USD", x.perBuyerCurrencies = _.z(Object, "fromEntries").call(Object, Ge(c, 22, yd));
            _.I(c, 28) && (x.directFromSellerSignalsHeaderAdSlot = _.I(c, 28));
            f && (x.auctionNonce = f, x.additionalBids = _.u.Promise.resolve());
            g && Ge(c, 33, yd).size && (x.deprecatedRenderURLReplacements = _.z(Object, "fromEntries").call(Object, (_.H = Ge(c, 33, yd), _.z(_.H, "entries")).call(_.H)), (f = x.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (x.deprecatedRenderURLReplacements["${RENDER_DATA}"] = f));
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
            B = Ps(c, 17);
            C = new aA;
            ei(dA(c), $z, 5) && (l = new $z, m = Gy(Cy(dA(c), $z, 5), 2), l = _.Je(l, 2, dd(m), "0"), m = Gy(Cy(dA(c), $z, 5), 4), l = _.Je(l, 4, dd(m), "0"), _.di(C, 5, l));
            dA(c).getEscapedQemQueryId() && (l = dA(c).getEscapedQemQueryId(), _.cj(C, 2, l));
            _.I(dA(c), 6) && (l = _.I(dA(c), 6), _.cj(C, 6, l));
            _.Q(dA(c), 21) && _.ul(C, 21, !0);
            _.Q(dA(c), 4) && _.ul(C, 4, !0);
            _.I(dA(c), 11) && (l = _.I(dA(c), 11), _.cj(C, 11, l));
            C = C.toJSON();
            l = _.Fy(c, 15) || 50;
            if (_.Q(c, 30)) {
                if (null == d || !d.length) throw Error("top_td_without_component_auction");
            } else d = [x].concat(_.si(null != d ? d : []));
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
    pO.prototype.l = function() {
        this.output.ca()
    };
    var qO = function(a, b, c, d) {
        Y.call(this, a, 1105);
        this.adUnitPath = b;
        this.na = c;
        this.j = d
    };
    _.T(qO, Y);
    qO.prototype.g = function() {
        var a = Date.now();
        if (!_.E(xs) || qs(a)) {
            var b = oi(this.na, 3, 2),
                c = hs(this.adUnitPath);
            if (_.Q(this.na, 20)) {
                if (_.E(pE)) {
                    var d;
                    var e = (null == (d = _.vm(this.na, bA, 29)) ? void 0 : Ps(d, 2)) || 864E5
                } else e = 864E5;
                a = ys(b, a + e);
                e = (b = this.j.getItem(c)) ? _.bk(ns(b), os, 1) : [];
                var f;
                b = new lO;
                a = ls(e, a);
                a = _.pm(b, 1, a);
                b = !(null == (f = _.vm(this.na, bA, 29)) || !_.Q(f, 3));
                f = Uh(a, 2, b);
                this.j.setItem(c, cl(f))
            } else _.E(oE) && this.j.removeItem(c)
        }
    };
    Ug({
        google_signals: Ug({
            buyer_reporting_id: Xg
        })
    });
    var Cs = navigator,
        Ds = /(\$\{GDPR})/gi,
        Es = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        Fs = /(\$\{ADDTL_CONSENT})/gi,
        Gs = /(\$\{AD_WIDTH})/gi,
        Hs = /(\$\{AD_HEIGHT})/gi,
        Is = /(\$\{RENDER_DATA})/gi;
    var rO = function() {
            var a = this;
            this.promise = new _.u.Promise(function(b, c) {
                a.reject = c;
                a.resolve = b
            })
        },
        sO = function() {
            this.auctionSignals = new rO;
            this.topLevelSellerSignals = new rO;
            this.g = new rO;
            this.perBuyerSignals = new rO;
            this.perBuyerTimeouts = new rO;
            this.perBuyerCumulativeTimeouts = new rO;
            this.directFromSellerSignals = new rO;
            this.directFromSellerSignalsHeaderAdSlot = new rO;
            this.perBuyerCurrencies = new rO;
            this.resolveToConfig = new rO;
            this.deprecatedRenderURLReplacements = new rO
        },
        tO = function(a, b, c, d) {
            this.g = a;
            this.Vf = b;
            this.interestGroupBuyers = c;
            this.Gb = d
        };
    var uO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
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
        this.ra = CH(this);
        this.o = W(this);
        this.xa = DH(this, f);
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
    _.T(uO, Y);
    uO.prototype.g = function() {
        var a = Math.round(performance.now() - this.Ma.value),
            b = this.ua.value,
            c = this.xa.value,
            d = _.vm(this.na, aA, 5),
            e = _.Q(d, 10),
            f = _.Q(d, 9),
            g = "string" === typeof c || Ks(c),
            h = 3 !== c && 2 !== c && 1 !== c;
        this.j.G(g && !f);
        h && Ms(this.context, g, b, a, d);
        var k, l;
        h = null != (l = null == (k = this.fa.value.componentAuctions) ? void 0 : k.length) ? l : 0;
        Ls(this.context, c, a, b, !!this.ka, d, h, g);
        if (g)
            if (e) this.ga.deprecatedURNToURL(c, !0), this.C.G(!0), this.o.ca();
            else if (f) {
            _.Q(d, 17) ? As(0, 0, d) : this.ga.deprecatedURNToURL(c, !0);
            var m;
            Bs(this.P, this.j, this.H, this.J, this.W, null == (m = this.na) ? void 0 : _.I(m, 25));
            this.C.G(!0);
            this.o.ca()
        } else {
            this.o.G(c);
            this.C.G(!0);
            if (_.E(nE)) {
                b = this.fa.value;
                d = this.na;
                var n;
                a = 1 === (null == (n = b.componentAuctions) ? void 0 : n.length) && rs(b.componentAuctions[0].seller) && ei(d, Uz, 26) ? ey(cl(Cy(d, Uz, 26)), 3) : ""
            } else a = void 0;
            n = a;
            wH(this.ra, Js(c, _.z(Object, "assign").call(Object, {}, {
                gdprApplies: null != Gn(this.Z, 3) ? _.Q(this.Z, 3) ? "1" : "0" : null,
                Vk: dk(this.Z, 2),
                Uj: dk(this.Z, 4),
                Qj: this.na.getWidth().toString(),
                Oj: this.na.getHeight().toString()
            }, n ? {
                Zl: n
            } : {})))
        } else {
            As(a, 2 === c ? b : 0, d);
            if (!e) {
                var p;
                Bs(this.P, this.j, this.H, this.J, this.W, null == (p = this.na) ? void 0 : _.I(p, 25))
            }
            this.C.G(!0);
            this.o.ca()
        }
    };
    uO.prototype.l = function() {
        var a, b = null == (a = this.na) ? void 0 : _.vm(a, aA, 5);
        a = this.ka;
        var c = this.P,
            d = this.j,
            e = this.H,
            f = this.J,
            g = this.W;
        b && As(0, 0, b);
        null == a || a.Gb.abort();
        Bs(c, d, e, f, g)
    };
    var vO = function(a, b, c, d, e, f, g, h, k, l, m, n) {
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
        this.C = BH(this);
        this.ra = W(this);
        this.ka = W(this);
        this.ga = W(this);
        this.j = DH(this, f);
        X(this, l);
        W(this, m.Mb);
        W(this, m.Ga);
        W(this, m.Ja);
        W(this, n)
    };
    _.T(vO, Y);
    vO.prototype.g = function() {
        if (this.j.value) {
            var a = dA(this.na);
            Ns(this.context, a);
            this.ra.G(performance.now());
            var b = _.Fy(this.na, 8) || 1E3;
            this.ka.G(b);
            var c = _.Fy(a, 14) || -1,
                d = _.Fy(a, 13) || -1;
            d = 0 < d && this.L.j >= d;
            if (0 < c && this.L.l >= c || d) this.C.G(1);
            else if (++this.L.l, ++this.L.j, this.j.value.signal = AbortSignal.timeout(b), _.Q(a, 15)) --this.L.l, this.C.La(new _.u.Promise(function(e) {
                setTimeout(function() {
                    e(1)
                }, 0)
            }));
            else {
                if (this.o && this.j.value.serverResponse) throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                a = this.o ? wO(this.j.value, b, this.o) : xO(this, this.j.value);
                --this.L.l;
                this.C.La(a)
            }
        } else null == (a = this.o) || a.Gb.abort(), Bs(this.P, this.fa, this.H, this.J, this.W), this.ga.G(!1)
    };
    var xO = function(a, b) {
            var c, d;
            return null == (d = (c = a.ua).runAdAuction) ? void 0 : d.call(c, b).catch(function(e) {
                if (e instanceof DOMException && "TimeoutError" === e.name) return 2;
                _.E(lE) && e instanceof Error && a.I(e);
                return 3
            })
        },
        wO = function(a, b, c) {
            ws(a, c);
            setTimeout(function() {
                c.Gb.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, b);
            return c.g
        };
    vO.prototype.l = function() {
        var a, b = null == (a = this.na) ? void 0 : _.vm(a, aA, 5);
        a = this.o;
        var c = this.P,
            d = this.fa,
            e = this.H,
            f = this.J,
            g = this.W;
        b && As(0, 0, b);
        null == a || a.Gb.abort();
        Bs(c, d, e, f, g)
    };
    var yO = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1202);
        this.na = b;
        this.C = c;
        this.j = d;
        this.o = DH(this, f);
        this.H = X(this, e);
        FH(this, g);
        W(this, d.Mb);
        W(this, d.Ga);
        W(this, d.Ja)
    };
    _.T(yO, Y);
    yO.prototype.g = function() {
        if (this.o.value) {
            Fm(this.C) || (this.H.value.style.display = "");
            var a = this.o.value;
            var b = this.context.Ra;
            var c = _.I(this.na, 31);
            c ? Ks(a) ? (b.Gc.Qc.te.hh.sh.Ac({
                Pc: 1,
                status: "FAILED_FENCED_FRAME"
            }), b = null) : (a = c.replace("%%srcfledge%%", a), a.length === c.length && a === c ? (b.Gc.Qc.te.hh.sh.Ac({
                Pc: 1,
                status: "FAILED_UNMODIFIED"
            }), b = null) : (b.Gc.Qc.te.hh.sh.Ac({
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
            this.j.Ja.G(new _.Mm(this.na.getWidth(), this.na.getHeight()));
            this.j.Mb.G(!1)
        }
    };
    var zO = function(a, b, c) {
        Y.call(this, a, 1054);
        this.j = b;
        this.output = CH(this);
        this.o = X(this, c)
    };
    _.T(zO, Y);
    zO.prototype.g = function() {
        this.o.value || this.j();
        this.output.notify()
    };
    var AO = function(a, b, c, d, e, f) {
        Y.call(this, a, 1053);
        this.slotId = b;
        this.O = c;
        this.L = d;
        this.Na = e;
        this.j = W(this);
        this.o = X(this, f)
    };
    _.T(AO, Y);
    AO.prototype.g = function() {
        this.o.value ? (Ts(this.slotId, this.L, this.O, this.Na), this.j.G(!1)) : this.j.G(!0)
    };
    var BO = function(a, b, c, d) {
        Y.call(this, a, 1055);
        this.j = d;
        FH(this, c);
        this.o = X(this, b);
        CH(this, this.j)
    };
    _.T(BO, Y);
    BO.prototype.g = function() {
        this.o.value && this.j.notify()
    };
    var gu = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B) {
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
        this.W = DH(this, c)
    };
    _.T(gu, Y);
    gu.prototype.g = function() {
        var a = new ok;
        _.S(this, a);
        var b = W(this);
        if (this.na) {
            var c = dA(this.na),
                d = _.Q(c, 10);
            if (this.na.getWidth() && this.na.getHeight())
                if (d)
                    if (Bs({
                            Mb: b,
                            Ga: this.j.Ga,
                            Ja: this.j.Ja
                        }, this.j.fd, this.H.value, this.J.value, this.o), _.Q(c, 17)) {
                        As(0, 0, c);
                        var e;
                        null == (e = this.C) || e.Gb.abort()
                    } else CO(this, a, this.na);
            else b = CO(this, a, this.na);
            else {
                Bs({
                    Mb: b,
                    Ga: this.j.Ga,
                    Ja: this.j.Ja
                }, this.j.fd, this.H.value, this.J.value, this.o);
                As(0, 0, c);
                var f;
                null == (f = this.C) || f.Gb.abort()
            }
        } else Bs({
            Mb: b,
            Ga: this.j.Ga,
            Ja: this.j.Ja
        }, this.j.fd, this.H.value, this.J.value, this.o), null == (c = this.C) || c.Gb.abort();
        e = new AO(this.context, this.slotId, this.O, this.L, this.Na, b);
        J(a, e);
        b = new zO(this.context, this.fa, b);
        J(a, b);
        b = new BO(this.context, e.j, b.output, this.j.Jc);
        J(a, b);
        xk(a)
    };
    var CO = function(a, b, c) {
        if (2 === _.Kf(Ht) && a.W.value && _.Q(c, 20) && 0 !== oi(c, 3, 2).length) {
            var d = new qO(a.context, a.slotId.getAdUnitPath(), c, a.W.value);
            J(b, d)
        }
        var e = new pO(a.context, a.T, c, a.ka, a.ga);
        J(b, e);
        var f = navigator,
            g = {
                Ga: a.j.Ga,
                Ja: a.j.Ja,
                Mb: new Yp
            };
        d = g.Mb;
        var h = new vO(a.context, a.L, f, a.C, c, e.output, a.o, a.H.value, a.J.value, a.P, g, a.j.fd);
        J(b, h);
        e = new uO(a.context, f, a.Z, c, a.C, h.C, h.ra, h.ka, a.o, a.H.value, a.J.value, g, h.ga, a.j.fd, a.P, e.output);
        J(b, e);
        c = new yO(a.context, c, mr(a.T), g, a.P, e.o, e.ra);
        J(b, c);
        a = new Xq(a.context, a.slotId, Ss);
        J(b, a);
        return d
    };
    var DO = function() {
        UN.apply(this, arguments)
    };
    _.T(DO, UN);
    var EO = function(a, b) {
            var c = _.Yf(b ? "fencedframe" : "IFRAME");
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
        FO = function(a, b) {
            "string" !== typeof a.g && (b.width = String(a.g[0]), b.height = String(a.g[1]));
            var c = Cl(a.context, 774, function() {
                a.loaded(b);
                _.Zf(b, "load", c)
            });
            _.ob(b, "load", c);
            _.kp(a, function() {
                return _.Zf(b, "load", c)
            });
            a.l.Jh.appendChild(b)
        };
    var GO = function() {
        DO.apply(this, arguments)
    };
    _.T(GO, DO);
    GO.prototype.D = function() {
        var a = EO(this, !this.l.Km);
        if ("string" === typeof this.Sa.pe) {
            var b = this.Sa.pe;
            /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = cb(b), a.src = _.fb(b).toString())
        } else a.config = this.Sa.pe;
        FO(this, a);
        return a
    };
    GO.prototype.j = function() {
        return !1
    };
    var HO = navigator,
        IO = function(a, b, c, d, e, f, g) {
            Y.call(this, a, 1089);
            this.Wb = b;
            this.X = c;
            this.T = d;
            this.j = f;
            this.o = g;
            W(this, g);
            e && (this.C = DH(this, e))
        };
    _.T(IO, Y);
    IO.prototype.g = function() {
        var a = {};
        if (1 === this.Wb)
            for (var b = _.y(this.X), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = this.T[c.getDomId()];
                a[c.getId()] = JO(this, d, ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"], this.j)
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
                    null != (f = e) && f.length && (f = this.T[d.getDomId()], a[d.getId()] = JO(this, f, e, this.j))
                }
            }
        this.o.G(a)
    };
    var JO = function(a, b, c, d) {
        var e = new sO,
            f = new AbortController;
        b = vs({
            Vf: e,
            Gb: f,
            interestGroupBuyers: c,
            Hh: Bo(a.context, b),
            Yk: d,
            Sl: _.E(qE)
        });
        b = HO.runAdAuction(b).catch(function(g) {
            if (g instanceof DOMException && "TimeoutError" === g.name) return 2;
            _.E(lE) && g instanceof Error && a.I(g);
            return 3
        });
        return new tO(b, e, c, f)
    };
    var KO = function(a, b, c, d, e, f, g) {
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
    _.T(KO, Y);
    KO.prototype.g = function() {
        for (var a = ps(this.o, this.H, this.Z, this.C), b = new _.u.Map, c = Vs(a), d = new _.u.Map, e = _.y(this.X), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            f = g.getAdUnitPath();
            var h = a.get(hs(f)),
                k = void 0,
                l = void 0,
                m = void 0,
                n = null != (m = null != (l = c) ? l : null == (k = h) ? void 0 : _.bk(k, os, 1).map(function(p) {
                    return _.I(p, 1)
                })) ? m : [];
            b.set(g.getId(), n);
            if (!d.has(f)) {
                g = [];
                n = _.y(n.sort());
                for (h = n.next(); !h.done; h = n.next()) g.push(_.qh(h.value));
                d.set(f, g)
            }
        }
        this.j.G(b);
        this.J.G(d)
    };
    var Ws = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 1170);
        this.Wb = b;
        this.T = c;
        this.Z = d;
        this.o = e;
        this.C = Date.now();
        this.j = {
            Qg: W(this)
        };
        2 === b && this.o && (this.j.rg = W(this));
        this.P = X(this, f);
        this.J = X(this, g);
        h && (this.H = DH(this, h));
        k && (this.W = X(this, k))
    };
    _.T(Ws, Y);
    Ws.prototype.g = function() {
        var a = this.P.value,
            b;
        if (!this.J.value || !a.length || (null == (b = this.W) ? 0 : b.value) || _.E(xs) && !qs(this.C)) {
            this.j.Qg.ca();
            var c;
            null == (c = this.j.rg) || c.ca()
        } else {
            b = new ok;
            _.S(this, b);
            if (2 === this.Wb && this.o) {
                var d, e;
                var f = new KO(this.context, this.Z, this.o, this.C, a, null != (e = null == (d = this.H) ? void 0 : d.value) ? e : void 0, this.j.rg);
                J(b, f);
                f = f.j
            }
            var g, h;
            a = new IO(this.context, this.Wb, a, this.T, f, null != (h = null == (g = this.H) ? void 0 : g.value) ? h : void 0, this.j.Qg);
            J(b, a);
            xk(b)
        }
    };
    var LO = function(a, b, c) {
        Y.call(this, a, 1216);
        this.j = b;
        this.output = BH(this);
        this.o = X(this, c)
    };
    _.T(LO, Y);
    LO.prototype.g = function() {
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
    var MO = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 1166);
        this.fa = b;
        this.aa = c;
        this.H = d;
        this.j = BH(this);
        this.o = W(this);
        this.C = W(this);
        this.P = X(this, e);
        this.W = X(this, f);
        FH(this, g);
        this.J = X(this, h)
    };
    _.T(MO, Y);
    MO.prototype.g = function() {
        var a = this,
            b = this.P.value;
        if (b) {
            var c = bx(this.W.value, {
                    uuid: this.fa
                }),
                d = this.aa.createElement("script");
            b = {
                source: b,
                credentials: this.J.value ? "include" : "omit",
                resources: [c.toString()]
            };
            d.setAttribute("type", "webbundle");
            mb(d, ab(JSON.stringify(b).replace(/</g, "\\u003C")));
            this.aa.head.appendChild(d);
            this.o.G(d);
            this.C.G(b);
            this.j.La(NO(c).catch(function(e) {
                e instanceof BG ? a.H(e) : (a.I(e), a.l(e));
                return null
            }))
        } else this.j.ca(), this.o.ca(), this.C.ca()
    };
    var NO = function(a) {
        var b, c;
        return _.qb(function(d) {
            if (1 == d.g) return d.yield(fetch(a.toString()).catch(function() {
                throw new BG("Failed to fetch bundle index.");
            }), 2);
            if (3 != d.g) return b = d.A, d.yield(b.text(), 3);
            c = d.A;
            return d.return(gA(c))
        })
    };
    var OO = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, a, 1167);
        this.aa = b;
        this.Z = c;
        this.H = d;
        this.j = e;
        this.C = f;
        this.o = X(this, g);
        this.P = DH(this, h);
        this.W = DH(this, k);
        this.fa = DH(this, l);
        m && (this.J = DH(this, m))
    };
    _.T(OO, Y);
    OO.prototype.g = function() {
        var a = this.P.value,
            b = this.W.value,
            c = this.fa.value;
        if (a)
            if (b && c) {
                var d = oi(a, 1, 2),
                    e = oi(a, 2, 2);
                a = oi(a, 3, 2);
                if (d.length !== e.length) this.j(new AG("Received " + d.length + " ad URLs but " + e.length + " metadatas"));
                else {
                    c.resources = [].concat(_.si(d.filter(function(f) {
                        return f
                    })), _.si(a.map(function(f) {
                        return "https://securepubads.g.doubleclick.net" + f
                    })));
                    c.resources.length ? (a = _.Yf("SCRIPT"), a.setAttribute("type", "webbundle"), mb(a, ab(JSON.stringify(c).replace(/</g, "\\u003C"))), this.aa.head.removeChild(b), this.aa.head.appendChild(a)) : this.aa.head.removeChild(b);
                    for (b = 0; b < d.length; b++) c = void 0, this.H(b, e[b], {
                        kind: 1,
                        url: d[b]
                    }, this.o.value, this.Z, null == (c = this.J) ? void 0 : c.value, void 0, void 0);
                    this.C(d.length - 1, this.o.value, this.Z)
                }
            } else this.j(Error("Lost bundle script"))
    };
    var PO = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        ok.call(this);
        e = new MO(a, f, h, c, m, n, p, r);
        J(this, e);
        J(this, new OO(a, h, g, b, c, d, k, e.j, e.o, e.C, l));
        this.g = {
            output: e.j
        }
    };
    _.T(PO, ok);
    var ht = new _.u.Set,
        QO = function(a, b, c) {
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
        RO = function(a, b, c) {
            _.V.call(this);
            this.context = a;
            this.R = b;
            this.l = c;
            this.g = [];
            this.enabled = !1;
            this.K = 0;
            this.D = new _.u.Map;
            ht.add(this);
            this.R.info(cK(this.getName()))
        };
    _.T(RO, _.V);
    var kt = function(a) {
        a.enabled || (a.enabled = !0, In(6, a.context), a.o())
    };
    RO.prototype.slotAdded = function(a, b) {
        this.g.push(a);
        var c = new hN(a, this.getName());
        Qs(this.l, "slotAdded", 818, c);
        this.R.info(dK(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        My(b, 4, a)
    };
    RO.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ea(b.g, c)
        })
    };
    RO.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.K >= _.Kf(vD) && 0 < _.Kf(vD)) return QO(), !1;
        if (!c.IntersectionObserver && (_.H = ["impressionViewable", "slotVisibilityChanged"], _.z(_.H, "includes")).call(_.H, a)) return O(this.R, SK()), !1;
        var e;
        if (null == (e = this.D.get(a)) ? 0 : e.has(b)) return !1;
        this.D.has(a) || this.D.set(a, new _.u.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (k) {
                d.R.error(sK(String(k), a));
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            }
        };
        this.D.get(a).set(b, c);
        this.l.listen(a, c);
        this.K++;
        return !0
    };
    RO.prototype.removeEventListener = function(a, b) {
        var c, d = null == (c = this.D.get(a)) ? void 0 : c.get(b);
        if (!d || !sJ(this.l, a, d)) return !1;
        this.K--;
        return this.D.get(a).delete(b)
    };
    var $s = function(a) {
        for (var b = _.y(ht), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var dt = function(a, b, c, d) {
        RO.call(this, a, b, d);
        this.j = c;
        this.ads = new _.u.Map;
        this.Kc = !1
    };
    _.T(dt, RO);
    dt.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.Kc = a)
    };
    var eL = function(a, b) {
            var c;
            return a.j.enabled && !(null == (c = a.ads.get(b)) || !c.Kl)
        },
        fL = function(a, b, c, d) {
            b = new dN(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            Qs(a.l, "slotRenderEnded", 67, b)
        };
    dt.prototype.getName = function() {
        return "companion_ads"
    };
    dt.prototype.slotAdded = function(a, b) {
        var c = this;
        a.listen(vJ, function(d) {
            Gn(d.detail, 11) && (SO(c, a).Kl = !0)
        });
        RO.prototype.slotAdded.call(this, a, b)
    };
    dt.prototype.o = function() {};
    var SO = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.kp(b, function() {
                return a.ads.delete(b)
            }));
            return c
        },
        cL = function(a, b) {
            var c = bn().g,
                d = bn().A;
            if (a.j.enabled) {
                var e = {
                    Zb: 3
                };
                a.I && (e.Bd = a.I);
                a.C && (e.Cd = a.C);
                b = null != b ? b : a.g;
                c = Pm(c, d);
                d = e.Bd;
                var f = e.Cd;
                d && "number" !== typeof d || f && "number" !== typeof f || a.j.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.R.error(jK(b[0].getDomId()))
        },
        dL = function(a, b) {
            return a.g.filter(function(c) {
                return _.z(b, "includes").call(b, c.toString())
            })
        };
    var et = function(a, b, c) {
        RO.call(this, a, b, c)
    };
    _.T(et, RO);
    et.prototype.getName = function() {
        return "content"
    };
    et.prototype.o = function() {};
    var Zv = function(a, b) {
        this.configuration = jr();
        this.Ba = a;
        this.g = b
    };
    Zv.prototype.log = function(a, b, c) {
        var d, e = null != (d = c.Mc) ? d : this.configuration[a].Th;
        0 === e || 1 / e < this.g || (b = b(_.z(Object, "assign").call(Object, {}, {
            Mc: e
        }, c)), this.configuration[a].send(this.Ba, b))
    };
    var TO = _.iw(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        UO = _.iw(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        VO = _.iw(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        WO = _.iw(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        XO = new _.u.Map([
            [2, {
                Gg: "page_level_ads"
            }],
            [5, {
                Gg: "shoppit"
            }],
            [6, {
                Gg: "side_rails"
            }]
        ]),
        YO = function(a) {
            var b = void 0 === b ? XO : b;
            this.context = a;
            this.g = b;
            this.A = new _.u.Map;
            this.loaded = new _.u.Set
        },
        $O;
    YO.prototype.load = function(a) {
        var b = _.ZO(this, a),
            c, d = (null != (c = this.g.get(a.module)) ? c : {}).Gg;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            d = (c = _.um(172)) && "pagead2.googlesyndication.com" === KA((c.src || "").match(_.JA)[3] || null) ? this.context.zb ? _.eb(VO, this.context.zb, d) : _.eb(WO, d, this.context.mb) : this.context.zb ? _.eb(TO, this.context.zb, d) : _.eb(UO, d, this.context.mb);
            c = {};
            var e = _.Kf(YD);
            e && (c.cb = e);
            d = _.z(Object, "keys").call(Object, c).length ? _.Zw(d, c) : d;
            $O(this, a);
            _.ap(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.ZO = function(a, b) {
        b = b.module;
        a.A.has(b) || a.A.set(b, new _.Jh);
        return a.A.get(b)
    };
    $O = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = Cl(a.context, 340, function(e) {
            if (a.g.has(c) && "function" === typeof e) {
                var f = a.g.get(c);
                f = (void 0 === f.xk ? [] : f.xk).map(function(g) {
                    return _.ZO(a, g).promise
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
    var Mt = function(a, b) {
        Y.call(this, a, 980);
        this.output = new Kr;
        this.j = [];
        this.o = X(this, b)
    };
    _.T(Mt, Y);
    Mt.prototype.g = function() {
        for (var a = _.y((_.H = [this.o.value, this.j.map(function(c) {
                return c.value
            })], _.z(_.H, "flat")).call(_.H)), b = a.next(); !b.done; b = a.next()) jh(b.value);
        this.output.notify()
    };
    var tt = function(a, b) {
        Y.call(this, a, 892, _.Kf(RD));
        this.Tc = W(this);
        this.cd = W(this);
        this.Xc = W(this);
        this.Lb = W(this);
        this.rd = W(this);
        this.vd = W(this);
        this.hc = W(this);
        this.j = EH(this, b);
        this.Kb = W(this)
    };
    _.T(tt, Y);
    tt.prototype.g = function() {
        var a = this.j.value;
        if (!a) throw Error("config timeout");
        this.Tc.Ha(_.vm(a, tz, 3));
        this.cd.Ha(_.vm(a, vz, 2));
        var b = this.Xc,
            c = b.G;
        var d = ue(a, 4, Wc, 2);
        c.call(b, d);
        b = this.Lb;
        c = b.Ha;
        d = _.bk(a, pz, 6);
        c.call(b, d);
        b = this.rd;
        c = b.Ha;
        d = _.bk(a, sv, 5);
        c.call(b, d);
        this.vd.Ha(_.vm(a, Fz, 7));
        var e;
        b = this.hc;
        c = b.G;
        d = _.u.Set;
        var f;
        null == (e = _.vm(a, qz, 1)) ? f = void 0 : f = oi(e, 6, 2);
        c.call(b, new d(f || []));
        this.Kb.Ha(_.vm(a, Hz, 8))
    };
    tt.prototype.K = function(a) {
        this.l(a)
    };
    tt.prototype.l = function(a) {
        this.Tc.ib(a);
        this.cd.ib(a);
        this.Xc.G([]);
        this.Lb.G([]);
        this.rd.G([]);
        this.vd.ca();
        this.Kb.ca()
    };
    var st = function(a, b) {
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
    _.T(st, Y);
    st.prototype.g = function() {
        if (this.error) throw this.error;
        this.j.G(Se(Iz, this.o.value))
    };
    var aP = function(a, b) {
        Y.call(this, a, 1081);
        this.Bb = W(this);
        this.j = DH(this, b)
    };
    _.T(aP, Y);
    aP.prototype.g = function() {
        this.j.value ? this.Bb.G(this.j.value) : this.Bb.ca()
    };
    var bP = new _.u.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        cP = function(a, b, c, d, e, f, g, h, k) {
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
    _.T(cP, Y);
    cP.prototype.g = function() {
        var a = this,
            b = this.o.getAdUnitPath(),
            c = bP.get(_.eg(this.o, 2, 0));
        if (b && c) {
            var d, e = null != (d = this.ba) ? d : this.j.g;
            b = new LM(this.context, this.aa, b, c, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, e, this.j, this.H, this.R, !1, this.C);
            _.S(this, b);
            xk(b)
        }
    };
    var Lt = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1082);
        this.googletag = b;
        this.ba = c;
        this.H = d;
        this.o = e;
        this.R = f;
        this.C = W(this);
        this.j = new aP(this.context, this.C);
        this.Bb = this.j.Bb;
        _.S(this, this.j);
        this.J = X(this, g)
    };
    _.T(Lt, Y);
    Lt.prototype.g = function() {
        if (_.E(WD)) {
            for (var a = [], b = _.y(this.J.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, fl(c, Gz)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
            }
            this.C.Ha(null == d ? void 0 : _.vm(d, Az, 4));
            d = new ok;
            _.S(this, d);
            a = _.y(a);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, J(d, new cP(this.context, document, this.googletag, null != (c = this.ba) ? c : this.o.g, this.H, this.o, this.R, _.vm(b, Cz, il(b, Gz, 5)), _.vm(b, Az, 4)));
            J(d, this.j);
            xk(d)
        } else this.Bb.ca()
    };
    var Ut = function(a, b, c, d, e, f, g, h) {
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
    _.T(Ut, _.V);
    var Yv = function(a) {
        JH.call(this, function(b, c) {
            Gl(a, b, c);
            var d;
            null == (d = console) || d.error(c)
        })
    };
    _.T(Yv, JH);
    var dP = function() {
        DO.apply(this, arguments)
    };
    _.T(dP, DO);
    dP.prototype.D = function() {
        var a = this,
            b = this.l,
            c = b.hj;
        b = b.Re;
        var d = EO(this);
        if (null == c ? 0 : c.length)
            if (_.Ox) {
                c = _.y(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.si(c));
        b && (d.allow = b);
        FO(this, d);
        Il(this.context, 653, function() {
            var f;
            if (f = Vj(a.Sa.ub)) {
                var g = f.toString().toLowerCase();
                f = -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") || _.E(lF) ? f : Vj("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>")
            }
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ia() && g.open("text/html", "replace");
            g.write(_.xx(f));
            var l, m, n;
            if (hx(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    dP.prototype.j = function() {
        return !0
    };
    var su = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R, K, Z) {
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
        this.o = CH(this);
        this.J = X(this, p);
        this.ka = X(this, r);
        FH(this, v);
        this.W = X(this, w);
        this.H = X(this, x);
        this.P = X(this, B);
        FH(this, F);
        this.ra = DH(this, C);
        FH(this, G);
        this.ga = X(this, P);
        FH(this, R);
        Z && FH(this, Z);
        K && (this.fa = DH(this, K))
    };
    _.T(su, Y);
    su.prototype.g = function() {
        var a = this.J.value;
        if (0 === a.kind && null == a.ub) throw new AG("invalid html");
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
                    nj: this.W.value,
                    Jh: this.H.value,
                    Na: this.Na,
                    tb: this.tb,
                    hj: this.ra.value,
                    isBackfill: this.isBackfill,
                    Qb: this.Qb,
                    Re: this.ga.value,
                    Km: null == (b = this.na) ? void 0 : _.Q(b, 14),
                    Kf: null == (c = this.fa) ? void 0 : c.value,
                    Za: this.Za
                };b = this.ka.value;c = a.kind;
            switch (c) {
                case 0:
                    a = new(b ? XN : dP)(d, a, e);
                    break a;
                case 2:
                    a = new GO(d, a, e);
                    break a;
                default:
                    kb(c)
            }
            a = void 0
        }
        _.S(this, a);
        d = a.render();
        eP(this, this.B, d);
        this.B.top && this.B.top !== this.B && _.Sk(this.B.top) && eP(this, this.B.top, d);
        this.o.notify();
        this.j.G(d);
        this.C.G(a.j())
    };
    var eP = function(a, b, c) {
        lp(a, a.id, b, "message", function(d) {
            c.contentWindow === d.source && Qs(a.slotId, Yq, 824, d)
        })
    };
    var Zt = function(a, b, c, d, e) {
        Y.call(this, a, 720);
        this.format = b;
        this.sa = c;
        this.eb = d;
        this.height = e;
        this.output = W(this)
    };
    _.T(Zt, Y);
    Zt.prototype.g = function() {
        if (null == this.height) this.output.ca();
        else {
            var a = Math.round(.3 * this.sa),
                b;
            2 !== this.format && 3 !== this.format || null == (b = this.eb) || !_.Q(b, 12, !1) || 0 >= a || this.height <= a ? this.output.G(this.height) : this.output.G(a)
        }
    };
    var hu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
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
        this.C = DH(this, l);
        n && FH(this, n)
    };
    _.T(hu, Y);
    hu.prototype.g = function() {
        var a = fq(this.ba, this.o),
            b = Sm(this.slotId, this.aa) || Ip(this.j.value, $m(this.slotId), a);
        this.H.value && !a && (b.style.display = "inline-block");
        this.J ? EJ(this.L, this.slotId, function() {
            return void _.DA(b)
        }) : _.kp(this, function() {
            return void _.DA(b)
        });
        a = fP(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.output.G(b)
    };
    var fP = function(a) {
        var b = a.j.value,
            c, d = null == (c = a.C.value) ? void 0 : c.height;
        if (b && !a.tb && d) {
            var e;
            c = (null != (e = eq(a.o, 23)) ? e : _.Q(a.ba, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var Xt = function(a, b) {
        Y.call(this, a, 859);
        this.B = b;
        this.output = W(this)
    };
    _.T(Xt, Y);
    Xt.prototype.g = function() {
        this.output.G(!_.Sk(this.B.top))
    };
    var ou = function(a, b, c) {
        Y.call(this, a, 840);
        this.format = b;
        this.aa = c;
        this.output = W(this)
    };
    _.T(ou, Y);
    ou.prototype.g = function() {
        var a = [],
            b = this.aa;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (_.H = c.features(), _.z(_.H, "includes")).call(_.H, "attribution-reporting") && a.push("attribution-reporting");
        switch (this.format) {
            case 5:
            case 4:
                _.E(hD) && a.push("autoplay");
                break;
            case 7:
                _.E(iD) && a.push("autoplay")
        }
        a.length ? this.output.G(a.join(";")) : this.output.G("")
    };
    var Gu = function(a, b, c, d) {
        Y.call(this, a, 1207);
        this.Aa = c;
        this.slotId = d;
        FH(this, b)
    };
    _.T(Gu, Y);
    Gu.prototype.g = function() {
        Qs(this.Aa, "impressionViewable", 715, new eN(this.slotId, "publisher_ads"))
    };
    var Fu = function(a, b, c, d) {
        vN.call(this, a, b, c);
        FH(this, d)
    };
    _.T(Fu, vN);
    var Bu = function(a, b, c, d, e, f) {
        f = void 0 === f ? Wt : f;
        Y.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.aa = d;
        this.Aa = e;
        this.C = f;
        this.j = this.o = -1;
        this.J = _.Ix(function() {
            Qs(g.Aa, "slotVisibilityChanged", 716, new fN(g.slotId, "publisher_ads", g.j))
        }, 200);
        this.H = X(this, c);
        var h = new Kr;
        tJ(this.slotId).then(function() {
            return void h.notify()
        });
        FH(this, h)
    };
    _.T(Bu, Y);
    Bu.prototype.g = function() {
        var a = this,
            b = this.C(Cl(this.context, this.id, function(c) {
                c = _.y(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.z(Number, "isFinite").call(Number, a.o) && gP(a)
            }));
        b && (b.observe(this.H.value), lp(this, this.id, this.aa, "visibilitychange", function() {
            gP(a)
        }), _.kp(this, function() {
            b.disconnect()
        }))
    };
    var gP = function(a) {
        var b = Math.floor(aH(a.aa) ? 0 : a.o);
        if (0 > b || 100 < b || b === a.j ? 0 : -1 !== a.j || 0 !== b) a.j = b, a.J()
    };
    var mu = function(a, b, c, d, e, f) {
        Y.call(this, a, 719);
        this.ba = b;
        this.o = c;
        this.qh = d;
        this.output = W(this);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(mu, Y);
    mu.prototype.g = function() {
        var a = this.j.value.kind;
        switch (a) {
            case 0:
                this.j.value.ub ? this.C.value ? (a = new Bn, a = Uh(a, 3, this.qh), _.Q(Hn([a, this.ba.vc(), this.o.vc()]), 3) ? this.output.G(NI) : this.output.ca()) : this.output.ca() : this.output.ca();
                break;
            case 2:
                this.output.ca();
                break;
            default:
                kb(a)
        }
    };
    var hP = function(a, b, c, d, e, f) {
        Y.call(this, a, 1119);
        this.slotId = b;
        this.o = c;
        this.documentElement = d;
        this.L = e;
        this.j = f;
        this.output = W(this)
    };
    _.T(hP, Y);
    hP.prototype.g = function() {
        var a = _.Yf("INS");
        a.id = this.o;
        Fm(this.j) && _.qp(a, {
            display: "none"
        });
        this.documentElement.appendChild(a);
        var b = function() {
            return void _.DA(a)
        };
        (_.H = [2, 3], _.z(_.H, "includes")).call(_.H, this.j) ? EJ(this.L, this.slotId, b) : _.kp(this, b);
        this.output.G(a)
    };
    var iP = function(a, b, c, d, e) {
        Y.call(this, a, 1120);
        this.J = b;
        this.C = c;
        this.o = d;
        this.j = e;
        this.output = W(this);
        a = this.j;
        if (!_.ja(a) || !_.ja(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) this.H = X(this, this.j)
    };
    _.T(iP, Y);
    iP.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.H) ? void 0 : a.value) ? b : this.j;
        if (!(_.H = [2, 3], _.z(_.H, "includes")).call(_.H, this.C)) {
            a = _.y(_.z(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, 1 === b.nodeType && b.id !== this.J && _.DA(b);
            this.o || (c.style.display = "")
        }
        this.output.G(c)
    };
    var $t = function(a, b, c, d, e, f, g, h, k) {
        ok.call(this);
        c ? (a = new iP(a, e, g, k, c), J(this, a), a = a.output) : Em(g) ? (a = new hP(a, b, d, f, h, g), J(this, a), a = a.output) : (b = new or(a, b, uJ, function(l) {
            return l.detail
        }), J(this, b), a = new iP(a, e, g, k, b.output), J(this, a), a = a.output);
        this.output = a
    };
    _.T($t, ok);
    var jP = function(a, b) {
            var c = bn();
            this.context = a;
            this.L = b;
            this.g = c
        },
        kP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x) {
            var B = document,
                C = window;
            e || f || MJ(a.L, d);
            var F = Lu(a.context, b, a.g, c, d, e, f, g, h, k, l, B, m, n, p, r, v, function() {
                MJ(a.L, d);
                LJ(a.L, d, F)
            }, w, x);
            f || LJ(a.L, d, F);
            _.kp(d, function() {
                MJ(a.L, d)
            });
            C.top !== C && C.addEventListener("pagehide", function(G) {
                G.persisted || MJ(a.L, d)
            });
            xk(F)
        };
    var lP = function(a, b, c, d) {
        Y.call(this, a, 884);
        this.Ea = b;
        this.fb = c;
        this.o = W(this);
        this.j = X(this, d)
    };
    _.T(lP, Y);
    lP.prototype.g = function() {
        YL(this.fb, _.Jn(this.Ea, "__gads", this.j.value));
        Ln(20, this.context, this.Ea, this.j.value);
        Ln(2, this.context, this.Ea, this.j.value);
        this.o.G(kh())
    };
    var Nu = 0,
        mP = new _.Im(-9, -9);
    var Ru = new _.u.Set([function(a, b) {
        var c = a.ma.O.ba;
        b.set("pvsid", {
            value: a.oa.context.pvsid
        }).set("correlator", {
            value: is(c, 26)
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
            value: e ? dk(c, 23) : null
        }).set("vid", {
            value: e ? dk(c, 22) : null
        }).set("pod", {
            value: d
        }).set("ppos", {
            value: a
        });
        a = b.set;
        c = Dy(c, 29);
        a.call(b, "scor", {
            value: null == c ? void 0 : c
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.X,
            e = c.O.T;
        c = a.Vg;
        var f = c.Zk,
            g = c.Tk;
        b.set("eid", {
            value: a.oa.ig
        }).set("debug_experiment_id", {
            value: eC().split(",")
        }).set("expflags", {
            value: _.um(253) ? Lf(xD) || null : null
        }).set("pied", {
            value: function() {
                var h = new NH,
                    k = !1,
                    l = !1;
                f && (k = !0, kk(h, 1, Az, f));
                var m = d.map(function(p) {
                    var r = new LH,
                        v, w;
                    null == (v = e[p.getDomId()]) ? w = void 0 : w = _.bk(v, Az, 27);
                    p = w;
                    if (null == p || !p.length) return r;
                    l = k = !0;
                    p = _.y(p);
                    for (v = p.next(); !v.done; v = p.next()) kk(r, 1, Az, v.value);
                    return r
                });
                l && _.pm(h, 2, m);
                m = _.y(null != g ? g : []);
                for (var n = m.next(); !n.done; n = m.next()) kk(h, 1, Az, n.value), k = !0;
                return k ? Hb(h.g(), 3) : null
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
        a = Xu(a.ma.O.ba) || new gL;
        var d = _.eg(a, 6, 2);
        b = b.set("rdp", {
            value: _.Q(a, 1) ? "1" : null
        }).set("ltd", {
            value: _.Q(a, 9) ? "1" : null
        }).set("ltd_cs", {
            value: _.E(qD) && _.um(221) && null == Gn(c, 3) ? "1" : null
        }).set("gdpr_consent", {
            value: kv(c, 2)
        }).set("gdpr", {
            value: null != Gn(c, 3) ? _.Q(c, 3) ? "1" : "0" : null,
            options: {
                Ia: !0
            }
        }).set("addtl_consent", {
            value: kv(c, 4)
        }).set("tcfe", {
            value: Ly(c, 7)
        }).set("us_privacy", {
            value: kv(c, 1)
        }).set("npa", {
            value: _.Q(c, 6) || _.Q(a, 8) ? 1 : null
        }).set("puo", {
            value: _.E(VD) && _.Q(a, 13) ? 1 : null
        }).set("tfua", {
            value: 2 !== d ? d : null,
            options: {
                Ia: !0
            }
        }).set("tfcd", {
            value: null != _.Uc(_.ai(a, 5)) ? _.eg(a, 5, 0) : null,
            options: {
                Ia: !0
            }
        }).set("trt", {
            value: null != _.Uc(_.ai(a, 10)) ? _.eg(a, 10, 0) : null,
            options: {
                Ia: !0
            }
        }).set("tad", {
            value: _.E(Qu) && null != Gn(c, 8) ? _.Q(c, 8) ? "1" : "0" : null,
            options: {
                Ia: !0
            }
        }).set("gpp", {
            value: kv(c, 11)
        });
        a = b.set;
        c = Ey(c, 10);
        a.call(b, "gpp_sid", {
            value: c.join(",") || void 0
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.O,
            e = c.X,
            f = c.tg,
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
                    m = mB(Nf(m)) || m;
                    m.google_unique_id = (m.google_unique_id || 0) + n
                }
                return l
            }()
        }).set("didk", {
            value: _.E(bE) ? Xp(e, function(l) {
                return _.qh(l.getDomId())
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
            value: qL ? qL : qL = wn()
        }).set("fsfs", {
            value: Xp(a, function(f) {
                f = e[f.getDomId()];
                var g;
                return Number(null != (g = null == f ? void 0 : eq(f, 12)) ? g : Gn(d, 13))
            }),
            options: {
                Ta: ",",
                Ld: 0,
                ed: !0
            }
        }).set("fsbs", {
            value: Xp(a, function(f) {
                f = e[f.getDomId()].vc();
                var g = d.vc(),
                    h;
                return (null != (h = null == f ? void 0 : eq(f, 3)) ? h : null == g ? 0 : _.Q(g, 3)) ? 1 : 0
            }),
            options: {
                Ld: 0,
                ed: !0
            }
        })
    }, function(a, b) {
        var c = a.oa.L;
        a = a.ma;
        var d = a.tg;
        b.set("rcs", {
            value: Xp(a.X, function(e) {
                if (!d) {
                    var f = c.g.get(e);
                    f && f.dj++
                }
                return KJ(c, e)
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
            return dh(n, p)
        } : c;
        a = e.map(function(n) {
            return f[n.getDomId()]
        });
        var k, l, m;
        b.set("ists", {
            value: Vp(a, nr) || null
        }).set("fas", {
            value: Xp(a, function(n) {
                return oq(mr(n))
            }),
            options: {
                Ld: 0,
                ed: !0
            }
        }).set("itsi", {
            value: e.some(function(n) {
                var p;
                return !IM(n) && 5 === (null == (p = f[n.getDomId()]) ? void 0 : mr(p))
            }) ? function() {
                var n = c(g, h);
                if (!n) return 1;
                var p;
                n = Math.max.apply(Math, _.si(null != (p = _.dI(n, 604800)) ? p : []));
                return isFinite(n) ? Math.floor(Math.max((Date.now() - n) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: Vp(a, function(n) {
                return 5 === mr(n) && _.E(_.ED)
            }) || null
        }).set("ifs", {
            value: null != (m = null == (k = (_.H = _.z(Object, "values").call(Object, f), _.z(_.H, "find")).call(_.H, function(n) {
                return ei(n, GL, 29)
            })) ? void 0 : null == (l = _.vm(k, GL, 29)) ? void 0 : cl(l)) ? m : null
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.O.T;
        a = a.X.map(function(d) {
            return c[d.getDomId()]
        });
        b.set("rbvs", {
            value: Vp(a, function(d) {
                return 4 === mr(d)
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
            l = new yp;
        l.set(0, 1 !== c);
        k = k[f[0].getDomId()];
        l.set(1, !!_.Q(k, 17));
        l.set(2, Pq(f, g));
        l.set(3, _.Q(h, 27) || !1);
        l.set(4, 3 === c);
        f = Ap(l);
        e.call(b, "eri", {
            value: f
        }).set("gct", {
            value: Kq("google_preview", d)
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
        var f = Mq(a.ma.O.ba.Pa()),
            g = _.Jn(c, "__gads", e);
        a = "1" === _.Jn(c, "__gpi_opt_out", e) ? "1" : null;
        b = b.set("cookie", {
            value: g,
            options: {
                Ia: !0
            }
        }).set("cookie_enabled", {
            value: !g && JG(c, e) ? "1" : null
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
            value: _.Sk(a.top) || ev(a.IntersectionObserver) ? 1 : null
        })
    }, function(a, b) {
        var c = a.oa.B;
        a = Mq(a.ma.O.ba.Pa());
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
        e = Bm(!0, a);
        for (var g = d.ba, h = a.document, k = d.T, l = [], m = [], n = _.y(c), p = n.next(); !p.done; p = n.next()) {
            p = p.value;
            var r = k[p.getDomId()];
            p = Ym(p, r, h, fq(g, r));
            if (_.E($D)) r = void 0, p = null != (r = p) ? r : mP, l.push(Math.round(p.x)), m.push(Math.round(p.y));
            else {
                r = void 0;
                var v = f ? null != (r = p) ? r : mP : p;
                v && (l.push(Math.round(v.x)), m.push(Math.round(v.y)))
            }
        }
        e && (d.Dd = e);
        f = Zg(a) ? null : Bm(!1, a);
        try {
            var w = a.top;
            var x = Mu(w.document, w)
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
            value: Ou(c, a, d),
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
                (f = d.g.get(f)) ? (null != f.Qb || (f.Qb = e === e.top ? (++d.o).toString(36) : pA()), f = f.Qb) : f = "";
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
                for (var k = 0; k < c.length; k++) f[k] = [].concat(_.si(km(h)))
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
                        f[d].push.apply(f[d], _.si(km(k)))
                    } else m = a.get(l) || [], k = km(k)[0], 1 === c.length ? m[0] = k : k !== m[0] && (m[d + 1] = k), a.set(l, m)
                }
        c = [];
        e = _.y(_.z(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) h = d.value, d = pn()[h], h = a.get(h), d && h && "to" !== d && (1 < h.length ? (h = h.map(function(n) {
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
        l = void 0 === l ? hA : l;
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
        e = UA();
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
                    var w = null != (v = UG.get(r.type)) ? v : null;
                    break a
                }
            } catch (F) {}
            var x, B, C;w = null != (C = VG.get(null == (x = a.performance) ? void 0 : null == (B = x.navigation) ? void 0 : B.type)) ? C : null
        }
        w = k.call(h, "nvt", {
            value: w
        });
        n = w.set;
        p = _.Kf(mD);
        p = 0 === p ? null : gB(a, 2 === p);
        w = n.call(w, "bz", {
            value: p
        });
        n = w.set;
        _.E(dE) ? a = Ja() && jl(a) ? a.document.documentElement.lang : void 0 : a = null;
        n.call(w, "tl", {
            value: a
        })
    }, function(a, b) {
        (a = _.um(251)) && b.set("uach", {
            value: ey(a, 3)
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
        a = Lq("google_preview", d);
        var k = d.document,
            l = a ? Nq(k.URL) : k.URL;
        k = a ? Nq(k.referrer) : k.referrer;
        a = !1;
        if (c) c = Mq(g.Pa());
        else {
            var m;
            c = null != (m = Mq(h[f[0].getDomId()].Pa())) ? m : Mq(g.Pa())
        }
        if (null != c) {
            var n = l;
            Zg(d) || (k = "", a = !0)
        } else c = l;
        m = Oq(d);
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
            d = (d = m || d || v) ? a ? KA(d.match(_.JA)[3] || null) : d : null;
            n.call(b, "top", {
                value: d
            }).set("etu", {
                value: e.Jb
            })
        }
    }, function(a, b) {
        a = a.oa.context.pvsid;
        b.set("rumc", {
            value: _.E(kF) || _.If(El).g ? a : null
        }).set("rume", {
            value: _.E(jF) ? 1 : null
        })
    }, function(a, b) {
        b.set("vis", {
            value: _.Jr(a.oa.B.document)
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.X;
        c = c.O;
        a = a.oa.B;
        var e = Lp(d, c.T, c.ba),
            f = Op(d, e, a);
        c = f.Dl;
        f = f.vm;
        var g = Qp(d, e, a),
            h = g.Pk;
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
            value: JJ(a.oa.L, a.ma.X)
        })
    }, function(a, b) {
        var c = a.oa;
        a = c.Z;
        c = c.B;
        var d;
        var e = c.document.domain,
            f = null != (d = ch(a) && eh(c) ? c.document.cookie : null) ? d : "",
            g = c.history.length,
            h = c.screen,
            k = c.document.referrer;
        if (Nf()) var l = window.gaGlobal || {};
        else {
            var m = Math.round((new Date).getTime() / 1E3),
                n = c.google_analytics_domain_name;
            e = "undefined" == typeof n ? dG("auto", e) : dG(n, e);
            var p = -1 < f.indexOf("__utma=" + e + "."),
                r = -1 < f.indexOf("__utmb=" + e);
            (d = (mB() || window).gaGlobal) || (d = {}, (mB() || window).gaGlobal = d);
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
                    p = bG.appName;
                    var x = bG.version,
                        B = bG.language ? bG.language : bG.browserLanguage,
                        C = bG.platform,
                        F = bG.userAgent;
                    try {
                        w = bG.javaEnabled()
                    } catch (G) {
                        w = !1
                    }
                    w = [p, x, B, C, F, w ? 1 : 0].join("");
                    h ? w += h.width + "x" + h.height + h.colorDepth : _.t.java && _.t.java.awt && (h = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), w += h.screen.width + "x" + h.screen.height);
                    w = w + f + (k || "");
                    for (k = w.length; 0 < g;) w += g-- ^ k++;
                    d.vid = (r ^ cG(w) & 2147483647) + "." + m
                }
                d.from_cookie || (d.from_cookie = !1)
            }
            if (!d.cid) {
                b: for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), w = 0; w < f.length; w++)
                    if (k = eG.exec(f[w]) || fG.exec(f[w]) || gG.exec(f[w])) {
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
        v && !ch(a) || b.set("ga_vid", {
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
        var e = a.Yg,
            f = a.Se,
            g = a.qm,
            h = a.Vj;
        if (!_.E(mF) && !g) {
            mh(d.isSecureContext, d.navigator, d.document) && b.set("td", {
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
                    kb(e)
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
        nh(c.isSecureContext, c.document) && (b.set("topics", {
            value: a instanceof Uint8Array ? Hb(a, 3) : a
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
        var g = a.Ik,
            h = a.wl;
        if (!_.E(uD)) {
            a = b.set;
            d = dh(e, d);
            e = Bl(f[0].getAdUnitPath());
            var k = _.E(zk);
            k = void 0 === k ? !1 : k;
            f = new Sz;
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
                        for (n = _.y(_.bk(n, nz, 2)), p = n.next(); !p.done; p = n.next())
                            if (p = p.value, _.Q(p, il(p, oz, 3)) && (p = _.I(p, 1), !ek(f, p))) {
                                r = null;
                                try {
                                    var v = l = k = void 0;
                                    r = null == (k = c.getUserIdsAsEidBySource(p)) ? void 0 : null == (l = k.uids) ? void 0 : null == (v = l[0]) ? void 0 : v.id
                                } catch (w) {
                                    k = void 0, Yj(45, p, null == (k = w) ? void 0 : k.message)
                                }
                                r && (r.length > g ? (k = {}, Yj(12, p, null, (k.sl = String(r.length), k.fp = "1", k))) : (k = Nz(p), l = mi(k, 2, r), k = f, l = Uh(l, 11, !0), kk(k, 2, ck, l), k = {}, Yj(19, p, null, (k.fp = "1", k.hs = r ? "1" : "0", k))))
                            }
            }
            lk(f, d, e, h);
            _.bk(f, ck, 2).length ? (c = {}, Yj(50, "", null, (c.ns = String(_.bk(f, ck, 2).length), c)), c = Hb(f.g(), 3)) : c = null;
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
            value: Xp(a, function(e) {
                return Hb(e.g(), 3)
            }),
            options: _.z(Object, "assign").call(Object, {}, {
                Ta: "~"
            }, {
                ed: !0
            })
        })
    }, function(a, b) {
        var c = [];
        a = _.y(_.bk(Cy(a.ma.O.ba.gi(), ot, 2), zr, 1));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            oi(e, 2, 2).length && (d = null != Di(e, 3) ? _.Fy(e, 3) : _.eg(e, 1, 0) + 2, e = oi(e, 2, 2).join("|"), c.push(d + "=" + e))
        }
        b.set("pps", {
            value: c,
            options: {
                Ta: "~"
            }
        })
    }, function(a, b) {
        b.set("scar", {
            value: a.Gl.Xk
        })
    }, function(a, b) {
        a = a.oa.B;
        a = !(!a.isSecureContext || !lh("attribution-reporting", a.document));
        !_.E(iF) && a && b.set("nt", {
            value: 1
        })
    }, function(a, b) {
        if (a = a.Ql.Pl) a = ey(cl(a), 3), b.set("psd", {
            value: a
        })
    }, function(a, b) {
        a = _.Xf(a.oa.B);
        var c = Qq;
        0 < a && c >= a && b.set("dlt", {
            value: a
        }).set("idt", {
            value: c - a
        })
    }, function(a, b) {
        a = a.ma.O.ba;
        b.set("ppid", {
            value: _.Ci(a, 16) ? _.I(a, 16) : null,
            options: {
                Ia: !0
            }
        })
    }, function(a, b) {
        var c = b.set;
        (a = dk(a.ma.O.ba, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + ey('role:1 producer:12 loc:"' + a + '"')) : a = "";
        c.call(b, "uule", {
            value: a
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.O.ba;
        b.set("prev_scp", {
            value: as(a.X, a.O),
            options: {
                ed: !0,
                Ta: "|"
            }
        }).set("cust_params", {
            value: cs(c),
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
                    h = ip(h);
                    if (g = e.g.get(g)) g.Fd = h;
                    return h
                }
                h = d.ba;
                var k = d.T[g.getDomId()],
                    l;
                if (!(l = Du(e, g))) {
                    h = ip(k, _.Q(h, 6) || _.Q(k, 17) ? null : Tm(g));
                    if (g = e.g.get(g)) g.Fd = h;
                    l = h
                }
                return l
            })
        })
    }, function(a, b) {
        var c = b.set;
        a = a.oa.B;
        var d = fB(a);
        a: {
            var e = a.google_ad_width || a.google_ad_width;
            var f = a.google_ad_height || a.google_ad_height;
            if (Zg(a)) e = !1;
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
        f = a.top == a ? 0 : _.Sk(a.top) ? 1 : 2;
        g = 4;
        e || 1 !== f ? e || 2 !== f ? e && 1 === f ? g = 7 : e && 2 === f && (g = 8) : g = 6 : g = 5;
        d && (g |= 16);
        d = String(g);
        if (a !== a.top)
            for (e = a; e && e !== e.top && _.Sk(e) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; e = e.parent);
        c.call(b, "frm", {
            value: d || null
        })
    }, function(a, b) {
        var c = b.set;
        a = Cy(a.ma.O.ba, qt, 36);
        a = ue(a, 1, _.Uc, 2);
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
        a = a.mk.kd;
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
        _.E(pD) && b.set("no_cau_info", {
            value: a.has(d) ? "1" : null
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.O.T;
        a = a.oa.B;
        var e = [],
            f = !1;
        c = _.y(c.X);
        for (var g = c.next(); !g.done; g = c.next()) g = mr(d[g.value.getDomId()]), (_.H = [8, 9], _.z(_.H, "includes")).call(_.H, g) ? (f = 9 === g ? "right" : "left", e.push(_.Cj(a).sideRailPlasParam.get(f)), f = !0) : e.push("");
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
        a = a.Gk.Hk;
        if (_.E(tD)) {
            var g;
            (g = !a) || (g = !Ge(a, 1, xd).get(e));
            a = g;
            var h;
            f = !(null == (h = Xu(f)) || !_.Q(h, 9));
            d = new oG(d, {
                Vl: a,
                Ul: f
            });
            d = _.Q(c, 8) || (d.options.Ul || !ch(c)) && d.options.Vl ? void 0 : (new fh(d.g.document)).get("__eoi") || "";
            d && b.set("eo_id_str", {
                value: d
            })
        }
    }, function(a, b) {
        a = a.ma;
        var c = a.X,
            d = a.O.T;
        _.E(fD) && b.set("eov", {
            value: Vp(c, function(e) {
                var f, g;
                return !!(null == (f = d[e.getDomId()]) ? 0 : null == (g = _.vm(f, HL, 31)) ? 0 : _.Q(g, 1))
            })
        })
    }]);
    var nP = function(a, b, c) {
        Y.call(this, a, 798);
        this.output = W(this);
        this.j = DH(this, b);
        this.o = X(this, c)
    };
    _.T(nP, Y);
    nP.prototype.g = function() {
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
                b.set(f, d ? oP(this, f, h) : function() {
                    return a.o.value
                })
            }
        }
        this.output.G(b)
    };
    var oP = function(a, b, c) {
        return Bi(function() {
            var d = _.z(Object, "assign").call(Object, {}, a.j.value);
            d.ma.tg = !0;
            d.ma.X = [b];
            c && (d.qb.ye = new _.u.Map, d.qb.ye.set(b, c));
            return Jq(Wu(d)).url
        })
    };
    var pP = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 810);
        this.o = b;
        this.nb = c;
        this.O = d;
        this.R = e;
        this.B = f;
        this.Z = g;
        this.j = W(this)
    };
    _.T(pP, Y);
    pP.prototype.g = function() {
        var a = this,
            b = this.o;
        !this.nb && 1 < this.o.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.M) return !1;
            var d = a.O.T[c.getDomId()],
                e;
            if (e = !(tq(mr(d)) && (_.H = Mf(OD), _.z(_.H, "includes")).call(_.H, String(mr(d))))) e = a.R, Ki(a.B) && 4 === mr(d) ? (O(e, wK("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1, e = !e;
            if (e) {
                e = a.context;
                var f = a.R,
                    g = a.B,
                    h = a.Z;
                d = mr(d);
                5 !== d ? c = !1 : (e.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, e, {
                    U: 1
                })), (g = nq(g, !IM(c), h)) ? (hq(f, g, d, c.getAdUnitPath()), e.V.log(578856259, oj, _.z(Object, "assign").call(Object, {}, e, {
                    xl: g
                })), e.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, e, {
                    U: 2
                }))) : e.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, e, {
                    U: 3
                })), c = !!g);
                e = !c
            }
            return e
        });
        30 < b.length && (O(this.R, vK("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.j.G(b)
    };
    var qP = function(a, b, c) {
        Y.call(this, a, 919);
        this.j = b;
        this.Z = c;
        this.output = W(this)
    };
    _.T(qP, Y);
    qP.prototype.g = function() {
        var a, b = !(null == (a = this.j) ? 0 : _.Q(a, 9)) && !!ch(this.Z);
        this.output.G(b)
    };
    var rP = function(a, b, c, d, e, f) {
        Y.call(this, a, 928);
        this.requestId = b;
        this.C = f;
        this.output = CH(this);
        this.o = X(this, c);
        e && (this.j = X(this, e));
        FH(this, d)
    };
    _.T(rP, Y);
    var sP = function(a) {
        return a.j ? a.C.split(",").some(function(b) {
            var c;
            return null == (c = a.j) ? void 0 : c.value.has(b)
        }) : !1
    };
    rP.prototype.g = function() {
        var a = this.context,
            b = this.requestId,
            c = this.o.value.length,
            d = sP(this);
        if (a.Oc) {
            var e = a.Ra,
                f = e.Nc;
            a = rl(a);
            var g = new EC;
            b = _.bj(g, 2, b);
            c = _.vl(b, 1, c);
            d = _.ul(c, 3, d);
            d = _.ij(a, 7, wl, d);
            f.call(e, d)
        }
        this.output.notify()
    };
    var av = new _.u.Map;
    var tP = function(a, b, c, d) {
        Y.call(this, a, 867);
        this.Aa = b;
        this.O = c;
        this.output = CH(this);
        this.j = X(this, d)
    };
    _.T(tP, Y);
    tP.prototype.g = function() {
        for (var a = _.y(this.j.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = xm(this.O.T[b.getDomId()], 20);
            Qs(b, wJ, 808, {
                rk: c,
                cm: d
            });
            Qs(this.Aa, "slotRequested", 705, new iN(b, "publisher_ads"))
        }
        this.output.notify()
    };
    var uP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R, K, Z, qa, wa, aa, ha, vb, Ta, db, Ab, Pa, Ib) {
        Y.call(this, a, 785, _.Kf(cE));
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
        FH(this, R);
        this.Ma = EH(this, x);
        this.W = EH(this, B);
        this.H = X(this, C);
        G && (this.C = _.E(fE) ? new vH(G.zd) : EH(this, G.zd), G.re && (this.Hb = DH(this, G.re)));
        P && (this.J = _.E(fE) ? new vH(P.Sc) : EH(this, P.Sc));
        FH(this, R);
        K && (this.jb = X(this, K));
        Z && (this.fa = new vH(Z));
        qa && (this.bb = DH(this, qa));
        wa && (this.ra = X(this, wa));
        aa && FH(this, aa);
        ha && (this.xa = X(this, ha));
        F && (this.ga = DH(this, F));
        vb && (this.ob = DH(this, vb.Ug));
        Ta && (this.uc = X(this, Ta));
        db && (this.ua = DH(this, db));
        Ab && (this.ka = DH(this, Ab));
        Pa && (this.pb = X(this, Pa));
        Ib && (this.qc = EH(this, Ib))
    };
    _.T(uP, Y);
    uP.prototype.g = function() {
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
                    tg: !1
                },
                Nm: {
                    Cd: this.Cd,
                    Bd: this.Bd
                },
                Gl: {
                    Xk: null != (w = this.Ma.value) ? w : "0"
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
                    Ik: null == (g = this.ra) ? void 0 : g.value
                },
                Vg: {
                    Zk: null == (h = this.bb) ? void 0 : h.value,
                    Tk: null == (k = this.xa) ? void 0 : k.value
                },
                Ql: {
                    Pl: null == (l = this.ob) ? void 0 : l.value
                },
                Jm: {
                    Yg: null == (m = this.uc) ? void 0 : m.value,
                    Se: null == (n = this.ua) ? void 0 : n.value,
                    qm: null == (p = this.pb) ? void 0 : p.value,
                    Vj: null == (r = this.qc) ? void 0 : r.value
                },
                Gk: {
                    Hk: null == (v = this.ka) ? void 0 : v.value
                },
                mk: {
                    kd: this.Ge.kd
                }
            };
            this.o.G(b);
            c = Jq(Wu(b));
            d = c.url;
            kC(this.timer, (9).toString(), 9, c.Dh);
            this.j.G(d);
            this.P.G(Su(b) ? new Uw(Sw, "https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : new Uw(Sw, "https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.j.G(""), this.o.ca()
    };
    var vP = function(a, b, c, d, e, f) {
        Y.call(this, a, 878);
        this.j = b;
        this.aa = c;
        this.O = d;
        this.B = e;
        this.output = CH(this);
        f && FH(this, f)
    };
    _.T(vP, Y);
    vP.prototype.g = function() {
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
    var wP = function(a, b, c, d, e, f, g, h) {
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
        yP = function(a, b) {
            if (b)
                if (1 !== a.g && 2 !== a.g) xP(a, new AG("state err: (" + ([a.g, a.A.length].join() + ")")));
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
                                    ub: bB(c)
                                }, f.X, f.Z, f.C, f.I, null != (g = f.o) ? g : void 0), f.j = ""
                            } catch (h) {}
                            f.g = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.A = b.substr(c)
                }
        },
        xP = function(a, b) {
            a.g = 4;
            try {
                a.K(b)
            } catch (c) {}
        },
        zP = function(a) {
            1 !== a.g || a.A ? xP(a, new AG("state err (" + ([a.g, a.A.length].join() + ")"))) : (a.g = 3, a.M(a.l, a.X, a.Z))
        };
    var AP = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Y.call(this, a, 788);
        this.ka = b;
        this.ga = c;
        this.fa = d;
        this.Z = e;
        this.L = f;
        this.O = g;
        this.H = CH(this);
        this.C = W(this);
        this.o = W(this);
        this.W = 0;
        this.P = !1;
        this.j = null != p ? p : new XMLHttpRequest;
        this.J = X(this, h);
        k && (this.ua = DH(this, k));
        this.xa = X(this, l);
        FH(this, m);
        this.ra = X(this, n)
    };
    _.T(AP, Y);
    AP.prototype.g = function() {
        var a = this,
            b = this.xa.value;
        if (b) {
            var c, d = new wP(this.ka, this.ga, this.fa, this.J.value, this.Z, null == (c = this.ua) ? void 0 : c.value);
            this.j.open("GET", b);
            this.j.withCredentials = this.ra.value;
            this.j.onreadystatechange = function() {
                BP(a, d, !1)
            };
            this.j.onload = function() {
                BP(a, d, !0);
                a.C.G(a.j.status);
                if (300 <= a.j.status) {
                    var e;
                    a.o.G(null != (e = a.j.responseText) ? e : "")
                } else a.o.G("")
            };
            this.j.onerror = function() {
                xP(d, new BG("XHR error"));
                a.J.value.forEach(function(e) {
                    Ts(e, a.L, a.O, "")
                });
                a.C.G(0);
                a.o.G("")
            };
            this.j.send()
        }
        this.H.notify()
    };
    var BP = function(a, b, c) {
        try {
            if (3 === a.j.readyState || 4 === a.j.readyState)
                if (300 <= a.j.status) a.P || (xP(b, new BG("xhr_err-" + a.j.status)), a.P = !0);
                else {
                    var d = a.j.responseText.substr(a.W);
                    d && yP(b, d);
                    a.W = a.j.responseText.length;
                    c && 4 === a.j.readyState && zP(b)
                }
        } catch (e) {
            xP(b, e)
        }
    };
    var CP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Y.call(this, a, 1078);
        this.W = b;
        this.P = c;
        this.J = d;
        this.Z = e;
        this.L = f;
        this.O = g;
        this.C = CH(this);
        this.o = W(this);
        this.j = W(this);
        this.H = X(this, h);
        k && (this.ga = DH(this, k));
        l && (this.ka = X(this, l));
        this.ra = X(this, m);
        FH(this, n);
        this.fa = X(this, p);
        if (null == r ? 0 : r.qe) this.xa = DH(this, r.qe);
        v && (this.ua = X(this, v));
        w && (this.Ma = DH(this, w))
    };
    _.T(CP, Y);
    CP.prototype.g = function() {
        var a = this,
            b = this.ra.value;
        if (b) {
            var c, d, e, f = new wP(this.W, this.P, this.J, this.H.value, this.Z, null == (c = this.ga) ? void 0 : c.value, null == (d = this.ka) ? void 0 : d.value, null == (e = this.Ma) ? void 0 : e.value);
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
                DP(a, k, f)
            }).catch(function(k) {
                EP(a, k, f);
                a.H.value.forEach(function(l) {
                    Ts(l, a.L, a.O, "")
                })
            })
        }
        this.C.notify()
    };
    var DP = function(a, b, c) {
            a.o.G(b.status);
            if (300 <= b.status) a.j.La(b.text()), xP(c, new BG("fetch_status-" + b.status));
            else {
                a.j.G("");
                var d, e = null == (d = b.body) ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
                e ? e.read().then(function(f) {
                    FP(a, f, e, c)
                }).catch(function(f) {
                    EP(a, f, c)
                }) : xP(c, new BG("failed_reader"))
            }
        },
        FP = function(a, b, c, d) {
            var e = b.value;
            b.done ? zP(d) : (yP(d, e), c.read().then(function(f) {
                FP(a, f, c, d)
            }).catch(function(f) {
                EP(a, f, d)
            }))
        },
        EP = function(a, b, c) {
            xP(c, new BG("fetch error: " + (b instanceof Error ? b.message : void 0)));
            a.o.G(0);
            a.j.G("")
        };
    var GP = function(a, b, c, d, e) {
        Y.call(this, a, 918);
        this.O = b;
        this.timer = c;
        this.output = CH(this);
        this.j = X(this, e);
        FH(this, d)
    };
    _.T(GP, Y);
    GP.prototype.g = function() {
        var a = this.j.value;
        a.length && Os(this.timer, "3", Ps(this.O.T[a[0].getDomId()], 20));
        this.output.notify()
    };
    var HP = function(a, b, c, d, e) {
        Y.call(this, a, 803);
        this.j = b;
        this.slotId = c;
        this.Ea = d;
        this.Z = e;
        this.output = W(this)
    };
    _.T(HP, Y);
    HP.prototype.g = function() {
        var a = JSON.parse(this.j),
            b = mp(a, Gx);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.j);
        a = Se(eA, a);
        b = ue(a, 27, Wc, 2);
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.If(ih).g(c);
        Ln(4, this.context, this.Ea, this.Z);
        Qs(this.slotId, vJ, 800, a);
        this.output.G(a)
    };
    var IP = function(a, b, c, d) {
        Y.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.j = X(this, d)
    };
    _.T(IP, Y);
    IP.prototype.g = function() {
        var a = this;
        Gn(this.j.value, 11) && (_.HJ(this.L, this.slotId), EJ(this.L, this.slotId, function() {
            _.IJ(a.L, a.slotId)
        }))
    };
    var JP = function(a, b, c, d) {
        ok.call(this);
        this.context = a;
        this.slotId = b;
        b = d.L;
        var e = d.Z,
            f = d.Za,
            g = d.Ea;
        a = d.Sa;
        d = d.R;
        c = new HP(this.context, c, this.slotId, g, e);
        J(this, c);
        e = new TM(this.context, e, g, c.output);
        J(this, e);
        f = new VM(this.context, this.slotId, f, c.output);
        J(this, f);
        b = new IP(this.context, this.slotId, b, c.output);
        J(this, b);
        a = KH(this, 1229, vv, {
            Og: c.output
        }, {
            Sa: a
        }, {
            output: void 0
        });
        KH(this, 1220, zv, {
            Og: c.output
        }, {
            R: d,
            context: this.context
        }, {});
        this.g = {
            vl: a.output
        }
    };
    _.T(JP, ok);
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var KP = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        LP = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = KP[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var MP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R, K) {
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
        this.C = DH(this, F);
        this.fa = X(this, G);
        this.xa = X(this, P);
        this.j.Ib && FH(this, this.j.Ib.Ih)
    };
    _.T(MP, Y);
    MP.prototype.g = function() {
        var a = this,
            b = new ok;
        _.S(this, b);
        var c = this.fa.value,
            d = Xu(this.O.ba);
        this.C.value && this.ua.G(this.C.value);
        var e = Mr(this.context, this.aa);
        e && _.S(b, e.Ka);
        var f = Wq(this.context, _.vm(this.O.ba, du, 5), this.L, this.J, null == e ? void 0 : e.Nl.ce);
        e = f.xg;
        (f = f.ol) && _.S(b, f);
        f = new vP(this.context, this.J, this.aa, this.O, this.B, e);
        J(b, f);
        var g = !!_.Q(this.O.ba, 6);
        e = new pP(this.context, this.J, g, this.O, this.R, this.B, c);
        J(b, e);
        var h, k = new NL(this.context, d, c, (null == (h = _.vm(this.O.ba, qt, 36)) ? void 0 : ue(h, 1, _.Uc, 2)) || []);
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
            F = r.ei;
        p = r.hc;
        var G = r.jg,
            P = r.Nh;
        r = r.Kb;
        if (_.E(UD)) {
            var R = new QN(this.context, P);
            var K = new RN(this.context, P);
            J(b, R);
            J(b, K);
            var Z = R.j;
            R = K.j;
            K = K.o
        }
        if (G = Xs(this.context, n, this.O.T, c, this.C.value, e.j, k.output, G, R)) {
            var qa = G.Gm;
            G = G.Fm;
            var wa = qa.Qg;
            qa = qa.rg;
            _.S(b, G)
        }
        if (K = ts(this.context, n, this.B.navigator, k.output, K)) {
            var aa = K.tj;
            K = K.Hm;
            var ha = aa.bj;
            aa = aa.ti;
            K && _.S(b, K)
        }
        _.E(mE) && (aa = W(this), aa.G(n.mh));
        var vb = new gO(this.context, this.B);
        J(b, vb);
        G = (null != v ? v : {}).Yb;
        var Ta;
        K = null == (Ta = this.j.Ib) ? void 0 : Ta.se;
        Ta = new MN(this.context, l.Il);
        J(b, Ta);
        if (l = bq(this.context, this.R, this.O.T, this.networkCode, e.j, v, x)) {
            var db = l.Xj;
            _.S(this, l.Ka)
        }
        if (qa = Or(this.context, m, qa, this.O.T, e.j, P)) {
            var Ab = qa.vf;
            _.S(this, qa.Ka)
        }
        if (Z = gs(this.context, this.C.value, K, k.output, Z)) {
            var Pa = Z.Cm;
            _.S(this, Z.Ka);
            this.o.push(Pa.zd.promise)
        }
        if (n.Sj) {
            _.E(It);
            var Ib = new LO(this.context, this.B.navigator, e.j);
            J(b, Ib);
            Ib = Ib.output
        }
        Z = window.isSecureContext && _.E(rE) ? "wbn" : "ldjh";
        var jd = ++this.L.I;
        qa = "wbn" === Z ? LP().toLowerCase() : void 0;
        k = this.je;
        var cc, Zb;
        db = new uP(this.context, g, this.L, this.Ea, this.O, k.Zb, this.networkCode, k.Cd, k.Bd, this.xa.value, _.If(El), c, this.isSecureContext, this.Nb, this.B, h, Ta.output, vb.output, e.j, null == (cc = db) ? void 0 : cc.jh, Pa, K, f.output, null == w ? void 0 : w.Ig, G, x, B, C, F, Ab, ha, null == (Zb = this.j.Ib) ? void 0 : Zb.jg, r, R, Ib);
        J(b, db);
        Ab = new GP(this.context, this.O, _.If(El), db.j, e.j);
        J(b, Ab);
        this.context.mm && KH(b, 1231, cv, {
            so: db.j,
            X: e.j
        }, {
            Ba: this.context.Ra
        }, {});
        d = new qP(this.context, d, c);
        J(b, d);
        cc = Cl(this.context, 646, function(Ec, jc, dc, Id, Oc, lf, ve, Jd) {
            hv(function() {
                return void NP(a, Oc, Ec, jc, dc, Id, lf, ve, Jd)
            }, Ec, a.B)
        });
        Zb = Cl(this.context, 647, function(Ec, jc, dc) {
            hv(function() {
                return void OP(a, jd, dc, jc, Ec)
            }, -1, a.B)
        });
        "ldjh" === Z ? (R = PP(this, 289, "strm_err"), fv() ? (Pa = new CP(this.context, cc, R, Zb, c, this.L, this.O, e.j, wa, ha, db.j, Ab.output, d.output, Pa, aa, Ib), J(b, Pa), wa = Pa.C, ha = Pa.o, Pa = Pa.j) : (Pa = new AP(this.context, cc, R, Zb, c, this.L, this.O, e.j, wa, db.j, Ab.output, d.output), J(b, Pa), wa = Pa.H, ha = Pa.C, Pa = Pa.o), ha = KH(b, 1221, Zu, {
            status: ha,
            responseText: Pa
        }, {
            R: this.R
        }, {}).finished, this.o.push(ha.promise)) : (ha = new PO(this.context, cc, PP(this, 1042, "Unknown web bundle error."), Zb, Z, qa, c, this.aa, e.j, wa, db.j, db.P, Ab.output, d.output), au(b, ha), wa = new Kr, wH(wa, xk(ha).then(function() {})));
        p = new rP(this.context, jd, e.j, wa, p, this.networkCode);
        J(b, p);
        ha = new nP(this.context, db.o, db.j);
        J(b, ha);
        ha = new tP(this.context, this.H.Aa, this.O, ha.output);
        J(b, ha);
        ha = new YN(this.context, this.ga, this.B, ha.output);
        J(b, ha);
        ha = new CN(this.context, this.O, this.P, e.j, ha.output);
        J(b, ha);
        e = new MM(this.context, this.L, this.O, this.aa, e.j, ha.output);
        J(b, e);
        ha = new fO(this.context, Xj(this.B), this.B, c, wa);
        J(b, ha);
        1 === jd && (c = new EM(this.context, this.B, c, K, wa), J(b, c), this.o.push(c.output.promise));
        this.o.push(p.output.promise, e.output.promise, ha.output.promise);
        xk(b)
    };
    var NP = function(a, b, c, d, e, f, g, h, k) {
            var l, m, n, p;
            return _.qb(function(r) {
                l = f[c];
                if (!l) return Gl(a.context, 646, Error("missing slot")), r.return();
                0 === c && (m = Ps(a.O.T[l.getDomId()], 20), Os(_.If(El), "4", m));
                return r.yield(QP(a, l, d, e, b, null == (n = g) ? void 0 : n[l.getId()], h, null == (p = k) ? void 0 : p.get(l)), 0)
            })
        },
        OP = function(a, b, c, d, e) {
            var f, g, h;
            return _.qb(function(k) {
                if (1 == k.g) {
                    var l = a.context,
                        m = e + 1,
                        n = d.length;
                    if (l.Oc) {
                        var p = l.Ra,
                            r = p.Nc;
                        l = rl(l);
                        var v = new FC;
                        v = _.bj(v, 3, b);
                        m = _.vl(v, 1, m);
                        n = _.vl(m, 2, n);
                        n = _.ij(l, 8, wl, n);
                        r.call(p, n)
                    }
                    f = e + 1
                }
                if (3 != k.g) {
                    if (!(f < d.length)) return k.yield(RP(a), 0);
                    if (!d[f]) {
                        k.g = 3;
                        return
                    }
                    p = new eA;
                    p = Uh(p, 8, !0);
                    g = cl(p);
                    h = '{"empty":' + g + "}";
                    return k.yield(NP(a, c, f, h, {
                        kind: 0,
                        ub: ""
                    }, d), 3)
                }++f;
                k.g = 2
            })
        },
        QP = function(a, b, c, d, e, f, g, h) {
            var k, l, m, n, p, r, v, w, x, B, C, F, G, P;
            return _.qb(function(R) {
                if (1 == R.g) return k = {
                    Z: e,
                    Za: a.Za,
                    L: a.L,
                    Ea: a.Ea,
                    Sa: d,
                    R: a.R
                }, l = new JP(a.context, b, c, k), R.yield(xk(l), 2);
                m = R.A;
                p = n = m.vl;
                r = p.isEmpty;
                v = p.Na;
                w = p.na;
                x = p.Om;
                B = p.Fb;
                C = p.eg;
                dq(a.context, null == (F = a.j.Ib) ? void 0 : F.Kd, x, B, v);
                _.E(tD) && Cq(a.context, a.Ea, C);
                if (b.M) return R.return();
                G = !!w;
                _.E(kE) || G && xp("gpt_td_init", function(K) {
                    Xo(K, a.context);
                    Yo(K, "noFill", r ? "1" : "0");
                    Yo(K, "publisher_tag", "gpt");
                    var Z = _.vm(w, aA, 5);
                    Z && (Yo(K, "winner_qid", Z.getEscapedQemQueryId()), Yo(K, "xfpQid", _.I(Z, 6)))
                }, 1);
                (P = Lq("google_norender")) || r && !G ? Ts(b, a.L, a.O, v) : kP(a.ka, a.ra, a.R, b, r || P, G, a.L, a.O, a.Za, n, e, f, g, a.H.Aa, a.P, a.j, h);
                l.za();
                R.g = 0
            })
        },
        PP = function(a, b, c) {
            return Cl(a.context, b, function(d) {
                d = d instanceof Error ? d : Error();
                d.message = d.message || c;
                Gl(a.context, b, d);
                RP(a)
            })
        },
        RP = function(a) {
            return _.qb(function(b) {
                if (1 == b.g) {
                    var c = a.L,
                        d = a.W,
                        e = c.A.get(d) - 1;
                    0 === e ? c.A.delete(d) : c.A.set(d, e);
                    return e ? b.return() : b.yield(_.u.Promise.all(a.o), 2)
                }
                Qs(a.H.ki, zJ, 965, a.W);
                b.g = 0
            })
        };
    var SP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B, C, F, G, P, R) {
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
        FH(this, G)
    };
    _.T(SP, Y);
    SP.prototype.g = function() {
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
                var f = Iq(this.context, this.J, null == (e = this.C.Ib) ? void 0 : e.Oi);
                e = f.Cc;
                var g = f.mg;
                _.S(c, f.Ka);
                e = No(this.context, this.R, this.L, this.B, e, g, 3, Xu(this.O.ba));
                f = e.kb;
                _.S(c, e.Ka);
                e = new SN(this.context, this.B, f);
                J(c, e);
                e = new SM(this.context, this.B, f);
                J(c, e);
                e = new Yt(this.context, this.B, f);
                J(c, e);
                g = new lP(this.context, this.Ea, this.fb, f);
                J(c, g);
                b = new MP(this.context, this.fa, this.R, d, this.j, this.O, this.L, this.Ea, this.P, this.H, this.o, this.je, this.W, b, this.isSecureContext, this.Nb, this.Za, this.B, this.aa, e.output, f, g.o, this.C, this.ga);
                J(c, b);
                xk(c)
            }
        } else Qs(this.o.ki, zJ, 965, this.j)
    };
    var TP = new _.u.Map,
        UP = function(a, b, c, d) {
            d = void 0 === d ? TP : d;
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
    _.T(UP, Y);
    UP.prototype.g = function() {};
    UP.prototype.C = function(a) {
        var b = this,
            c, d;
        return _.qb(function(e) {
            if (1 == e.g) {
                if (a.M) return e.return();
                b.j.has(a) || (b.j.set(a, _.E(XD) ? Bv(a) : Av(a)), _.kp(a, function() {
                    return void b.j.delete(a)
                }));
                c = b.j.get(a);
                return e.yield(c(), 2)
            }
            d = e.A;
            if (b.M) return e.return();
            if (d) return e.return(a);
            O(b.R, EK(a.getAdUnitPath()));
            return e.return()
        })
    };
    var VP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, x, B) {
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
        this.l = new rJ(a);
        _.S(this, this.l);
        this.l.listen(zJ, function(F) {
            F = F.detail;
            var G = C.g.get(F);
            G && (C.g.delete(F), G.za())
        })
    };
    _.T(VP, _.V);
    var WP = function(a, b, c, d) {
        var e = ++a.L.D;
        a.g.has(e);
        var f = new ok;
        a.g.set(e, f);
        b = new UP(a.context, a.R, b);
        J(f, b);
        var g = KH(f, 845, Fv, {
            X: b.o
        }, {
            T: d.T
        }, {
            mj: void 0,
            wj: void 0
        });
        b = g.wj;
        g = KH(f, 847, Dv, {
            X: g.mj
        }, {
            L: a.L,
            nb: !!_.Q(d.ba, 6),
            il: Lq("google_nofetch")
        }, {
            he: void 0
        }).he;
        b = KH(f, 864, Aq, {
            X: b
        }, {
            L: a.L,
            O: d,
            aa: document
        }, {}).finished;
        a = new SP(a.context, a.C, a.R, d, a.L, a.Ea, c, a.K, a.j, e, {
            ki: a.l,
            Aa: a.Aa
        }, a.o, a.isSecureContext, a.fb, a.I, a.Nb, a.Za, a.B, a.aa, g, b, a.D, a.H);
        J(f, a);
        xk(f)
    };
    var XP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        RO.call(this, a, c, h);
        this.context = a;
        this.L = d;
        this.j = new _.u.Set;
        this.I = {};
        this.C = new jP(a, d);
        this.H = new VP(a, b, c, d, new _.IG(window), this.l, m, e, this.C, f, g, k, l, n, document, window, p, r);
        _.S(this, this.H)
    };
    _.T(XP, RO);
    XP.prototype.getName = function() {
        return "publisher_ads"
    };
    XP.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.ja(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        kt(this);
        var h = bo(c, this.context, this.R, a, b, f),
            k = h.slotId;
        h = h.Fa;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            ct(this, null != (l = g) ? l : k.getDomId(), c)
        } else O(this.R, Wl("PubAdsService.display", [a, b, d]))
    };
    var ct = function(a, b, c) {
        var d = YP(b, c);
        c = d.slotId;
        var e = d.Ck;
        d = d.Dk;
        if (c) {
            if (b = bn(), (d = lL(b, c.getDomId())) && !_.Q(d, 19))
                if (e && b.l.set(c, e), Tm(c) || Em(mr(d))) {
                    if (Uh(d, 19, !0), e = Pm(b.g, b.A), a.enabled) {
                        kt(a);
                        a.enabled && GJ(a.L, c);
                        a.R.info(fK());
                        b = e.ba;
                        d = e.T;
                        var f = _.Q(b, 6);
                        if (f || !a.L.xc(c)) f && (f = Tm(c)) && Qs(c, uJ, 778, f), _.Q(b, 4) && (d = d[c.getDomId()], wq(d, b) && !a.L.xc(c) && xq(c, document, d, b)), pL(a, e, c)
                    }
                } else O(a.R, WJ(String(dk(d, 1)), String(dk(d, 2))), c)
        } else d ? a.R.error(XJ(d)) : a.R.error(Wl("googletag.display", [String(b)]))
    };
    XP.prototype.slotAdded = function(a, b) {
        var c = this;
        _.Q(b, 17) || this.enabled && GJ(this.L, a);
        Qs(this.l, xJ, 724, {
            ih: a.getDomId(),
            T: b
        });
        a.listen(Ss, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new dN(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0, f.slotContentChanged = !1);
            e = a.g.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            Qs(c.l, "slotRenderEnded", 708, f)
        });
        a.listen(vJ, function() {
            Qs(c.l, "slotResponseReceived", 709, new jN(a, c.getName()))
        });
        4 === mr(b) && ZP(this, "rewardedSlotClosed", a, b);
        7 === mr(b) && ZP(this, "gameManualInterstitialSlotClosed", a, b);
        RO.prototype.slotAdded.call(this, a, b)
    };
    var ZP = function(a, b, c, d) {
            _.kp(c, a.l.listen(b, function(e) {
                c.g === e.detail.slot && (e = {}, $P(a, [c], bn().g, (e[c.getDomId()] = d, e), a.L))
            }))
        },
        pL = function(a, b, c) {
            var d = aQ(a, b, c);
            bQ(a, d, b, {
                Zb: 1
            });
            b = c.getAdUnitPath();
            if (c = a.I[b]) {
                c = _.y(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, bQ(a, d.X, d.O, d.je);
                delete a.I[b]
            }
        },
        aQ = function(a, b, c) {
            var d = b.ba,
                e = b.T[c.getDomId()];
            return _.Q(d, 4) ? [] : !_.Q(d, 6) || (null == e ? 0 : _.Q(e, 17)) ? (a.j.add(c), _.kp(c, function() {
                return void a.j.delete(c)
            }), [c]) : a.g.filter(function(f) {
                if (a.j.has(f) || _.E(ZD) && !Tm(f) && !Em(mr(e))) return !1;
                a.j.add(f);
                _.kp(f, function() {
                    return void a.j.delete(f)
                });
                return !0
            })
        },
        bQ = function(a, b, c, d) {
            a.R.info(mK());
            if (cQ(a, b, d, c) && 1 !== d.Zb)
                for (b = _.y(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), Qs(a.l, yJ, 725, {
                    ih: d,
                    T: c.T[d]
                })
        },
        cQ = function(a, b, c, d) {
            b = b.filter(function(e) {
                var f = d.T[e.getDomId()],
                    g = _.yq(a.L, e);
                !1 === g && O(a.R, WK(String(mr(f)), e.getAdUnitPath()));
                if (!g) return !1;
                (_.H = [5, 4, 7], _.z(_.H, "includes")).call(_.H, mr(f)) && _.HJ(a.L, e);
                return !0
            });
            if (!b.length) return null;
            WP(a.H, b, c, d);
            return b
        };
    XP.prototype.refresh = function(a, b, c) {
        c = void 0 === c ? {
            Zb: 2
        } : c;
        b = dQ(this, b);
        if (!b.length) return !1;
        eQ(this, a, b, c);
        return !0
    };
    var dQ = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.M) return !0;
                O(a.R, pK(String(d)));
                return !1
            })
        },
        eQ = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.enabled) {
                var h = _.y(c);
                e = h.next();
                for (f = {}; !e.done; f = {
                        yf: void 0
                    }, e = h.next()) f.yf = e.value, a.j.add(f.yf), _.kp(f.yf, function(k) {
                    return function() {
                        return void a.j.delete(k.yf)
                    }
                }(f));
                bQ(a, c, b, d)
            } else c.length && _.Q(b.ba, 6) ? (O(a.R, lK(g), e), e = e.getAdUnitPath(), f = null != (h = a.I[e]) ? h : [], f.push({
                X: c,
                O: b,
                je: d
            }), a.I[e] = f) : O(a.R, jK(g), e)
        };
    XP.prototype.o = function() {
        var a = bn().g;
        if (_.Q(a, 6))
            for (var b = _.y(this.g), c = b.next(); !c.done; c = b.next()) this.enabled && GJ(this.L, c.value);
        uL(this, a);
        a = wo();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    XP.prototype.destroySlots = function(a) {
        a = RO.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = bn();
            fQ(this, a, b.g, b.A)
        }
        return a
    };
    var wL = function(a, b, c, d) {
            if (!a.enabled) return O(a.R, kK(), d[0]), !1;
            var e = dQ(a, d);
            if (!e.length) return O(a.R, Wl("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.R.info(nK());
            fQ(a, e, b, c);
            return !0
        },
        fQ = function(a, b, c, d) {
            for (var e = _.y(b), f = e.next(); !f.done; f = e.next()) DJ(a.L, f.value);
            $P(a, b, c, d, a.L)
        };
    XP.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.If(ih).g(a)
    };
    var $P = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.y(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                MJ(a.C.L, g);
                var h = d[g.getDomId()];
                wq(h, c) && xq(g, f.document, h, c);
                zq(e, g)
            }
        },
        vL = function(a, b, c, d) {
            if ("string" !== typeof b || "string" !== typeof c) O(a.R, Wl("PubAdsService.setVideoContent", [b, c]));
            else {
                var e = Uh(d, 21, !0);
                b = mi(e, 22, b);
                mi(b, 23, c);
                uL(a, d)
            }
        },
        xL = function(a, b) {
            if (!a.enabled) return null;
            var c, d;
            return {
                vid: null != (c = _.I(b, 22)) ? c : "",
                cmsid: null != (d = _.I(b, 23)) ? d : ""
            }
        },
        uL = function(a, b) {
            _.Q(b, 21) && a.enabled && (a = cB(), _.ik(b, 29, _.pd(a)))
        },
        YP = function(a, b) {
            var c = "";
            if ("string" === typeof a) c = a, b = CM(b, c);
            else if (_.ja(a) && 1 == a.nodeType) {
                var d = a;
                c = d.id;
                b = CM(b, c)
            } else b = (_.H = [].concat(_.si(b.X)), _.z(_.H, "find")).call(_.H, function(e) {
                return e.g === a
            });
            return {
                slotId: b,
                Ck: d,
                Dk: c
            }
        };
    var Pv = _.iw(["https://pagead2.googlesyndication.com/pagead/js/rum_debug.js"]),
        Qv = _.iw(["https://pagead2.googlesyndication.com/pagead/js/rum.js"]);
    var gQ = jw(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]),
        hQ = _.Hx(function() {
            ZA("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        jQ = function(a, b) {
            var c = this;
            var d = void 0 === d ? _.z(String, "raw").call(String, gQ) : d;
            this.L = a;
            this.A = d;
            this.g = new _.u.Map;
            this.X = new _.u.Set;
            b.l = function(e) {
                return iQ(c, e)
            }
        };
    jQ.prototype.defineSlot = function(a, b, c, d, e) {
        a = bo(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.g;
        a.Me || b.error(Wl("googletag.defineSlot", [c, d, e]));
        return null
    };
    var bo = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Sb: f,
            Si: void 0 === g ? !1 : g
        }) : {}
    };
    jQ.prototype.add = function(a, b, c, d, e, f) {
        var g = this,
            h = e.Sb,
            k = void 0 === e.format ? 0 : e.format,
            l = void 0 === e.Si ? !1 : e.Si;
        e = void 0 === e.xb ? !1 : e.xb;
        f = void 0 === f ? _.t : f;
        try {
            var m = new RegExp(this.A, "u");
            if (m.test("/1") && !m.test(c)) return b.error(ZJ(c)), {
                Me: !0
            }
        } catch (p) {}
        f = sq(k, f, e);
        null !== f && kq(a, f, oq(k));
        if (f) return hq(b, f, k, c), {};
        l && hQ();
        k = this.g.get(c) || Number(l);
        b = kQ(this, a, b, c, k, d, h || "gpt_unit_" + c + "_" + k);
        a = b.Fa;
        var n = b.slotId;
        b = b.Me;
        if (!n) return {
            Me: b
        };
        this.g.set(c, k + 1);
        this.X.add(n);
        _.kp(n, function() {
            return void g.X.delete(n)
        });
        lJ(c);
        return {
            slotId: n,
            Fa: a
        }
    };
    var CM = function(a, b) {
            a = _.y(a.X);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        at = function(a) {
            a = _.y(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.za()
        },
        kQ = function(a, b, c, d, e, f, g) {
            var h = CM(a, g);
            if (h) return c.error(YJ(g, d, h.getAdUnitPath())), {
                Me: !0
            };
            var k = new IL;
            JL(mi(k, 1, d), g);
            KL(k, ro(f));
            kL(k);
            var l = new Rg(b, d, e, g);
            rL(l, Do(b, c, l));
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
                c.info(uK(l.toString()), l);
                (p = Rl.get(l)) && Sl.delete(p);
                Rl.delete(l)
            });
            c.info(NJ(l.toString()), l);
            l.listen(wJ, function(m) {
                m = m.detail.cm;
                c.info(OJ(l.getAdUnitPath()), l);
                kC(_.If(El), "7", 9, KJ(a.L, l), 0, m)
            });
            l.listen(vJ, function(m) {
                var n = m.detail;
                c.info(PJ(l.getAdUnitPath()), l);
                var p;
                m = _.If(El);
                var r = Ps(k, 20);
                n = null != (p = n.getEscapedQemQueryId()) ? p : "";
                m.g && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + r] = n)
            });
            l.listen(Rs, function() {
                return void c.info(QJ(l.getAdUnitPath()), l)
            });
            l.listen(Ss, function() {
                return void c.info(RJ(l.getAdUnitPath()), l)
            });
            return {
                Fa: k,
                slotId: l
            }
        },
        iQ = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.si(a.X)).some(function(d) {
                return c.test(Bl(d.getAdUnitPath()))
            })
        };
    (function(a, b) {
        var c = null != a ? a : {
            pvsid: Xj(window),
            mb: "1",
            zb: "m202403130101",
            Ra: new Xv(3, "m202403130101", 0),
            fh: !0,
            fg: 1
        };
        try {
            Ac(function(aa) {
                Gl(c, 1190, aa)
            });
            var d = wo();
            Bf(!_.If(sm).g);
            _.z(Object, "assign").call(Object, tm, d._vars_);
            d._vars_ = tm;
            if (d.evalScripts) d.evalScripts();
            else {
                CI();
                try {
                    xh()
                } catch (aa) {
                    Gl(c, 408, aa)
                }
                Rq();
                var e = new XL;
                try {
                    th(e.I), In(13, c), In(3, c)
                } catch (aa) {
                    Gl(c, 408, aa)
                }
                var f = Wv(c, e),
                    g = null != a ? a : $v(f, c),
                    h = null != b ? b : new WL(g);
                xl(g);
                xp("gpt_fifwin", function(aa) {
                    Xo(aa, g)
                }, d.fifWin ? .01 : 0);
                var k = new CJ,
                    l = new jQ(k, e),
                    m = new YO(g),
                    n = _.um(260),
                    p = new rJ(g),
                    r = new rJ(g),
                    v = new rJ(g),
                    w = _.um(150),
                    x = PA(),
                    B = Vt(g, l, h, k, n, e, m, p, w),
                    C = _.um(221),
                    F = new TN,
                    G = new UM,
                    P, R, K, Z = null != (K = null == (P = B.Ib) ? void 0 : null == (R = P.td) ? void 0 : R.yb) ? K : new Yp,
                    qa = new XP(g, l, h, k, m, x, e, p, n, C, F, G, B, Z);
                _.E(kF) && new DM(g, p, k, l);
                var wa = bn().g;
                rt(g, h, qa, wa, l, r, v, e, G, Z);
                Ro(g, d, h);
                window.setTimeout(function() {
                    for (var aa = window.document.scripts, ha = 0, vb = 0, Ta = 0; Ta < aa.length; Ta++) aa[Ta].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? ha++ : aa[Ta].src.match("www.googletagservices.com/tag/js/gpt.js") && vb++;
                    1 < ha && 0 === vb || 1 < vb && 0 === ha ? O(h, UK()) : 0 < vb && 0 < ha && h.error(VK())
                }, 1E3);
                Ys();
                if (_.E(kF) || _.If(El).g) Nv(), Rv();
                Uo(g)
            }
        } catch (aa) {
            Gl(c, 106, aa)
        }
    })();
    _.lQ = _.t.requestAnimationFrame || _.t.webkitRequestAnimationFrame;
    _.mQ = !!_.lQ && !/'iPhone'/.test(_.t.navigator.userAgent);
    _.nQ = function(a, b, c) {
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
    _.T(_.nQ, _.V);
}).call(this, {});