var touch;
(function(touch) {
    class CurvedGlitterMaterial extends Laya.BaseMaterial {
        constructor() {
            super();
            this.initShader();
            this.setShaderName("CURVEDGLITTER");
            this.renderMode = CurvedGlitterMaterial.RENDERMODE_OPAQUE;
            this._setColor(CurvedGlitterMaterial.MAINCOLOR, new Laya.Vector4(1, 1, 1, 1));
            this._setColor(CurvedGlitterMaterial.QOFFSET, new Laya.Vector4(0, 0, 0, 1));
            this._setNumber(CurvedGlitterMaterial.DIST, 10);
        }
        set mainTexture(texture) {
            texture ? this._addShaderDefine(CurvedGlitterMaterial.SHADERDEFINE_MAINTMAP) : this._removeShaderDefine(CurvedGlitterMaterial.SHADERDEFINE_MAINTMAP);
            this._setTexture(CurvedGlitterMaterial.MAINTEXTURE, texture);
        }
        get mainTexture() {
            return this._getTexture(CurvedGlitterMaterial.MAINTEXTURE);
        }
        set qOffset(value) {
            this._setColor(CurvedGlitterMaterial.QOFFSET, value);
        }
        get qOffset() {
            return this._getColor(CurvedGlitterMaterial.QOFFSET);
        }
        set mainColor(value) {
            this._setColor(CurvedGlitterMaterial.MAINCOLOR, value);
        }
        get mainColor() {
            return this._getColor(CurvedGlitterMaterial.MAINCOLOR);
        }
        set dist(value) {
            this._setNumber(CurvedGlitterMaterial.DIST, value);
        }
        get dist() {
            return this._getNumber(CurvedGlitterMaterial.DIST);
        }
        set renderMode(value) {
            switch (value) {
                case CurvedGlitterMaterial.RENDERMODE_OPAQUE:
                    this.renderQueue = Laya.RenderQueue.OPAQUE;
                    this.depthWrite = false;
                    this.cull = CurvedGlitterMaterial.CULL_BACK;
                    this.blend = CurvedGlitterMaterial.BLEND_DISABLE;
                    this.alphaTest = false;
                    this.depthTest = CurvedGlitterMaterial.DEPTHTEST_LESS;
                    break;
                case CurvedGlitterMaterial.RENDEMODE_TRANSPARENT:
                    this.renderQueue = Laya.RenderQueue.TRANSPARENT;
                    this.depthWrite = true;
                    this.cull = CurvedGlitterMaterial.CULL_BACK;
                    this.blend = CurvedGlitterMaterial.BLEND_ENABLE_ALL;
                    this.srcBlend = CurvedGlitterMaterial.BLENDPARAM_SRC_ALPHA;
                    this.dstBlend = CurvedGlitterMaterial.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
                    this.alphaTest = false;
                    this.depthTest = CurvedGlitterMaterial.DEPTHTEST_LESS;
                    break;
            }
        }
        initShader() {
            var nameID = Laya.Shader3D.nameKey.add("CURVEDGLITTER");
            let attributeMap = {
                a_Position: Laya.VertexElementUsage.POSITION0,
                a_Texcoord: Laya.VertexElementUsage.TEXTURECOORDINATE0,
                a_Time: Laya.VertexElementUsage.TIME0
            };
            let uniformMap = {
                u_MMatrix: [Laya.Sprite3D.WORLDMATRIX, Laya.Shader3D.PERIOD_SPRITE],
                u_VMatrix: [Laya.BaseCamera.VIEWMATRIX, Laya.Shader3D.PERIOD_CAMERA],
                u_PMatrix: [Laya.BaseCamera.PROJECTMATRIX, Laya.Shader3D.PERIOD_CAMERA],
                u_MainColor: [CurvedGlitterMaterial.MAINCOLOR, Laya.Shader3D.PERIOD_MATERIAL],
                u_MainTexture: [CurvedGlitterMaterial.MAINTEXTURE, Laya.Shader3D.PERIOD_MATERIAL],
                u_Dist: [CurvedGlitterMaterial.DIST, Laya.Shader3D.PERIOD_MATERIAL],
                u_QOffset: [CurvedGlitterMaterial.QOFFSET, Laya.Shader3D.PERIOD_MATERIAL],
                u_CurrentTime: [Laya.Glitter.CURRENTTIME, Laya.Shader3D.PERIOD_SPRITE],
                u_Duration: [Laya.Glitter.DURATION, Laya.Shader3D.PERIOD_SPRITE]
            };
            let shaderCompile3D = Laya.ShaderCompile3D.add(nameID, "attribute vec4 a_Position;\nattribute float a_Time;\nuniform mat4 u_MMatrix;\nuniform mat4 u_VMatrix;\nuniform mat4 u_PMatrix;\nuniform float u_Dist;\nuniform vec4 u_QOffset;\n#ifdef MAINMAP\nattribute vec2 a_Texcoord;\nvarying vec2 v_Texcoord;\n#endif\nuniform float u_CurrentTime;\nuniform vec4 u_MainColor;\nuniform float u_Duration;\nvarying vec4 v_Color;\nvoid main(){\n#ifdef MAINMAP\nv_Texcoord = a_Texcoord;\n#endif\nfloat age = u_CurrentTime-a_Time;\nfloat normalizedAge = clamp(age / u_Duration,0.0,1.0);\nv_Color=u_MainColor;\nv_Color.a*=1.0-normalizedAge;\nvec4 vPos =  u_VMatrix * u_MMatrix *a_Position;\nfloat zOff = vPos.z/u_Dist;\nvPos += u_QOffset*zOff*zOff;\ngl_Position = u_PMatrix * vPos;\n}", "#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#ifdef MAINMAP\nuniform sampler2D u_MainTexture;\nvarying vec2 v_Texcoord;\n#endif\nvarying vec4 v_Color;\nvoid main(){\nvec4 mainColor = v_Color;\n#ifdef MAINMAP\nvec4 texColor = texture2D(u_MainTexture,v_Texcoord);\nmainColor.rgba = mainColor.rgba * texColor.rgba;\n#endif\ngl_FragColor = mainColor;\n}\n", attributeMap, uniformMap);
            CurvedGlitterMaterial.SHADERDEFINE_MAINTMAP = shaderCompile3D.registerMaterialDefine("MAINMAP");
        }
    }
    CurvedGlitterMaterial.RENDERMODE_OPAQUE = 0;
    CurvedGlitterMaterial.RENDEMODE_TRANSPARENT = 1;
    CurvedGlitterMaterial.MAINTEXTURE = 1;
    CurvedGlitterMaterial.MAINCOLOR = 2;
    CurvedGlitterMaterial.DIST = 3;
    CurvedGlitterMaterial.QOFFSET = 4;
    touch.CurvedGlitterMaterial = CurvedGlitterMaterial;
})(touch || (touch = {}));