(function() {
    'use strict';
    let e = [];
    const f = () => {
        const a = e;
        e = [];
        for (const b of a) try {
            b()
        } catch {}
    };

    function g(a = document) {
        return a.createElement("img")
    };

    function h(a = null) {
        return a && "26" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="26"]')
    };
    var k = document;
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var m = () => {
        var a = k.querySelectorAll("link[data-reload-stylesheet][as=style][rel=preload]");
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                d = "link",
                l = document;
            d = String(d);
            "application/xhtml+xml" === l.contentType && (d = d.toLowerCase());
            d = l.createElement(d);
            d.setAttribute("rel", "stylesheet");
            d.setAttribute("href", c.getAttribute("href"));
            k.head.appendChild(d)
        }
        if (0 < a.length && !(.01 < Math.random())) {
            a = (a = h(document.currentScript)) && "true" === a.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com";
            b = (b = h(document.currentScript)) && b.getAttribute("data-jc-version") || "unknown";
            a = `https://${a}/pagead/gen_204?id=jca&jc=${26}&version=${b}&sample=${.01}`;
            b = window;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : (b.google_image_requests || (b.google_image_requests = []), c = g(b.document), c.src = a, b.google_image_requests.push(c))
        }
    };
    const n = h(document.currentScript);
    if (null == n) throw Error("JSC not found 26");
    const p = n.attributes;
    for (let a = p.length - 1; 0 <= a; a--);
    var q = document;
    "complete" === q.readyState || "interactive" === q.readyState ? (e.push(m), 1 == e.length && (window.Promise ? Promise.resolve().then(f) : window.setImmediate ? setImmediate(f) : setTimeout(f, 0))) : q.addEventListener("DOMContentLoaded", m);
}).call(this);