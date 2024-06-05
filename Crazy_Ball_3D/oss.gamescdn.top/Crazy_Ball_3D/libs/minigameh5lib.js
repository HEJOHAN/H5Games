(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.minigameh5Lib = {})));
}(this, (function(exports) {
    'use strict';
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new(P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }

            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }

            function step(result) {
                result.done ? resolve(result.value) : new P(function(resolve) {
                    resolve(result.value);
                }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = {
                label: 0,
                sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            },
            f, y, t, g;
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;

        function verb(n) {
            return function(v) {
                return step([n, v]);
            };
        }

        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];
                y = 0;
            } finally {
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    }
    var EngineTool = {
        LocalDownloader: {
            downloadImage: function(url) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                        console.warn("Engine Tool not set");
                        return [2];
                    });
                });
            },
            downloadJson: function(url) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                        console.warn("Engine Tool not set");
                        return [2];
                    });
                });
            }
        },
        convertImageToSpriteFrame: function(img) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    console.warn("Engine Tool not set");
                    return [2];
                });
            });
        }
    };
    var arrayTools = {
        remove: function(arr, item) {
            var idx = arr.indexOf(item);
            if (idx < 0) {
                return arr;
            }
            arr.splice(idx, 1);
            return arr;
        },
        contains: function(arr, item) {
            return arr.indexOf(item) >= 0;
        },
        clone: function(arr) {
            var a = [];
            arr.forEach(function(item) {
                a.push(item);
            });
            return a;
        },
        cleanupByKey: function(arr, key) {
            var dest = [];
            for (var k in arr) {
                var v = arr[k];
                if (MiniGameUtils.isNotUndefinedOrNull(v)) {
                    var exist = false;
                    if (MiniGameUtils.isNotUndefinedOrNull(v[key])) {
                        for (var j = 0; j < dest.length; j++) {
                            if (dest[j][key] === v[key]) {
                                dest[j] = v;
                                exist = true;
                            }
                        }
                    }
                    if (!exist) {
                        dest.push(v);
                    }
                }
            }
            return dest;
        }
    };
    var randomTools = {
        random: function() {
            return Math.random();
        },
        randomInt: function(min, max) {
            var v = Math.random();
            v *= (max - min);
            v = Math.floor(v);
            return min + v;
        },
        randomFloat: function(min, max) {
            return Math.random() * (max - min) + min;
        },
        randomItemInArray: function(array) {
            var idx = randomTools.randomInt(0, array.length);
            return {
                idx: idx,
                value: array[idx]
            };
        },
        randomItems: function(array, count) {
            var ids = randomTools.randomValuesBetween(0, array.length, count);
            var items = [];
            ids.forEach(function(idx) {
                items.push({
                    idx: idx,
                    value: array[idx]
                });
            });
            return items;
        },
        randomValuesBetween: function(min, max, count, excludedList) {
            if (excludedList === void 0) {
                excludedList = [];
            }
            var values = [];
            var exlist = arrayTools.clone(excludedList);
            var totalCount = max - min;
            if (totalCount <= count) {
                count = totalCount;
            }
            for (var i = 0; i < count; i++) {
                var idx = randomTools.randomValueBetweenAndNotInList(min, max, exlist);
                exlist.push(idx);
                values.push(idx);
            }
            return values;
        },
        randomValueBetweenAndNotInList: function(min, max, excludedList) {
            var v = 0;
            var ready = false;
            console.assert(min < max);
            while (!ready) {
                v = randomTools.randomInt(min, max);
                ready = true;
                if (arrayTools.contains(excludedList, v)) {
                    ready = false;
                }
            }
            return v;
        },
        randomArray: function(array) {
            var items = randomTools.randomItems(array, array.length);
            var a = [];
            items.forEach(function(item) {
                a.push(item.value);
            });
            return a;
        },
        getTotalWeight: function(sourceArray, excludeList) {
            var tw = 0;
            for (var i = 0; i < sourceArray.length; i++) {
                if (excludeList.indexOf(i) < 0) {
                    tw += sourceArray[i].Weight;
                }
            }
            return tw;
        },
        randomByRate: function(sourceArray, excludeList) {
            var idx = -1;
            var tw = randomTools.getTotalWeight(sourceArray, []);
            while (idx < 0) {
                var weight = randomTools.randomFloat(0, tw);
                var w = 0;
                for (var i = 0; i < sourceArray.length; i++) {
                    var a = sourceArray[i];
                    if (a.Weight <= 0) {
                        continue;
                    }
                    if (weight >= w && weight < (w + a.Weight)) {
                        if (arrayTools.contains(excludeList, i)) {
                            idx = -1;
                        } else {
                            idx = i;
                        }
                        break;
                    }
                    w += a.Weight;
                }
            }
            return idx;
        },
        randomByWeight: function(sourceArray, excludeList) {
            var idx = -1;
            var tw = 0;
            tw = randomTools.getTotalWeight(sourceArray, excludeList);
            var weight = randomTools.randomFloat(0, tw);
            var w = 0;
            for (var i = 0; i < sourceArray.length; i++) {
                if (excludeList.indexOf(i) >= 0) {
                    continue;
                }
                var a = sourceArray[i];
                if (a.Weight <= 0) {
                    continue;
                }
                if (weight >= w && weight < (w + a.Weight)) {
                    idx = i;
                    break;
                }
                w += a.Weight;
            }
            return idx;
        },
        randomListByWeight: function(sourceArray, count, weightAsRate, excluded) {
            var picked = [];
            var countToPick = count;
            var c = sourceArray.length - excluded.length;
            if (c <= 0) {
                return picked;
            }
            if (c <= countToPick) {
                countToPick = sourceArray.length - excluded.length;
                picked = this.randomValuesBetween(0, sourceArray.length, countToPick, excluded);
            } else {
                var exlist = arrayTools.clone(excluded);
                while (picked.length < countToPick) {
                    if (picked.length >= sourceArray.length) {
                        break;
                    }
                    var idx = -1;
                    if (weightAsRate) {
                        idx = randomTools.randomByRate(sourceArray, exlist);
                    } else {
                        idx = randomTools.randomByWeight(sourceArray, exlist);
                    }
                    console.assert(idx >= 0);
                    exlist.push(idx);
                    picked.push(idx);
                }
            }
            return picked;
        },
        testRandByWeight: function(sourceArray, count, weightAsRate, loops) {
            var result = [];
            var totalWeight = 0;
            for (var _i = 0, sourceArray_1 = sourceArray; _i < sourceArray_1.length; _i++) {
                var item = sourceArray_1[_i];
                result.push({
                    Weight: item.Weight,
                    Count: 0
                });
                totalWeight += item.Weight;
            }
            for (var i = 0; i < loops; i++) {
                var pickedId = this.randomListByWeight(sourceArray, count, weightAsRate, []);
                for (var _a = 0, pickedId_1 = pickedId; _a < pickedId_1.length; _a++) {
                    var id = pickedId_1[_a];
                    result[id].Count++;
                }
            }
            console.debug("===== Test Random List By Weight =====");
            console.debug("Weight as Rate: " + weightAsRate);
            var s = "";
            for (var i = 0; i < result.length; i++) {
                var r0 = result[i].Weight / totalWeight * 100;
                var r = result[i].Count / (loops * count) * 100;
                var expectedCount = Math.floor(loops * count * result[i].Weight / totalWeight);
                var diff = expectedCount > 0 ? Math.abs(result[i].Count - expectedCount) / expectedCount : 0;
                s += "[" + i + "] Weight: " + result[i].Weight + ", ";
                s += "\u6B21\u6570: " + result[i].Count + "|" + expectedCount + "|" + Math.abs(expectedCount - result[i].Count) + ", ";
                s += "\u6982\u7387: " + r0.toFixed(2) + "%|" + r.toFixed(2) + "%|" + diff.toFixed(2) + "%, ";
                s += "\n";
            }
            console.debug(s);
            console.debug("======================================");
            return result;
        },
        testRandom: function(loops) {
            if (loops === void 0) {
                loops = 100000;
            }
            var result = [];
            var max = 100;
            for (var i = 0; i < max; i++) {
                result[i] = 0;
            }
            for (var i = 0; i < loops; i++) {
                var a = MiniGameUtils.random.randomInt(0, max);
                var idx = Math.floor(a);
                result[idx]++;
            }
            console.debug("===== Test Math.Random =====");
            var s = "";
            var r0 = 1 / max * 100;
            for (var i = 0; i < result.length; i++) {
                var r1 = result[i] / loops * 100;
                s += "[" + i + "] Count: " + result[i] + ", Expected: " + r0.toFixed(2) + "%, Test Rate: " + r1.toFixed(2) + "%\n";
            }
            console.debug(s);
            console.debug("======================================");
        }
    };

    function mergeObjects(destObj, srcObj, arrayLikeIds) {
        var _loop_1 = function(propName) {
            var v = srcObj[propName];
            var t = typeof(v);
            if ((t === "string") || (t === "boolean") || (t === "number")) {
                destObj[propName] = v;
            } else if (t === "object") {
                if (MiniGameUtils.isNotUndefinedOrNull(arrayLikeIds)) {
                    arrayLikeIds.findIndex(function(value, index, obj) {
                        return value.propName === propName;
                    });
                } {
                    destObj[propName] = v;
                }
            }
        };
        for (var propName in srcObj) {
            _loop_1(propName);
        }
        return destObj;
    }
    var stringTools = {
        replaceAll: function(src, strToFind, strToReplace) {
            var destStr = src;
            while (destStr.indexOf(strToFind) >= 0) {
                destStr = destStr.replace(strToFind, strToReplace);
            }
            return destStr;
        }
    };
    var MiniGameUtils = {
        isUndefinedOrNull: function(obj) {
            return typeof(obj) === "undefined" || obj == null;
        },
        isNotUndefinedOrNull: function(obj) {
            return !MiniGameUtils.isUndefinedOrNull(obj);
        },
        isUndefinedOrNullOrEmpty: function(obj) {
            if (this.isUndefinedOrNull(obj)) {
                return true;
            }
            if (this.isUndefinedOrNull(obj.length)) {
                return false;
            }
            return obj.length <= 0;
        },
        random: randomTools,
        convertBlobToImage: function(blobObj) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    return [2, new Promise(function(r) {
                        var img = new Image();
                        img.src = URL.createObjectURL(blobObj);
                        img.onload = function() {
                            r(img);
                        };
                    })];
                });
            });
        },
        convertImageToSpriteFrame: function(img) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    return [2, EngineTool.convertImageToSpriteFrame(img)];
                });
            });
        },
        array: arrayTools,
        mergeObjects: mergeObjects,
        string: stringTools
    };
    var _fbid = "";
    var MiniGameConfig = {
        VERSION: "1.2.0",
        BUILD: 10,
        getVersion: function() {
            return this.VERSION + "." + this.BUILD;
        },
        ASSETS_SERVER: "https://cdn.minigame.vip/assets",
        EVENT_API_URL: "https://cdn.minigame.vip/fbapi/v1/fbevent",
        LOG_LEVEL: 1,
        LOG_TAG: "[MiniGameSdk]",
        ENABLE_LOCAL_TEST: true,
        DISABLE_IOS: true,
        FAKE_PLATFORM: "WEB",
        FAKE_SWITCH_SUCCESS_RATE: 0.5,
        LOCAL_CONFIG_PATH: "MiniGameSdk/config",
        LOCAL_ASSET_PATH: "MiniGameSdk/assets/{asset}",
        SWITCH_WITHOUT_DATA: false,
        setAppId: function(appid) {
            _fbid = appid;
            if (appid) {
                _fbid = appid.toString();
            } else {
                console.error("错误的App Id，请检查值是否正确，是否为字符串类型: ", appid);
            }
        },
        getAppId: function() {
            return _fbid;
        }
    };
    var LOG_LEVEL;
    (function(LOG_LEVEL) {
        LOG_LEVEL[LOG_LEVEL["DEBUG"] = 0] = "DEBUG";
        LOG_LEVEL[LOG_LEVEL["INFO"] = 1] = "INFO";
        LOG_LEVEL[LOG_LEVEL["WARN"] = 2] = "WARN";
        LOG_LEVEL[LOG_LEVEL["ERROR"] = 3] = "ERROR";
    })(LOG_LEVEL || (LOG_LEVEL = {}));
    var _logLevel = LOG_LEVEL.INFO;
    var _defaultTag = "[MiniGameSdk]";
    var logs = {
        setLogLevel: function(level) {
            _logLevel = level;
        },
        setDefaultTag: function(tag) {
            _defaultTag = tag;
        },
        debug: function(tag, msg) {
            var optionParams = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                optionParams[_i - 2] = arguments[_i];
            }
            if (_logLevel > LOG_LEVEL.DEBUG) {
                return;
            }
            if (MiniGameUtils.isUndefinedOrNull(tag) || tag.length <= 0) {
                tag = _defaultTag;
            }
            var args = Array.prototype.slice.call(arguments);
            args.shift();
            args.unshift(tag, "[D]");
            console.info.apply(console, args);
        },
        info: function(tag, msg) {
            var optionParams = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                optionParams[_i - 2] = arguments[_i];
            }
            if (_logLevel > LOG_LEVEL.INFO) {
                return;
            }
            if (MiniGameUtils.isUndefinedOrNull(tag) || tag.length <= 0) {
                tag = _defaultTag;
            }
            var args = Array.prototype.slice.call(arguments);
            args.shift();
            args.unshift(tag, "[I]");
            console.info.apply(console, args);
        },
        warn: function(tag, msg) {
            var optionParams = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                optionParams[_i - 2] = arguments[_i];
            }
            if (_logLevel > LOG_LEVEL.WARN) {
                return;
            }
            if (MiniGameUtils.isUndefinedOrNull(tag) || tag.length <= 0) {
                tag = _defaultTag;
            }
            var args = Array.prototype.slice.call(arguments);
            args.shift();
            args.unshift(tag, "[W]");
            console.info.apply(console, args);
        },
        error: function(tag, msg) {
            var optionParams = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                optionParams[_i - 2] = arguments[_i];
            }
            if (_logLevel > LOG_LEVEL.ERROR) {
                return;
            }
            if (MiniGameUtils.isUndefinedOrNull(tag) || tag.length <= 0) {
                tag = _defaultTag;
            }
            var args = Array.prototype.slice.call(arguments);
            args.shift();
            args.unshift(tag, "[E]");
            console.error.apply(console, args);
        },
    };
    var MiniGameLogs = logs;
    var SDKFBInstant = window["FBInstant"];
    var MINIGAME_FBAPI = {
        fake: true,
        TAG: "[FakeFB]",
        getPlatform: function() {
            return MiniGameConfig.FAKE_PLATFORM;
        },
        getSDKVersion: function() {
            return "FAKE_FB" + "." + MiniGameConfig.getVersion();
        },
        isIOSPlatform: function() {
            return this.getPlatform().toLowerCase() === "ios";
        },
        getEntryPointAsync: function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    MiniGameLogs.info(MINIGAME_FBAPI.TAG, "getEntryPointAsync");
                    return [2, "FAKE_FB"];
                });
            });
        },
        getEntryPointData: function() {
            MiniGameLogs.info(MINIGAME_FBAPI.TAG, "getEntryPointData");
            return {};
        },
        switchGameAsync: function(appID, data) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    MiniGameLogs.info(MINIGAME_FBAPI.TAG, "switchGameAsync: ", "appId:" + appID, data);
                    return [2, MiniGameUtils.random.random() <= MiniGameConfig.FAKE_SWITCH_SUCCESS_RATE];
                });
            });
        },
        logEvent: function(eventName, valueToSum) {
            MiniGameLogs.info(MINIGAME_FBAPI.TAG, "logEvent: ", eventName);
        },
        player: {
            getDataAsync: function(keys) {
                return __awaiter(this, void 0, void 0, function() {
                    var data, _i, keys_1, key, jsonStr, v;
                    return __generator(this, function(_a) {
                        MiniGameLogs.info(MINIGAME_FBAPI.TAG, "getDataAsync: ", keys);
                        data = {};
                        for (_i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                            key = keys_1[_i];
                            jsonStr = localStorage.getItem(key);
                            if (jsonStr && jsonStr.length > 0) {
                                try {
                                    v = JSON.parse(jsonStr);
                                    data[key] = v[key];
                                    MiniGameLogs.debug(MINIGAME_FBAPI.TAG, "get data[" + key + "]: ", v);
                                } catch (e) {
                                    MiniGameLogs.warn(MINIGAME_FBAPI.TAG, "invalid json value for key: " + key + ", jsonString: ", jsonStr);
                                }
                            }
                        }
                        return [2, data];
                    });
                });
            },
            setDataAsync: function(data) {
                return __awaiter(this, void 0, void 0, function() {
                    var key, v, o, str;
                    return __generator(this, function(_a) {
                        MiniGameLogs.info(MINIGAME_FBAPI.TAG, "setDataAsync: ", data);
                        for (key in data) {
                            v = data[key];
                            o = {};
                            o[key] = v;
                            try {
                                str = JSON.stringify(o);
                                localStorage.setItem(key, str);
                            } catch (e) {
                                MiniGameLogs.warn(MINIGAME_FBAPI.TAG, "Fail to stringify json object for key: " + key + ", obj: ", o);
                            }
                        }
                        return [2];
                    });
                });
            }
        }
    };

    function isFacebook() {
        return MiniGameUtils.isNotUndefinedOrNull(SDKFBInstant);
    }
    var TAG = "[FBApi]";
    var FBApi = {
        isFacebook: isFacebook,
        setLocalApi: function(useLocalApi) {
            if (useLocalApi && MiniGameConfig.ENABLE_LOCAL_TEST) {
                console.info("==> Use Local FB Api");
                SDKFBInstant = MINIGAME_FBAPI;
            } else {
                console.info("==> Use Actual FB Api");
                SDKFBInstant = window["FBInstant"];
            }
        },
        getFBInstant: function() {
            return SDKFBInstant;
        },
        getPlatform: function() {
            if (!isFacebook()) {
                return "";
            }
            return SDKFBInstant.getPlatform();
        },
        getSDKVersion: function() {
            if (!isFacebook()) {
                return "";
            }
            return SDKFBInstant.getSDKVersion();
        },
        isIOSPlatform: function() {
            return this.getPlatform().toLowerCase() === "ios";
        },
        getEntryPointAsync: function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    if (!isFacebook()) {
                        return [2];
                    }
                    return [2, SDKFBInstant.getEntryPointAsync()];
                });
            });
        },
        getEntryPointData: function() {
            if (!isFacebook()) {
                return;
            }
            return SDKFBInstant.getEntryPointData();
        },
        getPlayerDataAsync: function(keys) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    if (!isFacebook()) {
                        return [2];
                    }
                    return [2, SDKFBInstant.player.getDataAsync(keys)];
                });
            });
        },
        setPlayerDataAsync: function(data) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    if (!isFacebook()) {
                        return [2];
                    }
                    return [2, SDKFBInstant.player.setDataAsync(data)];
                });
            });
        },
        switchGameAsync: function(toApp, data) {
            return __awaiter(this, void 0, void 0, function() {
                var ret, e_1;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isFacebook()) {
                                return [2, false];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, SDKFBInstant.switchGameAsync(toApp, data)];
                        case 2:
                            ret = _a.sent();
                            MiniGameLogs.info("", "Switch Game, result: ", ret);
                            return [2, ret];
                        case 3:
                            e_1 = _a.sent();
                            MiniGameLogs.info("", "Switch Game With Exception: ", e_1);
                            return [2, false];
                        case 4:
                            return [2];
                    }
                });
            });
        },
        logEvent: function(evt, value) {
            if (value === void 0) {
                value = 1;
            }
            MiniGameLogs.debug(TAG, "log event: ", evt);
            if (!isFacebook()) {
                return;
            }
            SDKFBInstant.logEvent(evt, value);
        },
        logEvents: function(evts) {
            MiniGameLogs.debug(TAG, "log events: ", evts);
            if (!isFacebook()) {
                return;
            }
            for (var _i = 0, _a = Object.keys(evts); _i < _a.length; _i++) {
                var key = _a[_i];
                var evt = evts[key];
                SDKFBInstant.logEvent(evt, 1);
            }
        },
    };
    var HTTP_METHOD = {
        GET: "GET",
        POST: "POST"
    };

    function setHttpRequestHeader(xhr, header) {
        for (var key in header) {
            if (header[key]) {
                xhr.setRequestHeader(key, header[key]);
            }
        }
    }

    function setQueryString(url, data) {}

    function isGetMethod(method) {
        return method === HTTP_METHOD.GET;
    }

    function isPostMethod(method) {
        return method === HTTP_METHOD.POST;
    }
    var HttpJob = (function() {
        function HttpJob() {}
        HttpJob.create = function(method, url, onFinish, params) {
            var job = new HttpJob();
            job.method = method;
            job.params = params;
            job.url = url;
            job.onFinished = onFinish;
            return job;
        };
        HttpJob.prototype.doJob = function() {
            return __awaiter(this, void 0, void 0, function() {
                var method, url, params;
                return __generator(this, function(_a) {
                    method = this.method;
                    url = this.url;
                    params = this.params;
                    return [2, new Promise(function(r) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === XMLHttpRequest.DONE) {
                                var error = true;
                                if (xhr.status >= 200 && xhr.status < 400) {
                                    error = false;
                                }
                                var resp = {
                                    error: error,
                                    status: xhr.status,
                                    response: {
                                        type: xhr.responseType,
                                        text: xhr.responseText,
                                        rawData: xhr.response
                                    },
                                    xhr: xhr
                                };
                                r(resp);
                            }
                        };
                        if (params && params.data && isGetMethod(method)) {
                            setQueryString(url, params.data);
                        }
                        xhr.open(method, url, true);
                        if (params && params.header) {
                            setHttpRequestHeader(xhr, params.header);
                        }
                        if (isPostMethod(method) && params && params.data) {
                            xhr.send(params.data);
                        } else {
                            xhr.send();
                        }
                    })];
                });
            });
        };
        return HttpJob;
    }());
    var HttpRequest = (function() {
        function HttpRequest() {}
        HttpRequest.startJob = function() {
            return __awaiter(this, void 0, void 0, function() {
                var job, e_1;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            if (this._processing) {
                                return [2];
                            }
                            this._processing = true;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 5, , 6]);
                            _a.label = 2;
                        case 2:
                            if (!(this._jobs.length > 0)) return [3, 4];
                            job = this._jobs.shift();
                            return [4, job.doJob()];
                        case 3:
                            _a.sent();
                            return [3, 2];
                        case 4:
                            return [3, 6];
                        case 5:
                            e_1 = _a.sent();
                            return [3, 6];
                        case 6:
                            this._processing = false;
                            return [2];
                    }
                });
            });
        };
        HttpRequest.Send = function(method, url, params) {
            return __awaiter(this, void 0, void 0, function() {
                var _this = this;
                return __generator(this, function(_a) {
                    return [2, new Promise(function(r) {
                        var job = HttpJob.create(method, url, function(resp) {
                            r(resp);
                        }, params);
                        _this._jobs.push(job);
                        _this.startJob();
                    })];
                });
            });
        };
        HttpRequest.Get = function(url, params) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    return [2, HttpRequest.Send("GET", url, params)];
                });
            });
        };
        HttpRequest.Post = function(url, params) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    return [2, HttpRequest.Send("POST", url, params)];
                });
            });
        };
        HttpRequest.METHOD = HTTP_METHOD;
        HttpRequest._jobs = [];
        HttpRequest._processing = false;
        return HttpRequest;
    }());
    var MiniGameApi = {
        Http: {
            get: function(url, param) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                        return [2, HttpRequest.Get(url, param)];
                    });
                });
            },
            postJson: function(url, data) {
                return __awaiter(this, void 0, void 0, function() {
                    var param, jsonStr;
                    return __generator(this, function(_a) {
                        param = {};
                        if (MiniGameUtils.isNotUndefinedOrNull(data)) {
                            jsonStr = JSON.stringify(data);
                            param.data = jsonStr;
                        }
                        return [2, HttpRequest.Post(url, param)];
                    });
                });
            }
        }
    };
    var events = {
        ENTRY_FROM_APP: function(appId, placementId) {
            return {
                all: "MG_ALL_FRM",
                overall: "MG_ALL_FRM_" + appId,
                detail: "MG_DTL_FRM_" + appId + "_" + placementId
            };
        },
        ENTRY_TO_APP: function(appId, placementId) {
            return {
                all: "MG_ALL_TO",
                overall: "MG_ALL_TO_" + appId,
                detail: "MG_DTL_TO_" + appId + "_" + placementId
            };
        },
        ENTRY_TO_APP_CANCEL: function(appId, placementId) {
            return {
                all: "MG_ALL_TO_CEL",
                overall: "MG_ALL_TO_CEL_" + appId,
                detail: "MG_DTL_TO_CEL_" + appId + "_" + placementId
            };
        },
        USER_ACTION_CLICK: function(action_tag) {
            return "MG_ACT_" + action_tag;
        },
        USER_ACTION_CLICK_MINIGAME_CENTER: function() {
            return this.USER_ACTION_CLICK("GAMECENTER");
        },
        PLACEMENT_SHOW: function(placementId) {
            return "MG_PLT_SHOW_" + placementId;
        },
        GAMECENTER_BUTTON_SHOW: function() {
            return "MG_ACT_SHOW_GAMECENTER_BUTTON";
        }
    };
    var FBSwitchAction;
    (function(FBSwitchAction) {
        FBSwitchAction[FBSwitchAction["ATTEMPT"] = 0] = "ATTEMPT";
        FBSwitchAction[FBSwitchAction["CANCEL"] = 1] = "CANCEL";
        FBSwitchAction[FBSwitchAction["SUCCESS"] = 2] = "SUCCESS";
        FBSwitchAction[FBSwitchAction["GAMECENTER_OPEN"] = 3] = "GAMECENTER_OPEN";
        FBSwitchAction[FBSwitchAction["CANDIDATE_SHOW"] = 4] = "CANDIDATE_SHOW";
        FBSwitchAction[FBSwitchAction["PLACEMENT_SHOW"] = 5] = "PLACEMENT_SHOW";
    })(FBSwitchAction || (FBSwitchAction = {}));
    var MiniGameEvents = {
        logSwitchEvent: function(evt) {
            return __awaiter(this, void 0, void 0, function() {
                var resp, e_1;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, MiniGameApi.Http.postJson(MiniGameConfig.EVENT_API_URL + "/switch", evt)];
                        case 1:
                            resp = _a.sent();
                            MiniGameLogs.debug("", "Log Switch Event: ", resp);
                            return [3, 3];
                        case 2:
                            e_1 = _a.sent();
                            MiniGameLogs.warn("", "Log Switch Event Failed: ", e_1);
                            return [3, 3];
                        case 3:
                            return [2];
                    }
                });
            });
        },
        logBatchEvents: function(evts) {
            return __awaiter(this, void 0, void 0, function() {
                var resp, e_2;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, MiniGameApi.Http.postJson(MiniGameConfig.EVENT_API_URL + "/batch", {
                                events: evts
                            })];
                        case 1:
                            resp = _a.sent();
                            MiniGameLogs.debug("", "Log Batch Event: ", resp);
                            return [3, 3];
                        case 2:
                            e_2 = _a.sent();
                            MiniGameLogs.warn("", "Log Batch Event Failed: ", e_2);
                            return [3, 3];
                        case 3:
                            return [2];
                    }
                });
            });
        },
        logGameCenterButtonShowEvent: function() {
            var evt = events.GAMECENTER_BUTTON_SHOW();
            FBApi.logEvent(evt);
        },
        logClickGameCenter: function(placements) {
            try {
                var evt = events.USER_ACTION_CLICK_MINIGAME_CENTER();
                FBApi.logEvent(evt);
                var evts_1 = [];
                placements.forEach(function(placement) {
                    var switchEvent = {
                        app_id: MiniGameConfig.getAppId(),
                        from_app: MiniGameConfig.getAppId(),
                        to_app: "0",
                        placement_id: placement,
                        action: FBSwitchAction.GAMECENTER_OPEN,
                        is_new: MiniGameSdk.isNewPlayer()
                    };
                    evts_1.push(switchEvent);
                });
                this.logBatchEvents(evts_1);
            } catch (e) {}
        },
        logPlacementShow: function(placement, apps, dontLogOpenEvent) {
            try {
                var evt = events.PLACEMENT_SHOW(placement);
                FBApi.logEvent(evt);
                var evts_2 = [];
                if (!dontLogOpenEvent) {
                    var openEvent = {
                        app_id: MiniGameConfig.getAppId(),
                        from_app: MiniGameConfig.getAppId(),
                        to_app: "0",
                        placement_id: placement,
                        action: FBSwitchAction.PLACEMENT_SHOW,
                        is_new: MiniGameSdk.isNewPlayer()
                    };
                    evts_2.push(openEvent);
                }
                apps.forEach(function(appId) {
                    var candidateShowEvent = {
                        app_id: MiniGameConfig.getAppId(),
                        from_app: MiniGameConfig.getAppId(),
                        to_app: appId,
                        placement_id: placement,
                        action: FBSwitchAction.CANDIDATE_SHOW,
                        is_new: MiniGameSdk.isNewPlayer()
                    };
                    evts_2.push(candidateShowEvent);
                });
                this.logBatchEvents(evts_2);
            } catch (e) {}
        },
        logSwitchShow: function(placementId) {
            try {
                var switchEvent = {
                    app_id: MiniGameConfig.getAppId(),
                    from_app: MiniGameConfig.getAppId(),
                    to_app: "0",
                    placement_id: placementId,
                    action: FBSwitchAction.GAMECENTER_OPEN,
                    is_new: MiniGameSdk.isNewPlayer()
                };
                this.logSwitchEvent(switchEvent);
            } catch (e) {}
        },
        logSwitchFromApp: function(appid, placementId) {
            try {
                var evt = events.ENTRY_FROM_APP(appid, placementId);
                FBApi.logEvents(evt);
                var switchEvent = {
                    app_id: MiniGameConfig.getAppId(),
                    from_app: appid,
                    to_app: MiniGameConfig.getAppId(),
                    placement_id: placementId,
                    action: FBSwitchAction.SUCCESS,
                    is_new: MiniGameSdk.isNewPlayer()
                };
                this.logSwitchEvent(switchEvent);
            } catch (e) {}
        },
        logSwitchToAppPopup: function(appid, placementId) {
            try {
                var evt = events.ENTRY_TO_APP(appid, placementId);
                FBApi.logEvents(evt);
                var switchEvent = {
                    app_id: MiniGameConfig.getAppId(),
                    from_app: MiniGameConfig.getAppId(),
                    to_app: appid,
                    placement_id: placementId,
                    action: FBSwitchAction.ATTEMPT,
                    is_new: MiniGameSdk.isNewPlayer()
                };
                this.logSwitchEvent(switchEvent);
            } catch (e) {}
        },
        logSwitchToAppCancel: function(appid, placementId) {
            try {
                var evt = events.ENTRY_TO_APP_CANCEL(appid, placementId);
                FBApi.logEvents(evt);
                var switchEvent = {
                    app_id: MiniGameConfig.getAppId(),
                    from_app: MiniGameConfig.getAppId(),
                    to_app: appid,
                    placement_id: placementId,
                    action: FBSwitchAction.CANCEL,
                    is_new: false
                };
                this.logSwitchEvent(switchEvent);
            } catch (e) {}
        }
    };
    var cache = [];

    function put(key, value) {
        var exist = false;
        for (var i = 0; i < cache.length; i++) {
            if (cache[i].key === key) {
                cache[i].value = value;
                exist = true;
                break;
            }
        }
        if (!exist) {
            MiniGameLogs.debug("[Cache]", "Put Item: " + key, value);
            cache.push({
                key: key,
                value: value
            });
        }
    }

    function has(key) {
        var exist = false;
        for (var i = 0; i < cache.length; i++) {
            if (cache[i].key === key) {
                exist = true;
                break;
            }
        }
        return exist;
    }

    function get(key) {
        var item = undefined;
        for (var i = 0; i < cache.length; i++) {
            if (cache[i].key === key) {
                item = cache[i];
                break;
            }
        }
        if (!item) {
            return;
        }
        MiniGameLogs.debug("[Cache]", "Get Item: ", key);
        return item.value;
    }

    function remove(key) {
        var idx = -1;
        idx = cache.findIndex(function(value, index) {
            return value.key === key;
        });
        if (idx >= 0) {
            cache.splice(idx);
        }
    }

    function removeAll() {
        cache = [];
    }
    var MiniGameCache = {
        has: has,
        get: get,
        put: put,
        remove: remove,
        removeAll: removeAll
    };
    var _jobs = [];
    var _isDownloading = false;
    var Job = (function() {
        function Job() {}
        Job.create = function(config, resultHandler) {
            var job = new Job();
            job.url = config.url;
            job.type = config.type;
            job.onFinished = resultHandler;
            return job;
        };
        Job.prototype.download = function() {
            return __awaiter(this, void 0, void 0, function() {
                var result;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!MiniGameCache.has(this.url)) return [3, 2];
                            return [4, getRemoteFile(this.url, this.type)];
                        case 1:
                            result = _a.sent();
                            return [3, 3];
                        case 2:
                            result = MiniGameCache.get(this.url);
                            MiniGameLogs.debug("[Cache]", "===> exist in cache, ignore download");
                            _a.label = 3;
                        case 3:
                            if (MiniGameUtils.isNotUndefinedOrNull(this.onFinished)) {
                                this.onFinished(result);
                            }
                            return [2, result];
                    }
                });
            });
        };
        return Job;
    }());
    var FILE_TYPE_JSON = "json";
    var FILE_TYPE_IMAGE = "image";
    var FILE_TYPE_TEXT = "text";

    function addDownloadJob(config, resultHandler) {
        _jobs.push(Job.create(config, resultHandler));
    }

    function getRemoteFile(url, type) {
        return __awaiter(this, void 0, void 0, function() {
            var result, response, e_1;
            return __generator(this, function(_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        return [4, fetch(url, {
                            method: 'GET',
                            mode: 'cors',
                        })];
                    case 1:
                        response = _a.sent();
                        if (!(response && response.ok)) return [3, 8];
                        if (!(type === FILE_TYPE_JSON)) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        result = _a.sent();
                        return [3, 7];
                    case 3:
                        if (!(type === FILE_TYPE_IMAGE)) return [3, 5];
                        return [4, response.blob()];
                    case 4:
                        result = _a.sent();
                        return [3, 7];
                    case 5:
                        if (!(type === FILE_TYPE_TEXT)) return [3, 7];
                        return [4, response.text()];
                    case 6:
                        result = _a.sent();
                        _a.label = 7;
                    case 7:
                        if (MiniGameUtils.isUndefinedOrNull(result)) {
                            MiniGameLogs.warn("", "fail to get result with url: ", url, ", type=", type);
                        }
                        return [3, 9];
                    case 8:
                        MiniGameLogs.warn("", "fail to get url: ", url);
                        _a.label = 9;
                    case 9:
                        return [3, 11];
                    case 10:
                        e_1 = _a.sent();
                        MiniGameLogs.error("", "fail to get url: ", url, "\nerror: ", e_1);
                        return [3, 11];
                    case 11:
                        return [2, result];
                }
            });
        });
    }

    function download(url, type) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                if (MiniGameCache.has(url)) {
                    return [2, MiniGameCache.get(url)];
                }
                return [2, new Promise(function(r) {
                    addDownloadJob({
                        url: url,
                        type: type
                    }, function(result) {
                        r(result);
                    });
                    startDownload();
                })];
            });
        });
    }

    function startDownload() {
        return __awaiter(this, void 0, void 0, function() {
            var job;
            return __generator(this, function(_a) {
                switch (_a.label) {
                    case 0:
                        if (_isDownloading) {
                            return [2];
                        }
                        _isDownloading = true;
                        _a.label = 1;
                    case 1:
                        if (!(_jobs.length > 0)) return [3, 3];
                        job = _jobs.shift();
                        return [4, job.download()];
                    case 2:
                        _a.sent();
                        return [3, 1];
                    case 3:
                        _isDownloading = false;
                        return [2];
                }
            });
        });
    }
    var Downloader = {
        download: download,
        FILE_TYPE: {
            JSON: FILE_TYPE_JSON,
            IMAGE: FILE_TYPE_IMAGE,
            TEXT: FILE_TYPE_TEXT
        },
        getRemoteJson: function(url) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    return [2, Downloader.download(url, Downloader.FILE_TYPE.JSON)];
                });
            });
        },
        getRemoteImage: function(url) {
            return __awaiter(this, void 0, void 0, function() {
                var blob, image, spriteFrame, e_2;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            return [4, Downloader.download(url, Downloader.FILE_TYPE.IMAGE)];
                        case 1:
                            blob = _a.sent();
                            if (!!MiniGameCache.has(url)) return [3, 7];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 6]);
                            if (MiniGameUtils.isUndefinedOrNull(blob)) {
                                return [2];
                            }
                            return [4, MiniGameUtils.convertBlobToImage(blob)];
                        case 3:
                            image = _a.sent();
                            if (MiniGameUtils.isUndefinedOrNull(image)) {
                                MiniGameLogs.warn("", "Convert to Image fail: ", url);
                                return [2];
                            }
                            return [4, MiniGameUtils.convertImageToSpriteFrame(image)];
                        case 4:
                            spriteFrame = _a.sent();
                            if (MiniGameUtils.isUndefinedOrNull(spriteFrame)) {
                                MiniGameLogs.warn("", "Convert Image to SpriteFrame fail: ", url);
                                return [2];
                            }
                            MiniGameCache.put(url, spriteFrame);
                            return [2, spriteFrame];
                        case 5:
                            e_2 = _a.sent();
                            MiniGameLogs.error("", "Error Downloading Image: " + url, e_2);
                            return [2];
                        case 6:
                            return [3, 8];
                        case 7:
                            MiniGameLogs.debug("", "===> read from cache: ", url);
                            _a.label = 8;
                        case 8:
                            return [2, MiniGameCache.get(url)];
                    }
                });
            });
        },
        getRemoteText: function(url) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    return [2, Downloader.download(url, Downloader.FILE_TYPE.TEXT)];
                });
            });
        }
    };
    var MiniGameRefStrategy;
    (function(MiniGameRefStrategy) {
        MiniGameRefStrategy[MiniGameRefStrategy["RANDOM"] = 0] = "RANDOM";
        MiniGameRefStrategy[MiniGameRefStrategy["FIXED"] = 1] = "FIXED";
    })(MiniGameRefStrategy || (MiniGameRefStrategy = {}));
    var LocalDownloader = {
        downloadImage: function(url) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    return [2, EngineTool.LocalDownloader.downloadImage(url)];
                });
            });
        },
        downloadJson: function(url) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    return [2, EngineTool.LocalDownloader.downloadJson(url)];
                });
            });
        }
    };
    var _serverUrl = "";
    var MiniGamePlacementTools = {
        setServerUrl: function(url) {
            _serverUrl = url;
        },
        getAppFolder: function(appId) {
            return "APP_" + appId;
        },
        getConfigFile: function(appId) {
            return "APP_" + appId + "_config_v2.json";
        },
        getConfigUrl: function(appId) {
            return _serverUrl + "/" + MiniGamePlacementTools.getAppFolder(appId) + "/" + MiniGamePlacementTools.getConfigFile(appId) + "?" + Date.now();
        },
        getAssetsUrl: function(appId, assetUrl) {
            return _serverUrl + assetUrl;
        },
        getAssetByRule: function(rule, app_id, placement_id) {
            var assetPath = MiniGameUtils.string.replaceAll(rule, "{app_id}", app_id);
            assetPath = MiniGameUtils.string.replaceAll(assetPath, "{placement_id}", placement_id);
            return assetPath;
        },
        isPriorityPlacementDisplay: function(displayId) {
            return displayId[0] === "$";
        },
        convertToNormalPlacementId: function(displayId) {
            if (!this.isPriorityPlacementDisplay(displayId)) {
                return displayId;
            }
            return displayId.substring(1);
        },
    };
    var MiniGamePlacementCandidate = (function() {
        function MiniGamePlacementCandidate() {
            this.Weight = 0;
            this._lazyload = false;
            this._loadFromLocal = false;
            this._loaded = false;
        }
        MiniGamePlacementCandidate.prototype.getAsset = function() {
            if (!this._asset && !this._loaded) {
                this._load();
            }
            return this._asset;
        };
        MiniGamePlacementCandidate.create = function(displayId, srcPlacementId, item, lazyload) {
            var candidate = new MiniGamePlacementCandidate();
            candidate.AppId = item.app_id;
            candidate.PlacementId = displayId;
            candidate.Weight = item.weight;
            candidate._asset = undefined;
            var localAsset = MiniGameSdk.getAppLocalAsset(item.app_id, srcPlacementId);
            if (!item.load_from_remote && MiniGameUtils.isNotUndefinedOrNull(localAsset) && localAsset.length > 0) {
                candidate._loadFromLocal = true;
                candidate._lazyload = false;
                candidate.AssetUrl = MiniGameConfig.LOCAL_ASSET_PATH.replace("{asset}", localAsset);
            } else {
                candidate._loadFromLocal = false;
                candidate._lazyload = lazyload;
                if (MiniGameUtils.isNotUndefinedOrNull(item.asset) && item.asset.length > 0) {
                    candidate.AssetUrl = MiniGamePlacementTools.getAssetsUrl(item.app_id, item.asset);
                } else {
                    candidate.AssetUrl = "";
                }
            }
            return candidate;
        };
        MiniGamePlacementCandidate.prototype.onReady = function(handler, thisObj) {
            MiniGameSdk.addSdkEventListener(MiniGameSdk.Events.Ref_Candidate_Ready, handler, thisObj);
        };
        MiniGamePlacementCandidate.prototype.removeReadyHandler = function(handler, thisObj) {
            MiniGameSdk.removeSdkEventListener(MiniGameSdk.Events.Ref_Candidate_Ready, handler, thisObj);
        };
        MiniGamePlacementCandidate.prototype.load = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            if (this._lazyload) {
                                MiniGameLogs.debug("", "LazyLoading Placement: " + this.PlacementId + ", Candidate Loading, App: " + this.AppId + ", Url: " + this.AssetUrl);
                                return [2];
                            }
                            return [4, this._load()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        MiniGamePlacementCandidate.prototype._load = function() {
            return __awaiter(this, void 0, void 0, function() {
                var result, e_1;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            this._loaded = true;
                            if (!MiniGameUtils.isUndefinedOrNull(this._asset)) return [3, 7];
                            MiniGameLogs.debug("", "Placement: " + this.PlacementId + ", Candidate Loading, App: " + this.AppId + ", Url: " + this.AssetUrl);
                            result = void 0;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            if (!this._loadFromLocal) return [3, 3];
                            return [4, LocalDownloader.downloadImage(this.AssetUrl)];
                        case 2:
                            result = _a.sent();
                            return [3, 5];
                        case 3:
                            if (!(this.AssetUrl.length > 0)) return [3, 5];
                            return [4, Downloader.getRemoteImage(this.AssetUrl)];
                        case 4:
                            result = _a.sent();
                            _a.label = 5;
                        case 5:
                            if (MiniGameUtils.isNotUndefinedOrNull(result)) {
                                this._asset = result;
                            }
                            return [3, 7];
                        case 6:
                            e_1 = _a.sent();
                            MiniGameLogs.warn("load asset failed:", e_1);
                            return [3, 7];
                        case 7:
                            MiniGameSdk._dispatchEvent(MiniGameSdk.Events.Ref_Candidate_Ready, this);
                            return [2];
                    }
                });
            });
        };
        MiniGamePlacementCandidate.prototype.onClick = function(eventTag, index) {
            return __awaiter(this, void 0, void 0, function() {
                var pid, data, ret, e_2;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            if (!FBApi.isFacebook()) {
                                return [2];
                            }
                            pid = this.PlacementId;
                            pid = MiniGamePlacementTools.convertToNormalPlacementId(pid);
                            data = {
                                mgRefApp: MiniGameConfig.getAppId(),
                                mgRefAd: pid
                            };
                            MiniGameEvents.logSwitchToAppPopup(this.AppId, pid);
                            ret = false;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            MiniGameLogs.debug("", "Switch to app: " + this.AppId + ", data:", data);
                            MiniGameLogs.debug("", "SWITCH_WITHOUT_DATA: " + MiniGameConfig.SWITCH_WITHOUT_DATA);
                            MiniGameSdk._dispatchEvent(MiniGameSdk.Events.FB_Before_GameSwitch, this, {
                                placementId: this.PlacementId,
                                appId: this.AppId,
                                tag: eventTag,
                                index: index
                            });
                            if (!MiniGameConfig.SWITCH_WITHOUT_DATA) return [3, 3];
                            return [4, FBApi.switchGameAsync(this.AppId)];
                        case 2:
                            ret = _a.sent();
                            return [3, 5];
                        case 3:
                            return [4, FBApi.switchGameAsync(this.AppId, data)];
                        case 4:
                            ret = _a.sent();
                            _a.label = 5;
                        case 5:
                            return [3, 7];
                        case 6:
                            e_2 = _a.sent();
                            ret = false;
                            return [3, 7];
                        case 7:
                            if (!ret) {
                                MiniGameEvents.logSwitchToAppCancel(this.AppId, pid);
                                MiniGameSdk._dispatchEvent(MiniGameSdk.Events.FB_Cancel_GameSwitch, this, {
                                    placementId: this.PlacementId,
                                    appId: this.AppId,
                                    tag: eventTag,
                                    index: index
                                });
                            }
                            return [2, ret];
                    }
                });
            });
        };
        return MiniGamePlacementCandidate;
    }());
    var random = MiniGameUtils.random;
    var MiniGamePlacementDisplay = (function() {
        function MiniGamePlacementDisplay() {
            this._handlers = [];
        }
        Object.defineProperty(MiniGamePlacementDisplay.prototype, "PlacementId", {
            get: function() {
                return this.DisplayId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MiniGamePlacementDisplay.prototype, "PlacementSourceId", {
            get: function() {
                return this._srcPlacementId;
            },
            enumerable: false,
            configurable: true
        });
        MiniGamePlacementDisplay.create = function(placementData, rule) {
            var plt = new MiniGamePlacementDisplay;
            plt.DisplayId = rule.display_id;
            plt._srcPlacementId = placementData.placement_id;
            plt.Candidates = [];
            plt.Rule = rule;
            for (var _i = 0, _a = placementData.items; _i < _a.length; _i++) {
                var itemConfig = _a[_i];
                if (itemConfig.weight > 0 && itemConfig.app_id !== MiniGameConfig.getAppId()) {
                    plt.addCandidate(itemConfig);
                }
            }
            MiniGameLogs.debug("", "[" + plt.DisplayId + "}] Candidate Count: " + plt.Candidates.length);
            return plt;
        };
        MiniGamePlacementDisplay.prototype.hasCandidates = function() {
            return this.Candidates.length > 0;
        };
        MiniGamePlacementDisplay.prototype.addCandidate = function(itemConfig) {
            var candidate = MiniGamePlacementCandidate.create(this.PlacementId, this.PlacementSourceId, itemConfig, this.Rule.lazyload);
            if (!MiniGameUtils.isUndefinedOrNullOrEmpty(candidate.AssetUrl)) {
                this.Candidates.push(candidate);
                MiniGameLogs.debug("", "[" + this.PlacementId + "] Add Candidate: " + candidate.AppId + "|" + candidate.AssetUrl);
            } else {
                MiniGameLogs.debug("", "[" + this.PlacementId + "] Ignore Candidate: " + candidate.AppId + ", Missing AssetUrl");
            }
        };
        MiniGamePlacementDisplay.prototype.init = function() {
            MiniGameLogs.debug("", "Placement init, id: " + this.PlacementId);
            if (this.Rule.pickcount <= 0) {
                this.Rule.pickcount = this.Candidates.length;
            }
            this.Picked = this.randomCandidates(this.Rule.pickcount);
            this.Next = [];
            this.loadCandidates(this.Picked);
            this.prepareNext();
        };
        MiniGamePlacementDisplay.prototype.findCandidateIndex = function(appId) {
            var index = -1;
            for (var i = 0; i < this.Candidates.length; i++) {
                if (this.Candidates[i].AppId === appId) {
                    index = i;
                    break;
                }
            }
            return index;
        };
        MiniGamePlacementDisplay.getPriorityPlacementDisplay = function(displayId) {
            var pid = "$" + displayId;
            return MiniGameRefService.getPlacement(pid);
        };
        MiniGamePlacementDisplay.prototype.getPickedPriorityCandidates = function() {
            var excluded = [];
            if (!MiniGamePlacementTools.isPriorityPlacementDisplay(this.DisplayId)) {
                var placement = MiniGamePlacementDisplay.getPriorityPlacementDisplay(this.DisplayId);
                if (MiniGameUtils.isNotUndefinedOrNull(placement)) {
                    var candidates = placement.getCandidates();
                    for (var i = 0; i < candidates.length; i++) {
                        var idx = this.findCandidateIndex(candidates[i].AppId);
                        if (idx >= 0) {
                            excluded.push(idx);
                        }
                    }
                }
            }
            return excluded;
        };
        MiniGamePlacementDisplay.prototype.getLowPriorityConflictList = function() {
            if (!MiniGamePlacementTools.isPriorityPlacementDisplay(this.PlacementId)) {
                return [];
            }
            var pltId = MiniGamePlacementTools.convertToNormalPlacementId(this.PlacementId);
            var placement = MiniGameRefService.getPlacement(pltId);
            if (MiniGameUtils.isUndefinedOrNull(placement)) {
                return [];
            }
            if (placement.Candidates.length > placement.Rule.pickcount) {
                return [];
            }
            var list = [];
            for (var i = 0; i < placement.Candidates.length; i++) {
                var idx = this.findCandidateIndex(placement.Candidates[i].AppId);
                if (idx >= 0) {
                    list.push(idx);
                }
            }
            return list;
        };
        MiniGamePlacementDisplay.prototype.getConflictList = function() {
            var conflictList = this.getLowPriorityConflictList();
            var priorityList = this.getPickedPriorityCandidates();
            if (this.Candidates.length - priorityList.length <= 0) {
                priorityList = [];
            }
            conflictList.push.apply(conflictList, priorityList);
            MiniGameLogs.debug("", "[" + this.PlacementId + "] Conflict List: ", conflictList);
            return conflictList;
        };
        MiniGamePlacementDisplay.prototype.randomCandidates = function(count) {
            var picked = [];
            var conflictList = this.getConflictList();
            picked = random.randomListByWeight(this.Candidates, count, true, conflictList);
            return picked;
        };
        MiniGamePlacementDisplay.prototype.prepareNext = function() {
            if (this.Rule.strategy !== MiniGameRefStrategy.FIXED) {
                if (this.Rule.pickcount <= this.Candidates.length) {
                    if (this.Rule.pickcount <= 1) {
                        this.Next = [random.randomByRate(this.Candidates, this.Picked)];
                    } else {
                        var conflictList = this.getConflictList();
                        this.Next = random.randomListByWeight(this.Candidates, this.Rule.pickcount, true, conflictList);
                    }
                    if (this.Next.length > 0) {
                        MiniGameLogs.debug("", "Placement prepareNext group, id: " + this.PlacementId);
                        this.loadCandidates(this.Next);
                    }
                }
            }
        };
        MiniGamePlacementDisplay.prototype.refresh = function() {
            if (this.Rule.strategy !== MiniGameRefStrategy.FIXED) {
                if (this.Next.length > 0) {
                    for (var _i = 0, _a = this.Picked; _i < _a.length; _i++) {
                        var id = _a[_i];
                    }
                    this.Picked = this.Next;
                    this.Next = [];
                    this.prepareNext();
                }
            }
        };
        MiniGamePlacementDisplay.prototype.loadCandidates = function(indexes) {
            return __awaiter(this, void 0, void 0, function() {
                var _i, indexes_1, idx, candidate;
                return __generator(this, function(_a) {
                    for (_i = 0, indexes_1 = indexes; _i < indexes_1.length; _i++) {
                        idx = indexes_1[_i];
                        candidate = this.Candidates[idx];
                        candidate.load();
                    }
                    return [2];
                });
            });
        };
        MiniGamePlacementDisplay.prototype.getCandidates = function() {
            var candidates = [];
            for (var _i = 0, _a = this.Picked; _i < _a.length; _i++) {
                var idx = _a[_i];
                var candidate = this.Candidates[idx];
                candidates.push(candidate);
            }
            return candidates;
        };
        MiniGamePlacementDisplay.prototype.getFirstCandidate = function() {
            var candidates = this.getCandidates();
            if (candidates && candidates.length > 0) {
                return candidates[0];
            }
            return;
        };
        MiniGamePlacementDisplay.prototype.hasTitle = function() {
            if (this.Rule.titles.length >= 0 && this.Rule.title_index != 0) {
                return true;
            }
            return false;
        };
        MiniGamePlacementDisplay.prototype.getTitle = function() {
            var idx = this.Rule.title_index;
            if (idx === 0) {
                return "";
            }
            var title = "";
            if (idx > 0) {
                idx = idx - 1;
            }
            if (idx < 0 || idx >= this.Rule.titles.length) {
                title = random.randomItemInArray(this.Rule.titles).value;
            } else {
                title = this.Rule.titles[idx];
            }
            return title;
        };
        MiniGamePlacementDisplay.prototype.onShow = function() {
            var pid = this.PlacementId;
            pid = MiniGamePlacementTools.convertToNormalPlacementId(pid);
            var candidates = this.getCandidates();
            var apps = [];
            candidates.forEach(function(candidate) {
                apps.push(candidate.AppId);
            });
            if (apps.length > 0) {
                MiniGameEvents.logPlacementShow(pid, apps, MiniGamePlacementTools.isPriorityPlacementDisplay(this.PlacementId));
            }
        };
        return MiniGamePlacementDisplay;
    }());

    function _addPlacementDisplay(displayRule, placementConfig) {
        if (MiniGameUtils.isNotUndefinedOrNull(placementConfig) && MiniGameUtils.isNotUndefinedOrNull(placementConfig.items)) {
            var displayId = displayRule.display_id;
            var placement = getPlacementDisplayById(displayId);
            if (MiniGameUtils.isUndefinedOrNull(placement)) {
                MiniGameLogs.debug("", "Add Placement Display: " + displayId);
                placement = MiniGamePlacementDisplay.create(placementConfig, displayRule);
                _placementDisplays.push(placement);
            } else {
                MiniGameLogs.warn("", "placement display: [" + displayId + "] already exist, ignore");
            }
        }
    }

    function mergeConfig(localConfig, remoteConfig) {
        if (MiniGameUtils.isUndefinedOrNull(remoteConfig)) {
            return localConfig;
        }
        return MiniGameUtils.mergeObjects(localConfig, remoteConfig, [{
            propName: "placements",
            idKey: "placement_id"
        }, {
            propName: "asset_rules",
            idKey: "placement_id"
        }, {
            propName: "display_rules",
            idKey: "display_id"
        }, {
            propName: "local_assets",
            idKey: "app_id"
        }]);
    }

    function findPlacementSourceById(placement_id) {
        var placementSource = _refConfig.placements;
        if (MiniGameUtils.isUndefinedOrNullOrEmpty(placementSource)) {
            return;
        }
        return placementSource.find(function(value, index) {
            return value.placement_id === placement_id;
        });
    }

    function findAssetRuleById(placement_id) {
        var assetRules = _refConfig.asset_rules;
        if (MiniGameUtils.isUndefinedOrNullOrEmpty(assetRules)) {
            return;
        }
        return assetRules.find(function(value, index) {
            return value.placement_id === placement_id;
        });
    }

    function initPlacements() {
        var placementSource = _refConfig.placements;
        if (MiniGameUtils.isUndefinedOrNullOrEmpty(placementSource)) {
            MiniGameLogs.error("", "Missing Placement Source!");
            return;
        }
        placementSource.forEach(function(placement) {
            if (placement && placement.data_source) {
                var src = findPlacementSourceById(placement.data_source);
                if (src) {
                    placement.items = src.items;
                    MiniGameLogs.warn("", "Placement [" + placement.placement_id + " -> Source Placement: [" + placement.data_source + "]");
                } else {
                    MiniGameLogs.warn("", "Placement [" + placement.placement_id + " -> Source Placement: [" + placement.data_source + "], Missing !!");
                }
            }
            if (MiniGameUtils.isNotUndefinedOrNull(placement.items)) {
                placement.items.forEach(function(item) {
                    if (MiniGameUtils.isUndefinedOrNullOrEmpty(item.asset)) {
                        var rule = findAssetRuleById(placement.placement_id);
                        if (MiniGameUtils.isUndefinedOrNullOrEmpty(rule)) {
                            MiniGameLogs.warn("", "Placement [" + placement.placement_id + "], item [" + item.app_id + "] has no asset or rule");
                        } else {
                            item.asset = MiniGamePlacementTools.getAssetByRule(rule.asset_rule, item.app_id, placement.placement_id);
                            MiniGameLogs.debug("", "Placement [" + placement.placement_id + "], item [" + item.app_id + "] asset with rule: [" + item.asset + "]");
                        }
                    }
                });
            } else {
                MiniGameLogs.warn("", "Placement [" + placement.placement_id + "], has no items!");
            }
        });
        _refConfig.display_rules = _refConfig.display_rules.sort(function(a, b) {
            if (MiniGamePlacementTools.isPriorityPlacementDisplay(a.display_id)) {
                return -1;
            }
            if (MiniGamePlacementTools.isPriorityPlacementDisplay(b.display_id)) {
                return 1;
            }
            return 0;
        });
        MiniGameLogs.debug("Displays: ", _refConfig.display_rules);
        var displayRules = _refConfig.display_rules;
        for (var i = 0; i < displayRules.length; i++) {
            var displayRule = displayRules[i];
            if (MiniGameUtils.isNotUndefinedOrNull(displayRule)) {
                var placementId = displayRule.placement_id;
                var placementData = findPlacementSourceById(placementId);
                if (MiniGameUtils.isUndefinedOrNull(placementData)) {
                    MiniGameLogs.warn("Can't find placement with id: ", placementId);
                } else {
                    _addPlacementDisplay(displayRule, placementData);
                }
            }
        }
        for (var i = 0; i < _placementDisplays.length; i++) {
            var placement = _placementDisplays[i];
            if (MiniGameUtils.isNotUndefinedOrNull(placement)) {
                placement.init();
            }
        }
    }

    function getPlacementDisplayById(pltId) {
        var placement;
        for (var i = 0; i < _placementDisplays.length; i++) {
            if (_placementDisplays[i].PlacementId === pltId) {
                placement = _placementDisplays[i];
                break;
            }
        }
        return placement;
    }
    var _refConfig;
    var _placementDisplays = [];
    var _configReady = false;
    var MiniGameRefService = {
        setServer: function(url) {
            MiniGamePlacementTools.setServerUrl(url);
        },
        addOnReadyHandler: function(handler) {
            MiniGameSdk.addSdkEventListener(MiniGameSdk.Events.Ref_Config_Ready, handler);
        },
        removeReadyHandler: function(handler) {
            MiniGameSdk.removeSdkEventListener(MiniGameSdk.Events.Ref_Config_Ready, handler);
        },
        _fireReadyEvent: function() {
            MiniGameSdk._dispatchEvent(MiniGameSdk.Events.Ref_Config_Ready, this);
        },
        loadConfig: function() {
            return __awaiter(this, void 0, void 0, function() {
                var loadFromRemote, configUrl, config, e_1;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.isEnabled()) {
                                MiniGameLogs.info("", "Reference service is disabled, platform: " + FBApi.getPlatform());
                                _configReady = false;
                                return [2];
                            }
                            _refConfig = MiniGameSdk.getSdkConfig();
                            loadFromRemote = true;
                            if (!loadFromRemote) return [3, 4];
                            configUrl = MiniGamePlacementTools.getConfigUrl(MiniGameConfig.getAppId());
                            MiniGameLogs.debug("", "Downloading config: ", configUrl);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, Downloader.getRemoteJson(configUrl)];
                        case 2:
                            config = _a.sent();
                            if (MiniGameUtils.isUndefinedOrNull(config)) {
                                MiniGameLogs.warn("", "Load Ref Config failed: ", configUrl);
                                MiniGameLogs.warn("", "Init Ref Placements with local configs");
                            } else {
                                MiniGameLogs.debug("", "Ref Config: ", config);
                                _refConfig = mergeConfig(_refConfig, config);
                                MiniGameLogs.debug("", "Merge Config: ", _refConfig);
                            }
                            return [3, 4];
                        case 3:
                            e_1 = _a.sent();
                            MiniGameLogs.warn("", "Something wrong loading remote ref config: ", e_1);
                            return [3, 4];
                        case 4:
                            initPlacements();
                            _configReady = true;
                            this._fireReadyEvent();
                            return [2];
                    }
                });
            });
        },
        isConfigReady: function() {
            if (!this.isEnabled()) {
                return false;
            }
            return _configReady;
        },
        isEnabled: function() {
            if (MiniGameConfig.DISABLE_IOS && FBApi.isIOSPlatform()) {
                return false;
            }
            return true;
        },
        getPlacement: function(placementId) {
            var placement = getPlacementDisplayById(placementId);
            if (MiniGameUtils.isUndefinedOrNull(placement)) {
                return undefined;
            }
            return placement;
        },
    };
    var _listeners = {};
    var EventBus = {
        addEventListener: function(type, callback, scope) {
            if (this.hasEventListener(type, callback, scope)) {
                return;
            }
            if (typeof _listeners[type] !== "undefined") {
                _listeners[type].push({
                    scope: scope,
                    callback: callback
                });
            } else {
                _listeners[type] = [{
                    scope: scope,
                    callback: callback
                }];
            }
            MiniGameLogs.debug("", "Add Listener on Event: [" + type + "], listener count: " + _listeners[type].length);
        },
        removeEventListener: function(type, callback, scope) {
            if (typeof _listeners[type] !== "undefined") {
                var numOfCallbacks = _listeners[type].length;
                var newArray = [];
                var removed = 0;
                for (var i = 0; i < numOfCallbacks; i++) {
                    var listener = _listeners[type][i];
                    if (((!scope && !listener.scope) || (listener.scope === scope)) && listener.callback === callback) {
                        removed++;
                    } else {
                        newArray.push(listener);
                    }
                }
                _listeners[type] = newArray;
                MiniGameLogs.debug("", "Remove Listener on Event: [" + type + "], listener count: " +
                    newArray.length + ", removed: " + removed);
            }
        },
        hasEventListener: function(type, callback, scope) {
            if (typeof _listeners[type] !== "undefined") {
                var numOfCallbacks = _listeners[type].length;
                if (!callback && !scope) {
                    return numOfCallbacks > 0;
                }
                for (var i = 0; i < numOfCallbacks; i++) {
                    var listener = _listeners[type][i];
                    if ((scope ? listener.scope === scope : true) && listener.callback === callback) {
                        return true;
                    }
                }
            }
            return false;
        },
        dispatch: function(type, target, arg) {
            var evt = {
                type: type,
                target: target,
                arg: arg
            };
            if (typeof _listeners[type] !== "undefined") {
                var listeners = _listeners[type].slice();
                var numOfCallbacks = listeners.length;
                MiniGameLogs.debug("", "Dispatch Event [" + type + "] to listeners: " + numOfCallbacks);
                for (var i = 0; i < numOfCallbacks; i++) {
                    var listener = listeners[i];
                    if (listener && listener.callback) {
                        listener.callback.apply(listener.scope, [evt]);
                    }
                }
            }
        },
    };
    var TAG$1 = "[MiniGameSdk]";

    function checkEntry() {
        return __awaiter(this, void 0, void 0, function() {
            var entry, entryObj, mgentry, e_1;
            return __generator(this, function(_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, FBApi.getEntryPointAsync()];
                    case 1:
                        entry = _a.sent();
                        entryObj = FBApi.getEntryPointData();
                        MiniGameLogs.info(TAG$1, "FB entry point: ", entry);
                        MiniGameLogs.debug(TAG$1, "FB entry data: ", entryObj);
                        mgentry = entryObj;
                        if (MiniGameUtils.isNotUndefinedOrNull(mgentry)) {
                            if (MiniGameUtils.isNotUndefinedOrNull(mgentry.mgRefApp)) {
                                MiniGameEvents.logSwitchFromApp(mgentry.mgRefApp, mgentry.mgRefAd);
                            }
                        }
                        return [3, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3, 3];
                    case 3:
                        return [2];
                }
            });
        });
    }
    var KEY = "minigamesdk";
    var _sdkdata = {
        lastLogin: 0,
        loginCounter: 0
    };
    var _sdkConfig;

    function checkAndUpdateSdkData() {
        return __awaiter(this, void 0, void 0, function() {
            var data, t, saved, e_2;
            return __generator(this, function(_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, FBApi.getPlayerDataAsync([KEY])];
                    case 1:
                        data = _a.sent();
                        MiniGameLogs.debug("", "Saved Data: ", data);
                        if (MiniGameUtils.isNotUndefinedOrNull(data) && MiniGameUtils.isNotUndefinedOrNull(data[KEY])) {
                            data = data[KEY];
                            if (MiniGameUtils.isNotUndefinedOrNull(data.lastLogin)) {
                                _sdkdata.lastLogin = data.lastLogin;
                            }
                            if (MiniGameUtils.isNotUndefinedOrNull(data.loginCounter)) {
                                _sdkdata.loginCounter = data.loginCounter;
                            }
                        }
                        if (_sdkdata.loginCounter <= 0) {
                            MiniGameLogs.info("", "New Player");
                        } else {
                            t = new Date(_sdkdata.lastLogin);
                            MiniGameLogs.info("", "Last Login Time: " + t);
                        }
                        _sdkdata.loginCounter++;
                        _sdkdata.lastLogin = Date.now();
                        MiniGameLogs.info("", "Login Count: " + _sdkdata.loginCounter);
                        saved = {};
                        saved[KEY] = _sdkdata;
                        return [4, FBApi.setPlayerDataAsync(saved)];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        e_2 = _a.sent();
                        MiniGameLogs.warn("", "Something wrong checking player data: ", e_2);
                        return [3, 4];
                    case 4:
                        return [2];
                }
            });
        });
    }
    var _inited = false;
    var MiniGameSdk = {
        logs: MiniGameLogs,
        utils: MiniGameUtils,
        engineTool: EngineTool,
        config: MiniGameConfig,
        refService: MiniGameRefService,
        onFacebookInited: function() {
            console.info("FB Inited");
            if (FBApi.isFacebook()) {
                console.info("FB version: ", FBApi.getSDKVersion());
                console.info("FB platform: ", FBApi.getPlatform());
                console.info("MG_FB_INITED");
                FBApi.logEvent("MG_FB_INITED");
            }
        },
        testLocalFBApi: function(useLocalApi) {
            FBApi.setLocalApi(useLocalApi);
        },
        init: function(fbAppId, logLevel) {
            if (logLevel === void 0) {
                logLevel = 1;
            }
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            if (_inited) {
                                return [2];
                            }
                            MiniGameLogs.setDefaultTag(TAG$1);
                            if (logLevel < 0) {
                                logLevel = MiniGameConfig.LOG_LEVEL;
                            }
                            MiniGameLogs.setLogLevel(logLevel);
                            MiniGameLogs.info(TAG$1, "MiniGame SDK Version: " + MiniGameConfig.getVersion());
                            MiniGameConfig.setAppId(fbAppId);
                            MiniGameRefService.setServer(MiniGameConfig.ASSETS_SERVER);
                            MiniGameLogs.info(TAG$1, "init start ... fbid: ", fbAppId);
                            FBApi.logEvent("MG_SDK_INITED");
                            if (!FBApi.isFacebook()) {
                                MiniGameLogs.info(TAG$1, "NOT in facebook environment");
                                return [2];
                            }
                            _inited = true;
                            return [4, checkAndUpdateSdkData()];
                        case 1:
                            _a.sent();
                            return [4, checkEntry()];
                        case 2:
                            _a.sent();
                            return [4, this._loadLocalConfig()];
                        case 3:
                            _a.sent();
                            MiniGameRefService.loadConfig();
                            return [2];
                    }
                });
            });
        },
        _loadLocalConfig: function() {
            return __awaiter(this, void 0, void 0, function() {
                var configUrl, e_3;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            configUrl = MiniGameConfig.LOCAL_CONFIG_PATH;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, LocalDownloader.downloadJson(configUrl)];
                        case 2:
                            _sdkConfig = _a.sent();
                            MiniGameLogs.debug("", "Local Config: ", _sdkConfig);
                            return [3, 4];
                        case 3:
                            e_3 = _a.sent();
                            MiniGameLogs.warn("", "Failed to download config: ", configUrl);
                            return [3, 4];
                        case 4:
                            return [2];
                    }
                });
            });
        },
        getSdkConfig: function() {
            return _sdkConfig;
        },
        getLocalPlacements: function() {
            if (MiniGameUtils.isNotUndefinedOrNull(_sdkConfig) && MiniGameUtils.isNotUndefinedOrNull(_sdkConfig.placements)) {
                return _sdkConfig.placements;
            }
            return [];
        },
        getAppLocalAsset: function(appId, placementId) {
            if (MiniGameUtils.isUndefinedOrNull(_sdkConfig) || MiniGameUtils.isUndefinedOrNull(_sdkConfig.local_assets)) {
                return undefined;
            }
            var asset = undefined;
            for (var i = 0; i < _sdkConfig.local_assets.length; i++) {
                var app = _sdkConfig.local_assets[i];
                if (app.app_id === appId) {
                    for (var j = 0; j < app.assets.length; j++) {
                        if (app.assets[j].placement_id === placementId) {
                            asset = app.assets[j].asset;
                            break;
                        }
                    }
                    if (MiniGameUtils.isNotUndefinedOrNull(asset)) {
                        break;
                    }
                }
            }
            return asset;
        },
        isNewPlayer: function() {
            return !(_sdkdata.loginCounter > 1);
        },
        _logClickGameCenter: function(placements) {
            MiniGameEvents.logClickGameCenter(placements);
        },
        _logGameCenterButtonShow: function() {
            MiniGameEvents.logGameCenterButtonShowEvent();
        },
        _dispatchEvent: function(eventName, target, eventData) {
            MiniGameLogs.debug("", "Dispatch Event: ", eventName, target, eventData);
            EventBus.dispatch(eventName, target, eventData);
        },
        addSdkEventListener: function(eventName, callback, thisObj) {
            MiniGameLogs.debug("", "[+] AddSdkEventListener, Event: ", eventName, thisObj);
            EventBus.addEventListener(eventName, callback, thisObj);
        },
        removeSdkEventListener: function(eventName, callback, thisObj) {
            MiniGameLogs.debug("", "[-] RemoveSdkEventListener, Event: ", eventName, thisObj);
            EventBus.removeEventListener(eventName, callback, thisObj);
        },
        Events: {
            Ref_Config_Ready: "RefConfigReady",
            Ref_Candidate_Ready: "RefCandidateReady",
            GameCenterShow: "GameCenterShow",
            Ref_Candidate_Clicked: "RefCandidateClicked",
            FB_Before_GameSwitch: "FBBeforeGameSwitch",
            FB_Cancel_GameSwitch: "FBCancelGameSwitch"
        }
    };
    exports.MiniGameSdk = MiniGameSdk;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
})));