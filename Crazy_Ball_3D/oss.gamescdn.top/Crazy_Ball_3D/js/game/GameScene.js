var touch;
(function(touch) {
    class GameScene {
        constructor(main) {
            this._skinManager = null;
            this._scene = null;
            this._camera = null;
            this._speedWind = null;
            this._deadPointMesh = null;
            this._shadowMaterial = null;
            this._box = null;
            this._buildMaterial = null;
            this._accelerateBlock = null;
            this._plane = null;
            this._ballMaterial = null;
            this._light = null;
            this._ball = null;
            this._ballScript = null;
            this._shadowParent = null;
            this._trailParent = null;
            this._buildParent = null;
            this._boxParent = null;
            this._accBlockParent = null;
            this._planeParent = null;
            this._deadPointParent = null;
            this._nameParent = null;
            this._aiBalls = null;
            this._aiNameTexts = null;
            this._aiNameIndex = null;
            this._curBendTime = 0;
            this._dstIndex = 0;
            this._changeTime = 0;
            this._curBendAngle = null;
            this._isIniting = false;
            this._buildColorIndex = 0;
            this._gameState = touch.EGameState.WAIT;
            this._boxPosZ = 0;
            this._buildPosZ = 0;
            this._planePosZ = 0;
            this._accPosZ = 0;
            this.ballSkinTexture = null;
            this._aiNameTextures = null;
            this._loadingAssets = [];
            this._loadLength = 0;
            this._exceedNum = 0;
            this._downTemp = 0;
            this._cameraDownPosZ = 100;
            this._isTouch = false;
            this._touchPosX = 0;
            this._isAutoRelive = false;
            this._autoReliveTimes = 0;
            this._lifePro = 0;
            this._lifeNum = 0;
            this._aNums = 0;
            this._moveDirePosX = 0;
            this._main = null;
            this._loading = null;
            this._planeCount = 0;
            this._planeColorIndex = 0;
            this._planeColor = null;
            this._planeColorLerp = 0;
            this._main = main;
            this._skinManager = new touch.SkinManager();
            this.loadScene();
        }
        destroy() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseMove);
            this._main.off(touch.GameEvent.START, this, this.onStart);
            this._main.off(touch.GameEvent.REVIVE, this, this.onRevive);
            this._main.off(touch.GameEvent.RESET, this, this.onReset);
            this._main.off(touch.GameEvent.RESTART, this, this.onRestart);
            this._main.off(touch.GameEvent.BACK, this, this.onReset);
            this._main.off(touch.GameEvent.START_AGAIN, this, this.onReset);
            this._main.off(touch.GameEvent.CHANGE_SKIN, this, this.onChangeSkin);
            this._main = null;
            touch.SoundManager.stopMusic();
            this._skinManager.destroy();
            this._skinManager = null;
        }
        onLoaded() {
            if (this._loading != null) {
                this._loading.close("", false);
                this._loading.destroy();
                this._loading = null;
            }
            this.initScene();
            this.initBendAngle();
            this.preCreate();
            this.createAI();
            Laya.timer.frameLoop(1, this, this.onLoop);
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            this._main.on(touch.GameEvent.START, this, this.onStart);
            this._main.on(touch.GameEvent.REVIVE, this, this.onRevive);
            this._main.on(touch.GameEvent.RESET, this, this.onReset);
            this._main.on(touch.GameEvent.RESTART, this, this.onRestart);
            this._main.on(touch.GameEvent.BACK, this, this.onReset);
            this._main.on(touch.GameEvent.START_AGAIN, this, this.onReset);
            this._main.on(touch.GameEvent.CHANGE_SKIN, this, this.onChangeSkin);
            this.onChangeSkin();
            GameBaseData.curLevelFirstDeadNum = 0;
            this._main.event(touch.GameEvent.FIRST_START);
        }
        onMouseDown() {
            this._isTouch = true;
            this._touchPosX = Laya.stage.mouseX;
        }
        onMouseUp() {
            this._isTouch = false;
            this._moveDirePosX = 0;
        }
        onMouseMove() {}
        loadScene() {
            this._scene = new Laya.Scene();
            Laya.stage.addChild(this._scene);
            this._camera = new Laya.Camera(0, 0.1, 100);
            this._scene.addChild(this._camera);
            this._camera.transform.rotate(new Laya.Vector3(-0.05, 0, 0), true, true);
            this._camera.transform.position = new Laya.Vector3(0, 1.5, 7.5);
            this._camera.clearColor = null;
            this._speedWind = Laya.Sprite3D.load("res/scene/layaScene.lh");
            this._speedWind.on(Laya.Event.HIERARCHY_LOADED, this, this.onAssetLoaded);
            this._loadingAssets.push(this._speedWind);
            this._scene.addChild(this._speedWind);
            this._speedWind.active = false;
            this.pointMesh = Laya.Mesh.load("res/scene/deadpoint.lm");
            this._loadingAssets.push(this.pointMesh);
            this._shadowMaterial = new touch.CustomMaterial();
            this._shadowMaterial.setDiffuseTexture(Laya.Texture2D.load("res/skin/whiteCube.png"));
            this._shadowMaterial.setHasLight(false);
            this._shadowMaterial.setFogDensity(0.04);
            this._shadowMaterial.setFogColor(touch.SkinManager.fogColors[this._skinManager.curSkinIndex]);
            this._shadowMaterial.setTransparent();
            this._shadowMaterial.setColor(new Laya.Vector4(0, 0, 0, 0.3));
            let boxMaterial = new touch.CustomMaterial();
            boxMaterial.setDiffuseTexture(Laya.Texture2D.load("res/skin/cube.png"));
            let boxMesh = new Laya.BoxMesh(1, 1, 1);
            this._box = new Laya.MeshSprite3D(boxMesh);
            this._box.meshRender.material = boxMaterial;
            this._buildMaterial = new touch.CustomMaterial();
            this._buildMaterial.setDiffuseTexture(Laya.Texture2D.load("res/skin/whiteCube.png"));
            this._buildMaterial.setHasLambert(true);
            this._buildMaterial.setFogDensity(0.04);
            this.accMesh = Laya.Mesh.load("res/scene/boost-acc.lm");
            this._loadingAssets.push(this.accMesh);
            this.planeMesh = Laya.Mesh.load("res/scene/plane.lm");
            this._loadingAssets.push(this.planeMesh);
            this._ballMaterial = new touch.CustomMaterial();
            this._ballMaterial.setTransparent();
            this._ballMaterial.setFogDensity(0.04);
            this._aiBalls = Array();
            this._aiNameTexts = new Array();
            this.ballSkinTexture = new Array();
            for (let i = 0; i < touch.GameConfig.SKIN_VIDEO.length; i++) {
                this.ballSkinTexture.push(Laya.Texture2D.load("res/skin/skin" + i + ".png"));
                this._loadingAssets.push(this.ballSkinTexture[i]);
            }
            this._aiNameTextures = new Array();
            for (let i = 0; i < touch.SkinManager.AI_NAME_NUM; i++) {
                this._aiNameTextures.push(Laya.Texture2D.load("res/ai_names/" + i + ".png"));
                this._loadingAssets.push(this._aiNameTextures[i]);
            }
            for (let i = 1; i < this._loadingAssets.length; i++) {
                this._loadingAssets[i].on(Laya.Event.LOADED, this, this.onAssetLoaded);
            }
            Laya.stage.bgColor = touch.MathUtil.vec4ToHexStr(touch.SkinManager.bgColors[this._skinManager.curSkinIndex]);
            this._loadLength = this._loadingAssets.length;
            if (GameBaseData.isFBSDK) {
                GameBaseData.FBEvent(2);
            }
        }
        initScene() {
            this._light = new Laya.PointLight();
            this._light.transform.position = new Laya.Vector3(0, 20, 7.5);
            this._light.range = 100;
            this._light.attenuation = new Laya.Vector3(0, 0, 0);
            this._scene.addChild(this._light);
            this._shadowParent = new Laya.MeshSprite3D();
            this._scene.addChild(this._shadowParent);
            this._trailParent = new Laya.MeshSprite3D;
            this._scene.addChild(this._trailParent);
            this._ball = this.createBall(0, 0.25, 3.5, true);
            this._ballScript = this._ball.getComponentByType(touch.BallScript);
            this._ballScript.ballSpeed = this._ballScript.getInitSpeed();
            this._scene.addChild(this._ball);
            this._buildParent = new Laya.MeshSprite3D;
            this._scene.addChild(this._buildParent);
            this._boxParent = new Laya.MeshSprite3D;
            this._scene.addChild(this._boxParent);
            this._accBlockParent = new Laya.MeshSprite3D;
            this._scene.addChild(this._accBlockParent);
            this._planeParent = new Laya.MeshSprite3D;
            this._scene.addChild(this._planeParent);
            this._deadPointParent = new Laya.MeshSprite3D;
            this._scene.addChild(this._deadPointParent);
            this._nameParent = new Laya.MeshSprite3D;
            this._scene.addChild(this._nameParent);
            this._aiNameIndex = new Array();
            this._boxPosZ = -55;
            this._buildPosZ = 0;
            this._planePosZ = -40;
            this._accPosZ = -7;
            this._cameraDownPosZ = 100;
        }
        onAssetLoaded() {
            this._loadingAssets.shift();
            if (GameBaseData.isDebug) {
                console.log("this._loadingAssets.lengt=" + this._loadingAssets.length);
            }
            if (0 == this._loadingAssets.length) {
                let pointMaterial = new touch.CustomMaterial();
                pointMaterial.setTransparent();
                pointMaterial.setDiffuseTexture(Laya.Texture2D.load("res/skin/whiteCube.png"));
                pointMaterial.setHasLight(false);
                this._deadPointMesh = new Laya.MeshSprite3D(this.pointMesh);
                this._deadPointMesh.transform.rotate(new Laya.Vector3(90, -120, 0), true, false);
                this._deadPointMesh.meshRender.sharedMaterial = pointMaterial;
                let accBoxMaterial = new touch.CustomMaterial;
                accBoxMaterial.setDiffuseTexture(Laya.Texture2D.load("res/skin/whiteCube.png"));
                accBoxMaterial.setColor(new Laya.Vector4(251 / 255, 253 / 255, 73 / 255, 1));
                accBoxMaterial.setHasLight(false);
                this._accelerateBlock = new Laya.MeshSprite3D(this.accMesh);
                this._accelerateBlock.transform.rotate(new Laya.Vector3(90, -120, 0), true, false);
                this._accelerateBlock.meshRender.sharedMaterial = accBoxMaterial;
                this._accelerateBlock.name = touch.GameDefine.ACCELERATE_BLOCK;
                let planeMaterial = new touch.CustomMaterial();
                planeMaterial.setDiffuseTexture(Laya.Texture2D.load(touch.SkinManager.planeTexture));
                planeMaterial.setHasLight(false);
                this._plane = new Laya.MeshSprite3D(this.planeMesh);
                this._plane.transform.localScale = new Laya.Vector3(10, 1, 10);
                this._plane.meshRender.sharedMaterial = planeMaterial;
                if (GameBaseData.isDebug) {
                    console.log("资源预加载成功！1111");
                }
                if (GameBaseData.isFBSDK) {
                    FBInstant.setLoadingProgress(100);
                    GameMiniSDK.GetInstance().initSDK("792794774390776", 0);
                    let that = this;
                    that.onLoaded();
                    FBInstant.startGameAsync().then(function() {
                        FBInstant.player.getDataAsync(['ballData']).then(function(data) {
                            console.log('Fb data is loaded');
                            console.log(data);
                            touch.GameData.instance.setFbObj(data.ballData);
                        });
                        console.log("FB startGameAsync");
                        GameBaseData.getSupportedAPIs();
                        GameBaseData.FBEvent(3);
                        GameBaseData.initVideo();
                        GameBaseData.initCPVideo();
                        FBSdkMamager.GetInstance().Init();
                        GameBaseData.getRankLength_mode0();
                        GameBaseData.getRankLength_mode1();
                        if (GameBaseData.isDebug) {
                            console.log("FB startGameAsync");
                        }
                        touch.TipDialog.init();
                        var playerId = FBInstant.player.getID();
                        var playerName = FBInstant.player.getName();
                        GameBaseData.fbHead = FBInstant.player.getPhoto();
                        GameBaseData.UID = playerId;
                        const gameData = FBInstant.getEntryPointData();
                        if (gameData) {
                            let pkid = gameData;
                            let modelType = gameData.gameType;
                            let fbContext = gameData.myReplayData;
                            if (fbContext) {
                                GameBaseData.FBContextID = fbContext;
                                GameBaseData.FBUpscore = true;
                                if (GameBaseData.isDebug) {
                                    console.log("启动游戏拿到fbContext=" + fbContext + " modelType=" + modelType);
                                }
                                FBInstant.context.switchAsync(fbContext);
                                setTimeout(() => {
                                    that.joinGamePK(modelType);
                                    GameBaseData.FBEvent(38);
                                }, 500);
                            }
                        }
                    });
                } else {
                    this.onLoaded();
                }
                GameBaseData.FBEventNew(0);
            } else {
                if (GameBaseData.isFBSDK) {
                    let progress = 20 + Math.floor((this._loadLength - this._loadingAssets.length) * (80 / this._loadLength));
                    FBInstant.setLoadingProgress(progress);
                }
            }
        }
        joinGamePK(gameType) {
            GameBaseData.modelType = gameType;
            if (gameType == 0) {
                this._main.event(touch.GameEvent.ENTER_GAME1);
                GameBaseData.initGameLv();
                GameBaseData.getFriendList(0, null, null);
            } else {
                this._main.event(touch.GameEvent.ENTER_GAME2);
                GameBaseData.initGameLv();
                GameBaseData.getFriendList_model1(0, null, null);
            }
        }
        initBendAngle() {
            this.setBendAngle(new Laya.Vector4(0, 0, 0, 0));
            this._curBendTime = 0;
            this._dstIndex = 3;
            this._changeTime = 739;
            this.setBendDistance(100);
        }
        preCreate() {
            this._isIniting = true;
            for (let index = 0; index < touch.GameDefine.MAX_BOX_NUM; index++) {
                Laya.Pool.recover("Box", this.createBox(0, 0.5, 10).removeSelf());
            }
            for (let index = 0; index < touch.GameDefine.MAX_ACCELERATE_BLOCL_NUM; index++) {
                Laya.Pool.recover(touch.GameDefine.ACCELERATE_BLOCK, this.createAccelerateBlock(0, 0, 0).removeSelf());
            }
            for (let index = 0; index < touch.GameDefine.MAX_BUILD_NUM; index++) {
                Laya.Pool.recover("build", this.createBuild(0, 0, 0).removeSelf());
            }
            for (let index = 0; index < touch.GameDefine.MAX_DEA_POINT_NUM; index++) {
                Laya.Pool.recover("deadPoint", this.createDeadPoint(new Laya.Vector3(0, 0, 0), new Laya.Vector4(1, 1, 1, 1)).removeSelf());
            }
            this._isIniting = false;
        }
        onLoop() {
            var timeDelta = Laya.timer.delta / 1E3;
            if (this._ballScript.ballSpeed > this._ballScript.getInitSpeed()) {
                this._ballScript.ballSpeed -= 0.054 * timeDelta * 60;
                if (this._ballScript.ballSpeed < this._ballScript.getInitSpeed()) {
                    this._ballScript.ballSpeed = this._ballScript.getInitSpeed();
                }
            }
            if ((this._ball.transform.position.z - this._planePosZ) <= 130) {
                this.updatePlane();
            }
            if (this._ball.transform.position.z - this._boxPosZ <= 60) {
                this.updateBox();
            }
            if (GameBaseData.gameLv == 1 && this._ball.transform.position.z - this._buildPosZ <= 70) {
                this.updateBuilding();
            }
            GameBaseData.initGameLv();
            if (GameBaseData.modelType >= 1) {
                this.updateAutoRelive();
            }
            if (this._ball.transform.position.z - this._accPosZ <= 60) {
                this.createAccelerateBlock(Math.floor(5 * Math.random()) - 2, 0, this._accPosZ);
                if (GameBaseData.gameLv == 1) {
                    this._accPosZ -= 20;
                } else {
                    this._accPosZ -= 15;
                }
            }
            for (let i = this._boxParent.numChildren - 1; - 1 < i; i--) {
                let box = this._boxParent.getChildAt(i);
                if (box.transform.position.z > this._camera.transform.position.z) {
                    if (1 == box.numChildren) {
                        Laya.Pool.recover("Box", box.getChildAt(0).removeSelf());
                    }
                    box.timer.clearAll(box);
                    Laya.Pool.recover("Box", box.removeSelf());
                }
            }
            for (let i = this._accBlockParent.numChildren - 1; - 1 < i; i--) {
                let accBlock = this._accBlockParent.getChildAt(i);
                if (accBlock.transform.position.z > this._camera.transform.position.z) {
                    accBlock.removeSelf();
                    Laya.Pool.recover(touch.GameDefine.ACCELERATE_BLOCK, accBlock);
                }
            }
            for (let i = this._buildParent.numChildren - 1; - 1 < i; i--) {
                let build = this._buildParent.getChildAt(i);
                if (build.transform.position.z > this._camera.transform.position.z) {
                    build.timer.clearAll(build);
                    build.removeSelf();
                    Laya.Pool.recover("build", build);
                }
            }
            for (let i = this._planeParent.numChildren - 1; - 1 < i; i--) {
                let plane = this._planeParent.getChildAt(i);
                if (plane.transform.position.z > this._camera.transform.position.z + 50) {
                    plane.removeSelf();
                    Laya.Pool.recover("plane", plane);
                }
            }
            for (let i = this._deadPointParent.numChildren - 1; - 1 < i; i--) {
                let deadPoint = this._deadPointParent.getChildAt(i);
                if (deadPoint.transform.position.z > this._camera.transform.position.z) {
                    ++this._exceedNum;
                    this._main.event(touch.GameEvent.SCROE_CHANGE, this._exceedNum);
                    deadPoint.removeSelf();
                    Laya.Pool.recover("deadPoint", deadPoint);
                }
            }
            if (this._ballScript.gameOver || touch.EGameState.WAIT == this._gameState) {
                if (touch.EGameState.GAME == this._gameState) {
                    if (Laya.Browser.onMiniGame && touch.GameData.instance.isVibrateOn) {
                        Laya.Browser.window.wx.vibrateShort();
                    }
                    if (GameBaseData.modelType == 1 && (this._lifeNum > 0 || this._isAutoRelive)) {
                        this._gameState = touch.EGameState.GAME;
                        this._speedWind.active = false;
                        this._ballScript.gameOver = false;
                        if (!this._isAutoRelive) {
                            this._isAutoRelive = true;
                            this._autoReliveTimes = 40;
                            this._lifeNum -= 1;
                            this._main.event(touch.GameEvent.LIFE_CHANGE, [this._lifePro, 2]);
                        }
                    } else {
                        this._autoReliveTimes = 1;
                        Laya.timer.clear(this, this.onPlaneColor);
                        this._main.event(touch.GameEvent.DEAD);
                        touch.SoundManager.stopMusic();
                        this._gameState = touch.EGameState.GAME_OVER;
                        this._ballScript.ballSpeed = this._ballScript.getInitSpeed();
                        this._ball.active = false;
                        let shadow = this._shadowParent.getChildAt(touch.GameDefine.AI_COUNT);
                        shadow.active = false;
                        this._speedWind.active = false;
                        this.createDeadPoint(this._ball.transform.position, touch.SkinManager.DEAD_COLORS[this._ballScript.skinIndex]);
                        this.updateBendAngle();
                    }
                }
            } else {
                let index = Laya.stage.mouseX - this._touchPosX;
                this._touchPosX = Laya.stage.mouseX;
                let moveX = 0;
                if (Laya.stage.mouseX <= 370) {
                    moveX = Laya.stage.mouseX * 2.1 / 370 - 2.1;
                } else {
                    moveX = (Laya.stage.mouseX - 370) * 2.1 / 370;
                }
                moveX *= 1.5;
                moveX = 2.1 < moveX ? 2.1 : moveX;
                this._moveDirePosX = (index > 0) ? 1 : -1;
                this._ball.transform.position = new Laya.Vector3(-2.1 > moveX ? -2.1 : moveX, this._ball.transform.position.y, this._ball.transform.position.z);
                let d = 2;
                let g = Math.abs(this._ball.transform.position.z - this._cameraDownPosZ);
                35 > g && 15 < g ? d = 2 - 0.05 * (35 - g) : 15 >= g && (d = 1);
                this._camera.transform.rotation = new Laya.Quaternion(this._camera.transform.rotation.x, 0, this._ball.transform.position.x / 50, 1);
                this._ball.transform.rotate(new Laya.Vector3(60 * -this._ballScript.ballSpeed * timeDelta, 0, 0), true, false);
                g = 0;
                this._isTouch && 0 != index && (g = 5 * -this._moveDirePosX * this._ballScript.ballSpeed / 600);
                this._ball.transform.rotation = new Laya.Quaternion(this._ball.transform.rotation.elements[0], 0, g, this._ball.transform.rotation.elements[3]);
                this._ballScript.gameOver || (this._ball.transform.position = new Laya.Vector3(this._ball.transform.position.x, this._ball.transform.position.y, this._ball.transform.position.z - this._ballScript.ballSpeed * timeDelta));
                this.updateFieldOfView();
                this._camera.transform.position = new Laya.Vector3(.5 * this._ball.transform.position.x, 0.75 * d, this._ball.transform.position.z + 4);
                this._speedWind.transform.position = new Laya.Vector3(0, this._camera.transform.position.y + 0.5, this._camera.transform.position.z - 15);
                this._light.transform.position = new Laya.Vector3(0, 20, this._camera.transform.position.z);
                for (let index = 0; index < this._aiBalls.length; ++index) {
                    if (GameBaseData.modelType >= 1) {
                        break;
                    }
                    let aiBall = this._aiBalls[index];
                    var trail = this._trailParent.getChildAt(index);
                    let beHitBoxPosXs = [];
                    for (let h = this._boxParent.numChildren - 1; - 1 < h; h--) {
                        let box = this._boxParent.getChildAt(h);
                        if (5 > (aiBall.transform.position.z - box.transform.position.z) && 1 > box.transform.position.y) {
                            beHitBoxPosXs.push(box.transform.position.x);
                        }
                    }
                    let safeX = this.processBeHitAIBall(aiBall.transform.position.x, beHitBoxPosXs);
                    let ballScript = aiBall.getComponentByType(touch.BallScript);
                    ballScript.setDestPosX(safeX);
                    let moveX = 0.05 > Math.abs(ballScript.getDestPosX() - aiBall.transform.position.x) ? 0 : ballScript.getDestPosX() > aiBall.transform.position.x ? 0.2 : -0.2;
                    if (ballScript.ballSpeed > ballScript.getInitSpeed()) {
                        ballScript.ballSpeed -= 0.054 * timeDelta * 60;
                        if (ballScript.ballSpeed < ballScript.getInitSpeed()) {
                            ballScript.ballSpeed = ballScript.getInitSpeed();
                        }
                    }
                    aiBall.transform.rotate(new Laya.Vector3(60 * -ballScript.getSpeed() * timeDelta, 0, 0), true, false);
                    aiBall.transform.position = new Laya.Vector3(aiBall.transform.position.x + moveX, aiBall.transform.position.y, aiBall.transform.position.z - ballScript.getSpeed() * timeDelta);
                    if (aiBall.transform.position.z - this._ball.transform.position.z < touch.GameDefine.FORWARD_LENGTH) {
                        trail.active = false;
                        trail.timerOnce(50, this, function(trail) {
                            trail.active = true;
                        }, [trail]);
                        aiBall.transform.position = new Laya.Vector3(Math.floor(4 * Math.random() - 2), 0.25, this._ball.transform.position.z + touch.GameDefine.FALL_BACK_LENGTH - 3 * Math.random());
                        let skinIndex = touch.MathUtil.randomInt(0, touch.GameConfig.SKIN_VIDEO.length - 1);
                        ballScript.skinIndex = skinIndex;
                        let ballMaterial = aiBall.meshRender.material;
                        ballMaterial.setDiffuseTexture(this.ballSkinTexture[skinIndex]);
                        ballMaterial.setColor(new Laya.Vector4(1, 1, 1, 1));
                        let trailMaterial = trail.glitterRender.sharedMaterial;
                        trailMaterial.diffuseTexture = Laya.Texture2D.load("res/tail/" + ballScript.skinIndex + ".png");
                        this._aiNameTexts[index].meshRender.material.setDiffuseTexture(this.randomAIName(index));
                        ballScript.isExceed = false;
                        ballScript.isDead = false;
                    }
                    if (0 < aiBall.transform.position.z - this._ball.transform.position.z && ballScript.isAI && ballScript.isExceed) {
                        this._exceedNum++;
                        this._main.event(touch.GameEvent.SCROE_CHANGE, this._exceedNum);
                        ballScript.isExceed = false;
                    }
                    if (0 > aiBall.transform.position.z - this._ball.transform.position.z && ballScript.isAI && !ballScript.isExceed) {
                        if (0 < this._exceedNum) {
                            this._exceedNum--;
                            this._main.event(touch.GameEvent.SCROE_CHANGE, this._exceedNum);
                        }
                        ballScript.isExceed = true;
                    }
                    let isExceed = false;
                    if (aiBall.transform.position.z - this._ball.transform.position.z > touch.GameDefine.FALL_BACK_LENGTH) {
                        isExceed = true;
                    }
                    if (ballScript.isDead || isExceed) {
                        if (!isExceed) {
                            this.playBalldeadSound();
                            this.createDeadPoint(aiBall.transform.position, touch.SkinManager.DEAD_COLORS[ballScript.skinIndex]);
                        }
                        trail.active = false;
                        trail.timerOnce(50, this, function(trail) {
                            trail.active = true;
                        }, [trail]);
                        aiBall.transform.position = new Laya.Vector3(Math.floor(4 * Math.random() - 2), 0.25, this._ball.transform.position.z - touch.GameDefine.REBORN_POS + 3 * Math.random());
                        let skinIndex = 0;
                        skinIndex = touch.MathUtil.randomInt(0, touch.GameConfig.SKIN_VIDEO.length - 1);
                        ballScript.skinIndex = skinIndex;
                        aiBall.meshRender.material.setDiffuseTexture(this.ballSkinTexture[skinIndex]);
                        aiBall.meshRender.material.setColor(new Laya.Vector4(1, 1, 1, 1));
                        let trailMaterial = trail.glitterRender.sharedMaterial;
                        trailMaterial.diffuseTexture = Laya.Texture2D.load("res/tail/" + ballScript.skinIndex + ".png");
                        this._aiNameTexts[index].meshRender.material.setDiffuseTexture(this.randomAIName(index));
                        ballScript.isExceed = true;
                        ballScript.isDead = false;
                    } else {
                        if (trail.active) {
                            let pos1 = touch.Pool.getSysObj("Vector3", Laya.Vector3);
                            pos1.x = this._aiBalls[index].transform.position.x - 0.12;
                            pos1.y = 0.01;
                            pos1.z = this._aiBalls[index].transform.position.z - 0.6;
                            let pos2 = touch.Pool.getSysObj("Vector3", Laya.Vector3);
                            pos2.x = this._aiBalls[index].transform.position.x + 0.12;
                            pos2.y = 0.01;
                            pos2.z = this._aiBalls[index].transform.position.z - 0.6;
                            trail.addGlitterByPositions(pos1, pos2);
                            touch.Pool.recoverSysObj("Vector3", pos1);
                            touch.Pool.recoverSysObj("Vector3", pos2);
                        }
                    }
                }
                for (let index = 0; index < this._shadowParent.numChildren; ++index) {
                    var ballShadow = this._shadowParent.getChildAt(index);
                    let shadowPos = touch.Pool.getSysObj("Vector3", Laya.Vector3);
                    if (index < touch.GameDefine.AI_COUNT) {
                        shadowPos.x = this._aiBalls[index].transform.position.x;
                        shadowPos.y = 0.004;
                        shadowPos.z = this._aiBalls[index].transform.position.z;
                    } else {
                        if (index == touch.GameDefine.AI_COUNT && ballShadow.active) {
                            shadowPos.x = this._ball.transform.position.x;
                            shadowPos.y = 0.004;
                            shadowPos.z = this._ball.transform.position.z;
                        }
                    }
                    ballShadow.transform.position = shadowPos;
                    touch.Pool.recoverSysObj("Vector3", shadowPos);
                }
                var trail = this._trailParent.getChildAt(touch.GameDefine.AI_COUNT);
                let trailPos1 = touch.Pool.getSysObj("Vector3", Laya.Vector3);
                trailPos1.x = this._ball.transform.position.x - 0.12;
                trailPos1.y = 0.01;
                trailPos1.z = this._ball.transform.position.z - 0.6;
                let trailPos2 = touch.Pool.getSysObj("Vector3", Laya.Vector3);
                trailPos2.x = this._ball.transform.position.x + 0.12;
                trailPos2.y = 0.01;
                trailPos2.z = this._ball.transform.position.z - 0.6;
                trail.addGlitterByPositions(trailPos1, trailPos2);
                touch.Pool.recoverSysObj("Vector3", trailPos1);
                touch.Pool.recoverSysObj("Vector3", trailPos2);
                let particle3D = this._speedWind.getChildAt(0);
                if (this._ballScript.ballSpeed >= 25) {
                    this._speedWind.active = true;
                    let rate = 7 * (this._ballScript.ballSpeed - 24);
                    particle3D.particleSystem.emission.emissionRate = rate;
                } else {
                    this._speedWind.active = false;
                    particle3D.particleSystem.emission.emissionRate = 0;
                }
                for (var i = 0; i < this._aiNameTexts.length; ++i) {
                    if (GameBaseData.modelType >= 1) {
                        break;
                    }
                    let namePos = touch.Pool.getSysObj("Vector3", Laya.Vector3);
                    namePos.x = this._aiBalls[i].transform.position.x;
                    namePos.y = this._aiBalls[i].transform.position.y + 0.5;
                    namePos.z = this._aiBalls[i].transform.position.z;
                    this._aiNameTexts[i].transform.position = namePos;
                    touch.Pool.recoverSysObj("Vector3", namePos);
                }
                this.updateBendAngle();
            }
        }
        playBalldeadSound() {
            touch.SoundManager.playSound("res/sounds/dead.mp3");
        }
        processBeHitAIBall(ballPosx, beHitBoxPosXs) {
            var safeXs = [];
            for (let index = 0; index < 5; ++index) {
                safeXs.push(true);
            }
            for (let index = 0; index < beHitBoxPosXs.length; ++index) {
                safeXs[beHitBoxPosXs[index] + 2] = false;
            }
            let d = (Math.floor(ballPosx) + 2) % 5;
            if (safeXs[d]) {
                return d - 2;
            }
            for (let index = 0; index < safeXs.length; ++index) {
                if (safeXs[index]) {
                    return index - 2;
                }
            }
            return 0;
        }
        updateFieldOfView() {
            if (33 < this._ballScript.ballSpeed) {
                if (90 > this._camera.fieldOfView) {
                    this._camera.fieldOfView += 2;
                }
            } else {
                if (60 < this._camera.fieldOfView) {
                    this._camera.fieldOfView -= 0.36;
                }
            }
        }
        updateBox() {
            var type, num, z;
            if (GameBaseData.gameLv == 1) {
                40 >= this._exceedNum ? (type = Math.floor(3 * Math.random()), z = 30) : 80 >= this._exceedNum ? (type = Math.floor(4 * Math.random()), z = 13) : 120 >= this._exceedNum ? (type = Math.floor(5 * Math.random()), z = 12) : (type = Math.floor(9 * Math.random()), z = 10);
            } else {
                40 >= this._exceedNum ? (type = Math.floor(1 * Math.random()), z = 30) : 80 >= this._exceedNum ? (type = Math.floor(3 * Math.random()), z = 13) : 120 >= this._exceedNum ? (type = Math.floor(5 * Math.random()), z = 12) : (type = Math.floor(9 * Math.random()), z = 10);
            }
            if (1 == type || 5 == type || 6 == type)
                3 > this._downTemp ? 40 >= this._exceedNum ? type = 0 == Math.floor(2 * Math.random()) ? 0 : 2 : 80 >= this._exceedNum ? (type = [0, 2, 3], type = type[Math.floor(4 * Math.random())]) : 120 >= this._exceedNum ? (type = [0, 2, 3, 4], type = type[Math.floor(5 * Math.random())]) : (type = [0, 2, 3, 4, 7, 8], type = type[Math.floor(7 * Math.random())]) : this._downTemp = 0;
            num = 4 > type ? Math.floor(2 * Math.random()) + 3 : Math.floor(2 * Math.random()) + 1;
            if (GameBaseData.gameLv == 0) {
                num = Math.floor(num /= 2);
            }
            this._downTemp += 0.25 * num;
            for (var index = num; 0 < index; index--) {
                switch (type) {
                    case 0:
                        var xx = Math.floor(5 * Math.random()) - 2;
                        if ((GameBaseData.gameLv == 0 && (xx == 0 || xx == 1 || xx == -1) && Math.random() < 0.75) || (GameBaseData.gameLv == 1 && (xx == 0 || xx == 1 || xx == -1) && Math.random() < 0.25)) {
                            2 == index && (this._cameraDownPosZ = 3 == num ? this._boxPosZ - 4 : this._boxPosZ);
                            if (GameBaseData.modelType == 6) {
                                this.createBox(xx, .5, this._boxPosZ);
                            } else {
                                this.createBox1();
                            }
                        } else {
                            this.createBox(xx, .5, this._boxPosZ);
                        }
                        break;
                    case 1:
                        2 == index && (this._cameraDownPosZ = 3 == num ? this._boxPosZ - 4 : this._boxPosZ);
                        this.createBox1();
                        break;
                    case 2:
                        this.createBox2();
                        break;
                    case 3:
                        this.createBox3();
                        break;
                    case 4:
                        this.createBox8();
                        break;
                    case 5:
                        1 == index && (this._cameraDownPosZ = 1 == num ? this._boxPosZ - 4 : this._boxPosZ);
                        this.createBox4();
                        break;
                    case 6:
                        1 == index && (this._cameraDownPosZ = 1 == num ? this._boxPosZ - 4 : this._boxPosZ);
                        this.createBox5();
                        break;
                    case 7:
                        this.createBox6();
                        break;
                    case 8:
                        this.createBox7();
                        break;
                }
                this._boxPosZ -= z;
            }
            this._boxPosZ -= z;
        }
        createBox6() {
            for (var a = 0 == Math.floor(2 * Math.random()) ? -2 : 1, b = 1; 4 >= b; b++) {
                this.createBox(a, 1 * b - 0.5, this._boxPosZ);
                this.createBox(a + 1, 1 * b - 0.5, this._boxPosZ);
            }
        }
        createBox7() {
            for (var a = Math.floor(4 * Math.random()) - 2, b = 2; - 2 <= b; b--)
                if (b != a && b != a + 1) {
                    for (var c = 1; 4 >= c; c++) {
                        this.createBox(b, 1 * c - .5, this._boxPosZ);
                    }
                }
        }
        createBox4() {
            for (var a = 0 == Math.floor(2 * Math.random()) ? -1 : 1, b = -2; 2 >= b; b++) {
                this.createBox(b, 1.5, this._boxPosZ);
            }
            this.createBox(-2, 0.5, this._boxPosZ);
            this.createBox(a, 0.5, this._boxPosZ);
            this.createBox(2, 0.5, this._boxPosZ);
        }
        createBox5() {
            for (var a = 0 == Math.floor(2 * Math.random()) ? -1 : 1, b = -2; 2 >= b; b++) {
                this.createBox(b, 2.5, this._boxPosZ);
            }
            this.createBox(-2, 1.5, this._boxPosZ);
            this.createBox(a, 1.5, this._boxPosZ);
            this.createBox(2, 1.5, this._boxPosZ);
            this.createBox(-2, .5, this._boxPosZ);
            this.createBox(a, .5, this._boxPosZ);
            this.createBox(2, .5, this._boxPosZ);
        }
        createBox8() {
            var a = this.createBox(Math.floor(4 * Math.random()) - 2, .5, this._boxPosZ);
            var b = this.createBox(1, 0, 0);
            a.meshRender.material.setColor(new Laya.Vector4(1, 0, 0, 1));
            b.meshRender.material.setColor(new Laya.Vector4(1, 0, 0, 1));
            var c = 0 == Math.floor(2 * Math.random()) ? !1 : !0;
            a.addChild(b);
            this.moveAnimation(a, 3, c, -2, 1);
            this._boxParent.addChild(a);
        }
        createBox3() {
            var a = this.createBox(Math.floor(5 * Math.random()) - 2, .5, this._boxPosZ);
            a.meshRender.material.setColor(new Laya.Vector4(1, 0, 0, 1));
            this.moveAnimation(a, 3, 0 == Math.floor(2 * Math.random()) ? true : true, -2, 2);
        }
        moveAnimation(a, b, c, d, e) {
            a.timer.frameLoop(1, a, function() {
                c ? (a.transform.position = new Laya.Vector3(a.transform.position.x + .017 * b, a.transform.position.y, a.transform.position.z), a.transform.position.x >= e && (c = !1)) : (a.transform.position = new Laya.Vector3(a.transform.position.x - .017 * b, a.transform.position.y, a.transform.position.z), a.transform.position.x <= d && (c = !0));
            });
        }
        createBox2() {
            for (var a = 0 == Math.floor(2 * Math.random()) ? -2 : 2, b = Math.floor(4 * Math.random()) + 1, c = 0 == Math.floor(5 * Math.random()) ? !1 : !0, d = 1; d <= b; d++) {
                this.createBox(a, 1 * d - .5, this._boxPosZ);
            }
            c && 1 < b && this.createBox(-2 == a ? -1 : 1, Math.floor(Math.random() * b) + .5, this._boxPosZ);
        }
        createBox1() {
            var a = 2 * (Math.floor(3 * Math.random()) - 1);
            var b = Math.floor(3 * Math.random()) + 2;
            if (-2 == a) {
                for (var c = 0; c < b; c++) {
                    this.createBox(a, 0.5 + 1 * c, this._boxPosZ);
                }
                for (c = -1; 3 > c; c++) {
                    this.createBox(c, b - 0.5, this._boxPosZ);
                }
            } else if (2 == a) {
                for (c = 0; c < b; c++) {
                    this.createBox(a, .5 + 1 * c, this._boxPosZ);
                }
                for (c = -2; 2 > c; c++) {
                    this.createBox(c, b - .5, this._boxPosZ);
                }
            } else if (0 == a) {
                for (c = 0; c < b; c++) {
                    this.createBox(-2, 0.5 + 1 * c, this._boxPosZ);
                    this.createBox(2, 0.5 + 1 * c, this._boxPosZ);
                }
                for (c = -1; 2 > c; c++) {
                    this.createBox(c, b - 0.5, this._boxPosZ);
                }
            }
        }
        updateBendAngle() {
            this._curBendTime += this._ballScript.ballSpeed / 24 * Laya.timer.delta;
            if (this._curBendTime >= this._changeTime) {
                this._dstIndex = this.randomAngle(this._dstIndex);
                this._changeTime = touch.GameDefine.BEND_TIMES[this._dstIndex];
                this._curBendTime = 0;
            }
            var a = this._curBendTime / this._changeTime;
            var dstAngle = touch.GameDefine.DST_ANGLES[this._dstIndex];
            var bendAngle = new Laya.Vector4(0, 0, 0, 0);
            Laya.Vector4.lerp(this._curBendAngle, dstAngle, a / 20, bendAngle);
            this.setBendAngle(bendAngle);
        }
        randomAngle(dstIndex) {
            var randomIndex = 0;
            do {
                randomIndex = Math.floor(Math.random() * touch.GameDefine.BEND_TIMES.length);
            } while (randomIndex == dstIndex);
            return randomIndex;
        }
        updateBuilding() {
            var y = Math.floor(23 * Math.random()) - 17;
            this.createBuild(-7, Math.floor(23 * Math.random()) - 17, this._buildPosZ);
            this.createBuild(7, y, this._buildPosZ);
            this._buildPosZ -= 20;
        }
        updatePlane() {
            this.createPlane(0, 0, this._planePosZ);
            this._planePosZ -= 100;
        }
        updateAutoRelive() {
            if (GameBaseData.modelType == 1) {
                if (this._isAutoRelive) {
                    if (this._autoReliveTimes % 10 < 5) {
                        this._ball.active = false;
                    } else {
                        this._ball.active = true;
                    }
                    this._autoReliveTimes--;
                    if (this._autoReliveTimes < 0) {
                        this._ball.active = true;
                        this._isAutoRelive = false;
                    }
                }
                if (this._ballScript.ballSpeed > this._ballScript.getInitSpeed()) {
                    this._lifePro += (this._ballScript.ballSpeed - this._ballScript.getInitSpeed()) / 200;
                    if (this._lifePro > 100) {
                        this._lifePro -= 100;
                        this._lifeNum++;
                        if (this._lifeNum > 5) {
                            this._lifeNum = 5;
                            this._lifePro = 100;
                        }
                        this._main.event(touch.GameEvent.LIFE_CHANGE, [this._lifePro, 1]);
                    } else {
                        this._main.event(touch.GameEvent.LIFE_CHANGE, [this._lifePro, 0]);
                    }
                }
                if (this._gameState == touch.EGameState.GAME) {
                    this._exceedNum = Math.floor(this._ball.transform.position.z * -1);
                    this._main.event(touch.GameEvent.SCROE_CHANGE, this._exceedNum);
                    this._exceedNum = this._exceedNum / 30;
                }
            } else {
                if (this._gameState == touch.EGameState.GAME) {
                    this._exceedNum = Math.floor(this._ball.transform.position.z * -1);
                    if (this._exceedNum >= GameBaseData.modelGoal) {
                        this._ballScript.gameOver = true;
                        this._exceedNum = GameBaseData.modelGoal;
                        this._main.event(touch.GameEvent.SCROE_CHANGE, this._exceedNum);
                        this._autoReliveTimes = 1;
                        Laya.timer.clear(this, this.onPlaneColor);
                        this._main.event(touch.GameEvent.DEAD);
                        touch.SoundManager.stopMusic();
                        this._gameState = touch.EGameState.GAME_OVER;
                        this._ballScript.ballSpeed = this._ballScript.getInitSpeed();
                        let shadow = this._shadowParent.getChildAt(touch.GameDefine.AI_COUNT);
                        shadow.active = false;
                        this._speedWind.active = false;
                        this.updateBendAngle();
                    }
                    GameBaseData.modelSpeed = this._ballScript.getSpeed();
                    this._main.event(touch.GameEvent.SCROE_CHANGE, this._exceedNum);
                    this._exceedNum = GameBaseData.modelDif + this._exceedNum / 30;
                }
            }
        }
        createPlane(x, y, z) {
            this._planeCount++;
            if (this._planeCount >= 2) {
                this._planeCount = 0;
                this._planeColorIndex++;
                if (this._planeColorIndex >= touch.SkinManager.PLANE_COLORS.length) {
                    this._planeColorIndex = 0;
                }
            }
            var plane = this._isIniting ? null : Laya.Pool.getItem("plane");
            if (null == plane) {
                plane = Laya.Sprite3D.instantiate(this._plane, null, false, new Laya.Vector3(x, y, z));
            }
            let material = plane.meshRender.material;
            if (null == this._planeColor) {
                this._planeColor = touch.SkinManager.PLANE_COLORS[this._planeColorIndex].clone();
                material.setColor(this._planeColor);
            } else {
                this._planeColorLerp = 0;
                Laya.timer.frameLoop(1, this, this.onPlaneColor);
                Laya.Vector4.lerp(this._planeColor, touch.SkinManager.PLANE_COLORS[this._planeColorIndex], this._planeColorLerp, this._planeColor);
                material.setColor(this._planeColor);
            }
            material.setFogColor(touch.SkinManager.fogColors[this._skinManager.curSkinIndex]);
            material.setDiffuseTexture(Laya.Texture2D.load(touch.SkinManager.planeTexture));
            plane.transform.position = new Laya.Vector3(x, y, z);
            this._planeParent.addChild(plane);
        }
        onPlaneColor() {
            if (this._planeColorLerp >= 0.3) {
                Laya.timer.clear(this, this.onPlaneColor);
            }
            this._planeColorLerp += 0.001;
            Laya.Vector4.lerp(this._planeColor, touch.SkinManager.PLANE_COLORS[this._planeColorIndex], this._planeColorLerp, this._planeColor);
        }
        createDeadPoint(pos, color) {
            var deadPoint = this._isIniting ? null : Laya.Pool.getItem("deadPoint");
            if (null == deadPoint) {
                deadPoint = Laya.Sprite3D.instantiate(this._deadPointMesh, null, false, new Laya.Vector3(pos.x, 0.005, pos.z));
            }
            deadPoint.meshRender.material.setFogColor(touch.SkinManager.fogColors[this._skinManager.curSkinIndex]);
            deadPoint.meshRender.material.setColor(color);
            deadPoint.transform.position = new Laya.Vector3(pos.x, 0.005, pos.z);
            deadPoint.transform.scale = new Laya.Vector3(0.3, 0.3, 1);
            if (!this._isIniting) {
                deadPoint.timer.frameLoop(1, deadPoint, function() {
                    var delta = Laya.timer.delta;
                    if (deadPoint.transform.scale.x < 6) {
                        deadPoint.transform.scale = new Laya.Vector3(deadPoint.transform.scale.x + 0.08 * delta, deadPoint.transform.scale.x + 0.08 * delta, 1);
                    } else if (deadPoint.transform.scale.x > 6) {
                        deadPoint.transform.scale = new Laya.Vector3(6, 6, 1);
                    }
                });
            }
            this._deadPointParent.addChild(deadPoint);
            return deadPoint;
        }
        createBuild(x, y, z) {
            var build = this._isIniting ? null : Laya.Pool.getItem("build");
            if (null == build) {
                let boxMesh = new Laya.BoxMesh(5, 5, 30);
                build = new Laya.MeshSprite3D(boxMesh);
                build.meshRender.material = this._buildMaterial;
            }
            build.meshRender.material.setFogColor(touch.SkinManager.fogColors[this._skinManager.curSkinIndex]);
            if (this._ball.transform.position.z < -100) {
                this.buildAnimation(build);
            } else {
                y = -14;
            }
            let buildColor = null;
            let lerpValue = 0;
            if (this._buildColorIndex % 6 < 2) {
                buildColor = touch.SkinManager.buildColors[3 * this._skinManager.curSkinIndex + 0];
                lerpValue = 0.02;
                build.name = "build1";
            } else if (this._buildColorIndex % 6 < 4) {
                lerpValue = 0.04;
                buildColor = touch.SkinManager.buildColors[3 * this._skinManager.curSkinIndex + 1];
                build.name = "build2";
            } else {
                lerpValue = 0.05;
                buildColor = touch.SkinManager.buildColors[3 * this._skinManager.curSkinIndex + 2];
                build.name = "build3";
            }
            Laya.Vector4.lerp(buildColor, touch.SkinManager.PLANE_COLORS[this._planeColorIndex], lerpValue, buildColor);
            build.meshRender.material.setColor(buildColor);
            this._buildColorIndex++;
            build.transform.position = new Laya.Vector3(x, y, z);
            this._buildParent.addChild(build);
            return build;
        }
        buildAnimation(build) {}
        createAccelerateBlock(x, y, z) {
            var accelerateBlock = this._isIniting ? null : Laya.Pool.getItem(touch.GameDefine.ACCELERATE_BLOCK);
            if (null == accelerateBlock) {
                accelerateBlock = Laya.Sprite3D.instantiate(this._accelerateBlock, null, false, new Laya.Vector3(x, y, z));
                let boxCollider = accelerateBlock.addComponent(Laya.BoxCollider);
                boxCollider.center = new Laya.Vector3(0, 0, 0);
                boxCollider.size = new Laya.Vector3(0.9526, 0.5, 0.2);
            }
            accelerateBlock.meshRender.material.setFogColor(touch.SkinManager.fogColors[this._skinManager.curSkinIndex]);
            accelerateBlock.transform.position = new Laya.Vector3(x, y, z);
            this._accBlockParent.addChild(accelerateBlock);
            return accelerateBlock;
        }
        createBox(x, y, z) {
            var box = (this._isIniting ? null : Laya.Pool.getItem("Box"));
            if (null == box) {
                box = Laya.Sprite3D.instantiate(this._box, null, false, new Laya.Vector3(x, y, z));
                box.name = "Box";
                var boxCollider = box.addComponent(Laya.BoxCollider);
                boxCollider.setFromBoundBox(box.meshFilter.sharedMesh.boundingBox);
            }
            box.meshRender.material.setColor(new Laya.Vector4(1, 1, 1, 0.1));
            box.meshRender.material.setFogColor(touch.SkinManager.fogColors[this._skinManager.curSkinIndex]);
            box.transform.position = new Laya.Vector3(x, y, z);
            this._boxParent.addChild(box);
            return box;
        }
        setBendDistance(distance) {
            let material = this._ball.meshRender.material;
            material.setBendDistance(distance);
            this.setParentBendDistance(this._shadowParent, distance);
            this.setParentBendDistance(this._buildParent, distance);
            this.setParentBendDistance(this._boxParent, distance);
            this.setParentBendDistance(this._accBlockParent, distance);
            this.setParentBendDistance(this._planeParent, distance);
            for (var b = 0; b < this._aiBalls.length; b++) {
                let material = this._aiBalls[b].meshRender.material;
                material.setBendDistance(distance);
            }
            this.setParentBendDistance(this._deadPointParent, distance);
        }
        setParentBendDistance(parent, distance) {
            for (var c = 0; c < parent.numChildren; c++) {
                if (parent.getChildAt(c).numChildren > 0) {
                    if ("Box" == parent.getChildAt(c).name) {
                        parent.getChildAt(c).meshRender.material.setBendDistance(distance);
                    }
                    for (var d = 0; d < parent.getChildAt(c).numChildren; d++) {
                        parent.getChildAt(c).getChildAt(d).meshRender.material.setBendDistance(distance);
                    }
                } else {
                    parent.getChildAt(c).meshRender.material.setBendDistance(distance);
                }
            }
        }
        setBendAngle(angle) {
            this._curBendAngle = angle;
            let ballMaterial = this._ball.meshRender.material;
            ballMaterial.setBendOffset(angle);
            this.setParentBendAngle(this._shadowParent, angle);
            this.setParentBendAngle(this._buildParent, angle);
            this.setParentBendAngle(this._boxParent, angle);
            this.setParentBendAngle(this._accBlockParent, angle);
            this.setParentBendAngle(this._planeParent, angle);
            for (var b = 0; b < this._aiBalls.length; b++) {
                let material = this._aiBalls[b].meshRender.material;
                material.setBendOffset(angle);
            }
            this.setParentBendAngle(this._deadPointParent, angle);
            this.setParentBendAngle(this._nameParent, angle);
            let particle3D = this._speedWind.getChildAt(0);
            if (particle3D != null) {
                particle3D._render.material.setBendOffset(angle);
            }
            for (let index = 0; index < this._trailParent.numChildren; ++index) {
                var trail = this._trailParent.getChildAt(index);
                trail.glitterRender.sharedMaterial.setBendOffset(angle);
            }
        }
        setParentBendAngle(parent, angle) {
            for (var index = 0; index < parent.numChildren; index++) {
                if (parent.getChildAt(index).numChildren > 0) {
                    if ("Box" == parent.getChildAt(index).name) {
                        parent.getChildAt(index).meshRender.material.setBendOffset(angle);
                    }
                    for (var d = 0; d < parent.getChildAt(index).numChildren; d++) {
                        parent.getChildAt(index).getChildAt(d).meshRender.material.setBendOffset(angle);
                    }
                } else {
                    parent.getChildAt(index).meshRender.material.setBendOffset(angle);
                }
            }
        }
        createAI() {
            for (var index = 0; index < touch.GameDefine.AI_COUNT; index++) {
                let x = (0 == index % 2) ? 1 : -1;
                var ball = this.createBall(x, 0.25, 1.5 - 4 * index, false);
                ball.name = "AIBall";
                let ballScript = ball.getComponentByType(touch.BallScript);
                ballScript.setIsAI(true);
                this._scene.addChild(ball);
                this._aiBalls.push(ball);
                this._aiNameTexts.push(this.createAIName(index));
            }
        }
        createBall(x, y, z, isSelf) {
            var sphereMesh = new Laya.SphereMesh(0.25, 16, 16);
            let ball = new Laya.MeshSprite3D(sphereMesh);
            ball.addComponent(touch.BallScript);
            ball.transform.position = new Laya.Vector3(x, y, z);
            ball.meshRender.material = this._ballMaterial;
            let skinIndex = 0;
            if (isSelf) {
                skinIndex = touch.GameData.instance.showSkinIndex;
            } else {
                skinIndex = touch.MathUtil.randomInt(0, touch.GameConfig.SKIN_VIDEO.length - 1);
            }
            let ballScript = ball.getComponentByType(touch.BallScript);
            ballScript.skinIndex = skinIndex;
            ball.meshRender.material.setDiffuseTexture(this.ballSkinTexture[skinIndex]);
            ball.meshRender.material.setFogColor(touch.SkinManager.fogColors[skinIndex]);
            ball.meshRender.material.setColor(new Laya.Vector4(1, 1, 1, 1));
            let sphereCollider = ball.addComponent(Laya.SphereCollider);
            ball.addComponent(Laya.Rigidbody);
            sphereCollider.center = ball.meshFilter.sharedMesh.boundingSphere.center.clone();
            sphereCollider.radius = ball.meshFilter.sharedMesh.boundingSphere.radius;
            let cylinderMesh = new Laya.CylinderMesh(0.2, 0.01, 64);
            let meshSprite3D = new Laya.MeshSprite3D(cylinderMesh);
            meshSprite3D.meshRender.material = this._shadowMaterial;
            meshSprite3D.transform.position = new Laya.Vector3(ball.transform.position.x, 0.004, ball.transform.position.z);
            this._shadowParent.addChild(meshSprite3D);
            let trail = new Laya.Glitter();
            let trailMaterial = trail.glitterRender.sharedMaterial;
            trailMaterial.diffuseTexture = Laya.Texture2D.load("res/tail/" + ballScript.skinIndex + ".png");
            trailMaterial.albedo = new Laya.Vector4(1, 1, 1, 1);
            this._trailParent.addChild(trail);
            var glitterTemplet = trail.templet;
            glitterTemplet.lifeTime = 0.12;
            glitterTemplet.minSegmentDistance = 0.1;
            glitterTemplet.minInterpDistance = 0.6;
            glitterTemplet.maxSlerpCount = 128;
            glitterTemplet.maxSegments = 600;
            return ball;
        }
        createAIName(index) {
            var boxMesh = new Laya.BoxMesh(2, 0.001, 0.2);
            var aiName = new Laya.MeshSprite3D(boxMesh);
            aiName.transform.position = new Laya.Vector3(0, 0, 1E3);
            var material = new touch.CustomMaterial();
            material.setDiffuseTexture(this.randomAIName(index));
            material.setColor(new Laya.Vector4(1, 1, 1, 1));
            material.setHasLight(false);
            material.setHasFog(false);
            material.setHasAlphaTest(true);
            material.setAlphaTestValue(0.5);
            material.setTransparent();
            aiName.meshRender.material = material;
            this._nameParent.addChild(aiName);
            return aiName;
        }
        randomAIName(index) {
            let isFinded = false;
            let randomIndex = 0;
            do {
                randomIndex = Math.floor(touch.SkinManager.AI_NAME_NUM * Math.random());
                if (-1 == this._aiNameIndex.indexOf(randomIndex)) {
                    isFinded = true;
                }
            } while (!isFinded);
            this._aiNameIndex[index + 1] = randomIndex;
            return this._aiNameTextures[randomIndex];
        }
        onStart() {
            this._gameState = touch.EGameState.GAME;
            for (var index = 0; index < this._aiBalls.length; ++index) {
                var trail = this._trailParent.getChildAt(index);
                trail.active = true;
            }
            var trail = this._trailParent.getChildAt(index);
            trail.active = true;
            GameBaseData.initGameLv();
        }
        onRevive() {
            for (var index = this._boxParent.numChildren - 1; - 1 < index; index--) {
                var box = this._boxParent.getChildAt(index);
                if (this._ball.transform.position.z - box.transform.position.z <= 60) {
                    if (1 == box.numChildren) {
                        Laya.Pool.recover("Box", box.getChildAt(0).removeSelf());
                    }
                    box.timer.clearAll(box);
                    Laya.Pool.recover("Box", box.removeSelf());
                }
            }
            for (var index = this._accBlockParent.numChildren - 1; - 1 < index; index--) {
                let accBlock = this._accBlockParent.getChildAt(index);
                if (this._ball.transform.position.z - accBlock.transform.position.z <= 30) {
                    Laya.Pool.recover(touch.GameDefine.ACCELERATE_BLOCK, accBlock.removeSelf());
                }
            }
            this._camera.fieldOfView = 60;
            this._cameraDownPosZ = 100;
            this._ball.active = true;
            this._ball.transform.position = new Laya.Vector3(0, .25, this._ball.transform.position.z);
            this._camera.transform.position = new Laya.Vector3(0, 1.5, this._ball.transform.position.z + 4);
            this._camera.transform.rotation = new Laya.Quaternion(-.05, 0, this._ball.transform.position.x / 25, 1);
            let shadow = this._shadowParent.getChildAt(touch.GameDefine.AI_COUNT);
            shadow.active = true;
            shadow.transform.position = new Laya.Vector3(0, .004, this._ball.transform.position.z);
            Laya.timer.once(3000, this, this.onReviveStart);
        }
        onReviveStart() {
            touch.SoundManager.playMusic("res/sounds/bgm_low.mp3", true);
            this._gameState = touch.EGameState.GAME;
            this._speedWind.active = false;
            this._ballScript.gameOver = false;
            this._ballScript.ballSpeed = 42;
            GameBaseData.initGameLv();
        }
        onRestart() {
            this._gameState = touch.EGameState.GAME;
            touch.SoundManager.playMusic("res/sounds/bgm_low.mp3", true);
            for (var index = 0; index < this._aiBalls.length; ++index) {
                var trail = this._trailParent.getChildAt(index);
                trail.active = true;
            }
            var trail = this._trailParent.getChildAt(index);
            trail.active = true;
            GameBaseData.initGameLv();
        }
        onReset(type) {
            this._boxPosZ = -55;
            this._buildPosZ = 0;
            this._planePosZ = -40;
            this._accPosZ = -7;
            this._cameraDownPosZ = 100;
            this._isTouch = false;
            this._exceedNum = 0;
            this._lifeNum = 0;
            this._lifePro = 0;
            this._main.event(touch.GameEvent.SCROE_CHANGE, this._exceedNum);
            this._touchPosX = 0;
            this._ballScript.gameOver = false;
            this._ball.active = true;
            this._camera.fieldOfView = 60;
            this.setBendAngle(new Laya.Vector4(0, 0, 0, 0));
            this._curBendTime = 0;
            this._dstIndex = 3;
            this._changeTime = 2E3;
            this.setBendDistance(100);
            this._ball.transform.position = new Laya.Vector3(0, .25, 3.5);
            this._ball.transform.rotation = new Laya.Quaternion(0, 0, 0, 1);
            this._light.transform.position = new Laya.Vector3(0, 20, 7.5);
            for (let index = 0; index < this._aiBalls.length; ++index) {
                let ballScript = this._aiBalls[index].getComponentByType(touch.BallScript);
                let material = this._aiBalls[index].meshRender.material;
                if (GameBaseData.modelType > 0) {
                    this._aiBalls[index].transform.position = new Laya.Vector3(0 == index % 2 ? 1 : -1, .25, 300);
                } else {
                    this._aiBalls[index].transform.position = new Laya.Vector3(0 == index % 2 ? 1 : -1, .25, 1.5 - 2 * index);
                }
                this._aiBalls[index].transform.rotation = new Laya.Quaternion(0, 0, 0, 1);
                let skinIndex = touch.MathUtil.randomInt(0, touch.GameConfig.SKIN_VIDEO.length - 1);
                ballScript.skinIndex = skinIndex;
                material.setDiffuseTexture(this.ballSkinTexture[skinIndex]);
                material.setColor(new Laya.Vector4(1, 1, 1, 1));
                this._aiNameTexts[index].meshRender.material.setDiffuseTexture(this.randomAIName(index));
                ballScript.isExceed = true;
                ballScript.isDead = false;
                ballScript.ballSpeed = 0.6 * (20 * Math.random() + 20);
                this._aiNameTexts[index].transform.position = new Laya.Vector3(this._aiBalls[index].transform.position.x, this._aiBalls[index].transform.position.y + 0.5, this._aiBalls[index].transform.position.z);
                let trail = this._trailParent.getChildAt(index);
                trail.active = false;
            }
            let trail = this._trailParent.getChildAt(touch.GameDefine.AI_COUNT);
            trail.active = false;
            this._camera.transform.position = new Laya.Vector3(0, 1.5, 7.5);
            this._camera.transform.rotation = new Laya.Quaternion(-.05, 0, this._ball.transform.position.x / 25, 1);
            this._ballScript.ballSpeed = this._ballScript.getInitSpeed();
            this._speedWind.transform.position = new Laya.Vector3(0, this._camera.transform.position.y, this._camera.transform.position.z - 10);
            this._speedWind.active = false;
            for (let index = 0; index < this._shadowParent.numChildren; ++index) {
                let shadow = this._shadowParent.getChildAt(index);
                index < touch.GameDefine.AI_COUNT ? shadow.transform.position = new Laya.Vector3(this._aiBalls[index].transform.position.x, 0.004, this._aiBalls[index].transform.position.z) : (shadow.active || (shadow.active = true), shadow.transform.position = new Laya.Vector3(this._ball.transform.position.x, 0.004, this._ball.transform.position.z));
            }
            for (let index = this._boxParent.numChildren - 1; - 1 < index; index--) {
                let box = this._boxParent.getChildAt(index);
                if (1 == box.numChildren) {
                    Laya.Pool.recover("Box", box.getChildAt(0).removeSelf());
                }
                box.timer.clearAll(box);
                Laya.Pool.recover("Box", box.removeSelf());
            }
            for (let index = this._buildParent.numChildren - 1; - 1 < index; index--) {
                let build = this._buildParent.getChildAt(index);
                build.timer.clearAll(build);
                build.removeSelf();
                Laya.Pool.recover("build", build);
            }
            for (let index = this._planeParent.numChildren - 1; - 1 < index; index--) {
                let plane = this._planeParent.getChildAt(index);
                plane.removeSelf();
                Laya.Pool.recover("plane", plane);
            }
            for (let index = this._accBlockParent.numChildren - 1; - 1 < index; index--) {
                let accBlock = this._accBlockParent.getChildAt(index);
                accBlock.removeSelf();
                Laya.Pool.recover(touch.GameDefine.ACCELERATE_BLOCK, accBlock);
            }
            for (let index = this._deadPointParent.numChildren - 1; - 1 < index; index--) {
                let deadPoint = this._deadPointParent.getChildAt(index);
                deadPoint.timer.clearAll(deadPoint);
                deadPoint.removeSelf();
                Laya.Pool.recover("deadPoint", deadPoint);
            }
            this._skinManager.curSkinIndex = (this._skinManager.curSkinIndex + 1) % 2;
            let fogColor = touch.SkinManager.fogColors[this._skinManager.curSkinIndex];
            this.setChildFogColor(this._shadowParent, fogColor);
            this._ball.meshRender.material.setFogColor(fogColor);
            for (let index = 0; index < this._aiBalls.length; index++) {
                this._aiBalls[index].meshRender.material.setFogColor(fogColor);
            }
            this.setChildFogColor(this._deadPointParent, fogColor);
            Laya.stage.bgColor = touch.MathUtil.vec4ToHexStr(fogColor);
            this._gameState = touch.EGameState.WAIT;
            this._planeColorIndex = 0;
        }
        setChildFogColor(parent, fogColor) {
            for (let index = 0; index < parent.numChildren; index++) {
                if (0 < parent.getChildAt(index).numChildren) {
                    "Box" == parent.getChildAt(index).name && parent.getChildAt(index).meshRender.material.setFogColor(fogColor);
                    for (var g = 0; g < parent.getChildAt(index).numChildren; g++) {
                        parent.getChildAt(index).getChildAt(g).meshRender.material.setFogColor(fogColor);
                    }
                } else {
                    parent.getChildAt(index).meshRender.material.setFogColor(fogColor);
                }
            }
        }
        onChangeSkin() {
            let ballScript = this._ball.getComponentByType(touch.BallScript);
            ballScript.skinIndex = touch.GameData.instance.showSkinIndex;
            this._ball.meshRender.material.setDiffuseTexture(this.ballSkinTexture[touch.GameData.instance.showSkinIndex]);
            this._ball.meshRender.material.setFogColor(touch.SkinManager.fogColors[touch.GameData.instance.showSkinIndex]);
            this._ball.meshRender.material.setColor(new Laya.Vector4(1, 1, 1, 1));
            var trail = this._trailParent.getChildAt(touch.GameDefine.AI_COUNT);
            let trailMaterial = trail.glitterRender.sharedMaterial;
            trailMaterial.diffuseTexture = Laya.Texture2D.load("res/tail/" + ballScript.skinIndex + ".png");
        }
    }
    touch.GameScene = GameScene;
})(touch || (touch = {}));