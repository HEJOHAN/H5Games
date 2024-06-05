! function() {
    class WebAudioEngine {
        constructor() {
            this.beEnabled = false;
            this.isMuted = false;
            this.bePauseSound = false;
            this.bePauseMusic = false;
            this.tryToResumeIntervalId = -1;
            this.isVisibilityMuted = false;
            this.adShowing = false;
        }
        init() {
            return new Promise((resolve, reject) => {
                try {
                    this.musicAudio = new WebAudioContext();
                    this.soundAudio = new WebAudioContext();
                    window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                    window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                    window.document.addEventListener("visibilitychange", this.onVisibilitychange.bind(this));
                    this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
                    this.musicAudio.getContext().onstatechange = this.onMusicStatechange.bind(this);
                    this.soundAudio.getContext().onstatechange = this.onSoundStatechange.bind(this);
                    this.beEnabled = true;
                    this.musicVolume = 60;
                    resolve(true);
                } catch (e) {
                    console.log("Web Audio API", e);
                    alert("Web Audio API is not supported in this browser");
                    resolve(false);
                }
            });
        }
        onVisibilitychange() {
            if (window.WebAudioEngine.adShowing) {
                return;
            }
            if (document.visibilityState == "hidden") {
                if (!this.isMuted) {
                    this.isVisibilityMuted = this.muted = true;
                }
            } else if (document.visibilityState == "visible") {
                if (this.isVisibilityMuted) {
                    this.isVisibilityMuted = this.muted = false;
                }
            }
        }
        onDBInstanceMuted() {}
        tryToResumeAudioContext() {
            if (this.isMuted)
                return;
            if (this.bePauseSound || this.bePauseMusic) {
                window.document.removeEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.removeEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                clearInterval(this.tryToResumeIntervalId);
                this.tryToResumeIntervalId = -1;
                return;
            }
            if (this.musicAudio.isSuspend()) {
                this.musicAudio.resume();
            }
            if (this.soundAudio.isSuspend()) {
                this.soundAudio.resume();
            }
            if (!this.musicAudio.isSuspend() || !this.soundAudio.isSuspend()) {
                window.document.removeEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.removeEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                clearInterval(this.tryToResumeIntervalId);
                this.tryToResumeIntervalId = -1;
            }
        }
        onMusicStatechange() {
            if (this.musicAudio.isSuspend() && !this.isMuted && !this.bePauseMusic && this.tryToResumeIntervalId === -1) {
                window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
            }
        }
        onSoundStatechange() {
            if (this.soundAudio.isSuspend() && !this.isMuted && !this.bePauseSound && this.tryToResumeIntervalId === -1) {
                window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
            }
        }
        set muted(b) {
            this.isMuted = b;
            if (this.isMuted) {
                this.musicAudio.suspend();
                this.soundAudio.suspend();
            } else {
                if (this.tryToResumeIntervalId == -1) {
                    this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
                }
            }
        }
        get muted() {
            return this.isMuted;
        }
        set pauseSound(b) {
            this.bePauseSound = b;
            if (this.bePauseSound) {
                this.soundAudio.suspend();
            } else {
                if (this.isMuted)
                    return;
                this.soundAudio.resume();
            }
        }
        get pauseSound() {
            return this.bePauseSound;
        }
        get pauseMusic() {
            return this.bePauseMusic;
        }
        set pauseMusic(b) {
            this.bePauseMusic = b;
            if (this.bePauseMusic) {
                this.musicAudio.suspend();
            } else {
                if (this.isMuted)
                    return;
                this.musicAudio.resume();
            }
        }
        stopAll() {
            this.musicAudio.stopAll();
            this.soundAudio.stopAll();
        }
        parse(url, data, onComplete) {
            this.soundAudio.parse(url, data);
        }
        playMusic(url) {
            this.musicAudio.stopAll();
            this.musicAudio.playMusic(url);
        }
        stopMusic() {
            this.musicAudio.stopAll();
        }
        stopSound(url) {
            this.soundAudio.stop(url);
        }
        set musicVolume(vlaue) {
            this.musicAudio.musicVolume = vlaue;
        }
        get musicVolume() {
            return this.musicAudio.musicVolume;
        }
        playSound(url, loop = false, singleton = false) {
            if (!this.beEnabled)
                return;
            this.soundAudio.play(url, loop, singleton);
        }
    }
    class WebAudioSource {}
    class WebAudioContext {
        constructor() {
            this.volume = 100;
            this._audioInstances = new Map();
            this._musicVolume = 100;
            window.AudioContext = window.AudioContext || window["webkitAudioContext"];
            this.context = new AudioContext();
        }
        getContext() {
            return this.context;
        }
        isSuspend() {
            return this.context.state === "suspended";
        }
        suspend() {
            this.context.suspend();
        }
        resume() {
            this.context.resume();
        }
        stopAll() {
            const values = this._audioInstances.values();
            for (const sound of values) {
                const instance = sound.instance;
                if (instance.source.buffer) {
                    try {
                        instance.source.stop(this.context.currentTime);
                    } catch (e) {
                        instance.source.disconnect();
                    }
                    instance.source.onended = (function() {});
                    instance.setup();
                }
            }
        }
        stop(url) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                this._stopSound(sound);
            }
        }
        _stopSound(sound) {
            const instance = sound.instance;
            if (instance.source.buffer) {
                try {
                    instance.source.stop(this.context.currentTime);
                } catch (e) {
                    instance.source.disconnect();
                }
                instance.source.onended = (function() {});
                instance.setup();
            }
        }
        playMusic(url) {
            if (this._music) {
                this._stopSound(this._music);
            }
            if (this._audioInstances.has(url)) {
                this._music = this._audioInstances.get(url);
                this.musicVolume = this._musicVolume;
                this.play(url, true);
            } else {
                this.downloadArrayBuffer(url, () => {
                    this.playMusic(url);
                });
            }
        }
        stopMusic() {
            if (this._music) {
                this._stopSound(this._music);
            }
        }
        set musicVolume(vlaue) {
            this._musicVolume = vlaue;
            if (this._music) {
                this._music.instance.gain.gain.value = this._musicVolume / 100;
            }
        }
        get musicVolume() {
            return this._musicVolume;
        }
        play(url, loop = false, singleton = false) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                const instance = sound.instance;
                if (singleton && !instance.ended)
                    return;
                this.stop(url);
                if (sound.buffer) {
                    try {
                        instance.playBuffer(this.context.currentTime, sound.buffer);
                        instance.source.loop = loop;
                    } catch (e) {
                        console.error("playBuffer error. Exception: " + e);
                    }
                }
            } else {
                this.downloadArrayBuffer(url, () => {
                    this.play(url, loop);
                });
            }
        }
        load(urls, onComplete) {
            let t = urls.length;
            let d = 0;
            for (let i = 0; i < urls.length; i++) {
                const url = urls[i];
                this.downloadArrayBuffer(url, () => {
                    d++;
                    if (d >= t) {
                        onComplete && onComplete();
                    }
                });
            }
        }
        setThreeD(url) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                sound.instance.threeD = true;
            }
        }
        createSoundInstance() {
            let audioContext = this.context;
            const instance = {
                gain: audioContext.createGain(),
                panner: audioContext.createPanner(),
                threeD: false,
                ended: false,
                playBuffer: (function(delay, buffer, offset) {
                    this.source.buffer = buffer;
                    var chan = this;
                    this.ended = false;
                    this.source.onended = (function() {
                        chan.setup();
                        chan.ended = true;
                    });
                    this.source.start(delay, offset);
                }),
                setup: (function() {
                    this.source = audioContext.createBufferSource();
                    this.setupPanning();
                }),
                setupPanning: (function() {
                    if (this.threeD) {
                        this.source.disconnect();
                        this.source.connect(this.panner);
                        this.panner.connect(this.gain);
                    } else {
                        this.panner.disconnect();
                        this.source.connect(this.gain);
                    }
                })
            };
            instance.panner.rolloffFactor = 0;
            instance.gain.connect(this.context.destination);
            instance.setup();
            return instance;
        }
        parse(url, data, onComplete) {
            const sound = new WebAudioSource();
            sound.url = url;
            sound.instance = this.createSoundInstance();
            this._audioInstances.set(url, sound);
            this.context.decodeAudioData(data, function(buffer) {
                sound.buffer = buffer;
                onComplete && onComplete();
            }, function(e) {
                sound.error = true;
                onComplete && onComplete();
                console.log("Decode error." + sound.url);
            });
        }
        downloadArrayBuffer(url, onComplete) {
            if (this._audioInstances.has(url)) {
                onComplete && onComplete();
                return;
            }
            const t = this;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function() {
                if (xhr.status === 200 || xhr.status === 0) {
                    t.parse(url, xhr.response, onComplete);
                } else {
                    throw "no response";
                }
            };
            xhr.onerror = function() {
                onComplete && onComplete();
                throw "no response";
            };
            xhr.ontimeout = function() {
                onComplete && onComplete();
            };
            xhr.onabort = function() {
                onComplete && onComplete();
            };
            xhr.send(null);
        }
    }
    const audioEngine = window.WebAudioEngine = new WebAudioEngine();
    class platform {
        constructor() {
            this.canNavigateActive_ = false;
            this.screen_ = "";
            this.action_ = "";
            this.to_ = "";
            this.prompt_ = null;
            this.initialized_ = false;
            this.initData();
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new platform();
            }
            return this._instance;
        }
        initData() {
            let canvas = document.getElementById("layaCanvas");
            if (canvas) {
                canvas.addEventListener("mouseup", this.onNavigate_.bind(this));
                canvas.addEventListener("touchend", this.onNavigate_.bind(this));
            }
        }
        onNavigate_() {}
        getStorageSync(key) {
            let value = null;
            try {
                let v = Laya.LocalStorage.getItem(key);
                value = JSON.parse(v);
            } catch (error) {}
            return value
        }
        setStorageSync(key, value) {
            return Laya.LocalStorage.setItem(key, JSON.stringify(value));
        }
        navigate(screen_, action_, to_) {
            if (this.canNavigateActive_ === false) {
                this.screen_ = screen_;
                this.action_ = action_;
                this.to_ = to_;
                this.canNavigateActive_ = true;
            }
        }
        onblur() {}
        onfocus() {}
        showInterstitial(complete) {
            complete && complete();
        }
        showReward(success, failure) {
            HUHU_showRewardedVideoAd(() => {
                success && success();
                success = null;
            }, (event) => {
                if (failure) {
                    failure();
                    failure = null;
                }
                this.prompt("No ads temporarily");
            });
        }
        initList(appList) {
            appList.renderHandler = new Laya.Handler(appList, function(e) {
                e.offAll(Laya.Event.MOUSE_DOWN);
                e.on(Laya.Event.MOUSE_DOWN, e, () => {
                    platform.getInstance().navigate("GAME", "MORE", e.dataSource.id)
                });
            })
            appList.array = platform.getInstance().getForgames();
        }
        prompt(msg, duration) {
            if (!this.prompt_) {
                const sprite = new Laya.Sprite();
                const width = Laya.stage.width - 40;
                const height = 30;
                sprite.width = width;
                sprite.height = height;
                sprite.pivotX = width / 2;
                sprite.pivotY = height / 2;
                sprite.x = Laya.stage.width / 2;
                sprite.y = Laya.stage.height / 3;
                var path = [
                    ["moveTo", 0, 0],
                    ["lineTo", width, 0],
                    ["lineTo", width, 35],
                    ["lineTo", 0, 35]
                ];
                sprite.graphics.drawPath(0, 0, path, {
                    fillStyle: "#424444"
                }, {
                    "strokeStyle": "#fdffff",
                    "lineWidth": "1"
                });
                const label = sprite.addChild(new Laya.Label());
                label.anchorX = label.anchorY = 0.5;
                label.width = sprite.width, label.height = sprite.height;
                label.x = sprite.width / 2;
                label.y = label.height / 2 + 5;
                label.fontSize = 22, label.align = "center", label.color = "#ffffff", label.wordWrap = true;
                sprite.zOrder = 2e3, Laya.stage.addChild(sprite);
                const timeLine = new Laya.TimeLine();
                timeLine.addLabel("scale", 0).to(sprite, {
                    scaleX: 1.2,
                    scaleY: 1.2,
                    alpha: 1
                }, 100, null, 0).addLabel("back", 0).to(sprite, {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 100, null, 0).addLabel("show", 0).to(sprite, {
                    alpha: 1
                }, 1e3, null, 0).addLabel("hide", 0).to(sprite, {
                    alpha: 0
                }, 1e3, null, 0), timeLine.on(Laya.Event.COMPLETE, this, () => {
                    sprite.alpha = 0;
                    sprite.visible = false;
                });
                sprite.alpha = 0;
                sprite.visible = false;
                this.prompt_ = function(msg) {
                    label.text = msg;
                    sprite.visible = true;
                    timeLine.play(0, false);
                };
            }
            this.prompt_(msg);
        }
        getForgames() {
            let sforgames = []
            let forgames = sforgames.slice();
            for (let i = 0, length = forgames.length; i < length; i++) {
                const random = Math.floor(Math.random() * (i + 1));
                const item = forgames[random];
                forgames[random] = forgames[i];
                forgames[i] = item;
            }
            return forgames;
        }
        startup(name, gamedistribution = "", complete) {
            if (this.initialized_)
                return;
            window.WebAudioEngine.init().then(() => {
                Laya.SoundManager.playMusic = function(url) {
                    window.WebAudioEngine.playMusic(url);
                }
                Laya.SoundManager.playSound = function(url) {
                    window.WebAudioEngine.playSound(url);
                }
            })
            complete && complete();
            complete = null;
            this.initialized_ = true;
        }
    }
    platform._instance = null;
    window["platform"] = platform;
}()