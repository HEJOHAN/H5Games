! function(t, e, a) {
    a.un, a.uns;
    var i = a.static,
        n = a.class,
        r = a.getset,
        s = (a.__newvec, laya.webgl.canvas.BlendMode),
        o = (laya.webgl.utils.Buffer, laya.resource.Context, laya.display.cmd.DrawParticleCmd),
        l = laya.utils.Handler,
        c = (laya.net.Loader, laya.maths.MathUtil),
        h = laya.webgl.utils.MeshParticle2D,
        m = (laya.renders.Render, laya.webgl.utils.RenderState2D),
        u = laya.webgl.shader.Shader,
        d = (laya.webgl.shader.ShaderValue, laya.display.Sprite),
        _ = laya.utils.Stat,
        f = (laya.resource.Texture, laya.webgl.shader.d2.value.Value2D),
        p = (laya.webgl.utils.VertexBuffer2D, laya.webgl.WebGL),
        v = (laya.webgl.WebGLContext, n(y, "laya.particle.ParticleTemplateBase"), y.prototype.addParticleArray = function(t, e) {}, y);

    function y() {
        this.settings = null, this.texture = null
    }
    var g = function() {
        function t() {
            this._frameTime = 0, this._emissionRate = 60, this._emissionTime = 0, this.minEmissionTime = 1 / 60, this._particleTemplate = null
        }
        n(t, "laya.particle.emitter.EmitterBase");
        var e = t.prototype;
        return e.start = function(t) {
            void 0 === t && (t = Number.MAX_VALUE), 0 != this._emissionRate && (this._emissionTime = t)
        }, e.stop = function() {
            this._emissionTime = 0
        }, e.clear = function() {
            this._emissionTime = 0
        }, e.emit = function() {}, e.advanceTime = function(t) {
            if (void 0 === t && (t = 1), this._emissionTime -= t, !(this._emissionTime < 0 || (this._frameTime += t, this._frameTime < this.minEmissionTime)))
                for (; this._frameTime > this.minEmissionTime;) this._frameTime -= this.minEmissionTime, this.emit()
        }, r(0, e, "particleTemplate", null, function(t) {
            this._particleTemplate = t
        }), r(0, e, "emissionRate", function() {
            return this._emissionRate
        }, function(t) {
            t <= 0 || 0 < (this._emissionRate = t) && (this.minEmissionTime = 1 / t)
        }), t
    }();
    n(E, "laya.particle.ParticleEmitter"), E.prototype.update = function(t, e) {
        if (0 < (t /= 1e3)) {
            c.subtractVector3(e, this._previousPosition, this._tempVelocity), c.scaleVector3(this._tempVelocity, 1 / t, this._tempVelocity);
            for (var i = this._timeLeftOver + t, r = -this._timeLeftOver; i > this._timeBetweenParticles;) r += this._timeBetweenParticles, i -= this._timeBetweenParticles, c.lerpVector3(this._previousPosition, e, r / t, this._tempPosition), this._templet.addParticleArray(this._tempPosition, this._tempVelocity);
            this._timeLeftOver = i
        }
        this._previousPosition[0] = e[0], this._previousPosition[1] = e[1], this._previousPosition[2] = e[2]
    };

    function E(t, e, i) {
        this._templet = null, this._timeBetweenParticles = NaN, this._previousPosition = null, this._timeLeftOver = 0, this._tempVelocity = new Float32Array([0, 0, 0]), this._tempPosition = new Float32Array([0, 0, 0]), this._templet = t, this._timeBetweenParticles = 1 / e, this._previousPosition = i
    }
    var C = (n(x, "laya.particle.ParticleSetting"), x.checkSetting = function(t) {
        var e;
        for (e in x._defaultSetting) t.hasOwnProperty(e) || (t[e] = x._defaultSetting[e]);
        t.endVelocity = +t.endVelocity, t.gravity[0] = +t.gravity[0], t.gravity[1] = +t.gravity[1], t.gravity[2] = +t.gravity[2]
    }, i(x, ["_defaultSetting", function() {
        return this._defaultSetting = new x
    }]), x);

    function x() {
        this.textureName = null, this.textureCount = 1, this.maxPartices = 100, this.duration = 1, this.ageAddScale = 0, this.emitterVelocitySensitivity = 1, this.minStartSize = 100, this.maxStartSize = 100, this.minEndSize = 100, this.maxEndSize = 100, this.minHorizontalVelocity = 0, this.maxHorizontalVelocity = 0, this.minVerticalVelocity = 0, this.maxVerticalVelocity = 0, this.endVelocity = 1, this.minRotateSpeed = 0, this.maxRotateSpeed = 0, this.minStartRadius = 0, this.maxStartRadius = 0, this.minEndRadius = 0, this.maxEndRadius = 0, this.minHorizontalStartRadian = 0, this.maxHorizontalStartRadian = 0, this.minVerticalStartRadian = 0, this.maxVerticalStartRadian = 0, this.useEndRadian = !0, this.minHorizontalEndRadian = 0, this.maxHorizontalEndRadian = 0, this.minVerticalEndRadian = 0, this.maxVerticalEndRadian = 0, this.colorComponentInter = !1, this.disableColor = !1, this.blendState = 0, this.emitterType = "null", this.emissionRate = 0, this.sphereEmitterRadius = 1, this.sphereEmitterVelocity = 0, this.sphereEmitterVelocityAddVariance = 0, this.ringEmitterRadius = 30, this.ringEmitterVelocity = 0, this.ringEmitterVelocityAddVariance = 0, this.ringEmitterUp = 2, this.gravity = new Float32Array([0, 0, 0]), this.minStartColor = new Float32Array([1, 1, 1, 1]), this.maxStartColor = new Float32Array([1, 1, 1, 1]), this.minEndColor = new Float32Array([1, 1, 1, 1]), this.maxEndColor = new Float32Array([1, 1, 1, 1]), this.pointEmitterPosition = new Float32Array([0, 0, 0]), this.pointEmitterPositionVariance = new Float32Array([0, 0, 0]), this.pointEmitterVelocity = new Float32Array([0, 0, 0]), this.pointEmitterVelocityAddVariance = new Float32Array([0, 0, 0]), this.boxEmitterCenterPosition = new Float32Array([0, 0, 0]), this.boxEmitterSize = new Float32Array([0, 0, 0]), this.boxEmitterVelocity = new Float32Array([0, 0, 0]), this.boxEmitterVelocityAddVariance = new Float32Array([0, 0, 0]), this.sphereEmitterCenterPosition = new Float32Array([0, 0, 0]), this.ringEmitterCenterPosition = new Float32Array([0, 0, 0]), this.positionVariance = new Float32Array([0, 0, 0])
    }
    var P = (n(R, "laya.particle.ParticleData"), R.Create = function(t, e, i, r) {
        var a = new R;
        a.position = e, c.scaleVector3(i, t.emitterVelocitySensitivity, R._tempVelocity);
        var n = c.lerp(t.minHorizontalVelocity, t.maxHorizontalVelocity, Math.random()),
            s = Math.random() * Math.PI * 2;
        R._tempVelocity[0] += n * Math.cos(s), R._tempVelocity[2] += n * Math.sin(s), R._tempVelocity[1] += c.lerp(t.minVerticalVelocity, t.maxVerticalVelocity, Math.random()), a.velocity = R._tempVelocity, a.startColor = R._tempStartColor, a.endColor = R._tempEndColor;
        var o = 0;
        if (t.disableColor) {
            for (o = 0; o < 3; o++) a.startColor[o] = 1, a.endColor[o] = 1;
            a.startColor[o] = c.lerp(t.minStartColor[o], t.maxStartColor[o], Math.random()), a.endColor[o] = c.lerp(t.minEndColor[o], t.maxEndColor[o], Math.random())
        } else if (t.colorComponentInter)
            for (o = 0; o < 4; o++) a.startColor[o] = c.lerp(t.minStartColor[o], t.maxStartColor[o], Math.random()), a.endColor[o] = c.lerp(t.minEndColor[o], t.maxEndColor[o], Math.random());
        else c.lerpVector4(t.minStartColor, t.maxStartColor, Math.random(), a.startColor), c.lerpVector4(t.minEndColor, t.maxEndColor, Math.random(), a.endColor);
        a.sizeRotation = R._tempSizeRotation;
        var l = Math.random();
        a.sizeRotation[0] = c.lerp(t.minStartSize, t.maxStartSize, l), a.sizeRotation[1] = c.lerp(t.minEndSize, t.maxEndSize, l), a.sizeRotation[2] = c.lerp(t.minRotateSpeed, t.maxRotateSpeed, Math.random()), a.radius = R._tempRadius;
        var h = Math.random();
        a.radius[0] = c.lerp(t.minStartRadius, t.maxStartRadius, h), a.radius[1] = c.lerp(t.minEndRadius, t.maxEndRadius, h), a.radian = R._tempRadian, a.radian[0] = c.lerp(t.minHorizontalStartRadian, t.maxHorizontalStartRadian, Math.random()), a.radian[1] = c.lerp(t.minVerticalStartRadian, t.maxVerticalStartRadian, Math.random());
        var m = t.useEndRadian;
        return a.radian[2] = m ? c.lerp(t.minHorizontalEndRadian, t.maxHorizontalEndRadian, Math.random()) : a.radian[0], a.radian[3] = m ? c.lerp(t.minVerticalEndRadian, t.maxVerticalEndRadian, Math.random()) : a.radian[1], a.durationAddScale = t.ageAddScale * Math.random(), a.time = r, a
    }, i(R, ["_tempVelocity", function() {
        return this._tempVelocity = new Float32Array(3)
    }, "_tempStartColor", function() {
        return this._tempStartColor = new Float32Array(4)
    }, "_tempEndColor", function() {
        return this._tempEndColor = new Float32Array(4)
    }, "_tempSizeRotation", function() {
        return this._tempSizeRotation = new Float32Array(3)
    }, "_tempRadius", function() {
        return this._tempRadius = new Float32Array(2)
    }, "_tempRadian", function() {
        return this._tempRadian = new Float32Array(4)
    }]), R);

    function R() {
        this.position = null, this.velocity = null, this.startColor = null, this.endColor = null, this.sizeRotation = null, this.radius = null, this.radian = null, this.durationAddScale = NaN, this.time = NaN
    }
    var V = (n(S, "laya.particle.shader.value.ParticleShaderValue", f), S.prototype.upload = function() {
        var t = this.size;
        t[0] = m.width, t[1] = m.height, this.alpha = this.ALPHA * m.worldAlpha, S.pShader.upload(this)
    }, i(S, ["pShader", function() {
        return this.pShader = new F
    }]), S);

    function S() {
        this.u_CurrentTime = NaN, this.u_Duration = NaN, this.u_Gravity = null, this.u_EndVelocity = NaN, this.u_texture = null, S.__super.call(this, 0, 0)
    }
    var A = function() {
            function e(t) {
                this._vertices = null, this._mesh = null, this._conchMesh = null, this._floatCountPerVertex = 29, this._firstActiveElement = 0, this._firstNewElement = 0, this._firstFreeElement = 0, this._firstRetiredElement = 0, this._currentTime = 0, this._drawCounter = 0, e.__super.call(this), this.settings = t
            }
            n(e, "laya.particle.ParticleTemplateWebGL", v);
            var t = e.prototype;
            return t.reUse = function(t, e) {
                return 0
            }, t.initialize = function() {
                var t;
                this._vertices = this._mesh._vb.getFloat32Array(), t = this._mesh._stride / 4;
                for (var e = 0, i = 0, r = 0; r < this.settings.maxPartices; r++) {
                    var a = Math.random(),
                        n = this.settings.textureCount ? 1 / this.settings.textureCount : 1,
                        s = NaN;
                    for (s = 0; s < this.settings.textureCount && !(a < s + n); s += n);
                    this._vertices[e++] = -1, this._vertices[e++] = -1, this._vertices[e++] = 0, this._vertices[e++] = s, e = i += t, this._vertices[e++] = 1, this._vertices[e++] = -1, this._vertices[e++] = 1, this._vertices[e++] = s, e = i += t, this._vertices[e++] = 1, this._vertices[e++] = 1, this._vertices[e++] = 1, this._vertices[e++] = s + n, e = i += t, this._vertices[e++] = -1, this._vertices[e++] = 1, this._vertices[e++] = 0, this._vertices[e++] = s + n, e = i += t
                }
            }, t.update = function(t) {
                this._currentTime += t / 1e3, this.retireActiveParticles(), this.freeRetiredParticles(), this._firstActiveElement == this._firstFreeElement && (this._currentTime = 0), this._firstRetiredElement == this._firstActiveElement && (this._drawCounter = 0)
            }, t.retireActiveParticles = function() {
                for (var t = this.settings.duration; this._firstActiveElement != this._firstNewElement;) {
                    var e = this._firstActiveElement * this._floatCountPerVertex * 4,
                        i = 28 + e,
                        r = this._currentTime - this._vertices[i];
                    if (1e-4 + (r *= 1 + this._vertices[27 + e]) < t) break;
                    this._vertices[i] = this._drawCounter, this._firstActiveElement++, this._firstActiveElement >= this.settings.maxPartices && (this._firstActiveElement = 0)
                }
            }, t.freeRetiredParticles = function() {
                for (; this._firstRetiredElement != this._firstActiveElement;) {
                    if (this._drawCounter - this._vertices[this._firstRetiredElement * this._floatCountPerVertex * 4 + 28] < 3) break;
                    this._firstRetiredElement++, this._firstRetiredElement >= this.settings.maxPartices && (this._firstRetiredElement = 0)
                }
            }, t.addNewParticlesToVertexBuffer = function() {}, t.addParticleArray = function(t, e) {
                var i = this._firstFreeElement + 1;
                if (i >= this.settings.maxPartices && (i = 0), i !== this._firstRetiredElement) {
                    for (var r = P.Create(this.settings, t, e, this._currentTime), a = this._firstFreeElement * this._floatCountPerVertex * 4, n = 0; n < 4; n++) {
                        var s = 0,
                            o = 0;
                        for (s = 0, o = 4; s < 3; s++) this._vertices[a + n * this._floatCountPerVertex + o + s] = r.position[s];
                        for (s = 0, o = 7; s < 3; s++) this._vertices[a + n * this._floatCountPerVertex + o + s] = r.velocity[s];
                        for (s = 0, o = 10; s < 4; s++) this._vertices[a + n * this._floatCountPerVertex + o + s] = r.startColor[s];
                        for (s = 0, o = 14; s < 4; s++) this._vertices[a + n * this._floatCountPerVertex + o + s] = r.endColor[s];
                        for (s = 0, o = 18; s < 3; s++) this._vertices[a + n * this._floatCountPerVertex + o + s] = r.sizeRotation[s];
                        for (s = 0, o = 21; s < 2; s++) this._vertices[a + n * this._floatCountPerVertex + o + s] = r.radius[s];
                        for (s = 0, o = 23; s < 4; s++) this._vertices[a + n * this._floatCountPerVertex + o + s] = r.radian[s];
                        this._vertices[a + n * this._floatCountPerVertex + 27] = r.durationAddScale, this._vertices[a + n * this._floatCountPerVertex + 28] = r.time
                    }
                    this._firstFreeElement = i
                }
            }, e
        }(),
        w = function(t) {
            function e(t) {
                this.setting = null, this._posRange = null, this._canvasTemplate = null, this._emitFun = null, e.__super.call(this), this.template = t
            }
            n(e, "laya.particle.emitter.Emitter2D", t);
            var i = e.prototype;
            return i.emit = function() {
                t.prototype.emit.call(this), null != this._emitFun && this._emitFun()
            }, i.getRandom = function(t) {
                return (2 * Math.random() - 1) * t
            }, i.webGLEmit = function() {
                var t = new Float32Array(3);
                t[0] = this.getRandom(this._posRange[0]), t[1] = this.getRandom(this._posRange[1]), t[2] = this.getRandom(this._posRange[2]);
                var e = new Float32Array(3);
                e[0] = 0, e[1] = 0, e[2] = 0, this._particleTemplate.addParticleArray(t, e)
            }, i.canvasEmit = function() {
                var t = new Float32Array(3);
                t[0] = this.getRandom(this._posRange[0]), t[1] = this.getRandom(this._posRange[1]), t[2] = this.getRandom(this._posRange[2]);
                var e = new Float32Array(3);
                e[0] = 0, e[1] = 0, e[2] = 0, this._particleTemplate.addParticleArray(t, e)
            }, r(0, i, "template", function() {
                return this._particleTemplate
            }, function(t) {
                (this._particleTemplate = t) || (this._emitFun = null, this.setting = null, this._posRange = null), this.setting = t.settings, this._posRange = this.setting.positionVariance, this._particleTemplate instanceof laya.particle.ParticleTemplate2D && (this._emitFun = this.webGLEmit)
            }), e
        }(g),
        z = function(i) {
            function r(t) {
                this.x = 0, this.y = 0, this._blendFn = null, this._startTime = 0, this._key = {}, this.sv = new V, r.__super.call(this, t);
                var e = this;
                a.loader.load(this.settings.textureName, l.create(null, function(t) {
                    e.texture = t
                })), this.sv.u_Duration = this.settings.duration, this.sv.u_Gravity = this.settings.gravity, this.sv.u_EndVelocity = this.settings.endVelocity, this._blendFn = s.fns[t.blendState], this._mesh = h.getAMesh(this.settings.maxPartices), this.initialize()
            }
            n(r, "laya.particle.ParticleTemplate2D", i);
            var t = r.prototype;
            return a.imps(t, {
                "laya.webgl.submit.ISubmit": !0
            }), t.getRenderType = function() {
                return -111
            }, t.releaseRender = function() {}, t.addParticleArray = function(t, e) {
                t[0] += this.x, t[1] += this.y, i.prototype.addParticleArray.call(this, t, e)
            }, t.addNewParticlesToVertexBuffer = function() {
                var t = this._mesh._vb;
                t.clear(), t.append(this._vertices);
                var e = 0;
                this._firstNewElement < this._firstFreeElement ? (e = 4 * this._firstNewElement * this._floatCountPerVertex * 4, t.subUpload(e, e, e + 4 * (this._firstFreeElement - this._firstNewElement) * this._floatCountPerVertex * 4)) : (e = 4 * this._firstNewElement * this._floatCountPerVertex * 4, t.subUpload(e, e, e + 4 * (this.settings.maxPartices - this._firstNewElement) * this._floatCountPerVertex * 4), 0 < this._firstFreeElement && (t.setNeedUpload(), t.subUpload(0, 0, 4 * this._firstFreeElement * this._floatCountPerVertex * 4))), this._firstNewElement = this._firstFreeElement
            }, t.renderSubmit = function() {
                if (this.texture && this.texture.getIsReady()) {
                    if (this.update(a.timer._delta), this.sv.u_CurrentTime = this._currentTime, this._firstNewElement != this._firstFreeElement && this.addNewParticlesToVertexBuffer(), this.blend(), this._firstActiveElement != this._firstFreeElement) {
                        var t = p.mainContext;
                        this._mesh.useMesh(t), this.sv.u_texture = this.texture._getSource(), this.sv.upload(), this._firstActiveElement < this._firstFreeElement ? p.mainContext.drawElements(4, 6 * (this._firstFreeElement - this._firstActiveElement), 5123, 6 * this._firstActiveElement * 2) : (p.mainContext.drawElements(4, 6 * (this.settings.maxPartices - this._firstActiveElement), 5123, 6 * this._firstActiveElement * 2), 0 < this._firstFreeElement && p.mainContext.drawElements(4, 6 * this._firstFreeElement, 5123, 0)), _.renderBatches++
                    }
                    this._drawCounter++
                }
                return 1
            }, t.updateParticleForNative = function() {
                this.texture && this.texture.getIsReady() && (this.update(a.timer._delta), this.sv.u_CurrentTime = this._currentTime, this._firstNewElement != this._firstFreeElement && (this._firstNewElement = this._firstFreeElement))
            }, t.getMesh = function() {
                return this._mesh
            }, t.getConchMesh = function() {
                return this._conchMesh
            }, t.getFirstNewElement = function() {
                return this._firstNewElement
            }, t.getFirstFreeElement = function() {
                return this._firstFreeElement
            }, t.getFirstActiveElement = function() {
                return this._firstActiveElement
            }, t.getFirstRetiredElement = function() {
                return this._firstRetiredElement
            }, t.setFirstFreeElement = function(t) {
                this._firstFreeElement = t
            }, t.setFirstNewElement = function(t) {
                this._firstNewElement = t
            }, t.addDrawCounter = function() {
                this._drawCounter++
            }, t.blend = function() {
                if (s.activeBlendFunction !== this._blendFn) {
                    var t = p.mainContext;
                    t.enable(3042), this._blendFn(t), s.activeBlendFunction = this._blendFn
                }
            }, t.dispose = function() {
                this._mesh.releaseMesh()
            }, r.activeBlendType = -1, r
        }(A),
        F = (function(e) {
            function i(t) {
                this._particleTemplate = null, this._emitter = null, this.autoPlay = !0, this.tempCmd = null, i.__super.call(this), this._matrix4 = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), this.customRenderEnable = !0, t && this.setParticleSetting(t)
            }
            n(i, "laya.particle.Particle2D", e);
            var t = i.prototype;
            t.load = function(t) {
                a.loader.load(t, l.create(this, this.setParticleSetting), null, "json")
            }, t.setParticleSetting = function(t) {
                if (!t) return this.stop();
                C.checkSetting(t), this.customRenderEnable = !0, this._particleTemplate = new z(t), this.graphics._saveToCmd(null, o.create(this._particleTemplate)), this._emitter ? this._emitter.template = this._particleTemplate : this._emitter = new w(this._particleTemplate), this.autoPlay && (this.emitter.start(), this.play())
            }, t.play = function() {
                a.timer.frameLoop(1, this, this._loop)
            }, t.stop = function() {
                a.timer.clear(this, this._loop)
            }, t._loop = function() {
                this.advanceTime(1 / 60)
            }, t.advanceTime = function(t) {
                void 0 === t && (t = 1), this._emitter && this._emitter.advanceTime(t)
            }, t.customRender = function(t, e, i) {
                this._matrix4[0] = t._curMat.a, this._matrix4[1] = t._curMat.b, this._matrix4[4] = t._curMat.c, this._matrix4[5] = t._curMat.d, this._matrix4[12] = t._curMat.tx, this._matrix4[13] = t._curMat.ty, this._particleTemplate.sv.u_mmat = this._matrix4
            }, t.destroy = function(t) {
                void 0 === t && (t = !0), this._particleTemplate instanceof laya.particle.ParticleTemplate2D && this._particleTemplate.dispose(), e.prototype.destroy.call(this, t)
            }, r(0, t, "url", null, function(t) {
                this.load(t)
            }), r(0, t, "emitter", function() {
                return this._emitter
            })
        }(d), n(T, "laya.particle.shader.ParticleShader", u), i(T, ["vs", function() {
            return this.vs = "attribute vec4 a_CornerTextureCoordinate;\nattribute vec3 a_Position;\nattribute vec3 a_Velocity;\nattribute vec4 a_StartColor;\nattribute vec4 a_EndColor;\nattribute vec3 a_SizeRotation;\nattribute vec2 a_Radius;\nattribute vec4 a_Radian;\nattribute float a_AgeAddScale;\nattribute float a_Time;\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\n\nuniform float u_CurrentTime;\nuniform float u_Duration;\nuniform float u_EndVelocity;\nuniform vec3 u_Gravity;\n\nuniform vec2 size;\nuniform mat4 u_mmat;\n\nvec4 ComputeParticlePosition(in vec3 position, in vec3 velocity,in float age,in float normalizedAge)\n{\n\n   float startVelocity = length(velocity);//起始标量速度\n   float endVelocity = startVelocity * u_EndVelocity;//结束标量速度\n\n   float velocityIntegral = startVelocity * normalizedAge +(endVelocity - startVelocity) * normalizedAge *normalizedAge/2.0;//计算当前速度的标量（单位空间），vt=v0*t+(1/2)*a*(t^2)\n   \n   vec3 addPosition = normalize(velocity) * velocityIntegral * u_Duration;//计算受自身速度影响的位置，转换标量到矢量    \n   addPosition += u_Gravity * age * normalizedAge;//计算受重力影响的位置\n   \n   float radius=mix(a_Radius.x, a_Radius.y, normalizedAge); //计算粒子受半径和角度影响（无需计算角度和半径时，可用宏定义优化屏蔽此计算）\n   float radianHorizontal =mix(a_Radian.x,a_Radian.z,normalizedAge);\n   float radianVertical =mix(a_Radian.y,a_Radian.w,normalizedAge);\n   \n   float r =cos(radianVertical)* radius;\n   addPosition.y += sin(radianVertical) * radius;\n\t\n   addPosition.x += cos(radianHorizontal) *r;\n   addPosition.z += sin(radianHorizontal) *r;\n  \n   addPosition.y=-addPosition.y;//2D粒子位置更新需要取负，2D粒子坐标系Y轴正向朝上\n   position+=addPosition;\n   return  vec4(position,1.0);\n}\n\nfloat ComputeParticleSize(in float startSize,in float endSize, in float normalizedAge)\n{    \n    float size = mix(startSize, endSize, normalizedAge);\n    return size;\n}\n\nmat2 ComputeParticleRotation(in float rot,in float age)\n{    \n    float rotation =rot * age;\n    //计算2x2旋转矩阵.\n    float c = cos(rotation);\n    float s = sin(rotation);\n    return mat2(c, -s, s, c);\n}\n\nvec4 ComputeParticleColor(in vec4 startColor,in vec4 endColor,in float normalizedAge)\n{\n\tvec4 color=mix(startColor,endColor,normalizedAge);\n    //硬编码设置，使粒子淡入很快，淡出很慢,6.7的缩放因子把置归一在0到1之间，可以谷歌x*(1-x)*(1-x)*6.7的制图表\n    color.a *= normalizedAge * (1.0-normalizedAge) * (1.0-normalizedAge) * 6.7;\n   \n    return color;\n}\n\nvoid main()\n{\n   float age = u_CurrentTime - a_Time;\n   age *= 1.0 + a_AgeAddScale;\n   float normalizedAge = clamp(age / u_Duration,0.0,1.0);\n   gl_Position = ComputeParticlePosition(a_Position, a_Velocity, age, normalizedAge);//计算粒子位置\n   float pSize = ComputeParticleSize(a_SizeRotation.x,a_SizeRotation.y, normalizedAge);\n   mat2 rotation = ComputeParticleRotation(a_SizeRotation.z, age);\n\t\n    mat4 mat=u_mmat;\n    gl_Position=vec4((mat*gl_Position).xy,0.0,1.0);\n    gl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize*vec2(mat[0][0],mat[1][1]);\n    gl_Position=vec4((gl_Position.x/size.x-0.5)*2.0,(0.5-gl_Position.y/size.y)*2.0,0.0,1.0);\n   \n   v_Color = ComputeParticleColor(a_StartColor,a_EndColor, normalizedAge);\n   v_TextureCoordinate =a_CornerTextureCoordinate.zw;\n}\n\n"
        }, "ps", function() {
            return this.ps = "#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\nuniform sampler2D u_texture;\n\nvoid main()\n{\t\n\tgl_FragColor=texture2D(u_texture,v_TextureCoordinate)*v_Color;\n\tgl_FragColor.xyz *= v_Color.w;\n}"
        }]), T);

    function T() {
        T.__super.call(this, T.vs, T.ps, "ParticleShader", null, ["a_CornerTextureCoordinate", 0, "a_Position", 1, "a_Velocity", 2, "a_StartColor", 3, "a_EndColor", 4, "a_SizeRotation", 5, "a_Radius", 6, "a_Radian", 7, "a_AgeAddScale", 8, "a_Time", 9])
    }
}(window, document, Laya);