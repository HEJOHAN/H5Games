var touch;
(function(touch) {
    class Pool {
        static get(name, cls) {
            return Laya.Pool.getItemByClass(name, cls);
        }
        static recover(name, object) {
            if (object != null) {
                object.clear();
                Laya.Pool.recover(name, object);
            }
        }
        static getSysObj(name, cls) {
            return Laya.Pool.getItemByClass(name, cls);
        }
        static recoverSysObj(name, object) {
            if (object != null) {
                Laya.Pool.recover(name, object);
            }
        }
    }
    touch.Pool = Pool;
})(touch || (touch = {}));