window.googletag && typeof googletag._gpt_js_load_2_ == 'function' && googletag._gpt_js_load_2_(function(_, _m) {
    var oQ = function(a) {
            var b = _.Af();
            if ("function" !== typeof a) throw b = b ? b() + "\n" : "", Error(b + String(a));
            return a
        },
        qQ = function(a) {
            if (!pQ.test(a)) return null;
            a = Number(a);
            return isNaN(a) ? null : a
        },
        rQ = function(a, b) {
            return a && a.source ? a.source === b || a.source.parent === b : !1
        },
        sQ = function(a) {
            a = _.Ii(a);
            return .05 > Math.abs(a - 1)
        },
        uQ = function(a) {
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
            _.Pw(_.z(Object, "keys").call(Object, b), function(c) {
                var d = a.style[_.rA(c)];
                ("undefined" !== typeof d ? d : a.style[_.nB(a, c)]) || _.oB(a, c, b[c])
            });
            tQ(a)
        },
        vQ = function(a) {
            var b;
            a = (null != (b = void 0 === a ? null : a) ? b : window).googletag;
            return (null == a ? 0 : a.apiReady) ? a : void 0
        },
        xQ = function(a, b, c, d) {
            return wQ(a, "fullscreen", d.Ca(952, function(e, f) {
                if (f.source === b) {
                    if (!("eventType" in e)) throw Error("bad message " + JSON.stringify(e));
                    delete e.googMsgType;
                    c(e)
                }
            }))
        },
        zQ = function(a, b, c, d, e) {
            a = new yQ(1, a, b, c, d, e);
            a.wa();
            return a
        },
        AQ = function(a) {
            var b;
            null == (b = a.l) || b.setAttribute("data-vignette-loaded", "true")
        },
        BQ = function(a) {
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
        CQ = function(a) {
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
        DQ = function(a, b, c) {
            null !== b && null !== qQ(a.getAttribute("width")) && a.setAttribute("width", String(b));
            null !== c && null !== qQ(a.getAttribute("height")) && a.setAttribute("height", String(c));
            null !== b && (a.style.width = _.xI(b));
            null !== c && (a.style.height = _.xI(c))
        },
        EQ = function(a, b) {
            a = _.Ni(a);
            b = b ? 100 * (1 > a ? 1 : a) : 100;
            return {
                width: b + "vw",
                height: b + "vh"
            }
        },
        FQ = function(a, b, c, d) {
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
        GQ = {
            capture: !0
        },
        HQ = function(a, b) {
            return new _.Im(a.x - b.x, a.y - b.y)
        },
        IQ = function(a) {
            var b = a.document,
                c = 0;
            if (b) {
                c = b.body;
                var d = b.documentElement;
                if (!d || !c) return 0;
                a = _.yA(a).height;
                if (_.xA(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
                else {
                    b = d.scrollHeight;
                    var e = d.offsetHeight;
                    d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                    c = b > a ? b > e ? b : e : b < e ? b : e
                }
            }
            return c
        },
        pQ = /^(-?[0-9.]{1,30})$/,
        JQ = function(a, b) {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !== b(c) && (c = _.qj(c.children || c.childNodes || [], function(d) {
                    return 1 === d.nodeType
                }), c.length && a.unshift.apply(a, _.si(c)))
            }
        },
        KQ = function(a) {
            var b = {};
            if (a) {
                var c = /\s*:\s*/;
                _.Pw((a || "").split(/\s*;\s*/), function(d) {
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
        LQ = function(a, b) {
            if ("length" in a.style) {
                a = a.style;
                for (var c = a.length, d = 0; d < c; d++) {
                    var e = a[d];
                    b(a[e], e, a)
                }
            } else a = KQ(a.style.cssText), _.Cn(a, b)
        },
        tQ = function(a, b) {
            b = void 0 === b ? function() {
                return !0
            } : b;
            var c = /!\s*important/i;
            LQ(a, function(d, e) {
                !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
            })
        },
        MQ = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        NQ = /.*domain\.test$/,
        OQ = /\.prod\.google\.com(:\d+)?$/,
        PQ = function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        QQ = function(a) {
            if (1 == a.nodeType) return _.uB(a);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new _.Im(a.clientX, a.clientY)
        },
        RQ = function(a, b) {
            if (b instanceof _.Mm) {
                var c = b.height;
                b = b.width
            } else throw Error("missing height argument");
            a.style.width = _.vB(b, !0);
            a.style.height = _.vB(c, !0)
        },
        SQ = function(a, b) {
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
        TQ = function(a, b) {
            if (_.Ox) {
                var c = SQ(a, b + "Left"),
                    d = SQ(a, b + "Right"),
                    e = SQ(a, b + "Top");
                a = SQ(a, b + "Bottom");
                return new _.hB(e, d, a, c)
            }
            c = _.qB(a, b + "Left");
            d = _.qB(a, b + "Right");
            e = _.qB(a, b + "Top");
            a = _.qB(a, b + "Bottom");
            return new _.hB(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        },
        wQ = function(a, b, c, d) {
            d = void 0 === d ? null : d;
            var e = function(g) {
                try {
                    var h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            _.ob(a, "message", e);
            var f = !1;
            return function() {
                var g = !1;
                f || (f = !0, g = _.Zf(a, "message", e));
                return g
            }
        },
        UQ = function(a, b, c, d, e) {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (var f = 0; f < a.length; ++f) 1 < e && UQ(a[f], b, c, d, --e)
        },
        VQ = function(a) {
            var b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
            return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
        },
        ZQ = function(a, b) {
            _.V.call(this);
            this.B = a;
            this.D = this.j = this.g = !1;
            if (_.Vf(a) && b.length)
                for (a = _.y(b), b = a.next(); !b.done; b = a.next()) switch (b.value) {
                    case 0:
                        WQ(this);
                        break;
                    case 1:
                        XQ(this);
                        break;
                    case 2:
                        YQ(this)
                } else this.za()
        };
    _.T(ZQ, _.V);
    ZQ.prototype.wa = function() {
        this.M || this.l(_.Vf(this.B))
    };
    var WQ = function(a) {
            var b = function(d) {
                    d.isTrusted && (a.j = !0, a.l(d.timeStamp))
                },
                c = function(d) {
                    d.isTrusted && (a.j = !1, a.l(d.timeStamp))
                };
            _.ob(a.B, "focus", b);
            _.ob(a.B, "blur", c);
            _.kp(a, function() {
                return void a.B.removeEventListener("focus", b)
            });
            _.kp(a, function() {
                return void a.B.removeEventListener("blur", c)
            });
            a.j = a.B.document.hasFocus()
        },
        XQ = function(a) {
            var b = function(c) {
                c.isTrusted && (a.g = 1 === _.Jr(a.B.document) ? !0 : !1, a.l(c.timeStamp))
            };
            _.ob(a.B.document, "visibilitychange", b);
            _.kp(a, function() {
                return void a.B.document.removeEventListener("visibilitychange", b)
            });
            a.g = 1 === _.Jr(a.B.document)
        },
        YQ = function(a) {
            var b = a.B.document.body.getBoundingClientRect().top + 10,
                c = function(d) {
                    d.isTrusted && (a.D = d.clientY < b ? !0 : !1, a.l(d.timeStamp))
                };
            _.ob(a.B.document.body, "mouseleave", c);
            _.ob(a.B.document.body, "mouseenter", c);
            _.kp(a, function() {
                return void a.B.document.body.removeEventListener("mouseleave", c)
            });
            _.kp(a, function() {
                return void a.B.document.body.removeEventListener("mouseenter", c)
            });
            a.D = !1
        },
        $Q = function() {
            ZQ.apply(this, arguments);
            this.o = new _.Jh;
            this.K = this.o.promise
        };
    _.T($Q, ZQ);
    var aR = function(a) {
        $Q.call(this, a, [0, 1, 2]);
        this.I = 0;
        this.wa()
    };
    _.T(aR, $Q);
    aR.prototype.l = function(a) {
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
    var cR = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.Hx(function() {
            bR(b)
        })
    };
    _.T(cR, _.V);
    cR.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var bR = function(a) {
            var b = !1,
                c = function(e) {
                    e.isTrusted && (b = !0)
                },
                d = function(e) {
                    var f = e.timeStamp;
                    if (e = e.isTrusted && !b) e = (e = a.B.document.referrer) && "function" === typeof URL ? (new URL(e)).origin === a.B.location.origin : !1;
                    if (e) {
                        f = {
                            ec: f
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
        dR = function(a) {
            $Q.call(this, a, [1]);
            this.wa()
        };
    _.T(dR, $Q);
    dR.prototype.l = function(a) {
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
    var eR = function(a, b, c) {
        _.V.call(this);
        var d = this;
        c.promise.then(function() {
            return void d.za()
        });
        b = _.y(b);
        for (var e = b.next(), f = {}; !e.done; f = {
                Pb: void 0
            }, e = b.next()) switch (f.Pb = e.value, f.Pb) {
            case 2:
                e = new dR(a);
                _.S(this, e);
                e.K.then(function(g) {
                    return function() {
                        return void c.resolve(g.Pb)
                    }
                }(f));
                break;
            case 3:
                if (0 !== (0, _.Pp)()) break;
                e = new aR(a);
                _.S(this, e);
                e.K.then(function(g) {
                    return function() {
                        return void c.resolve(g.Pb)
                    }
                }(f));
                break;
            case 4:
                e = new cR(a), _.S(this, e), e.listen(function(g) {
                    return function() {
                        return void c.resolve(g.Pb)
                    }
                }(f))
        }
    };
    _.T(eR, _.V);
    var fR = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        gR = {
            IMG: " ",
            BR: "\n"
        },
        hR = function(a, b, c, d) {
            if (!(a.nodeName in fR))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in gR) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(gR[a.nodeName]);
            else
                for (a = a.firstChild; a;) hR(a, b, c, d), a = a.nextSibling
        },
        iR = / \xAD /g,
        jR = /\xAD/g,
        kR = /\u200B/g,
        lR = / +/g,
        mR = /^\s*/,
        nR = function(a) {
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
        oR = function(a, b) {
            var c = this;
            this.l = a;
            this.g = !1;
            this.j = b;
            this.A = this.j.Ca(264, function(d) {
                c.g && (_.mQ || (d = Date.now()), c.l(d), _.mQ ? _.lQ.call(_.t, c.A) : _.t.setTimeout(c.A, 17))
            })
        };
    oR.prototype.start = function() {
        this.g || (this.g = !0, _.mQ ? _.lQ.call(_.t, this.A) : this.A(0))
    };
    var pR = function(a, b, c, d) {
        this.g = a;
        this.D = b;
        this.Da = c;
        this.progress = 0;
        this.A = null;
        this.C = !1;
        this.l = [];
        this.j = null;
        this.M = new oR((0, _.Mw)(this.H, this), d)
    };
    pR.prototype.H = function(a) {
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
    pR.prototype.I = function() {};
    pR.prototype.o = function() {};
    var qR = function(a) {
        a.C = !1;
        a.M.start()
    };
    pR.prototype.reset = function(a, b, c) {
        this.A = null;
        this.g = a;
        this.D = b;
        this.Da = c;
        this.progress = 0
    };
    var rR = function(a) {
            return a * a * a
        },
        sR = function(a) {
            a = 1 - a;
            return 1 - a * a * a
        },
        tR = function(a, b, c, d, e, f, g, h) {
            pR.call(this, [b], [c], d, f);
            this.J = a;
            this.ia = e;
            this.K = g ? g : null;
            this.j = h || null
        };
    _.T(tR, pR);
    tR.prototype.o = function() {
        var a = {};
        a[this.ia] = _.xI(this.l[0]);
        _.oB(this.J, a)
    };
    tR.prototype.I = function() {
        this.K && this.K()
    };
    var yQ = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.slotType = a;
        this.I = b;
        this.Rh = c;
        this.la = d;
        this.Ba = e;
        this.Df = f;
        this.g = 1;
        this.qem = null;
        this.D = new _.Jh;
        this.l = new _.Jh;
        this.j = new _.Jh
    };
    _.T(yQ, _.V);
    var uR = function(a) {
            return _.qb(function(b) {
                return b.return(a.D.promise)
            })
        },
        vR = function(a) {
            return _.qb(function(b) {
                return b.return(a.l.promise)
            })
        },
        wR = function(a) {
            return _.qb(function(b) {
                return b.return(a.j.promise)
            })
        };
    yQ.prototype.wa = function() {
        var a = this,
            b = xQ(this.I, this.Rh, function(c) {
                if ("adError" === c.eventType) a.j.resolve(), a.g = 4;
                else if ("adReady" === c.eventType && 1 === a.g) a.qem = c.qem, c.slotType !== a.slotType && (xR(a, {
                    cur_st: a.g,
                    evt: c.eventType,
                    adp_tp: c.slotType
                }), a.g = 4), a.D.resolve(), a.g = 2;
                else if ("adClosed" === c.eventType && 2 === a.g) a.l.resolve(c.result), a.g = 3;
                else if ("adClosed" !== c.eventType || 3 !== a.g) xR(a, {
                    cur_st: a.g,
                    evt: c.eventType
                }), a.g = 4
            }, this.la);
        _.kp(this, b)
    };
    var xR = function(a, b) {
        var c = .25;
        c = void 0 === c ? .01 : c;
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = c;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.Df.xm;
        b.version = a.Df.version;
        _.$i(a.Ba, "fullscreen_tag", b, !1, c)
    };
    var AR = function(a) {
            var b = yR(_.AA(_.uA(a))) || [];
            return !!_.tj(a, function(c) {
                if (!_.ja(c) || 1 != c.nodeType) return !1;
                var d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || 0 <= _.da(b, c) || _.Mg(_.MA(zR), function(e) {
                    return d.call(c, e)
                })
            }, !1, 20)
        },
        yR = function(a) {
            var b = vQ(a);
            return b ? _.qj(_.Qw(b.pubads().getSlots(), function(c) {
                return a.document.getElementById(c.getSlotElementId())
            }), function(c) {
                return null != c
            }) : null
        },
        zR = {
            Tm: "ins.adsbygoogle-ablated-ad-slot",
            Vm: "body ins.adsbygoogle",
            Um: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
            hn: ".google-auto-placed",
            jn: "ins.adsbygoogle[data-anchor-status]",
            kn: "iframe[id^=google_ads_iframe]",
            pn: "div[id^=div-gpt-ad]",
            In: "ins.adsbygoogle[data-ad-format=autorelaxed]",
            Jn: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
            on: "div.googlepublisherpluginad",
            Yn: "html > ins.adsbygoogle"
        };
    var BR = function(a) {
        _.V.call(this);
        var b = new _.Jh,
            c = b.resolve;
        this.promise = b.promise;
        a.onmessage = function() {
            return c()
        };
        _.kp(this, function() {
            a.close()
        })
    };
    _.T(BR, _.V);
    var CR = function() {
        var a = new _.Jh,
            b = a.resolve;
        return {
            um: function(c, d) {
                null != d && d.ports.length && b(new BR(d.ports[0]))
            },
            tm: a.promise
        }
    };
    var DR = ["mousemove", "mousedown", "scroll", "keydown"],
        FR = function(a) {
            _.V.call(this);
            var b = this;
            this.B = a;
            this.g = [];
            this.l = _.Hx(function() {
                ER(b)
            })
        };
    _.T(FR, _.V);
    FR.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var ER = function(a) {
        for (var b = null, c = null, d = function(l) {
                if (b && 3E4 < l.timeStamp - b)
                    for (var m = {
                            ec: l.timeStamp,
                            dl: l.timeStamp - b,
                            Mm: c
                        }, n = _.y(a.g), p = n.next(); !p.done; p = n.next()) {
                        p = p.value;
                        try {
                            p(m)
                        } catch (r) {}
                    }
                b = l.timeStamp
            }, e = _.y(DR), f = e.next(); !f.done; f = e.next()) a.B.addEventListener(f.value, d);
        var g = null,
            h, k;
        (null == (h = a.B.navigator) ? 0 : h.userActivation) && (null == (k = a.B.performance) ? 0 : k.now) && (g = a.B.setInterval(function() {
            a.B.navigator.userActivation.isActive && (c = a.B.performance.now())
        }, 1E3));
        _.kp(a, function() {
            for (var l = _.y(DR), m = l.next(); !m.done; m = l.next()) a.B.removeEventListener(m.value, d);
            g && a.B.clearInterval(g)
        })
    };
    var HR = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.Hx(function() {
            GR(b)
        })
    };
    _.T(HR, _.V);
    HR.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var GR = function(a) {
        var b = null,
            c = function(e) {
                e.isTrusted && (b = e.timeStamp)
            },
            d = function(e) {
                var f = e.timeStamp;
                if (e.isTrusted) {
                    e = _.z(Object, "assign").call(Object, {}, {
                        ec: f
                    }, b ? {
                        zm: f - b
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
    var IR = function(a, b, c, d, e, f) {
        _.V.call(this);
        var g = this;
        this.Ba = c;
        this.D = d;
        this.j = e;
        this.l = Math.floor(2147483647 * _.ph());
        this.g = function(h, k, l) {
            l = void 0 === l ? {} : l;
            h = _.z(Object, "assign").call(Object, {
                etc: g.l,
                e: h,
                t: Math.round(k),
                qqid: g.D,
                ptt: g.j
            }, l);
            _.$i(g.Ba, "eit", h, !0, 1)
        };
        this.g(1, b);
        b = _.y(f);
        d = b.next();
        for (c = {}; !d.done; c = {
                Dc: void 0,
                Ff: void 0
            }, d = b.next()) switch (c.Dc = d.value, c.Dc) {
            case 101:
                d = new aR(a);
                d.K.then(function(h) {
                    return function(k) {
                        return void g.g(h.Dc, k)
                    }
                }(c));
                _.S(this, d);
                break;
            case 102:
                c.Ff = new dR(a);
                c.Ff.K.then(function(h) {
                    return function(k) {
                        return void g.g(h.Dc, k, {
                            tbd: Math.round(h.Ff.C || -1)
                        })
                    }
                }(c));
                _.S(this, c.Ff);
                break;
            case 103:
                d = new HR(a);
                d.listen(function(h) {
                    return function(k) {
                        var l;
                        g.g(h.Dc, k.ec, {
                            tsb: null != (l = k.zm) ? l : -1
                        })
                    }
                }(c));
                _.S(this, d);
                break;
            case 104:
                d = new FR(a);
                d.listen(function(h) {
                    return function(k) {
                        var l;
                        g.g(h.Dc, k.ec, {
                            it: k.dl,
                            ualta: null != (l = k.Mm) ? l : -1
                        })
                    }
                }(c));
                _.S(this, d);
                break;
            case 105:
                d = new cR(a), d.listen(function(h) {
                    return function(k) {
                        g.g(h.Dc, k.ec)
                    }
                }(c)), _.S(this, d)
        }
    };
    _.T(IR, _.V);
    var KR = function(a) {
            this.g = null;
            this.l = a.match(_.JA)[3] || "";
            this.j = JR(a);
            this.A = !1
        },
        LR = function(a, b) {
            b ? a.g = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.g = null
        },
        OR = function(a, b, c) {
            if (_.Mg(["data-google-vignette", "data-google-interstitial"], function(f) {
                    return "false" === b.getAttribute(f) || b.closest && !!b.closest("[" + f + '="false"]')
                })) return !1;
            var d = b.href,
                e = d && (d.match(_.JA)[3] || null);
            if (!MR(a, b, d, e, c)) return !1;
            a.A = !!e && NR(a, e);
            return a.A || !c && !AR(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
        },
        MR = function(a, b, c, d, e) {
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
            return !d || NR(a, d) && JR(c) == a.j ? !1 : !0
        },
        NR = function(a, b) {
            return b.replace(PR, "") == a.l.replace(PR, "")
        },
        JR = function(a) {
            a = a.match(_.JA);
            var b = a[6];
            return (a[5] || "") + (b ? "?" + b : "") || "/"
        },
        PR = /^(www\.|m\.|mobile\.)*/i;
    var SR = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        _.V.call(this);
        var f = this;
        this.D = a;
        this.fa = b;
        this.la = c;
        this.Ba = d;
        this.Ma = {};
        this.Qd = this.la.Ca(168, function(g, h) {
            return void QR(f, g, h)
        });
        this.cf = this.la.Ca(169, function(g, h) {
            _.$i(f.Ba, "ras::xsf", {
                c: h.data.substring(0, 500),
                u: f.D.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        });
        this.P = [];
        RR(this, this.Ma, e);
        this.P.push(wQ(this.D, "sth", this.Qd, this.cf))
    };
    _.T(SR, _.V);
    var QR = function(a, b, c) {
        try {
            if (!a.xa(c.origin) || !rQ(c, a.fa.contentWindow)) return
        } catch (f) {
            return
        }
        var d = b.msg_type,
            e;
        "string" === typeof d && (e = a.Ma[d]) && a.la.Db(168, function() {
            e.call(a, b, c)
        })
    };
    SR.prototype.xa = function(a) {
        return _.YA[a] || MQ.test(a) || NQ.test(a) || OQ.test(a)
    };
    SR.prototype.A = function() {
        for (var a = _.y(this.P), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.P.length = 0;
        _.V.prototype.A.call(this)
    };
    var WR = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        var p = {};
        SR.call(this, a, b, c, e, (p.fullscreenApi = h.xj, p.heavyAdInterventionResponse = h.al, p));
        var r = this;
        this.o = d;
        this.requestedSize = f;
        this.H = h;
        this.V = l;
        this.g = m;
        this.ob = _.Uf();
        this.ua = "true" === g["i-fvs"];
        this.Rd = g.qid;
        this.C = null != n ? n : new KR(a.location.href);
        this.Hb = "true" === g.iobs && "IntersectionObserver" in this.D;
        var v, w;
        LR(this.C, null != (w = null == (v = g.stop_word) ? void 0 : v.split(";")) ? w : null);
        this.I = this.H.xj ? zQ(a, b.contentWindow, c, e, this.H.Df) : null;
        this.K = {
            wi: !1
        };
        this.j = {};
        this.ra = {
            tag: 0
        };
        this.l = {
            uo: !0,
            Pj: !1,
            Ie: !1,
            og: !0
        };
        TR(this);
        UR(this);
        k.size && (b = new _.Jh, b.promise.then(function(C) {
            r.l.Xd || r.M || VR(r, C)
        }), this.bb = new eR(a, k, b), _.S(this, this.bb));
        var x;
        if (null == (x = h.bi) ? 0 : x.length)
            if (k = _.Vf(a)) {
                var B = new IR(a, k, e, this.Rd, 17, h.bi);
                _.S(this, B);
                this.Od = function(C) {
                    B.g(2, C - _.Xf(a))
                }
            }
    };
    _.T(WR, SR);
    var TR = function(a) {
            a.I && (uR(a.I).then(function() {
                AQ(a.o);
                a.ia()
            }), vR(a.I).then(function() {
                return void YR(a)
            }), wR(a.I).then(function() {
                return void a.J()
            }))
        },
        RR = function(a, b, c) {
            b["i-blur"] = function() {
                a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 27
                }));
                a.l.Ie = !0;
                a.l.Xg && (a.l.og = !0)
            };
            b["i-no"] = function(g) {
                a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 26
                }));
                a.ra = {
                    tag: 1,
                    yo: g.i_tslv ? g.i_tslv : void 0
                }
            };
            if (c.heavyAdInterventionResponse) {
                var d = oQ(c.heavyAdInterventionResponse);
                if (d) {
                    var e = CR(),
                        f = e.tm;
                    b["i-hai-aux"] = e.um;
                    f.then(function(g) {
                        _.S(a, g);
                        g.promise.then(function() {
                            return d()
                        })
                    })
                }
            }
            c.fullscreenApi || (b["i-adframe-load"] = function() {
                AQ(a.o);
                a.ia()
            }, b["i-dismiss"] = function() {
                YR(a)
            }, b.i_iif = function() {
                a.J()
            })
        };
    WR.prototype.ia = function() {
        this.K.Hi || (this.K.Hi = _.Uf())
    };
    var YR = function(a) {
        a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 33
        }));
        a.l.Ie ? (ZR(a) ? (a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 34
        })), a.D.history.back()) : (a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 35
        })), $R(a)), a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 36
        }))) : (_.t.setTimeout(function() {
            $R(a)
        }, 1E3), a.l.Hg ? (a.l.Xg && (a.l.og = !1), aS(a, a.l.Hg)) : a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 37
        })))
    };
    WR.prototype.J = function() {
        this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 23
        }));
        this.K.wi = !0
    };
    var bS = function(a) {
            ZR(a) || (a.D.location.hash = "google_vignette");
            a.l.Xg = a.la.Ca(526, function() {
                a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 62
                }));
                a.l.og ? (ZR(a) ? (a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 64
                })), aS(a, a.j.Wa.href)) : $R(a), a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 65
                }))) : a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 63
                }))
            });
            _.t.setTimeout(_.Nw(_.ob, a.D, "hashchange", a.l.Xg), 0)
        },
        cS = function(a, b) {
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 10
            }));
            var c = _.Uf(),
                d = _.Cj(a.D).wasReactiveAdVisible[9];
            if (b) {
                var e = a.C;
                if (b && e.g) {
                    var f = [];
                    hR(b, f, !0, !0);
                    b = f.join("");
                    b = b.replace(iR, " ").replace(jR, "");
                    b = b.replace(kR, "");
                    b = b.replace(lR, " ");
                    " " != b && (b = b.replace(mR, ""));
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
            b = a.H.cl || sQ(a.D);
            f = a.requestedSize.width < a.requestedSize.height === _.Gi(a.D);
            if (864E5 <= c - a.ob) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
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
            if (!c) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 12
            })), !1;
            if (a.K.wi) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 13
            })), !1;
            if (ZR(a)) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 14
            })), !1;
            if (!a.K.Hi) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 15
            })), !1;
            if (!a.ua && d) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 16
            })), !1;
            a.ua && a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 17
            }));
            d && a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 18
            }));
            if (e.length) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 19
            })), !1;
            if (!b) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 20
            })), !1;
            if (!f) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 21
            })), !1;
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 22
            }));
            return !0
        },
        eS = function(a, b) {
            a.l.od = dS(a, b, "prerender");
            a.l.nd = dS(a, b, "prefetch");
            a.D.document.body.appendChild(a.l.od);
            a.D.document.body.appendChild(a.l.nd)
        },
        dS = function(a, b, c) {
            a = _.Yf("LINK", a.D.document);
            a.setAttribute("rel", c);
            a.setAttribute("href", b);
            return a
        },
        fS = function(a, b) {
            for (b = b.target; b;) {
                if ("nodeName" in b && "A" === b.nodeName) {
                    if (OR(a.C, b, b.ownerDocument !== a.D.document)) return b;
                    break
                }
                b = "parentElement" in b ? b.parentElement : null
            }
            return null
        };
    WR.prototype.A = function() {
        this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 24
        }));
        SR.prototype.A.call(this);
        ZR(this) && aS(this, this.j.Wa.href);
        this.j.Eb && (_.Zf(this.D.document, "click", this.j.Eb), this.j.Eb = void 0);
        this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 25
        }))
    };
    var $R = function(a) {
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 38
            }));
            a.l.Xd ? (a.l.Pj = !0, a.j.Eb && (_.Zf(a.D.document, "click", a.j.Eb), a.j.Eb = void 0), a.l.od && a.l.od.parentNode && (a.l.od.parentNode.removeChild(a.l.od), a.l.od = void 0), a.l.nd && a.l.nd.parentNode && (a.l.nd.parentNode.removeChild(a.l.nd), a.l.nd = void 0), gS(a.o, !1), a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 40
            }))) : a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 39
            }))
        },
        UR = function(a) {
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 41
            }));
            if (a.j.Eb) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 42
            }));
            else {
                a.j.Eb = a.la.Ca(527, function(e) {
                    hS(a, e)
                });
                if (null !== a.j.Eb) {
                    var b = a.j.Eb;
                    _.ob(a.D.document, "click", function(e) {
                        b(e)
                    }, GQ)
                }
                for (var c = a.D.frames, d = 0; d < c.length; d++) try {
                    _.ob(c[d].document, "click", a.j.Eb, GQ)
                } catch (e) {}
                a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 43
                }))
            }
        },
        aS = function(a, b) {
            a = a.D.location;
            b = _.Ra(b);
            b = _.Za(b);
            void 0 !== b && a.replace(b)
        },
        VR = function(a, b) {
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 28
            }));
            if (cS(a)) {
                b = 1 === b;
                if (a.H.Bk) {
                    var c;
                    (c = a.l).Ie || (c.Ie = !b)
                }
                if (a.jb()) {
                    a.l.Xd = Date.now();
                    _.Cj(a.D).wasReactiveAdVisible[8] = !0;
                    b && a.j.Wa && (a.l.Hg = a.j.Wa.href);
                    iS(a);
                    a.j.Wa && eS(a, a.j.Wa.href);
                    bS(a);
                    _.ob(a.D, "pagehide", a.la.Ca(528, function() {
                        $R(a)
                    }));
                    if (b) {
                        var d;
                        null == (d = a.Od) || d.call(a, a.l.Xd)
                    }
                    gS(a.o, !0);
                    var e;
                    null == (e = a.bb) || e.za();
                    a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                        U: 32
                    }))
                } else a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 30
                })), b && a.j.Wa && (a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 31
                })), aS(a, a.j.Wa.href))
            } else a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 29
            }))
        };
    WR.prototype.qc = function(a) {
        this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 54
        }));
        this.l.Xd ? this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 56
        })) : this.M ? this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 57
        })) : this.j.Wa ? a.preventDefaultTriggered ? (this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 59
        })), this.j.Wa = void 0) : OR(this.C, this.j.Wa, this.j.Wa.ownerDocument !== this.D.document) ? cS(this) ? (VR(this, 1), this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 61
        }))) : (this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 60
        })), aS(this, this.j.Wa.href)) : (this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 55
        })), aS(this, this.j.Wa.href)) : this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 58
        }))
    };
    WR.prototype.jb = function() {
        return !0
    };
    var hS = function(a, b) {
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 44
            }));
            if (b)
                if (b.defaultPrevented) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 46
                }));
                else if (a.l.Xd) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 50
            }));
            else if (a.l.Hg) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 51
            }));
            else if (a.M) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 47
            }));
            else if (a.j.Wa) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 52
            }));
            else {
                var c = fS(a, b);
                c ? cS(a, c) ? (a.j.Wa = c, PQ(b), b.preventDefault = function() {
                    return b && (b.preventDefaultTriggered = !0)
                }, _.t.setTimeout((0, _.Mw)(a.qc, a, b), 0), a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 53
                }))) : a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 49
                })) : a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 48
                }))
            } else a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 45
            }))
        },
        ZR = function(a) {
            return -1 !== a.D.location.hash.indexOf("google_vignette")
        },
        iS = function(a) {
            if (!a.Hb)
                if (a.I) _.t.IntersectionObserver || a.I.Rh.postMessage(JSON.stringify({
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
    var kS = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.g = a;
        this.l = b;
        this.j = c;
        _.ob(this.g, this.l, this.j, GQ);
        _.kp(this, function() {
            return void jS(d)
        })
    };
    _.T(kS, _.V);
    var jS = function(a) {
            a.g && _.Zf(a.g, a.l, a.j, GQ)
        },
        lS = function(a) {
            this.l = a;
            this.reset()
        };
    lS.prototype.add = function(a) {
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
    lS.prototype.reset = function() {
        this.g = [];
        this.A = 0
    };
    var oS = function(a, b, c, d) {
        _.V.call(this);
        var e = this;
        this.D = a;
        this.target = b;
        this.handle = c || b;
        this.bb = d || 100;
        this.o = this.K = this.fa = !1;
        this.I = this.g = this.l = this.j = this.ia = this.H = this.P = this.J = null;
        this.pb = new kS(this.handle, "mousedown", function(f) {
            0 == f.button && mS(e, f)
        });
        _.S(this, this.pb);
        this.Hb = new kS(this.handle, "touchstart", function(f) {
            return mS(e, f)
        });
        _.S(this, this.Hb);
        this.ob = new kS(this.handle, "click", function(f) {
            e.fa ? (e.onClick(), e.fa = !1) : f.stopPropagation()
        });
        _.S(this, this.ob)
    };
    _.T(oS, _.V);
    var pS = function(a) {
        a = a.touches && a.touches[0] || a;
        return new _.Im(a.clientX, a.clientY)
    };
    oS.prototype.ga = function() {
        if (this.j && this.l && this.g) {
            var a = this.j,
                b = HQ(this.g, this.l);
            var c = new _.Im(a.x + b.x, a.y + b.y);
            a = this.target;
            c instanceof _.Im ? (b = c.x, c = c.y) : (b = c, c = void 0);
            a.style.left = _.vB(b, !1);
            a.style.top = _.vB(c, !1)
        }
    };
    oS.prototype.ka = function() {};
    oS.prototype.onClick = function() {};
    oS.prototype.W = function() {
        var a = this.target,
            b = _.EA(a);
        var c = QQ(a);
        b = QQ(b);
        c = new _.Im(c.x - b.x, c.y - b.y);
        a = TQ(a, "margin");
        return HQ(c, new _.Im(a.left, a.top))
    };
    var mS = function(a, b) {
        a.K && qS(a);
        a.K = !0;
        a.j = a.W();
        a.l = pS(b);
        a.g = a.l;
        a.I = new lS(a.bb);
        a.I.add(a.l);
        a.J = new kS(a.D, "mousemove", (0, _.Mw)(a.xa, a));
        _.S(a, a.J);
        a.P = new kS(a.D, "touchmove", (0, _.Mw)(a.xa, a));
        _.S(a, a.P);
        a.H = new kS(a.D, "mouseup", (0, _.Mw)(a.Ma, a));
        _.S(a, a.H);
        a.ia = new kS(a.D, "touchend", (0, _.Mw)(a.Ma, a));
        _.S(a, a.ia)
    };
    oS.prototype.xa = function(a) {
        if (this.K)
            if (a.preventDefault(), this.g = pS(a), this.I.add(this.g), this.o) this.ga();
            else {
                var b = this.l,
                    c = this.g;
                a = b.x - c.x;
                b = b.y - c.y;
                10 <= Math.sqrt(a * a + b * b) && (this.ga(), this.o = !0)
            }
    };
    oS.prototype.Ma = function(a) {
        this.o ? (a.preventDefault(), this.g = pS(a), this.ka()) : this.fa = !0;
        qS(this)
    };
    var qS = function(a) {
        a.K = !1;
        a.o = !1;
        a.j = null;
        a.l = null;
        a.g = null;
        a.I = null;
        a.J && jS(a.J);
        a.P && jS(a.P);
        a.H && jS(a.H);
        a.ia && jS(a.ia)
    };
    var uS = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        _.V.call(this);
        var p = this;
        this.config = a;
        this.pa = b;
        this.H = c;
        this.K = d;
        this.Ma = f || function() {};
        this.ra = g || function() {};
        this.la = h;
        this.Ba = k;
        this.xa = l;
        this.fa = m;
        this.j = (this.o = n) ? 2 : 1;
        _.kp(this, function() {
            return rS(p, !0)
        });
        this.C = _.Yf("INS", b.document);
        _.kp(this, function() {
            return p.C = null
        });
        this.I = null;
        HTMLElement.prototype.attachShadow && !this.la.Db(1013, function() {
            p.I = _.Yf("DIV", b.document);
            p.I.className = "grippy-host";
            p.I.attachShadow({
                mode: "closed"
            }).appendChild(p.C);
            _.kp(p, function() {
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
        this.ka = "true" === this.config.scroll_detached;
        this.W = "true" === this.config.dismissable;
        this.pb = "true" === this.config.draggable || "top" != this.g;
        this.jb = this.config.expId || "";
        this.bb = this.config.qemId || "";
        a = parseInt(this.config.z_index_override, 10);
        this.ua = isNaN(a) ? null : a;
        this.ob = new _.QH(b);
        !this.W && _.t.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(function() {
            var r = p.pa.innerHeight;
            if (2 > Math.abs(r - 460) || 2 > Math.abs(r - 529)) r < p.sa && 2 > Math.abs(_.Pi(p.pa) - p.ia - 68) && (p.ga = !0, 0 === p.j && sS(p)), p.sa = r
        }, 300);
        tS(this, this.C)
    };
    _.T(uS, _.V);
    var vS = function(a, b) {
            if ("top" == a.g) {
                var c;
                _.qp(null != (c = a.I) ? c : a.C, {
                    top: _.xI(b)
                })
            }
        },
        tS = function(a, b) {
            uQ(b);
            _.qp(b, {
                "background-color": "#FAFAFA",
                display: "block",
                position: "relative",
                "z-index": 1,
                height: _.xI(5),
                "box-shadow": "top" == a.g ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
            });
            if ("top" == a.g) {
                var c, d, e = {
                        position: "absolute",
                        top: _.xI(null != (d = null == (c = a.o) ? void 0 : c.maxHeight) ? d : a.K.height),
                        width: "100%"
                    },
                    f;
                _.qp(null != (f = a.I) ? f : b, e)
            }
            var g = _.Yf("SPAN", a.pa.document);
            g.appendChild(wS(a));
            var h = function(k) {
                k.target === g && (k.preventDefault && k.preventDefault(), k.stopImmediatePropagation && k.stopImmediatePropagation(), k.stopPropagation && k.stopPropagation())
            };
            _.ob(g, "click", h);
            _.kp(a, function() {
                return _.Zf(g, "click", h)
            });
            xS(a, g);
            b.className = "ee";
            b.appendChild(g)
        },
        xS = function(a, b) {
            var c = {};
            a = (c.display = "block", c.width = "80px", c.height = "45px", c[a.g] = "0", c.left = "0%", c.marginLeft = "0px", c["pointer-events"] = "none", c);
            c = b.getElementsByTagName("svg")[0];
            _.qp(b, a);
            tQ(c)
        },
        yS = function(a) {
            var b;
            return null != (b = a.I) ? b : a.C
        },
        wS = function(a) {
            switch (a.g) {
                case "top":
                    var b = "dropShadowBottom";
                    var c = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                    var d = "0";
                    var e = "up";
                    var f = BQ;
                    break;
                case "bottom":
                    b = "dropShadowTop", c = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", d = "25", e = "down", f = CQ
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
        zS = function(a, b) {
            for (var c = a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0], d; d = c.firstChild;) c.removeChild(d);
            switch (a.g) {
                case "top":
                    (b ? CQ : BQ)(c);
                    break;
                case "bottom":
                    (b ? BQ : CQ)(c)
            }
        },
        AS = function(a, b, c, d) {
            b = {
                i: b,
                dc: 0 === a.j ? "1" : "0",
                fdc: c ? "1" : "0",
                ds: a.W ? "1" : "0",
                expId: a.jb,
                sc: a.ka ? "1" : "0",
                off: d,
                vw: _.Hi(a.pa),
                req: a.H.src,
                tp: a.g,
                h: a.K.height,
                w: a.K.width,
                qemId: a.bb
            };
            _.$i(a.Ba, "flgr", b, !0, 1)
        };
    uS.prototype.onClick = function(a) {
        a.preventDefault();
        this.D || (this.ga = !0, sS(this), AS(this, "c", 0 !== this.j, 0))
    };
    var sS = function(a, b) {
            b = void 0 === b ? a.W : b;
            switch (a.j) {
                case 1:
                    a.show();
                    break;
                case 2:
                    BS(a);
                    break;
                case 0:
                    a.o ? BS(a) : a.show();
                    break;
                case 3:
                    rS(a, b);
                    break;
                case 4:
                    a.show()
            }
        },
        CS = function(a) {
            var b = a.o.maxHeight;
            4 !== a.j && (a.l.style[a.g] = "-" + (b - (parseInt(a.l.style.height, 10) + parseInt(a.l.style[a.g], 10))) + "px");
            a.l.style.height = b + "px";
            a.H.style["max-height"] = "none";
            a.H.height = "100%";
            vS(a, b);
            null != (a = a.P) && (a.C = b)
        },
        ES = function(a, b) {
            "bottom" == a.g && VQ(a.pa) && a.la.Db(404, function() {
                return DS(a, "0px", b, "ease-out")
            })
        };
    uS.prototype.show = function() {
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
                        vS(a, g);
                        var h;
                        null != (h = a.P) && (h.C = g)
                    }
                    a.D = !1;
                    a.J = !1;
                    FS(a);
                    a.l.setAttribute("data-anchor-status", "displayed");
                    a.l.setAttribute("data-anchor-shown", !0);
                    zS(a, !1)
                };
                this.D = !0;
                if (c && !b) {
                    var e = -c / .1;
                    ES(this, e);
                    zS(this, !1);
                    c = new tR(this.l, c, 0, e, this.g, this.la, d, sR);
                    this.fa();
                    qR(c)
                } else if (b) {
                    var f = this.o.maxHeight;
                    e = this.K.height - f;
                    f = (f + c > this.K.height ? -1 : 1) * (e - c) / .1;
                    ES(this, f);
                    c === e ? d() : (c = new tR(this.l, c, e, f, this.g, this.la, d, sR), this.fa(), qR(c))
                }
            } else this.J = !1
        }
    };
    var BS = function(a) {
            if (!a.D) {
                CS(a);
                var b = parseInt(a.l.style[a.g], 10),
                    c = function() {
                        a.D = !1;
                        a.j = 4;
                        a.J = !1;
                        FS(a);
                        a.l.setAttribute("data-anchor-status", "displayed");
                        a.l.setAttribute("data-anchor-shown", !0);
                        zS(a, !1)
                    };
                if (b) {
                    a.D = !0;
                    var d = -b / .1;
                    ES(a, d);
                    zS(a, !1);
                    b = new tR(a.l, b, 0, d, a.g, a.la, c, sR);
                    a.fa();
                    qR(b)
                } else c()
            }
        },
        rS = function(a, b) {
            if (!a.D && a.l) {
                var c = parseInt(a.l.style[a.g], 10),
                    d = -(4 === a.j ? a.o.maxHeight : a.K.height) - (b ? 30 : 0),
                    e = (c - d) / .1;
                "bottom" == a.g && VQ(a.pa) && a.la.Db(405, function() {
                    return DS(a, "21px", e, "ease-in")
                });
                b || zS(a, !0);
                c === d ? (b || (a.j = 0), a.J = b) : (a.D = !0, c = new tR(a.l, c, d, e, a.g, a.la, function() {
                    a.D = !1;
                    b || (a.j = 0);
                    (a.J = b) || zS(a, !0);
                    b && a.Ma();
                    a.l.setAttribute("data-anchor-status", "dismissed")
                }, rR), a.xa(), qR(c))
            }
        },
        IS = function(a, b) {
            if ("bottom" !== a.g && "top" !== a.g) throw Error("unsupported reactive type");
            var c = function(k) {
                    return a.onClick(k)
                },
                d = a.C;
            _.ob(d, "click", c);
            _.kp(a, function() {
                return _.Zf(d, "click", c)
            });
            a.I && (_.ob(a.I, "click", c), _.kp(a, function() {
                return a.I && _.Zf(a.I, "click", c)
            }));
            _.oB(b, {
                opacity: 1
            });
            var e = a.pa.document;
            if (e) {
                a.l = b;
                var f, g, h = null != (g = null == (f = a.o) ? void 0 : f.maxHeight) ? g : a.K.height;
                a.pb && (a.P = new("top" == a.g ? GS : HS)(a, e, h, b, a.C), _.S(a, a.P));
                e = {
                    position: "fixed",
                    left: _.xI(0)
                };
                e[a.g] = _.xI(-h - 30);
                _.oB(b, e);
                _.qp(b, {
                    overflow: "visible",
                    background: "#FAFAFA"
                });
                _.UH(a.ob, function(k) {
                    var l = null == a.ua ? 2147483647 : a.ua;
                    _.oB(b, {
                        zIndex: null == k ? l : Math.min(k, l)
                    })
                });
                sS(a)
            }
        },
        DS = function(a, b, c, d) {
            _.oB(a.H, {
                transition: c / 1E3 + "s",
                "transition-timing-function": d,
                "margin-top": b
            })
        },
        FS = function(a) {
            a.ra();
            a.ra = function() {}
        },
        JS = function(a, b, c, d, e) {
            oS.call(this, b, d, e);
            this.jb = a;
            this.C = c
        };
    _.T(JS, oS);
    JS.prototype.ka = function() {
        var a = this.jb;
        if (!a.D) {
            var b = parseInt(a.l.style[a.g], 10),
                c = b + parseInt(a.l.style.height, 10),
                d = a.K.height / 2;
            c >= (a.o ? a.o.maxHeight / 2 : _.z(Number, "MAX_SAFE_INTEGER")) ? (BS(a), AS(a, "d", !1, b)) : c >= d ? (a.show(), AS(a, "d", !1, b)) : (rS(a, a.W), AS(a, "d", !0, b))
        }
    };
    JS.prototype.ga = function() {
        if (null !== this.j && null !== this.l && null !== this.g) {
            var a = this.ua(this.j.y, HQ(this.g, this.l).y);
            0 < a && (a = 0);
            a < -this.C && (a = -this.C);
            var b = {};
            b[this.ra()] = _.xI(a);
            _.oB(this.target, b)
        }
    };
    var GS = function(a, b, c, d, e) {
        JS.call(this, a, b, c, d, e)
    };
    _.T(GS, JS);
    GS.prototype.W = function() {
        return new _.Im(0, parseInt(this.target.style.top, 10))
    };
    GS.prototype.ua = function(a, b) {
        return b - a
    };
    GS.prototype.ra = function() {
        return "top"
    };
    var HS = function(a, b, c, d, e) {
        JS.call(this, a, b, c, d, e)
    };
    _.T(HS, JS);
    HS.prototype.W = function() {
        return new _.Im(0, parseInt(this.target.style.bottom, 10))
    };
    HS.prototype.ua = function(a, b) {
        return a - b
    };
    HS.prototype.ra = function() {
        return "bottom"
    };
    var QS = function(a, b, c, d, e, f, g, h) {
        g = void 0 === g ? !1 : g;
        h = void 0 === h ? null : h;
        _.nQ.call(this, a, b, f);
        var k = this;
        this.la = d;
        this.Ba = e;
        this.C = this.qc = this.Hb = 0;
        this.ob = this.zj = !1;
        this.D = null;
        this.W = this.ua = !1;
        this.J = null;
        this.ra = TQ(b.document.body, "padding");
        this.o = TQ(b.document.body, "padding");
        this.ia = 0;
        this.Li = this.H = !1;
        this.ka = !0;
        this.I = c;
        this.K = KS(this);
        this.fa = null;
        this.Qd = this.Rd = this.xa = this.jb = this.bb = this.Ii = this.Aj = this.Dj = !1;
        this.Jj = _.yA(b || window).height / 2;
        this.Fj = _.yA(b || window).height;
        this.Ei = IQ(b);
        this.Di = this.ga = this.uc = !1;
        this.cf = g;
        this.Rm = h;
        LS(this);
        this.Ni = this.la.Ca(266, function() {
            MS(k)
        });
        this.Ri = this.la.Ca(267, function() {
            MS(k)
        });
        this.Xi = this.la.Ca(268, function() {
            if (k.H && k.l && k.D) {
                var l = k.D;
                l.ia = _.Pi(l.pa)
            }
            l = _.Pi(k.g);
            var m = l - k.Hb;
            NS(k, m);
            k.xa && (0 < m && (k.C += m), k.uc = k.Ei - l <= k.Fj, k.Hb = l);
            MS(k)
        });
        this.Yi = this.la.Ca(269, function() {
            OS(k)
        });
        this.fj = this.la.Ca(270, function(l) {
            PS(k, l)
        });
        this.pj = this.la.Ca(271, function(l) {
            if (l && l.touches) {
                k.J = "touchmove";
                k.ia = l.touches.length;
                k.W = !0;
                MS(k);
                if (!k.zj && l.touches && 0 != l.touches.length && l.touches[0]) {
                    l = l.touches[0].pageY;
                    var m = l - k.qc;
                    k.qc = l;
                    l = m
                } else l = 0;
                0 < l && (k.C += l);
                NS(k, l)
            }
        });
        this.uj = this.la.Ca(272, function(l) {
            l && l.touches && l.touches[0] && (k.J = "touchstart", k.ia = l.touches.length, k.W = !1, MS(k), k.qc = l.touches[0].pageY, l = (l = l.target) && "top" == k.I && k.ua && k.D && yS(k.D) && 1 === l.nodeType ? _.FA(yS(k.D), l) : !1, k.zj = l)
        });
        this.Od = this.la.Ca(273, function() {
            k.bb || (k.bb = !0, _.Zf(k.j, "load", k.Od), k.jb && !k.Li || MS(k))
        });
        _.ob(a, "load", this.Od);
        _.kp(this, function() {
            return _.Zf(a, "load", k.Od)
        })
    };
    _.T(QS, _.nQ);
    var SS = function(a) {
            var b = a.g;
            _.ob(b, "orientationchange", a.Ni);
            _.ob(b, "resize", a.Ri);
            _.ob(b, "scroll", a.Xi);
            _.ob(b, "touchcancel", a.Yi);
            _.ob(b, "touchend", a.fj);
            _.ob(b, "touchmove", a.pj);
            _.ob(b, "touchstart", a.uj);
            _.kp(a, function() {
                return RS(a)
            })
        },
        RS = function(a) {
            var b = a.g;
            _.Zf(b, "orientationchange", a.Ni);
            _.Zf(b, "resize", a.Ri);
            _.Zf(b, "scroll", a.Xi);
            _.Zf(b, "touchcancel", a.Yi);
            _.Zf(b, "touchend", a.fj);
            _.Zf(b, "touchmove", a.pj);
            _.Zf(b, "touchstart", a.uj)
        };
    QS.prototype.Lj = function(a) {
        var b = this.l;
        if (b && !this.D) {
            for (var c in TS) !TS.hasOwnProperty(c) || c in a || (a[c] = TS[c]);
            this.Dj = "true" === a.use_manual_view || "top" === this.I || !!_.Cj(this.g).wasReactiveAdConfigReceived[2];
            this.Aj = "true" === a.use_important;
            if (c = a.af_l) this.jb = "true" === c;
            this.Di = (this.xa = "true" === a.wait_for_scroll || "top" == this.I) && ("true" === a.tsec || "top" == this.I);
            US(this, a);
            this.D = VS(this, a);
            this.fa = WS(this);
            this.uc = this.Fj >= this.Ei;
            a = this.l;
            c = this.D && yS(this.D);
            a && c && ("top" == this.I ? a.appendChild(c) : a.insertBefore(c, a.firstChild));
            SS(this);
            this.ua = !0;
            b.setAttribute("data-anchor-status", "ready-to-display")
        }
    };
    var WS = function(a) {
            var b = a.K.height + 5;
            "bottom" == a.I && VQ(a.g) && (b += 20);
            return new _.Mm(a.K.width, b)
        },
        US = function(a, b) {
            var c = parseInt(b.ht, 10),
                d = 0 < c ? c : null;
            b = parseInt(b.wd, 10);
            var e = 0 < b ? b : null;
            null != d && (a.K.height = d);
            null != e && (a.K.width = e);
            FQ(a, function(f) {
                DQ(f, e, d)
            }, !1, !0);
            DQ(a.j, e, d)
        },
        VS = function(a, b) {
            b = new uS(b, a.g, a.j, a.K, a.I, function() {
                if (!a.ob) {
                    a.ob = !0;
                    RS(a);
                    var c = a.l;
                    _.DA(c);
                    XS(a, a.ra, !0, !0);
                    c && (c.style.display = "none")
                }
            }, function() {
                return void YS(a)
            }, a.la, a.Ba, function() {
                a.ga || (a.ga = !0, NS(a, null));
                _.HJ(a.L, a.slotId)
            }, function() {
                a.ga && (a.ga = !1, NS(a, null));
                a.Ij && _.IJ(a.L, a.slotId)
            }, a.Rm);
            _.S(a, b);
            return b
        },
        LS = function(a) {
            if (a.ka) {
                var b = a.l;
                b && (b.style.display = "none");
                XS(a, a.ra, !0, !0);
                a.ka = !1
            }
        };
    QS.prototype.Ma = function() {
        this.Li = !0;
        if (!this.H && ZS(this) && (this.bb || !this.jb)) {
            var a = this.l;
            a && ($S(this), FQ(this, function(b) {
                uQ(b)
            }, !0), IS(this.D, a), aT(this), this.H = !0, (a = this.j.contentWindow) && UQ(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    };
    var aT = function(a) {
            var b = a.l;
            if (b) {
                var c = a.D,
                    d = c.pa,
                    e = _.Pi(d);
                if (!(10 > Math.abs(e - c.ia))) {
                    var f = 10 > e;
                    d = e + 10 + _.Mi(d) > _.Oi(d);
                    f = f || d;
                    c.ka || c.ga || c.D || (0 === c.j || f ? 0 === c.j && f && sS(c) : sS(c, !1));
                    c.ia = e
                }
                a.ka || (bT(a), c = TQ(a.g.document.body, "padding"), "bottom" == a.I && (c.bottom += a.fa.height + 25), XS(a, c), b.style.display = "block", a.ka = !0)
            }
        },
        $S = function(a) {
            var b = a.l;
            if (b && a.j.parentElement) {
                RQ(b, a.fa);
                var c = a.g.innerWidth;
                _.Li(a.g).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
                cT(a)
            }
        },
        cT = function(a) {
            FQ(a, function(c) {
                RQ(c, a.K);
                c.style.width = "100%"
            }, !1, !0);
            a.j.style.display = "block";
            a.j.style.margin = "0 auto";
            if (a.Aj) {
                var b = a.l;
                JQ(b, function(c) {
                    tQ(c, function(d) {
                        return c === b && /display|bottom/i.test(d) ? !1 : !0
                    });
                    if ("svg" === c.nodeName) return !1
                })
            }
        },
        bT = function(a) {
            if ("bottom" !== a.I && "top" !== a.I) throw Error("Unexpected position: " + a.I);
        },
        KS = function(a) {
            bT(a);
            var b = a.g.innerWidth;
            a = _.Km(_.wB, a.j).height || +a.j.height || 0;
            return new _.Mm(b, a)
        },
        OS = function(a) {
            a.J = "touchcancel";
            _.t.setTimeout(a.la.Ca(274, function() {
                "touchcancel" === a.J && (a.ia = 0, a.W = !1, MS(a))
            }), 1E3)
        },
        PS = function(a, b) {
            if (b && b.touches) {
                a.J = "touchend";
                var c = b.touches.length;
                2 > c ? _.t.setTimeout(a.la.Ca(256, function() {
                    "touchend" === a.J && (a.ia = c, a.W = !1, MS(a))
                }), 1E3) : (a.ia = c, MS(a));
                !a.H || a.cf || sQ(a.g) || rS(a.D, !0)
            }
        },
        NS = function(a, b) {
            var c = a.ka ? dT(a, a.ga) : a.ra.top;
            if ("top" === a.I && a.g.document.body && a.ua && a.D && a.H && a.o.top !== c && 0 !== b) {
                var d = _.iB(a.o);
                null === b ? (d.top = c, XS(a, d)) : (0 < b && a.o.top > c && (d.top = Math.max(c, a.o.top - b), XS(a, d, !1)), 0 > b && a.o.top < c && (d.top = Math.min(c, a.o.top - b), XS(a, d, !1)))
            }
        },
        XS = function(a, b, c, d) {
            var e = a.o.top - b.top,
                f = _.Pi(a.g);
            f < e && (void 0 === d || !d) || (d = a.g.document.body, d.style.paddingTop = _.xI(b.top), d.style.paddingRight = _.xI(b.right), d.style.paddingBottom = _.xI(b.bottom), d.style.paddingLeft = _.xI(b.left), a.o = b, (void 0 === c || c) && a.g.scrollTo(0, f - e))
        },
        MS = function(a) {
            !a.ua || a.ob || 2 <= a.ia && a.W || !ZS(a) ? LS(a) : (a.Ma(), aT(a))
        };
    QS.prototype.pb = function() {
        return _.Gi(this.g)
    };
    QS.prototype.Hj = function() {
        this.Rd = !0;
        var a;
        null == (a = this.l) || a.removeAttribute("data-anchor-status")
    };
    QS.prototype.Mj = function() {
        this.Qd = !0;
        var a = this.l;
        this.Rd && this.Qd && (null == a || a.setAttribute("data-anchor-status", "ready-to-display"))
    };
    var ZS = function(a) {
            if (!a.pb() || a.Rd && !a.Qd) return !1;
            var b = a.g;
            if (!a.H && a.xa) switch (a.Di && (a.C += Math.max(_.Pi(a.g) - a.Hb, 0)), a.I) {
                case "bottom":
                    return a.C >= a.Jj || a.uc;
                case "top":
                    return a.C > dT(a)
            }
            return a.cf || sQ(b)
        },
        dT = function(a, b) {
            return (void 0 === b ? 0 : b) ? a.ra.top + 30 : a.ra.top + 30 + a.fa.height - 5
        },
        YS = function(a) {
            a.Dj && !a.Ii && (a.Ii = !0, a.la.Db(257, function() {
                var b = {
                        msg_type: "manual-send-view"
                    },
                    c = a.j.contentWindow;
                c && c.postMessage(a.g.JSON.stringify(b), "*")
            }))
        };
    QS.prototype.Kj = function(a, b) {
        this.j = a;
        if (b && (this.K.height !== b.height || this.K.width !== b.width)) {
            a = b.height - this.K.height;
            var c = {};
            US(this, (c.ht = b.height, c.wd = b.width, c));
            this.fa = WS(this);
            $S(this);
            NS(this, a);
            var d;
            null == (d = this.D) || vS(d, b.height)
        }
        cT(this)
    };
    var TS = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    var eT = function() {
            this.g = null
        },
        fT = function(a, b, c) {
            a.g = _.dI(b, c);
            if (b = !!a.g) a = a.g, b = !!a && 1 > a.length;
            return b
        };
    var gT = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        _.nQ.call(this, a, b, c);
        this.D = null;
        this.I = b.document;
        this.H = d;
        this.K = _.SH(new _.QH(b), 2147483646);
        this.C = e;
        this.o = b
    };
    _.T(gT, _.nQ);
    var jT = function(a) {
            gS(a, !1);
            var b = a.l;
            if (b) {
                var c = EQ(a.o, a.C);
                FQ(a, function(d) {
                    _.qp(d, c);
                    uQ(d)
                }, !0);
                a.j.setAttribute("width", "");
                a.j.setAttribute("height", "");
                _.oB(a.j, c);
                _.oB(a.j, hT);
                _.oB(b, iT);
                _.oB(b, {
                    background: "transparent"
                });
                _.qp(b, {
                    display: "none",
                    position: "fixed"
                });
                uQ(b);
                uQ(a.j);
                1 >= _.Ni(a.o) || (_.oB(b, {
                    overflow: "scroll",
                    "max-width": "100vw"
                }), tQ(b))
            }
        },
        gS = function(a, b) {
            var c = a.l;
            c && (b ? (_.WH(a.K), _.qp(c, {
                display: "block"
            }), a.I.body && !a.D && (a.D = _.cI(a.I, a.g, a.H)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.I.body.setAttribute("aria-hidden", "true")) : (_.XH(a.K), _.qp(c, {
                display: "none"
            }), a.D && (a.D(), a.D = null), a.I.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
        },
        iT = {
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
        hT = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var kT = function(a, b, c, d, e, f, g, h) {
        QS.call(this, c, d, 2 === b ? "top" : "bottom", new _.pJ(a), new _.dH, e, _.E(_.qq), h ? {
            maxHeight: _.Fy(h, 1)
        } : null);
        this.L = f;
        this.slotId = g;
        this.Ij = !!_.yq(this.L, this.slotId);
        2 === b && _.HJ(this.L, this.slotId)
    };
    _.T(kT, QS);
    kT.prototype.pb = function() {
        return 0 === (0, _.Pp)() || QS.prototype.pb.call(this)
    };
    var lT = function(a, b, c) {
        gT.call(this, b, a, c, _.Kf(_.GD), _.E(_.lq));
        jT(this)
    };
    _.T(lT, gT);
    var mT = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        var r = [];
        _.E(_.CD) && 0 === (0, _.Pp)() && r.push(101);
        _.E(_.DD) && r.push(102);
        h = _.E(_.FD) ? nR(h) : new _.u.Set(_.E(_.LD) ? [2] : []);
        WR.call(this, b, c, e, new lT(b, c, d), new _.dH, f, g, {
            xj: _.E(_.ED),
            bi: r,
            Bk: !0,
            Df: {
                xm: 3,
                version: "m202403130101"
            },
            cl: _.E(_.lq),
            al: _.E(_.ID) ? m : null
        }, h, a.V, a);
        this.ga = k;
        this.uc = l;
        this.ka = n;
        this.W = p;
        _.S(this, this.o)
    };
    _.T(mT, WR);
    mT.prototype.jb = function() {
        var a;
        if (!(a = this.ga)) {
            var b = _.If(eT),
                c = this.W;
            try {
                if (c && fT(b, c, this.ka)) {
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
    mT.prototype.xa = function() {
        return !0
    };
    mT.prototype.J = function() {
        WR.prototype.J.call(this);
        this.uc()
    };
    mT.prototype.pb = function() {
        return this.ga || fT(_.If(eT), this.W, this.ka)
    };
    var nT = {
        Ok: kT,
        el: mT
    };
    _.ZO(_m, _.zN).resolve(nT);
})