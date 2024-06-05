var touch;
(function(touch) {
    class TimeUtil {
        static format(num) {
            return num < 10 ? "0" + num : "" + num;
        }
        static getHourMinuteSecond(time) {
            let h = Math.floor(time / TimeUtil.HOUR);
            let m = Math.floor(time / TimeUtil.MINUTE) % 60;
            let s = Math.floor(time / TimeUtil.SECOND) % 60;
            let str = TimeUtil.format(h) + ":" + TimeUtil.format(m) + ":" + TimeUtil.format(s);
            return str;
        }
    }
    TimeUtil.SECOND = 1000;
    TimeUtil.MINUTE = 1000 * 60;
    TimeUtil.HOUR = TimeUtil.MINUTE * 60;
    TimeUtil.DAY = TimeUtil.MINUTE * 60 * 24;
    touch.TimeUtil = TimeUtil;
})(touch || (touch = {}));