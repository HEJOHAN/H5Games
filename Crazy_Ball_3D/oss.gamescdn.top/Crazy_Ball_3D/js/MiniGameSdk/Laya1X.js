let Laya1X = {
    convertImageToTexture(img) {
        let tex = new Laya.Texture(img);
        return tex;
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
    activeNode(node, active) {
        try {
            node.visible = active;
        } catch (e) {}
    },
    setNodeBackgroundColor(node, color) {
        try {
            node.graphics.clear();
            node.graphics.drawRect(0, 0, node.width, node.height, color);
            node["$mg_bgcolor"] = color;
        } catch (e) {}
    },
    addEnableFunctionsToNodeType(nodeType) {
        try {
            nodeType.prototype.onEnableChange = function(v) {
                if (v) {
                    this.onEnable();
                } else {
                    this.onDisable();
                }
            };
            nodeType.prototype.onEnable = function() {};
            nodeType.prototype.onDisable = function() {};
        } catch (e) {}
    },
    addOnEnableEvent(node) {
        try {
            if (Laya.Event.ENABLE_CHANGED) {
                node.on(Laya.Event.ENABLE_CHANGED, node, node.onEnableChange);
            }
        } catch (e) {}
    }
};
let LayaSpec = Laya1X;