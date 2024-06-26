var entityMap = {
    lt: "<",
    gt: ">",
    amp: "&",
    quot: '"',
    apos: "'",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    times: "×",
    divide: "÷",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    euro: "€",
    trade: "™",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦"
}
  , nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
  , nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]")
  , tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$")
  , S_TAG = 0
  , S_ATTR = 1
  , S_ATTR_SPACE = 2
  , S_EQ = 3
  , S_ATTR_NOQUOT_VALUE = 4
  , S_ATTR_END = 5
  , S_TAG_SPACE = 6
  , S_TAG_CLOSE = 7;
function XMLReader() {}
function parse(e, t, n, r, i) {
    function entityReplacer(e) {
        var t = e.slice(1, -1);
        return t in n ? n[t] : "#" === t.charAt(0) ? function(e) {
            if (e > 65535) {
                var t = 55296 + ((e -= 65536) >> 10)
                  , n = 56320 + (1023 & e);
                return String.fromCharCode(t, n);
            }
            return String.fromCharCode(e);
        }(parseInt(t.substr(1).replace("x", "0x"))) : (i.error("entity not found:" + e),
        e);
    }
    function appendText(t) {
        if (t > d) {
            var n = e.substring(d, t).replace(/&#?\w+;/g, entityReplacer);
            c && position(d),
            r.characters(n, 0, t - d),
            d = t;
        }
    }
    function position(t, n) {
        for (; t >= a && (n = s.exec(e)); )
            o = n.index,
            a = o + n[0].length,
            c.lineNumber++;
        c.columnNumber = t - o + 1;
    }
    for (var o = 0, a = 0, s = /.*(?:\r\n?|\n)|.*$/g, c = r.locator, u = [{
        currentNSMap: t
    }], l = {}, d = 0; ; ) {
        try {
            var p = e.indexOf("<", d);
            if (p < 0) {
                if (!e.substr(d).match(/^\s*$/)) {
                    var m = r.doc
                      , N = m.createTextNode(e.substr(d));
                    m.appendChild(N),
                    r.currentElement = N;
                }
                return;
            }
            switch (p > d && appendText(p),
            e.charAt(p + 1)) {
            case "/":
                var E = e.indexOf(">", p + 3)
                  , h = e.substring(p + 2, E)
                  , f = u.pop();
                E < 0 ? (h = e.substring(p + 2).replace(/[\s<].*/, ""),
                i.error("end tag name: " + h + " is not complete:" + f.tagName),
                E = p + 1 + h.length) : h.match(/\s</) && (h = h.replace(/[\s<].*/, ""),
                i.error("end tag name: " + h + " maybe not complete"),
                E = p + 1 + h.length);
                var _ = f.localNSMap
                  , T = f.tagName == h;
                if (T || f.tagName && f.tagName.toLowerCase() == h.toLowerCase()) {
                    if (r.endElement(f.uri, f.localName, h),
                    _)
                        for (var g in _)
                            r.endPrefixMapping(g);
                    T || i.fatalError("end tag name: " + h + " is not match the current start tagName:" + f.tagName);
                } else
                    u.push(f);
                E++;
                break;
            case "?":
                c && position(p),
                E = parseInstruction(e, p, r);
                break;
            case "!":
                c && position(p),
                E = parseDCC(e, p, r, i);
                break;
            default:
                c && position(p);
                var D = new ElementAttributes()
                  , S = u[u.length - 1].currentNSMap
                  , A = (E = parseElementStartPart(e, p, D, S, entityReplacer, i),
                D.length);
                if (!D.closed && fixSelfClosed(e, E, D.tagName, l) && (D.closed = !0,
                n.nbsp || i.warning("unclosed xml attribute")),
                c && A) {
                    for (var v = copyLocator(c, {}), C = 0; C < A; C++) {
                        var O = D[C];
                        position(O.offset),
                        O.locator = copyLocator(c, {});
                    }
                    r.locator = v,
                    SaxO.appendElement(D, r, S) && u.push(D),
                    r.locator = c;
                } else
                    SaxO.appendElement(D, r, S) && u.push(D);
                "http://www.w3.org/1999/xhtml" !== D.uri || D.closed ? E++ : E = parseHtmlSpecialContent(e, E, D.tagName, entityReplacer, r);
            }
        } catch (e) {
            i.error("element parse error: " + e),
            E = -1;
        }
        E > d ? d = E : appendText(Math.max(p, d) + 1);
    }
}
function copyLocator(e, t) {
    return t.lineNumber = e.lineNumber,
    t.columnNumber = e.columnNumber,
    t;
}
function parseElementStartPart(e, t, n, r, i, o) {
    for (var a, s = ++t, c = S_TAG; ; ) {
        var u = e.charAt(s);
        switch (u) {
        case "=":
            if (c === S_ATTR)
                a = e.slice(t, s),
                c = S_EQ;
            else {
                if (c !== S_ATTR_SPACE)
                    throw new Error("attribute equal must after attrName");
                c = S_EQ;
            }
            break;
        case "'":
        case '"':
            if (c === S_EQ || c === S_ATTR) {
                if (c === S_ATTR && (o.warning('attribute value must after "="'),
                a = e.slice(t, s)),
                t = s + 1,
                !((s = e.indexOf(u, t)) > 0))
                    throw new Error("attribute value no end '" + u + "' match");
                l = e.slice(t, s).replace(/&#?\w+;/g, i),
                n.add(a, l, t - 1),
                c = S_ATTR_END;
            } else {
                if (c != S_ATTR_NOQUOT_VALUE)
                    throw new Error('attribute value must after "="');
                l = e.slice(t, s).replace(/&#?\w+;/g, i),
                n.add(a, l, t),
                o.warning('attribute "' + a + '" missed start quot(' + u + ")!!"),
                t = s + 1,
                c = S_ATTR_END;
            }
            break;
        case "/":
            switch (c) {
            case S_TAG:
                n.setTagName(e.slice(t, s));
            case S_ATTR_END:
            case S_TAG_SPACE:
            case S_TAG_CLOSE:
                c = S_TAG_CLOSE,
                n.closed = !0;
            case S_ATTR_NOQUOT_VALUE:
            case S_ATTR:
            case S_ATTR_SPACE:
                break;
            default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
        case "":
            return o.error("unexpected end of input"),
            c == S_TAG && n.setTagName(e.slice(t, s)),
            s;
        case ">":
            switch (c) {
            case S_TAG:
                n.setTagName(e.slice(t, s));
            case S_ATTR_END:
            case S_TAG_SPACE:
            case S_TAG_CLOSE:
                break;
            case S_ATTR_NOQUOT_VALUE:
            case S_ATTR:
                "/" === (l = e.slice(t, s)).slice(-1) && (n.closed = !0,
                l = l.slice(0, -1));
            case S_ATTR_SPACE:
                c === S_ATTR_SPACE && (l = a),
                c == S_ATTR_NOQUOT_VALUE ? (o.warning('attribute "' + l + '" missed quot(")!!'),
                n.add(a, l.replace(/&#?\w+;/g, i), t)) : ("http://www.w3.org/1999/xhtml" === r[""] && l.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'),
                n.add(l, l, t));
                break;
            case S_EQ:
                throw new Error("attribute value missed!!");
            }
            return s;
        case "":
            u = " ";
        default:
            if (u <= " ")
                switch (c) {
                case S_TAG:
                    n.setTagName(e.slice(t, s)),
                    c = S_TAG_SPACE;
                    break;
                case S_ATTR:
                    a = e.slice(t, s),
                    c = S_ATTR_SPACE;
                    break;
                case S_ATTR_NOQUOT_VALUE:
                    var l = e.slice(t, s).replace(/&#?\w+;/g, i);
                    o.warning('attribute "' + l + '" missed quot(")!!'),
                    n.add(a, l, t);
                case S_ATTR_END:
                    c = S_TAG_SPACE;
                }
            else
                switch (c) {
                case S_ATTR_SPACE:
                    n.tagName;
                    "http://www.w3.org/1999/xhtml" === r[""] && a.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'),
                    n.add(a, a, t),
                    t = s,
                    c = S_ATTR;
                    break;
                case S_ATTR_END:
                    o.warning('attribute space is required"' + a + '"!!');
                case S_TAG_SPACE:
                    c = S_ATTR,
                    t = s;
                    break;
                case S_EQ:
                    c = S_ATTR_NOQUOT_VALUE,
                    t = s;
                    break;
                case S_TAG_CLOSE:
                    throw new Error("elements closed character '/' and '>' must be connected to");
                }
        }
        s++;
    }
}
function parseHtmlSpecialContent(e, t, n, r, i) {
    if (/^(?:script|textarea)$/i.test(n)) {
        var o = e.indexOf("</" + n + ">", t)
          , a = e.substring(t + 1, o);
        if (/[&<]/.test(a))
            return /^script$/i.test(n) ? (i.characters(a, 0, a.length),
            o) : (a = a.replace(/&#?\w+;/g, r),
            i.characters(a, 0, a.length),
            o);
    }
    return t + 1;
}
function fixSelfClosed(e, t, n, r) {
    var i = r[n];
    return null == i && ((i = e.lastIndexOf("</" + n + ">")) < t && (i = e.lastIndexOf("</" + n)),
    r[n] = i),
    i < t;
}
function _copy(e, t) {
    for (var n in e)
        t[n] = e[n];
}
function parseDCC(e, t, n, r) {
    switch (e.charAt(t + 2)) {
    case "-":
        return "-" === e.charAt(t + 3) ? (i = e.indexOf("--\x3e", t + 4)) > t ? (n.comment(e, t + 4, i - t - 4),
        i + 3) : (r.error("Unclosed comment"),
        -1) : -1;
    default:
        if ("CDATA[" == e.substr(t + 3, 6)) {
            var i = e.indexOf("]]>", t + 9);
            return n.startCDATA(),
            n.characters(e, t + 9, i - t - 9),
            n.endCDATA(),
            i + 3;
        }
        var o = split(e, t)
          , a = o.length;
        if (a > 1 && /!doctype/i.test(o[0][0])) {
            var s = o[1][0]
              , c = a > 3 && /^public$/i.test(o[2][0]) && o[3][0]
              , u = a > 4 && o[4][0]
              , l = o[a - 1];
            return n.startDTD(s, c && c.replace(/^(['"])(.*?)\1$/, "$2"), u && u.replace(/^(['"])(.*?)\1$/, "$2")),
            n.endDTD(),
            l.index + l[0].length;
        }
    }
    return -1;
}
function parseInstruction(e, t, n) {
    var r = e.indexOf("?>", t);
    if (r) {
        var i = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (i) {
            i[0].length;
            return n.processingInstruction(i[1], i[2]),
            r + 2;
        }
        return -1;
    }
    return -1;
}
function ElementAttributes(e) {}
function split(e, t) {
    var n, r = [], i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (i.lastIndex = t,
    i.exec(e); n = i.exec(e); )
        if (r.push(n),
        n[1])
            return r;
}
function copy(e, t) {
    for (var n in e)
        t[n] = e[n];
}
function _extends(e, n) {
    var r = e.prototype;
    if (!(r instanceof n)) {
        function t() {}
        t.prototype = n.prototype,
        copy(r, t = new t()),
        e.prototype = r = t;
    }
    r.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e),
    r.constructor = e);
}
SaxO = {},
XMLReader.prototype = {
    parse: function(e, t, n) {
        var r = this.domBuilder;
        r.startDocument(),
        _copy(t, t = {}),
        parse(e, t, n, r, this.errorHandler),
        r.endDocument();
    }
},
SaxO.appendElement = function(e, t, n) {
    for (var r = e.tagName, i = null, o = e.length; o--; ) {
        var a = e[o]
          , s = a.qName
          , c = a.value;
        if ((p = s.indexOf(":")) > 0)
            var u = a.prefix = s.slice(0, p)
              , l = s.slice(p + 1)
              , d = "xmlns" === u && l;
        else
            l = s,
            u = null,
            d = "xmlns" === s && "";
        a.localName = l,
        !1 !== d && (null == i && (i = {},
        _copy(n, n = {})),
        n[d] = i[d] = c,
        a.uri = "http://www.w3.org/2000/xmlns/",
        t.startPrefixMapping(d, c));
    }
    for (o = e.length; o--; ) {
        (u = (a = e[o]).prefix) && ("xml" === u && (a.uri = "http://www.w3.org/XML/1998/namespace"),
        "xmlns" !== u && (a.uri = n[u || ""]));
    }
    var p;
    (p = r.indexOf(":")) > 0 ? (u = e.prefix = r.slice(0, p),
    l = e.localName = r.slice(p + 1)) : (u = null,
    l = e.localName = r);
    var m = e.uri = n[u || ""];
    if (t.startElement(m, l, r, e),
    !e.closed)
        return e.currentNSMap = n,
        e.localNSMap = i,
        !0;
    if (t.endElement(m, l, r),
    i)
        for (u in i)
            t.endPrefixMapping(u);
}
,
ElementAttributes.prototype = {
    setTagName: function(e) {
        if (!tagNamePattern.test(e))
            throw new Error("invalid tagName:" + e);
        this.tagName = e;
    },
    add: function(e, t, n) {
        if (!tagNamePattern.test(e))
            throw new Error("invalid attribute:" + e);
        this[this.length++] = {
            qName: e,
            value: t,
            offset: n
        };
    },
    length: 0,
    getLocalName: function(e) {
        return this[e].localName;
    },
    getLocator: function(e) {
        return this[e].locator;
    },
    getQName: function(e) {
        return this[e].qName;
    },
    getURI: function(e) {
        return this[e].uri;
    },
    getValue: function(e) {
        return this[e].value;
    }
},
"function" == typeof require && (exports.XMLReader = XMLReader);
var htmlns = "http://www.w3.org/1999/xhtml"
  , NodeType = {}
  , ELEMENT_NODE = NodeType.ELEMENT_NODE = 1
  , ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2
  , TEXT_NODE = NodeType.TEXT_NODE = 3
  , CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4
  , ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5
  , ENTITY_NODE = NodeType.ENTITY_NODE = 6
  , PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7
  , COMMENT_NODE = NodeType.COMMENT_NODE = 8
  , DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9
  , DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10
  , DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11
  , NOTATION_NODE = NodeType.NOTATION_NODE = 12
  , ExceptionCode = {}
  , ExceptionMessage = {}
  , INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error",
1)
  , DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error",
2)
  , HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error",
3)
  , WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document",
4)
  , INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character",
5)
  , NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed",
6)
  , NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed",
7)
  , NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found",
8)
  , NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported",
9)
  , INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use",
10)
  , INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state",
