window.Laya = function(t) {
    "use strict";
    class e {}
    e.animationInterval = 50, e.isAntialias = !1, e.isAlpha = !1, e.premultipliedAlpha = !0, e.isStencil = !0, e.preserveDrawingBuffer = !1, e.webGL2D_MeshAllocMaxMem = !0, e.is2DPixelArtGame = !1, e.useWebGL2 = !0, e.useRetinalCanvas = !1, window.Config = e;
    class i {
        static regClass(t) {
            i.__classMap[t.name] = t;
        }
    }
    i.Laya = null, i.Timer = null, i.WorkerLoader = null, i.Dragging = null, i.GraphicsBounds = null, i.Sprite = null, i.TextRender = null, i.TextAtlas = null, i.timer = null, i.systemTimer = null, i.startTimer = null, i.updateTimer = null, i.lateTimer = null, i.physicsTimer = null, i.stage = null, i.Loader = null, i.loader = null, i.TTFLoader = null, i.SoundManager = null, i.WebAudioSound = null, i.AudioSound = null, i.ShaderCompile = null, i.ClassUtils = null, i.SceneUtils = null, i.Context = null, i.Render = null, i.MouseManager = null, i.Text = null, i.Browser = null, i.WebGL = null, i.Pool = null, i.Utils = null, i.Graphics = null, i.Submit = null, i.Stage = null, i.Resource = null, i.__classMap = {};
    class s {
        static getPoolBySign(t) {
            return s._poolDic[t] || (s._poolDic[t] = []);
        }
        static clearBySign(t) {
            s._poolDic[t] && (s._poolDic[t].length = 0);
        }
        static recover(t, e) {
            e[s.POOLSIGN] || (e[s.POOLSIGN] = !0, s.getPoolBySign(t).push(e));
        }
        static recoverByClass(t) {
            if (t) {
                var e = t.__className || t.constructor._$gid;
                e && s.recover(e, t);
            }
        }
        static _getClassSign(t) {
            var e = t.__className || t._$gid;
            return e || (t._$gid = e = s._CLSID + "", s._CLSID++), e;
        }
        static createByClass(t) {
            return s.getItemByClass(s._getClassSign(t), t);
        }
        static getItemByClass(t, e) {
            if (!s._poolDic[t]) return new e();
            var i = s.getPoolBySign(t);
            if (i.length) {
                var r = i.pop();
                r[s.POOLSIGN] = !1;
            } else r = new e();
            return r;
        }
        static getItemByCreateFun(t, e, i = null) {
            var r = s.getPoolBySign(t),
                a = r.length ? r.pop() : e.call(i);
            return a[s.POOLSIGN] = !1, a;
        }
        static getItem(t) {
            var e = s.getPoolBySign(t),
                i = e.length ? e.pop() : null;
            return i && (i[s.POOLSIGN] = !1), i;
        }
    }
    s._CLSID = 0, s.POOLSIGN = "__InPool", s._poolDic = {};
    class r {
        static create(t) {
            var e = s.getItemByClass("AlphaCmd", r);
            return e.alpha = t, e;
        }
        recover() {
            s.recover("AlphaCmd", this);
        }
        run(t, e, i) {
            t.alpha(this.alpha);
        }
        get cmdID() {
            return r.ID;
        }
    }
    r.ID = "Alpha";
    class a {
        static create(t, e, i, r, n, h, o) {
            var l = s.getItemByClass("DrawCircleCmd", a);
            return l.x = t, l.y = e, l.radius = i, l.fillColor = r, l.lineColor = n, l.lineWidth = h, l.vid = o, l;
        }
        recover() {
            this.fillColor = null, this.lineColor = null, s.recover("DrawCircleCmd", this);
        }
        run(t, e, i) {
            t._drawCircle(this.x + e, this.y + i, this.radius, this.fillColor, this.lineColor, this.lineWidth, this.vid);
        }
        get cmdID() {
            return a.ID;
        }
    }
    a.ID = "DrawCircle";
    class n {
        static create(t, e, i, r, a) {
            var h = s.getItemByClass("DrawCurvesCmd", n);
            return h.x = t, h.y = e, h.points = i, h.lineColor = r, h.lineWidth = a, h;
        }
        recover() {
            this.points = null, this.lineColor = null, s.recover("DrawCurvesCmd", this);
        }
        run(t, e, i) {
            t.drawCurves(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth);
        }
        get cmdID() {
            return n.ID;
        }
    }
    n.ID = "DrawCurves";
    class h {
        static create(t, e, i, r, a) {
            var n = s.getItemByClass("DrawImageCmd", h);
            return n.texture = t, t._addReference(), n.x = e, n.y = i, n.width = r, n.height = a, n;
        }
        recover() {
            this.texture._removeReference(), this.texture = null, s.recover("DrawImageCmd", this);
        }
        run(t, e, i) {
            t.drawTexture(this.texture, this.x + e, this.y + i, this.width, this.height);
        }
        get cmdID() {
            return h.ID;
        }
    }
    h.ID = "DrawImage";
    class o {
        static create(t, e, i, r, a, n, h) {
            var l = s.getItemByClass("DrawLineCmd", o);
            return l.fromX = t, l.fromY = e, l.toX = i, l.toY = r, l.lineColor = a, l.lineWidth = n, l.vid = h, l;
        }
        recover() {
            s.recover("DrawLineCmd", this);
        }
        run(t, e, i) {
            t._drawLine(e, i, this.fromX, this.fromY, this.toX, this.toY, this.lineColor, this.lineWidth, this.vid);
        }
        get cmdID() {
            return o.ID;
        }
    }
    o.ID = "DrawLine";
    class l {
        static create(t, e, i, r, a, n) {
            var h = s.getItemByClass("DrawLinesCmd", l);
            return h.x = t, h.y = e, h.points = i, h.lineColor = r, h.lineWidth = a, h.vid = n, h;
        }
        recover() {
            this.points = null, this.lineColor = null, s.recover("DrawLinesCmd", this);
        }
        run(t, e, i) {
            t._drawLines(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth, this.vid);
        }
        get cmdID() {
            return l.ID;
        }
    }
    l.ID = "DrawLines";
    class _ {
        static create(t, e, i, r, a) {
            var n = s.getItemByClass("DrawPathCmd", _);
            return n.x = t, n.y = e, n.paths = i, n.brush = r, n.pen = a, n;
        }
        recover() {
            this.paths = null, this.brush = null, this.pen = null, s.recover("DrawPathCmd", this);
        }
        run(t, e, i) {
            t._drawPath(this.x + e, this.y + i, this.paths, this.brush, this.pen);
        }
        get cmdID() {
            return _.ID;
        }
    }
    _.ID = "DrawPath";
    class c {
        static create(t, e, i, r, a, n, h, o, l) {
            var _ = s.getItemByClass("DrawPieCmd", c);
            return _.x = t, _.y = e, _.radius = i, _._startAngle = r, _._endAngle = a, _.fillColor = n, _.lineColor = h, _.lineWidth = o, _.vid = l, _;
        }
        recover() {
            this.fillColor = null, this.lineColor = null, s.recover("DrawPieCmd", this);
        }
        run(t, e, i) {
            t._drawPie(this.x + e, this.y + i, this.radius, this._startAngle, this._endAngle, this.fillColor, this.lineColor, this.lineWidth, this.vid);
        }
        get cmdID() {
            return c.ID;
        }
        get startAngle() {
            return 180 * this._startAngle / Math.PI;
        }
        set startAngle(t) {
            this._startAngle = t * Math.PI / 180;
        }
        get endAngle() {
            return 180 * this._endAngle / Math.PI;
        }
        set endAngle(t) {
            this._endAngle = t * Math.PI / 180;
        }
    }
    c.ID = "DrawPie";
    class u {
        static create(t, e, i, r, a, n, h, o) {
            var l = s.getItemByClass("DrawPolyCmd", u);
            return l.x = t, l.y = e, l.points = i, l.fillColor = r, l.lineColor = a, l.lineWidth = n, l.isConvexPolygon = h, l.vid = o, l;
        }
        recover() {
            this.points = null, this.fillColor = null, this.lineColor = null, s.recover("DrawPolyCmd", this);
        }
        run(t, e, i) {
            t._drawPoly(this.x + e, this.y + i, this.points, this.fillColor, this.lineColor, this.lineWidth, this.isConvexPolygon, this.vid);
        }
        get cmdID() {
            return u.ID;
        }
    }
    u.ID = "DrawPoly";
    class d {
        static create(t, e, i, r, a, n, h) {
            var o = s.getItemByClass("DrawRectCmd", d);
            return o.x = t, o.y = e, o.width = i, o.height = r, o.fillColor = a, o.lineColor = n, o.lineWidth = h, o;
        }
        recover() {
            this.fillColor = null, this.lineColor = null, s.recover("DrawRectCmd", this);
        }
        run(t, e, i) {
            t.drawRect(this.x + e, this.y + i, this.width, this.height, this.fillColor, this.lineColor, this.lineWidth);
        }
        get cmdID() {
            return d.ID;
        }
    }
    d.ID = "DrawRect";
    class p {
        constructor(t = 1, e = 0, i = 0, s = 1, r = 0, a = 0, n = 0) {
            if (this._bTransform = !1, null != p._createFun) return p._createFun(t, e, i, s, r, a, n);
            this.a = t, this.b = e, this.c = i, this.d = s, this.tx = r, this.ty = a, this._checkTransform();
        }
        identity() {
            return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this._bTransform = !1, this;
        }
        _checkTransform() {
            return this._bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d;
        }
        setTranslate(t, e) {
            return this.tx = t, this.ty = e, this;
        }
        translate(t, e) {
            return this.tx += t, this.ty += e, this;
        }
        scale(t, e) {
            return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this._bTransform = !0, this;
        }
        rotate(t) {
            var e = Math.cos(t),
                i = Math.sin(t),
                s = this.a,
                r = this.c,
                a = this.tx;
            return this.a = s * e - this.b * i, this.b = s * i + this.b * e, this.c = r * e - this.d * i, this.d = r * i + this.d * e, this.tx = a * e - this.ty * i, this.ty = a * i + this.ty * e, this._bTransform = !0, this;
        }
        skew(t, e) {
            var i = Math.tan(t),
                s = Math.tan(e),
                r = this.a,
                a = this.b;
            return this.a += s * this.c, this.b += s * this.d, this.c += i * r, this.d += i * a, this;
        }
        invertTransformPoint(t) {
            var e = this.a,
                i = this.b,
                s = this.c,
                r = this.d,
                a = this.tx,
                n = e * r - i * s,
                h = r / n,
                o = -i / n,
                l = -s / n,
                _ = e / n,
                c = (s * this.ty - r * a) / n,
                u = -(e * this.ty - i * a) / n;
            return t.setTo(h * t.x + l * t.y + c, o * t.x + _ * t.y + u);
        }
        transformPoint(t) {
            return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty);
        }
        transformPointN(t) {
            return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y);
        }
        getScaleX() {
            return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
        }
        getScaleY() {
            return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
        }
        invert() {
            var t = this.a,
                e = this.b,
                i = this.c,
                s = this.d,
                r = this.tx,
                a = t * s - e * i;
            return this.a = s / a, this.b = -e / a, this.c = -i / a, this.d = t / a, this.tx = (i * this.ty - s * r) / a, this.ty = -(t * this.ty - e * r) / a, this;
        }
        setTo(t, e, i, s, r, a) {
            return this.a = t, this.b = e, this.c = i, this.d = s, this.tx = r, this.ty = a, this;
        }
        concat(t) {
            var e = this.a,
                i = this.c,
                s = this.tx;
            return this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d, this.tx = s * t.a + this.ty * t.c + t.tx, this.ty = s * t.b + this.ty * t.d + t.ty, this;
        }
        static mul(t, e, i) {
            var s = t.a,
                r = t.b,
                a = t.c,
                n = t.d,
                h = t.tx,
                o = t.ty,
                l = e.a,
                _ = e.b,
                c = e.c,
                u = e.d,
                d = e.tx,
                p = e.ty;
            return 0 !== _ || 0 !== c ? (i.a = s * l + r * c, i.b = s * _ + r * u, i.c = a * l + n * c, i.d = a * _ + n * u, i.tx = l * h + c * o + d, i.ty = _ * h + u * o + p) : (i.a = s * l, i.b = r * u, i.c = a * l, i.d = n * u, i.tx = l * h + d, i.ty = u * o + p), i;
        }
        static mul16(t, e, i) {
            var s = t.a,
                r = t.b,
                a = t.c,
                n = t.d,
                h = t.tx,
                o = t.ty,
                l = e.a,
                _ = e.b,
                c = e.c,
                u = e.d,
                d = e.tx,
                p = e.ty;
            return 0 !== _ || 0 !== c ? (i[0] = s * l + r * c, i[1] = s * _ + r * u, i[4] = a * l + n * c, i[5] = a * _ + n * u, i[12] = l * h + c * o + d, i[13] = _ * h + u * o + p) : (i[0] = s * l, i[1] = r * u, i[4] = a * l, i[5] = n * u, i[12] = l * h + d, i[13] = u * o + p), i;
        }
        scaleEx(t, e) {
            var i = this.a,
                s = this.b,
                r = this.c,
                a = this.d;
            0 !== s || 0 !== r ? (this.a = t * i, this.b = t * s, this.c = e * r, this.d = e * a) : (this.a = t * i, this.b = 0 * a, this.c = 0 * i, this.d = e * a), this._bTransform = !0;
        }
        rotateEx(t) {
            var e = Math.cos(t),
                i = Math.sin(t),
                s = this.a,
                r = this.b,
                a = this.c,
                n = this.d;
            0 !== r || 0 !== a ? (this.a = e * s + i * a, this.b = e * r + i * n, this.c = -i * s + e * a, this.d = -i * r + e * n) : (this.a = e * s, this.b = i * n, this.c = -i * s, this.d = e * n), this._bTransform = !0;
        }
        clone() {
            var t = p.create();
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t._bTransform = this._bTransform, t;
        }
        copyTo(t) {
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t._bTransform = this._bTransform, t;
        }
        toString() {
            return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
        }
        destroy() {
            this.recover();
        }
        recover() {
            s.recover("Matrix", this.identity());
        }
        static create() {
            return s.getItemByClass("Matrix", p);
        }
    }
    p.EMPTY = new p(), p.TEMP = new p(), p._createFun = null;
    class f {
        constructor(t = 0, e = 0) {
            this.x = t, this.y = e;
        }
        static create() {
            return s.getItemByClass("Point", f);
        }
        setTo(t, e) {
            return this.x = t, this.y = e, this;
        }
        reset() {
            return this.x = this.y = 0, this;
        }
        recover() {
            s.recover("Point", this.reset());
        }
        distance(t, e) {
            return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e));
        }
        toString() {
            return this.x + "," + this.y;
        }
        normalize() {
            var t = Math.sqrt(this.x * this.x + this.y * this.y);
            if (t > 0) {
                var e = 1 / t;
                this.x *= e, this.y *= e;
            }
        }
        copy(t) {
            return this.setTo(t.x, t.y);
        }
    }
    f.TEMP = new f(), f.EMPTY = new f();
    class g {
        constructor(t = 0, e = 0, i = 0, s = 0) {
            this.x = t, this.y = e, this.width = i, this.height = s;
        }
        get right() {
            return this.x + this.width;
        }
        get bottom() {
            return this.y + this.height;
        }
        setTo(t, e, i, s) {
            return this.x = t, this.y = e, this.width = i, this.height = s, this;
        }
        reset() {
            return this.x = this.y = this.width = this.height = 0, this;
        }
        recover() {
            this != g.TEMP && this != g.EMPTY ? s.recover("Rectangle", this.reset()) : console.log("recover Temp or Empty:", this);
        }
        static create() {
            return s.getItemByClass("Rectangle", g);
        }
        copyFrom(t) {
            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
        }
        contains(t, e) {
            return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.right && e >= this.y && e < this.bottom);
        }
        intersects(t) {
            return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y);
        }
        intersection(t, e = null) {
            return this.intersects(t) ? (e || (e = new g()), e.x = Math.max(this.x, t.x), e.y = Math.max(this.y, t.y), e.width = Math.min(this.right, t.right) - e.x, e.height = Math.min(this.bottom, t.bottom) - e.y, e) : null;
        }
        union(t, e = null) {
            return e || (e = new g()), this.clone(e), t.width <= 0 || t.height <= 0 ? e : (e.addPoint(t.x, t.y), e.addPoint(t.right, t.bottom), this);
        }
        clone(t = null) {
            return t || (t = new g()), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
        }
        toString() {
            return this.x + "," + this.y + "," + this.width + "," + this.height;
        }
        equals(t) {
            return !(!t || t.x !== this.x || t.y !== this.y || t.width !== this.width || t.height !== this.height);
        }
        addPoint(t, e) {
            return this.x > t && (this.width += this.x - t, this.x = t), this.y > e && (this.height += this.y - e, this.y = e), this.width < t - this.x && (this.width = t - this.x), this.height < e - this.y && (this.height = e - this.y), this;
        }
        _getBoundPoints() {
            var t = g._temB;
            return t.length = 0, 0 == this.width || 0 == this.height ? t : (t.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height), t);
        }
        static _getBoundPointS(t, e, i, s) {
            var r = g._temA;
            return r.length = 0, 0 == i || 0 == s ? r : (r.push(t, e, t + i, e, t, e + s, t + i, e + s), r);
        }
        static _getWrapRec(t, e = null) {
            if (!t || t.length < 1) return e ? e.setTo(0, 0, 0, 0) : g.TEMP.setTo(0, 0, 0, 0);
            e = e || g.create();
            var i, s, r, a, n, h = t.length,
                o = f.TEMP;
            for (r = n = -(s = a = 99999), i = 0; i < h; i += 2) o.x = t[i], o.y = t[i + 1], s = s < o.x ? s : o.x, a = a < o.y ? a : o.y, r = r > o.x ? r : o.x, n = n > o.y ? n : o.y;
            return e.setTo(s, a, r - s, n - a);
        }
        isEmpty() {
            return this.width <= 0 || this.height <= 0;
        }
    }
    g.EMPTY = new g(), g.TEMP = new g(), g._temB = [], g._temA = [];
    class m {}
    m.ARRAY_BUFFER_TYPE_DATA = 0, m.ARRAY_BUFFER_TYPE_CMD = 1, m.ARRAY_BUFFER_REF_REFERENCE = 0, m.ARRAY_BUFFER_REF_COPY = 1, m.UPLOAD_SHADER_UNIFORM_TYPE_ID = 0, m.UPLOAD_SHADER_UNIFORM_TYPE_DATA = 1;
    class v {
        constructor(t = null, e = null, i = null, s = !1) {
            this.once = !1, this._id = 0, this.setTo(t, e, i, s);
        }
        setTo(t, e, i, s) {
            return this._id = v._gid++, this.caller = t, this.method = e, this.args = i, this.once = s, this;
        }
        run() {
            if (null == this.method) return null;
            var t = this._id,
                e = this.method.apply(this.caller, this.args);
            return this._id === t && this.once && this.recover(), e;
        }
        runWith(t) {
            if (null == this.method) return null;
            var e = this._id;
            if (null == t) var i = this.method.apply(this.caller, this.args);
            else i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
            return this._id === e && this.once && this.recover(), i;
        }
        clear() {
            return this.caller = null, this.method = null, this.args = null, this;
        }
        recover() {
            this._id > 0 && (this._id = 0, v._pool.push(this.clear()));
        }
        static create(t, e, i = null, s = !0) {
            return v._pool.length ? v._pool.pop().setTo(t, e, i, s) : new v(t, e, i, s);
        }
    }
    v._pool = [], v._gid = 1;
    class T {
        hasListener(t) {
            return !!(this._events && this._events[t]);
        }
        event(t, e = null) {
            if (!this._events || !this._events[t]) return !1;
            var i = this._events[t];
            if (i.run) i.once && delete this._events[t], null != e ? i.runWith(e) : i.run();
            else {
                for (var s = 0, r = i.length; s < r; s++) {
                    var a = i[s];
                    a && (null != e ? a.runWith(e) : a.run()), a && !a.once || (i.splice(s, 1), s--, r--);
                }
                0 === i.length && this._events && delete this._events[t];
            }
            return !0;
        }
        on(t, e, i, s = null) {
            return this._createListener(t, e, i, s, !1);
        }
        once(t, e, i, s = null) {
            return this._createListener(t, e, i, s, !0);
        }
        _createListener(t, e, i, s, r, a = !0) {
            a && this.off(t, e, i, r);
            var n = x.create(e || this, i, s, r);
            this._events || (this._events = {});
            var h = this._events;
            return h[t] ? h[t].run ? h[t] = [h[t], n] : h[t].push(n) : h[t] = n, this;
        }
        off(t, e, i, s = !1) {
            if (!this._events || !this._events[t]) return this;
            var r = this._events[t];
            if (null != r)
                if (r.run) e && r.caller !== e || null != i && r.method !== i || s && !r.once || (delete this._events[t], r.recover());
                else {
                    for (var a = 0, n = 0, h = r.length; n < h; n++) {
                        var o = r[n];
                        o ? !o || e && o.caller !== e || null != i && o.method !== i || s && !o.once || (a++, r[n] = null, o.recover()) : a++;
                    }
                    a === h && delete this._events[t];
                }
            return this;
        }
        offAll(t = null) {
            var e = this._events;
            if (!e) return this;
            if (t) this._recoverHandlers(e[t]), delete e[t];
            else {
                for (var i in e) this._recoverHandlers(e[i]);
                this._events = null;
            }
            return this;
        }
        offAllCaller(t) {
            if (t && this._events)
                for (var e in this._events) this.off(e, t, null);
            return this;
        }
        _recoverHandlers(t) {
            if (t)
                if (t.run) t.recover();
                else
                    for (var e = t.length - 1; e > -1; e--) t[e] && (t[e].recover(), t[e] = null);
        }
        isMouseEvent(t) {
            return T.MOUSE_EVENTS[t] || !1;
        }
    }
    T.MOUSE_EVENTS = {
        rightmousedown: !0,
        rightmouseup: !0,
        rightclick: !0,
        mousedown: !0,
        mouseup: !0,
        mousemove: !0,
        mouseover: !0,
        mouseout: !0,
        click: !0,
        doubleclick: !0
    };
    class x extends v {
        constructor(t, e, i, s) {
            super(t, e, i, s);
        }
        recover() {
            this._id > 0 && (this._id = 0, x._pool.push(this.clear()));
        }
        static create(t, e, i = null, s = !0) {
            return x._pool.length ? x._pool.pop().setTo(t, e, i, s) : new x(t, e, i, s);
        }
    }
    x._pool = [];
    class y {
        constructor(t) {
            this._url = y.formatURL(t), this._path = y.getPath(t);
        }
        get url() {
            return this._url;
        }
        get path() {
            return this._path;
        }
        static set basePath(t) {
            y._basePath = i.Laya._getUrlPath(), y._basePath = y.formatURL(t);
        }
        static get basePath() {
            return y._basePath;
        }
        static formatURL(t) {
            if (!t) return "null path";
            if (t.indexOf(":") > 0) return t;
            if (null != y.customFormat && (t = y.customFormat(t)), t.indexOf(":") > 0) return t;
            var e = t.charAt(0);
            if ("." === e) return y._formatRelativePath(y._basePath + t);
            if ("~" === e) return y.rootPath + t.substring(1);
            if ("d" === e) {
                if (0 === t.indexOf("data:image")) return t;
            } else if ("/" === e) return t;
            return y._basePath + t;
        }
        static _formatRelativePath(t) {
            for (var e = t.split("/"), i = 0, s = e.length; i < s; i++) ".." == e[i] && (e.splice(i - 1, 2), i -= 2);
            return e.join("/");
        }
        static getPath(t) {
            var e = t.lastIndexOf("/");
            return e > 0 ? t.substr(0, e + 1) : "";
        }
        static getFileName(t) {
            var e = t.lastIndexOf("/");
            return e > 0 ? t.substr(e + 1) : t;
        }
        static getAdptedFilePath(t) {
            if (!y.exportSceneToJson || !t) return t;
            var e, i, s;
            for (i = y._adpteTypeList.length, e = 0; e < i; e++) s = y._adpteTypeList[e], t = t.replace(s[0], s[1]);
            return t;
        }
    }
    y.version = {}, y.exportSceneToJson = !1, y._basePath = "", y.rootPath = "", y.customFormat = function(t) {
        var e = y.version[t];
        return !window.conch && e && (t += "?v=" + e), t;
    }, y._adpteTypeList = [
        [".scene3d", ".json"],
        [".scene", ".json"],
        [".taa", ".json"],
        [".prefab", ".json"]
    ];
    class E extends T {
        constructor() {
            super(), this._id = 0, this._url = null, this._cpuMemory = 0, this._gpuMemory = 0, this._destroyed = !1, this._referenceCount = 0, this.lock = !1, this.name = null, this._id = ++E._uniqueIDCounter, this._destroyed = !1, this._referenceCount = 0, E._idResourcesMap[this.id] = this, this.lock = !1;
        }
        static get cpuMemory() {
            return E._cpuMemory;
        }
        static get gpuMemory() {
            return E._gpuMemory;
        }
        static _addCPUMemory(t) {
            E._cpuMemory += t;
        }
        static _addGPUMemory(t) {
            E._gpuMemory += t;
        }
        static _addMemory(t, e) {
            E._cpuMemory += t, E._gpuMemory += e;
        }
        static getResourceByID(t) {
            return E._idResourcesMap[t];
        }
        static getResourceByURL(t, e = 0) {
            return E._urlResourcesMap[t][e];
        }
        static destroyUnusedResources() {
            for (var t in E._idResourcesMap) {
                var e = E._idResourcesMap[t];
                e.lock || 0 !== e._referenceCount || e.destroy();
            }
        }
        get id() {
            return this._id;
        }
        get url() {
            return this._url;
        }
        get cpuMemory() {
            return this._cpuMemory;
        }
        get gpuMemory() {
            return this._gpuMemory;
        }
        get destroyed() {
            return this._destroyed;
        }
        get referenceCount() {
            return this._referenceCount;
        }
        _setCPUMemory(t) {
            var e = t - this._cpuMemory;
            this._cpuMemory = t, E._addCPUMemory(e);
        }
        _setGPUMemory(t) {
            var e = t - this._gpuMemory;
            this._gpuMemory = t, E._addGPUMemory(e);
        }
        _setCreateURL(t) {
            var e;
            (t = y.formatURL(t), this._url !== t) && (this._url && ((e = E._urlResourcesMap[this._url]).splice(e.indexOf(this), 1), 0 === e.length && delete E._urlResourcesMap[this._url]), t && ((e = E._urlResourcesMap[t]) || (E._urlResourcesMap[t] = e = []), e.push(this)), this._url = t);
        }
        _addReference(t = 1) {
            this._referenceCount += t;
        }
        _removeReference(t = 1) {
            this._referenceCount -= t;
        }
        _clearReference() {
            this._referenceCount = 0;
        }
        _recoverResource() {}
        _disposeResource() {}
        _activeResource() {}
        destroy() {
            var t;
            this._destroyed || (this._destroyed = !0, this.lock = !1, this._disposeResource(), delete E._idResourcesMap[this.id], this._url && ((t = E._urlResourcesMap[this._url]) && (t.splice(t.indexOf(this), 1), 0 === t.length && delete E._urlResourcesMap[this._url]), i.Loader.getRes(this._url) == this && delete i.Loader.loadedMap[this._url]));
        }
    }
    E._uniqueIDCounter = 0, E._idResourcesMap = {}, E._urlResourcesMap = {}, E._cpuMemory = 0, E._gpuMemory = 0;
    class A extends E {
        get width() {
            return this._width;
        }
        set width(t) {
            this._width = t;
        }
        get height() {
            return this._height;
        }
        set height(t) {
            this._height = t;
        }
        constructor() {
            super(), this._width = -1, this._height = -1;
        }
        _getSource() {
            throw "Bitmap: must override it.";
        }
    }
    class C {
        static __init__() {
            var t = m.instance;
            C._depthFunc = t.LESS, C._sFactor = t.ONE, C._dFactor = t.ZERO, C._srcAlpha = t.ONE, C._dstAlpha = t.ZERO, C._activedTextureID = t.TEXTURE0, C._glTextureIDs = [t.TEXTURE0, t.TEXTURE1, t.TEXTURE2, t.TEXTURE3, t.TEXTURE4, t.TEXTURE5, t.TEXTURE6, t.TEXTURE7];
        }
        static useProgram(t, e) {
            return C._useProgram !== e && (t.useProgram(e), C._useProgram = e, !0);
        }
        static setDepthTest(t, e) {
            e !== C._depthTest && (C._depthTest = e, e ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST));
        }
        static setDepthMask(t, e) {
            e !== C._depthMask && (C._depthMask = e, t.depthMask(e));
        }
        static setDepthFunc(t, e) {
            e !== C._depthFunc && (C._depthFunc = e, t.depthFunc(e));
        }
        static setBlend(t, e) {
            e !== C._blend && (C._blend = e, e ? t.enable(t.BLEND) : t.disable(t.BLEND));
        }
        static setBlendFunc(t, e, i) {
            (e !== C._sFactor || i !== C._dFactor) && (C._sFactor = C._srcAlpha = e, C._dFactor = C._dstAlpha = i, t.blendFunc(e, i));
        }
        static setBlendFuncSeperate(t, e, i, s, r) {
            e === C._sFactor && i === C._dFactor && s === C._srcAlpha && r === C._dstAlpha || (C._sFactor = e, C._dFactor = i, C._srcAlpha = s, C._dstAlpha = r, t.blendFuncSeparate(e, i, s, r));
        }
        static setCullFace(t, e) {
            e !== C._cullFace && (C._cullFace = e, e ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE));
        }
        static setFrontFace(t, e) {
            e !== C._frontFace && (C._frontFace = e, t.frontFace(e));
        }
        static activeTexture(t, e) {
            C._activedTextureID !== e && (t.activeTexture(e), C._activedTextureID = e);
        }
        static bindTexture(t, e, i) {
            C._activeTextures[C._activedTextureID - t.TEXTURE0] !== i && (t.bindTexture(e, i), C._activeTextures[C._activedTextureID - t.TEXTURE0] = i);
        }
        static __init_native() {
            if (i.Render.supportWebGLPlusRendering) {
                var t = C;
                t.activeTexture = t.activeTextureForNative, t.bindTexture = t.bindTextureForNative;
            }
        }
        static useProgramForNative(t, e) {
            return t.useProgram(e), !0;
        }
        static setDepthTestForNative(t, e) {
            e ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST);
        }
        static setDepthMaskForNative(t, e) {
            t.depthMask(e);
        }
        static setDepthFuncForNative(t, e) {
            t.depthFunc(e);
        }
        static setBlendForNative(t, e) {
            e ? t.enable(t.BLEND) : t.disable(t.BLEND);
        }
        static setBlendFuncForNative(t, e, i) {
            t.blendFunc(e, i);
        }
        static setCullFaceForNative(t, e) {
            e ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE);
        }
        static setFrontFaceForNative(t, e) {
            t.frontFace(e);
        }
        static activeTextureForNative(t, e) {
            t.activeTexture(e);
        }
        static bindTextureForNative(t, e, i) {
            t.bindTexture(e, i);
        }
        static bindVertexArrayForNative(t, e) {
            t.bindVertexArray(e);
        }
    }
    C.mainContext = null, C._activeTextures = new Array(8), C._useProgram = null, C._depthTest = !0, C._depthMask = !0, C._blend = !1, C._cullFace = !1;
    class b extends A {
        constructor(t, e) {
            super(), this._wrapModeU = b.WARPMODE_REPEAT, this._wrapModeV = b.WARPMODE_REPEAT, this._filterMode = b.FILTERMODE_BILINEAR, this._readyed = !1, this._width = -1, this._height = -1, this._format = t, this._mipmap = e, this._anisoLevel = 1, this._glTexture = m.instance.createTexture();
        }
        get mipmap() {
            return this._mipmap;
        }
        get format() {
            return this._format;
        }
        get wrapModeU() {
            return this._wrapModeU;
        }
        set wrapModeU(t) {
            this._wrapModeU !== t && (this._wrapModeU = t, -1 !== this._width && this._setWarpMode(m.instance.TEXTURE_WRAP_S, t));
        }
        get wrapModeV() {
            return this._wrapModeV;
        }
        set wrapModeV(t) {
            this._wrapModeV !== t && (this._wrapModeV = t, -1 !== this._height && this._setWarpMode(m.instance.TEXTURE_WRAP_T, t));
        }
        get filterMode() {
            return this._filterMode;
        }
        set filterMode(t) {
            t !== this._filterMode && (this._filterMode = t, -1 !== this._width && -1 !== this._height && this._setFilterMode(t));
        }
        get anisoLevel() {
            return this._anisoLevel;
        }
        set anisoLevel(t) {
            t !== this._anisoLevel && (this._anisoLevel = Math.max(1, Math.min(16, t)), -1 !== this._width && -1 !== this._height && this._setAnisotropy(t));
        }
        get mipmapCount() {
            return this._mipmapCount;
        }
        get defaulteTexture() {
            throw "BaseTexture:must override it.";
        }
        _getFormatByteCount() {
            switch (this._format) {
                case b.FORMAT_R8G8B8:
                    return 3;
                case b.FORMAT_R8G8B8A8:
                    return 4;
                case b.FORMAT_ALPHA8:
                    return 1;
                default:
                    throw "Texture2D: unknown format.";
            }
        }
        _isPot(t) {
            return 0 == (t & t - 1);
        }
        _getGLFormat() {
            var t, e = m.instance,
                i = m.layaGPUInstance;
            switch (this._format) {
                case b.FORMAT_R8G8B8:
                    t = e.RGB;
                    break;
                case b.FORMAT_R8G8B8A8:
                    t = e.RGBA;
                    break;
                case b.FORMAT_ALPHA8:
                    t = e.ALPHA;
                    break;
                case b.FORMAT_DXT1:
                    if (!i._compressedTextureS3tc) throw "BaseTexture: not support DXT1 format.";
                    t = i._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    break;
                case b.FORMAT_DXT5:
                    if (!i._compressedTextureS3tc) throw "BaseTexture: not support DXT5 format.";
                    t = i._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                    break;
                case b.FORMAT_ETC1RGB:
                    if (!i._compressedTextureEtc1) throw "BaseTexture: not support ETC1RGB format.";
                    t = i._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;
                    break;
                case b.FORMAT_PVRTCRGB_2BPPV:
                    if (!i._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_2BPPV format.";
                    t = i._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    break;
                case b.FORMAT_PVRTCRGBA_2BPPV:
                    if (!i._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_2BPPV format.";
                    t = i._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                    break;
                case b.FORMAT_PVRTCRGB_4BPPV:
                    if (!i._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_4BPPV format.";
                    t = i._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    break;
                case b.FORMAT_PVRTCRGBA_4BPPV:
                    if (!i._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_4BPPV format.";
                    t = i._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    break;
                default:
                    throw "BaseTexture: unknown texture format.";
            }
            return t;
        }
        _setFilterMode(t) {
            var e = m.instance;
            switch (C.bindTexture(e, this._glTextureType, this._glTexture), t) {
                case b.FILTERMODE_POINT:
                    this._mipmap ? e.texParameteri(this._glTextureType, e.TEXTURE_MIN_FILTER, e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(this._glTextureType, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(this._glTextureType, e.TEXTURE_MAG_FILTER, e.NEAREST);
                    break;
                case b.FILTERMODE_BILINEAR:
                    this._mipmap ? e.texParameteri(this._glTextureType, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_NEAREST) : e.texParameteri(this._glTextureType, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(this._glTextureType, e.TEXTURE_MAG_FILTER, e.LINEAR);
                    break;
                case b.FILTERMODE_TRILINEAR:
                    this._mipmap ? e.texParameteri(this._glTextureType, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR) : e.texParameteri(this._glTextureType, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(this._glTextureType, e.TEXTURE_MAG_FILTER, e.LINEAR);
                    break;
                default:
                    throw new Error("BaseTexture:unknown filterMode value.");
            }
        }
        _setWarpMode(t, e) {
            var i = m.instance;
            if (C.bindTexture(i, this._glTextureType, this._glTexture), this._isPot(this._width) && this._isPot(this._height)) switch (e) {
                case b.WARPMODE_REPEAT:
                    i.texParameteri(this._glTextureType, t, i.REPEAT);
                    break;
                case b.WARPMODE_CLAMP:
                    i.texParameteri(this._glTextureType, t, i.CLAMP_TO_EDGE);
            } else i.texParameteri(this._glTextureType, t, i.CLAMP_TO_EDGE);
        }
        _setAnisotropy(t) {
            var e = m.layaGPUInstance._extTextureFilterAnisotropic;
            if (e) {
                t = Math.max(t, 1);
                var i = m.instance;
                C.bindTexture(i, this._glTextureType, this._glTexture), t = Math.min(i.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT), t), i.texParameterf(this._glTextureType, e.TEXTURE_MAX_ANISOTROPY_EXT, t);
            }
        }
        _disposeResource() {
            this._glTexture && (m.instance.deleteTexture(this._glTexture), this._glTexture = null, this._setGPUMemory(0));
        }
        _getSource() {
            return this._readyed ? this._glTexture : null;
        }
        generateMipmap() {
            this._isPot(this.width) && this._isPot(this.height) && m.instance.generateMipmap(this._glTextureType);
        }
    }
    b.WARPMODE_REPEAT = 0, b.WARPMODE_CLAMP = 1, b.FILTERMODE_POINT = 0, b.FILTERMODE_BILINEAR = 1, b.FILTERMODE_TRILINEAR = 2, b.FORMAT_R8G8B8 = 0, b.FORMAT_R8G8B8A8 = 1, b.FORMAT_ALPHA8 = 2, b.FORMAT_DXT1 = 3, b.FORMAT_DXT5 = 4, b.FORMAT_ETC1RGB = 5, b.FORMAT_PVRTCRGB_2BPPV = 9, b.FORMAT_PVRTCRGBA_2BPPV = 10, b.FORMAT_PVRTCRGB_4BPPV = 11, b.FORMAT_PVRTCRGBA_4BPPV = 12, b.RENDERTEXTURE_FORMAT_RGBA_HALF_FLOAT = 14, b.FORMAT_DEPTH_16 = 0, b.FORMAT_STENCIL_8 = 1, b.FORMAT_DEPTHSTENCIL_16_8 = 2, b.FORMAT_DEPTHSTENCIL_NONE = 3;
    class R extends b {
        constructor(t = 0, e = 0, i = b.FORMAT_R8G8B8A8, s = !0, r = !1) {
            super(i, s);
            var a = m.instance;
            if (this._glTextureType = a.TEXTURE_2D, this._width = t, this._height = e, this._canRead = r, this._setWarpMode(a.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(a.TEXTURE_WRAP_T, this._wrapModeV), this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._mipmap) {
                this._mipmapCount = Math.max(Math.ceil(Math.log2(t)) + 1, Math.ceil(Math.log2(e)) + 1);
                for (var n = 0; n < this._mipmapCount; n++) this._setPixels(null, n, Math.max(t >> n, 1), Math.max(e >> n, 1));
                this._setGPUMemory(t * e * 4 * (1 + 1 / 3));
            } else this._mipmapCount = 1, this._setGPUMemory(t * e * 4);
        }
        static __init__() {
            var t = new Uint8Array(3);
            t[0] = 128, t[1] = 128, t[2] = 128, R.grayTexture = new R(1, 1, b.FORMAT_R8G8B8, !1, !1), R.grayTexture.setPixels(t), R.grayTexture.lock = !0, t[0] = 255, t[1] = 255, t[2] = 255, R.whiteTexture = new R(1, 1, b.FORMAT_R8G8B8, !1, !1), R.whiteTexture.setPixels(t), R.whiteTexture.lock = !0, t[0] = 0, t[1] = 0, t[2] = 0, R.blackTexture = new R(1, 1, b.FORMAT_R8G8B8, !1, !1), R.blackTexture.setPixels(t), R.blackTexture.lock = !0;
        }
        static _parse(t, e = null, i = null) {
            var s = i ? new R(i[0], i[1], i[2], i[3], i[4]) : new R(0, 0);
            switch (e && (s.wrapModeU = e.wrapModeU, s.wrapModeV = e.wrapModeV, s.filterMode = e.filterMode, s.anisoLevel = e.anisoLevel), s._format) {
                case b.FORMAT_R8G8B8:
                case b.FORMAT_R8G8B8A8:
                    s.loadImageSource(t);
                    break;
                case b.FORMAT_DXT1:
                case b.FORMAT_DXT5:
                case b.FORMAT_ETC1RGB:
                case b.FORMAT_PVRTCRGB_2BPPV:
                case b.FORMAT_PVRTCRGBA_2BPPV:
                case b.FORMAT_PVRTCRGB_4BPPV:
                case b.FORMAT_PVRTCRGBA_4BPPV:
                    s.setCompressData(t);
                    break;
                default:
                    throw "Texture2D:unkonwn format.";
            }
            return s;
        }
        static load(t, e) {
            i.loader.create(t, e, null, i.Loader.TEXTURE2D);
        }
        get defaulteTexture() {
            return R.grayTexture;
        }
        _setPixels(t, e, i, s) {
            var r = m.instance,
                a = this._glTextureType,
                n = this._getGLFormat();
            C.bindTexture(r, a, this._glTexture), this.format === b.FORMAT_R8G8B8 ? (r.pixelStorei(r.UNPACK_ALIGNMENT, 1), r.texImage2D(a, e, n, i, s, 0, n, r.UNSIGNED_BYTE, t), r.pixelStorei(r.UNPACK_ALIGNMENT, 4)) : r.texImage2D(a, e, n, i, s, 0, n, r.UNSIGNED_BYTE, t);
        }
        _calcualatesCompressedDataSize(t, e, i) {
            switch (t) {
                case b.FORMAT_DXT1:
                case b.FORMAT_ETC1RGB:
                    return (e + 3 >> 2) * (i + 3 >> 2) * 8;
                case b.FORMAT_DXT5:
                    return (e + 3 >> 2) * (i + 3 >> 2) * 16;
                case b.FORMAT_PVRTCRGB_4BPPV:
                case b.FORMAT_PVRTCRGBA_4BPPV:
                    return Math.floor((Math.max(e, 8) * Math.max(i, 8) * 4 + 7) / 8);
                case b.FORMAT_PVRTCRGB_2BPPV:
                case b.FORMAT_PVRTCRGBA_2BPPV:
                    return Math.floor((Math.max(e, 16) * Math.max(i, 8) * 2 + 7) / 8);
                default:
                    return 0;
            }
        }
        _pharseDDS(t) {
            var e = new Int32Array(t, 0, 31);
            if (542327876 != e[0]) throw "Invalid magic number in DDS header";
            if (!(4 & e[20])) throw "Unsupported format, must contain a FourCC code";
            var i = e[21];
            switch (this._format) {
                case b.FORMAT_DXT1:
                    if (827611204 !== i) throw "the FourCC code is not same with texture format.";
                    break;
                case b.FORMAT_DXT5:
                    if (894720068 !== i) throw "the FourCC code is not same with texture format.";
                    break;
                default:
                    throw "unknown texture format.";
            }
            var s = 1;
            if (131072 & e[2]) {
                if (s = Math.max(1, e[7]), !this._mipmap) throw "the mipmap is not same with Texture2D.";
            } else if (this._mipmap) throw "the mipmap is not same with Texture2D.";
            var r = e[4],
                a = e[3];
            this._width = r, this._height = a;
            var n = e[1] + 4;
            this._upLoadCompressedTexImage2D(t, r, a, s, n, 0);
        }
        _pharseKTX(t) {
            var e = new Uint8Array(t, 0, 12);
            if (171 != e[0] || 75 != e[1] || 84 != e[2] || 88 != e[3] || 32 != e[4] || 49 != e[5] || 49 != e[6] || 187 != e[7] || 13 != e[8] || 10 != e[9] || 26 != e[10] || 10 != e[11]) throw "Invalid fileIdentifier in KTX header";
            var i = new Int32Array(e.buffer, e.length, 13);
            switch (i[4]) {
                case m.layaGPUInstance._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                    this._format = b.FORMAT_ETC1RGB;
                    break;
                default:
                    throw "unknown texture format.";
            }
            var s = i[11],
                r = i[6],
                a = i[7];
            this._width = r, this._height = a;
            var n = 64 + i[12];
            this._upLoadCompressedTexImage2D(t, r, a, s, n, 4);
        }
        _pharsePVR(t) {
            var e = new Int32Array(t, 0, 13);
            if (55727696 != e[0]) throw "Invalid magic number in PVR header";
            switch (e[2]) {
                case 0:
                    this._format = b.FORMAT_PVRTCRGB_2BPPV;
                    break;
                case 2:
                    this._format = b.FORMAT_PVRTCRGB_4BPPV;
                    break;
                case 1:
                    this._format = b.FORMAT_PVRTCRGBA_2BPPV;
                    break;
                case 3:
                    this._format = b.FORMAT_PVRTCRGBA_4BPPV;
                    break;
                default:
                    throw "Texture2D:unknown PVR format.";
            }
            var i = e[11],
                s = e[7],
                r = e[6];
            this._width = s, this._height = r;
            var a = e[12] + 52;
            this._upLoadCompressedTexImage2D(t, s, r, i, a, 0);
        }
        _upLoadCompressedTexImage2D(t, e, i, s, r, a) {
            var n = m.instance,
                h = this._glTextureType;
            C.bindTexture(n, h, this._glTexture);
            for (var o = this._getGLFormat(), l = r, _ = 0; _ < s; _++) {
                l += a;
                var c = this._calcualatesCompressedDataSize(this._format, e, i),
                    u = new Uint8Array(t, l, c);
                n.compressedTexImage2D(h, _, o, e, i, 0, u), e = Math.max(e >> 1, 1), i = Math.max(i >> 1, 1), l += c;
            }
            var d = l;
            this._setGPUMemory(d), this._readyed = !0, this._activeResource();
        }
        loadImageSource(t, e = !1) {
            var s = m.instance,
                r = t.width,
                a = t.height;
            this._width = r, this._height = a, this._isPot(r) && this._isPot(a) || (this._mipmap = !1), this._setWarpMode(s.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(s.TEXTURE_WRAP_T, this._wrapModeV), this._setFilterMode(this._filterMode), C.bindTexture(s, this._glTextureType, this._glTexture);
            var n = this._getGLFormat();
            i.Render.isConchApp ? (t.setPremultiplyAlpha && t.setPremultiplyAlpha(e), s.texImage2D(this._glTextureType, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, t)) : (e && s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), s.texImage2D(this._glTextureType, 0, n, n, s.UNSIGNED_BYTE, t), e && s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)), this._mipmap ? (s.generateMipmap(this._glTextureType), this._setGPUMemory(r * a * 4 * (1 + 1 / 3))) : this._setGPUMemory(r * a * 4), this._canRead && (i.Render.isConchApp ? this._pixels = new Uint8Array(t._nativeObj.getImageData(0, 0, r, a)) : (i.Browser.canvas.size(r, a), i.Browser.canvas.clear(), i.Browser.context.drawImage(t, 0, 0, r, a), this._pixels = new Uint8Array(i.Browser.context.getImageData(0, 0, r, a).data.buffer))), this._readyed = !0, this._activeResource();
        }
        setPixels(t, e = 0) {
            if (!t) throw "Texture2D:pixels can't be null.";
            var i = Math.max(this._width >> e, 1),
                s = Math.max(this._height >> e, 1),
                r = i * s * this._getFormatByteCount();
            if (t.length < r) throw "Texture2D:pixels length should at least " + r + ".";
            this._setPixels(t, e, i, s), this._canRead && (this._pixels = t), this._readyed = !0, this._activeResource();
        }
        setSubPixels(t, e, i, s, r, a = 0) {
            if (!r) throw "Texture2D:pixels can't be null.";
            var n = m.instance,
                h = this._glTextureType;
            C.bindTexture(n, h, this._glTexture);
            var o = this._getGLFormat();
            this._format === b.FORMAT_R8G8B8 ? (n.pixelStorei(n.UNPACK_ALIGNMENT, 1), n.texSubImage2D(h, a, t, e, i, s, o, n.UNSIGNED_BYTE, r), n.pixelStorei(n.UNPACK_ALIGNMENT, 4)) : n.texSubImage2D(h, a, t, e, i, s, o, n.UNSIGNED_BYTE, r), this._readyed = !0, this._activeResource();
        }
        setCompressData(t) {
            switch (this._format) {
                case b.FORMAT_DXT1:
                case b.FORMAT_DXT5:
                    this._pharseDDS(t);
                    break;
                case b.FORMAT_ETC1RGB:
                    this._pharseKTX(t);
                    break;
                case b.FORMAT_PVRTCRGB_2BPPV:
                case b.FORMAT_PVRTCRGBA_2BPPV:
                case b.FORMAT_PVRTCRGB_4BPPV:
                case b.FORMAT_PVRTCRGBA_4BPPV:
                    this._pharsePVR(t);
                    break;
                default:
                    throw "Texture2D:unkonwn format.";
            }
        }
        _recoverResource() {}
        getPixels() {
            if (this._canRead) return this._pixels;
            throw new Error("Texture2D: must set texture canRead is true.");
        }
    }
    R.TEXTURE2D = "TEXTURE2D", R.grayTexture = null, R.whiteTexture = null, R.blackTexture = null;
    class w extends E {
        constructor() {
            super();
        }
    }
    class M {
        static mat2MatArray(t, e) {
            var i = t,
                s = e;
            return s[0] = i.a, s[1] = i.b, s[2] = M.EMPTYMAT4_ARRAY[2], s[3] = M.EMPTYMAT4_ARRAY[3], s[4] = i.c, s[5] = i.d, s[6] = M.EMPTYMAT4_ARRAY[6], s[7] = M.EMPTYMAT4_ARRAY[7], s[8] = M.EMPTYMAT4_ARRAY[8], s[9] = M.EMPTYMAT4_ARRAY[9], s[10] = M.EMPTYMAT4_ARRAY[10], s[11] = M.EMPTYMAT4_ARRAY[11], s[12] = i.tx, s[13] = i.ty, s[14] = M.EMPTYMAT4_ARRAY[14], s[15] = M.EMPTYMAT4_ARRAY[15], e;
        }
        static restoreTempArray() {
            M.TEMPMAT4_ARRAY[0] = 1, M.TEMPMAT4_ARRAY[1] = 0, M.TEMPMAT4_ARRAY[4] = 0, M.TEMPMAT4_ARRAY[5] = 1, M.TEMPMAT4_ARRAY[12] = 0, M.TEMPMAT4_ARRAY[13] = 0;
        }
        static clear() {
            M.worldScissorTest = !1, M.worldAlpha = 1;
        }
    }
    M._MAXSIZE = 99999999, M.EMPTYMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], M.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], M.worldMatrix4 = M.TEMPMAT4_ARRAY, M.worldMatrix = new p(), M.matWVP = null, M.worldAlpha = 1, M.worldScissorTest = !1, M.width = 0, M.height = 0;
    class S extends b {
        constructor(t, e, i = b.FORMAT_R8G8B8, s = b.FORMAT_DEPTH_16) {
            super(i, !1), this._mgrKey = 0, this._glTextureType = m.instance.TEXTURE_2D, this._width = t, this._height = e, this._depthStencilFormat = s, this._create(t, e), this.lock = !0;
        }
        static get currentActive() {
            return S._currentActive;
        }
        get depthStencilFormat() {
            return this._depthStencilFormat;
        }
        get defaulteTexture() {
            return R.grayTexture;
        }
        getIsReady() {
            return !0;
        }
        get sourceWidth() {
            return this._width;
        }
        get sourceHeight() {
            return this._height;
        }
        get offsetX() {
            return 0;
        }
        get offsetY() {
            return 0;
        }
        _create(t, e) {
            var i = m.instance;
            this._frameBuffer = i.createFramebuffer(), C.bindTexture(i, this._glTextureType, this._glTexture);
            var s = this._getGLFormat();
            if (i.texImage2D(this._glTextureType, 0, s, t, e, 0, s, i.UNSIGNED_BYTE, null), this._setGPUMemory(t * e * 4), i.bindFramebuffer(i.FRAMEBUFFER, this._frameBuffer), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, this._glTexture, 0), this._depthStencilFormat !== b.FORMAT_DEPTHSTENCIL_NONE) switch (this._depthStencilBuffer = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, this._depthStencilBuffer), this._depthStencilFormat) {
                case b.FORMAT_DEPTH_16:
                    i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_COMPONENT16, t, e), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, this._depthStencilBuffer);
                    break;
                case b.FORMAT_STENCIL_8:
                    i.renderbufferStorage(i.RENDERBUFFER, i.STENCIL_INDEX8, t, e), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.STENCIL_ATTACHMENT, i.RENDERBUFFER, this._depthStencilBuffer);
                    break;
                case b.FORMAT_DEPTHSTENCIL_16_8:
                    i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, this._depthStencilBuffer);
            }
            i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindRenderbuffer(i.RENDERBUFFER, null), this._setWarpMode(i.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(i.TEXTURE_WRAP_T, this._wrapModeV), this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._readyed = !0, this._activeResource();
        }
        generateMipmap() {
            this._isPot(this.width) && this._isPot(this.height) ? (this._mipmap = !0, m.instance.generateMipmap(this._glTextureType), this._setFilterMode(this._filterMode), this._setGPUMemory(this.width * this.height * 4 * (1 + 1 / 3))) : (this._mipmap = !1, this._setGPUMemory(this.width * this.height * 4));
        }
        static pushRT() {
            S.rtStack.push({
                rt: S._currentActive,
                w: M.width,
                h: M.height
            });
        }
        static popRT() {
            var t = m.instance,
                e = S.rtStack.pop();
            e && (S._currentActive != e.rt && (m.instance.bindFramebuffer(t.FRAMEBUFFER, e.rt ? e.rt._frameBuffer : null), S._currentActive = e.rt), t.viewport(0, 0, e.w, e.h), M.width = e.w, M.height = e.h);
        }
        start() {
            var t = m.instance;
            m.instance.bindFramebuffer(t.FRAMEBUFFER, this._frameBuffer), this._lastRT = S._currentActive, S._currentActive = this, this._readyed = !0, t.viewport(0, 0, this._width, this._height), this._lastWidth = M.width, this._lastHeight = M.height, M.width = this._width, M.height = this._height, w.activeShader = null;
        }
        end() {
            var t = m.instance;
            t.bindFramebuffer(t.FRAMEBUFFER, null), S._currentActive = null, this._readyed = !0;
        }
        restore() {
            var t = m.instance;
            this._lastRT != S._currentActive && (m.instance.bindFramebuffer(t.FRAMEBUFFER, this._lastRT ? this._lastRT._frameBuffer : null), S._currentActive = this._lastRT), this._readyed = !0, t.viewport(0, 0, this._lastWidth, this._lastHeight), M.width = this._lastWidth, M.height = this._lastHeight, w.activeShader = null;
        }
        clear(t = 0, e = 0, i = 0, s = 1) {
            var r = m.instance;
            r.clearColor(t, e, i, s);
            var a = r.COLOR_BUFFER_BIT;
            switch (this._depthStencilFormat) {
                case r.DEPTH_COMPONENT16:
                    a |= r.DEPTH_BUFFER_BIT;
                    break;
                case r.STENCIL_INDEX8:
                    a |= r.STENCIL_BUFFER_BIT;
                    break;
                case r.DEPTH_STENCIL:
                    a |= r.DEPTH_BUFFER_BIT, a |= r.STENCIL_BUFFER_BIT;
            }
            r.clear(a);
        }
        getData(t, e, s, r) {
            if (i.Render.isConchApp && 2 == window.conchConfig.threadMode) throw "native 2 thread mode use getDataAsync";
            var a = m.instance;
            if (a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), !(a.checkFramebufferStatus(a.FRAMEBUFFER) === a.FRAMEBUFFER_COMPLETE)) return a.bindFramebuffer(a.FRAMEBUFFER, null), null;
            var n = new Uint8Array(this._width * this._height * 4),
                h = this._getGLFormat();
            return a.readPixels(t, e, s, r, h, a.UNSIGNED_BYTE, n), a.bindFramebuffer(a.FRAMEBUFFER, null), n;
        }
        getDataAsync(t, e, i, s, r) {
            var a = m.instance;
            a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), a.readPixelsAsync(t, e, i, s, a.RGBA, a.UNSIGNED_BYTE, function(t) {
                r(new Uint8Array(t));
            }), a.bindFramebuffer(a.FRAMEBUFFER, null);
        }
        recycle() {}
        _disposeResource() {
            if (this._frameBuffer) {
                var t = m.instance;
                t.deleteTexture(this._glTexture), t.deleteFramebuffer(this._frameBuffer), t.deleteRenderbuffer(this._depthStencilBuffer), this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null, this._setGPUMemory(0);
            }
        }
    }
    S.rtStack = [], S.defuv = [0, 0, 1, 0, 1, 1, 0, 1], S.flipyuv = [0, 1, 1, 1, 1, 0, 0, 0];
    class I {
        static getRT(t, e) {
            return e |= 0, (t |= 0) >= 1e4 && console.error("getRT error! w too big"), new S(t, e, b.FORMAT_R8G8B8A8, -1);
        }
        static releaseRT(t) {
            t._disposeResource();
        }
    }
    I.dict = {};
    class P {
        static _init_(t) {
            P.fns = [P.BlendNormal, P.BlendAdd, P.BlendMultiply, P.BlendScreen, P.BlendOverlay, P.BlendLight, P.BlendMask, P.BlendDestinationOut], P.targetFns = [P.BlendNormalTarget, P.BlendAddTarget, P.BlendMultiplyTarget, P.BlendScreenTarget, P.BlendOverlayTarget, P.BlendLightTarget, P.BlendMask, P.BlendDestinationOut];
        }
        static BlendNormal(t) {
            C.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_ALPHA);
        }
        static BlendAdd(t) {
            C.setBlendFunc(t, t.ONE, t.DST_ALPHA);
        }
        static BlendMultiply(t) {
            C.setBlendFunc(t, t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA);
        }
        static BlendScreen(t) {
            C.setBlendFunc(t, t.ONE, t.ONE);
        }
        static BlendOverlay(t) {
            C.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_COLOR);
        }
        static BlendLight(t) {
            C.setBlendFunc(t, t.ONE, t.ONE);
        }
        static BlendNormalTarget(t) {
            C.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_ALPHA);
        }
        static BlendAddTarget(t) {
            C.setBlendFunc(t, t.ONE, t.DST_ALPHA);
        }
        static BlendMultiplyTarget(t) {
            C.setBlendFunc(t, t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA);
        }
        static BlendScreenTarget(t) {
            C.setBlendFunc(t, t.ONE, t.ONE);
        }
        static BlendOverlayTarget(t) {
            C.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_COLOR);
        }
        static BlendLightTarget(t) {
            C.setBlendFunc(t, t.ONE, t.ONE);
        }
        static BlendMask(t) {
            C.setBlendFunc(t, t.ZERO, t.SRC_ALPHA);
        }
        static BlendDestinationOut(t) {
            C.setBlendFunc(t, t.ZERO, t.ZERO);
        }
    }
    P.activeBlendFunction = null, P.NAMES = ["normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out"], P.TOINT = {
        normal: 0,
        add: 1,
        multiply: 2,
        screen: 3,
        overlay: 4,
        light: 5,
        mask: 6,
        "destination-out": 7,
        lighter: 1
    }, P.NORMAL = "normal", P.ADD = "add", P.MULTIPLY = "multiply", P.SCREEN = "screen", P.OVERLAY = "overlay", P.LIGHT = "light", P.MASK = "mask", P.DESTINATIONOUT = "destination-out", P.LIGHTER = "lighter", P.fns = [], P.targetFns = [];
    class D {
        constructor(t, e, i) {
            this._value = 0, this._name2int = t, this._int2name = e, this._int2nameMap = i;
        }
        add(t) {
            return this._value |= "string" == typeof t ? this._name2int[t] : t, this._value;
        }
        addInt(t) {
            return this._value |= t, this._value;
        }
        remove(t) {
            return this._value &= "string" == typeof t ? ~this._name2int[t] : ~t, this._value;
        }
        isDefine(t) {
            return (this._value & t) === t;
        }
        getValue() {
            return this._value;
        }
        setValue(t) {
            this._value = t;
        }
        toNameDic() {
            var t = this._int2nameMap[this._value];
            return t || D._toText(this._value, this._int2name, this._int2nameMap);
        }
        static _reg(t, e, i, s) {
            i[t] = e, s[e] = t;
        }
        static _toText(t, e, i) {
            var s = i[t];
            if (s) return s;
            for (var r = {}, a = 1, n = 0; n < 32 && !((a = 1 << n) > t); n++)
                if (t & a) {
                    var h = e[a];
                    h && (r[h] = "");
                }
            return i[t] = r, r;
        }
        static _toInt(t, e) {
            for (var i = t.split("."), s = 0, r = 0, a = i.length; r < a; r++) {
                var n = e[i[r]];
                if (!n) throw new Error("Defines to int err:" + t + "/" + i[r]);
                s |= n;
            }
            return s;
        }
    }
    class L extends D {
        constructor() {
            super(L.__name2int, L.__int2name, L.__int2nameMap);
        }
        static __init__() {
            L.reg("TEXTURE2D", L.TEXTURE2D), L.reg("PRIMITIVE", L.PRIMITIVE), L.reg("GLOW_FILTER", L.FILTERGLOW), L.reg("BLUR_FILTER", L.FILTERBLUR), L.reg("COLOR_FILTER", L.FILTERCOLOR), L.reg("COLOR_ADD", L.COLORADD), L.reg("WORLDMAT", L.WORLDMAT), L.reg("FILLTEXTURE", L.FILLTEXTURE), L.reg("FSHIGHPRECISION", L.SHADERDEFINE_FSHIGHPRECISION), L.reg("MVP3D", L.MVP3D);
        }
        static reg(t, e) {
            this._reg(t, e, L.__name2int, L.__int2name);
        }
        static toText(t, e, i) {
            return this._toText(t, e, i);
        }
        static toInt(t) {
            return this._toInt(t, L.__name2int);
        }
    }
    L.TEXTURE2D = 1, L.PRIMITIVE = 4, L.FILTERGLOW = 8, L.FILTERBLUR = 16, L.FILTERCOLOR = 32, L.COLORADD = 64, L.WORLDMAT = 128, L.FILLTEXTURE = 256, L.SKINMESH = 512, L.SHADERDEFINE_FSHIGHPRECISION = 1024, L.MVP3D = 2048, L.NOOPTMASK = L.FILTERGLOW | L.FILTERBLUR | L.FILTERCOLOR | L.FILLTEXTURE, L.__name2int = {}, L.__int2name = [], L.__int2nameMap = [];
    class O {
        static show(t = 0, e = 0) {
            O._StatRender.show(t, e);
        }
        static enable() {
            O._StatRender.enable();
        }
        static hide() {
            O._StatRender.hide();
        }
        static clear() {
            O.trianglesFaces = O.renderBatches = O.savedRenderBatches = O.shaderCall = O.spriteRenderUseCacheCount = O.frustumCulling = O.octreeNodeCulling = O.canvasNormal = O.canvasBitmap = O.canvasReCache = 0;
        }
        static set onclick(t) {
            O._StatRender.set_onclick(t);
        }
    }
    O.FPS = 0, O.loopCount = 0, O.shaderCall = 0, O.renderBatches = 0, O.savedRenderBatches = 0, O.trianglesFaces = 0, O.spriteCount = 0, O.spriteRenderUseCacheCount = 0, O.frustumCulling = 0, O.octreeNodeCulling = 0, O.canvasNormal = 0, O.canvasBitmap = 0, O.canvasReCache = 0, O.renderSlow = !1, O._fpsData = [], O._timer = 0, O._count = 0, O._StatRender = null;
    class B {
        constructor() {
            this._strsToID = {}, this._idToStrs = [], this._length = 0;
        }
        add(t) {
            var e = this._strsToID[t];
            return null != e ? e : (this._idToStrs[this._length] = t, this._strsToID[t] = this._length++);
        }
        getID(t) {
            var e = this._strsToID[t];
            return null == e ? -1 : e;
        }
        getName(t) {
            var e = this._idToStrs[t];
            return null == e ? void 0 : e;
        }
    }
    class F extends w {
        constructor(t, e, i = null, s = null, r = null) {
            if (super(), this._attribInfo = null, this.customCompile = !1, this._curActTexIndex = 0, this.tag = {}, this._program = null, this._params = null, this._paramsMap = {}, !t || !e) throw "Shader Error";
            this._attribInfo = r, this._id = ++F._count, this._vs = t, this._ps = e, this._nameMap = s || {}, null != i && (F.sharders[i] = this), this.recreateResource(), this.lock = !0;
        }
        static getShader(t) {
            return F.sharders[t];
        }
        static create(t, e, i = null, s = null, r = null) {
            return new F(t, e, i, s, r);
        }
        static withCompile(t, e, i, s) {
            if (i && F.sharders[i]) return F.sharders[i];
            var r = F._preCompileShader[F.SHADERNAME2ID * t];
            if (!r) throw new Error("withCompile shader err!" + t);
            return r.createShader(e, i, s, null);
        }
        static withCompile2D(t, e, i, s, r, a = null) {
            if (s && F.sharders[s]) return F.sharders[s];
            var n = F._preCompileShader[F.SHADERNAME2ID * t + e];
            if (!n) throw new Error("withCompile shader err!" + t + " " + e);
            return n.createShader(i, s, r, a);
        }
        static addInclude(t, e) {
            i.ShaderCompile.addInclude(t, e);
        }
        static preCompile(t, e, s, r) {
            var a = F.SHADERNAME2ID * t;
            F._preCompileShader[a] = new i.ShaderCompile(e, s, r);
        }
        static preCompile2D(t, e, s, r, a) {
            var n = F.SHADERNAME2ID * t + e;
            F._preCompileShader[n] = new i.ShaderCompile(s, r, a);
        }
        recreateResource() {
            this._compile(), this._setGPUMemory(0);
        }
        _disposeResource() {
            C.mainContext.deleteShader(this._vshader), C.mainContext.deleteShader(this._pshader), C.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null, this._params = null, this._paramsMap = {}, this._setGPUMemory(0), this._curActTexIndex = 0;
        }
        _compile() {
            if (this._vs && this._ps && !this._params) {
                var t;
                this._reCompile = !0, this._params = [], this.customCompile && (t = i.ShaderCompile.preGetParams(this._vs, this._ps));
                var e, s, r, a = C.mainContext;
                this._program = a.createProgram(), this._vshader = F._createShader(a, this._vs, a.VERTEX_SHADER), this._pshader = F._createShader(a, this._ps, a.FRAGMENT_SHADER), a.attachShader(this._program, this._vshader), a.attachShader(this._program, this._pshader);
                var n = this._attribInfo ? this._attribInfo.length : 0;
                for (s = 0; s < n; s += 2) a.bindAttribLocation(this._program, this._attribInfo[s + 1], this._attribInfo[s]);
                if (a.linkProgram(this._program), !this.customCompile && !a.getProgramParameter(this._program, a.LINK_STATUS)) throw a.getProgramInfoLog(this._program);
                var h = this.customCompile ? t.uniforms.length : a.getProgramParameter(this._program, a.ACTIVE_UNIFORMS);
                for (s = 0; s < h; s++) {
                    var o = this.customCompile ? t.uniforms[s] : a.getActiveUniform(this._program, s);
                    (e = {
                        vartype: "uniform",
                        glfun: null,
                        ivartype: 1,
                        location: a.getUniformLocation(this._program, o.name),
                        name: o.name,
                        type: o.type,
                        isArray: !1,
                        isSame: !1,
                        preValue: null,
                        indexOfParams: 0
                    }).name.indexOf("[0]") > 0 && (e.name = e.name.substr(0, e.name.length - 3), e.isArray = !0, e.location = a.getUniformLocation(this._program, e.name)), this._params.push(e);
                }
                for (s = 0, r = this._params.length; s < r; s++) switch ((e = this._params[s]).indexOfParams = s, e.index = 1, e.value = [e.location, null], e.codename = e.name, e.name = this._nameMap[e.codename] ? this._nameMap[e.codename] : e.codename, this._paramsMap[e.name] = e, e._this = this, e.uploadedValue = [], e.type) {
                    case a.INT:
                        e.fun = e.isArray ? this._uniform1iv : this._uniform1i;
                        break;
                    case a.FLOAT:
                        e.fun = e.isArray ? this._uniform1fv : this._uniform1f;
                        break;
                    case a.FLOAT_VEC2:
                        e.fun = e.isArray ? this._uniform_vec2v : this._uniform_vec2;
                        break;
                    case a.FLOAT_VEC3:
                        e.fun = e.isArray ? this._uniform_vec3v : this._uniform_vec3;
                        break;
                    case a.FLOAT_VEC4:
                        e.fun = e.isArray ? this._uniform_vec4v : this._uniform_vec4;
                        break;
                    case a.SAMPLER_2D:
                        e.fun = this._uniform_sampler2D;
                        break;
                    case a.SAMPLER_CUBE:
                        e.fun = this._uniform_samplerCube;
                        break;
                    case a.FLOAT_MAT4:
                        e.glfun = a.uniformMatrix4fv, e.fun = this._uniformMatrix4fv;
                        break;
                    case a.BOOL:
                        e.fun = this._uniform1i;
                        break;
                    case a.FLOAT_MAT2:
                    case a.FLOAT_MAT3:
                    default:
                        throw new Error("compile shader err!");
                }
            }
        }
        static _createShader(t, e, i) {
            var s = t.createShader(i);
            return t.shaderSource(s, e), t.compileShader(s), t.getShaderParameter(s, t.COMPILE_STATUS) ? s : (console.log(t.getShaderInfoLog(s)), null);
        }
        getUniform(t) {
            return this._paramsMap[t];
        }
        _uniform1f(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e ? (C.mainContext.uniform1f(t.location, i[0] = e), 1) : 0;
        }
        _uniform1fv(t, e) {
            if (e.length < 4) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (C.mainContext.uniform1fv(t.location, e), i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
            }
            return C.mainContext.uniform1fv(t.location, e), 1;
        }
        _uniform_vec2(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] ? (C.mainContext.uniform2f(t.location, i[0] = e[0], i[1] = e[1]), 1) : 0;
        }
        _uniform_vec2v(t, e) {
            if (e.length < 2) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (C.mainContext.uniform2fv(t.location, e), i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
            }
            return C.mainContext.uniform2fv(t.location, e), 1;
        }
        _uniform_vec3(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (C.mainContext.uniform3f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 1) : 0;
        }
        _uniform_vec3v(t, e) {
            return C.mainContext.uniform3fv(t.location, e), 1;
        }
        _uniform_vec4(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (C.mainContext.uniform4f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 1) : 0;
        }
        _uniform_vec4v(t, e) {
            return C.mainContext.uniform4fv(t.location, e), 1;
        }
        _uniformMatrix2fv(t, e) {
            return C.mainContext.uniformMatrix2fv(t.location, !1, e), 1;
        }
        _uniformMatrix3fv(t, e) {
            return C.mainContext.uniformMatrix3fv(t.location, !1, e), 1;
        }
        _uniformMatrix4fv(t, e) {
            return C.mainContext.uniformMatrix4fv(t.location, !1, e), 1;
        }
        _uniform1i(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e ? (C.mainContext.uniform1i(t.location, i[0] = e), 1) : 0;
        }
        _uniform1iv(t, e) {
            return C.mainContext.uniform1iv(t.location, e), 1;
        }
        _uniform_ivec2(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] ? (C.mainContext.uniform2i(t.location, i[0] = e[0], i[1] = e[1]), 1) : 0;
        }
        _uniform_ivec2v(t, e) {
            return C.mainContext.uniform2iv(t.location, e), 1;
        }
        _uniform_vec3i(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (C.mainContext.uniform3i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 1) : 0;
        }
        _uniform_vec3vi(t, e) {
            return C.mainContext.uniform3iv(t.location, e), 1;
        }
        _uniform_vec4i(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (C.mainContext.uniform4i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 1) : 0;
        }
        _uniform_vec4vi(t, e) {
            return C.mainContext.uniform4iv(t.location, e), 1;
        }
        _uniform_sampler2D(t, e) {
            var i = C.mainContext,
                s = t.uploadedValue;
            return null == s[0] ? (s[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), C.activeTexture(i, i.TEXTURE0 + this._curActTexIndex), C.bindTexture(i, i.TEXTURE_2D, e), this._curActTexIndex++, 1) : (C.activeTexture(i, i.TEXTURE0 + s[0]), C.bindTexture(i, i.TEXTURE_2D, e), 0);
        }
        _uniform_samplerCube(t, e) {
            var i = C.mainContext,
                s = t.uploadedValue;
            return null == s[0] ? (s[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), C.activeTexture(i, i.TEXTURE0 + this._curActTexIndex), C.bindTexture(i, i.TEXTURE_CUBE_MAP, e), this._curActTexIndex++, 1) : (C.activeTexture(i, i.TEXTURE0 + s[0]), C.bindTexture(i, i.TEXTURE_CUBE_MAP, e), 0);
        }
        _noSetValue(t) {
            console.log("no....:" + t.name);
        }
        uploadOne(t, e) {
            C.useProgram(C.mainContext, this._program);
            var i = this._paramsMap[t];
            i.fun.call(this, i, e);
        }
        uploadTexture2D(t) {
            var e = C;
            e._activeTextures[0] !== t && (e.bindTexture(C.mainContext, m.instance.TEXTURE_2D, t), e._activeTextures[0] = t);
        }
        upload(t, e = null) {
            w.activeShader = w.bindShader = this;
            var i = C.mainContext;
            C.useProgram(i, this._program), this._reCompile ? (e = this._params, this._reCompile = !1) : e = e || this._params;
            for (var s, r, a = e.length, n = 0, h = 0; h < a; h++) null !== (r = t[(s = e[h]).name]) && (n += s.fun.call(this, s, r));
            O.shaderCall += n;
        }
        uploadArray(t, e, i) {
            w.activeShader = this, w.bindShader = this, C.useProgram(C.mainContext, this._program);
            this._params;
            for (var s, r, a = 0, n = e - 2; n >= 0; n -= 2)(r = this._paramsMap[t[n]]) && null != (s = t[n + 1]) && (i && i[r.name] && i[r.name].bind(), a += r.fun.call(this, r, s));
            O.shaderCall += a;
        }
        getParams() {
            return this._params;
        }
        setAttributesLocation(t) {
            this._attribInfo = t;
        }
    }
    F._count = 0, F._preCompileShader = {}, F.SHADERNAME2ID = 2e-4, F.nameKey = new B(), F.sharders = new Array(32);
    class N extends F {
        constructor(t, e, i = null, s = null, r = null) {
            super(t, e, i, s, r), this._params2dQuick2 = null, this._shaderValueWidth = 0, this._shaderValueHeight = 0;
        }
        _disposeResource() {
            super._disposeResource(), this._params2dQuick2 = null;
        }
        upload2dQuick2(t) {
            this.upload(t, this._params2dQuick2 || this._make2dQuick2());
        }
        _make2dQuick2() {
            if (!this._params2dQuick2) {
                this._params2dQuick2 = [];
                for (var t, e = this._params, i = 0, s = e.length; i < s; i++) "size" !== (t = e[i]).name && this._params2dQuick2.push(t);
            }
            return this._params2dQuick2;
        }
        static create(t, e, i = null, s = null, r = null) {
            return new N(t, e, i, s, r);
        }
    }
    class U {
        constructor(t, e) {
            this.defines = new L(), this.size = [0, 0], this.alpha = 1, this.ALPHA = 1, this.subID = 0, this.ref = 1, this._cacheID = 0, this.clipMatDir = [i.Context._MAXSIZE, 0, 0, i.Context._MAXSIZE], this.clipMatPos = [0, 0], this.clipOff = [0, 0], this.mainID = t, this.subID = e, this.textureHost = null, this.texture = null, this.color = null, this.colorAdd = null, this.u_mmat2 = null, this._cacheID = t | e, this._inClassCache = U._cache[this._cacheID], t > 0 && !this._inClassCache && (this._inClassCache = U._cache[this._cacheID] = [], this._inClassCache._length = 0), this.clear();
        }
        static _initone(t, e) {
            U._typeClass[t] = e, U._cache[t] = [], U._cache[t]._length = 0;
        }
        static __init__() {}
        setValue(t) {}
        _ShaderWithCompile() {
            return F.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, N.create, this._attribLocation);
        }
        upload() {
            var t = M;
            M.worldMatrix4 === M.TEMPMAT4_ARRAY || this.defines.addInt(L.WORLDMAT), this.mmat = t.worldMatrix4, M.matWVP && (this.defines.addInt(L.MVP3D), this.u_MvpMatrix = M.matWVP.elements);
            var e = F.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
            e._shaderValueWidth !== t.width || e._shaderValueHeight !== t.height ? (this.size[0] = t.width, this.size[1] = t.height, e._shaderValueWidth = t.width, e._shaderValueHeight = t.height, e.upload(this, null)) : e.upload(this, e._params2dQuick2 || e._make2dQuick2());
        }
        setFilters(t) {
            if (this.filters = t, t)
                for (var e, i = t.length, s = 0; s < i; s++)(e = t[s]) && (this.defines.add(e.type), e.action.setValue(this));
        }
        clear() {
            this.defines._value = this.subID + (i.WebGL.shaderHighPrecision ? L.SHADERDEFINE_FSHIGHPRECISION : 0), this.clipOff[0] = 0;
        }
        release() {
            --this.ref < 1 && (this._inClassCache && (this._inClassCache[this._inClassCache._length++] = this), this.clear(), this.filters = null, this.ref = 1, this.clipOff[0] = 0);
        }
        static create(t, e) {
            var i = U._cache[t | e];
            return i._length ? i[--i._length] : new U._typeClass[t | e](e);
        }
    }
    U._cache = [], U._typeClass = [], U.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    class k {
        constructor() {
            this.clear();
        }
        clear() {
            this.submitType = -1, this.blendShader = this.other = 0;
        }
        copyFrom(t) {
            this.other = t.other, this.blendShader = t.blendShader, this.submitType = t.submitType;
        }
        copyFrom2(t, e, i) {
            this.other = i, this.submitType = e;
        }
        equal3_2(t, e, i) {
            return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
        }
        equal4_2(t, e, i) {
            return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
        }
        equal_3(t) {
            return this.submitType === t.submitType && this.blendShader === t.blendShader;
        }
        equal(t) {
            return this.other === t.other && this.submitType === t.submitType && this.blendShader === t.blendShader;
        }
    }
    class G {
        constructor() {
            this._ref = 1, this._key = new k();
        }
        renderSubmit() {
            return this.fun.apply(this._this, this.args), 1;
        }
        getRenderType() {
            return 0;
        }
        releaseRender() {
            if (--this._ref < 1) {
                var t = G.POOL;
                t[t._length++] = this;
            }
        }
        static create(t, e, i) {
            var s = G.POOL._length ? G.POOL[--G.POOL._length] : new G();
            return s.fun = e, s.args = t, s._this = i, s._ref = 1, s._key.clear(), s;
        }
    }
    G.POOL = [], G.POOL._length = 0;
    class W {
        constructor() {}
        get type() {
            return -1;
        }
    }
    W.BLUR = 16, W.COLOR = 32, W.GLOW = 8, W._filter = function(t, e, i, s) {
        var r = e,
            a = this._next;
        if (a) {
            var n = t.filters,
                h = n.length;
            if (1 == h && n[0].type == W.COLOR) return e.save(), e.setColorFilter(n[0]), a._fun.call(a, t, e, i, s), void e.restore();
            var o, l = U.create(L.TEXTURE2D, 0),
                _ = f.TEMP,
                c = r._curMat,
                u = p.create();
            c.copyTo(u);
            var d = 0,
                m = 0,
                v = null,
                T = t._cacheStyle.filterCache || null;
            if (T && 0 == t.getRepaint()) {
                if ((t._cacheStyle.hasGlowFilter || !1) && (d = 50, m = 25), (o = t.getBounds()).width <= 0 || o.height <= 0) return;
                o.width += d, o.height += d, _.x = o.x * u.a + o.y * u.c, _.y = o.y * u.d + o.x * u.b, o.x = _.x, o.y = _.y, _.x = o.width * u.a + o.height * u.c, _.y = o.height * u.d + o.width * u.b, o.width = _.x, o.height = _.y;
            } else {
                t._isHaveGlowFilter() && (d = 50, m = 25), (o = new g()).copyFrom(t.getSelfBounds()), o.x += t.x, o.y += t.y, o.x -= t.pivotX + 4, o.y -= t.pivotY + 4;
                var x = o.x,
                    y = o.y;
                if (o.width += d + 8, o.height += d + 8, _.x = o.x * u.a + o.y * u.c, _.y = o.y * u.d + o.x * u.b, o.x = _.x, o.y = _.y, _.x = o.width * u.a + o.height * u.c, _.y = o.height * u.d + o.width * u.b, o.width = _.x, o.height = _.y, o.width <= 0 || o.height <= 0) return;
                T && I.releaseRT(T), v = I.getRT(o.width, o.height);
                var E = T = I.getRT(o.width, o.height);
                t._getCacheStyle().filterCache = T, r.pushRT(), r.useRT(v);
                var A = t.x - x + m,
                    C = t.y - y + m;
                a._fun.call(a, t, e, A, C), r.useRT(E);
                for (var b = 0; b < h; b++) {
                    0 != b && (r.useRT(v), r.drawTarget(E, 0, 0, o.width, o.height, p.TEMP.identity(), l, null, P.TOINT.overlay), r.useRT(E));
                    var R = n[b];
                    switch (R.type) {
                        case W.BLUR:
                        case W.GLOW:
                            R._glRender && R._glRender.render(v, e, o.width, o.height, R);
                            break;
                        case W.COLOR:
                            r.setColorFilter(R), r.drawTarget(v, 0, 0, o.width, o.height, p.EMPTY.identity(), U.create(L.TEXTURE2D, 0)), r.setColorFilter(null);
                    }
                }
                r.popRT();
            }
            if (i = i - m - t.x, s = s - m - t.y, _.setTo(i, s), u.transformPoint(_), i = _.x + o.x, s = _.y + o.y, r._drawRenderTexture(T, i, s, o.width, o.height, p.TEMP.identity(), 1, S.defuv), v) {
                var w = G.create([v], function(t) {
                    t.destroy();
                }, this);
                v = null, e.addRenderObject(w);
            }
            u.destroy();
        }
    };
    class Y {
        static toRadian(t) {
            return t * Y._pi2;
        }
        static toAngle(t) {
            return t * Y._pi;
        }
        static toHexColor(t) {
            if (t < 0 || isNaN(t)) return null;
            for (var e = t.toString(16); e.length < 6;) e = "0" + e;
            return "#" + e;
        }
        static getGID() {
            return Y._gid++;
        }
        static concatArray(t, e) {
            if (!e) return t;
            if (!t) return e;
            var i, s = e.length;
            for (i = 0; i < s; i++) t.push(e[i]);
            return t;
        }
        static clearArray(t) {
            return t ? (t.length = 0, t) : t;
        }
        static copyArray(t, e) {
            if (t || (t = []), !e) return t;
            t.length = e.length;
            var i, s = e.length;
            for (i = 0; i < s; i++) t[i] = e[i];
            return t;
        }
        static getGlobalRecByPoints(t, e, i, s, r) {
            var a, n;
            a = f.create().setTo(e, i), a = t.localToGlobal(a), n = f.create().setTo(s, r), n = t.localToGlobal(n);
            var h = g._getWrapRec([a.x, a.y, n.x, n.y]);
            return a.recover(), n.recover(), h;
        }
        static getGlobalPosAndScale(t) {
            return Y.getGlobalRecByPoints(t, 0, 0, 1, 1);
        }
        static bind(t, e) {
            return t.bind(e);
        }
        static updateOrder(t) {
            if (!t || t.length < 2) return !1;
            for (var e, i, s, r = 1, a = t.length; r < a;) {
                for (s = t[e = r], i = t[e]._zOrder; --e > -1 && t[e]._zOrder > i;) t[e + 1] = t[e];
                t[e + 1] = s, r++;
            }
            return !0;
        }
        static transPointList(t, e, i) {
            var s, r = t.length;
            for (s = 0; s < r; s += 2) t[s] += e, t[s + 1] += i;
        }
        static parseInt(t, e = 0) {
            var i = parseInt(t, e);
            return isNaN(i) ? 0 : i;
        }
        static getFileExtension(t) {
            Y._extReg.lastIndex = t.lastIndexOf(".");
            var e = Y._extReg.exec(t);
            return e && e.length > 1 ? e[1].toLowerCase() : null;
        }
        static getTransformRelativeToWindow(t, e, i) {
            var s = Y.gStage,
                r = Y.getGlobalPosAndScale(t),
                a = s._canvasTransform.clone(),
                n = a.tx,
                h = a.ty;
            a.rotate(-Math.PI / 180 * s.canvasDegree), a.scale(s.clientScaleX, s.clientScaleY);
            var o, l, _, c, u = s.canvasDegree % 180 != 0;
            return u ? (o = i + r.y, l = e + r.x, o *= a.d, l *= a.a, 90 == s.canvasDegree ? (o = n - o, l += h) : (o += n, l = h - l)) : (o = e + r.x, l = i + r.y, o *= a.a, l *= a.d, o += n, l += h), l += s._safariOffsetY, u ? (_ = a.d * r.height, c = a.a * r.width) : (_ = a.a * r.width, c = a.d * r.height), {
                x: o,
                y: l,
                scaleX: _,
                scaleY: c
            };
        }
        static fitDOMElementInArea(t, e, i, s, r, a) {
            t._fitLayaAirInitialized || (t._fitLayaAirInitialized = !0, t.style.transformOrigin = t.style.webKittransformOrigin = "left top", t.style.position = "absolute");
            var n = Y.getTransformRelativeToWindow(e, i, s);
            t.style.transform = t.style.webkitTransform = "scale(" + n.scaleX + "," + n.scaleY + ") rotate(" + Y.gStage.canvasDegree + "deg)", t.style.width = r + "px", t.style.height = a + "px", t.style.left = n.x + "px", t.style.top = n.y + "px";
        }
        static isOkTextureList(t) {
            if (!t) return !1;
            var e, i, s = t.length;
            for (e = 0; e < s; e++)
                if (!(i = t[e]) || !i._getSource()) return !1;
            return !0;
        }
        static isOKCmdList(t) {
            if (!t) return !1;
            var e, i = t.length;
            for (e = 0; e < i; e++) t[e];
            return !0;
        }
        static getQueryString(t) {
            if (i.Browser.onMiniGame) return null;
            if (!window.location || !window.location.search) return null;
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                s = window.location.search.substr(1).match(e);
            return null != s ? unescape(s[2]) : null;
        }
    }
    Y.gStage = null, Y._gid = 1, Y._pi = 180 / Math.PI, Y._pi2 = Math.PI / 180, Y._extReg = /\.(\w+)\??/g, Y.parseXMLFromString = function(t) {
        var e;
        if (t = t.replace(/>\s+</g, "><"), (e = new DOMParser().parseFromString(t, "text/xml")).firstChild.textContent.indexOf("This page contains the following errors") > -1) throw new Error(e.firstChild.firstChild.textContent);
        return e;
    };
    class V {
        constructor(t) {
            if (this.arrColor = [], null == t) return this.strColor = "#00000000", this.numColor = 0, void(this.arrColor = [0, 0, 0, 0]);
            var e, i, s;
            if ("string" == typeof t)
                if (t.indexOf("rgba(") >= 0 || t.indexOf("rgb(") >= 0) {
                    var r, a, n = t;
                    for (r = n.indexOf("("), a = n.indexOf(")"), n = n.substring(r + 1, a), this.arrColor = n.split(","), i = this.arrColor.length, e = 0; e < i; e++) this.arrColor[e] = parseFloat(this.arrColor[e]), e < 3 && (this.arrColor[e] = Math.round(this.arrColor[e]));
                    s = 4 == this.arrColor.length ? 256 * (256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2]) + Math.round(255 * this.arrColor[3]) : 256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2], this.strColor = t;
                } else {
                    if (this.strColor = t, "#" === t.charAt(0) && (t = t.substr(1)), 3 === (i = t.length) || 4 === i) {
                        var h = "";
                        for (e = 0; e < i; e++) h += t[e] + t[e];
                        t = h;
                    }
                    s = parseInt(t, 16);
                }
            else s = t, this.strColor = Y.toHexColor(s);
            this.strColor.indexOf("rgba") >= 0 || 9 === this.strColor.length ? (this.arrColor = [((4278190080 & s) >>> 24) / 255, ((16711680 & s) >> 16) / 255, ((65280 & s) >> 8) / 255, (255 & s) / 255], this.numColor = (4278190080 & s) >>> 24 | (16711680 & s) >> 8 | (65280 & s) << 8 | (255 & s) << 24) : (this.arrColor = [((16711680 & s) >> 16) / 255, ((65280 & s) >> 8) / 255, (255 & s) / 255, 1], this.numColor = 4278190080 | (16711680 & s) >> 16 | 65280 & s | (255 & s) << 16), this.arrColor.__id = ++V._COLODID;
        }
        static _initDefault() {
            for (var t in V._DEFAULT = {}, V._COLOR_MAP) V._SAVE[t] = V._DEFAULT[t] = new V(V._COLOR_MAP[t]);
            return V._DEFAULT;
        }
        static _initSaveMap() {
            for (var t in V._SAVE_SIZE = 0, V._SAVE = {}, V._DEFAULT) V._SAVE[t] = V._DEFAULT[t];
        }
        static create(t) {
            var e = t + "",
                i = V._SAVE[e];
            return null != i ? i : (V._SAVE_SIZE < 1e3 && V._initSaveMap(), V._SAVE[e] = new V(t));
        }
    }
    V._SAVE = {}, V._SAVE_SIZE = 0, V._COLOR_MAP = {
        purple: "#800080",
        orange: "#ffa500",
        white: "#FFFFFF",
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        black: "#000000",
        yellow: "#FFFF00",
        gray: "#808080"
    }, V._DEFAULT = V._initDefault(), V._COLODID = 1;
    class H extends W {
        constructor(t = null) {
            super(), t || (t = this._copyMatrix(H.IDENTITY_MATRIX)), this._mat = new Float32Array(16), this._alpha = new Float32Array(4), this.setByMatrix(t);
        }
        gray() {
            return this.setByMatrix(H.GRAY_MATRIX);
        }
        color(t = 0, e = 0, i = 0, s = 1) {
            return this.setByMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, e, 0, 0, 1, 0, i, 0, 0, 0, 1, s]);
        }
        setColor(t) {
            var e = V.create(t).arrColor,
                i = [0, 0, 0, 0, 256 * e[0], 0, 0, 0, 0, 256 * e[1], 0, 0, 0, 0, 256 * e[2], 0, 0, 0, 1, 0];
            return this.setByMatrix(i);
        }
        setByMatrix(t) {
            this._matrix != t && this._copyMatrix(t);
            for (var e = 0, i = 0, s = 0; s < 20; s++) s % 5 != 4 ? this._mat[e++] = t[s] : this._alpha[i++] = t[s];
            return this;
        }
        get type() {
            return W.COLOR;
        }
        adjustColor(t, e, i, s) {
            return this.adjustHue(s), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i), this;
        }
        adjustBrightness(t) {
            return 0 == (t = this._clampValue(t, 100)) || isNaN(t) ? this : this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        }
        adjustContrast(t) {
            if (0 == (t = this._clampValue(t, 100)) || isNaN(t)) return this;
            var e, i = (e = t < 0 ? 127 + t / 100 * 127 : 127 * (e = 0 == (e = t % 1) ? H.DELTA_INDEX[t] : H.DELTA_INDEX[t << 0] * (1 - e) + H.DELTA_INDEX[1 + (t << 0)] * e) + 127) / 127,
                s = .5 * (127 - e);
            return this._multiplyMatrix([i, 0, 0, 0, s, 0, i, 0, 0, s, 0, 0, i, 0, s, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        }
        adjustSaturation(t) {
            if (0 == (t = this._clampValue(t, 100)) || isNaN(t)) return this;
            var e = 1 + (t > 0 ? 3 * t / 100 : t / 100),
                i = 1 - e,
                s = .3086 * i,
                r = .6094 * i,
                a = .082 * i;
            return this._multiplyMatrix([s + e, r, a, 0, 0, s, r + e, a, 0, 0, s, r, a + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        }
        adjustHue(t) {
            if (0 == (t = this._clampValue(t, 180) / 180 * Math.PI) || isNaN(t)) return this;
            var e = Math.cos(t),
                i = Math.sin(t),
                s = .213,
                r = .715,
                a = .072;
            return this._multiplyMatrix([s + e * (1 - s) + i * -s, r + e * -r + i * -r, a + e * -a + i * (1 - a), 0, 0, s + e * -s + .143 * i, r + e * (1 - r) + .14 * i, a + e * -a + -.283 * i, 0, 0, s + e * -s + -.787 * i, r + e * -r + i * r, a + e * (1 - a) + i * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        }
        reset() {
            return this.setByMatrix(this._copyMatrix(H.IDENTITY_MATRIX));
        }
        _multiplyMatrix(t) {
            var e = [];
            this._matrix = this._fixMatrix(this._matrix);
            for (var i = 0; i < 5; i++) {
                for (var s = 0; s < 5; s++) e[s] = this._matrix[s + 5 * i];
                for (s = 0; s < 5; s++) {
                    for (var r = 0, a = 0; a < 5; a++) r += t[s + 5 * a] * e[a];
                    this._matrix[s + 5 * i] = r;
                }
            }
            return this.setByMatrix(this._matrix);
        }
        _clampValue(t, e) {
            return Math.min(e, Math.max(-e, t));
        }
        _fixMatrix(t = null) {
            return null == t ? H.IDENTITY_MATRIX : (t.length < H.LENGTH ? t = t.slice(0, t.length).concat(H.IDENTITY_MATRIX.slice(t.length, H.LENGTH)) : t.length > H.LENGTH && (t = t.slice(0, H.LENGTH)), t);
        }
        _copyMatrix(t) {
            var e = H.LENGTH;
            this._matrix || (this._matrix = []);
            for (var i = 0; i < e; i++) this._matrix[i] = t[i];
            return this._matrix;
        }
    }
    H.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], H.GRAY_MATRIX = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0], H.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], H.LENGTH = 25;
    class X {
        constructor() {
            this.colorFlt = null, this.uv = null;
        }
        static create(t, e, i, r, a, n, h, o, l, _) {
            var c = s.getItemByClass("DrawTextureCmd", X);
            return c.texture = t, t._addReference(), c.x = e, c.y = i, c.width = r, c.height = a, c.matrix = n, c.alpha = h, c.color = o, c.blendMode = l, c.uv = _, o && (c.colorFlt = new H(), c.colorFlt.setColor(o)), c;
        }
        recover() {
            this.texture._removeReference(), this.texture = null, this.matrix = null, s.recover("DrawTextureCmd", this);
        }
        run(t, e, i) {
            t.drawTextureWithTransform(this.texture, this.x, this.y, this.width, this.height, this.matrix, e, i, this.alpha, this.blendMode, this.colorFlt, this.uv);
        }
        get cmdID() {
            return X.ID;
        }
    }
    X.ID = "DrawTexture";
    class z {
        static create(t, e, i, r, a, n, h, o) {
            var l = s.getItemByClass("FillTextureCmd", z);
            return l.texture = t, l.x = e, l.y = i, l.width = r, l.height = a, l.type = n, l.offset = h, l.other = o, l;
        }
        recover() {
            this.texture = null, this.offset = null, this.other = null, s.recover("FillTextureCmd", this);
        }
        run(t, e, i) {
            t.fillTexture(this.texture, this.x + e, this.y + i, this.width, this.height, this.type, this.offset, this.other);
        }
        get cmdID() {
            return z.ID;
        }
    }
    z.ID = "FillTexture";
    class j {
        static create() {
            return s.getItemByClass("RestoreCmd", j);
        }
        recover() {
            s.recover("RestoreCmd", this);
        }
        run(t, e, i) {
            t.restore();
        }
        get cmdID() {
            return j.ID;
        }
    }
    j.ID = "Restore";
    class K {
        static create(t, e, i) {
            var r = s.getItemByClass("RotateCmd", K);
            return r.angle = t, r.pivotX = e, r.pivotY = i, r;
        }
        recover() {
            s.recover("RotateCmd", this);
        }
        run(t, e, i) {
            t._rotate(this.angle, this.pivotX + e, this.pivotY + i);
        }
        get cmdID() {
            return K.ID;
        }
    }
    K.ID = "Rotate";
    class q {
        static create(t, e, i, r) {
            var a = s.getItemByClass("ScaleCmd", q);
            return a.scaleX = t, a.scaleY = e, a.pivotX = i, a.pivotY = r, a;
        }
        recover() {
            s.recover("ScaleCmd", this);
        }
        run(t, e, i) {
            t._scale(this.scaleX, this.scaleY, this.pivotX + e, this.pivotY + i);
        }
        get cmdID() {
            return q.ID;
        }
    }
    q.ID = "Scale";
    class Q {
        static create(t, e, i) {
            var r = s.getItemByClass("TransformCmd", Q);
            return r.matrix = t, r.pivotX = e, r.pivotY = i, r;
        }
        recover() {
            this.matrix = null, s.recover("TransformCmd", this);
        }
        run(t, e, i) {
            t._transform(this.matrix, this.pivotX + e, this.pivotY + i);
        }
        get cmdID() {
            return Q.ID;
        }
    }
    Q.ID = "Transform";
    class Z {
        static create(t, e) {
            var i = s.getItemByClass("TranslateCmd", Z);
            return i.tx = t, i.ty = e, i;
        }
        recover() {
            s.recover("TranslateCmd", this);
        }
        run(t, e, i) {
            t.translate(this.tx, this.ty);
        }
        get cmdID() {
            return Z.ID;
        }
    }
    Z.ID = "Translate";
    class $ {
        constructor() {
            this._controlPoints = [new f(), new f(), new f()], this._calFun = this.getPoint2;
        }
        _switchPoint(t, e) {
            var i = this._controlPoints.shift();
            i.setTo(t, e), this._controlPoints.push(i);
        }
        getPoint2(t, e) {
            var i = this._controlPoints[0],
                s = this._controlPoints[1],
                r = this._controlPoints[2],
                a = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * s.x + Math.pow(t, 2) * r.x,
                n = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * s.y + Math.pow(t, 2) * r.y;
            e.push(a, n);
        }
        getPoint3(t, e) {
            var i = this._controlPoints[0],
                s = this._controlPoints[1],
                r = this._controlPoints[2],
                a = this._controlPoints[3],
                n = Math.pow(1 - t, 3) * i.x + 3 * s.x * t * (1 - t) * (1 - t) + 3 * r.x * t * t * (1 - t) + a.x * Math.pow(t, 3),
                h = Math.pow(1 - t, 3) * i.y + 3 * s.y * t * (1 - t) * (1 - t) + 3 * r.y * t * t * (1 - t) + a.y * Math.pow(t, 3);
            e.push(n, h);
        }
        insertPoints(t, e) {
            var i, s;
            for (s = 1 / (t = t > 0 ? t : 5), i = 0; i <= 1; i += s) this._calFun(i, e);
        }
        getBezierPoints(t, e = 5, i = 2) {
            var s, r;
            if ((r = t.length) < 2 * (i + 1)) return [];
            var a = [];
            switch (i) {
                case 2:
                    this._calFun = this.getPoint2;
                    break;
                case 3:
                    this._calFun = this.getPoint3;
                    break;
                default:
                    return [];
            }
            for (; this._controlPoints.length <= i;) this._controlPoints.push(f.create());
            for (s = 0; s < 2 * i; s += 2) this._switchPoint(t[s], t[s + 1]);
            for (s = 2 * i; s < r; s += 2) this._switchPoint(t[s], t[s + 1]), s / 2 % i == 0 && this.insertPoints(e, a);
            return a;
        }
    }
    $.I = new $();
    class J {
        static multiply(t, e, i) {
            return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y);
        }
        static dis(t, e) {
            return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y);
        }
        static _getPoints(t, e = !1, i = null) {
            for (J._mPointList || (J._mPointList = []); J._mPointList.length < t;) J._mPointList.push(new f());
            return i || (i = []), i.length = 0, e ? J.getFrom(i, J._mPointList, t) : J.getFromR(i, J._mPointList, t), i;
        }
        static getFrom(t, e, i) {
            var s;
            for (s = 0; s < i; s++) t.push(e[s]);
            return t;
        }
        static getFromR(t, e, i) {
            var s;
            for (s = 0; s < i; s++) t.push(e.pop());
            return t;
        }
        static pListToPointList(t, e = !1) {
            var i, s = t.length / 2,
                r = J._getPoints(s, e, J._tempPointList);
            for (i = 0; i < s; i++) r[i].setTo(t[i + i], t[i + i + 1]);
            return r;
        }
        static pointListToPlist(t) {
            var e, i, s = t.length,
                r = J._temPList;
            for (r.length = 0, e = 0; e < s; e++) i = t[e], r.push(i.x, i.y);
            return r;
        }
        static scanPList(t) {
            return Y.copyArray(t, J.pointListToPlist(J.scan(J.pListToPointList(t, !0))));
        }
        static scan(t) {
            var e, i, s, r, a, n = 0,
                h = t.length,
                o = {};
            for ((r = J._temArr).length = 0, e = (h = t.length) - 1; e >= 0; e--)(a = (s = t[e]).x + "_" + s.y) in o || (o[a] = !0, r.push(s));
            for (h = r.length, Y.copyArray(t, r), e = 1; e < h; e++)(t[e].y < t[n].y || t[e].y == t[n].y && t[e].x < t[n].x) && (n = e);
            for (s = t[0], t[0] = t[n], t[n] = s, e = 1; e < h - 1; e++) {
                for (n = e, i = e + 1; i < h; i++)(J.multiply(t[i], t[n], t[0]) > 0 || 0 == J.multiply(t[i], t[n], t[0]) && J.dis(t[0], t[i]) < J.dis(t[0], t[n])) && (n = i);
                s = t[e], t[e] = t[n], t[n] = s;
            }
            if ((r = J._temArr).length = 0, t.length < 3) return Y.copyArray(r, t);
            for (r.push(t[0], t[1], t[2]), e = 3; e < h; e++) {
                for (; r.length >= 2 && J.multiply(t[e], r[r.length - 1], r[r.length - 2]) >= 0;) r.pop();
                t[e] && r.push(t[e]);
            }
            return r;
        }
    }
    J._tempPointList = [], J._temPList = [], J._temArr = [];
    class tt {
        constructor(t) {
            this.setValue(t);
        }
        static create(t) {
            if (t) {
                var e = t instanceof V ? t : V.create(t);
                return e._drawStyle || (e._drawStyle = new tt(t));
            }
            return tt.DEFAULT;
        }
        setValue(t) {
            this._color = t ? t instanceof V ? t : V.create(t) : V.create("#000000");
        }
        reset() {
            this._color = V.create("#000000");
        }
        toInt() {
            return this._color.numColor;
        }
        equal(t) {
            return "string" == typeof t ? this._color.strColor === t : t instanceof V && this._color.numColor === t.numColor;
        }
        toColorStr() {
            return this._color.strColor;
        }
    }
    tt.DEFAULT = new tt("#000000");
    class et {
        constructor() {
            this._lastOriX = 0, this._lastOriY = 0, this.paths = [], this._curPath = null;
        }
        beginPath(t) {
            this.paths.length = 1, this._curPath = this.paths[0] = new it(), this._curPath.convex = t;
        }
        closePath() {
            this._curPath.loop = !0;
        }
        newPath() {
            this._curPath = new it(), this.paths.push(this._curPath);
        }
        addPoint(t, e) {
            this._curPath.path.push(t, e);
        }
        push(t, e) {
            this._curPath ? this._curPath.path.length > 0 && (this._curPath = new it(), this.paths.push(this._curPath)) : (this._curPath = new it(), this.paths.push(this._curPath));
            var i = this._curPath;
            i.path = t.slice(), i.convex = e;
        }
        reset() {
            this.paths.length = 0;
        }
    }
    class it {
        constructor() {
            this.path = [], this.loop = !1, this.convex = !1;
        }
    }
    class st {
        constructor(t = st.TYPE_2D) {
            this.clipInfoID = -1, this._mesh = null, this._blendFn = null, this._id = 0, this._renderType = 0, this._parent = null, this._key = new k(), this._startIdx = 0, this._numEle = 0, this._ref = 1, this.shaderValue = null, this._renderType = t, this._id = ++st.ID;
        }
        static __init__() {
            var t = st.RENDERBASE = new st(-1);
            t.shaderValue = new U(0, 0), t.shaderValue.ALPHA = 1, t._ref = 4294967295;
        }
        getID() {
            return this._id;
        }
        getRenderType() {
            return this._renderType;
        }
        toString() {
            return "ibindex:" + this._startIdx + " num:" + this._numEle + " key=" + this._key;
        }
        renderSubmit() {
            return 1;
        }
        releaseRender() {}
    }
    st.TYPE_2D = 1e4, st.TYPE_CANVAS = 10003, st.TYPE_CMDSETRT = 10004, st.TYPE_CUSTOM = 10005, st.TYPE_BLURRT = 10006, st.TYPE_CMDDESTORYPRERT = 10007, st.TYPE_DISABLESTENCIL = 10008, st.TYPE_OTHERIBVB = 10009, st.TYPE_PRIMITIVE = 10010, st.TYPE_RT = 10011, st.TYPE_BLUR_RT = 10012, st.TYPE_TARGET = 10013, st.TYPE_CHANGE_VALUE = 10014, st.TYPE_SHAPE = 10015, st.TYPE_TEXTURE = 10016, st.TYPE_FILLTEXTURE = 10017, st.KEY_ONCE = -1, st.KEY_FILLRECT = 1, st.KEY_DRAWTEXTURE = 2, st.KEY_VG = 3, st.KEY_TRIANGLES = 4, st.ID = 1, st.preRender = null;
    class rt {
        constructor() {}
        static _createArray() {
            var t = [];
            return t._length = 0, t;
        }
        static _init() {
            var t = rt._namemap = {};
            return t[rt.TYPE_ALPHA] = "ALPHA", t[rt.TYPE_FILESTYLE] = "fillStyle", t[rt.TYPE_FONT] = "font", t[rt.TYPE_LINEWIDTH] = "lineWidth", t[rt.TYPE_STROKESTYLE] = "strokeStyle", t[rt.TYPE_ENABLEMERGE] = "_mergeID", t[rt.TYPE_MARK] = t[rt.TYPE_TRANSFORM] = t[rt.TYPE_TRANSLATE] = [], t[rt.TYPE_TEXTBASELINE] = "textBaseline", t[rt.TYPE_TEXTALIGN] = "textAlign", t[rt.TYPE_GLOBALCOMPOSITEOPERATION] = "_nBlendType", t[rt.TYPE_SHADER] = "shader", t[rt.TYPE_FILTERS] = "filters", t[rt.TYPE_COLORFILTER] = "_colorFiler", t;
        }
        isSaveMark() {
            return !1;
        }
        restore(t) {
            this._dataObj[this._valueName] = this._value, rt.POOL[rt.POOL._length++] = this, this._newSubmit && (t._curSubmit = st.RENDERBASE);
        }
        static save(t, e, i, s) {
            if ((t._saveMark._saveuse & e) !== e) {
                t._saveMark._saveuse |= e;
                var r = rt.POOL,
                    a = r._length > 0 ? r[--r._length] : new rt();
                a._value = i[a._valueName = rt._namemap[e]], a._dataObj = i, a._newSubmit = s;
                var n = t._save;
                n[n._length++] = a;
            }
        }
    }
    rt.TYPE_ALPHA = 1, rt.TYPE_FILESTYLE = 2, rt.TYPE_FONT = 8, rt.TYPE_LINEWIDTH = 256, rt.TYPE_STROKESTYLE = 512, rt.TYPE_MARK = 1024, rt.TYPE_TRANSFORM = 2048, rt.TYPE_TRANSLATE = 4096, rt.TYPE_ENABLEMERGE = 8192, rt.TYPE_TEXTBASELINE = 16384, rt.TYPE_TEXTALIGN = 32768, rt.TYPE_GLOBALCOMPOSITEOPERATION = 65536, rt.TYPE_CLIPRECT = 131072, rt.TYPE_CLIPRECT_STENCIL = 262144, rt.TYPE_IBVB = 524288, rt.TYPE_SHADER = 1048576, rt.TYPE_FILTERS = 2097152, rt.TYPE_FILTERS_TYPE = 4194304, rt.TYPE_COLORFILTER = 8388608, rt.POOL = rt._createArray(), rt._namemap = rt._init();
    class at {
        constructor() {
            this._globalClipMatrix = new p(), this._clipInfoID = -1, this._clipRect = new g(), this.incache = !1;
        }
        isSaveMark() {
            return !1;
        }
        restore(t) {
            this._globalClipMatrix.copyTo(t._globalClipMatrix), this._clipRect.clone(t._clipRect), t._clipInfoID = this._clipInfoID, at.POOL[at.POOL._length++] = this, t._clipInCache = this.incache;
        }
        static save(t) {
            if ((t._saveMark._saveuse & rt.TYPE_CLIPRECT) != rt.TYPE_CLIPRECT) {
                t._saveMark._saveuse |= rt.TYPE_CLIPRECT;
                var e = at.POOL,
                    i = e._length > 0 ? e[--e._length] : new at();
                t._globalClipMatrix.copyTo(i._globalClipMatrix), t._clipRect.clone(i._clipRect), i._clipInfoID = t._clipInfoID, i.incache = t._clipInCache;
                var s = t._save;
                s[s._length++] = i;
            }
        }
    }
    at.POOL = rt._createArray();
    class nt {
        constructor() {
            this._saveuse = 0;
        }
        isSaveMark() {
            return !0;
        }
        restore(t) {
            t._saveMark = this._preSaveMark, nt.POOL[nt.POOL._length++] = this;
        }
        static Create(t) {
            var e = nt.POOL,
                i = e._length > 0 ? e[--e._length] : new nt();
            return i._saveuse = 0, i._preSaveMark = t._saveMark, t._saveMark = i, i;
        }
    }
    nt.POOL = rt._createArray();
    class ht {
        constructor() {
            this._matrix = new p();
        }
        isSaveMark() {
            return !1;
        }
        restore(t) {
            t._curMat = this._savematrix, ht.POOL[ht.POOL._length++] = this;
        }
        static save(t) {
            var e = t._saveMark;
            if ((e._saveuse & rt.TYPE_TRANSFORM) !== rt.TYPE_TRANSFORM) {
                e._saveuse |= rt.TYPE_TRANSFORM;
                var i = ht.POOL,
                    s = i._length > 0 ? i[--i._length] : new ht();
                s._savematrix = t._curMat, t._curMat = t._curMat.copyTo(s._matrix);
                var r = t._save;
                r[r._length++] = s;
            }
        }
    }
    ht.POOL = rt._createArray();
    class ot {
        constructor() {
            this._mat = new p();
        }
        isSaveMark() {
            return !1;
        }
        restore(t) {
            this._mat.copyTo(t._curMat), ot.POOL[ot.POOL._length++] = this;
        }
        static save(t) {
            var e = ot.POOL,
                i = e._length > 0 ? e[--e._length] : new ot();
            t._curMat.copyTo(i._mat);
            var s = t._save;
            s[s._length++] = i;
        }
    }
    ot.POOL = rt._createArray();
    class lt {}
    lt.loopStTm = 0, lt.loopCount = 0;
    class _t {
        constructor() {
            this._byteLength = 0, this._glBuffer = m.instance.createBuffer();
        }
        get bufferUsage() {
            return this._bufferUsage;
        }
        _bindForVAO() {}
        bind() {
            return !1;
        }
        destroy() {
            this._glBuffer && (m.instance.deleteBuffer(this._glBuffer), this._glBuffer = null);
        }
    }
    class ct extends _t {
        constructor() {
            super(), this._maxsize = 0, this._upload = !0, this._uploadSize = 0, this._bufferSize = 0, this._u8Array = null;
        }
        static __int__(t) {}
        get bufferLength() {
            return this._buffer.byteLength;
        }
        set byteLength(t) {
            this.setByteLength(t);
        }
        setByteLength(t) {
            this._byteLength !== t && (t <= this._bufferSize || this._resizeBuffer(2 * t + 256, !0), this._byteLength = t);
        }
        needSize(t) {
            var e = this._byteLength;
            if (t) {
                var i = this._byteLength + t;
                i <= this._bufferSize || this._resizeBuffer(i << 1, !0), this._byteLength = i;
            }
            return e;
        }
        _bufferData() {
            this._maxsize = Math.max(this._maxsize, this._byteLength), lt.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, m.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), m.instance.bufferSubData(this._bufferType, 0, new Uint8Array(this._buffer, 0, this._byteLength));
        }
        _bufferSubData(t = 0, e = 0, i = 0) {
            if (this._maxsize = Math.max(this._maxsize, this._byteLength), lt.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, m.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), e || i) {
                var s = this._buffer.slice(e, i);
                m.instance.bufferSubData(this._bufferType, t, s);
            } else m.instance.bufferSubData(this._bufferType, t, this._buffer);
        }
        _checkArrayUse() {}
        _bind_uploadForVAO() {
            return !!this._upload && (this._upload = !1, this._bindForVAO(), this._bufferData(), !0);
        }
        _bind_upload() {
            return !!this._upload && (this._upload = !1, this.bind(), this._bufferData(), !0);
        }
        _bind_subUpload(t = 0, e = 0, i = 0) {
            return !!this._upload && (this._upload = !1, this.bind(), this._bufferSubData(t, e, i), !0);
        }
        _resizeBuffer(t, e) {
            var i = this._buffer;
            if (t <= i.byteLength) return this;
            var s = this._u8Array;
            if (e && i && i.byteLength > 0) {
                var r = new ArrayBuffer(t),
                    a = s && s.buffer == i ? s : new Uint8Array(i);
                (s = this._u8Array = new Uint8Array(r)).set(a, 0), i = this._buffer = r;
            } else i = this._buffer = new ArrayBuffer(t), this._u8Array = null;
            return this._checkArrayUse(), this._upload = !0, this._bufferSize = i.byteLength, this;
        }
        append(t) {
            var e, i;
            this._upload = !0, e = t.byteLength, t instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + e, !0), i = new Uint8Array(this._buffer, this._byteLength)) : t instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + e, !0), i = new Uint16Array(this._buffer, this._byteLength)) : t instanceof Float32Array && (this._resizeBuffer(this._byteLength + e, !0), i = new Float32Array(this._buffer, this._byteLength)), i.set(t, 0), this._byteLength += e, this._checkArrayUse();
        }
        appendU16Array(t, e) {
            this._resizeBuffer(this._byteLength + 2 * e, !0);
            var i = new Uint16Array(this._buffer, this._byteLength, e);
            if (6 == e) i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5];
            else if (e >= 100) i.set(new Uint16Array(t.buffer, 0, e));
            else
                for (var s = 0; s < e; s++) i[s] = t[s];
            this._byteLength += 2 * e, this._checkArrayUse();
        }
        appendEx(t, e) {
            var i;
            this._upload = !0, i = t.byteLength, this._resizeBuffer(this._byteLength + i, !0), new e(this._buffer, this._byteLength).set(t, 0), this._byteLength += i, this._checkArrayUse();
        }
        appendEx2(t, e, i, s = 1) {
            var r, a, n;
            for (this._upload = !0, r = i * s, this._resizeBuffer(this._byteLength + r, !0), a = new e(this._buffer, this._byteLength), n = 0; n < i; n++) a[n] = t[n];
            this._byteLength += r, this._checkArrayUse();
        }
        getBuffer() {
            return this._buffer;
        }
        setNeedUpload() {
            this._upload = !0;
        }
        getNeedUpload() {
            return this._upload;
        }
        upload() {
            var t = m.instance,
                e = this._bind_upload();
            return t.bindBuffer(this._bufferType, null), this._bufferType == t.ARRAY_BUFFER && (_t._bindedVertexBuffer = null), this._bufferType == t.ELEMENT_ARRAY_BUFFER && (_t._bindedIndexBuffer = null), w.activeShader = null, e;
        }
        subUpload(t = 0, e = 0, i = 0) {
            var s = m.instance,
                r = this._bind_subUpload();
            return s.bindBuffer(this._bufferType, null), this._bufferType == s.ARRAY_BUFFER && (_t._bindedVertexBuffer = null), this._bufferType == s.ELEMENT_ARRAY_BUFFER && (_t._bindedIndexBuffer = null), w.activeShader = null, r;
        }
        _disposeResource() {
            this._upload = !0, this._uploadSize = 0;
        }
        clear() {
            this._byteLength = 0, this._upload = !0;
        }
    }
    ct.FLOAT32 = 4, ct.SHORT = 2;
    class ut extends ct {
        constructor(t, e) {
            super(), this._vertexStride = t, this._bufferUsage = e, this._bufferType = m.instance.ARRAY_BUFFER, this._buffer = new ArrayBuffer(8), this._floatArray32 = new Float32Array(this._buffer), this._uint32Array = new Uint32Array(this._buffer);
        }
        get vertexStride() {
            return this._vertexStride;
        }
        getFloat32Array() {
            return this._floatArray32;
        }
        appendArray(t) {
            var e = this._byteLength >> 2;
            this.setByteLength(this._byteLength + 4 * t.length), this.getFloat32Array().set(t, e), this._upload = !0;
        }
        _checkArrayUse() {
            this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer)), this._uint32Array && (this._uint32Array = new Uint32Array(this._buffer));
        }
        deleteBuffer() {
            super._disposeResource();
        }
        _bindForVAO() {
            var t = m.instance;
            t.bindBuffer(t.ARRAY_BUFFER, this._glBuffer);
        }
        bind() {
            if (_t._bindedVertexBuffer !== this._glBuffer) {
                var t = m.instance;
                return t.bindBuffer(t.ARRAY_BUFFER, this._glBuffer), _t._bindedVertexBuffer = this._glBuffer, !0;
            }
            return !1;
        }
        destroy() {
            super.destroy(), this._byteLength = 0, this._upload = !0, this._buffer = null, this._floatArray32 = null;
        }
    }
    ut.create = function(t, e = 35048) {
        return new ut(t, e);
    };
    class dt extends ct {
        constructor(t = 35044) {
            super(), this._bufferUsage = t, this._bufferType = m.instance.ELEMENT_ARRAY_BUFFER, this._buffer = new ArrayBuffer(8);
        }
        _checkArrayUse() {
            this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer));
        }
        getUint16Array() {
            return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer));
        }
        _bindForVAO() {
            var t = m.instance;
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._glBuffer);
        }
        bind() {
            if (_t._bindedIndexBuffer !== this._glBuffer) {
                var t = m.instance;
                return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._glBuffer), _t._bindedIndexBuffer = this._glBuffer, !0;
            }
            return !1;
        }
        destory() {
            this._uint16Array = null, this._buffer = null;
        }
        disposeResource() {
            this._disposeResource();
        }
    }
    dt.create = function(t = 35044) {
        return new dt(t);
    };
    class pt {
        constructor() {
            this._nativeVertexArrayObject = m.layaGPUInstance.createVertexArray();
        }
        bind() {
            pt._curBindedBufferState !== this && (m.layaGPUInstance.bindVertexArray(this._nativeVertexArrayObject), pt._curBindedBufferState = this);
        }
        unBind() {
            if (pt._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
            m.layaGPUInstance.bindVertexArray(null), pt._curBindedBufferState = null;
        }
        destroy() {
            m.layaGPUInstance.deleteVertexArray(this._nativeVertexArrayObject);
        }
        bindForNative() {
            m.instance.bindVertexArray(this._nativeVertexArrayObject), pt._curBindedBufferState = this;
        }
        unBindForNative() {
            m.instance.bindVertexArray(null), pt._curBindedBufferState = null;
        }
    }
    class ft extends pt {
        constructor() {
            super();
        }
    }
    class gt {
        constructor(t, i, s) {
            this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._quadNum = 0, this.canReuse = !1, this._stride = t, this._vb = new ut(t, m.instance.DYNAMIC_DRAW), i ? this._vb._resizeBuffer(i, !1) : e.webGL2D_MeshAllocMaxMem && this._vb._resizeBuffer(65536 * t, !1), this._ib = new dt(), s && this._ib._resizeBuffer(s, !1);
        }
        cloneWithNewVB() {
            var t = new gt(this._stride, 0, 0);
            return t._ib = this._ib, t._quadNum = this._quadNum, t._attribInfo = this._attribInfo, t;
        }
        cloneWithNewVBIB() {
            var t = new gt(this._stride, 0, 0);
            return t._attribInfo = this._attribInfo, t;
        }
        getVBW() {
            return this._vb.setNeedUpload(), this._vb;
        }
        getVBR() {
            return this._vb;
        }
        getIBR() {
            return this._ib;
        }
        getIBW() {
            return this._ib.setNeedUpload(), this._ib;
        }
        createQuadIB(t) {
            this._quadNum = t, this._ib._resizeBuffer(6 * t * 2, !1), this._ib.byteLength = this._ib.bufferLength;
            for (var e = this._ib.getUint16Array(), i = 0, s = 0, r = 0; r < t; r++) e[i++] = s, e[i++] = s + 2, e[i++] = s + 1, e[i++] = s, e[i++] = s + 3, e[i++] = s + 2, s += 4;
            this._ib.setNeedUpload();
        }
        setAttributes(t) {
            if (this._attribInfo = t, this._attribInfo.length % 3 != 0) throw "Mesh2D setAttributes error!";
        }
        configVAO(t) {
            if (!this._applied) {
                this._applied = !0, this._vao || (this._vao = new ft()), this._vao.bind(), this._vb._bindForVAO(), this._ib.setNeedUpload(), this._ib._bind_uploadForVAO();
                for (var e = this._attribInfo.length / 3, i = 0, s = 0; s < e; s++) {
                    var r = this._attribInfo[i + 1],
                        a = this._attribInfo[i],
                        n = this._attribInfo[i + 2];
                    t.enableVertexAttribArray(s), t.vertexAttribPointer(s, r, a, !1, this._stride, n), i += 3;
                }
                this._vao.unBind();
            }
        }
        useMesh(t) {
            this._applied || this.configVAO(t), this._vao.bind(), this._vb.bind(), this._ib._bind_upload() || this._ib.bind(), this._vb._bind_upload() || this._vb.bind();
        }
        getEleNum() {
            return this._ib.getBuffer().byteLength / 2;
        }
        releaseMesh() {}
        destroy() {}
        clearVB() {
            this._vb.clear();
        }
    }
    gt._gvaoid = 0;
    class mt extends gt {
        constructor() {
            super(mt.const_stride, 4, 4), this.canReuse = !0, this.setAttributes(mt._fixattriInfo), mt._fixib ? (this._ib = mt._fixib, this._quadNum = mt._maxIB) : (this.createQuadIB(mt._maxIB), mt._fixib = this._ib);
        }
        static __int__() {
            mt._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20];
        }
        static getAMesh(t) {
            var e = null;
            return e = mt._POOL.length ? mt._POOL.pop() : new mt(), t && e._vb._resizeBuffer(65536 * mt.const_stride, !1), e;
        }
        releaseMesh() {
            this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, mt._POOL.push(this);
        }
        destroy() {
            this._vb.destroy(), this._vb.deleteBuffer();
        }
        addQuad(t, e, i, s) {
            var r = this._vb,
                a = r._byteLength >> 2;
            r.setByteLength(a + mt.const_stride << 2);
            var n = r._floatArray32 || r.getFloat32Array(),
                h = r._uint32Array,
                o = a,
                l = s ? 255 : 0;
            n[o++] = t[0], n[o++] = t[1], n[o++] = e[0], n[o++] = e[1], h[o++] = i, h[o++] = l, n[o++] = t[2], n[o++] = t[3], n[o++] = e[2], n[o++] = e[3], h[o++] = i, h[o++] = l, n[o++] = t[4], n[o++] = t[5], n[o++] = e[4], n[o++] = e[5], h[o++] = i, h[o++] = l, n[o++] = t[6], n[o++] = t[7], n[o++] = e[6], n[o++] = e[7], h[o++] = i, h[o++] = l, r._upload = !0;
        }
    }
    mt.const_stride = 24, mt._maxIB = 16384, mt._POOL = [];
    class vt extends gt {
        constructor() {
            super(vt.const_stride, 4, 4), this.canReuse = !0, this.setAttributes(vt._fixattriInfo);
        }
        static __init__() {
            vt._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20];
        }
        static getAMesh(t) {
            var e;
            return e = vt._POOL.length ? vt._POOL.pop() : new vt(), t && e._vb._resizeBuffer(65536 * vt.const_stride, !1), e;
        }
        addData(t, e, i, s, r) {
            var a = this._vb,
                n = this._ib,
                h = t.length >> 1,
                o = a.needSize(h * vt.const_stride) >> 2,
                l = a._floatArray32 || a.getFloat32Array(),
                _ = a._uint32Array,
                c = 0,
                u = s.a,
                d = s.b,
                p = s.c,
                f = s.d,
                g = s.tx,
                m = s.ty,
                v = 0;
            for (v = 0; v < h; v++) {
                var T = t[c],
                    x = t[c + 1];
                l[o] = T * u + x * p + g, l[o + 1] = T * d + x * f + m, l[o + 2] = e[c], l[o + 3] = e[c + 1], _[o + 4] = r, _[o + 5] = 255, o += 6, c += 2;
            }
            a.setNeedUpload();
            var y = this.vertNum,
                E = i.length,
                A = n.needSize(i.byteLength),
                C = n.getUint16Array(),
                b = A >> 1;
            if (y > 0) {
                var R = b + E,
                    w = 0;
                for (v = b; v < R; v++, w++) C[v] = i[w] + y;
            } else C.set(i, b);
            n.setNeedUpload(), this.vertNum += h, this.indexNum += i.length;
        }
        releaseMesh() {
            this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, vt._POOL.push(this);
        }
        destroy() {
            this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
        }
    }
    vt.const_stride = 24, vt._POOL = [];
    class Tt extends gt {
        constructor() {
            super(Tt.const_stride, 4, 4), this.canReuse = !0, this.setAttributes(Tt._fixattriInfo);
        }
        static __init__() {
            Tt._fixattriInfo = [5126, 2, 0, 5121, 4, 8];
        }
        static getAMesh(t) {
            var e;
            return e = Tt._POOL.length ? Tt._POOL.pop() : new Tt(), t && e._vb._resizeBuffer(65536 * Tt.const_stride, !1), e;
        }
        addVertAndIBToMesh(t, e, i, s) {
            for (var r = this._vb.needSize(e.length / 2 * Tt.const_stride) >> 2, a = this._vb._floatArray32 || this._vb.getFloat32Array(), n = this._vb._uint32Array, h = 0, o = e.length / 2, l = 0; l < o; l++) a[r++] = e[h], a[r++] = e[h + 1], h += 2, n[r++] = i;
            this._vb.setNeedUpload(), this._ib.append(new Uint16Array(s)), this._ib.setNeedUpload(), this.vertNum += o, this.indexNum += s.length;
        }
        releaseMesh() {
            this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, Tt._POOL.push(this);
        }
        destroy() {
            this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
        }
    }
    Tt.const_stride = 12, Tt._POOL = [];
    class xt {
        constructor(t, e) {
            this.submitStartPos = 0, this.submitEndPos = 0, this.context = null, this.touches = [], this.submits = [], this.sprite = null, this.meshlist = [], this.cachedClipInfo = new p(), this.oldTx = 0, this.oldTy = 0, this.invMat = new p(), this.context = t, this.sprite = e, t._globalClipMatrix.copyTo(this.cachedClipInfo);
        }
        startRec() {
            this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), this.context._charSubmitCache.enable(!0, this.context)), this.context._incache = !0, this.touches.length = 0, this.context.touches = this.touches, this.context._globalClipMatrix.copyTo(this.cachedClipInfo), this.submits.length = 0, this.submitStartPos = this.context._submits._length;
            for (var t = 0, e = this.meshlist.length; t < e; t++) {
                var i = this.meshlist[t];
                i.canReuse ? i.releaseMesh() : i.destroy();
            }
            this.meshlist.length = 0, this._mesh = mt.getAMesh(!1), this._pathMesh = Tt.getAMesh(!1), this._triangleMesh = vt.getAMesh(!1), this.meshlist.push(this._mesh), this.meshlist.push(this._pathMesh), this.meshlist.push(this._triangleMesh), this.context._curSubmit = st.RENDERBASE, this._oldMesh = this.context._mesh, this._oldPathMesh = this.context._pathMesh, this._oldTriMesh = this.context._triangleMesh, this._oldMeshList = this.context.meshlist, this.context._mesh = this._mesh, this.context._pathMesh = this._pathMesh, this.context._triangleMesh = this._triangleMesh, this.context.meshlist = this.meshlist, this.oldTx = this.context._curMat.tx, this.oldTy = this.context._curMat.ty, this.context._curMat.tx = 0, this.context._curMat.ty = 0, this.context._curMat.copyTo(this.invMat), this.invMat.invert();
        }
        endRec() {
            this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), this.context._charSubmitCache.enable(!0, this.context));
            var t = this.context._submits;
            this.submitEndPos = t._length;
            for (var e = this.submitEndPos - this.submitStartPos, i = 0; i < e; i++) this.submits.push(t[this.submitStartPos + i]);
            t._length -= e, this.context._mesh = this._oldMesh, this.context._pathMesh = this._oldPathMesh, this.context._triangleMesh = this._oldTriMesh, this.context.meshlist = this._oldMeshList, this.context._curSubmit = st.RENDERBASE, this.context._curMat.tx = this.oldTx, this.context._curMat.ty = this.oldTy, this.context.touches = null, this.context._incache = !1;
        }
        isCacheValid() {
            var t = this.context._globalClipMatrix;
            return t.a == this.cachedClipInfo.a && t.b == this.cachedClipInfo.b && t.c == this.cachedClipInfo.c && t.d == this.cachedClipInfo.d && t.tx == this.cachedClipInfo.tx && t.ty == this.cachedClipInfo.ty;
        }
        flushsubmit() {
            var t = st.RENDERBASE;
            this.submits.forEach(function(e) {
                e != st.RENDERBASE && (st.preRender = t, t = e, e.renderSubmit());
            });
        }
        releaseMem() {}
    }
    xt.matI = new p();
    var yt = "/*\r\n\ttexture和fillrect使用的。\r\n*/\r\nattribute vec4 posuv;\r\nattribute vec4 attribColor;\r\nattribute vec4 attribFlags;\r\n//attribute vec4 clipDir;\r\n//attribute vec2 clipRect;\r\nuniform vec4 clipMatDir;\r\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\r\nvarying vec2 cliped;\r\nuniform vec2 size;\r\nuniform vec2 clipOff;\t\t\t// 使用要把clip偏移。cacheas normal用. 只用了[0]\r\n#ifdef WORLDMAT\r\n\tuniform mat4 mmat;\r\n#endif\r\n#ifdef MVP3D\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\nvarying vec4 v_texcoordAlpha;\r\nvarying vec4 v_color;\r\nvarying float v_useTex;\r\n\r\nvoid main() {\r\n\r\n\tvec4 pos = vec4(posuv.xy,0.,1.);\r\n#ifdef WORLDMAT\r\n\tpos=mmat*pos;\r\n#endif\r\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\r\n#ifdef MVP3D\r\n\tgl_Position=u_MvpMatrix*pos1;\r\n#else\r\n\tgl_Position=pos1;\r\n#endif\r\n\tv_texcoordAlpha.xy = posuv.zw;\r\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\r\n\tv_color = attribColor/255.0;\r\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\r\n\t\r\n\tv_useTex = attribFlags.r/255.0;\r\n\tfloat clipw = length(clipMatDir.xy);\r\n\tfloat cliph = length(clipMatDir.zw);\r\n\t\r\n\tvec2 clpos = clipMatPos.xy;\r\n\t#ifdef WORLDMAT\r\n\t\t// 如果有mmat，需要修改clipMatPos,因为 这是cacheas normal （如果不是就错了）， clipMatPos被去掉了偏移\r\n\t\tif(clipOff[0]>0.0){\r\n\t\t\tclpos.x+=mmat[3].x;\t//tx\t最简单处理\r\n\t\t\tclpos.y+=mmat[3].y;\t//ty\r\n\t\t}\r\n\t#endif\r\n\tvec2 clippos = pos.xy - clpos;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\r\n\tif(clipw>20000. && cliph>20000.)\r\n\t\tcliped = vec2(0.5,0.5);\r\n\telse {\r\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\r\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\r\n\t}\r\n\r\n}",
        Et = "/*\r\n\ttexture和fillrect使用的。\r\n*/\r\n#ifdef FSHIGHPRECISION\r\nprecision highp float;\r\n#else\r\nprecision mediump float;\r\n#endif\r\n\r\nvarying vec4 v_texcoordAlpha;\r\nvarying vec4 v_color;\r\nvarying float v_useTex;\r\nuniform sampler2D texture;\r\nvarying vec2 cliped;\r\n\r\n#ifdef BLUR_FILTER\r\nuniform vec4 strength_sig2_2sig2_gauss1;\r\nuniform vec2 blurInfo;\r\n\r\n#define PI 3.141593\r\n\r\nfloat getGaussian(float x, float y){\r\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\r\n}\r\n\r\nvec4 blur(){\r\n    const float blurw = 9.0;\r\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\r\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \r\n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\r\n    vec2 ctexcoord = startpos;\r\n    vec2 step = 1.0/blurInfo;  //每个像素      \r\n    \r\n    for(float y = 0.0;y<=blurw; ++y){\r\n        ctexcoord.x=startpos.x;\r\n        for(float x = 0.0;x<=blurw; ++x){\r\n            //TODO 纹理坐标的固定偏移应该在vs中处理\r\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\r\n            ctexcoord.x+=step.x;\r\n        }\r\n        ctexcoord.y+=step.y;\r\n    }\r\n    return vec4Color;\r\n}\r\n#endif\r\n\r\n#ifdef COLOR_FILTER\r\nuniform vec4 colorAlpha;\r\nuniform mat4 colorMat;\r\n#endif\r\n\r\n#ifdef GLOW_FILTER\r\nuniform vec4 u_color;\r\nuniform vec4 u_blurInfo1;\r\nuniform vec4 u_blurInfo2;\r\n#endif\r\n\r\n#ifdef COLOR_ADD\r\nuniform vec4 colorAdd;\r\n#endif\r\n\r\n#ifdef FILLTEXTURE\t\r\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\r\n#endif\r\nvoid main() {\r\n\tif(cliped.x<0.) discard;\r\n\tif(cliped.x>1.) discard;\r\n\tif(cliped.y<0.) discard;\r\n\tif(cliped.y>1.) discard;\r\n\t\r\n#ifdef FILLTEXTURE\t\r\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\r\n#else\r\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\r\n#endif\r\n\r\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\r\n   color.a*=v_color.w;\r\n   //color.rgb*=v_color.w;\r\n   color.rgb*=v_color.rgb;\r\n   gl_FragColor=color;\r\n   \r\n   #ifdef COLOR_ADD\r\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\r\n\tgl_FragColor.xyz *= colorAdd.a;\r\n   #endif\r\n   \r\n   #ifdef BLUR_FILTER\r\n\tgl_FragColor =   blur();\r\n\tgl_FragColor.w*=v_color.w;   \r\n   #endif\r\n   \r\n   #ifdef COLOR_FILTER\r\n\tmat4 alphaMat =colorMat;\r\n\r\n\talphaMat[0][3] *= gl_FragColor.a;\r\n\talphaMat[1][3] *= gl_FragColor.a;\r\n\talphaMat[2][3] *= gl_FragColor.a;\r\n\r\n\tgl_FragColor = gl_FragColor * alphaMat;\r\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\r\n   #endif\r\n   \r\n   #ifdef GLOW_FILTER\r\n\tconst float c_IterationTime = 10.0;\r\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\r\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\r\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\r\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\r\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\r\n\tvec2 vec2Off = vec2(0.0,0.0);\r\n\tfloat floatOff = c_IterationTime/2.0;\r\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\r\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\r\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\r\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\r\n\t\t}\r\n\t}\r\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\r\n\tgl_FragColor.rgb *= gl_FragColor.a;   \r\n   #endif\r\n   \r\n}",
        At = "attribute vec4 position;\r\nattribute vec4 attribColor;\r\n//attribute vec4 clipDir;\r\n//attribute vec2 clipRect;\r\nuniform vec4 clipMatDir;\r\nuniform vec2 clipMatPos;\r\n#ifdef WORLDMAT\r\n\tuniform mat4 mmat;\r\n#endif\r\nuniform mat4 u_mmat2;\r\n//uniform vec2 u_pos;\r\nuniform vec2 size;\r\nvarying vec4 color;\r\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\r\n//vec4 clip=vec4(100.,30.,300.,600.);\r\nvarying vec2 cliped;\r\nvoid main(){\r\n\t\r\n#ifdef WORLDMAT\r\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\r\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\r\n#else\r\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\r\n#endif\t\r\n\tfloat clipw = length(clipMatDir.xy);\r\n\tfloat cliph = length(clipMatDir.zw);\r\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\r\n\tif(clipw>20000. && cliph>20000.)\r\n\t\tcliped = vec2(0.5,0.5);\r\n\telse {\r\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\r\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\r\n\t}\r\n  //pos2d.x = dot(clippos,dirx);\r\n  color=attribColor/255.;\r\n}",
        Ct = "precision mediump float;\r\n//precision mediump float;\r\nvarying vec4 color;\r\n//uniform float alpha;\r\nvarying vec2 cliped;\r\nvoid main(){\r\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\r\n\t//a.a*=alpha;\r\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\r\n\tgl_FragColor.rgb*=color.a;\r\n\tif(cliped.x<0.) discard;\r\n\tif(cliped.x>1.) discard;\r\n\tif(cliped.y<0.) discard;\r\n\tif(cliped.y>1.) discard;\r\n}",
        bt = "attribute vec2 position;\r\nattribute vec2 texcoord;\r\nattribute vec4 color;\r\nuniform vec2 size;\r\nuniform float offsetX;\r\nuniform float offsetY;\r\nuniform mat4 mmat;\r\nuniform mat4 u_mmat2;\r\nvarying vec2 v_texcoord;\r\nvarying vec4 v_color;\r\nvoid main() {\r\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\r\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\r\n  v_color = color;\r\n  v_color.rgb *= v_color.a;\r\n  v_texcoord = texcoord;  \r\n}",
        Rt = "precision mediump float;\r\nvarying vec2 v_texcoord;\r\nvarying vec4 v_color;\r\nuniform sampler2D texture;\r\nuniform float alpha;\r\nvoid main() {\r\n\tvec4 t_color = texture2D(texture, v_texcoord);\r\n\tgl_FragColor = t_color.rgba * v_color;\r\n\tgl_FragColor *= alpha;\r\n}";
    class wt {
        constructor() {
            this.ALPHA = 1, this.defines = new L(), this.shaderType = 0, this.fillStyle = tt.DEFAULT, this.strokeStyle = tt.DEFAULT;
        }
        destroy() {
            this.defines = null, this.filters = null;
        }
        static __init__() {
            F.preCompile2D(0, L.TEXTURE2D, yt, Et, null), F.preCompile2D(0, L.PRIMITIVE, At, Ct, null), F.preCompile2D(0, L.SKINMESH, bt, Rt, null);
        }
    }
    class Mt {
        constructor() {
            var t = m.instance;
            this.ib = dt.create(t.DYNAMIC_DRAW), this.vb = ut.create(8);
        }
        static getInstance() {
            return Mt.instance = Mt.instance || new Mt();
        }
        addSkinMesh(t) {
            t.getData2(this.vb, this.ib, this.vb._byteLength / 32);
        }
        reset() {
            this.vb.clear(), this.ib.clear();
        }
    }
    class St {
        static createLine2(t, e, i, s, r, a) {
            if (t.length < 4) return null;
            var n = St.tempData.length > t.length + 2 ? St.tempData : new Array(t.length + 2);
            n[0] = t[0], n[1] = t[1];
            var h = 2,
                o = 0,
                l = t.length;
            for (o = 2; o < l; o += 2) Math.abs(t[o] - t[o - 2]) + Math.abs(t[o + 1] - t[o - 1]) > .01 && (n[h++] = t[o], n[h++] = t[o + 1]);
            a && Math.abs(t[0] - n[h - 2]) + Math.abs(t[1] - n[h - 1]) > .01 && (n[h++] = t[0], n[h++] = t[1]);
            var _ = r;
            l = h / 2;
            var c, u, d, p, f, g, m, v, T, x, y, E, A, C, b, R, w, M, S, I, P = i / 2;
            for (d = n[0], p = n[1], x = d - (f = n[2]), T = (T = -(p - (g = n[3]))) / (I = Math.sqrt(T * T + x * x)) * P, x = x / I * P, _.push(d - T, p - x, d + T, p + x), o = 1; o < l - 1; o++) d = n[2 * (o - 1)], p = n[2 * (o - 1) + 1], f = n[2 * o], g = n[2 * o + 1], m = n[2 * (o + 1)], v = n[2 * (o + 1) + 1], x = d - f, E = f - m, b = (-(T = (T = -(p - g)) / (I = Math.sqrt(T * T + x * x)) * P) + d) * (-(x = x / I * P) + g) - (-T + f) * (-x + p), M = (-(y = (y = -(g - v)) / (I = Math.sqrt(y * y + E * E)) * P) + m) * (-(E = E / I * P) + g) - (-y + f) * (-E + v), S = (A = -x + p - (-x + g)) * (w = -y + f - (-y + m)) - (R = -E + v - (-E + g)) * (C = -T + f - (-T + d)), Math.abs(S) < .1 ? (S += 10.1, _.push(f - T, g - x, f + T, g + x)) : (c = (C * M - w * b) / S, u = (R * b - A * M) / S, _.push(c, u, f - (c - f), g - (u - g)));
            for (d = n[h - 4], p = n[h - 3], x = d - (f = n[h - 2]), T = (T = -(p - (g = n[h - 1]))) / (I = Math.sqrt(T * T + x * x)) * P, x = x / I * P, _.push(f - T, g - x, f + T, g + x), o = 1; o < l; o++) e.push(s + 2 * (o - 1), s + 2 * (o - 1) + 1, s + 2 * o + 1, s + 2 * o + 1, s + 2 * o, s + 2 * (o - 1));
            return _;
        }
        static createLineTriangle(t, e, i, s, r, a, n) {
            var h = t.slice(),
                o = h.length,
                l = h[0],
                _ = h[1],
                c = h[2],
                u = (h[2], 0),
                d = 0,
                p = 0,
                f = 0,
                g = o / 2;
            if (!(g <= 1) && 2 != g) {
                for (var m = new Array(4 * g), v = 0, T = 0, x = 0; x < g - 1; x++) l = h[T++], _ = h[T++], c = h[T++], f = h[T++] - _, 0 != (p = c - l) && 0 != f && (u = Math.sqrt(p * p + f * f)) > .001 && (m[d = 4 * v] = l, m[d + 1] = _, m[d + 2] = p / u, m[d + 3] = f / u, v++);
                for (s ? (l = h[o - 2], _ = h[o - 1], c = h[0], f = h[1] - _, 0 != (p = c - l) && 0 != f && (u = Math.sqrt(p * p + f * f)) > .001 && (m[d = 4 * v] = l, m[d + 1] = _, m[d + 2] = p / u, m[d + 3] = f / u, v++)) : (m[d = 4 * v] = l, m[d + 1] = _, m[d + 2] = p / u, m[d + 3] = f / u, v++), T = 0, x = 0; x < g; x++) {
                    l = h[T], _ = h[T + 1], c = h[T + 2], h[T + 3];
                    h[T + 4], h[T + 5];
                }
            }
        }
    }
    St.tempData = new Array(256);
    class It {
        constructor(t, e, i) {
            this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
        }
    }
    class Pt {
        static earcut(t, e, i) {
            i = i || 2;
            var s, r, a, n, h, o, l, _ = e && e.length,
                c = _ ? e[0] * i : t.length,
                u = Pt.linkedList(t, 0, c, i, !0),
                d = [];
            if (!u) return d;
            if (_ && (u = Pt.eliminateHoles(t, e, u, i)), t.length > 80 * i) {
                s = a = t[0], r = n = t[1];
                for (var p = i; p < c; p += i)(h = t[p]) < s && (s = h), (o = t[p + 1]) < r && (r = o), h > a && (a = h), o > n && (n = o);
                l = 0 !== (l = Math.max(a - s, n - r)) ? 1 / l : 0;
            }
            return Pt.earcutLinked(u, d, i, s, r, l), d;
        }
        static linkedList(t, e, i, s, r) {
            var a, n;
            if (r === Pt.signedArea(t, e, i, s) > 0)
                for (a = e; a < i; a += s) n = Pt.insertNode(a, t[a], t[a + 1], n);
            else
                for (a = i - s; a >= e; a -= s) n = Pt.insertNode(a, t[a], t[a + 1], n);
            return n && Pt.equals(n, n.next) && (Pt.removeNode(n), n = n.next), n;
        }
        static filterPoints(t, e) {
            if (!t) return t;
            e || (e = t);
            var i, s = t;
            do {
                if (i = !1, s.steiner || !Pt.equals(s, s.next) && 0 !== Pt.area(s.prev, s, s.next)) s = s.next;
                else {
                    if (Pt.removeNode(s), (s = e = s.prev) === s.next) break;
                    i = !0;
                }
            } while (i || s !== e);
            return e;
        }
        static earcutLinked(t, e, i, s, r, a, n = null) {
            if (t) {
                !n && a && Pt.indexCurve(t, s, r, a);
                for (var h, o, l = t; t.prev !== t.next;)
                    if (h = t.prev, o = t.next, a ? Pt.isEarHashed(t, s, r, a) : Pt.isEar(t)) e.push(h.i / i), e.push(t.i / i), e.push(o.i / i), Pt.removeNode(t), t = o.next, l = o.next;
                    else if ((t = o) === l) {
                    n ? 1 === n ? (t = Pt.cureLocalIntersections(t, e, i), Pt.earcutLinked(t, e, i, s, r, a, 2)) : 2 === n && Pt.splitEarcut(t, e, i, s, r, a) : Pt.earcutLinked(Pt.filterPoints(t, null), e, i, s, r, a, 1);
                    break;
                }
            }
        }
        static isEar(t) {
            var e = t.prev,
                i = t,
                s = t.next;
            if (Pt.area(e, i, s) >= 0) return !1;
            for (var r = t.next.next; r !== t.prev;) {
                if (Pt.pointInTriangle(e.x, e.y, i.x, i.y, s.x, s.y, r.x, r.y) && Pt.area(r.prev, r, r.next) >= 0) return !1;
                r = r.next;
            }
            return !0;
        }
        static isEarHashed(t, e, i, s) {
            var r = t.prev,
                a = t,
                n = t.next;
            if (Pt.area(r, a, n) >= 0) return !1;
            for (var h = r.x < a.x ? r.x < n.x ? r.x : n.x : a.x < n.x ? a.x : n.x, o = r.y < a.y ? r.y < n.y ? r.y : n.y : a.y < n.y ? a.y : n.y, l = r.x > a.x ? r.x > n.x ? r.x : n.x : a.x > n.x ? a.x : n.x, _ = r.y > a.y ? r.y > n.y ? r.y : n.y : a.y > n.y ? a.y : n.y, c = Pt.zOrder(h, o, e, i, s), u = Pt.zOrder(l, _, e, i, s), d = t.nextZ; d && d.z <= u;) {
                if (d !== t.prev && d !== t.next && Pt.pointInTriangle(r.x, r.y, a.x, a.y, n.x, n.y, d.x, d.y) && Pt.area(d.prev, d, d.next) >= 0) return !1;
                d = d.nextZ;
            }
            for (d = t.prevZ; d && d.z >= c;) {
                if (d !== t.prev && d !== t.next && Pt.pointInTriangle(r.x, r.y, a.x, a.y, n.x, n.y, d.x, d.y) && Pt.area(d.prev, d, d.next) >= 0) return !1;
                d = d.prevZ;
            }
            return !0;
        }
        static cureLocalIntersections(t, e, i) {
            var s = t;
            do {
                var r = s.prev,
                    a = s.next.next;
                !Pt.equals(r, a) && Pt.intersects(r, s, s.next, a) && Pt.locallyInside(r, a) && Pt.locallyInside(a, r) && (e.push(r.i / i), e.push(s.i / i), e.push(a.i / i), Pt.removeNode(s), Pt.removeNode(s.next), s = t = a), s = s.next;
            } while (s !== t);
            return s;
        }
        static splitEarcut(t, e, i, s, r, a) {
            var n = t;
            do {
                for (var h = n.next.next; h !== n.prev;) {
                    if (n.i !== h.i && Pt.isValidDiagonal(n, h)) {
                        var o = Pt.splitPolygon(n, h);
                        return n = Pt.filterPoints(n, n.next), o = Pt.filterPoints(o, o.next), Pt.earcutLinked(n, e, i, s, r, a), void Pt.earcutLinked(o, e, i, s, r, a);
                    }
                    h = h.next;
                }
                n = n.next;
            } while (n !== t);
        }
        static eliminateHoles(t, e, i, s) {
            var r, a, n, h, o, l = [];
            for (r = 0, a = e.length; r < a; r++) n = e[r] * s, h = r < a - 1 ? e[r + 1] * s : t.length, (o = Pt.linkedList(t, n, h, s, !1)) === o.next && (o.steiner = !0), l.push(Pt.getLeftmost(o));
            for (l.sort(Pt.compareX), r = 0; r < l.length; r++) Pt.eliminateHole(l[r], i), i = Pt.filterPoints(i, i.next);
            return i;
        }
        static compareX(t, e) {
            return t.x - e.x;
        }
        static eliminateHole(t, e) {
            if (e = Pt.findHoleBridge(t, e)) {
                var i = Pt.splitPolygon(e, t);
                Pt.filterPoints(i, i.next);
            }
        }
        static findHoleBridge(t, e) {
            var i, s = e,
                r = t.x,
                a = t.y,
                n = -1 / 0;
            do {
                if (a <= s.y && a >= s.next.y && s.next.y !== s.y) {
                    var h = s.x + (a - s.y) * (s.next.x - s.x) / (s.next.y - s.y);
                    if (h <= r && h > n) {
                        if (n = h, h === r) {
                            if (a === s.y) return s;
                            if (a === s.next.y) return s.next;
                        }
                        i = s.x < s.next.x ? s : s.next;
                    }
                }
                s = s.next;
            } while (s !== e);
            if (!i) return null;
            if (r === n) return i.prev;
            var o, l = i,
                _ = i.x,
                c = i.y,
                u = 1 / 0;
            for (s = i.next; s !== l;) r >= s.x && s.x >= _ && r !== s.x && Pt.pointInTriangle(a < c ? r : n, a, _, c, a < c ? n : r, a, s.x, s.y) && ((o = Math.abs(a - s.y) / (r - s.x)) < u || o === u && s.x > i.x) && Pt.locallyInside(s, t) && (i = s, u = o), s = s.next;
            return i;
        }
        static indexCurve(t, e, i, s) {
            var r = t;
            do {
                null === r.z && (r.z = Pt.zOrder(r.x, r.y, e, i, s)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
            } while (r !== t);
            r.prevZ.nextZ = null, r.prevZ = null, Pt.sortLinked(r);
        }
        static sortLinked(t) {
            var e, i, s, r, a, n, h, o, l = 1;
            do {
                for (i = t, t = null, a = null, n = 0; i;) {
                    for (n++, s = i, h = 0, e = 0; e < l && (h++, s = s.nextZ); e++);
                    for (o = l; h > 0 || o > 0 && s;) 0 !== h && (0 === o || !s || i.z <= s.z) ? (r = i, i = i.nextZ, h--) : (r = s, s = s.nextZ, o--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                    i = s;
                }
                a.nextZ = null, l *= 2;
            } while (n > 1);
            return t;
        }
        static zOrder(t, e, i, s, r) {
            return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - s) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
        }
        static getLeftmost(t) {
            var e = t,
                i = t;
            do {
                e.x < i.x && (i = e), e = e.next;
            } while (e !== t);
            return i;
        }
        static pointInTriangle(t, e, i, s, r, a, n, h) {
            return (r - n) * (e - h) - (t - n) * (a - h) >= 0 && (t - n) * (s - h) - (i - n) * (e - h) >= 0 && (i - n) * (a - h) - (r - n) * (s - h) >= 0;
        }
        static isValidDiagonal(t, e) {
            return t.next.i !== e.i && t.prev.i !== e.i && !Pt.intersectsPolygon(t, e) && Pt.locallyInside(t, e) && Pt.locallyInside(e, t) && Pt.middleInside(t, e);
        }
        static area(t, e, i) {
            return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
        }
        static equals(t, e) {
            return t.x === e.x && t.y === e.y;
        }
        static intersects(t, e, i, s) {
            return !!(Pt.equals(t, e) && Pt.equals(i, s) || Pt.equals(t, s) && Pt.equals(i, e)) || Pt.area(t, e, i) > 0 != Pt.area(t, e, s) > 0 && Pt.area(i, s, t) > 0 != Pt.area(i, s, e) > 0;
        }
        static intersectsPolygon(t, e) {
            var i = t;
            do {
                if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && Pt.intersects(i, i.next, t, e)) return !0;
                i = i.next;
            } while (i !== t);
            return !1;
        }
        static locallyInside(t, e) {
            return Pt.area(t.prev, t, t.next) < 0 ? Pt.area(t, e, t.next) >= 0 && Pt.area(t, t.prev, e) >= 0 : Pt.area(t, e, t.prev) < 0 || Pt.area(t, t.next, e) < 0;
        }
        static middleInside(t, e) {
            var i = t,
                s = !1,
                r = (t.x + e.x) / 2,
                a = (t.y + e.y) / 2;
            do {
                i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (s = !s), i = i.next;
            } while (i !== t);
            return s;
        }
        static splitPolygon(t, e) {
            var i = new It(t.i, t.x, t.y),
                s = new It(e.i, e.x, e.y),
                r = t.next,
                a = e.prev;
            return t.next = e, e.prev = t, i.next = r, r.prev = i, s.next = i, i.prev = s, a.next = s, s.prev = a, s;
        }
        static insertNode(t, e, i, s) {
            var r = new It(t, e, i);
            return s ? (r.next = s.next, r.prev = s, s.next.prev = r, s.next = r) : (r.prev = r, r.next = r), r;
        }
        static removeNode(t) {
            t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
        }
        static signedArea(t, e, i, s) {
            for (var r = 0, a = e, n = i - s; a < i; a += s) r += (t[n] - t[a]) * (t[a + 1] + t[n + 1]), n = a;
            return r;
        }
    }
    class Dt {}
    Dt.BYTES_PE = 4, Dt.BYTES_PIDX = 2, Dt.defaultMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], Dt.defaultMinusYMatrix4 = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], Dt.uniformMatrix3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], Dt._TMPARRAY = [], Dt._OFFSETX = 0, Dt._OFFSETY = 0;
    class Lt extends st {
        constructor(t = st.TYPE_2D) {
            super(t);
        }
        renderSubmit() {
            if (0 === this._numEle || !this._mesh || 0 == this._numEle) return 1;
            var t = this.shaderValue.textureHost;
            if (t) {
                var e = t._getSource();
                if (!e) return 1;
                this.shaderValue.texture = e;
            }
            var i = C.mainContext;
            return this._mesh.useMesh(i), this.shaderValue.upload(), P.activeBlendFunction !== this._blendFn && (C.setBlend(i, !0), this._blendFn(i), P.activeBlendFunction = this._blendFn), i.drawElements(i.TRIANGLES, this._numEle, i.UNSIGNED_SHORT, this._startIdx), O.renderBatches++, O.trianglesFaces += this._numEle / 3, 1;
        }
        releaseRender() {
            st.RENDERBASE != this && --this._ref < 1 && (Lt.POOL[Lt._poolSize++] = this, this.shaderValue.release(), this.shaderValue = null, this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null));
        }
        static create(t, e, i) {
            var s = Lt._poolSize ? Lt.POOL[--Lt._poolSize] : new Lt();
            s._ref = 1, s._mesh = e, s._key.clear(), s._startIdx = e.indexNum * Dt.BYTES_PIDX, s._numEle = 0;
            var r = t._nBlendType;
            s._blendFn = t._targets ? P.targetFns[r] : P.fns[r], s.shaderValue = i, s.shaderValue.setValue(t._shader2D);
            var a = t._shader2D.filters;
            return a && s.shaderValue.setFilters(a), s;
        }
        static createShape(t, e, i, s) {
            var r = Lt._poolSize ? Lt.POOL[--Lt._poolSize] : new Lt();
            r._mesh = e, r._numEle = i, r._startIdx = 2 * e.indexNum, r._ref = 1, r.shaderValue = s, r.shaderValue.setValue(t._shader2D);
            var a = t._nBlendType;
            return r._key.blendShader = a, r._blendFn = t._targets ? P.targetFns[a] : P.fns[a], r;
        }
    }
    Lt._poolSize = 0, Lt.POOL = [];
    class Ot extends st {
        constructor() {
            super(st.TYPE_2D), this._matrix = new p(), this._matrix4 = Dt.defaultMatrix4.concat(), this.shaderValue = new U(0, 0);
        }
        static create(t, e, i) {
            var s = Ot.POOL._length ? Ot.POOL[--Ot.POOL._length] : new Ot();
            s.canv = t, s._ref = 1, s._numEle = 0;
            var r = s.shaderValue;
            return r.alpha = e, r.defines.setValue(0), i && i.length && r.setFilters(i), s;
        }
        renderSubmit() {
            var t = M.worldAlpha,
                e = M.worldMatrix4,
                i = M.worldMatrix,
                s = M.worldFilters,
                r = M.worldShaderDefines,
                a = this.shaderValue,
                n = this._matrix,
                h = this._matrix4,
                o = p.TEMP;
            return p.mul(n, i, o), h[0] = o.a, h[1] = o.b, h[4] = o.c, h[5] = o.d, h[12] = o.tx, h[13] = o.ty, M.worldMatrix = o.clone(), M.worldMatrix4 = h, M.worldAlpha = M.worldAlpha * a.alpha, a.filters && a.filters.length && (M.worldFilters = a.filters, M.worldShaderDefines = a.defines), this.canv.flushsubmit(), M.worldAlpha = t, M.worldMatrix4 = e, M.worldMatrix.destroy(), M.worldMatrix = i, M.worldFilters = s, M.worldShaderDefines = r, 1;
        }
        releaseRender() {
            if (--this._ref < 1) {
                var t = Ot.POOL;
                this._mesh = null, t[t._length++] = this;
            }
        }
        getRenderType() {
            return st.TYPE_CANVAS;
        }
    }
    Ot.POOL = [], Ot.POOL._length = 0;
    class Bt {
        constructor() {
            this.blendType = 0, this._ref = 1, this._key = new k();
        }
        renderSubmit() {
            var t = C.mainContext;
            this._mesh.useMesh(t);
            var e = this.srcRT;
            return e && (this.shaderValue.texture = e._getSource(), this.shaderValue.upload(), this.blend(), O.renderBatches++, O.trianglesFaces += this._numEle / 3, t.drawElements(t.TRIANGLES, this._numEle, t.UNSIGNED_SHORT, this._startIdx)), 1;
        }
        blend() {
            if (P.activeBlendFunction !== P.fns[this.blendType]) {
                var t = C.mainContext;
                t.enable(t.BLEND), P.fns[this.blendType](t), P.activeBlendFunction = P.fns[this.blendType];
            }
        }
        getRenderType() {
            return 0;
        }
        releaseRender() {
            if (--this._ref < 1) {
                var t = Bt.POOL;
                t[t._length++] = this;
            }
        }
        static create(t, e, i, s) {
            var r = Bt.POOL._length ? Bt.POOL[--Bt.POOL._length] : new Bt();
            if (r._mesh = e, r.srcRT = s, r._startIdx = e.indexNum * Dt.BYTES_PIDX, r._ref = 1, r._key.clear(), r._numEle = 0, r.blendType = t._nBlendType, r._key.blendShader = r.blendType, r.shaderValue = i, r.shaderValue.setValue(t._shader2D), t._colorFiler) {
                var a = t._colorFiler;
                i.defines.add(a.type), i.colorMat = a._mat, i.colorAlpha = a._alpha;
            }
            return r;
        }
    }
    Bt.POOL = [], Bt.POOL._length = 0;
    class Ft extends st {
        constructor(t = st.TYPE_2D) {
            super(t);
        }
        releaseRender() {
            --this._ref < 1 && (Ft.POOL[Ft._poolSize++] = this, this.shaderValue.release(), this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null));
        }
        renderSubmit() {
            if (0 === this._numEle) return 1;
            var t = this.shaderValue.textureHost;
            if (t) {
                var e = t ? t._getSource() : null;
                if (!e) return 1;
            }
            var i = C.mainContext;
            this._mesh.useMesh(i);
            var s = st.preRender,
                r = st.preRender._key;
            return 0 === this._key.blendShader && this._key.submitType === r.submitType && this._key.blendShader === r.blendShader && w.activeShader && st.preRender.clipInfoID == this.clipInfoID && s.shaderValue.defines._value === this.shaderValue.defines._value && 0 == (this.shaderValue.defines._value & L.NOOPTMASK) ? w.activeShader.uploadTexture2D(e) : (P.activeBlendFunction !== this._blendFn && (C.setBlend(i, !0), this._blendFn(i), P.activeBlendFunction = this._blendFn), this.shaderValue.texture = e, this.shaderValue.upload()), i.drawElements(i.TRIANGLES, this._numEle, i.UNSIGNED_SHORT, this._startIdx), O.renderBatches++, O.trianglesFaces += this._numEle / 3, 1;
        }
        static create(t, e, i) {
            var s = Ft._poolSize ? Ft.POOL[--Ft._poolSize] : new Ft(st.TYPE_TEXTURE);
            s._mesh = e, s._key.clear(), s._key.submitType = st.KEY_DRAWTEXTURE, s._ref = 1, s._startIdx = e.indexNum * Dt.BYTES_PIDX, s._numEle = 0;
            var r = t._nBlendType;
            if (s._key.blendShader = r, s._blendFn = t._targets ? P.targetFns[r] : P.fns[r], s.shaderValue = i, t._colorFiler) {
                var a = t._colorFiler;
                i.defines.add(a.type), i.colorMat = a._mat, i.colorAlpha = a._alpha;
            }
            return s;
        }
    }
    Ft._poolSize = 0, Ft.POOL = [];
    class Nt {
        constructor() {
            this._data = [], this._ndata = 0, this._clipid = -1, this._clipMatrix = new p(), this._enbale = !1;
        }
        clear() {
            this._tex = null, this._imgId = -1, this._ndata = 0, this._enbale = !1, this._colorFiler = null;
        }
        destroy() {
            this.clear(), this._data.length = 0, this._data = null;
        }
        add(t, e, i, s, r, a) {
            this._ndata > 0 && (this._tex != e || this._imgId != i || this._clipid >= 0 && this._clipid != t._clipInfoID) && this.submit(t), this._clipid = t._clipInfoID, t._globalClipMatrix.copyTo(this._clipMatrix), this._tex = e, this._imgId = i, this._colorFiler = t._colorFiler, this._data[this._ndata] = s, this._data[this._ndata + 1] = r, this._data[this._ndata + 2] = a, this._ndata += 3;
        }
        getPos() {
            return 0 == Nt.__nPosPool ? new Array(8) : Nt.__posPool[--Nt.__nPosPool];
        }
        enable(t, e) {
            t !== this._enbale && (this._enbale = t, this._enbale || this.submit(e));
        }
        submit(t) {
            var e = this._ndata;
            if (e) {
                var i = t._mesh,
                    s = t._colorFiler;
                t._colorFiler = this._colorFiler;
                var r = Ft.create(t, i, U.create(L.TEXTURE2D, 0));
                t._submits[t._submits._length++] = t._curSubmit = r, r.shaderValue.textureHost = this._tex, r._key.other = this._imgId, t._colorFiler = s, t._copyClipInfo(r, this._clipMatrix), r.clipInfoID = this._clipid;
                for (var a = 0; a < e; a += 3) i.addQuad(this._data[a], this._data[a + 1], this._data[a + 2], !0), Nt.__posPool[Nt.__nPosPool++] = this._data[a];
                e /= 3, r._numEle += 6 * e, i.indexNum += 6 * e, i.vertNum += 4 * e, t._drawCount += e, this._ndata = 0, lt.loopCount % 100 == 0 && (this._data.length = 0);
            }
        }
    }
    Nt.__posPool = [], Nt.__nPosPool = 0;
    class Ut {
        constructor(t = 0, e = 0, i = 0) {
            this.atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null, this._cells = null, this._used = 0, this._cells = null, this._rowInfo = null, this.atlasID = i, this._init(t, e);
        }
        addRect(t, e, i, s) {
            return !!this._get(e, i, s) && (this._fill(s.x, s.y, e, i, t), this._texCount++, !0);
        }
        _release() {
            this._cells = null, this._rowInfo = null;
        }
        _init(t, e) {
            return this._width = t, this._height = e, this._release(), 0 != this._width && (this._cells = new Uint8Array(this._width * this._height * 3), this._rowInfo = new Uint8Array(this._height), this._used = 0, this._clear(), !0);
        }
        _get(t, e, i) {
            if (t > this._width || e > this._height) return !1;
            for (var s = -1, r = -1, a = this._width, n = this._height, h = this._cells, o = 0; o < n; o++)
                if (!(this._rowInfo[o] < t))
                    for (var l = 0; l < a;) {
                        var _ = 3 * (o * a + l);
                        if (0 != h[_] || h[_ + 1] < t || h[_ + 2] < e) l += h[_ + 1];
                        else {
                            s = l, r = o;
                            for (var c = 0; c < t; c++)
                                if (h[3 * c + _ + 2] < e) {
                                    s = -1;
                                    break;
                                }
                            if (!(s < 0)) return i.x = s, i.y = r, !0;
                            l += h[_ + 1];
                        }
                    }
            return !1;
        }
        _fill(t, e, i, s, r) {
            var a = this._width,
                n = this._height;
            this._check(t + i <= a && e + s <= n);
            for (var h = e; h < s + e; ++h) {
                this._check(this._rowInfo[h] >= i), this._rowInfo[h] -= i;
                for (var o = 0; o < i; o++) {
                    var l = 3 * (t + h * a + o);
                    this._check(0 == this._cells[l]), this._cells[l] = r, this._cells[l + 1] = i, this._cells[l + 2] = s;
                }
            }
            if (t > 0)
                for (h = 0; h < s; ++h) {
                    var _ = 0;
                    for (o = t - 1; o >= 0 && 0 == this._cells[3 * ((e + h) * a + o)]; --o, ++_);
                    for (o = _; o > 0; --o) this._cells[3 * ((e + h) * a + t - o) + 1] = o, this._check(o > 0);
                }
            if (e > 0)
                for (o = t; o < t + i; ++o) {
                    for (_ = 0, h = e - 1; h >= 0 && 0 == this._cells[3 * (o + h * a)]; --h, _++);
                    for (h = _; h > 0; --h) this._cells[3 * (o + (e - h) * a) + 2] = h, this._check(h > 0);
                }
            this._used += i * s / (this._width * this._height);
        }
        _check(t) {
            0 == t && console.log("xtexMerger 错误啦");
        }
        _clear() {
            this._texCount = 0;
            for (var t = 0; t < this._height; t++) this._rowInfo[t] = this._width;
            for (var e = 0; e < this._height; e++)
                for (var i = 0; i < this._width; i++) {
                    var s = 3 * (e * this._width + i);
                    this._cells[s] = 0, this._cells[s + 1] = this._width - i, this._cells[s + 2] = this._width - e;
                }
        }
    }
    class kt extends E {
        constructor(t, e) {
            super(), this._texW = 0, this._texH = 0, this.__destroyed = !1, this._discardTm = 0, this.genID = 0, this.bitmap = {
                id: 0,
                _glTexture: null
            }, this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = 0, this.ri = null, this._texW = t || kt.gTextRender.atlasWidth, this._texH = e || kt.gTextRender.atlasWidth, this.bitmap.id = this.id, this.lock = !0;
        }
        recreateResource() {
            if (!this._source) {
                var t = m.instance,
                    e = this._source = t.createTexture();
                this.bitmap._glTexture = e, C.bindTexture(t, t.TEXTURE_2D, e), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this._texW, this._texH, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), kt.gTextRender.debugUV && this.fillWhite();
            }
        }
        addChar(t, e, s, r = null) {
            if (kt.gTextRender.isWan1Wan) return this.addCharCanvas(t, e, s, r);
            !this._source && this.recreateResource();
            var a = m.instance;
            C.bindTexture(a, a.TEXTURE_2D, this._source), !i.Render.isConchApp && a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            var n, h, o, l, _ = t.data;
            return t.data instanceof Uint8ClampedArray && (_ = new Uint8Array(_.buffer)), a.texSubImage2D(a.TEXTURE_2D, 0, e, s, t.width, t.height, a.RGBA, a.UNSIGNED_BYTE, _), !i.Render.isConchApp && a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.Render.isConchApp ? (n = e / this._texW, h = s / this._texH, o = (e + t.width) / this._texW, l = (s + t.height) / this._texH) : (n = (e + 1) / this._texW, h = s / this._texH, o = (e + t.width - 1) / this._texW, l = (s + t.height - 1) / this._texH), (r = r || new Array(8))[0] = n, r[1] = h, r[2] = o, r[3] = h, r[4] = o, r[5] = l, r[6] = n, r[7] = l, r;
        }
        addCharCanvas(t, e, s, r = null) {
            !this._source && this.recreateResource();
            var a, n, h, o, l = m.instance;
            return C.bindTexture(l, l.TEXTURE_2D, this._source), !i.Render.isConchApp && l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), l.texSubImage2D(l.TEXTURE_2D, 0, e, s, l.RGBA, l.UNSIGNED_BYTE, t), !i.Render.isConchApp && l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.Render.isConchApp ? (a = e / this._texW, n = s / this._texH, h = (e + t.width) / this._texW, o = (s + t.height) / this._texH) : (a = (e + 1) / this._texW, n = (s + 1) / this._texH, h = (e + t.width - 1) / this._texW, o = (s + t.height - 1) / this._texH), (r = r || new Array(8))[0] = a, r[1] = n, r[2] = h, r[3] = n, r[4] = h, r[5] = o, r[6] = a, r[7] = o, r;
        }
        fillWhite() {
            !this._source && this.recreateResource();
            var t = m.instance,
                e = new Uint8Array(this._texW * this._texH * 4);
            e.fill(255), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, this._texW, this._texH, t.RGBA, t.UNSIGNED_BYTE, e);
        }
        discard() {
            this._texW == kt.gTextRender.atlasWidth && this._texH == kt.gTextRender.atlasWidth ? (this.genID++, kt.poolLen >= kt.pool.length && (kt.pool = kt.pool.concat(new Array(10))), this._discardTm = lt.loopStTm, kt.pool[kt.poolLen++] = this) : this.destroy();
        }
        static getTextTexture(t, e) {
            if (t != kt.gTextRender.atlasWidth || t != kt.gTextRender.atlasWidth) return new kt(t, e);
            if (kt.poolLen > 0) {
                var i = kt.pool[--kt.poolLen];
                return kt.poolLen > 0 && kt.clean(), i;
            }
            return new kt(t, e);
        }
        destroy() {
            this.__destroyed = !0;
            var t = m.instance;
            this._source && t.deleteTexture(this._source), this._source = null;
        }
        static clean() {
            var t = lt.loopStTm;
            if (0 === kt.cleanTm && (kt.cleanTm = t), t - kt.cleanTm >= kt.gTextRender.checkCleanTextureDt) {
                for (var e = 0; e < kt.poolLen; e++) {
                    var i = kt.pool[e];
                    t - i._discardTm >= kt.gTextRender.destroyUnusedTextureDt && (i.destroy(), kt.pool[e] = kt.pool[kt.poolLen - 1], kt.poolLen--, e--);
                }
                kt.cleanTm = t;
            }
        }
        touchRect(t, e) {
            this.lastTouchTm != e && (this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = e);
            var s = kt.gTextRender.atlasWidth * kt.gTextRender.atlasWidth,
                r = i.TextAtlas.atlasGridW * i.TextAtlas.atlasGridW;
            this.curUsedCovRate += t.bmpWidth * t.bmpHeight / s, this.curUsedCovRateAtlas += Math.ceil(t.bmpWidth / i.TextAtlas.atlasGridW) * Math.ceil(t.bmpHeight / i.TextAtlas.atlasGridW) / (s / r);
        }
        get texture() {
            return this;
        }
        _getSource() {
            return this._source;
        }
        drawOnScreen(t, e) {}
    }
    kt.gTextRender = null, kt.pool = new Array(10), kt.poolLen = 0, kt.cleanTm = 0;
    class Gt {
        constructor() {
            this.texWidth = 1024, this.texHeight = 1024, this.protectDist = 1, this.texture = null, this.charMaps = {}, this.texHeight = this.texWidth = i.TextRender.atlasWidth, this.texture = kt.getTextTexture(this.texWidth, this.texHeight), this.texWidth / Gt.atlasGridW > 256 && (Gt.atlasGridW = Math.ceil(this.texWidth / 256)), this.atlasgrid = new Ut(this.texWidth / Gt.atlasGridW, this.texHeight / Gt.atlasGridW, this.texture.id);
        }
        setProtecteDist(t) {
            this.protectDist = t;
        }
        getAEmpty(t, e, i) {
            var s = this.atlasgrid.addRect(1, Math.ceil(t / Gt.atlasGridW), Math.ceil(e / Gt.atlasGridW), i);
            return s && (i.x *= Gt.atlasGridW, i.y *= Gt.atlasGridW), s;
        }
        get usedRate() {
            return this.atlasgrid._used;
        }
        destroy() {
            for (var t in this.charMaps) {
                this.charMaps[t].deleted = !0;
            }
            this.texture.discard();
        }
        printDebugInfo() {}
    }
    Gt.atlasGridW = 16;
    class Wt {
        setTo(t, e, i) {
            return this.type = t, this.currentTarget = e, this.target = i, this;
        }
        stopPropagation() {
            this._stoped = !0;
        }
        get touches() {
            if (!this.nativeEvent) return null;
            var t = this.nativeEvent.touches;
            if (t)
                for (var e = i.stage, s = 0, r = t.length; s < r; s++) {
                    var a = t[s],
                        n = f.TEMP;
                    n.setTo(a.clientX, a.clientY), e._canvasTransform.invertTransformPoint(n), e.transform.invertTransformPoint(n), a.stageX = n.x, a.stageY = n.y;
                }
            return t;
        }
        get altKey() {
            return this.nativeEvent.altKey;
        }
        get ctrlKey() {
            return this.nativeEvent.ctrlKey;
        }
        get shiftKey() {
            return this.nativeEvent.shiftKey;
        }
        get charCode() {
            return this.nativeEvent.charCode;
        }
        get keyLocation() {
            return this.nativeEvent.location || this.nativeEvent.keyLocation;
        }
        get stageX() {
            return i.stage.mouseX;
        }
        get stageY() {
            return i.stage.mouseY;
        }
    }
    Wt.EMPTY = new Wt(), Wt.MOUSE_DOWN = "mousedown", Wt.MOUSE_UP = "mouseup", Wt.CLICK = "click", Wt.RIGHT_MOUSE_DOWN = "rightmousedown", Wt.RIGHT_MOUSE_UP = "rightmouseup", Wt.RIGHT_CLICK = "rightclick", Wt.MOUSE_MOVE = "mousemove", Wt.MOUSE_OVER = "mouseover", Wt.MOUSE_OUT = "mouseout", Wt.MOUSE_WHEEL = "mousewheel", Wt.ROLL_OVER = "mouseover", Wt.ROLL_OUT = "mouseout", Wt.DOUBLE_CLICK = "doubleclick", Wt.CHANGE = "change", Wt.CHANGED = "changed", Wt.RESIZE = "resize", Wt.ADDED = "added", Wt.REMOVED = "removed", Wt.DISPLAY = "display", Wt.UNDISPLAY = "undisplay", Wt.ERROR = "error", Wt.COMPLETE = "complete", Wt.LOADED = "loaded", Wt.READY = "ready", Wt.PROGRESS = "progress", Wt.INPUT = "input", Wt.RENDER = "render", Wt.OPEN = "open", Wt.MESSAGE = "message", Wt.CLOSE = "close", Wt.KEY_DOWN = "keydown", Wt.KEY_PRESS = "keypress", Wt.KEY_UP = "keyup", Wt.FRAME = "enterframe", Wt.DRAG_START = "dragstart", Wt.DRAG_MOVE = "dragmove", Wt.DRAG_END = "dragend", Wt.ENTER = "enter", Wt.SELECT = "select", Wt.BLUR = "blur", Wt.FOCUS = "focus", Wt.VISIBILITY_CHANGE = "visibilitychange", Wt.FOCUS_CHANGE = "focuschange", Wt.PLAYED = "played", Wt.PAUSED = "paused", Wt.STOPPED = "stopped", Wt.START = "start", Wt.END = "end", Wt.COMPONENT_ADDED = "componentadded", Wt.COMPONENT_REMOVED = "componentremoved", Wt.RELEASED = "released", Wt.LINK = "link", Wt.LABEL = "label", Wt.FULL_SCREEN_CHANGE = "fullscreenchange", Wt.DEVICE_LOST = "devicelost", Wt.TRANSFORM_CHANGED = "transformchanged", Wt.ANIMATION_CHANGED = "animationchanged", Wt.TRAIL_FILTER_CHANGE = "trailfilterchange", Wt.TRIGGER_ENTER = "triggerenter", Wt.TRIGGER_STAY = "triggerstay", Wt.TRIGGER_EXIT = "triggerexit";
    class Yt extends T {
        constructor(t = null, e = null, i = 0, s = 0) {
            super(), this.uvrect = [0, 0, 1, 1], this._destroyed = !1, this._referenceCount = 0, this.$_GID = 0, this.offsetX = 0, this.offsetY = 0, this._w = 0, this._h = 0, this.sourceWidth = 0, this.sourceHeight = 0, this.url = null, this.scaleRate = 1, this.setTo(t, e, i, s);
        }
        static moveUV(t, e, i) {
            for (var s = 0; s < 8; s += 2) i[s] += t, i[s + 1] += e;
            return i;
        }
        static create(t, e, i, s, r, a = 0, n = 0, h = 0, o = 0) {
            return Yt._create(t, e, i, s, r, a, n, h, o);
        }
        static _create(t, e, i, s, r, a = 0, n = 0, h = 0, o = 0, l = null) {
            var _, c = t instanceof Yt,
                u = c ? t.uv : Yt.DEF_UV,
                d = c ? t.bitmap : t;
            d.width && e + s > d.width && (s = d.width - e), d.height && i + r > d.height && (r = d.height - i), l ? (_ = l).setTo(d, null, h || s, o || r) : _ = new Yt(d, null, h || s, o || r), _.width = s, _.height = r, _.offsetX = a, _.offsetY = n;
            var p = 1 / d.width,
                f = 1 / d.height;
            e *= p, i *= f, s *= p, r *= f;
            var g = _.uv[0],
                m = _.uv[1],
                v = _.uv[4],
                T = _.uv[5],
                x = v - g,
                y = T - m,
                E = Yt.moveUV(u[0], u[1], [e, i, e + s, i, e + s, i + r, e, i + r]);
            _.uv = new Float32Array([g + E[0] * x, m + E[1] * y, v - (1 - E[2]) * x, m + E[3] * y, v - (1 - E[4]) * x, T - (1 - E[5]) * y, g + E[6] * x, T - (1 - E[7]) * y]);
            var A = d.scaleRate;
            return A && 1 != A ? (_.sourceWidth /= A, _.sourceHeight /= A, _.width /= A, _.height /= A, _.scaleRate = A) : _.scaleRate = 1, _;
        }
        static createFromTexture(t, e, i, s, r) {
            var a = t.scaleRate;
            1 != a && (e *= a, i *= a, s *= a, r *= a);
            var n = g.TEMP.setTo(e - t.offsetX, i - t.offsetY, s, r),
                h = n.intersection(Yt._rect1.setTo(0, 0, t.width, t.height), Yt._rect2);
            return h ? Yt.create(t, h.x, h.y, h.width, h.height, h.x - n.x, h.y - n.y, s, r) : null;
        }
        get uv() {
            return this._uv;
        }
        set uv(t) {
            this.uvrect[0] = Math.min(t[0], t[2], t[4], t[6]), this.uvrect[1] = Math.min(t[1], t[3], t[5], t[7]), this.uvrect[2] = Math.max(t[0], t[2], t[4], t[6]) - this.uvrect[0], this.uvrect[3] = Math.max(t[1], t[3], t[5], t[7]) - this.uvrect[1], this._uv = t;
        }
        get width() {
            return this._w ? this._w : this.bitmap ? this.uv && this.uv !== Yt.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width : 0;
        }
        set width(t) {
            this._w = t, this.sourceWidth || (this.sourceWidth = t);
        }
        get height() {
            return this._h ? this._h : this.bitmap ? this.uv && this.uv !== Yt.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height : 0;
        }
        set height(t) {
            this._h = t, this.sourceHeight || (this.sourceHeight = t);
        }
        get bitmap() {
            return this._bitmap;
        }
        set bitmap(t) {
            this._bitmap && this._bitmap._removeReference(this._referenceCount), this._bitmap = t, t && t._addReference(this._referenceCount);
        }
        get destroyed() {
            return this._destroyed;
        }
        _addReference() {
            this._bitmap && this._bitmap._addReference(), this._referenceCount++;
        }
        _removeReference() {
            this._bitmap && this._bitmap._removeReference(), this._referenceCount--;
        }
        _getSource(t = null) {
            return this._destroyed || !this._bitmap ? null : (this.recoverBitmap(t), this._bitmap.destroyed ? null : this.bitmap._getSource());
        }
        _onLoaded(t, e) {
            if (e)
                if (e == this);
                else if (e instanceof Yt) {
                var i = e;
                Yt._create(e, 0, 0, i.width, i.height, 0, 0, i.sourceWidth, i.sourceHeight, this);
            } else this.bitmap = e, this.sourceWidth = this._w = e.width, this.sourceHeight = this._h = e.height;
            else;
            t && t.run(), this.event(Wt.READY, this);
        }
        getIsReady() {
            return !this._destroyed && !!this._bitmap;
        }
        setTo(t = null, e = null, i = 0, s = 0) {
            this.bitmap = t, this.sourceWidth = i, this.sourceHeight = s, t && (this._w = t.width, this._h = t.height, this.sourceWidth = this.sourceWidth || t.width, this.sourceHeight = this.sourceHeight || t.height), this.uv = e || Yt.DEF_UV;
        }
        load(t, e = null) {
            this._destroyed || i.loader.load(t, v.create(this, this._onLoaded, [e]), null, "htmlimage", 1, !1, null, !0);
        }
        getTexturePixels(t, e, s, r) {
            var a, n, h, o = this.bitmap,
                l = o.width,
                _ = o.height;
            if (t + s > l && (s -= t + s - l), e + r > _ && (r -= e + r - _), s <= 0 || r <= 0) return null;
            var c = 4 * s,
                u = null;
            try {
                u = o.getPixels();
            } catch (t) {}
            if (u) {
                if (0 == t && 0 == e && s == l && r == _) return u;
                var d = new Uint8Array(s * r * 4);
                for (a = 4 * t, n = (e + r - 1) * (c = 4 * l) + 4 * t, h = r - 1; h >= 0; h--) d.set(x.slice(n, n + 4 * s), a), a += c, n -= c;
                return d;
            }
            var p = new i.Context();
            p.size(s, r), p.asBitmap = !0;
            var f = null;
            if (0 != t || 0 != e || s != l || r != _) {
                var g = (f = this._uv.slice())[0],
                    m = f[1],
                    v = (f[2] - g) / l,
                    T = (f[7] - m) / _;
                f = [g + t * v, m + e * T, g + (t + s) * v, m + e * T, g + (t + s) * v, m + (e + r) * T, g + t * v, m + (e + r) * T];
            }
            p._drawTextureM(this, 0, 0, s, r, null, 1, f), p._targets.start(), p.flush(), p._targets.end(), p._targets.restore();
            var x = p._targets.getData(0, 0, s, r);
            for (p.destroy(), d = new Uint8Array(s * r * 4), a = 0, n = (r - 1) * c, h = r - 1; h >= 0; h--) d.set(x.slice(n, n + c), a), a += c, n -= c;
            return d;
        }
        getPixels(t, e, i, s) {
            return window.conch ? this._nativeObj.getImageData(t, e, i, s) : this.getTexturePixels(t, e, i, s);
        }
        recoverBitmap(t = null) {
            var e = this._bitmap.url;
            this._destroyed || this._bitmap && !this._bitmap.destroyed || !e || i.loader.load(e, v.create(this, function(e) {
                this.bitmap = e, t && t();
            }), null, "htmlimage", 1, !1, null, !0);
        }
        disposeBitmap() {
            !this._destroyed && this._bitmap && this._bitmap.destroy();
        }
        destroy(t = !1) {
            if (!this._destroyed) {
                this._destroyed = !0;
                var e = this._bitmap;
                e && (e._removeReference(this._referenceCount), (0 === e.referenceCount || t) && e.destroy(), e = null), this.url && this === i.loader.getRes(this.url) && i.loader.clearRes(this.url);
            }
        }
    }
    Yt.DEF_UV = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), Yt.NO_UV = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0]), Yt.INV_UV = new Float32Array([0, 1, 1, 1, 1, 0, 0, 0]), Yt._rect1 = new g(), Yt._rect2 = new g();
    class Vt {
        constructor(t) {
            this._font = "14px Arial", this._family = "Arial", this._size = 14, this._italic = !1, this._bold = !1, this._id = Vt._gfontID++, this.setFont(t || this._font);
        }
        static Parse(t) {
            if (t === Vt._lastFont) return Vt._lastFontInfo;
            var e = Vt._cache[t];
            return e || (e = Vt._cache[t] = new Vt(t)), Vt._lastFont = t, Vt._lastFontInfo = e, e;
        }
        setFont(t) {
            this._font = t;
            var e = t.split(" "),
                i = e.length;
            if (i < 2) 1 == i && e[0].indexOf("px") > 0 && (this._size = parseInt(e[0]));
            else {
                for (var s = -1, r = 0; r < i; r++)
                    if (e[r].indexOf("px") > 0 || e[r].indexOf("pt") > 0) {
                        s = r, this._size = parseInt(e[r]), this._size <= 0 && (console.error("font parse error:" + t), this._size = 14);
                        break;
                    }
                var a = s + 1,
                    n = e[a];
                for (a++; a < i; a++) n += " " + e[a];
                this._family = n.split(",")[0], this._italic = e.indexOf("italic") >= 0, this._bold = e.indexOf("bold") >= 0;
            }
        }
    }
    Vt.EMPTY = new Vt(null), Vt._cache = {}, Vt._gfontID = 0, Vt._lastFont = "";
    class Ht {
        constructor() {
            this.save = [], this.toUpperCase = null, this.width = -1, this.pageChars = [], this.startID = 0, this.startIDStroke = 0, this.lastGCCnt = 0, this.splitRender = !1;
        }
        setText(t) {
            this.changed = !0, this._text = t, this.width = -1, this.cleanCache();
        }
        toString() {
            return this._text;
        }
        get length() {
            return this._text ? this._text.length : 0;
        }
        charCodeAt(t) {
            return this._text ? this._text.charCodeAt(t) : NaN;
        }
        charAt(t) {
            return this._text ? this._text.charAt(t) : null;
        }
        cleanCache() {
            this.pageChars.forEach(function(t) {
                var e = t.tex;
                t.words;
                1 == t.words.length && e && e.ri && e.destroy();
            }), this.pageChars = [], this.startID = 0;
        }
    }
    class Xt {
        constructor() {
            this.char = "", this.deleted = !1, this.uv = new Array(8), this.pos = 0, this.orix = 0, this.oriy = 0, this.touchTick = 0, this.isSpace = !1;
        }
        touch() {
            var t = lt.loopCount;
            this.touchTick != t && this.tex.touchRect(this, t), this.touchTick = t;
        }
    }
    class zt {
        constructor() {
            this.fontsz = 16;
        }
        getWidth(t, e) {
            return 0;
        }
        scale(t, e) {}
        get canvasWidth() {
            return 0;
        }
        set canvasWidth(t) {}
        getCharBmp(t, e, i, s, r, a, n, h, o, l, _ = null) {
            return null;
        }
    }
    class jt {
        static __init__() {
            var t = window.Laya || i.Laya;
            if (jt._window) return jt._window;
            var e = jt._window = window,
                s = jt._document = e.document,
                r = jt.userAgent = e.navigator.userAgent;
            r.indexOf("AlipayMiniGame") > -1 && "my" in jt.window && (window.aliMiniGame(t, t), window.aliPayMiniGame(t, t), t.ALIMiniAdapter ? t.ALIMiniAdapter.enable() : console.error("请先添加阿里小游戏适配库")), -1 == r.indexOf("OPPO") && r.indexOf("MiniGame") > -1 && "wx" in jt.window && ("qq" in jt.window ? (window.qqMiniGame(t, t), t.QQMiniAdapter ? t.QQMiniAdapter.enable() : console.error("请引入手机QQ小游戏的适配库：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")) : (window.wxMiniGame(t, t), t.MiniAdpter ? t.MiniAdpter.enable() : console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0"))), r.indexOf("SwanGame") > -1 && (window.bdMiniGame(t, t), t.BMiniAdapter ? t.BMiniAdapter.enable() : console.error("请先添加百度小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), r.indexOf("QuickGame") > -1 && (window.miMiniGame(t, t), t.KGMiniAdapter ? t.KGMiniAdapter.enable() : console.error("请先添加小米小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), r.indexOf("OPPO") > -1 && r.indexOf("MiniGame") > -1 && (window.qgMiniGame(t, t), t.QGMiniAdapter ? t.QGMiniAdapter.enable() : console.error("请先添加OPPO小游戏适配库")), r.indexOf("VVGame") > -1 && (window.vvMiniGame(t, t), t.VVMiniAdapter ? t.VVMiniAdapter.enable() : console.error("请先添加VIVO小游戏适配库")), e.trace = console.log, e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                return e.setTimeout(t, 1e3 / 60);
            };
            var a = s.body.style;
            a.margin = 0, a.overflow = "hidden", a["-webkit-user-select"] = "none", a["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)";
            for (var n = s.getElementsByTagName("meta"), h = 0, o = !1, l = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"; h < n.length;) {
                var _ = n[h];
                if ("viewport" == _.name) {
                    _.content = l, o = !0;
                    break;
                }
                h++;
            }
            return o || ((_ = s.createElement("meta")).name = "viewport", _.content = l, s.getElementsByTagName("head")[0].appendChild(_)), jt.onMobile = !!window.isConchApp || r.indexOf("Mobile") > -1, jt.onIOS = !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), jt.onIPhone = r.indexOf("iPhone") > -1, jt.onMac = r.indexOf("Mac OS X") > -1, jt.onIPad = r.indexOf("iPad") > -1, jt.onAndroid = r.indexOf("Android") > -1 || r.indexOf("Adr") > -1, jt.onWP = r.indexOf("Windows Phone") > -1, jt.onQQBrowser = r.indexOf("QQBrowser") > -1, jt.onMQQBrowser = r.indexOf("MQQBrowser") > -1 || r.indexOf("Mobile") > -1 && r.indexOf("QQ") > -1, jt.onIE = !!e.ActiveXObject || "ActiveXObject" in e, jt.onWeiXin = r.indexOf("MicroMessenger") > -1, jt.onSafari = r.indexOf("Safari") > -1, jt.onPC = !jt.onMobile, jt.onMiniGame = r.indexOf("MiniGame") > -1, jt.onBDMiniGame = r.indexOf("SwanGame") > -1, jt.onLayaRuntime = !!jt.window.conch, r.indexOf("OPPO") > -1 && r.indexOf("MiniGame") > -1 ? (jt.onQGMiniGame = !0, jt.onMiniGame = !1) : "qq" in jt.window && r.indexOf("MiniGame") > -1 && (jt.onQQMiniGame = !0, jt.onMiniGame = !1), jt.onVVMiniGame = r.indexOf("VVGame") > -1, jt.onKGMiniGame = r.indexOf("QuickGame") > -1, r.indexOf("AlipayMiniGame") > -1 && (jt.onAlipayMiniGame = !0, jt.onMiniGame = !1), e;
        }
        static createElement(t) {
            return jt.__init__(), jt._document.createElement(t);
        }
        static getElementById(t) {
            return jt.__init__(), jt._document.getElementById(t);
        }
        static removeElement(t) {
            t && t.parentNode && t.parentNode.removeChild(t);
        }
        static now() {
            return Date.now();
        }
        static get clientWidth() {
            return jt.__init__(), jt._window.innerWidth || jt._document.body.clientWidth;
        }
        static get clientHeight() {
            return jt.__init__(), jt._window.innerHeight || jt._document.body.clientHeight || jt._document.documentElement.clientHeight;
        }
        static get width() {
            return jt.__init__(), (i.stage && i.stage.canvasRotation ? jt.clientHeight : jt.clientWidth) * jt.pixelRatio;
        }
        static get height() {
            return jt.__init__(), (i.stage && i.stage.canvasRotation ? jt.clientWidth : jt.clientHeight) * jt.pixelRatio;
        }
        static get pixelRatio() {
            return jt._pixelRatio < 0 && (jt.__init__(), jt.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1 ? jt._pixelRatio = 2 : (jt._pixelRatio = jt._window.devicePixelRatio || 1, jt._pixelRatio < 1 && (jt._pixelRatio = 1))), jt._pixelRatio;
        }
        static get container() {
            return jt._container || (jt.__init__(), jt._container = jt.createElement("div"), jt._container.id = "layaContainer", jt._document.body.appendChild(jt._container)), jt._container;
        }
        static set container(t) {
            jt._container = t;
        }
        static get window() {
            return jt._window || jt.__init__();
        }
        static get document() {
            return jt.__init__(), jt._document;
        }
    }
    jt._pixelRatio = -1, jt.mainCanvas = null, jt.hanzi = new RegExp("^[一-龥]$"), jt.fontMap = [], jt.measureText = function(t, e) {
        var i = jt.hanzi.test(t);
        if (i && jt.fontMap[e]) return jt.fontMap[e];
        var s = jt.context;
        s.font = e;
        var r = s.measureText(t);
        return i && (jt.fontMap[e] = r), r;
    };
    class Kt extends zt {
        constructor(t, e, i = !0, s = !0, r = !1) {
            super(), this.ctx = null, this.lastScaleX = 1, this.lastScaleY = 1, this.needResetScale = !1, this.maxTexW = 0, this.maxTexH = 0, this.scaleFontSize = !0, this.showDbgInfo = !1, this.supportImageData = !0, this.maxTexW = t, this.maxTexH = e, this.scaleFontSize = i, this.supportImageData = s, this.showDbgInfo = r, Kt.canvas || (Kt.canvas = jt.createElement("canvas"), Kt.canvas.width = 1024, Kt.canvas.height = 512, Kt.canvas.style.left = "-10000px", Kt.canvas.style.position = "absolute", document.body.appendChild(Kt.canvas), this.ctx = Kt.canvas.getContext("2d"));
        }
        get canvasWidth() {
            return Kt.canvas.width;
        }
        set canvasWidth(t) {
            Kt.canvas.width != t && (Kt.canvas.width = t, t > 2048 && console.warn("画文字设置的宽度太大，超过2048了"), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.scale(this.lastScaleX, this.lastScaleY));
        }
        getWidth(t, e) {
            return this.ctx ? (this.ctx._lastFont != t && (this.ctx.font = t, this.ctx._lastFont = t), this.ctx.measureText(e).width) : 0;
        }
        scale(t, e) {
            if (!this.supportImageData) return this.lastScaleX = t, void(this.lastScaleY = e);
            this.lastScaleX == t && this.lastScaleY == e || (this.ctx.setTransform(t, 0, 0, e, 0, 0), this.lastScaleX = t, this.lastScaleY = e);
        }
        getCharBmp(t, e, i, s, r, a, n, h, o, l, _ = null) {
            if (!this.supportImageData) return this.getCharCanvas(t, e, i, s, r, a, n, h, o, l);
            var c = this.ctx,
                u = this.fontsz;
            c.font != e && (c.font = e, c._lastFont = e), a.width = c.measureText(t).width;
            var d = a.width * this.lastScaleX,
                p = a.height * this.lastScaleY;
            d += (n + o) * this.lastScaleX, p += (h + l) * this.lastScaleY, d = Math.ceil(d), p = Math.ceil(p);
            var f = (d = Math.min(d, Kt.canvas.width)) + 2 * i + 1,
                g = (p = Math.min(p, Kt.canvas.height)) + 2 * i + 1;
            _ && (f = Math.max(f, _[0] + _[2] + 1), g = Math.max(g, _[1] + _[3] + 1)), c.clearRect(0, 0, f, g), c.save(), c.textBaseline = "middle", i > 0 && (c.strokeStyle = r, c.lineWidth = i, c.strokeText(t, n, h + u / 2)), s && (c.fillStyle = s, c.fillText(t, n, h + u / 2)), this.showDbgInfo && (c.strokeStyle = "#ff0000", c.strokeRect(1, 1, d - 2, p - 2), c.strokeStyle = "#00ff00", c.strokeRect(n, h, a.width, a.height)), _ && -1 == _[2] && (_[2] = Math.ceil((a.width + 2 * i) * this.lastScaleX));
            var m = _ ? c.getImageData(_[0], _[1], _[2], _[3]) : c.getImageData(0, 0, d, p);
            return c.restore(), a.bmpWidth = m.width, a.bmpHeight = m.height, m;
        }
        getCharCanvas(t, e, i, s, r, a, n, h, o, l) {
            var _ = this.ctx;
            _.font != e && (_.font = e, _._lastFont = e), a.width = _.measureText(t).width;
            var c = a.width * this.lastScaleX,
                u = a.height * this.lastScaleY;
            c += (n + o) * this.lastScaleX, u += (h + l) * this.lastScaleY + 1, c = Math.min(c, this.maxTexW), u = Math.min(u, this.maxTexH), Kt.canvas.width = Math.min(c + 1, this.maxTexW), Kt.canvas.height = Math.min(u + 1, this.maxTexH), _.font = e, _.clearRect(0, 0, c + 1 + i, u + 1 + i), _.setTransform(1, 0, 0, 1, 0, 0), _.save(), this.scaleFontSize && _.scale(this.lastScaleX, this.lastScaleY), _.translate(n, h), _.textAlign = "left";
            var d = this.fontsz;
            return _.textBaseline = "middle", i > 0 ? (_.strokeStyle = r, _.fillStyle = s, _.lineWidth = i, _.fillAndStrokeText ? _.fillAndStrokeText(t, 0, d / 2) : (_.strokeText(t, 0, d / 2), _.fillText(t, 0, d / 2))) : s && (_.fillStyle = s, _.fillText(t, 0, d / 2)), this.showDbgInfo && (_.strokeStyle = "#ff0000", _.strokeRect(0, 0, c, u), _.strokeStyle = "#00ff00", _.strokeRect(0, 0, a.width, a.height)), _.restore(), a.bmpWidth = Kt.canvas.width, a.bmpHeight = Kt.canvas.height, Kt.canvas;
        }
    }
    Kt.canvas = null;
    class qt extends zt {
        constructor() {
            super(), this.lastFont = "";
        }
        getWidth(t, e) {
            return window.conchTextCanvas ? (window.conchTextCanvas.font = t, this.lastFont = t, window.conchTextCanvas.measureText(e).width) : 0;
        }
        scale(t, e) {}
        getCharBmp(t, e, i, s, r, a, n, h, o, l, _ = null) {
            if (!window.conchTextCanvas) return null;
            window.conchTextCanvas.font = e, this.lastFont = e;
            a.width = window.conchTextCanvas.measureText(t).width, a.height;
            var c = V.create(r).numColor,
                u = V.create(s).numColor,
                d = window.conchTextCanvas.getTextBitmapData(t, u, i > 2 ? 2 : i, c);
            return a.bmpWidth = d.width, a.bmpHeight = d.height, d;
        }
    }
    class Qt {
        constructor() {
            this.fontSizeInfo = {}, this.charRender = null, this.mapFont = {}, this.fontID = 0, this.mapColor = [], this.colorID = 0, this.fontScaleX = 1, this.fontScaleY = 1, this._curStrPos = 0, this.textAtlases = [], this.isoTextures = [], this.lastFont = null, this.fontSizeW = 0, this.fontSizeH = 0, this.fontSizeOffX = 0, this.fontSizeOffY = 0, this.renderPerChar = !0, this.tmpAtlasPos = new f(), this.textureMem = 0, i.TextAtlas = Gt;
            var t = !1,
                e = i.Laya.MiniAdpter;
            e && e.systemInfo && e.systemInfo.system && (t = "ios 10.1.1" === e.systemInfo.system.toLowerCase()), i.Browser.onMiniGame && !t && (Qt.isWan1Wan = !0), this.charRender = i.Render.isConchApp ? new qt() : new Kt(Qt.atlasWidth, Qt.atlasWidth, Qt.scaleFontWithCtx, !Qt.isWan1Wan, !1), Qt.textRenderInst = this, i.Laya.textRender = this, Qt.atlasWidth2 = Qt.atlasWidth * Qt.atlasWidth;
        }
        setFont(t) {
            if (this.lastFont != t) {
                this.lastFont = t;
                var e = this.getFontSizeInfo(t._family),
                    i = e >> 24,
                    s = e >> 16 & 255,
                    r = e >> 8 & 255,
                    a = 255 & e,
                    n = t._size / Qt.standardFontSize;
                this.fontSizeOffX = Math.ceil(i * n), this.fontSizeOffY = Math.ceil(s * n), this.fontSizeW = Math.ceil(r * n), this.fontSizeH = Math.ceil(a * n), t._font.indexOf("italic") >= 0 ? this.fontStr = t._font.replace("italic", "") : this.fontStr = t._font;
            }
        }
        getNextChar(t) {
            var e = t.length,
                i = this._curStrPos;
            if (i >= e) return null;
            for (var s = i, r = 0; s < e; s++) {
                var a = t.charCodeAt(s);
                if (a >>> 11 == 27) {
                    if (1 == r) break;
                    r = 1, s++;
                } else if (65038 === a || 65039 === a);
                else if (8205 == a) r = 2;
                else if (0 == r) r = 1;
                else if (1 == r) break;
            }
            return this._curStrPos = s, t.substring(i, s);
        }
        filltext(t, e, s, r, a, n, h, o, l, _ = 0) {
            if (!(e.length <= 0)) {
                var c = Vt.Parse(a),
                    u = 0;
                switch (l) {
                    case "center":
                        u = i.Context.ENUM_TEXTALIGN_CENTER;
                        break;
                    case "right":
                        u = i.Context.ENUM_TEXTALIGN_RIGHT;
                }
                this._fast_filltext(t, e, null, s, r, c, n, h, o, u, _);
            }
        }
        fillWords(t, e, i, s, r, a, n, h) {
            if (e && !(e.length <= 0)) {
                var o = Vt.Parse(r);
                this._fast_filltext(t, null, e, i, s, o, a, n, h, 0, 0);
            }
        }
        _fast_filltext(t, e, s, r, a, n, h, o, l, _, c = 0) {
            if (!(e && e.length < 1 || s && s.length < 1)) {
                if (l < 0 && (l = 0), this.setFont(n), this.fontScaleX = this.fontScaleY = 1, !i.Render.isConchApp && Qt.scaleFontWithCtx) {
                    var u = 1,
                        d = 1;
                    if (i.Render.isConchApp ? (u = t._curMat.getScaleX(), d = t._curMat.getScaleY()) : (u = t.getMatScaleX(), d = t.getMatScaleY()), u < 1e-4 || d < .1) return;
                    u > 1 && (this.fontScaleX = u), d > 1 && (this.fontScaleY = d);
                }
                n._italic && (t._italicDeg = 13);
                var p = e,
                    f = !s && e instanceof Ht,
                    g = e,
                    m = !!s,
                    v = f ? p.pageChars : [],
                    T = 0;
                switch (f ? (g = p._text, (T = p.width) < 0 && (T = p.width = this.charRender.getWidth(this.fontStr, g))) : T = g ? this.charRender.getWidth(this.fontStr, g) : 0, _) {
                    case i.Context.ENUM_TEXTALIGN_CENTER:
                        r -= T / 2;
                        break;
                    case i.Context.ENUM_TEXTALIGN_RIGHT:
                        r -= T;
                }
                p && v && this.hasFreedText(v) && (v = p.pageChars = []);
                var x = null,
                    y = this.renderPerChar = !f || Qt.forceSplitRender || m || f && p.splitRender;
                if (!v || v.length < 1)
                    if (y) {
                        var E, A = 0,
                            C = 0;
                        for (this._curStrPos = 0;;) {
                            if (m) {
                                var b = s[this._curStrPos++];
                                b ? (E = b.char, A = b.x, C = b.y) : E = null;
                            } else E = this.getNextChar(g);
                            if (!E) break;
                            if (!(x = this.getCharRenderInfo(E, n, h, o, l, !1))) break;
                            if (x.isSpace);
                            else {
                                var R = v[x.tex.id];
                                if (R) R = R.words;
                                else {
                                    var w = {
                                        texgen: x.tex.genID,
                                        tex: x.tex,
                                        words: []
                                    };
                                    v[x.tex.id] = w, R = w.words;
                                }
                                i.Render.isConchApp ? R.push({
                                    ri: x,
                                    x: A,
                                    y: C,
                                    w: x.bmpWidth / this.fontScaleX,
                                    h: x.bmpHeight / this.fontScaleY
                                }) : R.push({
                                    ri: x,
                                    x: A + 1 / this.fontScaleX,
                                    y: C,
                                    w: (x.bmpWidth - 2) / this.fontScaleX,
                                    h: (x.bmpHeight - 1) / this.fontScaleY
                                }), A += x.width;
                            }
                        }
                    } else {
                        var M = Qt.noAtlas || T * this.fontScaleX > Qt.atlasWidth;
                        x = this.getCharRenderInfo(g, n, h, o, l, M), i.Render.isConchApp ? v[0] = {
                            texgen: x.tex.genID,
                            tex: x.tex,
                            words: [{
                                ri: x,
                                x: 0,
                                y: 0,
                                w: x.bmpWidth / this.fontScaleX,
                                h: x.bmpHeight / this.fontScaleY
                            }]
                        } : v[0] = {
                            texgen: x.tex.genID,
                            tex: x.tex,
                            words: [{
                                ri: x,
                                x: 1 / this.fontScaleX,
                                y: 0 / this.fontScaleY,
                                w: (x.bmpWidth - 2) / this.fontScaleX,
                                h: (x.bmpHeight - 1) / this.fontScaleY
                            }]
                        };
                    }
                this._drawResortedWords(t, r, a, v), t._italicDeg = 0;
            }
        }
        _drawResortedWords(t, e, s, r) {
            for (var a = t._charSubmitCache && t._charSubmitCache._enbale, n = t._curMat, h = r.length, o = 0; o < h; o++) {
                var l = r[o];
                if (l) {
                    var _ = l.words,
                        c = _.length;
                    if (!(c <= 0))
                        for (var u = r[o].tex, d = 0; d < c; d++) {
                            var p = _[d],
                                f = p.ri;
                            if (!f.isSpace) {
                                if (f.touch(), t.drawTexAlign = !0, i.Render.isConchApp) t._drawTextureM(u.texture, e + p.x - f.orix, s + p.y - f.oriy, p.w, p.h, null, 1, f.uv);
                                else {
                                    let i = u;
                                    t._inner_drawTexture(i.texture, i.id, e + p.x - f.orix, s + p.y - f.oriy, p.w, p.h, n, f.uv, 1, a);
                                }
                                t.touches && t.touches.push(f);
                            }
                        }
                }
            }
        }
        hasFreedText(t) {
            for (var e = t.length, i = 0; i < e; i++) {
                var s = t[i];
                if (s) {
                    var r = s.tex;
                    if (r.__destroyed || r.genID != s.texgen) return !0;
                }
            }
            return !1;
        }
        getCharRenderInfo(t, e, s, r, a, n = !1) {
            var h = this.mapFont[e._family];
            null == h && (this.mapFont[e._family] = h = this.fontID++);
            var o = t + "_" + h + "_" + e._size + "_" + s;
            a > 0 && (o += "_" + r + a), e._bold && (o += "P"), 1 == this.fontScaleX && 1 == this.fontScaleY || (o += (20 * this.fontScaleX | 0) + "_" + (20 * this.fontScaleY | 0));
            var l = 0,
                _ = this.textAtlases.length,
                c = null,
                u = null;
            if (!n)
                for (l = 0; l < _; l++)
                    if (c = (u = this.textAtlases[l]).charMaps[o]) return c.touch(), c;
            c = new Xt(), this.charRender.scale(this.fontScaleX, this.fontScaleY), c.char = t, c.height = e._size;
            var d = i.Render.isConchApp ? 0 : e._size / 3 | 0,
                p = null,
                f = Math.ceil(this.charRender.getWidth(this.fontStr, t) * this.fontScaleX);
            if (f > this.charRender.canvasWidth && (this.charRender.canvasWidth = Math.min(2048, f + 2 * d)), n) {
                this.charRender.fontsz = e._size, p = this.charRender.getCharBmp(t, this.fontStr, a, s, r, c, d, d, d, d, null);
                var g = kt.getTextTexture(p.width, p.height);
                g.addChar(p, 0, 0, c.uv), c.tex = g, c.orix = d, c.oriy = d, g.ri = c, this.isoTextures.push(g);
            } else {
                var m = t.length,
                    v = 1 * a,
                    T = Math.ceil((this.fontSizeW + 2 * v) * this.fontScaleX),
                    x = Math.ceil((this.fontSizeH + 2 * v) * this.fontScaleY);
                Qt.imgdtRect[0] = (d - this.fontSizeOffX - v) * this.fontScaleX | 0, Qt.imgdtRect[1] = (d - this.fontSizeOffY - v) * this.fontScaleY | 0, this.renderPerChar || 1 == m ? (Qt.imgdtRect[2] = Math.max(f, T), Qt.imgdtRect[3] = Math.max(f, x)) : (Qt.imgdtRect[2] = -1, Qt.imgdtRect[3] = x), this.charRender.fontsz = e._size, p = this.charRender.getCharBmp(t, this.fontStr, a, s, r, c, d, d, d, d, Qt.imgdtRect), u = this.addBmpData(p, c), Qt.isWan1Wan ? (c.orix = d, c.oriy = d) : (c.orix = this.fontSizeOffX + v, c.oriy = this.fontSizeOffY + v), u.charMaps[o] = c;
            }
            return c;
        }
        addBmpData(t, e) {
            for (var i = t.width, s = t.height, r = this.textAtlases.length, a = null, n = !1, h = 0; h < r && !(n = (a = this.textAtlases[h]).getAEmpty(i, s, this.tmpAtlasPos)); h++);
            if (!n) {
                if (a = new Gt(), this.textAtlases.push(a), !(n = a.getAEmpty(i, s, this.tmpAtlasPos))) throw "err1";
                this.cleanAtlases();
            }
            return n && (a.texture.addChar(t, this.tmpAtlasPos.x, this.tmpAtlasPos.y, e.uv), e.tex = a.texture), a;
        }
        GC() {
            for (var t = 0, e = this.textAtlases.length, i = Qt.destroyAtlasDt, s = 0, r = lt.loopCount, a = -1, n = 0, h = null, o = null; t < e; t++) {
                if (h = (o = this.textAtlases[t]).texture) {
                    h.curUsedCovRate, s += h.curUsedCovRateAtlas;
                    var l = o.usedRate - h.curUsedCovRateAtlas;
                    n < l && (n = l, a = t);
                }
                r - o.texture.lastTouchTm > i && (Qt.showLog && console.log(o.texture.id), o.destroy(), this.textAtlases[t] = this.textAtlases[e - 1], e--, t--, a = -1);
            }
            for (this.textAtlases.length = e, e = this.isoTextures.length, t = 0; t < e; t++) r - (h = this.isoTextures[t]).lastTouchTm > Qt.destroyUnusedTextureDt && (h.ri.deleted = !0, h.ri.tex = null, h.destroy(), this.isoTextures[t] = this.isoTextures[e - 1], e--, t--);
            this.isoTextures.length = e;
            var _ = this.textAtlases.length > 1 && this.textAtlases.length - s >= 2;
            (Qt.atlasWidth * Qt.atlasWidth * 4 * this.textAtlases.length > Qt.cleanMem || _ || Qt.simClean) && (Qt.simClean = !1, Qt.showLog && console.log("清理使用率低的贴图。总使用率:", s, ":", this.textAtlases.length, "最差贴图:" + a), a >= 0 && ((o = this.textAtlases[a]).destroy(), this.textAtlases[a] = this.textAtlases[this.textAtlases.length - 1], this.textAtlases.length = this.textAtlases.length - 1)), kt.clean();
        }
        cleanAtlases() {}
        getCharBmp(t) {}
        checkBmpLine(t, e, i, s) {
            this.bmpData32.buffer != t.data.buffer && (this.bmpData32 = new Uint32Array(t.data.buffer));
            for (var r = t.width * e + i, a = i; a < s; a++)
                if (0 != this.bmpData32[r++]) return !0;
            return !1;
        }
        updateBbx(t, e, i = !1) {
            var s = t.width,
                r = t.height,
                a = 0,
                n = e[1],
                h = 0,
                o = n;
            if (this.checkBmpLine(t, n, 0, s))
                for (;;) {
                    if ((o = (n + h) / 2 | 0) + 1 >= n) {
                        e[1] = o;
                        break;
                    }
                    this.checkBmpLine(t, o, 0, s) ? n = o : h = o;
                }
            if (e[3] > r) e[3] = r;
            else if (o = n = e[3], h = r, this.checkBmpLine(t, n, 0, s))
                for (;;) {
                    if ((o = (n + h) / 2 | 0) - 1 <= n) {
                        e[3] = o;
                        break;
                    }
                    this.checkBmpLine(t, o, 0, s) ? n = o : h = o;
                }
            if (!i) {
                var l = e[0],
                    _ = s * e[1];
                for (o = e[1]; o < e[3]; o++) {
                    for (a = 0; a < l; a++)
                        if (0 != this.bmpData32[_ + a]) {
                            l = a;
                            break;
                        }
                    _ += s;
                }
                e[0] = l;
                var c = e[2];
                for (_ = s * e[1], o = e[1]; o < e[3]; o++) {
                    for (a = c; a < s; a++)
                        if (0 != this.bmpData32[_ + a]) {
                            c = a;
                            break;
                        }
                    _ += s;
                }
                e[2] = c;
            }
        }
        getFontSizeInfo(t) {
            var e = this.fontSizeInfo[t];
            if (null != e) return e;
            var s = "bold " + Qt.standardFontSize + "px " + t;
            if (Qt.isWan1Wan) {
                this.fontSizeW = 1.5 * this.charRender.getWidth(s, "有"), this.fontSizeH = 1.5 * Qt.standardFontSize;
                var r = this.fontSizeW << 8 | this.fontSizeH;
                return this.fontSizeInfo[t] = r, r;
            }
            Qt.pixelBBX[0] = Qt.standardFontSize / 2, Qt.pixelBBX[1] = Qt.standardFontSize / 2, Qt.pixelBBX[2] = Qt.standardFontSize, Qt.pixelBBX[3] = Qt.standardFontSize;
            var a = 16,
                n = 16;
            this.charRender.scale(1, 1), Qt.tmpRI.height = Qt.standardFontSize, this.charRender.fontsz = Qt.standardFontSize;
            var h = this.charRender.getCharBmp("g", s, 0, "red", null, Qt.tmpRI, a, n, 16, 16);
            i.Render.isConchApp && (h.data = new Uint8ClampedArray(h.data)), this.bmpData32 = new Uint32Array(h.data.buffer), this.updateBbx(h, Qt.pixelBBX, !1), h = this.charRender.getCharBmp("有", s, 0, "red", null, Qt.tmpRI, n, n, 16, 16), i.Render.isConchApp && (h.data = new Uint8ClampedArray(h.data)), this.bmpData32 = new Uint32Array(h.data.buffer), Qt.pixelBBX[2] < a + Qt.tmpRI.width && (Qt.pixelBBX[2] = a + Qt.tmpRI.width), this.updateBbx(h, Qt.pixelBBX, !1), i.Render.isConchApp && (a = 0, n = 0);
            var o = Math.max(a - Qt.pixelBBX[0], 0) << 24 | Math.max(n - Qt.pixelBBX[1], 0) << 16 | Qt.pixelBBX[2] - Qt.pixelBBX[0] << 8 | Qt.pixelBBX[3] - Qt.pixelBBX[1];
            return this.fontSizeInfo[t] = o, o;
        }
        printDbgInfo() {
            for (var t in console.log("图集个数:" + this.textAtlases.length + ",每个图集大小:" + Qt.atlasWidth + "x" + Qt.atlasWidth, " 用canvas:", Qt.isWan1Wan), console.log("图集占用空间:" + Qt.atlasWidth * Qt.atlasWidth * 4 / 1024 / 1024 * this.textAtlases.length + "M"), console.log("缓存用到的字体:"), this.mapFont) {
                var e = this.getFontSizeInfo(t),
                    i = e >> 24,
                    s = e >> 16 & 255,
                    r = e >> 8 & 255,
                    a = 255 & e;
                console.log("    " + t, " off:", i, s, " size:", r, a);
            }
            var n = 0;
            console.log("缓存数据:");
            var h = 0,
                o = 0;
            this.textAtlases.forEach(function(t) {
                var e = t.texture.id,
                    i = lt.loopCount - t.texture.lastTouchTm,
                    s = i > 0 ? i + "帧以前" : "当前帧";
                for (var r in h += t.texture.curUsedCovRate, o += t.texture.curUsedCovRateAtlas, console.log("--图集(id:" + e + ",当前使用率:" + (1e3 * t.texture.curUsedCovRate | 0) + "‰", "当前图集使用率:", (100 * t.texture.curUsedCovRateAtlas | 0) + "%", "图集使用率:", 100 * t.usedRate | 0, "%, 使用于:" + s + ")--:"), t.charMaps) {
                    var a = t.charMaps[r];
                    console.log("     off:", a.orix, a.oriy, " bmp宽高:", a.bmpWidth, a.bmpHeight, "无效:", a.deleted, "touchdt:", lt.loopCount - a.touchTick, "位置:", a.uv[0] * Qt.atlasWidth | 0, a.uv[1] * Qt.atlasWidth | 0, "字符:", a.char, "key:", r), n++;
                }
            }), console.log("独立贴图文字(" + this.isoTextures.length + "个):"), this.isoTextures.forEach(function(t) {
                console.log("    size:", t._texW, t._texH, "touch间隔:", lt.loopCount - t.lastTouchTm, "char:", t.ri.char);
            }), console.log("总缓存:", n, "总使用率:", h, "总当前图集使用率:", o);
        }
        showAtlas(t, e, s, r, a, n) {
            if (!this.textAtlases[t]) return console.log("没有这个图集"), null;
            var h = new i.Sprite(),
                o = this.textAtlases[t].texture,
                l = {
                    width: Qt.atlasWidth,
                    height: Qt.atlasWidth,
                    sourceWidth: Qt.atlasWidth,
                    sourceHeight: Qt.atlasWidth,
                    offsetX: 0,
                    offsetY: 0,
                    getIsReady: function() {
                        return !0;
                    },
                    _addReference: function() {},
                    _removeReference: function() {},
                    _getSource: function() {
                        return o._getSource();
                    },
                    bitmap: {
                        id: o.id
                    },
                    _uv: Yt.DEF_UV
                };
            return h.size = function(t, i) {
                return this.width = t, this.height = i, h.graphics.clear(), h.graphics.drawRect(0, 0, h.width, h.height, e), h.graphics.drawTexture(l, 0, 0, h.width, h.height), this;
            }, h.graphics.drawRect(0, 0, a, n, e), h.graphics.drawTexture(l, 0, 0, a, n), h.pos(s, r), i.stage.addChild(h), h;
        }
        filltext_native(t, e, s, r, a, n, h, o, l, _, c = 0) {
            if (!(e && e.length <= 0 || s && s.length < 1)) {
                var u = Vt.Parse(n),
                    d = 0;
                switch (_) {
                    case "center":
                        d = i.Context.ENUM_TEXTALIGN_CENTER;
                        break;
                    case "right":
                        d = i.Context.ENUM_TEXTALIGN_RIGHT;
                }
                return this._fast_filltext(t, e, s, r, a, u, h, o, l, d, c);
            }
        }
    }
    Qt.useOldCharBook = !1, Qt.atlasWidth = 2048, Qt.noAtlas = !1, Qt.forceSplitRender = !1, Qt.forceWholeRender = !1, Qt.scaleFontWithCtx = !0, Qt.standardFontSize = 32, Qt.destroyAtlasDt = 10, Qt.checkCleanTextureDt = 2e3, Qt.destroyUnusedTextureDt = 3e3, Qt.cleanMem = 104857600, Qt.isWan1Wan = !1, Qt.showLog = !1, Qt.debugUV = !1, Qt.atlasWidth2 = 4194304, Qt.tmpRI = new Xt(), Qt.pixelBBX = [0, 0, 0, 0], Qt.textRenderInst = null, Qt.imgdtRect = [0, 0, 0, 0], Qt.simClean = !1, kt.gTextRender = Qt;
    class Zt {
        constructor() {
            if (this._tmpMatrix = new p(), this._drawTexToDrawTri_Vert = new Float32Array(8), this._drawTexToDrawTri_Index = new Uint16Array([0, 1, 2, 0, 2, 3]), this._tempUV = new Float32Array(8), this._drawTriUseAbsMatrix = !1, this._id = ++Zt._COUNT, this._other = null, this._renderNextSubmitIndex = 0, this._path = null, this._drawCount = 1, this._width = Zt._MAXSIZE, this._height = Zt._MAXSIZE, this._renderCount = 0, this._isConvexCmd = !0, this._submits = null, this._curSubmit = null, this._submitKey = new k(), this._mesh = null, this._pathMesh = null, this._triangleMesh = null, this.meshlist = [], this._transedPoints = new Array(8), this._temp4Points = new Array(8), this._clipRect = Zt.MAXCLIPRECT, this._globalClipMatrix = new p(Zt._MAXSIZE, 0, 0, Zt._MAXSIZE, 0, 0), this._clipInCache = !1, this._clipInfoID = 0, this._clipID_Gen = 0, this._curMat = null, this._lastMatScaleX = 1, this._lastMatScaleY = 1, this._lastMat_a = 1, this._lastMat_b = 0, this._lastMat_c = 0, this._lastMat_d = 1, this._nBlendType = 0, this._save = null, this._targets = null, this._charSubmitCache = null, this._saveMark = null, this._shader2D = new wt(), this.sprite = null, this._italicDeg = 0, this._lastTex = null, this._fillColor = 0, this._flushCnt = 0, this.defTexture = null, this._colorFiler = null, this.drawTexAlign = !1, this._incache = !1, this.isMain = !1, Zt._contextcount++, Zt._textRender = Zt._textRender || new Qt(), !this.defTexture) {
                var t = new R(2, 2);
                t.setPixels(new Uint8Array(16)), t.lock = !0, this.defTexture = new Yt(t);
            }
            this._lastTex = this.defTexture, this.clear();
        }
        static __init__() {
            Zt.MAXCLIPRECT = new g(0, 0, Zt._MAXSIZE, Zt._MAXSIZE), $t.DEFAULT = new $t();
        }
        drawImage(...t) {}
        getImageData(...t) {}
        measureText(t) {
            return null;
        }
        setTransform(...t) {}
        $transform(t, e, i, s, r, a) {}
        get lineJoin() {
            return null;
        }
        set lineJoin(t) {}
        get lineCap() {
            return null;
        }
        set lineCap(t) {}
        get miterLimit() {
            return null;
        }
        set miterLimit(t) {}
        clearRect(t, e, i, s) {}
        _drawRect(t, e, i, s, r) {
            O.renderBatches++, r && (this.fillStyle = r), this.fillRect(t, e, i, s, null);
        }
        drawTexture2(t, e, i, s, r, a) {}
        transformByMatrix(t, e, i) {
            this.transform(t.a, t.b, t.c, t.d, t.tx + e, t.ty + i);
        }
        saveTransform(t) {
            this.save();
        }
        restoreTransform(t) {
            this.restore();
        }
        drawRect(t, e, i, s, r, a, n) {
            null != r && (this.fillStyle = r, this.fillRect(t, e, i, s)), null != a && (this.strokeStyle = a, this.lineWidth = n, this.strokeRect(t, e, i, s));
        }
        alpha(t) {
            this.globalAlpha *= t;
        }
        _transform(t, e, i) {
            this.translate(e, i), this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), this.translate(-e, -i);
        }
        _rotate(t, e, i) {
            this.translate(e, i), this.rotate(t), this.translate(-e, -i);
        }
        _scale(t, e, i, s) {
            this.translate(i, s), this.scale(t, e), this.translate(-i, -s);
        }
        _drawLine(t, e, i, s, r, a, n, h, o) {
            this.beginPath(), this.strokeStyle = n, this.lineWidth = h, this.moveTo(t + i, e + s), this.lineTo(t + r, e + a), this.stroke();
        }
        _drawLines(t, e, i, s, r, a) {
            this.beginPath(), this.strokeStyle = s, this.lineWidth = r;
            i.length;
            this.addPath(i.slice(), !1, !1, t, e), this.stroke();
        }
        drawCurves(t, e, i, s, r) {
            this.beginPath(), this.strokeStyle = s, this.lineWidth = r, this.moveTo(t + i[0], e + i[1]);
            for (var a = 2, n = i.length; a < n;) this.quadraticCurveTo(t + i[a++], e + i[a++], t + i[a++], e + i[a++]);
            this.stroke();
        }
        _fillAndStroke(t, e, i, s = !1) {
            null != t && (this.fillStyle = t, this.fill()), null != e && i > 0 && (this.strokeStyle = e, this.lineWidth = i, this.stroke());
        }
        _drawCircle(t, e, i, s, r, a, n) {
            O.renderBatches++, this.beginPath(!0), this.arc(t, e, i, 0, Zt.PI2), this.closePath(), this._fillAndStroke(s, r, a);
        }
        _drawPie(t, e, i, s, r, a, n, h, o) {
            this.beginPath(), this.moveTo(t, e), this.arc(t, e, i, s, r), this.closePath(), this._fillAndStroke(a, n, h);
        }
        _drawPoly(t, e, i, s, r, a, n, h) {
            i.length;
            this.beginPath(), this.addPath(i.slice(), !0, n, t, e), this.closePath(), this._fillAndStroke(s, r, a, n);
        }
        _drawPath(t, e, i, s, r) {
            this.beginPath();
            for (var a = 0, n = i.length; a < n; a++) {
                var h = i[a];
                switch (h[0]) {
                    case "moveTo":
                        this.moveTo(t + h[1], e + h[2]);
                        break;
                    case "lineTo":
                        this.lineTo(t + h[1], e + h[2]);
                        break;
                    case "arcTo":
                        this.arcTo(t + h[1], e + h[2], t + h[3], e + h[4], h[5]);
                        break;
                    case "closePath":
                        this.closePath();
                }
            }
            null != s && (this.fillStyle = s.fillStyle, this.fill()), null != r && (this.strokeStyle = r.strokeStyle, this.lineWidth = r.lineWidth || 1, this.lineJoin = r.lineJoin, this.lineCap = r.lineCap, this.miterLimit = r.miterLimit, this.stroke());
        }
        static set2DRenderConfig() {
            var t = m.instance;
            C.setBlend(t, !0), C.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_ALPHA), C.setDepthTest(t, !1), C.setCullFace(t, !1), C.setDepthMask(t, !0), C.setFrontFace(t, t.CCW), t.viewport(0, 0, M.width, M.height);
        }
        clearBG(t, e, i, s) {
            var r = C.mainContext;
            r.clearColor(t, e, i, s), r.clear(r.COLOR_BUFFER_BIT);
        }
        _getSubmits() {
            return this._submits;
        }
        _releaseMem(t = !1) {
            if (this._submits) {
                this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(), this._shader2D = null, this._charSubmitCache.clear();
                for (var e = 0, i = this._submits._length; e < i; e++) this._submits[e].releaseRender();
                var s;
                for (this._submits.length = 0, this._submits._length = 0, this._submits = null, this._curSubmit = null, this._path = null, this._save = null, e = 0, s = this.meshlist.length; e < s; e++) {
                    this.meshlist[e].destroy();
                }
                this.meshlist.length = 0, this.sprite = null, t || (this._targets && this._targets.destroy(), this._targets = null);
            }
        }
        destroy(t = !1) {
            --Zt._contextcount, this.sprite = null, this._releaseMem(t), this._charSubmitCache.destroy(), this._mesh.destroy(), t || (this._targets && this._targets.destroy(), this._targets = null);
        }
        clear() {
            this._submits || (this._other = $t.DEFAULT, this._curMat = p.create(), this._charSubmitCache = new Nt(), this._mesh = mt.getAMesh(this.isMain), this.meshlist.push(this._mesh), this._pathMesh = Tt.getAMesh(this.isMain), this.meshlist.push(this._pathMesh), this._triangleMesh = vt.getAMesh(this.isMain), this.meshlist.push(this._triangleMesh), this._submits = [], this._save = [nt.Create(this)], this._save.length = 10, this._shader2D = new wt()), this._submitKey.clear(), this._mesh.clearVB(), this._renderCount++, this._drawCount = 1, this._other = $t.DEFAULT, this._other.lineWidth = this._shader2D.ALPHA = 1, this._nBlendType = 0, this._clipRect = Zt.MAXCLIPRECT, this._curSubmit = st.RENDERBASE, st.RENDERBASE._ref = 16777215, st.RENDERBASE._numEle = 0, this._shader2D.fillStyle = this._shader2D.strokeStyle = tt.DEFAULT;
            for (var t = 0, e = this._submits._length; t < e; t++) this._submits[t].releaseRender();
            this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0], this._save._length = 1;
        }
        size(t, e) {
            this._width == t && this._height == e || (this._width = t, this._height = e, this._targets && (this._targets.destroy(), this._targets = new S(t, e, b.FORMAT_R8G8B8A8, -1)), this.isMain && (C.mainContext.viewport(0, 0, t, e), M.width = t, M.height = e)), 0 === t && 0 === e && this._releaseMem();
        }
        set asBitmap(t) {
            if (t) {
                if (this._targets || (this._targets = new S(this._width, this._height, b.FORMAT_R8G8B8A8, -1)), !this._width || !this._height) throw Error("asBitmap no size!");
            } else this._targets && this._targets.destroy(), this._targets = null;
        }
        getMatScaleX() {
            return this._lastMat_a == this._curMat.a && this._lastMat_b == this._curMat.b ? this._lastMatScaleX : (this._lastMatScaleX = this._curMat.getScaleX(), this._lastMat_a = this._curMat.a, this._lastMat_b = this._curMat.b, this._lastMatScaleX);
        }
        getMatScaleY() {
            return this._lastMat_c == this._curMat.c && this._lastMat_d == this._curMat.d ? this._lastMatScaleY : (this._lastMatScaleY = this._curMat.getScaleY(), this._lastMat_c = this._curMat.c, this._lastMat_d = this._curMat.d, this._lastMatScaleY);
        }
        setFillColor(t) {
            this._fillColor = t;
        }
        getFillColor() {
            return this._fillColor;
        }
        set fillStyle(t) {
            this._shader2D.fillStyle.equal(t) || (rt.save(this, rt.TYPE_FILESTYLE, this._shader2D, !1), this._shader2D.fillStyle = tt.create(t), this._submitKey.other = -this._shader2D.fillStyle.toInt());
        }
        get fillStyle() {
            return this._shader2D.fillStyle;
        }
        set globalAlpha(t) {
            (t = Math.floor(1e3 * t) / 1e3) != this._shader2D.ALPHA && (rt.save(this, rt.TYPE_ALPHA, this._shader2D, !1), this._shader2D.ALPHA = t);
        }
        get globalAlpha() {
            return this._shader2D.ALPHA;
        }
        set textAlign(t) {
            this._other.textAlign === t || (this._other = this._other.make(), rt.save(this, rt.TYPE_TEXTALIGN, this._other, !1), this._other.textAlign = t);
        }
        get textAlign() {
            return this._other.textAlign;
        }
        set textBaseline(t) {
            this._other.textBaseline === t || (this._other = this._other.make(), rt.save(this, rt.TYPE_TEXTBASELINE, this._other, !1), this._other.textBaseline = t);
        }
        get textBaseline() {
            return this._other.textBaseline;
        }
        set globalCompositeOperation(t) {
            var e = P.TOINT[t];
            null == e || this._nBlendType === e || (rt.save(this, rt.TYPE_GLOBALCOMPOSITEOPERATION, this, !0), this._curSubmit = st.RENDERBASE, this._nBlendType = e);
        }
        get globalCompositeOperation() {
            return P.NAMES[this._nBlendType];
        }
        set strokeStyle(t) {
            this._shader2D.strokeStyle.equal(t) || (rt.save(this, rt.TYPE_STROKESTYLE, this._shader2D, !1), this._shader2D.strokeStyle = tt.create(t), this._submitKey.other = -this._shader2D.strokeStyle.toInt());
        }
        get strokeStyle() {
            return this._shader2D.strokeStyle;
        }
        translate(t, e) {
            0 === t && 0 === e || (ot.save(this), this._curMat._bTransform ? (ht.save(this), this._curMat.tx += t * this._curMat.a + e * this._curMat.c, this._curMat.ty += t * this._curMat.b + e * this._curMat.d) : (this._curMat.tx = t, this._curMat.ty = e));
        }
        set lineWidth(t) {
            this._other.lineWidth === t || (this._other = this._other.make(), rt.save(this, rt.TYPE_LINEWIDTH, this._other, !1), this._other.lineWidth = t);
        }
        get lineWidth() {
            return this._other.lineWidth;
        }
        save() {
            this._save[this._save._length++] = nt.Create(this);
        }
        restore() {
            var t = this._save._length,
                e = this._nBlendType;
            if (!(t < 1)) {
                for (var i = t - 1; i >= 0; i--) {
                    var s = this._save[i];
                    if (s.restore(this), s.isSaveMark()) return void(this._save._length = i);
                }
                e != this._nBlendType && (this._curSubmit = st.RENDERBASE);
            }
        }
        set font(t) {
            this._other = this._other.make(), rt.save(this, rt.TYPE_FONT, this._other, !1);
        }
        fillText(t, e, i, s, r, a) {
            this._fillText(t, null, e, i, s, r, null, 0, null);
        }
        _fillText(t, e, i, s, r, a, n, h, o, l = 0) {
            t ? Zt._textRender.filltext(this, t, i, s, r, a, n, h, o, l) : e && Zt._textRender.fillWords(this, e, i, s, r, a, n, h);
        }
        _fast_filltext(t, e, i, s, r, a, n, h, o = 0) {
            Zt._textRender._fast_filltext(this, t, null, e, i, s, r, a, n, h, o);
        }
        fillWords(t, e, i, s, r) {
            this._fillText(null, t, e, i, s, r, null, -1, null, 0);
        }
        fillBorderWords(t, e, i, s, r, a, n) {
            this._fillBorderText(null, t, e, i, s, r, a, n, null);
        }
        drawText(t, e, i, s, r, a) {
            this._fillText(t, null, e, i, s, V.create(r).strColor, null, -1, a);
        }
        strokeWord(t, e, i, s, r, a, n) {
            this._fillText(t, null, e, i, s, null, V.create(r).strColor, a || 1, n);
        }
        fillBorderText(t, e, i, s, r, a, n, h) {
            this._fillBorderText(t, null, e, i, s, V.create(r).strColor, V.create(a).strColor, n, h);
        }
        _fillBorderText(t, e, i, s, r, a, n, h, o) {
            this._fillText(t, e, i, s, r, a, n, h || 1, o);
        }
        _fillRect(t, e, i, s, r) {
            var a = this._curSubmit,
                n = a && a._key.submitType === st.KEY_DRAWTEXTURE && a._key.blendShader === this._nBlendType;
            this._mesh.vertNum + 4 > Zt._MAXVERTNUM && (this._mesh = mt.getAMesh(this.isMain), this.meshlist.push(this._mesh), n = !1), n && (n = n && this.isSameClipInfo(a)), this.transformQuad(t, e, i, s, 0, this._curMat, this._transedPoints), this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, Yt.NO_UV, r, !1), n || (a = this._curSubmit = Ft.create(this, this._mesh, U.create(L.TEXTURE2D, 0)), this._submits[this._submits._length++] = a, this._copyClipInfo(a, this._globalClipMatrix), a.shaderValue.textureHost = this._lastTex, a._key.other = this._lastTex && this._lastTex.bitmap ? this._lastTex.bitmap.id : -1, a._renderType = st.TYPE_TEXTURE), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4);
        }
        fillRect(t, e, i, s, r) {
            var a = r ? tt.create(r) : this._shader2D.fillStyle,
                n = this.mixRGBandAlpha(a.toInt());
            this._fillRect(t, e, i, s, n);
        }
        fillTexture(t, e, s, r, a, n, h, o) {
            t._getSource() ? this._fillTexture(t, t.width, t.height, t.uvrect, e, s, r, a, n, h.x, h.y) : this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
        }
        _fillTexture(t, e, i, s, r, a, n, h, o, l, _) {
            var c = this._curSubmit;
            this._mesh.vertNum + 4 > Zt._MAXVERTNUM && (this._mesh = mt.getAMesh(this.isMain), this.meshlist.push(this._mesh));
            var u = !0,
                d = !0;
            switch (o) {
                case "repeat":
                    break;
                case "repeat-x":
                    d = !1;
                    break;
                case "repeat-y":
                    u = !1;
                    break;
                case "no-repeat":
                    u = d = !1;
            }
            var p = this._temp4Points,
                f = 0,
                g = 0,
                m = 0,
                v = 0,
                T = 0,
                x = 0;
            if (l < 0 ? (m = r, f = -l % e / e) : m = r + l, _ < 0 ? (v = a, g = -_ % i / i) : v = a + _, T = r + n, x = a + h, !u && (T = Math.min(T, r + l + e)), !d && (x = Math.min(x, a + _ + i)), !(T < r || x < a || m > T || v > x)) {
                var y = (T - r - l) / e,
                    E = (x - a - _) / i;
                if (this.transformQuad(m, v, T - m, x - v, 0, this._curMat, this._transedPoints), p[0] = f, p[1] = g, p[2] = y, p[3] = g, p[4] = y, p[5] = E, p[6] = f, p[7] = E, !this.clipedOff(this._transedPoints)) {
                    var A = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA);
                    this._mesh.addQuad(this._transedPoints, p, A, !0);
                    var C = U.create(L.TEXTURE2D, 0);
                    C.defines.add(L.FILLTEXTURE), C.u_TexRange = s, c = this._curSubmit = Ft.create(this, this._mesh, C), this._submits[this._submits._length++] = c, this._copyClipInfo(c, this._globalClipMatrix), c.shaderValue.textureHost = t, c._renderType = st.TYPE_TEXTURE, this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4;
                }
                this.breakNextMerge();
            }
        }
        setColorFilter(t) {
            rt.save(this, rt.TYPE_COLORFILTER, this, !0), this._colorFiler = t, this._curSubmit = st.RENDERBASE;
        }
        drawTexture(t, e, i, s, r) {
            this._drawTextureM(t, e, i, s, r, null, 1, null);
        }
        drawTextures(t, e, s, r) {
            if (t._getSource())
                for (var a = e.length / 2, n = 0, h = t.bitmap.id, o = 0; o < a; o++) this._inner_drawTexture(t, h, e[n++] + s, e[n++] + r, 0, 0, null, null, 1, !1);
            else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
        }
        _drawTextureAddSubmit(t, e) {
            var i = null;
            i = Ft.create(this, this._mesh, U.create(L.TEXTURE2D, 0)), this._submits[this._submits._length++] = i, i.shaderValue.textureHost = e, i._key.other = t, i._renderType = st.TYPE_TEXTURE, this._curSubmit = i;
        }
        _drawTextureM(t, e, i, s, r, a, n, h) {
            var o = this.sprite;
            return !!t._getSource(function() {
                o && o.repaint();
            }) && this._inner_drawTexture(t, t.bitmap.id, e, i, s, r, a, h, n, !1);
        }
        _drawRenderTexture(t, e, i, s, r, a, n, h) {
            return this._inner_drawTexture(t, -1, e, i, s, r, a, h, 1, !1);
        }
        submitDebugger() {
            this._submits[this._submits._length++] = G.create([], function() {}, this);
        }
        _copyClipInfo(t, e) {
            var i = t.shaderValue.clipMatDir;
            i[0] = e.a, i[1] = e.b, i[2] = e.c, i[3] = e.d;
            var s = t.shaderValue.clipMatPos;
            s[0] = e.tx, s[1] = e.ty, t.clipInfoID = this._clipInfoID, this._clipInCache && (t.shaderValue.clipOff[0] = 1);
        }
        isSameClipInfo(t) {
            return t.clipInfoID === this._clipInfoID;
        }
        _useNewTex2DSubmit(t, e) {
            this._mesh.vertNum + e > Zt._MAXVERTNUM && (this._mesh = mt.getAMesh(this.isMain), this.meshlist.push(this._mesh));
            var i = Ft.create(this, this._mesh, U.create(L.TEXTURE2D, 0));
            this._submits[this._submits._length++] = this._curSubmit = i, i.shaderValue.textureHost = t, this._copyClipInfo(i, this._globalClipMatrix);
        }
        _drawTexRect(t, e, i, s, r) {
            this.transformQuad(t, e, i, s, this._italicDeg, this._curMat, this._transedPoints);
            var a = this._transedPoints;
            a[0] = a[0] + .5 | 0, a[1] = a[1] + .5 | 0, a[2] = a[2] + .5 | 0, a[3] = a[3] + .5 | 0, a[4] = a[4] + .5 | 0, a[5] = a[5] + .5 | 0, a[6] = a[6] + .5 | 0, a[7] = a[7] + .5 | 0, this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, r, this._fillColor, !0), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4);
        }
        drawCallOptimize(t) {
            return this._charSubmitCache.enable(t, this), t;
        }
        _inner_drawTexture(t, e, i, s, r, a, n, h, o, l) {
            var _ = this._curSubmit._key;
            if (h = h || t._uv, _.submitType === st.KEY_TRIANGLES && _.other === e) {
                var c = this._drawTexToDrawTri_Vert;
                c[0] = i, c[1] = s, c[2] = i + r, c[3] = s, c[4] = i + r, c[5] = s + a, c[6] = i, c[7] = s + a, this._drawTriUseAbsMatrix = !0;
                var u = this._tempUV;
                return u[0] = h[0], u[1] = h[1], u[2] = h[2], u[3] = h[3], u[4] = h[4], u[5] = h[5], u[6] = h[6], u[7] = h[7], this.drawTriangles(t, 0, 0, c, u, this._drawTexToDrawTri_Index, n, o, null, null), this._drawTriUseAbsMatrix = !1, !0;
            }
            var d = this._mesh,
                p = this._curSubmit,
                f = l ? this._charSubmitCache.getPos() : this._transedPoints;
            if (this.transformQuad(i, s, r || t.width, a || t.height, this._italicDeg, n || this._curMat, f), this.drawTexAlign) {
                var g = Math.round;
                f[0] = g(f[0]), f[1] = g(f[1]), f[2] = g(f[2]), f[3] = g(f[3]), f[4] = g(f[4]), f[5] = g(f[5]), f[6] = g(f[6]), f[7] = g(f[7]), this.drawTexAlign = !1;
            }
            var m = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * o);
            if (l) return this._charSubmitCache.add(this, t, e, f, h, m), !0;
            this._drawCount++;
            var v = e >= 0 && _.submitType === st.KEY_DRAWTEXTURE && _.other === e;
            return v && (v = v && this.isSameClipInfo(p)), this._lastTex = t, d.vertNum + 4 > Zt._MAXVERTNUM && (d = this._mesh = mt.getAMesh(this.isMain), this.meshlist.push(d), v = !1), d.addQuad(f, h, m, !0), v || (this._submits[this._submits._length++] = this._curSubmit = p = Ft.create(this, d, U.create(L.TEXTURE2D, 0)), p.shaderValue.textureHost = t, p._key.other = e, this._copyClipInfo(p, this._globalClipMatrix)), p._numEle += 6, d.indexNum += 6, d.vertNum += 4, !0;
        }
        transform4Points(t, e, i) {
            var s = e.tx,
                r = e.ty,
                a = e.a,
                n = e.b,
                h = e.c,
                o = e.d,
                l = t[0],
                _ = t[1],
                c = t[2],
                u = t[3],
                d = t[4],
                p = t[5],
                f = t[6],
                g = t[7];
            e._bTransform ? (i[0] = l * a + _ * h + s, i[1] = l * n + _ * o + r, i[2] = c * a + u * h + s, i[3] = c * n + u * o + r, i[4] = d * a + p * h + s, i[5] = d * n + p * o + r, i[6] = f * a + g * h + s, i[7] = f * n + g * o + r) : (i[0] = l + s, i[1] = _ + r, i[2] = c + s, i[3] = u + r, i[4] = d + s, i[5] = p + r, i[6] = f + s, i[7] = g + r);
        }
        clipedOff(t) {
            return this._clipRect.width <= 0 || this._clipRect.height <= 0;
        }
        transformQuad(t, e, i, s, r, a, n) {
            var h = 0;
            0 != r && (h = Math.tan(r * Math.PI / 180) * s);
            var o = t + i,
                l = e + s,
                _ = a.tx,
                c = a.ty,
                u = a.a,
                d = a.b,
                p = a.c,
                f = a.d,
                g = t + h,
                m = e,
                v = o + h,
                T = e,
                x = o,
                y = l,
                E = t,
                A = l;
            a._bTransform ? (n[0] = g * u + m * p + _, n[1] = g * d + m * f + c, n[2] = v * u + T * p + _, n[3] = v * d + T * f + c, n[4] = x * u + y * p + _, n[5] = x * d + y * f + c, n[6] = E * u + A * p + _, n[7] = E * d + A * f + c) : (n[0] = g + _, n[1] = m + c, n[2] = v + _, n[3] = T + c, n[4] = x + _, n[5] = y + c, n[6] = E + _, n[7] = A + c);
        }
        pushRT() {
            this.addRenderObject(G.create(null, S.pushRT, this));
        }
        popRT() {
            this.addRenderObject(G.create(null, S.popRT, this)), this.breakNextMerge();
        }
        useRT(t) {
            this.addRenderObject(G.create([t], function(t) {
                if (!t) throw "error useRT";
                t.start(), t.clear(0, 0, 0, 0);
            }, this)), this.breakNextMerge();
        }
        RTRestore(t) {
            this.addRenderObject(G.create([t], function(t) {
                t.restore();
            }, this)), this.breakNextMerge();
        }
        breakNextMerge() {
            this._curSubmit = st.RENDERBASE;
        }
        _repaintSprite() {
            this.sprite && this.sprite.repaint();
        }
        drawTextureWithTransform(t, e, i, s, r, a, n, h, o, l, _ = null, c) {
            var u = null,
                d = this._curMat;
            l && (u = this.globalCompositeOperation, this.globalCompositeOperation = l);
            var f = this._colorFiler;
            if (_ && this.setColorFilter(_), !a) return this._drawTextureM(t, e + n, i + h, s, r, d, o, c), l && (this.globalCompositeOperation = u), void(_ && this.setColorFilter(f));
            var g = this._tmpMatrix;
            g.a = a.a, g.b = a.b, g.c = a.c, g.d = a.d, g.tx = a.tx + n, g.ty = a.ty + h, g._bTransform = a._bTransform, a && d._bTransform ? (p.mul(g, d, g), (a = g)._bTransform = !0) : (g.tx += d.tx, g.ty += d.ty, a = g), this._drawTextureM(t, e, i, s, r, a, o, c), l && (this.globalCompositeOperation = u), _ && this.setColorFilter(f);
        }
        _flushToTarget(t, e) {
            M.worldScissorTest = !1;
            var i = m.instance;
            i.disable(i.SCISSOR_TEST);
            var s = M.worldAlpha,
                r = M.worldMatrix4,
                a = M.worldMatrix;
            M.worldMatrix = p.EMPTY, M.restoreTempArray(), M.worldMatrix4 = M.TEMPMAT4_ARRAY, M.worldAlpha = 1, w.activeShader = null, e.start(), t._submits._length > 0 && e.clear(0, 0, 0, 0), t._curSubmit = st.RENDERBASE, t.flush(), t.clear(), e.restore(), t._curSubmit = st.RENDERBASE, w.activeShader = null, M.worldAlpha = s, M.worldMatrix4 = r, M.worldMatrix = a;
        }
        drawCanvas(t, e, i, s, r) {
            if (t) {
                var a, n = t.context;
                if (n._targets) n._submits._length > 0 && (a = G.create([n, n._targets], this._flushToTarget, this), this._submits[this._submits._length++] = a), this._drawRenderTexture(n._targets, e, i, s, r, null, 1, S.flipyuv), this._curSubmit = st.RENDERBASE;
                else {
                    var h = t;
                    h.touches && h.touches.forEach(function(t) {
                        t.touch();
                    }), a = Ot.create(t, this._shader2D.ALPHA, this._shader2D.filters), this._submits[this._submits._length++] = a, a._key.clear();
                    var o = a._matrix;
                    this._curMat.copyTo(o);
                    var l = o.tx,
                        _ = o.ty;
                    o.tx = o.ty = 0, o.transformPoint(f.TEMP.setTo(e, i)), o.translate(f.TEMP.x + l, f.TEMP.y + _), p.mul(h.invMat, o, o), this._curSubmit = st.RENDERBASE;
                }
            }
        }
        drawTarget(t, e, i, s, r, a, n, h = null, o = -1) {
            if (this._drawCount++, this._mesh.vertNum + 4 > Zt._MAXVERTNUM && (this._mesh = mt.getAMesh(this.isMain), this.meshlist.push(this._mesh)), this.transformQuad(e, i, s, r, 0, a || this._curMat, this._transedPoints), !this.clipedOff(this._transedPoints)) {
                this._mesh.addQuad(this._transedPoints, h || Yt.DEF_UV, 4294967295, !0);
                var l = this._curSubmit = Bt.create(this, this._mesh, n, t);
                return l.blendType = -1 == o ? this._nBlendType : o, this._copyClipInfo(l, this._globalClipMatrix), l._numEle = 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, this._submits[this._submits._length++] = l, this._curSubmit = st.RENDERBASE, !0;
            }
            return this._curSubmit = st.RENDERBASE, !1;
        }
        drawTriangles(t, e, s, r, a, n, h, o, l, _) {
            if (t._getSource()) {
                this._drawCount++;
                var c = this._tmpMatrix,
                    u = this._triangleMesh,
                    d = null,
                    f = !1;
                l && (d = this._colorFiler, this._colorFiler = l, this._curSubmit = st.RENDERBASE, f = d != l);
                var g = t.bitmap,
                    m = this._curSubmit._key,
                    v = m.submitType === st.KEY_TRIANGLES && m.other === g.id && m.blendShader == this._nBlendType;
                if (u.vertNum + r.length / 2 > Zt._MAXVERTNUM && (u = this._triangleMesh = vt.getAMesh(this.isMain), this.meshlist.push(u), v = !1), !v) {
                    var T = this._curSubmit = Ft.create(this, u, U.create(L.TEXTURE2D, 0));
                    T.shaderValue.textureHost = t, T._renderType = st.TYPE_TEXTURE, T._key.submitType = st.KEY_TRIANGLES, T._key.other = g.id, this._copyClipInfo(T, this._globalClipMatrix), this._submits[this._submits._length++] = T;
                }
                var x = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * o);
                this._drawTriUseAbsMatrix ? u.addData(r, a, n, h, x) : (h ? (c.a = h.a, c.b = h.b, c.c = h.c, c.d = h.d, c.tx = h.tx + e, c.ty = h.ty + s) : (c.a = 1, c.b = 0, c.c = 0, c.d = 1, c.tx = e, c.ty = s), p.mul(c, this._curMat, c), u.addData(r, a, n, c, x)), this._curSubmit._numEle += n.length, f && (this._colorFiler = d, this._curSubmit = st.RENDERBASE);
            } else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
        }
        transform(t, e, i, s, r, a) {
            ht.save(this), p.mul(p.TEMP.setTo(t, e, i, s, r, a), this._curMat, this._curMat), this._curMat._checkTransform();
        }
        _transformByMatrix(t, e, i) {
            t.setTranslate(e, i), p.mul(t, this._curMat, this._curMat), t.setTranslate(0, 0), this._curMat._bTransform = !0;
        }
        setTransformByMatrix(t) {
            t.copyTo(this._curMat);
        }
        rotate(t) {
            ht.save(this), this._curMat.rotateEx(t);
        }
        scale(t, e) {
            ht.save(this), this._curMat.scaleEx(t, e);
        }
        clipRect(t, e, i, s) {
            at.save(this), this._clipRect == Zt.MAXCLIPRECT ? this._clipRect = new g(t, e, i, s) : (this._clipRect.width = i, this._clipRect.height = s, this._clipRect.x = t, this._clipRect.y = e), this._clipID_Gen++, this._clipID_Gen %= 1e4, this._clipInfoID = this._clipID_Gen;
            var r = this._globalClipMatrix,
                a = r.tx,
                n = r.ty,
                h = a + r.a,
                o = n + r.d;
            if (this._clipRect.width >= Zt._MAXSIZE ? (r.a = r.d = Zt._MAXSIZE, r.b = r.c = r.tx = r.ty = 0) : (this._curMat._bTransform ? (r.tx = this._clipRect.x * this._curMat.a + this._clipRect.y * this._curMat.c + this._curMat.tx, r.ty = this._clipRect.x * this._curMat.b + this._clipRect.y * this._curMat.d + this._curMat.ty, r.a = this._clipRect.width * this._curMat.a, r.b = this._clipRect.width * this._curMat.b, r.c = this._clipRect.height * this._curMat.c, r.d = this._clipRect.height * this._curMat.d) : (r.tx = this._clipRect.x + this._curMat.tx, r.ty = this._clipRect.y + this._curMat.ty, r.a = this._clipRect.width, r.b = r.c = 0, r.d = this._clipRect.height), this._incache && (this._clipInCache = !0)), r.a > 0 && r.d > 0) {
                var l = r.tx + r.a,
                    _ = r.ty + r.d;
                l <= a || _ <= n || r.tx >= h || r.ty >= o ? (r.a = -.1, r.d = -.1) : (r.tx < a && (r.a -= a - r.tx, r.tx = a), l > h && (r.a -= l - h), r.ty < n && (r.d -= n - r.ty, r.ty = n), _ > o && (r.d -= _ - o), r.a <= 0 && (r.a = -.1), r.d <= 0 && (r.d = -.1));
            }
        }
        drawMesh(t, e, i, s, r, a, n, h, o = 0) {}
        addRenderObject(t) {
            this._submits[this._submits._length++] = t;
        }
        submitElement(t, e) {
            this.isMain;
            var i = this._submits,
                s = i._length;
            e < 0 && (e = i._length);
            for (var r = st.RENDERBASE; t < e;) this._renderNextSubmitIndex = t + 1, i[t] !== st.RENDERBASE ? (st.preRender = r, t += (r = i[t]).renderSubmit()) : t++;
            return s;
        }
        flush() {
            this._clipID_Gen = 0;
            var t = this.submitElement(0, this._submits._length);
            this._path && this._path.reset(), Mt.instance && Mt.getInstance().reset(), this._curSubmit = st.RENDERBASE;
            for (var e = 0, i = this.meshlist.length; e < i; e++) {
                var s = this.meshlist[e];
                s.canReuse ? s.releaseMesh() : s.destroy();
            }
            return this.meshlist.length = 0, this._mesh = mt.getAMesh(this.isMain), this._pathMesh = Tt.getAMesh(this.isMain), this._triangleMesh = vt.getAMesh(this.isMain), this.meshlist.push(this._mesh, this._pathMesh, this._triangleMesh), this._flushCnt++, this._flushCnt % 60 == 0 && this.isMain && Qt.textRenderInst && Qt.textRenderInst.GC(), t;
        }
        beginPath(t = !1) {
            this._getPath().beginPath(t);
        }
        closePath() {
            this._path.closePath();
        }
        addPath(t, e, i, s, r) {
            for (var a = 0, n = 0, h = t.length / 2; n < h; n++) {
                var o = t[a] + s,
                    l = t[a + 1] + r;
                t[a] = o, t[a + 1] = l, a += 2;
            }
            this._getPath().push(t, i);
        }
        fill() {
            var t = this._curMat,
                e = this._getPath(),
                i = this._curSubmit,
                s = i._key.submitType === st.KEY_VG && i._key.blendShader === this._nBlendType;
            s && (s = s && this.isSameClipInfo(i)), s || (this._curSubmit = this.addVGSubmit(this._pathMesh));
            for (var r, a = this.mixRGBandAlpha(this.fillStyle.toInt()), n = 0, h = 0, o = e.paths.length; h < o; h++) {
                var l = e.paths[h],
                    _ = l.path.length / 2;
                if (!(_ < 3 || 3 == _ && !l.convex)) {
                    var c, u, d, p, f = l.path.concat(),
                        g = 0;
                    if (t._bTransform)
                        for (g = 0; g < _; g++) u = (c = g << 1) + 1, d = f[c], p = f[u], f[c] = t.a * d + t.c * p + t.tx, f[u] = t.b * d + t.d * p + t.ty;
                    else
                        for (g = 0; g < _; g++) u = (c = g << 1) + 1, d = f[c], p = f[u], f[c] = d + t.tx, f[u] = p + t.ty;
                    this._pathMesh.vertNum + _ > Zt._MAXVERTNUM && (this._curSubmit._numEle += n, n = 0, this._pathMesh = Tt.getAMesh(this.isMain), this._curSubmit = this.addVGSubmit(this._pathMesh));
                    var m = this._pathMesh.vertNum;
                    if (l.convex) {
                        var v = _ - 2;
                        r = new Array(3 * v);
                        for (var T = 0, x = 0; x < v; x++) r[T++] = m, r[T++] = x + 1 + m, r[T++] = x + 2 + m;
                    } else if (r = Pt.earcut(f, null, 2), m > 0)
                        for (var y = 0; y < r.length; y++) r[y] += m;
                    this._pathMesh.addVertAndIBToMesh(this, f, a, r), n += r.length;
                }
            }
            this._curSubmit._numEle += n;
        }
        addVGSubmit(t) {
            var e = Lt.createShape(this, t, 0, U.create(L.PRIMITIVE, 0));
            return e._key.submitType = st.KEY_VG, this._submits[this._submits._length++] = e, this._copyClipInfo(e, this._globalClipMatrix), e;
        }
        stroke() {
            if (this.lineWidth > 0) {
                var t = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                    e = this._getPath(),
                    i = this._curSubmit,
                    s = i._key.submitType === st.KEY_VG && i._key.blendShader === this._nBlendType;
                s && (s = s && this.isSameClipInfo(i)), s || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                for (var r = 0, a = 0, n = e.paths.length; a < n; a++) {
                    var h = e.paths[a];
                    if (!(h.path.length <= 0)) {
                        var o = [],
                            l = [],
                            _ = 2 * h.path.length;
                        if (!(_ < 2)) {
                            this._pathMesh.vertNum + _ > Zt._MAXVERTNUM && (this._curSubmit._numEle += r, r = 0, this._pathMesh = Tt.getAMesh(this.isMain), this.meshlist.push(this._pathMesh), this._curSubmit = this.addVGSubmit(this._pathMesh)), St.createLine2(h.path, o, this.lineWidth, this._pathMesh.vertNum, l, h.loop);
                            var c, u, d, p, f = l.length / 2,
                                g = this._curMat,
                                m = 0;
                            if (g._bTransform)
                                for (m = 0; m < f; m++) u = (c = m << 1) + 1, d = l[c], p = l[u], l[c] = g.a * d + g.c * p + g.tx, l[u] = g.b * d + g.d * p + g.ty;
                            else
                                for (m = 0; m < f; m++) u = (c = m << 1) + 1, d = l[c], p = l[u], l[c] = d + g.tx, l[u] = p + g.ty;
                            this._pathMesh.addVertAndIBToMesh(this, l, t, o), r += o.length;
                        }
                    }
                }
                this._curSubmit._numEle += r;
            }
        }
        moveTo(t, e) {
            var i = this._getPath();
            i.newPath(), i._lastOriX = t, i._lastOriY = e, i.addPoint(t, e);
        }
        lineTo(t, e) {
            var i = this._getPath();
            Math.abs(t - i._lastOriX) < .001 && Math.abs(e - i._lastOriY) < .001 || (i._lastOriX = t, i._lastOriY = e, i.addPoint(t, e));
        }
        arcTo(t, e, i, s, r) {
            var a = 0,
                n = 0,
                h = 0,
                o = this._path._lastOriX - t,
                l = this._path._lastOriY - e,
                _ = Math.sqrt(o * o + l * l);
            if (!(_ <= 1e-6)) {
                var c = o / _,
                    u = l / _,
                    d = i - t,
                    p = s - e,
                    f = d * d + p * p,
                    g = Math.sqrt(f);
                if (!(g <= 1e-6)) {
                    var m = d / g,
                        v = p / g,
                        T = c + m,
                        x = u + v,
                        y = Math.sqrt(T * T + x * x);
                    if (!(y <= 1e-6)) {
                        var E = T / y,
                            A = x / y,
                            C = Math.acos(E * c + A * u),
                            b = Math.PI / 2 - C,
                            R = (_ = r / Math.tan(b)) * c + t,
                            w = _ * u + e,
                            M = Math.sqrt(_ * _ + r * r),
                            S = t + E * M,
                            I = e + A * M,
                            P = 0,
                            D = 0;
                        if (c * v - u * m >= 0) {
                            var L = 2 * b / Zt.SEGNUM;
                            P = Math.sin(L), D = Math.cos(L);
                        } else L = 2 * -b / Zt.SEGNUM, P = Math.sin(L), D = Math.cos(L);
                        var O = this._path._lastOriX,
                            B = this._path._lastOriY,
                            F = R,
                            N = w;
                        (Math.abs(F - this._path._lastOriX) > .1 || Math.abs(N - this._path._lastOriY) > .1) && (n = F, h = N, O = F, B = N, this._path.addPoint(n, h));
                        var U = R - S,
                            k = w - I;
                        for (a = 0; a < Zt.SEGNUM; a++) {
                            var G = U * D + k * P,
                                W = -U * P + k * D;
                            n = G + S, h = W + I, (Math.abs(O - n) > .1 || Math.abs(B - h) > .1) && (this._path.addPoint(n, h), O = n, B = h), U = G, k = W;
                        }
                    }
                }
            }
        }
        arc(t, e, i, s, r, a = !1, n = !0) {
            var h, o, l = 0,
                _ = 0,
                c = 0,
                u = 0,
                d = 0;
            if (_ = r - s, a)
                if (Math.abs(_) >= 2 * Math.PI) _ = 2 * -Math.PI;
                else
                    for (; _ > 0;) _ -= 2 * Math.PI;
            else if (Math.abs(_) >= 2 * Math.PI) _ = 2 * Math.PI;
            else
                for (; _ < 0;) _ += 2 * Math.PI;
            var p = this.getMatScaleX(),
                f = this.getMatScaleY(),
                g = i * (p > f ? p : f),
                m = 2 * Math.PI * g;
            o = 0 | Math.max(m / 10, 10);
            var v = this._getPath();
            for (h = 0; h <= o; h++) l = s + _ * (h / o), c = Math.cos(l), d = e + Math.sin(l) * i, (u = t + c * i) == this._path._lastOriX && d == this._path._lastOriY || v.addPoint(u, d);
            c = Math.cos(r), d = e + Math.sin(r) * i, (u = t + c * i) == this._path._lastOriX && d == this._path._lastOriY || v.addPoint(u, d);
        }
        quadraticCurveTo(t, e, i, s) {
            for (var r = $.I.getBezierPoints([this._path._lastOriX, this._path._lastOriY, t, e, i, s], 30, 2), a = 0, n = r.length / 2; a < n; a++) this.lineTo(r[2 * a], r[2 * a + 1]);
            this.lineTo(i, s);
        }
        mixRGBandAlpha(t) {
            return this._mixRGBandAlpha(t, this._shader2D.ALPHA);
        }
        _mixRGBandAlpha(t, e) {
            if (e >= 1) return t;
            var i = (4278190080 & t) >>> 24;
            return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24;
        }
        strokeRect(t, e, i, s, r) {
            if (this.lineWidth > 0) {
                var a = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                    n = this.lineWidth / 2;
                this._fillRect(t - n, e - n, i + this.lineWidth, this.lineWidth, a), this._fillRect(t - n, e - n + s, i + this.lineWidth, this.lineWidth, a), this._fillRect(t - n, e + n, this.lineWidth, s - this.lineWidth, a), this._fillRect(t - n + i, e + n, this.lineWidth, s - this.lineWidth, a);
            }
        }
        clip() {}
        drawParticle(t, e, i) {
            i.x = t, i.y = e, this._submits[this._submits._length++] = i;
        }
        _getPath() {
            return this._path || (this._path = new et());
        }
        get canvas() {
            return this._canvas;
        }
        _fillTexture_h(t, e, i, s, r, a, n, h) {
            for (var o = a, l = Math.floor(h / s), _ = h % s, c = 0; c < l; c++) this._inner_drawTexture(t, e, o, n, s, r, this._curMat, i, 1, !1), o += s;
            if (_ > 0) {
                var u = i[2] - i[0],
                    d = i[0] + u * (_ / s),
                    p = Zt.tmpuv1;
                p[0] = i[0], p[1] = i[1], p[2] = d, p[3] = i[3], p[4] = d, p[5] = i[5], p[6] = i[6], p[7] = i[7], this._inner_drawTexture(t, e, o, n, _, r, this._curMat, p, 1, !1);
            }
        }
        _fillTexture_v(t, e, i, s, r, a, n, h) {
            for (var o = n, l = Math.floor(h / r), _ = h % r, c = 0; c < l; c++) this._inner_drawTexture(t, e, a, o, s, r, this._curMat, i, 1, !1), o += r;
            if (_ > 0) {
                var u = i[7] - i[1],
                    d = i[1] + u * (_ / r),
                    p = Zt.tmpuv1;
                p[0] = i[0], p[1] = i[1], p[2] = i[2], p[3] = i[3], p[4] = i[4], p[5] = d, p[6] = i[6], p[7] = d, this._inner_drawTexture(t, e, a, o, s, _, this._curMat, p, 1, !1);
            }
        }
        drawTextureWithSizeGrid(t, e, i, s, r, a, n, h) {
            if (t._getSource()) {
                e += n, i += h;
                var o = t.uv,
                    l = t.bitmap.width,
                    _ = t.bitmap.height,
                    c = a[0],
                    u = a[3],
                    d = c / _,
                    p = u / l,
                    f = a[1],
                    g = a[2],
                    m = f / l,
                    v = g / _,
                    T = a[4],
                    x = !1;
                if (s == l && (u = f = 0), r == _ && (c = g = 0), u + f > s) {
                    var y = s;
                    x = !0, s = u + f, this.save(), this.clipRect(0 + e, 0 + i, y, r);
                }
                var E = t.bitmap.id,
                    A = this._curMat,
                    C = this._tempUV,
                    b = o[0],
                    R = o[1],
                    w = o[4],
                    M = o[5],
                    S = b,
                    I = R,
                    P = w,
                    D = M;
                if (u && c && (P = b + p, D = R + d, C[0] = b, C[1] = R, C[2] = P, C[3] = R, C[4] = P, C[5] = D, C[6] = b, C[7] = D, this._inner_drawTexture(t, E, e, i, u, c, A, C, 1, !1)), f && c && (S = w - m, I = R, P = w, D = R + d, C[0] = S, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = S, C[7] = D, this._inner_drawTexture(t, E, s - f + e, 0 + i, f, c, A, C, 1, !1)), u && g && (S = b, I = M - v, P = b + p, D = M, C[0] = S, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = S, C[7] = D, this._inner_drawTexture(t, E, 0 + e, r - g + i, u, g, A, C, 1, !1)), f && g && (S = w - m, I = M - v, P = w, D = M, C[0] = S, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = S, C[7] = D, this._inner_drawTexture(t, E, s - f + e, r - g + i, f, g, A, C, 1, !1)), c && (S = b + p, I = R, P = w - m, D = R + d, C[0] = S, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = S, C[7] = D, T ? this._fillTexture_h(t, E, C, t.width - u - f, c, u + e, i, s - u - f) : this._inner_drawTexture(t, E, u + e, i, s - u - f, c, A, C, 1, !1)), g && (S = b + p, I = M - v, P = w - m, D = M, C[0] = S, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = S, C[7] = D, T ? this._fillTexture_h(t, E, C, t.width - u - f, g, u + e, r - g + i, s - u - f) : this._inner_drawTexture(t, E, u + e, r - g + i, s - u - f, g, A, C, 1, !1)), u && (S = b, I = R + d, P = b + p, D = M - v, C[0] = S, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = S, C[7] = D, T ? this._fillTexture_v(t, E, C, u, t.height - c - g, e, c + i, r - c - g) : this._inner_drawTexture(t, E, e, c + i, u, r - c - g, A, C, 1, !1)), f && (S = w - m, I = R + d, P = w, D = M - v, C[0] = S, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = S, C[7] = D, T ? this._fillTexture_v(t, E, C, f, t.height - c - g, s - f + e, c + i, r - c - g) : this._inner_drawTexture(t, E, s - f + e, c + i, f, r - c - g, A, C, 1, !1)), S = b + p, I = R + d, P = w - m, D = M - v, C[0] = S, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = S, C[7] = D, T) {
                    var L = Zt.tmpUVRect;
                    L[0] = S, L[1] = I, L[2] = P - S, L[3] = D - I, this._fillTexture(t, t.width - u - f, t.height - c - g, L, u + e, c + i, s - u - f, r - c - g, "repeat", 0, 0);
                } else this._inner_drawTexture(t, E, u + e, c + i, s - u - f, r - c - g, A, C, 1, !1);
                x && this.restore();
            }
        }
    }
    Zt.ENUM_TEXTALIGN_DEFAULT = 0, Zt.ENUM_TEXTALIGN_CENTER = 1, Zt.ENUM_TEXTALIGN_RIGHT = 2, Zt._SUBMITVBSIZE = 32e3, Zt._MAXSIZE = 99999999, Zt._MAXVERTNUM = 65535, Zt.MAXCLIPRECT = null, Zt._COUNT = 0, Zt.SEGNUM = 32, Zt._contextcount = 0, Zt.PI2 = 2 * Math.PI, Zt._textRender = null, Zt.tmpuv1 = [0, 0, 0, 0, 0, 0, 0, 0], Zt.tmpUV = [0, 0, 0, 0, 0, 0, 0, 0], Zt.tmpUVRect = [0, 0, 0, 0];
    class $t {
        constructor() {
            this.lineWidth = 1;
        }
        clear() {
            this.lineWidth = 1, this.textAlign = this.textBaseline = null;
        }
        make() {
            return this === $t.DEFAULT ? new $t() : this;
        }
    }
    class Jt {
        static _uint8ArraySlice() {
            for (var t = this.length, e = new Uint8Array(this.length), i = 0; i < t; i++) e[i] = this[i];
            return e;
        }
        static _float32ArraySlice() {
            for (var t = this.length, e = new Float32Array(this.length), i = 0; i < t; i++) e[i] = this[i];
            return e;
        }
        static _uint16ArraySlice(...t) {
            var e, i, s;
            if (0 === t.length)
                for (e = this.length, i = new Uint16Array(e), s = 0; s < e; s++) i[s] = this[s];
            else if (2 === t.length) {
                var r = t[0],
                    a = t[1];
                if (a > r)
                    for (e = a - r, i = new Uint16Array(e), s = r; s < a; s++) i[s - r] = this[s];
                else i = new Uint16Array(0);
            }
            return i;
        }
        static _nativeRender_enable() {}
        static enable() {
            return !0;
        }
        static inner_enable() {
            return Float32Array.prototype.slice || (Float32Array.prototype.slice = Jt._float32ArraySlice), Uint16Array.prototype.slice || (Uint16Array.prototype.slice = Jt._uint16ArraySlice), Uint8Array.prototype.slice || (Uint8Array.prototype.slice = Jt._uint8ArraySlice), !0;
        }
        static onStageResize(t, e) {
            null != C.mainContext && (C.mainContext.viewport(0, 0, t, e), M.width = t, M.height = e);
        }
    }
    Jt._isWebGL2 = !1, Jt.isNativeRender_enable = !1;
    ! function() {
        var t = {};

        function synthesizeGLError(e, i) {
            var s;
            t[e] = !0, void 0 !== i && (s = i, window.console && window.console.error && window.console.error(s));
        }
        var e = function WebGLVertexArrayObjectOES(t) {
            var e = t.gl;
            this.ext = t, this.isAlive = !0, this.hasBeenBound = !1, this.elementArrayBuffer = null, this.attribs = new Array(t.maxVertexAttribs);
            for (var i = 0; i < this.attribs.length; i++) {
                var s = new WebGLVertexArrayObjectOES.VertexAttrib(e);
                this.attribs[i] = s;
            }
            this.maxAttrib = 0;
        };
        (e.VertexAttrib = function(t) {
            this.enabled = !1, this.buffer = null, this.size = 4, this.type = t.FLOAT, this.normalized = !1, this.stride = 16, this.offset = 0, this.cached = "", this.recache();
        }).prototype.recache = function() {
            this.cached = [this.size, this.type, this.normalized, this.stride, this.offset].join(":");
        };
        var i = function(e) {
            var i = this;
            this.gl = e,
                function(e) {
                    var i = e.getError;
                    e.getError = function() {
                        var s;
                        do {
                            (s = i.apply(e)) != e.NO_ERROR && (t[s] = !0);
                        } while (s != e.NO_ERROR);
                        for (var r in t)
                            if (t[r]) return delete t[r], parseInt(r);
                        return e.NO_ERROR;
                    };
                }(e);
            var s = this.original = {
                getParameter: e.getParameter,
                enableVertexAttribArray: e.enableVertexAttribArray,
                disableVertexAttribArray: e.disableVertexAttribArray,
                bindBuffer: e.bindBuffer,
                getVertexAttrib: e.getVertexAttrib,
                vertexAttribPointer: e.vertexAttribPointer
            };
            e.getParameter = function(t) {
                return t == i.VERTEX_ARRAY_BINDING_OES ? i.currentVertexArrayObject == i.defaultVertexArrayObject ? null : i.currentVertexArrayObject : s.getParameter.apply(this, arguments);
            }, e.enableVertexAttribArray = function(t) {
                var e = i.currentVertexArrayObject;
                return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !0, s.enableVertexAttribArray.apply(this, arguments);
            }, e.disableVertexAttribArray = function(t) {
                var e = i.currentVertexArrayObject;
                return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !1, s.disableVertexAttribArray.apply(this, arguments);
            }, e.bindBuffer = function(t, r) {
                switch (t) {
                    case e.ARRAY_BUFFER:
                        i.currentArrayBuffer = r;
                        break;
                    case e.ELEMENT_ARRAY_BUFFER:
                        i.currentVertexArrayObject.elementArrayBuffer = r;
                }
                return s.bindBuffer.apply(this, arguments);
            }, e.getVertexAttrib = function(t, r) {
                var a = i.currentVertexArrayObject.attribs[t];
                switch (r) {
                    case e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                        return a.buffer;
                    case e.VERTEX_ATTRIB_ARRAY_ENABLED:
                        return a.enabled;
                    case e.VERTEX_ATTRIB_ARRAY_SIZE:
                        return a.size;
                    case e.VERTEX_ATTRIB_ARRAY_STRIDE:
                        return a.stride;
                    case e.VERTEX_ATTRIB_ARRAY_TYPE:
                        return a.type;
                    case e.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                        return a.normalized;
                    default:
                        return s.getVertexAttrib.apply(this, arguments);
                }
            }, e.vertexAttribPointer = function(t, e, r, a, n, h) {
                var o = i.currentVertexArrayObject;
                o.maxAttrib = Math.max(o.maxAttrib, t);
                var l = o.attribs[t];
                return l.buffer = i.currentArrayBuffer, l.size = e, l.type = r, l.normalized = a, l.stride = n, l.offset = h, l.recache(), s.vertexAttribPointer.apply(this, arguments);
            }, e.instrumentExtension && e.instrumentExtension(this, "OES_vertex_array_object"), e.canvas.addEventListener("webglcontextrestored", function() {
                var t;
                t = "OESVertexArrayObject emulation library context restored", window.console && window.console.log && window.console.log(t), i.reset_();
            }, !0), this.reset_();
        };
        i.prototype.VERTEX_ARRAY_BINDING_OES = 34229, i.prototype.reset_ = function() {
            if (void 0 !== this.vertexArrayObjects)
                for (var t = 0; t < this.vertexArrayObjects.length; ++t) this.vertexArrayObjects.isAlive = !1;
            var i = this.gl;
            this.maxVertexAttribs = i.getParameter(i.MAX_VERTEX_ATTRIBS), this.defaultVertexArrayObject = new e(this), this.currentVertexArrayObject = null, this.currentArrayBuffer = null, this.vertexArrayObjects = [this.defaultVertexArrayObject], this.bindVertexArrayOES(null);
        }, i.prototype.createVertexArrayOES = function() {
            var t = new e(this);
            return this.vertexArrayObjects.push(t), t;
        }, i.prototype.deleteVertexArrayOES = function(t) {
            t.isAlive = !1, this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(t), 1), this.currentVertexArrayObject == t && this.bindVertexArrayOES(null);
        }, i.prototype.isVertexArrayOES = function(t) {
            return !!(t && t instanceof e && t.hasBeenBound && t.ext == this);
        }, i.prototype.bindVertexArrayOES = function(t) {
            var e = this.gl;
            if (!t || t.isAlive) {
                var i = this.original,
                    s = this.currentVertexArrayObject;
                this.currentVertexArrayObject = t || this.defaultVertexArrayObject, this.currentVertexArrayObject.hasBeenBound = !0;
                var r = this.currentVertexArrayObject;
                if (s != r) {
                    s && r.elementArrayBuffer == s.elementArrayBuffer || i.bindBuffer.call(e, e.ELEMENT_ARRAY_BUFFER, r.elementArrayBuffer);
                    for (var a = this.currentArrayBuffer, n = Math.max(s ? s.maxAttrib : 0, r.maxAttrib), h = 0; h <= n; h++) {
                        var o = r.attribs[h],
                            l = s ? s.attribs[h] : null;
                        if (s && o.enabled == l.enabled || (o.enabled ? i.enableVertexAttribArray.call(e, h) : i.disableVertexAttribArray.call(e, h)), o.enabled) {
                            var _ = !1;
                            s && o.buffer == l.buffer || (a != o.buffer && (i.bindBuffer.call(e, e.ARRAY_BUFFER, o.buffer), a = o.buffer), _ = !0), (_ || o.cached != l.cached) && i.vertexAttribPointer.call(e, h, o.size, o.type, o.normalized, o.stride, o.offset);
                        }
                    }
                    this.currentArrayBuffer != a && i.bindBuffer.call(e, e.ARRAY_BUFFER, this.currentArrayBuffer);
                }
            } else synthesizeGLError(e.INVALID_OPERATION, "bindVertexArrayOES: attempt to bind deleted arrayObject");
        }, window._setupVertexArrayObject = function(t) {
            var e = t.getSupportedExtensions;
            t.getSupportedExtensions = function() {
                var t = e.call(this) || [];
                return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), t;
            };
            var s = t.getExtension;
            t.getExtension = function(t) {
                var e = s.call(this, t);
                return e || ("OES_vertex_array_object" !== t ? null : (this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), this.__OESVertexArrayObject = new i(this)), this.__OESVertexArrayObject));
            };
        }, window._forceSetupVertexArrayObject = function(t) {
            var e = t.getSupportedExtensions;
            t.getSupportedExtensions = function() {
                var t = e.call(this) || [];
                return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), t;
            };
            var s = t.getExtension;
            t.getExtension = function(t) {
                if ("OES_vertex_array_object" === t) return this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), this.__OESVertexArrayObject = new i(this)), this.__OESVertexArrayObject;
                var e = s.call(this, t);
                return e || null;
            };
        };
    }();
    class te {
        constructor(t, e) {
            this._gl = null, this._vaoExt = null, this._angleInstancedArrays = null, this._isWebGL2 = !1, this._oesTextureHalfFloat = null, this._extTextureFilterAnisotropic = null, this._compressedTextureS3tc = null, this._compressedTexturePvrtc = null, this._compressedTextureEtc1 = null, this._gl = t, this._isWebGL2 = e;
            try {
                t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision ? Jt.shaderHighPrecision = !0 : Jt.shaderHighPrecision = !1;
            } catch (t) {}
            if (e) this._getExtension("EXT_color_buffer_float");
            else {
                var s = te._forceSupportVAOPlatform();
                i.Render.isConchApp || window._setupVertexArrayObject && (s ? window._forceSetupVertexArrayObject(t) : window._setupVertexArrayObject(t)), this._vaoExt = this._getExtension("OES_vertex_array_object"), s || (this._angleInstancedArrays = this._getExtension("ANGLE_instanced_arrays")), this._oesTextureHalfFloat = this._getExtension("OES_texture_half_float"), this._getExtension("OES_texture_half_float_linear");
            }
            this._extTextureFilterAnisotropic = this._getExtension("EXT_texture_filter_anisotropic"), this._compressedTextureS3tc = this._getExtension("WEBGL_compressed_texture_s3tc"), this._compressedTexturePvrtc = this._getExtension("WEBGL_compressed_texture_pvrtc"), this._compressedTextureEtc1 = this._getExtension("WEBGL_compressed_texture_etc1");
        }
        static _forceSupportVAOPlatform() {
            let t = i.Browser;
            return t.onMiniGame && t.onIOS || t.onBDMiniGame || t.onQGMiniGame;
        }
        _getExtension(t) {
            var e = te._extentionVendorPrefixes;
            for (var i in e) {
                var s = this._gl.getExtension(e[i] + t);
                if (s) return s;
            }
            return null;
        }
        createVertexArray() {
            return this._isWebGL2 ? this._gl.createVertexArray() : this._vaoExt.createVertexArrayOES();
        }
        bindVertexArray(t) {
            this._isWebGL2 ? this._gl.bindVertexArray(t) : this._vaoExt.bindVertexArrayOES(t);
        }
        deleteVertexArray(t) {
            this._isWebGL2 ? this._gl.deleteVertexArray(t) : this._vaoExt.deleteVertexArrayOES(t);
        }
        isVertexArray(t) {
            this._isWebGL2 ? this._gl.isVertexArray(t) : this._vaoExt.isVertexArrayOES(t);
        }
        drawElementsInstanced(t, e, i, s, r) {
            this._isWebGL2 ? this._gl.drawElementsInstanced(t, e, i, s, r) : this._angleInstancedArrays.drawElementsInstancedANGLE(t, e, i, s, r);
        }
        drawArraysInstanced(t, e, i, s) {
            this._isWebGL2 ? this._gl.drawArraysInstanced(t, e, i, s) : this._angleInstancedArrays.drawArraysInstancedANGLE(t, e, i, s);
        }
        vertexAttribDivisor(t, e) {
            this._isWebGL2 ? this._gl.vertexAttribDivisor(t, e) : this._angleInstancedArrays.vertexAttribDivisorANGLE(t, e);
        }
        supportInstance() {
            return !(!this._isWebGL2 && !this._angleInstancedArrays);
        }
    }
    te._extentionVendorPrefixes = ["", "WEBKIT_", "MOZ_"];
    class ee {
        constructor(t, e, s) {
            this._timeId = 0, ee._mainCanvas = s, ee._mainCanvas.source.id = "layaCanvas", ee._mainCanvas.source.width = t, ee._mainCanvas.source.height = e, ee.isConchApp && document.body.appendChild(ee._mainCanvas.source), this.initRender(ee._mainCanvas, t, e), window.requestAnimationFrame(function loop(t) {
                i.stage._loop();
                window.requestAnimationFrame(loop);
            }), i.stage.on("visibilitychange", this, this._onVisibilitychange);
        }
        _onVisibilitychange() {
            i.stage.isVisibility ? 0 != this._timeId && window.clearInterval(this._timeId) : this._timeId = window.setInterval(this._enterFrame, 1e3);
        }
        initRender(t, i, s) {
            var r = m.instance = C.mainContext = function(t) {
                var i, s = ["webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
                e.useWebGL2 && !jt.onBDMiniGame || s.shift();
                for (var r = 0; r < s.length; r++) {
                    try {
                        i = t.getContext(s[r], {
                            stencil: e.isStencil,
                            alpha: e.isAlpha,
                            antialias: e.isAntialias,
                            premultipliedAlpha: e.premultipliedAlpha,
                            preserveDrawingBuffer: e.preserveDrawingBuffer
                        });
                    } catch (t) {}
                    if (i) return "webgl2" === s[r] && (Jt._isWebGL2 = !0), i;
                }
                return null;
            }(ee._mainCanvas.source);
            if (!r) return !1;
            m.instance = r, m.layaGPUInstance = new te(r, Jt._isWebGL2), t.size(i, s), Zt.__init__(), st.__init__();
            var a = new Zt();
            return a.isMain = !0, ee._context = a, t._setContext(a), L.__init__(), U.__init__(), wt.__init__(), ct.__int__(r), P._init_(r), !0;
        }
        _enterFrame(t = null) {
            i.stage._loop();
        }
        static get context() {
            return ee._context;
        }
        static get canvas() {
            return ee._mainCanvas.source;
        }
    }
    ee.supportWebGLPlusCulling = !1, ee.supportWebGLPlusAnimation = !1, ee.supportWebGLPlusRendering = !1, ee.isConchApp = !1, ee.isConchApp = null != window.conch, ee.isConchApp ? (ee.supportWebGLPlusCulling = !1, ee.supportWebGLPlusAnimation = !0, ee.supportWebGLPlusRendering = !0) : null != window.qq && null != window.qq.webglPlus && (ee.supportWebGLPlusCulling = !1, ee.supportWebGLPlusAnimation = !0, ee.supportWebGLPlusRendering = !0);
    class ie {
        static create(t, e, i, r, a, n, h, o, l, _) {
            var c = s.getItemByClass("DrawTrianglesCmd", ie);
            if (c.texture = t, c.x = e, c.y = i, c.vertices = r, c.uvs = a, c.indices = n, c.matrix = h, c.alpha = o, l) {
                c.color = new H();
                var u = V.create(l).arrColor;
                c.color.color(255 * u[0], 255 * u[1], 255 * u[2], 255 * u[3]);
            }
            return c.blendMode = _, c;
        }
        recover() {
            this.texture = null, this.vertices = null, this.uvs = null, this.indices = null, this.matrix = null, s.recover("DrawTrianglesCmd", this);
        }
        run(t, e, i) {
            t.drawTriangles(this.texture, this.x + e, this.y + i, this.vertices, this.uvs, this.indices, this.matrix, this.alpha, this.color, this.blendMode);
        }
        get cmdID() {
            return ie.ID;
        }
    }
    ie.ID = "DrawTriangles";
    class se {
        constructor() {}
        static create(t, e, i, r, a, n) {
            var h = s.getItemByClass("Draw9GridTexture", se);
            return h.texture = t, t._addReference(), h.x = e, h.y = i, h.width = r, h.height = a, h.sizeGrid = n, h;
        }
        recover() {
            this.texture._removeReference(), s.recover("Draw9GridTexture", this);
        }
        run(t, e, i) {
            t.drawTextureWithSizeGrid(this.texture, this.x, this.y, this.width, this.height, this.sizeGrid, e, i);
        }
        get cmdID() {
            return se.ID;
        }
    }
    se.ID = "Draw9GridTexture";
    class re {
        constructor() {
            this._cacheBoundsType = !1;
        }
        destroy() {
            this._graphics = null, this._cacheBoundsType = !1, this._temp && (this._temp.length = 0), this._rstBoundPoints && (this._rstBoundPoints.length = 0), this._bounds && this._bounds.recover(), this._bounds = null, s.recover("GraphicsBounds", this);
        }
        static create() {
            return s.getItemByClass("GraphicsBounds", re);
        }
        reset() {
            this._temp && (this._temp.length = 0);
        }
        getBounds(t = !1) {
            return (!this._bounds || !this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._bounds = g._getWrapRec(this.getBoundPoints(t), this._bounds)), this._cacheBoundsType = t, this._bounds;
        }
        getBoundPoints(t = !1) {
            return (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)), this._cacheBoundsType = t, this._rstBoundPoints = Y.copyArray(this._rstBoundPoints, this._temp);
        }
        _getCmdPoints(t = !1) {
            var e, i = this._graphics.cmds;
            if ((e = this._temp || (this._temp = [])).length = 0, i || null == this._graphics._one || (re._tempCmds.length = 0, re._tempCmds.push(this._graphics._one), i = re._tempCmds), !i) return e;
            var s = re._tempMatrixArrays;
            s.length = 0;
            var p = re._initMatrix;
            p.identity();
            for (var f, m, v = re._tempMatrix, T = 0, x = i.length; T < x; T++) switch ((f = i[T]).cmdID) {
                case r.ID:
                    s.push(p), p = p.clone();
                    break;
                case j.ID:
                    p = s.pop();
                    break;
                case q.ID:
                    v.identity(), v.translate(-f.pivotX, -f.pivotY), v.scale(f.scaleX, f.scaleY), v.translate(f.pivotX, f.pivotY), this._switchMatrix(p, v);
                    break;
                case K.ID:
                    v.identity(), v.translate(-f.pivotX, -f.pivotY), v.rotate(f.angle), v.translate(f.pivotX, f.pivotY), this._switchMatrix(p, v);
                    break;
                case Z.ID:
                    v.identity(), v.translate(f.tx, f.ty), this._switchMatrix(p, v);
                    break;
                case Q.ID:
                    v.identity(), v.translate(-f.pivotX, -f.pivotY), v.concat(f.matrix), v.translate(f.pivotX, f.pivotY), this._switchMatrix(p, v);
                    break;
                case h.ID:
                case z.ID:
                    re._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), p);
                    break;
                case X.ID:
                    p.copyTo(v), f.matrix && v.concat(f.matrix), re._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), v);
                    break;
                case h.ID:
                    if (m = f.texture, t) f.width && f.height ? re._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), p) : re._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, m.width, m.height), p);
                    else {
                        var y = (f.width || m.sourceWidth) / m.width,
                            E = (f.height || m.sourceHeight) / m.height,
                            A = y * m.sourceWidth,
                            C = E * m.sourceHeight,
                            b = m.offsetX > 0 ? m.offsetX : 0,
                            R = m.offsetY > 0 ? m.offsetY : 0;
                        b *= y, R *= E, re._addPointArrToRst(e, g._getBoundPointS(f.x - b, f.y - R, A, C), p);
                    }
                    break;
                case z.ID:
                    f.width && f.height ? re._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), p) : (m = f.texture, re._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, m.width, m.height), p));
                    break;
                case X.ID:
                    var w;
                    f.matrix ? (p.copyTo(v), v.concat(f.matrix), w = v) : w = p, t ? f.width && f.height ? re._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), w) : (m = f.texture, re._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, m.width, m.height), w)) : (m = f.texture, y = (f.width || m.sourceWidth) / m.width, E = (f.height || m.sourceHeight) / m.height, A = y * m.sourceWidth, C = E * m.sourceHeight, b = m.offsetX > 0 ? m.offsetX : 0, R = m.offsetY > 0 ? m.offsetY : 0, b *= y, R *= E, re._addPointArrToRst(e, g._getBoundPointS(f.x - b, f.y - R, A, C), w));
                    break;
                case d.ID:
                    re._addPointArrToRst(e, g._getBoundPointS(f.x, f.y, f.width, f.height), p);
                    break;
                case a.ID:
                    re._addPointArrToRst(e, g._getBoundPointS(f.x - f.radius, f.y - f.radius, f.radius + f.radius, f.radius + f.radius), p);
                    break;
                case o.ID:
                    var M;
                    re._tempPoints.length = 0, M = .5 * f.lineWidth, f.fromX == f.toX ? re._tempPoints.push(f.fromX + M, f.fromY, f.toX + M, f.toY, f.fromX - M, f.fromY, f.toX - M, f.toY) : f.fromY == f.toY ? re._tempPoints.push(f.fromX, f.fromY + M, f.toX, f.toY + M, f.fromX, f.fromY - M, f.toX, f.toY - M) : re._tempPoints.push(f.fromX, f.fromY, f.toX, f.toY), re._addPointArrToRst(e, re._tempPoints, p);
                    break;
                case n.ID:
                    re._addPointArrToRst(e, $.I.getBezierPoints(f.points), p, f.x, f.y);
                    break;
                case l.ID:
                case u.ID:
                    re._addPointArrToRst(e, f.points, p, f.x, f.y);
                    break;
                case _.ID:
                    re._addPointArrToRst(e, this._getPathPoints(f.paths), p, f.x, f.y);
                    break;
                case c.ID:
                    re._addPointArrToRst(e, this._getPiePoints(f.x, f.y, f.radius, f.startAngle, f.endAngle), p);
                    break;
                case ie.ID:
                    re._addPointArrToRst(e, this._getTriAngBBXPoints(f.vertices), p);
                    break;
                case se.ID:
                    re._addPointArrToRst(e, this._getDraw9GridBBXPoints(f), p);
            }
            return e.length > 200 ? e = Y.copyArray(e, g._getWrapRec(e)._getBoundPoints()) : e.length > 8 && (e = J.scanPList(e)), e;
        }
        _switchMatrix(t, e) {
            e.concat(t), e.copyTo(t);
        }
        static _addPointArrToRst(t, e, i, s = 0, r = 0) {
            var a, n;
            for (n = e.length, a = 0; a < n; a += 2) re._addPointToRst(t, e[a] + s, e[a + 1] + r, i);
        }
        static _addPointToRst(t, e, i, s) {
            var r = f.TEMP;
            r.setTo(e || 0, i || 0), s.transformPoint(r), t.push(r.x, r.y);
        }
        _getPiePoints(t, e, i, s, r) {
            var a = re._tempPoints;
            re._tempPoints.length = 0;
            var n = Math.PI / 180,
                h = r - s;
            if (h >= 360 || h <= -360) return a.push(t - i, e - i), a.push(t + i, e - i), a.push(t + i, e + i), a.push(t - i, e + i), a;
            a.push(t, e);
            var o = h % 360;
            o < 0 && (o += 360);
            var l = s + o,
                _ = s * n,
                c = l * n;
            a.push(t + i * Math.cos(_), e + i * Math.sin(_)), a.push(t + i * Math.cos(c), e + i * Math.sin(c));
            for (var u = 90 * Math.ceil(s / 90), d = 90 * Math.floor(l / 90), p = u; p <= d; p += 90) {
                var f = p * n;
                a.push(t + i * Math.cos(f), e + i * Math.sin(f));
            }
            return a;
        }
        _getTriAngBBXPoints(t) {
            var e = t.length;
            if (e < 2) return [];
            for (var i = t[0], s = t[1], r = i, a = s, n = 2; n < e;) {
                var h = t[n++],
                    o = t[n++];
                i > h && (i = h), s > o && (s = o), r < h && (r = h), a < o && (a = o);
            }
            return [i, s, r, s, r, a, i, a];
        }
        _getDraw9GridBBXPoints(t) {
            var e = t.width,
                i = t.height;
            return [0, 0, e, 0, e, i, 0, i];
        }
        _getPathPoints(t) {
            var e, i, s, r = re._tempPoints;
            for (r.length = 0, i = t.length, e = 0; e < i; e++)(s = t[e]).length > 1 && (r.push(s[1], s[2]), s.length > 3 && r.push(s[3], s[4]));
            return r;
        }
    }
    re._tempMatrix = new p(), re._initMatrix = new p(), re._tempPoints = [], re._tempMatrixArrays = [], re._tempCmds = [];
    class ae {}
    ae.ALPHA = 1, ae.TRANSFORM = 2, ae.BLEND = 4, ae.CANVAS = 8, ae.FILTERS = 16, ae.MASK = 32, ae.CLIP = 64, ae.STYLE = 128, ae.TEXTURE = 256, ae.GRAPHICS = 512, ae.LAYAGL3D = 1024, ae.CUSTOM = 2048, ae.ONECHILD = 4096, ae.CHILDS = 8192, ae.REPAINT_NONE = 0, ae.REPAINT_NODE = 1, ae.REPAINT_CACHE = 2, ae.REPAINT_ALL = 3;
    class ne {
        static create(t, e, i, r) {
            var a = s.getItemByClass("ClipRectCmd", ne);
            return a.x = t, a.y = e, a.width = i, a.height = r, a;
        }
        recover() {
            s.recover("ClipRectCmd", this);
        }
        run(t, e, i) {
            t.clipRect(this.x + e, this.y + i, this.width, this.height);
        }
        get cmdID() {
            return ne.ID;
        }
    }
    ne.ID = "ClipRect";
    class he {
        static create(t, e) {
            var i = s.getItemByClass("DrawTexturesCmd", he);
            return i.texture = t, t._addReference(), i.pos = e, i;
        }
        recover() {
            this.texture._removeReference(), this.texture = null, this.pos = null, s.recover("DrawTexturesCmd", this);
        }
        run(t, e, i) {
            t.drawTextures(this.texture, this.pos, e, i);
        }
        get cmdID() {
            return he.ID;
        }
    }
    he.ID = "DrawTextures";
    class oe {
        static create(t, e, i, r, a, n, h, o) {
            var l = s.getItemByClass("FillBorderTextCmd", oe);
            return l.text = t, l.x = e, l.y = i, l.font = r, l.fillColor = a, l.borderColor = n, l.lineWidth = h, l.textAlign = o, l;
        }
        recover() {
            s.recover("FillBorderTextCmd", this);
        }
        run(t, e, i) {
            t.fillBorderText(this.text, this.x + e, this.y + i, this.font, this.fillColor, this.borderColor, this.lineWidth, this.textAlign);
        }
        get cmdID() {
            return oe.ID;
        }
    }
    oe.ID = "FillBorderText";
    class le {
        static create(t, e, i, r, a, n, h) {
            var o = s.getItemByClass("FillBorderWordsCmd", le);
            return o.words = t, o.x = e, o.y = i, o.font = r, o.fillColor = a, o.borderColor = n, o.lineWidth = h, o;
        }
        recover() {
            this.words = null, s.recover("FillBorderWordsCmd", this);
        }
        run(t, e, i) {
            t.fillBorderWords(this.words, this.x + e, this.y + i, this.font, this.fillColor, this.borderColor, this.lineWidth);
        }
        get cmdID() {
            return le.ID;
        }
    }
    le.ID = "FillBorderWords";
    class _e {
        constructor() {
            this._textIsWorldText = !1, this._fontColor = 4294967295, this._strokeColor = 0, this._fontObj = _e._defFontObj, this._nTexAlign = 0;
        }
        static create(t, e, i, r, a, n) {
            var h = s.getItemByClass("FillTextCmd", _e);
            return h.text = t, h._textIsWorldText = t instanceof Ht, h.x = e, h.y = i, h.font = r, h.color = a, h.textAlign = n, h;
        }
        recover() {
            s.recover("FillTextCmd", this);
        }
        run(t, e, s) {
            i.stage.isGlobalRepaint() && this._textIsWorldText && this._text.cleanCache(), this._textIsWorldText ? t._fast_filltext(this._text, this.x + e, this.y + s, this._fontObj, this._color, null, 0, this._nTexAlign, 0) : t.drawText(this._text, this.x + e, this.y + s, this._font, this._color, this._textAlign);
        }
        get cmdID() {
            return _e.ID;
        }
        get text() {
            return this._text;
        }
        set text(t) {
            this._text = t, this._textIsWorldText = t instanceof Ht, this._textIsWorldText && this._text.cleanCache();
        }
        get font() {
            return this._font;
        }
        set font(t) {
            this._font = t, this._fontObj = Vt.Parse(t), this._textIsWorldText && this._text.cleanCache();
        }
        get color() {
            return this._color;
        }
        set color(t) {
            this._color = t, this._fontColor = V.create(t).numColor, this._textIsWorldText && this._text.cleanCache();
        }
        get textAlign() {
            return this._textAlign;
        }
        set textAlign(t) {
            switch (this._textAlign = t, t) {
                case "center":
                    this._nTexAlign = i.Context.ENUM_TEXTALIGN_CENTER;
                    break;
                case "right":
                    this._nTexAlign = i.Context.ENUM_TEXTALIGN_RIGHT;
                    break;
                default:
                    this._nTexAlign = i.Context.ENUM_TEXTALIGN_DEFAULT;
            }
            this._textIsWorldText && this._text.cleanCache();
        }
    }
    _e.ID = "FillText", _e._defFontObj = new Vt(null);
    class ce {
        static create(t, e, i, r, a) {
            var n = s.getItemByClass("FillWordsCmd", ce);
            return n.words = t, n.x = e, n.y = i, n.font = r, n.color = a, n;
        }
        recover() {
            this.words = null, s.recover("FillWordsCmd", this);
        }
        run(t, e, i) {
            t.fillWords(this.words, this.x + e, this.y + i, this.font, this.color);
        }
        get cmdID() {
            return ce.ID;
        }
    }
    ce.ID = "FillWords";
    class ue {
        static create() {
            return s.getItemByClass("SaveCmd", ue);
        }
        recover() {
            s.recover("SaveCmd", this);
        }
        run(t, e, i) {
            t.save();
        }
        get cmdID() {
            return ue.ID;
        }
    }
    ue.ID = "Save";
    class de {
        static create(t, e, i, r, a, n, h) {
            var o = s.getItemByClass("StrokeTextCmd", de);
            return o.text = t, o.x = e, o.y = i, o.font = r, o.color = a, o.lineWidth = n, o.textAlign = h, o;
        }
        recover() {
            s.recover("StrokeTextCmd", this);
        }
        run(t, e, i) {
            t.strokeWord(this.text, this.x + e, this.y + i, this.font, this.color, this.lineWidth, this.textAlign);
        }
        get cmdID() {
            return de.ID;
        }
    }
    de.ID = "StrokeText";
    class pe {
        constructor() {}
        static regCacheByFunction(t, e) {
            var i;
            pe.unRegCacheByFunction(t, e), i = {
                tryDispose: t,
                getCacheList: e
            }, pe._cacheList.push(i);
        }
        static unRegCacheByFunction(t, e) {
            var i, s;
            for (s = pe._cacheList.length, i = 0; i < s; i++)
                if (pe._cacheList[i].tryDispose == t && pe._cacheList[i].getCacheList == e) return void pe._cacheList.splice(i, 1);
        }
        static forceDispose() {
            var t, e = pe._cacheList.length;
            for (t = 0; t < e; t++) pe._cacheList[t].tryDispose(!0);
        }
        static beginCheck(t = 15e3) {
            i.systemTimer.loop(t, null, pe._checkLoop);
        }
        static stopCheck() {
            i.systemTimer.clear(null, pe._checkLoop);
        }
        static _checkLoop() {
            var t = pe._cacheList;
            if (!(t.length < 1)) {
                var e, s, r = i.Browser.now();
                for (s = e = t.length; e > 0 && (pe._index++, pe._index = pe._index % s, t[pe._index].tryDispose(!1), !(i.Browser.now() - r > pe.loopTimeLimit));) e--;
            }
        }
    }
    pe.loopTimeLimit = 2, pe._cacheList = [], pe._index = 0;
    class fe {
        constructor() {
            this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1, this._freeIdArray = [], pe.regCacheByFunction(this.startDispose.bind(this), this.getCacheList.bind(this));
        }
        static getInstance() {
            return fe.instance = fe.instance || new fe();
        }
        getId() {
            return this._id++;
        }
        addShape(t, e) {
            this.shapeDic[t] = e, this.useDic[t] || (this.useDic[t] = !0);
        }
        addLine(t, e) {
            this.shapeLineDic[t] = e, this.shapeLineDic[t] || (this.shapeLineDic[t] = !0);
        }
        getShape(t) {
            this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0);
        }
        deleteShape(t) {
            this.shapeDic[t] && (this.shapeDic[t] = null, delete this.shapeDic[t]), this.shapeLineDic[t] && (this.shapeLineDic[t] = null, delete this.shapeLineDic[t]), null != this.useDic[t] && delete this.useDic[t];
        }
        getCacheList() {
            var t, e = [];
            for (t in this.shapeDic) e.push(this.shapeDic[t]);
            for (t in this.shapeLineDic) e.push(this.shapeLineDic[t]);
            return e;
        }
        startDispose(t) {
            var e;
            for (e in this.useDic) this.useDic[e] = !1;
            this._checkKey = !0;
        }
        endDispose() {
            if (this._checkKey) {
                var t;
                for (t in this.useDic) this.useDic[t] || this.deleteShape(t);
                this._checkKey = !1;
            }
        }
    }
    class ge {
        constructor() {
            this._sp = null, this._one = null, this._render = this._renderEmpty, this._cmds = null, this._vectorgraphArray = null, this._graphicBounds = null, this.autoDestroy = !1, this._createData();
        }
        _createData() {}
        _clearData() {}
        _destroyData() {}
        destroy() {
            this.clear(!0), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null, this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0, this._sp._setRenderType(0), this._sp = null), this._destroyData();
        }
        clear(t = !0) {
            if (t) {
                var e = this._one;
                if (this._cmds) {
                    var i, s = this._cmds.length;
                    for (i = 0; i < s; i++)(e = this._cmds[i]).recover();
                    this._cmds.length = 0;
                } else e && e.recover();
            } else this._cmds = null;
            if (this._one = null, this._render = this._renderEmpty, this._clearData(), this._sp && (this._sp._renderType &= ~ae.GRAPHICS, this._sp._setRenderType(this._sp._renderType)), this._repaint(), this._vectorgraphArray) {
                for (i = 0, s = this._vectorgraphArray.length; i < s; i++) fe.getInstance().deleteShape(this._vectorgraphArray[i]);
                this._vectorgraphArray.length = 0;
            }
        }
        _clearBoundsCache() {
            this._graphicBounds && this._graphicBounds.reset();
        }
        _initGraphicBounds() {
            this._graphicBounds || (this._graphicBounds = re.create(), this._graphicBounds._graphics = this);
        }
        _repaint() {
            this._clearBoundsCache(), this._sp && this._sp.repaint();
        }
        _isOnlyOne() {
            return !this._cmds || 0 === this._cmds.length;
        }
        get cmds() {
            return this._cmds;
        }
        set cmds(t) {
            this._sp && (this._sp._renderType |= ae.GRAPHICS, this._sp._setRenderType(this._sp._renderType)), this._cmds = t, this._render = this._renderAll, this._repaint();
        }
        getBounds(t = !1) {
            return this._initGraphicBounds(), this._graphicBounds.getBounds(t);
        }
        getBoundPoints(t = !1) {
            return this._initGraphicBounds(), this._graphicBounds.getBoundPoints(t);
        }
        drawImage(t, e = 0, i = 0, s = 0, r = 0) {
            if (!t) return null;
            if (s || (s = t.sourceWidth), r || (r = t.sourceHeight), t.getIsReady()) {
                var a = s / t.sourceWidth,
                    n = r / t.sourceHeight;
                if (s = t.width * a, r = t.height * n, s <= 0 || r <= 0) return null;
                e += t.offsetX * a, i += t.offsetY * n;
            }
            this._sp && (this._sp._renderType |= ae.GRAPHICS, this._sp._setRenderType(this._sp._renderType));
            var o = h.create.call(this, t, e, i, s, r);
            return null == this._one ? (this._one = o, this._render = this._renderOneImg) : this._saveToCmd(null, o), this._repaint(), o;
        }
        drawTexture(t, e = 0, i = 0, s = 0, r = 0, a = null, n = 1, h = null, o = null, l) {
            if (!t || n < .01) return null;
            if (!t.getIsReady()) return null;
            if (s || (s = t.sourceWidth), r || (r = t.sourceHeight), t.getIsReady()) {
                var _ = s / t.sourceWidth,
                    c = r / t.sourceHeight;
                if (s = t.width * _, r = t.height * c, s <= 0 || r <= 0) return null;
                e += t.offsetX * _, i += t.offsetY * c;
            }
            this._sp && (this._sp._renderType |= ae.GRAPHICS, this._sp._setRenderType(this._sp._renderType));
            var u = X.create.call(this, t, e, i, s, r, a, n, h, o, l);
            return this._repaint(), this._saveToCmd(null, u);
        }
        drawTextures(t, e) {
            return t ? this._saveToCmd(ee._context.drawTextures, he.create.call(this, t, e)) : null;
        }
        drawTriangles(t, e, i, s, r, a, n = null, h = 1, o = null, l = null) {
            return this._saveToCmd(ee._context.drawTriangles, ie.create.call(this, t, e, i, s, r, a, n, h, o, l));
        }
        fillTexture(t, e, i, s = 0, r = 0, a = "repeat", n = null) {
            return t && t.getIsReady() ? this._saveToCmd(ee._context._fillTexture, z.create.call(this, t, e, i, s, r, a, n || f.EMPTY, {})) : null;
        }
        _saveToCmd(t, e) {
            return this._sp && (this._sp._renderType |= ae.GRAPHICS, this._sp._setRenderType(this._sp._renderType)), null == this._one ? (this._one = e, this._render = this._renderOne) : (this._render = this._renderAll, 0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(e)), this._repaint(), e;
        }
        clipRect(t, e, i, s) {
            return this._saveToCmd(ee._context.clipRect, ne.create.call(this, t, e, i, s));
        }
        fillText(t, e, s, r, a, n) {
            return this._saveToCmd(ee._context.fillText, _e.create.call(this, t, e, s, r || i.Text.defaultFontStr(), a, n));
        }
        fillBorderText(t, e, s, r, a, n, h, o) {
            return this._saveToCmd(ee._context.fillBorderText, oe.create.call(this, t, e, s, r || i.Text.defaultFontStr(), a, n, h, o));
        }
        fillWords(t, e, s, r, a) {
            return this._saveToCmd(ee._context.fillWords, ce.create.call(this, t, e, s, r || i.Text.defaultFontStr(), a));
        }
        fillBorderWords(t, e, s, r, a, n, h) {
            return this._saveToCmd(ee._context.fillBorderWords, le.create.call(this, t, e, s, r || i.Text.defaultFontStr(), a, n, h));
        }
        strokeText(t, e, s, r, a, n, h) {
            return this._saveToCmd(ee._context.fillBorderText, de.create.call(this, t, e, s, r || i.Text.defaultFontStr(), a, n, h));
        }
        alpha(t) {
            return this._saveToCmd(ee._context.alpha, r.create.call(this, t));
        }
        transform(t, e = 0, i = 0) {
            return this._saveToCmd(ee._context._transform, Q.create.call(this, t, e, i));
        }
        rotate(t, e = 0, i = 0) {
            return this._saveToCmd(ee._context._rotate, K.create.call(this, t, e, i));
        }
        scale(t, e, i = 0, s = 0) {
            return this._saveToCmd(ee._context._scale, q.create.call(this, t, e, i, s));
        }
        translate(t, e) {
            return this._saveToCmd(ee._context.translate, Z.create.call(this, t, e));
        }
        save() {
            return this._saveToCmd(ee._context._save, ue.create.call(this));
        }
        restore() {
            return this._saveToCmd(ee._context.restore, j.create.call(this));
        }
        replaceText(t) {
            this._repaint();
            var e = this._cmds;
            if (e) {
                for (var i = e.length - 1; i > -1; i--)
                    if (this._isTextCmd(e[i])) return e[i].text = t, !0;
            } else if (this._one && this._isTextCmd(this._one)) return this._one.text = t, !0;
            return !1;
        }
        _isTextCmd(t) {
            var e = t.cmdID;
            return e == _e.ID || e == de.ID || e == oe.ID;
        }
        replaceTextColor(t) {
            this._repaint();
            var e = this._cmds;
            if (e)
                for (var i = e.length - 1; i > -1; i--) this._isTextCmd(e[i]) && this._setTextCmdColor(e[i], t);
            else this._one && this._isTextCmd(this._one) && this._setTextCmdColor(this._one, t);
        }
        _setTextCmdColor(t, e) {
            switch (t.cmdID) {
                case _e.ID:
                case de.ID:
                    t.color = e;
                    break;
                case oe.ID:
                case le.ID:
                case oe.ID:
                    t.fillColor = e;
            }
        }
        loadImage(t, e = 0, s = 0, r = 0, a = 0, n = null) {
            var h = i.Loader.getRes(t);
            h ? h.getIsReady() ? this.drawImage(h, e, s, r, a) : h.once(Wt.READY, this, this.drawImage, [h, e, s, r, a]) : ((h = new Yt()).load(t), i.Loader.cacheRes(t, h), h.once(Wt.READY, this, this.drawImage, [h, e, s, r, a])), null != n && (h.getIsReady() ? n.call(this._sp) : h.on(Wt.READY, this._sp, n));
        }
        _renderEmpty(t, e, i, s) {}
        _renderAll(t, e, i, s) {
            for (var r = this._cmds, a = 0, n = r.length; a < n; a++) r[a].run(e, i, s);
        }
        _renderOne(t, e, i, s) {
            e.sprite = t, this._one.run(e, i, s);
        }
        _renderOneImg(t, e, i, s) {
            e.sprite = t, this._one.run(e, i, s);
        }
        drawLine(t, e, i, s, r, a = 1) {
            var n = a < 1 || a % 2 == 0 ? 0 : .5;
            return this._saveToCmd(ee._context._drawLine, o.create.call(this, t + n, e + n, i + n, s + n, r, a, 0));
        }
        drawLines(t, e, i, s, r = 1) {
            if (!i || i.length < 4) return null;
            var a = r < 1 || r % 2 == 0 ? 0 : .5;
            return this._saveToCmd(ee._context._drawLines, l.create.call(this, t + a, e + a, i, s, r, 0));
        }
        drawCurves(t, e, i, s, r = 1) {
            return this._saveToCmd(ee._context.drawCurves, n.create.call(this, t, e, i, s, r));
        }
        drawRect(t, e, i, s, r, a = null, n = 1) {
            var h = n >= 1 && a ? n / 2 : 0,
                o = a ? n : 0;
            return this._saveToCmd(ee._context.drawRect, d.create.call(this, t + h, e + h, i - o, s - o, r, a, n));
        }
        drawCircle(t, e, i, s, r = null, n = 1) {
            var h = n >= 1 && r ? n / 2 : 0;
            return this._saveToCmd(ee._context._drawCircle, a.create.call(this, t, e, i - h, s, r, n, 0));
        }
        drawPie(t, e, i, s, r, a, n = null, h = 1) {
            var o = h >= 1 && n ? h / 2 : 0,
                l = n ? h : 0;
            return this._saveToCmd(ee._context._drawPie, c.create.call(this, t + o, e + o, i - l, Y.toRadian(s), Y.toRadian(r), a, n, h, 0));
        }
        drawPoly(t, e, i, s, r = null, a = 1) {
            var n = !1;
            n = !(i.length > 6);
            var h = a >= 1 && r ? a % 2 == 0 ? 0 : .5 : 0;
            return this._saveToCmd(ee._context._drawPoly, u.create.call(this, t + h, e + h, i, s, r, a, n, 0));
        }
        drawPath(t, e, i, s = null, r = null) {
            return this._saveToCmd(ee._context._drawPath, _.create.call(this, t, e, i, s, r));
        }
        draw9Grid(t, e = 0, i = 0, s = 0, r = 0, a = null) {
            this._saveToCmd(null, se.create(t, e, i, s, r, a));
        }
    }
    class me {}
    me.NOT_ACTIVE = 1, me.ACTIVE_INHIERARCHY = 2, me.AWAKED = 4, me.NOT_READY = 8, me.DISPLAY = 16, me.HAS_ZORDER = 32, me.HAS_MOUSE = 64, me.DISPLAYED_INSTAGE = 128, me.DRAWCALL_OPTIMIZE = 256;
    class ve {
        contains(t, e) {
            return !!ve._isHitGraphic(t, e, this.hit) && !ve._isHitGraphic(t, e, this.unHit);
        }
        static _isHitGraphic(t, e, i) {
            if (!i) return !1;
            var s, r, a, n = i.cmds;
            if (!n && i._one && ((n = ve._cmds).length = 1, n[0] = i._one), !n) return !1;
            for (r = n.length, s = 0; s < r; s++)
                if (a = n[s]) {
                    switch (a.cmdID) {
                        case "Translate":
                            t -= a.tx, e -= a.ty;
                    }
                    if (ve._isHitCmd(t, e, a)) return !0;
                }
            return !1;
        }
        static _isHitCmd(t, e, i) {
            if (!i) return !1;
            var s = !1;
            switch (i.cmdID) {
                case "DrawRect":
                    ve._rect.setTo(i.x, i.y, i.width, i.height), s = ve._rect.contains(t, e);
                    break;
                case "DrawCircle":
                    s = (t -= i.x) * t + (e -= i.y) * e < i.radius * i.radius;
                    break;
                case "DrawPoly":
                    t -= i.x, e -= i.y, s = ve._ptInPolygon(t, e, i.points);
            }
            return s;
        }
        static _ptInPolygon(t, e, i) {
            var s = ve._ptPoint;
            s.setTo(t, e);
            var r, a, n, h, o, l = 0;
            o = i.length;
            for (var _ = 0; _ < o; _ += 2) {
                if (r = i[_], a = i[_ + 1], n = i[(_ + 2) % o], a != (h = i[(_ + 3) % o]))
                    if (!(s.y < Math.min(a, h)))
                        if (!(s.y >= Math.max(a, h)))(s.y - a) * (n - r) / (h - a) + r > s.x && l++;
            }
            return l % 2 == 1;
        }
        get hit() {
            return this._hit || (this._hit = new i.Graphics()), this._hit;
        }
        set hit(t) {
            this._hit = t;
        }
        get unHit() {
            return this._unHit || (this._unHit = new i.Graphics()), this._unHit;
        }
        set unHit(t) {
            this._unHit = t;
        }
    }
    ve._cmds = [], ve._rect = new g(), ve._ptPoint = new f();
    class Te {
        static regClass(t, e) {
            Te._classMap[t] = e;
        }
        static regShortClassName(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e],
                    s = i.name;
                Te._classMap[s] = i;
            }
        }
        static getRegClass(t) {
            return Te._classMap[t];
        }
        static getClass(t) {
            var e = Te._classMap[t] || Te._classMap["Laya." + t] || t,
                s = i.Laya;
            return "string" == typeof e ? i.__classMap[e] || s[t] : e;
        }
        static getInstance(t) {
            var e = Te.getClass(t);
            return e ? new e() : (console.warn("[error] Undefined class:", t), null);
        }
        static createByJson(t, e = null, i = null, s = null, r = null) {
            "string" == typeof t && (t = JSON.parse(t));
            var a = t.props;
            if (!e && !(e = r ? r.runWith(t) : Te.getInstance(a.runtime || t.type))) return null;
            var n = t.child;
            if (n)
                for (var h = 0, o = n.length; h < o; h++) {
                    var l = n[h];
                    if ("render" !== l.props.name && "render" !== l.props.renderType || !e._$set_itemRender)
                        if ("Graphic" == l.type) Te._addGraphicsToSprite(l, e);
                        else if (Te._isDrawType(l.type)) Te._addGraphicToSprite(l, e, !0);
                    else {
                        var _ = Te.createByJson(l, null, i, s, r);
                        "Script" === l.type ? "owner" in _ ? _.owner = e : "target" in _ && (_.target = e) : "mask" == l.props.renderType ? e.mask = _ : e.addChild(_);
                    } else e.itemRender = l;
                }
            if (a)
                for (var c in a) {
                    var u = a[c];
                    "var" === c && i ? i[u] = e : u instanceof Array && e[c] instanceof Function ? e[c].apply(e, u) : e[c] = u;
                }
            return s && t.customProps && s.runWith([e, t]), e.created && e.created(), e;
        }
        static _addGraphicsToSprite(t, e) {
            var i = t.child;
            if (i && !(i.length < 1)) {
                var s, r, a = Te._getGraphicsFromSprite(t, e),
                    n = 0,
                    h = 0;
                for (t.props && (n = Te._getObjVar(t.props, "x", 0), h = Te._getObjVar(t.props, "y", 0)), 0 != n && 0 != h && a.translate(n, h), r = i.length, s = 0; s < r; s++) Te._addGraphicToGraphics(i[s], a);
                0 != n && 0 != h && a.translate(-n, -h);
            }
        }
        static _addGraphicToSprite(t, e, i = !1) {
            var s = i ? Te._getGraphicsFromSprite(t, e) : e.graphics;
            Te._addGraphicToGraphics(t, s);
        }
        static _getGraphicsFromSprite(t, e) {
            if (!t || !t.props) return e.graphics;
            var i = t.props.renderType;
            if ("hit" === i || "unHit" === i) {
                var s = e._style.hitArea || (e.hitArea = new ve());
                s[i] || (s[i] = new ge());
                var r = s[i];
            }
            return r || (r = e.graphics), r;
        }
        static _getTransformData(t) {
            var e;
            ("pivotX" in t || "pivotY" in t) && (e = e || new p()).translate(-Te._getObjVar(t, "pivotX", 0), -Te._getObjVar(t, "pivotY", 0));
            var i = Te._getObjVar(t, "scaleX", 1),
                s = Te._getObjVar(t, "scaleY", 1),
                r = Te._getObjVar(t, "rotation", 0);
            Te._getObjVar(t, "skewX", 0), Te._getObjVar(t, "skewY", 0);
            return 1 == i && 1 == s && 0 == r || ((e = e || new p()).scale(i, s), e.rotate(.0174532922222222 * r)), e;
        }
        static _addGraphicToGraphics(t, e) {
            var i, s;
            if ((i = t.props) && (s = Te.DrawTypeDic[t.type])) {
                var r = e,
                    a = Te._getParams(i, s[1], s[2], s[3]),
                    n = Te._tM;
                (n || 1 != Te._alpha) && (r.save(), n && r.transform(n), 1 != Te._alpha && r.alpha(Te._alpha)), r[s[0]].apply(r, a), (n || 1 != Te._alpha) && r.restore();
            }
        }
        static _adptLineData(t) {
            return t[2] = parseFloat(t[0]) + parseFloat(t[2]), t[3] = parseFloat(t[1]) + parseFloat(t[3]), t;
        }
        static _adptTextureData(t) {
            return t[0] = i.Loader.getRes(t[0]), t;
        }
        static _adptLinesData(t) {
            return t[2] = Te._getPointListByStr(t[2]), t;
        }
        static _isDrawType(t) {
            return "Image" !== t && t in Te.DrawTypeDic;
        }
        static _getParams(t, e, i = 0, s = null) {
            var r, a, n, h = Te._temParam;
            for (h.length = e.length, a = e.length, r = 0; r < a; r++) h[r] = Te._getObjVar(t, e[r][0], e[r][1]);
            return Te._alpha = Te._getObjVar(t, "alpha", 1), (n = Te._getTransformData(t)) ? (i || (i = 0), n.translate(h[i], h[i + 1]), h[i] = h[i + 1] = 0, Te._tM = n) : Te._tM = null, s && Te[s] && (h = Te[s](h)), h;
        }
        static _getPointListByStr(t) {
            var e, i, s = t.split(",");
            for (i = s.length, e = 0; e < i; e++) s[e] = parseFloat(s[e]);
            return s;
        }
        static _getObjVar(t, e, i) {
            return e in t ? t[e] : i;
        }
    }
    Te.DrawTypeDic = {
        Rect: ["drawRect", [
            ["x", 0],
            ["y", 0],
            ["width", 0],
            ["height", 0],
            ["fillColor", null],
            ["lineColor", null],
            ["lineWidth", 1]
        ]],
        Circle: ["drawCircle", [
            ["x", 0],
            ["y", 0],
            ["radius", 0],
            ["fillColor", null],
            ["lineColor", null],
            ["lineWidth", 1]
        ]],
        Pie: ["drawPie", [
            ["x", 0],
            ["y", 0],
            ["radius", 0],
            ["startAngle", 0],
            ["endAngle", 0],
            ["fillColor", null],
            ["lineColor", null],
            ["lineWidth", 1]
        ]],
        Image: ["drawTexture", [
            ["x", 0],
            ["y", 0],
            ["width", 0],
            ["height", 0]
        ]],
        Texture: ["drawTexture", [
            ["skin", null],
            ["x", 0],
            ["y", 0],
            ["width", 0],
            ["height", 0]
        ], 1, "_adptTextureData"],
        FillTexture: ["fillTexture", [
            ["skin", null],
            ["x", 0],
            ["y", 0],
            ["width", 0],
            ["height", 0],
            ["repeat", null]
        ], 1, "_adptTextureData"],
        FillText: ["fillText", [
            ["text", ""],
            ["x", 0],
            ["y", 0],
            ["font", null],
            ["color", null],
            ["textAlign", null]
        ], 1],
        Line: ["drawLine", [
            ["x", 0],
            ["y", 0],
            ["toX", 0],
            ["toY", 0],
            ["lineColor", null],
            ["lineWidth", 0]
        ], 0, "_adptLineData"],
        Lines: ["drawLines", [
            ["x", 0],
            ["y", 0],
            ["points", ""],
            ["lineColor", null],
            ["lineWidth", 0]
        ], 0, "_adptLinesData"],
        Curves: ["drawCurves", [
            ["x", 0],
            ["y", 0],
            ["points", ""],
            ["lineColor", null],
            ["lineWidth", 0]
        ], 0, "_adptLinesData"],
        Poly: ["drawPoly", [
            ["x", 0],
            ["y", 0],
            ["points", ""],
            ["fillColor", null],
            ["lineColor", null],
            ["lineWidth", 1]
        ], 0, "_adptLinesData"]
    }, Te._temParam = [], Te._classMap = {};
    class xe extends T {
        constructor() {
            super(), this._bits = 0, this._children = xe.ARRAY_EMPTY, this._extUIChild = xe.ARRAY_EMPTY, this._parent = null, this.name = "", this.destroyed = !1, this.createGLBuffer();
        }
        createGLBuffer() {}
        _setBit(t, e) {
            t === me.DISPLAY && (this._getBit(t) != e && this._updateDisplayedInstage());
            e ? this._bits |= t : this._bits &= ~t;
        }
        _getBit(t) {
            return 0 != (this._bits & t);
        }
        _setUpNoticeChain() {
            this._getBit(me.DISPLAY) && this._setBitUp(me.DISPLAY);
        }
        _setBitUp(t) {
            var e = this;
            for (e._setBit(t, !0), e = e._parent; e;) {
                if (e._getBit(t)) return;
                e._setBit(t, !0), e = e._parent;
            }
        }
        on(t, e, i, s = null) {
            return t !== Wt.DISPLAY && t !== Wt.UNDISPLAY || this._getBit(me.DISPLAY) || this._setBitUp(me.DISPLAY), this._createListener(t, e, i, s, !1);
        }
        once(t, e, i, s = null) {
            return t !== Wt.DISPLAY && t !== Wt.UNDISPLAY || this._getBit(me.DISPLAY) || this._setBitUp(me.DISPLAY), this._createListener(t, e, i, s, !0);
        }
        destroy(t = !0) {
            this.destroyed = !0, this._destroyAllComponent(), this._parent && this._parent.removeChild(this), this._children && (t ? this.destroyChildren() : this.removeChildren()), this.onDestroy(), this._children = null, this.offAll();
        }
        onDestroy() {}
        destroyChildren() {
            if (this._children)
                for (var t = 0, e = this._children.length; t < e; t++) this._children[0].destroy(!0);
        }
        addChild(t) {
            if (!t || this.destroyed || t === this) return t;
            if (t._zOrder && this._setBit(me.HAS_ZORDER, !0), t._parent === this) {
                var e = this.getChildIndex(t);
                e !== this._children.length - 1 && (this._children.splice(e, 1), this._children.push(t), this._childChanged());
            } else t._parent && t._parent.removeChild(t), this._children === xe.ARRAY_EMPTY && (this._children = []), this._children.push(t), t._setParent(this), this._childChanged();
            return t;
        }
        addInputChild(t) {
            if (this._extUIChild == xe.ARRAY_EMPTY) this._extUIChild = [t];
            else {
                if (this._extUIChild.indexOf(t) >= 0) return null;
                this._extUIChild.push(t);
            }
            return null;
        }
        removeInputChild(t) {
            var e = this._extUIChild.indexOf(t);
            e >= 0 && this._extUIChild.splice(e, 1);
        }
        addChildren(...t) {
            for (var e = 0, i = t.length; e < i;) this.addChild(t[e++]);
        }
        addChildAt(t, e) {
            if (!t || this.destroyed || t === this) return t;
            if (t._zOrder && this._setBit(me.HAS_ZORDER, !0), e >= 0 && e <= this._children.length) {
                if (t._parent === this) {
                    var i = this.getChildIndex(t);
                    this._children.splice(i, 1), this._children.splice(e, 0, t), this._childChanged();
                } else t._parent && t._parent.removeChild(t), this._children === xe.ARRAY_EMPTY && (this._children = []), this._children.splice(e, 0, t), t._setParent(this);
                return t;
            }
            throw new Error("appendChildAt:The index is out of bounds");
        }
        getChildIndex(t) {
            return this._children.indexOf(t);
        }
        getChildByName(t) {
            var e = this._children;
            if (e)
                for (var i = 0, s = e.length; i < s; i++) {
                    var r = e[i];
                    if (r.name === t) return r;
                }
            return null;
        }
        getChildAt(t) {
            return this._children[t] || null;
        }
        setChildIndex(t, e) {
            var i = this._children;
            if (e < 0 || e >= i.length) throw new Error("setChildIndex:The index is out of bounds.");
            var s = this.getChildIndex(t);
            if (s < 0) throw new Error("setChildIndex:node is must child of this object.");
            return i.splice(s, 1), i.splice(e, 0, t), this._childChanged(), t;
        }
        _childChanged(t = null) {}
        removeChild(t) {
            if (!this._children) return t;
            var e = this._children.indexOf(t);
            return this.removeChildAt(e);
        }
        removeSelf() {
            return this._parent && this._parent.removeChild(this), this;
        }
        removeChildByName(t) {
            var e = this.getChildByName(t);
            return e && this.removeChild(e), e;
        }
        removeChildAt(t) {
            var e = this.getChildAt(t);
            return e && (this._children.splice(t, 1), e._setParent(null)), e;
        }
        removeChildren(t = 0, e = 2147483647) {
            if (this._children && this._children.length > 0) {
                var i = this._children;
                if (0 === t && e >= i.length - 1) {
                    var s = i;
                    this._children = xe.ARRAY_EMPTY;
                } else s = i.splice(t, e - t);
                for (var r = 0, a = s.length; r < a; r++) s[r]._setParent(null);
            }
            return this;
        }
        replaceChild(t, e) {
            var i = this._children.indexOf(e);
            return i > -1 ? (this._children.splice(i, 1, t), e._setParent(null), t._setParent(this), t) : null;
        }
        get numChildren() {
            return this._children.length;
        }
        get parent() {
            return this._parent;
        }
        _setParent(t) {
            this._parent !== t && (t ? (this._parent = t, this._onAdded(), this.event(Wt.ADDED), this._getBit(me.DISPLAY) && (this._setUpNoticeChain(), t.displayedInStage && this._displayChild(this, !0)), t._childChanged(this)) : (this._onRemoved(), this.event(Wt.REMOVED), this._parent._childChanged(), this._getBit(me.DISPLAY) && this._displayChild(this, !1), this._parent = t));
        }
        get displayedInStage() {
            return this._getBit(me.DISPLAY) ? this._getBit(me.DISPLAYED_INSTAGE) : (this._setBitUp(me.DISPLAY), this._getBit(me.DISPLAYED_INSTAGE));
        }
        _updateDisplayedInstage() {
            var t;
            t = this;
            for (var e = i.stage, s = !1; t;) {
                if (t._getBit(me.DISPLAY)) {
                    s = t._getBit(me.DISPLAYED_INSTAGE);
                    break;
                }
                if (t === e || t._getBit(me.DISPLAYED_INSTAGE)) {
                    s = !0;
                    break;
                }
                t = t._parent;
            }
            this._setBit(me.DISPLAYED_INSTAGE, s);
        }
        _setDisplay(t) {
            this._getBit(me.DISPLAYED_INSTAGE) !== t && (this._setBit(me.DISPLAYED_INSTAGE, t), t ? this.event(Wt.DISPLAY) : this.event(Wt.UNDISPLAY));
        }
        _displayChild(t, e) {
            var i = t._children;
            if (i)
                for (var s = 0, r = i.length; s < r; s++) {
                    var a = i[s];
                    a._getBit(me.DISPLAY) && (a._children.length > 0 ? this._displayChild(a, e) : a._setDisplay(e));
                }
            t._setDisplay(e);
        }
        contains(t) {
            if (t === this) return !0;
            for (; t;) {
                if (t._parent === this) return !0;
                t = t._parent;
            }
            return !1;
        }
        timerLoop(t, e, s, r = null, a = !0, n = !1) {
            (this.scene ? this.scene.timer : i.timer).loop(t, e, s, r, a, n);
        }
        timerOnce(t, e, s, r = null, a = !0) {
            (this.scene ? this.scene.timer : i.timer)._create(!1, !1, t, e, s, r, a);
        }
        frameLoop(t, e, s, r = null, a = !0) {
            (this.scene ? this.scene.timer : i.timer)._create(!0, !0, t, e, s, r, a);
        }
        frameOnce(t, e, s, r = null, a = !0) {
            (this.scene ? this.scene.timer : i.timer)._create(!0, !1, t, e, s, r, a);
        }
        clearTimer(t, e) {
            (this.scene ? this.scene.timer : i.timer).clear(t, e);
        }
        callLater(t, e = null) {
            (this.scene ? this.scene.timer : i.timer).callLater(this, t, e);
        }
        runCallLater(t) {
            (this.scene ? this.scene.timer : i.timer).runCallLater(this, t);
        }
        get scene() {
            return this._scene;
        }
        get active() {
            return !this._getBit(me.NOT_READY) && !this._getBit(me.NOT_ACTIVE);
        }
        set active(t) {
            if (t = !!t, !this._getBit(me.NOT_ACTIVE) !== t) {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw t ? "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event." : "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                this._setBit(me.NOT_ACTIVE, !t), this._parent && this._parent.activeInHierarchy && (t ? this._processActive() : this._processInActive());
            }
        }
        get activeInHierarchy() {
            return this._getBit(me.ACTIVE_INHIERARCHY);
        }
        _onActive() {
            O.spriteCount++;
        }
        _onInActive() {
            O.spriteCount--;
        }
        _onActiveInScene() {}
        _onInActiveInScene() {}
        _parse(t, e) {}
        _setBelongScene(t) {
            if (!this._scene) {
                this._scene = t, this._onActiveInScene();
                for (var e = 0, i = this._children.length; e < i; e++) this._children[e]._setBelongScene(t);
            }
        }
        _setUnBelongScene() {
            if (this._scene !== this) {
                this._onInActiveInScene(), this._scene = null;
                for (var t = 0, e = this._children.length; t < e; t++) this._children[t]._setUnBelongScene();
            }
        }
        onAwake() {}
        onEnable() {}
        _processActive() {
            this._activeChangeScripts || (this._activeChangeScripts = []), this._activeHierarchy(this._activeChangeScripts), this._activeScripts();
        }
        _activeHierarchy(t) {
            if (this._setBit(me.ACTIVE_INHIERARCHY, !0), this._components)
                for (var e = 0, i = this._components.length; e < i; e++) {
                    var s = this._components[e];
                    s._setActive(!0), s._isScript() && s._enabled && t.push(s);
                }
            for (this._onActive(), e = 0, i = this._children.length; e < i; e++) {
                var r = this._children[e];
                !r._getBit(me.NOT_ACTIVE) && r._activeHierarchy(t);
            }
            this._getBit(me.AWAKED) || (this._setBit(me.AWAKED, !0), this.onAwake()), this.onEnable();
        }
        _activeScripts() {
            for (var t = 0, e = this._activeChangeScripts.length; t < e; t++) this._activeChangeScripts[t].onEnable();
            this._activeChangeScripts.length = 0;
        }
        _processInActive() {
            this._activeChangeScripts || (this._activeChangeScripts = []), this._inActiveHierarchy(this._activeChangeScripts), this._inActiveScripts();
        }
        _inActiveHierarchy(t) {
            if (this._onInActive(), this._components)
                for (var e = 0, i = this._components.length; e < i; e++) {
                    var s = this._components[e];
                    s._setActive(!1), s._isScript() && s._enabled && t.push(s);
                }
            for (this._setBit(me.ACTIVE_INHIERARCHY, !1), e = 0, i = this._children.length; e < i; e++) {
                var r = this._children[e];
                r && !r._getBit(me.NOT_ACTIVE) && r._inActiveHierarchy(t);
            }
            this.onDisable();
        }
        _inActiveScripts() {
            for (var t = 0, e = this._activeChangeScripts.length; t < e; t++) this._activeChangeScripts[t].onDisable();
            this._activeChangeScripts.length = 0;
        }
        onDisable() {}
        _onAdded() {
            if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event.";
            var t = this._parent.scene;
            t && this._setBelongScene(t), this._parent.activeInHierarchy && this.active && this._processActive();
        }
        _onRemoved() {
            if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
            this._parent.activeInHierarchy && this.active && this._processInActive(), this._parent.scene && this._setUnBelongScene();
        }
        _addComponentInstance(t) {
            this._components = this._components || [], this._components.push(t), t.owner = this, t._onAdded(), this.activeInHierarchy && (t._setActive(!0), t._isScript() && t._enabled && t.onEnable());
        }
        _destroyComponent(t) {
            if (this._components)
                for (var e = 0, i = this._components.length; e < i; e++) {
                    var s = this._components[e];
                    if (s === t) {
                        s._destroy(), this._components.splice(e, 1);
                        break;
                    }
                }
        }
        _destroyAllComponent() {
            if (this._components) {
                for (var t = 0, e = this._components.length; t < e; t++) {
                    this._components[t]._destroy();
                }
                this._components.length = 0;
            }
        }
        _cloneTo(t, e, i) {
            var s = t;
            if (this._components)
                for (var r = 0, a = this._components.length; r < a; r++) {
                    var n = s.addComponent(this._components[r].constructor);
                    this._components[r]._cloneTo(n);
                }
        }
        addComponentIntance(t) {
            if (t.owner) throw "Node:the component has belong to other node.";
            if (t.isSingleton && this.getComponent(t.constructor)) throw "Node:the component is singleton,can't add the second one.";
            return this._addComponentInstance(t), t;
        }
        addComponent(t) {
            var e = s.createByClass(t);
            if (e._destroyed = !1, e.isSingleton && this.getComponent(t)) throw "无法实例" + t + "组件，" + t + "组件已存在！";
            return this._addComponentInstance(e), e;
        }
        getComponent(t) {
            if (this._components)
                for (var e = 0, i = this._components.length; e < i; e++) {
                    var s = this._components[e];
                    if (s instanceof t) return s;
                }
            return null;
        }
        getComponents(t) {
            var e;
            if (this._components)
                for (var i = 0, s = this._components.length; i < s; i++) {
                    var r = this._components[i];
                    r instanceof t && (e = e || []).push(r);
                }
            return e;
        }
        get timer() {
            return this.scene ? this.scene.timer : i.timer;
        }
    }
    xe.ARRAY_EMPTY = [], Te.regClass("laya.display.Node", xe), Te.regClass("Laya.Node", xe);
    class ye {
        reset() {
            return this.bounds && this.bounds.recover(), this.userBounds && this.userBounds.recover(), this.bounds = null, this.userBounds = null, this.temBM = null, this;
        }
        recover() {
            s.recover("BoundsStyle", this.reset());
        }
        static create() {
            return s.getItemByClass("BoundsStyle", ye);
        }
    }
    class Ee extends A {
        get source() {
            return this._source;
        }
        _getSource() {
            return this._source;
        }
        constructor(t = !1) {
            super(), this._source = t ? jt.createElement("canvas") : this, this.lock = !0;
        }
        clear() {
            this._ctx && this._ctx.clear && this._ctx.clear(), this._texture && (this._texture.destroy(), this._texture = null);
        }
        destroy() {
            super.destroy(), this._setCPUMemory(0), this._ctx && this._ctx.destroy && this._ctx.destroy(), this._ctx = null;
        }
        release() {}
        get context() {
            return this._ctx ? this._ctx : (this._source == this ? this._ctx = new i.Context() : this._ctx = this._source.getContext(i.Render.isConchApp ? "layagl" : "2d"), this._ctx._canvas = this, this._ctx);
        }
        _setContext(t) {
            this._ctx = t;
        }
        getContext(t, e = null) {
            return this.context;
        }
        getMemSize() {
            return 0;
        }
        size(t, e) {
            (this._width != t || this._height != e || this._source && (this._source.width != t || this._source.height != e)) && (this._width = t, this._height = e, this._setCPUMemory(t * e * 4), this._ctx && this._ctx.size && this._ctx.size(t, e), this._source && (this._source.height = e, this._source.width = t), this._texture && (this._texture.destroy(), this._texture = null));
        }
        getTexture() {
            if (!this._texture) {
                var t = new R();
                t.loadImageSource(this.source), this._texture = new Yt(t);
            }
            return this._texture;
        }
        toBase64(t, e) {
            if (this._source) {
                if (i.Render.isConchApp) {
                    var s = window;
                    if (2 == s.conchConfig.threadMode) throw "native 2 thread mode use toBase64Async";
                    var r = this._ctx._targets.sourceWidth,
                        a = this._ctx._targets.sourceHeight,
                        n = this._ctx._targets.getData(0, 0, r, a);
                    return s.conchToBase64FlipY ? s.conchToBase64FlipY(t, e, n.buffer, r, a) : s.conchToBase64(t, e, n.buffer, r, a);
                }
                return this._source.toDataURL(t, e);
            }
            return null;
        }
        toBase64Async(t, e, i) {
            var s = this._ctx._targets.sourceWidth,
                r = this._ctx._targets.sourceHeight;
            this._ctx._targets.getDataAsync(0, 0, s, r, function(a) {
                let n = window;
                var h = n.conchToBase64FlipY ? n.conchToBase64FlipY(t, e, a.buffer, s, r) : n.conchToBase64(t, e, a.buffer, s, r);
                i(h);
            });
        }
    }
    class Ae {
        constructor() {
            this.reset();
        }
        needBitmapCache() {
            return this.cacheForFilters || !!this.mask;
        }
        needEnableCanvasRender() {
            return "none" != this.userSetCache || this.cacheForFilters || !!this.mask;
        }
        releaseContext() {
            if (this.canvas && this.canvas.size) {
                s.recover("CacheCanvas", this.canvas), this.canvas.size(0, 0);
                try {
                    this.canvas.width = 0, this.canvas.height = 0;
                } catch (t) {}
            }
            this.canvas = null;
        }
        createContext() {
            if (!this.canvas) {
                this.canvas = s.getItem("CacheCanvas") || new Ee(!1);
                var t = this.canvas.context;
                t || (t = this.canvas.getContext("2d"));
            }
        }
        releaseFilterCache() {
            var t = this.filterCache;
            t && (t.destroy(), t.recycle(), this.filterCache = null);
        }
        recover() {
            this !== Ae.EMPTY && s.recover("SpriteCache", this.reset());
        }
        reset() {
            return this.releaseContext(), this.releaseFilterCache(), this.cacheAs = "none", this.enableCanvasRender = !1, this.userSetCache = "none", this.cacheForFilters = !1, this.staticCache = !1, this.reCache = !0, this.mask = null, this.maskParent = null, this.filterCache = null, this.filters = null, this.hasGlowFilter = !1, this.cacheRect && this.cacheRect.recover(), this.cacheRect = null, this;
        }
        static create() {
            return s.getItemByClass("SpriteCache", Ae);
        }
        _calculateCacheRect(t, e, i, s) {
            var r, a = t._cacheStyle;
            if (a.cacheRect || (a.cacheRect = g.create()), "bitmap" === e ? ((r = t.getSelfBounds()).width = r.width + 2 * Ae.CANVAS_EXTEND_EDGE, r.height = r.height + 2 * Ae.CANVAS_EXTEND_EDGE, r.x = r.x - t.pivotX, r.y = r.y - t.pivotY, r.x = r.x - Ae.CANVAS_EXTEND_EDGE, r.y = r.y - Ae.CANVAS_EXTEND_EDGE, r.x = Math.floor(r.x + i) - i, r.y = Math.floor(r.y + s) - s, r.width = Math.floor(r.width), r.height = Math.floor(r.height), a.cacheRect.copyFrom(r)) : a.cacheRect.setTo(-t._style.pivotX, -t._style.pivotY, 1, 1), r = a.cacheRect, t._style.scrollRect) {
                var n = t._style.scrollRect;
                r.x -= n.x, r.y -= n.y;
            }
            return Ae._scaleInfo.setTo(1, 1), Ae._scaleInfo;
        }
    }
    Ae.EMPTY = new Ae(), Ae._scaleInfo = new f(), Ae.CANVAS_EXTEND_EDGE = 16;
    class Ce {
        constructor() {
            this.reset();
        }
        reset() {
            return this.scaleX = this.scaleY = 1, this.skewX = this.skewY = 0, this.pivotX = this.pivotY = this.rotation = 0, this.alpha = 1, this.scrollRect && this.scrollRect.recover(), this.scrollRect = null, this.viewport && this.viewport.recover(), this.viewport = null, this.hitArea = null, this.dragging = null, this.blendMode = null, this;
        }
        recover() {
            this !== Ce.EMPTY && s.recover("SpriteStyle", this.reset());
        }
        static create() {
            return s.getItemByClass("SpriteStyle", Ce);
        }
    }
    Ce.EMPTY = new Ce();
    class be {
        static __init__() {
            be.map[ae.ALPHA | ae.TRANSFORM | ae.GRAPHICS] = be.alpha_transform_drawLayaGL, be.map[ae.ALPHA | ae.GRAPHICS] = be.alpha_drawLayaGL, be.map[ae.TRANSFORM | ae.GRAPHICS] = be.transform_drawLayaGL, be.map[ae.TRANSFORM | ae.CHILDS] = be.transform_drawNodes, be.map[ae.ALPHA | ae.TRANSFORM | ae.TEXTURE] = be.alpha_transform_drawTexture, be.map[ae.ALPHA | ae.TEXTURE] = be.alpha_drawTexture, be.map[ae.TRANSFORM | ae.TEXTURE] = be.transform_drawTexture, be.map[ae.GRAPHICS | ae.CHILDS] = be.drawLayaGL_drawNodes;
        }
        static transform_drawTexture(t, e, i, s) {
            t._style;
            var r = t.texture;
            e.saveTransform(be.curMat), e.transformByMatrix(t.transform, i, s), e.drawTexture(r, -t.pivotX, -t.pivotY, t._width || r.width, t._height || r.height), e.restoreTransform(be.curMat);
        }
        static alpha_drawTexture(t, e, i, s) {
            var r, a = t._style,
                n = t.texture;
            if ((r = a.alpha) > .01 || t._needRepaint()) {
                var h = e.globalAlpha;
                e.globalAlpha *= r, e.drawTexture(n, i - a.pivotX + n.offsetX, s - a.pivotY + n.offsetY, t._width || n.width, t._height || n.height), e.globalAlpha = h;
            }
        }
        static alpha_transform_drawTexture(t, e, i, s) {
            var r, a = t._style,
                n = t.texture;
            if ((r = a.alpha) > .01 || t._needRepaint()) {
                var h = e.globalAlpha;
                e.globalAlpha *= r, e.saveTransform(be.curMat), e.transformByMatrix(t.transform, i, s), e.drawTexture(n, -a.pivotX + n.offsetX, -a.pivotY + n.offsetY, t._width || n.width, t._height || n.height), e.restoreTransform(be.curMat), e.globalAlpha = h;
            }
        }
        static alpha_transform_drawLayaGL(t, e, i, s) {
            var r, a = t._style;
            if ((r = a.alpha) > .01 || t._needRepaint()) {
                var n = e.globalAlpha;
                e.globalAlpha *= r, e.saveTransform(be.curMat), e.transformByMatrix(t.transform, i, s), t._graphics && t._graphics._render(t, e, -a.pivotX, -a.pivotY), e.restoreTransform(be.curMat), e.globalAlpha = n;
            }
        }
        static alpha_drawLayaGL(t, e, i, s) {
            var r, a = t._style;
            if ((r = a.alpha) > .01 || t._needRepaint()) {
                var n = e.globalAlpha;
                e.globalAlpha *= r, t._graphics && t._graphics._render(t, e, i - a.pivotX, s - a.pivotY), e.globalAlpha = n;
            }
        }
        static transform_drawLayaGL(t, e, i, s) {
            var r = t._style;
            e.saveTransform(be.curMat), e.transformByMatrix(t.transform, i, s), t._graphics && t._graphics._render(t, e, -r.pivotX, -r.pivotY), e.restoreTransform(be.curMat);
        }
        static transform_drawNodes(t, e, i, s) {
            var r = t._getBit(me.DRAWCALL_OPTIMIZE) && e.drawCallOptimize(!0),
                a = t._style;
            e.saveTransform(be.curMat), e.transformByMatrix(t.transform, i, s), i = -a.pivotX, s = -a.pivotY;
            var n, h = t._children,
                o = h.length;
            if (a.viewport) {
                var l, _, c = a.viewport,
                    u = c.x,
                    d = c.y,
                    p = c.right,
                    f = c.bottom;
                for (g = 0; g < o; ++g)(n = h[g])._visible && (l = n._x) < p && l + n.width > u && (_ = n._y) < f && _ + n.height > d && n.render(e, i, s);
            } else
                for (var g = 0; g < o; ++g)(n = h[g])._visible && n.render(e, i, s);
            e.restoreTransform(be.curMat), r && e.drawCallOptimize(!1);
        }
        static drawLayaGL_drawNodes(t, e, i, s) {
            var r = t._getBit(me.DRAWCALL_OPTIMIZE) && e.drawCallOptimize(!0),
                a = t._style;
            i -= a.pivotX, s -= a.pivotY, t._graphics && t._graphics._render(t, e, i, s);
            var n, h = t._children,
                o = h.length;
            if (a.viewport) {
                var l, _, c = a.viewport,
                    u = c.x,
                    d = c.y,
                    p = c.right,
                    f = c.bottom;
                for (g = 0; g < o; ++g)(n = h[g])._visible && (l = n._x) < p && l + n.width > u && (_ = n._y) < f && _ + n.height > d && n.render(e, i, s);
            } else
                for (var g = 0; g < o; ++g)(n = h[g])._visible && n.render(e, i, s);
            r && e.drawCallOptimize(!1);
        }
    }
    be.map = {}, be.curMat = new p();
    class Re {
        constructor(t, e) {
            if (be.map[t]) return this._fun = be.map[t], void(this._next = Re.NORENDER);
            switch (this._next = e || Re.NORENDER, t) {
                case 0:
                    return void(this._fun = this._no);
                case ae.ALPHA:
                    return void(this._fun = this._alpha);
                case ae.TRANSFORM:
                    return void(this._fun = this._transform);
                case ae.BLEND:
                    return void(this._fun = this._blend);
                case ae.CANVAS:
                    return void(this._fun = this._canvas);
                case ae.MASK:
                    return void(this._fun = this._mask);
                case ae.CLIP:
                    return void(this._fun = this._clip);
                case ae.STYLE:
                    return void(this._fun = this._style);
                case ae.GRAPHICS:
                    return void(this._fun = this._graphics);
                case ae.CHILDS:
                    return void(this._fun = this._children);
                case ae.CUSTOM:
                    return void(this._fun = this._custom);
                case ae.TEXTURE:
                    return void(this._fun = this._texture);
                case ae.FILTERS:
                    return void(this._fun = W._filter);
                case Re.INIT:
                    return void(this._fun = Re._initRenderFun);
            }
            this.onCreate(t);
        }
        static __init__() {
            var t, e, i;
            for (be.__init__(), i = new Re(Re.INIT, null), e = Re.renders.length = 2 * ae.CHILDS, t = 0; t < e; t++) Re.renders[t] = i;
            Re.renders[0] = new Re(0, null);
        }
        static _initRenderFun(t, e, i, s) {
            var r = t._renderType;
            (Re.renders[r] = Re._getTypeRender(r))._fun(t, e, i, s);
        }
        static _getTypeRender(t) {
            if (be.map[t]) return new Re(t, null);
            for (var e = null, i = ae.CHILDS; i > 0;) i & t && (e = new Re(i, e)), i >>= 1;
            return e;
        }
        onCreate(t) {}
        _style(t, e, i, s) {
            var r = t._style;
            null != r.render && r.render(t, e, i, s);
            var a = this._next;
            a._fun.call(a, t, e, i, s);
        }
        _no(t, e, i, s) {}
        _custom(t, e, i, s) {
            t.customRender(e, i, s), this._next._fun.call(this._next, t, e, i - t.pivotX, s - t.pivotY);
        }
        _clip(t, e, i, s) {
            var r = this._next;
            if (r != Re.NORENDER) {
                var a = t._style.scrollRect;
                e.save(), e.clipRect(i, s, a.width, a.height), r._fun.call(r, t, e, i - a.x, s - a.y), e.restore();
            }
        }
        _texture(t, e, i, s) {
            var r = t.texture;
            r._getSource() && e.drawTexture(r, i - t.pivotX + r.offsetX, s - t.pivotY + r.offsetY, t._width || r.width, t._height || r.height);
            var a = this._next;
            a != Re.NORENDER && a._fun.call(a, t, e, i, s);
        }
        _graphics(t, e, i, s) {
            var r = t._style,
                a = t._graphics;
            a && a._render(t, e, i - r.pivotX, s - r.pivotY);
            var n = this._next;
            n != Re.NORENDER && n._fun.call(n, t, e, i, s);
        }
        _image(t, e, i, s) {
            var r = t._style;
            e.drawTexture2(i, s, r.pivotX, r.pivotY, t.transform, t._graphics._one);
        }
        _image2(t, e, i, s) {
            var r = t._style;
            e.drawTexture2(i, s, r.pivotX, r.pivotY, t.transform, t._graphics._one);
        }
        _alpha(t, e, i, s) {
            var r;
            if ((r = t._style.alpha) > .01 || t._needRepaint()) {
                var a = e.globalAlpha;
                e.globalAlpha *= r;
                var n = this._next;
                n._fun.call(n, t, e, i, s), e.globalAlpha = a;
            }
        }
        _transform(t, e, i, s) {
            var r = t.transform,
                a = this._next;
            t._style;
            r && a != Re.NORENDER ? (e.save(), e.transform(r.a, r.b, r.c, r.d, r.tx + i, r.ty + s), a._fun.call(a, t, e, 0, 0), e.restore()) : a != Re.NORENDER && a._fun.call(a, t, e, i, s);
        }
        _children(t, e, i, s) {
            var r, a = t._style,
                n = t._children,
                h = n.length;
            i -= t.pivotX, s -= t.pivotY;
            var o = t._getBit(me.DRAWCALL_OPTIMIZE) && e.drawCallOptimize(!0);
            if (a.viewport) {
                var l, _, c = a.viewport,
                    u = c.x,
                    d = c.y,
                    p = c.right,
                    f = c.bottom;
                for (g = 0; g < h; ++g)(r = n[g])._visible && (l = r._x) < p && l + r.width > u && (_ = r._y) < f && _ + r.height > d && r.render(e, i, s);
            } else
                for (var g = 0; g < h; ++g)(r = n[g])._visible && r.render(e, i, s);
            o && e.drawCallOptimize(!1);
        }
        _canvas(t, e, s, r) {
            var a = t._cacheStyle,
                n = this._next;
            if (a.enableCanvasRender) {
                "bitmap" === a.cacheAs ? O.canvasBitmap++ : O.canvasNormal++;
                var h = !1,
                    o = !1;
                if (a.canvas) {
                    var l = a.canvas,
                        _ = (l.context, l.touches);
                    if (_)
                        for (var c = 0; c < _.length; c++)
                            if (_[c].deleted) {
                                o = !0;
                                break;
                            }
                    h = l.isCacheValid && !l.isCacheValid();
                }
                if (t._needRepaint() || !a.canvas || o || h || i.stage.isGlobalRepaint())
                    if ("normal" === a.cacheAs) {
                        if (e._targets) return void n._fun.call(n, t, e, s, r);
                        this._canvas_webgl_normal_repaint(t, e);
                    } else this._canvas_repaint(t, e, s, r);
                var u = a.cacheRect;
                e.drawCanvas(a.canvas, s + u.x, r + u.y, u.width, u.height);
            } else n._fun.call(n, t, e, s, r);
        }
        _canvas_repaint(t, e, i, s) {
            var r, a, n, h, o, l, _, c, u, d = t._cacheStyle,
                p = this._next,
                f = d.canvas,
                g = d.cacheAs;
            if (_ = (u = d._calculateCacheRect(t, g, i, s)).x, c = u.y, o = (h = d.cacheRect).width * _, l = h.height * c, a = h.x, n = h.y, "bitmap" === g && (o > 2048 || l > 2048)) return console.warn("cache bitmap size larger than 2048,cache ignored"), d.releaseContext(), void p._fun.call(p, t, e, i, s);
            if (f || (d.createContext(), f = d.canvas), (r = f.context).sprite = t, (f.width != o || f.height != l) && f.size(o, l), "bitmap" === g ? r.asBitmap = !0 : "normal" === g && (r.asBitmap = !1), r.clear(), 1 != _ || 1 != c) {
                var m = r;
                m.save(), m.scale(_, c), p._fun.call(p, t, r, -a, -n), m.restore(), t._applyFilters();
            } else m = r, p._fun.call(p, t, r, -a, -n), t._applyFilters();
            d.staticCache && (d.reCache = !1), O.canvasReCache++;
        }
        _canvas_webgl_normal_repaint(t, e) {
            var i = t._cacheStyle,
                s = this._next,
                r = i.canvas,
                a = i.cacheAs;
            i._calculateCacheRect(t, a, 0, 0);
            r || (r = i.canvas = new xt(e, t));
            var n = r.context;
            r.startRec(), s._fun.call(s, t, n, t.pivotX, t.pivotY), t._applyFilters(), O.canvasReCache++, r.endRec();
        }
        _blend(t, e, i, s) {
            var r = t._style,
                a = this._next;
            r.blendMode ? (e.save(), e.globalCompositeOperation = r.blendMode, a._fun.call(a, t, e, i, s), e.restore()) : a._fun.call(a, t, e, i, s);
        }
        _mask(t, e, i, s) {
            var r = this._next,
                a = t.mask,
                n = e;
            if (a) {
                n.save();
                var h = n.globalCompositeOperation,
                    o = new g();
                if (o.copyFrom(a.getBounds()), o.width = Math.round(o.width), o.height = Math.round(o.height), o.x = Math.round(o.x), o.y = Math.round(o.y), o.width > 0 && o.height > 0) {
                    var l = o.width,
                        _ = o.height,
                        c = I.getRT(l, _);
                    n.breakNextMerge(), n.pushRT(), n.addRenderObject(G.create([n, c, l, _], Re.tmpTarget, this)), a.render(n, -o.x, -o.y), n.breakNextMerge(), n.popRT(), n.save(), n.clipRect(i + o.x - t.getStyle().pivotX, s + o.y - t.getStyle().pivotY, l, _), r._fun.call(r, t, n, i, s), n.restore(), h = n.globalCompositeOperation, n.addRenderObject(G.create(["mask"], Re.setBlendMode, this));
                    var u = U.create(L.TEXTURE2D, 0),
                        d = Yt.INV_UV;
                    n.drawTarget(c, i + o.x - t.getStyle().pivotX, s + o.y - t.getStyle().pivotY, l, _, p.TEMP.identity(), u, d, 6), n.addRenderObject(G.create([c], Re.recycleTarget, this)), n.addRenderObject(G.create([h], Re.setBlendMode, this));
                }
                n.restore();
            } else r._fun.call(r, t, e, i, s);
        }
        static tmpTarget(t, e, i, s) {
            e.start(), e.clear(0, 0, 0, 0);
        }
        static recycleTarget(t) {
            I.releaseRT(t);
        }
        static setBlendMode(t) {
            var e = C.mainContext;
            P.targetFns[P.TOINT[t]](e);
        }
    }
    Re.INIT = 69905, Re.renders = [], Re.NORENDER = new Re(0, null), Re.tempUV = new Array(8);
    class we extends xe {
        constructor() {
            super(), this._x = 0, this._y = 0, this._width = 0, this._height = 0, this._visible = !0, this._mouseState = 0, this._zOrder = 0, this._renderType = 0, this._transform = null, this._tfChanged = !1, this._repaint = ae.REPAINT_NONE, this._texture = null, this._style = Ce.EMPTY, this._cacheStyle = Ae.EMPTY, this._boundStyle = null, this._graphics = null, this.mouseThrough = !1, this.autoSize = !1, this.hitTestPrior = !1;
        }
        destroy(t = !0) {
            super.destroy(t), this._style && this._style.recover(), this._cacheStyle && this._cacheStyle.recover(), this._boundStyle && this._boundStyle.recover(), this._style = null, this._cacheStyle = null, this._boundStyle = null, this._transform = null, this._graphics && this._graphics.autoDestroy && this._graphics.destroy(), this._graphics = null, this.texture = null;
        }
        updateZOrder() {
            Y.updateOrder(this._children) && this.repaint();
        }
        _getBoundsStyle() {
            return this._boundStyle || (this._boundStyle = ye.create()), this._boundStyle;
        }
        _setCustomRender() {}
        set customRenderEnable(t) {
            t && (this._renderType |= ae.CUSTOM, this._setRenderType(this._renderType), this._setCustomRender());
        }
        get cacheAs() {
            return this._cacheStyle.cacheAs;
        }
        _setCacheAs(t) {}
        set cacheAs(t) {
            t !== this._cacheStyle.userSetCache && (this.mask && "normal" === t || (this._setCacheAs(t), this._getCacheStyle().userSetCache = t, this._checkCanvasEnable(), this.repaint()));
        }
        _checkCanvasEnable() {
            var t = this._cacheStyle.needEnableCanvasRender();
            this._getCacheStyle().enableCanvasRender = t, t ? (this._cacheStyle.needBitmapCache() ? this._cacheStyle.cacheAs = "bitmap" : this._cacheStyle.cacheAs = this._cacheStyle.userSetCache, this._cacheStyle.reCache = !0, this._renderType |= ae.CANVAS) : (this._cacheStyle.cacheAs = "none", this._cacheStyle.releaseContext(), this._renderType &= ~ae.CANVAS), this._setCacheAs(this._cacheStyle.cacheAs), this._setRenderType(this._renderType);
        }
        get staticCache() {
            return this._cacheStyle.staticCache;
        }
        set staticCache(t) {
            this._getCacheStyle().staticCache = t, t || this.reCache();
        }
        reCache() {
            this._cacheStyle.reCache = !0, this._repaint |= ae.REPAINT_CACHE;
        }
        getRepaint() {
            return this._repaint;
        }
        _setX(t) {
            this._x = t;
        }
        _setY(t) {
            this._y = t;
        }
        _setWidth(t, e) {}
        _setHeight(t, e) {}
        get x() {
            return this._x;
        }
        set x(t) {
            if (!this.destroyed && this._x !== t) {
                this._setX(t), this.parentRepaint(ae.REPAINT_CACHE);
                var e = this._cacheStyle.maskParent;
                e && e.repaint(ae.REPAINT_CACHE);
            }
        }
        get y() {
            return this._y;
        }
        set y(t) {
            if (!this.destroyed && this._y !== t) {
                this._setY(t), this.parentRepaint(ae.REPAINT_CACHE);
                var e = this._cacheStyle.maskParent;
                e && e.repaint(ae.REPAINT_CACHE);
            }
        }
        get width() {
            return this.get_width();
        }
        set width(t) {
            this.set_width(t);
        }
        set_width(t) {
            this._width !== t && (this._width = t, this._setWidth(this.texture, t), this._setTranformChange());
        }
        get_width() {
            return this.autoSize ? this.texture ? this.texture.width : this._graphics || 0 !== this._children.length ? this.getSelfBounds().width : 0 : this._width || (this.texture ? this.texture.width : 0);
        }
        get height() {
            return this.get_height();
        }
        set height(t) {
            this.set_height(t);
        }
        set_height(t) {
            this._height !== t && (this._height = t, this._setHeight(this.texture, t), this._setTranformChange());
        }
        get_height() {
            return this.autoSize ? this.texture ? this.texture.height : this._graphics || 0 !== this._children.length ? this.getSelfBounds().height : 0 : this._height || (this.texture ? this.texture.height : 0);
        }
        get displayWidth() {
            return this.width * this.scaleX;
        }
        get displayHeight() {
            return this.height * this.scaleY;
        }
        setSelfBounds(t) {
            this._getBoundsStyle().userBounds = t;
        }
        getBounds() {
            return this._getBoundsStyle().bounds = g._getWrapRec(this._boundPointsToParent());
        }
        getSelfBounds() {
            return this._boundStyle && this._boundStyle.userBounds ? this._boundStyle.userBounds : this._graphics || 0 !== this._children.length || this._texture ? this._getBoundsStyle().bounds = g._getWrapRec(this._getBoundPointsM(!1)) : g.TEMP.setTo(0, 0, this.width, this.height);
        }
        _boundPointsToParent(t = !1) {
            var e = 0,
                i = 0;
            this._style && (e = this.pivotX, i = this.pivotY, t = t || 0 !== this._style.rotation, this._style.scrollRect && (e += this._style.scrollRect.x, i += this._style.scrollRect.y));
            var s = this._getBoundPointsM(t);
            if (!s || s.length < 1) return s;
            if (8 != s.length && (s = t ? J.scanPList(s) : g._getWrapRec(s, g.TEMP)._getBoundPoints()), !this.transform) return Y.transPointList(s, this._x - e, this._y - i), s;
            var r, a = f.TEMP,
                n = s.length;
            for (r = 0; r < n; r += 2) a.x = s[r], a.y = s[r + 1], this.toParentPoint(a), s[r] = a.x, s[r + 1] = a.y;
            return s;
        }
        getGraphicBounds(t = !1) {
            return this._graphics ? this._graphics.getBounds(t) : g.TEMP.setTo(0, 0, 0, 0);
        }
        _getBoundPointsM(t = !1) {
            if (this._boundStyle && this._boundStyle.userBounds) return this._boundStyle.userBounds._getBoundPoints();
            if (this._boundStyle || this._getBoundsStyle(), this._boundStyle.temBM || (this._boundStyle.temBM = []), this._style.scrollRect) {
                var e = Y.clearArray(this._boundStyle.temBM),
                    i = g.TEMP;
                return i.copyFrom(this._style.scrollRect), Y.concatArray(e, i._getBoundPoints()), e;
            }
            var s, r, a, n;
            this._graphics ? s = this._graphics.getBoundPoints() : (s = Y.clearArray(this._boundStyle.temBM), this._texture && ((i = g.TEMP).setTo(0, 0, this.width || this._texture.width, this.height || this._texture.height), Y.concatArray(s, i._getBoundPoints())));
            for (var h = 0, o = (n = this._children).length; h < o; h++)(r = n[h]) instanceof we && !0 === r._visible && (a = r._boundPointsToParent(t)) && (s = s ? Y.concatArray(s, a) : a);
            return s;
        }
        _getCacheStyle() {
            return this._cacheStyle === Ae.EMPTY && (this._cacheStyle = Ae.create()), this._cacheStyle;
        }
        getStyle() {
            return this._style === Ce.EMPTY && (this._style = Ce.create()), this._style;
        }
        setStyle(t) {
            this._style = t;
        }
        get scaleX() {
            return this._style.scaleX;
        }
        set scaleX(t) {
            this.set_scaleX(t);
        }
        _setScaleX(t) {
            this._style.scaleX = t;
        }
        get scaleY() {
            return this._style.scaleY;
        }
        set scaleY(t) {
            this.set_scaleY(t);
        }
        _setScaleY(t) {
            this._style.scaleY = t;
        }
        set_scaleX(t) {
            this.getStyle().scaleX !== t && (this._setScaleX(t), this._setTranformChange());
        }
        get_scaleX() {
            return this._style.scaleX;
        }
        set_scaleY(t) {
            this.getStyle().scaleY !== t && (this._setScaleY(t), this._setTranformChange());
        }
        get_scaleY() {
            return this._style.scaleY;
        }
        get rotation() {
            return this._style.rotation;
        }
        set rotation(t) {
            this.getStyle().rotation !== t && (this._setRotation(t), this._setTranformChange());
        }
        _setRotation(t) {
            this._style.rotation = t;
        }
        get skewX() {
            return this._style.skewX;
        }
        set skewX(t) {
            this.getStyle().skewX !== t && (this._setSkewX(t), this._setTranformChange());
        }
        _setSkewX(t) {
            this._style.skewX = t;
        }
        get skewY() {
            return this._style.skewY;
        }
        set skewY(t) {
            this.getStyle().skewY !== t && (this._setSkewY(t), this._setTranformChange());
        }
        _setSkewY(t) {
            this._style.skewY = t;
        }
        _createTransform() {
            return p.create();
        }
        _adjustTransform() {
            this._tfChanged = !1;
            var t = this._style,
                e = t.scaleX,
                i = t.scaleY,
                s = t.skewX,
                r = t.skewY,
                a = t.rotation,
                n = this._transform || (this._transform = this._createTransform());
            if (a || 1 !== e || 1 !== i || 0 !== s || 0 !== r) {
                n._bTransform = !0;
                var h = .0174532922222222 * (a - s),
                    o = .0174532922222222 * (a + r),
                    l = Math.cos(o),
                    _ = Math.sin(o),
                    c = Math.sin(h),
                    u = Math.cos(h);
                n.a = e * l, n.b = e * _, n.c = -i * c, n.d = i * u, n.tx = n.ty = 0;
            } else n.identity(), this._renderType &= ~ae.TRANSFORM, this._setRenderType(this._renderType);
            return n;
        }
        _setTransform(t) {}
        get transform() {
            return this._tfChanged ? this._adjustTransform() : this._transform;
        }
        set transform(t) {
            this.set_transform(t);
        }
        get_transform() {
            return this._tfChanged ? this._adjustTransform() : this._transform;
        }
        set_transform(t) {
            this._tfChanged = !1;
            var e = this._transform || (this._transform = this._createTransform());
            t.copyTo(e), this._setTransform(e), t && (this._x = e.tx, this._y = e.ty, e.tx = e.ty = 0), t ? this._renderType |= ae.TRANSFORM : this._renderType &= ~ae.TRANSFORM, this._setRenderType(this._renderType), this.parentRepaint();
        }
        _setPivotX(t) {
            this.getStyle().pivotX = t;
        }
        _getPivotX() {
            return this._style.pivotX;
        }
        _setPivotY(t) {
            this.getStyle().pivotY = t;
        }
        _getPivotY() {
            return this._style.pivotY;
        }
        get pivotX() {
            return this._getPivotX();
        }
        set pivotX(t) {
            this._setPivotX(t), this.repaint();
        }
        get pivotY() {
            return this._getPivotY();
        }
        set pivotY(t) {
            this._setPivotY(t), this.repaint();
        }
        _setAlpha(t) {
            this._style.alpha !== t && (this.getStyle().alpha = t, 1 !== t ? this._renderType |= ae.ALPHA : this._renderType &= ~ae.ALPHA, this._setRenderType(this._renderType), this.parentRepaint());
        }
        _getAlpha() {
            return this._style.alpha;
        }
        get alpha() {
            return this._getAlpha();
        }
        set alpha(t) {
            t = t < 0 ? 0 : t > 1 ? 1 : t, this._setAlpha(t);
        }
        get visible() {
            return this.get_visible();
        }
        set visible(t) {
            this.set_visible(t);
        }
        get_visible() {
            return this._visible;
        }
        set_visible(t) {
            this._visible !== t && (this._visible = t, this.parentRepaint(ae.REPAINT_ALL));
        }
        _setBlendMode(t) {}
        get blendMode() {
            return this._style.blendMode;
        }
        set blendMode(t) {
            this._setBlendMode(t), this.getStyle().blendMode = t, t && "source-over" != t ? this._renderType |= ae.BLEND : this._renderType &= ~ae.BLEND, this._setRenderType(this._renderType), this.parentRepaint();
        }
        get graphics() {
            return this._graphics || (this.graphics = new ge(), this._graphics.autoDestroy = !0), this._graphics;
        }
        _setGraphics(t) {}
        _setGraphicsCallBack() {}
        set graphics(t) {
            this._graphics && (this._graphics._sp = null), this._graphics = t, t ? (this._setGraphics(t), this._renderType |= ae.GRAPHICS, t._sp = this) : this._renderType &= ~ae.GRAPHICS, this._setRenderType(this._renderType), this.repaint();
        }
        get scrollRect() {
            return this._style.scrollRect;
        }
        _setScrollRect(t) {}
        set scrollRect(t) {
            this.getStyle().scrollRect = t, this._setScrollRect(t), this.repaint(), t ? this._renderType |= ae.CLIP : this._renderType &= ~ae.CLIP, this._setRenderType(this._renderType);
        }
        pos(t, e, i = !1) {
            if (this._x !== t || this._y !== e) {
                if (this.destroyed) return this;
                if (i) {
                    this._setX(t), this._setY(e), this.parentRepaint(ae.REPAINT_CACHE);
                    var s = this._cacheStyle.maskParent;
                    s && s.repaint(ae.REPAINT_CACHE);
                } else this.x = t, this.y = e;
            }
            return this;
        }
        pivot(t, e) {
            return this.pivotX = t, this.pivotY = e, this;
        }
        size(t, e) {
            return this.width = t, this.height = e, this;
        }
        scale(t, e, i = !1) {
            var s = this.getStyle();
            if (s.scaleX != t || s.scaleY != e) {
                if (this.destroyed) return this;
                i ? (this._setScaleX(t), this._setScaleY(e), this._setTranformChange()) : (this.scaleX = t, this.scaleY = e);
            }
            return this;
        }
        skew(t, e) {
            return this.skewX = t, this.skewY = e, this;
        }
        render(t, e, i) {
            Re.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0;
        }
        drawToCanvas(t, e, i, s) {
            return we.drawToCanvas(this, this._renderType, t, e, i, s);
        }
        drawToTexture(t, e, i, s) {
            return we.drawToTexture(this, this._renderType, t, e, i, s);
        }
        drawToTexture3D(t, e, i) {
            throw "not implement";
        }
        customRender(t, e, i) {
            this._repaint = ae.REPAINT_ALL;
        }
        _applyFilters() {}
        get filters() {
            return this._cacheStyle.filters;
        }
        _setColorFilter(t) {}
        set filters(t) {
            t && 0 === t.length && (t = null), this._cacheStyle.filters != t && (this._getCacheStyle().filters = t ? t.slice() : null, t && t.length ? (this._setColorFilter(t[0]), this._renderType |= ae.FILTERS) : (this._setColorFilter(null), this._renderType &= ~ae.FILTERS), this._setRenderType(this._renderType), t && t.length > 0 ? (this._getBit(me.DISPLAY) || this._setBitUp(me.DISPLAY), 1 == t.length && t[0] instanceof H || (this._getCacheStyle().cacheForFilters = !0, this._checkCanvasEnable())) : this._cacheStyle.cacheForFilters && (this._cacheStyle.cacheForFilters = !1, this._checkCanvasEnable()), this._getCacheStyle().hasGlowFilter = this._isHaveGlowFilter(), this.repaint());
        }
        _isHaveGlowFilter() {
            var t, e;
            if (this.filters)
                for (t = 0; t < this.filters.length; t++)
                    if (this.filters[t].type == W.GLOW) return !0;
            for (t = 0, e = this._children.length; t < e; t++)
                if (this._children[t]._isHaveGlowFilter()) return !0;
            return !1;
        }
        localToGlobal(t, e = !1, s = null) {
            !0 === e && (t = new f(t.x, t.y));
            var r = this;
            for (s = s || i.stage; r && !r.destroyed && r != s;) t = r.toParentPoint(t), r = r.parent;
            return t;
        }
        globalToLocal(t, e = !1, s = null) {
            e && (t = new f(t.x, t.y));
            var r = this,
                a = [];
            for (s = s || i.stage; r && !r.destroyed && r != s;) a.push(r), r = r.parent;
            for (var n = a.length - 1; n >= 0;) t = (r = a[n]).fromParentPoint(t), n--;
            return t;
        }
        toParentPoint(t) {
            if (!t) return t;
            t.x -= this.pivotX, t.y -= this.pivotY, this.transform && this._transform.transformPoint(t), t.x += this._x, t.y += this._y;
            var e = this._style.scrollRect;
            return e && (t.x -= e.x, t.y -= e.y), t;
        }
        fromParentPoint(t) {
            if (!t) return t;
            t.x -= this._x, t.y -= this._y;
            var e = this._style.scrollRect;
            return e && (t.x += e.x, t.y += e.y), this.transform && this._transform.invertTransformPoint(t), t.x += this.pivotX, t.y += this.pivotY, t;
        }
        fromStagePoint(t) {
            return t;
        }
        on(t, e, i, s = null) {
            return 1 !== this._mouseState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, this._setBit(me.HAS_MOUSE, !0), this._parent && this._onDisplay(), this._createListener(t, e, i, s, !1)) : super.on(t, e, i, s);
        }
        once(t, e, i, s = null) {
            return 1 !== this._mouseState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, this._setBit(me.HAS_MOUSE, !0), this._parent && this._onDisplay(), this._createListener(t, e, i, s, !0)) : super.once(t, e, i, s);
        }
        _onDisplay(t) {
            if (1 !== this._mouseState) {
                var e = this;
                for (e = e.parent; e && 1 !== e._mouseState && !e._getBit(me.HAS_MOUSE);) e.mouseEnabled = !0, e._setBit(me.HAS_MOUSE, !0), e = e.parent;
            }
        }
        _setParent(t) {
            super._setParent(t), t && this._getBit(me.HAS_MOUSE) && this._onDisplay();
        }
        loadImage(t, e = null) {
            if (t) {
                var s = i.Loader.getRes(t);
                s || ((s = new Yt()).load(t), i.Loader.cacheRes(t, s)), this.texture = s, s.getIsReady() ? loaded.call(this) : s.once(Wt.READY, this, loaded);
            } else this.texture = null, loaded.call(this);

            function loaded() {
                this.repaint(ae.REPAINT_ALL), e && e.run();
            }
            return this;
        }
        static fromImage(t) {
            return new we().loadImage(t);
        }
        repaint(t = ae.REPAINT_CACHE) {
            this._repaint & t || (this._repaint |= t, this.parentRepaint(t)), this._cacheStyle && this._cacheStyle.maskParent && this._cacheStyle.maskParent.repaint(t);
        }
        _needRepaint() {
            return this._repaint & ae.REPAINT_CACHE && this._cacheStyle.enableCanvasRender && this._cacheStyle.reCache;
        }
        _childChanged(t = null) {
            this._children.length ? this._renderType |= ae.CHILDS : this._renderType &= ~ae.CHILDS, this._setRenderType(this._renderType), t && this._getBit(me.HAS_ZORDER) && i.systemTimer.callLater(this, this.updateZOrder), this.repaint(ae.REPAINT_ALL);
        }
        parentRepaint(t = ae.REPAINT_CACHE) {
            var e = this._parent;
            !e || e._repaint & t || (e._repaint |= t, e.parentRepaint(t));
        }
        get stage() {
            return i.stage;
        }
        get hitArea() {
            return this._style.hitArea;
        }
        set hitArea(t) {
            this.getStyle().hitArea = t;
        }
        _setMask(t) {}
        get mask() {
            return this._cacheStyle.mask;
        }
        set mask(t) {
            t && this.mask && this.mask._cacheStyle.maskParent || (this._getCacheStyle().mask = t, this._setMask(t), this._checkCanvasEnable(), t ? t._getCacheStyle().maskParent = this : this.mask && (this.mask._getCacheStyle().maskParent = null), this._renderType |= ae.MASK, this._setRenderType(this._renderType), this.parentRepaint(ae.REPAINT_ALL));
        }
        get mouseEnabled() {
            return this._mouseState > 1;
        }
        set mouseEnabled(t) {
            this._mouseState = t ? 2 : 1;
        }
        startDrag(t = null, e = !1, s = 0, r = 300, a = null, n = !1, h = .92) {
            this._style.dragging || (this.getStyle().dragging = new i.Dragging()), this._style.dragging.start(this, t, e, s, r, a, n, h);
        }
        stopDrag() {
            this._style.dragging && this._style.dragging.stop();
        }
        _setDisplay(t) {
            t || this._cacheStyle && (this._cacheStyle.releaseContext(), this._cacheStyle.releaseFilterCache(), this._cacheStyle.hasGlowFilter && (this._cacheStyle.hasGlowFilter = !1)), super._setDisplay(t);
        }
        hitTestPoint(t, e) {
            var i = this.globalToLocal(f.TEMP.setTo(t, e));
            return t = i.x, e = i.y, (this._style.hitArea ? this._style.hitArea : this._width > 0 && this._height > 0 ? g.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds()).contains(t, e);
        }
        getMousePoint() {
            return this.globalToLocal(f.TEMP.setTo(i.stage.mouseX, i.stage.mouseY));
        }
        get globalScaleX() {
            for (var t = 1, e = this; e && e !== i.stage;) t *= e.scaleX, e = e.parent;
            return t;
        }
        get globalRotation() {
            for (var t = 0, e = this; e && e !== i.stage;) t += e.rotation, e = e.parent;
            return t;
        }
        get globalScaleY() {
            for (var t = 1, e = this; e && e !== i.stage;) t *= e.scaleY, e = e.parent;
            return t;
        }
        get mouseX() {
            return this.getMousePoint().x;
        }
        get mouseY() {
            return this.getMousePoint().y;
        }
        get zOrder() {
            return this._zOrder;
        }
        set zOrder(t) {
            this._zOrder != t && (this._zOrder = t, this._parent && (t && this._parent._setBit(me.HAS_ZORDER, !0), i.systemTimer.callLater(this._parent, this.updateZOrder)));
        }
        get texture() {
            return this._texture;
        }
        _setTexture(t) {}
        set texture(t) {
            "string" == typeof t ? this.loadImage(t) : this._texture != t && (this._texture && this._texture._removeReference(), this._texture = t, t && t._addReference(), this._setTexture(t), this._setWidth(this._texture, this.width), this._setHeight(this._texture, this.height), t ? this._renderType |= ae.TEXTURE : this._renderType &= ~ae.TEXTURE, this._setRenderType(this._renderType), this.repaint());
        }
        get viewport() {
            return this._style.viewport;
        }
        set viewport(t) {
            var e;
            "string" == typeof t && ((e = t.split(",")).length > 3 && (t = new g(parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]))));
            this.getStyle().viewport = t;
        }
        _setRenderType(t) {}
        _setTranformChange() {
            this._tfChanged = !0, this._renderType |= ae.TRANSFORM, this.parentRepaint(ae.REPAINT_CACHE);
        }
        _setBgStyleColor(t, e, i, s, r) {}
        _setBorderStyleColor(t, e, i, s, r, a) {}
        captureMouseEvent(t) {
            i.MouseManager.instance.setCapture(this, t);
        }
        releaseMouseEvent() {
            i.MouseManager.instance.releaseCapture();
        }
        set drawCallOptimize(t) {
            this._setBit(me.DRAWCALL_OPTIMIZE, t);
        }
        get drawCallOptimize() {
            return this._getBit(me.DRAWCALL_OPTIMIZE);
        }
    }
    we.drawToCanvas = function(t, e, i, s, r, a) {
        r -= t.x, a -= t.y, r |= 0, a |= 0, i |= 0, s |= 0;
        var n = new Zt();
        n.size(i, s), n.asBitmap = !0, n._targets.start(), Re.renders[e]._fun(t, n, r, a), n.flush(), n._targets.end(), n._targets.restore();
        var h = n._targets.getData(0, 0, i, s);
        n.destroy();
        for (var o = new ImageData(i, s), l = 4 * i, _ = o.data, c = s - 1, u = c * l, d = 0; c >= 0; c--) _.set(h.subarray(d, d + l), u), u -= l, d += l;
        var p = new Ee(!0);
        return p.size(i, s), p.getContext("2d").putImageData(o, 0, 0), p;
    }, we.drawToTexture = function(t, e, i, s, r, a) {
        r -= t.x, a -= t.y, r |= 0, a |= 0, i |= 0, s |= 0;
        var n = new Zt();
        n.size(i, s), n.asBitmap = !0, n._targets.start(), Re.renders[e]._fun(t, n, r, a), n.flush(), n._targets.end(), n._targets.restore();
        var h = new Yt(n._targets, Yt.INV_UV);
        return n.destroy(!0), h;
    }, Te.regClass("laya.display.Sprite", we), Te.regClass("Laya.Sprite", we);
    class Me extends Ce {
        constructor() {
            super(...arguments), this.italic = !1;
        }
        reset() {
            return super.reset(), this.italic = !1, this.align = "left", this.wordWrap = !1, this.leading = 0, this.padding = [0, 0, 0, 0], this.bgColor = null, this.borderColor = null, this.asPassword = !1, this.stroke = 0, this.strokeColor = "#000000", this.bold = !1, this.underline = !1, this.underlineColor = null, this.currBitmapFont = null, this;
        }
        recover() {
            this !== Me.EMPTY && s.recover("TextStyle", this.reset());
        }
        static create() {
            return s.getItemByClass("TextStyle", Me);
        }
        render(t, e, i, s) {
            (this.bgColor || this.borderColor) && e.drawRect(i, s, t.width, t.height, this.bgColor, this.borderColor, 1);
        }
    }
    Me.EMPTY = new Me();
    class Se extends we {
        constructor() {
            super(), this._textWidth = 0, this._textHeight = 0, this._lines = [], this._lineWidths = [], this._startX = 0, this._startY = 0, this._charSize = {}, this._valign = "top", this._fontSize = Se.defaultFontSize, this._font = Se.defaultFont, this._color = "#000000", this._singleCharRender = !1, this.overflow = Se.VISIBLE, this._style = Me.EMPTY;
        }
        static defaultFontStr() {
            return Se.defaultFontSize + "px " + Se.defaultFont;
        }
        getStyle() {
            return this._style === Me.EMPTY && (this._style = Me.create()), this._style;
        }
        _getTextStyle() {
            return this._style === Me.EMPTY && (this._style = Me.create()), this._style;
        }
        static registerBitmapFont(t, e) {
            Se._bitmapFonts || (Se._bitmapFonts = {}), Se._bitmapFonts[t] = e;
        }
        static unregisterBitmapFont(t, e = !0) {
            if (Se._bitmapFonts && Se._bitmapFonts[t]) {
                var i = Se._bitmapFonts[t];
                e && i.destroy(), delete Se._bitmapFonts[t];
            }
        }
        destroy(t = !0) {
            super.destroy(t), this._clipPoint = null, this._lines = null, this._lineWidths = null, this._words && this._words.forEach(function(t) {
                t.cleanCache();
            }), this._words = null, this._charSize = null;
        }
        _getBoundPointsM(t = !1) {
            var e = g.TEMP;
            return e.setTo(0, 0, this.width, this.height), e._getBoundPoints();
        }
        getGraphicBounds(t = !1) {
            var e = g.TEMP;
            return e.setTo(0, 0, this.width, this.height), e;
        }
        get width() {
            return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3];
        }
        set width(t) {
            t != this._width && (super.set_width(t), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
        }
        _getCSSStyle() {
            return this._style;
        }
        get height() {
            return this._height ? this._height : this.textHeight;
        }
        set height(t) {
            t != this._height && (super.set_height(t), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
        }
        get textWidth() {
            return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textWidth;
        }
        get textHeight() {
            return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textHeight;
        }
        get text() {
            return this._text || "";
        }
        get_text() {
            return this._text || "";
        }
        set_text(t) {
            this._text !== t && (this.lang(t + ""), this.isChanged = !0, this.event(Wt.CHANGE), this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
        }
        set text(t) {
            this.set_text(t);
        }
        lang(t, e = null, i = null, s = null, r = null, a = null, n = null, h = null, o = null, l = null, _ = null) {
            if (t = Se.langPacks && Se.langPacks[t] ? Se.langPacks[t] : t, arguments.length < 2) this._text = t;
            else {
                for (var c = 0, u = arguments.length; c < u; c++) t = t.replace("{" + c + "}", arguments[c + 1]);
                this._text = t;
            }
        }
        get font() {
            return this._font;
        }
        set font(t) {
            this._style.currBitmapFont && (this._getTextStyle().currBitmapFont = null, this.scale(1, 1)), Se._bitmapFonts && Se._bitmapFonts[t] && (this._getTextStyle().currBitmapFont = Se._bitmapFonts[t]), this._font = t, this.isChanged = !0;
        }
        get fontSize() {
            return this._fontSize;
        }
        set fontSize(t) {
            this._fontSize != t && (this._fontSize = t, this.isChanged = !0);
        }
        get bold() {
            return this._style.bold;
        }
        set bold(t) {
            this._getTextStyle().bold = t, this.isChanged = !0;
        }
        get color() {
            return this._color;
        }
        set color(t) {
            this.set_color(t);
        }
        get_color() {
            return this._color;
        }
        set_color(t) {
            this._color != t && (this._color = t, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0);
        }
        get italic() {
            return this._style.italic;
        }
        set italic(t) {
            this._getTextStyle().italic = t, this.isChanged = !0;
        }
        get align() {
            return this._style.align;
        }
        set align(t) {
            this._getTextStyle().align = t, this.isChanged = !0;
        }
        get valign() {
            return this._valign;
        }
        set valign(t) {
            this._valign = t, this.isChanged = !0;
        }
        get wordWrap() {
            return this._style.wordWrap;
        }
        set wordWrap(t) {
            this._getTextStyle().wordWrap = t, this.isChanged = !0;
        }
        get leading() {
            return this._style.leading;
        }
        set leading(t) {
            this._getTextStyle().leading = t, this.isChanged = !0;
        }
        get padding() {
            return this._style.padding;
        }
        set padding(t) {
            if ("string" == typeof t) {
                var e, i, s;
                for (s = (e = t.split(",")).length; e.length < 4;) e.push(0);
                for (i = 0; i < s; i++) e[i] = parseFloat(e[i]) || 0;
                t = e;
            }
            this._getTextStyle().padding = t, this.isChanged = !0;
        }
        get bgColor() {
            return this._style.bgColor;
        }
        set bgColor(t) {
            this.set_bgColor(t);
        }
        set_bgColor(t) {
            this._getTextStyle().bgColor = t, this._renderType |= ae.STYLE, this._setBgStyleColor(0, 0, this.width, this.height, t), this._setRenderType(this._renderType), this.isChanged = !0;
        }
        get_bgColor() {
            return this._style.bgColor;
        }
        get borderColor() {
            return this._style.borderColor;
        }
        set borderColor(t) {
            this._getTextStyle().borderColor = t, this._renderType |= ae.STYLE, this._setBorderStyleColor(0, 0, this.width, this.height, t, 1), this._setRenderType(this._renderType), this.isChanged = !0;
        }
        get stroke() {
            return this._style.stroke;
        }
        set stroke(t) {
            this._getTextStyle().stroke = t, this.isChanged = !0;
        }
        get strokeColor() {
            return this._style.strokeColor;
        }
        set strokeColor(t) {
            this._getTextStyle().strokeColor = t, this.isChanged = !0;
        }
        set isChanged(t) {
            this._isChanged !== t && (this._isChanged = t, t && i.systemTimer.callLater(this, this.typeset));
        }
        _getContextFont() {
            return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (i.Browser.onIPhone && Se.fontFamilyMap[this.font] || this.font);
        }
        _isPassWordMode() {
            var t = this._style.asPassword;
            return "prompt" in this && this.prompt == this._text && (t = !1), t;
        }
        _getPassWordTxt(t) {
            var e;
            e = "";
            for (var i = t.length; i > 0; i--) e += "●";
            return e;
        }
        _renderText() {
            var t = this.padding,
                e = this._lines.length;
            this.overflow != Se.VISIBLE && (e = Math.min(e, Math.floor((this.height - t[0] - t[2]) / (this.leading + this._charSize.height)) + 1));
            var s = this.scrollY / (this._charSize.height + this.leading) | 0,
                r = this.graphics;
            r.clear(!0);
            var a = this._getContextFont();
            i.Browser.context.font = a;
            var n = t[3],
                h = "left",
                o = this._lines,
                l = this.leading + this._charSize.height,
                _ = this._style.currBitmapFont;
            _ && (l = this.leading + _.getMaxHeight());
            var c = t[0];
            if (!_ && this._width > 0 && this._textWidth <= this._width && ("right" == this.align ? (h = "right", n = this._width - t[1]) : "center" == this.align && (h = "center", n = .5 * this._width + t[3] - t[1])), this._height > 0) {
                var u = this._textHeight > this._height ? "top" : this.valign;
                "middle" === u ? c = .5 * (this._height - e * l) + t[0] - t[2] : "bottom" === u && (c = this._height - e * l - t[2]);
            }
            var d = this._style;
            if (_ && _.autoScaleSize) var p = _.fontSize / this.fontSize;
            if (this._clipPoint) {
                var f, g;
                if (r.save(), _ && _.autoScaleSize) f = this._width ? this._width - t[3] - t[1] : this._textWidth, g = this._height ? this._height - t[0] - t[2] : this._textHeight, f *= p, g *= p, r.clipRect(t[3], t[0], f, g);
                else r.clipRect(t[3], t[0], this._width ? this._width - t[3] - t[1] : this._textWidth, this._height ? this._height - t[0] - t[2] : this._textHeight);
                this.repaint();
            }
            var m = d.asPassword;
            "prompt" in this && this.prompt == this._text && (m = !1);
            for (var v = 0, T = 0, x = Math.min(this._lines.length, e + s) || 1, y = s; y < x; y++) {
                var E, A = o[y];
                if (m) {
                    var C = A.length;
                    A = "";
                    for (var b = C; b > 0; b--) A += "●";
                }
                if (null == A && (A = ""), v = n - (this._clipPoint ? this._clipPoint.x : 0), T = c + l * y - (this._clipPoint ? this._clipPoint.y : 0), this.underline && this._drawUnderline(h, v, T, y), _) {
                    var R = this.width;
                    _.autoScaleSize && (R = this.width * p), _._drawText(A, this, v, T, this.align, R);
                } else this._words || (this._words = []), this._words.length > y - s ? E = this._words[y - s] : (E = new Ht(), this._words.push(E)), E.setText(A), E.splitRender = this._singleCharRender, d.stroke ? r.fillBorderText(E, v, T, a, this.color, d.strokeColor, d.stroke, h) : r.fillText(E, v, T, a, this.color, h);
            }
            if (_ && _.autoScaleSize) {
                var w = 1 / p;
                this.scale(w, w);
            }
            this._clipPoint && r.restore(), this._startX = n, this._startY = c;
        }
        _drawUnderline(t, e, i, s) {
            var r = this._lineWidths[s];
            switch (t) {
                case "center":
                    e -= r / 2;
                    break;
                case "right":
                    e -= r;
            }
            i += this._charSize.height, this._graphics.drawLine(e, i, e + r, i, this.underlineColor || this.color, 1);
        }
        typeset() {
            if (this._isChanged = !1, !this._text) return this._clipPoint = null, this._textWidth = this._textHeight = 0, void this.graphics.clear(!0);
            i.Render.isConchApp ? window.conchTextCanvas.font = this._getContextFont() : i.Browser.context.font = this._getContextFont(), this._lines.length = 0, this._lineWidths.length = 0, this._isPassWordMode() ? this._parseLines(this._getPassWordTxt(this._text)) : this._parseLines(this._text), this._evalTextSize(), this._checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new f(0, 0)) : this._clipPoint = null, this._renderText();
        }
        _evalTextSize() {
            var t, e;
            t = Math.max.apply(this, this._lineWidths), e = this._style.currBitmapFont ? this._lines.length * (this._style.currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2], t == this._textWidth && e == this._textHeight || (this._textWidth = t, this._textHeight = e);
        }
        _checkEnabledViewportOrNot() {
            return this.overflow == Se.SCROLL && (this._width > 0 && this._textWidth > this._width || this._height > 0 && this._textHeight > this._height);
        }
        changeText(t) {
            this._text !== t && (this.lang(t + ""), this._graphics && this._graphics.replaceText(this._text) || this.typeset());
        }
        _parseLines(t) {
            var e = this.wordWrap || this.overflow == Se.HIDDEN;
            if (e) var s = this._getWordWrapWidth();
            var r = this._style.currBitmapFont;
            if (r) this._charSize.width = r.getMaxWidth(), this._charSize.height = r.getMaxHeight();
            else {
                var a = null;
                (a = i.Render.isConchApp ? window.conchTextCanvas.measureText(Se._testWord) : i.Browser.context.measureText(Se._testWord)) || (a = {
                    width: 100
                }), this._charSize.width = a.width, this._charSize.height = a.height || this.fontSize;
            }
            for (var n = t.replace(/\r\n/g, "\n").split("\n"), h = 0, o = n.length; h < o; h++) {
                var l = n[h];
                e ? this._parseLine(l, s) : (this._lineWidths.push(this._getTextWidth(l)), this._lines.push(l));
            }
        }
        _parseLine(t, e) {
            var i = this._lines,
                s = 0,
                r = 0,
                a = 0,
                n = 0;
            if ((r = this._getTextWidth(t)) <= e) return i.push(t), void this._lineWidths.push(r);
            r = this._charSize.width, 0 == (s = Math.floor(e / r)) && (s = 1), a = r = this._getTextWidth(t.substring(0, s));
            for (var h = s, o = t.length; h < o; h++)
                if ((a += r = this._getTextWidth(t.charAt(h))) > e)
                    if (this.wordWrap) {
                        var l = t.substring(n, h);
                        if (l.charCodeAt(l.length - 1) < 255) {
                            var _ = /(?:\w|-)+$/.exec(l);
                            _ && (h = _.index + n, 0 == _.index ? h += l.length : l = t.substring(n, h));
                        }
                        if (i.push(l), this._lineWidths.push(a - r), n = h, !(h + s < o)) {
                            i.push(t.substring(n, o)), this._lineWidths.push(this._getTextWidth(i[i.length - 1])), n = -1;
                            break;
                        }
                        h += s, a = r = this._getTextWidth(t.substring(n, h)), h--;
                    } else if (this.overflow == Se.HIDDEN) return i.push(t.substring(0, h)), void this._lineWidths.push(this._getTextWidth(i[i.length - 1]));
            this.wordWrap && -1 != n && (i.push(t.substring(n, o)), this._lineWidths.push(this._getTextWidth(i[i.length - 1])));
        }
        _getTextWidth(t) {
            var e = this._style.currBitmapFont;
            return e ? e.getTextWidth(t) : i.Render.isConchApp ? window.conchTextCanvas.measureText(t).width : i.Browser.context.measureText(t).width;
        }
        _getWordWrapWidth() {
            var t, e = this.padding,
                s = this._style.currBitmapFont;
            return (t = s && s.autoScaleSize ? this._width * (s.fontSize / this.fontSize) : this._width) <= 0 && (t = this.wordWrap ? 100 : i.Browser.width), t <= 0 && (t = 100), t - e[3] - e[1];
        }
        getCharPoint(t, e = null) {
            this._isChanged && i.systemTimer.runCallLater(this, this.typeset);
            for (var s = 0, r = this._lines, a = 0, n = 0, h = r.length; n < h; n++) {
                if (t < (s += r[n].length)) {
                    var o = n;
                    break;
                }
                a = s;
            }
            var l = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
            i.Browser.context.font = l;
            var _ = this._getTextWidth(this._text.substring(a, t));
            return (e || new f()).setTo(this._startX + _ - (this._clipPoint ? this._clipPoint.x : 0), this._startY + o * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0));
        }
        set scrollX(t) {
            if (!(this.overflow != Se.SCROLL || this.textWidth < this._width) && this._clipPoint) {
                t = t < this.padding[3] ? this.padding[3] : t;
                var e = this._textWidth - this._width;
                t = t > e ? e : t, this._clipPoint.x = t, this._renderText();
            }
        }
        get scrollX() {
            return this._clipPoint ? this._clipPoint.x : 0;
        }
        set scrollY(t) {
            if (!(this.overflow != Se.SCROLL || this.textHeight < this._height) && this._clipPoint) {
                t = t < this.padding[0] ? this.padding[0] : t;
                var e = this._textHeight - this._height;
                t = t > e ? e : t, this._clipPoint.y = t, this._renderText();
            }
        }
        get scrollY() {
            return this._clipPoint ? this._clipPoint.y : 0;
        }
        get maxScrollX() {
            return this.textWidth < this._width ? 0 : this._textWidth - this._width;
        }
        get maxScrollY() {
            return this.textHeight < this._height ? 0 : this._textHeight - this._height;
        }
        get lines() {
            return this._isChanged && this.typeset(), this._lines;
        }
        get underlineColor() {
            return this._style.underlineColor;
        }
        set underlineColor(t) {
            this._getTextStyle().underlineColor = t, this._isChanged || this._renderText();
        }
        get underline() {
            return this._style.underline;
        }
        set underline(t) {
            this._getTextStyle().underline = t;
        }
        set singleCharRender(t) {
            this._singleCharRender = t;
        }
        get singleCharRender() {
            return this._singleCharRender;
        }
    }
    Se.VISIBLE = "visible", Se.SCROLL = "scroll", Se.HIDDEN = "hidden", Se.defaultFontSize = 12, Se.defaultFont = "Arial", Se.isComplexText = !1, Se.fontFamilyMap = {
        "报隶": "报隶-简",
        "黑体": "黑体-简",
        "楷体": "楷体-简",
        "兰亭黑": "兰亭黑-简",
        "隶变": "隶变-简",
        "凌慧体": "凌慧体-简",
        "翩翩体": "翩翩体-简",
        "苹方": "苹方-简",
        "手札体": "手札体-简",
        "宋体": "宋体-简",
        "娃娃体": "娃娃体-简",
        "魏碑": "魏碑-简",
        "行楷": "行楷-简",
        "雅痞": "雅痞-简",
        "圆体": "圆体-简"
    }, Se._testWord = "游", Se.CharacterCache = !0, Se.RightToLeft = !1, i.regClass(Se), Te.regClass("laya.display.Text", Se), Te.regClass("Laya.Text", Se);
    class Ie extends Se {
        constructor() {
            super(), this._multiline = !1, this._editable = !0, this._maxChars = 1e5, this._type = "text", this._prompt = "", this._promptColor = "#A9A9A9", this._originColor = "#000000", this._content = "", Ie.IOS_IFRAME = i.Browser.onIOS && i.Browser.window.top != i.Browser.window.self, this._width = 100, this._height = 20, this.multiline = !1, this.overflow = Se.SCROLL, this.on(Wt.MOUSE_DOWN, this, this._onMouseDown), this.on(Wt.UNDISPLAY, this, this._onUnDisplay);
        }
        static __init__() {
            if (Ie._createInputElement(), i.Browser.onMobile) {
                var t = !1;
                (i.Browser.onMiniGame || i.Browser.onBDMiniGame || i.Browser.onQGMiniGame || i.Browser.onKGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame) && (t = !0), i.Render.canvas.addEventListener(Ie.IOS_IFRAME ? t ? "touchend" : "click" : "touchend", Ie._popupInputMethod);
            }
        }
        static _popupInputMethod(t) {
            Ie.isInputting && Ie.inputElement.focus();
        }
        static _createInputElement() {
            Ie._initInput(Ie.area = i.Browser.createElement("textarea")), Ie._initInput(Ie.input = i.Browser.createElement("input")), Ie.inputContainer = i.Browser.createElement("div"), Ie.inputContainer.style.position = "absolute", Ie.inputContainer.style.zIndex = 1e5, i.Browser.container.appendChild(Ie.inputContainer), Ie.inputContainer.setPos = function(t, e) {
                Ie.inputContainer.style.left = t + "px", Ie.inputContainer.style.top = e + "px";
            };
        }
        static _initInput(t) {
            var e = t.style;
            e.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;", e.resize = "none", e.backgroundColor = "transparent", e.border = "none", e.outline = "none", e.zIndex = 1, t.addEventListener("input", Ie._processInputting), t.addEventListener("mousemove", Ie._stopEvent), t.addEventListener("mousedown", Ie._stopEvent), t.addEventListener("touchmove", Ie._stopEvent), t.setFontFace = function(e) {
                t.style.fontFamily = e;
            }, i.Render.isConchApp || (t.setColor = function(e) {
                t.style.color = e;
            }, t.setFontSize = function(e) {
                t.style.fontSize = e + "px";
            });
        }
        static _processInputting(t) {
            var e = Ie.inputElement.target;
            if (e) {
                var i = Ie.inputElement.value;
                e._restrictPattern && (i = i.replace(/\u2006|\x27/g, ""), e._restrictPattern.test(i) && (i = i.replace(e._restrictPattern, ""), Ie.inputElement.value = i)), e._text = i, e.event(Wt.INPUT);
            }
        }
        static _stopEvent(t) {
            "touchmove" == t.type && t.preventDefault(), t.stopPropagation && t.stopPropagation();
        }
        setSelection(t, e) {
            this.focus = !0, Ie.inputElement.selectionStart = t, Ie.inputElement.selectionEnd = e;
        }
        get multiline() {
            return this._multiline;
        }
        set multiline(t) {
            this._multiline = t, this.valign = t ? "top" : "middle";
        }
        get nativeInput() {
            return this._multiline ? Ie.area : Ie.input;
        }
        _onUnDisplay(t = null) {
            this.focus = !1;
        }
        _onMouseDown(t) {
            this.focus = !0;
        }
        _syncInputTransform() {
            var t = this.nativeInput,
                e = Y.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]),
                s = this._width - this.padding[1] - this.padding[3],
                r = this._height - this.padding[0] - this.padding[2];
            i.Render.isConchApp ? (t.setScale(e.scaleX, e.scaleY), t.setSize(s, r), t.setPos(e.x, e.y)) : (Ie.inputContainer.style.transform = Ie.inputContainer.style.webkitTransform = "scale(" + e.scaleX + "," + e.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", t.style.width = s + "px", t.style.height = r + "px", Ie.inputContainer.style.left = e.x + "px", Ie.inputContainer.style.top = e.y + "px");
        }
        select() {
            this.nativeInput.select();
        }
        get focus() {
            return this._focus;
        }
        set focus(t) {
            var e = this.nativeInput;
            this._focus !== t && (t ? (e.target ? e.target._focusOut() : this._setInputMethod(), e.target = this, this._focusIn()) : (e.target = null, this._focusOut(), i.Browser.document.body.scrollTop = 0, e.blur(), i.Render.isConchApp ? e.setPos(-1e4, -1e4) : Ie.inputContainer.contains(e) && Ie.inputContainer.removeChild(e)));
        }
        _setInputMethod() {
            Ie.input.parentElement && Ie.inputContainer.removeChild(Ie.input), Ie.area.parentElement && Ie.inputContainer.removeChild(Ie.area), Ie.inputElement = this._multiline ? Ie.area : Ie.input, Ie.inputContainer.appendChild(Ie.inputElement), Se.RightToLeft && (Ie.inputElement.style.direction = "rtl");
        }
        _focusIn() {
            Ie.isInputting = !0;
            var t = this.nativeInput;
            this._focus = !0;
            var e = t.style;
            e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), t.readOnly = !this._editable, i.Render.isConchApp && (t.setType(this._type), t.setForbidEdit(!this._editable)), t.maxLength = this._maxChars;
            this.padding;
            if (t.value = this._content, t.placeholder = this._prompt, i.stage.off(Wt.KEY_DOWN, this, this._onKeyDown), i.stage.on(Wt.KEY_DOWN, this, this._onKeyDown), i.stage.focus = this, this.event(Wt.FOCUS), i.Browser.onPC && t.focus(), !(i.Browser.onMiniGame || i.Browser.onBDMiniGame || i.Browser.onQGMiniGame || i.Browser.onKGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame)) {
                this._text;
                this._text = null;
            }
            this.typeset(), t.setColor(this._originColor), t.setFontSize(this.fontSize), t.setFontFace(i.Browser.onIPhone && Se.fontFamilyMap[this.font] || this.font), i.Render.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline), e.lineHeight = this.leading + this.fontSize + "px", e.fontStyle = this.italic ? "italic" : "normal", e.fontWeight = this.bold ? "bold" : "normal", e.textAlign = this.align, e.padding = "0 0", this._syncInputTransform(), !i.Render.isConchApp && i.Browser.onPC && i.systemTimer.frameLoop(1, this, this._syncInputTransform);
        }
        _setPromptColor() {
            Ie.promptStyleDOM = i.Browser.getElementById("promptStyle"), Ie.promptStyleDOM || (Ie.promptStyleDOM = i.Browser.createElement("style"), Ie.promptStyleDOM.setAttribute("id", "promptStyle"), i.Browser.document.head.appendChild(Ie.promptStyleDOM)), Ie.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}";
        }
        _focusOut() {
            Ie.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value, this._content ? (super.set_text(this._content), super.set_color(this._originColor)) : (super.set_text(this._prompt), super.set_color(this._promptColor)), i.stage.off(Wt.KEY_DOWN, this, this._onKeyDown), i.stage.focus = null, this.event(Wt.BLUR), this.event(Wt.CHANGE), i.Render.isConchApp && this.nativeInput.blur(), i.Browser.onPC && i.systemTimer.clear(this, this._syncInputTransform);
        }
        _onKeyDown(t) {
            13 === t.keyCode && (i.Browser.onMobile && !this._multiline && (this.focus = !1), this.event(Wt.ENTER));
        }
        set text(t) {
            super.set_color(this._originColor), t += "", this._focus ? (this.nativeInput.value = t || "", this.event(Wt.CHANGE)) : (this._multiline || (t = t.replace(/\r?\n/g, "")), this._content = t, t ? super.set_text(t) : (super.set_text(this._prompt), super.set_color(this.promptColor)));
        }
        get text() {
            return this._focus ? this.nativeInput.value : this._content || "";
        }
        changeText(t) {
            this._content = t, this._focus ? (this.nativeInput.value = t || "", this.event(Wt.CHANGE)) : super.changeText(t);
        }
        set color(t) {
            this._focus && this.nativeInput.setColor(t), super.set_color(this._content ? t : this._promptColor), this._originColor = t;
        }
        get color() {
            return super.color;
        }
        set bgColor(t) {
            super.set_bgColor(t), i.Render.isConchApp && this.nativeInput.setBgColor(t);
        }
        get bgColor() {
            return super.bgColor;
        }
        get restrict() {
            return this._restrictPattern ? this._restrictPattern.source : "";
        }
        set restrict(t) {
            t ? ((t = "[^" + t + "]").indexOf("^^") > -1 && (t = t.replace("^^", "")), this._restrictPattern = new RegExp(t, "g")) : this._restrictPattern = null;
        }
        set editable(t) {
            this._editable = t, i.Render.isConchApp && Ie.input.setForbidEdit(!t);
        }
        get editable() {
            return this._editable;
        }
        get maxChars() {
            return this._maxChars;
        }
        set maxChars(t) {
            t <= 0 && (t = 1e5), this._maxChars = t;
        }
        get prompt() {
            return this._prompt;
        }
        set prompt(t) {
            !this._text && t && super.set_color(this._promptColor), this.promptColor = this._promptColor, this._text ? super.set_text(this._text == this._prompt ? t : this._text) : super.set_text(t), this._prompt = Se.langPacks && Se.langPacks[t] ? Se.langPacks[t] : t;
        }
        get promptColor() {
            return this._promptColor;
        }
        set promptColor(t) {
            this._promptColor = t, this._content || super.set_color(t);
        }
        get type() {
            return this._type;
        }
        set type(t) {
            this._getTextStyle().asPassword = "password" === t, this._type = t;
        }
    }
    Ie.TYPE_TEXT = "text", Ie.TYPE_PASSWORD = "password", Ie.TYPE_EMAIL = "email", Ie.TYPE_URL = "url", Ie.TYPE_NUMBER = "number", Ie.TYPE_RANGE = "range", Ie.TYPE_DATE = "date", Ie.TYPE_MONTH = "month", Ie.TYPE_WEEK = "week", Ie.TYPE_TIME = "time", Ie.TYPE_DATE_TIME = "datetime", Ie.TYPE_DATE_TIME_LOCAL = "datetime-local", Ie.TYPE_SEARCH = "search", Ie.IOS_IFRAME = !1, Ie.inputHeight = 45, Ie.isInputting = !1, Te.regClass("laya.display.Input", Ie), Te.regClass("Laya.Input", Ie);
    class Pe {
        constructor() {
            this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0, this._event = new Wt(), this._lastClickTime = 0;
        }
        _clearTempArrs() {
            Pe._oldArr.length = 0, Pe._newArr.length = 0, Pe._tEleArr.length = 0;
        }
        getTouchFromArr(t, e) {
            var i, s, r;
            for (s = e.length, i = 0; i < s; i++)
                if ((r = e[i]).id == t) return r;
            return null;
        }
        removeTouchFromArr(t, e) {
            var i;
            for (i = e.length - 1; i >= 0; i--) e[i].id == t && e.splice(i, 1);
        }
        createTouchO(t, e) {
            var i;
            return (i = s.getItem("TouchData") || {}).id = e, i.tar = t, i;
        }
        onMouseDown(t, e, i = !1) {
            var s, r, a, n;
            this.enable && (s = this.getTouchFromArr(e, this.preOvers), a = this.getEles(t, null, Pe._tEleArr), s ? s.tar = t : (r = this.createTouchO(t, e), this.preOvers.push(r)), jt.onMobile && this.sendEvents(a, Wt.MOUSE_OVER), n = i ? this.preDowns : this.preRightDowns, (s = this.getTouchFromArr(e, n)) ? s.tar = t : (r = this.createTouchO(t, e), n.push(r)), this.sendEvents(a, i ? Wt.MOUSE_DOWN : Wt.RIGHT_MOUSE_DOWN), this._clearTempArrs());
        }
        sendEvents(t, e) {
            var i, s, r;
            for (s = t.length, this._event._stoped = !1, r = t[0], i = 0; i < s; i++) {
                var a = t[i];
                if (a.destroyed) return;
                if (a.event(e, this._event.setTo(e, a, r)), this._event._stoped) break;
            }
        }
        getEles(t, e = null, i = null) {
            for (i ? i.length = 0 : i = []; t && t != e;) i.push(t), t = t.parent;
            return i;
        }
        checkMouseOutAndOverOfMove(t, e, i = 0) {
            var s, r, a, n;
            if (e != t)
                if (e.contains(t)) r = this.getEles(t, e, Pe._tEleArr), this.sendEvents(r, Wt.MOUSE_OVER);
                else if (t.contains(e)) r = this.getEles(e, t, Pe._tEleArr), this.sendEvents(r, Wt.MOUSE_OUT);
            else {
                var h, o, l;
                for ((r = Pe._tEleArr).length = 0, h = this.getEles(e, null, Pe._oldArr), o = this.getEles(t, null, Pe._newArr), n = h.length, a = 0; a < n; a++) {
                    if (s = h[a], (l = o.indexOf(s)) >= 0) {
                        o.splice(l, o.length - l);
                        break;
                    }
                    r.push(s);
                }
                r.length > 0 && this.sendEvents(r, Wt.MOUSE_OUT), o.length > 0 && this.sendEvents(o, Wt.MOUSE_OVER);
            }
        }
        onMouseMove(t, e) {
            var i, s;
            this.enable && ((i = this.getTouchFromArr(e, this.preOvers)) ? (this.checkMouseOutAndOverOfMove(t, i.tar), i.tar = t, s = this.getEles(t, null, Pe._tEleArr)) : (s = this.getEles(t, null, Pe._tEleArr), this.sendEvents(s, Wt.MOUSE_OVER), this.preOvers.push(this.createTouchO(t, e))), this.sendEvents(s, Wt.MOUSE_MOVE), this._clearTempArrs());
        }
        getLastOvers() {
            return Pe._tEleArr.length = 0, this.preOvers.length > 0 && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, Pe._tEleArr) : (Pe._tEleArr.push(i.stage), Pe._tEleArr);
        }
        stageMouseOut() {
            var t;
            t = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(t, Wt.MOUSE_OUT);
        }
        onMouseUp(t, e, i = !1) {
            if (this.enable) {
                var r, a, n, h, o, l, _, c, u = jt.onMobile;
                if (a = this.getEles(t, null, Pe._tEleArr), this.sendEvents(a, i ? Wt.MOUSE_UP : Wt.RIGHT_MOUSE_UP), c = i ? this.preDowns : this.preRightDowns, r = this.getTouchFromArr(e, c)) {
                    var d, p = jt.now();
                    if (d = p - this._lastClickTime < 300, this._lastClickTime = p, t == r.tar) _ = a;
                    else
                        for (n = this.getEles(r.tar, null, Pe._oldArr), (_ = Pe._newArr).length = 0, o = n.length, h = 0; h < o; h++) l = n[h], a.indexOf(l) >= 0 && _.push(l);
                    _.length > 0 && this.sendEvents(_, i ? Wt.CLICK : Wt.RIGHT_CLICK), i && d && this.sendEvents(_, Wt.DOUBLE_CLICK), this.removeTouchFromArr(e, c), r.tar = null, s.recover("TouchData", r);
                } else;
                (r = this.getTouchFromArr(e, this.preOvers)) && u && ((_ = this.getEles(r.tar, null, _)) && _.length > 0 && this.sendEvents(_, Wt.MOUSE_OUT), this.removeTouchFromArr(e, this.preOvers), r.tar = null, s.recover("TouchData", r)), this._clearTempArrs();
            }
        }
    }
    Pe.I = new Pe(), Pe._oldArr = [], Pe._newArr = [], Pe._tEleArr = [];
    class De {
        constructor() {
            this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0, this.mouseMoveAccuracy = 2, this._event = new Wt(), this._captureSp = null, this._captureChain = [], this._captureExlusiveMode = !1, this._hitCaputreSp = !1, this._point = new f(), this._rect = new g(), this._lastMoveTimer = 0, this._prePoint = new f(), this._touchIDs = {}, this._curTouchID = NaN, this._id = 1;
        }
        __init__(t, e) {
            this._stage = t;
            var i = this;
            e.oncontextmenu = function(t) {
                if (De.enabled) return !1;
            }, e.addEventListener("mousedown", function(t) {
                De.enabled && (jt.onIE || t.preventDefault(), i.mouseDownTime = jt.now(), i.runEvent(t));
            }), e.addEventListener("mouseup", function(t) {
                De.enabled && (t.preventDefault(), i.mouseDownTime = -jt.now(), i.runEvent(t));
            }, !0), e.addEventListener("mousemove", function(t) {
                if (De.enabled) {
                    t.preventDefault();
                    var e = jt.now();
                    if (e - i._lastMoveTimer < 10) return;
                    i._lastMoveTimer = e, i.runEvent(t);
                }
            }, !0), e.addEventListener("mouseout", function(t) {
                De.enabled && i.runEvent(t);
            }), e.addEventListener("mouseover", function(t) {
                De.enabled && i.runEvent(t);
            }), e.addEventListener("touchstart", function(t) {
                De.enabled && (De._isFirstTouch || Ie.isInputting || t.preventDefault(), i.mouseDownTime = jt.now(), i.runEvent(t));
            }), e.addEventListener("touchend", function(t) {
                De.enabled ? (De._isFirstTouch || Ie.isInputting || t.preventDefault(), De._isFirstTouch = !1, i.mouseDownTime = -jt.now(), i.runEvent(t)) : i._curTouchID = NaN;
            }, !0), e.addEventListener("touchmove", function(t) {
                De.enabled && (t.preventDefault(), i.runEvent(t));
            }, !0), e.addEventListener("touchcancel", function(t) {
                De.enabled ? (t.preventDefault(), i.runEvent(t)) : i._curTouchID = NaN;
            }, !0), e.addEventListener("mousewheel", function(t) {
                De.enabled && i.runEvent(t);
            }), e.addEventListener("DOMMouseScroll", function(t) {
                De.enabled && i.runEvent(t);
            });
        }
        initEvent(t, e = null) {
            var i;
            this._event._stoped = !1, this._event.nativeEvent = e || t, this._target = null, this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY), this._stage._canvasTransform && (this._stage._canvasTransform.invertTransformPoint(this._point), this.mouseX = this._point.x, this.mouseY = this._point.y), this._event.touchId = t.identifier || 0, this._tTouchID = this._event.touchId, (i = Pe.I._event)._stoped = !1, i.nativeEvent = this._event.nativeEvent, i.touchId = this._event.touchId;
        }
        checkMouseWheel(t) {
            this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
            for (var e = Pe.I.getLastOvers(), i = 0, s = e.length; i < s; i++) {
                var r = e[i];
                r.event(Wt.MOUSE_WHEEL, this._event.setTo(Wt.MOUSE_WHEEL, r, this._target));
            }
        }
        onMouseMove(t) {
            Pe.I.onMouseMove(t, this._tTouchID);
        }
        onMouseDown(t) {
            if (Ie.isInputting && i.stage.focus && i.stage.focus.focus && !i.stage.focus.contains(this._target)) {
                var e = i.stage.focus._tf || i.stage.focus,
                    s = t._tf || t;
                s instanceof Ie && s.multiline == e.multiline ? e._focusOut() : e.focus = !1;
            }
            Pe.I.onMouseDown(t, this._tTouchID, this._isLeftMouse);
        }
        onMouseUp(t) {
            Pe.I.onMouseUp(t, this._tTouchID, this._isLeftMouse);
        }
        check(t, e, i, s) {
            this._point.setTo(e, i), t.fromParentPoint(this._point), e = this._point.x, i = this._point.y;
            var r = t._style.scrollRect;
            if (r && (this._rect.setTo(r.x, r.y, r.width, r.height), !this._rect.contains(e, i))) return !1;
            if (!this.disableMouseEvent) {
                if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i)) return !1;
                for (var a = t._children.length - 1; a > -1; a--) {
                    var n = t._children[a];
                    if (!n.destroyed && n._mouseState > 1 && n._visible && this.check(n, e, i, s)) return !0;
                }
                for (a = t._extUIChild.length - 1; a >= 0; a--) {
                    var h = t._extUIChild[a];
                    if (!h.destroyed && h._mouseState > 1 && h._visible && this.check(h, e, i, s)) return !0;
                }
            }
            var o = !(!t.hitTestPrior || t.mouseThrough || this.disableMouseEvent) || this.hitTest(t, e, i);
            return o ? (this._target = t, s.call(this, t), this._target == this._hitCaputreSp && (this._hitCaputreSp = !0)) : s === this.onMouseUp && t === this._stage && (this._target = this._stage, s.call(this, this._target)), o;
        }
        hitTest(t, e, i) {
            var s = !1;
            t.scrollRect && (e -= t._style.scrollRect.x, i -= t._style.scrollRect.y);
            var r = t._style.hitArea;
            return r && r._hit ? r.contains(e, i) : ((t.width > 0 && t.height > 0 || t.mouseThrough || r) && (s = t.mouseThrough ? t.getGraphicBounds().contains(e, i) : (r || this._rect.setTo(0, 0, t.width, t.height)).contains(e, i)), s);
        }
        _checkAllBaseUI(t, e, i) {
            var s = this.handleExclusiveCapture(this.mouseX, this.mouseY, i);
            return !!s || (s = this.check(this._stage, this.mouseX, this.mouseY, i), this.handleCapture(this.mouseX, this.mouseY, i) || s);
        }
        check3DUI(t, e, i) {
            for (var s = this._stage._3dUI, r = 0, a = !1; r < s.length; r++) {
                var n = s[r];
                this._stage._curUIBase = n, !n.destroyed && n._mouseState > 1 && n._visible && (a = a || this.check(n, this.mouseX, this.mouseY, i));
            }
            return this._stage._curUIBase = this._stage, a;
        }
        handleExclusiveCapture(t, e, i) {
            if (this._captureExlusiveMode && this._captureSp && this._captureChain.length > 0) {
                var s;
                this._point.setTo(t, e);
                for (var r = 0; r < this._captureChain.length; r++)(s = this._captureChain[r]).fromParentPoint(this._point);
                return this._target = s, i.call(this, s), !0;
            }
            return !1;
        }
        handleCapture(t, e, i) {
            if (!this._hitCaputreSp && this._captureSp && this._captureChain.length > 0) {
                var s;
                this._point.setTo(t, e);
                for (var r = 0; r < this._captureChain.length; r++)(s = this._captureChain[r]).fromParentPoint(this._point);
                return this._target = s, i.call(this, s), !0;
            }
            return !1;
        }
        runEvent(t) {
            var e, i, s;
            switch ("mousemove" !== t.type && (this._prePoint.x = this._prePoint.y = -1e6), t.type) {
                case "mousedown":
                    this._touchIDs[0] = this._id++, De._isTouchRespond ? De._isTouchRespond = !1 : (this._isLeftMouse = 0 === t.button, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                    break;
                case "mouseup":
                    this._isLeftMouse = 0 === t.button, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp);
                    break;
                case "mousemove":
                    Math.abs(this._prePoint.x - t.clientX) + Math.abs(this._prePoint.y - t.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = t.clientX, this._prePoint.y = t.clientY, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                    break;
                case "touchstart":
                    De._isTouchRespond = !0, this._isLeftMouse = !0;
                    var r = t.changedTouches;
                    for (e = 0, i = r.length; e < i; e++) s = r[e], (De.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = s.identifier, this._id % 200 == 0 && (this._touchIDs = {}), this._touchIDs[s.identifier] = this._id++, this.initEvent(s, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                    break;
                case "touchend":
                case "touchcancel":
                    De._isTouchRespond = !0, this._isLeftMouse = !0;
                    var a = t.changedTouches;
                    for (e = 0, i = a.length; e < i; e++) {
                        if (s = a[e], De.multiTouchEnabled || s.identifier == this._curTouchID) this._curTouchID = NaN, this.initEvent(s, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp) || this.onMouseUp(null);
                    }
                    break;
                case "touchmove":
                    var n = t.changedTouches;
                    for (e = 0, i = n.length; e < i; e++) s = n[e], (De.multiTouchEnabled || s.identifier == this._curTouchID) && (this.initEvent(s, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                    break;
                case "wheel":
                case "mousewheel":
                case "DOMMouseScroll":
                    this.checkMouseWheel(t);
                    break;
                case "mouseout":
                    Pe.I.stageMouseOut();
                    break;
                case "mouseover":
                    this._stage.event(Wt.MOUSE_OVER, this._event.setTo(Wt.MOUSE_OVER, this._stage, this._stage));
            }
        }
        setCapture(t, e = !1) {
            this._captureSp = t, this._captureExlusiveMode = e, this._captureChain.length = 0, this._captureChain.push(t);
            for (var s = t; s != i.stage && s != i.stage._curUIBase && (s = s.parent);) this._captureChain.splice(0, 0, s);
        }
        releaseCapture() {
            console.log("release capture"), this._captureSp = null;
        }
    }
    De.instance = new De(), De.enabled = !0, De.multiTouchEnabled = !0, De._isFirstTouch = !0;
    class Le {
        constructor() {
            this._pool = [], this._map = [], this._laters = [];
        }
        _update() {
            var t = this._laters,
                e = t.length;
            if (e > 0) {
                for (var i = 0, s = e - 1; i <= s; i++) {
                    var r = t[i];
                    this._map[r.key] = null, null !== r.method && (r.run(), r.clear()), this._pool.push(r), i === s && (s = t.length - 1);
                }
                t.length = 0;
            }
        }
        _getHandler(t, e) {
            var s = t ? t.$_GID || (t.$_GID = i.Utils.getGID()) : 0,
                r = e.$_TID || (e.$_TID = 1e5 * i.Timer._mid++);
            return this._map[s + r];
        }
        callLater(t, e, i = null) {
            if (null == this._getHandler(t, e)) {
                if (this._pool.length) var s = this._pool.pop();
                else s = new Oe();
                s.caller = t, s.method = e, s.args = i;
                var r = t ? t.$_GID : 0,
                    a = e.$_TID;
                s.key = r + a, this._map[s.key] = s, this._laters.push(s);
            }
        }
        runCallLater(t, e) {
            var i = this._getHandler(t, e);
            i && null != i.method && (this._map[i.key] = null, i.run(), i.clear());
        }
    }
    Le.I = new Le();
    class Oe {
        clear() {
            this.caller = null, this.method = null, this.args = null;
        }
        run() {
            var t = this.caller;
            if (t && t.destroyed) return this.clear();
            var e = this.method,
                i = this.args;
            null != e && (i ? e.apply(t, i) : e.call(t));
        }
    }
    class Be {}
    Be.createShaderCondition = function(t) {
        var e = "(function() {return " + t + ";})";
        return window.Laya._runScript(e);
    }, Be.changeWebGLSize = function(t, e) {
        Jt.onStageResize(t, e);
    };
    class Fe extends we {
        constructor() {
            super(), this.offset = new f(), this._frameRate = "fast", this.designWidth = 0, this.designHeight = 0, this.canvasRotation = !1, this.canvasDegree = 0, this.renderingEnabled = !0, this.screenAdaptationEnabled = !0, this._canvasTransform = new p(), this._screenMode = "none", this._scaleMode = "noscale", this._alignV = "top", this._alignH = "left", this._bgColor = "black", this._mouseMoveTime = 0, this._renderCount = 0, this._safariOffsetY = 0, this._frameStartTime = 0, this._previousOrientation = jt.window.orientation, this._wgColor = [0, 0, 0, 1], this._scene3Ds = [], this._globalRepaintSet = !1, this._globalRepaintGet = !1, this._3dUI = [], this._curUIBase = null, this.useRetinalCanvas = !1, super.set_transform(this._createTransform()), this.mouseEnabled = !0, this.hitTestPrior = !0, this.autoSize = !1, this._setBit(me.DISPLAYED_INSTAGE, !0), this._setBit(me.ACTIVE_INHIERARCHY, !0), this._isFocused = !0, this._isVisibility = !0, this.useRetinalCanvas = e.useRetinalCanvas;
            var t = jt.window,
                i = this;
            t.addEventListener("focus", function() {
                this._isFocused = !0, i.event(Wt.FOCUS), i.event(Wt.FOCUS_CHANGE);
            }), t.addEventListener("blur", function() {
                this._isFocused = !1, i.event(Wt.BLUR), i.event(Wt.FOCUS_CHANGE), i._isInputting() && (Ie.inputElement.target.focus = !1);
            });
            var s = "visibilityState",
                r = "visibilitychange",
                a = t.document;
            void 0 !== a.hidden ? (r = "visibilitychange", s = "visibilityState") : void 0 !== a.mozHidden ? (r = "mozvisibilitychange", s = "mozVisibilityState") : void 0 !== a.msHidden ? (r = "msvisibilitychange", s = "msVisibilityState") : void 0 !== a.webkitHidden && (r = "webkitvisibilitychange", s = "webkitVisibilityState"), t.document.addEventListener(r, function() {
                "hidden" == jt.document[s] ? (this._isVisibility = !1, i._isInputting() && (Ie.inputElement.target.focus = !1)) : this._isVisibility = !0;
                this.renderingEnabled = this._isVisibility, i.event(Wt.VISIBILITY_CHANGE);
            }), t.addEventListener("resize", function() {
                var t = jt.window.orientation;
                null != t && t != this._previousOrientation && i._isInputting() && (Ie.inputElement.target.focus = !1), this._previousOrientation = t, i._isInputting() || (jt.onSafari && (i._safariOffsetY = (jt.window.__innerHeight || jt.document.body.clientHeight || jt.document.documentElement.clientHeight) - jt.window.innerHeight), i._resetCanvas());
            }), t.addEventListener("orientationchange", function(t) {
                i._resetCanvas();
            }), this.on(Wt.MOUSE_MOVE, this, this._onmouseMove), jt.onMobile && this.on(Wt.MOUSE_DOWN, this, this._onmouseMove);
        }
        _isInputting() {
            return jt.onMobile && Ie.isInputting;
        }
        set width(t) {
            this.designWidth = t, super.set_width(t), i.systemTimer.callLater(this, this._changeCanvasSize);
        }
        get width() {
            return super.get_width();
        }
        set height(t) {
            this.designHeight = t, super.set_height(t), i.systemTimer.callLater(this, this._changeCanvasSize);
        }
        get height() {
            return super.get_height();
        }
        set transform(t) {
            super.set_transform(t);
        }
        get transform() {
            return this._tfChanged && this._adjustTransform(), this._transform = this._transform || this._createTransform();
        }
        get isFocused() {
            return this._isFocused;
        }
        get isVisibility() {
            return this._isVisibility;
        }
        _changeCanvasSize() {
            this.setScreenSize(jt.clientWidth * jt.pixelRatio, jt.clientHeight * jt.pixelRatio);
        }
        _resetCanvas() {
            this.screenAdaptationEnabled && this._changeCanvasSize();
        }
        setScreenSize(t, e) {
            var i = !1;
            if (this._screenMode !== Fe.SCREEN_NONE && (i = (t / e < 1 ? Fe.SCREEN_VERTICAL : Fe.SCREEN_HORIZONTAL) !== this._screenMode)) {
                var s = e;
                e = t, t = s;
            }
            this.canvasRotation = i;
            var r = ee._mainCanvas,
                a = r.source.style,
                n = this._canvasTransform.identity(),
                h = this._scaleMode,
                o = t / this.designWidth,
                l = e / this.designHeight,
                _ = this.useRetinalCanvas ? t : this.designWidth,
                c = this.useRetinalCanvas ? e : this.designHeight,
                u = t,
                d = e,
                p = jt.pixelRatio;
            switch (this._width = this.designWidth, this._height = this.designHeight, h) {
                case Fe.SCALE_NOSCALE:
                    o = l = 1, u = this.designWidth, d = this.designHeight;
                    break;
                case Fe.SCALE_SHOWALL:
                    o = l = Math.min(o, l), _ = u = Math.round(this.designWidth * o), c = d = Math.round(this.designHeight * l);
                    break;
                case Fe.SCALE_NOBORDER:
                    o = l = Math.max(o, l), u = Math.round(this.designWidth * o), d = Math.round(this.designHeight * l);
                    break;
                case Fe.SCALE_FULL:
                    o = l = 1, this._width = _ = t, this._height = c = e;
                    break;
                case Fe.SCALE_FIXED_WIDTH:
                    l = o, this._height = c = Math.round(e / o);
                    break;
                case Fe.SCALE_FIXED_HEIGHT:
                    o = l, this._width = _ = Math.round(t / l);
                    break;
                case Fe.SCALE_FIXED_AUTO:
                    t / e < this.designWidth / this.designHeight ? (l = o, this._height = c = Math.round(e / o)) : (o = l, this._width = _ = Math.round(t / l));
            }
            this.useRetinalCanvas && (_ = t, c = e), o *= this.scaleX, l *= this.scaleY, 1 === o && 1 === l ? this.transform.identity() : (this.transform.a = this._formatData(o / (u / _)), this.transform.d = this._formatData(l / (d / c))), r.size(_, c), Be.changeWebGLSize(_, c), n.scale(u / _ / p, d / c / p), this._alignH === Fe.ALIGN_LEFT ? this.offset.x = 0 : this._alignH === Fe.ALIGN_RIGHT ? this.offset.x = t - u : this.offset.x = .5 * (t - u) / p, this._alignV === Fe.ALIGN_TOP ? this.offset.y = 0 : this._alignV === Fe.ALIGN_BOTTOM ? this.offset.y = e - d : this.offset.y = .5 * (e - d) / p, this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), n.translate(this.offset.x, this.offset.y), this._safariOffsetY && n.translate(0, this._safariOffsetY), this.canvasDegree = 0, i && (this._screenMode === Fe.SCREEN_HORIZONTAL ? (n.rotate(Math.PI / 2), n.translate(e / p, 0), this.canvasDegree = 90) : (n.rotate(-Math.PI / 2), n.translate(0, t / p), this.canvasDegree = -90)), n.a = this._formatData(n.a), n.d = this._formatData(n.d), n.tx = this._formatData(n.tx), n.ty = this._formatData(n.ty), super.set_transform(this.transform), a.transformOrigin = a.webkitTransformOrigin = a.msTransformOrigin = a.mozTransformOrigin = a.oTransformOrigin = "0px 0px 0px", a.transform = a.webkitTransform = a.msTransform = a.mozTransform = a.oTransform = "matrix(" + n.toString() + ")", this._safariOffsetY && n.translate(0, -this._safariOffsetY), n.translate(parseInt(a.left) || 0, parseInt(a.top) || 0), this.visible = !0, this._repaint |= ae.REPAINT_CACHE, this.event(Wt.RESIZE);
        }
        _formatData(t) {
            return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? t > 0 ? 1 : -1 : t;
        }
        get scaleMode() {
            return this._scaleMode;
        }
        set scaleMode(t) {
            this._scaleMode = t, i.systemTimer.callLater(this, this._changeCanvasSize);
        }
        get alignH() {
            return this._alignH;
        }
        set alignH(t) {
            this._alignH = t, i.systemTimer.callLater(this, this._changeCanvasSize);
        }
        get alignV() {
            return this._alignV;
        }
        set alignV(t) {
            this._alignV = t, i.systemTimer.callLater(this, this._changeCanvasSize);
        }
        get bgColor() {
            return this._bgColor;
        }
        set bgColor(t) {
            this._bgColor = t, this._wgColor = t ? V.create(t).arrColor : null, ee.canvas.style.background = t || "none";
        }
        get mouseX() {
            return Math.round(De.instance.mouseX / this.clientScaleX);
        }
        get mouseY() {
            return Math.round(De.instance.mouseY / this.clientScaleY);
        }
        getMousePoint() {
            return f.TEMP.setTo(this.mouseX, this.mouseY);
        }
        get clientScaleX() {
            return this._transform ? this._transform.getScaleX() : 1;
        }
        get clientScaleY() {
            return this._transform ? this._transform.getScaleY() : 1;
        }
        get screenMode() {
            return this._screenMode;
        }
        set screenMode(t) {
            this._screenMode = t;
        }
        repaint(t = ae.REPAINT_CACHE) {
            this._repaint |= t;
        }
        parentRepaint(t = ae.REPAINT_CACHE) {}
        _loop() {
            return this._globalRepaintGet = this._globalRepaintSet, this._globalRepaintSet = !1, this.render(ee._context, 0, 0), !0;
        }
        getFrameTm() {
            return this._frameStartTime;
        }
        _onmouseMove(t) {
            this._mouseMoveTime = jt.now();
        }
        getTimeFromFrameStart() {
            return jt.now() - this._frameStartTime;
        }
        set visible(t) {
            this.visible !== t && (super.set_visible(t), ee._mainCanvas.source.style.visibility = t ? "visible" : "hidden");
        }
        get visible() {
            return super.visible;
        }
        render(t, e, i) {
            if (window.conch) this.renderToNative(t, e, i);
            else {
                if (Fe._dbgSprite.graphics.clear(), this._frameRate === Fe.FRAME_SLEEP) {
                    var s = jt.now();
                    if (!(s - this._frameStartTime >= 1e3)) return;
                    this._frameStartTime = s;
                } else {
                    if (!this._visible) return this._renderCount++, void(this._renderCount % 5 == 0 && (Le.I._update(), O.loopCount++, lt.loopCount = O.loopCount, this._updateTimers()));
                    this._frameStartTime = jt.now(), lt.loopStTm = this._frameStartTime;
                }
                this._renderCount++;
                var r = (this._frameRate === Fe.FRAME_MOUSE ? this._frameStartTime - this._mouseMoveTime < 2e3 ? Fe.FRAME_FAST : Fe.FRAME_SLOW : this._frameRate) !== Fe.FRAME_SLOW,
                    a = this._renderCount % 2 == 0;
                if (O.renderSlow = !r, r || a) {
                    if (Le.I._update(), O.loopCount++, lt.loopCount = O.loopCount, this.renderingEnabled) {
                        for (var n = 0, h = this._scene3Ds.length; n < h; n++) this._scene3Ds[n]._update();
                        t.clear(), super.render(t, e, i), O._StatRender.renderNotCanvas(t, e, i);
                    }
                    Fe._dbgSprite.render(t, 0, 0), this.renderingEnabled && (Fe.clear(this._bgColor), t.flush(), fe.instance && fe.getInstance().endDispose()), this._updateTimers();
                }
            }
        }
        renderToNative(t, e, i) {
            if (this._renderCount++, this._visible) {
                if (Le.I._update(), O.loopCount++, lt.loopCount = O.loopCount, this.renderingEnabled) {
                    for (var s = 0, r = this._scene3Ds.length; s < r; s++) this._scene3Ds[s]._update();
                    t.clear(), super.render(t, e, i), O._StatRender.renderNotCanvas(t, e, i);
                }
                this.renderingEnabled && (Fe.clear(this._bgColor), t.flush(), fe.instance && fe.getInstance().endDispose()), this._updateTimers();
            } else this._renderCount % 5 == 0 && (Le.I._update(), O.loopCount++, lt.loopCount = O.loopCount, this._updateTimers());
        }
        _updateTimers() {
            i.systemTimer._update(), i.startTimer._update(), i.physicsTimer._update(), i.updateTimer._update(), i.lateTimer._update(), i.timer._update();
        }
        set fullScreenEnabled(t) {
            var e = jt.document,
                i = ee.canvas;
            t ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen), e.addEventListener("fullscreenchange", this._fullScreenChanged), e.addEventListener("mozfullscreenchange", this._fullScreenChanged), e.addEventListener("webkitfullscreenchange", this._fullScreenChanged), e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen), i.removeEventListener("touchstart", this._requestFullscreen), e.removeEventListener("fullscreenchange", this._fullScreenChanged), e.removeEventListener("mozfullscreenchange", this._fullScreenChanged), e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged), e.removeEventListener("msfullscreenchange", this._fullScreenChanged));
        }
        get frameRate() {
            return i.Render.isConchApp ? this._frameRateNative : this._frameRate;
        }
        set frameRate(t) {
            if (i.Render.isConchApp) {
                var e = window.conch;
                switch (t) {
                    case Fe.FRAME_FAST:
                        e.config.setLimitFPS(60);
                        break;
                    case Fe.FRAME_MOUSE:
                        e.config.setMouseFrame(2e3);
                        break;
                    case Fe.FRAME_SLOW:
                        e.config.setSlowFrame(!0);
                        break;
                    case Fe.FRAME_SLEEP:
                        e.config.setLimitFPS(1);
                }
                this._frameRateNative = t;
            } else this._frameRate = t;
        }
        _requestFullscreen() {
            var t = jt.document.documentElement;
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
        }
        _fullScreenChanged() {
            i.stage.event(Wt.FULL_SCREEN_CHANGE);
        }
        exitFullscreen() {
            var t = jt.document;
            t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen();
        }
        isGlobalRepaint() {
            return this._globalRepaintGet;
        }
        setGlobalRepaint() {
            this._globalRepaintSet = !0;
        }
        add3DUI(t) {
            var e = t.rootView;
            this._3dUI.indexOf(e) >= 0 || this._3dUI.push(e);
        }
        remove3DUI(t) {
            var e = t.rootView,
                i = this._3dUI.indexOf(e);
            return i >= 0 && (this._3dUI.splice(i, 1), !0);
        }
    }
    Fe.SCALE_NOSCALE = "noscale", Fe.SCALE_EXACTFIT = "exactfit", Fe.SCALE_SHOWALL = "showall", Fe.SCALE_NOBORDER = "noborder", Fe.SCALE_FULL = "full", Fe.SCALE_FIXED_WIDTH = "fixedwidth", Fe.SCALE_FIXED_HEIGHT = "fixedheight", Fe.SCALE_FIXED_AUTO = "fixedauto", Fe.ALIGN_LEFT = "left", Fe.ALIGN_RIGHT = "right", Fe.ALIGN_CENTER = "center", Fe.ALIGN_TOP = "top", Fe.ALIGN_MIDDLE = "middle", Fe.ALIGN_BOTTOM = "bottom", Fe.SCREEN_NONE = "none", Fe.SCREEN_HORIZONTAL = "horizontal", Fe.SCREEN_VERTICAL = "vertical", Fe.FRAME_FAST = "fast", Fe.FRAME_SLOW = "slow", Fe.FRAME_MOUSE = "mouse", Fe.FRAME_SLEEP = "sleep", Fe._dbgSprite = new we(), Fe.clear = function(t) {
        Zt.set2DRenderConfig();
        var i = m.instance;
        M.worldScissorTest && i.disable(i.SCISSOR_TEST);
        var s = ee.context,
            r = 0 == s._submits._length || e.preserveDrawingBuffer ? V.create(t).arrColor : window.Laya.stage._wgColor;
        r ? s.clearBG(r[0], r[1], r[2], r[3]) : s.clearBG(0, 0, 0, 0), M.clear();
    }, Te.regClass("laya.display.Stage", Fe), Te.regClass("Laya.Stage", Fe);
    class Ne {
        static __init__() {
            Ne._addEvent("keydown"), Ne._addEvent("keypress"), Ne._addEvent("keyup");
        }
        static _addEvent(t) {
            i.Browser.document.addEventListener(t, function(e) {
                Ne._dispatch(e, t);
            }, !0);
        }
        static _dispatch(t, e) {
            if (Ne.enabled) {
                Ne._event._stoped = !1, Ne._event.nativeEvent = t, Ne._event.keyCode = t.keyCode || t.which || t.charCode, "keydown" === e ? Ne._pressKeys[Ne._event.keyCode] = !0 : "keyup" === e && (Ne._pressKeys[Ne._event.keyCode] = null);
                for (var s = i.stage.focus && null != i.stage.focus.event && i.stage.focus.displayedInStage ? i.stage.focus : i.stage, r = s; r;) r.event(e, Ne._event.setTo(e, r, s)), r = r.parent;
            }
        }
        static hasKeyDown(t) {
            return Ne._pressKeys[t];
        }
    }
    Ne._pressKeys = {}, Ne.enabled = !0, Ne._event = new Wt();
    class Ue extends T {
        constructor() {
            super(...arguments), this.isStopped = !1;
        }
        set volume(t) {}
        get volume() {
            return 1;
        }
        get position() {
            return 0;
        }
        get duration() {
            return 0;
        }
        play() {}
        stop() {
            this.completeHandler && this.completeHandler.run();
        }
        pause() {}
        resume() {}
        __runComplete(t) {
            t && t.run();
        }
    }
    class ke extends Ue {
        constructor(t) {
            super(), this._audio = null, this._onEnd = this.__onEnd.bind(this), this._resumePlay = this.__resumePlay.bind(this), t.addEventListener("ended", this._onEnd), this._audio = t;
        }
        __onEnd(t) {
            if (1 == this.loops) return this.completeHandler && (i.systemTimer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event(Wt.COMPLETE);
            this.loops > 0 && this.loops--, this.startTime = 0, this.play();
        }
        __resumePlay() {
            if (this._audio && this._audio.removeEventListener("canplay", this._resumePlay), !this.isStopped) try {
                this._audio.currentTime = this.startTime, jt.container.appendChild(this._audio), this._audio.play();
            } catch (t) {
                this.event(Wt.ERROR);
            }
        }
        play() {
            this.isStopped = !1;
            try {
                this._audio.playbackRate = i.SoundManager.playbackRate, this._audio.currentTime = this.startTime;
            } catch (t) {
                return void this._audio.addEventListener("canplay", this._resumePlay);
            }
            i.SoundManager.addChannel(this), jt.container.appendChild(this._audio), "play" in this._audio && this._audio.play();
        }
        get position() {
            return this._audio ? this._audio.currentTime : 0;
        }
        get duration() {
            return this._audio ? this._audio.duration : 0;
        }
        stop() {
            super.stop(), this.isStopped = !0, i.SoundManager.removeChannel(this), this.completeHandler = null, this._audio && ("pause" in this._audio && i.Render.isConchApp && this._audio.stop(), this._audio.pause(), this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay), i.Browser.onIE || this._audio != i.AudioSound._musicAudio && i.Pool.recover("audio:" + this.url, this._audio), jt.removeElement(this._audio), this._audio = null, i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url));
        }
        pause() {
            this.isStopped = !0, i.SoundManager.removeChannel(this), "pause" in this._audio && this._audio.pause(), i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url);
        }
        resume() {
            this._audio && (this.isStopped = !1, i.SoundManager.addChannel(this), "play" in this._audio && this._audio.play());
        }
        set volume(t) {
            this._audio && (this._audio.volume = t);
        }
        get volume() {
            return this._audio ? this._audio.volume : 1;
        }
    }
    class Ge extends T {
        constructor() {
            super(...arguments), this.loaded = !1;
        }
        dispose() {
            var t = Ge._audioCache[this.url];
            s.clearBySign("audio:" + this.url), t && (ee.isConchApp || (t.src = ""), delete Ge._audioCache[this.url]);
        }
        static _initMusicAudio() {
            Ge._musicAudio || (Ge._musicAudio || (Ge._musicAudio = jt.createElement("audio")), ee.isConchApp || jt.document.addEventListener("mousedown", Ge._makeMusicOK));
        }
        static _makeMusicOK() {
            jt.document.removeEventListener("mousedown", Ge._makeMusicOK), Ge._musicAudio.src ? Ge._musicAudio.play() : (Ge._musicAudio.src = "", Ge._musicAudio.load());
        }
        load(t) {
            var e;
            if (t = y.formatURL(t), this.url = t, t == i.SoundManager._bgMusic ? (Ge._initMusicAudio(), (e = Ge._musicAudio).src != t && (Ge._audioCache[e.src] = null, e = null)) : e = Ge._audioCache[t], e && e.readyState >= 2) this.event(Wt.COMPLETE);
            else {
                e || (t == i.SoundManager._bgMusic ? (Ge._initMusicAudio(), e = Ge._musicAudio) : e = jt.createElement("audio"), Ge._audioCache[t] = e, e.src = t), e.addEventListener("canplaythrough", onLoaded), e.addEventListener("error", onErr);
                var s = this;
                this.audio = e, e.load ? e.load() : onErr();
            }

            function onLoaded() {
                offs(), s.loaded = !0, s.event(Wt.COMPLETE);
            }

            function onErr() {
                e.load = null, offs(), s.event(Wt.ERROR);
            }

            function offs() {
                e.removeEventListener("canplaythrough", onLoaded), e.removeEventListener("error", onErr);
            }
        }
        play(t = 0, e = 0) {
            if (!this.url) return null;
            var r, a;
            if (!(r = this.url == i.SoundManager._bgMusic ? Ge._musicAudio : Ge._audioCache[this.url])) return null;
            a = s.getItem("audio:" + this.url), ee.isConchApp ? a || ((a = jt.createElement("audio")).src = this.url) : this.url == i.SoundManager._bgMusic ? (Ge._initMusicAudio(), (a = Ge._musicAudio).src = this.url) : a = a || r.cloneNode(!0);
            var n = new ke(a);
            return n.url = this.url, n.loops = e, n.startTime = t, n.play(), i.SoundManager.addChannel(n), n;
        }
        get duration() {
            var t;
            return (t = Ge._audioCache[this.url]) ? t.duration : 0;
        }
    }
    Ge._audioCache = {};
    class We extends Ue {
        constructor() {
            super(), this.bufferSource = null, this._currentTime = 0, this._volume = 1, this._startTime = 0, this._pauseTime = 0, this.context = i.WebAudioSound.ctx, this._onPlayEnd = Y.bind(this.__onPlayEnd, this), this.context.createGain ? this.gain = this.context.createGain() : this.gain = this.context.createGainNode();
        }
        play() {
            if (i.SoundManager.addChannel(this), this.isStopped = !1, this._clearBufferSource(), this.audioBuffer) {
                if (this.startTime >= this.duration) return stop();
                var t = this.context,
                    e = this.gain,
                    s = t.createBufferSource();
                this.bufferSource = s, s.buffer = this.audioBuffer, s.connect(e), e && e.disconnect(), e.connect(t.destination), s.onended = this._onPlayEnd, this._startTime = jt.now(), this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, We.SetTargetDelay) : this.gain.gain.value = this._volume, 0 == this.loops && (s.loop = !0), s.playbackRate.setTargetAtTime ? s.playbackRate.setTargetAtTime(i.SoundManager.playbackRate, this.context.currentTime, We.SetTargetDelay) : s.playbackRate.value = i.SoundManager.playbackRate, s.start(0, this.startTime), this._currentTime = 0;
            }
        }
        __onPlayEnd() {
            if (1 == this.loops) return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event(Wt.COMPLETE);
            this.loops > 0 && this.loops--, this.startTime = 0, this.play();
        }
        get position() {
            return this.bufferSource ? (jt.now() - this._startTime) / 1e3 + this.startTime : 0;
        }
        get duration() {
            return this.audioBuffer ? this.audioBuffer.duration : 0;
        }
        _clearBufferSource() {
            if (this.bufferSource) {
                var t = this.bufferSource;
                t.stop ? t.stop(0) : t.noteOff(0), t.disconnect(0), t.onended = null, We._tryCleanFailed || this._tryClearBuffer(t), this.bufferSource = null;
            }
        }
        _tryClearBuffer(t) {
            if (jt.onMac) try {
                t.buffer = i.WebAudioSound._miniBuffer;
            } catch (t) {
                We._tryCleanFailed = !0;
            } else try {
                t.buffer = null;
            } catch (t) {
                We._tryCleanFailed = !0;
            }
        }
        stop() {
            super.stop(), this._clearBufferSource(), this.audioBuffer = null, this.gain && this.gain.disconnect(), this.isStopped = !0, i.SoundManager.removeChannel(this), this.completeHandler = null, i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url);
        }
        pause() {
            this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(), this.gain && this.gain.disconnect(), this.isStopped = !0, i.SoundManager.removeChannel(this), i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url);
        }
        resume() {
            this.startTime = this._pauseTime, this.play();
        }
        set volume(t) {
            this._volume = t, this.isStopped || (this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(t, this.context.currentTime, We.SetTargetDelay) : this.gain.gain.value = t);
        }
        get volume() {
            return this._volume;
        }
    }
    We._tryCleanFailed = !1, We.SetTargetDelay = .001;
    class Ye extends T {
        constructor() {
            super(...arguments), this.loaded = !1, this._disposed = !1;
        }
        static decode() {
            Ye.buffs.length <= 0 || Ye.isDecoding || (Ye.isDecoding = !0, Ye.tInfo = Ye.buffs.shift(), Ye.ctx.decodeAudioData(Ye.tInfo.buffer, Ye._done, Ye._fail));
        }
        static _done(t) {
            Ye.e.event("loaded:" + Ye.tInfo.url, t), Ye.isDecoding = !1, Ye.decode();
        }
        static _fail() {
            Ye.e.event("err:" + Ye.tInfo.url, null), Ye.isDecoding = !1, Ye.decode();
        }
        static _playEmptySound() {
            if (null != Ye.ctx) {
                var t = Ye.ctx.createBufferSource();
                t.buffer = Ye._miniBuffer, t.connect(Ye.ctx.destination), t.start(0, 0, 0);
            }
        }
        static _unlock() {
            Ye._unlocked || (Ye._playEmptySound(), "running" == Ye.ctx.state && (window.document.removeEventListener("mousedown", Ye._unlock, !0), window.document.removeEventListener("touchend", Ye._unlock, !0), window.document.removeEventListener("touchstart", Ye._unlock, !0), Ye._unlocked = !0));
        }
        static initWebAudio() {
            "running" != Ye.ctx.state && (Ye._unlock(), window.document.addEventListener("mousedown", Ye._unlock, !0), window.document.addEventListener("touchend", Ye._unlock, !0), window.document.addEventListener("touchstart", Ye._unlock, !0));
        }
        load(t) {
            var e = this;
            if (t = y.formatURL(t), this.url = t, this.audioBuffer = Ye._dataCache[t], this.audioBuffer) this._loaded(this.audioBuffer);
            else if (Ye.e.on("loaded:" + t, this, this._loaded), Ye.e.on("err:" + t, this, this._err), !Ye.__loadingSound[t]) {
                Ye.__loadingSound[t] = !0;
                var i = new XMLHttpRequest();
                i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
                    e._disposed ? e._removeLoadEvents() : (e.data = i.response, Ye.buffs.push({
                        buffer: e.data,
                        url: e.url
                    }), Ye.decode());
                }, i.onerror = function(t) {
                    e._err();
                }, i.send();
            }
        }
        _err() {
            this._removeLoadEvents(), Ye.__loadingSound[this.url] = !1, this.event(Wt.ERROR);
        }
        _loaded(t) {
            this._removeLoadEvents(), this._disposed || (this.audioBuffer = t, Ye._dataCache[this.url] = this.audioBuffer, this.loaded = !0, this.event(Wt.COMPLETE));
        }
        _removeLoadEvents() {
            Ye.e.off("loaded:" + this.url, this, this._loaded), Ye.e.off("err:" + this.url, this, this._err);
        }
        __playAfterLoaded() {
            if (this.__toPlays) {
                var t, e, i, s;
                for (e = (i = this.__toPlays).length, t = 0; t < e; t++)(s = i[t])[2] && !s[2].isStopped && this.play(s[0], s[1], s[2]);
                this.__toPlays.length = 0;
            }
        }
        play(t = 0, e = 0, s = null) {
            return s = s || new We(), this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []), this.__toPlays.push([t, e, s]), this.once(Wt.COMPLETE, this, this.__playAfterLoaded), this.load(this.url)), s.url = this.url, s.loops = e, s.audioBuffer = this.audioBuffer, s.startTime = t, s.play(), i.SoundManager.addChannel(s), s;
        }
        get duration() {
            return this.audioBuffer ? this.audioBuffer.duration : 0;
        }
        dispose() {
            this._disposed = !0, delete Ye._dataCache[this.url], delete Ye.__loadingSound[this.url], this.audioBuffer = null, this.data = null, this.__toPlays = [];
        }
    }
    Ye._dataCache = {}, Ye.webAudioEnabled = window.AudioContext || window.webkitAudioContext || window.mozAudioContext, Ye.ctx = Ye.webAudioEnabled ? new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext)() : void 0, Ye.buffs = [], Ye.isDecoding = !1, Ye._miniBuffer = Ye.ctx ? Ye.ctx.createBuffer(1, 1, 22050) : void 0, Ye.e = new T(), Ye._unlocked = !1, Ye.__loadingSound = {};
    class Ve {
        static __init__() {
            var t = i.Browser.window,
                e = !!(t.AudioContext || t.webkitAudioContext || t.mozAudioContext);
            return e && Ye.initWebAudio(), Ve._soundClass = e ? Ye : Ge, Ge._initMusicAudio(), Ve._musicClass = Ge, e;
        }
        static addChannel(t) {
            Ve._channels.indexOf(t) >= 0 || Ve._channels.push(t);
        }
        static removeChannel(t) {
            var e;
            for (e = Ve._channels.length - 1; e >= 0; e--) Ve._channels[e] == t && Ve._channels.splice(e, 1);
        }
        static disposeSoundLater(t) {
            Ve._lastSoundUsedTimeDic[t] = i.Browser.now(), Ve._isCheckingDispose || (Ve._isCheckingDispose = !0, i.timer.loop(5e3, null, Ve._checkDisposeSound));
        }
        static _checkDisposeSound() {
            var t, e = i.Browser.now(),
                s = !1;
            for (t in Ve._lastSoundUsedTimeDic) e - Ve._lastSoundUsedTimeDic[t] > 3e4 ? (delete Ve._lastSoundUsedTimeDic[t], Ve.disposeSoundIfNotUsed(t)) : s = !0;
            s || (Ve._isCheckingDispose = !1, i.timer.clear(null, Ve._checkDisposeSound));
        }
        static disposeSoundIfNotUsed(t) {
            var e;
            for (e = Ve._channels.length - 1; e >= 0; e--)
                if (Ve._channels[e].url == t) return;
            Ve.destroySound(t);
        }
        static set autoStopMusic(t) {
            i.stage.off(Wt.BLUR, null, Ve._stageOnBlur), i.stage.off(Wt.FOCUS, null, Ve._stageOnFocus), i.stage.off(Wt.VISIBILITY_CHANGE, null, Ve._visibilityChange), Ve._autoStopMusic = t, t && (i.stage.on(Wt.BLUR, null, Ve._stageOnBlur), i.stage.on(Wt.FOCUS, null, Ve._stageOnFocus), i.stage.on(Wt.VISIBILITY_CHANGE, null, Ve._visibilityChange));
        }
        static get autoStopMusic() {
            return Ve._autoStopMusic;
        }
        static _visibilityChange() {
            i.stage.isVisibility ? Ve._stageOnFocus() : Ve._stageOnBlur();
        }
        static _stageOnBlur() {
            Ve._isActive = !1, Ve._musicChannel && (Ve._musicChannel.isStopped || (Ve._blurPaused = !0, Ve._musicChannel.pause())), Ve.stopAllSound(), i.stage.once(Wt.MOUSE_DOWN, null, Ve._stageOnFocus);
        }
        static _recoverWebAudio() {
            Ye.ctx && "running" != Ye.ctx.state && Ye.ctx.resume && Ye.ctx.resume();
        }
        static _stageOnFocus() {
            Ve._isActive = !0, Ve._recoverWebAudio(), i.stage.off(Wt.MOUSE_DOWN, null, Ve._stageOnFocus), Ve._blurPaused && Ve._musicChannel && Ve._musicChannel.isStopped && (Ve._blurPaused = !1, Ve._musicChannel.resume());
        }
        static set muted(t) {
            t != Ve._muted && (t && Ve.stopAllSound(), Ve.musicMuted = t, Ve._muted = t);
        }
        static get muted() {
            return Ve._muted;
        }
        static set soundMuted(t) {
            Ve._soundMuted = t;
        }
        static get soundMuted() {
            return Ve._soundMuted;
        }
        static set musicMuted(t) {
            t != Ve._musicMuted && (t ? (Ve._bgMusic && Ve._musicChannel && !Ve._musicChannel.isStopped ? i.Render.isConchApp ? Ve._musicChannel._audio && (Ve._musicChannel._audio.muted = !0) : Ve._musicChannel.pause() : Ve._musicChannel = null, Ve._musicMuted = t) : (Ve._musicMuted = t, Ve._bgMusic && Ve._musicChannel && (i.Render.isConchApp ? Ve._musicChannel._audio && (Ve._musicChannel._audio.muted = !1) : Ve._musicChannel.resume())));
        }
        static get musicMuted() {
            return Ve._musicMuted;
        }
        static get useAudioMusic() {
            return Ve._useAudioMusic;
        }
        static set useAudioMusic(t) {
            Ve._useAudioMusic = t, Ve._musicClass = t ? Ge : null;
        }
        static playSound(t, e = 1, s = null, r = null, a = 0) {
            if (!Ve._isActive || !t) return null;
            if (Ve._muted) return null;
            if (Ve._recoverWebAudio(), (t = y.formatURL(t)) == Ve._bgMusic) {
                if (Ve._musicMuted) return null;
            } else {
                if (i.Render.isConchApp) {
                    var n = Y.getFileExtension(t);
                    if ("wav" != n && "ogg" != n) return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."), null;
                }
                if (Ve._soundMuted) return null;
            }
            var h, o;
            return i.Browser.onBDMiniGame || i.Browser.onMiniGame || i.Browser.onKGMiniGame || i.Browser.onQGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame || (h = i.loader.getRes(t)), r || (r = Ve._soundClass), h || ((h = new r()).load(t), i.Browser.onBDMiniGame || i.Browser.onMiniGame || i.Browser.onKGMiniGame || i.Browser.onQGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame || i.Loader.cacheRes(t, h)), (o = h.play(a, e)) ? (o.url = t, o.volume = t == Ve._bgMusic ? Ve.musicVolume : Ve.soundVolume, o.completeHandler = s, o) : null;
        }
        static destroySound(t) {
            var e = i.loader.getRes(t);
            e && (i.Loader.clearRes(t), e.dispose());
        }
        static playMusic(t, e = 0, i = null, s = 0) {
            return t = y.formatURL(t), Ve._bgMusic = t, Ve._musicChannel && Ve._musicChannel.stop(), Ve._musicChannel = Ve.playSound(t, e, i, Ve._musicClass, s);
        }
        static stopSound(t) {
            var e, i;
            for (t = y.formatURL(t), e = Ve._channels.length - 1; e >= 0; e--)(i = Ve._channels[e]).url == t && i.stop();
        }
        static stopAll() {
            var t;
            for (Ve._bgMusic = null, t = Ve._channels.length - 1; t >= 0; t--) Ve._channels[t].stop();
        }
        static stopAllSound() {
            var t, e;
            for (t = Ve._channels.length - 1; t >= 0; t--)(e = Ve._channels[t]).url != Ve._bgMusic && e.stop();
        }
        static stopMusic() {
            Ve._musicChannel && Ve._musicChannel.stop(), Ve._bgMusic = null;
        }
        static setSoundVolume(t, e = null) {
            var i, s;
            if (e) e = y.formatURL(e), Ve._setVolume(e, t);
            else
                for (Ve.soundVolume = t, i = Ve._channels.length - 1; i >= 0; i--)(s = Ve._channels[i]).url != Ve._bgMusic && (s.volume = t);
        }
        static setMusicVolume(t) {
            Ve.musicVolume = t, Ve._setVolume(Ve._bgMusic, t);
        }
        static _setVolume(t, e) {
            var i, s;
            for (t = y.formatURL(t), i = Ve._channels.length - 1; i >= 0; i--)(s = Ve._channels[i]).url == t && (s.volume = e);
        }
    }
    Ve.musicVolume = 1, Ve.soundVolume = 1, Ve.playbackRate = 1, Ve._useAudioMusic = !0, Ve._muted = !1, Ve._soundMuted = !1, Ve._musicMuted = !1, Ve._bgMusic = null, Ve._musicChannel = null, Ve._channels = [], Ve._blurPaused = !1, Ve._isActive = !0, Ve._lastSoundUsedTimeDic = {}, Ve._isCheckingDispose = !1, Ve.autoReleaseSound = !0;
    class He extends T {
        constructor() {
            super(...arguments), this._http = new XMLHttpRequest();
        }
        send(t, e = null, i = "get", s = "text", r = null) {
            this._responseType = s, this._data = null, (jt.onVVMiniGame || jt.onQGMiniGame || jt.onQQMiniGame) && (t = encodeURI(t)), this._url = t;
            var a = this,
                n = this._http;
            if (t = y.getAdptedFilePath(t), n.open(i, t, !0), r)
                for (var h = 0; h < r.length; h++) n.setRequestHeader(r[h++], r[h]);
            else window.conch || (e && "string" != typeof e ? n.setRequestHeader("Content-Type", "application/json") : n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
            let o = "arraybuffer" !== s ? "text" : "arraybuffer";
            n.responseType = o, n.dataType && (n.dataType = o), n.onerror = function(t) {
                a._onError(t);
            }, n.onabort = function(t) {
                a._onAbort(t);
            }, n.onprogress = function(t) {
                a._onProgress(t);
            }, n.onload = function(t) {
                a._onLoad(t);
            }, n.send(e);
        }
        _onProgress(t) {
            t && t.lengthComputable && this.event(Wt.PROGRESS, t.loaded / t.total);
        }
        _onAbort(t) {
            this.error("Request was aborted by user");
        }
        _onError(t) {
            this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
        }
        _onLoad(t) {
            var e = this._http,
                i = void 0 !== e.status ? e.status : 200;
            200 === i || 204 === i || 0 === i ? this.complete() : this.error("[" + e.status + "]" + e.statusText + ":" + e.responseURL);
        }
        error(t) {
            this.clear(), console.warn(this.url, t), this.event(Wt.ERROR, t);
        }
        complete() {
            this.clear();
            var t = !0;
            try {
                "json" === this._responseType ? this._data = JSON.parse(this._http.responseText) : "xml" === this._responseType ? this._data = Y.parseXMLFromString(this._http.responseText) : this._data = this._http.response || this._http.responseText;
            } catch (e) {
                t = !1, this.error(e.message);
            }
            t && this.event(Wt.COMPLETE, this._data instanceof Array ? [this._data] : this._data);
        }
        clear() {
            var t = this._http;
            t.onerror = t.onabort = t.onprogress = t.onload = null;
        }
        get url() {
            return this._url;
        }
        get data() {
            return this._data;
        }
        get http() {
            return this._http;
        }
    }
    class Xe {
        constructor() {
            this._fontCharDic = {}, this._fontWidthMap = {}, this._maxWidth = 0, this._spaceWidth = 10, this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0;
        }
        loadFont(t, e) {
            this._path = t, this._complete = e, t && -1 !== t.indexOf(".fnt") ? i.loader.load([{
                url: t,
                type: i.Loader.XML
            }, {
                url: t.replace(".fnt", ".png"),
                type: i.Loader.IMAGE
            }], v.create(this, this._onLoaded)) : console.error('Bitmap font configuration information must be a ".fnt" file');
        }
        _onLoaded() {
            this.parseFont(i.Loader.getRes(this._path), i.Loader.getRes(this._path.replace(".fnt", ".png"))), this._complete && this._complete.run();
        }
        parseFont(t, e) {
            if (null != t && null != e) {
                this._texture = e;
                var i = t.getElementsByTagName("info");
                if (!i[0].getAttributeNode) return this.parseFont2(t, e);
                this.fontSize = parseInt(i[0].getAttributeNode("size").nodeValue);
                var s = i[0].getAttributeNode("padding").nodeValue.split(",");
                this._padding = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])];
                var r = t.getElementsByTagName("char"),
                    a = 0;
                for (a = 0; a < r.length; a++) {
                    var n = r[a],
                        h = parseInt(n.getAttributeNode("id").nodeValue),
                        o = parseInt(n.getAttributeNode("xoffset").nodeValue) / 1,
                        l = parseInt(n.getAttributeNode("yoffset").nodeValue) / 1,
                        _ = parseInt(n.getAttributeNode("xadvance").nodeValue) / 1,
                        c = new g();
                    c.x = parseInt(n.getAttributeNode("x").nodeValue), c.y = parseInt(n.getAttributeNode("y").nodeValue), c.width = parseInt(n.getAttributeNode("width").nodeValue), c.height = parseInt(n.getAttributeNode("height").nodeValue);
                    var u = Yt.create(e, c.x, c.y, c.width, c.height, o, l);
                    this._maxWidth = Math.max(this._maxWidth, _ + this.letterSpacing), this._fontCharDic[h] = u, this._fontWidthMap[h] = _;
                }
            }
        }
        parseFont2(t, e) {
            if (null != t && null != e) {
                this._texture = e;
                var i = t.getElementsByTagName("info");
                this.fontSize = parseInt(i[0].attributes.size.nodeValue);
                var s = i[0].attributes.padding.nodeValue.split(",");
                this._padding = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])];
                var r = t.getElementsByTagName("char"),
                    a = 0;
                for (a = 0; a < r.length; a++) {
                    var n = r[a].attributes,
                        h = parseInt(n.id.nodeValue),
                        o = parseInt(n.xoffset.nodeValue) / 1,
                        l = parseInt(n.yoffset.nodeValue) / 1,
                        _ = parseInt(n.xadvance.nodeValue) / 1,
                        c = new g();
                    c.x = parseInt(n.x.nodeValue), c.y = parseInt(n.y.nodeValue), c.width = parseInt(n.width.nodeValue), c.height = parseInt(n.height.nodeValue);
                    var u = Yt.create(e, c.x, c.y, c.width, c.height, o, l);
                    this._maxWidth = Math.max(this._maxWidth, _ + this.letterSpacing), this._fontCharDic[h] = u, this._fontWidthMap[h] = _;
                }
            }
        }
        getCharTexture(t) {
            return this._fontCharDic[t.charCodeAt(0)];
        }
        destroy() {
            if (this._texture) {
                for (var t in this._fontCharDic) {
                    var e = this._fontCharDic[t];
                    e && e.destroy();
                }
                this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null, this._complete = null, this._padding = null;
            }
        }
        setSpaceWidth(t) {
            this._spaceWidth = t;
        }
        getCharWidth(t) {
            var e = t.charCodeAt(0);
            return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " === t ? this._spaceWidth + this.letterSpacing : 0;
        }
        getTextWidth(t) {
            for (var e = 0, i = 0, s = t.length; i < s; i++) e += this.getCharWidth(t.charAt(i));
            return e;
        }
        getMaxWidth() {
            return this._maxWidth;
        }
        getMaxHeight() {
            return this.fontSize;
        }
        _drawText(t, e, i, s, r, a) {
            var n, h = this.getTextWidth(t),
                o = 0;
            "center" === r && (o = (a - h) / 2), "right" === r && (o = a - h);
            for (var l = 0, _ = 0, c = t.length; _ < c; _++)(n = this.getCharTexture(t.charAt(_))) && (e.graphics.drawImage(n, i + l + o, s), l += this.getCharWidth(t.charAt(_)));
        }
    }
    Te.regClass("laya.display.BitmapFont", Xe), Te.regClass("Laya.BitmapFont", Xe);
    class ze {
        create() {
            return this.json ? i.SceneUtils.createByData(null, this.json) : null;
        }
    }
    class je {
        constructor(t = null) {
            this._xd_ = !0, this._allocated_ = 8, this._pos_ = 0, this._length = 0, t ? (this._u8d_ = new Uint8Array(t), this._d_ = new DataView(this._u8d_.buffer), this._length = this._d_.byteLength) : this._resizeBuffer(this._allocated_);
        }
        static getSystemEndian() {
            if (!je._sysEndian) {
                var t = new ArrayBuffer(2);
                new DataView(t).setInt16(0, 256, !0), je._sysEndian = 256 === new Int16Array(t)[0] ? je.LITTLE_ENDIAN : je.BIG_ENDIAN;
            }
            return je._sysEndian;
        }
        get buffer() {
            var t = this._d_.buffer;
            return t.byteLength === this._length ? t : t.slice(0, this._length);
        }
        get endian() {
            return this._xd_ ? je.LITTLE_ENDIAN : je.BIG_ENDIAN;
        }
        set endian(t) {
            this._xd_ = t === je.LITTLE_ENDIAN;
        }
        set length(t) {
            this._allocated_ < t ? this._resizeBuffer(this._allocated_ = Math.floor(Math.max(t, 2 * this._allocated_))) : this._allocated_ > t && this._resizeBuffer(this._allocated_ = t), this._length = t;
        }
        get length() {
            return this._length;
        }
        _resizeBuffer(t) {
            try {
                var e = new Uint8Array(t);
                null != this._u8d_ && (this._u8d_.length <= t ? e.set(this._u8d_) : e.set(this._u8d_.subarray(0, t))), this._u8d_ = e, this._d_ = new DataView(e.buffer);
            } catch (e) {
                throw "Invalid typed array length:" + t;
            }
        }
        getString() {
            return this.readString();
        }
        readString() {
            return this._rUTF(this.getUint16());
        }
        getFloat32Array(t, e) {
            return this.readFloat32Array(t, e);
        }
        readFloat32Array(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var s = new Float32Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, s;
        }
        getUint8Array(t, e) {
            return this.readUint8Array(t, e);
        }
        readUint8Array(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var s = new Uint8Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, s;
        }
        getInt16Array(t, e) {
            return this.readInt16Array(t, e);
        }
        readInt16Array(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var s = new Int16Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, s;
        }
        getFloat32() {
            return this.readFloat32();
        }
        readFloat32() {
            if (this._pos_ + 4 > this._length) throw "getFloat32 error - Out of bounds";
            var t = this._d_.getFloat32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }
        getFloat64() {
            return this.readFloat64();
        }
        readFloat64() {
            if (this._pos_ + 8 > this._length) throw "getFloat64 error - Out of bounds";
            var t = this._d_.getFloat64(this._pos_, this._xd_);
            return this._pos_ += 8, t;
        }
        writeFloat32(t) {
            this._ensureWrite(this._pos_ + 4), this._d_.setFloat32(this._pos_, t, this._xd_), this._pos_ += 4;
        }
        writeFloat64(t) {
            this._ensureWrite(this._pos_ + 8), this._d_.setFloat64(this._pos_, t, this._xd_), this._pos_ += 8;
        }
        getInt32() {
            return this.readInt32();
        }
        readInt32() {
            if (this._pos_ + 4 > this._length) throw "getInt32 error - Out of bounds";
            var t = this._d_.getInt32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }
        getUint32() {
            return this.readUint32();
        }
        readUint32() {
            if (this._pos_ + 4 > this._length) throw "getUint32 error - Out of bounds";
            var t = this._d_.getUint32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }
        writeInt32(t) {
            this._ensureWrite(this._pos_ + 4), this._d_.setInt32(this._pos_, t, this._xd_), this._pos_ += 4;
        }
        writeUint32(t) {
            this._ensureWrite(this._pos_ + 4), this._d_.setUint32(this._pos_, t, this._xd_), this._pos_ += 4;
        }
        getInt16() {
            return this.readInt16();
        }
        readInt16() {
            if (this._pos_ + 2 > this._length) throw "getInt16 error - Out of bounds";
            var t = this._d_.getInt16(this._pos_, this._xd_);
            return this._pos_ += 2, t;
        }
        getUint16() {
            return this.readUint16();
        }
        readUint16() {
            if (this._pos_ + 2 > this._length) throw "getUint16 error - Out of bounds";
            var t = this._d_.getUint16(this._pos_, this._xd_);
            return this._pos_ += 2, t;
        }
        writeUint16(t) {
            this._ensureWrite(this._pos_ + 2), this._d_.setUint16(this._pos_, t, this._xd_), this._pos_ += 2;
        }
        writeInt16(t) {
            this._ensureWrite(this._pos_ + 2), this._d_.setInt16(this._pos_, t, this._xd_), this._pos_ += 2;
        }
        getUint8() {
            return this.readUint8();
        }
        readUint8() {
            if (this._pos_ + 1 > this._length) throw "getUint8 error - Out of bounds";
            return this._u8d_[this._pos_++];
        }
        writeUint8(t) {
            this._ensureWrite(this._pos_ + 1), this._d_.setUint8(this._pos_, t), this._pos_++;
        }
        _getUInt8(t) {
            return this._readUInt8(t);
        }
        _readUInt8(t) {
            return this._d_.getUint8(t);
        }
        _getUint16(t) {
            return this._readUint16(t);
        }
        _readUint16(t) {
            return this._d_.getUint16(t, this._xd_);
        }
        _getMatrix() {
            return this._readMatrix();
        }
        _readMatrix() {
            return new p(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
        }
        _rUTF(t) {
            var e, i, s, r = this._pos_ + t,
                a = String.fromCharCode,
                n = this._u8d_,
                h = [],
                o = 0;
            for (h.length = 1e3; this._pos_ < r;)(e = n[this._pos_++]) < 128 ? 0 != e && (h[o++] = a(e)) : e < 224 ? h[o++] = a((63 & e) << 6 | 127 & n[this._pos_++]) : e < 240 ? (i = n[this._pos_++], h[o++] = a((31 & e) << 12 | (127 & i) << 6 | 127 & n[this._pos_++])) : (i = n[this._pos_++], s = n[this._pos_++], h[o++] = a((15 & e) << 18 | (127 & i) << 12 | s << 6 & 127 | 127 & n[this._pos_++]));
            return h.length = o, h.join("");
        }
        getCustomString(t) {
            return this.readCustomString(t);
        }
        readCustomString(t) {
            for (var e, i = "", s = 0, r = String.fromCharCode, a = this._u8d_; t > 0;)
                if ((e = a[this._pos_]) < 128) i += r(e), this._pos_++, t--;
                else
                    for (s = e - 128, this._pos_++, t -= s; s > 0;) e = a[this._pos_++], i += r(a[this._pos_++] << 8 | e), s--;
            return i;
        }
        get pos() {
            return this._pos_;
        }
        set pos(t) {
            this._pos_ = t;
        }
        get bytesAvailable() {
            return this._length - this._pos_;
        }
        clear() {
            this._pos_ = 0, this.length = 0;
        }
        __getBuffer() {
            return this._d_.buffer;
        }
        writeUTFBytes(t) {
            for (var e = 0, i = (t += "").length; e < i; e++) {
                var s = t.charCodeAt(e);
                s <= 127 ? this.writeByte(s) : s <= 2047 ? (this._ensureWrite(this._pos_ + 2), this._u8d_.set([192 | s >> 6, 128 | 63 & s], this._pos_), this._pos_ += 2) : s <= 65535 ? (this._ensureWrite(this._pos_ + 3), this._u8d_.set([224 | s >> 12, 128 | s >> 6 & 63, 128 | 63 & s], this._pos_), this._pos_ += 3) : (this._ensureWrite(this._pos_ + 4), this._u8d_.set([240 | s >> 18, 128 | s >> 12 & 63, 128 | s >> 6 & 63, 128 | 63 & s], this._pos_), this._pos_ += 4);
            }
        }
        writeUTFString(t) {
            var e = this.pos;
            this.writeUint16(1), this.writeUTFBytes(t);
            var i = this.pos - e - 2;
            this._d_.setUint16(e, i, this._xd_);
        }
        readUTFString() {
            return this.readUTFBytes(this.getUint16());
        }
        getUTFString() {
            return this.readUTFString();
        }
        readUTFBytes(t = -1) {
            if (0 === t) return "";
            var e = this.bytesAvailable;
            if (t > e) throw "readUTFBytes error - Out of bounds";
            return t = t > 0 ? t : e, this._rUTF(t);
        }
        getUTFBytes(t = -1) {
            return this.readUTFBytes(t);
        }
        writeByte(t) {
            this._ensureWrite(this._pos_ + 1), this._d_.setInt8(this._pos_, t), this._pos_ += 1;
        }
        readByte() {
            if (this._pos_ + 1 > this._length) throw "readByte error - Out of bounds";
            return this._d_.getInt8(this._pos_++);
        }
        getByte() {
            return this.readByte();
        }
        _ensureWrite(t) {
            this._length < t && (this._length = t), this._allocated_ < t && (this.length = t);
        }
        writeArrayBuffer(t, e = 0, i = 0) {
            if (e < 0 || i < 0) throw "writeArrayBuffer error - Out of bounds";
            0 == i && (i = t.byteLength - e), this._ensureWrite(this._pos_ + i);
            var s = new Uint8Array(t);
            this._u8d_.set(s.subarray(e, e + i), this._pos_), this._pos_ += i;
        }
        readArrayBuffer(t) {
            var e;
            return e = this._u8d_.buffer.slice(this._pos_, this._pos_ + t), this._pos_ = this._pos_ + t, e;
        }
    }
    je.BIG_ENDIAN = "bigEndian", je.LITTLE_ENDIAN = "littleEndian", je._sysEndian = null;
    class Ke extends T {
        constructor() {
            super(...arguments), this._customParse = !1;
        }
        static getTypeFromUrl(t) {
            var e = Y.getFileExtension(t);
            return e ? Ke.typeMap[e] : (console.warn("Not recognize the resources suffix", t), "text");
        }
        load(t, e = null, s = !0, r = null, a = !1, n = i.WorkerLoader.enable) {
            if (t) {
                if (Ke.setGroup(t, "666"), this._url = t, 0 === t.indexOf("data:image") ? e = Ke.IMAGE : t = y.formatURL(t), this._type = e || (e = Ke.getTypeFromUrl(this._url)), this._cache = s, this._useWorkerLoader = n, this._data = null, n && i.WorkerLoader.enableWorkerLoader(), !a && Ke.loadedMap[t]) return this._data = Ke.loadedMap[t], this.event(Wt.PROGRESS, 1), void this.event(Wt.COMPLETE, this._data);
                if (r && Ke.setGroup(t, r), null != Ke.parserMap[e]) return this._customParse = !0, void(Ke.parserMap[e] instanceof v ? Ke.parserMap[e].runWith(this) : Ke.parserMap[e].call(null, this));
                this._loadResourceFilter(e, t);
            } else this.onLoaded(null);
        }
        _loadResourceFilter(t, e) {
            this._loadResource(t, e);
        }
        _loadResource(t, e) {
            switch (t) {
                case Ke.IMAGE:
                case "htmlimage":
                case "nativeimage":
                    this._loadImage(e);
                    break;
                case Ke.SOUND:
                    this._loadSound(e);
                    break;
                case Ke.TTF:
                    this._loadTTF(e);
                    break;
                case Ke.ATLAS:
                case Ke.PREFAB:
                case Ke.PLF:
                    this._loadHttpRequestWhat(e, Ke.JSON);
                    break;
                case Ke.FONT:
                    this._loadHttpRequestWhat(e, Ke.XML);
                    break;
                case Ke.PLFB:
                    this._loadHttpRequestWhat(e, Ke.BUFFER);
                    break;
                default:
                    this._loadHttpRequestWhat(e, t);
            }
        }
        _loadHttpRequest(t, e, i, s, r, a, n, h) {
            jt.onVVMiniGame ? this._http = new He() : this._http || (this._http = new He()), this._http.on(Wt.PROGRESS, r, a), this._http.on(Wt.COMPLETE, i, s), this._http.on(Wt.ERROR, n, h), this._http.send(t, null, "get", e);
        }
        _loadHtmlImage(t, e, i, s, r) {
            var a;

            function clear() {
                var e = a;
                e.onload = null, e.onerror = null, delete Ke._imgCache[t];
            }
            (a = new jt.window.Image()).crossOrigin = "", a.onload = function() {
                clear(), i.call(e, a);
            }, a.onerror = function() {
                clear(), r.call(s);
            }, a.src = t, Ke._imgCache[t] = a;
        }
        _loadHttpRequestWhat(t, e) {
            Ke.preLoadedMap[t] ? this.onLoaded(Ke.preLoadedMap[t]) : this._loadHttpRequest(t, e, this, this.onLoaded, this, this.onProgress, this, this.onError);
        }
        _loadTTF(t) {
            t = y.formatURL(t);
            var e = new i.TTFLoader();
            e.complete = v.create(this, this.onLoaded), e.load(t);
        }
        _loadImage(t) {
            var e, i = this;
            t = y.formatURL(t);
            var s = function() {
                i.event(Wt.ERROR, "Load image failed");
            };
            if ("nativeimage" === this._type) e = function(t) {
                i.onLoaded(t);
            }, this._loadHtmlImage(t, this, e, this, s);
            else {
                var r = Y.getFileExtension(t);
                "ktx" === r || "pvr" === r ? (e = function(e) {
                    var s;
                    switch (r) {
                        case "ktx":
                            s = 5;
                            break;
                        case "pvr":
                            s = 12;
                    }
                    var a = new R(0, 0, s, !1, !1);
                    a.wrapModeU = b.WARPMODE_CLAMP, a.wrapModeV = b.WARPMODE_CLAMP, a.setCompressData(e), a._setCreateURL(t), i.onLoaded(a);
                }, this._loadHttpRequest(t, Ke.BUFFER, this, e, null, null, this, s)) : (e = function(e) {
                    var s = new R(e.width, e.height, 1, !1, !1);
                    s.wrapModeU = b.WARPMODE_CLAMP, s.wrapModeV = b.WARPMODE_CLAMP, s.loadImageSource(e, !0), s._setCreateURL(t), i.onLoaded(s);
                }, this._loadHtmlImage(t, this, e, this, s));
            }
        }
        _loadSound(t) {
            var e = new Ve._soundClass(),
                i = this;

            function clear() {
                e.offAll();
            }
            e.on(Wt.COMPLETE, this, function() {
                clear(), i.onLoaded(e);
            }), e.on(Wt.ERROR, this, function() {
                clear(), e.dispose(), i.event(Wt.ERROR, "Load sound failed");
            }), e.load(t);
        }
        onProgress(t) {
            this._type === Ke.ATLAS ? this.event(Wt.PROGRESS, .3 * t) : this.event(Wt.PROGRESS, t);
        }
        onError(t) {
            this.event(Wt.ERROR, t);
        }
        onLoaded(t = null) {
            var e = this._type;
            if (e == Ke.PLFB) this.parsePLFBData(t), this.complete(t);
            else if (e == Ke.PLF) this.parsePLFData(t), this.complete(t);
            else if (e === Ke.IMAGE) {
                var i = new Yt(t);
                i.url = this._url, this.complete(i);
            } else if (e === Ke.SOUND || "htmlimage" === e || "nativeimage" === e) this.complete(t);
            else if (e === Ke.ATLAS) {
                if (!(t instanceof R)) {
                    if (!this._data) {
                        if (this._data = t, t.meta && t.meta.image) {
                            var s, r = t.meta.image.split(","),
                                a = this._url.indexOf("/") >= 0 ? "/" : "\\",
                                n = this._url.lastIndexOf(a),
                                h = n >= 0 ? this._url.substr(0, n + 1) : "";
                            jt.onAndroid && t.meta.compressTextureAndroid && (s = ".ktx"), jt.onIOS && t.meta.compressTextureIOS && (s = ".pvr");
                            for (var o = 0, l = r.length; o < l; o++) r[o] = s ? h + r[o].replace(".png", s) : h + r[o];
                        } else r = [this._url.replace(".json", ".png")];
                        r.reverse(), t.toLoads = r, t.pics = [];
                    }
                    return this.event(Wt.PROGRESS, .3 + 1 / r.length * .6), this._loadResourceFilter(Ke.IMAGE, r.pop());
                }
                if (this._data.pics.push(t), this._data.toLoads.length > 0) return this.event(Wt.PROGRESS, .3 + 1 / this._data.toLoads.length * .6), this._loadResourceFilter(Ke.IMAGE, this._data.toLoads.pop());
                var _ = this._data.frames,
                    c = this._url.split("?")[0],
                    u = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : c.substring(0, c.lastIndexOf(".")) + "/",
                    d = this._data.pics,
                    p = y.formatURL(this._url),
                    f = Ke.atlasMap[p] || (Ke.atlasMap[p] = []);
                f.dir = u;
                var g = 1;
                if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale)
                    for (var m in g = parseFloat(this._data.meta.scale), _) {
                        var v, T = _[m],
                            x = d[T.frame.idx ? T.frame.idx : 0],
                            E = y.formatURL(u + m);
                        x.scaleRate = g, v = Yt._create(x, T.frame.x, T.frame.y, T.frame.w, T.frame.h, T.spriteSourceSize.x, T.spriteSourceSize.y, T.sourceSize.w, T.sourceSize.h, Ke.getRes(E)), Ke.cacheRes(E, v), v.url = E, f.push(E);
                    } else
                        for (m in _) x = d[(T = _[m]).frame.idx ? T.frame.idx : 0], E = y.formatURL(u + m), v = Yt._create(x, T.frame.x, T.frame.y, T.frame.w, T.frame.h, T.spriteSourceSize.x, T.spriteSourceSize.y, T.sourceSize.w, T.sourceSize.h, Ke.getRes(E)), Ke.cacheRes(E, v), v.url = E, f.push(E);
                delete this._data.pics, this.complete(this._data);
            } else if (e === Ke.FONT) {
                if (!t._source) return this._data = t, this.event(Wt.PROGRESS, .5), this._loadImage(this._url.replace(".fnt", ".png"));
                var A = new Xe();
                A.parseFont(this._data, new Yt(t));
                var C = this._url.split(".fnt")[0].split("/"),
                    b = C[C.length - 1];
                Se.registerBitmapFont(b, A), this._data = A, this.complete(this._data);
            } else if (e === Ke.PREFAB) {
                var w = new ze();
                w.json = t, this.complete(w);
            } else this.complete(t);
        }
        parsePLFData(t) {
            var e, i, s;
            for (e in t) switch (s = t[e], e) {
                case "json":
                case "text":
                    for (i in s) Ke.preLoadedMap[y.formatURL(i)] = s[i];
                    break;
                default:
                    for (i in s) Ke.preLoadedMap[y.formatURL(i)] = s[i];
            }
        }
        parsePLFBData(t) {
            var e, i, s;
            for (s = (e = new je(t)).getInt32(), i = 0; i < s; i++) this.parseOnePLFBFile(e);
        }
        parseOnePLFBFile(t) {
            var e, i, s;
            i = t.getUTFString(), e = t.getInt32(), s = t.readArrayBuffer(e), Ke.preLoadedMap[y.formatURL(i)] = s;
        }
        complete(t) {
            this._data = t, this._customParse ? this.event(Wt.LOADED, t instanceof Array ? [t] : t) : (Ke._loaders.push(this), Ke._isWorking || Ke.checkNext());
        }
        static checkNext() {
            Ke._isWorking = !0;
            for (var t = jt.now(); Ke._startIndex < Ke._loaders.length;)
                if (jt.now(), Ke._loaders[Ke._startIndex].endLoad(), Ke._startIndex++, jt.now() - t > Ke.maxTimeOut) return console.warn("loader callback cost a long time:" + (jt.now() - t) + " url=" + Ke._loaders[Ke._startIndex - 1].url), void i.systemTimer.frameOnce(1, null, Ke.checkNext);
            Ke._loaders.length = 0, Ke._startIndex = 0, Ke._isWorking = !1;
        }
        endLoad(t = null) {
            t && (this._data = t), this._cache && Ke.cacheRes(this._url, this._data), this.event(Wt.PROGRESS, 1), this.event(Wt.COMPLETE, this.data instanceof Array ? [this.data] : this.data);
        }
        get url() {
            return this._url;
        }
        get type() {
            return this._type;
        }
        get cache() {
            return this._cache;
        }
        get data() {
            return this._data;
        }
        static clearRes(t) {
            t = y.formatURL(t);
            var e = Ke.getAtlas(t);
            if (e) {
                for (var i = 0, s = e.length; i < s; i++) {
                    var r = e[i],
                        a = Ke.getRes(r);
                    delete Ke.loadedMap[r], a && a.destroy();
                }
                e.length = 0, delete Ke.atlasMap[t], delete Ke.loadedMap[t];
            } else {
                var n = Ke.loadedMap[t];
                n && (delete Ke.loadedMap[t], n instanceof Yt && n.bitmap && n.destroy());
            }
        }
        static clearTextureRes(t) {
            t = y.formatURL(t);
            var e = Ke.getAtlas(t);
            if (e && e.length > 0) e.forEach(function(t) {
                var e = Ke.getRes(t);
                e instanceof Yt && e.disposeBitmap();
            });
            else {
                var i = Ke.getRes(t);
                i instanceof Yt && i.disposeBitmap();
            }
        }
        static getRes(t) {
            return Ke.loadedMap[y.formatURL(t)];
        }
        static getAtlas(t) {
            return Ke.atlasMap[y.formatURL(t)];
        }
        static cacheRes(t, e) {
            t = y.formatURL(t), null != Ke.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : Ke.loadedMap[t] = e;
        }
        static setGroup(t, e) {
            Ke.groupMap[e] || (Ke.groupMap[e] = []), Ke.groupMap[e].push(t);
        }
        static clearResByGroup(t) {
            if (Ke.groupMap[t]) {
                var e, i = Ke.groupMap[t],
                    s = i.length;
                for (e = 0; e < s; e++) Ke.clearRes(i[e]);
                i.length = 0;
            }
        }
    }
    Ke.TEXT = "text", Ke.JSON = "json", Ke.PREFAB = "prefab", Ke.XML = "xml", Ke.BUFFER = "arraybuffer", Ke.IMAGE = "image", Ke.SOUND = "sound", Ke.ATLAS = "atlas", Ke.FONT = "font", Ke.TTF = "ttf", Ke.PLF = "plf", Ke.PLFB = "plfb", Ke.HIERARCHY = "HIERARCHY", Ke.MESH = "MESH", Ke.MATERIAL = "MATERIAL", Ke.TEXTURE2D = "TEXTURE2D", Ke.TEXTURECUBE = "TEXTURECUBE", Ke.ANIMATIONCLIP = "ANIMATIONCLIP", Ke.AVATAR = "AVATAR", Ke.TERRAINHEIGHTDATA = "TERRAINHEIGHTDATA", Ke.TERRAINRES = "TERRAIN", Ke.typeMap = {
        ttf: "ttf",
        png: "image",
        jpg: "image",
        jpeg: "image",
        ktx: "image",
        pvr: "image",
        txt: "text",
        json: "json",
        prefab: "prefab",
        xml: "xml",
        als: "atlas",
        atlas: "atlas",
        mp3: "sound",
        ogg: "sound",
        wav: "sound",
        part: "json",
        fnt: "font",
        plf: "plf",
        plfb: "plfb",
        scene: "json",
        ani: "json",
        sk: "arraybuffer"
    }, Ke.parserMap = {}, Ke.maxTimeOut = 100, Ke.groupMap = {}, Ke.loadedMap = {}, Ke.atlasMap = {}, Ke.preLoadedMap = {}, Ke._imgCache = {}, Ke._loaders = [], Ke._isWorking = !1, Ke._startIndex = 0;
    class qe {
        static enable(t, e = null) {
            i.loader.load(t, v.create(null, qe._onInfoLoaded, [e]), null, Ke.JSON);
        }
        static _onInfoLoaded(t, e) {
            var i, s, r, a, n;
            for (i in e)
                for (s = (r = e[i])[0], n = (r = r[1]).length, a = 0; a < n; a++) qe._fileLoadDic[s + r[a]] = i;
            t && t.run();
        }
        static getFileLoadPath(t) {
            return qe._fileLoadDic[t] || t;
        }
    }
    qe._fileLoadDic = {};
    class Qe extends T {
        constructor() {
            super(), this.retryNum = 1, this.retryDelay = 0, this.maxLoader = 5, this._loaders = [], this._loaderCount = 0, this._resInfos = [], this._infoPool = [], this._maxPriority = 5, this._failRes = {}, this._statInfo = {
                count: 1,
                loaded: 1
            };
            for (var t = 0; t < this._maxPriority; t++) this._resInfos[t] = [];
        }
        getProgress() {
            return this._statInfo.loaded / this._statInfo.count;
        }
        resetProgress() {
            this._statInfo.count = this._statInfo.loaded = 1;
        }
        create(t, e = null, i = null, s = null, r = null, a = null, n = 1, h = !0) {
            this._create(t, !0, e, i, s, r, a, n, h);
        }
        _create(t, e, i = null, s = null, r = null, a = null, n = null, h = 1, o = !0) {
            if (t instanceof Array) {
                var l = !0,
                    _ = t,
                    c = _.length,
                    u = 0;
                if (s) var d = v.create(s.caller, s.method, s.args, !1);
                for (var p = 0; p < c; p++) {
                    var f = _[p];
                    "string" == typeof f && (f = _[p] = {
                        url: f
                    }), f.progress = 0;
                }
                for (p = 0; p < c; p++) {
                    f = _[p];
                    var g = s ? v.create(null, function(t, e) {
                            t.progress = e;
                            for (var i = 0, s = 0; s < c; s++) {
                                i += _[s].progress;
                            }
                            var r = i / c;
                            d.runWith(r);
                        }, [f], !1) : null,
                        m = s || i ? v.create(null, function(t, e = null) {
                            u++, t.progress = 1, e || (l = !1), u === c && i && i.runWith(l);
                        }, [f]) : null;
                    this._createOne(f.url, e, m, g, f.type || r, f.constructParams || a, f.propertyParams || n, f.priority || h, o);
                }
            } else this._createOne(t, e, i, s, r, a, n, h, o);
        }
        _createOne(t, e, s = null, r = null, a = null, n = null, h = null, o = 1, l = !0) {
            var _ = this.getRes(t);
            if (_) !e && _ instanceof E && _._addReference(), r && r.runWith(1), s && s.runWith(_);
            else {
                var c = Y.getFileExtension(t);
                if (a || (a = Qe.createMap[c] ? Qe.createMap[c][0] : null), !a) return void this.load(t, s, r, a, o, l);
                if (!Ke.parserMap[a]) return void this.load(t, s, r, a, o, l);
                this._createLoad(t, v.create(null, function(r) {
                    r && (!e && r instanceof E && r._addReference(), r._setCreateURL(t)), s && s.runWith(r), i.loader.event(t);
                }), r, a, n, h, o, l, !0);
            }
        }
        load(t, e = null, s = null, r = null, a = 1, n = !0, h = null, o = !1, l = i.WorkerLoader.enable) {
            if (t instanceof Array) return this._loadAssets(t, e, s, r, a, n, h);
            var _ = Ke.getRes(t);
            if (o || null == _) {
                var c;
                c = t, (t = qe.getFileLoadPath(t)) != c && "nativeimage" !== r ? r = Ke.ATLAS : c = null;
                var u = Qe._resMap[t];
                u ? (e && (c ? e && u._createListener(Wt.COMPLETE, this, this._resInfoLoaded, [c, e], !1, !1) : e && u._createListener(Wt.COMPLETE, e.caller, e.method, e.args, !1, !1)), s && u._createListener(Wt.PROGRESS, s.caller, s.method, s.args, !1, !1)) : ((u = this._infoPool.length ? this._infoPool.pop() : new Ze()).url = t, u.type = r, u.cache = n, u.group = h, u.ignoreCache = o, u.useWorkerLoader = l, u.originalUrl = c, e && u.on(Wt.COMPLETE, e.caller, e.method, e.args), s && u.on(Wt.PROGRESS, s.caller, s.method, s.args), Qe._resMap[t] = u, a = a < this._maxPriority ? a : this._maxPriority - 1, this._resInfos[a].push(u), this._statInfo.count++, this.event(Wt.PROGRESS, this.getProgress()), this._next());
            } else i.systemTimer.frameOnce(1, this, function() {
                s && s.runWith(1), e && e.runWith(_ instanceof Array ? [_] : _), this._loaderCount || this.event(Wt.COMPLETE);
            });
            return this;
        }
        _resInfoLoaded(t, e) {
            e.runWith(Ke.getRes(t));
        }
        _createLoad(t, e = null, s = null, r = null, a = null, n = null, h = 1, o = !0, l = !1) {
            if (t instanceof Array) return this._loadAssets(t, e, s, r, h, o);
            var _ = Ke.getRes(t);
            if (null != _) i.systemTimer.frameOnce(1, this, function() {
                s && s.runWith(1), e && e.runWith(_), this._loaderCount || this.event(Wt.COMPLETE);
            });
            else {
                var c = Qe._resMap[t];
                c ? (e && c._createListener(Wt.COMPLETE, e.caller, e.method, e.args, !1, !1), s && c._createListener(Wt.PROGRESS, s.caller, s.method, s.args, !1, !1)) : ((c = this._infoPool.length ? this._infoPool.pop() : new Ze()).url = t, c.type = r, c.cache = !1, c.ignoreCache = l, c.originalUrl = null, c.group = null, c.createCache = o, c.createConstructParams = a, c.createPropertyParams = n, e && c.on(Wt.COMPLETE, e.caller, e.method, e.args), s && c.on(Wt.PROGRESS, s.caller, s.method, s.args), Qe._resMap[t] = c, h = h < this._maxPriority ? h : this._maxPriority - 1, this._resInfos[h].push(c), this._statInfo.count++, this.event(Wt.PROGRESS, this.getProgress()), this._next());
            }
            return this;
        }
        _next() {
            if (!(this._loaderCount >= this.maxLoader)) {
                for (var t = 0; t < this._maxPriority; t++)
                    for (var e = this._resInfos[t]; e.length > 0;) {
                        var i = e.shift();
                        if (i) return this._doLoad(i);
                    }
                this._loaderCount || this.event(Wt.COMPLETE);
            }
        }
        _doLoad(t) {
            this._loaderCount++;
            var e = this._loaders.length ? this._loaders.pop() : new Ke();
            e.on(Wt.COMPLETE, null, onLoaded), e.on(Wt.PROGRESS, null, function(e) {
                t.event(Wt.PROGRESS, e);
            }), e.on(Wt.ERROR, null, function(t) {
                onLoaded(null);
            });
            var i = this;

            function onLoaded(s = null) {
                e.offAll(), e._data = null, e._customParse = !1, i._loaders.push(e), i._endLoad(t, s instanceof Array ? [s] : s), i._loaderCount--, i._next();
            }
            e._constructParams = t.createConstructParams, e._propertyParams = t.createPropertyParams, e._createCache = t.createCache, e.load(t.url, t.type, t.cache, t.group, t.ignoreCache, t.useWorkerLoader);
        }
        _endLoad(t, e) {
            var s = t.url;
            if (null == e) {
                var r = this._failRes[s] || 0;
                if (r < this.retryNum) return console.warn("[warn]Retry to load:", s), this._failRes[s] = r + 1, void i.systemTimer.once(this.retryDelay, this, this._addReTry, [t], !1);
                Ke.clearRes(s), console.warn("[error]Failed to load:", s), this.event(Wt.ERROR, s);
            }
            this._failRes[s] && (this._failRes[s] = 0), delete Qe._resMap[s], t.originalUrl && (e = Ke.getRes(t.originalUrl)), t.event(Wt.COMPLETE, e), t.offAll(), this._infoPool.push(t), this._statInfo.loaded++, this.event(Wt.PROGRESS, this.getProgress());
        }
        _addReTry(t) {
            this._resInfos[this._maxPriority - 1].push(t), this._next();
        }
        clearRes(t) {
            Ke.clearRes(t);
        }
        clearTextureRes(t) {
            Ke.clearTextureRes(t);
        }
        getRes(t) {
            return Ke.getRes(t);
        }
        cacheRes(t, e) {
            Ke.cacheRes(t, e);
        }
        setGroup(t, e) {
            Ke.setGroup(t, e);
        }
        clearResByGroup(t) {
            Ke.clearResByGroup(t);
        }
        static cacheRes(t, e) {
            Ke.cacheRes(t, e);
        }
        clearUnLoaded() {
            for (var t = 0; t < this._maxPriority; t++) {
                for (var e = this._resInfos[t], i = e.length - 1; i > -1; i--) {
                    var s = e[i];
                    s && (s.offAll(), this._infoPool.push(s));
                }
                e.length = 0;
            }
            this._loaderCount = 0, Qe._resMap = {};
        }
        cancelLoadByUrls(t) {
            if (t)
                for (var e = 0, i = t.length; e < i; e++) this.cancelLoadByUrl(t[e]);
        }
        cancelLoadByUrl(t) {
            for (var e = 0; e < this._maxPriority; e++)
                for (var i = this._resInfos[e], s = i.length - 1; s > -1; s--) {
                    var r = i[s];
                    r && r.url === t && (i[s] = null, r.offAll(), this._infoPool.push(r));
                }
            Qe._resMap[t] && delete Qe._resMap[t];
        }
        _loadAssets(t, e = null, i = null, s = null, r = 1, a = !0, n = null) {
            for (var h = t.length, o = 0, l = 0, _ = [], c = !0, u = 0; u < h; u++) {
                var d = t[u];
                "string" == typeof d && (d = {
                    url: d,
                    type: s,
                    size: 1,
                    priority: r
                }), d.size || (d.size = 1), d.progress = 0, l += d.size, _.push(d);
                var p = i ? v.create(null, loadProgress, [d], !1) : null,
                    f = e || i ? v.create(null, loadComplete, [d]) : null;
                this.load(d.url, f, p, d.type, d.priority || 1, a, d.group || n, !1, d.useWorkerLoader);
            }

            function loadComplete(t, i = null) {
                o++, t.progress = 1, i || (c = !1), o === h && e && e.runWith(c);
            }

            function loadProgress(t, e) {
                if (null != i) {
                    t.progress = e;
                    for (var s = 0, r = 0; r < _.length; r++) {
                        var a = _[r];
                        s += a.size * a.progress;
                    }
                    var n = s / l;
                    i.runWith(n);
                }
            }
            return this;
        }
        decodeBitmaps(t) {
            var e, s, r = t.length;
            for (s = i.Render._context, e = 0; e < r; e++) {
                var a, n;
                if (a = Ke.getAtlas(t[e])) this._decodeTexture(a[0], s);
                else(n = this.getRes(t[e])) && n instanceof Yt && this._decodeTexture(n, s);
            }
        }
        _decodeTexture(t, e) {
            var i = t.bitmap;
            if (t && i) {
                var s = i.source || i.image;
                if (s && s instanceof HTMLImageElement) {
                    e.drawImage(s, 0, 0, 1, 1);
                    e.getImageData(0, 0, 1, 1);
                }
            }
        }
    }
    Qe._resMap = {}, Qe.createMap = {
        atlas: [null, Ke.ATLAS]
    };
    class Ze extends T {}
    class $e {
        static __init__() {
            return $e._baseClass || ($e._baseClass = Je, Je.init()), $e.items = $e._baseClass.items, $e.support = $e._baseClass.support, $e.support;
        }
        static setItem(t, e) {
            $e._baseClass.setItem(t, e);
        }
        static getItem(t) {
            return $e._baseClass.getItem(t);
        }
        static setJSON(t, e) {
            $e._baseClass.setJSON(t, e);
        }
        static getJSON(t) {
            return $e._baseClass.getJSON(t);
        }
        static removeItem(t) {
            $e._baseClass.removeItem(t);
        }
        static clear() {
            $e._baseClass.clear();
        }
    }
    $e.support = !1;
    class Je {
        static init() {
            try {
                Je.support = !0, Je.items = window.localStorage, Je.setItem("laya", "1"), Je.removeItem("laya");
            } catch (t) {
                Je.support = !1;
            }
            Je.support || console.log("LocalStorage is not supprot or browser is private mode.");
        }
        static setItem(t, e) {
            try {
                Je.support && Je.items.setItem(t, e);
            } catch (t) {
                console.warn("set localStorage failed", t);
            }
        }
        static getItem(t) {
            return Je.support ? Je.items.getItem(t) : null;
        }
        static setJSON(t, e) {
            try {
                Je.support && Je.items.setItem(t, JSON.stringify(e));
            } catch (t) {
                console.warn("set localStorage failed", t);
            }
        }
        static getJSON(t) {
            return JSON.parse(Je.support ? Je.items.getItem(t) : null);
        }
        static removeItem(t) {
            Je.support && Je.items.removeItem(t);
        }
        static clear() {
            Je.support && Je.items.clear();
        }
    }
    Je.support = !1;
    class ti {
        load(t) {
            this._url = t;
            var e = t.split(".ttf")[0].split("/");
            this.fontName = e[e.length - 1], i.Render.isConchApp ? this._loadConch() : window.FontFace ? this._loadWithFontFace() : this._loadWithCSS();
        }
        _loadConch() {
            this._http = new He(), this._http.on(Wt.ERROR, this, this._onErr), this._http.on(Wt.COMPLETE, this, this._onHttpLoaded), this._http.send(this._url, null, "get", Ke.BUFFER);
        }
        _onHttpLoaded(t = null) {
            window.conchTextCanvas.setFontFaceFromBuffer(this.fontName, t), this._clearHttp(), this._complete();
        }
        _clearHttp() {
            this._http && (this._http.off(Wt.ERROR, this, this._onErr), this._http.off(Wt.COMPLETE, this, this._onHttpLoaded), this._http = null);
        }
        _onErr() {
            this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null);
        }
        _complete() {
            i.systemTimer.clear(this, this._complete), i.systemTimer.clear(this, this._checkComplete), this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div), this._div = null), this.complete && (this.complete.runWith(this), this.complete = null);
        }
        _checkComplete() {
            i.Browser.measureText(ti._testString, this._fontTxt).width != this._txtWidth && this._complete();
        }
        _loadWithFontFace() {
            var t = new window.FontFace(this.fontName, "url('" + this._url + "')");
            document.fonts.add(t);
            var e = this;
            t.loaded.then(function() {
                e._complete();
            }), t.load();
        }
        _createDiv() {
            this._div = jt.createElement("div"), this._div.innerHTML = "laya";
            var t = this._div.style;
            t.fontFamily = this.fontName, t.position = "absolute", t.left = "-100px", t.top = "-100px", document.body.appendChild(this._div);
        }
        _loadWithCSS() {
            var t = jt.createElement("style");
            t.type = "text/css", document.body.appendChild(t), t.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}", this._fontTxt = "40px " + this.fontName, this._txtWidth = jt.measureText(ti._testString, this._fontTxt).width;
            var e = this;
            t.onload = function() {
                i.systemTimer.once(1e4, e, this._complete);
            }, i.systemTimer.loop(20, this, this._checkComplete), this._createDiv();
        }
    }
    ti._testString = "LayaTTFFont";
    class ei {
        static linearNone(t, e, i, s) {
            return i * t / s + e;
        }
        static linearIn(t, e, i, s) {
            return i * t / s + e;
        }
        static linearInOut(t, e, i, s) {
            return i * t / s + e;
        }
        static linearOut(t, e, i, s) {
            return i * t / s + e;
        }
        static bounceIn(t, e, i, s) {
            return i - ei.bounceOut(s - t, 0, i, s) + e;
        }
        static bounceInOut(t, e, i, s) {
            return t < .5 * s ? .5 * ei.bounceIn(2 * t, 0, i, s) + e : .5 * ei.bounceOut(2 * t - s, 0, i, s) + .5 * i + e;
        }
        static bounceOut(t, e, i, s) {
            return (t /= s) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
        }
        static backIn(t, e, i, s, r = 1.70158) {
            return i * (t /= s) * t * ((r + 1) * t - r) + e;
        }
        static backInOut(t, e, i, s, r = 1.70158) {
            return (t /= .5 * s) < 1 ? .5 * i * (t * t * ((1 + (r *= 1.525)) * t - r)) + e : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e;
        }
        static backOut(t, e, i, s, r = 1.70158) {
            return i * ((t = t / s - 1) * t * ((r + 1) * t + r) + 1) + e;
        }
        static elasticIn(t, e, i, s, r = 0, a = 0) {
            var n;
            return 0 == t ? e : 1 == (t /= s) ? e + i : (a || (a = .3 * s), !r || i > 0 && r < i || i < 0 && r < -i ? (r = i, n = a / 4) : n = a / ei.PI2 * Math.asin(i / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - n) * ei.PI2 / a) + e);
        }
        static elasticInOut(t, e, i, s, r = 0, a = 0) {
            var n;
            return 0 == t ? e : 2 == (t /= .5 * s) ? e + i : (a || (a = s * (.3 * 1.5)), !r || i > 0 && r < i || i < 0 && r < -i ? (r = i, n = a / 4) : n = a / ei.PI2 * Math.asin(i / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - n) * ei.PI2 / a) * -.5 + e : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * s - n) * ei.PI2 / a) * .5 + i + e);
        }
        static elasticOut(t, e, i, s, r = 0, a = 0) {
            var n;
            return 0 == t ? e : 1 == (t /= s) ? e + i : (a || (a = .3 * s), !r || i > 0 && r < i || i < 0 && r < -i ? (r = i, n = a / 4) : n = a / ei.PI2 * Math.asin(i / r), r * Math.pow(2, -10 * t) * Math.sin((t * s - n) * ei.PI2 / a) + i + e);
        }
        static strongIn(t, e, i, s) {
            return i * (t /= s) * t * t * t * t + e;
        }
        static strongInOut(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
        }
        static strongOut(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t * t * t + 1) + e;
        }
        static sineInOut(t, e, i, s) {
            return .5 * -i * (Math.cos(Math.PI * t / s) - 1) + e;
        }
        static sineIn(t, e, i, s) {
            return -i * Math.cos(t / s * ei.HALF_PI) + i + e;
        }
        static sineOut(t, e, i, s) {
            return i * Math.sin(t / s * ei.HALF_PI) + e;
        }
        static quintIn(t, e, i, s) {
            return i * (t /= s) * t * t * t * t + e;
        }
        static quintInOut(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
        }
        static quintOut(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t * t * t + 1) + e;
        }
        static quartIn(t, e, i, s) {
            return i * (t /= s) * t * t * t + e;
        }
        static quartInOut(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e;
        }
        static quartOut(t, e, i, s) {
            return -i * ((t = t / s - 1) * t * t * t - 1) + e;
        }
        static cubicIn(t, e, i, s) {
            return i * (t /= s) * t * t + e;
        }
        static cubicInOut(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e;
        }
        static cubicOut(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t + 1) + e;
        }
        static quadIn(t, e, i, s) {
            return i * (t /= s) * t + e;
        }
        static quadInOut(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e;
        }
        static quadOut(t, e, i, s) {
            return -i * (t /= s) * (t - 2) + e;
        }
        static expoIn(t, e, i, s) {
            return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e - .001 * i;
        }
        static expoInOut(t, e, i, s) {
            return 0 == t ? e : t == s ? e + i : (t /= .5 * s) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (2 - Math.pow(2, -10 * --t)) + e;
        }
        static expoOut(t, e, i, s) {
            return t == s ? e + i : i * (1 - Math.pow(2, -10 * t / s)) + e;
        }
        static circIn(t, e, i, s) {
            return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e;
        }
        static circInOut(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
        }
        static circOut(t, e, i, s) {
            return i * Math.sqrt(1 - (t = t / s - 1) * t) + e;
        }
    }
    ei.HALF_PI = .5 * Math.PI, ei.PI2 = 2 * Math.PI;
    class ii {
        constructor() {
            this.gid = 0, this.repeat = 1, this._count = 0;
        }
        static to(t, e, i, r = null, a = null, n = 0, h = !1, o = !0) {
            return s.getItemByClass("tween", ii)._create(t, e, i, r, a, n, h, !0, o, !0);
        }
        static from(t, e, i, r = null, a = null, n = 0, h = !1, o = !0) {
            return s.getItemByClass("tween", ii)._create(t, e, i, r, a, n, h, !1, o, !0);
        }
        to(t, e, i, s = null, r = null, a = 0, n = !1) {
            return this._create(t, e, i, s, r, a, n, !0, !1, !0);
        }
        from(t, e, i, s = null, r = null, a = 0, n = !1) {
            return this._create(t, e, i, s, r, a, n, !1, !1, !0);
        }
        _create(t, e, s, r, a, n, h, o, l, _) {
            if (!t) throw new Error("Tween:target is null");
            this._target = t, this._duration = s, this._ease = r || e.ease || ii.easeNone, this._complete = a || e.complete, this._delay = n, this._props = [], this._usedTimer = 0, this._startTimer = jt.now(), this._usedPool = l, this._delayParam = null, this.update = e.update;
            var c = t.$_GID || (t.$_GID = Y.getGID());
            return ii.tweenMap[c] ? (h && ii.clearTween(t), ii.tweenMap[c].push(this)) : ii.tweenMap[c] = [this], _ ? n <= 0 ? this.firstStart(t, e, o) : (this._delayParam = [t, e, o], i.timer.once(n, this, this.firstStart, this._delayParam)) : this._initProps(t, e, o), this;
        }
        firstStart(t, e, i) {
            this._delayParam = null, t.destroyed ? this.clear() : (this._initProps(t, e, i), this._beginLoop());
        }
        _initProps(t, e, i) {
            for (var s in e)
                if ("number" == typeof t[s]) {
                    var r = i ? t[s] : e[s],
                        a = i ? e[s] : t[s];
                    this._props.push([s, r, a - r]), i || (t[s] = r);
                }
        }
        _beginLoop() {
            i.timer.frameLoop(1, this, this._doEase);
        }
        _doEase() {
            this._updateEase(jt.now());
        }
        _updateEase(t) {
            var e = this._target;
            if (e) {
                if (e.destroyed) return ii.clearTween(e);
                var i = this._usedTimer = t - this._startTimer - this._delay;
                if (!(i < 0)) {
                    if (i >= this._duration) return this.complete();
                    for (var s = i > 0 ? this._ease(i, 0, 1, this._duration) : 0, r = this._props, a = 0, n = r.length; a < n; a++) {
                        var h = r[a];
                        e[h[0]] = h[1] + s * h[2];
                    }
                    this.update && this.update.run();
                }
            }
        }
        set progress(t) {
            var e = t * this._duration;
            this._startTimer = jt.now() - this._delay - e;
        }
        complete() {
            if (this._target) {
                i.timer.runTimer(this, this.firstStart);
                for (var t = this._target, e = this._props, s = this._complete, r = 0, a = e.length; r < a; r++) {
                    var n = e[r];
                    t[n[0]] = n[1] + n[2];
                }
                this.update && this.update.run(), this._count++, 0 != this.repeat && this._count >= this.repeat ? (this.clear(), s && s.run()) : this.restart();
            }
        }
        pause() {
            var t;
            i.timer.clear(this, this._beginLoop), i.timer.clear(this, this._doEase), i.timer.clear(this, this.firstStart), (t = jt.now() - this._startTimer - this._delay) < 0 && (this._usedTimer = t);
        }
        setStartTime(t) {
            this._startTimer = t;
        }
        static clearAll(t) {
            if (t && t.$_GID) {
                var e = ii.tweenMap[t.$_GID];
                if (e) {
                    for (var i = 0, s = e.length; i < s; i++) e[i]._clear();
                    e.length = 0;
                }
            }
        }
        static clear(t) {
            t.clear();
        }
        static clearTween(t) {
            ii.clearAll(t);
        }
        clear() {
            this._target && (this._remove(), this._clear());
        }
        _clear() {
            this.pause(), i.timer.clear(this, this.firstStart), this._complete = null, this._target = null, this._ease = null, this._props = null, this._delayParam = null, this._usedPool && (this.update = null, s.recover("tween", this));
        }
        recover() {
            this._usedPool = !0, this._clear();
        }
        _remove() {
            var t = ii.tweenMap[this._target.$_GID];
            if (t)
                for (var e = 0, i = t.length; e < i; e++)
                    if (t[e] === this) {
                        t.splice(e, 1);
                        break;
                    }
        }
        restart() {
            if (this.pause(), this._usedTimer = 0, this._startTimer = jt.now(), this._delayParam) i.timer.once(this._delay, this, this.firstStart, this._delayParam);
            else {
                for (var t = this._props, e = 0, s = t.length; e < s; e++) {
                    var r = t[e];
                    this._target[r[0]] = r[1];
                }
                i.timer.once(this._delay, this, this._beginLoop);
            }
        }
        resume() {
            this._usedTimer >= this._duration || (this._startTimer = jt.now() - this._usedTimer - this._delay, this._delayParam ? this._usedTimer < 0 ? i.timer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop());
        }
        static easeNone(t, e, i, s) {
            return i * t / s + e;
        }
    }
    ii.tweenMap = [];
    class si {
        constructor() {
            this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0;
        }
        start(t, e, s, r, a, n, h, o = .92) {
            this.clearTimer(), this.target = t, this.area = e, this.hasInertia = s, this.elasticDistance = e ? r : 0, this.elasticBackTime = a, this.data = n, this._disableMouseEvent = h, this.ratio = o, this._parent = t.parent, this._clickOnly = !0, this._dragging = !0, this._elasticRateX = this._elasticRateY = 1, this._lastX = this._parent.mouseX, this._lastY = this._parent.mouseY, i.stage.on(Wt.MOUSE_UP, this, this.onStageMouseUp), i.stage.on(Wt.MOUSE_OUT, this, this.onStageMouseUp), i.systemTimer.frameLoop(1, this, this.loop);
        }
        clearTimer() {
            i.systemTimer.clear(this, this.loop), i.systemTimer.clear(this, this.tweenMove), this._tween && (this._tween.recover(), this._tween = null);
        }
        stop() {
            this._dragging && (De.instance.disableMouseEvent = !1, i.stage.off(Wt.MOUSE_UP, this, this.onStageMouseUp), i.stage.off(Wt.MOUSE_OUT, this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(), this.clear());
        }
        loop() {
            var t = this._parent.getMousePoint(),
                e = t.x,
                s = t.y,
                r = e - this._lastX,
                a = s - this._lastY;
            if (this._clickOnly) {
                if (!(Math.abs(r * i.stage._canvasTransform.getScaleX()) > 1 || Math.abs(a * i.stage._canvasTransform.getScaleY()) > 1)) return;
                this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, this.target.event(Wt.DRAG_START, this.data), De.instance.disableMouseEvent = this._disableMouseEvent;
            } else this._offsets.push(r, a);
            0 === r && 0 === a || (this._lastX = e, this._lastY = s, this.target.x += r * this._elasticRateX, this.target.y += a * this._elasticRateY, this.area && this.checkArea(), this.target.event(Wt.DRAG_MOVE, this.data));
        }
        checkArea() {
            if (this.elasticDistance <= 0) this.backToArea();
            else {
                if (this.target._x < this.area.x) var t = this.area.x - this.target._x;
                else t = this.target._x > this.area.x + this.area.width ? this.target._x - this.area.x - this.area.width : 0;
                if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance), this.target._y < this.area.y) var e = this.area.y - this.target.y;
                else e = this.target._y > this.area.y + this.area.height ? this.target._y - this.area.y - this.area.height : 0;
                this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance);
            }
        }
        backToArea() {
            this.target.x = Math.min(Math.max(this.target._x, this.area.x), this.area.x + this.area.width), this.target.y = Math.min(Math.max(this.target._y, this.area.y), this.area.y + this.area.height);
        }
        onStageMouseUp(t) {
            if (De.instance.disableMouseEvent = !1, i.stage.off(Wt.MOUSE_UP, this, this.onStageMouseUp), i.stage.off(Wt.MOUSE_OUT, this, this.onStageMouseUp), i.systemTimer.clear(this, this.loop), !this._clickOnly && this.target)
                if (this.hasInertia) {
                    this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY), this._offsetX = this._offsetY = 0;
                    for (var e = this._offsets.length, s = Math.min(e, 6), r = this._offsets.length - s, a = e - 1; a > r; a--) this._offsetY += this._offsets[a--], this._offsetX += this._offsets[a];
                    this._offsetX = this._offsetX / s * 2, this._offsetY = this._offsetY / s * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = this._offsetX > 0 ? this.maxOffset : -this.maxOffset), Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = this._offsetY > 0 ? this.maxOffset : -this.maxOffset), i.systemTimer.frameLoop(1, this, this.tweenMove);
                } else this.elasticDistance > 0 ? this.checkElastic() : this.clear();
        }
        checkElastic() {
            var t = NaN,
                e = NaN;
            if (this.target.x < this.area.x ? t = this.area.x : this.target._x > this.area.x + this.area.width && (t = this.area.x + this.area.width), this.target.y < this.area.y ? e = this.area.y : this.target._y > this.area.y + this.area.height && (e = this.area.y + this.area.height), isNaN(t) && isNaN(e)) this.clear();
            else {
                var i = {};
                isNaN(t) || (i.x = t), isNaN(e) || (i.y = e), this._tween = ii.to(this.target, i, this.elasticBackTime, ei.sineOut, v.create(this, this.clear), 0, !1, !1);
            }
        }
        tweenMove() {
            this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY, this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(), this.target.event(Wt.DRAG_MOVE, this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (i.systemTimer.clear(this, this.tweenMove), this.elasticDistance > 0 ? this.checkElastic() : this.clear());
        }
        clear() {
            if (this.target) {
                this.clearTimer();
                var t = this.target;
                this.target = null, this._parent = null, t.event(Wt.DRAG_END, this.data);
            }
        }
    }
    class ri {
        constructor() {
            this._id = Y.getGID(), this._resetComp();
        }
        get id() {
            return this._id;
        }
        get enabled() {
            return this._enabled;
        }
        set enabled(t) {
            this._enabled != t && (this._enabled = t, this.owner && (t ? this.owner.activeInHierarchy && this._onEnable() : this.owner.activeInHierarchy && this._onDisable()));
        }
        get isSingleton() {
            return !0;
        }
        get destroyed() {
            return this._destroyed;
        }
        _isScript() {
            return !1;
        }
        _resetComp() {
            this._indexInList = -1, this._enabled = !0, this._awaked = !1, this.owner = null;
        }
        _getIndexInList() {
            return this._indexInList;
        }
        _setIndexInList(t) {
            this._indexInList = t;
        }
        _onAdded() {}
        _onAwake() {}
        _onEnable() {}
        _onDisable() {}
        _onDestroy() {}
        onReset() {}
        _parse(t) {}
        _cloneTo(t) {}
        _setActive(t) {
            t ? (this._awaked || (this._awaked = !0, this._onAwake()), this._enabled && this._onEnable()) : this._enabled && this._onDisable();
        }
        destroy() {
            this.owner && this.owner._destroyComponent(this);
        }
        _destroy() {
            this.owner.activeInHierarchy && this._enabled && (this._setActive(!1), this._isScript() && this.onDisable()), this._onDestroy(), this._destroyed = !0, this.onReset !== ri.prototype.onReset ? (this.onReset(), this._resetComp(), s.recoverByClass(this)) : this._resetComp();
        }
    }
    class ai extends we {
        constructor() {
            super(), this.wrapMode = 0, this._interval = e.animationInterval, this._isReverse = !1, this._frameRateChanged = !1, this._setBitUp(me.DISPLAY);
        }
        play(t = 0, e = !0, i = "") {
            this._isPlaying = !0, this._actionName = i, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.loop = e, this._isReverse = this.wrapMode === ai.WRAP_REVERSE, 0 == this.index && this._isReverse && (this.index = this.count - 1), this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0);
        }
        get interval() {
            return this._interval;
        }
        set interval(t) {
            this._interval != t && (this._frameRateChanged = !0, this._interval = t, this._isPlaying && t > 0 && this.timerLoop(t, this, this._frameLoop, null, !0, !0));
        }
        _getFrameByLabel(t) {
            for (var e = 0; e < this._count; e++) {
                var i = this._labels[e];
                if (i && i.indexOf(t) > -1) return e;
            }
            return 0;
        }
        _frameLoop() {
            if (this._isReverse) {
                if (this._index--, this._index < 0) {
                    if (!this.loop) return this._index = 0, this.stop(), void this.event(Wt.COMPLETE);
                    this.wrapMode == ai.WRAP_PINGPONG ? (this._index = this._count > 0 ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1, this.event(Wt.COMPLETE);
                }
            } else if (this._index++, this._index >= this._count) {
                if (!this.loop) return this._index--, this.stop(), void this.event(Wt.COMPLETE);
                this.wrapMode == ai.WRAP_PINGPONG ? (this._index = this._count - 2 >= 0 ? this._count - 2 : 0, this._isReverse = !0) : this._index = 0, this.event(Wt.COMPLETE);
            }
            this.index = this._index;
        }
        _setControlNode(t) {
            this._controlNode && (this._controlNode.off(Wt.DISPLAY, this, this._resumePlay), this._controlNode.off(Wt.UNDISPLAY, this, this._resumePlay)), this._controlNode = t, t && t != this && (t.on(Wt.DISPLAY, this, this._resumePlay), t.on(Wt.UNDISPLAY, this, this._resumePlay));
        }
        _setDisplay(t) {
            super._setDisplay(t), this._resumePlay();
        }
        _resumePlay() {
            this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop));
        }
        stop() {
            this._isPlaying = !1, this.clearTimer(this, this._frameLoop);
        }
        get isPlaying() {
            return this._isPlaying;
        }
        addLabel(t, e) {
            this._labels || (this._labels = {}), this._labels[e] || (this._labels[e] = []), this._labels[e].push(t);
        }
        removeLabel(t) {
            if (t) {
                if (this._labels)
                    for (var e in this._labels) this._removeLabelFromList(this._labels[e], t);
            } else this._labels = null;
        }
        _removeLabelFromList(t, e) {
            if (t)
                for (var i = t.length - 1; i >= 0; i--) t[i] == e && t.splice(i, 1);
        }
        gotoAndStop(t) {
            this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.stop();
        }
        get index() {
            return this._index;
        }
        set index(t) {
            if (this._index = t, this._displayToIndex(t), this._labels && this._labels[t])
                for (var e = this._labels[t], i = 0, s = e.length; i < s; i++) this.event(Wt.LABEL, e[i]);
        }
        _displayToIndex(t) {}
        get count() {
            return this._count;
        }
        clear() {
            return this.stop(), this._labels = null, this;
        }
    }
    ai.WRAP_POSITIVE = 0, ai.WRAP_REVERSE = 1, ai.WRAP_PINGPONG = 2, Te.regClass("laya.display.AnimationBase", ai), Te.regClass("Laya.AnimationBase", ai);
    class ni {
        static subtractVector3(t, e, i) {
            i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2];
        }
        static lerp(t, e, i) {
            return t * (1 - i) + e * i;
        }
        static scaleVector3(t, e, i) {
            i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e;
        }
        static lerpVector3(t, e, i, s) {
            var r = t[0],
                a = t[1],
                n = t[2];
            s[0] = r + i * (e[0] - r), s[1] = a + i * (e[1] - a), s[2] = n + i * (e[2] - n);
        }
        static lerpVector4(t, e, i, s) {
            var r = t[0],
                a = t[1],
                n = t[2],
                h = t[3];
            s[0] = r + i * (e[0] - r), s[1] = a + i * (e[1] - a), s[2] = n + i * (e[2] - n), s[3] = h + i * (e[3] - h);
        }
        static slerpQuaternionArray(t, e, i, s, r, a, n) {
            var h, o, l, _, c, u = t[e + 0],
                d = t[e + 1],
                p = t[e + 2],
                f = t[e + 3],
                g = i[s + 0],
                m = i[s + 1],
                v = i[s + 2],
                T = i[s + 3];
            return (o = u * g + d * m + p * v + f * T) < 0 && (o = -o, g = -g, m = -m, v = -v, T = -T), 1 - o > 1e-6 ? (h = Math.acos(o), l = Math.sin(h), _ = Math.sin((1 - r) * h) / l, c = Math.sin(r * h) / l) : (_ = 1 - r, c = r), a[n + 0] = _ * u + c * g, a[n + 1] = _ * d + c * m, a[n + 2] = _ * p + c * v, a[n + 3] = _ * f + c * T, a;
        }
        static getRotation(t, e, i, s) {
            return Math.atan2(s - e, i - t) / Math.PI * 180;
        }
        static sortBigFirst(t, e) {
            return t == e ? 0 : e > t ? 1 : -1;
        }
        static sortSmallFirst(t, e) {
            return t == e ? 0 : e > t ? -1 : 1;
        }
        static sortNumBigFirst(t, e) {
            return parseFloat(e) - parseFloat(t);
        }
        static sortNumSmallFirst(t, e) {
            return parseFloat(t) - parseFloat(e);
        }
        static sortByKey(t, e = !1, i = !0) {
            var s;
            return s = e ? i ? ni.sortNumBigFirst : ni.sortBigFirst : i ? ni.sortNumSmallFirst : ni.sortSmallFirst,
                function(e, i) {
                    return s(e[t], i[t]);
                };
        }
    }
    class hi extends ai {
        constructor() {
            super(), null === hi._sortIndexFun && (hi._sortIndexFun = ni.sortByKey("index", !1, !0));
        }
        _setUp(t, e) {
            this._targetDic = t, this._animationData = e, this.interval = 1e3 / e.frameRate, e.parsed ? (this._count = e.count, this._labels = e.labels, this._usedFrames = e.animationNewFrames) : (this._usedFrames = [], this._calculateDatas(), e.parsed = !0, e.labels = this._labels, e.count = this._count, e.animationNewFrames = this._usedFrames);
        }
        clear() {
            return super.clear(), this._targetDic = null, this._animationData = null, this;
        }
        _displayToIndex(t) {
            if (this._animationData) {
                t < 0 && (t = 0), t > this._count && (t = this._count);
                var e, i = this._animationData.nodes,
                    s = i.length;
                for (e = 0; e < s; e++) this._displayNodeToFrame(i[e], t);
            }
        }
        _displayNodeToFrame(t, e, i = null) {
            i || (i = this._targetDic);
            var s = i[t.target];
            if (s) {
                var r, a, n, h, o = t.frames,
                    l = t.keys,
                    _ = l.length;
                for (h = 0; h < _; h++) n = (a = o[r = l[h]]).length > e ? a[e] : a[a.length - 1], s[r] = n;
                var c, u = t.funkeys;
                if (0 != (_ = u.length))
                    for (h = 0; h < _; h++) void 0 !== (c = o[r = u[h]])[e] && s[r] && s[r].apply(s, c[e]);
            }
        }
        _calculateDatas() {
            if (this._animationData) {
                var t, e, i = this._animationData.nodes,
                    s = i.length;
                for (this._count = 0, t = 0; t < s; t++) e = i[t], this._calculateKeyFrames(e);
                this._count += 1;
            }
        }
        _calculateKeyFrames(t) {
            var e, i, s = t.keyframes,
                r = t.target;
            for (e in t.frames || (t.frames = {}), t.keys ? t.keys.length = 0 : t.keys = [], t.funkeys ? t.funkeys.length = 0 : t.funkeys = [], t.initValues || (t.initValues = {}), s) {
                var a = -1 != e.indexOf("()");
                if (i = s[e], a && (e = e.substr(0, e.length - 2)), t.frames[e] || (t.frames[e] = []), a) {
                    t.funkeys.push(e);
                    for (var n = t.frames[e], h = 0; h < i.length; h++) {
                        var o = i[h];
                        n[o.index] = o.value, o.index > this._count && (this._count = o.index);
                    }
                } else this._targetDic && this._targetDic[r] && (t.initValues[e] = this._targetDic[r][e]), i.sort(hi._sortIndexFun), t.keys.push(e), this._calculateNodePropFrames(i, t.frames[e], e, r);
            }
        }
        resetNodes() {
            if (this._targetDic && this._animationData) {
                var t, e, i, s = this._animationData.nodes,
                    r = s.length;
                for (t = 0; t < r; t++)
                    if (i = (e = s[t]).initValues) {
                        var a, n = this._targetDic[e.target];
                        if (n)
                            for (a in i) n[a] = i[a];
                    }
            }
        }
        _calculateNodePropFrames(t, e, i, s) {
            var r, a = t.length - 1;
            for (e.length = t[a].index + 1, r = 0; r < a; r++) this._dealKeyFrame(t[r]), this._calculateFrameValues(t[r], t[r + 1], e);
            0 == a && (e[0] = t[0].value, this._usedFrames && (this._usedFrames[t[0].index] = !0)), this._dealKeyFrame(t[r]);
        }
        _dealKeyFrame(t) {
            t.label && "" != t.label && this.addLabel(t.label, t.index);
        }
        _calculateFrameValues(t, e, i) {
            var s, r, a = t.index,
                n = e.index,
                h = t.value,
                o = e.value - t.value,
                l = n - a,
                _ = this._usedFrames;
            if (n > this._count && (this._count = n), t.tween)
                for (null == (r = ei[t.tweenMethod]) && (r = ei.linearNone), s = a; s < n; s++) i[s] = r(s - a, h, o, l), _ && (_[s] = !0);
            else
                for (s = a; s < n; s++) i[s] = h;
            _ && (_[t.index] = !0, _[e.index] = !0), i[e.index] = e.value;
        }
    }
    Te.regClass("laya.display.FrameAnimation", hi), Te.regClass("Laya.FrameAnimation", hi);
    var oi = !!WeakMap;
    class li {
        constructor() {
            this._obj = li.supportWeakMap ? new jt.window.WeakMap() : {}, li.supportWeakMap || li._maps.push(this);
        }
        static __init__() {
            li.I = new li(), li.supportWeakMap || i.systemTimer.loop(li.delInterval, null, li.clearCache);
        }
        static clearCache() {
            for (var t = 0, e = li._maps.length; t < e; t++) {
                li._maps[t]._obj = {};
            }
        }
        set(t, e) {
            if (null != t)
                if (li.supportWeakMap) {
                    var i = t;
                    "string" != typeof t && "number" != typeof t || (i = li._keys[t]) || (i = li._keys[t] = {
                        k: t
                    }), this._obj.set(i, e);
                } else "string" == typeof t || "number" == typeof t ? this._obj[t] = e : (t.$_GID || (t.$_GID = Y.getGID()), this._obj[t.$_GID] = e);
        }
        get(t) {
            if (null == t) return null;
            if (li.supportWeakMap) {
                var e = "string" == typeof t || "number" == typeof t ? li._keys[t] : t;
                return e ? this._obj.get(e) : null;
            }
            return "string" == typeof t || "number" == typeof t ? this._obj[t] : this._obj[t.$_GID];
        }
        del(t) {
            if (null != t)
                if (li.supportWeakMap) {
                    var e = "string" == typeof t || "number" == typeof t ? li._keys[t] : t;
                    if (!e) return;
                    this._obj.delete(e);
                } else "string" == typeof t || "number" == typeof t ? delete this._obj[t] : delete this._obj[this._obj.$_GID];
        }
        has(t) {
            if (null == t) return !1;
            if (li.supportWeakMap) {
                var e = "string" == typeof t || "number" == typeof t ? li._keys[t] : t;
                return this._obj.has(e);
            }
            return "string" == typeof t || "number" == typeof t ? null != this._obj[t] : null != this._obj[this._obj.$_GID];
        }
    }
    li.supportWeakMap = oi, li.delInterval = 6e5, li._keys = {}, li._maps = [];
    class _i {
        static __init() {
            _i._funMap = new li();
        }
        static getBindFun(t) {
            var e = _i._funMap.get(t);
            if (null == e) {
                var i = '"' + t + '"',
                    s = "(function(data){if(data==null)return;with(data){try{\nreturn " + (i = i.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                e = window.Laya._runScript(s), _i._funMap.set(t, e);
            }
            return e;
        }
        static createByData(t, e) {
            var i = ui.create();
            if ((t = _i.createComp(e, t, t, null, i))._setBit(me.NOT_READY, !0), "_idMap" in t && (t._idMap = i._idMap), e.animations) {
                var s, r, a, n = [],
                    h = e.animations,
                    o = h.length;
                for (s = 0; s < o; s++) {
                    switch (r = new hi(), a = h[s], r._setUp(i._idMap, a), t[a.name] = r, r._setControlNode(t), a.action) {
                        case 1:
                            r.play(0, !1);
                            break;
                        case 2:
                            r.play(0, !0);
                    }
                    n.push(r);
                }
                t._aniList = n;
            }
            return "Scene" === t._$componentType && t._width > 0 && null == e.props.hitTestPrior && !t.mouseThrough && (t.hitTestPrior = !0), i.beginLoad(t), t;
        }
        static createInitTool() {
            return ui.create();
        }
        static createComp(t, e = null, s = null, r = null, a = null) {
            if ("Scene3D" == t.type || "Sprite3D" == t.type) {
                var n = [],
                    h = i.Laya.Utils3D._createSceneByJsonForMaker(t, n, a);
                return "Sprite3D" == t.type ? i.Laya.StaticBatchManager.combine(h, n) : i.Laya.StaticBatchManager.combine(null, n), h;
            }
            if (!(e = e || _i.getCompInstance(t))) return t.props && t.props.runtime ? console.warn("runtime not found:" + t.props.runtime) : console.warn("can not create:" + t.type), null;
            var o = t.child;
            if (o)
                for (var l = "List" == e._$componentType, _ = 0, c = o.length; _ < c; _++) {
                    var u = o[_];
                    if ("itemRender" in e && ("render" == u.props.name || "render" === u.props.renderType)) e.itemRender = u;
                    else if ("Graphic" == u.type) i.ClassUtils._addGraphicsToSprite(u, e);
                    else if (i.ClassUtils._isDrawType(u.type)) i.ClassUtils._addGraphicToSprite(u, e, !0);
                    else {
                        if (l) {
                            var d = [],
                                p = _i.createComp(u, null, s, d, a);
                            d.length && (p._$bindData = d);
                        } else p = _i.createComp(u, null, s, r, a);
                        "Script" == u.type ? p instanceof ri ? e._addComponentInstance(p) : "owner" in p ? p.owner = e : "target" in p && (p.target = e) : "mask" == u.props.renderType || "mask" == u.props.name ? e.mask = p : p instanceof xe && e.addChild(p);
                    }
                }
            var f = t.props;
            for (var g in f) {
                var m = f[g];
                "string" == typeof m && (m.indexOf("@node:") >= 0 || m.indexOf("@Prefab:") >= 0) ? a && a.addNodeRef(e, g, m) : _i.setCompValue(e, g, m, s, r);
            }
            return e._afterInited && e._afterInited(), t.compId && a && a._idMap && (a._idMap[t.compId] = e), e;
        }
        static setCompValue(t, e, s, r = null, a = null) {
            if ("string" == typeof s && s.indexOf("${") > -1) {
                if (_i._sheet || (_i._sheet = i.ClassUtils.getClass("laya.data.Table")), !_i._sheet) return void console.warn("Can not find class Sheet");
                if (a) a.push(t, e, s);
                else if (r) {
                    -1 == s.indexOf("].") && (s = s.replace(".", "[0]."));
                    var n, h, o = new ci(t, e, s);
                    o.exe(r);
                    for (var l = s.replace(/\[.*?\]\./g, "."); null != (n = _i._parseWatchData.exec(l));) {
                        for (var _ = n[1]; null != (h = _i._parseKeyWord.exec(_));) {
                            var c = h[0],
                                u = r._watchMap[c] || (r._watchMap[c] = []);
                            u.push(o), _i._sheet.I.notifer.on(c, r, r.changeData, [c]);
                        }
                        (u = r._watchMap[_] || (r._watchMap[_] = [])).push(o), _i._sheet.I.notifer.on(_, r, r.changeData, [_]);
                    }
                }
            } else "var" === e && r ? r[s] = t : t[e] = "true" === s || "false" !== s && s;
        }
        static getCompInstance(t) {
            if ("UIView" == t.type && t.props && t.props.pageData) return _i.createByData(null, t.props.pageData);
            var e = t.props && t.props.runtime || t.type,
                r = i.ClassUtils.getClass(e);
            if (!r) throw "Can not find class " + e;
            if ("Script" === t.type && r.prototype._doAwake) {
                var a = s.createByClass(r);
                return a._destroyed = !1, a;
            }
            return t.props && "renderType" in t.props && "instance" == t.props.renderType ? (r.instance || (r.instance = new r()), r.instance) : new r();
        }
    }
    _i._parseWatchData = /\${(.*?)}/g, _i._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;
    class ci {
        constructor(t, e, i) {
            this.comp = t, this.prop = e, this.value = i;
        }
        exe(t) {
            var e = _i.getBindFun(this.value);
            this.comp[this.prop] = e.call(this, t);
        }
    }
    class ui {
        reset() {
            this._nodeRefList = null, this._initList = null, this._idMap = null, this._loadList = null, this._scene = null;
        }
        recover() {
            this.reset(), s.recover("InitTool", this);
        }
        static create() {
            var t = s.getItemByClass("InitTool", ui);
            return t._idMap = [], t;
        }
        addLoadRes(t, e = null) {
            this._loadList || (this._loadList = []), e ? this._loadList.push({
                url: t,
                type: e
            }) : this._loadList.push(t);
        }
        addNodeRef(t, e, i) {
            this._nodeRefList || (this._nodeRefList = []), this._nodeRefList.push([t, e, i]), i.indexOf("@Prefab:") >= 0 && this.addLoadRes(i.replace("@Prefab:", ""), Ke.PREFAB);
        }
        setNodeRef() {
            if (this._nodeRefList)
                if (this._idMap) {
                    var t, e, i;
                    for (e = this._nodeRefList.length, t = 0; t < e; t++)(i = this._nodeRefList[t])[0][i[1]] = this.getReferData(i[2]);
                    this._nodeRefList = null;
                } else this._nodeRefList = null;
        }
        getReferData(t) {
            if (t.indexOf("@Prefab:") >= 0) return Ke.getRes(t.replace("@Prefab:", ""));
            if (t.indexOf("@arr:") >= 0) {
                var e, i, s, r;
                for (s = (e = (t = t.replace("@arr:", "")).split(",")).length, i = 0; i < s; i++) r = e[i], e[i] = r ? this._idMap[r.replace("@node:", "")] : null;
                return e;
            }
            return this._idMap[t.replace("@node:", "")];
        }
        addInitItem(t) {
            this._initList || (this._initList = []), this._initList.push(t);
        }
        doInits() {
            this._initList && (this._initList = null);
        }
        finish() {
            this.setNodeRef(), this.doInits(), this._scene._setBit(me.NOT_READY, !1), this._scene.parent && this._scene.parent.activeInHierarchy && this._scene.active && this._scene._processActive(), this._scene.event("onViewCreated"), this.recover();
        }
        beginLoad(t) {
            this._scene = t, !this._loadList || this._loadList.length < 1 ? this.finish() : i.loader.load(this._loadList, v.create(this, this.finish));
        }
    }
    class di {
        show(t = 0, e = 0) {}
        enable() {}
        hide() {}
        set_onclick(t) {}
        isCanvasRender() {
            return !0;
        }
        renderNotCanvas(t, e, i) {}
    }
    class pi extends di {
        constructor() {
            super(...arguments), this._show = !1, this._useCanvas = !1, this._height = 100, this._view = [];
        }
        show(t = 0, e = 0) {
            jt.onMiniGame || i.Render.isConchApp || jt.onBDMiniGame || jt.onKGMiniGame || jt.onQGMiniGame || jt.onQQMiniGame || (this._useCanvas = !0), this._show = !0, O._fpsData.length = 60, this._view[0] = {
                title: "FPS(Canvas)",
                value: "_fpsStr",
                color: "yellow",
                units: "int"
            }, this._view[1] = {
                title: "Sprite",
                value: "_spriteStr",
                color: "white",
                units: "int"
            }, this._view[2] = {
                title: "RenderBatches",
                value: "renderBatches",
                color: "white",
                units: "int"
            }, this._view[3] = {
                title: "SavedRenderBatches",
                value: "savedRenderBatches",
                color: "white",
                units: "int"
            }, this._view[4] = {
                title: "CPUMemory",
                value: "cpuMemory",
                color: "yellow",
                units: "M"
            }, this._view[5] = {
                title: "GPUMemory",
                value: "gpuMemory",
                color: "yellow",
                units: "M"
            }, this._view[6] = {
                title: "Shader",
                value: "shaderCall",
                color: "white",
                units: "int"
            }, ee.is3DMode ? (this._view[0].title = "FPS(3D)", this._view[7] = {
                title: "TriFaces",
                value: "trianglesFaces",
                color: "white",
                units: "int"
            }, this._view[8] = {
                title: "FrustumCulling",
                value: "frustumCulling",
                color: "white",
                units: "int"
            }, this._view[9] = {
                title: "OctreeNodeCulling",
                value: "octreeNodeCulling",
                color: "white",
                units: "int"
            }) : (this._view[0].title = "FPS(WebGL)", this._view[7] = {
                title: "Canvas",
                value: "_canvasStr",
                color: "white",
                units: "int"
            }), this._useCanvas ? this.createUIPre(t, e) : this.createUI(t, e), this.enable();
        }
        createUIPre(t, e) {
            var i = jt.pixelRatio;
            this._width = 180 * i, this._vx = 120 * i, this._height = i * (12 * this._view.length + 3 * i) + 4, pi._fontSize = 12 * i;
            for (var s = 0; s < this._view.length; s++) this._view[s].x = 4, this._view[s].y = s * pi._fontSize + 2 * i;
            this._canvas || (this._canvas = new Ee(!0), this._canvas.size(this._width, this._height), this._ctx = this._canvas.getContext("2d"), this._ctx.textBaseline = "top", this._ctx.font = pi._fontSize + "px Arial", this._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + t + "px;top:" + e + "px;width:" + this._width / i + "px;height:" + this._height / i + "px;"), jt.onKGMiniGame || jt.container.appendChild(this._canvas.source), this._first = !0, this.loop(), this._first = !1;
        }
        createUI(t, e) {
            var i = this._sp,
                s = jt.pixelRatio;
            i || (i = new we(), this._leftText = new Se(), this._leftText.pos(5, 5), this._leftText.color = "#ffffff", i.addChild(this._leftText), this._txt = new Se(), this._txt.pos(80 * s, 5), this._txt.color = "#ffffff", i.addChild(this._txt), this._sp = i), i.pos(t, e);
            for (var r = "", a = 0; a < this._view.length; a++) {
                r += this._view[a].title + "\n";
            }
            this._leftText.text = r;
            var n = 138 * s,
                h = s * (12 * this._view.length + 3 * s) + 4;
            this._txt.fontSize = pi._fontSize * s, this._leftText.fontSize = pi._fontSize * s, i.size(n, h), i.graphics.clear(), i.graphics.alpha(.5), i.graphics.drawRect(0, 0, n, h, "#999999"), i.graphics.alpha(2), this.loop();
        }
        enable() {
            i.systemTimer.frameLoop(1, this, this.loop);
        }
        hide() {
            this._show = !1, i.systemTimer.clear(this, this.loop), this._canvas && jt.removeElement(this._canvas.source);
        }
        set_onclick(t) {
            this._sp && this._sp.on("click", this._sp, t), this._canvas && (this._canvas.source.onclick = t, this._canvas.source.style.pointerEvents = "");
        }
        loop() {
            O._count++;
            var t = jt.now();
            if (!(t - O._timer < 1e3)) {
                var e = O._count;
                if (O.FPS = Math.round(1e3 * e / (t - O._timer)), this._show) {
                    O.trianglesFaces = Math.round(O.trianglesFaces / e), this._useCanvas ? O.renderBatches = Math.round(O.renderBatches / e) : O.renderBatches = Math.round(O.renderBatches / e) - 1, O.savedRenderBatches = Math.round(O.savedRenderBatches / e), O.shaderCall = Math.round(O.shaderCall / e), O.spriteRenderUseCacheCount = Math.round(O.spriteRenderUseCacheCount / e), O.canvasNormal = Math.round(O.canvasNormal / e), O.canvasBitmap = Math.round(O.canvasBitmap / e), O.canvasReCache = Math.ceil(O.canvasReCache / e), O.frustumCulling = Math.round(O.frustumCulling / e), O.octreeNodeCulling = Math.round(O.octreeNodeCulling / e);
                    var i = O.FPS > 0 ? Math.floor(1e3 / O.FPS).toString() : " ";
                    O._fpsStr = O.FPS + (O.renderSlow ? " slow" : "") + " " + i, O._spriteStr = O.spriteCount + (O.spriteRenderUseCacheCount ? "/" + O.spriteRenderUseCacheCount : ""), O._canvasStr = O.canvasReCache + "/" + O.canvasNormal + "/" + O.canvasBitmap, O.cpuMemory = E.cpuMemory, O.gpuMemory = E.gpuMemory, this._useCanvas ? this.renderInfoPre() : this.renderInfo(), O.clear();
                }
                O._count = 0, O._timer = t;
            }
        }
        renderInfoPre() {
            var t, e, i = 0;
            if (this._canvas) {
                var s = this._ctx;
                for (s.clearRect(this._first ? 0 : this._vx, 0, this._width, this._height), i = 0; i < this._view.length; i++) t = this._view[i], this._first && (s.fillStyle = "white", s.fillText(t.title, t.x, t.y)), s.fillStyle = t.color, e = O[t.value], "M" == t.units && (e = Math.floor(e / 1048576 * 100) / 100 + " M"), s.fillText(e + "", t.x + this._vx, t.y);
            }
        }
        renderInfo() {
            for (var t = "", e = 0; e < this._view.length; e++) {
                var i = this._view[e],
                    s = O[i.value];
                "M" == i.units && (s = Math.floor(s / 1048576 * 100) / 100 + " M"), "K" == i.units && (s = Math.floor(s / 1024 * 100) / 100 + " K"), t += s + "\n";
            }
            this._txt.text = t;
        }
        isCanvasRender() {
            return this._useCanvas;
        }
        renderNotCanvas(t, e, i) {
            this._show && this._sp && this._sp.render(t, 0, 0);
        }
    }
    pi._fontSize = 12;
    class fi {
        constructor(t = !0) {
            this.scale = 1, this.currTimer = Date.now(), this.currFrame = 0, this._delta = 0, this._lastTimer = Date.now(), this._map = [], this._handlers = [], this._temp = [], this._count = 0, t && fi.gSysTimer && fi.gSysTimer.frameLoop(1, this, this._update);
        }
        get delta() {
            return this._delta;
        }
        _update() {
            if (this.scale <= 0) return this._lastTimer = Date.now(), void(this._delta = 0);
            var t = this.currFrame = this.currFrame + this.scale,
                e = Date.now(),
                i = e - this._lastTimer > 3e4;
            this._delta = (e - this._lastTimer) * this.scale;
            var s = this.currTimer = this.currTimer + this._delta;
            this._lastTimer = e;
            var r = this._handlers;
            this._count = 0;
            for (var a = 0, n = r.length; a < n; a++) {
                var h = r[a];
                if (null !== h.method) {
                    var o = h.userFrame ? t : s;
                    if (o >= h.exeTime)
                        if (h.repeat)
                            if (!h.jumpFrame || i) h.exeTime += h.delay, h.run(!1), o > h.exeTime && (h.exeTime += Math.ceil((o - h.exeTime) / h.delay) * h.delay);
                            else
                                for (; o >= h.exeTime;) h.exeTime += h.delay, h.run(!1);
                    else h.run(!0);
                } else this._count++;
            }
            (this._count > 30 || t % 200 == 0) && this._clearHandlers();
        }
        _clearHandlers() {
            for (var t = this._handlers, e = 0, i = t.length; e < i; e++) {
                var s = t[e];
                null !== s.method ? this._temp.push(s) : this._recoverHandler(s);
            }
            this._handlers = this._temp, t.length = 0, this._temp = t;
        }
        _recoverHandler(t) {
            this._map[t.key] == t && (this._map[t.key] = null), t.clear(), fi._pool.push(t);
        }
        _create(t, e, i, s, r, a, n) {
            if (!i) return r.apply(s, a), null;
            if (n) {
                var h = this._getHandler(s, r);
                if (h) return h.repeat = e, h.userFrame = t, h.delay = i, h.caller = s, h.method = r, h.args = a, h.exeTime = i + (t ? this.currFrame : this.currTimer + Date.now() - this._lastTimer), h;
            }
            return (h = fi._pool.length > 0 ? fi._pool.pop() : new gi()).repeat = e, h.userFrame = t, h.delay = i, h.caller = s, h.method = r, h.args = a, h.exeTime = i + (t ? this.currFrame : this.currTimer + Date.now() - this._lastTimer), this._indexHandler(h), this._handlers.push(h), h;
        }
        _indexHandler(t) {
            var e = t.caller,
                s = t.method,
                r = e ? e.$_GID || (e.$_GID = i.Utils.getGID()) : 0,
                a = s.$_TID || (s.$_TID = 1e5 * fi._mid++);
            t.key = r + a, this._map[t.key] = t;
        }
        once(t, e, i, s = null, r = !0) {
            this._create(!1, !1, t, e, i, s, r);
        }
        loop(t, e, i, s = null, r = !0, a = !1) {
            var n = this._create(!1, !0, t, e, i, s, r);
            n && (n.jumpFrame = a);
        }
        frameOnce(t, e, i, s = null, r = !0) {
            this._create(!0, !1, t, e, i, s, r);
        }
        frameLoop(t, e, i, s = null, r = !0) {
            this._create(!0, !0, t, e, i, s, r);
        }
        toString() {
            return " handlers:" + this._handlers.length + " pool:" + fi._pool.length;
        }
        clear(t, e) {
            var i = this._getHandler(t, e);
            i && (this._map[i.key] = null, i.key = 0, i.clear());
        }
        clearAll(t) {
            if (t)
                for (var e = 0, i = this._handlers.length; e < i; e++) {
                    var s = this._handlers[e];
                    s.caller === t && (this._map[s.key] = null, s.key = 0, s.clear());
                }
        }
        _getHandler(t, e) {
            var s = t ? t.$_GID || (t.$_GID = i.Utils.getGID()) : 0,
                r = e.$_TID || (e.$_TID = 1e5 * fi._mid++);
            return this._map[s + r];
        }
        callLater(t, e, i = null) {
            Le.I.callLater(t, e, i);
        }
        runCallLater(t, e) {
            Le.I.runCallLater(t, e);
        }
        runTimer(t, e) {
            var i = this._getHandler(t, e);
            i && null != i.method && (this._map[i.key] = null, i.run(!0));
        }
        pause() {
            this.scale = 0;
        }
        resume() {
            this.scale = 1;
        }
    }
    fi.gSysTimer = null, fi._pool = [], fi._mid = 1;
    class gi {
        clear() {
            this.caller = null, this.method = null, this.args = null;
        }
        run(t) {
            var e = this.caller;
            if (e && e.destroyed) return this.clear();
            var i = this.method,
                s = this.args;
            t && this.clear(), null != i && (s ? i.apply(e, s) : i.call(e));
        }
    }
    class mi extends U {
        constructor(t) {
            super(L.SKINMESH, 0), this.offsetX = 300, this.offsetY = 0;
            var e = C.mainContext,
                i = 8 * Dt.BYTES_PE;
            this.position = [2, e.FLOAT, !1, i, 0], this.texcoord = [2, e.FLOAT, !1, i, 2 * Dt.BYTES_PE], this.color = [4, e.FLOAT, !1, i, 4 * Dt.BYTES_PE];
        }
    }
    class vi extends U {
        constructor(t) {
            super(L.PRIMITIVE, 0), this._attribLocation = ["position", 0, "attribColor", 1];
        }
    }
    class Ti extends U {
        constructor(t = 0) {
            super(L.TEXTURE2D, t), this.strength = 0, this.blurInfo = null, this.colorMat = null, this.colorAlpha = null, this._attribLocation = ["posuv", 0, "attribColor", 1, "attribFlags", 2];
        }
        clear() {
            this.texture = null, this.shader = null, this.defines._value = this.subID + (Jt.shaderHighPrecision ? L.SHADERDEFINE_FSHIGHPRECISION : 0);
        }
    }
    class xi {
        constructor(t) {
            this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "", this.script = t;
            for (var e, s, r = 0; !((r = t.indexOf("#begin", r)) < 0);) {
                for (s = r + 5; !((s = t.indexOf("#end", s)) < 0) && "i" === t.charAt(s + 4);) s += 5;
                if (s < 0) throw "add include err,no #end:" + t;
                e = t.indexOf("\n", r);
                var a = i.ShaderCompile.splitToWords(t.substr(r, e - r), null);
                "code" == a[1] ? this.codes[a[2]] = t.substr(e + 1, s - e - 1) : "function" == a[1] && (e = t.indexOf("function", r), e += "function".length, this.funs[a[3]] = t.substr(e + 1, s - e - 1), this.funnames += a[3] + ";"), r = s + 1;
            }
        }
        getWith(t = null) {
            var e = t ? this.codes[t] : this.script;
            if (!e) throw "get with error:" + t;
            return e;
        }
        getFunsScript(t) {
            var e = "";
            for (var i in this.funs) t.indexOf(i + ";") >= 0 && (e += this.funs[i]);
            return e;
        }
    }
    class yi {
        constructor(t) {
            this.childs = [], this.text = "", this.useFuns = "", this.z = 0, this.includefiles = t;
        }
        setParent(t) {
            t.childs.push(this), this.z = t.z + 1, this.parent = t;
        }
        setCondition(t, e) {
            t && (this.conditionType = e, t = t.replace(/(\s*$)/g, ""), this.condition = function() {
                return this[t];
            }, this.condition.__condition = t);
        }
        toscript(t, e) {
            return this._toscript(t, e, ++yi.__id);
        }
        _toscript(t, e, s) {
            if (this.childs.length < 1 && !this.text) return e;
            e.length;
            if (this.condition) {
                var r = !!this.condition.call(t);
                if (this.conditionType === i.ShaderCompile.IFDEF_ELSE && (r = !r), !r) return e;
            }
            if (this.text && e.push(this.text), this.childs.length > 0 && this.childs.forEach(function(i, r, a) {
                    i._toscript(t, e, s);
                }), this.includefiles.length > 0 && this.useFuns.length > 0)
                for (var a, n = 0, h = this.includefiles.length; n < h; n++) this.includefiles[n].curUseID != s && (a = this.includefiles[n].file.getFunsScript(this.useFuns)).length > 0 && (this.includefiles[n].curUseID = s, e[0] = a + e[0]);
            return e;
        }
    }
    yi.__id = 1;
    class Ei {
        constructor(t, e, i) {
            this.defs = {};
            let s = this;

            function _compile(t) {
                t = t.replace(Ei._clearCR, "");
                var e = [],
                    i = new yi(e);
                return s._compileToTree(i, t.split("\n"), 0, e, s.defs), i;
            }
            var r = Date.now();
            this._VS = _compile(t), this._PS = _compile(e), this._nameMap = i, Date.now() - r > 2 && console.log("ShaderCompile use time:" + (Date.now() - r) + "  size:" + t.length + "/" + e.length);
        }
        static __init__() {
            var t = m.instance;
            Ei.shaderParamsMap = {
                float: t.FLOAT,
                int: t.INT,
                bool: t.BOOL,
                vec2: t.FLOAT_VEC2,
                vec3: t.FLOAT_VEC3,
                vec4: t.FLOAT_VEC4,
                ivec2: t.INT_VEC2,
                ivec3: t.INT_VEC3,
                ivec4: t.INT_VEC4,
                bvec2: t.BOOL_VEC2,
                bvec3: t.BOOL_VEC3,
                bvec4: t.BOOL_VEC4,
                mat2: t.FLOAT_MAT2,
                mat3: t.FLOAT_MAT3,
                mat4: t.FLOAT_MAT4,
                sampler2D: t.SAMPLER_2D,
                samplerCube: t.SAMPLER_CUBE
            };
        }
        static _parseOne(t, e, i, s, r, a) {
            var n = {
                type: Ei.shaderParamsMap[i[s + 1]],
                name: i[s + 2],
                size: isNaN(parseInt(i[s + 3])) ? 1 : parseInt(i[s + 3])
            };
            return a && ("attribute" == r ? t.push(n) : e.push(n)), ":" == i[s + 3] && (n.type = i[s + 4], s += 2), s += 2;
        }
        static addInclude(t, e) {
            if (!e || 0 === e.length) throw new Error("add shader include file err:" + t);
            if (Ei.includes[t]) throw new Error("add shader include file err, has add:" + t);
            Ei.includes[t] = new xi(e);
        }
        static preGetParams(t, e) {
            var i, s, r = [t, e],
                a = {},
                n = [],
                h = [],
                o = {},
                l = [];
            a.attributes = n, a.uniforms = h, a.defines = o;
            for (var _ = 0; _ < 2; _++) {
                r[_] = r[_].replace(Ei._removeAnnotation, "");
                var c, u = r[_].match(Ei._reg);
                for (i = 0, s = u.length; i < s; i++) {
                    var d = u[i];
                    if ("attribute" == d || "uniform" == d) i = Ei._parseOne(n, h, u, i, d, !0);
                    else {
                        if ("#define" == d) {
                            l[d = u[++i]] = 1;
                            continue;
                        }
                        if ("#ifdef" == d) {
                            o[c = u[++i]] = o[c] || [];
                            for (i++; i < s; i++)
                                if ("attribute" == (d = u[i]) || "uniform" == d) i = Ei._parseOne(n, h, u, i, d, l[c]);
                                else if ("#else" == d)
                                for (i++; i < s; i++)
                                    if ("attribute" == (d = u[i]) || "uniform" == d) i = Ei._parseOne(n, h, u, i, d, !l[c]);
                                    else if ("#endif" == d) break;
                        }
                    }
                }
            }
            return a;
        }
        static splitToWords(t, e) {
            for (var i, s, r = [], a = -1, n = 0, h = t.length; n < h; n++)
                if (i = t.charAt(n), " \t=+-*/&%!<>()'\",;".indexOf(i) >= 0) {
                    if (a >= 0 && n - a > 1 && (s = t.substr(a, n - a), r.push(s)), '"' == i || "'" == i) {
                        var o = t.indexOf(i, n + 1);
                        if (o < 0) throw "Sharder err:" + t;
                        r.push(t.substr(n + 1, o - n - 1)), n = o, a = -1;
                        continue;
                    }
                    "(" == i && e && r.length > 0 && (s = r[r.length - 1] + ";", "vec4;main;".indexOf(s) < 0 && (e.useFuns += s)), a = -1;
                } else a < 0 && (a = n);
            return a < h && h - a > 1 && (s = t.substr(a, h - a), r.push(s)), r;
        }
        _compileToTree(t, e, i, s, r) {
            var a, n, h, o, l, _, c, u, d, p, f;
            for (d = i; d < e.length; d++)
                if (!((h = e[d]).length < 1) && 0 !== (_ = h.indexOf("//"))) {
                    if (_ >= 0 && (h = h.substr(0, _)), a = u || new yi(s), u = null, a.text = h, a.noCompile = !0, (_ = h.indexOf("#")) >= 0) {
                        for (o = "#", f = _ + 1, p = h.length; f < p; f++) {
                            var g = h.charAt(f);
                            if (" " === g || "\t" === g || "?" === g) break;
                            o += g;
                        }
                        switch (a.name = o, o) {
                            case "#ifdef":
                            case "#ifndef":
                                if (a.src = h, a.noCompile = null != h.match(/[!&|()=<>]/), a.noCompile ? console.log("function():Boolean{return " + h.substr(_ + a.name.length) + "}") : (c = h.replace(/^\s*/, "").split(/\s+/), a.setCondition(c[1], "#ifdef" === o ? Ei.IFDEF_YES : Ei.IFDEF_ELSE), a.text = "//" + a.text), a.setParent(t), t = a, r)
                                    for (c = h.substr(f).split(Ei._splitToWordExps3), f = 0; f < c.length; f++)(h = c[f]).length && (r[h] = !0);
                                continue;
                            case "#if":
                                if (a.src = h, a.noCompile = !0, a.setParent(t), t = a, r)
                                    for (c = h.substr(f).split(Ei._splitToWordExps3), f = 0; f < c.length; f++)(h = c[f]).length && "defined" != h && (r[h] = !0);
                                continue;
                            case "#else":
                                a.src = h, n = (t = t.parent).childs[t.childs.length - 1], a.noCompile = n.noCompile, a.noCompile || (a.condition = n.condition, a.conditionType = n.conditionType == Ei.IFDEF_YES ? Ei.IFDEF_ELSE : Ei.IFDEF_YES, a.text = "//" + a.text + " " + n.text + " " + a.conditionType), a.setParent(t), t = a;
                                continue;
                            case "#endif":
                                n = (t = t.parent).childs[t.childs.length - 1], a.noCompile = n.noCompile, a.noCompile || (a.text = "//" + a.text), a.setParent(t);
                                continue;
                            case "#include":
                                c = Ei.splitToWords(h, null);
                                var m = Ei.includes[c[1]];
                                if (!m) throw "ShaderCompile error no this include file:" + c[1];
                                if ((_ = c[0].indexOf("?")) < 0) {
                                    a.setParent(t), h = m.getWith("with" == c[2] ? c[3] : null), this._compileToTree(a, h.split("\n"), 0, s, r), a.text = "";
                                    continue;
                                }
                                a.setCondition(c[0].substr(_ + 1), Ei.IFDEF_YES), a.text = m.getWith("with" == c[2] ? c[3] : null);
                                break;
                            case "#import":
                                l = (c = Ei.splitToWords(h, null))[1], s.push({
                                    node: a,
                                    file: Ei.includes[l],
                                    ofs: a.text.length
                                });
                                continue;
                        }
                    } else {
                        if ((n = t.childs[t.childs.length - 1]) && !n.name) {
                            s.length > 0 && Ei.splitToWords(h, n), u = a, n.text += "\n" + h;
                            continue;
                        }
                        s.length > 0 && Ei.splitToWords(h, a);
                    }
                    a.setParent(t);
                }
        }
        createShader(t, e, i, s) {
            var r = {},
                a = "";
            if (t)
                for (var n in t) a += "#define " + n + "\n", r[n] = !0;
            var h = this._VS.toscript(r, []),
                o = this._PS.toscript(r, []);
            return (i || F.create)(a + h.join("\n"), a + o.join("\n"), e, this._nameMap, s);
        }
    }
    Ei.IFDEF_NO = 0, Ei.IFDEF_YES = 1, Ei.IFDEF_ELSE = 2, Ei.IFDEF_PARENT = 3, Ei._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"), Ei._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"), Ei._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"), Ei.includes = {}, Ei._clearCR = new RegExp("\r", "g"), Ei._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g");
    class Ai extends T {
        constructor() {
            super(), this.worker = new Worker(Ai.workerPath);
            let t = this;
            this.worker.onmessage = function(e) {
                t.workerMessage(e.data);
            };
        }
        static __init__() {
            return null == Ai._preLoadFun && (!!Worker && (Ai._preLoadFun = Ke.prototype._loadImage, Ke.prototype._loadImage = Ai.prototype._loadImage, Ai.I || (Ai.I = new Ai()), !0));
        }
        static workerSupported() {
            return !!Worker;
        }
        static enableWorkerLoader() {
            Ai._tryEnabled || (Ai.enable = !0, Ai._tryEnabled = !0);
        }
        static set enable(t) {
            Ai._enable != t && (Ai._enable = t, t && null == Ai._preLoadFun && (Ai._enable = Ai.__init__()));
        }
        static get enable() {
            return Ai._enable;
        }
        workerMessage(t) {
            if (t) switch (t.type) {
                case "Image":
                    this.imageLoaded(t);
                    break;
                case "Disable":
                    Ai.enable = !1;
            }
        }
        imageLoaded(t) {
            if (t.dataType && "imageBitmap" == t.dataType) {
                var e = t.imageBitmap,
                    i = new R();
                i.loadImageSource(e), console.log("load:", t.url), this.event(t.url, i);
            } else this.event(t.url, null);
        }
        loadImage(t) {
            this.worker.postMessage(t);
        }
        _loadImage(t) {
            var e = this;
            if (this._useWorkerLoader && Ai._enable) {
                t = y.formatURL(t);
                var i = function(s) {
                    Ai.I.off(t, e, i), s ? e.onLoaded(s) : Ai._preLoadFun.call(e, t);
                };
                Ai.I.on(t, e, i), Ai.I.loadImage(t);
            } else Ai._preLoadFun.call(e, t);
        }
    }
    Ai.workerPath = "libs/workerloader.js", Ai._enable = !1, Ai._tryEnabled = !1;
    class Ci {
        static set cursor(t) {
            Ci._style.cursor = t;
        }
        static get cursor() {
            return Ci._style.cursor;
        }
        static __init__() {}
        static hide() {
            "none" != Ci.cursor && (Ci._preCursor = Ci.cursor, Ci.cursor = "none");
        }
        static show() {
            "none" == Ci.cursor && (Ci._preCursor ? Ci.cursor = Ci._preCursor : Ci.cursor = "auto");
        }
    }
    class bi extends gt {
        constructor(t) {
            super(bi.const_stride, 4 * t * bi.const_stride, 4), this.canReuse = !0, this.setAttributes(bi._fixattriInfo), this.createQuadIB(t), this._quadNum = t;
        }
        static __init__() {
            var t = m.instance;
            bi._fixattriInfo = [t.FLOAT, 4, 0, t.FLOAT, 3, 16, t.FLOAT, 3, 28, t.FLOAT, 4, 40, t.FLOAT, 4, 56, t.FLOAT, 3, 72, t.FLOAT, 2, 84, t.FLOAT, 4, 92, t.FLOAT, 1, 108, t.FLOAT, 1, 112];
        }
        setMaxParticleNum(t) {
            this._vb._resizeBuffer(4 * t * bi.const_stride, !1), this.createQuadIB(t);
        }
        static getAMesh(t) {
            if (bi._POOL.length) {
                var e = bi._POOL.pop();
                return e.setMaxParticleNum(t), e;
            }
            return new bi(t);
        }
        releaseMesh() {
            this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, bi._POOL.push(this);
        }
        destroy() {
            this._ib.destroy(), this._vb.destroy(), this._vb.deleteBuffer();
        }
    }
    bi.const_stride = 116, bi._POOL = [];
    class Ri extends A {}
    Ri.create = function(t, e, i) {
        var s = new R(t, e, i, !1, !1);
        return s.wrapModeU = b.WARPMODE_CLAMP, s.wrapModeV = b.WARPMODE_CLAMP, s;
    };
    class wi {
        static __init(t) {
            t.forEach(function(t) {
                t.__init$ && t.__init$();
            });
        }
        static init(e, s, ...r) {
            if (!wi._isinit) {
                wi._isinit = !0, ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = wi._arrayBufferSlice), jt.__init__();
                var a = jt.mainCanvas = new Ee(!0),
                    n = a.source.style;
                n.position = "absolute", n.top = n.left = "0px", n.background = "#000000", jt.onKGMiniGame || jt.onAlipayMiniGame || jt.container.appendChild(a.source), jt.canvas = new Ee(!0), jt.context = jt.canvas.getContext("2d"), jt.supportWebAudio = Ve.__init__(), jt.supportLocalStorage = $e.__init__(), wi.systemTimer = new fi(!1), t.systemTimer = fi.gSysTimer = wi.systemTimer, wi.startTimer = new fi(!1), wi.physicsTimer = new fi(!1), wi.updateTimer = new fi(!1), wi.lateTimer = new fi(!1), wi.timer = new fi(!1), t.startTimer = i.startTimer = wi.startTimer, t.lateTimer = i.lateTimer = wi.lateTimer, t.updateTimer = i.updateTimer = wi.updateTimer, i.systemTimer = wi.systemTimer, t.timer = i.timer = wi.timer, t.physicsTimer = i.physicsTimer = wi.physicsTimer, wi.loader = new Qe(), i.Laya = wi, t.loader = i.loader = wi.loader, li.__init__(), _i.__init(), Ci.__init__(), Jt.inner_enable();
                for (var h = 0, o = r.length; h < o; h++) r[h] && r[h].enable && r[h].enable();
                return i.Render.isConchApp && wi.enableNative(), wi.enableWebGLPlus(), pe.beginCheck(), t.stage = wi.stage = new Fe(), i.stage = wi.stage, Y.gStage = wi.stage, y.rootPath = y._basePath = wi._getUrlPath(), mt.__int__(), Tt.__init__(), vt.__init__(), wi.render = new ee(0, 0, jt.mainCanvas), t.render = wi.render, wi.stage.size(e, s), window.stage = wi.stage, C.__init__(), bi.__init__(), Ei.__init__(), Re.__init__(), Ne.__init__(), De.instance.__init__(wi.stage, ee.canvas), Ie.__init__(), Ve.autoStopMusic = !0, O._StatRender = new pi(), U._initone(L.TEXTURE2D, Ti), U._initone(L.TEXTURE2D | L.FILTERGLOW, Ti), U._initone(L.PRIMITIVE, vi), U._initone(L.SKINMESH, mi), ee.canvas;
            }
        }
        static _getUrlPath() {
            var t = jt.window.location,
                e = t.pathname;
            return e = ":" == e.charAt(2) ? e.substring(1) : e, y.getPath("file:" == t.protocol ? e : t.protocol + "//" + t.host + t.pathname);
        }
        static _arrayBufferSlice(t, e) {
            var i = new Uint8Array(this, t, e - t),
                s = new Uint8Array(i.length);
            return s.set(i), s.buffer;
        }
        static set alertGlobalError(t) {
            var e = 0;
            jt.window.onerror = t ? function(t, i, s, r, a) {
                e++ < 5 && a && this.alert("出错啦，请把此信息截图给研发商\n" + t + "\n" + a.stack);
            } : null;
        }
        static _runScript(t) {
            return jt.window[wi._evcode](t);
        }
        static enableDebugPanel(t = "libs/laya.debugtool.js") {
            if (wi.DebugPanel) wi.DebugPanel.enable();
            else {
                var e = jt.createElement("script");
                e.onload = function() {
                    wi.DebugPanel.enable();
                }, e.src = t, jt.document.body.appendChild(e);
            }
        }
        static enableWebGLPlus() {
            C.__init_native();
        }
        static enableNative() {
            wi.isNativeRender_enable || (wi.isNativeRender_enable = !0, F.prototype.uploadTexture2D = function(t) {
                var e = m.instance;
                e.bindTexture(e.TEXTURE_2D, t);
            }, M.width = jt.window.innerWidth, M.height = jt.window.innerHeight, jt.measureText = function(t, e) {
                return window.conchTextCanvas.font = e, window.conchTextCanvas.measureText(t);
            }, Fe.clear = function(t) {
                Zt.set2DRenderConfig();
                var e = V.create(t).arrColor,
                    i = m.instance;
                e && i.clearColor(e[0], e[1], e[2], e[3]), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT), M.clear();
            }, we.drawToCanvas = we.drawToTexture = function(t, e, i, s, r, a) {
                r -= t.x, a -= t.y, r |= 0, a |= 0, i |= 0, s |= 0;
                var n = new Ee(!1),
                    h = n.getContext("2d");
                return n.size(i, s), h.asBitmap = !0, h._targets.start(), Re.renders[e]._fun(t, h, r, a), h.flush(), h._targets.end(), h._targets.restore(), n;
            }, Object.defineProperty(S.prototype, "uv", {
                get: function() {
                    return this._uv;
                },
                set: function(t) {
                    this._uv = t;
                }
            }), Ee.prototype.getTexture = function() {
                return this._texture || (this._texture = this.context._targets, this._texture.uv = S.flipyuv, this._texture.bitmap = this._texture), this._texture;
            });
        }
    }
    wi.stage = null, wi.systemTimer = null, wi.startTimer = null, wi.physicsTimer = null, wi.updateTimer = null, wi.lateTimer = null, wi.timer = null, wi.loader = null, wi.version = "2.2.0", wi._isinit = !1, wi.isWXOpenDataContext = !1, wi.isWXPosMsg = !1, wi.__classmap = null, wi.Config = e, wi.TextRender = Qt, wi.EventDispatcher = T, wi.SoundChannel = Ue, wi.Stage = Fe, wi.Render = ee, wi.Browser = jt, wi.Sprite = we, wi.Node = xe, wi.Context = Zt, wi.WebGL = Jt, wi.Handler = v, wi.RunDriver = Be, wi.Utils = Y, wi.Input = Ie, wi.Loader = Ke, wi.LocalStorage = $e, wi.SoundManager = Ve, wi.URL = y, wi.Event = Wt, wi.Matrix = p, wi.HTMLImage = Ri, wi.Laya = wi, wi._evcode = "eval", wi.isNativeRender_enable = !1, wi.__classmap = i.__classMap, i.Timer = fi, i.Dragging = si, i.GraphicsBounds = re, i.Sprite = we, i.TextRender = Qt, i.Loader = Ke, i.TTFLoader = ti, i.WebAudioSound = Ye, i.SoundManager = Ve, i.ShaderCompile = Ei, i.ClassUtils = Te, i.SceneUtils = _i, i.Context = Zt, i.Render = ee, i.MouseManager = De, i.Text = Se, i.Browser = jt, i.WebGL = Jt, i.AudioSound = Ge, i.Pool = s, i.Utils = Y, i.Graphics = ge, i.Submit = Lt, i.Stage = Fe, i.Resource = E, i.WorkerLoader = Ai;
    var Mi = window._layalibs;
    if (Mi) {
        Mi.sort(function(t, e) {
            return t.i - e.i;
        });
        for (var Si = 0; Si < Mi.length; Si++) Mi[Si].f(window, window.document, wi);
    }
    let Ii = window;
    Ii.Laya ? (Ii.Laya.Laya = wi, Object.assign(Ii.Laya, wi)) : Ii.Laya = wi;
    var Pi = wi.__init,
        Di = wi.init,
        Li = wi.version,
        Oi = wi.alertGlobalError,
        Bi = wi.enableDebugPanel;

    function _static(t, e) {
        for (var i = 0, s = e.length; i < s; i += 2)
            if ("length" == e[i]) t.length = e[i + 1].call(t);
            else {
                function tmp() {
                    var s = e[i],
                        r = e[i + 1];
                    Object.defineProperty(t, s, {
                        get: function() {
                            return delete this[s], this[s] = r.call(this);
                        },
                        set: function(t) {
                            delete this[s], this[s] = t;
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }
                tmp();
            }
    }
    class Fi extends ri {
        get isSingleton() {
            return !1;
        }
        _onAwake() {
            this.onAwake(), this.onStart !== Fi.prototype.onStart && i.startTimer.callLater(this, this.onStart);
        }
        _onEnable() {
            var t = Fi.prototype;
            this.onTriggerEnter !== t.onTriggerEnter && this.owner.on(Wt.TRIGGER_ENTER, this, this.onTriggerEnter), this.onTriggerStay !== t.onTriggerStay && this.owner.on(Wt.TRIGGER_STAY, this, this.onTriggerStay), this.onTriggerExit !== t.onTriggerExit && this.owner.on(Wt.TRIGGER_EXIT, this, this.onTriggerExit), this.onMouseDown !== t.onMouseDown && this.owner.on(Wt.MOUSE_DOWN, this, this.onMouseDown), this.onMouseUp !== t.onMouseUp && this.owner.on(Wt.MOUSE_UP, this, this.onMouseUp), this.onClick !== t.onClick && this.owner.on(Wt.CLICK, this, this.onClick), this.onStageMouseDown !== t.onStageMouseDown && i.stage.on(Wt.MOUSE_DOWN, this, this.onStageMouseDown), this.onStageMouseUp !== t.onStageMouseUp && i.stage.on(Wt.MOUSE_UP, this, this.onStageMouseUp), this.onStageClick !== t.onStageClick && i.stage.on(Wt.CLICK, this, this.onStageClick), this.onStageMouseMove !== t.onStageMouseMove && i.stage.on(Wt.MOUSE_MOVE, this, this.onStageMouseMove), this.onDoubleClick !== t.onDoubleClick && this.owner.on(Wt.DOUBLE_CLICK, this, this.onDoubleClick), this.onRightClick !== t.onRightClick && this.owner.on(Wt.RIGHT_CLICK, this, this.onRightClick), this.onMouseMove !== t.onMouseMove && this.owner.on(Wt.MOUSE_MOVE, this, this.onMouseMove), this.onMouseOver !== t.onMouseOver && this.owner.on(Wt.MOUSE_OVER, this, this.onMouseOver), this.onMouseOut !== t.onMouseOut && this.owner.on(Wt.MOUSE_OUT, this, this.onMouseOut), this.onKeyDown !== t.onKeyDown && i.stage.on(Wt.KEY_DOWN, this, this.onKeyDown), this.onKeyPress !== t.onKeyPress && i.stage.on(Wt.KEY_PRESS, this, this.onKeyPress), this.onKeyUp !== t.onKeyUp && i.stage.on(Wt.KEY_UP, this, this.onKeyUp), this.onUpdate !== t.onUpdate && i.updateTimer.frameLoop(1, this, this.onUpdate), this.onLateUpdate !== t.onLateUpdate && i.lateTimer.frameLoop(1, this, this.onLateUpdate), this.onPreRender !== t.onPreRender && i.lateTimer.frameLoop(1, this, this.onPreRender);
        }
        _onDisable() {
            this.owner.offAllCaller(this), i.stage.offAllCaller(this), i.startTimer.clearAll(this), i.updateTimer.clearAll(this), i.lateTimer.clearAll(this);
        }
        _isScript() {
            return !0;
        }
        _onDestroy() {
            this.onDestroy();
        }
        onAwake() {}
        onEnable() {}
        onStart() {}
        onTriggerEnter(t, e, i) {}
        onTriggerStay(t, e, i) {}
        onTriggerExit(t, e, i) {}
        onMouseDown(t) {}
        onMouseUp(t) {}
        onClick(t) {}
        onStageMouseDown(t) {}
        onStageMouseUp(t) {}
        onStageClick(t) {}
        onStageMouseMove(t) {}
        onDoubleClick(t) {}
        onRightClick(t) {}
        onMouseMove(t) {}
        onMouseOver(t) {}
        onMouseOut(t) {}
        onKeyDown(t) {}
        onKeyPress(t) {}
        onKeyUp(t) {}
        onUpdate() {}
        onLateUpdate() {}
        onPreRender() {}
        onPostRender() {}
        onDisable() {}
        onDestroy() {}
    }
    class Ni extends hi {
        constructor() {
            super(...arguments), this._nodeIDAniDic = {};
        }
        _parseNodeList(t) {
            this._nodeList || (this._nodeList = []), this._nodeDefaultProps[t.compId] = t.props, t.compId && this._nodeList.push(t.compId);
            var e = t.child;
            if (e) {
                var i, s = e.length;
                for (i = 0; i < s; i++) this._parseNodeList(e[i]);
            }
        }
        _calGraphicData(t) {
            var e;
            if (this._setUp(null, t), this._createGraphicData(), this._nodeIDAniDic)
                for (e in this._nodeIDAniDic) this._nodeIDAniDic[e] = null;
        }
        _createGraphicData() {
            var t, e, i = [],
                s = this.count,
                r = this._usedFrames;
            for (r || (r = []), t = 0; t < s; t++) !r[t] && e || (e = this._createFrameGraphic(t)), i.push(e);
            this._gList = i;
        }
        _createFrameGraphic(t) {
            var e = new ge();
            return Ni._rootMatrix || (Ni._rootMatrix = new p()), this._updateNodeGraphic(this._rootNode, t, Ni._rootMatrix, e), e;
        }
        _updateNodeGraphic(t, e, i, s, r = 1) {
            var a, n, h;
            (a = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId])).resultTransform || (a.resultTransform = new p()), n = a.resultTransform, p.mul(a.transform, i, n);
            var o = a.alpha * r;
            if (!(o < .01)) {
                a.skin && (h = this._getTextureByUrl(a.skin)) && (n._checkTransform() ? (s.drawTexture(h, 0, 0, a.width, a.height, n, o), a.resultTransform = null) : s.drawTexture(h, n.tx, n.ty, a.width, a.height, null, o));
                var l, _, c = t.child;
                if (c)
                    for (_ = c.length, l = 0; l < _; l++) this._updateNodeGraphic(c[l], e, n, s, o);
            }
        }
        _updateNoChilds(t, e) {
            if (t.skin) {
                var i = this._getTextureByUrl(t.skin);
                if (i) {
                    var s = t.transform;
                    s._checkTransform(), !s._bTransform ? e.drawTexture(i, s.tx, s.ty, t.width, t.height, null, t.alpha) : e.drawTexture(i, 0, 0, t.width, t.height, s.clone(), t.alpha);
                }
            }
        }
        _updateNodeGraphic2(t, e, i) {
            var s;
            if (s = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]), t.child) {
                var r, a, n, h = s.transform;
                h._checkTransform(), a = (r = !h._bTransform) && (0 != h.tx || 0 != h.ty), (n = h._bTransform || 1 != s.alpha) && i.save(), 1 != s.alpha && i.alpha(s.alpha), r ? a && i.translate(h.tx, h.ty) : i.transform(h.clone());
                var o, l, _, c = t.child;
                if (s.skin && (o = this._getTextureByUrl(s.skin)) && i.drawImage(o, 0, 0, s.width, s.height), c)
                    for (_ = c.length, l = 0; l < _; l++) this._updateNodeGraphic2(c[l], e, i);
                n ? i.restore() : r ? a && i.translate(-h.tx, -h.ty) : i.transform(h.clone().invert());
            } else this._updateNoChilds(s, i);
        }
        _calculateKeyFrames(t) {
            super._calculateKeyFrames(t), this._nodeIDAniDic[t.target] = t;
        }
        getNodeDataByID(t) {
            return this._nodeIDAniDic[t];
        }
        _getParams(t, e, i, s) {
            var r = Ni._temParam;
            r.length = e.length;
            var a, n = e.length;
            for (a = 0; a < n; a++) r[a] = this._getObjVar(t, e[a][0], i, e[a][1], s);
            return r;
        }
        _getObjVar(t, e, i, s, r) {
            if (e in t) {
                var a = t[e];
                return i >= a.length && (i = a.length - 1), t[e][i];
            }
            return e in r ? r[e] : s;
        }
        _getNodeGraphicData(t, e, i) {
            i || (i = new Ui()), i.transform ? i.transform.identity() : i.transform = new p();
            var s = this.getNodeDataByID(t);
            if (!s) return i;
            var r, a, n, h = s.frames,
                o = this._getParams(h, Ni._drawTextureCmd, e, this._nodeDefaultProps[t]),
                l = o[0],
                _ = o[5],
                c = o[6],
                u = o[13],
                d = o[14],
                f = o[7],
                g = o[8],
                m = o[9],
                v = o[11],
                T = o[12];
            r = o[3], a = o[4], 0 != r && 0 != a || (l = null), -1 == r && (r = 0), -1 == a && (a = 0), i.skin = l, i.width = r, i.height = a, l && ((n = this._getTextureByUrl(l)) ? (r || (r = n.sourceWidth), a || (a = n.sourceHeight)) : console.warn("lost skin:", l, ",you may load pics first")), i.alpha = o[10];
            var x = i.transform;
            0 != u && (_ = u * r), 0 != d && (c = d * a), 0 == _ && 0 == c || x.translate(-_, -c);
            var y = null;
            if (m || 1 !== f || 1 !== g || v || T) {
                (y = Ni._tempMt).identity(), y._bTransform = !0;
                var E = .0174532922222222 * (m - v),
                    A = .0174532922222222 * (m + T),
                    C = Math.cos(A),
                    b = Math.sin(A),
                    R = Math.sin(E),
                    w = Math.cos(E);
                y.a = f * C, y.b = f * b, y.c = -g * R, y.d = g * w, y.tx = y.ty = 0;
            }
            return y && (x = p.mul(x, y, x)), x.translate(o[1], o[2]), i;
        }
        _getTextureByUrl(t) {
            return Ke.getRes(t);
        }
        setAniData(t, e = null) {
            if (t.animations) {
                this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = t, this._parseNodeList(t);
                var i, s, r = {},
                    a = [],
                    n = t.animations,
                    h = n.length;
                for (i = 0; i < h; i++)
                    if (s = n[i], this._labels = null, (!e || e == s.name) && s) {
                        try {
                            this._calGraphicData(s);
                        } catch (t) {
                            console.warn("parse animation fail:" + s.name + ",empty animation created"), this._gList = [];
                        }
                        var o = {};
                        o.interval = 1e3 / s.frameRate, o.frames = this._gList, o.labels = this._labels, o.name = s.name, a.push(o), r[s.name] = o;
                    }
                this.animationList = a, this.animationDic = r;
            }
            Ni._temParam.length = 0;
        }
        parseByData(t) {
            var e, i;
            e = t.nodeRoot, i = t.aniO, delete t.nodeRoot, delete t.aniO, this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e, this._parseNodeList(e), this._labels = null;
            try {
                this._calGraphicData(i);
            } catch (t) {
                console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = [];
            }
            var s = t;
            return s.interval = 1e3 / i.frameRate, s.frames = this._gList, s.labels = this._labels, s.name = i.name, s;
        }
        setUpAniData(t) {
            if (t.animations) {
                var e, i, s = {},
                    r = [],
                    a = t.animations,
                    n = a.length;
                for (e = 0; e < n; e++)
                    if (i = a[e]) {
                        var h = {};
                        h.name = i.name, h.aniO = i, h.nodeRoot = t, r.push(h), s[i.name] = h;
                    }
                this.animationList = r, this.animationDic = s;
            }
        }
        _clear() {
            this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic = null;
        }
        static parseAnimationByData(t) {
            var e;
            return Ni._I || (Ni._I = new Ni()), e = Ni._I.parseByData(t), Ni._I._clear(), e;
        }
        static parseAnimationData(t) {
            var e;
            return Ni._I || (Ni._I = new Ni()), Ni._I.setUpAniData(t), (e = {}).animationList = Ni._I.animationList, e.animationDic = Ni._I.animationDic, Ni._I._clear(), e;
        }
    }
    Ni._drawTextureCmd = [
        ["skin", null],
        ["x", 0],
        ["y", 0],
        ["width", -1],
        ["height", -1],
        ["pivotX", 0],
        ["pivotY", 0],
        ["scaleX", 1],
        ["scaleY", 1],
        ["rotation", 0],
        ["alpha", 1],
        ["skewX", 0],
        ["skewY", 0],
        ["anchorX", 0],
        ["anchorY", 0]
    ], Ni._temParam = [], Ni._tempMt = new p();
    class Ui {
        constructor() {
            this.alpha = 1;
        }
    }
    class ki extends ai {
        constructor() {
            super(), this._setControlNode(this);
        }
        destroy(t = !0) {
            this.stop(), super.destroy(t), this._frames = null, this._labels = null;
        }
        play(t = 0, e = !0, i = "") {
            i && this._setFramesFromCache(i, !0), super.play(t, e, i);
        }
        _setFramesFromCache(t, e = !1) {
            if (this._url && (t = this._url + "#" + t), t && ki.framesMap[t]) {
                var i = ki.framesMap[t];
                return i instanceof Array ? (this._frames = ki.framesMap[t], this._count = this._frames.length) : (i.nodeRoot && (ki.framesMap[t] = Ni.parseAnimationByData(i), i = ki.framesMap[t]), this._frames = i.frames, this._count = this._frames.length, this._frameRateChanged || (this._interval = i.interval), this._labels = this._copyLabels(i.labels)), !0;
            }
            return e && console.log("ani not found:", t), !1;
        }
        _copyLabels(t) {
            if (!t) return null;
            var e, i;
            for (i in e = {}, t) e[i] = Y.copyArray([], t[i]);
            return e;
        }
        _frameLoop() {
            this._visible && this._style.alpha > .01 && this._frames && super._frameLoop();
        }
        _displayToIndex(t) {
            this._frames && (this.graphics = this._frames[t]);
        }
        get frames() {
            return this._frames;
        }
        set frames(t) {
            this._frames = t, t && (this._count = t.length, this._actionName && this._setFramesFromCache(this._actionName, !0), this.index = this._index);
        }
        set source(t) {
            t.indexOf(".ani") > -1 ? this.loadAnimation(t) : t.indexOf(".json") > -1 || t.indexOf("als") > -1 || t.indexOf("atlas") > -1 ? this.loadAtlas(t) : this.loadImages(t.split(","));
        }
        set autoAnimation(t) {
            this.play(0, !0, t);
        }
        set autoPlay(t) {
            t ? this.play() : this.stop();
        }
        clear() {
            return super.clear(), this.stop(), this.graphics = null, this._frames = null, this._labels = null, this;
        }
        loadImages(t, e = "") {
            return this._url = "", this._setFramesFromCache(e) || (this.frames = ki.framesMap[e] ? ki.framesMap[e] : ki.createFrames(t, e)), this;
        }
        loadAtlas(t, e = null, s = "") {
            this._url = "";
            var r = this;
            if (!r._setFramesFromCache(s)) {
                function onLoaded(i) {
                    t === i && (r.frames = ki.framesMap[s] ? ki.framesMap[s] : ki.createFrames(t, s), e && e.run());
                }
                Ke.getAtlas(t) ? onLoaded(t) : i.loader.load(t, v.create(null, onLoaded, [t]), null, Ke.ATLAS);
            }
            return this;
        }
        loadAnimation(t, e = null, s = null) {
            this._url = t;
            return this._actionName || (this._actionName = ""), this._setFramesFromCache(this._actionName) ? (this._setFramesFromCache(this._actionName, !0), this.index = 0, e && e.run()) : !s || Ke.getAtlas(s) ? this._loadAnimationData(t, e, s) : i.loader.load(s, v.create(this, this._loadAnimationData, [t, e, s]), null, Ke.ATLAS), this;
        }
        _loadAnimationData(t, e = null, s = null) {
            if (!s || Ke.getAtlas(s)) {
                var r = this;
                Ke.getRes(t) ? onLoaded(t) : i.loader.load(t, v.create(null, onLoaded, [t]), null, Ke.JSON);
            } else console.warn("atlas load fail:" + s);

            function onLoaded(i) {
                if (Ke.getRes(i)) {
                    if (t === i) {
                        var s;
                        if (ki.framesMap[t + "#"]) r._setFramesFromCache(r._actionName, !0), r.index = 0, r._resumePlay();
                        else {
                            var a = Ni.parseAnimationData(Ke.getRes(t));
                            if (!a) return;
                            var n, h, o = a.animationList,
                                l = o.length;
                            for (n = 0; n < l; n++) s = o[n], ki.framesMap[t + "#" + s.name] = s, h || (h = s);
                            h && (ki.framesMap[t + "#"] = h, r._setFramesFromCache(r._actionName, !0), r.index = 0), r._resumePlay();
                        }
                        e && e.run();
                    }
                    Ke.clearRes(t);
                } else ki.framesMap[t + "#"] && (r._setFramesFromCache(this._actionName, !0), r.index = 0, r._resumePlay(), e && e.run());
            }
        }
        static createFrames(t, e) {
            var i;
            if ("string" == typeof t) {
                var s = Ke.getAtlas(t);
                if (s && s.length) {
                    i = [];
                    for (var r = 0, a = s.length; r < a; r++) {
                        var n = new ge();
                        n.drawImage(Ke.getRes(s[r]), 0, 0), i.push(n);
                    }
                }
            } else if (t instanceof Array)
                for (i = [], r = 0, a = t.length; r < a; r++)(n = new ge()).loadImage(t[r], 0, 0), i.push(n);
            return e && (ki.framesMap[e] = i), i;
        }
        static clearCache(t) {
            var e, i = ki.framesMap,
                s = t + "#";
            for (e in i) e !== t && 0 !== e.indexOf(s) || delete ki.framesMap[e];
        }
    }
    ki.framesMap = {}, i.regClass(ki), Te.regClass("laya.display.Animation", ki), Te.regClass("Laya.Animation", ki);
    class Gi extends hi {
        constructor() {
            super(...arguments), this._initData = {};
        }
        set target(t) {
            this._target && this._target.off(Gi.EFFECT_BEGIN, this, this._onOtherBegin), this._target = t, this._target && this._target.on(Gi.EFFECT_BEGIN, this, this._onOtherBegin), this._addEvent();
        }
        get target() {
            return this._target;
        }
        _onOtherBegin(t) {
            t !== this && this.stop();
        }
        set playEvent(t) {
            this._playEvent = t, t && this._addEvent();
        }
        _addEvent() {
            this._target && this._playEvent && (this._setControlNode(this._target), this._target.on(this._playEvent, this, this._onPlayAction));
        }
        _onPlayAction() {
            this.play(0, !1);
        }
        play(t = 0, e = !0, i = "") {
            this._target && (this._target.event(Gi.EFFECT_BEGIN, [this]), this._recordInitData(), super.play(t, e, i));
        }
        _recordInitData() {
            var t, e, i;
            if (this._aniKeys)
                for (e = this._aniKeys.length, t = 0; t < e; t++) i = this._aniKeys[t], this._initData[i] = this._target[i];
        }
        set effectClass(t) {
            if (this._effectClass = Te.getClass(t), this._effectClass) {
                var e = this._effectClass.uiView;
                if (e) {
                    var i = e.animations;
                    if (i && i[0]) {
                        var s = i[0];
                        this._setUp({}, s), s.nodes && s.nodes[0] && (this._aniKeys = s.nodes[0].keys);
                    }
                }
            }
        }
        set effectData(t) {
            if (t) {
                var e = t.animations;
                if (e && e[0]) {
                    var i = e[0];
                    this._setUp({}, i), i.nodes && i.nodes[0] && (this._aniKeys = i.nodes[0].keys);
                }
            }
        }
        _displayToIndex(t) {
            if (this._animationData) {
                t < 0 && (t = 0), t > this._count && (t = this._count);
                var e, i = this._animationData.nodes,
                    s = i.length;
                for (s = s > 1 ? 1 : s, e = 0; e < s; e++) this._displayNodeToFrame(i[e], t);
            }
        }
        _displayNodeToFrame(t, e, i = null) {
            if (this._target) {
                var s, r, a, n, h, o, l, _, c, u = this._target,
                    d = t.frames,
                    p = t.keys,
                    f = p.length,
                    g = t.secondFrames;
                for (n = 0; n < f; n++) r = d[s = p[n]], -1 == (h = g[s]) ? a = this._initData[s] : e < h ? (_ = (l = t.keyframes[s])[0]).tween ? (null == (o = ei[_.tweenMethod]) && (o = ei.linearNone), c = l[1], a = o(e, this._initData[s], c.value - this._initData[s], c.index)) : a = this._initData[s] : a = r.length > e ? r[e] : r[r.length - 1], u[s] = a;
            }
        }
        _calculateKeyFrames(t) {
            super._calculateKeyFrames(t);
            var e, i, s = t.keyframes,
                r = (t.target, {});
            for (e in t.secondFrames = r, s)(i = s[e]).length <= 1 ? r[e] = -1 : r[e] = i[1].index;
        }
    }
    Gi.EFFECT_BEGIN = "effectbegin", Te.regClass("laya.display.EffectAnimation", Gi), Te.regClass("Laya.EffectAnimation", Gi);
    class Wi extends T {
        constructor() {
            super(), this._completeHandler = new v(this, this.onOneLoadComplete), this.reset();
        }
        reset() {
            this._toLoadList = [], this._isLoading = !1, this.totalCount = 0;
        }
        get leftCount() {
            return this._isLoading ? this._toLoadList.length + 1 : this._toLoadList.length;
        }
        get loadedCount() {
            return this.totalCount - this.leftCount;
        }
        load(t, e = !1, i = !0) {
            var s, r;
            if (t instanceof Array)
                for (r = t.length, s = 0; s < r; s++) this._addToLoadList(t[s], e);
            else this._addToLoadList(t, e);
            i && this._checkNext();
        }
        _addToLoadList(t, e = !1) {
            this._toLoadList.indexOf(t) >= 0 || Ke.getRes(t) || (e ? this._toLoadList.push({
                url: t
            }) : this._toLoadList.push(t), this.totalCount++);
        }
        _checkNext() {
            if (!this._isLoading) {
                if (0 == this._toLoadList.length) return void this.event(Wt.COMPLETE);
                var t;
                "string" == typeof(t = this._toLoadList.pop()) ? this.loadOne(t): this.loadOne(t.url, !0);
            }
        }
        loadOne(t, e = !1) {
            this._curUrl = t;
            var s = Y.getFileExtension(this._curUrl);
            e ? i.loader.create(t, this._completeHandler) : Wi.LoadableExtensions[s] ? i.loader.load(t, this._completeHandler, null, Wi.LoadableExtensions[s]) : t != qe.getFileLoadPath(t) || Wi.No3dLoadTypes[s] || !Qe.createMap[s] ? i.loader.load(t, this._completeHandler) : i.loader.create(t, this._completeHandler);
        }
        onOneLoadComplete() {
            this._isLoading = !1, Ke.getRes(this._curUrl) || console.log("Fail to load:", this._curUrl);
            var t, e = Y.getFileExtension(this._curUrl);
            Wi.LoadableExtensions[e] && ((t = Ke.getRes(this._curUrl)) && t instanceof ze && (t = t.json), t && (t.loadList && this.load(t.loadList, !1, !1), t.loadList3D && this.load(t.loadList3D, !0, !1)));
            "sk" == e && this.load(this._curUrl.replace(".sk", ".png"), !1, !1), this.event(Wt.PROGRESS, this.getProgress()), this._checkNext();
        }
        getProgress() {
            return this.loadedCount / this.totalCount;
        }
    }
    Wi.LoadableExtensions = {
        scene: Ke.JSON,
        scene3d: Ke.JSON,
        ani: Ke.JSON,
        ui: Ke.JSON,
        prefab: Ke.PREFAB
    }, Wi.No3dLoadTypes = {
        png: !0,
        jpg: !0,
        txt: !0
    };
    class Yi extends we {
        constructor(t = !0) {
            super(), this.autoDestroyAtClosed = !1, this.url = null, this._viewCreated = !1, this._$componentType = "Scene", this._setBit(me.NOT_READY, !0), Yi.unDestroyedScenes.push(this), this._scene = this, t && this.createChildren();
        }
        createChildren() {}
        loadScene(t) {
            var e = t.indexOf(".") > -1 ? t : t + ".scene",
                s = i.loader.getRes(e);
            if (s) this.createView(s);
            else {
                i.loader.resetProgress();
                var r = new Wi();
                r.on(Wt.COMPLETE, this, this._onSceneLoaded, [e]), r.load(e);
            }
        }
        _onSceneLoaded(t) {
            this.createView(i.Loader.getRes(t));
        }
        createView(t) {
            t && !this._viewCreated && (this._viewCreated = !0, _i.createByData(this, t));
        }
        getNodeByID(t) {
            return this._idMap ? this._idMap[t] : null;
        }
        open(t = !0, e = null) {
            t && Yi.closeAll(), Yi.root.addChild(this), this.onOpened(e);
        }
        onOpened(t) {}
        close(t = null) {
            this.onClosed(t), this.autoDestroyAtClosed ? this.destroy() : this.removeSelf();
        }
        onClosed(t = null) {}
        destroy(t = !0) {
            this._idMap = null, super.destroy(t);
            for (var e = Yi.unDestroyedScenes, i = e.length - 1; i > -1; i--)
                if (e[i] === this) return void e.splice(i, 1);
        }
        set scaleX(t) {
            super.get_scaleX() != t && (super.set_scaleX(t), this.event(Wt.RESIZE));
        }
        get scaleX() {
            return super.scaleX;
        }
        set scaleY(t) {
            super.get_scaleY() != t && (super.set_scaleY(t), this.event(Wt.RESIZE));
        }
        get scaleY() {
            return super.scaleY;
        }
        get width() {
            if (this._width) return this._width;
            for (var t = 0, e = this.numChildren - 1; e > -1; e--) {
                var i = this.getChildAt(e);
                i._visible && (t = Math.max(i._x + i.width * i.scaleX, t));
            }
            return t;
        }
        set width(t) {
            super.get_width() != t && (super.set_width(t), this.callLater(this._sizeChanged));
        }
        get height() {
            if (this._height) return this._height;
            for (var t = 0, e = this.numChildren - 1; e > -1; e--) {
                var i = this.getChildAt(e);
                i._visible && (t = Math.max(i._y + i.height * i.scaleY, t));
            }
            return t;
        }
        set height(t) {
            super.get_height() != t && (super.set_height(t), this.callLater(this._sizeChanged));
        }
        _sizeChanged() {
            this.event(Wt.RESIZE);
        }
        static get root() {
            return Yi._root || (Yi._root = i.stage.addChild(new we()), Yi._root.name = "root", i.stage.on("resize", null, () => {
                Yi._root.size(i.stage.width, i.stage.height), Yi._root.event(Wt.RESIZE);
            }), Yi._root.size(i.stage.width, i.stage.height), Yi._root.event(Wt.RESIZE)), Yi._root;
        }
        get timer() {
            return this._timer || i.timer;
        }
        set timer(t) {
            this._timer = t;
        }
        static load(t, e = null, s = null) {
            i.loader.resetProgress();
            var r = new Wi();

            function onProgress(t) {
                Yi._loadPage && Yi._loadPage.event("progress", t), s && s.runWith(t);
            }
            r.on(Wt.PROGRESS, null, onProgress), r.once(Wt.COMPLETE, null, function() {
                r.off(Wt.PROGRESS, null, onProgress);
                var s = i.Loader.getRes(t);
                if (!s) throw "Can not find scene:" + t;
                if (!s.props) throw "Scene data is error:" + t;
                var a = s.props.runtime ? s.props.runtime : s.type,
                    n = i.ClassUtils.getClass(a);
                if ("instance" == s.props.renderType) var h = n.instance || (n.instance = new n());
                else h = new n();
                if (!(h && h instanceof xe)) throw "Can not find scene:" + a;
                h.url = t, h._getBit(me.NOT_READY) ? (h.on("onViewCreated", null, function() {
                    e && e.runWith(h);
                }), h.createView(s)) : e && e.runWith(h), Yi.hideLoadingPage();
            }), r.load(t);
        }
        static open(t, e = !0, i = null, s = null, r = null) {
            if (i instanceof v) {
                var a = s;
                s = i, i = a;
            }
            Yi.showLoadingPage(), Yi.load(t, v.create(null, this._onSceneLoaded, [e, s, i]), r);
        }
        static _onSceneLoaded(t, e, i, s) {
            s.open(t, i), e && e.runWith(s);
        }
        static close(t, e = "") {
            for (var i = !1, s = Yi.unDestroyedScenes, r = 0, a = s.length; r < a; r++) {
                var n = s[r];
                n && n.parent && n.url === t && n.name == e && (n.close(), i = !0);
            }
            return i;
        }
        static closeAll() {
            for (var t = Yi.root, e = 0, i = t.numChildren; e < i; e++) {
                var s = t.getChildAt(0);
                s instanceof Yi ? s.close() : s.removeSelf();
            }
        }
        static destroy(t, e = "") {
            for (var i = !1, s = Yi.unDestroyedScenes, r = 0, a = s.length; r < a; r++) {
                var n = s[r];
                n.url === t && n.name == e && (n.destroy(), i = !0);
            }
            return i;
        }
        static gc() {
            E.destroyUnusedResources();
        }
        static setLoadingPage(t) {
            Yi._loadPage != t && (Yi._loadPage = t);
        }
        static showLoadingPage(t = null, e = 500) {
            Yi._loadPage && (i.systemTimer.clear(null, Yi._showLoading), i.systemTimer.clear(null, Yi._hideLoading), i.systemTimer.once(e, null, Yi._showLoading, [t], !1));
        }
        static _showLoading(t) {
            i.stage.addChild(Yi._loadPage), Yi._loadPage.onOpened(t);
        }
        static _hideLoading() {
            Yi._loadPage.close();
        }
        static hideLoadingPage(t = 500) {
            Yi._loadPage && (i.systemTimer.clear(null, Yi._showLoading), i.systemTimer.clear(null, Yi._hideLoading), i.systemTimer.once(t, null, Yi._hideLoading));
        }
    }
    Yi.unDestroyedScenes = [], i.regClass(Yi), Te.regClass("laya.display.Scene", Yi), Te.regClass("Laya.Scene", Yi);
    class Vi {
        constructor() {
            this._paramData = null;
        }
        static create(t, e, i, s, r) {
            return null;
        }
        recover() {
            this._graphicsCmdEncoder = null, s.recover("DrawCanvasCmd", this);
        }
        get cmdID() {
            return Vi.ID;
        }
    }
    Vi.ID = "DrawCanvasCmd", Vi._DRAW_IMAGE_CMD_ENCODER_ = null, Vi._PARAM_TEXTURE_POS_ = 2, Vi._PARAM_VB_POS_ = 5;
    class Hi {
        static create(t) {
            var e = s.getItemByClass("DrawParticleCmd", Hi);
            return e._templ = t, e;
        }
        recover() {
            this._templ = null, s.recover("DrawParticleCmd", this);
        }
        run(t, e, i) {
            t.drawParticle(e, i, this._templ);
        }
        get cmdID() {
            return Hi.ID;
        }
    }
    Hi.ID = "DrawParticleCmd";
    class Xi {
        constructor() {}
        paramChanged() {
            wi.systemTimer.callLater(this, this.buildFilter);
        }
        buildFilter() {
            this._target && this.addFilter(this._target);
        }
        addFilter(t) {
            var e;
            t && (t.filters ? (e = t.filters).indexOf(this._filter) < 0 && (e.push(this._filter), t.filters = Y.copyArray([], e)) : t.filters = [this._filter]);
        }
        removeFilter(t) {
            t && (t.filters = null);
        }
        set target(t) {
            this._target != t && (this._target = t, this.paramChanged());
        }
    }
    class zi {
        render(t, e, i, s, r) {
            var a = U.create(L.TEXTURE2D, 0);
            this.setShaderInfo(a, r, t.width, t.height), e.drawTarget(t, 0, 0, i, s, p.EMPTY.identity(), a);
        }
        setShaderInfo(t, e, i, s) {
            t.defines.add(W.BLUR);
            var r = t;
            zi.blurinfo[0] = i, zi.blurinfo[1] = s, r.blurInfo = zi.blurinfo;
            var a = e.strength / 3,
                n = a * a;
            e.strength_sig2_2sig2_gauss1[0] = e.strength, e.strength_sig2_2sig2_gauss1[1] = n, e.strength_sig2_2sig2_gauss1[2] = 2 * n, e.strength_sig2_2sig2_gauss1[3] = 1 / (2 * Math.PI * n), r.strength_sig2_2sig2_gauss1 = e.strength_sig2_2sig2_gauss1;
        }
    }
    zi.blurinfo = new Array(2);
    class ji extends W {
        constructor(t = 4) {
            super(), this.strength_sig2_2sig2_gauss1 = [], this.strength = t, this._glRender = new zi();
        }
        get type() {
            return W.BLUR;
        }
        getStrenth_sig2_2sig2_native() {
            this.strength_sig2_native || (this.strength_sig2_native = new Float32Array(4));
            var t = this.strength / 3,
                e = t * t;
            return this.strength_sig2_native[0] = this.strength, this.strength_sig2_native[1] = e, this.strength_sig2_native[2] = 2 * e, this.strength_sig2_native[3] = 1 / (2 * Math.PI * e), this.strength_sig2_native;
        }
    }
    class Ki extends ri {
        constructor() {
            super(...arguments), this.duration = 1e3, this.delay = 0, this.repeat = 0, this.autoDestroyAtComplete = !0;
        }
        _onAwake() {
            this.target = this.target || this.owner, this.autoDestroyAtComplete && (this._comlete = v.create(this.target, this.target.destroy, null, !1)), this.eventName ? this.owner.on(this.eventName, this, this._exeTween) : this._exeTween();
        }
        _exeTween() {
            this._tween = this._doTween(), this._tween.repeat = this.repeat;
        }
        _doTween() {
            return null;
        }
        onReset() {
            this.duration = 1e3, this.delay = 0, this.repeat = 0, this.ease = null, this.target = null, this.eventName && (this.owner.off(this.eventName, this, this._exeTween), this.eventName = null), this._comlete && (this._comlete.recover(), this._comlete = null), this._tween && (this._tween.clear(), this._tween = null);
        }
    }
    class qi {
        setShaderInfo(t, e, i, s) {
            t.defines.add(s.type);
            var r = t;
            r.u_blurInfo1 = s._sv_blurInfo1;
            var a = s._sv_blurInfo2;
            a[0] = e, a[1] = i, r.u_blurInfo2 = a, r.u_color = s.getColor();
        }
        render(t, e, i, s, r) {
            var a = i,
                n = s,
                h = U.create(L.TEXTURE2D, 0);
            this.setShaderInfo(h, a, n, r);
            var o = U.create(L.TEXTURE2D, 0),
                l = p.TEMP.identity();
            e.drawTarget(t, 0, 0, a, n, l, h), e.drawTarget(t, 0, 0, a, n, l, o);
        }
    }
    class Qi extends W {
        constructor(t, e = 4, i = 6, s = 6) {
            super(), this._elements = new Float32Array(9), this._sv_blurInfo1 = new Array(4), this._sv_blurInfo2 = [0, 0, 1, 0], this._color = new V(t), this.blur = Math.min(e, 20), this.offX = i, this.offY = s, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = this.blur, this._sv_blurInfo1[2] = i, this._sv_blurInfo1[3] = -s, this._glRender = new qi();
        }
        get type() {
            return ji.GLOW;
        }
        get offY() {
            return this._elements[6];
        }
        set offY(t) {
            this._elements[6] = t, this._sv_blurInfo1[3] = -t;
        }
        get offX() {
            return this._elements[5];
        }
        set offX(t) {
            this._elements[5] = t, this._sv_blurInfo1[2] = t;
        }
        getColor() {
            return this._color.arrColor;
        }
        get blur() {
            return this._elements[4];
        }
        set blur(t) {
            this._elements[4] = t, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = t;
        }
        getColorNative() {
            this._color_native || (this._color_native = new Float32Array(4));
            var t = this.getColor();
            return this._color_native[0] = t[0], this._color_native[1] = t[1], this._color_native[2] = t[2], this._color_native[3] = t[3], this._color_native;
        }
        getBlurInfo1Native() {
            return this._blurInof1_native || (this._blurInof1_native = new Float32Array(4)), this._blurInof1_native[0] = this._blurInof1_native[1] = this.blur, this._blurInof1_native[2] = this.offX, this._blurInof1_native[3] = this.offY, this._blurInof1_native;
        }
        getBlurInfo2Native() {
            return this._blurInof2_native || (this._blurInof2_native = new Float32Array(4)), this._blurInof2_native[2] = 1, this._blurInof2_native;
        }
    }
    class Zi {}
    Zi.STANDARD = 0, Zi.LEFT = 1, Zi.RIGHT = 2, Zi.NUM_PAD = 3;
    class $i {}
    $i.NUMBER_0 = 48, $i.NUMBER_1 = 49, $i.NUMBER_2 = 50, $i.NUMBER_3 = 51, $i.NUMBER_4 = 52, $i.NUMBER_5 = 53, $i.NUMBER_6 = 54, $i.NUMBER_7 = 55, $i.NUMBER_8 = 56, $i.NUMBER_9 = 57, $i.A = 65, $i.B = 66, $i.C = 67, $i.D = 68, $i.E = 69, $i.F = 70, $i.G = 71, $i.H = 72, $i.I = 73, $i.J = 74, $i.K = 75, $i.L = 76, $i.M = 77, $i.N = 78, $i.O = 79, $i.P = 80, $i.Q = 81, $i.R = 82, $i.S = 83, $i.T = 84, $i.U = 85, $i.V = 86, $i.W = 87, $i.X = 88, $i.Y = 89, $i.Z = 90, $i.F1 = 112, $i.F2 = 113, $i.F3 = 114, $i.F4 = 115, $i.F5 = 116, $i.F6 = 117, $i.F7 = 118, $i.F8 = 119, $i.F9 = 120, $i.F10 = 121, $i.F11 = 122, $i.F12 = 123, $i.F13 = 124, $i.F14 = 125, $i.F15 = 126, $i.NUMPAD = 21, $i.NUMPAD_0 = 96, $i.NUMPAD_1 = 97, $i.NUMPAD_2 = 98, $i.NUMPAD_3 = 99, $i.NUMPAD_4 = 100, $i.NUMPAD_5 = 101, $i.NUMPAD_6 = 102, $i.NUMPAD_7 = 103, $i.NUMPAD_8 = 104, $i.NUMPAD_9 = 105, $i.NUMPAD_ADD = 107, $i.NUMPAD_DECIMAL = 110, $i.NUMPAD_DIVIDE = 111, $i.NUMPAD_ENTER = 108, $i.NUMPAD_MULTIPLY = 106, $i.NUMPAD_SUBTRACT = 109, $i.SEMICOLON = 186, $i.EQUAL = 187, $i.COMMA = 188, $i.MINUS = 189, $i.PERIOD = 190, $i.SLASH = 191, $i.BACKQUOTE = 192, $i.LEFTBRACKET = 219, $i.BACKSLASH = 220, $i.RIGHTBRACKET = 221, $i.QUOTE = 222, $i.ALTERNATE = 18, $i.BACKSPACE = 8, $i.CAPS_LOCK = 20, $i.COMMAND = 15, $i.CONTROL = 17, $i.DELETE = 46, $i.ENTER = 13, $i.ESCAPE = 27, $i.PAGE_UP = 33, $i.PAGE_DOWN = 34, $i.END = 35, $i.HOME = 36, $i.LEFT = 37, $i.UP = 38, $i.RIGHT = 39, $i.DOWN = 40, $i.SHIFT = 16, $i.SPACE = 32, $i.TAB = 9, $i.INSERT = 45;
    class Ji {
        constructor() {}
        static getMCDName(t) {
            return Ji._typeToNameDic[t];
        }
        static showRenderTypeInfo(t, e = !1) {
            if (e || !Ji.showedDic[t]) {
                if (Ji.showedDic[t] = !0, !Ji._rendertypeToStrDic[t]) {
                    var i, s = [];
                    for (i = 1; i <= t;) i & t && s.push(Ji.getMCDName(i & t)), i <<= 1;
                    Ji._rendertypeToStrDic[t] = s.join(",");
                }
                console.log("cmd:", Ji._rendertypeToStrDic[t]);
            }
        }
        static __init__() {
            Ji._typeToNameDic[ae.ALPHA] = "ALPHA", Ji._typeToNameDic[ae.TRANSFORM] = "TRANSFORM", Ji._typeToNameDic[ae.TEXTURE] = "TEXTURE", Ji._typeToNameDic[ae.GRAPHICS] = "GRAPHICS", Ji._typeToNameDic[ae.ONECHILD] = "ONECHILD", Ji._typeToNameDic[ae.CHILDS] = "CHILDS", Ji._typeToNameDic[ae.TRANSFORM | ae.ALPHA] = "TRANSFORM|ALPHA", Ji._typeToNameDic[ae.CANVAS] = "CANVAS", Ji._typeToNameDic[ae.BLEND] = "BLEND", Ji._typeToNameDic[ae.FILTERS] = "FILTERS", Ji._typeToNameDic[ae.MASK] = "MASK", Ji._typeToNameDic[ae.CLIP] = "CLIP", Ji._typeToNameDic[ae.LAYAGL3D] = "LAYAGL3D";
        }
        render(t, e, i) {
            Ji._addType(this._renderType), Ji.showRenderTypeInfo(this._renderType), Re.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0;
        }
        _stageRender(t, e, s) {
            Ji._countStart(), Ji._PreStageRender.call(i.stage, t, e, s), Ji._countEnd();
        }
        static _countStart() {
            var t;
            for (t in Ji._countDic) Ji._countDic[t] = 0;
        }
        static _countEnd() {
            Ji._i++, Ji._i > 60 && (Ji.showCountInfo(), Ji._i = 0);
        }
        static _addType(t) {
            Ji._countDic[t] ? Ji._countDic[t] += 1 : Ji._countDic[t] = 1;
        }
        static showCountInfo() {
            var t;
            for (t in console.log("==================="), Ji._countDic) console.log("count:" + Ji._countDic[t]), Ji.showRenderTypeInfo(t, !0);
        }
        static enableQuickTest() {
            Ji.__init__(), we.prototype.render = Ji.prototype.render, Ji._PreStageRender = Fe.prototype.render, Fe.prototype.render = Ji.prototype._stageRender;
        }
    }
    Ji.showedDic = {}, Ji._rendertypeToStrDic = {}, Ji._typeToNameDic = {}, Ji._countDic = {}, Ji._i = 0;
    class ts {
        static enable(t, e, s = 2) {
            ts.type = s, i.loader.load(t, v.create(null, ts.onManifestLoaded, [e]), null, Ke.JSON);
        }
        static onManifestLoaded(t, e) {
            ts.manifest = e, y.customFormat = ts.addVersionPrefix, t.run(), e || console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。");
        }
        static addVersionPrefix(t) {
            return t = y.getAdptedFilePath(t), ts.manifest && ts.manifest[t] ? ts.type == ts.FILENAME_VERSION ? ts.manifest[t] : ts.manifest[t] + "/" + t : t;
        }
    }
    ts.FOLDER_VERSION = 1, ts.FILENAME_VERSION = 2, ts.type = ts.FOLDER_VERSION;
    class es extends T {
        constructor(t = null, e = 0, i = null, s = null) {
            super(), this.disableInput = !1, this.protocols = [], this._byteClass = i || je, this.protocols = s, this.endian = es.BIG_ENDIAN, t && e > 0 && e < 65535 && this.connect(t, e);
        }
        get input() {
            return this._input;
        }
        get output() {
            return this._output;
        }
        get connected() {
            return this._connected;
        }
        get endian() {
            return this._endian;
        }
        set endian(t) {
            this._endian = t, null != this._input && (this._input.endian = t), null != this._output && (this._output.endian = t);
        }
        connect(t, e) {
            var i = "ws://" + t + ":" + e;
            this.connectByUrl(i);
        }
        connectByUrl(t) {
            null != this._socket && this.close(), this._socket && this.cleanSocket(), this.protocols && 0 != this.protocols.length ? this._socket = new jt.window.WebSocket(t, this.protocols) : this._socket = new jt.window.WebSocket(t), this._socket.binaryType = "arraybuffer", this._output = new this._byteClass(), this._output.endian = this.endian, this._input = new this._byteClass(), this._input.endian = this.endian, this._addInputPosition = 0, this._socket.onopen = (t => {
                this._onOpen(t);
            }), this._socket.onmessage = (t => {
                this._onMessage(t);
            }), this._socket.onclose = (t => {
                this._onClose(t);
            }), this._socket.onerror = (t => {
                this._onError(t);
            });
        }
        cleanSocket() {
            this.close(), this._connected = !1, this._socket.onopen = null, this._socket.onmessage = null, this._socket.onclose = null, this._socket.onerror = null, this._socket = null;
        }
        close() {
            if (null != this._socket) try {
                this._socket.close();
            } catch (t) {}
        }
        _onOpen(t) {
            this._connected = !0, this.event(Wt.OPEN, t);
        }
        _onMessage(t) {
            if (t && t.data) {
                var e = t.data;
                if (this.disableInput && e) this.event(Wt.MESSAGE, e);
                else {
                    this._input.length > 0 && this._input.bytesAvailable < 1 && (this._input.clear(), this._addInputPosition = 0);
                    var i = this._input.pos;
                    !this._addInputPosition && (this._addInputPosition = 0), this._input.pos = this._addInputPosition, e && ("string" == typeof e ? this._input.writeUTFBytes(e) : this._input.writeArrayBuffer(e), this._addInputPosition = this._input.pos, this._input.pos = i), this.event(Wt.MESSAGE, e);
                }
            }
        }
        _onClose(t) {
            this._connected = !1, this.event(Wt.CLOSE, t);
        }
        _onError(t) {
            this.event(Wt.ERROR, t);
        }
        send(t) {
            this._socket.send(t);
        }
        flush() {
            if (this._output && this._output.length > 0) {
                var t;
                try {
                    this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length));
                } catch (e) {
                    t = e;
                }
                this._output.endian = this.endian, this._output.clear(), t && this.event(Wt.ERROR, t);
            }
        }
    }
    es.LITTLE_ENDIAN = "littleEndian", es.BIG_ENDIAN = "bigEndian";
    class is {
        constructor() {
            this.reset();
        }
        setData(t, e, i, s) {
            return this.char = t, this.charNum = t.charCodeAt(0), this.x = this.y = 0, this.width = e, this.height = i, this.style = s, this.isWord = !is._isWordRegExp.test(t), this;
        }
        reset() {
            return this.x = this.y = this.width = this.height = 0, this.isWord = !1, this.char = null, this.charNum = 0, this.style = null, this;
        }
        recover() {
            s.recover("HTMLChar", this.reset());
        }
        static create() {
            return s.getItemByClass("HTMLChar", is);
        }
        _isChar() {
            return !0;
        }
        _getCSSStyle() {
            return this.style;
        }
    }
    is._isWordRegExp = new RegExp("[\\w.]", "");
    class ss {
        static enable() {
            ss._logdiv || (ss._logdiv = jt.createElement("div"), ss._logdiv.style.cssText = "border:white;padding:4px;overflow-y:auto;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;", jt.document.body.appendChild(ss._logdiv), ss._btn = jt.createElement("button"), ss._btn.innerText = "Hide", ss._btn.style.cssText = "z-index:1000001;position: absolute;left:10px;top:10px;", ss._btn.onclick = ss.toggle, jt.document.body.appendChild(ss._btn));
        }
        static toggle() {
            var t = ss._logdiv.style;
            "" === t.display ? (ss._btn.innerText = "Show", t.display = "none") : (ss._btn.innerText = "Hide", t.display = "");
        }
        static print(t) {
            ss._logdiv && (ss._count >= ss.maxCount && ss.clear(), ss._count++, ss._logdiv.innerText += t + "\n", ss.autoScrollToBottom && ss._logdiv.scrollHeight - ss._logdiv.scrollTop - ss._logdiv.clientHeight < 50 && (ss._logdiv.scrollTop = ss._logdiv.scrollHeight));
        }
        static clear() {
            ss._logdiv.innerText = "", ss._count = 0;
        }
    }
    ss._count = 0, ss.maxCount = 50, ss.autoScrollToBottom = !0;
    let rs = 300;
    class as {
        constructor(t, e, i, s) {
            this.scale = 1, this.datas = new Array(rs), this.datapos = 0, this.id = t, this.color = e, this.name = i, this.scale = s;
        }
        addData(t) {
            this.datas[this.datapos] = t, this.datapos++, this.datapos %= rs;
        }
    }
    class ns extends we {
        constructor() {
            super(), this.datas = [], this.xdata = new Array(ns.DATANUM), this.ydata = new Array(ns.DATANUM), this.hud_width = 800, this.hud_height = 200, this.gMinV = 0, this.gMaxV = 100, this.textSpace = 40, this.sttm = 0, ns.inst = this, this._renderType |= ae.CUSTOM, this._setRenderType(this._renderType), this._setCustomRender(), this.addDataDef(0, 16777215, "frame", 1), this.addDataDef(1, 65280, "update", 1), this.addDataDef(2, 16711680, "flush", 1), ns._now = performance ? performance.now.bind(performance) : Date.now;
        }
        now() {
            return ns._now();
        }
        start() {
            this.sttm = ns._now();
        }
        end(t) {
            var e = ns._now() - this.sttm;
            this.updateValue(t, e);
        }
        config(t, e) {
            this.hud_width = t, this.hud_height = e;
        }
        addDataDef(t, e, i, s) {
            this.datas[t] = new as(t, e, i, s);
        }
        updateValue(t, e) {
            this.datas[t].addData(e);
        }
        v2y(t) {
            this._y, this.hud_height, this.gMinV, this.gMaxV;
            return this._y + this.hud_height * (1 - (t - this.gMinV) / this.gMaxV);
        }
        drawHLine(t, e, i, s) {
            var r = this._x,
                a = (this._x, this.hud_width, this.v2y(e));
            t.fillText(s, r, a - 6, null, "green", null), r += this.textSpace, t.fillStyle = i, t.fillRect(r, a, this._x + this.hud_width, 1, null);
        }
        customRender(t, e, i) {
            var s = performance.now();
            ns._lastTm <= 0 && (ns._lastTm = s), this.updateValue(0, s - ns._lastTm), ns._lastTm = s, t.save(), t.fillRect(this._x, this._y, this.hud_width, this.hud_height + 4, "#000000cc"), t.globalAlpha = .9, this.drawHLine(t, 0, "green", "    0"), this.drawHLine(t, 10, "green", "  10"), this.drawHLine(t, 16.667, "red", " "), this.drawHLine(t, 20, "green", "50|20"), this.drawHLine(t, 33.334, "yellow", ""), this.drawHLine(t, 16.667 * 3, "yellow", ""), this.drawHLine(t, 66.668, "yellow", ""), this.drawHLine(t, 50, "green", "20|50"), this.drawHLine(t, 100, "green", "10|100");
            for (var r = 0, a = this.datas.length; r < a; r++) {
                var n = this.datas[r];
                if (n) {
                    var h = n.datas.length,
                        o = (this.hud_width - this.textSpace) / h,
                        l = n.datapos,
                        _ = this._x + this.textSpace;
                    t.fillStyle = n.color;
                    for (var c = h; l < c; l++) {
                        var u = this.v2y(n.datas[l] * n.scale);
                        t.fillRect(_, u, o, this.hud_height + this._y - u, null), _ += o;
                    }
                    for (l = 0; l < n.datapos; l++) u = this.v2y(n.datas[l] * n.scale), t.fillRect(_, u, o, this.hud_height + this._y - u, null), _ += o;
                }
            }
            t.restore();
        }
    }
    ns._lastTm = 0, ns._now = null, ns.DATANUM = 300, ns.drawTexTm = 0;
    class hs {
        constructor() {
            this.maxCount = 1e3;
        }
        getCacheList() {
            return s.getPoolBySign(this.sign);
        }
        tryDispose(t) {
            var e;
            (e = s.getPoolBySign(this.sign)).length > this.maxCount && e.splice(this.maxCount, e.length - this.maxCount);
        }
        static addPoolCacheManager(t, e = 100) {
            var i;
            (i = new hs()).sign = t, i.maxCount = e, pe.regCacheByFunction(Y.bind(i.tryDispose, i), Y.bind(i.getCacheList, i));
        }
    }
    class os extends T {
        constructor() {
            super(...arguments), this._tweenDic = {}, this._tweenDataList = [], this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, this._firstTweenDic = {}, this._startTimeSort = !1, this._endTimeSort = !1, this._loopKey = !1, this.scale = 1, this._frameRate = 60, this._frameIndex = 0, this._total = 0;
        }
        static to(t, e, i, s = null, r = 0) {
            return new os().to(t, e, i, s, r);
        }
        static from(t, e, i, s = null, r = 0) {
            return new os().from(t, e, i, s, r);
        }
        to(t, e, i, s = null, r = 0) {
            return this._create(t, e, i, s, r, !0);
        }
        from(t, e, i, s = null, r = 0) {
            return this._create(t, e, i, s, r, !1);
        }
        _create(t, e, i, r, a, n) {
            var h = s.getItemByClass("tweenData", ls);
            return h.isTo = n, h.type = 0, h.target = t, h.duration = i, h.data = e, h.startTime = this._startTime + a, h.endTime = h.startTime + h.duration, h.ease = r, this._startTime = Math.max(h.endTime, this._startTime), this._tweenDataList.push(h), this._startTimeSort = !0, this._endTimeSort = !0, this;
        }
        addLabel(t, e) {
            var i = s.getItemByClass("tweenData", ls);
            return i.type = 1, i.data = t, i.endTime = i.startTime = this._startTime + e, this._labelDic || (this._labelDic = {}), this._labelDic[t] = i, this._tweenDataList.push(i), this;
        }
        removeLabel(t) {
            if (this._labelDic && this._labelDic[t]) {
                var e = this._labelDic[t];
                if (e) {
                    var i = this._tweenDataList.indexOf(e);
                    i > -1 && this._tweenDataList.splice(i, 1);
                }
                delete this._labelDic[t];
            }
        }
        gotoTime(t) {
            if (null != this._tweenDataList && 0 != this._tweenDataList.length) {
                var e, i, r, a;
                for (var n in this._firstTweenDic)
                    if (i = this._firstTweenDic[n])
                        for (var h in i) h in i.diyTarget && (i.diyTarget[h] = i[h]);
                for (n in this._tweenDic)(e = this._tweenDic[n]).clear(), delete this._tweenDic[n];
                if (this._index = 0, this._gidIndex = 0, this._currTime = t, this._lastTime = jt.now(), null == this._endTweenDataList || this._endTimeSort) {
                    this._endTimeSort = !1, this._endTweenDataList = r = this._tweenDataList.concat(), r.sort(function(t, e) {
                        return t.endTime > e.endTime ? 1 : t.endTime < e.endTime ? -1 : 0;
                    });
                } else r = this._endTweenDataList;
                for (var o = 0, l = r.length; o < l; o++)
                    if (0 == (a = r[o]).type) {
                        if (!(t >= a.endTime)) break;
                        this._index = Math.max(this._index, o + 1);
                        var _ = a.data;
                        if (a.isTo)
                            for (var c in _) a.target[c] = _[c];
                    }
                for (o = 0, l = this._tweenDataList.length; o < l; o++) 0 == (a = this._tweenDataList[o]).type && t >= a.startTime && t < a.endTime && (this._index = Math.max(this._index, o + 1), this._gidIndex++, (e = s.getItemByClass("tween", ii))._create(a.target, a.data, a.duration, a.ease, v.create(this, this._animComplete, [this._gidIndex]), 0, !1, a.isTo, !0, !1), e.setStartTime(this._currTime - (t - a.startTime)), e._updateEase(this._currTime), e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e);
            }
        }
        gotoLabel(t) {
            if (null != this._labelDic) {
                var e = this._labelDic[t];
                e && this.gotoTime(e.startTime);
            }
        }
        pause() {
            i.timer.clear(this, this._update);
        }
        resume() {
            this.play(this._currTime, this._loopKey);
        }
        play(t = 0, e = !1) {
            if (this._tweenDataList) {
                if (this._startTimeSort) {
                    this._startTimeSort = !1, this._tweenDataList.sort(function(t, e) {
                        return t.startTime > e.startTime ? 1 : t.startTime < e.startTime ? -1 : 0;
                    });
                    for (var s = 0, r = this._tweenDataList.length; s < r; s++) {
                        var a = this._tweenDataList[s];
                        if (null != a && 0 == a.type) {
                            var n = a.target,
                                h = n.$_GID || (n.$_GID = Y.getGID()),
                                o = null;
                            for (var l in null == this._firstTweenDic[h] ? ((o = {}).diyTarget = n, this._firstTweenDic[h] = o) : o = this._firstTweenDic[h], a.data) null == o[l] && (o[l] = n[l]);
                        }
                    }
                }
                "string" == typeof t ? this.gotoLabel(t) : this.gotoTime(t), this._loopKey = e, this._lastTime = jt.now(), i.timer.frameLoop(1, this, this._update);
            }
        }
        _update() {
            if (this._currTime >= this._startTime) {
                if (!this._loopKey) {
                    for (var t in this._tweenDic)(e = this._tweenDic[t]).complete();
                    return this._complete(), void this.pause();
                }
                if (this._complete(), !this._tweenDataList) return;
                this.gotoTime(0);
            }
            var e, i = jt.now(),
                r = i - this._lastTime,
                a = this._currTime += r * this.scale;
            for (t in this._lastTime = i, this._tweenDic)(e = this._tweenDic[t])._updateEase(a);
            if (0 != this._tweenDataList.length && this._index < this._tweenDataList.length) {
                var n = this._tweenDataList[this._index];
                a >= n.startTime && (this._index++, 0 == n.type ? (this._gidIndex++, (e = s.getItemByClass("tween", ii))._create(n.target, n.data, n.duration, n.ease, v.create(this, this._animComplete, [this._gidIndex]), 0, !1, n.isTo, !0, !1), e.setStartTime(a), e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e, e._updateEase(a)) : this.event(Wt.LABEL, n.data));
            }
        }
        _animComplete(t) {
            this._tweenDic[t] && delete this._tweenDic[t];
        }
        _complete() {
            this.event(Wt.COMPLETE);
        }
        get index() {
            return this._frameIndex;
        }
        set index(t) {
            this._frameIndex = t, this.gotoTime(this._frameIndex / this._frameRate * 1e3);
        }
        get total() {
            return this._total = Math.floor(this._startTime / 1e3 * this._frameRate), this._total;
        }
        reset() {
            var t, e, s;
            if (this._labelDic)
                for (t in this._labelDic) delete this._labelDic[t];
            for (t in this._tweenDic) this._tweenDic[t].clear(), delete this._tweenDic[t];
            for (t in this._firstTweenDic) delete this._firstTweenDic[t];
            if (this._endTweenDataList = null, this._tweenDataList && this._tweenDataList.length)
                for (s = this._tweenDataList.length, e = 0; e < s; e++) this._tweenDataList[e] && this._tweenDataList[e].destroy();
            this._tweenDataList.length = 0, this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, this.scale = 1, i.timer.clear(this, this._update);
        }
        destroy() {
            this.reset(), this._labelDic = null, this._tweenDic = null, this._tweenDataList = null, this._firstTweenDic = null;
        }
    }
    class ls {
        constructor() {
            this.type = 0, this.isTo = !0;
        }
        destroy() {
            this.target = null, this.ease = null, this.data = null, this.isTo = !0, this.type = 0, s.recover("tweenData", this);
        }
    }
    class _s {
        characterMapContains(t) {
            for (var e = 0; e < _s.charsMap.length; ++e)
                if (_s.charsMap[e][0] === t) return !0;
            return !1;
        }
        getCharRep(t) {
            for (var e = 0; e < _s.charsMap.length; ++e)
                if (_s.charsMap[e][0] === t) return _s.charsMap[e];
            return !1;
        }
        getCombCharRep(t, e) {
            for (var i = 0; i < _s.combCharsMap.length; ++i)
                if (_s.combCharsMap[i][0][0] === t && _s.combCharsMap[i][0][1] === e) return _s.combCharsMap[i];
            return !1;
        }
        isTransparent(t) {
            for (var e = 0; e < _s.transChars.length; ++e)
                if (_s.transChars[e] === t) return !0;
            return !1;
        }
        getOriginalCharsFromCode(t) {
            var e;
            for (e = 0; e < _s.charsMap.length; ++e)
                if (_s.charsMap[e].indexOf(t) > -1) return String.fromCharCode(_s.charsMap[e][0]);
            for (e = 0; e < _s.combCharsMap.length; ++e)
                if (_s.combCharsMap[e].indexOf(t) > -1) return String.fromCharCode(_s.combCharsMap[e][0][0]) + String.fromCharCode(_s.combCharsMap[e][0][1]);
            return String.fromCharCode(t);
        }
        convertArabic(t) {
            for (var e, i, s = "", r = 0; r < t.length; ++r) {
                var a = t.charCodeAt(r);
                if (this.characterMapContains(a)) {
                    for (var n = null, h = null, o = r - 1, l = r + 1; o >= 0 && this.isTransparent(t.charCodeAt(o)); --o);
                    for ((!(e = !!(n = o >= 0 ? t.charCodeAt(o) : null) && this.getCharRep(n)) || null == e[2] && null == e[3]) && (n = null); l < t.length && this.isTransparent(t.charCodeAt(l)); ++l);
                    if ((!(e = !!(h = l < t.length ? t.charCodeAt(l) : null) && this.getCharRep(h)) || null == e[3] && null == e[4]) && (h = null), 1604 === a && null != h && (1570 === h || 1571 === h || 1573 === h || 1575 === h)) {
                        i = this.getCombCharRep(a, h), s += null != n ? String.fromCharCode(i[4]) : String.fromCharCode(i[1]), ++r;
                        continue;
                    }
                    if (e = this.getCharRep(a), null != n && null != h && null != e[3]) {
                        s += String.fromCharCode(e[3]);
                        continue;
                    }
                    if (null != n && null != e[4]) {
                        s += String.fromCharCode(e[4]);
                        continue;
                    }
                    if (null != h && null != e[2]) {
                        s += String.fromCharCode(e[2]);
                        continue;
                    }
                    s += String.fromCharCode(e[1]);
                } else s += String.fromCharCode(a);
            }
            return s;
        }
        convertArabicBack(t) {
            var e, i, s = "";
            for (i = 0; i < t.length; ++i) e = t.charCodeAt(i), s += this.getOriginalCharsFromCode(e);
            return s;
        }
    }
    _s.charsMap = [
        [1569, 65152, null, null, null],
        [1570, 65153, null, null, 65154],
        [1571, 65155, null, null, 65156],
        [1572, 65157, null, null, 65158],
        [1573, 65159, null, null, 65160],
        [1574, 65161, 65163, 65164, 65162],
        [1575, 65165, null, null, 65166],
        [1576, 65167, 65169, 65170, 65168],
        [1577, 65171, null, null, 65172],
        [1578, 65173, 65175, 65176, 65174],
        [1579, 65177, 65179, 65180, 65178],
        [1580, 65181, 65183, 65184, 65182],
        [1581, 65185, 65187, 65188, 65186],
        [1582, 65189, 65191, 65192, 65190],
        [1583, 65193, null, null, 65194],
        [1584, 65195, null, null, 65196],
        [1585, 65197, null, null, 65198],
        [1586, 65199, null, null, 65200],
        [1587, 65201, 65203, 65204, 65202],
        [1588, 65205, 65207, 65208, 65206],
        [1589, 65209, 65211, 65212, 65210],
        [1590, 65213, 65215, 65216, 65214],
        [1591, 65217, 65219, 65220, 65218],
        [1592, 65221, 65223, 65224, 65222],
        [1593, 65225, 65227, 65228, 65226],
        [1594, 65229, 65231, 65232, 65230],
        [1600, 1600, 1600, 1600, 1600],
        [1601, 65233, 65235, 65236, 65234],
        [1602, 65237, 65239, 65240, 65238],
        [1603, 65241, 65243, 65244, 65242],
        [1604, 65245, 65247, 65248, 65246],
        [1605, 65249, 65251, 65252, 65250],
        [1606, 65253, 65255, 65256, 65254],
        [1607, 65257, 65259, 65260, 65258],
        [1608, 65261, null, null, 65262],
        [1609, 65263, null, null, 65264],
        [1610, 65265, 65267, 65268, 65266],
        [1662, 64342, 64344, 64345, 64343],
        [1740, 64508, 64510, 64511, 64509],
        [1670, 64378, 64380, 64381, 64379],
        [1705, 64398, 64400, 64401, 64399],
        [1711, 64402, 64404, 64405, 64403],
        [1688, 64394, null, null, 64395]
    ], _s.combCharsMap = [
        [
            [1604, 1570], 65269, null, null, 65270
        ],
        [
            [1604, 1571], 65271, null, null, 65272
        ],
        [
            [1604, 1573], 65273, null, null, 65274
        ],
        [
            [1604, 1575], 65275, null, null, 65276
        ]
    ], _s.transChars = [1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773];
    class cs {
        static ArrayMul(t, e, i) {
            if (t)
                if (e)
                    for (var s, r, a, n, h = 0; h < 4; h++) s = t[h], r = t[h + 4], a = t[h + 8], n = t[h + 12], i[h] = s * e[0] + r * e[1] + a * e[2] + n * e[3], i[h + 4] = s * e[4] + r * e[5] + a * e[6] + n * e[7], i[h + 8] = s * e[8] + r * e[9] + a * e[10] + n * e[11], i[h + 12] = s * e[12] + r * e[13] + a * e[14] + n * e[15];
                else cs.copyArray(t, i);
            else cs.copyArray(e, i);
        }
        static copyArray(t, e) {
            if (t && e)
                for (var i = 0; i < t.length; i++) e[i] = t[i];
        }
    }
    return t.AlphaCmd = r, t.Animation = ki, t.AnimationBase = ai, t.ArabicReshaper = _s, t.AtlasGrid = Ut, t.AtlasInfoManager = qe, t.AudioSound = Ge, t.AudioSoundChannel = ke, t.BasePoly = St, t.BaseShader = w, t.BaseTexture = b, t.Bezier = $, t.Bitmap = A, t.BitmapFont = Xe, t.BlendMode = P, t.BlurFilter = ji, t.BlurFilterGLRender = zi, t.BlurFilterSetter = class extends Xi {
        constructor() {
            super(), this._strength = 4, this._filter = new ji(this.strength);
        }
        buildFilter() {
            this._filter = new ji(this.strength), super.buildFilter();
        }
        get strength() {
            return this._strength;
        }
        set strength(t) {
            this._strength = t;
        }
    }, t.BoundsStyle = ye, t.Browser = jt, t.Buffer = _t, t.Buffer2D = ct, t.BufferState2D = ft, t.BufferStateBase = pt, t.ButtonEffect = class {
        constructor() {
            this._curState = 0, this.effectScale = 1.5, this.tweenTime = 300;
        }
        set target(t) {
            this._tar = t, t.on(Wt.MOUSE_DOWN, this, this.toChangedState), t.on(Wt.MOUSE_UP, this, this.toInitState), t.on(Wt.MOUSE_OUT, this, this.toInitState);
        }
        toChangedState() {
            this._curState = 1, this._curTween && ii.clear(this._curTween), this._curTween = ii.to(this._tar, {
                scaleX: this.effectScale,
                scaleY: this.effectScale
            }, this.tweenTime, ei[this.effectEase], v.create(this, this.tweenComplete));
        }
        toInitState() {
            2 != this._curState && (this._curTween && ii.clear(this._curTween), this._curState = 2, this._curTween = ii.to(this._tar, {
                scaleX: 1,
                scaleY: 1
            }, this.tweenTime, ei[this.backEase], v.create(this, this.tweenComplete)));
        }
        tweenComplete() {
            this._curState = 0, this._curTween = null;
        }
    }, t.Byte = je, t.CONST3D2D = Dt, t.CacheManger = pe, t.CacheStyle = Ae, t.CallLater = Le, t.CharRenderInfo = Xt, t.CharRender_Canvas = Kt, t.CharRender_Native = qt, t.CharSubmitCache = Nt, t.ClassUtils = Te, t.ClipRectCmd = ne, t.ColorFilter = H, t.ColorFilterSetter = class extends Xi {
        constructor() {
            super(), this._brightness = 0, this._contrast = 0, this._saturation = 0, this._hue = 0, this._red = 0, this._green = 0, this._blue = 0, this._alpha = 0, this._filter = new H();
        }
        buildFilter() {
            this._filter.reset(), this._filter.color(this.red, this.green, this.blue, this.alpha), this._filter.adjustHue(this.hue), this._filter.adjustContrast(this.contrast), this._filter.adjustBrightness(this.brightness), this._filter.adjustSaturation(this.saturation), super.buildFilter();
        }
        get brightness() {
            return this._brightness;
        }
        set brightness(t) {
            this._brightness = t, this.paramChanged();
        }
        get contrast() {
            return this._contrast;
        }
        set contrast(t) {
            this._contrast = t, this.paramChanged();
        }
        get saturation() {
            return this._saturation;
        }
        set saturation(t) {
            this._saturation = t, this.paramChanged();
        }
        get hue() {
            return this._hue;
        }
        set hue(t) {
            this._hue = t, this.paramChanged();
        }
        get red() {
            return this._red;
        }
        set red(t) {
            this._red = t, this.paramChanged();
        }
        get green() {
            return this._green;
        }
        set green(t) {
            this._green = t, this.paramChanged();
        }
        get blue() {
            return this._blue;
        }
        set blue(t) {
            this._blue = t, this.paramChanged();
        }
        get color() {
            return this._color;
        }
        set color(t) {
            var e;
            this._color = t, e = V.create(t), this._red = 255 * e.arrColor[0], this._green = 255 * e.arrColor[1], this._blue = 255 * e.arrColor[2], this.paramChanged();
        }
        get alpha() {
            return this._alpha;
        }
        set alpha(t) {
            this._alpha = t, this.paramChanged();
        }
    }, t.ColorUtils = V, t.CommandEncoder = class {
        constructor(t, e, i, s) {
            this._idata = [];
        }
        getArrayData() {
            return this._idata;
        }
        getPtrID() {
            return 0;
        }
        beginEncoding() {}
        endEncoding() {}
        clearEncoding() {
            this._idata.length = 0;
        }
        getCount() {
            return this._idata.length;
        }
        add_ShaderValue(t) {
            this._idata.push(t);
        }
        addShaderUniform(t) {
            this.add_ShaderValue(t);
        }
    }, t.CommonScript = class extends ri {
        get isSingleton() {
            return !1;
        }
        constructor() {
            super();
        }
        onAwake() {}
        onEnable() {}
        onStart() {}
        onUpdate() {}
        onLateUpdate() {}
        onDisable() {}
        onDestroy() {}
    }, t.Component = ri, t.Config = e, t.Const = me, t.Context = Zt, t.Dragging = si, t.Draw9GridTexture = se, t.DrawCanvasCmd = Vi, t.DrawCircleCmd = a, t.DrawCurvesCmd = n, t.DrawImageCmd = h, t.DrawLineCmd = o, t.DrawLinesCmd = l, t.DrawParticleCmd = Hi, t.DrawPathCmd = _, t.DrawPieCmd = c, t.DrawPolyCmd = u, t.DrawRectCmd = d, t.DrawStyle = tt, t.DrawTextureCmd = X, t.DrawTexturesCmd = he, t.DrawTrianglesCmd = ie, t.Earcut = Pt, t.EarcutNode = It, t.Ease = ei, t.EffectAnimation = Gi, t.EffectBase = Ki, t.Event = Wt, t.EventDispatcher = T, t.FadeIn = class extends Ki {
        _doTween() {
            return this.target.alpha = 0, ii.to(this.target, {
                alpha: 1
            }, this.duration, ei[this.ease], this._comlete, this.delay);
        }
    }, t.FadeOut = class extends Ki {
        _doTween() {
            return this.target.alpha = 1, ii.to(this.target, {
                alpha: 0
            }, this.duration, ei[this.ease], this._comlete, this.delay);
        }
    }, t.FillBorderTextCmd = oe, t.FillBorderWordsCmd = le, t.FillTextCmd = _e, t.FillTextureCmd = z, t.FillWordsCmd = ce, t.Filter = W, t.FilterSetterBase = Xi, t.FontInfo = Vt, t.FrameAnimation = hi, t.GlowFilter = Qi, t.GlowFilterGLRender = qi, t.GlowFilterSetter = class extends Xi {
        constructor() {
            super(), this._color = "#ff0000", this._blur = 4, this._offX = 6, this._offY = 6, this._filter = new Qi(this._color);
        }
        buildFilter() {
            this._filter = new Qi(this.color, this.blur, this.offX, this.offY), super.buildFilter();
        }
        get color() {
            return this._color;
        }
        set color(t) {
            this._color = t, this.paramChanged();
        }
        get blur() {
            return this._blur;
        }
        set blur(t) {
            this._blur = t, this.paramChanged();
        }
        get offX() {
            return this._offX;
        }
        set offX(t) {
            this._offX = t, this.paramChanged();
        }
        get offY() {
            return this._offY;
        }
        set offY(t) {
            this._offY = t, this.paramChanged();
        }
    }, t.GrahamScan = J, t.GraphicAnimation = Ni, t.Graphics = ge, t.GraphicsBounds = re, t.HTMLCanvas = Ee, t.HTMLChar = is, t.HTMLImage = Ri, t.Handler = v, t.HitArea = ve, t.HttpRequest = He, t.ICharRender = zt, t.ILaya = i, t.IStatRender = di, t.IndexBuffer2D = dt, t.InlcudeFile = xi, t.Input = Ie, t.KeyBoardManager = Ne, t.KeyLocation = Zi, t.Keyboard = $i, t.Laya = wi, t.LayaGL = m, t.LayaGLQuickRunner = be, t.LayaGLRunner = class {
        static uploadShaderUniforms(t, e, i, s) {
            for (var r = i._data, a = e.getArrayData(), n = 0, h = 0, o = a.length; h < o; h++) {
                var l = a[h];
                if (s || -1 !== l.textureID) {
                    var _ = r[l.dataOffset];
                    null != _ && (n += l.fun.call(l.caller, l, _));
                }
            }
            return n;
        }
        static uploadCustomUniform(t, e, i, s) {
            var r = 0,
                a = e[i];
            return a && null != s && (r += a.fun.call(a.caller, a, s)), r;
        }
        static uploadShaderUniformsForNative(t, e, i) {
            return m.instance.uploadShaderUniforms(e, i._data, i._runtimeCopyValues.length > 0 ? m.UPLOAD_SHADER_UNIFORM_TYPE_DATA : m.UPLOAD_SHADER_UNIFORM_TYPE_ID);
        }
    }, t.LayaGPU = te, t.Loader = Ke, t.LoaderManager = Qe, t.LocalStorage = $e, t.Log = ss, t.MathUtil = ni, t.MatirxArray = cs, t.Matrix = p, t.Mesh2D = gt, t.MeshParticle2D = bi, t.MeshQuadTexture = mt, t.MeshTexture = vt, t.MeshVG = Tt, t.Mouse = Ci, t.MouseManager = De, t.Node = xe, t.Path = et, t.PerfData = as, t.PerfHUD = ns, t.Point = f, t.Pool = s, t.PoolCache = hs, t.Prefab = ze, t.PrimitiveSV = vi, t.QuickTestTool = Ji, t.Rectangle = g, t.Render = ee, t.RenderInfo = lt, t.RenderSprite = Re, t.RenderState2D = M, t.RenderTexture2D = S, t.Resource = E, t.ResourceVersion = ts, t.RestoreCmd = j, t.RotateCmd = K, t.RunDriver = Be, t.SaveBase = rt, t.SaveClipRect = at, t.SaveCmd = ue, t.SaveMark = nt, t.SaveTransform = ht, t.SaveTranslate = ot, t.ScaleCmd = q, t.Scene = Yi, t.SceneLoader = Wi, t.SceneUtils = _i, t.Script = Fi, t.Shader = F, t.Shader2D = wt, t.Shader2X = N, t.ShaderCompile = Ei, t.ShaderDefines2D = L, t.ShaderDefinesBase = D, t.ShaderNode = yi, t.ShaderValue = class {
        constructor() {}
    }, t.SkinMeshBuffer = Mt, t.SkinSV = mi, t.Socket = es, t.Sound = class extends T {
        load(t) {}
        play(t = 0, e = 0) {
            return null;
        }
        get duration() {
            return 0;
        }
        dispose() {}
    }, t.SoundChannel = Ue, t.SoundManager = Ve, t.SoundNode = class extends we {
        constructor() {
            super(), this.visible = !1, this.on(Wt.ADDED, this, this._onParentChange), this.on(Wt.REMOVED, this, this._onParentChange);
        }
        _onParentChange() {
            this.target = this.parent;
        }
        play(t = 1, e = null) {
            isNaN(t) && (t = 1), this.url && (this.stop(), this._channel = Ve.playSound(this.url, t, e));
        }
        stop() {
            this._channel && !this._channel.isStopped && this._channel.stop(), this._channel = null;
        }
        _setPlayAction(t, e, i, s = !0) {
            this[i] && t && (s ? t.on(e, this, this[i]) : t.off(e, this, this[i]));
        }
        _setPlayActions(t, e, i, s = !0) {
            if (t && e) {
                var r, a, n = e.split(",");
                for (a = n.length, r = 0; r < a; r++) this._setPlayAction(t, n[r], i, s);
            }
        }
        set playEvent(t) {
            this._playEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "play");
        }
        set target(t) {
            this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !1), this._setPlayActions(this._tar, this._stopEvents, "stop", !1)), this._tar = t, this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !0), this._setPlayActions(this._tar, this._stopEvents, "stop", !0));
        }
        set stopEvent(t) {
            this._stopEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "stop");
        }
    }, t.Sprite = we, t.SpriteConst = ae, t.SpriteStyle = Ce, t.Stage = Fe, t.Stat = O, t.StatUI = pi, t.StringKey = B, t.StrokeTextCmd = de, t.Submit = Lt, t.SubmitBase = st, t.SubmitCMD = G, t.SubmitCanvas = Ot, t.SubmitKey = k, t.SubmitTarget = Bt, t.SubmitTexture = Ft, t.System = class {
        static changeDefinition(t, e) {
            window.Laya[t] = e;
            var i = t + "=classObj";
            window.eval(i);
        }
    }, t.TTFLoader = ti, t.Text = Se, t.TextAtlas = Gt, t.TextRender = Qt, t.TextStyle = Me, t.TextTexture = kt, t.Texture = Yt, t.Texture2D = R, t.TextureSV = Ti, t.TimeLine = os, t.Timer = fi, t.TouchManager = Pe, t.TransformCmd = Q, t.TranslateCmd = Z, t.Tween = ii, t.URL = y, t.Utils = Y, t.Value2D = U, t.VectorGraphManager = fe, t.VertexArrayObject = class {
        constructor() {}
    }, t.VertexBuffer2D = ut, t.WeakObject = li, t.WebAudioSound = Ye, t.WebAudioSoundChannel = We, t.WebGL = Jt, t.WebGLCacheAsNormalCanvas = xt, t.WebGLContext = C, t.WebGLRTMgr = I, t.WordText = Ht, t.WorkerLoader = Ai, t.__init = Pi, t._static = _static, t.alertGlobalError = Oi, t.enableDebugPanel = Bi, t.init = Di, t.isWXOpenDataContext = void 0, t.isWXPosMsg = void 0, t.version = Li, t.static = _static, t;
}({});