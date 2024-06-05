var touch;
(function(touch) {
    class SkinDialog extends ui.SkinDialogUI {
        constructor(main, ballSkinTexture) {
            super();
            this._main = null;
            this._scene = null;
            this._camera = null;
            this._ball = null;
            this._ballSkinTexture = null;
            this._light = null;
            this._skinIndex = 0;
            this.videoType = -1;
            this._main = main;
            this._ballSkinTexture = ballSkinTexture;
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClickClose, null, false);
            this.btnUse.clickHandler = Laya.Handler.create(this, this.onClickUse, null, false);
            this.listSkin.vScrollBarSkin = "";
            this.listSkin.selectEnable = true;
            this.listSkin.renderHandler = Laya.Handler.create(this, this.onSkinRender, null, false);
            this.listSkin.selectHandler = Laya.Handler.create(this, this.onSkinSelect, null, false);
            this.listSkin.array = touch.GameConfig.SKIN_VIDEO;
            this._skinIndex = touch.GameData.instance.skinIndex;
            let btnId = 0;
            for (var i = 0; i < touch.GameData.instance.videoNums.length; i++) {
                btnId = this.getBtnId(i);
                if (touch.GameData.instance.videoNums[btnId] < touch.GameConfig.SKIN_VIDEO[i] && (touch.GameData.instance.getUnlockSkins().indexOf(i) == -1)) {
                    this._skinIndex = i;
                    break;
                }
            }
            this.initBtn();
            this.tfDiamond.text = touch.GameData.instance.diamond.toString();
            this.btnBuy.clickHandler = Laya.Handler.create(this, this.onClickBuy, null, false);
            Laya.timer.callLater(this, this.showSkin);
        }
        initBtn() {
            let btnId = 0;
            if (this._skinIndex == 0) {
                this.ballDes.text = "Default ball";
            } else if (this._skinIndex < 6) {
                btnId = 1;
                this.ballDes.text = "Surpass " + touch.GameConfig.SKIN_VIDEO[this._skinIndex] + " players";
                this.ballPro.text = touch.GameData.instance.videoNums[1] + "/" + touch.GameConfig.SKIN_VIDEO[this._skinIndex];
            } else if (this._skinIndex < 9) {
                btnId = 6;
                this.ballDes.text = "Play " + touch.GameConfig.SKIN_VIDEO[this._skinIndex] + " MULTI";
                this.ballPro.text = touch.GameData.instance.videoNums[6] + "/" + touch.GameConfig.SKIN_VIDEO[this._skinIndex];
            } else if (this._skinIndex < 14) {
                btnId = 9;
                this.ballDes.text = "Run " + touch.GameConfig.SKIN_VIDEO[this._skinIndex] + " meters";
                this.ballPro.text = touch.GameData.instance.videoNums[9] + "/" + touch.GameConfig.SKIN_VIDEO[this._skinIndex];
            } else if (this._skinIndex < 17) {
                btnId = 14;
                this.ballDes.text = "Play " + touch.GameConfig.SKIN_VIDEO[this._skinIndex] + " SINGLE";
                this.ballPro.text = touch.GameData.instance.videoNums[14] + "/" + touch.GameConfig.SKIN_VIDEO[this._skinIndex];
            } else if (this._skinIndex < 20) {
                btnId = 17;
                this.ballDes.text = "Relive " + touch.GameConfig.SKIN_VIDEO[this._skinIndex] + " times";
                this.ballPro.text = touch.GameData.instance.videoNums[17] + "/" + touch.GameConfig.SKIN_VIDEO[this._skinIndex];
            } else if (this._skinIndex < 23) {
                btnId = 20;
                this.ballDes.text = "Play " + touch.GameConfig.SKIN_VIDEO[this._skinIndex] + " days";
                this.ballPro.text = touch.GameData.instance.videoNums[20] + "/" + touch.GameConfig.SKIN_VIDEO[this._skinIndex];
            } else if (this._skinIndex < 30) {
                btnId = 23;
                this.ballDes.text = "Accelerate " + touch.GameConfig.SKIN_VIDEO[this._skinIndex] + " times";
                this.ballPro.text = touch.GameData.instance.videoNums[23] + "/" + touch.GameConfig.SKIN_VIDEO[this._skinIndex];
            } else {
                btnId = 26;
                this.ballDes.text = "Play " + touch.GameConfig.SKIN_VIDEO[this._skinIndex] + " PK";
                this.ballPro.text = touch.GameData.instance.videoNums[26] + "/" + touch.GameConfig.SKIN_VIDEO[this._skinIndex];
            }
            let isUnlcok = (touch.GameData.instance.videoNums[btnId] >= touch.GameConfig.SKIN_VIDEO[this._skinIndex]) || (touch.GameData.instance.getUnlockSkins().indexOf(this._skinIndex) != -1);
            this.btnUse.visible = isUnlcok && touch.GameData.instance.skinIndex != this._skinIndex;
            this.btnLock.visible = !isUnlcok;
            this.btnBuy.visible = !isUnlcok;
            this.ballDes.visible = true;
            this.ballPro.visible = !isUnlcok;
            this.imgDes.visible = true;
        }
        getBtnId(i) {
            let btnId = i;
            if (i < 6) {
                btnId = 1;
            } else if (i < 9) {
                btnId = 6;
            } else if (i < 14) {
                btnId = 9;
            } else if (i < 17) {
                btnId = 14;
            } else if (i < 20) {
                btnId = 17;
            } else if (i < 23) {
                btnId = 20;
            } else if (i < 30) {
                btnId = 23;
            }
            return btnId;
        }
        destroy() {
            if (this.btnClose.clickHandler != null) {
                this.btnClose.clickHandler.recover();
                this.btnClose.clickHandler = null;
            }
            if (this.btnBuy.clickHandler != null) {
                this.btnBuy.clickHandler.recover();
                this.btnBuy.clickHandler = null;
            }
            if (this.btnUse.clickHandler != null) {
                this.btnUse.clickHandler.recover();
                this.btnUse.clickHandler = null;
            }
            super.destroy();
        }
        onClickClose() {
            this._main.event(touch.GameEvent.CLOSE_SKIN);
        }
        onClickUse() {
            touch.GameData.instance.skinIndex = this._skinIndex;
            this.initBtn();
            this.listSkin.refresh();
            this.updateSkin();
            this._main.event(touch.GameEvent.CHANGE_SKIN);
        }
        onSkinRender(cell, index) {
            if (null == cell || index >= touch.GameConfig.SKIN_VIDEO.length) {
                return;
            }
            cell.imgSkin.skin = "index/skin" + index + ".png";
            cell.imgChoose.visible = (touch.GameData.instance.skinIndex == index);
            let isUnlcok = (touch.GameData.instance.videoNums[this.getBtnId(index)] >= touch.GameConfig.SKIN_VIDEO[index]) || (touch.GameData.instance.getUnlockSkins().indexOf(index) != -1);
            cell.imgLock.visible = !isUnlcok;
            cell.imgSel.visible = index == this._skinIndex;
            cell.imgBG.visible = !cell.imgSel.visible;
            cell.imgVideo.visible = touch.GameConfig.SKIN_TYPE[index] > 0;
            cell.tfVideo.visible = false;
        }
        onSkinSelect(index) {
            if (index >= touch.GameConfig.SKIN_VIDEO.length) {
                return;
            }
            this.tfDiamond.text = touch.GameData.instance.diamond.toString();
            this._skinIndex = index;
            touch.GameConfig.SKIN_TYPE[index] = 0;
            this.initBtn();
            this.listSkin.refresh();
            this.updateSkin();
        }
        showSkin() {
            this._scene = new Laya.Scene();
            this.addChild(this._scene);
            let ballMaterial = new touch.CustomMaterial();
            ballMaterial.setTransparent();
            ballMaterial.setFogDensity(0.04);
            var sphereMesh = new Laya.SphereMesh(0.15, 64, 64);
            this._ball = new Laya.MeshSprite3D(sphereMesh);
            this._ball.transform.position = new Laya.Vector3(0.02, 2.02, 0);
            this._ball.meshRender.material = ballMaterial;
            let self = this;
            this._ball.timer.loop(10, this._ball, function() {
                self.tfDiamond.text = touch.GameData.instance.diamond.toString();
                self._ball.transform.rotate(new Laya.Vector3(4, 4, 0), true, false);
            });
            this._scene.addChild(this._ball);
            this._camera = new Laya.Camera();
            this._scene.addChild(this._camera);
            this._camera.viewport = new Laya.Viewport(this.x, this.y, this.width, this.height);
            this._camera.transform.translate(new Laya.Vector3(0, 1.2, 3), false);
            this._light = new Laya.PointLight();
            this._light.transform.position = new Laya.Vector3(0, 20, 0);
            this._light.range = 100;
            this._light.attenuation = new Laya.Vector3(0, 0, 0);
            this._scene.addChild(this._light);
            this.updateSkin();
        }
        updateSkin() {
            this._ball.meshRender.material.setDiffuseTexture(this._ballSkinTexture[this._skinIndex]);
            this._ball.meshRender.material.setColor(new Laya.Vector4(1, 1, 1, 1));
            this._ball.active = true;
            this.imgRandom.visible = false;
        }
        hideSkin() {
            if (this._ball != null) {
                this._ball.destroy();
                this._ball = null;
            }
            if (this._camera != null) {
                this._camera.destroy();
                this._camera = null;
            }
            if (this._scene != null) {
                this._scene.destroy();
                this._scene = null;
            }
        }
        onClickBuy() {
            GameBaseData.FBEvent(6);
            if (touch.GameData.instance.diamond >= touch.GameConfig.RANDOM_PRICE) {
                GameBaseData.FBEvent(7);
                touch.GameData.instance.setAddDiamond(-touch.GameConfig.RANDOM_PRICE);
                this.tfDiamond.text = touch.GameData.instance.diamond.toString();
                let unlockIndex = this._skinIndex;
                touch.GameData.instance.unlockSkin(unlockIndex);
                this.initBtn();
                this.listSkin.refresh();
                this.listSkin.scrollTo(unlockIndex);
                this._main.event(touch.GameEvent.SHOW_REWARD, ["index/skin" + (unlockIndex) + ".png", 1, false, false]);
            } else {
                touch.Notice.show("Diamond not enough");
                this._main.event(touch.GameEvent.OPEN_GIFT);
            }
        }
    }
    touch.SkinDialog = SkinDialog;
})(touch || (touch = {}));