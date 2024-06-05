let LayaTools = {
    LocalDownloader: {
        download(url, type) {
            return new Promise((resolve, reject) => {
                try {
                    Laya.loader.load(url, Laya.Handler.create(undefined, (result) => {
                        if (!result) {
                            reject();
                        } else {
                            resolve(result);
                        }
                    }), undefined, type);
                } catch (e) {
                    reject(e);
                }
            });
        },
        downloadImage(url) {
            return this.download(url, Laya.Loader.IMAGE);
        },
        downloadJson(url) {
            return this.download(url, Laya.Loader.JSON);
        }
    },
    convertImageToSpriteFrame(img) {
        return LayaSpec.convertImageToTexture(img);
    },
    size(w, h) {
        return {
            width: w,
            height: h
        };
    },
    getWinSize() {
        return this.size(Laya.stage.width, Laya.stage.height);
    },
    getStageCenter() {
        let x = Laya.stage.width / 2;
        let y = Laya.stage.height / 2;
        return new Laya.Point(x, y);
    },
    getNodeSize(node) {
        let w = 0;
        let h = 0;
        if (node.width) {
            w = node.width;
        }
        if (node.height) {
            h = node.height;
        }
        return {
            width: w,
            height: h
        };
    },
    getNodeCenterPivot(node) {
        let size = this.getNodeSize(node);
        let ax = node["anchorX"] ? node["anchorX"] : 0;
        let ay = node["anchorY"] ? node["anchorY"] : 0;
        let px = size.width * ax;
        let py = size.height * ay;
        return new Laya.Point(size.width * 0.5 - px, size.height * 0.5 - py);
    },
    getNodeCenterOrigin(node) {
        let size = this.getNodeSize(node);
        return new Laya.Point(size.width * 0.5, size.height * 0.5);
    },
    getNodeCenterToParentCenterOffsetPosition(node, parentNode, offset) {
        let parentCenter = this.getNodeCenterOrigin(parentNode);
        let nodePivot = this.getNodeCenterPivot(node);
        let pos = {
            x: 0,
            y: 0
        };
        let off = {
            x: 0,
            y: 0
        };
        if (offset) {
            if (typeof(offset.x) !== "undefined") {
                off.x = offset.x;
            }
            if (typeof(offset.y) !== "undefined") {
                off.y = offset.y;
            }
        }
        off.y *= -1;
        pos.x = parentCenter.x - nodePivot.x + off.x;
        pos.y = parentCenter.y - nodePivot.y + off.y;
        return pos;
    },
    getNodeToParentOffset(node, parentNode) {
        let parentCenter = this.getNodeCenterOrigin(parentNode);
        let nodePivot = this.getNodeCenterPivot(node);
        let pos = {
            x: node.x,
            y: node.y
        };
        let offset = {
            x: 0,
            y: 0
        };
        offset.x = pos.x - (parentCenter.x - nodePivot.x);
        offset.y = pos.y - (parentCenter.y - nodePivot.y);
        offset.y *= -1;
        return offset;
    },
    setNodeToParentCenterOffset(node, parentNode, offset) {
        let pos = LayaTools.getNodeCenterToParentCenterOffsetPosition(node, parentNode, offset);
        node.pos(pos.x, pos.y);
    },
    addNodeToParentCenterOffset(node, parentNode, offset) {
        parentNode.addChild(node);
        LayaTools.setNodeToParentCenterOffset(node, parentNode, offset);
    },
};
let _myeaseBackOutObj;
let _myeaseBackInObj;
let myovershoot = 0.9;
_myeaseBackInObj = {
    easing: function(time1) {
        return (time1 === 0 || time1 === 1) ? time1 : time1 * time1 * ((myovershoot + 1) * time1 - myovershoot);
    },
    reverse: function() {
        return _myeaseBackOutObj;
    }
};
_myeaseBackOutObj = {
    easing: function(time1) {
        time1 = time1 - 1;
        return time1 * time1 * ((myovershoot + 1) * time1 + myovershoot) + 1;
    },
    reverse: function() {
        return _myeaseBackInObj;
    }
};
let myEaseBackIn = function() {
    return _myeaseBackInObj;
};
let myEaseBackOut = function() {
    return _myeaseBackOutObj;
};
class MiniGameNodeTools {
    static copyAttrs(node, attrs) {
        if (!attrs) {
            return;
        }
        if (attrs["scale"]) {
            let scale = attrs["scale"];
            node.scale(scale, scale);
            attrs["scale"] = undefined;
        }
        for (var key in attrs) {
            if (typeof(attrs[key]) !== "undefined") {
                node[key] = attrs[key];
            }
        }
    }
    static addChildToCenterOffset(childNode, parent, x, y) {
        LayaTools.addNodeToParentCenterOffset(childNode, parent, {
            x: x,
            y: y
        });
    }
    static setNodeToParentCenterOffset(node, parentNode, offset) {
        LayaTools.setNodeToParentCenterOffset(node, parentNode, offset);
    }
    static setScale(node) {}
    static setVisible(node, v) {
        node.visible = v;
    }
}
class MiniGameNode extends Laya.Box {
    constructor(attrs) {
        super();
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.width = 1;
        this.height = 1;
        LayaSpec.addOnEnableEvent(this);
        this.init(attrs);
    }
    init(attrs) {
        this.attr(attrs);
    }
    attr(attrs) {
        MiniGameNodeTools.copyAttrs(this, attrs);
    }
    addChildToCenterOffset(node, x, y) {
        MiniGameNodeTools.addChildToCenterOffset(node, this, x, y);
    }
    setVisible(v) {
        MiniGameNodeTools.setVisible(this, v);
    }
    addSprite(skin, x, y, attr) {
        let img = new MiniGameImage(undefined, skin);
        this.addChildToCenterOffset(img, x, y);
        img.attr(attr);
        return img;
    }
    addLabel(txt, x, y, attr) {
        let label = new Laya.Text();
        label.text = txt;
        MiniGameNodeTools.copyAttrs(label, attr);
        this.addChildToCenterOffset(label, x, y);
    }
}
LayaSpec.addEnableFunctionsToNodeType(MiniGameNode);
class MiniGameImage extends Laya.Image {
    constructor(attrs, skin) {
        super(skin);
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.init(attrs);
    }
    init(attrs) {
        this.attr(attrs);
    }
    attr(attrs) {
        MiniGameNodeTools.copyAttrs(this, attrs);
    }
    addChildToCenterOffset(node, x, y) {
        MiniGameNodeTools.addChildToCenterOffset(node, this, x, y);
    }
    setVisible(v) {
        MiniGameNodeTools.setVisible(this, v);
    }
    changeImage(texture) {
        let offset = LayaTools.getNodeToParentOffset(this, this.parent);
        this.texture = texture;
        this.width = texture.width;
        this.height = texture.height;
        this.anchorX = 0;
        this.anchorY = 0;
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        MiniGameNodeTools.setNodeToParentCenterOffset(this, this.parent, offset);
    }
}
class MiniGameButton extends Laya.Button {
    constructor(attrs, skin, label) {
        super(skin, label);
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.stateNum = 1;
        this.animationScale = 0.9;
        this.animationDuration = 100;
        this.animationTarget = this;
        LayaSpec.addOnEnableEvent(this);
        this.init(attrs);
    }
    init(attrs) {
        this.attr(attrs);
        this.clickHandler = Laya.Handler.create(this, this.onClicked, null, false);
    }
    attr(attrs) {
        MiniGameNodeTools.copyAttrs(this, attrs);
    }
    setVisible(v) {
        MiniGameNodeTools.setVisible(this, v);
    }
    addChildToCenterOffset(node, x, y) {
        MiniGameNodeTools.addChildToCenterOffset(node, this, x, y);
    }
    addSprite(skin, x, y, attr) {
        let img = new MiniGameImage(undefined, skin);
        this.addChildToCenterOffset(img, x, y);
        img.attr(attr);
        return img;
    }
    addLabel(txt, x, y, attr) {
        let label = new Laya.Text();
        label.text = txt;
        MiniGameNodeTools.copyAttrs(label, attr);
        this.addChildToCenterOffset(label, x, y);
    }
    _playDownAnimation() {
        Laya.Tween.to(this.animationTarget, {
            scaleX: this.animationScale,
            scaleY: this.animationScale
        }, this.animationDuration, Laya.Ease.backOut);
    }
    _playUpAnimation() {
        Laya.Tween.to(this.animationTarget, {
            scaleX: 1,
            scaleY: 1
        }, this.animationDuration, Laya.Ease.backOut);
    }
    setClickCallback(callback) {
        this._clickCallback = callback;
    }
    onClicked() {
        if (this._clickCallback) {
            this._clickCallback(this);
        }
    }
    onMouse(evt) {
        super.onMouse(evt);
        if (evt.type === Laya.Event.MOUSE_DOWN) {
            this._playDownAnimation();
        } else if (evt.type === Laya.Event.MOUSE_UP || evt.type === Laya.Event.MOUSE_OUT) {
            this._playUpAnimation();
        }
    }
    enableTouch() {
        this.mouseEnabled = true;
    }
    disableTouch() {
        this.mouseEnabled = false;
    }
}
LayaSpec.addEnableFunctionsToNodeType(MiniGameButton);
class MiniGameCandidateButton extends MiniGameButton {
    init(attrs) {
        this._gameIcon = null;
        this._loadingIcon = null;
        this._placementNode = null;
        this._index = -1;
        this._candidate = undefined;
        this._nextAppId = "";
        this._nextPlacementId = "";
        this._hasListener = false;
        super.init(attrs);
    }
    onEnable() {
        super["onEnable"]();
    }
    onDisable() {
        super["onDisable"]();
    }
    onCandidateReady(evt) {
        if (evt.target.PlacementId === this._nextPlacementId && evt.target.AppId === this._nextAppId) {
            let candidate = evt.target;
            this._showCandidate(candidate);
        }
    }
    setCandidateData(_placementNode, index, candidate) {
        this._placementNode = _placementNode;
        this._index = index;
        this._showCandidate(candidate);
    }
    _showCandidate(candidate) {
        if (!candidate) {
            return;
        }
        if (!candidate.getAsset()) {
            this._nextPlacementId = candidate.PlacementId;
            this._nextAppId = candidate.AppId;
            if (!this._hasListener) {
                MiniGameSdkInstant.addRefCandidateReadyListener(this.onCandidateReady, this);
                this._hasListener = true;
            }
            return;
        }
        this._candidate = candidate;
        this._nextAppId = "";
        this._nextPlacementId = "";
        this._gameIcon.changeImage(candidate.getAsset());
        this._gameIcon.visible = true;
        if (this._loadingIcon) {
            this._loadingIcon.visible = false;
        }
    }
    onClicked() {
        if (this._candidate) {
            let candidate = this._candidate;
            let tag = this._placementNode ? this._placementNode.eventTag : "";
            MiniGameSdkInstant.getSdk()._dispatchEvent(MiniGameSdkInstant.getSdk().Events.Ref_Candidate_Clicked, candidate, {
                placementId: candidate.PlacementId,
                appId: candidate.AppId,
                tag: tag,
                index: this._index
            });
            candidate.onClick(this._placementNode.eventTag, this._index);
        }
        super.onClicked();
    }
}
class MiniGamePlacementNode extends MiniGameNode {
    constructor(attrs) {
        super(attrs);
    }
    init(attrs) {
        super.init(attrs);
        this._placementId = "";
        this.eventTag = "";
        this._hasListener = false;
        this._placement = null;
        this._candidateNodes = [];
        this._clickCallback = undefined;
        this._candidateContainer = this;
        this._showEventLogged = true;
    }
    onEnable() {
        super["onEnable"]();
    }
    onDisable() {
        super["onDisable"]();
        if (this._hasListener) {
            MiniGameSdkInstant.removeRefServiceReadyListener(this.onConfigReady, this);
            this._hasListener = false;
        }
    }
    setPlacementId(placementId) {
        this._placementId = placementId;
        this.updateData();
    }
    show() {
        LayaSpec.activeNode(this, true);
        this.updateData();
        if (this._placement) {
            console.info("===> show placement: ", this._placementId);
            this._placement.onShow();
            this._showEventLogged = true;
        } else {
            console.info("===> cache show event, placement: ", this._placementId);
            this._showEventLogged = false;
        }
    }
    hide(withAnimation = false) {
        return new Promise(r => {
            console.info("===> hide placement: ", this._placementId);
            LayaSpec.activeNode(this, false);
            if (this._placement) {
                this._placement.refresh();
            }
            r();
        });
    }
    updateData() {
        if (this._placementId.length <= 0) {
            return;
        }
        if (!MiniGameSdkInstant.isRefServiceEnabled()) {
            this.visible = false;
            return;
        }
        if (!MiniGameSdkInstant.isRefSerivceReady() && !this._hasListener) {
            MiniGameSdkInstant.addRefServiceReadyListener(this.onConfigReady, this);
            this._hasListener = true;
            return;
        }
        let placement = MiniGameSdkInstant.getPlacement(this._placementId);
        if (!placement) {
            MiniGameSdkInstant.logs.warn("", "Missing Placement: " + this._placementId);
            return;
        }
        this._placement = placement;
        let candidates = placement.getCandidates();
        this._updateCandidates(candidates);
        this._updateLayout(placement);
        if (!this._showEventLogged) {
            console.info("===> log delayed show event", this._placementId);
            this._showEventLogged = true;
            placement.onShow();
        }
    }
    onConfigReady() {
        this.updateData();
        if (this._hasListener) {
            MiniGameSdkInstant.removeRefServiceReadyListener(this.onConfigReady, this);
            this._hasListener = false;
        }
    }
    _updateCandidates(candidates) {
        for (let i = 0; i < candidates.length; i++) {
            let candidate = candidates[i];
            let node = null;
            if (i >= this._candidateNodes.length) {
                node = this._addCandidateNode(i, candidates.length);
                this._candidateNodes.push(node);
            } else {
                node = this._candidateNodes[i];
            }
            node.setCandidateData(this, i, candidate);
            node.setClickCallback(this._clickCallback);
        }
    }
    _updateLayout(placement) {}
    _addCandidateNode(index, total) {
        let node = this._createCandidateNode();
        console.assert(node != null, "_createCandidateNode is invalid");
        if (node == null) {
            node = new MiniGameCandidateButton();
        }
        let pos = this._getCandidatePos(index, total);
        MiniGameNodeTools.addChildToCenterOffset(node, this._candidateContainer, pos.x, pos.y);
        return node;
    }
    _getCandidatePos(index, total) {
        return new Laya.Point(0, 0);
    }
    _createCandidateNode() {
        return null;
    }
    refreshData() {
        if (this._placement) {
            this._placement.refresh();
        }
        this.updateData();
        if (this._placement) {
            this._placement.onShow();
        }
    }
    setClickCallback(callback) {
        this._clickCallback = callback;
        for (let i = 0; i < this._candidateNodes.length; i++) {
            this._candidateNodes[i].setClickCallback(callback);
        }
    }
}
class MiniGamePlacementBanner extends MiniGamePlacementNode {
    _createCandidateNode() {
        let bannerWidth = 660;
        let bannerHeight = 660 / 2;
        let bannerListCenterY = 21;
        let space = 80;
        let iconWidth = 500;
        let scale = bannerWidth / 500;
        let node = new MiniGameCandidateButton({
            width: bannerWidth,
            height: bannerHeight,
            _animationScale: 0.95
        });
        node._gameIcon = node.addSprite("", 0, 0, {
            scale: scale
        });
        node.animationScale = 0.95;
        node.addSprite("MiniGameSdk/uiassets/HOT.png", 275, 140);
        return node;
    }
}
class MiniGamePlacementIcon extends MiniGamePlacementNode {
    init(attr) {
        super.init(attr);
        this._animation = false;
        this._candidateContainer = new MiniGameNode({
            width: this.width,
            height: this.height
        });
        MiniGameNodeTools.addChildToCenterOffset(this._candidateContainer, this, 0, 0);
        this._playIconAnimation();
    }
    _getCandidatePos(index, total) {
        return new Laya.Point(0, -19);
    }
    _createCandidateNode() {
        let node = new MiniGameCandidateButton({
            width: 128,
            height: 166
        });
        let bg = node.addSprite("MiniGameSdk/uiassets/kuang@2x.png", 0, 0, {
            scale: 1
        });
        node.addSprite("MiniGameSdk/uiassets/RoundRectWhite.png", 0, -58, {
            scale: 1
        });
        node.addSprite("MiniGameSdk/uiassets/TxtPlay.png", 0, -58, {
            scale: 1
        });
        node._gameIcon = node.addSprite("", 0, 22, {
            scale: 1
        });
        node._gameIcon.visible = false;
        return node;
    }
    _playIconAnimation() {
        if (this._animation) {
            return;
        }
        this._animation = true;
        let maxScale = 1.1;
        let minScale = 0.9;
        let duration = 0.75;
        let target = this._candidateContainer;
        target.scale(minScale, minScale);
        let scaleDown;
        let scaleUp;
        scaleUp = function() {
            Laya.Tween.to(target, {
                scaleX: maxScale,
                scaleY: maxScale
            }, duration * 1000, null, Laya.Handler.create(null, scaleDown));
        };
        scaleDown = function() {
            Laya.Tween.to(target, {
                scaleX: minScale,
                scaleY: minScale
            }, duration * 1000, null, Laya.Handler.create(null, scaleUp));
        };
        scaleUp();
    }
}
class MiniGamePlacementIconList extends MiniGamePlacementNode {
    _getCandidatePos(index, total) {
        let width = 112;
        let space = 20;
        let totalWidth = width * total + space * (total - 1);
        let x0 = -totalWidth / 2;
        return new Laya.Point(x0 + width * (index + 0.5) + space * index, 0);
    }
    _createCandidateNode() {
        let width = 112;
        let node = new MiniGameCandidateButton({
            width: width,
            height: width
        });
        node._gameIcon = node.addSprite("", 0, 0, {
            scale: 1
        });
        return node;
    }
}
class MiniGameListPlacement extends MiniGamePlacementNode {
    constructor() {
        super(...arguments);
        this._placementLayout = {
            spaceX: 20,
            itemWidth: 112,
            speed: -20,
            showCount: 5
        };
    }
    _createCandidateNode() {
        let width = 112;
        let node = new MiniGameCandidateButton({
            width: width,
            height: width
        });
        node._gameIcon = node.addSprite("", 0, 0, {
            scale: 1
        });
        return node;
    }
    init(attrs) {
        super.init(attrs);
        if (typeof(this.bgHeightWithoutTitle) !== "number") {
            this.bgHeightWithoutTitle = 160;
        }
        if (typeof(this.bgHeightWithTitle) !== "number") {
            this.bgHeightWithTitle = 180;
        }
        this._content = new MiniGameNode({
            width: this.width,
            height: this.height
        });
        MiniGameNodeTools.addChildToCenterOffset(this._content, this, 0, 0);
        let bgNode = new MiniGameNode({
            width: this.width,
            height: this.height
        });
        this._content.addChildToCenterOffset(bgNode, 0, 0);
        LayaSpec.setNodeBackgroundColor(bgNode, "#000000");
        bgNode.alpha = 155 / 255;
        this._bgNode = bgNode;
        LayaSpec.activeNode(bgNode, false);
        let label = new Laya.Text();
        label.fontSize = 20;
        label.color = "#ffffff";
        MiniGameNodeTools.addChildToCenterOffset(label, this._content, 0, 80);
        this._title = label;
        this._candidateContainer = new MiniGameNode({
            width: this.width,
            height: this.height
        });
        MiniGameNodeTools.addChildToCenterOffset(this._candidateContainer, this._content, 0, 0);
    }
    setLayout(style) {
        if (typeof(style.spaceX) === "number") {
            this._placementLayout.spaceX = style.spaceX;
        }
        if (typeof(style.itemWidth) === "number") {
            this._placementLayout.itemWidth = style.itemWidth;
        }
        if (typeof(style.speed) === "number") {
            this._placementLayout.speed = style.speed;
        }
        if (typeof(style.showCount) === "number") {
            this._placementLayout.showCount = style.showCount;
        }
    }
    _updateLayout(placement) {
        super._updateLayout(placement);
        if (placement.Rule["layout"]) {
            this.setLayout(placement.Rule["layout"]);
        }
        let layout = this._placementLayout;
        let container = this._candidateContainer;
        let items = this._candidateNodes;
        if (!layout.itemWidth) {
            let item = items[0];
            if (item) {
                layout.itemWidth = item.width;
            }
        }
        let space = layout.spaceX;
        let itemWidth = layout.itemWidth;
        let x0 = -container.width / 2;
        let totalLength = itemWidth * items.length + space * (items.length - 1);
        if (totalLength < (container.width + itemWidth)) {
            layout.speed = 0;
            if (totalLength <= (container.width)) {
                x0 = -totalLength / 2;
            }
            this.stopMovingItems();
        } else {
            this.startMovingItems();
        }
        let c = Math.floor(items.length / 2);
        if (!this._candidateOffsets) {
            this._candidateOffsets = [];
        }
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let j = Math.ceil(i / 2);
            let idx = c + ((i % 2 == 0) ? j : -j);
            let x = x0 + itemWidth * (idx + 0.5) + space * idx;
            let y = 0;
            this._candidateOffsets[i] = {
                x: x,
                y: y
            };
            MiniGameNodeTools.setNodeToParentCenterOffset(item, container, {
                x: x,
                y: y
            });
        }
        let showTitle = false;
        if (this._title) {
            if (placement.hasTitle()) {
                let title = placement.getTitle();
                if (title.length > 0) {
                    this._title.text = title;
                    LayaSpec.activeNode(this._title, true);
                    showTitle = true;
                } else {
                    LayaSpec.activeNode(this._title, false);
                }
                MiniGameNodeTools.addChildToCenterOffset(this._title, this._content, 0, 80);
            } else {
                LayaSpec.activeNode(this._title, false);
            }
        }
        if (this._bgNode) {
            LayaSpec.activeNode(this._bgNode, true);
            this._bgNode.height = showTitle ? this.bgHeightWithTitle : this.bgHeightWithoutTitle;
            let x = 0;
            let y = showTitle ? (this.bgHeightWithTitle - this.bgHeightWithoutTitle) / 2 : 0;
            if (this._bgNode["$mg_bgcolor"]) {
                LayaSpec.setNodeBackgroundColor(this._bgNode, this._bgNode["$mg_bgcolor"]);
            }
            MiniGameNodeTools.setNodeToParentCenterOffset(this._bgNode, this._content, {
                x: x,
                y: y
            });
        }
    }
    stopMovingItems() {
        this.clearTimer(this, this.update);
    }
    startMovingItems() {
        this.clearTimer(this, this.update);
        this.timerLoop(50, this, this.update, [50]);
    }
    update(dt) {
        if (this._placementLayout.speed !== 0) {
            this.moveItems(dt, this._placementLayout.speed);
        }
    }
    moveItems(dt, speed) {
        let container = this._candidateContainer;
        let layout = this._placementLayout;
        let items = this._candidateNodes;
        let dist = speed * dt / 1000;
        let boundary = container.width / 2 * (-1);
        if (dist > 0) {
            boundary = container.width / 2;
        }
        let totalLength = (layout.itemWidth + layout.spaceX) * items.length;
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let offset = this._candidateOffsets[i];
            offset.x += dist;
            if (dist < 0) {
                if ((offset.x + layout.itemWidth / 2) < boundary) {
                    offset.x += totalLength;
                }
            } else {
                if ((offset.x - layout.itemWidth / 2) > boundary) {
                    offset.x -= totalLength;
                }
            }
            MiniGameNodeTools.setNodeToParentCenterOffset(item, this._candidateContainer, offset);
        }
    }
    show() {
        super.show();
        this.playShowAnimation();
    }
    playShowAnimation() {
        let content = this._content;
        let duration = 100;
        let endY = this.height / 2;
        let startY = this.height / 2 + content.height;
        let end = () => {};
        content.y = startY;
        Laya.Tween.to(content, {
            y: endY
        }, duration, Laya.Ease.linearNone, Laya.Handler.create(null, end));
    }
    hide(withAnimation) {
        if (!withAnimation) {
            return super.hide(withAnimation);
        } else {
            return new Promise(r => {
                this.playHideAnimation().then(() => {
                    super.hide(withAnimation);
                    r();
                });
            });
        }
    }
    playHideAnimation() {
        return new Promise(resolve => {
            let content = this._content;
            let duration = 100;
            let endY = this.height / 2;
            let startY = this.height / 2 + content.height;
            let end = () => {
                resolve();
            };
            content.y = endY;
            Laya.Tween.to(content, {
                y: startY
            }, duration, Laya.Ease.linearNone, Laya.Handler.create(null, end));
        });
    }
    getBackgroundHeight() {
        return this._bgNode.height * this._content.scaleY;
    }
}
class MiniGameCenterButton extends MiniGameButton {
    init(attrs) {
        super.init(attrs);
        let content = new MiniGameNode({
            width: this.width,
            height: this.height
        });
        this.addChildToCenterOffset(content, 0, 0);
        this.animationTarget = content;
        this._iconAnimation = false;
        content.addSprite("MiniGameSdk/uiassets/round2.png", 0, 0, {
            scale: 1.5
        });
        this._display = content.addSprite("MiniGameSdk/uiassets/MiniGameCenterIcon.png", 0, 0, {
            scale: 1.5
        });
        this._playIconAnimation();
    }
    _playIconAnimation() {
        if (!this._display) {
            return;
        }
        if (this._iconAnimation) {
            return;
        }
        this._iconAnimation = true;
        let target = this._display;
        target.rotation = 0;
        let actions = [];
        let rotate = function(angle, duration, next, delay) {
            let complete = null;
            if (next >= 0 && next < actions.length) {
                let nextAct = actions[next];
                complete = Laya.Handler.create(null, nextAct);
            }
            if (delay > 0) {} else {
                delay = 0;
            }
            Laya.Tween.to(target, {
                rotation: angle
            }, duration, null, complete, delay);
        };
        actions.push(rotate.bind(undefined, 25, 100, 1, 0));
        actions.push(rotate.bind(undefined, -25, 200, 2, 0));
        actions.push(rotate.bind(undefined, 0, 100, 3, 0));
        actions.push(rotate.bind(undefined, 15, 70, 4, 0));
        actions.push(rotate.bind(undefined, -15, 140, 5, 0));
        actions.push(rotate.bind(undefined, 0, 70, 6, 0));
        actions.push(rotate.bind(undefined, 25, 100, 1, 1000));
        actions[0]();
    }
    onClicked() {
        super.onClicked();
        if (this._gameCenter == null) {
            let size = {
                width: Laya.stage.width,
                height: Laya.stage.height
            };
            let gameCenter = MiniGameCenter.getInstance({
                width: size.width,
                height: size.height
            });
            this._gameCenter = gameCenter;
        }
        if (!this._gameCenter.parent) {
            let root = Laya.stage;
            LayaTools.addNodeToParentCenterOffset(this._gameCenter, root);
        }
        this._gameCenter.eventTag = this.eventTag;
        this._gameCenter.zOrder = this.zOrder + 10;
        Laya.stage.updateZOrder();
        this._gameCenter.show();
    }
    onDisable() {
        super["onDisable"]();
        if (this._gameCenter) {
            this._gameCenter.removeSelf();
            this._gameCenter = null;
        }
    }
    show() {
        if (!MiniGameSdkInstant.isRefServiceEnabled()) {
            LayaSpec.activeNode(this, false);
            return;
        }
        LayaSpec.activeNode(this, true);
        MiniGameSdkInstant.getSdk()._logGameCenterButtonShow();
        console.info("===> GameCenterButton show ");
    }
    hide() {
        LayaSpec.activeNode(this, false);
        console.info("===> GameCenterButton hide ");
    }
}
class MiniGameCenter extends MiniGameNode {
    constructor() {
        super(...arguments);
        this._placements = ["banner", "icon_list"];
    }
    static getInstance(attrs) {
        if (MiniGameCenter._inst) {
            return MiniGameCenter._inst;
        }
        let node = new MiniGameCenter(attrs);
        MiniGameCenter._inst = node;
        return node;
    }
    init(attrs) {
        super.init(attrs);
        this._placementNodes = [];
        let inputBlocker = new MiniGameButton({
            width: this.width,
            height: this.height
        });
        this.addChildToCenterOffset(inputBlocker, 0, 0);
        this._inputBlocker = inputBlocker;
        let designSize = {
            width: 720,
            height: 1280
        };
        let contentNode = new MiniGameNode(designSize);
        this.addChildToCenterOffset(contentNode, 0, 0);
        this._content = contentNode;
        let bgNode = new MiniGameNode({
            width: this.width,
            height: this.height
        });
        this._content.addChildToCenterOffset(bgNode, 0, 0);
        LayaSpec.setNodeBackgroundColor(bgNode, "#ffffff");
        this._bgNode = bgNode;
        contentNode.addSprite("MiniGameSdk/uiassets/MiniGameTitle.png", 0, 591);
        contentNode.addSprite("MiniGameSdk/uiassets/MiniGameSubtitle.png", 0, 537);
        let closeButton = new MiniGameButton({
            width: this.width,
            height: 80
        });
        contentNode.addChildToCenterOffset(closeButton, 0, 575);
        closeButton.setClickCallback(this.onClose.bind(this));
        this._closeButton = closeButton;
        this._closeIcon = contentNode.addSprite("MiniGameSdk/uiassets/IconBack.png", -316, 575 + 5);
        contentNode.addSprite("MiniGameSdk/uiassets/Line.png", 0, 504, {
            scaleX: 72
        });
        contentNode.addSprite("MiniGameSdk/uiassets/TxtFeatureGames.png", -222.5, 457);
        this.addBannerPlacementVertical();
        contentNode.addSprite("MiniGameSdk/uiassets/Line.png", 0, -397, {
            scaleX: 72
        });
        contentNode.addSprite("MiniGameSdk/uiassets/TxtMoreGames.png", -238.5, -442);
        this.addIconListPlacement();
        this._updateSize();
    }
    onEnable() {
        super["onEnable"]();
        this._updateSize();
    }
    _updateSize() {
        let scale = MiniGameSdkInstant.getScale();
        this._content.scale(scale, scale);
        this._bgNode.scaleX = 1 / scale;
        this._bgNode.scaleY = 1 / scale;
        this._closeButton.width = this.width / scale;
        this._closeButton.x = 0;
    }
    addBannerPlacementVertical() {
        let bannerWidth = 660;
        let bannerHeight = 660 / 2;
        let bannerListCenterY = 21;
        let space = 80;
        let scale = bannerWidth / 500;
        let banner1 = new MiniGamePlacementBanner({
            width: bannerWidth,
            height: bannerHeight
        });
        banner1.setPlacementId("banner");
        this._content.addChildToCenterOffset(banner1, 0, bannerListCenterY + (bannerHeight / 2 + space / 2));
        let banner2 = new MiniGamePlacementBanner({
            width: bannerWidth,
            height: bannerHeight
        });
        banner2.setPlacementId("$banner");
        this._content.addChildToCenterOffset(banner2, 0, bannerListCenterY - (bannerHeight / 2 + space / 2));
        this._placementNodes.push(banner1);
        this._placementNodes.push(banner2);
    }
    addIconListPlacement() {
        let x = 0;
        let space = 20;
        let count = 5;
        let iconWidth = 112;
        let listWidth = iconWidth * count + space * (count - 1);
        let iconlist = new MiniGamePlacementIconList({
            width: listWidth,
            height: iconWidth
        });
        this._content.addChildToCenterOffset(iconlist, 0, -544);
        iconlist.setPlacementId("icon_list");
        this._placementNodes.push(iconlist);
    }
    onClose() {
        this.hide(false);
    }
    show() {
        LayaSpec.activeNode(this, true);
        this._inputBlocker.enableTouch();
        MiniGameSdkInstant.getSdk()._logClickGameCenter(this._placements);
        this._placementNodes.forEach(placement => {
            placement.show();
        });
        let startX = this._content.parent.width * 1.5;
        let endX = this._content.parent.width * 0.5;
        let y = this._content.parent.height * 0.5;
        let duration = 0.5 * 1000;
        this._content.x = startX;
        this._content.y = y;
        this._closeIcon.scaleX = 1;
        let target = this._content;
        let self = this;
        let end = function() {
            self._closeIcon.scaleX = -1;
        };
        Laya.Tween.to(target, {
            x: endX
        }, duration, Laya.Ease.backOut, Laya.Handler.create(null, end));
    }
    hide(noAnimation) {
        let startX = this._content.parent.width * 0.5;
        let endX = this._content.parent.width * 1.5;
        let y = this._content.parent.height * 0.5;
        let duration = 0.5 * 1000;
        this._content.x = startX;
        this._inputBlocker.disableTouch();
        let target = this._content;
        let self = this;
        let end = function() {
            target.x = endX;
            self._placementNodes.forEach(placement => {
                placement.hide();
            });
            LayaSpec.activeNode(self, false);
        };
        if (!noAnimation) {
            Laya.Tween.to(target, {
                x: endX
            }, duration, Laya.Ease.backOut, Laya.Handler.create(null, end));
        } else {
            end();
        }
    }
}
let minigameh5Lib = window["minigameh5Lib"];
let MiniGameSdk = minigameh5Lib ? minigameh5Lib.MiniGameSdk : undefined;
let MiniGameUtils = MiniGameSdk.utils;
if (!MiniGameSdk) {} else {
    MiniGameSdk.engineTool.LocalDownloader = LayaTools.LocalDownloader;
    MiniGameSdk.engineTool.convertImageToSpriteFrame = LayaTools.convertImageToSpriteFrame;
    MiniGameSdk.config.LOCAL_CONFIG_PATH = "MiniGameSdk/config.json";
    MiniGameSdk.config.LOCAL_ASSET_PATH = "MiniGameSdk/assets/{asset}.png";
    MiniGameSdk.config.FAKE_PLATFORM = "WEB";
}
let MiniGameSdkInstant = {
    _resourceReady: false,
    sdkLib: null,
    designResolution: LayaTools.size(720, 1280),
    LayaTools: LayaTools,
    init(appId, logLevel = 1) {
        let errorHandler = (err) => {};
        Laya.loader.on(Laya.Event.ERROR, undefined, errorHandler);
        let lib = window["minigameh5Lib"];
        let MiniGameSdk = lib ? lib.MiniGameSdk : undefined;
        if (!MiniGameSdk) {} else {
            this.sdkLib = MiniGameSdk;
            MiniGameSdk.engineTool.LocalDownloader = LayaTools.LocalDownloader;
            MiniGameSdk.engineTool.convertImageToSpriteFrame = LayaTools.convertImageToSpriteFrame;
            MiniGameSdk.config.LOCAL_CONFIG_PATH = "MiniGameSdk/config.json";
            MiniGameSdk.config.LOCAL_ASSET_PATH = "MiniGameSdk/assets/{asset}.png";
            MiniGameSdk.config.FAKE_PLATFORM = "WEB";
            this.logs = MiniGameSdk.logs;
        }
        if (!this.sdkLib) {} else {
            MiniGameSdk.logs.setDefaultTag("[MiniGameLaya]");
            MiniGameSdk.logs.info("", "Laya SDK version: ", this.version());
            this.sdkLib.init(appId, 0);
        }
    },
    _version: "1.1.1",
    _build: 15,
    version() {
        return this._version + "." + this._build;
    },
    onFacebookInited() {
        MiniGameSdk.onFacebookInited();
    },
    isResourceReady() {
        return this._resourceReady;
    },
    preloadResource(url) {
        if (this._resourceReady) {
            return;
        }
        url = url ? url : "./res/atlas/MiniGameSdk/uiassets.atlas";
        return new Promise((resolve, reject) => {
            try {
                Laya.loader.load(url, Laya.Handler.create(undefined, (result) => {
                    if (!result) {
                        reject();
                    } else {
                        this._resourceReady = true;
                        resolve(result);
                    }
                }));
            } catch (e) {
                reject(e);
            }
        });
    },
    _playButton: undefined,
    _playButtonPos: {
        x: 0,
        y: 0,
        z: 0
    },
    createPlayButton(eventTag, attr) {
        let playButton = new MiniGamePlacementIcon(attr);
        playButton.setPlacementId("icon");
        if (eventTag) {
            playButton.eventTag = eventTag;
        }
        return playButton;
    },
    getPlayButton(eventTag, attr) {
        if (!this._playButton) {
            let playButton = this.createPlayButton(eventTag, attr);
            this._playButton = playButton;
        }
        if (typeof(eventTag) === "string") {
            this._playButton.eventTag = eventTag;
        }
        return this._playButton;
    },
    setPlayButtonPosition(screenPos) {
        if (screenPos) {
            if (typeof(screenPos.x) === "number") {
                this._playButtonPos.x = screenPos.x;
            }
            if (typeof(screenPos.y) === "number") {
                this._playButtonPos.y = screenPos.y;
            }
            if (typeof(screenPos.z) === "number") {
                this._playButtonPos.z = screenPos.z;
            }
        }
        let button = this._playButton;
        if (button) {
            button.x = this._playButtonPos.x;
            button.y = this._playButtonPos.y;
            button.zOrder = this._playButtonPos.z + this._baseZOrder;
        }
    },
    showPlayButton(screenPos, eventTag) {
        let playButton = this.getPlayButton(eventTag);
        let root = Laya.stage;
        root.addChild(playButton);
        this.setPlayButtonPosition(screenPos);
        playButton.show();
        return playButton;
    },
    hidePlayButton() {
        let playButton = this.getPlayButton();
        playButton.hide();
        return playButton;
    },
    refreshPlayButton() {
        let playButton = this.getPlayButton();
        playButton.refreshData();
        return playButton;
    },
    setPlayButtonClickListener(listener) {
        let playButton = this.getPlayButton();
        playButton.setClickCallback(listener);
    },
    _gameCenterButton: undefined,
    _gameCenterButtonPos: {
        x: 0,
        y: 0,
        z: 0
    },
    createGameCenterButton(eventTag, attr) {
        let gameCenterButton = new MiniGameCenterButton({
            width: 124,
            height: 124
        });
        gameCenterButton.attr(attr);
        gameCenterButton.eventTag = eventTag;
        if (!MiniGameSdk.refService.isEnabled()) {
            gameCenterButton.setVisible(false);
        }
        return gameCenterButton;
    },
    getGameCenterButton(eventTag, attr) {
        if (!this._gameCenterButton) {
            this._gameCenterButton = this.createGameCenterButton(eventTag, attr);
        }
        if (typeof(eventTag) === "string") {
            this._gameCenterButton.eventTag = eventTag;
        }
        return this._gameCenterButton;
    },
    setGameCenterButtonPosition(screenPos) {
        if (screenPos) {
            if (typeof(screenPos.x) === "number") {
                this._gameCenterButtonPos.x = screenPos.x;
            }
            if (typeof(screenPos.y) === "number") {
                this._gameCenterButtonPos.y = screenPos.y;
            }
            if (typeof(screenPos.z) === "number") {
                this._gameCenterButtonPos.z = screenPos.z;
            }
        }
        let button = this._gameCenterButton;
        if (button) {
            button.x = this._gameCenterButtonPos.x;
            button.y = this._gameCenterButtonPos.y;
            button.zOrder = this._gameCenterButtonPos.z + this._baseZOrder;
        }
    },
    showGameCenterButton(screenPos, eventTag) {
        let button = this.getGameCenterButton(eventTag);
        let root = Laya.stage;
        root.addChild(button);
        this.setGameCenterButtonPosition(screenPos);
        button.show();
        return button;
    },
    hideGameCenterButton() {
        let button = this.getGameCenterButton();
        button.hide();
        return button;
    },
    setGameCenterButtonClickListener(listener) {
        let button = this.getGameCenterButton();
        button.setClickCallback(listener);
    },
    _bannerPlacement: null,
    _baseZOrder: 999,
    setBaseZOrder(z) {
        this._baseZOrder = z;
    },
    getBottomBanner(eventTag) {
        if (MiniGameUtils.isUndefinedOrNull(this._bannerPlacement)) {
            let placementNode = new MiniGameListPlacement({
                width: Laya.stage.width,
                height: 160
            });
            placementNode.setPlacementId("bottom_banner");
            if (!MiniGameSdk.refService.isEnabled()) {
                LayaSpec.activeNode(placementNode._content, false);
            }
            this._bannerPlacement = placementNode;
        }
        if (eventTag) {
            this._bannerPlacement.eventTag = eventTag;
        }
        return this._bannerPlacement;
    },
    getBottomBannerHeight() {
        return 180;
    },
    setBottomBannerClickListener(callback) {
        let placement = this.getBottomBanner();
        placement.setClickCallback(callback);
    },
    showBottomBanner(eventTag, offset) {
        let placement = this.getBottomBanner(eventTag);
        LayaSpec.activeNode(placement, true);
        let root = Laya.stage;
        if (!placement.parent) {
            LayaTools.addNodeToParentCenterOffset(placement, root);
        }
        placement.eventTag = this.eventTag;
        placement.zOrder = this._baseZOrder;
        let scale = 1;
        let off = {
            x: 0,
            y: -root.height / 2 + placement.height / 2 * scale
        };
        if (MiniGameUtils.isNotUndefinedOrNull(offset)) {
            off.x += offset.x;
            off.y += offset.y;
        }
        MiniGameNodeTools.setNodeToParentCenterOffset(placement, root, off);
        placement.show();
        return placement;
    },
    hideBottomBanner(withAnimation) {
        let placement = this.getBottomBanner();
        return placement.hide(withAnimation);
    },
    refreshBottomBanner() {
        let placement = this.getBottomBanner();
        placement.refreshData();
    },
    getScale() {
        let winSize = {
            width: Laya.stage.width,
            height: Laya.stage.height
        };
        let landscape = winSize.width > winSize.height;
        let designSize;
        let scale = 1;
        if (landscape) {
            designSize = LayaTools.size(this.designResolution.height, this.designResolution.width);
            let screenScale = winSize.width / winSize.height;
            let designScale = designSize.width / designSize.height;
            if (screenScale > designScale) {
                scale = winSize.height / designSize.height;
            } else {
                scale = winSize.width / designSize.width;
            }
        } else {
            designSize = this.designResolution;
            let screenScale = winSize.height / winSize.width;
            let designScale = designSize.height / designSize.width;
            if (screenScale > designScale) {
                scale = winSize.width / designSize.width;
            } else {
                scale = winSize.height / designSize.height;
            }
        }
        return scale;
    },
    addSdkEventListener(eventName, callback, thisObj) {
        MiniGameSdk.addSdkEventListener(eventName, callback, thisObj);
    },
    removeSdkEventListener(eventName, callback, thisObj) {
        MiniGameSdk.removeSdkEventListener(eventName, callback, thisObj);
    },
    addGameSwitchButtonClickedListener(callback, thisObj) {
        this.addSdkEventListener(MiniGameSdk.Events.Ref_Candidate_Clicked, callback, thisObj);
    },
    removeGameSwitchButtonClickedListener(callback, thisObj) {
        this.removeSdkEventListener(MiniGameSdk.Events.Ref_Candidate_Clicked, callback, thisObj);
    },
    addGameCenterShowListener(callback, thisObj) {
        this.addSdkEventListener(MiniGameSdk.Events.GameCenterShow, callback, thisObj);
    },
    removeGameCenterShowListener(callback, thisObj) {
        this.removeSdkEventListener(MiniGameSdk.Events.GameCenterShow, callback, thisObj);
    },
    addRefServiceReadyListener(callback, thisObj) {
        this.addSdkEventListener(MiniGameSdk.Events.Ref_Config_Ready, callback, thisObj);
    },
    removeRefServiceReadyListener(callback, thisObj) {
        this.removeSdkEventListener(MiniGameSdk.Events.Ref_Config_Ready, callback, thisObj);
    },
    addRefCandidateReadyListener(callback, thisObj) {
        this.addSdkEventListener(MiniGameSdk.Events.Ref_Candidate_Ready, callback, thisObj);
    },
    removeRefCandidateReadyListener(callback, thisObj) {
        this.removeSdkEventListener(MiniGameSdk.Events.Ref_Candidate_Ready, callback, thisObj);
    },
    isRefSerivceReady() {
        return MiniGameSdk.refService.isConfigReady();
    },
    isRefServiceEnabled() {
        return MiniGameSdk.refService.isEnabled();
    },
    getPlacement(placementId) {
        return MiniGameSdk.refService.getPlacement(placementId);
    },
    logs: console,
    getSdk() {
        return MiniGameSdk;
    },
    getRefService() {
        return MiniGameSdk.refService;
    },
    createButton(txt, width, height, callback) {
        let btn = new MiniGameButton({
            width: width,
            height: height
        }, "", txt);
        btn.setClickCallback(callback);
        return btn;
    },
    testLocalFBApi(useLocalApi) {
        MiniGameSdk.testLocalFBApi(useLocalApi);
    }
};