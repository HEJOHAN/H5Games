window.googletag && typeof googletag._gpt_js_load_2_ == 'function' && googletag._gpt_js_load_2_(function(_, _m) {
    var ZQ = function(a) {
            var b = _.Gf();
            if ("function" !== typeof a) throw b = b ? b() + "\n" : "", Error(b + String(a));
            return a
        },
        aR = function(a) {
            if (!$Q.test(a)) return null;
            a = Number(a);
            return isNaN(a) ? null : a
        },
        bR = function(a, b) {
            return a && a.source ? a.source === b || a.source.parent === b : !1
        },
        cR = function(a) {
            a = _.Pi(a);
            return .05 > Math.abs(a - 1)
        },
        eR = function(a) {
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
            _.hx(_.z(Object, "keys").call(Object, b), function(c) {
                var d = a.style[_.NA(c)];
                ("undefined" !== typeof d ? d : a.style[_.JB(a, c)]) || _.KB(a, c, b[c])
            });
            dR(a)
        },
        hR = function(a) {
            var b = _.hj(new _.ij, a.pb);
            b = _.lj(b, 11, a.Ea);
            b = _.mj(b, 8, a.pvsid);
            b = _.mj(b, 7, a.Rf);
            b = _.lj(b, 9, a.Hb);
            var c = _.tq(b, fR, 6, _.kj);
            c = _.lj(c, 2, a.yf);
            c = _.nj(c, gR, 1);
            _.ii(c, 1, a.Um);
            c = _.nj(b, _.oj, 5);
            _.Ne(c, 1, _.Wc, a.fb);
            return b
        },
        iR = function(a) {
            var b;
            a = (null != (b = void 0 === a ? null : a) ? b : window).googletag;
            return (null == a ? 0 : a.apiReady) ? a : void 0
        },
        kR = function(a, b, c, d) {
            return jR(a, "fullscreen", d.Ba(952, function(e, f) {
                if (f.source === b) {
                    if (!("eventType" in e)) throw Error("bad message " + JSON.stringify(e));
                    delete e.googMsgType;
                    c(e)
                }
            }))
        },
        mR = function(a, b, c, d, e) {
            a = new lR(1, a, b, c, d, e);
            a.va();
            return a
        },
        nR = function(a) {
            var b;
            null == (b = a.l) || b.setAttribute("data-vignette-loaded", "true")
        },
        oR = function(a) {
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
        pR = function(a) {
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
        qR = function(a, b, c) {
            null !== b && null !== aR(a.getAttribute("width")) && a.setAttribute("width", String(b));
            null !== c && null !== aR(a.getAttribute("height")) && a.setAttribute("height", String(c));
            null !== b && (a.style.width = _.bJ(b));
            null !== c && (a.style.height = _.bJ(c))
        },
        rR = function(a, b) {
            a = _.Ui(a);
            b = b ? 100 * (1 > a ? 1 : a) : 100;
            return {
                width: b + "vw",
                height: b + "vh"
            }
        },
        gR = function(a) {
            this.F = _.A(a)
        };
    _.T(gR, _.D);
    var fR = function(a) {
        this.F = _.A(a)
    };
    _.T(fR, _.D);
    var sR = function(a, b, c, d) {
            if (!a.P) {
                a.P = [];
                for (var e = a.j.parentElement; e;) {
                    a.P.push(e);
                    if (a.l === e) break;
                    e = e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null
                }
            }
            e = a.P.slice();
            !c && a.l === e[e.length - 1] && e.pop();
            var f;
            if (d)
                for (c = e.length - 1; 0 <= c; --c)(f = e[c]) && b.call(a, f, c, e);
            else
                for (c = 0; c < e.length; ++c)(f = e[c]) && b.call(a, f, c, e)
        },
        tR = {
            capture: !0
        },
        uR = function(a, b) {
            return new _.Om(a.x - b.x, a.y - b.y)
        },
        vR = function(a) {
            var b = a.document,
                c = 0;
            if (b) {
                c = b.body;
                var d = b.documentElement;
                if (!d || !c) return 0;
                a = _.UA(a).height;
                if (_.TA(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
                else {
                    b = d.scrollHeight;
                    var e = d.offsetHeight;
                    d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                    c = b > a ? b > e ? b : e : b < e ? b : e
                }
            }
            return c
        },
        $Q = /^(-?[0-9.]{1,30})$/,
        wR = function(a, b) {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !== b(c) && (c = _.tj(c.children || c.childNodes || [], function(d) {
                    return 1 === d.nodeType
                }), c.length && a.unshift.apply(a, _.zi(c)))
            }
        },
        xR = function(a) {
            var b = {};
            if (a) {
                var c = /\s*:\s*/;
                _.hx((a || "").split(/\s*;\s*/), function(d) {
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
        yR = function(a, b) {
            if ("length" in a.style) {
                a = a.style;
                for (var c = a.length, d = 0; d < c; d++) {
                    var e = a[d];
                    b(a[e], e, a)
                }
            } else a = xR(a.style.cssText), _.Kn(a, b)
        },
        dR = function(a, b) {
            b = void 0 === b ? function() {
                return !0
            } : b;
            var c = /!\s*important/i;
            yR(a, function(d, e) {
                !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
            })
        },
        zR = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        AR = /.*domain\.test$/,
        BR = /\.prod\.google\.com(:\d+)?$/,
        CR = function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        DR = function(a) {
            if (1 == a.nodeType) return _.QB(a);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new _.Om(a.clientX, a.clientY)
        },
        ER = function(a, b) {
            if (b instanceof _.Sm) {
                var c = b.height;
                b = b.width
            } else throw Error("missing height argument");
            a.style.width = _.RB(b, !0);
            a.style.height = _.RB(c, !0)
        },
        FR = function(a, b) {
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
        GR = function(a, b) {
            if (_.gy) {
                var c = FR(a, b + "Left"),
                    d = FR(a, b + "Right"),
                    e = FR(a, b + "Top");
                a = FR(a, b + "Bottom");
                return new _.DB(e, d, a, c)
            }
            c = _.MB(a, b + "Left");
            d = _.MB(a, b + "Right");
            e = _.MB(a, b + "Top");
            a = _.MB(a, b + "Bottom");
            return new _.DB(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        },
        jR = function(a, b, c, d) {
            d = void 0 === d ? null : d;
            var e = function(g) {
                try {
                    var h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            _.sb(a, "message", e);
            var f = !1;
            return function() {
                var g = !1;
                f || (f = !0, g = _.eg(a, "message", e));
                return g
            }
        },
        HR = function(a, b, c, d, e) {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (var f = 0; f < a.length; ++f) 1 < e && HR(a[f], b, c, d, --e)
        },
        IR = function(a) {
            var b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
            return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
        },
        MR = function(a, b) {
            _.V.call(this);
            this.B = a;
            this.D = this.j = this.g = !1;
            if (_.ag(a) && b.length)
                for (a = _.x(b), b = a.next(); !b.done; b = a.next()) switch (b.value) {
                    case 0:
                        JR(this);
                        break;
                    case 1:
                        KR(this);
                        break;
                    case 2:
                        LR(this)
                } else this.ya()
        };
    _.T(MR, _.V);
    MR.prototype.va = function() {
        this.M || this.l(_.ag(this.B))
    };
    var JR = function(a) {
            var b = function(d) {
                    d.isTrusted && (a.j = !0, a.l(d.timeStamp))
                },
                c = function(d) {
                    d.isTrusted && (a.j = !1, a.l(d.timeStamp))
                };
            _.sb(a.B, "focus", b);
            _.sb(a.B, "blur", c);
            _.sp(a, function() {
                return void a.B.removeEventListener("focus", b)
            });
            _.sp(a, function() {
                return void a.B.removeEventListener("blur", c)
            });
            a.j = a.B.document.hasFocus()
        },
        KR = function(a) {
            var b = function(c) {
                c.isTrusted && (a.g = 1 === _.Wr(a.B.document) ? !0 : !1, a.l(c.timeStamp))
            };
            _.sb(a.B.document, "visibilitychange", b);
            _.sp(a, function() {
                return void a.B.document.removeEventListener("visibilitychange", b)
            });
            a.g = 1 === _.Wr(a.B.document)
        },
        LR = function(a) {
            var b = a.B.document.body.getBoundingClientRect().top + 10,
                c = function(d) {
                    d.isTrusted && (a.D = d.clientY < b ? !0 : !1, a.l(d.timeStamp))
                };
            _.sb(a.B.document.body, "mouseleave", c);
            _.sb(a.B.document.body, "mouseenter", c);
            _.sp(a, function() {
                return void a.B.document.body.removeEventListener("mouseleave", c)
            });
            _.sp(a, function() {
                return void a.B.document.body.removeEventListener("mouseenter", c)
            });
            a.D = !1
        },
        NR = function() {
            MR.apply(this, arguments);
            this.o = new _.Qh;
            this.K = this.o.promise
        };
    _.T(NR, MR);
    var OR = function(a) {
        NR.call(this, a, [0, 1, 2]);
        this.I = 0;
        this.va()
    };
    _.T(OR, NR);
    OR.prototype.l = function(a) {
        var b = this;
        switch (this.I) {
            case 0:
                this.j && !this.D && (this.I = 1);
                break;
            case 1:
                if (!this.j && this.g && this.D) {
                    this.I = 2;
                    var c = setTimeout(function() {
                        b.l(a)
                    }, 200);
                    _.sp(this, function() {
                        return void clearTimeout(c)
                    })
                }
                break;
            case 2:
                !this.j && this.g && this.D ? (this.o.resolve(a), this.ya()) : this.I = 1
        }
    };
    var QR = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.$x(function() {
            PR(b)
        })
    };
    _.T(QR, _.V);
    QR.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var PR = function(a) {
            var b = !1,
                c = function(e) {
                    e.isTrusted && (b = !0)
                },
                d = function(e) {
                    var f = e.timeStamp;
                    if (e = e.isTrusted && !b) e = (e = a.B.document.referrer) && "function" === typeof URL ? (new URL(e)).origin === a.B.location.origin : !1;
                    if (e) {
                        f = {
                            nc: f
                        };
                        e = _.x(a.g);
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
            _.sp(a, function() {
                a.B.removeEventListener("focus", d);
                a.B.removeEventListener("blur", c)
            })
        },
        RR = function(a) {
            NR.call(this, a, [1]);
            this.va()
        };
    _.T(RR, NR);
    RR.prototype.l = function(a) {
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
    var SR = function(a, b, c) {
        _.V.call(this);
        var d = this;
        c.promise.then(function() {
            return void d.ya()
        });
        b = _.x(b);
        for (var e = b.next(), f = {}; !e.done; f = {
                Tb: void 0
            }, e = b.next()) switch (f.Tb = e.value, f.Tb) {
            case 2:
                e = new RR(a);
                _.S(this, e);
                e.K.then(function(g) {
                    return function() {
                        return void c.resolve(g.Tb)
                    }
                }(f));
                break;
            case 3:
                if (0 !== (0, _.Xp)()) break;
                e = new OR(a);
                _.S(this, e);
                e.K.then(function(g) {
                    return function() {
                        return void c.resolve(g.Tb)
                    }
                }(f));
                break;
            case 4:
                e = new QR(a), _.S(this, e), e.listen(function(g) {
                    return function() {
                        return void c.resolve(g.Tb)
                    }
                }(f))
        }
    };
    _.T(SR, _.V);
    var TR = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        UR = {
            IMG: " ",
            BR: "\n"
        },
        VR = function(a, b, c, d) {
            if (!(a.nodeName in TR))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in UR) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(UR[a.nodeName]);
            else
                for (a = a.firstChild; a;) VR(a, b, c, d), a = a.nextSibling
        },
        WR = / \xAD /g,
        YR = /\xAD/g,
        ZR = /\u200B/g,
        $R = / +/g,
        aS = /^\s*/,
        bS = function(a) {
            var b = new _.u.Set;
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
        cS = function(a) {
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
        dS = function(a, b) {
            var c = this;
            this.l = a;
            this.g = !1;
            this.j = b;
            this.A = this.j.Ba(264, function(d) {
                c.g && (_.XQ || (d = Date.now()), c.l(d), _.XQ ? _.WQ.call(_.t, c.A) : _.t.setTimeout(c.A, 17))
            })
        };
    dS.prototype.start = function() {
        this.g || (this.g = !0, _.XQ ? _.WQ.call(_.t, this.A) : this.A(0))
    };
    var eS = function(a, b, c, d) {
        this.g = a;
        this.D = b;
        this.Ca = c;
        this.progress = 0;
        this.A = null;
        this.C = !1;
        this.l = [];
        this.j = null;
        this.M = new dS((0, _.ex)(this.H, this), d)
    };
    eS.prototype.H = function(a) {
        if (this.C) this.M.g = !1;
        else {
            null === this.A && (this.A = a);
            this.progress = (a - this.A) / this.Ca;
            1 <= this.progress && (this.progress = 1);
            a = this.j ? this.j(this.progress) : this.progress;
            this.l = [];
            for (var b = 0; b < this.g.length; b++) this.l.push((this.D[b] - this.g[b]) * a + this.g[b]);
            this.o();
            1 == this.progress && (this.M.g = !1, this.I())
        }
    };
    eS.prototype.I = function() {};
    eS.prototype.o = function() {};
    var fS = function(a) {
        a.C = !1;
        a.M.start()
    };
    eS.prototype.reset = function(a, b, c) {
        this.A = null;
        this.g = a;
        this.D = b;
        this.Ca = c;
        this.progress = 0
    };
    var gS = function(a) {
            return a * a * a
        },
        hS = function(a) {
            a = 1 - a;
            return 1 - a * a * a
        },
        iS = function(a, b, c, d, e, f, g, h) {
            eS.call(this, [b], [c], d, f);
            this.J = a;
            this.ia = e;
            this.K = g ? g : null;
            this.j = h || null
        };
    _.T(iS, eS);
    iS.prototype.o = function() {
        var a = {};
        a[this.ia] = _.bJ(this.l[0]);
        _.KB(this.J, a)
    };
    iS.prototype.I = function() {
        this.K && this.K()
    };
    var lR = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.slotType = a;
        this.I = b;
        this.Uh = c;
        this.ma = d;
        this.wa = e;
        this.Gf = f;
        this.g = 1;
        this.qem = null;
        this.D = new _.Qh;
        this.l = new _.Qh;
        this.j = new _.Qh
    };
    _.T(lR, _.V);
    var jS = function(a) {
            return _.ub(function(b) {
                return b.return(a.D.promise)
            })
        },
        kS = function(a) {
            return _.ub(function(b) {
                return b.return(a.l.promise)
            })
        },
        lS = function(a) {
            return _.ub(function(b) {
                return b.return(a.j.promise)
            })
        };
    lR.prototype.va = function() {
        var a = this,
            b = kR(this.I, this.Uh, function(c) {
                if ("adError" === c.eventType) a.j.resolve(), a.g = 4;
                else if ("adReady" === c.eventType && 1 === a.g) a.qem = c.qem, c.slotType !== a.slotType && (mS(a, {
                    cur_st: a.g,
                    evt: c.eventType,
                    adp_tp: c.slotType
                }), a.g = 4), a.D.resolve(), a.g = 2;
                else if ("adClosed" === c.eventType && 2 === a.g) a.l.resolve(c.result), a.g = 3;
                else if ("adClosed" !== c.eventType || 3 !== a.g) mS(a, {
                    cur_st: a.g,
                    evt: c.eventType
                }), a.g = 4
            }, this.ma);
        _.sp(this, b)
    };
    var mS = function(a, b) {
        var c = .25;
        c = void 0 === c ? .01 : c;
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = c;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.Gf.Nm;
        b.version = a.Gf.version;
        _.gj(a.wa, "fullscreen_tag", b, !1, c)
    };
    var qS = function(a) {
            var b = oS(_.WA(_.QA(a))) || [];
            return !!_.wj(a, function(c) {
                if (!_.ka(c) || 1 != c.nodeType) return !1;
                var d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || 0 <= _.da(b, c) || _.Pg(_.hB(pS), function(e) {
                    return d.call(c, e)
                })
            }, !1, 20)
        },
        oS = function(a) {
            var b = iR(a);
            return b ? _.tj(_.ix(b.pubads().getSlots(), function(c) {
                return a.document.getElementById(c.getSlotElementId())
            }), function(c) {
                return null != c
            }) : null
        },
        pS = {
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
    var rS = function(a) {
        _.V.call(this);
        var b = new _.Qh,
            c = b.resolve;
        this.promise = b.promise;
        a.onmessage = function() {
            return c()
        };
        _.sp(this, function() {
            a.close()
        })
    };
    _.T(rS, _.V);
    var sS = function() {
        var a = new _.Qh,
            b = a.resolve;
        return {
            Km: function(c, d) {
                null != d && d.ports.length && b(new rS(d.ports[0]))
            },
            Jm: a.promise
        }
    };
    var tS = ["mousemove", "mousedown", "scroll", "keydown"],
        vS = function(a) {
            _.V.call(this);
            var b = this;
            this.B = a;
            this.g = [];
            this.l = _.$x(function() {
                uS(b)
            })
        };
    _.T(vS, _.V);
    vS.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var uS = function(a) {
        for (var b = null, c = null, d = function(l) {
                if (b && 3E4 < l.timeStamp - b)
                    for (var m = {
                            nc: l.timeStamp,
                            rl: l.timeStamp - b,
                            dn: c
                        }, n = _.x(a.g), p = n.next(); !p.done; p = n.next()) {
                        p = p.value;
                        try {
                            p(m)
                        } catch (r) {}
                    }
                b = l.timeStamp
            }, e = _.x(tS), f = e.next(); !f.done; f = e.next()) a.B.addEventListener(f.value, d);
        var g = null,
            h, k;
        (null == (h = a.B.navigator) ? 0 : h.userActivation) && (null == (k = a.B.performance) ? 0 : k.now) && (g = a.B.setInterval(function() {
            a.B.navigator.userActivation.isActive && (c = a.B.performance.now())
        }, 1E3));
        _.sp(a, function() {
            for (var l = _.x(tS), m = l.next(); !m.done; m = l.next()) a.B.removeEventListener(m.value, d);
            g && a.B.clearInterval(g)
        })
    };
    var xS = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.$x(function() {
            wS(b)
        })
    };
    _.T(xS, _.V);
    xS.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var wS = function(a) {
        var b = null,
            c = function(e) {
                e.isTrusted && (b = e.timeStamp)
            },
            d = function(e) {
                var f = e.timeStamp;
                if (e.isTrusted) {
                    e = _.z(Object, "assign").call(Object, {}, {
                        nc: f
                    }, b ? {
                        Pm: f - b
                    } : null);
                    f = _.x(a.g);
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
        _.sp(a, function() {
            a.B.removeEventListener("focus", d);
            a.B.removeEventListener("blur", c)
        })
    };
    var yS = function(a, b, c, d, e, f) {
        _.V.call(this);
        var g = this;
        this.wa = c;
        this.j = d;
        this.fb = e;
        this.l = Math.floor(2147483647 * _.th());
        this.g = function(h, k, l) {
            l = void 0 === l ? {} : l;
            h = _.z(Object, "assign").call(Object, {
                etc: g.l,
                e: h,
                t: Math.round(k),
                qqid: g.j,
                ptt: g.fb
            }, l);
            _.gj(g.wa, "eit", h, !0, 1)
        };
        this.g(1, b);
        b = _.x(f);
        d = b.next();
        for (c = {}; !d.done; c = {
                Nc: void 0,
                If: void 0
            }, d = b.next()) switch (c.Nc = d.value, c.Nc) {
            case 101:
                d = new OR(a);
                d.K.then(function(h) {
                    return function(k) {
                        return void g.g(h.Nc, k)
                    }
                }(c));
                _.S(this, d);
                break;
            case 102:
                c.If = new RR(a);
                c.If.K.then(function(h) {
                    return function(k) {
                        return void g.g(h.Nc, k, {
                            tbd: Math.round(h.If.C || -1)
                        })
                    }
                }(c));
                _.S(this, c.If);
                break;
            case 103:
                d = new xS(a);
                d.listen(function(h) {
                    return function(k) {
                        var l;
                        g.g(h.Nc, k.nc, {
                            tsb: null != (l = k.Pm) ? l : -1
                        })
                    }
                }(c));
                _.S(this, d);
                break;
            case 104:
                d = new vS(a);
                d.listen(function(h) {
                    return function(k) {
                        var l;
                        g.g(h.Nc, k.nc, {
                            it: k.rl,
                            ualta: null != (l = k.dn) ? l : -1
                        })
                    }
                }(c));
                _.S(this, d);
                break;
            case 105:
                d = new QR(a), d.listen(function(h) {
                    return function(k) {
                        g.g(h.Nc, k.nc)
                    }
                }(c)), _.S(this, d)
        }
    };
    _.T(yS, _.V);
    var AS = function(a) {
            this.g = null;
            this.l = a.match(_.eB)[3] || "";
            this.j = zS(a);
            this.A = !1
        },
        BS = function(a, b) {
            b ? a.g = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.g = null
        },
        ES = function(a, b, c) {
            if (_.Pg(["data-google-vignette", "data-google-interstitial"], function(f) {
                    return "false" === b.getAttribute(f) || b.closest && !!b.closest("[" + f + '="false"]')
                })) return !1;
            var d = b.href,
                e = d && (d.match(_.eB)[3] || null);
            if (!CS(a, b, d, e, c)) return !1;
            a.A = !!e && DS(a, e);
            return a.A || !c && !qS(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
        },
        CS = function(a, b, c, d, e) {
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
            return !d || DS(a, d) && zS(c) == a.j ? !1 : !0
        },
        DS = function(a, b) {
            return b.replace(FS, "") == a.l.replace(FS, "")
        },
        zS = function(a) {
            a = a.match(_.eB);
            var b = a[6];
            return (a[5] || "") + (b ? "?" + b : "") || "/"
        },
        FS = /^(www\.|m\.|mobile\.)*/i;
    var IS = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        _.V.call(this);
        var f = this;
        this.D = a;
        this.fa = b;
        this.ma = c;
        this.wa = d;
        this.Ma = {};
        this.Vd = this.ma.Ba(168, function(g, h) {
            return void GS(f, g, h)
        });
        this.Wd = this.ma.Ba(169, function(g, h) {
            _.gj(f.wa, "ras::xsf", {
                c: h.data.substring(0, 500),
                u: f.D.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        });
        this.P = [];
        HS(this, this.Ma, e);
        this.P.push(jR(this.D, "sth", this.Vd, this.Wd))
    };
    _.T(IS, _.V);
    var GS = function(a, b, c) {
        try {
            if (!a.xa(c.origin) || !bR(c, a.fa.contentWindow)) return
        } catch (f) {
            return
        }
        var d = b.msg_type,
            e;
        "string" === typeof d && (e = a.Ma[d]) && a.ma.Gb(168, function() {
            e.call(a, b, c)
        })
    };
    IS.prototype.xa = function(a) {
        return _.tB[a] || zR.test(a) || AR.test(a) || BR.test(a)
    };
    IS.prototype.A = function() {
        for (var a = _.x(this.P), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.P.length = 0;
        _.V.prototype.A.call(this)
    };
    var MS = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        var p = {};
        IS.call(this, a, b, c, e, (p.fullscreenApi = h.Dj, p.heavyAdInterventionResponse = h.ml, p));
        var r = this;
        this.C = d;
        this.requestedSize = f;
        this.K = h;
        this.V = l;
        this.g = m;
        this.qb = _.$f();
        this.ua = "true" === g["i-fvs"];
        this.yf = g.qid;
        this.H = null != n ? n : new AS(a.location.href);
        this.Kb = "true" === g.iobs && "IntersectionObserver" in this.D;
        var v, w;
        BS(this.H, null != (w = null == (v = g.stop_word) ? void 0 : v.split(";")) ? w : null);
        this.I = this.K.Dj ? mR(a, b.contentWindow, c, e, this.K.Gf) : null;
        this.o = {
            yi: !1
        };
        this.j = {};
        this.ra = {
            tag: 0
        };
        this.l = {
            Ko: !0,
            Vj: !1,
            Je: !1,
            sg: !0
        };
        JS(this);
        KS(this);
        k.size && (b = new _.Qh, b.promise.then(function(C) {
            r.l.ce || r.M || LS(r, C)
        }), this.eb = new SR(a, k, b), _.S(this, this.eb));
        var y;
        if (null == (y = h.di) ? 0 : y.length)
            if (k = _.ag(a)) {
                var B = new yS(a, k, e, this.yf, 17, h.di);
                _.S(this, B);
                this.Ec = function(C) {
                    B.g(2, C - _.cg(a))
                }
            }
    };
    _.T(MS, IS);
    var JS = function(a) {
            a.I && (jS(a.I).then(function() {
                nR(a.C);
                a.ia()
            }), kS(a.I).then(function() {
                return void NS(a)
            }), lS(a.I).then(function() {
                return void a.J()
            }))
        },
        HS = function(a, b, c) {
            b["i-blur"] = function() {
                a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 27
                }));
                a.l.Je = !0;
                a.l.bh && (a.l.sg = !0)
            };
            b["i-no"] = function(g) {
                a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 26
                }));
                a.ra = {
                    tag: 1,
                    Oo: g.i_tslv ? g.i_tslv : void 0
                }
            };
            if (c.heavyAdInterventionResponse) {
                var d = ZQ(c.heavyAdInterventionResponse);
                if (d) {
                    var e = sS(),
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
                nR(a.C);
                a.ia()
            }, b["i-dismiss"] = function() {
                NS(a)
            }, b.i_iif = function() {
                a.J()
            })
        };
    MS.prototype.ia = function() {
        this.o.Mi || (this.o.Mi = _.$f())
    };
    var NS = function(a) {
        a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 33
        }));
        a.l.Je ? (OS(a) ? (a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 34
        })), a.D.history.back()) : (a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 35
        })), PS(a)), a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 36
        }))) : (_.t.setTimeout(function() {
            PS(a)
        }, 1E3), a.l.Lg ? (a.l.bh && (a.l.sg = !1), QS(a, a.l.Lg)) : a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 37
        })))
    };
    MS.prototype.J = function() {
        this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 23
        }));
        this.o.yi = !0
    };
    var RS = function(a) {
            OS(a) || (a.D.location.hash = "google_vignette");
            a.l.bh = a.ma.Ba(526, function() {
                a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 62
                }));
                a.l.sg ? (OS(a) ? (a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 64
                })), QS(a, a.j.Xa.href)) : PS(a), a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 65
                }))) : a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 63
                }))
            });
            _.t.setTimeout(_.fx(_.sb, a.D, "hashchange", a.l.bh), 0)
        },
        SS = function(a, b) {
            a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 10
            }));
            var c = _.$f(),
                d = _.Fj(a.D).wasReactiveAdVisible[9];
            if (b) {
                var e = a.H;
                if (b && e.g) {
                    var f = [];
                    VR(b, f, !0, !0);
                    b = f.join("");
                    b = b.replace(WR, " ").replace(YR, "");
                    b = b.replace(ZR, "");
                    b = b.replace($R, " ");
                    " " != b && (b = b.replace(aS, ""));
                    if (b) {
                        e = b.match(e.g);
                        b = [];
                        for (f = 0; e && f < e.length; f++) {
                            var g = e[f].toLowerCase();
                            0 <= _.da(b, g) || b.push(g)
                        }
                        e = b
                    } else e = []
                } else e = []
            } else e = [];
            b = a.K.ql || cR(a.D);
            f = a.requestedSize.width < a.requestedSize.height === _.Ni(a.D);
            if (864E5 <= c - a.qb) return a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 11
            })), !1;
            a: switch (a.ra.tag) {
                case 0:
                    c = !0;
                    break a;
                case 1:
                    c = !1;
                    break a;
                default:
                    c = !1
            }
            if (!c) return a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 12
            })), !1;
            if (a.o.yi) return a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 13
            })), !1;
            if (OS(a)) return a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 14
            })), !1;
            if (!a.o.Mi) return a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 15
            })), !1;
            if (!a.ua && d) return a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 16
            })), !1;
            a.ua && a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 17
            }));
            d && a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 18
            }));
            if (e.length) return a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 19
            })), !1;
            if (!b) return a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 20
            })), !1;
            if (!f) return a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 21
            })), !1;
            a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 22
            }));
            return !0
        },
        US = function(a, b) {
            a.l.xd = TS(a, b, "prerender");
            a.l.vd = TS(a, b, "prefetch");
            a.D.document.body.appendChild(a.l.xd);
            a.D.document.body.appendChild(a.l.vd)
        },
        TS = function(a, b, c) {
            a = _.dg("LINK", a.D.document);
            a.setAttribute("rel", c);
            a.setAttribute("href", b);
            return a
        },
        VS = function(a, b) {
            for (b = b.target; b;) {
                if ("nodeName" in b && "A" === b.nodeName) {
                    if (ES(a.H, b, b.ownerDocument !== a.D.document)) return b;
                    break
                }
                b = "parentElement" in b ? b.parentElement : null
            }
            return null
        };
    MS.prototype.A = function() {
        this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 24
        }));
        IS.prototype.A.call(this);
        OS(this) && QS(this, this.j.Xa.href);
        this.j.Ib && (_.eg(this.D.document, "click", this.j.Ib), this.j.Ib = void 0);
        this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 25
        }))
    };
    var PS = function(a) {
            a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 38
            }));
            a.l.ce ? (a.l.Vj = !0, a.j.Ib && (_.eg(a.D.document, "click", a.j.Ib), a.j.Ib = void 0), a.l.xd && a.l.xd.parentNode && (a.l.xd.parentNode.removeChild(a.l.xd), a.l.xd = void 0), a.l.vd && a.l.vd.parentNode && (a.l.vd.parentNode.removeChild(a.l.vd), a.l.vd = void 0), WS(a.C, !1), a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 40
            }))) : a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 39
            }))
        },
        KS = function(a) {
            a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 41
            }));
            if (a.j.Ib) a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 42
            }));
            else {
                a.j.Ib = a.ma.Ba(527, function(e) {
                    XS(a, e)
                });
                if (null !== a.j.Ib) {
                    var b = a.j.Ib;
                    _.sb(a.D.document, "click", function(e) {
                        b(e)
                    }, tR)
                }
                for (var c = a.D.frames, d = 0; d < c.length; d++) try {
                    _.sb(c[d].document, "click", a.j.Ib, tR)
                } catch (e) {}
                a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 43
                }))
            }
        },
        QS = function(a, b) {
            a = a.D.location;
            b = _.Va(b);
            b = _.cb(b);
            void 0 !== b && a.replace(b)
        },
        LS = function(a, b) {
            a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 28
            }));
            if (SS(a)) {
                var c = 1 === b;
                if (a.K.Kk) {
                    var d;
                    (d = a.l).Je || (d.Je = !c)
                }
                if (a.mb()) {
                    a.l.ce = Date.now();
                    _.Fj(a.D).wasReactiveAdVisible[8] = !0;
                    c && a.j.Xa && (a.l.Lg = a.j.Xa.href);
                    YS(a);
                    a.j.Xa && US(a, a.j.Xa.href);
                    RS(a);
                    _.sb(a.D, "pagehide", a.ma.Ba(528, function() {
                        PS(a)
                    }));
                    if (c) {
                        var e;
                        null == (e = a.Ec) || e.call(a, a.l.ce)
                    }
                    WS(a.C, !0);
                    a.K.zi && a.V.log(578856259, hR, _.z(Object, "assign").call(Object, {}, a.g, {
                        pb: a.K.zi,
                        Um: cS(b),
                        yf: a.yf
                    }));
                    var f;
                    null == (f = a.eb) || f.ya();
                    a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                        U: 32
                    }))
                } else a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 30
                })), c && a.j.Xa && (a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 31
                })), QS(a, a.j.Xa.href))
            } else a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 29
            }))
        };
    MS.prototype.Ac = function(a) {
        this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 54
        }));
        this.l.ce ? this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 56
        })) : this.M ? this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 57
        })) : this.j.Xa ? a.preventDefaultTriggered ? (this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 59
        })), this.j.Xa = void 0) : ES(this.H, this.j.Xa, this.j.Xa.ownerDocument !== this.D.document) ? SS(this) ? (LS(this, 1), this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 61
        }))) : (this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 60
        })), QS(this, this.j.Xa.href)) : (this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 55
        })), QS(this, this.j.Xa.href)) : this.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 58
        }))
    };
    MS.prototype.mb = function() {
        return !0
    };
    var XS = function(a, b) {
            a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 44
            }));
            if (b)
                if (b.defaultPrevented) a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 46
                }));
                else if (a.l.ce) a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 50
            }));
            else if (a.l.Lg) a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 51
            }));
            else if (a.M) a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 47
            }));
            else if (a.j.Xa) a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 52
            }));
            else {
                var c = VS(a, b);
                c ? SS(a, c) ? (a.j.Xa = c, CR(b), b.preventDefault = function() {
                    return b && (b.preventDefaultTriggered = !0)
                }, _.t.setTimeout((0, _.ex)(a.Ac, a, b), 0), a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 53
                }))) : a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 49
                })) : a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 48
                }))
            } else a.V.log(578856259, _.sj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 45
            }))
        },
        OS = function(a) {
            return -1 !== a.D.location.hash.indexOf("google_vignette")
        },
        YS = function(a) {
            if (!a.Kb)
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
    var $S = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.g = a;
        this.l = b;
        this.j = c;
        _.sb(this.g, this.l, this.j, tR);
        _.sp(this, function() {
            return void ZS(d)
        })
    };
    _.T($S, _.V);
    var ZS = function(a) {
            a.g && _.eg(a.g, a.l, a.j, tR)
        },
        aT = function(a) {
            this.l = a;
            this.reset()
        };
    aT.prototype.add = function(a) {
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
    aT.prototype.reset = function() {
        this.g = [];
        this.A = 0
    };
    var cT = function(a, b, c, d) {
        _.V.call(this);
        var e = this;
        this.D = a;
        this.target = b;
        this.handle = c || b;
        this.eb = d || 100;
        this.o = this.K = this.fa = !1;
        this.I = this.g = this.l = this.j = this.ia = this.H = this.P = this.J = null;
        this.rb = new $S(this.handle, "mousedown", function(f) {
            0 == f.button && bT(e, f)
        });
        _.S(this, this.rb);
        this.Kb = new $S(this.handle, "touchstart", function(f) {
            return bT(e, f)
        });
        _.S(this, this.Kb);
        this.qb = new $S(this.handle, "click", function(f) {
            e.fa ? (e.onClick(), e.fa = !1) : f.stopPropagation()
        });
        _.S(this, this.qb)
    };
    _.T(cT, _.V);
    var dT = function(a) {
        a = a.touches && a.touches[0] || a;
        return new _.Om(a.clientX, a.clientY)
    };
    cT.prototype.ga = function() {
        if (this.j && this.l && this.g) {
            var a = this.j,
                b = uR(this.g, this.l);
            var c = new _.Om(a.x + b.x, a.y + b.y);
            a = this.target;
            c instanceof _.Om ? (b = c.x, c = c.y) : (b = c, c = void 0);
            a.style.left = _.RB(b, !1);
            a.style.top = _.RB(c, !1)
        }
    };
    cT.prototype.la = function() {};
    cT.prototype.onClick = function() {};
    cT.prototype.W = function() {
        var a = this.target,
            b = _.$A(a);
        var c = DR(a);
        b = DR(b);
        c = new _.Om(c.x - b.x, c.y - b.y);
        a = GR(a, "margin");
        return uR(c, new _.Om(a.left, a.top))
    };
    var bT = function(a, b) {
        a.K && eT(a);
        a.K = !0;
        a.j = a.W();
        a.l = dT(b);
        a.g = a.l;
        a.I = new aT(a.eb);
        a.I.add(a.l);
        a.J = new $S(a.D, "mousemove", (0, _.ex)(a.xa, a));
        _.S(a, a.J);
        a.P = new $S(a.D, "touchmove", (0, _.ex)(a.xa, a));
        _.S(a, a.P);
        a.H = new $S(a.D, "mouseup", (0, _.ex)(a.Ma, a));
        _.S(a, a.H);
        a.ia = new $S(a.D, "touchend", (0, _.ex)(a.Ma, a));
        _.S(a, a.ia)
    };
    cT.prototype.xa = function(a) {
        if (this.K)
            if (a.preventDefault(), this.g = dT(a), this.I.add(this.g), this.o) this.ga();
            else {
                var b = this.l,
                    c = this.g;
                a = b.x - c.x;
                b = b.y - c.y;
                10 <= Math.sqrt(a * a + b * b) && (this.ga(), this.o = !0)
            }
    };
    cT.prototype.Ma = function(a) {
        this.o ? (a.preventDefault(), this.g = dT(a), this.la()) : this.fa = !0;
        eT(this)
    };
    var eT = function(a) {
        a.K = !1;
        a.o = !1;
        a.j = null;
        a.l = null;
        a.g = null;
        a.I = null;
        a.J && ZS(a.J);
        a.P && ZS(a.P);
        a.H && ZS(a.H);
        a.ia && ZS(a.ia)
    };
    var iT = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        _.V.call(this);
        var p = this;
        this.config = a;
        this.pa = b;
        this.H = c;
        this.K = d;
        this.Ma = f || function() {};
        this.ra = g || function() {};
        this.ma = h;
        this.wa = k;
        this.xa = l;
        this.fa = m;
        this.j = (this.o = n) ? 2 : 1;
        _.sp(this, function() {
            return fT(p, !0)
        });
        this.C = _.dg("INS", b.document);
        _.sp(this, function() {
            return p.C = null
        });
        this.I = null;
        HTMLElement.prototype.attachShadow && !this.ma.Gb(1013, function() {
            p.I = _.dg("DIV", b.document);
            p.I.className = "grippy-host";
            p.I.attachShadow({
                mode: "closed"
            }).appendChild(p.C);
            _.sp(p, function() {
                return p.I = null
            });
            return !0
        }) && (this.I = null);
        this.J = this.D = !1;
        this.ia = 0;
        this.g = e;
        this.ga = !1;
        this.l = this.P = null;
        this.sa = b.innerHeight;
        this.la = "true" === this.config.scroll_detached;
        this.W = "true" === this.config.dismissable;
        this.rb = "true" === this.config.draggable || "top" != this.g;
        this.mb = this.config.expId || "";
        this.eb = this.config.qemId || "";
        a = parseInt(this.config.z_index_override, 10);
        this.ua = isNaN(a) ? null : a;
        this.qb = new _.uI(b);
        !this.W && _.t.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(function() {
            var r = p.pa.innerHeight;
            if (2 > Math.abs(r - 460) || 2 > Math.abs(r - 529)) r < p.sa && 2 > Math.abs(_.Wi(p.pa) - p.ia - 68) && (p.ga = !0, 0 === p.j && gT(p)), p.sa = r
        }, 300);
        hT(this, this.C)
    };
    _.T(iT, _.V);
    var jT = function(a, b) {
            if ("top" == a.g) {
                var c;
                _.yp(null != (c = a.I) ? c : a.C, {
                    top: _.bJ(b)
                })
            }
        },
        hT = function(a, b) {
            eR(b);
            _.yp(b, {
                "background-color": "#FAFAFA",
                display: "block",
                position: "relative",
                "z-index": 1,
                height: _.bJ(5),
                "box-shadow": "top" == a.g ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
            });
            if ("top" == a.g) {
                var c, d, e = {
                        position: "absolute",
                        top: _.bJ(null != (d = null == (c = a.o) ? void 0 : c.maxHeight) ? d : a.K.height),
                        width: "100%"
                    },
                    f;
                _.yp(null != (f = a.I) ? f : b, e)
            }
            var g = _.dg("SPAN", a.pa.document);
            g.appendChild(kT(a));
            var h = function(k) {
                k.target === g && (k.preventDefault && k.preventDefault(), k.stopImmediatePropagation && k.stopImmediatePropagation(), k.stopPropagation && k.stopPropagation())
            };
            _.sb(g, "click", h);
            _.sp(a, function() {
                return _.eg(g, "click", h)
            });
            lT(a, g);
            b.className = "ee";
            b.appendChild(g)
        },
        lT = function(a, b) {
            var c = {};
            a = (c.display = "block", c.width = "80px", c.height = "45px", c[a.g] = "0", c.left = "0%", c.marginLeft = "0px", c["pointer-events"] = "none", c);
            c = b.getElementsByTagName("svg")[0];
            _.yp(b, a);
            dR(c)
        },
        mT = function(a) {
            var b;
            return null != (b = a.I) ? b : a.C
        },
        kT = function(a) {
            switch (a.g) {
                case "top":
                    var b = "dropShadowBottom";
                    var c = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                    var d = "0";
                    var e = "up";
                    var f = oR;
                    break;
                case "bottom":
                    b = "dropShadowTop", c = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", d = "25", e = "down", f = pR
            }
            var g = a.pa.document,
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
        nT = function(a, b) {
            for (var c = a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0], d; d = c.firstChild;) c.removeChild(d);
            switch (a.g) {
                case "top":
                    (b ? pR : oR)(c);
                    break;
                case "bottom":
                    (b ? oR : pR)(c)
            }
        },
        oT = function(a, b, c, d) {
            b = {
                i: b,
                dc: 0 === a.j ? "1" : "0",
                fdc: c ? "1" : "0",
                ds: a.W ? "1" : "0",
                expId: a.mb,
                sc: a.la ? "1" : "0",
                off: d,
                vw: _.Oi(a.pa),
                req: a.H.src,
                tp: a.g,
                h: a.K.height,
                w: a.K.width,
                qemId: a.eb
            };
            _.gj(a.wa, "flgr", b, !0, 1)
        };
    iT.prototype.onClick = function(a) {
        a.preventDefault();
        this.D || (this.ga = !0, gT(this), oT(this, "c", 0 !== this.j, 0))
    };
    var gT = function(a, b) {
            b = void 0 === b ? a.W : b;
            switch (a.j) {
                case 1:
                    a.show();
                    break;
                case 2:
                    pT(a);
                    break;
                case 0:
                    a.o ? pT(a) : a.show();
                    break;
                case 3:
                    fT(a, b);
                    break;
                case 4:
                    a.show()
            }
        },
        qT = function(a) {
            var b = a.o.maxHeight;
            4 !== a.j && (a.l.style[a.g] = "-" + (b - (parseInt(a.l.style.height, 10) + parseInt(a.l.style[a.g], 10))) + "px");
            a.l.style.height = b + "px";
            a.H.style["max-height"] = "none";
            a.H.height = "100%";
            jT(a, b);
            null != (a = a.P) && (a.C = b)
        },
        sT = function(a, b) {
            "bottom" == a.g && IR(a.pa) && a.ma.Gb(404, function() {
                return rT(a, "0px", b, "ease-out")
            })
        };
    iT.prototype.show = function() {
        var a = this;
        if (!this.D) {
            var b = this.o && parseInt(this.l.style.height, 10) > this.K.height,
                c = parseInt(this.l.style[this.g], 10);
            if (c || b) {
                var d = function() {
                    a.j = 3;
                    if (b) {
                        var g = a.K.height;
                        a.l.style[a.g] = "0";
                        a.l.style.height = g + "px";
                        a.H.height = g;
                        a.H.style["max-height"] = "30vh";
                        jT(a, g);
                        var h;
                        null != (h = a.P) && (h.C = g)
                    }
                    a.D = !1;
                    a.J = !1;
                    tT(a);
                    a.l.setAttribute("data-anchor-status", "displayed");
                    a.l.setAttribute("data-anchor-shown", !0);
                    nT(a, !1)
                };
                this.D = !0;
                if (c && !b) {
                    var e = -c / .1;
                    sT(this, e);
                    nT(this, !1);
                    c = new iS(this.l, c, 0, e, this.g, this.ma, d, hS);
                    this.fa();
                    fS(c)
                } else if (b) {
                    var f = this.o.maxHeight;
                    e = this.K.height - f;
                    f = (f + c > this.K.height ? -1 : 1) * (e - c) / .1;
                    sT(this, f);
                    c === e ? d() : (c = new iS(this.l, c, e, f, this.g, this.ma, d, hS), this.fa(), fS(c))
                }
            } else this.J = !1
        }
    };
    var pT = function(a) {
            if (!a.D) {
                qT(a);
                var b = parseInt(a.l.style[a.g], 10),
                    c = function() {
                        a.D = !1;
                        a.j = 4;
                        a.J = !1;
                        tT(a);
                        a.l.setAttribute("data-anchor-status", "displayed");
                        a.l.setAttribute("data-anchor-shown", !0);
                        nT(a, !1)
                    };
                if (b) {
                    a.D = !0;
                    var d = -b / .1;
                    sT(a, d);
                    nT(a, !1);
                    b = new iS(a.l, b, 0, d, a.g, a.ma, c, hS);
                    a.fa();
                    fS(b)
                } else c()
            }
        },
        fT = function(a, b) {
            if (!a.D && a.l) {
                var c = parseInt(a.l.style[a.g], 10),
                    d = -(4 === a.j ? a.o.maxHeight : a.K.height) - (b ? 30 : 0),
                    e = (c - d) / .1;
                "bottom" == a.g && IR(a.pa) && a.ma.Gb(405, function() {
                    return rT(a, "21px", e, "ease-in")
                });
                b || nT(a, !0);
                c === d ? (b || (a.j = 0), a.J = b) : (a.D = !0, c = new iS(a.l, c, d, e, a.g, a.ma, function() {
                    a.D = !1;
                    b || (a.j = 0);
                    (a.J = b) || nT(a, !0);
                    b && a.Ma();
                    a.l.setAttribute("data-anchor-status", "dismissed")
                }, gS), a.xa(), fS(c))
            }
        },
        wT = function(a, b) {
            if ("bottom" !== a.g && "top" !== a.g) throw Error("unsupported reactive type");
            var c = function(k) {
                    return a.onClick(k)
                },
                d = a.C;
            _.sb(d, "click", c);
            _.sp(a, function() {
                return _.eg(d, "click", c)
            });
            a.I && (_.sb(a.I, "click", c), _.sp(a, function() {
                return a.I && _.eg(a.I, "click", c)
            }));
            _.KB(b, {
                opacity: 1
            });
            var e = a.pa.document;
            if (e) {
                a.l = b;
                var f, g, h = null != (g = null == (f = a.o) ? void 0 : f.maxHeight) ? g : a.K.height;
                a.rb && (a.P = new("top" == a.g ? uT : vT)(a, e, h, b, a.C), _.S(a, a.P));
                e = {
                    position: "fixed",
                    left: _.bJ(0)
                };
                e[a.g] = _.bJ(-h - 30);
                _.KB(b, e);
                _.yp(b, {
                    overflow: "visible",
                    background: "#FAFAFA"
                });
                _.yI(a.qb, function(k) {
                    var l = null == a.ua ? 2147483647 : a.ua;
                    _.KB(b, {
                        zIndex: null == k ? l : Math.min(k, l)
                    })
                });
                gT(a)
            }
        },
        rT = function(a, b, c, d) {
            _.KB(a.H, {
                transition: c / 1E3 + "s",
                "transition-timing-function": d,
                "margin-top": b
            })
        },
        tT = function(a) {
            a.ra();
            a.ra = function() {}
        },
        xT = function(a, b, c, d, e) {
            cT.call(this, b, d, e);
            this.mb = a;
            this.C = c
        };
    _.T(xT, cT);
    xT.prototype.la = function() {
        var a = this.mb;
        if (!a.D) {
            var b = parseInt(a.l.style[a.g], 10),
                c = b + parseInt(a.l.style.height, 10),
                d = a.K.height / 2;
            c >= (a.o ? a.o.maxHeight / 2 : _.z(Number, "MAX_SAFE_INTEGER")) ? (pT(a), oT(a, "d", !1, b)) : c >= d ? (a.show(), oT(a, "d", !1, b)) : (fT(a, a.W), oT(a, "d", !0, b))
        }
    };
    xT.prototype.ga = function() {
        if (null !== this.j && null !== this.l && null !== this.g) {
            var a = this.ua(this.j.y, uR(this.g, this.l).y);
            0 < a && (a = 0);
            a < -this.C && (a = -this.C);
            var b = {};
            b[this.ra()] = _.bJ(a);
            _.KB(this.target, b)
        }
    };
    var uT = function(a, b, c, d, e) {
        xT.call(this, a, b, c, d, e)
    };
    _.T(uT, xT);
    uT.prototype.W = function() {
        return new _.Om(0, parseInt(this.target.style.top, 10))
    };
    uT.prototype.ua = function(a, b) {
        return b - a
    };
    uT.prototype.ra = function() {
        return "top"
    };
    var vT = function(a, b, c, d, e) {
        xT.call(this, a, b, c, d, e)
    };
    _.T(vT, xT);
    vT.prototype.W = function() {
        return new _.Om(0, parseInt(this.target.style.bottom, 10))
    };
    vT.prototype.ua = function(a, b) {
        return a - b
    };
    vT.prototype.ra = function() {
        return "bottom"
    };
    var ET = function(a, b, c, d, e, f, g, h) {
        g = void 0 === g ? !1 : g;
        h = void 0 === h ? null : h;
        _.YQ.call(this, a, b, f);
        var k = this;
        this.ma = d;
        this.wa = e;
        this.C = this.Ac = this.Kb = 0;
        this.qb = this.Fj = !1;
        this.D = null;
        this.W = this.ua = !1;
        this.J = null;
        this.ra = GR(b.document.body, "padding");
        this.o = GR(b.document.body, "padding");
        this.ia = 0;
        this.Qi = this.H = !1;
        this.la = !0;
        this.I = c;
        this.K = yT(this);
        this.fa = null;
        this.Vd = this.Wd = this.xa = this.mb = this.eb = this.Ni = this.Gj = this.Jj = !1;
        this.Pj = _.UA(b || window).height / 2;
        this.Lj = _.UA(b || window).height;
        this.Ii = vR(b);
        this.Hi = this.ga = this.Dc = !1;
        this.Gi = g;
        this.kn = h;
        zT(this);
        this.Si = this.ma.Ba(266, function() {
            AT(k)
        });
        this.Wi = this.ma.Ba(267, function() {
            AT(k)
        });
        this.cj = this.ma.Ba(268, function() {
            if (k.H && k.l && k.D) {
                var l = k.D;
                l.ia = _.Wi(l.pa)
            }
            l = _.Wi(k.g);
            var m = l - k.Kb;
            BT(k, m);
            k.xa && (0 < m && (k.C += m), k.Dc = k.Ii - l <= k.Lj, k.Kb = l);
            AT(k)
        });
        this.dj = this.ma.Ba(269, function() {
            CT(k)
        });
        this.kj = this.ma.Ba(270, function(l) {
            DT(k, l)
        });
        this.vj = this.ma.Ba(271, function(l) {
            if (l && l.touches) {
                k.J = "touchmove";
                k.ia = l.touches.length;
                k.W = !0;
                AT(k);
                if (!k.Fj && l.touches && 0 != l.touches.length && l.touches[0]) {
                    l = l.touches[0].pageY;
                    var m = l - k.Ac;
                    k.Ac = l;
                    l = m
                } else l = 0;
                0 < l && (k.C += l);
                BT(k, l)
            }
        });
        this.Aj = this.ma.Ba(272, function(l) {
            l && l.touches && l.touches[0] && (k.J = "touchstart", k.ia = l.touches.length, k.W = !1, AT(k), k.Ac = l.touches[0].pageY, l = (l = l.target) && "top" == k.I && k.ua && k.D && mT(k.D) && 1 === l.nodeType ? _.aB(mT(k.D), l) : !1, k.Fj = l)
        });
        this.Ec = this.ma.Ba(273, function() {
            k.eb || (k.eb = !0, _.eg(k.j, "load", k.Ec), k.mb && !k.Qi || AT(k))
        });
        _.sb(a, "load", this.Ec);
        _.sp(this, function() {
            return _.eg(a, "load", k.Ec)
        })
    };
    _.T(ET, _.YQ);
    var GT = function(a) {
            var b = a.g;
            _.sb(b, "orientationchange", a.Si);
            _.sb(b, "resize", a.Wi);
            _.sb(b, "scroll", a.cj);
            _.sb(b, "touchcancel", a.dj);
            _.sb(b, "touchend", a.kj);
            _.sb(b, "touchmove", a.vj);
            _.sb(b, "touchstart", a.Aj);
            _.sp(a, function() {
                return FT(a)
            })
        },
        FT = function(a) {
            var b = a.g;
            _.eg(b, "orientationchange", a.Si);
            _.eg(b, "resize", a.Wi);
            _.eg(b, "scroll", a.cj);
            _.eg(b, "touchcancel", a.dj);
            _.eg(b, "touchend", a.kj);
            _.eg(b, "touchmove", a.vj);
            _.eg(b, "touchstart", a.Aj)
        };
    ET.prototype.Rj = function(a) {
        var b = this.l;
        if (b && !this.D) {
            for (var c in HT) !HT.hasOwnProperty(c) || c in a || (a[c] = HT[c]);
            this.Jj = "true" === a.use_manual_view || "top" === this.I || !!_.Fj(this.g).wasReactiveAdConfigReceived[2];
            this.Gj = "true" === a.use_important;
            if (c = a.af_l) this.mb = "true" === c;
            this.Hi = (this.xa = "true" === a.wait_for_scroll || "top" == this.I) && ("true" === a.tsec || "top" == this.I);
            IT(this, a);
            this.D = JT(this, a);
            this.fa = KT(this);
            this.Dc = this.Lj >= this.Ii;
            a = this.l;
            c = this.D && mT(this.D);
            a && c && ("top" == this.I ? a.appendChild(c) : a.insertBefore(c, a.firstChild));
            GT(this);
            this.ua = !0;
            b.setAttribute("data-anchor-status", "ready-to-display")
        }
    };
    var KT = function(a) {
            var b = a.K.height + 5;
            "bottom" == a.I && IR(a.g) && (b += 20);
            return new _.Sm(a.K.width, b)
        },
        IT = function(a, b) {
            var c = parseInt(b.ht, 10),
                d = 0 < c ? c : null;
            b = parseInt(b.wd, 10);
            var e = 0 < b ? b : null;
            null != d && (a.K.height = d);
            null != e && (a.K.width = e);
            sR(a, function(f) {
                qR(f, e, d)
            }, !1, !0);
            qR(a.j, e, d)
        },
        JT = function(a, b) {
            b = new iT(b, a.g, a.j, a.K, a.I, function() {
                if (!a.qb) {
                    a.qb = !0;
                    FT(a);
                    var c = a.l;
                    _.ZA(c);
                    LT(a, a.ra, !0, !0);
                    c && (c.style.display = "none")
                }
            }, function() {
                return void MT(a)
            }, a.ma, a.wa, function() {
                a.ga || (a.ga = !0, BT(a, null));
                _.lK(a.L, a.slotId)
            }, function() {
                a.ga && (a.ga = !1, BT(a, null));
                a.Oj && _.mK(a.L, a.slotId)
            }, a.kn);
            _.S(a, b);
            return b
        },
        zT = function(a) {
            if (a.la) {
                var b = a.l;
                b && (b.style.display = "none");
                LT(a, a.ra, !0, !0);
                a.la = !1
            }
        };
    ET.prototype.Ma = function() {
        this.Qi = !0;
        if (!this.H && NT(this) && (this.eb || !this.mb)) {
            var a = this.l;
            a && (OT(this), sR(this, function(b) {
                eR(b)
            }, !0), wT(this.D, a), PT(this), this.H = !0, (a = this.j.contentWindow) && HR(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    };
    var PT = function(a) {
            var b = a.l;
            if (b) {
                var c = a.D,
                    d = c.pa,
                    e = _.Wi(d);
                if (!(10 > Math.abs(e - c.ia))) {
                    var f = 10 > e;
                    d = e + 10 + _.Ti(d) > _.Vi(d);
                    f = f || d;
                    c.la || c.ga || c.D || (0 === c.j || f ? 0 === c.j && f && gT(c) : gT(c, !1));
                    c.ia = e
                }
                a.la || (QT(a), c = GR(a.g.document.body, "padding"), "bottom" == a.I && (c.bottom += a.fa.height + 25), LT(a, c), b.style.display = "block", a.la = !0)
            }
        },
        OT = function(a) {
            var b = a.l;
            if (b && a.j.parentElement) {
                ER(b, a.fa);
                var c = a.g.innerWidth;
                _.Si(a.g).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
                RT(a)
            }
        },
        RT = function(a) {
            sR(a, function(c) {
                ER(c, a.K);
                c.style.width = "100%"
            }, !1, !0);
            a.j.style.display = "block";
            a.j.style.margin = "0 auto";
            if (a.Gj) {
                var b = a.l;
                wR(b, function(c) {
                    dR(c, function(d) {
                        return c === b && /display|bottom/i.test(d) ? !1 : !0
                    });
                    if ("svg" === c.nodeName) return !1
                })
            }
        },
        QT = function(a) {
            if ("bottom" !== a.I && "top" !== a.I) throw Error("Unexpected position: " + a.I);
        },
        yT = function(a) {
            QT(a);
            var b = a.g.innerWidth;
            a = _.Qm(_.SB, a.j).height || +a.j.height || 0;
            return new _.Sm(b, a)
        },
        CT = function(a) {
            a.J = "touchcancel";
            _.t.setTimeout(a.ma.Ba(274, function() {
                "touchcancel" === a.J && (a.ia = 0, a.W = !1, AT(a))
            }), 1E3)
        },
        DT = function(a, b) {
            if (b && b.touches) {
                a.J = "touchend";
                var c = b.touches.length;
                2 > c ? _.t.setTimeout(a.ma.Ba(256, function() {
                    "touchend" === a.J && (a.ia = c, a.W = !1, AT(a))
                }), 1E3) : (a.ia = c, AT(a));
                !a.H || a.Gi || cR(a.g) || fT(a.D, !0)
            }
        },
        BT = function(a, b) {
            var c = a.la ? ST(a, a.ga) : a.ra.top;
            if ("top" === a.I && a.g.document.body && a.ua && a.D && a.H && a.o.top !== c && 0 !== b) {
                var d = _.EB(a.o);
                null === b ? (d.top = c, LT(a, d)) : (0 < b && a.o.top > c && (d.top = Math.max(c, a.o.top - b), LT(a, d, !1)), 0 > b && a.o.top < c && (d.top = Math.min(c, a.o.top - b), LT(a, d, !1)))
            }
        },
        LT = function(a, b, c, d) {
            var e = a.o.top - b.top,
                f = _.Wi(a.g);
            f < e && (void 0 === d || !d) || (d = a.g.document.body, d.style.paddingTop = _.bJ(b.top), d.style.paddingRight = _.bJ(b.right), d.style.paddingBottom = _.bJ(b.bottom), d.style.paddingLeft = _.bJ(b.left), a.o = b, (void 0 === c || c) && a.g.scrollTo(0, f - e))
        },
        AT = function(a) {
            !a.ua || a.qb || 2 <= a.ia && a.W || !NT(a) ? zT(a) : (a.Ma(), PT(a))
        };
    ET.prototype.rb = function() {
        return _.Ni(this.g)
    };
    ET.prototype.Nj = function() {
        this.Wd = !0;
        var a;
        null == (a = this.l) || a.removeAttribute("data-anchor-status")
    };
    ET.prototype.Sj = function() {
        this.Vd = !0;
        var a = this.l;
        this.Wd && this.Vd && (null == a || a.setAttribute("data-anchor-status", "ready-to-display"))
    };
    var NT = function(a) {
            if (!a.rb() || a.Wd && !a.Vd) return !1;
            var b = a.g;
            if (!a.H && a.xa) switch (a.Hi && (a.C += Math.max(_.Wi(a.g) - a.Kb, 0)), a.I) {
                case "bottom":
                    return a.C >= a.Pj || a.Dc;
                case "top":
                    return a.C > ST(a)
            }
            return a.Gi || cR(b)
        },
        ST = function(a, b) {
            return (void 0 === b ? 0 : b) ? a.ra.top + 30 : a.ra.top + 30 + a.fa.height - 5
        },
        MT = function(a) {
            a.Jj && !a.Ni && (a.Ni = !0, a.ma.Gb(257, function() {
                var b = {
                        msg_type: "manual-send-view"
                    },
                    c = a.j.contentWindow;
                c && c.postMessage(a.g.JSON.stringify(b), "*")
            }))
        };
    ET.prototype.Qj = function(a, b) {
        this.j = a;
        if (b && (this.K.height !== b.height || this.K.width !== b.width)) {
            a = b.height - this.K.height;
            var c = {};
            IT(this, (c.ht = b.height, c.wd = b.width, c));
            this.fa = KT(this);
            OT(this);
            BT(this, a);
            var d;
            null == (d = this.D) || jT(d, b.height)
        }
        RT(this)
    };
    var HT = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    var TT = function() {
            this.g = null
        },
        UT = function(a, b, c) {
            a.g = _.II(b, c);
            if (b = !!a.g) a = a.g, b = !!a && 1 > a.length;
            return b
        };
    var VT = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        _.YQ.call(this, a, b, c);
        this.D = null;
        this.I = b.document;
        this.H = d;
        this.K = _.wI(new _.uI(b), 2147483646);
        this.C = e;
        this.o = b
    };
    _.T(VT, _.YQ);
    var YT = function(a) {
            WS(a, !1);
            var b = a.l;
            if (b) {
                var c = rR(a.o, a.C);
                sR(a, function(d) {
                    _.yp(d, c);
                    eR(d)
                }, !0);
                a.j.setAttribute("width", "");
                a.j.setAttribute("height", "");
                _.KB(a.j, c);
                _.KB(a.j, WT);
                _.KB(b, XT);
                _.KB(b, {
                    background: "transparent"
                });
                _.yp(b, {
                    display: "none",
                    position: "fixed"
                });
                eR(b);
                eR(a.j);
                1 >= _.Ui(a.o) || (_.KB(b, {
                    overflow: "scroll",
                    "max-width": "100vw"
                }), dR(b))
            }
        },
        WS = function(a, b) {
            var c = a.l;
            c && (b ? (_.AI(a.K), _.yp(c, {
                display: "block"
            }), a.I.body && !a.D && (a.D = _.HI(a.I, a.g, a.H)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.I.body.setAttribute("aria-hidden", "true")) : (_.BI(a.K), _.yp(c, {
                display: "none"
            }), a.D && (a.D(), a.D = null), a.I.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
        },
        XT = {
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
        WT = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var ZT = function(a, b, c, d, e, f, g, h) {
        ET.call(this, c, d, 2 === b ? "top" : "bottom", new _.UJ(a), new _.KH, e, !0, h ? {
            maxHeight: _.az(h, 1)
        } : null);
        this.L = f;
        this.slotId = g;
        this.Oj = !!_.Iq(this.L, this.slotId);
        2 === b && _.lK(this.L, this.slotId)
    };
    _.T(ZT, ET);
    ZT.prototype.rb = function() {
        return 0 === (0, _.Xp)() || ET.prototype.rb.call(this)
    };
    var $T = function(a, b, c) {
        VT.call(this, b, a, c, _.Qf(_.cE), !0);
        YT(this)
    };
    _.T($T, VT);
    var aU = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        var r = [];
        _.E(_.ZD) && 0 === (0, _.Xp)() && r.push(101);
        _.E(_.$D) && r.push(102);
        h = _.E(_.bE) ? bS(h) : new _.u.Set(_.E(_.iE) ? [2] : []);
        MS.call(this, b, c, e, new $T(b, c, d), new _.KH, f, g, {
            Dj: _.E(_.aE),
            di: r,
            Kk: !0,
            Gf: {
                Nm: 3,
                version: a.Pa
            },
            ql: !0,
            ml: _.E(_.eE) ? m : null,
            zi: _.Qf(_.fE)
        }, h, a.V, {
            pvsid: a.pvsid,
            Ea: a.Ea,
            fb: 17,
            Hb: a.Pa
        });
        this.ga = k;
        this.Dc = l;
        this.la = n;
        this.W = p;
        _.S(this, this.C)
    };
    _.T(aU, MS);
    aU.prototype.mb = function() {
        var a;
        if (!(a = this.ga)) {
            var b = _.Of(TT),
                c = this.W;
            try {
                if (c && UT(b, c, this.la)) {
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
    aU.prototype.xa = function() {
        return !0
    };
    aU.prototype.J = function() {
        MS.prototype.J.call(this);
        this.Dc()
    };
    aU.prototype.rb = function() {
        return this.ga || UT(_.Of(TT), this.W, this.la)
    };
    var bU = {
        Zk: ZT,
        tl: aU
    };
    _.LP(_m, _.dO).resolve(bU);
})