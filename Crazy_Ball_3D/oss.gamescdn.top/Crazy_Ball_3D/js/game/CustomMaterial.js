var touch;
(function(touch) {
    class CustomMaterial extends Laya.BaseMaterial {
        constructor() {
            super();
            this.initShader();
            this.setShaderName("CustomShader");
            this.setBendDistance(100);
            this.setColor(new Laya.Vector4(1, 1, 1, 1));
            this.setHasLight(true);
            this.setHasLambert(false);
            this.setHasSpecular(false);
            this.setSpecularGloss(10);
            this.setSpecularColor(new Laya.Vector4(1, 1, 1, 1));
            this.setHasFog(true);
            this.setFogColor(new Laya.Vector4(1, 1, 1, 1));
            this.setFogDensity(0.03);
            this.setFogStart(0);
            this.setFogEnd(80);
            this.setFogGradient(2);
            this.setFogType(CustomMaterial.FOGTYPE_EXP);
            this.setHasAlphaTest(false);
        }
        setTransparent() {
            this.renderQueue = 2;
            this.depthWrite = true;
            this.cull = 2;
            this.blend = 1;
            this.srcBlend = 770;
            this.dstBlend = 771;
            this.alphaTest = false;
            this.setAlphaTestValue(0.1);
        }
        getDiffuseTexture() {
            return this._getTexture(CustomMaterial.DIFFUSETEXTURE);
        }
        setDiffuseTexture(texture) {
            this._setTexture(CustomMaterial.DIFFUSETEXTURE, texture);
        }
        setMarginalColor(color) {
            this._setColor(CustomMaterial.MARGINALCOLOR, color);
        }
        getBendOffset() {
            return this._getColor(CustomMaterial.BENDANGLE);
        }
        setBendOffset(color) {
            this._setColor(CustomMaterial.BENDANGLE, color);
        }
        setBendDistance(number) {
            this._setNumber(CustomMaterial.BENDDISTANCE, number);
        }
        setSpecularGloss(number) {
            this._setNumber(CustomMaterial.GLOSS, number);
        }
        setColor(color) {
            this._setColor(CustomMaterial.COLOR, color);
        }
        setSpecularColor(color) {
            this._setColor(CustomMaterial.SPECULAR, color);
        }
        setHasLight(value) {
            value ? this._addShaderDefine(CustomMaterial.SHADERDEFINE_ENABLELIGHT) : this._removeShaderDefine(CustomMaterial.SHADERDEFINE_ENABLELIGHT);
        }
        setHasLambert(value) {
            value ? this._addShaderDefine(CustomMaterial.SHADERDEFINE_ENABLELAMBERT) : this._removeShaderDefine(CustomMaterial.SHADERDEFINE_ENABLELAMBERT);
        }
        setHasSpecular(value) {
            value ? this._addShaderDefine(CustomMaterial.SHADERDEFINE_ENABLESPECULAR) : this._removeShaderDefine(CustomMaterial.SHADERDEFINE_ENABLESPECULAR);
        }
        setHasFog(value) {
            value ? this._addShaderDefine(CustomMaterial.SHADERDEFINE_ENABLEFOG) : this._removeShaderDefine(CustomMaterial.SHADERDEFINE_ENABLEFOG);
        }
        setHasAlphaTest(value) {
            value ? this._addShaderDefine(CustomMaterial.SHADERDEFINE_ALPHATEST) : this._removeShaderDefine(CustomMaterial.SHADERDEFINE_ALPHATEST);
        }
        setFogType(q) {
            switch (q) {
                case CustomMaterial.FOGTYPE_LINEAR:
                    this._addShaderDefine(CustomMaterial.SHADERDEFINE_LINEARFOG);
                    this._removeShaderDefine(CustomMaterial.SHADERDEFINE_EXFOG);
                    this._removeShaderDefine(CustomMaterial.SHADERDEFINE_EXPFOG);
                    break;
                case CustomMaterial.FOGTYPE_EX:
                    this._removeShaderDefine(CustomMaterial.SHADERDEFINE_LINEARFOG);
                    this._addShaderDefine(CustomMaterial.SHADERDEFINE_EXFOG);
                    this._removeShaderDefine(CustomMaterial.SHADERDEFINE_EXPFOG);
                    break;
                case CustomMaterial.FOGTYPE_EXP:
                    this._removeShaderDefine(CustomMaterial.SHADERDEFINE_LINEARFOG);
                    this._removeShaderDefine(CustomMaterial.SHADERDEFINE_EXFOG);
                    this._addShaderDefine(CustomMaterial.SHADERDEFINE_EXPFOG);
                    break;
            }
        }
        setFogColor(q) {
            this._setColor(CustomMaterial.FOGCOLOR, q);
        }
        setFogDensity(q) {
            this._setNumber(CustomMaterial.DENSITY, q);
        }
        setFogGradient(q) {
            this._setNumber(CustomMaterial.GRADIENT, q);
        }
        setFogStart(q) {
            this._setNumber(CustomMaterial.FOGSTART, q);
        }
        setFogEnd(q) {
            this._setNumber(CustomMaterial.FOGEND, q);
        }
        setAlphaTestValue(value) {
            this._setNumber(CustomMaterial.ALPHATESTVALUE, value);
        }
        initShader() {
            let attributeMap = {
                a_Position: Laya.VertexElementUsage.POSITION0,
                a_Normal: Laya.VertexElementUsage.NORMAL0,
                a_Texcoord: Laya.VertexElementUsage.TEXTURECOORDINATE0
            };
            let uniformMap = {
                u_AlphaTestValue: [CustomMaterial.ALPHATESTVALUE, Laya.Shader3D.PERIOD_MATERIAL],
                u_MvpMatrix: [Laya.Sprite3D.MVPMATRIX, Laya.Shader3D.PERIOD_SPRITE],
                u_WorldMat: [Laya.Sprite3D.WORLDMATRIX, Laya.Shader3D.PERIOD_SPRITE],
                u_ViewMatrix: [Laya.BaseCamera.VIEWMATRIX, Laya.Shader3D.PERIOD_CAMERA],
                u_texture: [CustomMaterial.DIFFUSETEXTURE, Laya.Shader3D.PERIOD_MATERIAL],
                u_CameraPos: [Laya.BaseCamera.CAMERAPOS, Laya.Shader3D.PERIOD_CAMERA],
                _QOffset: [CustomMaterial.BENDANGLE, Laya.Shader3D.PERIOD_MATERIAL],
                _Dist: [CustomMaterial.BENDDISTANCE, Laya.Shader3D.PERIOD_MATERIAL],
                _Color: [CustomMaterial.COLOR, Laya.Shader3D.PERIOD_MATERIAL],
                _FogColor: [CustomMaterial.FOGCOLOR, Laya.Shader3D.PERIOD_MATERIAL],
                u_Density: [CustomMaterial.DENSITY, Laya.Shader3D.PERIOD_MATERIAL],
                u_Gradient: [CustomMaterial.GRADIENT, Laya.Shader3D.PERIOD_MATERIAL],
                u_FogStart: [CustomMaterial.FOGSTART, Laya.Shader3D.PERIOD_MATERIAL],
                u_FogEnd: [CustomMaterial.FOGEND, Laya.Shader3D.PERIOD_MATERIAL],
                _Gloss: [CustomMaterial.GLOSS, Laya.Shader3D.PERIOD_MATERIAL],
                u_DirectionLight_Direction: [Laya.Scene.POINTLIGHTPOS, Laya.Shader3D.PERIOD_SCENE],
                u_DirectionLight_Diffuse: [Laya.Scene.POINTLIGHTCOLOR, Laya.Shader3D.PERIOD_SCENE],
                u_DirectionLight_Ambient: [Laya.Scene.AMBIENTCOLOR, Laya.Shader3D.PERIOD_SCENE]
            };
            let nameID = Laya.Shader3D.nameKey.add("CustomShader");
            let shaderCompile3D = Laya.ShaderCompile3D.add(nameID, "attribute vec3 a_Normal;\nattribute vec2 a_Texcoord;\nattribute vec4 a_Position;\nprecision highp float;\nuniform mat4 u_MvpMatrix;\nuniform mat4 u_ViewMatrix;\nuniform mat4 u_WorldMat;\nuniform vec4 _QOffset; \nuniform float _Dist; \nuniform vec4 _Color; \nuniform float _Gloss; \nuniform vec4 _Specular; \nuniform vec3 u_CameraPos;\nuniform vec3 u_DirectionLight_Direction;\nuniform vec3 u_DirectionLight_Diffuse;\nuniform vec3 u_DirectionLight_Ambient;\nvarying vec4 v_Color;\nvarying vec2 v_Texcoord;\nvarying vec2 v_Texcoord0;\nvarying vec4 v_EyeSpacePos;\nvoid main(){\nv_Texcoord0=a_Texcoord;\n\nmat4 mvMatrix \x3d u_ViewMatrix*u_WorldMat;\nhighp vec4 vPos \x3d  u_MvpMatrix *a_Position;\nfloat zOff \x3d vPos.z/_Dist;\nvPos +\x3d _QOffset*zOff*zOff;\ngl_Position \x3d vPos;\nmat3 worldMat\x3dmat3(u_WorldMat);\nv_EyeSpacePos\x3dmvMatrix*a_Position;\nv_Texcoord\x3da_Texcoord;\n#ifdef CUSTOM_ENABLELIGHT \nvec3 worldNormal \x3d worldMat*a_Normal;  \nworldNormal \x3d normalize(worldNormal);\nvec3 m_Position\x3dvec3(u_WorldMat*a_Position);\nvec3 worldLightDir \x3d normalize(u_DirectionLight_Direction-m_Position);\nvec3 ambient \x3d u_DirectionLight_Ambient.xyz*_Color.rgb; \n#ifdef CUSTOM_ENABLELAMBERT\nfloat lambert \x3dmax(0.0, dot(worldNormal, worldLightDir));\n#else\nfloat lambert \x3d 0.5 * dot(worldNormal, worldLightDir) + 0.5;\n#endif\nv_Color \x3d vec4(lambert * u_DirectionLight_Diffuse.xyz*_Color.rgb + ambient, _Color.a);  \n#ifdef CUSTOM_ENABLESPECULAR\nvec3 viewDir\x3dnormalize(u_CameraPos-m_Position);\nvec3 halfDir \x3d normalize(viewDir + worldLightDir);\nvec3 specular \x3d u_DirectionLight_Diffuse.xyz*_Specular.rgb*pow(max(dot(worldNormal,halfDir),0.0),_Gloss);\nv_Color+\x3dvec4(v_Color.rgb+specular,v_Color.a);\n#endif\n#else\nv_Color\x3d_Color;\n#endif\n}", "precision highp float;\nvarying vec4 v_EyeSpacePos;\nvarying vec2 v_Texcoord;\nvarying vec2 v_Texcoord0;\nvarying vec4 v_Color;\n	uniform float u_AlphaTestValue;\nuniform sampler2D u_texture;\nuniform float u_Density;\nuniform float u_Gradient;\nuniform vec4 _FogColor;\nuniform float u_FogStart;\nuniform float u_FogEnd;\nfloat ExFog(float distance)\n{\nfloat fogAlpha\x3dexp(-abs(distance * u_Density));\nfogAlpha\x3d1.0-clamp(fogAlpha,0.0,1.0);\nreturn fogAlpha;\n}\nfloat ExpFog(float distance)\n{\nfloat fogAlpha\x3dexp(-pow( abs(distance * u_Density) , u_Gradient) );\nfogAlpha\x3d1.0-clamp(fogAlpha,0.0,1.0);\n\n\nreturn fogAlpha;\n}\nfloat LinearFog(float distance)\n{\nfloat fogAlpha\x3d(distance-u_FogStart)/(u_FogEnd-u_FogStart);\nfogAlpha\x3dclamp(fogAlpha,0.0,1.0);\nreturn fogAlpha;\n}\nvoid main(){\n#ifdef CUSTOM_ALPHATEST\nfloat alpha = texture2D(u_texture,v_Texcoord).w;\n		if( alpha < u_AlphaTestValue )\n		{\n			discard;\n		}\n#endif\nvec4 tex\x3dtexture2D(u_texture,v_Texcoord);\nvec4 color\x3dv_Color*tex;\n#ifdef CUSTOM_ENABLEFOG \n#ifdef CUSTOM_LINEARFOG\nfloat fogAlpha \x3d LinearFog(abs(v_EyeSpacePos.z/v_EyeSpacePos.w));\n#endif\n#ifdef CUSTOM_EXFOG\nfloat fogAlpha \x3d ExFog(abs(v_EyeSpacePos.z/v_EyeSpacePos.w));\n#endif\n#ifdef CUSTOM_EXPFOG\nfloat fogAlpha \x3d ExpFog(abs(v_EyeSpacePos.z/v_EyeSpacePos.w));\n#endif\ngl_FragColor\x3dmix(color,_FogColor,fogAlpha);\n#else \ngl_FragColor\x3dcolor;\n#endif \n}\n", attributeMap, uniformMap);
            CustomMaterial.SHADERDEFINE_ENABLELIGHT = shaderCompile3D.registerMaterialDefine("CUSTOM_ENABLELIGHT");
            CustomMaterial.SHADERDEFINE_ENABLELAMBERT = shaderCompile3D.registerMaterialDefine("CUSTOM_ENABLELAMBERT");
            CustomMaterial.SHADERDEFINE_ENABLESPECULAR = shaderCompile3D.registerMaterialDefine("CUSTOM_ENABLESPECULAR");
            CustomMaterial.SHADERDEFINE_ENABLEFOG = shaderCompile3D.registerMaterialDefine("CUSTOM_ENABLEFOG");
            CustomMaterial.SHADERDEFINE_LINEARFOG = shaderCompile3D.registerMaterialDefine("CUSTOM_LINEARFOG");
            CustomMaterial.SHADERDEFINE_EXFOG = shaderCompile3D.registerMaterialDefine("CUSTOM_EXFOG");
            CustomMaterial.SHADERDEFINE_EXPFOG = shaderCompile3D.registerMaterialDefine("CUSTOM_EXPFOG");
            CustomMaterial.SHADERDEFINE_ALPHATEST = shaderCompile3D.registerMaterialDefine("CUSTOM_ALPHATEST");
        }
    }
    CustomMaterial.DIFFUSETEXTURE = 1;
    CustomMaterial.MARGINALCOLOR = 2;
    CustomMaterial.BENDANGLE = 3;
    CustomMaterial.BENDDISTANCE = 4;
    CustomMaterial.COLOR = 5;
    CustomMaterial.SPECULAR = 6;
    CustomMaterial.GLOSS = 7;
    CustomMaterial.FOGCOLOR = 8;
    CustomMaterial.DENSITY = 9;
    CustomMaterial.GRADIENT = 10;
    CustomMaterial.FOGSTART = 11;
    CustomMaterial.FOGEND = 12;
    CustomMaterial.FOGTYPE_LINEAR = 1;
    CustomMaterial.FOGTYPE_EX = 2;
    CustomMaterial.FOGTYPE_EXP = 3;
    CustomMaterial.ALPHATESTVALUE = 13;
    touch.CustomMaterial = CustomMaterial;
})(touch || (touch = {}));