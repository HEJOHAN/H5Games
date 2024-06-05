var touch;
(function(touch) {
    let EGameState;
    (function(EGameState) {
        EGameState[EGameState["WAIT"] = 0] = "WAIT";
        EGameState[EGameState["GAME"] = 1] = "GAME";
        EGameState[EGameState["GAME_OVER"] = 2] = "GAME_OVER";
    })(EGameState = touch.EGameState || (touch.EGameState = {}));
    class GameDefine {}
    GameDefine.ACCELERATE_BLOCK = "AccelerateBlock";
    GameDefine.BOX = "Box";
    GameDefine.AI_COUNT = 4;
    GameDefine.DST_ANGLES = [new Laya.Vector4(-150, 0, 0, 0), new Laya.Vector4(150, 0, 0, 0), new Laya.Vector4(0, 150, 0, 0), new Laya.Vector4(0, -0, 0, 0), new Laya.Vector4(-150, 150, 0, 0), new Laya.Vector4(150, 150, 0, 0), new Laya.Vector4(-150, -0, 0, 0), new Laya.Vector4(150, -0, 0, 0)];
    GameDefine.BEND_TIMES = [1E4, 1E4, 7E3, 1E4, 11500, 1E4, 11500, 1E4];
    GameDefine.MAX_BOX_NUM = 25;
    GameDefine.MAX_ACCELERATE_BLOCL_NUM = 10;
    GameDefine.MAX_BUILD_NUM = 8;
    GameDefine.MAX_DEA_POINT_NUM = 10;
    GameDefine.FALL_BACK_LENGTH = 10;
    GameDefine.FORWARD_LENGTH = -40;
    GameDefine.REBORN_POS = 40;
    touch.GameDefine = GameDefine;
})(touch || (touch = {}));