﻿// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "1",

      macros: [{ function: "__e" }, { function: "__cid" }],
      tags: [
        {
          function: "__rep",
          once_per_event: true,
          vtp_containerId: ["macro", 1],
          tag_id: 1,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cid",
        [46, "a"],
        [
          36,
          [
            17,
            [
              13,
              [41, "$0"],
              [3, "$0", ["require", "getContainerVersion"]],
              ["$0"],
            ],
            "containerId",
          ],
        ],
      ],
    ],
    entities: {
      __cid: { 3: true },
    },
    permissions: {
      __cid: { read_container_data: {} },
    },

    security_groups: {
      google: ["__cid"],
    },
  };

  /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var ba,
    ca = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    da = function (a) {
      return (a.raw = a);
    },
    fa = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ca(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ha =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ia;
  if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
  else {
    var la;
    a: {
      var na = { a: !0 },
        oa = {};
      try {
        oa.__proto__ = na;
        la = oa.a;
        break a;
      } catch (a) {}
      la = !1;
    }
    ia = la
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ia,
    ra = function (a, b) {
      a.prototype = ha(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Vm = b.prototype;
    },
    sa = this || self,
    ta = function (a) {
      return a;
    };
  var ua = function (a, b) {
    this.h = a;
    this.B = b;
  };
  var va = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    },
    wa = function () {
      this.C = {};
      this.D = !1;
      this.K = {};
    },
    xa = function (a, b) {
      var c = [],
        d;
      for (d in a.C)
        if (a.C.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
  wa.prototype.get = function (a) {
    return this.C["dust." + a];
  };
  wa.prototype.set = function (a, b) {
    this.D || ((a = "dust." + a), this.K.hasOwnProperty(a) || (this.C[a] = b));
  };
  wa.prototype.has = function (a) {
    return this.C.hasOwnProperty("dust." + a);
  };
  var ya = function (a, b) {
    b = "dust." + b;
    a.D || a.K.hasOwnProperty(b) || delete a.C[b];
  };
  wa.prototype.xc = function () {
    this.D = !0;
  };
  wa.prototype.Pf = function () {
    return this.D;
  };
  var za = function (a) {
    this.B = new wa();
    this.h = [];
    this.C = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (va(b) ? (this.h[Number(b)] = a[Number(b)]) : this.B.set(b, a[b]));
  };
  ba = za.prototype;
  ba.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof za
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(d.toString());
    }
    return b.join(",");
  };
  ba.set = function (a, b) {
    if (!this.C)
      if ("length" === a) {
        if (!va(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.h.length = Number(b);
      } else va(a) ? (this.h[Number(a)] = b) : this.B.set(a, b);
  };
  ba.get = function (a) {
    return "length" === a
      ? this.length()
      : va(a)
      ? this.h[Number(a)]
      : this.B.get(a);
  };
  ba.length = function () {
    return this.h.length;
  };
  ba.Ub = function () {
    for (var a = xa(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new za(a);
  };
  var Aa = function (a, b) {
    va(b) ? delete a.h[Number(b)] : ya(a.B, b);
  };
  ba = za.prototype;
  ba.pop = function () {
    return this.h.pop();
  };
  ba.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  ba.shift = function () {
    return this.h.shift();
  };
  ba.splice = function (a, b, c) {
    return new za(this.h.splice.apply(this.h, arguments));
  };
  ba.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  ba.has = function (a) {
    return (va(a) && this.h.hasOwnProperty(a)) || this.B.has(a);
  };
  ba.xc = function () {
    this.C = !0;
    Object.freeze(this.h);
    this.B.xc();
  };
  ba.Pf = function () {
    return this.C;
  };
  var Ba = function () {
    this.quota = {};
  };
  Ba.prototype.reset = function () {
    this.quota = {};
  };
  var Ca = function (a, b) {
    this.T = a;
    this.K = function (c, d, e) {
      return c.apply(d, e);
    };
    this.C = b;
    this.B = new wa();
    this.h = this.D = void 0;
  };
  Ca.prototype.add = function (a, b) {
    Da(this, a, b, !1);
  };
  var Da = function (a, b, c, d) {
    if (!a.B.Pf())
      if (d) {
        var e = a.B;
        e.set(b, c);
        e.K["dust." + b] = !0;
      } else a.B.set(b, c);
  };
  Ca.prototype.set = function (a, b) {
    this.B.Pf() ||
      (!this.B.has(a) && this.C && this.C.has(a)
        ? this.C.set(a, b)
        : this.B.set(a, b));
  };
  Ca.prototype.get = function (a) {
    return this.B.has(a) ? this.B.get(a) : this.C ? this.C.get(a) : void 0;
  };
  Ca.prototype.has = function (a) {
    return !!this.B.has(a) || !(!this.C || !this.C.has(a));
  };
  var Ea = function (a) {
    var b = new Ca(a.T, a);
    a.D && (b.D = a.D);
    b.K = a.K;
    b.h = a.h;
    return b;
  };
  var Fa = function () {},
    Ga = function (a) {
      return "function" === typeof a;
    },
    k = function (a) {
      return "string" === typeof a;
    },
    Ia = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ja = Array.isArray,
    Ka = function (a, b) {
      if (a && Ja(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    La = function (a, b) {
      if (!Ia(a) || !Ia(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Oa = function (a, b) {
      for (var c = new Ma(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    m = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Pa = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Qa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ra = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Sa = function (a) {
      var b = [];
      if (Ja(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ta = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ua = function () {
      return new Date(Date.now());
    },
    Va = function () {
      return Ua().getTime();
    },
    Ma = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ma.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ma.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Wa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Xa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ya = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Za = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    $a = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    ab = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    bb = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    cb = /^\w{1,9}$/,
    db = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      m(a, function (d, e) {
        cb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    eb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var gb = function (a, b) {
    wa.call(this);
    this.T = a;
    this.qb = b;
  };
  ra(gb, wa);
  gb.prototype.toString = function () {
    return this.T;
  };
  gb.prototype.Ub = function () {
    return new za(xa(this, 1));
  };
  gb.prototype.h = function (a, b) {
    return this.qb.apply(
      new hb(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  gb.prototype.B = function (a, b) {
    try {
      return this.h.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var jb = function (a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = ib(a, b[d])), c instanceof ua);
        d++
      );
      return c;
    },
    ib = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof gb))
          throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.h.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.D;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
      }
    },
    hb = function (a, b) {
      this.B = a;
      this.h = b;
    },
    D = function (a, b) {
      return Ja(b) ? ib(a.h, b) : b;
    },
    E = function (a) {
      return a.B.T;
    };
  var kb = function () {
    wa.call(this);
  };
  ra(kb, wa);
  kb.prototype.Ub = function () {
    return new za(xa(this, 1));
  };
  var lb = {
    map: function (a) {
      for (var b = new kb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = D(this, arguments[c]) + "",
          e = D(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    list: function (a) {
      for (var b = new za(), c = 0; c < arguments.length; c++) {
        var d = D(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    fn: function (a, b, c) {
      var d = this.h,
        e = D(this, b);
      if (!(e instanceof za))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new gb(
        a,
        (function () {
          return function (g) {
            var h = Ea(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var l = Array.prototype.slice.call(arguments, 0), n = 0;
              n < l.length;
              n++
            )
              if (((l[n] = D(this, l[n])), l[n] instanceof ua)) return l[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new za(l));
            var r = jb(h, f);
            if (r instanceof ua) return "return" === r.h ? r.B : r;
          };
        })()
      );
    },
    control: function (a, b) {
      return new ua(a, D(this, b));
    },
    undefined: function () {},
  };
  var mb = function () {
      this.C = new Ba();
      this.h = new Ca(this.C);
    },
    nb = function (a, b, c) {
      var d = new gb(b, c);
      d.xc();
      a.h.set(b, d);
    },
    ob = function (a, b, c) {
      lb.hasOwnProperty(b) && nb(a, c || b, lb[b]);
    };
  mb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.B(c);
  };
  mb.prototype.B = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = ib(this.h, arguments[c]);
    return b;
  };
  mb.prototype.D = function (a, b) {
    var c = Ea(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = ib(c, arguments[e]);
    return d;
  };
  function pb() {
    for (var a = rb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function sb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var rb, tb;
  function ub(a) {
    rb = rb || sb();
    tb = tb || pb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        l = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(rb[l], rb[n], rb[p], rb[q]);
    }
    return b.join("");
  }
  function vb(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = tb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return l;
    }
    rb = rb || sb();
    tb = tb || pb();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var wb = {},
    xb = function (a, b) {
      wb[a] = wb[a] || [];
      wb[a][b] = !0;
    },
    yb = function () {
      delete wb.GA4_EVENT;
    },
    zb = function (a) {
      var b = wb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return ub(c.join("")).replace(/\.+$/, "");
    };
  var Ab = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var Bb,
    Cb = function () {
      if (void 0 === Bb) {
        var a = null,
          b = sa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ta,
              createScript: ta,
              createScriptURL: ta,
            });
          } catch (c) {
            sa.console && sa.console.error(c.message);
          }
          Bb = a;
        } else Bb = a;
      }
      return Bb;
    };
  var Db = function (a) {
    this.h = a;
  };
  Db.prototype.toString = function () {
    return this.h + "";
  };
  var Eb = function (a) {
      return a instanceof Db && a.constructor === Db
        ? a.h
        : "type_error:TrustedResourceUrl";
    },
    Fb = {},
    Gb = function (a) {
      var b = a,
        c = Cb(),
        d = c ? c.createScriptURL(b) : b;
      return new Db(d, Fb);
    };
  var Hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var Ib, Jb;
  a: {
    for (var Kb = ["CLOSURE_FLAGS"], Lb = sa, Mb = 0; Mb < Kb.length; Mb++)
      if (((Lb = Lb[Kb[Mb]]), null == Lb)) {
        Jb = null;
        break a;
      }
    Jb = Lb;
  }
  var Nb = Jb && Jb[610401301];
  Ib = null != Nb ? Nb : !1;
  function Ob() {
    var a = sa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Pb,
    Qb = sa.navigator;
  Pb = Qb ? Qb.userAgentData || null : null;
  function Rb(a) {
    return Ib
      ? Pb
        ? Pb.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function Sb(a) {
    return -1 != Ob().indexOf(a);
  }
  function Tb() {
    return Ib ? !!Pb && 0 < Pb.brands.length : !1;
  }
  function Ub() {
    return Tb() ? !1 : Sb("Opera");
  }
  function Vb() {
    return Sb("Firefox") || Sb("FxiOS");
  }
  function Wb() {
    return Tb()
      ? Rb("Chromium")
      : ((Sb("Chrome") || Sb("CriOS")) && !(Tb() ? 0 : Sb("Edge"))) ||
          Sb("Silk");
  }
  var Xb = {},
    Yb = function (a) {
      this.h = a;
    };
  Yb.prototype.toString = function () {
    return this.h.toString();
  };
  var Zb = function (a) {
    return a instanceof Yb && a.constructor === Yb
      ? a.h
      : "type_error:SafeHtml";
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var $b = {};
  var ac = function () {},
    bc = function (a) {
      this.h = a;
    };
  ra(bc, ac);
  bc.prototype.toString = function () {
    return this.h;
  };
  function cc(a, b) {
    var c = [new bc(dc[0].toLowerCase(), $b)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof bc) g = f.h;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function ec(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  (function () {
    return "";
  })
    .toString()
    .indexOf("`");
  function fc(a) {
    var b = (a = gc(a)),
      c = Cb(),
      d = c ? c.createHTML(b) : b;
    return new Yb(d, Xb);
  }
  function gc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var z = window,
    G = document,
    hc = navigator,
    jc = G.currentScript && G.currentScript.src,
    kc = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    lc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    mc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    nc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function oc(a, b, c) {
    b &&
      m(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var pc = function (a, b, c, d, e) {
      var f = G.createElement("script");
      oc(f, d, mc);
      f.type = "text/javascript";
      f.async = !0;
      var g;
      g = Gb(gc(a));
      f.src = Eb(g);
      var h,
        l,
        n,
        p =
          null ==
          (n = (l = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(l, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      lc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = G.getElementsByTagName("script")[0] || G.body || G.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    qc = function () {
      if (jc) {
        var a = jc.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    rc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = G.createElement("iframe")), (h = !0));
      oc(g, c, nc);
      d &&
        m(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (h) {
        var l = (G.body && G.body.lastChild) || G.body || G.head;
        l.parentNode.insertBefore(g, l);
      }
      lc(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    sc = function (a, b, c, d) {
      var e = new Image(1, 1);
      oc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    tc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    uc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    H = function (a) {
      z.setTimeout(a, 0);
    },
    vc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    wc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    xc = function (a) {
      var b = G.createElement("div"),
        c = b,
        d = fc("A<div>" + a + "</div>");
      1 === c.nodeType && ec(c);
      c.innerHTML = Zb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    yc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    zc = function (a) {
      var b;
      try {
        b = hc.sendBeacon && hc.sendBeacon(a);
      } catch (c) {
        xb("TAGGING", 15);
      }
      b || sc(a);
    },
    Ac = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Bc = function (a) {
      var b = {
        headers: { "Attribution-Reporting-Eligible": "trigger" },
        keepalive: !0,
        attributionReporting: { eventSourceEligible: !0, triggerEligible: !0 },
      };
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    Cc = function () {
      var a = z.performance;
      if (a && Ga(a.now)) return a.now();
    },
    Dc = function () {
      return z.performance || void 0;
    };
  var Ec = function (a, b) {
      return D(this, a) && D(this, b);
    },
    Fc = function (a, b) {
      return D(this, a) === D(this, b);
    },
    Gc = function (a, b) {
      return D(this, a) || D(this, b);
    },
    Hc = function (a, b) {
      a = D(this, a);
      b = D(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    Ic = function (a, b) {
      a = String(D(this, a));
      b = String(D(this, b));
      return a.substring(0, b.length) === b;
    },
    Jc = function (a, b) {
      a = D(this, a);
      b = D(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof kb &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var Lc = function () {
    this.h = new mb();
    Kc(this);
  };
  Lc.prototype.execute = function (a) {
    return this.h.B(a);
  };
  var Kc = function (a) {
    ob(a.h, "map");
    var b = function (c, d) {
      nb(a.h, c, d);
    };
    b("and", Ec);
    b("contains", Hc);
    b("equals", Fc);
    b("or", Gc);
    b("startsWith", Ic);
    b("variable", Jc);
  };
  var Mc = function () {
    this.map = new Map();
  };
  Mc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Mc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var Nc = function () {
    this.keys = [];
    this.values = [];
  };
  Nc.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  Nc.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  var Oc = function (a) {
    if (a instanceof Oc) return a;
    this.ra = a;
  };
  Oc.prototype.toString = function () {
    return String(this.ra);
  };
  var Qc = function (a) {
    wa.call(this);
    this.h = a;
    this.set("then", Pc(this));
    this.set("catch", Pc(this, !0));
    this.set("finally", Pc(this, !1, !0));
  };
  ra(Qc, kb);
  var Pc = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new gb("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof gb || (d = void 0);
      e instanceof gb || (e = void 0);
      var f = Ea(this.h),
        g = function (l) {
          return function (n) {
            return c ? (l.h(f), a.h) : l.h(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new Qc(h);
    });
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Rc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Sc = function (a) {
      if (null == a) return String(a);
      var b = Rc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Tc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Uc = function (a) {
      if (!a || "object" != Sc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Tc(a, "constructor") &&
          !Tc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Tc(a, b);
    },
    I = function (a, b) {
      var c = b || ("array" == Sc(a) ? [] : {}),
        d;
      for (d in a)
        if (Tc(a, d)) {
          var e = a[d];
          "array" == Sc(e)
            ? ("array" != Sc(c[d]) && (c[d] = []), (c[d] = I(e, c[d])))
            : Uc(e)
            ? (Uc(c[d]) || (c[d] = {}), (c[d] = I(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Wc = function (a, b, c) {
      var d = Map ? new Mc() : new Nc(),
        e = function (g, h) {
          for (var l = xa(g, 1), n = 0; n < l.length; n++)
            h[l[n]] = f(g.get(l[n]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (g instanceof za) {
            var l = [];
            d.set(g, l);
            for (var n = g.Ub(), p = 0; p < n.length(); p++)
              l[n.get(p)] = f(g.get(n.get(p)));
            return l;
          }
          if (g instanceof Qc) return g.h;
          if (g instanceof kb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof gb) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = Vc(u[v], b, c);
              var w = new Ca(b ? b.T : new Ba());
              b && (w.h = b.h);
              return f(g.h.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof Oc && t) return g.ra;
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    Vc = function (a, b, c) {
      var d = Map ? new Mc() : new Nc(),
        e = function (g, h) {
          for (var l in g) g.hasOwnProperty(l) && h.set(l, f(g[l]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (Ja(g) || Pa(g)) {
            var l = new za([]);
            d.set(g, l);
            for (var n in g) g.hasOwnProperty(n) && l.set(n, f(g[n]));
            return l;
          }
          if (Uc(g)) {
            var p = new kb();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new gb("", function (x) {
              for (
                var y = Array.prototype.slice.call(arguments, 0), A = 0;
                A < y.length;
                A++
              )
                y[A] = Wc(D(this, y[A]), b, c);
              return f((0, this.h.K)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new Oc(g);
        };
      return f(a);
    };
  var Xc = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    Yc = function (a) {
      if (void 0 === a || Ja(a) || Uc(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    };
  var Zc = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof za)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new za(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
      return new za(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.h(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
      return new za(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = Xc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : Aa(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new za(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Xc(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.h(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : Aa(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var $c = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    ad = new ua("break"),
    bd = new ua("continue"),
    cd = function (a, b) {
      return D(this, a) + D(this, b);
    },
    ed = function (a, b) {
      return D(this, a) && D(this, b);
    },
    fd = function (a, b, c) {
      a = D(this, a);
      b = D(this, b);
      c = D(this, c);
      if (!(c instanceof za))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't read property " + b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = Wc(c.get(0));
            try {
              return a.toString(e);
            } catch (r) {}
          }
          return a.toString();
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if ($c.hasOwnProperty(b)) {
          var f = 2;
          f = 1;
          var g = Wc(c, void 0, f);
          return Vc(a[b].apply(a, g), this.h);
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof za) {
        if (a.has(b)) {
          var h = a.get(b);
          if (h instanceof gb) {
            var l = Xc(c);
            l.unshift(this.h);
            return h.h.apply(h, l);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if (0 <= Zc.supportedMethods.indexOf(b)) {
          var n = Xc(c);
          n.unshift(this.h);
          return Zc[b].apply(a, n);
        }
      }
      if (a instanceof gb || a instanceof kb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof gb) {
            var q = Xc(c);
            q.unshift(this.h);
            return p.h.apply(p, q);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof gb ? a.T : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, Xc(c));
      }
      if (a instanceof Oc && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    gd = function (a, b) {
      a = D(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = D(this, b);
      c.set(a, d);
      return d;
    },
    hd = function (a) {
      var b = Ea(this.h),
        c = jb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof ua) return c;
    },
    id = function () {
      return ad;
    },
    jd = function (a) {
      for (var b = D(this, a), c = 0; c < b.length; c++) {
        var d = D(this, b[c]);
        if (d instanceof ua) return d;
      }
    },
    kd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = D(this, arguments[c + 1]);
          Da(b, d, e, !0);
        }
      }
    },
    ld = function () {
      return bd;
    },
    md = function (a, b, c) {
      var d = new za();
      b = D(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.h.add(a, D(this, f));
    },
    nd = function (a, b) {
      return D(this, a) / D(this, b);
    },
    od = function (a, b) {
      a = D(this, a);
      b = D(this, b);
      var c = a instanceof Oc,
        d = b instanceof Oc;
      return c || d ? (c && d ? a.ra == b.ra : !1) : a == b;
    },
    pd = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = D(this, arguments[c]);
      return b;
    };
  function qd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = jb(f, d);
      if (g instanceof ua) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function rd(a, b, c) {
    if ("string" === typeof b)
      return qd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof kb || b instanceof za || b instanceof gb) {
      var d = b.Ub(),
        e = d.length();
      return qd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var sd = function (a, b, c) {
      a = D(this, a);
      b = D(this, b);
      c = D(this, c);
      var d = this.h;
      return rd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    td = function (a, b, c) {
      a = D(this, a);
      b = D(this, b);
      c = D(this, c);
      var d = this.h;
      return rd(
        function (e) {
          var f = Ea(d);
          Da(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    ud = function (a, b, c) {
      a = D(this, a);
      b = D(this, b);
      c = D(this, c);
      var d = this.h;
      return rd(
        function (e) {
          var f = Ea(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    wd = function (a, b, c) {
      a = D(this, a);
      b = D(this, b);
      c = D(this, c);
      var d = this.h;
      return vd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    xd = function (a, b, c) {
      a = D(this, a);
      b = D(this, b);
      c = D(this, c);
      var d = this.h;
      return vd(
        function (e) {
          var f = Ea(d);
          Da(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    yd = function (a, b, c) {
      a = D(this, a);
      b = D(this, b);
      c = D(this, c);
      var d = this.h;
      return vd(
        function (e) {
          var f = Ea(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function vd(a, b, c) {
    if ("string" === typeof b)
      return qd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof za)
      return qd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    throw new TypeError("The value is not iterable.");
  }
  var zd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = D(this, a);
      if (!(f instanceof za))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.h;
      d = D(this, d);
      var h = Ea(g);
      for (e(g, h); ib(h, b); ) {
        var l = jb(h, d);
        if (l instanceof ua) {
          if ("break" === l.h) break;
          if ("return" === l.h) return l;
        }
        var n = Ea(g);
        e(h, n);
        ib(n, c);
        h = n;
      }
    },
    Ad = function (a) {
      a = D(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Bd = function (a, b) {
      var c;
      a = D(this, a);
      b = D(this, b);
      if (void 0 === a || null === a)
        throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof kb || a instanceof za || a instanceof gb) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : va(b) && (c = a[b]);
      else if (a instanceof Oc) return;
      return c;
    },
    Cd = function (a, b) {
      return D(this, a) > D(this, b);
    },
    Dd = function (a, b) {
      return D(this, a) >= D(this, b);
    },
    Ed = function (a, b) {
      a = D(this, a);
      b = D(this, b);
      a instanceof Oc && (a = a.ra);
      b instanceof Oc && (b = b.ra);
      return a === b;
    },
    Fd = function (a, b) {
      return !Ed.call(this, a, b);
    },
    Gd = function (a, b, c) {
      var d = [];
      D(this, a) ? (d = D(this, b)) : c && (d = D(this, c));
      var e = jb(this.h, d);
      if (e instanceof ua) return e;
    },
    Hd = function (a, b) {
      return D(this, a) < D(this, b);
    },
    Id = function (a, b) {
      return D(this, a) <= D(this, b);
    },
    Jd = function (a, b) {
      return D(this, a) % D(this, b);
    },
    Kd = function (a, b) {
      return D(this, a) * D(this, b);
    },
    Ld = function (a) {
      return -D(this, a);
    },
    Md = function (a) {
      return !D(this, a);
    },
    Nd = function (a, b) {
      return !od.call(this, a, b);
    },
    Od = function () {
      return null;
    },
    Pd = function (a, b) {
      return D(this, a) || D(this, b);
    },
    Qd = function (a, b) {
      var c = D(this, a);
      D(this, b);
      return c;
    },
    Rd = function (a) {
      return D(this, a);
    },
    Sd = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    Td = function (a) {
      return new ua("return", D(this, a));
    },
    Ud = function (a, b, c) {
      a = D(this, a);
      b = D(this, b);
      c = D(this, c);
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof gb || a instanceof za || a instanceof kb) && a.set(b, c);
      return c;
    },
    Vd = function (a, b) {
      return D(this, a) - D(this, b);
    },
    Wd = function (a, b, c) {
      a = D(this, a);
      var d = D(this, b),
        e = D(this, c);
      if (!Ja(d) || !Ja(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === D(this, d[h]))
          if (((f = D(this, e[h])), f instanceof ua)) {
            var l = f.h;
            if ("break" === l) return;
            if ("return" === l || "continue" === l) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = D(this, e[e.length - 1])),
        f instanceof ua && ("return" === f.h || "continue" === f.h))
      )
        return f;
    },
    Xd = function (a, b, c) {
      return D(this, a) ? D(this, b) : D(this, c);
    },
    Yd = function (a) {
      a = D(this, a);
      return a instanceof gb ? "function" : typeof a;
    },
    Zd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    $d = function (a, b, c, d) {
      var e = D(this, d);
      if (D(this, c)) {
        var f = jb(this.h, e);
        if (f instanceof ua) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; D(this, a); ) {
        var g = jb(this.h, e);
        if (g instanceof ua) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        D(this, b);
      }
    },
    ae = function (a) {
      return ~Number(D(this, a));
    },
    be = function (a, b) {
      return Number(D(this, a)) << Number(D(this, b));
    },
    ce = function (a, b) {
      return Number(D(this, a)) >> Number(D(this, b));
    },
    de = function (a, b) {
      return Number(D(this, a)) >>> Number(D(this, b));
    },
    ee = function (a, b) {
      return Number(D(this, a)) & Number(D(this, b));
    },
    fe = function (a, b) {
      return Number(D(this, a)) ^ Number(D(this, b));
    },
    ge = function (a, b) {
      return Number(D(this, a)) | Number(D(this, b));
    };
  var ie = function () {
    this.h = new mb();
    he(this);
  };
  ie.prototype.execute = function (a) {
    return je(this.h.B(a));
  };
  var ke = function (a, b, c) {
      return je(a.h.D(b, c));
    },
    he = function (a) {
      var b = function (d, e) {
        ob(a.h, d, String(e));
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function (d, e) {
        nb(a.h, String(d), e);
      };
      c(0, cd);
      c(1, ed);
      c(2, fd);
      c(3, gd);
      c(53, hd);
      c(4, id);
      c(5, jd);
      c(52, kd);
      c(6, ld);
      c(9, jd);
      c(50, md);
      c(10, nd);
      c(12, od);
      c(13, pd);
      c(47, sd);
      c(54, td);
      c(55, ud);
      c(63, zd);
      c(64, wd);
      c(65, xd);
      c(66, yd);
      c(15, Ad);
      c(16, Bd);
      c(17, Bd);
      c(18, Cd);
      c(19, Dd);
      c(20, Ed);
      c(21, Fd);
      c(22, Gd);
      c(23, Hd);
      c(24, Id);
      c(25, Jd);
      c(26, Kd);
      c(27, Ld);
      c(28, Md);
      c(29, Nd);
      c(45, Od);
      c(30, Pd);
      c(32, Qd);
      c(33, Qd);
      c(34, Rd);
      c(35, Rd);
      c(46, Sd);
      c(36, Td);
      c(43, Ud);
      c(37, Vd);
      c(38, Wd);
      c(39, Xd);
      c(40, Yd);
      c(41, Zd);
      c(42, $d);
      c(58, ae);
      c(57, be);
      c(60, ce);
      c(61, de);
      c(56, ee);
      c(62, fe);
      c(59, ge);
    };
  function je(a) {
    if (
      a instanceof ua ||
      a instanceof gb ||
      a instanceof za ||
      a instanceof kb ||
      a instanceof Oc ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  function le(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function me(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function ne(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + le(c) + le(d);
      case 1:
        return "G2" + me(c) + me(d);
      default:
        return "g1--";
    }
  }
  var oe = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Yj: a("consent"),
      gi: a("convert_case_to"),
      hi: a("convert_false_to"),
      ii: a("convert_null_to"),
      ji: a("convert_true_to"),
      ki: a("convert_undefined_to"),
      Em: a("debug_mode_metadata"),
      Tb: a("function"),
      Yg: a("instance_name"),
      Ak: a("live_only"),
      Bk: a("malware_disabled"),
      Ck: a("metadata"),
      Fk: a("original_activity_id"),
      Lm: a("original_vendor_template_id"),
      Km: a("once_on_load"),
      Ek: a("once_per_event"),
      fj: a("once_per_load"),
      Pm: a("priority_override"),
      Qm: a("respected_consent_types"),
      kj: a("setup_tags"),
      pe: a("tag_id"),
      pj: a("teardown_tags"),
    };
  })();
  var Ke;
  var Le = [],
    Me = [],
    Ne = [],
    Oe = [],
    Pe = [],
    Qe = {},
    Re,
    Se,
    Ue = function () {
      var a = Te;
      Se = Se || a;
    },
    We = function () {
      for (
        var a = data.resource || {}, b = a.macros || [], c = 0;
        c < b.length;
        c++
      )
        Le.push(b[c]);
      for (var d = a.tags || [], e = 0; e < d.length; e++) Oe.push(d[e]);
      for (var f = a.predicates || [], g = 0; g < f.length; g++) Ne.push(f[g]);
      for (var h = a.rules || [], l = 0; l < h.length; l++) {
        for (var n = h[l], p = {}, q = 0; q < n.length; q++) {
          var r = n[q][0];
          p[r] = Array.prototype.slice.call(n[q], 1);
          ("if" !== r && "unless" !== r) || Ve(p[r]);
        }
        Me.push(p);
      }
    },
    Ve = function (a) {},
    Xe,
    Ye = [],
    Ze = function (a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    $e = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Qe[c],
        f = b && 2 === b.type && d.Mj && e && -1 !== Ye.indexOf(c),
        g = {},
        h = {},
        l;
      for (l in a)
        a.hasOwnProperty(l) &&
          0 === l.indexOf("vtp_") &&
          (e && d && d.vj && d.vj(a[l]), e && (g[l] = a[l]), !e || f) &&
          (h[l.substr(4)] = a[l]);
      e && d && d.uj && (g.vtp_gtmCachedValues = d.uj);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";
            else {
              var q;
              switch (b.type) {
                case 2:
                  q = Le[p];
                  break;
                case 1:
                  q = Oe[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[oe.Yg];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var t, u;
      e && (t = e(g));
      if (!e || f) u = Ke(c, h, b);
      f && t !== u && d && d.Mj(d.id, c);
      return e ? t : u;
    },
    bf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = af(a[e], b, c));
      return d;
    },
    af = function (a, b, c) {
      if (Ja(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(af(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = Le[f];
            if (!g || b.wh(g)) return;
            c[f] = !0;
            var h = String(g[oe.Yg]);
            try {
              var l = bf(g, b, c);
              l.vtp_gtmEventId = b.id;
              b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
              d = $e(l, {
                event: b,
                index: f,
                type: 2,
                name: h,
              });
              Xe && (d = Xe.Pk(d, l));
            } catch (y) {
              b.Fj && b.Fj(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[af(a[n], b, c)] = af(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = af(a[q], b, c);
              Se && (p = p || r === Se.wf);
              d.push(r);
            }
            return Se && p ? Se.Qk(d) : d.join("");
          case "escape":
            d = af(a[1], b, c);
            if (Se && Ja(a[1]) && "macro" === a[1][0] && Se.Al(a))
              return Se.Wl(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) pe[a[t]] && (d = pe[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Oe[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { Aj: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = cf(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    cf = function (a, b, c) {
      try {
        return Re(bf(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var df = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  ra(df, Error);
  function ef(a, b) {
    if (Ja(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) ef(a[c], b[c]);
    }
  }
  var gf = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Ql = a;
    this.B = b;
    this.h = [];
  };
  ra(gf, Error);
  var jf = function () {
    return function (a, b) {
      a instanceof gf || (a = new gf(a, hf));
      b && a.h.push(b);
      throw a;
    };
  };
  function hf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Ia(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var mf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = kf(a), f = 0; f < Me.length; f++) {
        var g = Me[f],
          h = lf(g, e);
        if (h) {
          for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < Oe.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    lf = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    kf = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = cf(Ne[c], a));
        return b[c];
      };
    };
  var nf = {
    Pk: function (a, b) {
      b[oe.gi] &&
        "string" === typeof a &&
        (a = 1 == b[oe.gi] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(oe.ii) && null === a && (a = b[oe.ii]);
      b.hasOwnProperty(oe.ki) && void 0 === a && (a = b[oe.ki]);
      b.hasOwnProperty(oe.ji) && !0 === a && (a = b[oe.ji]);
      b.hasOwnProperty(oe.hi) && !1 === a && (a = b[oe.hi]);
      return a;
    },
  };
  var of = function () {
    this.h = {};
  };
  function pf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e].call(void 0, b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new df(c, d, g);
      }
  }
  function qf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          pf(e, b, d, g);
          pf(f, b, d, g);
        }
      }
    };
  }
  var uf = function () {
      var a = data.permissions || {},
        b = rf.ctid,
        c = this;
      this.B = new of();
      this.h = {};
      var d = {},
        e = qf(this.B, b, function () {
          var f = arguments[0];
          return f && d[f]
            ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      m(a, function (f, g) {
        var h = {};
        m(g, function (l, n) {
          var p = sf(l, n);
          h[l] = p.assert;
          d[l] || (d[l] = p.N);
        });
        c.h[f] = function (l, n) {
          var p = h[l];
          if (!p)
            throw tf(
              l,
              {},
              "The requested permission " + l + " is not configured."
            );
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    wf = function (a) {
      return vf.h[a] || function () {};
    };
  function sf(a, b) {
    var c = Ze(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = tf;
    try {
      return $e(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new df(e, {}, "Permission " + e + " is unknown.");
        },
        N: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function tf(a, b, c) {
    return new df(a, b, c);
  }
  var xf = !1;
  var yf = {};
  yf.Cm = Ra("");
  yf.Sk = Ra("");
  var zf = xf,
    Af = yf.Sk,
    Bf = yf.Cm;
  var Pf = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function Qf(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Rf = new Ma();
  function Sf(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Rf.get(e);
      f || ((f = new RegExp(b, d)), Rf.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Tf(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function Uf(a, b) {
    return String(a) === String(b);
  }
  function Vf(a, b) {
    return Number(a) >= Number(b);
  }
  function Wf(a, b) {
    return Number(a) <= Number(b);
  }
  function Xf(a, b) {
    return Number(a) > Number(b);
  }
  function Yf(a, b) {
    return Number(a) < Number(b);
  }
  function Zf(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var fg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function gg(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var hg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    ig = { Fn: "function", DustMap: "Object", List: "Array" },
    L = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = hg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          l = c[d];
        if (null == l) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof l;
          l instanceof gb
            ? (n = "Fn")
            : l instanceof za
            ? (n = "List")
            : l instanceof kb
            ? (n = "DustMap")
            : l instanceof Oc && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (ig[n] || n) +
                ", which does not match required type " +
                (ig[h] || h) +
                "."
            );
        }
      }
    };
  function jg(a) {
    return "" + a;
  }
  function kg(a, b) {
    var c = [];
    return c;
  }
  var lg = function (a, b) {
      var c = new gb(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = D(this, d[e]);
        return b.apply(this, d);
      });
      c.xc();
      return c;
    },
    mg = function (a, b) {
      var c = new kb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ga(e)
            ? c.set(d, lg(a + "_" + d, e))
            : Uc(e)
            ? c.set(d, mg(a + "_" + d, e))
            : (Ia(e) || k(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.xc();
      return c;
    };
  var ng = function (a, b) {
    L(E(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new kb();
    return (d = mg("AssertApiSubject", c));
  };
  var og = function (a, b) {
    L(E(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof Qc)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new kb();
    return (d = mg("AssertThatSubject", c));
  };
  function pg(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(Wc(arguments[d], c));
      return Vc(a.apply(null, b));
    };
  }
  var rg = function () {
    for (var a = Math, b = qg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = pg(a[e].bind(a)));
    }
    return c;
  };
  var sg = function (a) {
    var b;
    return b;
  };
  var tg = function (a) {
    var b;
    return b;
  };
  var ug = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var vg = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function wg(a, b) {
    var c = !1;
    return c;
  }
  wg.I = "internal.evaluateBooleanExpression";
  var Dg = function (a) {
    L(E(this), ["message:?string"], arguments);
  };
  var Eg = function (a, b) {
    L(E(this), ["min:!number", "max:!number"], arguments);
    return La(a, b);
  };
  var M = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    d.tj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var Fg = function () {
    M(this, "read_container_data");
    var a = new kb();
    a.set("containerId", "UA-23581568-13");
    a.set("version", "1");
    a.set("environmentName", "");
    a.set("debugMode", zf);
    a.set("previewMode", Bf);
    a.set("environmentMode", Af);
    a.xc();
    return a;
  };
  var Gg = function () {
    return new Date().getTime();
  };
  var Hg = function (a) {
    if (null === a) return "null";
    if (a instanceof za) return "array";
    if (a instanceof gb) return "function";
    if (a instanceof Oc) {
      a = a.ra;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Ig = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (zf || Bf) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return Vc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(Wc(c));
      }),
    };
  };
  var Jg = function (a) {
    return Qa(Wc(a, this.h));
  };
  var Kg = function (a) {
    return Number(Wc(a, this.h));
  };
  var Lg = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var Mg = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var qg = "floor ceil round max min abs pow sqrt".split(" ");
  var Ng = function () {
      var a = {};
      return {
        fl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        qm: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Og = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return gb.prototype.h.apply(a, c);
      };
    },
    Pg = function (a, b) {
      L(E(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var Qg = {};
  Qg.keys = function (a) {
    return new za();
  };
  Qg.values = function (a) {
    return new za();
  };
  Qg.entries = function (a) {
    return new za();
  };
  Qg.freeze = function (a) {
    return a;
  };
  Qg.delete = function (a, b) {
    return !1;
  };
  var Sg = function () {
    this.h = {};
    this.B = {};
  };
  Sg.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  Sg.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.B.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.h[a] = c ? void 0 : Ga(b) ? lg(a, b) : mg(a, b);
  };
  function Tg(a, b) {
    var c = void 0;
    return c;
  }
  function Ug() {
    var a = {};
    return a;
  }
  var Wg = function (a) {
      return Vg ? G.querySelectorAll(a) : null;
    },
    Xg = function (a, b) {
      if (!Vg) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!G.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Yg = !1;
  if (G.querySelectorAll)
    try {
      var Zg = G.querySelectorAll(":root");
      Zg && 1 == Zg.length && Zg[0] == G.documentElement && (Yg = !0);
    } catch (a) {}
  var Vg = Yg;
  var N = function (a) {
    xb("GTM", a);
  };
  var O = {
      g: {
        xd: "ad_personalization",
        H: "ad_storage",
        Jb: "ad_user_data",
        P: "analytics_storage",
        Ua: "region",
        yd: "consent_updated",
        Xe: "wait_for_update",
        li: "ads",
        fg: "all",
        mi: "play",
        ni: "search",
        oi: "youtube",
        ri: "app_remove",
        si: "app_store_refund",
        ui: "app_store_subscription_cancel",
        vi: "app_store_subscription_convert",
        wi: "app_store_subscription_renew",
        hg: "add_payment_info",
        ig: "add_shipping_info",
        ac: "add_to_cart",
        bc: "remove_from_cart",
        jg: "view_cart",
        Kb: "begin_checkout",
        fc: "select_item",
        Ya: "view_item_list",
        rb: "select_promotion",
        Za: "view_promotion",
        sa: "purchase",
        hc: "refund",
        Da: "view_item",
        kg: "add_to_wishlist",
        ek: "exception",
        xi: "first_open",
        yi: "first_visit",
        ka: "gtag.config",
        Ia: "gtag.get",
        zi: "in_app_purchase",
        ic: "page_view",
        fk: "screen_view",
        Ai: "session_start",
        gk: "timing_complete",
        hk: "track_social",
        Ad: "user_engagement",
        sb: "gclid",
        la: "ads_data_redaction",
        Z: "allow_ad_personalization_signals",
        Bd: "allow_custom_scripts",
        Ze: "allow_display_features",
        Cd: "allow_enhanced_conversions",
        tb: "allow_google_signals",
        Ea: "allow_interest_groups",
        ik: "app_id",
        jk: "app_installer_id",
        kk: "app_name",
        lk: "app_version",
        jc: "auid",
        Bi: "auto_detection_enabled",
        Lb: "aw_remarketing",
        af: "aw_remarketing_only",
        Dd: "discount",
        Ed: "aw_feed_country",
        Fd: "aw_feed_language",
        W: "items",
        Gd: "aw_merchant_id",
        lg: "aw_basket_type",
        Lc: "campaign_content",
        Mc: "campaign_id",
        Nc: "campaign_medium",
        Oc: "campaign_name",
        Pc: "campaign",
        Qc: "campaign_source",
        Rc: "campaign_term",
        ab: "client_id",
        Ci: "content_group",
        Di: "content_type",
        Ja: "conversion_cookie_prefix",
        Sc: "conversion_id",
        ya: "conversion_linker",
        Mb: "conversion_api",
        Ma: "cookie_domain",
        Fa: "cookie_expires",
        Na: "cookie_flags",
        kc: "cookie_name",
        Tc: "cookie_path",
        Ka: "cookie_prefix",
        eb: "cookie_update",
        ub: "country",
        wa: "currency",
        Hd: "customer_lifetime_value",
        mc: "custom_map",
        Ei: "gcldc",
        Fi: "debug_mode",
        X: "developer_id",
        Gi: "disable_merchant_reported_purchases",
        nc: "dc_custom_params",
        mg: "dc_natural_search",
        ng: "dynamic_event_settings",
        og: "affiliation",
        Id: "checkout_option",
        bf: "checkout_step",
        pg: "coupon",
        Uc: "item_list_name",
        cf: "list_name",
        Hi: "promotions",
        Vc: "shipping",
        df: "tax",
        Jd: "engagement_time_msec",
        Wc: "enhanced_client_id",
        Xc: "enhanced_conversions",
        qg: "enhanced_conversions_automatic_settings",
        Kd: "estimated_delivery_date",
        ef: "euid_logged_in_state",
        Yc: "event_callback",
        mk: "event_category",
        vb: "event_developer_id_string",
        nk: "event_label",
        rg: "event",
        Ld: "event_settings",
        Md: "event_timeout",
        pk: "description",
        qk: "fatal",
        Ii: "experiments",
        ff: "firebase_id",
        Nd: "first_party_collection",
        Od: "_x_20",
        Nb: "_x_19",
        sg: "fledge",
        ug: "flight_error_code",
        vg: "flight_error_message",
        Ji: "fl_activity_category",
        Ki: "fl_activity_group",
        wg: "fl_advertiser_id",
        Li: "fl_ar_dedupe",
        Mi: "fl_random_number",
        Ni: "tran",
        Oi: "u",
        Pd: "gac_gclid",
        oc: "gac_wbraid",
        xg: "gac_wbraid_multiple_conversions",
        yg: "ga_restrict_domain",
        hf: "ga_temp_client_id",
        Qd: "gdpr_applies",
        zg: "geo_granularity",
        fb: "value_callback",
        Oa: "value_key",
        rk: "google_ono",
        hb: "google_signals",
        Ag: "google_tld",
        Rd: "groups",
        Bg: "gsa_experiment_id",
        Cg: "iframe_state",
        Sd: "ignore_referrer",
        jf: "internal_traffic_results",
        Ob: "is_legacy_converted",
        xb: "is_legacy_loaded",
        Td: "is_passthrough",
        za: "language",
        kf: "legacy_developer_id_string",
        Aa: "linker",
        qc: "accept_incoming",
        yb: "decorate_forms",
        U: "domains",
        Pb: "url_position",
        Dg: "method",
        sk: "name",
        Zc: "new_customer",
        Eg: "non_interaction",
        Pi: "optimize_id",
        lf: "page_hostname",
        Qb: "page_path",
        Ga: "page_referrer",
        zb: "page_title",
        Fg: "passengers",
        Gg: "phone_conversion_callback",
        Qi: "phone_conversion_country_code",
        Hg: "phone_conversion_css_class",
        Ri: "phone_conversion_ids",
        Ig: "phone_conversion_number",
        Jg: "phone_conversion_options",
        sc: "quantity",
        ad: "redact_device_info",
        nf: "redact_enhanced_user_id",
        Si: "redact_ga_client_id",
        Ti: "redact_user_id",
        Ud: "referral_exclusion_definition",
        Rb: "restricted_data_processing",
        Ui: "retoken",
        tk: "sample_rate",
        pf: "screen_name",
        Ab: "screen_resolution",
        Vi: "search_term",
        Pa: "send_page_view",
        Sb: "send_to",
        qf: "server_container_url",
        bd: "session_duration",
        Vd: "session_engaged",
        rf: "session_engaged_time",
        ib: "session_id",
        Wd: "session_number",
        dd: "delivery_postal_code",
        Kg: "temporary_client_id",
        tf: "topmost_url",
        Wi: "tracking_id",
        uf: "traffic_type",
        ma: "transaction_id",
        uc: "transport_url",
        Lg: "trip_type",
        vc: "update",
        jb: "url_passthrough",
        Yd: "_user_agent_architecture",
        Zd: "_user_agent_bitness",
        ae: "_user_agent_full_version_list",
        be: "_user_agent_mobile",
        ce: "_user_agent_model",
        de: "_user_agent_platform",
        ee: "_user_agent_platform_version",
        fe: "_user_agent_wow64",
        na: "user_data",
        Mg: "user_data_auto_latency",
        Ng: "user_data_auto_meta",
        Og: "user_data_auto_multi",
        Pg: "user_data_auto_selectors",
        Qg: "user_data_auto_status",
        vf: "user_data_mode",
        Rg: "user_data_settings",
        Ba: "user_id",
        Qa: "user_properties",
        Sg: "us_privacy_string",
        aa: "value",
        wc: "wbraid",
        Tg: "wbraid_multiple_conversions",
        cj: "_host_name",
        dj: "_in_page_command",
        ej: "_is_passthrough_cid",
        yf: "non_personalized_ads",
        oe: "_sst_parameters",
        cb: "conversion_label",
        fa: "page_location",
        wb: "global_developer_id_string",
        Xd: "tc_privacy_string",
      },
    },
    wh = {},
    xh = Object.freeze(
      ((wh[O.g.Z] = 1),
      (wh[O.g.Ze] = 1),
      (wh[O.g.Cd] = 1),
      (wh[O.g.tb] = 1),
      (wh[O.g.W] = 1),
      (wh[O.g.Ma] = 1),
      (wh[O.g.Fa] = 1),
      (wh[O.g.Na] = 1),
      (wh[O.g.kc] = 1),
      (wh[O.g.Tc] = 1),
      (wh[O.g.Ka] = 1),
      (wh[O.g.eb] = 1),
      (wh[O.g.mc] = 1),
      (wh[O.g.X] = 1),
      (wh[O.g.ng] = 1),
      (wh[O.g.Yc] = 1),
      (wh[O.g.Ld] = 1),
      (wh[O.g.Md] = 1),
      (wh[O.g.Nd] = 1),
      (wh[O.g.yg] = 1),
      (wh[O.g.hb] = 1),
      (wh[O.g.Ag] = 1),
      (wh[O.g.Rd] = 1),
      (wh[O.g.jf] = 1),
      (wh[O.g.Ob] = 1),
      (wh[O.g.xb] = 1),
      (wh[O.g.Aa] = 1),
      (wh[O.g.nf] = 1),
      (wh[O.g.Ud] = 1),
      (wh[O.g.Rb] = 1),
      (wh[O.g.Pa] = 1),
      (wh[O.g.Sb] = 1),
      (wh[O.g.qf] = 1),
      (wh[O.g.bd] = 1),
      (wh[O.g.rf] = 1),
      (wh[O.g.dd] = 1),
      (wh[O.g.uc] = 1),
      (wh[O.g.vc] = 1),
      (wh[O.g.Rg] = 1),
      (wh[O.g.Qa] = 1),
      (wh[O.g.oe] = 1),
      wh)
    );
  Object.freeze([
    O.g.fa,
    O.g.Ga,
    O.g.zb,
    O.g.za,
    O.g.pf,
    O.g.Ba,
    O.g.ff,
    O.g.Ci,
  ]);
  var yh = {},
    zh = Object.freeze(
      ((yh[O.g.ri] = 1),
      (yh[O.g.si] = 1),
      (yh[O.g.ui] = 1),
      (yh[O.g.vi] = 1),
      (yh[O.g.wi] = 1),
      (yh[O.g.xi] = 1),
      (yh[O.g.yi] = 1),
      (yh[O.g.zi] = 1),
      (yh[O.g.Ai] = 1),
      (yh[O.g.Ad] = 1),
      yh)
    ),
    Ah = {},
    Bh = Object.freeze(
      ((Ah[O.g.hg] = 1),
      (Ah[O.g.ig] = 1),
      (Ah[O.g.ac] = 1),
      (Ah[O.g.bc] = 1),
      (Ah[O.g.jg] = 1),
      (Ah[O.g.Kb] = 1),
      (Ah[O.g.fc] = 1),
      (Ah[O.g.Ya] = 1),
      (Ah[O.g.rb] = 1),
      (Ah[O.g.Za] = 1),
      (Ah[O.g.sa] = 1),
      (Ah[O.g.hc] = 1),
      (Ah[O.g.Da] = 1),
      (Ah[O.g.kg] = 1),
      Ah)
    ),
    Ch = Object.freeze([O.g.Z, O.g.tb, O.g.eb]),
    Dh = Object.freeze([].concat(Ch)),
    Eh = Object.freeze([O.g.Fa, O.g.Md, O.g.bd, O.g.rf, O.g.Jd]),
    Fh = Object.freeze([].concat(Eh)),
    Gh = {},
    Hh =
      ((Gh[O.g.H] = "1"),
      (Gh[O.g.P] = "2"),
      (Gh[O.g.Jb] = "3"),
      (Gh[O.g.xd] = "4"),
      Gh),
    Ih = {},
    Jh = Object.freeze(
      ((Ih[O.g.Z] = 1),
      (Ih[O.g.Cd] = 1),
      (Ih[O.g.Ea] = 1),
      (Ih[O.g.Lb] = 1),
      (Ih[O.g.af] = 1),
      (Ih[O.g.Dd] = 1),
      (Ih[O.g.Ed] = 1),
      (Ih[O.g.Fd] = 1),
      (Ih[O.g.W] = 1),
      (Ih[O.g.Gd] = 1),
      (Ih[O.g.Ja] = 1),
      (Ih[O.g.ya] = 1),
      (Ih[O.g.Ma] = 1),
      (Ih[O.g.Fa] = 1),
      (Ih[O.g.Na] = 1),
      (Ih[O.g.Ka] = 1),
      (Ih[O.g.wa] = 1),
      (Ih[O.g.Hd] = 1),
      (Ih[O.g.X] = 1),
      (Ih[O.g.Gi] = 1),
      (Ih[O.g.Xc] = 1),
      (Ih[O.g.Kd] = 1),
      (Ih[O.g.ff] = 1),
      (Ih[O.g.Nd] = 1),
      (Ih[O.g.Ob] = 1),
      (Ih[O.g.xb] = 1),
      (Ih[O.g.za] = 1),
      (Ih[O.g.Zc] = 1),
      (Ih[O.g.fa] = 1),
      (Ih[O.g.Ga] = 1),
      (Ih[O.g.Gg] = 1),
      (Ih[O.g.Hg] = 1),
      (Ih[O.g.Ig] = 1),
      (Ih[O.g.Jg] = 1),
      (Ih[O.g.Rb] = 1),
      (Ih[O.g.Pa] = 1),
      (Ih[O.g.Sb] = 1),
      (Ih[O.g.qf] = 1),
      (Ih[O.g.dd] = 1),
      (Ih[O.g.ma] = 1),
      (Ih[O.g.uc] = 1),
      (Ih[O.g.vc] = 1),
      (Ih[O.g.jb] = 1),
      (Ih[O.g.na] = 1),
      (Ih[O.g.Ba] = 1),
      (Ih[O.g.aa] = 1),
      Ih)
    );
  Object.freeze(O.g);
  var Kh = {},
    Lh = (z.google_tag_manager = z.google_tag_manager || {}),
    Mh = Math.random();
  Kh.ah = "37c0";
  Kh.ne = Number("0") || 0;
  Kh.ja = "dataLayer";
  Kh.bk =
    "ChAI8KrOpQYQqZf7q5DyiuxjEicAR5U7s7GI5VO74HA9simkObOqp9EuKYkVwv00LgJxbbzgZDeDkmkaAh+7";
  var Nh = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Oh = { __paused: 1, __tg: 1 },
    Ph;
  for (Ph in Nh) Nh.hasOwnProperty(Ph) && (Oh[Ph] = 1);
  var Qh = Ra(""),
    Rh,
    Sh = !1;
  Sh = !0;
  Rh = Sh;
  var Th,
    Uh = !1;
  Th = Uh;
  var Vh,
    Wh = !1;
  Vh = Wh;
  var Xh,
    Yh = !1;
  Xh = Yh;
  Kh.Ye = "www.googletagmanager.com";
  var Zh = "" + Kh.Ye + (Rh ? "/gtag/js" : "/gtm.js"),
    $h = null,
    ai = null,
    bi = {},
    ci = {},
    di = {},
    ei = function () {
      var a = Lh.sequence || 1;
      Lh.sequence = a + 1;
      return a;
    };
  Kh.Zj = "";
  var fi = "";
  Kh.Cf = fi;
  var gi = new Ma(),
    hi = {},
    ii = {},
    li = {
      name: Kh.ja,
      set: function (a, b) {
        I(bb(a, b), hi);
        ji();
      },
      get: function (a) {
        return ki(a, 2);
      },
      reset: function () {
        gi = new Ma();
        hi = {};
        ji();
      },
    },
    ki = function (a, b) {
      return 2 != b ? gi.get(a) : mi(a);
    },
    mi = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = hi, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    ni = function (a, b) {
      ii.hasOwnProperty(a) || (gi.set(a, b), I(bb(a, b), hi), ji());
    },
    oi = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = ki(c, 1);
        if (Ja(d) || Uc(d)) d = I(d);
        ii[c] = d;
      }
    },
    ji = function (a) {
      m(ii, function (b, c) {
        gi.set(b, c);
        I(bb(b), hi);
        I(bb(b, c), hi);
        a && delete ii[b];
      });
    },
    pi = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? mi(a) : gi.get(a);
      "array" === Sc(d) || "object" === Sc(d) ? (c = I(d)) : (c = d);
      return c;
    };
  var qi = [],
    ri = function (a) {
      return void 0 == qi[a] ? !1 : qi[a];
    };
  var S = [];
  S[5] = !0;
  S[6] = !0;
  S[13] = !0;
  S[14] = !0;
  S[7] = !0;
  S[8] = !0;
  S[23] = !0;
  S[9] = !0;
  S[10] = !0;
  S[12] = !0;
  S[16] = !0;
  S[17] = !0;
  S[19] = !0;
  S[25] = !0;
  S[26] = !0;
  S[27] = !0;
  S[29] = !0;
  S[30] = !0;
  S[33] = !0;
  S[35] = !0;
  S[34] = !0;
  S[36] = !0;
  S[37] = !0;
  S[39] = !0;
  S[40] = !0;
  S[42] = !0;
  S[44] = !0;
  S[45] = !0;
  S[46] = !0;
  S[47] = !0;
  S[48] = !0;
  S[57] = !0;
  S[59] = !0;
  S[60] = !0;
  S[61] = !0;
  S[63] = !0;
  S[66] = !0;
  S[68] = !0;
  S[69] = !0;
  S[71] = !0;
  S[73] = !0;

  S[82] = !0;
  S[87] = !0;
  function T(a) {
    return !!S[a];
  }
  var si = function (a) {
    xb("HEALTH", a);
  };
  var ti;
  try {
    ti = JSON.parse(
      vb(
        "eyIwIjoiVk4iLCIxIjoiVk4tNTYiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20udm4iLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiIifQ"
      )
    );
  } catch (a) {
    N(123), si(2), (ti = {});
  }
  var ui = function () {
      return ti["0"] || "";
    },
    vi = function () {
      return ti["1"] || "";
    },
    wi = function () {
      var a = !1;
      return a;
    },
    xi = function () {
      return !!ti["6"];
    },
    yi = function () {
      var a = "";
      return a;
    },
    zi = function () {
      var a = !1;
      return a;
    },
    Ai = function () {
      var a = "";
      return a;
    };
  var Bi,
    Ci = !1;
  function Ji() {
    Ci = !0;
    Bi = Bi || {};
  }
  var Ki = function (a) {
    Ci || Ji();
    return Bi[a];
  };
  var Li = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Mi = function (a) {
      if (G.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  var Vi = /:[0-9]+$/,
    Wi = /^\d+\.fls\.doubleclick\.net$/,
    Xi = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
          var l = h.slice(1).join("=");
          if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
          e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    $i = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Yi(a.protocol) || Yi(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(Vi, "")
            .toLowerCase());
      return Zi(a, b, c, d, e);
    },
    Zi = function (a, b, c, d, e) {
      var f,
        g = Yi(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = aj(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Vi, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || xb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Xi(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Yi = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    aj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    bj = function (a) {
      var b = G.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || xb("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Vi, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    cj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = bj(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var l = "" + f + g + h;
      "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    },
    dj = function (a) {
      var b = bj(z.location.href),
        c = $i(b, "host", !1);
      if (c && c.match(Wi)) {
        var d = $i(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var ak = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var bk = function (a) {
    bk[" "](a);
    return a;
  };
  bk[" "] = function () {};
  var dk = function () {
    var a = ck,
      b = "uh";
    if (a.uh && a.hasOwnProperty(b)) return a.uh;
    var c = new a();
    return (a.uh = c);
  };
  var ck = function () {
    var a = {};
    this.h = function () {
      var b = ak.h,
        c = ak.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {
      a[ak.h] = !0;
    };
  };
  var ek = !1,
    fk = !1,
    gk = [],
    hk = {},
    ik = {},
    jk = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function kk() {
    var a = kc("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        cps: {},
        default: lk,
        update: mk,
        declare: nk,
        implicit: ok,
        addListener: pk,
        notifyListeners: qk,
        setCps: rk,
        active: !1,
        usedDeclare: !1,
        usedDefault: !1,
        usedUpdate: !1,
        usedImplicit: !1,
        usedSetCps: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function sk(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function nk(a, b, c, d, e) {
    var f = kk();
    f.active = !0;
    f.usedDeclare = !0;
    var g = f.entries,
      h = g[a] || {},
      l = h.declare_region,
      n = c && k(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (sk(n, l, d, e)) {
      var p = {
        region: h.region,
        declare_region: n,
        declare: "granted" === b,
        implicit: h.implicit,
        default: h.default,
        update: h.update,
        quiet: h.quiet,
      };
      if ("" !== d || !1 !== h.declare) g[a] = p;
    }
  }
  function ok(a, b) {
    var c = kk();
    c.active = !0;
    c.usedImplicit = !0;
    var d = c.entries,
      e = (d[a] = d[a] || {});
    !1 !== e.implicit && (e.implicit = "granted" === b);
  }
  function lk(a, b, c, d, e, f) {
    var g = kk();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    xb("TAGGING", 19);
    if (void 0 == b) xb("TAGGING", 18);
    else {
      var h = g.entries,
        l = h[a] || {},
        n = l.region,
        p = c && k(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if (sk(p, n, d, e)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          r = {
            region: p,
            declare_region: l.declare_region,
            implicit: l.implicit,
            default: "granted" === b,
            declare: l.declare,
            update: l.update,
            quiet: q,
          };
        if ("" !== d || !1 !== l.default) h[a] = r;
        q &&
          z.setTimeout(function () {
            if (h[a] === r && r.quiet) {
              r.quiet = !1;
              var t = [a];
              if (ri(4))
                for (var u in hk)
                  hk.hasOwnProperty(u) && hk[u] === a && t.push(u);
              for (var v = 0; v < t.length; v++) tk(t[v]);
              qk();
              xb("TAGGING", 2);
            }
          }, f);
      }
    }
  }
  function mk(a, b) {
    var c = kk();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = uk(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = uk(c, a),
        h = [a];
      if (ri(4))
        for (var l in hk) hk.hasOwnProperty(l) && hk[l] === a && h.push(l);
      if (f.quiet) {
        f.quiet = !1;
        for (var n = 0; n < h.length; n++) tk(h[n]);
      } else if (g !== d) for (var p = 0; p < h.length; p++) tk(h[p]);
    }
  }
  function vk(a, b, c, d, e, f) {
    var g = a[b] || {},
      h = g.region,
      l = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (sk(l, h, e, f)) {
      var n = { enabled: "granted" === c, region: l };
      if ("" !== e || !1 !== g.enabled) return (a[b] = n), !0;
    }
    return !1;
  }
  function rk(a, b, c, d, e) {
    var f = kk();
    vk(f.cps, a, b, c, d, e) && (f.usedSetCps = !0);
  }
  function pk(a, b) {
    gk.push({ consentTypes: a, Xk: b });
  }
  function tk(a) {
    for (var b = 0; b < gk.length; ++b) {
      var c = gk[b];
      Ja(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.Hj = !0);
    }
  }
  function qk(a, b) {
    for (var c = 0; c < gk.length; ++c) {
      var d = gk[c];
      if (d.Hj) {
        d.Hj = !1;
        try {
          d.Xk({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function uk(a, b) {
    var c = a.entries,
      d = c[b] || {},
      e = d.update;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.default;
    if (void 0 !== e) return e ? 1 : 2;
    if (ri(4) && hk.hasOwnProperty(b)) {
      var f = c[hk[b]] || {};
      e = f.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = f.default;
      if (void 0 !== e) return e ? 1 : 2;
    }
    e = d.declare;
    return void 0 !== e
      ? e
        ? 1
        : 2
      : ri(4) && ((e = d.implicit), void 0 !== e)
      ? e
        ? 3
        : 4
      : ri(3) && jk.hasOwnProperty(b)
      ? jk[b]
        ? 3
        : 4
      : 0;
  }
  var wk = function (a) {
      var b = kk();
      b.accessedAny = !0;
      switch (uk(b, a)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    },
    xk = function (a) {
      var b = kk();
      b.accessedDefault = !0;
      switch ((b.entries[a] || {}).default) {
        case !0:
          return 3;
        case !1:
          return 2;
        default:
          return 1;
      }
    },
    yk = function (a) {
      var b = kk();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    zk = function () {
      if (!dk().h()) return !1;
      var a = kk();
      a.accessedAny = !0;
      return a.active;
    },
    Ak = function () {
      var a = kk();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Bk = function (a, b) {
      kk().addListener(a, b);
    },
    Ck = function (a, b) {
      kk().notifyListeners(a, b);
    },
    Dk = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!yk(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Bk(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Ek = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          wk(h) && !e[h] && (f.push(h), (e[h] = !0));
        }
        return f;
      }
      var d = k(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Bk(d, function (f) {
          var g = c();
          0 < g.length && ((f.consentTypes = g), a(f));
        });
    };
  function Fk() {}
  function Gk() {}
  var Hk = [O.g.H, O.g.P, O.g.Jb, O.g.xd],
    Ik = {},
    Jk =
      ((Ik[O.g.li] = "a"),
      (Ik[O.g.ni] = "s"),
      (Ik[O.g.oi] = "y"),
      (Ik[O.g.mi] = "p"),
      Ik),
    Kk = function (a) {
      for (
        var b = a[O.g.Ua], c = Array.isArray(b) ? b : [b], d = { pd: 0 };
        d.pd < c.length;
        d = { pd: d.pd }, ++d.pd
      )
        m(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== O.g.Ua) {
                var h = c[e.pd],
                  l = ui(),
                  n = vi();
                fk = !0;
                ek && xb("TAGGING", 20);
                kk().declare(f, g, h, l, n);
              }
            };
          })(d)
        );
    },
    Lk = function (a) {
      var b = a[O.g.Ua];
      b && N(40);
      var c = a[O.g.Xe];
      c && N(41);
      for (
        var d = Ja(b) ? b : [b], e = { rd: 0 };
        e.rd < d.length;
        e = { rd: e.rd }, ++e.rd
      )
        m(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== O.g.Ua && g !== O.g.Xe) {
                var l = d[f.rd],
                  n = Number(c),
                  p = ui(),
                  q = vi();
                ek = !0;
                fk && xb("TAGGING", 20);
                kk().default(g, h, l, p, q, n);
              }
            };
          })(e)
        );
    },
    Mk = function (a, b) {
      m(a, function (c, d) {
        ek = !0;
        fk && xb("TAGGING", 20);
        kk().update(c, d);
      });
      Ck(b.eventId, b.priorityId);
    },
    Nk = function (a) {
      for (
        var b = a[O.g.Ua], c = Array.isArray(b) ? b : [b], d = { sd: 0 };
        d.sd < c.length;
        d = { sd: d.sd }, ++d.sd
      )
        m(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== O.g.Ua) {
                var h = c[e.sd],
                  l = ui(),
                  n = vi();
                kk().setCps(f, g, h, l, n);
              }
            };
          })(d)
        );
    },
    Ok = function (a) {
      for (
        var b = a[O.g.Ua], c = Array.isArray(b) ? b : [b], d = { Gc: 0 };
        d.Gc < c.length;
        d = { Gc: d.Gc }, ++d.Gc
      )
        a.hasOwnProperty(O.g.fg) &&
          m(
            Jk,
            (function (e) {
              return function (f) {
                vk(ik, f, a[O.g.fg], c[e.Gc], ui(), vi());
              };
            })(d)
          ),
          m(
            a,
            (function (e) {
              return function (f, g) {
                f !== O.g.Ua &&
                  f !== O.g.fg &&
                  vk(ik, f, g, c[e.Gc], ui(), vi());
              };
            })(d)
          );
    },
    Pk = function () {
      return xi() || kk().usedSetCps || !wk(O.g.Jb);
    },
    Qk = function (a, b) {
      Bk(a, b);
    },
    Rk = function (a, b) {
      Ek(a, b);
    },
    Sk = function (a, b) {
      Dk(a, b);
    },
    Tk = function () {
      if (T(49)) {
        for (
          var a = ti["7"], b = a ? a.split("|") : [], c = {}, d = 0;
          d < b.length;
          d++
        )
          c[b[d]] = !0;
        for (var e = 0; e < Hk.length; e++) {
          var f = Hk[e],
            g = c[f] ? "granted" : "denied";
          kk().implicit(f, g);
        }
      }
    };
  var Uk = function (a) {
      var b = String(a[oe.Tb] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    Vk =
      0 <= z.location.search.indexOf("?gtm_latency=") ||
      0 <= z.location.search.indexOf("&gtm_latency=");
  var Xk = function (a, b) {
      var c = Wk();
      c.pending || (c.pending = []);
      Ka(c.pending, function (d) {
        return (
          d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        );
      }) || c.pending.push({ target: a, onLoad: b });
    },
    Yk = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    Wk = function () {
      var a = kc("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new Yk()), (a.tidr = b));
      return b;
    };
  var Zk = {},
    $k = !1,
    rf = {
      ctid: "UA-23581568-13",
      hh: "",
      Rf: "UA-23581568-13",
      Gj: "UA-23581568-13",
    };
  Zk.xf = Ra("");
  var bl = function () {
      var a = rf.Rf ? rf.Rf.split("|") : [rf.ctid];
      return $k ? a.map(al) : a;
    },
    dl = function () {
      var a = cl();
      return $k ? a.map(al) : a;
    },
    fl = function () {
      return el(rf.ctid);
    },
    gl = function () {
      return el(rf.hh || "_" + rf.ctid);
    },
    cl = function () {
      return rf.Gj ? rf.Gj.split("|") : [];
    },
    hl = function (a) {
      var b = Wk();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    el = function (a) {
      return $k ? al(a) : a;
    },
    al = function (a) {
      return "siloed_" + a;
    },
    il = function (a) {
      a = String(a);
      return $k && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    jl = function () {
      var a = !1;
      if (a) {
        var b = Wk();
        if (b.siloed) {
          for (
            var c = [],
              d = rf.Rf ? rf.Rf.split("|") : [rf.ctid],
              e = cl(),
              f = {},
              g = 0;
            g < b.siloed.length;
            f = { nd: f.nd }, g++
          )
            (f.nd = b.siloed[g]),
              !$k &&
              Ka(
                f.nd.isDestination ? e : d,
                (function (h) {
                  return function (l) {
                    return l === h.nd.ctid;
                  };
                })(f)
              )
                ? ($k = !0)
                : c.push(f.nd);
          b.siloed = c;
        }
      }
    };
  function kl() {
    var a = Wk();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = bl(), f = dl(), g = {}, h = 0;
        h < a.pending.length;
        g = { Ic: g.Ic }, h++
      )
        (g.Ic = a.pending[h]),
          Ka(
            g.Ic.target.isDestination ? f : e,
            (function (l) {
              return function (n) {
                return n === l.Ic.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Ic.onLoad), (d = !0))
            : c.push(g.Ic);
      a.pending = c;
      if (b)
        try {
          b(gl());
        } catch (l) {}
    }
  }
  var ll = function () {
      for (var a = Wk(), b = bl(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d
          ? ((d.state = 2), (d.containers = bl()), (d.destinations = dl()))
          : (a.container[b[c]] = {
              state: 2,
              containers: bl(),
              destinations: dl(),
            });
      }
      for (var e = dl(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && N(93);
        g
          ? ((g.state = 2), (g.containers = bl()), (g.destinations = dl()))
          : (a.destination[e[f]] = {
              state: 2,
              containers: bl(),
              destinations: dl(),
            });
      }
      a.canonical[gl()] = {};
      kl();
    },
    ml = function () {
      var a = gl();
      return !!Wk().canonical[a];
    },
    nl = function (a) {
      return !!Wk().container[a];
    },
    ol = function () {
      return { ctid: fl(), isDestination: Zk.xf };
    };
  function pl(a) {
    var b = Wk();
    (b.siloed = b.siloed || []).push(a);
  }
  var ql = function () {
      var a = Wk().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    rl = function () {
      var a = {};
      m(Wk().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  var sl = { sampleRate: "0.005000", Vj: "", Uj: Number("5"), Wm: Number("") },
    tl = [];
  function ul(a) {
    tl.push(a);
  }
  var vl = !1,
    wl;
  if (!(wl = Vk)) {
    var xl = Math.random(),
      yl = sl.sampleRate;
    wl = xl < Number(yl);
  }
  var zl = wl,
    Al = "https://www.googletagmanager.com/a?id=" + rf.ctid,
    Bl = void 0,
    Cl = {},
    Dl = void 0,
    El = new (function () {
      var a = 5;
      0 < sl.Uj && (a = sl.Uj);
      this.h = 0;
      this.C = [];
      this.B = a;
    })(),
    Fl = 1e3;
  function Gl(a, b) {
    var c = Bl;
    if (void 0 === c)
      if (b) c = ei();
      else return "";
    for (var d = [Al], e = 0; e < tl.length; e++) {
      var f = tl[e]({
        eventId: c,
        Fb: !!a,
        Oj: function () {
          vl = !0;
        },
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Hl() {
    Dl && (z.clearTimeout(Dl), (Dl = void 0));
    if (void 0 !== Bl && Il) {
      var a;
      (a = Cl[Bl]) || (a = El.h < El.B ? !1 : 1e3 > Va() - El.C[El.h % El.B]);
      if (a || 0 >= Fl--) N(1), (Cl[Bl] = !0);
      else {
        var b = El.h++ % El.B;
        El.C[b] = Va();
        var c = Gl(!0);
        sc(c);
        if (vl) {
          var d = c.replace("/a?", "/td?");
          sc(d);
        }
        Il = vl = !1;
      }
    }
  }
  function Jl() {
    if (zl) {
      var a = Gl(!0, !0);
      sc(a);
    }
  }
  var Il = !1;
  function Kl(a) {
    Cl[a] ||
      (a !== Bl && (Hl(), (Bl = a)),
      (Il = !0),
      Dl || (Dl = z.setTimeout(Hl, 500)),
      2022 <= Gl().length && Hl());
  }
  var Ll = La();
  function Ml() {
    Ll = La();
  }
  function Nl() {
    return ["&v=3&t=t", "&pid=" + Ll].join("");
  }
  var Ol = function (a, b, c, d, e, f, g, h, l, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.K = d;
      this.B = e;
      this.D = f;
      this.T = g;
      this.C = h;
      this.eventMetadata = l;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    U = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.K[b]) return a.K[b];
      if (void 0 !== a.B[b]) return a.B[b];
      zl && Pl(a, a.D[b], a.T[b]) && (N(71), N(79));
      return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.C[b] ? a.C[b] : c;
    },
    Ql = function (a) {
      function b(g) {
        for (var h = Object.keys(g), l = 0; l < h.length; ++l) c[h[l]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.K);
      b(a.B);
      b(a.D);
      if (zl)
        for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            N(71);
            N(80);
            break;
          }
        }
      return Object.keys(c);
    },
    Rl = function (a, b, c) {
      function d(l) {
        Uc(l) &&
          m(l, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.C[b]), d(a.D[b]), d(a.B[b]), d(a.K[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (zl) {
        var g = f,
          h = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.C[b]), d(a.T[b]), d(a.B[b]), d(a.K[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || Pl(a, e, h)) N(71), N(81);
        f = g;
        e = h;
      }
      return f ? e : void 0;
    },
    Sl = function (a) {
      var b = [O.g.Pc, O.g.Lc, O.g.Mc, O.g.Nc, O.g.Oc, O.g.Qc, O.g.Rc],
        c = {},
        d = !1,
        e = function (h) {
          for (var l = 0; l < b.length; l++)
            void 0 !== h[b[l]] && ((c[b[l]] = h[b[l]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.K) || e(a.B)) return c;
      e(a.D);
      if (zl) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.T);
        Pl(a, c, f) && (N(71), N(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.C);
      return c;
    },
    Pl = function (a, b, c) {
      if (!zl) return !1;
      try {
        if (b === c) return !1;
        var d = Sc(b);
        if (d !== Sc(c) || !((Uc(b) && Uc(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Pl(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Pl(a, b[g], c[g])) return !0;
        }
      } catch (h) {
        N(72);
      }
      return !1;
    },
    Tl = function (a, b) {
      this.Wg = a;
      this.wk = b;
      this.D = {};
      this.je = {};
      this.h = {};
      this.K = {};
      this.B = {};
      this.ie = {};
      this.C = {};
      this.zd = function () {};
      this.qb = function () {};
      this.T = !1;
    },
    Ul = function (a, b) {
      a.D = b;
      return a;
    },
    Vl = function (a, b) {
      a.je = b;
      return a;
    },
    Wl = function (a, b) {
      a.h = b;
      return a;
    },
    Xl = function (a, b) {
      a.K = b;
      return a;
    },
    Yl = function (a, b) {
      a.B = b;
      return a;
    },
    Zl = function (a, b) {
      a.ie = b;
      return a;
    },
    $l = function (a, b) {
      a.C = b || {};
      return a;
    },
    am = function (a, b) {
      a.zd = b;
      return a;
    },
    bm = function (a, b) {
      a.qb = b;
      return a;
    },
    cm = function (a, b) {
      a.T = b;
      return a;
    },
    dm = function (a) {
      return new Ol(
        a.Wg,
        a.wk,
        a.D,
        a.je,
        a.h,
        a.K,
        a.B,
        a.ie,
        a.C,
        a.zd,
        a.qb,
        a.T
      );
    };
  var em = [O.g.H, O.g.P],
    fm = [O.g.H, O.g.P, O.g.Jb, O.g.xd],
    gm = {},
    hm = ((gm[O.g.H] = 1), (gm[O.g.P] = 2), gm),
    im = {},
    jm =
      ((im[O.g.li] = "a"),
      (im[O.g.ni] = "s"),
      (im[O.g.oi] = "y"),
      (im[O.g.mi] = "p"),
      im);
  function km(a) {
    switch (U(a, O.g.Z)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var lm = function (a) {
      var b = 3 !== km(a);
      T(81) && (b = b && wk(O.g.xd));
      return b;
    },
    mm = function () {
      var a = {},
        b;
      for (b in hm)
        if (hm.hasOwnProperty(b)) {
          var c = hm[b],
            d,
            e = kk();
          e.accessedAny = !0;
          d = uk(e, b);
          a[c] = d;
        }
      var f = T(56) && em.every(wk),
        g = T(51);
      return f || g ? ne(a, 1) : ne(a, 0);
    },
    nm = {},
    om =
      ((nm[O.g.H] = 0),
      (nm[O.g.P] = 1),
      (nm[O.g.Jb] = 2),
      (nm[O.g.xd] = 3),
      nm);
  function pm(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var qm = function (a) {
      if (T(53)) {
        for (var b = "1", c = 0; c < fm.length; c++) {
          var d = b,
            e,
            f = fm[c],
            g = hk[f];
          e = void 0 === g ? 0 : om.hasOwnProperty(g) ? 12 | om[g] : 8;
          var h = kk();
          h.accessedAny = !0;
          var l = h.entries[f] || {};
          e = (e << 2) | pm(l.implicit);
          b =
            d +
            ("" +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                e
              ] +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (pm(l.declare) << 4) | (pm(l.default) << 2) | pm(l.update)
              ]);
        }
        void 0 !== a && (b += km(a));
        return b;
      }
      for (var n = "G1", p = 0; p < em.length; p++)
        switch (xk(em[p])) {
          case 3:
            n += "1";
            break;
          case 2:
            n += "0";
            break;
          case 1:
            n += "-";
        }
      return n;
    },
    rm = function () {
      if (!wk(O.g.Jb)) return "-";
      var a = kk(),
        b = a.cps,
        c = [],
        d;
      for (d in ik)
        ik.hasOwnProperty(d) &&
          ik[d].enabled &&
          (a.usedSetCps
            ? b.hasOwnProperty(d) && b[d].enabled && c.push(d)
            : c.push(d));
      for (var e = "", f = 0; f < c.length; f++) {
        var g = jm[c[f]];
        g && (e += g);
      }
      return "" === e ? "-" : e;
    };
  var sm = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var tm = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var l = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  };
  var um = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    vm = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function wm(a) {
    return "null" !== a.origin;
  }
  var zm = function (a, b, c, d) {
      return xm(d) ? tm(a, String(b || ym()), c) : [];
    },
    Cm = function (a, b, c, d, e) {
      if (xm(e)) {
        var f = Am(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Bm(
            f,
            function (g) {
              return g.If;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Bm(
            f,
            function (g) {
              return g.Ge;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Dm(a, b, c, d) {
    var e = ym(),
      f = window;
    wm(f) && (f.document.cookie = a);
    var g = ym();
    return e != g || (void 0 != c && 0 <= zm(b, g, !1, d).indexOf(c));
  }
  var Qm = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + "; " + x;
      }
      if (!xm(c.Eb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Nm(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      g = e(g, "expires", l);
      g = e(g, "max-age", c.Ml);
      g = e(g, "samesite", c.im);
      c.km && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Om(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Pm(u, c.path) && Dm(v, a, b, c.Eb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Pm(n, c.path) ? 1 : Dm(g, a, b, c.Eb) ? 0 : 1;
    },
    Rm = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Qm(a, b, c);
    };
  function Bm(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        l = b(h);
      l === c
        ? d.push(h)
        : void 0 === f || l < f
        ? ((e = [h]), (f = l))
        : l === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Am(a, b, c) {
    for (var d = [], e = zm(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var l = g.shift();
        l &&
          ((l = l.split("-")),
          d.push({ id: g.join("."), If: 1 * l[0] || 1, Ge: 1 * l[1] || 1 }));
      }
    }
    return d;
  }
  var Nm = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Sm = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Tm = /(^|\.)doubleclick\.net$/i,
    Pm = function (a, b) {
      return (
        Tm.test(window.document.location.hostname) || ("/" === b && Sm.test(a))
      );
    },
    ym = function () {
      return wm(window) ? window.document.cookie : "";
    },
    Om = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Tm.test(e) || Sm.test(e) || a.push("none");
      return a;
    },
    xm = function (a) {
      return dk().h() && a && zk() ? (yk(a) ? wk(a) : !1) : !0;
    };
  var Um = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (sm(a) & 2147483647)) : String(b);
    },
    Vm = function (a) {
      return [Um(a), Math.round(Va() / 1e3)].join(".");
    },
    Ym = function (a, b, c, d, e) {
      var f = Wm(b);
      return Cm(a, f, Xm(c), d, e);
    },
    Zm = function (a, b, c, d) {
      var e = "" + Wm(c),
        f = Xm(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Wm = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Xm = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var $m = function () {
    Lh.dedupe_gclid || (Lh.dedupe_gclid = "" + Vm());
    return Lh.dedupe_gclid;
  };
  var an = function () {
    var a = !1;
    return a;
  };
  var bn = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    cn = function (a) {
      var b = rf.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = rf.ctid;
      c.dm = Kh.ne;
      c.hm = Kh.ah;
      c.Jl = Zk.xf ? 2 : 1;
      Rh ? ((c.Vf = bn[b]), c.Vf || (c.Vf = 0)) : (c.Vf = Xh ? 13 : 10);
      Vh ? (c.Hh = 1) : an() ? (c.Hh = 2) : (c.Hh = 3);
      var d;
      var e = c.Vf,
        f = c.Hh;
      void 0 === e
        ? (d = "")
        : (f || (f = 0),
          (d =
            "" +
            gg(1, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (e << 2) | f
            ]));
      var g = c.Rm,
        h =
          4 +
          d +
          (g
            ? "" +
              gg(2, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                g
              ]
            : ""),
        l,
        n = c.hm;
      l = n && fg.test(n) ? "" + gg(3, 2) + n : "";
      var p,
        q = c.dm;
      p = q
        ? "" +
          gg(4, 1) +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q]
        : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";
        else {
          var w = u[1];
          r =
            "" +
            gg(5, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              1 + w.length
            ] +
            (c.Jl || 0) +
            w;
        }
      } else r = "";
      return h + l + p + r;
    };
  function dn(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var en = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function fn() {
    return Ib ? !!Pb && !!Pb.platform : !1;
  }
  function gn() {
    return Sb("iPhone") && !Sb("iPod") && !Sb("iPad");
  }
  function hn() {
    gn() || Sb("iPad") || Sb("iPod");
  }
  Ub();
  Tb() || Sb("Trident") || Sb("MSIE");
  Sb("Edge");
  !Sb("Gecko") ||
    (-1 != Ob().toLowerCase().indexOf("webkit") && !Sb("Edge")) ||
    Sb("Trident") ||
    Sb("MSIE") ||
    Sb("Edge");
  -1 != Ob().toLowerCase().indexOf("webkit") && !Sb("Edge") && Sb("Mobile");
  fn() || Sb("Macintosh");
  fn() || Sb("Windows");
  (fn() ? "Linux" === Pb.platform : Sb("Linux")) || fn() || Sb("CrOS");
  var jn = sa.navigator || null;
  jn && (jn.appVersion || "").indexOf("X11");
  fn() || Sb("Android");
  gn();
  Sb("iPad");
  Sb("iPod");
  hn();
  Ob().toLowerCase().indexOf("kaios");
  var kn = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    ln = /#|$/,
    mn = function (a, b) {
      var c = a.search(ln),
        d = kn(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    nn = /[?&]($|#)/,
    on = function (a, b, c) {
      for (
        var d, e = a.search(ln), f = 0, g, h = [];
        0 <= (g = kn(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(nn, "$1");
      var l,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        l = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else l = d;
      return l;
    };
  var pn = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              bk(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    qn = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function rn(a) {
    if (!a || !G.head) return null;
    var b = sn("META");
    G.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var tn = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a
        ? a[a.length - 1] == z.location.origin
          ? 1
          : 2
        : pn(z.top)
        ? 1
        : 2;
    },
    sn = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function un(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = sn("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = Ab(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      en(e, "load", f);
      en(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var wn = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      qn(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      vn(c, b);
    },
    vn = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else un(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var xn = function () {};
  var yn = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    zn = function (a, b) {
      b = void 0 === b ? {} : b;
      this.B = a;
      this.h = null;
      this.K = {};
      this.qb = 0;
      var c;
      this.T = null != (c = b.xm) ? c : 500;
      var d;
      this.D = null != (d = b.Sm) ? d : !1;
      this.C = null;
    };
  ra(zn, xn);
  zn.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.D },
      d = vm(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.T));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = yn(c)),
          (c.internalBlockOnErrors = b.D),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      An(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  zn.prototype.removeEventListener = function (a) {
    a && a.listenerId && An(this, "removeEventListener", null, a.listenerId);
  };
  var Cn = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var l;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Bn(a.vendor.consents, void 0 === d ? "755" : d);
          l =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Bn(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === h
            ? a.purpose && a.vendor
              ? Bn(a.purpose.legitimateInterests, b) &&
                Bn(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return l;
    },
    Bn = function (a, b) {
      return !(!a || !a[b]);
    },
    An = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.B.__tcfapi) {
        var e = a.B.__tcfapi;
        e(b, 2, c, d);
      } else if (Dn(a)) {
        En(a);
        var f = ++a.qb;
        a.K[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Dn = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.B, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    En = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.K[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        en(a.B, "message", a.C));
    },
    Fn = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = yn(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (wn({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Gn = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Hn = dn("", 500);
  function In() {
    var a = Lh.tcf || {};
    return (Lh.tcf = a);
  }
  var On = function () {
    var a = In(),
      b = new zn(z, { xm: -1 });
    Jn(b) && Kn() && N(124);
    if (!Kn() && !a.active && Jn(b)) {
      a.active = !0;
      a.Sf = {};
      Ln();
      a.tcString = "tcunavailable";
      try {
        b.addEventListener(function (c) {
          if (0 !== c.internalErrorState) Mn(a), Nn(a);
          else {
            var d;
            a.gdprApplies = c.gdprApplies;
            if (!1 === c.gdprApplies) {
              var e = {},
                f;
              for (f in Gn) Gn.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (
              "tcloaded" === c.eventStatus ||
              "useractioncomplete" === c.eventStatus ||
              "cmpuishown" === c.eventStatus
            ) {
              var g = {},
                h;
              for (h in Gn)
                if (Gn.hasOwnProperty(h))
                  if ("1" === h) {
                    var l,
                      n = c,
                      p = !0;
                    p = void 0 === p ? !1 : p;
                    l = Fn(n)
                      ? !1 === n.gdprApplies ||
                        "tcunavailable" === n.tcString ||
                        (void 0 === n.gdprApplies && !p) ||
                        "string" !== typeof n.tcString ||
                        !n.tcString.length
                        ? !0
                        : Cn(n, "1", 0)
                      : !1;
                    g["1"] = l;
                  } else g[h] = Cn(c, h, Gn[h]);
              d = g;
            }
            d && ((a.tcString = c.tcString || "tcempty"), (a.Sf = d), Nn(a));
          }
        });
      } catch (c) {
        Mn(a), Nn(a);
      }
    }
  };
  function Mn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function Ln() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Hn), a);
    Lk(b);
  }
  function Jn(a) {
    return "function" === typeof z.__tcfapi ||
      "function" === typeof a.B.__tcfapi ||
      null != Dn(a)
      ? !0
      : !1;
  }
  var Kn = function () {
    return !0 !== z.gtag_enable_tcf_support;
  };
  function Nn(a) {
    var b = {},
      c = ((b.ad_storage = a.Sf["1"] ? "granted" : "denied"), b);
    Mk(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Pn() }
    );
  }
  var Pn = function () {
      var a = In();
      return a.active ? a.tcString || "" : "";
    },
    Qn = function () {
      var a = In();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Rn = function (a) {
      if (!Gn.hasOwnProperty(String(a))) return !0;
      var b = In();
      return b.active && b.Sf ? !!b.Sf[String(a)] : !0;
    };
  var Sn = void 0;
  function Tn(a) {
    var b = "";
    return b;
  }
  var Un = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Vb();
  gn() || Sb("iPod");
  Sb("iPad");
  !Sb("Android") || Wb() || Vb() || Ub() || Sb("Silk");
  Wb();
  !Sb("Safari") ||
    Wb() ||
    (Tb() ? 0 : Sb("Coast")) ||
    Ub() ||
    (Tb() ? 0 : Sb("Edge")) ||
    (Tb() ? Rb("Microsoft Edge") : Sb("Edg/")) ||
    (Tb() ? Rb("Opera") : Sb("OPR")) ||
    Vb() ||
    Sb("Silk") ||
    Sb("Android") ||
    hn();
  var Vn = {},
    Wn = null,
    Xn = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!Wn) {
        Wn = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            l = 0;
          5 > l;
          l++
        ) {
          var n = g.concat(h[l].split(""));
          Vn[l] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === Wn[q] && (Wn[q] = p);
          }
        }
      }
      for (
        var r = Vn[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          C = r[((x & 3) << 4) | (y >> 4)],
          F = r[((y & 15) << 2) | (A >> 6)],
          J = r[A & 63];
        t[w++] = "" + B + C + F + J;
      }
      var K = 0,
        P = u;
      switch (b.length - v) {
        case 2:
          (K = b[v + 1]), (P = r[(K & 15) << 2] || u);
        case 1:
          var Q = b[v];
          t[w] = "" + r[Q >> 2] + r[((Q & 3) << 4) | (K >> 4)] + P + u;
      }
      return t.join("");
    };
  var Yn =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Zn(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function $n() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function ao() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function bo(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function co() {
    var a = z;
    if (!bo(a)) return null;
    var b = Zn(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(Yn)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  function jo(a, b, c, d) {
    var e,
      f = Number(null != a.Cb ? a.Cb : void 0);
    0 !== f && (e = new Date((b || Va()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Eb: d,
    };
  }
  var ko;
  var oo = function () {
      var a = lo,
        b = mo,
        c = no(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        tc(G, "mousedown", d);
        tc(G, "keyup", d);
        tc(G, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    po = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      no().decorators.push(f);
    },
    qo = function (a, b, c) {
      for (var d = no().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var l = g.domains,
              n = a,
              p = !!g.sameHost;
            if (l && (p || n !== G.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(l[q]) ||
                  (p && 0 <= l[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Ya(e, g.callback());
        }
      }
      return e;
    };
  function no() {
    var a = kc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var ro = /(.*?)\*(.*?)\*(.*)/,
    so = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    to = /^(?:www\.|m\.|amp\.)+/,
    uo = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function vo(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var xo = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(ub(String(d))));
      }
    var e = b.join("*");
    return ["1", wo(e), e].join("*");
  };
  function wo(a, b) {
    var c = [
        hc.userAgent,
        new Date().getTimezoneOffset(),
        hc.userLanguage || hc.language,
        Math.floor(Va() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = ko)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    ko = d;
    for (var l = 4294967295, n = 0; n < c.length; n++)
      l = (l >>> 8) ^ ko[(l ^ c.charCodeAt(n)) & 255];
    return ((l ^ -1) >>> 0).toString(36);
  }
  function yo() {
    return function (a) {
      var b = bj(z.location.href),
        c = b.search.replace("?", ""),
        d = Xi(c, "_gl", !1, !0) || "";
      a.query = zo(d) || {};
      var e = $i(b, "fragment").match(vo("_gl"));
      a.fragment = zo((e && e[3]) || "") || {};
    };
  }
  function Ao(a, b) {
    var c = vo(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Bo = function (a, b) {
      b || (b = "_gl");
      var c = uo.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Ao(b, (c[2] || "").slice(1)),
        f = Ao(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Co = function (a) {
      var b = yo(),
        c = no();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ya(d, e.query), a && Ya(d, e.fragment));
      return d;
    },
    zo = function (a) {
      try {
        var b = Do(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = vb(d[e + 1]);
            c[f] = g;
          }
          xb("TAGGING", 6);
          return c;
        }
      } catch (h) {
        xb("TAGGING", 8);
      }
    };
  function Do(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = ro.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          l;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === wo(h, p)) {
              l = !0;
              break a;
            }
          l = !1;
        }
        if (l) return h;
        xb("TAGGING", 7);
      }
    }
  }
  function Eo(a, b, c, d) {
    function e(p) {
      p = Ao(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = uo.exec(c);
    if (!f) return "";
    var g = f[1],
      h = f[2] || "",
      l = f[3] || "",
      n = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (h = "?" + e(h.substring(1)));
    return "" + g + h + l;
  }
  function Fo(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = qo(b, 1, c),
      e = qo(b, 2, c),
      f = qo(b, 3, c);
    if (Za(d)) {
      var g = xo(d);
      c ? Go("_gl", g, a) : Ho("_gl", g, a, !1);
    }
    if (!c && Za(e)) {
      var h = xo(e);
      Ho("_gl", h, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Ho(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Go(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Eo(n, p, q);
        }
  }
  function Ho(a, b, c, d) {
    if (c.href) {
      var e = Eo(a, b, c.href, void 0 === d ? !1 : d);
      Hb.test(e) && (c.href = e);
    }
  }
  function Go(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = G.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var n = Eo(a, b, c.action);
        Hb.test(n) && (c.action = n);
      }
    }
  }
  function lo(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Fo(e, e.hostname);
      }
    } catch (g) {}
  }
  function mo(a) {
    try {
      if (a.action) {
        var b = $i(bj(a.action), "host");
        Fo(a, b);
      }
    } catch (c) {}
  }
  var Io = function (a, b, c, d) {
      oo();
      po(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Jo = function (a, b) {
      oo();
      po(a, [Zi(z.location, "host", !0)], b, !0, !0);
    },
    Ko = function () {
      var a = G.location.hostname,
        b = so.exec(G.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(to, ""),
        l = e.replace(to, ""),
        n;
      if (!(n = h === l)) {
        var p = "." + l;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Lo = function (a, b) {
      return !1 === a ? !1 : a || b || Ko();
    };
  var Mo = ["1"],
    No = {},
    Oo = {},
    Qo = function (a) {
      return No[Po(a)];
    },
    Uo = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Po(a.prefix);
      if (!No[c])
        if (Ro(c, a.path, a.domain)) {
          var d = Oo[Po(a.prefix)];
          So(a, d ? d.id : void 0, d ? d.Eh : void 0);
        } else {
          var e = dj("auiddc");
          if (e) xb("TAGGING", 17), (No[c] = e);
          else if (b) {
            var f = Po(a.prefix),
              g = Vm();
            if (0 === To(f, g, a)) {
              var h = kc("google_tag_data", {});
              h._gcl_au || (h._gcl_au = g);
            }
            Ro(c, a.path, a.domain);
          }
        }
    };
  function So(a, b, c) {
    var d = Po(a.prefix),
      e = No[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(Va() / 1e3)));
          To(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function To(a, b, c, d) {
    var e = Zm(b, "1", c.domain, c.path),
      f = jo(c, d);
    f.Eb = "ad_storage";
    return Rm(a, e, f);
  }
  function Ro(a, b, c) {
    var d = Ym(a, b, c, Mo, "ad_storage");
    if (!d) return !1;
    Vo(a, d);
    return !0;
  }
  function Vo(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((No[a] = c.slice(0, 2).join(".")),
        (Oo[a] = { id: c.slice(2, 4).join("."), Eh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (Oo[a] = { id: c.slice(0, 2).join("."), Eh: Number(c[2]) || 0 })
      : (No[a] = b);
  }
  function Po(a) {
    return (a || "_gcl") + "_au";
  }
  function Wo(a) {
    zk()
      ? Dk(
          function () {
            wk("ad_storage") ? a() : Ek(a, "ad_storage");
          },
          ["ad_storage"]
        )
      : a();
  }
  function Xo(a) {
    var b = Co(!0),
      c = Po(a.prefix);
    Wo(function () {
      var d = b[c];
      if (d) {
        Vo(c, d);
        var e = 1e3 * Number(No[c].split(".")[1]);
        if (e) {
          xb("TAGGING", 16);
          var f = jo(a, e);
          f.Eb = "ad_storage";
          var g = Zm(d, "1", a.domain, a.path);
          Rm(c, g, f);
        }
      }
    });
  }
  function Yo(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = Ym(a, e.path, e.domain, Mo, "ad_storage");
      h && (g[a] = h);
      return g;
    };
    Wo(function () {
      Io(f, b, c, d);
    });
  }
  var Zo = function (a) {
    for (
      var b = [],
        c = G.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Xh: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function $o(a, b) {
    var c = Zo(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Xh] || (d[c[e].Xh] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), da: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Xh].push(g);
      }
    }
    return d;
  }
  var ap = /^\w+$/,
    bp = /^[\w-]+$/,
    cp = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    dp = function () {
      return dk().h() && zk() ? wk("ad_storage") : !0;
    },
    ep = function (a, b) {
      yk("ad_storage")
        ? dp()
          ? a()
          : Ek(a, "ad_storage")
        : b
        ? xb("TAGGING", 3)
        : Dk(
            function () {
              ep(a, !0);
            },
            ["ad_storage"]
          );
    },
    gp = function (a) {
      return fp(a).map(function (b) {
        return b.da;
      });
    },
    fp = function (a) {
      var b = [];
      if (!wm(z) || !G.cookie) return b;
      var c = zm(a, G.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Re: d.Re }, e++) {
        var f = hp(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.Re = g.da;
          var l = g.timestamp,
            n = g.labels,
            p = Ka(
              b,
              (function (q) {
                return function (r) {
                  return r.da === q.Re;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)),
              (p.labels = ip(p.labels, n || [])))
            : b.push({ version: h, da: d.Re, timestamp: l, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return jp(b);
    };
  function ip(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function kp(a) {
    return a && "string" == typeof a && a.match(ap) ? a : "_gcl";
  }
  var mp = function () {
      var a = bj(z.location.href),
        b = $i(a, "query", !1, void 0, "gclid"),
        c = $i(a, "query", !1, void 0, "gclsrc"),
        d = $i(a, "query", !1, void 0, "wbraid"),
        e = $i(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Xi(f, "gclid", !1);
        c = c || Xi(f, "gclsrc", !1);
        d = d || Xi(f, "wbraid", !1);
      }
      return lp(b, c, e, d);
    },
    lp = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && bp.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(bp))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    op = function (a) {
      var b = mp();
      ep(function () {
        np(b, !1, a);
      });
    };
  function np(a, b, c, d, e) {
    function f(w, x) {
      var y = pp(w, g);
      y && (Rm(y, x, h), (l = !0));
    }
    c = c || {};
    e = e || [];
    var g = kp(c.prefix);
    d = d || Va();
    var h = jo(c, d, !0);
    h.Eb = "ad_storage";
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!l && a.gb) {
      var q = a.gb[0],
        r = pp("gb", g),
        t = !1;
      if (!b)
        for (var u = fp(r), v = 0; v < u.length; v++)
          u[v].da === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var rp = function (a, b) {
      var c = Co(!0);
      ep(function () {
        for (var d = kp(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== cp[f]) {
            var g = pp(f, d),
              h = c[g];
            if (h) {
              var l = Math.min(qp(h), Va()),
                n;
              b: {
                var p = l;
                if (wm(z))
                  for (
                    var q = zm(g, G.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (qp(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = jo(b, l, !0);
                t.Eb = "ad_storage";
                Rm(g, h, t);
              }
            }
          }
        }
        np(lp(c.gclid, c.gclsrc), !1, b);
      });
    },
    pp = function (a, b) {
      var c = cp[a];
      if (void 0 !== c) return b + c;
    },
    qp = function (a) {
      return 0 !== sp(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function hp(a) {
    var b = sp(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          da: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function sp(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !bp.test(a[2])
      ? []
      : a;
  }
  var tp = function (a, b, c, d, e) {
      if (Ja(b) && wm(z)) {
        var f = kp(e),
          g = function () {
            for (var h = {}, l = 0; l < a.length; ++l) {
              var n = pp(a[l], f);
              if (n) {
                var p = zm(n, G.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        ep(function () {
          Io(g, b, c, d);
        });
      }
    },
    jp = function (a) {
      return a.filter(function (b) {
        return bp.test(b.da);
      });
    },
    up = function (a, b) {
      if (wm(z)) {
        for (var c = kp(b.prefix), d = {}, e = 0; e < a.length; e++)
          cp[a[e]] && (d[a[e]] = cp[a[e]]);
        ep(function () {
          m(d, function (f, g) {
            var h = zm(c + g, G.cookie, void 0, "ad_storage");
            h.sort(function (t, u) {
              return qp(u) - qp(t);
            });
            if (h.length) {
              var l = h[0],
                n = qp(l),
                p = 0 !== sp(l.split(".")).length ? l.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== sp(l.split(".")).length ? l.split(".")[2] : void 0;
              q[f] = [r];
              np(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function vp(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var wp = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (zk()) {
        var c = mp();
        if (vp(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          Jo(function () {
            return d;
          }, 3);
          Jo(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    xp = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!dp()) return e;
      var f = fp(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var h = f[0],
          l = f[0].timestamp,
          n = [h.version, Math.round(l / 1e3), h.da]
            .concat(h.labels || [], [b])
            .join("."),
          p = jo(c, l, !0);
        p.Eb = "ad_storage";
        Rm(a, n, p);
      }
      return e;
    };
  function yp(a, b) {
    var c = kp(b),
      d = pp(a, c);
    if (!d) return 0;
    for (var e = fp(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function zp(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Ap = function (a) {
    var b = Math.max(yp("aw", a), zp(dp() ? $o() : {}));
    return Math.max(yp("gb", a), zp(dp() ? $o("_gac_gb", !0) : {})) > b;
  };
  var Fp = /[A-Z]+/,
    Gp = /\s/,
    Hp = function (a, b) {
      if (k(a)) {
        a = Ta(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (Fp.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var g = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ("DC" === d && 2 === f.length) {
                var h = g(f[1]);
                2 === h.length && ((f[1] = h[0]), f.push(h[1]));
              }
            } else {
              f = e.split("/");
              for (var l = 0; l < f.length; l++)
                if (!f[l] || (Gp.test(f[l]) && ("AW" !== d || 1 !== l))) return;
            }
            return { id: a, prefix: d, ba: d + "-" + f[0], J: f };
          }
        }
      }
    },
    Jp = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = Hp(a[d], b);
        e && (c[e.id] = e);
      }
      Ip(c);
      var f = [];
      m(c, function (g, h) {
        f.push(h);
      });
      return f;
    };
  function Ip(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.J[1] && b.push(d.ba);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Kp = function (a, b, c, d) {
    var e = qc(),
      f;
    if (1 === e)
      a: {
        var g = Zh;
        g = g.toLowerCase();
        for (
          var h = "https://" + g,
            l = "http://" + g,
            n = 1,
            p = G.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(l)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var Mp = function (a, b, c) {
      if (z[a.functionName]) return b.Lh && H(b.Lh), z[a.functionName];
      var d = Lp();
      z[a.functionName] = d;
      if (a.Ff)
        for (var e = 0; e < a.Ff.length; e++) z[a.Ff[e]] = z[a.Ff[e]] || Lp();
      a.Of && void 0 === z[a.Of] && (z[a.Of] = c);
      pc(Kp("https://", "http://", a.Uh), b.Lh, b.Pl);
      return d;
    },
    Lp = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Np = {
      functionName: "_googWcmImpl",
      Of: "_googWcmAk",
      Uh: "www.gstatic.com/wcm/loader.js",
    },
    Op = {
      functionName: "_gaPhoneImpl",
      Of: "ga_wpid",
      Uh: "www.gstatic.com/gaphone/loader.js",
    },
    Pp = { Xj: "", Hk: "5" },
    Qp = {
      functionName: "_googCallTrackingImpl",
      Ff: [Op.functionName, Np.functionName],
      Uh:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Pp.Xj || Pp.Hk) +
        ".js",
    },
    Rp = {},
    Sp = function (a, b, c, d) {
      N(22);
      if (c) {
        d = d || {};
        var e = Mp(Np, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Db && (f.autoreplace = c);
        e(2, d.Db, f, c, 0, Ua(), d.options);
      }
    },
    Tp = function (a, b, c, d) {
      N(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Ua(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          Rp[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.J.length
              ? ((e.adData = { ak: g.J[0], cl: g.J[1] }), (Rp[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.ba }), (Rp[g.id] = !0)));
        }
        (e.gaData || e.adData) && Mp(Qp, d)(d.Db, e, d.options);
      }
    },
    Up = function () {
      var a = !1;
      return a;
    },
    Vp = function (a, b) {
      if (a)
        if (an()) {
        } else {
          if (k(a)) {
            var c = Hp(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = U(b, O.g.Ri);
          if (f && Ja(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var h = Hp(f[g]);
              h &&
                (d.push(h),
                (a.id === h.id || (a.id === a.ba && a.ba === h.ba)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var l = U(b, O.g.Ig),
              n;
            if (l) {
              Ja(l) ? (n = l) : (n = [l]);
              var p = U(b, O.g.Gg),
                q = U(b, O.g.Hg),
                r = U(b, O.g.Jg),
                t = U(b, O.g.Qi),
                u = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) Tp(d, n[w], t, { Db: u, options: r });
                  else if ("AW" === a.prefix && a.J[1])
                    Up()
                      ? Tp([a], n[w], t || "US", { Db: u, options: r })
                      : Sp(a.J[0], a.J[1], n[w], {
                          Db: u,
                          options: r,
                        });
                  else if ("UA" === a.prefix)
                    if (Up()) Tp([a], n[w], t || "US", { Db: u });
                    else {
                      var x = a.ba,
                        y = n[w],
                        A = { Db: u };
                      N(23);
                      if (y) {
                        A = A || {};
                        var B = Mp(Op, A, x),
                          C = {};
                        void 0 !== A.Db ? (C.receiver = A.Db) : (C.replace = y);
                        C.ga_wpid = x;
                        C.destination = y;
                        B(2, Ua(), C);
                      }
                    }
            }
          }
        }
    };
  var Wp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.m = c;
    this.h = {};
    this.metadata = I(c.eventMetadata || {});
    this.isAborted = !1;
  };
  Wp.prototype.copyToHitData = function (a, b) {
    var c = U(this.m, a);
    void 0 !== c ? (this.h[a] = c) : void 0 !== b && (this.h[a] = b);
  };
  var Xp = function (a, b, c) {
    var d = Ki(a.target.ba);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function Yp(a) {
    return {
      getDestinationId: function () {
        return a.target.ba;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return U(a.m, b);
      },
      Mf: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      },
    };
  }
  function vq(a) {
    var b = U(a.m, O.g.xb),
      c = U(a.m, O.g.Ob);
    b && !c
      ? (a.eventName !== O.g.ka && a.eventName !== O.g.Ad && N(131),
        (a.isAborted = !0))
      : !b && c && (N(132), (a.isAborted = !0));
  }
  function xq() {
    return "attribution-reporting";
  }
  function yq(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var zq = !1;
  function Aq() {
    if (yq("join-ad-interest-group") && Ga(hc.joinAdInterestGroup)) return !0;
    zq ||
      (rn(
        "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (zq = !0));
    return yq("join-ad-interest-group") && Ga(hc.joinAdInterestGroup);
  }
  function Bq(a, b) {
    var c = void 0;
    try {
      c = G.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Va() - d) {
        xb("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          G.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          xb("TAGGING", 10);
          return;
        }
      } catch (e) {}
    rc(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Va() },
      c
    );
  }
  function Cq() {
    return "https://td.doubleclick.net";
  }
  var Dq = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Eq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Fq = /^\d+\.fls\.doubleclick\.net$/,
    Gq = /;gac=([^;?]+)/,
    Hq = /;gacgb=([^;?]+)/,
    Iq = /;gclaw=([^;?]+)/,
    Jq = /;gclgb=([^;?]+)/;
  function Kq(a, b) {
    if (Fq.test(G.location.host)) {
      var c = G.location.href.match(b);
      return c && 2 == c.length && c[1].match(Dq)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].da);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Lq = function (a, b, c) {
    var d = dp() ? $o("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = xp("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (l) {
            return 1 === l;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { al: f ? e.join(";") : "", Zk: Kq(d, Hq) };
  };
  function Mq(a, b, c) {
    if (Fq.test(G.location.host)) {
      var d = G.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Eq)) return [{ da: d[1] }];
    } else return fp((a || "_gcl") + b);
    return [];
  }
  var Nq = function (a) {
      return Mq(a, "_aw", Iq)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    Oq = function (a) {
      return Mq(a, "_gb", Jq)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    Pq = function (a, b) {
      var c = xp(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var Qq = function () {
    if (Ga(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Br = {
    F: {
      bi: "ads_conversion_hit",
      cg: "container_execute_start",
      ei: "container_setup_end",
      dg: "container_setup_start",
      di: "container_execute_end",
      fi: "container_yield_end",
      eg: "container_yield_start",
      Yi: "event_execute_end",
      Xi: "event_evaluation_end",
      Ug: "event_evaluation_start",
      Zi: "event_setup_end",
      he: "event_setup_start",
      aj: "ga4_conversion_hit",
      ke: "page_load",
      Mm: "pageview",
      Vb: "snippet_load",
      lj: "tag_callback_error",
      mj: "tag_callback_failure",
      nj: "tag_callback_success",
      oj: "tag_execute_end",
      fd: "tag_execute_start",
    },
  };
  var Cr = !1,
    Dr = "L S Y E EC TC HTC".split(" "),
    Er = ["S", "V", "E"],
    Fr = ["TS", "TI", "TE"];
  var hs = function (a) {},
    is = function (a) {},
    js = function () {},
    ks = function () {},
    ls = function () {},
    ms = function (a, b) {},
    ns = function (a, b) {},
    os = function (a, b) {},
    ps = function (a, b) {},
    Gr = function (a, b, c, d, e, f) {
      var g;
      g = void 0 === g ? !1 : g;
      var h = {};
      return h;
    },
    Hr = function (a) {
      var b = !1;
      return b;
    },
    Ir = function (a, b) {},
    qs = function () {
      var a = {};
      return a;
    },
    as = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    rs = function () {},
    ss = function (a, b) {},
    ts = function (a, b, c) {},
    us = function () {
      var a = Gr("PAGEVIEW", fl());
      if (Sr(a.entry, "mark")[0]) {
        var b = Dc();
        b.clearMarks(a.entry);
        b.clearMeasures("GTM-" + fl() + ":" + Br.F.ke + ":to:PAGEVIEW");
      }
      var c = Gr(Br.F.ke, fl());
      Hr(a) && Ir(a, c);
    };
  var vs = function (a, b) {
    var c = z,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var ws = function (a, b, c) {
    var d = mn(a, "fmt");
    if (b) {
      var e = mn(a, "random"),
        f = mn(a, "label") || "";
      if (!e) return !1;
      var g = Xn(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!vs(g, b)) return !1;
    }
    d && 4 != d && (a = on(a, "rfmt", d));
    var h = on(a, "fmt", 4);
    pc(
      h,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      G.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var Ms = function () {
      this.h = {};
    },
    Ns = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Os = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    Qs = function (a, b, c, d) {};
  function Ss(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return bj("" + c + b).href;
    }
  }
  function Ts() {
    return !!Kh.Cf && "SGTM_TOKEN" !== Kh.Cf.split("@@").join("");
  }
  function Us(a) {
    for (var b = Vs(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
      var e = U(a, d.value);
      if (e) return e;
    }
  }
  function Vs() {
    var a = [];
    T(57) && a.push(O.g.qf);
    a.push(O.g.uc);
    return a;
  }
  var Xs = function (a, b, c, d, e) {
      if (!Ws() && !nl(a)) {
        var f = "?id=" + encodeURIComponent(a) + "&l=" + Kh.ja,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        T(79) && (f += "&gtm=" + cn());
        var h = Ts();
        h && (f += "&sign=" + Kh.Cf);
        var l = c ? "/gtag/js" : "/gtm.js",
          n = Th || Vh ? Ss(b, l + f) : void 0;
        if (!n) {
          var p = Kh.Ye + l;
          h &&
            jc &&
            g &&
            (p = jc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          n = Kp("https://", "http://", p + f);
        }
        var q = a;
        d.siloed && (pl({ ctid: q, isDestination: !1 }), (q = al(q)));
        var r = q,
          t = ol();
        Wk().container[r] = { state: 1, context: d, parent: t };
        Xk({ ctid: r, isDestination: !1 }, e);
        pc(n);
      }
    },
    Ys = function (a, b, c) {
      var d;
      if ((d = !Ws())) {
        var e = Wk().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (ql())
          (Wk().destination[a] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: ol(),
          }),
            Xk({ ctid: a, isDestination: !0 }),
            N(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            Kh.ja +
            "&cx=c";
          T(79) && (f += "&gtm=" + cn());
          Ts() && (f += "&sign=" + Kh.Cf);
          var g = Th || Vh ? Ss(b, f) : void 0;
          g || (g = Kp("https://", "http://", Kh.Ye + f));
          var h = a;
          c.siloed && (pl({ ctid: h, isDestination: !0 }), (h = al(h)));
          Wk().destination[h] = { state: 1, context: c, parent: ol() };
          Xk({ ctid: h, isDestination: !0 });
          pc(g);
        }
    };
  function Ws() {
    if (an()) {
      return !0;
    }
    return !1;
  }
  var $s = function (a, b) {
      Zs(a).event && Zs(a).event.push(b);
    },
    at = function () {
      var a = Zs(gl());
      return a.event ? a.event : [];
    };
  function Zs(a) {
    var b,
      c = Lh.r;
    c || ((c = { container: {} }), (Lh.r = c));
    b = c;
    var d = b.container[a];
    d || ((d = { entity: [], event: [] }), (b.container[a] = d));
    return d;
  }
  var bt = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    ct = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    dt = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    et =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    ht = function (a) {
      var b = ki("gtm.allowlist") || ki("gtm.whitelist");
      b && N(9);
      $k
        ? (b =
            "e c cid gct rep ogt_cons_disc ccd_ads_first ccd_ads_last ccd_fl_first ccd_fl_last ccd_ga_first ccd_ga_last ccd_mc_first ccd_mc_last".split(
              " "
            ))
        : Rh && (b = ["google", "gtagfl", "lcl", "zone"]);
      ft() &&
        (Rh ? N(116) : N(117),
        gt &&
          ((b = []),
          window.console &&
            window.console.log &&
            window.console.log("GTM blocked. See go/13687728.")));
      var c = b && $a(Sa(b), ct),
        d = ki("gtm.blocklist") || ki("gtm.blacklist");
      d || ((d = ki("tagTypeBlacklist")) && N(3));
      d ? N(8) : (d = []);
      ft() &&
        ((d = Sa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Sa(d).indexOf("google") && N(2);
      var e = d && $a(Sa(d), dt),
        f = {};
      return function (g) {
        var h = g && g[oe.Tb];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var l = ci[h] || [],
          n = a(h, l),
          p;
        p = Zs(gl()).entity;
        for (var q = 0; q < p.length; q++)
          try {
            n = n && p[q](h, l);
          } catch (y) {
            n = !1;
          }
        if (b) {
          var r;
          if ((r = n))
            a: {
              if (0 > c.indexOf(h))
                if (l && 0 < l.length)
                  for (var t = 0; t < l.length; t++) {
                    if (0 > c.indexOf(l[t])) {
                      N(11);
                      r = !1;
                      break a;
                    }
                  }
                else {
                  r = !1;
                  break a;
                }
              r = !0;
            }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(h);
          if (v) u = v;
          else {
            var w = Oa(e, l || []);
            w && N(10);
            u = w;
          }
        }
        var x = !n || u;
        x ||
          !(0 <= l.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (x = Oa(e, et));
        return (f[h] = x);
      };
    },
    gt = !1;
  var ft = function () {
    return bt.test(z.location && z.location.hostname);
  };
  var it = "",
    jt = [];
  function kt(a) {
    var b = "";
    it && (b = "&dl=" + encodeURIComponent(it));
    0 < jt.length && (b += "&tdp=" + jt.join("."));
    a.Fb && ((it = ""), (jt.length = 0), b && a.Oj());
    return b;
  }
  var lt = [];
  function mt(a) {
    if (!lt.length) return "";
    var b = "&tdc=" + lt.join("!");
    a.Fb && (a.Oj(), (lt.length = 0));
    return b;
  }
  var nt = { initialized: 11, complete: 12, interactive: 13 },
    ot = {},
    pt = Object.freeze(((ot[O.g.Pa] = !0), ot)),
    qt =
      0 <= G.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= G.location.search.indexOf("&gtm_diagnostics="),
    st = function (a, b, c) {
      if (zl && "config" === a && !(1 < Hp(b).J.length)) {
        var d,
          e = kc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = I(c.D);
        I(c.h, f);
        var g = [],
          h;
        for (h in d) {
          var l = rt(d[h], f);
          l.length && (qt && console.log(l), g.push(h));
        }
        g.length &&
          (g.length && zl && lt.push(b + "*" + g.join(".")),
          xb("TAGGING", nt[G.readyState] || 14));
        d[b] = f;
      }
    };
  function tt(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function rt(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? pt[q] : t;
      },
      f;
    for (f in tt(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        l = e(f, b),
        n = "object" === Sc(h) || "array" === Sc(h),
        p = "object" === Sc(l) || "array" === Sc(l);
      if (n && p) rt(h, l, c, g);
      else if (n || p || h !== l) c[g] = !0;
    }
    return Object.keys(c);
  }
  var ut = !1,
    vt = 0,
    wt = [];
  function xt(a) {
    if (!ut) {
      var b = G.createEventObject,
        c = "complete" == G.readyState,
        d = "interactive" == G.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        ut = !0;
        for (var e = 0; e < wt.length; e++) H(wt[e]);
      }
      wt.push = function () {
        for (var f = 0; f < arguments.length; f++) H(arguments[f]);
        return 0;
      };
    }
  }
  function zt() {
    if (!ut && 140 > vt) {
      vt++;
      try {
        G.documentElement.doScroll("left"), xt();
      } catch (a) {
        z.setTimeout(zt, 50);
      }
    }
  }
  var At = function () {
      ut = !1;
      vt = 0;
      if (
        ("interactive" == G.readyState && !G.createEventObject) ||
        "complete" == G.readyState
      )
        xt();
      else {
        tc(G, "DOMContentLoaded", xt);
        tc(G, "readystatechange", xt);
        if (G.createEventObject && G.documentElement.doScroll) {
          var a = !0;
          try {
            a = !z.frameElement;
          } catch (b) {}
          a && zt();
        }
        tc(z, "load", xt);
      }
    },
    Bt = function (a) {
      ut ? a() : wt.push(a);
    };
  var Dt = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: fl(),
    };
  };
  function Et(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var Gt = function (a, b) {
      this.h = !1;
      this.D = [];
      this.K = { tags: [] };
      this.T = !1;
      this.B = this.C = 0;
      Ft(this, a, b);
    },
    Ht = function (a, b, c, d) {
      if (Oh.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Uc(d) && (e = I(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    It = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Jt = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0;
      }
    },
    Ft = function (a, b, c) {
      void 0 !== b && a.Ef(b);
      c &&
        z.setTimeout(function () {
          return Jt(a);
        }, Number(c));
    };
  Gt.prototype.Ef = function (a) {
    var b = this,
      c = Xa(function () {
        return H(function () {
          a(fl(), b.K);
        });
      });
    this.h ? c() : this.D.push(c);
  };
  var Kt = function (a) {
      a.C++;
      return Xa(function () {
        a.B++;
        a.T && a.B >= a.C && Jt(a);
      });
    },
    Lt = function (a) {
      a.T = !0;
      a.B >= a.C && Jt(a);
    };
  var Mt = {},
    Ot = function () {
      return z[Nt()];
    },
    Pt = !1;
  var Qt = function (a) {
      z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
      var b = z.GoogleAnalyticsObject;
      if (z[b]) z.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ua());
        z[b] = c;
      }
      return z[b];
    },
    Rt = function (a) {
      if (zk()) {
        var b = Ot();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Nt() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var St = function (a) {},
    Tt = function (a, b) {
      return function () {
        var c = Ot(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              l = 0 > g.indexOf("&tid=" + b);
            l &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            l &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Zt = {},
    $t = {};
  function au(a, b) {
    if (zl) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Zt[a] = "&e=" + c + "&eid=" + a;
      Kl(a);
    }
  }
  function bu(a) {
    var b = a.eventId,
      c = a.Fb;
    if (!Zt[b]) return "";
    var d = $t[b] ? "" : "&es=1";
    d += Zt[b];
    c && ($t[b] = !0);
    return d;
  }
  var cu = {};
  function du(a, b) {
    zl && ((cu[a] = cu[a] || {}), (cu[a][b] = (cu[a][b] || 0) + 1));
  }
  function eu(a) {
    var b = a.eventId,
      c = a.Fb,
      d = cu[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete cu[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  var fu = {},
    gu = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8",
    };
  function hu(a, b, c) {
    if (zl) {
      fu[a] = fu[a] || [];
      var d = gu[b] || "0",
        e;
      e =
        c instanceof z.Element
          ? "1"
          : c instanceof z.Event
          ? "2"
          : c instanceof z.RegExp
          ? "3"
          : c === z
          ? "4"
          : c === G
          ? "5"
          : c instanceof z.Promise
          ? "6"
          : c instanceof z.Storage
          ? "7"
          : c instanceof z.Date
          ? "8"
          : c instanceof z.History
          ? "9"
          : c instanceof z.Performance
          ? "a"
          : c === z.crypto
          ? "b"
          : c instanceof z.Location
          ? "c"
          : c instanceof z.Navigator
          ? "d"
          : "object" !== typeof c || Uc(c)
          ? "0"
          : "e";
      fu[a].push("" + d + e);
    }
  }
  function iu(a) {
    var b = a.eventId,
      c = fu[b] || [];
    if (!c.length) return "";
    a.Fb && delete fu[b];
    return "&pcr=" + c.join(".");
  }
  var ju = {},
    ku = {};
  function lu(a, b, c) {
    if (zl && b) {
      var d = Uk(b);
      ju[a] = ju[a] || [];
      ju[a].push(c + d);
      var e = b["function"];
      if (!e) throw Error("Error: No function name given for function call.");
      var f = (Qe[e] ? "1" : "2") + d;
      ku[a] = ku[a] || [];
      ku[a].push(f);
      Kl(a);
    }
  }
  function mu(a) {
    var b = a.eventId,
      c = a.Fb,
      d = "",
      e = ju[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = ku[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete ju[b], delete ku[b]);
    return d;
  }
  function nu(a, b, c, d) {
    var e = Oe[a],
      f = ou(a, b, c, d);
    if (!f) return null;
    var g = af(e[oe.kj], c, []);
    if (g && g.length) {
      var h = g[0];
      f = nu(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.Aj ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function ou(a, b, c, d) {
    function e() {
      if (f[oe.Bk]) h();
      else {
        var w = bf(f, c, []),
          x = w[oe.Yj];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!wk(x[y])) {
              h();
              return;
            }
        var A = Ht(c.Wb, String(f[oe.Tb]), Number(f[oe.pe]), w[oe.Ck]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var J = Va() - F;
            lu(c.id, Oe[a], "5");
            It(c.Wb, A, "success", J);
            T(31) && ts(c, f, Br.F.nj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var J = Va() - F;
            lu(c.id, Oe[a], "6");
            It(c.Wb, A, "failure", J);
            T(31) && ts(c, f, Br.F.mj);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        lu(c.id, f, "1");
        var C = function () {
          si(3);
          var J = Va() - F;
          lu(c.id, f, "7");
          It(c.Wb, A, "exception", J);
          T(31) && ts(c, f, Br.F.lj);
          B || ((B = !0), h());
        };
        T(31) && ss(c, f);
        var F = Va();
        try {
          $e(w, { event: c, index: a, type: 1 });
        } catch (J) {
          C(J);
        }
        T(31) && ts(c, f, Br.F.oj);
      }
    }
    var f = Oe[a],
      g = b.onSuccess,
      h = b.onFailure,
      l = b.terminate;
    if (c.wh(f)) return null;
    var n = af(f[oe.pj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = nu(p.index, { onSuccess: g, onFailure: h, terminate: l }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.Aj ? l : q;
    }
    if (f[oe.fj] || f[oe.Ek]) {
      var r = f[oe.fj] ? Pe : c.sm,
        t = g,
        u = h;
      if (!r[a]) {
        e = Xa(e);
        var v = pu(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function pu(a, b, c) {
    var d = [],
      e = [];
    b[a] = qu(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ru;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = su;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function qu(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ru(a) {
    a();
  }
  function su(a, b) {
    b();
  }
  var uu = function (a, b) {
      return 1 === arguments.length ? tu("set", a) : tu("set", a, b);
    },
    vu = function (a, b) {
      return 1 === arguments.length ? tu("config", a) : tu("config", a, b);
    },
    wu = function (a, b, c) {
      c = c || {};
      c[O.g.Sb] = a;
      return tu("event", b, c);
    };
  function tu(a) {
    return arguments;
  }
  var xu = function () {
    this.h = [];
    this.B = [];
  };
  xu.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.B.length; f++)
      try {
        this.B[f](e);
      } catch (g) {}
  };
  xu.prototype.listen = function (a) {
    this.B.push(a);
  };
  xu.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  xu.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Wu = function (a, b, c) {
      Ru().enqueue(a, b, c);
    },
    Yu = function () {
      var a = Xu;
      Ru().listen(a);
    };
  function Ru() {
    var a = Lh.mb;
    a || ((a = new xu()), (Lh.mb = a));
    return a;
  }
  var fv = function (a) {
      var b = Lh.zones;
      return b
        ? b.getIsAllowedFn(bl(), a)
        : function () {
            return !0;
          };
    },
    gv = function (a) {
      var b = Lh.zones;
      return b ? b.isActive(bl(), a) : !0;
    },
    hv = function () {
      var a = Lh.zones;
      a && a.unregisterChild(bl());
    },
    iv = function () {
      $s(gl(), function (a, b) {
        return gv(b);
      });
    };
  var lv = function (a, b) {
    for (var c = [], d = 0; d < Oe.length; d++)
      if (a[d]) {
        var e = Oe[d];
        var f = Kt(b.Wb);
        try {
          var g = nu(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = e["function"];
            if (!h) throw "Error: No function name given for function call.";
            var l = Qe[h];
            c.push({
              Qj: d,
              Ij: (l ? l.priorityOverride || 0 : 0) || Et(e[oe.Tb], 1) || 0,
              execute: g,
            });
          } else jv(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(kv);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function kv(a, b) {
    var c,
      d = b.Ij,
      e = a.Ij;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Qj,
        h = b.Qj;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function jv(a, b) {
    if (zl) {
      var c = function (d) {
        var e = b.wh(Oe[d]) ? "3" : "4",
          f = af(Oe[d][oe.kj], b, []);
        f && f.length && c(f[0].index);
        lu(b.id, Oe[d], e);
        var g = af(Oe[d][oe.pj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var ov = !1,
    mv;
  var uv = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    T(31) && ms(b, d);
    if ("gtm.js" === d) {
      if (ov) return !1;
      ov = !0;
    }
    var e,
      f = !1,
      g = gv(b);
    if (T(71))
      for (var h = at(), l = 0; g && l < h.length; l++) g = (0, h[l])(d, b);
    if (g) e = fv(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = fv(Number.MAX_SAFE_INTEGER);
    }
    au(b, d);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = {
        id: b,
        priorityId: c,
        name: d,
        wh: ht(e),
        sm: [],
        Fj: function () {
          N(6);
          si(0);
        },
        uj: qv(),
        vj: rv(b),
        Wb: new Gt(function () {
          if (T(31)) {
          }
          n && n.apply(n, [].slice.call(arguments, 0));
        }, p),
      };
    T(62) && (q.Mj = du);
    T(31) && os(q.id, q.name);
    var r = mf(q);
    T(31) && ps(q.id, q.name);
    f && (r = sv(r));
    T(31) && ns(b, d);
    var t = lv(r, q),
      u = !1;
    Lt(q.Wb);
    ("gtm.js" !== d && "gtm.sync" !== d) || St(fl());
    return tv(r, t) || u;
  };
  function rv(a) {
    return function (b) {
      Yc(b) || hu(a, "input", b);
    };
  }
  function qv() {
    var a = {};
    a.event = pi("event", 1);
    a.ecommerce = pi("ecommerce", 1);
    a.gtm = pi("gtm");
    a.eventModel = pi("eventModel");
    return a;
  }
  function sv(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Oe[c][oe.Tb]);
        if (Nh[d] || void 0 !== Oe[c][oe.Fk] || di[d] || Et(d, 2)) b[c] = !0;
      }
    return b;
  }
  function tv(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Oe[c] && !Oh[String(Oe[c][oe.Tb])]) return !0;
    return !1;
  }
  var vv = {};
  function wv(a, b, c) {
    zl && void 0 !== a && ((vv[a] = vv[a] || []), vv[a].push(c + b), Kl(a));
  }
  function xv(a) {
    var b = a.eventId,
      c = a.Fb,
      d = "",
      e = vv[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete vv[b];
    return d;
  }
  var zv = function (a, b) {
      var c = Hp(el(a), !0);
      c && yv.register(c, b);
    },
    Av = function (a, b, c, d) {
      var e = Hp(c, d.isGtmEvent);
      e && yv.push("event", [b, a], e, d);
    },
    Bv = function (a, b, c, d) {
      var e = Hp(c, d.isGtmEvent);
      e && yv.push("get", [a, b], e, d);
    },
    Dv = function (a) {
      var b = Hp(el(a), !0),
        c;
      b ? (c = Cv(yv, b).h) : (c = {});
      return c;
    },
    Ev = function (a, b) {
      var c = Hp(el(a), !0);
      if (c) {
        var d = yv,
          e = I(b);
        I(Cv(d, c).h, e);
        Cv(d, c).h = e;
      }
    },
    Fv = function () {
      this.status = 1;
      this.K = {};
      this.h = {};
      this.B = {};
      this.T = null;
      this.D = {};
      this.C = !1;
    },
    Gv = function (a, b, c, d) {
      var e = Va();
      this.type = a;
      this.C = e;
      this.h = b;
      this.B = c;
      this.messageContext = d;
    },
    Hv = function () {
      this.B = {};
      this.C = {};
      this.h = [];
    },
    Cv = function (a, b) {
      var c = b.ba;
      return (a.B[c] = a.B[c] || new Fv());
    },
    Iv = function (a, b, c, d) {
      if (d.h) {
        var e = Cv(a, d.h),
          f = e.T;
        if (f) {
          var g = I(c),
            h = I(e.K[d.h.id]),
            l = I(e.D),
            n = I(e.h),
            p = I(a.C),
            q = {};
          if (zl)
            try {
              q = I(hi);
            } catch (v) {
              N(72);
            }
          var r = d.h.prefix,
            t = function (v) {
              wv(d.messageContext.eventId, r, v);
            },
            u = dm(
              cm(
                bm(
                  am(
                    $l(
                      Yl(
                        Xl(
                          Zl(
                            Wl(
                              Vl(
                                Ul(
                                  new Tl(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              l
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            wv(d.messageContext.eventId, r, "1"),
              st(d.type, d.h.id, u),
              f(d.h.id, b, d.C, u);
          } catch (v) {
            wv(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Hv.prototype.register = function (a, b, c) {
    var d = Cv(this, a);
    3 !== d.status &&
      ((d.T = b), (d.status = 3), c && (I(d.h, c), (d.h = c)), this.flush());
  };
  Hv.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === Cv(this, c).status &&
        ((Cv(this, c).status = 2), this.push("require", [{}], c, {})),
      Cv(this, c).C && (d.deferrable = !1));
    this.h.push(new Gv(a, c, b, d));
    d.deferrable || this.flush();
  };
  Hv.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable)
        !g || Cv(this, g).C
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== Cv(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            m(f.B[0], function (r, t) {
              I(bb(r, t), b.C);
            });
            break;
          case "config":
            var h = Cv(this, g);
            e.Gb = {};
            m(
              f.B[0],
              (function (r) {
                return function (t, u) {
                  I(bb(t, u), r.Gb);
                };
              })(e)
            );
            var l = !!e.Gb[O.g.vc];
            delete e.Gb[O.g.vc];
            var n = g.ba === g.id;
            l || (n ? (h.D = {}) : (h.K[g.id] = {}));
            (h.C && l) || Iv(this, O.g.ka, e.Gb, f);
            h.C = !0;
            n ? I(e.Gb, h.D) : (I(e.Gb, h.K[g.id]), N(70));
            d = !0;
            break;
          case "event":
            e.Qe = {};
            m(
              f.B[0],
              (function (r) {
                return function (t, u) {
                  I(bb(t, u), r.Qe);
                };
              })(e)
            );
            Iv(this, f.B[1], e.Qe, f);
            break;
          case "get":
            var p = {},
              q = ((p[O.g.Oa] = f.B[0]), (p[O.g.fb] = f.B[1]), p);
            Iv(this, O.g.Ia, q, f);
        }
        this.h.shift();
        Jv(this, f);
      }
      e = { Gb: e.Gb, Qe: e.Qe };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Jv = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = Cv(a, b.h).B[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.B)
            if (a.B.hasOwnProperty(e)) {
              var f = a.B[e];
              if (f && f.B)
                for (var g = f.B[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    yv = new Hv();
  var vf;
  var Kv = {},
    Lv = {},
    Mv = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Ve: e.Ve, Se: e.Se }, f++
      ) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (((e.Ve = Hp(g, b)), e.Ve)) {
            var h = dl();
            Ka(
              h,
              (function (r) {
                return function (t) {
                  return r.Ve.ba === t;
                };
              })(e)
            )
              ? c.push(g)
              : d.push(g);
          }
        } else {
          var l = Kv[g] || [];
          e.Se = {};
          l.forEach(
            (function (r) {
              return function (t) {
                return (r.Se[t] = !0);
              };
            })(e)
          );
          for (var n = bl(), p = 0; p < n.length; p++)
            if (e.Se[n[p]]) {
              c = c.concat(dl());
              break;
            }
          var q = Lv[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Ll: c, Ol: d };
    },
    Nv = function (a) {
      m(Kv, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Ov = function (a) {
      m(Lv, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Pv = "HA GF G UA AW DC MC".split(" "),
    Qv = !1,
    Rv = !1;
  function Sv(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: ei() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Tv = void 0,
    Uv = void 0;
  function Vv(a, b, c) {
    var d = I(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && N(136);
    var e = I(b);
    I(c, e);
    Wu(vu(bl()[0], e), a.eventId, d);
  }
  function Wv(a) {
    for (var b = Vs(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
      var e = d.value,
        f = (a && a[e]) || yv.C[e];
      if (f) return f;
    }
  }
  var Xv = {
      config: function (a, b) {
        var c = T(63),
          d = Sv(a, b);
        if (!(2 > a.length) && k(a[1])) {
          var e = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Uc(a[2])) || 3 < a.length) return;
            e = a[2];
          }
          var f = Hp(a[1], b.isGtmEvent);
          if (f) {
            var g, h, l;
            a: {
              if (!Zk.xf) {
                var n = hl(ol());
                if (
                  n &&
                  n.parent &&
                  n.context &&
                  1 === n.context.source &&
                  0 !== n.parent.ctid.indexOf("GTM-")
                ) {
                  var p = n.parent,
                    q = p.isDestination;
                  l = { Rl: hl(p), Kl: q };
                  break a;
                }
              }
              l = void 0;
            }
            var r = l;
            r && ((g = r.Rl), (h = r.Kl));
            au(d.eventId, "gtag.config");
            var t = f.ba,
              u = f.id !== t;
            if (u ? -1 === dl().indexOf(t) : -1 === bl().indexOf(t)) {
              if (!((c && b.inheritParentConfig) || (T(27) && e[O.g.xb]))) {
                var v = Wv(e);
                if (u)
                  Ys(t, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  Tv ? Vv(b, w, Tv) : Uv || (Uv = I(w));
                } else
                  Xs(t, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (g && (N(128), h && N(130), c && b.inheritParentConfig)) {
                var x = e;
                Uv ? Vv(b, Uv, x) : (!x[O.g.vc] && Qh && Tv) || (Tv = I(x));
                return;
              }
              if (Qh && !u && !e[O.g.vc]) {
                var y = Rv;
                Rv = !0;
                if (y) return;
              }
              Qv || N(43);
              if (!b.noTargetGroup)
                if (u) {
                  Ov(f.id);
                  var A = f.id,
                    B = e[O.g.Rd] || "default";
                  B = String(B).split(",");
                  for (var C = 0; C < B.length; C++) {
                    var F = Lv[B[C]] || [];
                    Lv[B[C]] = F;
                    0 > F.indexOf(A) && F.push(A);
                  }
                } else {
                  Nv(f.id);
                  var J = f.id,
                    K = e[O.g.Rd] || "default";
                  K = K.toString().split(",");
                  for (var P = 0; P < K.length; P++) {
                    var Q = Kv[K[P]] || [];
                    Kv[K[P]] = Q;
                    0 > Q.indexOf(J) && Q.push(J);
                  }
                }
              delete e[O.g.Rd];
              var aa = b.eventMetadata || {};
              aa.hasOwnProperty("is_external_event") ||
                (aa.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = aa;
              delete e[O.g.Yc];
              for (var ea = u ? [f.id] : dl(), W = 0; W < ea.length; W++) {
                var R = e,
                  pa = I(b),
                  ka = Hp(ea[W], pa.isGtmEvent);
                ka && yv.push("config", [R], ka, pa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          N(39);
          var c = Sv(a, b),
            d = a[1];
          "default" === d
            ? Lk(a[2])
            : "update" === d
            ? Mk(a[2], c)
            : "declare" === d
            ? b.fromContainerExecution && Kk(a[2])
            : "core_platform_services" === d && Nk(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && k(c)) {
          var d;
          if (2 < a.length) {
            if ((!Uc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = I(e)),
            e[O.g.Yc] && (g.eventCallback = e[O.g.Yc]),
            e[O.g.Md] && (g.eventTimeout = e[O.g.Md]));
          var h = Sv(a, b),
            l = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = l;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[O.g.Sb];
          void 0 === r &&
            ((r = ki(O.g.Sb, 2)), void 0 === r && (r = "default"));
          if (k(r) || Ja(r)) {
            var t;
            b.isGtmEvent
              ? (t = k(r) ? [r] : r)
              : (t = r.toString().replace(/\s+/g, "").split(","));
            var u = Mv(t, b.isGtmEvent),
              v = u.Ll,
              w = u.Ol;
            if (w.length)
              for (var x = Wv(q), y = 0; y < w.length; y++) {
                var A = Hp(w[y], b.isGtmEvent);
                A &&
                  Ys(A.ba, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Jp(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            au(l, c);
            for (var C = [], F = 0; F < B.length; F++) {
              var J = B[F],
                K = I(b);
              if (-1 !== Pv.indexOf(il(J.prefix))) {
                var P = I(d),
                  Q = K.eventMetadata || {};
                Q.hasOwnProperty("is_external_event") ||
                  (Q.is_external_event = !K.fromContainerExecution);
                K.eventMetadata = Q;
                delete P[O.g.Yc];
                Av(c, P, J.id, K);
              }
              C.push(J.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[O.g.Sb] = C.join())
              : delete g.eventModel[O.g.Sb];
            Qv || N(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            T(73) && g.eventModel[O.g.Ob] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        N(53);
        if (4 === a.length && k(a[1]) && k(a[2]) && Ga(a[3])) {
          var c = Hp(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Qv || N(43);
            var f = Wv();
            if (
              !Ka(dl(), function (h) {
                return c.ba === h;
              })
            )
              Ys(c.ba, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Pv.indexOf(il(c.prefix))) {
              Sv(a, b);
              var g = {};
              Fk(I(((g[O.g.Oa] = d), (g[O.g.fb] = e), g)));
              Bv(
                d,
                function (h) {
                  H(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Qv = !0;
          var c = Sv(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && k(a[1]) && Ga(a[2])) {
          var b = a[1],
            c = a[2],
            d = vf.B;
          d.h[b] ? d.h[b].push(c) : (d.h[b] = [c]);
          if ((N(74), "all" === a[1])) {
            N(75);
            var e = !1;
            try {
              e = a[2](fl(), "unknown", {});
            } catch (f) {}
            e || N(76);
          }
        } else {
          N(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && Uc(a[1])
          ? (c = I(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            Uc(a[2]) || Ja(a[2]) ? (c[a[1]] = I(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Sv(a, b),
            e = d.eventId,
            f = d.priorityId;
          I(c);
          var g = I(c);
          yv.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          T(15) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Yv = { policy: !0 };
  var Zv = function (a) {
      var b = z[Kh.ja].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    $v = function (a) {
      var b = z[Kh.ja],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var aw = !1,
    bw = [];
  function cw() {
    if (!aw) {
      aw = !0;
      for (var a = 0; a < bw.length; a++) H(bw[a]);
    }
  }
  var dw = function (a) {
    aw ? H(a) : bw.push(a);
  };
  var uw = function (a) {
    if (tw(a)) return a;
    this.ra = a;
  };
  uw.prototype.getUntrustedMessageValue = function () {
    return this.ra;
  };
  var tw = function (a) {
    return !a || "object" !== Sc(a) || Uc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  uw.prototype.getUntrustedMessageValue = uw.prototype.getUntrustedMessageValue;
  var vw = 0,
    ww = {},
    xw = [],
    yw = [],
    zw = !1,
    Aw = !1;
  function Bw(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Cw = function (a) {
      return z[Kh.ja].push(a);
    },
    Dw = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Cw(a);
    },
    Ew = function (a, b) {
      var c = Lh[Kh.ja],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = z.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Fw(a, b) {
    var c = a._clear || b.overwriteModelFields;
    m(a, function (e, f) {
      "_clear" !== e && (c && ni(e), ni(e, f));
    });
    $h || ($h = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = ei()), (a["gtm.uniqueEventId"] = d), ni("gtm.uniqueEventId", d));
    return uv(a);
  }
  function Gw(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Pa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Hw() {
    var a;
    if (yw.length) a = yw.shift();
    else if (xw.length) a = xw.shift();
    else return;
    var b;
    var c = a;
    if (zw || !Gw(c.message)) b = c;
    else {
      zw = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = ei());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      xw.unshift(h, c);
      if (zl) {
        var l = rf.ctid;
        if (l) {
          var n,
            p = hl(ol());
          n = p && p.context;
          var q,
            r = bj(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = rf.hh,
            w = Zk.xf;
          zl &&
            (it || (it = q),
            jt.push(
              l +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function Iw() {
    for (var a = !1, b; !Aw && (b = Hw()); ) {
      Aw = !0;
      delete hi.eventModel;
      ji();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Aw = !1;
      else {
        e.fromContainerExecution && oi();
        try {
          if (Ga(d))
            try {
              d.call(li);
            } catch (x) {}
          else if (Ja(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                l = f.slice(1),
                n = ki(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, l);
                } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (Pa(d)) {
              a: {
                if (d.length && k(d[0])) {
                  var r = Xv[d[0]];
                  if (r && (!e.fromContainerExecution || !Yv[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && N(101);
            } else p = d;
            if (p) {
              var t = Fw(p, e);
              a = t || a;
              q && t && N(113);
            }
          }
        } finally {
          e.fromContainerExecution && ji(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = ww[String(u)] || [], w = 0; w < v.length; w++)
              yw.push(Jw(v[w]));
            v.length && yw.sort(Bw);
            delete ww[String(u)];
            u > vw && (vw = u);
          }
          Aw = !1;
        }
      }
    }
    return !a;
  }
  function Kw() {
    if (T(31)) {
      var a = Lw();
    }
    var e = Iw();
    try {
      Zv(fl());
    } catch (f) {}
    return e;
  }
  function Xu(a) {
    if (vw < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      ww[b] = ww[b] || [];
      ww[b].push(a);
    } else
      yw.push(Jw(a)),
        yw.sort(Bw),
        H(function () {
          Aw || Iw();
        });
  }
  function Jw(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Mw = function () {
      function a(f) {
        var g = {};
        if (tw(f)) {
          var h = f;
          f = tw(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = kc(Kh.ja, []),
        c = (Lh[Kh.ja] = Lh[Kh.ja] || {});
      !0 === c.pruned && N(83);
      ww = Ru().get();
      Yu();
      Bt(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      dw(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Lh.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new uw(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        xw.push.apply(xw, h);
        var l = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (N(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof l || l;
        return Iw() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      xw.push.apply(xw, e);
      Lw() && (T(31) && ls(), H(Kw));
    },
    Lw = function () {
      var a = !0;
      return a;
    };
  function Nw(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Va();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Ow(a) {
    return a && 0 === a.indexOf("pending:") ? Nw(a.substr(8)) : !1;
  }
  var ix = function () {};
  var Te = {};
  Te.wf = new String("undefined");
  var Lx = z.clearTimeout,
    Mx = z.setTimeout,
    V = function (a, b, c, d) {
      if (an()) {
        b && H(b);
      } else return pc(a, b, c, d);
    },
    Nx = function () {
      return new Date();
    },
    Ox = function () {
      return z.location.href;
    },
    Px = function (a) {
      return $i(bj(a), "fragment");
    },
    Qx = function (a) {
      return aj(bj(a));
    },
    Rx = function (a, b) {
      return ki(a, b || 2);
    },
    Sx = function (a, b, c) {
      return b ? Dw(a, b, c) : Cw(a);
    },
    Tx = function (a, b) {
      z[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    Ux = function (a, b, c) {
      return zm(a, b, void 0 === c ? !0 : !!c);
    },
    Vx = function (a, b, c) {
      return 0 === Rm(a, b, c);
    },
    Wx = function (a, b) {
      if (an()) {
        b && H(b);
      } else rc(a, b);
    },
    Xx = function (a) {
      return !!qx(a, "init", !1);
    },
    Yx = function (a) {
      ox(a, "init", !0);
    },
    Zx = function (a, b, c) {
      Yc(a) || hu(c, b, a);
    };
  function xy(a, b) {
    function c(g) {
      var h = bj(g),
        l = $i(h, "protocol"),
        n = $i(h, "host", !0),
        p = $i(h, "port"),
        q = $i(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" === l && "80" === p) ||
        ("https" === l && "443" === p)
      )
        (l = "web"), (p = "default");
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function yy(a) {
    return zy(a) ? 1 : 0;
  }
  function zy(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = I(a, {});
        I({ arg1: c[d], any_of: void 0 }, e);
        if (yy(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return Tf(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Pf.length; g++) {
                var h = Pf[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (l) {}
          f = !1;
        }
        return f;
      case "_ew":
        return Qf(b, c);
      case "_eq":
        return Uf(b, c);
      case "_ge":
        return Vf(b, c);
      case "_gt":
        return Xf(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Wf(b, c);
      case "_lt":
        return Yf(b, c);
      case "_re":
        return Sf(b, c, a.ignore_case);
      case "_sw":
        return Zf(b, c);
      case "_um":
        return xy(b, c);
    }
    return !1;
  }
  var Ay;
  function By(a) {
    if (void 0 === Ay) return "";
    var b = "&ccy=" + Ay;
    a.Fb && (Ay = void 0);
    return b;
  }
  function Cy() {
    var a = [
      "&cv=1",
      "&rv=" + Kh.ah,
      "&tc=" +
        Oe.filter(function (b) {
          return b;
        }).length,
    ];
    Kh.ne && a.push("&x=" + Kh.ne);
    return a.join("");
  }
  function Dy() {
    function a(c, d) {
      var e = zb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  var Ey;
  function Fy(a, b, c) {
    Ey = Ey || new Sg();
    Ey.add(a, b, c);
  }
  function Gy(a, b) {
    var c = (Ey = Ey || new Sg());
    if (c.B.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.h.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.B[a] = Ga(b) ? lg(a, b) : mg(a, b);
  }
  function Hy() {
    return function (a) {
      var b;
      var c = Ey;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.B.hasOwnProperty(a))) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.jd();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var h = c.B.hasOwnProperty(a) ? c.B[a] : void 0;
          b = h;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function Iy(a, b) {
    var c = this;
  }
  Iy.M = "addConsentListener";
  var Jy;
  var Ky = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (Jy)
        try {
          a[b]();
        } catch (c) {
          N(77);
        }
      else a[b]();
  };
  function Ly(a, b, c) {
    var d = this,
      e;
    return e;
  }
  Ly.I = "internal.addDataLayerEventListener";
  function My(a, b, c) {}
  My.M = "addDocumentEventListener";
  function Ny(a, b, c, d) {}
  Ny.M = "addElementEventListener";
  function Oy(a) {}
  Oy.M = "addEventCallback";
  function Sy(a) {}
  Sy.I = "internal.addFormAbandonmentListener";
  function Ty(a, b, c, d) {}
  Ty.I = "internal.addFormData";
  var Uy = {},
    Vy = [],
    Wy = {},
    Xy = 0,
    Yy = 0;
  function ez(a, b) {}
  ez.I = "internal.addFormInteractionListener";
  function lz(a, b) {}
  lz.I = "internal.addFormSubmitListener";
  function qz(a) {}
  qz.I = "internal.addGaSendListener";
  var rz = function (a, b) {
    this.tagId = a;
    this.h = b;
  };
  function sz(a, b, c) {
    var d = this;
  }
  sz.I = "internal.loadGoogleTag";
  function tz(a, b, c) {}
  tz.I = "internal.addGoogleTagRestriction";
  var uz = {},
    vz = [];
  var Cz = function (a, b) {};
  Cz.I = "internal.addHistoryChangeListener";
  function Dz(a, b, c) {}
  Dz.M = "addWindowEventListener";
  function Ez(a, b) {
    return !0;
  }
  Ez.M = "aliasInWindow";
  function Fz(a, b, c) {}
  Fz.I = "internal.appendRemoteConfigParameter";
  function Gz() {
    var a = 2;
    return a;
  }
  function Hz(a, b) {
    var c;
    return c;
  }
  Hz.M = "callInWindow";
  function Iz(a) {}
  Iz.M = "callLater";
  function Jz(a) {}
  Jz.I = "callOnDomReady";
  function Kz(a) {}
  Kz.I = "callOnWindowLoad";
  function Lz(a) {
    var b;
    return b;
  }
  Lz.I = "internal.computeGtmParameter";
  function Mz(a, b) {
    var c;
    var d = Vc(c, this.h, Gz());
    void 0 === d && void 0 !== c && N(45);
    return d;
  }
  Mz.M = "copyFromDataLayer";
  function Nz(a) {
    var b;
    return b;
  }
  Nz.M = "copyFromWindow";
  function Oz(a, b) {
    var c;
    return c;
  }
  Oz.I = "internal.copyPreHit";
  function Pz(a, b) {
    var c = null,
      d = Gz();
    return Vc(c, this.h, d);
  }
  Pz.M = "createArgumentsQueue";
  function Qz(a) {
    var b;
    return Vc(b, this.h, Gz());
  }
  Qz.M = "createQueue";
  function Rz(a, b) {
    var c = null;
    return c;
  }
  Rz.I = "internal.createRegex";
  function Sz(a) {
    if (!a) return {};
    var b = a.Wk;
    return Dt(b.type, b.index, b.name);
  }
  function Tz(a) {
    return a ? { originatingEntity: Sz(a) } : {};
  }
  function Uz(a) {}
  Uz.I = "internal.declareConsentState";
  function Vz(a) {
    var b;
    return b;
  }
  Vz.I = "internal.detectUserProvidedData";
  var Xz = {},
    Yz = [],
    Zz = {},
    $z = 0,
    aA = 0;
  function gA(a, b) {
    var c = this;
    return b;
  }
  gA.I = "internal.enableAutoEventOnFormInteraction";
  function lA(a, b) {
    var c = this;
    return b;
  }
  lA.I = "internal.enableAutoEventOnFormSubmit";
  function qA() {
    var a = this;
  }
  qA.I = "internal.enableAutoEventOnGaSend";
  var rA = {},
    sA = [];
  function zA(a, b) {
    var c = this;
    return b;
  }
  zA.I = "internal.enableAutoEventOnHistoryChange";
  function DA(a, b) {
    var c = this;
    return b;
  }
  DA.I = "internal.enableAutoEventOnLinkClick";
  var EA, FA;
  function OA(a, b) {
    var c = this;
    return b;
  }
  OA.I = "internal.enableAutoEventOnScroll";
  var dc = da(["data-gtm-yt-inspected-"]),
    PA = ["www.youtube.com", "www.youtube-nocookie.com"],
    QA,
    RA = !1;
  function aB(a, b) {
    var c = this;
    return b;
  }
  aB.I = "internal.enableAutoEventOnYouTubeActivity";
  var bB;
  function cB(a) {
    var b = !1;
    return b;
  }
  cB.I = "internal.evaluateMatchingRules";
  function iB(a, b) {
    var c = !1;
    return c;
  }
  iB.I = "internal.evaluatePredicates";
  var XB = function () {
      var a = !0;
      (Rn(7) && Rn(9) && Rn(10)) || (a = !1);
      return a;
    },
    YB = function () {
      var a = !0;
      (Rn(3) && Rn(4)) || (a = !1);
      return a;
    };
  var bC = function (a, b) {
      if (!b.isGtmEvent) {
        var c = U(b, O.g.Oa),
          d = U(b, O.g.fb),
          e = U(b, c);
        if (void 0 === e) {
          var f = void 0;
          ZB.hasOwnProperty(c)
            ? (f = ZB[c])
            : $B.hasOwnProperty(c) && (f = $B[c]);
          1 === f && (f = aC(c));
          k(f)
            ? Ot()(function () {
                var g = Ot().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    cC = function (a, b) {
      var c = a[O.g.Pb],
        d = b + ".",
        e = a[O.g.U] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[O.g.yb];
      e = String(e).replace(/\s+/g, "").split(",");
      var h = Ot();
      h(d + "require", "linker");
      h(d + "linker:autoLink", e, f, g);
    },
    gC = function (a, b, c) {
      if (zk() && (!c.isGtmEvent || !dC[a])) {
        var d = !wk(O.g.P),
          e = function (f) {
            var g,
              h,
              l = Ot(),
              n = eC(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || fC(b, n.createOnlyFields)) {
              c.isGtmEvent &&
                ((g = "gtm" + ei()),
                (h = n.createOnlyFields),
                n.gtmTrackerName && (h.name = g));
              l(function () {
                var t = l.getByName(b);
                t && (p = t.get("clientId"));
                c.isGtmEvent || l.remove(b);
              });
              l("create", a, c.isGtmEvent ? h : n.createOnlyFields);
              d &&
                wk(O.g.P) &&
                ((d = !1),
                l(function () {
                  var t = Ot().getByName(c.isGtmEvent ? g : b);
                  !t ||
                    (t.get("clientId") == p && q) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&sst.gcut"] = Hh[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&sst.gcut"] = Hh[f])),
                    t.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? t.send("pageview")
                      : t.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                l(function () {
                  l.remove(g);
                });
            }
          };
        Rk(function () {
          return e(O.g.P);
        }, O.g.P);
        Rk(function () {
          return e(O.g.H);
        }, O.g.H);
        c.isGtmEvent && (dC[a] = !0);
      }
    },
    hC = function (a, b) {
      Ts() && b && (a[O.g.Nb] = b);
    },
    qC = function (a, b, c) {
      function d() {
        var K = U(c, O.g.mc);
        h(function () {
          if (!c.isGtmEvent && Uc(K)) {
            var P = u.fieldsToSend,
              Q = l().getByName(n),
              aa;
            for (aa in K)
              if (
                K.hasOwnProperty(aa) &&
                /^(dimension|metric)\d+$/.test(aa) &&
                void 0 != K[aa]
              ) {
                var ea = Q.get(aC(K[aa]));
                iC(P, aa, ea);
              }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var K = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: K });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        h = c.isGtmEvent ? Qt(U(c, "gaFunctionName")) : Qt();
      if (Ga(h)) {
        var l = Ot,
          n;
        c.isGtmEvent
          ? (n = U(c, "name") || U(c, "gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (K) {
            var P = [].slice.call(arguments, 0);
            P[0] = n ? n + "." + P[0] : "" + P[0];
            h.apply(window, P);
          },
          q = function (K) {
            var P = function (pa, ka) {
                for (var ja = 0; ka && ja < ka.length; ja++) p(pa, ka[ja]);
              },
              Q = c.isGtmEvent,
              aa = Q ? jC(u) : kC(b, c);
            if (aa) {
              var ea = {};
              hC(ea, K);
              p("require", "ec", "ec.js", ea);
              Q && aa.mh && p("set", "&cu", aa.mh);
              var W = aa.action;
              if (Q || "impressions" === W)
                if ((P("ec:addImpression", aa.Ej), !Q)) return;
              if ("promo_click" === W || "promo_view" === W || (Q && aa.Je)) {
                var R = aa.Je;
                P("ec:addPromo", R);
                if (R && 0 < R.length && "promo_click" === W) {
                  Q ? p("ec:setAction", W, aa.kb) : p("ec:setAction", W);
                  return;
                }
                if (!Q) return;
              }
              "promo_view" !== W &&
                "impressions" !== W &&
                (P("ec:addProduct", aa.Dc), p("ec:setAction", W, aa.kb));
            }
          },
          r = function (K) {
            if (K) {
              var P = {};
              if (Uc(K))
                for (var Q in lC) lC.hasOwnProperty(Q) && mC(lC[Q], Q, K[Q], P);
              hC(P, x);
              p("require", "linkid", P);
            }
          },
          t = function () {
            if (an()) {
            } else {
              var K = U(c, O.g.Pi);
              K &&
                (p("require", K, { dataLayer: Kh.ja }), p("require", "render"));
            }
          },
          u = eC(n, b, c),
          v = function (K, P, Q) {
            Q && (P = "" + P);
            u.fieldsToSend[K] = P;
          };
        !c.isGtmEvent &&
          fC(n, u.createOnlyFields) &&
          (h(function () {
            l() && l().remove(n);
          }),
          (nC[n] = !1));
        h("create", f, u.createOnlyFields);
        if (u.createOnlyFields[O.g.Nb] && !c.isGtmEvent) {
          var w =
            Th || Vh ? Ss(u.createOnlyFields[O.g.Nb], "/analytics.js") : void 0;
          w && (g = w);
        }
        var x = c.isGtmEvent
          ? u.fieldsToSet[O.g.Nb]
          : u.createOnlyFields[O.g.Nb];
        if (x) {
          var y = c.isGtmEvent
            ? u.fieldsToSet[O.g.Od]
            : u.createOnlyFields[O.g.Od];
          y && !nC[n] && ((nC[n] = !0), h(Tt(n, y)));
        }
        c.isGtmEvent
          ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(u.linkAttribution));
        var A = u[O.g.Aa];
        A && A[O.g.U] && cC(A, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var B = {};
            hC(B, x);
            p("require", "linkid", "linkid.js", B);
          }
          zk() && gC(f, n, c);
        }
        if (b === O.g.ic)
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: C });
            }
            q(x);
            p("send", "pageview");
            u.createOnlyFields._useUp && Rt(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        else
          b === O.g.ka
            ? (t(),
              Vp(f, c),
              U(c, O.g.jb) && (wp(["aw", "dc"]), Rt(n + ".")),
              0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
              gC(f, n, c))
            : b === O.g.Ia
            ? bC(n, c)
            : "screen_view" === b
            ? p("send", "screenview", u.fieldsToSend)
            : "timing_complete" === b
            ? ((u.fieldsToSend.hitType = "timing"),
              v("timingCategory", u.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", u.timingVar, !0)
                : v("timingVar", u.name, !0),
              v("timingValue", Qa(u.value)),
              void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
              p("send", u.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", u.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((u.fieldsToSend.hitType = "social"),
                  v("socialNetwork", u.socialNetwork, !0),
                  v("socialAction", u.socialAction, !0),
                  v("socialTarget", u.socialTarget, !0))
                : ((c.isGtmEvent || oC[b]) && q(x),
                  c.isGtmEvent && e(),
                  (u.fieldsToSend.hitType = "event"),
                  v("eventCategory", u.eventCategory, !0),
                  v("eventAction", u.eventAction || b, !0),
                  void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                  void 0 !== u.value && v("eventValue", Qa(u.value))),
              p("send", u.fieldsToSend));
        if (!pC && !c.isGtmEvent) {
          pC = !0;
          var F = function () {
              c.onFailure();
            },
            J = function () {
              l().loaded || F();
            };
          an() ? H(J) : pc(g, J, F);
        }
      } else H(c.onFailure);
    },
    rC = function (a, b, c, d) {
      Sk(
        function () {
          qC(a, b, d);
        },
        [O.g.P, O.g.H]
      );
    },
    tC = function (a) {
      function b(e) {
        function f(h, l) {
          for (var n = 0; n < l.length; n++) {
            var p = l[n];
            if (e[p]) {
              g[h] = e[p];
              break;
            }
          }
        }
        var g = I(e);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) g.category = e.category;
          else {
            for (var h = "", l = 0; l < sC.length; l++)
              void 0 !== e[sC[l]] && (h && (h += "/"), (h += e[sC[l]]));
            h && (g.category = h);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return g;
      }
      for (var c = [], d = 0; a && d < a.length; d++)
        a[d] && Uc(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    uC = function (a) {
      return wk(a);
    },
    vC = !1;
  var pC,
    nC = {},
    dC = {},
    wC = {},
    xC = Object.freeze(
      ((wC.page_hostname = 1),
      (wC[O.g.Z] = 1),
      (wC[O.g.tb] = 1),
      (wC[O.g.Ma] = 1),
      (wC[O.g.Fa] = 1),
      (wC[O.g.Na] = 1),
      (wC[O.g.kc] = 1),
      (wC[O.g.Tc] = 1),
      (wC[O.g.Ka] = 1),
      (wC[O.g.eb] = 1),
      (wC[O.g.fa] = 1),
      (wC[O.g.Qb] = 1),
      (wC[O.g.Ga] = 1),
      (wC[O.g.zb] = 1),
      wC)
    ),
    yC = {},
    ZB = Object.freeze(
      ((yC.client_storage = "storage"),
      (yC.sample_rate = 1),
      (yC.site_speed_sample_rate = 1),
      (yC.store_gac = 1),
      (yC.use_amp_client_id = 1),
      (yC[O.g.ab] = 1),
      (yC[O.g.ya] = "storeGac"),
      (yC[O.g.Ma] = 1),
      (yC[O.g.Fa] = 1),
      (yC[O.g.Na] = 1),
      (yC[O.g.kc] = 1),
      (yC[O.g.Tc] = 1),
      (yC[O.g.eb] = 1),
      yC)
    ),
    zC = {},
    AC = Object.freeze(
      ((zC._cs = 1),
      (zC._useUp = 1),
      (zC.allowAnchor = 1),
      (zC.allowLinker = 1),
      (zC.alwaysSendReferrer = 1),
      (zC.clientId = 1),
      (zC.cookieDomain = 1),
      (zC.cookieExpires = 1),
      (zC.cookieFlags = 1),
      (zC.cookieName = 1),
      (zC.cookiePath = 1),
      (zC.cookieUpdate = 1),
      (zC.legacyCookieDomain = 1),
      (zC.legacyHistoryImport = 1),
      (zC.name = 1),
      (zC.sampleRate = 1),
      (zC.siteSpeedSampleRate = 1),
      (zC.storage = 1),
      (zC.storeGac = 1),
      (zC.useAmpClientId = 1),
      (zC._cd2l = 1),
      zC)
    ),
    BC = Object.freeze({ anonymize_ip: 1 }),
    CC = {},
    $B = Object.freeze(
      ((CC.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (CC.app_id = 1),
      (CC.app_installer_id = 1),
      (CC.app_name = 1),
      (CC.app_version = 1),
      (CC.description = "exDescription"),
      (CC.fatal = "exFatal"),
      (CC.language = 1),
      (CC.page_hostname = "hostname"),
      (CC.transport_type = "transport"),
      (CC[O.g.wa] = "currencyCode"),
      (CC[O.g.Eg] = 1),
      (CC[O.g.fa] = "location"),
      (CC[O.g.Qb] = "page"),
      (CC[O.g.Ga] = "referrer"),
      (CC[O.g.zb] = "title"),
      (CC[O.g.pf] = 1),
      (CC[O.g.Ba] = 1),
      CC)
    ),
    DC = {},
    EC = Object.freeze(
      ((DC.content_id = 1),
      (DC.event_action = 1),
      (DC.event_category = 1),
      (DC.event_label = 1),
      (DC.link_attribution = 1),
      (DC.name = 1),
      (DC[O.g.Aa] = 1),
      (DC[O.g.Dg] = 1),
      (DC[O.g.Pa] = 1),
      (DC[O.g.aa] = 1),
      DC)
    ),
    FC = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    sC = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    GC = {},
    lC = Object.freeze(
      ((GC.levels = 1), (GC[O.g.Fa] = "duration"), (GC[O.g.kc] = 1), GC)
    ),
    HC = {},
    IC = Object.freeze(
      ((HC.anonymize_ip = 1),
      (HC.fatal = 1),
      (HC.send_page_view = 1),
      (HC.store_gac = 1),
      (HC.use_amp_client_id = 1),
      (HC[O.g.ya] = 1),
      (HC[O.g.Eg] = 1),
      HC)
    ),
    mC = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (IC[b] && (c = Ra(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[aC(b)] = c;
        else if (k(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    aC = function (a) {
      return a && k(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    JC = {},
    oC = Object.freeze(
      ((JC.checkout_progress = 1),
      (JC.select_content = 1),
      (JC.set_checkout_option = 1),
      (JC[O.g.ac] = 1),
      (JC[O.g.bc] = 1),
      (JC[O.g.Kb] = 1),
      (JC[O.g.fc] = 1),
      (JC[O.g.Ya] = 1),
      (JC[O.g.rb] = 1),
      (JC[O.g.Za] = 1),
      (JC[O.g.sa] = 1),
      (JC[O.g.hc] = 1),
      (JC[O.g.Da] = 1),
      JC)
    ),
    KC = {},
    LC = Object.freeze(
      ((KC.checkout_progress = 1),
      (KC.set_checkout_option = 1),
      (KC[O.g.hg] = 1),
      (KC[O.g.ig] = 1),
      (KC[O.g.ac] = 1),
      (KC[O.g.bc] = 1),
      (KC[O.g.jg] = 1),
      (KC[O.g.Kb] = 1),
      (KC[O.g.sa] = 1),
      (KC[O.g.hc] = 1),
      (KC[O.g.kg] = 1),
      KC)
    ),
    MC = {},
    NC = Object.freeze(
      ((MC.generate_lead = 1),
      (MC.login = 1),
      (MC.search = 1),
      (MC.select_content = 1),
      (MC.share = 1),
      (MC.sign_up = 1),
      (MC.view_search_results = 1),
      (MC[O.g.fc] = 1),
      (MC[O.g.Ya] = 1),
      (MC[O.g.rb] = 1),
      (MC[O.g.Za] = 1),
      (MC[O.g.Da] = 1),
      MC)
    ),
    OC = function (a) {
      var b = "general";
      LC[a]
        ? (b = "ecommerce")
        : NC[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    PC = {},
    QC = Object.freeze(
      ((PC.view_search_results = 1),
      (PC[O.g.Ya] = 1),
      (PC[O.g.Za] = 1),
      (PC[O.g.Da] = 1),
      PC)
    ),
    iC = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    RC = function (a) {
      if (Ja(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    eC = function (a, b, c) {
      var d = function (Q) {
          return U(c, Q);
        },
        e = {},
        f = {},
        g = {},
        h = {},
        l = RC(d(O.g.Ii));
      !c.isGtmEvent && l && iC(f, "exp", l);
      g["&gtm"] = cn(!0);
      c.isGtmEvent || (g._no_slc = !0);
      zk() && (h._cs = uC);
      var n = d(O.g.mc);
      if (!c.isGtmEvent && Uc(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && iC(f, p, q);
          }
      for (var r = !c.isGtmEvent, t = Ql(c), u = 0; u < t.length; ++u) {
        var v = t[u];
        if (c.isGtmEvent) {
          var w = d(v);
          FC.hasOwnProperty(v)
            ? (e[v] = w)
            : AC.hasOwnProperty(v)
            ? (h[v] = w)
            : (g[v] = w);
        } else {
          var x = void 0;
          x = v !== O.g.X ? d(v) : Rl(c, v);
          if (EC.hasOwnProperty(v)) mC(EC[v], v, x, e);
          else if (BC.hasOwnProperty(v)) mC(BC[v], v, x, g);
          else if ($B.hasOwnProperty(v)) mC($B[v], v, x, f);
          else if (ZB.hasOwnProperty(v)) mC(ZB[v], v, x, h);
          else if (/^(dimension|metric|content_group)\d+$/.test(v))
            mC(1, v, x, f);
          else if (v === O.g.X) {
            if (!vC) {
              var y = db(x);
              y && (f["&did"] = y);
            }
            var A = void 0,
              B = void 0;
            b === O.g.ka
              ? (A = db(Rl(c, v), "."))
              : ((A = db(Rl(c, v, 1), ".")), (B = db(Rl(c, v, 2), ".")));
            A && (f["&gdid"] = A);
            B && (f["&edid"] = B);
          } else
            v === O.g.Ka && 0 > t.indexOf(O.g.kc) && (h.cookieName = x + "_ga");
          T(46) &&
            xC[v] &&
            (c.B.hasOwnProperty(v) ||
              (b === O.g.ka && c.h.hasOwnProperty(v))) &&
            (r = !1);
        }
      }
      T(46) && r && (f["&jsscut"] = "1");
      (!1 !== d(O.g.Ze) && !1 !== d(O.g.tb) && XB()) ||
        (g.allowAdFeatures = !1);
      (lm(c) && YB()) || (g.allowAdPersonalizationSignals = !1);
      !c.isGtmEvent && d(O.g.jb) && (h._useUp = !0);
      if (c.isGtmEvent) {
        h.name = h.name || e.gtmTrackerName;
        var C = g.hitCallback;
        g.hitCallback = function () {
          Ga(C) && C();
          c.onSuccess();
        };
      } else {
        iC(h, "cookieDomain", "auto");
        iC(g, "forceSSL", !0);
        iC(e, "eventCategory", OC(b));
        QC[b] && iC(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? iC(e, "eventLabel", d(O.g.Dg))
          : "search" === b || "view_search_results" === b
          ? iC(e, "eventLabel", d(O.g.Vi))
          : "select_content" === b && iC(e, "eventLabel", d(O.g.Di));
        var F = e[O.g.Aa] || {},
          J = F[O.g.qc];
        J || (0 != J && F[O.g.U])
          ? (h.allowLinker = !0)
          : !1 === J && iC(h, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        h.name = a;
      }
      zk() &&
        ((g["&gcs"] = mm()),
        T(53) && (g["&gcd"] = qm(c)),
        wk(O.g.P) || (h.storage = "none"),
        wk(O.g.H) || ((g.allowAdFeatures = !1), (h.storeGac = !1)));
      T(55) && (Pk() && (g["&dma_cps"] = rm()), (g["&dma"] = xi() ? "1" : "0"));
      var K = Us(c) || d(O.g.Nb),
        P = d(O.g.Od);
      K && (c.isGtmEvent || (h[O.g.Nb] = K), (h._cd2l = !0));
      P && !c.isGtmEvent && (h[O.g.Od] = P);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = h;
      return e;
    },
    jC = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.mh = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.Ej = "impressions" === b.translateIfKeyEquals ? tC(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Je = "promoView" === b.translateIfKeyEquals ? tC(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Je = "promoClick" === b.translateIfKeyEquals ? tC(f) : f;
        c.kb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var h = b[g].products;
          c.Dc = "products" === b.translateIfKeyEquals ? tC(h) : h;
          c.kb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    kC = function (a, b) {
      function c(u) {
        return {
          id: d(O.g.ma),
          affiliation: d(O.g.og),
          revenue: d(O.g.aa),
          tax: d(O.g.df),
          shipping: d(O.g.Vc),
          coupon: d(O.g.pg),
          list: d(O.g.cf) || d(O.g.Uc) || u,
        };
      }
      for (
        var d = function (u) {
            return U(b, u);
          },
          e = d(O.g.W),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][O.g.cf] || e[g][O.g.Uc]);
        g++
      );
      var h = d(O.g.mc);
      if (Uc(h))
        for (var l = 0; e && l < e.length; ++l) {
          var n = e[l],
            p;
          for (p in h)
            h.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != h[p] &&
              iC(n, p, n[h[p]]);
        }
      var q = null,
        r = d(O.g.Hi);
      if (a === O.g.sa || a === O.g.hc) q = { action: a, kb: c(), Dc: tC(e) };
      else if (a === O.g.ac) q = { action: "add", kb: c(), Dc: tC(e) };
      else if (a === O.g.bc) q = { action: "remove", kb: c(), Dc: tC(e) };
      else if (a === O.g.Da) q = { action: "detail", kb: c(f), Dc: tC(e) };
      else if (a === O.g.Ya) q = { action: "impressions", Ej: tC(e) };
      else if (a === O.g.Za) q = { action: "promo_view", Je: tC(r) || tC(e) };
      else if (("select_content" === a && r && 0 < r.length) || a === O.g.rb)
        q = { action: "promo_click", Je: tC(r) || tC(e) };
      else if ("select_content" === a || a === O.g.fc)
        q = {
          action: "click",
          kb: { list: d(O.g.cf) || d(O.g.Uc) || f },
          Dc: tC(e),
        };
      else if (a === O.g.Kb || "checkout_progress" === a) {
        var t = { step: a === O.g.Kb ? 1 : d(O.g.bf), option: d(O.g.Id) };
        q = { action: "checkout", Dc: tC(e), kb: I(c(), t) };
      } else
        "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            kb: { step: d(O.g.bf), option: d(O.g.Id) },
          });
      q && (q.mh = d(O.g.wa));
      return q;
    },
    SC = {},
    fC = function (a, b) {
      var c = SC[a];
      SC[a] = I(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  function TC(a, b, c, d) {}
  TC.I = "internal.executeEventProcessor";
  var UC = function (a) {
    var b;
    return b;
  };
  function VC(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  VC.M = "getCookieValues";
  function WC() {
    return ui();
  }
  WC.I = "internal.getCountryCode";
  function XC() {
    var a = [];
    return Vc(a);
  }
  XC.I = "internal.getDestinationIds";
  function YC(a) {
    var b = null;
    return b;
  }
  YC.M = "getElementById";
  function ZC(a) {
    var b;
    return b;
  }
  ZC.I = "internal.getElementValue";
  function $C(a) {
    var b = null;
    return b;
  }
  $C.I = "internal.getElementsByCssSelector";
  var aD = {};
  aD.deferGaGamLink = T(70);
  aD.enableAddFormDataApi = T(68);
  aD.enableAddGoogleTagRestrictionApi = T(43);
  aD.enableAdsConversionValidation = T(40);
  aD.enableAdsHistoryChangeEvents = T(17);
  aD.enableAutoPiiOnPhoneAndAddress = T(58);
  aD.enableCcdAutoRedaction = T(44);
  aD.enableCcdPreAutoPiiDetection = T(21);
  aD.enableCcdUserData = T(10);
  aD.enableConsentDisclosureActivity = T(65);
  aD.enableDeferAllEnhancedMeasurement = T(67);
  aD.enableDetectUserProvidedDataApi = T(83);
  aD.enableEesPagePath = T(19);
  aD.enableEuidAutoMode = T(18);
  aD.enableFormSkipValidation = T(60);
  aD.enableGa4OnoRemarketing = T(16);
  aD.enableGetElementsByCssSelectorApi = T(85);
  aD.enableMergeRemoteConfigApi = T(75);
  aD.enableRemoveFormDataApi = T(69);
  aD.includeQueryInEesPagePath = T(25);
  aD.pixieSetCorePlatformServices = T(52);
  aD.useEnableAutoEventOnFormApis = T(43);
  aD.autoPiiEligible = zi();
  function bD() {
    return Vc(aD);
  }
  bD.I = "internal.getFlags";
  function cD(a, b) {
    var c;
    return c;
  }
  cD.I = "internal.getProductSettingsParameter";
  function dD(a, b) {
    var c;
    return c;
  }
  dD.M = "getQueryParameters";
  function eD(a, b) {
    var c;
    return c;
  }
  eD.M = "getReferrerQueryParameters";
  function fD(a) {
    var b = "";
    return b;
  }
  fD.M = "getReferrerUrl";
  function gD() {
    return vi();
  }
  gD.I = "internal.getRegionCode";
  function hD(a, b) {
    var c;
    return c;
  }
  hD.I = "internal.getRemoteConfigParameter";
  function iD(a) {
    var b = "";
    return b;
  }
  iD.M = "getUrl";
  function jD() {
    M(this, "get_user_agent");
    return hc.userAgent;
  }
  jD.M = "getUserAgent";
  function uD() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var vD = function () {
      var a = uD();
      a.hid = a.hid || La();
      return a.hid;
    },
    wD = function (a, b) {
      var c = uD();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var sE = window,
    tE = document,
    uE = function (a) {
      var b = sE._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        tE.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === sE["ga-disable-" + a])
      )
        return !0;
      try {
        var c = sE.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = tm("AMP_TOKEN", String(tE.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return tE.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function CE(a) {
    m(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[O.g.Qa] || {};
    m(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var LE = function (a, b) {};
  function KE(a, b) {
    var c = function () {};
    return c;
  }
  function ME(a, b, c) {}
  var NE = KE;
  function PE(a, b, c) {
    var d = this;
  }
  PE.I = "internal.gtagConfig";
  function QE() {
    var a = {};
    return a;
  }
  function SE(a, b) {}
  SE.M = "gtagSet";
  function TE(a, b) {}
  TE.M = "injectHiddenIframe";
  var UE = {};
  function WE(a, b, c, d) {}
  var XE = Object.freeze({ dl: 1, id: 1 }),
    YE = {};
  function ZE(a, b, c, d) {}
  WE.M = "injectScript";
  ZE.I = "internal.injectScript";
  function $E(a) {
    var b = !0;
    return b;
  }
  $E.M = "isConsentGranted";
  var aF = function () {
    var a = Ig(function (b) {
      this.h.h.log("error", b);
    });
    a.M = "JSON";
    return a;
  };
  var bF = function () {
      return !1;
    },
    cF = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  var dF = ["textContent", "value", "tagName", "children", "childElementCount"];
  function eF(a) {
    var b;
    return b;
  }
  eF.I = "internal.locateUserData";
  function gF() {}
  gF.M = "logToConsole";
  function hF(a, b) {}
  hF.I = "internal.mergeRemoteConfig";
  function iF(a) {
    var b = void 0;
    return b;
  }
  iF.M = "parseUrl";
  function jF(a) {}
  jF.I = "internal.processAsNewEvent";
  function kF(a, b) {
    var c = !1;
    return c;
  }
  kF.M = "queryPermission";
  function lF() {
    var a = "";
    return a;
  }
  lF.M = "readCharacterSet";
  function mF() {
    var a = "";
    return a;
  }
  mF.M = "readTitle";
  function nF(a, b) {
    var c = this;
  }
  nF.I = "internal.registerCcdCallback";
  function oF(a) {
    return !0;
  }
  oF.I = "internal.registerDestination";
  var pF = Object.freeze(["config", "event", "get", "set"]);
  function qF(a, b, c) {}
  qF.I = "internal.registerGtagCommandListener";
  function rF(a, b) {
    var c = !1;
    return c;
  }
  rF.I = "internal.removeDataLayerEventListener";
  function sF(a, b) {}
  sF.I = "internal.removeFormData";
  function tF() {}
  tF.M = "resetDataLayer";
  function uF(a, b, c, d) {}
  uF.I = "internal.sendGtagEvent";
  function vF(a, b, c) {}
  vF.M = "sendPixel";
  function wF(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  wF.M = "setCookie";
  function xF(a, b) {}
  xF.M = "setCorePlatformServices";
  function yF(a) {}
  yF.M = "setDefaultConsentState";
  function zF(a, b) {}
  zF.I = "internal.setDelegatedConsentType";
  function AF(a, b, c) {
    return !1;
  }
  AF.M = "setInWindow";
  function BF(a, b, c) {}
  BF.I = "internal.setProductSettingsParameter";
  function CF(a, b, c) {}
  CF.I = "internal.setRemoteConfigParameter";
  function DF(a, b, c, d) {
    var e = this;
  }
  DF.M = "sha256";
  function EF(a, b, c) {}
  EF.I = "internal.sortRemoteConfigParameters";
  var FF = {},
    GF = {};
  FF.M = "templateStorage";
  FF.getItem = function (a) {
    var b = null;
    return b;
  };
  FF.setItem = function (a, b) {};
  FF.removeItem = function (a) {};
  FF.clear = function () {};
  function HF(a, b) {
    var c = !1;
    return c;
  }
  HF.I = "internal.testRegex";
  var IF = function (a) {
    var b;
    return b;
  };
  function JF(a) {}
  JF.M = "updateConsentState";
  var KF = function () {
    var a = function (c) {
        return Gy(c.I, c);
      },
      b = function (c) {
        return Fy(c.M, c);
      };
    b(Iy);
    b(Oy);
    b(Ez);
    b(Hz);
    b(Iz);
    b(Mz);
    b(Nz);
    b(Pz);
    b(aF());
    b(Qz);
    b(VC);
    b(dD);
    b(eD);
    b(fD);
    b(iD);
    b(SE);
    b(TE);
    b(WE);
    b($E);
    b(gF);
    b(iF);
    b(kF);
    b(lF);
    b(mF);
    b(vF);
    b(wF);
    b(yF);
    b(AF);
    b(DF);
    b(FF);
    b(JF);
    Fy("Math", rg());
    Fy("Object", Qg);
    Fy("TestHelper", Ug());
    Fy("assertApi", ng);
    Fy("assertThat", og);
    Fy("decodeUri", sg);
    Fy("decodeUriComponent", tg);
    Fy("encodeUri", ug);
    Fy("encodeUriComponent", vg);
    Fy("fail", Dg);
    Fy("generateRandom", Eg);
    Fy("getContainerVersion", Fg);
    Fy("getTimestamp", Gg);
    Fy("getTimestampMillis", Gg);
    Fy("getType", Hg);
    Fy("makeInteger", Jg);
    Fy("makeNumber", Kg);
    Fy("makeString", Lg);
    Fy("makeTableMap", Mg);
    Fy("mock", Pg);
    Fy("fromBase64", UC, !("atob" in z));
    Fy("localStorage", cF, !bF());
    Fy("toBase64", IF, !("btoa" in z));
    a(Ly);
    a(ez);
    a(lz);
    a(qz);
    a(Cz);
    a(Fz);
    a(Kz);
    a(Oz);
    a(Rz);
    a(Uz);
    a(gA);
    a(lA);
    a(qA);
    a(zA);
    a(DA);
    a(OA);
    a(aB);
    a(wg);
    a(cB);
    a(WC);
    a(XC);
    a(bD);
    a(cD);
    a(gD);
    a(hD);
    a(PE);
    a(ZE);
    a(sz);
    a(eF);
    a(jF);
    a(nF);
    a(qF);
    a(rF);
    a(uF);
    a(zF);
    a(BF);
    a(CF);
    a(EF);
    a(HF);
    Gy("internal.GtagSchema", QE());
    T(52) && b(xF);
    T(68) && a(Ty);
    T(69) && a(sF);
    T(74) && a(tz);
    T(75) && a(hF);
    T(78) && a(oF);
    T(80) && a(TC);
    T(83) && a(Vz);
    T(84) && a(ZC);
    T(85) && a($C);
    return Hy();
  };
  var LF = function () {
      return !1;
    },
    MF = function () {
      var a = {};
      return function (b, c, d) {};
    };
  var NF,
    RF = function () {
      var a = data.sandboxed_scripts,
        b = data.security_groups,
        c = data.infra;
      a: {
        var d = data.runtime || [],
          e = data.runtime_lines;
        NF = new ie();
        OF();
        Ke = PF();
        var f = NF,
          g = KF();
        nb(f.h, "require", g);
        for (var h = [], l = 0; l < d.length; l++) {
          var n = d[l];
          if (!Ja(n) || 3 > n.length) {
            if (0 === n.length) continue;
            break a;
          }
          e && e[l] && e[l].length && ef(n, e[l]);
          try {
            NF.execute(n), T(62) && zl && 50 === n[0] && h.push(n[1]);
          } catch (u) {}
        }
        T(62) && (Ye = h);
      }
      if (void 0 !== a)
        for (var p = ["sandboxedScripts"], q = 0; q < a.length; q++) {
          var r = a[q].replace(/^_*/, "");
          ci[r] = p;
        }
      QF(b);
      if (void 0 !== c) for (var t = 0; t < c.length; t++) di[c[t]] = !0;
    };
  function PF() {
    var a = NF;
    return function (b, c, d) {
      var e = d && d.event;
      SF(c);
      var f = new kb();
      m(c, function (q, r) {
        var t = Vc(r);
        void 0 === t && void 0 !== r && N(44);
        f.set(q, t);
      });
      a.h.h.D = jf();
      var g = {
        tj: wf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Ef:
          void 0 !== e
            ? function (q) {
                return e.Wb.Ef(q);
              }
            : void 0,
        jd: function () {
          return b;
        },
        log: function () {},
        Wk: { index: d && d.index, type: d && d.type, name: d && d.name },
        fm: !!Et(b, 3),
      };
      if (LF()) {
        var h = MF(),
          l = void 0,
          n = void 0;
        g.Xa = {
          Wh: [],
          qe: {},
          lb: function (q, r, t) {
            1 === r && (l = q);
            7 === r && (n = t);
            h(q, r, t);
          },
          Ih: Ng(),
        };
        g.log = function (q, r) {
          if (l) {
            var t = Array.prototype.slice.call(arguments, 1);
            h(l, 4, { level: q, source: n, message: t });
          }
        };
      }
      var p = ke(a, g, [b, f]);
      a.h.h.D = void 0;
      p instanceof ua && "return" === p.h && (p = p.B);
      return Wc(p);
    };
  }
  function SF(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ga(b) &&
      (a.gtmOnSuccess = function () {
        H(b);
      });
    Ga(c) &&
      (a.gtmOnFailure = function () {
        H(c);
      });
  }
  function OF() {
    NF.h.h.K = function (a, b, c) {
      Lh.SANDBOXED_JS_SEMAPHORE = Lh.SANDBOXED_JS_SEMAPHORE || 0;
      Lh.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Lh.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function QF(a) {
    void 0 !== a &&
      m(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          ci[e] = ci[e] || [];
          ci[e].push(b);
        }
      });
  }
  var TF = encodeURI,
    Y = encodeURIComponent,
    UF = function (a, b, c) {
      sc(a, b, c);
    },
    VF = function (a, b) {
      if (!a) return !1;
      var c = $i(bj(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    WF = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Z = { o: {} };
  (Z.o.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.s = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.o.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.s = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
        Z.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Rx(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Zx(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.o.rep = ["google"]),
    (function () {
      (function (a) {
        Z.__rep = a;
        Z.__rep.s = "rep";
        Z.__rep.isVendorTemplate = !0;
        Z.__rep.priorityOverride = 0;
        Z.__rep.isInfrastructure = !1;
      })(function (a) {
        var b = il(a.vtp_containerId),
          c = Hp(b, !0),
          d;
        switch (c.prefix) {
          case "AW":
            d = lB;
            break;
          case "DC":
            d = IB;
            break;
          case "GF":
            d = OB;
            break;
          case "HA":
            d = TB;
            break;
          case "UA":
            d = rC;
            break;
          case "MC":
            d = NE(c, a.vtp_gtmEventId);
            break;
          default:
            H(a.vtp_gtmOnFailure);
            return;
        }
        d
          ? (H(a.vtp_gtmOnSuccess),
            zv(b, d),
            a.vtp_remoteConfig && Ev(b, a.vtp_remoteConfig || {}))
          : H(a.vtp_gtmOnFailure);
      });
    })();

  (Z.o.cid = ["google"]),
    (function () {
      (function (a) {
        Z.__cid = a;
        Z.__cid.s = "cid";
        Z.__cid.isVendorTemplate = !0;
        Z.__cid.priorityOverride = 0;
        Z.__cid.isInfrastructure = !1;
      })(function () {
        return fl();
      });
    })();

  (Z.o.read_container_data = ["google"]),
    (function () {
      (function (a) {
        Z.__read_container_data = a;
        Z.__read_container_data.s = "read_container_data";
        Z.__read_container_data.isVendorTemplate = !0;
        Z.__read_container_data.priorityOverride = 0;
        Z.__read_container_data.isInfrastructure = !1;
      })(function () {
        return {
          assert: function () {},
          N: function () {
            return {};
          },
        };
      });
    })();

  (Z.o.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.s = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
        Z.__get.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = wu(String(b.streamId), d, c);
        Wu(f, e.eventId, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  var nH = {};
  nH.dataLayer = li;
  nH.callback = function (a) {
    bi.hasOwnProperty(a) && Ga(bi[a]) && bi[a]();
    delete bi[a];
  };
  nH.bootstrap = 0;
  nH._spx = !1;
  function oH() {
    Lh[fl()] = Lh[fl()] || nH;
    ll();
    ql() ||
      m(rl(), function (a, b) {
        Ys(a, b.transportUrl, b.context);
        N(92);
      });
    Ya(ci, Z.o);
    Xe = nf;
  }
  (function (a) {
    function b() {
      l = G.documentElement.getAttribute("data-tag-assistant-present");
      Nw(l) && (h = g.uk);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (G.referrer) {
        var d = bj(G.referrer);
        c = "cct.google" === Zi(d, "host");
      }
      if (!c) {
        var e = zm("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((z["__TAGGY_INSTALLED"] = !0),
        pc("https://cct.google/taggy/agent.js"));
    }
    if (Xh) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          Rh ? ((v = "OGT"), (w = "GTAG")) : Xh && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (z["google.tagmanager.debugui2.queue"] = x),
            pc(
              "https://" +
                Kh.Ye +
                "/debug/bootstrap?id=" +
                rf.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                cn()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: jc,
              containerProduct: v,
              debug: !1,
              id: rf.ctid,
              destinations: cl(),
            },
          };
          y.data.resume = function () {
            a();
          };
          Kh.Zj && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = { Hm: 1, vk: 2, Gk: 3, dk: 4, uk: 5 },
        h = void 0,
        l = void 0,
        n = $i(z.location, "query", !1, void 0, "gtm_debug");
      Nw(n) && (h = g.vk);
      if (!h && G.referrer) {
        var p = bj(G.referrer);
        "tagassistant.google.com" === Zi(p, "host") && (h = g.Gk);
      }
      if (!h) {
        var q = zm("__TAG_ASSISTANT");
        q.length && q[0].length && (h = g.dk);
      }
      h || b();
      if (!h && Ow(l)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            h && jc ? f(h) : a();
          },
          t = !1;
        tc(
          G,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        z.setTimeout(function () {
          r();
        }, 200);
      } else h && jc ? f(h) : a();
    }
  })(function () {
    try {
      if ((jl(), T(31) && js(), dk().B(), On(), ml())) {
        hv();
      } else {
        We();
        Qe = Z;
        Re = yy;
        vf = new uf();
        RF();
        oH();
        Tk();
        Mw();
        At();
        aw = !1;
        "complete" === G.readyState ? cw() : tc(z, "load", cw);
        zl && (ul(Nl), z.setInterval(Ml, 864e5));
        ul(Cy);
        ul(bu);
        ul(Dy);
        ul(xv);
        ul(mu);
        ul(mt);
        ul(Tn);
        ul(kt);
        ul(iu);
        ul(By);
        T(62) && ul(eu);
        ix();
        si(1);
        T(72) && iv();
        ai = Va();
        nH.bootstrap = ai;
        T(31) && ks();
      }
    } catch (b) {
      si(4), Jl();
    }
  });
})();
