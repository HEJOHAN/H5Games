window.googletag && typeof googletag._gpt_js_load_2_ == 'function' && googletag._gpt_js_load_2_(function(_, _m) {
    var HQ = function(a) {
            var b = _.Cf();
            if ("function" !== typeof a) throw b = b ? b() + "\n" : "", Error(b + String(a));
            return a
        },
        JQ = function(a) {
            if (!IQ.test(a)) return null;
            a = Number(a);
            return isNaN(a) ? null : a
        },
        KQ = function(a, b) {
            return a && a.source ? a.source === b || a.source.parent === b : !1
        },
        LQ = function(a) {
            a = _.Hi(a);
            return .05 > Math.abs(a - 1)
        },
        NQ = function(a) {
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
            _.Ww(_.z(Object, "keys").call(Object, b), function(c) {
                var d = a.style[_.xA(c)];
                ("undefined" !== typeof d ? d : a.style[_.tB(a, c)]) || _.uB(a, c, b[c])
            });
            MQ(a)
        },
        QQ = function(a) {
            return _.cj(_.z(Object, "assign").call(Object, {}, a, {
                payload: function() {
                    var b = new _.dj,
                        c = new _.ej,
                        d = new OQ;
                    var e = new PQ;
                    e = _.ai(e, 1, a.Mm);
                    d = _.ci(d, 1, e);
                    d = _.bj(d, 2, a.wf);
                    c = _.hj(c, 6, _.gj, d);
                    return _.hj(b, 4, _.ij, c)
                }
            }))
        },
        RQ = function(a) {
            var b;
            a = (null != (b = void 0 === a ? null : a) ? b : window).googletag;
            return (null == a ? 0 : a.apiReady) ? a : void 0
        },
        TQ = function(a, b, c, d) {
            return SQ(a, "fullscreen", d.Ca(952, function(e, f) {
                if (f.source === b) {
                    if (!("eventType" in e)) throw Error("bad message " + JSON.stringify(e));
                    delete e.googMsgType;
                    c(e)
                }
            }))
        },
        VQ = function(a, b, c, d, e) {
            a = new UQ(1, a, b, c, d, e);
            a.wa();
            return a
        },
        WQ = function(a) {
            var b;
            null == (b = a.l) || b.setAttribute("data-vignette-loaded", "true")
        },
        XQ = function(a) {
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
        YQ = function(a) {
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
        ZQ = function(a, b, c) {
            null !== b && null !== JQ(a.getAttribute("width")) && a.setAttribute("width", String(b));
            null !== c && null !== JQ(a.getAttribute("height")) && a.setAttribute("height", String(c));
            null !== b && (a.style.width = _.JI(b));
            null !== c && (a.style.height = _.JI(c))
        },
        $Q = function(a, b) {
            a = _.Mi(a);
            b = b ? 100 * (1 > a ? 1 : a) : 100;
            return {
                width: b + "vw",
                height: b + "vh"
            }
        },
        PQ = function(a) {
            this.F = _.A(a)
        };
    _.T(PQ, _.D);
    var OQ = function(a) {
        this.F = _.A(a)
    };
    _.T(OQ, _.D);
    var aR = function(a, b, c, d) {
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
        bR = {
            capture: !0
        },
        cR = function(a, b) {
            return new _.Im(a.x - b.x, a.y - b.y)
        },
        dR = function(a) {
            var b = a.document,
                c = 0;
            if (b) {
                c = b.body;
                var d = b.documentElement;
                if (!d || !c) return 0;
                a = _.EA(a).height;
                if (_.DA(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
                else {
                    b = d.scrollHeight;
                    var e = d.offsetHeight;
                    d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                    c = b > a ? b > e ? b : e : b < e ? b : e
                }
            }
            return c
        },
        IQ = /^(-?[0-9.]{1,30})$/,
        eR = function(a, b) {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !== b(c) && (c = _.lj(c.children || c.childNodes || [], function(d) {
                    return 1 === d.nodeType
                }), c.length && a.unshift.apply(a, _.ri(c)))
            }
        },
        fR = function(a) {
            var b = {};
            if (a) {
                var c = /\s*:\s*/;
                _.Ww((a || "").split(/\s*;\s*/), function(d) {
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
        gR = function(a, b) {
            if ("length" in a.style) {
                a = a.style;
                for (var c = a.length, d = 0; d < c; d++) {
                    var e = a[d];
                    b(a[e], e, a)
                }
            } else a = fR(a.style.cssText), _.Cn(a, b)
        },
        MQ = function(a, b) {
            b = void 0 === b ? function() {
                return !0
            } : b;
            var c = /!\s*important/i;
            gR(a, function(d, e) {
                !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
            })
        },
        hR = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        iR = /.*domain\.test$/,
        jR = /\.prod\.google\.com(:\d+)?$/,
        kR = function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        lR = function(a) {
            if (1 == a.nodeType) return _.AB(a);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new _.Im(a.clientX, a.clientY)
        },
        mR = function(a, b) {
            if (b instanceof _.Mm) {
                var c = b.height;
                b = b.width
            } else throw Error("missing height argument");
            a.style.width = _.BB(b, !0);
            a.style.height = _.BB(c, !0)
        },
        nR = function(a, b) {
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
        oR = function(a, b) {
            if (_.Vx) {
                var c = nR(a, b + "Left"),
                    d = nR(a, b + "Right"),
                    e = nR(a, b + "Top");
                a = nR(a, b + "Bottom");
                return new _.nB(e, d, a, c)
            }
            c = _.wB(a, b + "Left");
            d = _.wB(a, b + "Right");
            e = _.wB(a, b + "Top");
            a = _.wB(a, b + "Bottom");
            return new _.nB(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        },
        SQ = function(a, b, c, d) {
            d = void 0 === d ? null : d;
            var e = function(g) {
                try {
                    var h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            _.pb(a, "message", e);
            var f = !1;
            return function() {
                var g = !1;
                f || (f = !0, g = _.ag(a, "message", e));
                return g
            }
        },
        pR = function(a, b, c, d, e) {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (var f = 0; f < a.length; ++f) 1 < e && pR(a[f], b, c, d, --e)
        },
        qR = function(a) {
            var b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
            return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
        },
        uR = function(a, b) {
            _.V.call(this);
            this.B = a;
            this.D = this.j = this.g = !1;
            if (_.Xf(a) && b.length)
                for (a = _.y(b), b = a.next(); !b.done; b = a.next()) switch (b.value) {
                    case 0:
                        rR(this);
                        break;
                    case 1:
                        sR(this);
                        break;
                    case 2:
                        tR(this)
                } else this.za()
        };
    _.T(uR, _.V);
    uR.prototype.wa = function() {
        this.M || this.l(_.Xf(this.B))
    };
    var rR = function(a) {
            var b = function(d) {
                    d.isTrusted && (a.j = !0, a.l(d.timeStamp))
                },
                c = function(d) {
                    d.isTrusted && (a.j = !1, a.l(d.timeStamp))
                };
            _.pb(a.B, "focus", b);
            _.pb(a.B, "blur", c);
            _.kp(a, function() {
                return void a.B.removeEventListener("focus", b)
            });
            _.kp(a, function() {
                return void a.B.removeEventListener("blur", c)
            });
            a.j = a.B.document.hasFocus()
        },
        sR = function(a) {
            var b = function(c) {
                c.isTrusted && (a.g = 1 === _.Nr(a.B.document) ? !0 : !1, a.l(c.timeStamp))
            };
            _.pb(a.B.document, "visibilitychange", b);
            _.kp(a, function() {
                return void a.B.document.removeEventListener("visibilitychange", b)
            });
            a.g = 1 === _.Nr(a.B.document)
        },
        tR = function(a) {
            var b = a.B.document.body.getBoundingClientRect().top + 10,
                c = function(d) {
                    d.isTrusted && (a.D = d.clientY < b ? !0 : !1, a.l(d.timeStamp))
                };
            _.pb(a.B.document.body, "mouseleave", c);
            _.pb(a.B.document.body, "mouseenter", c);
            _.kp(a, function() {
                return void a.B.document.body.removeEventListener("mouseleave", c)
            });
            _.kp(a, function() {
                return void a.B.document.body.removeEventListener("mouseenter", c)
            });
            a.D = !1
        },
        vR = function() {
            uR.apply(this, arguments);
            this.o = new _.xh;
            this.J = this.o.promise
        };
    _.T(vR, uR);
    var wR = function(a) {
        vR.call(this, a, [0, 1, 2]);
        this.I = 0;
        this.wa()
    };
    _.T(wR, vR);
    wR.prototype.l = function(a) {
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
                    _.kp(this, function() {
                        return void clearTimeout(c)
                    })
                }
                break;
            case 2:
                !this.j && this.g && this.D ? (this.o.resolve(a), this.za()) : this.I = 1
        }
    };
    var yR = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.Ox(function() {
            xR(b)
        })
    };
    _.T(yR, _.V);
    yR.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var xR = function(a) {
            var b = !1,
                c = function(e) {
                    e.isTrusted && (b = !0)
                },
                d = function(e) {
                    var f = e.timeStamp;
                    if (e = e.isTrusted && !b) e = (e = a.B.document.referrer) && "function" === typeof URL ? (new URL(e)).origin === a.B.location.origin : !1;
                    if (e) {
                        f = {
                            jc: f
                        };
                        e = _.y(a.g);
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
            _.kp(a, function() {
                a.B.removeEventListener("focus", d);
                a.B.removeEventListener("blur", c)
            })
        },
        zR = function(a) {
            vR.call(this, a, [1]);
            this.wa()
        };
    _.T(zR, vR);
    zR.prototype.l = function(a) {
        null != this.I || (this.I = 0);
        switch (this.I) {
            case 0:
                this.g && (this.I = 1);
                break;
            case 1:
                this.g || (this.I = 2, this.H = a);
                break;
            case 2:
                this.g && (this.C = a - this.H, this.o.resolve(a), this.za())
        }
    };
    var AR = function(a, b, c) {
        _.V.call(this);
        var d = this;
        c.promise.then(function() {
            return void d.za()
        });
        b = _.y(b);
        for (var e = b.next(), f = {}; !e.done; f = {
                Rb: void 0
            }, e = b.next()) switch (f.Rb = e.value, f.Rb) {
            case 2:
                e = new zR(a);
                _.S(this, e);
                e.J.then(function(g) {
                    return function() {
                        return void c.resolve(g.Rb)
                    }
                }(f));
                break;
            case 3:
                if (0 !== (0, _.Pp)()) break;
                e = new wR(a);
                _.S(this, e);
                e.J.then(function(g) {
                    return function() {
                        return void c.resolve(g.Rb)
                    }
                }(f));
                break;
            case 4:
                e = new yR(a), _.S(this, e), e.listen(function(g) {
                    return function() {
                        return void c.resolve(g.Rb)
                    }
                }(f))
        }
    };
    _.T(AR, _.V);
    var BR = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        CR = {
            IMG: " ",
            BR: "\n"
        },
        DR = function(a, b, c, d) {
            if (!(a.nodeName in BR))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in CR) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(CR[a.nodeName]);
            else
                for (a = a.firstChild; a;) DR(a, b, c, d), a = a.nextSibling
        },
        ER = / \xAD /g,
        FR = /\xAD/g,
        GR = /\u200B/g,
        HR = / +/g,
        IR = /^\s*/,
        JR = function(a) {
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
        KR = function(a) {
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
        LR = function(a, b) {
            var c = this;
            this.l = a;
            this.g = !1;
            this.j = b;
            this.A = this.j.Ca(264, function(d) {
                c.g && (_.FQ || (d = Date.now()), c.l(d), _.FQ ? _.EQ.call(_.t, c.A) : _.t.setTimeout(c.A, 17))
            })
        };
    LR.prototype.start = function() {
        this.g || (this.g = !0, _.FQ ? _.EQ.call(_.t, this.A) : this.A(0))
    };
    var MR = function(a, b, c, d) {
        this.g = a;
        this.D = b;
        this.Da = c;
        this.progress = 0;
        this.A = null;
        this.C = !1;
        this.l = [];
        this.j = null;
        this.M = new LR((0, _.Tw)(this.H, this), d)
    };
    MR.prototype.H = function(a) {
        if (this.C) this.M.g = !1;
        else {
            null === this.A && (this.A = a);
            this.progress = (a - this.A) / this.Da;
            1 <= this.progress && (this.progress = 1);
            a = this.j ? this.j(this.progress) : this.progress;
            this.l = [];
            for (var b = 0; b < this.g.length; b++) this.l.push((this.D[b] - this.g[b]) * a + this.g[b]);
            this.o();
            1 == this.progress && (this.M.g = !1, this.I())
        }
    };
    MR.prototype.I = function() {};
    MR.prototype.o = function() {};
    var NR = function(a) {
        a.C = !1;
        a.M.start()
    };
    MR.prototype.reset = function(a, b, c) {
        this.A = null;
        this.g = a;
        this.D = b;
        this.Da = c;
        this.progress = 0
    };
    var OR = function(a) {
            return a * a * a
        },
        PR = function(a) {
            a = 1 - a;
            return 1 - a * a * a
        },
        QR = function(a, b, c, d, e, f, g, h) {
            MR.call(this, [b], [c], d, f);
            this.K = a;
            this.ia = e;
            this.J = g ? g : null;
            this.j = h || null
        };
    _.T(QR, MR);
    QR.prototype.o = function() {
        var a = {};
        a[this.ia] = _.JI(this.l[0]);
        _.uB(this.K, a)
    };
    QR.prototype.I = function() {
        this.J && this.J()
    };
    var UQ = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.slotType = a;
        this.I = b;
        this.Sh = c;
        this.la = d;
        this.Ba = e;
        this.Ef = f;
        this.g = 1;
        this.qem = null;
        this.D = new _.xh;
        this.l = new _.xh;
        this.j = new _.xh
    };
    _.T(UQ, _.V);
    var RR = function(a) {
            return _.rb(function(b) {
                return b.return(a.D.promise)
            })
        },
        SR = function(a) {
            return _.rb(function(b) {
                return b.return(a.l.promise)
            })
        },
        TR = function(a) {
            return _.rb(function(b) {
                return b.return(a.j.promise)
            })
        };
    UQ.prototype.wa = function() {
        var a = this,
            b = TQ(this.I, this.Sh, function(c) {
                if ("adError" === c.eventType) a.j.resolve(), a.g = 4;
                else if ("adReady" === c.eventType && 1 === a.g) a.qem = c.qem, c.slotType !== a.slotType && (UR(a, {
                    cur_st: a.g,
                    evt: c.eventType,
                    adp_tp: c.slotType
                }), a.g = 4), a.D.resolve(), a.g = 2;
                else if ("adClosed" === c.eventType && 2 === a.g) a.l.resolve(c.result), a.g = 3;
                else if ("adClosed" !== c.eventType || 3 !== a.g) UR(a, {
                    cur_st: a.g,
                    evt: c.eventType
                }), a.g = 4
            }, this.la);
        _.kp(this, b)
    };
    var UR = function(a, b) {
        var c = .25;
        c = void 0 === c ? .01 : c;
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = c;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.Ef.Fm;
        b.version = a.Ef.version;
        _.Zi(a.Ba, "fullscreen_tag", b, !1, c)
    };
    var YR = function(a) {
            var b = VR(_.GA(_.AA(a))) || [];
            return !!_.tj(a, function(c) {
                if (!_.ja(c) || 1 != c.nodeType) return !1;
                var d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || 0 <= _.da(b, c) || _.rj(_.SA(WR), function(e) {
                    return d.call(c, e)
                })
            }, !1, 20)
        },
        VR = function(a) {
            var b = RQ(a);
            return b ? _.lj(_.Xw(b.pubads().getSlots(), function(c) {
                return a.document.getElementById(c.getSlotElementId())
            }), function(c) {
                return null != c
            }) : null
        },
        WR = {
            cn: "ins.adsbygoogle-ablated-ad-slot",
            en: "body ins.adsbygoogle",
            dn: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
            rn: ".google-auto-placed",
            sn: "ins.adsbygoogle[data-anchor-status]",
            un: "iframe[id^=google_ads_iframe]",
            zn: "div[id^=div-gpt-ad]",
            Rn: "ins.adsbygoogle[data-ad-format=autorelaxed]",
            Sn: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
            yn: "div.googlepublisherpluginad",
            jo: "html > ins.adsbygoogle"
        };
    var ZR = function(a) {
        _.V.call(this);
        var b = new _.xh,
            c = b.resolve;
        this.promise = b.promise;
        a.onmessage = function() {
            return c()
        };
        _.kp(this, function() {
            a.close()
        })
    };
    _.T(ZR, _.V);
    var $R = function() {
        var a = new _.xh,
            b = a.resolve;
        return {
            Cm: function(c, d) {
                null != d && d.ports.length && b(new ZR(d.ports[0]))
            },
            Bm: a.promise
        }
    };
    var aS = ["mousemove", "mousedown", "scroll", "keydown"],
        cS = function(a) {
            _.V.call(this);
            var b = this;
            this.B = a;
            this.g = [];
            this.l = _.Ox(function() {
                bS(b)
            })
        };
    _.T(cS, _.V);
    cS.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var bS = function(a) {
        for (var b = null, c = null, d = function(l) {
                if (b && 3E4 < l.timeStamp - b)
                    for (var m = {
                            jc: l.timeStamp,
                            jl: l.timeStamp - b,
                            Vm: c
                        }, n = _.y(a.g), p = n.next(); !p.done; p = n.next()) {
                        p = p.value;
                        try {
                            p(m)
                        } catch (r) {}
                    }
                b = l.timeStamp
            }, e = _.y(aS), f = e.next(); !f.done; f = e.next()) a.B.addEventListener(f.value, d);
        var g = null,
            h, k;
        (null == (h = a.B.navigator) ? 0 : h.userActivation) && (null == (k = a.B.performance) ? 0 : k.now) && (g = a.B.setInterval(function() {
            a.B.navigator.userActivation.isActive && (c = a.B.performance.now())
        }, 1E3));
        _.kp(a, function() {
            for (var l = _.y(aS), m = l.next(); !m.done; m = l.next()) a.B.removeEventListener(m.value, d);
            g && a.B.clearInterval(g)
        })
    };
    var eS = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.Ox(function() {
            dS(b)
        })
    };
    _.T(eS, _.V);
    eS.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var dS = function(a) {
        var b = null,
            c = function(e) {
                e.isTrusted && (b = e.timeStamp)
            },
            d = function(e) {
                var f = e.timeStamp;
                if (e.isTrusted) {
                    e = _.z(Object, "assign").call(Object, {}, {
                        jc: f
                    }, b ? {
                        Hm: f - b
                    } : null);
                    f = _.y(a.g);
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
        _.kp(a, function() {
            a.B.removeEventListener("focus", d);
            a.B.removeEventListener("blur", c)
        })
    };
    var fS = function(a, b, c, d, e, f) {
        _.V.call(this);
        var g = this;
        this.Ba = c;
        this.D = d;
        this.l = e;
        this.j = Math.floor(2147483647 * _.oh());
        this.g = function(h, k, l) {
            l = void 0 === l ? {} : l;
            h = _.z(Object, "assign").call(Object, {
                etc: g.j,
                e: h,
                t: Math.round(k),
                qqid: g.D,
                ptt: g.l
            }, l);
            _.Zi(g.Ba, "eit", h, !0, 1)
        };
        this.g(1, b);
        b = _.y(f);
        d = b.next();
        for (c = {}; !d.done; c = {
                Gc: void 0,
                Gf: void 0
            }, d = b.next()) switch (c.Gc = d.value, c.Gc) {
            case 101:
                d = new wR(a);
                d.J.then(function(h) {
                    return function(k) {
                        return void g.g(h.Gc, k)
                    }
                }(c));
                _.S(this, d);
                break;
            case 102:
                c.Gf = new zR(a);
                c.Gf.J.then(function(h) {
                    return function(k) {
                        return void g.g(h.Gc, k, {
                            tbd: Math.round(h.Gf.C || -1)
                        })
                    }
                }(c));
                _.S(this, c.Gf);
                break;
            case 103:
                d = new eS(a);
                d.listen(function(h) {
                    return function(k) {
                        var l;
                        g.g(h.Gc, k.jc, {
                            tsb: null != (l = k.Hm) ? l : -1
                        })
                    }
                }(c));
                _.S(this, d);
                break;
            case 104:
                d = new cS(a);
                d.listen(function(h) {
                    return function(k) {
                        var l;
                        g.g(h.Gc, k.jc, {
                            it: k.jl,
                            ualta: null != (l = k.Vm) ? l : -1
                        })
                    }
                }(c));
                _.S(this, d);
                break;
            case 105:
                d = new yR(a), d.listen(function(h) {
                    return function(k) {
                        g.g(h.Gc, k.jc)
                    }
                }(c)), _.S(this, d)
        }
    };
    _.T(fS, _.V);
    var hS = function(a) {
            this.g = null;
            this.l = a.match(_.PA)[3] || "";
            this.j = gS(a);
            this.A = !1
        },
        iS = function(a, b) {
            b ? a.g = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.g = null
        },
        lS = function(a, b, c) {
            if (_.rj(["data-google-vignette", "data-google-interstitial"], function(f) {
                    return "false" === b.getAttribute(f) || b.closest && !!b.closest("[" + f + '="false"]')
                })) return !1;
            var d = b.href,
                e = d && (d.match(_.PA)[3] || null);
            if (!jS(a, b, d, e, c)) return !1;
            a.A = !!e && kS(a, e);
            return a.A || !c && !YR(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
        },
        jS = function(a, b, c, d, e) {
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
            return !d || kS(a, d) && gS(c) == a.j ? !1 : !0
        },
        kS = function(a, b) {
            return b.replace(mS, "") == a.l.replace(mS, "")
        },
        gS = function(a) {
            a = a.match(_.PA);
            var b = a[6];
            return (a[5] || "") + (b ? "?" + b : "") || "/"
        },
        mS = /^(www\.|m\.|mobile\.)*/i;
    var qS = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        _.V.call(this);
        var f = this;
        this.D = a;
        this.ga = b;
        this.la = c;
        this.Ba = d;
        this.Ma = {};
        this.Sd = this.la.Ca(168, function(g, h) {
            return void oS(f, g, h)
        });
        this.Td = this.la.Ca(169, function(g, h) {
            _.Zi(f.Ba, "ras::xsf", {
                c: h.data.substring(0, 500),
                u: f.D.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        });
        this.P = [];
        pS(this, this.Ma, e);
        this.P.push(SQ(this.D, "sth", this.Sd, this.Td))
    };
    _.T(qS, _.V);
    var oS = function(a, b, c) {
        try {
            if (!a.xa(c.origin) || !KQ(c, a.ga.contentWindow)) return
        } catch (f) {
            return
        }
        var d = b.msg_type,
            e;
        "string" === typeof d && (e = a.Ma[d]) && a.la.Eb(168, function() {
            e.call(a, b, c)
        })
    };
    qS.prototype.xa = function(a) {
        return _.dB[a] || hR.test(a) || iR.test(a) || jR.test(a)
    };
    qS.prototype.A = function() {
        for (var a = _.y(this.P), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.P.length = 0;
        _.V.prototype.A.call(this)
    };
    var uS = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        var p = {};
        qS.call(this, a, b, c, e, (p.fullscreenApi = h.zj, p.heavyAdInterventionResponse = h.fl, p));
        var r = this;
        this.C = d;
        this.requestedSize = f;
        this.J = h;
        this.V = l;
        this.g = m;
        this.nb = _.Wf();
        this.ua = "true" === g["i-fvs"];
        this.wf = g.qid;
        this.H = null != n ? n : new hS(a.location.href);
        this.Ib = "true" === g.iobs && "IntersectionObserver" in this.D;
        var v, w;
        iS(this.H, null != (w = null == (v = g.stop_word) ? void 0 : v.split(";")) ? w : null);
        this.I = this.J.zj ? VQ(a, b.contentWindow, c, e, this.J.Ef) : null;
        this.o = {
            wi: !1
        };
        this.j = {};
        this.ra = {
            tag: 0
        };
        this.l = {
            Do: !0,
            Rj: !1,
            Je: !1,
            qg: !0
        };
        rS(this);
        sS(this);
        k.size && (b = new _.xh, b.promise.then(function(C) {
            r.l.Zd || r.M || tS(r, C)
        }), this.bb = new AR(a, k, b), _.S(this, this.bb));
        var x;
        if (null == (x = h.bi) ? 0 : x.length)
            if (k = _.Xf(a)) {
                var B = new fS(a, k, e, this.wf, 17, h.bi);
                _.S(this, B);
                this.Qd = function(C) {
                    B.g(2, C - _.Zf(a))
                }
            }
    };
    _.T(uS, qS);
    var rS = function(a) {
            a.I && (RR(a.I).then(function() {
                WQ(a.C);
                a.ia()
            }), SR(a.I).then(function() {
                return void vS(a)
            }), TR(a.I).then(function() {
                return void a.K()
            }))
        },
        pS = function(a, b, c) {
            b["i-blur"] = function() {
                a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 27
                }));
                a.l.Je = !0;
                a.l.Yg && (a.l.qg = !0)
            };
            b["i-no"] = function(g) {
                a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 26
                }));
                a.ra = {
                    tag: 1,
                    Ho: g.i_tslv ? g.i_tslv : void 0
                }
            };
            if (c.heavyAdInterventionResponse) {
                var d = HQ(c.heavyAdInterventionResponse);
                if (d) {
                    var e = $R(),
                        f = e.Bm;
                    b["i-hai-aux"] = e.Cm;
                    f.then(function(g) {
                        _.S(a, g);
                        g.promise.then(function() {
                            return d()
                        })
                    })
                }
            }
            c.fullscreenApi || (b["i-adframe-load"] = function() {
                WQ(a.C);
                a.ia()
            }, b["i-dismiss"] = function() {
                vS(a)
            }, b.i_iif = function() {
                a.K()
            })
        };
    uS.prototype.ia = function() {
        this.o.Ji || (this.o.Ji = _.Wf())
    };
    var vS = function(a) {
        a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 33
        }));
        a.l.Je ? (wS(a) ? (a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 34
        })), a.D.history.back()) : (a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 35
        })), xS(a)), a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 36
        }))) : (_.t.setTimeout(function() {
            xS(a)
        }, 1E3), a.l.Ig ? (a.l.Yg && (a.l.qg = !1), yS(a, a.l.Ig)) : a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 37
        })))
    };
    uS.prototype.K = function() {
        this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 23
        }));
        this.o.wi = !0
    };
    var zS = function(a) {
            wS(a) || (a.D.location.hash = "google_vignette");
            a.l.Yg = a.la.Ca(526, function() {
                a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 62
                }));
                a.l.qg ? (wS(a) ? (a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 64
                })), yS(a, a.j.Wa.href)) : xS(a), a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 65
                }))) : a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 63
                }))
            });
            _.t.setTimeout(_.Uw(_.pb, a.D, "hashchange", a.l.Yg), 0)
        },
        AS = function(a, b) {
            a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 10
            }));
            var c = _.Wf(),
                d = _.Cj(a.D).wasReactiveAdVisible[9];
            if (b) {
                var e = a.H;
                if (b && e.g) {
                    var f = [];
                    DR(b, f, !0, !0);
                    b = f.join("");
                    b = b.replace(ER, " ").replace(FR, "");
                    b = b.replace(GR, "");
                    b = b.replace(HR, " ");
                    " " != b && (b = b.replace(IR, ""));
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
            b = a.J.il || LQ(a.D);
            f = a.requestedSize.width < a.requestedSize.height === _.Fi(a.D);
            if (864E5 <= c - a.nb) return a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
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
            if (!c) return a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 12
            })), !1;
            if (a.o.wi) return a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 13
            })), !1;
            if (wS(a)) return a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 14
            })), !1;
            if (!a.o.Ji) return a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 15
            })), !1;
            if (!a.ua && d) return a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 16
            })), !1;
            a.ua && a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 17
            }));
            d && a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 18
            }));
            if (e.length) return a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 19
            })), !1;
            if (!b) return a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 20
            })), !1;
            if (!f) return a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 21
            })), !1;
            a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 22
            }));
            return !0
        },
        CS = function(a, b) {
            a.l.rd = BS(a, b, "prerender");
            a.l.qd = BS(a, b, "prefetch");
            a.D.document.body.appendChild(a.l.rd);
            a.D.document.body.appendChild(a.l.qd)
        },
        BS = function(a, b, c) {
            a = _.$f("LINK", a.D.document);
            a.setAttribute("rel", c);
            a.setAttribute("href", b);
            return a
        },
        DS = function(a, b) {
            for (b = b.target; b;) {
                if ("nodeName" in b && "A" === b.nodeName) {
                    if (lS(a.H, b, b.ownerDocument !== a.D.document)) return b;
                    break
                }
                b = "parentElement" in b ? b.parentElement : null
            }
            return null
        };
    uS.prototype.A = function() {
        this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 24
        }));
        qS.prototype.A.call(this);
        wS(this) && yS(this, this.j.Wa.href);
        this.j.Fb && (_.ag(this.D.document, "click", this.j.Fb), this.j.Fb = void 0);
        this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 25
        }))
    };
    var xS = function(a) {
            a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 38
            }));
            a.l.Zd ? (a.l.Rj = !0, a.j.Fb && (_.ag(a.D.document, "click", a.j.Fb), a.j.Fb = void 0), a.l.rd && a.l.rd.parentNode && (a.l.rd.parentNode.removeChild(a.l.rd), a.l.rd = void 0), a.l.qd && a.l.qd.parentNode && (a.l.qd.parentNode.removeChild(a.l.qd), a.l.qd = void 0), ES(a.C, !1), a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 40
            }))) : a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 39
            }))
        },
        sS = function(a) {
            a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 41
            }));
            if (a.j.Fb) a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 42
            }));
            else {
                a.j.Fb = a.la.Ca(527, function(e) {
                    FS(a, e)
                });
                if (null !== a.j.Fb) {
                    var b = a.j.Fb;
                    _.pb(a.D.document, "click", function(e) {
                        b(e)
                    }, bR)
                }
                for (var c = a.D.frames, d = 0; d < c.length; d++) try {
                    _.pb(c[d].document, "click", a.j.Fb, bR)
                } catch (e) {}
                a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 43
                }))
            }
        },
        yS = function(a, b) {
            a = a.D.location;
            b = _.Sa(b);
            b = _.$a(b);
            void 0 !== b && a.replace(b)
        },
        tS = function(a, b) {
            a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 28
            }));
            if (AS(a)) {
                var c = 1 === b;
                if (a.J.Ek) {
                    var d;
                    (d = a.l).Je || (d.Je = !c)
                }
                if (a.jb()) {
                    a.l.Zd = Date.now();
                    _.Cj(a.D).wasReactiveAdVisible[8] = !0;
                    c && a.j.Wa && (a.l.Ig = a.j.Wa.href);
                    GS(a);
                    a.j.Wa && CS(a, a.j.Wa.href);
                    zS(a);
                    _.pb(a.D, "pagehide", a.la.Ca(528, function() {
                        xS(a)
                    }));
                    if (c) {
                        var e;
                        null == (e = a.Qd) || e.call(a, a.l.Zd)
                    }
                    ES(a.C, !0);
                    a.J.xi && a.V.log(578856259, QQ, _.z(Object, "assign").call(Object, {}, a.g, {
                        Qb: a.J.xi,
                        Mm: KR(b),
                        wf: a.wf
                    }));
                    var f;
                    null == (f = a.bb) || f.za();
                    a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                        U: 32
                    }))
                } else a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 30
                })), c && a.j.Wa && (a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 31
                })), yS(a, a.j.Wa.href))
            } else a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 29
            }))
        };
    uS.prototype.uc = function(a) {
        this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 54
        }));
        this.l.Zd ? this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 56
        })) : this.M ? this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 57
        })) : this.j.Wa ? a.preventDefaultTriggered ? (this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 59
        })), this.j.Wa = void 0) : lS(this.H, this.j.Wa, this.j.Wa.ownerDocument !== this.D.document) ? AS(this) ? (tS(this, 1), this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 61
        }))) : (this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 60
        })), yS(this, this.j.Wa.href)) : (this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 55
        })), yS(this, this.j.Wa.href)) : this.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 58
        }))
    };
    uS.prototype.jb = function() {
        return !0
    };
    var FS = function(a, b) {
            a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 44
            }));
            if (b)
                if (b.defaultPrevented) a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 46
                }));
                else if (a.l.Zd) a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 50
            }));
            else if (a.l.Ig) a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 51
            }));
            else if (a.M) a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 47
            }));
            else if (a.j.Wa) a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 52
            }));
            else {
                var c = DS(a, b);
                c ? AS(a, c) ? (a.j.Wa = c, kR(b), b.preventDefault = function() {
                    return b && (b.preventDefaultTriggered = !0)
                }, _.t.setTimeout((0, _.Tw)(a.uc, a, b), 0), a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 53
                }))) : a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 49
                })) : a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 48
                }))
            } else a.V.log(578856259, _.kj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 45
            }))
        },
        wS = function(a) {
            return -1 !== a.D.location.hash.indexOf("google_vignette")
        },
        GS = function(a) {
            if (!a.Ib)
                if (a.I) _.t.IntersectionObserver || a.I.Sh.postMessage(JSON.stringify({
                    eventType: "visible",
                    googMsgType: "fullscreen"
                }), "*");
                else {
                    var b = {};
                    b = (b.msg_type = "i-view", b);
                    var c;
                    (null == (c = a.ga) ? void 0 : c.contentWindow).postMessage(JSON.stringify(b), "*")
                }
        };
    var IS = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.g = a;
        this.l = b;
        this.j = c;
        _.pb(this.g, this.l, this.j, bR);
        _.kp(this, function() {
            return void HS(d)
        })
    };
    _.T(IS, _.V);
    var HS = function(a) {
            a.g && _.ag(a.g, a.l, a.j, bR)
        },
        JS = function(a) {
            this.l = a;
            this.reset()
        };
    JS.prototype.add = function(a) {
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
    JS.prototype.reset = function() {
        this.g = [];
        this.A = 0
    };
    var LS = function(a, b, c, d) {
        _.V.call(this);
        var e = this;
        this.D = a;
        this.target = b;
        this.handle = c || b;
        this.bb = d || 100;
        this.o = this.J = this.ga = !1;
        this.I = this.g = this.l = this.j = this.ia = this.H = this.P = this.K = null;
        this.ob = new IS(this.handle, "mousedown", function(f) {
            0 == f.button && KS(e, f)
        });
        _.S(this, this.ob);
        this.Ib = new IS(this.handle, "touchstart", function(f) {
            return KS(e, f)
        });
        _.S(this, this.Ib);
        this.nb = new IS(this.handle, "click", function(f) {
            e.ga ? (e.onClick(), e.ga = !1) : f.stopPropagation()
        });
        _.S(this, this.nb)
    };
    _.T(LS, _.V);
    var MS = function(a) {
        a = a.touches && a.touches[0] || a;
        return new _.Im(a.clientX, a.clientY)
    };
    LS.prototype.ha = function() {
        if (this.j && this.l && this.g) {
            var a = this.j,
                b = cR(this.g, this.l);
            var c = new _.Im(a.x + b.x, a.y + b.y);
            a = this.target;
            c instanceof _.Im ? (b = c.x, c = c.y) : (b = c, c = void 0);
            a.style.left = _.BB(b, !1);
            a.style.top = _.BB(c, !1)
        }
    };
    LS.prototype.ka = function() {};
    LS.prototype.onClick = function() {};
    LS.prototype.W = function() {
        var a = this.target,
            b = _.KA(a);
        var c = lR(a);
        b = lR(b);
        c = new _.Im(c.x - b.x, c.y - b.y);
        a = oR(a, "margin");
        return cR(c, new _.Im(a.left, a.top))
    };
    var KS = function(a, b) {
        a.J && NS(a);
        a.J = !0;
        a.j = a.W();
        a.l = MS(b);
        a.g = a.l;
        a.I = new JS(a.bb);
        a.I.add(a.l);
        a.K = new IS(a.D, "mousemove", (0, _.Tw)(a.xa, a));
        _.S(a, a.K);
        a.P = new IS(a.D, "touchmove", (0, _.Tw)(a.xa, a));
        _.S(a, a.P);
        a.H = new IS(a.D, "mouseup", (0, _.Tw)(a.Ma, a));
        _.S(a, a.H);
        a.ia = new IS(a.D, "touchend", (0, _.Tw)(a.Ma, a));
        _.S(a, a.ia)
    };
    LS.prototype.xa = function(a) {
        if (this.J)
            if (a.preventDefault(), this.g = MS(a), this.I.add(this.g), this.o) this.ha();
            else {
                var b = this.l,
                    c = this.g;
                a = b.x - c.x;
                b = b.y - c.y;
                10 <= Math.sqrt(a * a + b * b) && (this.ha(), this.o = !0)
            }
    };
    LS.prototype.Ma = function(a) {
        this.o ? (a.preventDefault(), this.g = MS(a), this.ka()) : this.ga = !0;
        NS(this)
    };
    var NS = function(a) {
        a.J = !1;
        a.o = !1;
        a.j = null;
        a.l = null;
        a.g = null;
        a.I = null;
        a.K && HS(a.K);
        a.P && HS(a.P);
        a.H && HS(a.H);
        a.ia && HS(a.ia)
    };
    var RS = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        _.V.call(this);
        var p = this;
        this.config = a;
        this.pa = b;
        this.H = c;
        this.J = d;
        this.Ma = f || function() {};
        this.ra = g || function() {};
        this.la = h;
        this.Ba = k;
        this.xa = l;
        this.ga = m;
        this.j = (this.o = n) ? 2 : 1;
        _.kp(this, function() {
            return OS(p, !0)
        });
        this.C = _.$f("INS", b.document);
        _.kp(this, function() {
            return p.C = null
        });
        this.I = null;
        HTMLElement.prototype.attachShadow && !this.la.Eb(1013, function() {
            p.I = _.$f("DIV", b.document);
            p.I.className = "grippy-host";
            p.I.attachShadow({
                mode: "closed"
            }).appendChild(p.C);
            _.kp(p, function() {
                return p.I = null
            });
            return !0
        }) && (this.I = null);
        this.K = this.D = !1;
        this.ia = 0;
        this.g = e;
        this.ha = !1;
        this.l = this.P = null;
        this.sa = b.innerHeight;
        this.ka = "true" === this.config.scroll_detached;
        this.W = "true" === this.config.dismissable;
        this.ob = "true" === this.config.draggable || "top" != this.g;
        this.jb = this.config.expId || "";
        this.bb = this.config.qemId || "";
        a = parseInt(this.config.z_index_override, 10);
        this.ua = isNaN(a) ? null : a;
        this.nb = new _.bI(b);
        !this.W && _.t.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(function() {
            var r = p.pa.innerHeight;
            if (2 > Math.abs(r - 460) || 2 > Math.abs(r - 529)) r < p.sa && 2 > Math.abs(_.Oi(p.pa) - p.ia - 68) && (p.ha = !0, 0 === p.j && PS(p)), p.sa = r
        }, 300);
        QS(this, this.C)
    };
    _.T(RS, _.V);
    var SS = function(a, b) {
            if ("top" == a.g) {
                var c;
                _.qp(null != (c = a.I) ? c : a.C, {
                    top: _.JI(b)
                })
            }
        },
        QS = function(a, b) {
            NQ(b);
            _.qp(b, {
                "background-color": "#FAFAFA",
                display: "block",
                position: "relative",
                "z-index": 1,
                height: _.JI(5),
                "box-shadow": "top" == a.g ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
            });
            if ("top" == a.g) {
                var c, d, e = {
                        position: "absolute",
                        top: _.JI(null != (d = null == (c = a.o) ? void 0 : c.maxHeight) ? d : a.J.height),
                        width: "100%"
                    },
                    f;
                _.qp(null != (f = a.I) ? f : b, e)
            }
            var g = _.$f("SPAN", a.pa.document);
            g.appendChild(TS(a));
            var h = function(k) {
                k.target === g && (k.preventDefault && k.preventDefault(), k.stopImmediatePropagation && k.stopImmediatePropagation(), k.stopPropagation && k.stopPropagation())
            };
            _.pb(g, "click", h);
            _.kp(a, function() {
                return _.ag(g, "click", h)
            });
            US(a, g);
            b.className = "ee";
            b.appendChild(g)
        },
        US = function(a, b) {
            var c = {};
            a = (c.display = "block", c.width = "80px", c.height = "45px", c[a.g] = "0", c.left = "0%", c.marginLeft = "0px", c["pointer-events"] = "none", c);
            c = b.getElementsByTagName("svg")[0];
            _.qp(b, a);
            MQ(c)
        },
        VS = function(a) {
            var b;
            return null != (b = a.I) ? b : a.C
        },
        TS = function(a) {
            switch (a.g) {
                case "top":
                    var b = "dropShadowBottom";
                    var c = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                    var d = "0";
                    var e = "up";
                    var f = XQ;
                    break;
                case "bottom":
                    b = "dropShadowTop", c = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", d = "25", e = "down", f = YQ
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
        WS = function(a, b) {
            for (var c = a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0], d; d = c.firstChild;) c.removeChild(d);
            switch (a.g) {
                case "top":
                    (b ? YQ : XQ)(c);
                    break;
                case "bottom":
                    (b ? XQ : YQ)(c)
            }
        },
        XS = function(a, b, c, d) {
            b = {
                i: b,
                dc: 0 === a.j ? "1" : "0",
                fdc: c ? "1" : "0",
                ds: a.W ? "1" : "0",
                expId: a.jb,
                sc: a.ka ? "1" : "0",
                off: d,
                vw: _.Gi(a.pa),
                req: a.H.src,
                tp: a.g,
                h: a.J.height,
                w: a.J.width,
                qemId: a.bb
            };
            _.Zi(a.Ba, "flgr", b, !0, 1)
        };
    RS.prototype.onClick = function(a) {
        a.preventDefault();
        this.D || (this.ha = !0, PS(this), XS(this, "c", 0 !== this.j, 0))
    };
    var PS = function(a, b) {
            b = void 0 === b ? a.W : b;
            switch (a.j) {
                case 1:
                    a.show();
                    break;
                case 2:
                    YS(a);
                    break;
                case 0:
                    a.o ? YS(a) : a.show();
                    break;
                case 3:
                    OS(a, b);
                    break;
                case 4:
                    a.show()
            }
        },
        ZS = function(a) {
            var b = a.o.maxHeight;
            4 !== a.j && (a.l.style[a.g] = "-" + (b - (parseInt(a.l.style.height, 10) + parseInt(a.l.style[a.g], 10))) + "px");
            a.l.style.height = b + "px";
            a.H.style["max-height"] = "none";
            a.H.height = "100%";
            SS(a, b);
            null != (a = a.P) && (a.C = b)
        },
        aT = function(a, b) {
            "bottom" == a.g && qR(a.pa) && a.la.Eb(404, function() {
                return $S(a, "0px", b, "ease-out")
            })
        };
    RS.prototype.show = function() {
        var a = this;
        if (!this.D) {
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
                        SS(a, g);
                        var h;
                        null != (h = a.P) && (h.C = g)
                    }
                    a.D = !1;
                    a.K = !1;
                    bT(a);
                    a.l.setAttribute("data-anchor-status", "displayed");
                    a.l.setAttribute("data-anchor-shown", !0);
                    WS(a, !1)
                };
                this.D = !0;
                if (c && !b) {
                    var e = -c / .1;
                    aT(this, e);
                    WS(this, !1);
                    c = new QR(this.l, c, 0, e, this.g, this.la, d, PR);
                    this.ga();
                    NR(c)
                } else if (b) {
                    var f = this.o.maxHeight;
                    e = this.J.height - f;
                    f = (f + c > this.J.height ? -1 : 1) * (e - c) / .1;
                    aT(this, f);
                    c === e ? d() : (c = new QR(this.l, c, e, f, this.g, this.la, d, PR), this.ga(), NR(c))
                }
            } else this.K = !1
        }
    };
    var YS = function(a) {
            if (!a.D) {
                ZS(a);
                var b = parseInt(a.l.style[a.g], 10),
                    c = function() {
                        a.D = !1;
                        a.j = 4;
                        a.K = !1;
                        bT(a);
                        a.l.setAttribute("data-anchor-status", "displayed");
                        a.l.setAttribute("data-anchor-shown", !0);
                        WS(a, !1)
                    };
                if (b) {
                    a.D = !0;
                    var d = -b / .1;
                    aT(a, d);
                    WS(a, !1);
                    b = new QR(a.l, b, 0, d, a.g, a.la, c, PR);
                    a.ga();
                    NR(b)
                } else c()
            }
        },
        OS = function(a, b) {
            if (!a.D && a.l) {
                var c = parseInt(a.l.style[a.g], 10),
                    d = -(4 === a.j ? a.o.maxHeight : a.J.height) - (b ? 30 : 0),
                    e = (c - d) / .1;
                "bottom" == a.g && qR(a.pa) && a.la.Eb(405, function() {
                    return $S(a, "21px", e, "ease-in")
                });
                b || WS(a, !0);
                c === d ? (b || (a.j = 0), a.K = b) : (a.D = !0, c = new QR(a.l, c, d, e, a.g, a.la, function() {
                    a.D = !1;
                    b || (a.j = 0);
                    (a.K = b) || WS(a, !0);
                    b && a.Ma();
                    a.l.setAttribute("data-anchor-status", "dismissed")
                }, OR), a.xa(), NR(c))
            }
        },
        eT = function(a, b) {
            if ("bottom" !== a.g && "top" !== a.g) throw Error("unsupported reactive type");
            var c = function(k) {
                    return a.onClick(k)
                },
                d = a.C;
            _.pb(d, "click", c);
            _.kp(a, function() {
                return _.ag(d, "click", c)
            });
            a.I && (_.pb(a.I, "click", c), _.kp(a, function() {
                return a.I && _.ag(a.I, "click", c)
            }));
            _.uB(b, {
                opacity: 1
            });
            var e = a.pa.document;
            if (e) {
                a.l = b;
                var f, g, h = null != (g = null == (f = a.o) ? void 0 : f.maxHeight) ? g : a.J.height;
                a.ob && (a.P = new("top" == a.g ? cT : dT)(a, e, h, b, a.C), _.S(a, a.P));
                e = {
                    position: "fixed",
                    left: _.JI(0)
                };
                e[a.g] = _.JI(-h - 30);
                _.uB(b, e);
                _.qp(b, {
                    overflow: "visible",
                    background: "#FAFAFA"
                });
                _.fI(a.nb, function(k) {
                    var l = null == a.ua ? 2147483647 : a.ua;
                    _.uB(b, {
                        zIndex: null == k ? l : Math.min(k, l)
                    })
                });
                PS(a)
            }
        },
        $S = function(a, b, c, d) {
            _.uB(a.H, {
                transition: c / 1E3 + "s",
                "transition-timing-function": d,
                "margin-top": b
            })
        },
        bT = function(a) {
            a.ra();
            a.ra = function() {}
        },
        fT = function(a, b, c, d, e) {
            LS.call(this, b, d, e);
            this.jb = a;
            this.C = c
        };
    _.T(fT, LS);
    fT.prototype.ka = function() {
        var a = this.jb;
        if (!a.D) {
            var b = parseInt(a.l.style[a.g], 10),
                c = b + parseInt(a.l.style.height, 10),
                d = a.J.height / 2;
            c >= (a.o ? a.o.maxHeight / 2 : _.z(Number, "MAX_SAFE_INTEGER")) ? (YS(a), XS(a, "d", !1, b)) : c >= d ? (a.show(), XS(a, "d", !1, b)) : (OS(a, a.W), XS(a, "d", !0, b))
        }
    };
    fT.prototype.ha = function() {
        if (null !== this.j && null !== this.l && null !== this.g) {
            var a = this.ua(this.j.y, cR(this.g, this.l).y);
            0 < a && (a = 0);
            a < -this.C && (a = -this.C);
            var b = {};
            b[this.ra()] = _.JI(a);
            _.uB(this.target, b)
        }
    };
    var cT = function(a, b, c, d, e) {
        fT.call(this, a, b, c, d, e)
    };
    _.T(cT, fT);
    cT.prototype.W = function() {
        return new _.Im(0, parseInt(this.target.style.top, 10))
    };
    cT.prototype.ua = function(a, b) {
        return b - a
    };
    cT.prototype.ra = function() {
        return "top"
    };
    var dT = function(a, b, c, d, e) {
        fT.call(this, a, b, c, d, e)
    };
    _.T(dT, fT);
    dT.prototype.W = function() {
        return new _.Im(0, parseInt(this.target.style.bottom, 10))
    };
    dT.prototype.ua = function(a, b) {
        return a - b
    };
    dT.prototype.ra = function() {
        return "bottom"
    };
    var mT = function(a, b, c, d, e, f, g, h) {
        g = void 0 === g ? !1 : g;
        h = void 0 === h ? null : h;
        _.GQ.call(this, a, b, f);
        var k = this;
        this.la = d;
        this.Ba = e;
        this.C = this.uc = this.Ib = 0;
        this.nb = this.Bj = !1;
        this.D = null;
        this.W = this.ua = !1;
        this.K = null;
        this.ra = oR(b.document.body, "padding");
        this.o = oR(b.document.body, "padding");
        this.ia = 0;
        this.Ni = this.H = !1;
        this.ka = !0;
        this.I = c;
        this.J = gT(this);
        this.ga = null;
        this.Sd = this.Td = this.xa = this.jb = this.bb = this.Ki = this.Cj = this.Fj = !1;
        this.Lj = _.EA(b || window).height / 2;
        this.Hj = _.EA(b || window).height;
        this.Gi = dR(b);
        this.Fi = this.ha = this.xc = !1;
        this.Ei = g;
        this.an = h;
        hT(this);
        this.Pi = this.la.Ca(266, function() {
            iT(k)
        });
        this.Ti = this.la.Ca(267, function() {
            iT(k)
        });
        this.Zi = this.la.Ca(268, function() {
            if (k.H && k.l && k.D) {
                var l = k.D;
                l.ia = _.Oi(l.pa)
            }
            l = _.Oi(k.g);
            var m = l - k.Ib;
            jT(k, m);
            k.xa && (0 < m && (k.C += m), k.xc = k.Gi - l <= k.Hj, k.Ib = l);
            iT(k)
        });
        this.aj = this.la.Ca(269, function() {
            kT(k)
        });
        this.hj = this.la.Ca(270, function(l) {
            lT(k, l)
        });
        this.rj = this.la.Ca(271, function(l) {
            if (l && l.touches) {
                k.K = "touchmove";
                k.ia = l.touches.length;
                k.W = !0;
                iT(k);
                if (!k.Bj && l.touches && 0 != l.touches.length && l.touches[0]) {
                    l = l.touches[0].pageY;
                    var m = l - k.uc;
                    k.uc = l;
                    l = m
                } else l = 0;
                0 < l && (k.C += l);
                jT(k, l)
            }
        });
        this.wj = this.la.Ca(272, function(l) {
            l && l.touches && l.touches[0] && (k.K = "touchstart", k.ia = l.touches.length, k.W = !1, iT(k), k.uc = l.touches[0].pageY, l = (l = l.target) && "top" == k.I && k.ua && k.D && VS(k.D) && 1 === l.nodeType ? _.LA(VS(k.D), l) : !1, k.Bj = l)
        });
        this.Qd = this.la.Ca(273, function() {
            k.bb || (k.bb = !0, _.ag(k.j, "load", k.Qd), k.jb && !k.Ni || iT(k))
        });
        _.pb(a, "load", this.Qd);
        _.kp(this, function() {
            return _.ag(a, "load", k.Qd)
        })
    };
    _.T(mT, _.GQ);
    var oT = function(a) {
            var b = a.g;
            _.pb(b, "orientationchange", a.Pi);
            _.pb(b, "resize", a.Ti);
            _.pb(b, "scroll", a.Zi);
            _.pb(b, "touchcancel", a.aj);
            _.pb(b, "touchend", a.hj);
            _.pb(b, "touchmove", a.rj);
            _.pb(b, "touchstart", a.wj);
            _.kp(a, function() {
                return nT(a)
            })
        },
        nT = function(a) {
            var b = a.g;
            _.ag(b, "orientationchange", a.Pi);
            _.ag(b, "resize", a.Ti);
            _.ag(b, "scroll", a.Zi);
            _.ag(b, "touchcancel", a.aj);
            _.ag(b, "touchend", a.hj);
            _.ag(b, "touchmove", a.rj);
            _.ag(b, "touchstart", a.wj)
        };
    mT.prototype.Nj = function(a) {
        var b = this.l;
        if (b && !this.D) {
            for (var c in pT) !pT.hasOwnProperty(c) || c in a || (a[c] = pT[c]);
            this.Fj = "true" === a.use_manual_view || "top" === this.I || !!_.Cj(this.g).wasReactiveAdConfigReceived[2];
            this.Cj = "true" === a.use_important;
            if (c = a.af_l) this.jb = "true" === c;
            this.Fi = (this.xa = "true" === a.wait_for_scroll || "top" == this.I) && ("true" === a.tsec || "top" == this.I);
            qT(this, a);
            this.D = rT(this, a);
            this.ga = sT(this);
            this.xc = this.Hj >= this.Gi;
            a = this.l;
            c = this.D && VS(this.D);
            a && c && ("top" == this.I ? a.appendChild(c) : a.insertBefore(c, a.firstChild));
            oT(this);
            this.ua = !0;
            b.setAttribute("data-anchor-status", "ready-to-display")
        }
    };
    var sT = function(a) {
            var b = a.J.height + 5;
            "bottom" == a.I && qR(a.g) && (b += 20);
            return new _.Mm(a.J.width, b)
        },
        qT = function(a, b) {
            var c = parseInt(b.ht, 10),
                d = 0 < c ? c : null;
            b = parseInt(b.wd, 10);
            var e = 0 < b ? b : null;
            null != d && (a.J.height = d);
            null != e && (a.J.width = e);
            aR(a, function(f) {
                ZQ(f, e, d)
            }, !1, !0);
            ZQ(a.j, e, d)
        },
        rT = function(a, b) {
            b = new RS(b, a.g, a.j, a.J, a.I, function() {
                if (!a.nb) {
                    a.nb = !0;
                    nT(a);
                    var c = a.l;
                    _.JA(c);
                    tT(a, a.ra, !0, !0);
                    c && (c.style.display = "none")
                }
            }, function() {
                return void uT(a)
            }, a.la, a.Ba, function() {
                a.ha || (a.ha = !0, jT(a, null));
                _.TJ(a.L, a.slotId)
            }, function() {
                a.ha && (a.ha = !1, jT(a, null));
                a.Kj && _.UJ(a.L, a.slotId)
            }, a.an);
            _.S(a, b);
            return b
        },
        hT = function(a) {
            if (a.ka) {
                var b = a.l;
                b && (b.style.display = "none");
                tT(a, a.ra, !0, !0);
                a.ka = !1
            }
        };
    mT.prototype.Ma = function() {
        this.Ni = !0;
        if (!this.H && vT(this) && (this.bb || !this.jb)) {
            var a = this.l;
            a && (wT(this), aR(this, function(b) {
                NQ(b)
            }, !0), eT(this.D, a), xT(this), this.H = !0, (a = this.j.contentWindow) && pR(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    };
    var xT = function(a) {
            var b = a.l;
            if (b) {
                var c = a.D,
                    d = c.pa,
                    e = _.Oi(d);
                if (!(10 > Math.abs(e - c.ia))) {
                    var f = 10 > e;
                    d = e + 10 + _.Li(d) > _.Ni(d);
                    f = f || d;
                    c.ka || c.ha || c.D || (0 === c.j || f ? 0 === c.j && f && PS(c) : PS(c, !1));
                    c.ia = e
                }
                a.ka || (yT(a), c = oR(a.g.document.body, "padding"), "bottom" == a.I && (c.bottom += a.ga.height + 25), tT(a, c), b.style.display = "block", a.ka = !0)
            }
        },
        wT = function(a) {
            var b = a.l;
            if (b && a.j.parentElement) {
                mR(b, a.ga);
                var c = a.g.innerWidth;
                _.Ki(a.g).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
                zT(a)
            }
        },
        zT = function(a) {
            aR(a, function(c) {
                mR(c, a.J);
                c.style.width = "100%"
            }, !1, !0);
            a.j.style.display = "block";
            a.j.style.margin = "0 auto";
            if (a.Cj) {
                var b = a.l;
                eR(b, function(c) {
                    MQ(c, function(d) {
                        return c === b && /display|bottom/i.test(d) ? !1 : !0
                    });
                    if ("svg" === c.nodeName) return !1
                })
            }
        },
        yT = function(a) {
            if ("bottom" !== a.I && "top" !== a.I) throw Error("Unexpected position: " + a.I);
        },
        gT = function(a) {
            yT(a);
            var b = a.g.innerWidth;
            a = _.Km(_.CB, a.j).height || +a.j.height || 0;
            return new _.Mm(b, a)
        },
        kT = function(a) {
            a.K = "touchcancel";
            _.t.setTimeout(a.la.Ca(274, function() {
                "touchcancel" === a.K && (a.ia = 0, a.W = !1, iT(a))
            }), 1E3)
        },
        lT = function(a, b) {
            if (b && b.touches) {
                a.K = "touchend";
                var c = b.touches.length;
                2 > c ? _.t.setTimeout(a.la.Ca(256, function() {
                    "touchend" === a.K && (a.ia = c, a.W = !1, iT(a))
                }), 1E3) : (a.ia = c, iT(a));
                !a.H || a.Ei || LQ(a.g) || OS(a.D, !0)
            }
        },
        jT = function(a, b) {
            var c = a.ka ? AT(a, a.ha) : a.ra.top;
            if ("top" === a.I && a.g.document.body && a.ua && a.D && a.H && a.o.top !== c && 0 !== b) {
                var d = _.oB(a.o);
                null === b ? (d.top = c, tT(a, d)) : (0 < b && a.o.top > c && (d.top = Math.max(c, a.o.top - b), tT(a, d, !1)), 0 > b && a.o.top < c && (d.top = Math.min(c, a.o.top - b), tT(a, d, !1)))
            }
        },
        tT = function(a, b, c, d) {
            var e = a.o.top - b.top,
                f = _.Oi(a.g);
            f < e && (void 0 === d || !d) || (d = a.g.document.body, d.style.paddingTop = _.JI(b.top), d.style.paddingRight = _.JI(b.right), d.style.paddingBottom = _.JI(b.bottom), d.style.paddingLeft = _.JI(b.left), a.o = b, (void 0 === c || c) && a.g.scrollTo(0, f - e))
        },
        iT = function(a) {
            !a.ua || a.nb || 2 <= a.ia && a.W || !vT(a) ? hT(a) : (a.Ma(), xT(a))
        };
    mT.prototype.ob = function() {
        return _.Fi(this.g)
    };
    mT.prototype.Jj = function() {
        this.Td = !0;
        var a;
        null == (a = this.l) || a.removeAttribute("data-anchor-status")
    };
    mT.prototype.Oj = function() {
        this.Sd = !0;
        var a = this.l;
        this.Td && this.Sd && (null == a || a.setAttribute("data-anchor-status", "ready-to-display"))
    };
    var vT = function(a) {
            if (!a.ob() || a.Td && !a.Sd) return !1;
            var b = a.g;
            if (!a.H && a.xa) switch (a.Fi && (a.C += Math.max(_.Oi(a.g) - a.Ib, 0)), a.I) {
                case "bottom":
                    return a.C >= a.Lj || a.xc;
                case "top":
                    return a.C > AT(a)
            }
            return a.Ei || LQ(b)
        },
        AT = function(a, b) {
            return (void 0 === b ? 0 : b) ? a.ra.top + 30 : a.ra.top + 30 + a.ga.height - 5
        },
        uT = function(a) {
            a.Fj && !a.Ki && (a.Ki = !0, a.la.Eb(257, function() {
                var b = {
                        msg_type: "manual-send-view"
                    },
                    c = a.j.contentWindow;
                c && c.postMessage(a.g.JSON.stringify(b), "*")
            }))
        };
    mT.prototype.Mj = function(a, b) {
        this.j = a;
        if (b && (this.J.height !== b.height || this.J.width !== b.width)) {
            a = b.height - this.J.height;
            var c = {};
            qT(this, (c.ht = b.height, c.wd = b.width, c));
            this.ga = sT(this);
            wT(this);
            jT(this, a);
            var d;
            null == (d = this.D) || SS(d, b.height)
        }
        zT(this)
    };
    var pT = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    var BT = function() {
            this.g = null
        },
        CT = function(a, b, c) {
            a.g = _.pI(b, c);
            if (b = !!a.g) a = a.g, b = !!a && 1 > a.length;
            return b
        };
    var DT = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        _.GQ.call(this, a, b, c);
        this.D = null;
        this.I = b.document;
        this.H = d;
        this.J = _.dI(new _.bI(b), 2147483646);
        this.C = e;
        this.o = b
    };
    _.T(DT, _.GQ);
    var GT = function(a) {
            ES(a, !1);
            var b = a.l;
            if (b) {
                var c = $Q(a.o, a.C);
                aR(a, function(d) {
                    _.qp(d, c);
                    NQ(d)
                }, !0);
                a.j.setAttribute("width", "");
                a.j.setAttribute("height", "");
                _.uB(a.j, c);
                _.uB(a.j, ET);
                _.uB(b, FT);
                _.uB(b, {
                    background: "transparent"
                });
                _.qp(b, {
                    display: "none",
                    position: "fixed"
                });
                NQ(b);
                NQ(a.j);
                1 >= _.Mi(a.o) || (_.uB(b, {
                    overflow: "scroll",
                    "max-width": "100vw"
                }), MQ(b))
            }
        },
        ES = function(a, b) {
            var c = a.l;
            c && (b ? (_.hI(a.J), _.qp(c, {
                display: "block"
            }), a.I.body && !a.D && (a.D = _.oI(a.I, a.g, a.H)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.I.body.setAttribute("aria-hidden", "true")) : (_.iI(a.J), _.qp(c, {
                display: "none"
            }), a.D && (a.D(), a.D = null), a.I.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
        },
        FT = {
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
        ET = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var HT = function(a, b, c, d, e, f, g, h) {
        mT.call(this, c, d, 2 === b ? "top" : "bottom", new _.BJ(a), new _.qH, e, _.E(_.qq), h ? {
            maxHeight: _.My(h, 1)
        } : null);
        this.L = f;
        this.slotId = g;
        this.Kj = !!_.zq(this.L, this.slotId);
        2 === b && _.TJ(this.L, this.slotId)
    };
    _.T(HT, mT);
    HT.prototype.ob = function() {
        return 0 === (0, _.Pp)() || mT.prototype.ob.call(this)
    };
    var IT = function(a, b, c) {
        DT.call(this, b, a, c, _.Mf(_.ND), _.E(_.lq));
        GT(this)
    };
    _.T(IT, DT);
    var JT = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        var r = [];
        _.E(_.JD) && 0 === (0, _.Pp)() && r.push(101);
        _.E(_.KD) && r.push(102);
        h = _.E(_.MD) ? JR(h) : new _.u.Set(_.E(_.TD) ? [2] : []);
        uS.call(this, b, c, e, new IT(b, c, d), new _.qH, f, g, {
            zj: _.E(_.LD),
            bi: r,
            Ek: !0,
            Ef: {
                Fm: 3,
                version: "m202403110101"
            },
            il: _.E(_.lq),
            fl: _.E(_.PD) ? m : null,
            xi: _.Mf(_.QD)
        }, h, a.V, a);
        this.ha = k;
        this.xc = l;
        this.ka = n;
        this.W = p;
        _.S(this, this.C)
    };
    _.T(JT, uS);
    JT.prototype.jb = function() {
        var a;
        if (!(a = this.ha)) {
            var b = _.Kf(BT),
                c = this.W;
            try {
                if (c && CT(b, c, this.ka)) {
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
    JT.prototype.xa = function() {
        return !0
    };
    JT.prototype.K = function() {
        uS.prototype.K.call(this);
        this.xc()
    };
    JT.prototype.ob = function() {
        return this.ha || CT(_.Kf(BT), this.W, this.ka)
    };
    var KT = {
        Sk: HT,
        kl: JT
    };
    _.tP(_m, _.LN).resolve(KT);
})