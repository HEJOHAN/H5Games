var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function(ui) {
    class AwardDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            super.createChildren();
            this.createView(ui.AwardDialogUI.uiView);
        }
    }
    AwardDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "width": 670,
            "height": 810
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 6,
                "x": 460,
                "skin": "core/viewbg4.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 82,
                "x": -15,
                "width": 702,
                "skin": "core/viewbg2.png",
                "sizeGrid": "15,15,15,15",
                "height": 510
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 6,
                    "x": 3,
                    "width": 671,
                    "text": "AWARD",
                    "strokeColor": "#ffffff",
                    "stroke": 2,
                    "height": 56,
                    "fontSize": 42,
                    "font": "Arial",
                    "color": "#ffffff",
                    "align": "center"
                }
            }]
        }, {
            "type": "Label",
            "props": {
                "y": 10,
                "x": 571,
                "width": 132,
                "var": "tfDiamond",
                "valign": "middle",
                "text": "100",
                "strokeColor": "#ffffff",
                "stroke": 2,
                "height": 56,
                "fontSize": 30,
                "font": "Arial",
                "color": "#ffffff",
                "align": "left"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 17,
                "x": 495,
                "skin": "index/diamond.png"
            }
        }, {
            "type": "Box",
            "props": {
                "y": 152,
                "x": -6,
                "width": 682,
                "height": 190
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 190,
                    "x": 682,
                    "width": 682,
                    "skin": "core/viewbg1.png",
                    "sizeGrid": "15,15,15,15",
                    "rotation": 180,
                    "height": 190
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 50,
                    "x": 334,
                    "skin": "index/diamond.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 135,
                    "x": 0,
                    "width": 682,
                    "skin": "core/viewbg3.png",
                    "sizeGrid": "0,15,15,15",
                    "height": 56
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 127,
                    "x": 14,
                    "width": 971,
                    "valign": "middle",
                    "text": "Get free diamonds for watch video.",
                    "scaleY": 1,
                    "scaleX": 1,
                    "height": 74,
                    "fontSize": 30,
                    "font": "Arial",
                    "color": "#ffffff",
                    "bold": true,
                    "align": "left"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 55,
                    "x": 399,
                    "text": "x100",
                    "strokeColor": "#2f1938",
                    "stroke": 2,
                    "scaleY": 1,
                    "scaleX": 1,
                    "fontSize": 30,
                    "font": "Arial",
                    "color": "#2f1938"
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 42,
                    "x": 509,
                    "width": 168,
                    "visible": false,
                    "var": "btnAward00",
                    "stateNum": 1,
                    "skin": "index/qq_huangdi.png",
                    "sizeGrid": "0,15,0,15",
                    "runtime": "touch.Button",
                    "height": 60
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": -9,
                        "x": -45,
                        "width": 261,
                        "valign": "middle",
                        "text": "Get",
                        "scaleY": 1,
                        "scaleX": 1,
                        "height": 74,
                        "fontSize": 30,
                        "font": "Arial",
                        "color": "#ffffff",
                        "bold": true,
                        "align": "center"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 42,
                    "x": 509,
                    "width": 168,
                    "visible": false,
                    "var": "btnAward0",
                    "stateNum": 1,
                    "skin": "index/qq_huidi.png",
                    "sizeGrid": "0,15,0,15",
                    "runtime": "touch.Button",
                    "pivotY": 0,
                    "pivotX": 0,
                    "height": 60
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": -9,
                        "x": -45,
                        "width": 261,
                        "var": "txtAward0",
                        "valign": "middle",
                        "text": "Tomorrow",
                        "scaleY": 1,
                        "scaleX": 1,
                        "height": 74,
                        "fontSize": 30,
                        "font": "Arial",
                        "bold": true,
                        "align": "center"
                    }
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 22,
                    "x": 19,
                    "skin": "index/qq_video.png"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 54,
                    "x": 124,
                    "text": "Watch video",
                    "strokeColor": "#2f1938",
                    "stroke": 2,
                    "scaleY": 1,
                    "scaleX": 1,
                    "fontSize": 30,
                    "font": "Arial",
                    "color": "#2f1938"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": 364,
                "x": -6,
                "width": 682,
                "height": 190
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 190,
                    "x": 682,
                    "width": 682,
                    "skin": "core/viewbg1.png",
                    "sizeGrid": "15,15,15,15",
                    "rotation": 180,
                    "height": 190
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 50,
                    "x": 334,
                    "skin": "index/diamond.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 135,
                    "x": 0,
                    "width": 682,
                    "skin": "core/viewbg3.png",
                    "sizeGrid": "0,15,15,15",
                    "height": 56
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 127,
                    "x": 14,
                    "width": 971,
                    "valign": "middle",
                    "text": "Get into the game every day.",
                    "scaleY": 1,
                    "scaleX": 1,
                    "height": 74,
                    "fontSize": 30,
                    "font": "Arial",
                    "color": "#ffffff",
                    "bold": true,
                    "align": "left"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 55,
                    "x": 399,
                    "text": "X200",
                    "strokeColor": "#2f1938",
                    "stroke": 2,
                    "scaleY": 1,
                    "scaleX": 1,
                    "fontSize": 30,
                    "font": "Arial",
                    "color": "#2f1938"
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 42,
                    "x": 509,
                    "width": 168,
                    "visible": false,
                    "var": "btnAward11",
                    "stateNum": 1,
                    "skin": "index/qq_huangdi.png",
                    "sizeGrid": "0,15,0,15",
                    "runtime": "touch.Button",
                    "pivotY": 0,
                    "pivotX": 0,
                    "height": 60
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": -9,
                        "x": -45,
                        "width": 261,
                        "valign": "middle",
                        "text": "Get",
                        "scaleY": 1,
                        "scaleX": 1,
                        "height": 74,
                        "fontSize": 30,
                        "font": "Arial",
                        "color": "#ffffff",
                        "bold": true,
                        "align": "center"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 42,
                    "x": 509,
                    "width": 168,
                    "visible": false,
                    "var": "btnAward1",
                    "stateNum": 1,
                    "skin": "index/qq_huidi.png",
                    "sizeGrid": "0,15,0,15",
                    "runtime": "touch.Button",
                    "height": 60
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": -9,
                        "x": -45,
                        "width": 261,
                        "var": "txtAward1",
                        "valign": "middle",
                        "text": "Tomorrow",
                        "scaleY": 1,
                        "scaleX": 1,
                        "height": 74,
                        "fontSize": 30,
                        "font": "Arial",
                        "color": "#000000",
                        "bold": true,
                        "align": "center"
                    }
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 22,
                    "x": 19,
                    "skin": "index/qq_signin.png"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 50,
                    "x": 124,
                    "text": "Login game",
                    "strokeColor": "#2f1938",
                    "stroke": 2,
                    "scaleY": 1,
                    "scaleX": 1,
                    "fontSize": 30,
                    "font": "Arial",
                    "color": "#2f1938"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": 504,
                "x": 20,
                "width": 640,
                "visible": false,
                "height": 302
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 274,
                    "x": 630,
                    "skin": "index/sign_big_item_bg.png",
                    "sizeGrid": "36,46,38,55",
                    "rotation": 180,
                    "height": 200
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 122,
                    "x": 361,
                    "visible": false,
                    "skin": "index/diamond.png"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 216,
                    "x": 25,
                    "width": 971,
                    "valign": "middle",
                    "text": "Click to choose a friend and play game.",
                    "scaleY": 0.6,
                    "scaleX": 0.6,
                    "height": 74,
                    "fontSize": 40,
                    "font": "Microsoft YaHei",
                    "color": "#a47973",
                    "bold": true,
                    "align": "left"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 148,
                    "x": 402,
                    "visible": false,
                    "text": "X100",
                    "scaleY": 0.5,
                    "scaleX": 0.5,
                    "font": "yahei"
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 145,
                    "x": 534,
                    "width": 150,
                    "var": "btnAward22",
                    "stateNum": 1,
                    "skin": "index/qq_huangdi.png",
                    "sizeGrid": "15,15,15,15",
                    "runtime": "touch.Button",
                    "pivotY": 25,
                    "pivotX": 75,
                    "height": 50
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 7,
                        "x": 9,
                        "width": 261,
                        "var": "txtAward2",
                        "valign": "middle",
                        "text": "Get",
                        "scaleY": 0.5,
                        "scaleX": 0.5,
                        "height": 74,
                        "fontSize": 40,
                        "font": "Microsoft YaHei",
                        "bold": true,
                        "align": "center"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 145,
                    "x": 534,
                    "width": 150,
                    "visible": false,
                    "var": "btnAward2",
                    "stateNum": 1,
                    "skin": "index/qq_huidi.png",
                    "sizeGrid": "15,15,15,15",
                    "runtime": "touch.Button",
                    "pivotY": 25,
                    "pivotX": 75,
                    "height": 50
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 7,
                        "x": 9,
                        "width": 261,
                        "valign": "middle",
                        "text": "Tomorrow",
                        "scaleY": 0.5,
                        "scaleX": 0.5,
                        "height": 74,
                        "fontSize": 40,
                        "font": "Microsoft YaHei",
                        "bold": true,
                        "align": "center"
                    }
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 102,
                    "x": 41,
                    "skin": "index/qq_friend.png"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 120,
                    "x": 130,
                    "text": "Play with friend",
                    "scaleY": 0.7,
                    "scaleX": 0.7,
                    "font": "yahei"
                }
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 53,
                "x": 57,
                "var": "btnClose",
                "skin": "index/btn_close.png",
                "runtime": "touch.Button",
                "stateNum": 1,
                "pivotX": 41,
                "pivotY": 41
            }
        }]
    };
    ui.AwardDialogUI = AwardDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class EndFriendRankItenUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            super.createChildren();
            this.createView(ui.EndFriendRankItenUI.uiView);
        }
    }
    EndFriendRankItenUI.uiView = {
        "type": "View",
        "props": {
            "width": 720,
            "height": 120
        },
        "child": [{
            "type": "Clip",
            "props": {
                "y": 0,
                "x": 0,
                "width": 720,
                "var": "clipBG",
                "skin": "core/viewbg9.png",
                "sizeGrid": "0,40,0,40",
                "height": 120,
                "clipY": 1
            }
        }, {
            "type": "Label",
            "props": {
                "y": 36,
                "x": 9,
                "width": 100,
                "var": "tfRank",
                "text": "100",
                "scaleY": 1,
                "scaleX": 1,
                "height": 100,
                "fontSize": 40,
                "font": "Arial",
                "color": "#ffffff",
                "bold": true,
                "align": "center"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 15,
                "x": 121,
                "width": 88,
                "var": "imgHead",
                "skin": "core/viewbg7.png",
                "height": 88
            },
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 44,
                    "x": 44,
                    "renderType": "mask"
                },
                "child": [{
                    "type": "Circle",
                    "props": {
                        "radius": 44,
                        "lineWidth": 1,
                        "fillColor": "#ff0000"
                    }
                }]
            }]
        }, {
            "type": "Label",
            "props": {
                "y": 47,
                "x": 241,
                "width": 250,
                "var": "tfName",
                "text": "1234",
                "overflow": "scroll",
                "height": 35,
                "fontSize": 24,
                "font": "Arial",
                "color": "#ffffff",
                "align": "left"
            }
        }, {
            "type": "Label",
            "props": {
                "y": 46,
                "x": 387,
                "width": 227,
                "var": "tfScore",
                "text": "111111111",
                "scaleY": 1,
                "scaleX": 1,
                "height": 48,
                "fontSize": 30,
                "font": "Arial",
                "color": "#ffffff",
                "bold": true,
                "align": "center"
            }
        }, {
            "type": "Button",
            "props": {
                "y": 35,
                "x": 600,
                "var": "play",
                "stateNum": 1,
                "skin": "index/playwithfriend2.png",
                "runtime": "touch.Button"
            }
        }]
    };
    ui.EndFriendRankItenUI = EndFriendRankItenUI;
})(ui || (ui = {}));
(function(ui) {
    class FriendRankDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            View.regComponent("ui.FriendRankItemUI", ui.FriendRankItemUI);
            super.createChildren();
            this.createView(ui.FriendRankDialogUI.uiView);
        }
    }
    FriendRankDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "width": 670,
            "height": 1060
        },
        "child": [{
            "type": "Button",
            "props": {
                "y": 1019,
                "x": 358,
                "width": 165,
                "var": "gModel0",
                "stateNum": 2,
                "runtime": "touch.Button",
                "height": 57,
                "anchorY": 0.5,
                "anchorX": 0.5
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 57,
                    "x": 0,
                    "width": 165,
                    "skin": "index/title.png",
                    "sizeGrid": "40,30,10,30",
                    "scaleY": -1,
                    "name": "on",
                    "height": 57
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 57,
                    "x": 0,
                    "width": 165,
                    "skin": "index/title1.png",
                    "sizeGrid": "40,30,10,30",
                    "scaleY": -1,
                    "name": "off",
                    "height": 57
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 0,
                    "width": 247,
                    "valign": "middle",
                    "text": "MULTI",
                    "scaleY": 0.7,
                    "scaleX": 0.7,
                    "name": "Model0",
                    "height": 85,
                    "fontSize": 20,
                    "font": "yahei",
                    "centerX": 0,
                    "anchorX": 0,
                    "align": "center"
                }
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 1019,
                "x": 523,
                "width": 165,
                "var": "gModel1",
                "runtime": "touch.Button",
                "height": 57,
                "anchorY": 0.5,
                "anchorX": 0.5
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 57,
                    "x": 0,
                    "width": 165,
                    "skin": "index/title.png",
                    "sizeGrid": "40,30,10,30",
                    "scaleY": -1,
                    "name": "on",
                    "height": 57
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 57,
                    "x": 0,
                    "width": 165,
                    "skin": "index/title1.png",
                    "sizeGrid": "40,30,10,30",
                    "scaleY": -1,
                    "name": "off",
                    "height": 57
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 0,
                    "width": 241,
                    "valign": "middle",
                    "text": "SINGLE",
                    "scaleY": 0.7,
                    "scaleX": 0.7,
                    "name": "Model1",
                    "height": 85,
                    "fontSize": 20,
                    "font": "yahei",
                    "centerX": 0,
                    "anchorX": 0,
                    "align": "center"
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "y": 0,
                "x": 0,
                "width": 670,
                "skin": "core/bg_grid.png",
                "height": 996,
                "sizeGrid": "60,60,60,60"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 5,
                    "x": 5,
                    "width": 659,
                    "skin": "index/title.png",
                    "height": 69,
                    "sizeGrid": "40,30,10,30"
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 5,
                        "x": 1,
                        "width": 658,
                        "text": "FRIEND",
                        "height": 56,
                        "font": "yahei",
                        "align": "center"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 39,
                    "x": 40,
                    "var": "btnClose",
                    "stateNum": 1,
                    "skin": "index/btn_close.png",
                    "runtime": "touch.Button",
                    "anchorY": 0.5,
                    "anchorX": 0.5,
                    "pivotX": 41,
                    "pivotY": 41
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 945,
                    "x": 21,
                    "width": 627,
                    "valign": "middle",
                    "text": "Tips:Initialize the ranking list every monday",
                    "scaleY": 1,
                    "scaleX": 1,
                    "overflow": "scroll",
                    "height": 44,
                    "gray": true,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "disabled": true,
                    "color": "#bebebe",
                    "borderColor": "#817c7c",
                    "align": "center"
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "y": 394,
                "x": 12,
                "width": 646,
                "skin": "core/black_grid.png",
                "height": 448,
                "sizeGrid": "30,30,30,30"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 87,
                "x": 12,
                "width": 646,
                "skin": "core/black_grid.png",
                "height": 298,
                "sizeGrid": "30,30,30,30"
            }
        }, {
            "type": "List",
            "props": {
                "y": 411,
                "x": 24,
                "width": 622,
                "var": "listRank",
                "spaceY": 18,
                "repeatX": 1,
                "height": 415
            },
            "child": [{
                "type": "FriendRankItem",
                "props": {
                    "y": -3,
                    "x": 0,
                    "renderType": "render",
                    "runtime": "ui.FriendRankItemUI"
                }
            }]
        }, {
            "type": "FriendRankItem",
            "props": {
                "y": 855,
                "x": 24,
                "var": "viewMySelf",
                "name": "viewMySelf",
                "runtime": "ui.FriendRankItemUI"
            }
        }, {
            "type": "Box",
            "props": {
                "y": 120,
                "x": 242,
                "width": 186,
                "name": "boxRank0"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 0,
                    "x": 43,
                    "width": 100,
                    "name": "imgHead",
                    "height": 100
                },
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 50,
                        "x": 50,
                        "renderType": "mask"
                    },
                    "child": [{
                        "type": "Circle",
                        "props": {
                            "radius": 50,
                            "lineWidth": 1,
                            "fillColor": "#ff0000"
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": -8,
                    "x": 33,
                    "skin": "index/rank_icon_1.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 187,
                    "x": 0,
                    "width": 186,
                    "overflow": "scroll",
                    "name": "tfName",
                    "height": 35,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 224,
                    "x": 2,
                    "width": 227,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "name": "tfScore",
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }, {
                "type": "Button",
                "props": {
                    "width": 154,
                    "visible": true,
                    "stateNum": 1,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "runtime": "touch.Button",
                    "name": "BtnFBShare",
                    "labelSize": 10,
                    "labelFont": "yahei",
                    "height": 229,
                    "centerY": -41,
                    "centerX": 0
                },
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 176,
                        "x": 22.5,
                        "visible": false,
                        "skin": "index/an1.png",
                        "name": "imFbShare0"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 177,
                        "x": 23,
                        "visible": false,
                        "skin": "index/an2.png",
                        "name": "imFbShare1"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 177,
                        "x": 23,
                        "visible": false,
                        "skin": "index/an3.png",
                        "name": "imFbShare2"
                    }
                }]
            }]
        }, {
            "type": "Box",
            "props": {
                "y": 120,
                "x": 40,
                "width": 186,
                "name": "boxRank1"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 32,
                    "x": 53,
                    "width": 80,
                    "name": "imgHead",
                    "height": 80
                },
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 40,
                        "x": 40,
                        "renderType": "mask"
                    },
                    "child": [{
                        "type": "Circle",
                        "props": {
                            "radius": 40,
                            "lineWidth": 1,
                            "fillColor": "#ff0000"
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 23,
                    "x": 43,
                    "skin": "index/rank_icon_2.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 187,
                    "x": 0,
                    "width": 186,
                    "overflow": "scroll",
                    "name": "tfName",
                    "height": 35,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 224,
                    "x": 2,
                    "width": 227,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "name": "tfScore",
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }, {
                "type": "Button",
                "props": {
                    "width": 154,
                    "visible": true,
                    "stateNum": 1,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "runtime": "touch.Button",
                    "name": "BtnFBShare",
                    "labelSize": 10,
                    "labelFont": "yahei",
                    "height": 229,
                    "centerY": -35,
                    "centerX": 0
                },
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 176,
                        "x": 22.5,
                        "visible": false,
                        "skin": "index/an1.png",
                        "name": "imFbShare0"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 177,
                        "x": 23,
                        "visible": false,
                        "skin": "index/an2.png",
                        "name": "imFbShare1"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 177,
                        "x": 23,
                        "visible": false,
                        "skin": "index/an3.png",
                        "name": "imFbShare2"
                    }
                }]
            }]
        }, {
            "type": "Box",
            "props": {
                "y": 120,
                "x": 443,
                "width": 186,
                "name": "boxRank2"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 32,
                    "x": 53,
                    "width": 80,
                    "name": "imgHead",
                    "height": 80
                },
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 40,
                        "x": 40,
                        "renderType": "mask"
                    },
                    "child": [{
                        "type": "Circle",
                        "props": {
                            "radius": 40,
                            "lineWidth": 1,
                            "fillColor": "#ff0000"
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 23,
                    "x": 43,
                    "skin": "index/rank_icon_3.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 187,
                    "x": 0,
                    "width": 186,
                    "overflow": "scroll",
                    "name": "tfName",
                    "height": 35,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 224,
                    "x": 2,
                    "width": 227,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "name": "tfScore",
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 154,
                    "visible": true,
                    "stateNum": 1,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "runtime": "touch.Button",
                    "name": "BtnFBShare",
                    "labelSize": 10,
                    "labelFont": "yahei",
                    "height": 229,
                    "centerY": -35,
                    "centerX": 0
                },
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 176,
                        "x": 22.5,
                        "visible": false,
                        "skin": "index/an1.png",
                        "name": "imFbShare0"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 177,
                        "x": 23,
                        "visible": false,
                        "skin": "index/an2.png",
                        "name": "imFbShare1"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 177,
                        "x": 23,
                        "visible": false,
                        "skin": "index/an3.png",
                        "name": "imFbShare2"
                    }
                }]
            }]
        }, {
            "type": "Button",
            "props": {
                "width": 239,
                "visible": true,
                "var": "btnFBShareFriend",
                "stateNum": 1,
                "skin": "index/btn_green.png",
                "runtime": "touch.Button",
                "labelSize": 10,
                "labelFont": "yahei",
                "height": 65,
                "centerY": 496,
                "centerX": -192,
                "sizeGrid": "35,35,35,35"
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 10,
                    "x": 30,
                    "width": 259,
                    "visible": true,
                    "valign": "middle",
                    "text": "Play Friends",
                    "scaleY": 0.7,
                    "scaleX": 0.7,
                    "height": 58,
                    "fontSize": 10,
                    "font": "yahei",
                    "align": "left"
                }
            }]
        }]
    };
    ui.FriendRankDialogUI = FriendRankDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class FriendRankItemUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            super.createChildren();
            this.createView(ui.FriendRankItemUI.uiView);
        }
    }
    FriendRankItemUI.uiView = {
        "type": "View",
        "props": {
            "width": 622,
            "height": 89
        },
        "child": [{
            "type": "Clip",
            "props": {
                "y": 0,
                "x": 0,
                "var": "clipBG",
                "skin": "index/clip_rank_item.png",
                "clipY": 2
            }
        }, {
            "type": "Label",
            "props": {
                "y": 27,
                "x": 19,
                "width": 60,
                "var": "tfRank",
                "scaleY": 0.7,
                "scaleX": 0.7,
                "font": "yahei",
                "align": "center"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 14,
                "x": 121,
                "width": 60,
                "var": "imgHead",
                "height": 60
            },
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 30,
                    "x": 30,
                    "renderType": "mask"
                },
                "child": [{
                    "type": "Circle",
                    "props": {
                        "radius": 30,
                        "lineWidth": 1,
                        "fillColor": "#ff0000"
                    }
                }]
            }]
        }, {
            "type": "Label",
            "props": {
                "y": 25,
                "x": 203,
                "width": 250,
                "var": "tfName",
                "overflow": "scroll",
                "height": 35,
                "fontSize": 26,
                "font": "Microsoft YaHei",
                "color": "#ffffff",
                "align": "left"
            }
        }, {
            "type": "Label",
            "props": {
                "y": 30,
                "x": 409,
                "width": 156,
                "var": "tfScore",
                "scaleY": 0.6,
                "scaleX": 0.6,
                "height": 48,
                "font": "yahei",
                "align": "right"
            }
        }, {
            "type": "Button",
            "props": {
                "y": 0,
                "x": 449,
                "width": 174,
                "var": "btn_fbshare",
                "runtime": "touch.Button",
                "height": 89
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 20,
                    "x": 56,
                    "var": "fb_share1",
                    "skin": "index/an1.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 20,
                    "x": 56,
                    "visible": false,
                    "var": "fb_share2",
                    "skin": "index/an2.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 20,
                    "x": 56,
                    "visible": false,
                    "var": "fb_share3",
                    "skin": "index/an3.png"
                }
            }]
        }]
    };
    ui.FriendRankItemUI = FriendRankItemUI;
})(ui || (ui = {}));
(function(ui) {
    class GameLoadingUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("ui.MatchItemUI", ui.MatchItemUI);
            super.createChildren();
            this.createView(ui.GameLoadingUI.uiView);
        }
    }
    GameLoadingUI.uiView = {
        "type": "View",
        "props": {
            "y": 0,
            "x": 0,
            "width": 750,
            "top": 0,
            "right": 0,
            "mouseThrough": false,
            "mouseEnabled": true,
            "left": 0,
            "height": 1334,
            "bottom": 0,
            "anchorY": 0,
            "anchorX": 0
        },
        "child": [{
            "type": "Button",
            "props": {
                "width": 750,
                "visible": true,
                "top": 0,
                "mouseThrough": false,
                "mouseEnabled": true,
                "left": 0,
                "height": 1334
            }
        }, {
            "type": "MatchItem",
            "props": {
                "var": "matchView",
                "centerY": 0,
                "centerX": 0,
                "anchorY": 0,
                "anchorX": 0,
                "runtime": "ui.MatchItemUI"
            }
        }]
    };
    ui.GameLoadingUI = GameLoadingUI;
})(ui || (ui = {}));
(function(ui) {
    class GameViewUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            View.regComponent("ui.EndFriendRankItenUI", ui.EndFriendRankItenUI);
            super.createChildren();
            this.createView(ui.GameViewUI.uiView);
        }
    }
    GameViewUI.uiView = {
        "type": "View",
        "props": {
            "width": 750,
            "top": 0,
            "right": 0,
            "left": 0,
            "height": 1334,
            "bottom": 0
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 445,
                "x": 380,
                "visible": false,
                "var": "victory",
                "skin": "index/pk_victory1.png",
                "pivotY": 25,
                "pivotX": 100
            }
        }, {
            "type": "Label",
            "props": {
                "var": "tfScore",
                "top": 197,
                "text": "已超过0名玩家",
                "scaleY": 1.5,
                "scaleX": 1.5,
                "layoutEnabled": true,
                "font": "yahei",
                "centerX": 0,
                "align": "center"
            }
        }, {
            "type": "Box",
            "props": {
                "var": "boxRevive",
                "top": -3,
                "right": 0,
                "left": 0,
                "bottom": 0
            },
            "child": [{
                "type": "Image",
                "props": {
                    "top": -3,
                    "skin": "core/black_mask.png",
                    "right": 0,
                    "left": 0,
                    "bottom": 0,
                    "sizeGrid": "10,10,10,10"
                }
            }, {
                "type": "Button",
                "props": {
                    "width": 296,
                    "visible": true,
                    "var": "btnClose",
                    "stateNum": 1,
                    "runtime": "touch.Button",
                    "height": 100,
                    "centerY": 435,
                    "centerX": 0,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 0,
                        "x": 2,
                        "width": 308,
                        "text": "NO THANKS",
                        "strokeColor": "#b5b5b5",
                        "stroke": 2,
                        "scaleY": 1,
                        "scaleX": 1,
                        "height": 96,
                        "fontSize": 36,
                        "font": "Arial",
                        "color": "#b5b5b5",
                        "align": "center"
                    }
                }]
            }, {
                "type": "Label",
                "props": {
                    "width": 200,
                    "var": "tfReviveCountdown",
                    "text": "10",
                    "strokeColor": "#ffffff",
                    "stroke": 2,
                    "scaleY": 1,
                    "scaleX": 1,
                    "fontSize": 130,
                    "font": "Arial",
                    "color": "#ffffff",
                    "centerY": -59,
                    "centerX": 0,
                    "bold": true,
                    "align": "center"
                }
            }, {
                "type": "Button",
                "props": {
                    "width": 460,
                    "var": "btnWatchVideo",
                    "stateNum": 1,
                    "skin": "index/btn_common7.png",
                    "sizeGrid": "0,50,0,50",
                    "runtime": "touch.Button",
                    "labelStrokeColor": "#ffffff",
                    "labelStroke": 2,
                    "labelSize": 50,
                    "labelPadding": "0,0,0,-10",
                    "labelFont": "Arial",
                    "labelColors": "#ffffff",
                    "labelBold": true,
                    "label": "          CONTINUE",
                    "height": 130,
                    "centerY": 261,
                    "centerX": 0,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 34,
                        "x": 62,
                        "visible": true,
                        "skin": "index/video.png",
                        "scaleY": 1,
                        "scaleX": 1
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "width": 394,
                    "var": "btnShareRevive",
                    "stateNum": 1,
                    "skin": "index/btn_green.png",
                    "runtime": "touch.Button",
                    "labelPadding": "0,0,0,50",
                    "labelFont": "yahei",
                    "label": "CONTINUE",
                    "height": 127,
                    "centerY": 171,
                    "centerX": 0,
                    "anchorY": 0.5,
                    "anchorX": 0.5,
                    "sizeGrid": "35,35,35,35"
                },
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 27,
                        "x": 18,
                        "skin": "index/share.png",
                        "scaleY": 1.7,
                        "scaleX": 1.7
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "visible": true,
                    "var": "btn_tg",
                    "stateNum": 1,
                    "skin": "index/tg1.jpg",
                    "runtime": "touch.Button",
                    "centerY": -162,
                    "centerX": 272
                }
            }, {
                "type": "Label",
                "props": {
                    "x": 0,
                    "width": 200,
                    "valign": "middle",
                    "text": "SCORE",
                    "strokeColor": "#FFFFFF",
                    "stroke": 1,
                    "scaleY": 1,
                    "scaleX": 1,
                    "height": 68,
                    "fontSize": 42,
                    "font": "Arial",
                    "color": "#ffffff",
                    "centerY": -460,
                    "centerX": 0,
                    "bold": true,
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "x": 0,
                    "width": 578,
                    "var": "reScore",
                    "valign": "middle",
                    "text": "0",
                    "strokeColor": "#FFFFFF",
                    "stroke": 1,
                    "scaleY": 1,
                    "scaleX": 1,
                    "height": 56,
                    "fontSize": 72,
                    "font": "Arial",
                    "color": "#ffffff",
                    "centerY": -380,
                    "centerX": 0,
                    "bold": true,
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 438,
                    "x": 238,
                    "text": "",
                    "strokeColor": "#ffffff",
                    "stroke": 1,
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "fontSize": 42,
                    "font": "Arial",
                    "color": "#ffffff",
                    "bold": true
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "width": 200,
                "var": "boxReviving",
                "height": 200,
                "centerY": 2,
                "centerX": 0
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 26,
                    "x": 30,
                    "width": 100,
                    "var": "tfReviving",
                    "text": "3",
                    "scaleY": 1.4,
                    "scaleX": 1.4,
                    "font": "yahei120",
                    "align": "center"
                }
            }, {
                "type": "Button",
                "props": {
                    "width": 453,
                    "visible": false,
                    "var": "btnShareContinue",
                    "stateNum": 1,
                    "skin": "index/btn_green.png",
                    "runtime": "touch.Button",
                    "labelFont": "yahei",
                    "height": 146,
                    "centerY": 171,
                    "centerX": 0,
                    "anchorY": 0.5,
                    "anchorX": 0.5,
                    "sizeGrid": "35,35,35,35"
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 4,
                        "x": 5,
                        "width": 344,
                        "visible": true,
                        "valign": "middle",
                        "text": "CONTINUE",
                        "scaleY": 1.3,
                        "scaleX": 1.3,
                        "height": 106,
                        "fontSize": 10,
                        "font": "yahei",
                        "color": "#828282",
                        "align": "center"
                    }
                }]
            }]
        }, {
            "type": "Box",
            "props": {
                "var": "boxFinalScore",
                "top": -9,
                "right": 0,
                "left": 0,
                "bottom": 0
            },
            "child": [{
                "type": "Image",
                "props": {
                    "top": -1,
                    "skin": "core/black_mask.png",
                    "right": 0,
                    "left": 0,
                    "bottom": 0,
                    "sizeGrid": "10,10,10,10"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 85,
                    "x": 375,
                    "width": 500,
                    "var": "tfFinalScore",
                    "valign": "middle",
                    "text": "78403",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "pivotY": 0,
                    "height": 200,
                    "fontSize": 72,
                    "font": "Arial",
                    "color": "#ffffff",
                    "bold": true,
                    "anchorX": 0.5,
                    "align": "center"
                }
            }, {
                "type": "Box",
                "props": {
                    "y": 265,
                    "x": 24.5,
                    "width": 700,
                    "visible": false,
                    "var": "starBox",
                    "height": 200
                },
                "child": [{
                    "type": "Box",
                    "props": {
                        "y": 1,
                        "x": 0,
                        "width": 226,
                        "pivotY": 1,
                        "pivotX": 1,
                        "name": "star_bg",
                        "left": 0,
                        "height": 226
                    },
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 114,
                            "x": 148,
                            "skin": "index/pk_huix1.png",
                            "scaleY": 1,
                            "scaleX": 1,
                            "name": "starBg",
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 176,
                            "x": 53,
                            "width": 308,
                            "var": "score0",
                            "text": "1000",
                            "scaleY": 0.6,
                            "scaleX": 0.6,
                            "height": 96,
                            "font": "yahei",
                            "align": "center"
                        }
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 76,
                            "x": 358,
                            "skin": "index/pk_huix1.png",
                            "scaleY": 1,
                            "scaleX": 1,
                            "name": "starBg",
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 138,
                            "x": 262,
                            "width": 308,
                            "var": "score1",
                            "text": "2000",
                            "scaleY": 0.6,
                            "scaleX": 0.6,
                            "height": 96,
                            "font": "yahei",
                            "align": "center"
                        }
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 114,
                            "x": 565,
                            "skin": "index/pk_huix1.png",
                            "scaleY": 1,
                            "scaleX": 1,
                            "name": "starBg",
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 176,
                            "x": 481,
                            "width": 308,
                            "var": "score2",
                            "text": "3000",
                            "scaleY": 0.6,
                            "scaleX": 0.6,
                            "height": 96,
                            "font": "yahei",
                            "align": "center"
                        }
                    }]
                }, {
                    "type": "Box",
                    "props": {
                        "y": 1,
                        "x": 1,
                        "width": 226,
                        "pivotY": 1,
                        "pivotX": 1,
                        "name": "star_show",
                        "left": 0,
                        "height": 226
                    },
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 114,
                            "x": 148,
                            "var": "star0",
                            "skin": "index/pk_jinx.png",
                            "scaleY": 1,
                            "scaleX": 1,
                            "name": "starBg",
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        }
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 76,
                            "x": 358,
                            "var": "star1",
                            "skin": "index/pk_jinx.png",
                            "scaleY": 1,
                            "scaleX": 1,
                            "name": "starBg",
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        }
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 114,
                            "x": 565,
                            "var": "star2",
                            "skin": "index/pk_jinx.png",
                            "scaleY": 1,
                            "scaleX": 1,
                            "name": "starBg",
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "var": "imgNewRecord",
                    "skin": "game/new_record.png",
                    "centerY": -320,
                    "centerX": 0
                }
            }, {
                "type": "Box",
                "props": {
                    "y": 3,
                    "x": 0,
                    "width": 749,
                    "visible": true,
                    "var": "NextBox",
                    "height": 1334
                },
                "child": [{
                    "type": "Button",
                    "props": {
                        "y": 1064,
                        "x": 375,
                        "width": 488,
                        "visible": false,
                        "var": "btnOnlineReward",
                        "stateNum": 1,
                        "skin": "index/btn_green.png",
                        "runtime": "touch.Button",
                        "pivotY": 71,
                        "pivotX": 244,
                        "height": 143,
                        "centerY": 396,
                        "centerX": 0,
                        "sizeGrid": "35,35,35,35"
                    },
                    "child": [{
                        "type": "Label",
                        "props": {
                            "y": 46,
                            "x": 0,
                            "width": 539,
                            "var": "tfReady",
                            "valign": "middle",
                            "text": "Free gifts are ready",
                            "scaleY": 0.9,
                            "scaleX": 0.9,
                            "height": 56,
                            "font": "yahei",
                            "color": "#ffffff",
                            "align": "center"
                        }
                    }, {
                        "type": "Box",
                        "props": {
                            "y": 21,
                            "x": 23,
                            "width": 446,
                            "height": 103
                        },
                        "child": [{
                            "type": "Label",
                            "props": {
                                "y": 1,
                                "x": 0,
                                "width": 494,
                                "var": "tfNextReward",
                                "valign": "middle",
                                "text": "Next free gift",
                                "scaleY": 0.9,
                                "scaleX": 0.9,
                                "height": 56,
                                "font": "yahei",
                                "color": "#ffffff",
                                "align": "center"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 54,
                                "x": 113,
                                "width": 240,
                                "var": "tfNextRewardTime",
                                "valign": "middle",
                                "text": "00:00:00",
                                "scaleY": 0.9,
                                "scaleX": 0.9,
                                "font": "yahei",
                                "color": "#ffffff",
                                "align": "center"
                            }
                        }]
                    }]
                }, {
                    "type": "Button",
                    "props": {
                        "y": 1021,
                        "x": 375,
                        "width": 400,
                        "var": "btnRestart",
                        "stateNum": 1,
                        "skin": "index/btn_common5.png",
                        "sizeGrid": "0,55,0,55",
                        "runtime": "touch.Button",
                        "labelFont": "yahei",
                        "height": 130,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "child": [{
                        "type": "Label",
                        "props": {
                            "y": 40,
                            "x": 100,
                            "width": 270,
                            "visible": true,
                            "valign": "middle",
                            "text": "REPLAY",
                            "scaleY": 1,
                            "scaleX": 1,
                            "height": 64,
                            "fontSize": 48,
                            "font": "Arial",
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        }
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 26,
                            "x": 37,
                            "skin": "index/an4.png"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 76,
                            "x": 149,
                            "text": "",
                            "fontSize": 26,
                            "font": "Arial",
                            "color": "#ffffff",
                            "bold": true
                        }
                    }]
                }, {
                    "type": "Button",
                    "props": {
                        "width": 66,
                        "var": "btnBack",
                        "top": 129,
                        "stateNum": 1,
                        "skin": "index/btn_close.png",
                        "runtime": "touch.Button",
                        "pivotY": 32,
                        "pivotX": 32,
                        "left": 17,
                        "height": 66
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "width": 700,
                        "var": "friendBox",
                        "skin": "core/bg_grid.png",
                        "height": 480,
                        "centerY": 53,
                        "centerX": 0,
                        "sizeGrid": "60,60,60,60"
                    },
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 6,
                            "x": 4,
                            "width": 692,
                            "skin": "index/title.png",
                            "height": 69,
                            "sizeGrid": "40,30,10,30"
                        },
                        "child": [{
                            "type": "Label",
                            "props": {
                                "y": 7,
                                "x": 7,
                                "width": 679,
                                "text": "FRIEND",
                                "height": 56,
                                "font": "yahei",
                                "align": "center"
                            }
                        }]
                    }, {
                        "type": "Sprite",
                        "props": {
                            "y": 84,
                            "x": 29,
                            "width": 642,
                            "var": "spriteRank",
                            "height": 320
                        }
                    }, {
                        "type": "Sprite",
                        "props": {
                            "y": 415,
                            "x": 209,
                            "width": 282,
                            "var": "spriteOpenRank",
                            "height": 45
                        },
                        "child": [{
                            "type": "Label",
                            "props": {
                                "y": 0,
                                "x": -176,
                                "width": 794,
                                "valign": "middle",
                                "text": "All Ranking>>",
                                "scaleY": 0.8,
                                "scaleX": 0.8,
                                "height": 56,
                                "font": "yahei",
                                "color": "#ffffff",
                                "align": "center"
                            }
                        }]
                    }, {
                        "type": "Box",
                        "props": {
                            "y": 104,
                            "x": 55,
                            "width": 186,
                            "name": "boxRank0",
                            "height": 307
                        },
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 12,
                                "x": 43,
                                "width": 100,
                                "name": "imgHead",
                                "height": 100
                            },
                            "child": [{
                                "type": "Sprite",
                                "props": {
                                    "y": 50,
                                    "x": 50,
                                    "renderType": "mask"
                                },
                                "child": [{
                                    "type": "Circle",
                                    "props": {
                                        "radius": 50,
                                        "lineWidth": 1,
                                        "fillColor": "#ff0000"
                                    }
                                }]
                            }]
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 2,
                                "x": 33,
                                "skin": "index/rank_icon_4.png",
                                "name": "imgIcon"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 117,
                                "x": 40,
                                "width": 188,
                                "valign": "middle",
                                "scaleY": 0.6,
                                "scaleX": 0.6,
                                "name": "tfRank",
                                "height": 64,
                                "fontSize": 20,
                                "font": "yahei",
                                "color": "#ffffff",
                                "align": "center"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 160,
                                "x": 0,
                                "width": 186,
                                "name": "tfName",
                                "height": 35,
                                "fontSize": 26,
                                "font": "Microsoft YaHei",
                                "color": "#ffffff",
                                "align": "center"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 205,
                                "x": 2,
                                "width": 227,
                                "scaleY": 0.8,
                                "scaleX": 0.8,
                                "name": "tfScore",
                                "height": 56,
                                "font": "yahei",
                                "align": "center"
                            }
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 273,
                                "x": 93,
                                "width": 178,
                                "var": "pkFriend0",
                                "pivotY": 102,
                                "pivotX": 89,
                                "name": "pkFriend",
                                "height": 127
                            },
                            "child": [{
                                "type": "Image",
                                "props": {
                                    "y": 78,
                                    "x": 34.5,
                                    "visible": false,
                                    "skin": "index/an1.png",
                                    "name": "im0"
                                }
                            }, {
                                "type": "Image",
                                "props": {
                                    "y": 78,
                                    "x": 34,
                                    "visible": false,
                                    "skin": "index/an2.png",
                                    "name": "im1"
                                }
                            }, {
                                "type": "Image",
                                "props": {
                                    "y": 78,
                                    "x": 34,
                                    "visible": false,
                                    "skin": "index/an3.png",
                                    "name": "im2"
                                }
                            }]
                        }]
                    }, {
                        "type": "Box",
                        "props": {
                            "y": 104,
                            "x": 257,
                            "width": 186,
                            "name": "boxRank1",
                            "height": 314
                        },
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 12,
                                "x": 43,
                                "width": 100,
                                "name": "imgHead",
                                "height": 100
                            },
                            "child": [{
                                "type": "Sprite",
                                "props": {
                                    "y": 50,
                                    "x": 50,
                                    "renderType": "mask"
                                },
                                "child": [{
                                    "type": "Circle",
                                    "props": {
                                        "radius": 50,
                                        "lineWidth": 1,
                                        "fillColor": "#ff0000"
                                    }
                                }]
                            }]
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 1,
                                "x": 33,
                                "skin": "index/rank_icon_4.png",
                                "name": "imgIcon"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 116,
                                "x": 38,
                                "width": 188,
                                "valign": "middle",
                                "scaleY": 0.6,
                                "scaleX": 0.6,
                                "name": "tfRank",
                                "height": 64,
                                "fontSize": 20,
                                "font": "yahei",
                                "color": "#ffffff",
                                "align": "center"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 160,
                                "x": 0,
                                "width": 186,
                                "overflow": "scroll",
                                "name": "tfName",
                                "height": 35,
                                "fontSize": 26,
                                "font": "Microsoft YaHei",
                                "color": "#ffffff",
                                "align": "center"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 205,
                                "x": 2,
                                "width": 227,
                                "scaleY": 0.8,
                                "scaleX": 0.8,
                                "name": "tfScore",
                                "height": 56,
                                "font": "yahei",
                                "align": "center"
                            }
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 273,
                                "x": 93,
                                "width": 178,
                                "var": "pkFriend1",
                                "pivotY": 102,
                                "pivotX": 89,
                                "name": "pkFriend",
                                "height": 127
                            },
                            "child": [{
                                "type": "Image",
                                "props": {
                                    "y": 78,
                                    "x": 34.5,
                                    "visible": false,
                                    "skin": "index/an1.png",
                                    "name": "im0"
                                }
                            }, {
                                "type": "Image",
                                "props": {
                                    "y": 78.5,
                                    "x": 34,
                                    "visible": false,
                                    "skin": "index/an2.png",
                                    "name": "im1"
                                }
                            }, {
                                "type": "Image",
                                "props": {
                                    "y": 78.5,
                                    "x": 34,
                                    "visible": false,
                                    "skin": "index/an3.png",
                                    "name": "im2"
                                }
                            }]
                        }]
                    }, {
                        "type": "Box",
                        "props": {
                            "y": 103,
                            "x": 459,
                            "width": 186,
                            "name": "boxRank2",
                            "height": 302
                        },
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 11,
                                "x": 43,
                                "width": 100,
                                "name": "imgHead",
                                "height": 100
                            },
                            "child": [{
                                "type": "Sprite",
                                "props": {
                                    "y": 50,
                                    "x": 50,
                                    "renderType": "mask"
                                },
                                "child": [{
                                    "type": "Circle",
                                    "props": {
                                        "radius": 50,
                                        "lineWidth": 1,
                                        "fillColor": "#ff0000"
                                    }
                                }]
                            }]
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 1,
                                "x": 33,
                                "skin": "index/rank_icon_4.png",
                                "name": "imgIcon"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 116,
                                "x": 35,
                                "width": 188,
                                "valign": "middle",
                                "scaleY": 0.6,
                                "scaleX": 0.6,
                                "name": "tfRank",
                                "height": 64,
                                "fontSize": 20,
                                "font": "yahei",
                                "color": "#ffffff",
                                "align": "center"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 160,
                                "x": 0,
                                "width": 186,
                                "name": "tfName",
                                "height": 35,
                                "fontSize": 26,
                                "font": "Microsoft YaHei",
                                "color": "#ffffff",
                                "align": "center"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 205,
                                "x": 2,
                                "width": 227,
                                "scaleY": 0.8,
                                "scaleX": 0.8,
                                "name": "tfScore",
                                "height": 56,
                                "font": "yahei",
                                "align": "center"
                            }
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 273,
                                "x": 93,
                                "width": 178,
                                "var": "pkFriend2",
                                "pivotY": 102,
                                "pivotX": 89,
                                "name": "pkFriend",
                                "height": 127
                            },
                            "child": [{
                                "type": "Image",
                                "props": {
                                    "y": 78.5,
                                    "x": 34.5,
                                    "visible": false,
                                    "skin": "index/an1.png",
                                    "name": "im0"
                                }
                            }, {
                                "type": "Image",
                                "props": {
                                    "y": 78,
                                    "x": 34,
                                    "visible": false,
                                    "skin": "index/an2.png",
                                    "name": "im1"
                                }
                            }, {
                                "type": "Image",
                                "props": {
                                    "y": 78,
                                    "x": 34,
                                    "visible": false,
                                    "skin": "index/an3.png",
                                    "name": "im2"
                                }
                            }]
                        }]
                    }]
                }, {
                    "type": "Button",
                    "props": {
                        "visible": false,
                        "var": "btnTg",
                        "stateNum": 1,
                        "skin": "index/btn_tg.png",
                        "runtime": "touch.Button",
                        "centerY": -532,
                        "centerX": 305
                    },
                    "child": [{
                        "type": "Label",
                        "props": {
                            "y": 92,
                            "x": 0,
                            "width": 225,
                            "scaleY": 0.52,
                            "scaleX": 0.52,
                            "font": "yahei",
                            "align": "center"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 119,
                            "x": -48,
                            "width": 240,
                            "visible": false,
                            "valign": "middle",
                            "text": "00:00:00",
                            "scaleY": 0.9,
                            "scaleX": 0.9,
                            "font": "yahei",
                            "color": "#ffffff",
                            "align": "center"
                        }
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 5,
                            "x": 5,
                            "visible": false,
                            "var": "imgTG",
                            "skin": "index/qq_i_2.png"
                        }
                    }]
                }, {
                    "type": "Button",
                    "props": {
                        "visible": true,
                        "var": "btnShare",
                        "stateNum": 1,
                        "skin": "index/btnbg.png",
                        "runtime": "touch.Button",
                        "centerY": -501,
                        "centerX": 295
                    },
                    "child": [{
                        "type": "Label",
                        "props": {
                            "y": 92,
                            "x": 0,
                            "width": 225,
                            "visible": false,
                            "text": "Award",
                            "scaleY": 0.52,
                            "scaleX": 0.52,
                            "font": "yahei",
                            "align": "center"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 119,
                            "x": -48,
                            "width": 240,
                            "visible": false,
                            "valign": "middle",
                            "text": "00:00:00",
                            "scaleY": 0.9,
                            "scaleX": 0.9,
                            "font": "yahei",
                            "color": "#ffffff",
                            "align": "center"
                        }
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 5,
                            "x": 5,
                            "visible": false,
                            "var": "imgAward",
                            "skin": "index/qq_i_2.png"
                        }
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 20,
                            "x": 26,
                            "skin": "index/btn_share.png"
                        }
                    }]
                }, {
                    "type": "Button",
                    "props": {
                        "y": 958,
                        "x": 30,
                        "width": 112,
                        "var": "gotogamebtn",
                        "stateNum": 1,
                        "skin": "index/pop_2_yuan.png",
                        "runtime": "touch.Button",
                        "height": 112
                    },
                    "child": [{
                        "type": "Image",
                        "props": {
                            "skin": "index/qq_i_2.png"
                        }
                    }]
                }, {
                    "type": "Button",
                    "props": {
                        "y": 958,
                        "x": 603,
                        "width": 112,
                        "var": "playFriendBtn",
                        "stateNum": 1,
                        "skin": "index/btn_common8.png",
                        "runtime": "touch.Button",
                        "height": 112
                    },
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 22,
                            "x": 19,
                            "skin": "index/playwithfriend1.png"
                        }
                    }]
                }, {
                    "type": "List",
                    "props": {
                        "y": 264,
                        "x": 26,
                        "width": 720,
                        "var": "listRank",
                        "spaceY": 10,
                        "repeatX": 1,
                        "height": 640
                    },
                    "child": [{
                        "type": "EndFriendRankIten",
                        "props": {
                            "renderType": "render",
                            "runtime": "ui.EndFriendRankItenUI"
                        }
                    }]
                }]
            }, {
                "type": "Label",
                "props": {
                    "y": 224,
                    "x": 375,
                    "width": 578,
                    "var": "tfBestScore",
                    "valign": "middle",
                    "text": "Best record:0",
                    "scaleY": 1.3,
                    "scaleX": 1.3,
                    "pivotY": 28,
                    "pivotX": 289,
                    "height": 56,
                    "font": "yahei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 334,
                    "x": 592,
                    "visible": false,
                    "var": "btnoverShare",
                    "stateNum": 1,
                    "skin": "index/btn_share.png",
                    "runtime": "touch.Button",
                    "centerY": -277,
                    "centerX": 276
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 76,
                        "x": 0,
                        "width": 225,
                        "text": "Claim",
                        "scaleY": 0.52,
                        "scaleX": 0.52,
                        "font": "yahei",
                        "align": "center"
                    }
                }]
            }, {
                "type": "Box",
                "props": {
                    "y": -4,
                    "x": 0,
                    "width": 750,
                    "visible": false,
                    "var": "OS_Menu",
                    "height": 1334
                },
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 511,
                        "x": 32,
                        "width": 686,
                        "skin": "core/bg_grid.png",
                        "height": 420,
                        "sizeGrid": "60,60,60,60"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 641,
                        "x": 63,
                        "width": 191,
                        "var": "OS_Menu_Head",
                        "skin": "index/skin0.png",
                        "name": "imgHead",
                        "height": 176
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 1197,
                        "x": 209,
                        "width": 308,
                        "var": "OS_Menu_Close",
                        "stateNum": 1,
                        "scaleY": 1.1,
                        "scaleX": 1.1,
                        "runtime": "touch.Button",
                        "height": 100
                    },
                    "child": [{
                        "type": "Label",
                        "props": {
                            "y": 0,
                            "x": 2,
                            "width": 308,
                            "text": "NO THANKS",
                            "scaleY": 1,
                            "scaleX": 1,
                            "height": 96,
                            "fontSize": 36,
                            "font": "Arial",
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        }
                    }]
                }, {
                    "type": "Image",
                    "props": {
                        "y": 546,
                        "x": 36,
                        "width": 677,
                        "var": "OS_Menu_bg",
                        "height": 354
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "width": 460,
                        "visible": true,
                        "var": "OS_Menu_Share",
                        "stateNum": 1,
                        "skin": "index/btn_common6.png",
                        "sizeGrid": "0,50,0,50",
                        "runtime": "touch.Button",
                        "pivotY": 59,
                        "pivotX": 189,
                        "height": 130,
                        "centerY": 414,
                        "centerX": -3
                    },
                    "child": [{
                        "type": "Label",
                        "props": {
                            "y": 31,
                            "x": 73,
                            "width": 300,
                            "text": "Claim",
                            "scaleY": 1.1,
                            "scaleX": 1.1,
                            "height": 80,
                            "fontSize": 60,
                            "font": "Arial",
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        }
                    }]
                }, {
                    "type": "Label",
                    "props": {
                        "y": 554,
                        "x": 87,
                        "width": 580,
                        "var": "OS_Menu_top",
                        "valign": "middle",
                        "text": "LEVEL MODEL",
                        "stroke": 0,
                        "height": 56,
                        "fontSize": 56,
                        "font": "Microsoft YaHei",
                        "color": "#000000",
                        "bold": true,
                        "align": "center"
                    },
                    "child": [{
                        "type": "Label",
                        "props": {
                            "y": -5,
                            "x": -3,
                            "width": 580,
                            "var": "OS_Menu_topB",
                            "valign": "middle",
                            "text": "LEVEL MODEL",
                            "stroke": 0,
                            "height": 56,
                            "fontSize": 56,
                            "font": "Microsoft YaHei",
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        }
                    }]
                }, {
                    "type": "Label",
                    "props": {
                        "y": 692.5,
                        "x": 130,
                        "width": 580,
                        "var": "OS_Menu_Score",
                        "valign": "middle",
                        "text": "4",
                        "stroke": 0,
                        "scaleY": 1.5,
                        "scaleX": 1.5,
                        "height": 56,
                        "fontSize": 40,
                        "font": "Microsoft YaHei",
                        "color": "#000000",
                        "bold": true,
                        "align": "center"
                    },
                    "child": [{
                        "type": "Label",
                        "props": {
                            "y": -2,
                            "x": -3,
                            "width": 580,
                            "var": "OS_Menu_ScoreB",
                            "valign": "middle",
                            "text": "4",
                            "stroke": 0,
                            "height": 56,
                            "fontSize": 40,
                            "font": "Microsoft YaHei",
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        }
                    }]
                }]
            }, {
                "type": "Label",
                "props": {
                    "y": 64,
                    "x": 375,
                    "var": "scoretitle",
                    "text": "SCORE",
                    "fontSize": 52,
                    "font": "Arial",
                    "color": "#FFFFFF",
                    "bold": true,
                    "anchorX": 0.5,
                    "align": "center"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": -3,
                "x": 0,
                "width": 750,
                "visible": false,
                "var": "boxModel2",
                "height": 74
            },
            "child": [{
                "type": "ProgressBar",
                "props": {
                    "y": 8,
                    "x": 180,
                    "width": 650,
                    "var": "modelPro",
                    "value": 0,
                    "skin": "index/progress.png",
                    "scaleY": 0.6,
                    "scaleX": 0.6,
                    "height": 53,
                    "sizeGrid": "15,20,15,20"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 25,
                    "x": 270,
                    "width": 54,
                    "skin": "index/pk_huix1.png",
                    "scaleY": 1,
                    "scaleX": 1,
                    "height": 47
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 25,
                    "x": 270,
                    "var": "fStar0",
                    "skin": "index/pk_jinx1.png",
                    "scaleY": 1,
                    "scaleX": 1
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 25,
                    "x": 385,
                    "width": 54,
                    "skin": "index/pk_huix1.png",
                    "scaleY": 1,
                    "scaleX": 1,
                    "height": 47
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 25,
                    "x": 385,
                    "var": "fStar1",
                    "skin": "index/pk_jinx1.png",
                    "scaleY": 1,
                    "scaleX": 1
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 25,
                    "x": 500,
                    "width": 54,
                    "skin": "index/pk_huix1.png",
                    "scaleY": 1,
                    "scaleX": 1,
                    "height": 47
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 25,
                    "x": 500,
                    "var": "fStar2",
                    "skin": "index/pk_jinx1.png",
                    "scaleY": 1,
                    "scaleX": 1
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 7,
                    "x": 375,
                    "var": "modelPre",
                    "text": "99%",
                    "scaleY": 0.6,
                    "scaleX": 0.6,
                    "layoutEnabled": true,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "width": 750,
                "var": "boxGuide",
                "height": 470,
                "centerY": 203,
                "centerX": 0
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": -196,
                    "x": 0,
                    "skin": "game/guide_bg.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "skin": "game/arrow.png",
                    "centerY": 101,
                    "centerX": 200
                }
            }, {
                "type": "Image",
                "props": {
                    "skin": "game/arrow.png",
                    "scaleX": -1,
                    "centerY": 102,
                    "centerX": -200
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 61,
                    "x": 263,
                    "skin": "game/go.png"
                },
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 98,
                        "x": -16,
                        "skin": "game/forword.png"
                    }
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 322,
                    "x": 180,
                    "skin": "game/finger.png"
                },
                "compId": 32
            }]
        }, {
            "type": "Box",
            "props": {
                "var": "boxLife"
            },
            "child": [{
                "type": "ProgressBar",
                "props": {
                    "y": 77,
                    "x": 13,
                    "width": 316,
                    "visible": true,
                    "var": "pbProgress",
                    "value": 0,
                    "skin": "index/gameprogress.png",
                    "sizeGrid": "0,10,0,10",
                    "height": 20
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 23,
                    "x": 23,
                    "var": "l1",
                    "skin": "index/xin.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 23,
                    "x": 76,
                    "var": "l2",
                    "skin": "index/xin.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 23,
                    "x": 129,
                    "var": "l3",
                    "skin": "index/xin.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 23,
                    "x": 182,
                    "var": "l4",
                    "skin": "index/xin.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 22,
                    "x": 235,
                    "var": "l5",
                    "skin": "index/xin.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 22,
                    "x": 22,
                    "var": "l1Gray",
                    "skin": "index/xingray.png",
                    "gray": false
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 22,
                    "x": 76,
                    "var": "l2Gray",
                    "skin": "index/xingray.png",
                    "gray": false
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 22,
                    "x": 129,
                    "var": "l3Gray",
                    "skin": "index/xingray.png",
                    "gray": false
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 22,
                    "x": 182,
                    "var": "l4Gray",
                    "skin": "index/xingray.png",
                    "gray": false
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 21,
                    "x": 235,
                    "var": "l5Gray",
                    "skin": "index/xingray.png",
                    "gray": false
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": 449.5,
                "x": 304,
                "width": 142,
                "visible": false,
                "var": "boxLifeTip",
                "height": 81
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 5,
                    "x": 33,
                    "skin": "index/xin.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 0,
                    "x": 90,
                    "width": 94,
                    "text": "-1",
                    "scaleY": 1,
                    "scaleX": 1,
                    "name": "info",
                    "height": 38,
                    "fontSize": 35,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "bold": true,
                    "align": "left"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": -3,
                "x": 0,
                "width": 750,
                "visible": false,
                "var": "boxTip",
                "height": 1334
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 373,
                    "x": 550,
                    "width": 200,
                    "skin": "index/qq_tmk.png",
                    "sizeGrid": "30,30,30,30",
                    "height": 80
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 384,
                    "x": 561,
                    "width": 60,
                    "var": "imgTip",
                    "skin": "index/skin0.png",
                    "name": "imgHead",
                    "height": 60
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 359,
                    "x": 543,
                    "skin": "index/qq_i_2.png"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 384,
                    "x": 598,
                    "width": 166,
                    "valign": "middle",
                    "text": "UnLock",
                    "strokeColor": "#ffffff",
                    "stroke": 1,
                    "scaleY": 1,
                    "scaleX": 1,
                    "height": 56,
                    "fontSize": 30,
                    "font": "Arial",
                    "color": "#ffffff",
                    "align": "center"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": 412,
                "x": 375,
                "width": 186,
                "visible": false,
                "var": "BeyondFriend",
                "pivotY": 78,
                "pivotX": 93,
                "height": 157
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 12,
                    "x": 43,
                    "width": 100,
                    "visible": true,
                    "var": "bfImage",
                    "name": "bfImage",
                    "height": 100
                },
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 50,
                        "x": 50,
                        "renderType": "mask"
                    },
                    "child": [{
                        "type": "Circle",
                        "props": {
                            "radius": 50,
                            "lineWidth": 1,
                            "fillColor": "#ff0000"
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 2,
                    "x": 33,
                    "visible": true,
                    "skin": "index/rank_icon_4.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 80,
                    "x": 39,
                    "width": 107,
                    "visible": true,
                    "var": "bfInfo",
                    "valign": "middle",
                    "text": "aaabbbsdfdsfdsfds",
                    "scaleY": 1,
                    "scaleX": 1,
                    "overflow": "scroll",
                    "name": "info",
                    "height": 114,
                    "fontSize": 25,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }]
        }],
        "animations": [{
            "nodes": [{
                "target": 32,
                "keyframes": {
                    "x": [{
                        "value": 180,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 32,
                        "key": "x",
                        "index": 0
                    }, {
                        "value": 520,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 32,
                        "key": "x",
                        "index": 20
                    }, {
                        "value": 180,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 32,
                        "key": "x",
                        "index": 40
                    }]
                }
            }],
            "name": "aniGuide",
            "id": 1,
            "frameRate": 24,
            "action": 0
        }]
    };
    ui.GameViewUI = GameViewUI;
})(ui || (ui = {}));
(function(ui) {
    class IndexViewUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            View.regComponent("ui.SignInItemUI", ui.SignInItemUI);
            View.regComponent("ui.SignInBigItemUI", ui.SignInBigItemUI);
            super.createChildren();
            this.createView(ui.IndexViewUI.uiView);
        }
    }
    IndexViewUI.uiView = {
        "type": "View",
        "props": {
            "width": 750,
            "top": 0,
            "right": 0,
            "left": 0,
            "height": 1334,
            "bottom": 0
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 0,
                "x": 0,
                "visible": false,
                "top": 0,
                "skin": "core/black_mask.png",
                "right": 0,
                "left": 0,
                "bottom": 0,
                "sizeGrid": "10,10,10,10"
            }
        }, {
            "type": "Image",
            "props": {
                "width": 637,
                "top": 0,
                "skin": "index/logo.png",
                "left": 0,
                "height": 463
            }
        }, {
            "type": "Button",
            "props": {
                "visible": true,
                "var": "btnSwitch",
                "stateNum": 1,
                "skin": "index/pk.png",
                "runtime": "touch.Button",
                "centerY": -132,
                "centerX": 280
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 71,
                    "x": 107,
                    "var": "myLock1",
                    "skin": "index/lock.png"
                }
            }]
        }, {
            "type": "Button",
            "props": {
                "visible": false,
                "var": "btn_tg",
                "stateNum": 1,
                "skin": "index/btn_tg.png",
                "runtime": "touch.Button",
                "centerY": -264,
                "centerX": -269
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 92,
                    "x": 0,
                    "width": 225,
                    "scaleY": 0.52,
                    "scaleX": 0.52,
                    "font": "yahei",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 119,
                    "x": -48,
                    "width": 240,
                    "visible": false,
                    "valign": "middle",
                    "text": "00:00:00",
                    "scaleY": 0.9,
                    "scaleX": 0.9,
                    "font": "yahei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 5,
                    "x": 5,
                    "visible": true,
                    "var": "imgTg",
                    "skin": "index/qq_i_2.png"
                }
            }]
        }, {
            "type": "Button",
            "props": {
                "width": 450,
                "var": "btnStart",
                "stateNum": 1,
                "skin": "index/btn_common6.png",
                "sizeGrid": "56,56,56,56",
                "runtime": "touch.Button",
                "labelStrokeColor": "#cd1714",
                "labelSize": 45,
                "labelFont": "Arial",
                "labelColors": "#ffffff",
                "labelBold": true,
                "label": "   PLAY SINGLE",
                "height": 120,
                "centerY": 274,
                "centerX": 0
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 27,
                    "x": 36,
                    "width": 45,
                    "skin": "index/an5.png",
                    "height": 56
                }
            }, {
                "type": "Label",
                "props": {
                    "y": -1,
                    "x": 2,
                    "width": 298,
                    "visible": false,
                    "valign": "middle",
                    "text": "Start",
                    "scaleY": 1.5,
                    "scaleX": 1.5,
                    "height": 75,
                    "fontSize": 10,
                    "font": "yahei",
                    "align": "center"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 60,
                    "x": 404,
                    "var": "myLock",
                    "skin": "index/lock.png"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "width": 678,
                "visible": true,
                "var": "boxGroup",
                "height": 118,
                "centerY": 504,
                "centerX": 0
            },
            "child": [{
                "type": "Button",
                "props": {
                    "y": 59,
                    "x": 261,
                    "var": "btnSkin",
                    "stateNum": 1,
                    "skin": "index/btnbg.png",
                    "runtime": "touch.Button",
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 76,
                        "x": 0,
                        "width": 225,
                        "visible": false,
                        "text": "SKIN",
                        "scaleY": 0.52,
                        "scaleX": 0.52,
                        "font": "yahei",
                        "align": "center"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 24,
                        "x": 17,
                        "skin": "index/btn_skin.png"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 92,
                        "x": 0,
                        "visible": false,
                        "var": "imgSkinFlag",
                        "skin": "index/qq_new.png"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 59,
                    "x": 87,
                    "var": "btnRank",
                    "stateNum": 1,
                    "skin": "index/btnbg.png",
                    "runtime": "touch.Button",
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 76,
                        "width": 225,
                        "visible": false,
                        "text": "WORLD",
                        "scaleY": 0.52,
                        "scaleX": 0.52,
                        "font": "yahei",
                        "align": "center"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 24,
                        "x": 28,
                        "skin": "index/btn_rank.png"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 59,
                    "x": 339,
                    "visible": false,
                    "var": "btnSignIn",
                    "stateNum": 1,
                    "skin": "index/btn_sign_in.png",
                    "runtime": "touch.Button",
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 76,
                        "width": 225,
                        "visible": false,
                        "text": "SIGN",
                        "scaleY": 0.52,
                        "scaleX": 0.52,
                        "font": "yahei",
                        "align": "center"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 59,
                    "x": 428,
                    "visible": true,
                    "var": "btnSetting",
                    "stateNum": 1,
                    "skin": "index/btnbg.png",
                    "runtime": "touch.Button",
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 76,
                        "width": 225,
                        "visible": false,
                        "text": "SET",
                        "scaleY": 0.52,
                        "scaleX": 0.52,
                        "font": "yahei",
                        "align": "center"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 22,
                        "x": 22,
                        "skin": "index/btn_setting.png"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": -360,
                    "x": -335,
                    "var": "btnFriendRank",
                    "stateNum": 1,
                    "skin": "index/btn_friend.png",
                    "runtime": "touch.Button",
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 75,
                        "width": 225,
                        "visible": false,
                        "text": "FRIEND",
                        "scaleY": 0.52,
                        "scaleX": 0.52,
                        "font": "yahei",
                        "align": "center"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 4,
                    "visible": true,
                    "var": "btnShare",
                    "stateNum": 1,
                    "skin": "index/btnbg.png",
                    "runtime": "touch.Button",
                    "centerX": 258
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 92,
                        "x": 0,
                        "width": 225,
                        "text": "Award",
                        "scaleY": 0.52,
                        "scaleX": 0.52,
                        "font": "yahei",
                        "align": "center"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 119,
                        "x": -48,
                        "width": 240,
                        "visible": false,
                        "var": "tfNextRewardTime",
                        "valign": "middle",
                        "text": "00:00:00",
                        "scaleY": 0.9,
                        "scaleX": 0.9,
                        "font": "yahei",
                        "color": "#ffffff",
                        "align": "center"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 5,
                        "x": 84,
                        "visible": false,
                        "var": "imgAward",
                        "skin": "index/qq_i_2.png"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 22,
                        "x": 21,
                        "skin": "index/btn_share.png"
                    }
                }]
            }]
        }, {
            "type": "Button",
            "props": {
                "width": 450,
                "visible": true,
                "var": "btnLevel",
                "stateNum": 1,
                "skin": "index/btn_common5.png",
                "sizeGrid": "56,56,56,56",
                "runtime": "touch.Button",
                "labelSize": 45,
                "labelFont": "Arial",
                "labelColors": "#ffffff",
                "labelBold": true,
                "label": "   PLAY MULTI",
                "height": 120,
                "gray": false,
                "centerY": 103,
                "centerX": 0
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 21,
                    "x": 26,
                    "skin": "index/an4.png"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 25,
                    "x": 388,
                    "visible": false,
                    "var": "imgLevel",
                    "skin": "index/lock.png"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "width": 660,
                "var": "boxSignIn",
                "height": 970,
                "centerY": -50,
                "centerX": 0
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 660,
                    "skin": "core/bg_grid.png",
                    "height": 970,
                    "sizeGrid": "60,60,60,60"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 4,
                    "x": 4,
                    "width": 652,
                    "skin": "index/title.png",
                    "height": 69,
                    "sizeGrid": "40,30,10,30"
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 6,
                        "x": -1,
                        "width": 653,
                        "text": "SIGN",
                        "height": 56,
                        "font": "yahei",
                        "align": "center"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 51,
                    "x": 56,
                    "visible": true,
                    "var": "btnCloseSignIn",
                    "stateNum": 1,
                    "skin": "index/btn_close.png",
                    "runtime": "touch.Button",
                    "pivotX": 41,
                    "pivotY": 41
                }
            }, {
                "type": "List",
                "props": {
                    "y": 83,
                    "x": 17,
                    "width": 626,
                    "var": "listSignIn",
                    "spaceY": 10,
                    "spaceX": 4,
                    "repeatY": 2,
                    "repeatX": 3,
                    "height": 870
                },
                "child": [{
                    "type": "SignInItem",
                    "props": {
                        "name": "item0",
                        "runtime": "ui.SignInItemUI"
                    }
                }, {
                    "type": "SignInItem",
                    "props": {
                        "y": 0,
                        "x": 210,
                        "name": "item1",
                        "runtime": "ui.SignInItemUI"
                    }
                }, {
                    "type": "SignInItem",
                    "props": {
                        "y": 4,
                        "x": 420,
                        "name": "item2",
                        "runtime": "ui.SignInItemUI"
                    }
                }, {
                    "type": "SignInItem",
                    "props": {
                        "y": 290,
                        "x": 0,
                        "name": "item3",
                        "runtime": "ui.SignInItemUI"
                    }
                }, {
                    "type": "SignInItem",
                    "props": {
                        "y": 290,
                        "x": 210,
                        "name": "item4",
                        "runtime": "ui.SignInItemUI"
                    }
                }, {
                    "type": "SignInItem",
                    "props": {
                        "y": 294,
                        "x": 420,
                        "name": "item5",
                        "runtime": "ui.SignInItemUI"
                    }
                }, {
                    "type": "SignInBigItem",
                    "props": {
                        "y": 580,
                        "x": 2,
                        "name": "item6",
                        "runtime": "ui.SignInBigItemUI"
                    }
                }]
            }]
        }]
    };
    ui.IndexViewUI = IndexViewUI;
})(ui || (ui = {}));
(function(ui) {
    class LoadingDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            super.createChildren();
            this.createView(ui.LoadingDialogUI.uiView);
        }
    }
    LoadingDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "width": 755,
            "height": 1334
        },
        "child": [{
            "type": "Image",
            "props": {
                "width": 200,
                "skin": "core/black_mask.png",
                "height": 200,
                "centerY": 0,
                "centerX": 0,
                "sizeGrid": "10,10,10,10"
            },
            "child": [{
                "type": "Label",
                "props": {
                    "width": 254,
                    "valign": "middle",
                    "text": "Loading\\nplease wait",
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "leading": -10,
                    "layoutEnabled": true,
                    "height": 116,
                    "fontSize": 25,
                    "font": "yahei",
                    "color": "#ffffff",
                    "centerY": -4,
                    "centerX": -2,
                    "align": "center"
                }
            }]
        }]
    };
    ui.LoadingDialogUI = LoadingDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class MatchDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.MatchItem", touch.MatchItem);
            super.createChildren();
            this.createView(ui.MatchDialogUI.uiView);
        }
    }
    MatchDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "width": 690,
            "height": 640
        },
        "child": [{
            "type": "ProgressBar",
            "props": {
                "y": 67,
                "x": 17,
                "visible": true,
                "var": "pbProgress",
                "value": 0,
                "skin": "index/progress.png",
                "sizeGrid": "15,20,15,20"
            }
        }, {
            "type": "List",
            "props": {
                "y": 157,
                "x": 15,
                "width": 659,
                "var": "listPlayer",
                "spaceY": 34,
                "spaceX": 38,
                "height": 483
            },
            "child": [{
                "type": "MatchItem",
                "props": {
                    "runtime": "touch.MatchItem",
                    "name": "render"
                }
            }]
        }, {
            "type": "Label",
            "props": {
                "y": 8,
                "x": 245,
                "text": "Matching",
                "strokeColor": "#ffffff",
                "stroke": 2,
                "fontSize": 36,
                "font": "Arial",
                "color": "#ffffff",
                "align": "center"
            }
        }, {
            "type": "Label",
            "props": {
                "y": 8,
                "x": 397,
                "var": "tfProgress",
                "text": "0%",
                "strokeColor": "#ffffff",
                "stroke": 2,
                "fontSize": 36,
                "font": "Arial",
                "color": "#ffffff",
                "align": "left"
            }
        }]
    };
    ui.MatchDialogUI = MatchDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class MatchItemUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            super.createChildren();
            this.createView(ui.MatchItemUI.uiView);
        }
    }
    MatchItemUI.uiView = {
        "type": "View",
        "props": {
            "width": 134,
            "height": 134
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": -600,
                "x": -308,
                "width": 750,
                "visible": false,
                "var": "imgMask",
                "top": -600,
                "skin": "core/black_mask.png",
                "left": -308,
                "height": 1434,
                "sizeGrid": "10,10,10,10"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 0,
                "x": 0,
                "var": "imgFrame",
                "skin": "core/viewbg5.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 65,
                "x": 64,
                "width": 64,
                "var": "imgWait",
                "skin": "index/img_loading.png",
                "height": 64,
                "anchorY": 0.5,
                "anchorX": 0.5
            },
            "compId": 3
        }, {
            "type": "Image",
            "props": {
                "y": 1,
                "x": -1,
                "width": 128,
                "var": "imgHead",
                "height": 128
            }
        }],
        "animations": [{
            "nodes": [{
                "target": 3,
                "keyframes": {
                    "rotation": [{
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 3,
                        "key": "rotation",
                        "index": 0
                    }, {
                        "value": 90,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 3,
                        "key": "rotation",
                        "index": 20,
                        "functions": []
                    }, {
                        "value": 180,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 3,
                        "key": "rotation",
                        "index": 40
                    }, {
                        "value": 270,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 3,
                        "key": "rotation",
                        "index": 60
                    }, {
                        "value": 360,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 3,
                        "key": "rotation",
                        "index": 80
                    }]
                }
            }],
            "name": "aniWait",
            "id": 1,
            "frameRate": 24,
            "action": 0
        }]
    };
    ui.MatchItemUI = MatchItemUI;
})(ui || (ui = {}));
(function(ui) {
    class MoreGameDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            super.createChildren();
            this.createView(ui.MoreGameDialogUI.uiView);
        }
    }
    MoreGameDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "width": 670,
            "height": 450
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 0,
                "x": 0,
                "width": 670,
                "skin": "core/bg_grid.png",
                "height": 450,
                "sizeGrid": "60,60,60,60"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 4,
                "x": 5,
                "width": 659,
                "skin": "index/title.png",
                "height": 69,
                "sizeGrid": "40,30,10,30"
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 6,
                    "x": 3,
                    "width": 671,
                    "text": "Games",
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 53,
                "x": 57,
                "var": "btnClose",
                "skin": "index/btn_close.png",
                "runtime": "touch.Button",
                "stateNum": 1,
                "pivotX": 41,
                "pivotY": 41
            }
        }]
    };
    ui.MoreGameDialogUI = MoreGameDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class NewModeRankDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            View.regComponent("ui.WorldRankItemUI", ui.WorldRankItemUI);
            super.createChildren();
            this.createView(ui.NewModeRankDialogUI.uiView);
        }
    }
    NewModeRankDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "width": 670,
            "height": 1086
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 0,
                "x": 0,
                "width": 670,
                "skin": "core/bg_grid.png",
                "height": 996,
                "sizeGrid": "60,60,60,60"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 4,
                    "x": 5,
                    "width": 659,
                    "skin": "index/title.png",
                    "height": 69,
                    "sizeGrid": "40,30,10,30"
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 6,
                        "x": 1,
                        "width": 658,
                        "text": "RANK",
                        "height": 56,
                        "font": "yahei",
                        "align": "center"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 40,
                    "x": 40,
                    "var": "btnClose",
                    "stateNum": 1,
                    "skin": "index/btn_close.png",
                    "runtime": "touch.Button",
                    "anchorY": 0.5,
                    "anchorX": 0.5,
                    "pivotX": 41,
                    "pivotY": 41
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 945,
                    "x": 21,
                    "width": 633,
                    "valign": "middle",
                    "text": "Tips:Initialize the ranking list every monday",
                    "scaleY": 1,
                    "scaleX": 1,
                    "overflow": "scroll",
                    "height": 42,
                    "gray": true,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "disabled": true,
                    "color": "#bebebe",
                    "align": "center"
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "y": 395,
                "x": 12,
                "width": 646,
                "skin": "core/black_grid.png",
                "height": 448,
                "sizeGrid": "30,30,30,30"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 87,
                "x": 12,
                "width": 646,
                "skin": "core/black_grid.png",
                "height": 298,
                "sizeGrid": "30,30,30,30"
            }
        }, {
            "type": "List",
            "props": {
                "y": 412,
                "x": 24,
                "width": 622,
                "var": "listRank",
                "spaceY": 18,
                "repeatX": 1,
                "height": 415
            },
            "child": [{
                "type": "WorldRankItem",
                "props": {
                    "renderType": "render",
                    "runtime": "ui.WorldRankItemUI"
                }
            }]
        }, {
            "type": "WorldRankItem",
            "props": {
                "y": 853,
                "x": 24,
                "var": "viewMySelf",
                "runtime": "ui.WorldRankItemUI"
            }
        }, {
            "type": "Box",
            "props": {
                "y": 119,
                "x": 242,
                "width": 186,
                "name": "boxRank0"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 9,
                    "x": 43,
                    "width": 100,
                    "name": "imgHead",
                    "height": 100
                },
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 50,
                        "x": 50,
                        "renderType": "mask"
                    },
                    "child": [{
                        "type": "Circle",
                        "props": {
                            "radius": 50,
                            "lineWidth": 1,
                            "fillColor": "#ff0000"
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 0,
                    "x": 33,
                    "skin": "index/rank_icon_1.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 156,
                    "x": 41,
                    "width": 200,
                    "text": "Gold",
                    "scaleY": 0.52,
                    "scaleX": 0.52,
                    "name": "tfTitle",
                    "font": "yahei",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 187,
                    "x": 0,
                    "width": 186,
                    "name": "tfName",
                    "height": 35,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 224,
                    "x": 2,
                    "width": 227,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "name": "tfScore",
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": 120,
                "x": 40,
                "width": 186,
                "name": "boxRank1"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 32,
                    "x": 53,
                    "width": 80,
                    "name": "imgHead",
                    "height": 80
                },
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 40,
                        "x": 40,
                        "renderType": "mask"
                    },
                    "child": [{
                        "type": "Circle",
                        "props": {
                            "radius": 40,
                            "lineWidth": 1,
                            "fillColor": "#ff0000"
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 23,
                    "x": 43,
                    "skin": "index/rank_icon_2.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 155,
                    "x": 41,
                    "width": 200,
                    "text": "Silver",
                    "scaleY": 0.52,
                    "scaleX": 0.52,
                    "name": "tfTitle",
                    "font": "yahei",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 187,
                    "x": 0,
                    "width": 186,
                    "name": "tfName",
                    "height": 35,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 224,
                    "x": 2,
                    "width": 227,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "name": "tfScore",
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": 120,
                "x": 443,
                "width": 186,
                "name": "boxRank2"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 32,
                    "x": 53,
                    "width": 80,
                    "name": "imgHead",
                    "height": 80
                },
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 40,
                        "x": 40,
                        "renderType": "mask"
                    },
                    "child": [{
                        "type": "Circle",
                        "props": {
                            "radius": 40,
                            "lineWidth": 1,
                            "fillColor": "#ff0000"
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 23,
                    "x": 43,
                    "skin": "index/rank_icon_3.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 155,
                    "x": 41,
                    "width": 200,
                    "text": "Copper",
                    "scaleY": 0.52,
                    "scaleX": 0.52,
                    "name": "tfTitle",
                    "font": "yahei",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 187,
                    "x": 0,
                    "width": 186,
                    "name": "tfName",
                    "height": 35,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 224,
                    "x": 2,
                    "width": 227,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "name": "tfScore",
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }]
    };
    ui.NewModeRankDialogUI = NewModeRankDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class NoticeUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Notice", touch.Notice);
            super.createChildren();
            this.createView(ui.NoticeUI.uiView);
        }
    }
    NoticeUI.uiView = {
        "type": "Dialog",
        "props": {
            "width": 600,
            "runtime": "touch.Notice",
            "height": 60
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 0,
                "width": 600,
                "var": "imgBG",
                "skin": "index/tips_bg_gird.png",
                "sizeGrid": "10,30,10,30",
                "height": 60,
                "centerY": 0,
                "centerX": 0
            }
        }, {
            "type": "Label",
            "props": {
                "width": 600,
                "var": "tfNotice",
                "text": "Click anywhere",
                "strokeColor": "#10668d",
                "stroke": 2,
                "fontSize": 40,
                "font": "Arial",
                "color": "#ffffff",
                "centerY": -6,
                "centerX": 0,
                "bold": true,
                "align": "center"
            }
        }]
    };
    ui.NoticeUI = NoticeUI;
})(ui || (ui = {}));
(function(ui) {
    class PKDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("ui.PKListItemUI", ui.PKListItemUI);
            View.regComponent("touch.Button", touch.Button);
            super.createChildren();
            this.createView(ui.PKDialogUI.uiView);
        }
    }
    PKDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "y": 0,
            "x": 0,
            "width": 686,
            "height": 1209
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 1,
                "x": 0,
                "width": 686,
                "skin": "core/bg_grid.png",
                "height": 1150,
                "sizeGrid": "60,60,60,60"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 6,
                    "x": 5,
                    "width": 677,
                    "skin": "index/title.png",
                    "height": 69,
                    "sizeGrid": "40,30,10,30"
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 5,
                        "x": 1,
                        "width": 658,
                        "text": "PK",
                        "height": 56,
                        "font": "yahei",
                        "align": "center"
                    }
                }]
            }]
        }, {
            "type": "Image",
            "props": {
                "y": 400,
                "x": 7,
                "width": 677,
                "skin": "index/qq_tmk.png",
                "sizeGrid": "35,35,35,35",
                "height": 165
            }
        }, {
            "type": "Label",
            "props": {
                "y": 500,
                "x": 552.5,
                "width": 177,
                "var": "tfDiamond",
                "text": "Today\\n0/25",
                "scaleY": 0.5,
                "scaleX": 0.5,
                "height": 113,
                "font": "yahei",
                "align": "center"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 410,
                "x": 550,
                "skin": "index/pk_jinx.png",
                "scaleY": 0.7,
                "scaleX": 0.7
            }
        }, {
            "type": "Box",
            "props": {
                "y": 95,
                "x": 250,
                "width": 186,
                "name": "boxRank0"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": -1,
                    "x": 43,
                    "width": 100,
                    "name": "imgHead",
                    "height": 100
                },
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 50,
                        "x": 50,
                        "renderType": "mask"
                    },
                    "child": [{
                        "type": "Circle",
                        "props": {
                            "radius": 50,
                            "lineWidth": 1,
                            "fillColor": "#ff0000"
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": -9,
                    "x": 33,
                    "skin": "index/rank_icon_1.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 162,
                    "x": 0,
                    "width": 186,
                    "overflow": "scroll",
                    "name": "tfName",
                    "height": 35,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 199,
                    "x": 2,
                    "width": 227,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "name": "tfScore",
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": 96,
                "x": 49,
                "width": 186,
                "name": "boxRank1"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 32,
                    "x": 53,
                    "width": 80,
                    "name": "imgHead",
                    "height": 80
                },
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 40,
                        "x": 40,
                        "renderType": "mask"
                    },
                    "child": [{
                        "type": "Circle",
                        "props": {
                            "radius": 40,
                            "lineWidth": 1,
                            "fillColor": "#ff0000"
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 23,
                    "x": 43,
                    "skin": "index/rank_icon_2.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 162,
                    "x": 0,
                    "width": 186,
                    "overflow": "scroll",
                    "name": "tfName",
                    "height": 35,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 199,
                    "x": 2,
                    "width": 227,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "name": "tfScore",
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": 94,
                "x": 452,
                "width": 186,
                "name": "boxRank2"
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 32,
                    "x": 53,
                    "width": 80,
                    "name": "imgHead",
                    "height": 80
                },
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 40,
                        "x": 40,
                        "renderType": "mask"
                    },
                    "child": [{
                        "type": "Circle",
                        "props": {
                            "radius": 40,
                            "lineWidth": 1,
                            "fillColor": "#ff0000"
                        }
                    }]
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 23,
                    "x": 43,
                    "skin": "index/rank_icon_3.png",
                    "name": "imgIcon"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 162,
                    "x": 0,
                    "width": 186,
                    "overflow": "scroll",
                    "name": "tfName",
                    "height": 35,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 199,
                    "x": 2,
                    "width": 227,
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "name": "tfScore",
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Box",
            "props": {
                "y": -2,
                "x": 0,
                "width": 687,
                "var": "levelChange",
                "height": 1332
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 567,
                    "skin": "index/pk_di.png",
                    "sizeGrid": "30,30,30,30",
                    "left": 86,
                    "alpha": 1
                },
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": -159,
                        "x": -69,
                        "skin": "index/rank_icon_4.png"
                    },
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 10,
                            "x": 11,
                            "width": 100,
                            "var": "myHead",
                            "name": "myHead",
                            "height": 100
                        },
                        "child": [{
                            "type": "Sprite",
                            "props": {
                                "y": 49,
                                "x": 49,
                                "renderType": "mask"
                            },
                            "child": [{
                                "type": "Circle",
                                "props": {
                                    "radius": 50,
                                    "lineWidth": 1,
                                    "fillColor": "#ff0000"
                                }
                            }]
                        }]
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 117,
                            "x": 7,
                            "width": 35,
                            "skin": "index/pk_jinx.png",
                            "height": 32
                        },
                        "child": [{
                            "type": "Label",
                            "props": {
                                "y": 4,
                                "x": 35,
                                "width": 136,
                                "var": "myStar",
                                "valign": "middle",
                                "text": "99999",
                                "scaleY": 0.5,
                                "scaleX": 0.5,
                                "height": 56,
                                "font": "yahei",
                                "align": "center"
                            }
                        }]
                    }]
                }]
            }, {
                "type": "Label",
                "props": {
                    "y": 449,
                    "x": 207,
                    "width": 271,
                    "var": "myLevel",
                    "valign": "middle",
                    "text": "Level 1",
                    "name": "myLevel",
                    "height": 62,
                    "fontSize": 40,
                    "font": "yahei",
                    "color": "#1c1a1a",
                    "bold": true,
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 567,
                    "x": 153,
                    "width": 379,
                    "var": "myGoal",
                    "valign": "middle",
                    "text": "Goal:2000m",
                    "height": 40,
                    "fontSize": 30,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "bold": false,
                    "align": "center"
                }
            }, {
                "type": "List",
                "props": {
                    "y": 708,
                    "x": 3,
                    "width": 678,
                    "var": "levelList",
                    "spaceY": 18,
                    "repeatY": 1,
                    "repeatX": 7,
                    "height": 302
                },
                "child": [{
                    "type": "PKListItem",
                    "props": {
                        "y": 2,
                        "x": 0,
                        "renderType": "render",
                        "runtime": "ui.PKListItemUI"
                    }
                }]
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 39,
                "x": 40,
                "var": "btnClose",
                "stateNum": 1,
                "skin": "index/btn_close.png",
                "runtime": "touch.Button",
                "anchorY": 0.5,
                "anchorX": 0.5,
                "pivotX": 41,
                "pivotY": 41
            }
        }, {
            "type": "Button",
            "props": {
                "y": 1162,
                "x": 349,
                "width": 300,
                "var": "btnStart",
                "stateNum": 1,
                "skin": "index/btn_blue.png",
                "runtime": "touch.Button",
                "height": 90,
                "anchorY": 0.5,
                "anchorX": 0.5,
                "sizeGrid": "35,35,35,35"
            },
            "child": [{
                "type": "Box",
                "props": {
                    "y": 21,
                    "x": 32.5,
                    "width": 235,
                    "height": 56
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": -4.5,
                        "x": 177,
                        "width": 82,
                        "text": "50",
                        "height": 56,
                        "font": "yahei",
                        "align": "left"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 4.5,
                        "x": 115,
                        "skin": "index/diamond.png"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "width": 134,
                        "text": "Start",
                        "scaleY": 0.8,
                        "scaleX": 0.8,
                        "height": 63,
                        "font": "yahei",
                        "align": "center"
                    }
                }]
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 350,
                "var": "spriteOpenRank",
                "right": 2,
                "left": -7,
                "height": 50
            },
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 3,
                    "x": 226,
                    "width": 282,
                    "height": 45
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 0,
                        "x": -176,
                        "width": 794,
                        "valign": "middle",
                        "text": "All Ranking>>",
                        "scaleY": 0.8,
                        "scaleX": 0.8,
                        "height": 56,
                        "font": "yahei",
                        "color": "#ffffff",
                        "align": "center"
                    }
                }]
            }]
        }]
    };
    ui.PKDialogUI = PKDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class PKListItemUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            super.createChildren();
            this.createView(ui.PKListItemUI.uiView);
        }
    }
    PKListItemUI.uiView = {
        "type": "View",
        "props": {
            "width": 226,
            "height": 226
        },
        "child": [{
            "type": "Box",
            "props": {
                "y": 113,
                "x": 113,
                "width": 226,
                "var": "rootbox",
                "scaleY": 1,
                "scaleX": 1,
                "height": 226,
                "anchorY": 0.5,
                "anchorX": 0.5
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 242,
                    "x": 113,
                    "var": "victory",
                    "skin": "index/pk_victory1.png",
                    "scaleY": 1,
                    "scaleX": 1,
                    "name": "starBg",
                    "anchorY": 0.5,
                    "anchorX": 0.5
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 79,
                    "x": 113,
                    "width": 268,
                    "skin": "index/pk_jiangbei.png",
                    "sizeGrid": "30,30,30,30",
                    "scaleY": 0.8,
                    "scaleX": 0.8,
                    "name": "bgIcon",
                    "height": 177,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                }
            }, {
                "type": "Box",
                "props": {
                    "y": 1,
                    "width": 226,
                    "pivotY": 1,
                    "pivotX": 1,
                    "name": "star_bg",
                    "left": 0,
                    "height": 226
                },
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 180,
                        "x": 60,
                        "skin": "index/pk_huix.png",
                        "scaleY": 0.4,
                        "scaleX": 0.4,
                        "name": "starBg",
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 180,
                        "x": 112,
                        "skin": "index/pk_huix.png",
                        "scaleY": 0.4,
                        "scaleX": 0.4,
                        "name": "starBg",
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 180,
                        "x": 165,
                        "skin": "index/pk_huix.png",
                        "scaleY": 0.4,
                        "scaleX": 0.4,
                        "name": "starBg",
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    }
                }]
            }, {
                "type": "Box",
                "props": {
                    "y": 1,
                    "x": 1,
                    "width": 226,
                    "var": "star_show",
                    "pivotY": 1,
                    "pivotX": 1,
                    "name": "star_show",
                    "left": 0,
                    "height": 226
                },
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 180,
                        "x": 60,
                        "skin": "index/pk_jinx.png",
                        "scaleY": 0.4,
                        "scaleX": 0.4,
                        "name": "starBg",
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 180,
                        "x": 112,
                        "skin": "index/pk_jinx.png",
                        "scaleY": 0.4,
                        "scaleX": 0.4,
                        "name": "starBg",
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 180,
                        "x": 165,
                        "skin": "index/pk_jinx.png",
                        "scaleY": 0.4,
                        "scaleX": 0.4,
                        "name": "starBg",
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    }
                }]
            }, {
                "type": "Label",
                "props": {
                    "y": 211,
                    "width": 226,
                    "var": "info",
                    "text": "额外+1",
                    "right": 0,
                    "overflow": "scroll",
                    "name": "info",
                    "left": 0,
                    "height": 62,
                    "fontSize": 26,
                    "font": "Microsoft YaHei",
                    "color": "#ffffff",
                    "align": "center"
                }
            }]
        }]
    };
    ui.PKListItemUI = PKListItemUI;
})(ui || (ui = {}));
(function(ui) {
    class RankViewUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            super.createChildren();
            this.createView(ui.RankViewUI.uiView);
        }
    }
    RankViewUI.uiView = {
        "type": "View",
        "props": {
            "width": 750,
            "top": 0,
            "height": 1334,
            "centerY": 0,
            "centerX": 0,
            "bottom": 0
        },
        "child": [{
            "type": "Image",
            "props": {
                "top": 0,
                "skin": "core/black_mask.png",
                "right": 0,
                "left": 0,
                "bottom": 0,
                "sizeGrid": "10,10,10,10"
            }
        }, {
            "type": "Box",
            "props": {
                "width": 720,
                "height": 1098,
                "centerY": 0,
                "centerX": 0
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 720,
                    "skin": "core/bg_grid.png",
                    "height": 1098,
                    "sizeGrid": "60,60,60,60"
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 3,
                    "x": 5,
                    "width": 711,
                    "skin": "index/title.png",
                    "height": 69,
                    "sizeGrid": "40,30,10,30"
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 6,
                        "x": 0,
                        "width": 708,
                        "text": "FRIEND",
                        "height": 56,
                        "font": "yahei",
                        "align": "center"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 41,
                    "x": 40,
                    "var": "btnClose",
                    "stateNum": 1,
                    "skin": "index/btn_close.png",
                    "runtime": "touch.Button",
                    "anchorY": 0.5,
                    "anchorX": 0.5,
                    "pivotX": 41,
                    "pivotY": 41
                }
            }, {
                "type": "Sprite",
                "props": {
                    "y": 77,
                    "x": 10,
                    "width": 700,
                    "var": "spriteRank",
                    "height": 1000
                }
            }]
        }]
    };
    ui.RankViewUI = RankViewUI;
})(ui || (ui = {}));
(function(ui) {
    class RewardTipViewUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            super.createChildren();
            this.createView(ui.RewardTipViewUI.uiView);
        }
    }
    RewardTipViewUI.uiView = {
        "type": "View",
        "props": {
            "width": 755,
            "top": 0,
            "right": 0,
            "left": 0,
            "height": 1334,
            "bottom": 0
        },
        "child": [{
            "type": "Image",
            "props": {
                "top": 0,
                "skin": "core/black_mask.png",
                "right": 0,
                "left": 0,
                "bottom": 0,
                "sizeGrid": "10,10,10,10"
            }
        }, {
            "type": "Button",
            "props": {
                "y": 0,
                "x": 0,
                "width": 750,
                "var": "btnAllGet",
                "height": 1334
            }
        }, {
            "type": "Box",
            "props": {
                "width": 542,
                "height": 542,
                "centerY": 0,
                "centerX": 0
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 271.0000290456685,
                    "x": 271.0000290456685,
                    "skin": "index/light.png",
                    "rotation": 360,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "compId": 2
            }, {
                "type": "Image",
                "props": {
                    "y": 225.0000290456685,
                    "x": 221.0000290456685,
                    "var": "imgIcon",
                    "skin": "index/skin29.png"
                },
                "compId": 5
            }, {
                "type": "Image",
                "props": {
                    "y": 392.0000290456685,
                    "x": 171.0000290456685,
                    "width": 200,
                    "var": "tfImage",
                    "skin": "index/tips_bg_gird.png",
                    "sizeGrid": "20,30,20,30",
                    "height": 60
                },
                "compId": 6,
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 200,
                        "var": "tfNum",
                        "text": 99,
                        "height": 60,
                        "font": "yahei",
                        "color": "#ffffff",
                        "align": "center"
                    }
                }]
            }, {
                "type": "Button",
                "props": {
                    "var": "btnGet",
                    "stateNum": 1,
                    "skin": "index/btn_close.png",
                    "runtime": "touch.Button",
                    "labelFont": "yahei",
                    "centerY": -299,
                    "centerX": -271,
                    "anchorY": 0.5,
                    "anchorX": 0.5,
                    "pivotX": 41,
                    "pivotY": 41
                },
                "compId": 9
            }, {
                "type": "Button",
                "props": {
                    "width": 368,
                    "visible": true,
                    "var": "btnDoubleGet",
                    "stateNum": 1,
                    "skin": "index/btn_blue.png",
                    "runtime": "touch.Button",
                    "labelPadding": "0,0,0,0",
                    "labelFont": "yahei",
                    "label": "     Double",
                    "height": 100,
                    "centerY": 338,
                    "centerX": 0,
                    "anchorY": 0.5,
                    "anchorX": 0.5,
                    "sizeGrid": "35,35,35,35"
                },
                "compId": 12,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 29,
                        "x": 53,
                        "visible": true,
                        "skin": "index/video.png"
                    }
                }]
            }, {
                "type": "Box",
                "props": {
                    "y": 495.0000290456685,
                    "x": 273.0000290456685,
                    "width": 400,
                    "height": 448,
                    "anchorY": 1,
                    "anchorX": 0.5
                },
                "compId": 10,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 260.5,
                        "x": 196.5,
                        "skin": "index/img_box_bottom.png",
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "compId": 3
                }, {
                    "type": "Image",
                    "props": {
                        "y": 148.5,
                        "x": 199.5,
                        "skin": "index/img_box_up.png",
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "compId": 4
                }]
            }]
        }],
        "animations": [{
            "nodes": [{
                "target": 2,
                "keyframes": {
                    "rotation": [{
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 2,
                        "key": "rotation",
                        "index": 0
                    }, {
                        "value": 180,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 2,
                        "key": "rotation",
                        "index": 40
                    }, {
                        "value": 360,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 2,
                        "key": "rotation",
                        "index": 80
                    }]
                }
            }],
            "name": "aniLight",
            "id": 1,
            "frameRate": 24,
            "action": 0
        }, {
            "nodes": [{
                "target": 9,
                "keyframes": {
                    "alpha": [{
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 9,
                        "key": "alpha",
                        "index": 0
                    }, {
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 9,
                        "key": "alpha",
                        "index": 16
                    }, {
                        "value": 1,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 9,
                        "key": "alpha",
                        "index": 25
                    }]
                }
            }, {
                "target": 6,
                "keyframes": {
                    "alpha": [{
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 6,
                        "key": "alpha",
                        "index": 0
                    }, {
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 6,
                        "key": "alpha",
                        "index": 16
                    }, {
                        "value": 1,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 6,
                        "key": "alpha",
                        "index": 25
                    }]
                }
            }, {
                "target": 5,
                "keyframes": {
                    "alpha": [{
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 5,
                        "key": "alpha",
                        "index": 0
                    }, {
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 5,
                        "key": "alpha",
                        "index": 16
                    }, {
                        "value": 1,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 5,
                        "key": "alpha",
                        "index": 25
                    }]
                }
            }, {
                "target": 2,
                "keyframes": {
                    "alpha": [{
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 2,
                        "key": "alpha",
                        "index": 0
                    }, {
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 2,
                        "key": "alpha",
                        "index": 16
                    }, {
                        "value": 1,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 2,
                        "key": "alpha",
                        "index": 25
                    }]
                }
            }, {
                "target": 10,
                "keyframes": {
                    "rotation": [{
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 10,
                        "key": "rotation",
                        "index": 0
                    }, {
                        "value": 2,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 10,
                        "key": "rotation",
                        "index": 2
                    }, {
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 10,
                        "key": "rotation",
                        "index": 4
                    }, {
                        "value": -2,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 10,
                        "key": "rotation",
                        "index": 6
                    }, {
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 10,
                        "key": "rotation",
                        "index": 8
                    }, {
                        "value": 2,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 10,
                        "key": "rotation",
                        "index": 10
                    }, {
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 10,
                        "key": "rotation",
                        "index": 12
                    }, {
                        "value": -2,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 10,
                        "key": "rotation",
                        "index": 14
                    }, {
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 10,
                        "key": "rotation",
                        "index": 16
                    }]
                }
            }, {
                "target": 4,
                "keyframes": {
                    "y": [{
                        "value": 148.5,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 4,
                        "key": "y",
                        "index": 0
                    }, {
                        "value": 148.5,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 4,
                        "key": "y",
                        "index": 16
                    }, {
                        "value": -948.5,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 4,
                        "key": "y",
                        "index": 25
                    }]
                }
            }, {
                "target": 3,
                "keyframes": {
                    "y": [{
                        "value": 260.5,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 3,
                        "key": "y",
                        "index": 0
                    }, {
                        "value": 260.5,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 3,
                        "key": "y",
                        "index": 16
                    }, {
                        "value": 1321,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 3,
                        "key": "y",
                        "index": 25
                    }]
                }
            }, {
                "target": 12,
                "keyframes": {
                    "alpha": [{
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 12,
                        "key": "alpha",
                        "index": 0
                    }, {
                        "value": 0,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 12,
                        "key": "alpha",
                        "index": 16
                    }, {
                        "value": 1,
                        "tweenMethod": "linearNone",
                        "tween": true,
                        "target": 12,
                        "key": "alpha",
                        "index": 25
                    }]
                }
            }],
            "name": "aniOpen",
            "id": 2,
            "frameRate": 24,
            "action": 0
        }]
    };
    ui.RewardTipViewUI = RewardTipViewUI;
})(ui || (ui = {}));
(function(ui) {
    class SettingDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            super.createChildren();
            this.createView(ui.SettingDialogUI.uiView);
        }
    }
    SettingDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "width": 702,
            "visible": true,
            "height": 524,
            "alpha": 255
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 0,
                "x": 0,
                "width": 702,
                "skin": "core/viewbg2.png",
                "sizeGrid": "15,15,15,15",
                "height": 524
            }
        }, {
            "type": "Image",
            "props": {
                "y": 102,
                "x": 10,
                "width": 682,
                "skin": "core/viewbg1.png",
                "sizeGrid": "15,15,15,15",
                "height": 414
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": -70,
                    "text": "SET",
                    "strokeColor": "#f3fbff",
                    "stroke": 2,
                    "fontSize": 42,
                    "font": "Arial",
                    "color": "#f3fbff",
                    "centerX": 0
                }
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 60,
                "x": 55,
                "var": "btnClose",
                "skin": "index/btn_close.png",
                "runtime": "touch.Button",
                "stateNum": 1,
                "pivotX": 41,
                "pivotY": 41
            }
        }, {
            "type": "Image",
            "props": {
                "y": 166,
                "x": 82,
                "skin": "index/img_mousic.png"
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 31,
                    "x": 118,
                    "visible": true,
                    "text": "Music",
                    "strokeColor": "#b5bdc8",
                    "stroke": 2,
                    "scaleY": 1,
                    "scaleX": 1,
                    "fontSize": 36,
                    "font": "Arial",
                    "color": "#b5bdc8",
                    "alpha": 255
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "y": 311,
                "x": 82,
                "skin": "index/img_sound.png"
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 31,
                    "x": 118,
                    "text": "Sound",
                    "strokeColor": "#b5bdc8",
                    "stroke": 2,
                    "scaleY": 1,
                    "scaleX": 1,
                    "fontSize": 36,
                    "font": "Arial",
                    "color": "#b5bdc8"
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "y": 176,
                "x": 49,
                "visible": false,
                "skin": "index/img_vibrate.png"
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 13,
                    "x": 85,
                    "text": "Shake",
                    "scaleY": 0.75,
                    "scaleX": 0.75,
                    "font": "yahei"
                }
            }]
        }, {
            "type": "CheckBox",
            "props": {
                "y": 175,
                "x": 318,
                "visible": false,
                "var": "cbVibrate",
                "skin": "index/checkbox.png"
            }
        }, {
            "type": "CheckBox",
            "props": {
                "y": 178,
                "x": 369,
                "var": "cbMusic",
                "skin": "index/checkbox.png"
            }
        }, {
            "type": "CheckBox",
            "props": {
                "y": 324,
                "x": 369,
                "var": "cbSound",
                "skin": "index/checkbox.png"
            }
        }]
    };
    ui.SettingDialogUI = SettingDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class SignInBigItemUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            super.createChildren();
            this.createView(ui.SignInBigItemUI.uiView);
        }
    }
    SignInBigItemUI.uiView = {
        "type": "View",
        "props": {
            "width": 622,
            "height": 290
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 145,
                "x": 311,
                "skin": "index/sign_big_item_bg.png",
                "pivotY": 145,
                "pivotX": 311
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 13,
                    "x": 13,
                    "width": 849,
                    "var": "tfDay",
                    "text": "Day 1",
                    "scaleY": 0.7,
                    "scaleX": 0.7,
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "y": 114,
                "x": 252,
                "var": "imgDiamond",
                "skin": "index/big_diamond.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 101,
                "x": 261,
                "var": "imgBall",
                "skin": "index/skin0.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 218,
                "x": 227,
                "width": 167,
                "skin": "index/sign_text_bg.png",
                "height": 48
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 7,
                    "x": 5,
                    "width": 258,
                    "var": "tfReward",
                    "text": "至尊球",
                    "scaleY": 0.6,
                    "scaleX": 0.6,
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "y": -1,
                "x": 0,
                "var": "imgMask",
                "skin": "index/sign_big_item_mask.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 90,
                "x": 235,
                "var": "imgGot",
                "skin": "index/imt_got.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 114,
                "x": 288,
                "var": "imgLock",
                "skin": "index/lock.png"
            }
        }]
    };
    ui.SignInBigItemUI = SignInBigItemUI;
})(ui || (ui = {}));
(function(ui) {
    class SignInItemUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            super.createChildren();
            this.createView(ui.SignInItemUI.uiView);
        }
    }
    SignInItemUI.uiView = {
        "type": "View",
        "props": {
            "y": 0,
            "x": 0,
            "width": 206,
            "height": 277
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 138,
                "x": 103,
                "skin": "index/sign_item_bg.png",
                "pivotY": 138,
                "pivotX": 103
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 13,
                    "x": 18,
                    "width": 286,
                    "var": "tfDay",
                    "text": "Day 1",
                    "scaleY": 0.6,
                    "scaleX": 0.6,
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "y": 84,
                "x": 44,
                "var": "imgDiamond",
                "skin": "index/big_diamond.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 71,
                "x": 53,
                "var": "imgBall",
                "skin": "index/skin0.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 188,
                "x": 21,
                "width": 167,
                "skin": "index/sign_text_bg.png",
                "height": 51
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": 7,
                    "x": 7,
                    "width": 258,
                    "var": "tfReward",
                    "text": "Super Ball",
                    "scaleY": 0.6,
                    "scaleX": 0.6,
                    "height": 56,
                    "font": "yahei",
                    "align": "center"
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "var": "imgMask",
                "skin": "index/sign_item_mask.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 83,
                "x": 27,
                "var": "imgGot",
                "skin": "index/imt_got.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 107,
                "x": 80,
                "var": "imgLock",
                "skin": "index/lock.png"
            }
        }]
    };
    ui.SignInItemUI = SignInItemUI;
})(ui || (ui = {}));
(function(ui) {
    class SkinDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("ui.SkinItemUI", ui.SkinItemUI);
            View.regComponent("touch.Button", touch.Button);
            super.createChildren();
            this.createView(ui.SkinDialogUI.uiView);
        }
    }
    SkinDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "width": 750,
            "height": 1334
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": -66,
                "x": -24,
                "width": 800,
                "visible": false,
                "skin": "core/black_mask.png",
                "sizeGrid": "10,10,10,10",
                "height": 1534
            }
        }, {
            "type": "Image",
            "props": {
                "y": 74,
                "x": 24,
                "width": 702,
                "skin": "core/viewbg2.png",
                "sizeGrid": "15,15,15,15",
                "height": 1100
            }
        }, {
            "type": "Image",
            "props": {
                "y": 177,
                "x": 35,
                "width": 682,
                "skin": "core/viewbg1.png",
                "sizeGrid": "15,15,15,15",
                "height": 974
            }
        }, {
            "type": "Image",
            "props": {
                "y": 632,
                "x": 49,
                "width": 652,
                "skin": "core/viewbg2.png",
                "sizeGrid": "15,15,15,15",
                "height": 508
            },
            "child": [{
                "type": "Label",
                "props": {
                    "y": -524,
                    "x": -10,
                    "width": 671,
                    "text": "SKIN",
                    "height": 56,
                    "fontSize": 42,
                    "font": "Arial",
                    "color": "#ffffff",
                    "bold": true,
                    "align": "center"
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "y": 192,
                "x": 48,
                "skin": "index/stage.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 212,
                "x": 447,
                "var": "imgDes",
                "skin": "index/qq_i_1.png",
                "scaleY": 0.7,
                "scaleX": 0.7
            }
        }, {
            "type": "Label",
            "props": {
                "y": 210,
                "x": 468,
                "width": 132,
                "var": "ballDes",
                "text": "Surpass 10000 players",
                "scaleY": 1,
                "scaleX": 1,
                "height": 56,
                "fontSize": 20,
                "font": "Arial",
                "color": "#FFFFFF",
                "bold": true,
                "align": "left"
            }
        }, {
            "type": "Label",
            "props": {
                "y": 238,
                "x": 564,
                "width": 132,
                "var": "ballPro",
                "text": "0/100",
                "scaleY": 1,
                "scaleX": 1,
                "height": 56,
                "fontSize": 20,
                "font": "Arial",
                "color": "#FA1639",
                "bold": true,
                "align": "center"
            }
        }, {
            "type": "Label",
            "props": {
                "y": 203,
                "x": 122,
                "width": 132,
                "var": "tfDiamond",
                "text": "100",
                "height": 56,
                "fontSize": 28,
                "font": "Arial",
                "color": "#FFFFFF",
                "bold": true,
                "align": "left"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 203,
                "x": 71,
                "skin": "index/diamond.png",
                "scaleY": 0.7,
                "scaleX": 0.7
            }
        }, {
            "type": "List",
            "props": {
                "y": 637,
                "x": 69,
                "width": 620,
                "var": "listSkin",
                "spaceY": 20,
                "spaceX": 30,
                "repeatX": 4,
                "height": 492
            },
            "child": [{
                "type": "SkinItem",
                "props": {
                    "renderType": "render",
                    "runtime": "ui.SkinItemUI"
                }
            }]
        }, {
            "type": "Image",
            "props": {
                "y": 350,
                "x": 319,
                "width": 120,
                "var": "imgRandom",
                "skin": "index/skin0.png",
                "height": 120
            }
        }, {
            "type": "Button",
            "props": {
                "y": 579.5,
                "x": 385,
                "width": 200,
                "visible": false,
                "var": "btnUse",
                "stateNum": 1,
                "skin": "index/qq_lvdi.png",
                "sizeGrid": "15,15,15,15",
                "runtime": "touch.Button",
                "height": 60,
                "anchorY": 0.5,
                "anchorX": 0.5
            },
            "child": [{
                "type": "Box",
                "props": {
                    "y": 27,
                    "x": 41,
                    "width": 351,
                    "height": 56
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": -18,
                        "x": 31,
                        "width": 82,
                        "text": "Use",
                        "height": 56,
                        "fontSize": 36,
                        "font": "Arial",
                        "color": "#FFFFFF",
                        "bold": true,
                        "align": "left"
                    }
                }]
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 579.5,
                "x": 215,
                "width": 200,
                "visible": false,
                "var": "btnLock",
                "stateNum": 1,
                "skin": "index/qq_heidi.png",
                "sizeGrid": "15,15,15,15",
                "runtime": "touch.Button",
                "height": 60,
                "anchorY": 0.5,
                "anchorX": 0.5
            },
            "child": [{
                "type": "Box",
                "props": {
                    "y": 15,
                    "x": 25,
                    "width": 351,
                    "height": 56
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": -18,
                        "x": 31,
                        "width": 82,
                        "valign": "middle",
                        "text": "Use",
                        "height": 55,
                        "fontSize": 36,
                        "font": "Arial",
                        "color": "#7d7d7d",
                        "bold": true,
                        "align": "center"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": -7,
                        "x": 56.5,
                        "skin": "index/qq_suo.png",
                        "scaleY": 0.8,
                        "scaleX": 0.8
                    }
                }]
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 579.5,
                "x": 536,
                "width": 200,
                "visible": false,
                "var": "btnBuy",
                "stateNum": 1,
                "skin": "index/qq_huangdi.png",
                "sizeGrid": "15,15,15,15",
                "runtime": "touch.Button",
                "height": 60,
                "anchorY": 0.5,
                "anchorX": 0.5
            },
            "child": [{
                "type": "Box",
                "props": {
                    "y": 31,
                    "x": 41,
                    "width": 351,
                    "height": 56
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": -17,
                        "x": 57,
                        "width": 82,
                        "var": "tfCostDiamond",
                        "text": "500",
                        "height": 56,
                        "fontSize": 28,
                        "font": "Arial",
                        "color": "#FFFFFF",
                        "bold": true,
                        "align": "left"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": -18,
                        "x": 5,
                        "skin": "index/diamond.png",
                        "scaleY": 0.7,
                        "scaleX": 0.7
                    }
                }]
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 130,
                "x": 182,
                "var": "btnClose",
                "skin": "index/btn_close.png",
                "runtime": "touch.Button",
                "stateNum": 1,
                "pivotX": 41,
                "pivotY": 41
            }
        }]
    };
    ui.SkinDialogUI = SkinDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class SkinItemUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            super.createChildren();
            this.createView(ui.SkinItemUI.uiView);
        }
    }
    SkinItemUI.uiView = {
        "type": "View",
        "props": {
            "width": 130,
            "height": 150
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": 62,
                "x": 65,
                "var": "imgBG",
                "skin": "index/ball_bg.png",
                "pivotY": 63,
                "pivotX": 62
            }
        }, {
            "type": "Image",
            "props": {
                "y": 62,
                "x": 65,
                "var": "imgSel",
                "skin": "index/qq_txk.png",
                "pivotY": 63,
                "pivotX": 62
            }
        }, {
            "type": "Image",
            "props": {
                "y": 64,
                "x": 65,
                "var": "imgSkin",
                "skin": "index/skin0.png",
                "pivotY": 50,
                "pivotX": 50
            }
        }, {
            "type": "Image",
            "props": {
                "y": 76,
                "x": 77,
                "width": 102,
                "var": "imgLock",
                "skin": "index/ball_lock.png",
                "pivotY": 63,
                "pivotX": 62,
                "height": 102
            }
        }, {
            "type": "Image",
            "props": {
                "y": 88,
                "x": 38,
                "var": "imgChoose",
                "skin": "index/selected.png"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 109.5,
                "x": 0,
                "var": "imgVideo",
                "skin": "index/qq_new.png",
                "scaleY": 0.7,
                "scaleX": 0.7
            }
        }, {
            "type": "Label",
            "props": {
                "y": 127,
                "x": 61,
                "width": 132,
                "var": "tfVideo",
                "text": "12/30",
                "scaleY": 1,
                "scaleX": 1,
                "height": 56,
                "fontSize": 18,
                "font": "Arial",
                "color": "#ffffff",
                "bold": true,
                "align": "left"
            }
        }]
    };
    ui.SkinItemUI = SkinItemUI;
})(ui || (ui = {}));
(function(ui) {
    class TipDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            super.createChildren();
            this.createView(ui.TipDialogUI.uiView);
        }
    }
    TipDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "y": 0,
            "x": 0,
            "width": 750,
            "top": 0,
            "right": 0,
            "left": 0,
            "height": 1334,
            "bottom": 0
        },
        "child": [{
            "type": "Image",
            "props": {
                "top": 0,
                "skin": "core/black_mask.png",
                "right": 0,
                "left": 0,
                "bottom": 0,
                "sizeGrid": "10,10,10,10"
            }
        }]
    };
    ui.TipDialogUI = TipDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class WorldRankDialogUI extends Dialog {
        constructor() {
            super();
        }
        createChildren() {
            View.regComponent("touch.Button", touch.Button);
            View.regComponent("ui.WorldRankItemUI", ui.WorldRankItemUI);
            super.createChildren();
            this.createView(ui.WorldRankDialogUI.uiView);
        }
    }
    WorldRankDialogUI.uiView = {
        "type": "Dialog",
        "props": {
            "width": 750,
            "height": 1334
        },
        "child": [{
            "type": "Image",
            "props": {
                "y": -100,
                "x": -97,
                "width": 950,
                "visible": true,
                "skin": "core/black_mask.png",
                "height": 1534,
                "sizeGrid": "10,10,10,10"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 222,
                "x": 6,
                "width": 740,
                "skin": "core/viewbg2.png",
                "sizeGrid": "15,15,15,15",
                "height": 980
            },
            "child": [{
                "type": "Button",
                "props": {
                    "y": -143,
                    "x": 40,
                    "var": "btnClose",
                    "stateNum": 1,
                    "skin": "index/btn_close.png",
                    "runtime": "touch.Button",
                    "anchorY": 0.5,
                    "anchorX": 0.5,
                    "pivotX": 41,
                    "pivotY": 41
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 1010,
                    "x": 57,
                    "width": 633,
                    "valign": "middle",
                    "text": "Tips:Initialize the ranking list every monday",
                    "scaleY": 1,
                    "scaleX": 1,
                    "overflow": "scroll",
                    "height": 42,
                    "gray": true,
                    "fontSize": 24,
                    "font": "Arial",
                    "disabled": true,
                    "color": "#b8c5cc",
                    "align": "center"
                }
            }]
        }, {
            "type": "List",
            "props": {
                "y": 293,
                "x": 19,
                "width": 720,
                "var": "listRank",
                "spaceY": 6,
                "repeatX": 1,
                "height": 875
            },
            "child": [{
                "type": "WorldRankItem",
                "props": {
                    "renderType": "render",
                    "runtime": "ui.WorldRankItemUI"
                }
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 177,
                "x": 569,
                "width": 185,
                "var": "gModel1",
                "runtime": "touch.Button",
                "height": 57,
                "anchorY": 0.5,
                "anchorX": 0.5
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 57,
                    "x": 0,
                    "width": 165,
                    "scaleY": 1,
                    "name": "on",
                    "height": 57
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": -80,
                        "x": -32,
                        "width": 247,
                        "valign": "middle",
                        "text": "FRIENDS",
                        "scaleY": 1,
                        "scaleX": 1,
                        "height": 85,
                        "fontSize": 42,
                        "font": "Arial",
                        "color": "#f3fbff",
                        "bold": true,
                        "anchorX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": -8,
                        "x": -94,
                        "width": 360,
                        "skin": "core/viewbg8.png",
                        "sizeGrid": "0,5,0,5",
                        "height": 10
                    }
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 59,
                    "x": 0,
                    "width": 165,
                    "scaleY": -1,
                    "name": "off",
                    "height": 57
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 82,
                        "x": -32,
                        "width": 247,
                        "valign": "middle",
                        "text": "FRIENDS",
                        "scaleY": -1,
                        "scaleX": 1,
                        "height": 85,
                        "fontSize": 42,
                        "font": "Arial",
                        "color": "#698186",
                        "bold": true,
                        "anchorX": 0,
                        "align": "center"
                    }
                }]
            }]
        }, {
            "type": "Button",
            "props": {
                "y": 177,
                "x": 228,
                "width": 185,
                "var": "gModel0",
                "stateNum": 2,
                "runtime": "touch.Button",
                "height": 57,
                "anchorY": 0.5,
                "anchorX": 0.5
            },
            "child": [{
                "type": "Image",
                "props": {
                    "y": 57,
                    "x": -20,
                    "width": 165,
                    "scaleY": -1,
                    "name": "on",
                    "height": 57
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 80,
                        "x": -42,
                        "width": 247,
                        "valign": "middle",
                        "text": "WORLD",
                        "scaleY": -1,
                        "scaleX": 1,
                        "height": 85,
                        "fontSize": 42,
                        "font": "Arial",
                        "color": "#f3fbff",
                        "bold": true,
                        "anchorX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": -101,
                        "width": 360,
                        "skin": "core/viewbg8.png",
                        "sizeGrid": "0,5,0,5",
                        "height": 10
                    }
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 57,
                    "x": -20,
                    "width": 165,
                    "scaleY": -1,
                    "name": "off",
                    "height": 57
                },
                "child": [{
                    "type": "Label",
                    "props": {
                        "y": 80,
                        "x": -40,
                        "width": 247,
                        "valign": "middle",
                        "text": "WORLD",
                        "scaleY": -1,
                        "scaleX": 1,
                        "height": 85,
                        "fontSize": 42,
                        "font": "Arial",
                        "color": "#698186",
                        "bold": true,
                        "anchorX": 0,
                        "align": "center"
                    }
                }]
            }]
        }, {
            "type": "Label",
            "props": {
                "y": 231,
                "x": 36,
                "text": "Rank",
                "fontSize": 30,
                "font": "Arial",
                "color": "#8bbbc3",
                "bold": true
            }
        }, {
            "type": "Label",
            "props": {
                "y": 231,
                "x": 256,
                "text": "Player",
                "fontSize": 30,
                "font": "Arial",
                "color": "#8bbbc3",
                "bold": true
            }
        }, {
            "type": "Label",
            "props": {
                "y": 231,
                "x": 482,
                "text": "Score",
                "fontSize": 30,
                "font": "Arial",
                "color": "#8bbbc3",
                "bold": true
            }
        }]
    };
    ui.WorldRankDialogUI = WorldRankDialogUI;
})(ui || (ui = {}));
(function(ui) {
    class WorldRankItemUI extends View {
        constructor() {
            super();
        }
        createChildren() {
            super.createChildren();
            this.createView(ui.WorldRankItemUI.uiView);
        }
    }
    WorldRankItemUI.uiView = {
        "type": "View",
        "props": {
            "width": 720,
            "height": 120
        },
        "child": [{
            "type": "Clip",
            "props": {
                "y": 0,
                "x": 0,
                "width": 720,
                "var": "clipBG",
                "skin": "core/viewbg6.png",
                "sizeGrid": "10,10,10,10",
                "height": 120,
                "clipY": 1
            }
        }, {
            "type": "Label",
            "props": {
                "y": 36,
                "x": 9,
                "width": 100,
                "var": "tfRank",
                "text": "100",
                "scaleY": 1,
                "scaleX": 1,
                "height": 100,
                "fontSize": 46,
                "font": "Arial",
                "color": "#ffffff",
                "bold": true,
                "align": "center"
            }
        }, {
            "type": "Image",
            "props": {
                "y": 15,
                "x": 121,
                "width": 88,
                "var": "imgHead",
                "skin": "core/viewbg7.png",
                "height": 88
            },
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 44,
                    "x": 44,
                    "renderType": "mask"
                },
                "child": [{
                    "type": "Circle",
                    "props": {
                        "radius": 44,
                        "lineWidth": 1,
                        "fillColor": "#ff0000"
                    }
                }]
            }]
        }, {
            "type": "Label",
            "props": {
                "y": 47,
                "x": 241,
                "width": 250,
                "var": "tfName",
                "text": "1234",
                "overflow": "scroll",
                "height": 35,
                "fontSize": 24,
                "font": "Arial",
                "color": "#ffffff",
                "align": "left"
            }
        }, {
            "type": "Label",
            "props": {
                "y": 46,
                "x": 470,
                "width": 227,
                "var": "tfScore",
                "text": "111111111",
                "scaleY": 1,
                "scaleX": 1,
                "height": 48,
                "fontSize": 30,
                "font": "Arial",
                "color": "#ffffff",
                "bold": true,
                "align": "left"
            }
        }]
    };
    ui.WorldRankItemUI = WorldRankItemUI;
})(ui || (ui = {}));