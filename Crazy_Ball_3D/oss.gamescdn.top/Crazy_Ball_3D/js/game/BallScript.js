var touch;
(function(touch) {
    class BallScript extends Laya.Script {
        constructor() {
            super();
            this.skinIndex = 0;
            this.ballSpeed = 0;
            this.destPosX = 0;
            this.accelerate = 0;
            this.isExceed = true;
            this.isDead = false;
            this.gameOver = false;
            this.isAI = false;
            this.ballSpeed = 0.6 * (20 * Math.random() + 20);
        }
        onTriggerEnter(other) {
            let node = other.owner;
            if (touch.GameDefine.ACCELERATE_BLOCK == node.name) {
                if (!this.isAI) {
                    this.playSound(touch.GameDefine.ACCELERATE_BLOCK);
                    if (Laya.Browser.onMiniGame && touch.GameData.instance.isVibrateOn) {
                        Laya.Browser.window.wx.vibrateShort();
                    }
                    this.accelerate = 1;
                }
                this.ballSpeed += 10.8 * GameBaseData.gameSpeed;
                touch.GameData.instance.addVideoNum(23, 0, 0);
                if (GameBaseData.gameLv == 1) {
                    if (this.ballSpeed > 42 * GameBaseData.gameSpeed) {
                        this.ballSpeed = 42 * GameBaseData.gameSpeed;
                    }
                } else {
                    if (this.ballSpeed > 38 * GameBaseData.gameSpeed) {
                        this.ballSpeed = 38 * GameBaseData.gameSpeed;
                    }
                }
            } else if ("Box" == node.name) {
                if (this.isAI) {
                    this.isDead = true;
                } else {
                    if (!this.gameOver) {
                        this.playSound("Box");
                        this.gameOver = true;
                    }
                }
            }
        }
        getSpeed() {
            return this.ballSpeed;
        }
        getInitSpeed() {
            return this.isAI ? 18 * GameBaseData.gameSpeed : 15 * GameBaseData.gameSpeed;
        }
        setDestPosX(value) {
            this.destPosX = value;
        }
        getDestPosX() {
            return this.destPosX;
        }
        setIsAI(value) {
            this.isAI = value;
        }
        playerExceedAI(value) {
            this.isExceed = value;
        }
        playSound(name) {
            if ("Box" == name) {
                touch.SoundManager.playSound("res/sounds/gameover.mp3");
            } else if (touch.GameDefine.ACCELERATE_BLOCK == name) {
                touch.SoundManager.playSound("res/sounds/speedup.mp3");
            }
        }
    }
    touch.BallScript = BallScript;
})(touch || (touch = {}));