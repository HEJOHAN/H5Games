var touch;
(function(touch) {
    class WorldRankItemData {
        constructor() {
            this.id = "";
            this.score = "";
            this.name = "";
            this.icon = "";
            this.rank = 0;
        }
    }
    touch.WorldRankItemData = WorldRankItemData;
})(touch || (touch = {}));