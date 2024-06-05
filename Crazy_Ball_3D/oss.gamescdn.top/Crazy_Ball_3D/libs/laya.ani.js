! function(t, e, i) {
    i.un, i.uns;
    var a = i.static,
        s = i.class,
        r = i.getset,
        n = i.__newvec,
        h = laya.maths.Bezier,
        l = laya.utils.Browser,
        o = laya.utils.Byte,
        u = (laya.events.Event, laya.events.EventDispatcher),
        c = laya.display.Graphics,
        d = laya.resource.HTMLCanvas,
        _ = laya.utils.Handler,
        p = laya.net.Loader,
        f = laya.maths.MathUtil,
        m = laya.maths.Matrix,
        y = (laya.display.Node, laya.maths.Point, laya.maths.Rectangle),
        x = laya.renders.Render,
        g = (laya.renders.RenderContext, laya.resource.Resource),
        v = laya.utils.RunDriver,
        M = laya.display.Sprite,
        D = laya.utils.Stat,
        I = laya.resource.Texture,
        N = laya.net.URL,
        b = laya.utils.Utils,
        T = function() {
            function t() {
                this.nodes = null, this.name = null, this.playTime = NaN, this.bone3DMap = null, this.totalKeyframeDatasLength = 0
            }
            return s(t, "laya.ani.AnimationContent"), t
        }(),
        A = function() {
            function t() {
                this.name = null, this.parentIndex = 0, this.parent = null, this.keyframeWidth = 0, this.lerpType = 0, this.interpolationMethod = null, this.childs = null, this.keyFrame = null, this.playTime = NaN, this.extenData = null, this.dataOffset = 0
            }
            return s(t, "laya.ani.AnimationNodeContent"), t
        }(),
        C = function() {
            function t() {}
            return s(t, "laya.ani.AnimationParser01"), t.parse = function(t, e) {
                var i = e.__getBuffer(),
                    a = 0,
                    s = 0,
                    r = 0,
                    n = 0,
                    h = 0,
                    l = 0,
                    u = 0,
                    c = e.readUTFString();
                t._aniClassName = c;
                var d, _ = e.readUTFString().split("\n"),
                    p = e.getUint8(),
                    f = e.getUint32(),
                    m = e.getUint32();
                f > 0 && (d = i.slice(f, m));
                var y = new o(d);
                for (m > 0 && (t._publicExtData = i.slice(m, i.byteLength)), t._useParent = !!e.getUint8(), t._anis.length = p, a = 0; a < p; a++) {
                    var x = t._anis[a] = new T;
                    x.nodes = new Array;
                    var g = x.name = _[e.getUint16()];
                    t._aniMap[g] = a, x.bone3DMap = {}, x.playTime = e.getFloat32();
                    var v = x.nodes.length = e.getUint8();
                    for (x.totalKeyframeDatasLength = 0, s = 0; s < v; s++) {
                        var M = x.nodes[s] = new A;
                        M.childs = [];
                        var D = e.getInt16();
                        D >= 0 && (M.name = _[D], x.bone3DMap[M.name] = s), M.keyFrame = new Array, M.parentIndex = e.getInt16(), -1 == M.parentIndex ? M.parent = null : M.parent = x.nodes[M.parentIndex], M.lerpType = e.getUint8();
                        var I = e.getUint32();
                        y.pos = I;
                        var N = M.keyframeWidth = y.getUint16();
                        if (x.totalKeyframeDatasLength += N, 0 === M.lerpType || 1 === M.lerpType)
                            for (M.interpolationMethod = [], M.interpolationMethod.length = N, r = 0; r < N; r++) M.interpolationMethod[r] = it.interpolation[y.getUint8()];
                        null != M.parent && M.parent.childs.push(M);
                        var b = e.getUint16();
                        b > 0 && (M.extenData = i.slice(e.pos, e.pos + b), e.pos += b);
                        var C = e.getUint16();
                        M.keyFrame.length = C;
                        var w, S = 0;
                        for (r = 0, n = C; r < n; r++) {
                            if (w = M.keyFrame[r] = new j, w.duration = e.getFloat32(), w.startTime = S, 2 === M.lerpType) {
                                w.interpolationData = [];
                                var F = e.getUint8(),
                                    k = 0;
                                switch (k = e.getFloat32()) {
                                    case 254:
                                        for (w.interpolationData.length = N, u = 0; u < N; u++) w.interpolationData[u] = 0;
                                        break;
                                    case 255:
                                        for (w.interpolationData.length = N, u = 0; u < N; u++) w.interpolationData[u] = 5;
                                        break;
                                    default:
                                        for (w.interpolationData.push(k), l = 1; l < F; l++) w.interpolationData.push(e.getFloat32())
                                }
                            }
                            for (w.data = new Float32Array(N), h = 0; h < N; h++) w.data[h] = e.getFloat32(), w.data[h] > -1e-8 && w.data[h] < 1e-8 && (w.data[h] = 0);
                            S += w.duration
                        }
                        w.startTime = x.playTime, M.playTime = x.playTime, t._calculateKeyFrame(M, C, N)
                    }
                }
            }, t
        }(),
        w = function() {
            function t() {}
            return s(t, "laya.ani.AnimationParser02"), t.READ_DATA = function() {
                t._DATA.offset = t._reader.getUint32(), t._DATA.size = t._reader.getUint32()
            }, t.READ_BLOCK = function() {
                for (var e = t._BLOCK.count = t._reader.getUint16(), i = t._BLOCK.blockStarts = [], a = t._BLOCK.blockLengths = [], s = 0; s < e; s++) i.push(t._reader.getUint32()), a.push(t._reader.getUint32())
            }, t.READ_STRINGS = function() {
                var e = t._reader.getUint32(),
                    i = t._reader.getUint16(),
                    a = t._reader.pos;
                t._reader.pos = e + t._DATA.offset;
                for (var s = 0; s < i; s++) t._strings[s] = t._reader.readUTFString();
                t._reader.pos = a
            }, t.parse = function(e, i) {
                t._templet = e, t._reader = i;
                i.__getBuffer();
                t.READ_DATA(), t.READ_BLOCK(), t.READ_STRINGS();
                for (var a = 0, s = t._BLOCK.count; a < s; a++) {
                    var r = i.getUint16(),
                        n = t._strings[r],
                        h = t["READ_" + n];
                    if (null == h) throw new Error("model file err,no this function:" + r + " " + n);
                    h.call()
                }
            }, t.READ_ANIMATIONS = function() {
                var e = t._reader,
                    i = e.__getBuffer(),
                    a = 0,
                    s = 0,
                    r = 0,
                    n = 0,
                    h = e.getUint16(),
                    l = [];
                for (l.length = h, a = 0; a < h; a++) l[a] = it.interpolation[e.getByte()];
                var o = e.getUint8();
                for (t._templet._anis.length = o, a = 0; a < o; a++) {
                    var u = t._templet._anis[a] = {};
                    u.nodes = new Array;
                    var c = u.name = t._strings[e.getUint16()];
                    t._templet._aniMap[c] = a, u.bone3DMap = {}, u.playTime = e.getFloat32();
                    var d = u.nodes.length = e.getInt16();
                    for (u.totalKeyframeDatasLength = 0, s = 0; s < d; s++) {
                        var _ = u.nodes[s] = {};
                        _.keyframeWidth = h, _.childs = [];
                        var p = e.getUint16();
                        p >= 0 && (_.name = t._strings[p], u.bone3DMap[_.name] = s), _.keyFrame = new Array, _.parentIndex = e.getInt16(), -1 == _.parentIndex ? _.parent = null : _.parent = u.nodes[_.parentIndex], u.totalKeyframeDatasLength += h, _.interpolationMethod = l, null != _.parent && _.parent.childs.push(_);
                        var f = e.getUint16();
                        _.keyFrame.length = f;
                        var m = null,
                            y = null;
                        for (r = 0, n = f; r < n; r++) {
                            (m = _.keyFrame[r] = {}).startTime = e.getFloat32(), y && (y.duration = m.startTime - y.startTime);
                            var x = t._DATA.offset,
                                g = e.getUint32(),
                                v = 4 * h,
                                M = i.slice(x + g, x + g + v);
                            m.data = new Float32Array(M), y = m
                        }
                        m.duration = 0, _.playTime = u.playTime, t._templet._calculateKeyFrame(_, f, h)
                    }
                }
            }, t._templet = null, t._reader = null, t._strings = [], a(t, ["_BLOCK", function() {
                return this._BLOCK = {
                    count: 0
                }
            }, "_DATA", function() {
                return this._DATA = {
                    offset: 0,
                    size: 0
                }
            }]), t
        }(),
        S = (function() {
            function t() {}
            s(t, "laya.ani.AnimationState"), t.stopped = 0, t.paused = 1, t.playing = 2
        }(), function() {
            function t() {
                this.name = null, this.root = null, this.parentBone = null, this.length = 10, this.transform = null, this.inheritScale = !0, this.inheritRotation = !0, this.rotation = NaN, this.resultRotation = NaN, this.d = -1, this._tempMatrix = null, this._sprite = null, this.resultTransform = new Q, this.resultMatrix = new m, this._children = []
            }
            s(t, "laya.ani.bone.Bone");
            var e = t.prototype;
            return e.setTempMatrix = function(t) {
                this._tempMatrix = t;
                var e = 0,
                    i = 0;
                for (e = 0, i = this._children.length; e < i; e++) this._children[e].setTempMatrix(this._tempMatrix)
            }, e.update = function(t) {
                this.rotation = this.transform.skX;
                var e;
                if (t) e = this.resultTransform.getMatrix(), m.mul(e, t, this.resultMatrix), this.resultRotation = this.rotation;
                else if (this.resultRotation = this.rotation + this.parentBone.resultRotation, this.parentBone)
                    if (this.inheritRotation && this.inheritScale) e = this.resultTransform.getMatrix(), m.mul(e, this.parentBone.resultMatrix, this.resultMatrix);
                    else {
                        var i = this.parentBone,
                            a = NaN,
                            s = NaN,
                            r = NaN,
                            n = this.parentBone.resultMatrix;
                        e = this.resultTransform.getMatrix();
                        var h = n.a * e.tx + n.c * e.ty + n.tx,
                            l = n.b * e.tx + n.d * e.ty + n.ty,
                            o = new m;
                        this.inheritRotation ? (a = Math.atan2(i.resultMatrix.b, i.resultMatrix.a), s = Math.cos(a), r = Math.sin(a), o.setTo(s, r, -r, s, 0, 0), m.mul(this._tempMatrix, o, m.TEMP), m.TEMP.copyTo(o), e = this.resultTransform.getMatrix(), m.mul(e, o, this.resultMatrix), this.resultTransform.scX * this.resultTransform.scY < 0 && this.resultMatrix.rotate(.5 * Math.PI), this.resultMatrix.tx = h, this.resultMatrix.ty = l) : (this.inheritScale, e = this.resultTransform.getMatrix(), m.TEMP.identity(), m.TEMP.d = this.d, m.mul(e, m.TEMP, this.resultMatrix), this.resultMatrix.tx = h, this.resultMatrix.ty = l)
                    }
                else(e = this.resultTransform.getMatrix()).copyTo(this.resultMatrix);
                var u = 0,
                    c = 0;
                for (u = 0, c = this._children.length; u < c; u++) this._children[u].update()
            }, e.updateChild = function() {
                var t = 0,
                    e = 0;
                for (t = 0, e = this._children.length; t < e; t++) this._children[t].update()
            }, e.setRotation = function(t) {
                this._sprite && (this._sprite.rotation = 180 * t / Math.PI)
            }, e.updateDraw = function(e, a) {
                t.ShowBones && !t.ShowBones[this.name] || (this._sprite ? (this._sprite.x = e + this.resultMatrix.tx, this._sprite.y = a + this.resultMatrix.ty) : (this._sprite = new M, this._sprite.graphics.drawCircle(0, 0, 5, "#ff0000"), this._sprite.graphics.drawLine(0, 0, this.length, 0, "#00ff00"), this._sprite.graphics.fillText(this.name, 0, 0, "20px Arial", "#00ff00", "center"), i.stage.addChild(this._sprite), this._sprite.x = e + this.resultMatrix.tx, this._sprite.y = a + this.resultMatrix.ty));
                var s = 0,
                    r = 0;
                for (s = 0, r = this._children.length; s < r; s++) this._children[s].updateDraw(e, a)
            }, e.addChild = function(t) {
                this._children.push(t), t.parentBone = this
            }, e.findBone = function(t) {
                if (this.name == t) return this;
                var e, i, a = 0,
                    s = 0;
                for (a = 0, s = this._children.length; a < s; a++)
                    if (e = this._children[a], i = e.findBone(t)) return i;
                return null
            }, e.localToWorld = function(t) {
                var e = t[0],
                    i = t[1];
                t[0] = e * this.resultMatrix.a + i * this.resultMatrix.c + this.resultMatrix.tx, t[1] = e * this.resultMatrix.b + i * this.resultMatrix.d + this.resultMatrix.ty
            }, t.ShowBones = {}, t
        }()),
        F = function() {
            function t() {
                this.name = null, this.parent = null, this.attachmentName = null, this.srcDisplayIndex = -1, this.type = "src", this.templet = null, this.currSlotData = null, this.currTexture = null, this.currDisplayData = null, this.displayIndex = -1, this._diyTexture = null, this._parentMatrix = null, this._resultMatrix = null, this._replaceDic = {}, this._curDiyUV = null, this._curDiyVS = null, this._skinSprite = null, this.deformData = null, this._mVerticleArr = null
            }
            s(t, "laya.ani.bone.BoneSlot");
            var e = t.prototype;
            return e.showSlotData = function(t, e) {
                void 0 === e && (e = !0), this.currSlotData = t, e && (this.displayIndex = this.srcDisplayIndex), this.currDisplayData = null, this.currTexture = null
            }, e.showDisplayByName = function(t) {
                this.currSlotData && this.showDisplayByIndex(this.currSlotData.getDisplayByName(t))
            }, e.replaceDisplayByName = function(t, e) {
                if (this.currSlotData) {
                    var i = 0;
                    i = this.currSlotData.getDisplayByName(t);
                    var a = 0;
                    a = this.currSlotData.getDisplayByName(e), this.replaceDisplayByIndex(i, a)
                }
            }, e.replaceDisplayByIndex = function(t, e) {
                this.currSlotData && (this._replaceDic[t] = e, this.displayIndex == t && this.showDisplayByIndex(t))
            }, e.showDisplayByIndex = function(t) {
                if (null != this._replaceDic[t] && (t = this._replaceDic[t]), this.currSlotData && t > -1 && t < this.currSlotData.displayArr.length) {
                    if (this.displayIndex = t, this.currDisplayData = this.currSlotData.displayArr[t], this.currDisplayData) {
                        var e = this.currDisplayData.name;
                        this.currTexture = this.templet.getTexture(e), this.currTexture && 0 == this.currDisplayData.type && this.currDisplayData.uvs && (!x.isConchApp || x.isConchApp && M.RUNTIMEVERION > "0.9.15") && (this.currTexture = this.currDisplayData.createTexture(this.currTexture))
                    }
                } else this.displayIndex = -1, this.currDisplayData = null, this.currTexture = null
            }, e.replaceSkin = function(t) {
                this._diyTexture = t, this._curDiyUV && (this._curDiyUV.length = 0), this.currDisplayData && this._diyTexture == this.currDisplayData.texture && (this._diyTexture = null)
            }, e.setParentMatrix = function(t) {
                this._parentMatrix = t
            }, e.draw = function(e, i, a, s) {
                if (void 0 === a && (a = !1), void 0 === s && (s = 1), (null != this._diyTexture || null != this.currTexture) && null != this.currDisplayData || this.currDisplayData && 3 == this.currDisplayData.type) {
                    var r = this.currTexture;
                    this._diyTexture && (r = this._diyTexture);
                    var n;
                    switch (this.currDisplayData.type) {
                        case 0:
                            if (e) {
                                var h = this.getDisplayMatrix();
                                if (this._parentMatrix) {
                                    var l = !1;
                                    if (h) {
                                        m.mul(h, this._parentMatrix, m.TEMP);
                                        var o;
                                        if (a ? (null == this._resultMatrix && (this._resultMatrix = new m), o = this._resultMatrix) : o = new m, !x.isWebGL && this.currDisplayData.uvs || x.isWebGL && this._diyTexture && this.currDisplayData.uvs) {
                                            var u = t._tempMatrix;
                                            u.identity(), this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (u.d = -1), this.currDisplayData.uvs[0] > this.currDisplayData.uvs[4] && this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (l = !0, u.rotate(-Math.PI / 2)), m.mul(u, m.TEMP, o)
                                        } else m.TEMP.copyTo(o);
                                        l ? e.drawTexture(r, -this.currDisplayData.height / 2, -this.currDisplayData.width / 2, this.currDisplayData.height, this.currDisplayData.width, o) : e.drawTexture(r, -this.currDisplayData.width / 2, -this.currDisplayData.height / 2, this.currDisplayData.width, this.currDisplayData.height, o)
                                    }
                                }
                            }
                            break;
                        case 1:
                            if (a ? (null == this._skinSprite && (this._skinSprite = t.createSkinMesh()), n = this._skinSprite) : n = t.createSkinMesh(), null == n) return;
                            var c;
                            if (null == this.currDisplayData.bones) {
                                var d = this.currDisplayData.weights;
                                this.deformData && (d = this.deformData);
                                var _;
                                this._diyTexture ? (this._curDiyUV || (this._curDiyUV = []), 0 == this._curDiyUV.length && (this._curDiyUV = Z.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), this._curDiyUV = Z.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), _ = this._curDiyUV) : _ = this.currDisplayData.uvs, this._mVerticleArr = d;
                                this.currDisplayData.triangles.length;
                                c = this.currDisplayData.triangles, n.init2(r, null, c, this._mVerticleArr, _);
                                var p = this.getDisplayMatrix();
                                if (this._parentMatrix && p) {
                                    m.mul(p, this._parentMatrix, m.TEMP);
                                    var f;
                                    a ? (null == this._resultMatrix && (this._resultMatrix = new m), f = this._resultMatrix) : f = new m, m.TEMP.copyTo(f), n.transform = f
                                }
                            } else this.skinMesh(i, n, s);
                            e.drawSkin(n);
                            break;
                        case 2:
                            if (a ? (null == this._skinSprite && (this._skinSprite = t.createSkinMesh()), n = this._skinSprite) : n = t.createSkinMesh(), null == n) return;
                            this.skinMesh(i, n, s), e.drawSkin(n)
                    }
                }
            }, e.skinMesh = function(t, e, i) {
                var a, s = this.currTexture,
                    r = this.currDisplayData.bones;
                this._diyTexture ? (s = this._diyTexture, this._curDiyUV || (this._curDiyUV = []), 0 == this._curDiyUV.length && (this._curDiyUV = Z.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), this._curDiyUV = Z.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), a = this._curDiyUV) : a = this.currDisplayData.uvs;
                var n, h, l = this.currDisplayData.weights,
                    o = this.currDisplayData.triangles,
                    u = 0,
                    c = 0,
                    d = 0,
                    _ = NaN,
                    p = NaN,
                    f = 0,
                    m = 0,
                    y = [],
                    x = 0,
                    g = 0;
                if (this.deformData && this.deformData.length > 0) {
                    var v = 0;
                    for (x = 0, g = r.length; x < g;) {
                        for (d = r[x++] + x, u = 0, c = 0; x < d; x++) h = t[r[x]], _ = l[f] + this.deformData[v++], p = l[f + 1] + this.deformData[v++], m = l[f + 2], u += (_ * h.a + p * h.c + h.tx) * m, c += (_ * h.b + p * h.d + h.ty) * m, f += 3;
                        y.push(u, c)
                    }
                } else
                    for (x = 0, g = r.length; x < g;) {
                        for (d = r[x++] + x, u = 0, c = 0; x < d; x++) h = t[r[x]], _ = l[f], p = l[f + 1], m = l[f + 2], u += (_ * h.a + p * h.c + h.tx) * m, c += (_ * h.b + p * h.d + h.ty) * m, f += 3;
                        y.push(u, c)
                    }
                this._mVerticleArr = y, n = o, e.init2(s, null, n, this._mVerticleArr, a)
            }, e.drawBonePoint = function(t) {
                t && this._parentMatrix && t.drawCircle(this._parentMatrix.tx, this._parentMatrix.ty, 5, "#ff0000")
            }, e.getDisplayMatrix = function() {
                return this.currDisplayData ? this.currDisplayData.transform.getMatrix() : null
            }, e.getMatrix = function() {
                return this._resultMatrix
            }, e.copy = function() {
                var e = new t;
                return e.type = "copy", e.name = this.name, e.attachmentName = this.attachmentName, e.srcDisplayIndex = this.srcDisplayIndex, e.parent = this.parent, e.displayIndex = this.displayIndex, e.templet = this.templet, e.currSlotData = this.currSlotData, e.currTexture = this.currTexture, e.currDisplayData = this.currDisplayData, e
            }, t.createSkinMesh = function() {
                return x.isWebGL || x.isConchApp ? v.skinAniSprite() : x.isWebGL ? null : st.useSimpleMeshInCanvas ? new at : new et
            }, a(t, ["_tempMatrix", function() {
                return this._tempMatrix = new m
            }]), t
        }(),
        k = function() {
            function t() {
                this.mesh = null, this.transform = null, this.context = null, this.mode = 0
            }
            s(t, "laya.ani.bone.canvasmesh.CanvasMeshRender");
            var e = t.prototype;
            return e.renderToContext = function(t) {
                this.context = t.ctx || t, this.mesh && (0 == this.mode ? this._renderWithIndexes(this.mesh) : this._renderNoIndexes(this.mesh))
            }, e._renderNoIndexes = function(t) {
                var e = 0,
                    i = t.vertices.length / 2,
                    a = 0;
                for (e = 0; e < i - 2; e++) a = 2 * e, this._renderDrawTriangle(t, a, a + 2, a + 4)
            }, e._renderWithIndexes = function(t) {
                var e = t.indexes,
                    i = 0,
                    a = e.length;
                for (i = 0; i < a; i += 3) {
                    var s = 2 * e[i],
                        r = 2 * e[i + 1],
                        n = 2 * e[i + 2];
                    this._renderDrawTriangle(t, s, r, n)
                }
            }, e._renderDrawTriangle = function(t, e, i, a) {
                var s = this.context,
                    r = t.uvs,
                    n = t.vertices,
                    h = t.texture,
                    l = h.bitmap,
                    o = l.source,
                    u = h.width,
                    c = h.height,
                    d = l.width,
                    _ = l.height,
                    p = NaN,
                    f = NaN,
                    m = NaN,
                    y = NaN,
                    x = NaN,
                    g = NaN;
                if (t.useUvTransform) {
                    var v = t.uvTransform;
                    p = (r[e] * v.a + r[e + 1] * v.c + v.tx) * d, f = (r[i] * v.a + r[i + 1] * v.c + v.tx) * d, m = (r[a] * v.a + r[a + 1] * v.c + v.tx) * d, y = (r[e] * v.b + r[e + 1] * v.d + v.ty) * _, x = (r[i] * v.b + r[i + 1] * v.d + v.ty) * _, g = (r[a] * v.b + r[a + 1] * v.d + v.ty) * _
                } else p = r[e] * d, f = r[i] * d, m = r[a] * d, y = r[e + 1] * _, x = r[i + 1] * _, g = r[a + 1] * _;
                var M = n[e],
                    D = n[i],
                    I = n[a],
                    N = n[e + 1],
                    b = n[i + 1],
                    T = n[a + 1];
                if (t.canvasPadding > 0) {
                    var A = t.canvasPadding,
                        C = t.canvasPadding,
                        w = (M + D + I) / 3,
                        S = (N + b + T) / 3,
                        F = M - w,
                        k = N - S,
                        P = Math.sqrt(F * F + k * k);
                    M = w + F / P * (P + A), N = S + k / P * (P + C), k = b - S, D = w + (F = D - w) / (P = Math.sqrt(F * F + k * k)) * (P + A), b = S + k / P * (P + C), k = T - S, I = w + (F = I - w) / (P = Math.sqrt(F * F + k * k)) * (P + A), T = S + k / P * (P + C)
                }
                if (s.save(), this.transform) {
                    var B = this.transform;
                    s.transform(B.a, B.b, B.c, B.d, B.tx, B.ty)
                }
                s.beginPath(), s.moveTo(M, N), s.lineTo(D, b), s.lineTo(I, T), s.closePath(), s.clip();
                var U = 1 / (p * x + y * m + f * g - x * m - y * f - p * g),
                    L = M * x + y * I + D * g - x * I - y * D - M * g,
                    R = p * D + M * m + f * I - D * m - M * f - p * I,
                    O = p * x * I + y * D * m + M * f * g - M * x * m - y * f * I - p * D * g,
                    E = N * x + y * T + b * g - x * T - y * b - N * g,
                    K = p * b + N * m + f * T - b * m - N * f - p * T,
                    Y = p * x * T + y * b * m + N * f * g - N * x * m - y * f * T - p * b * g;
                s.transform(L * U, E * U, R * U, K * U, O * U, Y * U), s.drawImage(o, h.uv[0] * d, h.uv[1] * _, u, c, h.uv[0] * d, h.uv[1] * _, u, c), s.restore()
            }, t
        }(),
        P = function() {
            function t() {
                this.texture = null, this.uvs = [0, 0, 1, 0, 1, 1, 0, 1], this.vertices = [0, 0, 100, 0, 100, 100, 0, 100], this.indexes = [0, 1, 3, 3, 1, 2], this.uvTransform = null, this.useUvTransform = !1, this.canvasPadding = 1
            }
            s(t, "laya.ani.bone.canvasmesh.MeshData");
            return t.prototype.getBounds = function() {
                return y._getWrapRec(this.vertices)
            }, t
        }(),
        B = function() {
            function t() {
                this.skinName = null, this.deformSlotDataList = []
            }
            return s(t, "laya.ani.bone.DeformAniData"), t
        }(),
        U = function() {
            function t() {
                this.deformSlotDisplayList = []
            }
            return s(t, "laya.ani.bone.DeformSlotData"), t
        }(),
        L = function() {
            function t() {
                this.boneSlot = null, this.slotIndex = -1, this.attachment = null, this.deformData = null, this.frameIndex = 0, this.timeList = [], this.vectices = [], this.tweenKeyList = []
            }
            s(t, "laya.ani.bone.DeformSlotDisplayData");
            var e = t.prototype;
            return e.binarySearch1 = function(t, e) {
                var i = 0,
                    a = t.length - 2;
                if (0 == a) return 1;
                for (var s = a >>> 1;;) {
                    if (t[Math.floor(s + 1)] <= e ? i = s + 1 : a = s, i == a) return i + 1;
                    s = i + a >>> 1
                }
                return 0
            }, e.apply = function(t, e, i) {
                if (void 0 === i && (i = 1), t += .05, !(this.timeList.length <= 0)) {
                    var a = 0;
                    if (!(t < this.timeList[0])) {
                        var s = this.vectices[0].length,
                            r = [],
                            n = this.binarySearch1(this.timeList, t);
                        if (this.frameIndex = n, t >= this.timeList[this.timeList.length - 1]) {
                            var h = this.vectices[this.vectices.length - 1];
                            if (i < 1)
                                for (a = 0; a < s; a++) r[a] += (h[a] - r[a]) * i;
                            else
                                for (a = 0; a < s; a++) r[a] = h[a];
                            this.deformData = r
                        } else {
                            this.tweenKeyList[this.frameIndex];
                            var l = this.vectices[this.frameIndex - 1],
                                o = this.vectices[this.frameIndex],
                                u = this.timeList[this.frameIndex - 1],
                                c = this.timeList[this.frameIndex];
                            i = this.tweenKeyList[n - 1] ? (t - u) / (c - u) : 0;
                            var d = NaN;
                            for (a = 0; a < s; a++) d = l[a], r[a] = d + (o[a] - d) * i;
                            this.deformData = r
                        }
                    }
                }
            }, t
        }(),
        R = function() {
            function t() {
                this.time = NaN, this.drawOrder = []
            }
            return s(t, "laya.ani.bone.DrawOrderData"), t
        }(),
        O = function() {
            function t() {
                this.name = null, this.intValue = 0, this.floatValue = NaN, this.stringValue = null, this.time = NaN
            }
            return s(t, "laya.ani.bone.EventData"), t
        }(),
        E = function() {
            function t(t, e) {
                this._targetBone = null, this._bones = null, this._data = null, this.name = null, this.mix = NaN, this.bendDirection = NaN, this.isSpine = !0, this._sp = null, this.isDebug = !1, this._data = t, this._targetBone = e[t.targetBoneIndex], this.isSpine = t.isSpine, null == this._bones && (this._bones = []), this._bones.length = 0;
                for (var i = 0, a = t.boneIndexs.length; i < a; i++) this._bones.push(e[t.boneIndexs[i]]);
                this.name = t.name, this.mix = t.mix, this.bendDirection = t.bendDirection
            }
            s(t, "laya.ani.bone.IkConstraint");
            var e = t.prototype;
            return e.apply = function() {
                switch (this._bones.length) {
                    case 1:
                        this._applyIk1(this._bones[0], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.mix);
                        break;
                    case 2:
                        this.isSpine ? this._applyIk2(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix) : this._applyIk3(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix)
                }
            }, e._applyIk1 = function(e, i, a, s) {
                var r = e.parentBone,
                    n = 1 / (r.resultMatrix.a * r.resultMatrix.d - r.resultMatrix.b * r.resultMatrix.c),
                    h = i - r.resultMatrix.tx,
                    l = a - r.resultMatrix.ty,
                    o = (h * r.resultMatrix.d - l * r.resultMatrix.c) * n - e.transform.x,
                    u = (l * r.resultMatrix.a - h * r.resultMatrix.b) * n - e.transform.y,
                    c = Math.atan2(u, o) * t.radDeg - 0 - e.transform.skX;
                e.transform.scX < 0 && (c += 180), c > 180 ? c -= 360 : c < -180 && (c += 360), e.transform.skX = e.transform.skY = e.transform.skX + c * s, e.update()
            }, e.updatePos = function(t, e) {
                this._sp && this._sp.pos(t, e)
            }, e._applyIk2 = function(e, a, s, r, n, h) {
                if (0 != h) {
                    var l = e.resultTransform.x,
                        o = e.resultTransform.y,
                        u = e.transform.scX,
                        c = e.transform.scY,
                        d = a.transform.scX,
                        _ = 0,
                        p = 0,
                        f = 0;
                    u < 0 ? (u = -u, _ = 180, f = -1) : (_ = 0, f = 1), c < 0 && (c = -c, f = -f), d < 0 ? (d = -d, p = 180) : p = 0;
                    var m = a.resultTransform.x,
                        y = NaN,
                        x = NaN,
                        g = NaN,
                        v = e.resultMatrix.a,
                        D = e.resultMatrix.c,
                        I = e.resultMatrix.b,
                        N = e.resultMatrix.d,
                        b = Math.abs(u - c) <= 1e-4;
                    b ? (x = v * m + D * (y = a.resultTransform.y) + e.resultMatrix.tx, g = I * m + N * y + e.resultMatrix.ty) : (y = 0, x = v * m + e.resultMatrix.tx, g = I * m + e.resultMatrix.ty), this.isDebug && (this._sp || (this._sp = new M, i.stage.addChild(this._sp)), this._sp.graphics.clear(), this._sp.graphics.drawCircle(s, r, 15, "#ffff00"), this._sp.graphics.drawCircle(x, g, 15, "#ff00ff")), e.setRotation(Math.atan2(g - e.resultMatrix.ty, x - e.resultMatrix.tx));
                    var T = e.parentBone;
                    v = T.resultMatrix.a, D = T.resultMatrix.c, I = T.resultMatrix.b;
                    var A = 1 / (v * (N = T.resultMatrix.d) - D * I),
                        C = s - T.resultMatrix.tx,
                        w = r - T.resultMatrix.ty,
                        S = (C * N - w * D) * A - l,
                        F = (w * v - C * I) * A - o,
                        k = ((C = x - T.resultMatrix.tx) * N - (w = g - T.resultMatrix.ty) * D) * A - l,
                        P = (w * v - C * I) * A - o,
                        B = Math.sqrt(k * k + P * P),
                        U = a.length * d,
                        L = NaN,
                        R = NaN;
                    if (b) {
                        var O = (S * S + F * F - B * B - (U *= u) * U) / (2 * B * U);
                        O < -1 ? O = -1 : O > 1 && (O = 1), R = Math.acos(O) * n, v = B + U * O, D = U * Math.sin(R), L = Math.atan2(F * v - S * D, S * v + F * D)
                    } else {
                        var E = (v = u * U) * v,
                            K = (D = c * U) * D,
                            Y = S * S + F * F,
                            V = Math.atan2(F, S),
                            W = -2 * K * B,
                            X = K - E;
                        if ((N = W * W - 4 * X * (I = K * B * B + E * Y - E * K)) > 0) {
                            var z = Math.sqrt(N);
                            W < 0 && (z = -z);
                            var q = (z = -(W + z) / 2) / X,
                                G = I / z,
                                H = Math.abs(q) < Math.abs(G) ? q : G;
                            H * H <= Y && (w = Math.sqrt(Y - H * H) * n, L = V - Math.atan2(w, H), R = Math.atan2(w / c, (H - B) / u))
                        }
                        var Q = 0,
                            Z = Number.MAX_VALUE,
                            j = 0,
                            $ = 0,
                            J = 0,
                            tt = 0,
                            et = 0,
                            it = 0;
                        (N = (C = B + v) * C) > tt && (J = 0, tt = N, et = C), (N = (C = B - v) * C) < Z && (Q = Math.PI, Z = N, j = C);
                        var at = Math.acos(-v * B / (E - K));
                        (N = (C = v * Math.cos(at) + B) * C + (w = D * Math.sin(at)) * w) < Z && (Q = at, Z = N, j = C, $ = w), N > tt && (J = at, tt = N, et = C, it = w), Y <= (Z + tt) / 2 ? (L = V - Math.atan2($ * n, j), R = Q * n) : (L = V - Math.atan2(it * n, et), R = J * n)
                    }
                    var st = Math.atan2(y, m) * f,
                        rt = e.resultTransform.skX;
                    (L = (L - st) * t.radDeg + _ - rt) > 180 ? L -= 360 : L < -180 && (L += 360), e.resultTransform.x = l, e.resultTransform.y = o, e.resultTransform.skX = e.resultTransform.skY = rt + L * h, rt = a.resultTransform.skX, (R = ((R + st) * t.radDeg - 0) * f + p - (rt %= 360)) > 180 ? R -= 360 : R < -180 && (R += 360), a.resultTransform.x = m, a.resultTransform.y = y, a.resultTransform.skX = a.resultTransform.skY = a.resultTransform.skY + R * h, e.update()
                }
            }, e._applyIk3 = function(e, a, s, r, n, h) {
                if (0 != h) {
                    var l = NaN,
                        o = NaN,
                        u = a.resultMatrix.a * a.length,
                        c = a.resultMatrix.b * a.length,
                        d = u * u + c * c,
                        _ = Math.sqrt(d),
                        p = e.resultMatrix.tx,
                        f = e.resultMatrix.ty,
                        m = a.resultMatrix.tx,
                        y = a.resultMatrix.ty,
                        x = m - p,
                        g = y - f,
                        v = x * x + g * g,
                        D = Math.sqrt(v),
                        I = (x = s - e.resultMatrix.tx) * x + (g = r - e.resultMatrix.ty) * g,
                        N = Math.sqrt(I);
                    if (_ + D <= N || N + _ <= D || N + D <= _) {
                        var b = NaN;
                        m = p + (b = _ + D <= N ? 1 : -1) * (s - p) * D / N, y = f + b * (r - f) * D / N
                    } else {
                        var T = (v - d + I) / (2 * I),
                            A = Math.sqrt(v - T * T * I) / N,
                            C = p + x * T,
                            w = f + g * T,
                            S = -g * A,
                            F = x * A;
                        n > 0 ? (m = C - S, y = w - F) : (m = C + S, y = w + F)
                    }
                    l = m, o = y, this.isDebug && (this._sp || (this._sp = new M, i.stage.addChild(this._sp)), this._sp.graphics.clear(), this._sp.graphics.drawCircle(p, f, 15, "#ff00ff"), this._sp.graphics.drawCircle(s, r, 15, "#ffff00"), this._sp.graphics.drawCircle(l, o, 15, "#ff00ff"));
                    var k = NaN;
                    k = Math.atan2(o - e.resultMatrix.ty, l - e.resultMatrix.tx), e.setRotation(k);
                    var P;
                    (P = t._tempMatrix).identity(), P.rotate(k), P.scale(e.resultMatrix.getScaleX(), e.resultMatrix.getScaleY()), P.translate(e.resultMatrix.tx, e.resultMatrix.ty), P.copyTo(e.resultMatrix), e.updateChild();
                    var B = NaN;
                    B = Math.atan2(r - o, s - l), a.setRotation(B);
                    var U;
                    (U = t._tempMatrix).identity(), U.rotate(B), U.scale(a.resultMatrix.getScaleX(), a.resultMatrix.getScaleY()), U.translate(l, o), P.copyTo(a.resultMatrix), a.updateChild()
                }
            }, a(t, ["radDeg", function() {
                return this.radDeg = 180 / Math.PI
            }, "degRad", function() {
                return this.degRad = Math.PI / 180
            }, "_tempMatrix", function() {
                return this._tempMatrix = new m
            }]), t
        }(),
        K = function() {
            function t() {
                this.name = null, this.targetBoneName = null, this.bendDirection = 1, this.mix = 1, this.isSpine = !0, this.targetBoneIndex = -1, this.boneNames = [], this.boneIndexs = []
            }
            return s(t, "laya.ani.bone.IkConstraintData"), t
        }(),
        Y = function() {
            function t() {}
            return s(t, "laya.ani.bone.MeshTools"), t.findEdge = function(t, e, i) {
                void 0 === e && (e = 0), void 0 === i && (i = !0);
                var a = 0,
                    s = 0,
                    r = 0;
                for (s = t.length, r = -1, a = 0; a < s; a += 2)(r < 0 || i == t[r + e] < t[a + e]) && (r = a);
                return r
            }, t.findBestTriangle = function(e) {
                var i = 0;
                i = t.findEdge(e, 1, !0);
                var a = 0;
                a = t.findEdge(e, 1, !1);
                var s = 0;
                s = t.findEdge(e, 0, !0);
                var r = 0;
                r = t.findEdge(e, 0, !1);
                var n;
                return n = t._bestTriangle, n.length = 0, n.push(s, r), n.indexOf(i) < 0 && n.push(i), n.indexOf(a) < 0 && n.push(a), n
            }, t.solveMesh = function(e, i) {
                (i = i || []).length = 0;
                var a;
                a = e.uvs;
                var s;
                s = e.vertices;
                var r, n, h = 0,
                    l = 0,
                    o = 0;
                h = (n = t.findBestTriangle(a))[0], l = n[1], o = n[2], t._absArr.length = 0;
                return t.isNormalUV(e.texture.uv) && t.adptTexture(e), r = t.solvePoints(e.texture.uv, a[h], a[h + 1], a[l] - a[h], a[l + 1] - a[h + 1], a[o] - a[h], a[o + 1] - a[h + 1], t._absArr), t.transPoints(r, s[h], s[h + 1], s[l] - s[h], s[l + 1] - s[h + 1], s[o] - s[h], s[o + 1] - s[h + 1], i)
            }, t.findWrapRect = function(e) {
                var i = 0;
                i = t.findEdge(e, 1, !0);
                var a = 0;
                a = t.findEdge(e, 1, !1);
                var s = 0;
                s = t.findEdge(e, 0, !0);
                var r = 0;
                r = t.findEdge(e, 0, !1);
                var n = NaN;
                n = e[s];
                var h = NaN;
                h = e[r];
                var l = NaN;
                l = e[i + 1];
                var o = NaN;
                return [h, o = e[a + 1], n - h, l - o]
            }, t.adptTexture = function(e) {
                var i;
                i = t.findWrapRect(e.uvs);
                var a, s, r = (a = e.texture).width,
                    n = a.height;
                s = I.create(a, i[0] * r, i[1] * n, i[2] * r, i[3] * n), e.texture = s
            }, t.isNormalUV = function(t) {
                return 0 == t[0] && 0 == t[1] && 1 == t[4] && 1 == t[5]
            }, t.solvePoints = function(e, i, a, s, r, n, h, l) {
                l = l || [];
                var o = 0,
                    u = 0;
                u = e.length;
                var c;
                for (o = 0; o < u; o += 2) c = t.solve2(e[o], e[o + 1], i, a, s, r, n, h), l.push(c[0], c[1]);
                return l
            }, t.transPoints = function(e, i, a, s, r, n, h, l) {
                l = l || [];
                var o = 0,
                    u = 0;
                u = e.length;
                for (o = 0; o < u; o += 2) t.transPoint(e[o], e[o + 1], i, a, s, r, n, h, l);
                return l
            }, t.transPoint = function(t, e, i, a, s, r, n, h, l) {
                var o = NaN,
                    u = NaN;
                return o = i + s * t + n * e, u = a + r * t + h * e, (l = l || []).push(o, u), l
            }, t.solve2 = function(e, i, a, s, r, n, h, l, o, u) {
                void 0 === o && (o = !1), u = u || [];
                var c = NaN,
                    d = NaN;
                if (0 == r) return t.solve2(e, i, a, s, h, l, r, n, !0, u);
                var _ = NaN,
                    p = NaN;
                return _ = e - a, p = i - s, d = (p - _ * n / r) / (l - h * n / r), c = (_ - d * h) / r, o ? u.push(d, c) : u.push(c, d), u
            }, t.solve = function(e, i, a, s) {
                return t.solve2(e.x, e.y, i.x, i.y, a.x, a.y, s.x, s.y)
            }, t._bestTriangle = [], t._absArr = [], t
        }(),
        V = function() {
            function t(t, e) {
                this.target = null, this.data = null, this.bones = null, this.position = NaN, this.spacing = NaN, this.rotateMix = NaN, this.translateMix = NaN, this._debugKey = !1, this._spaces = null, this._segments = [], this._curves = [], this.data = t, this.position = t.position, this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.bones = [];
                for (var i = this.data.bones, a = 0, s = i.length; a < s; a++) this.bones.push(e[i[a]])
            }
            s(t, "laya.ani.bone.PathConstraint");
            var e = t.prototype;
            return e.apply = function(t, e) {
                if (this.target) {
                    var i = this.translateMix,
                        a = this.translateMix,
                        s = a > 0,
                        r = this.data.spacingMode,
                        n = "length" == r,
                        h = this.data.rotateMode,
                        l = "tangent" == h,
                        o = "chainScale" == h,
                        u = [],
                        c = this.bones.length,
                        d = l ? c : c + 1,
                        _ = [];
                    this._spaces = _, _[0] = this.position;
                    var p = this.spacing;
                    if (o || n)
                        for (var f = 0, m = d - 1; f < m;) {
                            var y = this.bones[f],
                                x = y.length,
                                g = x * y.resultMatrix.a,
                                v = x * y.resultMatrix.b;
                            x = Math.sqrt(g * g + v * v), o && (u[f] = x), _[++f] = n ? Math.max(0, x + p) : p
                        } else
                            for (f = 1; f < d; f++) _[f] = p;
                    var M = this.computeWorldPositions(this.target, t, e, d, l, "percent" == this.data.positionMode, "percent" == r);
                    if (this._debugKey) {
                        for (f = 0; f < M.length; f++) e.drawCircle(M[f++], M[f++], 5, "#00ff00");
                        var D = [];
                        for (f = 0; f < M.length; f++) D.push(M[f++], M[f++]);
                        e.drawLines(0, 0, D, "#ff0000")
                    }
                    var I = M[0],
                        N = M[1],
                        b = this.data.offsetRotation,
                        T = "chain" == h && 0 == b,
                        A = NaN;
                    for (f = 0, A = 3; f < c; f++, A += 3) {
                        (y = this.bones[f]).resultMatrix.tx += (I - y.resultMatrix.tx) * i, y.resultMatrix.ty += (N - y.resultMatrix.ty) * i;
                        var C = (g = M[A]) - I,
                            w = (v = M[A + 1]) - N;
                        if (o && 0 != (x = u[f])) {
                            var S = (Math.sqrt(C * C + w * w) / x - 1) * a + 1;
                            y.resultMatrix.a *= S, y.resultMatrix.c *= S
                        }
                        if (I = g, N = v, s) {
                            var F = y.resultMatrix.a,
                                k = y.resultMatrix.c,
                                P = y.resultMatrix.b,
                                B = y.resultMatrix.d,
                                U = NaN,
                                L = NaN,
                                R = NaN;
                            U = l ? M[A - 1] : 0 == _[f + 1] ? M[A + 2] : Math.atan2(w, C), U -= Math.atan2(P, F) - b / 180 * Math.PI, T && (L = Math.cos(U), R = Math.sin(U), I += ((x = y.length) * (L * F - R * P) - C) * a, N += (x * (R * F + L * P) - w) * a), U > Math.PI ? U -= 2 * Math.PI : U < -Math.PI && (U += 2 * Math.PI), U *= a, L = Math.cos(U), R = Math.sin(U), y.resultMatrix.a = L * F - R * P, y.resultMatrix.c = L * k - R * B, y.resultMatrix.b = R * F + L * P, y.resultMatrix.d = R * k + L * B
                        }
                    }
                }
            }, e.computeWorldVertices2 = function(e, i, a, s, r, n) {
                var h, l, o = e.currDisplayData.bones,
                    u = e.currDisplayData.weights,
                    c = e.currDisplayData.triangles,
                    d = 0,
                    _ = 0,
                    p = 0,
                    f = 0,
                    m = 0,
                    y = 0,
                    x = 0,
                    g = 0,
                    v = 0,
                    M = 0,
                    D = 0;
                if (null != o) {
                    for (d = 0; d < a; d += 2) _ += (f = o[_]) + 1, p += f;
                    var I = i;
                    for (m = n, y = 3 * p; m < s; m += 2) {
                        for (x = 0, g = 0, f = o[_++], f += _; _ < f; _++, y += 3) {
                            h = I[o[_]].resultMatrix, v = u[y], M = u[y + 1];
                            var N = u[y + 2];
                            x += (v * h.a + M * h.c + h.tx) * N, g += (v * h.b + M * h.d + h.ty) * N
                        }
                        r[m] = x, r[m + 1] = g
                    }
                } else {
                    c || (c = u), e.deformData && (c = e.deformData);
                    var b;
                    if (b = e.parent, i)
                        for (D = i.length, d = 0; d < D; d++)
                            if (i[d].name == b) {
                                l = i[d];
                                break
                            }
                    var T;
                    l && (T = l.resultMatrix), T || (T = t._tempMt);
                    var A = T.tx,
                        C = T.ty,
                        w = T.a,
                        S = T.b,
                        F = T.c,
                        k = T.d;
                    for (l && (k *= l.d), _ = a, m = n; m < s; _ += 2, m += 2) v = c[_], M = c[_ + 1], r[m] = v * w + M * S + A, r[m + 1] = -(v * F + M * k + C)
                }
            }, e.computeWorldPositions = function(t, e, i, a, s, r, n) {
                t.currDisplayData.bones, t.currDisplayData.weights, t.currDisplayData.triangles;
                var h = [],
                    l = 0,
                    o = t.currDisplayData.verLen,
                    u = this.position,
                    c = this._spaces,
                    d = [],
                    _ = [],
                    p = o / 6,
                    f = -1,
                    m = NaN,
                    y = 0,
                    x = 0,
                    g = NaN,
                    v = NaN,
                    M = NaN,
                    D = NaN;
                if (p--, o -= 4, this.computeWorldVertices2(t, e, 2, o, h, 0), this._debugKey)
                    for (l = 0; l < h.length;) i.drawCircle(h[l++], h[l++], 10, "#ff0000");
                d = h, this._curves.length = p;
                var I = this._curves;
                m = 0;
                var N = d[0],
                    b = d[1],
                    T = 0,
                    A = 0,
                    C = 0,
                    w = 0,
                    S = 0,
                    F = 0,
                    k = NaN,
                    P = NaN,
                    B = NaN,
                    U = NaN,
                    L = NaN,
                    R = NaN,
                    O = NaN,
                    E = NaN,
                    K = 0;
                for (l = 0, K = 2; l < p; l++, K += 6) T = d[K], A = d[K + 1], C = d[K + 2], w = d[K + 3], L = 2 * (k = .1875 * (N - 2 * T + C)) + (B = .09375 * (3 * (T - C) - N + (S = d[K + 4]))), R = 2 * (P = .1875 * (b - 2 * A + w)) + (U = .09375 * (3 * (A - w) - b + (F = d[K + 5]))), O = .75 * (T - N) + k + .16666667 * B, E = .75 * (A - b) + P + .16666667 * U, m += Math.sqrt(O * O + E * E), O += L, E += R, L += B, R += U, m += Math.sqrt(O * O + E * E), O += L, E += R, m += Math.sqrt(O * O + E * E), O += L + B, E += R + U, m += Math.sqrt(O * O + E * E), I[l] = m, N = S, b = F;
                if (r && (u *= m), n)
                    for (l = 0; l < a; l++) c[l] *= m;
                var Y = this._segments,
                    V = 0,
                    W = 0;
                for (l = 0, y = 0, x = 0, W = 0; l < a; l++, y += 3)
                    if (v = c[l], u += v, (g = u) < 0) this.addBeforePosition(g, d, 0, _, y);
                    else if (g > m) this.addAfterPosition(g - m, d, o - 4, _, y);
                else {
                    for (;; x++)
                        if (D = I[x], !(g > D)) {
                            0 == x ? g /= D : g = (g - (M = I[x - 1])) / (D - M);
                            break
                        }
                    if (x != f) {
                        f = x;
                        var X = 6 * x;
                        for (N = d[X], b = d[X + 1], T = d[X + 2], A = d[X + 3], C = d[X + 4], w = d[X + 5], L = 2 * (k = .03 * (N - 2 * T + C)) + (B = .006 * (3 * (T - C) - N + (S = d[X + 6]))), R = 2 * (P = .03 * (b - 2 * A + w)) + (U = .006 * (3 * (A - w) - b + (F = d[X + 7]))), O = .3 * (T - N) + k + .16666667 * B, E = .3 * (A - b) + P + .16666667 * U, V = Math.sqrt(O * O + E * E), Y[0] = V, X = 1; X < 8; X++) O += L, E += R, L += B, R += U, V += Math.sqrt(O * O + E * E), Y[X] = V;
                        O += L, E += R, V += Math.sqrt(O * O + E * E), Y[8] = V, O += L + B, E += R + U, V += Math.sqrt(O * O + E * E), Y[9] = V, W = 0
                    }
                    for (g *= V;; W++)
                        if (D = Y[W], !(g > D)) {
                            0 == W ? g /= D : g = W + (g - (M = Y[W - 1])) / (D - M);
                            break
                        }
                    this.addCurvePosition(.1 * g, N, b, T, A, C, w, S, F, _, y, s || l > 0 && 0 == v)
                }
                return _
            }, e.addBeforePosition = function(t, e, i, a, s) {
                var r = e[i],
                    n = e[i + 1],
                    h = e[i + 2] - r,
                    l = e[i + 3] - n,
                    o = Math.atan2(l, h);
                a[s] = r + t * Math.cos(o), a[s + 1] = n + t * Math.sin(o), a[s + 2] = o
            }, e.addAfterPosition = function(t, e, i, a, s) {
                var r = e[i + 2],
                    n = e[i + 3],
                    h = r - e[i],
                    l = n - e[i + 1],
                    o = Math.atan2(l, h);
                a[s] = r + t * Math.cos(o), a[s + 1] = n + t * Math.sin(o), a[s + 2] = o
            }, e.addCurvePosition = function(t, e, i, a, s, r, n, h, l, o, u, c) {
                0 == t && (t = 1e-4);
                var d = t * t,
                    _ = d * t,
                    p = 1 - t,
                    f = p * p,
                    m = f * p,
                    y = p * t,
                    x = 3 * y,
                    g = p * x,
                    v = x * t,
                    M = e * m + a * g + r * v + h * _,
                    D = i * m + s * g + n * v + l * _;
                o[u] = M, o[u + 1] = D, o[u + 2] = c ? Math.atan2(D - (i * f + s * y * 2 + n * d), M - (e * f + a * y * 2 + r * d)) : 0
            }, t.NONE = -1, t.BEFORE = -2, t.AFTER = -3, a(t, ["_tempMt", function() {
                return this._tempMt = new m
            }]), t
        }(),
        W = function() {
            function t() {
                this.name = null, this.target = null, this.positionMode = null, this.spacingMode = null, this.rotateMode = null, this.offsetRotation = NaN, this.position = NaN, this.spacing = NaN, this.rotateMix = NaN, this.translateMix = NaN, this.bones = []
            }
            return s(t, "laya.ani.bone.PathConstraintData"), t
        }(),
        X = function() {
            function t() {
                this.name = null, this.slotArr = []
            }
            return s(t, "laya.ani.bone.SkinData"), t
        }(),
        z = function() {
            function t() {
                this.name = null, this.attachmentName = null, this.type = 0, this.transform = null, this.width = NaN, this.height = NaN, this.texture = null, this.bones = null, this.uvs = null, this.weights = null, this.triangles = null, this.vertices = null, this.lengths = null, this.verLen = 0
            }
            s(t, "laya.ani.bone.SkinSlotDisplayData");
            var e = t.prototype;
            return e.createTexture = function(t) {
                return this.texture ? this.texture : (this.texture = new I(t.bitmap, this.uvs), this.uvs[0] > this.uvs[4] && this.uvs[1] > this.uvs[5] ? (this.texture.width = t.height, this.texture.height = t.width, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, this.texture.sourceWidth = t.sourceHeight, this.texture.sourceHeight = t.sourceWidth) : (this.texture.width = t.width, this.texture.height = t.height, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, this.texture.sourceWidth = t.sourceWidth, this.texture.sourceHeight = t.sourceHeight), x.isWebGL || this.uvs[1] > this.uvs[5] && (this.texture.offsetY = this.texture.sourceHeight - this.texture.height - this.texture.offsetY), this.texture)
            }, e.destory = function() {
                this.texture && this.texture.destroy()
            }, t
        }(),
        q = function() {
            function t() {
                this.name = null, this.displayArr = []
            }
            s(t, "laya.ani.bone.SlotData");
            return t.prototype.getDisplayByName = function(t) {
                for (var e = 0, i = this.displayArr.length; e < i; e++)
                    if (this.displayArr[e].attachmentName == t) return e;
                return -1
            }, t
        }(),
        G = function() {
            function t(t, e) {
                this._data = null, this._bones = null, this.target = null, this.rotateMix = NaN, this.translateMix = NaN, this.scaleMix = NaN, this.shearMix = NaN, this._temp = n(2, 0), this._data = t, null == this._bones && (this._bones = []), this.target = e[t.targetIndex];
                var i = 0,
                    a = 0;
                for (i = 0, a = t.boneIndexs.length; i < a; i++) this._bones.push(e[t.boneIndexs[i]]);
                this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.scaleMix = t.scaleMix, this.shearMix = t.shearMix
            }
            s(t, "laya.ani.bone.TfConstraint");
            return t.prototype.apply = function() {
                for (var t, e = this.target.resultMatrix.a, i = this.target.resultMatrix.b, a = this.target.resultMatrix.c, s = this.target.resultMatrix.d, r = 0, n = this._bones.length; r < n; r++) {
                    if (t = this._bones[r], this.rotateMix > 0) {
                        var h = t.resultMatrix.a,
                            l = t.resultMatrix.b,
                            o = t.resultMatrix.c,
                            u = t.resultMatrix.d,
                            c = Math.atan2(a, e) - Math.atan2(o, h) + this._data.offsetRotation * Math.PI / 180;
                        c > Math.PI ? c -= 2 * Math.PI : c < -Math.PI && (c += 2 * Math.PI), c *= this.rotateMix;
                        var d = Math.cos(c),
                            _ = Math.sin(c);
                        t.resultMatrix.a = d * h - _ * o, t.resultMatrix.b = d * l - _ * u, t.resultMatrix.c = _ * h + d * o, t.resultMatrix.d = _ * l + d * u
                    }
                    if (this.translateMix && (this._temp[0] = this._data.offsetX, this._temp[1] = this._data.offsetY, this.target.localToWorld(this._temp), t.resultMatrix.tx += (this._temp[0] - t.resultMatrix.tx) * this.translateMix, t.resultMatrix.ty += (this._temp[1] - t.resultMatrix.ty) * this.translateMix, t.updateChild()), this.scaleMix > 0) {
                        var p = Math.sqrt(t.resultMatrix.a * t.resultMatrix.a + t.resultMatrix.c * t.resultMatrix.c),
                            f = Math.sqrt(e * e + a * a),
                            m = p > 1e-5 ? (p + (f - p + this._data.offsetScaleX) * this.scaleMix) / p : 0;
                        t.resultMatrix.a *= m, t.resultMatrix.c *= m, p = Math.sqrt(t.resultMatrix.b * t.resultMatrix.b + t.resultMatrix.d * t.resultMatrix.d), f = Math.sqrt(i * i + s * s), m = p > 1e-5 ? (p + (f - p + this._data.offsetScaleY) * this.scaleMix) / p : 0, t.resultMatrix.b *= m, t.resultMatrix.d *= m
                    }
                    if (this.shearMix > 0) {
                        l = t.resultMatrix.b, u = t.resultMatrix.d;
                        var y = Math.atan2(u, l);
                        (c = Math.atan2(s, i) - Math.atan2(a, e) - (y - Math.atan2(t.resultMatrix.c, t.resultMatrix.a))) > Math.PI ? c -= 2 * Math.PI : c < -Math.PI && (c += 2 * Math.PI), c = y + (c + this._data.offsetShearY * Math.PI / 180) * this.shearMix, m = Math.sqrt(l * l + u * u), t.resultMatrix.b = Math.cos(c) * m, t.resultMatrix.d = Math.sin(c) * m
                    }
                }
            }, t
        }(),
        H = function() {
            function t() {
                this.name = null, this.targetIndex = 0, this.rotateMix = NaN, this.translateMix = NaN, this.scaleMix = NaN, this.shearMix = NaN, this.offsetRotation = NaN, this.offsetX = NaN, this.offsetY = NaN, this.offsetScaleX = NaN, this.offsetScaleY = NaN, this.offsetShearY = NaN, this.boneIndexs = []
            }
            return s(t, "laya.ani.bone.TfConstraintData"), t
        }(),
        Q = function() {
            function t() {
                this.skX = 0, this.skY = 0, this.scX = 1, this.scY = 1, this.x = 0, this.y = 0, this.skewX = 0, this.skewY = 0, this.mMatrix = null
            }
            s(t, "laya.ani.bone.Transform");
            var e = t.prototype;
            return e.initData = function(t) {
                void 0 != t.x && (this.x = t.x), void 0 != t.y && (this.y = t.y), void 0 != t.skX && (this.skX = t.skX), void 0 != t.skY && (this.skY = t.skY), void 0 != t.scX && (this.scX = t.scX), void 0 != t.scY && (this.scY = t.scY)
            }, e.getMatrix = function() {
                var t;
                return (t = this.mMatrix ? this.mMatrix : this.mMatrix = new m).identity(), t.scale(this.scX, this.scY), (this.skewX || this.skewY) && this.skew(t, this.skewX * Math.PI / 180, this.skewY * Math.PI / 180), t.rotate(this.skX * Math.PI / 180), t.translate(this.x, this.y), t
            }, e.skew = function(t, e, i) {
                var a = Math.sin(i),
                    s = Math.cos(i),
                    r = Math.sin(e),
                    n = Math.cos(e);
                return t.setTo(t.a * n - t.b * a, t.a * r + t.b * s, t.c * n - t.d * a, t.c * r + t.d * s, t.tx * n - t.ty * a, t.tx * r + t.ty * s), t
            }, t
        }(),
        Z = function() {
            function t() {}
            return s(t, "laya.ani.bone.UVTools"), t.getRelativeUV = function(t, e, i) {
                var a = t[0],
                    s = t[2] - t[0],
                    r = t[1],
                    n = t[5] - t[1];
                i || (i = []), i.length = e.length;
                var h = 0,
                    l = 0;
                l = i.length;
                var o = 1 / s,
                    u = 1 / n;
                for (h = 0; h < l; h += 2) i[h] = (e[h] - a) * o, i[h + 1] = (e[h + 1] - r) * u;
                return i
            }, t.getAbsoluteUV = function(t, e, i) {
                if (0 == t[0] && 0 == t[1] && 1 == t[4] && 1 == t[5]) return i ? (b.copyArray(i, e), i) : e;
                var a = t[0],
                    s = t[2] - t[0],
                    r = t[1],
                    n = t[5] - t[1];
                i || (i = []), i.length = e.length;
                var h = 0,
                    l = 0;
                for (l = i.length, h = 0; h < l; h += 2) i[h] = e[h] * s + a, i[h + 1] = e[h + 1] * n + r;
                return i
            }, t
        }(),
        j = function() {
            function t() {
                this.startTime = NaN, this.duration = NaN, this.interpolationData = null, this.data = null, this.nextData = null
            }
            return s(t, "laya.ani.KeyFramesContent"), t
        }(),
        $ = function() {
            function t() {}
            return s(t, "laya.ani.math.BezierLerp"), t.getBezierRate = function(e, i, a, s, r) {
                var n = t._getBezierParamKey(i, a, s, r),
                    h = 100 * n + e;
                if (t._bezierResultCache[h]) return t._bezierResultCache[h];
                var l = t._getBezierPoints(i, a, s, r, n),
                    o = 0,
                    u = 0;
                for (u = l.length, o = 0; o < u; o += 2)
                    if (e <= l[o]) return t._bezierResultCache[h] = l[o + 1], l[o + 1];
                return t._bezierResultCache[h] = 1, 1
            }, t._getBezierParamKey = function(t, e, i, a) {
                return 100 * (100 * (100 * (100 * t + e) + i) + a)
            }, t._getBezierPoints = function(e, i, a, s, r) {
                if (t._bezierPointsCache[r]) return t._bezierPointsCache[r];
                var n;
                n = [0, 0, e, i, a, s, 1, 1];
                var l;
                return l = (new h).getBezierPoints(n, 100, 3), t._bezierPointsCache[r] = l, l
            }, t._bezierResultCache = {}, t._bezierPointsCache = {}, t
        }(),
        J = function(t) {
            function e() {
                this._destroyed = !1, this._templet = null, this._currentTime = NaN, this._currentFrameTime = NaN, this._playStart = NaN, this._playEnd = NaN, this._playDuration = NaN, this._overallDuration = NaN, this._stopWhenCircleFinish = !1, this._elapsedPlaybackTime = NaN, this._startUpdateLoopCount = NaN, this._currentAnimationClipIndex = 0, this._currentKeyframeIndex = 0, this._paused = !1, this._cacheFrameRate = 0, this._cacheFrameRateInterval = NaN, this._cachePlayRate = NaN, this._fullFrames = null, this.isCache = !0, this.playbackRate = 1, this.returnToZeroStopped = !1, e.__super.call(this), this._destroyed = !1, this._currentAnimationClipIndex = -1, this._currentKeyframeIndex = -1, this._currentTime = 0, this._overallDuration = Number.MAX_VALUE, this._stopWhenCircleFinish = !1, this._elapsedPlaybackTime = 0, this._startUpdateLoopCount = -1, this._cachePlayRate = 1, this.cacheFrameRate = 60, this.returnToZeroStopped = !1
            }
            s(e, "laya.ani.AnimationPlayer", u);
            var a = e.prototype;
            return i.imps(a, {
                "laya.resource.IDestroy": !0
            }), a._onTempletLoadedComputeFullKeyframeIndices = function(t, e, i) {
                this._templet === i && this._cachePlayRate === t && this._cacheFrameRate === e && this._computeFullKeyframeIndices()
            }, a._computeFullKeyframeIndices = function() {
                for (var t = this._fullFrames = [], e = this._templet, i = this._cacheFrameRateInterval * this._cachePlayRate, a = 0, s = e.getAnimationCount(); a < s; a++) {
                    for (var r = [], n = 0, h = e.getAnimation(a).nodes.length; n < h; n++) {
                        for (var l = e.getAnimation(a).nodes[n], o = Math.floor(l.playTime / i + .01), u = new Uint16Array(o + 1), c = -1, d = 0, _ = l.keyFrame.length; d < _; d++) {
                            var p = l.keyFrame[d],
                                f = p.startTime,
                                m = f + p.duration + i;
                            do {
                                for (var y = Math.floor(f / i + .5), x = c + 1; x < y; x++) u[x] = d;
                                c = y, u[y] = d, f += i
                            } while (f <= m)
                        }
                        r.push(u)
                    }
                    t.push(r)
                }
            }, a._onAnimationTempletLoaded = function() {
                this.destroyed || this._calculatePlayDuration()
            }, a._calculatePlayDuration = function() {
                if (0 !== this.state) {
                    var t = this._templet.getAniDuration(this._currentAnimationClipIndex);
                    0 === this._playEnd && (this._playEnd = t), this._playEnd > t && (this._playEnd = t), this._playDuration = this._playEnd - this._playStart
                }
            }, a._setPlayParams = function(t, e) {
                this._currentTime = t, this._currentKeyframeIndex = Math.max(Math.floor(this.currentPlayTime / e + .01), 0), this._currentFrameTime = this._currentKeyframeIndex * e
            }, a._setPlayParamsWhenStop = function(t, e) {
                this._currentTime = t, this._currentKeyframeIndex = Math.max(Math.floor(t / e + .01), 0), this._currentFrameTime = this._currentKeyframeIndex * e, this._currentAnimationClipIndex = -1
            }, a._update = function(t) {
                if (-1 !== this._currentAnimationClipIndex && !this._paused && this._templet && this._templet.loaded) {
                    var e = this._cacheFrameRateInterval * this._cachePlayRate,
                        i = 0;
                    this._startUpdateLoopCount !== D.loopCount && (i = t * this.playbackRate, this._elapsedPlaybackTime += i);
                    var a = this.playDuration;
                    if (0 !== this._overallDuration && this._elapsedPlaybackTime >= this._overallDuration || 0 === this._overallDuration && this._elapsedPlaybackTime >= a) return this._setPlayParamsWhenStop(a, e), void this.event("stopped");
                    if (i += this._currentTime, a > 0)
                        if (i >= a)
                            do {
                                if (i -= a, this._stopWhenCircleFinish) return this._setPlayParamsWhenStop(a, e), this._stopWhenCircleFinish = !1, void this.event("stopped");
                                i < a && (this._setPlayParams(i, e), this.event("complete"))
                            } while (i >= a);
                        else this._setPlayParams(i, e);
                    else {
                        if (this._stopWhenCircleFinish) return this._setPlayParamsWhenStop(a, e), this._stopWhenCircleFinish = !1, void this.event("stopped");
                        this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, this.event("complete")
                    }
                }
            }, a._destroy = function() {
                this.offAll(), this._templet = null, this._fullFrames = null, this._destroyed = !0
            }, a.play = function(t, e, i, a, s) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === i && (i = 2147483647), void 0 === a && (a = 0), void 0 === s && (s = 0), !this._templet) throw new Error("AnimationPlayer:templet must not be null,maybe you need to set url.");
                if (i < 0 || a < 0 || s < 0) throw new Error("AnimationPlayer:overallDuration,playStart and playEnd must large than zero.");
                if (0 !== s && a > s) throw new Error("AnimationPlayer:start must less than end.");
                this._currentTime = 0, this._currentFrameTime = 0, this._elapsedPlaybackTime = 0, this.playbackRate = e, this._overallDuration = i, this._playStart = a, this._playEnd = s, this._paused = !1, this._currentAnimationClipIndex = t, this._currentKeyframeIndex = 0, this._startUpdateLoopCount = D.loopCount, this.event("played"), this._templet.loaded ? this._calculatePlayDuration() : this._templet.once("loaded", this, this._onAnimationTempletLoaded), this._update(0)
            }, a.playByFrame = function(t, e, i, a, s, r) {
                void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === i && (i = 2147483647), void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === r && (r = 30);
                var n = 1e3 / r;
                this.play(t, e, i, a * n, s * n)
            }, a.stop = function(t) {
                void 0 === t && (t = !0), t ? (this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, this._currentAnimationClipIndex = -1, this.event("stopped")) : this._stopWhenCircleFinish = !0
            }, r(0, a, "playEnd", function() {
                return this._playEnd
            }), r(0, a, "templet", function() {
                return this._templet
            }, function(t) {
                0 === !this.state && this.stop(!0), this._templet !== t && (this._templet = t, t.loaded ? this._computeFullKeyframeIndices() : t.once("loaded", this, this._onTempletLoadedComputeFullKeyframeIndices, [this._cachePlayRate, this._cacheFrameRate]))
            }), r(0, a, "playStart", function() {
                return this._playStart
            }), r(0, a, "playDuration", function() {
                return this._playDuration
            }), r(0, a, "state", function() {
                return -1 === this._currentAnimationClipIndex ? 0 : this._paused ? 1 : 2
            }), r(0, a, "currentKeyframeIndex", function() {
                return this._currentKeyframeIndex
            }), r(0, a, "overallDuration", function() {
                return this._overallDuration
            }), r(0, a, "currentFrameTime", function() {
                return this._currentFrameTime
            }), r(0, a, "currentAnimationClipIndex", function() {
                return this._currentAnimationClipIndex
            }), r(0, a, "currentPlayTime", function() {
                return this._currentTime + this._playStart
            }), r(0, a, "cachePlayRate", function() {
                return this._cachePlayRate
            }, function(t) {
                this._cachePlayRate !== t && (this._cachePlayRate = t, this._templet && (this._templet.loaded ? this._computeFullKeyframeIndices() : this._templet.once("loaded", this, this._onTempletLoadedComputeFullKeyframeIndices, [t, this._cacheFrameRate])))
            }), r(0, a, "cacheFrameRate", function() {
                return this._cacheFrameRate
            }, function(t) {
                this._cacheFrameRate !== t && (this._cacheFrameRate = t, this._cacheFrameRateInterval = 1e3 / this._cacheFrameRate, this._templet && (this._templet.loaded ? this._computeFullKeyframeIndices() : this._templet.once("loaded", this, this._onTempletLoadedComputeFullKeyframeIndices, [this._cachePlayRate, t])))
            }), r(0, a, "currentTime", null, function(t) {
                if (-1 !== this._currentAnimationClipIndex && this._templet && this._templet.loaded) {
                    if (t < this._playStart || t > this._playEnd) throw new Error("AnimationPlayer:value must large than playStartTime,small than playEndTime.");
                    this._startUpdateLoopCount = D.loopCount;
                    var e = this._cacheFrameRateInterval * this._cachePlayRate;
                    this._currentTime = t, this._currentKeyframeIndex = Math.max(Math.floor(this.currentPlayTime / e), 0), this._currentFrameTime = this._currentKeyframeIndex * e
                }
            }), r(0, a, "paused", function() {
                return this._paused
            }, function(t) {
                this._paused = t, t && this.event("paused")
            }), r(0, a, "cacheFrameRateInterval", function() {
                return this._cacheFrameRateInterval
            }), r(0, a, "destroyed", function() {
                return this._destroyed
            }), e
        }(),
        tt = function(t) {
            function e() {
                e.__super.call(this), x.isConchNode && (this.drawSkin = function(t) {
                    t.transform || (t.transform = m.EMPTY), this._addCmd([t]), this.setSkinMesh && this.setSkinMesh(t._ps, t.mVBData, t.mEleNum, 0, t.mTexture, t.transform)
                })
            }
            s(e, "laya.ani.GraphicsAni", c);
            return e.prototype.drawSkin = function(t) {
                var e = [t];
                this._saveToCmd(x._context._drawSkin, e)
            }, e.create = function() {
                return e._caches.pop() || new e
            }, e.recycle = function(t) {
                t.clear(), e._caches.push(t)
            }, e._caches = [], e
        }(),
        et = function(t) {
            function e() {
                e.__super.call(this), this.mesh = new P
            }
            s(e, "laya.ani.bone.canvasmesh.SkinMeshCanvas", k);
            var i = e.prototype;
            return i.init2 = function(t, e, i, a, s) {
                this.transform && (this.transform = null);
                var r;
                i ? r = i : (r = []).push(0, 1, 3, 3, 1, 2), this.mesh.texture = t, this.mesh.indexes = r, this.mesh.vertices = a, this.mesh.uvs = s
            }, i.render = function(t, i, a) {
                this.mesh.texture && (this.transform ? (this.transform.translate(i, a), this.renderToContext(t), this.transform.translate(-i, -a)) : (this.transform = e._tempMatrix, this.transform.identity(), this.transform.translate(i, a), this.renderToContext(t), this.transform.translate(-i, -a), this.transform = null))
            }, a(e, ["_tempMatrix", function() {
                return this._tempMatrix = new m
            }]), e
        }(),
        it = function(t) {
            function e() {
                this._aniMap = {}, this.unfixedLastAniIndex = -1, e.__super.call(this), this._anis = new Array
            }
            s(e, "laya.ani.AnimationTemplet", g);
            var a = e.prototype;
            return a.parse = function(t) {
                var e = new o(t);
                this._aniVersion = e.readUTFString(), C.parse(this, e)
            }, a._calculateKeyFrame = function(t, e, i) {
                var a = t.keyFrame;
                a[e] = a[0];
                for (var s = 0; s < e; s++) {
                    var r = a[s];
                    r.nextData = 0 === r.duration ? r.data : a[s + 1].data
                }
                a.length--
            }, a.onAsynLoaded = function(t, e, i) {
                var a = new o(e);
                switch (this._aniVersion = a.readUTFString(), this._aniVersion) {
                    case "LAYAANIMATION:02":
                        w.parse(this, a);
                        break;
                    default:
                        C.parse(this, a)
                }
                this._endLoaded()
            }, a.disposeResource = function() {
                this._aniVersion = null, this._anis = null, this._aniMap = null, this._publicExtData = null, this.unfixedCurrentFrameIndexes = null, this.unfixedCurrentTimes = null, this.unfixedKeyframes = null, this._aniClassName = null, this._animationDatasCache = null
            }, a.getAnimationCount = function() {
                return this._anis.length
            }, a.getAnimation = function(t) {
                return this._anis[t]
            }, a.getAniDuration = function(t) {
                return this._anis[t].playTime
            }, a.getNodes = function(t) {
                return this._anis[t].nodes
            }, a.getNodeIndexWithName = function(t, e) {
                return this._anis[t].bone3DMap[e]
            }, a.getNodeCount = function(t) {
                return this._anis[t].nodes.length
            }, a.getTotalkeyframesLength = function(t) {
                return this._anis[t].totalKeyframeDatasLength
            }, a.getPublicExtData = function() {
                return this._publicExtData
            }, a.getAnimationDataWithCache = function(t, e, i, a) {
                var s = e[i];
                if (s) {
                    var r = s[t];
                    return r ? r[a] : null
                }
                return null
            }, a.setAnimationDataWithCache = function(t, e, i, a, s) {
                var r = e[i] || (e[i] = {});
                (r[t] || (r[t] = []))[a] = s
            }, a.getOriginalData = function(t, i, a, s, r) {
                for (var n = this._anis[t].nodes, h = 0, l = 0, o = n.length, u = 0; l < o; l++) {
                    var c, d = n[l];
                    c = d.keyFrame[a[l][s]], d.dataOffset = u;
                    var _ = r - c.startTime,
                        p = d.lerpType;
                    if (p) switch (p) {
                        case 0:
                        case 1:
                            for (h = 0; h < d.keyframeWidth;) h += d.interpolationMethod[h](d, h, i, u + h, c.data, _, null, c.duration, c.nextData);
                            break;
                        case 2:
                            var f = c.interpolationData,
                                m = f.length,
                                y = 0;
                            for (h = 0; h < m;) {
                                var x = f[h];
                                switch (x) {
                                    case 6:
                                    case 7:
                                        h += e.interpolation[x](d, y, i, u + y, c.data, _, null, c.duration, c.nextData, f, h + 1);
                                        break;
                                    default:
                                        h += e.interpolation[x](d, y, i, u + y, c.data, _, null, c.duration, c.nextData)
                                }
                                y++
                            }
                    } else
                        for (h = 0; h < d.keyframeWidth;) h += d.interpolationMethod[h](d, h, i, u + h, c.data, _, null, c.duration, c.nextData);
                    u += d.keyframeWidth
                }
            }, a.getNodesCurrentFrameIndex = function(t, e) {
                var i = this._anis[t].nodes;
                t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(i.length), this.unfixedCurrentTimes = new Float32Array(i.length), this.unfixedLastAniIndex = t);
                for (var a = 0, s = i.length; a < s; a++) {
                    var r = i[a];
                    for (e < this.unfixedCurrentTimes[a] && (this.unfixedCurrentFrameIndexes[a] = 0), this.unfixedCurrentTimes[a] = e; this.unfixedCurrentFrameIndexes[a] < r.keyFrame.length && !(r.keyFrame[this.unfixedCurrentFrameIndexes[a]].startTime > this.unfixedCurrentTimes[a]);) this.unfixedCurrentFrameIndexes[a]++;
                    this.unfixedCurrentFrameIndexes[a]--
                }
                return this.unfixedCurrentFrameIndexes
            }, a.getOriginalDataUnfixedRate = function(t, i, a) {
                var s = this._anis[t].nodes;
                t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(s.length), this.unfixedCurrentTimes = new Float32Array(s.length), this.unfixedKeyframes = n(s.length), this.unfixedLastAniIndex = t);
                for (var r = 0, h = 0, l = s.length, o = 0; h < l; h++) {
                    var u = s[h];
                    for (a < this.unfixedCurrentTimes[h] && (this.unfixedCurrentFrameIndexes[h] = 0), this.unfixedCurrentTimes[h] = a; this.unfixedCurrentFrameIndexes[h] < u.keyFrame.length && !(u.keyFrame[this.unfixedCurrentFrameIndexes[h]].startTime > this.unfixedCurrentTimes[h]);) this.unfixedKeyframes[h] = u.keyFrame[this.unfixedCurrentFrameIndexes[h]], this.unfixedCurrentFrameIndexes[h]++;
                    var c = this.unfixedKeyframes[h];
                    u.dataOffset = o;
                    var d = a - c.startTime;
                    if (u.lerpType) switch (u.lerpType) {
                        case 0:
                        case 1:
                            for (r = 0; r < u.keyframeWidth;) r += u.interpolationMethod[r](u, r, i, o + r, c.data, d, null, c.duration, c.nextData);
                            break;
                        case 2:
                            var _ = c.interpolationData,
                                p = _.length,
                                f = 0;
                            for (r = 0; r < p;) {
                                var m = _[r];
                                switch (m) {
                                    case 6:
                                    case 7:
                                        r += e.interpolation[m](u, f, i, o + f, c.data, d, null, c.duration, c.nextData, _, r + 1);
                                        break;
                                    default:
                                        r += e.interpolation[m](u, f, i, o + f, c.data, d, null, c.duration, c.nextData)
                                }
                                f++
                            }
                    } else
                        for (r = 0; r < u.keyframeWidth;) r += u.interpolationMethod[r](u, r, i, o + r, c.data, d, null, c.duration, c.nextData);
                    o += u.keyframeWidth
                }
            }, e._LinearInterpolation_0 = function(t, e, i, a, s, r, n, h, l, o) {
                var u = 0 === h ? 0 : r / h;
                return i[a] = (1 - u) * s[e] + u * l[e], 1
            }, e._QuaternionInterpolation_1 = function(t, e, i, a, s, r, n, h, l, o) {
                var u = 0 === h ? 0 : r / h;
                return f.slerpQuaternionArray(s, e, l, e, u, i, a), 4
            }, e._AngleInterpolation_2 = function(t, e, i, a, s, r, n, h, l, o) {
                return 0
            }, e._RadiansInterpolation_3 = function(t, e, i, a, s, r, n, h, l, o) {
                return 0
            }, e._Matrix4x4Interpolation_4 = function(t, e, i, a, s, r, n, h, l, o) {
                for (var u = 0; u < 16; u++, e++) i[a + u] = s[e] + r * n[e];
                return 16
            }, e._NoInterpolation_5 = function(t, e, i, a, s, r, n, h, l, o) {
                return i[a] = s[e], 1
            }, e._BezierInterpolation_6 = function(t, e, i, a, s, r, n, h, l, o, u) {
                return void 0 === u && (u = 0), i[a] = s[e] + (l[e] - s[e]) * $.getBezierRate(r / h, o[u], o[u + 1], o[u + 2], o[u + 3]), 5
            }, e._BezierInterpolation_7 = function(t, e, i, a, s, r, n, h, l, o, u) {
                return void 0 === u && (u = 0), i[a] = o[u + 4] + o[u + 5] * $.getBezierRate((.001 * r + o[u + 6]) / o[u + 7], o[u], o[u + 1], o[u + 2], o[u + 3]), 9
            }, e.load = function(t) {
                return i.loader.create(t, null, null, e)
            }, e.interpolation = [e._LinearInterpolation_0, e._QuaternionInterpolation_1, e._AngleInterpolation_2, e._RadiansInterpolation_3, e._Matrix4x4Interpolation_4, e._NoInterpolation_5, e._BezierInterpolation_6, e._BezierInterpolation_7], e
        }(),
        at = (function(t) {
            function e() {
                this.isCached = !1, this.canvas = null, this.tex = null, this.rec = null, e.__super.call(this)
            }
            s(e, "laya.ani.bone.canvasmesh.CacheAbleSkinMesh", et);
            var i = e.prototype;
            i.getCanvasPic = function() {
                var t = new d("2D"),
                    i = t.getContext("2d");
                this.rec = this.mesh.getBounds(), t.size(this.rec.width, this.rec.height);
                var a;
                return a = this.transform, this.transform = e.tempMt, this.transform.identity(), this.transform.translate(-this.rec.x, -this.rec.y), this.renderToContext(i), this.transform.translate(+this.rec.x, +this.rec.y), this.transform = a, new I(t)
            }, i.render = function(t, e, i) {
                this.mesh.texture && (this.isCached || (this.isCached = !0, this.tex = this.getCanvasPic()), this.transform ? (this.transform.translate(e, i), this._renderTextureToContext(t), this.transform.translate(-e, -i)) : (this.transform = et._tempMatrix, this.transform.identity(), this.transform.translate(e, i), this._renderTextureToContext(t), this.transform.translate(-e, -i), this.transform = null))
            }, i._renderTextureToContext = function(t) {
                this.context = t.ctx || t, t.save();
                var e;
                if (e = this.tex, this.transform) {
                    var i = this.transform;
                    t.transform(i.a, i.b, i.c, i.d, i.tx, i.ty)
                }
                this.rec = this.mesh.getBounds(), t.translate(this.rec.x, this.rec.y), t.drawTexture(e, 0, 0, e.width, e.height, 0, 0), t.restore()
            }, a(e, ["tempMt", function() {
                return this.tempMt = new m
            }])
        }(), function(t) {
            function e() {
                this.cacheOK = !1, this.cacheCmdOK = !1, this.transformCmds = [], this.drawCmds = [], e.__super.call(this), this.tempMesh = new P
            }
            s(e, "laya.ani.bone.canvasmesh.SimpleSkinMeshCanvas", t);
            var i = e.prototype;
            return i.init2 = function(e, i, a, s, r) {
                t.prototype.init2.call(this, e, i, a, s, r), this.cacheOK = !1, this.cacheCmdOK = !1, this.transformCmds.length = 6, this.drawCmds.length = 9
            }, i.renderToContext = function(t) {
                if (this.context = t.ctx || t, this.mesh) {
                    if (this.mesh.uvs.length <= 8) return void(0 == this.mode ? this._renderWithIndexes(this.mesh) : this._renderNoIndexes(this.mesh));
                    this.cacheOK || (this.tempMesh.texture = this.mesh.texture, this.tempMesh.uvs = this.mesh.texture.uv, this.tempMesh.vertices = Y.solveMesh(this.mesh, this.tempMesh.vertices), this.cacheOK = !0), 0 == this.mode ? this._renderWithIndexes(this.tempMesh) : this._renderNoIndexes(this.tempMesh)
                }
            }, i._renderWithIndexes = function(t) {
                if (this.cacheCmdOK) this.renderByCache(t);
                else {
                    var e = t.indexes,
                        i = 0,
                        a = e.length;
                    for (a > 1 && (a = 1), i = 0; i < a; i += 3) {
                        var s = 2 * e[i],
                            r = 2 * e[i + 1],
                            n = 2 * e[i + 2];
                        this._renderDrawTriangle(t, s, r, n)
                    }
                    this.cacheCmdOK = !0
                }
            }, i._renderDrawTriangle = function(t, e, i, a) {
                var s = this.context,
                    r = t.uvs,
                    n = t.vertices,
                    h = t.texture,
                    l = h.bitmap,
                    o = l.source,
                    u = h.width,
                    c = h.height,
                    d = l.width,
                    _ = l.height,
                    p = NaN,
                    f = NaN,
                    m = NaN,
                    y = NaN,
                    x = NaN,
                    g = NaN;
                if (t.useUvTransform) {
                    var v = t.uvTransform;
                    p = (r[e] * v.a + r[e + 1] * v.c + v.tx) * d, f = (r[i] * v.a + r[i + 1] * v.c + v.tx) * d, m = (r[a] * v.a + r[a + 1] * v.c + v.tx) * d, y = (r[e] * v.b + r[e + 1] * v.d + v.ty) * _, x = (r[i] * v.b + r[i + 1] * v.d + v.ty) * _, g = (r[a] * v.b + r[a + 1] * v.d + v.ty) * _
                } else p = r[e] * d, f = r[i] * d, m = r[a] * d, y = r[e + 1] * _, x = r[i + 1] * _, g = r[a + 1] * _;
                var M = n[e],
                    D = n[i],
                    I = n[a],
                    N = n[e + 1],
                    b = n[i + 1],
                    T = n[a + 1],
                    A = 1 / (p * x + y * m + f * g - x * m - y * f - p * g),
                    C = M * x + y * I + D * g - x * I - y * D - M * g,
                    w = p * D + M * m + f * I - D * m - M * f - p * I,
                    S = p * x * I + y * D * m + M * f * g - M * x * m - y * f * I - p * D * g,
                    F = N * x + y * T + b * g - x * T - y * b - N * g,
                    k = p * b + N * m + f * T - b * m - N * f - p * T,
                    P = p * x * T + y * b * m + N * f * g - N * x * m - y * f * T - p * b * g;
                if (this.transformCmds[0] = C * A, this.transformCmds[1] = F * A, this.transformCmds[2] = w * A, this.transformCmds[3] = k * A, this.transformCmds[4] = S * A, this.transformCmds[5] = P * A, this.drawCmds[0] = o, this.drawCmds[1] = h.uv[0] * d, this.drawCmds[2] = h.uv[1] * _, this.drawCmds[3] = u, this.drawCmds[4] = c, this.drawCmds[5] = h.uv[0] * d, this.drawCmds[6] = h.uv[1] * _, this.drawCmds[7] = u, this.drawCmds[8] = c, s.save(), this.transform) {
                    var B = this.transform;
                    s.transform(B.a, B.b, B.c, B.d, B.tx, B.ty)
                }
                s.transform.apply(s, this.transformCmds), s.drawImage.apply(s, this.drawCmds), s.restore()
            }, i.renderByCache = function(t) {
                var e = this.context;
                if (e.save(), this.transform) {
                    var i = this.transform;
                    e.transform(i.a, i.b, i.c, i.d, i.tx, i.ty)
                }
                e.transform.apply(e, this.transformCmds), e.drawImage.apply(e, this.drawCmds), e.restore()
            }, e
        }(et)),
        st = function(t) {
            function e(t, i) {
                this._templet = null, this._player = null, this._curOriginalData = null, this._boneMatrixArray = [], this._lastTime = 0, this._currAniName = null, this._currAniIndex = -1, this._pause = !0, this._aniClipIndex = -1, this._clipIndex = -1, this._skinIndex = 0, this._skinName = "default", this._aniMode = 0, this._graphicsCache = null, this._boneSlotDic = null, this._bindBoneBoneSlotDic = null, this._boneSlotArray = null, this._index = -1, this._total = -1, this._indexControl = !1, this._aniPath = null, this._texturePath = null, this._complete = null, this._loadAniMode = 0, this._yReverseMatrix = null, this._ikArr = null, this._tfArr = null, this._pathDic = null, this._rootBone = null, this._boneList = null, this._aniSectionDic = null, this._eventIndex = 0, this._drawOrderIndex = 0, this._drawOrder = null, this._lastAniClipIndex = -1, this._lastUpdateAniClipIndex = -1, e.__super.call(this), void 0 === i && (i = 0), t && this.init(t, i)
            }
            s(e, "laya.ani.bone.Skeleton", t);
            var a = e.prototype;
            return a.init = function(t, e) {
                void 0 === e && (e = 0);
                var i = 0,
                    a = 0;
                if (1 == e)
                    for (this._graphicsCache = [], i = 0, a = t.getAnimationCount(); i < a; i++) this._graphicsCache.push([]);
                if (this._yReverseMatrix = t.yReverseMatrix, this._aniMode = e, this._templet = t, this._player = new J, this._player.cacheFrameRate = t.rate, this._player.templet = t, this._player.play(), this._parseSrcBoneMatrix(), this._boneList = t.mBoneArr, this._rootBone = t.mRootBone, this._aniSectionDic = t.aniSectionDic, t.ikArr.length > 0)
                    for (this._ikArr = [], i = 0, a = t.ikArr.length; i < a; i++) this._ikArr.push(new E(t.ikArr[i], this._boneList));
                if (t.pathArr.length > 0) {
                    var s, r;
                    null == this._pathDic && (this._pathDic = {});
                    var n;
                    for (i = 0, a = t.pathArr.length; i < a; i++) s = t.pathArr[i], r = new V(s, this._boneList), (n = this._boneSlotDic[s.name]) && ((r = new V(s, this._boneList)).target = n), this._pathDic[s.name] = r
                }
                if (t.tfArr.length > 0)
                    for (this._tfArr = [], i = 0, a = t.tfArr.length; i < a; i++) this._tfArr.push(new G(t.tfArr[i], this._boneList));
                if (t.skinDataArray.length > 0) {
                    var h = this._templet.skinDataArray[this._skinIndex];
                    this._skinName = h.name
                }
                this._player.on("played", this, this._onPlay), this._player.on("stopped", this, this._onStop), this._player.on("paused", this, this._onPause)
            }, a.load = function(t, e, a) {
                void 0 === a && (a = 0), this._aniPath = t, this._complete = e, this._loadAniMode = a, i.loader.load([{
                    url: t,
                    type: "arraybuffer"
                }], _.create(this, this._onLoaded))
            }, a._onLoaded = function() {
                var t = p.getRes(this._aniPath);
                if (null != t) {
                    null == rt.TEMPLET_DICTIONARY && (rt.TEMPLET_DICTIONARY = {});
                    var e;
                    (e = rt.TEMPLET_DICTIONARY[this._aniPath]) ? e.isParseFail ? this._parseFail() : e.isParserComplete ? this._parseComplete() : (e.on("complete", this, this._parseComplete), e.on("error", this, this._parseFail)): ((e = new rt)._setUrl(this._aniPath), rt.TEMPLET_DICTIONARY[this._aniPath] = e, e.on("complete", this, this._parseComplete), e.on("error", this, this._parseFail), e.isParserComplete = !1, e.parseData(null, t))
                }
            }, a._parseComplete = function() {
                var t = rt.TEMPLET_DICTIONARY[this._aniPath];
                t && (this.init(t, this._loadAniMode), this.play(0, !0)), this._complete && this._complete.runWith(this)
            }, a._parseFail = function() {
                console.log("[Error]:" + this._aniPath + "解析失败")
            }, a._onPlay = function() {
                this.event("played")
            }, a._onStop = function() {
                var t, e = this._templet.eventAniArr[this._aniClipIndex];
                if (e && this._eventIndex < e.length)
                    for (; this._eventIndex < e.length; this._eventIndex++)(t = e[this._eventIndex]).time >= this._player.playStart && t.time <= this._player.playEnd && this.event("label", t);
                this._eventIndex = 0, this._drawOrder = null, this.event("stopped")
            }, a._onPause = function() {
                this.event("paused")
            }, a._parseSrcBoneMatrix = function() {
                var t = 0,
                    e = 0;
                for (e = this._templet.srcBoneMatrixArr.length, t = 0; t < e; t++) this._boneMatrixArray.push(new m);
                if (0 == this._aniMode) this._boneSlotDic = this._templet.boneSlotDic, this._bindBoneBoneSlotDic = this._templet.bindBoneBoneSlotDic, this._boneSlotArray = this._templet.boneSlotArray;
                else {
                    null == this._boneSlotDic && (this._boneSlotDic = {}), null == this._bindBoneBoneSlotDic && (this._bindBoneBoneSlotDic = {}), null == this._boneSlotArray && (this._boneSlotArray = []);
                    var i, a, s = this._templet.boneSlotArray;
                    for (t = 0, e = s.length; t < e; t++) i = s[t], null == (a = this._bindBoneBoneSlotDic[i.parent]) && (this._bindBoneBoneSlotDic[i.parent] = a = []), this._boneSlotDic[i.name] = i = i.copy(), a.push(i), this._boneSlotArray.push(i)
                }
            }, a._emitMissedEvents = function(t, e, i) {
                void 0 === i && (i = 0);
                var a = this._templet.eventAniArr[this._player.currentAnimationClipIndex];
                if (a) {
                    var s, r = 0,
                        n = 0;
                    for (n = a.length, r = i; r < n; r++)(s = a[r]).time >= this._player.playStart && s.time <= this._player.playEnd && this.event("label", s)
                }
            }, a._update = function(t) {
                if (void 0 === t && (t = !0), !(this._pause || t && this._indexControl)) {
                    var e = this.timer.currTimer,
                        i = this._player.currentKeyframeIndex,
                        a = e - this._lastTime;
                    if (t ? this._player._update(a) : i = -1, this._lastTime = e, this._player && (this._index = this._clipIndex = this._player.currentKeyframeIndex, !(this._index < 0 || a > 0 && this._clipIndex == i && this._lastUpdateAniClipIndex == this._aniClipIndex))) {
                        this._lastUpdateAniClipIndex = this._aniClipIndex, i > this._clipIndex && 0 != this._eventIndex && (this._emitMissedEvents(this._player.playStart, this._player.playEnd, this._eventIndex), this._eventIndex = 0);
                        var s, r = this._templet.eventAniArr[this._aniClipIndex];
                        r && this._eventIndex < r.length && ((s = r[this._eventIndex]).time >= this._player.playStart && s.time <= this._player.playEnd ? this._player.currentPlayTime >= s.time && (this.event("label", s), this._eventIndex++) : this._eventIndex++);
                        var n;
                        if (0 == this._aniMode) {
                            if (n = this._templet.getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex)) return void(this.graphics != n && (this.graphics = n));
                            var h = 0,
                                l = 0;
                            for (l = this._clipIndex; !this._templet.getGrahicsDataWithCache(this._aniClipIndex, l - 1) && l > 0;) l--;
                            if (l < this._clipIndex)
                                for (h = l; h < this._clipIndex; h++) this._createGraphics(h)
                        } else if (1 == this._aniMode) {
                            if (n = this._getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex)) return void(this.graphics != n && (this.graphics = n));
                            for (l = this._clipIndex; !this._getGrahicsDataWithCache(this._aniClipIndex, l - 1) && l > 0;) l--;
                            if (l < this._clipIndex)
                                for (h = l; h < this._clipIndex; h++) this._createGraphics(h)
                        }
                        this._createGraphics()
                    }
                }
            }, a._createGraphics = function(t) {
                void 0 === t && (t = -1), -1 == t && (t = this._clipIndex);
                var e, i = t * this._player.cacheFrameRateInterval,
                    a = this._templet.drawOrderAniArr[this._aniClipIndex];
                if (a && a.length > 0)
                    for (this._drawOrderIndex = 0, e = a[this._drawOrderIndex]; i >= e.time && (this._drawOrder = e.drawOrder, this._drawOrderIndex++, !(this._drawOrderIndex >= a.length));) e = a[this._drawOrderIndex];
                var s;
                0 == this._aniMode || 1 == this._aniMode ? this.graphics = tt.create() : this.graphics instanceof laya.ani.GraphicsAni ? this.graphics.clear() : this.graphics = tt.create(), s = this.graphics;
                var r = this._templet.getNodes(this._aniClipIndex);
                this._templet.getOriginalData(this._aniClipIndex, this._curOriginalData, this._player._fullFrames[this._aniClipIndex], t, i);
                var n, h, l, u, c = this._aniSectionDic[this._aniClipIndex],
                    d = 0,
                    _ = 0,
                    p = 0,
                    f = 0,
                    y = 0,
                    x = this._templet.srcBoneMatrixArr.length;
                for (_ = 0, y = c[0]; _ < x; _++) u = this._boneList[_], l = this._templet.srcBoneMatrixArr[_], u.resultTransform.scX = l.scX * this._curOriginalData[d++], u.resultTransform.skX = l.skX + this._curOriginalData[d++], u.resultTransform.skY = l.skY + this._curOriginalData[d++], u.resultTransform.scY = l.scY * this._curOriginalData[d++], u.resultTransform.x = l.x + this._curOriginalData[d++], u.resultTransform.y = l.y + this._curOriginalData[d++], 8 === this._templet.tMatrixDataLen && (u.resultTransform.skewX = l.skewX + this._curOriginalData[d++], u.resultTransform.skewY = l.skewY + this._curOriginalData[d++]);
                var g, v = {},
                    M = {};
                for (y += c[1]; _ < y; _++) v[(g = r[_]).name] = this._curOriginalData[d++], M[g.name] = this._curOriginalData[d++], this._curOriginalData[d++], this._curOriginalData[d++], this._curOriginalData[d++], this._curOriginalData[d++];
                var D = {},
                    I = {};
                for (y += c[2]; _ < y; _++) D[(g = r[_]).name] = this._curOriginalData[d++], I[g.name] = this._curOriginalData[d++], this._curOriginalData[d++], this._curOriginalData[d++], this._curOriginalData[d++], this._curOriginalData[d++];
                if (this._pathDic) {
                    var N;
                    for (y += c[3]; _ < y; _++)
                        if (g = r[_], N = this._pathDic[g.name]) {
                            switch (new o(g.extenData).getByte()) {
                                case 1:
                                    N.position = this._curOriginalData[d++];
                                    break;
                                case 2:
                                    N.spacing = this._curOriginalData[d++];
                                    break;
                                case 3:
                                    N.rotateMix = this._curOriginalData[d++], N.translateMix = this._curOriginalData[d++]
                            }
                        }
                }
                if (this._yReverseMatrix ? this._rootBone.update(this._yReverseMatrix) : this._rootBone.update(m.TEMP.identity()), this._ikArr) {
                    var b;
                    for (_ = 0, y = this._ikArr.length; _ < y; _++) b = this._ikArr[_], D.hasOwnProperty(b.name) && (b.bendDirection = D[b.name]), I.hasOwnProperty(b.name) && (b.mix = I[b.name]), b.apply()
                }
                if (this._pathDic)
                    for (var T in this._pathDic)(N = this._pathDic[T]).apply(this._boneList, s);
                if (this._tfArr) {
                    for (_ = 0, f = this._tfArr.length; _ < f; _++) this._tfArr[_].apply()
                }
                for (_ = 0, f = this._boneList.length; _ < f; _++)
                    if (u = this._boneList[_], h = this._bindBoneBoneSlotDic[u.name], u.resultMatrix.copyTo(this._boneMatrixArray[_]), h)
                        for (p = 0, y = h.length; p < y; p++)(n = h[p]) && n.setParentMatrix(u.resultMatrix);
                var A, C = {},
                    w = this._templet.deformAniArr;
                if (w && w.length > 0) {
                    if (this._lastAniClipIndex != this._aniClipIndex)
                        for (this._lastAniClipIndex = this._aniClipIndex, _ = 0, y = this._boneSlotArray.length; _ < y; _++)(n = this._boneSlotArray[_]).deformData = null;
                    var S = w[this._aniClipIndex];
                    A = S.default, this._setDeform(A, C, this._boneSlotArray, i);
                    var F;
                    for (F in S) "default" != F && F != this._skinName && (A = S[F], this._setDeform(A, C, this._boneSlotArray, i));
                    A = S[this._skinName], this._setDeform(A, C, this._boneSlotArray, i)
                }
                var k, P, B;
                if (this._drawOrder)
                    for (_ = 0, y = this._drawOrder.length; _ < y; _++) k = v[(n = this._boneSlotArray[this._drawOrder[_]]).name], P = M[n.name], isNaN(P) || (s.save(), s.alpha(P)), isNaN(k) || -2 == k || (this._templet.attachmentNames ? n.showDisplayByName(this._templet.attachmentNames[k]) : n.showDisplayByIndex(k)), C[this._drawOrder[_]] ? (B = C[this._drawOrder[_]], n.currDisplayData && B[n.currDisplayData.attachmentName] ? n.deformData = B[n.currDisplayData.attachmentName] : n.deformData = null) : n.deformData = null, isNaN(P) ? n.draw(s, this._boneMatrixArray, 2 == this._aniMode) : n.draw(s, this._boneMatrixArray, 2 == this._aniMode, P), isNaN(P) || s.restore();
                else
                    for (_ = 0, y = this._boneSlotArray.length; _ < y; _++) k = v[(n = this._boneSlotArray[_]).name], P = M[n.name], isNaN(P) || (s.save(), s.alpha(P)), isNaN(k) || -2 == k || (this._templet.attachmentNames ? n.showDisplayByName(this._templet.attachmentNames[k]) : n.showDisplayByIndex(k)), C[_] ? (B = C[_], n.currDisplayData && B[n.currDisplayData.attachmentName] ? n.deformData = B[n.currDisplayData.attachmentName] : n.deformData = null) : n.deformData = null, isNaN(P) ? n.draw(s, this._boneMatrixArray, 2 == this._aniMode) : n.draw(s, this._boneMatrixArray, 2 == this._aniMode, P), isNaN(P) || s.restore();
                0 == this._aniMode ? this._templet.setGrahicsDataWithCache(this._aniClipIndex, t, s) : 1 == this._aniMode && this._setGrahicsDataWithCache(this._aniClipIndex, t, s)
            }, a._setDeform = function(t, e, i, a) {
                if (t) {
                    var s, r, n, h = 0,
                        l = 0,
                        o = 0;
                    if (t)
                        for (h = 0, l = t.deformSlotDataList.length; h < l; h++)
                            for (s = t.deformSlotDataList[h], o = 0; o < s.deformSlotDisplayList.length; o++) n = i[(r = s.deformSlotDisplayList[o]).slotIndex], r.apply(a, n), e[r.slotIndex] || (e[r.slotIndex] = {}), e[r.slotIndex][r.attachment] = r.deformData
                }
            }, a.getAnimNum = function() {
                return this._templet.getAnimationCount()
            }, a.getAniNameByIndex = function(t) {
                return this._templet.getAniNameByIndex(t)
            }, a.getSlotByName = function(t) {
                return this._boneSlotDic[t]
            }, a.showSkinByName = function(t, e) {
                void 0 === e && (e = !0), this.showSkinByIndex(this._templet.getSkinIndexByName(t), e)
            }, a.showSkinByIndex = function(t, e) {
                void 0 === e && (e = !0);
                for (var i = 0; i < this._boneSlotArray.length; i++) this._boneSlotArray[i].showSlotData(null, e);
                if (this._templet.showSkinByIndex(this._boneSlotDic, t, e)) {
                    var a = this._templet.skinDataArray[t];
                    this._skinIndex = t, this._skinName = a.name
                }
                this._clearCache()
            }, a.showSlotSkinByIndex = function(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.showDisplayByIndex(e), this._clearCache()
                }
            }, a.showSlotSkinByName = function(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.showDisplayByName(e), this._clearCache()
                }
            }, a.replaceSlotSkinName = function(t, e, i) {
                if (0 != this._aniMode) {
                    var a = this.getSlotByName(t);
                    a && a.replaceDisplayByName(e, i), this._clearCache()
                }
            }, a.replaceSlotSkinByIndex = function(t, e, i) {
                if (0 != this._aniMode) {
                    var a = this.getSlotByName(t);
                    a && a.replaceDisplayByIndex(e, i), this._clearCache()
                }
            }, a.setSlotSkin = function(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.replaceSkin(e), this._clearCache()
                }
            }, a._clearCache = function() {
                if (1 == this._aniMode)
                    for (var t = 0, e = this._graphicsCache.length; t < e; t++) {
                        for (var i = 0, a = this._graphicsCache[t].length; i < a; i++) {
                            var s = this._graphicsCache[t][i];
                            s != this.graphics && tt.recycle(s)
                        }
                        this._graphicsCache[t].length = 0
                    }
            }, a.play = function(t, e, i, a, s, r) {
                void 0 === i && (i = !0), void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === r && (r = !0), this._indexControl = !1;
                var n = -1,
                    h = NaN;
                if (h = e ? 2147483647 : 0, "string" == typeof t)
                    for (var o = 0, u = this._templet.getAnimationCount(); o < u; o++) {
                        var c = this._templet.getAnimation(o);
                        if (c && t == c.name) {
                            n = o;
                            break
                        }
                    } else n = t;
                n > -1 && n < this.getAnimNum() && (this._aniClipIndex = n, (i || this._pause || this._currAniIndex != n) && (this._currAniIndex = n, this._curOriginalData = new Float32Array(this._templet.getTotalkeyframesLength(n)), this._drawOrder = null, this._eventIndex = 0, this._player.play(n, this._player.playbackRate, h, a, s), r && this._templet.showSkinByIndex(this._boneSlotDic, this._skinIndex), this._pause && (this._pause = !1, this._lastTime = l.now(), this.timer.frameLoop(1, this, this._update, null, !0)), this._update()))
            }, a.stop = function() {
                this._pause || (this._pause = !0, this._player && this._player.stop(!0), this.timer.clear(this, this._update))
            }, a.playbackRate = function(t) {
                this._player && (this._player.playbackRate = t)
            }, a.paused = function() {
                this._pause || (this._pause = !0, this._player && (this._player.paused = !0), this.timer.clear(this, this._update))
            }, a.resume = function() {
                this._indexControl = !1, this._pause && (this._pause = !1, this._player && (this._player.paused = !1), this._lastTime = l.now(), this.timer.frameLoop(1, this, this._update, null, !0))
            }, a._getGrahicsDataWithCache = function(t, e) {
                return this._graphicsCache[t][e]
            }, a._setGrahicsDataWithCache = function(t, e, i) {
                this._graphicsCache[t][e] = i
            }, a.destroy = function(e) {
                void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._templet = null, this._player && this._player.offAll(), this._player = null, this._curOriginalData = null, this._boneMatrixArray.length = 0, this._lastTime = 0, this.timer.clear(this, this._update)
            }, r(0, a, "url", function() {
                return this._aniPath
            }, function(t) {
                this.load(t)
            }), r(0, a, "index", function() {
                return this._index
            }, function(t) {
                this.player && (this._index = t, this._player.currentTime = 1e3 * this._index / this._player.cacheFrameRate, this._indexControl = !0, this._update(!1))
            }), r(0, a, "total", function() {
                return this._templet && this._player ? this._total = Math.floor(this._templet.getAniDuration(this._player.currentAnimationClipIndex) / 1e3 * this._player.cacheFrameRate) : this._total = -1, this._total
            }), r(0, a, "templet", function() {
                return this._templet
            }), r(0, a, "player", function() {
                return this._player
            }), e.useSimpleMeshInCanvas = !1, e
        }(M),
        rt = (function(t) {
            function e(t) {
                this._start = 0, this._Pos = 0, this._data = null, this._curIndex = 0, this._preIndex = 0, this._playIndex = 0, this._playing = !1, this._ended = !0, this._count = 0, this._ids = null, this._loadedImage = {}, this._idOfSprite = null, this._parentMovieClip = null, this._movieClipList = null, this._labels = null, this.basePath = null, this._atlasPath = null, this._url = null, this._isRoot = !1, this._completeHandler = null, this._endFrame = -1, this.interval = 30, this.loop = !1, e.__super.call(this), this._ids = {}, this._idOfSprite = [], this._reset(), this._playing = !1, this._parentMovieClip = t, t ? (this._isRoot = !1, this._movieClipList = t._movieClipList, this._movieClipList.push(this)) : (this._movieClipList = [this], this._isRoot = !0, this._setUpNoticeType(1))
            }
            s(e, "laya.ani.swf.MovieClip", t);
            var a = e.prototype;
            a.destroy = function(e) {
                void 0 === e && (e = !0), this._clear(), t.prototype.destroy.call(this, e)
            }, a._setDisplay = function(e) {
                t.prototype._setDisplay.call(this, e), this._isRoot && this._$3__onDisplay(e)
            }, a._$3__onDisplay = function(t) {
                t ? this.timer.loop(this.interval, this, this.updates, null, !0) : this.timer.clear(this, this.updates)
            }, a.updates = function() {
                if (!this._parentMovieClip) {
                    var t = 0,
                        e = 0;
                    for (e = this._movieClipList.length, t = 0; t < e; t++) this._movieClipList[t] && this._movieClipList[t]._update()
                }
            }, a.addLabel = function(t, e) {
                this._labels || (this._labels = {}), this._labels[e] = t
            }, a.removeLabel = function(t) {
                if (t) {
                    if (!this._labels)
                        for (var e in this._labels)
                            if (this._labels[e] === t) {
                                delete this._labels[e];
                                break
                            }
                } else this._labels = null
            }, a._update = function() {
                if (this._data && this._playing) {
                    if (this._playIndex++, this._playIndex >= this._count) {
                        if (!this.loop) return this._playIndex--, void this.stop();
                        this._playIndex = 0
                    }
                    if (this._parse(this._playIndex), this._labels && this._labels[this._playIndex] && this.event("label", this._labels[this._playIndex]), -1 != this._endFrame && this._endFrame == this._playIndex) {
                        if (this._endFrame = -1, null != this._completeHandler) {
                            var t = this._completeHandler;
                            this._completeHandler = null, t.run()
                        }
                        this.stop()
                    }
                }
            }, a.stop = function() {
                this._playing = !1
            }, a.gotoAndStop = function(t) {
                this.index = t, this.stop()
            }, a._clear = function() {
                if (this.stop(), this._idOfSprite.length = 0, !this._parentMovieClip) {
                    this.timer.clear(this, this.updates);
                    var t = 0,
                        e = 0;
                    for (e = this._movieClipList.length, t = 0; t < e; t++) this._movieClipList[t] != this && this._movieClipList[t]._clear();
                    this._movieClipList.length = 0
                }
                this._atlasPath && p.clearRes(this._atlasPath);
                var i;
                for (i in this._loadedImage) this._loadedImage[i] && (p.clearRes(i), this._loadedImage[i] = !1);
                this.removeChildren(), this.graphics = null, this._parentMovieClip = null
            }, a.play = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = !0), this.loop = e, this._playing = !0, this._data && this._displayFrame(t)
            }, a._displayFrame = function(t) {
                void 0 === t && (t = -1), -1 != t && (this._curIndex > t && this._reset(), this._parse(t))
            }, a._reset = function(t) {
                void 0 === t && (t = !0), t && 1 != this._curIndex && this.removeChildren(), this._preIndex = this._curIndex = -1, this._Pos = this._start
            }, a._parse = function(t) {
                var i, a, s, r = 0,
                    n = 0,
                    h = 0,
                    l = !1,
                    o = this._idOfSprite,
                    u = this._data;
                for (this._ended && this._reset(), u.pos = this._Pos, this._ended = !1, this._playIndex = t, this._curIndex > t && t < this._preIndex && (this._reset(!0), u.pos = this._Pos); this._curIndex <= t && !this._ended;) switch (u.getUint16()) {
                    case 12:
                        if (r = u.getUint16(), n = this._ids[u.getUint16()], this._Pos = u.pos, u.pos = n, 0 == (h = u.getUint8())) {
                            var c = u.getUint16();
                            if (!(a = o[r])) {
                                a = o[r] = new M;
                                var d = new M;
                                d.loadImage(this.basePath + c + ".png"), this._loadedImage[this.basePath + c + ".png"] = !0, a.addChild(d), d.size(u.getFloat32(), u.getFloat32());
                                var _ = u._getMatrix();
                                d.transform = _
                            }
                            a.alpha = 1
                        } else 1 == h && ((i = o[r]) || (o[r] = i = new e(this), i.interval = this.interval, i._ids = this._ids, i.basePath = this.basePath, i._setData(u, n), i._initState(), i.play(0)), i.alpha = 1);
                        u.pos = this._Pos;
                        break;
                    case 3:
                        var p = o[u.getUint16()];
                        p && (this.addChild(p), p.zOrder = u.getUint16(), l = !0);
                        break;
                    case 4:
                        (p = o[u.getUint16()]) && p.removeSelf();
                        break;
                    case 5:
                        o[u.getUint16()][e._ValueList[u.getUint16()]] = u.getFloat32();
                        break;
                    case 6:
                        o[u.getUint16()].visible = u.getUint8() > 0;
                        break;
                    case 7:
                        var f = (a = o[u.getUint16()]).transform || m.create();
                        f.setTo(u.getFloat32(), u.getFloat32(), u.getFloat32(), u.getFloat32(), u.getFloat32(), u.getFloat32()), a.transform = f;
                        break;
                    case 8:
                        o[u.getUint16()].setPos(u.getFloat32(), u.getFloat32());
                        break;
                    case 9:
                        o[u.getUint16()].setSize(u.getFloat32(), u.getFloat32());
                        break;
                    case 10:
                        o[u.getUint16()].alpha = u.getFloat32();
                        break;
                    case 11:
                        o[u.getUint16()].setScale(u.getFloat32(), u.getFloat32());
                        break;
                    case 98:
                        s = u.getString(), this.event(s), "stop" == s && this.stop();
                        break;
                    case 99:
                        this._curIndex = u.getUint16(), l && this.updateZOrder();
                        break;
                    case 100:
                        this._count = this._curIndex + 1, this._ended = !0, this._playing && (this.event("enterframe"), this.event("end"), this.event("complete")), this._reset(!1)
                }
                this._playing && !this._ended && this.event("enterframe"), this._Pos = u.pos
            }, a._setData = function(t, e) {
                this._data = t, this._start = e + 3
            }, a.load = function(t, e, a) {
                void 0 === e && (e = !1), this._url = t = N.formatURL(t), e && (this._atlasPath = a || t.split(".swf")[0] + ".json"), this.stop(), this._clear(), this._movieClipList = [this];
                var s;
                s = [{
                    url: t,
                    type: "arraybuffer"
                }], this._atlasPath && s.push({
                    url: this._atlasPath,
                    type: "atlas"
                }), i.loader.load(s, _.create(this, this._onLoaded))
            }, a._onLoaded = function() {
                var t;
                (t = p.getRes(this._url)) ? (this.basePath = this._atlasPath ? p.getAtlas(this._atlasPath).dir : this._url.split(".swf")[0] + "/image/", this._initData(t)) : this.event("error", "file not find")
            }, a._initState = function() {
                this._reset(), this._ended = !1;
                var t = this._playing;
                for (this._playing = !1, this._curIndex = 0; !this._ended;) this._parse(++this._curIndex);
                this._playing = t
            }, a._initData = function(t) {
                this._data = new o(t);
                var e = 0,
                    i = this._data.getUint16();
                for (e = 0; e < i; e++) this._ids[this._data.getInt16()] = this._data.getInt32();
                this.interval = 1e3 / this._data.getUint16(), this._setData(this._data, this._ids[32767]), this._initState(), this.play(0), this.event("loaded"), this._parentMovieClip || this.timer.loop(this.interval, this, this.updates, null, !0)
            }, a.playTo = function(t, e, i) {
                this._completeHandler = i, this._endFrame = e, this.play(t, !1)
            }, r(0, a, "index", function() {
                return this._playIndex
            }, function(t) {
                this._playIndex = t, this._data && this._displayFrame(this._playIndex), this._labels && this._labels[t] && this.event("label", this._labels[t])
            }), r(0, a, "count", function() {
                return this._count
            }), r(0, a, "playing", function() {
                return this._playing
            }), r(0, a, "url", null, function(t) {
                this.load(t)
            }), e._ValueList = ["x", "y", "width", "height", "scaleX", "scaleY", "rotation", "alpha"]
        }(M), function(t) {
            function e() {
                this._mainTexture = null, this._textureJson = null, this._graphicsCache = [], this.srcBoneMatrixArr = [], this.ikArr = [], this.tfArr = [], this.pathArr = [], this.boneSlotDic = {}, this.bindBoneBoneSlotDic = {}, this.boneSlotArray = [], this.skinDataArray = [], this.skinDic = {}, this.subTextureDic = {}, this.isParseFail = !1, this.yReverseMatrix = null, this.drawOrderAniArr = [], this.eventAniArr = [], this.attachmentNames = null, this.deformAniArr = [], this._isDestroyed = !1, this._rate = 30, this.isParserComplete = !1, this.aniSectionDic = {}, this._skBufferUrl = null, this._textureDic = {}, this._loadList = null, this._path = null, this.tMatrixDataLen = 0, this.mRootBone = null, e.__super.call(this), this.skinSlotDisplayDataArr = [], this.mBoneArr = []
            }
            s(e, "laya.ani.bone.Templet", t);
            var a = e.prototype;
            return a.loadAni = function(t) {
                this._skBufferUrl = t, i.loader.load(t, _.create(this, this.onComplete), null, "arraybuffer")
            }, a.onComplete = function(t) {
                if (this._isDestroyed) this.destroy();
                else {
                    var e = p.getRes(this._skBufferUrl);
                    e ? (this._path = this._skBufferUrl.slice(0, this._skBufferUrl.lastIndexOf("/")) + "/", this.parseData(null, e)) : this.event("error", "load failed:" + this._skBufferUrl)
                }
            }, a.parseData = function(t, e, i) {
                void 0 === i && (i = 30), !this._path && this.url && (this._path = this.url.slice(0, this.url.lastIndexOf("/")) + "/"), this._mainTexture = t, this._mainTexture && x.isWebGL && t.bitmap && (t.bitmap.enableMerageInAtlas = !1), this._rate = i, this.parse(e)
            }, a.buildArmature = function(t) {
                return void 0 === t && (t = 0), new st(this, t)
            }, a.parse = function(i) {
                t.prototype.parse.call(this, i), this._endLoaded(), this._aniVersion != e.LAYA_ANIMATION_VISION && (console.log("[Error] 版本不一致，请使用IDE版本配套的重新导出" + this._aniVersion + "->" + e.LAYA_ANIMATION_VISION), this._loaded = !1), this.loaded ? this._mainTexture ? this._parsePublicExtData() : this._parseTexturePath() : (this.event("error", this), this.isParseFail = !0)
            }, a._parseTexturePath = function() {
                if (this._isDestroyed) this.destroy();
                else {
                    var t = 0;
                    this._loadList = [];
                    var e, a = new o(this.getPublicExtData()),
                        s = 0,
                        r = 0,
                        n = 0,
                        h = a.getInt32(),
                        l = a.readUTFString(),
                        u = l.split("\n");
                    for (t = 0; t < h; t++) e = this._path + u[2 * t], l = u[2 * t + 1], a.getFloat32(), a.getFloat32(), s = a.getFloat32(), r = a.getFloat32(), n = a.getFloat32(), isNaN(n) ? 0 : n, n = a.getFloat32(), isNaN(n) ? 0 : n, n = a.getFloat32(), isNaN(n) ? s : n, n = a.getFloat32(), isNaN(n) ? r : n, -1 == this._loadList.indexOf(e) && this._loadList.push(e);
                    i.loader.load(this._loadList, _.create(this, this._textureComplete))
                }
            }, a._textureComplete = function() {
                for (var t, e, i = 0, a = this._loadList.length; i < a; i++) e = this._loadList[i], t = this._textureDic[e] = p.getRes(e), x.isWebGL && t && t.bitmap && (t.bitmap.enableMerageInAtlas = !1);
                this._parsePublicExtData()
            }, a._parsePublicExtData = function() {
                var t = 0,
                    e = 0,
                    i = 0,
                    a = 0,
                    s = 0;
                for (t = 0, s = this.getAnimationCount(); t < s; t++) this._graphicsCache.push([]);
                var r = !1;
                r = "Dragon" != this._aniClassName;
                var n, h, l = new o(this.getPublicExtData()),
                    u = 0,
                    c = 0,
                    d = 0,
                    _ = 0,
                    p = 0,
                    f = 0,
                    y = 0,
                    x = 0,
                    g = 0,
                    v = l.getInt32(),
                    M = l.readUTFString(),
                    D = M.split("\n");
                for (t = 0; t < v; t++) {
                    if (n = this._mainTexture, h = this._path + D[2 * t], M = D[2 * t + 1], null == this._mainTexture && (n = this._textureDic[h]), !n) return this.event("error", this), void(this.isParseFail = !0);
                    u = l.getFloat32(), c = l.getFloat32(), d = l.getFloat32(), _ = l.getFloat32(), g = l.getFloat32(), p = isNaN(g) ? 0 : g, g = l.getFloat32(), f = isNaN(g) ? 0 : g, g = l.getFloat32(), y = isNaN(g) ? d : g, g = l.getFloat32(), x = isNaN(g) ? _ : g, this.subTextureDic[M] = I.create(n, u, c, d, _, -p, -f, y, x)
                }
                this._mainTexture = n;
                var N, b = l.getUint16();
                for (t = 0; t < b; t++)(N = []).push(l.getUint16()), N.push(l.getUint16()), N.push(l.getUint16()), N.push(l.getUint16()), this.aniSectionDic[t] = N;
                var T, A, C, w, k, P = l.getInt16(),
                    E = {};
                for (t = 0; t < P; t++) T = new S, 0 == t ? k = T : T.root = k, T.d = r ? -1 : 1, C = l.readUTFString(), w = l.readUTFString(), T.length = l.getFloat32(), 1 == l.getByte() && (T.inheritRotation = !1), 1 == l.getByte() && (T.inheritScale = !1), T.name = C, w && ((A = E[w]) ? A.addChild(T) : this.mRootBone = T), E[C] = T, this.mBoneArr.push(T);
                this.tMatrixDataLen = l.getUint16();
                var Y, V = l.getUint16(),
                    G = Math.floor(V / this.tMatrixDataLen),
                    Z = this.srcBoneMatrixArr;
                for (t = 0; t < G; t++)(Y = new Q).scX = l.getFloat32(), Y.skX = l.getFloat32(), Y.skY = l.getFloat32(), Y.scY = l.getFloat32(), Y.x = l.getFloat32(), Y.y = l.getFloat32(), 8 === this.tMatrixDataLen && (Y.skewX = l.getFloat32(), Y.skewY = l.getFloat32()), Z.push(Y), (T = this.mBoneArr[t]).transform = Y;
                var j, $ = l.getUint16(),
                    J = 0;
                for (t = 0; t < $; t++) {
                    for (j = new K, J = l.getUint16(), e = 0; e < J; e++) j.boneNames.push(l.readUTFString()), j.boneIndexs.push(l.getInt16());
                    j.name = l.readUTFString(), j.targetBoneName = l.readUTFString(), j.targetBoneIndex = l.getInt16(), j.bendDirection = l.getFloat32(), j.mix = l.getFloat32(), j.isSpine = r, this.ikArr.push(j)
                }
                var tt, et = l.getUint16(),
                    it = 0;
                for (t = 0; t < et; t++) {
                    for (tt = new H, it = l.getUint16(), e = 0; e < it; e++) tt.boneIndexs.push(l.getInt16());
                    tt.name = l.getUTFString(), tt.targetIndex = l.getInt16(), tt.rotateMix = l.getFloat32(), tt.translateMix = l.getFloat32(), tt.scaleMix = l.getFloat32(), tt.shearMix = l.getFloat32(), tt.offsetRotation = l.getFloat32(), tt.offsetX = l.getFloat32(), tt.offsetY = l.getFloat32(), tt.offsetScaleX = l.getFloat32(), tt.offsetScaleY = l.getFloat32(), tt.offsetShearY = l.getFloat32(), this.tfArr.push(tt)
                }
                var at, st = l.getUint16(),
                    rt = 0;
                for (t = 0; t < st; t++) {
                    for ((at = new W).name = l.readUTFString(), rt = l.getUint16(), e = 0; e < rt; e++) at.bones.push(l.getInt16());
                    at.target = l.readUTFString(), at.positionMode = l.readUTFString(), at.spacingMode = l.readUTFString(), at.rotateMode = l.readUTFString(), at.offsetRotation = l.getFloat32(), at.position = l.getFloat32(), at.spacing = l.getFloat32(), at.rotateMix = l.getFloat32(), at.translateMix = l.getFloat32(), this.pathArr.push(at)
                }
                var nt, ht, lt, ot, ut = 0,
                    ct = 0,
                    dt = 0,
                    _t = NaN,
                    pt = 0,
                    ft = l.getInt16();
                for (t = 0; t < ft; t++) {
                    var mt = l.getUint8(),
                        yt = {};
                    this.deformAniArr.push(yt);
                    for (var xt = 0; xt < mt; xt++)
                        for ((nt = new B).skinName = l.getUTFString(), yt[nt.skinName] = nt, ut = l.getInt16(), e = 0; e < ut; e++)
                            for (ht = new U, nt.deformSlotDataList.push(ht), ct = l.getInt16(), i = 0; i < ct; i++)
                                for (lt = new L, ht.deformSlotDisplayList.push(lt), lt.slotIndex = l.getInt16(), lt.attachment = l.getUTFString(), dt = l.getInt16(), a = 0; a < dt; a++)
                                    for (1 == l.getByte() ? lt.tweenKeyList.push(!0) : lt.tweenKeyList.push(!1), _t = l.getFloat32(), lt.timeList.push(_t), ot = [], lt.vectices.push(ot), pt = l.getInt16(), s = 0; s < pt; s++) ot.push(l.getFloat32())
                }
                var gt, vt, Mt = l.getInt16(),
                    Dt = 0,
                    It = 0;
                for (t = 0; t < Mt; t++) {
                    for (Dt = l.getInt16(), gt = [], e = 0; e < Dt; e++) {
                        for ((vt = new R).time = l.getFloat32(), It = l.getInt16(), i = 0; i < It; i++) vt.drawOrder.push(l.getInt16());
                        gt.push(vt)
                    }
                    this.drawOrderAniArr.push(gt)
                }
                var Nt, bt, Tt = l.getInt16(),
                    At = 0;
                for (t = 0; t < Tt; t++) {
                    for (At = l.getInt16(), Nt = [], e = 0; e < At; e++)(bt = new O).name = l.getUTFString(), bt.intValue = l.getInt32(), bt.floatValue = l.getFloat32(), bt.stringValue = l.getUTFString(), bt.time = l.getFloat32(), Nt.push(bt);
                    this.eventAniArr.push(Nt)
                }
                var Ct = l.getInt16();
                if (Ct > 0)
                    for (this.attachmentNames = [], t = 0; t < Ct; t++) this.attachmentNames.push(l.getUTFString());
                var wt, St, Ft = l.getInt16();
                for (t = 0; t < Ft; t++)(wt = new F).name = l.readUTFString(), wt.parent = l.readUTFString(), wt.attachmentName = l.readUTFString(), wt.srcDisplayIndex = wt.displayIndex = l.getInt16(), wt.templet = this, this.boneSlotDic[wt.name] = wt, null == (St = this.bindBoneBoneSlotDic[wt.parent]) && (this.bindBoneBoneSlotDic[wt.parent] = St = []), St.push(wt), this.boneSlotArray.push(wt);
                var kt, Pt, Bt, Ut = l.readUTFString().split("\n"),
                    Lt = 0,
                    Rt = l.getUint8(),
                    Ot = 0,
                    Et = 0,
                    Kt = 0,
                    Yt = 0,
                    Vt = 0,
                    Wt = 0,
                    Xt = 0;
                for (t = 0; t < Rt; t++) {
                    for ((kt = new X).name = Ut[Lt++], Ot = l.getUint8(), e = 0; e < Ot; e++) {
                        for ((Pt = new q).name = Ut[Lt++], wt = this.boneSlotDic[Pt.name], Et = l.getUint8(), i = 0; i < Et; i++) {
                            if (Bt = new z, this.skinSlotDisplayDataArr.push(Bt), Bt.name = Ut[Lt++], Bt.attachmentName = Ut[Lt++], Bt.transform = new Q, Bt.transform.scX = l.getFloat32(), Bt.transform.skX = l.getFloat32(), Bt.transform.skY = l.getFloat32(), Bt.transform.scY = l.getFloat32(), Bt.transform.x = l.getFloat32(), Bt.transform.y = l.getFloat32(), Pt.displayArr.push(Bt), Bt.width = l.getFloat32(), Bt.height = l.getFloat32(), Bt.type = l.getUint8(), Bt.verLen = l.getUint16(), (P = l.getUint16()) > 0)
                                for (Bt.bones = [], a = 0; a < P; a++) {
                                    var zt = l.getUint16();
                                    Bt.bones.push(zt)
                                }
                            if ((Kt = l.getUint16()) > 0)
                                for (Bt.uvs = [], a = 0; a < Kt; a++) Bt.uvs.push(l.getFloat32());
                            if ((Yt = l.getUint16()) > 0)
                                for (Bt.weights = [], a = 0; a < Yt; a++) Bt.weights.push(l.getFloat32());
                            if ((Vt = l.getUint16()) > 0)
                                for (Bt.triangles = [], a = 0; a < Vt; a++) Bt.triangles.push(l.getUint16());
                            if ((Wt = l.getUint16()) > 0)
                                for (Bt.vertices = [], a = 0; a < Wt; a++) Bt.vertices.push(l.getFloat32());
                            if ((Xt = l.getUint16()) > 0)
                                for (Bt.lengths = [], a = 0; a < Xt; a++) Bt.lengths.push(l.getFloat32())
                        }
                        kt.slotArr.push(Pt)
                    }
                    this.skinDic[kt.name] = kt, this.skinDataArray.push(kt)
                }
                1 == l.getUint8() ? (this.yReverseMatrix = new m(1, 0, 0, -1, 0, 0), k && k.setTempMatrix(this.yReverseMatrix)) : k && k.setTempMatrix(new m), this.showSkinByIndex(this.boneSlotDic, 0), this.isParserComplete = !0, this.event("complete", this)
            }, a.getTexture = function(t) {
                var e = this.subTextureDic[t];
                return e || (e = this.subTextureDic[t.substr(0, t.length - 1)]), null == e ? this._mainTexture : e
            }, a.showSkinByIndex = function(t, e, i) {
                if (void 0 === i && (i = !0), e < 0 && e >= this.skinDataArray.length) return !1;
                var a, s, r = 0,
                    n = 0,
                    h = this.skinDataArray[e];
                if (h) {
                    for (r = 0, n = h.slotArr.length; r < n; r++)(s = h.slotArr[r]) && (a = t[s.name]) && (a.showSlotData(s, i), i && "undefined" != a.attachmentName && "null" != a.attachmentName ? a.showDisplayByName(a.attachmentName) : a.showDisplayByIndex(a.displayIndex));
                    return !0
                }
                return !1
            }, a.getSkinIndexByName = function(t) {
                for (var e = 0, i = this.skinDataArray.length; e < i; e++)
                    if (this.skinDataArray[e].name == t) return e;
                return -1
            }, a.getGrahicsDataWithCache = function(t, e) {
                return this._graphicsCache[t][e]
            }, a.setGrahicsDataWithCache = function(t, e, i) {
                this._graphicsCache[t][e] = i
            }, a.destroy = function() {
                this._isDestroyed = !0;
                var t;
                for (var i in this.subTextureDic)(t = this.subTextureDic[i]) && t.destroy();
                for (i in this._textureDic)(t = this._textureDic[i]) && t.destroy();
                for (var a = 0, s = this.skinSlotDisplayDataArr.length; a < s; a++) this.skinSlotDisplayDataArr[a].destory();
                this.skinSlotDisplayDataArr.length = 0, this.url && delete e.TEMPLET_DICTIONARY[this.url], laya.resource.Resource.prototype.destroy.call(this)
            }, a.getAniNameByIndex = function(t) {
                var e = this.getAnimation(t);
                return e ? e.name : null
            }, r(0, a, "rate", function() {
                return this._rate
            }, function(t) {
                this._rate = t
            }), e.LAYA_ANIMATION_VISION = "LAYAANIMATION:1.6.0", e.TEMPLET_DICTIONARY = null, e
        }(it))
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    for (var i in Laya) {
        var a = Laya[i];
        a && a.__isclass && (e[i] = a)
    }
});