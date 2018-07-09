//alert('in script');
var g, k = this;

function l(a) {
    return "string" == typeof a
}

function aa() {}

function ba(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function n(a) {
    return "array" == ba(a)
}

function p(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0),
    da = 0;

function ea(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function fa(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}

function q(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = ea : q = fa;
    return q.apply(null, arguments)
}

function r(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.o = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.ha = function (a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
    }
};
var ha;
var t = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if (l(a)) return l(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    ia = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = l(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    ja = Array.prototype.filter ? function (a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    } : function (a, b) {
        for (var c =
                a.length, d = [], e = 0, f = l(a) ? a.split("") : a, h = 0; h < c; h++)
            if (h in f) {
                var m = f[h];
                b.call(void 0, m, h, a) && (d[e++] = m)
            }
        return d
    };

function ka(a) {
    return Array.prototype.concat.apply([], arguments)
}

function la(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
};

function u(a, b) {
    this.b = {};
    this.a = [];
    this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a)
        if (a instanceof u)
            for (c = a.w(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
        else
            for (d in a) this.set(d, a[d])
}
g = u.prototype;
g.A = function () {
    ma(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a
};
g.w = function () {
    ma(this);
    return this.a.concat()
};

function ma(a) {
    if (a.c != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
            var d = a.a[b];
            v(a.b, d) && (a.a[c++] = d);
            b++
        }
        a.a.length = c
    }
    if (a.c != a.a.length) {
        var e = {};
        for (c = b = 0; b < a.a.length;) d = a.a[b], v(e, d) || (a.a[c++] = d, e[d] = 1), b++;
        a.a.length = c
    }
}
g.get = function (a, b) {
    return v(this.b, a) ? this.b[a] : b
};
g.set = function (a, b) {
    v(this.b, a) || (this.c++, this.a.push(a));
    this.b[a] = b
};
g.forEach = function (a, b) {
    for (var c = this.w(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};

function v(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var na = String.prototype.trim ? function (a) {
    return a.trim()
} : function (a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};

function oa(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function pa(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase()
    })
}

function qa(a) {
    var b = l(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
        return b + e.toUpperCase()
    })
};
var ra = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

function sa(a, b) {
    if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].indexOf("="),
                e = null;
            if (0 <= d) {
                var f = a[c].substring(0, d);
                e = a[c].substring(d + 1)
            } else f = a[c];
            b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
        }
    }
};

function ta(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}

function w(a, b) {
    b in a && delete a[b]
}
var ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function va(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < ua.length; f++) c = ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function x(a) {
    this.f = this.i = this.c = "";
    this.l = null;
    this.g = this.h = "";
    this.a = !1;
    if (a instanceof x) {
        this.a = a.a;
        wa(this, a.c);
        this.i = a.i;
        this.f = a.f;
        xa(this, a.l);
        this.h = a.h;
        var b = a.b;
        var c = new y;
        c.c = b.c;
        b.a && (c.a = new u(b.a), c.b = b.b);
        ya(this, c);
        this.g = a.g
    } else a && (b = String(a).match(ra)) ? (this.a = !1, wa(this, b[1] || "", !0), this.i = z(b[2] || ""), this.f = z(b[3] || "", !0), xa(this, b[4]), this.h = z(b[5] || "", !0), ya(this, b[6] || "", !0), this.g = z(b[7] || "")) : (this.a = !1, this.b = new y(null, this.a))
}
x.prototype.toString = function () {
    var a = [],
        b = this.c;
    b && a.push(A(b, za, !0), ":");
    var c = this.f;
    if (c || "file" == b) a.push("//"), (b = this.i) && a.push(A(b, za, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
    if (c = this.h) this.f && "/" != c.charAt(0) && a.push("/"), a.push(A(c, "/" == c.charAt(0) ? Aa : Ba, !0));
    (c = this.b.toString()) && a.push("?", c);
    (c = this.g) && a.push("#", A(c, Ca));
    return a.join("")
};

function wa(a, b, c) {
    a.c = c ? z(b, !0) : b;
    a.c && (a.c = a.c.replace(/:$/, ""))
}

function xa(a, b) {
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.l = b
    } else a.l = null
}

function ya(a, b, c) {
    b instanceof y ? (a.b = b, Da(a.b, a.a)) : (c || (b = A(b, Ea)), a.b = new y(b, a.a))
}

function z(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
}

function A(a, b, c) {
    return l(a) ? (a = encodeURI(a).replace(b, Fa), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
}

function Fa(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var za = /[#\/\?@]/g,
    Ba = /[#\?:]/g,
    Aa = /[#\?]/g,
    Ea = /[#\?@]/g,
    Ca = /#/g;

function y(a, b) {
    this.b = this.a = null;
    this.c = a || null;
    this.f = !!b
}

function B(a) {
    a.a || (a.a = new u, a.b = 0, a.c && sa(a.c, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
    }))
}
g = y.prototype;
g.add = function (a, b) {
    B(this);
    this.c = null;
    a = C(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b += 1;
    return this
};

function Ga(a, b) {
    B(a);
    b = C(a, b);
    v(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, v(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && ma(a)))
}

function Ha(a, b) {
    B(a);
    b = C(a, b);
    return v(a.a.b, b)
}
g.forEach = function (a, b) {
    B(this);
    this.a.forEach(function (c, d) {
        ia(c, function (c) {
            a.call(b, c, d, this)
        }, this)
    }, this)
};
g.w = function () {
    B(this);
    for (var a = this.a.A(), b = this.a.w(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
};
g.A = function (a) {
    B(this);
    var b = [];
    if (l(a)) Ha(this, a) && (b = ka(b, this.a.get(C(this, a))));
    else {
        a = this.a.A();
        for (var c = 0; c < a.length; c++) b = ka(b, a[c])
    }
    return b
};
g.set = function (a, b) {
    B(this);
    this.c = null;
    a = C(this, a);
    Ha(this, a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b]);
    this.b += 1;
    return this
};
g.get = function (a, b) {
    a = a ? this.A(a) : [];
    return 0 < a.length ? String(a[0]) : b
};
g.toString = function () {
    if (this.c) return this.c;
    if (!this.a) return "";
    for (var a = [], b = this.a.w(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = encodeURIComponent(String(d));
        d = this.A(d);
        for (var f = 0; f < d.length; f++) {
            var h = e;
            "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
            a.push(h)
        }
    }
    return this.c = a.join("&")
};

function C(a, b) {
    b = String(b);
    a.f && (b = b.toLowerCase());
    return b
}

function Da(a, b) {
    b && !a.f && (B(a), a.c = null, a.a.forEach(function (a, b) {
        var c = b.toLowerCase();
        b != c && (Ga(this, b), Ga(this, c), 0 < a.length && (this.c = null, this.a.set(C(this, c), la(a)), this.b += a.length))
    }, a));
    a.f = b
};

function D(a, b) {
    this.b = void 0 !== a ? a : 0;
    this.a = void 0 !== b ? b : 0
}
D.prototype.toString = function () {
    return "(" + this.b + ", " + this.a + ")"
};
D.prototype.ceil = function () {
    this.b = Math.ceil(this.b);
    this.a = Math.ceil(this.a);
    return this
};
D.prototype.floor = function () {
    this.b = Math.floor(this.b);
    this.a = Math.floor(this.a);
    return this
};
D.prototype.round = function () {
    this.b = Math.round(this.b);
    this.a = Math.round(this.a);
    return this
};
var E;
a: {
    var Ia = k.navigator;
    if (Ia) {
        var Ja = Ia.userAgent;
        if (Ja) {
            E = Ja;
            break a
        }
    }
    E = ""
}

function F(a) {
    return -1 != E.indexOf(a)
};

function Ka() {
    return (F("Chrome") || F("CriOS")) && !F("Edge")
};

function La(a) {
    La[" "](a);
    return a
}
La[" "] = aa;

function Ma(a, b) {
    var c = Na;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
};
var Oa = F("Opera"),
    G = F("Trident") || F("MSIE"),
    Pa = F("Edge"),
    Qa = F("Gecko") && !(-1 != E.toLowerCase().indexOf("webkit") && !F("Edge")) && !(F("Trident") || F("MSIE")) && !F("Edge"),
    Ra = -1 != E.toLowerCase().indexOf("webkit") && !F("Edge");

function Sa() {
    var a = k.document;
    return a ? a.documentMode : void 0
}
var Ta;
a: {
    var Ua = "",
        Va = function () {
            var a = E;
            if (Qa) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Pa) return /Edge\/([\d\.]+)/.exec(a);
            if (G) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Ra) return /WebKit\/(\S+)/.exec(a);
            if (Oa) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();Va && (Ua = Va ? Va[1] : "");
    if (G) {
        var Wa = Sa();
        if (null != Wa && Wa > parseFloat(Ua)) {
            Ta = String(Wa);
            break a
        }
    }
    Ta = Ua
}
var Na = {};

function Xa(a) {
    return Ma(a, function () {
        for (var b = 0, c = na(String(Ta)).split("."), d = na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "",
                m = d[f] || "";
            do {
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
                if (0 == h[0].length && 0 == m[0].length) break;
                b = oa(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || oa(0 == h[2].length, 0 == m[2].length) || oa(h[2], m[2]);
                h = h[3];
                m = m[3]
            } while (0 == b)
        }
        return 0 <= b
    })
}
var Ya;
var Za = k.document;
Ya = Za && G ? Sa() || ("CSS1Compat" == Za.compatMode ? parseInt(Ta, 10) : 5) : void 0;

function $a(a, b) {
    this.width = a;
    this.height = b
}
g = $a.prototype;
g.toString = function () {
    return "(" + this.width + " x " + this.height + ")"
};
g.aspectRatio = function () {
    return this.width / this.height
};
g.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};

function ab(a) {
    return a ? new bb(H(a)) : ha || (ha = new bb)
}

function cb() {
    var a = document;
    if (a.querySelectorAll && a.querySelector) return a.querySelectorAll("INS.pa-widget-gallery");
    if (a.getElementsByClassName) {
        a = a.getElementsByClassName("pa-widget-gallery");
        for (var b = {}, c = 0, d = 0, e; e = a[d]; d++) "INS" == e.nodeName && (b[c++] = e);
        b.length = c;
        return b
    }
    a = a.getElementsByTagName("INS");
    b = {};
    for (d = c = 0; e = a[d]; d++) {
        var f = e.className,
            h;
        if (h = "function" == typeof f.split) h = 0 <= t(f.split(/\s+/), "pa-widget-gallery");
        h && (b[c++] = e)
    }
    b.length = c;
    return b
}

function db(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new $a(a.clientWidth, a.clientHeight)
}

function eb(a) {
    var b = a.scrollingElement ? a.scrollingElement : Ra || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
    a = a.parentWindow || a.defaultView;
    return G && Xa("10") && a.pageYOffset != b.scrollTop ? new D(b.scrollLeft, b.scrollTop) : new D(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}

function H(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function fb(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = String(b)
    } else {
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(H(a).createTextNode(String(b)))
    }
}

function gb(a, b) {
    b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
}

function bb(a) {
    this.a = a || k.document || document
}
bb.prototype.c = function () {
    return l(void 0) ? this.a.getElementById(void 0) : void 0
};

function I(a, b, c) {
    if (l(b))(b = hb(a, b)) && (a.style[b] = c);
    else
        for (var d in b) {
            c = a;
            var e = b[d],
                f = hb(c, d);
            f && (c.style[f] = e)
        }
}
var ib = {};

function hb(a, b) {
    var c = ib[b];
    if (!c) {
        var d = pa(b);
        c = d;
        void 0 === a.style[d] && (d = (Ra ? "Webkit" : Qa ? "Moz" : G ? "ms" : Oa ? "O" : null) + qa(d), void 0 !== a.style[d] && (c = d));
        ib[b] = c
    }
    return c
};
var jb = "closure_listenable_" + (1E6 * Math.random() | 0);

function J(a) {
    return !(!a || !a[jb])
}
var kb = 0;

function lb(a, b, c, d, e) {
    this.listener = a;
    this.a = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.D = e;
    this.key = ++kb;
    this.u = this.C = !1
}

function mb(a) {
    a.u = !0;
    a.listener = null;
    a.a = null;
    a.src = null;
    a.D = null
};

function nb(a) {
    this.src = a;
    this.a = {};
    this.b = 0
}
nb.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var h = ob(a, b, d, e); - 1 < h ? (b = a[h], c || (b.C = !1)) : (b = new lb(b, this.src, f, !!d, e), b.C = c, a.push(b));
    return b
};

function pb(a, b) {
    var c = b.type;
    if (c in a.a) {
        var d = a.a[c],
            e = t(d, b),
            f;
        (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
        f && (mb(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
    }
}

function qb(a, b, c, d, e) {
    a = a.a[b.toString()];
    b = -1;
    a && (b = ob(a, c, d, e));
    return -1 < b ? a[b] : null
}

function ob(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.u && f.listener == b && f.capture == !!c && f.D == d) return e
    }
    return -1
};
var rb = !G || 9 <= Number(Ya),
    sb = G && !Xa("9"),
    tb = function () {
        if (!k.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
        k.addEventListener("test", aa, b);
        k.removeEventListener("test", aa, b);
        return a
    }();
var ub = Object.freeze || function (a) {
    return a
};

function K() {
    0 != vb && (this[ca] || (this[ca] = ++da));
    this.J = this.J;
    this.V = this.V
}
var vb = 0;
K.prototype.J = !1;

function L(a, b) {
    this.type = a;
    this.a = this.target = b
}
L.prototype.b = function () {};

function M(a, b) {
    L.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.F = null;
    if (a) {
        var c = this.type = a.type,
            d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (Qa) {
                a: {
                    try {
                        La(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement :
            "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = l(a.pointerType) ? a.pointerType : wb[a.pointerType] || "";
        this.F = a;
        a.defaultPrevented && this.b()
    }
}
r(M, L);
var wb = ub({
    2: "touch",
    3: "pen",
    4: "mouse"
});
M.prototype.b = function () {
    M.o.b.call(this);
    var a = this.F;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, sb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var xb = "closure_lm_" + (1E6 * Math.random() | 0),
    yb = {},
    zb = 0;

function N(a, b, c, d, e) {
    if (d && d.once) return Ab(a, b, c, d, e);
    if (n(b)) {
        for (var f = 0; f < b.length; f++) N(a, b[f], c, d, e);
        return null
    }
    c = Bb(c);
    return J(a) ? a.l(b, c, p(d) ? !!d.capture : !!d, e) : Cb(a, b, c, !1, d, e)
}

function Cb(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var h = p(e) ? !!e.capture : !!e,
        m = O(a);
    m || (a[xb] = m = new nb(a));
    c = m.add(b, c, d, h, f);
    if (c.a) return c;
    d = Db();
    c.a = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) tb || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Eb(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    zb++;
    return c
}

function Db() {
    var a = Fb,
        b = rb ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function Ab(a, b, c, d, e) {
    if (n(b)) {
        for (var f = 0; f < b.length; f++) Ab(a, b[f], c, d, e);
        return null
    }
    c = Bb(c);
    return J(a) ? a.b.add(String(b), c, !0, p(d) ? !!d.capture : !!d, e) : Cb(a, b, c, !0, d, e)
}

function Gb(a, b, c, d, e) {
    if (n(b))
        for (var f = 0; f < b.length; f++) Gb(a, b[f], c, d, e);
    else d = p(d) ? !!d.capture : !!d, c = Bb(c), J(a) ? a.I(b, c, d, e) : a && (a = O(a)) && (b = qb(a, b, c, d, e)) && Hb(b)
}

function Hb(a) {
    if ("number" != typeof a && a && !a.u) {
        var b = a.src;
        if (J(b)) pb(b.b, a);
        else {
            var c = a.type,
                d = a.a;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Eb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            zb--;
            (c = O(b)) ? (pb(c, a), 0 == c.b && (c.src = null, b[xb] = null)) : mb(a)
        }
    }
}

function Eb(a) {
    return a in yb ? yb[a] : yb[a] = "on" + a
}

function Ib(a, b, c, d) {
    var e = !0;
    if (a = O(a))
        if (b = a.a[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.capture == c && !f.u && (f = Jb(f, d), e = e && !1 !== f)
            }
    return e
}

function Jb(a, b) {
    var c = a.listener,
        d = a.D || a.src;
    a.C && Hb(a);
    return c.call(d, b)
}

function Fb(a, b) {
    if (a.u) return !0;
    if (!rb) {
        if (!b) a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a
                }
            b = c
        }
        d = b;
        b = new M(d, this);
        c = !0;
        if (!(0 > d.keyCode || void 0 != d.returnValue)) {
            a: {
                var e = !1;
                if (0 == d.keyCode) try {
                    d.keyCode = -1;
                    break a
                } catch (h) {
                    e = !0
                }
                if (e || void 0 == d.returnValue) d.returnValue = !0
            }
            d = [];
            for (e = b.a; e; e = e.parentNode) d.push(e);a = a.type;
            for (e = d.length - 1; 0 <= e; e--) {
                b.a = d[e];
                var f = Ib(d[e], a, !0, b);
                c = c && f
            }
            for (e = 0; e < d.length; e++) b.a = d[e],
            f = Ib(d[e], a, !1, b),
            c = c && f
        }
        return c
    }
    return Jb(a,
        new M(b, this))
}

function O(a) {
    a = a[xb];
    return a instanceof nb ? a : null
}
var Kb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function Bb(a) {
    if ("function" == ba(a)) return a;
    a[Kb] || (a[Kb] = function (b) {
        return a.handleEvent(b)
    });
    return a[Kb]
};

function P(a) {
    K.call(this);
    this.b = a;
    this.a = {}
}
r(P, K);
var Lb = [];
P.prototype.l = function (a, b, c, d) {
    n(b) || (b && (Lb[0] = b.toString()), b = Lb);
    for (var e = 0; e < b.length; e++) {
        var f = N(a, b[e], c || this.handleEvent, d || !1, this.b || this);
        if (!f) break;
        this.a[f.key] = f
    }
    return this
};
P.prototype.I = function (a, b, c, d, e) {
    if (n(b))
        for (var f = 0; f < b.length; f++) this.I(a, b[f], c, d, e);
    else c = c || this.handleEvent, d = p(d) ? !!d.capture : !!d, e = e || this.b || this, c = Bb(c), d = !!d, b = J(a) ? qb(a.b, String(b), c, d, e) : a ? (a = O(a)) ? qb(a, b, c, d, e) : null : null, b && (Hb(b), delete this.a[b.key])
};
P.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};

function Q() {
    K.call(this);
    this.b = new nb(this);
    this.M = this
}
r(Q, K);
Q.prototype[jb] = !0;
Q.prototype.removeEventListener = function (a, b, c, d) {
    Gb(this, a, b, c, d)
};

function Mb(a, b) {
    a = a.M;
    var c = b.type || b;
    if (l(b)) b = new L(b, a);
    else if (b instanceof L) b.target = b.target || a;
    else {
        var d = b;
        b = new L(c, a);
        va(b, d)
    }
    a = b.a = a;
    Nb(a, c, !0, b);
    Nb(a, c, !1, b)
}
Q.prototype.l = function (a, b, c, d) {
    return this.b.add(String(a), b, !1, c, d)
};
Q.prototype.I = function (a, b, c, d) {
    var e = this.b;
    a = String(a).toString();
    if (a in e.a) {
        var f = e.a[a];
        b = ob(f, b, c, d); - 1 < b && (mb(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.a[a], e.b--))
    }
};

function Nb(a, b, c, d) {
    if (b = a.b.a[String(b)]) {
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.u && h.capture == c) {
                var m = h.listener,
                    hc = h.D || h.src;
                h.C && pb(a.b, h);
                e = !1 !== m.call(hc, d) && e
            }
        }
    }
};

function R(a) {
    Q.call(this);
    this.a = a || ab();
    this.K = !1;
    this.G = null;
    this.H = void 0
}
r(R, Q);
R.prototype.c = function () {
    return this.G
};

function Ob(a, b) {
    if (a.K) throw Error("Component already rendered");
    if (b) {
        var c = H(b);
        a.a && a.a.a == c || (a.a = ab(b));
        a.s(b);
        a.j()
    } else throw Error("Invalid element to decorate");
}
R.prototype.s = function (a) {
    this.G = a
};
R.prototype.j = function () {
    this.K = !0
};
R.prototype.v = function () {
    return this.G
};
var Pb = !G && !(F("Safari") && !(Ka() || F("Coast") || F("Opera") || F("Edge") || F("Silk") || F("Android")));

function Qb(a, b) {
    if (/-[a-z]/.test(b)) return null;
    if (Pb && a.dataset) {
        if (!(!F("Android") || Ka() || F("Firefox") || F("Opera") || F("Silk") || b in a.dataset)) return null;
        a = a.dataset[b];
        return void 0 === a ? null : a
    }
    return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
}

function Rb(a) {
    if (Pb && a.dataset) return a.dataset;
    var b = {};
    a = a.attributes;
    for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        if (0 == d.name.lastIndexOf("data-", 0)) {
            var e = pa(d.name.substr(5));
            b[e] = d.value
        }
    }
    return b
};

function Sb(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return l(a) && a.match(/\S+/g) || []
}

function Tb(a, b) {
    if (a.classList) a.classList.remove(b);
    else if (a.classList ? a.classList.contains(b) : 0 <= t(Sb(a), b)) a.className = ja(Sb(a), function (a) {
        return a != b
    }).join(" ")
}

function S(a, b, c) {
    c ? a.classList ? a.classList.add(b) : (a.classList ? a.classList.contains(b) : 0 <= t(Sb(a), b)) || (a.className += 0 < a.className.length ? " " + b : b) : Tb(a, b)
};

function Ub(a) {
    Q.call(this);
    this.c = a || window;
    N(this.c, "resize", this.f, !1, this);
    this.a = db(this.c || window)
}
r(Ub, Q);
Ub.prototype.f = function () {
    var a = db(this.c || window),
        b = this.a;
    a == b || a && b && a.width == b.width && a.height == b.height || (this.a = a, Mb(this, "resize"))
};

function T(a) {
    R.call(this, a);
    this.g = new Ub;
    this.f = !1
}
r(T, R);
g = T.prototype;
g.v = function () {
    return this.i
};

function Vb(a) {
    var b = a.v(),
        c = H(b),
        d = new D(0, 0);
    var e = c ? H(c) : document;
    e = !G || 9 <= Number(Ya) || "CSS1Compat" == ab(e).a.compatMode ? e.documentElement : e.body;
    if (b != e) {
        b: {
            try {
                var f = b.getBoundingClientRect()
            } catch (h) {
                f = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                };
                break b
            }
            G && b.ownerDocument.body && (b = b.ownerDocument, f.left -= b.documentElement.clientLeft + b.body.clientLeft, f.top -= b.documentElement.clientTop + b.body.clientTop)
        }
        c = eb(ab(c).a);d.b = f.left + c.b;d.a = f.top + c.a
    }
    c = a.g;
    c.a ? (c = c.a, c = new $a(c.width, c.height)) : c = null;
    d.a - eb(document).a <
        c.height && !a.f && (a.f = !0, Mb(a, "show"))
}
g.s = function (a) {
    T.o.s.call(this, a);
    this.i = this.a.a.createElement("DIV");
    a.appendChild(this.i);
    I(this.v(), Wb)
};
g.fa = function () {
    Vb(this)
};
g.ea = function () {
    Vb(this)
};
g.j = function () {
    T.o.j.call(this);
    N(this.g, "resize", this.fa, !1, this);
    N(window, "scroll", this.ea, !1, this)
};
var Wb = {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden"
};

function U(a) {
    R.call(this, a);
    this.h = new T
}
r(U, R);
g = U.prototype;
g.v = function () {
    return this.i
};
g.s = function (a) {
    U.o.s.call(this, a);
    I(a, "display", "block");
    Ob(this.h, a);
    gb(a, !0);
    this.g = this.a.a.createElement("DIV");
    this.B = this.a.a.createElement("DIV");
    this.f = this.a.a.createElement("IFRAME");
    this.f.setAttribute("name", "gallery");
    I(this.g, {
        width: "100%",
        height: "100%",
        "background-color": "transparent"
    });
    I(this.B, {
        width: "100%",
        height: "100%"
    });
    I(this.f, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    });
    this.g.appendChild(this.B);
    this.g.appendChild(this.f)
};
g.aa = function () {
    var a = this.c();
    if (!a) throw Error("Invalid element.");
    var b = Qb(a, "uid");
    if (!b) throw Error("UID/URL not set.");
    var c = new x("https://www.publicalbum.org/embed/galleryWidget/" + b);
    a = Rb(a);
    w(a, "uid");
    w(a, "url");
    w(a, "allowTransparency");
    w(a, "allowFullscreen");
    ta(a, function (a, b) {
        a = "true" == a ? !0 : a;
        c.b.set(b, 1 == a ? "" : a)
    }, this);
    ta({
        src: c.toString(),
        width: "100%",
        height: "100%",
        frameborder: "0",
        scrolling: "no",
        allowtransparency: !0,
        allowfullscreen: !0
    }, function (a, b) {
        a && this.f.setAttribute(b, a)
    }, this);
    I(this.f, "z-index", 999999);
    this.h.v().appendChild(this.g)
};

function Xb(a, b) {
    I(a.f, "position", b ? "fixed" : "absolute")
}
g.$ = function () {
    window.gallery.postMessage("origin", "https://www.publicalbum.org/")
};
g.da = function (a) {
    switch (String(a.F.data)) {
        case "enableFullpage":
            Xb(this, !0);
            break;
        case "disableFullpage":
            Xb(this, !1)
    }
};
g.j = function () {
    U.o.j.call(this);
    N(this.f, "load", this.$, !1, this);
    N(window, "message", this.da, !1, this);
    N(this.h, "show", this.aa, !1, this);
    Vb(this.h)
};

function Yb() {
    ia(cb(), function (a) {
        Ob(new U, a)
    })
}
Yb();

function Zb() {};
var $b;

function ac() {}
r(ac, Zb);
$b = new ac;

function bc() {
    Q.call(this);
    a: {
        if (!$b.a && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    new ActiveXObject(c);
                    var d = $b.a = c;
                    break a
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        d = $b.a
    }
    this.m = d ? new ActiveXObject(d) : new XMLHttpRequest;
    this.m.onreadystatechange = q(this.c, this)
}
r(bc, Q);
bc.prototype.c = function () {
    4 == this.m.readyState && (200 <= this.m.status && 400 > this.m.status ? (this.a = this.m.responseText, Mb(this, "load")) : Mb(this, "error"))
};

function cc(a, b, c, d, e) {
    d = d || null;
    a.m.open(b, c);
    e && e.forEach(function (a, b) {
        this.m.setRequestHeader(b, a)
    }, a);
    a.m.send(d)
}
bc.prototype.load = function (a) {
    cc(this, "GET", a)
};

function dc(a) {
    return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
}

function ec(a) {
    a = String(a);
    if (dc(a)) try {
        return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
}

function fc() {}

function gc(a, b, c) {
    if (null == b) c.push("null");
    else {
        if ("object" == typeof b) {
            if (n(b)) {
                var d = b;
                b = d.length;
                c.push("[");
                for (var e = "", f = 0; f < b; f++) c.push(e), gc(a, d[f], c), e = ",";
                c.push("]");
                return
            }
            if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
            else {
                c.push("{");
                e = "";
                for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), ic(d, c), c.push(":"), gc(a, f, c), e = ","));
                c.push("}");
                return
            }
        }
        switch (typeof b) {
            case "string":
                ic(b, c);
                break;
            case "number":
                c.push(isFinite(b) &&
                    !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
}
var jc = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    },
    kc = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

function ic(a, b) {
    b.push('"', a.replace(kc, function (a) {
        var b = jc[a];
        b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), jc[a] = b);
        return b
    }), '"')
};

function lc(a) {
    R.call(this, a)
}
r(lc, R);
lc.prototype.j = function () {
    lc.o.j.call(this);
    gb(this.c(), this.ga)
};

function V(a) {
    R.call(this, a);
    this.f = new bc;
    this.g = null
}
r(V, lc);

function mc(a, b) {
    fb(a.B, String(b));
    S(a.i, "hide", !1)
}

function nc(a, b, c) {
    var d = "";
    d += '<script async src="https://www.publicalbum.org/js/pa-ins.min.js">\x3c/script>\n';
    d += '<ins class="pa-widget-gallery" style="' + ((b ? "width:" + b + ";" : "") + (c ? "height:" + c + ";" : "")) + '"\n';
    ta(a, function (a, b) {
        null !== a && (d += "    data-" + b + '="' + a + '"\n')
    });
    return d += "></ins>\n"
}

function oc(a) {
    if (a.match(/^(\d+)%$/)) return a;
    a = parseInt(Number(a, 10));
    return 0 < a ? a + "px" : null
}

function pc(a) {
    var b = !!a.g;
    if (b) {
        var c = parseInt(a.N.value),
            d = !0 === a.P.checked,
            e = a.O.value,
            f = oc(a.R.value);
        e = oc(e);
        c = nc({
            url: a.L.value,
            uid: a.g,
            delay: 3 != c ? c : null,
            repeat: !0 === d ? !0 : null
        }, f, e);
        fb(a.h, c);
        a.X.innerHTML = String(c);
        Yb()
    }
    S(a.T, "hide", !b);
    S(a.W, "hide", !b)
}

function W(a, b) {
    if (a = Qb(a.c(), b))
        if (a = l(a) ? document.getElementById(a) : a) return a;
    throw Error(b + " not linked.");
}
g = V.prototype;
g.s = function (a) {
    V.o.s.call(this, a);
    this.L = W(this, "inputId");
    W(this, "attrAllowFullscreenId");
    W(this, "attrAllowSlideshowId");
    W(this, "attrAutoplayId");
    this.N = W(this, "attrDelayId");
    this.P = W(this, "attrRepeatId");
    W(this, "attrShuffleId");
    W(this, "attrBackgroundColorId");
    W(this, "attrAllowTransparencyId");
    this.R = W(this, "attrWidthId");
    this.O = W(this, "attrHeightId");
    this.S = W(this, "buttonId");
    this.i = W(this, "errorContainerId");
    this.B = W(this, "errorContentId");
    this.T = W(this, "codeContainerId");
    this.h = W(this, "codeContentId");
    this.U = W(this, "codeCopyButtonId");
    this.W = W(this, "previewContainerId");
    this.X = W(this, "previewContentId");
    pc(this)
};
g.ca = function () {
    S(this.c(), "loading", !1);
    var a = ec(this.f.a);
    if (a)
        if (a.error) {
            a = a.error;
            var b = a.code;
            mc(this, a.message + (b ? " (" + b + ")" : ""))
        } else(a = a[0] ? a[0].result : null) || mc(this, "Invalid result."), this.g = String(a.uid), pc(this), this.c().scrollIntoView({
            behavior: "smooth"
        });
    else mc(this, "Empty response.")
};
g.ba = function () {
    S(this.c(), "loading", !1);
    var a = this.f.m.status;
    mc(this, (this.f.a || "Service is temporary unavailable.") + (a ? " (" + a + ")" : ""))
};
g.Y = function () {
    var a = this.L.value;
    this.g = null;
    fb(this.B, null);
    S(this.i, "hide", !0);
    pc(this);
    a = new x(a);
    var b = new x("api/InsertAlbum/v1/jsonrpc");
    a = [{
        method: "insertAlbumByUrl",
        params: [a.toString()]
    }];
    var c = new u;
    c.set("Content-type", "application/json");
    c.set("Accept", "application/json");
    var d = this.f;
    b = b.toString();
    var e = [];
    gc(new fc, a, e);
    cc(d, "POST", b, e.join(""), c)
};
g.Z = function () {
    try {
        window.getSelection().selectAllChildren(this.h);
        var a = document.execCommand("copy") ? "successful" : "unsuccessful";
        console.log("Copying text command was " + a)
    } catch (b) {
        console.log("Oops, unable to copy", b)
    }
};
g.j = function () {
    V.o.j.call(this);
    this.H || (this.H = new P(this));
    var a = this.H;
    a.l(this.S, "click", this.Y);
    a.l(this.U, "click", this.Z);
    N(this.f, "load", this.ca, !1, this);
    N(this.f, "error", this.ba, !1, this)
};

function qc(a) {
    a = document.getElementById(a);
    Ob(new V, a)
}
var X = ["embedding_google_photos_albums"],
    Y = k;
X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
for (var Z; X.length && (Z = X.shift());) X.length || void 0 === qc ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = qc;
