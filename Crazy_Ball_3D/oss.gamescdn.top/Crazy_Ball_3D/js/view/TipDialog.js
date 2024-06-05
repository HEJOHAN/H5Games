var touch;
(function(touch) {
    class TipDialog extends ui.TipDialogUI {
        constructor(main) {
            super();
            this._main = null;
            this._tipType = 0;
            this.can_close = false;
            this._main = main;
        }
        destroy() {
            super.destroy();
        }
        onSetType(type) {
            this._tipType = type;
            this.close();
            this.onClickGet();
        }
        onTweenGetBtn0() {}
        onTweenGetBtn1() {}
        onClickGet() {
            if (!GameBaseData.isFBSDK) {
                this.can_close = true;
                return;
            }
            if (this._tipType < 3 || this._tipType == 4) {
                TipDialog.pushState = 1;
                this.can_close = true;
                let that = this;
                FBInstant.player.canSubscribeBotAsync().then(function(can_subscribe) {
                    if (can_subscribe) {
                        FBInstant.player.subscribeBotAsync().then(function() {
                            FBInstant.logEvent("subscribe_created");
                            that.close();
                        }).catch(function(e) {
                            FBInstant.logEvent("subscribe_createdNot");
                            that.close();
                        });
                    }
                });
            } else {
                TipDialog.homeScreenState = 1;
                this.can_close = true;
                let that = this;
                FBInstant.canCreateShortcutAsync().then(function(canCreateShortcut) {
                    if (canCreateShortcut) {
                        FBInstant.createShortcutAsync().then(function() {
                            FBInstant.logEvent("shortcut_created");
                            that.close();
                        }).catch(function(e) {
                            FBInstant.logEvent("shortcut_createdNot");
                            that.close();
                        });
                    }
                });
            }
        }
        onClickClose() {
            if (this.can_close) {
                this.can_close = false;
                this.close();
            }
        }
        doReward(unlockIndex) {}
        static init() {
            if (TipDialog.isInit)
                return;
            TipDialog.isInit = true;
            TipDialog.pushState = 0;
            TipDialog.homeScreenState = 0;
            if (GameBaseData.isFBSDK) {
                FBInstant.player.canSubscribeBotAsync().then(function(can_subscribe) {
                    if (GameBaseData.isDebug) {
                        console.log("can_subscribe==========" + can_subscribe);
                    }
                    TipDialog.can_subscribe = can_subscribe;
                    FBInstant.logEvent("subscribe_" + can_subscribe);
                });
                FBInstant.canCreateShortcutAsync().then(function(canCreateShortcut) {
                    if (GameBaseData.isDebug) {
                        console.log("canCreateShortcut===========" + canCreateShortcut);
                    }
                    TipDialog.canCreateShortcut = canCreateShortcut;
                    FBInstant.logEvent("shortcut_" + canCreateShortcut);
                    let platform = FBInstant.getPlatform();
                    if (TipDialog.canCreateShortcut && platform == "IOS") {
                        TipDialog.canCreateShortcut = false;
                        FBInstant.logEvent("ios_shortcut_Close");
                    }
                });
            }
        }
    }
    TipDialog.isInit = false;
    TipDialog.can_subscribe = false;
    TipDialog.pushState = 0;
    TipDialog.canCreateShortcut = false;
    TipDialog.homeScreenState = 0;
    TipDialog.pushFriendRank = 0;
    TipDialog.pushGetGift = 0;
    TipDialog.gameTimes = 0;
    TipDialog.gameTimesCancel = 0;
    touch.TipDialog = TipDialog;
})(touch || (touch = {}));