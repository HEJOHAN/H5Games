! function(t, e, i) {
    i.un, i.uns;
    var r = i.static,
        s = i.class,
        a = i.getset,
        n = i.__newvec,
        h = laya.maths.Arith,
        l = laya.maths.Bezier,
        o = laya.resource.Bitmap,
        u = laya.utils.Browser,
        _ = laya.utils.Byte,
        c = laya.utils.Color,
        f = (laya.filters.ColorFilter, i.Config),
        d = laya.resource.Context,
        m = (laya.events.Event, laya.filters.Filter),
        p = laya.display.Graphics,
        g = laya.resource.HTMLCanvas,
        v = (laya.utils.HTMLChar, laya.resource.HTMLImage),
        x = laya.resource.HTMLSubImage,
        b = (laya.utils.Handler, laya.net.Loader, laya.maths.Matrix),
        y = laya.maths.Point,
        T = laya.maths.Rectangle,
        A = laya.renders.Render,
        E = (laya.renders.RenderContext, laya.renders.RenderSprite),
        S = laya.resource.Resource,
        w = laya.resource.ResourceManager,
        R = laya.utils.RunDriver,
        I = laya.display.Sprite,
        M = laya.display.Stage,
        C = laya.utils.Stat,
        L = laya.utils.StringKey,
        P = (laya.display.css.Style, laya.system.System),
        D = laya.display.Text,
        F = laya.resource.Texture,
        B = (laya.display.css.TransformInfo, laya.net.URL, laya.utils.Utils),
        N = laya.utils.VectorGraphManager;
    laya.utils.WordText;
    i.interface("laya.webgl.shapes.IShape"), i.interface("laya.webgl.submit.ISubmit"), i.interface("laya.webgl.text.ICharSegment"), i.interface("laya.webgl.canvas.save.ISaveData"), i.interface("laya.webgl.resource.IMergeAtlasBitmap"), i.interface("laya.filters.IFilterActionGL", "laya.filters.IFilterAction");
    var O = function() {
            function t() {}
            s(t, "laya.filters.webgl.FilterActionGL");
            var e = t.prototype;
            return i.imps(e, {
                "laya.filters.IFilterActionGL": !0
            }), e.setValue = function(t) {}, e.setValueMix = function(t) {}, e.apply3d = function(t, e, i, r, s) {
                return null
            }, e.apply = function(t) {
                return null
            }, a(0, e, "typeMix", function() {
                return 0
            }), t
        }(),
        V = function() {
            function t() {}
            return s(t, "laya.webgl.shader.ShaderValue"), t
        }(),
        U = function() {
            function t(t, e, r) {
                this._atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null, this._cells = null, this._failSize = new i, void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), this._cells = null, this._rowInfo = null, this._init(t, e), this._atlasID = r
            }
            var e, i;
            s(t, "laya.webgl.atlas.AtlasGrid");
            var r = t.prototype;
            return r.getAltasID = function() {
                return this._atlasID
            }, r.setAltasID = function(t) {
                t >= 0 && (this._atlasID = t)
            }, r.addTex = function(t, e, i) {
                var r = this._get(e, i);
                return 0 == r.ret ? r : (this._fill(r.x, r.y, e, i, t), this._texCount++, r)
            }, r._release = function() {
                null != this._cells && (this._cells.length = 0, this._cells = null), this._rowInfo && (this._rowInfo.length = 0, this._rowInfo = null)
            }, r._init = function(t, i) {
                if (this._width = t, this._height = i, this._release(), 0 == this._width) return !1;
                this._cells = new Uint8Array(this._width * this._height * 3), this._rowInfo = n(this._height);
                for (var r = 0; r < this._height; r++) this._rowInfo[r] = new e;
                return this._clear(), !0
            }, r._get = function(t, e) {
                var i = new H;
                if (t >= this._failSize.width && e >= this._failSize.height) return i;
                for (var r = -1, s = -1, a = this._width, n = this._height, h = this._cells, l = 0; l < n; l++)
                    if (!(this._rowInfo[l].spaceCount < t))
                        for (var o = 0; o < a;) {
                            var u = 3 * (l * a + o);
                            if (0 != h[u] || h[u + 1] < t || h[u + 2] < e) o += h[u + 1];
                            else {
                                r = o, s = l;
                                for (var _ = 0; _ < t; _++)
                                    if (h[3 * _ + u + 2] < e) {
                                        r = -1;
                                        break
                                    }
                                if (!(r < 0)) return i.ret = !0, i.x = r, i.y = s, i;
                                o += h[u + 1]
                            }
                        }
                return i
            }, r._fill = function(t, e, i, r, s) {
                var a = this._width,
                    n = this._height;
                this._check(t + i <= a && e + r <= n);
                for (var h = e; h < r + e; ++h) {
                    this._check(this._rowInfo[h].spaceCount >= i), this._rowInfo[h].spaceCount -= i;
                    for (var l = 0; l < i; l++) {
                        var o = 3 * (t + h * a + l);
                        this._check(0 == this._cells[o]), this._cells[o] = s, this._cells[o + 1] = i, this._cells[o + 2] = r
                    }
                }
                if (t > 0)
                    for (h = 0; h < r; ++h) {
                        var u = 0;
                        for (l = t - 1; l >= 0 && 0 == this._cells[3 * ((e + h) * a + l)]; --l, ++u);
                        for (l = u; l > 0; --l) this._cells[3 * ((e + h) * a + t - l) + 1] = l, this._check(l > 0)
                    }
                if (e > 0)
                    for (l = t; l < t + i; ++l) {
                        for (u = 0, h = e - 1; h >= 0 && 0 == this._cells[3 * (l + h * a)]; --h, u++);
                        for (h = u; h > 0; --h) this._cells[3 * (l + (e - h) * a) + 2] = h, this._check(h > 0)
                    }
            }, r._check = function(t) {
                0 == t && console.log("xtexMerger 错误啦")
            }, r._clear = function() {
                this._texCount = 0;
                for (var t = 0; t < this._height; t++) this._rowInfo[t].spaceCount = this._width;
                for (var e = 0; e < this._height; e++)
                    for (var i = 0; i < this._width; i++) {
                        var r = 3 * (e * this._width + i);
                        this._cells[r] = 0, this._cells[r + 1] = this._width - i, this._cells[r + 2] = this._width - e
                    }
                this._failSize.width = this._width + 1, this._failSize.height = this._height + 1
            }, t.__init$ = function() {
                e = function() {
                    function t() {
                        this.spaceCount = 0
                    }
                    return s(t, ""), t
                }(), i = function() {
                    function t() {
                        this.width = 0, this.height = 0
                    }
                    return s(t, ""), t
                }()
            }, t
        }(),
        k = function() {
            function t(t, e, i, r) {
                this._currentAtlasCount = 0, this._maxAtlaserCount = 0, this._width = 0, this._height = 0, this._gridSize = 0, this._gridNumX = 0, this._gridNumY = 0, this._init = !1, this._curAtlasIndex = 0, this._setAtlasParam = !1, this._atlaserArray = null, this._needGC = !1, this._setAtlasParam = !0, this._width = t, this._height = e, this._gridSize = i, this._maxAtlaserCount = r, this._gridNumX = t / i, this._gridNumY = e / i, this._curAtlasIndex = 0, this._atlaserArray = []
            }
            s(t, "laya.webgl.atlas.AtlasResourceManager");
            var e = t.prototype;
            return e.setAtlasParam = function(e, i, r, s) {
                if (1 == this._setAtlasParam) return t._sid_ = 0, this._width = e, this._height = i, this._gridSize = r, this._maxAtlaserCount = s, this._gridNumX = e / r, this._gridNumY = i / r, this._curAtlasIndex = 0, this.freeAll(), !0;
                throw console.log("设置大图合集参数错误，只能在开始页面设置各种参数"), -1
            }, e.pushData = function(e) {
                var i = e.bitmap,
                    r = -1,
                    s = null,
                    a = 0,
                    n = 0,
                    h = 0;
                for (a = 0, n = this._atlaserArray.length; a < n && (h = (this._curAtlasIndex + a) % n, s = this._atlaserArray[h], -1 == (r = s.findBitmapIsExist(i))); a++);
                if (-1 != r) {
                    var l = s.InAtlasWebGLImagesOffsetValue[r];
                    return m = l[0], p = l[1], s.addToAtlas(e, m, p), !0
                }
                this._setAtlasParam = !1;
                for (var o = Math.ceil((e.bitmap.width + 2) / this._gridSize), u = Math.ceil((e.bitmap.height + 2) / this._gridSize), _ = !1, c = 0; c < 2; c++) {
                    var f = this._maxAtlaserCount;
                    for (a = 0; a < f; a++) {
                        h = (this._curAtlasIndex + a) % f, this._atlaserArray.length - 1 >= h || this._atlaserArray.push(new Rt(this._gridNumX, this._gridNumY, this._width, this._height, t._sid_++));
                        var d = this._atlaserArray[h],
                            m = 0,
                            p = 0,
                            g = d.addTex(1, o, u);
                        if (g.ret) {
                            m = g.x * this._gridSize + 1, p = g.y * this._gridSize + 1, i.lock = !0, d.addToAtlasTexture(i, m, p), d.addToAtlas(e, m, p), _ = !0, this._curAtlasIndex = h;
                            break
                        }
                    }
                    if (_) break;
                    this._atlaserArray.push(new Rt(this._gridNumX, this._gridNumY, this._width, this._height, t._sid_++)), this._needGC = !0, this.garbageCollection(), this._curAtlasIndex = this._atlaserArray.length - 1
                }
                return _ || console.log(">>>AtlasManager pushData error"), _
            }, e.addToAtlas = function(t) {
                laya.webgl.atlas.AtlasResourceManager.instance.pushData(t)
            }, e.garbageCollection = function() {
                if (!0 === this._needGC) {
                    for (var t = this._atlaserArray.length - this._maxAtlaserCount, e = 0; e < t; e++) this._atlaserArray[e].dispose(), console.log("AtlasResourceManager:Dispose the inner Atlas。");
                    console.log(">>>>altas garbageCollection =" + t), this._atlaserArray.splice(0, t), this._needGC = !1
                }
                return !0
            }, e.freeAll = function() {
                for (var t = 0, e = this._atlaserArray.length; t < e; t++) this._atlaserArray[t].dispose();
                this._atlaserArray.length = 0, this._curAtlasIndex = 0
            }, e.getAtlaserCount = function() {
                return this._atlaserArray.length
            }, e.getAtlaserByIndex = function(t) {
                return this._atlaserArray[t]
            }, a(1, t, "instance", function() {
                return t._Instance || (t._Instance = new t(laya.webgl.atlas.AtlasResourceManager.atlasTextureWidth, laya.webgl.atlas.AtlasResourceManager.atlasTextureHeight, 16, laya.webgl.atlas.AtlasResourceManager.maxTextureCount)), t._Instance
            }), a(1, t, "enabled", function() {
                return f.atlasEnable
            }), a(1, t, "atlasLimitWidth", function() {
                return t._atlasLimitWidth
            }, function(e) {
                t._atlasLimitWidth = e
            }), a(1, t, "atlasLimitHeight", function() {
                return t._atlasLimitHeight
            }, function(e) {
                t._atlasLimitHeight = e
            }), t._enable = function() {
                f.atlasEnable = !0
            }, t._disable = function() {
                f.atlasEnable = !1
            }, t.__init__ = function() {
                t.atlasTextureWidth = 2048, t.atlasTextureHeight = 2048, t.maxTextureCount = 6, t.atlasLimitWidth = 512, t.atlasLimitHeight = 512
            }, t._atlasLimitWidth = 0, t._atlasLimitHeight = 0, t.gridSize = 16, t.atlasTextureWidth = 0, t.atlasTextureHeight = 0, t.maxTextureCount = 0, t._atlasRestore = 0, t.BOARDER_TYPE_NO = 0, t.BOARDER_TYPE_RIGHT = 1, t.BOARDER_TYPE_LEFT = 2, t.BOARDER_TYPE_BOTTOM = 4, t.BOARDER_TYPE_TOP = 8, t.BOARDER_TYPE_ALL = 15, t._sid_ = 0, t._Instance = null, t
        }(),
        H = function() {
            function t() {
                this.x = 0, this.y = 0, this.ret = !1, this.ret = !1, this.x = 0, this.y = 0
            }
            return s(t, "laya.webgl.atlas.MergeFillInfo"), t
        }(),
        G = function() {
            function t() {}
            return s(t, "laya.webgl.canvas.BlendMode"), t._init_ = function(e) {
                t.fns = [t.BlendNormal, t.BlendAdd, t.BlendMultiply, t.BlendScreen, t.BlendOverlay, t.BlendLight, t.BlendMask, t.BlendDestinationOut], t.targetFns = [t.BlendNormalTarget, t.BlendAddTarget, t.BlendMultiplyTarget, t.BlendScreenTarget, t.BlendOverlayTarget, t.BlendLightTarget, t.BlendMask, t.BlendDestinationOut]
            }, t.BlendNormal = function(t) {
                t.blendFunc(1, 771)
            }, t.BlendAdd = function(t) {
                t.blendFunc(1, 772)
            }, t.BlendMultiply = function(t) {
                t.blendFunc(774, 771)
            }, t.BlendScreen = function(t) {
                t.blendFunc(1, 1)
            }, t.BlendOverlay = function(t) {
                t.blendFunc(1, 769)
            }, t.BlendLight = function(t) {
                t.blendFunc(1, 1)
            }, t.BlendNormalTarget = function(t) {
                t.blendFunc(1, 771)
            }, t.BlendAddTarget = function(t) {
                t.blendFunc(1, 772)
            }, t.BlendMultiplyTarget = function(t) {
                t.blendFunc(774, 771)
            }, t.BlendScreenTarget = function(t) {
                t.blendFunc(1, 1)
            }, t.BlendOverlayTarget = function(t) {
                t.blendFunc(1, 769)
            }, t.BlendLightTarget = function(t) {
                t.blendFunc(1, 1)
            }, t.BlendMask = function(t) {
                t.blendFunc(0, 770)
            }, t.BlendDestinationOut = function(t) {
                t.blendFunc(0, 0)
            }, t.activeBlendFunction = null, t.NAMES = ["normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out"], t.TOINT = {
                normal: 0,
                add: 1,
                multiply: 2,
                screen: 3,
                lighter: 1,
                overlay: 4,
                light: 5,
                mask: 6,
                "destination-out": 7
            }, t.NORMAL = "normal", t.ADD = "add", t.MULTIPLY = "multiply", t.SCREEN = "screen", t.LIGHT = "light", t.OVERLAY = "overlay", t.DESTINATIONOUT = "destination-out", t.fns = [], t.targetFns = [], t
        }(),
        W = function() {
            function t(t) {
                this._color = c.create("black"), this.setValue(t)
            }
            s(t, "laya.webgl.canvas.DrawStyle");
            var e = t.prototype;
            return e.setValue = function(t) {
                if (t) {
                    if ("string" == typeof t) return void(this._color = c.create(t));
                    if (t instanceof laya.utils.Color) return void(this._color = t)
                }
            }, e.reset = function() {
                this._color = c.create("black")
            }, e.equal = function(t) {
                return "string" == typeof t ? this._color.strColor === t : t instanceof laya.utils.Color && this._color.numColor === t.numColor
            }, e.toColorStr = function() {
                return this._color.strColor
            }, t.create = function(e) {
                if (e) {
                    var i;
                    if ("string" == typeof e ? i = c.create(e) : e instanceof laya.utils.Color && (i = e), i) return i._drawStyle || (i._drawStyle = new t(e))
                }
                return laya.webgl.canvas.DrawStyle.DEFAULT
            }, r(t, ["DEFAULT", function() {
                return this.DEFAULT = new t("#000000")
            }]), t
        }(),
        z = function() {
            function t() {
                this._x = 0, this._y = 0, this.dirty = !1, this.offset = 0, this.count = 0, this.geoStart = 0, this.tempArray = [], this.closePath = !1, this.geomatrys = [];
                bt.mainContext;
                this.ib = $t.create(35048), this.vb = Jt.create(5)
            }
            s(t, "laya.webgl.canvas.Path");
            var e = t.prototype;
            return e.addPoint = function(t, e) {
                this.tempArray.push(t, e)
            }, e.getEndPointX = function() {
                return this.tempArray[this.tempArray.length - 2]
            }, e.getEndPointY = function() {
                return this.tempArray[this.tempArray.length - 1]
            }, e.polygon = function(t, e, i, r, s, a) {
                var n;
                return this.geomatrys.push(this._curGeomatry = n = new Lt(t, e, i, r, s, a)), r || (n.fill = !1), void 0 == a && (n.borderWidth = 0), n
            }, e.setGeomtry = function(t) {
                this.geomatrys.push(this._curGeomatry = t)
            }, e.drawLine = function(t, e, i, r, s) {
                var a;
                return this.closePath ? this.geomatrys.push(this._curGeomatry = a = new Ct(t, e, i, r, s)) : this.geomatrys.push(this._curGeomatry = a = new Mt(t, e, i, r, s)), a.fill = !1, a
            }, e.update = function() {
                var t = this.ib._byteLength,
                    e = this.geomatrys.length;
                this.offset = t;
                for (var i = this.geoStart; i < e; i++) this.geomatrys[i].getData(this.ib, this.vb, this.vb._byteLength / 20);
                this.geoStart = e, this.count = (this.ib._byteLength - t) / mt.BYTES_PIDX
            }, e.reset = function() {
                this.vb.clear(), this.ib.clear(), this.offset = this.count = this.geoStart = 0, this.geomatrys.length = 0
            }, e.recover = function() {
                this._curGeomatry = null, this.vb.destory(), this.vb = null, this.ib.destory(), this.ib = null
            }, t
        }(),
        Y = function() {
            function t() {}
            s(t, "laya.webgl.canvas.save.SaveBase");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), e.isSaveMark = function() {
                return !1
            }, e.restore = function(e) {
                this._dataObj[this._valueName] = this._value, t._cache[t._cache._length++] = this, this._newSubmit && (e._curSubmit = at.RENDERBASE, e._renderKey = 0)
            }, t._createArray = function() {
                var t = [];
                return t._length = 0, t
            }, t._init = function() {
                var e = t._namemap = {};
                return e[1] = "ALPHA", e[2] = "fillStyle", e[8] = "font", e[256] = "lineWidth", e[512] = "strokeStyle", e[8192] = "_mergeID", e[1024] = e[2048] = e[4096] = [], e[16384] = "textBaseline", e[32768] = "textAlign", e[65536] = "_nBlendType", e[1048576] = "shader", e[2097152] = "filters", e
            }, t.save = function(e, i, r, s) {
                if ((e._saveMark._saveuse & i) !== i) {
                    e._saveMark._saveuse |= i;
                    var a = t._cache,
                        n = a._length > 0 ? a[--a._length] : new t;
                    n._value = r[n._valueName = t._namemap[i]], n._dataObj = r, n._newSubmit = s;
                    var h = e._save;
                    h[h._length++] = n
                }
            }, t._cache = laya.webgl.canvas.save.SaveBase._createArray(), t._namemap = t._init(), t
        }(),
        X = function() {
            function t() {
                this._clipRect = new T
            }
            s(t, "laya.webgl.canvas.save.SaveClipRect");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), e.isSaveMark = function() {
                return !1
            }, e.restore = function(e) {
                e._clipRect = this._clipSaveRect, t._cache[t._cache._length++] = this, this._submitScissor.submitLength = e._submits._length - this._submitScissor.submitIndex, e._curSubmit = at.RENDERBASE, e._renderKey = 0
            }, t.save = function(e, i) {
                if (131072 != (131072 & e._saveMark._saveuse)) {
                    e._saveMark._saveuse |= 131072;
                    var r = t._cache,
                        s = r._length > 0 ? r[--r._length] : new t;
                    s._clipSaveRect = e._clipRect, e._clipRect = s._clipRect.copyFrom(e._clipRect), s._submitScissor = i;
                    var a = e._save;
                    a[a._length++] = s
                }
            }, r(t, ["_cache", function() {
                return this._cache = Y._createArray()
            }]), t
        }(),
        K = function() {
            function t() {
                this._contextX = 0, this._contextY = 0, this._clipRect = new T, this._rect = new T, this._matrix = new b
            }
            s(t, "laya.webgl.canvas.save.SaveClipRectStencil");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), e.isSaveMark = function() {
                return !1
            }, e.restore = function(e) {
                ut.restore(e, this._rect, this._saveMatrix, this._contextX, this._contextY), e._clipRect = this._clipSaveRect, e._curMat = this._saveMatrix, e._x = this._contextX, e._y = this._contextY, t._cache[t._cache._length++] = this, e._curSubmit = at.RENDERBASE
            }, t.save = function(e, i, r, s, a, n, h, l, o, u) {
                if (262144 != (262144 & e._saveMark._saveuse)) {
                    e._saveMark._saveuse |= 262144;
                    var _ = t._cache,
                        c = _._length > 0 ? _[--_._length] : new t;
                    c._clipSaveRect = e._clipRect, c._clipRect.setTo(h, l, o, u), e._clipRect = c._clipRect, c._rect.x = r, c._rect.y = s, c._rect.width = a, c._rect.height = n, c._contextX = e._x, c._contextY = e._y, c._saveMatrix = e._curMat, e._curMat.copyTo(c._matrix), e._curMat = c._matrix, c._submitStencil = i;
                    var f = e._save;
                    f[f._length++] = c
                }
            }, r(t, ["_cache", function() {
                return this._cache = Y._createArray()
            }]), t
        }(),
        Q = function() {
            function t() {
                this._saveuse = 0
            }
            s(t, "laya.webgl.canvas.save.SaveMark");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), e.isSaveMark = function() {
                return !0
            }, e.restore = function(e) {
                e._saveMark = this._preSaveMark, t._no[t._no._length++] = this
            }, t.Create = function(e) {
                var i = t._no,
                    r = i._length > 0 ? i[--i._length] : new t;
                return r._saveuse = 0, r._preSaveMark = e._saveMark, e._saveMark = r, r
            }, r(t, ["_no", function() {
                return this._no = Y._createArray()
            }]), t
        }(),
        Z = function() {
            function t() {
                this._matrix = new b
            }
            s(t, "laya.webgl.canvas.save.SaveTransform");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), e.isSaveMark = function() {
                return !1
            }, e.restore = function(e) {
                e._curMat = this._savematrix, t._no[t._no._length++] = this
            }, t.save = function(e) {
                var i = e._saveMark;
                if (2048 != (2048 & i._saveuse)) {
                    i._saveuse |= 2048;
                    var r = t._no,
                        s = r._length > 0 ? r[--r._length] : new t;
                    s._savematrix = e._curMat, e._curMat = e._curMat.copyTo(s._matrix);
                    var a = e._save;
                    a[a._length++] = s
                }
            }, r(t, ["_no", function() {
                return this._no = Y._createArray()
            }]), t
        }(),
        q = function() {
            function t() {}
            s(t, "laya.webgl.canvas.save.SaveTranslate");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), e.isSaveMark = function() {
                return !1
            }, e.restore = function(e) {
                e._curMat;
                e._x = this._x, e._y = this._y, t._no[t._no._length++] = this
            }, t.save = function(e) {
                var i = t._no,
                    r = i._length > 0 ? i[--i._length] : new t;
                r._x = e._x, r._y = e._y;
                var s = e._save;
                s[s._length++] = r
            }, r(t, ["_no", function() {
                return this._no = Y._createArray()
            }]), t
        }(),
        j = function() {
            function t() {
                this.target = null, this.repaint = !1, this._width = NaN, this._height = NaN, this._sp = null, this._clipRect = new T
            }
            s(t, "laya.webgl.resource.RenderTargetMAX");
            var e = t.prototype;
            return e.setSP = function(t) {
                this._sp = t
            }, e.size = function(t, e) {
                var r = this;
                this._width !== t || this._height !== e ? (this.repaint = !0, this._width = t, this._height = e, this.target ? this.target.size(t, e) : this.target = Nt.create(t, e), this.target.hasListener("recovered") || this.target.on("recovered", this, function(t) {
                    i.timer.callLater(r._sp, r._sp.repaint)
                })) : this.target.size(t, e)
            }, e._flushToTarget = function(t, e) {
                if (!e._destroy) {
                    var i = vt.worldScissorTest,
                        r = vt.worldClipRect;
                    vt.worldClipRect = this._clipRect, this._clipRect.x = this._clipRect.y = 0, this._clipRect.width = this._width, this._clipRect.height = this._height, vt.worldScissorTest = !1, bt.mainContext.disable(3089);
                    var s = vt.worldAlpha,
                        a = vt.worldMatrix4,
                        n = vt.worldMatrix,
                        h = vt.worldFilters,
                        l = vt.worldShaderDefines;
                    if (vt.worldMatrix = b.EMPTY, vt.restoreTempArray(), vt.worldMatrix4 = vt.TEMPMAT4_ARRAY, vt.worldAlpha = 1, vt.worldFilters = null, vt.worldShaderDefines = null, Bt.activeShader = null, e.start(), f.showCanvasMark ? e.clear(0, 1, 0, .3) : e.clear(0, 0, 0, 0), t.flush(), e.end(), Bt.activeShader = null, vt.worldAlpha = s, vt.worldMatrix4 = a, vt.worldMatrix = n, vt.worldFilters = h, vt.worldShaderDefines = l, vt.worldScissorTest = i, i) {
                        var o = vt.height - r.y - r.height;
                        bt.mainContext.scissor(r.x, o, r.width, r.height), bt.mainContext.enable(3089)
                    }
                    vt.worldClipRect = r
                }
            }, e.flush = function(t) {
                this.repaint && (this._flushToTarget(t, this.target), this.repaint = !1)
            }, e.drawTo = function(t, e, i, r, s) {
                t.drawTexture(this.target.getTexture(), e, i, r, s, 0, 0)
            }, e.destroy = function() {
                this.target && (this.target.destroy(), this.target = null, this._sp = null)
            }, t
        }(),
        $ = function() {
            function t() {
                this.ALPHA = 1, this.shaderType = 0, this.defines = new It
            }
            s(t, "laya.webgl.shader.d2.Shader2D");
            return t.prototype.destroy = function() {
                this.defines = null, this.filters = null, this.glTexture = null, this.strokeStyle = null, this.fillStyle = null
            }, t.__init__ = function() {
                Qt.addInclude("parts/ColorFilter_ps_uniform.glsl", "uniform vec4 colorAlpha;\nuniform mat4 colorMat;"), Qt.addInclude("parts/ColorFilter_ps_logic.glsl", "mat4 alphaMat =colorMat;\n\nalphaMat[0][3] *= gl_FragColor.a;\nalphaMat[1][3] *= gl_FragColor.a;\nalphaMat[2][3] *= gl_FragColor.a;\n\ngl_FragColor = gl_FragColor * alphaMat;\ngl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n"), Qt.addInclude("parts/GlowFilter_ps_uniform.glsl", "uniform vec4 u_color;\nuniform float u_strength;\nuniform float u_blurX;\nuniform float u_blurY;\nuniform float u_offsetX;\nuniform float u_offsetY;\nuniform float u_textW;\nuniform float u_textH;"), Qt.addInclude("parts/GlowFilter_ps_logic.glsl", "const float c_IterationTime = 10.0;\nfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\nvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\nvec2 vec2FilterDir = vec2(-(u_offsetX)/u_textW,-(u_offsetY)/u_textH);\nvec2 vec2FilterOff = vec2(u_blurX/u_textW/c_IterationTime * 2.0,u_blurY/u_textH/c_IterationTime * 2.0);\nfloat maxNum = u_blurX * u_blurY;\nvec2 vec2Off = vec2(0.0,0.0);\nfloat floatOff = c_IterationTime/2.0;\nfor(float i = 0.0;i<=c_IterationTime; ++i){\n\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\tvec4Color += texture2D(texture, v_texcoord + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t}\n}\ngl_FragColor = vec4(u_color.rgb,vec4Color.a * u_strength);\ngl_FragColor.rgb *= gl_FragColor.a;"), Qt.addInclude("parts/BlurFilter_ps_logic.glsl", "gl_FragColor =   blur();\ngl_FragColor.w*=alpha;"), Qt.addInclude("parts/BlurFilter_ps_uniform.glsl", "uniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\n//float sigma=strength/3.0;//3σ以外影响很小。即当σ=1的时候，半径为3\n//float sig2 = sigma*sigma;\n//float _2sig2 = 2.0*sig2;\n//return 1.0/(2*PI*sig2)*exp(-(x*x+y*y)/_2sig2)\n//float gauss1 = 1.0/(2.0*PI*sig2);\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoord-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}"), Qt.addInclude("parts/ColorAdd_ps_uniform.glsl", "uniform vec4 colorAdd;\n"), Qt.addInclude("parts/ColorAdd_ps_logic.glsl", "gl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\ngl_FragColor.xyz *= colorAdd.a;");
                var t, e;
                t = "attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}", e = 'precision mediump float;\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec4 color= texture2D(texture, v_texcoord);\n   color.a*=alpha;\n   color.rgb*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}', Qt.preCompile2D(0, 1, t, e, null), t = "attribute vec4 position;\nuniform vec2 size;\nuniform mat4 mmat;\nvoid main() {\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n}", e = 'precision mediump float;\nuniform vec4 color;\nuniform float alpha;\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\nvoid main() {\n\tvec4 a = vec4(color.r, color.g, color.b, color.a);\n\ta.w = alpha;\n\ta.xyz *= alpha;\n\tgl_FragColor = a;\n\t#include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n}', Qt.preCompile2D(0, 2, t, e, null), t = "attribute vec4 position;\nattribute vec3 a_color;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nuniform vec2 u_pos;\nuniform vec2 size;\nvarying vec3 color;\nvoid main(){\n  vec4 tPos = vec4(position.x + u_pos.x,position.y + u_pos.y,position.z,position.w);\n  vec4 pos=mmat*u_mmat2*tPos;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  color=a_color;\n}", e = "precision mediump float;\n//precision mediump float;\nvarying vec3 color;\nuniform float alpha;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor=vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=alpha;\n}", Qt.preCompile2D(0, 4, t, e, null), t = "attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}", e = '#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\nuniform vec4 u_TexRange;\nuniform vec2 u_offset;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec2 newTexCoord;\n   newTexCoord.x = mod(u_offset.x + v_texcoord.x,u_TexRange.y) + u_TexRange.x;\n   newTexCoord.y = mod(u_offset.y + v_texcoord.y,u_TexRange.w) + u_TexRange.z;\n   vec4 color= texture2D(texture, newTexCoord);\n   color.a*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}', Qt.preCompile2D(0, 256, t, e, null), t = "attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}", e = "precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}", Qt.preCompile2D(0, 512, t, e, null)
            }, t
        }(),
        J = function() {
            function t(t, e, i) {
                this._value = 0, this._name2int = t, this._int2name = e, this._int2nameMap = i
            }
            s(t, "laya.webgl.shader.ShaderDefines");
            var e = t.prototype;
            return e.add = function(t) {
                return "string" == typeof t && (t = this._name2int[t]), this._value |= t, this._value
            }, e.addInt = function(t) {
                return this._value |= t, this._value
            }, e.remove = function(t) {
                return "string" == typeof t && (t = this._name2int[t]), this._value &= ~t, this._value
            }, e.isDefine = function(t) {
                return (this._value & t) === t
            }, e.getValue = function() {
                return this._value
            }, e.setValue = function(t) {
                this._value = t
            }, e.toNameDic = function() {
                var e = this._int2nameMap[this._value];
                return e || t._toText(this._value, this._int2name, this._int2nameMap)
            }, t._reg = function(t, e, i, r) {
                i[t] = e, r[e] = t
            }, t._toText = function(t, e, i) {
                var r = i[t];
                if (r) return r;
                for (var s = {}, a = 1, n = 0; n < 32 && !((a = 1 << n) > t); n++)
                    if (t & a) {
                        var h = e[a];
                        h && (s[h] = "")
                    }
                return i[t] = s, s
            }, t._toInt = function(t, e) {
                for (var i = t.split("."), r = 0, s = 0, a = i.length; s < a; s++) {
                    var n = e[i[s]];
                    if (!n) throw new Error("Defines to int err:" + t + "/" + i[s]);
                    r |= n
                }
                return r
            }, t
        }(),
        tt = function() {
            function t() {
                this.mVBBuffer = null, this.mIBBuffer = null, this.mVBData = null, this.mIBData = null, this.mEleNum = 0, this.mTexture = null, this.transform = null, this._vs = null, this._ps = null, this._indexStart = -1, this._verticles = null, this._uvs = null, this._tempMatrix = new b
            }
            s(t, "laya.webgl.shader.d2.skinAnishader.SkinMesh");
            var e = t.prototype;
            return e.init = function(e, i, r) {
                if (i) this._vs = i;
                else {
                    this._vs = [];
                    var s = e.width,
                        a = e.height;
                    this._vs.push(0, 0, 0, 0, 1, 1, 1, 1), this._vs.push(s, 0, 1, 0, 1, 1, 1, 1), this._vs.push(s, a, 1, 1, 1, 1, 1, 1), this._vs.push(0, a, 0, 1, 1, 1, 1, 1)
                }
                r ? this._ps = r : (t._defaultPS || (t._defaultPS = []).push(0, 1, 3, 3, 1, 2), this._ps = t._defaultPS), this.mVBData = new Float32Array(this._vs), this.mIBData = new Uint16Array(this._ps.length), this.mIBData.start = -1, this.mEleNum = this._ps.length, this.mTexture = e
            }, e.init2 = function(t, e, i, r, s) {
                this.transform && (this.transform = null), i ? this._ps = i : (this._ps = [], this._ps.push(0, 1, 3, 3, 1, 2)), this._verticles = r, this._uvs = s, this.mEleNum = this._ps.length, this.mTexture = t, (A.isConchNode || A.isConchApp) && (this._initMyData(), this.mVBData = new Float32Array(this._vs))
            }, e._initMyData = function() {
                var e = 0,
                    i = 0,
                    r = 4 * this._verticles.length;
                this._vs = t._tempVS;
                var s = !1;
                if (A.isConchNode || A.isConchApp ? (this._vs.length = r, s = !0) : this._vs.length < r && (this._vs.length = r, s = !0), t._tVSLen = r, s)
                    for (; e < r;) this._vs[e] = this._verticles[i], this._vs[e + 1] = this._verticles[i + 1], this._vs[e + 2] = this._uvs[i], this._vs[e + 3] = this._uvs[i + 1], this._vs[e + 4] = 1, this._vs[e + 5] = 1, this._vs[e + 6] = 1, this._vs[e + 7] = 1, e += 8, i += 2;
                else
                    for (; e < r;) this._vs[e] = this._verticles[i], this._vs[e + 1] = this._verticles[i + 1], this._vs[e + 2] = this._uvs[i], this._vs[e + 3] = this._uvs[i + 1], e += 8, i += 2
            }, e.getData2 = function(e, i, r) {
                this.mVBBuffer = e, this.mIBBuffer = i, this._initMyData(), e.appendEx2(this._vs, Float32Array, t._tVSLen, 4), this._indexStart = i._byteLength;
                var s;
                (s = t._tempIB).length < this._ps.length && (s.length = this._ps.length);
                for (var a = 0, n = this._ps.length; a < n; a++) s[a] = this._ps[a] + r;
                i.appendEx2(s, Uint16Array, this._ps.length, 2)
            }, e.getData = function(t, e, i) {
                if (this.mVBBuffer = t, this.mIBBuffer = e, t.append(this.mVBData), this._indexStart = e._byteLength, this.mIBData.start != i) {
                    for (var r = 0, s = this._ps.length; r < s; r++) this.mIBData[r] = this._ps[r] + i;
                    this.mIBData.start = i
                }
                e.append(this.mIBData)
            }, e.render = function(t, e, i) {
                if (A.isWebGL && this.mTexture) {
                    t._renderKey = 0, t._shader2D.glTexture = null, et.getInstance().addSkinMesh(this);
                    var r = at.createShape(t, this.mIBBuffer, this.mVBBuffer, this.mEleNum, this._indexStart, Et.create(512, 0));
                    this.transform || (this.transform = b.EMPTY), this.transform.translate(e, i), b.mul(this.transform, t._curMat, this._tempMatrix), this.transform.translate(-e, -i);
                    var s = r.shaderValue,
                        a = s.u_mmat2 || vt.getMatrArray();
                    vt.mat2MatArray(this._tempMatrix, a), s.textureHost = this.mTexture, s.offsetX = 0, s.offsetY = 0, s.u_mmat2 = a, s.ALPHA = t._shader2D.ALPHA, t._submits[t._submits._length++] = r
                } else A.isConchApp && this.mTexture && (this.transform || (this.transform = b.EMPTY), t.setSkinMesh && t.setSkinMesh(e, i, this._ps, this.mVBData, this.mEleNum, 0, this.mTexture, this.transform))
            }, t._tempVS = [], t._tempIB = [], t._defaultPS = null, t._tVSLen = 0, t
        }(),
        et = function() {
            function t() {
                this.ib = null, this.vb = null;
                bt.mainContext;
                this.ib = $t.create(35048), this.vb = Jt.create(8)
            }
            s(t, "laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");
            var e = t.prototype;
            return e.addSkinMesh = function(t) {
                t.getData2(this.vb, this.ib, this.vb._byteLength / 32)
            }, e.reset = function() {
                this.vb.clear(), this.ib.clear()
            }, t.getInstance = function() {
                return t.instance = t.instance || new t
            }, t.instance = null, t
        }(),
        it = function() {
            function t(t, e, i, r, s, a, n, h, l) {
                this.r0 = 0, this.fill = !0, this.r1 = Math.PI / 2, void 0 === l && (l = 0), this.x = t, this.y = e, this.width = i, this.height = r, this.edges = s, this.color = a, this.borderWidth = n, this.borderColor = h
            }
            s(t, "laya.webgl.shapes.BasePoly");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.shapes.IShape": !0
            }), e.getData = function(t, e, i) {}, e.rebuild = function(t) {}, e.setMatrix = function(t) {}, e.needUpdate = function(t) {
                return !0
            }, e.sector = function(t, e, i) {
                var r = this.x,
                    s = this.y,
                    a = this.edges,
                    n = (this.r1 - this.r0) / a,
                    h = this.width,
                    l = this.height,
                    o = this.color,
                    u = (o >> 16 & 255) / 255,
                    _ = (o >> 8 & 255) / 255,
                    c = (255 & o) / 255;
                t.push(r, s, u, _, c);
                for (var f = 0; f < a + 1; f++) t.push(r + Math.sin(n * f + this.r0) * h, s + Math.cos(n * f + this.r0) * l), t.push(u, _, c);
                for (f = 0; f < a; f++) e.push(i, i + f + 1, i + f + 2)
            }, e.createLine2 = function(t, e, i, r, s, a) {
                var n, h, l, o, u, _, c, f, d, m, p, g, v, x, b, y, T, A, E, S, w = t.concat(),
                    R = s,
                    I = this.borderColor,
                    M = (I >> 16 & 255) / 255,
                    C = (I >> 8 & 255) / 255,
                    L = (255 & I) / 255,
                    P = w.length / 2,
                    D = r,
                    F = i / 2;
                l = w[0], o = w[1], m = l - (u = w[2]), d = (d = -(o - (_ = w[3]))) / (S = Math.sqrt(d * d + m * m)) * F, m = m / S * F, R.push(l - d + this.x, o - m + this.y, M, C, L, l + d + this.x, o + m + this.y, M, C, L);
                for (var B = 1; B < P - 1; B++) l = w[2 * (B - 1)], o = w[2 * (B - 1) + 1], u = w[2 * B], _ = w[2 * B + 1], c = w[2 * (B + 1)], f = w[2 * (B + 1) + 1], m = l - u, g = u - c, b = (-(d = (d = -(o - _)) / (S = Math.sqrt(d * d + m * m)) * F) + l) * (-(m = m / S * F) + _) - (-d + u) * (-m + o), A = (-(p = (p = -(_ - f)) / (S = Math.sqrt(p * p + g * g)) * F) + c) * (-(g = g / S * F) + _) - (-p + u) * (-g + f), E = (v = -m + o - (-m + _)) * (T = -p + u - (-p + c)) - (y = -g + f - (-g + _)) * (x = -d + u - (-d + l)), Math.abs(E) < .1 ? (E += 10.1, R.push(u - d + this.x, _ - m + this.y, M, C, L, u + d + this.x, _ + m + this.y, M, C, L)) : (((n = (x * A - T * b) / E) - u) * (n - u) + ((h = (y * b - v * A) / E) - _) + (h - _), R.push(n + this.x, h + this.y, M, C, L, u - (n - u) + this.x, _ - (h - _) + this.y, M, C, L));
                l = w[w.length - 4], o = w[w.length - 3], m = l - (u = w[w.length - 2]), d = (d = -(o - (_ = w[w.length - 1]))) / (S = Math.sqrt(d * d + m * m)) * F, m = m / S * F, R.push(u - d + this.x, _ - m + this.y, M, C, L, u + d + this.x, _ + m + this.y, M, C, L);
                var N = a;
                for (B = 1; B < N; B++) e.push(D + 2 * (B - 1), D + 2 * (B - 1) + 1, D + 2 * B + 1, D + 2 * B + 1, D + 2 * B, D + 2 * (B - 1));
                return R
            }, e.createLine = function(t, e, i, r) {
                var s = t.concat(),
                    a = t,
                    n = this.borderColor,
                    h = (n >> 16 & 255) / 255,
                    l = (n >> 8 & 255) / 255,
                    o = (255 & n) / 255;
                s.splice(0, 5);
                var u, _, c, f, d, m, p, g, v, x, b, y, T, A, E, S, w, R, I, M, C = s.length / 5,
                    L = r,
                    P = i / 2;
                c = s[0], f = s[1], x = c - (d = s[5]), v = (v = -(f - (m = s[6]))) / (M = Math.sqrt(v * v + x * x)) * P, x = x / M * P, a.push(c - v, f - x, h, l, o, c + v, f + x, h, l, o);
                for (var D = 1; D < C - 1; D++) c = s[5 * (D - 1)], f = s[5 * (D - 1) + 1], d = s[5 * D], m = s[5 * D + 1], p = s[5 * (D + 1)], g = s[5 * (D + 1) + 1], x = c - d, y = d - p, E = (-(v = (v = -(f - m)) / (M = Math.sqrt(v * v + x * x)) * P) + c) * (-(x = x / M * P) + m) - (-v + d) * (-x + f), R = (-(b = (b = -(m - g)) / (M = Math.sqrt(b * b + y * y)) * P) + p) * (-(y = y / M * P) + m) - (-b + d) * (-y + g), I = (T = -x + f - (-x + m)) * (w = -b + d - (-b + p)) - (S = -y + g - (-y + m)) * (A = -v + d - (-v + c)), Math.abs(I) < .1 ? (I += 10.1, a.push(d - v, m - x, h, l, o, d + v, m + x, h, l, o)) : (((u = (A * R - w * E) / I) - d) * (u - d) + ((_ = (S * E - T * R) / I) - m) + (_ - m), a.push(u, _, h, l, o, d - (u - d), m - (_ - m), h, l, o));
                c = s[s.length - 10], f = s[s.length - 9], x = c - (d = s[s.length - 5]), v = (v = -(f - (m = s[s.length - 4]))) / (M = Math.sqrt(v * v + x * x)) * P, x = x / M * P, a.push(d - v, m - x, h, l, o, d + v, m + x, h, l, o);
                var F = this.edges + 1;
                for (D = 1; D < F; D++) e.push(L + 2 * (D - 1), L + 2 * (D - 1) + 1, L + 2 * D + 1, L + 2 * D + 1, L + 2 * D, L + 2 * (D - 1));
                return a
            }, e.createLoopLine = function(t, e, i, r, s, a) {
                var n = t.concat(),
                    h = s || t,
                    l = this.borderColor,
                    o = (l >> 16 & 255) / 255,
                    u = (l >> 8 & 255) / 255,
                    _ = (255 & l) / 255;
                n.splice(0, 5);
                var c = [n[0], n[1]],
                    f = [n[n.length - 5], n[n.length - 4]],
                    d = f[0] + .5 * (c[0] - f[0]),
                    m = f[1] + .5 * (c[1] - f[1]);
                n.unshift(d, m, 0, 0, 0), n.push(d, m, 0, 0, 0);
                var p, g, v, x, b, y, T, A, E, S, w, R, I, M, C, L, P, D, F, B, N = n.length / 5,
                    O = r,
                    V = i / 2;
                v = n[0], x = n[1], S = v - (b = n[5]), E = (E = -(x - (y = n[6]))) / (B = Math.sqrt(E * E + S * S)) * V, S = S / B * V, h.push(v - E, x - S, o, u, _, v + E, x + S, o, u, _);
                for (var U = 1; U < N - 1; U++) v = n[5 * (U - 1)], x = n[5 * (U - 1) + 1], b = n[5 * U], y = n[5 * U + 1], T = n[5 * (U + 1)], A = n[5 * (U + 1) + 1], S = v - b, R = b - T, C = (-(E = (E = -(x - y)) / (B = Math.sqrt(E * E + S * S)) * V) + v) * (-(S = S / B * V) + y) - (-E + b) * (-S + x), D = (-(w = (w = -(y - A)) / (B = Math.sqrt(w * w + R * R)) * V) + T) * (-(R = R / B * V) + y) - (-w + b) * (-R + A), F = (I = -S + x - (-S + y)) * (P = -w + b - (-w + T)) - (L = -R + A - (-R + y)) * (M = -E + b - (-E + v)), Math.abs(F) < .1 ? (F += 10.1, h.push(b - E, y - S, o, u, _, b + E, y + S, o, u, _)) : (((p = (M * D - P * C) / F) - b) * (p - b) + ((g = (L * C - I * D) / F) - y) + (g - y), h.push(p, g, o, u, _, b - (p - b), y - (g - y), o, u, _));
                a && (e = a);
                var k = this.edges + 1;
                for (U = 1; U < k; U++) e.push(O + 2 * (U - 1), O + 2 * (U - 1) + 1, O + 2 * U + 1, O + 2 * U + 1, O + 2 * U, O + 2 * (U - 1));
                return e.push(O + 2 * (U - 1), O + 2 * (U - 1) + 1, O + 1, O + 1, O, O + 2 * (U - 1)), h
            }, t
        }(),
        rt = function() {
            function t() {}
            return s(t, "laya.webgl.shapes.Earcut"), t.earcut = function(e, i, r) {
                r = r || 2;
                var s = i && i.length,
                    a = s ? i[0] * r : e.length,
                    n = t.linkedList(e, 0, a, r, !0),
                    h = [];
                if (!n) return h;
                var l, o, u, _, c, f, d;
                if (s && (n = t.eliminateHoles(e, i, n, r)), e.length > 80 * r) {
                    l = u = e[0], o = _ = e[1];
                    for (var m = r; m < a; m += r) c = e[m], f = e[m + 1], c < l && (l = c), f < o && (o = f), c > u && (u = c), f > _ && (_ = f);
                    d = 0 !== (d = Math.max(u - l, _ - o)) ? 1 / d : 0
                }
                return t.earcutLinked(n, h, r, l, o, d), h
            }, t.linkedList = function(e, i, r, s, a) {
                var n, h;
                if (a === t.signedArea(e, i, r, s) > 0)
                    for (n = i; n < r; n += s) h = t.insertNode(n, e[n], e[n + 1], h);
                else
                    for (n = r - s; n >= i; n -= s) h = t.insertNode(n, e[n], e[n + 1], h);
                return h && t.equals(h, h.next) && (t.removeNode(h), h = h.next), h
            }, t.filterPoints = function(e, i) {
                if (!e) return e;
                i || (i = e);
                var r, s = e;
                do {
                    if (r = !1, s.steiner || !t.equals(s, s.next) && 0 !== t.area(s.prev, s, s.next)) s = s.next;
                    else {
                        if (t.removeNode(s), (s = i = s.prev) === s.next) break;
                        r = !0
                    }
                } while (r || s !== i);
                return i
            }, t.earcutLinked = function(e, i, r, s, a, n, h) {
                if (e) {
                    !h && n && t.indexCurve(e, s, a, n);
                    for (var l, o, u = e; e.prev !== e.next;)
                        if (l = e.prev, o = e.next, n ? t.isEarHashed(e, s, a, n) : t.isEar(e)) i.push(l.i / r), i.push(e.i / r), i.push(o.i / r), t.removeNode(e), e = o.next, u = o.next;
                        else if ((e = o) === u) {
                        h ? 1 === h ? (e = t.cureLocalIntersections(e, i, r), t.earcutLinked(e, i, r, s, a, n, 2)) : 2 === h && t.splitEarcut(e, i, r, s, a, n) : t.earcutLinked(t.filterPoints(e, null), i, r, s, a, n, 1);
                        break
                    }
                }
            }, t.isEar = function(e) {
                var i = e.prev,
                    r = e,
                    s = e.next;
                if (t.area(i, r, s) >= 0) return !1;
                for (var a = e.next.next; a !== e.prev;) {
                    if (t.pointInTriangle(i.x, i.y, r.x, r.y, s.x, s.y, a.x, a.y) && t.area(a.prev, a, a.next) >= 0) return !1;
                    a = a.next
                }
                return !0
            }, t.isEarHashed = function(e, i, r, s) {
                var a = e.prev,
                    n = e,
                    h = e.next;
                if (t.area(a, n, h) >= 0) return !1;
                for (var l = a.x < n.x ? a.x < h.x ? a.x : h.x : n.x < h.x ? n.x : h.x, o = a.y < n.y ? a.y < h.y ? a.y : h.y : n.y < h.y ? n.y : h.y, u = a.x > n.x ? a.x > h.x ? a.x : h.x : n.x > h.x ? n.x : h.x, _ = a.y > n.y ? a.y > h.y ? a.y : h.y : n.y > h.y ? n.y : h.y, c = t.zOrder(l, o, i, r, s), f = t.zOrder(u, _, i, r, s), d = e.nextZ; d && d.z <= f;) {
                    if (d !== e.prev && d !== e.next && t.pointInTriangle(a.x, a.y, n.x, n.y, h.x, h.y, d.x, d.y) && t.area(d.prev, d, d.next) >= 0) return !1;
                    d = d.nextZ
                }
                for (d = e.prevZ; d && d.z >= c;) {
                    if (d !== e.prev && d !== e.next && t.pointInTriangle(a.x, a.y, n.x, n.y, h.x, h.y, d.x, d.y) && t.area(d.prev, d, d.next) >= 0) return !1;
                    d = d.prevZ
                }
                return !0
            }, t.cureLocalIntersections = function(e, i, r) {
                var s = e;
                do {
                    var a = s.prev,
                        n = s.next.next;
                    !t.equals(a, n) && t.intersects(a, s, s.next, n) && t.locallyInside(a, n) && t.locallyInside(n, a) && (i.push(a.i / r), i.push(s.i / r), i.push(n.i / r), t.removeNode(s), t.removeNode(s.next), s = e = n), s = s.next
                } while (s !== e);
                return s
            }, t.splitEarcut = function(e, i, r, s, a, n) {
                var h = e;
                do {
                    for (var l = h.next.next; l !== h.prev;) {
                        if (h.i !== l.i && t.isValidDiagonal(h, l)) {
                            var o = t.splitPolygon(h, l);
                            return h = t.filterPoints(h, h.next), o = t.filterPoints(o, o.next), t.earcutLinked(h, i, r, s, a, n), void t.earcutLinked(o, i, r, s, a, n)
                        }
                        l = l.next
                    }
                    h = h.next
                } while (h !== e)
            }, t.eliminateHoles = function(e, i, r, s) {
                var a, n, h, l, o, u = [];
                for (a = 0, n = i.length; a < n; a++) h = i[a] * s, l = a < n - 1 ? i[a + 1] * s : e.length, (o = t.linkedList(e, h, l, s, !1)) === o.next && (o.steiner = !0), u.push(t.getLeftmost(o));
                for (u.sort(t.compareX), a = 0; a < u.length; a++) t.eliminateHole(u[a], r), r = t.filterPoints(r, r.next);
                return r
            }, t.compareX = function(t, e) {
                return t.x - e.x
            }, t.eliminateHole = function(e, i) {
                if (i = t.findHoleBridge(e, i)) {
                    var r = t.splitPolygon(i, e);
                    t.filterPoints(r, r.next)
                }
            }, t.findHoleBridge = function(e, i) {
                var r, s = i,
                    a = e.x,
                    n = e.y,
                    h = -1 / 0;
                do {
                    if (n <= s.y && n >= s.next.y && s.next.y !== s.y) {
                        var l = s.x + (n - s.y) * (s.next.x - s.x) / (s.next.y - s.y);
                        if (l <= a && l > h) {
                            if (h = l, l === a) {
                                if (n === s.y) return s;
                                if (n === s.next.y) return s.next
                            }
                            r = s.x < s.next.x ? s : s.next
                        }
                    }
                    s = s.next
                } while (s !== i);
                if (!r) return null;
                if (a === h) return r.prev;
                var o, u = r,
                    _ = r.x,
                    c = r.y,
                    f = 1 / 0;
                for (s = r.next; s !== u;) a >= s.x && s.x >= _ && a !== s.x && t.pointInTriangle(n < c ? a : h, n, _, c, n < c ? h : a, n, s.x, s.y) && ((o = Math.abs(n - s.y) / (a - s.x)) < f || o === f && s.x > r.x) && t.locallyInside(s, e) && (r = s, f = o), s = s.next;
                return r
            }, t.indexCurve = function(e, i, r, s) {
                var a = e;
                do {
                    null === a.z && (a.z = t.zOrder(a.x, a.y, i, r, s)), a.prevZ = a.prev, a.nextZ = a.next, a = a.next
                } while (a !== e);
                a.prevZ.nextZ = null, a.prevZ = null, t.sortLinked(a)
            }, t.sortLinked = function(t) {
                var e, i, r, s, a, n, h, l, o = 1;
                do {
                    for (i = t, t = null, a = null, n = 0; i;) {
                        for (n++, r = i, h = 0, e = 0; e < o && (h++, r = r.nextZ); e++);
                        for (l = o; h > 0 || l > 0 && r;) 0 !== h && (0 === l || !r || i.z <= r.z) ? (s = i, i = i.nextZ, h--) : (s = r, r = r.nextZ, l--), a ? a.nextZ = s : t = s, s.prevZ = a, a = s;
                        i = r
                    }
                    a.nextZ = null, o *= 2
                } while (n > 1);
                return t
            }, t.zOrder = function(t, e, i, r, s) {
                return t = 32767 * (t - i) * s, e = 32767 * (e - r) * s, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
            }, t.getLeftmost = function(t) {
                var e = t,
                    i = t;
                do {
                    e.x < i.x && (i = e), e = e.next
                } while (e !== t);
                return i
            }, t.pointInTriangle = function(t, e, i, r, s, a, n, h) {
                return (s - n) * (e - h) - (t - n) * (a - h) >= 0 && (t - n) * (r - h) - (i - n) * (e - h) >= 0 && (i - n) * (a - h) - (s - n) * (r - h) >= 0
            }, t.isValidDiagonal = function(e, i) {
                return e.next.i !== i.i && e.prev.i !== i.i && !t.intersectsPolygon(e, i) && t.locallyInside(e, i) && t.locallyInside(i, e) && t.middleInside(e, i)
            }, t.area = function(t, e, i) {
                return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
            }, t.equals = function(t, e) {
                return t.x === e.x && t.y === e.y
            }, t.intersects = function(e, i, r, s) {
                return !!(t.equals(e, i) && t.equals(r, s) || t.equals(e, s) && t.equals(r, i)) || t.area(e, i, r) > 0 != t.area(e, i, s) > 0 && t.area(r, s, e) > 0 != t.area(r, s, i) > 0
            }, t.intersectsPolygon = function(e, i) {
                var r = e;
                do {
                    if (r.i !== e.i && r.next.i !== e.i && r.i !== i.i && r.next.i !== i.i && t.intersects(r, r.next, e, i)) return !0;
                    r = r.next
                } while (r !== e);
                return !1
            }, t.locallyInside = function(e, i) {
                return t.area(e.prev, e, e.next) < 0 ? t.area(e, i, e.next) >= 0 && t.area(e, e.prev, i) >= 0 : t.area(e, i, e.prev) < 0 || t.area(e, e.next, i) < 0
            }, t.middleInside = function(t, e) {
                var i = t,
                    r = !1,
                    s = (t.x + e.x) / 2,
                    a = (t.y + e.y) / 2;
                do {
                    i.y > a != i.next.y > a && i.next.y !== i.y && s < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (r = !r), i = i.next
                } while (i !== t);
                return r
            }, t.splitPolygon = function(t, e) {
                var i = new st(t.i, t.x, t.y),
                    r = new st(e.i, e.x, e.y),
                    s = t.next,
                    a = e.prev;
                return t.next = e, e.prev = t, i.next = s, s.prev = i, r.next = i, i.prev = r, a.next = r, r.prev = a, r
            }, t.insertNode = function(t, e, i, r) {
                var s = new st(t, e, i);
                return r ? (s.next = r.next, s.prev = r, r.next.prev = s, r.next = s) : (s.prev = s, s.next = s), s
            }, t.removeNode = function(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
            }, t.signedArea = function(t, e, i, r) {
                for (var s = 0, a = e, n = i - r; a < i; a += r) s += (t[n] - t[a]) * (t[a + 1] + t[n + 1]), n = a;
                return s
            }, t
        }(),
        st = function() {
            function t(t, e, i) {
                this.i = null, this.x = null, this.y = null, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = null, this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }
            return s(t, "laya.webgl.shapes.EarcutNode"), t
        }(),
        at = (function() {
            function t(t, e, i, r, s, a, n) {
                this.lineWidth = t, this.lineColor = e, this.lineAlpha = i, this.fillColor = r, this.fillAlpha = s, this.shape = n, this.fill = a
            }
            s(t, "laya.webgl.shapes.GeometryData");
            var e = t.prototype;
            e.clone = function() {
                return new t(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
            }, e.getIndexData = function() {
                return null
            }, e.getVertexData = function() {
                return null
            }, e.destroy = function() {
                this.shape = null
            }
        }(), function() {
            function t(t) {
                if (t instanceof Float32Array) this.points = t;
                else if (t instanceof Array) {
                    t.length;
                    this.points = new Float32Array(t)
                }
            }
            s(t, "laya.webgl.shapes.Vertex");
            var e = t.prototype;
            i.imps(e, {
                "laya.webgl.shapes.IShape": !0
            }), e.getData = function(t, e, i) {}, e.needUpdate = function(t) {
                return !1
            }, e.rebuild = function(t) {}, e.setMatrix = function(t) {}
        }(), function() {
            function t(t) {
                void 0 === t && (t = 1e4), this._renderType = t
            }
            s(t, "laya.webgl.submit.Submit");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.submit.ISubmit": !0
            }), e.releaseRender = function() {
                var e = t._cache;
                e[e._length++] = this, this.shaderValue.release(), this._vb = null
            }, e.getRenderType = function() {
                return this._renderType
            }, e.renderSubmit = function() {
                if (0 === this._numEle) return 1;
                var t = this.shaderValue.textureHost;
                if (t) {
                    var e = t.source;
                    if (!t.bitmap || !e) return 1;
                    this.shaderValue.texture = e
                }
                this._vb.bind_upload(this._ib);
                var i = bt.mainContext;
                return this.shaderValue.upload(), G.activeBlendFunction !== this._blendFn && (i.enable(3042), this._blendFn(i), G.activeBlendFunction = this._blendFn), C.drawCall++, C.trianglesFaces += this._numEle / 3, i.drawElements(4, this._numEle, 5123, this._startIdx), 1
            }, t.__init__ = function() {
                var e = t.RENDERBASE = new t(-1);
                e.shaderValue = new Et(0, 0), e.shaderValue.ALPHA = -1234
            }, t.createSubmit = function(e, i, r, s, a) {
                var n = t._cache._length ? t._cache[--t._cache._length] : new t;
                null == r && ((r = n._selfVb || (n._selfVb = Jt.create(-1))).clear(), s = 0), n._ib = i, n._vb = r, n._startIdx = s * mt.BYTES_PIDX, n._numEle = 0;
                var h = e._nBlendType;
                n._blendFn = e._targets ? G.targetFns[h] : G.fns[h], n.shaderValue = a, n.shaderValue.setValue(e._shader2D);
                var l = e._shader2D.filters;
                return l && n.shaderValue.setFilters(l), n
            }, t.createShape = function(e, i, r, s, a, n) {
                var h = t._cache._length ? t._cache[--t._cache._length] : new t;
                h._ib = i, h._vb = r, h._numEle = s, h._startIdx = a, h.shaderValue = n, h.shaderValue.setValue(e._shader2D);
                var l = e._nBlendType;
                return h._blendFn = e._targets ? G.targetFns[l] : G.fns[l], h
            }, t.TYPE_2D = 1e4, t.TYPE_CANVAS = 10003, t.TYPE_CMDSETRT = 10004, t.TYPE_CUSTOM = 10005, t.TYPE_BLURRT = 10006, t.TYPE_CMDDESTORYPRERT = 10007, t.TYPE_DISABLESTENCIL = 10008, t.TYPE_OTHERIBVB = 10009, t.TYPE_PRIMITIVE = 10010, t.TYPE_RT = 10011, t.TYPE_BLUR_RT = 10012, t.TYPE_TARGET = 10013, t.TYPE_CHANGE_VALUE = 10014, t.TYPE_SHAPE = 10015, t.TYPE_TEXTURE = 10016, t.TYPE_FILLTEXTURE = 10017, t.RENDERBASE = null, t._cache = (t._cache = [], t._cache._length = 0, t._cache), t
        }()),
        nt = function() {
            function t() {
                this.fun = null, this.args = null
            }
            s(t, "laya.webgl.submit.SubmitCMD");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.submit.ISubmit": !0
            }), e.renderSubmit = function() {
                return this.fun.apply(null, this.args), 1
            }, e.getRenderType = function() {
                return 0
            }, e.releaseRender = function() {
                var e = t._cache;
                e[e._length++] = this
            }, t.create = function(e, i) {
                var r = t._cache._length ? t._cache[--t._cache._length] : new t;
                return r.fun = i, r.args = e, r
            }, t._cache = (t._cache = [], t._cache._length = 0, t._cache), t
        }(),
        ht = function() {
            function t() {
                this.variables = {}
            }
            s(t, "laya.webgl.submit.SubmitCMDScope");
            var e = t.prototype;
            return e.getValue = function(t) {
                return this.variables[t]
            }, e.addValue = function(t, e) {
                return this.variables[t] = e
            }, e.setValue = function(t, e) {
                return this.variables.hasOwnProperty(t) ? this.variables[t] = e : null
            }, e.clear = function() {
                for (var t in this.variables) delete this.variables[t]
            }, e.recycle = function() {
                this.clear(), t.POOL.push(this)
            }, t.create = function() {
                var e = t.POOL.pop();
                return e || (e = new t), e
            }, t.POOL = [], t
        }(),
        lt = function() {
            function t() {
                this.offset = 0, this.startIndex = 0, this._mat = b.create()
            }
            s(t, "laya.webgl.submit.SubmitOtherIBVB");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.submit.ISubmit": !0
            }), e.releaseRender = function() {
                var e = t._cache;
                e[e._length++] = this
            }, e.getRenderType = function() {
                return 10009
            }, e.renderSubmit = function() {
                var e = this._shaderValue.textureHost;
                if (e) {
                    var i = e.source;
                    if (!e.bitmap || !i) return 1;
                    this._shaderValue.texture = i
                }
                this._vb.bind_upload(this._ib);
                var r = vt.worldMatrix4,
                    s = b.TEMP;
                b.mulPre(this._mat, r[0], r[1], r[4], r[5], r[12], r[13], s);
                var a = vt.worldMatrix4 = t.tempMatrix4;
                a[0] = s.a, a[1] = s.b, a[4] = s.c, a[5] = s.d, a[12] = s.tx, a[13] = s.ty, this._shader._offset = this.offset, this._shaderValue.refresh(), this._shader.upload(this._shaderValue), this._shader._offset = 0;
                var n = bt.mainContext;
                return G.activeBlendFunction !== this._blendFn && (n.enable(3042), this._blendFn(n), G.activeBlendFunction = this._blendFn), C.drawCall++, C.trianglesFaces += this._numEle / 3, n.drawElements(4, this._numEle, 5123, this.startIndex), vt.worldMatrix4 = r, Bt.activeShader = null, 1
            }, t.create = function(e, i, r, s, a, n, h, l, o) {
                void 0 === o && (o = 0);
                var u = t._cache._length ? t._cache[--t._cache._length] : new t;
                u._ib = r, u._vb = i, u._numEle = s, u._shader = a, u._shaderValue = n;
                var _ = e._nBlendType;
                switch (u._blendFn = e._targets ? G.targetFns[_] : G.fns[_], o) {
                    case 0:
                        u.offset = 0, u.startIndex = l / (mt.BYTES_PE * i.vertexStride) * 1.5, u.startIndex *= mt.BYTES_PIDX;
                        break;
                    case 1:
                        u.startIndex = h, u.offset = l
                }
                return u
            }, t._cache = (t._cache = [], t._cache._length = 0, t._cache), t.tempMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t
        }(),
        ot = function() {
            function t() {
                this.submitIndex = 0, this.submitLength = 0, this.context = null, this.clipRect = new T, this.screenRect = new T
            }
            s(t, "laya.webgl.submit.SubmitScissor");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.submit.ISubmit": !0
            }), e._scissor = function(t, e, i, r) {
                var s = vt.worldMatrix4,
                    a = s[0],
                    n = s[5];
                if (t = t * a + s[12], e = e * n + s[13], i *= a, r *= n, i < 1 || r < 1) return !1;
                var h = t + i,
                    l = e + r;
                t < 0 && (t = 0, i = h - t), e < 0 && (e = 0, r = l - e);
                var o = vt.worldClipRect;
                if (t = Math.max(t, o.x), e = Math.max(e, o.y), i = Math.min(h, o.right) - t, r = Math.min(l, o.bottom) - e, i < 1 || r < 1) return !1;
                var u = vt.worldScissorTest;
                return this.screenRect.copyFrom(o), o.x = t, o.y = e, o.width = i, o.height = r, vt.worldScissorTest = !0, e = vt.height - e - r, bt.mainContext.scissor(t, e, i, r), bt.mainContext.enable(3089), this.context.submitElement(this.submitIndex, this.submitIndex + this.submitLength), u ? (e = vt.height - this.screenRect.y - this.screenRect.height, bt.mainContext.scissor(this.screenRect.x, e, this.screenRect.width, this.screenRect.height), bt.mainContext.enable(3089)) : (bt.mainContext.disable(3089), vt.worldScissorTest = !1), o.copyFrom(this.screenRect), !0
            }, e._scissorWithTagart = function(t, e, i, r) {
                if (i < 1 || r < 1) return !1;
                var s = t + i,
                    a = e + r;
                t < 0 && (t = 0, i = s - t), e < 0 && (e = 0, r = a - e);
                var n = vt.worldClipRect;
                if (t = Math.max(t, n.x), e = Math.max(e, n.y), i = Math.min(s, n.right) - t, r = Math.min(a, n.bottom) - e, i < 1 || r < 1) return !1;
                var h = vt.worldScissorTest;
                return this.screenRect.copyFrom(n), vt.worldScissorTest = !0, n.x = t, n.y = e, n.width = i, n.height = r, e = vt.height - e - r, bt.mainContext.scissor(t, e, i, r), bt.mainContext.enable(3089), this.context.submitElement(this.submitIndex, this.submitIndex + this.submitLength), h ? (e = vt.height - this.screenRect.y - this.screenRect.height, bt.mainContext.scissor(this.screenRect.x, e, this.screenRect.width, this.screenRect.height), bt.mainContext.enable(3089)) : (bt.mainContext.disable(3089), vt.worldScissorTest = !1), n.copyFrom(this.screenRect), !0
            }, e.renderSubmit = function() {
                return this.submitLength = Math.min(this.context._submits._length - 1, this.submitLength), this.submitLength < 1 || this.clipRect.width < 1 || this.clipRect.height < 1 ? this.submitLength + 1 : (this.context._targets ? this._scissorWithTagart(this.clipRect.x, this.clipRect.y, this.clipRect.width, this.clipRect.height) : this._scissor(this.clipRect.x, this.clipRect.y, this.clipRect.width, this.clipRect.height), this.submitLength + 1)
            }, e.getRenderType = function() {
                return 0
            }, e.releaseRender = function() {
                var e = t._cache;
                e[e._length++] = this, this.context = null
            }, t.create = function(e) {
                var i = t._cache._length ? t._cache[--t._cache._length] : new t;
                return i.context = e, i
            }, t._cache = (t._cache = [], t._cache._length = 0, t._cache), t
        }(),
        ut = function() {
            function t() {
                this.step = 0, this.blendMode = null, this.level = 0
            }
            s(t, "laya.webgl.submit.SubmitStencil");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.submit.ISubmit": !0
            }), e.renderSubmit = function() {
                switch (this.step) {
                    case 1:
                        this.do1();
                        break;
                    case 2:
                        this.do2();
                        break;
                    case 3:
                        this.do3();
                        break;
                    case 4:
                        this.do4();
                        break;
                    case 5:
                        this.do5();
                        break;
                    case 6:
                        this.do6();
                        break;
                    case 7:
                        this.do7();
                        break;
                    case 8:
                        this.do8()
                }
                return 1
            }, e.getRenderType = function() {
                return 0
            }, e.releaseRender = function() {
                var e = t._cache;
                e[e._length++] = this
            }, e.do1 = function() {
                var t = bt.mainContext;
                t.enable(2960), t.clear(1024), t.colorMask(!1, !1, !1, !1), t.stencilFunc(514, this.level, 255), t.stencilOp(7680, 7680, 7682)
            }, e.do2 = function() {
                var t = bt.mainContext;
                t.stencilFunc(514, this.level + 1, 255), t.colorMask(!0, !0, !0, !0), t.stencilOp(7680, 7680, 7680)
            }, e.do3 = function() {
                var t = bt.mainContext;
                t.colorMask(!0, !0, !0, !0), t.stencilOp(7680, 7680, 7680), t.clear(1024), t.disable(2960)
            }, e.do4 = function() {
                var t = bt.mainContext;
                0 == this.level && (t.enable(2960), t.clear(1024)), t.colorMask(!1, !1, !1, !1), t.stencilFunc(519, 0, 255), t.stencilOp(7680, 7680, 7682)
            }, e.do5 = function() {
                var t = bt.mainContext;
                t.stencilFunc(514, this.level, 255), t.colorMask(!0, !0, !0, !0), t.stencilOp(7680, 7680, 7680)
            }, e.do6 = function() {
                var t = bt.mainContext;
                G.targetFns[G.TOINT[this.blendMode]](t)
            }, e.do7 = function() {
                var t = bt.mainContext;
                t.colorMask(!1, !1, !1, !1), t.stencilOp(7680, 7680, 7683)
            }, e.do8 = function() {
                var t = bt.mainContext;
                t.colorMask(!0, !0, !0, !0), t.stencilFunc(514, this.level, 255), t.stencilOp(7680, 7680, 7680)
            }, t.restore = function(e, i, r, s, a) {
                var n;
                if (e._renderKey = 0, t._mask > 0 && t._mask--, 0 == t._mask) n = laya.webgl.submit.SubmitStencil.create(3), e.addRenderObject(n), e._curSubmit = at.RENDERBASE;
                else {
                    n = laya.webgl.submit.SubmitStencil.create(7), e.addRenderObject(n);
                    var h = e._vb;
                    h._byteLength;
                    if (pt.fillRectImgVb(h, null, i.x, i.y, i.width, i.height, F.DEF_UV, r, s, a, 0, 0)) {
                        e._shader2D.glTexture = null;
                        var l = e._curSubmit = at.createSubmit(e, e._ib, h, (h._byteLength - 64) / 32 * 3, Et.create(2, 0));
                        l.shaderValue.ALPHA = 1, e._submits[e._submits._length++] = l, e._curSubmit._numEle += 6, e._curSubmit = at.RENDERBASE
                    } else alert("clipRect calc stencil rect error");
                    n = laya.webgl.submit.SubmitStencil.create(8), e.addRenderObject(n)
                }
            }, t.restore2 = function(e, i) {
                var r;
                e._renderKey = 0, t._mask > 0 && t._mask--, 0 == t._mask ? (r = laya.webgl.submit.SubmitStencil.create(3), e.addRenderObject(r), e._curSubmit = at.RENDERBASE) : (r = laya.webgl.submit.SubmitStencil.create(7), e.addRenderObject(r), e._submits[e._submits._length++] = i, r = laya.webgl.submit.SubmitStencil.create(8), e.addRenderObject(r))
            }, t.create = function(e) {
                var i = t._cache._length ? t._cache[--t._cache._length] : new t;
                return i.step = e, 5 == e && ++t._mask, i.level = t._mask, i
            }, t._cache = (t._cache = [], t._cache._length = 0, t._cache), t._mask = 0, t
        }(),
        _t = function() {
            function t() {
                this._renderType = 0, this._vb = null, this._ib = null, this._startIdx = 0, this._numEle = 0, this.shaderValue = null, this.blendType = 0, this.proName = null, this.scope = null
            }
            s(t, "laya.webgl.submit.SubmitTarget");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.submit.ISubmit": !0
            }), e.renderSubmit = function() {
                this._vb.bind_upload(this._ib);
                var t = this.scope.getValue(this.proName);
                return t && (this.shaderValue.texture = t.source, this.shaderValue.strength && !this.shaderValue.blurInfo && (this.shaderValue.blurInfo = [t.width, t.height]), this.shaderValue.upload(), this.blend(), C.drawCall++, C.trianglesFaces += this._numEle / 3, bt.mainContext.drawElements(4, this._numEle, 5123, this._startIdx)), 1
            }, e.blend = function() {
                if (G.activeBlendFunction !== G.fns[this.blendType]) {
                    var t = bt.mainContext;
                    t.enable(3042), G.fns[this.blendType](t), G.activeBlendFunction = G.fns[this.blendType]
                }
            }, e.getRenderType = function() {
                return 0
            }, e.releaseRender = function() {
                var e = t._cache;
                e[e._length++] = this
            }, t.create = function(e, i, r, s, a, n) {
                var h = t._cache._length ? t._cache[--t._cache._length] : new t;
                return h._ib = i, h._vb = r, h.proName = n, h._startIdx = s * mt.BYTES_PIDX, h._numEle = 0, h.blendType = e._nBlendType, h.shaderValue = a, h.shaderValue.setValue(e._shader2D), h
            }, t._cache = (t._cache = [], t._cache._length = 0, t._cache), t
        }(),
        ct = function() {
            function t() {
                this._sourceStr = null
            }
            s(t, "laya.webgl.text.CharSegment");
            var e = t.prototype;
            return i.imps(e, {
                "laya.webgl.text.ICharSegment": !0
            }), e.textToSpit = function(t) {
                this._sourceStr = t
            }, e.getChar = function(t) {
                return this._sourceStr.charAt(t)
            }, e.getCharCode = function(t) {
                return this._sourceStr.charCodeAt(t)
            }, e.length = function() {
                return this._sourceStr.length
            }, t
        }(),
        ft = function() {
            function t() {}
            var e;
            return s(t, "laya.webgl.text.DrawText"), t.__init__ = function() {
                t._charsTemp = new Array, t._drawValue = new e, t._charSeg = new ct
            }, t.customCharSeg = function(e) {
                t._charSeg = e
            }, t.getChar = function(e, i, r) {
                var s = Yt.createOneChar(e, r);
                return -1 != i && (t._charsCache[i] = s), s
            }, t._drawSlow = function(e, i, r, s, a, n, h, l, o, u, _, c, f, d, m) {
                var p, g, v = t._drawValue.value(n, l, o, u, f, d, m),
                    x = 0,
                    b = 0,
                    y = t._charsTemp,
                    T = 0,
                    A = NaN;
                if (s)
                    for (y.length = s.length, x = 0, b = s.length; x < b; x++) A = (g = s[x]).charNum + v.txtID, y[x] = p = t._charsCache[A] || t.getChar(g.char, A, v), p.active();
                else {
                    var E = r instanceof laya.utils.WordText ? r.toString() : r;
                    if (D.CharacterCache) {
                        t._charSeg.textToSpit(E);
                        var S = t._charSeg.length();
                        for (y.length = S, x = 0, b = S; x < b; x++) A = t._charSeg.getCharCode(x) + v.txtID, y[x] = p = t._charsCache[A] || t.getChar(t._charSeg.getChar(x), A, v), p.active(), T += p.cw
                    } else y.length = 0, (p = t.getChar(E, -1, v)).active(), T += p.cw, y[0] = p
                }
                var w = 0;
                null !== h && "left" !== h && (w = -("center" == h ? T / 2 : T));
                var R, I, M = NaN,
                    C = 0;
                if (s)
                    for (x = 0, b = y.length; x < b; x++)(p = y[x]).isSpace || (g = s[x], M = p.borderSize, R = p.texture, i._drawText(R, _ + w + g.x * f - M, c + g.y * d - M, R.width, R.height, a, 0, 0, 0, 0));
                else {
                    for (x = 0, b = y.length; x < b; x++)(p = y[x]).isSpace || (M = p.borderSize, R = p.texture, i._drawText(R, _ + w - M, c - M, R.width, R.height, a, 0, 0, 0, 0), e && ((I = e[C++]) || (I = e[C - 1] = []), I[0] = R, I[1] = w - M, I[2] = -M)), w += p.cw;
                    e && (e.length = C)
                }
            }, t._drawFast = function(t, e, i, r, s) {
                for (var a, n, h = 0, l = t.length; h < l; h++)(a = (n = t[h])[0]).active(), e._drawText(a, r + n[1], s + n[2], a.width, a.height, i, 0, 0, 0, 0)
            }, t.drawText = function(e, r, s, a, n, h, l, o, u, _, c, d) {
                if (void 0 === d && (d = 0), !(r && 0 === r.length || s && 0 === s.length)) {
                    var m = a.a,
                        p = a.d;
                    (0 !== a.b || 0 !== a.c) && (m = p = 1);
                    var g = 1 !== m || 1 !== p;
                    if (g && i.stage.transform) {
                        var v = i.stage.transform;
                        g = v.a === m && v.d === p
                    } else g = !1;
                    if (g) {
                        var x = (a = a.copyTo(At._tmpMatrix)).tx,
                            b = a.ty;
                        a.scale(1 / m, 1 / p), a._checkTransform(), _ *= m, c *= p, _ += x - a.tx, c += b - a.ty
                    } else m = p = 1;
                    if (s) t._drawSlow(null, e, r, s, a, n, h, l, o, u, _, c, m, p, d);
                    else {
                        if (null === r.toUpperCase) {
                            var y = m + 1e5 * p,
                                T = r;
                            return void(T.changed || T.id !== y ? (T.id = y, T.changed = !1, t._drawSlow(T.save, e, r, s, a, n, h, l, o, u, _, c, m, p, d)) : t._drawFast(T.save, e, a, _, c))
                        }
                        var A = r + n.toString() + l + o + u + m + p + h,
                            E = t._textsCache[A];
                        D.CharacterCache ? E ? t._drawFast(E, e, a, _, c) : (t._textsCache.__length || (t._textsCache.__length = 0), t._textsCache.__length > f.WebGLTextCacheCount && ((t._textsCache = {}).__length = 0, t._curPoolIndex = 0), t._textCachesPool[t._curPoolIndex] ? (E = t._textsCache[A] = t._textCachesPool[t._curPoolIndex], E.length = 0) : t._textCachesPool[t._curPoolIndex] = E = t._textsCache[A] = [], t._textsCache.__length++, t._curPoolIndex++, t._drawSlow(E, e, r, s, a, n, h, l, o, u, _, c, m, p, d)) : t._drawSlow(E, e, r, s, a, n, h, l, o, u, _, c, m, p, d)
                    }
                }
            }, t._charsTemp = null, t._textCachesPool = [], t._curPoolIndex = 0, t._charsCache = {}, t._textsCache = {}, t._drawValue = null, t.d = [], t._charSeg = null, t.__init$ = function() {
                e = function() {
                    function t() {}
                    s(t, "");
                    return t.prototype.value = function(e, i, r, s, a, n, h) {
                        this.font = e, this.fillColor = i, this.borderColor = r, this.lineWidth = s, this.scaleX = a, this.scaleY = n, this.underLine = h;
                        var l = e.toString() + a + n + s + i + r + h;
                        return this.txtID = t._keymap[l], this.txtID || (this.txtID = 1e-7 * ++t._keymapCount, t._keymap[l] = this.txtID), this
                    }, t.clear = function() {
                        t._keymap = {}, t._keymapCount = 1
                    }, t._keymap = {}, t._keymapCount = 1, t
                }()
            }, t
        }(),
        dt = function() {
            function t(e) {
                this._index = 0, this._size = 14, this._italic = -2, t._cache2 = t._cache2 || [], this.setFont(e || "14px Arial")
            }
            s(t, "laya.webgl.text.FontInContext");
            var e = t.prototype;
            return e.setFont = function(e) {
                var i = t._cache2[e];
                if (i) this._words = i[0], this._size = i[1];
                else {
                    this._words = e.split(" ");
                    for (var r = 0, s = this._words.length; r < s; r++)
                        if (this._words[r].indexOf("px") > 0) {
                            this._index = r;
                            break
                        }
                    this._size = parseInt(this._words[this._index]), t._cache2[e] = [this._words, this._size]
                }
                this._text = null, this._italic = -2
            }, e.getItalic = function() {
                return -2 === this._italic && (this._italic = this.hasType("italic")), this._italic
            }, e.hasType = function(t) {
                for (var e = 0, i = this._words.length; e < i; e++)
                    if (this._words[e] === t) return e;
                return -1
            }, e.removeType = function(t) {
                for (var e = 0, i = this._words.length; e < i; e++)
                    if (this._words[e] === t) {
                        this._words.splice(e, 1), this._index > e && this._index--;
                        break
                    }
                this._text = null, this._italic = -2
            }, e.copyTo = function(t) {
                return t._text = this._text, t._size = this._size, t._index = this._index, t._words = this._words.slice(), t._italic = -2, t
            }, e.toString = function() {
                return this._text ? this._text : this._text = this._words.join(" ")
            }, a(0, e, "size", function() {
                return this._size
            }, function(t) {
                this._size = t, this._words[this._index] = t + "px", this._text = null
            }), t.create = function(e) {
                var i = t._cache[e];
                return i || (i = t._cache[e] = new t(e))
            }, t.EMPTY = new t, t._cache = {}, t._cache2 = null, t
        }(),
        mt = function() {
            function t() {}
            return s(t, "laya.webgl.utils.CONST3D2D"), t.defaultMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t.defaultMinusYMatrix4 = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t.uniformMatrix3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], t._TMPARRAY = [], t._OFFSETX = 0, t._OFFSETY = 0, r(t, ["BYTES_PE", function() {
                return this.BYTES_PE = Float32Array.BYTES_PER_ELEMENT
            }, "BYTES_PIDX", function() {
                return this.BYTES_PIDX = Uint16Array.BYTES_PER_ELEMENT
            }]), t
        }(),
        pt = function() {
            function t() {}
            return s(t, "laya.webgl.utils.GlUtils"), t.make2DProjection = function(t, e, i) {
                return [2 / t, 0, 0, 0, 0, -2 / e, 0, 0, 0, 0, 2 / i, 0, -1, 1, 0, 1]
            }, t.fillIBQuadrangle = function(t, e) {
                if (e > 65535 / 4) throw Error("IBQuadrangle count:" + e + " must<:" + Math.floor(65535 / 4));
                e = Math.floor(e), t._resizeBuffer(6 * (e + 1) * 2, !1), t.byteLength = t.bufferLength;
                for (var i = t.getUint16Array(), r = 0, s = 0; s < e; s++) i[r++] = 4 * s, i[r++] = 4 * s + 2, i[r++] = 4 * s + 1, i[r++] = 4 * s, i[r++] = 4 * s + 3, i[r++] = 4 * s + 2;
                return t.setNeedUpload(), !0
            }, t.expandIBQuadrangle = function(e, i) {
                e.bufferLength >= 6 * i * 2 || t.fillIBQuadrangle(e, i)
            }, t.mathCeilPowerOfTwo = function(t) {
                return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, ++t
            }, t.fillQuadrangleImgVb = function(t, e, i, r, s, a, n, h) {
                var l = 16 + (t._byteLength >> 2);
                t.byteLength = l << 2;
                var o = t.getFloat32Array();
                o[(l -= 16) + 2] = s[0], o[l + 3] = s[1], o[l + 6] = s[2], o[l + 7] = s[3], o[l + 10] = s[4], o[l + 11] = s[5], o[l + 14] = s[6], o[l + 15] = s[7];
                var u = a.a,
                    _ = a.b,
                    c = a.c,
                    f = a.d;
                if (1 !== u || 0 !== _ || 0 !== c || 1 !== f) {
                    a.bTransform = !0;
                    var d = a.tx + n,
                        m = a.ty + h;
                    o[l] = (r[0] + e) * u + (r[1] + i) * c + d, o[l + 1] = (r[0] + e) * _ + (r[1] + i) * f + m, o[l + 4] = (r[2] + e) * u + (r[3] + i) * c + d, o[l + 5] = (r[2] + e) * _ + (r[3] + i) * f + m, o[l + 8] = (r[4] + e) * u + (r[5] + i) * c + d, o[l + 9] = (r[4] + e) * _ + (r[5] + i) * f + m, o[l + 12] = (r[6] + e) * u + (r[7] + i) * c + d, o[l + 13] = (r[6] + e) * _ + (r[7] + i) * f + m
                } else a.bTransform = !1, e += a.tx + n, i += a.ty + h, o[l] = e + r[0], o[l + 1] = i + r[1], o[l + 4] = e + r[2], o[l + 5] = i + r[3], o[l + 8] = e + r[4], o[l + 9] = i + r[5], o[l + 12] = e + r[6], o[l + 13] = i + r[7];
                return t._upload = !0, !0
            }, t.fillTranglesVB = function(t, e, i, r, s, a, n) {
                var h = (t._byteLength >> 2) + r.length;
                t.byteLength = h << 2;
                var l = t.getFloat32Array();
                h -= r.length;
                for (var o = r.length, u = s.a, _ = s.b, c = s.c, f = s.d, d = 0; d < o; d += 4)
                    if (l[h + d + 2] = r[d + 2], l[h + d + 3] = r[d + 3], 1 !== u || 0 !== _ || 0 !== c || 1 !== f) {
                        s.bTransform = !0;
                        var m = s.tx + a,
                            p = s.ty + n;
                        l[h + d] = (r[d] + e) * u + (r[d + 1] + i) * c + m, l[h + d + 1] = (r[d] + e) * _ + (r[d + 1] + i) * f + p
                    } else s.bTransform = !1, e += s.tx + a, i += s.ty + n, l[h + d] = e + r[d], l[h + d + 1] = i + r[d + 1];
                return t._upload = !0, !0
            }, t.copyPreImgVb = function(t, e, i) {
                var r = t._byteLength >> 2;
                t.byteLength = r + 16 << 2;
                for (var s = t.getFloat32Array(), a = 0, n = r - 16; a < 4; a++) s[r] = s[n] + e, ++n, s[++r] = s[n] + i, ++n, s[++r] = s[n], ++n, s[++r] = s[n], ++r, ++n;
                t._upload = !0
            }, t.fillRectImgVb = function(t, e, i, r, s, a, n, h, l, o, u, _, c) {
                void 0 === c && (c = !1);
                var f, d, m, p, g, v, x, b, y, T, A, E, S, w, R, I, M = 1,
                    C = h.a,
                    L = h.b,
                    P = h.c,
                    D = h.d,
                    F = e && e.width < 99999999;
                if (1 !== C || 0 !== L || 0 !== P || 1 !== D ? (h.bTransform = !0, 0 === L && 0 === P && (M = 23, y = s + i, T = a + r, f = C * i + (A = h.tx + l), m = C * y + A, d = D * r + (E = h.ty + o), p = D * T + E)) : (M = 23, h.bTransform = !1, m = (f = i + h.tx + l) + s, p = (d = r + h.ty + o) + a), F && (g = e.x, v = e.y, x = e.width + g, b = e.height + v), 1 !== M) {
                    if (Math.min(f, m) >= x) return !1;
                    if (Math.min(d, p) >= b) return !1;
                    if (Math.max(m, f) <= g) return !1;
                    if (Math.max(p, d) <= v) return !1
                }
                var B = t._byteLength >> 2;
                t.byteLength = B + 16 << 2;
                var N = t.getFloat32Array();
                switch (N[B + 2] = n[0], N[B + 3] = n[1], N[B + 6] = n[2], N[B + 7] = n[3], N[B + 10] = n[4], N[B + 11] = n[5], N[B + 14] = n[6], N[B + 15] = n[7], M) {
                    case 1:
                        A = h.tx + l, E = h.ty + o;
                        var O = C * i,
                            V = P * r,
                            U = D * r,
                            k = L * i,
                            H = C * (y = s + i),
                            G = P * (T = a + r),
                            W = D * T,
                            z = L * y;
                        c ? (S = O + V + A, R = Math.round(S) - S, w = U + k + E, I = Math.round(w) - w, N[B] = S + R, N[B + 1] = w + I, N[B + 4] = H + V + A + R, N[B + 5] = U + z + E + I, N[B + 8] = H + G + A + R, N[B + 9] = W + z + E + I, N[B + 12] = O + G + A + R, N[B + 13] = W + k + E + I) : (N[B] = O + V + A, N[B + 1] = U + k + E, N[B + 4] = H + V + A, N[B + 5] = U + z + E, N[B + 8] = H + G + A, N[B + 9] = W + z + E, N[B + 12] = O + G + A, N[B + 13] = W + k + E);
                        break;
                    case 23:
                        c ? (S = f + u, R = Math.round(S) - S, w = d, I = Math.round(w) - w, N[B] = S + R, N[B + 1] = w + I, N[B + 4] = m + u + R, N[B + 5] = d + I, N[B + 8] = m + R, N[B + 9] = p + I, N[B + 12] = f + R, N[B + 13] = p + I) : (N[B] = f + u, N[B + 1] = d, N[B + 4] = m + u, N[B + 5] = d, N[B + 8] = m, N[B + 9] = p, N[B + 12] = f, N[B + 13] = p)
                }
                return t._upload = !0, !0
            }, t.fillLineVb = function(e, i, r, s, a, n, h, l) {
                var o = .5 * h,
                    u = t._fillLineArray,
                    _ = -(s - n),
                    c = r - a,
                    f = Math.sqrt(_ * _ + c * c);
                _ /= f, c /= f, _ *= o, c *= o, u[0] = r - _, u[1] = s - c, u[4] = r + _, u[5] = s + c, u[8] = a + _, u[9] = n + c, u[12] = a - _, u[13] = n - c, l && l.transformPointArray(u, u);
                var d = 16 + (e._byteLength >> 2);
                return e.byteLength = d << 2, e.insertData(u, d - 16), !0
            }, t._fillLineArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t
        }(),
        gt = (function() {
            function t() {}
            s(t, "laya.webgl.utils.MatirxArray"), t.ArrayMul = function(e, i, r) {
                if (e)
                    if (i)
                        for (var s = NaN, a = NaN, n = NaN, h = NaN, l = 0; l < 4; l++) s = e[l], a = e[l + 4], n = e[l + 8], h = e[l + 12], r[l] = s * i[0] + a * i[1] + n * i[2] + h * i[3], r[l + 4] = s * i[4] + a * i[5] + n * i[6] + h * i[7], r[l + 8] = s * i[8] + a * i[9] + n * i[10] + h * i[11], r[l + 12] = s * i[12] + a * i[13] + n * i[14] + h * i[15];
                    else t.copyArray(e, r);
                else t.copyArray(i, r)
            }, t.copyArray = function(t, e) {
                if (t && e)
                    for (var i = 0; i < t.length; i++) e[i] = t[i]
            }
        }(), function() {
            function t(t, e, i) {
                this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._vb = null, this._ib = null, this._vao = null, this._attribInfo = null, this._quadNum = 0, this.canReuse = !1, this._stride = t, this._vb = new Jt(t, 35048), e && this._vb._resizeBuffer(e, !1), this._ib = new $t, i && this._ib._resizeBuffer(i, !1)
            }
            s(t, "laya.webgl.utils.Mesh2D");
            var e = t.prototype;
            return e.cloneWithNewVB = function() {
                var e = new t(this._stride, 0, 0);
                return e._ib = this._ib, e._quadNum = this._quadNum, e._attribInfo = this._attribInfo, e
            }, e.cloneWithNewVBIB = function() {
                var e = new t(this._stride, 0, 0);
                return e._attribInfo = this._attribInfo, e
            }, e.getVBW = function() {
                return this._vb.setNeedUpload(), this._vb
            }, e.getVBR = function() {
                return this._vb
            }, e.getIBR = function() {
                return this._ib
            }, e.getIBW = function() {
                return this._ib.setNeedUpload(), this._ib
            }, e.createQuadIB = function(t) {
                this._quadNum = t, this._ib._resizeBuffer(6 * t * 2, !1), this._ib.byteLength = this._ib.bufferLength;
                for (var e = this._ib.getUint16Array(), i = 0, r = 0, s = 0; s < t; s++) e[i++] = r, e[i++] = r + 2, e[i++] = r + 1, e[i++] = r, e[i++] = r + 3, e[i++] = r + 2, r += 4;
                this._ib.setNeedUpload()
            }, e.setAttributes = function(t) {
                if (this._attribInfo = t, this._attribInfo.length % 3 != 0) throw "Mesh2D setAttributes error!"
            }, e.getEleNum = function() {
                return this._ib.getBuffer().byteLength / 2
            }, e.releaseMesh = function() {}, e.destroy = function() {}, e.clearVB = function() {
                this._vb.clear()
            }, t._gvaoid = 0, t
        }()),
        vt = function() {
            function t() {}
            return s(t, "laya.webgl.utils.RenderState2D"), t.getMatrArray = function() {
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            }, t.mat2MatArray = function(e, i) {
                var r = e,
                    s = i;
                return s[0] = r.a, s[1] = r.b, s[2] = t.EMPTYMAT4_ARRAY[2], s[3] = t.EMPTYMAT4_ARRAY[3], s[4] = r.c, s[5] = r.d, s[6] = t.EMPTYMAT4_ARRAY[6], s[7] = t.EMPTYMAT4_ARRAY[7], s[8] = t.EMPTYMAT4_ARRAY[8], s[9] = t.EMPTYMAT4_ARRAY[9], s[10] = t.EMPTYMAT4_ARRAY[10], s[11] = t.EMPTYMAT4_ARRAY[11], s[12] = r.tx, s[13] = r.ty, s[14] = t.EMPTYMAT4_ARRAY[14], s[15] = t.EMPTYMAT4_ARRAY[15], i
            }, t.restoreTempArray = function() {
                t.TEMPMAT4_ARRAY[0] = 1, t.TEMPMAT4_ARRAY[1] = 0, t.TEMPMAT4_ARRAY[4] = 0, t.TEMPMAT4_ARRAY[5] = 1, t.TEMPMAT4_ARRAY[12] = 0, t.TEMPMAT4_ARRAY[13] = 0
            }, t.clear = function() {
                t.worldScissorTest = !1, t.worldShaderDefines = null, t.worldFilters = null, t.worldAlpha = 1, t.worldClipRect.x = t.worldClipRect.y = 0, t.worldClipRect.width = t.width, t.worldClipRect.height = t.height, t.curRenderTarget = null
            }, t._MAXSIZE = 99999999, t.EMPTYMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t.worldMatrix4 = t.TEMPMAT4_ARRAY, t.worldAlpha = 1, t.worldScissorTest = !1, t.worldFilters = null, t.worldShaderDefines = null, t.curRenderTarget = null, t.width = 0, t.height = 0, r(t, ["worldMatrix", function() {
                return this.worldMatrix = new b
            }, "worldClipRect", function() {
                return this.worldClipRect = new T(0, 0, 99999999, 99999999)
            }]), t
        }(),
        xt = function() {
            function t(t, i, r, s, a) {
                function n(t) {
                    var i = [],
                        r = new e(i);
                    return h._compileToTree(r, t.split("\n"), 0, i, a), r
                }
                var h = this,
                    l = u.now();
                this._VS = n(i), this._PS = n(r), this._nameMap = s, u.now() - l > 2 && console.log("ShaderCompile use time:" + (u.now() - l) + "  size:" + i.length + "/" + r.length)
            }
            var e, i;
            s(t, "laya.webgl.utils.ShaderCompile");
            var a = t.prototype;
            return a._compileToTree = function(i, r, s, a, n) {
                var h, l, o, u, _, c, f, d = 0,
                    m = 0,
                    p = 0,
                    g = 0;
                for (m = s; m < r.length; m++)
                    if (!((o = r[m]).length < 1) && 0 !== (d = o.indexOf("//"))) {
                        if (d >= 0 && (o = o.substr(0, d)), h = f || new e(a), f = null, h.text = o, h.noCompile = !0, (d = o.indexOf("#")) >= 0) {
                            for (u = "#", g = d + 1, p = o.length; g < p; g++) {
                                var v = o.charAt(g);
                                if (" " === v || "\t" === v || "?" === v) break;
                                u += v
                            }
                            switch (h.name = u, u) {
                                case "#ifdef":
                                case "#ifndef":
                                    if (h.src = o, h.noCompile = null != o.match(/[!&|()=<>]/), h.noCompile ? console.log("function():Boolean{return " + o.substr(d + h.name.length) + "}") : (c = o.replace(/^\s*/, "").split(/\s+/), h.setCondition(c[1], "#ifdef" === u ? 1 : 2), h.text = "//" + h.text), h.setParent(i), i = h, n)
                                        for (c = o.substr(g).split(t._splitToWordExps3), g = 0; g < c.length; g++)(o = c[g]).length && (n[o] = !0);
                                    continue;
                                case "#if":
                                    if (h.src = o, h.noCompile = !0, h.setParent(i), i = h, n)
                                        for (c = o.substr(g).split(t._splitToWordExps3), g = 0; g < c.length; g++)(o = c[g]).length && "defined" != o && (n[o] = !0);
                                    continue;
                                case "#else":
                                    h.src = o, l = (i = i.parent).childs[i.childs.length - 1], h.noCompile = l.noCompile, h.noCompile || (h.condition = l.condition, h.conditionType = 1 == l.conditionType ? 2 : 1, h.text = "//" + h.text + " " + l.text + " " + h.conditionType), h.setParent(i), i = h;
                                    continue;
                                case "#endif":
                                    l = (i = i.parent).childs[i.childs.length - 1], h.noCompile = l.noCompile, h.noCompile || (h.text = "//" + h.text), h.setParent(i);
                                    continue;
                                case "#include":
                                    c = t.splitToWords(o, null);
                                    var x = t.includes[c[1]];
                                    if (!x) throw "ShaderCompile error no this include file:" + c[1];
                                    if ((d = c[0].indexOf("?")) < 0) {
                                        h.setParent(i), o = x.getWith("with" == c[2] ? c[3] : null), this._compileToTree(h, o.split("\n"), 0, a, n), h.text = "";
                                        continue
                                    }
                                    h.setCondition(c[0].substr(d + 1), 1), h.text = x.getWith("with" == c[2] ? c[3] : null);
                                    break;
                                case "#import":
                                    _ = (c = t.splitToWords(o, null))[1], a.push({
                                        node: h,
                                        file: t.includes[_],
                                        ofs: h.text.length
                                    });
                                    continue
                            }
                        } else {
                            if ((l = i.childs[i.childs.length - 1]) && !l.name) {
                                a.length > 0 && t.splitToWords(o, l), f = h, l.text += "\n" + o;
                                continue
                            }
                            a.length > 0 && t.splitToWords(o, h)
                        }
                        h.setParent(i)
                    }
            }, a.createShader = function(t, e, i) {
                var r = {},
                    s = "";
                if (t)
                    for (var a in t) s += "#define " + a + "\n", r[a] = !0;
                var n = this._VS.toscript(r, []),
                    h = this._PS.toscript(r, []);
                return (i || Qt.create)(s + n.join("\n"), s + h.join("\n"), e, this._nameMap)
            }, t._parseOne = function(e, i, r, s, a, n) {
                var h = {
                    type: t.shaderParamsMap[r[s + 1]],
                    name: r[s + 2],
                    size: isNaN(parseInt(r[s + 3])) ? 1 : parseInt(r[s + 3])
                };
                return n && ("attribute" == a ? e.push(h) : i.push(h)), ":" == r[s + 3] && (h.type = r[s + 4], s += 2), s += 2
            }, t.addInclude = function(e, r) {
                if (!r || 0 === r.length) throw new Error("add shader include file err:" + e);
                if (t.includes[e]) throw new Error("add shader include file err, has add:" + e);
                t.includes[e] = new i(r)
            }, t.preGetParams = function(e, i) {
                var r = [e, i],
                    s = {},
                    a = [],
                    n = [],
                    h = {},
                    l = [];
                s.attributes = a, s.uniforms = n, s.defines = h;
                for (var o = 0, u = 0, _ = 0; _ < 2; _++) {
                    r[_] = r[_].replace(t._removeAnnotation, "");
                    var c, f = r[_].match(t._reg);
                    for (o = 0, u = f.length; o < u; o++) {
                        var d = f[o];
                        if ("attribute" == d || "uniform" == d) o = t._parseOne(a, n, f, o, d, !0);
                        else {
                            if ("#define" == d) {
                                l[d = f[++o]] = 1;
                                continue
                            }
                            if ("#ifdef" == d) {
                                h[c = f[++o]] = h[c] || [];
                                for (o++; o < u; o++)
                                    if ("attribute" == (d = f[o]) || "uniform" == d) o = t._parseOne(a, n, f, o, d, l[c]);
                                    else if ("#else" == d)
                                    for (o++; o < u; o++)
                                        if ("attribute" == (d = f[o]) || "uniform" == d) o = t._parseOne(a, n, f, o, d, !l[c]);
                                        else if ("#endif" == d) break
                            }
                        }
                    }
                }
                return s
            }, t.splitToWords = function(t, e) {
                for (var i, r, s = [], a = -1, n = 0, h = t.length; n < h; n++)
                    if (i = t.charAt(n), " \t=+-*/&%!<>()'\",;".indexOf(i) >= 0) {
                        if (a >= 0 && n - a > 1 && (r = t.substr(a, n - a), s.push(r)), '"' == i || "'" == i) {
                            var l = t.indexOf(i, n + 1);
                            if (l < 0) throw "Sharder err:" + t;
                            s.push(t.substr(n + 1, l - n - 1)), n = l, a = -1;
                            continue
                        }
                        "(" == i && e && s.length > 0 && (r = s[s.length - 1] + ";", "vec4;main;".indexOf(r) < 0 && (e.useFuns += r)), a = -1
                    } else a < 0 && (a = n);
                return a < h && h - a > 1 && (r = t.substr(a, h - a), s.push(r)), s
            }, t.IFDEF_NO = 0, t.IFDEF_YES = 1, t.IFDEF_ELSE = 2, t.IFDEF_PARENT = 3, t._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"), t._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"), t._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"), t.includes = {}, r(t, ["shaderParamsMap", function() {
                return this.shaderParamsMap = {
                    float: 5126,
                    int: 5124,
                    bool: 35670,
                    vec2: 35664,
                    vec3: 35665,
                    vec4: 35666,
                    ivec2: 35667,
                    ivec3: 35668,
                    ivec4: 35669,
                    bvec2: 35671,
                    bvec3: 35672,
                    bvec4: 35673,
                    mat2: 35674,
                    mat3: 35675,
                    mat4: 35676,
                    sampler2D: 35678,
                    samplerCube: 35680
                }
            }, "_splitToWordExps3", function() {
                return this._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g")
            }]), t.__init$ = function() {
                e = function() {
                    function t(t) {
                        this.childs = [], this.text = "", this.parent = null, this.name = null, this.noCompile = !1, this.includefiles = null, this.condition = null, this.conditionType = 0, this.useFuns = "", this.z = 0, this.src = null, this.includefiles = t
                    }
                    s(t, "");
                    var e = t.prototype;
                    return e.setParent = function(t) {
                        t.childs.push(this), this.z = t.z + 1, this.parent = t
                    }, e.setCondition = function(t, e) {
                        t && (this.conditionType = e, t = t.replace(/(\s*$)/g, ""), this.condition = function() {
                            return this[t]
                        }, this.condition.__condition = t)
                    }, e.toscript = function(e, i) {
                        return this._toscript(e, i, ++t.__id)
                    }, e._toscript = function(t, e, i) {
                        if (this.childs.length < 1 && !this.text) return e;
                        e.length;
                        if (this.condition) {
                            var r = !!this.condition.call(t);
                            if (2 === this.conditionType && (r = !r), !r) return e
                        }
                        if (this.text && e.push(this.text), this.childs.length > 0 && this.childs.forEach(function(r, s, a) {
                                r._toscript(t, e, i)
                            }), this.includefiles.length > 0 && this.useFuns.length > 0)
                            for (var s, a = 0, n = this.includefiles.length; a < n; a++) this.includefiles[a].curUseID != i && (s = this.includefiles[a].file.getFunsScript(this.useFuns)).length > 0 && (this.includefiles[a].curUseID = i, e[0] = s + e[0]);
                        return e
                    }, t.__id = 1, t
                }(), i = function() {
                    function e(e) {
                        this.script = null, this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "", this.script = e;
                        for (var i = 0, r = 0, s = 0;;) {
                            if ((i = e.indexOf("#begin", i)) < 0) break;
                            for (s = i + 5;;) {
                                if ((s = e.indexOf("#end", s)) < 0) break;
                                if ("i" !== e.charAt(s + 4)) break;
                                s += 5
                            }
                            if (s < 0) throw "add include err,no #end:" + e;
                            r = e.indexOf("\n", i);
                            var a = t.splitToWords(e.substr(i, r - i), null);
                            "code" == a[1] ? this.codes[a[2]] = e.substr(r + 1, s - r - 1) : "function" == a[1] && (r = e.indexOf("function", i), r += "function".length, this.funs[a[3]] = e.substr(r + 1, s - r - 1), this.funnames += a[3] + ";"), i = s + 1
                        }
                    }
                    s(e, "");
                    var i = e.prototype;
                    return i.getWith = function(t) {
                        var e = t ? this.codes[t] : this.script;
                        if (!e) throw "get with error:" + t;
                        return e
                    }, i.getFunsScript = function(t) {
                        var e = "";
                        for (var i in this.funs) t.indexOf(i + ";") >= 0 && (e += this.funs[i]);
                        return e
                    }, e
                }()
            }, t
        }(),
        bt = function() {
            function t() {}
            return s(t, "laya.webgl.WebGL"), t._uint8ArraySlice = function() {
                for (var t = this.length, e = new Uint8Array(this.length), i = 0; i < t; i++) e[i] = this[i];
                return e
            }, t._float32ArraySlice = function() {
                for (var t = this.length, e = new Float32Array(this.length), i = 0; i < t; i++) e[i] = this[i];
                return e
            }, t._uint16ArraySlice = function(t) {
                var e, i = arguments,
                    r = 0,
                    s = 0;
                if (0 === i.length)
                    for (r = this.length, e = new Uint16Array(r), s = 0; s < r; s++) e[s] = this[s];
                else if (2 === i.length) {
                    var a = i[0],
                        n = i[1];
                    if (n > a)
                        for (r = n - a, e = new Uint16Array(r), s = a; s < n; s++) e[s - a] = this[s];
                    else e = new Uint16Array(0)
                }
                return e
            }, t.expandContext = function() {
                var t = d.prototype,
                    e = CanvasRenderingContext2D.prototype;
                e.fillTrangles = t.fillTrangles, Zt.__int__(null), e.setIBVB = function(t, e, i, r, s, a, n, h, l, o) {
                    void 0 === l && (l = 0), void 0 === o && (o = 0), null === i && (this._ib = this._ib || $t.QuadrangleIB, i = this._ib, pt.expandIBQuadrangle(i, r._byteLength / 64 + 8)), this._setIBVB(t, e, i, r, s, a, n, h, l, o)
                }, e.fillTrangles = function(t, e, i, r, s) {
                    this._curMat = this._curMat || b.create(), this._vb = this._vb || Jt.create(), this._ib || (this._ib = $t.create(), pt.fillIBQuadrangle(this._ib, n / 4));
                    var a = this._vb,
                        n = r.length >> 4;
                    pt.fillTranglesVB(a, e, i, r, s || this._curMat, 0, 0), pt.expandIBQuadrangle(this._ib, a._byteLength / 64 + 8);
                    var h = new Et(1, 0);
                    h.textureHost = t;
                    var l = new jt("attribute vec2 position; attribute vec2 texcoord; uniform vec2 size; uniform mat4 mmat; varying vec2 v_texcoord; void main() { vec4 p=vec4(position.xy,0.0,1.0);vec4 pos=mmat*p; gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0); v_texcoord = texcoord; }", "precision mediump float; varying vec2 v_texcoord; uniform sampler2D texture; void main() {vec4 color= texture2D(texture, v_texcoord); color.a*=1.0; gl_FragColor= color;}");
                    a._vertType = 3, this._setIBVB(e, i, this._ib, a, 6 * n, s, l, h, 0, 0)
                }
            }, t.enable = function() {
                if (u.__init__(), A.isConchApp && !A.isConchWebGL) return R.skinAniSprite = function() {
                    return new tt
                }, t.expandContext(), !1;
                if (R.getWebGLContext = function(t) {
                        for (var e, i = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], r = 0; r < i.length; r++) {
                            try {
                                e = t.getContext(i[r], {
                                    stencil: f.isStencil,
                                    alpha: f.isAlpha,
                                    antialias: f.isAntialias,
                                    premultipliedAlpha: f.premultipliedAlpha,
                                    preserveDrawingBuffer: f.preserveDrawingBuffer
                                })
                            } catch (t) {}
                            if (e) return e
                        }
                        return null
                    }, null == (t.mainContext = R.getWebGLContext(A._mainCanvas))) return !1;
                if (A.isWebGL) return !0;
                v.create = function(t, e) {
                    return new te(t, e)
                }, x.create = function(t, e, i, r, s, a, n) {
                    return new Kt(t, e, i, r, s, a, n)
                }, A.WebGL = t, A.isWebGL = !0, ft.__init__(), R.createRenderSprite = function(t, e) {
                    return new St(t, e)
                }, R.createWebGLContext2D = function(t) {
                    return new At(t)
                }, R.changeWebGLSize = function(t, e) {
                    laya.webgl.WebGL.onStageResize(t, e)
                }, R.createGraphics = function() {
                    return new Tt
                };
                var e = R.createFilterAction;
                return R.createFilterAction = e || function(t) {
                    return new wt
                }, R.clear = function(t) {
                    vt.worldScissorTest && laya.webgl.WebGL.mainContext.disable(3089);
                    var e = A.context.ctx,
                        i = 0 == e._submits._length || f.preserveDrawingBuffer ? c.create(t)._color : M._wgColor;
                    i && e.clearBG(i[0], i[1], i[2], i[3]), vt.clear()
                }, R.addToAtlas = function(t, e) {
                    void 0 === e && (e = !1);
                    var r = t.bitmap;
                    A.optimizeTextureMemory(t.url, t) ? i.__typeof(r, "laya.webgl.resource.IMergeAtlasBitmap") && r.allowMerageInAtlas && r.on("recovered", t, t.addTextureToAtlas) : r.enableMerageInAtlas = !1
                }, R.isAtlas = function(t) {
                    return t instanceof laya.webgl.atlas.AtlasWebGLCanvas
                }, k._enable(), R.beginFlush = function() {
                    for (var t = k.instance, e = t.getAtlaserCount(), i = 0; i < e; i++) {
                        var r = t.getAtlaserByIndex(i).texture;
                        r._flashCacheImageNeedFlush && R.flashFlushImage(r)
                    }
                }, R.drawToCanvas = function(t, e, i, r, s, a) {
                    (i <= 0 || r <= 0) && console.log("[error] canvasWidth and canvasHeight should greater than zero"), s -= t.x, a -= t.y, i |= 1, r |= 1, s |= 1, a |= 1;
                    var n = Nt.create(i, r, 6408, 5121, 0, !1);
                    n.start(), n.clear(0, 0, 0, 0), A.context.clear(), E.renders[e]._fun(t, A.context, s, vt.height - r + a), A.context.flush(), n.end();
                    var h = n.getData(0, 0, i, r);
                    if (n.recycle(), h.byteLength == i * r * 4) {
                        var l = new zt;
                        l._canvas = u.createElement("canvas"), l.size(i, r);
                        var o = l._canvas.getContext("2d");
                        u.canvas.size(i, r);
                        var _ = u.context,
                            c = _.createImageData(i, r);
                        return c.data.set(new Uint8ClampedArray(h.buffer)), l._imgData = c, _.putImageData(c, 0, 0), o.save(), o.translate(0, r), o.scale(1, -1), o.drawImage(u.canvas.source, 0, 0), o.restore(), l
                    }
                    console.log("drawToCanvas error: w:" + i + ",h:" + r + ",datalen:" + h.byteLength)
                }, R.createFilterAction = function(t) {
                    var e;
                    switch (t) {
                        case 32:
                            e = new wt
                    }
                    return e
                }, R.addTextureToAtlas = function(t) {
                    t._uvID++, k._atlasRestore++, t.bitmap.enableMerageInAtlas && k.instance.addToAtlas(t)
                }, R.getTexturePixels = function(t, e, i, r, s) {
                    A.context.ctx.clear();
                    var a = new I;
                    a.graphics.drawTexture(t, -e, -i);
                    var n = Nt.create(r, s);
                    n.start(), n.clear(0, 0, 0, 0), a.render(A.context, 0, 0), A.context.ctx.flush(), n.end();
                    for (var h = n.getData(0, 0, r, s), l = [], o = 0, u = s - 1; u >= 0; u--)
                        for (var _ = 0; _ < r; _++) o = 4 * (u * r + _), l.push(h[o]), l.push(h[o + 1]), l.push(h[o + 2]), l.push(h[o + 3]);
                    return l
                }, R.skinAniSprite = function() {
                    return new tt
                }, g.create = function(t, e) {
                    var i = new zt;
                    return i._imgData = e, i.flipY = !1, i
                }, m._filterStart = function(t, e, i, r, s) {
                    var a = t.getValue("bounds"),
                        n = Nt.create(a.width, a.height);
                    if (n.start(), n.clear(0, 0, 0, 0), t.addValue("src", n), t.addValue("ScissorTest", vt.worldScissorTest), vt.worldScissorTest) {
                        var h = new T;
                        h.copyFrom(i.ctx._clipRect), t.addValue("clipRect", h), vt.worldScissorTest = !1, laya.webgl.WebGL.mainContext.disable(3089)
                    }
                }, m._filterEnd = function(t, e, i, r, s) {
                    var a = t.getValue("bounds");
                    t.getValue("src").end();
                    var n = Nt.create(a.width, a.height);
                    n.start(), n.clear(0, 0, 0, 0), t.addValue("out", n), e._set$P("_filterCache", n), e._set$P("_isHaveGlowFilter", t.getValue("_isHaveGlowFilter"))
                }, m._EndTarget = function(t, e) {
                    t.getValue("src").recycle();
                    t.getValue("out").end();
                    if (t.getValue("ScissorTest")) {
                        vt.worldScissorTest = !0, laya.webgl.WebGL.mainContext.enable(3089), e.ctx.save();
                        var i = t.getValue("clipRect");
                        e.ctx.clipRect(i.x, i.y, i.width, i.height)
                    }
                }, m._useSrc = function(t) {
                    var e = t.getValue("out");
                    e.end(), (e = t.getValue("src")).start(), e.clear(0, 0, 0, 0)
                }, m._endSrc = function(t) {
                    t.getValue("src").end()
                }, m._useOut = function(t) {
                    var e = t.getValue("src");
                    e.end(), (e = t.getValue("out")).start(), e.clear(0, 0, 0, 0)
                }, m._endOut = function(t) {
                    t.getValue("out").end()
                }, m._recycleScope = function(t) {
                    t.recycle()
                }, m._filter = function(t, e, i, r) {
                    var s = this._next;
                    if (s) {
                        var a = t.filters,
                            n = a.length;
                        if (1 == n && 32 == a[0].type) return e.ctx.save(), e.ctx.setFilters([a[0]]), s._fun.call(s, t, e, i, r), void e.ctx.restore();
                        var h, l, o = ht.create(),
                            u = y.TEMP,
                            _ = e.ctx._getTransformMatrix(),
                            c = b.create();
                        _.copyTo(c);
                        var f = 0,
                            d = 0,
                            p = !1,
                            g = t._$P._filterCache ? t._$P._filterCache : null;
                        if (!g || t._repaint) {
                            p = t._isHaveGlowFilter(), o.addValue("_isHaveGlowFilter", p), p && (f = 50, d = 25), (l = new T).copyFrom(t.getSelfBounds()), l.x += t.x, l.y += t.y, l.x -= t.pivotX + 4, l.y -= t.pivotY + 4;
                            var v = l.x,
                                x = l.y;
                            if (l.width += f + 8, l.height += f + 8, u.x = l.x * c.a + l.y * c.c, u.y = l.y * c.d + l.x * c.b, l.x = u.x, l.y = u.y, u.x = l.width * c.a + l.height * c.c, u.y = l.height * c.d + l.width * c.b, l.width = u.x, l.height = u.y, l.width <= 0 || l.height <= 0) return;
                            g && g.recycle(), o.addValue("bounds", l);
                            var A = nt.create([o, t, e, 0, 0], m._filterStart);
                            e.addRenderObject(A), e.ctx._renderKey = 0, e.ctx._shader2D.glTexture = null;
                            var E = t.x - v + d,
                                S = t.y - x + d;
                            s._fun.call(s, t, e, E, S), A = nt.create([o, t, e, 0, 0], m._filterEnd), e.addRenderObject(A);
                            for (var w = 0; w < n; w++) {
                                0 != w && (A = nt.create([o], m._useSrc), e.addRenderObject(A), h = Et.create(1, 0), b.TEMP.identity(), e.ctx.drawTarget(o, 0, 0, l.width, l.height, b.TEMP, "out", h, null, G.TOINT.overlay), A = nt.create([o], m._useOut), e.addRenderObject(A));
                                a[w].action.apply3d(o, t, e, 0, 0)
                            }
                            A = nt.create([o, e], m._EndTarget), e.addRenderObject(A)
                        } else {
                            if ((p = !!t._$P._isHaveGlowFilter && t._$P._isHaveGlowFilter) && (f = 50, d = 25), (l = t.getBounds()).width <= 0 || l.height <= 0) return;
                            l.width += f, l.height += f, u.x = l.x * c.a + l.y * c.c, u.y = l.y * c.d + l.x * c.b, l.x = u.x, l.y = u.y, u.x = l.width * c.a + l.height * c.c, u.y = l.height * c.d + l.width * c.b, l.width = u.x, l.height = u.y, o.addValue("out", g)
                        }
                        i = i - d - t.x, r = r - d - t.y, u.setTo(i, r), c.transformPoint(u), i = u.x + l.x, r = u.y + l.y, h = Et.create(1, 0), b.TEMP.identity(), e.ctx.drawTarget(o, i, r, l.width, l.height, b.TEMP, "out", h, null, G.TOINT.overlay), A = nt.create([o], m._recycleScope), e.addRenderObject(A), c.destroy()
                    }
                }, Float32Array.prototype.slice || (Float32Array.prototype.slice = t._float32ArraySlice), Uint16Array.prototype.slice || (Uint16Array.prototype.slice = t._uint16ArraySlice), Uint8Array.prototype.slice || (Uint8Array.prototype.slice = t._uint8ArraySlice), !0
            }, t.onStageResize = function(e, i) {
                null != t.mainContext && (t.mainContext.viewport(0, 0, e, i), vt.width = e, vt.height = i)
            }, t.onInvalidGLRes = function() {
                k.instance.freeAll(), w.releaseContentManagers(!0), t.doNodeRepaint(i.stage), t.mainContext.viewport(0, 0, vt.width, vt.height), i.stage.event("devicelost")
            }, t.doNodeRepaint = function(e) {
                0 == e.numChildren && e.repaint();
                for (var i = 0; i < e.numChildren; i++) t.doNodeRepaint(e.getChildAt(i))
            }, t.init = function(e, i, r) {
                t.mainCanvas = e, g._createContext = function(t) {
                    return new At(t)
                }, zt._createContext = function(t) {
                    return new At(t)
                };
                var s = laya.webgl.WebGL.mainContext;
                if (null != s.getShaderPrecisionFormat) {
                    var a = s.getShaderPrecisionFormat(35633, 36338),
                        n = s.getShaderPrecisionFormat(35632, 36338);
                    t.shaderHighPrecision = !(!a.precision || !n.precision)
                } else t.shaderHighPrecision = !1;
                if (t.compressAstc = s.getExtension("WEBGL_compressed_texture_astc"), t.compressAtc = s.getExtension("WEBGL_compressed_texture_atc"), t.compressEtc = s.getExtension("WEBGL_compressed_texture_etc"), t.compressEtc1 = s.getExtension("WEBGL_compressed_texture_etc1"), t.compressPvrtc = s.getExtension("WEBGL_compressed_texture_pvrtc"), t.compressS3tc = s.getExtension("WEBGL_compressed_texture_s3tc"), t.compressS3tc_srgb = s.getExtension("WEBGL_compressed_texture_s3tc_srgb"), s.deleteTexture1 = s.deleteTexture, s.deleteTexture = function(t) {
                        t == yt.curBindTexValue && (yt.curBindTexValue = null), s.deleteTexture1(t)
                    }, t.onStageResize(i, r), null == t.mainContext) throw new Error("webGL getContext err!");
                P.__init__(), k.__init__(), It.__init__(), at.__init__(), At.__init__(), Et.__init__(), $.__init__(), Zt.__int__(s), G._init_(s), A.isConchApp && conch.setOnInvalidGLRes(t.onInvalidGLRes)
            }, t.compressAstc = null, t.compressAtc = null, t.compressEtc = null, t.compressEtc1 = null, t.compressPvrtc = null, t.compressS3tc = null, t.compressS3tc_srgb = null, t.mainCanvas = null, t.mainContext = null, t.antialias = !0, t.shaderHighPrecision = !1, t._bg_null = [0, 0, 0, 0], t
        }(),
        yt = function() {
            function t() {}
            return s(t, "laya.webgl.WebGLContext"), t.UseProgram = function(e) {
                return t._useProgram !== e && (bt.mainContext.useProgram(e), t._useProgram = e, !0)
            }, t.setDepthTest = function(e, i) {
                i !== t._depthTest && (t._depthTest = i, i ? e.enable(2929) : e.disable(2929))
            }, t.setDepthMask = function(e, i) {
                i !== t._depthMask && (t._depthMask = i, e.depthMask(i))
            }, t.setDepthFunc = function(e, i) {
                i !== t._depthFunc && (t._depthFunc = i, e.depthFunc(i))
            }, t.setBlend = function(e, i) {
                i !== t._blend && (t._blend = i, i ? e.enable(3042) : e.disable(3042))
            }, t.setBlendFunc = function(e, i, r) {
                (i !== t._sFactor || r !== t._dFactor) && (t._sFactor = i, t._dFactor = r, e.blendFunc(i, r))
            }, t.setCullFace = function(e, i) {
                i !== t._cullFace && (t._cullFace = i, i ? e.enable(2884) : e.disable(2884))
            }, t.setFrontFace = function(e, i) {
                i !== t._frontFace && (t._frontFace = i, e.frontFace(i))
            }, t.bindTexture = function(e, i, r) {
                e.bindTexture(i, r), t.curBindTexTarget = i, t.curBindTexValue = r
            }, t.DEPTH_BUFFER_BIT = 256, t.STENCIL_BUFFER_BIT = 1024, t.COLOR_BUFFER_BIT = 16384, t.POINTS = 0, t.LINES = 1, t.LINE_LOOP = 2, t.LINE_STRIP = 3, t.TRIANGLES = 4, t.TRIANGLE_STRIP = 5, t.TRIANGLE_FAN = 6, t.ZERO = 0, t.ONE = 1, t.SRC_COLOR = 768, t.ONE_MINUS_SRC_COLOR = 769, t.SRC_ALPHA = 770, t.ONE_MINUS_SRC_ALPHA = 771, t.DST_ALPHA = 772, t.ONE_MINUS_DST_ALPHA = 773, t.DST_COLOR = 774, t.ONE_MINUS_DST_COLOR = 775, t.SRC_ALPHA_SATURATE = 776, t.FUNC_ADD = 32774, t.BLEND_EQUATION = 32777, t.BLEND_EQUATION_RGB = 32777, t.BLEND_EQUATION_ALPHA = 34877, t.FUNC_SUBTRACT = 32778, t.FUNC_REVERSE_SUBTRACT = 32779, t.BLEND_DST_RGB = 32968, t.BLEND_SRC_RGB = 32969, t.BLEND_DST_ALPHA = 32970, t.BLEND_SRC_ALPHA = 32971, t.CONSTANT_COLOR = 32769, t.ONE_MINUS_CONSTANT_COLOR = 32770, t.CONSTANT_ALPHA = 32771, t.ONE_MINUS_CONSTANT_ALPHA = 32772, t.BLEND_COLOR = 32773, t.ARRAY_BUFFER = 34962, t.ELEMENT_ARRAY_BUFFER = 34963, t.ARRAY_BUFFER_BINDING = 34964, t.ELEMENT_ARRAY_BUFFER_BINDING = 34965, t.STREAM_DRAW = 35040, t.STATIC_DRAW = 35044, t.DYNAMIC_DRAW = 35048, t.BUFFER_SIZE = 34660, t.BUFFER_USAGE = 34661, t.CURRENT_VERTEX_ATTRIB = 34342, t.FRONT = 1028, t.BACK = 1029, t.CULL_FACE = 2884, t.FRONT_AND_BACK = 1032, t.BLEND = 3042, t.DITHER = 3024, t.STENCIL_TEST = 2960, t.DEPTH_TEST = 2929, t.SCISSOR_TEST = 3089, t.POLYGON_OFFSET_FILL = 32823, t.SAMPLE_ALPHA_TO_COVERAGE = 32926, t.SAMPLE_COVERAGE = 32928, t.NO_ERROR = 0, t.INVALID_ENUM = 1280, t.INVALID_VALUE = 1281, t.INVALID_OPERATION = 1282, t.OUT_OF_MEMORY = 1285, t.CW = 2304, t.CCW = 2305, t.LINE_WIDTH = 2849, t.ALIASED_POINT_SIZE_RANGE = 33901, t.ALIASED_LINE_WIDTH_RANGE = 33902, t.CULL_FACE_MODE = 2885, t.FRONT_FACE = 2886, t.DEPTH_RANGE = 2928, t.DEPTH_WRITEMASK = 2930, t.DEPTH_CLEAR_VALUE = 2931, t.DEPTH_FUNC = 2932, t.STENCIL_CLEAR_VALUE = 2961, t.STENCIL_FUNC = 2962, t.STENCIL_FAIL = 2964, t.STENCIL_PASS_DEPTH_FAIL = 2965, t.STENCIL_PASS_DEPTH_PASS = 2966, t.STENCIL_REF = 2967, t.STENCIL_VALUE_MASK = 2963, t.STENCIL_WRITEMASK = 2968, t.STENCIL_BACK_FUNC = 34816, t.STENCIL_BACK_FAIL = 34817, t.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, t.STENCIL_BACK_PASS_DEPTH_PASS = 34819, t.STENCIL_BACK_REF = 36003, t.STENCIL_BACK_VALUE_MASK = 36004, t.STENCIL_BACK_WRITEMASK = 36005, t.VIEWPORT = 2978, t.SCISSOR_BOX = 3088, t.COLOR_CLEAR_VALUE = 3106, t.COLOR_WRITEMASK = 3107, t.UNPACK_ALIGNMENT = 3317, t.PACK_ALIGNMENT = 3333, t.MAX_TEXTURE_SIZE = 3379, t.MAX_VIEWPORT_DIMS = 3386, t.SUBPIXEL_BITS = 3408, t.RED_BITS = 3410, t.GREEN_BITS = 3411, t.BLUE_BITS = 3412, t.ALPHA_BITS = 3413, t.DEPTH_BITS = 3414, t.STENCIL_BITS = 3415, t.POLYGON_OFFSET_UNITS = 10752, t.POLYGON_OFFSET_FACTOR = 32824, t.TEXTURE_BINDING_2D = 32873, t.SAMPLE_BUFFERS = 32936, t.SAMPLES = 32937, t.SAMPLE_COVERAGE_VALUE = 32938, t.SAMPLE_COVERAGE_INVERT = 32939, t.NUM_COMPRESSED_TEXTURE_FORMATS = 34466, t.COMPRESSED_TEXTURE_FORMATS = 34467, t.DONT_CARE = 4352, t.FASTEST = 4353, t.NICEST = 4354, t.GENERATE_MIPMAP_HINT = 33170, t.BYTE = 5120, t.UNSIGNED_BYTE = 5121, t.SHORT = 5122, t.UNSIGNED_SHORT = 5123, t.INT = 5124, t.UNSIGNED_INT = 5125, t.FLOAT = 5126, t.DEPTH_COMPONENT = 6402, t.ALPHA = 6406, t.RGB = 6407, t.RGBA = 6408, t.LUMINANCE = 6409, t.LUMINANCE_ALPHA = 6410, t.UNSIGNED_SHORT_4_4_4_4 = 32819, t.UNSIGNED_SHORT_5_5_5_1 = 32820, t.UNSIGNED_SHORT_5_6_5 = 33635, t.FRAGMENT_SHADER = 35632, t.VERTEX_SHADER = 35633, t.MAX_VERTEX_ATTRIBS = 34921, t.MAX_VERTEX_UNIFORM_VECTORS = 36347, t.MAX_VARYING_VECTORS = 36348, t.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, t.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, t.MAX_TEXTURE_IMAGE_UNITS = 34930, t.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, t.SHADER_TYPE = 35663, t.DELETE_STATUS = 35712, t.LINK_STATUS = 35714, t.VALIDATE_STATUS = 35715, t.ATTACHED_SHADERS = 35717, t.ACTIVE_UNIFORMS = 35718, t.ACTIVE_ATTRIBUTES = 35721, t.SHADING_LANGUAGE_VERSION = 35724, t.CURRENT_PROGRAM = 35725, t.NEVER = 512, t.LESS = 513, t.EQUAL = 514, t.LEQUAL = 515, t.GREATER = 516, t.NOTEQUAL = 517, t.GEQUAL = 518, t.ALWAYS = 519, t.KEEP = 7680, t.REPLACE = 7681, t.INCR = 7682, t.DECR = 7683, t.INVERT = 5386, t.INCR_WRAP = 34055, t.DECR_WRAP = 34056, t.VENDOR = 7936, t.RENDERER = 7937, t.VERSION = 7938, t.NEAREST = 9728, t.LINEAR = 9729, t.NEAREST_MIPMAP_NEAREST = 9984, t.LINEAR_MIPMAP_NEAREST = 9985, t.NEAREST_MIPMAP_LINEAR = 9986, t.LINEAR_MIPMAP_LINEAR = 9987, t.TEXTURE_MAG_FILTER = 10240, t.TEXTURE_MIN_FILTER = 10241, t.TEXTURE_WRAP_S = 10242, t.TEXTURE_WRAP_T = 10243, t.TEXTURE_2D = 3553, t.TEXTURE = 5890, t.TEXTURE_CUBE_MAP = 34067, t.TEXTURE_BINDING_CUBE_MAP = 34068, t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, t.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, t.TEXTURE0 = 33984, t.TEXTURE1 = 33985, t.TEXTURE2 = 33986, t.TEXTURE3 = 33987, t.TEXTURE4 = 33988, t.TEXTURE5 = 33989, t.TEXTURE6 = 33990, t.TEXTURE7 = 33991, t.TEXTURE8 = 33992, t.TEXTURE9 = 33993, t.TEXTURE10 = 33994, t.TEXTURE11 = 33995, t.TEXTURE12 = 33996, t.TEXTURE13 = 33997, t.TEXTURE14 = 33998, t.TEXTURE15 = 33999, t.TEXTURE16 = 34e3, t.TEXTURE17 = 34001, t.TEXTURE18 = 34002, t.TEXTURE19 = 34003, t.TEXTURE20 = 34004, t.TEXTURE21 = 34005, t.TEXTURE22 = 34006, t.TEXTURE23 = 34007, t.TEXTURE24 = 34008, t.TEXTURE25 = 34009, t.TEXTURE26 = 34010, t.TEXTURE27 = 34011, t.TEXTURE28 = 34012, t.TEXTURE29 = 34013, t.TEXTURE30 = 34014, t.TEXTURE31 = 34015, t.ACTIVE_TEXTURE = 34016, t.REPEAT = 10497, t.CLAMP_TO_EDGE = 33071, t.MIRRORED_REPEAT = 33648, t.FLOAT_VEC2 = 35664, t.FLOAT_VEC3 = 35665, t.FLOAT_VEC4 = 35666, t.INT_VEC2 = 35667, t.INT_VEC3 = 35668, t.INT_VEC4 = 35669, t.BOOL = 35670, t.BOOL_VEC2 = 35671, t.BOOL_VEC3 = 35672, t.BOOL_VEC4 = 35673, t.FLOAT_MAT2 = 35674, t.FLOAT_MAT3 = 35675, t.FLOAT_MAT4 = 35676, t.SAMPLER_2D = 35678, t.SAMPLER_CUBE = 35680, t.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, t.VERTEX_ATTRIB_ARRAY_SIZE = 34339, t.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, t.VERTEX_ATTRIB_ARRAY_TYPE = 34341, t.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, t.VERTEX_ATTRIB_ARRAY_POINTER = 34373, t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, t.COMPILE_STATUS = 35713, t.LOW_FLOAT = 36336, t.MEDIUM_FLOAT = 36337, t.HIGH_FLOAT = 36338, t.LOW_INT = 36339, t.MEDIUM_INT = 36340, t.HIGH_INT = 36341, t.FRAMEBUFFER = 36160, t.RENDERBUFFER = 36161, t.RGBA4 = 32854, t.RGB5_A1 = 32855, t.RGB565 = 36194, t.DEPTH_COMPONENT16 = 33189, t.STENCIL_INDEX = 6401, t.STENCIL_INDEX8 = 36168, t.DEPTH_STENCIL = 34041, t.RENDERBUFFER_WIDTH = 36162, t.RENDERBUFFER_HEIGHT = 36163, t.RENDERBUFFER_INTERNAL_FORMAT = 36164, t.RENDERBUFFER_RED_SIZE = 36176, t.RENDERBUFFER_GREEN_SIZE = 36177, t.RENDERBUFFER_BLUE_SIZE = 36178, t.RENDERBUFFER_ALPHA_SIZE = 36179, t.RENDERBUFFER_DEPTH_SIZE = 36180, t.RENDERBUFFER_STENCIL_SIZE = 36181, t.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, t.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, t.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, t.COLOR_ATTACHMENT0 = 36064, t.DEPTH_ATTACHMENT = 36096, t.STENCIL_ATTACHMENT = 36128, t.DEPTH_STENCIL_ATTACHMENT = 33306, t.NONE = 0, t.FRAMEBUFFER_COMPLETE = 36053, t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, t.FRAMEBUFFER_UNSUPPORTED = 36061, t.FRAMEBUFFER_BINDING = 36006, t.RENDERBUFFER_BINDING = 36007, t.MAX_RENDERBUFFER_SIZE = 34024, t.INVALID_FRAMEBUFFER_OPERATION = 1286, t.UNPACK_FLIP_Y_WEBGL = 37440, t.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, t.CONTEXT_LOST_WEBGL = 37442, t.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, t.BROWSER_DEFAULT_WEBGL = 37444, t._useProgram = null, t._depthTest = !0, t._depthMask = !0, t._blend = !1, t._cullFace = !1, t.curBindTexTarget = null, t.curBindTexValue = null, r(t, ["_depthFunc", function() {
                return this._depthFunc = 513
            }, "_sFactor", function() {
                return this._sFactor = 1
            }, "_dFactor", function() {
                return this._dFactor = 0
            }, "_frontFace", function() {
                return this._frontFace = 2305
            }]), t
        }(),
        Tt = function(t) {
            function e() {
                e.__super.call(this)
            }
            s(e, "laya.webgl.display.GraphicsGL", p);
            var i = e.prototype;
            return i.setShader = function(t) {
                this._saveToCmd(A.context._setShader, [t])
            }, i.setIBVB = function(t, e, i, r, s, a) {
                this._saveToCmd(A.context._setIBVB, [t, e, i, r, s, a])
            }, i.drawParticle = function(t, e, i) {
                var r = R.createParticleTemplate2D(i);
                r.x = t, r.y = e, this._saveToCmd(A.context._drawParticle, [r])
            }, e
        }(),
        At = function(t) {
            function e(t) {
                this._x = 0, this._y = 0, this._id = ++e._COUNT, this._path = null, this._drawCount = 1, this._maxNumEle = 0, this._clear = !1, this._isMain = !1, this._atlasResourceChange = 0, this._submits = null, this._curSubmit = null, this._ib = null, this._vb = null, this._nBlendType = 0, this._saveMark = null, this._shader2D = null, this.meshlist = [], this.mId = -1, this.mHaveKey = !1, this.mHaveLineKey = !1, this.mX = 0, this.mY = 0, e.__super.call(this), this._width = 99999999, this._height = 99999999, this._clipRect = e.MAXCLIPRECT, this.mOutPoint, this._canvas = t, e._contextcount++, A.isFlash ? (this._ib = $t.create(35044), pt.fillIBQuadrangle(this._ib, 16)) : this._ib = $t.QuadrangleIB, this.clear()
            }
            var n;
            s(e, "laya.webgl.canvas.WebGLContext2D", d);
            var h = e.prototype;
            return h.setIsMainContext = function() {
                this._isMain = !0
            }, h.clearBG = function(t, e, i, r) {
                var s = bt.mainContext;
                s.clearColor(t, e, i, r), s.clear(16384)
            }, h._getSubmits = function() {
                return this._submits
            }, h._releaseMem = function() {
                if (this._submits) {
                    this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(), this._shader2D = null;
                    for (var t = 0, e = this._submits._length; t < e; t++) this._submits[t].releaseRender();
                    this._submits.length = 0, this._submits._length = 0, this._submits = null, this._curSubmit = null, this._path && this._path.recover(), this._path = null, this._other && (this._other.font = null), this._save = null, this._vb && (this._vb.releaseResource(), this._vb.destroy(), this._vb.destory(), this._vb = null)
                }
            }, h.destroy = function() {
                --e._contextcount, this.sprite = null, this._releaseMem(), this._targets && this._targets.destroy(), this._targets = null, this._canvas = null, this._ib && this._ib != $t.QuadrangleIB && this._ib.releaseResource()
            }, h.clear = function() {
                this._submits || (this._other = n.DEFAULT, this._curMat = b.create(), this._vb = Jt.create(-1), this._submits = [], this._save = [Q.Create(this)], this._save.length = 10, this._shader2D = new $, this._triangleMesh = Ft.getAMesh()), this._vb.clear(), this._targets && (this._targets.repaint = !0), this._other = n.DEFAULT, this._clear = !0, this._repaint = !1, this._drawCount = 1, this._renderKey = 0, this._other.lineWidth = this._shader2D.ALPHA = 1, this._nBlendType = 0, this._clipRect = e.MAXCLIPRECT, this._curSubmit = at.RENDERBASE, this._shader2D.glTexture = null, this._shader2D.fillStyle = this._shader2D.strokeStyle = W.DEFAULT;
                for (var t = 0, i = this._submits._length; t < i; t++) this._submits[t].releaseRender();
                this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0], this._save._length = 1
            }, h.size = function(t, e) {
                if (this._width != t || this._height != e)
                    if (0 == t || 0 == e) {
                        0 != this._vb._byteLength && (this._width = t, this._height = e, this._vb.clear(), this._vb.upload());
                        for (var i = 0, r = this._submits._length; i < r; i++) this._submits[i].releaseRender();
                        this._submits.length = 0, this._submits._length = 0, this._curSubmit = null, this._path && this._path.recover(), this._path = null, this.sprite = null, this._targets && this._targets.destroy(), this._targets = null
                    } else this._width = t, this._height = e, this._targets && this._targets.size(t, e), this._canvas.memorySize -= this._canvas.memorySize;
                0 === t && 0 === e && this._releaseMem()
            }, h._getTransformMatrix = function() {
                return this._curMat
            }, h.translate = function(t, e) {
                0 === t && 0 === e || (q.save(this), this._curMat.bTransform && (Z.save(this), this._curMat.transformPointN(y.TEMP.setTo(t, e)), t = y.TEMP.x, e = y.TEMP.y), this._x += t, this._y += e)
            }, h.save = function() {
                this._save[this._save._length++] = Q.Create(this)
            }, h.restore = function() {
                var t = this._save._length;
                if (!(t < 1))
                    for (var e = t - 1; e >= 0; e--) {
                        var i = this._save[e];
                        if (i.restore(this), i.isSaveMark()) return void(this._save._length = e)
                    }
            }, h._fillText = function(t, e, i, r, s, a, n, h, l, o) {
                void 0 === o && (o = 0);
                var u = this._shader2D,
                    _ = this._curSubmit.shaderValue,
                    f = s ? dt.create(s) : this._other.font;
                if (k.enabled) u.ALPHA !== _.ALPHA && (u.glTexture = null), ft.drawText(this, t, e, this._curMat, f, l || this._other.textAlign, a, n, h, i, r, o);
                else {
                    this._shader2D.defines.getValue();
                    var d = a ? c.create(a)._color : u.colorAdd;
                    u.ALPHA === _.ALPHA && d === u.colorAdd && _.colorAdd === u.colorAdd || (u.glTexture = null, u.colorAdd = d), ft.drawText(this, t, e, this._curMat, f, l || this._other.textAlign, a, n, h, i, r, o)
                }
            }, h.fillWords = function(t, e, i, r, s, a) {
                this._fillText(null, t, e, i, r, s, null, -1, null, a)
            }, h.fillBorderWords = function(t, e, i, r, s, a, n) {
                this._fillBorderText(null, t, e, i, r, s, a, n, null)
            }, h.fillText = function(t, e, i, r, s, a) {
                this._fillText(t, null, e, i, r, s, null, -1, a)
            }, h.strokeText = function(t, e, i, r, s, a, n) {
                this._fillText(t, null, e, i, r, null, s, a || 1, n)
            }, h.fillBorderText = function(t, e, i, r, s, a, n, h) {
                this._fillBorderText(t, null, e, i, r, s, a, n, h)
            }, h._fillBorderText = function(t, i, r, s, a, n, h, l, o) {
                if (!k.enabled) return this._fillText(t, i, r, s, a, null, h, l || 1, o), void this._fillText(t, i, r, s, a, n, null, -1, o);
                var u = this._shader2D,
                    _ = this._curSubmit.shaderValue;
                u.ALPHA !== _.ALPHA && (u.glTexture = null);
                var c = a ? (e._fontTemp.setFont(a), e._fontTemp) : this._other.font;
                ft.drawText(this, t, i, this._curMat, c, o || this._other.textAlign, n, h, l || 1, r, s, 0)
            }, h.fillRect = function(t, e, i, r, s) {
                var a = this._vb;
                if (pt.fillRectImgVb(a, this._clipRect, t, e, i, r, F.DEF_UV, this._curMat, this._x, this._y, 0, 0)) {
                    this._renderKey = 0;
                    var n = this._shader2D.fillStyle;
                    s && (this._shader2D.fillStyle = W.create(s));
                    var h = this._shader2D,
                        l = this._curSubmit.shaderValue;
                    if (h.fillStyle !== l.fillStyle || h.ALPHA !== l.ALPHA) {
                        h.glTexture = null;
                        var o = this._curSubmit = at.createSubmit(this, this._ib, a, (a._byteLength - 64) / 32 * 3, Et.create(2, 0));
                        o.shaderValue.color = h.fillStyle._color._color, o.shaderValue.ALPHA = h.ALPHA, this._submits[this._submits._length++] = o
                    }
                    this._curSubmit._numEle += 6, this._shader2D.fillStyle = n
                }
            }, h.fillTexture = function(t, e, r, s, a, n, h, l) {
                if (t.loaded && t.bitmap && t.source) {
                    var o = this._vb,
                        u = t.bitmap.width,
                        _ = t.bitmap.height,
                        c = t.uv,
                        f = h.x % t.width,
                        d = h.y % t.height;
                    if (u != l.w || _ != l.h) {
                        if (!l.w && !l.h) switch (l.oy = l.ox = 0, n) {
                            case "repeat":
                                l.width = s, l.height = a;
                                break;
                            case "repeat-x":
                                l.width = s, d < 0 ? t.height + d > a ? l.height = a : l.height = t.height + d : (l.oy = d, t.height + d > a ? l.height = a - d : l.height = t.height);
                                break;
                            case "repeat-y":
                                f < 0 ? t.width + f > s ? l.width = s : l.width = t.width + f : (l.ox = f, t.width + f > s ? l.width = s - f : l.width = t.width), l.height = a;
                                break;
                            default:
                                l.width = s, l.height = a
                        }
                        l.w = u, l.h = _, l.uv = [0, 0, l.width / u, 0, l.width / u, l.height / _, 0, l.height / _]
                    }
                    if (e += l.ox, r += l.oy, f -= l.ox, d -= l.oy, pt.fillRectImgVb(o, this._clipRect, e, r, l.width, l.height, l.uv, this._curMat, this._x, this._y, 0, 0)) {
                        this._renderKey = 0;
                        var m = Dt.create(this, this._ib, o, (o._byteLength - 64) / 32 * 3, Et.create(256, 0));
                        this._submits[this._submits._length++] = m;
                        var p = m.shaderValue;
                        p.textureHost = t;
                        var g = c[0] * u,
                            v = c[1] * _,
                            x = (c[2] - c[0]) * u,
                            b = (c[5] - c[3]) * _,
                            y = -f / u,
                            T = -d / _;
                        p.u_TexRange[0] = g / u, p.u_TexRange[1] = x / u, p.u_TexRange[2] = v / _, p.u_TexRange[3] = b / _, p.u_offset[0] = y, p.u_offset[1] = T, k.enabled && !this._isMain && m.addTexture(t, (o._byteLength >> 2) - 16), this._curSubmit = m, m._renderType = 10017, m._numEle += 6
                    }
                } else this.sprite && i.timer.callLater(this, this._repaintSprite)
            }, h.setShader = function(t) {
                Y.save(this, 1048576, this._shader2D, !0), this._shader2D.shader = t
            }, h.setFilters = function(t) {
                Y.save(this, 2097152, this._shader2D, !0), this._shader2D.filters = t, this._curSubmit = at.RENDERBASE, this._renderKey = 0, this._drawCount++
            }, h.drawTexture = function(t, e, i, r, s, a, n) {
                this._drawTextureM(t, e, i, r, s, a, n, null, 1)
            }, h.addTextureVb = function(t, e, i) {
                var r = this._curSubmit._vb || this._vb,
                    s = r._byteLength >> 2;
                r.byteLength = s + 16 << 2;
                for (var a = r.getFloat32Array(), n = 0; n < 16; n += 4) a[s++] = t[n] + e, a[s++] = t[n + 1] + i, a[s++] = t[n + 2], a[s++] = t[n + 3];
                this._curSubmit._numEle += 6, this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle), r._upload = !0
            }, h.willDrawTexture = function(t, e) {
                if (!(t.loaded && t.bitmap && t.source)) return this.sprite && i.timer.callLater(this, this._repaintSprite), 0;
                var r = t.bitmap,
                    s = r.id + this._shader2D.ALPHA * e + 10016;
                if (s == this._renderKey) return s;
                var a = this._shader2D,
                    n = a.ALPHA,
                    h = this._curSubmit.shaderValue;
                a.ALPHA *= e, this._renderKey = s, this._drawCount++, a.glTexture = r;
                var l = this._vb,
                    o = null,
                    u = l._byteLength / 32 * 3;
                return o = Dt.create(this, this._ib, l, u, Et.create(1, 0)), this._submits[this._submits._length++] = o, o.shaderValue.textureHost = t, o._renderType = 10016, o._preIsSameTextureShader = 10016 === this._curSubmit._renderType && a.ALPHA === h.ALPHA, this._curSubmit = o, a.ALPHA = n, s
            }, h.drawTextures = function(t, r, s, a) {
                if (t.loaded && t.bitmap && t.source) {
                    var n = this._clipRect;
                    if (this._clipRect = e.MAXCLIPRECT, this._drawTextureM(t, r[0], r[1], t.width, t.height, s, a, null, 1)) {
                        if (this._clipRect = n, C.drawCall++, !(r.length < 4)) {
                            for (var h = this._curSubmit._vb || this._vb, l = this._curMat.a, o = this._curMat.d, u = 2, _ = r.length; u < _; u += 2) pt.copyPreImgVb(h, (r[u] - r[u - 2]) * l, (r[u + 1] - r[u - 1]) * o), this._curSubmit._numEle += 6;
                            this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle)
                        }
                    } else alert("drawTextures err")
                } else this.sprite && i.timer.callLater(this, this._repaintSprite)
            }, h._drawTextureM = function(t, e, r, s, a, n, h, l, o) {
                if (!t.loaded || !t.source) return this.sprite && i.timer.callLater(this, this._repaintSprite), !1;
                var u = this._curSubmit._vb || this._vb,
                    _ = t.bitmap;
                e += n, r += h, this._drawCount++;
                var c = _.id + this._shader2D.ALPHA * o + 10016;
                if (c != this._renderKey) {
                    this._renderKey = c;
                    var f = this._curSubmit.shaderValue,
                        d = this._shader2D,
                        m = d.ALPHA;
                    d.ALPHA *= o, d.glTexture = _;
                    var p = this._vb,
                        g = null,
                        v = p._byteLength / 32 * 3;
                    g = Dt.create(this, this._ib, p, v, Et.create(1, 0)), this._submits[this._submits._length++] = g, g.shaderValue.textureHost = t, g._renderType = 10016, g._preIsSameTextureShader = 10016 === this._curSubmit._renderType && d.ALPHA === f.ALPHA, this._curSubmit = g, u = this._curSubmit._vb || this._vb, d.ALPHA = m
                }
                return !!pt.fillRectImgVb(u, this._clipRect, e, r, s || t.width, a || t.height, t.uv, l || this._curMat, this._x, this._y, 0, 0) && (k.enabled && !this._isMain && this._curSubmit.addTexture(t, (u._byteLength >> 2) - 16), this._curSubmit._numEle += 6, this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle), !0)
            }, h._repaintSprite = function() {
                this.sprite && this.sprite.repaint()
            }, h._drawText = function(t, e, i, r, s, a, n, h, l, o) {
                var u = t.bitmap;
                this._drawCount++;
                var _ = u.id + this._shader2D.ALPHA + 10016;
                if (_ != this._renderKey) {
                    this._renderKey = _;
                    var c = this._curSubmit.shaderValue,
                        f = this._shader2D;
                    f.glTexture = u;
                    var d = this._vb,
                        m = null,
                        p = d._byteLength / 32 * 3;
                    (m = k.enabled ? Dt.create(this, this._ib, d, p, Et.create(1, 0)) : Dt.create(this, this._ib, d, p, qt.create()))._preIsSameTextureShader = 10016 === this._curSubmit._renderType && f.ALPHA === c.ALPHA, this._submits[this._submits._length++] = m, m.shaderValue.textureHost = t, m._renderType = 10016, this._curSubmit = m
                }
                t.active();
                var g = this._curSubmit._vb || this._vb;
                pt.fillRectImgVb(g, this._clipRect, e + n, i + h, r || t.width, s || t.height, t.uv, a || this._curMat, this._x, this._y, l, o, !0) && (k.enabled && !this._isMain && this._curSubmit.addTexture(t, (g._byteLength >> 2) - 16), this._curSubmit._numEle += 6, this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle))
            }, h.drawTextureWithTransform = function(t, i, r, s, a, n, h, l, o) {
                if (n) {
                    var u = this._curMat,
                        _ = this._x,
                        c = this._y;
                    (0 !== h || 0 !== l) && (this._x = h * u.a + l * u.c, this._y = l * u.d + h * u.b), n && u.bTransform ? (b.mul(n, u, e._tmpMatrix), (n = e._tmpMatrix)._checkTransform()) : (this._x += u.tx, this._y += u.ty), this._drawTextureM(t, i, r, s, a, 0, 0, n, o), this._x = _, this._y = c
                } else this._drawTextureM(t, i, r, s, a, h, l, null, o)
            }, h.fillQuadrangle = function(t, e, i, r, s) {
                var a = this._curSubmit,
                    n = this._vb,
                    h = this._shader2D,
                    l = a.shaderValue;
                if (this._renderKey = 0, t.bitmap) {
                    var o = t.bitmap;
                    h.glTexture == o && h.ALPHA === l.ALPHA || (h.glTexture = o, (a = this._curSubmit = at.createSubmit(this, this._ib, n, n._byteLength / 32 * 3, Et.create(1, 0))).shaderValue.glTexture = o, this._submits[this._submits._length++] = a), pt.fillQuadrangleImgVb(n, e, i, r, t.uv, s || this._curMat, this._x, this._y)
                } else a.shaderValue.fillStyle && a.shaderValue.fillStyle.equal(t) && h.ALPHA === l.ALPHA || (h.glTexture = null, (a = this._curSubmit = at.createSubmit(this, this._ib, n, n._byteLength / 32 * 3, Et.create(2, 0))).shaderValue.defines.add(2), a.shaderValue.fillStyle = W.create(t), this._submits[this._submits._length++] = a), pt.fillQuadrangleImgVb(n, e, i, r, F.DEF_UV, s || this._curMat, this._x, this._y);
                a._numEle += 6
            }, h.drawTexture2 = function(t, i, r, s, a, n, h, l) {
                if (0 != n) {
                    var o = this._curMat;
                    if (this._x = t * o.a + i * o.c, this._y = i * o.d + t * o.b, a && (o.bTransform || a.bTransform ? (b.mul(a, o, e._tmpMatrix), a = e._tmpMatrix) : (this._x += a.tx + o.tx, this._y += a.ty + o.ty, a = b.EMPTY)), 1 !== n || h) {
                        var u = this._shader2D.ALPHA,
                            _ = this._nBlendType;
                        this._shader2D.ALPHA = n, h && (this._nBlendType = G.TOINT(h)), this._drawTextureM(l[0], l[1] - r, l[2] - s, l[3], l[4], 0, 0, a, 1), this._shader2D.ALPHA = u, this._nBlendType = _
                    } else this._drawTextureM(l[0], l[1] - r, l[2] - s, l[3], l[4], 0, 0, a, 1);
                    this._x = this._y = 0
                }
            }, h.drawCanvas = function(t, e, i, r, s) {
                var a = t.context;
                if (this._renderKey = 0, a._targets) this._submits[this._submits._length++] = Pt.create(a, 0, null), this._curSubmit = at.RENDERBASE, a._targets.drawTo(this, e, i, r, s);
                else {
                    var n = this._submits[this._submits._length++] = Pt.create(a, this._shader2D.ALPHA, this._shader2D.filters),
                        h = r / t.width,
                        l = s / t.height,
                        o = n._matrix;
                    this._curMat.copyTo(o), 1 != h && 1 != l && o.scale(h, l);
                    var u = o.tx,
                        _ = o.ty;
                    o.tx = o.ty = 0, o.transformPoint(y.TEMP.setTo(e, i)), o.translate(y.TEMP.x + u, y.TEMP.y + _), this._curSubmit = at.RENDERBASE
                }
                f.showCanvasMark && (this.save(), this.lineWidth = 4, this.strokeStyle = a._targets ? "yellow" : "green", this.strokeRect(e - 1, i - 1, r + 2, s + 2, 1), this.strokeRect(e, i, r, s, 1), this.restore())
            }, h.drawTarget = function(t, e, i, r, s, a, n, h, l, o) {
                void 0 === o && (o = -1);
                var u = this._vb;
                if (pt.fillRectImgVb(u, this._clipRect, e, i, r, s, l || F.DEF_UV, a || this._curMat, this._x, this._y, 0, 0)) {
                    this._renderKey = 0;
                    this._shader2D.glTexture = null;
                    this._curSubmit.shaderValue;
                    var _ = this._curSubmit = _t.create(this, this._ib, u, (u._byteLength - 64) / 32 * 3, h, n);
                    _.blendType = -1 == o ? this._nBlendType : o, _.scope = t, this._submits[this._submits._length++] = _, this._curSubmit._numEle += 6
                }
            }, h.mixRGBandAlpha = function(t) {
                return this._mixRGBandAlpha(t, this._shader2D.ALPHA)
            }, h._mixRGBandAlpha = function(t, e) {
                var i = (4278190080 & t) >>> 24;
                return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24
            }, h.drawTriangles = function(t, r, s, a, n, h, l, o, u, _) {
                if (!t.loaded || !t.source) return this.sprite && i.timer.callLater(this, this._repaintSprite), !1;
                this._drawCount++;
                t.bitmap;
                var c = this._mixRGBandAlpha(4294967295, o),
                    f = (a.length, h.length);
                this._renderKey = -1;
                var d = this._curSubmit = Dt.create(this, this._triangleMesh.getIBR(), this._triangleMesh.getVBR(), this._triangleMesh.indexNum, Et.create(1, 0));
                return d.shaderValue.textureHost = t, d._renderType = 10016, this._submits[this._submits._length++] = d, l ? (e._tmpMatrix.a = l.a, e._tmpMatrix.b = l.b, e._tmpMatrix.c = l.c, e._tmpMatrix.d = l.d, e._tmpMatrix.tx = l.tx + r, e._tmpMatrix.ty = l.ty + s, b.mul(e._tmpMatrix, this._curMat, e._tmpMatrix)) : (e._tmpMatrix.a = this._curMat.a, e._tmpMatrix.b = this._curMat.b, e._tmpMatrix.c = this._curMat.c, e._tmpMatrix.d = this._curMat.d, e._tmpMatrix.tx = this._curMat.tx + r, e._tmpMatrix.ty = this._curMat.ty + s), this._triangleMesh.addData(a, n, h, e._tmpMatrix, c, this), this._curSubmit._numEle += f, this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle), !0
            }, h.transform = function(t, e, i, r, s, a) {
                Z.save(this), b.mul(b.TEMP.setTo(t, e, i, r, s, a), this._curMat, this._curMat), this._curMat._checkTransform()
            }, h.setTransformByMatrix = function(t) {
                t.copyTo(this._curMat)
            }, h.transformByMatrix = function(t) {
                Z.save(this), b.mul(t, this._curMat, this._curMat), this._curMat._checkTransform()
            }, h.rotate = function(t) {
                Z.save(this), this._curMat.rotateEx(t)
            }, h.scale = function(t, e) {
                Z.save(this), this._curMat.scaleEx(t, e)
            }, h.clipRect = function(t, e, i, r) {
                if (0 != this._curMat.b || 0 != this._curMat.c) {
                    this._renderKey = 0;
                    var s = ut.create(4);
                    this.addRenderObject(s);
                    var a = this._vb,
                        n = a._byteLength >> 2;
                    if (pt.fillRectImgVb(a, null, t, e, i, r, F.DEF_UV, this._curMat, this._x, this._y, 0, 0)) {
                        this._shader2D.glTexture = null;
                        var h = this._curSubmit = at.createSubmit(this, this._ib, a, (a._byteLength - 64) / 32 * 3, Et.create(2, 0));
                        h.shaderValue.ALPHA = 1, this._submits[this._submits._length++] = h, this._curSubmit._numEle += 6
                    } else alert("clipRect calc stencil rect error");
                    var l = ut.create(5);
                    this.addRenderObject(l);
                    var o = a.getFloat32Array(),
                        u = Math.min(Math.min(Math.min(o[n + 0], o[n + 4]), o[n + 8]), o[n + 12]),
                        _ = Math.max(Math.max(Math.max(o[n + 0], o[n + 4]), o[n + 8]), o[n + 12]),
                        c = Math.min(Math.min(Math.min(o[n + 1], o[n + 5]), o[n + 9]), o[n + 13]),
                        f = Math.max(Math.max(Math.max(o[n + 1], o[n + 5]), o[n + 9]), o[n + 13]);
                    K.save(this, l, t, e, i, r, u, c, _ - u, f - c), this._curSubmit = at.RENDERBASE
                } else {
                    i *= this._curMat.a, r *= this._curMat.d;
                    var d = y.TEMP;
                    this._curMat.transformPoint(d.setTo(t, e)), i < 0 && (d.x = d.x + i, i = -i), r < 0 && (d.y = d.y + r, r = -r), this._renderKey = 0;
                    var m = this._curSubmit = ot.create(this);
                    this._submits[this._submits._length++] = m, m.submitIndex = this._submits._length, m.submitLength = 9999999, X.save(this, m);
                    var p = this._clipRect,
                        g = p.x,
                        v = p.y,
                        x = d.x + i,
                        b = d.y + r;
                    g < d.x && (p.x = d.x), v < d.y && (p.y = d.y), p.width = Math.min(x, g + p.width) - p.x, p.height = Math.min(b, v + p.height) - p.y, this._shader2D.glTexture = null, m.clipRect.copyFrom(p), this._curSubmit = at.RENDERBASE
                }
            }, h.setIBVB = function(t, e, i, r, s, a, n, h, l, o, u) {
                if (void 0 === l && (l = 0), void 0 === o && (o = 0), void 0 === u && (u = 0), null === i) {
                    if (A.isFlash) {
                        var _ = r;
                        _._selfIB || (_._selfIB = $t.create(35044)), _._selfIB.clear(), i = _._selfIB
                    } else i = this._ib;
                    pt.expandIBQuadrangle(i, r._byteLength / (4 * r.vertexStride * 4))
                }
                if (!h || !n) throw Error("setIBVB must input:shader shaderValues");
                var c = lt.create(this, r, i, s, n, h, l, o, u);
                a || (a = b.EMPTY), a.translate(t, e), b.mul(a, this._curMat, c._mat), a.translate(-t, -e), this._submits[this._submits._length++] = c, this._curSubmit = at.RENDERBASE, this._renderKey = 0
            }, h.addRenderObject = function(t) {
                this._submits[this._submits._length++] = t
            }, h.fillTrangles = function(t, e, i, r, s) {
                var a = this._curSubmit,
                    n = this._vb,
                    h = this._shader2D,
                    l = a.shaderValue,
                    o = r.length >> 4,
                    u = t.bitmap;
                this._renderKey = 0, h.glTexture == u && h.ALPHA === l.ALPHA || ((a = this._curSubmit = at.createSubmit(this, this._ib, n, n._byteLength / 32 * 3, Et.create(1, 0))).shaderValue.textureHost = t, this._submits[this._submits._length++] = a), pt.fillTranglesVB(n, e, i, r, s || this._curMat, this._x, this._y), a._numEle += 6 * o
            }, h.submitElement = function(t, e) {
                var i = this._submits;
                for (e < 0 && (e = i._length); t < e;) t += i[t].renderSubmit()
            }, h.finish = function() {
                bt.mainContext.finish()
            }, h.flush = function() {
                var t = Math.max(this._vb._byteLength / 64, this._maxNumEle / 6) + 8;
                if (t > this._ib.bufferLength / 12 && pt.expandIBQuadrangle(this._ib, t), !this._isMain && k.enabled && k._atlasRestore > this._atlasResourceChange) {
                    this._atlasResourceChange = k._atlasRestore;
                    for (var e = this._submits, i = 0, r = e._length; i < r; i++) {
                        var s = e[i];
                        10016 === s.getRenderType() && s.checkTexture()
                    }
                }
                this.submitElement(0, this._submits._length), this._path && this._path.reset(), et.instance && et.getInstance().reset();
                var a = 0;
                for (i = 0, a = this.meshlist.length; i < a; i++) {
                    var n = this.meshlist[i];
                    n.canReuse ? n.releaseMesh() : n.destroy()
                }
                return this.meshlist.length = 0, this._curSubmit = at.RENDERBASE, this._renderKey = 0, this._triangleMesh = Ft.getAMesh(), this.meshlist.push(this._triangleMesh), this._submits._length
            }, h.setPathId = function(t) {
                if (this.mId = t, -1 != this.mId) {
                    this.mHaveKey = !1;
                    var e = N.getInstance();
                    e.shapeDic[this.mId] && (this.mHaveKey = !0), this.mHaveLineKey = !1, e.shapeLineDic[this.mId] && (this.mHaveLineKey = !0)
                }
            }, h.movePath = function(t, e) {
                var i = t,
                    r = e;
                t = this._curMat.a * i + this._curMat.c * r + this._curMat.tx, e = this._curMat.b * i + this._curMat.d * r + this._curMat.ty, this.mX += t, this.mY += e
            }, h.beginPath = function() {
                var t = this._getPath();
                t.tempArray.length = 0, t.closePath = !1, this.mX = 0, this.mY = 0
            }, h.closePath = function() {
                this._path.closePath = !0
            }, h.fill = function(t) {
                void 0 === t && (t = !1);
                var e = this._getPath();
                this.drawPoly(0, 0, e.tempArray, this.fillStyle._color.numColor, 0, 0, t)
            }, h.stroke = function() {
                var t = this._getPath();
                if (this.lineWidth > 0) {
                    if (-1 == this.mId) t.drawLine(0, 0, t.tempArray, this.lineWidth, this.strokeStyle._color.numColor);
                    else if (this.mHaveLineKey) {
                        var e = N.getInstance().shapeLineDic[this.mId];
                        e.rebuild(t.tempArray), t.setGeomtry(e)
                    } else N.getInstance().addLine(this.mId, t.drawLine(0, 0, t.tempArray, this.lineWidth, this.strokeStyle._color.numColor));
                    t.update();
                    var i = [this.mX, this.mY],
                        r = at.createShape(this, t.ib, t.vb, t.count, t.offset, Et.create(4, 0));
                    r.shaderValue.ALPHA = this._shader2D.ALPHA, r.shaderValue.u_pos = i, r.shaderValue.u_mmat2 = vt.TEMPMAT4_ARRAY, this._submits[this._submits._length++] = r, this._renderKey = -1
                }
            }, h.line = function(t, e, i, r, s, a) {
                var n = this._curSubmit,
                    h = this._vb;
                if (pt.fillLineVb(h, this._clipRect, t, e, i, r, s, a)) {
                    this._renderKey = 0;
                    var l = this._shader2D,
                        o = n.shaderValue;
                    l.strokeStyle === o.strokeStyle && l.ALPHA === o.ALPHA || (l.glTexture = null, (n = this._curSubmit = at.createSubmit(this, this._ib, h, (h._byteLength - 64) / 32 * 3, Et.create(2, 0))).shaderValue.strokeStyle = l.strokeStyle, n.shaderValue.mainID = 2, n.shaderValue.ALPHA = l.ALPHA, this._submits[this._submits._length++] = n), n._numEle += 6
                }
            }, h.moveTo = function(t, e, i) {
                void 0 === i && (i = !0);
                var r = this._getPath();
                if (i) {
                    var s = t,
                        a = e;
                    t = this._curMat.a * s + this._curMat.c * a, e = this._curMat.b * s + this._curMat.d * a
                }
                r.addPoint(t, e)
            }, h.lineTo = function(t, e, i) {
                void 0 === i && (i = !0);
                var r = this._getPath();
                if (i) {
                    var s = t,
                        a = e;
                    t = this._curMat.a * s + this._curMat.c * a, e = this._curMat.b * s + this._curMat.d * a
                }
                r.addPoint(t, e)
            }, h.drawCurves = function(t, e, i) {
                this.setPathId(-1), this.beginPath(), this.strokeStyle = i[3], this.lineWidth = i[4];
                var r = i[2];
                t += i[0], e += i[1], this.movePath(t, e), this.moveTo(r[0], r[1]);
                for (var s = 2, a = r.length; s < a;) this.quadraticCurveTo(r[s++], r[s++], r[s++], r[s++]);
                this.stroke()
            }, h.arcTo = function(t, i, r, s, a) {
                if (-1 == this.mId || !this.mHaveKey) {
                    var n = 0,
                        h = 0,
                        l = 0,
                        o = this._getPath();
                    this._curMat.copyTo(e._tmpMatrix), e._tmpMatrix.tx = e._tmpMatrix.ty = 0, e._tempPoint.setTo(o.getEndPointX(), o.getEndPointY()), e._tmpMatrix.invertTransformPoint(e._tempPoint);
                    var u = e._tempPoint.x - t,
                        _ = e._tempPoint.y - i,
                        c = Math.sqrt(u * u + _ * _);
                    if (!(c <= 1e-6)) {
                        var f = u / c,
                            d = _ / c,
                            m = r - t,
                            p = s - i,
                            g = m * m + p * p,
                            v = Math.sqrt(g);
                        if (!(v <= 1e-6)) {
                            var x = m / v,
                                b = p / v,
                                y = f + x,
                                T = d + b,
                                A = Math.sqrt(y * y + T * T);
                            if (!(A <= 1e-6)) {
                                var E = y / A,
                                    S = T / A,
                                    w = Math.acos(E * f + S * d),
                                    R = Math.PI / 2 - w,
                                    I = (c = a / Math.tan(R)) * f + t,
                                    M = c * d + i,
                                    C = Math.sqrt(c * c + a * a),
                                    L = t + E * C,
                                    P = i + S * C,
                                    D = 0,
                                    F = 0,
                                    B = 0;
                                if (f * b - d * x >= 0) {
                                    var N = (D = 2 * R) / e.SEGNUM;
                                    F = Math.sin(N), B = Math.cos(N)
                                } else N = (D = 2 * -R) / e.SEGNUM, F = Math.sin(N), B = Math.cos(N);
                                h = this._curMat.a * I + this._curMat.c * M, l = this._curMat.b * I + this._curMat.d * M, h == this._path.getEndPointX() && l == this._path.getEndPointY() || o.addPoint(h, l);
                                var O = I - L,
                                    V = M - P;
                                for (n = 0; n < e.SEGNUM; n++) {
                                    var U = O * B + V * F,
                                        k = -O * F + V * B;
                                    h = U + L, l = k + P, t = this._curMat.a * h + this._curMat.c * l, l = i = this._curMat.b * h + this._curMat.d * l, (h = t) == this._path.getEndPointX() && l == this._path.getEndPointY() || o.addPoint(h, l), O = U, V = k
                                }
                            }
                        }
                    }
                }
            }, h.arc = function(t, e, i, r, s, a, n) {
                if (void 0 === a && (a = !1), void 0 === n && (n = !0), -1 != this.mId) {
                    var h = N.getInstance().shapeDic[this.mId];
                    if (h && this.mHaveKey && !h.needUpdate(this._curMat)) return;
                    t = 0, e = 0
                }
                var l = 0,
                    o = 0,
                    u = 0,
                    _ = 0,
                    c = 0,
                    f = 0,
                    d = 0,
                    m = 0;
                if (o = s - r, a)
                    if (Math.abs(o) >= 2 * Math.PI) o = 2 * -Math.PI;
                    else
                        for (; o > 0;) o -= 2 * Math.PI;
                else if (Math.abs(o) >= 2 * Math.PI) o = 2 * Math.PI;
                else
                    for (; o < 0;) o += 2 * Math.PI;
                u = o / (m = i < 101 ? Math.max(10, o * i / 5) : i < 201 ? Math.max(10, o * i / 20) : Math.max(10, o * i / 40)) / 2, _ = Math.abs(4 / 3 * (1 - Math.cos(u)) / Math.sin(u)), a && (_ = -_);
                var p = this._getPath(),
                    g = NaN,
                    v = NaN;
                for (d = 0; d <= m; d++) l = r + o * (d / m), c = t + Math.cos(l) * i, f = e + Math.sin(l) * i, n && (g = c, v = f, c = this._curMat.a * g + this._curMat.c * v, f = this._curMat.b * g + this._curMat.d * v), c == this._path.getEndPointX() && f == this._path.getEndPointY() || p.addPoint(c, f);
                c = t + Math.cos(s) * i, f = e + Math.sin(s) * i, n && (g = c, v = f, c = this._curMat.a * g + this._curMat.c * v, f = this._curMat.b * g + this._curMat.d * v), c == this._path.getEndPointX() && f == this._path.getEndPointY() || p.addPoint(c, f)
            }, h.quadraticCurveTo = function(t, e, i, r) {
                var s = l.I,
                    a = i,
                    n = r;
                i = this._curMat.a * a + this._curMat.c * n, r = this._curMat.b * a + this._curMat.d * n, a = t, n = e, t = this._curMat.a * a + this._curMat.c * n, e = this._curMat.b * a + this._curMat.d * n;
                for (var h = s.getBezierPoints([this._path.getEndPointX(), this._path.getEndPointY(), t, e, i, r], 30, 2), o = 0, u = h.length / 2; o < u; o++) this.lineTo(h[2 * o], h[2 * o + 1], !1);
                this.lineTo(i, r, !1)
            }, h.rect = function(t, e, i, r) {
                this._other = this._other.make(), this._other.path || (this._other.path = new z), this._other.path.rect(t, e, i, r)
            }, h.strokeRect = function(t, e, i, r, s) {
                var a = .5 * s;
                this.line(t - a, e, t + i + a, e, s, this._curMat), this.line(t + i, e, t + i, e + r, s, this._curMat), this.line(t, e, t, e + r, s, this._curMat), this.line(t - a, e + r, t + i + a, e + r, s, this._curMat)
            }, h.clip = function() {}, h.drawPoly = function(t, e, i, r, s, a, n) {
                void 0 === n && (n = !1), this._renderKey = 0, this._shader2D.glTexture = null;
                var h = this._getPath();
                if (-1 == this.mId) h.polygon(t, e, i, r, s || 1, a);
                else if (this.mHaveKey) {
                    var l = N.getInstance().shapeDic[this.mId];
                    l.setMatrix(this._curMat), l.rebuild(h.tempArray), h.setGeomtry(l)
                } else {
                    var o = h.polygon(t, e, i, r, s || 1, a);
                    N.getInstance().addShape(this.mId, o), o.setMatrix(this._curMat)
                }
                h.update();
                var u, _ = [this.mX, this.mY];
                if (u = at.createShape(this, h.ib, h.vb, h.count, h.offset, Et.create(4, 0)), u.shaderValue.ALPHA = this._shader2D.ALPHA, u.shaderValue.u_pos = _, u.shaderValue.u_mmat2 = vt.EMPTYMAT4_ARRAY, this._submits[this._submits._length++] = u, s > 0) {
                    if (this.mHaveLineKey) {
                        var c = N.getInstance().shapeLineDic[this.mId];
                        c.rebuild(h.tempArray), h.setGeomtry(c)
                    } else N.getInstance().addShape(this.mId, h.drawLine(t, e, i, s, a));
                    h.update(), (u = at.createShape(this, h.ib, h.vb, h.count, h.offset, Et.create(4, 0))).shaderValue.ALPHA = this._shader2D.ALPHA, u.shaderValue.u_mmat2 = vt.EMPTYMAT4_ARRAY, this._submits[this._submits._length++] = u
                }
            }, h.drawParticle = function(t, e, i) {
                i.x = t, i.y = e, this._submits[this._submits._length++] = i
            }, h._getPath = function() {
                return this._path || (this._path = new z)
            }, a(0, h, "globalCompositeOperation", function() {
                return G.NAMES[this._nBlendType]
            }, function(t) {
                var e = G.TOINT[t];
                null == e || this._nBlendType === e || (Y.save(this, 65536, this, !0), this._curSubmit = at.RENDERBASE, this._renderKey = 0, this._nBlendType = e)
            }), a(0, h, "strokeStyle", function() {
                return this._shader2D.strokeStyle
            }, function(t) {
                this._shader2D.strokeStyle.equal(t) || (Y.save(this, 512, this._shader2D, !1), this._shader2D.strokeStyle = W.create(t))
            }), a(0, h, "globalAlpha", function() {
                return this._shader2D.ALPHA
            }, function(t) {
                (t = Math.floor(1e3 * t) / 1e3) != this._shader2D.ALPHA && (Y.save(this, 1, this._shader2D, !0), this._shader2D.ALPHA = t)
            }), a(0, h, "asBitmap", null, function(t) {
                if (t) {
                    if (this._targets || (this._targets = new j), this._targets.repaint = !0, !this._width || !this._height) throw Error("asBitmap no size!");
                    this._targets.setSP(this.sprite), this._targets.size(this._width, this._height)
                } else this._targets = null
            }), a(0, h, "fillStyle", function() {
                return this._shader2D.fillStyle
            }, function(t) {
                this._shader2D.fillStyle.equal(t) || (Y.save(this, 2, this._shader2D, !1), this._shader2D.fillStyle = W.create(t))
            }), a(0, h, "textAlign", function() {
                return this._other.textAlign
            }, function(t) {
                this._other.textAlign === t || (this._other = this._other.make(), Y.save(this, 32768, this._other, !1), this._other.textAlign = t)
            }), a(0, h, "lineWidth", function() {
                return this._other.lineWidth
            }, function(t) {
                this._other.lineWidth === t || (this._other = this._other.make(), Y.save(this, 256, this._other, !1), this._other.lineWidth = t)
            }), a(0, h, "textBaseline", function() {
                return this._other.textBaseline
            }, function(t) {
                this._other.textBaseline === t || (this._other = this._other.make(), Y.save(this, 16384, this._other, !1), this._other.textBaseline = t)
            }), a(0, h, "font", null, function(t) {
                t != this._other.font.toString() && (this._other = this._other.make(), Y.save(this, 8, this._other, !1), this._other.font === dt.EMPTY ? this._other.font = new dt(t) : this._other.font.setFont(t))
            }), e.__init__ = function() {
                n.DEFAULT = new n
            }, e._tempPoint = new y, e._SUBMITVBSIZE = 32e3, e._MAXSIZE = 99999999, e._RECTVBSIZE = 16, e.MAXCLIPRECT = new T(0, 0, 99999999, 99999999), e._COUNT = 0, e._tmpMatrix = new b, e.SEGNUM = 32, e._contextcount = 0, r(e, ["_fontTemp", function() {
                return this._fontTemp = new dt
            }, "_drawStyleTemp", function() {
                return this._drawStyleTemp = new W(null)
            }]), e.__init$ = function() {
                n = function() {
                    function t() {
                        this.lineWidth = 1, this.path = null, this.textAlign = null, this.textBaseline = null, this.font = dt.EMPTY
                    }
                    s(t, "");
                    var e = t.prototype;
                    return e.clear = function() {
                        this.lineWidth = 1, this.path && this.path.clear(), this.textAlign = this.textBaseline = null, this.font = dt.EMPTY
                    }, e.make = function() {
                        return this === t.DEFAULT ? new t : this
                    }, t.DEFAULT = null, t
                }()
            }, e
        }(),
        Et = function(t) {
            function e(t, i) {
                this.size = [0, 0], this.alpha = 1, this.ALPHA = 1, this.subID = 0, this._cacheID = 0, e.__super.call(this), this.defines = new It, this.position = e._POSITION, this.mainID = t, this.subID = i, this.textureHost = null, this.texture = null, this.fillStyle = null, this.color = null, this.strokeStyle = null, this.colorAdd = null, this.glTexture = null, this.u_mmat2 = null, this._cacheID = t | i, this._inClassCache = e._cache[this._cacheID], t > 0 && !this._inClassCache && (this._inClassCache = e._cache[this._cacheID] = [], this._inClassCache._length = 0), this.clear()
            }
            s(e, "laya.webgl.shader.d2.value.Value2D", V);
            var i = e.prototype;
            return i.setValue = function(t) {}, i.refresh = function() {
                var t = this.size;
                return t[0] = vt.width, t[1] = vt.height, this.alpha = this.ALPHA * vt.worldAlpha, this.mmat = vt.worldMatrix4, this
            }, i._ShaderWithCompile = function() {
                return Qt.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, jt.create)
            }, i._withWorldShaderDefines = function() {
                var t = vt.worldShaderDefines,
                    e = Qt.sharders[this.mainID | this.defines._value | t.getValue()];
                if (!e) {
                    var i, r, s = {};
                    i = this.defines.toNameDic();
                    for (r in i) s[r] = "";
                    i = t.toNameDic();
                    for (r in i) s[r] = "";
                    e = Qt.withCompile2D(0, this.mainID, s, this.mainID | this.defines._value | t.getValue(), jt.create)
                }
                var a = vt.worldFilters;
                if (!a) return e;
                for (var n, h = a.length, l = 0; l < h; l++)(n = a[l]) && n.action.setValue(this);
                return e
            }, i.upload = function() {
                var t = vt;
                this.alpha = this.ALPHA * t.worldAlpha, vt.worldMatrix4 !== vt.TEMPMAT4_ARRAY && this.defines.add(128), bt.shaderHighPrecision && this.defines.add(1024);
                var e, i = t.worldShaderDefines ? this._withWorldShaderDefines() : Qt.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
                this.size[0] = t.width, this.size[1] = t.height, this.mmat = t.worldMatrix4, Bt.activeShader !== i ? (i._shaderValueWidth !== t.width || i._shaderValueHeight !== t.height ? (i._shaderValueWidth = t.width, i._shaderValueHeight = t.height) : e = i._params2dQuick2 || i._make2dQuick2(), i.upload(this, e)) : (i._shaderValueWidth !== t.width || i._shaderValueHeight !== t.height ? (i._shaderValueWidth = t.width, i._shaderValueHeight = t.height) : e = i._params2dQuick1 || i._make2dQuick1(), i.upload(this, e))
            }, i.setFilters = function(t) {
                if (this.filters = t, t)
                    for (var e, i = t.length, r = 0; r < i; r++)(e = t[r]) && (this.defines.add(e.type), e.action.setValue(this))
            }, i.clear = function() {
                this.defines.setValue(this.subID)
            }, i.release = function() {
                this._inClassCache[this._inClassCache._length++] = this, this.fillStyle = null, this.strokeStyle = null, this.clear()
            }, e._initone = function(t, i) {
                e._typeClass[t] = i, e._cache[t] = [], e._cache[t]._length = 0
            }, e.__init__ = function() {
                e._POSITION = [2, 5126, !1, 4 * mt.BYTES_PE, 0], e._TEXCOORD = [2, 5126, !1, 4 * mt.BYTES_PE, 2 * mt.BYTES_PE], e._initone(2, Ut), e._initone(4, Gt), e._initone(256, kt), e._initone(512, Vt), e._initone(1, Ht), e._initone(65, qt), e._initone(9, Ht)
            }, e.create = function(t, i) {
                var r = e._cache[t | i];
                return r._length ? r[--r._length] : new e._typeClass[t | i](i)
            }, e._POSITION = null, e._TEXCOORD = null, e._cache = [], e._typeClass = [], e.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e
        }(),
        St = function(t) {
            function e(t, i) {
                e.__super.call(this, t, i)
            }
            s(e, "laya.webgl.utils.RenderSprite3D", E);
            var i = e.prototype;
            return i.onCreate = function(t) {
                switch (t) {
                    case 8:
                        return void(this._fun = this._blend);
                    case 4:
                        return void(this._fun = this._transform)
                }
            }, i._mask = function(t, i, r, s) {
                var a, n, h = this._next,
                    l = t.mask;
                if (l) {
                    i.ctx.save();
                    var o = i.ctx.globalCompositeOperation,
                        u = new T;
                    if (u.copyFrom(l.getBounds()), u.width = Math.round(u.width), u.height = Math.round(u.height), u.x = Math.round(u.x), u.y = Math.round(u.y), u.width > 0 && u.height > 0) {
                        var _ = t._style._tf,
                            c = ht.create();
                        c.addValue("bounds", u), a = nt.create([c, i], laya.webgl.utils.RenderSprite3D.tmpTarget), i.addRenderObject(a), l.render(i, -u.x, -u.y), a = nt.create([c], laya.webgl.utils.RenderSprite3D.endTmpTarget), i.addRenderObject(a), i.ctx.save(), i.clipRect(r - _.translateX + u.x, s - _.translateY + u.y, u.width, u.height), h._fun.call(h, t, i, r, s), i.ctx.restore(), n = ut.create(6), o = i.ctx.globalCompositeOperation, n.blendMode = "mask", i.addRenderObject(n), b.TEMP.identity();
                        var f = Et.create(1, 0),
                            d = F.INV_UV,
                            m = u.width,
                            p = u.height;
                        (u.width < 32 || u.height < 32) && ((d = e.tempUV)[0] = 0, d[1] = 0, d[2] = u.width >= 32 ? 1 : u.width / 32, d[3] = 0, d[4] = u.width >= 32 ? 1 : u.width / 32, d[5] = u.height >= 32 ? 1 : u.height / 32, d[6] = 0, d[7] = u.height >= 32 ? 1 : u.height / 32, u.width = u.width >= 32 ? u.width : 32, u.height = u.height >= 32 ? u.height : 32, d[1] *= -1, d[3] *= -1, d[5] *= -1, d[7] *= -1, d[1] += 1, d[3] += 1, d[5] += 1, d[7] += 1), i.ctx.drawTarget(c, r + u.x - _.translateX, s + u.y - _.translateY, m, p, b.TEMP, "tmpTarget", f, d, 6), a = nt.create([c], laya.webgl.utils.RenderSprite3D.recycleTarget), i.addRenderObject(a), (n = ut.create(6)).blendMode = o, i.addRenderObject(n)
                    }
                    i.ctx.restore()
                } else h._fun.call(h, t, i, r, s)
            }, i._blend = function(t, e, i, r) {
                var s = t._style,
                    a = this._next;
                s.blendMode ? (e.ctx.save(), e.ctx.globalCompositeOperation = s.blendMode, a._fun.call(a, t, e, i, r), e.ctx.restore()) : a._fun.call(a, t, e, i, r)
            }, i._transform = function(t, e, i, r) {
                var s = t.transform,
                    a = this._next;
                if (s && a != E.NORENDER) {
                    var n = e.ctx;
                    t._style;
                    s.tx = i, s.ty = r;
                    var h = n._getTransformMatrix(),
                        l = h.clone();
                    b.mul(s, h, h), h._checkTransform(), s.tx = s.ty = 0, a._fun.call(a, t, e, 0, 0), l.copyTo(h), l.destroy()
                } else a._fun.call(a, t, e, i, r)
            }, e.tmpTarget = function(t, e) {
                var i = t.getValue("bounds"),
                    r = Nt.create(i.width, i.height);
                r.start(), r.clear(0, 0, 0, 0), t.addValue("tmpTarget", r)
            }, e.endTmpTarget = function(t) {
                t.getValue("tmpTarget").end()
            }, e.recycleTarget = function(t) {
                t.getValue("tmpTarget").recycle(), t.recycle()
            }, r(e, ["tempUV", function() {
                return this.tempUV = new Array(8)
            }]), e
        }(),
        wt = function(t) {
            function e() {
                this.data = null, e.__super.call(this)
            }
            s(e, "laya.filters.webgl.ColorFilterActionGL", O);
            var r = e.prototype;
            return i.imps(r, {
                "laya.filters.IFilterActionGL": !0
            }), r.setValue = function(t) {
                t.colorMat = this.data._mat, t.colorAlpha = this.data._alpha
            }, r.apply3d = function(t, e, i, r, s) {
                var a = t.getValue("bounds"),
                    n = Et.create(1, 0);
                n.setFilters([this.data]);
                var h = b.TEMP;
                h.identity(), i.ctx.drawTarget(t, 0, 0, a.width, a.height, h, "src", n)
            }, e
        }(),
        Rt = function(t) {
            function e(t, i, r, s, a) {
                this._atlasCanvas = null, this._inAtlasTextureKey = null, this._inAtlasTextureBitmapValue = null, this._inAtlasTextureOriUVValue = null, this._InAtlasWebGLImagesKey = null, this._InAtlasWebGLImagesOffsetValue = null, e.__super.call(this, t, i, a), this._inAtlasTextureKey = [], this._inAtlasTextureBitmapValue = [], this._inAtlasTextureOriUVValue = [], this._InAtlasWebGLImagesKey = {}, this._InAtlasWebGLImagesOffsetValue = [], this._atlasCanvas = new Wt, this._atlasCanvas._atlaser = this, this._atlasCanvas.width = r, this._atlasCanvas.height = s, this._atlasCanvas.activeResource(), this._atlasCanvas.lock = !0
            }
            s(e, "laya.webgl.atlas.Atlaser", U);
            var i = e.prototype;
            return i.computeUVinAtlasTexture = function(t, e, i, r) {
                var s = k.atlasTextureWidth,
                    a = k.atlasTextureHeight,
                    n = i / s,
                    h = r / a,
                    l = (i + t.bitmap.width) / s,
                    o = (r + t.bitmap.height) / a,
                    u = t.bitmap.width / s,
                    _ = t.bitmap.height / a;
                t.uv = [n + e[0] * u, h + e[1] * _, l - (1 - e[2]) * u, h + e[3] * _, l - (1 - e[4]) * u, o - (1 - e[5]) * _, n + e[6] * u, o - (1 - e[7]) * _]
            }, i.findBitmapIsExist = function(t) {
                if (t instanceof laya.webgl.resource.WebGLImage) {
                    var e = t,
                        i = e.url,
                        r = this._InAtlasWebGLImagesKey[i || e.id];
                    if (r) return r.offsetInfoID
                }
                return -1
            }, i.addToAtlasTexture = function(t, e, i) {
                if (t instanceof laya.webgl.resource.WebGLImage) {
                    var r = t,
                        s = r.url;
                    this._InAtlasWebGLImagesKey[s || r.id] = {
                        bitmap: t,
                        offsetInfoID: this._InAtlasWebGLImagesOffsetValue.length
                    }, this._InAtlasWebGLImagesOffsetValue.push([e, i])
                }
                this._atlasCanvas.texSubImage2D(e, i, t.atlasSource), t.clearAtlasSource()
            }, i.addToAtlas = function(t, e, i) {
                t._atlasID = this._inAtlasTextureKey.length;
                var r = t.uv.slice(),
                    s = t.bitmap;
                this._inAtlasTextureKey.push(t), this._inAtlasTextureOriUVValue.push(r), this._inAtlasTextureBitmapValue.push(s), this.computeUVinAtlasTexture(t, r, e, i), t.bitmap = this._atlasCanvas
            }, i.clear = function() {
                for (var t = 0, e = this._inAtlasTextureKey.length; t < e; t++) this._inAtlasTextureKey[t].bitmap = this._inAtlasTextureBitmapValue[t], this._inAtlasTextureKey[t].uv = this._inAtlasTextureOriUVValue[t], this._inAtlasTextureKey[t]._atlasID = -1, this._inAtlasTextureKey[t].bitmap.lock = !1, this._inAtlasTextureKey[t].bitmap.releaseResource();
                this._inAtlasTextureKey.length = 0, this._inAtlasTextureBitmapValue.length = 0, this._inAtlasTextureOriUVValue.length = 0, this._InAtlasWebGLImagesKey = null, this._InAtlasWebGLImagesOffsetValue.length = 0
            }, i.dispose = function() {
                this.clear(), this._atlasCanvas.destroy()
            }, a(0, i, "InAtlasWebGLImagesOffsetValue", function() {
                return this._InAtlasWebGLImagesOffsetValue
            }), a(0, i, "texture", function() {
                return this._atlasCanvas
            }), a(0, i, "inAtlasWebGLImagesKey", function() {
                return this._InAtlasWebGLImagesKey
            }), e
        }(),
        It = function(t) {
            function e() {
                e.__super.call(this, e.__name2int, e.__int2name, e.__int2nameMap)
            }
            return s(e, "laya.webgl.shader.d2.ShaderDefines2D", J), e.__init__ = function() {
                e.reg("TEXTURE2D", 1), e.reg("COLOR2D", 2), e.reg("PRIMITIVE", 4), e.reg("GLOW_FILTER", 8), e.reg("BLUR_FILTER", 16), e.reg("COLOR_FILTER", 32), e.reg("COLOR_ADD", 64), e.reg("WORLDMAT", 128), e.reg("FILLTEXTURE", 256), e.reg("FSHIGHPRECISION", 1024)
            }, e.reg = function(t, i) {
                J._reg(t, i, e.__name2int, e.__int2name)
            }, e.toText = function(t, e, i) {
                return J._toText(t, e, i)
            }, e.toInt = function(t) {
                return J._toInt(t, e.__name2int)
            }, e.TEXTURE2D = 1, e.COLOR2D = 2, e.PRIMITIVE = 4, e.FILTERGLOW = 8, e.FILTERBLUR = 16, e.FILTERCOLOR = 32, e.COLORADD = 64, e.WORLDMAT = 128, e.FILLTEXTURE = 256, e.SKINMESH = 512, e.SHADERDEFINE_FSHIGHPRECISION = 1024, e.__name2int = {}, e.__int2name = [], e.__int2nameMap = [], e
        }(),
        Mt = (function(t) {
            function e(t, i, r, s, a, n, h) {
                e.__super.call(this, t, i, r, s, 40, a, n, h)
            }
            s(e, "laya.webgl.shapes.Ellipse", it)
        }(), function(t) {
            function e(t, i, r, s, a) {
                this._points = [], this.rebuild(r), e.__super.call(this, t, i, 0, 0, 0, a, s, a, 0)
            }
            s(e, "laya.webgl.shapes.Line", it);
            var i = e.prototype;
            return i.rebuild = function(t) {
                var e = t.length;
                e != this._points.length && (this.mUint16Array = new Uint16Array(6 * (e / 2 - 1)), this.mFloat32Array = new Float32Array(5 * e)), this._points.length = 0;
                for (var i = NaN, r = NaN, s = -1, a = -1, n = t.length / 2, h = 0; h < n; h++) i = t[2 * h], r = t[2 * h + 1], (Math.abs(s - i) > .01 || Math.abs(a - r) > .01) && this._points.push(i, r), s = i, a = r
            }, i.getData = function(t, e, i) {
                var r = [],
                    s = [];
                this.borderWidth > 0 && this.createLine2(this._points, r, this.borderWidth, i, s, this._points.length / 2), this.mUint16Array.set(r, 0), this.mFloat32Array.set(s, 0), t.append(this.mUint16Array), e.append(this.mFloat32Array)
            }, e
        }()),
        Ct = function(t) {
            function e(t, i, r, s, a) {
                this._points = [];
                for (var n = NaN, h = NaN, l = -1, o = -1, u = r.length / 2 - 1, _ = 0; _ < u; _++) n = r[2 * _], h = r[2 * _ + 1], (Math.abs(l - n) > .01 || Math.abs(o - h) > .01) && this._points.push(n, h), l = n, o = h;
                n = r[2 * u], h = r[2 * u + 1], l = this._points[0], o = this._points[1], (Math.abs(l - n) > .01 || Math.abs(o - h) > .01) && this._points.push(n, h), e.__super.call(this, t, i, 0, 0, this._points.length / 2, 0, s, a)
            }
            s(e, "laya.webgl.shapes.LoopLine", it);
            var i = e.prototype;
            return i.getData = function(t, e, i) {
                if (this.borderWidth > 0) {
                    for (var r = this.color, s = (r >> 16 & 255) / 255, a = (r >> 8 & 255) / 255, n = (255 & r) / 255, h = [], l = 0, o = 0, u = [], _ = Math.floor(this._points.length / 2), c = 0; c < _; c++) l = this._points[2 * c], o = this._points[2 * c + 1], h.push(this.x + l, this.y + o, s, a, n);
                    this.createLoopLine(h, u, this.borderWidth, i + h.length / 5), t.append(new Uint16Array(u)), e.append(new Float32Array(h))
                }
            }, i.createLoopLine = function(t, e, i, r, s, a) {
                t.length;
                var n = t.concat(),
                    h = s || t,
                    l = this.borderColor,
                    o = (l >> 16 & 255) / 255,
                    u = (l >> 8 & 255) / 255,
                    _ = (255 & l) / 255,
                    c = [n[0], n[1]],
                    f = [n[n.length - 5], n[n.length - 4]],
                    d = f[0] + .5 * (c[0] - f[0]),
                    m = f[1] + .5 * (c[1] - f[1]);
                n.unshift(d, m, 0, 0, 0), n.push(d, m, 0, 0, 0);
                var p, g, v, x, b, y, T, A, E, S, w, R, I, M, C, L, P, D, F, B, N = n.length / 5,
                    O = r,
                    V = i / 2;
                v = n[0], x = n[1], S = v - (b = n[5]), E = (E = -(x - (y = n[6]))) / (B = Math.sqrt(E * E + S * S)) * V, S = S / B * V, h.push(v - E, x - S, o, u, _, v + E, x + S, o, u, _);
                for (var U = 1; U < N - 1; U++) v = n[5 * (U - 1)], x = n[5 * (U - 1) + 1], b = n[5 * U], y = n[5 * U + 1], T = n[5 * (U + 1)], A = n[5 * (U + 1) + 1], S = v - b, R = b - T, C = (-(E = (E = -(x - y)) / (B = Math.sqrt(E * E + S * S)) * V) + v) * (-(S = S / B * V) + y) - (-E + b) * (-S + x), D = (-(w = (w = -(y - A)) / (B = Math.sqrt(w * w + R * R)) * V) + T) * (-(R = R / B * V) + y) - (-w + b) * (-R + A), F = (I = -S + x - (-S + y)) * (P = -w + b - (-w + T)) - (L = -R + A - (-R + y)) * (M = -E + b - (-E + v)), Math.abs(F) < .1 ? (F += 10.1, h.push(b - E, y - S, o, u, _, b + E, y + S, o, u, _)) : (((p = (M * D - P * C) / F) - b) * (p - b) + ((g = (L * C - I * D) / F) - y) + (g - y), h.push(p, g, o, u, _, b - (p - b), y - (g - y), o, u, _));
                a && (e = a);
                var k = this.edges + 1;
                for (U = 1; U < k; U++) e.push(O + 2 * (U - 1), O + 2 * (U - 1) + 1, O + 2 * U + 1, O + 2 * U + 1, O + 2 * U, O + 2 * (U - 1));
                return e.push(O + 2 * (U - 1), O + 2 * (U - 1) + 1, O + 1, O + 1, O, O + 2 * (U - 1)), h
            }, e
        }(),
        Lt = function(t) {
            function e(t, i, r, s, a, n) {
                this._points = null, this._start = -1, this._repaint = !1, this.earcutTriangles = null, this._mat = b.create(), this._points = r.slice(0, r.length), e.__super.call(this, t, i, 0, 0, this._points.length / 2, s, a, n)
            }
            s(e, "laya.webgl.shapes.Polygon", it);
            var i = e.prototype;
            return i.rebuild = function(t) {
                this._repaint || (this._points.length = 0, this._points = this._points.concat(t))
            }, i.setMatrix = function(t) {
                t.copyTo(this._mat)
            }, i.needUpdate = function(t) {
                return this._repaint = this._mat.a == t.a && this._mat.b == t.b && this._mat.c == t.c && this._mat.d == t.d && this._mat.tx == t.tx && this._mat.ty == t.ty, !this._repaint
            }, i.getData = function(t, e, i) {
                var r, s = 0,
                    a = this._points,
                    n = 0;
                if (this.mUint16Array && this.mFloat32Array && this._repaint) {
                    if (this._start != i) {
                        for (this._start = i, r = [], n = this.earcutTriangles.length, s = 0; s < n; s++) r.push(this.earcutTriangles[s] + i);
                        this.mUint16Array = new Uint16Array(r)
                    }
                } else {
                    this._start = i, r = [];
                    var h = [],
                        l = [],
                        o = this.color,
                        u = (o >> 16 & 255) / 255,
                        _ = (o >> 8 & 255) / 255,
                        c = (255 & o) / 255;
                    for (n = Math.floor(a.length / 2), s = 0; s < n; s++) h.push(this.x + a[2 * s], this.y + a[2 * s + 1], u, _, c), l.push(this.x + a[2 * s], this.y + a[2 * s + 1]);
                    for (this.earcutTriangles = rt.earcut(l, null, 2), n = this.earcutTriangles.length, s = 0; s < n; s++) r.push(this.earcutTriangles[s] + i);
                    this.mUint16Array = new Uint16Array(r), this.mFloat32Array = new Float32Array(h)
                }
                t.append(this.mUint16Array), e.append(this.mFloat32Array)
            }, e
        }(),
        Pt = function(t) {
            function e() {
                this._matrix = new b, this._matrix4 = mt.defaultMatrix4.concat(), e.__super.call(this, 1e4), this.shaderValue = new Et(0, 0)
            }
            s(e, "laya.webgl.submit.SubmitCanvas", at);
            var i = e.prototype;
            return i.renderSubmit = function() {
                if (this._ctx_src._targets) return this._ctx_src._targets.flush(this._ctx_src), 1;
                var t = vt.worldAlpha,
                    e = vt.worldMatrix4,
                    i = vt.worldMatrix,
                    r = vt.worldFilters,
                    s = vt.worldShaderDefines,
                    a = this.shaderValue,
                    n = this._matrix,
                    h = this._matrix4,
                    l = b.TEMP;
                return b.mul(n, i, l), h[0] = l.a, h[1] = l.b, h[4] = l.c, h[5] = l.d, h[12] = l.tx, h[13] = l.ty, vt.worldMatrix = l.clone(), vt.worldMatrix4 = h, vt.worldAlpha = vt.worldAlpha * a.alpha, a.filters && a.filters.length && (vt.worldFilters = a.filters, vt.worldShaderDefines = a.defines), this._ctx_src.flush(), vt.worldAlpha = t, vt.worldMatrix4 = e, vt.worldMatrix.destroy(), vt.worldMatrix = i, vt.worldFilters = r, vt.worldShaderDefines = s, 1
            }, i.releaseRender = function() {
                var t = e._cache;
                this._ctx_src = null, t[t._length++] = this
            }, i.getRenderType = function() {
                return 10003
            }, e.create = function(t, i, r) {
                var s = e._cache._length ? e._cache[--e._cache._length] : new e;
                s._ctx_src = t;
                var a = s.shaderValue;
                return a.alpha = i, a.defines.setValue(0), r && r.length && a.setFilters(r), s
            }, e._cache = (e._cache = [], e._cache._length = 0, e._cache), e
        }(),
        Dt = function(t) {
            function e(t) {
                this._preIsSameTextureShader = !1, this._isSameTexture = !0, this._texs = new Array, this._texsID = new Array, this._vbPos = new Array, void 0 === t && (t = 1e4), e.__super.call(this, t)
            }
            s(e, "laya.webgl.submit.SubmitTexture", at);
            var i = e.prototype;
            return i.releaseRender = function() {
                var t = e._cache;
                t[t._length++] = this, this.shaderValue.release(), this._preIsSameTextureShader = !1, this._vb = null, this._texs.length = 0, this._vbPos.length = 0, this._isSameTexture = !0
            }, i.addTexture = function(t, e) {
                this._texsID[this._texs.length] = t._uvID, this._texs.push(t), this._vbPos.push(e)
            }, i.checkTexture = function() {
                if (this._texs.length < 1) this._isSameTexture = !0;
                else {
                    var t = this.shaderValue.textureHost.bitmap;
                    if (null !== t)
                        for (var e = this._vb.getFloat32Array(), i = 0, r = this._texs.length; i < r; i++) {
                            var s = this._texs[i];
                            s.active();
                            var a = s.uv;
                            if (this._texsID[i] !== s._uvID) {
                                this._texsID[i] = s._uvID;
                                var n = this._vbPos[i];
                                e[n + 2] = a[0], e[n + 3] = a[1], e[n + 6] = a[2], e[n + 7] = a[3], e[n + 10] = a[4], e[n + 11] = a[5], e[n + 14] = a[6], e[n + 15] = a[7], this._vb.setNeedUpload()
                            }
                            s.bitmap !== t && (this._isSameTexture = !1)
                        }
                }
            }, i.renderSubmit = function() {
                if (0 === this._numEle) return e._shaderSet = !1, 1;
                var t = this.shaderValue.textureHost;
                if (t) {
                    var i = t.source;
                    if (!t.bitmap || !i) return e._shaderSet = !1, 1;
                    this.shaderValue.texture = i
                }
                this._vb.bind_upload(this._ib);
                var r = bt.mainContext;
                if (G.activeBlendFunction !== this._blendFn && (r.enable(3042), this._blendFn(r), G.activeBlendFunction = this._blendFn), C.drawCall++, C.trianglesFaces += this._numEle / 3, this._preIsSameTextureShader && Bt.activeShader && e._shaderSet ? Bt.activeShader.uploadTexture2D(this.shaderValue.texture) : this.shaderValue.upload(), e._shaderSet = !0, this._texs.length > 1 && !this._isSameTexture)
                    for (var s = t.bitmap, a = 0, n = Bt.activeShader, h = 0, l = this._texs.length; h < l; h++) {
                        var o = this._texs[h];
                        o.bitmap === s && h + 1 !== l || (n.uploadTexture2D(o.source), r.drawElements(4, 6 * (h - a + 1), 5123, this._startIdx + 6 * a * mt.BYTES_PIDX), s = o.bitmap, a = h)
                    } else r.drawElements(4, this._numEle, 5123, this._startIdx);
                return 1
            }, e.create = function(t, i, r, s, a) {
                var n = e._cache._length ? e._cache[--e._cache._length] : new e;
                null == r && ((r = n._selfVb || (n._selfVb = Jt.create(-1))).clear(), s = 0), n._ib = i, n._vb = r, n._startIdx = s * mt.BYTES_PIDX, n._numEle = 0;
                var h = t._nBlendType;
                n._blendFn = t._targets ? G.targetFns[h] : G.fns[h], n.shaderValue = a, n.shaderValue.setValue(t._shader2D);
                var l = t._shader2D.filters;
                return l && n.shaderValue.setFilters(l), n
            }, e._cache = (e._cache = [], e._cache._length = 0, e._cache), e._shaderSet = !0, e
        }(),
        Ft = function(t) {
            function e() {
                e.__super.call(this, laya.webgl.utils.MeshTexture.const_stride, 0, 0), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo)
            }
            s(e, "laya.webgl.utils.MeshTexture", gt);
            var i = e.prototype;
            return i.addData = function(t, i, r, s, a, n) {
                for (var h = t.length / 2, l = this._vb.needSize(h * e.const_stride) >> 2, o = this._vb.getFloat32Array(), u = 0, _ = 0; _ < h; _++) {
                    var c = t[u],
                        f = t[u + 1],
                        d = c * s.a + f * s.c + s.tx,
                        m = c * s.b + f * s.d + s.ty;
                    o[l++] = d, o[l++] = m, o[l++] = i[u], o[l++] = i[u + 1], u += 2
                }
                this._vb.setNeedUpload();
                var p = this.vertNum;
                if (p > 0) {
                    (h = r.length) > e.tmpIdx.length && (e.tmpIdx = new Uint16Array(h));
                    for (var g = 0; g < h; g++) e.tmpIdx[g] = r[g] + p;
                    this._ib.appendU16Array(e.tmpIdx, r.length)
                } else this._ib.append(r);
                this._ib.setNeedUpload(), this.vertNum += h, this.indexNum += r.length
            }, i.releaseMesh = function() {
                this._vb._byteLength = 0, this._ib._byteLength = 0, this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshTexture._POOL.push(this)
            }, i.destroy = function() {
                this._ib.destroy(), this._vb.destroy()
            }, e.getAMesh = function() {
                return laya.webgl.utils.MeshTexture._POOL.length ? laya.webgl.utils.MeshTexture._POOL.pop() : new e
            }, e.const_stride = 16, e._POOL = [], r(e, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 2, 0, 5126, 2, 8]
            }, "tmpIdx", function() {
                return this.tmpIdx = new Uint16Array(4)
            }]), e
        }(),
        Bt = function(t) {
            function e() {
                e.__super.call(this), this.lock = !0
            }
            return s(e, "laya.webgl.shader.BaseShader", S), e.activeShader = null, e.bindShader = null, e
        }(),
        Nt = function(t) {
            function e(t, i, r, s, a, n, h, l, o) {
                this._type = 0, this._svWidth = NaN, this._svHeight = NaN, this._preRenderTarget = null, this._alreadyResolved = !1, this._looked = !1, this._surfaceFormat = 0, this._surfaceType = 0, this._depthStencilFormat = 0, this._mipMap = !1, this._repeat = !1, this._minFifter = 0, this._magFifter = 0, this._destroy = !1, void 0 === r && (r = 6408), void 0 === s && (s = 5121), void 0 === a && (a = 34041), void 0 === n && (n = !1), void 0 === h && (h = !1), void 0 === l && (l = -1), void 0 === o && (o = -1), this._type = 1, this._w = t, this._h = i, this._surfaceFormat = r, this._surfaceType = s, this._depthStencilFormat = a, A.isConchWebGL && 34041 === this._depthStencilFormat && (this._depthStencilFormat = 33189), this._mipMap = n, this._repeat = h, this._minFifter = l, this._magFifter = o, this._createWebGLRenderTarget(), this.bitmap.lock = !0, e.__super.call(this, this.bitmap, F.INV_UV)
            }
            s(e, "laya.webgl.resource.RenderTarget2D", t);
            var r = e.prototype;
            return i.imps(r, {
                "laya.resource.IDispose": !0
            }), r.getType = function() {
                return this._type
            }, r.getTexture = function() {
                return this
            }, r.size = function(t, e) {
                this._w == t && this._h == e || (this._w = t, this._h = e, this.release(), 0 != this._w && 0 != this._h && this._createWebGLRenderTarget())
            }, r.release = function() {
                this.destroy()
            }, r.recycle = function() {
                e.POOL.push(this)
            }, r.start = function() {
                var t = bt.mainContext;
                return this._preRenderTarget = vt.curRenderTarget, vt.curRenderTarget = this, t.bindFramebuffer(36160, this.bitmap.frameBuffer), this._alreadyResolved = !1, 1 == this._type && (t.viewport(0, 0, this._w, this._h), this._svWidth = vt.width, this._svHeight = vt.height, vt.width = this._w, vt.height = this._h, Bt.activeShader = null), this
            }, r.clear = function(t, e, i, r) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1);
                var s = bt.mainContext;
                s.clearColor(t, e, i, r);
                var a = 16384;
                switch (this._depthStencilFormat) {
                    case 33189:
                        a |= 256;
                        break;
                    case 36168:
                        a |= 1024;
                        break;
                    case 34041:
                        a |= 256, a |= 1024
                }
                s.clear(a)
            }, r.end = function() {
                var t = bt.mainContext;
                t.bindFramebuffer(36160, this._preRenderTarget ? this._preRenderTarget.bitmap.frameBuffer : null), this._alreadyResolved = !0, vt.curRenderTarget = this._preRenderTarget, 1 == this._type ? (t.viewport(0, 0, this._svWidth, this._svHeight), vt.width = this._svWidth, vt.height = this._svHeight, Bt.activeShader = null) : t.viewport(0, 0, i.stage.width, i.stage.height)
            }, r.getData = function(t, e, i, r) {
                var s = bt.mainContext;
                s.bindFramebuffer(36160, this.bitmap.frameBuffer);
                if (!(36053 === s.checkFramebufferStatus(36160))) return s.bindFramebuffer(36160, null), null;
                var a = new Uint8Array(this._w * this._h * 4);
                return s.readPixels(t, e, i, r, this._surfaceFormat, this._surfaceType, a), s.bindFramebuffer(36160, null), a
            }, r.destroy = function(e) {
                void 0 === e && (e = !1), this._destroy || (this._loaded = !1, this.bitmap.offAll(), this.bitmap.disposeResource(), this.bitmap.dispose(), this.offAll(), this.bitmap = null, this._alreadyResolved = !1, this._destroy = !0, t.prototype.destroy.call(this))
            }, r.dispose = function() {}, r._createWebGLRenderTarget = function() {
                this.bitmap = new Xt(this.width, this.height, this._surfaceFormat, this._surfaceType, this._depthStencilFormat, this._mipMap, this._repeat, this._minFifter, this._magFifter), this.bitmap.activeResource(), this._alreadyResolved = !0, this._destroy = !1, this._loaded = !0, this.bitmap.on("recovered", this, function(t) {
                    this.event("recovered")
                })
            }, a(0, r, "surfaceFormat", function() {
                return this._surfaceFormat
            }), a(0, r, "magFifter", function() {
                return this._magFifter
            }), a(0, r, "surfaceType", function() {
                return this._surfaceType
            }), a(0, r, "mipMap", function() {
                return this._mipMap
            }), a(0, r, "depthStencilFormat", function() {
                return this._depthStencilFormat
            }), a(0, r, "minFifter", function() {
                return this._minFifter
            }), a(0, r, "source", function() {
                return this._alreadyResolved ? i.superGet(F, this, "source") : null
            }), e.create = function(t, i, r, s, a, n, h, l, o) {
                void 0 === r && (r = 6408), void 0 === s && (s = 5121), void 0 === a && (a = 34041), void 0 === n && (n = !1), void 0 === h && (h = !1), void 0 === l && (l = -1), void 0 === o && (o = -1);
                var u = e.POOL.pop();
                return u || (u = new e(t, i)), u.bitmap && u._w == t && u._h == i && u._surfaceFormat == r && u._surfaceType == s && u._depthStencilFormat == a && u._mipMap == n && u._repeat == h && u._minFifter == l && u._magFifter == o || (u._w = t, u._h = i, u._surfaceFormat = r, u._surfaceType = s, u._depthStencilFormat = a, A.isConchWebGL && 34041 === u._depthStencilFormat && (u._depthStencilFormat = 33189), u._mipMap = n, u._repeat = h, u._minFifter = l, u._magFifter = o, u.release(), u._createWebGLRenderTarget()), u
            }, e.TYPE2D = 1, e.TYPE3D = 2, e.POOL = [], e
        }(F),
        Ot = function(t) {
            function e() {
                this._glBuffer = null, this._buffer = null, this._bufferType = 0, this._bufferUsage = 0, this._byteLength = 0, e.__super.call(this), e._gl = bt.mainContext
            }
            s(e, "laya.webgl.utils.Buffer", S);
            var i = e.prototype;
            return i._bind = function() {
                this.activeResource(), e._bindActive[this._bufferType] !== this._glBuffer && (34962 === this._bufferType && (e._bindVertexBuffer = this._glBuffer), e._gl.bindBuffer(this._bufferType, e._bindActive[this._bufferType] = this._glBuffer), Bt.activeShader = null)
            }, i.recreateResource = function() {
                this._glBuffer || (this._glBuffer = e._gl.createBuffer()), this.completeCreate()
            }, i.disposeResource = function() {
                this._glBuffer && (bt.mainContext.deleteBuffer(this._glBuffer), this._glBuffer = null), this.memorySize = 0
            }, a(0, i, "bufferUsage", function() {
                return this._bufferUsage
            }), e._gl = null, e._bindActive = {}, e._bindVertexBuffer = null, e._enableAtributes = [], e
        }(),
        Vt = function(t) {
            function e(t) {
                this.texcoord = null, this.offsetX = 300, this.offsetY = 0, e.__super.call(this, 512, 0);
                var i = 8 * mt.BYTES_PE;
                this.position = [2, 5126, !1, i, 0], this.texcoord = [2, 5126, !1, i, 2 * mt.BYTES_PE], this.color = [4, 5126, !1, i, 4 * mt.BYTES_PE]
            }
            return s(e, "laya.webgl.shader.d2.skinAnishader.SkinSV", Et), e
        }(),
        Ut = function(t) {
            function e(t) {
                e.__super.call(this, 2, 0), this.color = []
            }
            s(e, "laya.webgl.shader.d2.value.Color2dSV", Et);
            return e.prototype.setValue = function(t) {
                t.fillStyle && (this.color = t.fillStyle._color._color), t.strokeStyle && (this.color = t.strokeStyle._color._color)
            }, e
        }(),
        kt = function(t) {
            function e(t) {
                this.u_colorMatrix = null, this.strength = 0, this.colorMat = null, this.colorAlpha = null, this.u_TexRange = [0, 1, 0, 1], this.u_offset = [0, 0], this.texcoord = Et._TEXCOORD, e.__super.call(this, 256, 0)
            }
            s(e, "laya.webgl.shader.d2.value.FillTextureSV", Et);
            var i = e.prototype;
            return i.setValue = function(t) {
                this.ALPHA = t.ALPHA, t.filters && this.setFilters(t.filters)
            }, i.clear = function() {
                this.texture = null, this.shader = null, this.defines.setValue(0)
            }, e
        }(),
        Ht = function(t) {
            function e(t) {
                this.u_colorMatrix = null, this.strength = 0, this.blurInfo = null, this.colorMat = null, this.colorAlpha = null, this.texcoord = Et._TEXCOORD, void 0 === t && (t = 0), e.__super.call(this, 1, t)
            }
            s(e, "laya.webgl.shader.d2.value.TextureSV", Et);
            var i = e.prototype;
            return i.setValue = function(t) {
                this.ALPHA = t.ALPHA, t.filters && this.setFilters(t.filters)
            }, i.clear = function() {
                this.texture = null, this.shader = null, this.defines.setValue(0)
            }, e
        }(),
        Gt = function(t) {
            function e(t) {
                this.a_color = null, this.u_pos = [0, 0], e.__super.call(this, 4, 0), this.position = [2, 5126, !1, 5 * mt.BYTES_PE, 0], this.a_color = [3, 5126, !1, 5 * mt.BYTES_PE, 2 * mt.BYTES_PE]
            }
            return s(e, "laya.webgl.shader.d2.value.PrimitiveSV", Et), e
        }(),
        Wt = function(t) {
            function e() {
                this._atlaser = null, this._flashCacheImage = null, this._flashCacheImageNeedFlush = !1, e.__super.call(this)
            }
            s(e, "laya.webgl.atlas.AtlasWebGLCanvas", t);
            var i = e.prototype;
            return i.recreateResource = function() {
                var t = bt.mainContext,
                    e = this._source = t.createTexture(),
                    i = yt.curBindTexTarget,
                    r = yt.curBindTexValue;
                yt.bindTexture(t, 3553, e), t.texImage2D(3553, 0, 6408, this._w, this._h, 0, 6408, 5121, null), t.texParameteri(3553, 10241, 9729), t.texParameteri(3553, 10240, 9729), t.texParameteri(3553, 10242, 33071), t.texParameteri(3553, 10243, 33071), i && r && yt.bindTexture(t, i, r), this.memorySize = this._w * this._h * 4, this.completeCreate()
            }, i.disposeResource = function() {
                this._source && (bt.mainContext.deleteTexture(this._source), this._source = null, this.memorySize = 0)
            }, i.texSubImage2D = function(t, e, i) {
                if (A.isFlash) {
                    this._flashCacheImage || (this._flashCacheImage = v.create(""), this._flashCacheImage._image.createCanvas(this._w, this._h));
                    var r = i.bitmapdata;
                    this._flashCacheImage._image.copyPixels(r, 0, 0, r.width, r.height, t, e), this._flashCacheImageNeedFlush || (this._flashCacheImageNeedFlush = !0)
                } else {
                    var s = bt.mainContext,
                        a = yt.curBindTexTarget,
                        n = yt.curBindTexValue;
                    yt.bindTexture(s, 3553, this._source), A.isConchWebGL ? (t - 1 >= 0 && s.texSubImage2DEx(!0, 3553, 0, t - 1, e, 6408, 5121, i), t + 1 <= this._w && s.texSubImage2DEx(!0, 3553, 0, t + 1, e, 6408, 5121, i), e - 1 >= 0 && s.texSubImage2DEx(!0, 3553, 0, t, e - 1, 6408, 5121, i), e + 1 <= this._h && s.texSubImage2DEx(!0, 3553, 0, t, e + 1, 6408, 5121, i), s.texSubImage2DEx(!0, 3553, 0, t, e, 6408, 5121, i)) : (s.pixelStorei(37441, !0), t - 1 >= 0 && s.texSubImage2D(3553, 0, t - 1, e, 6408, 5121, i), t + 1 <= this._w && s.texSubImage2D(3553, 0, t + 1, e, 6408, 5121, i), e - 1 >= 0 && s.texSubImage2D(3553, 0, t, e - 1, 6408, 5121, i), e + 1 <= this._h && s.texSubImage2D(3553, 0, t, e + 1, 6408, 5121, i), s.texSubImage2D(3553, 0, t, e, 6408, 5121, i), s.pixelStorei(37441, !1)), a && n && yt.bindTexture(s, a, n)
                }
            }, i.texSubImage2DPixel = function(t, e, i, r, s) {
                var a = bt.mainContext,
                    n = yt.curBindTexTarget,
                    h = yt.curBindTexValue;
                yt.bindTexture(a, 3553, this._source);
                var l = new Uint8Array(s.data);
                A.isConchWebGL ? a.texSubImage2DEx(!0, 3553, 0, t, e, i, r, 6408, 5121, l) : (a.pixelStorei(37441, !0), a.texSubImage2D(3553, 0, t, e, i, r, 6408, 5121, l), a.pixelStorei(37441, !1)), n && h && yt.bindTexture(a, n, h)
            }, a(0, i, "width", t.prototype._$get_width, function(t) {
                this._w = t
            }), a(0, i, "height", t.prototype._$get_height, function(t) {
                this._h = t
            }), e
        }(o),
        zt = function(t) {
            function e() {
                this.flipY = !0, this.alwaysChange = !1, e.__super.call(this)
            }
            s(e, "laya.webgl.resource.WebGLCanvas", o);
            var i = e.prototype;
            return i.getCanvas = function() {
                return this._canvas
            }, i.clear = function() {
                this._ctx && this._ctx.clear()
            }, i.destroy = function() {
                this._ctx && this._ctx.destroy(), this._ctx = null
            }, i._setContext = function(t) {
                this._ctx = t
            }, i.getContext = function(t, i) {
                return this._ctx ? this._ctx : this._ctx = e._createContext(this)
            }, i.size = function(t, e) {
                this._w == t && this._h == e || (this._w = t, this._h = e, this._ctx && this._ctx.size(t, e), this._canvas && (this._canvas.height = e, this._canvas.width = t))
            }, i.activeResource = function(t) {
                void 0 === t && (t = !1), this._source || this.recreateResource()
            }, i.recreateResource = function() {
                this.createWebGlTexture(), this.completeCreate()
            }, i.disposeResource = function() {
                this._source && !this.iscpuSource && (bt.mainContext.deleteTexture(this._source), this._source = null, this.memorySize = 0)
            }, i.createWebGlTexture = function() {
                var t = bt.mainContext;
                this._canvas;
                var i = this._source = t.createTexture();
                this.iscpuSource = !1;
                var r = yt.curBindTexTarget,
                    s = yt.curBindTexValue;
                yt.bindTexture(t, 3553, i), t.pixelStorei(37440, this.flipY ? 1 : 0), A.isConchWebGL ? t.texImage2DEx(e.premulAlpha, 3553, 0, 6408, 6408, 5121, this._imgData) : (e.premulAlpha && t.pixelStorei(37441, !0), t.texImage2D(3553, 0, 6408, 6408, 5121, this._imgData), e.premulAlpha && t.pixelStorei(37441, !1)), t.texParameteri(3553, 10240, 9729), t.texParameteri(3553, 10241, 9729), t.texParameteri(3553, 10242, 33071), t.texParameteri(3553, 10243, 33071), t.pixelStorei(37440, 0), this.memorySize = this._w * this._h * 4, r && s && yt.bindTexture(t, r, s)
            }, i.reloadCanvasData = function() {
                var t = bt.mainContext;
                if (!this._source) throw "reloadCanvasData error, gl texture not created!";
                var i = yt.curBindTexTarget,
                    r = yt.curBindTexValue;
                yt.bindTexture(t, 3553, this._source), A.isConchWebGL ? t.texImage2DEx(e.premulAlpha, 3553, 0, 6408, 6408, 5121, this._imgData) : (e.premulAlpha && t.pixelStorei(37441, !0), t.texImage2D(3553, 0, 6408, 6408, 5121, this._imgData), e.premulAlpha && t.pixelStorei(37441, !1)), t.pixelStorei(37440, 0), i && r && yt.bindTexture(t, i, r)
            }, i.texSubImage2D = function(t, e, i) {
                var r = bt.mainContext,
                    s = yt.curBindTexTarget,
                    a = yt.curBindTexValue;
                yt.bindTexture(r, 3553, this._source), A.isConchWebGL ? r.texSubImage2DEx(!0, 3553, 0, e, i, 6408, 5121, t._source) : (r.pixelStorei(37441, !0), r.texSubImage2D(3553, 0, e, i, 6408, 5121, t._source), r.pixelStorei(37441, !1)), s && a && yt.bindTexture(r, s, a)
            }, i.toBase64 = function(t, e, i) {
                var r = null;
                this._canvas && (r = this._canvas.toDataURL(t, e)), i.call(this, r)
            }, a(0, i, "context", function() {
                return this._ctx
            }), a(0, i, "source", function() {
                return this.alwaysChange && this.reloadCanvasData(), this._source
            }), a(0, i, "asBitmap", null, function(t) {
                this._ctx && (this._ctx.asBitmap = t)
            }), e._createContext = null, e.premulAlpha = !1, e
        }(),
        Yt = function(t) {
            function e(t, i) {
                this.CborderSize = 12, e.__super.call(this), this.char = t, this.isSpace = " " === t, this.xs = i.scaleX, this.ys = i.scaleY, this.font = i.font.toString(), this.fontSize = i.font.size, this.fillColor = i.fillColor, this.borderColor = i.borderColor, this.lineWidth = i.lineWidth, this.underLine = i.underLine;
                var r, s = A.isConchApp;
                s ? ((r = ConchTextCanvas)._source = ConchTextCanvas, r._source.canvas = ConchTextCanvas) : r = u.canvas.source, this.canvas = r, this._enableMerageInAtlas = !0, this._ctx = s ? r : this.canvas.getContext("2d", void 0);
                var a = B.measureText(this.char, this.font);
                this.cw = a.width * this.xs, this.ch = (a.height || this.fontSize) * this.ys, this.onresize(this.cw + 2 * this.CborderSize, this.ch + 2 * this.CborderSize), this.texture = new F(this)
            }
            s(e, "laya.webgl.resource.WebGLCharImage", o);
            var r = e.prototype;
            return i.imps(r, {
                "laya.webgl.resource.IMergeAtlasBitmap": !0
            }), r.active = function() {
                this.texture.active()
            }, r.recreateResource = function() {
                var t = A.isConchApp;
                if (this.onresize(this.cw + 2 * this.CborderSize, this.ch + 2 * this.CborderSize), this.canvas && (this.canvas.height = this._h, this.canvas.width = this._w), t) {
                    var e = this.fontSize;
                    1 == this.xs && 1 == this.ys || (e = parseInt(e * (this.xs > this.ys ? this.xs : this.ys) + ""));
                    var i = "normal 100 " + e + "px Arial";
                    this.borderColor && (i += " 1 " + this.borderColor), this._ctx.font = i, this._ctx.textBaseline = "top", this._ctx.fillStyle = this.fillColor, this._ctx.fillText(this.char, this.CborderSize, this.CborderSize, null, null, null)
                } else {
                    if (this._ctx.save(), this._ctx.clearRect(0, 0, this.cw + 2 * this.CborderSize, this.ch + 2 * this.CborderSize), this._ctx.font = this.font, D.RightToLeft && (this._ctx.textAlign = "end"), this._ctx.textBaseline = "top", this._ctx.translate(this.CborderSize, this.CborderSize), 1 == this.xs && 1 == this.ys || this._ctx.scale(this.xs, this.ys), this.fillColor && this.borderColor ? (this._ctx.strokeStyle = this.borderColor, this._ctx.lineWidth = this.lineWidth, this._ctx.strokeText(this.char, 0, 0, null, null, 0, null), this._ctx.fillStyle = this.fillColor, this._ctx.fillText(this.char, 0, 0, null, null, null)) : -1 === this.lineWidth ? (this._ctx.fillStyle = this.fillColor ? this.fillColor : "white", this._ctx.fillText(this.char, 0, 0, null, null, null)) : (this._ctx.strokeStyle = this.borderColor ? this.borderColor : "white", this._ctx.lineWidth = this.lineWidth, this._ctx.strokeText(this.char, 0, 0, null, null, 0, null)), this.underLine) {
                        this._ctx.lineWidth = 1, this._ctx.strokeStyle = this.fillColor, this._ctx.beginPath(), this._ctx.moveTo(0, this.fontSize + 1);
                        var r = this._ctx.measureText(this.char).width + 1;
                        this._ctx.lineTo(r, this.fontSize + 1), this._ctx.stroke()
                    }
                    this._ctx.restore()
                }
                this.borderSize = this.CborderSize, this.completeCreate()
            }, r.onresize = function(t, e) {
                this._w = t, this._h = e, this._allowMerageInAtlas = !0
            }, r.clearAtlasSource = function() {}, a(0, r, "allowMerageInAtlas", function() {
                return this._allowMerageInAtlas
            }), a(0, r, "atlasSource", function() {
                return this.canvas
            }), a(0, r, "enableMerageInAtlas", function() {
                return this._enableMerageInAtlas
            }, function(t) {
                this._enableMerageInAtlas = t
            }), e.createOneChar = function(t, i) {
                return new e(t, i)
            }, e
        }(),
        Xt = function(t) {
            function e(t, i, r, s, a, n, h, l, o) {
                void 0 === r && (r = 6408), void 0 === s && (s = 5121), void 0 === a && (a = 34041), void 0 === n && (n = !1), void 0 === h && (h = !1), void 0 === l && (l = -1), void 0 === o && (o = 1), e.__super.call(this), this._w = t, this._h = i, this._surfaceFormat = r, this._surfaceType = s, this._depthStencilFormat = a, A.isConchWebGL && 34041 === this._depthStencilFormat && (this._depthStencilFormat = 33189), this._mipMap = n, this._repeat = h, this._minFifter = l, this._magFifter = o
            }
            s(e, "laya.webgl.resource.WebGLRenderTarget", o);
            var i = e.prototype;
            return i.recreateResource = function() {
                var t = bt.mainContext;
                this._frameBuffer || (this._frameBuffer = t.createFramebuffer()), this._source || (this._source = t.createTexture());
                var e = yt.curBindTexTarget,
                    i = yt.curBindTexValue;
                yt.bindTexture(t, 3553, this._source), t.texImage2D(3553, 0, 6408, this._w, this._h, 0, this._surfaceFormat, this._surfaceType, null);
                var r = this._minFifter,
                    s = this._magFifter,
                    a = this._repeat ? 10497 : 33071,
                    n = h.isPOT(this._w, this._h);
                if (n ? (this._mipMap ? -1 !== r || (r = 9987) : -1 !== r || (r = 9729), -1 !== s || (s = 9729), t.texParameteri(3553, 10241, r), t.texParameteri(3553, 10240, s), t.texParameteri(3553, 10242, a), t.texParameteri(3553, 10243, a), this._mipMap && t.generateMipmap(3553)) : (-1 !== r || (r = 9729), -1 !== s || (s = 9729), t.texParameteri(3553, 10241, r), t.texParameteri(3553, 10240, s), t.texParameteri(3553, 10242, 33071), t.texParameteri(3553, 10243, 33071)), t.bindFramebuffer(36160, this._frameBuffer), t.framebufferTexture2D(36160, 36064, 3553, this._source, 0), this._depthStencilFormat) switch (this._depthStencilBuffer || (this._depthStencilBuffer = t.createRenderbuffer()), t.bindRenderbuffer(36161, this._depthStencilBuffer), t.renderbufferStorage(36161, this._depthStencilFormat, this._w, this._h), this._depthStencilFormat) {
                    case 33189:
                        t.framebufferRenderbuffer(36160, 36096, 36161, this._depthStencilBuffer);
                        break;
                    case 36168:
                        t.framebufferRenderbuffer(36160, 36128, 36161, this._depthStencilBuffer);
                        break;
                    case 34041:
                        t.framebufferRenderbuffer(36160, 33306, 36161, this._depthStencilBuffer)
                }
                t.bindFramebuffer(36160, null), e && i && yt.bindTexture(t, e, i), t.bindRenderbuffer(36161, null), n && this._mipMap ? this.memorySize = this._w * this._h * 4 * (1 + 1 / 3) : this.memorySize = this._w * this._h * 4, this.completeCreate()
            }, i.disposeResource = function() {
                this._frameBuffer && (bt.mainContext.deleteTexture(this._source), bt.mainContext.deleteFramebuffer(this._frameBuffer), bt.mainContext.deleteRenderbuffer(this._depthStencilBuffer), this._source = null, this._frameBuffer = null, this._depthStencilBuffer = null, this.memorySize = 0)
            }, a(0, i, "depthStencilBuffer", function() {
                return this._depthStencilBuffer
            }), a(0, i, "frameBuffer", function() {
                return this._frameBuffer
            }), e
        }(),
        Kt = function(t) {
            function e(t, i, r, s, a, n, h) {
                this.offsetX = 0, this.offsetY = 0, e.__super.call(this), this.repeat = !0, this.mipmap = !1, this.minFifter = -1, this.magFifter = -1, this.atlasImage = n, this.canvas = t, this._ctx = t.getContext("2d", void 0), this._w = s, this._h = a, this.offsetX = i, this.offsetY = r, this.src = h, this._enableMerageInAtlas = !0, k.enabled && this._w < k.atlasLimitWidth && this._h < k.atlasLimitHeight ? this._allowMerageInAtlas = !0 : this._allowMerageInAtlas = !1
            }
            s(e, "laya.webgl.resource.WebGLSubImage", o);
            var r = e.prototype;
            return i.imps(r, {
                "laya.webgl.resource.IMergeAtlasBitmap": !0
            }), r.size = function(t, e) {
                this._w = t, this._h = e, this._ctx && this._ctx.size(t, e), this.canvas && (this.canvas.height = e, this.canvas.width = t)
            }, r.recreateResource = function() {
                this.size(this._w, this._h), this._ctx.drawImage(this.atlasImage, this.offsetX, this.offsetY, this._w, this._h, 0, 0, this._w, this._h), this._allowMerageInAtlas && this._enableMerageInAtlas ? this.memorySize = 0 : this.createWebGlTexture(), this.completeCreate()
            }, r.createWebGlTexture = function() {
                var t = bt.mainContext;
                if (!this.canvas) throw "create GLTextur err:no data:" + this.canvas;
                var e = this._source = t.createTexture(),
                    i = yt.curBindTexTarget,
                    r = yt.curBindTexValue;
                yt.bindTexture(t, 3553, e), A.isConchWebGL ? t.texImage2DEx(!0, 3553, 0, 6408, 6408, 5121, this.canvas) : (t.pixelStorei(37441, !0), t.texImage2D(3553, 0, 6408, 6408, 5121, this.canvas), t.pixelStorei(37441, !1));
                var s = this.minFifter,
                    a = this.magFifter,
                    n = this.repeat ? 10497 : 33071,
                    l = h.isPOT(this.width, this.height);
                l ? (this.mipmap ? -1 !== s || (s = 9987) : -1 !== s || (s = 9729), -1 !== a || (a = 9729), t.texParameteri(3553, 10240, a), t.texParameteri(3553, 10241, s), t.texParameteri(3553, 10242, n), t.texParameteri(3553, 10243, n), this.mipmap && t.generateMipmap(3553)) : (-1 !== s || (s = 9729), -1 !== a || (a = 9729), t.texParameteri(3553, 10241, s), t.texParameteri(3553, 10240, a), t.texParameteri(3553, 10242, 33071), t.texParameteri(3553, 10243, 33071)), i && r && yt.bindTexture(t, i, r), this.canvas = null, l && this.mipmap ? this.memorySize = this._w * this._h * 4 * (1 + 1 / 3) : this.memorySize = this._w * this._h * 4
            }, r.disposeResource = function() {
                k.enabled && this._allowMerageInAtlas || !this._source || (bt.mainContext.deleteTexture(this._source), this._source = null, this.memorySize = 0)
            }, r.clearAtlasSource = function() {}, a(0, r, "allowMerageInAtlas", function() {
                return this._allowMerageInAtlas
            }), a(0, r, "atlasSource", function() {
                return this.canvas
            }), a(0, r, "enableMerageInAtlas", function() {
                return this._allowMerageInAtlas
            }, function(t) {
                this._allowMerageInAtlas = t
            }), e
        }(),
        Qt = function(t) {
            function e(t, i, r, s) {
                if (this._curActTexIndex = 0, this.tag = {}, this._program = null, this._params = null, this._paramsMap = {}, this._offset = 0, e.__super.call(this), !t || !i) throw "Shader Error";
                this._id = ++e._count, this._vs = t, this._ps = i, this._nameMap = s || {}, null != r && (e.sharders[r] = this)
            }
            s(e, "laya.webgl.shader.Shader", Bt);
            var i = e.prototype;
            return i.recreateResource = function() {
                this._compile(), this.completeCreate(), this.memorySize = 0
            }, i.disposeResource = function() {
                bt.mainContext.deleteShader(this._vshader), bt.mainContext.deleteShader(this._pshader), bt.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null, this._params = null, this._paramsMap = {}, this.memorySize = 0, this._curActTexIndex = 0
            }, i._compile = function() {
                if (this._vs && this._ps && !this._params) {
                    this._reCompile = !0, this._params = [];
                    var t = [this._vs, this._ps],
                        i = bt.mainContext;
                    if (this._program = i.createProgram(), this._vshader = e._createShader(i, t[0], 35633), this._pshader = e._createShader(i, t[1], 35632), i.attachShader(this._program, this._vshader), i.attachShader(this._program, this._pshader), i.linkProgram(this._program), !A.isConchApp && !i.getProgramParameter(this._program, 35714)) throw i.getProgramInfoLog(this._program);
                    var r, s = 0,
                        a = 0,
                        n = 0;
                    for (n = A.isConchApp ? i.getProgramParameterEx(this._vs, this._ps, "", 35721) : i.getProgramParameter(this._program, 35721), s = 0; s < n; s++) {
                        var h = null;
                        r = {
                            vartype: "attribute",
                            glfun: null,
                            ivartype: 0,
                            attrib: h = A.isConchApp ? i.getActiveAttribEx(this._vs, this._ps, "", s) : i.getActiveAttrib(this._program, s),
                            location: i.getAttribLocation(this._program, h.name),
                            name: h.name,
                            type: h.type,
                            isArray: !1,
                            isSame: !1,
                            preValue: null,
                            indexOfParams: 0
                        }, this._params.push(r)
                    }
                    var l = 0;
                    for (l = A.isConchApp ? i.getProgramParameterEx(this._vs, this._ps, "", 35718) : i.getProgramParameter(this._program, 35718), s = 0; s < l; s++) {
                        var o = null;
                        o = A.isConchApp ? i.getActiveUniformEx(this._vs, this._ps, "", s) : i.getActiveUniform(this._program, s), (r = {
                            vartype: "uniform",
                            glfun: null,
                            ivartype: 1,
                            attrib: h,
                            location: i.getUniformLocation(this._program, o.name),
                            name: o.name,
                            type: o.type,
                            isArray: !1,
                            isSame: !1,
                            preValue: null,
                            indexOfParams: 0
                        }).name.indexOf("[0]") > 0 && (r.name = r.name.substr(0, r.name.length - 3), r.isArray = !0, r.location = i.getUniformLocation(this._program, r.name)), this._params.push(r)
                    }
                    for (s = 0, a = this._params.length; s < a; s++)
                        if (r = this._params[s], r.indexOfParams = s, r.index = 1, r.value = [r.location, null], r.codename = r.name, r.name = this._nameMap[r.codename] ? this._nameMap[r.codename] : r.codename, this._paramsMap[r.name] = r, r._this = this, r.uploadedValue = [], "attribute" !== r.vartype) switch (r.type) {
                            case 5124:
                                r.fun = r.isArray ? this._uniform1iv : this._uniform1i;
                                break;
                            case 5126:
                                r.fun = r.isArray ? this._uniform1fv : this._uniform1f;
                                break;
                            case 35664:
                                r.fun = r.isArray ? this._uniform_vec2v : this._uniform_vec2;
                                break;
                            case 35665:
                                r.fun = r.isArray ? this._uniform_vec3v : this._uniform_vec3;
                                break;
                            case 35666:
                                r.fun = r.isArray ? this._uniform_vec4v : this._uniform_vec4;
                                break;
                            case 35678:
                                r.fun = this._uniform_sampler2D;
                                break;
                            case 35680:
                                r.fun = this._uniform_samplerCube;
                                break;
                            case 35676:
                                r.glfun = i.uniformMatrix4fv, r.fun = this._uniformMatrix4fv;
                                break;
                            case 35670:
                                r.fun = this._uniform1i;
                                break;
                            case 35674:
                            case 35675:
                            default:
                                throw new Error("compile shader err!")
                        } else r.fun = this._attribute
                }
            }, i.getUniform = function(t) {
                return this._paramsMap[t]
            }, i._attribute = function(t, e) {
                var i = bt.mainContext,
                    r = Ot._enableAtributes,
                    s = t.location;
                return r[s] || i.enableVertexAttribArray(s), i.vertexAttribPointer(s, e[0], e[1], e[2], e[3], e[4] + this._offset), r[s] = Ot._bindVertexBuffer, 1
            }, i._uniform1f = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e ? (bt.mainContext.uniform1f(t.location, i[0] = e), 1) : 0
            }, i._uniform1fv = function(t, e) {
                if (e.length < 4) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (bt.mainContext.uniform1fv(t.location, e), i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0
                }
                return bt.mainContext.uniform1fv(t.location, e), 1
            }, i._uniform_vec2 = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] ? (bt.mainContext.uniform2f(t.location, i[0] = e[0], i[1] = e[1]), 1) : 0
            }, i._uniform_vec2v = function(t, e) {
                if (e.length < 2) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (bt.mainContext.uniform2fv(t.location, e), i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0
                }
                return bt.mainContext.uniform2fv(t.location, e), 1
            }, i._uniform_vec3 = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (bt.mainContext.uniform3f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 1) : 0
            }, i._uniform_vec3v = function(t, e) {
                return bt.mainContext.uniform3fv(t.location, e), 1
            }, i._uniform_vec4 = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (bt.mainContext.uniform4f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 1) : 0
            }, i._uniform_vec4v = function(t, e) {
                return bt.mainContext.uniform4fv(t.location, e), 1
            }, i._uniformMatrix2fv = function(t, e) {
                return bt.mainContext.uniformMatrix2fv(t.location, !1, e), 1
            }, i._uniformMatrix3fv = function(t, e) {
                return bt.mainContext.uniformMatrix3fv(t.location, !1, e), 1
            }, i._uniformMatrix4fv = function(t, e) {
                return bt.mainContext.uniformMatrix4fv(t.location, !1, e), 1
            }, i._uniform1i = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e ? (bt.mainContext.uniform1i(t.location, i[0] = e), 1) : 0
            }, i._uniform1iv = function(t, e) {
                return bt.mainContext.uniform1iv(t.location, e), 1
            }, i._uniform_ivec2 = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] ? (bt.mainContext.uniform2i(t.location, i[0] = e[0], i[1] = e[1]), 1) : 0
            }, i._uniform_ivec2v = function(t, e) {
                return bt.mainContext.uniform2iv(t.location, e), 1
            }, i._uniform_vec3i = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (bt.mainContext.uniform3i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 1) : 0
            }, i._uniform_vec3vi = function(t, e) {
                return bt.mainContext.uniform3iv(t.location, e), 1
            }, i._uniform_vec4i = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (bt.mainContext.uniform4i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 1) : 0
            }, i._uniform_vec4vi = function(t, e) {
                return bt.mainContext.uniform4iv(t.location, e), 1
            }, i._uniform_sampler2D = function(t, i) {
                var r = bt.mainContext,
                    s = t.uploadedValue;
                return null == s[0] ? (s[0] = this._curActTexIndex, r.uniform1i(t.location, this._curActTexIndex), r.activeTexture(e._TEXTURES[this._curActTexIndex]), yt.bindTexture(r, 3553, i), this._curActTexIndex++, 1) : (r.activeTexture(e._TEXTURES[s[0]]), yt.bindTexture(r, 3553, i), 0)
            }, i._uniform_samplerCube = function(t, i) {
                var r = bt.mainContext,
                    s = t.uploadedValue;
                return null == s[0] ? (s[0] = this._curActTexIndex, r.uniform1i(t.location, this._curActTexIndex), r.activeTexture(e._TEXTURES[this._curActTexIndex]), yt.bindTexture(r, 34067, i), this._curActTexIndex++, 1) : (r.activeTexture(e._TEXTURES[s[0]]), yt.bindTexture(r, 34067, i), 0)
            }, i._noSetValue = function(t) {
                console.log("no....:" + t.name)
            }, i.uploadOne = function(t, e) {
                this.activeResource(), yt.UseProgram(this._program);
                var i = this._paramsMap[t];
                i.fun.call(this, i, e)
            }, i.uploadTexture2D = function(t) {
                C.shaderCall++;
                var e = bt.mainContext;
                e.activeTexture(33984), yt.bindTexture(e, 3553, t)
            }, i.upload = function(t, e) {
                Bt.activeShader = Bt.bindShader = this, this._lastUseFrameCount === C.loopCount || this.activeResource(), yt.UseProgram(this._program), this._reCompile ? (e = this._params, this._reCompile = !1) : e = e || this._params;
                bt.mainContext;
                for (var i, r, s = e.length, a = 0, n = 0; n < s; n++) null !== (r = t[(i = e[n]).name]) && (a += i.fun.call(this, i, r));
                C.shaderCall += a
            }, i.uploadArray = function(t, e, i) {
                Bt.activeShader = this, Bt.bindShader = this, this.activeResource(), yt.UseProgram(this._program);
                this._params;
                for (var r, s, a = 0, n = e - 2; n >= 0; n -= 2)(s = this._paramsMap[t[n]]) && null != (r = t[n + 1]) && (i && i[s.name] && i[s.name].bind(), a += s.fun.call(this, s, r));
                C.shaderCall += a
            }, i.getParams = function() {
                return this._params
            }, e.getShader = function(t) {
                return e.sharders[t]
            }, e.create = function(t, i, r, s) {
                return new e(t, i, r, s)
            }, e.withCompile = function(t, i, r, s) {
                if (r && e.sharders[r]) return e.sharders[r];
                var a = e._preCompileShader[2e-4 * t];
                if (!a) throw new Error("withCompile shader err!" + t);
                return a.createShader(i, r, s)
            }, e.withCompile2D = function(t, i, r, s, a) {
                if (s && e.sharders[s]) return e.sharders[s];
                var n = e._preCompileShader[2e-4 * t + i];
                if (!n) throw new Error("withCompile shader err!" + t + " " + i);
                return n.createShader(r, s, a)
            }, e.addInclude = function(t, e) {
                xt.addInclude(t, e)
            }, e.preCompile = function(t, i, r, s) {
                var a = 2e-4 * t;
                e._preCompileShader[a] = new xt(a, i, r, s)
            }, e.preCompile2D = function(t, i, r, s, a) {
                var n = 2e-4 * t + i;
                e._preCompileShader[n] = new xt(n, r, s, a)
            }, e._createShader = function(t, e, i) {
                var r = t.createShader(i);
                return t.shaderSource(r, e), t.compileShader(r), r
            }, e._TEXTURES = [33984, 33985, 33986, 33987, 33988, 33989, 33990, , 33991, 33992], e._count = 0, e._preCompileShader = {}, e.SHADERNAME2ID = 2e-4, e.sharders = (e.sharders = [], e.sharders.length = 32, e.sharders), r(e, ["nameKey", function() {
                return this.nameKey = new L
            }]), e
        }(),
        Zt = function(t) {
            function e() {
                this._maxsize = 0, this._upload = !0, this._uploadSize = 0, e.__super.call(this), this.lock = !0
            }
            s(e, "laya.webgl.utils.Buffer2D", t);
            var i = e.prototype;
            return i.needSize = function(t) {
                var e = this._byteLength;
                if (t) {
                    var i = this._byteLength + t;
                    i <= this._buffer.byteLength || this._resizeBuffer(i << 1, !0), this._byteLength = i
                }
                return e
            }, i._bufferData = function() {
                this._maxsize = Math.max(this._maxsize, this._byteLength), C.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this.memorySize = this._buffer.byteLength, this._buffer = this._buffer.slice(0, this._maxsize + 64), this._checkArrayUse()), this._maxsize = this._byteLength), this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, Ot._gl.bufferData(this._bufferType, this._uploadSize, this._bufferUsage), this.memorySize = this._uploadSize), Ot._gl.bufferSubData(this._bufferType, 0, this._buffer)
            }, i._bufferSubData = function(t, e, i) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this._maxsize = Math.max(this._maxsize, this._byteLength), C.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this.memorySize = this._buffer.byteLength, this._buffer = this._buffer.slice(0, this._maxsize + 64), this._checkArrayUse()), this._maxsize = this._byteLength), this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, Ot._gl.bufferData(this._bufferType, this._uploadSize, this._bufferUsage), this.memorySize = this._uploadSize), e || i) {
                    var r = this._buffer.slice(e, i);
                    Ot._gl.bufferSubData(this._bufferType, t, r)
                } else Ot._gl.bufferSubData(this._bufferType, t, this._buffer)
            }, i._checkArrayUse = function() {}, i._bind_upload = function() {
                return !!this._upload && (this._upload = !1, this._bind(), this._bufferData(), !0)
            }, i._bind_subUpload = function(t, e, i) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), !!this._upload && (this._upload = !1, this._bind(), this._bufferSubData(t, e, i), !0)
            }, i._resizeBuffer = function(t, e) {
                if (t < this._buffer.byteLength) return this;
                if (this.memorySize = t, e && this._buffer && this._buffer.byteLength > 0) {
                    var i = new ArrayBuffer(t);
                    new Uint8Array(i).set(new Uint8Array(this._buffer), 0), this._buffer = i
                } else this._buffer = new ArrayBuffer(t);
                return this._checkArrayUse(), this._upload = !0, this
            }, i.append = function(t) {
                this._upload = !0;
                var e, i = 0;
                i = t.byteLength, t instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + i, !0), e = new Uint8Array(this._buffer, this._byteLength)) : t instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + i, !0), e = new Uint16Array(this._buffer, this._byteLength)) : t instanceof Float32Array && (this._resizeBuffer(this._byteLength + i, !0), e = new Float32Array(this._buffer, this._byteLength)), e.set(t, 0), this._byteLength += i, this._checkArrayUse()
            }, i.appendU16Array = function(t, e) {
                this._resizeBuffer(this._byteLength + 2 * e, !0);
                for (var i = new Uint16Array(this._buffer, this._byteLength, e), r = 0; r < e; r++) i[r] = t[r];
                this._byteLength += 2 * e, this._checkArrayUse()
            }, i.appendEx = function(t, e) {
                this._upload = !0;
                var i = 0;
                i = t.byteLength, this._resizeBuffer(this._byteLength + i, !0), new e(this._buffer, this._byteLength).set(t, 0), this._byteLength += i, this._checkArrayUse()
            }, i.appendEx2 = function(t, e, i, r) {
                void 0 === r && (r = 1), this._upload = !0;
                var s, a = 0;
                a = i * r, this._resizeBuffer(this._byteLength + a, !0), s = new e(this._buffer, this._byteLength);
                var n = 0;
                for (n = 0; n < i; n++) s[n] = t[n];
                this._byteLength += a, this._checkArrayUse()
            }, i.getBuffer = function() {
                return this._buffer
            }, i.setNeedUpload = function() {
                this._upload = !0
            }, i.getNeedUpload = function() {
                return this._upload
            }, i.upload = function() {
                var t = this._bind_upload();
                return Ot._gl.bindBuffer(this._bufferType, null), Ot._bindActive[this._bufferType] = null, Bt.activeShader = null, t
            }, i.subUpload = function(t, e, i) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0);
                var r = this._bind_subUpload();
                return Ot._gl.bindBuffer(this._bufferType, null), Ot._bindActive[this._bufferType] = null, Bt.activeShader = null, r
            }, i.disposeResource = function() {
                t.prototype.disposeResource.call(this), this._upload = !0, this._uploadSize = 0
            }, i.clear = function() {
                this._byteLength = 0, this._upload = !0
            }, a(0, i, "bufferLength", function() {
                return this._buffer.byteLength
            }), a(0, i, "byteLength", null, function(t) {
                this._byteLength !== t && (t <= this._buffer.byteLength || this._resizeBuffer(2 * t + 256, !0), this._byteLength = t)
            }), e.__int__ = function(t) {
                $t.QuadrangleIB = $t.create(35044), pt.fillIBQuadrangle($t.QuadrangleIB, 16)
            }, e.FLOAT32 = 4, e.SHORT = 2, e
        }(Ot),
        qt = (function(t) {
            function e(t) {
                this.u_blurX = !1, this.u_color = null, this.u_offset = null, this.u_strength = NaN, this.u_texW = 0, this.u_texH = 0, e.__super.call(this, 9)
            }
            s(e, "laya.webgl.shader.d2.value.GlowSV", t);
            var i = e.prototype;
            i.setValue = function(e) {
                t.prototype.setValue.call(this, e)
            }, i.clear = function() {
                t.prototype.clear.call(this)
            }
        }(Ht), function(t) {
            function e(t) {
                e.__super.call(this, 64), this.defines.add(64)
            }
            s(e, "laya.webgl.shader.d2.value.TextSV", t);
            var i = e.prototype;
            return i.release = function() {
                e.pool[e._length++] = this, this.clear()
            }, i.clear = function() {
                t.prototype.clear.call(this)
            }, e.create = function() {
                return e._length ? e.pool[--e._length] : new e(null)
            }, e.pool = [], e._length = 0, e
        }(Ht)),
        jt = function(t) {
            function e(t, i, r, s) {
                this._params2dQuick1 = null, this._params2dQuick2 = null, this._shaderValueWidth = NaN, this._shaderValueHeight = NaN, e.__super.call(this, t, i, r, s)
            }
            s(e, "laya.webgl.shader.d2.Shader2X", t);
            var i = e.prototype;
            return i.upload2dQuick1 = function(t) {
                this.upload(t, this._params2dQuick1 || this._make2dQuick1())
            }, i._make2dQuick1 = function() {
                if (!this._params2dQuick1) {
                    this.activeResource(), this._params2dQuick1 = [];
                    for (var t, e = this._params, i = 0, r = e.length; i < r; i++) t = e[i], (A.isFlash || "size" !== t.name && "position" !== t.name && "texcoord" !== t.name) && this._params2dQuick1.push(t)
                }
                return this._params2dQuick1
            }, i.disposeResource = function() {
                t.prototype.disposeResource.call(this), this._params2dQuick1 = null, this._params2dQuick2 = null
            }, i.upload2dQuick2 = function(t) {
                this.upload(t, this._params2dQuick2 || this._make2dQuick2())
            }, i._make2dQuick2 = function() {
                if (!this._params2dQuick2) {
                    this.activeResource(), this._params2dQuick2 = [];
                    for (var t, e = this._params, i = 0, r = e.length; i < r; i++) t = e[i], (A.isFlash || "size" !== t.name) && this._params2dQuick2.push(t)
                }
                return this._params2dQuick2
            }, e.create = function(t, i, r, s) {
                return new e(t, i, r, s)
            }, e
        }(Qt),
        $t = function(t) {
            function e(t) {
                this._uint8Array = null, this._uint16Array = null, void 0 === t && (t = 35044), e.__super.call(this), this._bufferUsage = t, this._bufferType = 34963, A.isFlash || (this._buffer = new ArrayBuffer(8))
            }
            s(e, "laya.webgl.utils.IndexBuffer2D", Zt);
            var i = e.prototype;
            return i._checkArrayUse = function() {
                this._uint8Array && (this._uint8Array = new Uint8Array(this._buffer)), this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer))
            }, i.getUint8Array = function() {
                return this._uint8Array || (this._uint8Array = new Uint8Array(this._buffer))
            }, i.getUint16Array = function() {
                return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer))
            }, i.destory = function() {
                this._uint16Array = null, this._uint8Array = null, this._buffer = null
            }, e.QuadrangleIB = null, e.create = function(t) {
                return void 0 === t && (t = 35044), new e(t)
            }, e
        }(),
        Jt = function(t) {
            function e(t, i) {
                this._floatArray32 = null, this._vertexStride = 0, e.__super.call(this), this._vertexStride = t, this._bufferUsage = i, this._bufferType = 34962, A.isFlash || (this._buffer = new ArrayBuffer(8)), this.getFloat32Array()
            }
            s(e, "laya.webgl.utils.VertexBuffer2D", t);
            var i = e.prototype;
            return i.getFloat32Array = function() {
                return this._floatArray32 || (this._floatArray32 = new Float32Array(this._buffer))
            }, i.bind = function(t) {
                t && t._bind(), this._bind()
            }, i.insertData = function(t, e) {
                this.getFloat32Array().set(t, e), this._upload = !0
            }, i.bind_upload = function(t) {
                t._bind_upload() || t._bind(), this._bind_upload() || this._bind()
            }, i._checkArrayUse = function() {
                this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer))
            }, i.disposeResource = function() {
                t.prototype.disposeResource.call(this);
                var e = Ot._enableAtributes;
                if (!A.isConchWebGL)
                    for (var i = 0; i < 10; i++) bt.mainContext.disableVertexAttribArray(i), e[i] = null
            }, i.destory = function() {
                this._byteLength = 0, this._upload = !0, this._buffer = null, this._floatArray32 = null
            }, a(0, i, "vertexStride", function() {
                return this._vertexStride
            }), e.create = function(t, i) {
                return void 0 === i && (i = 35048), new e(t, i)
            }, e
        }(Zt),
        te = function(t) {
            function e(t, i, r, s) {
                if (this._format = 0, this._mipmap = !1, this._allowMerageInAtlas = !1, this._enableMerageInAtlas = !1, this.repeat = !1, this._image = null, this.minFifter = 0, this.magFifter = 0, void 0 === r && (r = 6408), void 0 === s && (s = !0), e.__super.call(this, t, i), this._format = r, this._mipmap = s, this.repeat = !1, this.minFifter = -1, this.magFifter = -1, "string" == typeof t) this._url = t, this._src = t, this._image = new u.window.Image, i && (i.onload && (this.onload = i.onload), i.onerror && (this.onerror = i.onerror), i.onCreate && i.onCreate(this)), this._image.crossOrigin = t && 0 == t.indexOf("data:") ? null : "", t && (this._image.src = t);
                else if (t instanceof ArrayBuffer) {
                    this._src = i, this._url = this._src;
                    var a = new _(t);
                    a.readUTFBytes(4), a.readUTFBytes(2), a.getInt16();
                    a.endian = "bigEndian", this._w = a.getInt16(), this._h = a.getInt16();
                    a.getInt16(), a.getInt16();
                    this._image = new Uint8Array(t, a.pos), this._format = bt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL, k.enabled && this._w < k.atlasLimitWidth && this._h < k.atlasLimitHeight ? this._allowMerageInAtlas = !0 : this._allowMerageInAtlas = !1
                } else this._src = i, this._url = this._src, this._image = t.source || t, this.onresize();
                this._$5__enableMerageInAtlas = !0
            }
            s(e, "laya.webgl.resource.WebGLImage", v);
            var r = e.prototype;
            return i.imps(r, {
                "laya.webgl.resource.IMergeAtlasBitmap": !0
            }), r._init_ = function(t, e) {}, r._createWebGlTexture = function() {
                if (!this._image) throw "create GLTextur err:no data:" + this._image;
                var t = bt.mainContext,
                    e = this._source = t.createTexture(),
                    i = yt.curBindTexTarget,
                    r = yt.curBindTexValue;
                if (yt.bindTexture(t, 3553, e), A.isConchWebGL) switch (this._format) {
                    case 6408:
                        t.texImage2DEx(!0, 3553, 0, this._format, 6408, 5121, this._image);
                        break;
                    case bt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                        t.compressedTexImage2D(3553, 0, this._format, this._w, this._h, 0, this._image)
                } else {
                    switch (t.pixelStorei(37441, !0), this._format) {
                        case 6408:
                            t.texImage2D(3553, 0, this._format, 6408, 5121, this._image);
                            break;
                        case bt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                            t.compressedTexImage2D(3553, 0, this._format, this._w, this._h, 0, this._image)
                    }
                    t.pixelStorei(37441, !1)
                }
                var s = this.minFifter,
                    a = this.magFifter,
                    n = this.repeat ? 10497 : 33071,
                    l = h.isPOT(this._w, this._h);
                l ? (this.mipmap ? -1 !== s || (s = 9987) : -1 !== s || (s = 9729), -1 !== a || (a = 9729), t.texParameteri(3553, 10241, s), t.texParameteri(3553, 10240, a), t.texParameteri(3553, 10242, n), t.texParameteri(3553, 10243, n), this.mipmap && t.generateMipmap(3553)) : (-1 !== s || (s = 9729), -1 !== a || (a = 9729), t.texParameteri(3553, 10241, s), t.texParameteri(3553, 10240, a), t.texParameteri(3553, 10242, 33071), t.texParameteri(3553, 10243, 33071)), i && r && yt.bindTexture(t, i, r), this._image.onload = null, this._image = null, l && this.mipmap ? this.memorySize = this._w * this._h * 4 * (1 + 1 / 3) : this.memorySize = this._w * this._h * 4, this._recreateLock = !1
            }, r.recreateResource = function() {
                var t = this;
                if (null != this._src && "" !== this._src)
                    if (this._needReleaseAgain = !1, this._image) {
                        if (this._recreateLock) return;
                        this._allowMerageInAtlas && this._$5__enableMerageInAtlas ? (this.memorySize = 0, this._recreateLock = !1) : this._createWebGlTexture(), this.completeCreate()
                    } else {
                        this._recreateLock = !0;
                        var e = this;
                        this._image = new u.window.Image, this._image.crossOrigin = 0 == this._src.indexOf("data:") ? null : "", this._image.onload = function() {
                            if (e._needReleaseAgain) return e._needReleaseAgain = !1, e._image.onload = null, void(e._image = null);
                            e._allowMerageInAtlas && e._enableMerageInAtlas ? (t.memorySize = 0, t._recreateLock = !1) : e._createWebGlTexture(), e.completeCreate()
                        }, this._image.src = this._src
                    }
            }, r.disposeResource = function() {
                this._recreateLock && (this._needReleaseAgain = !0), this._source && (bt.mainContext.deleteTexture(this._source), this._source = null, this._image = null, this.memorySize = 0)
            }, r.onresize = function() {
                this._w = this._image.width, this._h = this._image.height, k.enabled && this._w < k.atlasLimitWidth && this._h < k.atlasLimitHeight ? this._allowMerageInAtlas = !0 : this._allowMerageInAtlas = !1
            }, r.clearAtlasSource = function() {
                this._image = null
            }, a(0, r, "format", function() {
                return this._format
            }), a(0, r, "enableMerageInAtlas", function() {
                return this._$5__enableMerageInAtlas
            }, function(t) {
                this._$5__enableMerageInAtlas = t
            }), a(0, r, "mipmap", function() {
                return this._mipmap
            }), a(0, r, "allowMerageInAtlas", function() {
                return this._allowMerageInAtlas
            }), a(0, r, "atlasSource", function() {
                return this._image
            }), a(0, r, "onload", null, function(t) {
                var e = this;
                this._onload = t, this._image && (this._image.onload = null != this._onload ? function() {
                    e.onresize(), e._onload()
                } : null)
            }), a(0, r, "onerror", null, function(t) {
                var e = this;
                this._onerror = t, this._image && (this._image.onerror = null != this._onerror ? function() {
                    e._onerror()
                } : null)
            }), e
        }();
    i.__init([ft, U, At, xt])
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    for (var i in Laya) {
        var r = Laya[i];
        r && r.__isclass && (e[i] = r)
    }
});