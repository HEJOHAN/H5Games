var touch;
(function(touch) {
    class GameConfig {}
    GameConfig.RANDOM_PRICE = 500;
    GameConfig.SKIN_VIDEO = [0, 10, 50, 100, 200, 300, 2, 10, 100, 1000, 2000, 5000, 10000, 100000, 2, 10, 100, 3, 10, 30, 2, 4, 7, 100, 200, 500, 1000, 2000, 5000, 10000];
    GameConfig.SKIN_TYPE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GameConfig.SKIN_TYPE1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GameConfig.PK_GOAL_CONFIG = [{
        index: 0,
        goal: 500,
        ex: 0,
        star1: 1500,
        star2: 3000,
        star3: 4500,
        dif: 40,
        title: "Level1",
        des: ""
    }, {
        index: 1,
        goal: 800,
        ex: 1,
        star1: 2400,
        star2: 4800,
        star3: 7200,
        dif: 60,
        title: "Level2",
        des: "Victory\nExtra +1"
    }, {
        index: 2,
        goal: 1000,
        ex: 2,
        star1: 3000,
        star2: 6000,
        star3: 9000,
        dif: 80,
        title: "Level3",
        des: "Victory\nExtra +2"
    }, {
        index: 3,
        goal: 1500,
        ex: 3,
        star1: 4500,
        star2: 9000,
        star3: 13500,
        dif: 120,
        title: "Level4",
        des: "Victory\nExtra +3"
    }, {
        index: 4,
        goal: 2000,
        ex: 4,
        star1: 6000,
        star2: 12000,
        star3: 18000,
        dif: 120,
        title: "Level5",
        des: "Victory\nExtra +4"
    }];
    GameConfig.FISRT_SIGNIN_CONFIG = [{
        index: 0,
        type: 0,
        num: 200
    }, {
        index: 1,
        type: 1,
        num: 1
    }, {
        index: 2,
        type: 0,
        num: 250
    }, {
        index: 3,
        type: 0,
        num: 300
    }, {
        index: 4,
        type: 0,
        num: 200
    }, {
        index: 5,
        type: 1,
        num: 1
    }, {
        index: 6,
        type: 1,
        num: 1
    }, ];
    GameConfig.SIGNIN_CONFIG = [{
        index: 0,
        type: 0,
        num: 200
    }, {
        index: 1,
        type: 0,
        num: 250
    }, {
        index: 2,
        type: 0,
        num: 300
    }, {
        index: 3,
        type: 0,
        num: 350
    }, {
        index: 4,
        type: 0,
        num: 200
    }, {
        index: 5,
        type: 0,
        num: 300
    }, {
        index: 6,
        type: 0,
        num: 350
    }, ];
    GameConfig.ONLINE_GIFT = [{
        index: 1,
        time: 0,
        num: 50
    }, {
        index: 2,
        time: 120,
        num: 75
    }, {
        index: 3,
        time: 300,
        num: 100
    }, {
        index: 4,
        time: 600,
        num: 150
    }, {
        index: 5,
        time: 1800,
        num: 200
    }, {
        index: 6,
        time: 3600,
        num: 250
    }, {
        index: 7,
        time: 7200,
        num: 300
    }];
    touch.GameConfig = GameConfig;
})(touch || (touch = {}));