(function(_) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
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
    var ca, da, ja, ka, ma, na, pa, oa, ra, za, Ia, Ka, Oa, Qa, Sa, Xa, Va, Ya, Za, $a, bb, cb, fb, gb, ib, jb, kb, mb, nb, rb, sb, vb, xb, zb, Bb, Eb, Ib, Kb, Jb, Lb, Mb, Fb, Nb, Rb, Sb, Vb, Wb, Yb, Zb, ac, fc, gc, kc, mc, nc, pc, qc, sc, tc, vc, xc, yc, Ac, Cc, Ec, Ic, Jc, Lc, Wc, Xc, Yc, Zc, Uc, $c, Nc, Mc, ad, bd, cd, fd, gd, od, id, qd, rd, td, wd, xd, zd, Ad, Bd, Fd, Hd, Gd, Od, Qd, Pd, Sd, Rd, Td, Vd, yd, $d, ae, be, ee, je, fe, he, ie, ke, le, ne, oe, pe, te, De, Ee, ge, Fe, Ge, He, Je, Ke, Le, Me, Qe, Re, Se, Oe, Ze, Pe, $e, df, gf, jf, nf, of , Bf, Gf, If, Kf, Of, Qf, Rf, Vf, Wf, Xf, Zf, $f, ag, bg, cg, fg, jg, lg, kg, pg, rg, Gg, Jg, Kg, Og, Pg, Sg, Vg, Wg, Yg, $g, bh, ch, fh, gh, kh, lh, nh, ph, oh, rh, sh, th, vh, wh, xh, yh, zh, Ah, Rh, Th, Xh, Vh, $h, di, ei, fi, bi, ci, gi, hi, ri, pi, ui, Ci, ii, Li, Wi, Xi, aj, gj, ij, jj, mj, pj, uj, vj, Ej, Hj, Ij, Jj, Kj, Lj, Mj, Nj, Oj, Uj, Xj, Vj, Yj, Wj, Zj, bk, ek, gk, hk, kk, ik, nk, ok, pk, tk, uk, Ak, Bk, Mk, Sk, Qk, Rk, Xk, al, cl, dl, el, gl, kl, rl, nl, hl, zl, xl, yl, Bl, Cl, Fl, Ml, Pl, Ql, L, Rl, Xl, Vl, hm, O, jm, km, lm, nm, pm, qm, xm, ym, Am, Bm, Gm, Nm, Pm, Rm, Sm, Tm, Um, Vm, Ym, bn, dn, fn, en, mn, nn, on, pn, gn, qn, hn, An, Bn, Fn, Gn, Jn, Kn, Ln, Nn, Rn, Wn, Yn, Zn, ao, bo, go, ho, io, mo, fo, oo, po, qo, so, vo, xo, yo, zo, Ao, Co, Do, Fo, Ho, Io, Go, Mo, No, Ro, So, Uo, dp, fp, hp, kp, jp, ip, up, xp, yp, zp, Ap, Cp, Ep, Fp, Gp, Ip, Jp, Lp, Kp, Np, Qp, Pp, Rp, Tp, Up, Xp, Yp, $p, cq, bq, eq, fq, gq, iq, jq, lq, kq, oq, qq, sq, uq, wq, Bq, Dq, Eq, Hq, Kq, Iq, Jq, Lq, Mq, Pq, Qq, Rq, Sq, Tq, Uq, Vq, Wq, Yq, br, dr, er, fr, ir, sr, lr, xr, yr, zr, Br, Dr, Fr, Ir, Lr, Ur, Jr, Kr, Nr, Or, Hr, Mr, Yr, bs, ds, fs, hs, ks, ms, Ra, ns, os, qs, ps, rs, ss, us, ws, xs, zs, Bs, Fs, Gs, Cs, Hs, Is, Ks, Ms, Ns, Ps, Rs, Ss, $s, at, et, ft, gt, ht, ot, qt, st, tt, ut, xt, Lt, Ut, ou, pu, ev, hv, pv, lv, mv, sv, wv, zv, Bv, Av, Qv, Tv, Uv, Vv, Wv, Yv, Xv, $v, hw, lw, rw, vw, ww, xw, yw, Aw, Bw, Cw, Dw, Fw, Gw, Hw, Ow, Pw, Qw, Nf, Sw, Vw, Tw, Uw, Ww, Xw;
    ca = function(a) {
        return function() {
            return _.ba[a].apply(this, arguments)
        }
    };
    da = function() {
        var a = _.t.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    ja = function(a) {
        return fa ? ia ? ia.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    };
    ka = function(a) {
        return -1 != da().indexOf(a)
    };
    ma = function() {
        return fa ? !!ia && 0 < ia.brands.length : !1
    };
    na = function() {
        return ka("Firefox") || ka("FxiOS")
    };
    pa = function() {
        !ka("Safari") || oa() || (ma() ? 0 : ka("Coast")) || (ma() ? 0 : ka("Opera")) || (ma() ? 0 : ka("Edge")) || (ma() ? ja("Microsoft Edge") : ka("Edg/")) || ma() && ja("Opera")
    };
    oa = function() {
        return ma() ? ja("Chromium") : (ka("Chrome") || ka("CriOS")) && !(ma() ? 0 : ka("Edge")) || ka("Silk")
    };
    ra = function(a) {
        return new qa(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    _.xa = function(a) {
        var b = void 0 === b ? sa : b;
        a: if (b = void 0 === b ? sa : b, !(a instanceof _.ua)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof qa && d.Al(a)) {
                    a = va(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.wa
    };
    za = function(a) {
        for (var b = _.ya.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return va(c.join(""))
    };
    _.Ca = function(a) {
        if (Aa.test(a)) return a
    };
    _.Ea = function(a) {
        return a instanceof _.ua ? _.Da(a) : _.Ca(a)
    };
    _.Fa = function(a, b) {
        b = _.Ea(b);
        void 0 !== b && (a.href = b)
    };
    Ia = function(a, b) {
        b = _.Ha(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    _.Ja = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    Ka = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    Oa = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.La(e) ? "o" + _.Ma(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    Qa = function(a, b) {
        a.sort(b || _.Pa)
    };
    Sa = function(a) {
        for (var b = Ra, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || _.Pa;
        Qa(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    Xa = function(a, b) {
        if (!_.Ua(a) || !_.Ua(b) || a.length != b.length) return !1;
        for (var c = a.length, d = Va, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    _.Pa = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    Va = function(a, b) {
        return a === b
    };
    Ya = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    Za = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Za.apply(null, Ka(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    $a = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    bb = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    cb = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    fb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < db.length; f++) c = db[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    gb = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    ib = function(a) {
        var b = new hb;
        b.bj = a;
        return b
    };
    jb = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    kb = function(a, b) {
        if (b instanceof hb) b = b.bj;
        else throw Error("");
        a.textContent = b;
        jb(a)
    };
    mb = function(a, b) {
        a.src = _.lb(b);
        jb(a)
    };
    nb = function(a) {
        a = a(function(b) {
            b.name = b.constructor.name;
            b.stack = Error().stack
        });
        a.prototype = Object.create(Error.prototype);
        a.prototype.constructor = a
    };
    rb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (ob) {
            if (b && (pb ? !a.Bl() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
            a = (qb || (qb = new TextEncoder)).encode(a)
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
    sb = function(a) {
        _.t.setTimeout(function() {
            throw a;
        }, 0)
    };
    vb = function(a) {
        if (!tb) return ub(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    };
    xb = function(a) {
        return wb[a] || ""
    };
    zb = function(a) {
        return yb && null != a && a instanceof Uint8Array
    };
    Bb = function(a) {
        if (a !== Ab) throw Error("illegal external caller");
    };
    Eb = function() {
        return "function" === typeof BigInt
    };
    Ib = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.u(Fb(c, a)), b = c.next().value, a = c.next().value, c = b);
        Gb = c >>> 0;
        Hb = a >>> 0
    };
    Kb = function(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else Eb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + Jb(c) + Jb(a));
        return c
    };
    Jb = function(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    };
    Lb = function() {
        var a = Gb,
            b = Hb;
        b & 2147483648 ? Eb() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = _.u(Fb(a, b)), a = b.next().value, b = b.next().value, a = "-" + Kb(a, b)) : a = Kb(a, b);
        return a
    };
    Mb = function(a) {
        if (16 > a.length) Ib(Number(a));
        else if (Eb()) a = BigInt(a), Gb = Number(a & BigInt(4294967295)) >>> 0, Hb = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Hb = Gb = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Hb *= 1E6, Gb = 1E6 * Gb + d, 4294967296 <= Gb && (Hb += _.x(Math, "trunc").call(Math, Gb / 4294967296), Hb >>>= 0, Gb >>>= 0);
            b && (b = _.u(Fb(Gb, Hb)), a = b.next().value, b = b.next().value, Gb = a, Hb = b)
        }
    };
    Fb = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    Nb = function(a) {
        return Array.prototype.slice.call(a)
    };
    Rb = function(a) {
        return "function" === typeof _.z.Symbol && "symbol" === typeof(0, _.z.Symbol)() ? (0, _.z.Symbol)() : a
    };
    Sb = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    Vb = function(a) {
        Ub(a, 34);
        return a
    };
    Wb = function(a) {
        Ub(a, 32);
        return a
    };
    Yb = function(a, b) {
        Xb(b, (a | 0) & -14591)
    };
    Zb = function(a, b) {
        Xb(b, (a | 34) & -14557)
    };
    ac = function(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    fc = function(a) {
        return !(!a || "object" !== typeof a || a.Fl !== bc)
    };
    gc = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    kc = function(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new hc(a, Ab) : ic();
            else if (a.constructor !== hc)
            if (zb(a)) a = a.length ? new hc(c ? a : new Uint8Array(a), Ab) : ic();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    mc = function(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = lc(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? _.x(b, "includes").call(b, c) : b.has(c)))) return !1;
        Xb(a, d | 1);
        return !0
    };
    nc = function(a) {
        if (a & 2) throw Error();
    };
    pc = function(a) {
        if (oc) throw Error("");
        oc = function(b) {
            _.t.setTimeout(function() {
                a(b)
            }, 0)
        }
    };
    qc = function(a) {
        if (oc) try {
            oc(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    };
    sc = function() {
        var a = Error();
        rc(a, "incident");
        oc ? qc(a) : sb(a)
    };
    tc = function(a) {
        a = Error(a);
        rc(a, "warning");
        qc(a);
        return a
    };
    _.uc = function(a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
        return a
    };
    vc = function(a) {
        if (null == a || "number" === typeof a) return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    };
    xc = function(a) {
        if ("boolean" !== typeof a) throw Error("Expected boolean but got " + wc(a) + ": " + a);
        return a
    };
    yc = function(a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    };
    Ac = function(a) {
        var b = typeof a;
        return "number" === b ? _.x(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : zc.test(a)
    };
    _.Bc = function(a) {
        if (!_.x(Number, "isFinite").call(Number, a)) throw tc("enum");
        return a | 0
    };
    Cc = function(a) {
        return null == a ? a : _.Bc(a)
    };
    _.Dc = function(a) {
        return null == a ? a : _.x(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Ec = function(a) {
        if ("number" !== typeof a) throw tc("int32");
        if (!_.x(Number, "isFinite").call(Number, a)) throw tc("int32");
        return a | 0
    };
    Ic = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.x(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Jc = function(a) {
        if ("number" !== typeof a) throw tc("uint32");
        if (!_.x(Number, "isFinite").call(Number, a)) throw tc("uint32");
        return a >>> 0
    };
    _.Kc = function(a) {
        return null == a ? a : Jc(a)
    };
    Lc = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.x(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    };
    _.Vc = function(a, b) {
        b = !!b;
        if (!Ac(a)) throw tc("int64");
        return "string" === typeof a ? Mc(a) : b ? Nc(a) : Uc(a)
    };
    Wc = function(a) {
        return null == a ? a : _.Vc(a)
    };
    Xc = function(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    };
    Yc = function(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    };
    Zc = function(a) {
        if (0 > a) {
            Ib(a);
            var b = Kb(Gb, Hb);
            a = Number(b);
            return _.x(Number, "isSafeInteger").call(Number, a) ? a : b
        }
        if (Xc(String(a))) return a;
        Ib(a);
        return 4294967296 * Hb + (Gb >>> 0)
    };
    Uc = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (!_.x(Number, "isSafeInteger").call(Number, a)) {
            Ib(a);
            var b = Gb,
                c = Hb;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    };
    $c = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        return 0 <= a && _.x(Number, "isSafeInteger").call(Number, a) ? a : Zc(a)
    };
    Nc = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (_.x(Number, "isSafeInteger").call(Number, a)) a = String(a);
        else {
            var b = String(a);
            Yc(b) ? a = b : (Ib(a), a = Lb())
        }
        return a
    };
    Mc = function(a) {
        var b = _.x(Math, "trunc").call(Math, Number(a));
        if (_.x(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        Yc(a) || (Mb(a), a = Lb());
        return a
    };
    ad = function(a) {
        var b = _.x(Math, "trunc").call(Math, Number(a));
        if (_.x(Number, "isSafeInteger").call(Number, b) && 0 <= b) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        Xc(a) || (Mb(a), a = Kb(Gb, Hb));
        return a
    };
    bd = function(a) {
        if (null == a) return a;
        if (Ac(a)) {
            var b;
            "number" === typeof a ? b = Uc(a) : b = Mc(a);
            return b
        }
    };
    cd = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (null == a) return a;
        if (Ac(a)) return "string" === typeof a ? Mc(a) : b ? Nc(a) : Uc(a)
    };
    _.dd = function(a) {
        if (null != a) {
            var b = !!b;
            if (!Ac(a)) throw tc("uint64");
            "string" === typeof a ? a = ad(a) : b ? (a = _.x(Math, "trunc").call(Math, a), 0 <= a && _.x(Number, "isSafeInteger").call(Number, a) ? a = String(a) : (b = String(a), Xc(b) ? a = b : (Ib(a), a = Kb(Gb, Hb)))) : a = $c(a)
        }
        return a
    };
    _.ed = function(a) {
        if ("string" !== typeof a) throw Error();
        return a
    };
    fd = function(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    };
    gd = function(a) {
        return null == a || "string" === typeof a ? a : void 0
    };
    od = function(a, b, c, d) {
        if (null != a && "object" === typeof a && a.Gg === hd) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? id(b) : new b : void 0;
        var e = c = lc(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && Xb(a, e);
        return new b(a)
    };
    id = function(a) {
        var b = a[pd];
        if (b) return b;
        b = new a;
        Vb(b.D);
        return a[pd] = b
    };
    qd = function(a, b, c) {
        if (b) return xc(a);
        var d;
        return null != (d = yc(a)) ? d : c ? !1 : void 0
    };
    rd = function(a, b, c) {
        if (b) return _.ed(a);
        var d;
        return null != (d = gd(a)) ? d : c ? "" : void 0
    };
    td = function(a, b) {
        sd = b;
        a = new a(b);
        sd = void 0;
        return a
    };
    wd = function(a) {
        switch (typeof a) {
            case "boolean":
                return ud || (ud = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? vd || (vd = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    };
    _.A = function(a, b, c) {
        null == a && (a = sd);
        sd = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            d = lc(a);
            if (d & 2048) throw Error("farr");
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (gc(c[f])) {
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
        Xb(a, d);
        return a
    };
    xd = function(a) {
        return a
    };
    zd = function(a, b, c, d, e, f) {
        a = od(a, d, c, f);
        e && (a = yd(a));
        return a
    };
    Ad = function(a) {
        return a
    };
    Bd = function(a) {
        return [a, this.get(a)]
    };
    Fd = function() {
        return Cd || (Cd = new Dd(Vb([]), void 0, void 0, void 0, Ed))
    };
    Hd = function(a, b) {
        return Gd(b)
    };
    Gd = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (mc(a, void 0, 0)) return
                    } else {
                        if (zb(a)) return vb(a);
                        if (a instanceof hc) return Id(a);
                        if (a instanceof Dd) return Jd(a)
                    }
        }
        return a
    };
    Od = function(a, b, c) {
        a = Nb(a);
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
    Qd = function(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = mc(a, void 0, 0) ? void 0 : e && lc(a) & 2 ? a : Pd(a, b, c, void 0 !== d, e);
            else if (gc(a)) {
                var f = {},
                    g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Qd(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    };
    Pd = function(a, b, c, d, e) {
        var f = d || c ? lc(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = Nb(a);
        for (var g = 0; g < a.length; g++) a[g] = Qd(a[g], b, c, d, e);
        c && c(f, a);
        return a
    };
    Sd = function(a) {
        return Qd(a, Rd, void 0, void 0, !1)
    };
    Rd = function(a) {
        return a.Gg === hd ? a.toJSON() : a instanceof Dd ? Jd(a, Sd) : Gd(a)
    };
    Td = function(a, b, c) {
        c = void 0 === c ? Zb : c;
        if (null != a) {
            if (yb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = lc(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? Xb(a, (d | 34) & -12293) : Pd(a, Td, d & 4 ? Zb : c, !0, !0)
            }
            a.Gg === hd ? (c = a.D, d = Ud(c), a = d & 2 ? a : td(a.constructor, Vd(c, d, !0))) : a instanceof Dd && !(a.Nd & 2) && (c = Vb(Wd(a, Td)), a = new Dd(c, a.Jf, a.ae, a.vh));
            return a
        }
    };
    _.Xd = function(a) {
        var b = a.D;
        return td(a.constructor, Vd(b, Ud(b), !1))
    };
    Vd = function(a, b, c) {
        var d = c || b & 2 ? Zb : Yb,
            e = !!(b & 32);
        a = Od(a, b, function(f) {
            return Td(f, e, d)
        });
        Ub(a, 32 | (c ? 2 : 0));
        return a
    };
    yd = function(a) {
        var b = a.D,
            c = Ud(b);
        return c & 2 ? td(a.constructor, Vd(b, c, !1)) : a
    };
    _.Yd = function(a) {
        var b = a.D,
            c = Ud(b);
        return c & 2 ? a : td(a.constructor, Vd(b, c, !0))
    };
    $d = function(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (null == c) return !1;
        !d && 0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[Zd] = (a.constructor[Zd] | 0) + 1) && sc();
        return 0 === c ? !1 : !(c & b)
    };
    ae = function(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    };
    be = function(a, b, c, d, e) {
        var f = ac(b);
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
            g !== b && Xb(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    };
    ee = function(a, b, c, d) {
        var e = b & 2,
            f = ce(a, b, c, d);
        Array.isArray(f) || (f = de);
        var g = !!(b & 32),
            h = lc(f);
        0 === h && g && !e ? (h |= 33, Xb(f, h)) : h & 1 || (h |= 1, Xb(f, h));
        if (e) h & 2 || Vb(f), Object.freeze(f);
        else if (2 & h || 2048 & h) f = Nb(f), e = 1, g && (e |= 32), Xb(f, e), be(a, b, c, f, d);
        return f
    };
    je = function(a, b, c, d, e, f, g) {
        var h = a.D,
            k = Ud(h);
        d = 2 & k ? 1 : d;
        f = !!f;
        var l = fe(h, k, b, e),
            m = lc(l);
        if ($d(a, m, g, f)) {
            if (4 & m || Object.isFrozen(l)) l = Nb(l), m = ge(m, k, f), k = be(h, k, b, l, e);
            for (var n = a = 0; a < l.length; a++) {
                var p = c(l[a]);
                null != p && (l[n++] = p)
            }
            n < a && (l.length = n);
            m = he(m, k, f);
            m = Sb(m, 20, !0);
            m = Sb(m, 4096, !1);
            m = Sb(m, 8192, !1);
            g && (m = Sb(m, g, !0));
            Xb(l, m);
            2 & m && Object.freeze(l)
        }
        ie(m) || (g = m, (c = 1 === d) ? m = Sb(m, 2, !0) : f || (m = Sb(m, 32, !1)), m !== g && Xb(l, m), c && Object.freeze(l));
        2 === d && ie(m) && (l = Nb(l), m = ge(m, k, f), Xb(l, m), be(h, k, b, l, e));
        return l
    };
    fe = function(a, b, c, d) {
        a = ce(a, b, c, d);
        return Array.isArray(a) ? a : de
    };
    he = function(a, b, c) {
        0 === a && (a = ge(a, b, c));
        return a = Sb(a, 1, !0)
    };
    ie = function(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    };
    ke = function(a) {
        return kc(a, !0, !0)
    };
    le = function(a) {
        return kc(a, !0, !1)
    };
    ne = function(a, b, c, d, e, f) {
        var g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (null == h) {
                if (k) {
                    a = Fd();
                    break a
                }
                h = []
            } else if (h.constructor === Dd) {
                if (0 == (h.Nd & 2) || k) {
                    a = h;
                    break a
                }
                h = Wd(h)
            } else Array.isArray(h) ? c = !!(lc(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Fd();
                    break a
                }
                c || (c = !0, Vb(h))
            } else if (c) {
                c = !1;
                k = Nb(h);
                for (h = 0; h < k.length; h++) {
                    var l = k[h] = Nb(k[h]);
                    Array.isArray(l[1]) && (l[1] = Vb(l[1]))
                }
                h = k
            }
            c || (lc(h) & 64 ? me(h, 32) : 32 & b && Wb(h));f = new Dd(h, e, rd, f);be(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !g && e && (a.nk = !0);
        return a
    };
    oe = function(a, b, c) {
        a = a.D;
        var d = Ud(a);
        return ne(a, d, ce(a, d, b), b, void 0, c)
    };
    pe = function(a, b, c) {
        a = a.D;
        var d = Ud(a);
        return ne(a, d, ce(a, d, b), b, c)
    };
    _.qe = function(a, b, c, d) {
        var e = a.D,
            f = Ud(e);
        nc(f);
        if (null == c) return be(e, f, b), a;
        var g = lc(c),
            h = g,
            k = !!(2 & g) || Object.isFrozen(c),
            l = !k && !1;
        if ($d(a, g))
            for (g = 21, k && (c = Nb(c), h = 0, g = ge(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = Nb(c), h = 0, g = ge(g, f, !0));
        g !== h && Xb(c, g);
        be(e, f, b, c);
        return a
    };
    _.re = function(a, b, c, d) {
        var e = a.D,
            f = Ud(e);
        nc(f);
        be(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    };
    _.se = function(a, b, c, d) {
        var e = a.D,
            f = Ud(e);
        nc(f);
        b = ee(e, f, b);
        e = lc(b);
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    };
    te = function(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != ce(a, b, f) && (0 !== d && (b = be(a, b, d)), d = f)
        }
        return d
    };
    De = function(a, b, c, d) {
        a = a.D;
        var e = Ud(a),
            f = ce(a, e, c, d);
        b = od(f, b, !1, e);
        b !== f && null != b && be(a, e, c, b, d);
        return b
    };
    Ee = function(a, b, c, d, e, f) {
        var g = !!(2 & b),
            h = g ? 1 : 2,
            k = 1 === h;
        h = 2 === h;
        e = !!e;
        f && (f = !g);
        g = fe(a, b, d);
        var l = lc(g),
            m = !!(4 & l);
        if (!m) {
            l = he(l, b, e);
            var n = g,
                p = b,
                r;
            (r = !!(2 & l)) && (p = Sb(p, 2, !0));
            for (var v = !r, w = !0, y = 0, B = 0; y < n.length; y++) {
                var C = od(n[y], c, !1, p);
                if (C instanceof c) {
                    if (!r) {
                        var G = !!(lc(C.D) & 2);
                        v && (v = !G);
                        w && (w = G)
                    }
                    n[B++] = C
                }
            }
            B < y && (n.length = B);
            l = Sb(l, 4, !0);
            l = Sb(l, 16, w);
            l = Sb(l, 8, v);
            Xb(n, l);
            r && Object.freeze(n)
        }
        c = !!(8 & l) || k && !g.length;
        if (f && !c) {
            ie(l) && (g = Nb(g), l = ge(l, b, e), b = be(a, b, d, g));
            f = g;
            c = l;
            for (n = 0; n < f.length; n++) l = f[n], p = yd(l), l !== p && (f[n] = p);
            c = Sb(c, 8, !0);
            c = Sb(c, 16, !f.length);
            Xb(f, c);
            l = c
        }
        ie(l) || (f = l, k ? l = Sb(l, !g.length || 16 & l && (!m || 32 & l) ? 2 : 2048, !0) : e || (l = Sb(l, 32, !1)), l !== f && Xb(g, l), k && Object.freeze(g));
        h && ie(l) && (g = Nb(g), l = ge(l, b, e), Xb(g, l), be(a, b, d, g));
        return g
    };
    ge = function(a, b, c) {
        a = Sb(a, 2, !!(2 & b));
        a = Sb(a, 32, !!(32 & b) && c);
        return a = Sb(a, 2048, !1)
    };
    Fe = function(a, b, c, d) {
        a = a.D;
        var e = Ud(a);
        nc(e);
        b = Ee(a, e, c, b, !0);
        c = null != d ? d : new c;
        b.push(c);
        lc(c.D) & 2 ? me(b, 8) : me(b, 16);
        return c
    };
    Ge = function(a) {
        return cd(a, !0)
    };
    He = function(a, b) {
        return null != a ? a : b
    };
    Je = function(a, b, c) {
        var d = Ie ? void 0 : a.constructor.da;
        var e = Ud(c ? a.D : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (gc(c = b[a - 1])) {
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
                            if (mc(m, d, +l) || fc(m) && 0 === m.size) m = null;
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
            if (!(null == c || mc(c, d, p) || fc(c) && 0 === c.size)) break;
            var r = !0
        }
        if (!f && !r) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };
    Ke = function(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        Ub(b, 128);
        return td(a, Wb(b))
    };
    Le = function(a, b) {
        if (Array.isArray(b)) {
            var c = lc(b);
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                null != f && (b[e++] = f)
            }
            e < d && (b.length = e);
            Xb(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    };
    Me = function(a, b, c) {
        a[b] = c
    };
    Qe = function(a) {
        var b = a[Ne];
        if (!b) {
            var c = Oe(a);
            b = function(d, e) {
                return Pe(d, e, c)
            };
            a[Ne] = b
        }
        return b
    };
    Re = function(a) {
        return a.g
    };
    Se = function(a, b) {
        var c, d, e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d || (d = Oe(b).g), c || (c = Qe(b)))
        }
    };
    Oe = function(a) {
        var b = a[Te];
        if (b) return b;
        b = a[Te] = {};
        var c = Re,
            d = Se;
        var e = void 0 === e ? Me : e;
        b.g = wd(a[0]);
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
            if (g instanceof Ue) var m = g;
            else m = Ve, f--;
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
        We in a && Xe in a && Te in a && (a.length = 0);
        return b
    };
    Ze = function(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Uk)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof Ue ? c : [Ye, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = Qe(c),
                        f = Oe(c).g;
                    c = (c = a.A) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    };
    Pe = function(a, b, c) {
        for (var d = Ud(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var l = h - e,
                    m = Ze(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (d = +n, _.x(Number, "isNaN").call(Number, d) || (e = a[n], null != e && (f = Ze(c, d)) && f(b, e, d)))
        }
    };
    $e = function(a) {
        return new Ue(a, !1)
    };
    df = function(a, b, c) {
        a: if (null != b) {
            if (Ac(b)) {
                if ("string" === typeof b) {
                    b = Mc(b);
                    break a
                }
                if ("number" === typeof b) {
                    b = Uc(b);
                    break a
                }
            }
            b = void 0
        }null != b && ("string" === typeof b && af(b), null != b && (bf(a, c, 0), "number" === typeof b ? (a = a.g, Ib(b), cf(a, Gb, Hb)) : (c = af(b), cf(a.g, c.A, c.g))))
    };
    gf = function(a, b, c, d, e) {
        b = b instanceof _.D ? b.D : Array.isArray(b) ? _.A(b, d[0], d[1]) : void 0;
        null != b && (c = ef(a, c), e(b, a), ff(a, c))
    };
    jf = function(a) {
        var b = _.hf();
        if (!a) throw Error(b && b() || String(a));
    };
    _.hf = function() {
        var a = kf;
        kf = void 0;
        return a
    };
    nf = function(a) {
        return function() {
            var b = new lf;
            Pe(this.D, b, Oe(a));
            mf(b, b.g.end());
            for (var c = new Uint8Array(b.A), d = b.l, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.l = [c];
            return c
        }
    }; of = function(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = td(a, Wb(b))
            }
            return b
        }
    };
    Bf = function(a) {
        var b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            je: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    };
    _.Df = function(a) {
        var b = _.ya.apply(1, arguments);
        if (0 === b.length) return Cf(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Cf(c)
    };
    _.Ef = function(a, b) {
        a = Bf(_.lb(a).toString());
        var c = a.je,
            d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Cf(a.path + c + a.hash)
    };
    Gf = function(a) {
        var b = {};
        b.winner_qid = a.getEscapedQemQueryId();
        b.cid = _.E(a, 19);
        b.ecrs = _.E(a, 11);
        return {
            Tj: "https://googleads.g.doubleclick.net/td/activeview?" + _.x(Object, "entries").call(Object, b).map(function(c) {
                var d = _.u(c);
                c = d.next().value;
                d = d.next().value;
                return encodeURIComponent(c) + "=" + encodeURIComponent(d)
            }).join("&") + "&acvw=[VIEWABILITY]",
            tl: 40,
            metadata: new Ff
        }
    };
    If = function(a) {
        return a ? a.passive && Hf() ? a : a.capture || !1 : !1
    };
    Kf = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new _.z.Promise(function(d, e) {
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
            mb(g, a);
            c && "complete" !== b.document.readyState ? _.Jf(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    Of = function(a) {
        var b, c, d, e, f, g;
        return _.Lf(function(h) {
            switch (h.g) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.g + ("&tv=" + a.A + "&st=") + a.Dd, c = void 0, h.l = 2, h.yield(Mf(b), 4);
                case 4:
                    c = h.A;
                    h.g = 3;
                    h.l = 0;
                    break;
                case 2:
                    Nf(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Zd || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.l ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.j,
                        hk: c.bg_hash_basename,
                        gk: c.bg_binary,
                        El: a.g + "_" + a.A,
                        Zd: d,
                        Dd: a.Dd,
                        ef: e,
                        Cf: f,
                        df: g
                    }) : h.return(void 0)
            }
        })
    };
    Qf = function(a) {
        var b;
        _.Lf(function(c) {
            if (1 == c.g) return c.yield(Of(a), 2);
            if (b = c.A) {
                var d = b,
                    e = "sodar2";
                e = void 0 === e ? "sodar2" : e;
                var f = window,
                    g = f.GoogleGcLKhOms;
                g && "function" === typeof g.push || (g = f.GoogleGcLKhOms = []);
                var h = {};
                g.push((h._ctx_ = d.context, h._bgv_ = d.hk, h._bgp_ = d.gk, h._li_ = d.El, h._jk_ = d.Zd, h._st_ = d.Dd, h._rc_ = d.ef, h._dl_ = d.Cf, h._g2_ = d.df, h));
                if (d = f.GoogleDX5YKUSk) f.GoogleDX5YKUSk = void 0, d[1]();
                e = _.Df(Pf, e);
                Kf(e)
            }
            return c.return(b)
        })
    };
    Rf = function(a) {
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
    _.H = function(a) {
        return _.Sf(Tf).A(a.g, a.defaultValue)
    };
    _.Uf = function(a) {
        return _.Sf(Tf).l(a.g, a.defaultValue)
    };
    Vf = function(a) {
        return _.Sf(Tf).j(a.g, a.defaultValue)
    };
    Wf = function(a) {
        return _.Sf(Tf).M(a.g, a.defaultValue)
    };
    Xf = function(a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    Zf = function(a) {
        return Yf(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (_.I = b.toString(2), _.x(_.I, "padStart")).call(_.I, 8, "0")
        }).join("")
    };
    $f = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    };
    ag = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };
    bg = function(a, b) {
        a = Zf(a);
        return a.length < b ? _.x(a, "padEnd").call(a, b, "0") : a
    };
    cg = function(a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    _.dg = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    };
    _.eg = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    fg = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    _.gg = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(fg("domLoading", a) || Infinity, fg("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(fg("responseEnd", a), fg("navigationStart", a)) : b
    };
    jg = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.hg("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && Ia(a.google_image_requests, f);
                _.ig(f, "load", g);
                _.ig(f, "error", g)
            };
            _.Jf(f, "load", g);
            _.Jf(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    lg = function(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.nc] = d.Yb, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Qb
            }).map(c), b.toJSON(), a.filter(function(d) {
                return !d.Qb
            }).map(c)])
        } catch (d) {
            return kg(d, b), ""
        }
    };
    kg = function(a, b) {
        try {
            mg({
                m: _.ng(a instanceof Error ? a : Error(String(a))),
                b: _.og(b, 1, 0) || null,
                v: _.E(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    };
    pg = function(a, b, c, d, e, f) {
        try {
            var g = a.g,
                h = _.hg("SCRIPT", g);
            h.async = !0;
            mb(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function() {
                0 < c ? pg(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    };
    rg = function(a, b, c, d) {
        c = void 0 === c ? function() {} : c;
        d = void 0 === d ? function() {} : d;
        pg(qg(a), b, 0, !1, c, d)
    };
    Gg = function(a) {
        return a[_.x(_.z.Symbol, "iterator")]()
    };
    Jg = function(a) {
        var b = Hg(Ig(a.location.href));
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    };
    Kg = function(a) {
        var b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = Hg(Ig(a.location.href)).get("fctype")) && -1 !== b.indexOf(a) ? a : null
    };
    Og = function(a) {
        var b = Ig(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        _.x(Object, "assign").call(Object, a, c);
        if (a.port && ":" === a.port[0]) throw Error("port should not start with ':'");
        a.hash && "#" != a.hash[0] && (a.hash = "#" + a.hash);
        c.search ? "?" != c.search[0] && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + Ng(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol + "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = Ig(b).toString();
        "/" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
        return 1E3 >= a.toString().length ? a : null
    };
    Pg = function(a) {
        a && "function" == typeof a.ya && a.ya()
    };
    Sg = function(a) {
        a = Qg(a.data.__fciReturn);
        return {
            payload: a,
            Xg: _.Rg(a, 1)
        }
    };
    Vg = function() {
        var a = da();
        return a ? _.Tg("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return _.Ug(a, b)
        }) || _.Ug(a, "OMI/") && !_.Ug(a, "XiaoMi/") ? !0 : _.Ug(a, "Presto") && _.Ug(a, "Linux") && !_.Ug(a, "X11") && !_.Ug(a, "Android") && !_.Ug(a, "Mobi") : !1
    };
    Wg = function() {
        return function(a) {
            return 0 === a
        }
    };
    Yg = function() {
        var a = Xg;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    $g = function() {
        var a = Zg;
        return function(b) {
            return b instanceof a
        }
    };
    bh = function(a) {
        return function(b) {
            if (!ah(b)) return !1;
            for (var c = _.u(_.x(Object, "entries").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
                var e = _.u(d.value);
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
    ch = function() {
        return function(a) {
            return Array.isArray(a)
        }
    };
    fh = function() {
        return function(a) {
            return dh(a) ? a.every(function(b) {
                return eh(b)
            }) : !1
        }
    };
    gh = function(a) {
        return !!a && a.top === a
    };
    kh = function(a) {
        a = void 0 === a ? _.t : a;
        var b = new hh;
        "SVGElement" in a && "createElementNS" in a.document && b.set(0);
        var c = ih();
        c["allow-top-navigation-by-user-activation"] && b.set(1);
        c["allow-popups-to-escape-sandbox"] && b.set(2);
        a.crypto && a.crypto.subtle && b.set(3);
        "TextDecoder" in a && "TextEncoder" in a && b.set(4);
        return jh(b)
    };
    lh = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Xg: b.__uspapiReturn.callId
        }
    };
    nh = function(a, b) {
        b = void 0 === b ? window : b;
        if (mh(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    ph = function(a, b, c) {
        return mh(b) ? oh(a, c) : null
    };
    oh = function(a, b) {
        b = "null" !== b.origin ? b.document.cookie : null;
        return null === b ? null : (new qh({
            cookie: b
        })).get(a) || ""
    };
    rh = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Xg: b.__gppReturn.callId
        }
    };
    sh = function(a) {
        return !a || 1 === a.length && -1 === a[0]
    };
    th = function(a, b, c) {
        return b[a] || c
    };
    vh = function(a) {
        _.Sf(uh).l(a)
    };
    wh = function() {
        return _.Sf(uh).j()
    };
    xh = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.I = c.allowedFeatures(), _.x(_.I, "includes")).call(_.I, a))
    };
    yh = function(a, b, c) {
        return !!(a && "runAdAuction" in b && b.runAdAuction instanceof Function && xh("run-ad-auction", c))
    };
    zh = function(a, b) {
        return !!(a && "browsingTopics" in b && b.browsingTopics instanceof Function && xh("browsing-topics", b))
    };
    Ah = function(a, b, c) {
        c = void 0 === c ? b.document : c;
        return !!(a && "sharedStorage" in b && b.sharedStorage && xh("shared-storage", c))
    };
    Rh = function(a) {
        a = void 0 === a ? _.Bh() : a;
        return function(b) {
            return _.Qh(b + " + " + a) % 1E3
        }
    };
    Th = function(a) {
        _.Sf(Sh).g(a)
    };
    Xh = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.t : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        Uh(_.Sf(uh), a);
        Vh(b);
        Wh(_.Sf(Sh), b);
        _.Sf(Tf).g()
    };
    Vh = function(a) {
        var b = _.Sf(Tf);
        b.A = function(c, d) {
            return th(5, a, function() {
                return !1
            })(c, d, 2)
        };
        b.l = function(c, d) {
            return th(6, a, function() {
                return 0
            })(c, d, 2)
        };
        b.j = function(c, d) {
            return th(7, a, function() {
                return ""
            })(c, d, 2)
        };
        b.M = function(c, d) {
            return th(8, a, function() {
                return []
            })(c, d, 2)
        };
        b.g = function() {
            th(15, a, function() {})(2)
        }
    };
    $h = function(a) {
        try {
            var b, c, d = null == (b = a.performance) ? void 0 : null == (c = b.getEntriesByType("navigation")) ? void 0 : c[0];
            if (null == d ? 0 : d.type) {
                var e;
                return null != (e = Yh.get(d.type)) ? e : null
            }
        } catch (k) {}
        var f, g, h;
        return null != (h = Zh.get(null == (f = a.performance) ? void 0 : null == (g = f.navigation) ? void 0 : g.type)) ? h : null
    };
    di = function(a, b, c, d) {
        var e = new _.ai,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.ig(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (m) {}
            },
            h = bi(a);
        return h ? (_.Jf(a, "message", g), f = c(h), e.promise) : (c = ci(a)) ? (f = String(Math.floor(2147483647 * _.Bh())), _.Jf(a, "message", g), b(c, f), e.promise) : null
    };
    ei = function(a) {
        return di(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    fi = function(a) {
        return !!bi(a) || !!ci(a)
    };
    bi = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    ci = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    gi = function(a) {
        var b, c;
        return null != (c = (_.I = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.x(_.I, "find")).call(_.I, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    hi = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(_.Qh(a))) ? d : 0
    };
    ri = function(a, b, c, d, e) {
        var f = e.getBidResponsesForAdUnitCode;
        if (f) {
            var g, h, k, l, m, n = null != (m = null == (g = f(null != (k = b.dd) ? k : "")) ? void 0 : g.bids) ? m : null == (h = f(null != (l = b.adUnitCode) ? l : "")) ? void 0 : h.bids;
            if (null != n && n.length && (g = n.filter(function(v) {
                    var w = v.adId;
                    return v.auctionId !== c && _.x(Object, "values").call(Object, d).some(function(y) {
                        return _.x(y, "includes").call(y, w)
                    })
                }), g.length)) {
                var p, r;
                f = null == (p = e.adUnits) ? void 0 : null == (r = _.x(p, "find").call(p, function(v) {
                    v = v.code;
                    return v === b.dd || v === b.adUnitCode
                })) ? void 0 : r.mediaTypes;
                p = _.u(g);
                for (r = p.next(); !r.done; r = p.next()) r = r.value, g = ii(r, d, f), g = ji(a, ki(li(mi(ni(new oi, r.bidder), 1), 6, !0), g)), pi(r.bidder, e, g), "number" === typeof r.timeToRespond && _.qi(g, 2, Math.round(r.timeToRespond))
            }
        }
    };
    pi = function(a, b, c) {
        for (var d = []; a && !_.x(d, "includes").call(d, a);) {
            d.unshift(a);
            var e = void 0,
                f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.qe(c, 10, d, _.ed)
    };
    ui = function(a, b, c) {
        null != _.Dc(_.si(a, 3)) || (c === b.adUnitCode ? _.ti(a, 3, 1) : c === b.dd && _.ti(a, 3, 2))
    };
    Ci = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : _.og(f, 1, 0)) && _.vi(b, 5, f);
        wi(a, xi, 5) || (f ? 1 === _.og(f, 1, 0) ? yi(a, f) : yi(a, zi(Ai(Bi(new xi, e), 1), hi(c, d))) : yi(a, Ai(Bi(new xi, e), hi(c, d) ? 2 : 3)))
    };
    ii = function(a, b, c) {
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
            v = new Di;
        "number" === typeof d && (_.qi(v, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === _.Rg(v, 2) || _.qi(v, 8, d)));
        "string" === typeof f && Ei(v, 3, f);
        (_.I = ["string", "number"], _.x(_.I, "includes")).call(_.I, typeof h) && (f = new Fi, h = Ei(f, 1, String(h)), _.vi(v, 6, h));
        if ("object" === typeof k)
            for (h = _.u(["", "_" + l]), f = h.next(); !f.done; f = h.next()) {
                d = f.value;
                f = [];
                e = _.u(_.x(Object, "entries").call(Object, k));
                for (g = e.next(); !g.done; g = e.next()) {
                    g = _.u(g.value);
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
                d = Gi(v, 4, 2);
                _.qe(v, 4, d.concat(f), _.ed)
            }
        switch (n || "banner") {
            case "banner":
                _.ti(v, 5, 1);
                break;
            case "native":
                _.ti(v, 5, 2);
                break;
            case "video":
                _.ti(v, 5, 3);
                b = new Hi;
                var B;
                if ("adpod" === (null == c ? void 0 : null == (B = c.video) ? void 0 : B.context)) {
                    var C, G = null == c ? void 0 : null == (C = c.video) ? void 0 : C.adPodDurationSec;
                    _.qi(b, 1, G)
                } else C = null == c ? void 0 : null == (G = c.video) ? void 0 : G.maxduration, _.qi(b, 1, C);
                var F;
                if ("number" === typeof(null == c ? void 0 : null == (F = c.video) ? void 0 : F.skip)) {
                    var M;
                    c = !!(null == c ? 0 : null == (M = c.video) ? 0 : M.skip);
                    li(b, 2, c)
                }
                var R;
                a = null == (R = a.meta) ? void 0 : R.adServerCatId;
                R = Ei(b, 3, a);
                if ("object" !== typeof k) k = null;
                else {
                    var N, aa;
                    a = String(null != (aa = null != (N = k["hb_pb_cat_dur_" + l]) ? N : k.hb_pb_cat_dur) ? aa : "");
                    var ha, la, ea, Ga;
                    N = String(null != (Ga = null != (ea = null != (la = null != (ha = k["hb_cache_id_" + l]) ? ha : k["hb_uuid_" + l]) ? la : k.hb_cache_id) ? ea : k.hb_uuid) ? Ga : "");
                    k = a && N ? a + "_" + N : N ? N : null
                }
                Ei(R, 4, k);
                _.vi(v, 9, b)
        }
        _.x(Number, "isFinite").call(Number, p) && _.x(Number, "isFinite").call(Number, r) && (k = new Ii, r = _.Ji(k, 1, Math.round(r)), p = _.Ji(r, 2, Math.round(p)), _.vi(v, 7, p));
        "string" === typeof m && Ei(v, 1, m);
        return v
    };
    Li = function(a, b) {
        var c = new _.z.Map,
            d = function(k) {
                var l = c.get(k);
                l || (l = {}, c.set(k, l));
                return l
            },
            e = [];
        a = _.u(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.Ki(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.u(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).pm = f)
            }
        }
        d = new _.z.Map;
        a = _.u(_.x(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.u(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.pm, g && h && d.set(f, {
            latency: h - g,
            Ei: !1
        });
        e = _.u(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Ei = !0;
        return d
    };
    Wi = function(a, b, c, d, e, f, g) {
        var h = _.Uf(Mi);
        c = void 0 === c ? {} : c;
        d = void 0 === d ? new _.z.Map : d;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? new _.z.Map : f;
        g = void 0 === g ? new Ni : g;
        h = void 0 === h ? 0 : h;
        var k = new _.z.Map,
            l = (0, a.getEvents)(),
            m = l.filter(function(Ba) {
                var Na = Ba.args;
                return "auctionEnd" === Ba.eventType && Na.auctionId
            }),
            n = new Oi,
            p = function(Ba) {
                return Ba === b.dd || Ba === b.adUnitCode
            },
            r, v, w, y = null != (w = Pi.get((null != (r = b.dd) ? r : "") + (null != (v = b.adUnitCode) ? v : ""))) ? w : 0,
            B;
        m = null != (B = m.filter(function(Ba) {
            var Na, Wa, eb;
            return Number(null == (Na = Ba.args) ? void 0 : Na.timestamp) > y && (null == (Wa = Ba.args) ? void 0 : null == (eb = Wa.adUnitCodes) ? void 0 : _.x(eb, "find").call(eb, p))
        })) ? B : [];
        if (!m.length) return null;
        var C;
        if (m = null == (C = m.reduce(function(Ba, Na) {
                return Number(Na.args.timestamp) > Number(Ba.args.timestamp) ? Na : Ba
            })) ? void 0 : C.args) {
            B = void 0 === m.bidderRequests ? [] : m.bidderRequests;
            C = void 0 === m.bidsReceived ? [] : m.bidsReceived;
            var G = m.auctionId;
            m = m.timestamp;
            if (G && null != m && B.length) {
                var F, M;
                Pi.set((null != (F = b.dd) ? F : "") + (null != (M = b.adUnitCode) ? M : ""), m);
                F = Qi(n);
                a.version && Ri.test(a.version) && Ei(F, 6, a.version);
                var R, N, aa;
                if (null == (R = a.getConfig) ? 0 : null == (N = R.call(a).cache) ? 0 : null == (aa = N.url) ? 0 : aa.length) {
                    var ha, la;
                    Si(F, null == (ha = a.getConfig) ? void 0 : null == (la = ha.call(a).cache) ? void 0 : la.url)
                }
                _.vi(F, 9, g);
                g = Ti(function() {
                    return Li(l, G)
                });
                R = _.u(B);
                aa = R.next();
                for (N = {}; !aa.done; N = {
                        bidderCode: void 0,
                        vj: void 0
                    }, aa = R.next())
                    for (ha = aa.value, N.bidderCode = ha.bidderCode, la = ha.bids, aa = ha.timeout, N.vj = ha.src, ha = ha.auctionStart, la = _.u(la), B = la.next(), M = {}; !B.done; M = {
                            Ae: void 0
                        }, B = la.next())
                        if (w = B.value, M.Ae = w.bidId, v = w.transactionId, B = w.adUnitCode, m = w.getFloor, r = w.mediaTypes, w = w.ortb2Imp, M.Ae && p(B)) {
                            ui(F, b, B);
                            var ea = void 0,
                                Ga = void 0;
                            h && !_.Ui(F, 11) && "string" === typeof(null == (ea = w) ? void 0 : null == (Ga = ea.ext) ? void 0 : Ga.gpid) && Ei(F, 11, w.ext.gpid.substring(0, h));
                            v && (_.Ui(F, 4) || Ei(F, 4, v), k.has(v) || k.set(v, ha));
                            null == Vi(F, 8) && _.x(Number, "isFinite").call(Number, aa) && _.Ji(F, 8, aa);
                            w = _.x(C, "find").call(C, function(Ba) {
                                return function(Na) {
                                    return Na.requestId === Ba.Ae
                                }
                            }(M));
                            v = ji(F, function(Ba) {
                                return function() {
                                    var Na = ni(new oi, Ba.bidderCode);
                                    pi(Ba.bidderCode, a, Na);
                                    switch (Ba.vj) {
                                        case "client":
                                            _.ti(Na, 7, 1);
                                            break;
                                        case "s2s":
                                            _.ti(Na, 7, 2)
                                    }
                                    return Na
                                }
                            }(N)());
                            Ci(F, v, B, d, e, f, m);
                            w ? (mi(v, 1), "number" === typeof w.timeToRespond && _.x(Number, "isFinite").call(Number, w.timeToRespond) && _.qi(v, 2, Math.round(w.timeToRespond)), M = ii(w, c, r), ki(v, M)) : (M = g().get(M.Ae)) && !M.Ei ? (mi(v, 2), _.x(Number, "isFinite").call(Number, M.latency) && _.qi(v, 2, Math.round(M.latency))) : (M = mi(v, 3), _.x(Number, "isFinite").call(Number, aa) && _.qi(M, 2, Math.round(aa)))
                        }
                var ta;
                (null == (ta = a.getConfig) ? 0 : ta.call(a).useBidCache) && ri(F, b, G, c, a);
                return n
            }
        }
    };
    Xi = function(a, b) {
        var c, d;
        return _.Lf(function(e) {
            if (1 == e.g) return c = b ? a.filter(function(f) {
                return !f.Md
            }) : a, e.yield(_.z.Promise.all(c.map(function(f) {
                return f.Wh.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function(f) {
                return f.Md
            });
            return e.yield(_.z.Promise.race([_.z.Promise.all(d.map(function(f) {
                return f.Wh.promise
            })), new _.z.Promise(function(f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    };
    _.Yi = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.$i = function(a) {
        var b = _.Zi(a);
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    aj = function(a, b) {
        b = void 0 === b ? 420 : b;
        return (a = _.Zi(a, !0)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    _.bj = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.cj = function(a) {
        return _.bj(a).clientHeight
    };
    _.Zi = function(a, b) {
        var c = _.bj(a).clientWidth;
        return (void 0 === b ? 0 : b) ? c * _.dj(a) : c
    };
    _.ej = function(a, b) {
        var c = _.bj(a);
        return b ? (a = _.cj(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    };
    _.fj = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    gj = function(a, b, c, d) {
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
    _.hj = function(a) {
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
    ij = function(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };
    _.nj = function(a) {
        var b = a.oa,
            c = a.Jg,
            d = a.hf,
            e = a.Ih,
            f = a.wa,
            g = a.pk;
        a = 0;
        try {
            a |= b !== b.top ? 512 : 0;
            var h = Math.min(b.screen.width || 0, b.screen.height || 0);
            a |= h ? 320 > h ? 8192 : 0 : 2048;
            a |= b.navigator && jj(b.navigator.userAgent) ? 1048576 : 0;
            if (c) {
                h = a;
                var k = b.innerHeight;
                var l = _.dj(b) * k >= c;
                var m = h | (l ? 0 : 1024)
            } else m = a | (_.Yi(b) ? 0 : 8);
            a = m;
            a |= aj(b, d)
        } catch (n) {
            a |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = _.hj({
                    Df: 0,
                    Le: b.innerWidth,
                    nf: 3,
                    Ef: 0,
                    Me: Math.min(Math.round(b.innerWidth / 320 * 50), kj) + 15,
                    pf: 3
                });
                null != lj(mj(b, c), d) && (a |= 16777216);
                break;
            case 1:
                c = f, c = void 0 === c ? null : c, d = b.innerWidth, e = b.innerHeight, m = Math.min(Math.round(b.innerWidth / 320 * 50), kj) + 15, l = _.hj({
                    Df: 0,
                    Le: d,
                    nf: 3,
                    Ef: e - m,
                    Me: e,
                    pf: 3
                }), 25 < m && l.push({
                    x: d - 25,
                    y: e - 25
                }), null != lj(mj(b, c), l) && (a |= 16777216)
        }
        g && (f = void 0 === f ? null : f, f = void 0 === f ? null : f, g = b.innerHeight, g = _.hj({
            Df: 0,
            Le: b.innerWidth,
            nf: 10,
            Ef: g - 66,
            Me: g,
            pf: 10
        }), g = null != lj(mj(b, f), g));
        g && (a |= 16777216);
        return a
    };
    jj = function(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    };
    mj = function(a, b) {
        return new _.oj(a, {
            ei: pj(a, void 0 === b ? null : b)
        })
    };
    pj = function(a, b) {
        if (b = void 0 === b ? null : b) {
            var c = b;
            return function(d, e, f) {
                var g, h;
                _.qj(c, "ach_evt", {
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
            if (!Array.isArray(d) || _.Tg(d, function(e) {
                    return !_.x(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = uj(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    Ej = function(a) {
        var b = _.wj(new _.xj, a.ob);
        b = yj(b, 4, _.zj, Wc(a.Kl));
        b = _.Aj(b, 11, a.Ea);
        b = _.Bj(b, 8, a.pvsid);
        b = _.Bj(b, 7, a.Rf);
        b = _.Aj(b, 9, a.Gb);
        var c = _.Cj(b, _.Dj, 5);
        _.se(c, 1, _.Bc, a.fb);
        return b
    };
    _.Fj = function(a) {
        var b = _.wj(new _.xj, a.ob);
        b = yj(b, 3, _.zj, Cc(a.U));
        b = _.Aj(b, 11, a.Ea);
        b = _.Bj(b, 8, a.pvsid);
        b = _.Bj(b, 7, a.Rf);
        b = _.Aj(b, 9, a.Gb);
        var c = _.Cj(b, _.Dj, 5);
        _.se(c, 1, _.Bc, a.fb);
        return b
    };
    Hj = function(a, b) {
        return null !== _.Gj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        }, !0)
    };
    Ij = function(a, b) {
        return _.Gj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position
        }, !0)
    };
    Jj = function(a) {
        for (var b = [], c = _.u(a.document.querySelectorAll("*")), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a.getComputedStyle(d, null);
            "fixed" === e.position && "none" !== e.display && "hidden" !== e.visibility && b.push(d)
        }
        return b
    };
    Kj = function(a, b) {
        b = b.getBoundingClientRect();
        var c = b.left,
            d = b.bottom,
            e = b.right;
        return 0 <= b.top && 0 <= c && d <= a.innerHeight && e <= a.innerWidth
    };
    Lj = function(a) {
        return Math.round(10 * Math.round(a / 10))
    };
    Mj = function(a) {
        return a.position + "-" + Lj(a.ia) + "x" + Lj(a.ra) + "-" + Lj(a.scrollY + a.rd) + "Y"
    };
    Nj = function(a) {
        return "f-" + Mj({
            position: a.position,
            rd: a.rd,
            scrollY: 0,
            ia: a.ia,
            ra: a.ra
        })
    };
    Oj = function(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    };
    Uj = function(a, b, c) {
        var d = _.Pj(c.oa).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.ra),
                    g = Math.max(e.left - 10, 0),
                    h = Math.min(e.right + 10, c.ia),
                    k = .3 * c.ia;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (0 < h && g < k) {
                        var l = Nj({
                            position: "left",
                            rd: e,
                            ia: c.ia,
                            ra: c.ra
                        });
                        b.set(l, Oj(b.get(l), g))
                    }
                    if (g < c.ia && h > c.ia - k) {
                        l = Nj({
                            position: "right",
                            rd: e,
                            ia: c.ia,
                            ra: c.ra
                        });
                        var m = c.ia - h;
                        b.set(l, Oj(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    };
    Xj = function(a, b) {
        var c = b.oa,
            d = b.Ic,
            e = "f-" + Lj(b.ia) + "x" + Lj(b.ra);
        a.has(e) || (a.set(e, 0), e = Jj(c), d ? (Vj(a, b, e.filter(function(f) {
            return Kj(c, f)
        })), Wj(c, e.filter(function(f) {
            return !Kj(c, f)
        }))) : Vj(a, b, e))
    };
    Vj = function(a, b, c) {
        var d = b.Bc,
            e = b.oa;
        _.Pj(e).sideRailProcessedFixedElements.clear();
        d = new _.z.Set([].concat(_.Ki(_.x(Array, "from").call(Array, e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), _.Ki(d)));
        c = _.u(c);
        for (e = c.next(); !e.done; e = c.next()) e = e.value, Hj(e, d) || Uj(e, a, b)
    };
    Yj = function(a) {
        if (1200 > a.ia || 650 > a.ra) return null;
        var b = _.Pj(a.oa).sideRailAvailableSpace;
        a.Di || Xj(b, {
            oa: a.oa,
            ia: a.ia,
            ra: a.ra,
            Bc: a.Bc,
            Ic: a.Ic
        });
        for (var c = [], d = .9 * a.ra, e = _.fj(a.oa), f = (a.ra - d) / 2, g = f, h = d / 7, k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            var n = g;
            var p = a.position,
                r = b,
                v = {
                    oa: a.oa,
                    ia: a.ia,
                    ra: a.ra,
                    Bc: a.Bc
                },
                w = Nj({
                    position: p,
                    rd: n,
                    ia: v.ia,
                    ra: v.ra
                }),
                y = Mj({
                    position: p,
                    rd: n,
                    scrollY: e,
                    ia: v.ia,
                    ra: v.ra
                });
            if (!r.has(y)) {
                var B = "left" === p ? 20 : v.ia - 20,
                    C = B;
                p = .3 * v.ia / 5 * ("left" === p ? 1 : -1);
                for (var G = 0; 6 > G; G++) {
                    var F = ij(v.oa.document, {
                            x: Math.round(C),
                            y: Math.round(n)
                        }),
                        M = Hj(F, v.Bc),
                        R = Ij(F, v.oa);
                    if (!M && null !== R) {
                        Uj(R, r, v);
                        r.delete(y);
                        break
                    }
                    M || (M = v, "true" === F.getAttribute("google-side-rail-overlap") ? M = !0 : "false" === F.getAttribute("google-side-rail-overlap") ? M = !1 : (R = F.offsetHeight >= .25 * M.ra, M = F.offsetWidth >= .9 * M.ia && R));
                    if (M) r.set(y, Math.round(Math.abs(C - B) + 20));
                    else if (C !== B) C -= p, p /= 2;
                    else {
                        r.set(y, 0);
                        break
                    }
                    C += p
                }
            }
            n = Oj(r.get(w), r.get(y));
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
        h = _.x(Array(c.length), "fill").call(Array(c.length), 0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[k];) l.pop();
            h[k] = 0 === l.length ? 0 : l[l.length - 1] + 1;
            l.push(k)
        }
        l = [];
        m = c.length - 1;
        k = _.x(Array(c.length), "fill").call(Array(c.length), 0);
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
    Wj = function(a, b) {
        var c = _.Pj(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(function() {
                setTimeout(function() {
                    Zj(a);
                    for (var f = _.u(c.A), g = f.next(); !g.done; g = f.next()) g = g.value, g()
                }, 500)
            });
            b = _.u(b);
            for (var e = b.next(); !e.done; e = b.next()) d.observe(e.value, {
                attributes: !0
            });
            c.g = d
        }
    };
    Zj = function(a) {
        a = _.Pj(a).sideRailAvailableSpace;
        var b = _.x(Array, "from").call(Array, _.x(a, "keys").call(a)).filter(function(d) {
            return _.x(d, "startsWith").call(d, "f-")
        });
        b = _.u(b);
        for (var c = b.next(); !c.done; c = b.next()) a.delete(c.value)
    };
    _.ak = function(a) {
        if (a.ka) return a.ka.Fb(1228, function() {
            return Yj(a)
        }) || null;
        try {
            return Yj(a)
        } catch (b) {}
        return null
    };
    bk = function(a, b, c, d, e) {
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
    ek = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.x(ck, "includes").call(ck, e.height) || (null == e ? 0 : e.maxHeight) && !_.x(dk, "includes").call(dk, e.maxHeight) || bk(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.x(ck, "includes").call(ck, g) || !!f && !_.x(dk, "includes").call(dk, f)
        }, c, d) ? !1 : !0
    };
    gk = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        fk(a, function(e) {
            return d = ek(e, b, 10, 10)
        }, c);
        return d
    };
    hk = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    kk = function(a) {
        a = ik(a);
        return _.jk(a)
    };
    ik = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    nk = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = lk.g();
        0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
        2 === e.g && (e = {}, mg(_.x(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(mk(window)), e.em = c, e.lid = b, e.eids = wh().join(), e), d), "esp"))
    };
    ok = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new _.z.Promise(function(c) {
            var d = function() {
                c(b());
                _.ig(a, "load", d)
            };
            _.Jf(a, "load", d)
        })
    };
    pk = function(a) {
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
    tk = function(a, b) {
        return _.qk(a, rk, 2).some(function(c) {
            return sk(c, 1) === b && _.Ui(c, 2)
        })
    };
    uk = function(a, b) {
        return _.qk(a, rk, 2).some(function(c) {
            return sk(c, 1) === b && _.Ui(c, 2)
        })
    };
    Ak = function(a, b, c, d) {
        if (b)
            for (var e = _.u(pk(b)), f = e.next(), g = {}; !f.done; g = {
                    Hc: void 0
                }, f = e.next())
                if (g.Hc = f.value, (f = vk().get(g.Hc, b).Xc) && !uk(a, g.Hc)) {
                    var h = wk(f);
                    if (2 !== h && 3 !== h) {
                        h = !1;
                        if (c) {
                            var k = /^(\d+)$/.exec(g.Hc);
                            if (k && !(h = _.x(c.split(","), "includes").call(c.split(","), k[1]))) continue;
                            if (!h && !c.split(",").some(function(m) {
                                    return function(n) {
                                        var p;
                                        return null == d ? void 0 : null == (p = d.get(n)) ? void 0 : p.has(m.Hc)
                                    }
                                }(g))) continue
                        }
                        li(f, 9, h);
                        (h = sk(f, 2)) && 1024 < h.length && (k = {}, nk(55, g.Hc, null, (k.sl = String(h.length), k)), _.xk(f.lb(yk(108)), 2));
                        zk(a, 2, rk, f);
                        f = sk(f, 2);
                        k = h = void 0;
                        var l = {};
                        nk(19, g.Hc, null, (l.hs = f ? "1" : "0", l.sl = String(null != (k = null == (h = f) ? void 0 : h.length) ? k : -1), l))
                    }
                }
    };
    Bk = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    Mk = function(a, b, c, d, e, f) {
        f = void 0 === f ? Ck : f;
        var g, h, k, l, m, n, p, r, v, w, y, B, C;
        return _.Lf(function(G) {
            return 1 == G.g ? (g = new Dk, h = new Ek(a, c, e), J(g, h), J(g, new Fk(h.o, void 0, d, e)), k = new Gk(h.j, e), J(g, k), l = new Hk(k.j, e), J(g, l), m = new Ik(b, l.j, e), J(g, m), J(g, new Fk(m.o, void 0, d, e)), n = new Jk(m.j, m.H, f.th ? 1024 : 300, f.th ? 1024 : 1E3, e), J(g, n), J(g, new Fk(n.j, void 0, d, e)), p = new Kk(e), J(g, p), r = new Lk(p.output, l.o, e), J(g, r), v = new Ik(b, r.j, e), J(g, v), w = new Fk(v.j, void 0, d, e), J(g, w), g.run(), C = a, G.yield(n.j.promise, 2)) : G.return({
                id: C,
                collectorGeneratedData: null != (B = null == (y = G.A) ? void 0 : sk(y, 2)) ? B : null
            })
        })
    };
    Sk = function(a, b, c, d) {
        var e = {
            th: _.H(Nk)
        };
        e = void 0 === e ? Ck : e;
        Ok() !== Pk(window) ? nk(16, "") : Qk(a, "encryptedSignalProviders", c) && Qk(a, "secureSignalProviders", c) || (nk(38, ""), Rk(a, "encryptedSignalProviders", b, e, c, d), Rk(a, "secureSignalProviders", b, e, c, function() {}))
    };
    Qk = function(a, b, c) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    Rk = function(a, b, c, d, e, f) {
        var g, h = new Tk(null != (g = a[b]) ? g : [], c, "secureSignalProviders" === b, f, d);
        a[b] = new Uk(h);
        h.addErrorHandler(e)
    };
    Xk = function(a, b) {
        var c = new Dk,
            d = new Kk(b);
        a = new Vk(d.output, a, b);
        Wk(c, [d, a]);
        c.run()
    };
    al = function(a, b, c, d, e) {
        var f = b.toString();
        if (Yk.has(f)) return null;
        Yk.add(f);
        f = new Dk;
        a = new Ek(a, c, e);
        var g = new Fk(a.o, c, d, e),
            h = new Zk(a.j, e),
            k = new Gk(h.j, e);
        b = new $k(k.j, b, e);
        c = new Fk(b.j, c, d, e);
        Wk(f, [a, g, h, k, b, c]);
        f.run();
        return f
    };
    cl = function(a, b, c) {
        c = void 0 === c ? bl : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.Jf(a, "load", function() {
            return void c(a, b)
        }))
    };
    dl = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    el = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    gl = function(a) {
        if (a === a.top || _.fl(a.top)) return _.z.Promise.resolve({
            status: 4
        });
        var b = dl(a);
        if (!b) return _.z.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && el(a.document.referrer)) return _.z.Promise.resolve({
            status: 3
        });
        var c = new _.ai;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Lb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    kl = function(a, b) {
        var c = hl(a);
        return c.messageChannelSendRequestFn ? _.z.Promise.resolve(c.messageChannelSendRequestFn) : new _.z.Promise(function(d) {
            function e(k) {
                return h.g(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.hg("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.lb(il).toString();
            var g = (new URL(il.toString())).origin,
                h = jl({
                    destination: a,
                    vb: f,
                    origin: g,
                    Bb: "goog:gRpYw:doubleclick"
                });
            h.g("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    rl = function(a, b, c, d) {
        var e = {
            skipTopicsObservation: _.H(ll),
            includeBuyerTopics: _.H(ml)
        };
        e = void 0 === e ? {} : e;
        var f = nl(d),
            g = f.Ee,
            h = f.De;
        b = hl(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics
        }).then(function(k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && Xa(k, g)));
            else if (Yg()(k)) l || (l = k !== g);
            else return c.Eb(989, Error(JSON.stringify(k))), 7;
            if (l && d) try {
                var m = new ol,
                    n = _.dg();
                var p = _.qi(m, 2, n);
                k instanceof Uint8Array ? yj(p, 1, pl, kc(k, !1, !1)) : yj(p, 3, pl, Cc(k));
                d.setItem("goog:cached:topics", ql(p))
            } catch (r) {}
            return k
        }), b.getTopicsPromise = a);
        return g && !h ? _.z.Promise.resolve(g) : b.getTopicsPromise
    };
    nl = function(a) {
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
            var c = sl(b),
                d = tl(c, pl);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    e = ul(vl(c, wl(c, pl, 1)));
                    break;
                case 3:
                    e = _.og(c, wl(c, pl, 3), 0);
                    break;
                default:
                    gb(d)
            }
            var f = _.Rg(c, 2) + 6048E5 < _.dg();
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
    hl = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    zl = function(a) {
        if (oa()) {
            var b = a.document.documentElement.lang;
            xl(a) ? yl(mk(a), !0, "", b) : (new MutationObserver(function(c, d) {
                xl(a) && (yl(mk(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    xl = function(a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    };
    yl = function(a, b, c, d) {
        mg({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    Bl = function(a) {
        var b = "";
        Al(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    Cl = function() {
        var a = Date.now();
        return _.x(Number, "isFinite").call(Number, a) ? Math.round(a) : 0
    };
    Fl = function(a) {
        var b = new Dl;
        var c = Cl();
        b = _.Bj(b, 1, c);
        b = _.Bj(b, 2, a.pvsid);
        b = _.Aj(b, 3, a.Pa);
        c = wh();
        b = _.qe(b, 4, c, Ec);
        b = _.Bj(b, 5, a.Ki);
        a = _.Aj(b, 12, a.Ea);
        var d;
        if (b = null == (d = _.z.globalThis.performance) ? void 0 : d.memory) {
            d = new El;
            try {
                _.Bj(d, 1, b.jsHeapSizeLimit)
            } catch (e) {}
            try {
                _.Bj(d, 2, b.totalJSHeapSize)
            } catch (e) {}
            try {
                _.Bj(d, 3, b.usedJSHeapSize)
            } catch (e) {}
        } else d = void 0;
        d && _.vi(a, 10, d);
        return a
    };
    Ml = function(a) {
        var b = _.gg();
        if (a.Vc) {
            var c = a.Qa,
                d = c.Uc,
                e = Fl(a),
                f = new Gl;
            b = _.Bj(f, 2, b);
            f = new Hl;
            f = _.Il(f, 1, a.Vc);
            f = _.Jl(f, 2, a.Ki);
            f = _.Il(f, 3, a.sj);
            f = _.Jl(f, 4, a.Ji);
            f = _.Il(f, 5, a.kh);
            a = _.Jl(f, 6, a.kg);
            a = _.vi(b, 3, a);
            e = _.Kl(e, 6, Ll, a);
            d.call(c, e)
        }
    };
    Pl = function(a) {
        if (!a.Vc) return function() {};
        var b = Cl();
        a.Qa.Uc(Nl(Fl(a)));
        return function() {
            var c = a.Qa,
                d = c.Uc,
                e = Fl(a);
            var f = new Ol;
            var g = Cl() - b;
            f = _.Bj(f, 1, g);
            e = _.Kl(e, 14, Ll, f);
            return void d.call(c, e)
        }
    };
    Ql = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    L = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function() {
            var e = _.ya.apply(0, arguments),
                f = Rl(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Vc && a.sj) {
                    var h = a.Qa,
                        k = h.Uc,
                        l = Fl(a);
                    var m = _.Bj(l, 5, a.Ji);
                    var n = new Sl;
                    var p = _.K(n, 1, b);
                    var r = _.Jl(p, 2, g);
                    var v = _.Kl(m, 9, Ll, r);
                    k.call(h, v)
                }
            } catch (w) {}
            return f
        }
    };
    Rl = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = _.ya.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.Sf(Tl);
            try {
                var l = _.H(Ul);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) Vl.call(this, a, 110, m);
                    else if (Vl.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if (_.Wl(h), !g && !d) throw m;
                }
            }
            return f
        }
    };
    Xl = function(a, b, c, d) {
        return Rl(a, b, c, void 0 === d ? !1 : d)()
    };
    Vl = function(a, b, c) {
        if (a.kh) {
            c = _.Yl(c) ? c.error : c;
            var d = new Zl,
                e = new $l;
            try {
                var f = mk(window);
                _.Bj(e, 1, f)
            } catch (p) {}
            try {
                var g = wh();
                _.qe(e, 2, g, Ec)
            } catch (p) {}
            try {
                _.Aj(e, 3, window.document.URL)
            } catch (p) {}
            f = _.vi(d, 2, e);
            g = new am;
            b = _.K(g, 1, b);
            try {
                var h = eh(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.Aj(b, 2, h)
            } catch (p) {}
            try {
                var k = eh(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.Aj(b, 3, k)
            } catch (p) {}
            try {
                var l = eh(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.qe(b, 4, l.split(/\n\s*/), _.ed)
            } catch (p) {}
            h = _.vi(f, 1, b);
            k = new bm;
            try {
                _.Aj(k, 1, a.Pa)
            } catch (p) {}
            try {
                var m = cm();
                _.Jl(k, 2, m)
            } catch (p) {}
            try {
                var n = [].concat(_.Ki(_.x(dm, "keys").call(dm)));
                _.qe(k, 3, n, _.ed)
            } catch (p) {}
            _.Kl(h, 4, em, k);
            _.Bj(h, 5, a.kg);
            a.Qa.wm(h)
        }
    };
    hm = function(a, b) {
        var c = fm.get(a);
        c || (b = c = b(), gm.set(b, a), fm.set(a, b));
        return c
    };
    O = function(a) {
        return function() {
            return new im(a, [].concat(_.Ki(_.ya.apply(0, arguments))))
        }
    };
    jm = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? jm(b) : String(b)
        }).join(", ") + "]"
    };
    km = function(a, b) {
        b = jm(b);
        b = b.substring(1, b.length - 1);
        return new im(96, [a, b])
    };
    lm = function(a) {
        return (_.I = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable gameManualInterstitialSlotReady gameManualInterstitialSlotClosed".split(" "), _.x(_.I, "includes")).call(_.I, a) ? a : null
    };
    nm = function(a, b, c) {
        return hm(c, function() {
            return new mm(a, b, c)
        })
    };
    pm = function(a, b, c) {
        return hm(c, function() {
            return new om(a, b, c)
        })
    };
    qm = function(a, b, c, d) {
        "string" === typeof a ? b.setClickUrl(a) : P(d, km("Slot.setClickUrl", [a]), c)
    };
    xm = function(a, b, c, d, e) {
        if ("string" !== typeof a || rm(a)) P(e, km("Slot.setTargeting", [a, b]), c);
        else {
            var f = [];
            Array.isArray(b) ? f = b : _.Ua(b) ? f = _.x(Array, "from").call(Array, b) : b && (f = [b]);
            f = f.map(String);
            (b = (_.I = sm(d), _.x(_.I, "find")).call(_.I, function(g) {
                return sk(g, 1) === a
            })) ? tm(b, f): (b = tm(um(new vm, a), f), zk(d, 9, vm, b));
            e.info(wm(a, f.join(), d.getAdUnitPath()), c)
        }
    };
    ym = function(a, b, c, d) {
        if (null != a && "object" === typeof a)
            for (var e = _.u(_.x(Object, "keys").call(Object, a)), f = e.next(); !f.done; f = e.next()) f = f.value, xm(f, a[f], b, c, d);
        else d.error(km("Slot.updateTargetingFromMap", [a]), b)
    };
    Am = function(a, b, c, d) {
        return "string" !== typeof a ? (P(d, km("Slot.getTargeting", [a]), b), []) : (b = (_.I = sm(c), _.x(_.I, "find")).call(_.I, function(e) {
            return sk(e, 1) === a
        })) ? zm(b).slice() : []
    };
    Bm = function(a) {
        return sm(a).map(function(b) {
            return _.E(b, 1)
        })
    };
    Gm = function(a, b, c, d) {
        if (void 0 === a) _.xk(c, 9), d.info(Cm(b.getAdUnitPath()), b);
        else {
            var e = sm(c),
                f = _.x(e, "findIndex").call(e, function(g) {
                    return sk(g, 1) === a
                });
            0 > f ? P(d, Dm(a, b.getAdUnitPath()), b) : (e.splice(f, 1), _.Em(c, 9, e), d.info(Fm(a, b.getAdUnitPath()), b))
        }
    };
    _.Jm = function(a) {
        _.Sf(Hm).g = !0;
        return Im[a]
    };
    Nm = function(a, b, c) {
        var d, e;
        return null != (e = null == (d = _.x(a, "find").call(a, function(f) {
            f = _.Km(f, Lm, 1);
            return Mm(f, 1) <= b && Mm(f, 2) <= c
        })) ? void 0 : _.qk(d, Lm, 2)) ? e : null
    };
    Pm = function(a, b, c) {
        var d;
        "number" === typeof b && "number" === typeof c && _.qk(a, Om, 6).length ? d = Nm(_.qk(a, Om, 6), b, c) : d = _.qk(a, Lm, 5);
        return d
    };
    Rm = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = Qm(!1, b), c = Pm(a, b.width, b.height));
        null != c || (c = Pm(a));
        return null == c ? [] : c.map(function(d) {
            return _.Q(d, 3) ? "fluid" : [Mm(d, 1), Mm(d, 2)]
        })
    };
    Sm = function(a) {
        var b = [],
            c = !1;
        a = _.u(Rm(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Tm = function(a) {
        return 0 !== a && 1 !== a
    };
    Um = function(a) {
        return Tm(a) && !(_.I = [8, 9], _.x(_.I, "includes")).call(_.I, a)
    };
    Vm = function(a) {
        var b = a.document;
        return gh(a) ? b.URL : b.referrer
    };
    Ym = function(a) {
        try {
            return Wm(a, window.top)
        } catch (b) {
            return new _.Xm(-12245933, -12245933)
        }
    };
    bn = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Zm($m, a), a = new _.an(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    dn = function(a, b) {
        for (var c = {}, d = _.u(_.x(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = _.Xd(b[e]),
                g = _.Sf(cn),
                h = g.g.get(e);
            null == h ? h = ++_.Sf(Tl).A : g.g.delete(e);
            _.xk(f, 20, _.Kc(h));
            c[e] = f
        }
        return {
            ca: _.Xd(a),
            T: c
        }
    };
    fn = function() {
        for (var a = "", b = _.u(en()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    en = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    mn = function(a, b, c, d) {
        var e = gn(b, a) || hn(b, a);
        if (!e) return null;
        var f = Ym(e),
            g = e === hn(b, a),
            h = Ti(function() {
                var p = g ? hn(b, a) : e;
                return p && jn(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = Rm(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = kn(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = kn(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && ln(e) ? f : new _.Xm(-12245933, -12245933)
    };
    nn = function(a, b, c, d) {
        var e = hn(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = mn(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    on = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    pn = function(a) {
        return on(a) + "__container__"
    };
    gn = function(a, b) {
        var c;
        return (null == (c = hn(a, b)) ? void 0 : c.querySelector('[id="' + pn(a) + '"]')) || null
    };
    qn = function(a, b) {
        var c, d;
        return null != (d = null == (c = gn(a, b)) ? void 0 : c.querySelector('iframe[id="' + on(a) + '"]')) ? d : null
    };
    hn = function(a, b) {
        b = void 0 === b ? document : b;
        return rn().l.get(a) || b.getElementById(a.getDomId())
    };
    An = function(a, b, c) {
        return hm(c, function() {
            return new zn(a, b, c, c.g)
        })
    };
    Bn = function(a) {
        return _.x(Object, "assign").call(Object, {}, a, _.x(Object, "fromEntries").call(Object, _.x(Object, "entries").call(Object, a).map(function(b) {
            b = _.u(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    Fn = function() {
        var a = {},
            b = Bn(Cn);
        a.OutOfPageFormat = b;
        b = Bn(Dn);
        a.TrafficSource = b;
        b = Bn(En);
        a.Taxonomy = b;
        return a
    };
    Gn = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a.tag_origin = "to", a
    };
    Jn = function(a, b, c, d, e) {
        if ("string" === typeof a && a.length && void 0 !== Gn()[a] && "string" === typeof b) {
            var f = (_.I = c.Sa(), _.x(_.I, "find")).call(_.I, function(g) {
                return sk(g, 1) === a
            });
            f ? tm(f, [b]) : (f = Hn(um(new vm, a), b), zk(c, 14, vm, f));
            e.info(In(a, String(b), d))
        } else P(e, km("PubAdsService.set", [a, b]))
    };
    Kn = function(a, b, c) {
        return "string" !== typeof a ? (P(c, km("PubAdsService.get", [a])), null) : (b = (b = (_.I = b.Sa(), _.x(_.I, "find")).call(_.I, function(d) {
            return sk(d, 1) === a
        })) && zm(b)) ? b[0] : null
    };
    Ln = function(a) {
        return a.Sa().map(function(b) {
            return _.E(b, 1)
        })
    };
    Nn = function() {
        for (var a = Vf(Mn) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    Rn = function() {
        if (On) return On;
        for (var a = Wf(Pn), b = [], c = 0; c < a.length; c += 2) _.Qn(a[c], a[c + 1], b);
        return On = b.join("&")
    };
    Wn = function(a, b) {
        if (!b || !_.La(b)) return null;
        var c = !1,
            d = new Sn;
        _.Tn(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? li(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? li(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? li(d, 3, b.sandbox) : c = g = !0;
                    break;
                default:
                    g = !0
            }
            g && a.error(Un("setSafeFrameConfig", Vn(b), f, Vn(e)))
        });
        return c ? null : d
    };
    Yn = function(a) {
        var b = new Sn;
        a = _.u(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) {
                if (null != Xn(c, 1)) {
                    var d = b,
                        e = _.Q(c, 1);
                    li(d, 1, e)
                }
                null != Xn(c, 2) && (d = b, e = _.Q(c, 2), li(d, 2, e));
                null != Xn(c, 3) && (d = b, c = _.Q(c, 3), li(d, 3, c))
            }
        return b
    };
    Zn = function(a, b) {
        var c = {};
        b = (c[0] = Rh(b.pvsid), c);
        return _.Sf(uh).A(a, b)
    };
    ao = function(a, b) {
        var c;
        return null == (c = _.$n(a, "__gads", b)) ? void 0 : _.x(c.split(":"), "find").call(c.split(":"), function(d) {
            return 0 === d.indexOf("ID=")
        })
    };
    bo = function(a, b, c, d) {
        (c = ao(c, d)) ? (d = {}, b = (d[0] = Rh(b.pvsid), d[1] = Rh(c), d), _.Sf(uh).A(a, b)) : Zn(a, b)
    };
    go = function(a) {
        var b = a.key,
            c = a.value,
            d = a.Fa,
            e = a.serviceName,
            f = a.Fm,
            g = a.ib,
            h = a.R;
        a = a.context;
        var k = null;
        "string" === typeof c ? k = [c] : Array.isArray(c) ? k = c : _.Ua(c) && (k = _.x(Array, "from").call(Array, c));
        var l = "string" === typeof b && !rm(b);
        k = k && Za(k);
        var m, n = null != (m = null == k ? void 0 : k.every(function(p) {
            return "string" === typeof p
        })) ? m : !1;
        if (l && n) {
            c = k;
            m = (_.I = _.qk(d, vm, 2), _.x(_.I, "find")).call(_.I, function(p) {
                return sk(p, 1) === b
            });
            if ("gpt-beta" === b) {
                if (f) {
                    P(h, co(c.join()));
                    return
                }
                if (m) {
                    P(h, eo(c.join()));
                    return
                }
                c = fo(c, g, a)
            }
            m ? tm(m, c) : (f = tm(um(new vm, b), c), zk(d, 2, vm, f));
            h.info(wm(b, c.join(), e))
        } else P(h, km("PubAdsService.setTargeting", [b, c]))
    };
    ho = function(a, b, c) {
        return "string" !== typeof a ? (P(c, km("PubAdsService.getTargeting", [a])), []) : (b = (_.I = _.qk(b, vm, 2), _.x(_.I, "find")).call(_.I, function(d) {
            return sk(d, 1) === a
        })) ? zm(b).slice() : []
    };
    io = function(a) {
        return _.qk(a, vm, 2).map(function(b) {
            return _.E(b, 1)
        })
    };
    mo = function(a, b, c, d) {
        if (void 0 === a) _.xk(b, 2), d.info(jo(c));
        else if ("gpt-beta" === a) P(d, ko(a));
        else {
            var e = _.qk(b, vm, 2),
                f = _.x(e, "findIndex").call(e, function(g) {
                    return sk(g, 1) === a
                });
            0 > f ? P(d, Dm(a, c)) : (e.splice(f, 1), _.Em(b, 2, e), d.info(lo(a, c)))
        }
    };
    fo = function(a, b, c) {
        var d = [];
        a = _.u(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            b.g = e;
            var f = Zn(9, c);
            1 === f.length && (d.push(e), d.push(e + "-" + f[0]))
        }
        return d
    };
    oo = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = no.exec(null != (b = null == (a = _.Jm(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    po = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    qo = function(a, b) {
        var c = b.g;
        return a.map(function(d) {
            return _.x(c, "find").call(c, function(e) {
                return e.g === d
            })
        }).filter($g())
    };
    so = function() {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function() {
                ro();
                return !0
            },
            set: function() {
                ro()
            },
            configurable: !0
        })
    };
    vo = function(a, b, c, d, e, f) {
        var g = to(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Fa;
        if (!f || !g) return P(b, km("PubAdsService.definePassback", [d, e])), null;
        li(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Yi: An(a, b, new uo(a, f, c)),
            Fa: g
        }
    };
    xo = function(a, b, c, d, e) {
        return hm(c, function() {
            return new wo(a, b, c, d, e)
        })
    };
    yo = function(a, b, c, d, e) {
        "string" !== typeof a || "string" !== typeof b || void 0 === Gn()[a] ? P(e, km("Slot.set", [a, b]), c) : (c = (_.I = d.Sa(), _.x(_.I, "find")).call(_.I, function(f) {
            return sk(f, 1) === a
        })) ? tm(c, [b]) : (b = Hn(um(new vm, a), b), zk(d, 3, vm, b))
    };
    zo = function(a, b, c, d) {
        return "string" !== typeof a ? (P(d, km("Slot.get", [a]), b), null) : (b = (b = (_.I = c.Sa(), _.x(_.I, "find")).call(_.I, function(e) {
            return sk(e, 1) === a
        })) && zm(b)) ? b[0] : null
    };
    Ao = function(a) {
        return a.Sa().map(function(b) {
            return _.E(b, 1)
        })
    };
    Co = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Bo) : "fluid" === a
    };
    Do = function(a) {
        return Array.isArray(a) && 2 === a.length && Bo(a[0]) && Bo(a[1])
    };
    Fo = function(a) {
        if (Array.isArray(a)) {
            var b = new Lm;
            b = _.xk(b, 1, _.Kc(a[0]));
            a = _.xk(b, 2, _.Kc(a[1]))
        } else a = Eo();
        return a
    };
    Ho = function(a) {
        var b = [];
        if (Go(a)) b.push(Fo(a));
        else if (Array.isArray(a)) {
            a = _.u(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Go(c) ? b.push(Fo(c)) : Xa(c, ["fluid"]) && b.push(Eo())
        }
        return b
    };
    Io = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return Ho(a)
    };
    Go = function(a) {
        return _.H(Jo) ? Array.isArray(a) && 2 === a.length ? a.every(Ko) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    Mo = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new Lo("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!Do(b)) throw new Lo("Size must be an array of two non-negative integers");
        var c = new Lm;
        c = _.xk(c, 1, _.Kc(b[0]));
        b = _.xk(c, 2, _.Kc(b[1]));
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = Ho(a[1]), 0 === a.length) throw new Lo("At least one slot size must be present");
        c = new Om;
        b = _.vi(c, 1, b);
        return _.Em(b, 2, a)
    };
    No = function() {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {
            cmd: []
        }
    };
    Ro = function(a, b) {
        _.H(Oo) ? (_.xk(a, 28), null !== b && ah(b) && _.x(Object, "hasOwn").call(Object, b, "enabled") && (b = b.enabled, Po(b) && (b = Qo(b), _.vi(a, 28, b)))) : void 0 === b || null === b ? _.xk(a, 28) : (b = b.enabled, Po(b) ? (b = Qo(b), _.vi(a, 28, b)) : void 0 !== b && null !== b || _.xk(a, 28))
    };
    So = function(a, b) {
        if (!b) return [];
        var c = [];
        b = _.u((_.I = oe(b, 26, rd), _.x(_.I, "values")).call(_.I));
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            try {
                c.push(JSON.parse(d))
            } catch (e) {
                Vl(a, 1023, e)
            }
        }
        return c
    };
    Uo = function(a, b, c) {
        return hm(c, function() {
            return new To(a, b, c)
        })
    };
    dp = function(a, b, c, d, e, f, g, h) {
        var k = new Dk,
            l = new Vo(a, h);
        J(k, l);
        e = new Wo(a, d, e);
        J(k, e);
        e = new Xo(a, b, d, f, l.nb);
        J(k, e);
        h = new Yo(a, b, c, d, h, f, l.nb);
        J(k, h);
        if (_.H(Zo)) {
            b = new $o(a, b, c, d, f, l.nb);
            J(k, b);
            var m = b.j
        }
        l = new ap(a, l.nb, h.j, e.j, m);
        J(k, l);
        0 < _.Uf(bp) && J(k, new cp(a, g, l.output));
        k.run();
        return {
            nb: l.output,
            Ka: k
        }
    };
    fp = function(a, b) {
        return hm(b, function() {
            return new ep(a, b)
        })
    };
    hp = function(a, b, c) {
        var d = Rl(a, 77, function() {
            var e = b.cmd;
            if (!e || Array.isArray(e)) {
                var f = new gp(c);
                b.cmd = fp(a, f);
                null != e && e.length && f.push.apply(f, e)
            }
        });
        b.fifWin && "complete" !== document.readyState ? _.Jf(window, "load", function() {
            return window.setTimeout(d, 0)
        }) : d()
    };
    kp = function(a) {
        var b = window;
        "complete" === _.t.document.readyState ? Xl(a, 94, function() {
            No()._pubconsole_disable_ || null !== ip(b) && jp(a, b)
        }) : _.Jf(_.t, "load", Rl(a, 94, function() {
            No()._pubconsole_disable_ || null !== ip(b) && jp(a, b)
        }))
    };
    jp = function(a, b) {
        b = void 0 === b ? _.t : b;
        if (!lp) {
            var c = new mp("gpt_pubconsole_loaded");
            np(c, a);
            op(c, "param", String(ip(b)));
            op(c, "api", String(pp));
            qp(c);
            _.rp(b.document, sp);
            lp = !0
        }
    };
    ip = function(a) {
        var b = Vm(a),
            c;
        return null != (c = (_.I = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.x(_.I, "find")).call(_.I, function(d) {
            var e = b.search(tp);
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
    up = function() {
        No()._pubconsole_disable_ = !0
    };
    xp = function() {
        vp && (No().console.openConsole(wp), wp = void 0, vp = !1)
    };
    yp = function(a) {
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
    zp = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(sk(a, 1)), c.push(Sm(a)), c.push(sk(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.Qh(c.join(":")).toString() : "0"
    };
    Ap = function(a) {
        if (!_.fl(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    Cp = function(a, b, c, d, e) {
        var f = void 0,
            g = Rl(a.context, b, e);
        _.Jf(c, d, g) && (f = function() {
            return void _.ig(c, d, g)
        }, _.Bp(a, f));
        return f
    };
    Ep = function(a) {
        a = (_.fl(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!Dp(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    Fp = function(a) {
        return Math.round(Number(kn(a)))
    };
    Gp = function(a) {
        var b = a.parentElement;
        return !b || 1 >= b.children.length ? !1 : _.x(Array, "from").call(Array, b.children).some(function(c) {
            return c !== a && !(_.I = ["script", "style"], _.x(_.I, "includes")).call(_.I, c.tagName.toLowerCase())
        })
    };
    Ip = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.Hp(a, c), a = a.parentElement
    };
    Jp = function(a, b, c, d, e) {
        _.Hp(a, {
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
        }, c(-b), _.Hp(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.Hp(a, f)), !0) : !1
    };
    Lp = function(a, b, c, d, e, f, g, h, k, l) {
        window.setTimeout(function() {
            var m = Sm(d);
            if (window.IntersectionObserver) {
                var n, p = null != (n = qn(c, b)) ? n : hn(c, b);
                m = Kp(a, b, c, e, f, g, m, h, k, l, p);
                (new window.IntersectionObserver(m, {
                    threshold: .98
                })).observe(p)
            }
        }, 500)
    };
    Kp = function(a, b, c, d, e, f, g, h, k, l, m) {
        var n = window.location && "#flexibleAdSlotTest" === window.location.hash ? 1 : _.Uf(Mp);
        return Rl(a, 459, function(p, r) {
            (p = null == p ? void 0 : p[0]) && Np(a, b, c, d, e, f, g, h, k, l, r, m, p, n)
        })
    };
    Np = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        var v = p.boundingClientRect,
            w = p.intersectionRatio,
            y = window.innerWidth,
            B = v.left,
            C = v.right,
            G = 0 > B + 2,
            F = 0 < C - (y + 2);
        (.98 <= w || G || F) && Op(k, function(M) {
            m.unobserve(n);
            var R = G || F;
            var N = new hh;
            Pp(n, R) && N.set(10);
            if (void 0 !== h && Gp(n)) {
                var aa, ha = null == (aa = hn(c, b)) ? void 0 : aa.parentElement,
                    la;
                aa = ha ? null == (la = jn(ha, window)) ? void 0 : la.width : void 0;
                h !== aa && N.set(16)
            }
            R ? (N.set(8), R = jh(N)) : R = Qp(b, c, w, N);
            la = Rp(c, n, f);
            N = la.wl;
            la = la.zl;
            np(M, a);
            op(M, "qid", l);
            op(M, "iu", c.getAdUnitPath());
            op(M, "e", String(R));
            G && op(M, "ofl", String(B));
            F && op(M, "ofr", String(C - y));
            op(M, "ret", e + "x" + f);
            op(M, "req", g);
            op(M, "bm", String(d));
            op(M, "efh", Number(N));
            op(M, "stk", Number(la));
            op(M, "ifi", Sp(window))
        }, r)
    };
    Qp = function(a, b, c, d) {
        var e = qn(b, a) || hn(b, a);
        try {
            var f = e.getBoundingClientRect(),
                g = f.left,
                h = f.top,
                k = f.width,
                l = f.height,
                m = hn(b, a),
                n = jn(m, window);
            if ("hidden" === n.visibility || "none" === n.display) return jh(d);
            var p = Fp(n.getPropertyValue("border-top-width") || 0) + 1;
            b = g + k;
            f = h + l;
            c = (1 - c) * l;
            var r = a.elementsFromPoint(g + p + 2, h + c + p);
            var v = a.elementsFromPoint(b - p - 2, h + c + p);
            var w = a.elementsFromPoint(b - p - 2, f - c - p);
            var y = a.elementsFromPoint(g + p + 2, f - c - p);
            var B = a.elementsFromPoint(b / 2, f - c - p)
        } catch (G) {
            return d.set(1), jh(d)
        }
        if (!(r && r.length && v && v.length && w && w.length && y && y.length && B && B.length)) return d.set(7), jh(d);
        a = function(G, F) {
            for (var M = !1, R = 0; R < G.length; R++) {
                var N = G[R];
                if (M) {
                    var aa = jn(N, window);
                    if ("hidden" !== aa.visibility && !Tp(N) && !C(e, N)) {
                        d.set(F);
                        "absolute" === aa.position && d.set(11);
                        break
                    }
                } else e === N && (M = !0)
            }
        };
        Up(e) && d.set(9);
        var C = function(G, F) {
            return Vp(G, F) || Vp(F, G)
        };
        g = r[0];
        e === g || C(e, g) || Tp(g) || d.set(2);
        g = v[0];
        e === g || C(e, g) || Tp(g) || d.set(3);
        g = w[0];
        e === g || C(e, g) || Tp(g) || d.set(4);
        g = y[0];
        e === g || C(e, g) || Tp(g) || d.set(5);
        if (Tp(e)) return jh(d);
        a(r, 12);
        a(v, 13);
        a(w, 14);
        a(y, 15);
        a(B, 6);
        return jh(d)
    };
    Pp = function(a, b) {
        var c = !1,
            d = !1;
        return Wp(a, function(e, f) {
            d = d || "scroll" === e.overflowX || "auto" === e.overflowX;
            c = c || "flex" === e.display;
            return b && c && d || "listbox" === f.role
        })
    };
    Rp = function(a, b, c) {
        var d = (a = hn(a)) && jn(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        fk(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = ek(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.x(l, "endsWith").call(l, "px") ? Fp(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.x(ck, "includes").call(ck, l) || (e = !1)
                }
            f || (k = jn(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            wl: e,
            zl: f
        }
    };
    Tp = function(a) {
        return Wp(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    Up = function(a) {
        return Wp(a, function(b) {
            var c;
            return (_.I = ["left", "right"], _.x(_.I, "includes")).call(_.I, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    Xp = function(a, b, c, d) {
        var e = _.hg("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Yp = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    $p = function(a, b, c) {
        var d = new _.z.Map;
        a = _.u(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var f = b[e.getDomId()];
            f = wi(f, Zp, 28) ? _.Km(f, Zp, 28) : _.Km(c, Zp, 34);
            var g = void 0;
            d.set(e, (null == (g = f) ? 0 : null != Xn(g, 1)) ? _.Q(f, 1) ? 2 : 1 : 0)
        }
        return d
    };
    cq = function(a, b, c) {
        var d, e, f = [],
            g = [];
        a = _.u(a);
        for (d = a.next(); !d.done; d = a.next())
            if (d = d.value, 1 === b.get(d)) f.push(null), g.push(null);
            else {
                var h = c,
                    k = hn(d);
                d = aq((null == k ? void 0 : k.parentElement) && jn(k.parentElement, h) || null);
                if (!d || 1 === d[0] && 1 === d[3]) {
                    var l = e = d = void 0,
                        m = null != (l = null == k ? void 0 : k.parentElement) ? l : null;
                    l = null != (e = bn(m)) ? e : new _.an(0, 0);
                    bq(l, m, h, 100);
                    e = null != (d = bn(k)) ? d : new _.an(0, 0);
                    bq(e, k, h, 1); - 1 === l.height && (e.height = -1);
                    d = l;
                    d = d.width + "x" + d.height;
                    e = e.width + "x" + e.height
                } else e = d = "-1x-1";
                f.push(d);
                g.push(e)
            }
        return {
            Rl: f,
            Lm: g
        }
    };
    bq = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b || !gk(b, c, d))) {
                a: {
                    do {
                        var f = jn(b, c);
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
    eq = function(a, b, c) {
        var d = 0 !== (0, _.dq)(),
            e = Qm(!0, c, d).width,
            f = [],
            g = [],
            h = [];
        if (null !== c && c != c.top) {
            var k = Qm(!1, c).width;
            (-12245933 === e || -12245933 === k || k < e) && h.push(8)
        } - 12245933 !== e && (1.5 * e < c.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * c.outerWidth < e && h.push(10));
        a = _.u(a);
        for (d = a.next(); !d.done; d = a.next())
            if (k = d.value, 1 === b.get(k)) f.push(null), g.push(null);
            else {
                d = new hh;
                var l = hn(k);
                k = 0;
                var m = !1,
                    n = !1,
                    p = !1;
                if (l) {
                    for (var r = 0, v = l; v && 100 > r; r++, v = v.parentElement) {
                        var w = jn(v, c);
                        if (w) {
                            var y = w,
                                B = y.display,
                                C = y.overflowX;
                            if ("visible" !== y.overflowY && (d.set(2), (y = bn(v)) && (k = k ? Math.min(k, y.width) : y.width), d.get(9))) break;
                            Yp(w) && d.set(9);
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
                l = _.u(h);
                for (m = l.next(); !m.done; m = l.next()) d.set(m.value);
                f.push(jh(d));
                g.push(k)
            }
        return {
            al: f,
            Pl: g
        }
    };
    fq = function(a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = _.u(e);
            g = a.next();
            for (f = {}; !g.done; f = {
                    Yg: void 0
                }, g = a.next()) {
                e = g.value;
                g = e.code;
                e = e.bids;
                var h = void 0;
                if (g && null != (h = e) && h.length && (g = hi(g, b), f.Yg = g / 1E6, !(0 >= g))) {
                    h = void 0;
                    e = _.u(null != (h = e) ? h : []);
                    var k = e.next();
                    for (h = {}; !k.done; h = {
                            Wb: void 0,
                            xi: void 0
                        }, k = e.next()) k = k.value, h.xi = "function" === typeof k.getFloor ? k.getFloor : void 0, h.Wb = Bi(zi(Ai(new xi, 4), g), c), k.getFloor = function(l, m) {
                        return function(n) {
                            4 === _.og(l.Wb, 1, 0) && Ai(l.Wb, 1);
                            var p, r = null == (p = l.xi) ? void 0 : p.apply(this, [n]);
                            n = c ? r || {} : {
                                currency: "USD",
                                floor: m.Yg
                            };
                            return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === _.og(l.Wb, 1, 0) && (n = zi(Ai(l.Wb, 6), 1E6 * r.floor), Ei(n, 3, r.currency)), r) : (r.floor || 0) > m.Yg ? (1 === _.og(l.Wb, 1, 0) && zi(Ai(l.Wb, 5), 1E6 * r.floor), r) : n : n
                        }
                    }(h, f), d.set(k.getFloor, h.Wb)
                }
            }
        }
    };
    gq = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return No().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    iq = function(a, b) {
        return hm(b, function() {
            return new hq(a, b)
        })
    };
    jq = function(a, b) {
        for (var c = new hh, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return jh(c)
    };
    lq = function(a, b) {
        return kq(a, b)
    };
    kq = function(a, b) {
        return a.map(function(c) {
            return b(c)
        })
    };
    oq = function(a, b, c) {
        var d = {
                hc: new mq,
                vc: new mq,
                uc: new mq,
                tc: new mq,
                bd: new mq,
                Oc: new mq,
                vf: new mq,
                wf: new mq,
                Pf: new mq
            },
            e = new Dk;
        J(e, new nq(a, b, c, window, d));
        e.run();
        return {
            Fh: d,
            Ka: e
        }
    };
    qq = function(a, b, c, d, e, f, g) {
        if (f) {
            var h = {
                    nh: new mq
                },
                k = new Dk;
            a = new pq(a, b, c, d, e, f, g, h);
            J(k, a);
            k.run();
            return {
                ek: h,
                Ka: k
            }
        }
    };
    sq = function(a, b) {
        var c;
        return !(null != (c = rq(b, 22)) ? !c : !_.Q(a, 15))
    };
    uq = function(a) {
        var b;
        var c = new tq;
        c = _.Bj(c, 2, a.pvsid);
        c = _.Aj(c, 3, a.Pa);
        c = _.Aj(c, 6, a.Ea);
        var d = null != (b = a.Rf) ? b : _.dg();
        b = _.Bj(c, 1, d);
        c = wh();
        b = _.qe(b, 4, c, Ec);
        a.payload && (c = a.payload(), _.vi(b, 7, c));
        a.ob && _.Bj(b, 5, a.ob);
        return b
    };
    wq = function(a, b, c, d) {
        for (var e = _.u(_.x(Object, "entries").call(Object, vq)), f = e.next(); !f.done; f = e.next()) {
            var g = _.u(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && P(a, g(String(c), d))
        }
    };
    Bq = function(a, b, c) {
        a.ym && a.Qa.qj(uq(_.x(Object, "assign").call(Object, {}, a, {
            ob: a.Ol,
            payload: function() {
                var d = new xq;
                var e = _.yq(d, zq, 1, Aq);
                e = _.Ji(e, 1, b);
                _.Ji(e, 2, c);
                return d
            }
        })))
    };
    Dq = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = (c = void 0 === c ? null : c) ? nh(c) : null;
        b = void 0 === b ? !0 : b;
        var d = 0;
        try {
            d |= a !== a.top ? 512 : 0;
            var e;
            if (!(e = !a.navigator)) {
                var f = a.navigator;
                e = "brave" in f && "isBrave" in f.brave || !1
            }
            d |= e || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            d |= aj(a, 2500);
            !b || c && Cq(c) || (d |= 4194304)
        } catch (g) {
            d |= 32
        }
        return d
    };
    Eq = function(a) {
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
    Hq = function(a, b, c) {
        a = Eq(a);
        if (!a) return null;
        if (10 === a) return 0;
        var d = 0;
        if (!(_.I = [11, 10], _.x(_.I, "includes")).call(_.I, a)) {
            d |= b !== b.top ? 512 : 0;
            var e = _.Pj(b);
            e = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && e.adCount ? 1 == a || 2 == a ? !(!e.adCount[1] && !e.adCount[2]) : (e = e.adCount[a]) ? 1 <= e : !1 : !1;
            e && (d |= 64);
            if (d) return d
        }
        if (2 === a || 1 === a) {
            var f = {
                oa: b,
                hf: _.Fq,
                Ih: c ? a : void 0
            };
            0 === (0, _.dq)() && (f.hf = 3E3, f.Jg = 650);
            d |= _.nj(f)
        } else if (8 === a) d |= Dq(b);
        else if (3 === a || 4 === a) {
            var g = a;
            e = _.H(Gq);
            g = void 0 === g ? null : g;
            c = b !== b.top ? 512 : 0;
            jj(null == (f = b.navigator) ? void 0 : f.userAgent) && (c |= 1048576);
            f = b.innerWidth;
            1200 > f && (c |= 65536);
            var h = b.innerHeight;
            650 > h && (c |= 2097152);
            g && 0 === c && (g = 3 === g ? "left" : "right", (f = _.ak({
                oa: b,
                Di: !1,
                oj: 1,
                position: g,
                ia: f,
                ra: h,
                Bc: new _.z.Set,
                minWidth: 120,
                minHeight: 500,
                Ic: void 0 === e ? !1 : e
            })) ? _.Pj(b).sideRailPlasParam.set(g, f.width + "x" + f.height + "_" + String(g).charAt(0)) : c |= 16);
            d |= c
        } else 11 !== a && 42 !== a && (d |= 32);
        d || (b = _.Pj(b), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return d
    };
    Kq = function(a, b, c, d) {
        var e = d.Zh,
            f = d.adUnitPath;
        d = void 0 === d.xb ? !1 : d.xb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && Iq(e)) ? Jq(a, b, f, c, {
            Vb: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            xb: d
        }) : (b.error(km("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    Iq = function(a) {
        switch (a) {
            case 6:
                return !0;
            case 7:
                return !0;
            default:
                return !!Dp(Cn, function(b) {
                    return b === a
                })
        }
    };
    Jq = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            Vb: e.Vb,
            format: f,
            xb: e.xb
        });
        a = b.slotId;
        b = b.Fa;
        a && b && (_.ti(b, 15, f), _.Bp(a, function() {
            var g = window,
                h = Eq(f);
            if (h) {
                g = _.Pj(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    Lq = function(a, b) {
        var c;
        return !(null != (c = rq(a, 11)) ? !c : !_.Q(b, 10))
    };
    Mq = function(a, b, c, d) {
        if (a = hn(a, b)) {
            var e;
            if (c = null != (e = rq(c, 24)) ? e : _.Q(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Pq = function(a, b) {
        var c = b.L,
            d = b.P;
        b = b.aa;
        a = _.u(a.X);
        for (var e = a.next(); !e.done; e = a.next())
            if (e = e.value, _.Nq(c, e)) {
                var f = d,
                    g = f.ca;
                f = f.T[e.getDomId()];
                Lq(f, g) && Mq(e, b, f, g);
                Oq(c, e);
                var h = void 0,
                    k = void 0;
                null != (h = null != (k = rq(f, 10)) ? k : _.Q(g, 11)) && h && Mq(e, b, f, g)
            }
        return {}
    };
    Qq = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Hh: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Hh: a.length - b.length + 8
        }
    };
    Rq = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Sq = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Rq(a, b)
    };
    Tq = function(a) {
        var b, c;
        return null != (c = null == (b = _.x(a, "find").call(a, function(d) {
            return "page_url" === sk(d, 1)
        })) ? void 0 : zm(b)[0]) ? c : null
    };
    Uq = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Vq = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Al(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    Wq = function(a, b) {
        var c = b.T;
        return !!Tq(b.ca.Sa()) || a.some(function(d) {
            return null !== Tq(c[d.getDomId()].Sa())
        })
    };
    Yq = function(a, b) {
        var c, d, e, f, g;
        return _.Lf(function(h) {
            c = a;
            d = c.kd;
            e = b;
            f = e.qg;
            return (null != (g = d) ? g : f.kd()) ? h.return(Xq(f)) : h.return(null)
        })
    };
    br = function(a, b, c) {
        var d = window,
            e = new Dk;
        d = new Zq(d);
        _.S(e, d);
        a = new $q(a, d, c, _.Jm(150));
        J(e, a);
        b = new ar(879, Yq, {
            kd: b ? a.Lc : void 0
        }, {
            qg: d,
            Co: !!b
        }, void 0, e.C.g);
        b = J(e, b).output;
        e.run();
        return {
            Lc: a.Lc,
            rg: b,
            Ka: e
        }
    };
    dr = function() {
        var a = void 0 === a ? window : a;
        cr = _.dg(a)
    };
    er = function(a, b) {
        var c = _.hg("DIV");
        c.id = a;
        c.textContent = b;
        _.Hp(c, {
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
    fr = function(a, b) {
        if ("undefined" !== typeof IntersectionObserver) return new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    ir = function(a, b, c, d, e) {
        var f = void 0 === f ? _.z.globalThis.IntersectionObserver : f;
        if (!b) return {
            Cg: e
        };
        var g = null != Vi(b, 1) ? null != gr(b) && 0 !== (0, _.dq)() ? Vi(b, 1) * gr(b) : Vi(b, 1) : null;
        if (null == g) return {
            Cg: e
        };
        b = new Dk;
        a = new hr(a, d, c, g, e, f);
        J(b, a);
        b.run();
        return {
            Cg: a.output,
            Dl: b
        }
    };
    sr = function(a, b, c, d, e) {
        var f = window,
            g = new Dk,
            h = J(g, new jr(a, b, kr, function(m) {
                return lr("i-adframe-load", m.detail.data)
            })),
            k = J(g, new jr(a, b, kr, function(m) {
                return lr("i-dismiss", m.detail.data)
            }));
        h = 0 < _.Uf(mr) ? J(g, new nr(a, h.output, void 0)).output : h.output;
        h = J(g, new or(a, b, c, h));
        J(g, new pr(a, f, d, e, h.output));
        if (f.top === f) var l = J(g, new qr(a, f, h.output)).output;
        J(g, new rr(a, b, c, h.output, k.output, l));
        return g
    };
    lr = function(a, b) {
        try {
            var c = JSON.parse(b);
            return "sth" === c.googMsgType && c.msg_type === a
        } catch (d) {}
        return !1
    };
    xr = function() {
        var a = {};
        return a[576944485] = new tr, a[578856259] = new ur(function() {
            return _.Uf(vr)
        }), a[607368714] = new wr, a
    };
    yr = function(a, b) {
        a.V.log(576944485, uq, _.x(Object, "assign").call(Object, {}, a, b))
    };
    zr = function(a) {
        return window.IntersectionObserver && new IntersectionObserver(a, {
            threshold: [.5]
        })
    };
    Br = function(a) {
        return (_.I = [4, 5, 7, 1], _.x(_.I, "includes")).call(_.I, Ar(a))
    };
    Dr = function(a, b, c) {
        return new Cr(c, a, kr, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    Fr = function(a) {
        var b = {
            paw_id: Er(),
            gpa: 0
        };
        a.postMessage(JSON.stringify(b))
    };
    Ir = function(a, b, c) {
        if (_.x(Object, "keys").call(Object, a).some(function(d) {
                return (_.I = _.x(Object, "values").call(Object, Gr), _.x(_.I, "includes")).call(_.I, Number(d))
            })) return !0;
        Hr("taxonomies", a, b, c);
        return !1
    };
    Lr = function(a, b, c, d, e) {
        if (null == a) Hr("taxonomy", a, d, e);
        else {
            var f = Number(a);
            (_.I = _.x(Object, "values").call(Object, En), _.x(_.I, "includes")).call(_.I, Number(f)) ? a = !0 : (Hr("taxonomy", a, d, e), a = !1);
            a && (null == b ? Hr("taxonomyData", b, d, e) : Jr(b, d, e) && Kr(f, b, c, d))
        }
    };
    Ur = function(a, b, c, d, e) {
        if (!Mr(a)) Hr("taxonomy", a, d, e);
        else if (null == b) Hr("taxonomyData", b, d, e);
        else if (Jr(b, d, e) && Nr(_.x(b, "values"), d, b) && (b = Or(a, _.x(b, "values"), d, b), b.size)) {
            b = [].concat(_.Ki(b));
            e = new Pr;
            var f = Qr.get(a);
            e = _.Ji(e, 3, f);
            Rr(c, Sr(e, b));
            d.info(Tr(Vn(b), Vn(a)))
        }
    };
    Jr = function(a, b, c) {
        if (ah(a) && a.hasOwnProperty("values")) return !0;
        Hr("taxonomyData", a, b, c);
        return !1
    };
    Kr = function(a, b, c, d) {
        if (Nr(_.x(b, "values"), d, b)) {
            var e = Or(a, _.x(b, "values"), d, b);
            e.size && (b = (_.I = _.qk(c, Pr, 1), _.x(_.I, "find")).call(_.I, function(f) {
                return _.og(f, 1, 0) === a
            }), e = [].concat(_.Ki(e)), b ? Sr(b, e) : Rr(c, Sr(Vr(new Pr, a), e)), d.info(Tr(Vn(e), Vn(a))))
        }
    };
    Nr = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        Hr("taxonomyData.values", a, b, c);
        return !1
    };
    Or = function(a, b, c, d) {
        if (!fh()(b)) return Hr("taxonomyData.values", b, c, d), new _.z.Set;
        d = new _.z.Set;
        var e = !1;
        b = _.u(b);
        for (var f = b.next(); !f.done; f = b.next()) {
            f = f.value;
            if (10 <= d.size) {
                e = !0;
                break
            }
            d.add(f)
        }
        e && P(c, Wr(Vn(a), Vn(10)));
        return d
    };
    Hr = function(a, b, c, d) {
        P(c, Un("googletag.setConfig.pps", Vn(d), a, Vn(b)))
    };
    Mr = function(a) {
        return Qr.has(a)
    };
    Yr = function(a) {
        return Xr.has(a)
    };
    bs = function(a, b) {
        if (3 === _.Zr(b)) {
            var c = {
                    fe: new $r
                },
                d = new Dk;
            J(d, new as(a, b, c.fe));
            d.run();
            return {
                Ka: d,
                bm: c
            }
        }
    };
    ds = function(a, b, c, d, e, f, g) {
        if (b) {
            var h = {
                    Zg: new mq
                },
                k = new Dk;
            J(k, new cs(a, b, c, d, h, e, f, g));
            k.run();
            return {
                Ka: k,
                xf: h
            }
        }
    };
    fs = function(a) {
        es = a
    };
    hs = function(a, b, c, d) {
        Sk(b, d, function(e, f) {
            Vl(a, e, f);
            var g, h;
            null == (h = (g = window.console).error) || h.call(g, f)
        }, function() {
            return void P(c, gs())
        })
    };
    ks = function(a, b, c) {
        if (!_.H(is) && !oo()) {
            var d = {
                    Ng: new mq,
                    zb: new mq
                },
                e = new Dk;
            J(e, new js(a, b, c, d));
            e.run();
            return {
                Bd: d,
                Ka: e
            }
        }
    };
    ms = function(a, b, c, d, e) {
        var f = new Dk;
        a = new ls(a, b, c, d, e);
        J(f, a);
        f.run();
        return f
    };
    Ra = function(a, b) {
        a: {
            b = b[0];a = a[0];
            for (var c = _.Pa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = _.Pa(b.length, a.length)
        }
        return b
    };
    ns = function(a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.x(a, "includes").call(a, 0)
    };
    os = function(a) {
        if (ns(a)) return {
            size: [],
            gh: !0
        };
        if (Array.isArray(a) && 0 < a.length && "number" !== typeof a[0]) {
            var b = !1;
            a = a.filter(function(c) {
                c = ns(c);
                b = b || c;
                return !c
            });
            return {
                size: a,
                gh: b
            }
        }
        return {
            size: a,
            gh: !1
        }
    };
    qs = function(a, b) {
        var c = b.T;
        return lq(a, function(d) {
            return ps(c[d.getDomId()]).join("&")
        })
    };
    ps = function(a) {
        a = rs(a);
        var b = [];
        _.Tn(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    rs = function(a) {
        for (var b = {}, c = _.u(sm(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.E(d, 1)] = zm(d);
        a = Gi(a, 8, 2);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    ss = function(a) {
        var b = !1,
            c = _.qk(a, vm, 2).map(function(d) {
                var e = _.E(d, 1);
                b = "excl_cat" === e;
                d = zm(d);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = Gi(a, 3, 2);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    us = function(a, b, c) {
        var d = window,
            e = !zh(d.isSecureContext, d.document);
        if (Ah(d.isSecureContext, d, d.document) || !e) return e = new Dk, a = new ts(a, d, b, c), J(e, a), e.run(), a.j
    };
    ws = function(a, b, c, d, e) {
        if (c) {
            var f = {
                    se: new mq,
                    te: new mq,
                    Ed: new mq
                },
                g = new Dk;
            J(g, new vs(a, b, c, d, f, e));
            g.run();
            return {
                Ka: g,
                Sm: f
            }
        }
    };
    xs = function(a) {
        return "gads_privacy_sandbox_td_buyerlist__" + a
    };
    zs = function(a, b) {
        return a.filter(function(c) {
            return ys(c, 2) > b
        })
    };
    Bs = function(a, b) {
        a = new _.z.Map(a.map(function(e) {
            return [_.E(e, 1), e]
        }));
        b = _.u(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.get(_.E(c, 1));
            d ? As(d, Math.max(ys(c, 2), ys(d, 2))) : a.set(_.E(c, 1), c)
        }
        return _.x(Array, "from").call(Array, _.x(a, "values").call(a))
    };
    Fs = function(a, b, c, d) {
        if (Cs(b, c, d)) return new _.z.Map;
        c = new _.z.Map(_.x(Object, "entries").call(Object, b).filter(function(k) {
            var l = _.u(k);
            k = l.next().value;
            l = l.next().value;
            return _.x(k, "startsWith").call(k, "gads_privacy_sandbox_td_buyerlist__") && l
        }).map(function(k) {
            var l = _.u(k);
            k = l.next().value;
            l = l.next().value;
            return [k, Ds(l)]
        }));
        d = _.u(c);
        for (var e = d.next(); !e.done; e = d.next()) {
            var f = _.u(e.value);
            e = f.next().value;
            f = f.next().value;
            var g = _.qk(f, Es, 1),
                h = zs(g, a);
            0 === h.length ? (c.delete(e), b.removeItem(e)) : h.length < g.length && (_.Em(f, 1, h), b.setItem(e, ql(f)))
        }
        return c
    };
    Gs = function(a, b) {
        return String(_.Qh(b + "-" + _.E(a, 2) + _.E(a, 4) + _.Q(a, 3)))
    };
    Cs = function(a, b, c) {
        if (!_.Q(b, 3)) return !1;
        b = Gs(b, c);
        if (a.getItem("gads_privacy_sandbox_tcf_hash") === b) return !1;
        c = _.u(_.x(Object, "keys").call(Object, a).filter(function(e) {
            return _.x(e, "startsWith").call(e, "gads_privacy_sandbox_td_buyerlist__")
        }));
        for (var d = c.next(); !d.done; d = c.next()) a.removeItem(d.value);
        a.setItem("gads_privacy_sandbox_tcf_hash", b);
        return !0
    };
    Hs = function(a) {
        return null !== a && _.x(Number, "isFinite").call(Number, a) && 0 <= a
    };
    Is = function(a) {
        return (_.I = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"], _.x(_.I, "includes")).call(_.I, a)
    };
    Ks = function(a, b, c, d, e) {
        if (b) {
            var f = b.bc,
                g = b.lm;
            if (b.rh && 4 === f) {
                b = new mq;
                f = new mq;
                if (!g) return b.G({
                    kind: 1,
                    reason: 1
                }), f.G(!1), {
                    Aj: {
                        gj: b,
                        wi: f
                    }
                };
                g = new Dk;
                a = new Js(a, c, d, e, b, f);
                J(g, a);
                g.run();
                return {
                    Aj: {
                        gj: b,
                        wi: f
                    },
                    Ym: g
                }
            }
        }
    };
    Ms = function(a) {
        var b = a.cg,
            c = a.Ab,
            d = void 0 === a.Lh ? [] : a.Lh,
            e = a.interestGroupBuyers,
            f = a.jl,
            g = a.Vk;
        a = a.hm;
        var h = _.Uf(Ls),
            k = {};
        void 0 !== f && (k["https://googleads.g.doubleclick.net"] = f, k["https://td.doubleclick.net"] = f);
        if (g) {
            g = _.u(g);
            for (var l = g.next(); !l.done; l = g.next()) {
                var m = _.u(l.value);
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
            componentAuctions: [e].concat(_.Ki(d)),
            resolveToConfig: b.resolveToConfig.promise
        };
        c.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        return c
    };
    Ns = function(a, b) {
        var c = b.cg;
        c.topLevelSellerSignals.resolve(a.sellerSignals);
        c.directFromSellerSignals.resolve(a.directFromSellerSignals);
        c.directFromSellerSignalsHeaderAdSlot.resolve(a.directFromSellerSignalsHeaderAdSlot);
        c.resolveToConfig.resolve(!!a.resolveToConfig);
        var d;
        a = null == (d = a.componentAuctions) ? void 0 : _.x(d, "find").call(d, function(m) {
            return Is(m.seller)
        });
        var e;
        d = null != (e = null == a ? void 0 : a.perBuyerCumulativeTimeouts) ? e : {};
        b = _.u(b.interestGroupBuyers);
        for (e = b.next(); !e.done; e = b.next()) {
            e = e.value;
            var f = void 0,
                g = void 0;
            (null == (f = a) ? 0 : null == (g = f.interestGroupBuyers) ? 0 : _.x(g, "includes").call(g, e)) || (d[e] = 0)
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
    Ps = function(a, b) {
        if (_.H(Os) && !Hs(b)) return [];
        var c = Math.round(b);
        return a.map(function(d) {
            var e = new Es;
            d = _.Aj(e, 1, d);
            return As(d, c)
        })
    };
    Rs = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            e = _.Q(c, 18),
            f = _.Q(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = _.E(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        _.Q(c, 4) && (d += "&is_plog=1");
        (e = _.E(c, 11)) && (d += "&ecrs=" + e);
        if (null == c ? 0 : _.E(c, 19)) d += "&cid=" + encodeURIComponent(_.E(c, 19));
        (null == c ? 0 : _.Q(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        Qs(d)
    };
    Ss = function(a, b, c, d, e) {
        a.Ob.G(e);
        a.Ga.G(c);
        a.Ja.G(d);
        null == b || b.G(!1)
    };
    $s = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n, p, r, v, w;
        return _.Lf(function(y) {
            if (1 == y.g) return ("string" !== typeof a || _.x(a, "startsWith").call(a, "urn:")) && Ts.deprecatedURNToURL && Ts.deprecatedReplaceInURN ? y.yield(Ts.deprecatedURNToURL(a), 2) : y.return();
            c = y.A;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Us)) ? f : []).forEach(function(B) {
                d[B] = e
            });
            g = b.gl || "";
            (null != (h = c.match(Vs)) ? h : []).forEach(function(B) {
                d[B] = g
            });
            k = b.ak || "";
            (null != (l = c.match(Ws)) ? l : []).forEach(function(B) {
                d[B] = k
            });
            m = b.Wj || "";
            (null != (n = c.match(Xs)) ? n : []).forEach(function(B) {
                d[B] = m
            });
            p = b.Uj || "";
            (null != (r = c.match(Ys)) ? r : []).forEach(function(B) {
                d[B] = p
            });
            v = b.nm || "";
            (null != (w = c.match(Zs)) ? w : []).forEach(function(B) {
                d[B] = v
            });
            return y.yield(Ts.deprecatedReplaceInURN(a, d), 0)
        })
    };
    at = function(a) {
        return "function" === typeof FencedFrameConfig && a instanceof FencedFrameConfig
    };
    et = function(a) {
        var b = a.Nk,
            c = a.ck,
            d = a.jm,
            e = a.kl;
        a = a.ob;
        if ("string" === typeof c || at(c)) c = 4;
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
        var f = new bt;
        c = _.K(f, 3, c);
        d = _.Aj(c, 2, d);
        b = _.Jl(d, 1, b);
        void 0 !== e && _.Aj(b, 4, e);
        e = new ct;
        void 0 !== a && _.Jl(e, 1, a);
        _.Kl(e, 3, dt, b);
        return e
    };
    ft = function(a, b, c, d, e, f, g, h) {
        var k = 3 === b,
            l = 2 === b,
            m = 1 === b,
            n = f.getEscapedQemQueryId(),
            p = _.E(f, 6);
        Op("run_ad_auction_stats", function(r) {
            np(r, a);
            op(r, "duration_ms", c);
            op(r, "applied_timeout_ms", d);
            op(r, "timed_out", l ? 1 : 0);
            op(r, "error", k ? 1 : 0);
            op(r, "auction_skipped", m ? 1 : 0);
            op(r, "auction_winner", h ? 1 : 0);
            op(r, "thread_release_only", _.Q(f, 15) ? 1 : 0);
            op(r, "winner_qid", null != n ? n : "");
            op(r, "xfpQid", null != p ? p : "");
            op(r, "publisher_tag", "gpt");
            e && op(r, "parallel", "1");
            0 < g && op(r, "nc", g)
        }, 1)
    };
    gt = function(a, b, c, d, e) {
        var f = e.getEscapedQemQueryId(),
            g = _.E(e, 6);
        Op("run_ad_auction_complete", function(h) {
            np(h, a);
            op(h, "duration_ms", Math.round(d));
            op(h, "applied_timeout_ms", c);
            op(h, "auction_has_winner", b);
            f && op(h, "winner_qid", f);
            g && op(h, "xfpQid", g)
        }, 1)
    };
    ht = function(a, b) {
        var c = b.getEscapedQemQueryId(),
            d = _.E(b, 6);
        Op("pre_run_ad_auction_ping", function(e) {
            np(e, a);
            op(e, "winner_qid", null != c ? c : "");
            op(e, "xfpQid", null != d ? d : "");
            op(e, "publisher_tag", "gpt")
        }, 1)
    };
    ot = function(a, b, c, d) {
        var e = hn(a, document);
        e && gj(e, window, d, !0);
        jt(_.Sf(Tl), "5", kt(c.T[a.getDomId()], 20));
        lt(a, mt, 801, {
            Th: null,
            isBackfill: !1
        });
        if (_.Nq(b, a) && !qn(a, document)) {
            b = c.ca;
            c = c.T[a.getDomId()];
            var f;
            (null != (f = rq(c, 10)) ? f : _.Q(b, 11)) && Mq(a, document, c, b)
        }
        lt(a, nt, 825, {
            isEmpty: !0
        })
    };
    qt = function(a) {
        if (!_.H(pt)) return null;
        var b = new _.z.Set;
        a = _.u(_.x(a, "values").call(a));
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, _.Q(c, 2) && _.qk(c, Es, 1).forEach(function(d) {
            b.add(_.E(d, 1))
        });
        return 0 < b.size ? _.x(Array, "from").call(Array, b) : null
    };
    st = function(a, b, c, d, e, f, g, h, k) {
        if (b) {
            var l = b.bc;
            if (b.rh && 0 !== l) return b = new Dk, a = new rt(a, l, c, d, e, f, g, h, k), J(b, a), b.run(), {
                Xm: a.j,
                Wm: b
            }
        }
    };
    tt = function() {
        for (var a = _.u(_.x(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0, c = document.createElement("script"), b = ib(b.textContent), kb(c, b), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    ut = function(a, b) {
        b = _.u(_.x(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.u(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    xt = function(a, b, c) {
        var d = [];
        c = [].concat(_.Ki(c.X)).slice();
        if (b) {
            if (!Array.isArray(b)) return P(a, km("googletag.destroySlots", [b])), !1;
            Oa(b);
            d = c.filter(function(e) {
                return _.x(b, "includes").call(b, e.g)
            })
        } else d = c;
        if (!d.length) return !1;
        vt(d);
        wt(d);
        return !0
    };
    Lt = function(a, b, c, d, e, f, g, h, k, l) {
        var m = No(),
            n, p, r = L(a, 74, function(w, y, B) {
                return e.defineSlot(a, b, w, y, B)
            }),
            v = {};
        r = (v._loaded_ = !0, v.cmd = [], v._vars_ = m._vars_, v.evalScripts = function() {
            try {
                tt()
            } catch (B) {
                Vl(a, 297, B);
                var w, y;
                null == (w = window.console) || null == (y = w.error) || y.call(w, B)
            }
        }, v.display = L(a, 95, function(w) {
            yt(c, w, e)
        }), v.defineOutOfPageSlot = L(a, 73, function(w, y) {
            return (w = Kq(a, b, e, {
                Zh: y,
                adUnitPath: w
            })) ? w.g : null
        }), v.getVersion = L(a, 946, function() {
            return a.Ze
        }), v.pubads = L(a, 947, function() {
            return xo(a, b, c, e, h)
        }), v.companionAds = L(a, 816, function() {
            null != n || (n = new zt(a, b, c, f));
            return nm(a, b, n)
        }), v.content = L(a, 817, function() {
            null != p || (p = new At(a, b, g));
            return pm(a, b, p)
        }), v.setAdIframeTitle = L(a, 729, fs), v.getEventLog = L(a, 945, function() {
            return new Bt(a, b)
        }), v.sizeMapping = L(a, 90, function() {
            return new Ct(a, b)
        }), v.enableServices = L(a, 91, function() {
            for (var w = _.u(Dt), y = w.next(); !y.done; y = w.next()) y = y.value, y.enabled && b.info(Et()), Ft(y)
        }), v.destroySlots = L(a, 75, function(w) {
            return xt(b, w, e)
        }), v.enums = Fn(), v.defineSlot = r, v.defineUnit = r, v.getWindowsThatCanCommunicateWithHostpageLibrary = L(a, 955, function(w) {
            return Gt(k, w).map(function(y) {
                var B;
                return null == (B = qn(y, document)) ? void 0 : B.contentWindow
            }).filter(function(y) {
                return !!y
            })
        }), v.disablePublisherConsole = L(a, 93, up), v.onPubConsoleJsLoad = L(a, 731, xp), v.openConsole = L(a, 732, function(w) {
            pp = !0;
            var y;
            (null == (y = No()) ? 0 : y.console) ? No().console.openConsole(w): (w && (wp = w), vp = !0, jp(a))
        }), v.setConfig = L(a, 1034, function(w) {
            if (ah(w)) {
                if (_.x(Object, "hasOwn").call(Object, w, "pps")) {
                    var y = w.pps;
                    if (null === y) {
                        var B = _.Cj(d, Ht, 33);
                        _.xk(B, 2)
                    } else {
                        B = _.Cj(_.Cj(d, Ht, 33), It, 2);
                        _.xk(B, 1);
                        if (ah(y) && y.hasOwnProperty("taxonomies")) var C = !0;
                        else P(b, km("googletag.setConfig.pps", [y])), C = !1;
                        if (C)
                            if (C = y.taxonomies, ah(C) && null !== C) {
                                var G;
                                _.x(Object, "keys").call(Object, C).some(Mr) ? G = Ur : Ir(C, b, y) && (G = Lr);
                                if (G) {
                                    y = _.u(_.x(Object, "entries").call(Object, C));
                                    for (var F = y.next(); !F.done; F = y.next()) {
                                        var M = _.u(F.value);
                                        F = M.next().value;
                                        M = M.next().value;
                                        G(F, M, B, b, C)
                                    }
                                }
                            } else Hr("taxonomies", C, b, y)
                    }
                }
                _.x(Object, "hasOwn").call(Object, w, "adExpansion") && (_.xk(d, 34), B = w.adExpansion, null !== B && ah(B) && _.x(Object, "hasOwn").call(Object, B, "enabled") && (B = B.enabled, Po(B) && (B = Qo(B), _.vi(d, 34, B))));
                if (_.x(Object, "hasOwn").call(Object, w, "privacyTreatments")) {
                    w = w.privacyTreatments;
                    _.xk(d, 36);
                    a: {
                        if (null !== w && ah(w) && _.x(Object, "hasOwn").call(Object, w, "treatments")) {
                            w = w.treatments;
                            if (Jt(w) && w.every(Yr)) {
                                w = {
                                    treatments: w
                                };
                                break a
                            }
                            P(b, km("googletag.setConfig", [w]))
                        }
                        w = void 0
                    }
                    B = w;
                    if (void 0 !== B) {
                        w = new _.z.Set;
                        B = _.u(B.treatments);
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
                            void 0 === C ? P(b, km("googletag.setConfig", [G])) : w.add(C)
                        }
                        if (w.size) {
                            B = new Kt;
                            G = B.D;
                            C = lc(G);
                            nc(Ud(B.D));
                            G = ee(G, C, 1, !1);
                            C = lc(G);
                            C = !!(4 & C) && !!(4096 & C);
                            if (Array.isArray(w))
                                for (y = 0; y < w.length; y++) G.push(_.Bc(w[y], C));
                            else
                                for (w = _.u(w), y = w.next(); !y.done; y = w.next()) G.push(_.Bc(y.value, C));
                            _.vi(d, 36, B)
                        }
                    }
                }
            } else P(b, km("googletag.setConfig", [w]))
        }), v.apiReady = !0, v);
        hs(a, m, b, l);
        ut(m, r)
    };
    Ut = function(a, b) {
        var c = new Dk;
        b = new Mt(a, b);
        J(c, b);
        a = new Tt(a, b.j);
        J(c, a);
        c.run();
        return {
            Zc: a.Zc,
            jd: a.jd,
            ed: a.ed,
            Nb: a.Nb,
            zd: a.zd,
            Cd: a.Cd,
            oc: a.oc,
            Mb: a.Mb,
            am: c
        }
    };
    ou = function(a, b, c, d, e, f, g, h, k) {
        var l = window,
            m = rn(),
            n = new Dk,
            p = new Vt(a, l);
        p = J(n, p).output;
        var r = new Dk;
        var v = new Wt(a, l);
        J(r, v);
        r.run();
        r = {
            Wl: v.C,
            qc: v.qc
        };
        _.H(Xt) && J(n, new Yt(a, l));
        if (oa()) {
            v = {
                aj: new mq
            };
            var w = new Dk;
            J(w, new Zt(a, window, v.aj));
            w.run()
        } else v = void 0;
        var y = _.H($t);
        w = l.navigator;
        l = yh(l.isSecureContext, l.navigator, l.document);
        l = !y && l;
        y = _.Uf(au);
        var B = !!w.getInterestGroupAdAuctionData;
        w = _.H(bu) && !!w.createAuctionNonce;
        l = {
            rh: l,
            bc: y,
            lm: B,
            Yj: w
        };
        if (e)
            if (_.H(cu)) {
                var C = Ut(a, e);
                B = C.zd;
                y = C.ed;
                w = C.jd;
                var G = C.Zc;
                var F = C.Nb,
                    M = C.Cd,
                    R = C.oc;
                C = C.Mb;
                var N, aa = new du(a, document, No(), b, m, c, null != (N = window.location.hash) ? N : "");
                J(n, aa);
                b = new eu(a, No(), null, b, m, c, B);
                J(n, b);
                m = new fu(a, y);
                J(n, m);
                h = new gu(a, window, w, h);
                J(n, h);
                if (f = oq(a, f, G)) var ha = f.Fh;
                e = br(a, e, h.j);
                N = e.Lc;
                G = e.rg;
                _.S(n, e.Ka);
                e = new hu(a, G);
                J(n, e);
                f = new iu(a, G);
                J(n, f);
                c = dp(a, c, d, window, N, G, 2).nb;
                if (_.H(ju)) {
                    N = new ku(a, window.navigator, c);
                    var la = N.j;
                    J(n, N)
                }
                N = void 0;
                _.H(lu) && (d = new mu(a, d, window, c), N = d.output, J(n, d));
                if (d = ks(a, F, c)) var ea = d.Bd;
                d = us(a, p, c);
                ms(a, g, k, c, M);
                G = {
                    Pd: ha,
                    Bd: ea,
                    Ti: h.j,
                    Mh: m.output,
                    Db: b.Db,
                    Nb: F,
                    fd: e.fd,
                    gi: f.j,
                    oc: R,
                    ue: d,
                    og: N,
                    Qh: la,
                    Mb: C
                }
            } else {
                a = new nu(a, b, m, c, d, e, f, g);
                g = new Dk;
                _.S(a, g);
                m = Ut(a.context, a.g);
                c = m.zd;
                e = m.ed;
                b = m.jd;
                f = m.Zc;
                ha = m.Nb;
                la = m.Cd;
                ea = m.oc;
                d = m.Mb;
                _.S(a, m.am);
                m = new du(a.context, document, No(), a.j, a.l, a.R, null != (C = window.location.hash) ? C : "");
                J(g, m);
                c = new eu(a.context, No(), null, a.j, a.l, a.R, c);
                J(g, c);
                e = new fu(a.context, e);
                J(g, e);
                h = new gu(a.context, window, b, h);
                J(g, h);
                if (f = oq(a.context, a.ib, f)) F = f.Fh, _.S(a, f.Ka);
                f = br(a.context, a.g, h.j);
                b = f.Lc;
                m = f.rg;
                _.S(g, f.Ka);
                f = new hu(a.context, m);
                J(g, f);
                C = new iu(a.context, m);
                J(g, C);
                m = dp(a.context, a.R, a.L, window, b, m, 2);
                b = m.nb;
                _.S(a, m.Ka);
                _.H(ju) && (m = new ku(a.context, window.navigator, b), M = m.j, J(g, m));
                m = void 0;
                _.H(lu) && (N = new mu(a.context, a.L, window, b), m = N.output, J(g, N));
                if (N = ks(a.context, ha, b)) R = N.Bd, _.S(a, N.Ka);
                N = us(a.context, p, b);
                _.S(a, ms(a.context, a.F, k, b, la));
                g.run();
                G = {
                    Pd: F,
                    Bd: R,
                    Ti: h.j,
                    Mh: e.output,
                    Db: c.Db,
                    Nb: ha,
                    fd: f.fd,
                    gi: C.j,
                    oc: ea,
                    ue: N,
                    og: m,
                    Qh: M,
                    Mb: d
                }
            }
        n.run();
        return {
            Vl: r,
            gm: v,
            ag: p,
            Vm: l,
            He: {
                qd: new _.z.Set
            },
            Kb: G
        }
    };
    pu = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver && new IntersectionObserver(a, b)
    };
    ev = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G) {
        var F = new Dk,
            M = Qm(!0, window),
            R = k.ca,
            N = k.T[e.getDomId()],
            aa = C.ag,
            ha = C.He.qd,
            la, ea = null == (la = C.Kb) ? void 0 : la.ue,
            Ga = new qu(a, window);
        J(F, Ga);
        var ta = m.height,
            Ba = m.width,
            Na = m.ub,
            Wa = m.Oa,
            eb = m.Ld,
            Ta = m.isBackfill,
            cc = m.Ib,
            Fc = m.fl,
            $b = m.gb,
            jc = m.Qf,
            dc = m.uh,
            ec = m.Ag,
            Oc = m.Tb,
            Pc = m.bf,
            pf = m.Lb,
            ue = m.Ra,
            Kd = m.ha,
            ve = m.ah,
            sg = m.tk,
            tg = m.Uf,
            Qc = new mq;
        Qc.G(p);
        var Ld = new ru(a, window.top, Qc);
        J(F, Ld);
        var Md = new su(a, Ar(N), M.height, $b, ta);
        J(F, Md);
        var ab = new tu(a, e, hn(e, n), e.getDomId(), pn(e), n.documentElement, Ar(N), h, f);
        uu(F, ab);
        var Ob = ab.output,
            qf = new vu(a, ue, eb, Ta, cc);
        J(F, qf);
        var we = new wu(a, _.Km(R, xu, 5), N, d);
        J(F, we);
        var ug = new yu(a, window.location.hash, M, e.getAdUnitPath(), N, f, Md.output, jc, Ba, ta, qf.output, Ob);
        uu(F, ug);
        var jd = ug.J,
            rf = new zu(a, R, N, eb, cc, jd.cf);
        J(F, rf);
        var rj = Ld.output,
            sj = jd.Ga,
            vg = jd.Ja;
        if (yh(window.isSecureContext, window.navigator, window.document) && !_.H($t) && g) {
            var Ch = {
                    Pc: new $r,
                    Ga: new mq,
                    Ja: new mq,
                    md: new mq
                },
                wg = new Dk;
            J(wg, new Au(a, e, rj, N, h, p, f, sj, vg, Ob, r, k, B, Wa, Kd, Ch, v, G));
            wg.run();
            var Dh = {
                Ka: wg,
                Zm: Ch
            }
        } else Dh = void 0;
        var xg = Dh;
        if (xg) {
            _.S(F, xg.Ka);
            var xe = xg.Zm
        }
        var Eh, Fh, Gh = null != (Fh = null == (Eh = xe) ? void 0 : Eh.Ga) ? Fh : jd.Ga,
            Hh, Ih, Nd = null != (Ih = null == (Hh = xe) ? void 0 : Hh.Ja) ? Ih : jd.Ja,
            Jh, kd = null == (Jh = xe) ? void 0 : Jh.Pc,
            Kh, sf = null == (Kh = xe) ? void 0 : Kh.md,
            Gc = new Bu(a, e, R, N, Ar(N), n, h, Ob, rf.output, Nd, Na, kd);
        J(F, Gc);
        var tf = new Cu(a, Gc.output);
        J(F, tf);
        var uf = new Du(a, e, M, h, tf.output, we.j, kd);
        J(F, uf);
        var Rc = new Eu(a, uf.output, Gc.output, we.j, kd);
        J(F, Rc);
        var yg = new Fu(a, window, M, e, N, Ob, Gc.output, Na, Nd, jd.Be, Wa);
        uu(F, yg);
        var zg = new Gu(a, R, N, dc, Gh, rf.output);
        J(F, zg);
        var Ag = new Hu(a, window, pf, Ga.output, kd);
        J(F, Ag);
        var vf = new Iu(a, Ar(N), n);
        J(F, vf);
        var Sc = new Ju(a, y, Ar(N), $b, Fc, kd);
        J(F, Sc);
        var wf = new Ku(a, ec, sf, Qc, kd);
        J(F, wf);
        var Lh = window;
        if (_.H(ll) && ea) {
            var ye = new Dk;
            J(ye, new Lu(a, Lh, tg, ea));
            ye.run();
            var ld = ye
        } else ld = void 0;
        var md = ld;
        md && _.S(F, md);
        var Pb = new Mu(a, e, h, k, w, l, Na, Wa, Ta, Oc, Kd, window, Gh, rf.output, Rc.output, Ob, Gc.output, Nd, zg.output, yg.Pc, Ag.output, vf.output, Sc.output, aa, kd);
        J(F, Pb);
        var xf = new Nu(a, window, e, Pb.o, Qc);
        J(F, xf);
        var Bg = Ar(N);
        switch (Bg) {
            case 2:
            case 3:
                _.H(Ou) ? J(F, new Pu(a, h, Ar(N), e, window, $b, Pb.j, Ob, Sc.output, Nd)) : J(F, new Qu(a, h, Ar(N), e, window, $b, Pb.j, Ob, Sc.output, Nd));
                break;
            case 5:
                J(F, new Ru(a, e, k.Id, Fc, n, Pb.j, Ob, Ld.output, Sc.output, B));
                break;
            case 4:
                var yf = new Su(a, e, w, window, Pb.j, Ob);
                _.S(F, yf);
                yf.run();
                break;
            case 7:
                uu(F, sr(a, e, w, Pb.j, Ob));
                break;
            case 8:
            case 9:
                var Mh = Pb.j,
                    Nh = Gc.output,
                    ze = window,
                    Tc = new Dk,
                    Oh = 8 === Bg ? 3 : 4,
                    Ae = new Tu(a, y);
                J(Tc, Ae);
                J(Tc, new Uu(a, ze, Oh, Ae.output, Mh, Nh, Nd));
                Tc.run();
                Tc && _.S(F, Tc)
        }
        var zf = new Vu(a, e, Pb.j, n, w);
        J(F, zf);
        var Qb = new Wu(a, e, Xu(h, e), window.top);
        J(F, Qb);
        var Ph = Pb.j,
            Hc = new Dk,
            Cg = J(Hc, new jr(a, e, Yu)),
            Af = J(Hc, new Zu(a, n, Ph, Cg.output));
        J(Hc, new $u(a, Af.output, w, e));
        Hc.run();
        _.S(F, Hc);
        var Dg = new av(a, Xu(h, e), window.top, Pb.j, Ga.output, Qb.output, Qb.j);
        J(F, Dg);
        J(F, new bv(a, e, Na, eb, Pb.j, Gc.output, Pb.C));
        var Eg = new cv(a, window, Pc, Pb.j, Gc.output, Ob);
        J(F, Eg);
        var Fg = No(),
            nd = new Dk,
            Be = new dv(a, n, Fg, R, c, b, d, ha, sg);
        J(nd, Be);
        nd.run();
        _.S(F, nd);
        var Ce = new mq;
        Ce.G(ve);
        J(F, new eu(a, No(), R, b, c, d, Ce));
        return F
    };
    hv = function(a, b, c) {
        var d = null;
        try {
            var e = fv(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.ca,
                    h = c.T[f.getDomId()];
                g = sq(g, h);
                var k;
                f = null == (k = nn(f, h, b.document, g)) ? void 0 : k.y;
                k = Qm(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++gv
            })
        } catch (f) {}
        return d
    };
    pv = function(a) {
        return Xl(a.la.context, 1132, function() {
            if (a.ma.X.length) {
                var b = new _.z.Set(Wf(iv));
                var c = a.la.Z;
                c = _.H(jv) && _.Q(c, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id".split(" ") : [];
                c = _.u(c);
                for (var d = c.next(); !d.done; d = c.next()) b.add(d.value);
                d = new _.z.Map;
                c = _.u(kv);
                for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a, d);
                c = "https://" + (lv(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
                d = _.u(d);
                for (e = d.next(); !e.done; e = d.next()) {
                    var f = _.u(e.value);
                    e = f.next().value;
                    var g = f.next().value;
                    f = g.value;
                    g = void 0 === g.options ? {} : g.options;
                    (new RegExp("[?&]" + e + "=")).test(c);
                    if (!b.has(e) && null != f) {
                        var h = void 0 === g.Ia ? !1 : g.Ia;
                        if (f = "object" !== typeof f ? null == f || !h && 0 === f ? null : encodeURIComponent(f) : Array.isArray(f) && f.length ? mv(f, g) : null) "?" !== c[c.length - 1] && (c += "&"), c += e + "=" + f
                    }
                }
                if (1 === _.Uf(nv) || 2 === _.Uf(nv)) b = _.Uf(ov), b = 0 >= b ? "" : (_.I = _.x(Array, "from").call(Array, {
                    length: Math.ceil(b / 8)
                }), _.x(_.I, "fill")).call(_.I, "testdata").join("").substring(0, b), 2 === _.Uf(nv) && (c += "&dblt=" + b);
                b = c
            } else b = "";
            return b
        })
    };
    lv = function(a) {
        var b = a.la.Z,
            c, d;
        a = null != (d = null == (c = qv(a.ma.P.ca)) ? void 0 : _.Q(c, 9)) ? d : !1;
        c = _.H(jv) && _.Q(b, 8);
        return a || c || !mh(b)
    };
    mv = function(a, b) {
        var c = void 0 === b.Ua ? "," : b.Ua,
            d = void 0 === b.Qd ? "" : b.Qd,
            e = void 0 === b.Ia ? !1 : b.Ia,
            f = !1;
        a = a.map(function(g) {
            f || (f = !!g);
            return String(0 === g && e ? g : g || d)
        });
        return f || e ? encodeURIComponent(a.join(c)) : null
    };
    sv = function(a, b) {
        var c = a.responseText;
        b = b.R;
        403 === a.status && b.error(rv(c));
        return {}
    };
    wv = function(a, b) {
        try {
            _.Uf(tv);
            var c, d = null != (c = b.Mo) ? c : uv,
                e = _.u(a.X),
                f = e.next();
            for (a = {}; !f.done; a = {
                    qe: void 0
                }, f = e.next()) {
                a.qe = f.value;
                var g = d.get(a.qe);
                d.set(a.qe, (new Date).getTime());
                g ? b.wa.Zb.lc.li.refresh.km.Qc({
                    Tc: (new Date).getTime() - g,
                    Om: _.Uf(vv)
                }) : _.Bp(a.qe, function(h) {
                    return function() {
                        return void d.delete(h.qe)
                    }
                }(a))
            }
        } catch (h) {}
        return {}
    };
    zv = function() {
        var a = _.Uf(xv);
        switch (a) {
            case 0:
                return oa() && yv(window.fetch) && yv(window.TextDecoderStream);
            case 1:
                return oa() && yv(window.fetch) && !!window.TextDecoderStream;
            case 2:
                return oa() && !!window.fetch && !!window.TextDecoderStream;
            case 3:
                return !na() && yv(window.fetch) && !!window.TextDecoderStream;
            case 4:
                return !na() && !!window.fetch && !!window.TextDecoderStream;
            case 5:
                return yv(window.fetch) && !!window.TextDecoderStream;
            case 6:
                return !!window.fetch && !!window.TextDecoderStream;
            default:
                gb(a)
        }
    };
    Bv = function(a, b, c) {
        b = Av(b, c);
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
                gb(b)
        }
    };
    Av = function(a, b) {
        if (0 === a) return 0;
        a = _.Uf(Cv);
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
                gb(a)
        }
    };
    Qv = function(a, b) {
        a = a.Tg;
        var c = b.Ra,
            d, e;
        b = Dv(a, 6);
        var f = Dv(a, 7),
            g = !!Xn(a, 8),
            h = Ev(a, 10),
            k = null != (e = a.getEscapedQemQueryId()) ? e : "";
        e = _.Km(a, Fv, 43);
        var l = !!Xn(a, 9),
            m = !!Xn(a, 12),
            n = _.Km(a, Gv, wl(a, Hv, 48)),
            p = _.Km(a, Iv, wl(a, Hv, 39)),
            r = _.Dc(_.si(a, 36)),
            v = !!Xn(a, 13),
            w = Ev(a, 49),
            y = _.Km(a, Jv, 51),
            B = Ev(a, 61);
        if (0 !== c.kind) {
            var C;
            c = {
                kind: 0,
                hb: null != (C = sk(a, 4)) ? C : ""
            }
        }
        C = c;
        c = _.Km(a, Kv, 58);
        var G = null == (d = _.Km(a, Lv, 56)) ? void 0 : Ev(d, 1);
        d = _.qk(a, Mv, 62);
        var F = _.qk(a, Nv, 67),
            M = je(a, 63, cd, 2, void 0, void 0, 0);
        return {
            output: {
                height: b,
                width: f,
                isEmpty: g,
                ub: h,
                Oa: k,
                Ld: e,
                isBackfill: l,
                Ib: m,
                fl: n,
                gb: p,
                Qf: r,
                uh: v,
                Tb: w,
                bf: y,
                Lb: B,
                Ra: C,
                ha: c,
                fn: G,
                ah: d,
                tk: F,
                Ag: M,
                Uf: !!Xn(a, 64),
                jg: _.Km(a, Ov, 68),
                Ak: _.H(Pv) ? Ev(a, 1) : void 0
            }
        }
    };
    Tv = function(a, b) {
        var c = b.R;
        b = b.context;
        var d;
        (null == (d = _.Km(a.Tg, Rv, 69)) ? 0 : _.Q(d, 1)) && P(c, Sv(b.Pa));
        return {}
    };
    Uv = function(a) {
        var b = a;
        return function() {
            var c = _.ya.apply(0, arguments);
            if (b) {
                var d = b;
                b = null;
                d.apply(null, _.Ki(c))
            }
        }
    };
    Vv = function(a) {
        var b = null,
            c = 0,
            d = 0;
        return function() {
            var e, f, g, h;
            return _.Lf(function(k) {
                if (1 == k.g) return c && clearTimeout(c), c = 0, e = new _.ai, f = Uv(e.resolve), g = ++d, k.yield(0, 2);
                if (d !== g) return f(!1), k.return(e.promise);
                b ? b(!1) : f(!0);
                h = Uv(function() {
                    b = null;
                    c = 0;
                    f(!0)
                });
                c = setTimeout(h, _.Uf(vv));
                _.Bp(a, function() {
                    return void f(!1)
                });
                b = f;
                return k.return(e.promise)
            })
        }
    };
    Wv = function(a) {
        var b = 0,
            c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k, l, m;
            return _.Lf(function(n) {
                if (1 == n.g) return f = new _.ai, g = Uv(f.resolve), h = ++e, n.yield(0, 2);
                if (e !== h) return g(!1), n.return(f.promise);
                null == (k = c) || k(!1);
                l = Uv(function() {
                    b = (new Date).getTime();
                    c = null;
                    d = 0;
                    g(!0)
                });
                d && clearTimeout(d);
                m = (new Date).getTime() - b;
                m > _.Uf(vv) ? l() : (d = setTimeout(l, _.Uf(vv) - m), _.Bp(a, function() {
                    return void g(!1)
                }), c = g);
                return n.return(f.promise)
            })
        }
    };
    Yv = function(a, b) {
        a = a.X;
        var c = b.L,
            d = b.yb;
        b = b.yl;
        if (!a.length) return {
            ke: []
        };
        for (var e = _.u(a), f = e.next(); !f.done; f = e.next()) Oq(c, f.value);
        return b ? {
            ke: []
        } : d ? (c = Ql(a[0].getAdUnitPath()), {
            ke: Xv(a, c)
        }) : {
            ke: a.map(function(g) {
                return {
                    networkCode: Ql(g.getAdUnitPath()),
                    X: [g]
                }
            })
        }
    };
    Xv = function(a, b) {
        var c = [];
        a = Ya(a, function(f) {
            return Ql(f.getAdUnitPath())
        });
        a = _.u(_.x(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.u(d.value);
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
    $v = function(a, b) {
        a = a.X;
        var c = function(d) {
            return !!Rm(b.T[d.getDomId()]).length
        };
        return {
            tj: a.filter(c),
            Dj: a.filter(Zv(c))
        }
    };
    hw = function() {
        var a = new aw;
        var b = (new bw).setCorrelator(mk(_.t));
        var c = wh().join();
        b = _.Aj(b, 5, c);
        b = _.K(b, 2, 1);
        a = _.vi(a, 1, b);
        b = new cw;
        c = _.H(dw);
        b = _.Il(b, 7, c);
        c = _.H(ew);
        b = _.Il(b, 8, c);
        c = _.H(fw);
        b = _.Il(b, 9, c);
        b = _.Il(b, 10, !0);
        c = _.H(gw);
        b = _.Il(b, 13, c);
        b = _.Il(b, 16, !0);
        a = _.vi(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    lw = function() {
        var a = _.H(iw) ? _.Df(jw) : _.Df(kw);
        _.rp(document, a)
    };
    rw = function(a, b) {
        var c = mw() || nw() ? 1 : _.Bh(),
            d = .001 > c;
        d ? (b.F = !0, vh(31067358)) : .002 > c && vh(31067357);
        Zn(23, a);
        a = 1E-4 > c;
        b = _.Uf(bp);
        b = 0 < b && c < 1 / b;
        var e = _.Uf(ow),
            f = 0 < e && c < e,
            g = _.Uf(pw),
            h = 0 < g && c < 1 / g,
            k = _.Uf(tv);
        k = 0 < k && c < 1 / k;
        var l = _.Uf(qw);
        return {
            Vc: d,
            Ki: 1E3,
            sj: a,
            Ji: 1E4,
            kh: d,
            kg: 1E3,
            Am: f,
            im: e,
            ym: h,
            Ol: g,
            Bm: k,
            Cm: 0 < l && c < 1 / l,
            vm: b,
            Rh: c
        }
    };
    vw = function(a, b) {
        var c = _.x(Object, "assign").call(Object, {}, a);
        a = a.Rh;
        c = (delete c.Rh, c);
        var d = window.document.URL,
            e = new sw(4, b.Pa, 1E3);
        a = new tw(e, a);
        return _.x(Object, "assign").call(Object, {}, b, c, {
            Go: new uw(b)
        }, {
            Qa: e,
            Ea: d,
            V: a
        })
    };
    _.ba = [];
    ww = function(a) {
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
    xw = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    yw = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    _.zw = yw(this);
    Aw = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.z = {};
    Bw = {};
    _.x = function(a, b, c) {
        if (!c || null != a) {
            c = Bw[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    };
    Cw = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in _.z ? f = _.z : f = _.zw;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = Aw && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? xw(_.z, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === Bw[d] && (a = 1E9 * Math.random() >>> 0, Bw[d] = Aw ? _.zw.Symbol(d) : "$jscp$" + a + "$" + d), xw(f, Bw[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    Cw("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            xw(this, "description", {
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
    Cw("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, _.z.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.zw[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && xw(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Dw(ww(this))
                }
            })
        }
        return a
    }, "es6");
    Dw = function(a) {
        a = {
            next: a
        };
        a[_.x(_.z.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    _.Ew = function(a) {
        return a.raw = a
    };
    Fw = function(a, b) {
        a.raw = b;
        return a
    };
    _.u = function(a) {
        var b = "undefined" != typeof _.z.Symbol && _.x(_.z.Symbol, "iterator") && a[_.x(_.z.Symbol, "iterator")];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: ww(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.Ki = function(a) {
        if (!(a instanceof Array)) {
            a = _.u(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    Gw = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Hw = Aw && "function" == typeof _.x(Object, "assign") ? _.x(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Gw(d, e) && (a[e] = d[e])
        }
        return a
    };
    Cw("Object.assign", function(a) {
        return a || Hw
    }, "es6");
    var Iw = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        Jw = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (Aw && "undefined" != typeof Reflect && Reflect.construct) {
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
                e = Iw(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        Kw;
    if (Aw && "function" == typeof _.x(Object, "setPrototypeOf")) Kw = _.x(Object, "setPrototypeOf");
    else {
        var Lw;
        a: {
            var Mw = {
                    a: !0
                },
                Nw = {};
            try {
                Nw.__proto__ = Mw;
                Lw = Nw.a;
                break a
            } catch (a) {}
            Lw = !1
        }
        Kw = Lw ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    Ow = Kw;
    _.T = function(a, b) {
        a.prototype = Iw(b.prototype);
        a.prototype.constructor = a;
        if (Ow) Ow(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Mm = b.prototype
    };
    Pw = function() {
        this.F = !1;
        this.j = null;
        this.A = void 0;
        this.g = 1;
        this.J = this.l = 0;
        this.M = null
    };
    Qw = function(a) {
        if (a.F) throw new TypeError("Generator is already running");
        a.F = !0
    };
    Pw.prototype.I = function(a) {
        this.A = a
    };
    var Rw = function(a, b) {
        a.M = {
            exception: b,
            vl: !0
        };
        a.g = a.l || a.J
    };
    Pw.prototype.return = function(a) {
        this.M = {
            return: a
        };
        this.g = this.J
    };
    Pw.prototype.yield = function(a, b) {
        this.g = b;
        return {
            value: a
        }
    };
    Nf = function(a) {
        a.l = 0;
        var b = a.M.exception;
        a.M = null;
        return b
    };
    Sw = function(a) {
        this.g = new Pw;
        this.A = a
    };
    Vw = function(a, b) {
        Qw(a.g);
        var c = a.g.j;
        if (c) return Tw(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return Uw(a)
    };
    Tw = function(a, b, c, d) {
        try {
            var e = b.call(a.g.j, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.F = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.j = null, Rw(a.g, g), Uw(a)
        }
        a.g.j = null;
        d.call(a.g, f);
        return Uw(a)
    };
    Uw = function(a) {
        for (; a.g.g;) try {
            var b = a.A(a.g);
            if (b) return a.g.F = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.A = void 0, Rw(a.g, c)
        }
        a.g.F = !1;
        if (a.g.M) {
            b = a.g.M;
            a.g.M = null;
            if (b.vl) throw b.exception;
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
    Ww = function(a) {
        this.next = function(b) {
            Qw(a.g);
            a.g.j ? b = Tw(a, a.g.j.next, b, a.g.I) : (a.g.I(b), b = Uw(a));
            return b
        };
        this.throw = function(b) {
            Qw(a.g);
            a.g.j ? b = Tw(a, a.g.j["throw"], b, a.g.I) : (Rw(a.g, b), b = Uw(a));
            return b
        };
        this.return = function(b) {
            return Vw(a, b)
        };
        this[_.x(_.z.Symbol, "iterator")] = function() {
            return this
        }
    };
    Xw = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new _.z.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : _.z.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.Lf = function(a) {
        return Xw(new Ww(new Sw(a)))
    };
    _.ya = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    Cw("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    Cw("Reflect.construct", function() {
        return Jw
    }, "es6");
    Cw("Reflect.setPrototypeOf", function(a) {
        return a ? a : Ow ? function(b, c) {
            try {
                return Ow(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    Cw("Promise", function(a) {
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
        var d = _.zw.setTimeout;
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
            else if (g instanceof e) this.na(g);
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
                h ? this.Ca(g) : this.F(g)
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
            "function" == typeof h ? this.O(h, g) : this.F(g)
        };
        e.prototype.M = function(g) {
            this.J(2, g)
        };
        e.prototype.F = function(g) {
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
                    var h = _.zw.console;
                    "undefined" !== typeof h && h.error(g.l)
                }
            }, 1)
        };
        e.prototype.C = function() {
            if (this.I) return !1;
            var g = _.zw.CustomEvent,
                h = _.zw.Event,
                k = _.zw.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = _.zw.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
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
        e.prototype.na = function(g) {
            var h = this.j();
            g.Fe(h.resolve, h.reject)
        };
        e.prototype.O = function(g, h) {
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
                for (var l = _.u(g), m = l.next(); !m.done; m = l.next()) c(m.value).Fe(h, k)
            })
        };
        e.all = function(g) {
            var h = _.u(g),
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
    Cw("Object.setPrototypeOf", function(a) {
        return a || Ow
    }, "es6");
    var Yw = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                vi: e,
                Fj: f
            }
        }
        return {
            vi: -1,
            Fj: void 0
        }
    };
    Cw("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Yw(this, b, c).Fj
        }
    }, "es6");
    Cw("WeakMap", function(a) {
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
                    g = _.u(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!Gw(g, d)) {
                var k = new b;
                xw(g, d, {
                    value: k
                })
            }
            if (!Gw(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && Gw(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && Gw(g, d) && Gw(g[d], this.g)
        };
        f.prototype.delete = function(g) {
            return c(g) && Gw(g, d) && Gw(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    Cw("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.x(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.x(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var b = new _.z.WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] = f();
                this.size = 0;
                if (h) {
                    h = _.u(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.Za ? l.Za.value = k : (l.Za = {
                next: this[1],
                Rb: this[1].Rb,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.Za), this[1].Rb.next = l.Za, this[1].Rb = l.Za, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.Za && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.Za.Rb.next = h.Za.next, h.Za.next.Rb = h.Za.Rb, h.Za.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Rb = f();
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
            for (var l = _.x(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[_.x(_.z.Symbol, "iterator")] = _.x(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h[0][l];
                if (m && Gw(h[0], l))
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
                return Dw(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Rb;
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
                return h.Rb = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var Zw = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Cw("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Zw(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var $w = function(a, b) {
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
        e[_.x(_.z.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    Cw("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return $w(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    Cw("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return $w(this, function(b) {
                return b
            })
        }
    }, "es6");
    Cw("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Zw(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    Cw("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    Cw("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Zw(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    Cw("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    Cw("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.x(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    Cw("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Zw(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    Cw("Array.prototype.values", function(a) {
        return a ? a : function() {
            return $w(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    Cw("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.x(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.x(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new _.z.Map;
            if (c) {
                c = _.u(c);
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
            return _.x(this.g, "entries").call(this.g)
        };
        b.prototype.values = function() {
            return _.x(this.g, "values").call(this.g)
        };
        b.prototype.keys = _.x(b.prototype, "values");
        b.prototype[_.x(_.z.Symbol, "iterator")] = _.x(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    Cw("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Yw(this, b, c).vi
        }
    }, "es6");
    Cw("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function(e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    Cw("Number.EPSILON", function() {
        return Math.pow(2, -52)
    }, "es6");
    Cw("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    Cw("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.x(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    Cw("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return _.x(Number, "isInteger").call(Number, b) && Math.abs(b) <= _.x(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    Cw("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    Cw("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Gw(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    Cw("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    Cw("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof _.z.Symbol && _.x(_.z.Symbol, "iterator") && b[_.x(_.z.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    Cw("Array.prototype.fill", function(a) {
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
    var ax = function(a) {
        return a ? a : _.x(Array.prototype, "fill")
    };
    Cw("Int8Array.prototype.fill", ax, "es6");
    Cw("Uint8Array.prototype.fill", ax, "es6");
    Cw("Uint8ClampedArray.prototype.fill", ax, "es6");
    Cw("Int16Array.prototype.fill", ax, "es6");
    Cw("Uint16Array.prototype.fill", ax, "es6");
    Cw("Int32Array.prototype.fill", ax, "es6");
    Cw("Uint32Array.prototype.fill", ax, "es6");
    Cw("Float32Array.prototype.fill", ax, "es6");
    Cw("Float64Array.prototype.fill", ax, "es6");
    Cw("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Gw(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    Cw("globalThis", function(a) {
        return a || _.zw
    }, "es_2020");
    var bx = function(a, b) {
        a = void 0 !== a ? String(a) : " ";
        return 0 < b && a ? _.x(a, "repeat").call(a, Math.ceil(b / a.length)).substring(0, b) : ""
    };
    Cw("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Zw(this, null, "padStart");
            return bx(c, b - d.length) + d
        }
    }, "es8");
    Cw("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = Zw(this, null, "padStart");
            return d + bx(c, b - d.length)
        }
    }, "es8");
    Cw("AggregateError", function(a) {
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
    Cw("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.x(Array, "from").call(Array, b);
            return _.z.Promise.all(b.map(function(c) {
                return _.z.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new _.z.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    Cw("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.x(_.z.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.x(_.z.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    Cw("Object.hasOwn", function(a) {
        return a ? a : function(b, c) {
            return Object.prototype.hasOwnProperty.call(b, c)
        }
    }, "es_next");
    Cw("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return _.z.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return _.z.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    Cw("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = _.x(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    Cw("String.raw", function(a) {
        return a ? a : function(b, c) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g) f += d[g], g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
            return f
        }
    }, "es6");
    Cw("Math.sign", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
        }
    }, "es6");
    Cw("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    }, "es6");
    var cx, wc, dx, ex, fx, gx;
    _.t = this || self;
    cx = function(a) {
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
    wc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.Ua = function(a) {
        var b = wc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.La = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.Ma = function(a) {
        return Object.prototype.hasOwnProperty.call(a, dx) && a[dx] || (a[dx] = ++ex)
    };
    dx = "closure_uid_" + (1E9 * Math.random() >>> 0);
    ex = 0;
    fx = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    gx = function(a, b, c) {
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
    _.hx = function(a, b, c) {
        _.hx = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fx : gx;
        return _.hx.apply(null, arguments)
    };
    _.ix = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    var jx;
    var fa = cx(610401301),
        Ie = cx(188588736);
    var kx, rm, lx, tx, nx, ox, px, qx, rx, sx, mx;
    kx = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    rm = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    lx = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    tx = function(a) {
        if (!mx.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(nx, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ox, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(px, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(qx, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(rx, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(sx, "&#0;"));
        return a
    };
    nx = /&/g;
    ox = /</g;
    px = />/g;
    qx = /"/g;
    rx = /'/g;
    sx = /\x00/g;
    mx = /[\x00&<>"']/;
    _.Ug = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };
    var ia, ux = _.t.navigator;
    ia = ux ? ux.userAgentData || null : null;
    var xx = function(a, b) {
        this.g = a === vx && b || "";
        this.A = wx
    };
    xx.prototype.toString = function() {
        return this.g
    };
    var yx = function(a) {
            return a instanceof xx && a.constructor === xx && a.A === wx ? a.g : "type_error:Const"
        },
        wx = {},
        vx = {};
    var Fx, Ex, Dx, Ax, Gx, Cf, Bx;
    _.zx = function(a) {
        this.g = a
    };
    _.zx.prototype.toString = function() {
        return this.g + ""
    };
    _.Cx = function(a, b) {
        a = Ax.exec(_.lb(a).toString());
        var c = a[3] || "";
        return Cf(a[1] + Bx("?", a[2] || "", b) + Bx("#", c))
    };
    _.lb = function(a) {
        return a instanceof _.zx && a.constructor === _.zx ? a.g : "type_error:TrustedResourceUrl"
    };
    Fx = function(a, b) {
        var c = yx(a);
        if (!Dx.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Ex, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof xx ? yx(d) : encodeURIComponent(String(d))
        });
        return Cf(a)
    };
    Ex = /%{(\w+)}/g;
    Dx = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    Ax = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    Gx = {};
    Cf = function(a) {
        return new _.zx(a, Gx)
    };
    Bx = function(a, b, c) {
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
    var Hx, Ix, Jx, va, Kx;
    _.ua = function(a) {
        this.g = a
    };
    _.ua.prototype.toString = function() {
        return this.g.toString()
    };
    _.Da = function(a) {
        return a instanceof _.ua && a.constructor === _.ua ? a.g : "type_error:SafeUrl"
    };
    Hx = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    Ix = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    Jx = {};
    va = function(a) {
        return new _.ua(a, Jx)
    };
    Kx = va("about:invalid#zClosurez");
    _.wa = va("about:invalid#zClosurez");
    var qa = function(a) {
            this.Al = a
        },
        sa = [ra("data"), ra("http"), ra("https"), ra("mailto"), ra("ftp"), new qa(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        })],
        Aa = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    _.Ha = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.Lx = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.tj = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.Mx = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    _.Tg = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Nx = {
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
    var Ox;
    Ox = {};
    _.Px = function(a) {
        this.g = a
    };
    _.Px.prototype.toString = function() {
        return this.g.toString()
    };
    _.Qx = function(a) {
        return a instanceof _.Px && a.constructor === _.Px ? a.g : "type_error:SafeStyleSheet"
    };
    var Rx, Vx, Xx, Yx, Zx, Ux;
    Rx = {};
    _.Sx = function(a) {
        this.g = a
    };
    _.Sx.prototype.toString = function() {
        return this.g.toString()
    };
    _.Tx = function(a) {
        return a instanceof _.Sx && a.constructor === _.Sx ? a.g : "type_error:SafeHtml"
    };
    Vx = function(a) {
        var b = Ux;
        b = b instanceof _.Sx ? b : _.jk(tx(String(b)));
        var c = [],
            d = function(e) {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof _.Sx ? e : _.jk(tx(String(e))), c.push(_.Tx(e).toString()))
            };
        a.forEach(d);
        return _.jk(c.join(_.Tx(b).toString()))
    };
    _.Wx = function(a) {
        return Vx(Array.prototype.slice.call(arguments))
    };
    _.jk = function(a) {
        return new _.Sx(a, Rx)
    };
    Xx = /^[a-zA-Z0-9-]+$/;
    Yx = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    Zx = {
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
    Ux = new _.Sx(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "", Rx);
    _.$x = _.jk("<br>");
    var ay = {
            Gn: 0,
            Jn: 1,
            En: 2,
            Fn: 3,
            0: "FORMATTED_HTML_CONTENT",
            1: "HTML_FORMATTED_CONTENT",
            2: "EMBEDDED_INTERNAL_CONTENT",
            3: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        by = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + ay[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.T(by, Error);
    var hb = function() {};
    hb.prototype.toString = function() {
        return this.bj.toString()
    };
    var rc = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var cy, dy, fy;
    cy = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    dy = 2147483648 * Math.random() | 0;
    _.ey = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    fy = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    _.gy = function(a) {
        _.gy[" "](a);
        return a
    };
    _.gy[" "] = function() {};
    var hy = function(a, b) {
        try {
            return _.gy(a[b]), !0
        } catch (c) {}
        return !1
    };
    var iy, ky, ly, my, ny, oy;
    iy = ma() ? !1 : ka("Opera");
    _.jy = ma() ? !1 : ka("Trident") || ka("MSIE");
    ky = ka("Edge");
    ly = ka("Gecko") && !(_.Ug(da(), "WebKit") && !ka("Edge")) && !(ka("Trident") || ka("MSIE")) && !ka("Edge");
    my = _.Ug(da(), "WebKit") && !ka("Edge");
    ny = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var py = "",
            qy = function() {
                var a = da();
                if (ly) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (ky) return /Edge\/([\d\.]+)/.exec(a);
                if (_.jy) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (my) return /WebKit\/(\S+)/.exec(a);
                if (iy) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();qy && (py = qy ? qy[1] : "");
        if (_.jy) {
            var ry = ny();
            if (null != ry && ry > parseFloat(py)) {
                oy = String(ry);
                break a
            }
        }
        oy = py
    }
    var sy = oy,
        ty;
    if (_.t.document && _.jy) {
        var uy = ny();
        ty = uy ? uy : parseInt(sy, 10) || void 0
    } else ty = void 0;
    var vy = ty;
    !ka("Android") || oa();
    oa();
    pa();
    _.jy || pa();
    nb(function(a) {
        return function(b) {
            a(this);
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b
        }
    });
    nb(function(a) {
        return function() {
            a(this);
            this.message = "argument out of range"
        }
    });
    nb(function(a) {
        return function() {
            a(this);
            this.message = "no elements in sequence"
        }
    });
    nb(function(a) {
        return function() {
            a(this);
            this.message = "object unsubscribed"
        }
    });
    nb(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    nb(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    nb(function(a) {
        return function(b) {
            b = void 0 === b ? null : b;
            a(this);
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = b
        }
    });
    var qb, pb = "function" === typeof String.prototype.Bl,
        ob = "undefined" !== typeof TextEncoder;
    var wy = {},
        xy = null,
        yy = ly || my || "function" == typeof _.t.btoa,
        ub = function(a, b) {
            void 0 === b && (b = 0);
            zy();
            b = wy[b];
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
        Ay = function(a, b) {
            if (yy && !b) a = _.t.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = ub(c, b)
            }
            return a
        },
        Yf = function(a) {
            var b = [];
            By(a, function(c) {
                b.push(c)
            });
            return b
        },
        Cy = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            By(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        By = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = xy[l];
                    if (null != m) return m;
                    if (!rm(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            zy();
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
        zy = function() {
            if (!xy) {
                xy = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    wy[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === xy[f] && (xy[f] = e)
                    }
                }
            }
        };
    var yb = "undefined" !== typeof Uint8Array,
        tb = !_.jy && "function" === typeof btoa,
        Dy = /[-_.]/g,
        wb = {
            "-": "+",
            _: "/",
            ".": "="
        },
        Ey, Ab = {};
    var Fy, hc = function(a, b) {
            Bb(b);
            this.g = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        ic = function() {
            return Fy || (Fy = new hc(null, Ab))
        },
        Id = function(a) {
            var b = a.g;
            return null == b ? "" : "string" === typeof b ? b : a.g = vb(b)
        },
        ul = function(a) {
            Bb(Ab);
            var b = a.g;
            if (null != b && !zb(b))
                if ("string" === typeof b)
                    if (tb) {
                        Dy.test(b) && (b = b.replace(Dy, xb));
                        b = atob(b);
                        for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                        b = c
                    } else b = Cy(b);
            else b = null;
            return (a = null == b ? b : a.g = b) ? new Uint8Array(a) : Ey || (Ey = new Uint8Array(0))
        };
    hc.prototype.isEmpty = function() {
        return null == this.g
    };
    var Gb = 0,
        Hb = 0,
        Gy;
    var Hy = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        Jy = function(a) {
            if (!a) return Iy || (Iy = new Hy(0, 0));
            if (!/^\d+$/.test(a)) return null;
            Mb(a);
            return new Hy(Gb, Hb)
        },
        Iy, Ky = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        af = function(a) {
            if (!a) return Ly || (Ly = new Ky(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            Mb(a);
            return new Ky(Gb, Hb)
        },
        Ly;
    var My = function() {
        this.g = []
    };
    My.prototype.length = function() {
        return this.g.length
    };
    My.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var cf = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.g.push(b)
        },
        Ny = function(a, b) {
            for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        Oy = function(a, b) {
            if (0 <= b) Ny(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
                a.g.push(1)
            }
        };
    var lf = function() {
            this.l = [];
            this.A = 0;
            this.g = new My
        },
        mf = function(a, b) {
            0 !== b.length && (a.l.push(b), a.A += b.length)
        },
        ef = function(a, b) {
            bf(a, b, 2);
            b = a.g.end();
            mf(a, b);
            b.push(a.A);
            return b
        },
        ff = function(a, b) {
            var c = b.pop();
            for (c = a.A + a.g.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.A++;
            b.push(c);
            a.A++
        },
        bf = function(a, b, c) {
            Ny(a.g, 8 * b + c)
        },
        Py = function(a, b, c) {
            bf(a, b, 2);
            Ny(a.g, c.length);
            mf(a, a.g.end());
            mf(a, c)
        };
    var Ue = function(a, b) {
        this.g = a;
        this.Mj = b
    };
    var Qy = Rb(),
        pd = Rb("0di"),
        Ry = Rb("2ex"),
        Zd = Rb("0dg");
    var Ub = Qy ? function(a, b) {
            a[Qy] |= b
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
        me = Qy ? function(a, b) {
            a[Qy] &= ~b
        } : function(a, b) {
            void 0 !== a.wb && (a.wb &= ~b)
        },
        lc = Qy ? function(a) {
            return a[Qy] | 0
        } : function(a) {
            return a.wb | 0
        },
        Ud = Qy ? function(a) {
            return a[Qy]
        } : function(a) {
            return a.wb
        },
        Xb = Qy ? function(a, b) {
            a[Qy] = b;
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
    var hd = {},
        bc = {},
        Sy, de, Ty = [];
    Xb(Ty, 55);
    de = Object.freeze(Ty);
    var Uy = function(a, b, c) {
        this.j = 0;
        this.g = a;
        this.A = b;
        this.l = c
    };
    Uy.prototype.next = function() {
        if (this.j < this.g.length) {
            var a = this.g[this.j++];
            return {
                done: !1,
                value: this.A ? this.A.call(this.l, a) : a
            }
        }
        return {
            done: !0,
            value: void 0
        }
    };
    Uy.prototype[_.x(_.z.Symbol, "iterator")] = function() {
        return new Uy(this.g, this.A, this.l)
    };
    _.Vy = Object.freeze(new function() {});
    Object.freeze(new function() {});
    var Wy, oc;
    var zc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    var sd, ud, vd;
    var Ed = {},
        Xy = function() {
            try {
                var a = function() {
                    return Jw(_.z.Map, [], this.constructor)
                };
                _.T(a, _.z.Map);
                new a;
                return !1
            } catch (b) {
                return !0
            }
        }(),
        Yy = function() {
            this.g = new _.z.Map
        };
    _.q = Yy.prototype;
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
        return _.x(this.g, "entries").call(this.g)
    };
    _.q.keys = function() {
        return _.x(this.g, "keys").call(this.g)
    };
    _.q.values = function() {
        return _.x(this.g, "values").call(this.g)
    };
    _.q.forEach = function(a, b) {
        return this.g.forEach(a, b)
    };
    Yy.prototype[_.x(_.z.Symbol, "iterator")] = function() {
        return _.x(this, "entries").call(this)
    };
    var Zy = function() {
            if (Xy) return _.x(Object, "setPrototypeOf").call(Object, Yy.prototype, _.z.Map.prototype), Object.defineProperties(Yy.prototype, {
                size: {
                    value: 0,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            }), Yy;
            var a = function() {
                return Jw(_.z.Map, [], this.constructor)
            };
            _.T(a, _.z.Map);
            return a
        }(),
        Dd = function(a, b, c, d) {
            c = void 0 === c ? xd : c;
            d = void 0 === d ? xd : d;
            var e = Zy.call(this) || this;
            var f = lc(a);
            f |= 64;
            Xb(a, f);
            e.Nd = f;
            e.Jf = b;
            e.ae = c;
            e.vh = e.Jf ? zd : d;
            for (var g = 0; g < a.length; g++) {
                var h = a[g],
                    k = c(h[0], !1, !0),
                    l = h[1];
                b ? void 0 === l && (l = null) : l = d(h[1], !1, !0, void 0, void 0, f);
                Zy.prototype.set.call(e, k, l)
            }
            return e
        };
    _.T(Dd, Zy);
    var $y = function(a) {
            if (a.Nd & 2) throw Error("Cannot mutate an immutable Map");
        },
        Jd = function(a, b) {
            b = void 0 === b ? Ad : b;
            if (0 !== a.size) return Wd(a, b)
        },
        Wd = function(a, b) {
            b = void 0 === b ? Ad : b;
            var c = [];
            a = _.x(Zy.prototype, "entries").call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    _.q = Dd.prototype;
    _.q.clear = function() {
        $y(this);
        Zy.prototype.clear.call(this)
    };
    _.q.delete = function(a) {
        $y(this);
        return Zy.prototype.delete.call(this, this.ae(a, !0, !1))
    };
    _.q.entries = function() {
        var a = _.x(Array, "from").call(Array, _.x(Zy.prototype, "keys").call(this));
        return new Uy(a, Bd, this)
    };
    _.q.keys = function() {
        return _.x(Zy.prototype, "keys").call(this)
    };
    _.q.values = function() {
        var a = _.x(Array, "from").call(Array, _.x(Zy.prototype, "keys").call(this));
        return new Uy(a, Dd.prototype.get, this)
    };
    _.q.forEach = function(a, b) {
        var c = this;
        Zy.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    _.q.set = function(a, b) {
        $y(this);
        a = this.ae(a, !0, !1);
        return null == a ? this : null == b ? (Zy.prototype.delete.call(this, a), this) : Zy.prototype.set.call(this, a, this.vh(b, !0, !0, this.Jf, !1, this.Nd))
    };
    _.q.has = function(a) {
        return Zy.prototype.has.call(this, this.ae(a, !1, !1))
    };
    _.q.get = function(a) {
        a = this.ae(a, !1, !1);
        var b = Zy.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.Jf;
            return c ? (c = this.vh(b, !1, !0, c, this.nk, this.Nd), c !== b && Zy.prototype.set.call(this, a, c), c) : b
        }
    };
    Dd.prototype[_.x(_.z.Symbol, "iterator")] = function() {
        return _.x(this, "entries").call(this)
    };
    Dd.prototype.toJSON = void 0;
    Dd.prototype.Fl = bc;
    var Cd;
    var ce, wi, gr, Xn, vl, yj, wl, tl, az, zk, Vi, Mm, bz, cz, sk, Gi, kt, ys, ez, fz, hz, iz, rq, Dv, Ev, jz, li, Ei;
    _.si = function(a, b) {
        a = a.D;
        return ce(a, Ud(a), b)
    };
    ce = function(a, b, c, d) {
        if (-1 === c) return null;
        var e = ac(b);
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], null != d)) {
                if (ae(a, b, e, c) && null != Ry) {
                    var g;
                    a = null != (g = Wy) ? g : Wy = {};
                    g = a[Ry] || 0;
                    4 <= g || (a[Ry] = g + 1, sc())
                }
                return d
            }
            return ae(a, b, e, c)
        }
    };
    _.xk = function(a, b, c) {
        var d = a.D,
            e = Ud(d);
        nc(e);
        be(d, e, b, c);
        return a
    };
    wi = function(a, b, c) {
        return void 0 !== De(a, b, c, !1)
    };
    gr = function(a) {
        a = a.D;
        var b = Ud(a),
            c = ce(a, b, 3),
            d = vc(c);
        null != d && d !== c && be(a, b, 3, d);
        return d
    };
    Xn = function(a, b) {
        return yc(_.si(a, b))
    };
    vl = function(a, b) {
        a = a.D;
        var c = Ud(a),
            d = ce(a, c, b),
            e = kc(d, !0, !!(c & 34));
        null != e && e !== d && be(a, c, b, e);
        return null == e ? ic() : e
    };
    yj = function(a, b, c, d) {
        var e = a.D,
            f = Ud(e);
        nc(f);
        (c = te(e, f, c)) && c !== b && null != d && (f = be(e, f, c));
        be(e, f, b, d);
        return a
    };
    wl = function(a, b, c) {
        a = a.D;
        return te(a, Ud(a), b) === c ? c : -1
    };
    tl = function(a, b) {
        a = a.D;
        return te(a, Ud(a), b)
    };
    _.yq = function(a, b, c, d) {
        var e = a.D,
            f = Ud(e);
        d = te(e, f, d);
        a = _.Cj(a, b, c);
        d && d !== c && be(e, f, d);
        return a
    };
    _.Cj = function(a, b, c) {
        a = a.D;
        var d = Ud(a);
        nc(d);
        var e = ce(a, d, c);
        b = yd(od(e, b, !0, d));
        e !== b && be(a, d, c, b);
        return b
    };
    az = function(a, b, c) {
        return (a = De(a, b, c, !1)) ? a : id(b)
    };
    _.Km = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = De(a, b, c, d);
        if (null == b) return b;
        a = a.D;
        var e = Ud(a);
        if (!(e & 2)) {
            var f = yd(b);
            f !== b && (b = f, be(a, e, c, b, d))
        }
        return b
    };
    _.qk = function(a, b, c) {
        a = a.D;
        var d = Ud(a);
        return Ee(a, d, b, c, !1, !(2 & d))
    };
    _.vi = function(a, b, c) {
        null == c && (c = void 0);
        return _.xk(a, b, c)
    };
    _.Kl = function(a, b, c, d) {
        null == d && (d = void 0);
        return yj(a, b, c, d)
    };
    _.Em = function(a, b, c) {
        var d = a.D,
            e = Ud(d);
        nc(e);
        if (null == c) return be(d, e, b), a;
        for (var f = lc(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !0, m = !0, n = 0; n < c.length; n++) {
            var p = c[n];
            h || (p = !!(lc(p.D) & 2), l && (l = !p), m && (m = p))
        }
        h || (f = Sb(f, 5, !0), f = Sb(f, 8, l), f = Sb(f, 16, m));
        k && f !== g && (c = Nb(c), g = 0, f = ge(f, e, !0));
        f !== g && Xb(c, f);
        be(d, e, b, c);
        return a
    };
    zk = function(a, b, c, d) {
        Fe(a, b, c, d);
        return a
    };
    Vi = function(a, b) {
        return Ic(_.si(a, b))
    };
    Mm = function(a, b) {
        return Lc(_.si(a, b))
    };
    bz = function(a, b) {
        a = _.si(a, b);
        var c;
        null == a ? c = a : Ac(a) ? "number" === typeof a ? c = $c(a) : c = ad(a) : c = void 0;
        return c
    };
    cz = function(a, b) {
        return je(a, b, bd, 2, void 0, void 0, 0)
    };
    sk = function(a, b) {
        return gd(_.si(a, b))
    };
    Gi = function(a, b, c, d, e) {
        return je(a, b, gd, c, d, e)
    };
    _.Q = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        return He(Xn(a, b), c)
    };
    _.dz = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return He(Vi(a, b), c)
    };
    kt = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return He(Mm(a, b), c)
    };
    _.Rg = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return He(bd(_.si(a, b)), c)
    };
    ys = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return He(bz(a, b), c)
    };
    _.E = function(a, b) {
        var c = void 0 === c ? "" : c;
        return He(sk(a, b), c)
    };
    _.og = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return He(_.Dc(_.si(a, b)), c)
    };
    ez = function(a, b) {
        var c = void 0 === c ? "0" : c;
        return He(cd(_.si(a, b), !0), c)
    };
    fz = function(a, b, c) {
        a = Gi(a, b, 3, void 0, !0);
        if ("number" !== typeof c || 0 > c || c >= a.length) throw Error();
        return a[c]
    };
    hz = function(a) {
        return _.Rg(a, wl(a, gz, 3))
    };
    iz = function(a, b) {
        return _.E(a, wl(a, b, 2))
    };
    rq = function(a, b) {
        a = Xn(a, b);
        return null == a ? void 0 : a
    };
    Dv = function(a, b) {
        a = Vi(a, b);
        return null == a ? void 0 : a
    };
    Ev = function(a, b) {
        a = sk(a, b);
        return null == a ? void 0 : a
    };
    jz = function(a, b) {
        a = _.Dc(_.si(a, b));
        return null == a ? void 0 : a
    };
    li = function(a, b, c) {
        return _.xk(a, b, null == c ? c : xc(c))
    };
    _.Il = function(a, b, c) {
        return _.re(a, b, null == c ? c : xc(c), !1)
    };
    _.Ji = function(a, b, c) {
        return _.xk(a, b, null == c ? c : Ec(c))
    };
    _.Jl = function(a, b, c) {
        return _.re(a, b, null == c ? c : Ec(c), 0)
    };
    _.qi = function(a, b, c) {
        return _.xk(a, b, Wc(c))
    };
    _.Bj = function(a, b, c) {
        return _.re(a, b, Wc(c), "0")
    };
    Ei = function(a, b, c) {
        return _.xk(a, b, fd(c))
    };
    _.Aj = function(a, b, c) {
        return _.re(a, b, fd(c), "")
    };
    _.ti = function(a, b, c) {
        return _.xk(a, b, Cc(c))
    };
    _.K = function(a, b, c) {
        return _.re(a, b, Cc(c), 0)
    };
    _.Ui = function(a, b) {
        return null != sk(a, b)
    };
    _.D = function(a, b, c) {
        this.D = _.A(a, b, c)
    };
    _.D.prototype.toJSON = function() {
        return Sy ? Je(this, this.D, !1) : Je(this, Pd(this.D, Rd, void 0, void 0, !1), !0)
    };
    var ql = function(a) {
        Sy = !0;
        try {
            return JSON.stringify(a.toJSON(), Hd)
        } finally {
            Sy = !1
        }
    };
    _.D.prototype.Gg = hd;
    var Xe = (0, _.z.Symbol)(),
        Ne = (0, _.z.Symbol)(),
        Te = (0, _.z.Symbol)(),
        We = (0, _.z.Symbol)(),
        kz = $e(function(a, b, c) {
            b = vc(b);
            null != b && (bf(a, c, 5), a = a.g, c = Gy || (Gy = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Hb = 0, b = Gb = c.getUint32(0, !0), a.g.push(b >>> 0 & 255), a.g.push(b >>> 8 & 255), a.g.push(b >>> 16 & 255), a.g.push(b >>> 24 & 255))
        }),
        lz = $e(df),
        mz = $e(df),
        nz = $e(function(a, b, c) {
            a: if (null != b) {
                if (Ac(b)) {
                    if ("string" === typeof b) {
                        b = ad(b);
                        break a
                    }
                    if ("number" === typeof b) {
                        b = $c(b);
                        break a
                    }
                }
                b = void 0
            }null != b && ("string" === typeof b && Jy(b), null != b && (bf(a, c, 0), "number" === typeof b ? (a = a.g, Ib(b), cf(a, Gb, Hb)) : (c = Jy(b), cf(a.g, c.A, c.g))))
        }),
        oz = $e(function(a, b, c) {
            b = Ic(b);
            null != b && null != b && (bf(a, c, 0), Oy(a.g, b))
        }),
        pz = $e(function(a, b, c) {
            b = yc(b);
            null != b && (bf(a, c, 0), a.g.g.push(b ? 1 : 0))
        }),
        qz = $e(function(a, b, c) {
            b = gd(b);
            null != b && Py(a, c, rb(b))
        }),
        rz;
    rz = new Ue(function(a, b, c) {
        b = Le(gd, b);
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    g = b[d];
                null != g && Py(e, f, rb(g))
            }
    }, !1);
    var Ye = new Ue(gf, !0),
        Ve = new Ue(gf, !0),
        sz;
    sz = new Ue(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) gf(a, b[f], c, d, e)
    }, !0);
    var tz = $e(function(a, b, c) {
            b = Lc(b);
            null != b && null != b && (bf(a, c, 0), Ny(a.g, b))
        }),
        uz = $e(function(a, b, c) {
            b = Ic(b);
            null != b && (b = parseInt(b, 10), bf(a, c, 0), Oy(a.g, b))
        }),
        vz;
    vz = new Ue(function(a, b, c) {
        b = Le(Ic, b);
        if (null != b && b.length) {
            c = ef(a, c);
            for (var d = 0; d < b.length; d++) Oy(a.g, b[d]);
            ff(a, c)
        }
    }, !1);
    var kf = void 0;
    var Ff = function(a) {
        this.D = _.A(a)
    };
    _.T(Ff, _.D);
    var wz = _.Ew(["https://pagead2.googlesyndication.com/pagead/managed/js/activeview/current/ufs_web_display.js"]);
    var Pf = _.Ew(["https://tpc.googlesyndication.com/sodar/", ".js"]),
        xz = _.Ew(["https://www.google.com/recaptcha/api2/aframe"]);
    _.Df(xz);
    var yz, Zv, Ti;
    yz = function() {
        return !0
    };
    Zv = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Ti = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.zz = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    _.Az = function(a, b) {
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
    var Hf;
    Hf = Ti(function() {
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
    _.Jf = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, If(d)), !0) : !1
    };
    _.ig = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, If(d)), !0) : !1
    };
    var Mf = function(a) {
        return new _.z.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var Bz = function(a) {
        this.D = _.A(a)
    };
    _.T(Bz, _.D);
    var Cz = function(a) {
        this.D = _.A(a)
    };
    _.T(Cz, _.D);
    var Dz = function(a) {
            this.g = a.A;
            this.A = a.l;
            this.j = a.j;
            this.Zd = a.Zd;
            this.B = a.B;
            this.Dd = a.Dd;
            this.ef = a.ef;
            this.Cf = a.Cf;
            this.df = a.df;
            this.l = a.g
        },
        Ez = function(a, b, c) {
            this.A = a;
            this.l = b;
            this.j = c;
            this.B = window;
            this.Dd = "env";
            this.ef = "n";
            this.Cf = "0";
            this.df = "1";
            this.g = !0
        };
    Ez.prototype.build = function() {
        return new Dz(this)
    };
    var Fi = function(a) {
        this.D = _.A(a)
    };
    _.T(Fi, _.D);
    Fi.prototype.getId = function() {
        return _.E(this, 1)
    };
    var Fz = [0, qz];
    var Ii = function(a) {
        this.D = _.A(a)
    };
    _.T(Ii, _.D);
    Ii.prototype.getWidth = function() {
        return _.dz(this, 1)
    };
    Ii.prototype.getHeight = function() {
        return _.dz(this, 2)
    };
    var Gz = [0, oz, -1];
    var Hi = function(a) {
        this.D = _.A(a)
    };
    _.T(Hi, _.D);
    var Hz = [0, mz, pz, qz, -1];
    var Di = function(a) {
        this.D = _.A(a)
    };
    _.T(Di, _.D);
    Di.da = [4];
    var Iz = [0, qz, mz, qz, rz, uz, Fz, Gz, mz, Hz];
    var xi = function(a) {
        this.D = _.A(a)
    };
    _.T(xi, _.D);
    var Ai = function(a, b) {
            return _.ti(a, 1, b)
        },
        Bi = function(a, b) {
            return li(a, 4, b)
        },
        zi = function(a, b) {
            return _.Ji(a, 2, b)
        },
        Jz = [0, uz, oz, qz, pz];
    var oi = function(a) {
        this.D = _.A(a)
    };
    _.T(oi, _.D);
    var ni = function(a, b) {
            return Ei(a, 1, b)
        },
        ki = function(a, b) {
            return zk(a, 3, Di, b)
        },
        mi = function(a, b) {
            return _.ti(a, 4, b)
        };
    oi.prototype.ki = function() {
        return _.og(this, 7, 0)
    };
    oi.da = [10, 3];
    var Kz = [0, qz, mz, sz, Iz, uz, Jz, pz, uz, 2, rz];
    var Ni = function(a) {
        this.D = _.A(a)
    };
    _.T(Ni, _.D);
    var Lz = [0, uz, pz, mz];
    var Mz = function(a) {
        this.D = _.A(a)
    };
    _.T(Mz, _.D);
    var ji = function(a, b) {
            return Fe(a, 2, oi, b)
        },
        yi = function(a, b) {
            _.vi(a, 5, b)
        },
        Si = function(a, b) {
            Ei(a, 10, b)
        };
    Mz.da = [2];
    var Nz = [0, uz, sz, Kz, uz, qz, Jz, qz, pz, oz, Lz, qz, -1];
    var Oi = function(a) {
        this.D = _.A(a)
    };
    _.T(Oi, _.D);
    var Qi = function(a) {
        var b = new Mz;
        b = _.ti(b, 1, 1);
        return Fe(a, 1, Mz, b)
    };
    Oi.da = [1];
    Oi.prototype.g = nf([0, sz, Nz]);
    var Oz = function(a) {
        this.D = _.A(a)
    };
    _.T(Oz, _.D);
    var gz = [2, 3];
    var Pz = function(a) {
        this.D = _.A(a)
    };
    _.T(Pz, _.D);
    Pz.da = [1];
    var Qz = function(a) {
        this.D = _.A(a)
    };
    _.T(Qz, _.D);
    Qz.da = [1];
    var Rz = function(a) {
        this.D = _.A(a)
    };
    _.T(Rz, _.D);
    var Sz = [2, 3];
    var Tz = function(a) {
        this.D = _.A(a)
    };
    _.T(Tz, _.D);
    Tz.da = [2];
    var Uz = function(a) {
        this.D = _.A(a)
    };
    _.T(Uz, _.D);
    Uz.da = [6, 4];
    var Vz = function(a) {
        this.D = _.A(a)
    };
    _.T(Vz, _.D);
    Vz.da = [4, 5];
    var Wz = function(a) {
        this.D = _.A(a)
    };
    _.T(Wz, _.D);
    var Xz = function(a) {
        this.D = _.A(a)
    };
    _.T(Xz, _.D);
    Xz.prototype.ji = function() {
        return az(this, Wz, 2)
    };
    Xz.da = [1];
    var Yz = function(a) {
        this.D = _.A(a)
    };
    _.T(Yz, _.D);
    var Zz = function(a) {
        this.D = _.A(a)
    };
    _.T(Zz, _.D);
    Zz.da = [1];
    var $z = function(a) {
        this.D = _.A(a)
    };
    _.T($z, _.D);
    var aA = [0, uz, mz];
    var bA = function(a) {
        this.D = _.A(a)
    };
    _.T(bA, _.D);
    var cA = [0, lz];
    var dA = function(a) {
        this.D = _.A(a)
    };
    _.T(dA, _.D);
    dA.prototype.getEscapedQemQueryId = function() {
        return _.E(this, 1)
    };
    var eA = [0, qz, cA, aA];
    var fA = function(a) {
        this.D = _.A(a)
    };
    _.T(fA, _.D);
    fA.prototype.getAdUnitPath = function() {
        return _.E(this, 1)
    };
    _.gA = function(a) {
        this.D = _.A(a)
    };
    _.T(_.gA, _.D);
    _.hA = function(a) {
        this.D = _.A(a)
    };
    _.T(_.hA, _.D);
    _.hA.prototype.We = ca(0);
    _.hA.prototype.Td = ca(1);
    _.hA.prototype.Ye = ca(2);
    _.hA.da = [15, 24];
    var iA = function(a) {
        this.D = _.A(a)
    };
    _.T(iA, _.D);
    iA.prototype.getAdUnitPath = function() {
        return _.E(this, 2)
    };
    var Mv = function(a) {
        this.D = _.A(a)
    };
    _.T(Mv, _.D);
    var jA = [5, 7, 8, 9];
    var kA = function(a) {
        this.D = _.A(a)
    };
    _.T(kA, _.D);
    var lA = function(a) {
        this.D = _.A(a)
    };
    _.T(lA, _.D);
    lA.da = [4, 5, 6];
    var mA = function(a) {
        this.D = _.A(a)
    };
    _.T(mA, _.D);
    mA.prototype.getValue = function() {
        return _.E(this, 2)
    };
    mA.prototype.sg = function() {
        return _.Ui(this, 2)
    };
    var nA = function(a) {
        this.D = _.A(a)
    };
    _.T(nA, _.D);
    var Iv = function(a) {
        this.D = _.A(a)
    };
    _.T(Iv, _.D);
    Iv.da = [13];
    var Gv = function(a) {
        this.D = _.A(a)
    };
    _.T(Gv, _.D);
    Gv.da = [15, 13];
    var oA = function(a) {
        this.D = _.A(a)
    };
    _.T(oA, _.D);
    var yk = function(a) {
            var b = new oA;
            return _.ti(b, 1, a)
        },
        pA = [0, uz];
    var rk = function(a) {
        this.D = _.A(a)
    };
    _.T(rk, _.D);
    var qA = function(a) {
            var b = new rk;
            return Ei(b, 1, a)
        },
        rA = function(a) {
            var b = window.Date.now();
            b = _.x(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
            return _.qi(a, 3, b)
        };
    rk.prototype.lb = function(a) {
        return _.vi(this, 10, a)
    };
    var sA = of (rk),
        tA = [0, qz, -1, mz, oz, -2, mz, kz, pz, pA, pz];
    var uA = [0, 1, [0, nz, -2], -1, qz, -1, pz, [0, 3, uz, qz], mz, vz, tz];
    var vA = function(a) {
        this.D = _.A(a)
    };
    _.T(vA, _.D);
    vA.da = [1, 2];
    vA.prototype.g = nf([0, sz, uA, sz, tA]);
    var Lv = function(a) {
        this.D = _.A(a)
    };
    _.T(Lv, _.D);
    var wA = function(a) {
        this.D = _.A(a)
    };
    _.T(wA, _.D);
    wA.prototype.getValue = function() {
        return _.E(this, 1)
    };
    wA.prototype.sg = function() {
        return _.Ui(this, 1)
    };
    wA.prototype.getVersion = function() {
        return _.og(this, 5, 0)
    };
    var Fv = function(a) {
        this.D = _.A(a)
    };
    _.T(Fv, _.D);
    var Nv = function(a) {
        this.D = _.A(a)
    };
    _.T(Nv, _.D);
    Nv.prototype.getAdUnitPath = function() {
        return _.E(this, 1)
    };
    var Ov = function(a) {
        this.D = _.A(a)
    };
    _.T(Ov, _.D);
    var Jv = function(a) {
        this.D = _.A(a)
    };
    _.T(Jv, _.D);
    var Rv = function(a) {
        this.D = _.A(a)
    };
    _.T(Rv, _.D);
    var xA = function(a) {
        this.D = _.A(a)
    };
    _.T(xA, _.D);
    xA.prototype.getContentUrl = function() {
        return _.E(this, 2)
    };
    xA.da = [11];
    var yA = function(a) {
        this.D = _.A(a)
    };
    _.T(yA, _.D);
    yA.prototype.getEscapedQemQueryId = function() {
        return _.E(this, 4)
    };
    yA.da = [2, 23, 29];
    var zA = function(a) {
        this.D = _.A(a)
    };
    _.T(zA, _.D);
    var AA = function(a) {
        this.D = _.A(a)
    };
    _.T(AA, _.D);
    var BA = function(a) {
        this.D = _.A(a)
    };
    _.T(BA, _.D);
    var CA = function(a) {
        this.D = _.A(a)
    };
    _.T(CA, _.D);
    var DA = function(a) {
        this.D = _.A(a)
    };
    _.T(DA, _.D);
    var EA = function(a) {
        this.D = _.A(a)
    };
    _.T(EA, _.D);
    EA.prototype.getEscapedQemQueryId = function() {
        return _.E(this, 2)
    };
    var FA = function(a) {
        this.D = _.A(a)
    };
    _.T(FA, _.D);
    var GA = function(a) {
        this.D = _.A(a)
    };
    _.T(GA, _.D);
    var Kv = function(a) {
        this.D = _.A(a)
    };
    _.T(Kv, _.D);
    var HA = function(a) {
        return az(a, EA, 5)
    };
    Kv.prototype.getWidth = function() {
        return _.dz(this, 9)
    };
    Kv.prototype.getHeight = function() {
        return _.dz(this, 10)
    };
    Kv.da = [3, 7, 27, 11, 32];
    var IA = function(a) {
        this.D = _.A(a)
    };
    _.T(IA, _.D);
    IA.prototype.getHeight = function() {
        return Vi(this, 6)
    };
    IA.prototype.getWidth = function() {
        return Vi(this, 7)
    };
    IA.prototype.getEscapedQemQueryId = function() {
        return sk(this, 34)
    };
    IA.da = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63, 67];
    var Hv = [39, 48];
    var JA = function(a) {
        this.D = _.A(a)
    };
    _.T(JA, _.D);
    var KA = of (JA);
    JA.da = [1, 2, 3];
    var LA = window;
    var cw = function(a) {
        this.D = _.A(a)
    };
    _.T(cw, _.D);
    cw.da = [15];
    var bw = function(a) {
        this.D = _.A(a)
    };
    _.T(bw, _.D);
    bw.prototype.getCorrelator = function() {
        return _.Rg(this, 1)
    };
    bw.prototype.setCorrelator = function(a) {
        return _.Bj(this, 1, a)
    };
    var aw = function(a) {
        this.D = _.A(a)
    };
    _.T(aw, _.D);
    var MA, NA, OA;
    _.U = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    MA = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    NA = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? "" : b
    };
    OA = function(a) {
        var b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var PA = new _.U(590317302),
        QA = new _.U(1958);
    _.Sf = function(a) {
        var b = "Kc";
        if (a.Kc && a.hasOwnProperty(b)) return a.Kc;
        b = new a;
        return a.Kc = b
    };
    var Tf = function() {
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
    var RA = _.jy || my;
    _.SA = Ti(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.Tx(Ux);
        return !b.parentElement
    });
    _.Xm = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Xm.prototype.equals = function(a) {
        return a instanceof _.Xm && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    _.Xm.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Xm.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Xm.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.an = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.q = _.an.prototype;
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
    var qg, WA, VA, ZA, aB, fB;
    qg = function(a) {
        return a ? new _.TA(_.UA(a)) : jx || (jx = new _.TA)
    };
    WA = function(a, b) {
        $a(b, function(c, d) {
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : VA.hasOwnProperty(d) ? a.setAttribute(VA[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    VA = {
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
    _.YA = function(a) {
        a = a.document;
        a = _.XA(a) ? a.documentElement : a.body;
        return new _.an(a.clientWidth, a.clientHeight)
    };
    ZA = function(a) {
        return a.scrollingElement ? a.scrollingElement : !my && _.XA(a) ? a.documentElement : a.body || a.documentElement
    };
    _.$A = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    aB = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!_.Ua(f) || _.La(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.La(f)) {
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
                _.Lx(g ? _.Ja(f) : f, d)
            }
        }
    };
    _.bB = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.XA = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.cB = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.dB = function(a) {
        var b;
        if (RA && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.La(b) && 1 == b.nodeType ? b : null
    };
    _.eB = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.UA = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    fB = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.$A(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    _.Gj = function(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    _.TA = function(a) {
        this.g = a || _.t.document || document
    };
    _.q = _.TA.prototype;
    _.q.hl = function(a) {
        var b = this.g;
        return "string" === typeof a ? b.getElementById(a) : a
    };
    _.q.ln = _.TA.prototype.hl;
    _.q.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    _.q.createElement = function(a) {
        return _.bB(this.g, a)
    };
    _.q.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    _.q.append = function(a, b) {
        aB(_.UA(a), a, arguments)
    };
    _.q.Sj = _.cB;
    _.q.contains = _.eB;
    var hB = function() {
            return fa && ia ? ia.mobile : !gB() && (ka("iPod") || ka("iPhone") || ka("Android") || ka("IEMobile"))
        },
        gB = function() {
            return fa && ia ? !ia.mobile && (ka("iPad") || ka("Android") || ka("Silk")) : ka("iPad") || ka("Android") && !ka("Mobile") || ka("Silk")
        };
    var jB, tp;
    _.iB = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    jB = function(a) {
        return a ? decodeURI(a) : a
    };
    _.Qn = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) _.Qn(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    tp = /#|$/;
    var Al, Ok, kB, Pk, jn, Dp, nw, mw, mB, nB, kn, oB, pB, qB, rB, sB, ih, yv, tB, uB, Vp, fk, Wp, aq, vB, xB, yB, zB, AB, BB, mk, CB, Ko, Bo, DB, Vn, EB, FB;
    _.fl = function(a) {
        try {
            return !!a && null != a.location.href && hy(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Al = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? kB(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.fl(c) || !a(c));) c = kB(c)
    };
    Ok = function() {
        var a = window;
        Al(function(b) {
            a = b;
            return !1
        });
        return a
    };
    kB = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Pk = function(a) {
        return _.fl(a.top) ? a.top : null
    };
    _.rp = function(a, b) {
        var c = _.hg("SCRIPT", a);
        mb(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    jn = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.Bh = function() {
        if (!_.z.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.z.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Tn = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.lB = function(a) {
        var b = [];
        _.Tn(a, function(c) {
            b.push(c)
        });
        return b
    };
    Dp = function(a, b) {
        return cb(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.Qh = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    nw = Ti(function() {
        return _.Tg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], mB) || 1E-4 > Math.random()
    });
    mw = Ti(function() {
        return mB("MSIE")
    });
    mB = function(a) {
        return -1 != da().indexOf(a)
    };
    nB = /^([0-9.]+)px$/;
    kn = function(a) {
        return (a = nB.exec(a)) ? +a[1] : null
    };
    oB = function() {
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
    pB = function() {
        var a = _.t.location.href;
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    qB = {
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
    rB = Ti(function() {
        return _.lB(qB)
    });
    sB = function(a) {
        var b = rB();
        return a.length ? _.tj(b, function(c) {
            return !(0 <= _.Ha(a, c))
        }) : b
    };
    ih = function() {
        var a = _.hg("IFRAME"),
            b = {};
        _.Lx(rB(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    yv = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    tB = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = kB(a))) break
        }
        return null
    };
    uB = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.hg("IFRAME");
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
    _.dq = Ti(function() {
        return hB() ? 2 : gB() ? 1 : 0
    });
    Vp = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.Hp = function(a, b) {
        _.Tn(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    fk = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    Wp = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = jn(a, window);
            if (d) {
                if (b(d, a)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    aq = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.Mx(a, parseFloat)
    };
    vB = {};
    _.wB = (vB["http://googleads.g.doubleclick.net"] = !0, vB["http://pagead2.googlesyndication.com"] = !0, vB["https://googleads.g.doubleclick.net"] = !0, vB["https://pagead2.googlesyndication.com"] = !0, vB);
    xB = function(a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    };
    yB = [];
    zB = function() {
        var a = yB;
        yB = [];
        a = _.u(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    AB = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    BB = function() {
        var a = void 0 === a ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    };
    mk = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: BB(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    CB = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (yB.push(b), 1 == yB.length && (_.z.Promise ? _.z.Promise.resolve().then(zB) : window.setImmediate ? setImmediate(zB) : setTimeout(zB, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    Ko = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Bo = function(a) {
        return 0 === a || Ko(a)
    };
    DB = function(a) {
        return new _.z.Promise(function(b) {
            setTimeout(function() {
                return void b(void 0)
            }, a)
        })
    };
    Vn = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.hg = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    EB = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.fl(a) && (b = a);
        return b
    };
    _.dj = function(a) {
        return _.H(PA) || oa() && hB() ? FB(a, !0) : 1
    };
    FB = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? Pk(a) : a;
        if (!c) return 1;
        a = 0 === (0, _.dq)();
        b = !!c.document.querySelector('meta[name=viewport][content*="width=device-width"]');
        var d = c.innerWidth;
        c = c.outerWidth;
        if (0 === d) return 1;
        var e = Math.round(100 * (c / d + _.x(Number, "EPSILON"))) / 100;
        return 1 === e ? 1 : a || b ? e : Math.round(100 * (c / d / .4 + _.x(Number, "EPSILON"))) / 100
    };
    _.GB = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.GB.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.GB.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.HB = function(a) {
        return new _.GB(a.top, a.right, a.bottom, a.left)
    };
    _.GB.prototype.contains = function(a) {
        return this && a ? a instanceof _.GB ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.GB.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.GB.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.GB.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var IB = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        JB = function(a) {
            return new _.GB(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        KB = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new IB(c, e, d - c, a - e)
            }
            return null
        };
    IB.prototype.contains = function(a) {
        return a instanceof _.Xm ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    IB.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    IB.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    IB.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var LB = function(a) {
        return (a = void 0 === a ? Xf() : a) ? _.fl(a.master) ? a.master : null : null
    };
    var OB, QB, $m, RB, SB, Wm;
    _.NB = function(a, b, c) {
        if ("string" === typeof b)(b = _.MB(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.MB(c, d);
                f && (c.style[f] = e)
            }
    };
    OB = {};
    _.MB = function(a, b) {
        var c = OB[b];
        if (!c) {
            var d = _.ey(b);
            c = d;
            void 0 === a.style[d] && (d = (my ? "Webkit" : ly ? "Moz" : _.jy ? "ms" : null) + fy(d), void 0 !== a.style[d] && (c = d));
            OB[b] = c
        }
        return c
    };
    _.PB = function(a, b) {
        var c = _.UA(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    QB = function(a, b) {
        return _.PB(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    $m = function(a) {
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
    RB = function(a) {
        if (_.jy && !(8 <= Number(vy))) return a.offsetParent;
        var b = _.UA(a),
            c = QB(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = QB(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    SB = function(a) {
        var b = _.UA(a),
            c = new _.Xm(0, 0);
        var d = b ? _.UA(b) : document;
        d = !_.jy || 9 <= Number(vy) || _.XA(qg(d).g) ? d.documentElement : d.body;
        if (a == d) return c;
        a = $m(a);
        d = qg(b).g;
        b = ZA(d);
        d = d.parentWindow || d.defaultView;
        b = _.jy && d.pageYOffset != b.scrollTop ? new _.Xm(b.scrollLeft, b.scrollTop) : new _.Xm(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Wm = function(a, b) {
        var c = new _.Xm(0, 0),
            d = _.$A(_.UA(a));
        if (!hy(d, "parent")) return c;
        do {
            var e = d == b ? SB(a) : _.TB(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.TB = function(a) {
        a = $m(a);
        return new _.Xm(a.left, a.top)
    };
    _.UB = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Zm = function(a, b) {
        if ("none" != QB(b, "display")) return a(b);
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
    _.VB = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = my && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = $m(a), new _.an(a.right - a.left, a.bottom - a.top)) : new _.an(b, c)
    };
    var XB, Sp;
    _.WB = _.Ew(["//fonts.googleapis.com/css"]);
    XB = function(a) {
        a = void 0 === a ? LA : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    };
    Sp = function(a) {
        a = LB(Xf(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    _.Dj = function(a) {
        this.D = _.A(a)
    };
    _.T(_.Dj, _.D);
    _.Dj.da = [1];
    var YB = function(a) {
        this.D = _.A(a)
    };
    _.T(YB, _.D);
    var ZB = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var $B = function(a) {
        this.D = _.A(a)
    };
    _.T($B, _.D);
    $B.prototype.getVersion = function() {
        return _.dz(this, 2)
    };
    $B.da = [3];
    var aC = function(a) {
        this.D = _.A(a)
    };
    _.T(aC, _.D);
    var bC = function(a) {
        this.D = _.A(a)
    };
    _.T(bC, _.D);
    var cC = function(a) {
        this.D = _.A(a)
    };
    _.T(cC, _.D);
    cC.prototype.getVersion = function() {
        return _.dz(this, 1)
    };
    var dC = function(a) {
        this.D = _.A(a)
    };
    _.T(dC, _.D);
    var eC = function(a) {
        this.D = _.A(a)
    };
    _.T(eC, _.D);
    var fC = function(a) {
        var b = new eC;
        return _.vi(b, 1, a)
    };
    var gC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        hC = 6 + gC.reduce(function(a, b) {
            return a + b
        });
    var iC = function(a) {
        this.D = _.A(a)
    };
    _.T(iC, _.D);
    var jC = function(a) {
        this.D = _.A(a)
    };
    _.T(jC, _.D);
    jC.prototype.getVersion = function() {
        return _.dz(this, 1)
    };
    var kC = function(a) {
        this.D = _.A(a)
    };
    _.T(kC, _.D);
    var lC = function(a) {
        this.D = _.A(a)
    };
    _.T(lC, _.D);
    var mC = function(a) {
        var b = new lC;
        return _.vi(b, 1, a)
    };
    var nC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        oC = 6 + nC.reduce(function(a, b) {
            return a + b
        });
    var pC = function(a) {
        this.D = _.A(a)
    };
    _.T(pC, _.D);
    var qC = function(a) {
        this.D = _.A(a)
    };
    _.T(qC, _.D);
    var rC = function(a) {
        this.D = _.A(a)
    };
    _.T(rC, _.D);
    rC.prototype.getVersion = function() {
        return _.dz(this, 1)
    };
    var sC = function(a) {
        this.D = _.A(a)
    };
    _.T(sC, _.D);
    var tC = function(a) {
        this.D = _.A(a)
    };
    _.T(tC, _.D);
    var uC = function(a) {
        var b = new tC;
        return _.vi(b, 1, a)
    };
    var vC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        wC = 6 + vC.reduce(function(a, b) {
            return a + b
        });
    var xC = function(a) {
        this.D = _.A(a)
    };
    _.T(xC, _.D);
    var yC = function(a) {
        this.D = _.A(a)
    };
    _.T(yC, _.D);
    yC.prototype.getVersion = function() {
        return _.dz(this, 1)
    };
    var zC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        AC = 6 + zC.reduce(function(a, b) {
            return a + b
        });
    var BC = function(a) {
        this.D = _.A(a)
    };
    _.T(BC, _.D);
    _.Yl = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    _.CC = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var DC = null,
        EC = function() {
            if (null === DC) {
                DC = "";
                try {
                    var a = "";
                    try {
                        a = _.t.top.location.hash
                    } catch (c) {
                        a = _.t.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        DC = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return DC
        };
    var FC = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.slotId = e;
        this.taskId = void 0;
        this.uniqueId = Math.random()
    };
    var GC, HC, IC, JC, KC;
    GC = _.t.performance;
    HC = !!(GC && GC.mark && GC.measure && GC.clearMarks);
    IC = Ti(function() {
        var a;
        if (a = HC) a = EC(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    JC = function(a, b) {
        this.events = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.g = IC() || (null != c ? c : Math.random() < a)
    };
    _.Wl = function(a) {
        a && GC && IC() && (GC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), GC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    KC = function(a, b, c, d, e, f) {
        a.g && (b = new FC(b, c, d, void 0 === e ? 0 : e, f), !a.g || 2048 < a.events.length || a.events.push(b))
    };
    JC.prototype.start = function(a, b) {
        if (!this.g) return null;
        var c = _.eg() || _.dg();
        a = new FC(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        GC && IC() && GC.mark(b);
        return a
    };
    JC.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            var b = _.eg() || _.dg();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            GC && IC() && GC.mark(b);
            !this.g || 2048 < this.events.length || this.events.push(a)
        }
    };
    var jt = function(a, b, c) {
        var d = _.eg();
        d && KC(a, b, 9, d, 0, c)
    };
    var OC, NC, QC, PC;
    _.LC = function() {
        this.l = "&";
        this.A = {};
        this.j = 0;
        this.g = []
    };
    _.MC = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    OC = function(a, b, c, d, e) {
        var f = [];
        _.Tn(a, function(g, h) {
            (g = NC(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    };
    NC = function(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(NC(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(OC(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    QC = function(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = PC(a) - b.length;
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
                var l = OC(h[k], a.l, ",$");
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
    PC = function(a) {
        var b = 1,
            c;
        for (c in a.A) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    };
    _.ng = function(a) {
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
    var RC = function(a, b, c, d, e) {
            jg(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
        },
        mg = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.Tn(a, function(e, f) {
                if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            Qs(d, c)
        },
        Qs = function(a, b) {
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
            }), c.fetch(a, b)) : RC(c, a, void 0, b, d)
        };
    var SC = function(a, b) {
        var c = new BC;
        a = _.K(c, 1, a);
        b = _.Aj(a, 2, b);
        this.j = _.Yd(b)
    };
    var TC = function(a) {
        this.D = _.A(a)
    };
    _.T(TC, _.D);
    var VC = function(a, b) {
            return yj(a, 1, UC, fd(b))
        },
        WC = function(a, b) {
            return yj(a, 2, UC, Wc(b))
        },
        XC = function(a, b) {
            return yj(a, 3, UC, null == b ? b : xc(b))
        },
        UC = [1, 2, 3];
    var YC = function(a) {
        this.D = _.A(a)
    };
    _.T(YC, _.D);
    var $C = function(a, b) {
            return yj(a, 4, ZC, _.uc(b))
        },
        ZC = [2, 4];
    var aD = function(a) {
        this.D = _.A(a)
    };
    _.T(aD, _.D);
    var bD = function(a) {
            var b = new aD;
            return _.Aj(b, 1, a)
        },
        cD = function(a, b) {
            return _.vi(a, 3, b)
        },
        dD = function(a, b) {
            return zk(a, 4, TC, b)
        };
    aD.da = [4];
    var eD = function(a) {
        this.D = _.A(a)
    };
    _.T(eD, _.D);
    var fD = function(a) {
        this.D = _.A(a)
    };
    _.T(fD, _.D);
    var Sl = function(a) {
        this.D = _.A(a)
    };
    _.T(Sl, _.D);
    var Hl = function(a) {
        this.D = _.A(a)
    };
    _.T(Hl, _.D);
    var Gl = function(a) {
        this.D = _.A(a)
    };
    _.T(Gl, _.D);
    var El = function(a) {
        this.D = _.A(a)
    };
    _.T(El, _.D);
    var Ol = function(a) {
        this.D = _.A(a)
    };
    _.T(Ol, _.D);
    var gD = function(a) {
        this.D = _.A(a)
    };
    _.T(gD, _.D);
    var hD = function(a) {
        this.D = _.A(a)
    };
    _.T(hD, _.D);
    var Dl = function(a) {
        this.D = _.A(a)
    };
    _.T(Dl, _.D);
    Dl.prototype.getTagSessionCorrelator = function() {
        return _.Rg(this, 2)
    };
    var Nl = function(a) {
        var b = new gD;
        return _.Kl(a, 13, Ll, b)
    };
    Dl.da = [4];
    var Ll = [6, 7, 8, 9, 11, 13, 14];
    var iD = function(a) {
        this.D = _.A(a)
    };
    _.T(iD, _.D);
    var jD = function(a) {
        this.D = _.A(a)
    };
    _.T(jD, _.D);
    var zq = function(a) {
        this.D = _.A(a)
    };
    _.T(zq, _.D);
    _.xj = function(a) {
        this.D = _.A(a)
    };
    _.T(_.xj, _.D);
    _.xj.prototype.getTagSessionCorrelator = function() {
        return _.Rg(this, 8)
    };
    _.wj = function(a, b) {
        return _.Jl(a, 10, b)
    };
    _.zj = [3, 4, 6];
    var xq = function(a) {
        this.D = _.A(a)
    };
    _.T(xq, _.D);
    var kD = function(a) {
            var b = new xq;
            return _.Kl(b, 2, Aq, a)
        },
        Aq = [1, 2, 4, 5];
    var tq = function(a) {
        this.D = _.A(a)
    };
    _.T(tq, _.D);
    tq.prototype.getTagSessionCorrelator = function() {
        return _.Rg(this, 2)
    };
    tq.da = [4];
    var bm = function(a) {
        this.D = _.A(a)
    };
    _.T(bm, _.D);
    bm.da = [3];
    var am = function(a) {
        this.D = _.A(a)
    };
    _.T(am, _.D);
    am.da = [4, 5];
    var $l = function(a) {
        this.D = _.A(a)
    };
    _.T($l, _.D);
    $l.prototype.getTagSessionCorrelator = function() {
        return _.Rg(this, 1)
    };
    $l.da = [2];
    var Zl = function(a) {
        this.D = _.A(a)
    };
    _.T(Zl, _.D);
    var em = [4, 6];
    var lD = function(a) {
        this.D = _.A(a)
    };
    _.T(lD, _.D);
    lD.prototype.getTagSessionCorrelator = function() {
        return _.Rg(this, 1)
    };
    lD.prototype.getMessageId = function() {
        return _.og(this, 8, 0)
    };
    lD.prototype.getMessageArgs = function(a) {
        return fz(this, 9, a)
    };
    lD.da = [2, 9];
    var bt = function(a) {
        this.D = _.A(a)
    };
    _.T(bt, _.D);
    var ct = function(a) {
        this.D = _.A(a)
    };
    _.T(ct, _.D);
    var dt = [3];
    var nD = function(a) {
            this.lc = new mD(a)
        },
        mD = function(a) {
            this.li = new oD(a);
            this.Fd = new pD(a)
        },
        oD = function(a) {
            this.vk = new qD(a);
            this.refresh = new rD(a)
        },
        qD = function(a) {
            this.wk = new sD(a)
        },
        sD = function(a) {
            this.Qc = function(b) {
                var c = b.Tc,
                    d = b.Tf,
                    e = b.ri,
                    f = b.si;
                b = b.ni;
                a(cD(dD(dD(dD(dD(bD("XVNPAd"), WC(new TC, Math.round(d))), XC(new TC, e)), XC(new TC, f)), XC(new TC, b)), $C(new YC, c)))
            }
        },
        rD = function(a) {
            this.km = new tD(a)
        },
        tD = function(a) {
            this.Qc = function(b) {
                var c = b.Tc;
                b = b.Om;
                a(cD(dD(bD("e1Ueh"), WC(new TC, Math.round(b))), $C(new YC, c)))
            }
        },
        pD = function(a) {
            this.lh = new uD(a);
            this.dk = new vD(a);
            this.lk = new wD(a);
            this.zk = new xD(a)
        },
        vD = function(a) {
            this.Qc = function(b) {
                b = b.Tc;
                a(cD(bD("rsv8Kc"), $C(new YC, b)))
            }
        },
        wD = function(a) {
            this.Jc = function(b) {
                var c = b.Wc,
                    d = b.Sf;
                b = b.status;
                d = dD(dD(bD("SOomke"), VC(new TC, d)), VC(new TC, b));
                b = new YC;
                c = yj(b, 2, ZC, Wc(Math.round(c)));
                a(cD(d, c))
            }
        },
        xD = function(a) {
            this.Qc = function(b) {
                var c = b.Tc;
                b = b.Ml;
                a(cD(dD(bD("zi5kKf"), WC(new TC, Math.round(b))), $C(new YC, c)))
            }
        },
        uD = function(a) {
            this.wh = new yD(a)
        },
        yD = function(a) {
            this.Jc = function(b) {
                var c = b.Wc;
                b = b.status;
                b = dD(bD("TP3y1d"), VC(new TC, b));
                var d = new YC;
                c = yj(d, 2, ZC, Wc(Math.round(c)));
                a(cD(b, c))
            }
        },
        zD = function() {
            SC.apply(this, arguments);
            var a = this;
            this.Zb = new nD(function(b) {
                return a.um(b)
            })
        };
    _.T(zD, SC);
    _.AD = function() {
        zD.apply(this, arguments)
    };
    _.T(_.AD, zD);
    _.q = _.AD.prototype;
    _.q.wm = function() {
        this.A.apply(this, _.Ki(_.ya.apply(0, arguments).map(function(a) {
            return {
                Qb: !0,
                nc: 2,
                Yb: a.toJSON()
            }
        })))
    };
    _.q.Uc = function() {
        this.A.apply(this, _.Ki(_.ya.apply(0, arguments).map(function(a) {
            return {
                Qb: !0,
                nc: 5,
                Yb: a.toJSON()
            }
        })))
    };
    _.q.qj = function() {
        this.A.apply(this, _.Ki(_.ya.apply(0, arguments).map(function(a) {
            return {
                Qb: !0,
                nc: 15,
                Yb: a.toJSON()
            }
        })))
    };
    _.q.rj = ca(3);
    _.q.zm = function() {
        this.A.apply(this, _.Ki(_.ya.apply(0, arguments).map(function(a) {
            return {
                Qb: !0,
                nc: 17,
                Yb: a.toJSON()
            }
        })))
    };
    _.q.xm = function() {
        this.A.apply(this, _.Ki(_.ya.apply(0, arguments).map(function(a) {
            return {
                Qb: !0,
                nc: 19,
                Yb: a.toJSON()
            }
        })))
    };
    _.q.Dm = function() {
        this.A.apply(this, _.Ki(_.ya.apply(0, arguments).map(function(a) {
            return {
                Qb: !0,
                nc: 21,
                Yb: a.toJSON()
            }
        })))
    };
    _.q.um = function() {
        this.A.apply(this, _.Ki(_.ya.apply(0, arguments).map(function(a) {
            return {
                Qb: !1,
                nc: 1,
                Yb: a.toJSON()
            }
        })))
    };
    var BD = function(a, b) {
        if (_.z.globalThis.fetch) _.z.globalThis.fetch(a, {
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
    var CD = function(a, b, c, d, e, f, g, h) {
        _.AD.call(this, a, b);
        this.C = c;
        this.o = d;
        this.Ca = e;
        this.I = f;
        this.J = g;
        this.M = h;
        this.g = [];
        this.l = null;
        this.F = !1
    };
    _.T(CD, _.AD);
    var DD = function(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.g.length) {
            var b = lg(a.g, a.j);
            a.o(a.C + "?e=1", b);
            a.g = []
        }
    };
    CD.prototype.A = function() {
        var a = _.ya.apply(0, arguments),
            b = this;
        try {
            this.J && 65536 <= lg(this.g.concat(a), this.j).length && DD(this), this.M && !this.F && (this.F = !0, this.M.g(function() {
                DD(b)
            })), this.g.push.apply(this.g, _.Ki(a)), this.g.length >= this.I && DD(this), this.g.length && null === this.l && (this.l = setTimeout(function() {
                DD(b)
            }, this.Ca))
        } catch (c) {
            kg(c, this.j)
        }
    };
    var sw = function(a, b, c, d, e, f) {
        CD.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", BD, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!_.z.globalThis.fetch, f)
    };
    _.T(sw, CD);
    var ED = new MA(494575051),
        FD = new OA(489560439),
        GD = new OA(505762507);
    var Pv, Oo, Mp, HD, ID, JD, Mi, KD, LD, MD, ov, nv, Cv, ND, pw, OD, PD, QD, bp, RD, SD, TD, UD, is, VD, WD, XD, ow, YD, xv, ZD, $D, aE, bE, Zo, hE, kE, vr, lE, Ul, Ou, nE, mr, oE, Gq, pE, qE, rE, sE, cu, ju, tE, uE, vE, wE, xE, vv, yE, tv, zE, Pn, Mn, AE, Nk, iv, CE, DE, EE, Jo, FE, jv, ml, GE, HE, IE, JE, ll, $t, lu, au, KE, qw, LE, ME, NE, OE, bu, PE, QE, RE, SE, TE, UE, pt, Os, JF, KF, Ls, LF, MF, NF, OF, PF, QF, RF, SF, ew, fw, TF, gw, dw, UF, VF, Xt, iw, WF;
    Pv = new _.U(607106222);
    Oo = new _.U(577939489, !0);
    Mp = new MA(7, .1);
    HD = new _.U(212);
    ID = new _.U(561694963, !0);
    JD = new _.U(609732864);
    Mi = new MA(612427113);
    KD = new MA(462420536);
    LD = new _.U(476475256, !0);
    MD = new MA(438663674);
    ov = new MA(45409629);
    nv = new MA(522348973);
    Cv = new MA(550605190);
    ND = new MA(564509649);
    pw = new MA(578655462, 20);
    OD = new _.U(558225291);
    PD = new _.U(591917863);
    QD = new _.U(613699219, !0);
    bp = new MA(617843383);
    RD = new _.U(582386403, !0);
    SD = new _.U(603086552, !0);
    TD = new _.U(577861852);
    UD = new _.U(573236024, !0);
    is = new _.U(453);
    VD = new _.U(454);
    WD = new MA(377289019, 1E4);
    XD = new MA(529, 20);
    ow = new MA(573282293, .01);
    YD = new NA(10);
    xv = new MA(610770343);
    ZD = new _.U(610525552);
    $D = new _.U(45624259);
    aE = new _.U(45622305);
    bE = new _.U(360245597, !0);
    Zo = new _.U(540043576, !0);
    _.cE = new _.U(479390945);
    _.dE = new _.U(518650310);
    _.eE = new _.U(547020083);
    _.fE = new _.U(561164161, !0);
    _.gE = new MA(550718589, 250);
    hE = new _.U(586382198);
    _.iE = new _.U(600451522, !0);
    _.jE = new MA(609494714);
    kE = new MA(575880738, 10);
    vr = new MA(586681283);
    lE = new _.U(599186119, !0);
    _.mE = new _.U(531615531);
    Ul = new _.U(85);
    Ou = new _.U(524098256);
    nE = new _.U(595824397, !0);
    mr = new MA(532520346, 120);
    oE = new _.U(557870754, !0);
    Gq = new _.U(614048762);
    pE = new OA(466086960);
    qE = new MA(398776877, 6E4);
    rE = new MA(374201269, 6E4);
    sE = new MA(371364213, 6E4);
    cu = new _.U(606310399, !0);
    ju = new _.U(570764855, !0);
    tE = new NA(579921177, "control_1\\.\\d");
    uE = new MA(570764854, 50);
    vE = new _.U(578725095, !0);
    wE = new _.U(453275889);
    xE = new _.U(377936516, !0);
    vv = new MA(599575765, 1E3);
    yE = new _.U(605401295);
    tv = new MA(609715571);
    zE = new MA(24);
    Pn = new OA(1);
    Mn = new NA(2, "1-0-40");
    AE = new _.U(608664189);
    Nk = new _.U(602464517);
    _.BE = new MA(506394061, 100);
    iv = new OA(489);
    CE = new _.U(392065905);
    DE = new MA(360245595, 500);
    EE = new _.U(561985307);
    Jo = new _.U(45397804, !0);
    FE = new _.U(45398607, !0);
    jv = new _.U(424117738);
    ml = new _.U(531493729);
    GE = new _.U(563462360, !0);
    HE = new _.U(555237688);
    IE = new _.U(555237687);
    JE = new _.U(555237686);
    ll = new _.U(507033477, !0);
    $t = new _.U(399705355);
    lu = new _.U(45420038);
    au = new MA(514795754, 2);
    KE = new MA(609173130);
    qw = new MA(613312178);
    LE = new _.U(590730357);
    ME = new _.U(590730358);
    NE = new _.U(590730359);
    OE = new OA(603422363);
    bu = new _.U(590730356);
    PE = new _.U(609118749, !0);
    QE = new _.U(564724551);
    RE = new _.U(567489814, !0);
    SE = new _.U(45415915, !0);
    TE = new _.U(613969547);
    UE = new _.U(609010285);
    pt = new _.U(582338617, !0);
    Os = new _.U(588117531, !0);
    JF = new _.U(612823209);
    KF = new _.U(582287318, !0);
    Ls = new MA(596918936, 500);
    LF = new MA(607730666);
    MF = new _.U(609053740, !0);
    NF = new _.U(612834765, !0);
    OF = new _.U(616896918);
    PF = new _.U(501);
    QF = new _.U(439828594);
    RF = new _.U(483962503);
    SF = new _.U(506738118);
    ew = new _.U(77);
    fw = new _.U(78);
    TF = new _.U(83);
    gw = new _.U(80);
    dw = new _.U(76);
    UF = new _.U(84);
    VF = new _.U(1958);
    Xt = new _.U(1973);
    iw = new _.U(188);
    WF = new _.U(485990406);
    bb({
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
    bb({
        Xn: 0,
        Yn: 1,
        Wn: 2
    }).map(function(a) {
        return Number(a)
    });
    var XF = function(a, b) {
        this.g = Gg(a);
        this.A = b
    };
    XF.prototype[_.x(_.z.Symbol, "iterator")] = function() {
        return this
    };
    XF.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.A.call(void 0, a.value),
            done: a.done
        }
    };
    var YF = function(a, b) {
            return new XF(a, b)
        },
        ZF = function(a) {
            this.A = a;
            this.g = 0
        };
    ZF.prototype[_.x(_.z.Symbol, "iterator")] = function() {
        return this
    };
    ZF.prototype.next = function() {
        for (; this.g < this.A.length;) {
            var a = this.A[this.g].next();
            if (!a.done) return a;
            this.g++
        }
        return {
            done: !0
        }
    };
    var $F = function() {
        return new ZF(_.ya.apply(0, arguments).map(Gg))
    };
    var aG = _.t.URL,
        bG;
    try {
        new aG("http://example.com"), bG = !0
    } catch (a) {
        bG = !1
    }
    var cG = bG,
        dG = function(a) {
            this.g = new _.z.Map;
            0 == a.indexOf("?") && (a = a.substring(1));
            a = _.u(a.split("&"));
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
    dG.prototype.get = function(a) {
        return (a = this.g.get(a)) && a.length ? a[0] : null
    };
    dG.prototype.getAll = function(a) {
        return [].concat(_.Ki(this.g.get(a) || []))
    };
    dG.prototype.has = function(a) {
        return this.g.has(a)
    };
    dG.prototype[_.x(_.z.Symbol, "iterator")] = function() {
        return $F.apply(null, _.Ki(YF(this.g, function(a) {
            var b = a[0];
            return YF(a[1], function(c) {
                return [b, c]
            })
        })))
    };
    dG.prototype.toString = function() {
        return Ng(this)
    };
    var Ng = function(a) {
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
            return _.x(Array, "from").call(Array, a, function(c) {
                return b(c[0]) + "=" + b(c[1])
            }).join("&")
        },
        fG = function(a) {
            var b = _.bB(document, "A");
            try {
                _.Fa(b, va(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if ("" === c || ":" === c || ":" != c[c.length - 1]) throw Error(a + " is not a valid URL.");
            if (!eG.has(c)) throw Error(a + " is not a valid URL.");
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
            eG.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        },
        Ig = function(a) {
            if (cG) {
                try {
                    var b = new aG(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = eG.get(b.protocol);
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
            return fG(a)
        },
        eG = new _.z.Map([
            ["http:", "80"],
            ["https:", "443"],
            ["ws:", "80"],
            ["wss:", "443"],
            ["ftp:", "21"]
        ]),
        Hg = function(a) {
            return cG && a.searchParams ? a.searchParams : new dG(a.search)
        };
    var gG = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.hg("IFRAME", b);
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
    var hG = function(a) {
        this.D = _.A(a)
    };
    _.T(hG, _.D);
    hG.da = [1, 2];
    var iG = function(a) {
        this.D = _.A(a)
    };
    _.T(iG, _.D);
    var Qg = of (iG);
    _.V = function() {
        this.M = this.M;
        this.Ca = this.Ca
    };
    _.V.prototype.M = !1;
    _.V.prototype.ya = function() {
        this.M || (this.M = !0, this.A())
    };
    _.S = function(a, b) {
        _.Bp(a, _.ix(Pg, b))
    };
    _.Bp = function(a, b) {
        a.M ? b() : (a.Ca || (a.Ca = []), a.Ca.push(b))
    };
    _.V.prototype.A = function() {
        if (this.Ca)
            for (; this.Ca.length;) this.Ca.shift()()
    };
    var jG = function(a, b, c, d) {
        _.V.call(this);
        this.H = b;
        this.C = c;
        this.o = d;
        this.F = new _.z.Map;
        this.K = 0;
        this.l = new _.z.Map;
        this.J = new _.z.Map;
        this.I = void 0;
        this.j = a
    };
    _.T(jG, _.V);
    jG.prototype.A = function() {
        delete this.g;
        this.F.clear();
        this.l.clear();
        this.J.clear();
        this.I && (_.ig(this.j, "message", this.I), delete this.I);
        delete this.j;
        delete this.o;
        _.V.prototype.A.call(this)
    };
    var kG = function(a) {
            if (a.g) return a.g;
            a.C && a.C(a.j) ? a.g = a.j : a.g = tB(a.j, a.H);
            var b;
            return null != (b = a.g) ? b : null
        },
        mG = function(a, b, c) {
            if (kG(a))
                if (a.g === a.j)(b = a.F.get(b)) && b(a.g, c);
                else {
                    var d = a.l.get(b);
                    if (d && d.nd) {
                        lG(a);
                        var e = ++a.K;
                        a.J.set(e, {
                            Nc: d.Nc,
                            Fk: d.ce(c),
                            Xl: "addEventListener" === b
                        });
                        a.g.postMessage(d.nd(c, e), "*")
                    }
                }
        },
        lG = function(a) {
            a.I || (a.I = function(b) {
                try {
                    var c = a.o ? a.o(b) : void 0;
                    if (c) {
                        var d = c.Xg,
                            e = a.J.get(d);
                        if (e) {
                            e.Xl || a.J.delete(d);
                            var f;
                            null == (f = e.Nc) || f.call(e, e.Fk, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.Jf(a.j, "message", a.I))
        };
    var nG = function(a, b) {
            var c = {
                cb: function(d) {
                    d = Qg(d);
                    b.Ub({
                        yc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        oG = {
            ce: function(a) {
                return a.Ub
            },
            nd: function(a, b) {
                return {
                    __fciCall: {
                        callId: b,
                        command: a.command,
                        spsp: a.spsp || void 0
                    }
                }
            },
            Nc: function(a, b) {
                a({
                    yc: b
                })
            }
        },
        Zq = function(a) {
            _.V.call(this);
            this.g = this.l = !1;
            this.caller = new jG(a, "googlefcPresent", void 0, Sg);
            this.caller.F.set("getDataWithCallback", nG);
            this.caller.l.set("getDataWithCallback", oG)
        };
    _.T(Zq, _.V);
    Zq.prototype.A = function() {
        this.caller.ya();
        _.V.prototype.A.call(this)
    };
    Zq.prototype.kd = function(a) {
        if (void 0 === a ? 0 : a) return !1;
        this.l || (this.g = !!kG(this.caller), this.l = !0);
        return this.g
    };
    var Xq = function(a) {
            return new _.z.Promise(function(b) {
                a.kd() && mG(a.caller, "getDataWithCallback", {
                    command: "loaded",
                    Ub: function(c) {
                        b(c.yc)
                    }
                })
            })
        },
        pG = function(a, b) {
            a.kd() && mG(a.caller, "getDataWithCallback", {
                command: "prov",
                spsp: ql(b),
                Ub: function() {}
            })
        };
    var qG = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        rG = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            this.l = a;
            this.g = null;
            this.F = {};
            this.o = 0;
            var c;
            this.J = null != (c = b.timeoutMs) ? c : 500;
            var d;
            this.I = null != (d = b.fk) ? d : !1;
            this.j = null
        };
    _.T(rG, _.V);
    rG.prototype.A = function() {
        this.F = {};
        this.j && (_.ig(this.l, "message", this.j), delete this.j);
        delete this.F;
        delete this.l;
        delete this.g;
        _.V.prototype.A.call(this)
    };
    var tG = function(a) {
        return "function" === typeof a.l.__tcfapi || null != sG(a)
    };
    rG.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = _.zz(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.J && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.J));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = qG(c), c.internalBlockOnErrors = b.I, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            uG(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    rG.prototype.removeEventListener = function(a) {
        a && a.listenerId && uG(this, "removeEventListener", null, a.listenerId)
    };
    var wG = function(a, b, c) {
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
            a = 0 === f ? a.purpose && a.vendor ? (c = vG(a.vendor.consents, void 0 === d ? "755" : d)) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : c && vG(a.purpose.consents, b) : !0 : 1 === f ? a.purpose && a.vendor ? vG(a.purpose.legitimateInterests, b) && vG(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return a
        },
        vG = function(a, b) {
            return !(!a || !a[b])
        },
        uG = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
            else if (sG(a)) {
                xG(a);
                var e = ++a.o;
                a.F[e] = c;
                a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        sG = function(a) {
            if (a.g) return a.g;
            a.g = tB(a.l, "__tcfapiLocator");
            return a.g
        },
        xG = function(a) {
            a.j || (a.j = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.F[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.Jf(a.l, "message", a.j))
        },
        yG = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = qG(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (mg({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        zG = function(a, b, c) {
            return !1 === a.gdprApplies ? !0 : b.every(function(d) {
                return wG(a, d, c)
            })
        };
    var AG = function(a, b, c) {
            this.g = a;
            this.l = b;
            this.A = void 0 === c ? function() {} : c
        },
        BG = function(a, b, c) {
            return new AG(a, b, c)
        };
    AG.prototype.start = function(a, b) {
        a = void 0 === a ? !1 : a;
        if (this.g === this.g.top) try {
            gG(this.g), CG(this, a, b)
        } catch (c) {}
    };
    var CG = function(a, b, c) {
            b = void 0 === b ? !1 : b;
            var d = {};
            try {
                var e = Jg(a.g),
                    f = Kg(a.g);
                d.fc = e;
                d.fctype = f
            } catch (h) {}
            try {
                var g = Og(a.g.location.href)
            } catch (h) {}
            b && g && (d.href = g);
            b = DG(a.l, d);
            rg(a.g, b, function() {
                a.A(!0)
            }, function() {
                a.A(!1)
            });
            c && pG(new Zq(a.g), c)
        },
        DG = function(a, b) {
            var c = new xx(vx, "https://fundingchoicesmessages.google.com/i/%{id}");
            b = _.x(Object, "assign").call(Object, {}, b, {
                ers: 3
            });
            return _.Cx(Fx(c, {
                id: a
            }), b)
        };
    var EG = _.z.Promise;
    var FG = function(a) {
        this.A = a
    };
    FG.prototype.send = function(a, b, c) {
        this.A.then(function(d) {
            d.send(a, b, c)
        })
    };
    FG.prototype.g = function(a, b) {
        return this.A.then(function(c) {
            return c.g(a, b)
        })
    };
    var GG = function(a) {
        this.data = a
    };
    var HG = function(a) {
        this.A = a
    };
    HG.prototype.send = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        IG(d.port1, b);
        this.A.postMessage(a, [d.port2].concat(c))
    };
    HG.prototype.g = function(a, b) {
        var c = this;
        return new EG(function(d) {
            c.send(a, d, b)
        })
    };
    var JG = function(a, b) {
            IG(a, b);
            return new HG(a)
        },
        IG = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new GG(c.data, JG(c.ports[0])))
            })
        };
    var jl = function(a) {
            var b = a.vb,
                c = void 0 === a.Bb ? "ZNWN1d" : a.Bb,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.qf ? void 0 : a.qf;
            return KG({
                destination: a.destination,
                ki: function() {
                    return b.contentWindow
                },
                Nl: LG(a.origin),
                Bb: c,
                onMessage: d,
                qf: e
            })
        },
        KG = function(a) {
            var b = a.destination,
                c = a.ki,
                d = a.Nl,
                e = void 0 === a.re ? void 0 : a.re,
                f = a.Bb,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.qf ? void 0 : a.qf,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new FG(new EG(function(l, m) {
                var n = function(p) {
                    p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(JG(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        LG = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var eh = function(a) {
            return "string" === typeof a
        },
        Po = function(a) {
            return "boolean" === typeof a
        },
        ah = function(a) {
            return !!a && ("object" === typeof a || "function" === typeof a)
        },
        Jt = ch(),
        dh = ch();
    var MG = navigator,
        NG = function(a) {
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
        OG = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return NG(a.toLowerCase())
        },
        PG = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        QG = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        RG = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var hh = function() {
        this.data = [];
        this.g = -1
    };
    hh.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.x(Number, "isInteger").call(Number, a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
    };
    hh.prototype.get = function(a) {
        return !!this.data[a]
    };
    var jh = function(a) {
        -1 === a.g && (a.g = a.data.reduce(function(b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.g
    };
    var SG = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Ub({
                    yc: null != c ? c : void 0,
                    Oe: d ? void 0 : 2
                })
            })
        },
        TG = {
            ce: function(a) {
                return a.Ub
            },
            nd: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            Nc: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    yc: null != (c = b.returnValue) ? c : void 0,
                    Oe: b.success ? void 0 : 2
                })
            }
        },
        UG = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            var c;
            this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
            this.caller = new jG(a, "__uspapiLocator", function(d) {
                return "function" === typeof d.__uspapi
            }, lh);
            this.caller.F.set("getDataWithCallback", SG);
            this.caller.l.set("getDataWithCallback", TG)
        };
    _.T(UG, _.V);
    UG.prototype.A = function() {
        this.caller.ya();
        _.V.prototype.A.call(this)
    };
    var VG = function(a, b) {
        var c = {};
        if (kG(a.caller)) {
            var d = _.zz(function() {
                b(c)
            });
            mG(a.caller, "getDataWithCallback", {
                Ub: function(e) {
                    e.Oe || (c = e.yc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var qh = function(a) {
            this.g = a || {
                cookie: ""
            }
        },
        XG = function() {
            var a = WG;
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Eg: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            a.remove("TESTCOOKIESENABLED");
            return !0
        };
    _.q = qh.prototype;
    _.q.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Io;
            d = c.sm || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Eg
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
        this.g.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" + e : "")
    };
    _.q.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = lx(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    _.q.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Eg: 0,
            path: b,
            domain: c
        });
        return d
    };
    _.q.isEmpty = function() {
        return !this.g.cookie
    };
    _.q.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = lx(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };
    var WG = new qh("undefined" == typeof document ? null : document);
    var YG = function(a) {
        this.g = a
    };
    var ZG = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        $G = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        aH = function(a, b) {
            (0, a.__gpp)("getSection", function(c) {
                b.Ub({
                    yc: null != c ? c : void 0,
                    Oe: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        bH = {
            ce: function(a) {
                return a.listener
            },
            nd: function(a, b) {
                a = {};
                return a.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, a
            },
            Nc: function(a, b) {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        cH = {
            ce: function(a) {
                return a.listener
            },
            nd: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }, c
            },
            Nc: function(a, b) {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                null == a || a(c, b.success)
            }
        },
        dH = {
            ce: function(a) {
                return a.Ub
            },
            nd: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "getSection",
                    version: "1.1",
                    parameter: a.apiPrefix
                }, c
            },
            Nc: function(a, b) {
                b = b.__gppReturn;
                var c;
                a({
                    yc: null != (c = b.returnValue) ? c : void 0,
                    Oe: b.success ? void 0 : 2
                })
            }
        },
        eH = function(a, b) {
            var c = void 0 === b ? {} : b;
            b = c.timeoutMs;
            c = c.addListenerRemovalCallback;
            _.V.call(this);
            this.caller = new jG(a, "__gppLocator", function(d) {
                return "function" === typeof d.__gpp
            }, rh);
            this.caller.F.set("addEventListener", ZG);
            this.caller.l.set("addEventListener", bH);
            this.caller.F.set("removeEventListener", $G);
            this.caller.l.set("removeEventListener", cH);
            this.caller.F.set("getDataWithCallback", aH);
            this.caller.l.set("getDataWithCallback", dH);
            this.timeoutMs = null != b ? b : 500;
            this.addListenerRemovalCallback = c
        };
    _.T(eH, _.V);
    eH.prototype.A = function() {
        this.caller.ya();
        _.V.prototype.A.call(this)
    };
    eH.prototype.addEventListener = function(a) {
        var b = this,
            c = _.zz(function() {
                a(fH, !0)
            }),
            d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        mG(this.caller, "addEventListener", {
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
                        a(gH, !0);
                        return
                    }
                    a(hH, !0)
                }
            }
        })
    };
    eH.prototype.removeEventListener = function(a) {
        mG(this.caller, "removeEventListener", {
            listener: this.addListenerRemovalCallback ? function() {} : void 0,
            listenerId: a
        })
    };
    var iH = function(a) {
            if (!a) return !1;
            var b = Zf(a.split("~")[0]),
                c = $f(b.slice(0, 6)),
                d = $f(b.slice(6, 12)),
                e = new $B;
            var f = _.Jl(e, 1, c);
            var g = _.Jl(f, 2, d);
            for (var h = b.slice(12), k = $f(h.slice(0, 12)), l = [], m = h.slice(12).replace(/0+$/, ""), n = 0; n < k; n++) {
                if (0 === m.length) throw Error("Found " + n + " of " + k + " sections [" + l + "] but reached end of input [" + h + "]");
                var p = 0 === $f(m[0]);
                m = m.slice(1);
                var r = cg(m, h),
                    v = 0 === l.length ? 0 : l[l.length - 1],
                    w = ag(r) + v;
                m = m.slice(r.length);
                if (p) l.push(w);
                else {
                    for (var y = cg(m, h), B = ag(y), C = 0; C <= B; C++) l.push(w + C);
                    m = m.slice(y.length)
                }
            }
            if (0 < m.length) throw Error("Found " + k + " sections [" + l + "] but has remaining input [" + m + "], entire input [" + h + "]");
            var G = _.qe(g, 3, l, Ec);
            var F = _.x(a, "includes").call(a, "~") ? a.split("~").slice(1) : [];
            for (var M = 0; M < je(G, 3, Ic, 2).length; ++M) {
                var R = je(G, 3, Ic, 2)[M],
                    N = F[M];
                switch (R) {
                    case 8:
                        if (0 === N.length) throw Error("Cannot decode empty USCA section string.");
                        var aa = N.split(".");
                        if (2 < aa.length) throw Error("Expected at most 1 sub-section but got " + (aa.length - 1) + " when decoding " + N + ".");
                        var ha = void 0,
                            la = void 0,
                            ea = void 0,
                            Ga = void 0,
                            ta = void 0,
                            Ba = void 0,
                            Na = void 0,
                            Wa = void 0,
                            eb = void 0,
                            Ta = void 0,
                            cc = void 0,
                            Fc = void 0,
                            $b = void 0,
                            jc = void 0,
                            dc = void 0,
                            ec = void 0,
                            Oc = void 0,
                            Pc = void 0,
                            pf = void 0,
                            ue = void 0,
                            Kd = void 0,
                            ve = void 0,
                            sg = void 0,
                            tg = aa[0];
                        if (0 === tg.length) throw Error("Cannot decode empty core segment string.");
                        var Qc = bg(tg, hC),
                            Ld = $f(Qc.slice(0, 6));
                        Qc = Qc.slice(6);
                        if (1 !== Ld) throw Error("Unable to decode unsupported USCA Section specification version " + Ld + " - only version 1 is supported.");
                        for (var Md = 0, ab = [], Ob = 0; Ob < gC.length; Ob++) {
                            var qf = gC[Ob];
                            ab.push($f(Qc.slice(Md, Md + qf)));
                            Md += qf
                        }
                        var we = new cC;
                        sg = _.Jl(we, 1, Ld);
                        var ug = ab.shift();
                        ve = _.K(sg, 2, ug);
                        var jd = ab.shift();
                        Kd = _.K(ve, 3, jd);
                        var rf = ab.shift();
                        ue = _.K(Kd, 4, rf);
                        var rj = ab.shift();
                        pf = _.K(ue, 5, rj);
                        var sj = ab.shift();
                        Pc = _.K(pf, 6, sj);
                        var vg = new bC,
                            Ch = ab.shift();
                        Oc = _.K(vg, 1, Ch);
                        var wg = ab.shift();
                        ec = _.K(Oc, 2, wg);
                        var Dh = ab.shift();
                        dc = _.K(ec, 3, Dh);
                        var xg = ab.shift();
                        jc = _.K(dc, 4, xg);
                        var xe = ab.shift();
                        $b = _.K(jc, 5, xe);
                        var Eh = ab.shift();
                        Fc = _.K($b, 6, Eh);
                        var Fh = ab.shift();
                        cc = _.K(Fc, 7, Fh);
                        var Gh = ab.shift();
                        Ta = _.K(cc, 8, Gh);
                        var Hh = ab.shift();
                        eb = _.K(Ta, 9, Hh);
                        Wa = _.vi(Pc, 7, eb);
                        var Ih = new aC,
                            Nd = ab.shift();
                        Na = _.K(Ih, 1, Nd);
                        var Jh = ab.shift();
                        Ba = _.K(Na, 2, Jh);
                        ta = _.vi(Wa, 8, Ba);
                        var kd = ab.shift();
                        Ga = _.K(ta, 9, kd);
                        var Kh = ab.shift();
                        ea = _.K(Ga, 10, Kh);
                        var sf = ab.shift();
                        la = _.K(ea, 11, sf);
                        var Gc = ab.shift();
                        var tf = ha = _.K(la, 12, Gc);
                        if (1 === aa.length) var uf = fC(tf);
                        else {
                            var Rc = fC(tf),
                                yg = void 0,
                                zg = void 0,
                                Ag = void 0,
                                vf = aa[1];
                            if (0 === vf.length) throw Error("Cannot decode empty GPC segment string.");
                            var Sc = bg(vf, 3),
                                wf = $f(Sc.slice(0, 2));
                            if (0 > wf || 1 < wf) throw Error("Attempting to decode unknown GPC segment subsection type " + wf + ".");
                            Ag = wf + 1;
                            var Lh = $f(Sc.charAt(2)),
                                ye = new dC;
                            zg = _.K(ye, 2, Ag);
                            yg = _.Il(zg, 1, !!Lh);
                            uf = _.vi(Rc, 2, yg)
                        }
                        var ld = _.Km(uf, cC, 1);
                        if (1 === _.og(ld, 5, 0) || 1 === _.og(ld, 6, 0)) return !0;
                        break;
                    case 10:
                        if (0 === N.length) throw Error("Cannot decode empty USCO section string.");
                        var md = N.split(".");
                        if (2 < md.length) throw Error("Expected at most 2 segments but got " + md.length + " when decoding " + N + ".");
                        var Pb = void 0,
                            xf = void 0,
                            Bg = void 0,
                            yf = void 0,
                            Mh = void 0,
                            Nh = void 0,
                            ze = void 0,
                            Tc = void 0,
                            Oh = void 0,
                            Ae = void 0,
                            zf = void 0,
                            Qb = void 0,
                            Ph = void 0,
                            Hc = void 0,
                            Cg = void 0,
                            Af = void 0,
                            Dg = void 0,
                            Eg = void 0,
                            Fg = md[0];
                        if (0 === Fg.length) throw Error("Cannot decode empty core segment string.");
                        var nd = bg(Fg, oC),
                            Be = $f(nd.slice(0, 6));
                        nd = nd.slice(6);
                        if (1 !== Be) throw Error("Unable to decode unsupported USCO Section specification version " + Be + " - only version 1 is supported.");
                        for (var Ce = 0, Cb = [], Lg = 0; Lg < nC.length; Lg++) {
                            var Qj = nC[Lg];
                            Cb.push($f(nd.slice(Ce, Ce + Qj)));
                            Ce += Qj
                        }
                        var Rj = new jC;
                        Eg = _.Jl(Rj, 1, Be);
                        var sn = Cb.shift();
                        Dg = _.K(Eg, 2, sn);
                        var Sj = Cb.shift();
                        Af = _.K(Dg, 3, Sj);
                        var tn = Cb.shift();
                        Cg = _.K(Af, 4, tn);
                        var un = Cb.shift();
                        Hc = _.K(Cg, 5, un);
                        var Mg = Cb.shift();
                        Ph = _.K(Hc, 6, Mg);
                        var IU = new iC,
                            JU = Cb.shift();
                        Qb = _.K(IU, 1, JU);
                        var KU = Cb.shift();
                        zf = _.K(Qb, 2, KU);
                        var LU = Cb.shift();
                        Ae = _.K(zf, 3, LU);
                        var MU = Cb.shift();
                        Oh = _.K(Ae, 4, MU);
                        var NU = Cb.shift();
                        Tc = _.K(Oh, 5, NU);
                        var OU = Cb.shift();
                        ze = _.K(Tc, 6, OU);
                        var PU = Cb.shift();
                        Nh = _.K(ze, 7, PU);
                        Mh = _.vi(Ph, 7, Nh);
                        var QU = Cb.shift();
                        yf = _.K(Mh, 8, QU);
                        var RU = Cb.shift();
                        Bg = _.K(yf, 9, RU);
                        var SU = Cb.shift();
                        xf = _.K(Bg, 10, SU);
                        var TU = Cb.shift();
                        var VE = Pb = _.K(xf, 11, TU);
                        if (1 === md.length) var WE = mC(VE);
                        else {
                            var UU = mC(VE),
                                XE = void 0,
                                YE = void 0,
                                ZE = void 0,
                                $E = md[1];
                            if (0 === $E.length) throw Error("Cannot decode empty GPC segment string.");
                            var aF = bg($E, 3),
                                vn = $f(aF.slice(0, 2));
                            if (0 > vn || 1 < vn) throw Error("Attempting to decode unknown GPC segment subsection type " + vn + ".");
                            ZE = vn + 1;
                            var VU = $f(aF.charAt(2)),
                                WU = new kC;
                            YE = _.K(WU, 2, ZE);
                            XE = _.Il(YE, 1, !!VU);
                            WE = _.vi(UU, 2, XE)
                        }
                        var bF = _.Km(WE, jC, 1);
                        if (1 === _.og(bF, 5, 0) || 1 === _.og(bF, 6, 0)) return !0;
                        break;
                    case 12:
                        if (0 === N.length) throw Error("Cannot decode empty usct section string.");
                        var Tj = N.split(".");
                        if (2 < Tj.length) throw Error("Expected at most 2 segments but got " + Tj.length + " when decoding " + N + ".");
                        var XU = void 0,
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
                            uF = void 0,
                            vF = void 0,
                            wF = void 0,
                            xF = Tj[0];
                        if (0 === xF.length) throw Error("Cannot decode empty core segment string.");
                        var wn = bg(xF, wC),
                            Nt = $f(wn.slice(0, 6));
                        wn = wn.slice(6);
                        if (1 !== Nt) throw Error("Unable to decode unsupported USCT Section specification version " + Nt + " - only version 1 is supported.");
                        for (var Ot = 0, Db = [], Pt = 0; Pt < vC.length; Pt++) {
                            var yF = vC[Pt];
                            Db.push($f(wn.slice(Ot, Ot + yF)));
                            Ot += yF
                        }
                        var YU = new rC;
                        wF = _.Jl(YU, 1, Nt);
                        var ZU = Db.shift();
                        vF = _.K(wF, 2, ZU);
                        var $U = Db.shift();
                        uF = _.K(vF, 3, $U);
                        var aV = Db.shift();
                        tF = _.K(uF, 4, aV);
                        var bV = Db.shift();
                        sF = _.K(tF, 5, bV);
                        var cV = Db.shift();
                        rF = _.K(sF, 6, cV);
                        var dV = new qC,
                            eV = Db.shift();
                        qF = _.K(dV, 1, eV);
                        var fV = Db.shift();
                        pF = _.K(qF, 2, fV);
                        var gV = Db.shift();
                        oF = _.K(pF, 3, gV);
                        var hV = Db.shift();
                        nF = _.K(oF, 4, hV);
                        var iV = Db.shift();
                        mF = _.K(nF, 5, iV);
                        var jV = Db.shift();
                        lF = _.K(mF, 6, jV);
                        var kV = Db.shift();
                        kF = _.K(lF, 7, kV);
                        var lV = Db.shift();
                        jF = _.K(kF, 8, lV);
                        iF = _.vi(rF, 7, jF);
                        var mV = new pC,
                            nV = Db.shift();
                        hF = _.K(mV, 1, nV);
                        var oV = Db.shift();
                        gF = _.K(hF, 2, oV);
                        var pV = Db.shift();
                        fF = _.K(gF, 3, pV);
                        eF = _.vi(iF, 8, fF);
                        var qV = Db.shift();
                        dF = _.K(eF, 9, qV);
                        var rV = Db.shift();
                        cF = _.K(dF, 10, rV);
                        var sV = Db.shift();
                        var zF = XU = _.K(cF, 11, sV);
                        if (1 === Tj.length) var AF = uC(zF);
                        else {
                            var tV = uC(zF),
                                BF = void 0,
                                CF = void 0,
                                DF = void 0,
                                EF = Tj[1];
                            if (0 === EF.length) throw Error("Cannot decode empty GPC segment string.");
                            var FF = bg(EF, 3),
                                xn = $f(FF.slice(0, 2));
                            if (0 > xn || 1 < xn) throw Error("Attempting to decode unknown GPC segment subsection type " + xn + ".");
                            DF = xn + 1;
                            var uV = $f(FF.charAt(2)),
                                vV = new sC;
                            CF = _.K(vV, 2, DF);
                            BF = _.Il(CF, 1, !!uV);
                            AF = _.vi(tV, 2, BF)
                        }
                        var GF = _.Km(AF, rC, 1);
                        if (1 === _.og(GF, 5, 0) || 1 === _.og(GF, 6, 0)) return !0;
                        break;
                    case 9:
                        if (0 === N.length) throw Error("Cannot decode empty USVA section string.");
                        var yn = bg(N, AC),
                            Qt = $f(yn.slice(0, 6));
                        yn = yn.slice(6);
                        if (1 !== Qt) throw Error("Unable to decode unsupported USVA Section specification version " + Qt + " - only version 1 is supported.");
                        for (var Rt = 0, Tb = [], St = 0; St < zC.length; St++) {
                            var HF = zC[St];
                            Tb.push($f(yn.slice(Rt, Rt + HF)));
                            Rt += HF
                        }
                        var wV = Qt,
                            xV = new yC,
                            yV = _.Jl(xV, 1, wV),
                            zV = Tb.shift(),
                            AV = _.K(yV, 2, zV),
                            BV = Tb.shift(),
                            CV = _.K(AV, 3, BV),
                            DV = Tb.shift(),
                            EV = _.K(CV, 4, DV),
                            FV = Tb.shift(),
                            GV = _.K(EV, 5, FV),
                            HV = Tb.shift();
                        var IV = _.K(GV, 6, HV);
                        var JV = new xC,
                            KV = Tb.shift(),
                            LV = _.K(JV, 1, KV),
                            MV = Tb.shift(),
                            NV = _.K(LV, 2, MV),
                            OV = Tb.shift(),
                            PV = _.K(NV, 3, OV),
                            QV = Tb.shift(),
                            RV = _.K(PV, 4, QV),
                            SV = Tb.shift(),
                            TV = _.K(RV, 5, SV),
                            UV = Tb.shift(),
                            VV = _.K(TV, 6, UV),
                            WV = Tb.shift(),
                            XV = _.K(VV, 7, WV),
                            YV = Tb.shift();
                        var ZV = _.K(XV, 8, YV);
                        var $V = _.vi(IV, 7, ZV),
                            aW = Tb.shift(),
                            bW = _.K($V, 8, aW),
                            cW = Tb.shift(),
                            dW = _.K(bW, 9, cW),
                            eW = Tb.shift(),
                            fW = _.K(dW, 10, eW),
                            gW = Tb.shift(),
                            IF = _.K(fW, 11, gW);
                        if (1 === _.og(IF, 5, 0) || 1 === _.og(IF, 6, 0)) return !0
                }
            }
            return !1
        },
        hH = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        fH = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        gH = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };
    var Lo = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, Lo.prototype)
    };
    _.T(Lo, Error);
    Lo.prototype.name = "PublisherInputError";
    var jH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, jH.prototype)
    };
    _.T(jH, Error);
    jH.prototype.name = "ServerError";
    var kH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, kH.prototype)
    };
    _.T(kH, Error);
    kH.prototype.name = "NetworkError";
    var uh = function() {};
    uh.prototype.g = function() {};
    uh.prototype.l = function() {};
    uh.prototype.A = function() {
        return []
    };
    uh.prototype.j = function() {
        return []
    };
    var Uh = function(a, b) {
        a.g = th(1, b, function() {});
        a.A = function(c, d) {
            return th(2, b, function() {
                return []
            })(c, 2, d)
        };
        a.j = function() {
            return th(3, b, function() {
                return []
            })(2)
        };
        a.l = function(c) {
            th(16, b, function() {})(c, 2)
        }
    };
    var Sh = function() {
            this.g = function() {}
        },
        Wh = function(a, b) {
            a.g = th(14, b, function() {})
        };
    var Qm = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.an(b.innerWidth, b.innerHeight)).round() : _.YA(b || window).round()
            } catch (d) {
                return new _.an(-12245933, -12245933)
            }
        },
        lH = function(a) {
            a = void 0 === a ? _.t : a;
            a = a.devicePixelRatio;
            return "number" === typeof a ? +a.toFixed(3) : null
        },
        mH = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        fv = function(a, b) {
            b = void 0 === b ? _.t : b;
            a = a.scrollingElement || mH(a);
            return new _.Xm(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        ln = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var nH = function(a) {
        this.D = _.A(a)
    };
    _.T(nH, _.D);
    nH.prototype.si = function() {
        return _.Ui(this, 1)
    };
    nH.prototype.ri = function() {
        return _.Ui(this, 2)
    };
    var mh = function(a) {
            return _.Q(a, 5)
        },
        oH = function(a, b) {
            li(a, 13, b)
        },
        pH = function(a, b) {
            li(a, 12, b)
        },
        qH = function(a, b) {
            return _.qe(a, 10, b, _.Vc)
        },
        rH = function(a, b) {
            return Ei(a, 11, b)
        };
    nH.prototype.ni = function() {
        return _.Ui(this, 11)
    };
    nH.da = [10];
    var tH, uH, vH;
    _.sH = function(a) {
        this.g = a;
        this.A = 0
    };
    tH = function(a, b) {
        if (0 === a.A) {
            if (_.$n(a, "__gads", b)) b = !0;
            else {
                var c = a.g;
                mh(b) && "null" !== c.origin && (new qh(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === ph("GoogleAdServingTest", b, a.g)) {
                    var d = a.g;
                    mh(b) && "null" !== d.origin && (new qh(d.document)).remove("GoogleAdServingTest", void 0, void 0)
                }
                b = c
            }
            a.A = b ? 2 : 1
        }
        return 2 === a.A
    };
    _.$n = function(a, b, c) {
        return c ? ph(b, c, a.g) : null
    };
    uH = function(a, b, c, d) {
        if (d) {
            var e = _.Rg(c, 2) - Date.now() / 1E3;
            e = {
                Eg: Math.max(e, 0),
                path: _.E(c, 3),
                domain: _.E(c, 4),
                sm: !1
            };
            c = c.getValue();
            a = a.g;
            mh(d) && "null" !== a.origin && (new qh(a.document)).set(b, c, e)
        }
    };
    vH = function(a, b, c) {
        if (c && ph(b, c, a.g)) {
            var d = a.g.location.hostname;
            if ("localhost" === d) d = ["localhost"];
            else if (d = d.split("."), 2 > d.length) d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = _.u(d);
            for (var g = d.next(); !g.done; g = d.next()) e = b, f = a.g, g = g.value, mh(c) && "null" !== f.origin && (new qh(f.document)).remove(e, "/", g)
        }
    };
    var wH = {},
        xH = (wH[3] = Cf(yx(new xx(vx, "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), wH);
    ({})[3] = Cf(yx(new xx(vx, "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var yH = function(a) {
            this.g = a;
            this.A = cy()
        },
        zH = function(a) {
            var b = {};
            _.Lx(a, function(c) {
                b[c.g] = c.A
            });
            return b
        };
    _.AH = _.Ew(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var BH = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.Bb = a;
        this.status = 1;
        this.j = b;
        this.l = c;
        this.H = d;
        this.Yd = !!e;
        this.F = Math.random();
        this.I = {};
        this.g = null;
        this.J = (0, _.hx)(this.C, this);
        this.U = f
    };
    _.T(BH, _.V);
    BH.prototype.C = function(a) {
        if (!("*" !== this.l && a.origin !== this.l || !this.Yd && a.source != this.j)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.La(b) && (a = b.i, b.c === this.Bb && a != this.F)) {
                if (2 !== this.status) try {
                    this.status = 2, CH(this), this.g && (this.g(), this.g = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.La(b)) && this.I.hasOwnProperty(a)) this.I[a](b)
            }
        }
    };
    var CH = function(a) {
        var b = {};
        b.c = a.Bb;
        b.i = a.F;
        a.U && (b.e = a.U);
        a.j.postMessage(JSON.stringify(b), a.l)
    };
    BH.prototype.o = function() {
        if (1 === this.status) {
            try {
                this.j.postMessage && CH(this)
            } catch (a) {}
            window.setTimeout((0, _.hx)(this.o, this), 50)
        }
    };
    BH.prototype.connect = function(a) {
        a && (this.g = a);
        _.Jf(window, "message", this.J);
        this.H && this.o()
    };
    var DH = function(a, b, c) {
        a.I[b] = c
    };
    BH.prototype.send = function(a, b) {
        var c = {};
        c.c = this.Bb;
        c.i = this.F;
        c.s = a;
        c.p = b;
        try {
            this.j.postMessage(JSON.stringify(c), this.l)
        } catch (d) {}
    };
    BH.prototype.A = function() {
        this.status = 3;
        _.ig(window, "message", this.J);
        _.V.prototype.A.call(this)
    };
    var Yh = new _.z.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        Zh = new _.z.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var EH = function(a) {
        this.D = _.A(a)
    };
    _.T(EH, _.D);
    var FH = of (EH);
    var GH = function(a) {
        this.D = _.A(a)
    };
    _.T(GH, _.D);
    var HH = function(a) {
        this.D = _.A(a)
    };
    _.T(HH, _.D);
    var IH, JH, KH, LH;
    _.Zr = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    IH = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    JH = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    KH = function(a, b) {
        if (3 == _.Zr(b)) return !1;
        a();
        return !0
    };
    LH = function(a, b) {
        var c = !0;
        c = void 0 === c ? !1 : c;
        if (!KH(a, b))
            if (c) {
                var d = function() {
                    _.ig(b, "prerenderingchange", d);
                    a()
                };
                _.Jf(b, "prerenderingchange", d)
            } else {
                var e = !1,
                    f = IH(b),
                    g = function() {
                        !e && KH(a, b) && (e = !0, _.ig(b, f, g))
                    };
                f && _.Jf(b, f, g)
            }
    };
    _.ai = function() {
        var a = this;
        this.promise = new _.z.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    _.MH = function() {
        this.g = Math.random()
    };
    _.qj = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .001)) try {
            if (c instanceof _.LC) var f = c;
            else f = new _.LC, _.Tn(c, function(h, k) {
                var l = f,
                    m = l.j++;
                h = _.MC(k, h);
                l.g.push(m);
                l.A[m] = h
            });
            var g = QC(f, "/pagead/gen_204?id=" + b + "&");
            g && RC(_.t, g)
        } catch (h) {}
    };
    var Ri = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        Pi = new _.z.Map;
    var NH = function(a) {
        this.D = _.A(a)
    };
    _.T(NH, _.D);
    var OH = function(a) {
        this.D = _.A(a)
    };
    _.T(OH, _.D);
    var PH = function(a, b) {
        return _.qe(a, 1, b, _.ed)
    };
    OH.da = [1];
    var QH = function(a) {
        this.D = _.A(a)
    };
    _.T(QH, _.D);
    var RH = function(a, b) {
        return _.qe(a, 1, b, Jc)
    };
    QH.da = [1, 2];
    var SH = function(a) {
        this.D = _.A(a)
    };
    _.T(SH, _.D);
    var TH = function(a) {
        this.D = _.A(a)
    };
    _.T(TH, _.D);
    var UH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, UH.prototype);
        this.name = "InputError"
    };
    _.T(UH, Error);
    var VH = function() {
            this.jb = !1
        },
        WH = function() {
            VH.apply(this, arguments);
            this.xd = new _.ai
        };
    _.T(WH, VH);
    var XH = function(a, b) {
        a.jb || (a.jb = !0, a.ie = b, a.xd.resolve(b))
    };
    _.zw.Object.defineProperties(WH.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.xd.promise
            }
        },
        Sc: {
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
                return this.he
            }
        }
    });
    var mq = function() {
        WH.apply(this, arguments)
    };
    _.T(mq, WH);
    _.q = mq.prototype;
    _.q.G = function(a) {
        XH(this, a)
    };
    _.q.Ha = function(a) {
        XH(this, null != a ? a : null)
    };
    _.q.ba = function() {
        XH(this, null)
    };
    _.q.La = function(a) {
        var b = this;
        a.then(function(c) {
            XH(b, c)
        })
    };
    _.q.lb = function(a) {
        this.jb || (this.jb = !0, this.ie = null, this.he = a, this.xd.reject(a))
    };
    var YH = function() {
        WH.apply(this, arguments)
    };
    _.T(YH, WH);
    YH.prototype.G = function(a) {
        XH(this, a)
    };
    YH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void XH(b, c)
        })
    };
    YH.prototype.lb = function(a) {
        this.jb || (this.jb = !0, this.he = a, this.xd.reject(a))
    };
    var ZH = function() {
        YH.apply(this, arguments)
    };
    _.T(ZH, YH);
    ZH.prototype.Ha = function(a) {
        XH(this, null != a ? a : null)
    };
    ZH.prototype.ba = function() {
        XH(this, null)
    };
    ZH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.Ha(c)
        })
    };
    var $H = function(a) {
        this.jb = !1;
        this.ac = a
    };
    _.T($H, VH);
    $H.prototype.Sc = function() {
        return this.ac.jb
    };
    $H.prototype.sg = function() {
        return null != this.ac.ie
    };
    _.zw.Object.defineProperties($H.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ac.he
            }
        }
    });
    var aI = function(a) {
        $H.call(this, a);
        this.ac = a
    };
    _.T(aI, $H);
    _.zw.Object.defineProperties(aI.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ac.ie
            }
        }
    });
    var bI = function(a) {
        $H.call(this, a);
        this.ac = a
    };
    _.T(bI, $H);
    _.zw.Object.defineProperties(bI.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.ac.ie) ? a : null
            }
        }
    });
    var cI = function() {
        $H.apply(this, arguments)
    };
    _.T(cI, $H);
    _.zw.Object.defineProperties(cI.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.ac.ie) ? a : null
            }
        }
    });
    var $r = function() {
        WH.apply(this, arguments)
    };
    _.T($r, WH);
    $r.prototype.notify = function() {
        XH(this, null)
    };
    var dI = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        eI = function(a, b) {
            b = void 0 === b ? !1 : b;
            WH.call(this);
            var c = this;
            a = a.map(function(d) {
                return d.promise.then(function(e) {
                    if (b || null != e) return e;
                    throw e;
                }, function(e) {
                    c.jb = !0;
                    c.he = e;
                    c.xd.reject(e);
                    return null
                })
            });
            _.x(_.z.Promise, "any").call(_.z.Promise, a).then(function(d) {
                c.jb || XH(c, d)
            }, function() {
                c.jb || XH(c, null)
            })
        };
    _.T(eI, WH);
    var fI = function() {
        _.V.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = []
    };
    _.T(fI, _.V);
    var gI = function(a, b, c) {
        a.j.push({
            Md: void 0 === c ? !1 : c,
            Wh: b
        })
    };
    fI.prototype.A = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        _.V.prototype.A.call(this)
    };
    var hI = function(a, b, c) {
        _.V.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.na = c;
        this.started = !1;
        this.F = new fI;
        _.S(this, this.F)
    };
    _.T(hI, _.V);
    hI.prototype.start = function() {
        var a = this,
            b;
        return _.Lf(function(c) {
            if (1 == c.g) {
                if (a.started) return c.return();
                a.started = !0;
                c.l = 2;
                return c.yield(Xi(a.F.j, a.timeoutMs), 4)
            }
            if (2 != c.g) {
                if (!a.M) {
                    for (var d = 0, e = _.u(a.F.l), f = e.next(); !f.done; f = e.next()) {
                        if (!f.value.sg()) throw Error("missing input: " + a.id + "/" + d);
                        ++d
                    }
                    a.g()
                }
                c.g = 0;
                c.l = 0
            } else {
                b = Nf(c);
                if (a.M) return c.return();
                b instanceof UH ? a.J(b) : b instanceof Error && (a.na ? a.na(a.id, b) : a.I(b), a.l(b));
                c.g = 0
            }
        })
    };
    var W = function(a, b) {
            b = void 0 === b ? new mq : b;
            a.F.g.push(b);
            return b
        },
        iI = function(a) {
            var b = void 0 === b ? new ZH : b;
            a.F.g.push(b);
            return b
        },
        jI = function(a, b) {
            b = void 0 === b ? new $r : b;
            a.F.g.push(b);
            return b
        },
        X = function(a, b) {
            gI(a.F, b);
            b = new aI(b);
            a.F.l.push(b);
            return b
        },
        Y = function(a, b) {
            gI(a.F, b);
            return new bI(b)
        },
        kI = function(a, b) {
            gI(a.F, b, !0);
            return new bI(b)
        },
        lI = function(a, b) {
            gI(a.F, b)
        },
        mI = function(a, b) {
            b = new eI(b);
            gI(a.F, b);
            b = new aI(b);
            a.F.l.push(b);
            return b
        };
    hI.prototype.J = function() {};
    hI.prototype.l = function(a) {
        if (!this.na && this.F.g.length) {
            a = new UH(a.message);
            for (var b = _.u(this.F.g), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.Sc) {
                    var d = a;
                    c.jb = !0;
                    c.he = d;
                    c.xd.reject(d)
                }
        }
    };
    var nI = function(a, b, c, d, e, f) {
        hI.call(this, a, e, f);
        this.f = b;
        this.C = d;
        a = {};
        c = _.u(_.x(Object, "entries").call(Object, c));
        for (b = c.next(); !b.done; b = c.next()) d = _.u(b.value), b = d.next().value, (d = d.next().value) && (a[b] = Y(this, d));
        this.o = a
    };
    _.T(nI, hI);
    nI.prototype.g = function() {
        for (var a = this.f, b = {}, c = _.u(_.x(Object, "entries").call(Object, this.o)), d = c.next(); !d.done; d = c.next()) {
            var e = _.u(d.value);
            d = e.next().value;
            e = e.next().value;
            b[d] = e.value
        }
        a = a.call(this, b, this.C);
        this.j(a)
    };
    nI.prototype.I = function() {};
    var ar = function(a, b, c, d, e, f) {
        nI.call(this, a, b, c, d, e, f);
        this.output = W(this, new mq)
    };
    _.T(ar, nI);
    ar.prototype.j = function(a) {
        this.output.La(a)
    };
    var oI = function(a, b, c, d, e, f, g) {
        nI.call(this, a, b, c, d, f, g);
        this.finished = new $r;
        a = _.x(Object, "keys").call(Object, e);
        a = _.u(a);
        for (b = a.next(); !b.done; b = a.next()) this[b.value] = W(this)
    };
    _.T(oI, nI);
    oI.prototype.j = function(a) {
        a = _.u(_.x(Object, "entries").call(Object, a));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = _.u(b.value);
            b = c.next().value;
            c = c.next().value;
            XH(this[b], c)
        }
        this.finished.notify()
    };
    var pI = function(a) {
        this.g = void 0 === a ? function() {} : a
    };
    var Dk = function(a) {
        a = void 0 === a ? new pI : a;
        _.V.call(this);
        this.C = a;
        this.F = [];
        this.I = [];
        this.H = {};
        this.l = [];
        this.j = new _.ai;
        this.g = {}
    };
    _.T(Dk, _.V);
    var J = function(a, b) {
            _.S(a, b);
            a.F.push(b);
            return b
        },
        Wk = function(a, b) {
            b = _.u(b);
            for (var c = b.next(); !c.done; c = b.next()) J(a, c.value)
        },
        qI = function(a, b, c, d, e, f) {
            b = new oI(b, c, d, e, f, void 0, a.C.g);
            return J(a, b)
        },
        uu = function(a, b) {
            a.I.push(b);
            _.S(a, b)
        },
        rI = function(a) {
            var b, c, d, e, f, g, h, k, l, m, n, p;
            return _.Lf(function(r) {
                switch (r.g) {
                    case 1:
                        if (!a.l.length) {
                            r.g = 2;
                            break
                        }
                        return r.yield(_.z.Promise.all(a.l.map(function(v) {
                            return v.j.promise
                        })), 2);
                    case 2:
                        b = _.u(a.F);
                        for (c = b.next(); !c.done; c = b.next()) d = c.value, d.start();
                        e = _.u(a.I);
                        for (f = e.next(); !f.done; f = e.next()) g = f.value, rI(g);
                        if (!a.g) {
                            r.g = 4;
                            break
                        }
                        h = _.x(Object, "keys").call(Object, a.g);
                        if (!h.length) {
                            r.g = 4;
                            break
                        }
                        return r.yield(_.z.Promise.all(_.x(Object, "values").call(Object, a.g).map(function(v) {
                            return v.promise
                        })), 6);
                    case 6:
                        for (k = r.A, l = 0, m = _.u(h), n = m.next(); !n.done; n = m.next()) p = n.value, a.H[p] = k[l++];
                    case 4:
                        return a.j.resolve(a.H), r.return(a.j.promise)
                }
            })
        };
    Dk.prototype.run = function() {
        rI(this)
    };
    Dk.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.F.length = 0;
        this.I.length = 0;
        this.l.length = 0
    };
    var sI = function(a) {
        this.D = _.A(a)
    };
    _.T(sI, _.D);
    sI.da = [1];
    var tI = [0, sz, eA];
    var uI = function(a) {
        this.D = _.A(a)
    };
    _.T(uI, _.D);
    uI.da = [1, 2];
    uI.prototype.g = nf([0, sz, eA, sz, tI]);
    _.Fq = 728 * 1.38;
    var wI, vI;
    wI = function() {
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
        this.floatingAdsStacking = new vI;
        this.sideRailProcessedFixedElements = new _.z.Set;
        this.sideRailAvailableSpace = new _.z.Map;
        this.sideRailPlasParam = new _.z.Map;
        this.A = [];
        this.g = null
    };
    _.Pj = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.z.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.z.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.z.Map)) : a.google_reactive_ads_global_state = new wI;
        return a.google_reactive_ads_global_state
    };
    vI = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var AI, CI, yI;
    _.xI = function(a) {
        this.g = _.Pj(a).floatingAdsStacking
    };
    _.zI = function(a, b) {
        return new yI(a, b)
    };
    AI = function(a) {
        a = _.lB(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    _.BI = function(a, b) {
        a.g.maxZIndexListeners.push(b);
        b(AI(a))
    };
    CI = function(a) {
        var b = AI(a);
        _.Lx(a.g.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    yI = function(a, b) {
        this.A = a;
        this.l = b;
        this.g = null
    };
    _.DI = function(a) {
        if (null == a.g) {
            var b = a.A,
                c = a.l,
                d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            CI(b);
            a.g = d
        }
    };
    _.EI = function(a) {
        if (null != a.g) {
            var b = a.A;
            delete b.g.maxZIndexRestrictions[a.g];
            CI(b);
            a.g = null
        }
    };
    var lj, FI;
    _.oj = function(a, b) {
        b = void 0 === b ? {} : b;
        this.oa = a;
        this.Fa = b
    };
    _.GI = function(a, b) {
        var c = ij(a.oa.document, b);
        if (c) {
            var d;
            if (!(d = FI(a, c, b))) a: {
                d = a.oa.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    var e = FI(a, c, b);
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
    lj = function(a, b) {
        b = _.u(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = _.GI(a, c.value)) return c;
        return null
    };
    FI = function(a, b, c) {
        if ("fixed" !== QB(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= _.Zm(_.VB, b).width && 1 >= _.Zm(_.VB, b).height || a.Fa.Ok && !a.Fa.Ok(b) ? !0 : !1;
        a.Fa.ei && a.Fa.ei(b, c, d);
        return d ? null : b
    };
    var kj = 90 * 1.38;
    var Cq;
    Cq = function(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            var b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (c) {
            return !1
        }
    };
    _.HI = function(a, b) {
        return 0 >= b || null == a || !Cq(a) ? null : vj(a, b)
    };
    var II, JI, KI;
    II = _.Ew(["* { pointer-events: none; }"]);
    JI = function(a, b) {
        var c = _.hg("STYLE", a);
        c.textContent = _.Qx(new _.Px(II[0], Ox));
        null == a || a.head.appendChild(c);
        setTimeout(function() {
            null == a || a.head.removeChild(c)
        }, b)
    };
    _.LI = function(a, b, c) {
        if (!a.body) return null;
        var d = new KI;
        d.apply(a, b);
        return function() {
            var e = c || 0;
            0 < e && JI(b.document, e);
            _.NB(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.j,
                top: d.M
            });
            b.scrollTo(0, d.A)
        }
    };
    KI = function() {
        this.g = this.M = this.j = this.l = null;
        this.A = 0
    };
    KI.prototype.apply = function(a, b) {
        this.l = a.body.style.overflow;
        this.j = a.body.style.position;
        this.M = a.body.style.top;
        this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.A = _.fj(b);
        _.NB(a.body, "top", -this.A + "px")
    };
    var ur = function(a, b) {
        this.g = a;
        this.A = void 0 === b ? 0 : b
    };
    ur.prototype.send = function(a, b) {
        var c = a.xm,
            d = this.A++;
        b = _.Jl(b, 1, d);
        c.call(a, b)
    };
    _.zw.Object.defineProperties(ur.prototype, {
        bg: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g()
            }
        }
    });
    var ck = ["auto", "inherit", "100%"],
        dk = ck.concat(["none"]);
    var MI = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var NI = function(a, b, c, d, e, f) {
            this.l = _.HB(a);
            this.A = _.HB(b);
            this.j = c;
            this.g = _.HB(d);
            this.M = e;
            this.F = f
        },
        OI = function(a) {
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
                yInView: a.F
            })
        },
        PI = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.GB(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = SB(a);
            d = _.Zm(_.VB, a);
            var e = new IB(c.x, c.y, d.width, d.height);
            c = JB(e);
            d = String(QB(a, "zIndex"));
            var f = new _.GB(0, Infinity, Infinity, 0);
            for (var g = qg(a), h = g.g.body, k = g.g.documentElement, l = ZA(g.g); a = RB(a);)
                if (!(_.jy && 0 == a.clientWidth || my && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != QB(a, "overflow")) {
                    var m = SB(a),
                        n = new _.Xm(a.clientLeft, a.clientTop);
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
            g = _.YA(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new IB(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? KB(e, f) : null;
            g = a = 0;
            l && !(new _.an(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.GB(0, 0, 0, 0);
            if (h = f)(e = KB(e, f)) ? (k = JB(f), m = JB(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.GB(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new NI(b, c, d, l, a, g)
        };
    var QI = function(a) {
        this.M = a;
        this.j = null;
        this.C = this.status = 0;
        this.A = null;
        this.Bb = "sfchannel" + a
    };
    QI.prototype.zg = function() {
        return 2 == this.C
    };
    var RI = function(a) {
        this.g = a
    };
    RI.prototype.getValue = function(a, b) {
        return null == this.g[a] || null == this.g[a][b] ? null : this.g[a][b]
    };
    var SI = function(a, b) {
        this.Qe = a;
        this.Re = b;
        this.A = this.g = !1
    };
    var TI = function(a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.g = a;
        this.A = b;
        this.l = c;
        this.permissions = d;
        this.metadata = e;
        this.j = f;
        this.Yd = g;
        this.hostpageLibraryTokens = h;
        this.U = ""
    };
    var UI = function(a, b) {
        this.A = a;
        this.U = b
    };
    UI.prototype.g = function(a) {
        this.U && a && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var VI = function(a, b, c) {
        UI.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.T(VI, UI);
    VI.prototype.g = function() {
        return UI.prototype.g.call(this, {
            uid: this.A,
            version: this.version
        })
    };
    var WI = function(a, b, c, d) {
        UI.call(this, a, void 0 === d ? "" : d);
        this.j = b;
        this.l = c
    };
    _.T(WI, UI);
    WI.prototype.g = function() {
        return UI.prototype.g.call(this, {
            uid: this.A,
            initialWidth: this.j,
            initialHeight: this.l
        })
    };
    var XI = function(a, b, c) {
        UI.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.T(XI, UI);
    XI.prototype.g = function() {
        return UI.prototype.g.call(this, {
            uid: this.A,
            description: this.description
        })
    };
    var YI = function(a, b, c, d) {
        UI.call(this, a, void 0 === d ? "" : d);
        this.l = b;
        this.push = c
    };
    _.T(YI, UI);
    YI.prototype.g = function() {
        return UI.prototype.g.call(this, {
            uid: this.A,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        })
    };
    var ZI = function(a, b) {
        UI.call(this, a, void 0 === b ? "" : b)
    };
    _.T(ZI, UI);
    ZI.prototype.g = function() {
        return UI.prototype.g.call(this, {
            uid: this.A
        })
    };
    var $I = function(a, b, c) {
        UI.call(this, a, void 0 === c ? "" : c);
        this.j = b
    };
    _.T($I, UI);
    $I.prototype.g = function() {
        var a = {
            uid: this.A,
            newGeometry: OI(this.j)
        };
        return UI.prototype.g.call(this, a)
    };
    var aJ = function(a, b, c, d, e, f) {
        $I.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.l = d;
        this.push = e
    };
    _.T(aJ, $I);
    aJ.prototype.g = function() {
        var a = {
            uid: this.A,
            success: this.success,
            newGeometry: OI(this.j),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        };
        this.U && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var bJ = function(a, b, c, d) {
        UI.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.T(bJ, UI);
    bJ.prototype.g = function() {
        return UI.prototype.g.call(this, {
            uid: this.A,
            width: this.width,
            height: this.height
        })
    };
    var cJ = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Al(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var dJ, gJ, hJ, fJ;
    dJ = function() {
        this.g = []
    };
    _.eJ = function(a) {
        return a + "px"
    };
    gJ = function(a, b, c, d, e) {
        a.g.push(new fJ(b, c, d, e))
    };
    hJ = function(a) {
        for (var b = a.g.length - 1; 0 <= b; b--) {
            var c = a.g[b];
            c.A ? (c.l.style.removeProperty(c.g), c.l.style.setProperty(c.g, String(c.j), c.M)) : c.l.style[c.g] = c.j
        }
        a.g.length = 0
    };
    fJ = function(a, b, c, d) {
        this.l = a;
        this.g = (this.A = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.j = this.A ? a.style.getPropertyValue(this.g) : a.style[this.g];
        this.M = this.A ? a.style.getPropertyPriority(this.g) : void 0;
        this.A ? (a.style.removeProperty(this.g), a.style.setProperty(this.g, String(c), d)) : a.style[this.g] = String(c)
    };
    var iJ, jJ;
    iJ = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    jJ = function() {
        var a = window,
            b = _.eg(a);
        b && iJ({
            label: "2",
            type: 9,
            value: b
        }, a)
    };
    _.kJ = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = _.eg(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (n) {
                k = 13;
                if (!c) throw n;
                c(a, n)
            } finally {
                if (f.google_measure_js_timing && h) {
                    var m = _.eg() || 0;
                    iJ(_.x(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: h,
                        duration: m - h,
                        type: k
                    }, e && g && {
                        taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                    }), f)
                }
            }
            return l
        }
    };
    var pJ = function(a) {
        QI.call(this, a.uniqueId);
        var b = this;
        this.I = a.V;
        this.o = 1 === a.size;
        this.O = new SI(a.permissions.Qe && !this.o, a.permissions.Re && !this.o);
        this.F = a.Wg;
        var c;
        this.Ma = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.xa = "file:" == c ? "*" : c + "//" + d;
        this.eb = !!a.Yd;
        this.W = a.lj ? "//" + a.lj + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ua = a.vb ? "*" : "https:" + this.W;
        this.ja = lJ(a);
        this.l = new dJ;
        mJ(this, a.Wg, a.size);
        this.j = this.ga = PI(a.Wg);
        this.K = a.rm || "1-0-40";
        var e;
        this.qa = null != (e = a.mk) ? e : "";
        nJ(this, a);
        this.Ca = _.kJ(412, function() {
            return oJ(b)
        }, a.tb);
        this.H = -1;
        this.J = 0;
        var f = _.kJ(415, function() {
            b.g && (b.g.name = "", a.Ui && a.Ui(), _.ig(b.g, "load", f))
        }, a.tb);
        _.Jf(this.g, "load", f);
        this.vg = _.kJ(413, this.vg, a.tb);
        this.bh = _.kJ(417, this.bh, a.tb);
        this.hh = _.kJ(419, this.hh, a.tb);
        this.mg = _.kJ(411, this.mg, a.tb);
        this.Wf = _.kJ(409, this.Wf, a.tb);
        this.na = _.kJ(410, this.na, a.tb);
        this.Pg = _.kJ(416, this.Pg, a.tb);
        this.A = new BH(this.Bb, this.g.contentWindow, this.ua, !1);
        DH(this.A, "init_done", (0, _.hx)(this.vg, this));
        DH(this.A, "register_done", (0, _.hx)(this.bh, this));
        DH(this.A, "report_error", (0, _.hx)(this.hh, this));
        DH(this.A, "expand_request", (0, _.hx)(this.mg, this));
        DH(this.A, "collapse_request", (0, _.hx)(this.Wf, this));
        DH(this.A, "creative_geometry_update", (0, _.hx)(this.na, this));
        this.A.connect((0, _.hx)(this.Pg, this))
    };
    _.T(pJ, QI);
    var mJ = function(a, b, c) {
            a.o ? (b.style.width = _.UB("100%", !0), b.style.height = _.UB("auto", !0)) : (b.style.width = _.UB(c.width, !0), b.style.height = _.UB(c.height, !0))
        },
        nJ = function(a, b) {
            var c = b.vb,
                d = b.content,
                e = b.Wd,
                f = b.size,
                g = void 0 === b.Xd ? "3rd party ad content" : b.Xd,
                h = b.Te;
            b = b.Of;
            var k = {
                shared: {
                    sf_ver: a.K,
                    ck_on: XG() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.K + ";" + d.length + ";" + d;
            k = new TI(a.M, a.xa, a.ga, a.O, new RI(k), a.o, a.eb, a.Ma);
            var l = {};
            l.uid = k.g;
            l.hostPeerName = k.A;
            l.initialGeometry = OI(k.l);
            var m = k.permissions;
            m = JSON.stringify({
                expandByOverlay: m.Qe,
                expandByPush: m.Re,
                readCookie: m.g,
                writeCookie: m.A
            });
            l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.g), l.reportCreativeGeometry = k.j, l.isDifferentSourceWindow = k.Yd, l.goog_safeframe_hlt = zH(k.hostpageLibraryTokens), l);
            k.U && (l.sentinel = k.U);
            k = JSON.stringify(l);
            l = f.width;
            f = f.height;
            a.o && (f = l = 0);
            m = {};
            e = (m.id = e, m.title = g, m.name = d + k, m.scrolling = "no", m.marginWidth = "0", m.marginHeight = "0", m.width = String(l), m.height = String(f), m["data-is-safeframe"] = "true", m);
            void 0 === c && (g = a.qa, f = a.W, d = a.K, (k = g) && (k = "?" + k), f = (void 0 === f ? "//tpc.googlesyndication.com" : f) + ("/safeframe/" + d + "/html/container.html" + k), (d = cJ(_.$A(_.UA(a.F)))) && (f += (g ? "&" : "?") + "n=" + d), e.src = "https:" + f);
            null !== a.ja && (e.sandbox = a.ja);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.g = c, WA(a.g, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && fb(c, e), h = _.hg("IFRAME"), WA(h, c), a.g = h);
            a.o && (a.g.style.minWidth = "100%");
            a.F.appendChild(a.g)
        };
    _.q = pJ.prototype;
    _.q.Pg = function() {
        _.Jf(window, "resize", this.Ca);
        _.Jf(window, "scroll", this.Ca)
    };
    _.q.vg = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !hk(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new VI(b.uid, b.version, b.sentinel);
            if (this.M !== c.A || this.K !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.q.bh = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !hk(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.M !== (new WI(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).A) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.q.hh = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !hk(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new XI(b.uid, b.description, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d;
            null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    _.q.mg = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.C) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !hk(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new YI(b.uid, new _.GB(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            if (!(0 <= c.l.top && 0 <= c.l.left && 0 <= c.l.bottom && 0 <= c.l.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.O.Re || !c.push && this.O.Qe) {
                var e = c.l,
                    f = c.push,
                    g = this.j = PI(this.g);
                if (e.top <= g.g.top && e.right <= g.g.right && e.bottom <= g.g.bottom && e.left <= g.g.left) {
                    if (!f)
                        for (var h = this.g.parentNode; h && h.style; h = h.parentNode) gJ(this.l, h, "overflowX", "visible", "important"), gJ(this.l, h, "overflowY", "visible", "important");
                    var k = JB(new IB(0, 0, this.j.A.getWidth(), this.j.A.getHeight()));
                    _.La(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    gJ(this.l, this.F, "position", "relative");
                    gJ(this.l, this.g, "position", "absolute");
                    if (f) {
                        var l = this.l,
                            m = this.F,
                            n = k.getWidth();
                        gJ(l, m, "width", _.eJ(n));
                        var p = this.l,
                            r = this.F,
                            v = k.getHeight();
                        gJ(p, r, "height", _.eJ(v))
                    } else gJ(this.l, this.g, "zIndex", "10000");
                    var w = this.l,
                        y = this.g,
                        B = k.getWidth();
                    gJ(w, y, "width", _.eJ(B));
                    var C = this.l,
                        G = this.g,
                        F = k.getHeight();
                    gJ(C, G, "height", _.eJ(F));
                    gJ(this.l, this.g, "left", _.eJ(k.left));
                    gJ(this.l, this.g, "top", _.eJ(k.top));
                    this.C = 2;
                    this.j = PI(this.g);
                    d = !0
                } else d = !1
            }
            a = d;
            this.A.send("expand_response", (new aJ(this.M, a, this.j, c.l, c.push)).g());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (R) {
            var M;
            null == (M = this.I) || M.error("Invalid EXPAND_REQUEST message. Reason: " + R.message)
        }
    };
    _.q.Wf = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (!this.zg()) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !hk(b.uid)) throw Error("Cannot parse JSON message");
            if (this.M !== (new ZI(b.uid, b.sentinel)).A) throw Error("Wrong source container");
            hJ(this.l);
            this.C = 0;
            this.g && (this.j = PI(this.g));
            this.A.send("collapse_response", (new $I(this.M, this.j)).g())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var oJ = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.J) {
            case 0:
                qJ(a);
                a.H = window.setTimeout((0, _.hx)(a.fa, a), 1E3);
                a.J = 1;
                break;
            case 1:
                a.J = 2;
                break;
            case 2:
                a.J = 2
        }
    };
    pJ.prototype.na = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !hk(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new bJ(b.uid, b.width, b.height, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.o) d !== this.g.height && (this.g.height = d, oJ(this));
            else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    pJ.prototype.fa = function() {
        if (1 == this.status || 2 == this.status) switch (this.J) {
            case 1:
                this.J = 0;
                break;
            case 2:
                qJ(this), this.H = window.setTimeout((0, _.hx)(this.fa, this), 1E3), this.J = 1
        }
    };
    var qJ = function(a) {
            a.j = PI(a.g);
            a.A.send("geometry_update", (new $I(a.M, a.j)).g())
        },
        lJ = function(a) {
            var b = null;
            a.nj && (b = a.nj);
            return null == b ? null : b.join(" ")
        },
        rJ = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        sJ = ["allow-top-navigation"],
        tJ = ["allow-same-origin"],
        uJ = sB([].concat(_.Ki(rJ), _.Ki(sJ)));
    sB([].concat(_.Ki(rJ), _.Ki(tJ)));
    sB([].concat(_.Ki(rJ), _.Ki(sJ), _.Ki(tJ)));
    var vJ = _.Ew(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        wJ = {
            Cl: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Ff) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Ff)) throw new RangeError("Invalid subdomain: " + a.Ff);
                return Cf("https://" + a.Ff + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            Ko: function(a) {
                return _.Df(vJ, a)
            }
        };
    var xJ = function() {};
    xJ.g = function() {
        throw Error("Must be overridden");
    };
    var lk = function() {
        this.g = 0
    };
    _.T(lk, xJ);
    lk.Kc = void 0;
    lk.g = function() {
        return lk.Kc ? lk.Kc : lk.Kc = new lk
    };
    var yJ = function() {
            this.cache = {}
        },
        vk = function() {
            zJ || (zJ = new yJ);
            return zJ
        },
        wk = function(a) {
            var b = bd(_.si(a, 3));
            if (!b) return 3;
            if (void 0 === sk(a, 2)) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    yJ.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            Xc: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            nk(6, a, null == (d = g) ? void 0 : d.message);
            return {
                Xc: null,
                success: !1
            }
        }
        if (!c) return {
            Xc: null,
            success: !0
        };
        try {
            var e = sA(c);
            this.cache[a] = e;
            return {
                Xc: e,
                success: !0
            }
        } catch (g) {
            var f;
            nk(5, a, null == (f = g) ? void 0 : f.message);
            return {
                Xc: null,
                success: !1
            }
        }
    };
    yJ.prototype.set = function(a, b) {
        var c = sk(a, 1),
            d = "_GESPSK-" + c;
        rA(a);
        try {
            b.setItem(d, ql(a))
        } catch (f) {
            var e;
            nk(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    yJ.prototype.remove = function(a, b) {
        a = sk(a, 1);
        try {
            b.removeItem("_GESPSK-" + a), delete this.cache[a]
        } catch (d) {
            var c;
            nk(8, a, null == (c = d) ? void 0 : c.message)
        }
    };
    var zJ = null;
    var AJ = function(a, b) {
        hI.call(this, a);
        this.id = a;
        this.C = b
    };
    _.T(AJ, hI);
    AJ.prototype.I = function(a) {
        this.C(this.id, a)
    };
    var Fk = function(a, b, c, d) {
        AJ.call(this, 1041, d);
        this.storage = b;
        this.o = X(this, a);
        c && (this.j = Y(this, c))
    };
    _.T(Fk, AJ);
    Fk.prototype.g = function() {
        var a = this.o.value,
            b, c, d = null != (c = this.storage) ? c : null == (b = this.j) ? void 0 : b.value;
        d && vk().set(a, d) && _.Ui(a, 2) && nk(27, sk(a, 1))
    };
    var Hk = function(a, b) {
        AJ.call(this, 1048, b);
        this.j = W(this);
        this.o = W(this);
        this.H = X(this, a)
    };
    _.T(Hk, AJ);
    Hk.prototype.g = function() {
        var a = this.H.value,
            b = function(c) {
                var d = {};
                nk(c, sk(a, 1), null, (d.tic = String(Math.round((Date.now() - bd(_.si(a, 3))) / 6E4)), d))
            };
        switch (wk(a)) {
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
                nk(9, sk(a, 1));
                this.j.G(a);
                break;
            case 4:
                b(23), this.j.G(a)
        }
    };
    var BJ = function(a, b) {
        AJ.call(this, 1094, b);
        this.j = jI(this);
        this.o = X(this, a)
    };
    _.T(BJ, AJ);
    BJ.prototype.g = function() {
        var a = this.o.value;
        if (a) {
            if (void 0 !== a)
                for (var b = _.u(_.x(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, _.x(c, "startsWith").call(c, "_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            zJ = new yJ;
            this.j.notify()
        }
    };
    var Vk = function(a, b, c) {
        AJ.call(this, 1049, c);
        this.storage = b;
        lI(this, a)
    };
    _.T(Vk, AJ);
    Vk.prototype.g = function() {
        for (var a = _.u(pk(this.storage)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = vk().get(b, this.storage).Xc;
            if (c) {
                var d = wk(c);
                if (2 === d || 3 === d) vk().remove(c, this.storage), nk(40, b)
            }
        }
    };
    var Ek = function(a, b, c) {
        AJ.call(this, 1027, c);
        this.Ie = a;
        this.storage = b;
        this.j = W(this);
        this.o = W(this)
    };
    _.T(Ek, AJ);
    Ek.prototype.g = function() {
        var a = vk().get(this.Ie, this.storage).Xc;
        a || (a = rA(qA(this.Ie)), this.o.G(a.lb(yk(100))));
        this.j.G(a)
    };
    var Ck = {
        th: !1
    };
    var Zk = function(a, b) {
        AJ.call(this, 1036, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(Zk, AJ);
    Zk.prototype.g = function() {
        var a = this.o.value;
        0 !== wk(a) && this.j.G(a)
    };
    var Lk = function(a, b, c) {
        AJ.call(this, 1046, c);
        this.output = jI(this);
        this.j = W(this);
        this.o = X(this, b);
        lI(this, a)
    };
    _.T(Lk, AJ);
    Lk.prototype.g = function() {
        this.j.G(this.o.value)
    };
    var Ik = function(a, b, c) {
        AJ.call(this, 1047, c);
        this.collectorFunction = a;
        this.j = W(this);
        this.o = W(this);
        this.H = W(this);
        this.K = X(this, b)
    };
    _.T(Ik, AJ);
    Ik.prototype.g = function() {
        var a = this,
            b = this.K.value,
            c = sk(b, 1);
        nk(18, c);
        try {
            var d = _.dg();
            this.collectorFunction().then(function(e) {
                nk(29, c, null, {
                    delta: String(_.dg() - d)
                });
                a.j.G(Ei(b, 2, e));
                a.H.Ha(e)
            }).catch(function(e) {
                nk(28, c, Bk(e));
                a.o.G(b.lb(yk(106)))
            })
        } catch (e) {
            nk(1, c, Bk(e)), this.o.G(b.lb(yk(107)))
        }
    };
    var Gk = function(a, b) {
        AJ.call(this, 1028, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(Gk, AJ);
    Gk.prototype.g = function() {
        var a = this.o.value,
            b = sk(a, 1);
        null != bd(_.si(a, 3)) || nk(35, b);
        this.j.G(a)
    };
    var Jk = function(a, b, c, d, e) {
        AJ.call(this, 1050, e);
        this.K = c;
        this.H = d;
        this.j = W(this);
        this.o = X(this, a);
        this.O = Y(this, b)
    };
    _.T(Jk, AJ);
    Jk.prototype.g = function() {
        var a = this.o.value,
            b = sk(a, 1),
            c = this.O.value;
        if (null == c) nk(41, b), a.lb(yk(111)), this.j.G(a);
        else if ("string" !== typeof c) nk(21, b), this.j.G(a.lb(yk(113)));
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.H : this.K)) {
                var d = {};
                nk(12, b, null, (d.sl = String(c.length), d));
                b = a.lb(yk(108));
                _.xk(b, 2)
            } else c.length || nk(20, b), _.xk(a, 10);
            this.j.G(a)
        }
    };
    var Kk = function(a) {
        AJ.call(this, 1046, a);
        this.output = jI(this)
    };
    _.T(Kk, AJ);
    Kk.prototype.g = function() {
        var a = this;
        ok().then(function() {
            a.output.notify()
        })
    };
    var CJ = function(a, b, c, d, e) {
        e = void 0 === e ? Ck : e;
        AJ.call(this, 1059, d);
        this.O = b;
        this.K = c;
        this.o = e;
        this.j = W(this);
        this.W = X(this, a);
        this.H = Y(this, c)
    };
    _.T(CJ, AJ);
    CJ.prototype.g = function() {
        var a = this.H.value;
        if (a) {
            var b = this.W.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            nk(42, b, null, (c.ea = String(Number(this.O)), c));
            this.j.La(Mk(b, d, a, this.K, this.C, this.o))
        }
    };
    var DJ = function(a, b) {
        AJ.call(this, 1057, b);
        this.j = a;
        this.o = W(this);
        this.H = W(this)
    };
    _.T(DJ, AJ);
    DJ.prototype.g = function() {
        if (this.j)
            if ("object" !== typeof this.j) nk(46, "UNKNOWN_COLLECTOR_ID"), EJ(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.j.id,
                    b = this.j.networkCode;
                a && b && (delete this.j.id, nk(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, nk(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), EJ(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (nk(14, a), EJ(this, a, 105)) : (_.I = Wf(GD), _.x(_.I, "includes")).call(_.I, a) ? (nk(22, a), EJ(this, a, 104)) : this.H.G(this.j)
            }
        else nk(39, "UNKNOWN_COLLECTOR_ID"), EJ(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var EJ = function(a, b, c) {
        a.o.G(qA(b).lb(yk(c)))
    };
    var Tk = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? Ck : e;
        this.g = b;
        this.l = c;
        this.aa = f;
        this.J = d;
        this.I = e;
        this.F = [];
        this.M = [];
        this.j = [];
        this.A = 0;
        a = _.u(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    Tk.prototype.push = function(a) {
        var b = this;
        this.l || this.J();
        var c = function(f, g) {
            return void FJ(b, f, g)
        };
        a = new DJ(a, c);
        var d = new Fk(a.o, void 0, this.g, c);
        c = new CJ(a.H, this.l, this.g, c, this.I);
        var e = new Dk;
        Wk(e, [a, d, c]);
        e.run();
        a = c.j.promise;
        this.F.push(a);
        d = _.u(this.M);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    Tk.prototype.addOnSignalResolveCallback = function(a) {
        this.M.push(a);
        for (var b = _.u(this.F), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    Tk.prototype.addErrorHandler = function(a) {
        this.j.push(a)
    };
    Tk.prototype.clearAllCache = function() {
        var a = this,
            b = this.aa.currentScript instanceof HTMLScriptElement ? this.aa.currentScript.src : "";
        if (1 === this.A) {
            var c = {};
            nk(49, "", null, (c.url = b, c))
        } else if (c = String(_.Qh(null != b ? b : "")), (_.I = Wf(FD), _.x(_.I, "includes")).call(_.I, c)) c = {}, nk(48, "", null, (c.url = b, c));
        else {
            var d = new Dk;
            c = new BJ(this.g, function(e, f) {
                return void FJ(a, e, f)
            });
            J(d, c);
            d.run();
            this.A = 1;
            setTimeout(function() {
                a.A = 0
            }, 1E3 * _.Uf(ED));
            d = {};
            nk(43, "", null, (d.url = b, d));
            return c.j.promise
        }
    };
    var FJ = function(a, b, c) {
            a = _.u(a.j);
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c)
        },
        Uk = function(a) {
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
    var $k = function(a, b, c) {
        AJ.call(this, 1035, c);
        this.o = b;
        this.j = W(this);
        this.H = X(this, a)
    };
    _.T($k, AJ);
    $k.prototype.g = function() {
        var a = this,
            b = this.H.value,
            c = sk(b, 1),
            d = this.o.toString(),
            e = {};
        nk(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        mb(f, this.o);
        var g = function() {
            var h = {};
            nk(31, c, null, (h.url = d, h));
            a.j.G(b.lb(yk(109)));
            _.ig(f, "error", g)
        };
        document.head.appendChild(f);
        _.Jf(f, "error", g)
    };
    var Yk = new _.z.Set;
    var bl = function(a, b) {
        try {
            var c = void 0 === _.Q(b, 6) ? !0 : _.Q(b, 6),
                d, e, f = Rf(_.og(b, 2, 0)),
                g = _.E(b, 3);
            a: switch (_.og(b, 4, 0)) {
                case 1:
                    var h = "pt";
                    break a;
                case 2:
                    h = "cr";
                    break a;
                default:
                    h = ""
            }
            var k = new Ez(f, g, h),
                l = null != (e = null == (d = _.Km(b, Bz, 5)) ? void 0 : _.E(d, 1)) ? e : "";
            k.Zd = l;
            k.g = c;
            k.B = a;
            var m = k.build();
            Qf(m)
        } catch (n) {}
    };
    var GJ = function(a) {
        this.D = _.A(a)
    };
    _.T(GJ, _.D);
    GJ.prototype.g = nf([0, mz, -3, pz]);
    var HJ = [.05, .1, .2, .5],
        IJ = [0, .5, 1],
        JJ = function(a) {
            a = Pk(a);
            if (!a) return -1;
            try {
                var b = mH(a.document);
                var c = new _.an(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.an(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        KJ = function(a, b) {
            return 0 >= a || 0 >= b ? [] : HJ.map(function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        MJ = function(a) {
            this.M = a.B;
            this.j = a.Vb;
            this.I = a.timer;
            this.l = null;
            this.g = a.tb;
            this.A = LJ(this);
            this.F = a.Hm || !1
        },
        NJ = function() {
            var a;
            return !!window.IntersectionObserver && yv(null == (a = window.performance) ? void 0 : a.now)
        };
    MJ.prototype.getSlotId = function() {
        return this.l
    };
    var PJ = function(a, b) {
            if (a.A) {
                if (null != a.l) {
                    try {
                        OJ(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.g && a.g(c)
                    }
                    a.A && a.A.unobserve(a.j)
                }
                a.l = b;
                a.A.observe(a.j)
            }
        },
        LJ = function(a) {
            if (!_.t.IntersectionObserver) return null;
            var b = a.j.offsetWidth * a.j.offsetHeight,
                c = JJ(a.M);
            b = [].concat(_.Ki(IJ), _.Ki(KJ(c, b)));
            Oa(b);
            return new _.t.IntersectionObserver(function(d) {
                try {
                    for (var e = JJ(a.M), f = _.u(d), g = f.next(); !g.done; g = f.next()) {
                        var h = g.value,
                            k = Math.round(h.boundingClientRect.width * h.boundingClientRect.height),
                            l = Math.round(h.intersectionRect.width * h.intersectionRect.height),
                            m = Math.round(h.time);
                        if (_.x(Number, "isSafeInteger").call(Number, k) && _.x(Number, "isSafeInteger").call(Number, l) && _.x(Number, "isSafeInteger").call(Number, e) && _.x(Number, "isSafeInteger").call(Number, m)) a.F && OJ(a, m, k, l, e, h.isIntersecting);
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
        OJ = function(a, b, c, d, e, f) {
            if (null == a.l) throw Error("Not Attached.");
            var g = new GJ;
            c = _.qi(g, 1, c);
            d = _.qi(c, 2, d);
            e = _.qi(d, 3, e);
            b = _.qi(e, 4, b);
            f = li(b, 5, f);
            f = ub(f.g(), 4);
            KC(a.I, "1", 10, f, void 0, a.l)
        };
    var QJ = function(a, b) {
            this.g = a;
            this.A = b
        },
        RJ = function(a) {
            if (a.g.frames.google_ads_top_frame) return !0;
            var b = uB(a.g);
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
    var ol = function(a) {
        this.D = _.A(a)
    };
    _.T(ol, _.D);
    var sl = of (ol),
        pl = [1, 3];
    var Xg = {
        ro: 0,
        no: 1,
        oo: 9,
        ko: 2,
        lo: 3,
        qo: 5,
        po: 7,
        mo: 10
    };
    var SJ = _.Ew(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        il = _.Df(SJ);
    var mp = function(a) {
            var b = void 0 === b ? mk(_.t) : b;
            this.id = a;
            this.g = .001 > Math.random();
            this.je = {
                pvsid: String(b)
            }
        },
        TJ = function(a) {
            a = Ql(a);
            var b;
            dm.set(a, (null != (b = dm.get(a)) ? b : 0) + 1)
        },
        cm = function() {
            return [].concat(_.Ki(_.x(dm, "values").call(dm))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        op = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.je[b] = c : delete a.je[b])
        },
        qp = function(a) {
            var b = 1;
            b = void 0 === b ? null : b;
            if (UJ()) b = !0;
            else {
                var c = a.g;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && RC(window, VJ(a) || "", void 0, !0)
        },
        VJ = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Tn(a.je, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        WJ = function(a) {
            var b = [].concat(_.Ki(_.x(dm, "keys").call(dm)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? op(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), op(a, "nw_id", b.join()))
        },
        np = function(a, b) {
            op(a, "vrg", b.Ze);
            WJ(a);
            op(a, "nslots", cm().toString());
            b = wh();
            b.length && op(a, "eid", b.join());
            op(a, "pub_url", document.URL)
        },
        Op = function(a, b, c) {
            c = void 0 === c ? .001 : c;
            if (void 0 === c || 0 > c || 1 < c) c = .001;
            Math.random() < c && (a = new mp(a), b(a), qp(a))
        },
        dm = new _.z.Map,
        UJ = Ti(function() {
            return !!pB()
        });
    var Tl = function() {
        JC.call(this, _.H(Ul) || _.H(UF) ? 1 : 0, _.t);
        this.A = 0;
        var a = _.H(Ul) || _.H(UF);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.T(Tl, JC);
    _.XJ = function(a) {
        this.context = a
    };
    _.XJ.prototype.Fb = function(a, b) {
        return Xl(this.context, a, b)
    };
    _.XJ.prototype.Ba = function(a, b) {
        return Rl(this.context, a, b)
    };
    _.XJ.prototype.Eb = function(a, b) {
        Vl(this.context, a, b);
        return !1
    };
    _.XJ.prototype.yd = ca(4);
    var YJ = function() {
            this.id = "goog_" + dy++
        },
        ZJ = function(a) {
            _.V.call(this);
            this.context = a;
            this.l = new _.z.Map
        };
    _.T(ZJ, _.V);
    ZJ.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.clear()
    };
    ZJ.prototype.listen = function(a, b) {
        var c = this;
        if (this.M) return function() {};
        var d = "string" === typeof a ? a : a.id,
            e, f, g = null != (f = null == (e = this.l.get(d)) ? void 0 : e.add(b)) ? f : new _.z.Set([b]);
        this.l.set(d, g);
        return function() {
            return void $J(c, a, b)
        }
    };
    var aK = function(a) {
            var b = Yu;
            var c = void 0 === c ? function() {
                return !0
            } : c;
            return new _.z.Promise(function(d) {
                var e = a.listen(b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        $J = function(a, b, c) {
            var d;
            return !(null == (d = a.l.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        },
        lt = function(a, b, c, d) {
            var e, f, g, h, k, l, m, n;
            _.Lf(function(p) {
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
                l = _.u(f);
                m = l.next();
                for (n = {}; !m.done; n = {
                        Dg: void 0
                    }, m = l.next()) n.Dg = m.value, k.push(new _.z.Promise(function(r) {
                    return function(v) {
                        return _.Lf(function(w) {
                            if (1 == w.g) return w.yield(0, 2);
                            Xl(a.context, c, function() {
                                a.l.has(e) && f.has(r.Dg) && (0, r.Dg)(h)
                            }, !0);
                            v();
                            w.g = 0
                        })
                    }
                }(n)));
                return p.yield(_.z.Promise.all(k), 0)
            })
        },
        bK = new YJ,
        cK = new YJ,
        mt = new YJ,
        dK = new YJ,
        nt = new YJ,
        eK = new YJ,
        fK = new YJ,
        kr = new YJ,
        Yu = new YJ,
        gK = new YJ;
    var hK = function() {
            this.data = void 0;
            this.status = 0;
            this.g = []
        },
        iK = function(a) {
            a.data = void 0;
            a.status = 1
        };
    var jK, nK, qK, Xu, rK, mK, lK, kK, Oq;
    jK = function() {
        this.g = new _.z.Map;
        this.F = 0;
        this.A = new _.z.Map;
        this.Lb = null;
        this.j = this.l = this.o = this.I = 0;
        this.Ue = null;
        this.J = new hK;
        this.M = new hK
    };
    nK = function(a, b) {
        a.g.get(b) || (a.g.set(b, {
            Rc: !0,
            Ug: "",
            Kd: "",
            ij: 0,
            Qg: [],
            Sg: [],
            Gc: !1,
            zo: -1
        }), _.Bp(b, function() {
            a.g.delete(b);
            kK(a, b)
        }), b.listen(cK, function(c) {
            c = c.detail;
            var d = a.g.get(b);
            d.Ug = sk(c, 33) || "";
            d.Gc = !0;
            lK(a, b, function() {
                return void(d.Ug = "")
            });
            mK(a, b, function() {
                return void(d.Gc = !1)
            })
        }))
    };
    _.Nq = function(a, b) {
        var c;
        return null == (c = a.g.get(b)) ? void 0 : c.Rc
    };
    _.oK = function(a, b) {
        if (a = a.g.get(b)) a.Rc = !1
    };
    _.pK = function(a, b) {
        if (a = a.g.get(b)) a.Rc = !0
    };
    qK = function(a, b) {
        if (!b.length) return [];
        var c = Ql(b[0].getAdUnitPath());
        b.every(function(g) {
            return Ql(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.u(a.g);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.u(e.value);
            e = f.next().value;
            (f = f.next().value.Ug) && Ql(e.getAdUnitPath()) === c && !_.x(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    Xu = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.g.get(b)) ? void 0 : c.Kd) ? d : ""
    };
    rK = function(a, b) {
        return (a = a.g.get(b)) ? a.ij - 1 : 0
    };
    mK = function(a, b, c) {
        (a = a.g.get(b)) && a.Qg.push(c)
    };
    lK = function(a, b, c) {
        (a = a.g.get(b)) && a.Sg.push(c)
    };
    kK = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Sg.slice(), a.Sg.length = 0, a = _.u(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    Oq = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Qg.slice(), a.Qg.length = 0, a = _.u(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    jK.prototype.Gc = function(a) {
        var b, c;
        return null != (c = null == (b = this.g.get(a)) ? void 0 : b.Gc) ? c : !1
    };
    var sK = function(a, b, c) {
            if (a = a.g.get(b)) a.hj = c
        },
        tK = function(a, b) {
            if (a = a.g.get(b)) {
                var c;
                null == (c = a.hj) || c.ya();
                delete a.hj
            }
        };
    var gm = new _.z.Map,
        fm = new _.z.Map;
    var im = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    im.prototype.getMessageId = function() {
        return this.messageId
    };
    im.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var uK = O(2),
        vK = O(3),
        wK = O(4),
        xK = O(5),
        yK = O(6),
        zK = O(12),
        AK = O(14),
        BK = O(16),
        Cm = O(19),
        CK = O(20),
        DK = O(23),
        EK = O(26),
        FK = O(28),
        GK = O(149),
        HK = O(30),
        IK = O(31),
        JK = O(34),
        KK = O(35),
        In = O(36),
        Et = O(38),
        LK = O(40),
        MK = O(48),
        NK = O(50),
        OK = O(60),
        PK = O(63),
        QK = O(64),
        RK = O(66),
        SK = O(68),
        TK = O(69),
        UK = O(70),
        VK = O(71),
        WK = O(78),
        XK = O(80),
        lo = O(82),
        Dm = O(84),
        YK = O(85),
        ZK = O(87),
        wm = O(88),
        $K = O(92),
        aL = O(93),
        bL = O(99),
        Fm = O(103),
        jo = O(104),
        cL = O(105),
        co = O(106),
        eo = O(107),
        ko = O(108),
        dL = O(113),
        eL = O(114),
        fL = O(115),
        gL = O(117),
        hL = O(118),
        iL = O(120),
        jL = O(119),
        Un = O(121),
        kL = O(122),
        lL = O(123),
        mL = O(126),
        nL = O(127),
        oL = O(144),
        Tr = O(129),
        Wr = O(132),
        pL = O(134),
        qL = O(135),
        rL = O(136),
        sL = O(137),
        tL = O(138),
        uL = O(139),
        vL = O(140),
        wL = O(143),
        xL = O(145),
        yL = O(147),
        zL = O(150),
        AL = O(164),
        BL = O(152),
        CL = O(153),
        DL = O(154),
        gs = O(155),
        EL = O(156),
        FL = O(157),
        GL = O(158),
        HL = O(159),
        IL = O(160),
        rv = O(161),
        Sv = O(162);
    var JL = function(a, b, c) {
        var d = this;
        this.addEventListener = L(a, 86, function(e, f) {
            if ("function" !== typeof f) return P(b, km("Service.addEventListener", [e, f])), d;
            var g = lm(e);
            if (!g) return P(b, aL(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = L(a, 904, function(e, f) {
            var g = lm(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : P(b, km("Service.removeEventListener", [e, f]))
        });
        this.getSlots = L(a, 573, function() {
            return c.g.map(function(e) {
                return e.g
            })
        });
        this.getSlotIdMap = L(a, 574, function() {
            for (var e = {}, f = _.u(c.g), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.g;
            return e
        });
        this.getName = L(a, 575, function() {
            return c.getName()
        })
    };
    var mm = function(a, b, c) {
        JL.call(this, a, b, c);
        this.setRefreshUnfilledSlots = L(a, 59, function(d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = L(a, 69, function(d) {
            c.Rc && KL(c, LL(c, d))
        });
        this.refreshAllSlots = L(a, 60, function() {
            c.Rc && KL(c)
        });
        this.setVideoSession = L(a, 61, function(d, e, f) {
            c.I = e;
            c.C = f;
            "number" === typeof d && (e = rn().g, _.xk(e, 29, _.dd(d)))
        });
        this.getDisplayAdsCorrelator = L(a, 62, function() {
            return String(bz(rn().g, 26))
        });
        this.getVideoStreamCorrelator = L(a, 63, function() {
            var d = rn().g;
            d = ys(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = L(a, 64, function(d) {
            var e = _.x(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            return !!e && ML(c, e)
        });
        this.onImplementationLoaded = L(a, 65, function() {
            c.R.info(MK("GPT CompanionAds"))
        });
        this.slotRenderEnded = L(a, 67, function(d, e, f) {
            var g = _.x(c.g, "find").call(c.g, function(h) {
                return h.g === d
            });
            return g && NL(c, g, e, f)
        })
    };
    _.T(mm, JL);
    var om = function(a, b, c) {
        JL.call(this, a, b, c);
        this.setContent = L(a, 72, function(d) {
            var e = _.x(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            b.error(oL(), e)
        })
    };
    _.T(om, JL);
    var vm = function(a) {
        this.D = _.A(a)
    };
    _.T(vm, _.D);
    var um = function(a, b) {
            return Ei(a, 1, b)
        },
        zm = function(a) {
            return Gi(a, 2, 2)
        },
        tm = function(a, b) {
            return _.qe(a, 2, b, _.ed)
        },
        Hn = function(a, b) {
            return _.se(a, 2, _.ed, b)
        };
    vm.da = [2];
    var OL = function(a) {
        this.D = _.A(a)
    };
    _.T(OL, _.D);
    OL.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.ti(this, 5, a)
    };
    OL.prototype.clearTagForChildDirectedTreatment = function() {
        return _.xk(this, 5)
    };
    OL.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.ti(this, 6, a)
    };
    var Zp = function(a) {
        this.D = _.A(a)
    };
    _.T(Zp, _.D);
    var Qo = function(a) {
        var b = new Zp;
        return li(b, 1, a)
    };
    var xu = function(a) {
        this.D = _.A(a)
    };
    _.T(xu, _.D);
    var Kt = function(a) {
        this.D = _.A(a)
    };
    _.T(Kt, _.D);
    Kt.da = [1];
    var Sn = function(a) {
        this.D = _.A(a)
    };
    _.T(Sn, _.D);
    var Pr = function(a) {
        this.D = _.A(a)
    };
    _.T(Pr, _.D);
    var Vr = function(a, b) {
            return _.ti(a, 1, b)
        },
        Sr = function(a, b) {
            return _.qe(a, 2, b, _.ed)
        };
    Pr.da = [2];
    var It = function(a) {
        this.D = _.A(a)
    };
    _.T(It, _.D);
    var Rr = function(a, b) {
        zk(a, 1, Pr, b)
    };
    It.da = [1];
    var Ht = function(a) {
        this.D = _.A(a)
    };
    _.T(Ht, _.D);
    var PL = function(a) {
        this.D = _.A(a)
    };
    _.T(PL, _.D);
    PL.prototype.getCategoryExclusions = function(a) {
        return fz(this, 3, a)
    };
    PL.prototype.Sa = function() {
        return _.qk(this, vm, 14)
    };
    PL.prototype.Ec = function() {
        return _.Km(this, Sn, 18)
    };
    var qv = function(a) {
        return _.Km(a, OL, 25)
    };
    PL.prototype.getCorrelator = function() {
        return ys(this, 26)
    };
    PL.prototype.setCorrelator = function(a) {
        return _.xk(this, 26, _.dd(a))
    };
    PL.prototype.ji = function() {
        return az(this, Ht, 33)
    };
    PL.da = [2, 3, 14];
    var cn = function() {
        this.g = new _.z.Map
    };
    var QL = {},
        Im = (QL[253] = !1, QL[246] = [], QL[150] = "", QL[221] = !1, QL[36] = /^true$/.test("false"), QL[172] = null, QL[260] = void 0, QL[251] = null, QL),
        Hm = function() {
            this.g = !1
        };
    var RL = function() {
            this.A = {};
            this.g = new PL;
            this.l = new _.z.Map;
            this.g.setCorrelator(BB());
            _.Jm(36) && li(this.g, 15, !0)
        },
        SL = function(a) {
            var b = rn(),
                c = a.getDomId();
            if (c && !b.A.hasOwnProperty(c)) {
                var d = _.Sf(cn),
                    e = ++_.Sf(Tl).A;
                d.g.set(c, e);
                _.xk(a, 20, _.Kc(e));
                b.A[c] = a
            }
        },
        TL = function(a, b) {
            return a.A[b]
        },
        rn = function() {
            return _.Sf(RL)
        };
    var UL = {},
        VL = (UL.companion_ads = "companionAds", UL.content = "content", UL.publisher_ads = "pubads", UL);
    var WL = Ti(fn);
    var zn = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = rn().g,
            h = TL(rn(), f.getDomId());
        this.set = L(a, 83, function(k, l) {
            "page_url" === k && l && (k = [tm(um(new vm, k), [String(l)])], _.Em(h, 3, k));
            return e
        });
        this.get = L(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (_.I = h.Sa(), _.x(_.I, "find")).call(_.I, function(n) {
                return sk(n, 1) === k
            })) ? void 0 : zm(l)[0]) ? m : null
        });
        this.setClickUrl = L(a, 79, function(k) {
            qm(k, h, f, b);
            return e
        });
        this.setTargeting = L(a, 81, function(k, l) {
            xm(k, l, f, h, b);
            return e
        });
        this.updateTargetingFromMap = L(a, 85, function(k) {
            ym(k, f, h, b);
            return e
        });
        this.display = L(a, 78, function() {
            var k = dn(g, rn().A);
            var l = void 0 === l ? document : l;
            var m;
            null != (m = k.T[f.getDomId()]) && li(m, 19, !0);
            m = f.getDomId();
            m = tx(m);
            var n = {
                id: m
            };
            var p = void 0 === p ? Ux : p;
            var r = _.x(Object, "assign").call(Object, {}, n);
            m = n.id;
            var v = n.style;
            n = n.data;
            r = (delete r.id, delete r.style, delete r.data, r);
            if (_.x(Object, "keys").call(Object, r).length) throw Error("Invalid attribute(s): " + _.x(Object, "keys").call(Object, r));
            m = {
                id: m,
                style: v ? v : void 0
            };
            if (n)
                for (v = _.u(_.x(n, "entries").call(n)), n = v.next(); !n.done; n = v.next()) r = _.u(n.value), n = r.next().value, r = r.next().value, jf(MI.test(n)), m[n] = r;
            if (!Xx.test("div")) throw Error("");
            if ("DIV" in Zx) throw Error("");
            v = "";
            if (m)
                for (w in m)
                    if (Object.prototype.hasOwnProperty.call(m, w)) {
                        if (!Xx.test(w)) throw Error("");
                        r = m[w];
                        if (null != r) {
                            n = w;
                            if (r instanceof xx) r = yx(r);
                            else {
                                if ("style" == n.toLowerCase()) throw Error("");
                                if (/^on/i.test(n)) throw Error("");
                                if (n.toLowerCase() in Yx)
                                    if (r instanceof _.zx) r = _.lb(r).toString();
                                    else if (r instanceof _.ua) r = _.Da(r);
                                else if ("string" === typeof r) r instanceof _.ua || (r = String(r), Ix.test(r) ? r = va(r) : (r = String(r), r = r.replace(/(%0A|%0D)/g, ""), r = r.match(Hx) ? va(r) : null)), r = (r || Kx).toString();
                                else throw Error("");
                            }
                            n = n + '="' + tx(String(r)) + '"';
                            v += " " + n
                        }
                    }
            var w = "<div" + v;
            null == p ? p = [] : Array.isArray(p) || (p = [p]);
            !0 === Nx.div ? w += ">" : (m = _.Wx(p), w += ">" + _.Tx(m).toString() + "</div>");
            w = _.jk(w);
            l.write(_.Tx(w));
            hn(f, l) && (Ft(d), nK(d.L, f), XL(d, k, f))
        });
        this.setTagForChildDirectedTreatment = L(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = qv(g) || new OL;
                l.setTagForChildDirectedTreatment(k);
                _.vi(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = L(a, 567, function(k) {
            "boolean" === typeof k ? li(h, 12, k) : P(b, km("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = L(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = qv(g) || new OL;
                l.setTagForUnderAgeOfConsent(k);
                _.vi(g, 25, l)
            }
            return e
        })
    };
    var Gr = {
        jo: 0,
        fo: 1,
        ho: 2,
        io: 3
    };
    var Cn = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5,
            GAME_MANUAL_INTERSTITIAL: 7,
            LEFT_SIDE_RAIL: 8,
            RIGHT_SIDE_RAIL: 9
        },
        En = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        Dn = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var YL = "",
        On = null;
    var uo = function(a, b, c) {
        ZJ.call(this, a);
        this.slotId = b;
        this.g = c
    };
    _.T(uo, ZJ);
    uo.prototype.getSlotId = function() {
        return this.slotId
    };
    var Zg = function(a, b, c, d) {
        ZJ.call(this, a);
        this.adUnitPath = b;
        this.Vb = d;
        this.g = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.T(Zg, ZJ);
    _.q = Zg.prototype;
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
        return this.Vb
    };
    var ZL = function(a, b) {
        a.g = b
    };
    var no = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;
    var ro = _.zz(function() {
            return void xB("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        $L = _.zz(function() {
            return void xB("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        aM = _.zz(function() {
            return void xB("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        wo = function(a, b, c, d, e) {
            JL.call(this, a, b, c);
            var f = this,
                g = rn().g,
                h = rn().A,
                k = !1;
            this.setTargeting = L(a, 1, function(l, m) {
                go({
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
                mo(l, g, c.getName(), b);
                return f
            });
            this.getTargeting = L(a, 38, function(l) {
                return ho(l, g, b)
            });
            this.getTargetingKeys = L(a, 39, function() {
                return io(g)
            });
            this.setCategoryExclusion = L(a, 3, function(l) {
                "string" !== typeof l || rm(l) ? P(b, km("PubAdsService.setCategoryExclusion", [l])) : ((_.I = Gi(g, 3, 2), _.x(_.I, "includes")).call(_.I, l) || _.se(g, 3, _.ed, l), b.info(YK(l)));
                return f
            });
            this.clearCategoryExclusions = L(a, 4, function() {
                _.xk(g, 3);
                b.info(ZK());
                return f
            });
            this.disableInitialLoad = L(a, 5, function() {
                li(g, 4, !0);
                k || (k = !0, so())
            });
            this.enableSingleRequest = L(a, 6, function() {
                if (c.enabled && !_.Q(g, 6)) return P(b, OK("PubAdsService.enableSingleRequest")), !1;
                b.info(PK("single request"));
                li(g, 6, !0);
                return !0
            });
            this.enableAsyncRendering = L(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = L(a, 8, function() {
                xB("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = L(a, 485, function(l) {
                var m = new xu;
                m = _.Ji(m, 1, 800);
                m = _.Ji(m, 2, 400);
                m = _.xk(m, 3, _.uc(3));
                if (_.La(l)) {
                    var n = l.fetchMarginPercent;
                    "number" === typeof n && (0 <= n ? _.Ji(m, 1, n) : -1 === n && _.xk(m, 1));
                    n = l.renderMarginPercent;
                    "number" === typeof n && (0 <= n ? _.Ji(m, 2, n) : -1 === n && _.xk(m, 2));
                    l = l.mobileScaling;
                    "number" === typeof l && (0 < l ? _.xk(m, 3, _.uc(l)) : -1 === l && _.xk(m, 3, _.uc(1)))
                }
                window.IntersectionObserver || !Vi(m, 1) && !Vi(m, 2) ? _.vi(g, 5, m) : P(b, zL())
            });
            this.setCentering = L(a, 9, function(l) {
                l = !!l;
                b.info(QK("centering", String(l)));
                li(g, 15, l)
            });
            this.definePassback = L(a, 10, function(l, m) {
                return (l = vo(a, b, c, l, m, d)) && l.Yi
            });
            this.refresh = L(a, 11, function() {
                var l = _.ya.apply(0, arguments),
                    m = _.u(l),
                    n = m.next().value;
                m = m.next().value;
                m = void 0 === m ? {} : m;
                n && !Array.isArray(n) || !_.La(m) || m.changeCorrelator && "boolean" !== typeof m.changeCorrelator ? P(b, km("PubAdsService.refresh", l)) : (m && !1 === m.changeCorrelator || g.setCorrelator(BB()), n = n ? qo(n, c) : _.H(AE) ? c.g.filter(function(p) {
                    var r = h[p.getDomId()];
                    return !(!hn(p) && !Tm(Ar(r)))
                }) : c.g, c.refresh(dn(g, h), n) || P(b, km("PubAdsService.refresh", l)))
            });
            this.enableVideoAds = L(a, 12, function() {
                li(g, 21, !0);
                bM(c, g)
            });
            this.setVideoContent = L(a, 13, function(l, m) {
                cM(c, l, m, g)
            });
            this.collapseEmptyDivs = L(a, 14, function(l) {
                l = void 0 === l ? !1 : l;
                l = void 0 === l ? !1 : l;
                li(g, 11, !0);
                l = !!l;
                li(g, 10, l);
                b.info(WK(String(l)));
                return !!_.Q(g, 11)
            });
            this.clear = L(a, 15, function(l) {
                if (Array.isArray(l)) return dM(c, g, h, qo(l, c));
                if (void 0 === l) return dM(c, g, h, c.g);
                P(b, km("PubAdsService.clear", [l]));
                return !1
            });
            this.setLocation = L(a, 16, function(l) {
                "string" !== typeof l ? P(b, km("PubAdsService.setLocation", [l])) : Ei(g, 8, l);
                return f
            });
            this.setCookieOptions = L(a, 17, function() {
                $L();
                return f
            });
            this.setTagForChildDirectedTreatment = L(a, 18, function(l) {
                aM();
                if (1 !== l && 0 !== l) return P(b, kL("PubadsService.setTagForChildDirectedTreatment", Vn(l), "0,1")), f;
                var m = qv(g) || new OL;
                m.setTagForChildDirectedTreatment(l);
                _.vi(g, 25, m);
                return f
            });
            this.clearTagForChildDirectedTreatment = L(a, 19, function() {
                aM();
                var l = qv(g);
                if (!l) return f;
                l.clearTagForChildDirectedTreatment();
                _.vi(g, 25, l);
                return f
            });
            this.setPublisherProvidedId = L(a, 20, function(l) {
                l = String(l);
                b.info(QK("PPID", l));
                Ei(g, 16, l);
                return f
            });
            this.set = L(a, 21, function(l, m) {
                Jn(l, m, g, c.getName(), b);
                return f
            });
            this.get = L(a, 22, function(l) {
                return Kn(l, g, b)
            });
            this.getAttributeKeys = L(a, 23, function() {
                return Ln(g)
            });
            this.display = L(a, 24, function(l, m, n, p) {
                return void c.display(l, m, d, n, p)
            });
            this.updateCorrelator = L(a, 25, function() {
                xB(po("update"));
                P(b, fL());
                g.setCorrelator(BB());
                return f
            });
            this.defineOutOfPagePassback = L(a, 35, function(l) {
                l = vo(a, b, c, l, [1, 1], d);
                if (!l) return null;
                _.ti(l.Fa, 15, 1);
                return l.Yi
            });
            this.setForceSafeFrame = L(a, 36, function(l) {
                "boolean" !== typeof l ? P(b, km("PubAdsService.setForceSafeFrame", [Vn(l)])) : li(g, 13, l);
                return f
            });
            this.setSafeFrameConfig = L(a, 37, function(l) {
                var m = Wn(b, l);
                m ? _.vi(g, 18, m) : P(b, km("PubAdsService.setSafeFrameConfig", [l]));
                return f
            });
            this.setRequestNonPersonalizedAds = L(a, 445, function(l) {
                aM();
                if (0 !== l && 1 !== l) return P(b, kL("PubAdsService.setRequestNonPersonalizedAds", Vn(l), "0,1")), f;
                var m = qv(g) || new OL;
                li(m, 8, !!l);
                _.vi(g, 25, m);
                return f
            });
            this.setTagForUnderAgeOfConsent = L(a, 447, function(l) {
                l = void 0 === l ? 2 : l;
                aM();
                if (2 !== l && 0 !== l && 1 !== l) return P(b, kL("PubadsService.setTagForUnderAgeOfConsent", Vn(l), "2,0,1")), f;
                var m = qv(g) || new OL;
                m.setTagForUnderAgeOfConsent(l);
                _.vi(g, 25, m);
                return f
            });
            this.getCorrelator = L(a, 27, function() {
                return String(bz(g, 26))
            });
            this.getTagSessionCorrelator = L(a, 631, function() {
                return mk(_.t)
            });
            this.getVideoContent = L(a, 30, function() {
                return eM(c, g)
            });
            this.getVersion = L(a, 568, function() {
                return a.Ze
            });
            this.forceExperiment = L(a, 569, function(l) {
                return void c.forceExperiment(l)
            });
            this.setCorrelator = L(a, 28, function(l) {
                xB(po("set"));
                P(b, eL());
                if (gh(window)) return f;
                if (!Ko(l)) return P(b, km("PubadsService.setCorrelator", [Vn(l)])), f;
                l = g.setCorrelator(l);
                li(l, 27, !0);
                return f
            });
            this.markAsAmp = L(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = L(a, 571, function() {
                return !!_.Q(g, 6)
            });
            this.setImaContent = L(a, 328, function(l, m) {
                _.Ui(g, 22) ? cM(c, l, m, g) : (li(g, 21, !0), bM(c, g), "string" === typeof l && Ei(g, 19, l), "string" === typeof m && Ei(g, 20, m))
            });
            this.getImaContent = L(a, 329, function() {
                return _.Ui(g, 22) ? eM(c, g) : c.enabled ? {
                    vid: _.E(g, 19) || "",
                    cmsid: _.E(g, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = L(a, 572, function() {
                return !!_.Q(g, 4)
            });
            this.setPrivacySettings = L(a, 648, function(l) {
                if (!_.La(l)) return P(b, km("PubAdsService.setPrivacySettings", [l])), f;
                var m = l.restrictDataProcessing,
                    n = l.childDirectedTreatment,
                    p = l.underAgeOfConsent,
                    r = l.limitedAds,
                    v = l.nonPersonalizedAds,
                    w = l.userOptedOutOfPersonalization,
                    y = l.trafficSource,
                    B, C = null != (B = qv(g)) ? B : new OL;
                "boolean" === typeof v ? li(C, 8, v) : void 0 !== v && P(b, Un("PubAdsService.setPrivacySettings", Vn(l), "nonPersonalizedAds", Vn(v)));
                "boolean" === typeof w ? li(C, 13, w) : void 0 !== w && P(b, Un("PubAdsService.setPrivacySettings", Vn(l), "userOptedOutOfPersonalization", Vn(w)));
                "boolean" === typeof m ? li(C, 1, m) : void 0 !== m && P(b, Un("PubAdsService.setPrivacySettings", Vn(l), "restrictDataProcessing", Vn(m)));
                if ("boolean" === typeof r) {
                    m = oo();
                    if (r && !_.Q(C, 9) && a.Vc) {
                        v = a.Qa;
                        w = v.Uc;
                        B = Fl(a);
                        var G = new hD;
                        G = _.Il(G, 1, !0);
                        G = _.Il(G, 2, m);
                        B = _.Kl(B, 11, Ll, G);
                        w.call(v, B)
                    }
                    m ? li(C, 9, r) : r && P(b, yL())
                } else void 0 !== r && P(b, Un("PubAdsService.setPrivacySettings", Vn(l), "limitedAds", Vn(r)));
                void 0 !== p && (null === p ? C.setTagForUnderAgeOfConsent(2) : !1 === p ? C.setTagForUnderAgeOfConsent(0) : !0 === p ? C.setTagForUnderAgeOfConsent(1) : P(b, Un("PubAdsService.setPrivacySettings", Vn(l), "underAgeOfConsent", Vn(p))));
                void 0 !== n && (null === n ? C.clearTagForChildDirectedTreatment() : !1 === n ? C.setTagForChildDirectedTreatment(0) : !0 === n ? C.setTagForChildDirectedTreatment(1) : P(b, Un("PubAdsService.setPrivacySettings", Vn(l), "childDirectedTreatment", Vn(n))));
                void 0 !== y && (null === y ? _.xk(C, 10) : (_.I = _.x(Object, "values").call(Object, Dn), _.x(_.I, "includes")).call(_.I, y) ? _.ti(C, 10, y) : P(b, Un("PubAdsService.setPrivacySettings", Vn(l), "trafficSource", Vn(y))));
                _.vi(g, 25, C);
                return f
            })
        };
    _.T(wo, JL);
    var fM = function(a, b) {
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
    var gM = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        hM = function(a, b) {
            a.advertiserId = b
        },
        iM = function(a, b) {
            a.campaignId = b
        },
        jM = function(a, b) {
            a.yieldGroupIds = b
        },
        kM = function(a, b) {
            a.companyIds = b
        };
    var Lm = function(a) {
        this.D = _.A(a)
    };
    _.T(Lm, _.D);
    Lm.prototype.getWidth = function() {
        return kt(this, 1)
    };
    Lm.prototype.getHeight = function() {
        return kt(this, 2)
    };
    var Eo = function() {
        var a = new Lm;
        return li(a, 3, !0)
    };
    var Om = function(a) {
        this.D = _.A(a)
    };
    _.T(Om, _.D);
    Om.da = [2];
    var lM = function(a) {
        this.D = _.A(a)
    };
    _.T(lM, _.D);
    var mM = function(a) {
        var b = new lM;
        return _.ti(b, 1, a)
    };
    var nM = function(a) {
        this.D = _.A(a)
    };
    _.T(nM, _.D);
    nM.da = [1];
    var oM = function(a) {
        this.D = _.A(a)
    };
    _.T(oM, _.D);
    var pM = function(a) {
        this.D = _.A(a)
    };
    _.T(pM, _.D);
    pM.prototype.getAdUnitPath = function() {
        return _.E(this, 1)
    };
    pM.prototype.getDomId = function() {
        return _.E(this, 2)
    };
    var qM = function(a, b) {
        Ei(a, 2, b)
    };
    pM.prototype.Sa = function() {
        return _.qk(this, vm, 3)
    };
    pM.prototype.getServices = function(a) {
        return fz(this, 4, a)
    };
    var rM = function(a, b) {
        _.Em(a, 5, b)
    };
    pM.prototype.getClickUrl = function() {
        return _.E(this, 7)
    };
    pM.prototype.setClickUrl = function(a) {
        return Ei(this, 7, a)
    };
    pM.prototype.getCategoryExclusions = function(a) {
        return fz(this, 8, a)
    };
    var sm = function(a) {
        return _.qk(a, vm, 9)
    };
    pM.prototype.Ec = function() {
        return _.Km(this, Sn, 13)
    };
    var Ar = function(a) {
        return _.og(a, 15, 0)
    };
    pM.da = [3, 4, 5, 6, 8, 9, 27];
    var sM = function(a, b) {
        this.width = a;
        this.height = b
    };
    sM.prototype.getWidth = function() {
        return this.width
    };
    sM.prototype.getHeight = function() {
        return this.height
    };
    var tM = new _.z.Set(["unhideWindow", "navBar"]);
    var To = function(a, b, c) {
        var d = this,
            e = TL(rn(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.Bp(c, function() {
            e = new pM;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        c.listen(mt, function(n) {
            var p = n.detail;
            n = p.Th;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = L(a, 40, function(n, p) {
            yo(n, p, c, e, b);
            return d
        });
        this.get = L(a, 41, function(n) {
            return zo(n, c, e, b)
        });
        this.getAttributeKeys = L(a, 42, function() {
            return Ao(e)
        });
        this.addService = L(a, 43, function(n) {
            n = gm.get(n);
            if (!n) return P(b, km("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((_.I = Gi(e, 4, 2), _.x(_.I, "includes")).call(_.I, p)) return b.info(zK(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = L(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new Lo("Size mapping must be an array");
                var r = n.map(Mo);
                _.Em(p, 6, r)
            } catch (v) {
                n = v, Vl(a, 44, n), xB("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = L(a, 45, function(n) {
            qm(n, e, c, b);
            return d
        });
        this.setCategoryExclusion = L(a, 46, function(n) {
            var p = e;
            "string" !== typeof n || rm(n) ? P(b, km("Slot.setCategoryExclusion", [n]), c) : ((_.I = Gi(p, 8, 2), _.x(_.I, "includes")).call(_.I, n) || _.se(p, 8, _.ed, n), b.info(AK(n), c));
            return d
        });
        this.clearCategoryExclusions = L(a, 47, function() {
            _.xk(e, 8);
            b.info(BK(), c);
            return d
        });
        this.getCategoryExclusions = L(a, 48, function() {
            return Gi(e, 8, 2).slice()
        });
        this.setTargeting = L(a, 49, function(n, p) {
            xm(n, p, c, e, b);
            return d
        });
        this.updateTargetingFromMap = L(a, 649, function(n) {
            ym(n, c, e, b);
            return d
        });
        this.clearTargeting = L(a, 50, function(n) {
            Gm(n, c, e, b);
            return d
        });
        this.getTargeting = L(a, 51, function(n) {
            return Am(n, c, e, b)
        });
        this.getTargetingKeys = L(a, 52, function() {
            return Bm(e)
        });
        this.setCollapseEmptyDiv = L(a, 53, function(n, p) {
            var r = e;
            p = void 0 === p ? !1 : p;
            p = void 0 === p ? !1 : p;
            "boolean" !== typeof n || "boolean" !== typeof p ? P(b, km("Slot.setCollapseEmptyDiv", [n, p]), c) : (r = li(r, 10, n), li(r, 11, n && p), p && !n && P(b, CK(c.toString()), c));
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
            "boolean" !== typeof n ? P(b, km("Slot.setForceSafeFrame", [String(n)]), c) : li(p, 12, n);
            return d
        });
        this.setSafeFrameConfig = L(a, 56, function(n) {
            var p = e,
                r = Wn(b, n);
            r ? _.vi(p, 13, r) : b.error(km("Slot.setSafeFrameConfig", [n]), c);
            return d
        });
        c.listen(cK, function(n) {
            n = n.detail;
            if (Xn(n, 8)) g = null;
            else {
                g = new gM;
                var p = !!Xn(n, 9);
                g.isBackfill = p;
                var r = cz(n, 15),
                    v = cz(n, 16);
                r.length && v.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = v[0], p || (g.creativeId = r[0], g.lineItemId = v[0], (p = cz(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                cz(n, 17).length && hM(g, cz(n, 17)[0]);
                cz(n, 18).length && iM(g, cz(n, 18)[0]);
                cz(n, 19).length && jM(g, cz(n, 19));
                cz(n, 20).length && kM(g, cz(n, 20));
                n = je(n, 45, Ud(n.D) & 34 ? ke : le, 2).map(function(w) {
                    return Id(w)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = L(a, 355, function() {
            return g
        });
        this.getName = L(a, 170, function() {
            b.error(wL());
            return c.getAdUnitPath()
        });
        var m = new fM(a, c);
        this.getSlotId = L(a, 579, function() {
            return m
        });
        this.getServices = L(a, 580, function() {
            return Gi(e, 4, 2).map(function(n) {
                var p = VL[n];
                if (p) {
                    var r, v, w;
                    n = null != (w = null == (v = (r = No())[p]) ? void 0 : v.call(r)) ? w : null
                } else n = null;
                return n
            })
        });
        this.getSizes = L(a, 581, function(n, p) {
            var r, v;
            return null != (v = null == (r = Pm(e, n, p)) ? void 0 : r.map(function(w) {
                return _.Q(w, 3) ? "fluid" : new sM(w.getWidth(), w.getHeight())
            })) ? v : null
        });
        this.getClickUrl = L(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = L(a, 583, function() {
            for (var n = {}, p = _.u(sm(e)), r = p.next(); !r.done; r = p.next()) r = r.value, _.E(r, 1) && (n[sk(r, 1)] = zm(r));
            return n
        });
        this.getOutOfPage = L(a, 584, function(n) {
            return "number" === typeof n ? Ar(e) === n : 0 !== Ar(e)
        });
        this.getCollapseEmptyDiv = L(a, 585, function() {
            var n = e;
            return null != Xn(n, 10) ? _.Q(n, 10) : null
        });
        this.getDivStartsCollapsed = L(a, 586, function() {
            var n = e;
            return null != Xn(n, 11) ? _.Q(n, 11) : null
        });
        c.listen(dK, function(n) {
            h = n.detail.yk
        });
        this.getContentUrl = L(a, 587, function() {
            return h()
        });
        this.getFirstLook = L(a, 588, function() {
            xB("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen(cK, function(n) {
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
            if (ah(n)) {
                var r = n.componentAuction,
                    v = n.adExpansion,
                    w = n.outstream;
                if (null != r) {
                    var y = {
                        componentAuction: r
                    };
                    if (_.La(y)) {
                        if (r = oe(p, 26, rd), void 0 !== y.componentAuction) {
                            y = _.u(y.componentAuction);
                            for (var B = y.next(); !B.done; B = y.next()) {
                                var C = B.value;
                                B = C.configKey;
                                C = C.auctionConfig;
                                "string" !== typeof B || rm(B) || (null === C ? r.delete(B) : C && r.set(B, JSON.stringify(C)))
                            }
                        }
                    } else P(b, km("googletag.Slot.setConfig", [y]))
                }
                if (_.x(Object, "hasOwn").call(Object, n, "interstitial"))
                    if (5 !== Ar(p)) P(b, IL("interstitial"), c);
                    else {
                        y = n.interstitial;
                        b.info(EL("interstitial", Vn(y)), c);
                        if (ah(y))
                            for (r = {}, y = _.u(_.x(Object, "entries").call(Object, y)), B = y.next(); !B.done; B = y.next()) switch (C = _.u(B.value), B = C.next().value, C = C.next().value, B) {
                                case "triggers":
                                    r.triggers = C;
                                    break;
                                default:
                                    P(b, GL("interstitial", B), c)
                            } else P(b, HL("googletag.slot.setConfig", "interstitial", Vn(y)), c), r = null;
                        B = r;
                        r = new nM;
                        y = {};
                        if (B && B.triggers)
                            if (B = B.triggers, ah(B))
                                for (y.triggers = {}, B = _.u(_.x(Object, "entries").call(Object, B)), C = B.next(); !C.done; C = B.next()) {
                                    var G = _.u(C.value);
                                    C = G.next().value;
                                    G = G.next().value;
                                    var F = C;
                                    C = G;
                                    if (tM.has(F))
                                        if (Po(C)) switch (F) {
                                            case "unhideWindow":
                                                G = mM(2);
                                                G = li(G, 2, C);
                                                zk(r, 1, lM, G);
                                                y.triggers.Oo = C;
                                                break;
                                            case "navBar":
                                                _.H(lE) ? (G = mM(3), G = li(G, 2, C), zk(r, 1, lM, G), y.triggers.Bo = C) : P(b, GL("interstitial.triggers", F), c)
                                        } else P(b, HL("interstitial.triggers", F, Vn(C)), c);
                                        else P(b, GL("interstitial.triggers", F), c)
                                } else P(b, HL("interstitial", "triggers", Vn(B)), c);
                        b.info(FL("interstitial", Vn(y)), c);
                        _.vi(p, 29, r)
                    }
                _.H(Oo) ? _.x(Object, "hasOwn").call(Object, n, "adExpansion") && Ro(p, v) : Ro(p, v);
                if (_.H(Pv) && _.x(Object, "hasOwn").call(Object, n, "outstream") && (_.xk(p, 31), null !== w))
                    if (ah(w))
                        if (0 !== Ar(p)) P(b, IL("outstream", String(Ar(p))), c);
                        else {
                            a: {
                                v = ["exposeVast"];n = new _.z.Map;w = _.u(_.x(Object, "entries").call(Object, w));
                                for (r = w.next(); !r.done; r = w.next()) y = _.u(r.value),
                                r = y.next().value,
                                y = y.next().value,
                                _.x(v, "includes").call(v, r) ? n.set(r, y) : P(b, GL("outstream", r), c);
                                if (0 === n.size) w = null;
                                else
                                    for (w = new oM, n = _.u(n), v = n.next(); !v.done; v = n.next())
                                        if (r = _.u(v.value), v = r.next().value, r = r.next().value, "exposeVast" === v) {
                                            if (!Po(r)) {
                                                P(b, HL("outstream", "exposeVast", Vn(r)), c);
                                                w = null;
                                                break a
                                            }
                                            li(w, 1, r)
                                        }
                            }
                            w && _.vi(p, 31, w)
                        }
                else P(b, HL("googletag.slot.setConfig", "outstream", Vn(w)), c)
            } else P(b, km("googletag.slot.setConfig", [n]), c)
        })
    };
    var Z = function(a, b, c) {
        hI.call(this, b, c);
        this.context = a
    };
    _.T(Z, hI);
    Z.prototype.I = function(a) {
        Vl(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var cp = function(a, b, c, d) {
        Z.call(this, a, 1226);
        this.Tf = b;
        this.startTime = _.dg();
        this.j = X(this, c);
        this.wa = null != d ? d : this.context.Qa
    };
    _.T(cp, Z);
    cp.prototype.g = function() {
        this.context.vm && this.wa.Zb.lc.li.vk.wk.Qc({
            Tc: _.dg() - this.startTime,
            Tf: this.Tf,
            ri: !!_.E(this.j.value, 2),
            si: !!_.E(this.j.value, 1),
            ni: !!_.E(this.j.value, 11)
        })
    };
    cp.prototype.l = function(a) {
        this.I(a)
    };
    var ap = function(a, b, c, d, e) {
        Z.call(this, a, 959);
        this.nb = b;
        this.output = W(this);
        this.j = X(this, b);
        lI(this, c);
        lI(this, d);
        e && lI(this, e)
    };
    _.T(ap, Z);
    ap.prototype.g = function() {
        this.output.G(this.j.value)
    };
    var $o = function(a, b, c, d, e, f) {
        Z.call(this, a, 1172);
        this.R = b;
        this.L = c;
        this.B = d;
        this.j = jI(this);
        lI(this, e);
        this.o = X(this, f)
    };
    _.T($o, Z);
    $o.prototype.g = function() {
        var a = this,
            b = new eH(this.B, {
                addListenerRemovalCallback: _.H(QD)
            });
        _.S(this, b);
        if (kG(b.caller)) {
            var c = this.L.M,
                d = c.status,
                e = function(f) {
                    if (f.internalErrorState) rH(a.o.value, f.gppString);
                    else if (sh(f.applicableSections)) pH(qH(a.o.value, f.applicableSections.filter(function(k) {
                        return _.x(Number, "isInteger").call(Number, k)
                    })), !1);
                    else {
                        var g = rH(qH(a.o.value, f.applicableSections.filter(function(k) {
                            return _.x(Number, "isInteger").call(Number, k)
                        })), f.gppString);
                        try {
                            var h = iH(f.gppString)
                        } catch (k) {
                            Vl(a.context, 1182, k), h = !1
                        }
                        pH(g, h)
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
                    iK(c);
                    c.g.push(e);
                    this.R.info(iL());
                    b.addEventListener(Rl(this.context, 1173, function(f) {
                        if ("ready" === f.pingData.signalStatus || sh(f.pingData.applicableSections)) c.data = f.pingData, c.status = 2, c.g.forEach(function(g) {
                            g(f.pingData)
                        }), c.g = []
                    }));
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Yo = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 874);
        this.R = b;
        this.L = c;
        this.B = d;
        this.o = e;
        this.j = jI(this);
        lI(this, f);
        this.C = X(this, g)
    };
    _.T(Yo, Z);
    Yo.prototype.g = function() {
        var a = this,
            b = new rG(this.B, {
                timeoutMs: -1,
                fk: !0
            });
        _.S(this, b);
        if (tG(b)) {
            var c = this.L.J,
                d = c.status,
                e = function(f) {
                    var g = a.C.value,
                        h, k;
                    if (k = !(a.o ? _.Q(a.o, 9) : _.H(TD) && oo())) k = {
                        ug: _.H(SD) && _.Jm(221) && !Vg()
                    }, k = void 0 === k ? {} : k, k = yG(f) ? !1 === f.gdprApplies ? !0 : "tcunavailable" === f.tcString ? !k.ug : (k.ug || void 0 !== f.gdprApplies || k.xo) && (k.ug || "string" === typeof f.tcString && f.tcString.length) ? wG(f, "1", 0) : !0 : !1;
                    k = li(g, 5, k);
                    var l = !zG(f, ["3", "4"], 0);
                    k = li(k, 9, l);
                    k = Ei(k, 2, f.tcString);
                    l = null != (h = f.addtlConsent) ? h : "";
                    h = Ei(k, 4, l);
                    _.ti(h, 7, f.internalErrorState);
                    null != f.gdprApplies && li(g, 3, f.gdprApplies);
                    zG(f, ["2", "7", "9", "10"], 1) || li(g, 8, !0);
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
                    iK(c);
                    c.g.push(e);
                    this.R.info(hL());
                    b.addEventListener(function(f) {
                        yG(f) ? ("tcunavailable" === f.tcString ? a.R.info(jL("failed")) : a.R.info(jL("succeeded")), c.data = f, c.status = 2, c.g.forEach(function(g) {
                            g(f)
                        }), c.g = []) : iK(c)
                    });
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Xo = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.R = b;
        this.B = c;
        this.j = jI(this);
        lI(this, d);
        this.o = X(this, e)
    };
    _.T(Xo, Z);
    Xo.prototype.g = function() {
        var a = this,
            b = new UG(this.B);
        _.S(this, b);
        if (kG(b.caller)) {
            var c = Rl(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && (Ei(a.o.value, 1, d.uspString), oH(a.o.value, Rl(a.context, 1187, function() {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    4 == f.length && (-1 == f.indexOf("-") || "---" === f.substring(1)) && "1" <= f[0] && "9" >= f[0] && ZB.hasOwnProperty(f[1]) && ZB.hasOwnProperty(f[2]) && ZB.hasOwnProperty(f[3]) ? (f = new YB, f = _.Jl(f, 1, parseInt(e[0], 10)), f = _.K(f, 2, ZB[e[1]]), f = _.K(f, 3, ZB[e[2]]), e = _.K(f, 4, ZB[e[3]])) : e = null;
                    return 2 === (null == e ? void 0 : _.og(e, 3, 0))
                })()));
                a.j.notify()
            });
            this.R.info(gL());
            VG(b, c)
        } else this.j.notify()
    };
    var Vo = function(a, b) {
        Z.call(this, a, 958);
        this.j = b;
        this.nb = W(this)
    };
    _.T(Vo, Z);
    Vo.prototype.g = function() {
        var a = new nH,
            b = this.j ? _.Q(this.j, 9) : oo(),
            c = _.H(RD) && _.Jm(221) && !Vg();
        li(a, 5, !b && !c);
        this.nb.G(a)
    };
    var Wo = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.B = b;
        this.o = d;
        this.j = X(this, c)
    };
    _.T(Wo, Z);
    Wo.prototype.g = function() {
        var a = this;
        Xl(this.context, 894, function() {
            return void Op("cmpMet", function(b) {
                np(b, a.context);
                var c = new rG(a.B);
                _.S(a, c);
                var d = new UG(a.B);
                _.S(a, d);
                op(b, "fc", Number(a.j.value));
                op(b, "tcfv1", Number(!!a.B.__cmp));
                op(b, "tcfv2", Number(tG(c)));
                op(b, "usp", Number(!!kG(d.caller)));
                op(b, "ptt", 17)
            }, a.o)
        })
    };
    var uM = function(a, b, c, d) {
        Z.call(this, a, 1103);
        this.j = b;
        this.Z = c;
        this.privacyTreatments = d;
        this.output = W(this)
    };
    _.T(uM, Z);
    uM.prototype.g = function() {
        this.output.G(!!mh(this.Z) && !_.Q(this.Z, 9) && !_.Q(this.Z, 13) && (!_.H(Zo) || !_.Q(this.Z, 12)) && (this.j ? _.Q(this.j, 9) || _.Q(this.j, 8) || _.Q(this.j, 1) || _.H(wE) && _.Q(this.j, 13) || 1 === _.og(this.j, 6, 2) || 1 === _.Dc(_.si(this.j, 5)) || _.x(this.privacyTreatments, "includes").call(this.privacyTreatments, 1) ? !1 : !0 : !0))
    };
    var gp = function(a) {
        this.R = a;
        this.A = this.g = 0
    };
    gp.prototype.push = function() {
        for (var a = _.u(_.ya.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.z.globalThis), this.g++)
            } catch (c) {
                this.A++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.R.error(HK(String(c)))
            }
        }
        this.R.info(IK(String(this.g), String(this.A)));
        return this.g
    };
    var ep = function(a, b) {
        this.push = L(a, 76, b.push.bind(b))
    };
    var vM = ["Debug", "Info", "Warning", "Error", "Fatal"],
        wM = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.g = c;
            this.timestamp = new Date
        };
    _.q = wM.prototype;
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
        return this.timestamp.toTimeString() + ": " + vM[this.level] + ": " + this.message
    };
    var xM = _.Ew(["https://console.googletagservices.com/pubconsole/loader.js"]),
        sp = _.Df(xM),
        wp, vp = !1,
        lp = !1,
        pp = !1;
    var Bt = function(a, b) {
        this.getAllEvents = L(a, 563, function() {
            return lp ? yM(b).slice() : []
        });
        this.getEventsBySlot = L(a, 565, function(c) {
            return lp ? zM(b, c).slice() : []
        });
        this.getEventsByLevel = L(a, 566, function(c) {
            return lp ? AM(b, c).slice() : []
        })
    };
    var BM = {
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
                return yp(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return yp(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return yp(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return yp(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return yp(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return yp(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return yp(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            145: function(a) {
                return yp(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
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
                return "Refresh is disabled for " + yp(a[0]) + " " + a[1] + "."
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
        CM = {
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
    var DM = function(a) {
            this.context = a;
            this.A = this.g = 0;
            this.l = window;
            this.events = [];
            this.events.length = 1E3
        },
        yM = function(a) {
            return [].concat(_.Ki(a.events.slice(a.g)), _.Ki(a.events.slice(0, a.g))).filter(function(b) {
                return !!b
            })
        },
        zM = function(a, b) {
            return yM(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        AM = function(a, b) {
            return yM(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    DM.prototype.log = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? !1 : d;
        var e, f, g = new wM(a, b, null != (f = null == (e = c) ? void 0 : e.g) ? f : null);
        this.events[this.g] = g;
        this.g = (this.g + 1) % 1E3;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs();
        e = b.getMessageId();
        var k = BM[e] || CM[e];
        e = void 0;
        if (k) {
            e = k(h);
            if (d) throw new Lo(e);
            d = this.A < _.Uf(XD) && f && _.t.console;
            if (this.l === top && d || _.x(_.t.navigator.userAgent, "includes").call(_.t.navigator.userAgent, "Lighthouse")) {
                d = "[GPT] " + e;
                var l, m, n, p;
                2 === a ? null == (m = (l = _.t.console).warn) || m.call(l, d) : null == (p = (n = _.t.console).error) || p.call(n, d);
                this.A++
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
            p = new lD;
            p = _.Bj(p, 1, this.context.pvsid);
            d = wh();
            p = _.qe(p, 2, d, Ec);
            p = _.Aj(p, 3, this.context.Ea);
            p = _.Aj(p, 4, this.context.Pa);
            p = _.Bj(p, 5, this.context.im);
            n = _.K(p, 6, n);
            m = _.Aj(n, 7, m);
            n = b.getMessageId();
            m = _.K(m, 8, n);
            b = b.getMessageArgs();
            b = _.qe(m, 9, b, _.ed);
            m = Ql(null != (w = null == (r = l) ? void 0 : r.getAdUnitPath()) ? w : "");
            r = _.Aj(b, 10, m);
            w = null == (v = l) ? void 0 : v.getAdUnitPath();
            v = _.Aj(r, 11, w);
            c.call(a, v)
        }
        return g
    };
    DM.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var P = function(a, b, c) {
        return a.log(2, b, c, !1)
    };
    DM.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var EM = function() {
            var a = {
                    ca: rn().g,
                    xj: new Date(Date.now()),
                    Vh: window.location.href
                },
                b = this;
            a = void 0 === a ? {} : a;
            var c = void 0 === a.ca ? rn().g : a.ca,
                d = void 0 === a.xj ? new Date(Date.now()) : a.xj,
                e = void 0 === a.Vh ? window.location.href : a.Vh;
            this.g = "";
            this.j = this.A = null;
            this.M = this.F = !1;
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
                l = null !== l ? _.Qh("w5uHecUBa2S:" + h + ":" + l) % k === Math.floor(d.valueOf() / 864E5) % k : void 0;
                return l
            }, a[13] = function() {
                return _.ya.apply(0, arguments).some(function(h) {
                    return _.x(b.g, "startsWith").call(b.g, h)
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
                return b.F
            }, a[68] = function() {
                return b.M
            }, a[74] = function() {
                return _.x(_.ya.apply(0, arguments), "includes").call(_.ya.apply(0, arguments), String(_.Qh(e)))
            }, a), g[4] = (f[14] = function() {
                var h = Number(b.j || void 0);
                isNaN(h) ? h = void 0 : (h = new Date(1E3 * h), h = 1E4 * h.getFullYear() + 100 * (h.getMonth() + 1) + h.getDate());
                return h
            }, f), g[5] = {}, g)
        },
        FM = function(a, b) {
            if (b && !a.A) {
                b = b.split(":");
                a.A = _.x(b, "find").call(b, function(d) {
                    return 0 === d.indexOf("ID=")
                }) || null;
                var c;
                a.j = (null == (c = _.x(b, "find").call(b, function(d) {
                    return 0 === d.indexOf("T=")
                })) ? void 0 : c.substring(2)) || null
            }
        };
    var av = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 863);
        this.o = c;
        this.Kd = Number(b);
        this.j = X(this, d);
        this.H = X(this, e);
        this.K = X(this, f);
        this.C = X(this, g)
    };
    _.T(av, Z);
    av.prototype.g = function() {
        var a = this.K.value,
            b = this.j.value,
            c = this.C.value,
            d = this.H.value,
            e = this.o;
        var f = Ap(e);
        var g = b.getBoundingClientRect();
        e = _.fl(e) ? Wm(b, e) : {
            x: 0,
            y: 0
        };
        b = e.x;
        e = e.y;
        g = new _.GB(e, b + g.right, e + g.bottom, b);
        b = new GH;
        b = _.Ji(b, 1, g.top);
        b = _.Ji(b, 3, g.bottom);
        b = _.Ji(b, 2, g.left);
        g = _.Ji(b, 4, g.right);
        b = new HH;
        b = _.xk(b, 1, _.Kc(this.Kd));
        d = li(b, 2, !d);
        d = _.vi(d, 3, g);
        c = _.Ji(d, 4, c);
        f = _.Ji(c, 5, f);
        f = {
            type: "asmres",
            payload: ql(f)
        };
        a.ports[0].postMessage(f)
    };
    var Cr = function(a, b, c, d) {
        Z.call(this, a, 1061);
        var e = this;
        this.output = W(this);
        this.output.La(new _.z.Promise(function(f) {
            var g = b.listen(c, function(h) {
                h = d(h);
                null !== h && (g(), f(h))
            });
            _.Bp(e, g)
        }))
    };
    _.T(Cr, Z);
    Cr.prototype.g = function() {};
    var jr = function(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        Z.call(this, a, 1061);
        var e = this;
        this.output = jI(this);
        dI(this.output, new _.z.Promise(function(f) {
            var g = b.listen(c, function(h) {
                d(h) && (g(), f())
            });
            _.Bp(e, g)
        }))
    };
    _.T(jr, Z);
    jr.prototype.g = function() {};
    var Wu = function(a, b, c, d) {
        Cr.call(this, a, b, kr, function(e) {
            e = e.detail;
            var f;
            return "asmreq" === (null == (f = e.data) ? void 0 : f.type) && kt(FH(e.data.payload), 1) === Number(c) ? e : null
        });
        this.o = d;
        this.j = W(this)
    };
    _.T(Wu, Cr);
    Wu.prototype.g = function() {
        this.j.G(Ap(this.o))
    };
    var GM = /(<head(\s+[^>]*)?>)/i,
        vu = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.Ra = b;
            this.Ld = c;
            this.isBackfill = d;
            this.Ib = e;
            this.output = W(this)
        };
    _.T(vu, Z);
    vu.prototype.g = function() {
        var a;
        0 !== this.Ra.kind || null == (a = this.Ld) || !_.E(a, 1) || this.Ib ? this.output.G(this.Ra) : (a = this.Ra.hb, na() || (a = a.replace(GM, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.isBackfill && (a = a.replace(GM, '$1<meta name="referrer" content="origin">')), this.output.G({
            kind: 0,
            hb: a
        }))
    };
    var HM = function(a, b, c) {
        Z.call(this, a, 1124);
        this.fe = jI(this);
        this.o = X(this, b);
        this.j = X(this, c)
    };
    _.T(HM, Z);
    HM.prototype.g = function() {
        _.NB(this.j.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.NB(this.o.value, "min-width", "100%");
        this.fe.notify()
    };
    var IM = function(a, b, c, d, e) {
        Z.call(this, a, 1125);
        this.o = X(this, b);
        this.j = X(this, c);
        lI(this, d);
        lI(this, e)
    };
    _.T(IM, Z);
    IM.prototype.g = function() {
        var a = this.o.value,
            b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.NB(this.j.value, "visibility", "visible"))
    };
    var bv = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 718);
        this.slotId = b;
        this.ub = c;
        this.Ld = d;
        this.o = e;
        this.C = f;
        this.output = W(this);
        this.j = new jr(this.context, this.slotId, Yu);
        this.H = X(this, g)
    };
    _.T(bv, Z);
    bv.prototype.g = function() {
        var a = !this.H.value;
        if (!this.Ld || "height" !== this.ub || a) this.j.ya(), this.output.G(!1);
        else {
            a = new Dk;
            _.S(this, a);
            var b = new HM(this.context, this.o, this.C);
            J(a, b);
            J(a, this.j);
            J(a, new IM(this.context, this.o, this.C, this.j.output, b.fe));
            a.run();
            this.output.G(!0)
        }
    };
    var JM = [2, 1];
    var KM = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 699);
        this.aa = b;
        this.slotId = c;
        this.j = d;
        this.Id = e;
        this.ub = f;
        this.Oa = g;
        this.Pc = jI(this);
        this.H = X(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.K = Y(this, m);
        this.O = X(this, n)
    };
    _.T(KM, Z);
    KM.prototype.g = function() {
        var a = this.H.value,
            b = this.o.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.ub) {
            var c, d = null != (c = this.K.value) ? c : 0;
            c = this.C.value;
            var e = this.O.value,
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
                        l = this.Id,
                        m = this.Oa,
                        n, p = a.parentElement ? null == (n = jn(a.parentElement, window)) ? void 0 : n.width : void 0;
                    n = c.width;
                    var r = c.height,
                        v = 0;
                    var w = 0;
                    var y = Rm(k);
                    y = _.u(y);
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
                        Ip(b, a, y);
                        b = {};
                        if ((_.I = [2, 5], _.x(_.I, "includes")).call(_.I, d) || v && n > Fp(e.width)) b.width = w, b["max-width"] = w;
                        r && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (G in b)
                                if (Object.prototype.hasOwnProperty.call(b, G)) {
                                    var G = !1;
                                    break c
                                }
                            G = !0
                        }
                        G ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.Hp(a, b), b = !0)
                    } else b = !1;
                    b: switch (w = c.width, G = f.defaultView || f.parentWindow || _.t, d) {
                        case 2:
                        case 5:
                            a = Jp(a, G, w, e, l);
                            break b;
                        case 1:
                        case 4:
                            if (e = a.parentElement)
                                if (l = bn(e)) {
                                    B = l.width;
                                    l = hn(h, G.document);
                                    n = jn(l, G);
                                    r = n.position;
                                    C = Fp(n.width) || 0;
                                    v = jn(e, G);
                                    y = "rtl" === v.direction ? "Right" : "Left";
                                    l = y.toLowerCase();
                                    G = "absolute" === r ? 0 : Fp(v["padding" + y]);
                                    v = Fp(v["border" + y + "Width"]);
                                    w = Math.max(Math.round((B - Math.max(C, w)) / 2), 0);
                                    B = {};
                                    C = 0;
                                    var F = aq(n);
                                    F && (C = F[4] * ("Right" === y ? -1 : 1), y = F[3] || 1, 1 !== (F[0] || 1) || 1 !== y) && (F[0] = 1, F[3] = 1, B.transform = "matrix(" + F.join(",") + ")");
                                    y = 0;
                                    switch (r) {
                                        case "fixed":
                                            var M, R = null != (M = Number(kn(n.getPropertyValue(l)))) ? M : 0,
                                                N;
                                            M = null != (N = e.getBoundingClientRect().left) ? N : 0;
                                            y = R - M;
                                            break;
                                        case "relative":
                                            y = null != (R = Number(kn(n.getPropertyValue(l)))) ? R : 0;
                                            break;
                                        case "absolute":
                                            B[l] = "0"
                                    }
                                    B["margin-" + l] = w - G - v - y - C + "px";
                                    _.Hp(a, B);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (_.x(JM, "includes").call(JM, d) && Lp(g, f, h, k, d, c.width, c.height, p, "gpt_slotexp", m), f = !0) : f = !1;
                    break;
                case 3:
                    d = this.context, N = this.aa, f = this.slotId, h = this.j, p = this.Id, k = this.Oa, m = a.parentElement ? null == (g = jn(a.parentElement, window)) ? void 0 : g.width : void 0, g = c.width, M = c.height, R = Fp(e.height) || 0, M >= R || "none" === e.display || "hidden" === e.visibility || !p || -12245933 === p.width || a.getBoundingClientRect().bottom <= p.height ? f = !1 : (p = {
                        height: M + "px"
                    }, Ip(b, a, p), _.Hp(a, p), Lp(d, N, f, h, 3, g, M, m, "gpt_slotred", k), f = !0)
            }!f && _.H(HD) && Lp(this.context, this.aa, this.slotId, this.j, 0, c.width, c.height, void 0, "gpt_pgbrk", this.Oa)
        }
        this.Pc.notify()
    };
    var LM = function(a, b, c, d, e, f) {
        Z.call(this, a, 1114);
        this.K = b;
        this.ia = c;
        this.j = d;
        this.H = e;
        this.C = W(this);
        this.o = W(this);
        this.O = X(this, f)
    };
    _.T(LM, Z);
    LM.prototype.g = function() {
        if (this.K) {
            var a = this.K.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0]) MM(this);
            else {
                var b = a[1];
                a = NM(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1], "ratio" === c ? c = a && this.j && this.H ? Math.floor(this.H / this.j * a) : null : (c = Number(c), c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                if (a || c) {
                    var d, e;
                    this.C.G(new _.an(null != (d = null != a ? a : this.j) ? d : 0, null != (e = null != c ? c : this.H) ? e : 0));
                    this.o.G(b)
                } else MM(this)
            }
        } else MM(this)
    };
    var NM = function(a, b) {
            b = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
            if (!b) return null;
            b = b[1];
            if ("viewport" === b) return a.ia;
            if ("parent" === b) {
                var c, d, e;
                return (b = null != (e = null == (d = bn(null == (c = a.O.value) ? void 0 : c.parentElement)) ? void 0 : d.width) ? e : null) ? Math.min(b, a.ia) : null
            }
            a = Number(b);
            return 0 <= a ? a : null
        },
        MM = function(a) {
            a.C.ba();
            a.o.G([])
        };
    var OM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.O = c;
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
        this.K = X(this, m)
    };
    _.T(OM, Z);
    OM.prototype.g = function() {
        var a = PM(this),
            b = this.W.value,
            c;
        if (c = !this.H && a && b) this.o.value.length ? (c = this.adUnitPath.split("/"), c = _.x(this.o.value, "includes").call(this.o.value, c[c.length - 1])) : c = !0;
        if (c) {
            var d = this.K.value,
                e, f;
            c = null != (f = null == (e = bn(d.parentElement)) ? void 0 : e.width) ? f : 0;
            e = b.width;
            b = b.height;
            QM(this, !0, e, b, {
                kind: 0,
                hb: '<html><body style="height:' + (b - 2 + "px;width:" + (e - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (e + "x" + b + "</p></body></html>")
            }, e <= c ? 1 : 2, d)
        } else if (a = this.fa.value, this.H) QM(this, !1, null != (d = this.j) ? d : 0, null != a ? a : 0, this.C.value);
        else {
            if (null == this.j) throw new Lo("Missing 'width'.");
            if (null == a) throw new Lo("Missing 'height'.");
            QM(this, !1, this.j, a, this.C.value)
        }
    };
    var PM = function(a) {
            a = Rm(a.O)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.an(a[0], a[1]) : null
        },
        QM = function(a, b, c, d, e, f, g) {
            f = void 0 === f ? a.Qf : f;
            a.cf.G(b);
            a.Ja.G(new _.an(c, d));
            a.Ga.G(e);
            a.Be.Ha(f);
            g && _.NB(g, "opacity", .5)
        };
    var yu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Dk.call(this);
        b = new LM(a, b, c.width, k, l, n);
        J(this, b);
        a = new OM(a, d, e, f, h, k, g, b.C, b.o, m, n);
        J(this, a);
        this.J = {
            Ga: a.Ga,
            Ja: a.Ja,
            Be: a.Be,
            cf: a.cf
        }
    };
    _.T(yu, Dk);
    var RM = function(a, b, c) {
        Z.call(this, a, 698);
        this.B = b;
        this.output = W(this);
        this.j = X(this, c)
    };
    _.T(RM, Z);
    RM.prototype.g = function() {
        this.output.Ha(jn(this.j.value, this.B))
    };
    var Fu = function(a, b, c, d, e, f, g, h, k, l, m) {
        Dk.call(this);
        var n = new RM(a, b, f);
        J(this, n);
        a = new KM(a, b.document, d, e, c, h, m, f, g, k, l, n.output);
        J(this, a);
        this.Pc = a.Pc
    };
    _.T(Fu, Dk);
    var SM = function(a, b, c, d, e) {
        Z.call(this, a, 937, _.Uf(qE));
        this.rb = b;
        this.j = W(this);
        this.o = W(this);
        this.C = W(this);
        this.vc = c;
        this.tc = d;
        this.bd = e
    };
    _.T(SM, Z);
    SM.prototype.g = function() {
        var a = {},
            b;
        if (null == (b = _.Km(this.rb, Wz, 2)) ? 0 : _.Q(b, 2)) a["*"] = {
            kf: !0
        };
        b = new _.z.Set;
        for (var c = _.u(_.qk(this.rb, Vz, 1)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.u([_.E(d, 2), _.E(d, 1)].filter(function(p) {
                    return !!p
                })), f = e.next(); !f.done; f = e.next()) a[f.value] = {
                kf: _.Q(d, 3)
            };
            d = _.u(je(d, 4, Ic, 2));
            for (e = d.next(); !e.done; e = d.next()) b.add(e.value)
        }
        this.vc.G(a);
        this.j.G([].concat(_.Ki(b)));
        var g, h;
        a = null == (g = _.Km(this.rb, Wz, 2)) ? void 0 : null == (h = _.Km(g, Qz, 1)) ? void 0 : _.qk(h, Pz, 1);
        this.o.Ha((null == a ? 0 : a.length) ? a : null);
        var k;
        this.tc.G(!(null == (k = _.Km(this.rb, Wz, 2)) || !_.Q(k, 4)));
        var l;
        this.bd.G(!(null == (l = _.Km(this.rb, Wz, 2)) || !_.Q(l, 5)));
        var m, n;
        g = null == (m = _.Km(this.rb, Wz, 2)) ? void 0 : null == (n = _.Km(m, Qz, 3)) ? void 0 : _.qk(n, Pz, 1);
        this.C.Ha((null == g ? 0 : g.length) ? g : null)
    };
    SM.prototype.J = function(a) {
        this.l(a)
    };
    SM.prototype.l = function() {
        this.vc.G({});
        this.j.G([]);
        this.o.ba();
        this.tc.G(!1);
        this.bd.G(!1);
        this.C.ba()
    };
    var TM = function(a, b, c, d) {
        Z.call(this, a, 980);
        this.ib = b;
        this.output = new $r;
        this.j = X(this, c);
        this.o = X(this, d)
    };
    _.T(TM, Z);
    TM.prototype.g = function() {
        (_.I = _.x(Object, "entries").call(Object, this.j.value), _.x(_.I, "find")).call(_.I, function(c) {
            var d = _.u(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.kf)
        }) && (this.ib.M = !0);
        Zn(25, this.context);
        for (var a = _.u(this.o.value), b = a.next(); !b.done; b = a.next()) vh(b.value);
        this.output.notify()
    };
    var UM = function(a, b, c, d) {
        Z.call(this, a, 931);
        this.j = Y(this, b);
        this.Oc = c;
        this.uc = d
    };
    _.T(UM, Z);
    UM.prototype.g = function() {
        var a = this.j.value,
            b = new _.z.Map;
        this.Oc.G(new _.z.Map);
        if (a) {
            var c;
            a = _.u(null != (c = this.j.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = _.qk(d, Oz, 1);
                c = 1 === _.og(c[0], 1, 0) ? hz(c[0]) : iz(c[0], gz);
                d = _.Rg(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.uc.G(b)
    };
    UM.prototype.l = function() {
        this.Oc.G(new _.z.Map);
        this.uc.G(new _.z.Map)
    };
    var VM = function(a, b, c) {
        Z.call(this, a, 981);
        this.o = W(this);
        this.C = Y(this, b);
        this.j = c
    };
    _.T(VM, Z);
    VM.prototype.g = function() {
        var a = new _.z.Map,
            b, c = _.u(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = _.qk(b, Oz, 1);
            d = 1 === _.og(d[0], 1, 0) ? hz(d[0]) : iz(d[0], gz);
            a.set(d, _.Rg(b, 2))
        }
        this.o.G(a);
        this.j.G(new Ni)
    };
    VM.prototype.l = function() {
        this.o.G(new _.z.Map);
        var a = this.j,
            b = a.G;
        var c = new Ni;
        c = _.ti(c, 1, 2);
        b.call(a, c)
    };
    var WM = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.j = e;
        this.requestBidsConfig = f;
        lI(this, b);
        lI(this, c)
    };
    _.T(WM, Z);
    WM.prototype.g = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.j, [this.requestBidsConfig])
    };
    var XM = function(a, b, c, d, e, f) {
        Z.call(this, a, 975);
        this.o = b;
        this.j = c;
        this.C = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new $r
    };
    _.T(XM, Z);
    XM.prototype.g = function() {
        fq(this.pbjs, this.o, this.j, this.C, this.requestBidsConfig);
        this.output.notify()
    };
    XM.prototype.l = function() {
        this.output.notify()
    };
    var YM = function(a, b, c, d, e, f) {
        Z.call(this, a, 1100);
        this.pbjs = b;
        this.o = c;
        this.j = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.output = new $r
    };
    _.T(YM, Z);
    YM.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.Uf(MD);
        if (c) this.Md(c);
        else {
            var d, e, f, g;
            a = null != (g = null != (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits) ? f : null == (e = this.pbjs) ? void 0 : e.adUnits) ? g : [];
            d = _.u(a);
            for (e = d.next(); !e.done; e = d.next())
                if (e = e.value.code) {
                    a = g = f = void 0;
                    if (null == (b = this.o)) b = void 0;
                    else {
                        c = b.get;
                        if (_.H(LD)) {
                            var h = e.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                            h = 3 !== (null == h ? void 0 : h.length) ? e : "/" + h[1] + h[2]
                        } else h = e;
                        b = c.call(b, h)
                    }
                    b = null != (f = null != (g = b) ? g : null == (a = this.o) ? void 0 : a.get(_.Qh(e))) ? f : 0;
                    this.Md(b)
                }
        }
        this.output.notify()
    };
    YM.prototype.Md = function(a) {
        var b;
        null != (b = this.j) && li(b, 2, this.C);
        if (a) {
            var c;
            null == (c = this.j) || _.ti(c, 1, 1);
            var d;
            null != (d = this.j) && _.qi(d, 3, a);
            if (!this.C) {
                this.requestBidsConfig.timeout = a;
                var e, f, g;
                b = null != (g = null == (f = (e = this.pbjs).getConfig) ? void 0 : f.call(e).s2sConfig) ? g : [];
                if (Array.isArray(b))
                    for (e = _.u(b), f = e.next(); !f.done; f = e.next()) f.value.timeout = a;
                else b.timeout = a;
                var h, k;
                null == (k = (h = this.pbjs).setConfig) || k.call(h, {
                    bidderTimeout: a
                })
            }
        }
    };
    YM.prototype.l = function() {
        this.output.notify()
    };
    var ZM = function(a, b, c, d, e, f, g, h) {
        _.V.call(this);
        this.g = a;
        this.j = b;
        this.l = c;
        this.F = d;
        this.J = e;
        this.I = f;
        this.o = g;
        this.pbjs = h
    };
    _.T(ZM, _.V);
    ZM.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new Dk;
            _.S(this, d);
            var e = new YM(this.g, this.pbjs, this.J, this.I, this.o, a),
                f = new XM(this.g, this.j, this.l, this.F, this.pbjs, a);
            J(d, e);
            J(d, f);
            J(d, new WM(this.g, f.output, e.output, c, b, a));
            d.run()
        }
    };
    var hq = function(a, b) {
        this.push = L(a, 932, function(c) {
            b.push(c)
        })
    };
    var $M = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 951);
        this.B = window;
        this.H = X(this, b);
        this.o = Y(this, d);
        this.C = X(this, e);
        this.O = X(this, f);
        this.j = Y(this, g);
        this.W = Y(this, h);
        this.K = X(this, k);
        lI(this, c);
        this.vf = null != l ? l : W(this);
        this.wf = null != m ? m : W(this)
    };
    _.T($M, Z);
    $M.prototype.g = function() {
        var a = !!No().pbjs_hooks;
        this.wf.G(a);
        this.vf.Ha(a ? null : _.dg());
        var b, c = null == (b = this.o.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.j.value) ? void 0 : d.size) || _.Uf(MD);
        d = this.H.value;
        var e, f = null != (e = No().pbjs_hooks) ? e : [];
        e = new ZM(this.context, this.o.value, this.C.value, this.O.value, this.j.value, this.W.value, this.K.value, d);
        _.S(this, e);
        f = _.u(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) No().pbjs_hooks = iq(this.context, e);
        !c && !b || a || gq(d, this.B)
    };
    var aN = function(a, b, c) {
        Z.call(this, a, 966);
        this.B = b;
        this.hc = c
    };
    _.T(aN, Z);
    aN.prototype.g = function() {
        var a = this,
            b = gi(this.B);
        if (b) this.hc.G(b);
        else if (b = Object.getOwnPropertyDescriptor(this.B, "_pbjsGlobals"), !b || b.configurable) {
            var c = null;
            Object.defineProperty(this.B, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = gi(a.B)) && a.hc.G(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    aN.prototype.l = function() {};
    var nq = function(a, b, c, d, e) {
        Z.call(this, a, 1146, _.Uf(qE));
        this.ib = b;
        this.B = d;
        this.j = e;
        this.o = kI(this, c)
    };
    _.T(nq, Z);
    nq.prototype.g = function() {
        var a = this.o.value,
            b = new Dk;
        _.S(this, b);
        var c = new aN(this.context, this.B, this.j.hc);
        J(b, c);
        if (a) {
            a = new SM(this.context, a, this.j.vc, this.j.tc, this.j.bd);
            J(b, a);
            var d = new TM(this.context, this.ib, a.vc, a.j);
            J(b, d);
            var e = new UM(this.context, a.o, this.j.Oc, this.j.uc);
            J(b, e);
            var f = new VM(this.context, a.C, this.j.Pf);
            J(b, f);
            c = new $M(this.context, c.hc, d.output, e.uc, this.j.tc, e.Oc, f.o, f.j, a.bd, this.j.vf, this.j.wf);
            J(b, c)
        } else bN(this);
        b.run()
    };
    var bN = function(a) {
        a.j.vc.G({});
        a.j.uc.G(new _.z.Map);
        a.j.tc.G(!1);
        a.j.Oc.G(new _.z.Map);
        a.j.vf.ba();
        a.j.wf.G(!1);
        a.j.Pf.G(new Ni);
        a.j.bd.G(!1)
    };
    nq.prototype.J = function(a) {
        this.l(a)
    };
    nq.prototype.l = function() {
        bN(this)
    };
    var cN = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 920);
        this.R = b;
        this.T = c;
        this.pbjs = f;
        this.o = g;
        this.j = W(this);
        this.C = [];
        this.O = X(this, d);
        this.K = Y(this, e.uc);
        this.H = X(this, e.tc);
        this.fa = X(this, e.Oc);
        this.W = Y(this, e.Pf)
    };
    _.T(cN, Z);
    cN.prototype.g = function() {
        for (var a = new _.z.Map, b = !1, c = _.u(this.O.value), d = c.next(), e = {}; !d.done; e = {
                oh: void 0
            }, d = c.next()) {
            d = d.value;
            for (var f = {}, g = _.u(sm(this.T[d.getDomId()])), h = g.next(); !h.done; h = g.next()) h = h.value, f[_.E(h, 1)] = zm(h);
            var k = h = g = void 0;
            (f = Wi(this.pbjs, {
                dd: d.getDomId(),
                adUnitCode: d.getAdUnitPath()
            }, f, null != (h = this.K.value) ? h : void 0, this.H.value, this.fa.value, null != (k = null == (g = this.W) ? void 0 : g.value) ? k : void 0)) ? (b = !0, a.set(d, f)) : (null === f && this.C.push(d), a.set(d, new Oi));
            e.oh = d.getDomId() + d.getAdUnitPath();
            Pi.has(e.oh) || _.Bp(d, function(l) {
                return function() {
                    return Pi.delete(l.oh)
                }
            }(e))
        }
        b ? (this.o.Ha(a), this.j.G(this.C)) : (this.o.ba(), this.j.ba())
    };
    cN.prototype.J = function(a) {
        this.l(a)
    };
    cN.prototype.l = function(a) {
        this.R.error(nL(a.message));
        this.o.ba();
        this.j.ba()
    };
    var dN = function(a, b, c, d) {
        Z.call(this, a, 1019);
        this.T = c;
        this.pbjs = d;
        this.j = Y(this, b)
    };
    _.T(dN, Z);
    dN.prototype.g = function() {
        eN(this)
    };
    var eN = function(a) {
        if (!(Math.random() >= _.Uf(KD))) {
            var b = (a.j.value || []).filter(function(k) {
                return sm(a.T[k.getDomId()]).some(function(l) {
                    return "hb_pb" === sk(l, 1)
                })
            });
            if (b.length) {
                var c, d, e, f, g, h = (null == (c = a.pbjs) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.Ki(new _.z.Set(null == (e = a.pbjs) ? void 0 : e.adUnits.map(function(k) {
                    return k.code
                })))) : _.x(Object, "keys").call(Object, (null == (f = a.pbjs) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                c = new mp("haux");
                op(c, "ius", b.map(function(k) {
                    return k.getAdUnitPath()
                }).join("~"));
                op(c, "dids", b.map(function(k) {
                    return k.getDomId()
                }).join("~"));
                op(c, "paucs", h.join("~"));
                np(c, a.context);
                qp(c)
            }
        }
    };
    var pq = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1153);
        this.R = b;
        this.T = c;
        this.networkCode = d;
        this.H = e;
        this.Pd = f;
        this.j = h;
        this.K = X(this, f.vc);
        this.o = new cI(f.hc);
        g && (this.C = Y(this, g))
    };
    _.T(pq, Z);
    pq.prototype.g = function() {
        var a, b = null == (a = this.o) ? void 0 : a.value;
        if (a = fN(this)) null != b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.R.error(mL()), a = !1) : a = !0 : a = !1;
        if (a) {
            a = new Dk;
            var c = new cN(this.context, this.R, this.T, this.H, this.Pd, b, this.j.nh);
            J(a, c);
            J(a, new dN(this.context, c.j, this.T, b));
            a.run()
        } else this.j.nh.ba()
    };
    var fN = function(a) {
        var b;
        if (null == (b = a.C) ? 0 : b.value) return !0;
        var c = a.K.value;
        if (!c) return !1;
        var d;
        return !(null == (d = c["*"]) || !d.kf) || a.networkCode.split(",").some(function(e) {
            var f;
            return !(null == (f = c[e]) || !f.kf)
        })
    };
    var gN = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.Ib = b;
        this.Oa = c;
        this.j = d;
        this.uf = e
    };
    _.T(gN, Z);
    gN.prototype.g = function() {
        for (var a = this, b = _.u(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
                Pe: void 0,
                Rg: void 0
            }, c = b.next()) d.Pe = c.value, d.Rg = function(e) {
            return function(f) {
                if (a.j === f.adId) {
                    var g = new mp("hbm_brt");
                    np(g, a.context);
                    op(g, "et", e.Pe);
                    op(g, "sf", a.Ib);
                    op(g, "qqid", a.Oa);
                    var h, k, l;
                    op(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                    qp(g)
                }
            }
        }(d), (0, this.uf.onEvent)(d.Pe, d.Rg), _.Bp(this, function(e) {
            return function() {
                return void Xl(a.context, a.id, function() {
                    var f, g;
                    return void(null == (g = (f = a.uf).offEvent) ? void 0 : g.call(f, e.Pe, e.Rg))
                }, !0)
            }
        }(d))
    };
    gN.prototype.l = function() {};
    var hN = function(a, b, c, d, e) {
        Z.call(this, a, 1134);
        this.o = b;
        this.Ib = c;
        this.Oa = d;
        this.j = new cI(e)
    };
    _.T(hN, Z);
    hN.prototype.g = function() {
        var a;
        if (this.o && null != (a = this.j.value) && a.onEvent) {
            a = new Dk;
            var b = new gN(this.context, this.Ib, this.Oa, this.o, this.j.value);
            J(a, b);
            a.run()
        }
    };
    var lN = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.g = new _.z.Map;
            this.A = new _.z.Map;
            this.timer = _.Sf(Tl);
            NJ() && (_.Jf(window, "DOMContentLoaded", Rl(a, 334, function() {
                for (var f = _.u(e.g), g = f.next(); !g.done; g = f.next()) {
                    var h = _.u(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    iN(e, g, h) && e.g.delete(g)
                }
            })), b.listen(eK, function(f) {
                f = f.detail;
                var g = f.T;
                return void jN(e, kN(d, f.mh), kt(g, 20))
            }), b.listen(fK, function(f) {
                f = f.detail;
                var g = f.T;
                f = kN(d, f.mh);
                g = kt(g, 20);
                var h = e.A.get(f);
                null != h ? PJ(h, g) : jN(e, f, g)
            }))
        },
        jN = function(a, b, c) {
            iN(a, b, c) ? a.g.delete(b) : (a.g.set(b, c), _.Bp(b, function() {
                return a.g.delete(b)
            }))
        },
        iN = function(a, b, c) {
            var d = hn(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new MJ({
                B: window,
                timer: a.timer,
                Vb: d,
                tb: function(e) {
                    return void Vl(a.context, 336, e)
                },
                Hm: _.H(UF)
            });
            if (!d.A) return !1;
            PJ(d, c);
            a.A.set(b, d);
            mK(a.L, b, function() {
                return void a.A.delete(b)
            });
            return !0
        };
    var mN = function(a, b, c, d, e) {
        Z.call(this, a, 1058);
        this.B = b;
        this.Z = c;
        this.output = jI(this);
        d && (this.j = Y(this, d.Yc));
        lI(this, e)
    };
    _.T(mN, Z);
    mN.prototype.g = function() {
        var a;
        Ah(this.B.isSecureContext, this.B, this.B.document) && null != (a = this.j) && a.value && !_.H(OD) && mh(this.Z) && (a = this.j.value, a({
            message: "goog:spam:client_age",
            pvsid: this.context.pvsid
        }));
        this.output.notify()
    };
    var nN = function(a, b, c) {
        Z.call(this, a, 1199);
        this.j = c;
        this.o = Y(this, b)
    };
    _.T(nN, Z);
    nN.prototype.g = function() {
        var a = this.o.value;
        a && (a = TL(this.j, a.getSlotElementId()), li(a, 30, !0))
    };
    var oN = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1109);
        this.aa = c;
        this.ca = d;
        this.j = e;
        this.C = f;
        this.H = g;
        this.o = h;
        this.output = W(this);
        this.K = Y(this, b)
    };
    _.T(oN, Z);
    oN.prototype.g = function() {
        var a = this,
            b = this.K.value;
        b && (this.o.push(function() {
            b.addService(a.j)
        }), CB(this.aa, function() {
            a.H();
            a.C(b);
            _.Q(a.ca, 4) && a.j.refresh([b])
        }))
    };
    var pN = {},
        vq = (pN[64] = pL, pN[134217728] = qL, pN[32768] = rL, pN[536870912] = sL, pN[8] = tL, pN[512] = uL, pN[1048576] = vL, pN[4194304] = xL, pN);
    var qN = function(a) {
        return "22639388115" === Ql(a.getAdUnitPath())
    };
    var rN = function(a, b, c, d, e, f) {
        Z.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.xb = d;
        this.o = e;
        this.R = f;
        this.output = W(this);
        this.j = W(this)
    };
    _.T(rN, Z);
    rN.prototype.g = function() {
        var a = Kq(this.context, this.R, this.o, {
            Zh: this.format,
            adUnitPath: this.adUnitPath,
            xb: this.xb
        });
        this.j.Ha(a);
        this.output.Ha(a ? a.g : null)
    };
    var sN = function(a, b, c, d) {
        Z.call(this, a, 1111);
        this.j = c;
        this.o = d;
        this.C = Y(this, b)
    };
    _.T(sN, Z);
    sN.prototype.g = function() {
        var a = this.C.value;
        a && (a = TL(this.j, a.getSlotElementId()), zk(a, 27, dA, this.o))
    };
    var tN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v) {
        Dk.call(this);
        this.context = a;
        this.aa = b;
        this.adUnitPath = c;
        this.format = d;
        this.xb = e;
        this.W = f;
        this.na = g;
        this.O = h;
        this.K = k;
        this.ca = l;
        this.J = m;
        this.fa = n;
        this.R = p;
        this.ga = r;
        this.o = v;
        a = J(this, new rN(this.context, this.adUnitPath, this.format, this.xb, this.fa, this.R));
        this.o && J(this, new sN(this.context, a.output, this.J, this.o));
        this.ga && J(this, new nN(this.context, a.output, this.J));
        J(this, new oN(this.context, a.output, this.aa, this.ca, this.W, this.na, this.O, this.K));
        this.g = {
            Lo: a.j
        }
    };
    _.T(tN, Dk);
    var dv = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 1198);
        this.aa = b;
        this.googletag = c;
        this.ca = d;
        this.j = e;
        this.o = f;
        this.R = g;
        this.qd = h;
        this.C = k
    };
    _.T(dv, Z);
    dv.prototype.g = function() {
        for (var a = this, b = _.u(this.C), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d.getAdUnitPath();
            d = _.og(d, 2, 0);
            c && d && (this.qd.add(Ql(c)), c = new tN(this.context, this.aa, c, d, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, this.ca, this.j, this.o, this.R, !0), c.run(), _.S(this, c))
        }
    };
    var Vt = function(a, b) {
        Z.call(this, a, 1110);
        this.B = b;
        this.output = W(this)
    };
    _.T(Vt, Z);
    Vt.prototype.g = function() {
        var a = this.B;
        a = _.H(QF) && void 0 !== a.credentialless && (_.H(RF) || a.crossOriginIsolated);
        this.output.G(a)
    };
    var uN = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.L = b;
        this.P = c;
        this.aa = d;
        this.output = jI(this);
        this.j = X(this, e);
        lI(this, f)
    };
    _.T(uN, Z);
    uN.prototype.g = function() {
        var a = this.P,
            b = a.ca;
        a = a.T;
        for (var c = _.u(this.j.value), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            d = e;
            var f = b;
            e = a[e.getDomId()];
            var g = this.L,
                h = this.aa;
            Lq(e, f) && !g.Gc(d) && Mq(d, h, e, f)
        }
        this.output.notify()
    };
    var vN = function(a, b, c) {
        Z.call(this, a, 1208);
        this.j = b;
        this.jg = c;
        this.output = new $r
    };
    _.T(vN, Z);
    vN.prototype.g = function() {
        var a, b = null == (a = this.jg) ? void 0 : _.Km(a, wA, 1);
        if (b) {
            a = this.j;
            var c = new nH;
            c = li(c, 5, !0);
            uH(a, "__eoi", b, c)
        }
        this.output.notify()
    };
    var $q = function(a, b, c, d) {
        Z.call(this, a, 896);
        this.qg = b;
        this.Fc = d;
        this.Lc = W(this);
        c && lI(this, c)
    };
    _.T($q, Z);
    $q.prototype.g = function() {
        this.Lc.G(this.qg.kd(".google.cn" === this.Fc))
    };
    var hu = function(a, b) {
        Z.call(this, a, 1018);
        this.fd = jI(this);
        this.j = Y(this, b)
    };
    _.T(hu, Z);
    hu.prototype.g = function() {
        var a, b, c;
        if (null == (a = this.j.value)) a = void 0;
        else {
            var d;
            null == (b = _.Km(a, hG, 5)) ? d = void 0 : d = je(b, 1, Ic, 2);
            a = d
        }
        a = _.u(null != (c = a) ? c : []);
        for (c = a.next(); !c.done; c = a.next()) vh(c.value);
        this.fd.notify()
    };
    var iu = function(a, b) {
        Z.call(this, a, 1070);
        this.j = W(this);
        this.o = Y(this, b)
    };
    _.T(iu, Z);
    iu.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : _.Km(a, hG, 5);
        if (b) {
            a = [];
            for (var c = _.u(je(b, 2, Ge, 1, void 0, void 0, 4096)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new dA;
                var f = new bA;
                e = _.xk(f, 1, Wc(e));
                d = _.vi(d, 2, e);
                null != Vi(b, 3) && (e = new $z, e = _.ti(e, 1, 1), f = _.dz(b, 3), e = _.qi(e, 2, f), _.vi(d, 3, e));
                a.push(d)
            }
            this.j.G(a)
        } else this.j.G([])
    };
    var wN = function(a, b, c, d) {
        Z.call(this, a, 1016);
        this.output = W(this);
        this.o = Y(this, b);
        this.j = Y(this, c);
        this.C = mI(this, [b, d])
    };
    _.T(wN, Z);
    wN.prototype.g = function() {
        if (this.j.value) {
            var a = this.o.value || this.C.value;
            a && xN(this, a) ? this.output.G(a) : this.output.ba()
        } else this.output.ba()
    };
    wN.prototype.J = function(a) {
        this.l(a)
    };
    wN.prototype.l = function() {
        this.output.ba()
    };
    var xN = function(a, b) {
        return _.qk(a.j.value, Yz, 1).some(function(c) {
            return _.E(c, 1) === b
        })
    };
    var yN = function(a, b) {
        Z.call(this, a, 1015);
        this.j = W(this);
        this.o = Y(this, b)
    };
    _.T(yN, Z);
    yN.prototype.g = function() {
        if (this.o.value)
            if (_.qk(this.o.value, Yz, 1).length) {
                var a = _.qk(this.o.value, Yz, 1)[0];
                (_.I = [2, 3], _.x(_.I, "includes")).call(_.I, _.og(a, 3, 0)) ? this.j.G(_.E(a, 1)) : this.j.ba()
            } else this.j.ba();
        else this.j.ba()
    };
    yN.prototype.J = function(a) {
        this.l(a)
    };
    yN.prototype.l = function() {
        this.j.ba()
    };
    var zN = function(a, b, c) {
        Z.call(this, a, 1017);
        this.B = c;
        this.output = jI(this);
        this.j = Y(this, b)
    };
    _.T(zN, Z);
    zN.prototype.g = function() {
        var a = this;
        if (this.j.value) {
            var b = BG(this.B, this.j.value, function(c) {
                if (!c) {
                    c = qg(b.g);
                    for (var d = _.u(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.Sj(e.value)
                }
                a.output.notify()
            });
            b.start(_.H(ZD))
        } else this.output.notify()
    };
    zN.prototype.J = function(a) {
        this.l(a)
    };
    zN.prototype.l = function() {
        this.output.notify()
    };
    var AN = function(a, b) {
        Z.call(this, a, 1056);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(AN, Z);
    AN.prototype.g = function() {
        var a = Ql(this.j.value.getAdUnitPath());
        this.output.G(a)
    };
    AN.prototype.J = function(a) {
        this.l(a)
    };
    AN.prototype.l = function() {
        this.output.ba()
    };
    var gu = function(a, b, c, d) {
        Z.call(this, a, 906, _.Uf(rE));
        this.j = jI(this);
        if (b === b.top) {
            var e = new Dk;
            _.S(this, e);
            var f = new yN(a, c);
            J(e, f);
            d = new Cr(a, d, eK, function(g) {
                return g.detail.T
            });
            J(e, d);
            d = new AN(a, d.output);
            J(e, d);
            a = new wN(a, f.j, c, d.output);
            J(e, a);
            b = new zN(this.context, a.output, b);
            J(e, b);
            gI(this.F, b.output, !0);
            e.run()
        } else this.j.notify()
    };
    _.T(gu, Z);
    gu.prototype.g = function() {
        this.j.notify()
    };
    gu.prototype.J = function(a) {
        this.l(a)
    };
    gu.prototype.l = function() {
        this.j.notify()
    };
    var Nu = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.B = b;
        this.slotId = c;
        lI(this, d);
        this.j = X(this, e)
    };
    _.T(Nu, Z);
    Nu.prototype.g = function() {
        var a = this;
        this.slotId.listen(kr, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.j.value,
                        g = new wA;
                    var h = Ei(g, 1, d ? "1" : "0");
                    var k = Ei(_.qi(h, 2, 2147483647), 3, "/");
                    var l = Ei(k, 4, a.B.location.hostname);
                    var m = new _.sH(a.B);
                    uH(m, "__gpi_opt_out", l, f);
                    if (d || e) vH(m, "__gads", f), vH(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var BN = function(a, b, c) {
        Z.call(this, a, 944);
        this.B = b;
        this.j = new _.sH(this.B);
        this.o = X(this, c)
    };
    _.T(BN, Z);
    BN.prototype.g = function() {
        var a = this.o.value;
        if (tH(this.j, a)) {
            var b = _.$n(this.j, "__gpi_opt_out", a);
            if (b) {
                var c = new wA;
                b = Ei(c, 1, b);
                b = Ei(_.qi(b, 2, 2147483647), 3, "/");
                b = Ei(b, 4, this.B.location.hostname);
                uH(this.j, "__gpi_opt_out", b, a)
            }
        }
    };
    var CN = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.Z = b;
        this.Da = c;
        this.j = X(this, d)
    };
    _.T(CN, Z);
    CN.prototype.g = function() {
        if (mh(this.Z)) {
            var a = new _.z.Set;
            var b = _.qk(this.j.value, wA, 14);
            b = _.u(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = jz(c, 5)) ? d : 1;
                a.has(e) || (uH(this.Da, 2 === e ? "__gpi" : "__gads", c, this.Z), a.add(e))
            }
        }
    };
    var DN = function() {
            this.A = [];
            this.hostpageLibraryTokens = [];
            this.g = {}
        },
        Gt = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.g[b]) ? void 0 : _.x(c, "values").call(c)) ? d : [];
            return [].concat(_.Ki(a))
        };
    var EN = function(a, b, c, d) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.ab = c;
        this.j = X(this, d)
    };
    _.T(EN, Z);
    EN.prototype.g = function() {
        var a = je(this.j.value, 23, _.Dc, 2);
        a = _.u(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = this.ab;
            if (!_.x(c.A, "includes").call(c.A, b) && (_.I = [1, 2, 3], _.x(_.I, "includes")).call(_.I, b)) {
                var d = xH[b];
                if (d) {
                    var e = b + "_hostpage_library";
                    if (d = _.rp(document, d)) d.id = e
                }
                c.A.push(b);
                e = new yH(b);
                c.hostpageLibraryTokens.push(e);
                c = No();
                c.hostpageLibraryTokens || (c.hostpageLibraryTokens = {});
                c.hostpageLibraryTokens[e.g] = e.A
            }
            c = void 0;
            e = this.ab;
            d = this.slotId;
            e.g[b] = null != (c = e.g[b]) ? c : new _.z.Set;
            e.g[b].add(d)
        }
    };
    var cr = 0;
    var cv = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.B = b;
        this.bf = c;
        this.o = X(this, d);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(cv, Z);
    cv.prototype.g = function() {
        var a = this,
            b, c, d = null == (b = this.bf) ? void 0 : null == (c = _.E(b, 1)) ? void 0 : c.toUpperCase(),
            e, f;
        b = null == (e = this.bf) ? void 0 : null == (f = _.E(e, 2)) ? void 0 : f.toUpperCase();
        if (d && b) {
            e = this.o.value;
            f = this.j.value;
            var g = this.C.value,
                h = g.style.height,
                k = g.style.width,
                l = g.style.display,
                m = g.style.position,
                n = er(e.id + "_top", d),
                p = er(e.id + "_bottom", b);
            _.Hp(p, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            g.appendChild(n);
            g.appendChild(p);
            _.Hp(f, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.Hp(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var r;
            _.Hp(g, {
                position: "relative",
                display: (null == (r = this.B.screen.orientation) ? 0 : r.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            Cp(this, 722, this.B, "orientationchange", function() {
                var v;
                (null == (v = a.B.screen.orientation) ? 0 : v.angle) ? _.Hp(g, {
                    display: "none"
                }): _.Hp(g, {
                    display: "block"
                })
            });
            _.Bp(this, function() {
                _.cB(n);
                _.cB(p);
                g.style.position = m;
                g.style.height = h;
                g.style.width = k;
                g.style.display = l
            })
        }
    };
    var FN = _.Ew(["https://td.doubleclick.net/td/kb?kbli=", ""]),
        Ku = function(a, b, c, d, e) {
            Z.call(this, a, 1007);
            this.Ag = b;
            this.j = X(this, d);
            c && (this.o = X(this, c));
            e && lI(this, e)
        };
    _.T(Ku, Z);
    Ku.prototype.g = function() {
        if (mh(this.j.value)) {
            var a;
            if (null == (a = this.o) || !a.value) {
                var b = this.Ag;
                if (b.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
                    a = document.createElement("iframe");
                    b = za(FN, encodeURIComponent(b.join()));
                    a.removeAttribute("srcdoc");
                    if (b instanceof _.zx) throw new by("TrustedResourceUrl", 3);
                    var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
                    a.setAttribute("sandbox", "");
                    for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
                    b = _.Ea(b);
                    void 0 !== b && (a.src = b);
                    a.id = "koelBirdIGRegisterIframe";
                    document.head.appendChild(a)
                }
            }
        }
    };
    var wu = function(a, b, c, d) {
        Z.call(this, a, 1176);
        this.o = b;
        this.T = c;
        this.R = d;
        this.j = W(this)
    };
    _.T(wu, Z);
    wu.prototype.g = function() {
        var a, b = null != (a = this.o) ? a : new xu;
        (a = null != Vi(b, 2) ? null != gr(b) && 0 !== (0, _.dq)() ? Vi(b, 2) * gr(b) : Vi(b, 2) : null) && _.H(nE) && (_.I = [8, 9], _.x(_.I, "includes")).call(_.I, Ar(this.T)) ? (P(this.R, AL()), this.j.ba()) : this.j.Ha(a)
    };
    var Eu = function(a, b, c, d, e, f) {
        f = void 0 === f ? fr : f;
        Z.call(this, a, 666);
        this.o = f;
        this.output = jI(this);
        lI(this, b);
        e && lI(this, e);
        this.j = X(this, c);
        this.C = Y(this, d)
    };
    _.T(Eu, Z);
    Eu.prototype.g = function() {
        var a = this.C.value,
            b = this.j.value;
        null == a || 0 > a || !ln(b) ? this.output.notify() : GN(this, a, b)
    };
    var GN = function(a, b, c) {
        var d = a.o(b, Rl(a.context, 291, function(e, f) {
            e = _.u(e);
            for (var g = e.next(); !g.done; g = e.next())
                if (g = g.value, !(0 >= g.intersectionRatio)) {
                    f.unobserve(g.target);
                    a.output.notify();
                    break
                }
        }));
        d ? (d.observe(c), _.Bp(a, function() {
            d.disconnect()
        })) : a.output.notify()
    };
    var Du = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.Id = c;
        this.L = d;
        this.output = jI(this);
        this.o = X(this, e);
        this.j = Y(this, f);
        g && lI(this, g)
    };
    _.T(Du, Z);
    Du.prototype.g = function() {
        var a = this,
            b, c = null != (b = this.j.value) ? b : 0;
        if (0 !== (0, _.dq)() || 0 < c)
            if (b = IH(document), JH(document) && b && (0 < rK(this.L, this.slotId) || !HN(this)) && b) {
                var d = Cp(this, 324, document, b, function() {
                    JH(document) || (d && d(), a.output.notify())
                });
                if (d) return
            }
        this.output.notify()
    };
    var HN = function(a) {
        try {
            var b = top;
            if (!b) return !0;
            var c = fv(b.document, b).y,
                d = c + a.Id.height,
                e = a.o.value;
            return e.y >= c && e.y <= d
        } catch (f) {
            return !0
        }
    };
    var Cu = function(a, b) {
        Z.call(this, a, 676);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(Cu, Z);
    Cu.prototype.g = function() {
        var a = Ym(this.j.value);
        this.output.G(a)
    };
    var hr = function(a, b, c, d, e, f) {
        f = void 0 === f ? _.z.globalThis.IntersectionObserver : f;
        Z.call(this, a, 886);
        this.X = b;
        this.L = c;
        this.o = d;
        this.j = f;
        this.output = jI(this);
        e && lI(this, e)
    };
    _.T(hr, Z);
    hr.prototype.g = function() {
        this.X.some(function(a) {
            return !ln(hn(a))
        }) ? this.output.notify() : dI(this.output, IN(this, this.o))
    };
    var IN = function(a, b) {
        return new _.z.Promise(function(c) {
            if (a.j) {
                for (var d = new a.j(function(h, k) {
                        h.some(function(l) {
                            return 0 < l.intersectionRatio
                        }) && (k.disconnect(), c())
                    }, {
                        rootMargin: b + "%"
                    }), e = _.u(a.X), f = e.next(), g = {}; !f.done; g = {
                        Af: void 0
                    }, f = e.next()) {
                    f = f.value;
                    g.Af = hn(f);
                    if (!g.Af) return;
                    d.observe(g.Af);
                    mK(a.L, f, function(h) {
                        return function() {
                            return void d.unobserve(h.Af)
                        }
                    }(g))
                }
                _.Bp(a, function() {
                    return void d.disconnect()
                })
            } else c()
        })
    };
    var JN = [{
            name: "Interstitial",
            format: 1,
            ge: 5
        }, {
            name: "TopAnchor",
            format: 2,
            ge: 2
        }, {
            name: "BottomAnchor",
            format: 3,
            ge: 3
        }, {
            name: "LeftSideRail",
            format: 4,
            ge: 8
        }, {
            name: "RightSideRail",
            format: 5,
            ge: 9
        }],
        du = function(a, b, c, d, e, f, g) {
            Z.call(this, a, 789);
            this.aa = b;
            this.googletag = c;
            this.o = d;
            this.j = e;
            this.R = f;
            this.C = g;
            this.output = W(this)
        };
    _.T(du, Z);
    du.prototype.g = function() {
        var a = this;
        JN.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.C)
        }).forEach(function(b) {
            var c = b.name;
            b = b.ge;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new tN(a.context, a.aa, "/22639388115/example/" + c.toLowerCase(), b, !1, a.googletag.pubads(), function(f) {
                return void a.googletag.display(f)
            }, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, a.googletag.cmd, a.j.g, a.j, a.o, a.R, !1);
            _.S(a, c);
            c.run()
        })
    };
    var KN = function(a, b, c) {
        Z.call(this, a, 1163);
        _.H(Ou);
        this.j = X(this, b);
        c && lI(this, c)
    };
    _.T(KN, Z);
    KN.prototype.g = function() {
        this.j.value.Rj();
        this.j.value.Ma()
    };
    var Qu = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.gb = f;
        this.j = W(this);
        this.o = X(this, g);
        this.K = X(this, h);
        this.C = Y(this, k);
        this.H = X(this, l)
    };
    _.T(Qu, Z);
    Qu.prototype.g = function() {
        var a = this,
            b;
        if (null != (b = this.gb) && _.Q(b, 12, !1)) {
            b = this.C.value.Zk;
            var c = _.Nq(this.L, this.slotId),
                d = this.K.value,
                e = this.o.value;
            _.Hp(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (LN) LN.Pj(e, this.H.value);
            else {
                var f, g;
                LN = new b(this.context, this.format, e, this.B, d, this.L, this.slotId, null != (g = null == (f = this.gb) ? void 0 : _.Km(f, nA, 16)) ? g : null);
                f = {};
                g = _.u(_.qk(this.gb, mA, 13));
                for (b = g.next(); !b.done; b = g.next()) b = b.value, f[sk(b, 1)] = sk(b, 2);
                LN.Qj(f);
                _.H(Ou) ? (LN.kn(), this.j.G(LN)) : LN.Ma();
                lK(this.L, this.slotId, function() {
                    LN && (LN.ya(), LN = null);
                    c && _.pK(a.L, a.slotId)
                })
            }
            _.Bp(this, function() {
                return _.cB(e)
            })
        }
    };
    var LN = null;
    var Pu = function(a, b, c, d, e, f, g, h, k, l) {
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
    _.T(Pu, Z);
    Pu.prototype.g = function() {
        var a;
        if (null != (a = this.gb) && null != Xn(a, 12)) {
            a = new Dk;
            _.S(this, a);
            var b, c = (null == (b = this.gb) ? 0 : _.Q(b, 15)) ? J(a, new jr(this.context, this.slotId, kr, function(d) {
                d = d.detail.data;
                try {
                    var e = JSON.parse(d);
                    return "floating" === e.type && "loaded" === e.message
                } catch (f) {}
                return !1
            })).output : void 0;
            b = new Qu(this.context, this.L, this.format, this.slotId, this.B, this.gb, this.j, this.C, this.o, this.H);
            J(a, b);
            b = new KN(this.context, b.j, c);
            J(a, b);
            a.run()
        }
    };
    var qr = function(a, b, c) {
        Z.call(this, a, 1150);
        this.B = b;
        this.output = jI(this);
        lI(this, c)
    };
    _.T(qr, Z);
    qr.prototype.g = function() {
        var a = this;
        this.B.location.hash = "goog_game_inter";
        _.Bp(this, function() {
            "goog_game_inter" === a.B.location.hash && (a.B.location.hash = "")
        });
        dI(this.output, new _.z.Promise(function(b) {
            return void Cp(a, a.id, a.B, "hashchange", function(c) {
                kx(c.oldURL, "#goog_game_inter") && b()
            })
        }))
    };
    var MN = function(a, b) {
            this.serviceName = b;
            this.slot = a.g
        },
        NN = function(a, b) {
            MN.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.vast = this.companyIds = this.yieldGroupIds = null
        };
    _.T(NN, MN);
    var ON = function() {
        MN.apply(this, arguments)
    };
    _.T(ON, MN);
    var PN = function(a, b, c) {
        MN.call(this, a, b);
        this.inViewPercentage = c
    };
    _.T(PN, MN);
    var QN = function() {
        MN.apply(this, arguments)
    };
    _.T(QN, MN);
    var RN = function() {
        MN.apply(this, arguments)
    };
    _.T(RN, MN);
    var SN = function() {
        MN.apply(this, arguments)
    };
    _.T(SN, MN);
    var TN = function() {
        MN.apply(this, arguments)
    };
    _.T(TN, MN);
    var UN = function(a, b, c, d) {
        MN.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.T(UN, MN);
    var VN = function(a, b, c) {
        MN.call(this, a, b);
        this.payload = c
    };
    _.T(VN, MN);
    var WN = function() {
        MN.apply(this, arguments)
    };
    _.T(WN, MN);
    var XN = function(a, b, c) {
        MN.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.T(XN, MN);
    var YN = function() {
        MN.apply(this, arguments)
    };
    _.T(YN, MN);
    var rr = function(a, b, c, d, e, f) {
        Z.call(this, a, 1151);
        this.slotId = b;
        this.za = c;
        lI(this, d);
        a = [e];
        f && a.push(f);
        f = new eI(a, !0);
        gI(this.F, f)
    };
    _.T(rr, Z);
    rr.prototype.g = function() {
        lt(this.za, "gameManualInterstitialSlotClosed", 1148, new YN(this.slotId, "publisher_ads"))
    };
    var or = function(a, b, c, d) {
        Z.call(this, a, 1149);
        this.slotId = b;
        this.za = c;
        this.output = jI(this);
        lI(this, d)
    };
    _.T(or, Z);
    or.prototype.g = function() {
        var a = new _.ai,
            b = a.promise;
        lt(this.za, "gameManualInterstitialSlotReady", 1147, new XN(this.slotId, "publisher_ads", a.resolve));
        dI(this.output, b.then(function() {
            return DB(10)
        }))
    };
    var nr = function(a, b, c) {
        c = void 0 === c ? ZN : c;
        Z.call(this, a, 1158);
        this.j = c;
        this.o = 1E3 * _.Uf(mr);
        this.output = jI(this);
        lI(this, b)
    };
    _.T(nr, Z);
    nr.prototype.g = function() {
        var a = this;
        this.j.tf++ ? dI(this.output, DB(this.o * (this.j.tf - 2) + (this.o - (Date.now() - this.j.Bg))).then(function() {
            a.j.Bg = Date.now();
            a.j.tf--
        })) : (this.j.Bg = Date.now(), DB(this.o).then(function() {
            return void a.j.tf--
        }), this.output.notify())
    };
    var ZN = {
        tf: 0,
        Bg: Date.now()
    };
    var $N = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        aO = {
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        pr = function(a, b, c, d, e) {
            Z.call(this, a, 1150);
            this.B = b;
            this.j = X(this, c);
            this.C = X(this, d);
            lI(this, e);
            this.o = new _.xI(this.B)
        };
    _.T(pr, Z);
    pr.prototype.g = function() {
        var a = 0 === (0, _.dq)() ? "rgba(1,1,1,0.5)" : "white";
        _.Hp(this.j.value, _.x(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.dq)() ? aO : $N));
        _.Hp(this.C.value, _.x(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, $N));
        _.Bp(this, _.LI(this.B.document, this.B));
        a = {};
        fB(this.j.value).postMessage(JSON.stringify((a.googMsgType = "sth", a.msg_type = "i-view", a)), "*");
        if (this.B === this.B.top) {
            var b = _.zI(this.o, 2147483646);
            _.DI(b);
            _.Bp(this, function() {
                return void _.EI(b)
            })
        }
    };
    var tr = function() {
        this.bg = 1E3
    };
    tr.prototype.send = function(a, b) {
        a.qj(b)
    };
    var wr = function() {
        this.bg = _.Uf(LF);
        this.fb = 17
    };
    wr.prototype.send = function(a, b) {
        var c = _.Cj(b, _.Dj, 2);
        _.se(c, 1, _.Bc, this.fb);
        a.Dm(b)
    };
    var bO = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.O = c;
        this.j = d;
        this.o = W(this);
        this.C = X(this, e);
        this.W = X(this, f);
        this.H = Y(this, g);
        this.K = Y(this, h);
        this.context.V.log(578856259, _.Fj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Gb: this.context.Pa,
            U: 7
        })
    };
    _.T(bO, Z);
    bO.prototype.g = function() {
        var a = this;
        this.context.V.log(578856259, _.Fj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Gb: this.context.Pa,
            U: 8
        });
        var b = this.W.value,
            c = this.C.value,
            d = this.K.value.ul,
            e = new _.XJ(this.context),
            f = null != Mm(this.j, 14) ? 60 * kt(this.j, 14) : 604800;
        b = new d(this.context, window, c, b, e, this.O, cO(this), new _.z.Set(je(this.j, 15, _.Dc, 2)), qN(this.slotId), function() {
            return void a.ya()
        }, function() {
            yr(a.context, {
                ob: 1,
                payload: function() {
                    var g = new xq,
                        h = _.yq(g, jD, 5, Aq),
                        k = _.eg();
                    _.Ji(h, 1, k);
                    return g
                }
            });
            a.ya()
        }, f, this.H.value);
        b.na();
        _.S(this, b);
        this.o.G(b);
        this.context.V.log(578856259, _.Fj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Gb: this.context.Pa,
            U: 9
        })
    };
    var cO = function(a) {
        var b = {};
        a = _.qk(a.j, mA, 13);
        a = _.u(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[sk(c, 1)] = sk(c, 2);
        return b
    };
    var dO = function(a, b, c, d) {
        Z.call(this, a, 1210);
        this.action = b;
        this.j = Y(this, c);
        lI(this, d)
    };
    _.T(dO, Z);
    dO.prototype.g = function() {
        var a;
        null != (a = this.j.value) && a.qb() && this.action()
    };
    var eO = function(a, b, c) {
        Z.call(this, a, 1121);
        this.aa = b;
        this.output = jI(this);
        this.C = !1;
        this.H = X(this, c)
    };
    _.T(eO, Z);
    eO.prototype.g = function() {
        var a = this;
        if (this.o = zr(Rl(this.context, this.id, function(b) {
                b = _.u(b);
                for (var c = b.next(); !c.done; c = b.next()) c = 100 * c.value.intersectionRatio, _.x(Number, "isFinite").call(Number, c) && 50 <= c ? a.j || (a.C = !0, JH(a.aa) || fO(a)) : (a.C = !1, gO(a))
            }))) _.Bp(this, function() {
            var b;
            null == (b = a.o) || b.disconnect();
            gO(a)
        }), this.o.observe(this.H.value), this.K = Cp(this, this.id, this.aa, "visibilitychange", function() {
            JH(a.aa) ? gO(a) : a.C && !a.j && fO(a)
        })
    };
    var fO = function(a) {
            a.j = setTimeout(function() {
                a.j = void 0;
                if (!JH(a.aa)) {
                    a.output.notify();
                    var b;
                    null == (b = a.o) || b.disconnect();
                    var c;
                    null == (c = a.K) || c.call(a)
                }
            }, 1E3)
        },
        gO = function(a) {
            clearTimeout(a.j);
            a.j = void 0
        };
    var Ru = function(a, b, c, d, e, f, g, h, k, l, m) {
        m = void 0 === m ? function() {
            return _.eg()
        } : m;
        Z.call(this, a, 1141);
        this.slotId = b;
        this.K = c;
        this.o = d;
        this.aa = e;
        this.j = f;
        this.O = g;
        this.zb = h;
        this.H = k;
        this.C = l;
        this.mc = m;
        this.output = W(this)
    };
    _.T(Ru, Z);
    Ru.prototype.g = function() {
        var a = this;
        if (this.o) {
            var b = new Dk;
            _.S(this, b);
            var c = J(b, new bO(this.context, this.slotId, this.K, this.o, this.j, this.O, this.zb, this.H));
            _.Bp(c, function() {
                return void a.ya()
            });
            this.output.La(c.o.promise.then(function() {
                return !0
            }));
            if (_.H(hE) || _.Uf(kE)) {
                var d = J(b, new eO(this.context, this.aa, this.j));
                _.Uf(kE) && J(b, new dO(this.context, function() {
                    yr(a.context, {
                        ob: _.Uf(kE),
                        payload: function() {
                            var e = new iD,
                                f = a.mc();
                            null !== f && _.Ji(e, 1, f);
                            return kD(e)
                        }
                    })
                }, c.o, d.output));
                _.H(hE) && J(b, new dO(this.context, function() {
                    yr(a.context, {
                        ob: 1,
                        payload: function() {
                            var e = new iD,
                                f = a.mc();
                            null !== f && _.Ji(e, 1, f);
                            li(e, 2, !0);
                            return kD(e)
                        }
                    });
                    a.C()
                }, c.o, d.output))
            }
            b.run()
        } else this.output.G(!1)
    };
    var hO = function(a) {
        this.module = a
    };
    hO.prototype.toString = function() {
        return String(this.module)
    };
    _.iO = new hO(2);
    _.jO = new hO(5);
    _.kO = new hO(6);
    var Ju = function(a, b, c, d, e, f) {
        Z.call(this, a, 846);
        this.o = b;
        this.format = c;
        this.gb = d;
        this.j = e;
        this.output = W(this);
        f && lI(this, f)
    };
    _.T(Ju, Z);
    Ju.prototype.g = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.gb) || !_.Q(a, 12, !1));
        a = 5 === this.format && this.j;
        b || a ? this.output.La(this.o.load(_.iO)) : this.output.ba()
    };
    var lO = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.P = b;
        this.j = c;
        this.output = jI(this);
        this.o = X(this, d);
        lI(this, e)
    };
    _.T(lO, Z);
    lO.prototype.g = function() {
        for (var a = _.u(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            b = null == (c = this.P.T[b.value.getDomId()]) ? void 0 : Ar(c);
            if (2 === b || 3 === b || 5 === b) {
                this.j.load(_.iO);
                return
            }
        }
        this.output.notify()
    };
    var mO = function(a, b, c, d, e, f) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.za = c;
        lI(this, d);
        mI(this, [e, f])
    };
    _.T(mO, Z);
    mO.prototype.g = function() {
        lt(this.za, "rewardedSlotClosed", 703, new WN(this.slotId, "publisher_ads"))
    };
    var nO = function(a, b, c, d, e) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.za = c;
        lI(this, d);
        this.j = Y(this, e)
    };
    _.T(nO, Z);
    nO.prototype.g = function() {
        var a, b = null == (a = this.j.value) ? void 0 : a.payload;
        lt(this.za, "rewardedSlotGranted", 702, new VN(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var oO = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        pO = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.B = b;
            this.H = f;
            this.output = jI(this);
            this.o = X(this, c);
            this.C = X(this, d);
            lI(this, e);
            this.j = new _.xI(this.B)
        };
    _.T(pO, Z);
    pO.prototype.g = function() {
        var a = this;
        if (!this.H.Sc) {
            var b = 0 === (0, _.dq)() ? "rgba(1,1,1,0.5)" : "white";
            _.Hp(this.C.value, _.x(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, oO));
            _.Bp(this, _.LI(this.B.document, this.B));
            fB(this.o.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.B === this.B.top) {
                this.B.location.hash = "goog_rewarded";
                var c = _.zI(this.j, 2147483646);
                _.DI(c);
                _.Bp(this, function() {
                    _.EI(c);
                    "goog_rewarded" === a.B.location.hash && (a.B.location.hash = "")
                })
            }
            this.output.notify()
        }
    };
    var qO = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.B = b;
        this.j = X(this, c);
        lI(this, d)
    };
    _.T(qO, Z);
    qO.prototype.g = function() {
        if (this.B === this.B.top) var a = fB(this.j.value),
            b = Cp(this, 503, this.B, "hashchange", function(c) {
                kx(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var rO = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.za = c;
        this.output = jI(this);
        this.j = X(this, d)
    };
    _.T(rO, Z);
    rO.prototype.g = function() {
        var a = this.j.value,
            b = new _.ai,
            c = b.promise,
            d;
        lt(this.za, "rewardedSlotReady", 701, new UN(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        dI(this.output, c)
    };
    var sO = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        tO = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        uO = function(a, b, c, d, e) {
            Z.call(this, a, 691);
            this.C = W(this);
            this.o = jI(this);
            this.H = X(this, c);
            this.j = mI(this, [d, e])
        };
    _.T(uO, Z);
    uO.prototype.g = function() {
        if ("ha_before_make_visible" === this.j.value.message) this.o.notify();
        else {
            var a = _.H(oE) ? sO : tO;
            _.Hp(this.H.value, _.x(Object, "assign").call(Object, {
                position: "absolute"
            }, 0 === (0, _.dq)() ? a : sO));
            this.C.G(this.j.value)
        }
    };
    var Su = function(a, b, c, d, e, f) {
        Dk.call(this);
        var g = Dr(b, "granted", a);
        J(this, g);
        var h = Dr(b, "prefetched", a);
        J(this, h);
        var k = Dr(b, "closed", a);
        J(this, k);
        var l = Dr(b, "ha_before_make_visible", a);
        J(this, l);
        var m = new uO(a, b, e, h.output, l.output);
        J(this, m);
        h = new rO(a, b, c, m.C);
        J(this, h);
        f = new pO(a, d, e, f, h.output, m.o);
        J(this, f);
        J(this, new qO(a, d, e, f.output));
        J(this, new nO(a, b, c, h.output, g.output));
        J(this, new mO(a, b, c, h.output, k.output, l.output))
    };
    _.T(Su, Dk);
    var Yt = function(a, b) {
        Z.call(this, a, 1031);
        this.B = b
    };
    _.T(Yt, Z);
    Yt.prototype.g = function() {
        this.B === this.B.top && zl(this.B)
    };
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var vO = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        Er = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = vO[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var wO = bh({
            gsppack: Po,
            fpt: eh,
            eids: fh()
        }),
        xO = bh({
            paw_id: eh,
            signal: eh,
            error: eh,
            eids: fh()
        }),
        yO = function(a, b, c, d, e) {
            b = void 0 === b ? new _.z.Set : b;
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
    _.T(yO, _.V);
    yO.prototype.A = function() {
        _.V.prototype.A.call(this);
        zO(this);
        for (var a = _.u(this.ports), b = a.next(); !b.done; b = a.next()) b = b.value, this.ports.delete(b), b.onmessage = null
    };
    var AO = function(a, b, c) {
            b.onmessage = c;
            a.ports.add(b)
        },
        zO = function(a) {
            null !== a.l && (_.ig(a.B, "message", a.l), a.l = null)
        },
        BO = function(a, b) {
            for (var c = _.u(a.ports), d = c.next(); !d.done; d = c.next()) d = d.value, d !== b && (a.ports.delete(d), d.onmessage = null);
            zO(a);
            a.g = b
        },
        CO = function(a, b) {
            AO(a, b, function(c) {
                a: {
                    try {
                        var d = JSON.parse(c.data);
                        if (xO(d)) {
                            var e = d;
                            break a
                        }
                    } catch (k) {}
                    e = void 0
                }
                if (e) {
                    null === a.g && BO(a, b);
                    var f;
                    null == (f = a.j) || f.resolve(e.signal);
                    a.j = null
                } else {
                    a: {
                        try {
                            var g = JSON.parse(c.data);
                            if (wO(g) && g.gsppack) {
                                var h = g;
                                break a
                            }
                        } catch (k) {}
                        h = void 0
                    }
                    h && null === a.g && BO(a, b)
                }
            });
            Fr(b)
        },
        DO = function(a) {
            if (a.j) return a.j.promise;
            if (null !== a.l) throw Error("a poll message listener is already registered");
            a.j = new _.ai;
            null === a.g ? (a.l = function(b) {
                b = null == b.data || "" === b.data ? b.ports[0] : void 0;
                b && CO(a, b)
            }, _.Jf(a.B, "message", a.l)) : Fr(a.g);
            return a.j.promise
        };
    var Wt = function(a, b, c, d) {
        c = void 0 === c ? ei : c;
        d = void 0 === d ? new yO(b) : d;
        Z.call(this, a, 1063);
        this.B = b;
        this.H = c;
        this.o = d;
        this.C = W(this);
        this.qc = W(this);
        this.j = !1;
        _.S(this, d)
    };
    _.T(Wt, Z);
    Wt.prototype.g = function() {
        var a = this;
        if (_.H(bE)) {
            this.j = fi(this.B);
            var b = !this.j && _.H($D) ? DO(this.o) : void 0,
                c = null,
                d = 0,
                e = function() {
                    return _.H($D) && null !== a.o.g ? b ? b.then(function(h) {
                        b = void 0;
                        return h
                    }) : DO(a.o) : a.H(a.B)
                },
                f = Rl(this.context, this.id, function() {
                    var h, k, l;
                    return _.Lf(function(m) {
                        switch (m.g) {
                            case 1:
                                return h = "0", m.l = 2, m.yield(e(), 4);
                            case 4:
                                h = null != (k = m.A) ? k : "0";
                                1E4 < h.length && (Vl(a.context, a.id, new Lo("ML:" + h.length)), h = "0");
                                m.g = 3;
                                m.l = 0;
                                break;
                            case 2:
                                l = Nf(m), Vl(a.context, a.id, l);
                            case 3:
                                c = h, d = _.dg(a.B) + 3E5, m.g = 0
                        }
                    })
                });
            if (!_.H($D) || this.j) var g = (_.I = f(), _.x(_.I, "finally")).call(_.I, function() {
                g = void 0
            });
            this.C.G(function() {
                var h, k, l;
                return _.Lf(function(m) {
                    if (1 == m.g) {
                        h = _.H($D) && null !== a.o.g;
                        if (!a.j && !h) return m.return("");
                        k = _.dg(a.B) >= d;
                        l = null === c || "0" === c;
                        if (!k && !l) {
                            m.g = 2;
                            return
                        }
                        g || (g = (_.I = f(), _.x(_.I, "finally")).call(_.I, function() {
                            g = void 0
                        }));
                        return m.yield(g, 2)
                    }
                    return m.return(c)
                })
            });
            this.j ? this.qc.G("WEBVIEW_SDK_PAW") : this.qc.G("WEBVIEW_SDK_PACT")
        } else this.C.G(function() {
            return _.z.Promise.resolve("")
        }), this.qc.G("WEBVIEW_SDK_UNKNOWN")
    };
    Wt.prototype.l = function() {
        this.C.G(function() {
            return _.z.Promise.resolve("")
        });
        this.j ? this.qc.G("WEBVIEW_SDK_PAW") : this.qc.G("WEBVIEW_SDK_PACT")
    };
    var EO = function(a, b) {
        Z.call(this, a, 1091);
        this.output = W(this);
        b && (this.j = Y(this, b))
    };
    _.T(EO, Z);
    EO.prototype.g = function() {
        var a;
        null != (a = this.j) && a.value ? this.output.La(this.j.value()) : this.output.G("")
    };
    EO.prototype.l = function() {
        this.output.G("")
    };
    var Qr = new _.z.Map([
        ["IAB_AUDIENCE_1_1", 3],
        ["IAB_CONTENT_2_2", 5],
        ["IAB_CONTENT_3_0", 6]
    ]);
    var Xr = new _.z.Set(["disablePersonalization"]);
    var as = function(a, b, c) {
        Z.call(this, a, 1122);
        this.aa = b;
        this.j = c;
        jI(this, c)
    };
    _.T(as, Z);
    as.prototype.g = function() {
        var a = this,
            b = Pl(this.context);
        dI(this.j, new _.z.Promise(function(c) {
            return void LH(function() {
                c();
                b()
            }, a.aa)
        }))
    };
    var Zt = function(a, b, c) {
        Z.call(this, a, 1107);
        this.B = b;
        this.j = c;
        W(this, c)
    };
    _.T(Zt, Z);
    Zt.prototype.g = function() {
        var a = yh(this.B.isSecureContext, this.B.navigator, this.B.document),
            b = zh(this.B.isSecureContext, this.B.document),
            c = Ah(this.B.isSecureContext, this.B, this.B.document),
            d = !(!this.B.isSecureContext || !xh("attribution-reporting", this.B.document)),
            e = 0;
        a && (e |= 1);
        b && (e |= 4);
        c && (e |= 8);
        d && (e |= 2);
        this.j.Ha(0 === e ? null : e)
    };
    Zt.prototype.l = function() {
        this.j.ba()
    };
    var FO = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1118, _.Uf(uE));
        this.C = b;
        this.K = e;
        this.T = f;
        W(this, e);
        c && (this.O = Y(this, c));
        d && (this.H = Y(this, d));
        g && (this.o = X(this, g));
        h && (this.j = kI(this, h))
    };
    _.T(FO, Z);
    FO.prototype.g = function() {
        var a = new TH;
        a = _.re(a, 1, _.Kc(this.C), 0);
        if (this.j)
            if (this.j.value) {
                var b = _.Aj(a, 3, this.j.value.label);
                _.K(b, 4, this.j.value.status)
            } else this.j.Sc() || _.K(a, 4, 5);
        if (this.C & 1) {
            var c, d;
            b = GO(this, null == (c = this.O) ? void 0 : c.value, null == (d = this.H) ? void 0 : d.value);
            _.vi(a, 2, b)
        }
        this.K.G(a)
    };
    var GO = function(a, b, c) {
            switch (_.Uf(au)) {
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
            var e = new SH;
            _.H(NF) || _.K(e, 1, d);
            null == b || b.forEach(function(h, k) {
                if (!_.H(JF) || h.length) {
                    var l = RH(new QH, h),
                        m;
                    null == (m = null == c ? void 0 : c.get(k)) || m.forEach(function(n, p) {
                        var r = new NH;
                        n = _.re(r, 2, _.Kc(n), 0);
                        p = _.re(n, 1, _.Kc(_.Qh(p)), 0);
                        zk(l, 2, NH, p)
                    });
                    pe(e, 2, QH).set(k, l)
                }
            });
            var f;
            if ((null == (f = a.o) ? 0 : f.value) && a.T) {
                var g;
                b = _.u(null == (g = a.o) ? void 0 : g.value);
                for (g = b.next(); !g.done; g = b.next()) g = g.value, (d = HO(a, a.T[g.getDomId()])) && pe(e, 3, OH).set(g.getAdUnitPath(), d)
            }
            return e
        },
        HO = function(a, b) {
            a = So(a.context, b);
            if (0 !== a.length) return PH(new OH, a.map(function(c) {
                return c.seller
            }))
        };
    var cs = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1165);
        this.K = c;
        this.H = d;
        this.xf = e;
        this.T = f;
        this.C = g;
        this.o = h;
        this.j = Y(this, b.aj)
    };
    _.T(cs, Z);
    cs.prototype.g = function() {
        if (this.j.value) {
            var a = new Dk,
                b = new FO(this.context, this.j.value, this.K, this.H, this.xf.Zg, this.T, this.C, this.o);
            J(a, b);
            a.run()
        } else this.xf.Zg.ba()
    };
    var ku = function(a, b, c) {
        Z.call(this, a, 1206);
        this.o = b;
        this.j = W(this);
        this.Z = X(this, c)
    };
    _.T(ku, Z);
    ku.prototype.g = function() {
        var a = this;
        this.o.cookieDeprecationLabel ? mh(this.Z.value) ? this.j.La(this.o.cookieDeprecationLabel.getValue().then(function(b) {
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
    var IO = function(a, b) {
        Z.call(this, a, 1213, _.Uf(uE));
        this.j = W(this);
        b && (this.o = kI(this, b))
    };
    _.T(IO, Z);
    IO.prototype.g = function() {
        var a, b, c;
        (null == (c = null == (a = this.o) ? void 0 : null == (b = a.value) ? void 0 : b.label) ? 0 : c.match(Vf(tE))) ? this.j.G(!0): this.j.G(!1)
    };
    var JO = function(a, b) {
        Z.call(this, a, 1212, _.Uf(uE));
        this.j = W(this);
        this.o = W(this);
        b && (this.C = kI(this, b))
    };
    _.T(JO, Z);
    JO.prototype.g = function() {
        var a, b, c = null == (a = this.C) ? void 0 : null == (b = a.value) ? void 0 : b.label;
        c ? (this.o.G(!0), c.match(Vf(tE)) ? this.j.G(!0) : this.j.G(!1)) : (this.j.G(!1), this.o.G(!1))
    };
    var KO = function(a, b, c) {
        Z.call(this, a, 873);
        this.B = b;
        this.j = X(this, c)
    };
    _.T(KO, Z);
    KO.prototype.g = function() {
        var a = this.context,
            b = this.j.value,
            c = this.B;
        !No()._pubconsole_disable_ && (b = ph("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || jp(a, c))
    };
    var LO = function() {
        this.resources = {}
    };
    var es = "3rd party ad content";
    var MO = function(a, b, c) {
        _.V.call(this);
        this.context = a;
        this.Ra = b;
        this.g = c;
        a = c.slotId;
        b = c.size;
        this.l = "height" === c.ub ? "fluid" : [b.width, b.height];
        this.Wd = on(a);
        this.Xd = es
    };
    _.T(MO, _.V);
    MO.prototype.render = function() {
        var a = this.Ra,
            b = this.g,
            c = b.slotId,
            d = b.P.T,
            e = b.size,
            f = b.Oa,
            g = b.isBackfill,
            h = b.Tb;
        gj(b.uj, _.$A(b.aa), null != f ? f : "", !1);
        jt(_.Sf(Tl), "5", kt(d[c.getDomId()], 20));
        lt(c, mt, 801, {
            Th: 0 === a.kind ? a.hb : "",
            isBackfill: g
        });
        a = this.F();
        h && a && a.setAttribute("data-google-container-id", h);
        lt(c, nt, 825, {
            size: e,
            isEmpty: !1
        });
        return a
    };
    MO.prototype.loaded = function(a) {
        var b = this.g,
            c = b.slotId,
            d = b.za;
        b = b.P.T;
        lt(c, Yu, 844);
        a && a.setAttribute("data-load-complete", !0);
        lt(d, "slotOnload", 710, new QN(c, "publisher_ads"));
        jt(_.Sf(Tl), "6", kt(b[c.getDomId()], 20))
    };
    var NO = function(a) {
        a = a.Ra;
        a = 0 === a.kind ? a.hb : "";
        var b = "";
        b = void 0 === b ? "" : b;
        if (a) {
            var c = a.toLowerCase();
            a = -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") || _.H(QA) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>"
        }
        return a
    };
    MO.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.g.uj.removeAttribute("data-google-query-id")
    };
    MO.prototype.I = function(a) {
        var b = this,
            c = OO(this, function() {
                return void b.loaded(c.g)
            }, a);
        _.Bp(this, function() {
            100 != c.status && (c.zg() && (hJ(c.l), c.C = 0), window.clearTimeout(c.H), c.H = -1, c.J = 3, c.A && (c.A.ya(), c.A = null), _.ig(window, "resize", c.Ca), _.ig(window, "scroll", c.Ca), c.F && c.g && c.F == _.dB(c.g) && c.F.removeChild(c.g), c.g = null, c.F = null, c.status = 100)
        });
        return c
    };
    var OO = function(a, b, c) {
        var d = a.g,
            e = d.mj,
            f = d.isBackfill,
            g = d.Tb,
            h = d.Te,
            k = d.Of,
            l = d.ab,
            m = Array.isArray(a.l) ? new _.an(Number(a.l[0]), Number(a.l[1])) : 1;
        return new pJ({
            Wg: d.Yf,
            Wd: a.Wd,
            Xd: a.Xd,
            content: NO(a),
            size: m,
            Ui: b,
            nj: null != e ? e : void 0,
            permissions: {
                Qe: null != Xn(c, 1) ? !!_.Q(c, 1) : !f,
                Re: null != Xn(c, 2) ? !!_.Q(c, 2) : !1
            },
            Yd: !!No().fifWin,
            rm: YL ? YL : YL = Nn(),
            mk: Rn(),
            hostpageLibraryTokens: l.hostpageLibraryTokens,
            tb: function(n, p) {
                return void Vl(a.context, n, p)
            },
            uniqueId: g,
            lj: WL(),
            Te: null != h ? h : void 0,
            vb: void 0,
            Of: null != k ? k : void 0
        })
    };
    var PO = function() {
        MO.apply(this, arguments)
    };
    _.T(PO, MO);
    PO.prototype.F = function() {
        var a = this.g,
            b = a.P,
            c = b.ca;
        a = b.T[a.slotId.getDomId()];
        b = new Sn;
        c = Yn([b, c.Ec(), null == a ? void 0 : a.Ec()]);
        return MO.prototype.I.call(this, c).g
    };
    PO.prototype.j = function() {
        return !1
    };
    var zu = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.ca = b;
        this.T = c;
        this.j = d;
        this.Ib = e;
        this.output = W(this);
        f && (this.o = X(this, f))
    };
    _.T(zu, Z);
    zu.prototype.g = function() {
        var a;
        if (null == (a = this.o) ? 0 : a.value) this.output.G(!0);
        else {
            var b;
            a = !(null == (b = this.j) || !_.E(b, 1)) && (_.Q(this.T, 12) || Xn(this.ca, 13)) || this.Ib;
            this.output.G(!!a)
        }
    };
    var QO = function(a, b, c, d) {
        Z.call(this, a, 833);
        this.j = b;
        this.B = c;
        this.output = jI(this);
        lI(this, d)
    };
    _.T(QO, Z);
    QO.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = WL();
        c = {
            version: YL ? YL : YL = Nn(),
            Ff: c
        };
        c = wJ.Cl(c);
        var d = cJ(b);
        c = d ? _.Ef(c, new _.z.Map([
            ["n", String(d)]
        ])) : c;
        d = Wf(Pn);
        for (var e = new _.z.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
        c = _.Ef(c, e);
        var g;
        a.resources[c.toString()] || (null == (g = No()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.hg("IFRAME"), a.src = _.lb(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)));
        this.output.notify()
    };
    var RO = function(a, b, c) {
        Z.call(this, a, 1135);
        this.o = b;
        this.C = c;
        this.j = W(this)
    };
    _.T(RO, Z);
    RO.prototype.g = function() {
        for (var a = new Tz, b = new _.z.Map, c = new _.z.Set, d = _.u(this.o), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (_.Ui(f, 1)) {
                e = new _.z.Set;
                b.set(_.E(f, 1).toString(), e);
                f = _.u(_.qk(f, Rz, 2));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = _.E(g, 1);
                    e.add(h);
                    c.has(h) || zk(a, 2, Rz, g);
                    c.add(h)
                }
            }
        }
        this.C.G(b);
        this.j.G(a)
    };
    var SO = function(a, b, c) {
        Z.call(this, a, 1051);
        this.o = b;
        this.j = Y(this, c)
    };
    _.T(SO, Z);
    SO.prototype.g = function() {
        var a = this;
        this.j.value && Xk(this.j.value, function(b, c) {
            Vl(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var TO = function(a, b) {
        Z.call(this, a, 1040);
        this.j = W(this);
        this.o = Y(this, b)
    };
    _.T(TO, Z);
    TO.prototype.g = function() {
        var a = this.o.value;
        a ? (a = _.qk(a, Rz, 2), this.j.G(a.map(function(b) {
            var c = iz(b, Sz);
            b = _.E(b, 1);
            c = c && (_.x(c, "startsWith").call(c, location.protocol) || _.x(c, "startsWith").call(c, "data:") && 80 >= c.length) ? Cf(ik(c)) : void 0;
            return {
                Ie: b,
                url: c
            }
        }))) : this.j.G([])
    };
    var UO = function(a, b, c) {
        Z.call(this, a, 813);
        this.zb = c;
        this.o = Y(this, b);
        this.j = Y(this, c)
    };
    _.T(UO, Z);
    UO.prototype.g = function() {
        var a = this,
            b = this.o.value,
            c = this.j.value;
        if (null != b && b.length && c) {
            b = _.u(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = e.Ie;
                (e = e.url) && _.S(this, al(d, e, c, this.zb, function(f, g) {
                    Vl(a.context, f, g);
                    var h, k;
                    null == (k = (h = console).error) || k.call(h, g)
                }))
            }
        }
    };
    var VO = function(a, b, c) {
        Z.call(this, a, 1045);
        this.j = b;
        this.zb = c
    };
    _.T(VO, Z);
    VO.prototype.g = function() {
        var a = new Dk;
        _.S(this, a);
        var b = new TO(this.context, this.j);
        J(a, b);
        b = new UO(this.context, b.j, this.zb);
        J(a, b);
        a.run()
    };
    var ru = function(a, b, c, d) {
        Z.call(this, a, 706);
        this.B = b;
        this.output = null != d ? d : W(this);
        this.j = X(this, c)
    };
    _.T(ru, Z);
    ru.prototype.g = function() {
        this.output.Ha(nh(this.j.value, this.B))
    };
    var js = function(a, b, c, d) {
        Z.call(this, a, 1154);
        this.nb = c;
        this.j = d;
        this.o = Y(this, b)
    };
    _.T(js, Z);
    js.prototype.g = function() {
        if (this.o.value) {
            var a = new Dk;
            _.S(this, a);
            var b = new ru(this.context, window, this.nb, this.j.zb);
            J(a, b);
            b = new RO(this.context, this.o.value, this.j.Ng);
            J(a, b);
            J(a, new VO(this.context, b.j, this.j.zb));
            b = new SO(this.context, console, this.j.zb);
            J(a, b);
            a.run()
        } else this.j.Ng.ba(), this.j.zb.ba()
    };
    var WO = function(a, b, c, d, e, f) {
        Z.call(this, a, 1096);
        this.B = b;
        this.Z = c;
        this.j = d;
        this.Fc = e;
        this.o = Y(this, f)
    };
    _.T(WO, Z);
    WO.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : a.Xj;
        b && b(this.j, this.Z, this.B, this.Fc, this.context.Qa)
    };
    var XO = function(a, b) {
        Z.call(this, a, 1095);
        this.j = b;
        this.output = W(this)
    };
    _.T(XO, Z);
    XO.prototype.g = function() {
        this.output.La(this.j.load(_.jO))
    };
    var ls = function(a, b, c, d, e) {
        Z.call(this, a, 1090);
        this.j = b;
        this.Fc = c;
        this.o = X(this, d);
        this.C = Y(this, e)
    };
    _.T(ls, Z);
    ls.prototype.g = function() {
        var a = this.C.value,
            b;
        if (a && null != (b = _.Km(a, _.hA, 1)) && _.qk(b, _.gA, 15).length) {
            b = new Dk;
            _.S(this, b);
            var c = new XO(this.context, this.j);
            J(b, c);
            a = new WO(this.context, window, this.o.value, a, this.Fc, c.output);
            J(b, a);
            b.run()
        }
    };
    var Uu = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1205);
        this.B = b;
        this.K = c;
        this.H = X(this, d);
        this.o = X(this, e);
        this.j = X(this, f);
        this.C = X(this, g)
    };
    _.T(Uu, Z);
    Uu.prototype.g = function() {
        var a = this.H.value;
        a = new a.Im(this.o.value, this.B, this.j.value, this.K, this.C.value, new _.XJ(this.context), new a.Yk(this.B));
        _.S(this, a);
        _.S(this, a.K)
    };
    var Tu = function(a, b) {
        Z.call(this, a, 1204);
        this.j = b;
        this.output = W(this)
    };
    _.T(Tu, Z);
    Tu.prototype.g = function() {
        this.output.La(this.j.load(_.kO))
    };
    var Ct = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = Rl(a, 88, function(f, g) {
            var h;
            if (h = Do(f)) h = g, h = Co(h) || Array.isArray(h) && h.every(Co);
            if (h) {
                if (_.H(FE)) {
                    var k = os(g);
                    h = k.size;
                    k.gh && (g = jm([f, g]), g = g.substring(1, g.length - 1), P(b, new im(151, ["SizeMappingBuilder.addSize", g])), g = h)
                }
                d.push([f, g])
            } else e.push([f, g]), P(b, km("SizeMappingBuilder.addSize", [f, g]));
            return c
        });
        this.build = Rl(a, 89, function() {
            if (e.length) return P(b, JK(Vn(e))), null;
            Sa(d);
            return d
        })
    };
    var YO = function(a, b, c, d, e, f) {
        f = void 0 === f ? cl : f;
        Z.call(this, a, 939);
        this.o = b;
        this.B = c;
        this.Z = d;
        this.j = f;
        this.output = jI(this);
        lI(this, e)
    };
    _.T(YO, Z);
    YO.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = new Cz;
        var d = new Bz;
        d = _.Aj(d, 1, String(this.o));
        c = _.vi(c, 5, d);
        c = _.K(c, 4, 1);
        c = _.K(c, 2, 2);
        c = _.Aj(c, 3, this.context.Pa);
        d = mh(this.Z);
        c = _.Il(c, 6, d);
        a.call(this, b, c);
        this.output.notify()
    };
    var Hu = function(a, b, c, d, e) {
        Z.call(this, a, 807);
        this.B = b;
        this.Lb = c;
        this.output = jI(this);
        this.j = X(this, d);
        e && lI(this, e)
    };
    _.T(Hu, Z);
    Hu.prototype.g = function() {
        if (this.Lb && !this.j.value) {
            var a = EB(this.B);
            RJ(new QJ(a, this.Lb)) || this.I(new Lo("Cannot create top window frame"))
        }
        this.output.notify()
    };
    var ZO = function(a, b) {
        Z.call(this, a, 820);
        this.B = b;
        this.output = W(this)
    };
    _.T(ZO, Z);
    ZO.prototype.g = function() {
        var a = this;
        this.output.La(gl(this.B).then(function(b) {
            var c = b.Lb,
                d = b.status;
            Op("gpt_etu", function(e) {
                np(e, a.context);
                op(e, "rsn", d)
            }, c ? void 0 : 0);
            return null != c ? c : ""
        }))
    };
    var $O = function(a, b, c, d) {
        Z.call(this, a, 979);
        this.B = b;
        this.j = Y(this, d);
        this.output = c
    };
    _.T($O, Z);
    $O.prototype.g = function() {
        var a = this;
        if (_.H(JE)) this.output.ba();
        else {
            var b;
            kl(this.B, null != (b = this.j.value) ? b : !1).then(function(c) {
                a.output.G(c)
            })
        }
    };
    $O.prototype.l = function() {
        this.output.ba()
    };
    var ts = function(a, b, c, d) {
        Z.call(this, a, 1156);
        this.B = b;
        this.ag = c;
        this.j = {
            Yc: new mq
        };
        this.o = X(this, d)
    };
    _.T(ts, Z);
    ts.prototype.g = function() {
        if (mh(this.o.value)) {
            var a = new Dk;
            _.S(this, a);
            var b = new $O(this.context, this.B, this.j.Yc, this.ag);
            J(a, b);
            a.run()
        } else this.j.Yc.ba()
    };
    var aP = function(a, b, c) {
        Z.call(this, a, 1123);
        this.j = b;
        this.o = c;
        W(this, b);
        W(this, c)
    };
    _.T(aP, Z);
    aP.prototype.g = function() {
        _.H(HE) ? (this.j.G(!1), this.o.ba()) : (this.j.G(!0), this.o.G(10))
    };
    var bP = function(a, b, c, d, e) {
        Z.call(this, a, 978);
        this.B = b;
        this.C = c;
        this.j = e;
        W(this, e);
        this.o = Y(this, d.Yc)
    };
    _.T(bP, Z);
    bP.prototype.g = function() {
        if (_.H(IE)) this.j.ba();
        else if (this.o.value) {
            var a = rl(this.o.value, this.B, new _.XJ(this.context), this.C);
            this.j.La(a)
        } else this.j.ba()
    };
    bP.prototype.l = function() {
        this.j.ba()
    };
    var vs = function(a, b, c, d, e, f) {
        Z.call(this, a, 1164);
        this.o = b;
        this.ue = c;
        this.j = e;
        this.C = X(this, d);
        f && (this.H = X(this, f))
    };
    _.T(vs, Z);
    vs.prototype.g = function() {
        var a;
        if (!zh(window.isSecureContext, window.document) || (null == (a = this.H) ? 0 : a.value)) this.j.Ed.ba(), this.j.se.G(!1), this.j.te.ba();
        else if (this.C.value) {
            a = new Dk;
            _.S(this, a);
            J(a, new bP(this.context, window, this.o, this.ue, this.j.Ed));
            var b = new aP(this.context, this.j.se, this.j.te);
            J(a, b);
            a.run()
        } else this.j.Ed.G(5), this.j.se.G(!1), this.j.te.G(5)
    };
    var cP = function(a, b, c) {
        Z.call(this, a, 1101);
        this.B = b;
        this.j = c
    };
    _.T(cP, Z);
    cP.prototype.g = function() {
        if (!_.H(IE)) {
            var a = this.j,
                b = hl(this.B);
            b.setTopicsCalled ? _.z.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }))
        }
    };
    var Lu = function(a, b, c, d) {
        Z.call(this, a, 1180);
        this.B = b;
        this.Uf = c;
        this.j = Y(this, d.Yc)
    };
    _.T(Lu, Z);
    Lu.prototype.g = function() {
        if (this.Uf && this.j.value) {
            var a = new Dk;
            _.S(this, a);
            J(a, new cP(this.context, this.B, this.j.value));
            a.run()
        }
    };
    var Es = function(a) {
        this.D = _.A(a)
    };
    _.T(Es, _.D);
    var As = function(a, b) {
        return _.re(a, 2, _.dd(b), "0")
    };
    var dP = function(a) {
        this.D = _.A(a)
    };
    _.T(dP, _.D);
    var Ds = of (dP);
    dP.da = [1];
    var mu = function(a, b, c, d) {
        Z.call(this, a, 1186);
        this.L = b;
        this.B = c;
        this.output = W(this);
        this.Z = X(this, d)
    };
    _.T(mu, Z);
    mu.prototype.g = function() {
        if (!yh(this.B.isSecureContext, this.B.navigator, this.B.document) || _.H($t)) this.output.ba();
        else {
            var a = this.L.Ue;
            if (null !== a) this.output.G(a);
            else {
                var b = _.$n(new _.sH(this.B), "__gpi", this.Z.value);
                a = this.output;
                var c = a.G;
                b = _.Qh(b || String(this.context.pvsid)) % 63001;
                this.L.Ue = b;
                c.call(a, b)
            }
        }
    };
    var eP = function(a, b, c) {
        Z.call(this, a, 1171);
        this.j = c;
        W(this, c);
        this.fh = X(this, b)
    };
    _.T(eP, Z);
    eP.prototype.g = function() {
        this.j.G(0 === this.fh.value.kind)
    };
    var fP = function(a, b, c) {
        Z.call(this, a, 1160);
        this.j = c;
        W(this, c);
        this.o = X(this, b)
    };
    _.T(fP, Z);
    fP.prototype.g = function() {
        if (null != this.o.value.requestId) {
            var a = this.o.value.request;
            this.context.Qa.Zb.lc.Fd.dk.Qc({
                Tc: a.byteLength
            });
            33792 < a.byteLength ? this.j.G({
                kind: 1,
                reason: 3
            }) : (a = ub(a, 3), a.length ? this.j.G({
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
    fP.prototype.l = function() {
        this.j.G({
            kind: 1,
            reason: 4
        })
    };
    var gP = function(a, b) {
        Z.call(this, a, 1159);
        this.output = W(this);
        this.j = b
    };
    _.T(gP, Z);
    gP.prototype.g = function() {
        var a = this;
        this.output.La(this.j.getInterestGroupAdAuctionData({
            seller: "https://securepubads.g.doubleclick.net"
        }).catch(function(b) {
            a.I(b);
            return 4
        }))
    };
    gP.prototype.l = function() {
        this.output.G(4)
    };
    var Js = function(a, b, c, d, e, f) {
        Z.call(this, a, 1177);
        this.C = b;
        this.j = e;
        this.o = f;
        W(this, e);
        W(this, f);
        this.H = X(this, c);
        d && (this.K = X(this, d))
    };
    _.T(Js, Z);
    Js.prototype.g = function() {
        if (this.H.value) {
            var a;
            if (null == (a = this.K) ? 0 : a.value) this.j.G({
                kind: 1,
                reason: 6
            }), this.o.G(!1);
            else {
                a = new Dk;
                _.S(this, a);
                var b = new gP(this.context, this.C);
                J(a, b);
                b = new fP(this.context, b.output, this.j);
                J(a, b);
                b = new eP(this.context, this.j, this.o);
                J(a, b);
                a.run()
            }
        } else this.j.G({
            kind: 1,
            reason: 2
        }), this.o.G(!1)
    };
    var hP = function(a, b, c, d, e) {
        Z.call(this, a, 881);
        this.Fa = b;
        this.ha = c;
        this.j = d;
        this.o = e;
        this.output = W(this)
    };
    _.T(hP, Z);
    hP.prototype.g = function() {
        if (4 === _.Uf(au)) {
            var a = _.Km(this.ha, CA, 23);
            if (a) {
                var b;
                if (0 !== (null == (b = this.j) ? void 0 : b.kind)) throw new TypeError("Received remote auction config despite " + (this.j ? "invalid" : "absent") + " remarketing input.");
                this.output.G({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: Gi(this.ha, 3, 2),
                    requestId: this.j.requestId,
                    serverResponse: ul(vl(a, 1)),
                    resolveToConfig: !_.Q(this.ha, 14)
                })
            } else this.output.ba()
        } else {
            b = this.output;
            a = b.G;
            var c = this.ha,
                d = So(this.context, this.Fa),
                e = this.context.Qa,
                f = _.H(NE) ? void 0 : this.o,
                g = _.H(MF),
                h = _.Uf(KE),
                k = void 0 === h ? 0 : h;
            h = !_.Q(c, 14);
            var l = {};
            var m = _.qk(c, zA, 7);
            m = _.u(m);
            for (var n = m.next(); !n.done; n = m.next()) {
                n = n.value;
                var p = {},
                    r = void 0,
                    v = null == (r = e) ? void 0 : r.Zb.lc.Fd.lk;
                r = _.E(n, 1);
                if (_.E(n, 2).length) try {
                    if (p = JSON.parse(_.E(n, 2)), 1 > 100 * _.Bh()) {
                        var w = void 0;
                        null == (w = v) || w.Jc({
                            Sf: r,
                            status: "SUCCESS",
                            Wc: 100
                        })
                    }
                } catch (G) {
                    w = void 0, null == (w = v) || w.Jc({
                        Sf: r,
                        status: "ERROR",
                        Wc: 1
                    })
                } else w = void 0, null == (w = v) || w.Jc({
                    Sf: r,
                    status: "EMPTY",
                    Wc: 1
                });
                l[_.E(n, 1)] = p
            }
            if (e = _.Km(c, yA, 6)) l["https://googleads.g.doubleclick.net"] = e.toJSON(), l["https://td.doubleclick.net"] = e.toJSON();
            m = {};
            e = _.u(_.qk(c, BA, 11));
            for (n = e.next(); !n.done; n = e.next()) n = n.value, m[_.E(n, 1)] = _.dz(n, 2);
            n = {};
            0 !== _.dz(c, 21) && (n["*"] = _.dz(c, 21));
            if (0 < _.qk(c, AA, 32).length) {
                var y = {};
                e = _.u(_.qk(c, AA, 32));
                for (p = e.next(); !p.done; p = e.next()) p = p.value, y[_.E(p, 1)] = _.dz(p, 2)
            }
            p = {};
            null != Mm(c, 18) && (p["https://googleads.g.doubleclick.net"] = kt(c, 18), p["https://td.doubleclick.net"] = kt(c, 18));
            e = _.u(pe(c, 24, GA));
            for (v = e.next(); !v.done; v = e.next()) r = v.value, kt(r[1], 4) && (v = r[0], r = kt(r[1], 4), p[v] = r);
            e = _.E(c, 1).split("/td/")[0];
            var B;
            v = null == (B = _.Km(c, EA, 5)) ? void 0 : _.Xd(B);
            var C;
            null != v && null != (C = _.Km(v, DA, 5)) && _.xk(C, 2);
            y = _.x(Object, "assign").call(Object, {}, {
                seller: e,
                decisionLogicUrl: _.E(c, 1),
                trustedScoringSignalsUrl: _.E(c, 2),
                interestGroupBuyers: Gi(c, 3, 2),
                sellerExperimentGroupId: kt(c, 17),
                auctionSignals: JSON.parse(_.E(c, 4) || "{}"),
                sellerSignals: (null == v ? void 0 : v.toJSON()) || [],
                sellerTimeout: _.dz(c, 15) || 50,
                perBuyerExperimentGroupIds: p,
                perBuyerSignals: l,
                perBuyerTimeouts: m,
                perBuyerCumulativeTimeouts: n
            }, y ? {
                perBuyerGroupLimits: y
            } : {}, h ? {
                resolveToConfig: h
            } : {});
            if (null == c ? 0 : _.Q(HA(c), 25)) y.sellerCurrency = "USD", y.perBuyerCurrencies = _.x(Object, "fromEntries").call(Object, oe(c, 22, rd));
            _.E(c, 28) && (y.directFromSellerSignalsHeaderAdSlot = _.E(c, 28));
            f && (y.auctionNonce = f, y.additionalBids = _.z.Promise.resolve());
            g && oe(c, 33, rd).size && (y.deprecatedRenderURLReplacements = _.x(Object, "fromEntries").call(Object, (_.I = oe(c, 33, rd), _.x(_.I, "entries")).call(_.I)), (f = y.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (y.deprecatedRenderURLReplacements["${RENDER_DATA}"] = f));
            switch (k) {
                case 1:
                    y.allSlotsRequestedSizes = [{
                        width: c.getWidth(),
                        height: c.getHeight()
                    }]
            }
            f = Object;
            g = f.assign;
            k = _.E(c, 1);
            B = kt(c, 17);
            C = new EA;
            wi(HA(c), DA, 5) && (l = new DA, m = ez(az(HA(c), DA, 5), 2), l = _.re(l, 2, Wc(m), "0"), m = ez(az(HA(c), DA, 5), 4), l = _.re(l, 4, Wc(m), "0"), _.vi(C, 5, l));
            HA(c).getEscapedQemQueryId() && (l = HA(c).getEscapedQemQueryId(), _.Aj(C, 2, l));
            _.E(HA(c), 6) && (l = _.E(HA(c), 6), _.Aj(C, 6, l));
            _.Q(HA(c), 21) && _.Il(C, 21, !0);
            _.Q(HA(c), 4) && _.Il(C, 4, !0);
            _.E(HA(c), 11) && (l = _.E(HA(c), 11), _.Aj(C, 11, l));
            C = C.toJSON();
            l = _.dz(c, 15) || 50;
            if (_.Q(c, 30)) {
                if (null == d || !d.length) throw Error("top_td_without_component_auction");
            } else d = [y].concat(_.Ki(null != d ? d : []));
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
            _.E(c, 28) && (d.directFromSellerSignalsHeaderAdSlot = _.E(c, 28));
            a.call(b, d)
        }
    };
    hP.prototype.l = function() {
        this.output.ba()
    };
    var iP = function(a, b, c, d) {
        Z.call(this, a, 1105);
        this.adUnitPath = b;
        this.ha = c;
        this.storage = d
    };
    _.T(iP, Z);
    iP.prototype.g = function() {
        var a = Date.now();
        if (!_.H(Os) || Hs(a)) {
            var b = Gi(this.ha, 3, 2),
                c = xs(this.adUnitPath);
            if (_.Q(this.ha, 20)) {
                if (_.H(KF)) {
                    var d;
                    var e = (null == (d = _.Km(this.ha, FA, 29)) ? void 0 : kt(d, 2)) || 864E5
                } else e = 864E5;
                a = Ps(b, a + e);
                e = (b = this.storage.getItem(c)) ? _.qk(Ds(b), Es, 1) : [];
                var f;
                b = new dP;
                a = Bs(e, a);
                a = _.Em(b, 1, a);
                b = !(null == (f = _.Km(this.ha, FA, 29)) || !_.Q(f, 3));
                f = li(a, 2, b);
                this.storage.setItem(c, ql(f))
            } else _.H(SE) && this.storage.removeItem(c)
        }
    };
    bh({
        google_signals: bh({
            buyer_reporting_id: eh
        })
    });
    var Ts = navigator,
        Us = /(\$\{GDPR})/gi,
        Vs = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        Ws = /(\$\{ADDTL_CONSENT})/gi,
        Xs = /(\$\{AD_WIDTH})/gi,
        Ys = /(\$\{AD_HEIGHT})/gi,
        Zs = /(\$\{RENDER_DATA})/gi;
    var jP = function() {
            var a = this;
            this.promise = new _.z.Promise(function(b, c) {
                a.reject = c;
                a.resolve = b
            })
        },
        kP = function() {
            this.auctionSignals = new jP;
            this.topLevelSellerSignals = new jP;
            this.g = new jP;
            this.perBuyerSignals = new jP;
            this.perBuyerTimeouts = new jP;
            this.perBuyerCumulativeTimeouts = new jP;
            this.directFromSellerSignals = new jP;
            this.directFromSellerSignalsHeaderAdSlot = new jP;
            this.perBuyerCurrencies = new jP;
            this.resolveToConfig = new jP;
            this.deprecatedRenderURLReplacements = new jP
        },
        lP = function(a, b, c, d) {
            this.g = a;
            this.cg = b;
            this.interestGroupBuyers = c;
            this.Ab = d
        };
    var mP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Z.call(this, a, 1201);
        this.ga = b;
        this.Z = c;
        this.ha = d;
        this.ja = e;
        this.W = k;
        this.H = l;
        this.K = m;
        this.O = n;
        this.C = p;
        this.j = r;
        this.qa = jI(this);
        this.o = W(this);
        this.xa = Y(this, f);
        this.Ma = X(this, g);
        this.ua = X(this, h);
        this.fa = X(this, w);
        X(this, v);
        W(this, p);
        W(this, n.Ob);
        W(this, n.Ga);
        W(this, n.Ja);
        W(this, this.j)
    };
    _.T(mP, Z);
    mP.prototype.g = function() {
        var a = this.Ma.value,
            b = Math.round(performance.now() - a),
            c = this.ua.value;
        a = this.xa.value;
        var d = _.Km(this.ha, EA, 5),
            e = _.Q(d, 10),
            f = _.Q(d, 9),
            g = "string" === typeof a || at(a),
            h = 3 !== a && 2 !== a && 1 !== a;
        this.j.G(g && !f);
        h && gt(this.context, g, c, b, d);
        this.context.V.log(607368714, et, {
            Nk: b,
            ck: a,
            jm: d.getEscapedQemQueryId(),
            kl: _.E(d, 6)
        });
        var k, l;
        h = null != (l = null == (k = this.fa.value.componentAuctions) ? void 0 : k.length) ? l : 0;
        ft(this.context, a, b, c, !!this.ja, d, h, g);
        if (g)
            if (e) this.ga.deprecatedURNToURL(a, !0), this.C.G(!0), this.o.ba();
            else if (f) {
            _.Q(d, 17) ? Rs(0, 0, d) : this.ga.deprecatedURNToURL(a, !0);
            var m;
            Ss(this.O, this.j, this.H, this.K, this.W, null == (m = this.ha) ? void 0 : _.E(m, 25));
            this.C.G(!0);
            this.o.ba()
        } else {
            this.o.G(a);
            this.C.G(!0);
            if (_.H(RE)) {
                l = this.fa.value;
                m = this.ha;
                var n;
                k = 1 === (null == (n = l.componentAuctions) ? void 0 : n.length) && Is(l.componentAuctions[0].seller) && wi(m, xA, 26) ? Ay(ql(az(m, xA, 26)), 3) : ""
            } else k = void 0;
            n = k;
            dI(this.qa, $s(a, _.x(Object, "assign").call(Object, {}, {
                gdprApplies: null != Xn(this.Z, 3) ? _.Q(this.Z, 3) ? "1" : "0" : null,
                gl: sk(this.Z, 2),
                ak: sk(this.Z, 4),
                Wj: this.ha.getWidth().toString(),
                Uj: this.ha.getHeight().toString()
            }, n ? {
                nm: n
            } : {})))
        } else {
            Rs(b, 2 === a ? c : 0, d);
            if (!e) {
                var p;
                Ss(this.O, this.j, this.H, this.K, this.W, null == (p = this.ha) ? void 0 : _.E(p, 25))
            }
            this.C.G(!0);
            this.o.ba()
        }
    };
    mP.prototype.l = function() {
        var a, b, c = null == (a = this.ha) ? void 0 : _.Km(a, EA, 5);
        a = this.ja;
        var d = this.O,
            e = this.j,
            f = this.H,
            g = this.K,
            h = this.W;
        null == (b = this.ha) || _.E(b, 25);
        c && Rs(0, 0, c);
        null == a || a.Ab.abort();
        Ss(d, e, f, g, h)
    };
    var nP = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 1200);
        this.L = b;
        this.ua = c;
        this.o = d;
        this.ha = e;
        this.W = g;
        this.H = h;
        this.K = k;
        this.O = m;
        this.fa = n;
        this.C = iI(this);
        this.qa = W(this);
        this.ja = W(this);
        this.ga = W(this);
        this.j = Y(this, f);
        X(this, l);
        W(this, m.Ob);
        W(this, m.Ga);
        W(this, m.Ja);
        W(this, n)
    };
    _.T(nP, Z);
    nP.prototype.g = function() {
        if (this.j.value) {
            var a = HA(this.ha);
            ht(this.context, a);
            var b = performance.now();
            this.qa.G(b);
            b = _.dz(this.ha, 8) || 1E3;
            this.ja.G(b);
            var c = _.dz(a, 14) || -1,
                d = _.dz(a, 13) || -1;
            d = 0 < d && this.L.j >= d;
            if (0 < c && this.L.l >= c || d) this.C.G(1);
            else if (++this.L.l, ++this.L.j, this.j.value.signal = AbortSignal.timeout(b), _.Q(a, 15)) --this.L.l, this.C.La(new _.z.Promise(function(e) {
                setTimeout(function() {
                    e(1)
                }, 0)
            }));
            else {
                if (this.o && this.j.value.serverResponse) throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                a = this.o ? oP(this.j.value, b, this.o) : pP(this, this.j.value);
                --this.L.l;
                this.C.La(a)
            }
        } else null == (a = this.o) || a.Ab.abort(), Ss(this.O, this.fa, this.H, this.K, this.W, _.E(this.ha, 25)), this.ga.G(!1)
    };
    var pP = function(a, b) {
            var c, d;
            return null == (d = (c = a.ua).runAdAuction) ? void 0 : d.call(c, b).catch(function(e) {
                if (e instanceof DOMException && "TimeoutError" === e.name) return 2;
                _.H(PE) && e instanceof Error && a.I(e);
                return 3
            })
        },
        oP = function(a, b, c) {
            Ns(a, c);
            setTimeout(function() {
                c.Ab.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, b);
            return c.g
        };
    nP.prototype.l = function() {
        var a, b = null == (a = this.ha) ? void 0 : _.Km(a, EA, 5);
        a = this.o;
        var c = this.O,
            d = this.fa,
            e = this.H,
            f = this.K,
            g = this.W;
        _.E(this.ha, 25);
        b && Rs(0, 0, b);
        null == a || a.Ab.abort();
        Ss(c, d, e, f, g)
    };
    var qP = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1202);
        this.ha = b;
        this.C = c;
        this.j = d;
        this.o = Y(this, f);
        this.H = X(this, e);
        lI(this, g);
        W(this, d.Ob);
        W(this, d.Ga);
        W(this, d.Ja)
    };
    _.T(qP, Z);
    qP.prototype.g = function() {
        if (this.o.value) {
            Um(this.C) || (this.H.value.style.display = "");
            var a = this.o.value;
            var b = this.context.Qa;
            var c = _.E(this.ha, 31);
            c ? at(a) ? (b.Zb.lc.Fd.lh.wh.Jc({
                Wc: 1,
                status: "FAILED_FENCED_FRAME"
            }), b = null) : (a = c.replace("%%srcfledge%%", a), a.length === c.length && a === c ? (b.Zb.lc.Fd.lh.wh.Jc({
                Wc: 1,
                status: "FAILED_UNMODIFIED"
            }), b = null) : (b.Zb.lc.Fd.lh.wh.Jc({
                Wc: 1,
                status: "OK"
            }), b = a)) : b = null;
            b ? this.j.Ga.G({
                kind: 0,
                hb: b
            }) : this.j.Ga.G({
                kind: 2,
                re: this.o.value
            });
            this.j.Ja.G(new _.an(this.ha.getWidth(), this.ha.getHeight()));
            this.j.Ob.G(!1)
        }
    };
    var rP = function(a, b, c) {
        Z.call(this, a, 1054);
        this.j = b;
        this.output = jI(this);
        this.o = X(this, c)
    };
    _.T(rP, Z);
    rP.prototype.g = function() {
        this.o.value || this.j();
        this.output.notify()
    };
    var sP = function(a, b, c, d, e, f) {
        Z.call(this, a, 1053);
        this.slotId = b;
        this.P = c;
        this.L = d;
        this.Oa = e;
        this.j = W(this);
        this.o = X(this, f)
    };
    _.T(sP, Z);
    sP.prototype.g = function() {
        this.o.value ? (ot(this.slotId, this.L, this.P, this.Oa), this.j.G(!1)) : this.j.G(!0)
    };
    var tP = function(a, b, c, d) {
        Z.call(this, a, 1055);
        this.j = d;
        lI(this, c);
        this.o = X(this, b);
        jI(this, this.j)
    };
    _.T(tP, Z);
    tP.prototype.g = function() {
        this.o.value && this.j.notify()
    };
    var Au = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B) {
        Z.call(this, a, 1179);
        this.slotId = b;
        this.T = d;
        this.L = e;
        this.Z = f;
        this.C = g;
        this.O = l;
        this.o = m;
        this.P = n;
        this.fa = p;
        this.Oa = r;
        this.ha = v;
        this.j = w;
        this.ja = y;
        this.ga = B;
        this.H = X(this, h);
        this.K = X(this, k);
        this.W = Y(this, c)
    };
    _.T(Au, Z);
    Au.prototype.g = function() {
        var a = new Dk;
        _.S(this, a);
        var b = W(this);
        if (this.ha) {
            var c = HA(this.ha),
                d = _.Q(c, 10);
            if (this.ha.getWidth() && this.ha.getHeight())
                if (d)
                    if (Ss({
                            Ob: b,
                            Ga: this.j.Ga,
                            Ja: this.j.Ja
                        }, this.j.md, this.H.value, this.K.value, this.C), _.Q(c, 17)) {
                        Rs(0, 0, c);
                        var e;
                        null == (e = this.o) || e.Ab.abort()
                    } else uP(this, a, this.ha);
            else b = uP(this, a, this.ha);
            else {
                Ss({
                    Ob: b,
                    Ga: this.j.Ga,
                    Ja: this.j.Ja
                }, this.j.md, this.H.value, this.K.value, this.C);
                Rs(0, 0, c);
                var f;
                null == (f = this.o) || f.Ab.abort()
            }
        } else Ss({
            Ob: b,
            Ga: this.j.Ga,
            Ja: this.j.Ja
        }, this.j.md, this.H.value, this.K.value, this.C), _.H(TE) ? null == (c = this.o) || c.Ab.abort(new DOMException("runAdAuction", "ThrottledError")) : null == (d = this.o) || d.Ab.abort();
        e = new sP(this.context, this.slotId, this.P, this.L, this.Oa, b);
        J(a, e);
        b = new rP(this.context, this.fa, b);
        J(a, b);
        b = new tP(this.context, e.j, b.output, this.j.Pc);
        J(a, b);
        a.run()
    };
    var uP = function(a, b, c) {
        if (2 === _.Uf(au) && a.W.value && _.Q(c, 20) && 0 !== Gi(c, 3, 2).length) {
            var d = new iP(a.context, a.slotId.getAdUnitPath(), c, a.W.value);
            J(b, d)
        }
        var e = new hP(a.context, a.T, c, a.ja, a.ga);
        J(b, e);
        var f = navigator,
            g = {
                Ga: a.j.Ga,
                Ja: a.j.Ja,
                Ob: new mq
            };
        d = g.Ob;
        var h = new nP(a.context, a.L, f, a.o, c, e.output, a.C, a.H.value, a.K.value, a.O, g, a.j.md);
        J(b, h);
        e = new mP(a.context, f, a.Z, c, a.o, h.C, h.qa, h.ja, a.C, a.H.value, a.K.value, g, h.ga, a.j.md, a.O, e.output);
        J(b, e);
        c = new qP(a.context, c, Ar(a.T), g, a.O, e.o, e.qa);
        J(b, c);
        a = new jr(a.context, a.slotId, nt);
        J(b, a);
        return d
    };
    var vP = function() {
        MO.apply(this, arguments)
    };
    _.T(vP, MO);
    var wP = function(a, b) {
            var c = _.hg(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Wd;
            c.name = a.Wd;
            c.title = a.Xd;
            Array.isArray(a.l) ? null != a.l[0] && null != a.l[1] && (c.width = String(a.l[0]), c.height = String(a.l[1])) : (c.width = "100%", c.height = "0");
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
        xP = function(a, b) {
            "string" !== typeof a.l && (b.width = String(a.l[0]), b.height = String(a.l[1]));
            var c = Rl(a.context, 774, function() {
                a.loaded(b);
                _.ig(b, "load", c)
            });
            _.Jf(b, "load", c);
            _.Bp(a, function() {
                return _.ig(b, "load", c)
            });
            a.g.Yf.appendChild(b)
        };
    var yP = function() {
        vP.apply(this, arguments)
    };
    _.T(yP, vP);
    yP.prototype.F = function() {
        var a = wP(this, !this.g.bn);
        if ("string" === typeof this.Ra.re) {
            var b = this.Ra.re;
            /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = Cf(b), a.src = _.lb(b).toString())
        } else a.config = this.Ra.re;
        xP(this, a);
        if (_.H(OF) && this.g.pj) {
            b = this.g.Yf;
            var c = Gf(this.g.pj);
            a.setAttribute("class", "GoogleActiveViewElement");
            a.setAttribute("data-google-av-cxn", c.Tj);
            a.setAttribute("data-google-av-itpl", c.tl.toString());
            a.setAttribute("data-google-av-ufs-integrator-metadata", btoa(ql(c.metadata)));
            c = b.appendChild;
            var d = document.createElement("script");
            d.setAttribute("id", "googleActiveViewDisplayScript");
            var e = _.Df(wz);
            mb(d, e);
            d.async = !0;
            c.call(b, d)
        }
        return a
    };
    yP.prototype.j = function() {
        return !1
    };
    var zP = navigator,
        AP = function(a, b, c, d, e, f, g, h) {
            Z.call(this, a, 1089);
            this.bc = b;
            this.X = c;
            this.T = d;
            this.j = f;
            this.o = h;
            W(this, h);
            e && (this.C = Y(this, e));
            g && (this.H = Y(this, g))
        };
    _.T(AP, Z);
    AP.prototype.g = function() {
        var a = {};
        if (1 === this.bc)
            for (var b = _.u(this.X), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = this.T[c.getDomId()];
                a[c.getId()] = BP(this, d, ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"], this.j)
            } else if (2 === this.bc) {
                b = null == (c = this.C) ? void 0 : c.value;
                if (!b) {
                    this.o.ba();
                    return
                }
                c = null == (d = this.H) ? void 0 : d.value;
                d = _.u(this.X);
                for (var e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f = b.get(e.getId()),
                        g = void 0;
                    if (null != (g = f) && g.length) {
                        g = this.T[e.getDomId()];
                        var h = void 0,
                            k = null == (h = c) ? void 0 : h.get(e.getAdUnitPath());
                        a[e.getId()] = BP(this, g, f, this.j, k)
                    }
                }
            }
        this.o.G(a)
    };
    var BP = function(a, b, c, d, e) {
        var f = new kP,
            g = new AbortController;
        b = Ms({
            cg: f,
            Ab: g,
            interestGroupBuyers: c,
            Lh: So(a.context, b),
            jl: d,
            Vk: e,
            hm: _.H(MF)
        });
        b = zP.runAdAuction(b).catch(function(h) {
            if (h instanceof DOMException && "TimeoutError" === h.name) return 2;
            if (_.H(TE) && h instanceof DOMException && "ThrottledError" === h.name) return 4;
            _.H(PE) && h instanceof Error && a.I(h);
            return 3
        });
        return new lP(b, f, c, g)
    };
    var CP = function(a, b, c, d) {
        Z.call(this, a, 1230);
        this.X = b;
        this.o = d;
        this.j = Y(this, c);
        W(this, d)
    };
    _.T(CP, Z);
    CP.prototype.g = function() {
        var a = this.j.value,
            b = new _.z.Map;
        if (null != a && a.size && !nw()) {
            var c = Wf(OE);
            if (0 !== c.length)
                for (var d = _.u(this.X), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f = a.get(e.getId()),
                        g = void 0;
                    if (null != (g = f) && g.length) {
                        g = new _.z.Map;
                        f = _.u(f);
                        for (var h = f.next(); !h.done; h = f.next()) h = h.value, _.x(c, "includes").call(c, _.Qh(h).toString()) && g.set(h, Math.floor(63001 * _.Bh()));
                        g.size && b.set(e.getAdUnitPath(), g)
                    }
                }
        }
        this.o.G(b)
    };
    var DP = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1106);
        this.Z = b;
        this.H = c;
        this.o = d;
        this.X = e;
        this.C = f;
        this.K = g;
        this.j = W(this);
        W(this, g)
    };
    _.T(DP, Z);
    DP.prototype.g = function() {
        for (var a = Fs(this.o, this.H, this.Z, this.C), b = new _.z.Map, c = qt(a), d = new _.z.Map, e = _.u(this.X), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            f = g.getAdUnitPath();
            var h = a.get(xs(f)),
                k = void 0,
                l = void 0,
                m = void 0,
                n = null != (m = null != (l = c) ? l : null == (k = h) ? void 0 : _.qk(k, Es, 1).map(function(p) {
                    return _.E(p, 1)
                })) ? m : [];
            b.set(g.getId(), n);
            if (!d.has(f)) {
                g = [];
                n = _.u(n.sort());
                for (h = n.next(); !h.done; h = n.next()) g.push(_.Qh(h.value));
                d.set(f, g)
            }
        }
        this.j.G(b);
        this.K.G(d)
    };
    var rt = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 1170);
        this.bc = b;
        this.T = c;
        this.Z = d;
        this.o = e;
        this.C = Date.now();
        this.j = {
            Vg: W(this)
        };
        2 === b && this.o && (this.j.wg = W(this));
        _.H(UE) && (this.j.Se = W(this));
        this.O = X(this, f);
        this.K = X(this, g);
        h && (this.H = Y(this, h));
        k && (this.W = X(this, k))
    };
    _.T(rt, Z);
    rt.prototype.g = function() {
        var a = this.O.value,
            b;
        if (!this.K.value || !a.length || (null == (b = this.W) ? 0 : b.value) || _.H(Os) && !Hs(this.C)) {
            this.j.Vg.ba();
            var c;
            null == (c = this.j.wg) || c.ba();
            var d;
            null == (d = this.j.Se) || d.ba()
        } else {
            b = new Dk;
            _.S(this, b);
            if (2 === this.bc && this.o) {
                var e, f;
                var g = new DP(this.context, this.Z, this.o, this.C, a, null != (f = null == (e = this.H) ? void 0 : e.value) ? f : void 0, this.j.wg);
                J(b, g);
                g = g.j;
                _.H(UE) && (e = new CP(this.context, a, g, this.j.Se), J(b, e))
            }
            var h, k;
            a = new AP(this.context, this.bc, a, this.T, g, null != (k = null == (h = this.H) ? void 0 : h.value) ? k : void 0, this.j.Se, this.j.Vg);
            J(b, a);
            b.run()
        }
    };
    var EP = function(a, b, c) {
        Z.call(this, a, 1216);
        this.j = b;
        this.output = iI(this);
        this.o = X(this, c);
        this.wa = this.context.Qa
    };
    _.T(EP, Z);
    EP.prototype.g = function() {
        var a = this,
            b = this.o.value,
            c = new _.z.Map;
        if (!b.length || _.H(LE)) this.output.G(c);
        else {
            var d = this.j,
                e = _.dg(),
                f = b.map(function(g) {
                    return d.createAuctionNonce().then(function(h) {
                        c.set(g, h)
                    }).catch(function(h) {
                        a.I(h)
                    })
                });
            this.output.La(_.z.Promise.all(f).then(function() {
                a.context.Cm && a.wa.Zb.lc.Fd.zk.Qc({
                    Tc: _.dg() - e,
                    Ml: b.length
                });
                return c
            }))
        }
    };
    var FP = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1166);
        this.fa = b;
        this.aa = c;
        this.H = d;
        this.j = iI(this);
        this.o = W(this);
        this.C = W(this);
        this.O = X(this, e);
        this.W = X(this, f);
        lI(this, g);
        this.K = X(this, h)
    };
    _.T(FP, Z);
    FP.prototype.g = function() {
        var a = this,
            b = this.O.value;
        if (b) {
            var c = Fx(this.W.value, {
                    uuid: this.fa
                }),
                d = this.aa.createElement("script");
            b = {
                source: b,
                credentials: this.K.value ? "include" : "omit",
                resources: [c.toString()]
            };
            d.setAttribute("type", "webbundle");
            kb(d, ib(JSON.stringify(b).replace(/</g, "\\u003C")));
            this.aa.head.appendChild(d);
            this.o.G(d);
            this.C.G(b);
            this.j.La(GP(c).catch(function(e) {
                e instanceof kH ? a.H(e) : (a.I(e), a.l(e));
                return null
            }))
        } else this.j.ba(), this.o.ba(), this.C.ba()
    };
    var GP = function(a) {
        var b, c;
        return _.Lf(function(d) {
            if (1 == d.g) return d.yield(fetch(a.toString()).catch(function() {
                throw new kH("Failed to fetch bundle index.");
            }), 2);
            if (3 != d.g) return b = d.A, d.yield(b.text(), 3);
            c = d.A;
            return d.return(KA(c))
        })
    };
    var HP = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 1167);
        this.aa = b;
        this.Z = c;
        this.H = d;
        this.j = e;
        this.C = f;
        this.o = X(this, g);
        this.O = Y(this, h);
        this.W = Y(this, k);
        this.fa = Y(this, l);
        m && (this.K = Y(this, m))
    };
    _.T(HP, Z);
    HP.prototype.g = function() {
        var a = this.O.value,
            b = this.W.value,
            c = this.fa.value;
        if (a)
            if (b && c) {
                var d = Gi(a, 1, 2),
                    e = Gi(a, 2, 2);
                a = Gi(a, 3, 2);
                if (d.length !== e.length) this.j(new jH("Received " + d.length + " ad URLs but " + e.length + " metadatas"));
                else {
                    c.resources = [].concat(_.Ki(d.filter(function(f) {
                        return f
                    })), _.Ki(a.map(function(f) {
                        return "https://securepubads.g.doubleclick.net" + f
                    })));
                    c.resources.length ? (a = _.hg("SCRIPT"), a.setAttribute("type", "webbundle"), kb(a, ib(JSON.stringify(c).replace(/</g, "\\u003C"))), this.aa.head.removeChild(b), this.aa.head.appendChild(a)) : this.aa.head.removeChild(b);
                    for (b = 0; b < d.length; b++) c = void 0, this.H(b, e[b], {
                        kind: 1,
                        url: d[b]
                    }, this.o.value, this.Z, null == (c = this.K) ? void 0 : c.value, void 0, void 0);
                    this.C(d.length - 1, this.o.value, this.Z)
                }
            } else this.j(Error("Lost bundle script"))
    };
    var IP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        Dk.call(this);
        e = new FP(a, f, h, c, m, n, p, r);
        J(this, e);
        J(this, new HP(a, h, g, b, c, d, k, e.j, e.o, e.C, l));
        this.g = {
            output: e.j
        }
    };
    _.T(IP, Dk);
    var Dt = new _.z.Set,
        JP = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.t.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new Lo("Reached Limit for addEventListener");
        }, 3E5),
        KP = function(a, b, c) {
            _.V.call(this);
            this.context = a;
            this.R = b;
            this.l = c;
            this.g = [];
            this.enabled = !1;
            this.J = 0;
            this.F = new _.z.Map;
            Dt.add(this);
            this.R.info(KK(this.getName()))
        };
    _.T(KP, _.V);
    var Ft = function(a) {
        a.enabled || (a.enabled = !0, Zn(6, a.context), a.o())
    };
    KP.prototype.slotAdded = function(a, b) {
        this.g.push(a);
        var c = new RN(a, this.getName());
        lt(this.l, "slotAdded", 818, c);
        this.R.info(LK(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        _.se(b, 4, _.ed, a)
    };
    KP.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return Ia(b.g, c)
        })
    };
    KP.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.J >= _.Uf(WD) && 0 < _.Uf(WD)) return JP(), !1;
        if (!c.IntersectionObserver && (_.I = ["impressionViewable", "slotVisibilityChanged"], _.x(_.I, "includes")).call(_.I, a)) return P(this.R, zL()), !1;
        var e;
        if (null == (e = this.F.get(a)) ? 0 : e.has(b)) return !1;
        this.F.has(a) || this.F.set(a, new _.z.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (k) {
                d.R.error($K(String(k), a));
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            }
        };
        this.F.get(a).set(b, c);
        this.l.listen(a, c);
        this.J++;
        return !0
    };
    KP.prototype.removeEventListener = function(a, b) {
        var c, d = null == (c = this.F.get(a)) ? void 0 : c.get(b);
        if (!d || !$J(this.l, a, d)) return !1;
        this.J--;
        return this.F.get(a).delete(b)
    };
    var vt = function(a) {
        for (var b = _.u(Dt), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var zt = function(a, b, c, d) {
        KP.call(this, a, b, d);
        this.j = c;
        this.ads = new _.z.Map;
        this.Rc = !1
    };
    _.T(zt, KP);
    zt.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.Rc = a)
    };
    var ML = function(a, b) {
            var c;
            return a.j.enabled && !(null == (c = a.ads.get(b)) || !c.Yl)
        },
        NL = function(a, b, c, d) {
            b = new NN(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            lt(a.l, "slotRenderEnded", 67, b)
        };
    zt.prototype.getName = function() {
        return "companion_ads"
    };
    zt.prototype.slotAdded = function(a, b) {
        var c = this;
        a.listen(cK, function(d) {
            Xn(d.detail, 11) && (LP(c, a).Yl = !0)
        });
        KP.prototype.slotAdded.call(this, a, b)
    };
    zt.prototype.o = function() {};
    var LP = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.Bp(b, function() {
                return a.ads.delete(b)
            }));
            return c
        },
        KL = function(a, b) {
            var c = rn().g,
                d = rn().A;
            if (a.j.enabled) {
                var e = {
                    ic: 3
                };
                a.I && (e.Gd = a.I);
                a.C && (e.Hd = a.C);
                b = null != b ? b : a.g;
                c = dn(c, d);
                d = e.Gd;
                var f = e.Hd;
                d && "number" !== typeof d || f && "number" !== typeof f || a.j.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.R.error(RK(b[0].getDomId()))
        },
        LL = function(a, b) {
            return a.g.filter(function(c) {
                return _.x(b, "includes").call(b, c.toString())
            })
        };
    var At = function(a, b, c) {
        KP.call(this, a, b, c)
    };
    _.T(At, KP);
    At.prototype.getName = function() {
        return "content"
    };
    At.prototype.o = function() {};
    var tw = function(a, b) {
        this.configuration = xr();
        this.wa = a;
        this.g = b
    };
    tw.prototype.log = function(a, b, c) {
        var d, e = null != (d = c.ob) ? d : this.configuration[a].bg;
        0 === e || 1 / e < this.g || (b = b(_.x(Object, "assign").call(Object, {}, {
            ob: e
        }, c)), this.configuration[a].send(this.wa, b))
    };
    var MP = _.Ew(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        NP = _.Ew(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        OP = new _.z.Map([
            [2, {
                Lg: "page_level_ads"
            }],
            [5, {
                Lg: "shoppit"
            }],
            [6, {
                Lg: "side_rails"
            }]
        ]),
        PP = function(a) {
            var b = void 0 === b ? OP : b;
            this.context = a;
            this.g = b;
            this.A = new _.z.Map;
            this.loaded = new _.z.Set
        },
        RP;
    PP.prototype.load = function(a) {
        var b = _.QP(this, a),
            c, d = (null != (c = this.g.get(a.module)) ? c : {}).Lg;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            d = (c = _.Jm(172)) && "pagead2.googlesyndication.com" === jB((c.src || "").match(_.iB)[3] || null) ? _.Df(NP, this.context.Pa, d) : _.Df(MP, this.context.Pa, d);
            c = {};
            var e = _.Uf(zE);
            e && (c.cb = e);
            d = _.x(Object, "keys").call(Object, c).length ? _.Cx(d, c) : d;
            RP(this, a);
            _.rp(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.QP = function(a, b) {
        b = b.module;
        a.A.has(b) || a.A.set(b, new _.ai);
        return a.A.get(b)
    };
    RP = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = Rl(a.context, 340, function(e) {
            if (a.g.has(c) && "function" === typeof e) {
                var f = a.g.get(c);
                f = (void 0 === f.Gk ? [] : f.Gk).map(function(g) {
                    return _.QP(a, g).promise
                });
                _.z.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(No(), b, {
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
    var fu = function(a, b) {
        Z.call(this, a, 980);
        this.output = new $r;
        this.j = [];
        this.o = X(this, b)
    };
    _.T(fu, Z);
    fu.prototype.g = function() {
        for (var a = _.u((_.I = [this.o.value, this.j.map(function(c) {
                return c.value
            })], _.x(_.I, "flat")).call(_.I)), b = a.next(); !b.done; b = a.next()) vh(b.value);
        this.output.notify()
    };
    var Tt = function(a, b) {
        Z.call(this, a, 892, _.Uf(sE));
        this.Zc = W(this);
        this.jd = W(this);
        this.ed = W(this);
        this.Nb = W(this);
        this.zd = W(this);
        this.Cd = W(this);
        this.oc = W(this);
        this.j = kI(this, b);
        this.Mb = W(this)
    };
    _.T(Tt, Z);
    Tt.prototype.g = function() {
        var a = this.j.value;
        if (!a) throw Error("config timeout");
        this.Zc.Ha(_.Km(a, Xz, 3));
        this.jd.Ha(_.Km(a, Zz, 2));
        var b = this.ed,
            c = b.G;
        var d = je(a, 4, Ic, 2);
        c.call(b, d);
        b = this.Nb;
        c = b.Ha;
        d = _.qk(a, Tz, 6);
        c.call(b, d);
        b = this.zd;
        c = b.Ha;
        d = _.qk(a, Mv, 5);
        c.call(b, d);
        this.Cd.Ha(_.Km(a, iA, 7));
        var e;
        b = this.oc;
        c = b.G;
        d = _.z.Set;
        var f;
        null == (e = _.Km(a, Uz, 1)) ? f = void 0 : f = Gi(e, 6, 2);
        c.call(b, new d(f || []));
        this.Mb.Ha(_.Km(a, kA, 8))
    };
    Tt.prototype.J = function(a) {
        this.l(a)
    };
    Tt.prototype.l = function(a) {
        this.Zc.lb(a);
        this.jd.lb(a);
        this.ed.G([]);
        this.Nb.G([]);
        this.zd.G([]);
        this.Cd.ba();
        this.Mb.ba()
    };
    var Mt = function(a, b) {
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
                d.Sc || (c.error = Error("malformed response"), d.G([]))
            }
        })
    };
    _.T(Mt, Z);
    Mt.prototype.g = function() {
        if (this.error) throw this.error;
        this.j.G(Ke(lA, this.o.value))
    };
    var SP = function(a, b) {
        Z.call(this, a, 1081);
        this.Db = W(this);
        this.j = Y(this, b)
    };
    _.T(SP, Z);
    SP.prototype.g = function() {
        this.j.value ? this.Db.G(this.j.value) : this.Db.ba()
    };
    var TP = new _.z.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        UP = function(a, b, c, d, e, f, g, h, k) {
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
    _.T(UP, Z);
    UP.prototype.g = function() {
        var a = this,
            b = this.o.getAdUnitPath(),
            c = TP.get(_.og(this.o, 2, 0));
        if (b && c) {
            var d, e = null != (d = this.ca) ? d : this.j.g;
            b = new tN(this.context, this.aa, b, c, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, e, this.j, this.H, this.R, !1, this.C);
            _.S(this, b);
            b.run()
        }
    };
    var eu = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1082);
        this.googletag = b;
        this.ca = c;
        this.H = d;
        this.o = e;
        this.R = f;
        this.C = W(this);
        this.j = new SP(this.context, this.C);
        this.Db = this.j.Db;
        _.S(this, this.j);
        this.K = X(this, g)
    };
    _.T(eu, Z);
    eu.prototype.g = function() {
        if (_.H(xE)) {
            for (var a = [], b = _.u(this.K.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, tl(c, jA)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
            }
            this.C.Ha(null == d ? void 0 : _.Km(d, dA, 4));
            d = new Dk;
            _.S(this, d);
            a = _.u(a);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, J(d, new UP(this.context, document, this.googletag, null != (c = this.ca) ? c : this.o.g, this.H, this.o, this.R, _.Km(b, fA, wl(b, jA, 5)), _.Km(b, dA, 4)));
            J(d, this.j);
            d.run()
        } else this.Db.ba()
    };
    var nu = function(a, b, c, d, e, f, g, h) {
        _.V.call(this);
        this.context = a;
        this.j = b;
        this.l = c;
        this.R = d;
        this.L = e;
        this.g = f;
        this.ib = g;
        this.F = h
    };
    _.T(nu, _.V);
    var uw = function(a) {
        pI.call(this, function(b, c) {
            Vl(a, b, c);
            var d;
            null == (d = console) || d.error(c)
        })
    };
    _.T(uw, pI);
    var VP = function() {
        vP.apply(this, arguments)
    };
    _.T(VP, vP);
    VP.prototype.F = function() {
        var a = this,
            b = this.g,
            c = b.mj;
        b = b.Te;
        var d = wP(this);
        if (null == c ? 0 : c.length)
            if (_.jy) {
                c = _.u(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.Ki(c));
        b && (d.allow = b);
        xP(this, d);
        Xl(this.context, 653, function() {
            var f;
            if (f = kk(a.Ra.hb)) {
                var g = f.toString().toLowerCase();
                f = -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") || _.H(VF) ? f : kk("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>")
            }
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            na() && g.open("text/html", "replace");
            g.write(_.Tx(f));
            var l, m, n;
            if (kx(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    VP.prototype.j = function() {
        return !0
    };
    var Mu = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, M, R, N, aa) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.L = c;
        this.P = d;
        this.za = e;
        this.ab = f;
        this.ub = g;
        this.Oa = h;
        this.isBackfill = k;
        this.Tb = l;
        this.ha = m;
        this.B = n;
        this.j = W(this);
        this.C = W(this);
        this.o = jI(this);
        this.K = X(this, p);
        this.ja = X(this, r);
        lI(this, v);
        this.W = X(this, w);
        this.H = X(this, y);
        this.O = X(this, B);
        lI(this, G);
        this.qa = Y(this, C);
        lI(this, F);
        this.ga = X(this, M);
        lI(this, R);
        aa && lI(this, aa);
        N && (this.fa = Y(this, N))
    };
    _.T(Mu, Z);
    Mu.prototype.g = function() {
        var a = this.K.value;
        if (0 === a.kind && null == a.hb) throw new jH("invalid html");
        var b, c, d;
        a: {
            var e = this.context,
                f = {
                    aa: document,
                    slotId: this.slotId,
                    L: this.L,
                    P: this.P,
                    za: this.za,
                    size: this.O.value,
                    uj: this.W.value,
                    Yf: this.H.value,
                    Oa: this.Oa,
                    ub: this.ub,
                    mj: this.qa.value,
                    isBackfill: this.isBackfill,
                    Tb: this.Tb,
                    Te: this.ga.value,
                    bn: null == (b = this.ha) ? void 0 : _.Q(b, 14),
                    Of: null == (c = this.fa) ? void 0 : c.value,
                    ab: this.ab,
                    pj: _.H(OF) ? null == (d = this.ha) ? void 0 : _.Km(d, EA, 5) : void 0
                };b = this.ja.value;c = a.kind;
            switch (c) {
                case 0:
                    a = new(b ? PO : VP)(e, a, f);
                    break a;
                case 2:
                    a = new yP(e, a, f);
                    break a;
                default:
                    gb(c)
            }
            a = void 0
        }
        _.S(this, a);
        e = a.render();
        WP(this, this.B, e);
        this.B.top && this.B.top !== this.B && _.fl(this.B.top) && WP(this, this.B.top, e);
        this.o.notify();
        this.j.G(e);
        this.C.G(a.j())
    };
    var WP = function(a, b, c) {
        Cp(a, a.id, b, "message", function(d) {
            c.contentWindow === d.source && lt(a.slotId, kr, 824, d)
        })
    };
    var su = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.ra = c;
        this.gb = d;
        this.height = e;
        this.output = W(this)
    };
    _.T(su, Z);
    su.prototype.g = function() {
        if (null == this.height) this.output.ba();
        else {
            var a = Math.round(.3 * this.ra),
                b;
            2 !== this.format && 3 !== this.format || null == (b = this.gb) || !_.Q(b, 12, !1) || 0 >= a || this.height <= a ? this.output.G(this.height) : this.output.G(a)
        }
    };
    var Bu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.ca = c;
        this.o = d;
        this.aa = f;
        this.L = g;
        this.ub = m;
        this.output = W(this);
        this.K = 2 === e || 3 === e;
        this.j = X(this, h);
        this.H = X(this, k);
        this.C = Y(this, l);
        n && lI(this, n)
    };
    _.T(Bu, Z);
    Bu.prototype.g = function() {
        var a = sq(this.ca, this.o),
            b = gn(this.slotId, this.aa) || Xp(this.j.value, pn(this.slotId), a);
        this.H.value && !a && (b.style.display = "inline-block");
        this.K ? lK(this.L, this.slotId, function() {
            return void _.cB(b)
        }) : _.Bp(this, function() {
            return void _.cB(b)
        });
        a = XP(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.output.G(b)
    };
    var XP = function(a) {
        var b = a.j.value,
            c, d = null == (c = a.C.value) ? void 0 : c.height;
        if (b && !a.ub && d) {
            c = a.ca;
            var e;
            a = (null != (e = rq(a.o, 23)) ? e : _.Q(c, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else a = 0;
        return a
    };
    var qu = function(a, b) {
        Z.call(this, a, 859);
        this.B = b;
        this.output = W(this)
    };
    _.T(qu, Z);
    qu.prototype.g = function() {
        this.output.G(!_.fl(this.B.top))
    };
    var Iu = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.aa = c;
        this.output = W(this)
    };
    _.T(Iu, Z);
    Iu.prototype.g = function() {
        var a = [],
            b = this.aa;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (_.I = c.features(), _.x(_.I, "includes")).call(_.I, "attribution-reporting") && a.push("attribution-reporting");
        switch (this.format) {
            case 5:
            case 4:
                _.H(ID) && a.push("autoplay");
                break;
            case 7:
                _.H(JD) && a.push("autoplay")
        }
        a.length ? this.output.G(a.join(";")) : this.output.G("")
    };
    var $u = function(a, b, c, d) {
        Z.call(this, a, 1207);
        this.za = c;
        this.slotId = d;
        lI(this, b)
    };
    _.T($u, Z);
    $u.prototype.g = function() {
        lt(this.za, "impressionViewable", 715, new ON(this.slotId, "publisher_ads"))
    };
    var Zu = function(a, b, c, d) {
        eO.call(this, a, b, c);
        lI(this, d)
    };
    _.T(Zu, eO);
    var Vu = function(a, b, c, d, e, f) {
        f = void 0 === f ? pu : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.aa = d;
        this.za = e;
        this.C = f;
        this.j = this.o = -1;
        this.K = _.Az(function() {
            lt(g.za, "slotVisibilityChanged", 716, new PN(g.slotId, "publisher_ads", g.j))
        }, 200);
        this.H = X(this, c);
        var h = new $r;
        aK(this.slotId).then(function() {
            return void h.notify()
        });
        lI(this, h)
    };
    _.T(Vu, Z);
    Vu.prototype.g = function() {
        var a = this,
            b = this.C(Rl(this.context, this.id, function(c) {
                c = _.u(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.x(Number, "isFinite").call(Number, a.o) && YP(a)
            }));
        b && (b.observe(this.H.value), Cp(this, this.id, this.aa, "visibilitychange", function() {
            YP(a)
        }), _.Bp(this, function() {
            b.disconnect()
        }))
    };
    var YP = function(a) {
        var b = Math.floor(JH(a.aa) ? 0 : a.o);
        if (0 > b || 100 < b || b === a.j ? 0 : -1 !== a.j || 0 !== b) a.j = b, a.K()
    };
    var Gu = function(a, b, c, d, e, f) {
        Z.call(this, a, 719);
        this.ca = b;
        this.o = c;
        this.uh = d;
        this.output = W(this);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(Gu, Z);
    Gu.prototype.g = function() {
        var a = this.j.value.kind;
        switch (a) {
            case 0:
                this.j.value.hb ? this.C.value ? (a = new Sn, a = li(a, 3, this.uh), _.Q(Yn([a, this.ca.Ec(), this.o.Ec()]), 3) ? this.output.G(uJ) : this.output.ba()) : this.output.ba() : this.output.ba();
                break;
            case 2:
                this.output.ba();
                break;
            default:
                gb(a)
        }
    };
    var ZP = function(a, b, c, d, e, f) {
        Z.call(this, a, 1119);
        this.slotId = b;
        this.o = c;
        this.documentElement = d;
        this.L = e;
        this.j = f;
        this.output = W(this)
    };
    _.T(ZP, Z);
    ZP.prototype.g = function() {
        var a = _.hg("INS");
        a.id = this.o;
        Um(this.j) && _.Hp(a, {
            display: "none"
        });
        this.documentElement.appendChild(a);
        var b = function() {
            return void _.cB(a)
        };
        (_.I = [2, 3], _.x(_.I, "includes")).call(_.I, this.j) ? lK(this.L, this.slotId, b) : _.Bp(this, b);
        this.output.G(a)
    };
    var $P = function(a, b, c, d, e) {
        Z.call(this, a, 1120);
        this.K = b;
        this.C = c;
        this.o = d;
        this.j = e;
        this.output = W(this);
        a = this.j;
        if (!_.La(a) || !_.La(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) this.H = X(this, this.j)
    };
    _.T($P, Z);
    $P.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.H) ? void 0 : a.value) ? b : this.j;
        if (!(_.I = [2, 3], _.x(_.I, "includes")).call(_.I, this.C)) {
            a = _.u(_.x(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, 1 === b.nodeType && b.id !== this.K && _.cB(b);
            this.o || (c.style.display = "")
        }
        this.output.G(c)
    };
    var tu = function(a, b, c, d, e, f, g, h, k) {
        Dk.call(this);
        c ? (a = new $P(a, e, g, k, c), J(this, a), a = a.output) : Tm(g) ? (a = new ZP(a, b, d, f, h, g), J(this, a), a = a.output) : (b = new Cr(a, b, bK, function(l) {
            return l.detail
        }), J(this, b), a = new $P(a, e, g, k, b.output), J(this, a), a = a.output);
        this.output = a
    };
    _.T(tu, Dk);
    var aQ = function(a, b) {
            var c = rn();
            this.context = a;
            this.L = b;
            this.g = c
        },
        bQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y) {
            var B = document,
                C = window;
            e || f || tK(a.L, d);
            var G = ev(a.context, b, a.g, c, d, e, f, g, h, k, l, B, m, n, p, r, v, function() {
                tK(a.L, d);
                sK(a.L, d, G)
            }, w, y);
            f || sK(a.L, d, G);
            _.Bp(d, function() {
                tK(a.L, d)
            });
            C.top !== C && C.addEventListener("pagehide", function(F) {
                F.persisted || tK(a.L, d)
            });
            G.run()
        };
    var cQ = function(a, b, c, d) {
        Z.call(this, a, 884);
        this.Da = b;
        this.ib = c;
        this.o = W(this);
        this.j = X(this, d)
    };
    _.T(cQ, Z);
    cQ.prototype.g = function() {
        FM(this.ib, _.$n(this.Da, "__gads", this.j.value));
        bo(20, this.context, this.Da, this.j.value);
        bo(2, this.context, this.Da, this.j.value);
        this.o.G(wh())
    };
    var gv = 0,
        dQ = new _.Xm(-9, -9);
    var kv = new _.z.Set([function(a, b) {
        var c = a.ma.P.ca;
        b.set("pvsid", {
            value: a.la.context.pvsid
        }).set("correlator", {
            value: ys(c, 26)
        })
    }, function(a, b) {
        var c = a.ma.P.ca,
            d = a.dn;
        a = d.Hd;
        d = d.Gd;
        var e = _.Q(c, 21);
        b = b.set("hxva", {
            value: e ? 1 : null
        }).set("cmsid", {
            value: e ? sk(c, 23) : null
        }).set("vid", {
            value: e ? sk(c, 22) : null
        }).set("pod", {
            value: d
        }).set("ppos", {
            value: a
        });
        a = b.set;
        c = bz(c, 29);
        a.call(b, "scor", {
            value: null == c ? void 0 : c
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.X,
            e = c.P.T;
        c = a.ah;
        var f = c.ll,
            g = c.el;
        b.set("eid", {
            value: a.la.ng
        }).set("debug_experiment_id", {
            value: EC().split(",")
        }).set("expflags", {
            value: _.Jm(253) ? Vf(YD) || null : null
        }).set("pied", {
            value: function() {
                var h = new uI,
                    k = !1,
                    l = !1;
                f && (k = !0, zk(h, 1, dA, f));
                var m = d.map(function(p) {
                    var r = new sI,
                        v, w;
                    null == (v = e[p.getDomId()]) ? w = void 0 : w = _.qk(v, dA, 27);
                    p = w;
                    if (null == p || !p.length) return r;
                    l = k = !0;
                    p = _.u(p);
                    for (v = p.next(); !v.done; v = p.next()) zk(r, 1, dA, v.value);
                    return r
                });
                l && _.Em(h, 2, m);
                m = _.u(null != g ? g : []);
                for (var n = m.next(); !n.done; n = m.next()) zk(h, 1, dA, n.value), k = !0;
                return k ? ub(h.g(), 3) : null
            }()
        })
    }, function(a, b) {
        var c = a.la;
        a = c.context;
        c = c.yb;
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
        var c = a.la.Z;
        a = qv(a.ma.P.ca) || new OL;
        var d = _.og(a, 6, 2);
        b = b.set("rdp", {
            value: _.Q(a, 1) ? "1" : null
        }).set("ltd", {
            value: _.Q(a, 9) ? "1" : null
        }).set("ltd_cs", {
            value: _.H(RD) && _.Jm(221) && null == Xn(c, 3) ? "1" : null
        }).set("gdpr_consent", {
            value: Ev(c, 2)
        }).set("gdpr", {
            value: null != Xn(c, 3) ? _.Q(c, 3) ? "1" : "0" : null,
            options: {
                Ia: !0
            }
        }).set("addtl_consent", {
            value: Ev(c, 4)
        }).set("tcfe", {
            value: jz(c, 7)
        }).set("us_privacy", {
            value: Ev(c, 1)
        }).set("npa", {
            value: _.Q(c, 6) || _.Q(a, 8) ? 1 : null
        }).set("puo", {
            value: _.H(wE) && _.Q(a, 13) ? 1 : null
        }).set("tfua", {
            value: 2 !== d ? d : null,
            options: {
                Ia: !0
            }
        }).set("tfcd", {
            value: null != _.Dc(_.si(a, 5)) ? _.og(a, 5, 0) : null,
            options: {
                Ia: !0
            }
        }).set("trt", {
            value: null != _.Dc(_.si(a, 10)) ? _.og(a, 10, 0) : null,
            options: {
                Ia: !0
            }
        }).set("tad", {
            value: _.H(jv) && null != Xn(c, 8) ? _.Q(c, 8) ? "1" : "0" : null,
            options: {
                Ia: !0
            }
        }).set("gpp", {
            value: Ev(c, 11)
        });
        a = b.set;
        c = cz(c, 10);
        a.call(b, "gpp_sid", {
            value: c.join(",") || void 0
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.P,
            e = c.X,
            f = c.yg,
            g = a.la.B,
            h = e.map(function(l) {
                return d.T[l.getDomId()]
            }),
            k = [];
        a = e.map(function(l) {
            return l.getAdUnitPath().replace(/,/g, ":").split("/").map(function(m) {
                if (!m) return "";
                var n = _.x(k, "findIndex").call(k, function(p) {
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
                return Sm(l)
            })
        }).set("fluid", {
            value: function() {
                var l = !1,
                    m = h.map(function(n) {
                        n = (_.I = Rm(n), _.x(_.I, "includes")).call(_.I, "fluid");
                        l || (l = n);
                        return n ? "height" : "0"
                    });
                return l ? m : null
            }()
        }).set("ifi", {
            value: function() {
                var l = Sp(g);
                if (!f) {
                    l += 1;
                    var m = g,
                        n = e.length;
                    n = void 0 === n ? 1 : n;
                    m = LB(Xf(m)) || m;
                    m.google_unique_id = (m.google_unique_id || 0) + n
                }
                return l
            }()
        }).set("didk", {
            value: _.H(CE) ? lq(e, function(l) {
                return _.Qh(l.getDomId())
            }) : null,
            options: _.x(Object, "assign").call(Object, {}, {
                Ua: "~"
            }, {
                ld: !0
            })
        })
    }, function(a, b) {
        var c = a.ma;
        a = c.X;
        c = c.P;
        var d = c.ca,
            e = c.T;
        b.set("sfv", {
            value: YL ? YL : YL = Nn()
        }).set("fsfs", {
            value: lq(a, function(f) {
                f = e[f.getDomId()];
                var g;
                return Number(null != (g = null == f ? void 0 : rq(f, 12)) ? g : Xn(d, 13))
            }),
            options: {
                Ua: ",",
                Qd: 0,
                ld: !0
            }
        }).set("fsbs", {
            value: lq(a, function(f) {
                f = e[f.getDomId()].Ec();
                var g = d.Ec(),
                    h;
                return (null != (h = null == f ? void 0 : rq(f, 3)) ? h : null == g ? 0 : _.Q(g, 3)) ? 1 : 0
            }),
            options: {
                Qd: 0,
                ld: !0
            }
        })
    }, function(a, b) {
        var c = a.la.L;
        a = a.ma;
        var d = a.yg;
        b.set("rcs", {
            value: lq(a.X, function(e) {
                if (!d) {
                    var f = c.g.get(e);
                    f && f.ij++
                }
                return rK(c, e)
            }),
            options: {
                Qd: 0,
                ld: !0
            }
        })
    }, function(a, b) {
        var c = a.ma;
        a = a.la.yb;
        c = c.P.T[c.X[0].getDomId()];
        b.set("click", {
            value: !a && c.getClickUrl() ? sk(c, 7) : null
        })
    }, function(a, b, c) {
        var d = a.ma,
            e = d.X,
            f = d.P.T;
        a = a.la;
        var g = a.Z,
            h = a.B;
        c = void 0 === c ? function(n, p) {
            return nh(n, p)
        } : c;
        a = e.map(function(n) {
            return f[n.getDomId()]
        });
        var k, l, m;
        b.set("ists", {
            value: jq(a, Br) || null
        }).set("fas", {
            value: lq(a, function(n) {
                return Eq(Ar(n))
            }),
            options: {
                Qd: 0,
                ld: !0
            }
        }).set("itsi", {
            value: e.some(function(n) {
                var p;
                return !qN(n) && 5 === (null == (p = f[n.getDomId()]) ? void 0 : Ar(p))
            }) ? function() {
                var n = c(g, h);
                if (!n) return 1;
                var p;
                n = Math.max.apply(Math, _.Ki(null != (p = _.HI(n, 604800)) ? p : []));
                return isFinite(n) ? Math.floor(Math.max((Date.now() - n) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: jq(a, function(n) {
                return 5 === Ar(n) && _.H(_.eE)
            }) || null
        }).set("ifs", {
            value: null != (m = null == (k = (_.I = _.x(Object, "values").call(Object, f), _.x(_.I, "find")).call(_.I, function(n) {
                return wi(n, nM, 29)
            })) ? void 0 : null == (l = _.Km(k, nM, 29)) ? void 0 : ql(l)) ? m : null
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.P.T;
        a = a.X.map(function(d) {
            return c[d.getDomId()]
        });
        b.set("rbvs", {
            value: jq(a, function(d) {
                return 4 === Ar(d)
            }) || null
        })
    }, function(a, b) {
        var c = a.ma,
            d = a.la;
        a = d.isSecureContext;
        d = d.B;
        var e = b.set;
        var f = c.X;
        var g = c.P;
        c = c.ic;
        var h = g.ca,
            k = g.T,
            l = new hh;
        l.set(0, 1 !== c);
        k = k[f[0].getDomId()];
        l.set(1, !!_.Q(k, 17));
        l.set(2, Wq(f, g));
        l.set(3, _.Q(h, 27) || !1);
        l.set(4, 3 === c);
        f = jh(l);
        e.call(b, "eri", {
            value: f
        }).set("gct", {
            value: Rq("google_preview", d)
        }).set("sc", {
            value: a ? 1 : 0,
            options: {
                Ia: !0
            }
        })
    }, function(a, b) {
        a = a.la;
        var c = a.Z,
            d = a.Da,
            e = _.$n(d, "__gads", c);
        a = "1" === _.$n(d, "__gpi_opt_out", c) ? "1" : null;
        b = b.set("cookie", {
            value: e,
            options: {
                Ia: !0
            }
        }).set("cookie_enabled", {
            value: !e && tH(d, c) ? "1" : null
        });
        e = b.set;
        c = (c = _.$n(d, "__gpi", c)) && !_.x(c, "includes").call(c, "&") ? c : null;
        e.call(b, "gpic", {
            value: c
        }).set("pdopt", {
            value: a
        })
    }, function(a, b) {
        var c = a.la.B;
        a = Tq(a.ma.P.ca.Sa());
        var d = c.document,
            e = d.domain;
        b.set("cdm", {
            value: (a || Vm(c)) === d.URL ? "" : e
        })
    }, function(a, b) {
        a = a.la.B;
        b.set("arp", {
            value: Ep(a) ? 1 : null
        }).set("abxe", {
            value: _.fl(a.top) || yv(a.IntersectionObserver) ? 1 : null
        })
    }, function(a, b) {
        var c = a.la.B;
        a = Tq(a.ma.P.ca.Sa());
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
            d = c.P;
        c = c.X;
        a = a.la.B;
        for (var e = Qm(!0, a), f = d.ca, g = a.document, h = d.T, k = [], l = [], m = _.u(c), n = m.next(); !n.done; n = m.next()) {
            var p = n.value,
                r = h[p.getDomId()],
                v = sq(f, r);
            n = void 0;
            p = null != (n = nn(p, r, g, v)) ? n : dQ;
            k.push(Math.round(p.x));
            l.push(Math.round(p.y))
        }
        e && (d.Id = e);
        f = gh(a) ? null : Qm(!1, a);
        try {
            var w = a.top;
            var y = fv(w.document, w)
        } catch (B) {
            y = new _.Xm(-12245933, -12245933)
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
            value: hv(c, a, d),
            options: {
                Ia: !0,
                Ua: "|"
            }
        })
    }, function(a, b) {
        var c = a.la,
            d = c.L,
            e = c.B;
        b.set("ucis", {
            value: a.ma.X.map(function(f) {
                (f = d.g.get(f)) ? (null != f.Tb || (f.Tb = e === e.top ? (++d.o).toString(36) : cy()), f = f.Tb) : f = "";
                return f
            }),
            options: {
                Ua: "|"
            }
        }).set("oid", {
            value: 2
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.X,
            d = a.P,
            e = d.T;
        a = new _.z.Map;
        var f = Array(c.length),
            g = !1;
        d = _.u(d.ca.Sa());
        for (var h = d.next(); !h.done; h = d.next())
            if (h = h.value, "tag_origin" === _.E(h, 1)) {
                g = !0;
                for (var k = 0; k < c.length; k++) f[k] = [].concat(_.Ki(zm(h)))
            } else a.set(_.E(h, 1), [zm(h)[0]]);
        for (d = 0; d < c.length; d++)
            if (h = e[c[d].getDomId()])
                for (h = _.u(h.Sa()), k = h.next(); !k.done; k = h.next()) {
                    k = k.value;
                    var l = _.E(k, 1);
                    if ("tag_origin" === _.E(k, 1)) {
                        g = !0;
                        var m = l = void 0;
                        (l = f)[m = d] || (l[m] = []);
                        f[d].push.apply(f[d], _.Ki(zm(k)))
                    } else m = a.get(l) || [], k = zm(k)[0], 1 === c.length ? m[0] = k : k !== m[0] && (m[d + 1] = k), a.set(l, m)
                }
        c = [];
        e = _.u(_.x(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) h = d.value, d = Gn()[h], h = a.get(h), d && h && "to" !== d && (1 < h.length ? (h = h.map(function(n) {
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
                return _.x(Array, "from").call(Array, new _.z.Set(n)).join("+")
            }) : void 0,
            options: {
                Ua: "~"
            }
        })
    }, function(a, b) {
        a = a.la;
        var c = a.context,
            d = a.B,
            e, f, g, h, k, l, m;
        b.set("u_his", {
            value: XB(d)
        }).set("u_h", {
            value: null == (e = d.screen) ? void 0 : e.height
        }).set("u_w", {
            value: null == (f = d.screen) ? void 0 : f.width
        }).set("u_ah", {
            value: null == (g = d.screen) ? void 0 : g.availHeight
        }).set("u_aw", {
            value: null == (h = d.screen) ? void 0 : h.availWidth
        }).set("u_cd", {
            value: null == (k = d.screen) ? void 0 : k.colorDepth
        }).set("u_sd", {
            value: lH(d)
        }).set("u_tz", {
            value: -(new Date).getTimezoneOffset()
        }).set("dmc", {
            value: null != (m = null == (l = d.navigator) ? void 0 : l.deviceMemory) ? m : null
        }).set("bc", {
            value: kh(d)
        }).set("nvt", {
            value: $h(d)
        }).set("bz", {
            value: function() {
                var n = _.Uf(ND);
                return 0 === n ? null : FB(d, 2 === n)
            }()
        }).set("tl", {
            value: _.H(EE) ? Xl(c, 1232, function() {
                var n = oa() && xl(d) ? d.document.documentElement.lang : void 0;
                return n
            }, !0) : null
        })
    }, function(a, b) {
        (a = _.Jm(251)) && b.set("uach", {
            value: Ay(a, 3)
        })
    }, function(a, b) {
        a = a.la;
        if (!a.Pb) {
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
        var c = a.la,
            d = c.B,
            e = c.L;
        c = c.yb;
        a = a.ma;
        var f = a.X;
        a = a.P;
        var g = a.ca,
            h = a.T;
        a = Sq("google_preview", d);
        var k = d.document,
            l = a ? Uq(k.URL) : k.URL;
        k = a ? Uq(k.referrer) : k.referrer;
        a = !1;
        if (c) c = Tq(g.Sa());
        else {
            var m;
            c = null != (m = Tq(h[f[0].getDomId()].Sa())) ? m : Tq(g.Sa())
        }
        if (null != c) {
            var n = l;
            gh(d) || (k = "", a = !0)
        } else c = l;
        m = Vq(d);
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
            m = _.fl(d.top) && (null == (p = d.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
            var v;
            p = null == (v = d.location) ? void 0 : v.ancestorOrigins;
            d = Bl(d) || "";
            v = (null == p ? void 0 : p[p.length - 1]) || "";
            d = (d = m || d || v) ? a ? jB(d.match(_.iB)[3] || null) : d : null;
            n.call(b, "top", {
                value: d
            }).set("etu", {
                value: e.Lb
            })
        }
    }, function(a, b) {
        a = a.la.context.pvsid;
        b.set("rumc", {
            value: _.H(UF) || _.Sf(Tl).g ? a : null
        }).set("rume", {
            value: _.H(TF) ? 1 : null
        })
    }, function(a, b) {
        b.set("vis", {
            value: _.Zr(a.la.B.document)
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.X;
        c = c.P;
        a = a.la.B;
        var e = $p(d, c.T, c.ca),
            f = cq(d, e, a);
        c = f.Rl;
        f = f.Lm;
        var g = eq(d, e, a),
            h = g.al;
        g = g.Pl;
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
            value: qK(a.la.L, a.ma.X)
        })
    }, function(a, b) {
        var c = a.la;
        a = c.Z;
        c = c.B;
        var d = c.document.domain;
        var e = mh(a) ? "null" !== c.origin ? c.document.cookie : null : null;
        var f = null != e ? e : "",
            g = c.history.length,
            h = c.screen,
            k = c.document.referrer;
        if (Xf()) var l = window.gaGlobal || {};
        else {
            var m = Math.round((new Date).getTime() / 1E3),
                n = c.google_analytics_domain_name;
            d = "undefined" == typeof n ? OG("auto", d) : OG(n, d);
            var p = -1 < f.indexOf("__utma=" + d + "."),
                r = -1 < f.indexOf("__utmb=" + d);
            (e = (LB() || window).gaGlobal) || (e = {}, (LB() || window).gaGlobal = e);
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
                    p = MG.appName;
                    var y = MG.version,
                        B = MG.language ? MG.language : MG.browserLanguage,
                        C = MG.platform,
                        G = MG.userAgent;
                    try {
                        w = MG.javaEnabled()
                    } catch (F) {
                        w = !1
                    }
                    w = [p, y, B, C, G, w ? 1 : 0].join("");
                    h ? w += h.width + "x" + h.height + h.colorDepth : _.t.java && _.t.java.awt && (h = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), w += h.screen.width + "x" + h.screen.height);
                    w = w + f + (k || "");
                    for (k = w.length; 0 < g;) w += g-- ^ k++;
                    e.vid = (r ^ NG(w) & 2147483647) + "." + m
                }
                e.from_cookie || (e.from_cookie = !1)
            }
            if (!e.cid) {
                b: for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), w = 0; w < f.length; w++)
                    if (k = PG.exec(f[w]) || QG.exec(f[w]) || RG.exec(f[w])) {
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
        v && !mh(a) || b.set("ga_vid", {
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
        var c = a.ma.X,
            d = a.la.B;
        a = a.an;
        var e = a.fh,
            f = a.Ue,
            g = a.Gm,
            h = a.bk;
        if (!_.H(WF) && !g) {
            yh(d.isSecureContext, d.navigator, d.document) && b.set("td", {
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
                    gb(e)
            }
            void 0 !== f && b.set("egid", {
                value: f,
                options: {
                    Ia: !0
                }
            });
            (null == h ? 0 : h.size) && !_.H(ME) && b.set("tan", {
                value: c.map(function(k) {
                    return h.get(k)
                })
            })
        }
    }, function(a, b) {
        var c = a.la.B,
            d = a.Qm;
        a = d.Tm;
        d = d.Rm;
        zh(c.isSecureContext, c.document) && (b.set("topics", {
            value: a instanceof Uint8Array ? ub(a, 3) : a
        }), !a || a instanceof Uint8Array || b.set("tps", {
            value: a
        }), d && b.set("htps", {
            value: d
        }))
    }, function(a, b) {
        var c = a.la,
            d = c.B,
            e = c.Z,
            f = a.ma.X;
        a = a.tm;
        c = a.uf;
        var g = a.Sk,
            h = a.Jl;
        if (!_.H(VD)) {
            a = b.set;
            d = nh(e, d);
            e = Ql(f[0].getAdUnitPath());
            var k = _.H(Nk);
            k = void 0 === k ? !1 : k;
            f = new vA;
            var l = null != g ? g : [];
            g = k ? 1024 : 300;
            if (e && c && l && "function" === typeof c.getUserIdsAsEidBySource) {
                if ("function" === typeof c.getUserIdsAsEids) try {
                    for (var m = _.u(c.getUserIdsAsEids()), n = m.next(); !n.done; n = m.next()) {
                        var p = n.value;
                        "string" === typeof p.source && nk(52, p.source)
                    }
                } catch (w) {
                    var r;
                    nk(45, "", null == (r = w) ? void 0 : r.message)
                }
                m = _.u(l);
                for (n = m.next(); !n.done; n = m.next())
                    if (n = n.value, String(_.E(n, 1)) === e)
                        for (n = _.u(_.qk(n, Rz, 2)), p = n.next(); !p.done; p = n.next())
                            if (p = p.value, _.Q(p, wl(p, Sz, 3)) && (p = _.E(p, 1), !tk(f, p))) {
                                r = null;
                                try {
                                    var v = l = k = void 0;
                                    r = null == (k = c.getUserIdsAsEidBySource(p)) ? void 0 : null == (l = k.uids) ? void 0 : null == (v = l[0]) ? void 0 : v.id
                                } catch (w) {
                                    k = void 0, nk(45, p, null == (k = w) ? void 0 : k.message)
                                }
                                r && (r.length > g ? (k = {}, nk(12, p, null, (k.sl = String(r.length), k.fp = "1", k))) : (k = qA(p), l = Ei(k, 2, r), k = f, l = li(l, 11, !0), zk(k, 2, rk, l), k = {}, nk(19, p, null, (k.fp = "1", k.hs = r ? "1" : "0", k))))
                            }
            }
            Ak(f, d, e, h);
            _.qk(f, rk, 2).length ? (c = {}, nk(50, "", null, (c.ns = String(_.qk(f, rk, 2).length), c)), c = ub(f.g(), 3)) : c = null;
            a.call(b, "a3p", {
                value: c
            })
        }
    }, function(a, b) {
        var c = a.rb.ze,
            d = a.ma.X;
        a = function() {
            return c ? d.map(function(e) {
                return c.get(e)
            }) : []
        }();
        b.set("cbidsp", {
            value: lq(a, function(e) {
                return ub(e.g(), 3)
            }),
            options: _.x(Object, "assign").call(Object, {}, {
                Ua: "~"
            }, {
                ld: !0
            })
        })
    }, function(a, b) {
        var c = [];
        a = _.u(_.qk(az(a.ma.P.ca.ji(), It, 2), Pr, 1));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            Gi(e, 2, 2).length && (d = null != Vi(e, 3) ? _.dz(e, 3) : _.og(e, 1, 0) + 2, e = Gi(e, 2, 2).join("|"), c.push(d + "=" + e))
        }
        b.set("pps", {
            value: c,
            options: {
                Ua: "~"
            }
        })
    }, function(a, b) {
        var c = a.Ul;
        a = c.il;
        c = c.en;
        b.set("scar", {
            value: a
        });
        _.H(aE) && (null == a ? 0 : a.length) && null != c && b.set("wst", {
            value: "0" === a ? "WEBVIEW_SDK_PAW" === c ? (3).toString() : (5).toString() : "WEBVIEW_SDK_PAW" === c ? (2).toString() : (4).toString()
        })
    }, function(a, b) {
        a = a.la.B;
        a = !(!a.isSecureContext || !xh("attribution-reporting", a.document));
        !_.H(SF) && a && b.set("nt", {
            value: 1
        })
    }, function(a, b) {
        if (a = a.fm.dm) a = Ay(ql(a), 3), b.set("psd", {
            value: a
        })
    }, function(a, b) {
        a = _.gg(a.la.B);
        var c = cr;
        0 < a && c >= a && b.set("dlt", {
            value: a
        }).set("idt", {
            value: c - a
        })
    }, function(a, b) {
        a = a.ma.P.ca;
        b.set("ppid", {
            value: _.Ui(a, 16) ? _.E(a, 16) : null,
            options: {
                Ia: !0
            }
        })
    }, function(a, b) {
        var c = b.set;
        (a = sk(a.ma.P.ca, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + Ay('role:1 producer:12 loc:"' + a + '"')) : a = "";
        c.call(b, "uule", {
            value: a
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.P.ca;
        b.set("prev_scp", {
            value: qs(a.X, a.P),
            options: {
                ld: !0,
                Ua: "|"
            }
        }).set("cust_params", {
            value: ss(c),
            options: {
                Ua: "&"
            }
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.P;
        a = a.la;
        var e = a.L,
            f = a.yb;
        b.set("adks", {
            value: c.X.map(function(g) {
                if (f) {
                    var h = d.T[g.getDomId()];
                    h = zp(h);
                    if (g = e.g.get(g)) g.Kd = h;
                    return h
                }
                h = d.ca;
                var k = d.T[g.getDomId()],
                    l;
                if (!(l = Xu(e, g))) {
                    h = zp(k, _.Q(h, 6) || _.Q(k, 17) ? null : hn(g));
                    if (g = e.g.get(g)) g.Kd = h;
                    l = h
                }
                return l
            })
        })
    }, function(a, b) {
        var c = b.set;
        a = a.la.B;
        var d = EB(a);
        a: {
            var e = a.google_ad_width || a.google_ad_width;
            var f = a.google_ad_height || a.google_ad_height;
            if (gh(a)) e = !1;
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
        f = a.top == a ? 0 : _.fl(a.top) ? 1 : 2;
        g = 4;
        d || 1 !== f ? d || 2 !== f ? d && 1 === f ? g = 7 : d && 2 === f && (g = 8) : g = 6 : g = 5;
        e && (g |= 16);
        d = String(g);
        if (a !== a.top)
            for (e = a; e && e !== e.top && _.fl(e) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; e = e.parent);
        c.call(b, "frm", {
            value: d || null
        })
    }, function(a, b) {
        var c = b.set;
        a = az(a.ma.P.ca, Kt, 36);
        a = je(a, 1, _.Dc, 2);
        c.call(b, "ppt", {
            value: a,
            options: {
                Ua: "~"
            }
        })
    }, function(a, b) {
        a = a.la.B;
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
            e = c.P.T;
        a = a.uk.qd;
        var f = [],
            g = !1;
        c = _.u(c.X);
        for (var h = c.next(); !h.done; h = c.next()) {
            var k = void 0;
            (null == (k = e[h.value.getDomId()]) ? 0 : _.Q(k, 30)) ? (f.push("1"), g = !0) : f.push("")
        }
        b.set("is_cau", {
            value: g ? f : null
        });
        _.H(PD) && b.set("no_cau_info", {
            value: a.has(d) ? "1" : null
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.P.T;
        a = a.la.B;
        var e = [],
            f = !1;
        c = _.u(c.X);
        for (var g = c.next(); !g.done; g = c.next()) g = Ar(d[g.value.getDomId()]), (_.I = [8, 9], _.x(_.I, "includes")).call(_.I, g) ? (f = 9 === g ? "right" : "left", e.push(_.Pj(a).sideRailPlasParam.get(f)), f = !0) : e.push("");
        f && b.set("plas", {
            value: e,
            options: {
                Ua: "|"
            }
        })
    }, function(a, b) {
        var c = a.la,
            d = c.B;
        c = c.Z;
        var e = a.ma,
            f = e.P.ca;
        e = e.networkCode;
        a = a.Qk.Rk;
        if (_.H(UD)) {
            var g;
            (g = !a) || (g = !oe(a, 1, qd).get(e));
            a = g;
            var h;
            f = !(null == (h = qv(f)) || !_.Q(h, 9));
            d = new YG(d);
            var k = void 0 === k ? !1 : k;
            if (_.Q(c, 8) || (f || !mh(c)) && a) k = void 0;
            else if (k) {
                var l;
                k = null != (l = oh("__eoi", d.g)) ? l : void 0
            } else k = (new qh(d.g.document)).get("__eoi") || "";
            (l = k) && b.set("eo_id_str", {
                value: l
            })
        }
    }, function(a, b) {
        a = a.ma;
        var c = a.X,
            d = a.P.T;
        _.H(Pv) && b.set("eov", {
            value: jq(c, function(e) {
                var f, g;
                return !!(null == (f = d[e.getDomId()]) ? 0 : null == (g = _.Km(f, oM, 31)) ? 0 : _.Q(g, 1))
            })
        })
    }]);
    var eQ = function(a, b, c) {
        Z.call(this, a, 798);
        this.output = W(this);
        this.j = Y(this, b);
        this.o = X(this, c)
    };
    _.T(eQ, Z);
    eQ.prototype.g = function() {
        var a = this,
            b = new _.z.Map;
        if (this.j.value) {
            var c = this.j.value,
                d = c.la.yb,
                e = c.rb.ze;
            c = _.u(c.ma.X);
            for (var f = c.next(); !f.done; f = c.next()) {
                f = f.value;
                var g = void 0,
                    h = null == (g = e) ? void 0 : g.get(f);
                b.set(f, d ? fQ(this, f, h) : function() {
                    return a.o.value
                })
            }
        }
        this.output.G(b)
    };
    var fQ = function(a, b, c) {
        return Ti(function() {
            var d = _.x(Object, "assign").call(Object, {}, a.j.value);
            d.ma.yg = !0;
            d.ma.X = [b];
            c && (d.rb.ze = new _.z.Map, d.rb.ze.set(b, c));
            return Qq(pv(d)).url
        })
    };
    var gQ = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.o = b;
        this.yb = c;
        this.P = d;
        this.R = e;
        this.B = f;
        this.Z = g;
        this.j = W(this)
    };
    _.T(gQ, Z);
    gQ.prototype.g = function() {
        var a = this,
            b = this.o;
        !this.yb && 1 < this.o.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.M) return !1;
            var d = a.P.T[c.getDomId()],
                e;
            if (e = !(Iq(Ar(d)) && (_.I = Wf(pE), _.x(_.I, "includes")).call(_.I, String(Ar(d))))) {
                e = a.R;
                var f = _.$i(a.B);
                (f ? 1.05 < f || .95 > f : 1) && 4 === Ar(d) ? (P(e, dL("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1;
                e = !e
            }
            if (e) {
                e = a.context;
                f = a.R;
                var g = a.B,
                    h = a.Z;
                d = Ar(d);
                5 !== d ? c = !1 : (e.V.log(578856259, _.Fj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Gb: e.Pa,
                    U: 1
                }), (g = Dq(g, !qN(c), h)) ? (wq(f, g, d, c.getAdUnitPath()), e.V.log(578856259, Ej, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Gb: e.Pa,
                    Kl: g
                }), e.V.log(578856259, _.Fj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Gb: e.Pa,
                    U: 2
                })) : e.V.log(578856259, _.Fj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Gb: e.Pa,
                    U: 3
                }), c = !!g);
                e = !c
            }
            return e
        });
        30 < b.length && (P(this.R, cL("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.j.G(b)
    };
    var hQ = function(a, b, c) {
        Z.call(this, a, 919);
        this.j = b;
        this.Z = c;
        this.output = W(this)
    };
    _.T(hQ, Z);
    hQ.prototype.g = function() {
        var a, b = !(null == (a = this.j) ? 0 : _.Q(a, 9)) && !!mh(this.Z);
        this.output.G(b)
    };
    var iQ = function(a, b, c, d, e, f) {
        Z.call(this, a, 928);
        this.requestId = b;
        this.C = f;
        this.output = jI(this);
        this.o = X(this, c);
        e && (this.j = X(this, e));
        lI(this, d)
    };
    _.T(iQ, Z);
    var jQ = function(a) {
        return a.j ? a.C.split(",").some(function(b) {
            var c;
            return null == (c = a.j) ? void 0 : c.value.has(b)
        }) : !1
    };
    iQ.prototype.g = function() {
        var a = this.context,
            b = this.requestId,
            c = this.o.value.length,
            d = jQ(this);
        if (a.Vc) {
            var e = a.Qa,
                f = e.Uc;
            a = Fl(a);
            var g = new eD;
            b = _.Bj(g, 2, b);
            c = _.Jl(b, 1, c);
            d = _.Il(c, 3, d);
            d = _.Kl(a, 7, Ll, d);
            f.call(e, d)
        }
        this.output.notify()
    };
    var uv = new _.z.Map;
    var kQ = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.za = b;
        this.P = c;
        this.output = jI(this);
        this.j = X(this, d)
    };
    _.T(kQ, Z);
    kQ.prototype.g = function() {
        for (var a = _.u(this.j.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.u(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = Mm(this.P.T[b.getDomId()], 20);
            lt(b, dK, 808, {
                yk: c,
                qm: d
            });
            lt(this.za, "slotRequested", 705, new SN(b, "publisher_ads"))
        }
        this.output.notify()
    };
    var lQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, M, R, N, aa, ha, la, ea, Ga, ta, Ba, Na, Wa, eb, Ta, cc) {
        Z.call(this, a, 785, _.Uf(DE));
        this.yb = b;
        this.L = c;
        this.Da = d;
        this.P = e;
        this.ic = f;
        this.networkCode = g;
        this.Hd = h;
        this.Gd = k;
        this.ng = l;
        this.timer = m;
        this.Z = n;
        this.isSecureContext = p;
        this.Pb = r;
        this.B = v;
        this.He = w;
        this.j = W(this);
        this.o = W(this);
        this.O = W(this);
        lI(this, N);
        this.Ma = kI(this, y);
        this.Dc = kI(this, B);
        this.W = kI(this, C);
        this.H = X(this, G);
        M && (this.C = _.H(GE) ? new cI(M.Ed) : kI(this, M.Ed), M.te && (this.Jb = Y(this, M.te)));
        R && (this.K = _.H(GE) ? new cI(R.Yc) : kI(this, R.Yc));
        lI(this, N);
        aa && (this.mb = X(this, aa));
        ha && (this.fa = new cI(ha));
        la && (this.eb = Y(this, la));
        ea && (this.qa = X(this, ea));
        Ga && lI(this, Ga);
        ta && (this.xa = X(this, ta));
        F && (this.ga = Y(this, F));
        Ba && (this.pb = Y(this, Ba.Zg));
        Na && (this.Cc = X(this, Na));
        Wa && (this.ua = Y(this, Wa));
        eb && (this.ja = Y(this, eb));
        Ta && (this.qb = X(this, Ta));
        cc && (this.zc = kI(this, cc))
    };
    _.T(lQ, Z);
    lQ.prototype.g = function() {
        if (this.H.value.length) {
            var a = null;
            if (this.C) {
                var b = this.C.value;
                a = b ? b : this.K && !this.K.Sc() ? 9 : this.C.Sc() ? null : 1
            }
            this.W.value && (this.L.Lb = this.W.value);
            var c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B;
            b = {
                la: {
                    B: this.B,
                    context: this.context,
                    L: this.L,
                    Da: this.Da,
                    Z: this.Z,
                    yb: this.yb,
                    ng: this.ng,
                    isSecureContext: this.isSecureContext,
                    Pb: this.Pb
                },
                ma: {
                    networkCode: this.networkCode,
                    X: this.H.value,
                    P: this.P,
                    ic: this.ic,
                    yg: !1
                },
                dn: {
                    Hd: this.Hd,
                    Gd: this.Gd
                },
                Ul: {
                    il: null != (w = this.Ma.value) ? w : "0",
                    en: null != (y = this.Dc.value) ? y : "WEBVIEW_SDK_PAW"
                },
                rb: {
                    ze: null == (c = this.ga) ? void 0 : c.value
                },
                Qm: {
                    Tm: a,
                    Rm: null == (d = this.Jb) ? void 0 : d.value
                },
                tm: {
                    Jl: null != (B = null == (e = this.mb) ? void 0 : e.value) ? B : void 0,
                    uf: null == (f = this.fa) ? void 0 : f.value,
                    Sk: null == (g = this.qa) ? void 0 : g.value
                },
                ah: {
                    ll: null == (h = this.eb) ? void 0 : h.value,
                    el: null == (k = this.xa) ? void 0 : k.value
                },
                fm: {
                    dm: null == (l = this.pb) ? void 0 : l.value
                },
                an: {
                    fh: null == (m = this.Cc) ? void 0 : m.value,
                    Ue: null == (n = this.ua) ? void 0 : n.value,
                    Gm: null == (p = this.qb) ? void 0 : p.value,
                    bk: null == (r = this.zc) ? void 0 : r.value
                },
                Qk: {
                    Rk: null == (v = this.ja) ? void 0 : v.value
                },
                uk: {
                    qd: this.He.qd
                }
            };
            this.o.G(b);
            c = Qq(pv(b));
            d = c.url;
            KC(this.timer, (9).toString(), 9, c.Hh);
            this.j.G(d);
            this.O.G(lv(b) ? new xx(vx, "https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : new xx(vx, "https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.j.G(""), this.o.ba()
    };
    var mQ = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.j = b;
        this.aa = c;
        this.P = d;
        this.B = e;
        this.output = jI(this);
        f && lI(this, f)
    };
    _.T(mQ, Z);
    mQ.prototype.g = function() {
        for (var a = _.u(this.j), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = hn(b, this.aa);
            if (!gn(b, this.aa) && c) {
                a: {
                    var d = c;
                    var e = this.P.T[b.getDomId()],
                        f = 0,
                        g = 0;e = _.u(Rm(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.u(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Yp(jn(d, this.B)) || !d.parentElement || Yp(jn(d.parentElement, this.B))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.P;f = g.ca;g = g.T[b.getDomId()];Xp(c, pn(b), sq(f, g), d)
            }
        }
        this.output.notify()
    };
    var nQ = function(a, b, c, d, e, f, g, h) {
            this.M = a;
            this.I = b;
            this.j = c;
            this.X = d;
            this.Z = e;
            this.o = f;
            this.F = g;
            this.J = h;
            this.l = "";
            this.A = -1;
            this.state = 1;
            this.g = ""
        },
        pQ = function(a, b) {
            if (b)
                if (1 !== a.state && 2 !== a.state) oQ(a, new jH("state err: (" + ([a.state, a.g.length].join() + ")")));
                else {
                    a.g && (b = a.g + b);
                    var c = 0;
                    do {
                        var d = b.indexOf("\n", c);
                        var e = -1 !== d;
                        if (!e) break;
                        var f = a;
                        c = b.substr(c, d - c);
                        if (1 === f.state) f.l = c, ++f.A, f.state = 2;
                        else {
                            var g = void 0;
                            try {
                                f.M(f.A, f.l, {
                                    kind: 0,
                                    hb: AB(c)
                                }, f.X, f.Z, f.o, f.F, null != (g = f.J) ? g : void 0), f.l = ""
                            } catch (h) {}
                            f.state = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.g = b.substr(c)
                }
        },
        oQ = function(a, b) {
            a.state = 4;
            try {
                a.I(b)
            } catch (c) {}
        },
        qQ = function(a) {
            1 !== a.state || a.g ? oQ(a, new jH("state err (" + ([a.state, a.g.length].join() + ")"))) : (a.state = 3, a.j(a.A, a.X, a.Z))
        };
    var rQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 788);
        this.ja = b;
        this.ga = c;
        this.fa = d;
        this.Z = e;
        this.L = f;
        this.P = g;
        this.H = jI(this);
        this.C = W(this);
        this.o = W(this);
        this.W = 0;
        this.O = !1;
        this.j = null != p ? p : new XMLHttpRequest;
        this.K = X(this, h);
        k && (this.ua = Y(this, k));
        this.xa = X(this, l);
        lI(this, m);
        this.qa = X(this, n)
    };
    _.T(rQ, Z);
    rQ.prototype.g = function() {
        var a = this,
            b = this.xa.value;
        if (b) {
            var c, d = new nQ(this.ja, this.ga, this.fa, this.K.value, this.Z, null == (c = this.ua) ? void 0 : c.value);
            this.j.open("GET", b);
            this.j.withCredentials = this.qa.value;
            this.j.onreadystatechange = function() {
                sQ(a, d, !1)
            };
            this.j.onload = function() {
                sQ(a, d, !0);
                a.C.G(a.j.status);
                if (300 <= a.j.status) {
                    var e;
                    a.o.G(null != (e = a.j.responseText) ? e : "")
                } else a.o.G("")
            };
            this.j.onerror = function() {
                oQ(d, new kH("XHR error"));
                a.K.value.forEach(function(e) {
                    ot(e, a.L, a.P, "")
                });
                a.C.G(0);
                a.o.G("")
            };
            this.j.send()
        }
        this.H.notify()
    };
    var sQ = function(a, b, c) {
        try {
            if (3 === a.j.readyState || 4 === a.j.readyState)
                if (300 <= a.j.status) a.O || (oQ(b, new kH("xhr_err-" + a.j.status)), a.O = !0);
                else {
                    var d = a.j.responseText.substr(a.W);
                    d && pQ(b, d);
                    a.W = a.j.responseText.length;
                    c && 4 === a.j.readyState && qQ(b)
                }
        } catch (e) {
            oQ(b, e)
        }
    };
    var tQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Z.call(this, a, 1078);
        this.W = b;
        this.O = c;
        this.K = d;
        this.Z = e;
        this.L = f;
        this.P = g;
        this.C = jI(this);
        this.o = W(this);
        this.j = W(this);
        this.H = X(this, h);
        k && (this.ga = Y(this, k));
        l && (this.ja = X(this, l));
        this.qa = X(this, m);
        lI(this, n);
        this.fa = X(this, p);
        if (null == r ? 0 : r.se) this.xa = Y(this, r.se);
        v && (this.ua = X(this, v));
        w && (this.Ma = Y(this, w))
    };
    _.T(tQ, Z);
    tQ.prototype.g = function() {
        var a = this,
            b = this.qa.value;
        if (b) {
            var c, d, e, f = new nQ(this.W, this.O, this.K, this.H.value, this.Z, null == (c = this.ga) ? void 0 : c.value, null == (d = this.ja) ? void 0 : d.value, null == (e = this.Ma) ? void 0 : e.value);
            c = this.fa.value ? "include" : "omit";
            var g;
            d = null == (g = this.xa) ? void 0 : g.value;
            var h;
            g = null == (h = this.ua) ? void 0 : h.value;
            h = _.x(Object, "assign").call(Object, {}, {
                credentials: c
            }, d ? {
                browsingTopics: d
            } : {}, g ? {
                adAuctionHeaders: g
            } : {});
            fetch(b, h).then(function(k) {
                uQ(a, k, f)
            }).catch(function(k) {
                vQ(a, k, f);
                a.H.value.forEach(function(l) {
                    ot(l, a.L, a.P, "")
                })
            })
        }
        this.C.notify()
    };
    var uQ = function(a, b, c) {
            a.o.G(b.status);
            if (300 <= b.status) a.j.La(b.text()), oQ(c, new kH("fetch_status-" + b.status));
            else {
                a.j.G("");
                var d, e = null == (d = b.body) ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
                e ? e.read().then(function(f) {
                    wQ(a, f, e, c)
                }).catch(function(f) {
                    vQ(a, f, c)
                }) : oQ(c, new kH("failed_reader"))
            }
        },
        wQ = function(a, b, c, d) {
            var e = b.value;
            b.done ? qQ(d) : (pQ(d, e), c.read().then(function(f) {
                wQ(a, f, c, d)
            }).catch(function(f) {
                vQ(a, f, d)
            }))
        },
        vQ = function(a, b, c) {
            oQ(c, new kH("fetch error: " + (b instanceof Error ? b.message : void 0)));
            a.o.G(0);
            a.j.G("")
        };
    var xQ = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.P = b;
        this.timer = c;
        this.output = jI(this);
        this.j = X(this, e);
        lI(this, d)
    };
    _.T(xQ, Z);
    xQ.prototype.g = function() {
        var a = this.j.value;
        a.length && jt(this.timer, "3", kt(this.P.T[a[0].getDomId()], 20));
        this.output.notify()
    };
    var yQ = function(a, b, c, d, e) {
        Z.call(this, a, 803);
        this.j = b;
        this.slotId = c;
        this.Da = d;
        this.Z = e;
        this.output = W(this)
    };
    _.T(yQ, Z);
    yQ.prototype.g = function() {
        var a = JSON.parse(this.j),
            b = Dp(a, yz);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.j);
        a = Ke(IA, a);
        b = je(a, 27, Ic, 2);
        b = _.u(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.Sf(uh).g(c);
        bo(4, this.context, this.Da, this.Z);
        lt(this.slotId, cK, 800, a);
        this.output.G(a)
    };
    var zQ = function(a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.j = X(this, d)
    };
    _.T(zQ, Z);
    zQ.prototype.g = function() {
        var a = this;
        Xn(this.j.value, 11) && (_.oK(this.L, this.slotId), lK(this.L, this.slotId, function() {
            _.pK(a.L, a.slotId)
        }))
    };
    var AQ = function(a, b, c, d) {
        Dk.call(this);
        this.context = a;
        this.slotId = b;
        b = d.L;
        var e = d.Z,
            f = d.ab,
            g = d.Da;
        a = d.Ra;
        d = d.R;
        c = new yQ(this.context, c, this.slotId, g, e);
        J(this, c);
        e = new CN(this.context, e, g, c.output);
        J(this, e);
        f = new EN(this.context, this.slotId, f, c.output);
        J(this, f);
        b = new zQ(this.context, this.slotId, b, c.output);
        J(this, b);
        a = qI(this, 1229, Qv, {
            Tg: c.output
        }, {
            Ra: a
        }, {
            output: void 0
        });
        qI(this, 1220, Tv, {
            Tg: c.output
        }, {
            R: d,
            context: this.context
        }, {});
        this.g = {
            Il: a.output
        }
    };
    _.T(AQ, Dk);
    var BQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, M, R, N) {
        Z.call(this, a, 973);
        this.qa = b;
        this.R = c;
        this.K = d;
        this.W = e;
        this.P = f;
        this.L = g;
        this.Da = h;
        this.ga = k;
        this.O = l;
        this.H = m;
        this.me = n;
        this.ja = p;
        this.networkCode = r;
        this.isSecureContext = v;
        this.Pb = w;
        this.ab = y;
        this.B = B;
        this.aa = C;
        this.j = R;
        this.ua = N;
        this.o = [];
        this.C = Y(this, G);
        this.fa = X(this, F);
        this.xa = X(this, M);
        this.j.Kb && lI(this, this.j.Kb.Mh)
    };
    _.T(BQ, Z);
    BQ.prototype.g = function() {
        var a = this,
            b = new Dk;
        _.S(this, b);
        var c = this.fa.value,
            d = qv(this.P.ca);
        this.C.value && this.ua.G(this.C.value);
        var e = bs(this.context, this.aa);
        e && _.S(b, e.Ka);
        var f = ir(this.context, _.Km(this.P.ca, xu, 5), this.L, this.K, null == e ? void 0 : e.bm.fe);
        e = f.Cg;
        (f = f.Dl) && _.S(b, f);
        f = new mQ(this.context, this.K, this.aa, this.P, this.B, e);
        J(b, f);
        var g = !!_.Q(this.P.ca, 6);
        e = new gQ(this.context, this.K, g, this.P, this.R, this.B, c);
        J(b, e);
        var h, k = new uM(this.context, d, c, (null == (h = _.Km(this.P.ca, Kt, 36)) ? void 0 : je(h, 1, _.Dc, 2)) || []);
        J(b, k);
        var l = this.j;
        h = l.Vl;
        var m = l.gm,
            n = l.Vm;
        l = l.He;
        var p, r = null != (p = this.j.Kb) ? p : {},
            v = r.Pd,
            w = r.Bd,
            y = r.Db,
            B = r.Nb,
            C = r.fd,
            G = r.gi;
        p = r.oc;
        var F = r.og,
            M = r.Qh;
        r = r.Mb;
        if (_.H(vE)) {
            var R = new IO(this.context, M);
            var N = new JO(this.context, M);
            J(b, R);
            J(b, N);
            var aa = R.j;
            R = N.j;
            N = N.o
        }
        if (F = st(this.context, n, this.P.T, c, this.C.value, e.j, k.output, F, R)) {
            var ha = F.Xm;
            F = F.Wm;
            var la = ha.Vg;
            var ea = ha.wg;
            ha = ha.Se;
            _.S(b, F)
        }
        if (N = Ks(this.context, n, this.B.navigator, k.output, N)) {
            var Ga = N.Aj;
            N = N.Ym;
            var ta = Ga.gj;
            Ga = Ga.wi;
            N && _.S(b, N)
        }
        _.H(QE) && (Ga = W(this), Ga.G(n.rh));
        var Ba = new ZO(this.context, this.B);
        J(b, Ba);
        F = (null != v ? v : {}).hc;
        var Na;
        N = null == (Na = this.j.Kb) ? void 0 : Na.ue;
        Na = new EO(this.context, h.Wl);
        J(b, Na);
        if (v = qq(this.context, this.R, this.P.T, this.networkCode, e.j, v, y)) {
            var Wa = v.ek;
            _.S(this, v.Ka)
        }
        if (ea = ds(this.context, m, ea, ha, this.P.T, e.j, M)) {
            var eb = ea.xf;
            _.S(this, ea.Ka)
        }
        if (aa = ws(this.context, this.C.value, N, k.output, aa)) {
            var Ta = aa.Sm;
            _.S(this, aa.Ka);
            this.o.push(Ta.Ed.promise)
        }
        if (n.Yj) {
            _.H(bu);
            var cc = new EP(this.context, this.B.navigator, e.j);
            J(b, cc);
            cc = cc.output
        }
        aa = window.isSecureContext && _.H(PF) ? "wbn" : "ldjh";
        var Fc = ++this.L.I;
        ea = "wbn" === aa ? Er().toLowerCase() : void 0;
        ha = this.me;
        var $b, jc;
        Wa = new lQ(this.context, g, this.L, this.Da, this.P, ha.ic, this.networkCode, ha.Hd, ha.Gd, this.xa.value, _.Sf(Tl), c, this.isSecureContext, this.Pb, this.B, l, Na.output, h.qc, Ba.output, e.j, null == ($b = Wa) ? void 0 : $b.nh, Ta, N, f.output, null == w ? void 0 : w.Ng, F, y, B, C, G, eb, ta, null == (jc = this.j.Kb) ? void 0 : jc.og, r, R, cc);
        J(b, Wa);
        eb = new xQ(this.context, this.P, _.Sf(Tl), Wa.j, e.j);
        J(b, eb);
        this.context.Bm && qI(b, 1231, wv, {
            Ho: Wa.j,
            X: e.j
        }, {
            wa: this.context.Qa
        }, {});
        d = new hQ(this.context, d, c);
        J(b, d);
        $b = Rl(this.context, 646, function(dc, ec, Oc, Pc, pf, ue, Kd, ve) {
            Bv(function() {
                return void CQ(a, pf, dc, ec, Oc, Pc, ue, Kd, ve)
            }, dc, a.B)
        });
        jc = Rl(this.context, 647, function(dc, ec, Oc) {
            Bv(function() {
                return void DQ(a, Fc, Oc, ec, dc)
            }, -1, a.B)
        });
        "ldjh" === aa ? (R = EQ(this, 289, "strm_err"), zv() ? (Ta = new tQ(this.context, $b, R, jc, c, this.L, this.P, e.j, la, ta, Wa.j, eb.output, d.output, Ta, Ga, cc), J(b, Ta), la = Ta.C, ta = Ta.o, Ta = Ta.j) : (Ta = new rQ(this.context, $b, R, jc, c, this.L, this.P, e.j, la, Wa.j, eb.output, d.output), J(b, Ta), la = Ta.H, ta = Ta.C, Ta = Ta.o), ta = qI(b, 1221, sv, {
            status: ta,
            responseText: Ta
        }, {
            R: this.R
        }, {}).finished, this.o.push(ta.promise)) : (ta = new IP(this.context, $b, EQ(this, 1042, "Unknown web bundle error."), jc, aa, ea, c, this.aa, e.j, la, Wa.j, Wa.O, eb.output, d.output), uu(b, ta), la = new $r, dI(la, rI(ta).then(function() {})));
        p = new iQ(this.context, Fc, e.j, la, p, this.networkCode);
        J(b, p);
        ta = new eQ(this.context, Wa.o, Wa.j);
        J(b, ta);
        ta = new kQ(this.context, this.H.za, this.P, ta.output);
        J(b, ta);
        ta = new QO(this.context, this.ga, this.B, ta.output);
        J(b, ta);
        ta = new lO(this.context, this.P, this.O, e.j, ta.output);
        J(b, ta);
        e = new uN(this.context, this.L, this.P, this.aa, e.j, ta.output);
        J(b, e);
        ta = new YO(this.context, mk(this.B), this.B, c, la);
        J(b, ta);
        1 === Fc && (c = new mN(this.context, this.B, c, N, la), J(b, c), this.o.push(c.output.promise));
        this.o.push(p.output.promise, e.output.promise, ta.output.promise);
        b.run()
    };
    var CQ = function(a, b, c, d, e, f, g, h, k) {
            var l, m, n, p;
            return _.Lf(function(r) {
                l = f[c];
                if (!l) return Vl(a.context, 646, Error("missing slot")), r.return();
                0 === c && (m = kt(a.P.T[l.getDomId()], 20), jt(_.Sf(Tl), "4", m));
                return r.yield(FQ(a, l, d, e, b, null == (n = g) ? void 0 : n[l.getId()], h, null == (p = k) ? void 0 : p.get(l)), 0)
            })
        },
        DQ = function(a, b, c, d, e) {
            var f, g, h;
            return _.Lf(function(k) {
                if (1 == k.g) {
                    var l = a.context,
                        m = e + 1,
                        n = d.length;
                    if (l.Vc) {
                        var p = l.Qa,
                            r = p.Uc;
                        l = Fl(l);
                        var v = new fD;
                        v = _.Bj(v, 3, b);
                        m = _.Jl(v, 1, m);
                        n = _.Jl(m, 2, n);
                        n = _.Kl(l, 8, Ll, n);
                        r.call(p, n)
                    }
                    f = e + 1
                }
                if (3 != k.g) {
                    if (!(f < d.length)) return k.yield(GQ(a), 0);
                    if (!d[f]) {
                        k.g = 3;
                        return
                    }
                    p = new IA;
                    p = li(p, 8, !0);
                    g = ql(p);
                    h = '{"empty":' + g + "}";
                    return k.yield(CQ(a, c, f, h, {
                        kind: 0,
                        hb: ""
                    }, d), 3)
                }++f;
                k.g = 2
            })
        },
        FQ = function(a, b, c, d, e, f, g, h) {
            var k, l, m, n, p, r, v, w, y, B, C, G, F, M, R, N, aa, ha;
            return _.Lf(function(la) {
                if (1 == la.g) return k = {
                    Z: e,
                    ab: a.ab,
                    L: a.L,
                    Da: a.Da,
                    Ra: d,
                    R: a.R
                }, l = new AQ(a.context, b, c, k), la.yield(rI(l), 2);
                m = la.A;
                p = n = m.Il;
                r = p.isEmpty;
                v = p.Oa;
                w = p.ha;
                y = p.fn;
                B = p.Ib;
                C = p.jg;
                G = p.Ak;
                F = p.Ra;
                M = p.height;
                R = p.width;
                var ea = a.context,
                    Ga = null == (N = a.j.Kb) ? void 0 : N.Pd;
                if (Ga && !(.01 < Math.random())) {
                    var ta = new Dk;
                    J(ta, new hN(ea, y, B, v, Ga.hc));
                    ta.run()
                }
                _.H(UD) && (Ga = a.context, ta = a.Da, ea = new Dk, Ga = new vN(Ga, ta, C), J(ea, Ga), ea.run());
                if (b.M) return la.return();
                aa = !!w || _.H(TE) && !!f;
                (ha = Sq("google_norender")) || r && !aa ? ot(b, a.L, a.P, v) : _.H(Pv) && "vast" === G ? (bh({
                    kind: Wg(),
                    hb: eh
                }), lt(b, nt, 825, {
                    isEmpty: !1,
                    vast: F.hb,
                    size: void 0 === R || void 0 === M ? void 0 : new _.an(R, M)
                })) : bQ(a.ja, a.qa, a.R, b, r || ha, aa, a.L, a.P, a.ab, n, e, f, g, a.H.za, a.O, a.j, h);
                l.ya();
                la.g = 0
            })
        },
        EQ = function(a, b, c) {
            return Rl(a.context, b, function(d) {
                d = d instanceof Error ? d : Error();
                d.message = d.message || c;
                Vl(a.context, b, d);
                GQ(a)
            })
        },
        GQ = function(a) {
            return _.Lf(function(b) {
                if (1 == b.g) {
                    var c = a.L,
                        d = a.W,
                        e = c.A.get(d) - 1;
                    0 === e ? c.A.delete(d) : c.A.set(d, e);
                    return e ? b.return() : b.yield(_.z.Promise.all(a.o), 2)
                }
                lt(a.H.mi, gK, 965, a.W);
                b.g = 0
            })
        };
    var HQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, M, R) {
        Z.call(this, a, 885);
        this.fa = b;
        this.R = c;
        this.P = d;
        this.L = e;
        this.Da = f;
        this.me = g;
        this.O = h;
        this.H = k;
        this.j = l;
        this.o = m;
        this.W = n;
        this.isSecureContext = p;
        this.ib = r;
        this.K = v;
        this.Pb = w;
        this.ab = y;
        this.B = B;
        this.aa = C;
        this.C = M;
        this.ga = R;
        this.ja = X(this, G);
        lI(this, F)
    };
    _.T(HQ, Z);
    HQ.prototype.g = function() {
        var a = this.ja.value;
        if (a.length) {
            var b = this.L,
                c = this.j,
                d = a.length;
            b.A.has(c);
            b.A.set(c, d);
            a = _.u(a);
            for (b = a.next(); !b.done; b = a.next()) {
                c = b.value;
                var e = void 0;
                b = c.networkCode;
                d = c.X;
                c = new Dk;
                _.S(this, c);
                var f = br(this.context, this.K, null == (e = this.C.Kb) ? void 0 : e.Ti);
                e = f.Lc;
                var g = f.rg;
                _.S(c, f.Ka);
                e = dp(this.context, this.R, this.L, this.B, e, g, 3, qv(this.P.ca));
                f = e.nb;
                _.S(c, e.Ka);
                e = new KO(this.context, this.B, f);
                J(c, e);
                e = new BN(this.context, this.B, f);
                J(c, e);
                e = new ru(this.context, this.B, f);
                J(c, e);
                g = new cQ(this.context, this.Da, this.ib, f);
                J(c, g);
                b = new BQ(this.context, this.fa, this.R, d, this.j, this.P, this.L, this.Da, this.O, this.H, this.o, this.me, this.W, b, this.isSecureContext, this.Pb, this.ab, this.B, this.aa, e.output, f, g.o, this.C, this.ga);
                J(c, b);
                c.run()
            }
        } else lt(this.o.mi, gK, 965, this.j)
    };
    var IQ = new _.z.Map,
        JQ = function(a, b, c, d) {
            d = void 0 === d ? IQ : d;
            Z.call(this, a, 834);
            this.R = b;
            this.X = c;
            this.j = d;
            this.o = W(this);
            this.o.La(_.z.Promise.all(this.X.map(this.C, this)).then(function(e) {
                return e.filter(function(f) {
                    return null != f && !f.M
                })
            }))
        };
    _.T(JQ, Z);
    JQ.prototype.g = function() {};
    JQ.prototype.C = function(a) {
        var b = this,
            c, d;
        return _.Lf(function(e) {
            if (1 == e.g) {
                if (a.M) return e.return();
                b.j.has(a) || (b.j.set(a, _.H(yE) ? Wv(a) : Vv(a)), _.Bp(a, function() {
                    return void b.j.delete(a)
                }));
                c = b.j.get(a);
                return e.yield(c(), 2)
            }
            d = e.A;
            if (b.M) return e.return();
            if (d) return e.return(a);
            P(b.R, lL(a.getAdUnitPath()));
            return e.return()
        })
    };
    var KQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B) {
        _.V.call(this);
        var C = this;
        this.context = a;
        this.C = b;
        this.R = c;
        this.L = d;
        this.Da = e;
        this.za = f;
        this.J = g;
        this.j = h;
        this.o = k;
        this.isSecureContext = l;
        this.ib = m;
        this.I = n;
        this.Pb = p;
        this.ab = r;
        this.aa = v;
        this.B = w;
        this.F = y;
        this.H = B;
        this.g = new _.z.Map;
        this.l = new ZJ(a);
        _.S(this, this.l);
        this.l.listen(gK, function(G) {
            G = G.detail;
            var F = C.g.get(G);
            F && (C.g.delete(G), F.ya())
        })
    };
    _.T(KQ, _.V);
    var LQ = function(a, b, c, d) {
        var e = ++a.L.F;
        a.g.has(e);
        var f = new Dk;
        a.g.set(e, f);
        b = new JQ(a.context, a.R, b);
        J(f, b);
        var g = qI(f, 845, $v, {
            X: b.o
        }, {
            T: d.T
        }, {
            tj: void 0,
            Dj: void 0
        });
        b = g.Dj;
        g = qI(f, 847, Yv, {
            X: g.tj
        }, {
            L: a.L,
            yb: !!_.Q(d.ca, 6),
            yl: Sq("google_nofetch")
        }, {
            ke: void 0
        }).ke;
        b = qI(f, 864, Pq, {
            X: b
        }, {
            L: a.L,
            P: d,
            aa: document
        }, {}).finished;
        a = new HQ(a.context, a.C, a.R, d, a.L, a.Da, c, a.J, a.j, e, {
            mi: a.l,
            za: a.za
        }, a.o, a.isSecureContext, a.ib, a.I, a.Pb, a.ab, a.B, a.aa, g, b, a.F, a.H);
        J(f, a);
        f.run()
    };
    var MQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        KP.call(this, a, c, h);
        this.context = a;
        this.L = d;
        this.j = new _.z.Set;
        this.I = {};
        this.C = new aQ(a, d);
        this.H = new KQ(a, b, c, d, new _.sH(window), this.l, m, e, this.C, f, g, k, l, n, document, window, p, r);
        _.S(this, this.H)
    };
    _.T(MQ, KP);
    MQ.prototype.getName = function() {
        return "publisher_ads"
    };
    MQ.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.La(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        Ft(this);
        var h = to(c, this.context, this.R, a, b, f),
            k = h.slotId;
        h = h.Fa;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            yt(this, null != (l = g) ? l : k.getDomId(), c)
        } else P(this.R, km("PubAdsService.display", [a, b, d]))
    };
    var yt = function(a, b, c) {
        var d = NQ(b, c);
        c = d.slotId;
        var e = d.Lk;
        d = d.Mk;
        if (c) {
            if (b = rn(), (d = TL(b, c.getDomId())) && !_.Q(d, 19))
                if (e && b.l.set(c, e), hn(c) || Tm(Ar(d))) {
                    if (li(d, 19, !0), e = dn(b.g, b.A), a.enabled) {
                        Ft(a);
                        a.enabled && nK(a.L, c);
                        a.R.info(NK());
                        b = e.ca;
                        d = e.T;
                        var f = _.Q(b, 6);
                        if (f || !a.L.Gc(c)) f && (f = hn(c)) && lt(c, bK, 778, f), _.Q(b, 4) && (d = d[c.getDomId()], f = a.L, Lq(d, b) && !f.Gc(c) && Mq(c, document, d, b)), XL(a, e, c)
                    }
                } else P(a.R, DK(String(sk(d, 1)), String(sk(d, 2))), c)
        } else d ? a.R.error(EK(d)) : a.R.error(km("googletag.display", [String(b)]))
    };
    MQ.prototype.slotAdded = function(a, b) {
        var c = this;
        _.Q(b, 17) || this.enabled && nK(this.L, a);
        lt(this.l, eK, 724, {
            mh: a.getDomId(),
            T: b
        });
        a.listen(nt, function(d) {
            var e = d.detail;
            d = e.size;
            var f = e.vast,
                g = new NN(a, "publisher_ads");
            e.isEmpty && (g.isEmpty = !0, g.slotContentChanged = !1);
            f && _.H(Pv) && (g.vast = f);
            e = a.g.getResponseInformation();
            d && e && (g.size = [d.width, d.height], g.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, g.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, g.isBackfill = e.isBackfill, g.creativeId = e.creativeId, g.lineItemId = e.lineItemId, g.creativeTemplateId = e.creativeTemplateId, g.advertiserId = e.advertiserId, g.campaignId = e.campaignId, g.yieldGroupIds = e.yieldGroupIds, g.companyIds = e.companyIds);
            lt(c.l, "slotRenderEnded", 708, g)
        });
        a.listen(cK, function() {
            lt(c.l, "slotResponseReceived", 709, new TN(a, c.getName()))
        });
        4 === Ar(b) && OQ(this, "rewardedSlotClosed", a, b);
        7 === Ar(b) && OQ(this, "gameManualInterstitialSlotClosed", a, b);
        KP.prototype.slotAdded.call(this, a, b)
    };
    var OQ = function(a, b, c, d) {
            _.Bp(c, a.l.listen(b, function(e) {
                c.g === e.detail.slot && (e = {}, PQ(a, [c], rn().g, (e[c.getDomId()] = d, e), a.L))
            }))
        },
        XL = function(a, b, c) {
            var d = QQ(a, b, c);
            RQ(a, d, b, {
                ic: 1
            });
            b = c.getAdUnitPath();
            if (c = a.I[b]) {
                c = _.u(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, RQ(a, d.X, d.P, d.me);
                delete a.I[b]
            }
        },
        QQ = function(a, b, c) {
            var d = b.ca,
                e = b.T[c.getDomId()];
            return _.Q(d, 4) ? [] : !_.Q(d, 6) || (null == e ? 0 : _.Q(e, 17)) ? (a.j.add(c), _.Bp(c, function() {
                return void a.j.delete(c)
            }), [c]) : a.g.filter(function(f) {
                if (a.j.has(f) || _.H(AE) && !hn(f) && !Tm(Ar(e))) return !1;
                a.j.add(f);
                _.Bp(f, function() {
                    return void a.j.delete(f)
                });
                return !0
            })
        },
        RQ = function(a, b, c, d) {
            a.R.info(UK());
            if (SQ(a, b, d, c) && 1 !== d.ic)
                for (b = _.u(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), lt(a.l, fK, 725, {
                    mh: d,
                    T: c.T[d]
                })
        },
        SQ = function(a, b, c, d) {
            b = b.filter(function(e) {
                var f = d.T[e.getDomId()],
                    g = _.Nq(a.L, e);
                !1 === g && P(a.R, DL(String(Ar(f)), e.getAdUnitPath()));
                if (!g) return !1;
                (_.I = [5, 4, 7], _.x(_.I, "includes")).call(_.I, Ar(f)) && _.oK(a.L, e);
                return !0
            });
            if (!b.length) return null;
            LQ(a.H, b, c, d);
            return b
        };
    MQ.prototype.refresh = function(a, b, c) {
        c = void 0 === c ? {
            ic: 2
        } : c;
        b = TQ(this, b);
        if (!b.length) return !1;
        UQ(this, a, b, c);
        return !0
    };
    var TQ = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.M) return !0;
                P(a.R, XK(String(d)));
                return !1
            })
        },
        UQ = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.enabled) {
                var h = _.u(c);
                e = h.next();
                for (f = {}; !e.done; f = {
                        Bf: void 0
                    }, e = h.next()) f.Bf = e.value, a.j.add(f.Bf), _.Bp(f.Bf, function(k) {
                    return function() {
                        return void a.j.delete(k.Bf)
                    }
                }(f));
                RQ(a, c, b, d)
            } else c.length && _.Q(b.ca, 6) ? (P(a.R, TK(g), e), e = e.getAdUnitPath(), f = null != (h = a.I[e]) ? h : [], f.push({
                X: c,
                P: b,
                me: d
            }), a.I[e] = f) : P(a.R, RK(g), e)
        };
    MQ.prototype.o = function() {
        var a = rn().g;
        if (_.Q(a, 6))
            for (var b = _.u(this.g), c = b.next(); !c.done; c = b.next()) this.enabled && nK(this.L, c.value);
        bM(this, a);
        a = No();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    MQ.prototype.destroySlots = function(a) {
        a = KP.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = rn();
            VQ(this, a, b.g, b.A)
        }
        return a
    };
    var dM = function(a, b, c, d) {
            if (!a.enabled) return P(a.R, SK(), d[0]), !1;
            var e = TQ(a, d);
            if (!e.length) return P(a.R, km("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.R.info(VK());
            VQ(a, e, b, c);
            return !0
        },
        VQ = function(a, b, c, d) {
            for (var e = _.u(b), f = e.next(); !f.done; f = e.next()) kK(a.L, f.value);
            PQ(a, b, c, d, a.L)
        };
    MQ.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.Sf(uh).g(a)
    };
    var PQ = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.u(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                tK(a.C.L, g);
                var h = d[g.getDomId()];
                Lq(h, c) && Mq(g, f.document, h, c);
                Oq(e, g)
            }
        },
        cM = function(a, b, c, d) {
            if ("string" !== typeof b || "string" !== typeof c) P(a.R, km("PubAdsService.setVideoContent", [b, c]));
            else {
                var e = li(d, 21, !0);
                b = Ei(e, 22, b);
                Ei(b, 23, c);
                bM(a, d)
            }
        },
        eM = function(a, b) {
            if (!a.enabled) return null;
            var c, d;
            return {
                vid: null != (c = _.E(b, 22)) ? c : "",
                cmsid: null != (d = _.E(b, 23)) ? d : ""
            }
        },
        bM = function(a, b) {
            _.Q(b, 21) && a.enabled && (a = BB(), _.xk(b, 29, _.dd(a)))
        },
        NQ = function(a, b) {
            var c = "";
            if ("string" === typeof a) c = a, b = kN(b, c);
            else if (_.La(a) && 1 == a.nodeType) {
                var d = a;
                c = d.id;
                b = kN(b, c)
            } else b = (_.I = [].concat(_.Ki(b.X)), _.x(_.I, "find")).call(_.I, function(e) {
                return e.g === a
            });
            return {
                slotId: b,
                Lk: d,
                Mk: c
            }
        };
    var jw = _.Ew(["https://pagead2.googlesyndication.com/pagead/js/rum_debug.js"]),
        kw = _.Ew(["https://pagead2.googlesyndication.com/pagead/js/rum.js"]);
    var WQ = Fw(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]),
        XQ = _.zz(function() {
            xB("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        ZQ = function(a, b) {
            var c = this;
            var d = void 0 === d ? _.x(String, "raw").call(String, WQ) : d;
            this.L = a;
            this.A = d;
            this.g = new _.z.Map;
            this.X = new _.z.Set;
            b.l = function(e) {
                return YQ(c, e)
            }
        };
    ZQ.prototype.defineSlot = function(a, b, c, d, e) {
        a = to(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.g;
        a.Ne || b.error(km("googletag.defineSlot", [c, d, e]));
        return null
    };
    var to = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Vb: f,
            Xi: void 0 === g ? !1 : g
        }) : {}
    };
    ZQ.prototype.add = function(a, b, c, d, e, f) {
        var g = this,
            h = e.Vb,
            k = void 0 === e.format ? 0 : e.format,
            l = void 0 === e.Xi ? !1 : e.Xi;
        e = void 0 === e.xb ? !1 : e.xb;
        f = void 0 === f ? _.t : f;
        try {
            var m = new RegExp(this.A, "u");
            if (m.test("/1") && !m.test(c)) return b.error(GK(c)), {
                Ne: !0
            }
        } catch (p) {}
        f = Hq(k, f, e);
        null !== f && Bq(a, f, Eq(k));
        if (f) return wq(b, f, k, c), {};
        l && XQ();
        k = this.g.get(c) || Number(l);
        b = $Q(this, a, b, c, k, d, h || "gpt_unit_" + c + "_" + k);
        a = b.Fa;
        var n = b.slotId;
        b = b.Ne;
        if (!n) return {
            Ne: b
        };
        this.g.set(c, k + 1);
        this.X.add(n);
        _.Bp(n, function() {
            return void g.X.delete(n)
        });
        TJ(c);
        return {
            slotId: n,
            Fa: a
        }
    };
    var kN = function(a, b) {
            a = _.u(a.X);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        wt = function(a) {
            a = _.u(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.ya()
        },
        $Q = function(a, b, c, d, e, f, g) {
            var h = kN(a, g);
            if (h) return c.error(FK(g, d, h.getAdUnitPath())), {
                Ne: !0
            };
            var k = new pM;
            qM(Ei(k, 1, d), g);
            rM(k, Io(f));
            SL(k);
            var l = new Zg(b, d, e, g);
            ZL(l, Uo(b, c, l));
            _.Bp(l, function() {
                var m = rn(),
                    n = l.getDomId();
                delete m.A[n];
                m.l.delete(l);
                m = l.getAdUnitPath();
                m = Ql(m);
                var p;
                n = (null != (p = dm.get(m)) ? p : 0) - 1;
                0 >= n ? dm.delete(m) : dm.set(m, n);
                c.info(bL(l.toString()), l);
                (p = fm.get(l)) && gm.delete(p);
                fm.delete(l)
            });
            c.info(uK(l.toString()), l);
            l.listen(dK, function(m) {
                m = m.detail.qm;
                c.info(vK(l.getAdUnitPath()), l);
                KC(_.Sf(Tl), "7", 9, rK(a.L, l), 0, m)
            });
            l.listen(cK, function(m) {
                var n = m.detail;
                c.info(wK(l.getAdUnitPath()), l);
                var p;
                m = _.Sf(Tl);
                var r = kt(k, 20);
                n = null != (p = n.getEscapedQemQueryId()) ? p : "";
                m.g && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + r] = n)
            });
            l.listen(mt, function() {
                return void c.info(xK(l.getAdUnitPath()), l)
            });
            l.listen(nt, function() {
                return void c.info(yK(l.getAdUnitPath()), l)
            });
            return {
                Fa: k,
                slotId: l
            }
        },
        YQ = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.Ki(a.X)).some(function(d) {
                return c.test(Ql(d.getAdUnitPath()))
            })
        };
    (function(a, b) {
        var c = null != a ? a : {
            pvsid: mk(window),
            Pa: "m202403270101",
            Ze: "202403270101",
            Qa: new sw(3, "m202403270101", 0),
            kh: !0,
            kg: 1
        };
        try {
            pc(function(ea) {
                Vl(c, 1190, ea)
            });
            var d = No();
            jf(!_.Sf(Hm).g);
            _.x(Object, "assign").call(Object, Im, d._vars_);
            d._vars_ = Im;
            if (d.evalScripts) d.evalScripts();
            else {
                jJ();
                try {
                    Xh()
                } catch (ea) {
                    Vl(c, 408, ea)
                }
                dr();
                var e = new EM;
                try {
                    Th(e.I), Zn(13, c), Zn(3, c)
                } catch (ea) {
                    Vl(c, 408, ea)
                }
                var f = rw(c, e),
                    g = null != a ? a : vw(f, c),
                    h = null != b ? b : new DM(g);
                Ml(g);
                Op("gpt_fifwin", function(ea) {
                    np(ea, g)
                }, d.fifWin ? .01 : 0);
                var k = new jK,
                    l = new ZQ(k, e),
                    m = new PP(g),
                    n = _.Jm(260),
                    p = new ZJ(g),
                    r = new ZJ(g),
                    v = new ZJ(g),
                    w = _.Jm(150),
                    y = oB(),
                    B = ou(g, l, h, k, n, e, m, p, w),
                    C = _.Jm(221),
                    G = new LO,
                    F = new DN,
                    M, R, N, aa = null != (N = null == (M = B.Kb) ? void 0 : null == (R = M.Bd) ? void 0 : R.zb) ? N : new mq,
                    ha = new MQ(g, l, h, k, m, y, e, p, n, C, G, F, B, aa);
                _.H(UF) && new lN(g, p, k, l);
                var la = rn().g;
                Lt(g, h, ha, la, l, r, v, e, F, aa);
                hp(g, d, h);
                window.setTimeout(function() {
                    for (var ea = window.document.scripts, Ga = 0, ta = 0, Ba = 0; Ba < ea.length; Ba++) ea[Ba].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? Ga++ : ea[Ba].src.match("www.googletagservices.com/tag/js/gpt.js") && ta++;
                    1 < Ga && 0 === ta || 1 < ta && 0 === Ga ? P(h, BL()) : 0 < ta && 0 < Ga && h.error(CL())
                }, 1E3);
                tt();
                if (_.H(UF) || _.Sf(Tl).g) hw(), lw();
                kp(g)
            }
        } catch (ea) {
            Vl(c, 106, ea)
        }
    })();
    _.aR = _.t.requestAnimationFrame || _.t.webkitRequestAnimationFrame;
    _.bR = !!_.aR && !/'iPhone'/.test(_.t.navigator.userAgent);
    _.cR = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.j = a;
        this.l = b;
        this.g = c;
        this.na = null;
        _.Bp(this, function() {
            return d.na = null
        })
    };
    _.T(_.cR, _.V);
}).call(this, {});