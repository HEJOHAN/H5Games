window.googletag && typeof googletag._gpt_js_load_2_ == 'function' && googletag._gpt_js_load_2_(function(_, _m) {
    var aR = function(a) {
            var b = _.Ff();
            if ("function" !== typeof a) throw b = b ? b() + "\n" : "", Error(b + String(a));
            return a
        },
        cR = function(a) {
            if (!bR.test(a)) return null;
            a = Number(a);
            return isNaN(a) ? null : a
        },
        dR = function(a, b) {
            return a && a.source ? a.source === b || a.source.parent === b : !1
        },
        eR = function(a) {
            a = _.Oi(a);
            return .05 > Math.abs(a - 1)
        },
        gR = function(a) {
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
            fR(a)
        },
        jR = function(a) {
            var b = _.gj(new _.hj, a.pb);
            b = _.kj(b, 11, a.Ea);
            b = _.lj(b, 8, a.pvsid);
            b = _.lj(b, 7, a.Qf);
            b = _.kj(b, 9, a.Hb);
            var c = _.sq(b, hR, 6, _.jj);
            c = _.kj(c, 2, a.yf);
            c = _.mj(c, iR, 1);
            _.gi(c, 1, a.Tm);
            c = _.mj(b, _.nj, 5);
            _.Me(c, 1, _.Vc, a.fb);
            return b
        },
        kR = function(a) {
            var b;
            a = (null != (b = void 0 === a ? null : a) ? b : window).googletag;
            return (null == a ? 0 : a.apiReady) ? a : void 0
        },
        mR = function(a, b, c, d) {
            return lR(a, "fullscreen", d.Ba(952, function(e, f) {
                if (f.source === b) {
                    if (!("eventType" in e)) throw Error("bad message " + JSON.stringify(e));
                    delete e.googMsgType;
                    c(e)
                }
            }))
        },
        oR = function(a, b, c, d, e) {
            a = new nR(1, a, b, c, d, e);
            a.va();
            return a
        },
        pR = function(a) {
            var b;
            null == (b = a.l) || b.setAttribute("data-vignette-loaded", "true")
        },
        qR = function(a) {
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
        rR = function(a) {
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
        sR = function(a, b, c) {
            null !== b && null !== cR(a.getAttribute("width")) && a.setAttribute("width", String(b));
            null !== c && null !== cR(a.getAttribute("height")) && a.setAttribute("height", String(c));
            null !== b && (a.style.width = _.dJ(b));
            null !== c && (a.style.height = _.dJ(c))
        },
        tR = function(a, b) {
            a = _.Ti(a);
            b = b ? 100 * (1 > a ? 1 : a) : 100;
            return {
                width: b + "vw",
                height: b + "vh"
            }
        },
        iR = function(a) {
            this.F = _.A(a)
        };
    _.T(iR, _.D);
    var hR = function(a) {
        this.F = _.A(a)
    };
    _.T(hR, _.D);
    var uR = function(a, b, c, d) {
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
        vR = {
            capture: !0
        },
        wR = function(a, b) {
            return new _.Nm(a.x - b.x, a.y - b.y)
        },
        xR = function(a) {
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
        bR = /^(-?[0-9.]{1,30})$/,
        yR = function(a, b) {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !== b(c) && (c = _.sj(c.children || c.childNodes || [], function(d) {
                    return 1 === d.nodeType
                }), c.length && a.unshift.apply(a, _.xi(c)))
            }
        },
        zR = function(a) {
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
        AR = function(a, b) {
            if ("length" in a.style) {
                a = a.style;
                for (var c = a.length, d = 0; d < c; d++) {
                    var e = a[d];
                    b(a[e], e, a)
                }
            } else a = zR(a.style.cssText), _.Jn(a, b)
        },
        fR = function(a, b) {
            b = void 0 === b ? function() {
                return !0
            } : b;
            var c = /!\s*important/i;
            AR(a, function(d, e) {
                !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
            })
        },
        BR = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        CR = /.*domain\.test$/,
        DR = /\.prod\.google\.com(:\d+)?$/,
        ER = function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        FR = function(a) {
            if (1 == a.nodeType) return _.QB(a);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new _.Nm(a.clientX, a.clientY)
        },
        GR = function(a, b) {
            if (b instanceof _.Rm) {
                var c = b.height;
                b = b.width
            } else throw Error("missing height argument");
            a.style.width = _.RB(b, !0);
            a.style.height = _.RB(c, !0)
        },
        HR = function(a, b) {
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
        IR = function(a, b) {
            if (_.gy) {
                var c = HR(a, b + "Left"),
                    d = HR(a, b + "Right"),
                    e = HR(a, b + "Top");
                a = HR(a, b + "Bottom");
                return new _.DB(e, d, a, c)
            }
            c = _.MB(a, b + "Left");
            d = _.MB(a, b + "Right");
            e = _.MB(a, b + "Top");
            a = _.MB(a, b + "Bottom");
            return new _.DB(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        },
        lR = function(a, b, c, d) {
            d = void 0 === d ? null : d;
            var e = function(g) {
                try {
                    var h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            _.rb(a, "message", e);
            var f = !1;
            return function() {
                var g = !1;
                f || (f = !0, g = _.dg(a, "message", e));
                return g
            }
        },
        JR = function(a, b, c, d, e) {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (var f = 0; f < a.length; ++f) 1 < e && JR(a[f], b, c, d, --e)
        },
        KR = function(a) {
            var b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
            return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
        },
        OR = function(a, b) {
            _.V.call(this);
            this.B = a;
            this.D = this.j = this.g = !1;
            if (_.$f(a) && b.length)
                for (a = _.x(b), b = a.next(); !b.done; b = a.next()) switch (b.value) {
                    case 0:
                        LR(this);
                        break;
                    case 1:
                        MR(this);
                        break;
                    case 2:
                        NR(this)
                } else this.ya()
        };
    _.T(OR, _.V);
    OR.prototype.va = function() {
        this.M || this.l(_.$f(this.B))
    };
    var LR = function(a) {
            var b = function(d) {
                    d.isTrusted && (a.j = !0, a.l(d.timeStamp))
                },
                c = function(d) {
                    d.isTrusted && (a.j = !1, a.l(d.timeStamp))
                };
            _.rb(a.B, "focus", b);
            _.rb(a.B, "blur", c);
            _.rp(a, function() {
                return void a.B.removeEventListener("focus", b)
            });
            _.rp(a, function() {
                return void a.B.removeEventListener("blur", c)
            });
            a.j = a.B.document.hasFocus()
        },
        MR = function(a) {
            var b = function(c) {
                c.isTrusted && (a.g = 1 === _.Wr(a.B.document) ? !0 : !1, a.l(c.timeStamp))
            };
            _.rb(a.B.document, "visibilitychange", b);
            _.rp(a, function() {
                return void a.B.document.removeEventListener("visibilitychange", b)
            });
            a.g = 1 === _.Wr(a.B.document)
        },
        NR = function(a) {
            var b = a.B.document.body.getBoundingClientRect().top + 10,
                c = function(d) {
                    d.isTrusted && (a.D = d.clientY < b ? !0 : !1, a.l(d.timeStamp))
                };
            _.rb(a.B.document.body, "mouseleave", c);
            _.rb(a.B.document.body, "mouseenter", c);
            _.rp(a, function() {
                return void a.B.document.body.removeEventListener("mouseleave", c)
            });
            _.rp(a, function() {
                return void a.B.document.body.removeEventListener("mouseenter", c)
            });
            a.D = !1
        },
        PR = function() {
            OR.apply(this, arguments);
            this.o = new _.Ah;
            this.K = this.o.promise
        };
    _.T(PR, OR);
    var QR = function(a) {
        PR.call(this, a, [0, 1, 2]);
        this.I = 0;
        this.va()
    };
    _.T(QR, PR);
    QR.prototype.l = function(a) {
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
                    _.rp(this, function() {
                        return void clearTimeout(c)
                    })
                }
                break;
            case 2:
                !this.j && this.g && this.D ? (this.o.resolve(a), this.ya()) : this.I = 1
        }
    };
    var SR = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.$x(function() {
            RR(b)
        })
    };
    _.T(SR, _.V);
    SR.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var RR = function(a) {
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
            _.rp(a, function() {
                a.B.removeEventListener("focus", d);
                a.B.removeEventListener("blur", c)
            })
        },
        TR = function(a) {
            PR.call(this, a, [1]);
            this.va()
        };
    _.T(TR, PR);
    TR.prototype.l = function(a) {
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
    var UR = function(a, b, c) {
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
                e = new TR(a);
                _.S(this, e);
                e.K.then(function(g) {
                    return function() {
                        return void c.resolve(g.Tb)
                    }
                }(f));
                break;
            case 3:
                if (0 !== (0, _.Wp)()) break;
                e = new QR(a);
                _.S(this, e);
                e.K.then(function(g) {
                    return function() {
                        return void c.resolve(g.Tb)
                    }
                }(f));
                break;
            case 4:
                e = new SR(a), _.S(this, e), e.listen(function(g) {
                    return function() {
                        return void c.resolve(g.Tb)
                    }
                }(f))
        }
    };
    _.T(UR, _.V);
    var VR = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        WR = {
            IMG: " ",
            BR: "\n"
        },
        YR = function(a, b, c, d) {
            if (!(a.nodeName in VR))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in WR) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(WR[a.nodeName]);
            else
                for (a = a.firstChild; a;) YR(a, b, c, d), a = a.nextSibling
        },
        ZR = / \xAD /g,
        $R = /\xAD/g,
        aS = /\u200B/g,
        bS = / +/g,
        cS = /^\s*/,
        dS = function(a) {
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
        eS = function(a) {
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
        fS = function(a, b) {
            var c = this;
            this.l = a;
            this.g = !1;
            this.j = b;
            this.A = this.j.Ba(264, function(d) {
                c.g && (_.ZQ || (d = Date.now()), c.l(d), _.ZQ ? _.YQ.call(_.t, c.A) : _.t.setTimeout(c.A, 17))
            })
        };
    fS.prototype.start = function() {
        this.g || (this.g = !0, _.ZQ ? _.YQ.call(_.t, this.A) : this.A(0))
    };
    var gS = function(a, b, c, d) {
        this.g = a;
        this.D = b;
        this.Ca = c;
        this.progress = 0;
        this.A = null;
        this.C = !1;
        this.l = [];
        this.j = null;
        this.M = new fS((0, _.ex)(this.H, this), d)
    };
    gS.prototype.H = function(a) {
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
    gS.prototype.I = function() {};
    gS.prototype.o = function() {};
    var hS = function(a) {
        a.C = !1;
        a.M.start()
    };
    gS.prototype.reset = function(a, b, c) {
        this.A = null;
        this.g = a;
        this.D = b;
        this.Ca = c;
        this.progress = 0
    };
    var iS = function(a) {
            return a * a * a
        },
        jS = function(a) {
            a = 1 - a;
            return 1 - a * a * a
        },
        kS = function(a, b, c, d, e, f, g, h) {
            gS.call(this, [b], [c], d, f);
            this.J = a;
            this.ia = e;
            this.K = g ? g : null;
            this.j = h || null
        };
    _.T(kS, gS);
    kS.prototype.o = function() {
        var a = {};
        a[this.ia] = _.dJ(this.l[0]);
        _.KB(this.J, a)
    };
    kS.prototype.I = function() {
        this.K && this.K()
    };
    var nR = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.slotType = a;
        this.I = b;
        this.Th = c;
        this.la = d;
        this.wa = e;
        this.Gf = f;
        this.g = 1;
        this.qem = null;
        this.D = new _.Ah;
        this.l = new _.Ah;
        this.j = new _.Ah
    };
    _.T(nR, _.V);
    var lS = function(a) {
            return _.tb(function(b) {
                return b.return(a.D.promise)
            })
        },
        mS = function(a) {
            return _.tb(function(b) {
                return b.return(a.l.promise)
            })
        },
        oS = function(a) {
            return _.tb(function(b) {
                return b.return(a.j.promise)
            })
        };
    nR.prototype.va = function() {
        var a = this,
            b = mR(this.I, this.Th, function(c) {
                if ("adError" === c.eventType) a.j.resolve(), a.g = 4;
                else if ("adReady" === c.eventType && 1 === a.g) a.qem = c.qem, c.slotType !== a.slotType && (pS(a, {
                    cur_st: a.g,
                    evt: c.eventType,
                    adp_tp: c.slotType
                }), a.g = 4), a.D.resolve(), a.g = 2;
                else if ("adClosed" === c.eventType && 2 === a.g) a.l.resolve(c.result), a.g = 3;
                else if ("adClosed" !== c.eventType || 3 !== a.g) pS(a, {
                    cur_st: a.g,
                    evt: c.eventType
                }), a.g = 4
            }, this.la);
        _.rp(this, b)
    };
    var pS = function(a, b) {
        var c = .25;
        c = void 0 === c ? .01 : c;
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = c;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.Gf.Mm;
        b.version = a.Gf.version;
        _.fj(a.wa, "fullscreen_tag", b, !1, c)
    };
    var sS = function(a) {
            var b = qS(_.WA(_.QA(a))) || [];
            return !!_.vj(a, function(c) {
                if (!_.ja(c) || 1 != c.nodeType) return !1;
                var d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || 0 <= _.ca(b, c) || _.Og(_.hB(rS), function(e) {
                    return d.call(c, e)
                })
            }, !1, 20)
        },
        qS = function(a) {
            var b = kR(a);
            return b ? _.sj(_.ix(b.pubads().getSlots(), function(c) {
                return a.document.getElementById(c.getSlotElementId())
            }), function(c) {
                return null != c
            }) : null
        },
        rS = {
            ln: "ins.adsbygoogle-ablated-ad-slot",
            nn: "body ins.adsbygoogle",
            mn: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
            An: ".google-auto-placed",
            Bn: "ins.adsbygoogle[data-anchor-status]",
            Cn: "iframe[id^=google_ads_iframe]",
            Hn: "div[id^=div-gpt-ad]",
            Zn: "ins.adsbygoogle[data-ad-format=autorelaxed]",
            ao: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
            Gn: "div.googlepublisherpluginad",
            ro: "html > ins.adsbygoogle"
        };
    var tS = function(a) {
        _.V.call(this);
        var b = new _.Ah,
            c = b.resolve;
        this.promise = b.promise;
        a.onmessage = function() {
            return c()
        };
        _.rp(this, function() {
            a.close()
        })
    };
    _.T(tS, _.V);
    var uS = function() {
        var a = new _.Ah,
            b = a.resolve;
        return {
            Jm: function(c, d) {
                null != d && d.ports.length && b(new tS(d.ports[0]))
            },
            Im: a.promise
        }
    };
    var vS = ["mousemove", "mousedown", "scroll", "keydown"],
        xS = function(a) {
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
        for (var b = null, c = null, d = function(l) {
                if (b && 3E4 < l.timeStamp - b)
                    for (var m = {
                            nc: l.timeStamp,
                            ql: l.timeStamp - b,
                            cn: c
                        }, n = _.x(a.g), p = n.next(); !p.done; p = n.next()) {
                        p = p.value;
                        try {
                            p(m)
                        } catch (r) {}
                    }
                b = l.timeStamp
            }, e = _.x(vS), f = e.next(); !f.done; f = e.next()) a.B.addEventListener(f.value, d);
        var g = null,
            h, k;
        (null == (h = a.B.navigator) ? 0 : h.userActivation) && (null == (k = a.B.performance) ? 0 : k.now) && (g = a.B.setInterval(function() {
            a.B.navigator.userActivation.isActive && (c = a.B.performance.now())
        }, 1E3));
        _.rp(a, function() {
            for (var l = _.x(vS), m = l.next(); !m.done; m = l.next()) a.B.removeEventListener(m.value, d);
            g && a.B.clearInterval(g)
        })
    };
    var zS = function(a) {
        _.V.call(this);
        var b = this;
        this.B = a;
        this.g = [];
        this.l = _.$x(function() {
            yS(b)
        })
    };
    _.T(zS, _.V);
    zS.prototype.listen = function(a) {
        this.l();
        this.g.push(a)
    };
    var yS = function(a) {
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
                        Om: f - b
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
        _.rp(a, function() {
            a.B.removeEventListener("focus", d);
            a.B.removeEventListener("blur", c)
        })
    };
    var AS = function(a, b, c, d, e, f) {
        _.V.call(this);
        var g = this;
        this.wa = c;
        this.j = d;
        this.fb = e;
        this.l = Math.floor(2147483647 * _.rh());
        this.g = function(h, k, l) {
            l = void 0 === l ? {} : l;
            h = _.z(Object, "assign").call(Object, {
                etc: g.l,
                e: h,
                t: Math.round(k),
                qqid: g.j,
                ptt: g.fb
            }, l);
            _.fj(g.wa, "eit", h, !0, 1)
        };
        this.g(1, b);
        b = _.x(f);
        d = b.next();
        for (c = {}; !d.done; c = {
                Nc: void 0,
                If: void 0
            }, d = b.next()) switch (c.Nc = d.value, c.Nc) {
            case 101:
                d = new QR(a);
                d.K.then(function(h) {
                    return function(k) {
                        return void g.g(h.Nc, k)
                    }
                }(c));
                _.S(this, d);
                break;
            case 102:
                c.If = new TR(a);
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
                d = new zS(a);
                d.listen(function(h) {
                    return function(k) {
                        var l;
                        g.g(h.Nc, k.nc, {
                            tsb: null != (l = k.Om) ? l : -1
                        })
                    }
                }(c));
                _.S(this, d);
                break;
            case 104:
                d = new xS(a);
                d.listen(function(h) {
                    return function(k) {
                        var l;
                        g.g(h.Nc, k.nc, {
                            it: k.ql,
                            ualta: null != (l = k.cn) ? l : -1
                        })
                    }
                }(c));
                _.S(this, d);
                break;
            case 105:
                d = new SR(a), d.listen(function(h) {
                    return function(k) {
                        g.g(h.Nc, k.nc)
                    }
                }(c)), _.S(this, d)
        }
    };
    _.T(AS, _.V);
    var CS = function(a) {
            this.g = null;
            this.l = a.match(_.eB)[3] || "";
            this.j = BS(a);
            this.A = !1
        },
        DS = function(a, b) {
            b ? a.g = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.g = null
        },
        GS = function(a, b, c) {
            if (_.Og(["data-google-vignette", "data-google-interstitial"], function(f) {
                    return "false" === b.getAttribute(f) || b.closest && !!b.closest("[" + f + '="false"]')
                })) return !1;
            var d = b.href,
                e = d && (d.match(_.eB)[3] || null);
            if (!ES(a, b, d, e, c)) return !1;
            a.A = !!e && FS(a, e);
            return a.A || !c && !sS(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
        },
        ES = function(a, b, c, d, e) {
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
            return !d || FS(a, d) && BS(c) == a.j ? !1 : !0
        },
        FS = function(a, b) {
            return b.replace(HS, "") == a.l.replace(HS, "")
        },
        BS = function(a) {
            a = a.match(_.eB);
            var b = a[6];
            return (a[5] || "") + (b ? "?" + b : "") || "/"
        },
        HS = /^(www\.|m\.|mobile\.)*/i;
    var KS = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        _.V.call(this);
        var f = this;
        this.D = a;
        this.fa = b;
        this.la = c;
        this.wa = d;
        this.Ma = {};
        this.Vd = this.la.Ba(168, function(g, h) {
            return void IS(f, g, h)
        });
        this.Wd = this.la.Ba(169, function(g, h) {
            _.fj(f.wa, "ras::xsf", {
                c: h.data.substring(0, 500),
                u: f.D.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        });
        this.P = [];
        JS(this, this.Ma, e);
        this.P.push(lR(this.D, "sth", this.Vd, this.Wd))
    };
    _.T(KS, _.V);
    var IS = function(a, b, c) {
        try {
            if (!a.xa(c.origin) || !dR(c, a.fa.contentWindow)) return
        } catch (f) {
            return
        }
        var d = b.msg_type,
            e;
        "string" === typeof d && (e = a.Ma[d]) && a.la.Gb(168, function() {
            e.call(a, b, c)
        })
    };
    KS.prototype.xa = function(a) {
        return _.tB[a] || BR.test(a) || CR.test(a) || DR.test(a)
    };
    KS.prototype.A = function() {
        for (var a = _.x(this.P), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.P.length = 0;
        _.V.prototype.A.call(this)
    };
    var OS = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        var p = {};
        KS.call(this, a, b, c, e, (p.fullscreenApi = h.Cj, p.heavyAdInterventionResponse = h.ll, p));
        var r = this;
        this.C = d;
        this.requestedSize = f;
        this.K = h;
        this.V = l;
        this.g = m;
        this.qb = _.Zf();
        this.ta = "true" === g["i-fvs"];
        this.yf = g.qid;
        this.H = null != n ? n : new CS(a.location.href);
        this.Kb = "true" === g.iobs && "IntersectionObserver" in this.D;
        var v, w;
        DS(this.H, null != (w = null == (v = g.stop_word) ? void 0 : v.split(";")) ? w : null);
        this.I = this.K.Cj ? oR(a, b.contentWindow, c, e, this.K.Gf) : null;
        this.o = {
            xi: !1
        };
        this.j = {};
        this.ra = {
            tag: 0
        };
        this.l = {
            Jo: !0,
            Uj: !1,
            Je: !1,
            rg: !0
        };
        LS(this);
        MS(this);
        k.size && (b = new _.Ah, b.promise.then(function(C) {
            r.l.ce || r.M || NS(r, C)
        }), this.eb = new UR(a, k, b), _.S(this, this.eb));
        var y;
        if (null == (y = h.ci) ? 0 : y.length)
            if (k = _.$f(a)) {
                var B = new AS(a, k, e, this.yf, 17, h.ci);
                _.S(this, B);
                this.Ec = function(C) {
                    B.g(2, C - _.bg(a))
                }
            }
    };
    _.T(OS, KS);
    var LS = function(a) {
            a.I && (lS(a.I).then(function() {
                pR(a.C);
                a.ia()
            }), mS(a.I).then(function() {
                return void PS(a)
            }), oS(a.I).then(function() {
                return void a.J()
            }))
        },
        JS = function(a, b, c) {
            b["i-blur"] = function() {
                a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 27
                }));
                a.l.Je = !0;
                a.l.ah && (a.l.rg = !0)
            };
            b["i-no"] = function(g) {
                a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 26
                }));
                a.ra = {
                    tag: 1,
                    No: g.i_tslv ? g.i_tslv : void 0
                }
            };
            if (c.heavyAdInterventionResponse) {
                var d = aR(c.heavyAdInterventionResponse);
                if (d) {
                    var e = uS(),
                        f = e.Im;
                    b["i-hai-aux"] = e.Jm;
                    f.then(function(g) {
                        _.S(a, g);
                        g.promise.then(function() {
                            return d()
                        })
                    })
                }
            }
            c.fullscreenApi || (b["i-adframe-load"] = function() {
                pR(a.C);
                a.ia()
            }, b["i-dismiss"] = function() {
                PS(a)
            }, b.i_iif = function() {
                a.J()
            })
        };
    OS.prototype.ia = function() {
        this.o.Li || (this.o.Li = _.Zf())
    };
    var PS = function(a) {
        a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 33
        }));
        a.l.Je ? (QS(a) ? (a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 34
        })), a.D.history.back()) : (a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 35
        })), RS(a)), a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 36
        }))) : (_.t.setTimeout(function() {
            RS(a)
        }, 1E3), a.l.Kg ? (a.l.ah && (a.l.rg = !1), SS(a, a.l.Kg)) : a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
            U: 37
        })))
    };
    OS.prototype.J = function() {
        this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 23
        }));
        this.o.xi = !0
    };
    var TS = function(a) {
            QS(a) || (a.D.location.hash = "google_vignette");
            a.l.ah = a.la.Ba(526, function() {
                a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 62
                }));
                a.l.rg ? (QS(a) ? (a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 64
                })), SS(a, a.j.Xa.href)) : RS(a), a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 65
                }))) : a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 63
                }))
            });
            _.t.setTimeout(_.fx(_.rb, a.D, "hashchange", a.l.ah), 0)
        },
        US = function(a, b) {
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 10
            }));
            var c = _.Zf(),
                d = _.Ej(a.D).wasReactiveAdVisible[9];
            if (b) {
                var e = a.H;
                if (b && e.g) {
                    var f = [];
                    YR(b, f, !0, !0);
                    b = f.join("");
                    b = b.replace(ZR, " ").replace($R, "");
                    b = b.replace(aS, "");
                    b = b.replace(bS, " ");
                    " " != b && (b = b.replace(cS, ""));
                    if (b) {
                        e = b.match(e.g);
                        b = [];
                        for (f = 0; e && f < e.length; f++) {
                            var g = e[f].toLowerCase();
                            0 <= _.ca(b, g) || b.push(g)
                        }
                        e = b
                    } else e = []
                } else e = []
            } else e = [];
            b = a.K.ol || eR(a.D);
            f = a.requestedSize.width < a.requestedSize.height === _.Mi(a.D);
            if (864E5 <= c - a.qb) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
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
            if (a.o.xi) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 13
            })), !1;
            if (QS(a)) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 14
            })), !1;
            if (!a.o.Li) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 15
            })), !1;
            if (!a.ta && d) return a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 16
            })), !1;
            a.ta && a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
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
        WS = function(a, b) {
            a.l.xd = VS(a, b, "prerender");
            a.l.vd = VS(a, b, "prefetch");
            a.D.document.body.appendChild(a.l.xd);
            a.D.document.body.appendChild(a.l.vd)
        },
        VS = function(a, b, c) {
            a = _.cg("LINK", a.D.document);
            a.setAttribute("rel", c);
            a.setAttribute("href", b);
            return a
        },
        XS = function(a, b) {
            for (b = b.target; b;) {
                if ("nodeName" in b && "A" === b.nodeName) {
                    if (GS(a.H, b, b.ownerDocument !== a.D.document)) return b;
                    break
                }
                b = "parentElement" in b ? b.parentElement : null
            }
            return null
        };
    OS.prototype.A = function() {
        this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 24
        }));
        KS.prototype.A.call(this);
        QS(this) && SS(this, this.j.Xa.href);
        this.j.Ib && (_.dg(this.D.document, "click", this.j.Ib), this.j.Ib = void 0);
        this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 25
        }))
    };
    var RS = function(a) {
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 38
            }));
            a.l.ce ? (a.l.Uj = !0, a.j.Ib && (_.dg(a.D.document, "click", a.j.Ib), a.j.Ib = void 0), a.l.xd && a.l.xd.parentNode && (a.l.xd.parentNode.removeChild(a.l.xd), a.l.xd = void 0), a.l.vd && a.l.vd.parentNode && (a.l.vd.parentNode.removeChild(a.l.vd), a.l.vd = void 0), YS(a.C, !1), a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 40
            }))) : a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 39
            }))
        },
        MS = function(a) {
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 41
            }));
            if (a.j.Ib) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 42
            }));
            else {
                a.j.Ib = a.la.Ba(527, function(e) {
                    ZS(a, e)
                });
                if (null !== a.j.Ib) {
                    var b = a.j.Ib;
                    _.rb(a.D.document, "click", function(e) {
                        b(e)
                    }, vR)
                }
                for (var c = a.D.frames, d = 0; d < c.length; d++) try {
                    _.rb(c[d].document, "click", a.j.Ib, vR)
                } catch (e) {}
                a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 43
                }))
            }
        },
        SS = function(a, b) {
            a = a.D.location;
            b = _.Ta(b);
            b = _.ab(b);
            void 0 !== b && a.replace(b)
        },
        NS = function(a, b) {
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 28
            }));
            if (US(a)) {
                var c = 1 === b;
                if (a.K.Jk) {
                    var d;
                    (d = a.l).Je || (d.Je = !c)
                }
                if (a.mb()) {
                    a.l.ce = Date.now();
                    _.Ej(a.D).wasReactiveAdVisible[8] = !0;
                    c && a.j.Xa && (a.l.Kg = a.j.Xa.href);
                    $S(a);
                    a.j.Xa && WS(a, a.j.Xa.href);
                    TS(a);
                    _.rb(a.D, "pagehide", a.la.Ba(528, function() {
                        RS(a)
                    }));
                    if (c) {
                        var e;
                        null == (e = a.Ec) || e.call(a, a.l.ce)
                    }
                    YS(a.C, !0);
                    a.K.yi && a.V.log(578856259, jR, _.z(Object, "assign").call(Object, {}, a.g, {
                        pb: a.K.yi,
                        Tm: eS(b),
                        yf: a.yf
                    }));
                    var f;
                    null == (f = a.eb) || f.ya();
                    a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                        U: 32
                    }))
                } else a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 30
                })), c && a.j.Xa && (a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 31
                })), SS(a, a.j.Xa.href))
            } else a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 29
            }))
        };
    OS.prototype.Ac = function(a) {
        this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 54
        }));
        this.l.ce ? this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 56
        })) : this.M ? this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 57
        })) : this.j.Xa ? a.preventDefaultTriggered ? (this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 59
        })), this.j.Xa = void 0) : GS(this.H, this.j.Xa, this.j.Xa.ownerDocument !== this.D.document) ? US(this) ? (NS(this, 1), this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 61
        }))) : (this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 60
        })), SS(this, this.j.Xa.href)) : (this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 55
        })), SS(this, this.j.Xa.href)) : this.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, this.g, {
            U: 58
        }))
    };
    OS.prototype.mb = function() {
        return !0
    };
    var ZS = function(a, b) {
            a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 44
            }));
            if (b)
                if (b.defaultPrevented) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                    U: 46
                }));
                else if (a.l.ce) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 50
            }));
            else if (a.l.Kg) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 51
            }));
            else if (a.M) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 47
            }));
            else if (a.j.Xa) a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
                U: 52
            }));
            else {
                var c = XS(a, b);
                c ? US(a, c) ? (a.j.Xa = c, ER(b), b.preventDefault = function() {
                    return b && (b.preventDefaultTriggered = !0)
                }, _.t.setTimeout((0, _.ex)(a.Ac, a, b), 0), a.V.log(578856259, _.pj, _.z(Object, "assign").call(Object, {}, a.g, {
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
        QS = function(a) {
            return -1 !== a.D.location.hash.indexOf("google_vignette")
        },
        $S = function(a) {
            if (!a.Kb)
                if (a.I) _.t.IntersectionObserver || a.I.Th.postMessage(JSON.stringify({
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
    var bT = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.g = a;
        this.l = b;
        this.j = c;
        _.rb(this.g, this.l, this.j, vR);
        _.rp(this, function() {
            return void aT(d)
        })
    };
    _.T(bT, _.V);
    var aT = function(a) {
            a.g && _.dg(a.g, a.l, a.j, vR)
        },
        cT = function(a) {
            this.l = a;
            this.reset()
        };
    cT.prototype.add = function(a) {
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
    cT.prototype.reset = function() {
        this.g = [];
        this.A = 0
    };
    var eT = function(a, b, c, d) {
        _.V.call(this);
        var e = this;
        this.D = a;
        this.target = b;
        this.handle = c || b;
        this.eb = d || 100;
        this.o = this.K = this.fa = !1;
        this.I = this.g = this.l = this.j = this.ia = this.H = this.P = this.J = null;
        this.rb = new bT(this.handle, "mousedown", function(f) {
            0 == f.button && dT(e, f)
        });
        _.S(this, this.rb);
        this.Kb = new bT(this.handle, "touchstart", function(f) {
            return dT(e, f)
        });
        _.S(this, this.Kb);
        this.qb = new bT(this.handle, "click", function(f) {
            e.fa ? (e.onClick(), e.fa = !1) : f.stopPropagation()
        });
        _.S(this, this.qb)
    };
    _.T(eT, _.V);
    var fT = function(a) {
        a = a.touches && a.touches[0] || a;
        return new _.Nm(a.clientX, a.clientY)
    };
    eT.prototype.ga = function() {
        if (this.j && this.l && this.g) {
            var a = this.j,
                b = wR(this.g, this.l);
            var c = new _.Nm(a.x + b.x, a.y + b.y);
            a = this.target;
            c instanceof _.Nm ? (b = c.x, c = c.y) : (b = c, c = void 0);
            a.style.left = _.RB(b, !1);
            a.style.top = _.RB(c, !1)
        }
    };
    eT.prototype.ka = function() {};
    eT.prototype.onClick = function() {};
    eT.prototype.W = function() {
        var a = this.target,
            b = _.$A(a);
        var c = FR(a);
        b = FR(b);
        c = new _.Nm(c.x - b.x, c.y - b.y);
        a = IR(a, "margin");
        return wR(c, new _.Nm(a.left, a.top))
    };
    var dT = function(a, b) {
        a.K && gT(a);
        a.K = !0;
        a.j = a.W();
        a.l = fT(b);
        a.g = a.l;
        a.I = new cT(a.eb);
        a.I.add(a.l);
        a.J = new bT(a.D, "mousemove", (0, _.ex)(a.xa, a));
        _.S(a, a.J);
        a.P = new bT(a.D, "touchmove", (0, _.ex)(a.xa, a));
        _.S(a, a.P);
        a.H = new bT(a.D, "mouseup", (0, _.ex)(a.Ma, a));
        _.S(a, a.H);
        a.ia = new bT(a.D, "touchend", (0, _.ex)(a.Ma, a));
        _.S(a, a.ia)
    };
    eT.prototype.xa = function(a) {
        if (this.K)
            if (a.preventDefault(), this.g = fT(a), this.I.add(this.g), this.o) this.ga();
            else {
                var b = this.l,
                    c = this.g;
                a = b.x - c.x;
                b = b.y - c.y;
                10 <= Math.sqrt(a * a + b * b) && (this.ga(), this.o = !0)
            }
    };
    eT.prototype.Ma = function(a) {
        this.o ? (a.preventDefault(), this.g = fT(a), this.ka()) : this.fa = !0;
        gT(this)
    };
    var gT = function(a) {
        a.K = !1;
        a.o = !1;
        a.j = null;
        a.l = null;
        a.g = null;
        a.I = null;
        a.J && aT(a.J);
        a.P && aT(a.P);
        a.H && aT(a.H);
        a.ia && aT(a.ia)
    };
    var kT = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        _.V.call(this);
        var p = this;
        this.config = a;
        this.pa = b;
        this.H = c;
        this.K = d;
        this.Ma = f || function() {};
        this.ra = g || function() {};
        this.la = h;
        this.wa = k;
        this.xa = l;
        this.fa = m;
        this.j = (this.o = n) ? 2 : 1;
        _.rp(this, function() {
            return hT(p, !0)
        });
        this.C = _.cg("INS", b.document);
        _.rp(this, function() {
            return p.C = null
        });
        this.I = null;
        HTMLElement.prototype.attachShadow && !this.la.Gb(1013, function() {
            p.I = _.cg("DIV", b.document);
            p.I.className = "grippy-host";
            p.I.attachShadow({
                mode: "closed"
            }).appendChild(p.C);
            _.rp(p, function() {
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
        this.rb = "true" === this.config.draggable || "top" != this.g;
        this.mb = this.config.expId || "";
        this.eb = this.config.qemId || "";
        a = parseInt(this.config.z_index_override, 10);
        this.ta = isNaN(a) ? null : a;
        this.qb = new _.wI(b);
        !this.W && _.t.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(function() {
            var r = p.pa.innerHeight;
            if (2 > Math.abs(r - 460) || 2 > Math.abs(r - 529)) r < p.sa && 2 > Math.abs(_.Vi(p.pa) - p.ia - 68) && (p.ga = !0, 0 === p.j && iT(p)), p.sa = r
        }, 300);
        jT(this, this.C)
    };
    _.T(kT, _.V);
    var lT = function(a, b) {
            if ("top" == a.g) {
                var c;
                _.xp(null != (c = a.I) ? c : a.C, {
                    top: _.dJ(b)
                })
            }
        },
        jT = function(a, b) {
            gR(b);
            _.xp(b, {
                "background-color": "#FAFAFA",
                display: "block",
                position: "relative",
                "z-index": 1,
                height: _.dJ(5),
                "box-shadow": "top" == a.g ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
            });
            if ("top" == a.g) {
                var c, d, e = {
                        position: "absolute",
                        top: _.dJ(null != (d = null == (c = a.o) ? void 0 : c.maxHeight) ? d : a.K.height),
                        width: "100%"
                    },
                    f;
                _.xp(null != (f = a.I) ? f : b, e)
            }
            var g = _.cg("SPAN", a.pa.document);
            g.appendChild(mT(a));
            var h = function(k) {
                k.target === g && (k.preventDefault && k.preventDefault(), k.stopImmediatePropagation && k.stopImmediatePropagation(), k.stopPropagation && k.stopPropagation())
            };
            _.rb(g, "click", h);
            _.rp(a, function() {
                return _.dg(g, "click", h)
            });
            nT(a, g);
            b.className = "ee";
            b.appendChild(g)
        },
        nT = function(a, b) {
            var c = {};
            a = (c.display = "block", c.width = "80px", c.height = "45px", c[a.g] = "0", c.left = "0%", c.marginLeft = "0px", c["pointer-events"] = "none", c);
            c = b.getElementsByTagName("svg")[0];
            _.xp(b, a);
            fR(c)
        },
        oT = function(a) {
            var b;
            return null != (b = a.I) ? b : a.C
        },
        mT = function(a) {
            switch (a.g) {
                case "top":
                    var b = "dropShadowBottom";
                    var c = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                    var d = "0";
                    var e = "up";
                    var f = qR;
                    break;
                case "bottom":
                    b = "dropShadowTop", c = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", d = "25", e = "down", f = rR
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
        pT = function(a, b) {
            for (var c = a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0], d; d = c.firstChild;) c.removeChild(d);
            switch (a.g) {
                case "top":
                    (b ? rR : qR)(c);
                    break;
                case "bottom":
                    (b ? qR : rR)(c)
            }
        },
        qT = function(a, b, c, d) {
            b = {
                i: b,
                dc: 0 === a.j ? "1" : "0",
                fdc: c ? "1" : "0",
                ds: a.W ? "1" : "0",
                expId: a.mb,
                sc: a.ka ? "1" : "0",
                off: d,
                vw: _.Ni(a.pa),
                req: a.H.src,
                tp: a.g,
                h: a.K.height,
                w: a.K.width,
                qemId: a.eb
            };
            _.fj(a.wa, "flgr", b, !0, 1)
        };
    kT.prototype.onClick = function(a) {
        a.preventDefault();
        this.D || (this.ga = !0, iT(this), qT(this, "c", 0 !== this.j, 0))
    };
    var iT = function(a, b) {
            b = void 0 === b ? a.W : b;
            switch (a.j) {
                case 1:
                    a.show();
                    break;
                case 2:
                    rT(a);
                    break;
                case 0:
                    a.o ? rT(a) : a.show();
                    break;
                case 3:
                    hT(a, b);
                    break;
                case 4:
                    a.show()
            }
        },
        sT = function(a) {
            var b = a.o.maxHeight;
            4 !== a.j && (a.l.style[a.g] = "-" + (b - (parseInt(a.l.style.height, 10) + parseInt(a.l.style[a.g], 10))) + "px");
            a.l.style.height = b + "px";
            a.H.style["max-height"] = "none";
            a.H.height = "100%";
            lT(a, b);
            null != (a = a.P) && (a.C = b)
        },
        uT = function(a, b) {
            "bottom" == a.g && KR(a.pa) && a.la.Gb(404, function() {
                return tT(a, "0px", b, "ease-out")
            })
        };
    kT.prototype.show = function() {
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
                        lT(a, g);
                        var h;
                        null != (h = a.P) && (h.C = g)
                    }
                    a.D = !1;
                    a.J = !1;
                    vT(a);
                    a.l.setAttribute("data-anchor-status", "displayed");
                    a.l.setAttribute("data-anchor-shown", !0);
                    pT(a, !1)
                };
                this.D = !0;
                if (c && !b) {
                    var e = -c / .1;
                    uT(this, e);
                    pT(this, !1);
                    c = new kS(this.l, c, 0, e, this.g, this.la, d, jS);
                    this.fa();
                    hS(c)
                } else if (b) {
                    var f = this.o.maxHeight;
                    e = this.K.height - f;
                    f = (f + c > this.K.height ? -1 : 1) * (e - c) / .1;
                    uT(this, f);
                    c === e ? d() : (c = new kS(this.l, c, e, f, this.g, this.la, d, jS), this.fa(), hS(c))
                }
            } else this.J = !1
        }
    };
    var rT = function(a) {
            if (!a.D) {
                sT(a);
                var b = parseInt(a.l.style[a.g], 10),
                    c = function() {
                        a.D = !1;
                        a.j = 4;
                        a.J = !1;
                        vT(a);
                        a.l.setAttribute("data-anchor-status", "displayed");
                        a.l.setAttribute("data-anchor-shown", !0);
                        pT(a, !1)
                    };
                if (b) {
                    a.D = !0;
                    var d = -b / .1;
                    uT(a, d);
                    pT(a, !1);
                    b = new kS(a.l, b, 0, d, a.g, a.la, c, jS);
                    a.fa();
                    hS(b)
                } else c()
            }
        },
        hT = function(a, b) {
            if (!a.D && a.l) {
                var c = parseInt(a.l.style[a.g], 10),
                    d = -(4 === a.j ? a.o.maxHeight : a.K.height) - (b ? 30 : 0),
                    e = (c - d) / .1;
                "bottom" == a.g && KR(a.pa) && a.la.Gb(405, function() {
                    return tT(a, "21px", e, "ease-in")
                });
                b || pT(a, !0);
                c === d ? (b || (a.j = 0), a.J = b) : (a.D = !0, c = new kS(a.l, c, d, e, a.g, a.la, function() {
                    a.D = !1;
                    b || (a.j = 0);
                    (a.J = b) || pT(a, !0);
                    b && a.Ma();
                    a.l.setAttribute("data-anchor-status", "dismissed")
                }, iS), a.xa(), hS(c))
            }
        },
        yT = function(a, b) {
            if ("bottom" !== a.g && "top" !== a.g) throw Error("unsupported reactive type");
            var c = function(k) {
                    return a.onClick(k)
                },
                d = a.C;
            _.rb(d, "click", c);
            _.rp(a, function() {
                return _.dg(d, "click", c)
            });
            a.I && (_.rb(a.I, "click", c), _.rp(a, function() {
                return a.I && _.dg(a.I, "click", c)
            }));
            _.KB(b, {
                opacity: 1
            });
            var e = a.pa.document;
            if (e) {
                a.l = b;
                var f, g, h = null != (g = null == (f = a.o) ? void 0 : f.maxHeight) ? g : a.K.height;
                a.rb && (a.P = new("top" == a.g ? wT : xT)(a, e, h, b, a.C), _.S(a, a.P));
                e = {
                    position: "fixed",
                    left: _.dJ(0)
                };
                e[a.g] = _.dJ(-h - 30);
                _.KB(b, e);
                _.xp(b, {
                    overflow: "visible",
                    background: "#FAFAFA"
                });
                _.AI(a.qb, function(k) {
                    var l = null == a.ta ? 2147483647 : a.ta;
                    _.KB(b, {
                        zIndex: null == k ? l : Math.min(k, l)
                    })
                });
                iT(a)
            }
        },
        tT = function(a, b, c, d) {
            _.KB(a.H, {
                transition: c / 1E3 + "s",
                "transition-timing-function": d,
                "margin-top": b
            })
        },
        vT = function(a) {
            a.ra();
            a.ra = function() {}
        },
        zT = function(a, b, c, d, e) {
            eT.call(this, b, d, e);
            this.mb = a;
            this.C = c
        };
    _.T(zT, eT);
    zT.prototype.ka = function() {
        var a = this.mb;
        if (!a.D) {
            var b = parseInt(a.l.style[a.g], 10),
                c = b + parseInt(a.l.style.height, 10),
                d = a.K.height / 2;
            c >= (a.o ? a.o.maxHeight / 2 : _.z(Number, "MAX_SAFE_INTEGER")) ? (rT(a), qT(a, "d", !1, b)) : c >= d ? (a.show(), qT(a, "d", !1, b)) : (hT(a, a.W), qT(a, "d", !0, b))
        }
    };
    zT.prototype.ga = function() {
        if (null !== this.j && null !== this.l && null !== this.g) {
            var a = this.ta(this.j.y, wR(this.g, this.l).y);
            0 < a && (a = 0);
            a < -this.C && (a = -this.C);
            var b = {};
            b[this.ra()] = _.dJ(a);
            _.KB(this.target, b)
        }
    };
    var wT = function(a, b, c, d, e) {
        zT.call(this, a, b, c, d, e)
    };
    _.T(wT, zT);
    wT.prototype.W = function() {
        return new _.Nm(0, parseInt(this.target.style.top, 10))
    };
    wT.prototype.ta = function(a, b) {
        return b - a
    };
    wT.prototype.ra = function() {
        return "top"
    };
    var xT = function(a, b, c, d, e) {
        zT.call(this, a, b, c, d, e)
    };
    _.T(xT, zT);
    xT.prototype.W = function() {
        return new _.Nm(0, parseInt(this.target.style.bottom, 10))
    };
    xT.prototype.ta = function(a, b) {
        return a - b
    };
    xT.prototype.ra = function() {
        return "bottom"
    };
    var GT = function(a, b, c, d, e, f, g, h) {
        g = void 0 === g ? !1 : g;
        h = void 0 === h ? null : h;
        _.$Q.call(this, a, b, f);
        var k = this;
        this.la = d;
        this.wa = e;
        this.C = this.Ac = this.Kb = 0;
        this.qb = this.Ej = !1;
        this.D = null;
        this.W = this.ta = !1;
        this.J = null;
        this.ra = IR(b.document.body, "padding");
        this.o = IR(b.document.body, "padding");
        this.ia = 0;
        this.Pi = this.H = !1;
        this.ka = !0;
        this.I = c;
        this.K = AT(this);
        this.fa = null;
        this.Vd = this.Wd = this.xa = this.mb = this.eb = this.Mi = this.Fj = this.Ij = !1;
        this.Oj = _.UA(b || window).height / 2;
        this.Kj = _.UA(b || window).height;
        this.Hi = xR(b);
        this.Gi = this.ga = this.Dc = !1;
        this.Fi = g;
        this.jn = h;
        BT(this);
        this.Ri = this.la.Ba(266, function() {
            CT(k)
        });
        this.Vi = this.la.Ba(267, function() {
            CT(k)
        });
        this.bj = this.la.Ba(268, function() {
            if (k.H && k.l && k.D) {
                var l = k.D;
                l.ia = _.Vi(l.pa)
            }
            l = _.Vi(k.g);
            var m = l - k.Kb;
            DT(k, m);
            k.xa && (0 < m && (k.C += m), k.Dc = k.Hi - l <= k.Kj, k.Kb = l);
            CT(k)
        });
        this.cj = this.la.Ba(269, function() {
            ET(k)
        });
        this.jj = this.la.Ba(270, function(l) {
            FT(k, l)
        });
        this.uj = this.la.Ba(271, function(l) {
            if (l && l.touches) {
                k.J = "touchmove";
                k.ia = l.touches.length;
                k.W = !0;
                CT(k);
                if (!k.Ej && l.touches && 0 != l.touches.length && l.touches[0]) {
                    l = l.touches[0].pageY;
                    var m = l - k.Ac;
                    k.Ac = l;
                    l = m
                } else l = 0;
                0 < l && (k.C += l);
                DT(k, l)
            }
        });
        this.zj = this.la.Ba(272, function(l) {
            l && l.touches && l.touches[0] && (k.J = "touchstart", k.ia = l.touches.length, k.W = !1, CT(k), k.Ac = l.touches[0].pageY, l = (l = l.target) && "top" == k.I && k.ta && k.D && oT(k.D) && 1 === l.nodeType ? _.aB(oT(k.D), l) : !1, k.Ej = l)
        });
        this.Ec = this.la.Ba(273, function() {
            k.eb || (k.eb = !0, _.dg(k.j, "load", k.Ec), k.mb && !k.Pi || CT(k))
        });
        _.rb(a, "load", this.Ec);
        _.rp(this, function() {
            return _.dg(a, "load", k.Ec)
        })
    };
    _.T(GT, _.$Q);
    var IT = function(a) {
            var b = a.g;
            _.rb(b, "orientationchange", a.Ri);
            _.rb(b, "resize", a.Vi);
            _.rb(b, "scroll", a.bj);
            _.rb(b, "touchcancel", a.cj);
            _.rb(b, "touchend", a.jj);
            _.rb(b, "touchmove", a.uj);
            _.rb(b, "touchstart", a.zj);
            _.rp(a, function() {
                return HT(a)
            })
        },
        HT = function(a) {
            var b = a.g;
            _.dg(b, "orientationchange", a.Ri);
            _.dg(b, "resize", a.Vi);
            _.dg(b, "scroll", a.bj);
            _.dg(b, "touchcancel", a.cj);
            _.dg(b, "touchend", a.jj);
            _.dg(b, "touchmove", a.uj);
            _.dg(b, "touchstart", a.zj)
        };
    GT.prototype.Qj = function(a) {
        var b = this.l;
        if (b && !this.D) {
            for (var c in JT) !JT.hasOwnProperty(c) || c in a || (a[c] = JT[c]);
            this.Ij = "true" === a.use_manual_view || "top" === this.I || !!_.Ej(this.g).wasReactiveAdConfigReceived[2];
            this.Fj = "true" === a.use_important;
            if (c = a.af_l) this.mb = "true" === c;
            this.Gi = (this.xa = "true" === a.wait_for_scroll || "top" == this.I) && ("true" === a.tsec || "top" == this.I);
            KT(this, a);
            this.D = LT(this, a);
            this.fa = MT(this);
            this.Dc = this.Kj >= this.Hi;
            a = this.l;
            c = this.D && oT(this.D);
            a && c && ("top" == this.I ? a.appendChild(c) : a.insertBefore(c, a.firstChild));
            IT(this);
            this.ta = !0;
            b.setAttribute("data-anchor-status", "ready-to-display")
        }
    };
    var MT = function(a) {
            var b = a.K.height + 5;
            "bottom" == a.I && KR(a.g) && (b += 20);
            return new _.Rm(a.K.width, b)
        },
        KT = function(a, b) {
            var c = parseInt(b.ht, 10),
                d = 0 < c ? c : null;
            b = parseInt(b.wd, 10);
            var e = 0 < b ? b : null;
            null != d && (a.K.height = d);
            null != e && (a.K.width = e);
            uR(a, function(f) {
                sR(f, e, d)
            }, !1, !0);
            sR(a.j, e, d)
        },
        LT = function(a, b) {
            b = new kT(b, a.g, a.j, a.K, a.I, function() {
                if (!a.qb) {
                    a.qb = !0;
                    HT(a);
                    var c = a.l;
                    _.ZA(c);
                    NT(a, a.ra, !0, !0);
                    c && (c.style.display = "none")
                }
            }, function() {
                return void OT(a)
            }, a.la, a.wa, function() {
                a.ga || (a.ga = !0, DT(a, null));
                _.nK(a.L, a.slotId)
            }, function() {
                a.ga && (a.ga = !1, DT(a, null));
                a.Nj && _.oK(a.L, a.slotId)
            }, a.jn);
            _.S(a, b);
            return b
        },
        BT = function(a) {
            if (a.ka) {
                var b = a.l;
                b && (b.style.display = "none");
                NT(a, a.ra, !0, !0);
                a.ka = !1
            }
        };
    GT.prototype.Ma = function() {
        this.Pi = !0;
        if (!this.H && PT(this) && (this.eb || !this.mb)) {
            var a = this.l;
            a && (QT(this), uR(this, function(b) {
                gR(b)
            }, !0), yT(this.D, a), RT(this), this.H = !0, (a = this.j.contentWindow) && JR(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    };
    var RT = function(a) {
            var b = a.l;
            if (b) {
                var c = a.D,
                    d = c.pa,
                    e = _.Vi(d);
                if (!(10 > Math.abs(e - c.ia))) {
                    var f = 10 > e;
                    d = e + 10 + _.Si(d) > _.Ui(d);
                    f = f || d;
                    c.ka || c.ga || c.D || (0 === c.j || f ? 0 === c.j && f && iT(c) : iT(c, !1));
                    c.ia = e
                }
                a.ka || (ST(a), c = IR(a.g.document.body, "padding"), "bottom" == a.I && (c.bottom += a.fa.height + 25), NT(a, c), b.style.display = "block", a.ka = !0)
            }
        },
        QT = function(a) {
            var b = a.l;
            if (b && a.j.parentElement) {
                GR(b, a.fa);
                var c = a.g.innerWidth;
                _.Ri(a.g).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
                TT(a)
            }
        },
        TT = function(a) {
            uR(a, function(c) {
                GR(c, a.K);
                c.style.width = "100%"
            }, !1, !0);
            a.j.style.display = "block";
            a.j.style.margin = "0 auto";
            if (a.Fj) {
                var b = a.l;
                yR(b, function(c) {
                    fR(c, function(d) {
                        return c === b && /display|bottom/i.test(d) ? !1 : !0
                    });
                    if ("svg" === c.nodeName) return !1
                })
            }
        },
        ST = function(a) {
            if ("bottom" !== a.I && "top" !== a.I) throw Error("Unexpected position: " + a.I);
        },
        AT = function(a) {
            ST(a);
            var b = a.g.innerWidth;
            a = _.Pm(_.SB, a.j).height || +a.j.height || 0;
            return new _.Rm(b, a)
        },
        ET = function(a) {
            a.J = "touchcancel";
            _.t.setTimeout(a.la.Ba(274, function() {
                "touchcancel" === a.J && (a.ia = 0, a.W = !1, CT(a))
            }), 1E3)
        },
        FT = function(a, b) {
            if (b && b.touches) {
                a.J = "touchend";
                var c = b.touches.length;
                2 > c ? _.t.setTimeout(a.la.Ba(256, function() {
                    "touchend" === a.J && (a.ia = c, a.W = !1, CT(a))
                }), 1E3) : (a.ia = c, CT(a));
                !a.H || a.Fi || eR(a.g) || hT(a.D, !0)
            }
        },
        DT = function(a, b) {
            var c = a.ka ? UT(a, a.ga) : a.ra.top;
            if ("top" === a.I && a.g.document.body && a.ta && a.D && a.H && a.o.top !== c && 0 !== b) {
                var d = _.EB(a.o);
                null === b ? (d.top = c, NT(a, d)) : (0 < b && a.o.top > c && (d.top = Math.max(c, a.o.top - b), NT(a, d, !1)), 0 > b && a.o.top < c && (d.top = Math.min(c, a.o.top - b), NT(a, d, !1)))
            }
        },
        NT = function(a, b, c, d) {
            var e = a.o.top - b.top,
                f = _.Vi(a.g);
            f < e && (void 0 === d || !d) || (d = a.g.document.body, d.style.paddingTop = _.dJ(b.top), d.style.paddingRight = _.dJ(b.right), d.style.paddingBottom = _.dJ(b.bottom), d.style.paddingLeft = _.dJ(b.left), a.o = b, (void 0 === c || c) && a.g.scrollTo(0, f - e))
        },
        CT = function(a) {
            !a.ta || a.qb || 2 <= a.ia && a.W || !PT(a) ? BT(a) : (a.Ma(), RT(a))
        };
    GT.prototype.rb = function() {
        return _.Mi(this.g)
    };
    GT.prototype.Mj = function() {
        this.Wd = !0;
        var a;
        null == (a = this.l) || a.removeAttribute("data-anchor-status")
    };
    GT.prototype.Rj = function() {
        this.Vd = !0;
        var a = this.l;
        this.Wd && this.Vd && (null == a || a.setAttribute("data-anchor-status", "ready-to-display"))
    };
    var PT = function(a) {
            if (!a.rb() || a.Wd && !a.Vd) return !1;
            var b = a.g;
            if (!a.H && a.xa) switch (a.Gi && (a.C += Math.max(_.Vi(a.g) - a.Kb, 0)), a.I) {
                case "bottom":
                    return a.C >= a.Oj || a.Dc;
                case "top":
                    return a.C > UT(a)
            }
            return a.Fi || eR(b)
        },
        UT = function(a, b) {
            return (void 0 === b ? 0 : b) ? a.ra.top + 30 : a.ra.top + 30 + a.fa.height - 5
        },
        OT = function(a) {
            a.Ij && !a.Mi && (a.Mi = !0, a.la.Gb(257, function() {
                var b = {
                        msg_type: "manual-send-view"
                    },
                    c = a.j.contentWindow;
                c && c.postMessage(a.g.JSON.stringify(b), "*")
            }))
        };
    GT.prototype.Pj = function(a, b) {
        this.j = a;
        if (b && (this.K.height !== b.height || this.K.width !== b.width)) {
            a = b.height - this.K.height;
            var c = {};
            KT(this, (c.ht = b.height, c.wd = b.width, c));
            this.fa = MT(this);
            QT(this);
            DT(this, a);
            var d;
            null == (d = this.D) || lT(d, b.height)
        }
        TT(this)
    };
    var JT = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    var VT = function() {
            this.g = null
        },
        WT = function(a, b, c) {
            a.g = _.KI(b, c);
            if (b = !!a.g) a = a.g, b = !!a && 1 > a.length;
            return b
        };
    var XT = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        _.$Q.call(this, a, b, c);
        this.D = null;
        this.I = b.document;
        this.H = d;
        this.K = _.yI(new _.wI(b), 2147483646);
        this.C = e;
        this.o = b
    };
    _.T(XT, _.$Q);
    var $T = function(a) {
            YS(a, !1);
            var b = a.l;
            if (b) {
                var c = tR(a.o, a.C);
                uR(a, function(d) {
                    _.xp(d, c);
                    gR(d)
                }, !0);
                a.j.setAttribute("width", "");
                a.j.setAttribute("height", "");
                _.KB(a.j, c);
                _.KB(a.j, YT);
                _.KB(b, ZT);
                _.KB(b, {
                    background: "transparent"
                });
                _.xp(b, {
                    display: "none",
                    position: "fixed"
                });
                gR(b);
                gR(a.j);
                1 >= _.Ti(a.o) || (_.KB(b, {
                    overflow: "scroll",
                    "max-width": "100vw"
                }), fR(b))
            }
        },
        YS = function(a, b) {
            var c = a.l;
            c && (b ? (_.CI(a.K), _.xp(c, {
                display: "block"
            }), a.I.body && !a.D && (a.D = _.JI(a.I, a.g, a.H)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.I.body.setAttribute("aria-hidden", "true")) : (_.DI(a.K), _.xp(c, {
                display: "none"
            }), a.D && (a.D(), a.D = null), a.I.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
        },
        ZT = {
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
        YT = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var aU = function(a, b, c, d, e, f, g, h) {
        GT.call(this, c, d, 2 === b ? "top" : "bottom", new _.WJ(a), new _.LH, e, !0, h ? {
            maxHeight: _.az(h, 1)
        } : null);
        this.L = f;
        this.slotId = g;
        this.Nj = !!_.Iq(this.L, this.slotId);
        2 === b && _.nK(this.L, this.slotId)
    };
    _.T(aU, GT);
    aU.prototype.rb = function() {
        return 0 === (0, _.Wp)() || GT.prototype.rb.call(this)
    };
    var bU = function(a, b, c) {
        XT.call(this, b, a, c, _.Pf(_.cE), !0);
        $T(this)
    };
    _.T(bU, XT);
    var cU = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        var r = [];
        _.E(_.ZD) && 0 === (0, _.Wp)() && r.push(101);
        _.E(_.$D) && r.push(102);
        h = _.E(_.bE) ? dS(h) : new _.u.Set(_.E(_.iE) ? [2] : []);
        OS.call(this, b, c, e, new bU(b, c, d), new _.LH, f, g, {
            Cj: _.E(_.aE),
            ci: r,
            Jk: !0,
            Gf: {
                Mm: 3,
                version: a.Pa
            },
            ol: !0,
            ll: _.E(_.eE) ? m : null,
            yi: _.Pf(_.fE)
        }, h, a.V, {
            pvsid: a.pvsid,
            Ea: a.Ea,
            fb: 17,
            Hb: a.Pa
        });
        this.ga = k;
        this.Dc = l;
        this.ka = n;
        this.W = p;
        _.S(this, this.C)
    };
    _.T(cU, OS);
    cU.prototype.mb = function() {
        var a;
        if (!(a = this.ga)) {
            var b = _.Nf(VT),
                c = this.W;
            try {
                if (c && WT(b, c, this.ka)) {
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
    cU.prototype.xa = function() {
        return !0
    };
    cU.prototype.J = function() {
        OS.prototype.J.call(this);
        this.Dc()
    };
    cU.prototype.rb = function() {
        return this.ga || WT(_.Nf(VT), this.W, this.ka)
    };
    var dU = {
        Yk: aU,
        rl: cU
    };
    _.NP(_m, _.fO).resolve(dU);
})