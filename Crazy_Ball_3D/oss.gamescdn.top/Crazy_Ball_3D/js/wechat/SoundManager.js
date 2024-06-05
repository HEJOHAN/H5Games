var touch;
(function(touch) {
    class SoundManager {
        static init() {
            if (Laya.Browser.onMiniGame) {
                this._wx = Laya.Browser.window.wx;
                let self = this;
                this._wx.onShow(function() {
                    if (self._bgPlaying && self._bgAudio) {
                        self._bgAudio.play();
                    }
                });
                this._wx.onAudioInterruptionEnd(function() {
                    if (self._bgPlaying && self._bgAudio) {
                        self._bgAudio.play();
                    }
                });
            }
        }
        static destory() {
            this._wx = null;
        }
        static playMusic(url, loop, complete) {
            if (!touch.GameData.instance.isMusicOn) {
                return;
            }
            this._bgPlaying = true;
            if (Laya.Browser.onMiniGame) {
                if (this._bgUrl == url && this._bgAudio != null) {
                    this._bgAudio.loop = loop;
                    this._bgAudio.volume = this._musicVolume;
                    this._bgAudio.play();
                } else {
                    this._bgUrl = url;
                    if (this._bgAudio != null) {
                        this._bgAudio.destroy();
                        this._bgAudio = null;
                    }
                    this._bgAudio = this._wx.createInnerAudioContext();
                    this._bgAudio.autoplay = true;
                    this._bgAudio.loop = loop;
                    this._bgAudio.volume = this._musicVolume;
                    this._bgAudio.src = this._bgUrl;
                }
            } else {
                Laya.SoundManager.stopMusic();
                Laya.SoundManager.playMusic(url, loop ? 0 : 1, complete);
            }
        }
        static stopMusic() {
            if (Laya.Browser.onMiniGame) {
                if (this._bgPlaying && this._bgAudio != null) {
                    this._bgAudio.stop();
                }
            } else {
                Laya.SoundManager.stopMusic();
            }
            this._bgPlaying = false;
        }
        static playSound(url) {
            if (!touch.GameData.instance.isSoundOn) {
                return;
            }
            if (Laya.Browser.onMiniGame) {
                let audio = this._soundDic.get(url);
                if (null == audio) {
                    audio = this._wx.createInnerAudioContext();
                    audio.src = url;
                    audio.volume = this._soundVolume;
                    audio.play();
                    this._soundDic.set(url, audio);
                } else {
                    audio.seek(0);
                    audio.play();
                }
            } else {
                Laya.SoundManager.playSound(url, 1);
            }
        }
        static stopSound(url) {
            if (Laya.Browser.onMiniGame) {
                let audio = this._soundDic.get(url);
                if (audio != null) {
                    audio.stop();
                }
            } else {
                Laya.SoundManager.stopSound(url);
            }
        }
        static setMusicVolume(volume) {
            if (Laya.Browser.onMiniGame) {
                this._musicVolume = volume;
                if (this._bgAudio != null) {
                    this._bgAudio.volume = this._musicVolume;
                }
            } else {}
        }
        static setSoundVolume(volume) {
            if (Laya.Browser.onMiniGame) {
                this._soundVolume = volume;
                this._soundDic.values.forEach(element => {
                    if (element != null) {
                        element.volume = this._soundVolume;
                    }
                });
            } else {}
        }
    }
    SoundManager._wx = null;
    SoundManager._bgUrl = "";
    SoundManager._bgComplete = null;
    SoundManager._bgAudio = null;
    SoundManager._bgPlaying = false;
    SoundManager._soundDic = new Laya.Dictionary();
    SoundManager._musicVolume = 1;
    SoundManager._soundVolume = 1;
    touch.SoundManager = SoundManager;
})(touch || (touch = {}));