var touch;
(function(touch) {
    class MatchPlayerData {
        constructor() {
            this.icon = "";
            this.matchTime = 0;
        }
        destroy() {}
        clear() {
            this.icon = "";
            this.matchTime = 0;
        }
    }
    touch.MatchPlayerData = MatchPlayerData;
})(touch || (touch = {}));