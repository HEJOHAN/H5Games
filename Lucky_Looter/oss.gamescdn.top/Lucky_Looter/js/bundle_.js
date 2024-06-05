! function() {
    "use strict";
    var e, t, n, i = Laya.ClassUtils.regClass;
    ! function(e) {
        class t extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(t.uiView);
            }
        }
        t.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                runtime: "views/runtime/UIAdapter.ts",
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .7
                },
                compId: 3
            }, {
                type: "Label",
                props: {
                    y: 100,
                    x: 175,
                    var: "labSx",
                    top: 100,
                    text: "升星挑战",
                    strokeColor: "#f8ebea",
                    stroke: 2,
                    name: "labSx",
                    fontSize: 100,
                    font: "SimSun",
                    color: "#5dc658",
                    centerX: 0
                },
                compId: 40
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "boxTop",
                    right: 0,
                    name: "boxTop",
                    left: 0,
                    height: 459,
                    centerY: 0
                },
                compId: 17,
                child: [{
                    type: "Image",
                    props: {
                        width: 415,
                        var: "imgProgerss",
                        skin: "egg/img_progress_bg.png",
                        name: "imgProgerss",
                        height: 20,
                        centerX: 0,
                        bottom: 600
                    },
                    compId: 28,
                    child: [{
                        type: "Sprite",
                        props: {
                            width: 415,
                            texture: "egg/img_progress_bg$bar.png",
                            height: 20
                        },
                        compId: 29,
                        child: [{
                            type: "Box",
                            props: {
                                width: 415,
                                var: "maskView",
                                renderType: "mask",
                                height: 20
                            },
                            compId: 30
                        }]
                    }, {
                        type: "Image",
                        props: {
                            x: 165,
                            var: "star1",
                            skin: "egg/img_start1.png",
                            scaleY: 1,
                            scaleX: 1,
                            centerY: 0
                        },
                        compId: 48
                    }, {
                        type: "Image",
                        props: {
                            x: 267,
                            var: "star2",
                            skin: "egg/img_start1.png",
                            scaleY: 1,
                            scaleX: 1,
                            centerY: 0
                        },
                        compId: 49
                    }, {
                        type: "Image",
                        props: {
                            x: 369,
                            var: "star3",
                            skin: "egg/img_start1.png",
                            scaleY: 1,
                            scaleX: 1,
                            centerY: 0
                        },
                        compId: 51
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: -91,
                        x: 125,
                        width: 500,
                        var: "boxTimeBg",
                        name: "boxTimeBg",
                        height: 150,
                        centerX: 0,
                        bottom: 400
                    },
                    compId: 45,
                    child: [{
                        type: "Label",
                        props: {
                            text: "倒计时：",
                            strokeColor: "#f1eeee",
                            stroke: 2,
                            fontSize: 80,
                            font: "SimSun",
                            color: "#f8f3f3",
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 41
                    }, {
                        type: "Label",
                        props: {
                            var: "labTime",
                            text: "5",
                            strokeColor: "#f1eeee",
                            stroke: 2,
                            right: 50,
                            name: "labTime",
                            fontSize: 80,
                            font: "SimSun",
                            color: "#f8f3f3",
                            centerY: 0
                        },
                        compId: 44
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 600,
                        var: "boxAni",
                        name: "boxAni",
                        height: 460,
                        centerY: 0,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 35,
                    child: [{
                        type: "Image",
                        props: {
                            skin: "ani/egg/Armature_newAnimation_00.png",
                            name: "aniMove",
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 38
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    y: 836,
                    x: 0,
                    var: "boxCenter",
                    right: 0,
                    name: "boxCenter",
                    left: 0,
                    height: 200,
                    bottom: 298
                },
                compId: 47,
                child: [{
                    type: "Label",
                    props: {
                        x: 75,
                        var: "lab2",
                        text: "可获得额外金币和加星机会",
                        fontSize: 50,
                        font: "SimSun",
                        color: "#f8f3f3",
                        centerY: 50,
                        centerX: 0
                    },
                    compId: 43
                }, {
                    type: "Label",
                    props: {
                        x: 225,
                        var: "lab1",
                        text: "点击“搬走”",
                        fontSize: 50,
                        font: "SimSun",
                        color: "#f8f3f3",
                        centerY: -50,
                        centerX: 0
                    },
                    compId: 39
                }]
            }, {
                type: "Box",
                props: {
                    y: 1e3,
                    x: 0,
                    width: 720,
                    var: "boxBottom",
                    right: 0,
                    name: "boxBottom",
                    left: 0,
                    height: 344,
                    bottom: -10
                },
                compId: 16,
                child: [{
                    type: "Button",
                    props: {
                        var: "hitBtn",
                        stateNum: 1,
                        skin: "sign/btn_sign_sure.png",
                        scaleY: 1.2,
                        scaleX: 1.2,
                        labelStrokeColor: "#080202",
                        labelStroke: 2,
                        labelSize: 70,
                        labelFont: "SimSun",
                        label: "搬走",
                        centerY: 30,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 12,
                    child: [{
                        type: "Script",
                        props: {
                            y: 96,
                            x: 170,
                            playEvent: "mousedown",
                            runtime: "ui.ani.BtnScaleDownUI"
                        },
                        compId: 26
                    }, {
                        type: "Script",
                        props: {
                            runtime: "ui.ani.BtnScaleUpUI"
                        },
                        compId: 27
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "awardInfoView",
                    right: 0,
                    left: 0,
                    height: 549,
                    centerY: -140
                },
                compId: 20,
                child: [{
                    type: "Image",
                    props: {
                        y: 264,
                        width: 528,
                        skin: "egg/img_light.png",
                        height: 528,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 19
                }, {
                    type: "Image",
                    props: {
                        width: 335,
                        top: 150,
                        skin: "egg/img_box.png",
                        height: 298,
                        centerX: 20
                    },
                    compId: 18
                }, {
                    type: "Label",
                    props: {
                        var: "coinLabel",
                        valign: "middle",
                        text: "1000",
                        right: 0,
                        left: 0,
                        fontSize: 60,
                        color: "#FEB440",
                        bottom: 31,
                        align: "center"
                    },
                    compId: 21
                }, {
                    type: "Image",
                    props: {
                        y: 25,
                        x: 168,
                        width: 415,
                        var: "imgSuccess",
                        skin: "egg/img_success.png",
                        name: "imgSuccess",
                        height: 20,
                        centerX: 0,
                        bottom: 504
                    },
                    compId: 55,
                    child: [{
                        type: "Image",
                        props: {
                            x: 165,
                            skin: "egg/img_start2.png",
                            scaleY: 1,
                            scaleX: 1,
                            centerY: 0
                        },
                        compId: 58
                    }, {
                        type: "Image",
                        props: {
                            x: 267,
                            skin: "egg/img_start2.png",
                            scaleY: 1,
                            scaleX: 1,
                            centerY: 0
                        },
                        compId: 59,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 102,
                                skin: "egg/img_start2.png",
                                scaleY: 1,
                                scaleX: 1,
                                centerY: 0
                            },
                            compId: 60
                        }]
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "awardActionView",
                    runtime: "views/runtime/UIAdapter.ts",
                    height: 165,
                    centerX: 0,
                    bottom: 333
                },
                compId: 25,
                child: [{
                    type: "Button",
                    props: {
                        y: 42,
                        x: 360,
                        var: "watchADBtn",
                        top: 0,
                        stateNum: 1,
                        skin: "egg/btn_watch.png",
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 23
                }, {
                    type: "Label",
                    props: {
                        width: 720,
                        var: "closeBtn",
                        valign: "middle",
                        text: "直接获得>",
                        right: 0,
                        left: 0,
                        height: 65,
                        fontSize: 24,
                        color: "#FFFFFF",
                        bottom: 0,
                        align: "center"
                    },
                    compId: 24
                }]
            }, {
                type: "Box",
                props: {
                    x: 50,
                    width: 650,
                    var: "a3xbox",
                    height: 400,
                    centerY: -150,
                    centerX: 0
                },
                compId: 61
            }],
            animations: [{
                nodes: [{
                    target: 38,
                    keyframes: {
                        var: [{
                            value: "aniMove",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "var",
                            index: 0
                        }],
                        skin: [{
                            value: "ani/egg/Armature_newAnimation_00.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "skin",
                            index: 0
                        }, {
                            value: "ani/egg/Armature_newAnimation_01.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "skin",
                            index: 2
                        }, {
                            value: "ani/egg/Armature_newAnimation_02.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "skin",
                            index: 4
                        }, {
                            value: "ani/egg/Armature_newAnimation_03.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "skin",
                            index: 6
                        }, {
                            value: "ani/egg/Armature_newAnimation_04.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "skin",
                            index: 8
                        }, {
                            value: "ani/egg/Armature_newAnimation_05.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "skin",
                            index: 10
                        }, {
                            value: "ani/egg/Armature_newAnimation_06.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "skin",
                            index: 12
                        }, {
                            value: "ani/egg/Armature_newAnimation_07.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "skin",
                            index: 14
                        }, {
                            value: "ani/egg/Armature_newAnimation_08.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "skin",
                            index: 16
                        }, {
                            value: "ani/egg/Armature_newAnimation_10.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "skin",
                            index: 18
                        }],
                        name: [{
                            value: "aniMove",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 38,
                            key: "name",
                            index: 0
                        }]
                    }
                }],
                name: "move",
                id: 1,
                frameRate: 12,
                action: 0
            }, {
                nodes: [{
                    target: 19,
                    keyframes: {
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 19,
                            key: "rotation",
                            index: 0
                        }, {
                            value: 360,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 19,
                            key: "rotation",
                            index: 10
                        }]
                    }
                }],
                name: "ani2",
                id: 2,
                frameRate: 12,
                action: 0
            }, {
                nodes: [{
                    target: 23,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 20
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 40
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 20
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 40
                        }]
                    }
                }],
                name: "ani4",
                id: 4,
                frameRate: 24,
                action: 0
            }, {
                nodes: [],
                name: "ani5",
                id: 5,
                frameRate: 24,
                action: 0
            }, {
                nodes: [],
                name: "ani6",
                id: 6,
                frameRate: 24,
                action: 0
            }],
            loadList: ["egg/img_progress_bg.png", "egg/img_progress_bg$bar.png", "egg/img_start1.png", "ani/egg/Armature_newAnimation_00.png", "sign/btn_sign_sure.png", "egg/img_light.png", "egg/img_box.png", "egg/img_success.png", "egg/img_start2.png", "egg/btn_watch.png", "ani/egg/Armature_newAnimation_01.png", "ani/egg/Armature_newAnimation_02.png", "ani/egg/Armature_newAnimation_03.png", "ani/egg/Armature_newAnimation_04.png", "ani/egg/Armature_newAnimation_05.png", "ani/egg/Armature_newAnimation_06.png", "ani/egg/Armature_newAnimation_07.png", "ani/egg/Armature_newAnimation_08.png", "ani/egg/Armature_newAnimation_10.png"],
            loadList3D: []
        }, e.AddStartViewUI = t, i("ui.AddStartViewUI", t);
        class n extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(n.uiView);
            }
        }
        n.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    name: "Box",
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .7
                },
                compId: 24
            }, {
                type: "Box",
                props: {
                    width: 678,
                    name: "Box",
                    height: 958,
                    centerY: -11,
                    centerX: 0
                },
                compId: 3,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "sign/img_sign_bg.png",
                        sizeGrid: "50,50,50,50",
                        right: 0,
                        name: "imageBg",
                        left: 0,
                        bottom: 0
                    },
                    compId: 4
                }, {
                    type: "Box",
                    props: {
                        y: 589,
                        width: 641,
                        var: "boxSeven",
                        name: "boxSeven",
                        height: 202,
                        centerX: 0
                    },
                    compId: 10,
                    child: [{
                        type: "Image",
                        props: {
                            var: "imageSevenBg",
                            top: 1,
                            skin: "sign/img_sign_seven_bg.png",
                            right: 0,
                            name: "imageSevenBg",
                            left: 0,
                            bottom: 0
                        },
                        compId: 9
                    }, {
                        type: "Label",
                        props: {
                            y: 15,
                            x: 22,
                            var: "labDay",
                            text: "第7天",
                            name: "labDay",
                            fontSize: 70,
                            color: "#fdfbfb"
                        },
                        compId: 29
                    }, {
                        type: "Label",
                        props: {
                            y: 115,
                            x: 454,
                            var: "labGold",
                            text: "x100",
                            name: "labGold",
                            fontSize: 70,
                            color: "#fdfbfb"
                        },
                        compId: 33
                    }, {
                        type: "Animation",
                        props: {
                            y: 115,
                            x: 320.5,
                            var: "lightAni",
                            source: "ani/Light.ani",
                            scaleY: .4,
                            scaleX: .4
                        },
                        compId: 39
                    }, {
                        type: "Image",
                        props: {
                            y: 101,
                            x: 320,
                            width: 190,
                            var: "imageIcon",
                            skin: "sign/img_sign_icon.png",
                            name: "imageIcon",
                            height: 125,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 30
                    }, {
                        type: "Image",
                        props: {
                            y: 17,
                            x: 236,
                            width: 168,
                            var: "imageAlready",
                            skin: "sign/img_sign_ylq.png",
                            name: "imageAlready",
                            height: 168
                        },
                        compId: 31
                    }, {
                        type: "Image",
                        props: {
                            y: 1,
                            x: 0,
                            width: 645,
                            var: "imageSevenBgHighlight",
                            skin: "sign/img_sign_seven_bg2.png",
                            height: 201
                        },
                        compId: 40
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 23,
                        x: 606,
                        var: "btnClose",
                        top: 23,
                        stateNum: 1,
                        skin: "sign/btn_sign_close.png",
                        right: 21,
                        name: "btnClose"
                    },
                    compId: 6,
                    child: [{
                        type: "Script",
                        props: {
                            playEvent: "mouseup",
                            runtime: "ui.ani.BtnScaleUpUI"
                        },
                        compId: 36
                    }, {
                        type: "Script",
                        props: {
                            playEvent: "mousedown",
                            runtime: "ui.ani.BtnScaleDownUI"
                        },
                        compId: 37
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 870,
                        x: 339,
                        var: "btnSign",
                        stateNum: 1,
                        skin: "sign/btn_sign_sure.png",
                        scaleY: 1,
                        scaleX: 1,
                        name: "btnSign",
                        labelStrokeColor: "#f9f1ee",
                        labelStroke: 1,
                        labelSize: 50,
                        labelPadding: "0,0,0,50",
                        labelFont: "Microsoft YaHei",
                        labelColors: "#FFFFFF",
                        labelBold: !0,
                        labelAlign: "center",
                        label: "CLAIM",
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 23,
                    child: [{
                        type: "Script",
                        props: {
                            playEvent: "mousedown",
                            runtime: "ui.ani.BtnScaleDownUI"
                        },
                        compId: 34
                    }, {
                        type: "Script",
                        props: {
                            playEvent: "mouseup",
                            runtime: "ui.ani.BtnScaleUpUI"
                        },
                        compId: 35
                    }, {
                        type: "Image",
                        props: {
                            y: 36,
                            x: 63,
                            var: "signIcon",
                            skin: "skin/ic_vedio1.png"
                        },
                        compId: 38
                    }]
                }, {
                    type: "List",
                    props: {
                        y: 135,
                        x: 15,
                        width: 648,
                        var: "signList",
                        spaceY: 24,
                        spaceX: 12,
                        repeatY: 2,
                        repeatX: 3,
                        height: 440,
                        centerX: 0
                    },
                    compId: 7,
                    child: [{
                        type: "SignItemView",
                        props: {
                            y: 0,
                            x: 0,
                            renderType: "render",
                            runtime: "views/item/DaySignItemView.ts"
                        },
                        compId: 28
                    }]
                }]
            }],
            animations: [{
                nodes: [],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }, {
                nodes: [{
                    target: 23,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 6
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 9
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 12
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 18
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            label: null,
                            key: "scaleY",
                            index: 30
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 6
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 9
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 12
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 18
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            label: null,
                            key: "scaleX",
                            index: 30
                        }]
                    }
                }],
                name: "ani2",
                id: 2,
                frameRate: 24,
                action: 2
            }],
            loadList: ["sign/img_sign_bg.png", "sign/img_sign_seven_bg.png", "ani/Light.ani", "sign/img_sign_icon.png", "sign/img_sign_ylq.png", "sign/img_sign_seven_bg2.png", "sign/btn_sign_close.png", "sign/btn_sign_sure.png", "skin/ic_vedio1.png"],
            loadList3D: []
        }, e.DaySignViewUI = n, i("ui.DaySignViewUI", n);
        class a extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(a.uiView);
            }
        }
        a.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .7
                },
                compId: 3
            }, {
                type: "Image",
                props: {
                    top: 119,
                    skin: "egg/ico_title.png",
                    centerX: 0
                },
                compId: 4
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "hitActionView",
                    right: 0,
                    left: 0,
                    height: 344,
                    bottom: -10
                },
                compId: 16,
                child: [{
                    type: "Button",
                    props: {
                        x: 360,
                        var: "hitBtn",
                        stateNum: 1,
                        skin: "egg/btn_open.png",
                        centerX: 0,
                        bottom: 80,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 12,
                    child: [{
                        type: "Script",
                        props: {
                            y: 96,
                            x: 170,
                            playEvent: "mousedown",
                            runtime: "ui.ani.BtnScaleDownUI"
                        },
                        compId: 26
                    }, {
                        type: "Script",
                        props: {
                            runtime: "ui.ani.BtnScaleUpUI"
                        },
                        compId: 27
                    }]
                }, {
                    type: "Sprite",
                    props: {
                        y: 148,
                        x: 510.5,
                        texture: "egg/ico_hand.png"
                    },
                    compId: 13
                }, {
                    type: "Sprite",
                    props: {
                        y: -79,
                        x: 473,
                        texture: "egg/ico_press_label.png"
                    },
                    compId: 14
                }]
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "hitInfoView",
                    right: 0,
                    left: 0,
                    height: 459,
                    centerY: 0
                },
                compId: 17,
                child: [{
                    type: "Image",
                    props: {
                        skin: "egg/ico_egg.png",
                        centerY: 0,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        skin: "egg/board.png",
                        left: 24,
                        centerY: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 6,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 1,
                            x: 0,
                            texture: "egg/bar.png"
                        },
                        compId: 7,
                        child: [{
                            type: "Box",
                            props: {
                                width: 51,
                                var: "maskView",
                                top: 0,
                                renderType: "mask",
                                left: 0,
                                height: 359
                            },
                            compId: 9
                        }]
                    }]
                }, {
                    type: "Animation",
                    props: {
                        y: 160,
                        x: 425,
                        var: "hitAni",
                        source: "ani/hitEffect.ani"
                    },
                    compId: 15
                }, {
                    type: "Image",
                    props: {
                        y: 323,
                        x: 707,
                        var: "hammerView",
                        skin: "egg/ico_hammer.png",
                        rotation: 10,
                        anchorY: 1,
                        anchorX: 1
                    },
                    compId: 11
                }]
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "awardInfoView",
                    right: 0,
                    left: 0,
                    height: 549,
                    centerY: -149
                },
                compId: 20,
                child: [{
                    type: "Image",
                    props: {
                        y: 264,
                        width: 600,
                        skin: "egg/sign_item_select.png",
                        height: 600,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 19
                }, {
                    type: "Image",
                    props: {
                        top: 150,
                        skin: "egg/img_box.png",
                        centerX: 20
                    },
                    compId: 18
                }, {
                    type: "Label",
                    props: {
                        var: "coinLabel",
                        valign: "middle",
                        text: "300",
                        right: 0,
                        left: 0,
                        fontSize: 60,
                        color: "#FEB440",
                        bottom: 31,
                        align: "center"
                    },
                    compId: 21
                }]
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "awardActionView",
                    runtime: "views/runtime/UIAdapter.ts",
                    height: 165,
                    centerX: 0,
                    bottom: 376
                },
                compId: 25,
                child: [{
                    type: "Button",
                    props: {
                        y: 42,
                        x: 360,
                        var: "watchADBtn",
                        top: 0,
                        stateNum: 1,
                        skin: "egg/btn_watch.png",
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 23
                }, {
                    type: "Label",
                    props: {
                        width: 720,
                        var: "closeBtn",
                        valign: "middle",
                        text: "直接获得>",
                        right: 0,
                        left: 0,
                        height: 65,
                        fontSize: 24,
                        color: "#FFFFFF",
                        bottom: 0,
                        align: "center"
                    },
                    compId: 24
                }]
            }],
            animations: [{
                nodes: [{
                    target: 13,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 5
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 5
                        }]
                    }
                }, {
                    target: 14,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleY",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleY",
                            index: 5
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleX",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleX",
                            index: 5
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 12,
                action: 0
            }, {
                nodes: [{
                    target: 19,
                    keyframes: {
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 19,
                            key: "rotation",
                            index: 0
                        }, {
                            value: 360,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 19,
                            key: "rotation",
                            index: 10
                        }]
                    }
                }],
                name: "ani2",
                id: 2,
                frameRate: 12,
                action: 0
            }, {
                nodes: [{
                    target: 23,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 20
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 40
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 20
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 40
                        }]
                    }
                }],
                name: "ani4",
                id: 4,
                frameRate: 24,
                action: 0
            }, {
                nodes: [{
                    target: 11,
                    keyframes: {
                        rotation: [{
                            value: 10,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 11,
                            key: "rotation",
                            index: 0
                        }, {
                            value: -10,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 11,
                            key: "rotation",
                            index: 5
                        }, {
                            value: 10,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 11,
                            key: "rotation",
                            index: 10
                        }]
                    }
                }],
                name: "ani5",
                id: 5,
                frameRate: 24,
                action: 0
            }],
            loadList: ["egg/ico_title.png", "egg/btn_open.png", "egg/ico_hand.png", "egg/ico_press_label.png", "egg/ico_egg.png", "egg/board.png", "egg/bar.png", "ani/hitEffect.ani", "egg/ico_hammer.png", "egg/sign_item_select.png", "egg/img_box.png", "egg/btn_watch.png"],
            loadList3D: []
        }, e.EggViewUI = a, i("ui.EggViewUI", a);
        class s extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(s.uiView);
            }
        }
        s.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    var: "sceneContainer",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 64
            }, {
                type: "Box",
                props: {
                    var: "preStartView",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 74,
                child: [{
                    type: "Box",
                    props: {
                        var: "bottomBox",
                        right: 0,
                        left: 0,
                        height: 500,
                        bottom: 75
                    },
                    compId: 79,
                    child: [{
                        type: "Image",
                        props: {
                            y: 32,
                            x: 186,
                            skin: "pub/finger.png"
                        },
                        compId: 81
                    }, {
                        type: "Image",
                        props: {
                            y: 187,
                            x: 143,
                            skin: "game/guide.png"
                        },
                        compId: 80
                    }, {
                        type: "Button",
                        props: {
                            y: 55,
                            x: 15,
                            var: "signBtn",
                            stateNum: 1,
                            skin: "pub/sign_btn.png"
                        },
                        compId: 100
                    }, {
                        type: "Button",
                        props: {
                            y: 55,
                            x: 568,
                            var: "skinBtn",
                            stateNum: 1,
                            skin: "pub/skin_btn.png"
                        },
                        compId: 99
                    }]
                }, {
                    type: "Box",
                    props: {
                        var: "topBox",
                        top: 130,
                        right: 0,
                        left: 0,
                        height: 100
                    },
                    compId: 82,
                    child: [{
                        type: "Image",
                        props: {
                            y: 20,
                            x: 144,
                            skin: "pub/coin_bg.png"
                        },
                        compId: 83,
                        child: [{
                            type: "Image",
                            props: {
                                skin: "pub/coin.png"
                            },
                            compId: 84
                        }, {
                            type: "Label",
                            props: {
                                y: 5,
                                x: 56,
                                width: 109,
                                var: "coinLabel",
                                valign: "middle",
                                text: "456",
                                height: 55,
                                fontSize: 40,
                                color: "#FFFFFF",
                                bold: !0,
                                align: "center"
                            },
                            compId: 85
                        }]
                    }, {
                        type: "Label",
                        props: {
                            y: 171,
                            var: "levelLable2",
                            text: "关卡 10",
                            strokeColor: "#000000",
                            stroke: 2,
                            fontSize: 50,
                            color: "#FFFFFF",
                            centerX: 0,
                            bold: !0
                        },
                        compId: 98
                    }, {
                        type: "Button",
                        props: {
                            y: 5,
                            x: 24,
                            var: "settingBtn",
                            stateNum: 1,
                            skin: "pub/setting.png"
                        },
                        compId: 102
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    var: "gameUIBox",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 75,
                child: [{
                    type: "Box",
                    props: {
                        var: "topUI",
                        top: 100,
                        right: 0,
                        left: 0,
                        height: 200
                    },
                    compId: 76,
                    child: [{
                        type: "Label",
                        props: {
                            y: 8,
                            var: "levelLabel",
                            text: "关卡 10",
                            strokeColor: "#000000",
                            stroke: 2,
                            fontSize: 50,
                            color: "#FFFFFF",
                            centerX: 0,
                            bold: !0
                        },
                        compId: 77
                    }, {
                        type: "ProgressBar",
                        props: {
                            y: 93,
                            width: 277,
                            var: "progressBar",
                            skin: "pub/progress.png",
                            scaleY: 1.5,
                            scaleX: 1.5,
                            height: 14,
                            centerX: -62
                        },
                        compId: 78,
                        child: [{
                            type: "Image",
                            props: {
                                y: -15,
                                x: 115,
                                var: "star1",
                                skin: "pub/star1.png"
                            },
                            compId: 88
                        }, {
                            type: "Image",
                            props: {
                                y: -15,
                                x: 185,
                                var: "star2",
                                skin: "pub/star1.png"
                            },
                            compId: 89
                        }, {
                            type: "Image",
                            props: {
                                y: -15,
                                x: 244,
                                var: "star3",
                                skin: "pub/star1.png"
                            },
                            compId: 90
                        }]
                    }, {
                        type: "Box",
                        props: {
                            y: 133,
                            var: "keyBox",
                            right: 0,
                            left: 0,
                            height: 100
                        },
                        compId: 91,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 244,
                                var: "key1",
                                skin: "pub/key1.png"
                            },
                            compId: 92
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 335,
                                var: "key2",
                                skin: "pub/key1.png"
                            },
                            compId: 95
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 435,
                                var: "key3",
                                skin: "pub/key1.png"
                            },
                            compId: 94
                        }]
                    }]
                }, {
                    type: "Image",
                    props: {
                        var: "gameCoin",
                        top: 300,
                        skin: "game/coinBg1.png",
                        left: 0
                    },
                    compId: 96,
                    child: [{
                        type: "Label",
                        props: {
                            y: 26,
                            x: 36,
                            width: 75,
                            var: "scoreLabel",
                            valign: "middle",
                            text: "0",
                            height: 47,
                            fontSize: 40,
                            bold: !0,
                            align: "center"
                        },
                        compId: 97
                    }]
                }, {
                    type: "Image",
                    props: {
                        var: "imgTip1",
                        skin: "game/imgTip.png",
                        name: "imgTip1",
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 115
                }]
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    visible: !0,
                    var: "forestBox",
                    top: 0,
                    right: 0,
                    name: "forestBox",
                    mouseThrough: !0,
                    left: 0,
                    bottom: 0
                },
                compId: 104,
                child: []
            }, {
                type: "Box",
                props: {
                    y: 1e3,
                    width: 308,
                    var: "guideBox",
                    height: 158,
                    centerX: 0,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 111,
                child: [{
                    type: "Image",
                    props: {
                        y: -400,
                        var: "imgTip",
                        skin: "game/imgTip1.png",
                        name: "imgTip",
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 112
                }, {
                    type: "Image",
                    props: {
                        var: "guide1",
                        skin: "game/guide1.png",
                        centerX: 0
                    },
                    compId: 113
                }, {
                    type: "Image",
                    props: {
                        y: 66,
                        x: 108,
                        var: "guide2",
                        skin: "game/guide2.png"
                    },
                    compId: 114
                }]
            }],
            animations: [{
                nodes: [{
                    target: 81,
                    keyframes: {
                        x: [{
                            value: 186,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 81,
                            key: "x",
                            index: 0
                        }, {
                            value: 500,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 81,
                            key: "x",
                            index: 15
                        }, {
                            value: 186,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 81,
                            key: "x",
                            index: 30
                        }]
                    }
                }],
                name: "fingerAni",
                id: 1,
                frameRate: 12,
                action: 0
            }, {
                nodes: [{
                    target: 114,
                    keyframes: {
                        y: [{
                            value: 66,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 0
                        }, {
                            value: 15,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 2
                        }, {
                            value: 9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 4
                        }, {
                            value: 42,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 6
                        }, {
                            value: 95,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 8
                        }, {
                            value: 125,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 10
                        }, {
                            value: 109,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 12
                        }, {
                            value: 66,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 14
                        }, {
                            value: 31,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 16
                        }, {
                            value: 8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 18
                        }, {
                            value: 43,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 20
                        }, {
                            value: 103,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 22
                        }, {
                            value: 128,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 24
                        }, {
                            value: 115,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 26
                        }, {
                            value: 92,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 28
                        }, {
                            value: 66,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "y",
                            index: 30
                        }],
                        x: [{
                            value: 108,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 0
                        }, {
                            value: 59,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 2
                        }, {
                            value: 26,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 4
                        }, {
                            value: -24,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 6
                        }, {
                            value: -26,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 8
                        }, {
                            value: 16,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 10
                        }, {
                            value: 69,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 12
                        }, {
                            value: 108,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 14
                        }, {
                            value: 137,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 16
                        }, {
                            value: 190,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 18
                        }, {
                            value: 238,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 20
                        }, {
                            value: 231,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 22
                        }, {
                            value: 182,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 24
                        }, {
                            value: 154,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 26
                        }, {
                            value: 128,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 28
                        }, {
                            value: 108,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 114,
                            key: "x",
                            index: 30
                        }]
                    }
                }],
                name: "guideAni",
                id: 2,
                frameRate: 24,
                action: 0
            }],
            loadList: ["pub/finger.png", "game/guide.png", "pub/share_btn.png", "pub/sign_btn.png", "pub/skin_btn.png", "pub/coin_bg.png", "pub/coin.png", "pub/setting.png", "pub/progress.png", "pub/star1.png", "pub/key1.png", "game/coinBg1.png", "game/imgTip.png", "game/imgTip1.png", "game/guide1.png", "game/guide2.png"],
            loadList3D: []
        }, e.GameViewUI = s, i("ui.GameViewUI", s);
        class o extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(o.uiView);
            }
        }
        o.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#514b6f"
                },
                compId: 20
            }, {
                type: "Image",
                props: {
                    y: 264,
                    skin: "loading/logo.png",
                    centerX: 0
                },
                compId: 19
            }, {
                type: "Box",
                props: {
                    width: 407,
                    height: 40,
                    centerX: 0,
                    bottom: 125
                },
                compId: 9,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 407,
                        skin: "loading/progress.png",
                        height: 40
                    },
                    compId: 15
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 407,
                        skin: "loading/progress$bar.png",
                        sizeGrid: "17,51,22,40",
                        height: 40
                    },
                    compId: 8,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 1,
                            x: 0,
                            width: 395,
                            var: "progressImageMask",
                            renderType: "mask",
                            height: 36
                        },
                        compId: 10
                    }]
                }, {
                    type: "Label",
                    props: {
                        width: 410,
                        var: "loadingLabel",
                        valign: "middle",
                        text: "0%",
                        strokeColor: "#549FE4",
                        stroke: 4,
                        right: 0,
                        left: -3,
                        height: 40,
                        fontSize: 40,
                        color: "#FFFFFF",
                        bottom: -40,
                        align: "center"
                    },
                    compId: 11
                }, {
                    type: "Label",
                    props: {
                        y: -56,
                        x: 2.5,
                        width: 402,
                        valign: "middle",
                        text: "LOADING",
                        strokeColor: "#549FE4",
                        stroke: 2,
                        height: 67,
                        fontSize: 30,
                        color: "#FFFFFF",
                        align: "center"
                    },
                    compId: 12
                }]
            }],
            loadList: ["loading/logo.png", "forest/img_logo1.png", "forest/img_logo.png", "loading/progress.png", "loading/progress$bar.png"],
            loadList3D: []
        }, e.LoadingViewUI = o, i("ui.LoadingViewUI", o);
        class r extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(r.uiView);
            }
        }
        r.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .7
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    width: 707,
                    var: "contentBox",
                    height: 758,
                    centerY: -117,
                    centerX: 0
                },
                compId: 4,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "pub/bg.png",
                        sizeGrid: "42,59,52,47",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 15,
                        skin: "pub/offline.png",
                        centerX: 0
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        x: 197,
                        width: 65,
                        skin: "pub/coin.png",
                        height: 58,
                        bottom: 191,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 8
                }, {
                    type: "Label",
                    props: {
                        width: 349,
                        var: "coinLabel",
                        valign: "middle",
                        text: "金币+100",
                        strokeColor: "#C07400",
                        stroke: 10,
                        height: 54,
                        fontSize: 50,
                        color: "#FDEC5A",
                        centerX: 105,
                        bottom: 190,
                        bold: !0,
                        align: "left"
                    },
                    compId: 9
                }, {
                    type: "Button",
                    props: {
                        width: 278,
                        var: "btn",
                        stateNum: 1,
                        skin: "skin/btn_skin_video.png",
                        scaleY: 1,
                        scaleX: 1,
                        height: 104,
                        centerX: 0,
                        bottom: 25,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 10,
                    child: [{
                        type: "Image",
                        props: {
                            width: 50,
                            skin: "skin/ic_vedio1.png",
                            left: 30,
                            height: 50,
                            centerY: 0
                        },
                        compId: 11
                    }, {
                        type: "Label",
                        props: {
                            valign: "middle",
                            text: "CLAIM x 3",
                            strokeColor: "#854428",
                            stroke: 6,
                            right: 23,
                            fontSize: 40,
                            color: "#FFFFFF",
                            centerY: 0,
                            align: "center"
                        },
                        compId: 12
                    }]
                }, {
                    type: "Box",
                    props: {
                        x: 246,
                        width: 213,
                        var: "closeBtn",
                        height: 75,
                        bottom: -101
                    },
                    compId: 13,
                    child: [{
                        type: "Image",
                        props: {
                            x: -.71875,
                            width: 214,
                            visible: !1,
                            skin: "skin/btn_skin_sure.png",
                            name: "btnBg",
                            height: 69
                        },
                        compId: 14
                    }, {
                        type: "Label",
                        props: {
                            y: 0,
                            x: 0,
                            width: 210,
                            valign: "middle",
                            text: "CLAIM",
                            strokeColor: "#5a27ba",
                            stroke: 4,
                            height: 68,
                            fontSize: 30,
                            color: "#FFFFFF",
                            bold: !0,
                            align: "center"
                        },
                        compId: 20
                    }]
                }, {
                    type: "Label",
                    props: {
                        width: 180,
                        visible: !1,
                        var: "upTip",
                        valign: "middle",
                        text: "(收益已达上限)",
                        height: 40,
                        fontSize: 25,
                        color: "#2f195f",
                        centerX: 240,
                        bottom: 197,
                        bold: !0,
                        align: "center"
                    },
                    compId: 19
                }, {
                    type: "Label",
                    props: {
                        width: 349,
                        var: "offlineTip",
                        valign: "middle",
                        text: "金币+100",
                        height: 40,
                        fontSize: 25,
                        color: "#2f195f",
                        centerX: -13,
                        bottom: 134,
                        bold: !0,
                        align: "center"
                    },
                    compId: 18
                }, {
                    type: "Box",
                    props: {
                        width: 650,
                        var: "a3xbox",
                        height: 400,
                        centerX: 0,
                        bottom: 270
                    },
                    compId: 25
                }]
            }],
            animations: [{
                nodes: [{
                    target: 10,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 6
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 9
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 12
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            label: null,
                            key: "scaleY",
                            index: 18
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 30
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 6
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 9
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 12
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            label: null,
                            key: "scaleX",
                            index: 18
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 30
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }],
            loadList: ["pub/bg.png", "pub/offline.png", "pub/coin.png", "skin/btn_skin_video.png", "skin/ic_vedio1.png", "skin/btn_skin_sure.png"],
            loadList3D: []
        }, e.OfflineViewUI = r, i("ui.OfflineViewUI", r);
        class h extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(h.uiView);
            }
        }
        h.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    top: 0,
                    right: 0,
                    name: "bg",
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .85
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    right: 0,
                    left: 0,
                    height: 832,
                    centerY: -22
                },
                compId: 4,
                child: [{
                    type: "Box",
                    props: {
                        y: 265,
                        x: 375,
                        width: 530,
                        height: 530,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 5,
                    child: [{
                        type: "Image",
                        props: {
                            y: -90,
                            skin: "skin/role_get_title.png",
                            scaleY: .8,
                            scaleX: .8,
                            centerX: 0
                        },
                        compId: 6
                    }, {
                        type: "Animation",
                        props: {
                            y: 265,
                            x: 265,
                            var: "bgAni",
                            source: "ani/Light.ani"
                        },
                        compId: 7
                    }, {
                        type: "Box",
                        props: {
                            width: 500,
                            var: "dinsBox",
                            height: 500,
                            centerY: 19,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 8,
                        child: [{
                            type: "Script",
                            props: {
                                runtime: "views/item/RoleShowScript.ts"
                            },
                            compId: 54
                        }]
                    }, {
                        type: "ProgressBar",
                        props: {
                            width: 560,
                            var: "roleProgress",
                            top: 510,
                            skin: "skin/progress.png",
                            sizeGrid: "35,50,35,50",
                            height: 80,
                            centerX: 0
                        },
                        compId: 26,
                        child: [{
                            type: "Label",
                            props: {
                                var: "proValue",
                                text: "50%",
                                fontSize: 40,
                                color: "#FFFFFF",
                                centerY: 0,
                                centerX: 0,
                                bold: !0
                            },
                            compId: 27
                        }]
                    }, {
                        type: "Button",
                        props: {
                            width: 270,
                            var: "btn",
                            top: 740,
                            stateNum: 1,
                            skin: "skin/btn_skin_video.png",
                            height: 90,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 50,
                        child: [{
                            type: "Label",
                            props: {
                                var: "btnLabel",
                                text: "CONTINUE",
                                strokeColor: "#5a27ba",
                                stroke: 6,
                                fontSize: 45,
                                color: "#FFFFFF",
                                centerY: 0,
                                centerX: 0,
                                bold: !0
                            },
                            compId: 52
                        }]
                    }]
                }]
            }],
            loadList: ["skin/role_get_title.png", "ani/Light.ani", "skin/progress.png", "skin/btn_skin_sure.png", "pub/ic_share3.png", "skin/btn_skin_video.png"],
            loadList3D: []
        }, e.RoleProgressViewUI = h, i("ui.RoleProgressViewUI", h);
        class l extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(l.uiView);
            }
        }
        l.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .7
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    width: 627,
                    height: 450,
                    centerY: -56,
                    centerX: 0
                },
                compId: 4,
                child: [{
                    type: "Image",
                    props: {
                        width: 627,
                        top: 0,
                        skin: "pub/dialogBg.png",
                        sizeGrid: "50,50,50,50",
                        right: 0,
                        name: "bg",
                        left: 0,
                        height: 450,
                        bottom: 0
                    },
                    compId: 5
                }, {
                    type: "Label",
                    props: {
                        width: 104,
                        valign: "middle",
                        top: 36,
                        text: "SETTING",
                        name: "title",
                        height: 50,
                        fontSize: 50,
                        color: "#000000",
                        centerX: 0,
                        bold: !0,
                        align: "center"
                    },
                    compId: 6
                }, {
                    type: "Box",
                    props: {
                        width: 300,
                        height: 50,
                        centerY: -50,
                        centerX: 0
                    },
                    compId: 23,
                    child: [{
                        type: "Label",
                        props: {
                            width: 71,
                            text: "MUSIC",
                            strokeColor: "#000000",
                            stroke: 2,
                            left: 0,
                            height: 36,
                            fontSize: 35,
                            color: "#FFFFFF",
                            centerY: 0
                        },
                        compId: 24
                    }, {
                        type: "Button",
                        props: {
                            var: "musicBtn",
                            stateNum: 1,
                            skin: "pub/ic_check.png",
                            right: 51,
                            centerY: -6
                        },
                        compId: 25
                    }]
                }, {
                    type: "Box",
                    props: {
                        x: 164,
                        width: 300,
                        height: 50,
                        centerY: 50,
                        centerX: 0
                    },
                    compId: 26,
                    child: [{
                        type: "Label",
                        props: {
                            width: 72,
                            text: "SOUND",
                            strokeColor: "#000000",
                            stroke: 2,
                            left: 0,
                            height: 35,
                            fontSize: 35,
                            color: "#FFFFFF",
                            centerY: 0
                        },
                        compId: 27
                    }, {
                        type: "Button",
                        props: {
                            var: "soundBtn",
                            stateNum: 1,
                            skin: "pub/ic_check.png",
                            right: 51,
                            centerY: -6
                        },
                        compId: 28
                    }]
                }, {
                    type: "Image",
                    props: {
                        width: 50,
                        var: "closeBtn",
                        top: 30,
                        skin: "pub/ic_close.png",
                        right: 20,
                        height: 50,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 12
                }]
            }],
            loadList: ["pub/dialogBg.png", "pub/ic_check.png", "pub/ic_close.png"],
            loadList3D: []
        }, e.SettingViewUI = l, i("ui.SettingViewUI", l);
        class c extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(c.uiView);
            }
        }
        c.uiView = {
            "type": "View",
            "props": {
                "width": 750,
                "top": 0,
                "right": 0,
                "left": 0,
                "height": 1334,
                "bottom": 0
            },
            "compId": 2,
            "child": [{
                "type": "Box",
                "props": {
                    "y": -1,
                    "x": 0,
                    "top": -1,
                    "right": 0,
                    "name": "settleBg",
                    "left": 0,
                    "bottom": 0,
                    "bgColor": "#000000",
                    "alpha": 0.8
                },
                "compId": 3
            }, {
                "type": "Box",
                "props": {
                    "top": 0,
                    "runtime": "views/runtime/UIAdapter.ts",
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "compId": 4,
                "child": [{
                    "type": "Image",
                    "props": {
                        "var": "tipImage",
                        "top": 84,
                        "skin": "settle/img_settle_win.png",
                        "scaleY": 1,
                        "scaleX": 1,
                        "centerX": 0,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "compId": 64
                }, {
                    "type": "Box",
                    "props": {
                        "width": 300,
                        "var": "starBox",
                        "top": 166,
                        "centerX": 0
                    },
                    "compId": 98,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 0,
                            "x": 42,
                            "var": "star1",
                            "skin": "pub/star1.png"
                        },
                        "compId": 99
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 0,
                            "x": 126.5,
                            "var": "star2",
                            "skin": "pub/star1.png"
                        },
                        "compId": 101
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 0,
                            "x": 211,
                            "var": "star3",
                            "skin": "pub/star1.png"
                        },
                        "compId": 102
                    }]
                }, {
                    "type": "Box",
                    "props": {
                        "var": "coinBox",
                        "centerX": 6,
                        "bottom": 500,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "compId": 73,
                    "child": [{
                        "type": "Label",
                        "props": {
                            "y": 6,
                            "x": 159,
                            "width": 275,
                            "var": "coinLabel",
                            "valign": "middle",
                            "text": "x50",
                            "stroke": 3,
                            "height": 66,
                            "fontSize": 60,
                            "color": "#FFFFFF",
                            "align": "left"
                        },
                        "compId": 72
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 13,
                            "x": 90,
                            "skin": "pub/coin.png"
                        },
                        "compId": 103
                    }]
                }, {
                    "type": "Button",
                    "props": {
                        "var": "videoBtn",
                        "stateNum": 1,
                        "skin": "pub/btn.png",
                        "sizeGrid": "24,79,58,48",
                        "centerX": 6,
                        "bottom": 370,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "compId": 91,
                    "child": [{
                        "type": "Label",
                        "props": {
                            "bold": true,
                            "y": 0,
                            "x": 0,
                            "width": 291,
                            "valign": "middle",
                            "underline": false,
                            "text": "CLAIM X 5",
                            "padding": "0,0,0,20",
                            "height": 119,
                            "fontSize": 35,
                            "color": "#FFFFFF",
                            "align": "center"
                        },
                        "compId": 87
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 41,
                            "x": 38,
                            "skin": "pub/video_ic.png"
                        },
                        "compId": 105
                    }]
                }, {
                    "type": "Box",
                    "props": {
                        "width": 282,
                        "var": "btnContainer",
                        "height": 80,
                        "centerX": 6,
                        "bottom": 280
                    },
                    "compId": 79,
                    "child": [{
                        "type": "Button",
                        "props": {
                            "y": 40,
                            "x": 141,
                            "var": "nextBtn",
                            "valign": "middle",
                            "underline": false,
                            "stateNum": 1,
                            "skin": "pub/btn_bg.png",
                            "labelSize": 40,
                            "labelColors": "#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF",
                            "label": "NEXT",
                            "fontSize": 40,
                            "color": "#FFFFFF",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        },
                        "compId": 78
                    }, {
                        "type": "Button",
                        "props": {
                            "y": 40,
                            "x": 141,
                            "var": "retryBtn",
                            "valign": "middle",
                            "underline": false,
                            "stateNum": 1,
                            "skin": "pub/btn_bg.png",
                            "labelSize": 40,
                            "labelColors": "#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF",
                            "label": "RETRY",
                            "fontSize": 40,
                            "color": "#FFFFFF",
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        },
                        "compId": 86
                    }]
                }]
            }, {
                "type": "Box",
                "props": {
                    "y": 0,
                    "x": 0,
                    "var": "forestBox",
                    "top": 0,
                    "right": 0,
                    "name": "forestBox",
                    "mouseThrough": true,
                    "left": 0,
                    "bottom": 0
                },
                "compId": 106,
                "child": [{
                    "type": "List",
                    "props": {
                        "var": "gameList",
                        "y": 261,
                        "width": 612,
                        "spaceY": 3,
                        "spaceX": 3,
                        "repeatY": 3,
                        "repeatX": 3,
                        "name": "gameList",
                        "height": 456,
                        "centerX": 0
                    },
                    "compId": 47,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "width": 200,
                            "renderType": "render",
                            "height": 150
                        },
                        "compId": 48,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "width": 200,
                                "skin": "",
                                "name": "thumb",
                                "height": 150
                            },
                            "compId": 49
                        }]
                    }]
                }]
            }],
            "animations": [{
                "nodes": [{
                    "target": 6,
                    "keyframes": {
                        "skin": [{
                            "value": "settlement/light1.png",
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 6,
                            "key": "skin",
                            "index": 0
                        }, {
                            "value": "settlement/light2.png",
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 6,
                            "key": "skin",
                            "index": 5
                        }, {
                            "value": "settlement/light3.png",
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 6,
                            "key": "skin",
                            "index": 10
                        }, {
                            "value": "settlement/light4.png",
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 6,
                            "key": "skin",
                            "index": 15
                        }]
                    }
                }],
                "name": "lightAni",
                "id": 1,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [],
                "name": "heartAni",
                "id": 2,
                "frameRate": 24,
                "action": 0
            }],
            "loadList": ["settle/img_settle_win.png", "pub/star1.png", "pub/coin.png", "pub/btn.png", "pub/video_ic.png", "pub/btn_bg.png", "settlement/light1.png", "settlement/light2.png", "settlement/light3.png", "settlement/light4.png"],
            "loadList3D": []
        }, e.SettleViewUI = c, i("ui.SettleViewUI", c);
        class d extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(d.uiView);
            }
        }
        d.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#27252b"
                },
                compId: 69
            }, {
                type: "Box",
                props: {
                    right: 0,
                    name: "bottomView",
                    left: 0,
                    height: 1060,
                    bottom: 0
                },
                compId: 70,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        var: "imageBg",
                        top: 0,
                        skin: "skin/bg.png",
                        sizeGrid: "98,116,29,105",
                        right: 0,
                        name: "imageBg",
                        left: 0,
                        bottom: 0
                    },
                    compId: 71
                }, {
                    type: "Box",
                    props: {
                        width: 2250,
                        var: "panelBottom",
                        top: 118,
                        name: "panelBottom",
                        height: 637,
                        centerX: 0
                    },
                    compId: 92,
                    child: [{
                        type: "SkinItemView",
                        props: {
                            var: "leftView",
                            runtime: "views/item/SkinItemView.ts",
                            name: "leftView",
                            left: 0,
                            centerY: 0
                        },
                        compId: 93
                    }, {
                        type: "SkinItemView",
                        props: {
                            var: "centerView",
                            runtime: "views/item/SkinItemView.ts",
                            name: "centerView",
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 94
                    }, {
                        type: "SkinItemView",
                        props: {
                            var: "rightView",
                            runtime: "views/item/SkinItemView.ts",
                            right: 0,
                            name: "rightView",
                            centerY: 0
                        },
                        compId: 95
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 755,
                        x: 275,
                        width: 200,
                        height: 80,
                        centerX: 0
                    },
                    compId: 91,
                    child: [{
                        type: "Image",
                        props: {
                            y: 26,
                            x: 15,
                            var: "imageUnselecte1",
                            skin: "skin/btn_skin_unselected.png",
                            name: "imageUnselecte1"
                        },
                        compId: 96
                    }, {
                        type: "Image",
                        props: {
                            y: 26,
                            x: 86,
                            var: "imageUnselecte2",
                            skin: "skin/btn_skin_unselected.png",
                            name: "imageUnselecte2"
                        },
                        compId: 97
                    }, {
                        type: "Image",
                        props: {
                            y: 26,
                            x: 157,
                            var: "imageUnselecte3",
                            skin: "skin/btn_skin_unselected.png",
                            name: "imageUnselecte3"
                        },
                        compId: 100
                    }, {
                        type: "Image",
                        props: {
                            y: 26,
                            x: 15,
                            var: "imageSelecte",
                            skin: "skin/btn_skin_selected.png",
                            name: "imageSelecte"
                        },
                        compId: 101
                    }]
                }, {
                    type: "Button",
                    props: {
                        var: "btnSure",
                        top: 864,
                        stateNum: 1,
                        skin: "pub/btn1.png",
                        name: "btnSure",
                        left: 62
                    },
                    compId: 76,
                    child: [{
                        type: "Label",
                        props: {
                            x: 62,
                            top: 11,
                            text: "RANDOM",
                            strokeColor: "#fbf8f8",
                            stroke: 1,
                            name: "labJs",
                            fontSize: 40,
                            font: "Microsoft YaHei",
                            color: "#fbf8f8",
                            bold: !0
                        },
                        compId: 77
                    }, {
                        type: "Box",
                        props: {
                            x: 133.5,
                            width: 150,
                            name: "imgSureBg",
                            height: 50,
                            bottom: 21,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 79,
                        child: [{
                            type: "Image",
                            props: {
                                y: 5,
                                width: 39,
                                skin: "pub/coin.png",
                                left: 0,
                                height: 42
                            },
                            compId: 78
                        }, {
                            type: "Label",
                            props: {
                                width: 100,
                                var: "labSureMoney",
                                valign: "middle",
                                text: "4567",
                                stroke: 0,
                                right: 0,
                                height: 40,
                                fontSize: 40,
                                font: "Microsoft YaHei",
                                color: "#FFFFFF",
                                centerY: 5,
                                align: "center"
                            },
                            compId: 80
                        }]
                    }]
                }, {
                    type: "Button",
                    props: {
                        var: "btnVideo",
                        top: 863,
                        stateNum: 1,
                        skin: "pub/btn.png",
                        right: 58,
                        name: "btnVideo"
                    },
                    compId: 81,
                    child: [{
                        type: "Box",
                        props: {
                            y: 28,
                            x: 89,
                            width: 150,
                            right: 28,
                            name: "imgSureBg",
                            height: 50
                        },
                        compId: 83,
                        child: [{
                            type: "Image",
                            props: {
                                y: 3,
                                x: 109,
                                width: 41,
                                skin: "pub/coin.png",
                                name: "imgSureMoney",
                                left: 109,
                                height: 44
                            },
                            compId: 84
                        }, {
                            type: "Label",
                            props: {
                                width: 108,
                                var: "labVideoMoney",
                                valign: "middle",
                                text: "+4567",
                                strokeColor: "#f8f6f6",
                                stroke: 1,
                                right: 51,
                                height: 43,
                                fontSize: 40,
                                font: "Microsoft YaHei",
                                color: "#f8f6f6",
                                centerY: 3,
                                bold: !0,
                                align: "left"
                            },
                            compId: 85
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: 35,
                            x: 29,
                            skin: "pub/video_ic.png"
                        },
                        compId: 86
                    }]
                }, {
                    type: "Label",
                    props: {
                        x: 68,
                        width: 614,
                        var: "useBtn",
                        valign: "middle",
                        top: 868,
                        text: "USE",
                        strokeColor: "#000000",
                        stroke: 1,
                        height: 115,
                        fontSize: 45,
                        font: "Microsoft YaHei",
                        color: "#fbf8f8",
                        bold: !0,
                        align: "center"
                    },
                    compId: 106
                }, {
                    type: "Image",
                    props: {
                        y: 372,
                        x: 11,
                        var: "prevBtn",
                        skin: "pub/left.png"
                    },
                    compId: 112
                }, {
                    type: "Image",
                    props: {
                        y: 372.5,
                        x: 699,
                        var: "nextBtn",
                        skin: "pub/right.png"
                    },
                    compId: 113
                }, {
                    type: "Image",
                    props: {
                        y: -190,
                        x: 305,
                        width: 200,
                        var: "unknowImage",
                        skin: "skin/unknow.png",
                        height: 200
                    },
                    compId: 114
                }, {
                    type: "Box",
                    props: {
                        y: -82,
                        x: 305,
                        width: 200,
                        var: "modelShowBox",
                        height: 200
                    },
                    compId: 103,
                    child: [{
                        type: "Script",
                        props: {
                            runtime: "views/item/RoleShowScript.ts"
                        },
                        compId: 104
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    top: 20,
                    runtime: "views/runtime/UIAdapter.ts",
                    right: 0,
                    name: "topView",
                    left: 0,
                    height: 200
                },
                compId: 34,
                child: [{
                    type: "Button",
                    props: {
                        var: "btnClose",
                        top: 30,
                        stateNum: 1,
                        skin: "pub/back.png",
                        name: "btnClose",
                        left: 120
                    },
                    compId: 72
                }, {
                    type: "Image",
                    props: {
                        top: 143,
                        skin: "skin/img_skin_coin_bg.png",
                        right: 30,
                        name: "imgCoinBg"
                    },
                    compId: 73,
                    child: [{
                        type: "Image",
                        props: {
                            y: -8,
                            x: 148,
                            skin: "pub/coin.png",
                            name: "imgCoin"
                        },
                        compId: 74
                    }, {
                        type: "Label",
                        props: {
                            y: 10.5,
                            x: 36,
                            width: 100,
                            var: "labCoin",
                            valign: "middle",
                            text: "888",
                            name: "labCoin",
                            height: 35,
                            fontSize: 30,
                            color: "#FFFFFF",
                            align: "right"
                        },
                        compId: 75
                    }]
                }]
            }],
            loadList: ["skin/bg.png", "skin/btn_skin_unselected.png", "skin/btn_skin_selected.png", "pub/btn1.png", "pub/coin.png", "pub/btn.png", "pub/video_ic.png", "pub/left.png", "pub/right.png", "skin/unknow.png", "pub/back.png", "skin/img_skin_coin_bg.png"],
            loadList3D: []
        }, e.SkinViewUI = d, i("ui.SkinViewUI", d);
        class p extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(p.uiView);
            }
        }
        p.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .7
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    x: 0,
                    width: 750,
                    height: 1103,
                    centerY: -51
                },
                compId: 4,
                child: [{
                    type: "List",
                    props: {
                        y: 306,
                        x: 118,
                        width: 532,
                        var: "list",
                        spaceY: 30,
                        spaceX: 30,
                        repeatY: 3,
                        repeatX: 3,
                        height: 573
                    },
                    compId: 14,
                    child: [{
                        type: "BoxItemView",
                        props: {
                            runtime: "views/item/BoxItemView.ts",
                            renderType: "render"
                        },
                        compId: 15
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 75,
                        x: 421,
                        width: 311,
                        height: 285
                    },
                    compId: 8,
                    child: [{
                        type: "Animation",
                        props: {
                            y: 142,
                            x: 155,
                            source: "ani/Light.ani",
                            scaleY: .5,
                            scaleX: .5,
                            autoPlay: !0
                        },
                        compId: 7
                    }, {
                        type: "Box",
                        props: {
                            var: "coinBox",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 9,
                        child: [{
                            type: "Image",
                            props: {
                                y: 107,
                                x: 65,
                                skin: "pub/coin.png"
                            },
                            compId: 10
                        }, {
                            type: "Label",
                            props: {
                                y: 103,
                                x: 131,
                                var: "coinLabel",
                                text: "+200",
                                strokeColor: "#854428",
                                stroke: 5,
                                fontSize: 60,
                                color: "#ffffff",
                                bold: !0
                            },
                            compId: 11
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: 17.5,
                            x: 30,
                            width: 250,
                            visible: !1,
                            var: "skinImageView",
                            skin: "role/PlayerChar_Rigged_Prefab_00_Burglar_F.png",
                            height: 250
                        },
                        compId: 12
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 156.5,
                        skin: "treasure/title.png"
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 171,
                        x: 156.5,
                        text: "text",
                        skin: "treasure/text.png"
                    },
                    compId: 6
                }, {
                    type: "Box",
                    props: {
                        y: 911,
                        x: 176.5,
                        width: 400,
                        var: "keyBox",
                        height: 108
                    },
                    compId: 16,
                    child: [{
                        type: "Image",
                        props: {
                            var: "key1",
                            skin: "treasure/key_empty.png"
                        },
                        compId: 17
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 140.5,
                            var: "key2",
                            skin: "treasure/key_empty.png"
                        },
                        compId: 19
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 281,
                            var: "key3",
                            skin: "treasure/key_empty.png"
                        },
                        compId: 20
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 869,
                        x: 234,
                        width: 300,
                        var: "btnBox",
                        height: 300
                    },
                    compId: 21,
                    child: [{
                        type: "Button",
                        props: {
                            y: 43,
                            centerX: 0,
                            var: "videoBtn",
                            stateNum: 1,
                            skin: "treasure/btn.png",
                            labelSize: 50,
                            labelColors: "#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF",
                            labelBold: !0,
                            label: "+3"
                        },
                        compId: 22,
                        child: [{
                            type: "Image",
                            props: {
                                y: 35,
                                x: 37,
                                skin: "pub/video_ic.png"
                            },
                            compId: 23
                        }, {
                            type: "Image",
                            props: {
                                y: 26.5,
                                x: 178,
                                skin: "treasure/key.png"
                            },
                            compId: 24
                        }]
                    }, {
                        type: "Label",
                        props: {
                            y: 184,
                            centerX: 0,
                            var: "countiueBtn",
                            underlineColor: "#FFFFFF",
                            underline: !0,
                            text: "CONTINUE",
                            fontSize: 35,
                            color: "#FFFFFF"
                        },
                        compId: 25
                    }]
                }]
            }],
            loadList: ["ani/Light.ani", "pub/coin.png", "role/PlayerChar_Rigged_Prefab_00_Burglar_F.png", "treasure/title.png", "treasure/text.png", "treasure/key_empty.png", "treasure/btn.png", "pub/video_ic.png", "treasure/key.png"],
            loadList3D: []
        }, e.TreasureBoxUI = p, i("ui.TreasureBoxUI", p);
        class u extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(u.uiView);
            }
        }
        u.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    name: "bg",
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .85
                },
                compId: 4
            }, {
                type: "Box",
                props: {
                    right: 0,
                    left: 0,
                    height: 832,
                    centerY: -22
                },
                compId: 5,
                child: [{
                    type: "Box",
                    props: {
                        y: 265,
                        x: 375,
                        width: 530,
                        height: 530,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 6,
                    child: [{
                        type: "Image",
                        props: {
                            y: -120,
                            skin: "skin/ic_free_try.png",
                            centerX: 0
                        },
                        compId: 7
                    }, {
                        type: "Animation",
                        props: {
                            y: 265,
                            x: 265,
                            var: "bgAni",
                            source: "ani/Light.ani"
                        },
                        compId: 8
                    }, {
                        type: "Box",
                        props: {
                            width: 500,
                            var: "dinsBox",
                            mouseEnabled: !1,
                            height: 500,
                            centerY: 133,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 9,
                        child: [{
                            type: "Script",
                            props: {
                                runtime: "views/item/RoleShowScript.ts"
                            },
                            compId: 35
                        }]
                    }, {
                        type: "Box",
                        props: {
                            width: 200,
                            var: "dayNotBox",
                            top: 540,
                            height: 40,
                            centerX: 0
                        },
                        compId: 26,
                        child: []
                    }, {
                        type: "Button",
                        props: {
                            width: 360,
                            var: "btn",
                            top: 600,
                            stateNum: 1,
                            skin: "sign/btn_sign_sure.png",
                            scaleY: 1,
                            scaleX: 1,
                            height: 120,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 29,
                        child: [{
                            type: "Image",
                            props: {
                                width: 60,
                                skin: "skin/ic_vedio1.png",
                                scaleY: .8,
                                scaleX: .8,
                                height: 60,
                                centerY: 0,
                                centerX: -115,
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 30
                        }, {
                            type: "Label",
                            props: {
                                text: "TRY FREE",
                                strokeColor: "#854428",
                                stroke: 6,
                                fontSize: 50,
                                color: "#FFFFFF",
                                centerY: 0,
                                centerX: 40,
                                bold: !0
                            },
                            compId: 31
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 295,
                        var: "closeBtn",
                        top: 750,
                        height: 99,
                        centerX: 0
                    },
                    compId: 32,
                    child: [{
                        type: "Label",
                        props: {
                            text: "NO,THANKS",
                            strokeColor: "#5a27ba",
                            stroke: 6,
                            fontSize: 40,
                            color: "#FFFFFF",
                            centerY: 0,
                            centerX: 0,
                            bold: !0
                        },
                        compId: 33
                    }]
                }]
            }],
            animations: [{
                nodes: [{
                    target: 29,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 3
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 6
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 9
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 12
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 25
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 3
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 6
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 9
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 12
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 25
                        }]
                    }
                }],
                name: "heartAni",
                id: 1,
                frameRate: 24,
                action: 0
            }],
            loadList: ["skin/ic_free_try.png", "ani/Light.ani", "pub/ic_uncheck.png", "sign/btn_sign_sure.png", "skin/ic_vedio1.png"],
            loadList3D: []
        }, e.TryViewUI = u, i("ui.TryViewUI", u);
        class g extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(g.uiView);
            }
        }
        g.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    visible: !0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#433a9d"
                },
                compId: 3,
                child: [{
                    type: "Box",
                    props: {
                        width: 720,
                        top: 240,
                        height: 200,
                        centerX: 0
                    },
                    compId: 5,
                    child: [{
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "tui/img_bg.png",
                            sizeGrid: "20,20,20,20",
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 6
                    }, {
                        type: "Image",
                        props: {
                            width: 345,
                            top: -85.5,
                            skin: "tui/img_title_friend.png",
                            height: 48,
                            centerX: 0
                        },
                        compId: 7
                    }, {
                        type: "List",
                        props: {
                            width: 720,
                            var: "topList",
                            top: 4,
                            spaceY: 0,
                            spaceX: 42,
                            repeatY: 1,
                            repeatX: 4,
                            height: 200,
                            centerX: 0
                        },
                        compId: 8,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 12,
                                width: 140,
                                renderType: "render",
                                name: "item",
                                height: 200
                            },
                            compId: 9,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 4,
                                    x: 0,
                                    width: 140,
                                    skin: "tui/img_3.png",
                                    name: "itemImg",
                                    height: 140,
                                    centerX: 0
                                },
                                compId: 11
                            }, {
                                type: "Label",
                                props: {
                                    x: 0,
                                    width: 165,
                                    valign: "middle",
                                    top: 154,
                                    text: "游戏名称五",
                                    overflow: "hidden",
                                    name: "itemName",
                                    fontSize: 30,
                                    color: "#000000",
                                    centerX: 0,
                                    align: "center"
                                },
                                compId: 12
                            }, {
                                type: "Image",
                                props: {
                                    y: 5,
                                    x: 0,
                                    skin: "tui/img_hot.png",
                                    right: 0,
                                    name: "itemRed"
                                },
                                compId: 33
                            }]
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        top: 530,
                        right: 0,
                        left: 5,
                        bottom: 45
                    },
                    compId: 16,
                    child: [{
                        type: "Image",
                        props: {
                            width: 345,
                            top: -62.5,
                            skin: "tui/img_title_recommend.png",
                            height: 48,
                            centerX: 0
                        },
                        compId: 18
                    }, {
                        type: "List",
                        props: {
                            width: 720,
                            var: "hotList",
                            top: 0,
                            spaceY: 29,
                            spaceX: 13,
                            repeatX: 3,
                            centerX: 0,
                            bottom: 0
                        },
                        compId: 19,
                        child: [{
                            type: "Box",
                            props: {
                                width: 234,
                                renderType: "render",
                                name: "item",
                                height: 291
                            },
                            compId: 20,
                            child: [{
                                type: "Image",
                                props: {
                                    top: 24,
                                    skin: "tui/img_bg.png",
                                    sizeGrid: "20,20,20,20",
                                    right: 23,
                                    left: 0,
                                    bottom: 0
                                },
                                compId: 23
                            }, {
                                type: "Image",
                                props: {
                                    width: 190,
                                    top: 35,
                                    skin: "tui/img_3.png",
                                    name: "itemImg",
                                    left: 11,
                                    height: 190
                                },
                                compId: 21
                            }, {
                                type: "Image",
                                props: {
                                    width: 212,
                                    top: 229,
                                    skin: "tui/img_1.png",
                                    name: "itemNameBg",
                                    left: 0,
                                    height: 62
                                },
                                compId: 25
                            }, {
                                type: "Label",
                                props: {
                                    width: 206,
                                    valign: "middle",
                                    top: 233,
                                    text: "游戏名称六字",
                                    overflow: "hidden",
                                    name: "itemName",
                                    height: 58,
                                    fontSize: 32,
                                    color: "#FFFFFF",
                                    centerX: -11,
                                    align: "center"
                                },
                                compId: 22
                            }, {
                                type: "Image",
                                props: {
                                    width: 80,
                                    top: 24,
                                    skin: "tui/img_hot.png",
                                    right: 13,
                                    name: "itemRed",
                                    height: 50
                                },
                                compId: 24
                            }]
                        }]
                    }]
                }, {
                    type: "Image",
                    props: {
                        width: 300,
                        visible: !1,
                        var: "btn",
                        skin: "tui/btn_yellow.png",
                        height: 100,
                        centerX: 0,
                        bottom: 150,
                        alpha: .9
                    },
                    compId: 26,
                    child: [{
                        type: "Label",
                        props: {
                            visible: !1,
                            text: "",
                            strokeColor: "#0D3966",
                            stroke: 3,
                            fontSize: 50,
                            color: "#FFFFFF",
                            centerY: 0,
                            centerX: 0,
                            bold: !0
                        },
                        compId: 30
                    }]
                }]
            }],
            loadList: ["tui/img_bg.png", "tui/img_title_friend.png", "tui/img_3.png", "tui/img_hot.png", "tui/img_title_recommend.png", "tui/img_1.png", "tui/btn_yellow.png"],
            loadList3D: []
        }, e.ZsTuiViewUI = g, i("ui.ZsTuiViewUI", g);
    }(e || (e = {})),
    function(e) {
        ! function(t) {
            class n extends Laya.EffectAnimation {
                constructor() {
                    super(), this.effectData = e.ani.BtnScaleDownUI.uiView;
                }
            }
            n.uiView = {
                type: "View",
                props: {
                    name: "BtnScaleDown"
                },
                compId: 1,
                child: [{
                    type: "Image",
                    props: {},
                    compId: 2
                }],
                animations: [{
                    nodes: [{
                        target: 2,
                        keyframes: {
                            x: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "x",
                                index: 0
                            }],
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 1
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 5
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 1
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 5
                            }]
                        }
                    }],
                    name: "PressDown",
                    id: 1,
                    frameRate: 24,
                    action: 0
                }],
                loadList: [],
                loadList3D: []
            }, t.BtnScaleDownUI = n, i("ui.ani.BtnScaleDownUI", n);
            class a extends Laya.EffectAnimation {
                constructor() {
                    super(), this.effectData = e.ani.BtnScaleUpUI.uiView;
                }
            }
            a.uiView = {
                type: "View",
                props: {
                    name: "BtnScaleUp"
                },
                compId: 1,
                child: [{
                    type: "Image",
                    props: {},
                    compId: 2
                }],
                animations: [{
                    nodes: [{
                        target: 2,
                        keyframes: {
                            x: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "x",
                                index: 0
                            }],
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 1
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 5
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 1
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 5
                            }]
                        }
                    }],
                    name: "PressUp",
                    id: 1,
                    frameRate: 24,
                    action: 0
                }],
                loadList: [],
                loadList3D: []
            }, t.BtnScaleUpUI = a, i("ui.ani.BtnScaleUpUI", a);
        }(e.ani || (e.ani = {}));
    }(e || (e = {})),
    function(e) {
        ! function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(t.uiView);
                }
            }
            t.uiView = {
                type: "View",
                props: {
                    width: 153,
                    runtime: "views/item/BoxItemView.ts",
                    height: 168
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        var: "bgImageView",
                        skin: "treasure/bg1.png"
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        width: 120,
                        var: "skinImageView",
                        skin: "role/PlayerChar_Rigged_Prefab_00_Burglar_F.png",
                        height: 120,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 4
                }, {
                    type: "Box",
                    props: {
                        var: "coinBox",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 5,
                    child: [{
                        type: "Label",
                        props: {
                            y: 24,
                            x: 26.5,
                            width: 100,
                            var: "coinLabel",
                            text: "200",
                            height: 52,
                            fontSize: 60,
                            color: "#FFFFFF"
                        },
                        compId: 6
                    }, {
                        type: "Sprite",
                        props: {
                            y: 95,
                            x: 52,
                            texture: "pub/coin.png"
                        },
                        compId: 7
                    }]
                }],
                loadList: ["treasure/bg1.png", "role/PlayerChar_Rigged_Prefab_00_Burglar_F.png", "pub/coin.png"],
                loadList3D: []
            }, e.BoxItemViewUI = t, i("ui.item.BoxItemViewUI", t);
            class n extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(n.uiView);
                }
            }
            n.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        visible: !0,
                        top: 0,
                        right: 0,
                        name: "bg",
                        left: 0,
                        bottom: 0,
                        bgColor: "#484848",
                        alpha: 1
                    },
                    compId: 3
                }, {
                    type: "Box",
                    props: {
                        var: "fullBox",
                        top: 150,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 4
                }, {
                    type: "Button",
                    props: {
                        y: 34,
                        x: 375,
                        visible: !1,
                        var: "continueBtn",
                        stateNum: 1,
                        skin: "forest/btn_continue.png",
                        sizeGrid: "35,39,36,36",
                        name: "continueBtn",
                        labelSize: 30,
                        labelColors: "#FFFFFF",
                        labelBold: !0,
                        centerX: 0,
                        bottom: 126,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 6,
                    child: [{
                        type: "Script",
                        props: {
                            y: 14,
                            x: 0,
                            playEvent: "mouseup",
                            runtime: "ui.ani.BtnScaleUpUI"
                        },
                        compId: 7
                    }, {
                        type: "Script",
                        props: {
                            y: 0,
                            x: 0,
                            playEvent: "mousedown",
                            runtime: "ui.ani.BtnScaleDownUI"
                        },
                        compId: 8
                    }]
                }],
                loadList: ["forest/btn_continue.png"],
                loadList3D: []
            }, e.ForestFullUI = n, i("ui.item.ForestFullUI", n);
            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(a.uiView);
                }
            }
            a.uiView = {
                type: "View",
                props: {
                    width: 208,
                    runtime: "views/item/DaySignItemView.ts",
                    height: 208
                },
                compId: 2,
                child: [{
                    type: "Box",
                    props: {
                        var: "containBox",
                        top: 0,
                        right: 0,
                        name: "boxBg",
                        left: 0,
                        bottom: 0
                    },
                    compId: 9,
                    child: [{
                        type: "Image",
                        props: {
                            var: "imageBg",
                            skin: "sign/img_sign_bg1.png",
                            name: "imageBg",
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 3
                    }, {
                        type: "Label",
                        props: {
                            width: 204,
                            var: "labDay",
                            valign: "middle",
                            top: 10,
                            text: "第一天",
                            name: "labDay",
                            height: 40,
                            fontSize: 28,
                            color: "#3b4482",
                            centerX: 0,
                            bold: !0,
                            anchorY: .5,
                            anchorX: .5,
                            align: "center"
                        },
                        compId: 4
                    }, {
                        type: "Label",
                        props: {
                            x: 104,
                            width: 204,
                            var: "labGold",
                            valign: "middle",
                            text: "X300",
                            stroke: 2,
                            name: "labGold",
                            height: 40,
                            fontSize: 40,
                            color: "#FFFFFF",
                            centerX: 0,
                            bottom: 10,
                            bold: !0,
                            anchorY: .5,
                            anchorX: .5,
                            align: "center"
                        },
                        compId: 5
                    }, {
                        type: "Animation",
                        props: {
                            y: 104,
                            x: 104,
                            var: "lightAni",
                            source: "ani/Light.ani",
                            scaleY: .3,
                            scaleX: .3
                        },
                        compId: 11
                    }, {
                        type: "Image",
                        props: {
                            width: 136,
                            var: "imageIcon",
                            skin: "sign/img_sign_icon.png",
                            name: "imageIcon",
                            height: 85,
                            centerY: 0,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 6
                    }, {
                        type: "Image",
                        props: {
                            y: 104,
                            x: 104,
                            var: "imageAlready",
                            skin: "sign/img_sign_ylq.png",
                            name: "imageAlready",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 8
                    }, {
                        type: "Image",
                        props: {
                            y: 7,
                            x: 7,
                            var: "imageBgHightlight",
                            skin: "sign/img_sign_bg3.png"
                        },
                        compId: 12
                    }]
                }],
                loadList: ["sign/img_sign_bg1.png", "ani/Light.ani", "sign/img_sign_icon.png", "sign/img_sign_ylq.png", "sign/img_sign_bg3.png"],
                loadList3D: []
            }, e.SignItemViewUI = a, i("ui.item.SignItemViewUI", a);
            class s extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(s.uiView);
                }
            }
            s.uiView = {
                type: "View",
                props: {
                    y: 0,
                    x: 0,
                    width: 190,
                    runtime: "views/item/SkinItem.ts",
                    height: 190
                },
                compId: 2,
                child: [{
                    type: "Button",
                    props: {
                        y: 0,
                        x: 0,
                        var: "imageBg",
                        top: 0,
                        stateNum: 1,
                        skin: "skin/img_skin_content.png",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 51,
                            x: 96,
                            width: 160,
                            var: "preverwImage",
                            skin: "role/PlayerCar_00.png",
                            height: 160,
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 14
                    }, {
                        type: "Image",
                        props: {
                            y: 104,
                            x: 149,
                            var: "imageHook",
                            skin: "skin/img_skin_hook.png",
                            right: 10,
                            name: "imageHook",
                            bottom: 10
                        },
                        compId: 13
                    }, {
                        type: "Image",
                        props: {
                            y: 104,
                            x: 149,
                            var: "imageLock",
                            skin: "skin/img_skin_lock.png",
                            right: 10,
                            name: "imageLock",
                            bottom: 10
                        },
                        compId: 12
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            var: "unknowImage",
                            skin: "skin/unknow.png"
                        },
                        compId: 16
                    }, {
                        type: "Image",
                        props: {
                            y: -5,
                            x: -6,
                            width: 202,
                            var: "itemHighlight",
                            skin: "skin/item_selected.png",
                            height: 200
                        },
                        compId: 15
                    }]
                }],
                loadList: ["skin/img_skin_content.png", "role/PlayerCar_00.png", "skin/img_skin_hook.png", "skin/img_skin_lock.png", "skin/unknow.png", "skin/item_selected.png"],
                loadList3D: []
            }, e.SkinItemUI = s, i("ui.item.SkinItemUI", s);
            class o extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(o.uiView);
                }
            }
            o.uiView = {
                type: "View",
                props: {
                    x: 5,
                    width: 750,
                    runtime: "views/item/SkinItemView.ts",
                    height: 700
                },
                compId: 2,
                child: [{
                    type: "List",
                    props: {
                        y: 0,
                        x: 53,
                        width: 633,
                        var: "list",
                        spaceY: 20,
                        spaceX: 20,
                        repeatY: 3,
                        repeatX: 3,
                        height: 669
                    },
                    compId: 33,
                    child: [{
                        type: "SkinItem",
                        props: {
                            y: 36,
                            x: 20,
                            runtime: "views/item/SkinItem.ts",
                            renderType: "render"
                        },
                        compId: 23
                    }]
                }],
                loadList: [],
                loadList3D: []
            }, e.SkinItemViewUI = o, i("ui.item.SkinItemViewUI", o);
        }(e.item || (e.item = {}));
    }(e || (e = {}));
    class a {}
    a.windowWidth = 0, a.windowHeight = 0, a.screenWidth = 0, a.screenHeight = 0, a.fetchingVideoAd = !1, a.registerTime = 0, a.accountTime = 0, a.isNewPlayer = !1, a.firstTimePlayer = !1, a.teachMode = !1, a.lastStartTime = 0, a.isOverDay = !1, a.severTime = 0, a.registerDayString = "", a.platformVersion = "0", a.canE = !1, a.chid = null, a.chidState = !1, a.channel = null,
        function(e) {
            e[e.Web = 0] = "Web", e[e.Wechat = 1] = "Wechat", e[e.Oppo = 2] = "Oppo", e[e.Vivo = 3] = "Vivo", e[e.Huawei = 4] = "Huawei", e[e.Xiaomi = 5] = "Xiaomi", e[e.QQ = 7] = "QQ", e[e.TouTiao = 9] = "TouTiao", e[e.Baidu = 10] = "Baidu", e[e.Qutoutiao = 11] = "Qutoutiao";
        }(t || (t = {})),
        function(e) {
            e[e.Normal = 1] = "Normal", e[e.Check = 2] = "Check", e[e.Fission = 3] = "Fission";
        }(n || (n = {}));
    var s, o = [{
            imgUrl: "",
            shareContent: ""
        }],
        r = {
            sRecommend: !0,
            acv: "",
            ttacv: "",
            qqacv: "",
            vsAllCount: 60,
            vsFailShareCount: 60,
            wTuiInfo: [],
            oppoTuiInfo: [],
            qqADInfo: {
                bannerCount: 3,
                bannerTime: 90,
                eggInfo: {
                    level: [],
                    delay: 300,
                    gold: 500,
                    eDelay: 1500,
                    aCount: 1e3
                },
                eInfo: {
                    onLine: 180,
                    dayGame: 3
                },
                showListJump: !0
            },
            oppoADInfo: {
                bannerCount: 3,
                bannerTime: 90,
                eggInfo: {
                    aCount: 9999999,
                    level: 9999999,
                    delay: 300,
                    eDelay: 1500
                },
                eInfo: {
                    onLine: 180,
                    dayGame: 3
                },
                showListJump: !0
            },
            tIosRecommend: !0,
            eInfo: {
                onLine: 180,
                dayGame: 3
            },
            ttTuiInfo: [],
            timeContinue: 3e3,
            trainRandom: 5,
            showCheckBox: 3,
            bTimer: 90,
            bCount: 2,
            eggInfo: {
                aCount: 1,
                level: 2,
                gold: 500,
                delay: 300,
                eDelay: 1500
            },
            canE: !1,
            canEB: !1,
            mpcv: "110,111",
            gameB: 1,
            showTry: 3,
            martriB: !0,
            showOff: !0
        },
        h = {
            IgnoreShare: !1,
            Platform: t.Wechat,
            packageName: "com.lexun.looter",
            ClientVer: "1.2.6",
            Apiversion: "1",
            SupportOpenDomain: !0,
            State: n.Normal,
            showRecommend: !1,
            ShareTickTimer: 3e3,
            host: "",
            Dev: !1,
            ShareInfoList: o,
            isLimitCity: !1,
            isLimitCityB: !1,
            appId: "wx7f728fc771df650c",
            closeLD: !1,
            isF: !1,
            vList: [],
            UseRemoteRes: !1,
            resHost: "",
            vsInfo: {
                type: 0,
                snum: 0,
                vnum: 0
            },
            vGameInfo: Object.assign({}, r),
            recoverData: !0,
            vAdCount: 0,
            isAnonymous: !1,
            aiCount: 27,
            videoTopics: ["小偷往哪跑"],
            hasAD: !0,
            hasLogin: !1,
            useZip: !0,
            tResVer: 7,
            gotCfg: !1
        },
        l = (t.TouTiao, n.Normal, Object.assign({}, r), t.QQ, n.Normal, Object.assign({}, r), t.Oppo, n.Normal, Object.assign({}, r), t.Web, n.Normal, Object.assign({}, r), t.Qutoutiao, n.Normal, Object.assign({}, r), h);
    class c extends Laya.EventDispatcher {
        static get Instance() {
            return null === c._instance && (c._instance = new c()), c._instance;
        }
    }
    c._instance = null,
        function(e) {
            e.ResLoadProgress = "ResLoadProgress", e.StartLoadFinish = "StartLoadFinish", e.GetFocus = "GetFocus", e.LostFocus = "LostFocus", e.ShareSuccess = "ShareSuccess", e.ShowAdCompleted = "ShowAdCompleted", e.CloseShowAd = "CloseShowAd", e.FetchVideoFail = "FetchVideoFail", e.ShareFail = "ShareFail", e.userLoginFinish = "userLoginFinish", e.SubpackageLoadProgress = "SubpackageLoadProgress", e.ShowBannerCompleted = "ShowBannerCompleted", e.FinishVideoAd = "FinishVideoAd", e.ShowShareVideoCompleted = "ShowShareVideoCompleted", e.CloseShowShareViedo = "CloseShowShareViedo", e.BannerPosChange = "BannerPosChange", e.DestoryUserInfoButton = "DestoryUserInfoButton", e.OverDayEvent = "OverDayEvent", e.OpenView = "OpenView", e.CloseView = "CloseView", e.PlayerGoodsUpdate = "PlayerGoodsUpdate", e.UserInfoChange = "UserInfoChange", e.UpdateRecordBtn = "UpdateRecordBtn", e.GameProgressChange = "GameProgressChange", e.GameKeyChange = "GameKeyChange", e.PlayerCatched = "PlayerCatched", e.prepareLevelFinish = "prepareLevelFinish", e.ShowView = "showView", e.HideView = "hideView", e.GotCfg = "GotCfg", e.gameStart = "gameStart", e.moveInputChange = "moveInputChange", e.moveInputChangeStart = "moveInputChangeStart", e.moveInputChangeEnd = "moveInputChangeEnd", e.GameScoreChange = "GameScoreChange", e.GameEnd = "GameEnd", e.SkinShowChange = "SkinShowChange", e.SkinChange = "SkinChange", e.skinItemClick = "skinItemClick", e.checkSkinChange = "checkSkinChange", e.TBoxItem = "TBoxItem";
        }(s || (s = {}));
    class d {
        static isSameDay(e, t) {
            if (t - e >= 864e5) return !1;
            if (e - t >= 864e5) return !1; {
                let n = new Date();
                n.setTime(e);
                let i = new Date();
                if (i.setTime(t), n.getDate() === i.getDate()) return !0;
            }
            return !1;
        }
        static isToday(e) {
            return this.isSameDay(e, Date.now());
        }
        static timestampToDay(e) {
            var t = new Date(e);
            return t.getFullYear() + "-" + ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-") + (t.getDate() + " ");
        }
    }
    class p {
        static setBoolValue(e, t) {
            e && Laya.LocalStorage.setItem(e, t ? "1" : "0");
        }
        static getBoolValue(e) {
            if (e) {
                let t = Laya.LocalStorage.getItem(e);
                if (null !== t) return "1" === t;
            }
            return !1;
        }
        static setNumberValue(e, t) {
            e && Laya.LocalStorage.setItem(e, t + "");
        }
        static getNumberValue(e) {
            if (e) {
                let t = Laya.LocalStorage.getItem(e);
                if (null !== t) return parseFloat(t) || 0;
            }
            return 0;
        }
        static setStringValue(e, t) {
            e && Laya.LocalStorage.setItem(e, t);
        }
        static getStringValue(e) {
            if (e) {
                return Laya.LocalStorage.getItem(e) || "";
            }
            return "";
        }
        static setDataValue(e, t) {
            e && Laya.LocalStorage.setJSON(e, t);
        }
        static getDataValue(e) {
            if (e) {
                return Laya.LocalStorage.getJSON(e) || null;
            }
            return null;
        }
    }
    var u, g, m, f, y, I, w, S, v, L, C, b = {
            showAD: "showAD",
            doShare: "doShare",
            watchADComplete: "watchADComplete",
            watchADExit: "watchADExit",
            showBanner: "showBanner",
            loadBanner: "loadBanner",
            loadBannerError: "loadBannerError",
            loadVideoError: "loadVideoError",
            Login: "Login",
            newLogin: "newLogin",
            LoginFail: "LoginFail",
            videoSuccess: "videoSuccess",
            gameStart: "gameStart",
            loadRes: "loadRes",
            showStart: "showStart",
            MyRecommendJump: "自有产品导出",
            BattleInfo: "battleInfo",
            BattleEnd: "BattleEnd",
            BannerJump: "BannerJump",
            showEgg: "showEgg",
            onMove: "onMove",
            hitedEgg: "hitedEgg"
        },
        k = {
            Bgm: "music/bgm.mp3",
            Button: "music/click.mp3",
            Fail: "music/game_over.mp3",
            Gold: "music/coin.mp3",
            Success: "music/win.mp3",
            coin: "music/coin.mp3",
            eat1: "music/eat1.mp3",
            eat2: "music/eat2.mp3",
            warn: "music/warn.mp3",
            win: "music/win.mp3",
            car: "music/car.mp3",
            Progress: "music/progress.mp3",
            LevelUpdate: "music/upgrade.mp3",
            LevelUp: "music/LevelUp.mp3",
            egg: "music/egg.mp3"
        };
    class x {
        static getGameConfig() {
            let e = x.RES_GAME_DATA;
            return l.UseRemoteRes && (e = "/" + e), [{
                url: e,
                type: Laya.Loader.TEXT
            }];
        }
        static getGameRes() {
            let e = [{
                url: x.RES_COMMON_CONFIG,
                type: Laya.Loader.ATLAS
            }, {
                url: x.RES_SETT_CONFIG,
                type: Laya.Loader.ATLAS
            }, {
                url: x.RES_GAME,
                type: Laya.Loader.ATLAS
            }, {
                url: x.RES_TREASURE,
                type: Laya.Loader.ATLAS
            }, {
                url: x.RES_SIGN,
                type: Laya.Loader.ATLAS
            }, {
                url: x.RES_SKIN,
                type: Laya.Loader.ATLAS
            }, {
                url: x.RES_ROLE_CONFIG,
                type: Laya.Loader.ATLAS
            }, {
                url: "pub/light.png",
                type: Laya.Loader.IMAGE
            }];
            return l.Platform !== t.Web && l.Platform !== t.Qutoutiao || (e = e.concat(x.getSoundRes())), e;
        }
        static getSoundRes() {
            return [{
                url: k.Bgm,
                type: Laya.Loader.SOUND
            }, {
                url: k.Button,
                type: Laya.Loader.SOUND
            }, {
                url: k.Fail,
                type: Laya.Loader.SOUND
            }, {
                url: k.Gold,
                type: Laya.Loader.SOUND
            }, {
                url: k.Success,
                type: Laya.Loader.SOUND
            }, {
                url: k.coin,
                type: Laya.Loader.SOUND
            }, {
                url: k.eat1,
                type: Laya.Loader.SOUND
            }, {
                url: k.eat2,
                type: Laya.Loader.SOUND
            }, {
                url: k.warn,
                type: Laya.Loader.SOUND
            }, {
                url: k.win,
                type: Laya.Loader.SOUND
            }, {
                url: k.car,
                type: Laya.Loader.SOUND
            }];
        }
    }
    x.RES_COMMON_CONFIG = "res/atlas/pub.atlas", x.RES_ROLE_CONFIG = "res/atlas/role.atlas", x.RES_SETT_CONFIG = "res/atlas/settle.atlas", x.RES_SKIN = "res/atlas/skin.atlas", x.RES_SIGN = "res/atlas/sign.atlas", x.RES_GAME = "res/atlas/game.atlas", x.RES_START = "res/atlas/start.atlas", x.RES_GAME_DATA = "res/data/gameData.json", x.RES_TREASURE = "res/atlas/treasure.atlas";
    class A {
        static getRandom(e, t) {
            if (e == t) return e;
            var n = Math.random();
            return Math.floor(n * t + (1 - n) * e + n);
        }
        static degToRad(e) {
            return e * Math.PI / 180;
        }
        static radToDeg(e) {
            return 180 * e / Math.PI;
        }
        static clamp(e, t, n) {
            return e < t ? t : e > n ? n : e;
        }
        static nextNumber(e, t) {
            if (e == t) return e;
            var n = Math.random();
            return Math.floor(n * t + (1 - n) * e + n);
        }
        static getInt(e) {
            return Math.floor(e);
        }
        static clearDictionary(e) {
            for (var t in e) delete e[t];
        }
        static getCos(e) {
            return e < 0 && (e += 360), e = Math.floor(e % 360), this.cosVals[e];
        }
        static getSin(e) {
            return e < 0 && (e += 360), e = Math.floor(e % 360), this.sinVals[e];
        }
        static initSinCosVal() {
            this.sinVals = {}, this.cosVals = {};
            for (var e = 0; e < 360; e++) {
                var t = e * Math.PI / 180;
                this.cosVals[e] = Math.cos(t), this.sinVals[e] = Math.sin(t);
            }
        }
        static distancePoint(e, t) {
            return this.distance(e.x, e.y, t.x, t.y);
        }
        static distance(e, t, n, i) {
            return Math.sqrt((e - n) * (e - n) + (t - i) * (t - i));
        }
        static ptInPolygon(e, t, n) {
            var i, a, s, o, r, h = 0;
            r = n.length;
            for (var l = 0; l < r; l += 2) {
                if (i = n[l], a = n[l + 1], s = n[(l + 2) % r], a != (o = n[(l + 3) % r]))
                    if (!(t < Math.min(a, o)))
                        if (!(t >= Math.max(a, o)))(t - a) * (s - i) / (o - a) + i > e && h++;
            }
            return h % 2 == 1;
        }
    }
    A.cosVals = {}, A.sinVals = {}, A.rad1Angle = Math.PI / 180, A.angle1rad = 180 / Math.PI;
    class _ {
        constructor() {
            this.skinCfg = null, this.videoCfgData = null, this.bannerCfgData = null, this.signCfgData = {}, this.randomBannerCfgData = null, this.signRed = !0, this.randomBgIndex = 1, this.signDaynfo = "signDaynfo", this.splineCfg = {}, this.loadData(), this.signRed = !this.todayIsSigned(), Laya.timer.loop(1e4, this, this.checkOverDay);
        }
        static get Instance() {
            return null === _._instance && (_._instance = new _()), _._instance;
        }
        loadData() {
            let e = x.RES_GAME_DATA;
            let n = JSON.parse(Laya.loader.getRes(e));
            if (n) {
                this.signCfgData = n.signCfg;
                this.skinCfg = n.skinCfg, this.splineCfg = n.levelData;
            }
            Laya.Loader.clearRes(e), this.init();
        }
        init() {
            A.initSinCosVal();
        }
        getVideoShareCfg(e) {
            if (null == this.videoCfgData) return null;
            for (var t = 0; t < this.videoCfgData.length; t++)
                if (this.videoCfgData[t].pos == e) return this.videoCfgData[t];
            return null;
        }
        getBannerCfg(e) {
            if (null == this.bannerCfgData) return null;
            for (var t = 0; t < this.bannerCfgData.length; t++)
                if (this.bannerCfgData[t].pos == e) return this.bannerCfgData[t];
            return null;
        }
        saveAutoShowSign() {
            let e = p.getDataValue(this.signDaynfo) || {},
                t = new Date().getDate();
            e.showDay = t, p.setDataValue(this.signDaynfo, e);
        }
        doSignAction() {
            let e = p.getDataValue(this.signDaynfo);
            if (e) {
                let t = new Date(),
                    n = e.signDay + 1;
                e.signDay = n;
                let i = t.getTime();
                e.ts = i;
            }
            this.signRed = !1, p.setDataValue(this.signDaynfo, e);
        }
        getSignDayInfo() {
            let e = 0,
                t = 0,
                n = p.getDataValue(this.signDaynfo),
                i = !1,
                a = new Date(),
                s = a.getDate(),
                o = 0,
                r = 0;
            if (n) {
                if (t = n.showDay, r = n.ts, i = !0, n.ts > 0) {
                    let t = new Date();
                    if (t.setTime(n.ts), a.getTime() < n.ts + 864e5 && s == t.getDate()) o = 1, e = n.signDay, i = !1;
                    else {
                        (t = new Date()).setTime(n.ts + 864e5), s == t.getDate() && (e = n.signDay, i = !1);
                    }
                }
            } else i = !0;
            i && ((n = {}).signDay = e, n.showDay = t, n.ts = r, p.setDataValue(this.signDaynfo, n));
            let h = {
                signDay: e,
                signed: o,
                show: s == t ? 1 : 0
            };
            return this.signRed = !o, h;
        }
        processData(e) {
            let t = this.uncompile(e);
            return JSON.parse(t);
        }
        uncompile(e) {
            for (var t = String.fromCharCode(e.charCodeAt(0) - 1), n = 1; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) - 1);
            return t;
        }
        checkOverDay() {
            B.checkOverDay() && c.Instance.event(s.OverDayEvent);
        }
        getRandomBannerCfg() {
            let e = this.randomBannerCfgData.length,
                t = Math.floor(Math.random() * (e - 1));
            if (t >= 0 && t < e) {
                let e = this.randomBannerCfgData[t];
                if (e && e.adunit && e.adunit.length) return this.randomBannerCfgData.splice(t, 1), this.randomBannerCfgData.push(e), e;
            }
            return null;
        }
        isOverSeverTime(e = 7200) {
            if (a.severTime > 0) {
                let t = new Date().getTime();
                if (Math.abs(t - a.severTime) < 1e3 * e) return !1;
            }
            return !0;
        }
        todayIsSigned() {
            return this.getSignDayInfo().signed > 0;
        }
    }
    _.isLarger = !1, _._instance = null,
        function(e) {
            e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
        }(u || (u = {})),
        function(e) {
            e[e.Unknow = -1] = "Unknow", e[e.DefaultShare = 0] = "DefaultShare", e[e.SettlementAD = 2] = "SettlementAD", e[e.SkinAD = 3] = "SkinAD", e[e.DaySign = 8] = "DaySign", e[e.FreeTryAD = 4] = "FreeTryAD", e[e.OfflineAD = 9] = "OfflineAD", e[e.TreasureAD = 10] = "TreasureAD", e[e.AddStart = 11] = "AddStart", e[e.Egg = 12] = "Egg";
        }(g || (g = {})),
        function(e) {
            e[e.vSettelment = 4] = "vSettelment", e[e.vRelive = 5] = "vRelive";
        }(m || (m = {})),
        function(e) {
            e[e.Default = 0] = "Default", e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
        }(f || (f = {})),
        function(e) {
            e[e.Default = 0] = "Default", e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
        }(y || (y = {}));
    class D {
        constructor() {
            this._lastCallTime = 0, this.videoMapping = {}, this.shareMapping = {}, this.clickShareCnts = {}, this.canFetchVideo = !0, this._isShowingBanner = !1, this._inited = !1, this._callShare = !1, this._callShareReward = !1, this._dailyShareMapping = {}, this._vsCount = 0, this._videoCount = 0, this._vsFailShareCount = 0, this._lastCallTime = 0, this.videoMapping = {}, this.shareMapping = {}, this.clickShareCnts = {}, this.canFetchVideo = !0, this._isShowingBanner = !1, this._dailyShareMapping = {}, this._inited = !1, this._callShare = !1, this._callShareReward = !1, this.registerEvent(), this.readVideoCache();
        }
        static get Instance() {
            return null == D._instance && (D._instance = new D()), D._instance;
        }
        registerEvent() {
            c.Instance.on(s.FetchVideoFail, this, this.onFetchVideoFail), c.Instance.on(s.GetFocus, this, this.onGameFocus), c.Instance.on(s.OverDayEvent, this, this.resetByOverDay), c.Instance.on(s.FinishVideoAd, this, this.onFinishVideoAd);
        }
        unregisterEvent() {
            c.Instance.off(s.FetchVideoFail, this, this.onFetchVideoFail), c.Instance.off(s.GetFocus, this, this.onGameFocus), c.Instance.off(s.FinishVideoAd, this, this.onFinishVideoAd);
        }
        canShowVideo() {
            return !0;
        }
        wxCheck() {
            return !l.Dev && l.State == n.Check;
        }
        aCheck() {
            return !!this.wxCheck() || (j.IsQQ() ? l.vGameInfo.qqacv === l.ClientVer : j.IsTouTiao() ? l.vGameInfo.ttacv === l.ClientVer : !l.Dev && l.ClientVer === l.vGameInfo.acv);
        }
        getVideoCnt(e) {
            var t = this.videoMapping[e];
            return null == t ? 0 : t;
        }
        getShareClickCnt(e) {
            var t = this.clickShareCnts[e];
            return null == t ? 0 : t;
        }
        addShareClickCnt(e) {
            var t = this.clickShareCnts[e];
            null == t ? t = 1 : t++, this.clickShareCnts[e] = t;
        }
        showADBanner(e, t = -1) {
            if (!l.hasAD) return;
            if (!this.shouldShowForBanner(e)) return;
            var n = _.Instance.getBannerCfg(e);
            if (null == n) return;
            let i = n.adunit;
            j.IsTouTiao() ? i = n.tadunit : j.IsQQ() && (i = n.qadunit); {
                let e = _.Instance.getRandomBannerCfg();
                null !== e && e.adunit && (i = e.adunit, j.IsTouTiao() && e.tadunit ? i = e.tadunit : j.IsQQ() && e.qadunit && (i = e.qadunit));
            }
            this._isShowingBanner = !0;
            let a = n.hAlign,
                s = n.vAlign,
                o = n.xOffset;
            l.isLimitCityB && (t = -1);
            let r = n.w;
            this.aCheck() && (r = 300), j.Instance.showBanner(e, i, a, s, r, o, n.yOffset, t);
        }
        hideBanner(e = 0) {
            this._isShowingBanner = !1, j.Instance.hideBanner(e);
        }
        isShowingBanner() {
            return this._isShowingBanner;
        }
        restoreBanner(e, t = 0) {
            this.showADBanner(e, t);
        }
        showVideeoOrShare(e, t) {
            if (this._lastCallTime > 0 && Date.now() - this._lastCallTime < 300) return;
            if (a.fetchingVideoAd && Date.now() - this._lastCallTime < 1e4) He.Instance.showTips("正在拉取视频", 2e3);
            else {
                this._callShareReward = !1, this._callShare = !1, this._lastCallTime = Date.now();
                var n = _.Instance.getVideoShareCfg(e);
                null != n && (n.type == u.Video ? this.handleVideo(n) : this.handleShare(n, !0));
            }
        }
        isForceVideo(e) {
            return !!j.IsOppo() || (!!j.IsQutoutiao() || e !== g.DaySign);
        }
        isForceVideoWithError(e) {
            return !!this.wxCheck() || (!!j.IsQutoutiao() || void 0);
        }
        checkShowShareAfterVideoFail(e) {
            let t = !1;
            if (this._vsFailShareCount + this._videoCount >= l.vGameInfo.vsAllCount && (t = !0), t || this._vsFailShareCount >= l.vGameInfo.vsFailShareCount) return !1;
            this._callShareReward = !1, this._callShare = !1, this._lastCallTime = Date.now();
            var n = Date.now();
            let i = B.getShareInfoByCfg(null);
            return this._callShareReward = !0, this._callShare = !0, this._callShareCfg = {
                pos: e,
                fromVideoFail: !0
            }, j.Instance.shareM(e, !1, 1, i.imgUrl, i.shareContent, n, ""), !0;
        }
        onFetchVideoFail(e) {
            j.IsOppo() ? He.Instance.showTips("获取视频失败") : (this.canFetchVideo = !1, this.saveVideoCache(), !this.isForceVideoWithError(e) && this.checkShowShareAfterVideoFail(e) || He.Instance.showTips("获取视频失败"));
        }
        saveShareCache(e, t) {
            this._dailyShareMapping[e] = {
                shared: !0,
                shareTime: t
            }, Laya.LocalStorage.setJSON("dailySharedMapping", this._dailyShareMapping);
        }
        saveVideoCache() {
            Laya.LocalStorage.setItem("canFetchVideo", (this.canFetchVideo ? 1 : 0).toString()), Laya.LocalStorage.setItem("vsCount", this._vsCount.toString()), Laya.LocalStorage.setItem("vsFailShareCount", this._vsFailShareCount.toString()), Laya.LocalStorage.setItem("videoCount", this._videoCount.toString());
        }
        readVideoCache() {
            var e = new Date(),
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                s = Laya.LocalStorage.getJSON("dailySharedMapping");
            for (var o in s) {
                var r = s[o],
                    h = r.shared,
                    l = r.shareTime,
                    c = new Date(l),
                    d = c.getFullYear(),
                    u = c.getMonth(),
                    g = c.getDate();
                (t > d || t == d && (n > u || n == u && i > g)) && (h = !1, l = null), this._dailyShareMapping[o] = {
                    shared: h,
                    shareTime: l
                };
            }
            s = Laya.LocalStorage.getItem("canFetchVideo") || 0, this.canFetchVideo = 1 == (parseInt(s) || 0), this.canFetchVideo = !0, this._vsCount = p.getNumberValue("vsCount") || 0, this._vsFailShareCount = p.getNumberValue("vsFailShareCount") || 0, this._videoCount = p.getNumberValue("videoCount") || 0, a.isOverDay && this.resetByOverDay();
        }
        handleVideo(e) {
            if (!l.hasAD) return this.wxCheck() ? (He.Instance.showTips("广告功能暂未开通"), !0) : void(this.isForceVideo(e.pos) ? He.Instance.showTips("广告功能暂未开通") : this.handleShare(e, !1));
            if (this.canShowVideo() || this.isForceVideo(e.pos)) {
                if (!this.canShowVideoADByCount()) {
                    if (!this.wxCheck() && this.checkShowShareAfterVideoFail(e.pos)) return;
                    return void He.Instance.showTips("视频奖励次数今日已达上限");
                }
                let t = e.adunit;
                j.IsTouTiao() ? t = e.tadunit : j.IsQQ() && (t = e.qadunit), j.Instance.showVideo(e.pos, t, e.toast);
            } else this.handleShare(e, !1);
        }
        handleShare(e, t) {
            if (j.IsQutoutiao()) return;
            this.hasDailyShared(e.pos) || this.saveShareCache(e.pos, new Date().toString()), j.Instance.report(b.doShare, {
                adName: e.name || ""
            });
            var n = Date.now();
            let i = B.getShareInfoByCfg(e),
                a = i.shareContent;
            this._callShareReward = t, this._callShare = !0, this._callShareCfg = {
                pos: e.pos,
                fromVideoFail: !1
            }, j.Instance.shareM(e.pos, 1 == e.shot, e.type, i.imgUrl, a, n, e.name);
        }
        hasDailyShared(e) {
            var t = this._dailyShareMapping[e];
            return null != t && t.shared;
        }
        onShowAdCompleted(e, t = !1) {
            var n = this.videoMapping[e];
            if (null == n ? n = 1 : n++, this.videoMapping[e] = n, t) return this._vsFailShareCount++, void this.saveVideoCache();
            this.canAddVSCount(e) && (this._vsCount++, p.setNumberValue("vsCount", this._vsCount));
        }
        onGameFocus() {
            this._callShare = !1;
        }
        getVSShowType() {
            if (!l.vsInfo) return y.Default;
            let e = l.vsInfo.type,
                t = l.vsInfo.snum,
                n = l.vsInfo.vnum,
                i = t + n;
            if (e === f.Default || 0 === t && 0 === n) return y.Default;
            if (0 === t && n > 0) return y.Video;
            if (t > 0 && 0 === n) return y.Share;
            if (e === f.Share) {
                return this._vsCount % i < t ? y.Share : y.Video;
            }
            if (e === f.Video) {
                return this._vsCount % i < n ? y.Video : y.Share;
            }
            return y.Default;
        }
        static getShowType(e) {
            if (D.Instance.wxCheck()) return 2;
            if (j.IsOppo()) return 2;
            let t = D.Instance.getVSShowType();
            if (t !== y.Default) return t === y.Video && l.vsInfo.snum > 0 && !D.Instance.canShowVideoADByCount() ? y.Share : t; {
                let t = l.vList;
                if (t.length)
                    for (let n = 0; n < t.length; n++) {
                        let i = t[n];
                        if (i && i.pos == e) return i.type || 0;
                    }
            }
            return 0;
        }
        shouldShowForBanner(e) {
            if (this.aCheck()) {
                if (e === Ge.DaySign.id) return !1;
                if (e === Ge.TreasureBox.id) return !1;
            }
            return e === Ge.DaySign.id ? B.getDeviceRatio() > 2 : e !== Ge.TreasureBox.id || B.getDeviceRatio() > 2;
        }
        canShowVideoADByCount() {
            return !!j.IsOppo() || D.Instance._videoCount < l.vAdCount;
        }
        onFinishVideoAd(e) {
            this._videoCount++, this.saveVideoCache();
        }
        updateViewWithPos(e, t) {
            let n = e.getChildByName("icon"),
                i = D.getShowType(t);
            n.skin = 2 === i ? "common/ic_vedio.png" : "common/ic_share.png";
        }
        static canE() {
            return !!j.IsWeChat() && (!D.Instance.wxCheck() && (a.canE && l.vGameInfo.canE));
        }
        resetByOverDay() {
            this.canFetchVideo = !0, this._vsCount = 0, this._vsFailShareCount = 0, this._videoCount = 0, this.saveVideoCache();
        }
        canAddVSCount(e) {
            return e === g.SettlementAD;
        }
    }
    D._instance = null;
    class B {
        static onMobile() {
            return Laya.Browser.onIOS || Laya.Browser.onAndroid || Laya.Browser.onMobile;
        }
        static finishVideo(e) {
            c.Instance.event(s.ShowAdCompleted, e), c.Instance.event(s.CloseShowAd, e);
        }
        static getShareInfoByCfg(e) {
            if (e && e.imgUrl && e.imgUrl.length && e.shareContent && e.shareContent.length) return {
                imgUrl: e.imgUrl,
                shareContent: e.shareContent
            };
            let t = l.ShareInfoList.length;
            if (t > 0) {
                let e = Math.floor(Math.random() * t);
                if (j.IsTouTiao() && (e = 0), e < t) return l.ShareInfoList[e];
            }
            return {
                imgUrl: "",
                shareContent: ""
            };
        }
        static checkOverDay() {
            let e = parseInt(Laya.LocalStorage.getItem("curPlayDay") || "0"),
                t = Date.now(),
                n = !d.isSameDay(t, e);
            return n && Laya.LocalStorage.setItem("curPlayDay", t.toString()), n;
        }
        static getDeviceRatio() {
            return Laya.stage.height / Laya.stage.width;
        }
        static getBannerOffset() {
            return 20;
        }
        static getNormalBannerOffset() {
            return 40 / a.windowWidth * Laya.stage.width;
        }
        static bannerMoveY(e = 0) {
            return B.getNormalBannerOffset() + e;
        }
        static finishShare(e, t = !1, n = !1) {
            D.Instance.onShowAdCompleted(e, n), c.Instance.event(s.ShowAdCompleted, e), c.Instance.event(s.CloseShowAd, e);
        }
        static finishShareVideo(e) {
            c.Instance.event(s.ShowShareVideoCompleted, e), c.Instance.event(s.CloseShowShareViedo, e);
        }
        static clearDictionary(e) {
            for (var t in e) delete e[t];
        }
        static uuid() {
            var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                n = [];
            for (e = 0; e < 32; e++) n[e] = t[0 | 16 * Math.random()];
            return n.join("");
        }
    }
    class T {
        constructor() {
            this.showBannerPos = 0;
        }
        showBanner(e, t, n, i, a, s = 0, o = 0, r = 0) {}
        hideBanner(e) {}
        showVideo(e, t, n) {
            B.finishVideo(e);
        }
        shareM(e, t, n, i, a, s, o) {
            B.finishVideo(e);
        }
        postToOpenDataMessage(e, t) {}
        report(e, t) {}
        sdkLogin(e, t) {
            var n = $.Instance;
            n.user.resumePlayerInfoDefault(), n.user.loadCacheData(), n.user.nickName = "玩家10001", n.readDataInfo(null), $.Instance.logined = !0, c.Instance.event(s.userLoginFinish, {
                logined: !0
            });
        }
        isLowDevice() {
            return !1;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {}
        shareVideo(e) {
            B.finishShare(e);
        }
        hasOpenAD() {
            return !0;
        }
        showInterstitialAd(e, t, n, i) {}
        showModal(e) {
            if ("undefined" != typeof qg && qg.showModal) qg.showModal(e);
            else if ("undefined" != typeof wx && wx.showModal) wx.showModal(e);
            else if (e) {
                let t = [],
                    n = e => {};
                if (e.success && (n = e.success), e.showCancel) {
                    let i = {
                        title: e.cancelText || "取消",
                        callback: () => {
                            n({
                                cancel: !0
                            });
                        }
                    };
                    t.push(i);
                }
                let i = {
                    title: e.confirmText || "确定",
                    callback: () => {
                        n({
                            confirm: !0
                        });
                    }
                };
                t.push(i), He.Instance.showModal({
                    title: e.title || "提示",
                    content: e.content || "",
                    btnArr: t
                });
            }
        }
        setLoadingProgress(e) {
            j.IsOppo() && "undefined" != typeof qg && (e >= 100 ? qg.loadingComplete && qg.loadingComplete({
                complete: function(e) {}
            }) : qg.setLoadingProgress && qg.setLoadingProgress({
                progress: e
            }));
        }
    }
    class V {
        constructor() {
            this.curBgmName = null, this.canPlay = !0, this.init(), c.Instance.on(s.GetFocus, this, this.onGetFocus), c.Instance.on(s.LostFocus, this, this.onLostFocus), this.curBgmName = null;
        }
        static get Instance() {
            return null == V._instance && (V._instance = new V()), V._instance;
        }
        init() {
            Laya.SoundManager.autoStopMusic = !1;
            var e = Laya.LocalStorage.getItem("musicVolume"),
                t = 1;
            null !== e && "" !== e && (t = parseFloat(e + "")), this.setMusicVolume(t), this.setMusicMute(0 == t);
            var n = Laya.LocalStorage.getItem("soundVolume"),
                i = 1;
            null !== n && "" !== n && (i = parseFloat(n)), this.setSoundVolume(i), this.setSoundMute(0 == i);
        }
        onLostFocus() {
            this.stopAll();
        }
        onGetFocus() {
            this.startAll();
        }
        startAll() {
            null != this.curBgmName && setTimeout(() => {
                null != this.curBgmName && Laya.SoundManager.playMusic(this.curBgmName);
            }, 1e3);
        }
        playBgm() {
            this.curBgmName = k.Bgm, this.playMusic(k.Bgm);
        }
        playBattleBgm() {}
        stopSound(e) {
            Laya.SoundManager.stopSound(e);
        }
        stopMusic() {
            Laya.timer.clear(this, this.playMusic2), Laya.SoundManager.stopMusic();
        }
        playUIClick() {
            this.playSound(k.Button);
        }
        playMusic(e) {
            this.canPlay && (this.stopMusic(), Laya.timer.once(1e3, this, this.playMusic2, [e]));
        }
        playMusic2(e) {
            Laya.SoundManager.playMusic(e);
        }
        playSound(e, t = 1, n) {
            Laya.SoundManager.soundMuted || this.canPlay && Laya.SoundManager.playSound(e, t, n);
        }
        playGameSound(e, t = 1, n) {
            if (!e || 0 === e.length) return;
            if (Laya.SoundManager.soundMuted) return;
            let i = `music/${e}`;
            Laya.SoundManager.playSound(i, t, n);
        }
        setMusicMute(e) {
            Laya.SoundManager.musicMuted = e;
        }
        isMusicMuted() {
            return Laya.SoundManager.musicMuted;
        }
        setMusicVolume(e) {
            Laya.SoundManager.setMusicVolume(e), Laya.LocalStorage.setItem("musicVolume", e);
        }
        getMusicVolume() {
            return Laya.SoundManager.musicVolume;
        }
        setSoundMute(e) {
            Laya.SoundManager.soundMuted = e;
        }
        isSoundMuted() {
            return Laya.SoundManager.soundMuted;
        }
        setSoundVolume(e) {
            Laya.SoundManager.setSoundVolume(e), Laya.LocalStorage.setItem("soundVolume", e);
        }
        getSoundVolume() {
            return Laya.SoundManager.soundVolume;
        }
        stopAll() {
            Laya.timer.clear(this, this.playMusic2), Laya.SoundManager.stopAll();
        }
        stopAllSound() {
            Laya.SoundManager.stopAllSound();
        }
    }! function(e) {
        e.showFriendRank = "showFriendRank", e.hideFriendRank = "hideFriendRank", e.showFriendRankNextPage = "showFriendRankNextPage", e.showFrientRnakPrevPage = "showFrientRnakPrevPage", e.updateGradeList = "updateGradeList", e.updataScoreInfo = "updataScoreInfo";
    }(I || (I = {}));
    class P {
        constructor() {
            this.game_name = "小偷往哪跑", this.hasStarted = !1;
        }
        static get Instance() {
            return null === P._instance && (P._instance = new P()), P._instance;
        }
        loadComplete() {
            j.IsQutoutiao() && "undefined" != typeof qttGame && qttGame.loadComplete && qttGame.loadComplete({
                open_id: $.Instance.getUUID(),
                app_id: l.appId,
                game_name: this.game_name
            });
        }
        loadingFinished() {
            j.IsQutoutiao() && "undefined" != typeof qttGame && qttGame.loadComplete && qttGame.loadingFinished({
                open_id: $.Instance.getUUID(),
                app_id: l.appId,
                game_name: this.game_name
            });
        }
        startPlayGame() {
            if (j.IsQutoutiao()) {
                if (this.hasStarted) return;
                "undefined" != typeof qttGame && qttGame.startPlayGame && (this.hasStarted = !0, qttGame.startPlayGame({
                    open_id: $.Instance.getUUID()
                }));
            }
        }
    }
    P._instance = null;
    class E {
        constructor() {
            this.loadingRes = !1, this.loaded = !1, this.loadResCallback = null, this.threeDResDir = "", this.reset();
        }
        static get Instance() {
            return null == E._instance && (E._instance = new E()), E._instance;
        }
        reset() {
            if (this.loadingRes = !1, this.loaded = !1, "undefined" != typeof wx && l.useZip) {
                let e = wx;
                this.threeDResDir = e.env.USER_DATA_PATH + "/DRes" + l.tResVer + "/";
            }
        }
        loadRes(e) {
            this.loadingRes || (this.loadResCallback = e, this.loadingRes = !0, this.loadAllRes());
        }
        onProgress(e) {
            c.Instance.event(s.ResLoadProgress, e);
        }
        onLoad() {
            this.loadingRes = !1;
        }
        onLoadResComplete() {
            this.loadResCallback && this.loadResCallback.run(), this.loadingRes = !1, this.loaded = !0, this.sentResToOpenContext(), c.Instance.event(s.StartLoadFinish), j.nodeReport(b.loadRes);
        }
        loadAllRes() {
            "undefined" == typeof wx || l.UseRemoteRes, l.useZip ? this.unzipThreeDRes().then(e => {
                this.deleteOldThreeDResDir(), this.loadGRes();
            }).catch(e => {}) : this.loadGRes(), P.Instance.loadComplete();
        }
        loadGRes() {
            let e = x.getGameRes();
            Laya.loader.load(e, Laya.Handler.create(this, this.onLoadResComplete), Laya.Handler.create(this, this.onProgress, null, !1), null, 1, !0);
        }
        onError() {}
        clear() {}
        sentResToOpenContext() {
            Laya.Browser.onMiniGame;
        }
        deleteOldThreeDResDir() {
            if ("undefined" == typeof wx || !l.useZip) return;
            let e = wx;
            var t = e.getFileSystemManager();
            let n = e.env.USER_DATA_PATH,
                i = "DRes" + l.tResVer;
            t.readdir({
                dirPath: n,
                success: n => {
                    let a = n.files;
                    for (let n = 0; n < a.length; n++) {
                        let s = a[n];
                        s !== i && 0 == s.indexOf("DRes") && t.rmdir({
                            dirPath: e.env.USER_DATA_PATH + "/" + s,
                            recursive: !0
                        });
                    }
                }
            });
        }
        unzipThreeDRes() {
            if ("undefined" == typeof wx || !l.useZip) return new Promise((e, t) => {
                e("");
            });
            let e = wx;
            var t = e.getFileSystemManager();
            l.tResVer;
            let n = this.threeDResDir;
            return new Promise((e, i) => {
                t.access({
                    path: n,
                    success: t => {
                        e(t);
                    },
                    fail: () => {
                        i("res directory not exist. upziping...");
                    }
                });
            }).then(e => {}).catch(n => new Promise((n, i) => {
                t.unzip({
                    zipFilePath: "res/DRes.zip",
                    targetPath: e.env.USER_DATA_PATH,
                    success: function(e) {
                        n();
                    },
                    fail: function(e) {
                        i("assets unzip fail");
                    }
                });
            }));
        }
    }
    E._instance = null;
    class M {
        constructor(e) {
            this.httpCallback = null, this.url = "", this.httpCallback = e, this.url = "", this.http = new Laya.HttpRequest(), j.IsOppo() && this.http.http && (this.http.http.timeout = 2e3), this.http.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress), this.http.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete), this.http.once(Laya.Event.ERROR, this, this.onHttpRequestError);
        }
        sendPost(e, t, n) {
            var i = this.parsToStr(t);
            this.url = e + "/" + n, this.http.send(this.url, i, "post", "json");
        }
        sendGet(e, t, n = "json", i = null) {
            var a = this.parsToStr(t);
            this.url = e + "?" + a, this.http.send(this.url, null, "GET", n, i);
        }
        sendGetWithUrl(e, t = "json", n = null) {
            this.url = e, this.http.send(e, null, "get", t || "json", n);
        }
        sendGetForestWithUrl(e, t = "json", n = null) {
            this.url = e, this.http.send(e, null, "get", t || "json", n);
        }
        sendPostWithUrl(e, t, n = "json", i = null) {
            this.url = e, this.http.send(e, t, "post", n || "json", i);
        }
        parsToStr(e) {
            if (Array.isArray(t)) {
                for (var t = "", n = 0; n < e.length; n++) t += e[n][0] + "=" + e[n][1], n < e.length - 1 && (t += "&");
                return t;
            }
            return this.parseParams(e);
        }
        onHttpRequestProgress(e) {}
        onHttpRequestComplete(e) {
            if (this.httpCallback) {
                console.error("this.http.data", this.http.data);
                this.httpCallback(null, this.http.data);
            }
        }
        onHttpRequestError(e) {
            this.httpCallback && this.httpCallback(e, null);
        }
        parseParams(e) {
            var t = "";
            if (null != e) {
                for (var n in e) t += n + "=" + e[n] + "&";
                t = t.substring(0, t.length - 1);
            }
            return t;
        }
    }! function(e) {
        e[e.OK = 1e4] = "OK", e[e.FAIL = 10002] = "FAIL", e[e.LOGIN_PAR_ERROR = 1001] = "LOGIN_PAR_ERROR", e[e.ENTRY_TOKEN_EXPIRE = 10005] = "ENTRY_TOKEN_EXPIRE", e[e.ENTRY_USER_NOT_EXIST = 10011] = "ENTRY_USER_NOT_EXIST";
    }(w || (w = {}));
    class F {
        constructor() {
            this.packageName = l.packageName, this.mt = l.Platform, this.apiversion = l.Apiversion, this.version = l.ClientVer, this.sessionID = "";
        }
        static get Instance() {
            return null === F._instance && (F._instance = new F()), F._instance;
        }
        addTsParas(e, t) {
            return e;
        }
        qgPostUrl(e) {
            return j.isQG || j.IsQutoutiao() ? "/data" + e : e;
        }
        qgPostData(e) {
            return (j.isQG || j.IsQutoutiao()) && (e = "data=" + JSON.stringify(e)), e;
        }
        loginUser(e) {
            let t = Object.assign(e, {
                packageName: this.packageName,
                inviteCode: $.Instance.inviteCode || ""
            });
            return this.post(this.qgPostUrl("/login"), t);
        }
        login2User(e) {
            let t = Object.assign(e, {
                packageName: this.packageName,
                inviteCode: $.Instance.inviteCode || ""
            });
            return this.post(this.qgPostUrl("/2/login"), t);
        }
        getUserInfo(e = "", t = 0, n = "") {
            return this.get("/hd/userInfo", {
                packageName: this.packageName,
                kid: e || "",
                isClick: t,
                isvs: n
            });
        }
        getRankeList(e = 0) {
            return this.get("/hd/RankList", {
                packageName: this.packageName,
                type: e
            });
        }
        getAppConfig() {}
        updateInfo(e) {
            let t = Object.assign({
                packageName: this.packageName,
                gender: -1,
                sessionID: this.sessionID
            }, e);
            return this.post(this.qgPostUrl("/hd/update/info"), t);
        }
        updataGameData(e) {
            let t = {
                    b: $.Instance.gold.base,
                    c: $.Instance.gold.power
                },
                n = {
                    b: $.Instance.playerScore,
                    c: 1
                },
                i = $.Instance.level,
                a = $.Instance.playerScore;
            return this.updateInfo({
                gamedata: e,
                gold: t,
                diamond: 0,
                cgold: n,
                cpower: {
                    b: 0,
                    c: 1
                },
                militaryId: a,
                plunderNum: 0,
                stage: i
            });
        }
        getRankList(e = 6) {
            return this.get("/hd/RankList", {
                packageName: this.packageName,
                type: e
            });
        }
        buildUrl(e) {
            return l.host + e;
        }
        buildParas(e, t) {
            let n = e;
            return t && (n = Object.assign(e, {
                sessionID: this.sessionID,
                apiversion: this.apiversion,
                version: this.version,
                mt: this.mt
            })), n;
        }
        get(e, t = {}, n = !0) {
            let i = this.buildUrl(e),
                a = this.buildParas(t, n);
            return new Promise((e, t) => {
                new M((n, i) => {
                    this.handleResult(n, i, e, t);
                }).sendGet(i, a);
            });
        }
        post(e, t = {}, n = !0) {
            let i = this.buildUrl(e),
                a = this.buildParas(t, n);
            return new Promise((e, t) => {
                new M((n, i) => {
                    this.handleResult(n, i, e, t);
                }).sendPostWithUrl(i, this.qgPostData(a));
            });
        }
        handleResult(e, t, n, i) {
            if (e) return j.Instance.report("NetworkError", {
                error: e
            }), void i(e);
            t.code === w.OK ? n(t.result) : (j.Instance.report("NetworkError", {
                code: t.code
            }), i(t));
        }
    }
    F._instance = null;
    class N {
        constructor() {
            this.sdkParams = null;
        }
        static get Instance() {
            return null === N._instance && (N._instance = new N()), N._instance;
        }
        clear() {}
        sdkLogin(e, t) {
            this.sdkLogin2(e, t);
        }
        sdkLogin2(e, t) {
            e.iscommit = 1, F.Instance.login2User(e).then(n => {
                n && ($.Instance.user.openid = n.openid || "", l.isLimitCity = n.isL || !1), j.IsTouTiao() && (l.closeLD = !0), j.Instance.report(b.newLogin, {
                    register: a.registerDayString,
                    platformVersion: a.platformVersion
                }), this.doDefaultLoginAction(t), e.nickName && e.nickName.length && ($.Instance.user.nickName = e.nickName), e.avatar && e.avatar.length && ($.Instance.user.avatar = e.avatar), n && n.openid && n.openid.length && ($.Instance.user.openid = n.openid);
            }).catch(e => {
                $.Instance.logined || ($.Instance.loginError = !0, j.Instance.report(b.LoginFail, {}), c.Instance.event(s.userLoginFinish, {
                    logined: !1,
                    caller: t
                }));
            });
        }
        doFailLogin() {
            this.doDefaultLoginAction();
        }
        doDefaultLoginAction(e = null) {
            j.IsTouTiao() && (l.closeLD = !0);
            let t = $.Instance.user;
            t.resumePlayerInfoDefault(), t.loadCacheData(), F.Instance.sessionID = t.session_key, $.Instance.readDataInfo(null), c.Instance.event(s.UserInfoChange), $.Instance.logined = !0, c.Instance.event(s.userLoginFinish, {
                logined: !0,
                caller: e
            });
        }
    }
    N._instance = null;
    class R {
        constructor() {}
        static currTimer() {
            return Laya.timer.currTimer;
        }
        static scale() {
            return Laya.timer.scale;
        }
        static currFrame() {
            return Laya.timer.currFrame;
        }
        static delta() {
            return Laya.timer.delta;
        }
        static once(e, t, n, i = [], a = !0) {
            Laya.timer.once(e, t, n, i, a);
        }
        static loop(e, t, n, i = [], a = !0, s = !1) {
            Laya.timer.loop(e, t, n, i, a, s);
        }
        static frameOnce(e, t, n, i, a) {
            Laya.timer.frameOnce(e, t, n, i, a);
        }
        static frameLoop(e, t, n, i = null, a = !0) {
            Laya.timer.frameLoop(e, t, n, i, a);
        }
        static clear(e, t) {
            Laya.timer.clear(e, t);
        }
        static clearAll(e) {
            Laya.timer.clearAll(e);
        }
        static callLater(e, t, n) {
            Laya.timer.callLater(e, t, n);
        }
        static runCallLater(e, t) {
            Laya.timer.runCallLater(e, t);
        }
        static runTimer(e, t) {
            Laya.timer.runTimer(e, t);
        }
    }
    class O {
        constructor() {
            this.hasShow = !1, this.m_offlineTime = 0;
        }
        static get Instance() {
            return null === O._instance && (O._instance = new O()), O._instance;
        }
        init() {
            let e = this.getOfflineTime();
            this.m_offlineTime = e > 0 ? new Date().getTime() - this.getOfflineTime() : 0;
        }
        getOfflineTime() {
            return p.getNumberValue("offlineTime");
        }
        setOfflineTime(e) {
            p.setNumberValue("offlineTime", e);
        }
        getOfflineTimeCoin() {
            if (!l.vGameInfo.showOff) return 0;
            let e = 0;
            if (!this.hasShow) {
                let t = Math.floor(this.m_offlineTime / 6e4),
                    n = 120;
                t >= 3 && (t > n && (t = n), e = 2.5 * t);
            }
            return Math.floor(e);
        }
    }
    O._instance = null;
    class U {
        constructor() {
            this.isOpen = !0, this._adSwitch = !1, this._disFunc = {}, this._validAd = !1, this._creativeId = "", this._product = "", this._unit = "", this._creative = "", this._action = "", this._status = 1, this._name = "", this._show_num = 10, this._show_per = 1, this._total = 0, this._status1 = 1, this._name1 = "", this._show_num1 = 10, this._show_per1 = 1, this._total1 = 0;
        }
        static get Instance() {
            return null === U._instance && (U._instance = new U()), U._instance;
        }
        init() {
            if (!this.isOpenSDK(!0)) return;
            let e = l.ClientVer;
            this.onComlete();
        }
        onComlete() {}
        onUnit(e) {
            this._unit = e;
        }
        onCreative(e) {
            this._creative = e;
        }
        onAction(e) {
            this._action = e;
        }
        isOpenSDK(e = !1) {
            return e ? this.isOpen && j.IsWeChat() : this.isOpen && j.IsWeChat() && this.adSwitch() && !D.Instance.wxCheck();
        }
        adSwitch() {
            return this._adSwitch;
        }
        disFunc() {}
        onMove() {}
        validAd() {
            return this._validAd;
        }
        checkBannerE() {
            return !this.isOpen || !j.IsWeChat() || this._status;
        }
        addYoulike(e, t) {
            if (this.isOpenSDK()) {
                if (e) {
                    let n = window.zzsdkui.createYoulike(0, t, null, function() {
                        U.Instance.openInterFull();
                    });
                    return n && e.addChild(n), n;
                }
                return null;
            }
        }
        addDrawer(e, t) {
            if (this.isOpenSDK() && this.validAd) {
                if (e) {
                    let n = window.zzsdkui.createDrawer("drawer_pic", null, function() {
                        U.Instance.openInterFull();
                    }, null, .5 * Laya.stage.height + t, null, null, function(e) {});
                    return n && e.addChild(n), n;
                }
                return null;
            }
        }
        addFloat(e, t, n, i) {
            if (this.isOpenSDK()) {
                if (e) {
                    let a = window.zzsdkui.createFloat(t, n, null, function() {
                        U.Instance.openInterFull();
                    }, null, i);
                    return a && e.addChild(a), a;
                }
                return null;
            }
        }
        openInterFull(e = null) {
            this.isOpenSDK() && this.validAd && parent ? He.Instance.openUI(Ge.ForestFull, {
                cb: e
            }) : e && e();
        }
        addInterFull(e) {
            if (this.isOpenSDK() && this.validAd) {
                if (e) {
                    let t = j.isLong() ? 100 : 35,
                        n = window.zzsdkui.createFullscroll("inter_full", Laya.stage.height - t, 0, null, function() {});
                    return n && e.addChild(n), n;
                }
                return null;
            }
        }
        addInterFullList(e) {
            if (this.isOpenSDK() && e) {
                let t = window.zzsdkui.createFullList("inter_full_list", function() {
                    t.clear();
                });
                t && e.addChild(t);
            }
        }
        add3x(e, t, n, i) {
            if (this.isOpenSDK()) {
                if (e) {
                    let a = window.zzsdkui.createInterScroll("inter_x", i, t, n, null, function() {
                        U.Instance.openInterFull();
                    });
                    return a && e.addChild(a), a;
                }
                return null;
            }
        }
        add3X3(e) {
            if (this.isOpenSDK()) {
                if (e) {
                    let t = window.zzsdkui.createInter("3*2", -30, 0, null, function() {
                        U.Instance.openInterFull();
                    });
                    return t && e.addChild(t), t;
                }
                return null;
            }
        }
    }
    U._instance = null;
    class G {
        constructor() {
            this.curSubPacketLoadProgress = 0, this.loadProgress = 0, this.updateManager = null, this.subPackageName = "res", this.curHideTimer = 0;
        }
        static get Instance() {
            return null === G._instance && (G._instance = new G()), G._instance;
        }
        onConfigLoaded() {
            He.Instance.openUI(Ge.Load, {
                loadSubpackage: !1
            }), this.loadSubpackageFinish();
        }
        initEnv() {
            j.registerQGAldRequest(), this.stageEvent(), j.onShow(e => {
                this.onShowWX(e);
            }, e => {
                this.onHideWX(e);
            });
            let e = parseInt(Laya.LocalStorage.getItem("wxRegisterTime") || "0");
            0 === e && (e = Date.now(), Laya.LocalStorage.setItem("wxRegisterTime", e.toString()), Laya.LocalStorage.removeItem("canFetchVideo"), Laya.LocalStorage.removeItem("useVideoMaxTime"), a.firstTimePlayer = !0), a.registerTime = e;
            let t = Date.now();
            a.accountTime = t - e; {
                let e = parseInt(Laya.LocalStorage.getItem("lastStartLoadTime") || "0");
                a.lastStartTime = e, Laya.LocalStorage.setItem("lastStartLoadTime", t.toString());
            }
            a.registerDayString = d.timestampToDay(a.registerTime), a.isOverDay = B.checkOverDay(), a.isNewPlayer = d.isSameDay(t, e), l.recoverData || (a.isNewPlayer = !0);
            let n = null,
                i = j.getPlatform();
            i && i.getSystemInfoSync && (n = i.getSystemInfoSync()), n && (a.windowHeight = n.windowHeight, a.windowWidth = n.windowWidth, a.screenHeight = n.screenHeight, a.screenWidth = n.screenWidth, n.platform && "android" === n.platform.toLowerCase() ? j.isAndroid = !0 : n.platform && "ios" === n.platform.toLowerCase() && (j.isIos = !0, j.IsWeChat() && this.addIosBLINNPHONG()), n.benchmarkLevel && n.benchmarkLevel >= 1 && n.benchmarkLevel < 20 && (j.isLowDevice = !0), n.platformVersion && (a.platformVersion = n.platformVersion)), j.Instance.setLoadingProgress(0), j.nodeReport(b.gameStart), j.IsOppo() && this.onShowWX(null);
        }
        onLoadComplete() {
            this.doLoginAction(null);
        }
        canLoadSubpackage() {}
        doLoginAction(e = null) {
            this.getAppCfg();
            let t = () => {
                $.Instance.loginError = !1, j.Instance.sdkLogin(Laya.Handler.create(this, t => {
                    j.Instance.loginParams = t, this.connectSdkLoginSrv(j.Instance.loginParams, e);
                }), null);
            };
            t && t(), U.Instance.init();
        }
        connectSdkLoginSrv(e, t) {
            null !== e && N.Instance.sdkLogin(e, t);
        }
        loadSubpackageFinish() {
            E.Instance.loadRes(null), Laya.loader.load(x.getGameConfig(), Laya.Handler.create(this, this.onLoadComplete));
        }
        loadSubpackage() {}
        loadMusicSubPackage() {
            if (!this.canLoadSubpackage()) return;
            let e = j.getPlatform();
            if (e && e.loadSubpackage) {
                V.Instance.canPlay = !1;
                e.loadSubpackage({
                    name: "music",
                    success: e => {
                        V.Instance.canPlay = !0, V.Instance.playBgm();
                    },
                    fail: e => {}
                });
            }
        }
        bannerClickCheck(e) {
            e && null != e && (8 == e.targetAction || 9 == e.targetAction || 10 == e.targetAction) && e.targetPagePath && e.targetPagePath.length > 50 && j.Instance.report(b.BannerJump, {
                pos: j.Instance.showBannerPos
            });
        }
        updateLoadInfoFromWX(e) {
            if (null !== e && (null !== e.inviteName || null !== e.openid || null !== e.inviteCode)) {
                e.inviteName, e.openid, e.pos, e.shareTime;
                let t = e.inviteCode;
                t && ($.Instance.inviteCode = t);
            }
            null !== e && null !== e.chid && (a.chid = e.chid), null !== e && null !== e.channel && (a.channel = e.channel);
        }
        getAppCfg() {
            l.gotCfg = !0, c.Instance.event(s.GotCfg);
        }
        updateLoad() {
            this.loadProgress += .05, this.loadProgress >= 1 ? (Laya.timer.clear(this, this.updateLoad), this.loadProgress = 1) : Laya.timer.once(500, this, this.updateLoad), this.updateSubPacketLoad();
        }
        updateSubPacketLoad() {
            let e = this.curSubPacketLoadProgress;
            e < .9 || Laya.timer.clear(this, this.updateLoad), e = .1 * this.curSubPacketLoadProgress + .9 * this.loadProgress, c.Instance.event(s.SubpackageLoadProgress, e);
        }
        onShowWX(e) {}
        onHideWX(e) {}
        stageEvent() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp), this.onMouseUp();
        }
        onMouseDown() {
            R.clear(this, this.showDsdkTuiView);
        }
        onMouseUp() {
            R.clear(this, this.showDsdkTuiView), R.once(2e4, this, this.showDsdkTuiView);
        }
        showDsdkTuiView() {}
        addIosBLINNPHONG() {
            var e = {
                    a_Position: Laya.VertexMesh.MESH_POSITION0,
                    a_Color: Laya.VertexMesh.MESH_COLOR0,
                    a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                    a_Texcoord0: Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
                    a_Texcoord1: Laya.VertexMesh.MESH_TEXTURECOORDINATE1,
                    a_BoneWeights: Laya.VertexMesh.MESH_BLENDWEIGHT0,
                    a_BoneIndices: Laya.VertexMesh.MESH_BLENDINDICES0,
                    a_Tangent0: Laya.VertexMesh.MESH_TANGENT0,
                    a_MvpMatrix: Laya.VertexMesh.MESH_MVPMATRIX_ROW0,
                    a_WorldMat: Laya.VertexMesh.MESH_WORLDMATRIX_ROW0
                },
                t = {
                    u_Bones: Laya.Shader3D.PERIOD_CUSTOM,
                    u_DiffuseTexture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_SpecularTexture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_NormalTexture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_AlphaTestValue: Laya.Shader3D.PERIOD_MATERIAL,
                    u_DiffuseColor: Laya.Shader3D.PERIOD_MATERIAL,
                    u_MaterialSpecular: Laya.Shader3D.PERIOD_MATERIAL,
                    u_Shininess: Laya.Shader3D.PERIOD_MATERIAL,
                    u_TilingOffset: Laya.Shader3D.PERIOD_MATERIAL,
                    u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                    u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                    u_LightmapScaleOffset: Laya.Shader3D.PERIOD_SPRITE,
                    u_LightMap: Laya.Shader3D.PERIOD_SPRITE,
                    u_CameraPos: Laya.Shader3D.PERIOD_CAMERA,
                    u_Viewport: Laya.Shader3D.PERIOD_CAMERA,
                    u_ProjectionParams: Laya.Shader3D.PERIOD_CAMERA,
                    u_View: Laya.Shader3D.PERIOD_CAMERA,
                    u_ReflectTexture: Laya.Shader3D.PERIOD_SCENE,
                    u_ReflectIntensity: Laya.Shader3D.PERIOD_SCENE,
                    u_FogStart: Laya.Shader3D.PERIOD_SCENE,
                    u_FogRange: Laya.Shader3D.PERIOD_SCENE,
                    u_FogColor: Laya.Shader3D.PERIOD_SCENE,
                    u_DirationLightCount: Laya.Shader3D.PERIOD_SCENE,
                    u_LightBuffer: Laya.Shader3D.PERIOD_SCENE,
                    u_LightClusterBuffer: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientColor: Laya.Shader3D.PERIOD_SCENE,
                    u_shadowMap1: Laya.Shader3D.PERIOD_SCENE,
                    u_shadowMap2: Laya.Shader3D.PERIOD_SCENE,
                    u_shadowMap3: Laya.Shader3D.PERIOD_SCENE,
                    u_shadowPSSMDistance: Laya.Shader3D.PERIOD_SCENE,
                    u_lightShadowVP: Laya.Shader3D.PERIOD_SCENE,
                    u_shadowPCFoffset: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHAr: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHAg: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHAb: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHBr: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHBg: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHBb: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHC: Laya.Shader3D.PERIOD_SCENE,
                    "u_DirectionLight.color": Laya.Shader3D.PERIOD_SCENE,
                    "u_DirectionLight.direction": Laya.Shader3D.PERIOD_SCENE,
                    "u_PointLight.position": Laya.Shader3D.PERIOD_SCENE,
                    "u_PointLight.range": Laya.Shader3D.PERIOD_SCENE,
                    "u_PointLight.color": Laya.Shader3D.PERIOD_SCENE,
                    "u_SpotLight.position": Laya.Shader3D.PERIOD_SCENE,
                    "u_SpotLight.direction": Laya.Shader3D.PERIOD_SCENE,
                    "u_SpotLight.range": Laya.Shader3D.PERIOD_SCENE,
                    "u_SpotLight.spot": Laya.Shader3D.PERIOD_SCENE,
                    "u_SpotLight.color": Laya.Shader3D.PERIOD_SCENE
                },
                n = {
                    s_Cull: Laya.Shader3D.RENDER_STATE_CULL,
                    s_Blend: Laya.Shader3D.RENDER_STATE_BLEND,
                    s_BlendSrc: Laya.Shader3D.RENDER_STATE_BLEND_SRC,
                    s_BlendDst: Laya.Shader3D.RENDER_STATE_BLEND_DST,
                    s_DepthTest: Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
                    s_DepthWrite: Laya.Shader3D.RENDER_STATE_DEPTH_WRITE
                },
                i = Laya.Shader3D.add("BLINNPHONG", null, null, !1),
                a = new Laya.SubShader(e, t);
            i.addSubShader(a), a.addShaderPass('#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n\r\n#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\r\n\tattribute vec2 a_Texcoord0;\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#if defined(LIGHTMAP)&&defined(UV1)\r\n\tattribute vec2 a_Texcoord1;\r\n#endif\r\n\r\n#ifdef LIGHTMAP\r\n\tuniform vec4 u_LightmapScaleOffset;\r\n\tvarying vec2 v_LightMapUV;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tattribute vec4 a_Color;\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nattribute vec3 a_Normal;\r\nvarying vec3 v_Normal; \r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tuniform vec3 u_CameraPos;\r\n\tvarying vec3 v_ViewDir; \r\n#endif\r\n\r\n#if defined(NORMALMAP)\r\n\tattribute vec4 a_Tangent0;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\r\n\tvarying vec3 v_PositionWorld;\r\n#endif\r\n\r\nvarying float v_posViewZ;\r\n#ifdef RECEIVESHADOW\r\n  #ifdef SHADOWMAP_PSSM1 \r\n  varying vec4 v_lightMVPPos;\r\n  uniform mat4 u_lightShadowVP[4];\r\n  #endif\r\n#endif\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\nvoid main_castShadow()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\t//TODO没考虑UV动画呢\r\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\r\n\t\tv_Texcoord0=a_Texcoord0;\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n\tv_posViewZ = gl_Position.z;\r\n}\r\n\r\nvoid main_normal()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=inverseMat(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=inverseMat(mat3(worldMat));\r\n\t#endif  \r\n\tv_Normal=normalize(a_Normal*worldInvMat);\r\n\t#if defined(NORMALMAP)\r\n\t\tv_Tangent=normalize(a_Tangent0.xyz*worldInvMat);\r\n\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t#endif\r\n\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\r\n\t\tv_PositionWorld=(worldMat*position).xyz;\r\n\t#endif\r\n\t\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tv_ViewDir=u_CameraPos-v_PositionWorld;\r\n\t#endif\r\n\r\n\t#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\t\t#ifdef TILINGOFFSET\r\n\t\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t\t#else\r\n\t\t\tv_Texcoord0=a_Texcoord0;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#ifdef LIGHTMAP\r\n\t\t#ifdef UV1\r\n\t\t\tv_LightMapUV=vec2(a_Texcoord1.x,1.0-a_Texcoord1.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\r\n\t\t#else\r\n\t\t\tv_LightMapUV=vec2(a_Texcoord0.x,1.0-a_Texcoord0.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\r\n\t\t#endif \r\n\t\tv_LightMapUV.y=1.0-v_LightMapUV.y;\r\n\t#endif\r\n\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tv_Color=a_Color;\r\n\t#endif\r\n\r\n\t#ifdef RECEIVESHADOW\r\n\t\tv_posViewZ = gl_Position.w;\r\n\t\t#ifdef SHADOWMAP_PSSM1 \r\n\t\t\tv_lightMVPPos = u_lightShadowVP[0] * vec4(v_PositionWorld,1.0);\r\n\t\t#endif\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}\r\n\r\nvoid main()\r\n{\r\n\t#ifdef CASTSHADOW\r\n\t\tmain_castShadow();\r\n\t#else\r\n\t\tmain_normal();\r\n\t#endif\r\n}', '#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n\r\nuniform vec4 u_DiffuseColor;\r\n\r\n#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef ALPHATEST\r\n\tuniform float u_AlphaTestValue;\r\n#endif\r\n\r\n#ifdef DIFFUSEMAP\r\n\tuniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n\r\n#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#ifdef LIGHTMAP\r\n\tvarying vec2 v_LightMapUV;\r\n\tuniform sampler2D u_LightMap;\r\n#endif\r\n\r\nvarying vec3 v_Normal;\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tvarying vec3 v_ViewDir; \r\n\r\n\tuniform vec3 u_MaterialSpecular;\r\n\tuniform float u_Shininess;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tuniform DirectionLight u_DirectionLight;\r\n\t\t#endif\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tuniform PointLight u_PointLight;\r\n\t\t#endif\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tuniform SpotLight u_SpotLight;\r\n\t\t#endif\r\n\t#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n\t#endif\r\n\r\n\t#ifdef SPECULARMAP \r\n\t\tuniform sampler2D u_SpecularTexture;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef NORMALMAP \r\n\tuniform sampler2D u_NormalTexture;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\tuniform vec3 u_FogColor;\r\n#endif\r\n\r\n#if defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\r\n\tvarying vec3 v_PositionWorld;\r\n#endif\r\n\r\n\r\n#include "GlobalIllumination.glsl";//"GlobalIllumination.glsl use uniform should at front of this\r\n\r\n#include "ShadowHelper.glsl"\r\nvarying float v_posViewZ;\r\n#ifdef RECEIVESHADOW\r\n\t#if defined(SHADOWMAP_PSSM2)||defined(SHADOWMAP_PSSM3)\r\n\t\tuniform mat4 u_lightShadowVP[4];\r\n\t#endif\r\n\t#ifdef SHADOWMAP_PSSM1 \r\n\t\tvarying vec4 v_lightMVPPos;\r\n\t#endif\r\n#endif\r\n\r\n\r\nvoid main_castShadow()\r\n{\r\n\t//gl_FragColor=vec4(v_posViewZ,0.0,0.0,1.0);\r\n\tgl_FragColor=packDepth(v_posViewZ);\r\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\r\n\t\tfloat alpha = texture2D(u_DiffuseTexture,v_Texcoord0).w;\r\n\t\tif( alpha < u_AlphaTestValue )\r\n\t\t{\r\n\t\t\tdiscard;\r\n\t\t}\r\n\t#endif\r\n}\r\nvoid main_normal()\r\n{\r\n\tvec3 normal;//light and SH maybe use normal\r\n\t#if defined(NORMALMAP)\r\n\t\tvec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;\r\n\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\r\n\t#else\r\n\t\tnormal = normalize(v_Normal);\r\n\t#endif\r\n\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tvec3 viewDir= normalize(v_ViewDir);\r\n\t#endif\r\n\r\n\tLayaGIInput giInput;\r\n\t#ifdef LIGHTMAP\t\r\n\t\tgiInput.lightmapUV=v_LightMapUV;\r\n\t#endif\r\n\tvec3 globalDiffuse=layaGIBase(giInput,1.0,normal);\r\n\t\r\n\tvec4 mainColor=u_DiffuseColor;\r\n\t#ifdef DIFFUSEMAP\r\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\r\n\t\tmainColor=mainColor*difTexColor;\r\n\t#endif \r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tmainColor=mainColor*v_Color;\r\n\t#endif \r\n    \r\n\t#ifdef ALPHATEST\r\n\t\tif(mainColor.a<u_AlphaTestValue)\r\n\t\t\tdiscard;\r\n\t#endif\r\n  \r\n\t\r\n\tvec3 diffuse = vec3(0.0);\r\n\tvec3 specular= vec3(0.0);\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tvec3 dif,spe;\r\n\t\t#ifdef SPECULARMAP\r\n\t\t\tvec3 gloss=texture2D(u_SpecularTexture, v_Texcoord0).rgb;\r\n\t\t#else\r\n\t\t\t#ifdef DIFFUSEMAP\r\n\t\t\t\tvec3 gloss=vec3(difTexColor.a);\r\n\t\t\t#else\r\n\t\t\t\tvec3 gloss=vec3(1.0);\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tLayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_DirectionLight,dif,spe);\r\n\t\t\tdiffuse+=dif;\r\n\t\t\tspecular+=spe;\r\n\t\t#endif\r\n\t\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tLayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_PointLight,dif,spe);\r\n\t\t\tdiffuse+=dif;\r\n\t\t\tspecular+=spe;\r\n\t\t#endif\r\n\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tLayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_SpotLight,dif,spe);\r\n\t\t\tdiffuse+=dif;\r\n\t\t\tspecular+=spe;\r\n\t\t#endif\r\n\t#else\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t{\r\n\t\t\t\tif(i >= u_DirationLightCount)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\r\n\t\t\t\tLayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,directionLight,dif,spe);\r\n\t\t\t\tdiffuse+=dif;\r\n\t\t\t\tspecular+=spe;\r\n\t\t\t}\r\n\t\t#endif\r\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\t\tivec4 clusterInfo =getClusterInfo(u_LightClusterBuffer,u_View,u_Viewport, v_PositionWorld,gl_FragCoord,u_ProjectionParams);\r\n\t\t\t#ifdef POINTLIGHT\r\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t\t{\r\n\t\t\t\t\tif(i >= clusterInfo.x)//PointLightCount\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tPointLight pointLight = getPointLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\r\n\t\t\t\t\tLayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,pointLight,dif,spe);\r\n\t\t\t\t\tdiffuse+=dif;\r\n\t\t\t\t\tspecular+=spe;\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t\t#ifdef SPOTLIGHT\r\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t\t{\r\n\t\t\t\t\tif(i >= clusterInfo.y)//SpotLightCount\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tSpotLight spotLight = getSpotLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\r\n\t\t\t\t\tLayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,spotLight,dif,spe);\r\n\t\t\t\t\tdiffuse+=dif;\r\n\t\t\t\t\tspecular+=spe;\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#ifdef RECEIVESHADOW\r\n\t\tfloat shadowValue = 1.0;\r\n\t\t#ifdef SHADOWMAP_PSSM3\r\n\t\t\tshadowValue = getShadowPSSM3(u_shadowMap1,u_shadowMap2,u_shadowMap3,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\r\n\t\t#endif\r\n\t\t#ifdef SHADOWMAP_PSSM2\r\n\t\t\tshadowValue = getShadowPSSM2(u_shadowMap1,u_shadowMap2,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\r\n\t\t#endif \r\n\t\t#ifdef SHADOWMAP_PSSM1\r\n\t\t\tshadowValue = getShadowPSSM1(u_shadowMap1,v_lightMVPPos,u_shadowPSSMDistance,u_shadowPCFoffset,v_posViewZ,0.001);\r\n\t\t#endif\r\n\t\tgl_FragColor =vec4(mainColor.rgb*(globalDiffuse + diffuse*shadowValue),mainColor.a);\r\n\t#else\r\n\t\tgl_FragColor =vec4(mainColor.rgb*(globalDiffuse + diffuse),mainColor.a);\r\n\t#endif\r\n\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\t#ifdef RECEIVESHADOW\r\n\t\t\tgl_FragColor.rgb+=specular*shadowValue;\r\n\t\t#else\r\n\t\t\tgl_FragColor.rgb+=specular;\r\n\t\t#endif\r\n\t#endif\r\n\t  \r\n\t#ifdef FOG\r\n\t\tfloat lerpFact=clamp((1.0/gl_FragCoord.w-u_FogStart)/u_FogRange,0.0,1.0);\r\n\t\tgl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);\r\n\t#endif\r\n}\r\n\r\nvoid main()\r\n{\r\n\t#ifdef CASTSHADOW\t\t\r\n\t\tmain_castShadow();\r\n\t#else\r\n\t\tmain_normal();\r\n\t#endif  \r\n}\r\n\r\n', n);
        }
    }
    G._instance = null,
        function(e) {}(S || (S = {}));
    class H {
        static get Instance() {
            return null === H._instance && (H._instance = new H()), H._instance;
        }
        onBack(e) {}
        onReceive(e) {}
        onSign(e) {}
        onCark() {}
        onTrain(e) {}
        onBtn(e) {}
        onVideo(e) {}
        onNewPlayer(e) {}
        report(e, t) {
            U.Instance.isOpenSDK(!0) && j.Instance.report(`qy-${e}`, t);
        }
    }
    H._instance = null;
    class X {
        constructor() {
            this.bannerAd = null, this.bannerShowInfo = {}, this.checkShared = !0, this.bannerLoadError = !1, this.lastInterstitialAdTime = 0, this.interstitialAd = null, this.info = {}, this.loginParams = {}, this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0, this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null, this.curShareTimer = null, this.lastEndVideoAdTime = 0, this.info = X.sInfo, this.loginParams = null, "undefined" != typeof wx && (Laya.MiniAdpter.window.wx.onShareAppMessage(this.onShareAppMessage), Laya.MiniAdpter.window.wx.showShareMenu({
                withShareTicket: !0,
                success: function() {},
                fail: function() {}
            }), c.Instance.on(s.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage(e) {
            let t = g.DefaultShare,
                n = _.Instance.getVideoShareCfg(g.DefaultShare),
                i = B.getShareInfoByCfg(n),
                a = i.shareContent,
                o = i.imgUrl,
                r = 0,
                h = "";
            return null != $.Instance && null != $.Instance.user && (h = $.Instance.user.openid, r = $.Instance.user.uid), {
                title: a,
                imageUrl: o,
                query: "inviteName=" + $.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: e => {
                    c.Instance.event(s.ShareSuccess, {
                        pos: 0,
                        shareTickets: e.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(e, t) {
            if ("undefined" != typeof wx) {
                var n = t => {
                        X.sInfo.encryptedData = t.encryptedData, X.sInfo.iv = t.iv, X.sInfo.nickName = t.userInfo.nickName, X.sInfo.avatar = t.userInfo.avatarUrl, X.sInfo.sex = t.userInfo.gender, X.sInfo.city = t.userInfo.city, e.runWith(X.sInfo);
                    },
                    i = t => {
                        e.runWith(X.sInfo);
                    };
                wx.login({
                    success: e => {
                        X.sInfo.wxCode = e.code, wx.getUserInfo({
                            withCredentials: !0,
                            lang: "zh_CN",
                            success: n,
                            fail: i,
                            complete: null
                        });
                    },
                    fail: () => {
                        $.Instance.loginError = !0, c.Instance.event(s.userLoginFinish, {
                            logined: !1
                        });
                    },
                    complete: null,
                    pkgName: l.packageName
                });
            } else {
                $.Instance.user.loadCacheData();
            }
        }
        shareM(e, t, n, i, a, o, r = "") {
            if (l.IgnoreShare) return void c.Instance.event(s.ShareSuccess, {
                pos: e
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = e;
            var h = n,
                d = "";
            null != $.Instance && null != $.Instance.user && (d = $.Instance.user.openid);
            let p = "inviteName=" + $.Instance.user.nickName + "&openid=" + d + "&pos=" + this.sharePos + "&shareTime=" + o + "&inviteCode=" + $.Instance.user.uid + "&shareScene=" + this.sharePos,
                u = i;
            t && (u = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.shareAppMessage({
                title: a,
                imageUrl: u,
                query: p,
                path: p,
                success: e => {
                    c.Instance.event(s.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: e.shareTickets,
                        from: h
                    });
                },
                fail: () => {
                    c.Instance.event(s.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: e => {
                    "undefined" == typeof wx || D.Instance.wxCheck() || wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    }), this.checkShared = !1, this.curShareTimer = 0;
                }
            }), Laya.timer.clear(this, this.onCheckShare);
        }
        showBanner(e, t, n, i, o, r = 0, h = 0, d = 0, p = !1) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            var u = "";
            null != t && (u = t);
            var g = !1;
            Date.now() - this.lastFetchBannerTime < 1e3 ? g = !1 : this.bannerShowCount >= l.vGameInfo.bCount ? g = !0 : Date.now() - this.lastFetchBannerTime >= 1e3 * l.vGameInfo.bTimer && (g = !0), j.shouldReBuild && (g = !0, j.shouldReBuild = !1), (g || this.bannerLoadError) && null != this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null, this.bannerRes = null), this.bannerLoadError = !1, this.showBannerPos = e;
            let m = o || 375;
            m = m / 375 * a.windowWidth, a.windowWidth > 375 && (r = r / 375 * a.windowWidth, h = h / 375 * a.windowWidth);
            let f = 10,
                y = 2 * a.windowHeight / Laya.stage.height;
            if (d = U.Instance.isOpenSDK() ? 0 : d * y / 2, this.bannerShowInfo.hAlign = n, this.bannerShowInfo.vAlign = i, this.bannerShowInfo.pinY = d, this.bannerShowInfo.xOffset = r, this.bannerShowInfo.yOffset = h, 112 == e && j.IsWeChat() && null != this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null, this.bannerRes = null), null == this.bannerAd) this.bannerShowCount = 1, this.lastFetchBannerTime = Date.now(), this.bannerAd = wx.createBannerAd({
                adUnitId: u,
                style: {
                    left: 0,
                    top: 0,
                    width: m
                }
            }), this.bannerAd.onError(e => {
                this.report(b.loadBannerError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                }), this.bannerLoadError = !0;
            }), this.bannerAd.onResize(e => {
                this.report(b.loadBanner, {
                    duration: (Date.now() - this.lastFetchBannerTime) / 1e3
                }), this.bannerRes = e, this.adjustBanner();
            });
            else {
                f = 0, this.bannerShowCount++, this.bannerRes && Laya.timer.once(1, this, this.adjustBanner);
            }
            this.bannerAd.show().then(() => {
                this.report(b.showBanner, {
                    bannerPos: e,
                    adUnitID: this.bannerAd.adUnitId
                }), setTimeout(() => {
                    c.Instance.event(s.ShowBannerCompleted, e);
                }, f);
            }).catch(e => {
                this.report(b.loadBannerError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                }), this.bannerLoadError = !0;
            }), this.bannerAd.style && (this.bannerAd.style.width = m);
        }
        adjustBanner() {
            let e = this.bannerShowInfo.hAlign,
                t = this.bannerShowInfo.vAlign,
                n = this.bannerShowInfo.pinY,
                i = this.bannerShowInfo.xOffset,
                o = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let r = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            if (0 == e ? this.bannerAd.style.left = 0 + i + (B.getDeviceRatio() > 2 ? 20 : 0) : 1 == e ? this.bannerAd.style.left = .5 * (a.windowWidth - r.width) + i : 2 == e && (this.bannerAd.style.left = a.windowWidth - r.width + i - (B.getDeviceRatio() > 2 ? 20 : 0)), 0 == t) this.bannerAd.style.top = 0 + o;
            else if (1 == t) this.bannerAd.style.top = .5 * (a.windowHeight - r.height) + o;
            else if (2 == t) {
                let e = 0;
                Laya.stage.height / Laya.stage.width > 2 && (e = 50 / 2436 * Laya.stage.width), this.bannerAd.style.top = a.windowHeight - r.height + o - e, n > 0 && n < this.bannerAd.style.top && (this.bannerAd.style.top = n + 2);
            }
            let h = (this.bannerAd.style.top + r.height) * Laya.stage.width / a.windowWidth,
                l = this.bannerAd.style.top * Laya.stage.width / a.windowWidth;
            c.Instance.event(s.BannerPosChange, {
                ADPos: this.showBannerPos,
                bottom: h,
                top: l,
                BannerAD: this.bannerAd
            });
        }
        hideBanner() {
            null != this.bannerAd && this.bannerAd.hide();
        }
        showVideo(e, t, n = "") {
            if (this.lastEndVideoAdTime > 0) {
                let e = 1e3 * 7 - (Date.now() - this.lastEndVideoAdTime);
                if (e > 0) return e = Math.ceil(e / 1e3), void He.Instance.showTips("间隔时间太短，请等待" + e + "秒");
            }
            if ("undefined" == typeof wx) return D.Instance.onShowAdCompleted(e), c.Instance.event(s.ShowAdCompleted, e), void c.Instance.event(s.CloseShowAd, e);
            var i = "";
            null !== t && t.length && (i = t), this.showPos = e;
            wx.getSystemInfoSync().SDKVersion;
            wx.createRewardedVideoAd && (null == this.rewardedVideoAd && (this.rewardedVideoAd = wx.createRewardedVideoAd({
                adUnitId: i
            }), this.rewardedVideoAd.onClose(t => {
                a.fetchingVideoAd = !1, t && t.isEnded || void 0 === t ? (D.Instance.onShowAdCompleted(e), c.Instance.event(s.ShowAdCompleted, this.showPos), c.Instance.event(s.CloseShowAd, this.showPos), this.lastEndVideoAdTime = Date.now(), c.Instance.event(s.FinishVideoAd, this.showPos), this.report(b.watchADComplete), this.onTotal(e)) : (c.Instance.event(s.CloseShowAd, this.showPos), this.report(b.watchADExit)), V.Instance.startAll(), G.Instance.onMouseUp();
            }), this.rewardedVideoAd.onError(e => {
                a.fetchingVideoAd && (a.fetchingVideoAd = !1, c.Instance.event(s.FetchVideoFail, this.showPos), this.report(b.loadVideoError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                }));
            }), this.rewardedVideoAd.onLoad(() => {
                a.fetchingVideoAd = !1;
            })), this.rewardedVideoAd.adUnitId = i, a.fetchingVideoAd = !0, this.rewardedVideoAd.load().then(() => {
                G.Instance.onMouseDown(), a.fetchingVideoAd = !1, this.rewardedVideoAd.show(), V.Instance.stopAll();
            }).catch(e => {
                a.fetchingVideoAd = !1, this.report(b.loadVideoError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                });
            }));
        }
        report(e, t) {
            wx.aldSendEvent && wx.aldSendEvent(e, t);
        }
        postToOpenDataMessage(e, t) {}
        onTotal(e) {
            if (e) switch (e) {
                case g.SettlementAD:
                    H.Instance.onVideo(S.video1);
                    break;
                case g.SkinAD:
                    H.Instance.onVideo(S.video2);
                    break;
                case g.DaySign:
                    H.Instance.onVideo(S.video3);
                    break;
                case g.FreeTryAD:
                    H.Instance.onVideo(S.video4);
            }
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                if (Date.now() - this.curShareTimer >= l.ShareTickTimer) {
                    let e = !(!D.Instance._callShareCfg || !D.Instance._callShareCfg.fromVideoFail);
                    B.finishShare(D.Instance._callShareCfg.pos, !0, e);
                } else if ("undefined" != typeof wx && !D.Instance.wxCheck()) {
                    let e = "分享到不同群才能获得奖励!";
                    0 === this.sharePos && (e = ""), e.length && wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    });
                }
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 100);
        }
        isLowDevice() {
            return j.isAndroid && j.isLowDevice;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {
            this.postToOpenDataMessage(I.updataScoreInfo, e);
        }
        shareVideo(e) {}
        hasOpenAD() {
            return !0;
        }
        preLoadInAd() {
            "undefined" != typeof wx && this.showInterstitialAd(1, "", "", !0);
        }
        showInterstitialAd(e, t = "", n = "", i = !1) {
            let a = "";
            1 == e && (a = "");
            let s = !0;
            this.lastInterstitialAdTime > 0 && Date.now() - this.lastInterstitialAdTime <= 2e4 && (s = !1), "undefined" != typeof wx && s && wx.createInterstitialAd && (this.interstitialAd || (this.interstitialAd = wx.createInterstitialAd({
                adUnitId: a
            }), this.interstitialAd.onClose(e => {
                this.lastInterstitialAdTime = Date.now();
            }), this.interstitialAd.onError(e => {}), this.interstitialAd.onLoad(() => {})), this.interstitialAd.adUnitId = a, !i && this.interstitialAd && this.interstitialAd.show().catch(e => {}));
        }
        setLoadingProgress(e) {}
        showModal(e) {}
    }
    X.sInfo = {};
    class Y {
        constructor() {
            this.recorder = null, this.videoPath = null, this.recording = !1, this.doKilled = !1, this.pausing = !1, this.recordTime = 0, this.maxRecordTime = 0, j.IsTouTiao() && "undefined" != typeof wx && (this.recorder = wx.getGameRecorderManager(), this.initRecord());
        }
        static get Instance() {
            return null == Y._instance && (Y._instance = new Y()), Y._instance;
        }
        start(e = 120) {
            this.recorder && (this.recording && (this.recorder.stop(), this.recording = !1, this.pausing = !1), this.recorder.start({
                duration: e
            }), this.maxRecordTime = e, this.recording = !0, this.doKilled = !1, this.pausing = !1, Laya.timer.clearAll(this), this.recordTime = 0, Laya.timer.loop(1e3, this, this.updateRecordTime), c.Instance.event(s.UpdateRecordBtn));
        }
        updateRecordTime() {
            this.recording && !this.pausing && (this.recordTime += 1, this.recordTime + 1 >= this.maxRecordTime && this.stop());
        }
        canShowShareVideo() {
            return !!this.videoPath;
        }
        pause() {
            this.recorder && this.recorder.recording && (this.recorder.pause(), this.pausing = !0);
        }
        resume() {
            this.recorder && this.recorder.recording && this.pausing && this.recorder.resume();
        }
        stop() {
            this.recorder && this.recording && (Laya.timer.clearAll(this), this.recorder.stop(), this.recording = !1, c.Instance.event(s.UpdateRecordBtn));
        }
        initRecord() {
            this.recorder && (this.recorder.onStart(e => {}), this.recorder.onStop(e => {
                this.recordTime <= 3 && (e = null), this.videoPath = e;
            }), this.recorder.onPause(() => {}), this.recorder.onResume(() => {}), this.recorder.onError(e => {}), this.recorder.onInterruptionBegin(e => {}), this.recorder.onInterruptionEnd(e => {}));
        }
        shareVideo(e) {
            this.recording && this.stop(), j.Instance.shareVideo(e);
        }
    }
    Y._instance = null;
    class W {
        constructor() {
            this.bannerAd = null, this.bannerAdPre = null, this.bannerZeroHeightCount = 0, this.bannerShowInfo = {}, this.bannerError = !1, this.bannerLoadFinish = !1, this.checkShared = !0, this.curShareTimer = 0, this.checkSharedVideo = !0, this.curShareVideoTimer = 0, this.info = {}, this.loginParams = {}, this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0, this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null, this.mta = null, this.lastEndVideoAdTime = 0, this.info = W.sInfo, this.loginParams = null, "undefined" != typeof wx && (Laya.MiniAdpter.window.wx.aldOnShareAppMessage(e => this.onShareAppMessage(e)), Laya.MiniAdpter.window.wx.showShareMenu({
                withShareTicket: !0,
                success: function() {},
                fail: function() {}
            }), c.Instance.on(s.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage(e) {
            let t = g.DefaultShare,
                n = _.Instance.getVideoShareCfg(g.DefaultShare),
                i = B.getShareInfoByCfg(n),
                a = i.shareContent,
                o = i.imgUrl,
                r = 0;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = 0, D.Instance._callShareCfg = null;
            let h = "";
            return null != $.Instance && null != $.Instance.user && (h = $.Instance.user.openid, r = $.Instance.user.uid), {
                title: a,
                imageUrl: o,
                query: "inviteName=" + $.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: function(e) {
                    c.Instance.event(s.ShareSuccess, {
                        pos: 0,
                        shareTickets: e.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(e, t) {
            if ("undefined" != typeof wx) {
                var n = t => {
                        W.sInfo.encryptedData = t.encryptedData, W.sInfo.iv = t.iv, W.sInfo.nickName = t.userInfo.nickName, W.sInfo.avatar = t.userInfo.avatarUrl, W.sInfo.sex = t.userInfo.gender, W.sInfo.city = t.userInfo.city, e.runWith(W.sInfo);
                    },
                    i = t => {
                        e.runWith(W.sInfo);
                    };
                wx.login({
                    pkgName: "",
                    force: !1,
                    success: e => {
                        let t = null == e.code ? "" : e.code,
                            a = null == e.anonymousCode ? "" : e.anonymousCode,
                            s = !0;
                        t.length > 5 ? s = !1 : a.length, W.sInfo.wxCode = t, W.sInfo.nCode = a, l.isAnonymous = s, wx.getSetting({
                            success: e => {
                                let t = e.authSetting["scope.userInfo"];
                                !0 === t ? wx.getUserInfo({
                                    withCredentials: !0,
                                    lang: "zh_CN",
                                    success: n,
                                    fail: i,
                                    complete: null
                                }) : i && i();
                            },
                            fail: () => {
                                i && i();
                            },
                            complete: null
                        });
                    },
                    fail: () => {
                        $.Instance.loginError = !0, c.Instance.event(s.userLoginFinish, {
                            logined: !1
                        });
                    },
                    complete: null
                });
            } else {
                $.Instance.user.loadCacheData();
            }
        }
        shareM(e, t, n, i, a, o, r = "") {
            if (l.IgnoreShare) return void c.Instance.event(s.ShareSuccess, {
                pos: e
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = e;
            var h = n,
                d = "";
            null != $.Instance && null != $.Instance.user && (d = $.Instance.user.openid);
            let p = "inviteName=" + $.Instance.user.nickName + "&openid=" + d + "&pos=" + this.sharePos + "&shareTime=" + o + "&inviteCode=" + $.Instance.user.uid + "&shareScene=" + this.sharePos,
                u = i;
            t && (u = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.aldShareAppMessage({
                title: a,
                imageUrl: u,
                query: p,
                path: p,
                success: e => {
                    c.Instance.event(s.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: e.shareTickets,
                        from: h
                    }), this.checkShared = !1, this.curShareTimer = 0, B.finishShare(D.Instance._callShareCfg.pos, !0);
                },
                fail: () => {
                    c.Instance.event(s.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: e => {
                    He.Instance.showTips("请完成分享"), this.checkShared = !1, this.curShareTimer = 0;
                }
            });
        }
        shareVideo(e) {
            var t = Date.now(),
                n = "";
            this.sharePos = e, null != $.Instance && null != $.Instance.user && (n = $.Instance.user.openid);
            let i = "inviteName=" + $.Instance.user.nickName + "&openid=" + n + "&pos=" + this.sharePos + "&shareTime=" + t + "&inviteCode=" + $.Instance.user.uid,
                a = Y.Instance.videoPath;
            if (a && a.length) {
                let e = !1;
                "Douyin" === wx.getSystemInfoSync().appName && (e = !0), this.checkSharedVideo = !0, this.curShareVideoTimer = Date.now(), wx.shareAppMessage({
                    channel: "video",
                    query: i,
                    path: i,
                    extra: {
                        videoPath: a,
                        videoTopics: l.videoTopics
                    },
                    success: e => {
                        this.checkSharedVideo && (setTimeout(() => {
                            B.finishShareVideo(this.sharePos);
                        }, 100), this.checkSharedVideo = !1, this.curShareVideoTimer = 0);
                    },
                    fail: e => {
                        if (this.checkSharedVideo) {
                            let t = "请完成视频分享";
                            e && e.errMsg && -1 === e.errMsg.indexOf("cancel") && (t = "分享视频失败"), He.Instance.showTips(t, 2e3), this.checkSharedVideo = !1, this.curShareVideoTimer = 0;
                        }
                    },
                    cancel: e => {
                        this.checkSharedVideo && (He.Instance.showTips("请完成视频分享", 2e3), this.checkSharedVideo = !1, this.curShareVideoTimer = 0);
                    }
                });
            }
        }
        showVideo(e, t, n = "") {
            if (this.lastEndVideoAdTime > 0) {
                let e = 1e3 * 7 - (Date.now() - this.lastEndVideoAdTime);
                if (e > 0) return e = Math.ceil(e / 1e3), void He.Instance.showTips("间隔时间太短，请等待" + e + "秒");
            }
            if ("undefined" == typeof wx) return D.Instance.onShowAdCompleted(e), c.Instance.event(s.ShowAdCompleted, e), void c.Instance.event(s.CloseShowAd, e);
            var i = "2f2959ef8lj810vdfa";
            null != t && t.length && (i = t), this.showPos = e;
            wx.getSystemInfoSync().SDKVersion;
            wx.createRewardedVideoAd && (null == this.rewardedVideoAd && (this.rewardedVideoAd = wx.createRewardedVideoAd({
                adUnitId: i
            }), this.rewardedVideoAd.onClose(t => {
                a.fetchingVideoAd = !1, t && t.isEnded || void 0 === t ? (D.Instance.onShowAdCompleted(e), c.Instance.event(s.ShowAdCompleted, this.showPos), c.Instance.event(s.CloseShowAd, this.showPos), this.lastEndVideoAdTime = Date.now(), c.Instance.event(s.FinishVideoAd, this.showPos), this.report(b.watchADComplete)) : (c.Instance.event(s.CloseShowAd, this.showPos), this.report(b.watchADExit)), V.Instance.startAll();
            }), this.rewardedVideoAd.onError(e => {
                if (!a.fetchingVideoAd) return;
                a.fetchingVideoAd = !1, c.Instance.event(s.FetchVideoFail, this.showPos);
                let t = D.Instance._videoCount,
                    n = "cnt=" + t + ":code=" + (e.errCode ? e.errCode : "0") + ":msg=" + (e.errMsg || "");
                j.Instance.report(b.loadVideoError, {
                    info: n,
                    count: t
                });
            }), this.rewardedVideoAd.onLoad(() => {
                a.fetchingVideoAd = !1;
                let e = D.Instance._videoCount;
                j.Instance.report(b.videoSuccess, {
                    info: e
                });
            })), this.rewardedVideoAd.adUnitId = i, a.fetchingVideoAd = !0, this.rewardedVideoAd.load().then(() => {
                this.rewardedVideoAd.show(), V.Instance.stopAll(), a.fetchingVideoAd = !1;
            }).catch(e => {
                this.rewardedVideoAd.load().then(() => {
                    a.fetchingVideoAd = !1;
                });
            }));
        }
        showBanner(e, t, n, i, o, r = 0, h = 0, d = 0) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            let p = "1lkgj15h9bc718fbdn";
            null != t && (p = t);
            var u = !1;
            Date.now() - this.lastFetchBannerTime < 2e3 ? u = !1 : this.bannerShowCount >= l.vGameInfo.bCount ? u = !0 : Date.now() - this.lastFetchBannerTime >= 1e3 * l.vGameInfo.bTimer && (u = !0), (u || this.bannerError || !this.bannerLoadFinish) && null != this.bannerAd && (this.bannerAd.lxbannerLoadFinish ? (this.bannerAd.hide(), this.bannerAdPre = this.bannerAd) : this.bannerAd.destroy(), this.bannerAd = null, this.bannerRes = null), this.bannerError = !1, this.showBannerPos = e;
            a.windowHeight > 375 && (r = r / 375 * a.windowHeight, h = h / 375 * a.windowHeight);
            let g = 10;
            d = d * (2 * a.windowHeight / Laya.stage.height) / 2, this.bannerShowInfo.hAlign = n, this.bannerShowInfo.vAlign = i, this.bannerShowInfo.pinY = d, this.bannerShowInfo.xOffset = r, this.bannerShowInfo.yOffset = h;
            let m = (t, n) => {
                t.show().then(() => {
                    setTimeout(() => {
                        c.Instance.event(s.ShowBannerCompleted, e);
                    }, n);
                }).catch(e => {});
            };
            if (null == this.bannerAd) this.bannerShowCount = 1, this.lastFetchBannerTime = Date.now(), this.bannerZeroHeightCount = 0, this.bannerAd = wx.createBannerAd({
                adUnitId: p,
                style: {
                    left: 0,
                    top: 2e3,
                    width: 208
                }
            }), this.bannerAd.lxHide = !1, this.bannerAd.onError(e => {
                this.bannerAdPre ? (this.bannerAd.destroy(), this.bannerAd = this.bannerAdPre, this.bannerAd.lxHide = !1, this.bannerError = !1, this.bannerLoadFinish = !0, g = 0, m(this.bannerAd, g), this.adjustBanner()) : this.bannerError = !0;
            }), this.bannerAd.onResize(e => {
                this.bannerRes = e, this.adjustBanner();
            }), this.bannerLoadFinish = !1, this.bannerAd.lxbannerLoadFinish = !1, this.bannerAd.onLoad(() => {
                this.bannerLoadFinish = !0, this.bannerAd.lxbannerLoadFinish = !0, this.bannerAd.lxHide || m(this.bannerAd, g);
            });
            else {
                this.bannerAd.lxHide = !1, this.bannerRes && this.adjustBanner(), g = 0, m(this.bannerAd, g), this.bannerShowCount++;
            }
            this.bannerAd.style && (this.bannerAd.style.width = 208);
        }
        adjustBanner() {
            let e = this.bannerShowInfo.hAlign,
                t = this.bannerShowInfo.vAlign,
                n = this.bannerShowInfo.pinY,
                i = this.bannerShowInfo.xOffset,
                s = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let o = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            let r = this.bannerAd.style.left,
                h = this.bannerAd.style.top,
                l = o.width,
                c = o.height;
            l < 208 && (c = (l = 208) / 16 * 9), c <= 0 && (c = l / 16 * 9), 0 == e ? (r = 0 + i, B.getDeviceRatio() > 2 && (r += 20)) : 1 == e ? r = .5 * (a.windowWidth - l) + i : 2 == e && (r = a.windowWidth - l + i, B.getDeviceRatio() > 2 && (r -= 20)), 0 == t ? h = 0 + s : 1 == t ? h = .5 * (a.windowHeight - c) + s : 2 == t && (h = a.windowHeight - c + s, n > 0 && n < h && (h = n + 2)), r == this.bannerAd.style.left && h == this.bannerAd.style.top || (this.bannerAd.style.left = r, this.bannerAd.style.top = h);
        }
        hideBanner() {
            null != this.bannerAd && (this.bannerAd.hide(), this.bannerAd.lxHide = !0);
        }
        report(e, t) {
            wx.aldSendEvent && wx.aldSendEvent(e, t);
        }
        showFriendRank(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "rank",
                type: e,
                openid: $.Instance.user.openid,
                info: t
            });
        }
        hideFriendRank(e) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "hideRank",
                type: e,
                openid: $.Instance.user.openid,
                info: ""
            });
        }
        showFriendRankPage(e, t) {}
        queryRank(e, t, n) {}
        uploadGradeData(e) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "gradeData",
                type: "send",
                openid: $.Instance.user.openid,
                info: e
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                if (Date.now() - this.curShareTimer >= l.ShareTickTimer) {
                    let e = !(!D.Instance._callShareCfg || !D.Instance._callShareCfg.fromVideoFail);
                    B.finishShare(D.Instance._callShareCfg.pos, !0, e);
                } else He.Instance.showTips("请完成分享");
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onCheckShareVideo() {
            if (this.checkSharedVideo && this.curShareVideoTimer > 0) {
                Date.now() - this.curShareVideoTimer >= l.ShareTickTimer ? B.finishShareVideo(this.sharePos) : He.Instance.showTips("请完成视频分享"), this.curShareVideoTimer = 0, this.checkSharedVideo = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare(), this.onCheckShareVideo();
            }, 10);
        }
        isLowDevice() {
            return !1;
        }
        reportAnalytics(e) {}
        postToOpenDataMessage(e, t) {}
        updataScoreInfo() {}
        hasOpenAD() {
            return !0;
        }
        showInterstitialAd(e, t, n, i) {}
        setLoadingProgress(e) {}
        showModal(e) {}
    }
    W.sInfo = {};
    class z {
        constructor() {
            this.bannerAd = null, this.bannerShowInfo = {}, this.checkShared = !0, this.bannerLoadError = !1, this.info = {}, this.loginParams = {}, this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0, this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null, this.curShareTimer = null, this.lastEndVideoAdTime = 0, this.info = z.sInfo, this.loginParams = null, "undefined" != typeof wx && (Laya.MiniAdpter.window.wx.aldOnShareAppMessage(this.onShareAppMessage), Laya.MiniAdpter.window.wx.showShareMenu({
                withShareTicket: !0,
                success: function() {},
                fail: function() {}
            }), c.Instance.on(s.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage(e) {
            let t = g.DefaultShare,
                n = _.Instance.getVideoShareCfg(g.DefaultShare),
                i = B.getShareInfoByCfg(n),
                a = i.shareContent,
                o = i.imgUrl,
                r = 0,
                h = "";
            return null != $.Instance && null != $.Instance.user && (h = $.Instance.user.openid, r = $.Instance.user.uid), {
                title: a,
                imageUrl: o,
                query: "inviteName=" + $.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: e => {
                    c.Instance.event(s.ShareSuccess, {
                        pos: 0,
                        shareTickets: e.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(e, t) {
            if ("undefined" != typeof wx) {
                var n = t => {
                        z.sInfo.encryptedData = t.encryptedData, z.sInfo.iv = t.iv, z.sInfo.nickName = t.userInfo.nickName, z.sInfo.avatar = t.userInfo.avatarUrl, z.sInfo.sex = t.userInfo.gender, z.sInfo.city = t.userInfo.city, e.runWith(z.sInfo);
                    },
                    i = t => {
                        e.runWith(z.sInfo);
                    };
                wx.login({
                    success: e => {
                        z.sInfo.wxCode = e.code, wx.getSetting({
                            success: e => {
                                let t = e.authSetting["scope.userInfo"];
                                !0 === t ? wx.getUserInfo({
                                    withCredentials: !0,
                                    lang: "zh_CN",
                                    success: n,
                                    fail: i,
                                    complete: null
                                }) : i && i();
                            },
                            fail: () => {
                                i && i();
                            },
                            complete: null
                        });
                    },
                    fail: () => {
                        $.Instance.loginError = !0, c.Instance.event(s.userLoginFinish, {
                            logined: !1
                        });
                    },
                    complete: null,
                    pkgName: l.packageName
                });
            } else {
                $.Instance.user.loadCacheData();
            }
        }
        shareM(e, t, n, i, a, o, r = "") {
            if (l.IgnoreShare) return void c.Instance.event(s.ShareSuccess, {
                pos: e
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = e;
            var h = n,
                d = "";
            null != $.Instance && null != $.Instance.user && (d = $.Instance.user.openid);
            let p = "inviteName=" + $.Instance.user.nickName + "&openid=" + d + "&pos=" + this.sharePos + "&shareTime=" + o + "&inviteCode=" + $.Instance.user.uid + "&shareScene=" + this.sharePos,
                u = i;
            t && (u = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.aldShareAppMessage({
                title: a,
                imageUrl: u,
                query: p,
                path: p,
                ald_desc: r || "",
                success: e => {
                    c.Instance.event(s.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: e.shareTickets,
                        from: h
                    });
                },
                fail: () => {
                    c.Instance.event(s.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: e => {
                    "undefined" == typeof wx || D.Instance.wxCheck() || wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    }), this.checkShared = !1, this.curShareTimer = 0;
                }
            }), Laya.timer.clear(this, this.onCheckShare);
        }
        showVideo(e, t, n = "") {
            if (this.lastEndVideoAdTime > 0) {
                let e = 1e3 * 7 - (Date.now() - this.lastEndVideoAdTime);
                if (e > 0) return e = Math.ceil(e / 1e3), void He.Instance.showTips("间隔时间太短，请等待" + e + "秒");
            }
            if ("undefined" == typeof wx) return D.Instance.onShowAdCompleted(e), c.Instance.event(s.ShowAdCompleted, e), void c.Instance.event(s.CloseShowAd, e);
            var i = "ed955b0eef1704ee699eee78ed6f257c";
            null != t && t.length && (i = t), this.showPos = e;
            wx.getSystemInfoSync().SDKVersion;
            wx.createRewardedVideoAd && (null == this.rewardedVideoAd && (this.rewardedVideoAd = wx.createRewardedVideoAd({
                adUnitId: i
            }), this.rewardedVideoAd.onClose(t => {
                a.fetchingVideoAd = !1, t && t.isEnded || void 0 === t ? (D.Instance.onShowAdCompleted(e), c.Instance.event(s.ShowAdCompleted, this.showPos), c.Instance.event(s.CloseShowAd, this.showPos), this.lastEndVideoAdTime = Date.now(), c.Instance.event(s.FinishVideoAd, this.showPos), this.report(b.watchADComplete)) : (c.Instance.event(s.CloseShowAd, this.showPos), this.report(b.watchADExit)), V.Instance.startAll();
            }), this.rewardedVideoAd.onError(e => {
                a.fetchingVideoAd && (a.fetchingVideoAd = !1, c.Instance.event(s.FetchVideoFail, this.showPos), this.report(b.loadVideoError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                }));
            }), this.rewardedVideoAd.onLoad(() => {
                a.fetchingVideoAd = !1;
            })), this.rewardedVideoAd.adUnitId = i, a.fetchingVideoAd = !0, this.rewardedVideoAd.load().then(() => {
                a.fetchingVideoAd = !1, this.rewardedVideoAd.show(), V.Instance.stopAll();
            }).catch(e => {
                a.fetchingVideoAd = !1, this.report(b.loadVideoError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                });
            }));
        }
        showBanner(e, t, n, i, o, r = 0, h = 0, d = 0, p = !1) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            var u = "adunit-d13e8f659d0a764f";
            null != t && (u = t), u = "a40e442b011c8a41a682b3db156b6bd2";
            var g = !1;
            Date.now() - this.lastFetchBannerTime < 2e3 ? g = !1 : this.bannerShowCount >= l.vGameInfo.bCount ? g = !0 : Date.now() - this.lastFetchBannerTime >= 1e3 * l.vGameInfo.bTimer && (g = !0), (g || this.bannerLoadError) && null != this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null, this.bannerRes = null), this.bannerLoadError = !1, this.showBannerPos = e;
            let m = 300;
            (m = m / 375 * a.windowWidth) > 300 && (m = 300), a.windowWidth > 375 && (r = r / 375 * a.windowWidth, h = h / 375 * a.windowWidth);
            let f = 10;
            a.windowHeight, Laya.stage.height;
            d = d * a.windowWidth / Laya.stage.width, this.bannerShowInfo.hAlign = n, this.bannerShowInfo.vAlign = i, this.bannerShowInfo.pinY = d, this.bannerShowInfo.xOffset = r, this.bannerShowInfo.yOffset = h;
            let y = (t, n) => {
                t.show().then(() => {
                    setTimeout(() => {
                        c.Instance.event(s.ShowBannerCompleted, e);
                    }, n), j.Instance.report(b.showBanner, {
                        bannerPos: e,
                        adUnitID: this.bannerAd.adUnitId
                    });
                }).catch(e => {});
            };
            if (null == this.bannerAd) {
                this.bannerShowCount = 1, this.lastFetchBannerTime = Date.now();
                let e = 0,
                    t = 0;
                m = 300, t = .5 * (a.windowWidth - m), e = a.windowHeight - 72;
                let n = 0;
                Laya.stage.height / Laya.stage.width > 2 && (n = 100 / 2436 * Laya.stage.width), e -= n, this.bannerAd = wx.createBannerAd({
                    adUnitId: u,
                    style: {
                        left: t,
                        top: e,
                        width: m
                    }
                }), this.bannerAd.lxHide = !1, this.bannerAd.onError(e => {
                    this.report(b.loadBannerError, {
                        errorCode: e.errCode,
                        errMsg: e.errMsg
                    }), this.bannerLoadError = !0;
                }), this.bannerAd.onResize(e => {
                    this.report(b.loadBanner, {
                        duration: (Date.now() - this.lastFetchBannerTime) / 1e3
                    }), this.bannerRes = e, this.adjustBanner();
                }), this.bannerAd.lxbannerLoadFinish = !1, this.bannerAd.onLoad(() => {
                    this.bannerAd.lxbannerLoadFinish = !0, this.bannerAd.lxHide || y(this.bannerAd, f);
                });
            } else {
                this.bannerAd.lxHide = !1, this.bannerRes && this.adjustBanner(), f = 0, y(this.bannerAd, f), this.bannerShowCount++;
            }
            this.bannerAd.style && (this.bannerAd.style.width = m);
        }
        adjustBanner() {
            let e = this.bannerShowInfo.hAlign,
                t = this.bannerShowInfo.vAlign,
                n = this.bannerShowInfo.pinY,
                i = this.bannerShowInfo.xOffset,
                o = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let r = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            if (0 == e ? this.bannerAd.style.left = 0 + i : 1 == e ? this.bannerAd.style.left = .5 * (a.windowWidth - r.width) + i : 2 == e && (this.bannerAd.style.left = a.windowWidth - r.width + i), 0 == t) this.bannerAd.style.top = 0 + o;
            else if (1 == t) this.bannerAd.style.top = .5 * (a.windowHeight - r.height) + o;
            else if (2 == t) {
                let e = 0;
                Laya.stage.height / Laya.stage.width > 2 && (e = 100 / 2436 * Laya.stage.width), this.bannerAd.style.top = a.windowHeight - r.height + o - e, n > 0 && n < this.bannerAd.style.top && (this.bannerAd.style.top = n + 2);
            }
            let h = (this.bannerAd.style.top + r.height) * Laya.stage.width / a.windowWidth,
                l = this.bannerAd.style.top * Laya.stage.width / a.windowWidth;
            c.Instance.event(s.BannerPosChange, {
                ADPos: this.showBannerPos,
                bottom: h,
                top: l,
                BannerAD: this.bannerAd
            });
        }
        hideBanner() {
            null != this.bannerAd && (this.bannerAd.hide(), this.bannerAd.lxHide = !0);
        }
        report(e, t) {
            wx.aldSendEvent && wx.aldSendEvent(e, t);
        }
        postToOpenDataMessage(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "",
                type: e,
                data: t,
                openid: $.Instance.user.openid
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                if (Date.now() - this.curShareTimer >= l.ShareTickTimer) {
                    let e = !(!D.Instance._callShareCfg || !D.Instance._callShareCfg.fromVideoFail);
                    B.finishShare(D.Instance._callShareCfg.pos, !0, e);
                } else if ("undefined" != typeof wx && !D.Instance.wxCheck()) {
                    let e = "分享到不同群才能获得奖励!";
                    0 === this.sharePos && (e = ""), e.length && wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    });
                }
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 100);
        }
        isLowDevice() {
            return j.isAndroid && j.isLowDevice;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {
            this.postToOpenDataMessage(I.updataScoreInfo, e);
        }
        shareVideo(e) {}
        hasOpenAD() {
            return !0;
        }
        showInterstitialAd(e, t, n, i) {}
        setLoadingProgress(e) {}
        showModal(e) {}
    }
    z.sInfo = {},
        function(e) {
            e.BigAdDataChange = "BigAdDataChange", e.nativeBannerChange = "nativeBannerChange", e.ADBannerShow = "ADBannerShow", e.IconADDataChange = "IconADDataChange";
        }(v || (v = {}));
    class K {
        constructor() {
            this.unitIdPre = null, this.nativeAd = null, this.bigAD = null, this.iconAD = null, this.bigUnitIdPre = null, this.showBannerCount = 0, this.lastShowTime = 0, this.closeADCount = 0, this.retryNativeTime = 0, this.retryBigTime = 0, this.retryIconTime = 0;
        }
        static get Instance() {
            return null === K._instance && (K._instance = new K(), K._instance.lastShowTime = Date.now()), K._instance;
        }
        canShowOppoAD() {
            return !(this.closeADCount > 5) && ("undefined" != typeof qg && j.IsOppo());
        }
        doShowAD() {
            this.showBannerCount++, this.lastShowTime = Date.now();
        }
        checkUpdateADData() {
            return !this.canShowOppoAD() || !!(this.nativeAd && this.nativeAd.adClick || this.showBannerCount > l.vGameInfo.oppoADInfo.bannerCount || Date.now() - this.lastShowTime > 1e3 * l.vGameInfo.oppoADInfo.bannerTime) && (this.refreashADData(!0), !0);
        }
        preloadADData() {
            this.refreashADData(!0), this.refeashBigADData(!0);
        }
        refreashADData(e = !1) {
            if (!this.canShowOppoAD()) return;
            if (!e && this.retryNativeTime > 3) return;
            e && (this.retryNativeTime = 0);
            let t = this.getNextPosId(["", ""], this.unitIdPre);
            if (this.nativeAd) {
                if (this.nativeAd.isLoading) return;
                this.nativeAd.destroy();
            }
            this.nativeAd = qg.createNativeAd({
                posId: t
            }), this.nativeAd.onLoad(e => {
                this.showBannerCount = 0, this.unitIdPre = t, this.nativeAd.isLoading = !1, this.nativeAd.adList = e.adList, c.Instance.event(v.nativeBannerChange);
            }), this.nativeAd.onError(e => {
                this.nativeAd.isLoading = !1, this.nativeAd && (this.nativeAd.destroy(), this.nativeAd = null, Laya.timer.once(100, this, this.refreashADData));
            }), this.nativeAd.posId = t, this.nativeAd.isLoading = !0, this.nativeAd.load();
        }
        refeashBigADData(e = !1) {
            if (!this.canShowOppoAD()) return;
            if (!e && this.retryBigTime > 3) return;
            e && (this.retryBigTime = 0);
            let t = this.getNextPosId(["", ""], this.bigUnitIdPre);
            if (this.bigAD) {
                if (this.bigAD.isLoading) return;
                this.bigAD.destroy();
            }
            this.bigAD = qg.createNativeAd({
                posId: t
            }), this.bigAD.onLoad(e => {
                this.bigUnitIdPre = t, this.bigAD.adList = e.adList, c.Instance.event(v.BigAdDataChange), this.bigAD.isLoading = !1;
            }), this.bigAD.onError(e => {
                this.bigAD && (this.bigAD.destroy(), this.bigAD = null, Laya.timer.once(500, this, this.refeashBigADData)), this.bigAD.isLoading = !1;
            }), this.bigAD.isLoading = !0, this.bigAD.posId = t, this.bigAD.load();
        }
        refeashIconADData(e = !1) {
            if (!this.canShowOppoAD()) return;
            if (!e && this.retryIconTime > 3) return;
            e && (this.retryIconTime = 0);
            if (this.iconAD) {
                if (this.bigAD.isLoading) return;
                this.iconAD.destroy();
            }
            this.iconAD = qg.createNativeAd({
                posId: "141336"
            }), this.iconAD.onLoad(e => {
                this.iconAD.adList = e.adList, c.Instance.event(v.IconADDataChange), this.iconAD.isLoading = !1;
            }), this.iconAD.onError(e => {
                this.iconAD && (this.iconAD.destroy(), this.iconAD = null, Laya.timer.once(1e3, this, this.refeashIconADData)), this.iconAD.isLoading = !1;
            }), this.iconAD.isLoading = !0, this.iconAD.posId = "141336", this.iconAD.load();
        }
        getNextPosId(e, t) {
            if (t)
                for (let n = 0; n < e.length; n++)
                    if (e[n] == t) {
                        e.splice(n, 1);
                        break;
                    }
            return e[A.getRandom(0, e.length - 1)];
        }
        reportAdShow(e, t) {
            this.canShowOppoAD() && t && t.length && (1 === e ? this.nativeAd && this.nativeAd.reportAdShow({
                adId: t
            }) : 2 === e && this.bigAD && this.bigAD.reportAdShow({
                adId: t
            }));
        }
        reportAdClick(e, t) {
            this.canShowOppoAD() && t && t.length && (1 === e ? this.nativeAd && this.nativeAd.reportAdClick({
                adId: t
            }) : 2 === e && this.bigAD && this.bigAD.reportAdClick({
                adId: t
            }));
        }
        doCloseByUser() {
            this.closeADCount += 1;
        }
    }
    K._instance = null;
    class q extends T {
        constructor() {
            if (super(), this.bannerAd = null, this.bannerAdPre = null, this.bannerZeroHeightCount = 0, this.bannerShowInfo = {}, this.bannerError = !1, this.bannerLoadFinish = !1, this.checkShared = !0, this.curShareTimer = 0, this.bannerCloseByUserCount = 0, this.showInAdCount = 0, this.checkSharedVideo = !0, this.curShareVideoTimer = 0, this.info = {}, this.loginParams = {}, this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0, this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd1 = null, this.mta = null, this.lastEndVideoAdTime = 0, this.reVideoPreCount = 0, this.rewardedVideoAd = null, this.rewardedVideoAdPre = null, this.interstitialAd = null, this.lastInterstitialAdTime = 0, this.adInit = -1, this.info = q.sInfo, this.loginParams = null, "undefined" == typeof qg) return;
            c.Instance.on(s.GetFocus, this, this.onGameFocus), c.Instance.on(s.OverDayEvent, this, this.resetOverDay), this.initAd(), this.loadOppoData();
            let e = $.Instance.user.playerInfo.login_date;
            !1 === d.isToday(e) && this.resetOverDay();
        }
        initAd() {
            return this.adInit > 0 || 0 != this.adInit && ("undefined" != typeof qg && qg.initAdService({
                appId: l.appId,
                isDebug: !0,
                success: e => {
                    this.adInit = 1, R.once(2e3, this, () => {
                        this.doAdPreLoad();
                    });
                },
                fail: e => {
                    this.adInit = -1;
                },
                complete: e => {}
            }), this.adInit = 0, !1);
        }
        saveOppoData() {
            let e = Laya.LocalStorage.getJSON("OppoADData");
            e && (this.bannerCloseByUserCount = e.bannerCloseByUserCount, this.showInAdCount = e.showInAdCount);
        }
        loadOppoData() {
            Laya.LocalStorage.setJSON("OppoADData", {
                bannerCloseByUserCount: this.bannerCloseByUserCount,
                showInAdCount: this.showInAdCount
            });
        }
        resetOverDay() {
            this.showInAdCount = 0, this.lastInterstitialAdTime = 0, this.bannerCloseByUserCount = 0;
        }
        doAdPreLoad() {
            this.adInit > 0 && (this.showVideo(0, 0, "", !0), K.Instance.preloadADData());
        }
        onShareAppMessage(e) {}
        sdkLogin(e, t) {
            if ("undefined" != typeof qg) {
                qg.login({
                    pkgName: "",
                    success: t => {
                        let n = t.data,
                            i = "";
                        n && n.token ? i = n.token : t.token && (i = n.token), q.sInfo.wxCode = i, (t => {
                            q.sInfo.iv = t.uid || "", q.sInfo.nickName = t.nickName || "", q.sInfo.avatar = t.avatar || "";
                            let n = 0;
                            t.sex && ("m" == t.sex.toLowerCase() ? n = 1 : "f" == t.sex.toLowerCase() && (n = 2)), q.sInfo.sex = n, e.runWith(q.sInfo);
                        })(t);
                    },
                    fail: () => {
                        $.Instance.loginError = !0, c.Instance.event(s.userLoginFinish, !1); {
                            let e = {
                                title: "温馨提示",
                                showCancel: !1,
                                content: "您还没有登录帐号，请先完成登录哦~",
                                confirmText: "确定",
                                success: e => {
                                    window.GameMain.doLoginAction();
                                }
                            };
                            j.Instance.showModal(e);
                        }
                    },
                    complete: null
                });
            } else {
                $.Instance.user.loadCacheData();
            }
        }
        share(e, t, n, i, a, s, o = "") {}
        shareVideo(e) {}
        showInterstitialAd(e, t = "", n = "") {
            if (this.showInAdCount >= 8) return;
            if ("undefined" == typeof qg) return;
            let i = !0,
                a = 30;
            if (this.showInAdCount < 4 && (a = 60), this.lastInterstitialAdTime > 0 && Date.now() - this.lastInterstitialAdTime <= 1e3 * a && (i = !1), i && qg.createInsertAd) {
                let e = () => {
                    this.interstitialAd && this.interstitialAd.show();
                };
                this.interstitialAd || (this.interstitialAd = qg.createInsertAd({
                    posId: "136356"
                }), this.interstitialAd.onError(e => {}), this.interstitialAd.onLoad(() => {
                    e();
                }), this.interstitialAd.onShow(() => {
                    this.showInAdCount += 1, this.lastInterstitialAdTime = Date.now(), this.saveOppoData(), this.hideBanner();
                })), this.interstitialAd.adUnitId = "136356", this.interstitialAd && this.interstitialAd.load();
            }
        }
        getNextPosId(e, t) {
            if (t)
                for (let n = 0; n < e.length; n++)
                    if (e[n] == t) {
                        e.splice(n, 1);
                        break;
                    }
            return e[A.nextNumber(0, e.length - 1)];
        }
        showVideo(e, t, n = "", i = !1) {
            if (qg.createRewardedVideoAd) {
                let t = ["136352", "136353", "136354"];
                if (i) {
                    if (this.rewardedVideoAd || this.rewardedVideoAdPre) return;
                    let e = this.getNextPosId(t, null);
                    return this.rewardedVideoAd1 = qg.createRewardedVideoAd({
                        posId: e
                    }), this.rewardedVideoAd1.onError(e => {
                        this.reVideoPreCount += 1, this.reVideoPreCount < 5 && R.once(2e3, this, () => {
                            this.showVideo(0, 0, "", !0);
                        });
                    }), this.rewardedVideoAd1.posId = e, this.rewardedVideoAd1.onLoad(() => {
                        this.rewardedVideoAdPre = this.rewardedVideoAd1;
                    }), void this.rewardedVideoAd1.load();
                }
                if (!this.initAd()) return void He.Instance.showTips("获取视频失败");
                if ("undefined" == typeof qg) return c.Instance.event(s.ShowAdCompleted, e), void c.Instance.event(s.CloseShowAd, e);
                this.showPos = e;
                let n = () => {
                        this.rewardedVideoAd && this.rewardedVideoAd.show(), V.Instance.stopAll();
                    },
                    o = e => {
                        a.fetchingVideoAd = !1, this.rewardedVideoAdPre ? (this.rewardedVideoAdPre.show(), V.Instance.stopAll()) : c.Instance.event(s.FetchVideoFail, this.showPos);
                    },
                    r = e => {
                        e && e.isEnded || void 0 === e ? (D.Instance.onShowAdCompleted(this.showPos), c.Instance.event(s.ShowAdCompleted, this.showPos), c.Instance.event(s.CloseShowAd, this.showPos)) : c.Instance.event(s.CloseShowAd, this.showPos), V.Instance.startAll();
                    };
                if (null == this.rewardedVideoAd && this.rewardedVideoAdPre) return this.rewardedVideoAd = this.rewardedVideoAdPre, this.rewardedVideoAd.onClose(r), this.rewardedVideoAd.onError(o), void n();
                this.rewardedVideoAd && (this.rewardedVideoAd != this.rewardedVideoAdPre && (this.rewardedVideoAd.offLoad(), this.rewardedVideoAd.offError(), this.rewardedVideoAd.offClose(), this.rewardedVideoAd.destroy()), this.rewardedVideoAd = null);
                let h = null;
                this.rewardedVideoAdPre && this.rewardedVideoAdPre.posId && (h = this.rewardedVideoAdPre.posId);
                let l = this.getNextPosId(t, h);
                null == this.rewardedVideoAd && (this.rewardedVideoAd = qg.createRewardedVideoAd({
                    posId: l
                }), this.rewardedVideoAd.onClose(r), this.rewardedVideoAd.onError(o), this.rewardedVideoAd.onLoad(() => {
                    n(), a.fetchingVideoAd = !1, this.rewardedVideoAdPre = this.rewardedVideoAd;
                })), this.rewardedVideoAd.posId = l, a.fetchingVideoAd = !0, this.rewardedVideoAd.load();
            }
        }
        showBannerAd2() {
            if (!(this.bannerCloseByUserCount > 5) && "undefined" != typeof qg && qg.createBannerAd) {
                let e = "136355";
                this.bannerAd || (this.bannerAd = qg.createBannerAd({
                    posId: e
                }), this.bannerAd.onError(e => {}), this.bannerAd.onHide(e => {
                    this.bannerAd.lxHide = !0;
                }), this.bannerAd.onShow(() => {
                    this.bannerAd.lxHide && this.bannerAd.hide();
                })), this.bannerAd.adUnitId = e, this.bannerAd && (this.bannerAd.lxHide = !1, this.bannerAd.show());
            }
        }
        showBanner(e, t, n, i, a, s = 0, o = 0, r = 0) {
            this.showBannerAd2();
        }
        adjustBanner() {}
        hideBanner() {
            null != this.bannerAd && (this.bannerAd.hide(), this.bannerAd.lxHide = !0);
        }
        report(e, t) {
            "undefined" != typeof qg && qg.aldSendEvent && qg.aldSendEvent(e, t);
        }
        showFriendRank(e, t) {}
        hideFriendRank(e) {}
        showFriendRankPage(e, t) {}
        queryRank(e, t, n) {
            F.Instance.getRankList(e).then(e => {
                n.runWith({
                    res: e
                });
            }).catch(e => {});
        }
        uploadGradeData(e) {}
        onCheckShare() {}
        onCheckShareVideo() {}
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare(), this.onCheckShareVideo();
            }, 10);
        }
        isLowDevice() {
            return !1;
        }
        reportAnalytics(e) {}
    }
    q.sInfo = {};
    class Q {
        constructor() {
            this.bannerAd = null, this.bannerShowInfo = {}, this.checkShared = !0, this.bannerLoadError = !1, this.lastInterstitialAdTime = 0, this.interstitialAd = null, this.info = {}, this.loginParams = {}, this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0, this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null, this.curShareTimer = null, this.lastEndVideoAdTime = 0, this.info = Q.sInfo, this.loginParams = null;
        }
        onShareAppMessage(e) {
            let t = g.DefaultShare,
                n = _.Instance.getVideoShareCfg(g.DefaultShare),
                i = B.getShareInfoByCfg(n),
                a = i.shareContent,
                o = i.imgUrl,
                r = 0,
                h = "";
            return null != $.Instance && null != $.Instance.user && (h = $.Instance.user.openid, r = $.Instance.user.uid), {
                title: a,
                imageUrl: o,
                query: "inviteName=" + $.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: e => {
                    c.Instance.event(s.ShareSuccess, {
                        pos: 0,
                        shareTickets: e.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(e, t) {
            e.runWith(Q.sInfo);
        }
        shareM(e, t, n, i, a, o, r = "") {
            if (l.IgnoreShare) return void c.Instance.event(s.ShareSuccess, {
                pos: e
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = e;
            var h = n,
                d = "";
            null != $.Instance && null != $.Instance.user && (d = $.Instance.user.openid);
            let p = "inviteName=" + $.Instance.user.nickName + "&openid=" + d + "&pos=" + this.sharePos + "&shareTime=" + o + "&inviteCode=" + $.Instance.user.uid + "&shareScene=" + this.sharePos,
                u = i;
            t && (u = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.aldShareAppMessage({
                title: a,
                imageUrl: u,
                query: p,
                path: p,
                ald_desc: r || "",
                success: e => {
                    c.Instance.event(s.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: e.shareTickets,
                        from: h
                    });
                },
                fail: () => {
                    c.Instance.event(s.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: e => {
                    "undefined" == typeof wx || D.Instance.wxCheck() || wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    }), this.checkShared = !1, this.curShareTimer = 0;
                }
            }), Laya.timer.clear(this, this.onCheckShare);
        }
        showVideo(e, t, n = "") {
            if ("undefined" == typeof qttGame || !qttGame.showVideo) return;
            let i = {};
            i.index = e, i.gametype = 1, i.rewardtype = 1, V.Instance.stopMusic(), qttGame.showVideo(t => {
                V.Instance.playBgm(), 1 == t ? (D.Instance.onShowAdCompleted(e), c.Instance.event(s.ShowAdCompleted, e), c.Instance.event(s.CloseShowAd, e), this.lastEndVideoAdTime = Date.now(), c.Instance.event(s.FinishVideoAd, e)) : c.Instance.event(s.CloseShowAd, e);
            }, i);
        }
        showBanner(e, t, n, i, s, o = 0, r = 0, h = 0, l = !1) {
            "undefined" != typeof qttGame && qttGame.showBanner && qttGame.showBanner({
                index: e,
                x: 100,
                y: 100,
                w: 100,
                stage_width: a.windowWidth,
                stage_height: a.windowHeight
            });
        }
        adjustBanner() {
            let e = this.bannerShowInfo.hAlign,
                t = this.bannerShowInfo.vAlign,
                n = this.bannerShowInfo.pinY,
                i = this.bannerShowInfo.xOffset,
                o = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let r = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            if (0 == e ? this.bannerAd.style.left = 0 + i + (B.getDeviceRatio() > 2 ? 20 : 0) : 1 == e ? this.bannerAd.style.left = .5 * (a.windowWidth - r.width) + i : 2 == e && (this.bannerAd.style.left = a.windowWidth - r.width + i - (B.getDeviceRatio() > 2 ? 20 : 0)), 0 == t) this.bannerAd.style.top = 0 + o;
            else if (1 == t) this.bannerAd.style.top = .5 * (a.windowHeight - r.height) + o;
            else if (2 == t) {
                let e = 0;
                Laya.stage.height / Laya.stage.width > 2 && (e = 50 / 2436 * Laya.stage.width), this.bannerAd.style.top = a.windowHeight - r.height + o - e, n > 0 && n < this.bannerAd.style.top && (this.bannerAd.style.top = n + 2);
            }
            let h = (this.bannerAd.style.top + r.height) * Laya.stage.width / a.windowWidth,
                l = this.bannerAd.style.top * Laya.stage.width / a.windowWidth;
            c.Instance.event(s.BannerPosChange, {
                ADPos: this.showBannerPos,
                bottom: h,
                top: l,
                BannerAD: this.bannerAd
            });
        }
        hideBanner() {
            "undefined" != typeof qttGame && qttGame.showBanner && qttGame.hideBanner();
        }
        report(e, t) {}
        postToOpenDataMessage(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "",
                type: e,
                data: t,
                openid: $.Instance.user.openid
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                if (Date.now() - this.curShareTimer >= l.ShareTickTimer) {
                    let e = !(!D.Instance._callShareCfg || !D.Instance._callShareCfg.fromVideoFail);
                    B.finishShare(D.Instance._callShareCfg.pos, !0, e);
                } else if ("undefined" != typeof wx && !D.Instance.wxCheck()) {
                    let e = "分享到不同群才能获得奖励!";
                    0 === this.sharePos && (e = ""), e.length && wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    });
                }
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 100);
        }
        isLowDevice() {
            return j.isAndroid && j.isLowDevice;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {
            this.postToOpenDataMessage(I.updataScoreInfo, e);
        }
        shareVideo(e) {}
        hasOpenAD() {
            return !0;
        }
        preLoadInAd() {
            "undefined" != typeof wx && this.showInterstitialAd(1, "", "", !0);
        }
        showInterstitialAd(e, t = "", n = "", i = !1) {
            let a = "adunit-669f1bbb50d78d69";
            1 == e && (a = "adunit-669f1bbb50d78d69");
            let s = !0;
            this.lastInterstitialAdTime > 0 && Date.now() - this.lastInterstitialAdTime <= 2e4 && (s = !1), "undefined" != typeof wx && s && wx.createInterstitialAd && (this.interstitialAd || (this.interstitialAd = wx.createInterstitialAd({
                adUnitId: a
            }), this.interstitialAd.onClose(e => {
                this.lastInterstitialAdTime = Date.now();
            }), this.interstitialAd.onError(e => {}), this.interstitialAd.onLoad(() => {})), this.interstitialAd.adUnitId = a, !i && this.interstitialAd && this.interstitialAd.show().catch(e => {}));
        }
        setLoadingProgress(e) {}
        showModal(e) {}
        hideheziAd() {}
        showheziAd() {}
        showADCloseBtn() {}
        hideADCloseBtn() {}
    }
    Q.sInfo = {};
    class j {
        static get Instance() {
            if (null == j._instance) switch (l.Platform) {
                case t.Wechat:
                    "undefined" != typeof wx ? j._instance = new X() : j._instance = new T();
                    break;
                case t.TouTiao:
                    "undefined" != typeof wx ? j._instance = new W() : j._instance = new T();
                    break;
                case t.QQ:
                    "undefined" != typeof wx ? j._instance = new z() : j._instance = new T();
                    break;
                case t.Oppo:
                    "undefined" != typeof qg ? (j.isQG = !0, j._instance = new q()) : j._instance = new T();
                    break;
                case t.Qutoutiao:
                    "undefined" != typeof qttGame ? j._instance = new Q() : j._instance = new T();
                    break;
                default:
                    j._instance = new T();
            }
            return j._instance;
        }
        static IsTencentGame() {
            return l.Platform == t.Wechat || l.Platform == t.QQ;
        }
        static IsWeChat() {
            return l.Platform == t.Wechat;
        }
        static IsWeb() {
            return l.Platform == t.Web;
        }
        static IsTouTiao() {
            return l.Platform == t.TouTiao;
        }
        static IsQQ() {
            return l.Platform == t.QQ;
        }
        static IsOppo() {
            return l.Platform == t.Oppo;
        }
        static IsQutoutiao() {
            return l.Platform == t.Qutoutiao;
        }
        static canShowWXOpenDomain() {
            return !!B.onMobile() && (!(!j.IsTencentGame() || !l.SupportOpenDomain) && "undefined" != typeof wx);
        }
        static isLong() {
            return !(Laya.stage.height / Laya.stage.width < 2);
        }
        static shouldShowTReommend() {
            return !!this.IsTouTiao() && ("undefined" != typeof wx && void 0 !== wx.createMoreGamesButton && !(this.isIos && !l.vGameInfo.tIosRecommend));
        }
        static shouldShowOPPOReommend() {
            return !!j.IsTouTiao() || !!this.IsOppo() && ("undefined" != typeof qg && void 0 !== qg.navigateToMiniGame && !(!l.vGameInfo.oppoTuiInfo || !l.vGameInfo.oppoTuiInfo.length));
        }
        static getPlatform() {
            return "undefined" != typeof qg ? qg : "undefined" != typeof wx ? wx : null;
        }
        static nodeReport(e, t) {
            a.isNewPlayer && j.Instance.report(e, t);
        }
        static registerQGAldRequest() {
            if ("undefined" != typeof qg && !qg.aldRequest) {
                qg.aldRequest = (e => {
                    let t = e.url,
                        n = e.data;
                    return new Promise((i, a) => {
                        new M((t, n) => {
                            t ? e.fail() : e.success({
                                statusCode: 200,
                                data: n
                            });
                        }).sendGet(t, n, "text", e.header);
                    });
                }); {
                    let e = {},
                        t = "https://glog.aldwx.com/config/app.json";
                    new M((e, t) => {}).sendGet(t, e, "text");
                }
            }
        }
        static onShow(e, t) {
            return j.IsQutoutiao() && window.document.addEventListener("visibilitychange", n => {
                window.document.hidden ? t && t(null) : e && e(null);
            }), "undefined" != typeof qg ? (qg.onShow && qg.onShow(e), void(qg.onHide && qg.onHide(t))) : "undefined" != typeof wx ? (Laya.MiniAdpter.window.wx.onShow(e), void Laya.MiniAdpter.window.wx.onHide(t)) : void 0;
        }
        static vibrateShort() {
            "undefined" == typeof wx || wx.vibrateShort({
                success: null,
                fail: null,
                complete: null
            });
        }
        static installShortCut() {
            "undefined" != typeof qg && qg.installShortcut({
                success: function() {
                    He.Instance.showTips("添加成功下次可以在直接在桌面图标打开了!");
                },
                fail: function(e) {
                    He.Instance.showTips("添加桌面图标失败");
                },
                complete: function() {}
            });
        }
    }
    j.isQG = !1, j.shouldReBuild = !1;
    class J {
        constructor() {
            this.uid = 0, this.nickName = "玩家", this.avatar = "https://game.lexun99.com/sanguo/game/head/timg5.png", this.token = "", this.session_key = "", this.openid = "", this.authorized = !1, this.city = "", this.gender = 0, this.playerInfo = {}, this.isDefaultData = !0;
        }
        setUid(e) {
            this.uid = e;
        }
        loadCacheData() {
            if (!this.uid) {
                let e = Laya.LocalStorage.getJSON("uid");
                e && (this.uid = e.uid);
            }
            var e = null;
            if (null !== (e = l.recoverData ? Laya.LocalStorage.getJSON("user_" + this.uid) : Laya.LocalStorage.getJSON("user_r_" + this.uid)) && "" != e || (e = Laya.LocalStorage.getJSON("user_0")), null == e || "" == e) return !1;
            for (var t in this.isDefaultData = !1, e) this[t] = e[t];
            let n = Laya.LocalStorage.getJSON("skinArr");
            return n && n.length > 0 && (this.playerInfo.skinArr = n), j.IsQutoutiao() && (this.avatar = "http://webgame.lexun99.com/head/timg5.png"), !0;
        }
        saveToStorage() {
            l.recoverData ? Laya.LocalStorage.setJSON("user_" + this.uid, this) : Laya.LocalStorage.setJSON("user_r_" + this.uid, this), Laya.LocalStorage.setJSON("uid", {
                uid: this.uid || 0
            }), Laya.LocalStorage.setJSON("skinArr", [].concat(this.playerInfo.skinArr || []));
        }
        resumePlayerInfoDefault() {
            this.playerInfo = {
                diamond: 0,
                gold: 0
            };
        }
        getPlayerInfo() {
            return this.playerInfo;
        }
    }
    class $ {
        constructor() {
            this.inviteCode = null, this.headIconUrl = "", this.logined = !1, this.loginError = !1, this.isReadData = !1, this.lastSendDataTime = 0, this.saveDataTime = 240, this.flushSaveDataTime = 20, this.m_onlineStartTime = 0, this.user = new J(), this.headIconUrl = "", Laya.timer.loop(1e3 * this.flushSaveDataTime, this, this.doSaveGameData), c.Instance.on(s.OverDayEvent, this, this.resetByOverDay);
        }
        static get Instance() {
            return null == $._instance && ($._instance = new $()), $._instance;
        }
        resetByOverDay() {
            let e = Laya.Browser.now(),
                t = this.user.playerInfo;
            t.login_date = e, t.dayGetMoneyNum = 0, t.dayNotTry = !1, t.showGift = !1, t.dayBattleCount = 0, t.taskData = null, t.showedReliveShare = !1;
        }
        doSaveGameData(e = !1, t = !1) {
            if (!this.isReadData) return;
            let n = t,
                i = Laya.Browser.now();
            i - this.lastSendDataTime > 1e3 * this.saveDataTime && (this.lastSendDataTime = i, n = !0), n && (e = !0), Laya.timer.clear(this, this.realSaveData), e ? this.realSaveData(n, i) : Laya.timer.once(1e3, this, this.realSaveData, [n, i]);
        }
        realSaveData(e = !1, t = 0) {
            Laya.timer.clear(this, this.realSaveData);
            let n = Laya.Browser.now();
            if (this.user.playerInfo.save_time = n, this.user.playerInfo.ver = l.ClientVer, this.user.saveToStorage(), l.recoverData && e && l.hasLogin) {
                let e = JSON.stringify(Object.assign({}, $.Instance.user.playerInfo));
                F.Instance.updataGameData(e).catch(e => {});
            }
        }
        static saveGameData(e = !1, t = !1) {
            $.Instance.doSaveGameData(e, t);
        }
        readDataInfo(e) {
            if (this.isReadData) return;
            l.recoverData || (e = null), this.user.isDefaultData && e && (this.user.playerInfo = Object.assign({}, e)), this.user.isDefaultData = !1, this.isReadData = !0;
            let t = this.user.playerInfo.login_date;
            !1 === d.isToday(t) && this.resetByOverDay(), this.doSaveGameData();
        }
        get gold() {
            return this.user.playerInfo.gold || (this.user.playerInfo.gold = 0), "string" == typeof this.user.playerInfo.gold && (this.user.playerInfo.gold = parseInt(this.user.playerInfo.gold)), this.user.playerInfo.gold || 0;
        }
        set gold(e) {
            this.user.playerInfo.gold !== e && (this.user.playerInfo.gold = e, c.Instance.event(s.PlayerGoodsUpdate)), this.user.playerInfo.gold = e;
        }
        get playerInfo() {
            return this.user && !this.user.playerInfo && (this.user.playerInfo = {}), this.user.playerInfo;
        }
        updateWithChangeData(e) {
            if (!this.playerInfo) return;
            let t = this.playerInfo;
            for (let n in e) t[n] += e[n];
            c.Instance.event(s.PlayerGoodsUpdate), this.doSaveGameData();
        }
        get playerScore() {
            return this.playerInfo.playerScore || 0;
        }
        set playerScore(e) {
            this.playerInfo.playerScore = e;
        }
        get skinData() {
            return this.playerInfo.skinData || {};
        }
        set skinData(e) {
            this.playerInfo.skinData = e;
        }
        get usingSkinID() {
            return this.playerInfo.usingSkinID || 0;
        }
        set usingSkinID(e) {
            this.playerInfo.usingSkinID = e;
        }
        get isFirstPlay() {
            return !1 !== this.playerInfo.isFirstPlay && (this.playerInfo.playerScore > 0 || !a.isNewPlayer ? this.playerInfo.isFirstPlay = !1 : this.playerInfo.isFirstPlay = !0), this.playerInfo.isFirstPlay;
        }
        set isFirstPlay(e) {
            this.playerInfo.isFirstPlay = e;
        }
        get battleCount() {
            return this.playerInfo.battleCount || 0;
        }
        set battleCount(e) {
            this.playerInfo.battleCount = e || 0;
        }
        get dayBattleCount() {
            return this.playerInfo.dayBattleCount || 0;
        }
        set dayBattleCount(e) {
            this.playerInfo.dayBattleCount = e || 0;
        }
        get dayNotTry() {
            return this.playerInfo.dayNotTry || !1;
        }
        set dayNotTry(e) {
            this.playerInfo.dayNotTry = e;
        }
        get onlineStartTime() {
            return this.m_onlineStartTime || 0;
        }
        set onlineStartTime(e) {
            this.m_onlineStartTime = e;
        }
        get onlineTime() {
            return this.playerInfo.onlineTime || 0;
        }
        set onlineTime(e) {
            this.playerInfo.onlineTime = e;
        }
        get level() {
            return this.user.playerInfo.level || 1;
        }
        set level(e) {
            this.user.playerInfo.level = e || 1;
        }
        getUUID() {
            let e = Laya.LocalStorage.getJSON("useruuid");
            return e || (e = B.uuid()) && Laya.LocalStorage.setJSON("useruuid", e), e;
        }
    }
    $._instance = null, $.taskRed = !1;
    class Z {
        static get Instance() {
            return null === Z._inistance && (Z._inistance = new Z()), Z._inistance;
        }
        getModelPath(e) {
            return `${this.getResPath()}${e}`;
        }
        getResPath() {
            return E.Instance.threeDResDir + "res/scene/";
        }
        getLevelPath(e) {
            let t = (e - 1) % Z.levelName.length;
            return t > Z.levelName.length && (t = 0), t < 0 && (t = 0), this.getModelPath(Z.levelName[t] + ".lh");
        }
    }
    Z.levelName = ["Full_Level_00_HouseBase", "Full_Level_01_HouseBlue", "Full_Level_02_Resto", "Full_Level_03_FlowerShop", "Full_Level_04_Parking", "Full_Level_05_Beach", "Full_Level_06_Pool", "Full_Level_07_Office", "Full_Level_08_RestoStreet", "Full_Level_09_HouseBeach", "Full_Level_10_TVShop", "Full_Level_11_Cafe", "Full_Level_12_Tower", "Full_Level_13_ArtGallery", "Full_Level_14_Bakery", "Full_Level_15_Construction", "Full_Level_16_KitchenHouse", "Full_Level_17_PicNic"], Z._inistance = null;
    class ee extends Laya.Script3D {
        constructor() {
            super(...arguments), this.offset = new Laya.Vector3(0, 15, -11), this.lerp = .05;
        }
        startFollowTarger(e) {
            this.target = e, Laya.timer.once(1e3, this, () => {
                this.lerp = .2;
            });
        }
        stopFollowTarget() {
            this.target = null;
        }
        onDestroy() {
            super.onDestroy();
        }
        onUpdate() {
            if (super.onUpdate(), !this.owner || !this.target) return;
            let e = this.owner,
                t = e.transform.position;
            Laya.Vector3.add(this.target.transform.position, this.offset, ee.tempVec), Laya.Vector3.lerp(t, ee.tempVec, this.lerp, t), e.transform.position = t;
        }
        showHigh(e) {
            let t = this.owner;
            if (!t) return;
            if (!e) return;
            let n = e.transform.position,
                i = t.transform.position.clone();
            Laya.Tween.to(i, {
                x: n.x,
                y: n.y + 15,
                z: n.z - 11,
                update: new Laya.Handler(this, () => {
                    if (t.destroyed) return;
                    let e = t.transform.position;
                    e.y = i.y, e.z = i.z, e.x = i.x, t.transform.position = e;
                })
            }, 500);
        }
    }
    ee.tempVec = new Laya.Vector3();
    class te {
        static getCommpentInHerit(e, t) {
            let n = e.getComponent(t);
            if (n) return n;
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                if (n = this.getCommpentInHerit(a, t)) return n;
            }
            return null;
        }
        static getCompentsInHerit(e, t, n = []) {
            let i = e.getComponents(t);
            i && i.forEach(e => {
                n.push(e);
            });
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                this.getCompentsInHerit(a, t, n);
            }
            return n;
        }
        static getNodeInHerit(e, t) {
            if (!e) return;
            let n = e.getChildByName(t);
            if (n) return n;
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                if (n = this.getNodeInHerit(a, t)) return n;
            }
            return null;
        }
        static getNodesInHerit(e, t, n = []) {
            if (!e) return [];
            n || (n = []);
            let i = e.getChildByName(t);
            i && n.push(i);
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                n = this.getNodesInHerit(a, t, n);
            }
            return n;
        }
        static getParentByName(e, t) {
            let n = e;
            for (; n && n.name !== t;) n = n.parent;
            return n;
        }
    }
    class ne extends Laya.Script3D {
        onAwake() {
            this.doDisappperAni();
        }
        onDestroy() {
            this.timeLine && (this.timeLine.destroy(), this.timeLine = null), super.onDestroy();
        }
        doDisappperAni() {
            if (!this.owner) return;
            let e = this.owner.transform.getWorldLossyScale();
            this.timeLine = new Laya.TimeLine();
            let t = new Laya.Vector3(e.x, e.y, e.z),
                n = new Laya.Handler(this, () => {
                    if (!this.owner || this.owner.destroyed) return;
                    let e = this.owner,
                        n = e.transform.getWorldLossyScale();
                    n.setValue(t.x, t.y, t.z), e.transform.setWorldLossyScale(n);
                });
            this.timeLine.to(t, {
                x: 1.2 * e.x,
                y: 1.2 * e.y,
                z: 1.2 * e.z,
                update: n
            }, 100, Laya.Ease.linearNone, 100).to(t, {
                x: 0,
                y: 0,
                z: 0,
                update: n
            }, 100, Laya.Ease.linearNone, 200), this.timeLine.play();
        }
    }
    class ie extends Laya.MeshSprite3D {
        constructor() {
            super(...arguments), this.hideTween = null, this.score = 0;
        }
        initMaterial() {
            if (ie.cacheMaterials && ie.cacheMaterials[this.score]) return this.meshRenderer.sharedMaterial = ie.cacheMaterials[this.score], void(this.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE);
            let e = new Laya.UnlitMaterial();
            this.meshRenderer.sharedMaterial = e;
            let t = Laya.Browser.createElement("canvas");
            var n = t.getContext("2d");
            t.width = 256, t.height = 256, n.fillStyle = "rgb(255,255,255)", this.score > 3 && (n.fillStyle = "rgb(255,0,0)"), n.font = "bold 50px 宋体", n.textAlign = "center", n.textBaseline = "center", n.fillText(`+ ${this.score}`, 100, 50, 200);
            let i = new Laya.Texture2D(256, 256);
            i.loadImageSource(t), e.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT, e.albedoTexture = i, this.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE, ie.cacheMaterials[this.score] = e;
        }
        doAni() {
            this.hideTween && (this.hideTween.clear(), this.hideTween = null);
            let e = this.score > 3 ? 1.5 : 1;
            this.transform.setWorldLossyScale(new Laya.Vector3(e, e, e)), Laya.timer.once(1e3, this, this.doHideAni);
        }
        doHideAni() {
            if (this.destroyed) return;
            this.hideTween && (this.hideTween.clear(), this.hideTween = null);
            let e = this.transform.getWorldLossyScale(),
                t = {
                    x: e.x,
                    y: e.y,
                    z: e.z
                };
            this.hideTween = Laya.Tween.to(t, {
                x: 0,
                y: 0,
                z: 0,
                update: new Laya.Handler(this, () => {
                    if (!this || !this.destroyed) return;
                    let e = this.transform.getWorldLossyScale();
                    e.setValue(t.x, t.y, t.z), this.transform.setWorldLossyScale(e);
                })
            }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                this.reset(), ie.recover(this);
            }));
        }
        reset() {
            this.hideTween && (this.hideTween.clear(), this.hideTween = null), Laya.timer.clearAll(this), this.removeSelf();
        }
        static recover(e) {
            e.reset(), e.destroyed || Laya.Pool.recover(`score-${e.score}`, e);
        }
        static getScoreSprite(e) {
            return Laya.Pool.getItemByCreateFun(`score-${e}`, () => {
                let t = new ie(Laya.PrimitiveMesh.createPlane(3, 3));
                return t.score = e, t.initMaterial(), t;
            });
        }
    }
    ie.cacheMaterials = {};
    class ae extends Laya.Script3D {
            constructor() {
                super(...arguments), this.isGold = !1, this.isSpecial = !1, this.showTimeLine = null, this.jumpTimeLine = null, this.rect = new Laya.Rectangle(0, 0, 0, 0), this.canColl = !1, this.isKey = !1, this.hasCollect = !1;
            }
            onAwake() {
                super.onAwake(), this.calcRect(), this.doShowAni();
            }
            onDestroy() {
                this.showTimeLine && (this.showTimeLine.destroy(), this.showTimeLine = null), this.jumpTimeLine && (this.jumpTimeLine.destroy(), this.jumpTimeLine = null), super.onDestroy();
            }
            checkCollier(e) {
                return !!(e && this.rect && this.canColl) && e.intersects(this.rect);
            }
            initProp(e = !1) {
                this.isSpecial = e;
            }
            doJumpInBagAni(e) {
                if (!this.owner || !e) return;
                let t = this.owner;
                var n = {
                    y: t.transform.position.y,
                    x: t.transform.position.x,
                    z: t.transform.position.z,
                    rotateY: t.transform.localRotationEuler.y,
                    rotateX: t.transform.localRotationEuler.x
                };
                let i = n.y + A.getRandom(.5, 1),
                    a = n.x + A.getRandom(0, .5),
                    s = n.z + A.getRandom(0, .5),
                    o = n.rotateY + A.getRandom(0, 90),
                    r = n.rotateX + A.getRandom(0, 10),
                    h = t.transform.getWorldLossyScale(),
                    l = {
                        x: a,
                        z: s,
                        y: i,
                        scaleX: h.x,
                        scaleY: h.y,
                        scaleZ: h.z
                    };
                this.jumpTimeLine = new Laya.TimeLine(), this.jumpTimeLine.to(n, {
                    y: i,
                    rotateY: o,
                    rotateX: r,
                    update: new Laya.Handler(this, () => {
                        if (!t || t.destroyed) return;
                        let e = t.transform.position,
                            i = t.transform.rotationEuler;
                        e.y = n.y, i.x = n.rotateX, i.y = n.rotateY, t.transform.position = e, t.transform.rotationEuler = i;
                    })
                }, 500, Laya.Ease.linearNone, 0).to(l, {
                    x: e.x,
                    y: e.y,
                    z: e.z,
                    scaleX: 0,
                    scaleY: 0,
                    scaleZ: 0,
                    update: new Laya.Handler(this, () => {
                        if (!t || t.destroyed) return;
                        let e = t.transform.position,
                            n = t.transform.getWorldLossyScale();
                        e.setValue(l.x, l.y, l.z), n.setValue(l.scaleX, l.scaleY, l.scaleZ), t.transform.position = e, t.transform.setWorldLossyScale(n);
                    })
                }, 100, Laya.Ease.linearNone), this.jumpTimeLine.play(), this.showScore();
            }
            showScore() {
                if (this.isKey) return;
                let e = 1;
                this.isSpecial && (e = 10);
                let t = ie.getScoreSprite(e);
                if (t) {
                    this.owner.scene.addChild(t);
                    let e = this.owner.transform.position.clone();
                    e.y += 1, t.transform.position = e, t.transform.rotationEuler = new Laya.Vector3(135, 0, 180), t.doAni();
                }
                c.Instance.event(s.GameScoreChange, e);
            }
            doShowAni() {
                null !== this.showTimeLine && (this.showTimeLine.destroy(), this.showTimeLine = null), this.showTimeLine = new Laya.TimeLine();
                let e = new Laya.Vector3(1, 1, 1),
                    t = new Laya.Handler(this, () => {
                        if (!this.owner || this.owner.destroyed) return;
                        let t = this.owner,
                            n = t.transform.getWorldLossyScale();
                        n.setValue(e.x, e.y, e.z), t.transform.setWorldLossyScale(n);
                    }),
                    n = this.owner,
                    i = n.transform.getWorldLossyScale().clone();
                n.transform.setWorldLossyScale(new Laya.Vector3(0, 0, 0)), this.showTimeLine.to(e, {
                    x: 1.2 * i.x,
                    y: 1.2 * i.y,
                    z: 1.2 * i.z,
                    update: t
                }, 100, Laya.Ease.linearNone, A.getRandom(1e3, 2e3)).to(e, {
                    x: i.x,
                    y: i.y,
                    z: i.z,
                    update: t
                }, 50, Laya.Ease.linearNone, 100), this.showTimeLine.play(), Laya.timer.once(2e3, this, () => {
                    this.canColl = !0;
                });
            }
            calcRect() {
                let e = this.owner;
                if (!e) return;
                let t = e.transform.position.x - .05,
                    n = e.transform.position.z - .05,
                    i = .1,
                    a = .1,
                    s = e.meshRenderer;
                if (null != s) {
                    let e = s.bounds;
                    e && (t = e._boundBox.min.x, n = e._boundBox.min.z, i = e._boundBox.max.x - e._boundBox.min.x, a = e._boundBox.max.z - e._boundBox.min.z);
                }
                this.rect.setTo(t, n, i, a);
            }
        }! function(e) {
            e.idel = "idel", e.move = "move", e.hide = "hide", e.catch = "catch";
        }(L || (L = {})),
        function(e) {
            e.damage = "damage", e.jump = "jump", e.crouch = "crouch", e.wait = "wait", e.nani = "nani", e.run = "run", e.walk = "walk";
        }(C || (C = {}));
    class se extends Laya.Script3D {
        constructor() {
            super(...arguments), this.curMoveDir = new Laya.Vector3(), this.playMoveDir = new Laya.Vector3(0, 0, .12), this.curQut = new Laya.Quaternion(), this.playerSp = null, this.bagSp = null, this._playerState = L.idel, this.rect = new Laya.Rectangle(), this.nextRect = new Laya.Rectangle(), this.showHideAni = null, this.offCarTween = null, this.oldPos = new Laya.Vector3(0, 0, 0), this.moveSpeed = .11, this.isFound = !1, this.car = null, this.showArrow = !1;
        }
        get playerState() {
            return this._playerState;
        }
        set playerState(e) {
            if (this._playerState !== e) {
                let t = this._playerState;
                if (this._playerState = e, t === L.move && e === L.hide ? this.doShowHideAni(!0) : t === L.hide && e === L.move && this.doShowHideAni(!1), e === L.move) this.playAni("run");
                else if (e === L.hide) this.playAni("crouch");
                else if (e === L.catch) {
                    let e = te.getNodeInHerit(this.owner, "CardBoard");
                    e && (e.active = !1), this.playAni("damage");
                }
            }
        }
        get position() {
            return this.owner ? this.owner.transform.position : new Laya.Vector3(0, 0, 0);
        }
        get canFind() {
            return this._playerState === L.move;
        }
        onAwake() {
            super.onAwake(), this.playerSp = this.owner, this.addBag(), this.addArrow(), this.playAni("wait"), this.moveSpeed = .11 + 1e-5 * $.Instance.level;
        }
        get boundBox() {
            if (!this.owner || this.owner.destroyed) return this.rect;
            let e = this.owner,
                t = e.transform.position.x - 2,
                n = e.transform.position.z - 2;
            return this.rect.setTo(t, n, 4, 4), this.rect;
        }
        get bagPos() {
            return this.bagSp ? this.bagSp.transform.position : new Laya.Vector3(0, 0, 0);
        }
        onDestroy() {
            this.playerSp = null, this.unRegiestEvent(), super.onDestroy();
        }
        onEnable() {
            super.onEnable(), this.regiestEvent();
        }
        onDisable() {
            super.onDisable(), this.unRegiestEvent();
        }
        addArrow() {
            Laya.Sprite3D.load(Z.Instance.getModelPath("arrow.lh"), Laya.Handler.create(this, e => {
                if (!e) return;
                if (!this.owner) return;
                let t = te.getNodeInHerit(this.owner, "ArrowParent");
                if (!t) return;
                let n = e.clone();
                t.addChild(n), this.arrowParent = t, this.arrowParent.active = !1;
            }));
        }
        addBag() {
            Laya.Sprite3D.load(Z.Instance.getModelPath("Bags.lh"), Laya.Handler.create(this, e => {
                if (!e) return;
                if (!this.playerSp) return;
                let t = te.getNodeInHerit(this.playerSp, "BagParent");
                if (!t) return;
                let n = e.getChildAt(0);
                n && (this.bagSp = n.clone(), t.addChild(this.bagSp));
            }));
        }
        regiestEvent() {
            c.Instance.on(s.moveInputChange, this, this.onMoveChange), c.Instance.on(s.moveInputChangeStart, this, this.onMoveStart), c.Instance.on(s.moveInputChangeEnd, this, this.onMoveEnd);
        }
        unRegiestEvent() {
            c.Instance.off(s.moveInputChange, this, this.onMoveChange), c.Instance.off(s.moveInputChangeStart, this, this.onMoveStart), c.Instance.off(s.moveInputChangeEnd, this, this.onMoveEnd);
        }
        onMoveStart() {
            this.playerState = L.move;
        }
        onMoveEnd() {
            this.playerState === L.move && (this.playerState = L.hide);
        }
        onMoveChange(e, t = -1) {
            this.playMoveDir && (-1 === t && (t = .02, j.isIos && (t = .037), Laya.timer.delta > 30 ? t = .037 : Laya.timer.delta > 50 ? t = .04 : Laya.timer.delta > 100 && (t = .045)), t += .01, Laya.Vector3.normalize(e, this.curMoveDir), Laya.Quaternion.rotationLookAt(this.curMoveDir, se.upVec, this.curQut), this.curQut.invert(this.curQut), Laya.Quaternion.slerp(this.playerSp.transform.rotation, this.curQut, t, this.curQut), this.curQut = new Laya.Quaternion(0, this.curQut.y, 0, this.curQut.w), this.playerSp.transform.rotation = this.curQut);
        }
        onUpdate() {
            if (super.onUpdate(), !Pe.Instance.isGamePause && this.playerSp && !this.playerSp.destroyed) {
                if (this.playerState === L.move) {
                    let e = this.moveSpeed;
                    this.playMoveDir.z = Math.min(50, Laya.timer.delta) / 16 * e * .1 + .9 * this.playMoveDir.z;
                    let t = this.playerSp.transform.position.x,
                        n = this.playerSp.transform.position.z;
                    this.playerSp.transform.position.cloneTo(this.oldPos), this.playerSp.transform.translate(this.playMoveDir);
                    let i = this.playerSp.transform.position.x - .5,
                        a = this.playerSp.transform.position.z - .5;
                    if (this.nextRect.setTo(i, a, 1, 1), !Pe.Instance.checkRoleMove(this.nextRect))
                        if (this.nextRect.setTo(t - .5, a, 1, 1), Pe.Instance.checkRoleMove(this.nextRect)) {
                            let e = this.playerSp.transform.position;
                            e.x = t, this.playerSp.transform.position = e;
                        } else if (this.nextRect.setTo(i, n - .5, 1, 1), Pe.Instance.checkRoleMove(this.nextRect)) {
                        let e = this.playerSp.transform.position;
                        e.z = n, this.playerSp.transform.position = e;
                    } else {
                        let e = this.playerSp.transform.position;
                        this.oldPos.cloneTo(e), this.playerSp.transform.position = e;
                    }
                }
                if (this.showArrow && this.car && this.arrowParent) {
                    Laya.Vector3.subtract(this.car.transform.position, this.playerSp.transform.position, se.tempVec1);
                    let e = Laya.Vector3.scalarLengthSquared(se.tempVec1);
                    if (e < 16) return void(this.arrowParent.active = !1);
                    this.arrowParent.active || (this.arrowParent.active = !0);
                    let t = 16 / e;
                    t < .2 && (t = .2), Laya.Vector3.normalize(se.tempVec1, se.tempVec1), Laya.Quaternion.rotationLookAt(se.tempVec1, se.upVec, se.tempRot1), se.tempRot1.invert(se.tempRot1), this.arrowParent.transform.rotation = se.tempRot1.clone(), Laya.Vector3.lerp(this.playerSp.transform.position, this.car.transform.position, t, se.tempVec2), this.arrowParent.transform.position = se.tempVec2.clone();
                }
            }
        }
        doShowHideAni(e) {
            if (!this.owner) return;
            null !== this.showHideAni && this.showHideAni.reset(), this.showHideAni || (this.showHideAni = new Laya.TimeLine());
            let t = te.getNodeInHerit(this.owner, "CardBoard"),
                n = t.transform.getWorldLossyScale().clone(),
                i = new Laya.Handler(this, () => {
                    if (!t || t.destroyed) return;
                    let e = t.transform.getWorldLossyScale();
                    e.setValue(n.x, n.y, n.z), t.transform.setWorldLossyScale(e);
                });
            this.showHideAni.to(n, {
                x: 2.5,
                y: 2.5,
                z: 2.5,
                update: i
            }, 100, Laya.Ease.linearNone).to(n, {
                x: e ? 2 : 0,
                y: e ? 2 : 0,
                z: e ? 2 : 0,
                update: i
            }, e ? 50 : 100, Laya.Ease.linearNone), this.showHideAni.play();
        }
        doCatched() {
            this.playerState = L.catch, c.Instance.event(s.PlayerCatched);
        }
        playAni(e) {
            let t = te.getCommpentInHerit(this.owner, Laya.Animator);
            t && t.crossFade(e, .2);
        }
        clear() {
            this.car = null, this.arrowParent = null, this.clearOffCarAni(), this.unRegiestEvent(), this.showHideAni && (this.showHideAni.destroy(), this.showHideAni = null), this.playerSp = null, this.bagSp = null;
        }
        doOffCarAni() {
            if (this.clearOffCarAni(), !this.owner) return;
            let e = this.owner,
                t = e.transform.getWorldLossyScale().clone();
            e.transform.setWorldLossyScale(new Laya.Vector3(0, 0, 0));
            let n = {
                x: 0,
                y: 0,
                z: 0
            };
            this.offCarTween = Laya.Tween.to(n, {
                x: t.x,
                y: t.y,
                z: t.z,
                update: new Laya.Handler(this, () => {
                    if (!e || e.destroyed) return;
                    let t = e.transform.getWorldLossyScale();
                    t.setValue(n.x, n.y, n.z), e.transform.setWorldLossyScale(t);
                })
            }, 500, Laya.Ease.linearNone);
        }
        clearOffCarAni() {
            this.offCarTween && (this.offCarTween.clear(), this.offCarTween = null);
        }
    }
    se.tempVec1 = new Laya.Vector3(), se.tempVec2 = new Laya.Vector3(), se.tempRot1 = new Laya.Quaternion(), se.tempRot2 = new Laya.Quaternion(), se.upVec = new Laya.Vector3(0, 1, 0);
    class oe {
        constructor(e, t, n = null) {
            this.position = e && e.clone(), this.normal = t && t.clone(), this.uv = n && n.clone();
        }
    }
    class re {
        static quaternionMVector3(e, t, n = null) {
            let i = 2 * e.x,
                a = 2 * e.y,
                s = 2 * e.z,
                o = e.x * i,
                r = e.y * a,
                h = e.z * s,
                l = e.x * a,
                c = e.x * s,
                d = e.y * s,
                p = e.w * i,
                u = e.w * a,
                g = e.w * s;
            return n || (n = new Laya.Vector3()), n.x = (1 - (r + h)) * t.x + (l - g) * t.y + (c + u) * t.z, n.y = (l + g) * t.x + (1 - (o + h)) * t.y + (d - p) * t.z, n.z = (c - u) * t.x + (d + p) * t.y + (1 - (o + r)) * t.z, n;
        }
        static lerpVector3(e, t, n) {
            return Laya.Vector3.lerp(e, t, n, re.tempVector31), re.tempVector31.clone();
        }
        static lerpVector2(e, t, n) {
            return re.tempVector21.x = e.x + (t.x - e.x) * n, re.tempVector21.y = e.y + (t.y - e.y) * n, re.tempVector21.clone();
        }
        static lerpValue(e, t, n) {
            return e + (t - e) * n;
        }
        static quaternionIsIdentity(e) {
            return 0 === e.x && 0 === e.y && 0 === e.z && 1 === e.w;
        }
        static scaleVec3(e, t) {
            e.x *= t.x, e.y *= t.y, e.z *= t.z;
        }
    }
    re.tempVector31 = new Laya.Vector3(), re.tempVector32 = new Laya.Vector3(), re.tempVector21 = new Laya.Vector2(), re.rightVector = new Laya.Vector3(1, 0, 0);
    class he {
        constructor(e, t, n, i, a, s, o) {
            this.location = null, this.tangent = null, this.up = null, this.scale = null, this.distanceInCurve = 0, this.roll = 0, this.timeInCurve = 0, this._rotation = null, this.location = e.clone(), this.tangent = t.clone(), this.up = n.clone(), this.scale = i.clone(), this.roll = a, this.distanceInCurve = s, this.timeInCurve = o;
        }
        static Lerp(e, t, n) {
            return new he(re.lerpVector3(e.location, t.location, n), re.lerpVector3(e.tangent, t.tangent, n), re.lerpVector3(e.up, t.up, n), re.lerpVector2(e.scale, t.scale, n), re.lerpValue(e.roll, t.roll, n), re.lerpValue(e.distanceInCurve, t.distanceInCurve, n), re.lerpValue(e.timeInCurve, t.timeInCurve, n));
        }
        getBent(e) {
            let t = new oe(e.position, e.normal, e.uv);
            t.position.x = 0, t.position.y = t.position.y * this.scale.y, t.position.z = t.position.z * this.scale.x;
            let n = new Laya.Quaternion();
            Laya.Quaternion.createFromAxisAngle(re.rightVector, this.roll, n), t.position = re.quaternionMVector3(n, t.position), t.normal = re.quaternionMVector3(n, t.normal), Laya.Quaternion.createFromYawPitchRoll(-.5 * Math.PI, 0, 0, n);
            this.rotation;
            return Laya.Quaternion.multiply(this.rotation, n, n), t.normal = re.quaternionMVector3(n, t.normal), t.position = re.quaternionMVector3(n, t.position), Laya.Vector3.add(t.position, this.location, t.position), t.position.x = -t.position.x, t.normal.x = -t.normal.x, Laya.Vector3.normalize(t.normal, t.normal), t;
        }
        get rotation() {
            if (!this._rotation) {
                let e = new Laya.Quaternion();
                Laya.Quaternion.createFromAxisAngle(he._ForwardLH, this.roll, e), re.quaternionMVector3(e, this.up, he.tempVec), Laya.Vector3.cross(he.tempVec, this.tangent, he.tempVec1), Laya.Vector3.normalize(he.tempVec1, he.tempVec), Laya.Vector3.cross(this.tangent, he.tempVec, he.tempVec1), this._rotation = new Laya.Quaternion(), he.tempTangent.setValue(this.tangent.x, this.tangent.y, -this.tangent.z), Laya.Quaternion.rotationLookAt(he.tempTangent, he.tempVec1, this._rotation);
            }
            return this._rotation;
        }
    }
    he.tempTangent = new Laya.Vector3(), he.tempVec = new Laya.Vector3(), he.tempVec1 = new Laya.Vector3(), he._ForwardLH = new Laya.Vector3(0, 0, 1);
    let le = 1 / 30;
    class ce {
        constructor(e, t) {
            this.samples = [], this.length = 0, this.n1 = e, this.n2 = t, this.computeSamples();
        }
        getTangent(e) {
            let t = 1 - e,
                n = t * t,
                i = e * e;
            return Laya.Vector3.scale(this.n1.position, -n, ce.tempVec1), Laya.Vector3.scale(this.n1.direction, 3 * n - 2 * t, ce.tempVec2), Laya.Vector3.scale(this.getInverseDirection(), -3 * i + 2 * e, ce.tempVec3), Laya.Vector3.scale(this.n2.position, i, ce.tempVec4), Laya.Vector3.add(ce.tempVec1, ce.tempVec2, ce.tempVec1), Laya.Vector3.add(ce.tempVec1, ce.tempVec3, ce.tempVec1), Laya.Vector3.add(ce.tempVec1, ce.tempVec4, ce.tempVec1), Laya.Vector3.normalize(ce.tempVec1, ce.tempVec1), ce.tempVec1.clone();
        }
        getUp(e) {
            return re.lerpVector3(this.n1.up, this.n2.up, e);
        }
        getScale(e) {
            return re.lerpVector2(this.n1.scale, this.n2.scale, e);
        }
        getRoll(e) {
            return re.lerpValue(this.n1.roll, this.n2.roll, e);
        }
        computeSamples() {
            this.samples = [], this.length = 0;
            let e = this.getLocation(0);
            for (let t = 0; t < .98; t += le) {
                let n = this.getLocation(t);
                this.length += Laya.Vector3.distance(e, n), e = n, this.samples.push(this.createSample(this.length, t));
            }
            this.length += Laya.Vector3.distance(e, this.getLocation(1)), this.samples.push(this.createSample(this.length, 1));
        }
        createSample(e, t) {
            return new he(this.getLocation(t), this.getTangent(t), this.getUp(t), this.getScale(t), this.getRoll(t), e, t);
        }
        getInverseDirection() {
            let e = this.n2.position.clone();
            return Laya.Vector3.scale(e, 2, e), Laya.Vector3.subtract(e, this.n2.direction, e), e;
        }
        getLocation(e) {
            let t = 1 - e,
                n = t * t,
                i = e * e;
            return Laya.Vector3.scale(this.n1.position, n * t, ce.tempVec1), Laya.Vector3.scale(this.n1.direction, 3 * n * e, ce.tempVec2), Laya.Vector3.scale(this.getInverseDirection(), 3 * t * i, ce.tempVec3), Laya.Vector3.scale(this.n2.position, i * e, ce.tempVec4), Laya.Vector3.add(ce.tempVec1, ce.tempVec2, ce.tempVec1), Laya.Vector3.add(ce.tempVec1, ce.tempVec3, ce.tempVec1), Laya.Vector3.add(ce.tempVec1, ce.tempVec4, ce.tempVec1), ce.tempVec1.clone();
        }
        getSampleAtDistance(e) {
            if (e < 0 || e > this.length) return;
            let t = this.samples[0],
                n = null;
            for (let i = 0; i < this.samples.length; i++) {
                let a = this.samples[i];
                if (a.distanceInCurve >= e) {
                    n = a;
                    break;
                }
                t = a;
            }
            let i = n === t ? 0 : (e - t.distanceInCurve) / (n.distanceInCurve - t.distanceInCurve);
            return he.Lerp(t, n, i);
        }
        getSample(e) {
            if (e < 0 || e > 1) return;
            let t = this.samples[0],
                n = null;
            for (let i = 0; i < this.samples.length; i++) {
                let a = this.samples[i];
                if (a.timeInCurve >= e) {
                    n = a;
                    break;
                }
                t = a;
            }
            let i = n === t ? 0 : (e - t.timeInCurve) / (n.timeInCurve - t.timeInCurve);
            return he.Lerp(t, n, i);
        }
    }
    ce.tempVec1 = new Laya.Vector3(), ce.tempVec2 = new Laya.Vector3(), ce.tempVec3 = new Laya.Vector3(), ce.tempVec4 = new Laya.Vector3();
    class de {
        constructor() {
            this.nodes = [], this.curves = [], this.length = 0, this.isLoop = !1, this.startNode = null, this.endNode = null;
        }
        rebuild() {
            this.curves = [];
            for (let e = 0; e < this.nodes.length - 1; e++) {
                let t = this.nodes[e],
                    n = this.nodes[e + 1],
                    i = new ce(t, n);
                this.curves.push(i);
            }
            this.UpdateAfterCurveChanged();
        }
        getCurves() {
            return this.curves;
        }
        getSample(e) {
            let t = this.getNodeIndexForTime(e);
            return this.curves[t].getSample(e - t);
        }
        getCurve(e) {
            return this.curves[this.getNodeIndexForTime(e)];
        }
        addNode(e) {
            if (this.nodes.push(e), 1 !== this.nodes.length) {
                let t = this.nodes[this.nodes.indexOf(e) - 1],
                    n = new ce(t, e);
                this.curves.push(n);
            }
            this.UpdateAfterCurveChanged();
        }
        updateLoopBinding() {
            this.isLoop ? (this.startNode = this.nodes[0], this.endNode = this.nodes[this.nodes.length - 1]) : (this.startNode = null, this.endNode = null);
        }
        UpdateAfterCurveChanged() {
            this.length = 0, this.curves.forEach(e => {
                this.length += e.length;
            });
        }
        getNodeIndexForTime(e) {
            if (e < 0 || e > this.nodes.length - 1) return;
            let t = Math.floor(e);
            return t === this.nodes.length - 1 && t--, t;
        }
        getSampleAtDistance(e) {
            if (!(e < 0 || e > this.length))
                for (let t in this.curves) {
                    let n = this.curves[t];
                    if (e > n.length && e < n.length + 1e-4 && (e = n.length), !(e > n.length)) return n.getSampleAtDistance(e);
                    e -= n.length;
                }
        }
    }
    class pe {
        constructor(e, t) {
            this.position = e.clone(), this.direction = t.clone(), this.up = new Laya.Vector3(0, 1, 0), this.scale = new Laya.Vector2(1, 1), this.roll = 0;
        }
    }
    class ue {
        static getReversedTriangles(e) {
            let t = e._indexBuffer;
            if (!t) return [];
            let n = [],
                i = t.indexCount / 3,
                a = t.getData();
            for (let e = 0; e < i; e++) n.push(a[3 * e + 1]), n.push(a[3 * e]), n.push(a[3 * e + 2]);
            return n;
        }
        static update(e, t, n, i, a = null) {
            t.reverse();
            let s = n.length,
                o = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL"),
                r = o.vertexStride / 4,
                h = new Float32Array(s * r),
                l = new Uint16Array(t.length),
                c = 0;
            for (let e = 0; e < s; e++) {
                let t = n[e],
                    a = i[e];
                h[c++] = t.x, h[c++] = t.y, h[c++] = t.z, h[c++] = a.x, h[c++] = a.y, h[c++] = a.z;
            }
            for (let e = 0; e < t.length; e += 3) l[e] = t[e], l[e + 1] = t[e + 1], l[e + 2] = t[e + 2];
            e.sharedMesh = Laya.PrimitiveMesh._createMesh(o, h, l);
        }
        static getMeshVertexList(e) {
            let t = [];
            return e.getPositions(t), t;
        }
        static getMeshNormalList(e) {
            let t = [];
            return e.getNormals(t), t;
        }
        static getTriangles(e) {
            let t = e._indexBuffer;
            if (!t) return [];
            let n = [],
                i = t.indexCount / 3,
                a = t.getData();
            for (let e = 0; e < i; e++) n.push(a[3 * e]), n.push(a[3 * e + 1]), n.push(a[3 * e + 2]);
            return n;
        }
        static getMeshUVList(e) {
            let t = [];
            return e.getUVs(t), t;
        }
    }
    var ge, me, fe, ye, Ie, we, Se, ve;
    ! function(e) {
        e[e.Once = 0] = "Once", e[e.Repeat = 1] = "Repeat", e[e.StretchToInterval = 2] = "StretchToInterval";
    }(ge || (ge = {}));
    class Le extends Laya.Component {
        constructor() {
            super(...arguments), this.isDirty = !0, this.useSpline = !0, this.intervalStart = 0, this.intervalEnd = 0, this.curve = null, this.sampleCache = null, this.spline = null, this._source = null, this._mode = ge.Repeat;
        }
        get source() {
            return this._source;
        }
        set source(e) {
            e !== this._source && (this.SetDirty(), this._source = e);
        }
        get mode() {
            return this._mode;
        }
        set mode(e) {
            e !== this.mode && (this.SetDirty(), this._mode = e);
        }
        setInterval(e) {
            this.curve !== e && e && (this.curve = e, this.spline = null, this.useSpline = !1, this.SetDirty());
        }
        ComputeIfNeeded() {
            this.isDirty && this.Compute();
        }
        SetDirty() {
            this.isDirty = !0;
        }
        Compute() {
            switch (this.isDirty = !1, this.mode) {
                case ge.Once:
                    this.fillOnce();
                    break;
                case ge.Repeat:
                    this.fillRepeat();
                    break;
                case ge.StretchToInterval:
                    this.fillStretch();
            }
        }
        setInterval2(e, t, n) {
            this.spline === e && this.intervalStart === t && this.intervalEnd === n || e && (t < 0 || t >= e.length || 0 != n && n <= t || n > e.length || (this.spline = e, this.useSpline = !0, this.curve = null, this.intervalStart = t, this.intervalEnd = n, this.SetDirty()));
        }
        clearCache() {
            B.clearDictionary(this.sampleCache), this.sampleCache = {};
        }
        fillRepeat() {
            let e = this.useSpline ? (0 === this.intervalEnd ? this.spline.length : this.intervalEnd) - this.intervalStart : this.curve.length,
                t = Math.floor(e / this.source.length);
            var n = [],
                i = [];
            for (let e = 0; e < t; e++) this.source.triangles.forEach(t => {
                n.push(t + this.source.vertices.length * e);
            }), i = i.concat(this.source.uv);
            let a = [],
                s = 0;
            for (let e = 0; e < t; e++) this.clearCache(), this.source.vertices.forEach(e => {
                let t = e.position.x - this.source.minX + s,
                    n = null;
                if (this.sampleCache[t]) n = this.sampleCache[t];
                else {
                    if (this.useSpline) {
                        let e = this.intervalStart + t;
                        for (1; e > this.spline.length;) e -= this.spline.length;
                        n = this.spline.getSampleAtDistance(e);
                    } else {
                        if (t > this.curve.length) return;
                        n = this.curve.getSampleAtDistance(t);
                    }
                    this.sampleCache[t] = n;
                }
                a.push(n.getBent(e));
            }), s += this.source.length;
            ue.update(this.meshFilter, n, a.map(e => e.position), a.map(e => e.normal), i);
        }
        fillStretch() {
            let e = [];
            this.clearCache(), this.source.vertices.forEach(t => {
                let n = 0 === this.source.length ? 0 : Math.abs(t.position.x - this.source.minX) / this.source.length,
                    i = null;
                if (this.sampleCache[n]) i = this.sampleCache[n];
                else {
                    if (this.useSpline) {
                        let e = 0 === this.intervalEnd ? this.spline.length - this.intervalStart : this.intervalEnd - this.intervalStart,
                            t = this.intervalStart + e * n;
                        t > this.spline.length && (t = this.spline.length), i = this.spline.getSampleAtDistance(t);
                    } else i = this.curve.getSampleAtDistance(this.curve.length * n);
                    this.sampleCache[n] = i;
                }
                e.push(i.getBent(t));
            }), ue.update(this.meshFilter, [].concat(this.source.triangles), e.map(e => e.position), e.map(e => e.normal));
        }
        clearAll() {
            this.meshFilter = null, this.material = null, this.spline = null, this.curve = null;
        }
        fillOnce() {
            this.clearCache();
            let e = [];
            this.source.vertices.forEach(t => {
                let n = t.position.x - this.source.minX,
                    i = null;
                if (this.sampleCache[n]) i = this.sampleCache[n];
                else {
                    if (this.useSpline) {
                        let e = this.intervalStart + n;
                        if (e > this.spline.length)
                            if (this.spline.isLoop)
                                for (; e > this.spline.length;) e -= this.spline.length;
                            else e = this.spline.length;
                        i = this.spline.getSampleAtDistance(e);
                    } else n > this.curve.length && (n = this.curve.length), i = this.curve.getSampleAtDistance(n);
                    this.sampleCache[n] = i;
                }
                e.push(i.getBent(t));
            }), ue.update(this.meshFilter, [].concat(this.source.triangles), e.map(e => e.position), e.map(e => e.normal));
        }
    }
    class Ce {
        static create(e, t) {
            let n = new Laya.MeshSprite3D();
            return n.name = e, t.addChild(n), n.transform.localPosition = new Laya.Vector3(0, 0, 0), n.transform.localScale = new Laya.Vector3(1, 1, 1), n.transform.localRotation = new Laya.Quaternion(), n.transform.localRotation.identity(), n;
        }
        static Destory(e, t = !1) {
            e.removeSelf(), e.destroy(t);
        }
    }
    class be {
        constructor(e) {
            this.translation = new Laya.Vector3(0, 0, 0), this.rotation = new Laya.Quaternion(), this.scale = new Laya.Vector3(1, 1, 1), this._vertices = null, this._triangles = null, this._minX = 0, this._length = 0, this._mesh = e.clone();
        }
        get uv() {
            return this._uv || this.buildData(), this._uv;
        }
        get mesh() {
            return this._mesh;
        }
        get vertices() {
            return this._vertices || this.buildData(), this._vertices;
        }
        get triangles() {
            return this._triangles || this.buildData(), this._triangles;
        }
        get minX() {
            return this._vertices || this.buildData(), this._minX;
        }
        get length() {
            return this._vertices || this.buildData(), this._length;
        }
        clone() {
            let e = new be(this._mesh);
            return e.translation = this.translation.clone(), e.rotation = this.rotation.clone(), e.scale = this.scale.clone(), e;
        }
        static Build(e) {
            return new be(e);
        }
        Rotate(e) {
            let t = this.clone();
            return t.rotation = e.clone(), t;
        }
        Scale(e) {
            let t = this.clone();
            return t.scale = e.clone(), t;
        }
        Scale2(e, t, n) {
            return this.Scale(new Laya.Vector3(e, t, n));
        }
        buildData() {
            let e = this.scale.x < 0;
            this.scale.y < 0 && (e = !e), this.scale.z < 0 && (e = !e), this._triangles = e ? ue.getReversedTriangles(this.mesh) : ue.getTriangles(this.mesh);
            this._vertices = [];
            let t = ue.getMeshVertexList(this.mesh),
                n = ue.getMeshNormalList(this.mesh);
            this._uv = ue.getMeshUVList(this.mesh);
            for (let e in t) {
                let i = new oe(t[e], n[e]);
                re.quaternionIsIdentity(this.rotation) || (i.position = re.quaternionMVector3(this.rotation, i.position), i.normal = re.quaternionMVector3(this.rotation, i.normal)), 1 === this.scale.x && 1 === this.scale.y && 1 === this.scale.z || (re.scaleVec3(i.position, this.scale), re.scaleVec3(i.normal, this.scale)), 0 === this.translation.x && 0 === this.translation.y && 0 === this.translation.z || Laya.Vector3.add(i.position, this.translation, i.position), this._vertices.push(i);
            }
            this._minX = Number.MAX_VALUE;
            let i = Number.MIN_VALUE;
            for (let e in this._vertices) {
                let t = this.vertices[e].position;
                i = Math.max(i, t.x), this._minX = Math.min(this._minX, t.x);
            }
            this._length = Math.abs(i - this.minX);
        }
        Translate(e) {
            let t = this.clone();
            return t.translation = e, t;
        }
        Translate2(e, t, n) {
            return this.Translate(new Laya.Vector3(e, t, n));
        }
    }
    class ke extends Laya.Component {
        constructor() {
            super(...arguments), this.toUpdate = !1, this.prefabs = [], this.currentPrefabIndex = 0, this.translation = new Laya.Vector3(0, 0, 0), this.rotation = new Laya.Vector3(0, 0, 0), this.scale = new Laya.Vector3(1, 1, 1), this.generateCollider = !0, this.curveSpace = !1, this.mode = ge.StretchToInterval, this.isTrigger = !1, this.isBox = !1, this.meshBenders = [];
        }
        createMeshs() {
            if (this.meshBenders = [], this.prefabs.forEach(e => {
                    let t = new Le(),
                        n = new Laya.Quaternion();
                    e.meshFilter.sharedMesh && (Laya.Quaternion.createFromYawPitchRoll(this.rotation.x, this.rotation.y, this.rotation.z, n), t.source = be.Build(e.meshFilter.sharedMesh).Translate(this.translation).Rotate(n).Scale(this.scale), t.material = e.meshRenderer.material, this.meshBenders.push(t));
                }), !this.meshBenders || !this.meshBenders.length) return;
            for (let e = 0; e < this.generated.numChildren; e++) {
                let t = this.generated.getChildAt(e);
                Ce.Destory(t);
            }
            let e = 0,
                t = 1;
            new Laya.Vector3(), new Laya.Vector3();
            for (; e < this.spline.length;) {
                let n = this.create("segment " + t + "mesh");
                t++;
                let i = this.getBender();
                i.meshFilter = n.meshFilter, n.meshRenderer.material = i.material;
                let a = e,
                    s = Math.min(this.spline.length, e + i.source.length);
                i.setInterval2(this.spline, a, s), i.mode = ge.StretchToInterval, i.ComputeIfNeeded(), e = s;
            }
        }
        create(e) {
            let t = Ce.create(e, this.generated);
            return t.transform.localPosition = new Laya.Vector3(0, .1, 0), t;
        }
        getBender() {
            if (this.meshBenders.length > 0) {
                let e = this.meshBenders[this.currentPrefabIndex];
                return this.currentPrefabIndex++, this.currentPrefabIndex >= this.meshBenders.length && (this.currentPrefabIndex = 0), e;
            }
            return this.meshBenders[0];
        }
        clearAll() {
            this.meshBenders.forEach(e => {
                e.clearAll();
            }), this.meshBenders.length = 0, this.spline = null, this.generated = null, this.prefabs.length = 0;
        }
    }! function(e) {
        e[e.walk = 0] = "walk", e[e.run = 1] = "run", e[e.nani = 2] = "nani", e[e.catched = 3] = "catched";
    }(me || (me = {}));
    class xe extends Laya.Script3D {
        constructor() {
            super(...arguments), this.progress = 0, this.manState = me.walk, this.naniSp = null, this.moveSpeed = .35, this.maxMoveSpeed = .65;
        }
        onAwake() {
            super.onAwake(), this.naniSp = te.getNodeInHerit(this.owner, "Nani"), this.naniSp.active = !1, this.manState = me.walk, this.regiestEvent(), this.moveSpeed = .35 + .001 * $.Instance.level, this.changeSkin();
        }
        onDestroy() {
            this.unregiestEvent(), this.clear(), super.onDestroy();
        }
        regiestEvent() {
            c.Instance.on(s.PlayerCatched, this, this.onPlayerCatch);
        }
        unregiestEvent() {
            c.Instance.off(s.PlayerCatched, this, this.onPlayerCatch);
        }
        onEnable() {
            super.onEnable(), this.lampSprite = te.getNodeInHerit(this.owner, "Lamp_Sprite"), this.playAni(C.walk);
        }
        playAni(e) {
            if (!e || !this.owner) return;
            let t = te.getCommpentInHerit(this.owner, Laya.Animator);
            t && t.play(e);
        }
        onUpdate() {
            super.onUpdate(), Pe.Instance.gameState !== Ie.End && (this.doMove(), this.checkPlayer(), this.doCatchAction());
        }
        doMove() {
            if (this.manState !== me.walk) return;
            if (!this.spline) return;
            this.progress += .001;
            let e = this.progress;
            this.progress > 2 ? (this.progress = 0, e = 0) : this.progress > 1 && (e = 2 - this.progress);
            let t = e * this.spline.length,
                n = this.spline.getSampleAtDistance(t);
            n.location.x = -n.location.x;
            let i = this.owner,
                a = n.rotation;
            a.invert(a), i.transform.localPosition = n.location, i.transform.localRotation = a, this.progress < 1 && i.transform.rotate(new Laya.Vector3(0, 180, 0), !0, !1);
        }
        checkPlayer() {
            this.manState === me.walk && Laya.timer.currFrame % 3 == 0 && this.player && this.player.canFind && this.checkInLamp(this.player.position) && (this.player.isFound = !0, this.doFoundAni());
        }
        doCatchAction() {
            if (!this.player) return;
            if (this.manState !== me.run) return;
            if (this.player.playerState === L.catch) return;
            if (!this.owner) return;
            let e = this.owner,
                t = this.player.position,
                n = e.transform.position;
            Laya.Vector3.subtract(t, n, xe.tempVec1), Laya.Vector3.normalize(xe.tempVec1, xe.tempVec1);
            let i = e.transform.rotation;
            Laya.Quaternion.rotationLookAt(xe.tempVec1, xe.upVec, i), i.invert(i), e.transform.rotation = i, this.moveSpeed = Math.min(this.moveSpeed + 55e-5, this.maxMoveSpeed);
            let a = this.moveSpeed;
            Laya.Vector3.scale(xe.tempVec1, a, xe.tempVec1), Laya.Vector3.add(n, xe.tempVec1, xe.tempVec2), Laya.Vector3.lerp(n, xe.tempVec2, .2, n), e.transform.position = n, (n.x - t.x) * (n.x - t.x) + (n.z - t.z) * (n.z - t.z) < .5 && this.player.doCatched();
        }
        onPlayerCatch() {
            this.manState !== me.walk && (this.manState = me.catched, this.playAni(C.wait));
        }
        checkInLamp(e) {
            if (!this.lampSprite) return !1;
            let t = [],
                n = this.lampSprite.numChildren;
            for (let e = 0; e < n; e++) {
                let n = this.lampSprite.getChildAt(e);
                if (n) {
                    let e = n.transform.position;
                    t.push(e.x), t.push(e.z);
                }
            }
            return !!t.length && A.ptInPolygon(e.x, e.z, t);
        }
        doFoundAni() {
            this.naniSp && (this.naniSp.active = !0), this.playAni(C.nani), this.manState = me.nani, Laya.timer.once(500, this, () => {
                this.naniSp && (this.naniSp.active = !1), this.manState = me.run, this.playAni(C.run);
            });
            let e = this.lampSprite;
            if (!e) return;
            let t = e.meshRenderer.sharedMaterial.clone();
            t.albedoColor = new Laya.Vector4(1, 0, 0, .3), e.meshRenderer.sharedMaterial = t, Pe.Instance.gameScene && Pe.Instance.gameScene.doPlayerFound();
        }
        clear() {
            this.spline = null, this.lampSprite = null, this.player = null;
        }
        changeSkin() {}
    }
    xe.tempVec1 = new Laya.Vector3(), xe.tempVec2 = new Laya.Vector3(), xe.upVec = new Laya.Vector3(0, 1, 0);
    class Ae {
        constructor() {
            this.imageIcon = "skin/img_skin_money1.png", this.isLock = !1, this.skinID = 0, this.type = 0, this.highLight = !1, this.modelType = 1, this.showUnknow = !1, this.tab = 1;
        }
    }
    class _e extends e.item.SkinItemUI {
            constructor() {
                super(...arguments), this.item = null;
            }
            onEnable() {
                this.on(Laya.Event.CLICK, this, this.onItemClick);
            }
            onDisable() {
                this.off(Laya.Event.CLICK, this, this.onItemClick);
            }
            updateView(e) {
                this.item = e, this.preverwImage.skin = e.imageIcon, this.imageHook.visible = !1, this.imageLock.visible = !1, this.itemHighlight.visible = e.highLight, this.preverwImage.visible = !e.isLock, this.unknowImage.visible = e.isLock;
            }
            onItemClick() {
                V.Instance.playUIClick(), this.item && c.Instance.event(s.skinItemClick, this.item.skinID);
            }
        }! function(e) {
            e[e.free = 0] = "free", e[e.gold = 1] = "gold", e[e.grade = 2] = "grade", e[e.sign = 3] = "sign", e[e.treasureBox = 5] = "treasureBox";
        }(fe || (fe = {})),
        function(e) {
            e[e.role = 1] = "role", e[e.car = 2] = "car";
        }(ye || (ye = {}));
    class De {
        constructor() {
            this.carTempSkin = -1, this.roleTempSkin = -1, this.randomProb = 1;
        }
        static get Instance() {
            return null === De._instance && (De._instance = new De()), De._instance;
        }
        getSkinCfg(e) {
            return e > _.Instance.skinCfg.length && (e = 1), _.Instance.skinCfg[e - 1];
        }
        getSkinInfo(e) {
            return ($.Instance.playerInfo.skinArr || [])[e] || {
                type: 0,
                cnt: 0,
                activatedTime: 0
            };
        }
        setSkinInfo(e, t) {
            var n = $.Instance.playerInfo.skinArr || [];
            n[e] = t, $.Instance.playerInfo.skinArr = n, $.Instance.doSaveGameData();
        }
        activeSkin(e) {
            let t = this.getSkinInfo(e);
            t.activatedTime = Date.now(), t.cnt += 1, this.setSkinInfo(e, t);
        }
        get curSkin() {
            return $.Instance.playerInfo.curSkin || 1;
        }
        set curSkin(e) {
            $.Instance.playerInfo.curSkin = e;
        }
        get curCarSkin() {
            return $.Instance.playerInfo.curCarSkin || 10;
        }
        set curCarSkin(e) {
            $.Instance.playerInfo.curCarSkin = e;
        }
        getGradeSkinCfg(e) {
            let t = _.Instance.skinCfg;
            if (t)
                for (let n = 0; n < t.length; n++) {
                    let i = t[n];
                    if (i.conditionType == fe.grade && i.conditionCnt == e) return i;
                }
            return null;
        }
        hasComplete(e) {
            let t = this.getSkinCfg(e),
                n = this.getSkinInfo(e);
            if (t.conditionType == n.type) {
                if (t.conditionType == fe.free) return !0;
                if (t.conditionType == fe.grade) {
                    if ($.Instance.level >= t.conditionCnt) return !0;
                } else if (n.cnt >= t.conditionCnt) return n.activatedTime || (n.activatedTime = Date.now()), !0;
            } else this.setSkinInfo(e, {
                type: t.conditionType,
                cnt: 0
            });
            return !1;
        }
        setTempSkin(e, t) {
            t === ye.car ? this.carTempSkin = e : this.roleTempSkin = e;
        }
        resetTempSkin() {
            this.carTempSkin = -1, this.roleTempSkin = -1;
        }
        getGameSkin() {
            let e = this.curSkin;
            return this.roleTempSkin >= 0 && (e = this.roleTempSkin), this.getSkinCfg(e);
        }
        getCarSkin() {
            let e = this.curCarSkin;
            return this.carTempSkin >= 0 && (e = this.carTempSkin), this.getSkinCfg(e);
        }
        getRandomLockSkinCfg() {
            let e = [],
                t = _.Instance.skinCfg;
            if (t)
                for (let n = 0; n < t.length; n++) {
                    let i = t[n];
                    this.hasComplete(i.id) || 1 !== i.modelType || e.push(i);
                }
            if (e.length > 0) {
                return e[Math.floor(Math.random() * (e.length - 1))];
            }
            return null;
        }
        getViewPages() {
            let e = _.Instance.skinCfg.map(e => {
                let t = new Ae();
                t.skinID = e.id;
                let n = this.hasComplete(e.id);
                return t.isLock = !n, t.imageIcon = e.img, t.type = e.conditionType, t.showUnknow = 1 === e.tab, t.modelType = e.modelType, t.tab = e.tab, t;
            });
            return [e.filter(e => 1 === e.tab), e.filter(e => 2 === e.tab), e.filter(e => 3 === e.tab)];
        }
        getRoleProgressInfo() {
            let e = _.Instance.skinCfg,
                t = $.Instance.level - 1 - 1;
            t < 0 && (t = 0);
            let n = 0;
            for (let i = 1; i < e.length; i++) {
                let a = e[i];
                if (a && 2 == a.conditionType) {
                    if (t < a.conditionCnt) return {
                        id: a.id,
                        num: t - n,
                        total: a.conditionCnt - n,
                        cfg: a
                    };
                    n = a.conditionCnt;
                }
            }
            return null;
        }
        getTBSkinList() {
            let e = [],
                t = _.Instance.skinCfg;
            if (t)
                for (let n = 0; n < t.length; n++) {
                    let i = t[n];
                    this.hasComplete(i.id) || 5 !== i.conditionType || e.push(i);
                }
            return e;
        }
    }
    De._instance = null;
    class Be {
        static remove(e, t) {
            if (e)
                for (let n = 0; n < e.length; n++) e[n] === t && (e.splice(n, 1), n--);
        }
        static randomObjList(e, t) {
            if (!e.length || !t) return null;
            if (e.length < t) return e;
            let n = [];
            for (; n.length < t;) {
                let t = Be.randomObj(e);
                if (!t) break; - 1 === n.indexOf(t) && n.push(t);
            }
            return n;
        }
        static randomObj(e) {
            if (!e.length) return null;
            let t = A.getRandom(0, e.length - 1);
            return t < e.length - 1 ? e[t] : e[0];
        }
    }
    class Te {
        constructor() {
            this.isWarn = !1, this.inited = !1, this.totalKey = 0, this.currenKey = 0, this.currentPropCount = 0, this.totalPropCount = 0, this.score = 0, this.tempCarID = -1, this.tempRoleID = -1, this.carChange = !1;
        }
        get progress() {
            return this.currentPropCount / this.totalPropCount;
        }
        loadScene() {
            this.scene || Laya.Scene3D.load(Z.Instance.getModelPath("game.ls"), Laya.Handler.create(this, e => {
                if (!e) return;
                this.scene = e;
                let t = this.scene.getChildByName("Main Camera");
                t && (this.cameraContorller = t.addComponent(ee)), this.loadLevel($.Instance.level);
            }));
        }
        loadLevel(e) {
            Laya.Sprite3D.load(Z.Instance.getLevelPath($.Instance.level), Laya.Handler.create(this, e => {
                e && this.scene && (this.levelSp = e.clone(), this.scene.addChild(this.levelSp), this.initCollidWalls(), this.addPlayerCar(), c.Instance.event(s.prepareLevelFinish));
            }));
        }
        addPlayer() {
            let e = De.Instance.getGameSkin();
            e && 1 === e.modelType || (e = De.Instance.getSkinCfg(1)), e.id !== this.tempRoleID ? (this.tempRoleID = e.id, Laya.Sprite3D.load(Z.Instance.getModelPath(`${e.name}.lh`), Laya.Handler.create(this, e => {
                if (!e) return;
                if (!this.scene) return;
                let t = new Laya.Sprite3D(),
                    n = e.clone();
                n.transform.rotationEuler = new Laya.Vector3(0, 180, 0), t.addChild(n), this.scene.addChild(t);
                let i = te.getNodeInHerit(this.playerCar, "playerPos");
                if (i) {
                    let e = i.transform.position.clone();
                    t.transform.position = e;
                }
                this.cameraContorller && this.cameraContorller.stopFollowTarget(), this.cameraContorller && this.cameraContorller.startFollowTarger(t), this.player && (this.player.clear(), this.player && this.player.owner && this.player.owner.destroy(), this.player = null), this.player = t.addComponent(se), this.player.car = i, this.inited ? this.policeList && this.policeList.length && this.policeList.forEach(e => {
                    e.player = this.player;
                }) : (this.inited = !0, this.doWallRoofDisapper(), this.initProps(), this.addPolice()), this.doShowPlayerAndCar(!0);
            }))) : (this.player.car = this.playerCar, this.doShowPlayerAndCar());
        }
        doShowPlayerAndCar(e = !1) {
            this.playerCar && this.player && this.player.owner && (this.carChange ? (this.carChange = !1, this.player.owner.active = !1, Laya.timer.once(500, this, () => {
                this.player.owner.active = !0, this.player.doOffCarAni();
            })) : e && this.player.doOffCarAni());
        }
        addPlayerCar() {
            let e = De.Instance.getCarSkin();
            e && 2 === e.modelType || (e = De.Instance.getSkinCfg(10)), e.id !== this.tempCarID ? (this.tempCarID = e.id, this.carChange = !0, Laya.Sprite3D.load(Z.Instance.getModelPath(`${e.name}.lh`), Laya.Handler.create(this, e => {
                if (!e) return;
                if (!this.scene) return;
                let t = e.clone();
                this.scene.addChild(t), this.playerCar && (this.playerCar.destroy(), this.playerCar = null), this.playerCar = t;
                let n = te.getNodeInHerit(this.levelSp, "PlayerCar");
                if (n) {
                    t.transform.position = n.transform.position.clone(), t.transform.rotation = n.transform.rotation.clone();
                    let e = te.getCommpentInHerit(this.playerCar, Laya.Animator);
                    e && (e.speed = .7), this.addPlayer();
                }
            }))) : this.playerCar && this.addPlayer();
        }
        addPolice() {
            let e = [];
            if (this.levelSp)
                for (let t = 0; t < this.levelSp.numChildren; t++) {
                    let n = this.levelSp.getChildAt(t);
                    n && n.name.startsWith("Spline_") && e.push(n);
                }
            this.policeList = [];
            let t = A.getRandom(1, e.length);
            for (; t < e.length;) {
                let t = Be.randomObj(e);
                t && Be.remove(e, t);
            }
            e.forEach(e => {
                let t = _.Instance.splineCfg[e.name];
                if (!t || !t.nodes.length) return;
                let n = new de();
                t.nodes.forEach(e => {
                    n.addNode(new pe(new Laya.Vector3(e.position.x, e.position.y, e.position.z), new Laya.Vector3(e.direction.x, e.direction.y, e.direction.z)));
                });
                let i = new ke();
                i.generated = e, i.spline = n, i.scale.setValue(5, 1, 10), i.mode = ge.Repeat;
                let a = Math.floor($.Instance.level / 10),
                    s = "PoliceMan.lh";
                (a %= 4) > 0 && (s = `PoliceMan${a}.lh`), Laya.Sprite3D.load(Z.Instance.getModelPath("Effect.lh"), Laya.Handler.create(this, e => {
                    let t = e.getChildByName("linePattle");
                    if (!t) return;
                    if (!i.generated) return;
                    i.prefabs = [t], i.createMeshs();
                    let a = e.getChildByName("Cone"),
                        o = a.clone(),
                        r = a.clone();
                    i.generated.addChild(o), i.generated.addChild(r), o.transform.localScale = new Laya.Vector3(.1, .1, .1), r.transform.localScale = new Laya.Vector3(.1, .1, .1);
                    let h = i.spline.getSample(0);
                    h.location.x = -h.location.x, o.transform.localPosition = h.location.clone();
                    let l = i.spline.getSampleAtDistance(i.spline.length);
                    l.location.x = -l.location.x, r.transform.localPosition = l.location.clone();
                    let c = o.transform.position;
                    c.y += .15, o.transform.position = c, (c = r.transform.position).y += .15, r.transform.position = c, Laya.Sprite3D.load(Z.Instance.getModelPath(s), Laya.Handler.create(this, e => {
                        if (!i.generated) return;
                        if (!e) return;
                        let t = e.clone(),
                            a = t.addComponent(xe);
                        a.spline = n, a.player = this.player, this.policeList.push(a), i.generated.addChild(t), t.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1)), i.spline = null, i.generated = null, i.clearAll();
                    }));
                }));
            });
        }
        refreshSkin() {
            this.addPlayerCar();
        }
        destoryScene() {
            this.policeList && (this.policeList.length = 0), this.propList && (this.propList.length = 0), this.keyList && (this.keyList.length = 0), this.cameraContorller && this.cameraContorller.stopFollowTarget(), this.cameraContorller = null, this.collidWall && (this.collidWall.length = 0), this.playerCar = null, this.player && (this.player.clear(), this.player.owner.destroy(!0), this.player = null), this.levelSp && (this.levelSp.destroy(!0), this.levelSp = null), this.scene && (this.scene.destroy(!0), this.scene = null);
        }
        addSceneTo(e) {
            e.addChild(this.scene);
        }
        doWallRoofDisapper() {
            if (!this.levelSp) return;
            let e = te.getNodeInHerit(this.levelSp, "Walls&RoofDisappear");
            if (e && e.numChildren) {
                let t = e.numChildren;
                for (let n = 0; n < t; n++) {
                    e.getChildAt(n).addComponent(ne);
                }
            }
        }
        initProps() {
            if (!this.levelSp) return;
            this.propList = [];
            let e = te.getNodeInHerit(this.levelSp, "Props_Hierarchy");
            if (e && e.numChildren) {
                let t = e.numChildren;
                for (let n = 0; n < t; n++) {
                    let t = e.getChildAt(n).addComponent(ae);
                    t.initProp(!1), this.propList.push(t);
                }
            }
            let t = te.getNodeInHerit(this.levelSp, "Props_Special");
            if (t && t.numChildren) {
                let e = t.numChildren;
                for (let n = 0; n < e; n++) {
                    let e = t.getChildAt(n).addComponent(ae);
                    e.initProp(!0), this.propList.push(e);
                }
            }
            let n = te.getNodeInHerit(this.levelSp, "Key_Parent");
            this.keyList = [];
            let i = $.Instance.level % 4 == 0;
            if (n && n.numChildren && i) {
                let e = n.numChildren;
                for (let t = 0; t < e; t++) {
                    let e = n.getChildAt(t),
                        i = e.addComponent(ae);
                    i.initProp(!0), i.isKey = !0, this.keyList.push(i), Laya.Sprite3D.load(Z.Instance.getModelPath("Key_Object.lh"), Laya.Handler.create(this, t => {
                        if (!t) return;
                        let n = t.clone(),
                            i = n.transform.getWorldLossyScale();
                        Laya.Vector3.scale(i, 10, i), n.transform.setWorldLossyScale(i), e.addChild(n);
                    }));
                }
            }
            this.totalKey = this.keyList.length, this.totalPropCount = this.propList.length;
        }
        onUpdate() {
            if (this.player) {
                if (this.player.playerState === L.move) {
                    let e = this.player.boundBox,
                        t = this.player.bagPos,
                        n = !1;
                    this.propList.forEach(i => {
                        !i.hasCollect && i.checkCollier(e) && (i.doJumpInBagAni(t), i.hasCollect = !0, this.currentPropCount++, n = !0, j.vibrateShort());
                    }), n && c.Instance.event(s.GameProgressChange), this.progress >= .5 && this.player && !this.player.showArrow && (this.player.showArrow = !0);
                    let i = !1;
                    this.keyList.forEach(n => {
                        !n.hasCollect && n.checkCollier(e) && (n.doJumpInBagAni(t), n.hasCollect = !0, this.currenKey++, i = !0);
                    }), i && c.Instance.event(s.GameKeyChange), (i || n) && (Math.random() > .5 ? V.Instance.playSound(k.eat1) : V.Instance.playSound(k.eat2));
                }
                if (this.score > 0) {
                    let e = this.playerCar.transform.position,
                        t = this.player.owner.transform.position;
                    (e.x - t.x) * (e.x - t.x) + (e.z - t.z) * (e.z - t.z) < 2 && this.checkGameResult();
                }
            }
        }
        checkGameResult() {
            V.Instance.stopSound(k.warn);
            let e = te.getCommpentInHerit(this.playerCar, Laya.Animator);
            e && (e.speed = .3, V.Instance.playSound(k.car), e.play("PlayerCar_Departure")), this.player && this.player.owner.transform.setWorldLossyScale(new Laya.Vector3(0, 0, 0)), c.Instance.event(s.GameEnd, this.progress >= .5);
        }
        initCollidWalls() {
            if (this.collidWall = [], !this.levelSp) return;
            let e = te.getNodeInHerit(this.levelSp, "CollidWall");
            if (e && e.numChildren)
                for (let t = 0; t < e.numChildren; t++) {
                    let n = e.getChildAt(t),
                        i = n.transform.scale.x,
                        a = n.transform.scale.z;
                    (n.transform.rotationEuler.y > 45 || n.transform.rotationEuler.y < -45) && (i = n.transform.scale.z, a = n.transform.scale.x);
                    let s = n.transform.position.x - i / 2,
                        o = n.transform.position.z - a / 2;
                    this.collidWall.push(new Laya.Rectangle(s, o, i, a));
                }
        }
        checkCanMove(e) {
            if (!this.collidWall || !this.collidWall.length) return !0;
            for (let t = 0; t < this.collidWall.length; t++) {
                let n = this.collidWall[t];
                if (n && n.intersects(e)) return !1;
            }
            return !0;
        }
        showPoliceCar() {
            if (this.cameraContorller.stopFollowTarget(), V.Instance.stopSound(k.warn), !this.levelSp) return;
            let e = te.getNodeInHerit(this.levelSp, "PoliceCar");
            if (!e) return;
            this.cameraContorller.showHigh(e);
            let t = te.getNodeInHerit(e, "Light_00");
            t && (t.active = !1);
            let n = te.getNodeInHerit(e, "Light_01");
            n && (n.active = !1);
            let i = e.getComponent(Laya.Animator);
            i && i.play("PoliceCar_OnTrigger");
        }
        doPlayerFound() {
            this.isWarn || (V.Instance.playSound(k.warn, 999999), this.isWarn = !0);
        }
    }
    class Ve {
        constructor() {
            this.showEggViewCountDown = 0, this.showedEggViewCount = 0, this.nextInterval = 0;
        }
        static get Instance() {
            return null === Ve._instance && (Ve._instance = new Ve()), Ve._instance;
        }
        checkShowEggView(e) {
            if (!(j.IsWeChat() || j.IsOppo() || j.IsQQ())) return !1;
            if (D.Instance.wxCheck()) return !1;
            return !($.Instance.level < l.vGameInfo.eggInfo.level - 1) && ($.saveGameData(), e ? He.Instance.openUI(Ge.Egg) : He.Instance.openUI(Ge.AddStart), !0);
        }
    }
    Ve._instance = null,
        function(e) {
            e[e.None = 0] = "None", e[e.Ready = 1] = "Ready", e[e.StartCountDown = 5] = "StartCountDown", e[e.Run = 2] = "Run", e[e.Pause = 3] = "Pause", e[e.End = 4] = "End";
        }(Ie || (Ie = {}));
    class Pe {
        constructor() {
            this.isMobile = !0, this.battleCnt = 0, this.battleCntDay = 0, this.isInBattle = !1, this.preparing = !1, this.isGamePause = !1, this.preloadInAD = !1, this.matchFinish = !1, this.loadFightResFinish = !1, this.gameScene = null, this.gameState = Ie.None, this.tempCoin = 0, this.getGameMode = function() {
                return this.gameMode;
            }, this.reset(), this.init();
        }
        static get Instance() {
            return null === Pe._instance && (Pe._instance = new Pe()), Pe._instance;
        }
        init() {
            this.isMobile = B.onMobile(), this.registerEvent(), this.preLoadPattle();
        }
        registerEvent() {
            c.Instance.on(s.GetFocus, this, this.onGetFocus), c.Instance.on(s.LostFocus, this, this.onLostFocus), c.Instance.on(s.gameStart, this, this.startGame), c.Instance.on(s.prepareLevelFinish, this, this.onLevelReady), c.Instance.on(s.GameEnd, this, this.onGameEnd), c.Instance.on(s.PlayerCatched, this, this.onPlayerCatch), c.Instance.on(s.checkSkinChange, this, this.onExitSkinView);
        }
        unregisterEvent() {
            c.Instance.off(s.GetFocus, this, this.onGetFocus), c.Instance.off(s.LostFocus, this, this.onLostFocus), c.Instance.off(s.checkSkinChange, this, this.onExitSkinView), c.Instance.off(s.prepareLevelFinish, this, this.onLevelReady), c.Instance.off(s.GameEnd, this, this.onGameEnd), c.Instance.off(s.PlayerCatched, this, this.onPlayerCatch);
        }
        onGetFocus() {
            Laya.timer.scale = 1;
        }
        onLostFocus() {
            Laya.timer.scale = 0;
        }
        reset() {
            this.battleCnt = 0, this.battleCntDay = 0, this.isInBattle = !1, this.preparing = !1, this.readBattleCnt();
        }
        preLoadPattle() {}
        onExitSkinView() {
            this.gameScene && this.gameScene.refreshSkin();
        }
        AddBattleCnt() {
            this.battleCnt++, this.battleCntDay++, $.Instance.battleCount = $.Instance.battleCount + 1, $.Instance.dayBattleCount = $.Instance.dayBattleCount + 1, this.saveBattleCnt();
        }
        saveBattleCnt() {
            Laya.LocalStorage.setItem("battleCnt", this.battleCnt.toString()), Laya.LocalStorage.setItem("battleCntDay", this.battleCntDay.toString());
        }
        readBattleCnt() {
            this.battleCnt = parseInt(Laya.LocalStorage.getItem("battleCnt")) || 0, this.battleCntDay = parseInt(Laya.LocalStorage.getItem("battleCntDay")) || 0;
            let e = Date.now();
            a.lastStartTime > 0 && !d.isSameDay(e, a.lastStartTime) && (Laya.LocalStorage.setItem("battleCntDay", "0"), this.battleCntDay = 0);
        }
        get user() {
            return $.Instance.user;
        }
        setGamePause(e) {
            this.isGamePause = e, e ? Y.Instance.pause() : Y.Instance.resume();
        }
        clear() {
            !1 !== this.isInBattle && this.clearData();
        }
        clearData() {
            this.isInBattle = !1, this.preparing = !1;
        }
        static collect() {
            let e = j.getPlatform();
            e && e.triggerGC && e.triggerGC();
        }
        prepareStartGame(e) {
            this.matchFinish = !1, this.loadFightResFinish = !1, this.gameScene && (this.gameScene.destoryScene(), this.gameScene = null, Pe.collect()), this.gameScene = new Te(), this.gameScene.loadScene(), this.matchFinish = !0;
        }
        onLevelReady() {
            this.loadFightResFinish = !0, this.onBattleUIComplete();
        }
        onBattleUIComplete() {
            this.loadFightResFinish && this.matchFinish && (this.preparing = !1, this.isInBattle = !0, this.gameState = Ie.Ready, He.Instance.toUI(Ge.Game, null), this.startGame(), this.gameState = Ie.Run);
        }
        startGame() {
            this.tempCoin = 0, this.isGamePause = !1, Laya.timer.frameLoop(1, this, this.loop), this.AddBattleCnt(), this.doPreloadAD(), this.gameState = Ie.Run;
        }
        resetData(e) {}
        loop() {
            this.gameScene && this.gameScene.onUpdate();
        }
        toHomeUI(e = !0) {
            this.gameScene && (this.gameScene.destoryScene(), this.gameScene = null), Laya.timer.clear(this, this.loop), Pe.collect(), De.Instance.resetTempSkin(), this.checkStartGame();
        }
        doPreloadAD() {}
        checkStartGame() {
            Pe.Instance.prepareStartGame(0);
        }
        checkRoleMove(e) {
            return !e || !this.gameScene || this.gameScene.checkCanMove(e);
        }
        onGameEnd(e) {
            HUHU_showInterstitialAd();
            V.Instance.stopSound(k.warn), this.gameState = Ie.End, Laya.timer.clear(this, this.loop), e ? (V.Instance.playSound(k.Success), Laya.timer.once(1e3, this, () => {
                V.Instance.playSound(k.win);
            })) : V.Instance.playSound(k.Fail), Laya.timer.once(500, this, () => {
                e ? this.showWinView() : this.showLostView();
            });
        }
        onPlayerCatch() {
            V.Instance.stopSound(k.warn), V.Instance.playSound(k.Fail), this.gameState = Ie.End, Laya.timer.clear(this, this.loop), this.gameScene.showPoliceCar(), Laya.timer.once(1e3, this, () => {
                this.showLostView(!0);
            });
        }
        showWinView() {
            HUHU_showInterstitialAd();
            Laya.timer.clear(this, this.loop);
            let e = this.gameScene.progress,
                t = U.Instance.onMove();
            j.Instance.report(b.onMove, {
                progress: e,
                onMove: t
            }), t ? e > .95 ? Ve.Instance.checkShowEggView(!0) : Ve.Instance.checkShowEggView(!1) : this.onOpen();
        }
        onOpen() {
            He.Instance.openUI(Ge.Settlement, {
                coin: this.gameScene.score,
                success: !0,
                key: this.gameScene.currenKey,
                progress: this.gameScene.progress
            });
        }
        showLostView(e = !1) {
            HUHU_showInterstitialAd();
            Laya.timer.clear(this, this.loop), He.Instance.openUI(Ge.Settlement, {
                coin: this.gameScene.score,
                success: !1,
                catch: e
            });
        }
        showRoleProgress() {
            let e = De.Instance.getRoleProgressInfo();
            null != e ? Laya.timer.callLater(this, () => {
                He.Instance.closeUI(Ge.Settlement), He.Instance.openUI(Ge.RoleProgress, e);
            }) : this.showTreasureBox();
        }
        showTreasureBox() {
            this.gameScene && this.gameScene.currenKey ? (He.Instance.closeUI(Ge.Settlement), He.Instance.closeUI(Ge.RoleProgress), He.Instance.openUI(Ge.TreasureBox, {
                keyCount: this.gameScene.currenKey
            })) : this.toHomeUI();
        }
    }
    Pe._instance = null;
    class Ee {
        constructor() {
            this.coin = 0, this.title = "", this.isDouble = !1, this.highlight = !1, this.signed = !1, this.dinsID = "", this.icon = "", this.goodType = 1;
        }
    }
    class Me extends e.item.SignItemViewUI {
        constructor() {
            super(...arguments), this.item = null;
        }
        onEnable() {}
        onDisable() {}
        updateSignItem(e) {
            this.item = e, this.imageBgHightlight.visible = e.highlight, this.labDay.color = e.highlight ? "#AF7302" : "#343D72", this.labDay.text = e.title, this.labGold.text = `X${e.coin||0}`, this.imageIcon.skin = e.icon, this.imageAlready.visible = e.signed, this.containBox.disabled = e.signed, 1 === e.goodType ? (this.imageIcon.size(136, 85), this.lightAni.visible = !1, this.lightAni.stop()) : 2 === e.goodType && (this.imageIcon.size(136, 136), this.labGold.text = "X1", this.lightAni.visible = !0, this.lightAni.play());
        }
    }! function(e) {
        e[e.unknow = -1] = "unknow", e[e.basic = 0] = "basic", e[e.export = 1] = "export";
    }(we || (we = {}));
    class Fe {
        constructor() {
            this.gold = 0, this.lock = !0, this.skinID = 0, this.index = 0;
        }
    }
    class Ne extends e.item.BoxItemViewUI {
        constructor() {
            super(...arguments), this.itemIndex = 0, this.lock = !0;
        }
        onEnable() {
            this.on(Laya.Event.CLICK, this, this.onClickItem);
        }
        onDisable() {
            this.off(Laya.Event.CLICK, this, this.onClickItem);
        }
        onClickItem() {
            this.lock && c.Instance.event(s.TBoxItem, this.itemIndex);
        }
        updateItem(e) {
            if (this.itemIndex = e.index, this.lock = e.lock, e.lock) this.bgImageView.skin = "treasure/bg1.png", this.skinImageView.visible = !1, this.coinBox.visible = !1;
            else if (this.bgImageView.skin = "treasure/bg2.png", e.gold > 0)
                this.coinLabel.text = `${e.gold}`, this.skinImageView.visible = !1, this.coinBox.visible = !0;
            else if (e.skinID > 0) {
                let t = De.Instance.getSkinCfg(e.skinID);
                t && (this.skinImageView.skin = t.img), this.coinBox.visible = !1, this.skinImageView.visible = !0;
            }
        }
    }
    class Re {
        constructor() {
            this.qyInfo = null, this.guessYouLikeData = [], this.floatRecommendData = [], this.recommendData = [], this.adData = {}, this.boxList = [], this.jumpData = [];
        }
        static get Instance() {
            return null === Re._instance && (Re._instance = new Re()), Re._instance;
        }
        jumpApp(e, t, n, i) {
            if ("undefined" == typeof wx) return;
            let a = {
                    adv_id: e.adv_id,
                    appId: e.appid,
                    path: e.path,
                    success: e => {
                        n && n();
                    },
                    fail: e => {
                        i && i();
                    },
                    complete: () => {}
                },
                s = wx;
            s && s.h_ToMinProgram && s.h_ToMinProgram(a);
        }
        getShowInfo(e, t = -1) {
            if (this.qyInfo && this.qyInfo[e]) {
                if (t < 0) return this.qyInfo[e];
                return this.qyInfo[e][t];
            }
            return null;
        }
        isOpenSDK() {
            return !1;
        }
        getShowName(e) {
            return j.IsOppo() ? e.app_title : e.title;
        }
        getShowUrl(e) {
            if (j.IsOppo()) return Re.appIcon(e);
            if (e.logo_url) {
                if (e.logo_url instanceof Array) {
                    let t = A.nextNumber(0, e.logo_url.length - 1);
                    return e.logo_url[t];
                }
                return e.logo_url;
            }
            return null;
        }
        static getShowUrl2(e) {
            if (e.logo_attr && e.logo_attr instanceof Array && e.logo_attr.length) {
                let t = A.nextNumber(0, e.logo_attr.length - 1);
                return e.logo_attr[t];
            }
            if (e.logo_url) {
                if (e.logo_url instanceof Array) {
                    let t = A.nextNumber(0, e.logo_url.length - 1);
                    return e.logo_url[t];
                }
                return e.logo_url;
            }
            return null;
        }
        static addImageAnimation(e, t) {
            e.skin = Re.Instance.getShowUrl(t);
        }
        static report(e, t, n) {
            let i = {
                "游戏": e.title,
                "跳转来源": n
            };
            j.Instance.report(t, i);
        }
        static navigateToMiniProgram(e, t, n = null) {
            if (e) {
                Re.Instance.jumpApp(e, t, i => {
                    n && n(!0), Re.report(e, Se.JumpSuccess, t);
                }, i => {
                    n && n(!1), Re.report(e, Se.JumpFail, t);
                });
            }
        }
        static checkTuiItemRed(e, t = -1) {
            e && (-1 == t && (t = A.nextNumber(0, 100) < 20 ? 1 : 0), t && t > 0 ? (e.skin = 1 == t ? "tui/icon-hot.png" : "tui/icon-new.png", e.visible = !0) : e.visible = !1);
        }
        static getScorllData(e) {
            if (e) {
                let t = [].concat(e),
                    n = [];
                for (; t.length < 60;) {
                    0 === n.length && (n = [].concat(e));
                    let i = A.nextNumber(0, n.length - 1);
                    i > n.length && (i = 0), t.push(n[i]), n.splice(i, 1);
                }
                return t;
            }
            return [];
        }
        static appIcon(e) {
            if (e.appIconArray && e.appIconArray.length) {
                let t = A.nextNumber(0, e.appIconArray.length - 1);
                return t > e.appIconArray.length - 1 && (t = 0), e.appIconArray[t];
            }
            return e.app_icon;
        }
    }
    Re._instance = null,
        function(e) {
            e.JumpSuccess = "跳转成功", e.JumpFail = "跳转失败";
        }(Se || (Se = {})),
        function(e) {
            e.Unkonw = "未知", e.HomeBottom = "首页底部横向滚动", e.HomeLeft = "首页侧边热门按钮", e.Review = "复活页面", e.Settlement = "结算页面", e.AfterSettle = "结算页面之后弹出页面", e.JumpFail = "icon跳转失败后页面";
        }(ve || (ve = {}));
    class Oe {
        constructor() {
            this.uid = 0, this.nickName = "YOU", this.avatar = "", this.token = "", this.session_key = "", this.openid = "", this.authorized = !1, this.city = "", this.gender = 0, this.playerInfo = {}, this.isDefaultData = !0;
        }
        setUid(e) {
            this.uid = e;
        }
        loadCacheData() {
            if (!this.uid) {
                let e = Laya.LocalStorage.getJSON("uid");
                e && (this.uid = e.uid);
            }
            var e = null;
            if (null !== (e = l.recoverData ? Laya.LocalStorage.getJSON("user_" + this.uid) : Laya.LocalStorage.getJSON("user_r_" + this.uid)) && "" != e || (e = Laya.LocalStorage.getJSON("user_0")), null == e || "" == e) return !1;
            for (var t in this.isDefaultData = !1, e) this[t] = e[t];
            let n = Laya.LocalStorage.getJSON("skinArr");
            return n && n.length > 0 && (this.playerInfo.skinArr = n), j.IsQutoutiao() && (this.avatar = ""), !0;
        }
        saveToStorage() {
            l.recoverData ? Laya.LocalStorage.setJSON("user_" + this.uid, this) : Laya.LocalStorage.setJSON("user_r_" + this.uid, this), Laya.LocalStorage.setJSON("uid", {
                uid: this.uid || 0
            }), Laya.LocalStorage.setJSON("skinArr", [].concat(this.playerInfo.skinArr || []));
        }
        resumePlayerInfoDefault() {
            this.playerInfo = {
                diamond: 0,
                gold: 0
            };
        }
        getPlayerInfo() {
            return this.playerInfo;
        }
    }
    class Ue {
        constructor() {
            this.inviteCode = null, this.headIconUrl = "", this.logined = !1, this.loginError = !1, this.isReadData = !1, this.lastSendDataTime = 0, this.saveDataTime = 240, this.flushSaveDataTime = 20, this.m_onlineStartTime = 0, this.user = new Oe(), this.headIconUrl = "", Laya.timer.loop(1e3 * this.flushSaveDataTime, this, this.doSaveGameData), c.Instance.on(s.OverDayEvent, this, this.resetByOverDay);
        }
        static get Instance() {
            return null == Ue._instance && (Ue._instance = new Ue()), Ue._instance;
        }
        resetByOverDay() {
            let e = Laya.Browser.now(),
                t = this.user.playerInfo;
            t.login_date = e, t.dayGetMoneyNum = 0, t.dayNotTry = !1, t.showGift = !1, t.dayBattleCount = 0, t.taskData = null, t.showedReliveShare = !1;
        }
        doSaveGameData(e = !1, t = !1) {
            if (!this.isReadData) return;
            let n = t,
                i = Laya.Browser.now();
            i - this.lastSendDataTime > 1e3 * this.saveDataTime && (this.lastSendDataTime = i, n = !0), n && (e = !0), Laya.timer.clear(this, this.realSaveData), e ? this.realSaveData(n, i) : Laya.timer.once(1e3, this, this.realSaveData, [n, i]);
        }
        realSaveData(e = !1, t = 0) {
            Laya.timer.clear(this, this.realSaveData);
            let n = Laya.Browser.now();
            if (this.user.playerInfo.save_time = n, this.user.playerInfo.ver = l.ClientVer, this.user.saveToStorage(), l.recoverData && e && l.hasLogin) {
                let e = JSON.stringify(Object.assign({}, Ue.Instance.user.playerInfo));
                F.Instance.updataGameData(e).catch(e => {});
            }
        }
        static saveGameData(e = !1, t = !1) {
            Ue.Instance.doSaveGameData(e, t);
        }
        readDataInfo(e) {
            if (this.isReadData) return;
            l.recoverData || (e = null), this.user.isDefaultData && e && (this.user.playerInfo = Object.assign({}, e)), this.user.isDefaultData = !1, this.isReadData = !0;
            let t = this.user.playerInfo.login_date;
            !1 === d.isToday(t) && this.resetByOverDay(), this.doSaveGameData();
        }
        get gold() {
            return this.user.playerInfo.gold || (this.user.playerInfo.gold = 0), "string" == typeof this.user.playerInfo.gold && (this.user.playerInfo.gold = parseInt(this.user.playerInfo.gold)), this.user.playerInfo.gold || 0;
        }
        set gold(e) {
            this.user.playerInfo.gold !== e && (this.user.playerInfo.gold = e, c.Instance.event(s.PlayerGoodsUpdate)), this.user.playerInfo.gold = e;
        }
        get playerInfo() {
            return this.user && !this.user.playerInfo && (this.user.playerInfo = {}), this.user.playerInfo;
        }
        updateWithChangeData(e) {
            if (!this.playerInfo) return;
            let t = this.playerInfo;
            for (let n in e) t[n] += e[n];
            c.Instance.event(s.PlayerGoodsUpdate), this.doSaveGameData();
        }
        get playerScore() {
            return this.playerInfo.playerScore || 0;
        }
        set playerScore(e) {
            this.playerInfo.playerScore = e;
        }
        get skinData() {
            return this.playerInfo.skinData || {};
        }
        set skinData(e) {
            this.playerInfo.skinData = e;
        }
        get usingSkinID() {
            return this.playerInfo.usingSkinID || 0;
        }
        set usingSkinID(e) {
            this.playerInfo.usingSkinID = e;
        }
        get isFirstPlay() {
            return !1 !== this.playerInfo.isFirstPlay && (this.playerInfo.playerScore > 0 || !a.isNewPlayer ? this.playerInfo.isFirstPlay = !1 : this.playerInfo.isFirstPlay = !0), this.playerInfo.isFirstPlay;
        }
        set isFirstPlay(e) {
            this.playerInfo.isFirstPlay = e;
        }
        get battleCount() {
            return this.playerInfo.battleCount || 0;
        }
        set battleCount(e) {
            this.playerInfo.battleCount = e || 0;
        }
        get dayBattleCount() {
            return this.playerInfo.dayBattleCount || 0;
        }
        set dayBattleCount(e) {
            this.playerInfo.dayBattleCount = e || 0;
        }
        get dayNotTry() {
            return this.playerInfo.dayNotTry || !1;
        }
        set dayNotTry(e) {
            this.playerInfo.dayNotTry = e;
        }
        get onlineStartTime() {
            return this.m_onlineStartTime || 0;
        }
        set onlineStartTime(e) {
            this.m_onlineStartTime = e;
        }
        get onlineTime() {
            return this.playerInfo.onlineTime || 0;
        }
        set onlineTime(e) {
            this.playerInfo.onlineTime = e;
        }
        get level() {
            return this.user.playerInfo.level || 1;
        }
        set level(e) {
            this.user.playerInfo.level = e || 1;
        }
        getUUID() {
            let e = Laya.LocalStorage.getJSON("useruuid");
            return e || (e = B.uuid()) && Laya.LocalStorage.setJSON("useruuid", e), e;
        }
    }
    Ue._instance = null, Ue.taskRed = !1;
    class Ge {}
    Ge.Load = {
        id: 1,
        cls: class extends e.LoadingViewUI {
            constructor() {
                super(...arguments), this.loadSubpackage = !1, this.loadCompleted = !1, this.retryCount = 0;
            }
            init(e) {
                this.loadSubpackage = e.loadSubpackage || !1, this.registerEvent();
            }
            uninit() {
                Laya.timer.clearAll(this), this.unregisterEvent();
            }
            registerEvent() {
                c.Instance.on(s.ResLoadProgress, this, this.onRefreshProgress), c.Instance.on(s.StartLoadFinish, this, this.onLoadCompleted), c.Instance.on(s.userLoginFinish, this, this.userLoginFinish), c.Instance.on(s.SubpackageLoadProgress, this, this.onSubpackageLoadProgress), c.Instance.on(s.GotCfg, this, this.onGotCfg);
            }
            unregisterEvent() {
                c.Instance.off(s.ResLoadProgress, this, this.onRefreshProgress), c.Instance.off(s.StartLoadFinish, this, this.onLoadCompleted), c.Instance.off(s.userLoginFinish, this, this.userLoginFinish), c.Instance.off(s.SubpackageLoadProgress, this, this.onSubpackageLoadProgress), c.Instance.off(s.GotCfg, this, this.onGotCfg);
            }
            onRefreshProgress(e) {
                e < 0 && (e = 0), e > 1 && (e = 1), this.loadSubpackage ? this.updateProgress(.5 + e / 2) : this.updateProgress(e);
            }
            onSubpackageLoadProgress(e) {
                e < 0 && (e = 0), e > 1 && (e = 1), this.updateProgress(e / 2);
            }
            updateProgress(e) {
                if (this.destroyed) return;
                e < 0 && (e = 0), e > 1 && (e = 1);
                let t = (100 * e).toFixed(0) + "%";
                this.loadingLabel.changeText(t || "0");
                let n = Math.floor(369 * e);
                this.progressImageMask.graphics.clear(), this.progressImageMask.graphics.drawRect(0, 0, n, 40, "#FF0000"), j.Instance.setLoadingProgress((100 * e).toFixed(0));
            }
            closeLoadingView() {
                He.Instance.closeUI(Ge.Load);
            }
            showMainView() {
                this.closeLoadingView(); {
                    let e = window;
                    e.aldDelay && e.aldDelay();
                }
                j.Instance.report(b.showStart), P.Instance.loadingFinished(), G.Instance.loadMusicSubPackage(), Pe.Instance.checkStartGame(), V.Instance.playBgm();
            }
            onLoadCompleted() {
                this.loadCompleted = !0;
                j.Instance.setLoadingProgress(100);
                platform.getInstance().startup("Lucky-Looter", "5a1b2574105b46d79cfed78621e7d532", () => {
                    let yad = new Laya.Image();
                    yad.scale(0.8, 0.8);
                    yad.skin = "common/yad.png";
                    yad.right = 10;
                    yad.top = 10;
                    yad.zOrder = 2e3;
                    yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                        platform.getInstance().navigate("GAME", "LOGO")
                    })
                    yad.visible = false;
                    Laya.stage.addChild(yad);
                    this.checkEnterMainView();
                });
            }
            checkEnterMainView() {
                $.Instance.logined && this.loadCompleted && l.gotCfg && (this.showMainView(), H.Instance.onNewPlayer(S.loaded));
            }
            onGotCfg() {
                this.checkEnterMainView();
            }
            userLoginFinish(e) {
                e.logined ? this.onStart() : this.loadCompleted && this.showtReTryBtn();
            }
            onStart() {
                this.loadCompleted && this.checkEnterMainView();
            }
            showtReTryBtn() {
                N.Instance.doFailLogin();
            }
        },
        res: null
    }, Ge.Game = {
        id: 3,
        cls: class extends e.GameViewUI {
            constructor() {
                super(...arguments), this.countDown = 0, this.curMousePos = new Laya.Vector3(0, 0, 0), this.curDir = new Laya.Vector3(), this.shouldShowTry = !1, this.forestFloat = null, this.forestFloat1 = null, this.forestYoulike = null, this.forestDrawer = null, this.forestGameYoulike = null, this.forestGameDrawer = null;
                this.signBtn.visible = false;
            }
            init() {
                this.initScene(), this.timer.once(2e3, this, this.regiestEvent), this.imgTip1.visible = !1, this.onGuide(!1);
                let e = l.vGameInfo.trainRandom || 5;
                Math.floor(10 * Math.random()) >= e && $.Instance.dayBattleCount > 1 && (this.shouldShowTry = !0), ($.Instance.dayBattleCount + 1) % 2 == 0 && (this.shouldShowTry = !0), Pe.Instance.gameScene && Pe.Instance.gameScene.addSceneTo(this.sceneContainer);
            }
            uninit() {
                Laya.timer.clear(this, this.onUpdate), this.timer.clear(this, this.doShowView), this.timer.clear(this, this.regiestEvent), this.unRegiestEvent(), this.sceneContainer.removeChildren(), this.forestFloat && this.forestFloat.clear(), this.forestFloat1 && this.forestFloat1.clear(), this.forestYoulike && this.forestYoulike.clear(), this.forestDrawer && this.forestDrawer.clear(), this.btnBack && (this.btnBack.visible = !1);
            }
            regiestEvent() {
                c.Instance.on(s.gameStart, this, this.onGameStart), c.Instance.on(s.GameProgressChange, this, this.onProgressChange), c.Instance.on(s.GameKeyChange, this, this.onKeyChange), c.Instance.on(s.GameScoreChange, this, this.onScoreChange), c.Instance.on(s.PlayerGoodsUpdate, this, this.onCoinChange), this.on(Laya.Event.MOUSE_DOWN, this, this.onTouchDown), this.on(Laya.Event.MOUSE_OUT, this, this.onTouchUp), this.on(Laya.Event.MOUSE_UP, this, this.onTouchUp), this.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this.skinBtn.on(Laya.Event.CLICK, this, this.onSkinBtn), this.settingBtn.on(Laya.Event.CLICK, this, this.onSettingBtn), this.skinBtn.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.settingBtn.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.forestBox.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.forestFloat && this.forestFloat.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.forestFloat1 && this.forestFloat1.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.forestDrawer && this.forestDrawer.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.forestYoulike && this.forestYoulike.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), c.Instance.on(s.GetFocus, this, this.onShowWX);
            }
            unRegiestEvent() {
                c.Instance.off(s.gameStart, this, this.onGameStart), this.off(Laya.Event.MOUSE_DOWN, this, this.onTouchDown), this.off(Laya.Event.MOUSE_OUT, this, this.onTouchUp), this.off(Laya.Event.MOUSE_UP, this, this.onTouchUp), this.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), c.Instance.off(s.GameProgressChange, this, this.onProgressChange), c.Instance.off(s.GameKeyChange, this, this.onKeyChange), c.Instance.off(s.GameScoreChange, this, this.onScoreChange), c.Instance.off(s.PlayerGoodsUpdate, this, this.onCoinChange), this.signBtn.off(Laya.Event.CLICK, this, this.onSignBtn), this.skinBtn.off(Laya.Event.CLICK, this, this.onSkinBtn), this.settingBtn.off(Laya.Event.CLICK, this, this.onSettingBtn), this.signBtn.off(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.skinBtn.off(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.settingBtn.off(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.forestBox.off(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.forestFloat && this.forestFloat.off(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.forestFloat1 && this.forestFloat1.off(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.forestDrawer && this.forestDrawer.off(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), this.forestYoulike && this.forestYoulike.off(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown), c.Instance.off(s.GetFocus, this, this.onShowWX);
            }
            onGameStart() {}
            onProgressChange() {
                if (!Pe.Instance.gameScene) return;
                let e = Pe.Instance.gameScene.progress;
                this.progressBar.value = e, e >= .5 && this.changeStarSkin(this.star1), e >= .75 && this.changeStarSkin(this.star2), e >= .95 && this.changeStarSkin(this.star3);
            }
            changeStarSkin(e) {
                e && "pub/star2.png" !== e.skin && (e.skin = "pub/star2.png");
            }
            changeKeySkin(e) {
                e && "pub/key2.png" !== e.skin && (e.skin = "pub/key2.png");
            }
            onKeyChange() {
                if (!Pe.Instance.gameScene) return void(this.keyBox.visible = !1);
                let e = Pe.Instance.gameScene.totalKey,
                    t = Pe.Instance.gameScene.currenKey;
                e ? (t >= 1 && this.changeKeySkin(this.key1), t >= 2 && this.changeKeySkin(this.key2), t >= 3 && this.changeKeySkin(this.key3)) : this.keyBox.visible = !1;
            }
            onScoreChange(e) {
                e && Pe.Instance.gameScene && (Pe.Instance.gameScene.score += e || 0, this.scoreLabel.text = `${Pe.Instance.gameScene.score}`);
            }
            onCoinChange() {
                this.coinLabel.text = `${$.Instance.gold}`;
            }
            showStarView() {
                this.preStartView.visible = !0, this.fingerAni.play(), this.gameUIBox.visible = !1, this.forestBox.visible = !0;
            }
            showGameView() {
                H.Instance.onNewPlayer(S.level), this.preStartView.visible = !1, this.fingerAni.stop(), this.gameUIBox.visible = !0, this.onKeyChange(), this.onProgressChange(), this.showGameForestView(), this.forestBox.visible = !1, 1 == $.Instance.level && this.onGuide(!0);
            }
            initScene() {
                this.showStarView(), this.showForestView(), this.progressBar.value = 0, this.levelLabel.text = `LEVEL ${$.Instance.level}`, this.levelLable2.text = `LEVEL ${$.Instance.level}`, this.onCoinChange();
            }
            onUpdate() {}
            showForestView() {
                if (U.Instance.isOpenSDK()) {
                    this.forestBox.visible = !0, this.btnBack.top = j.isLong() ? 55 : 20, this.forestFloat = U.Instance.addFloat(this.preStartView, 600, 300, 0), this.forestFloat1 = U.Instance.addFloat(this.preStartView, 30, 300, 1);
                    let e = Laya.stage.height / 2 + (j.isLong() ? 540 : 450);
                    this.forestYoulike = U.Instance.addYoulike(this.preStartView, e);
                    let t = j.isLong() ? -40 : -160;
                    this.forestDrawer = U.Instance.addDrawer(this.preStartView, t), this.btnMoreGame.visible = U.Instance._validAd;
                } else this.forestBox.visible = !1;
            }
            showGameForestView() {}
            onTouchDown() {
                if (this.checkShowTry()) {
                    platform.getInstance().showInterstitial(() => {});
                } else {
                    this.isMouseDown = !0, Pe.Instance.isGamePause || (this.gameUIBox.visible || this.showGameView(), this.curMousePos = new Laya.Vector3(Laya.stage.mouseX, Laya.stage.mouseY, 0), c.Instance.event(s.moveInputChangeStart))
                }
            }
            onTouchUp() {
                this.isMouseDown = !1, this.imgTip1.visible = !1, this.timer.once(3e3, this, () => {
                    this.onGuide(!1);
                }), c.Instance.event(s.moveInputChangeEnd);
            }
            onMouseMove() {
                if (!this.isMouseDown || Pe.Instance.isGamePause) return;
                let e = new Laya.Vector3(Laya.stage.mouseX, Laya.stage.mouseY, 0);
                Laya.Vector3.distance(e, this.curMousePos) < 2 || (Laya.Vector3.subtract(e, this.curMousePos, this.curDir), c.Instance.event(s.moveInputChange, new Laya.Vector3(this.curDir.x, 0, this.curDir.y)), this.curMousePos = e, 1 == $.Instance.level && (this.imgTip1.visible = !0));
            }
            onGuide(e) {
                e ? (this.guideBox.visible = !0, this.guideAni.play(0, !0)) : this.guideBox.visible && (this.guideAni.stop(), this.guideBox.visible = !1);
            }
            onSignBtn() {}
            onSkinBtn() {
                V.Instance.playUIClick(), He.Instance.openUI(Ge.Skin), H.Instance.onBtn(S.coin2);
            }
            onSettingBtn() {
                V.Instance.playUIClick(), He.Instance.openUI(Ge.Setting);
            }
            onShareBtn() {}
            onMoreGame() {
                V.Instance.playUIClick(), U.Instance.openInterFull(), H.Instance.onBack(S.coin4), H.Instance.onBtn(S.coin4);
            }
            onTuiBack() {
                V.Instance.playUIClick(), U.Instance.addInterFullList(this.forestBox), H.Instance.onBack(S.back1);
            }
            onGameTuiBack() {
                V.Instance.playUIClick(), U.Instance.addInterFullList(this.gameUIBox), H.Instance.onBack(S.back3);
            }
            onBtnMouseDown(e) {
                e.stopPropagation();
            }
            didShow() {
                this.timer.once(100, this, this.doShowView);
            }
            didHide() {
                this.timer.clear(this, this.doShowView);
            }
            doShowView() {}
            onShowWX() {
                Laya.timer.frameOnce(1, this, this.checkOffline);
            }
            checkOffline() {
                if (!this.preStartView.visible) return;
                let e = O.Instance.getOfflineTimeCoin();
                return e > 0 && (He.Instance.openUI(Ge.Offline, {
                    coin: e
                }), !0);
            }
            updateSignTip(e = !0) {
                let t = _.Instance.getSignDayInfo(),
                    n = t.signed > 0,
                    i = !1;
                return t.show && (i = !0), !(!e || i || n || D.Instance.wxCheck() || a.firstTimePlayer || (_.Instance.saveAutoShowSign(), He.Instance.openUI(Ge.DaySign), 0));
            }
            checkShowTry() {
                if (!this.shouldShowTry) return !1;
                if ($.Instance.dayNotTry) return !1;
                let e = De.Instance.getRandomLockSkinCfg();
                return null !== e && (this.shouldShowTry = !1, He.Instance.openUI(Ge.Try, {
                    cfg: e
                }), !0);
            }
        },
        res: null
    }, Ge.Skin = {
        id: 16,
        cls: class extends e.SkinViewUI {
            constructor() {
                super(...arguments), this.curItemSelected = null, this.curCfg = null, this.selectType = we.unknow, this.curPage = 1, this.curMaxPage = 3, this.lastPoint = new Laya.Point(0, 0), this.pressed = !1, this.sliderPageDis = 100, this.movePoint = [], this.viewPages = [], this.curSharePos = g.Unknow, this.selectIndexList = [], this.lastPressPoint = null, this.gold = 0, this.coinUnlockIndexList = [], this.randomCount = 100, this.unlockIndex = 0;
            }
            init(e) {
                this.regiestEvent(), this.initData(), this.initView();
            }
            uninit() {
                this.unRegiestEvent(), c.Instance.event(s.checkSkinChange);
            }
            regiestEvent() {
                this.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose), this.btnSure.on(Laya.Event.CLICK, this, this.onBtnSure), this.btnVideo.on(Laya.Event.CLICK, this, this.onBtnVideo), this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut), c.Instance.on(s.skinItemClick, this, this.onClickItem), c.Instance.on(s.PlayerGoodsUpdate, this, this.onGoldChange), c.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted), this.useBtn.on(Laya.Event.CLICK, this, this.onUseBtn), this.prevBtn.on(Laya.Event.CLICK, this, this.onPrevBtn), this.nextBtn.on(Laya.Event.CLICK, this, this.onNextBtn);
            }
            unRegiestEvent() {
                this.btnClose.off(Laya.Event.CLICK, this, this.onBtnClose), this.btnSure.off(Laya.Event.CLICK, this, this.onBtnSure), this.btnVideo.off(Laya.Event.CLICK, this, this.onBtnVideo), this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.off(Laya.Event.MOUSE_OUT, this, this.onMouseOut), c.Instance.off(s.skinItemClick, this, this.onClickItem), c.Instance.off(s.PlayerGoodsUpdate, this, this.onGoldChange), c.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted), this.useBtn.off(Laya.Event.CLICK, this, this.onUseBtn), this.prevBtn.off(Laya.Event.CLICK, this, this.onPrevBtn), this.nextBtn.off(Laya.Event.CLICK, this, this.onNextBtn);
            }
            initData() {
                let e = De.Instance.curSkin;
                this.curCfg = De.Instance.getSkinCfg(e), this.viewPages = De.Instance.getViewPages(), this.selectIndexList = [0, 0, 0], this.updateSelectIndex(), this.movePoint.length || (this.movePoint.push(new Laya.Point(this.imageUnselecte1.x, this.imageUnselecte1.y)), this.movePoint.push(new Laya.Point(this.imageUnselecte2.x, this.imageUnselecte2.y)), this.movePoint.push(new Laya.Point(this.imageUnselecte3.x, this.imageUnselecte3.y))), this.curMaxPage = 3, this.imageSelecte.x = this.movePoint[0].x, this.imageSelecte.y = this.movePoint[0].y, this.curPage = 1;
            }
            initView() {
                this.updateView(), this.onGoldChange();
            }
            onBtnClose() {
                V.Instance.playUIClick(), He.Instance.closeUI(Ge.Skin);
            }
            onBtnVideo() {
                V.Instance.playUIClick(), platform.getInstance().showReward(() => {
                    this.curSharePos = g.Unknow, $.Instance.gold += 500, V.Instance.playSound(k.coin), He.Instance.showTips("COIN x 500")
                })
            }
            onBtnSure() {
                V.Instance.playUIClick(), $.Instance.gold >= this.gold ? ($.Instance.gold -= this.gold, this.coinUnlockIndexList = [], this.viewPages[0].forEach((e, t) => {
                    De.Instance.hasComplete(e.skinID) || this.coinUnlockIndexList.push(t);
                }), this.randomCount = A.getRandom(10, 20), this.unlockIndex = 0, this.stage.mouseEnabled = !1, this.doRandomUnlock()) : He.Instance.showTips("Coin is not enough");
            }
            onUseBtn() {}
            onMouseDown(e) {
                this.pressed = !0, this.lastPressPoint = new Laya.Point(e.stageX, e.stageY), this.lastPoint = new Laya.Point(e.stageX, e.stageY);
            }
            onMouseMove(e) {
                if (this.pressed) {
                    let e = Laya.stage.mouseX - this.lastPoint.x,
                        t = Laya.stage.mouseY - this.lastPoint.y;
                    this.lastPoint.x = Laya.stage.mouseX, this.lastPoint.y = Laya.stage.mouseY;
                    let n = e * e,
                        i = t * t,
                        a = 180 * Math.atan2(e, t) / Math.PI;
                    a < 0 && (a += 360), a = Math.round(a);
                    let s = Math.PI / 180 * a,
                        o = Math.sqrt(n + i),
                        r = Math.floor(Math.sin(s) * o);
                    this.panelBottom.centerX = this.panelBottom.centerX + r, Math.abs(r) > 10 && (this.centerView.mouseEnabled = !1);
                }
            }
            onMouseUp(e) {
                this.centerView.mouseEnabled = !0, this.pressed && null !== this.lastPressPoint && (A.distancePoint(new Laya.Point(e.stageX, e.stageY), this.lastPressPoint) > this.sliderPageDis && (e.stageX < this.lastPressPoint.x ? this.curPage++ : this.curPage--, this.curPage < 1 ? this.curPage = this.curMaxPage : this.curPage > this.curMaxPage && (this.curPage = 1), this.updateView()), this.panelBottom.centerX = 0), this.lastPressPoint = null, this.lastPoint = null, this.pressed = !1;
            }
            onMouseOut(e) {
                this.onMouseUp(e);
            }
            updateView() {
                this.imageSelecte.pos(this.movePoint[this.curPage - 1].x, this.movePoint[this.curPage - 1].y);
                let e = this.selectIndexList[this.curPage - 1];
                this.curCfg = De.Instance.getSkinCfg(this.viewPages[this.curPage - 1][e].skinID), De.Instance.hasComplete(this.curCfg.id) && (2 === this.curCfg.modelType ? De.Instance.curCarSkin = this.curCfg.id : De.Instance.curSkin = this.curCfg.id);
                let t = this.curPage;
                this.centerView.updateItem(this.viewPages[t - 1], this.curCfg.id);
                let n = t > 1 ? t - 1 : this.curMaxPage;
                this.leftView.updateItem(this.viewPages[n - 1], this.curCfg.id);
                let i = t > this.curMaxPage ? 1 : t + 1;
                this.rightView.updateItem(this.viewPages[i - 1], this.curCfg.id), this.updateBtnInfo(), c.Instance.event(s.SkinShowChange, {
                    roleCfg: this.curCfg
                }), De.Instance.hasComplete(this.curCfg.id) ? (this.modelShowBox.visible = !0, this.unknowImage.visible = !1) : (this.modelShowBox.visible = !1, this.unknowImage.visible = !0);
            }
            onGoldChange() {
                this.labCoin.text = `${$.Instance.gold}`;
            }
            onClickItem(e) {
                this.curCfg && this.curCfg.id === e || (this.curCfg = De.Instance.getSkinCfg(e), De.Instance.hasComplete(e) && (2 === this.curCfg.modelType ? De.Instance.curCarSkin = this.curCfg.id : De.Instance.curSkin = this.curCfg.id), this.updateSelectIndex(), this.updateView());
            }
            updateBtnInfo() {
                if (1 === this.curPage) {
                    this.btnSure.visible = !0, this.btnVideo.visible = !0, this.useBtn.visible = !1;
                    let e = 0;
                    this.viewPages[0].forEach(t => {
                        t.isLock || e++;
                    }), this.gold = 1e3 + 2e3 * (e - 1), this.labSureMoney.text = `${this.gold}`, this.labVideoMoney.text = "500", this.btnSure.disabled = e >= 9;
                } else this.btnSure.visible = !1, this.btnVideo.visible = !1, this.useBtn.visible = !0, De.Instance.hasComplete(this.curCfg.id) ? 2 === this.curCfg.modelType && this.curCfg.id === De.Instance.curCarSkin ? this.useBtn.text = "USED" : 1 === this.curCfg.modelType && this.curCfg.id === De.Instance.curSkin ? this.useBtn.text = "USED" : this.useBtn.text = "USE" : this.useBtn.text = this.curCfg.condition;
            }
            updateSelectIndex() {
                if (this.curCfg && this.curCfg.tab >= 1) {
                    let e = 0;
                    2 === this.curCfg.tab ? e = 1 : 3 === this.curCfg.tab && (e = 2), this.viewPages[e].forEach((t, n) => {
                        t.skinID === this.curCfg.id && (this.selectIndexList[e] = n);
                    });
                }
            }
            onShowAdCompleted(e) {}
            doRandomUnlock() {
                if (this.randomCount > 0) {
                    if (this.randomCount--, this.unlockIndex < this.coinUnlockIndexList.length) {
                        let e = this.coinUnlockIndexList[this.unlockIndex],
                            t = this.viewPages[0][e].skinID;
                        this.onClickItem(t);
                    }
                    this.unlockIndex++, this.unlockIndex > this.coinUnlockIndexList.length - 1 && (this.unlockIndex = 0), Laya.timer.once(250, this, this.doRandomUnlock);
                } else V.Instance.playSound(k.LevelUpdate), this.stage.mouseEnabled = !0, De.Instance.activeSkin(this.curCfg.id), 2 === this.curCfg.modelType ? De.Instance.curCarSkin = this.curCfg.id : De.Instance.curSkin = this.curCfg.id, this.viewPages = De.Instance.getViewPages(), this.updateView(), H.Instance.onCark();
            }
            onNextBtn() {
                V.Instance.playUIClick(), this.curPage += 1, this.curPage > this.curMaxPage && (this.curPage = 1), this.updateView();
            }
            onPrevBtn() {
                V.Instance.playUIClick(), this.curPage -= 1, this.curPage < 1 && (this.curPage = this.curMaxPage), this.updateView();
            }
        },
        res: null
    }, Ge.DaySign = {
        id: 103,
        cls: class extends e.DaySignViewUI {
            constructor() {}
            init() {}
            uninit() {
                this.unRegiestEvent(), c.Instance.event(s.checkSkinChange);
            }
            regiestEvent() {
                this.btnSign.on(Laya.Event.CLICK, this, this.onBtnSign), this.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose), c.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted);
            }
            unRegiestEvent() {
                this.btnSign.off(Laya.Event.CLICK, this, this.onBtnSign), this.btnClose.off(Laya.Event.CLICK, this, this.onBtnClose), c.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted);
            }
            onBtnClose() {
                V.Instance.playUIClick(), He.Instance.closeUI(Ge.DaySign);
            }
            onBtnSign() {}
            onShowAdCompleted(e) {
                this.curSharePos === e && (this.curSharePos, g.Unknow, this.onSignFinish(!1));
            }
            onSignFinish(e = !0) {
                let t = !1;
                if (this.actionInfo)
                    if (1 == this.actionInfo.goodstype) {
                        let n = 1;
                        e && (n = 2);
                        let i = this.actionInfo.count * n;
                        $.Instance.updateWithChangeData({
                            gold: i
                        }), V.Instance.playSound(k.Gold), He.Instance.showTips(`COIN x ${i}`), t = !0;
                    } else 2 === this.actionInfo.goodstype && this.actionInfo.skinid && De.Instance.getSkinInfo(this.actionInfo.skinid) && (De.Instance.activeSkin(this.actionInfo.skinid), V.Instance.playSound(k.LevelUpdate), De.Instance.curSkin = this.actionInfo.skinid, He.Instance.showTips("SUCCESS"), t = !0);
                t && (_.Instance.doSignAction(), He.Instance.closeUI(Ge.DaySign)), H.Instance.onSign(S.winSign);
            }
            onListRender(e, t) {
                let n = e.dataSource;
                e.updateSignItem(n);
            }
            updateList() {
                this.signInfo = _.Instance.getSignDayInfo(), this.generalDataInfo(), this.actionInfo = this.getSignInfoWithIndex(this.getNowSignIndex());
                let e = this.getNowSignIndex();
                0 !== e && D.Instance.wxCheck(), e %= 7;
                let t = this.canDoSign();
                this.signList.dataSource = this.dataInfo.map((n, i) => {
                    let a = new Ee();
                    if (a.coin = n.count, a.title = n.title, a.isDouble = n.d, a.dinsID = n.skinid, 1 === n.goodstype) a.icon = "sign/img_sign_icon.png";
                    else if (2 === n.goodstype) {
                        let e = De.Instance.getSkinCfg(n.skinid);
                        a.icon = e.img;
                    }
                    return a.goodType = n.goodstype, a.highlight = i === e, a.signed = i < e || i === e && !t, a;
                }), this.seventInfo = this.signList.dataSource[6], this.updateSeven(), this.updatebtnSign();
            }
            getSignInfoWithIndex(e) {
                return e < 0 && (e = 0), e > 6 && (e %= 7), e < this.dataInfo.length ? this.dataInfo[e] : null;
            }
            updateSeven() {
                let e = this.seventInfo;
                e && (this.labDay.text = "DAY 7", this.labGold.text = `X ${e.coin}`, this.imageIcon.skin = e.icon, this.imageAlready.skin = "sign/img_sign_ylq.png", this.imageAlready.visible = e.signed, this.imageSevenBgHighlight.visible = e.highlight, 1 === e.goodType ? (this.imageIcon.size(190, 125), this.lightAni.visible = !1, this.lightAni.stop()) : 2 === e.goodType && (this.imageIcon.size(190, 190), this.labGold.text = "X 1", this.lightAni.visible = !0, this.lightAni.play()), this.boxSeven.disabled = e.signed);
            }
            updatebtnSign() {
                0 === this.getNowSignIndex() || D.Instance.wxCheck() || j.IsOppo() ? (this.signIcon.visible = !1, this.btnSign.labelPadding = "0,0,0,0", this.btnSign.label = "CLAIM") : (this.signIcon.visible = !0, this.btnSign.labelPadding = "0,0,0,50", 2 === this.actionInfo.d ? this.btnSign.label = "CLAIM" : this.btnSign.label = "CLAIM"), this.canDoSign() ? (this.btnSign.label = "CLAIM", this.btnSign.disabled = !1) : (this.btnSign.label = "RECEIVED", this.btnSign.disabled = !0);
            }
            canDoSign() {
                return !(this.signInfo.signed > 0);
            }
            getNowSignIndex() {
                let e = this.signInfo.signDay;
                return this.canDoSign() || (e -= 1), Math.max(0, e);
            }
            generalDataInfo() {
                let e = _.Instance.signCfgData,
                    t = this.signInfo.signDay;
                e && (this.dataInfo = e.map((e, n) => {
                    if (0 === n && 0 === t && (e.d = 0), 2 === e.goodstype) {
                        let n = !1;
                        if (e.skinid && De.Instance.hasComplete(e.skinid)) {
                            n = !0;
                            let i = De.Instance.getSkinInfo(e.skinid).activatedTime || 0,
                                a = R.currTimer(),
                                s = 24 * t * 60 * 60 * 1e3;
                            a > i && a - i <= s && (n = !1);
                        }
                        if (t > 7 || n) return {
                            id: e.id,
                            title: e.title,
                            goodstype: e.goodstype2,
                            count: e.count2,
                            skinid: 0,
                            d: 2
                        };
                    }
                    return e;
                }));
            }
        },
        res: null
    }, Ge.Settlement = {
        id: 104,
        cls: class extends e.SettleViewUI {
            constructor() {
                super(...arguments), this.coin = 50, this.curSharePos = g.Unknow, this.isETouch = !1, this.touchEnable = !0, this.a3xView = null, this.forestDrawer = null, this.forestYoulike = null;
            }
            init(e) {
                this.initScene(), this.initETouch(), this.regiestEvent(), this.gameList.renderHandler = new Laya.Handler(this, this.showADPanel);
                this.gameList.array = platform.getInstance().getForgames();
                this.showBannerOffset(e);
            }
            showADPanel(e) {
                e.offAll(Laya.Event.MOUSE_DOWN);
                e.on(Laya.Event.MOUSE_DOWN, e, () => {
                    platform.getInstance().navigate("GAME", "MORE");
                });
            }
            uninit() {
                this.unRegiestEvent(), this.forestDrawer && this.forestDrawer.clear(), this.btnBack && (this.btnBack.visible = !1);
            }
            regiestEvent() {
                this.nextBtn.on(Laya.Event.CLICK, this, this.onNextBtn), this.retryBtn.on(Laya.Event.CLICK, this, this.onRetryBtn), this.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn);
            }
            unRegiestEvent() {
                this.nextBtn.off(Laya.Event.CLICK, this, this.onNextBtn), this.retryBtn.off(Laya.Event.CLICK, this, this.onRetryBtn), this.videoBtn.off(Laya.Event.CLICK, this, this.onVideoBtn);
            }
            updateStar(e) {
                this.starBox.visible = !0, e >= .5 && (this.star1.skin = "pub/star2.png"), e >= .75 && (this.star2.skin = "pub/star2.png"), e >= .95 && (this.star3.skin = "pub/star2.png");
            }
            onNextBtn() {
                V.Instance.playSound(k.coin), this.touchEnable && ($.Instance.gold += this.coin, Pe.Instance.showRoleProgress());
            }
            onRetryBtn() {
                V.Instance.playUIClick(), this.touchEnable && (U.Instance.openInterFull(() => {
                    Pe.Instance.toHomeUI();
                }), He.Instance.closeUI(Ge.Settlement), H.Instance.onBack(S.coin4));
            }
            onVideoBtn() {
                V.Instance.playUIClick()
                platform.getInstance().showReward(() => {
                    this.curSharePos = g.Unknow, $.Instance.gold += 5 * this.coin, V.Instance.playSound(k.coin), Pe.Instance.showRoleProgress();
                });
            }
            onTuiBack() {
                V.Instance.playUIClick(), U.Instance.addInterFullList(this.forestBox), H.Instance.onBack(S.back4);
            }
            initScene() {}
            showBannerOffset(e) {
                e && (e.success ? ($.Instance.level += 1, this.coin = e.coin || 0, this.tipImage.skin = "settle/img_settle_win.png", this.nextBtn.visible = !0, this.retryBtn.visible = !1, this.videoBtn.visible = !0, this.coinBox.visible = !0, this.coinLabel.text = `${this.coin}`, this.updateStar(e.progress || 0), H.Instance.onNewPlayer(S.winLevel)) : (this.tipImage.skin = "settle/img-settle_lose.png", this.nextBtn.visible = !1, this.retryBtn.visible = !0, this.videoBtn.visible = !1, this.coinBox.visible = !1, this.starBox.visible = !1)), this.updateBtnBox(!1);
            }
            hasETouch() {
                return this.isETouch && !a.chidState;
            }
            updateBtnBox(e = !1, t = !1) {
                let n = 0,
                    i = 0,
                    a = 0;
                e ? (n = 80, i = 170, a = 300, this.nextBtn.mouseEnabled = !1, this.retryBtn.mouseEnabled = !1, this.timer.once(2e3, this, this.onMouseEnabled)) : (n = 280, i = 370, a = 500, this.nextBtn.mouseEnabled = !0, this.retryBtn.mouseEnabled = !0, j.isLong() && (n += 60, i += 60, a += 60)), t ? (Laya.Tween.to(this.btnContainer, {
                    bottom: n
                }, 200), Laya.Tween.to(this.coinBox, {
                    bottom: a
                }, 200), Laya.Tween.to(this.videoBtn, {
                    bottom: i
                }, 200)) : (this.btnContainer.bottom = n, this.coinBox.bottom = a, this.videoBtn.bottom = i);
            }
            onMouseEnabled() {
                this.nextBtn.mouseEnabled = !0, this.retryBtn.mouseEnabled = !0;
            }
            getPinY() {
                return !D.Instance.aCheck() && this.btnContainer ? this.btnContainer.localToGlobal(new Laya.Point(0, this.btnContainer.height)).y - 50 : -1;
            }
            initETouch() {
                j.IsQutoutiao() ? this.isETouch = !1 : U.Instance.disFunc() && (this.isETouch = !0);
            }
            onShowBannerCompleted(e) {}
            onShowAdCompleted(e) {}
        },
        res: null
    }, Ge.Offline = {
        id: 105,
        cls: class extends e.OfflineViewUI {
            constructor() {
                super(...arguments), this.coin = 0, this.curSharePos = g.Unknow, this.a3xView = null, this.forestDrawer = null;
            }
            init(e) {
                e && (this.coin = e.coin || 0), this.regiestEvent(), this.initView(), this.initScene();
            }
            initView() {
                let e = this;
                this.closeBtn.visible = !1, Laya.timer.once(1500, this, function() {
                    e.closeBtn.visible = !0;
                }), this.contentBox.height = 500, this.contentBox.centerY = -34, U.Instance.isOpenSDK() && (this.contentBox.height = 750, this.contentBox.centerY = -34), O.Instance.hasShow = !0, this.coinLabel.text = `金币+${this.coin||0}`;
                let t = O.Instance.m_offlineTime,
                    n = Math.floor(t / 6e4),
                    i = Math.floor(n % 60),
                    a = Math.floor(n / 60),
                    s = Math.floor(a / 24);
                a -= 24 * s, this.upTip.visible = a >= 2;
            }
            uninit() {
                Laya.timer.clearAll(this), this.unregiestEvent();
            }
            regiestEvent() {
                this.closeBtn.on(Laya.Event.CLICK, this, this.onClosed), this.btn.on(Laya.Event.CLICK, this, this.onVedioBtn), c.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted), c.Instance.on(s.CloseShowAd, this, this.onCloseShowAd);
            }
            unregiestEvent() {
                this.closeBtn.off(Laya.Event.CLICK, this, this.onClosed), this.btn.off(Laya.Event.CLICK, this, this.onVedioBtn), c.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted), c.Instance.off(s.CloseShowAd, this, this.onCloseShowAd);
            }
            initScene() {
                if (U.Instance.isOpenSDK()) {
                    this.a3xbox.visible = !0;
                    let e = (j.isLong(), 400);
                    this.a3xView = U.Instance.add3x(this.a3xbox, 0, 0, e);
                } else this.a3xbox.visible = !1;
            }
            onClosed() {
                V.Instance.playUIClick(), He.Instance.showTips("SUSSESS"), V.Instance.playSound(k.Gold), $.Instance.updateWithChangeData({
                    gold: this.coin
                }), He.Instance.closeUI(Ge.Offline);
            }
            onVedioBtn() {
                V.Instance.playUIClick(), this.curSharePos = g.OfflineAD, D.Instance.showVideeoOrShare(this.curSharePos);
            }
            onShowAdCompleted(e) {
                e === this.curSharePos && (He.Instance.showTips("SUSSESS"), V.Instance.playSound(k.Gold), $.Instance.updateWithChangeData({
                    gold: 3 * this.coin
                }), this.curSharePos = g.Unknow, He.Instance.closeUI(Ge.Offline));
            }
            onCloseShowAd(e) {}
            getPinY() {
                return j.IsWeChat() && !D.Instance.aCheck() && this.closeBtn ? this.closeBtn.localToGlobal(new Laya.Point(0, this.closeBtn.height)).y + B.bannerMoveY() : -1;
            }
        },
        res: null
    }, Ge.RoleProgress = {
        id: 106,
        cls: class extends e.RoleProgressViewUI {
            constructor() {
                super(...arguments), this.aniTime = 0, this.pro = 0, this.newPro = 0, this.tempPro = 0, this.isETouch = !1;
            }
            init(e) {
                this.proInfo = e, this.registerEvent(), this.doAnimate(), this.initView(), c.Instance.event(s.SkinShowChange, {
                    roleCfg: this.proInfo.cfg,
                    gunCfg: null
                });
            }
            uninit() {
                Laya.timer.clearAll(this), this.unregisterEvent();
            }
            registerEvent() {
                this.btn.on(Laya.Event.CLICK, this, this.onBtn), c.Instance.on(s.ShowBannerCompleted, this, this.onShowBannerCompleted);
            }
            unregisterEvent() {
                this.btn.off(Laya.Event.CLICK, this, this.onBtn);
            }
            initView() {
                this.bgAni.play(0, !0), j.IsWeChat() || (this.btn.visible = !1), this.btn.visible = !0, this.initETouch(), this.showBannerOffset();
            }
            showBannerOffset() {
                this.hasETouch() ? (this.updateBtnBox(!0), Laya.timer.once(1e3, this, () => {
                    D.Instance.showADBanner(Ge.RoleProgress.id, this.getPinY());
                })) : (this.updateBtnBox(!1), D.Instance.showADBanner(Ge.Settlement.id, this.getPinY()));
            }
            hasETouch() {
                return this.isETouch && !a.chidState;
            }
            updateBtnBox(e = !1, t = !1) {
                let n = 0;
                e ? (n = 940, this.btn.mouseEnabled = !1, this.timer.once(2e3, this, this.onMouseEnabled)) : (n = 740, this.btn.mouseEnabled = !0, j.isLong() && (n += 60)), t ? Laya.Tween.to(this.btn, {
                    top: n
                }, 200) : this.btn.top = n;
            }
            onMouseEnabled() {
                this.btn.mouseEnabled = !0;
            }
            getPinY() {
                return !D.Instance.aCheck() && this.btn ? this.btn.localToGlobal(new Laya.Point(0, this.btn.height)).y - 50 : -1;
            }
            initETouch() {
                j.IsQutoutiao() ? this.isETouch = !1 : U.Instance.disFunc() && (this.isETouch = !0);
            }
            onShowBannerCompleted(e) {
                e == Ge.RoleProgress.id && this.hasETouch() && Laya.timer.once(1e3, this, () => {
                    this.updateBtnBox(!1, !0);
                });
            }
            doAnimate() {
                V.Instance.playSound(k.Progress, 100);
                let e = this.proInfo.num,
                    t = this.proInfo.total,
                    n = e / t,
                    i = (e + 1) / t;
                i > 1 && (i = 1), this.pro = 100 * n, this.newPro = 100 * i, this.tempPro = this.pro, this.roleProgress.value = n, this.proValue.text = Math.floor(this.pro) + "%";
                let a = this.calcTimeForPorgress(i - n);
                Laya.Tween.to(this.roleProgress, {
                    value: i
                }, a, Laya.Ease.linearNone, Laya.Handler.create(this, this.aniComplete)), Laya.Tween.to(this, {
                    labelPro: this.newPro
                }, a, Laya.Ease.linearNone), this.aniTime = a;
            }
            calcTimeForPorgress(e) {
                let t = 2e3 * e;
                return Math.max(1500, t);
            }
            set labelPro(e) {
                this.tempPro = e, this.proValue.text = Math.floor(e) + "%";
            }
            get labelPro() {
                return this.tempPro;
            }
            aniComplete() {
                V.Instance.stopSound(k.Progress), this.proValue.changeText(Math.floor(this.newPro) + "%"), this.doBtnAni();
            }
            doBtnAni() {
                this.newPro >= 100 ? (V.Instance.playSound(k.LevelUpdate), this.btnLabel.text = "USE") : this.btnLabel.text = "CONTINUE", j.IsWeChat() || (this.btn.visible = !0, this.btn.scaleX = 0, this.btn.scaleY = 0, Laya.Tween.to(this.btn, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.linearNone, null, 200));
            }
            onBtn() {
                V.Instance.playUIClick(), this.newPro >= 100 && (De.Instance.curCarSkin = this.proInfo.id, c.Instance.event(s.SkinChange)), U.Instance.openInterFull(() => {
                    Pe.Instance.showTreasureBox();
                }), H.Instance.onBack(S.coin4), V.Instance.stopSound(k.Progress), He.Instance.closeUI(Ge.RoleProgress);
            }
            onClose() {
                Pe.Instance.showTreasureBox();
            }
            onShareBtn() {
                V.Instance.playUIClick(), D.Instance.showVideeoOrShare(g.DefaultShare);
            }
        },
        res: null
    }, Ge.Setting = {
        id: 107,
        cls: class extends e.SettingViewUI {
            init(e) {
                this.registerEvent(), this.updateBtns();
            }
            uninit() {
                this.unregisterEvent();
            }
            registerEvent() {
                this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn), this.soundBtn.on(Laya.Event.CLICK, this, this.onSoundBtn), this.musicBtn.on(Laya.Event.CLICK, this, this.onMusicBtn);
            }
            unregisterEvent() {
                this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtn), this.soundBtn.off(Laya.Event.CLICK, this, this.onSoundBtn), this.musicBtn.off(Laya.Event.CLICK, this, this.onMusicBtn);
            }
            onCloseBtn() {
                V.Instance.playUIClick(), He.Instance.closeUI(Ge.Setting);
            }
            updateBtns() {
                let e = V.Instance.getMusicVolume();
                this.musicBtn.skin = this.getCheckImage(0 != e);
                let t = V.Instance.getSoundVolume();
                this.soundBtn.skin = this.getCheckImage(0 != t);
            }
            onMusicBtn() {
                V.Instance.playUIClick();
                let e = 0 == V.Instance.getMusicVolume() ? 1 : 0;
                V.Instance.setMusicVolume(e), V.Instance.setMusicMute(0 == e), this.updateBtns();
            }
            getCheckImage(e) {
                return e ? "pub/ic_check.png" : "pub/ic_uncheck.png";
            }
            onSoundBtn() {
                V.Instance.playUIClick();
                let e = 0 == V.Instance.getSoundVolume() ? 1 : 0;
                V.Instance.setSoundVolume(e), V.Instance.setSoundMute(0 == e), this.updateBtns();
            }
        },
        res: null
    }, Ge.TreasureBox = {
        id: 108,
        cls: class extends e.TreasureBoxUI {
            constructor() {
                super(...arguments), this.keyCount = 0, this.curSharePos = g.Unknow, this.skinItemIndex = 0, this.unlockCount = 0, this.skinID = 0, this.gold = 0;
            }
            init(e) {
                e && (this.keyCount = e.keyCount), this.genertedData(), this.regiestEvent(), this.updateView();
            }
            uninit() {
                this.unregiestEvent();
            }
            genertedData() {
                let e = De.Instance.getTBSkinList();
                if (e && e.length) {
                    this.skinItemIndex = A.getRandom(1, 8);
                    let t = e[A.getRandom(0, e.length - 1)];
                    t && (this.skinID = t.id);
                }
                this.skinID || (this.gold = 500), this.tbItems = [];
                for (let e = 0; e < 9; e++) this.tbItems.push(new Fe());
                this.list.dataSource = this.tbItems, this.list.renderHandler = new Laya.Handler(this, this.onItemRender), this.updateGotInfo();
            }
            onItemRender(e, t) {
                let n = e.dataSource;
                n.index = t, e.updateItem(n);
            }
            regiestEvent() {
                c.Instance.on(s.TBoxItem, this, this.onItemClick), c.Instance.on(s.ShowAdCompleted, this, this.onShowAdComplete), this.countiueBtn.on(Laya.Event.CLICK, this, this.onContuineBtn), this.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn);
            }
            unregiestEvent() {
                c.Instance.off(s.TBoxItem, this, this.onItemClick), c.Instance.off(s.ShowAdCompleted, this, this.onShowAdComplete), this.countiueBtn.off(Laya.Event.CLICK, this, this.onContuineBtn), this.videoBtn.off(Laya.Event.CLICK, this, this.onVideoBtn);
            }
            onItemClick(e) {
                V.Instance.playUIClick();
                let t = this.tbItems[e];
                if (t.lock && !(this.keyCount <= 0)) {
                    if (this.unlockCount + 1 === this.skinItemIndex && this.skinID > 0) {
                        let e = De.Instance.getSkinCfg(this.skinID);
                        if (e) t.skinID = e.id, De.Instance.activeSkin(e.id), De.Instance.curSkin = e.id;
                        else {
                            let e = 10 * A.getRandom(20, 50);
                            t.gold = e, e > this.gold && (this.gold = e), $.Instance.gold += e;
                        }
                    } else {
                        let e = 10 * A.getRandom(20, 50);
                        t.gold = e, e > this.gold && (this.gold = e), $.Instance.gold += e;
                    }
                    t.lock = !1, this.unlockCount++, this.keyCount--, this.updateView(), V.Instance.playSound(k.LevelUpdate);
                }
            }
            onShowAdComplete(e) {}
            changeStarSkin(e, t = !0) {
                let n = t ? "treasure/key_full.png" : "treasure/key_empty.png";
                e.skin !== n && (e.skin = n);
            }
            updateView() {
                this.keyCount > 0 && this.unlockCount < 9 ? (this.keyBox.visible = !0, this.btnBox.visible = !1, this.changeStarSkin(this.key1, this.keyCount >= 1), this.changeStarSkin(this.key2, this.keyCount >= 2), this.changeStarSkin(this.key3, this.keyCount >= 3)) : (this.btnBox.visible = !0, this.unlockCount >= 9 ? this.videoBtn.disabled = !0 : this.videoBtn.disabled = !1, this.keyBox.visible = !1), this.list.refresh();
            }
            updateGotInfo() {
                if (!this.skinImageView.visible)
                    if (this.skinID > 0) {
                        let e = De.Instance.getSkinCfg(this.skinID);
                        this.skinImageView.skin = e.img, this.coinBox.visible = !1, this.skinImageView.visible = !0;
                    } else this.gold > 0 ? (this.coinBox.visible = !0, this.skinImageView.visible = !1, this.coinLabel.text = `+ ${this.gold}`) : (this.coinBox.visible = !1, this.skinImageView.visible = !1);
            }
            onVideoBtn() {
                V.Instance.playUIClick();
                platform.getInstance().showReward(() => {
                    this.keyCount = 3, this.curSharePos = g.Unknow, this.updateView();
                });
            }
            onContuineBtn() {
                V.Instance.playUIClick(), Pe.Instance.toHomeUI();
            }
        },
        res: null
    }, Ge.Try = {
        id: 109,
        cls: class extends e.TryViewUI {
            constructor() {
                super(...arguments), this.cfg = null, this.curSharePos = g.Unknow, this.isETouch = !1;
            }
            init(e) {
                this.cfg = e.cfg, this.registerEvent(), this.initView();
                let t = this;
                j.IsWeChat() || (this.closeBtn.visible = !1, Laya.timer.once(1500, this, function() {
                    t.closeBtn.visible = !0;
                })), this.closeBtn.visible = !0, this.dayNotBox.visible = !1, $.Instance.dayBattleCount >= l.vGameInfo.showCheckBox && Laya.timer.once(2e3, this, function() {
                    t.dayNotBox.visible = !0;
                }), this.updateDayNotTryCheck(), H.Instance.onTrain(S.showTrain);
            }
            uninit() {
                Laya.timer.clearAll(this), this.unregisterEvent(), c.Instance.event(s.checkSkinChange);
            }
            registerEvent() {
                this.closeBtn.on(Laya.Event.CLICK, this, this.onClosed), this.btn.on(Laya.Event.CLICK, this, this.onBtn), c.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted), c.Instance.on(s.ShowBannerCompleted, this, this.onShowBannerCompleted), c.Instance.on(s.CloseShowAd, this, this.onCloseShowAd);
            }
            unregisterEvent() {
                this.closeBtn.off(Laya.Event.CLICK, this, this.onClosed), this.btn.off(Laya.Event.CLICK, this, this.onBtn), c.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted), c.Instance.off(s.ShowBannerCompleted, this, this.onShowBannerCompleted), c.Instance.off(s.CloseShowAd, this, this.onCloseShowAd);
            }
            initView() {
                V.Instance.playSound(k.LevelUpdate);
                let e = this.cfg;
                c.Instance.event(s.SkinShowChange, {
                    roleCfg: e
                }), this.bgAni.play(0, !0), this.heartAni.play(0, !0), this.initETouch();
            }
            showBannerOffset() {}
            hasETouch() {
                return this.isETouch && !a.chidState;
            }
            updateBtnBox(e = !1, t = !1) {
                let n = 0;
                e ? n = 950 : (n = 750, j.isLong() && (n += 60)), t ? Laya.Tween.to(this.closeBtn, {
                    top: n
                }, 200) : this.closeBtn.top = n;
            }
            getPinY() {
                return !D.Instance.aCheck() && this.closeBtn ? this.closeBtn.localToGlobal(new Laya.Point(0, this.closeBtn.height)).y - 50 : -1;
            }
            initETouch() {
                j.IsQutoutiao() ? this.isETouch = !1 : U.Instance.disFunc() && (this.isETouch = !0);
            }
            onShowBannerCompleted(e) {
                e == Ge.Try.id && this.hasETouch() && Laya.timer.once(1e3, this, () => {
                    this.updateBtnBox(!1, !0);
                });
            }
            onClosed() {
                V.Instance.playUIClick(), this.doClose();
            }
            onBtn() {
                V.Instance.playUIClick();
                platform.getInstance().showReward(() => {
                    De.Instance.getSkinInfo(this.cfg.id), De.Instance.setTempSkin(this.cfg.id, ye.role), c.Instance.event(s.SkinChange), this.curSharePos = g.Unknow, this.doClose();
                })
            }
            onShowAdCompleted(e) {}
            doClose() {
                He.Instance.closeUI(Ge.Try);
            }
            onCloseShowAd(e) {}
            onDayNot() {}
            updateDayNotTryCheck() {}
        },
        res: null
    }, Ge.ForestTui = {
        id: 110,
        cls: class extends e.ZsTuiViewUI {
            constructor() {
                super(...arguments), this.from = ve.Unkonw;
            }
            init(e) {
                this.cb = e.cb, this.from = e.from, this.regiestEvent(), this.from == ve.AfterSettle ? (this.closeBtn.visible = !1, this.btn.visible = !1, Laya.timer.once(1500, this, () => {
                    this.btn.visible = !0;
                })) : (this.closeBtn.visible = !0, this.btn.visible = !1), this.initTui();
            }
            uninit() {
                Laya.timer.clearAll(this), this.unregiestEvent();
            }
            regiestEvent() {
                this.closeBtn.on(Laya.Event.CLICK, this, this.onBackClose), this.btn.on(Laya.Event.CLICK, this, this.onBackClose);
            }
            unregiestEvent() {
                this.closeBtn.off(Laya.Event.CLICK, this, this.onBackClose), this.btn.off(Laya.Event.CLICK, this, this.onBackClose);
            }
            onBackClose() {
                V.Instance.playUIClick(), this.onClose();
            }
            onClose() {
                this.cb && this.cb(), He.Instance.closeUI(Ge.ForestTui);
            }
            initTui() {
                if (Re.Instance.isOpenSDK()) {
                    let e = Re.Instance.getShowInfo("out");
                    if (e && e.length > 0) {
                        let t = [].concat(e);
                        return this.topList.visible = !0, this.topList.hScrollBarSkin = "", this.topList.selectEnable = !0, this.topList.renderHandler = new Laya.Handler(this, function(e, n) {
                            let i = n % t.length,
                                a = t[i];
                            if (!a) return;
                            let s = e.getChildByName("itemImg"),
                                o = e.getChildByName("itemName"),
                                r = e.getChildByName("itemRed");
                            Re.checkTuiItemRed(r), Re.addImageAnimation(s, a), o.text = Re.Instance.getShowName(a), e.offAll(null), e.on(Laya.Event.CLICK, this, function() {
                                Re.navigateToMiniProgram(a, this.from, null);
                            });
                        }), this.hotList.visible = !0, this.hotList.vScrollBarSkin = "", this.hotList.selectEnable = !0, void(this.hotList.renderHandler = new Laya.Handler(this, function(e, n) {
                            let i = n % t.length,
                                a = t[i];
                            if (!a) return;
                            let s = e.getChildByName("itemImg"),
                                o = e.getChildByName("itemNameBg"),
                                r = e.getChildByName("itemName"),
                                h = e.getChildByName("itemRed");
                            Re.checkTuiItemRed(h), Re.addImageAnimation(s, a), r.text = Re.Instance.getShowName(a), o.skin = "tui/" + (n % 9 + 1) + ".png", e.offAll(null), e.on(Laya.Event.CLICK, this, function() {
                                Re.navigateToMiniProgram(a, this.from, null);
                            });
                        }));
                    }
                }
                this.onClose();
            }
        },
        res: null
    }, Ge.ForestFull = {
        id: 110,
        cls: class extends e.item.ForestFullUI {
            constructor() {
                super(...arguments), this.cb = null, this.fullscroll = null;
            }
            init(e) {
                this.cb = e.cb, this.regiestEvent(), this.initView(), this.continueBtn.visible = !1;
                let t = l.vGameInfo.timeContinue;
                this.timer.once(t, this, this.onVisContinue);
            }
            uninit() {
                this.unregiestEvent(), this.timer.clear(this, this.onVisContinue);
            }
            regiestEvent() {
                this.TuiBack.on(Laya.Event.CLICK, this, this.onTuiBack), this.continueBtn.on(Laya.Event.CLICK, this, this.onContinue);
            }
            unregiestEvent() {
                this.TuiBack.off(Laya.Event.CLICK, this, this.onTuiBack), this.continueBtn.off(Laya.Event.CLICK, this, this.onContinue);
            }
            initView() {
                this.TuiBack.top = j.isLong() ? 75 : 20, this.fullBox.top = j.isLong() ? 140 : 80, this.fullscroll = U.Instance.addInterFull(this.fullBox);
            }
            onTuiBack() {
                V.Instance.playUIClick(), U.Instance.addInterFullList(this), H.Instance.onBack(S.back2);
            }
            onVisContinue() {
                this.continueBtn.visible = !0;
            }
            onContinue() {
                V.Instance.playUIClick(), this.fullscroll && this.fullscroll.clear(), this.cb && this.cb(), He.Instance.closeUI(Ge.ForestFull);
            }
        },
        res: null
    }, Ge.AddStart = {
        id: 112,
        cls: class extends e.AddStartViewUI {
            constructor() {
                super(...arguments), this.count = 25, this.finish = !1, this.isFirst = !0, this.tapTimeArr = [], this.totalCount = 0, this.sampleCount = 0, this.coin = 0, this.startTime = 0, this.maskWidth = 0, this.banner = null, this.curSharePos = g.Unknow, this.bannerPinY = 0, this.bannerTop = 0, this.imageCount = 0, this.styleTop = 0, this.moveTime = 5, this.isSuccess = !1, this.isShow = !0, this.isTime = !0, this.isReport = !0, this.a3xView = null, this.cfg = null;
            }
            init(e) {
                this.cfg = e, this.regiestEvent(), this.count = 20 + Math.floor(10 * Math.random()), this.totalCount = this.count, this.tapTimeArr = [], this.sampleCount = Math.floor(4 * Math.random() + 4), this.boxBottom.visible = !0, this.boxTop.visible = !0, this.awardActionView.visible = !1, this.awardInfoView.visible = !1, this.boxTimeBg.visible = !0, j.isLong() && (this.labSx.top = 90), j.Instance.report(b.showEgg), this.initScene(), this.a3xbox.visible = !1;
            }
            uninit() {
                this.unregiestEvent(), this.move.stop();
            }
            regiestEvent() {
                this.hitBtn.on(Laya.Event.CLICK, this, this.clickHitBtn), this.watchADBtn.on(Laya.Event.CLICK, this, this.clickWatchADBtn), c.Instance.on(s.BannerPosChange, this, this.onADBannerChange), Laya.timer.frameLoop(1, this, this.updateMaskHeight), this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn), c.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted), c.Instance.on(s.GetFocus, this, this.onGameShow), c.Instance.on(s.LostFocus, this, this.onGameHide);
            }
            unregiestEvent() {
                this.hitBtn.off(Laya.Event.CLICK, this, this.clickHitBtn), this.watchADBtn.off(Laya.Event.CLICK, this, this.clickWatchADBtn), c.Instance.off(s.BannerPosChange, this, this.onADBannerChange), Laya.timer.clear(this, this.updateMaskHeight), c.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted), this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtn), c.Instance.off(s.GetFocus, this, this.onGameShow), c.Instance.off(s.LostFocus, this, this.onGameHide);
            }
            updateMaskHeight() {
                this.maskWidth -= 2, this.maskWidth < 0 && (this.maskWidth = 0), this.updateMask();
            }
            updateMask() {
                let e = this.maskWidth;
                this.maskView.graphics.clear(), this.maskView.graphics.drawRect(0, 0, e, this.maskView.height, "#FF0000");
            }
            clickHitBtn() {
                this.move.play(0, !0), this.isTime && (this.isTime = !1, Laya.timer.loop(1e3, this, this.onTime)), this.isFirst && (this.startTime = new Date().getTime(), this.isFirst = !1);
                let e = 0,
                    t = !1,
                    n = new Date().getTime();
                if (this.tapTimeArr.push(n), this.tapTimeArr.length < this.sampleCount ? (e = this.tapTimeArr.length / (n - this.tapTimeArr[0]), e = Math.min(e, .001 * this.tapTimeArr.length)) : e = this.sampleCount / (n - this.tapTimeArr[this.tapTimeArr.length - this.sampleCount]), e *= 125, t = (e = Math.min(1, e)) > .9, e > .4 && e < .6 && Math.random() < .7 && this.isReport && (this.isShow = !1, this.isReport = !1, this.isSuccess = !0, this.banner && this.banner.show && this.banner.show(), this.timer.once(3e3, this, this.onHideBanner), this.timer.clear(this, this.onTime), t = !0), e > .5 && Math.random() < .7 && (this.isSuccess = !0, this.changeStarSkin(this.star2), this.changeStarSkin(this.star3), t = !0), this.maskWidth = this.maskView.width * e, e >= .5 && this.changeStarSkin(this.star1), e >= .75 && this.changeStarSkin(this.star2), e >= .95 && (this.isSuccess = !0, this.changeStarSkin(this.star3)), this.updateMask(), V.Instance.playSound(k.egg), !this.finish && (this.count--, 0 === this.count || t)) {
                    let e = l.vGameInfo && l.vGameInfo.eggInfo && l.vGameInfo.eggInfo.delay || 300;
                    0 === this.count && (e = (l.vGameInfo && l.vGameInfo.eggInfo && l.vGameInfo.eggInfo.eDelay || 1500) + Math.floor(500 * Math.random())), this.finish = !0, Laya.timer.once(e, this, () => {
                        Laya.timer.clear(this, this.updateMaskHeight), this.awardActionView.visible = !0, this.awardInfoView.visible = !0, this.labSx.text = "SUCCESS", this.onHide(), this.timer.clear(this, this.onTime), this.ani4.play(0, !0);
                        let e = new Date().getTime() - this.startTime,
                            t = this.totalCount / e;
                        t = Math.max(t, .003), t = (1e3 * Math.min(t, .008) - 3) / 10 + .5, this.coin = Math.round(100 * t) + 50, this.coinLabel.text = `${this.coin}`, V.Instance.playSound(k.LevelUp), j.IsQQ() && this.banner && this.banner.style && (this.banner.style.top = this.styleTop || 3e3), this.isShow && this.banner && this.banner.show && this.banner.show(), j.Instance.report(b.hitedEgg, {
                            hitCount: this.totalCount - this.count,
                            totalCount: this.totalCount,
                            timeDiff: e / 1e3,
                            showBanner: null !== this.banner && void 0 !== this.banner,
                            heigthInfo: `${this.bannerPinY}-${this.bannerTop}-${this.stage.height}`
                        }), this.isShow && this.banner && this.banner.show && this.banner.show(), this.timer.once(3e3, this, this.onHideBanner);
                    });
                }
            }
            changeStarSkin(e) {
                e && "egg/img_start2.png" !== e.skin && (e.skin = "egg/img_start2.png");
            }
            clickWatchADBtn() {
                this.curSharePos = g.AddStart, D.Instance.showVideeoOrShare(this.curSharePos);
            }
            onCloseBtn() {
                V.Instance.playUIClick(), $.Instance.gold += this.coin, He.Instance.closeUI(Ge.AddStart), this.isSuccess ? this.onSettlment(!0) : this.onSettlment(!1);
            }
            onShowAdCompleted(e) {
                e === this.curSharePos && ($.Instance.gold += 10 * this.coin, He.Instance.closeUI(Ge.AddStart)), this.onSettlment(!0);
            }
            onHideBanner() {
                this.banner && this.banner.hide && this.banner.hide(), Laya.timer.loop(1e3, this, this.onTime);
            }
            onGameShow() {
                Laya.timer.loop(1e3, this, this.onTime);
            }
            onGameHide() {
                this.timer.clear(this, this.onTime);
            }
            onTime() {
                this.moveTime--, this.labTime.text = `${this.moveTime}`, 0 == this.moveTime && (this.timer.clear(this, this.onTime), this.isSuccess || (this.onHide(), this.labSx.text = "FIAL", this.awardActionView.visible = !0, this.awardInfoView.visible = !1, this.watchADBtn.visible = !1, this.closeBtn.text = "CLOSE", this.closeBtn.fontSize = 50, this.a3xbox.visible = !0, this.isShow && this.banner && this.banner.show && this.banner.show()));
            }
            onHide() {
                this.boxTop.visible = !1, this.boxBottom.visible = !1, this.boxCenter.visible = !1;
            }
            initScene() {
                if (U.Instance.isOpenSDK()) {
                    let e = (j.isLong(), 400);
                    this.a3xView = U.Instance.add3x(this.a3xbox, 0, 0, e);
                } else this.a3xbox.visible = !1;
            }
            onSettlment(e) {
                let t = Pe.Instance.gameScene.progress,
                    n = Pe.Instance.gameScene.score,
                    i = Pe.Instance.gameScene.currenKey;
                e && (t = 1), He.Instance.openUI(Ge.Settlement, {
                    coin: n,
                    success: !0,
                    key: i,
                    progress: t
                });
            }
            onADBannerChange(e) {
                e.ADPos === Ge.AddStart.id && e.BannerAD && (this.bannerTop = e.top, this.banner = e.BannerAD, this.banner && this.banner.hide && this.banner.hide(), Laya.timer.once(20, this, () => {
                    this.banner && this.banner.hide && this.banner.hide();
                }), Laya.timer.once(40, this, () => {
                    this.banner && this.banner.hide && this.banner.hide();
                }), j.IsQQ() && (this.banner && this.banner.style ? (this.styleTop = this.banner.style.top, this.banner.style.top = 3e3) : this.styleTop = 3e3));
            }
            getPinY() {
                let e = this.hitBtn.localToGlobal(new Laya.Point(0, -10));
                return this.bannerPinY = e.y, e.y;
            }
        },
        res: null
    }, Ge.Egg = {
        id: 113,
        cls: class extends e.EggViewUI {
            constructor() {
                super(...arguments), this.count = 30, this.finish = !1, this.isFirst = !0, this.tapTimeArr = [], this.totalCount = 0, this.sampleCount = 0, this.coin = 0, this.startTime = 0, this.maskHeight = 0, this.banner = null, this.bannerPinY = 0, this.bannerTop = 0;
            }
            init(e) {
                this.regiestEvent(), this.count = 20 + Math.floor(10 * Math.random()), this.totalCount = this.count, this.tapTimeArr = [], this.sampleCount = Math.floor(4 * Math.random() + 4), this.hitActionView.visible = !0, this.hitInfoView.visible = !0, this.awardActionView.visible = !1, this.awardInfoView.visible = !1, this.ani1.play(0, !0), this.ani5.play(0, !0), this.moveBannerToOutOfScreen(), Laya.timer.loop(10, this, this.moveBannerToOutOfScreen);
            }
            uninit() {
                this.unregiestEvent();
            }
            regiestEvent() {
                this.hitBtn.on(Laya.Event.CLICK, this, this.clickHitBtn), this.watchADBtn.on(Laya.Event.CLICK, this, this.clickWatchADBtn), this.closeBtn.on(Laya.Event.CLICK, this, this.clickCloseBtn), c.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted), c.Instance.on(s.BannerPosChange, this, this.onADBannerChange), Laya.timer.frameLoop(1, this, this.updateMaskHeight);
            }
            unregiestEvent() {
                this.hitBtn.off(Laya.Event.CLICK, this, this.clickHitBtn), this.watchADBtn.off(Laya.Event.CLICK, this, this.clickWatchADBtn), this.closeBtn.off(Laya.Event.CLICK, this, this.clickCloseBtn), c.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted), c.Instance.off(s.BannerPosChange, this, this.onADBannerChange), Laya.timer.clear(this, this.updateMaskHeight), Laya.timer.clear(this, this.moveBannerToOutOfScreen);
            }
            updateMaskHeight() {
                this.maskHeight -= 2, this.maskHeight < 0 && (this.maskHeight = 0), this.updateMask();
            }
            updateMask() {
                let e = this.maskHeight;
                this.maskView.graphics.clear(), this.maskView.graphics.drawRect(0, this.maskView.height - e, this.maskView.width, e, "#FF0000");
            }
            clickHitBtn() {
                Laya.timer.clear(this, this.moveBannerToOutOfScreen), this.isFirst && (this.startTime = new Date().getTime(), this.isFirst = !1), this.hitAni.visible = !0, this.hitAni.play(0, !1), this.ani5.play(0, !1);
                let e = 0,
                    t = !1,
                    n = new Date().getTime();
                if (this.tapTimeArr.push(n), this.tapTimeArr.length < this.sampleCount ? (e = this.tapTimeArr.length / (n - this.tapTimeArr[0]), e = Math.min(e, .001 * this.tapTimeArr.length)) : e = this.sampleCount / (n - this.tapTimeArr[this.tapTimeArr.length - this.sampleCount]), e *= 125, t = (e = Math.min(1, e)) > .9, e > .5 && Math.random() < .7 && (t = !0), this.maskHeight = this.maskView.height * e, this.updateMask(), V.Instance.playSound(k.egg), !this.finish && (this.count--, 0 === this.count || t)) {
                    let e = l.vGameInfo && l.vGameInfo.eggInfo.delay || 300;
                    0 === this.count && (e = (l.vGameInfo && l.vGameInfo.eggInfo.eDelay || 1500) + Math.floor(500 * Math.random())), this.finish = !0, Laya.timer.once(e, this, () => {
                        Laya.timer.clear(this, this.updateMaskHeight), this.hitInfoView.visible = !1, this.hitActionView.visible = !1, this.awardActionView.visible = !0, this.awardInfoView.visible = !0, this.ani1.stop(), this.ani2.play(0, !0), this.ani4.play(0, !0);
                        let e = new Date().getTime() - this.startTime,
                            t = this.totalCount / e;
                        t = Math.max(t, .003), t = (1e3 * Math.min(t, .008) - 3) / 10 + .3, this.coin = Math.ceil(l.vGameInfo.eggInfo.gold * t), this.coinLabel.text = "" + this.coin, this.banner && this.banner.show && this.banner.show(), j.Instance.report(b.hitedEgg, {
                            hitCount: this.totalCount - this.count,
                            totalCount: this.totalCount,
                            timeDiff: e / 1e3,
                            showBanner: null !== this.banner && void 0 !== this.banner,
                            heigthInfo: `${this.bannerPinY}-${this.bannerTop}-${this.stage.height}`
                        }), this.banner && this.banner.show && this.banner.show();
                    });
                }
            }
            clickWatchADBtn() {
                this.curSharePos = g.AddStart, D.Instance.showVideeoOrShare(this.curSharePos), this.onSettlment();
            }
            clickCloseBtn() {
                Ue.Instance.gold += this.coin, Ue.saveGameData(), He.Instance.showTips(`COIN x ${this.coin}`), V.Instance.playSound(k.Gold), this.closeView(), Laya.timer.loop(10, this, this.moveBannerToOutOfScreen), this.onSettlment();
            }
            moveBannerToOutOfScreen() {
                this.banner && this.banner.hide();
            }
            onSettlment() {
                let e = Pe.Instance.gameScene.progress,
                    t = Pe.Instance.gameScene.score,
                    n = Pe.Instance.gameScene.currenKey;
                He.Instance.openUI(Ge.Settlement, {
                    coin: t,
                    success: !0,
                    key: n,
                    progress: e
                });
            }
            closeView() {
                He.Instance.closeUI(Ge.Egg);
            }
            onShowAdCompleted(e) {
                this.curSharePos === e && (Ue.Instance.gold += 10 * this.coin, Ue.saveGameData(), He.Instance.showTips(`COIN x ${this.coin}`), V.Instance.playSound(k.Gold), this.curSharePos = g.Unknow, this.closeView());
            }
            onADBannerChange(e) {
                e.ADPos === Ge.Egg.id && e.BannerAD && (this.bannerTop = e.top, this.banner = e.BannerAD, this.banner && this.banner.hide && this.banner.hide(), Laya.timer.once(10, this, () => {
                    this.banner && this.banner.hide && this.banner.hide();
                }), Laya.timer.once(20, this, () => {
                    this.banner && this.banner.hide && this.banner.hide();
                }), Laya.timer.once(30, this, () => {
                    this.banner && this.banner.hide && this.banner.hide();
                }));
            }
            getPinY() {
                let e = this.hitBtn.localToGlobal(new Laya.Point(0, -10));
                return this.bannerPinY = e.y, e.y;
            }
        },
        res: null
    };
    class He {
        constructor() {
            this.hideBanner = !1, this.adpaterArray = [], this.uiArray = [], this.maskView = null, this.arrTips = null, this.reset(), this.hideBanner = !1;
        }
        static get Instance() {
            return null == He._instance && (He._instance = new He(), He._instance.init()), He._instance;
        }
        init() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.onScreenResize);
        }
        addAdapter(e) {
            this.adpaterArray.push(e);
        }
        clearAdapterOnUI(e) {
            for (var t = e.uiname, n = this.adpaterArray.length - 1; n >= 0; n--) this.adpaterArray[n].uiname == t && this.adpaterArray.splice(n, 1);
        }
        onScreenResize() {
            for (var e = this.adpaterArray.length - 1; e >= 0; e--) this.adpaterArray[e].adapter();
        }
        reset() {
            this.uiArray = [], this.adpaterArray = [];
        }
        pushUI(e) {
            this.uiArray.push(e);
        }
        toUI(e, t) {
            for (var n = this.uiArray.length - 1; n >= 0; n--) {
                var i = this.uiArray[n];
                this.uninitUI(i);
            }
            this.uiArray.length = 0, this.openUI(e, t);
        }
        openUIUnique(e, t, n = !0) {
            0 == this.isUIOpen(e) && this.openUI(e, t, n);
        }
        checkBanner() {
            D.Instance.isShowingBanner() && (D.Instance.hideBanner(), this.hideBanner = !0);
        }
        restoreBanner() {
            if (this.hideBanner)
                for (let e = this.uiArray.length - 1; e >= 0; e--) {
                    let t = this.uiArray[e];
                    if (t.visible) {
                        let e = 0;
                        t.getPinY && (e = t.getPinY());
                        let n = t.uiname && t.uiname.id || 0;
                        D.Instance.restoreBanner(n, e), this.hideBanner = !1;
                        break;
                    }
                }
        }
        openUI(e, t = null, n = !0) {
            this.checkBanner(), null != e.res ? Laya.loader.load(e.res, Laya.Handler.create(null, function() {
                He.Instance.createUI(e, t, n);
            }), null) : this.createUI(e, t, n);
        }
        createUI(e, t, n = !0) {
            var i = new e.cls();
            if (null != i) {
                i.uiname = e;
                let a = !0;
                switch (e) {
                    case Ge.Load:
                        i.zOrder = He._loadingViewZorder, a = !1;
                        break;
                    default:
                        i.zOrder = He._viewZorder++;
                }
                if (n && this.uiArray.length > 0) {
                    let e = this.uiArray[this.uiArray.length - 1];
                    e.visible && (null !== e.didHide && void 0 !== e.didHide && e.didHide(), c.Instance.event(s.HideView, e));
                }
                Laya.stage.addChild(i), this.pushUI(i), i.visible = n;
                let o = 0;
                i.getPinY && (o = i.getPinY()), c.Instance.event(s.OpenView, e), null != i.init && n && i.init(t), a = this.canShowBaner(i), U.Instance.isOpenSDK() ? e !== Ge.Load && e !== Ge.Settlement && e !== Ge.RoleProgress && e !== Ge.Try || (a = !1) : e === Ge.Load && (a = !1), n && a && D.Instance.showADBanner(e.id, o), n && (c.Instance.event(s.ShowView, i), null !== i.didShow && void 0 !== i.didShow && n && i.didShow());
            }
        }
        closeUI(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                var n = this.uiArray[t];
                if (n.uiname == e) {
                    this.uninitUI(n), this.uiArray.splice(t, 1);
                    break;
                }
            }
            for (let e = this.uiArray.length - 1; e >= 0; e--) {
                let t = this.uiArray[e];
                if (t.visible) {
                    if (null !== t.didShow && void 0 !== t.didShow && t.didShow(), c.Instance.event(s.ShowView, t), this.hideBanner) {
                        let e = 0;
                        t.getPinY && (e = t.getPinY());
                        let n = t.uiname && t.uiname.id || 0;
                        D.Instance.restoreBanner(n, e), this.hideBanner = !1;
                    }
                    break;
                }
            }
        }
        isUIOpen(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                if (this.uiArray[t].uiname === e) return !0;
            }
            return !1;
        }
        isTopUI(e) {
            for (let t = this.uiArray.length - 1; t >= 0; t--) {
                let n = this.uiArray[t];
                if (n.visible) return n.uiname === e;
            }
            return !1;
        }
        showUI(e, t) {
            for (var n = this.uiArray.length - 1; n >= 0; n--) {
                var i = this.uiArray[n];
                if (i.uiname == e) {
                    null != i.init && i.init(t), null !== i.didShow && i.didShow(), c.Instance.event(s.ShowView, i), i.visible = !0, i.zOrder = He._viewZorder++;
                    let n = 0;
                    return i.getPinY && (n = i.getPinY()), this.canShowBaner(i) && D.Instance.showADBanner(e.id, n), c.Instance.event(s.OpenView, e), !0;
                }
            }
            return !1;
        }
        hideUI(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                var n = this.uiArray[t];
                if (n.uiname == e) {
                    n.visible = !1, null !== n.didHide && n.didHide(), c.Instance.event(s.HideView, n), null !== n.uninit && n.uninit(), this.checkBanner();
                    break;
                }
            }
            for (let e = this.uiArray.length - 1; e >= 0; e--) {
                let t = this.uiArray[e];
                if (t.visible) {
                    if (this.hideBanner) {
                        let e = 0;
                        t.getPinY && (e = t.getPinY());
                        let n = t.uiname && t.uiname.id || 0;
                        D.Instance.restoreBanner(n, e), this.hideBanner = !1;
                    }
                    break;
                }
            }
        }
        findUI(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                var n = this.uiArray[t];
                if (n.uiname == e) return n;
            }
            return null;
        }
        uninitUI(e) {
            this.clearAdapterOnUI(e), null != e.uninit && e.uninit(), Laya.timer.clearAll(e), D.Instance.hideBanner(e.uiname.id), e.removeSelf(), e.destroy();
        }
        update() {
            for (var e = this.uiArray.length - 1; e >= 0; e--) {
                var t = this.uiArray[e];
                null != t.update && t.update();
            }
        }
        showDialog(e) {}
        showMask(e) {
            if (e && null == this.maskView) {
                var t = new Laya.Sprite();
                this.maskView = t, t.graphics.drawRect(-530, -180, 2340, 1080, "#949494"), t.alpha = .5, t.mouseThrough = !1, t.mouseEnabled = !0;
                var n = new Laya.HitArea();
                n.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), t.hitArea = n, t.zOrder = He._dialogZorder, Laya.stage.addChild(this.maskView);
            } else e || null == this.maskView || (this.maskView.removeSelf(), this.maskView.destroy(), this.maskView = null);
        }
        showTips(e, t = 600, n = 30, i = "#FFFFFF") {
            var a = this.arrTips;
            let s = null;
            if (null == a) {
                a = [];
                var o = new Laya.Box();
                Laya.stage.addChild(o), o.zOrder = He._tipsZorder;
                for (var r = 0; r < 3; r++) {
                    (s = new Laya.Box()).width = 600, s.height = 114, s.visible = !1; {
                        let e = new Laya.Image();
                        e.skin = "pub/bg_toast.png", e.width = 600, e.height = 114, s.addChild(e);
                        let t = new Laya.Text();
                        t.name = "txt", t.fontSize = 30, t.color = "#FFFFFF", t.width = 600, t.height = 114, t.align = "center", t.valign = "middle", s.addChild(t);
                    }
                    a.push(s), o.addChild(s);
                }
                this.arrTips = a, o.width = 600, o.centerX = 0, o.centerY = 0;
            }
            if (0 != a.length) {
                {
                    let t = (s = a.shift()).getChildByName("txt");
                    t.text = e, t.fontSize = n || 30, t.color = i || "#FFFFFF";
                }
                t = t || 600, s.visible = !0, s.alpha = 1, Laya.Tween.to(s, {
                    alpha: 0
                }, t, null, Laya.Handler.create(this, function(e) {
                    e.visible = !1, a.push(e);
                }, [s]), 1e3);
            }
        }
        canShowBaner(e) {
            return !e || !e.hasETouch || e.uiname != Ge.Settlement || !e.hasETouch();
        }
        showModal(e) {}
    }
    He._viewZorder = 1e3, He._loadingViewZorder = 2999, He._tipsZorder = 3e3, He._dialogZorder = 3100, He._maskZorder = 3100, He._instance = null, He._debugTxt = null;
    class Xe extends Laya.Box {
        constructor() {
            super(), this.uiname = "", this.uiname = null, Laya.timer.once(20, this, this.adapter);
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
        adapter() {
            if ("scale" === this.name) {
                var e = Laya.stage.width / Laya.stage.designWidth,
                    t = Laya.stage.height / Laya.stage.designHeight,
                    n = e > t ? e : t;
                return this.scaleX = n, this.scaleY = n, this.uiname = this.parent.uiname, void He.Instance.addAdapter(this);
            }
            Laya.stage.designHeight, Laya.stage.designWidth;
            if (!(Laya.stage.height / Laya.stage.width < 2)) {
                var i = 132 / 2436 * Laya.stage.height;
                isNaN(this.top) || (this.top = i + this.top);
            }
        }
        static getBangSafeOffX() {
            return Laya.stage.width / Laya.stage.height < 2 ? 0 : 132 / 2436 * Laya.stage.width;
        }
    }
    class Ye extends e.item.SkinItemViewUI {
        constructor() {
            super(...arguments), this.skinID = 0;
        }
        onAwake() {
            this.list.renderHandler = new Laya.Handler(this, this.onRenderItem);
        }
        onEnable() {}
        onDisable() {}
        updateItem(e, t) {
            this.skinID = t, this.list.dataSource = e;
        }
        onRenderItem(e) {
            let t = e.dataSource;
            t.highLight = t.skinID === this.skinID, e.updateView(t);
        }
    }
    class We extends Laya.Script {
        constructor() {
            super(), this.noInit = !1, this.gameScene = null, this.roleSprite = null, this.skinID = 0, this.curName = "", this.pos = null;
        }
        onEnable() {
            this.initScene(), this.regiestEvent();
        }
        onDisable() {
            this.roleSprite && (this.roleSprite.destroy(), this.roleSprite = null), this.gameScene && (this.gameScene.destroy(!0), this.gameScene = null), this.unregiestEvent(), Laya.timer.clearAll(this);
        }
        regiestEvent() {
            c.Instance.on(s.SkinShowChange, this, this.onSkinChange);
        }
        unregiestEvent() {
            c.Instance.off(s.SkinShowChange, this, this.onSkinChange);
        }
        addRole(e, t) {
            this.roleSprite && (this.roleSprite.removeSelf(), this.roleSprite.destroy(), this.roleSprite = null), this.curName = e, Laya.Sprite3D.load(Z.Instance.getModelPath(`${e}.lh`), Laya.Handler.create(this, n => {
                if (n && !this.destroyed && this.curName === e && this.gameScene && !this.destroyed) {
                    let e = n;
                    if (e) {
                        this.roleSprite = e.clone();
                        let n = te.getCommpentInHerit(this.roleSprite, Laya.Animator);
                        n && (n.speed = 0), this.roleSprite.transform.setWorldLossyScale(new Laya.Vector3(t, t, t)), this.pos && (this.roleSprite.transform.position = this.pos.clone()), this.gameScene.addChild(this.roleSprite), this.roleSprite.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                    }
                }
            }));
        }
        initScene() {
            if (this.gameScene) return;
            this.gameScene = new Laya.Scene3D(), this.owner && this.owner.addChild(this.gameScene);
            let e = new Laya.Camera(0, .1, 1e3);
            this.gameScene.addChild(e), e.transform.rotate(new Laya.Vector3(0, 180, 0), !0, !1), e.transform.position = new Laya.Vector3(0, 0, -1), e.orthographic = !0, e.orthographicVerticalSize = 1, e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
            var t = new Laya.DirectionLight();
            t.color = new Laya.Vector3(1, 1, 1), t.transform.localPosition = new Laya.Vector3(0, 2, 5), t.intensity = .5, t.transform.rotate(new Laya.Vector3(-25, 200, 0), !0, !1), t.shadow = !1, this.gameScene.addChild(t);
            let n = 750 / Laya.stage.width,
                i = 1334 / Laya.stage.height;
            var a = new Laya.Vector3(0, 0, 0),
                s = new Laya.Vector3(0, 0, 0),
                o = new Laya.Vector3(0, 0, 0);
            e.convertScreenCoordToOrthographicCoord(o, a), o.setValue(n, i, 0), e.convertScreenCoordToOrthographicCoord(o, s), this.noInit || this.updateSkinInfo(De.Instance.curSkin), this.gameScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(10, 10, 10)));
            let r = new Laya.Vector2(s.x - a.x, s.y - a.y);
            Laya.timer.once(100, this, () => {
                let t = this.owner,
                    n = t.localToGlobal(new Laya.Point(t.width / 2, t.height / 2));
                this.pos = new Laya.Vector3((n.x - Laya.stage.width / 2 + e.transform.position.x) * r.x, (n.y - Laya.stage.height / 2 + e.transform.position.y) * r.y - .01, e.transform.position.z + 1), this.roleSprite && (this.roleSprite.parent || this.gameScene.addChild(this.roleSprite), this.roleSprite.transform.position = this.pos, this.roleSprite.transform.rotationEuler = new Laya.Vector3(0, 0, 0));
            });
        }
        onSkinChange(e) {
            this.updateSkinInfo(e.roleCfg.id);
        }
        showSkin(e) {}
        updateSkinInfo(e) {
            if (this.skinID != e && (this.skinID = e, this.skinID > 0)) {
                let e = De.Instance.getSkinCfg(this.skinID),
                    t = 2 === e.modelType ? .15 : .08;
                this.addRole(e.name, t);
            }
        }
        onUpdate() {
            this.roleSprite && this.roleSprite.transform.rotate(new Laya.Vector3(0, .01, 0));
        }
    }
    class ze {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("views/runtime/UIAdapter.ts", Xe), e("views/item/DaySignItemView.ts", Me), e("views/item/BoxItemView.ts", Ne), e("views/item/SkinItem.ts", _e), e("views/item/SkinItemView.ts", Ye), e("views/item/RoleShowScript.ts", We);
        }
    }
    ze.width = 750, ze.height = 1334, ze.scaleMode = "showall", ze.screenMode = "none", ze.alignV = "top", ze.alignH = "center", ze.startScene = "AddStartView.scene", ze.sceneRoot = "", ze.debug = !1, ze.stat = !1, ze.physicsDebug = !1, ze.exportSceneToJson = !1, ze.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(ze.width, ze.height) : Laya.init(ze.width, ze.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = ze.scaleMode, Laya.stage.screenMode = ze.screenMode, Laya.stage.alignV = ze.alignV, Laya.stage.alignH = ze.alignH, Laya.URL.exportSceneToJson = ze.exportSceneToJson;
            if (typeof loadRuntime !== 'undefined') {
                Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            }
            if (typeof getAdapterInfo !== "undefined") {
                var stage = Laya.stage;
                var info = getAdapterInfo({
                    width: ze.width,
                    height: ze.height,
                    scaleMode: Laya.Stage.SCALE_FIXED_WIDTH
                });
                stage.designWidth = info.w;
                stage.designHeight = info.h;
                stage.width = info.rw;
                stage.height = info.rh;
                stage.scale(info.scaleX, info.scaleY);
            }
            (ze.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), ze.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), ze.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION), G.Instance.initEnv();
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            G.Instance.onConfigLoaded();
        }
    }();
}();