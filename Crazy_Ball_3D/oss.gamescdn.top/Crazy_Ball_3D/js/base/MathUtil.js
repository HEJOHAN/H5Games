var touch;
(function(touch) {
    class MathUtil {
        static randomInt(min, max) {
            var d = max - min + 1;
            return Math.floor(min + Math.random() * d);
        }
        static randomColor() {
            return "#" + Math.ceil(Math.random() * 255).toString(16) +
                Math.ceil(Math.random() * 255).toString(16) + Math.ceil(Math.random() * 255).toString(16);
        }
        static getColor(r, g, b) {
            return "#" + Math.ceil(r).toString(16) + Math.ceil(g).toString(16) + Math.ceil(b).toString(16);
        }
        static randomColorValue() {
            return Math.ceil(Math.random() * 255);
        }
        static vec4ToHexStr(value) {
            let colorVec = [255 * value.x, 255 * value.y, 255 * value.z, 255 * value.w];
            let color = "#";
            for (var p = 0; p < colorVec.length; p++) {
                color += Math.floor(colorVec[p]).toString(16);
            }
            return color;
        }
    }
    touch.MathUtil = MathUtil;
})(touch || (touch = {}));