window.googletag && typeof googletag._gpt_js_load_2_ == 'function' && googletag._gpt_js_load_2_(function(_, _m) {
    var dR = function(a) {
            var b = _.hf();
            if ("function" !== typeof a) throw b = b ? b() + "\n" : "", Error(b + String(a));
            return a
        },
        fR = function(a) {
            if (!eR.test(a)) return null;
            a = Number(a);
            return isNaN(a) ? null : a
        },
        gR = function(a, b) {
            return a && a.source ? a.source === b || a.source.parent === b : !1
        },
        iR = function(a) {
            var b = {
                bottom: "auto",
                clear: "none",
                display: "inline",
                "float": "none",
                height: "auto",
                left: "auto",
                margin: 0,
                "margin-bottom": 0,
                "margin-left": 0,
                "margin-right": "0",
                "margin-top": 0,
                "max-height": "none",
                "max-width": "none",
                opacity: 1,
                overflow: "visible",
                padding: 0,
                "padding-bottom": 0,
                "padding-left": 0,
                "padding-right": 0,
                "padding-top": 0,
                position: "static",
                right: "auto",
                top: "auto",
                "vertical-align": "baseline",
                visibility: "visible",
                width: "auto",
                "z-index": "auto"
            };
            _.Lx(_.x(Object, "keys").call(Object, b), function(c) {
                var d = a.style[_.ey(c)];
                ("undefined" !== typeof d ? d : a.style[_.MB(a, c)]) || _.NB(a, c, b[c])
            });
            hR(a)
        },
        lR = function(a) {
            var b = _.wj(new _.xj, a.ob);
            b = _.Aj(b, 11, a.Ea);
            b = _.Bj(b, 8, a.pvsid);
            b = _.Bj(b, 7, a.Rf);
            b = _.Aj(b, 9, a.Gb);
            var c = _.yq(b, jR, 6, _.zj);
            c = _.Aj(c, 2, a.yf);
            c = _.Cj(c, kR, 1);
            _.ti(c, 1, a.Um);
            c = _.Cj(b, _.Dj, 5);
            _.se(c, 1, _.Bc, a.fb);
            return b
        },
        mR = function(a) {
            var b;
            a = (null != (b = void 0 === a ? null : a) ? b : window).googletag;
            return (null == a ? 0 : a.apiReady) ? a : void 0
        },
        oR = function(a, b, c, d) {
            return nR(a, "fullscreen", d.Ba(952, function(e, f) {
                if (f.source === b) {
                    if (!("eventType" in e)) throw Error("bad message " + JSON.stringify(e));
                    delete e.googMsgType;
                    c(e)
                }
            }))
        },
        qR = function(a, b, c, d, e) {
            a = new pR(1, a, b, c, d, e);
            a.va();
            return a
        },
        rR = function(a) {
            var b;
            null == (b = a.g) || b.setAttribute("data-vignette-loaded", "true")
        },
        sR = function(a) {
            var b = a.ownerDocument,
                c = b.createElementNS("http://www.w3.org/2000/svg", "line");
            c.setAttribute("x1", "22");
            c.setAttribute("y1", "18");
            c.setAttribute("x2", "28");
            c.setAttribute("y2", "12");
            a.appendChild(c);
            b = b.createElementNS("http://www.w3.org/2000/svg", "line");
            b.setAttribute("x1", "28");
            b.setAttribute("y1", "12");
            b.setAttribute("x2", "34");
            b.setAttribute("y2", "18");
            a.appendChild(b)
        },
        tR = function(a) {
            var b = a.ownerDocument,
                c = b.createElementNS("http://www.w3.org/2000/svg", "line");
            c.setAttribute("x1", "22");
            c.setAttribute("y1", "12");
            c.setAttribute("x2", "28");
            c.setAttribute("y2", "18");
            a.appendChild(c);
            b = b.createElementNS("http://www.w3.org/2000/svg", "line");
            b.setAttribute("x1", "28");
            b.setAttribute("y1", "18");
            b.setAttribute("x2", "34");
            b.setAttribute("y2", "12");
            a.appendChild(b)
        },
        uR = function(a, b, c) {
            null !== b && null !== fR(a.getAttribute("width")) && a.setAttribute("width", String(b));
            null !== c && null !== fR(a.getAttribute("height")) && a.setAttribute("height", String(c));
            null !== b && (a.style.width = _.eJ(b));
            null !== c && (a.style.height = _.eJ(c))
        },
        vR = function(a) {
            a = _.dj(a);
            a = 100 * (1 > a ? 1 : a);
            return {
                width: a + "vw",
                height: a + "vh"
            }
        },
        kR = function(a) {
            this.D = _.A(a)
        };
    _.T(kR, _.D);
    var jR = function(a) {
        this.D = _.A(a)
    };
    _.T(jR, _.D);
    var wR = function(a, b, c, d) {
            if (!a.na) {
                a.na = [];
                for (var e = a.j.parentElement; e;) {
                    a.na.push(e);
                    if (a.g === e) break;
                    e = e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null
                }
            }
            e = a.na.slice();
            !c && a.g === e[e.length - 1] && e.pop();
            var f;
            if (d)
                for (c = e.length - 1; 0 <= c; --c)(f = e[c]) && b.call(a, f, c, e);
            else
                for (c = 0; c < e.length; ++c)(f = e[c]) && b.call(a, f, c, e)
        },
        xR = {
            capture: !0
        },
        yR = function(a, b) {
            return new _.Xm(a.x - b.x, a.y - b.y)
        },
        zR = function(a) {
            var b = a.document,
                c = 0;
            if (b) {
                c = b.body;
                var d = b.documentElement;
                if (!d || !c) return 0;
                a = _.YA(a).height;
                if (_.XA(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
                else {
                    b = d.scrollHeight;
                    var e = d.offsetHeight;
                    d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                    c = b > a ? b > e ? b : e : b < e ? b : e
                }
            }
            return c
        },
        eR = /^(-?[0-9.]{1,30})$/,
        AR = function(a, b) {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !== b(c) && (c = _.tj(c.children || c.childNodes || [], function(d) {
                    return 1 === d.nodeType
                }), c.length && a.unshift.apply(a, _.Ki(c)))
            }
        },
        BR = function(a) {
            var b = {};
            if (a) {
                var c = /\s*:\s*/;
                _.Lx((a || "").split(/\s*;\s*/), function(d) {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        CR = function(a, b) {
            if ("length" in a.style) {
                a = a.style;
                for (var c = a.length, d = 0; d < c; d++) {
                    var e = a[d];
                    b(a[e], e, a)
                }
            } else a = BR(a.style.cssText), _.Tn(a, b)
        },
        hR = function(a, b) {
            b = void 0 === b ? function() {
                return !0
            } : b;
            var c = /!\s*important/i;
            CR(a, function(d, e) {
                !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
            })
        },
        DR = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        ER = /.*domain\.test$/,
        FR = /\.prod\.google\.com(:\d+)?$/,
        GR = function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        HR = function(a) {
            if (1 == a.nodeType) return _.TB(a);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new _.Xm(a.clientX, a.clientY)
        },
        IR = function(a, b) {
            if (b instanceof _.an) {
                var c = b.height;
                b = b.width
            } else throw Error("missing height argument");
            a.style.width = _.UB(b, !0);
            a.style.height = _.UB(c, !0)
        },
        JR = function(a, b) {
            var c = a.currentStyle ? a.currentStyle[b] : null;
            if (c)
                if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
                else {
                    b = a.style.left;
                    var d = a.runtimeStyle.left;
                    a.runtimeStyle.left = a.currentStyle.left;
                    a.style.left = c;
                    c = a.style.pixelLeft;
                    a.style.left = b;
                    a.runtimeStyle.left = d;
                    a = +c
                }
            else a = 0;
            return a
        },
        KR = function(a, b) {
            if (_.jy) {
                var c = JR(a, b + "Left"),
                    d = JR(a, b + "Right"),
                    e = JR(a, b + "Top");
                a = JR(a, b + "Bottom");
                return new _.GB(e, d, a, c)
            }
            c = _.PB(a, b + "Left");
            d = _.PB(a, b + "Right");
            e = _.PB(a, b + "Top");
            a = _.PB(a, b + "Bottom");
            return new _.GB(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        },
        nR = function(a, b, c, d) {
            d = void 0 === d ? null : d;
            var e = function(g) {
                try {
                    var h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            _.Jf(a, "message", e);
            var f = !1;
            return function() {
                var g = !1;
                f || (f = !0, g = _.ig(a, "message", e));
                return g
            }
        },
        LR = function(a, b, c, d, e) {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (var f = 0; f < a.length; ++f) 1 < e && LR(a[f], b, c, d, --e)
        },
        MR = function(a) {
            var b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
            return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
        },
        QR = function(a, b) {
            _.V.call(this);
            this.B = a;
            this.F = this.j = this.g = !1;
            if (_.eg(a) && b.length)
                for (a = _.u(b), b = a.next(); !b.done; b = a.next()) switch (b.value) {
                    case 0:
                        NR(this);
                        break;
                    case 1:
                        OR(this);
                        break;
                    case 2:
                        PR(this)
                } else this.ya()
        };
    _.T(QR, _.V);
    QR.prototype.va = function() {
        this.M || this.l(_.eg(this.B))
    };
    var NR = function(a) {
            var b = function(d) {
                    d.isTrusted && (a.j = !0, a.l(d.timeStamp))
                },
                c = function(d) {
                    d.isTrusted && (a.j = !1, a.l(d.timeStamp))
                };
            _.Jf(a.B, "focus", b);
            _.Jf(a.B, "blur", c);
            _.Bp(a, function() {
                return void a.B.removeEventListener("focus", b)
            });
            _.Bp(a, function() {
                return void a.B.removeEventListener("blur", c)
            });
            a.j = a.B.document.hasFocus()
        },
        OR = function(a) {
            var b = function(c) {
                c.isTrusted && (a.g = 1 === _.Zr(a.B.document) ? !0 : !1, a.l(c.timeStamp))
            };
            _.Jf(a.B.document, "visibilitychange", b);
            _.Bp(a, function() {
                return void a.B.document.removeEventListener("visibilitychange", b)
            });
            a.g = 1 === _.Zr(a.B.document)
        },
        PR = function(a) {
            var b = a.B.document.body.getBoundingClientRect().top + 10,
                c = function(d) {
                    d.isTrusted && (a.F = d.clientY < b ? !0 : !1, a.l(d.timeStamp))
                };
            _.Jf(a.B.document.body, "mouseleave", c);
            _.Jf(a.B.document.body, "mouseenter", c);
            _.Bp(a, function() {
                return void a.B.document.body.removeEventListener("mouseleave", c)
            });
            _.Bp(a, function() {
                return void a.B.document.body.removeEventListener("mouseenter", c)
            });
            a.F = !1
        },
        RR = function() {
            QR.apply(this, arguments);
            this.o = new _.ai;
            this.J = this.o.promise
        };
    _.T(RR, QR);
    var SR = function(a) {
        RR.call(this, a, [0, 1, 2]);
        this.I = 0;
        this.va()
    };
    _.T(SR, RR);
    SR.prototype.l = function(a) {
        var b = this;
        switch (this.I) {
            case 0:
                this.j && !this.F && (this.I = 1);
                break;
            case 1:
                if (!this.j && this.g && this.F) {
                    this.I = 2;
                    var c = setTimeout(function() {
                        b.l(a)
                    }, 200);
                    _.Bp(this, function() {
                        return void clearTimeout(c)
                    })
                }
                break;
            case 2:
                !this.j && this.g && this.F ? (this.o.resolve(a), this.ya()) : this.I = 1
        }
    };
    var UR = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.zz(function() {
            TR(b)
        })
    };
    _.T(UR, _.V);
    UR.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var TR = function(a) {
            var b = !1,
                c = function(e) {
                    e.isTrusted && (b = !0)
                },
                d = function(e) {
                    var f = e.timeStamp;
                    if (e = e.isTrusted && !b) e = (e = a.B.document.referrer) && "function" === typeof URL ? (new URL(e)).origin === a.B.location.origin : !1;
                    if (e) {
                        f = {
                            mc: f
                        };
                        e = _.u(a.g);
                        for (var g = e.next(); !g.done; g = e.next()) {
                            g = g.value;
                            try {
                                g(f)
                            } catch (h) {}
                        }
                    }
                };
            a.B.addEventListener("focus", d);
            a.B.addEventListener("blur", c);
            _.Bp(a, function() {
                a.B.removeEventListener("focus", d);
                a.B.removeEventListener("blur", c)
            })
        },
        VR = function(a) {
            RR.call(this, a, [1]);
            this.va()
        };
    _.T(VR, RR);
    VR.prototype.l = function(a) {
        null != this.I || (this.I = 0);
        switch (this.I) {
            case 0:
                this.g && (this.I = 1);
                break;
            case 1:
                this.g || (this.I = 2, this.H = a);
                break;
            case 2:
                this.g && (this.C = a - this.H, this.o.resolve(a), this.ya())
        }
    };
    var WR = function(a, b, c) {
        _.V.call(this);
        var d = this;
        c.promise.then(function() {
            return void d.ya()
        });
        b = _.u(b);
        for (var e = b.next(), f = {}; !e.done; f = {
                Sb: void 0
            }, e = b.next()) switch (f.Sb = e.value, f.Sb) {
            case 2:
                e = new VR(a);
                _.S(this, e);
                e.J.then(function(g) {
                    return function() {
                        return void c.resolve(g.Sb)
                    }
                }(f));
                break;
            case 3:
                if (0 !== (0, _.dq)()) break;
                e = new SR(a);
                _.S(this, e);
                e.J.then(function(g) {
                    return function() {
                        return void c.resolve(g.Sb)
                    }
                }(f));
                break;
            case 4:
                e = new UR(a), _.S(this, e), e.listen(function(g) {
                    return function() {
                        return void c.resolve(g.Sb)
                    }
                }(f))
        }
    };
    _.T(WR, _.V);
    var YR = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        ZR = {
            IMG: " ",
            BR: "\n"
        },
        $R = function(a, b, c, d) {
            if (!(a.nodeName in YR))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in ZR) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(ZR[a.nodeName]);
            else
                for (a = a.firstChild; a;) $R(a, b, c, d), a = a.nextSibling
        },
        aS = / \xAD /g,
        bS = /\xAD/g,
        cS = /\u200B/g,
        dS = / +/g,
        eS = /^\s*/,
        fS = function(a) {
            var b = new _.z.Set;
            a.forEach(function(c) {
                switch (c) {
                    case 1:
                        b.add(1);
                        break;
                    case 2:
                        b.add(2);
                        break;
                    case 3:
                        b.add(3)
                }
            });
            return b
        },
        gS = function(a) {
            switch (a) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3;
                default:
                    return 0
            }
        },
        hS = function(a, b) {
            var c = this;
            this.l = a;
            this.g = !1;
            this.j = b;
            this.A = this.j.Ba(264, function(d) {
                c.g && (_.bR || (d = Date.now()), c.l(d), _.bR ? _.aR.call(_.t, c.A) : _.t.setTimeout(c.A, 17))
            })
        };
    hS.prototype.start = function() {
        this.g || (this.g = !0, _.bR ? _.aR.call(_.t, this.A) : this.A(0))
    };
    var iS = function(a, b, c, d) {
        this.g = a;
        this.F = b;
        this.Ca = c;
        this.progress = 0;
        this.A = null;
        this.C = !1;
        this.l = [];
        this.j = null;
        this.M = new hS((0, _.hx)(this.H, this), d)
    };
    iS.prototype.H = function(a) {
        if (this.C) this.M.g = !1;
        else {
            null === this.A && (this.A = a);
            this.progress = (a - this.A) / this.Ca;
            1 <= this.progress && (this.progress = 1);
            a = this.j ? this.j(this.progress) : this.progress;
            this.l = [];
            for (var b = 0; b < this.g.length; b++) this.l.push((this.F[b] - this.g[b]) * a + this.g[b]);
            this.o();
            1 == this.progress && (this.M.g = !1, this.I())
        }
    };
    iS.prototype.I = function() {};
    iS.prototype.o = function() {};
    var jS = function(a) {
        a.C = !1;
        a.M.start()
    };
    iS.prototype.reset = function(a, b, c) {
        this.A = null;
        this.g = a;
        this.F = b;
        this.Ca = c;
        this.progress = 0
    };
    var kS = function(a) {
            return a * a * a
        },
        lS = function(a) {
            a = 1 - a;
            return 1 - a * a * a
        },
        mS = function(a, b, c, d, e, f, g, h) {
            iS.call(this, [b], [c], d, f);
            this.K = a;
            this.na = e;
            this.J = g ? g : null;
            this.j = h || null
        };
    _.T(mS, iS);
    mS.prototype.o = function() {
        var a = {};
        a[this.na] = _.eJ(this.l[0]);
        _.NB(this.K, a)
    };
    mS.prototype.I = function() {
        this.J && this.J()
    };
    var pR = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.slotType = a;
        this.F = b;
        this.Uh = c;
        this.ka = d;
        this.wa = e;
        this.Gf = f;
        this.state = 1;
        this.qem = null;
        this.j = new _.ai;
        this.g = new _.ai;
        this.l = new _.ai
    };
    _.T(pR, _.V);
    var oS = function(a) {
            return _.Lf(function(b) {
                return b.return(a.j.promise)
            })
        },
        pS = function(a) {
            return _.Lf(function(b) {
                return b.return(a.g.promise)
            })
        },
        qS = function(a) {
            return _.Lf(function(b) {
                return b.return(a.l.promise)
            })
        };
    pR.prototype.va = function() {
        var a = this,
            b = oR(this.F, this.Uh, function(c) {
                if ("adError" === c.eventType) a.l.resolve(), a.state = 4;
                else if ("adReady" === c.eventType && 1 === a.state) a.qem = c.qem, c.slotType !== a.slotType && (rS(a, {
                    cur_st: a.state,
                    evt: c.eventType,
                    adp_tp: c.slotType
                }), a.state = 4), a.j.resolve(), a.state = 2;
                else if ("adClosed" === c.eventType && 2 === a.state) a.g.resolve(c.result), a.state = 3;
                else if ("adClosed" !== c.eventType || 3 !== a.state) rS(a, {
                    cur_st: a.state,
                    evt: c.eventType
                }), a.state = 4
            }, this.ka);
        _.Bp(this, b)
    };
    var rS = function(a, b) {
        var c = .25;
        c = void 0 === c ? .01 : c;
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = c;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.Gf.Nm;
        b.version = a.Gf.version;
        _.qj(a.wa, "fullscreen_tag", b, !1, c)
    };
    var uS = function(a) {
            var b = sS(_.$A(_.UA(a))) || [];
            return !!_.Gj(a, function(c) {
                if (!_.La(c) || 1 != c.nodeType) return !1;
                var d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || 0 <= _.Ha(b, c) || _.Tg(_.lB(tS), function(e) {
                    return d.call(c, e)
                })
            }, !1, 20)
        },
        sS = function(a) {
            var b = mR(a);
            return b ? _.tj(_.Mx(b.pubads().getSlots(), function(c) {
                return a.document.getElementById(c.getSlotElementId())
            }), function(c) {
                return null != c
            }) : null
        },
        tS = {
            mn: "ins.adsbygoogle-ablated-ad-slot",
            on: "body ins.adsbygoogle",
            nn: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
            Bn: ".google-auto-placed",
            Cn: "ins.adsbygoogle[data-anchor-status]",
            Dn: "iframe[id^=google_ads_iframe]",
            In: "div[id^=div-gpt-ad]",
            ao: "ins.adsbygoogle[data-ad-format=autorelaxed]",
            bo: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
            Hn: "div.googlepublisherpluginad",
            so: "html > ins.adsbygoogle"
        };
    var vS = function(a) {
        _.V.call(this);
        var b = new _.ai,
            c = b.resolve;
        this.promise = b.promise;
        a.onmessage = function() {
            return c()
        };
        _.Bp(this, function() {
            a.close()
        })
    };
    _.T(vS, _.V);
    var wS = function() {
        var a = new _.ai,
            b = a.resolve;
        return {
            Km: function(c, d) {
                null != d && d.ports.length && b(new vS(d.ports[0]))
            },
            Jm: a.promise
        }
    };
    var xS = ["mousemove", "mousedown", "scroll", "keydown"],
        zS = function(a) {
            _.V.call(this);
            var b = this;
            this.B = a;
            this.g = [];
            this.l = _.zz(function() {
                yS(b)
            })
        };
    _.T(zS, _.V);
    zS.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var yS = function(a) {
        for (var b = null, c = null, d = function(l) {
                if (b && 3E4 < l.timeStamp - b)
                    for (var m = {
                            mc: l.timeStamp,
                            rl: l.timeStamp - b,
                            cn: c
                        }, n = _.u(a.g), p = n.next(); !p.done; p = n.next()) {
                        p = p.value;
                        try {
                            p(m)
                        } catch (r) {}
                    }
                b = l.timeStamp
            }, e = _.u(xS), f = e.next(); !f.done; f = e.next()) a.B.addEventListener(f.value, d);
        var g = null,
            h, k;
        (null == (h = a.B.navigator) ? 0 : h.userActivation) && (null == (k = a.B.performance) ? 0 : k.now) && (g = a.B.setInterval(function() {
            a.B.navigator.userActivation.isActive && (c = a.B.performance.now())
        }, 1E3));
        _.Bp(a, function() {
            for (var l = _.u(xS), m = l.next(); !m.done; m = l.next()) a.B.removeEventListener(m.value, d);
            g && a.B.clearInterval(g)
        })
    };
    var BS = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.zz(function() {
            AS(b)
        })
    };
    _.T(BS, _.V);
    BS.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var AS = function(a) {
        var b = null,
            c = function(e) {
                e.isTrusted && (b = e.timeStamp)
            },
            d = function(e) {
                var f = e.timeStamp;
                if (e.isTrusted) {
                    e = _.x(Object, "assign").call(Object, {}, {
                        mc: f
                    }, b ? {
                        Pm: f - b
                    } : null);
                    f = _.u(a.g);
                    for (var g = f.next(); !g.done; g = f.next()) {
                        g = g.value;
                        try {
                            g(e)
                        } catch (h) {}
                    }
                }
            };
        a.B.addEventListener("focus", d);
        a.B.addEventListener("blur", c);
        _.Bp(a, function() {
            a.B.removeEventListener("focus", d);
            a.B.removeEventListener("blur", c)
        })
    };
    var CS = function(a, b, c, d, e, f) {
        _.V.call(this);
        var g = this;
        this.wa = c;
        this.l = d;
        this.fb = e;
        this.g = Math.floor(2147483647 * _.Bh());
        this.reportEvent = function(h, k, l) {
            l = void 0 === l ? {} : l;
            h = _.x(Object, "assign").call(Object, {
                etc: g.g,
                e: h,
                t: Math.round(k),
                qqid: g.l,
                ptt: g.fb
            }, l);
            _.qj(g.wa, "eit", h, !0, 1)
        };
        this.reportEvent(1, b);
        b = _.u(f);
        d = b.next();
        for (c = {}; !d.done; c = {
                Mc: void 0,
                If: void 0
            }, d = b.next()) switch (c.Mc = d.value, c.Mc) {
            case 101:
                d = new SR(a);
                d.J.then(function(h) {
                    return function(k) {
                        return void g.reportEvent(h.Mc, k)
                    }
                }(c));
                _.S(this, d);
                break;
            case 102:
                c.If = new VR(a);
                c.If.J.then(function(h) {
                    return function(k) {
                        return void g.reportEvent(h.Mc, k, {
                            tbd: Math.round(h.If.C || -1)
                        })
                    }
                }(c));
                _.S(this, c.If);
                break;
            case 103:
                d = new BS(a);
                d.listen(function(h) {
                    return function(k) {
                        var l;
                        g.reportEvent(h.Mc, k.mc, {
                            tsb: null != (l = k.Pm) ? l : -1
                        })
                    }
                }(c));
                _.S(this, d);
                break;
            case 104:
                d = new zS(a);
                d.listen(function(h) {
                    return function(k) {
                        var l;
                        g.reportEvent(h.Mc, k.mc, {
                            it: k.rl,
                            ualta: null != (l = k.cn) ? l : -1
                        })
                    }
                }(c));
                _.S(this, d);
                break;
            case 105:
                d = new UR(a), d.listen(function(h) {
                    return function(k) {
                        g.reportEvent(h.Mc, k.mc)
                    }
                }(c)), _.S(this, d)
        }
    };
    _.T(CS, _.V);
    var ES = function(a) {
            this.g = null;
            this.l = a.match(_.iB)[3] || "";
            this.j = DS(a);
            this.A = !1
        },
        FS = function(a, b) {
            b ? a.g = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.g = null
        },
        IS = function(a, b, c) {
            if (_.Tg(["data-google-vignette", "data-google-interstitial"], function(f) {
                    return "false" === b.getAttribute(f) || b.closest && !!b.closest("[" + f + '="false"]')
                })) return !1;
            var d = b.href,
                e = d && (d.match(_.iB)[3] || null);
            if (!GS(a, b, d, e, c)) return !1;
            a.A = !!e && HS(a, e);
            return a.A || !c && !uS(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
        },
        GS = function(a, b, c, d, e) {
            if (!c) return !1;
            switch (b.target) {
                case "_top":
                case "_parent":
                    break;
                case "":
                case "_self":
                    if (e) return !1;
                    break;
                default:
                    return !1
            }
            return !d || HS(a, d) && DS(c) == a.j ? !1 : !0
        },
        HS = function(a, b) {
            return b.replace(JS, "") == a.l.replace(JS, "")
        },
        DS = function(a) {
            a = a.match(_.iB);
            var b = a[6];
            return (a[5] || "") + (b ? "?" + b : "") || "/"
        },
        JS = /^(www\.|m\.|mobile\.)*/i;
    var MS = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        _.V.call(this);
        var f = this;
        this.F = a;
        this.fa = b;
        this.ka = c;
        this.wa = d;
        this.Ma = {};
        this.Ud = this.ka.Ba(168, function(g, h) {
            return void KS(f, g, h)
        });
        this.Vd = this.ka.Ba(169, function(g, h) {
            _.qj(f.wa, "ras::xsf", {
                c: h.data.substring(0, 500),
                u: f.F.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        });
        this.O = [];
        LS(this, this.Ma, e);
        this.O.push(nR(this.F, "sth", this.Ud, this.Vd))
    };
    _.T(MS, _.V);
    var KS = function(a, b, c) {
        try {
            if (!a.xa(c.origin) || !gR(c, a.fa.contentWindow)) return
        } catch (f) {
            return
        }
        var d = b.msg_type,
            e;
        "string" === typeof d && (e = a.Ma[d]) && a.ka.Fb(168, function() {
            e.call(a, b, c)
        })
    };
    MS.prototype.xa = function(a) {
        return _.wB[a] || DR.test(a) || ER.test(a) || FR.test(a)
    };
    MS.prototype.A = function() {
        for (var a = _.u(this.O), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.O.length = 0;
        _.V.prototype.A.call(this)
    };
    var QS = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        var p = {};
        MS.call(this, a, b, c, e, (p.fullscreenApi = h.Ej, p.heavyAdInterventionResponse = h.ml, p));
        var r = this;
        this.o = d;
        this.requestedSize = f;
        this.J = h;
        this.V = l;
        this.g = m;
        this.pb = _.dg();
        this.ua = "true" === g["i-fvs"];
        this.yf = g.qid;
        this.H = null != n ? n : new ES(a.location.href);
        this.Jb = "true" === g.iobs && "IntersectionObserver" in this.F;
        var v, w;
        FS(this.H, null != (w = null == (v = g.stop_word) ? void 0 : v.split(";")) ? w : null);
        this.I = this.J.Ej ? qR(a, b.contentWindow, c, e, this.J.Gf) : null;
        this.C = {
            yi: !1
        };
        this.j = {};
        this.qa = {
            tag: 0
        };
        this.l = {
            Jo: !0,
            Vj: !1,
            Je: !1,
            tg: !0
        };
        NS(this);
        OS(this);
        k.size && (b = new _.ai, b.promise.then(function(C) {
            r.l.be || r.M || PS(r, C)
        }), this.eb = new WR(a, k, b), _.S(this, this.eb));
        var y;
        if (null == (y = h.di) ? 0 : y.length)
            if (k = _.eg(a)) {
                var B = new CS(a, k, e, this.yf, 17, h.di);
                _.S(this, B);
                this.Dc = function(C) {
                    B.reportEvent(2, C - _.gg(a))
                }
            }
    };
    _.T(QS, MS);
    var NS = function(a) {
            a.I && (oS(a.I).then(function() {
                rR(a.o);
                a.na()
            }), pS(a.I).then(function() {
                return void RS(a)
            }), qS(a.I).then(function() {
                return void a.K()
            }))
        },
        LS = function(a, b, c) {
            b["i-blur"] = function() {
                a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 27
                }));
                a.l.Je = !0;
                a.l.eh && (a.l.tg = !0)
            };
            b["i-no"] = function(g) {
                a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 26
                }));
                a.qa = {
                    tag: 1,
                    No: g.i_tslv ? g.i_tslv : void 0
                }
            };
            if (c.heavyAdInterventionResponse) {
                var d = dR(c.heavyAdInterventionResponse);
                if (d) {
                    var e = wS(),
                        f = e.Jm;
                    b["i-hai-aux"] = e.Km;
                    f.then(function(g) {
                        _.S(a, g);
                        g.promise.then(function() {
                            return d()
                        })
                    })
                }
            }
            c.fullscreenApi || (b["i-adframe-load"] = function() {
                rR(a.o);
                a.na()
            }, b["i-dismiss"] = function() {
                RS(a)
            }, b.i_iif = function() {
                a.K()
            })
        };
    QS.prototype.na = function() {
        var a = void 0 === a ? !1 : a;
        this.C.Mi || (this.C.Mi = _.dg(), a && rR(this.o))
    };
    var RS = function(a) {
        a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
            U: 33
        }));
        a.l.Je ? (SS(a) ? (a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
            U: 34
        })), a.F.history.back()) : (a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
            U: 35
        })), TS(a)), a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
            U: 36
        }))) : (_.t.setTimeout(function() {
            TS(a)
        }, 1E3), a.l.Mg ? (a.l.eh && (a.l.tg = !1), US(a, a.l.Mg)) : a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
            U: 37
        })))
    };
    QS.prototype.K = function() {
        this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 23
        }));
        this.C.yi = !0
    };
    var VS = function(a) {
            SS(a) || (a.F.location.hash = "google_vignette");
            a.l.eh = a.ka.Ba(526, function() {
                a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 62
                }));
                a.l.tg ? (SS(a) ? (a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 64
                })), US(a, a.j.Xa.href)) : TS(a), a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 65
                }))) : a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 63
                }))
            });
            _.t.setTimeout(_.ix(_.Jf, a.F, "hashchange", a.l.eh), 0)
        },
        WS = function(a, b) {
            a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 10
            }));
            var c = _.dg(),
                d = _.Pj(a.F).wasReactiveAdVisible[9];
            if (b) {
                var e = a.H;
                if (b && e.g) {
                    var f = [];
                    $R(b, f, !0, !0);
                    b = f.join("");
                    b = b.replace(aS, " ").replace(bS, "");
                    b = b.replace(cS, "");
                    b = b.replace(dS, " ");
                    " " != b && (b = b.replace(eS, ""));
                    if (b) {
                        e = b.match(e.g);
                        b = [];
                        for (f = 0; e && f < e.length; f++) {
                            var g = e[f].toLowerCase();
                            0 <= _.Ha(b, g) || b.push(g)
                        }
                        e = b
                    } else e = []
                } else e = []
            } else e = [];
            (b = a.J.ql) || (b = _.$i(a.F), b = .05 > Math.abs(b - 1));
            f = a.requestedSize.width < a.requestedSize.height === _.Yi(a.F);
            if (864E5 <= c - a.pb) return a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 11
            })), !1;
            a: switch (a.qa.tag) {
                case 0:
                    c = !0;
                    break a;
                case 1:
                    c = !1;
                    break a;
                default:
                    c = !1
            }
            if (!c) return a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 12
            })), !1;
            if (a.C.yi) return a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 13
            })), !1;
            if (SS(a)) return a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 14
            })), !1;
            if (!a.C.Mi) return a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 15
            })), !1;
            if (!a.ua && d) return a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 16
            })), !1;
            a.ua && a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 17
            }));
            d && a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 18
            }));
            if (e.length) return a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 19
            })), !1;
            if (!b) return a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 20
            })), !1;
            if (!f) return a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 21
            })), !1;
            a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 22
            }));
            return !0
        },
        YS = function(a, b) {
            a.l.vd = XS(a, b, "prerender");
            a.l.ud = XS(a, b, "prefetch");
            a.F.document.body.appendChild(a.l.vd);
            a.F.document.body.appendChild(a.l.ud)
        },
        XS = function(a, b, c) {
            a = _.hg("LINK", a.F.document);
            a.setAttribute("rel", c);
            a.setAttribute("href", b);
            return a
        },
        ZS = function(a, b) {
            for (b = b.target; b;) {
                if ("nodeName" in b && "A" === b.nodeName) {
                    if (IS(a.H, b, b.ownerDocument !== a.F.document)) return b;
                    break
                }
                b = "parentElement" in b ? b.parentElement : null
            }
            return null
        };
    QS.prototype.A = function() {
        this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 24
        }));
        MS.prototype.A.call(this);
        SS(this) && US(this, this.j.Xa.href);
        this.j.Hb && (_.ig(this.F.document, "click", this.j.Hb), this.j.Hb = void 0);
        this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 25
        }))
    };
    var TS = function(a) {
            a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 38
            }));
            a.l.be ? (a.l.Vj = !0, a.j.Hb && (_.ig(a.F.document, "click", a.j.Hb), a.j.Hb = void 0), a.l.vd && a.l.vd.parentNode && (a.l.vd.parentNode.removeChild(a.l.vd), a.l.vd = void 0), a.l.ud && a.l.ud.parentNode && (a.l.ud.parentNode.removeChild(a.l.ud), a.l.ud = void 0), $S(a.o, !1), a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 40
            }))) : a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 39
            }))
        },
        OS = function(a) {
            a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 41
            }));
            if (a.j.Hb) a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 42
            }));
            else {
                a.j.Hb = a.ka.Ba(527, function(e) {
                    aT(a, e)
                });
                if (null !== a.j.Hb) {
                    var b = a.j.Hb;
                    _.Jf(a.F.document, "click", function(e) {
                        b(e)
                    }, xR)
                }
                for (var c = a.F.frames, d = 0; d < c.length; d++) try {
                    _.Jf(c[d].document, "click", a.j.Hb, xR)
                } catch (e) {}
                a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 43
                }))
            }
        },
        US = function(a, b) {
            a = a.F.location;
            b = _.xa(b);
            b = _.Ea(b);
            void 0 !== b && a.replace(b)
        },
        PS = function(a, b) {
            a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 28
            }));
            if (WS(a)) {
                var c = 1 === b;
                if (a.J.Kk) {
                    var d;
                    (d = a.l).Je || (d.Je = !c)
                }
                if (a.mb()) {
                    a.l.be = Date.now();
                    _.Pj(a.F).wasReactiveAdVisible[8] = !0;
                    c && a.j.Xa && (a.l.Mg = a.j.Xa.href);
                    bT(a);
                    a.j.Xa && YS(a, a.j.Xa.href);
                    VS(a);
                    _.Jf(a.F, "pagehide", a.ka.Ba(528, function() {
                        TS(a)
                    }));
                    if (c) {
                        var e;
                        null == (e = a.Dc) || e.call(a, a.l.be)
                    }
                    $S(a.o, !0);
                    a.J.zi && a.V.log(578856259, lR, _.x(Object, "assign").call(Object, {}, a.g, {
                        ob: a.J.zi,
                        Um: gS(b),
                        yf: a.yf
                    }));
                    var f;
                    null == (f = a.eb) || f.ya();
                    a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                        U: 32
                    }))
                } else a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 30
                })), c && a.j.Xa && (a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 31
                })), US(a, a.j.Xa.href))
            } else a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 29
            }))
        };
    QS.prototype.zc = function(a) {
        this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 54
        }));
        this.l.be ? this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 56
        })) : this.M ? this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 57
        })) : this.j.Xa ? a.preventDefaultTriggered ? (this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 59
        })), this.j.Xa = void 0) : IS(this.H, this.j.Xa, this.j.Xa.ownerDocument !== this.F.document) ? WS(this) ? (PS(this, 1), this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 61
        }))) : (this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 60
        })), US(this, this.j.Xa.href)) : (this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 55
        })), US(this, this.j.Xa.href)) : this.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, this.g, {
            U: 58
        }))
    };
    QS.prototype.mb = function() {
        return !0
    };
    var aT = function(a, b) {
            a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 44
            }));
            if (b)
                if (b.defaultPrevented) a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 46
                }));
                else if (a.l.be) a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 50
            }));
            else if (a.l.Mg) a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 51
            }));
            else if (a.M) a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 47
            }));
            else if (a.j.Xa) a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 52
            }));
            else {
                var c = ZS(a, b);
                c ? WS(a, c) ? (a.j.Xa = c, GR(b), b.preventDefault = function() {
                    return b && (b.preventDefaultTriggered = !0)
                }, _.t.setTimeout((0, _.hx)(a.zc, a, b), 0), a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 53
                }))) : a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 49
                })) : a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                    U: 48
                }))
            } else a.V.log(578856259, _.Fj, _.x(Object, "assign").call(Object, {}, a.g, {
                U: 45
            }))
        },
        SS = function(a) {
            return -1 !== a.F.location.hash.indexOf("google_vignette")
        },
        bT = function(a) {
            if (!a.Jb)
                if (a.I) _.t.IntersectionObserver || a.I.Uh.postMessage(JSON.stringify({
                    eventType: "visible",
                    googMsgType: "fullscreen"
                }), "*");
                else {
                    var b = {};
                    b = (b.msg_type = "i-view", b);
                    var c;
                    (null == (c = a.fa) ? void 0 : c.contentWindow).postMessage(JSON.stringify(b), "*")
                }
        };
    var cT = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.g = a;
        this.l = b;
        this.j = c;
        _.Jf(this.g, this.l, this.j, xR);
        _.Bp(this, function() {
            return void d.remove()
        })
    };
    _.T(cT, _.V);
    cT.prototype.remove = function() {
        this.g && _.ig(this.g, this.l, this.j, xR)
    };
    var dT = function(a) {
        this.l = a;
        this.reset()
    };
    dT.prototype.add = function(a) {
        var b = Date.now();
        this.g.push({
            time: b,
            coords: a
        });
        for (a = this.A; a < this.g.length; ++a)
            if (b - this.g[a].time >= this.l) delete this.g[a];
            else break;
        this.A = a;
        a >= this.g.length && this.reset()
    };
    dT.prototype.reset = function() {
        this.g = [];
        this.A = 0
    };
    var fT = function(a, b, c, d) {
        _.V.call(this);
        var e = this;
        this.F = a;
        this.target = b;
        this.handle = c || b;
        this.eb = d || 100;
        this.o = this.J = this.fa = !1;
        this.I = this.g = this.l = this.j = this.na = this.H = this.O = this.K = null;
        this.qb = new cT(this.handle, "mousedown", function(f) {
            0 == f.button && eT(e, f)
        });
        _.S(this, this.qb);
        this.Jb = new cT(this.handle, "touchstart", function(f) {
            return eT(e, f)
        });
        _.S(this, this.Jb);
        this.pb = new cT(this.handle, "click", function(f) {
            e.fa ? (e.onClick(), e.fa = !1) : f.stopPropagation()
        });
        _.S(this, this.pb)
    };
    _.T(fT, _.V);
    var gT = function(a) {
        a = a.touches && a.touches[0] || a;
        return new _.Xm(a.clientX, a.clientY)
    };
    fT.prototype.ga = function() {
        if (this.j && this.l && this.g) {
            var a = this.j,
                b = yR(this.g, this.l);
            var c = new _.Xm(a.x + b.x, a.y + b.y);
            a = this.target;
            c instanceof _.Xm ? (b = c.x, c = c.y) : (b = c, c = void 0);
            a.style.left = _.UB(b, !1);
            a.style.top = _.UB(c, !1)
        }
    };
    fT.prototype.ja = function() {};
    fT.prototype.onClick = function() {};
    fT.prototype.W = function() {
        var a = this.target,
            b = _.dB(a);
        var c = HR(a);
        b = HR(b);
        c = new _.Xm(c.x - b.x, c.y - b.y);
        a = KR(a, "margin");
        return yR(c, new _.Xm(a.left, a.top))
    };
    var eT = function(a, b) {
        a.J && hT(a);
        a.J = !0;
        a.j = a.W();
        a.l = gT(b);
        a.g = a.l;
        a.I = new dT(a.eb);
        a.I.add(a.l);
        a.K = new cT(a.F, "mousemove", (0, _.hx)(a.xa, a));
        _.S(a, a.K);
        a.O = new cT(a.F, "touchmove", (0, _.hx)(a.xa, a));
        _.S(a, a.O);
        a.H = new cT(a.F, "mouseup", (0, _.hx)(a.Ma, a));
        _.S(a, a.H);
        a.na = new cT(a.F, "touchend", (0, _.hx)(a.Ma, a));
        _.S(a, a.na)
    };
    fT.prototype.xa = function(a) {
        if (this.J)
            if (a.preventDefault(), this.g = gT(a), this.I.add(this.g), this.o) this.ga();
            else {
                var b = this.l,
                    c = this.g;
                a = b.x - c.x;
                b = b.y - c.y;
                10 <= Math.sqrt(a * a + b * b) && (this.ga(), this.o = !0)
            }
    };
    fT.prototype.Ma = function(a) {
        this.o ? (a.preventDefault(), this.g = gT(a), this.ja()) : this.fa = !0;
        hT(this)
    };
    var hT = function(a) {
        a.J = !1;
        a.o = !1;
        a.j = null;
        a.l = null;
        a.g = null;
        a.I = null;
        a.K && a.K.remove();
        a.O && a.O.remove();
        a.H && a.H.remove();
        a.na && a.na.remove()
    };
    var lT = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        _.V.call(this);
        var p = this;
        this.config = a;
        this.oa = b;
        this.H = c;
        this.J = d;
        this.Ma = f || function() {};
        this.qa = g || function() {};
        this.ka = h;
        this.wa = k;
        this.xa = l;
        this.fa = m;
        this.j = (this.o = n) ? 2 : 1;
        _.Bp(this, function() {
            return iT(p, !0)
        });
        this.C = _.hg("INS", b.document);
        _.Bp(this, function() {
            return p.C = null
        });
        this.I = null;
        HTMLElement.prototype.attachShadow && !this.ka.Fb(1013, function() {
            p.I = _.hg("DIV", b.document);
            p.I.className = "grippy-host";
            p.I.attachShadow({
                mode: "closed"
            }).appendChild(p.C);
            _.Bp(p, function() {
                return p.I = null
            });
            return !0
        }) && (this.I = null);
        this.K = this.F = !1;
        this.na = 0;
        this.g = e;
        this.ga = !1;
        this.l = this.O = null;
        this.ra = b.innerHeight;
        this.ja = "true" === this.config.scroll_detached;
        this.W = "true" === this.config.dismissable;
        this.qb = "true" === this.config.draggable || "top" != this.g;
        this.mb = this.config.expId || "";
        this.eb = this.config.qemId || "";
        a = parseInt(this.config.z_index_override, 10);
        this.ua = isNaN(a) ? null : a;
        this.pb = new _.xI(b);
        !this.W && _.t.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(function() {
            var r = p.oa.innerHeight;
            if (2 > Math.abs(r - 460) || 2 > Math.abs(r - 529)) r < p.ra && 2 > Math.abs(_.fj(p.oa) - p.na - 68) && (p.ga = !0, 0 === p.j && jT(p)), p.ra = r
        }, 300);
        kT(this, this.C)
    };
    _.T(lT, _.V);
    var mT = function(a, b) {
            if ("top" == a.g) {
                var c;
                _.Hp(null != (c = a.I) ? c : a.C, {
                    top: _.eJ(b)
                })
            }
        },
        kT = function(a, b) {
            iR(b);
            _.Hp(b, {
                "background-color": "#FAFAFA",
                display: "block",
                position: "relative",
                "z-index": 1,
                height: _.eJ(5),
                "box-shadow": "top" == a.g ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
            });
            if ("top" == a.g) {
                var c, d, e = {
                        position: "absolute",
                        top: _.eJ(null != (d = null == (c = a.o) ? void 0 : c.maxHeight) ? d : a.J.height),
                        width: "100%"
                    },
                    f;
                _.Hp(null != (f = a.I) ? f : b, e)
            }
            var g = _.hg("SPAN", a.oa.document);
            g.appendChild(nT(a));
            var h = function(k) {
                k.target === g && (k.preventDefault && k.preventDefault(), k.stopImmediatePropagation && k.stopImmediatePropagation(), k.stopPropagation && k.stopPropagation())
            };
            _.Jf(g, "click", h);
            _.Bp(a, function() {
                return _.ig(g, "click", h)
            });
            oT(a, g);
            b.className = "ee";
            b.appendChild(g)
        },
        oT = function(a, b) {
            var c = {};
            a = (c.display = "block", c.width = "80px", c.height = "45px", c[a.g] = "0", c.left = "0%", c.marginLeft = "0px", c["pointer-events"] = "none", c);
            c = b.getElementsByTagName("svg")[0];
            _.Hp(b, a);
            hR(c)
        },
        pT = function(a) {
            var b;
            return null != (b = a.I) ? b : a.C
        },
        nT = function(a) {
            switch (a.g) {
                case "top":
                    var b = "dropShadowBottom";
                    var c = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                    var d = "0";
                    var e = "up";
                    var f = sR;
                    break;
                case "bottom":
                    b = "dropShadowTop", c = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", d = "25", e = "down", f = tR
            }
            var g = a.oa.document,
                h = g.createElementNS("http://www.w3.org/2000/svg", "svg");
            h.style.setProperty("margin", "0 0 0 0px", "important");
            h.style.setProperty("position", "absolute", "important");
            h.style.setProperty(a.g, "0", "important");
            h.style.setProperty("left", "0%", "important");
            h.style.setProperty("display", "block", "important");
            h.style.setProperty("width", "80px", "important");
            h.style.setProperty("height", "30px", "important");
            h.style.setProperty("transform", "none", "important");
            h.style.setProperty("pointer-events", "initial", "important");
            a = g.createElementNS("http://www.w3.org/2000/svg", "defs");
            var k = g.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", b);
            k.setAttribute("filterUnits", "userSpaceOnUse");
            k.setAttribute("color-interpolation-filters", "sRGB");
            var l = g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
            l.setAttribute("in", "SourceAlpha");
            l.setAttribute("result", "TransferredAlpha");
            var m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
            m.setAttribute("type", "discrete");
            m.setAttribute("tableValues", "0.5");
            l.appendChild(m);
            m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
            m.setAttribute("type", "discrete");
            m.setAttribute("tableValues", "0.5");
            l.appendChild(m);
            m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
            m.setAttribute("type", "discrete");
            m.setAttribute("tableValues", "0.5");
            l.appendChild(m);
            k.appendChild(l);
            l = g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("in", "TransferredAlpha");
            l.setAttribute("stdDeviation", "2");
            k.appendChild(l);
            l = g.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            l.setAttribute("dx", "0");
            l.setAttribute("dy", "0");
            l.setAttribute("result", "offsetblur");
            k.appendChild(l);
            l = g.createElementNS("http://www.w3.org/2000/svg", "feMerge");
            l.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
            m = g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            m.setAttribute("in", "SourceGraphic");
            l.appendChild(m);
            k.appendChild(l);
            a.appendChild(k);
            h.appendChild(a);
            a = g.createElementNS("http://www.w3.org/2000/svg", "path");
            a.setAttribute("d", c);
            a.setAttribute("stroke", "#FAFAFA");
            a.setAttribute("stroke-width", "1");
            a.setAttribute("fill", "#FAFAFA");
            a.style.setProperty("filter", "url(#" + b + ")");
            h.appendChild(a);
            b = g.createElementNS("http://www.w3.org/2000/svg", "rect");
            b.setAttribute("x", "0");
            b.setAttribute("y", d);
            b.setAttribute("width", "80");
            b.setAttribute("height", "5");
            b.style.setProperty("fill", "#FAFAFA");
            h.appendChild(b);
            d = g.createElementNS("http://www.w3.org/2000/svg", "g");
            d.setAttribute("class", e);
            d.setAttribute("stroke", "#616161");
            d.setAttribute("stroke-width", "2px");
            d.setAttribute("stroke-linecap", "square");
            f(d);
            h.appendChild(d);
            return h
        },
        qT = function(a, b) {
            for (var c = a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0], d; d = c.firstChild;) c.removeChild(d);
            switch (a.g) {
                case "top":
                    (b ? tR : sR)(c);
                    break;
                case "bottom":
                    (b ? sR : tR)(c)
            }
        },
        rT = function(a, b, c, d) {
            b = {
                i: b,
                dc: 0 === a.j ? "1" : "0",
                fdc: c ? "1" : "0",
                ds: a.W ? "1" : "0",
                expId: a.mb,
                sc: a.ja ? "1" : "0",
                off: d,
                vw: _.Zi(a.oa),
                req: a.H.src,
                tp: a.g,
                h: a.J.height,
                w: a.J.width,
                qemId: a.eb
            };
            _.qj(a.wa, "flgr", b, !0, 1)
        };
    lT.prototype.onClick = function(a) {
        a.preventDefault();
        this.F || (this.ga = !0, jT(this), rT(this, "c", 0 !== this.j, 0))
    };
    var jT = function(a, b) {
            b = void 0 === b ? a.W : b;
            switch (a.j) {
                case 1:
                    a.show();
                    break;
                case 2:
                    sT(a);
                    break;
                case 0:
                    a.o ? sT(a) : a.show();
                    break;
                case 3:
                    iT(a, b);
                    break;
                case 4:
                    a.show()
            }
        },
        tT = function(a) {
            var b = a.o.maxHeight;
            4 !== a.j && (a.l.style[a.g] = "-" + (b - (parseInt(a.l.style.height, 10) + parseInt(a.l.style[a.g], 10))) + "px");
            a.l.style.height = b + "px";
            a.H.style["max-height"] = "none";
            a.H.height = "100%";
            mT(a, b);
            null != (a = a.O) && (a.C = b)
        },
        vT = function(a, b) {
            "bottom" == a.g && MR(a.oa) && a.ka.Fb(404, function() {
                return uT(a, "0px", b, "ease-out")
            })
        };
    lT.prototype.show = function() {
        var a = this;
        if (!this.F) {
            var b = this.o && parseInt(this.l.style.height, 10) > this.J.height,
                c = parseInt(this.l.style[this.g], 10);
            if (c || b) {
                var d = function() {
                    a.j = 3;
                    if (b) {
                        var g = a.J.height;
                        a.l.style[a.g] = "0";
                        a.l.style.height = g + "px";
                        a.H.height = g;
                        a.H.style["max-height"] = "30vh";
                        mT(a, g);
                        var h;
                        null != (h = a.O) && (h.C = g)
                    }
                    a.F = !1;
                    a.K = !1;
                    wT(a);
                    a.l.setAttribute("data-anchor-status", "displayed");
                    a.l.setAttribute("data-anchor-shown", !0);
                    qT(a, !1)
                };
                this.F = !0;
                if (c && !b) {
                    var e = -c / .1;
                    vT(this, e);
                    qT(this, !1);
                    c = new mS(this.l, c, 0, e, this.g, this.ka, d, lS);
                    this.fa();
                    jS(c)
                } else if (b) {
                    var f = this.o.maxHeight;
                    e = this.J.height - f;
                    f = (f + c > this.J.height ? -1 : 1) * (e - c) / .1;
                    vT(this, f);
                    c === e ? d() : (c = new mS(this.l, c, e, f, this.g, this.ka, d, lS), this.fa(), jS(c))
                }
            } else this.K = !1
        }
    };
    var sT = function(a) {
            if (!a.F) {
                tT(a);
                var b = parseInt(a.l.style[a.g], 10),
                    c = function() {
                        a.F = !1;
                        a.j = 4;
                        a.K = !1;
                        wT(a);
                        a.l.setAttribute("data-anchor-status", "displayed");
                        a.l.setAttribute("data-anchor-shown", !0);
                        qT(a, !1)
                    };
                if (b) {
                    a.F = !0;
                    var d = -b / .1;
                    vT(a, d);
                    qT(a, !1);
                    b = new mS(a.l, b, 0, d, a.g, a.ka, c, lS);
                    a.fa();
                    jS(b)
                } else c()
            }
        },
        iT = function(a, b) {
            if (!a.F && a.l) {
                var c = parseInt(a.l.style[a.g], 10),
                    d = -(4 === a.j ? a.o.maxHeight : a.J.height) - (b ? 30 : 0),
                    e = (c - d) / .1;
                "bottom" == a.g && MR(a.oa) && a.ka.Fb(405, function() {
                    return uT(a, "21px", e, "ease-in")
                });
                b || qT(a, !0);
                c === d ? (b || (a.j = 0), a.K = b) : (a.F = !0, c = new mS(a.l, c, d, e, a.g, a.ka, function() {
                    a.F = !1;
                    b || (a.j = 0);
                    (a.K = b) || qT(a, !0);
                    b && a.Ma();
                    a.l.setAttribute("data-anchor-status", "dismissed")
                }, kS), a.xa(), jS(c))
            }
        },
        zT = function(a, b) {
            if ("bottom" !== a.g && "top" !== a.g) throw Error("unsupported reactive type");
            var c = function(k) {
                    return a.onClick(k)
                },
                d = a.C;
            _.Jf(d, "click", c);
            _.Bp(a, function() {
                return _.ig(d, "click", c)
            });
            a.I && (_.Jf(a.I, "click", c), _.Bp(a, function() {
                return a.I && _.ig(a.I, "click", c)
            }));
            _.NB(b, {
                opacity: 1
            });
            var e = a.oa.document;
            if (e) {
                a.l = b;
                var f, g, h = null != (g = null == (f = a.o) ? void 0 : f.maxHeight) ? g : a.J.height;
                a.qb && (a.O = new("top" == a.g ? xT : yT)(a, e, h, b, a.C), _.S(a, a.O));
                e = {
                    position: "fixed",
                    left: _.eJ(0)
                };
                e[a.g] = _.eJ(-h - 30);
                _.NB(b, e);
                _.Hp(b, {
                    overflow: "visible",
                    background: "#FAFAFA"
                });
                _.BI(a.pb, function(k) {
                    var l = null == a.ua ? 2147483647 : a.ua;
                    _.NB(b, {
                        zIndex: null == k ? l : Math.min(k, l)
                    })
                });
                jT(a)
            }
        },
        uT = function(a, b, c, d) {
            _.NB(a.H, {
                transition: c / 1E3 + "s",
                "transition-timing-function": d,
                "margin-top": b
            })
        },
        wT = function(a) {
            a.qa();
            a.qa = function() {}
        },
        AT = function(a, b, c, d, e) {
            fT.call(this, b, d, e);
            this.mb = a;
            this.C = c
        };
    _.T(AT, fT);
    AT.prototype.ja = function() {
        var a = this.mb;
        if (!a.F) {
            var b = parseInt(a.l.style[a.g], 10),
                c = b + parseInt(a.l.style.height, 10),
                d = a.J.height / 2;
            c >= (a.o ? a.o.maxHeight / 2 : _.x(Number, "MAX_SAFE_INTEGER")) ? (sT(a), rT(a, "d", !1, b)) : c >= d ? (a.show(), rT(a, "d", !1, b)) : (iT(a, a.W), rT(a, "d", !0, b))
        }
    };
    AT.prototype.ga = function() {
        if (null !== this.j && null !== this.l && null !== this.g) {
            var a = this.ua(this.j.y, yR(this.g, this.l).y);
            0 < a && (a = 0);
            a < -this.C && (a = -this.C);
            var b = {};
            b[this.qa()] = _.eJ(a);
            _.NB(this.target, b)
        }
    };
    var xT = function(a, b, c, d, e) {
        AT.call(this, a, b, c, d, e)
    };
    _.T(xT, AT);
    xT.prototype.W = function() {
        return new _.Xm(0, parseInt(this.target.style.top, 10))
    };
    xT.prototype.ua = function(a, b) {
        return b - a
    };
    xT.prototype.qa = function() {
        return "top"
    };
    var yT = function(a, b, c, d, e) {
        AT.call(this, a, b, c, d, e)
    };
    _.T(yT, AT);
    yT.prototype.W = function() {
        return new _.Xm(0, parseInt(this.target.style.bottom, 10))
    };
    yT.prototype.ua = function(a, b) {
        return a - b
    };
    yT.prototype.qa = function() {
        return "bottom"
    };
    var HT = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? null : g;
        _.cR.call(this, a, b, f);
        var h = this;
        this.ka = d;
        this.wa = e;
        this.C = this.zc = this.Jb = 0;
        this.pb = this.Bj = !1;
        this.I = null;
        this.O = this.ua = !1;
        this.H = null;
        this.qa = KR(b.document.body, "padding");
        this.o = KR(b.document.body, "padding");
        this.K = 0;
        this.Ni = this.fa = !1;
        this.ja = !0;
        this.F = c;
        this.J = BT(this);
        this.W = null;
        this.Ud = this.Vd = this.xa = this.mb = this.eb = this.Ii = this.Gj = this.Hj = !1;
        this.Oj = _.YA(b || window).height / 2;
        this.Kj = _.YA(b || window).height;
        this.Hi = zR(b);
        this.Gi = this.ga = this.Cc = !1;
        this.hn = g;
        CT(this);
        this.Qi = this.ka.Ba(266, function() {
            DT(h)
        });
        this.Si = this.ka.Ba(267, function() {
            DT(h)
        });
        this.Wi = this.ka.Ba(268, function() {
            if (h.fa && h.g && h.I) {
                var k = h.I;
                k.na = _.fj(k.oa)
            }
            k = _.fj(h.l);
            var l = k - h.Jb;
            ET(h, l);
            h.xa && (0 < l && (h.C += l), h.Cc = h.Hi - k <= h.Kj, h.Jb = k);
            DT(h)
        });
        this.cj = this.ka.Ba(269, function() {
            FT(h)
        });
        this.dj = this.ka.Ba(270, function(k) {
            GT(h, k)
        });
        this.kj = this.ka.Ba(271, function(k) {
            if (k && k.touches) {
                h.H = "touchmove";
                h.K = k.touches.length;
                h.O = !0;
                DT(h);
                if (!h.Bj && k.touches && 0 != k.touches.length && k.touches[0]) {
                    k = k.touches[0].pageY;
                    var l = k - h.zc;
                    h.zc = k;
                    k = l
                } else k = 0;
                0 < k && (h.C += k);
                ET(h, k)
            }
        });
        this.wj = this.ka.Ba(272, function(k) {
            k && k.touches && k.touches[0] && (h.H = "touchstart", h.K = k.touches.length, h.O = !1, DT(h), h.zc = k.touches[0].pageY, k = (k = k.target) && "top" == h.F && h.ua && h.I && pT(h.I) && 1 === k.nodeType ? _.eB(pT(h.I), k) : !1, h.Bj = k)
        });
        this.Dc = this.ka.Ba(273, function() {
            h.eb || (h.eb = !0, _.ig(h.j, "load", h.Dc), h.mb && !h.Ni || DT(h))
        });
        _.Jf(a, "load", this.Dc);
        _.Bp(this, function() {
            return _.ig(a, "load", h.Dc)
        })
    };
    _.T(HT, _.cR);
    var JT = function(a) {
            var b = a.l;
            _.Jf(b, "orientationchange", a.Qi);
            _.Jf(b, "resize", a.Si);
            _.Jf(b, "scroll", a.Wi);
            _.Jf(b, "touchcancel", a.cj);
            _.Jf(b, "touchend", a.dj);
            _.Jf(b, "touchmove", a.kj);
            _.Jf(b, "touchstart", a.wj);
            _.Bp(a, function() {
                return IT(a)
            })
        },
        IT = function(a) {
            var b = a.l;
            _.ig(b, "orientationchange", a.Qi);
            _.ig(b, "resize", a.Si);
            _.ig(b, "scroll", a.Wi);
            _.ig(b, "touchcancel", a.cj);
            _.ig(b, "touchend", a.dj);
            _.ig(b, "touchmove", a.kj);
            _.ig(b, "touchstart", a.wj)
        };
    HT.prototype.Qj = function(a) {
        var b = this.g;
        if (b && !this.I) {
            for (var c in KT) !KT.hasOwnProperty(c) || c in a || (a[c] = KT[c]);
            this.Hj = "true" === a.use_manual_view || "top" === this.F || !!_.Pj(this.l).wasReactiveAdConfigReceived[2];
            this.Gj = "true" === a.use_important;
            if (c = a.af_l) this.mb = "true" === c;
            this.Gi = (this.xa = "true" === a.wait_for_scroll || "top" == this.F) && ("true" === a.tsec || "top" == this.F);
            LT(this, a);
            this.I = MT(this, a);
            this.W = NT(this);
            this.Cc = this.Kj >= this.Hi;
            a = this.g;
            c = this.I && pT(this.I);
            a && c && ("top" == this.F ? a.appendChild(c) : a.insertBefore(c, a.firstChild));
            JT(this);
            this.ua = !0;
            b.setAttribute("data-anchor-status", "ready-to-display")
        }
    };
    var NT = function(a) {
            var b = a.J.height + 5;
            "bottom" == a.F && MR(a.l) && (b += 20);
            return new _.an(a.J.width, b)
        },
        LT = function(a, b) {
            var c = parseInt(b.ht, 10),
                d = 0 < c ? c : null;
            b = parseInt(b.wd, 10);
            var e = 0 < b ? b : null;
            null != d && (a.J.height = d);
            null != e && (a.J.width = e);
            wR(a, function(f) {
                uR(f, e, d)
            }, !1, !0);
            uR(a.j, e, d)
        },
        MT = function(a, b) {
            b = new lT(b, a.l, a.j, a.J, a.F, function() {
                if (!a.pb) {
                    a.pb = !0;
                    IT(a);
                    var c = a.g;
                    _.cB(c);
                    OT(a, a.qa, !0, !0);
                    c && (c.style.display = "none")
                }
            }, function() {
                return void PT(a)
            }, a.ka, a.wa, function() {
                a.ga || (a.ga = !0, ET(a, null));
                _.oK(a.L, a.slotId)
            }, function() {
                a.ga && (a.ga = !1, ET(a, null));
                a.Nj && _.pK(a.L, a.slotId)
            }, a.hn);
            _.S(a, b);
            return b
        },
        CT = function(a) {
            if (a.ja) {
                var b = a.g;
                b && (b.style.display = "none");
                OT(a, a.qa, !0, !0);
                a.ja = !1
            }
        };
    HT.prototype.Ma = function() {
        this.Ni = !0;
        if (!this.fa && QT(this) && (this.eb || !this.mb)) {
            var a = this.g;
            a && (RT(this), wR(this, function(b) {
                iR(b)
            }, !0), zT(this.I, a), ST(this), this.fa = !0, (a = this.j.contentWindow) && LR(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    };
    var ST = function(a) {
            var b = a.g;
            if (b) {
                var c = a.I,
                    d = c.oa,
                    e = _.fj(d);
                if (!(10 > Math.abs(e - c.na))) {
                    var f = 10 > e;
                    d = e + 10 + _.cj(d) > _.ej(d);
                    f = f || d;
                    c.ja || c.ga || c.F || (0 === c.j || f ? 0 === c.j && f && jT(c) : jT(c, !1));
                    c.na = e
                }
                a.ja || (TT(a), c = KR(a.l.document.body, "padding"), "bottom" == a.F && (c.bottom += a.W.height + 25), OT(a, c), b.style.display = "block", a.ja = !0)
            }
        },
        RT = function(a) {
            var b = a.g;
            if (b && a.j.parentElement) {
                IR(b, a.W);
                var c = a.l.innerWidth;
                _.bj(a.l).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
                UT(a)
            }
        },
        UT = function(a) {
            wR(a, function(c) {
                IR(c, a.J);
                c.style.width = "100%"
            }, !1, !0);
            a.j.style.display = "block";
            a.j.style.margin = "0 auto";
            if (a.Gj) {
                var b = a.g;
                AR(b, function(c) {
                    hR(c, function(d) {
                        return c === b && /display|bottom/i.test(d) ? !1 : !0
                    });
                    if ("svg" === c.nodeName) return !1
                })
            }
        },
        TT = function(a) {
            if ("bottom" !== a.F && "top" !== a.F) throw Error("Unexpected position: " + a.F);
        },
        BT = function(a) {
            TT(a);
            var b = a.l.innerWidth;
            a = _.Zm(_.VB, a.j).height || +a.j.height || 0;
            return new _.an(b, a)
        },
        FT = function(a) {
            a.H = "touchcancel";
            _.t.setTimeout(a.ka.Ba(274, function() {
                "touchcancel" === a.H && (a.K = 0, a.O = !1, DT(a))
            }), 1E3)
        },
        GT = function(a, b) {
            if (b && b.touches) {
                a.H = "touchend";
                var c = b.touches.length;
                2 > c ? _.t.setTimeout(a.ka.Ba(256, function() {
                    "touchend" === a.H && (a.K = c, a.O = !1, DT(a))
                }), 1E3) : (a.K = c, DT(a))
            }
        },
        ET = function(a, b) {
            var c = a.ja ? VT(a, a.ga) : a.qa.top;
            if ("top" === a.F && a.l.document.body && a.ua && a.I && a.fa && a.o.top !== c && 0 !== b) {
                var d = _.HB(a.o);
                null === b ? (d.top = c, OT(a, d)) : (0 < b && a.o.top > c && (d.top = Math.max(c, a.o.top - b), OT(a, d, !1)), 0 > b && a.o.top < c && (d.top = Math.min(c, a.o.top - b), OT(a, d, !1)))
            }
        },
        OT = function(a, b, c, d) {
            var e = a.o.top - b.top,
                f = _.fj(a.l);
            f < e && (void 0 === d || !d) || (d = a.l.document.body, d.style.paddingTop = _.eJ(b.top), d.style.paddingRight = _.eJ(b.right), d.style.paddingBottom = _.eJ(b.bottom), d.style.paddingLeft = _.eJ(b.left), a.o = b, (void 0 === c || c) && a.l.scrollTo(0, f - e))
        },
        DT = function(a) {
            !a.ua || a.pb || 2 <= a.K && a.O || !QT(a) ? CT(a) : (a.Ma(), ST(a))
        };
    HT.prototype.qb = function() {
        return _.Yi(this.l)
    };
    HT.prototype.kn = function() {
        this.Vd = !0;
        var a;
        null == (a = this.g) || a.removeAttribute("data-anchor-status")
    };
    HT.prototype.Rj = function() {
        this.Ud = !0;
        var a = this.g;
        this.Vd && this.Ud && (null == a || a.setAttribute("data-anchor-status", "ready-to-display"))
    };
    var QT = function(a) {
            if (!a.qb() || a.Vd && !a.Ud) return !1;
            if (!a.fa && a.xa) switch (a.Gi && (a.C += Math.max(_.fj(a.l) - a.Jb, 0)), a.F) {
                case "bottom":
                    return a.C >= a.Oj || a.Cc;
                case "top":
                    return a.C > VT(a)
            }
            return !0
        },
        VT = function(a, b) {
            return (void 0 === b ? 0 : b) ? a.qa.top + 30 : a.qa.top + 30 + a.W.height - 5
        },
        PT = function(a) {
            a.Hj && !a.Ii && (a.Ii = !0, a.ka.Fb(257, function() {
                var b = {
                        msg_type: "manual-send-view"
                    },
                    c = a.j.contentWindow;
                c && c.postMessage(a.l.JSON.stringify(b), "*")
            }))
        };
    HT.prototype.Pj = function(a, b) {
        this.j = a;
        if (b && (this.J.height !== b.height || this.J.width !== b.width)) {
            a = b.height - this.J.height;
            var c = {};
            LT(this, (c.ht = b.height, c.wd = b.width, c));
            this.W = NT(this);
            RT(this);
            ET(this, a);
            var d;
            null == (d = this.I) || mT(d, b.height)
        }
        UT(this)
    };
    var KT = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    var WT = function() {
            this.g = null
        },
        XT = function(a, b, c) {
            a.g = _.HI(b, c);
            if (b = !!a.g) a = a.g, b = !!a && 1 > a.length;
            return b
        };
    var YT = function(a, b, c, d) {
        _.cR.call(this, a, b, c);
        this.F = null;
        this.I = b.document;
        this.C = d;
        this.J = _.zI(new _.xI(b), 2147483646);
        this.o = b
    };
    _.T(YT, _.cR);
    var aU = function(a) {
            $S(a, !1);
            var b = a.g;
            if (b) {
                var c = vR(a.o);
                wR(a, function(d) {
                    _.Hp(d, c);
                    iR(d)
                }, !0);
                a.j.setAttribute("width", "");
                a.j.setAttribute("height", "");
                _.NB(a.j, c);
                _.NB(a.j, ZT);
                _.NB(b, $T);
                _.NB(b, {
                    background: "transparent"
                });
                _.Hp(b, {
                    display: "none",
                    position: "fixed"
                });
                iR(b);
                iR(a.j);
                1 >= _.dj(a.o) || (_.NB(b, {
                    overflow: "scroll",
                    "max-width": "100vw"
                }), hR(b))
            }
        },
        $S = function(a, b) {
            var c = a.g;
            c && (b ? (_.DI(a.J), _.Hp(c, {
                display: "block"
            }), a.I.body && !a.F && (a.F = _.LI(a.I, a.l, a.C)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.I.body.setAttribute("aria-hidden", "true")) : (_.EI(a.J), _.Hp(c, {
                display: "none"
            }), a.F && (a.F(), a.F = null), a.I.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
        },
        $T = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        ZT = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var bU = function(a, b, c, d, e, f, g, h) {
        HT.call(this, c, d, 2 === b ? "top" : "bottom", new _.XJ(a), new _.MH, e, h ? {
            maxHeight: _.dz(h, 1)
        } : null);
        this.L = f;
        this.slotId = g;
        this.Nj = !!_.Nq(this.L, this.slotId);
        2 === b && _.oK(this.L, this.slotId)
    };
    _.T(bU, HT);
    bU.prototype.qb = function() {
        return 0 === (0, _.dq)() || HT.prototype.qb.call(this)
    };
    var cU = function(a, b, c) {
        YT.call(this, b, a, c, _.Uf(_.gE));
        aU(this)
    };
    _.T(cU, YT);
    var dU = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        var r = [];
        _.H(_.cE) && 0 === (0, _.dq)() && r.push(101);
        _.H(_.dE) && r.push(102);
        h = _.H(_.fE) ? fS(h) : new _.z.Set(_.H(_.mE) ? [2] : []);
        QS.call(this, b, c, e, new cU(b, c, d), new _.MH, f, g, {
            Ej: _.H(_.eE),
            di: r,
            Kk: !0,
            Gf: {
                Nm: 3,
                version: a.Pa
            },
            ql: !0,
            ml: _.H(_.iE) ? m : null,
            zi: _.Uf(_.jE)
        }, h, a.V, {
            pvsid: a.pvsid,
            Ea: a.Ea,
            fb: 17,
            Gb: a.Pa
        });
        this.ga = k;
        this.Cc = l;
        this.ja = n;
        this.W = p;
        _.S(this, this.o)
    };
    _.T(dU, QS);
    dU.prototype.mb = function() {
        var a;
        if (!(a = this.ga)) {
            var b = _.Sf(WT),
                c = this.W;
            try {
                if (c && XT(b, c, this.ja)) {
                    b.g.push(Date.now());
                    var d = JSON.stringify(b.g);
                    c.setItem("__lsv__", d);
                    a = c.getItem("__lsv__") == d
                } else a = !1
            } catch (e) {
                a = !1
            }
        }
        return a
    };
    dU.prototype.xa = function() {
        return !0
    };
    dU.prototype.K = function() {
        QS.prototype.K.call(this);
        this.Cc()
    };
    dU.prototype.qb = function() {
        return this.ga || XT(_.Sf(WT), this.W, this.ja)
    };
    var eU = {
        Zk: bU,
        ul: dU
    };
    _.QP(_m, _.iO).resolve(eU);
})