window.screenOrientation = "portrait", window.adSDK = new adService();
window.adSDK.startPreLoad();
window.$t_version = '1.1.3'
window.$t_appname = 'cleanhouse'
window.DYD_DEV_MODE = true;
var loadScript = function(jsList, callback) {
    var loaded = 0
    var loadNext = function() {
        loadSingleScript(jsList[loaded], function() {
            loaded++
            window.fbProgress = Math.min(2 * loaded, 30)
            if (loaded >= jsList.length) {
                callback()
            } else {
                loadNext()
            }
        })
    }
    loadNext()
}
var loadSingleScript = function(src, callback) {
    var script = document.createElement('script')
    script.async = false
    script.src = src
    script.addEventListener('load', function() {
        script.parentNode.removeChild(script)
        script.removeEventListener('load', arguments.callee, false)
        callback()
    }, false)
    document.body.appendChild(script)
}
var scriptList = ['./js/huhu.js', './libs/min/laya.core.js', './libs/min/laya.webgl.js', './libs/min/laya.ani.js', './libs/min/laya.d3.js', './libs/min/laya.device.js', './libs/min/laya.filter.js', './libs/min/laya.particle.js', './libs/min/laya.ui.js', './libs/min/vconsole.min.js', './dist/main.bundle.js', ]
window.onload = function() {
    loadScript(scriptList, function() {
        console.log('all scripts loaded')
    })
}