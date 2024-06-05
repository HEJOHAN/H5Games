class BaseImage {
    static getShareImg(head, score, info, callback) {
        var img2 = document.createElement('img');
        img2.setAttribute('crossOrigin', 'anonymous');
        img2.src = head;
        img2.onload = function() {
            var canvas = document.createElement("canvas");
            canvas.width = 600;
            canvas.height = 314;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img2, 0, -143, 600, 600);
            var dataURL = canvas.toDataURL("image/png");
            if (GameBaseData.isDebug) {
                console.log(dataURL);
            }
            if (callback) {
                callback(dataURL);
            }
        };
    }
    static newGetShareImg(head, score, info, callback) {
        var img1 = document.createElement('img');
        img1.src = './res/skin/fx.png';
        img1.onload = function() {
            var img2 = document.createElement('img');
            img2.setAttribute('crossOrigin', 'anonymous');
            img2.src = head;
            img2.onload = function() {
                var canvas = document.createElement("canvas");
                canvas.width = 600;
                canvas.height = 314;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img2, 0, -143, 600, 600);
                ctx.drawImage(img1, 0, 0, img1.width, img1.height);
                ctx.font = "60px yahei";
                ctx.textAlign = "center";
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.fillText(score, 482, 202);
                ctx.fillText(score, 484, 204);
                ctx.fillStyle = "rgb(255,255,255)";
                ctx.fillText(score, 480, 200);
                ctx.font = "45px yahei";
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.fillText(info, 302, 62);
                ctx.fillStyle = "rgb(255,255,255)";
                ctx.fillText(info, 300, 60);
                var dataURL = canvas.toDataURL("image/png");
                if (GameBaseData.isDebug) {
                    console.log(dataURL);
                }
                if (callback) {
                    callback(dataURL);
                }
            };
        };
    }
}
BaseImage.a = 0;
BaseImage.doImage = 0;