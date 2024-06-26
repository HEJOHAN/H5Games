var touch;
(function(touch) {
    class SkinManager {
        constructor() {
            this.curSkinIndex = 0;
            this.curSkinIndex = touch.MathUtil.randomInt(0, 1);
        }
        destroy() {}
    }
    SkinManager.buildColors = [new Laya.Vector4(207 / 255, 233 / 255, 246 / 255, 1), new Laya.Vector4(207 / 255, 233 / 255, 246 / 255, 1), new Laya.Vector4(207 / 255, 233 / 255, 246 / 255, 1), new Laya.Vector4(207 / 255, 233 / 255, 246 / 255, 1), new Laya.Vector4(207 / 255, 233 / 255, 246 / 255, 1), new Laya.Vector4(207 / 255, 233 / 255, 246 / 255, 1)];
    SkinManager.planeTexture = "res/skin/plane.png";
    SkinManager.bgColors = [new Laya.Vector4(193 / 255, 207 / 255, 193 / 255, 1), new Laya.Vector4(193 / 255, 207 / 255, 193 / 255, 1)];
    SkinManager.fogColors = [new Laya.Vector4(193 / 255, 207 / 255, 193 / 255, 1), new Laya.Vector4(193 / 255, 207 / 255, 193 / 255, 1)];
    SkinManager.PLANE_COLORS = [new Laya.Vector4(176 / 255, 206 / 255, 204 / 255, 1), new Laya.Vector4(167 / 255, 202 / 255, 196 / 255, 1), new Laya.Vector4(145 / 255, 190 / 255, 182 / 255, 1), new Laya.Vector4(129 / 255, 192 / 255, 175 / 255, 1), new Laya.Vector4(114 / 255, 181 / 255, 162 / 255, 1), new Laya.Vector4(100 / 255, 166 / 255, 152 / 255, 1), new Laya.Vector4(86 / 255, 149 / 255, 140 / 255, 1), new Laya.Vector4(80 / 255, 139 / 255, 135 / 255, 1), new Laya.Vector4(138 / 255, 176 / 255, 249 / 255, 1), new Laya.Vector4(116 / 255, 186 / 255, 255 / 255, 1), new Laya.Vector4(68 / 255, 159 / 255, 229 / 255, 1), new Laya.Vector4(37 / 255, 139 / 255, 200 / 255, 1)];
    SkinManager.DEAD_COLORS = [new Laya.Vector4(1, 209 / 255, 45 / 255, 1), new Laya.Vector4(1, 0 / 255, 1, 1), new Laya.Vector4(1, 1, 1, 1), new Laya.Vector4(190 / 255, 70 / 255, 48 / 255, 1), new Laya.Vector4(1, 90 / 255, 0 / 255, 1), new Laya.Vector4(1 / 255, 144 / 255, 195 / 255, 1), new Laya.Vector4(0, 0, 0, 1), new Laya.Vector4(1, 0, 0, 1), new Laya.Vector4(0, 240 / 255, 240 / 255, 1), new Laya.Vector4(1, 1, 1, 1), new Laya.Vector4(0, 1, 1, 1), new Laya.Vector4(30 / 255, 20 / 255, 110 / 255, 1), new Laya.Vector4(1, 1, 20 / 255, 1), new Laya.Vector4(140 / 255, 50 / 255, 185 / 255, 1), new Laya.Vector4(255 / 255, 182 / 255, 2 / 255, 1), new Laya.Vector4(1 / 255, 142 / 255, 239 / 255, 1), new Laya.Vector4(0, 0, 0, 1), new Laya.Vector4(106 / 255, 47 / 255, 167 / 255, 1), new Laya.Vector4(0, 0, 1, 1), new Laya.Vector4(2 / 255, 67 / 255, 130 / 255, 1), new Laya.Vector4(107 / 255, 28 / 255, 220 / 255, 1), new Laya.Vector4(0, 0, 0, 1), new Laya.Vector4(105 / 255, 18 / 255, 180 / 255, 1), new Laya.Vector4(0, 0, 0, 1), new Laya.Vector4(0, 0, 0, 1), new Laya.Vector4(96 / 255, 90 / 255, 27 / 255, 1), new Laya.Vector4(90 / 255, 5 / 255, 22 / 255, 1), new Laya.Vector4(220 / 255, 190 / 255, 40 / 255, 1), new Laya.Vector4(175 / 255, 0 / 255, 28 / 255, 1), new Laya.Vector4(67 / 255, 166 / 255, 107 / 255, 1)];
    SkinManager.AI_NAME_NUM = 50;
    touch.SkinManager = SkinManager;
})(touch || (touch = {}));