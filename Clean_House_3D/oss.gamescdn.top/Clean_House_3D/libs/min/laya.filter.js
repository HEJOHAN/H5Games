! function(t, n, i) {
    i.un, i.uns;
    var r = i.static,
        s = i.class,
        o = i.getset,
        _ = (i.__newvec, laya.utils.ColorUtils),
        a = laya.filters.Filter,
        u = laya.maths.Matrix,
        h = (laya.renders.Render, laya.utils.RunDriver, laya.webgl.shader.d2.ShaderDefines2D, laya.display.Sprite, laya.webgl.shader.d2.value.Value2D),
        l = function() {
            function t() {}
            s(t, "laya.filters.GlowFilterGLRender");
            var n = t.prototype;
            return n.setShaderInfo = function(t, n, i, r) {
                t.defines.add(r.type);
                var e = t;
                e.u_blurInfo1 = r._sv_blurInfo1;
                var s = r._sv_blurInfo2;
                s[0] = n, s[1] = i, e.u_blurInfo2 = s, e.u_color = r.getColor()
            }, n.render = function(t, n, i, r, e) {
                var s = i,
                    o = r,
                    _ = h.create(1, 0);
                this.setShaderInfo(_, s, o, e);
                var a = h.create(1, 0),
                    l = u.TEMP.identity();
                n.drawTarget(t, 0, 0, s, o, l, _), n.drawTarget(t, 0, 0, s, o, l, a)
            }, t
        }(),
        e = function() {
            function _() {}
            s(_, "laya.filters.BlurFilterGLRender");
            var t = _.prototype;
            return t.render = function(t, n, i, r, e) {
                var s = h.create(1, 0);
                this.setShaderInfo(s, e, t.width, t.height), n.drawTarget(t, 0, 0, i, r, u.EMPTY.identity(), s)
            }, t.setShaderInfo = function(t, n, i, r) {
                t.defines.add(16);
                var e = t;
                _.blurinfo[0] = i, _.blurinfo[1] = r, e.blurInfo = _.blurinfo;
                var s = n.strength / 3,
                    o = s * s;
                n.strength_sig2_2sig2_gauss1[0] = n.strength, n.strength_sig2_2sig2_gauss1[1] = o, n.strength_sig2_2sig2_gauss1[2] = 2 * o, n.strength_sig2_2sig2_gauss1[3] = 1 / (2 * Math.PI * o), e.strength_sig2_2sig2_gauss1 = n.strength_sig2_2sig2_gauss1
            }, r(_, ["blurinfo", function() {
                return this.blurinfo = new Array(2)
            }]), _
        }();
    (function() {
        function n(t) {
            this.strength = NaN, this.strength_sig2_2sig2_gauss1 = [], this.strength_sig2_native = null, this.renderFunc = null, n.__super.call(this), void 0 === t && (t = 4), this.strength = t, this._action = null, this._glRender = new e
        }
        s(n, "laya.filters.BlurFilter", a);
        var t = n.prototype;
        t.getStrenth_sig2_2sig2_native = function() {
            this.strength_sig2_native || (this.strength_sig2_native = new Float32Array(4));
            var t = this.strength / 3,
                n = t * t;
            return this.strength_sig2_native[0] = this.strength, this.strength_sig2_native[1] = n, this.strength_sig2_native[2] = 2 * n, this.strength_sig2_native[3] = 1 / (2 * Math.PI * n), this.strength_sig2_native
        }, o(0, t, "type", function() {
            return 16
        })
    })(),
    function() {
        function e(t, n, i, r) {
            this._sv_blurInfo2 = [0, 0, 1, 0], this._color = null, this._color_native = null, this._blurInof1_native = null, this._blurInof2_native = null, e.__super.call(this), this._elements = new Float32Array(9), this._sv_blurInfo1 = new Array(4), void 0 === n && (n = 4), void 0 === i && (i = 6), void 0 === r && (r = 6), this._color = new _(t), this.blur = Math.min(n, 20), this.offX = i, this.offY = r, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = this.blur, this._sv_blurInfo1[2] = i, this._sv_blurInfo1[3] = -r, this._glRender = new l
        }
        s(e, "laya.filters.GlowFilter", a);
        var t = e.prototype;
        t.getColor = function() {
            return this._color.arrColor
        }, t.getColorNative = function() {
            this._color_native || (this._color_native = new Float32Array(4));
            var t = this.getColor();
            return this._color_native[0] = t[0], this._color_native[1] = t[1], this._color_native[2] = t[2], this._color_native[3] = t[3], this._color_native
        }, t.getBlurInfo1Native = function() {
            return this._blurInof1_native || (this._blurInof1_native = new Float32Array(4)), this._blurInof1_native[0] = this._blurInof1_native[1] = this.blur, this._blurInof1_native[2] = this.offX, this._blurInof1_native[3] = this.offY, this._blurInof1_native
        }, t.getBlurInfo2Native = function() {
            return this._blurInof2_native || (this._blurInof2_native = new Float32Array(4)), this._blurInof2_native[2] = 1, this._blurInof2_native
        }, o(0, t, "type", function() {
            return 8
        }), o(0, t, "offY", function() {
            return this._elements[6]
        }, function(t) {
            this._elements[6] = t, this._sv_blurInfo1[3] = -t
        }), o(0, t, "offX", function() {
            return this._elements[5]
        }, function(t) {
            this._elements[5] = t, this._sv_blurInfo1[2] = t
        }), o(0, t, "blur", function() {
            return this._elements[4]
        }, function(t) {
            this._elements[4] = t, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = t
        })
    }()
}(window, document, Laya);