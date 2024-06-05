! function(e, t, r) {
    r.un, r.uns;
    var i = r.static,
        a = r.class,
        s = r.getset,
        n = (r.__newvec, laya.resource.Bitmap),
        l = laya.utils.Browser,
        o = (laya.events.Event, laya.events.EventDispatcher),
        c = (laya.utils.Handler, laya.layagl.LayaGL, laya.maths.Rectangle, laya.renders.Render),
        d = laya.display.Sprite,
        h = (laya.display.Stage, laya.resource.Texture),
        u = laya.utils.Utils,
        v = laya.webgl.WebGL,
        m = laya.webgl.WebGLContext;
    a(g, "laya.device.geolocation.Geolocation"), g.getCurrentPosition = function(t, n) {
        g.navigator.geolocation.getCurrentPosition(function(e) {
            g.position.setPosition(e), t.runWith(g.position)
        }, function(e) {
            n.runWith(e)
        }, {
            enableHighAccuracy: laya.device.geolocation.Geolocation.enableHighAccuracy,
            timeout: laya.device.geolocation.Geolocation.timeout,
            maximumAge: laya.device.geolocation.Geolocation.maximumAge
        })
    }, g.watchPosition = function(t, n) {
        return g.navigator.geolocation.watchPosition(function(e) {
            g.position.setPosition(e), t.runWith(g.position)
        }, function(e) {
            n.runWith(e)
        }, {
            enableHighAccuracy: g.enableHighAccuracy,
            timeout: g.timeout,
            maximumAge: g.maximumAge
        })
    }, g.clearWatch = function(e) {
        g.navigator.geolocation.clearWatch(e)
    }, g.PERMISSION_DENIED = 1, g.POSITION_UNAVAILABLE = 2, g.TIMEOUT = 3, g.enableHighAccuracy = !1, g.maximumAge = 0, i(g, ["navigator", function() {
        return this.navigator = l.window.navigator
    }, "position", function() {
        return this.position = new L
    }, "supported", function() {
        return this.supported = !!g.navigator.geolocation
    }, "timeout", function() {
        return this.timeout = 1e10
    }]);

    function g() {}
    var p = (a(f, "laya.device.media.Media"), f.supported = function() {
        return !!l.window.navigator.getUserMedia
    }, f.getMedia = function(e, t, n) {
        l.window.navigator.getUserMedia && l.window.navigator.getUserMedia(e, function(e) {
            t.runWith(l.window.URL.createObjectURL(e))
        }, function(e) {
            n.runWith(e)
        })
    }, f.__init$ = function() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
    }, f);

    function f() {}
    var y = (a(E, "laya.device.motion.AccelerationInfo"), E);

    function E() {
        this.x = NaN, this.y = NaN, this.z = NaN
    }
    var L = function() {
            function e() {
                this.pos = null, this.coords = null
            }
            a(e, "laya.device.geolocation.GeolocationInfo");
            var t = e.prototype;
            return t.setPosition = function(e) {
                this.pos = e, this.coords = e.coords
            }, s(0, t, "heading", function() {
                return this.coords.heading
            }), s(0, t, "latitude", function() {
                return this.coords.latitude
            }), s(0, t, "altitudeAccuracy", function() {
                return this.coords.altitudeAccuracy
            }), s(0, t, "longitude", function() {
                return this.coords.longitude
            }), s(0, t, "altitude", function() {
                return this.coords.altitude
            }), s(0, t, "accuracy", function() {
                return this.coords.accuracy
            }), s(0, t, "speed", function() {
                return this.coords.speed
            }), s(0, t, "timestamp", function() {
                return this.pos.timestamp
            }), e
        }(),
        w = (a(x, "laya.device.motion.RotationInfo"), x);

    function x() {
        this.absolute = !1, this.alpha = NaN, this.beta = NaN, this.gamma = NaN, this.compassAccuracy = NaN
    }(function(o) {
        function t(e) {
            t.__super.call(this), this.onDeviceOrientationChange = this.onDeviceOrientationChange.bind(this)
        }
        a(t, "laya.device.motion.Gyroscope", o);
        var e = t.prototype;
        e.on = function(e, t, n, i) {
            return o.prototype.on.call(this, e, t, n, i), l.window.addEventListener("deviceorientation", this.onDeviceOrientationChange), this
        }, e.off = function(e, t, n, i) {
            return void 0 === i && (i = !1), this.hasListener(e) || l.window.removeEventListener("deviceorientation", this.onDeviceOrientationChange), o.prototype.off.call(this, e, t, n, i)
        }, e.onDeviceOrientationChange = function(e) {
            t.info.alpha = e.alpha, t.info.beta = e.beta, t.info.gamma = e.gamma, e.webkitCompassHeading && (t.info.alpha = -1 * e.webkitCompassHeading, t.info.compassAccuracy = e.webkitCompassAccuracy), this.event("change", [e.absolute, t.info])
        }, s(1, t, "instance", function() {
            return t._instance = t._instance || new t(0)
        }, laya.events.EventDispatcher._$SET_instance), t._instance = null, i(t, ["info", function() {
            return this.info = new w
        }])
    })(o),
    function() {
        function e() {
            this.throushold = 0, this.shakeInterval = 0, this.callback = null, this.lastX = NaN, this.lastY = NaN, this.lastZ = NaN, this.lastMillSecond = NaN, e.__super.call(this)
        }
        a(e, "laya.device.Shake", o);
        var t = e.prototype;
        t.start = function(e, t) {
            this.throushold = e, this.shakeInterval = t, this.lastX = this.lastY = this.lastZ = NaN, T.instance.on("change", this, this.onShake)
        }, t.stop = function() {
            T.instance.off("change", this, this.onShake)
        }, t.onShake = function(e, t, n, i) {
            if (isNaN(this.lastX)) return this.lastX = t.x, this.lastY = t.y, this.lastZ = t.z, void(this.lastMillSecond = l.now());
            var o = Math.abs(this.lastX - t.x),
                a = Math.abs(this.lastY - t.y),
                r = Math.abs(this.lastZ - t.z);
            this.isShaked(o, a, r) && l.now() - this.lastMillSecond > this.shakeInterval && (this.event("change"), this.lastMillSecond = l.now());
            this.lastX = t.x, this.lastY = t.y, this.lastZ = t.z
        }, t.isShaked = function(e, t, n) {
            return e > this.throushold && t > this.throushold || e > this.throushold && n > this.throushold || t > this.throushold && n > this.throushold
        }, s(1, e, "instance", function() {
            return e._instance = e._instance || new e
        }, laya.events.EventDispatcher._$SET_instance), e._instance = null
    }();
    var T = function(o) {
            function n(e) {
                n.__super.call(this), this.onDeviceOrientationChange = this.onDeviceOrientationChange.bind(this)
            }
            a(n, "laya.device.motion.Accelerator", o);
            var e = n.prototype;
            return e.on = function(e, t, n, i) {
                return o.prototype.on.call(this, e, t, n, i), l.window.addEventListener("devicemotion", this.onDeviceOrientationChange), this
            }, e.off = function(e, t, n, i) {
                return void 0 === i && (i = !1), this.hasListener(e) || l.window.removeEventListener("devicemotion", this.onDeviceOrientationChange), o.prototype.off.call(this, e, t, n, i)
            }, e.onDeviceOrientationChange = function(e) {
                var t = e.interval;
                n.acceleration.x = e.acceleration.x, n.acceleration.y = e.acceleration.y, n.acceleration.z = e.acceleration.z, n.accelerationIncludingGravity.x = e.accelerationIncludingGravity.x, n.accelerationIncludingGravity.y = e.accelerationIncludingGravity.y, n.accelerationIncludingGravity.z = e.accelerationIncludingGravity.z, n.rotationRate.alpha = -1 * e.rotationRate.gamma, n.rotationRate.beta = -1 * e.rotationRate.alpha, n.rotationRate.gamma = e.rotationRate.beta, l.onAndroid ? (n.onChrome && (n.rotationRate.alpha *= 180 / Math.PI, n.rotationRate.beta *= 180 / Math.PI, n.rotationRate.gamma *= 180 / Math.PI), n.acceleration.x *= -1, n.accelerationIncludingGravity.x *= -1) : l.onIOS && (n.acceleration.y *= -1, n.acceleration.z *= -1, n.accelerationIncludingGravity.y *= -1, n.accelerationIncludingGravity.z *= -1, t *= 1e3), this.event("change", [n.acceleration, n.accelerationIncludingGravity, n.rotationRate, t])
            }, s(1, n, "instance", function() {
                return n._instance = n._instance || new n(0)
            }, laya.events.EventDispatcher._$SET_instance), n.getTransformedAcceleration = function(e) {
                (n.transformedAcceleration = n.transformedAcceleration || new y).z = e.z, 90 == l.window.orientation ? (n.transformedAcceleration.x = e.y, n.transformedAcceleration.y = -e.x) : -90 == l.window.orientation ? (n.transformedAcceleration.x = -e.y, n.transformedAcceleration.y = e.x) : l.window.orientation ? 180 == l.window.orientation && (n.transformedAcceleration.x = -e.x, n.transformedAcceleration.y = -e.y) : (n.transformedAcceleration.x = e.x, n.transformedAcceleration.y = e.y);
                var t = NaN;
                return -90 == r.stage.canvasDegree ? (t = n.transformedAcceleration.x, n.transformedAcceleration.x = -n.transformedAcceleration.y, n.transformedAcceleration.y = t) : 90 == r.stage.canvasDegree && (t = n.transformedAcceleration.x, n.transformedAcceleration.x = n.transformedAcceleration.y, n.transformedAcceleration.y = -t), n.transformedAcceleration
            }, n._instance = null, n.transformedAcceleration = null, i(n, ["acceleration", function() {
                return this.acceleration = new y
            }, "accelerationIncludingGravity", function() {
                return this.accelerationIncludingGravity = new y
            }, "rotationRate", function() {
                return this.rotationRate = new w
            }, "onChrome", function() {
                return this.onChrome = -1 < l.userAgent.indexOf("Chrome")
            }]), n
        }(o),
        _ = function(i) {
            function n(e, t) {
                this.htmlVideo = null, this.videoElement = null, this.internalTexture = null, void 0 === e && (e = 320), void 0 === t && (t = 240), n.__super.call(this), this.htmlVideo = new A, this.videoElement = this.htmlVideo.getVideo(), (this.videoElement.layaTarget = this).internalTexture = new h(this.htmlVideo), this.videoElement.addEventListener("abort", n.onAbort), this.videoElement.addEventListener("canplay", n.onCanplay), this.videoElement.addEventListener("canplaythrough", n.onCanplaythrough), this.videoElement.addEventListener("durationchange", n.onDurationchange), this.videoElement.addEventListener("emptied", n.onEmptied), this.videoElement.addEventListener("error", n.onError), this.videoElement.addEventListener("loadeddata", n.onLoadeddata), this.videoElement.addEventListener("loadedmetadata", n.onLoadedmetadata), this.videoElement.addEventListener("loadstart", n.onLoadstart), this.videoElement.addEventListener("pause", n.onPause), this.videoElement.addEventListener("play", n.onPlay), this.videoElement.addEventListener("playing", n.onPlaying), this.videoElement.addEventListener("progress", n.onProgress), this.videoElement.addEventListener("ratechange", n.onRatechange), this.videoElement.addEventListener("seeked", n.onSeeked), this.videoElement.addEventListener("seeking", n.onSeeking), this.videoElement.addEventListener("stalled", n.onStalled), this.videoElement.addEventListener("suspend", n.onSuspend), this.videoElement.addEventListener("timeupdate", n.onTimeupdate), this.videoElement.addEventListener("volumechange", n.onVolumechange), this.videoElement.addEventListener("waiting", n.onWaiting), this.videoElement.addEventListener("ended", this.onPlayComplete.bind(this)), this.size(e, t), l.onMobile && (this.onDocumentClick = this.onDocumentClick.bind(this), l.document.addEventListener("touchend", this.onDocumentClick))
            }
            a(n, "laya.device.media.Video", i);
            var e = n.prototype;
            return e.onPlayComplete = function(e) {
                this.event("ended"), c.isConchApp && this.videoElement && this.videoElement.loop || r.timer.clear(this, this.renderCanvas)
            }, e.load = function(e) {
                0 == e.indexOf("blob:") ? this.videoElement.src = e : this.htmlVideo.setSource(e, laya.device.media.Video.MP4)
            }, e.play = function() {
                this.videoElement.play(), r.timer.frameLoop(1, this, this.renderCanvas)
            }, e.pause = function() {
                this.videoElement.pause(), r.timer.clear(this, this.renderCanvas)
            }, e.reload = function() {
                this.videoElement.load()
            }, e.canPlayType = function(e) {
                var t;
                switch (e) {
                    case laya.device.media.Video.MP4:
                        t = "video/mp4";
                        break;
                    case laya.device.media.Video.OGG:
                        t = "video/ogg";
                        break;
                    case laya.device.media.Video.WEBM:
                        t = "video/webm"
                }
                return this.videoElement.canPlayType(t)
            }, e.renderCanvas = function() {
                0 !== this.readyState && (this.htmlVideo.updateTexture(), this.graphics.clear(), this.graphics.drawTexture(this.internalTexture, 0, 0, this.width, this.height))
            }, e.onDocumentClick = function() {
                this.videoElement.play(), this.videoElement.pause(), l.document.removeEventListener("touchend", this.onDocumentClick)
            }, e.size = function(e, t) {
                if (i.prototype.size.call(this, e, t), c.isConchApp) {
                    var n = u.getTransformRelativeToWindow(this, 0, 0);
                    this.videoElement.width = e * n.scaleX
                } else this.videoElement.width = e / l.pixelRatio;
                return this.paused && this.renderCanvas(), this
            }, e.destroy = function(e) {
                void 0 === e && (e = !0), i.prototype.destroy.call(this, e), this.videoElement.removeEventListener("abort", n.onAbort), this.videoElement.removeEventListener("canplay", n.onCanplay), this.videoElement.removeEventListener("canplaythrough", n.onCanplaythrough), this.videoElement.removeEventListener("durationchange", n.onDurationchange), this.videoElement.removeEventListener("emptied", n.onEmptied), this.videoElement.removeEventListener("error", n.onError), this.videoElement.removeEventListener("loadeddata", n.onLoadeddata), this.videoElement.removeEventListener("loadedmetadata", n.onLoadedmetadata), this.videoElement.removeEventListener("loadstart", n.onLoadstart), this.videoElement.removeEventListener("pause", n.onPause), this.videoElement.removeEventListener("play", n.onPlay), this.videoElement.removeEventListener("playing", n.onPlaying), this.videoElement.removeEventListener("progress", n.onProgress), this.videoElement.removeEventListener("ratechange", n.onRatechange), this.videoElement.removeEventListener("seeked", n.onSeeked), this.videoElement.removeEventListener("seeking", n.onSeeking), this.videoElement.removeEventListener("stalled", n.onStalled), this.videoElement.removeEventListener("suspend", n.onSuspend), this.videoElement.removeEventListener("timeupdate", n.onTimeupdate), this.videoElement.removeEventListener("volumechange", n.onVolumechange), this.videoElement.removeEventListener("waiting", n.onWaiting), this.videoElement.removeEventListener("ended", this.onPlayComplete), this.pause(), this.videoElement.layaTarget = null, this.videoElement = null, this.htmlVideo.destroy()
            }, e.syncVideoPosition = function() {
                var e, t = r.stage;
                e = u.getGlobalPosAndScale(this);
                var n = t._canvasTransform.a,
                    i = t._canvasTransform.d,
                    o = e.x * t.clientScaleX * n + t.offset.x,
                    a = e.y * t.clientScaleY * i + t.offset.y;
                this.videoElement.style.left = o + "px", this.videoElement.style.top = a + "px", this.videoElement.width = this.width / l.pixelRatio, this.videoElement.height = this.height / l.pixelRatio
            }, s(0, e, "buffered", function() {
                return this.videoElement.buffered
            }), s(0, e, "videoWidth", function() {
                return this.videoElement.videoWidth
            }), s(0, e, "currentSrc", function() {
                return this.videoElement.currentSrc
            }), s(0, e, "currentTime", function() {
                return this.videoElement.currentTime
            }, function(e) {
                this.videoElement.currentTime = e, this.renderCanvas()
            }), s(0, e, "ended", function() {
                return this.videoElement.ended
            }), s(0, e, "volume", function() {
                return this.videoElement.volume
            }, function(e) {
                this.videoElement.volume = e
            }), s(0, e, "videoHeight", function() {
                return this.videoElement.videoHeight
            }), s(0, e, "readyState", function() {
                return this.videoElement.readyState
            }), s(0, e, "duration", function() {
                return this.videoElement.duration
            }), s(0, e, "error", function() {
                return this.videoElement.error
            }), s(0, e, "loop", function() {
                return this.videoElement.loop
            }, function(e) {
                this.videoElement.loop = e
            }), s(0, e, "x", i.prototype._$get_x, function(e) {
                if (r.superSet(d, this, "x", e), c.isConchApp) {
                    var t = u.getTransformRelativeToWindow(this, 0, 0);
                    this.videoElement.style.left = t.x
                }
            }), s(0, e, "y", i.prototype._$get_y, function(e) {
                if (r.superSet(d, this, "y", e), c.isConchApp) {
                    var t = u.getTransformRelativeToWindow(this, 0, 0);
                    this.videoElement.style.top = t.y
                }
            }), s(0, e, "playbackRate", function() {
                return this.videoElement.playbackRate
            }, function(e) {
                this.videoElement.playbackRate = e
            }), s(0, e, "muted", function() {
                return this.videoElement.muted
            }, function(e) {
                this.videoElement.muted = e
            }), s(0, e, "paused", function() {
                return this.videoElement.paused
            }), s(0, e, "preload", function() {
                return this.videoElement.preload
            }, function(e) {
                this.videoElement.preload = e
            }), s(0, e, "seekable", function() {
                return this.videoElement.seekable
            }), s(0, e, "seeking", function() {
                return this.videoElement.seeking
            }), s(0, e, "width", i.prototype._$get_width, function(e) {
                if (c.isConchApp) {
                    var t = u.getTransformRelativeToWindow(this, 0, 0);
                    this.videoElement.width = e * t.scaleX
                } else this.videoElement.width = this.width / l.pixelRatio;
                r.superSet(d, this, "width", e), this.paused && this.renderCanvas()
            }), s(0, e, "height", i.prototype._$get_height, function(e) {
                if (c.isConchApp) {
                    var t = u.getTransformRelativeToWindow(this, 0, 0);
                    this.videoElement.height = e * t.scaleY
                } else this.videoElement.height = this.height / l.pixelRatio;
                r.superSet(d, this, "height", e)
            }), n.onAbort = function(e) {
                e.target.layaTarget.event("abort")
            }, n.onCanplay = function(e) {
                e.target.layaTarget.event("canplay")
            }, n.onCanplaythrough = function(e) {
                e.target.layaTarget.event("canplaythrough")
            }, n.onDurationchange = function(e) {
                e.target.layaTarget.event("durationchange")
            }, n.onEmptied = function(e) {
                e.target.layaTarget.event("emptied")
            }, n.onError = function(e) {
                e.target.layaTarget.event("error")
            }, n.onLoadeddata = function(e) {
                e.target.layaTarget.event("loadeddata")
            }, n.onLoadedmetadata = function(e) {
                e.target.layaTarget.event("loadedmetadata")
            }, n.onLoadstart = function(e) {
                e.target.layaTarget.event("loadstart")
            }, n.onPause = function(e) {
                e.target.layaTarget.event("pause")
            }, n.onPlay = function(e) {
                e.target.layaTarget.event("play")
            }, n.onPlaying = function(e) {
                e.target.layaTarget.event("playing")
            }, n.onProgress = function(e) {
                e.target.layaTarget.event("progress")
            }, n.onRatechange = function(e) {
                e.target.layaTarget.event("ratechange")
            }, n.onSeeked = function(e) {
                e.target.layaTarget.event("seeked")
            }, n.onSeeking = function(e) {
                e.target.layaTarget.event("seeking")
            }, n.onStalled = function(e) {
                e.target.layaTarget.event("stalled")
            }, n.onSuspend = function(e) {
                e.target.layaTarget.event("suspend")
            }, n.onTimeupdate = function(e) {
                e.target.layaTarget.event("timeupdate")
            }, n.onVolumechange = function(e) {
                e.target.layaTarget.event("volumechange")
            }, n.onWaiting = function(e) {
                e.target.layaTarget.event("waiting")
            }, n.MP4 = 1, n.OGG = 2, n.CAMERA = 4, n.WEBM = 8, n.SUPPORT_PROBABLY = "probably", n.SUPPORT_MAYBY = "maybe", n.SUPPORT_NO = "", n
        }(d),
        A = function(e) {
            function t() {
                this.gl = null, this.preTarget = null, this.preTexture = null, t.__super.call(this), !c.isConchApp && l.onIPhone || (this.gl = c.isConchApp ? LayaGLContext.instance : v.mainContext, this._source = this.gl.createTexture(), m.bindTexture(this.gl, 3553, this._source), this.gl.texParameteri(3553, 10242, 33071), this.gl.texParameteri(3553, 10243, 33071), this.gl.texParameteri(3553, 10240, 9729), this.gl.texParameteri(3553, 10241, 9729), m.bindTexture(this.gl, 3553, null))
            }
            a(t, "laya.device.media.WebGLVideo", e);
            var n = t.prototype;
            return n.updateTexture = function() {
                !c.isConchApp && l.onIPhone || (m.bindTexture(this.gl, 3553, this._source), this.gl.texImage2D(3553, 0, 6407, 6407, 5121, this.video), t.curBindSource = this._source)
            }, n.destroy = function() {
                this._source && (this.gl = c.isConchApp ? LayaGLContext.instance : v.mainContext, t.curBindSource == this._source && (m.bindTexture(this.gl, 3553, null), t.curBindSource = null), this.gl.deleteTexture(this._source)), e.prototype.destroy.call(this)
            }, s(0, n, "_glTexture", function() {
                return this._source
            }), t.curBindSource = null, t
        }(function() {
            function e() {
                this.video = null, this._source = null, e.__super.call(this), this._width = 1, this._height = 1, this.createDomElement()
            }
            a(e, "laya.device.media.HtmlVideo", n);
            var t = e.prototype;
            return t.createDomElement = function() {
                var e = this;
                this._source = this.video = l.createElement("video");
                var t = this.video.style;
                t.position = "absolute", t.top = "0px", t.left = "0px", this.video.addEventListener("loadedmetadata", function() {
                    this._w = e.video.videoWidth, this._h = e.video.videoHeight
                }.bind(this))
            }, t.setSource = function(e, t) {
                for (; this.video.childElementCount;) this.video.firstChild.remove();
                t & _.MP4 && this.appendSource(e, "video/mp4"), t & _.OGG && this.appendSource(e + ".ogg", "video/ogg")
            }, t.appendSource = function(e, t) {
                var n = l.createElement("source");
                n.src = e, n.type = t, this.video.appendChild(n)
            }, t.getVideo = function() {
                return this.video
            }, t._getSource = function() {
                return this._source
            }, t.destroy = function() {
                laya.resource.Resource.prototype.destroy.call(this), c.isConchApp && this.video._destroy()
            }, e.create = function() {
                return new e
            }, e
        }());
    r.__init([p])
}(window, document, Laya);