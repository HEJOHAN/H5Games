const INTERSTITIAL_PLACEMENT_ID = '1690135101125295_1690136317791840';
const REWARDED_PLACEMENT_ID = '1690135101125295_1690138811124924';
var preloadedRewardedVideo;
var preloadedInterstitial;

function LoadInter() {}

function ShowInter() {
    console.log('Interstitial ad finished successfully');
}

function LoadRewarded() {}

function ShowRewarded(success, failure) {
    console.log('Rewarded Video ad finished successfully');
    LoadRewarded();
    success();
}