window.howls = [];
window.PlaySound = function(src) {
    var sound = null;
    for (var i = 0; i < howls.length; i++) {
        var howl = howls[i];
        if (howl._src.includes(src)) {
            sound = howl;
            break;
        }
    }
    if (sound == null) {
        sound = sound = new Howl({
            src: [src],
            volume: 1.0,
            onend: function() {}
        });
        howls.push(sound);
    }
    if (!Laya.SoundManager.muted)
        sound.play();
}
window.StopSound = function(src) {
    var sound = null;
    for (var i = 0; i < howls.length; i++) {
        var howl = howls[i];
        if (howl._src.includes(src)) {
            sound = howl;
            break;
        }
    }
    if (sound)
        sound.stop();
}
window.PlayMusic = function(src) {
    window.music && window.music.stop();
    window.music = new Howl({
        src: [src],
        volume: 0.8,
        onend: function() {}
    });
    window.music.play();
}
window.SetMute = function() {
    for (var i = 0; i < howls.length; i++) {
        var howl = howls[i];
        howl.mute(Laya.SoundManager.muted);
    }
    window.music && window.music.mute(Laya.SoundManager.muted);
}
loadLib("huhu.js");
loadLib("libs/howler.js");
loadLib("libs/laya.core.js");
loadLib("libs/laya.ui.js");
loadLib("AdsController.js");
loadLib("getUI.js");
loadLib("libs/ZMNativeCenter.js");
loadLib("libs/zm.mini.core.js");
loadLib("libs/laya.d3.js");
loadLib("cannon.js");
loadLib("js/bundle.js");