11)
  , SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error",
12)
  , INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification",
13)
  , NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace",
14)
  , INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access",
15);
function DOMException(e, t) {
    if (t instanceof Error)
        var n = t;
    else
        n = this,
        Error.call(this, ExceptionMessage[e]),
        this.message = ExceptionMessage[e],
        Error.captureStackTrace && Error.captureStackTrace(this, DOMException);
    return n.code = e,
    t && (this.message = this.message + ": " + t),
    n;
}
function NodeList() {}
function LiveNodeList(e, t) {
    this._node = e,
    this._refresh = t,
    _updateLiveList(this);
}
function _updateLiveList(e) {
    var t = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc != t) {
        var n = e._refresh(e._node);
        __set__(e, "length", n.length),
        copy(n, e),
        e._inc = t;
    }
}
function NamedNodeMap() {}
function _findNodeIndex(e, t) {
    for (var n = e.length; n--; )
        if (e[n] === t)
            return n;
}
function _addNamedNode(e, t, n, r) {
    if (r ? t[_findNodeIndex(t, r)] = n : t[t.length++] = n,
    e) {
        n.ownerElement = e;
        var i = e.ownerDocument;
        i && (r && _onRemoveAttribute(i, e, r),
        _onAddAttribute(i, e, n));
    }
}
function _removeNamedNode(e, t, n) {
    var r = _findNodeIndex(t, n);
    if (!(r >= 0))
        throw DOMException(NOT_FOUND_ERR, new Error(e.tagName + "@" + n));
    for (var i = t.length - 1; r < i; )
        t[r] = t[++r];
    if (t.length = i,
    e) {
        var o = e.ownerDocument;
        o && (_onRemoveAttribute(o, e, n),
        n.ownerElement = null);
    }
}
function DOMImplementation(e) {
    if (this._features = {},
    e)
        for (var t in e)
            this._features = e[t];
}
function Node() {}
function _xmlEncoder(e) {
    return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
}
function _visitNode(e, t) {
    if (t(e))
        return !0;
    if (e = e.firstChild)
        do {
            if (_visitNode(e, t))
                return !0;
        } while (e = e.nextSibling);
}
function Document() {}
function _onAddAttribute(e, t, n) {
    e && e._inc++,
    "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
}
function _onRemoveAttribute(e, t, n, r) {
    e && e._inc++,
    "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
}
function _onUpdateChild(e, t, n) {
    if (e && e._inc) {
        e._inc++;
        var r = t.childNodes;
        if (n)
            r[r.length++] = n;
        else {
            for (var i = t.firstChild, o = 0; i; )
                r[o++] = i,
                i = i.nextSibling;
            r.length = o;
        }
    }
}
function _removeChild(e, t) {
    var n = t.previousSibling
      , r = t.nextSibling;
    return n ? n.nextSibling = r : e.firstChild = r,
    r ? r.previousSibling = n : e.lastChild = n,
    _onUpdateChild(e.ownerDocument, e),
    t;
}
function _insertBefore(e, t, n) {
    var r = t.parentNode;
    if (r && r.removeChild(t),
    t.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var i = t.firstChild;
        if (null == i)
            return t;
        var o = t.lastChild;
    } else
        i = o = t;
    var a = n ? n.previousSibling : e.lastChild;
    i.previousSibling = a,
    o.nextSibling = n,
    a ? a.nextSibling = i : e.firstChild = i,
    null == n ? e.lastChild = o : n.previousSibling = o;
    do {
        i.parentNode = e;
    } while (i !== o && (i = i.nextSibling));
    return _onUpdateChild(e.ownerDocument || e, e),
    t.nodeType == DOCUMENT_FRAGMENT_NODE && (t.firstChild = t.lastChild = null),
    t;
}
function _appendSingleChild(e, t) {
    var n = t.parentNode;
    if (n) {
        var r = e.lastChild;
        n.removeChild(t);
        r = e.lastChild;
    }
    r = e.lastChild;
    return t.parentNode = e,
    t.previousSibling = r,
    t.nextSibling = null,
    r ? r.nextSibling = t : e.firstChild = t,
    e.lastChild = t,
    _onUpdateChild(e.ownerDocument, e, t),
    t;
}
function Element() {
    this._nsMap = {};
}
function Attr() {}
function CharacterData() {}
function Text() {}
function Comment() {}
function CDATASection() {}
function DocumentType() {}
function Notation() {}
function Entity() {}
function EntityReference() {}
function DocumentFragment() {}
function ProcessingInstruction() {}
function XMLSerializer() {}
function nodeSerializeToString(e, t) {
    var n = []
      , r = 9 == this.nodeType && this.documentElement || this
      , i = r.prefix
      , o = r.namespaceURI;
    if (o && null == i && null == (i = r.lookupPrefix(o)))
        var a = [{
            namespace: o,
            prefix: null
        }];
    return serializeToString(this, n, e, t, a),
    n.join("");
}
function needNamespaceDefine(e, t, n) {
    var r = e.prefix || ""
      , i = e.namespaceURI;
    if (!r && !i)
        return !1;
    if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === i || "http://www.w3.org/2000/xmlns/" == i)
        return !1;
    for (var o = n.length; o--; ) {
        var a = n[o];
        if (a.prefix == r)
            return a.namespace != i;
    }
    return !0;
}
function serializeToString(e, t, n, r, i) {
    if (r) {
        if (!(e = r(e)))
            return;
        if ("string" == typeof e)
            return void t.push(e);
    }
    switch (e.nodeType) {
    case ELEMENT_NODE:
        i || (i = []);
        i.length;
        var o = e.attributes
          , a = o.length
          , s = e.firstChild
          , c = e.tagName;
        n = htmlns === e.namespaceURI || n,
        t.push("<", c);
        for (var u = 0; u < a; u++) {
            "xmlns" == (l = o.item(u)).prefix ? i.push({
                prefix: l.localName,
                namespace: l.value
            }) : "xmlns" == l.nodeName && i.push({
                prefix: "",
                namespace: l.value
            });
        }
        for (u = 0; u < a; u++) {
            var l;
            if (needNamespaceDefine(l = o.item(u), n, i)) {
                var d = l.prefix || ""
                  , p = l.namespaceURI
                  , m = d ? " xmlns:" + d : " xmlns";
                t.push(m, '="', p, '"'),
                i.push({
                    prefix: d,
                    namespace: p
                });
            }
            serializeToString(l, t, n, r, i);
        }
        if (needNamespaceDefine(e, n, i)) {
            d = e.prefix || "",
            p = e.namespaceURI,
            m = d ? " xmlns:" + d : " xmlns";
            t.push(m, '="', p, '"'),
            i.push({
                prefix: d,
                namespace: p
            });
        }
        if (s || n && !/^(?:meta|link|img|br|hr|input)$/i.test(c)) {
            if (t.push(">"),
            n && /^script$/i.test(c))
                for (; s; )
                    s.data ? t.push(s.data) : serializeToString(s, t, n, r, i),
                    s = s.nextSibling;
            else
                for (; s; )
                    serializeToString(s, t, n, r, i),
                    s = s.nextSibling;
            t.push("</", c, ">");
        } else
            t.push("/>");
        return;
    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
        for (s = e.firstChild; s; )
            serializeToString(s, t, n, r, i),
            s = s.nextSibling;
        return;
    case ATTRIBUTE_NODE:
        return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, _xmlEncoder), '"');
    case TEXT_NODE:
        return t.push(e.data.replace(/[<&]/g, _xmlEncoder));
    case CDATA_SECTION_NODE:
        return t.push("<![CDATA[", e.data, "]]>");
    case COMMENT_NODE:
        return t.push("\x3c!--", e.data, "--\x3e");
    case DOCUMENT_TYPE_NODE:
        var N = e.publicId
          , E = e.systemId;
        if (t.push("<!DOCTYPE ", e.name),
        N)
            t.push(' PUBLIC "', N),
            E && "." != E && t.push('" "', E),
            t.push('">');
        else if (E && "." != E)
            t.push(' SYSTEM "', E, '">');
        else {
            var h = e.internalSubset;
            h && t.push(" [", h, "]"),
            t.push(">");
        }
        return;
    case PROCESSING_INSTRUCTION_NODE:
        return t.push("<?", e.target, " ", e.data, "?>");
    case ENTITY_REFERENCE_NODE:
        return t.push("&", e.nodeName, ";");
    default:
        t.push("??", e.nodeName);
    }
}
function importNode(e, t, n) {
    var r;
    switch (t.nodeType) {
    case ELEMENT_NODE:
        (r = t.cloneNode(!1)).ownerDocument = e;
    case DOCUMENT_FRAGMENT_NODE:
        break;
    case ATTRIBUTE_NODE:
        n = !0;
    }
    if (r || (r = t.cloneNode(!1)),
    r.ownerDocument = e,
    r.parentNode = null,
    n)
        for (var i = t.firstChild; i; )
            r.appendChild(importNode(e, i, n)),
            i = i.nextSibling;
    return r;
}
function cloneNode(e, t, n) {
    var r = new t.constructor();
    for (var i in t) {
        var o = t[i];
        "object" != typeof o && o != r[i] && (r[i] = o);
    }
    switch (t.childNodes && (r.childNodes = new NodeList()),
    r.ownerDocument = e,
    r.nodeType) {
    case ELEMENT_NODE:
        var a = t.attributes
          , s = r.attributes = new NamedNodeMap()
          , c = a.length;
        s._ownerElement = r;
        for (var u = 0; u < c; u++)
            r.setAttributeNode(cloneNode(e, a.item(u), !0));
        break;
    case ATTRIBUTE_NODE:
        n = !0;
    }
    if (n)
        for (var l = t.firstChild; l; )
            r.appendChild(cloneNode(e, l, n)),
            l = l.nextSibling;
    return r;
}
function __set__(e, t, n) {
    e[t] = n;
}
DOMException.prototype = Error.prototype,
copy(ExceptionCode, DOMException),
NodeList.prototype = {
    length: 0,
    item: function(e) {
        return this[e] || null;
    },
    toString: function(e, t) {
        for (var n = [], r = 0; r < this.length; r++)
            serializeToString(this[r], n, e, t);
        return n.join("");
    }
},
LiveNodeList.prototype.item = function(e) {
    return _updateLiveList(this),
    this[e];
}
,
_extends(LiveNodeList, NodeList),
NamedNodeMap.prototype = {
    length: 0,
    item: NodeList.prototype.item,
    getNamedItem: function(e) {
        for (var t = this.length; t--; ) {
            var n = this[t];
            if (n.nodeName == e)
                return n;
        }
    },
    setNamedItem: function(e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement)
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
        var n = this.getNamedItem(e.nodeName);
        return _addNamedNode(this._ownerElement, this, e, n),
        n;
    },
    setNamedItemNS: function(e) {
        var t, n = e.ownerElement;
        if (n && n != this._ownerElement)
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
        return t = this.getNamedItemNS(e.namespaceURI, e.localName),
        _addNamedNode(this._ownerElement, this, e, t),
        t;
    },
    removeNamedItem: function(e) {
        var t = this.getNamedItem(e);
        return _removeNamedNode(this._ownerElement, this, t),
        t;
    },
    removeNamedItemNS: function(e, t) {
        var n = this.getNamedItemNS(e, t);
        return _removeNamedNode(this._ownerElement, this, n),
        n;
    },
    getNamedItemNS: function(e, t) {
        for (var n = this.length; n--; ) {
            var r = this[n];
            if (r.localName == t && r.namespaceURI == e)
                return r;
        }
        return null;
    }
},
DOMImplementation.prototype = {
    hasFeature: function(e, t) {
        var n = this._features[e.toLowerCase()];
        return !(!n || t && !(t in n));
    },
    createDocument: function(e, t, n) {
        var r = new Document();
        if (r.implementation = this,
        r.childNodes = new NodeList(),
        r.doctype = n,
        n && r.appendChild(n),
        t) {
            var i = r.createElementNS(e, t);
            r.appendChild(i);
        }
        return r;
    },
    createDocumentType: function(e, t, n) {
        var r = new DocumentType();
        return r.name = e,
        r.nodeName = e,
        r.publicId = t,
        r.systemId = n,
        r;
    }
},
Node.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function(e, t) {
        return _insertBefore(this, e, t);
    },
    replaceChild: function(e, t) {
        this.insertBefore(e, t),
        t && this.removeChild(t);
    },
    removeChild: function(e) {
        return _removeChild(this, e);
    },
    appendChild: function(e) {
        return this.insertBefore(e, null);
    },
    hasChildNodes: function() {
        return null != this.firstChild;
    },
    cloneNode: function(e) {
        return cloneNode(this.ownerDocument || this, this, e);
    },
    normalize: function() {
        for (var e = this.firstChild; e; ) {
            var t = e.nextSibling;
            t && t.nodeType == TEXT_NODE && e.nodeType == TEXT_NODE ? (this.removeChild(t),
            e.appendData(t.data)) : (e.normalize(),
            e = t);
        }
    },
    isSupported: function(e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t);
    },
    hasAttributes: function() {
        return this.attributes.length > 0;
    },
    lookupPrefix: function(e) {
        for (var t = this; t; ) {
            var n = t._nsMap;
            if (n)
                for (var r in n)
                    if (n[r] == e)
                        return r;
            t = t.nodeType == ATTRIBUTE_NODE ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    lookupNamespaceURI: function(e) {
        for (var t = this; t; ) {
            var n = t._nsMap;
            if (n && e in n)
                return n[e];
            t = t.nodeType == ATTRIBUTE_NODE ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    isDefaultNamespace: function(e) {
        return null == this.lookupPrefix(e);
    }
},
copy(NodeType, Node),
copy(NodeType, Node.prototype),
Document.prototype = {
    nodeName: "#document",
    nodeType: DOCUMENT_NODE,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(e, t) {
        if (e.nodeType == DOCUMENT_FRAGMENT_NODE) {
            for (var n = e.firstChild; n; ) {
                var r = n.nextSibling;
                this.insertBefore(n, t),
                n = r;
            }
            return e;
        }
        return null == this.documentElement && e.nodeType == ELEMENT_NODE && (this.documentElement = e),
        _insertBefore(this, e, t),
        e.ownerDocument = this,
        e;
    },
    removeChild: function(e) {
        return this.documentElement == e && (this.documentElement = null),
        _removeChild(this, e);
    },
    importNode: function(e, t) {
        return importNode(this, e, t);
    },
    getElementById: function(e) {
        var t = null;
        return _visitNode(this.documentElement, function(n) {
            if (n.nodeType == ELEMENT_NODE && n.getAttribute("id") == e)
                return t = n,
                !0;
        }),
        t;
    },
    createElement: function(e) {
        var t = new Element();
        return t.ownerDocument = this,
        t.nodeName = e,
        t.tagName = e,
        t.childNodes = new NodeList(),
        (t.attributes = new NamedNodeMap())._ownerElement = t,
        t;
    },
    createDocumentFragment: function() {
        var e = new DocumentFragment();
        return e.ownerDocument = this,
        e.childNodes = new NodeList(),
        e;
    },
    createTextNode: function(e) {
        var t = new Text();
        return t.ownerDocument = this,
        t.appendData(e),
        t;
    },
    createComment: function(e) {
        var t = new Comment();
        return t.ownerDocument = this,
        t.appendData(e),
        t;
    },
    createCDATASection: function(e) {
        var t = new CDATASection();
        return t.ownerDocument = this,
        t.appendData(e),
        t;
    },
    createProcessingInstruction: function(e, t) {
        var n = new ProcessingInstruction();
        return n.ownerDocument = this,
        n.tagName = n.target = e,
        n.nodeValue = n.data = t,
        n;
    },
    createAttribute: function(e) {
        var t = new Attr();
        return t.ownerDocument = this,
        t.name = e,
        t.nodeName = e,
        t.localName = e,
        t.specified = !0,
        t;
    },
    createEntityReference: function(e) {
        var t = new EntityReference();
        return t.ownerDocument = this,
        t.nodeName = e,
        t;
    },
    createElementNS: function(e, t) {
        var n = new Element()
          , r = t.split(":")
          , i = n.attributes = new NamedNodeMap();
        return n.childNodes = new NodeList(),
        n.ownerDocument = this,
        n.nodeName = t,
        n.tagName = t,
        n.namespaceURI = e,
        2 == r.length ? (n.prefix = r[0],
        n.localName = r[1]) : n.localName = t,
        i._ownerElement = n,
        n;
    },
    createAttributeNS: function(e, t) {
        var n = new Attr()
          , r = t.split(":");
        return n.ownerDocument = this,
        n.nodeName = t,
        n.name = t,
        n.namespaceURI = e,
        n.specified = !0,
        2 == r.length ? (n.prefix = r[0],
        n.localName = r[1]) : n.localName = t,
        n;
    }
},
_extends(Document, Node),
Element.prototype = {
    nodeType: ELEMENT_NODE,
    hasAttribute: function(e) {
        return null != this.getAttributeNode(e);
    },
    getAttribute: function(e) {
        var t = this.getAttributeNode(e);
        return t && t.value || "";
    },
    getAttributeNode: function(e) {
        return this.attributes.getNamedItem(e);
    },
    setAttribute: function(e, t) {
        var n = this.ownerDocument.createAttribute(e);
        n.value = n.nodeValue = "" + t,
        this.setAttributeNode(n);
    },
    removeAttribute: function(e) {
        var t = this.getAttributeNode(e);
        t && this.removeAttributeNode(t);
    },
    appendChild: function(e) {
        return e.nodeType === DOCUMENT_FRAGMENT_NODE ? this.insertBefore(e, null) : _appendSingleChild(this, e);
    },
    setAttributeNode: function(e) {
        return this.attributes.setNamedItem(e);
    },
    setAttributeNodeNS: function(e) {
        return this.attributes.setNamedItemNS(e);
    },
    removeAttributeNode: function(e) {
        return this.attributes.removeNamedItem(e.nodeName);
    },
    removeAttributeNS: function(e, t) {
        var n = this.getAttributeNodeNS(e, t);
        n && this.removeAttributeNode(n);
    },
    hasAttributeNS: function(e, t) {
        return null != this.getAttributeNodeNS(e, t);
    },
    getAttributeNS: function(e, t) {
        var n = this.getAttributeNodeNS(e, t);
        return n && n.value || "";
    },
    setAttributeNS: function(e, t, n) {
        var r = this.ownerDocument.createAttributeNS(e, t);
        r.value = r.nodeValue = "" + n,
        this.setAttributeNode(r);
    },
    getAttributeNodeNS: function(e, t) {
        return this.attributes.getNamedItemNS(e, t);
    },
    getElementsByTagName: function(e) {
        return new LiveNodeList(this,function(t) {
            var n = [];
            return _visitNode(t, function(r) {
                r === t || r.nodeType != ELEMENT_NODE || "*" !== e && r.tagName != e || n.push(r);
            }),
            n;
        }
        );
    },
    getElementsByTagNameNS: function(e, t) {
        return new LiveNodeList(this,function(n) {
            var r = [];
            return _visitNode(n, function(i) {
                i === n || i.nodeType !== ELEMENT_NODE || "*" !== e && i.namespaceURI !== e || "*" !== t && i.localName != t || r.push(i);
            }),
            r;
        }
        );
    }
},
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName,
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS,
_extends(Element, Node),
Attr.prototype.nodeType = ATTRIBUTE_NODE,
_extends(Attr, Node),
CharacterData.prototype = {
    data: "",
    substringData: function(e, t) {
        return this.data.substring(e, e + t);
    },
    appendData: function(e) {
        e = this.data + e,
        this.nodeValue = this.data = e,
        this.length = e.length;
    },
    insertData: function(e, t) {
        this.replaceData(e, 0, t);
    },
    appendChild: function(e) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
    },
    deleteData: function(e, t) {
        this.replaceData(e, t, "");
    },
    replaceData: function(e, t, n) {
        n = this.data.substring(0, e) + n + this.data.substring(e + t),
        this.nodeValue = this.data = n,
        this.length = n.length;
    }
},
_extends(CharacterData, Node),
Text.prototype = {
    nodeName: "#text",
    nodeType: TEXT_NODE,
    splitText: function(e) {
        var t = this.data
          , n = t.substring(e);
        t = t.substring(0, e),
        this.data = this.nodeValue = t,
        this.length = t.length;
        var r = this.ownerDocument.createTextNode(n);
        return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling),
        r;
    }
},
_extends(Text, CharacterData),
Comment.prototype = {
    nodeName: "#comment",
    nodeType: COMMENT_NODE
},
_extends(Comment, CharacterData),
CDATASection.prototype = {
    nodeName: "#cdata-section",
    nodeType: CDATA_SECTION_NODE
},
_extends(CDATASection, CharacterData),
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE,
_extends(DocumentType, Node),
Notation.prototype.nodeType = NOTATION_NODE,
_extends(Notation, Node),
Entity.prototype.nodeType = ENTITY_NODE,
_extends(Entity, Node),
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE,
_extends(EntityReference, Node),
DocumentFragment.prototype.nodeName = "#document-fragment",
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE,
_extends(DocumentFragment, Node),
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE,
_extends(ProcessingInstruction, Node),
XMLSerializer.prototype.serializeToString = function(e, t, n) {
    return nodeSerializeToString.call(e, t, n);
}
,
Node.prototype.toString = nodeSerializeToString;
try {
    if (Object.defineProperty) {
        function getTextContent(e) {
            switch (e.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
                var t = [];
                for (e = e.firstChild; e; )
                    7 !== e.nodeType && 8 !== e.nodeType && t.push(getTextContent(e)),
                    e = e.nextSibling;
                return t.join("");
            default:
                return e.nodeValue;
            }
        }
        Object.defineProperty(LiveNodeList.prototype, "length", {
            get: function() {
                return _updateLiveList(this),
                this.$$length;
            }
        }),
        Object.defineProperty(Node.prototype, "textContent", {
            get: function() {
                return getTextContent(this);
            },
            set: function(e) {
                switch (this.nodeType) {
                case ELEMENT_NODE:
                case DOCUMENT_FRAGMENT_NODE:
                    for (; this.firstChild; )
                        this.removeChild(this.firstChild);
                    (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                    break;
                default:
                    this.data = e,
                    this.value = e,
                    this.nodeValue = e;
                }
            }
        }),
        __set__ = function(e, t, n) {
            e["$$" + t] = n;
        }
        ;
    }
} catch (e) {}
function DOMParser(e) {
    this.options = e || {
        locator: {}
    };
}
function buildErrorHandler(e, t, n) {
    if (!e) {
        if (t instanceof DOMHandler)
            return t;
        e = t;
    }
    var r = {}
      , i = e instanceof Function;
    function build(t) {
        var o = e[t];
        !o && i && (o = 2 == e.length ? function(n) {
            e(t, n);
        }
        : e),
        r[t] = o && function(e) {
            o("[xmldom " + t + "]\t" + e + _locator(n));
        }
        || function() {}
        ;
    }
    return n = n || {},
    build("warning"),
    build("error"),
    build("fatalError"),
    r;
}
function DOMHandler() {
    this.cdata = !1;
}
function position(e, t) {
    t.lineNumber = e.lineNumber,
    t.columnNumber = e.columnNumber;
}
function _locator(e) {
    if (e)
        return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
}
function _toString(e, t, n) {
    return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e,t,n) + "" : e;
}
function appendElement(e, t) {
    e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
}
"function" == typeof require && (exports.DOMImplementation = DOMImplementation,
exports.XMLSerializer = XMLSerializer),
DOMParser.prototype.parseFromString = function(e, t) {
    var n = this.options
      , r = new XMLReader()
      , i = n.domBuilder || new DOMHandler()
      , o = n.errorHandler
      , a = n.locator
      , s = n.xmlns || {}
      , c = /\/x?html?$/.test(t)
      , u = c ? htmlEntity.entityMap : {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
    };
    return a && i.setDocumentLocator(a),
    r.errorHandler = buildErrorHandler(o, i, a),
    r.domBuilder = n.domBuilder || i,
    c && (s[""] = "http://www.w3.org/1999/xhtml"),
    s.xml = s.xml || "http://www.w3.org/XML/1998/namespace",
    e ? r.parse(e, s, u) : r.errorHandler.error("invalid doc source"),
    i.doc;
}
,
DOMHandler.prototype = {
    startDocument: function() {
        this.doc = new DOMImplementation().createDocument(null, null, null),
        this.locator && (this.doc.documentURI = this.locator.systemId);
    },
    startElement: function(e, t, n, r) {
        var i = this.doc
          , o = i.createElementNS(e, n || t)
          , a = r.length;
        appendElement(this, o),
        this.currentElement = o,
        this.locator && position(this.locator, o);
        for (var s = 0; s < a; s++) {
            e = r.getURI(s);
            var c = r.getValue(s)
              , u = (n = r.getQName(s),
            i.createAttributeNS(e, n));
            this.locator && position(r.getLocator(s), u),
            u.value = u.nodeValue = c,
            o.setAttributeNode(u);
        }
    },
    endElement: function(e, t, n) {
        var r = this.currentElement;
        r.tagName;
        this.currentElement = r.parentNode;
    },
    startPrefixMapping: function(e, t) {},
    endPrefixMapping: function(e) {},
    processingInstruction: function(e, t) {
        var n = this.doc.createProcessingInstruction(e, t);
        this.locator && position(this.locator, n),
        appendElement(this, n);
    },
    ignorableWhitespace: function(e, t, n) {},
    characters: function(e, t, n) {
        if (e = _toString.apply(this, arguments)) {
            if (this.cdata)
                var r = this.doc.createCDATASection(e);
            else
                r = this.doc.createTextNode(e);
            this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r),
            this.locator && position(this.locator, r);
        }
    },
    skippedEntity: function(e) {},
    endDocument: function() {
        this.doc.normalize();
    },
    setDocumentLocator: function(e) {
        (this.locator = e) && (e.lineNumber = 0);
    },
    comment: function(e, t, n) {
        e = _toString.apply(this, arguments);
        var r = this.doc.createComment(e);
        this.locator && position(this.locator, r),
        appendElement(this, r);
    },
    startCDATA: function() {
        this.cdata = !0;
    },
    endCDATA: function() {
        this.cdata = !1;
    },
    startDTD: function(e, t, n) {
        var r = this.doc.implementation;
        if (r && r.createDocumentType) {
            var i = r.createDocumentType(e, t, n);
            this.locator && position(this.locator, i),
            appendElement(this, i);
        }
    },
    warning: function(e) {
        console.warn("[xmldom warning]\t" + e, _locator(this.locator));
    },
    error: function(e) {
        console.error("[xmldom error]\t" + e, _locator(this.locator));
    },
    fatalError: function(e) {
        throw console.error("[xmldom fatalError]\t" + e, _locator(this.locator)),
        e;
    }
},
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
    DOMHandler.prototype[e] = function() {
        return null;
    }
    ;
}),
htmlEntity = {},
htmlEntity.entityMap = entityMap,
window.Parser = {
    DOMParser: DOMParser
};
