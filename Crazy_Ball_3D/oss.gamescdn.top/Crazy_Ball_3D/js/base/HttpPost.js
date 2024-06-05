class HttpPost {
    static HttpPost_GetTerrace(fbuid, name, callback) {
        let sendData = {
            "uid": fbuid,
            "name": name,
            "terrace": "ios"
        };
        this.serversData(this.urlSevrves + this._GetTerrace, JSON.stringify(sendData), callback);
    }
    static serversData(url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                if (GameBaseData.isDebug) {
                    console.log(response);
                }
                response = JSON.parse(response);
                if (callback) {
                    callback(response);
                }
            }
        };
        xhr.onerror = function(error) {
            if (callback) {
                callback(error);
            }
        };
        xhr.ontimeout = function() {
            if (callback) {
                callback("Timeout");
            }
        };
        if (GameBaseData.isDebug) {
            console.log("httpPost=>" + url + "     data=>" + "config=" + data);
        }
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("config=" + data);
    }
}
HttpPost.urlSevrves = "https://facebook.miguapp.cc/Ball/";
HttpPost._GetTerrace = "getTerrace.do";