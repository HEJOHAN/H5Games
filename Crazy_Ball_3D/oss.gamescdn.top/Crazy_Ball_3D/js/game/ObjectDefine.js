var touch;
(function(touch) {
    class ObjectDefine {}
    ObjectDefine.BALL = "ball";
    ObjectDefine.JUMP = "jump";
    ObjectDefine.BOX = "box";
    ObjectDefine.DIAMOND = "diamond";
    ObjectDefine.BUILD = "build";
    ObjectDefine.DEAD_POINT = "dead_point";
    touch.ObjectDefine = ObjectDefine;
})(touch || (touch = {}));