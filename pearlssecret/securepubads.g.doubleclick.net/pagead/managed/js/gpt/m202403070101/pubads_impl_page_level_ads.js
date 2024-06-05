window.googletag && typeof googletag._gpt_js_load_2_ == 'function' && googletag._gpt_js_load_2_(function(_, _m) {
    var nQ = function(a) {
            var b = _.Bf();
            if ("function" !== typeof a) throw b = b ? b() + "\n" : "", Error(b + String(a));
            return a
        },
        pQ = function(a) {
            if (!oQ.test(a)) return null;
            a = Number(a);
            return isNaN(a) ? null : a
        },
        qQ = function(a, b) {
            return a && a.source ? a.source === b || a.source.parent === b : !1
        },
        rQ = function(a) {
            a = _.Gi(a);
            return .05 > Math.abs(a - 1)
        },
        tQ = function(a) {
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
            _.Ow(_.z(Object, "keys").call(Object, b), function(c) {
                var d = a.style[_.qA(c)];
                ("undefined" !== typeof d ? d : a.style[_.mB(a, c)]) || _.nB(a, c, b[c])
            });
            sQ(a)
        },
        uQ = function(a) {
            var b;
            a = (null != (b = void 0 === a ? null : a) ? b : window).googletag;
            return (null == a ? 0 : a.apiReady) ? a : void 0
        },
        wQ = function(a, b, c, d) {
            return vQ(a, "fullscreen", d.Ca(952, function(e, f) {
                if (f.source === b) {
                    if (!("eventType" in e)) throw Error("bad message " + JSON.stringify(e));
                    delete e.googMsgType;
                    c(e)
                }
            }))
        },
        yQ = function(a, b, c, d, e) {
            a = new xQ(1, a, b, c, d, e);
            a.wa();
            return a
        },
        zQ = function(a) {
            var b;
            null == (b = a.l) || b.setAttribute("data-vignette-loaded", "true")
        },
        AQ = function(a) {
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
        BQ = function(a) {
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
        CQ = function(a, b, c) {
            null !== b && null !== pQ(a.getAttribute("width")) && a.setAttribute("width", String(b));
            null !== c && null !== pQ(a.getAttribute("height")) && a.setAttribute("height", String(c));
            null !== b && (a.style.width = _.wI(b));
            null !== c && (a.style.height = _.wI(c))
        },
        DQ = function(a, b) {
            a = _.Li(a);
            b = b ? 100 * (1 > a ? 1 : a) : 100;
            return {
                width: b + "vw",
                height: b + "vh"
            }
        },
        EQ = function(a, b, c, d) {
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
        FQ = {
            capture: !0
        },
        GQ = function(a, b) {
            return new _.Hm(a.x - b.x, a.y - b.y)
        },
        HQ = function(a) {
            var b = a.document,
                c = 0;
            if (b) {
                c = b.body;
                var d = b.documentElement;
                if (!d || !c) return 0;
                a = _.xA(a).height;
                if (_.wA(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
                else {
                    b = d.scrollHeight;
                    var e = d.offsetHeight;
                    d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                    c = b > a ? b > e ? b : e : b < e ? b : e
                }
            }
            return c
        },
        oQ = /^(-?[0-9.]{1,30})$/,
        IQ = function(a, b) {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !== b(c) && (c = _.oj(c.children || c.childNodes || [], function(d) {
                    return 1 === d.nodeType
                }), c.length && a.unshift.apply(a, _.qi(c)))
            }
        },
        JQ = function(a) {
            var b = {};
            if (a) {
                var c = /\s*:\s*/;
                _.Ow((a || "").split(/\s*;\s*/), function(d) {
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
        KQ = function(a, b) {
            if ("length" in a.style) {
                a = a.style;
                for (var c = a.length, d = 0; d < c; d++) {
                    var e = a[d];
                    b(a[e], e, a)
                }
            } else a = JQ(a.style.cssText), _.Bn(a, b)
        },
        sQ = function(a, b) {
            b = void 0 === b ? function() {
                return !0
            } : b;
            var c = /!\s*important/i;
            KQ(a, function(d, e) {
                !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
            })
        },
        LQ = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        MQ = /.*domain\.test$/,
        NQ = /\.prod\.google\.com(:\d+)?$/,
        OQ = function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        PQ = function(a) {
            if (1 == a.nodeType) return _.tB(a);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new _.Hm(a.clientX, a.clientY)
        },
        QQ = function(a, b) {
            if (b instanceof _.Lm) {
                var c = b.height;
                b = b.width
            } else throw Error("missing height argument");
            a.style.width = _.uB(b, !0);
            a.style.height = _.uB(c, !0)
        },
        RQ = function(a, b) {
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
        SQ = function(a, b) {
            if (_.Nx) {
                var c = RQ(a, b + "Left"),
                    d = RQ(a, b + "Right"),
                    e = RQ(a, b + "Top");
                a = RQ(a, b + "Bottom");
                return new _.gB(e, d, a, c)
            }
            c = _.pB(a, b + "Left");
            d = _.pB(a, b + "Right");
            e = _.pB(a, b + "Top");
            a = _.pB(a, b + "Bottom");
            return new _.gB(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        },
        vQ = function(a, b, c, d) {
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
                f || (f = !0, g = _.$f(a, "message", e));
                return g
            }
        },
        TQ = function(a, b, c, d, e) {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (var f = 0; f < a.length; ++f) 1 < e && TQ(a[f], b, c, d, --e)
        },
        UQ = function(a) {
            var b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
            return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
        },
        YQ = function(a, b) {
            _.V.call(this);
            this.B = a;
            this.D = this.j = this.g = !1;
            if (_.Wf(a) && b.length)
                for (a = _.y(b), b = a.next(); !b.done; b = a.next()) switch (b.value) {
                    case 0:
                        VQ(this);
                        break;
                    case 1:
                        WQ(this);
                        break;
                    case 2:
                        XQ(this)
                } else this.za()
        };
    _.T(YQ, _.V);
    YQ.prototype.wa = function() {
        this.M || this.l(_.Wf(this.B))
    };
    var VQ = function(a) {
            var b = function(d) {
                    d.isTrusted && (a.j = !0, a.l(d.timeStamp))
                },
                c = function(d) {
                    d.isTrusted && (a.j = !1, a.l(d.timeStamp))
                };
            _.pb(a.B, "focus", b);
            _.pb(a.B, "blur", c);
            _.jp(a, function() {
                return void a.B.removeEventListener("focus", b)
            });
            _.jp(a, function() {
                return void a.B.removeEventListener("blur", c)
            });
            a.j = a.B.document.hasFocus()
        },
        WQ = function(a) {
            var b = function(c) {
                c.isTrusted && (a.g = 1 === _.Ir(a.B.document) ? !0 : !1, a.l(c.timeStamp))
            };
            _.pb(a.B.document, "visibilitychange", b);
            _.jp(a, function() {
                return void a.B.document.removeEventListener("visibilitychange", b)
            });
            a.g = 1 === _.Ir(a.B.document)
        },
        XQ = function(a) {
            var b = a.B.document.body.getBoundingClientRect().top + 10,
                c = function(d) {
                    d.isTrusted && (a.D = d.clientY < b ? !0 : !1, a.l(d.timeStamp))
                };
            _.pb(a.B.document.body, "mouseleave", c);
            _.pb(a.B.document.body, "mouseenter", c);
            _.jp(a, function() {
                return void a.B.document.body.removeEventListener("mouseleave", c)
            });
            _.jp(a, function() {
                return void a.B.document.body.removeEventListener("mouseenter", c)
            });
            a.D = !1
        },
        ZQ = function() {
            YQ.apply(this, arguments);
            this.o = new _.wh;
            this.K = this.o.promise
        };
    _.T(ZQ, YQ);
    var $Q = function(a) {
        ZQ.call(this, a, [0, 1, 2]);
        this.I = 0;
        this.wa()
    };
    _.T($Q, ZQ);
    $Q.prototype.l = function(a) {
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
                    _.jp(this, function() {
                        return void clearTimeout(c)
                    })
                }
                break;
            case 2:
                !this.j && this.g && this.D ? (this.o.resolve(a), this.za()) : this.I = 1
        }
    };
    var bR = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.Gx(function() {
            aR(b)
        })
    };
    _.T(bR, _.V);
    bR.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var aR = function(a) {
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
            _.jp(a, function() {
                a.B.removeEventListener("focus", d);
                a.B.removeEventListener("blur", c)
            })
        },
        cR = function(a) {
            ZQ.call(this, a, [1]);
            this.wa()
        };
    _.T(cR, ZQ);
    cR.prototype.l = function(a) {
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
    var dR = function(a, b, c) {
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
                e = new cR(a);
                _.S(this, e);
                e.K.then(function(g) {
                    return function() {
                        return void c.resolve(g.Pb)
                    }
                }(f));
                break;
            case 3:
                if (0 !== (0, _.Op)()) break;
                e = new $Q(a);
                _.S(this, e);
                e.K.then(function(g) {
                    return function() {
                        return void c.resolve(g.Pb)
                    }
                }(f));
                break;
            case 4:
                e = new bR(a), _.S(this, e), e.listen(function(g) {
                    return function() {
                        return void c.resolve(g.Pb)
                    }
                }(f))
        }
    };
    _.T(dR, _.V);
    var eR = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        fR = {
            IMG: " ",
            BR: "\n"
        },
        gR = function(a, b, c, d) {
            if (!(a.nodeName in eR))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in fR) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(fR[a.nodeName]);
            else
                for (a = a.firstChild; a;) gR(a, b, c, d), a = a.nextSibling
        },
        hR = / \xAD /g,
        iR = /\xAD/g,
        jR = /\u200B/g,
        kR = / +/g,
        lR = /^\s*/,
        mR = function(a) {
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
        nR = function(a, b) {
            var c = this;
            this.l = a;
            this.g = !1;
            this.j = b;
            this.A = this.j.Ca(264, function(d) {
                c.g && (_.lQ || (d = Date.now()), c.l(d), _.lQ ? _.kQ.call(_.t, c.A) : _.t.setTimeout(c.A, 17))
            })
        };
    nR.prototype.start = function() {
        this.g || (this.g = !0, _.lQ ? _.kQ.call(_.t, this.A) : this.A(0))
    };
    var oR = function(a, b, c, d) {
        this.g = a;
        this.D = b;
        this.Da = c;
        this.progress = 0;
        this.A = null;
        this.C = !1;
        this.l = [];
        this.j = null;
        this.M = new nR((0, _.Lw)(this.H, this), d)
    };
    oR.prototype.H = function(a) {
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
    oR.prototype.I = function() {};
    oR.prototype.o = function() {};
    var pR = function(a) {
        a.C = !1;
        a.M.start()
    };
    oR.prototype.reset = function(a, b, c) {
        this.A = null;
        this.g = a;
        this.D = b;
        this.Da = c;
        this.progress = 0
    };
    var qR = function(a) {
            return a * a * a
        },
        rR = function(a) {
            a = 1 - a;
            return 1 - a * a * a
        },
        sR = function(a, b, c, d, e, f, g, h) {
            oR.call(this, [b], [c], d, f);
            this.J = a;
            this.ia = e;
            this.K = g ? g : null;
            this.j = h || null
        };
    _.T(sR, oR);
    sR.prototype.o = function() {
        var a = {};
        a[this.ia] = _.wI(this.l[0]);
        _.nB(this.J, a)
    };
    sR.prototype.I = function() {
        this.K && this.K()
    };
    var xQ = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.slotType = a;
        this.I = b;
        this.Qh = c;
        this.la = d;
        this.Ba = e;
        this.Df = f;
        this.g = 1;
        this.qem = null;
        this.D = new _.wh;
        this.l = new _.wh;
        this.j = new _.wh
    };
    _.T(xQ, _.V);
    var tR = function(a) {
            return _.rb(function(b) {
                return b.return(a.D.promise)
            })
        },
        uR = function(a) {
            return _.rb(function(b) {
                return b.return(a.l.promise)
            })
        },
        vR = function(a) {
            return _.rb(function(b) {
                return b.return(a.j.promise)
            })
        };
    xQ.prototype.wa = function() {
        var a = this,
            b = wQ(this.I, this.Qh, function(c) {
                if ("adError" === c.eventType) a.j.resolve(), a.g = 4;
                else if ("adReady" === c.eventType && 1 === a.g) a.qem = c.qem, c.slotType !== a.slotType && (wR(a, {
                    cur_st: a.g,
                    evt: c.eventType,
                    adp_tp: c.slotType
                }), a.g = 4), a.D.resolve(), a.g = 2;
                else if ("adClosed" === c.eventType && 2 === a.g) a.l.resolve(c.result), a.g = 3;
                else if ("adClosed" !== c.eventType || 3 !== a.g) wR(a, {
                    cur_st: a.g,
                    evt: c.eventType
                }), a.g = 4
            }, this.la);
        _.jp(this, b)
    };
    var wR = function(a, b) {
        var c = .25;
        c = void 0 === c ? .01 : c;
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = c;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.Df.xm;
        b.version = a.Df.version;
        _.Yi(a.Ba, "fullscreen_tag", b, !1, c)
    };
    var zR = function(a) {
            var b = xR(_.zA(_.tA(a))) || [];
            return !!_.sj(a, function(c) {
                if (!_.ja(c) || 1 != c.nodeType) return !1;
                var d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || 0 <= _.da(b, c) || _.qj(_.LA(yR), function(e) {
                    return d.call(c, e)
                })
            }, !1, 20)
        },
        xR = function(a) {
            var b = uQ(a);
            return b ? _.oj(_.Pw(b.pubads().getSlots(), function(c) {
                return a.document.getElementById(c.getSlotElementId())
            }), function(c) {
                return null != c
            }) : null
        },
        yR = {
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
    var AR = function(a) {
        _.V.call(this);
        var b = new _.wh,
            c = b.resolve;
        this.promise = b.promise;
        a.onmessage = function() {
            return c()
        };
        _.jp(this, function() {
            a.close()
        })
    };
    _.T(AR, _.V);
    var BR = function() {
        var a = new _.wh,
            b = a.resolve;
        return {
            um: function(c, d) {
                null != d && d.ports.length && b(new AR(d.ports[0]))
            },
            tm: a.promise
        }
    };
    var CR = ["mousemove", "mousedown", "scroll", "keydown"],
        ER = function(a) {
            _.V.call(this);
            var b = this;
            this.B = a;
            this.g = [];
            this.l = _.Gx(function() {
                DR(b)
            })
        };
    _.T(ER, _.V);
    ER.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var DR = function(a) {
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
            }, e = _.y(CR), f = e.next(); !f.done; f = e.next()) a.B.addEventListener(f.value, d);
        var g = null,
            h, k;
        (null == (h = a.B.navigator) ? 0 : h.userActivation) && (null == (k = a.B.performance) ? 0 : k.now) && (g = a.B.setInterval(function() {
            a.B.navigator.userActivation.isActive && (c = a.B.performance.now())
        }, 1E3));
        _.jp(a, function() {
            for (var l = _.y(CR), m = l.next(); !m.done; m = l.next()) a.B.removeEventListener(m.value, d);
            g && a.B.clearInterval(g)
        })
    };
    var GR = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.Gx(function() {
            FR(b)
        })
    };
    _.T(GR, _.V);
    GR.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var FR = function(a) {
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
        _.jp(a, function() {
            a.B.removeEventListener("focus", d);
            a.B.removeEventListener("blur", c)
        })
    };
    var HR = function(a, b, c, d, e, f) {
        _.V.call(this);
        var g = this;
        this.Ba = c;
        this.D = d;
        this.j = e;
        this.l = Math.floor(2147483647 * _.nh());
        this.g = function(h, k, l) {
            l = void 0 === l ? {} : l;
            h = _.z(Object, "assign").call(Object, {
                etc: g.l,
                e: h,
                t: Math.round(k),
                qqid: g.D,
                ptt: g.j
            }, l);
            _.Yi(g.Ba, "eit", h, !0, 1)
        };
        this.g(1, b);
        b = _.y(f);
        d = b.next();
        for (c = {}; !d.done; c = {
                Dc: void 0,
                Ff: void 0
            }, d = b.next()) switch (c.Dc = d.value, c.Dc) {
            case 101:
                d = new $Q(a);
                d.K.then(function(h) {
                    return function(k) {
                        return void g.g(h.Dc, k)
                    }
                }(c));
                _.S(this, d);
                break;
            case 102:
                c.Ff = new cR(a);
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
                d = new GR(a);
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
                d = new ER(a);
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
                d = new bR(a), d.listen(function(h) {
                    return function(k) {
                        g.g(h.Dc, k.ec)
                    }
                }(c)), _.S(this, d)
        }
    };
    _.T(HR, _.V);
    var JR = function(a) {
            this.g = null;
            this.l = a.match(_.IA)[3] || "";
            this.j = IR(a);
            this.A = !1
        },
        KR = function(a, b) {
            b ? a.g = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.g = null
        },
        NR = function(a, b, c) {
            if (_.qj(["data-google-vignette", "data-google-interstitial"], function(f) {
                    return "false" === b.getAttribute(f) || b.closest && !!b.closest("[" + f + '="false"]')
                })) return !1;
            var d = b.href,
                e = d && (d.match(_.IA)[3] || null);
            if (!LR(a, b, d, e, c)) return !1;
            a.A = !!e && MR(a, e);
            return a.A || !c && !zR(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
        },
        LR = function(a, b, c, d, e) {
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
            return !d || MR(a, d) && IR(c) == a.j ? !1 : !0
        },
        MR = function(a, b) {
            return b.replace(OR, "") == a.l.replace(OR, "")
        },
        IR = function(a) {
            a = a.match(_.IA);
            var b = a[6];
            return (a[5] || "") + (b ? "?" + b : "") || "/"
        },
        OR = /^(www\.|m\.|mobile\.)*/i;
    var RR = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        _.V.call(this);
        var f = this;
        this.D = a;
        this.fa = b;
        this.la = c;
        this.Ba = d;
        this.Ma = {};
        this.Qd = this.la.Ca(168, function(g, h) {
            return void PR(f, g, h)
        });
        this.cf = this.la.Ca(169, function(g, h) {
            _.Yi(f.Ba, "ras::xsf", {
                c: h.data.substring(0, 500),
                u: f.D.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        });
        this.P = [];
        QR(this, this.Ma, e);
        this.P.push(vQ(this.D, "sth", this.Qd, this.cf))
    };
    _.T(RR, _.V);
    var PR = function(a, b, c) {
        try {
            if (!a.xa(c.origin) || !qQ(c, a.fa.contentWindow)) return
        } catch (f) {
            return
        }
        var d = b.msg_type,
            e;
        "string" === typeof d && (e = a.Ma[d]) && a.la.Db(168, function() {
            e.call(a, b, c)
        })
    };
    RR.prototype.xa = function(a) {
        return _.XA[a] || LQ.test(a) || MQ.test(a) || NQ.test(a)
    };
    RR.prototype.A = function() {
        for (var a = _.y(this.P), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.P.length = 0;
        _.V.prototype.A.call(this)
    };
    var VR = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        var p = {};
        RR.call(this, a, b, c, e, (p.fullscreenApi = h.wj, p.heavyAdInterventionResponse = h.Zk, p));
        var r = this;
        this.o = d;
        this.requestedSize = f;
        this.H = h;
        this.V = l;
        this.g = m;
        this.ob = _.Vf();
        this.ua = "true" === g["i-fvs"];
        this.Rd = g.qid;
        this.C = null != n ? n : new JR(a.location.href);
        this.Hb = "true" === g.iobs && "IntersectionObserver" in this.D;
        var v, w;
        KR(this.C, null != (w = null == (v = g.stop_word) ? void 0 : v.split(";")) ? w : null);
        this.I = this.H.wj ? yQ(a, b.contentWindow, c, e, this.H.Df) : null;
        this.K = {
            vi: !1
        };
        this.j = {};
        this.ra = {
            tag: 0
        };
        this.l = {
            uo: !0,
            Oj: !1,
            Ie: !1,
            og: !0
        };
        SR(this);
        TR(this);
        k.size && (b = new _.wh, b.promise.then(function(C) {
            r.l.Xd || r.M || UR(r, C)
        }), this.bb = new dR(a, k, b), _.S(this, this.bb));
        var x;
        if (null == (x = h.ai) ? 0 : x.length)
            if (k = _.Wf(a)) {
                var B = new HR(a, k, e, this.Rd, 17, h.ai);
                _.S(this, B);
                this.Od = function(C) {
                    B.g(2, C - _.Yf(a))
                }
            }
    };
    _.T(VR, RR);
    var SR = function(a) {
            a.I && (tR(a.I).then(function() {
                zQ(a.o);
                a.ia()
            }), uR(a.I).then(function() {
                return void WR(a)
            }), vR(a.I).then(function() {
                return void a.J()
            }))
        },
        QR = function(a, b, c) {
            b["i-blur"] = function() {
                a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 27
                }));
                a.l.Ie = !0;
                a.l.Wg && (a.l.og = !0)
            };
            b["i-no"] = function(g) {
                a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 26
                }));
                a.ra = {
                    tag: 1,
                    yo: g.i_tslv ? g.i_tslv : void 0
                }
            };
            if (c.heavyAdInterventionResponse) {
                var d = nQ(c.heavyAdInterventionResponse);
                if (d) {
                    var e = BR(),
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
                zQ(a.o);
                a.ia()
            }, b["i-dismiss"] = function() {
                WR(a)
            }, b.i_iif = function() {
                a.J()
            })
        };
    VR.prototype.ia = function() {
        this.K.Gi || (this.K.Gi = _.Vf())
    };
    var WR = function(a) {
        a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 33
        }));
        a.l.Ie ? (YR(a) ? (a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 34
        })), a.D.history.back()) : (a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 35
        })), ZR(a)), a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 36
        }))) : (_.t.setTimeout(function() {
            ZR(a)
        }, 1E3), a.l.Gg ? (a.l.Wg && (a.l.og = !1), $R(a, a.l.Gg)) : a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 37
        })))
    };
    VR.prototype.J = function() {
        this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 23
        }));
        this.K.vi = !0
    };
    var aS = function(a) {
            YR(a) || (a.D.location.hash = "google_vignette");
            a.l.Wg = a.la.Ca(526, function() {
                a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 62
                }));
                a.l.og ? (YR(a) ? (a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 64
                })), $R(a, a.j.Wa.href)) : ZR(a), a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 65
                }))) : a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 63
                }))
            });
            _.t.setTimeout(_.Mw(_.pb, a.D, "hashchange", a.l.Wg), 0)
        },
        bS = function(a, b) {
            a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 10
            }));
            var c = _.Vf(),
                d = _.Bj(a.D).wasReactiveAdVisible[9];
            if (b) {
                var e = a.C;
                if (b && e.g) {
                    var f = [];
                    gR(b, f, !0, !0);
                    b = f.join("");
                    b = b.replace(hR, " ").replace(iR, "");
                    b = b.replace(jR, "");
                    b = b.replace(kR, " ");
                    " " != b && (b = b.replace(lR, ""));
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
            b = a.H.cl || rQ(a.D);
            f = a.requestedSize.width < a.requestedSize.height === _.Ei(a.D);
            if (864E5 <= c - a.ob) return a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
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
            if (!c) return a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 12
            })), !1;
            if (a.K.vi) return a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 13
            })), !1;
            if (YR(a)) return a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 14
            })), !1;
            if (!a.K.Gi) return a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 15
            })), !1;
            if (!a.ua && d) return a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 16
            })), !1;
            a.ua && a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 17
            }));
            d && a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 18
            }));
            if (e.length) return a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 19
            })), !1;
            if (!b) return a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 20
            })), !1;
            if (!f) return a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 21
            })), !1;
            a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 22
            }));
            return !0
        },
        dS = function(a, b) {
            a.l.od = cS(a, b, "prerender");
            a.l.nd = cS(a, b, "prefetch");
            a.D.document.body.appendChild(a.l.od);
            a.D.document.body.appendChild(a.l.nd)
        },
        cS = function(a, b, c) {
            a = _.Zf("LINK", a.D.document);
            a.setAttribute("rel", c);
            a.setAttribute("href", b);
            return a
        },
        eS = function(a, b) {
            for (b = b.target; b;) {
                if ("nodeName" in b && "A" === b.nodeName) {
                    if (NR(a.C, b, b.ownerDocument !== a.D.document)) return b;
                    break
                }
                b = "parentElement" in b ? b.parentElement : null
            }
            return null
        };
    VR.prototype.A = function() {
        this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 24
        }));
        RR.prototype.A.call(this);
        YR(this) && $R(this, this.j.Wa.href);
        this.j.Eb && (_.$f(this.D.document, "click", this.j.Eb), this.j.Eb = void 0);
        this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 25
        }))
    };
    var ZR = function(a) {
            a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 38
            }));
            a.l.Xd ? (a.l.Oj = !0, a.j.Eb && (_.$f(a.D.document, "click", a.j.Eb), a.j.Eb = void 0), a.l.od && a.l.od.parentNode && (a.l.od.parentNode.removeChild(a.l.od), a.l.od = void 0), a.l.nd && a.l.nd.parentNode && (a.l.nd.parentNode.removeChild(a.l.nd), a.l.nd = void 0), fS(a.o, !1), a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 40
            }))) : a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 39
            }))
        },
        TR = function(a) {
            a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 41
            }));
            if (a.j.Eb) a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 42
            }));
            else {
                a.j.Eb = a.la.Ca(527, function(e) {
                    gS(a, e)
                });
                if (null !== a.j.Eb) {
                    var b = a.j.Eb;
                    _.pb(a.D.document, "click", function(e) {
                        b(e)
                    }, FQ)
                }
                for (var c = a.D.frames, d = 0; d < c.length; d++) try {
                    _.pb(c[d].document, "click", a.j.Eb, FQ)
                } catch (e) {}
                a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 43
                }))
            }
        },
        $R = function(a, b) {
            a = a.D.location;
            b = _.Sa(b);
            b = _.$a(b);
            void 0 !== b && a.replace(b)
        },
        UR = function(a, b) {
            a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 28
            }));
            if (bS(a)) {
                b = 1 === b;
                if (a.H.Ak) {
                    var c;
                    (c = a.l).Ie || (c.Ie = !b)
                }
                if (a.jb()) {
                    a.l.Xd = Date.now();
                    _.Bj(a.D).wasReactiveAdVisible[8] = !0;
                    b && a.j.Wa && (a.l.Gg = a.j.Wa.href);
                    hS(a);
                    a.j.Wa && dS(a, a.j.Wa.href);
                    aS(a);
                    _.pb(a.D, "pagehide", a.la.Ca(528, function() {
                        ZR(a)
                    }));
                    if (b) {
                        var d;
                        null == (d = a.Od) || d.call(a, a.l.Xd)
                    }
                    fS(a.o, !0);
                    var e;
                    null == (e = a.bb) || e.za();
                    a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                        U: 32
                    }))
                } else a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 30
                })), b && a.j.Wa && (a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 31
                })), $R(a, a.j.Wa.href))
            } else a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 29
            }))
        };
    VR.prototype.qc = function(a) {
        this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 54
        }));
        this.l.Xd ? this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 56
        })) : this.M ? this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 57
        })) : this.j.Wa ? a.preventDefaultTriggered ? (this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 59
        })), this.j.Wa = void 0) : NR(this.C, this.j.Wa, this.j.Wa.ownerDocument !== this.D.document) ? bS(this) ? (UR(this, 1), this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 61
        }))) : (this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 60
        })), $R(this, this.j.Wa.href)) : (this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 55
        })), $R(this, this.j.Wa.href)) : this.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 58
        }))
    };
    VR.prototype.jb = function() {
        return !0
    };
    var gS = function(a, b) {
            a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 44
            }));
            if (b)
                if (b.defaultPrevented) a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 46
                }));
                else if (a.l.Xd) a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 50
            }));
            else if (a.l.Gg) a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 51
            }));
            else if (a.M) a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 47
            }));
            else if (a.j.Wa) a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 52
            }));
            else {
                var c = eS(a, b);
                c ? bS(a, c) ? (a.j.Wa = c, OQ(b), b.preventDefault = function() {
                    return b && (b.preventDefaultTriggered = !0)
                }, _.t.setTimeout((0, _.Lw)(a.qc, a, b), 0), a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 53
                }))) : a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 49
                })) : a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 48
                }))
            } else a.V.log(578856259, _.nj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 45
            }))
        },
        YR = function(a) {
            return -1 !== a.D.location.hash.indexOf("google_vignette")
        },
        hS = function(a) {
            if (!a.Hb)
                if (a.I) _.t.IntersectionObserver || a.I.Qh.postMessage(JSON.stringify({
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
    var jS = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.g = a;
        this.l = b;
        this.j = c;
        _.pb(this.g, this.l, this.j, FQ);
        _.jp(this, function() {
            return void iS(d)
        })
    };
    _.T(jS, _.V);
    var iS = function(a) {
            a.g && _.$f(a.g, a.l, a.j, FQ)
        },
        kS = function(a) {
            this.l = a;
            this.reset()
        };
    kS.prototype.add = function(a) {
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
    kS.prototype.reset = function() {
        this.g = [];
        this.A = 0
    };
    var mS = function(a, b, c, d) {
        _.V.call(this);
        var e = this;
        this.D = a;
        this.target = b;
        this.handle = c || b;
        this.bb = d || 100;
        this.o = this.K = this.fa = !1;
        this.I = this.g = this.l = this.j = this.ia = this.H = this.P = this.J = null;
        this.pb = new jS(this.handle, "mousedown", function(f) {
            0 == f.button && lS(e, f)
        });
        _.S(this, this.pb);
        this.Hb = new jS(this.handle, "touchstart", function(f) {
            return lS(e, f)
        });
        _.S(this, this.Hb);
        this.ob = new jS(this.handle, "click", function(f) {
            e.fa ? (e.onClick(), e.fa = !1) : f.stopPropagation()
        });
        _.S(this, this.ob)
    };
    _.T(mS, _.V);
    var oS = function(a) {
        a = a.touches && a.touches[0] || a;
        return new _.Hm(a.clientX, a.clientY)
    };
    mS.prototype.ga = function() {
        if (this.j && this.l && this.g) {
            var a = this.j,
                b = GQ(this.g, this.l);
            var c = new _.Hm(a.x + b.x, a.y + b.y);
            a = this.target;
            c instanceof _.Hm ? (b = c.x, c = c.y) : (b = c, c = void 0);
            a.style.left = _.uB(b, !1);
            a.style.top = _.uB(c, !1)
        }
    };
    mS.prototype.ka = function() {};
    mS.prototype.onClick = function() {};
    mS.prototype.W = function() {
        var a = this.target,
            b = _.DA(a);
        var c = PQ(a);
        b = PQ(b);
        c = new _.Hm(c.x - b.x, c.y - b.y);
        a = SQ(a, "margin");
        return GQ(c, new _.Hm(a.left, a.top))
    };
    var lS = function(a, b) {
        a.K && pS(a);
        a.K = !0;
        a.j = a.W();
        a.l = oS(b);
        a.g = a.l;
        a.I = new kS(a.bb);
        a.I.add(a.l);
        a.J = new jS(a.D, "mousemove", (0, _.Lw)(a.xa, a));
        _.S(a, a.J);
        a.P = new jS(a.D, "touchmove", (0, _.Lw)(a.xa, a));
        _.S(a, a.P);
        a.H = new jS(a.D, "mouseup", (0, _.Lw)(a.Ma, a));
        _.S(a, a.H);
        a.ia = new jS(a.D, "touchend", (0, _.Lw)(a.Ma, a));
        _.S(a, a.ia)
    };
    mS.prototype.xa = function(a) {
        if (this.K)
            if (a.preventDefault(), this.g = oS(a), this.I.add(this.g), this.o) this.ga();
            else {
                var b = this.l,
                    c = this.g;
                a = b.x - c.x;
                b = b.y - c.y;
                10 <= Math.sqrt(a * a + b * b) && (this.ga(), this.o = !0)
            }
    };
    mS.prototype.Ma = function(a) {
        this.o ? (a.preventDefault(), this.g = oS(a), this.ka()) : this.fa = !0;
        pS(this)
    };
    var pS = function(a) {
        a.K = !1;
        a.o = !1;
        a.j = null;
        a.l = null;
        a.g = null;
        a.I = null;
        a.J && iS(a.J);
        a.P && iS(a.P);
        a.H && iS(a.H);
        a.ia && iS(a.ia)
    };
    var tS = function(a, b, c, d, e, f, g, h, k, l, m, n) {
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
        _.jp(this, function() {
            return qS(p, !0)
        });
        this.C = _.Zf("INS", b.document);
        _.jp(this, function() {
            return p.C = null
        });
        this.I = null;
        HTMLElement.prototype.attachShadow && !this.la.Db(1013, function() {
            p.I = _.Zf("DIV", b.document);
            p.I.className = "grippy-host";
            p.I.attachShadow({
                mode: "closed"
            }).appendChild(p.C);
            _.jp(p, function() {
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
        this.ob = new _.PH(b);
        !this.W && _.t.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(function() {
            var r = p.pa.innerHeight;
            if (2 > Math.abs(r - 460) || 2 > Math.abs(r - 529)) r < p.sa && 2 > Math.abs(_.Ni(p.pa) - p.ia - 68) && (p.ga = !0, 0 === p.j && rS(p)), p.sa = r
        }, 300);
        sS(this, this.C)
    };
    _.T(tS, _.V);
    var uS = function(a, b) {
            if ("top" == a.g) {
                var c;
                _.pp(null != (c = a.I) ? c : a.C, {
                    top: _.wI(b)
                })
            }
        },
        sS = function(a, b) {
            tQ(b);
            _.pp(b, {
                "background-color": "#FAFAFA",
                display: "block",
                position: "relative",
                "z-index": 1,
                height: _.wI(5),
                "box-shadow": "top" == a.g ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
            });
            if ("top" == a.g) {
                var c, d, e = {
                        position: "absolute",
                        top: _.wI(null != (d = null == (c = a.o) ? void 0 : c.maxHeight) ? d : a.K.height),
                        width: "100%"
                    },
                    f;
                _.pp(null != (f = a.I) ? f : b, e)
            }
            var g = _.Zf("SPAN", a.pa.document);
            g.appendChild(vS(a));
            var h = function(k) {
                k.target === g && (k.preventDefault && k.preventDefault(), k.stopImmediatePropagation && k.stopImmediatePropagation(), k.stopPropagation && k.stopPropagation())
            };
            _.pb(g, "click", h);
            _.jp(a, function() {
                return _.$f(g, "click", h)
            });
            wS(a, g);
            b.className = "ee";
            b.appendChild(g)
        },
        wS = function(a, b) {
            var c = {};
            a = (c.display = "block", c.width = "80px", c.height = "45px", c[a.g] = "0", c.left = "0%", c.marginLeft = "0px", c["pointer-events"] = "none", c);
            c = b.getElementsByTagName("svg")[0];
            _.pp(b, a);
            sQ(c)
        },
        xS = function(a) {
            var b;
            return null != (b = a.I) ? b : a.C
        },
        vS = function(a) {
            switch (a.g) {
                case "top":
                    var b = "dropShadowBottom";
                    var c = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                    var d = "0";
                    var e = "up";
                    var f = AQ;
                    break;
                case "bottom":
                    b = "dropShadowTop", c = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", d = "25", e = "down", f = BQ
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
        yS = function(a, b) {
            for (var c = a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0], d; d = c.firstChild;) c.removeChild(d);
            switch (a.g) {
                case "top":
                    (b ? BQ : AQ)(c);
                    break;
                case "bottom":
                    (b ? AQ : BQ)(c)
            }
        },
        zS = function(a, b, c, d) {
            b = {
                i: b,
                dc: 0 === a.j ? "1" : "0",
                fdc: c ? "1" : "0",
                ds: a.W ? "1" : "0",
                expId: a.jb,
                sc: a.ka ? "1" : "0",
                off: d,
                vw: _.Fi(a.pa),
                req: a.H.src,
                tp: a.g,
                h: a.K.height,
                w: a.K.width,
                qemId: a.bb
            };
            _.Yi(a.Ba, "flgr", b, !0, 1)
        };
    tS.prototype.onClick = function(a) {
        a.preventDefault();
        this.D || (this.ga = !0, rS(this), zS(this, "c", 0 !== this.j, 0))
    };
    var rS = function(a, b) {
            b = void 0 === b ? a.W : b;
            switch (a.j) {
                case 1:
                    a.show();
                    break;
                case 2:
                    AS(a);
                    break;
                case 0:
                    a.o ? AS(a) : a.show();
                    break;
                case 3:
                    qS(a, b);
                    break;
                case 4:
                    a.show()
            }
        },
        BS = function(a) {
            var b = a.o.maxHeight;
            4 !== a.j && (a.l.style[a.g] = "-" + (b - (parseInt(a.l.style.height, 10) + parseInt(a.l.style[a.g], 10))) + "px");
            a.l.style.height = b + "px";
            a.H.style["max-height"] = "none";
            a.H.height = "100%";
            uS(a, b);
            null != (a = a.P) && (a.C = b)
        },
        DS = function(a, b) {
            "bottom" == a.g && UQ(a.pa) && a.la.Db(404, function() {
                return CS(a, "0px", b, "ease-out")
            })
        };
    tS.prototype.show = function() {
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
                        uS(a, g);
                        var h;
                        null != (h = a.P) && (h.C = g)
                    }
                    a.D = !1;
                    a.J = !1;
                    ES(a);
                    a.l.setAttribute("data-anchor-status", "displayed");
                    a.l.setAttribute("data-anchor-shown", !0);
                    yS(a, !1)
                };
                this.D = !0;
                if (c && !b) {
                    var e = -c / .1;
                    DS(this, e);
                    yS(this, !1);
                    c = new sR(this.l, c, 0, e, this.g, this.la, d, rR);
                    this.fa();
                    pR(c)
                } else if (b) {
                    var f = this.o.maxHeight;
                    e = this.K.height - f;
                    f = (f + c > this.K.height ? -1 : 1) * (e - c) / .1;
                    DS(this, f);
                    c === e ? d() : (c = new sR(this.l, c, e, f, this.g, this.la, d, rR), this.fa(), pR(c))
                }
            } else this.J = !1
        }
    };
    var AS = function(a) {
            if (!a.D) {
                BS(a);
                var b = parseInt(a.l.style[a.g], 10),
                    c = function() {
                        a.D = !1;
                        a.j = 4;
                        a.J = !1;
                        ES(a);
                        a.l.setAttribute("data-anchor-status", "displayed");
                        a.l.setAttribute("data-anchor-shown", !0);
                        yS(a, !1)
                    };
                if (b) {
                    a.D = !0;
                    var d = -b / .1;
                    DS(a, d);
                    yS(a, !1);
                    b = new sR(a.l, b, 0, d, a.g, a.la, c, rR);
                    a.fa();
                    pR(b)
                } else c()
            }
        },
        qS = function(a, b) {
            if (!a.D && a.l) {
                var c = parseInt(a.l.style[a.g], 10),
                    d = -(4 === a.j ? a.o.maxHeight : a.K.height) - (b ? 30 : 0),
                    e = (c - d) / .1;
                "bottom" == a.g && UQ(a.pa) && a.la.Db(405, function() {
                    return CS(a, "21px", e, "ease-in")
                });
                b || yS(a, !0);
                c === d ? (b || (a.j = 0), a.J = b) : (a.D = !0, c = new sR(a.l, c, d, e, a.g, a.la, function() {
                    a.D = !1;
                    b || (a.j = 0);
                    (a.J = b) || yS(a, !0);
                    b && a.Ma();
                    a.l.setAttribute("data-anchor-status", "dismissed")
                }, qR), a.xa(), pR(c))
            }
        },
        HS = function(a, b) {
            if ("bottom" !== a.g && "top" !== a.g) throw Error("unsupported reactive type");
            var c = function(k) {
                    return a.onClick(k)
                },
                d = a.C;
            _.pb(d, "click", c);
            _.jp(a, function() {
                return _.$f(d, "click", c)
            });
            a.I && (_.pb(a.I, "click", c), _.jp(a, function() {
                return a.I && _.$f(a.I, "click", c)
            }));
            _.nB(b, {
                opacity: 1
            });
            var e = a.pa.document;
            if (e) {
                a.l = b;
                var f, g, h = null != (g = null == (f = a.o) ? void 0 : f.maxHeight) ? g : a.K.height;
                a.pb && (a.P = new("top" == a.g ? FS : GS)(a, e, h, b, a.C), _.S(a, a.P));
                e = {
                    position: "fixed",
                    left: _.wI(0)
                };
                e[a.g] = _.wI(-h - 30);
                _.nB(b, e);
                _.pp(b, {
                    overflow: "visible",
                    background: "#FAFAFA"
                });
                _.TH(a.ob, function(k) {
                    var l = null == a.ua ? 2147483647 : a.ua;
                    _.nB(b, {
                        zIndex: null == k ? l : Math.min(k, l)
                    })
                });
                rS(a)
            }
        },
        CS = function(a, b, c, d) {
            _.nB(a.H, {
                transition: c / 1E3 + "s",
                "transition-timing-function": d,
                "margin-top": b
            })
        },
        ES = function(a) {
            a.ra();
            a.ra = function() {}
        },
        IS = function(a, b, c, d, e) {
            mS.call(this, b, d, e);
            this.jb = a;
            this.C = c
        };
    _.T(IS, mS);
    IS.prototype.ka = function() {
        var a = this.jb;
        if (!a.D) {
            var b = parseInt(a.l.style[a.g], 10),
                c = b + parseInt(a.l.style.height, 10),
                d = a.K.height / 2;
            c >= (a.o ? a.o.maxHeight / 2 : _.z(Number, "MAX_SAFE_INTEGER")) ? (AS(a), zS(a, "d", !1, b)) : c >= d ? (a.show(), zS(a, "d", !1, b)) : (qS(a, a.W), zS(a, "d", !0, b))
        }
    };
    IS.prototype.ga = function() {
        if (null !== this.j && null !== this.l && null !== this.g) {
            var a = this.ua(this.j.y, GQ(this.g, this.l).y);
            0 < a && (a = 0);
            a < -this.C && (a = -this.C);
            var b = {};
            b[this.ra()] = _.wI(a);
            _.nB(this.target, b)
        }
    };
    var FS = function(a, b, c, d, e) {
        IS.call(this, a, b, c, d, e)
    };
    _.T(FS, IS);
    FS.prototype.W = function() {
        return new _.Hm(0, parseInt(this.target.style.top, 10))
    };
    FS.prototype.ua = function(a, b) {
        return b - a
    };
    FS.prototype.ra = function() {
        return "top"
    };
    var GS = function(a, b, c, d, e) {
        IS.call(this, a, b, c, d, e)
    };
    _.T(GS, IS);
    GS.prototype.W = function() {
        return new _.Hm(0, parseInt(this.target.style.bottom, 10))
    };
    GS.prototype.ua = function(a, b) {
        return a - b
    };
    GS.prototype.ra = function() {
        return "bottom"
    };
    var PS = function(a, b, c, d, e, f, g, h) {
        g = void 0 === g ? !1 : g;
        h = void 0 === h ? null : h;
        _.mQ.call(this, a, b, f);
        var k = this;
        this.la = d;
        this.Ba = e;
        this.C = this.qc = this.Hb = 0;
        this.ob = this.yj = !1;
        this.D = null;
        this.W = this.ua = !1;
        this.J = null;
        this.ra = SQ(b.document.body, "padding");
        this.o = SQ(b.document.body, "padding");
        this.ia = 0;
        this.Ki = this.H = !1;
        this.ka = !0;
        this.I = c;
        this.K = JS(this);
        this.fa = null;
        this.Qd = this.Rd = this.xa = this.jb = this.bb = this.Hi = this.zj = this.Cj = !1;
        this.Ij = _.xA(b || window).height / 2;
        this.Ej = _.xA(b || window).height;
        this.Di = HQ(b);
        this.Ci = this.ga = this.uc = !1;
        this.cf = g;
        this.Rm = h;
        KS(this);
        this.Mi = this.la.Ca(266, function() {
            LS(k)
        });
        this.Qi = this.la.Ca(267, function() {
            LS(k)
        });
        this.Wi = this.la.Ca(268, function() {
            if (k.H && k.l && k.D) {
                var l = k.D;
                l.ia = _.Ni(l.pa)
            }
            l = _.Ni(k.g);
            var m = l - k.Hb;
            MS(k, m);
            k.xa && (0 < m && (k.C += m), k.uc = k.Di - l <= k.Ej, k.Hb = l);
            LS(k)
        });
        this.Xi = this.la.Ca(269, function() {
            NS(k)
        });
        this.ej = this.la.Ca(270, function(l) {
            OS(k, l)
        });
        this.oj = this.la.Ca(271, function(l) {
            if (l && l.touches) {
                k.J = "touchmove";
                k.ia = l.touches.length;
                k.W = !0;
                LS(k);
                if (!k.yj && l.touches && 0 != l.touches.length && l.touches[0]) {
                    l = l.touches[0].pageY;
                    var m = l - k.qc;
                    k.qc = l;
                    l = m
                } else l = 0;
                0 < l && (k.C += l);
                MS(k, l)
            }
        });
        this.tj = this.la.Ca(272, function(l) {
            l && l.touches && l.touches[0] && (k.J = "touchstart", k.ia = l.touches.length, k.W = !1, LS(k), k.qc = l.touches[0].pageY, l = (l = l.target) && "top" == k.I && k.ua && k.D && xS(k.D) && 1 === l.nodeType ? _.EA(xS(k.D), l) : !1, k.yj = l)
        });
        this.Od = this.la.Ca(273, function() {
            k.bb || (k.bb = !0, _.$f(k.j, "load", k.Od), k.jb && !k.Ki || LS(k))
        });
        _.pb(a, "load", this.Od);
        _.jp(this, function() {
            return _.$f(a, "load", k.Od)
        })
    };
    _.T(PS, _.mQ);
    var RS = function(a) {
            var b = a.g;
            _.pb(b, "orientationchange", a.Mi);
            _.pb(b, "resize", a.Qi);
            _.pb(b, "scroll", a.Wi);
            _.pb(b, "touchcancel", a.Xi);
            _.pb(b, "touchend", a.ej);
            _.pb(b, "touchmove", a.oj);
            _.pb(b, "touchstart", a.tj);
            _.jp(a, function() {
                return QS(a)
            })
        },
        QS = function(a) {
            var b = a.g;
            _.$f(b, "orientationchange", a.Mi);
            _.$f(b, "resize", a.Qi);
            _.$f(b, "scroll", a.Wi);
            _.$f(b, "touchcancel", a.Xi);
            _.$f(b, "touchend", a.ej);
            _.$f(b, "touchmove", a.oj);
            _.$f(b, "touchstart", a.tj)
        };
    PS.prototype.Kj = function(a) {
        var b = this.l;
        if (b && !this.D) {
            for (var c in SS) !SS.hasOwnProperty(c) || c in a || (a[c] = SS[c]);
            this.Cj = "true" === a.use_manual_view || "top" === this.I || !!_.Bj(this.g).wasReactiveAdConfigReceived[2];
            this.zj = "true" === a.use_important;
            if (c = a.af_l) this.jb = "true" === c;
            this.Ci = (this.xa = "true" === a.wait_for_scroll || "top" == this.I) && ("true" === a.tsec || "top" == this.I);
            TS(this, a);
            this.D = US(this, a);
            this.fa = VS(this);
            this.uc = this.Ej >= this.Di;
            a = this.l;
            c = this.D && xS(this.D);
            a && c && ("top" == this.I ? a.appendChild(c) : a.insertBefore(c, a.firstChild));
            RS(this);
            this.ua = !0;
            b.setAttribute("data-anchor-status", "ready-to-display")
        }
    };
    var VS = function(a) {
            var b = a.K.height + 5;
            "bottom" == a.I && UQ(a.g) && (b += 20);
            return new _.Lm(a.K.width, b)
        },
        TS = function(a, b) {
            var c = parseInt(b.ht, 10),
                d = 0 < c ? c : null;
            b = parseInt(b.wd, 10);
            var e = 0 < b ? b : null;
            null != d && (a.K.height = d);
            null != e && (a.K.width = e);
            EQ(a, function(f) {
                CQ(f, e, d)
            }, !1, !0);
            CQ(a.j, e, d)
        },
        US = function(a, b) {
            b = new tS(b, a.g, a.j, a.K, a.I, function() {
                if (!a.ob) {
                    a.ob = !0;
                    QS(a);
                    var c = a.l;
                    _.CA(c);
                    WS(a, a.ra, !0, !0);
                    c && (c.style.display = "none")
                }
            }, function() {
                return void XS(a)
            }, a.la, a.Ba, function() {
                a.ga || (a.ga = !0, MS(a, null));
                _.GJ(a.L, a.slotId)
            }, function() {
                a.ga && (a.ga = !1, MS(a, null));
                a.Hj && _.HJ(a.L, a.slotId)
            }, a.Rm);
            _.S(a, b);
            return b
        },
        KS = function(a) {
            if (a.ka) {
                var b = a.l;
                b && (b.style.display = "none");
                WS(a, a.ra, !0, !0);
                a.ka = !1
            }
        };
    PS.prototype.Ma = function() {
        this.Ki = !0;
        if (!this.H && YS(this) && (this.bb || !this.jb)) {
            var a = this.l;
            a && (ZS(this), EQ(this, function(b) {
                tQ(b)
            }, !0), HS(this.D, a), $S(this), this.H = !0, (a = this.j.contentWindow) && TQ(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    };
    var $S = function(a) {
            var b = a.l;
            if (b) {
                var c = a.D,
                    d = c.pa,
                    e = _.Ni(d);
                if (!(10 > Math.abs(e - c.ia))) {
                    var f = 10 > e;
                    d = e + 10 + _.Ki(d) > _.Mi(d);
                    f = f || d;
                    c.ka || c.ga || c.D || (0 === c.j || f ? 0 === c.j && f && rS(c) : rS(c, !1));
                    c.ia = e
                }
                a.ka || (aT(a), c = SQ(a.g.document.body, "padding"), "bottom" == a.I && (c.bottom += a.fa.height + 25), WS(a, c), b.style.display = "block", a.ka = !0)
            }
        },
        ZS = function(a) {
            var b = a.l;
            if (b && a.j.parentElement) {
                QQ(b, a.fa);
                var c = a.g.innerWidth;
                _.Ji(a.g).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
                bT(a)
            }
        },
        bT = function(a) {
            EQ(a, function(c) {
                QQ(c, a.K);
                c.style.width = "100%"
            }, !1, !0);
            a.j.style.display = "block";
            a.j.style.margin = "0 auto";
            if (a.zj) {
                var b = a.l;
                IQ(b, function(c) {
                    sQ(c, function(d) {
                        return c === b && /display|bottom/i.test(d) ? !1 : !0
                    });
                    if ("svg" === c.nodeName) return !1
                })
            }
        },
        aT = function(a) {
            if ("bottom" !== a.I && "top" !== a.I) throw Error("Unexpected position: " + a.I);
        },
        JS = function(a) {
            aT(a);
            var b = a.g.innerWidth;
            a = _.Jm(_.vB, a.j).height || +a.j.height || 0;
            return new _.Lm(b, a)
        },
        NS = function(a) {
            a.J = "touchcancel";
            _.t.setTimeout(a.la.Ca(274, function() {
                "touchcancel" === a.J && (a.ia = 0, a.W = !1, LS(a))
            }), 1E3)
        },
        OS = function(a, b) {
            if (b && b.touches) {
                a.J = "touchend";
                var c = b.touches.length;
                2 > c ? _.t.setTimeout(a.la.Ca(256, function() {
                    "touchend" === a.J && (a.ia = c, a.W = !1, LS(a))
                }), 1E3) : (a.ia = c, LS(a));
                !a.H || a.cf || rQ(a.g) || qS(a.D, !0)
            }
        },
        MS = function(a, b) {
            var c = a.ka ? cT(a, a.ga) : a.ra.top;
            if ("top" === a.I && a.g.document.body && a.ua && a.D && a.H && a.o.top !== c && 0 !== b) {
                var d = _.hB(a.o);
                null === b ? (d.top = c, WS(a, d)) : (0 < b && a.o.top > c && (d.top = Math.max(c, a.o.top - b), WS(a, d, !1)), 0 > b && a.o.top < c && (d.top = Math.min(c, a.o.top - b), WS(a, d, !1)))
            }
        },
        WS = function(a, b, c, d) {
            var e = a.o.top - b.top,
                f = _.Ni(a.g);
            f < e && (void 0 === d || !d) || (d = a.g.document.body, d.style.paddingTop = _.wI(b.top), d.style.paddingRight = _.wI(b.right), d.style.paddingBottom = _.wI(b.bottom), d.style.paddingLeft = _.wI(b.left), a.o = b, (void 0 === c || c) && a.g.scrollTo(0, f - e))
        },
        LS = function(a) {
            !a.ua || a.ob || 2 <= a.ia && a.W || !YS(a) ? KS(a) : (a.Ma(), $S(a))
        };
    PS.prototype.pb = function() {
        return _.Ei(this.g)
    };
    PS.prototype.Gj = function() {
        this.Rd = !0;
        var a;
        null == (a = this.l) || a.removeAttribute("data-anchor-status")
    };
    PS.prototype.Lj = function() {
        this.Qd = !0;
        var a = this.l;
        this.Rd && this.Qd && (null == a || a.setAttribute("data-anchor-status", "ready-to-display"))
    };
    var YS = function(a) {
            if (!a.pb() || a.Rd && !a.Qd) return !1;
            var b = a.g;
            if (!a.H && a.xa) switch (a.Ci && (a.C += Math.max(_.Ni(a.g) - a.Hb, 0)), a.I) {
                case "bottom":
                    return a.C >= a.Ij || a.uc;
                case "top":
                    return a.C > cT(a)
            }
            return a.cf || rQ(b)
        },
        cT = function(a, b) {
            return (void 0 === b ? 0 : b) ? a.ra.top + 30 : a.ra.top + 30 + a.fa.height - 5
        },
        XS = function(a) {
            a.Cj && !a.Hi && (a.Hi = !0, a.la.Db(257, function() {
                var b = {
                        msg_type: "manual-send-view"
                    },
                    c = a.j.contentWindow;
                c && c.postMessage(a.g.JSON.stringify(b), "*")
            }))
        };
    PS.prototype.Jj = function(a, b) {
        this.j = a;
        if (b && (this.K.height !== b.height || this.K.width !== b.width)) {
            a = b.height - this.K.height;
            var c = {};
            TS(this, (c.ht = b.height, c.wd = b.width, c));
            this.fa = VS(this);
            ZS(this);
            MS(this, a);
            var d;
            null == (d = this.D) || uS(d, b.height)
        }
        bT(this)
    };
    var SS = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    var dT = function() {
            this.g = null
        },
        eT = function(a, b, c) {
            a.g = _.cI(b, c);
            if (b = !!a.g) a = a.g, b = !!a && 1 > a.length;
            return b
        };
    var fT = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        _.mQ.call(this, a, b, c);
        this.D = null;
        this.I = b.document;
        this.H = d;
        this.K = _.RH(new _.PH(b), 2147483646);
        this.C = e;
        this.o = b
    };
    _.T(fT, _.mQ);
    var iT = function(a) {
            fS(a, !1);
            var b = a.l;
            if (b) {
                var c = DQ(a.o, a.C);
                EQ(a, function(d) {
                    _.pp(d, c);
                    tQ(d)
                }, !0);
                a.j.setAttribute("width", "");
                a.j.setAttribute("height", "");
                _.nB(a.j, c);
                _.nB(a.j, gT);
                _.nB(b, hT);
                _.nB(b, {
                    background: "transparent"
                });
                _.pp(b, {
                    display: "none",
                    position: "fixed"
                });
                tQ(b);
                tQ(a.j);
                1 >= _.Li(a.o) || (_.nB(b, {
                    overflow: "scroll",
                    "max-width": "100vw"
                }), sQ(b))
            }
        },
        fS = function(a, b) {
            var c = a.l;
            c && (b ? (_.VH(a.K), _.pp(c, {
                display: "block"
            }), a.I.body && !a.D && (a.D = _.bI(a.I, a.g, a.H)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.I.body.setAttribute("aria-hidden", "true")) : (_.WH(a.K), _.pp(c, {
                display: "none"
            }), a.D && (a.D(), a.D = null), a.I.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
        },
        hT = {
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
        gT = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var jT = function(a, b, c, d, e, f, g, h) {
        PS.call(this, c, d, 2 === b ? "top" : "bottom", new _.oJ(a), new _.cH, e, _.E(_.pq), h ? {
            maxHeight: _.Ey(h, 1)
        } : null);
        this.L = f;
        this.slotId = g;
        this.Hj = !!_.xq(this.L, this.slotId);
        2 === b && _.GJ(this.L, this.slotId)
    };
    _.T(jT, PS);
    jT.prototype.pb = function() {
        return 0 === (0, _.Op)() || PS.prototype.pb.call(this)
    };
    var kT = function(a, b, c) {
        fT.call(this, b, a, c, _.Lf(_.FD), _.E(_.kq));
        iT(this)
    };
    _.T(kT, fT);
    var lT = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        var r = [];
        _.E(_.BD) && 0 === (0, _.Op)() && r.push(101);
        _.E(_.CD) && r.push(102);
        h = _.E(_.ED) ? mR(h) : new _.u.Set(_.E(_.KD) ? [2] : []);
        VR.call(this, b, c, e, new kT(b, c, d), new _.cH, f, g, {
            wj: _.E(_.DD),
            ai: r,
            Ak: !0,
            Df: {
                xm: 3,
                version: "m202403070101"
            },
            cl: _.E(_.kq),
            Zk: _.E(_.HD) ? m : null
        }, h, a.V, a);
        this.ga = k;
        this.uc = l;
        this.ka = n;
        this.W = p;
        _.S(this, this.o)
    };
    _.T(lT, VR);
    lT.prototype.jb = function() {
        var a;
        if (!(a = this.ga)) {
            var b = _.Jf(dT),
                c = this.W;
            try {
                if (c && eT(b, c, this.ka)) {
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
    lT.prototype.xa = function() {
        return !0
    };
    lT.prototype.J = function() {
        VR.prototype.J.call(this);
        this.uc()
    };
    lT.prototype.pb = function() {
        return this.ga || eT(_.Jf(dT), this.W, this.ka)
    };
    var mT = {
        Nk: jT,
        el: lT
    };
    _.YO(_m, _.yN).resolve(mT);
})