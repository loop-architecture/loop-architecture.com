function Fp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vp = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is = Symbol.for("react.element"), Kw = Symbol.for("react.portal"), Ww = Symbol.for("react.fragment"), Yw = Symbol.for("react.strict_mode"), Xw = Symbol.for("react.profiler"), Qw = Symbol.for("react.provider"), qw = Symbol.for("react.context"), Gw = Symbol.for("react.forward_ref"), Jw = Symbol.for("react.suspense"), Zw = Symbol.for("react.memo"), e1 = Symbol.for("react.lazy"), ad = Symbol.iterator;
function t1(e) {
  return e === null || typeof e != "object" ? null : (e = ad && e[ad] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Hp = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Up = Object.assign, Kp = {};
function ci(e, t, n) {
  this.props = e, this.context = t, this.refs = Kp, this.updater = n || Hp;
}
ci.prototype.isReactComponent = {};
ci.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ci.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wp() {
}
Wp.prototype = ci.prototype;
function Nc(e, t, n) {
  this.props = e, this.context = t, this.refs = Kp, this.updater = n || Hp;
}
var Cc = Nc.prototype = new Wp();
Cc.constructor = Nc;
Up(Cc, ci.prototype);
Cc.isPureReactComponent = !0;
var ud = Array.isArray, Yp = Object.prototype.hasOwnProperty, bc = { current: null }, Xp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qp(e, t, n) {
  var r, i = {}, s = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Yp.call(t, r) && !Xp.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Is, type: e, key: s, ref: o, props: i, _owner: bc.current };
}
function n1(e, t) {
  return { $$typeof: Is, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Mc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Is;
}
function r1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var cd = /\/+/g;
function ka(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? r1("" + e.key) : t.toString(36);
}
function bo(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (s) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Is:
        case Kw:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + ka(o, 0) : r, ud(i) ? (n = "", e != null && (n = e.replace(cd, "$&/") + "/"), bo(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Mc(i) && (i = n1(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(cd, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", ud(e)) for (var l = 0; l < e.length; l++) {
    s = e[l];
    var a = r + ka(s, l);
    o += bo(s, t, n, a, i);
  }
  else if (a = t1(e), typeof a == "function") for (e = a.call(e), l = 0; !(s = e.next()).done; ) s = s.value, a = r + ka(s, l++), o += bo(s, t, n, a, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Ys(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return bo(e, r, "", "", function(s) {
    return t.call(n, s, i++);
  }), r;
}
function i1(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null }, Mo = { transition: null }, s1 = { ReactCurrentDispatcher: Ve, ReactCurrentBatchConfig: Mo, ReactCurrentOwner: bc };
function qp() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: Ys, forEach: function(e, t, n) {
  Ys(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ys(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ys(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Mc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = ci;
re.Fragment = Ww;
re.Profiler = Xw;
re.PureComponent = Nc;
re.StrictMode = Yw;
re.Suspense = Jw;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s1;
re.act = qp;
re.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Up({}, e.props), i = e.key, s = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, o = bc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Yp.call(t, a) && !Xp.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Is, type: e.type, key: i, ref: s, props: r, _owner: o };
};
re.createContext = function(e) {
  return e = { $$typeof: qw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Qw, _context: e }, e.Consumer = e;
};
re.createElement = Qp;
re.createFactory = function(e) {
  var t = Qp.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: Gw, render: e };
};
re.isValidElement = Mc;
re.lazy = function(e) {
  return { $$typeof: e1, _payload: { _status: -1, _result: e }, _init: i1 };
};
re.memo = function(e, t) {
  return { $$typeof: Zw, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = Mo.transition;
  Mo.transition = {};
  try {
    e();
  } finally {
    Mo.transition = t;
  }
};
re.unstable_act = qp;
re.useCallback = function(e, t) {
  return Ve.current.useCallback(e, t);
};
re.useContext = function(e) {
  return Ve.current.useContext(e);
};
re.useDebugValue = function() {
};
re.useDeferredValue = function(e) {
  return Ve.current.useDeferredValue(e);
};
re.useEffect = function(e, t) {
  return Ve.current.useEffect(e, t);
};
re.useId = function() {
  return Ve.current.useId();
};
re.useImperativeHandle = function(e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function(e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function(e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
re.useMemo = function(e, t) {
  return Ve.current.useMemo(e, t);
};
re.useReducer = function(e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
re.useRef = function(e) {
  return Ve.current.useRef(e);
};
re.useState = function(e) {
  return Ve.current.useState(e);
};
re.useSyncExternalStore = function(e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function() {
  return Ve.current.useTransition();
};
re.version = "18.3.1";
Vp.exports = re;
var O = Vp.exports;
const Qn = /* @__PURE__ */ Fp(O);
var Gp = { exports: {} }, rt = {}, Jp = { exports: {} }, Zp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(T, I) {
    var z = T.length;
    T.push(I);
    e: for (; 0 < z; ) {
      var j = z - 1 >>> 1, R = T[j];
      if (0 < i(R, I)) T[j] = I, T[z] = R, z = j;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0], z = T.pop();
    if (z !== I) {
      T[0] = z;
      e: for (var j = 0, R = T.length, H = R >>> 1; j < H; ) {
        var U = 2 * (j + 1) - 1, Y = T[U], J = U + 1, Q = T[J];
        if (0 > i(Y, z)) J < R && 0 > i(Q, Y) ? (T[j] = Q, T[J] = z, j = J) : (T[j] = Y, T[U] = z, j = U);
        else if (J < R && 0 > i(Q, z)) T[j] = Q, T[J] = z, j = J;
        else break e;
      }
    }
    return I;
  }
  function i(T, I) {
    var z = T.sortIndex - I.sortIndex;
    return z !== 0 ? z : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var o = Date, l = o.now();
    e.unstable_now = function() {
      return o.now() - l;
    };
  }
  var a = [], u = [], d = 1, c = null, f = 3, p = !1, y = !1, v = !1, w = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= T) r(u), I.sortIndex = I.expirationTime, t(a, I);
      else break;
      I = n(u);
    }
  }
  function x(T) {
    if (v = !1, g(T), !y) if (n(a) !== null) y = !0, b(S);
    else {
      var I = n(u);
      I !== null && D(x, I.startTime - T);
    }
  }
  function S(T, I) {
    y = !1, v && (v = !1, h(_), _ = -1), p = !0;
    var z = f;
    try {
      for (g(I), c = n(a); c !== null && (!(c.expirationTime > I) || T && !C()); ) {
        var j = c.callback;
        if (typeof j == "function") {
          c.callback = null, f = c.priorityLevel;
          var R = j(c.expirationTime <= I);
          I = e.unstable_now(), typeof R == "function" ? c.callback = R : c === n(a) && r(a), g(I);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var H = !0;
      else {
        var U = n(u);
        U !== null && D(x, U.startTime - I), H = !1;
      }
      return H;
    } finally {
      c = null, f = z, p = !1;
    }
  }
  var k = !1, E = null, _ = -1, M = 5, $ = -1;
  function C() {
    return !(e.unstable_now() - $ < M);
  }
  function P() {
    if (E !== null) {
      var T = e.unstable_now();
      $ = T;
      var I = !0;
      try {
        I = E(!0, T);
      } finally {
        I ? B() : (k = !1, E = null);
      }
    } else k = !1;
  }
  var B;
  if (typeof m == "function") B = function() {
    m(P);
  };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(), A = N.port2;
    N.port1.onmessage = P, B = function() {
      A.postMessage(null);
    };
  } else B = function() {
    w(P, 0);
  };
  function b(T) {
    E = T, k || (k = !0, B());
  }
  function D(T, I) {
    _ = w(function() {
      T(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    y || p || (y = !0, b(S));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(T) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = f;
    }
    var z = f;
    f = I;
    try {
      return T();
    } finally {
      f = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, I) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var z = f;
    f = T;
    try {
      return I();
    } finally {
      f = z;
    }
  }, e.unstable_scheduleCallback = function(T, I, z) {
    var j = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? j + z : j) : z = j, T) {
      case 1:
        var R = -1;
        break;
      case 2:
        R = 250;
        break;
      case 5:
        R = 1073741823;
        break;
      case 4:
        R = 1e4;
        break;
      default:
        R = 5e3;
    }
    return R = z + R, T = { id: d++, callback: I, priorityLevel: T, startTime: z, expirationTime: R, sortIndex: -1 }, z > j ? (T.sortIndex = z, t(u, T), n(a) === null && T === n(u) && (v ? (h(_), _ = -1) : v = !0, D(x, z - j))) : (T.sortIndex = R, t(a, T), y || p || (y = !0, b(S))), T;
  }, e.unstable_shouldYield = C, e.unstable_wrapCallback = function(T) {
    var I = f;
    return function() {
      var z = f;
      f = I;
      try {
        return T.apply(this, arguments);
      } finally {
        f = z;
      }
    };
  };
})(Zp);
Jp.exports = Zp;
var o1 = Jp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l1 = O, tt = o1;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var eg = /* @__PURE__ */ new Set(), es = {};
function dr(e, t) {
  Yr(e, t), Yr(e + "Capture", t);
}
function Yr(e, t) {
  for (es[e] = t, e = 0; e < t.length; e++) eg.add(t[e]);
}
var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hu = Object.prototype.hasOwnProperty, a1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fd = {}, dd = {};
function u1(e) {
  return hu.call(dd, e) ? !0 : hu.call(fd, e) ? !1 : a1.test(e) ? dd[e] = !0 : (fd[e] = !0, !1);
}
function c1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function f1(e, t, n, r) {
  if (t === null || typeof t > "u" || c1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function He(e, t, n, r, i, s, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o;
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  $e[e] = new He(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  $e[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  $e[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  $e[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  $e[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  $e[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  $e[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  $e[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  $e[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Tc = /[\-:]([a-z])/g;
function Ic(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Tc,
    Ic
  );
  $e[t] = new He(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Tc, Ic);
  $e[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Tc, Ic);
  $e[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  $e[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new He("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  $e[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ac(e, t, n, r) {
  var i = $e.hasOwnProperty(t) ? $e[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (f1(t, n, i, r) && (n = null), r || i === null ? u1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var on = l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xs = Symbol.for("react.element"), wr = Symbol.for("react.portal"), xr = Symbol.for("react.fragment"), Lc = Symbol.for("react.strict_mode"), pu = Symbol.for("react.profiler"), tg = Symbol.for("react.provider"), ng = Symbol.for("react.context"), $c = Symbol.for("react.forward_ref"), gu = Symbol.for("react.suspense"), mu = Symbol.for("react.suspense_list"), Pc = Symbol.for("react.memo"), fn = Symbol.for("react.lazy"), rg = Symbol.for("react.offscreen"), hd = Symbol.iterator;
function wi(e) {
  return e === null || typeof e != "object" ? null : (e = hd && e[hd] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ve = Object.assign, Ea;
function Ai(e) {
  if (Ea === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ea = t && t[1] || "";
  }
  return `
` + Ea + e;
}
var _a = !1;
function Na(e, t) {
  if (!e || _a) return "";
  _a = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; ) l--;
      for (; 1 <= o && 0 <= l; o--, l--) if (i[o] !== s[l]) {
        if (o !== 1 || l !== 1)
          do
            if (o--, l--, 0 > l || i[o] !== s[l]) {
              var a = `
` + i[o].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= o && 0 <= l);
        break;
      }
    }
  } finally {
    _a = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ai(e) : "";
}
function d1(e) {
  switch (e.tag) {
    case 5:
      return Ai(e.type);
    case 16:
      return Ai("Lazy");
    case 13:
      return Ai("Suspense");
    case 19:
      return Ai("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Na(e.type, !1), e;
    case 11:
      return e = Na(e.type.render, !1), e;
    case 1:
      return e = Na(e.type, !0), e;
    default:
      return "";
  }
}
function yu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xr:
      return "Fragment";
    case wr:
      return "Portal";
    case pu:
      return "Profiler";
    case Lc:
      return "StrictMode";
    case gu:
      return "Suspense";
    case mu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ng:
      return (e.displayName || "Context") + ".Consumer";
    case tg:
      return (e._context.displayName || "Context") + ".Provider";
    case $c:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Pc:
      return t = e.displayName || null, t !== null ? t : yu(e.type) || "Memo";
    case fn:
      t = e._payload, e = e._init;
      try {
        return yu(e(t));
      } catch {
      }
  }
  return null;
}
function h1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return yu(t);
    case 8:
      return t === Lc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function An(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ig(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function p1(e) {
  var t = ig(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(o) {
      r = "" + o, s.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Qs(e) {
  e._valueTracker || (e._valueTracker = p1(e));
}
function sg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ig(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Qo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vu(e, t) {
  var n = t.checked;
  return ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function pd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = An(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function og(e, t) {
  t = t.checked, t != null && Ac(e, "checked", t, !1);
}
function wu(e, t) {
  og(e, t);
  var n = An(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? xu(e, t.type, n) : t.hasOwnProperty("defaultValue") && xu(e, t.type, An(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function gd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function xu(e, t, n) {
  (t !== "number" || Qo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Li = Array.isArray;
function jr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + An(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Su(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function md(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(V(92));
      if (Li(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: An(n) };
}
function lg(e, t) {
  var n = An(t.value), r = An(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function yd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ag(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ku(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ag(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var qs, ug = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (qs = qs || document.createElement("div"), qs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = qs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ts(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bi = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, g1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bi).forEach(function(e) {
  g1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Bi[t] = Bi[e];
  });
});
function cg(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bi.hasOwnProperty(e) && Bi[e] ? ("" + t).trim() : t + "px";
}
function fg(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = cg(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var m1 = ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Eu(e, t) {
  if (t) {
    if (m1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function _u(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Nu = null;
function Oc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Cu = null, Rr = null, zr = null;
function vd(e) {
  if (e = $s(e)) {
    if (typeof Cu != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = jl(t), Cu(e.stateNode, e.type, t));
  }
}
function dg(e) {
  Rr ? zr ? zr.push(e) : zr = [e] : Rr = e;
}
function hg() {
  if (Rr) {
    var e = Rr, t = zr;
    if (zr = Rr = null, vd(e), t) for (e = 0; e < t.length; e++) vd(t[e]);
  }
}
function pg(e, t) {
  return e(t);
}
function gg() {
}
var Ca = !1;
function mg(e, t, n) {
  if (Ca) return e(t, n);
  Ca = !0;
  try {
    return pg(e, t, n);
  } finally {
    Ca = !1, (Rr !== null || zr !== null) && (gg(), hg());
  }
}
function ns(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(V(231, t, typeof n));
  return n;
}
var bu = !1;
if (en) try {
  var xi = {};
  Object.defineProperty(xi, "passive", { get: function() {
    bu = !0;
  } }), window.addEventListener("test", xi, xi), window.removeEventListener("test", xi, xi);
} catch {
  bu = !1;
}
function y1(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Fi = !1, qo = null, Go = !1, Mu = null, v1 = { onError: function(e) {
  Fi = !0, qo = e;
} };
function w1(e, t, n, r, i, s, o, l, a) {
  Fi = !1, qo = null, y1.apply(v1, arguments);
}
function x1(e, t, n, r, i, s, o, l, a) {
  if (w1.apply(this, arguments), Fi) {
    if (Fi) {
      var u = qo;
      Fi = !1, qo = null;
    } else throw Error(V(198));
    Go || (Go = !0, Mu = u);
  }
}
function hr(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function yg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function wd(e) {
  if (hr(e) !== e) throw Error(V(188));
}
function S1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = hr(e), t === null) throw Error(V(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return wd(i), e;
        if (s === r) return wd(i), t;
        s = s.sibling;
      }
      throw Error(V(188));
    }
    if (n.return !== r.return) n = i, r = s;
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          o = !0, n = i, r = s;
          break;
        }
        if (l === r) {
          o = !0, r = i, n = s;
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            o = !0, n = s, r = i;
            break;
          }
          if (l === r) {
            o = !0, r = s, n = i;
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function vg(e) {
  return e = S1(e), e !== null ? wg(e) : null;
}
function wg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var xg = tt.unstable_scheduleCallback, xd = tt.unstable_cancelCallback, k1 = tt.unstable_shouldYield, E1 = tt.unstable_requestPaint, Se = tt.unstable_now, _1 = tt.unstable_getCurrentPriorityLevel, Dc = tt.unstable_ImmediatePriority, Sg = tt.unstable_UserBlockingPriority, Jo = tt.unstable_NormalPriority, N1 = tt.unstable_LowPriority, kg = tt.unstable_IdlePriority, $l = null, jt = null;
function C1(e) {
  if (jt && typeof jt.onCommitFiberRoot == "function") try {
    jt.onCommitFiberRoot($l, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Nt = Math.clz32 ? Math.clz32 : T1, b1 = Math.log, M1 = Math.LN2;
function T1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (b1(e) / M1 | 0) | 0;
}
var Gs = 64, Js = 4194304;
function $i(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, s = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? r = $i(l) : (s &= o, s !== 0 && (r = $i(s)));
  } else o = n & ~i, o !== 0 ? r = $i(o) : s !== 0 && (r = $i(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Nt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function I1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function A1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - Nt(s), l = 1 << o, a = i[o];
    a === -1 ? (!(l & n) || l & r) && (i[o] = I1(l, t)) : a <= t && (e.expiredLanes |= l), s &= ~l;
  }
}
function Tu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Eg() {
  var e = Gs;
  return Gs <<= 1, !(Gs & 4194240) && (Gs = 64), e;
}
function ba(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function As(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Nt(t), e[t] = n;
}
function L1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Nt(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
  }
}
function jc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Nt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var ae = 0;
function _g(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ng, Rc, Cg, bg, Mg, Iu = !1, Zs = [], xn = null, Sn = null, kn = null, rs = /* @__PURE__ */ new Map(), is = /* @__PURE__ */ new Map(), pn = [], $1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xn = null;
      break;
    case "dragenter":
    case "dragleave":
      Sn = null;
      break;
    case "mouseover":
    case "mouseout":
      kn = null;
      break;
    case "pointerover":
    case "pointerout":
      rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      is.delete(t.pointerId);
  }
}
function Si(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = $s(t), t !== null && Rc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function P1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return xn = Si(xn, e, t, n, r, i), !0;
    case "dragenter":
      return Sn = Si(Sn, e, t, n, r, i), !0;
    case "mouseover":
      return kn = Si(kn, e, t, n, r, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return rs.set(s, Si(rs.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, is.set(s, Si(is.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Tg(e) {
  var t = Hn(e.target);
  if (t !== null) {
    var n = hr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = yg(n), t !== null) {
          e.blockedOn = t, Mg(e.priority, function() {
            Cg(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function To(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Au(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Nu = r, n.target.dispatchEvent(r), Nu = null;
    } else return t = $s(n), t !== null && Rc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function kd(e, t, n) {
  To(e) && n.delete(t);
}
function O1() {
  Iu = !1, xn !== null && To(xn) && (xn = null), Sn !== null && To(Sn) && (Sn = null), kn !== null && To(kn) && (kn = null), rs.forEach(kd), is.forEach(kd);
}
function ki(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Iu || (Iu = !0, tt.unstable_scheduleCallback(tt.unstable_NormalPriority, O1)));
}
function ss(e) {
  function t(i) {
    return ki(i, e);
  }
  if (0 < Zs.length) {
    ki(Zs[0], e);
    for (var n = 1; n < Zs.length; n++) {
      var r = Zs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (xn !== null && ki(xn, e), Sn !== null && ki(Sn, e), kn !== null && ki(kn, e), rs.forEach(t), is.forEach(t), n = 0; n < pn.length; n++) r = pn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && (n = pn[0], n.blockedOn === null); ) Tg(n), n.blockedOn === null && pn.shift();
}
var Br = on.ReactCurrentBatchConfig, el = !0;
function D1(e, t, n, r) {
  var i = ae, s = Br.transition;
  Br.transition = null;
  try {
    ae = 1, zc(e, t, n, r);
  } finally {
    ae = i, Br.transition = s;
  }
}
function j1(e, t, n, r) {
  var i = ae, s = Br.transition;
  Br.transition = null;
  try {
    ae = 4, zc(e, t, n, r);
  } finally {
    ae = i, Br.transition = s;
  }
}
function zc(e, t, n, r) {
  if (el) {
    var i = Au(e, t, n, r);
    if (i === null) ja(e, t, r, tl, n), Sd(e, r);
    else if (P1(i, e, t, n, r)) r.stopPropagation();
    else if (Sd(e, r), t & 4 && -1 < $1.indexOf(e)) {
      for (; i !== null; ) {
        var s = $s(i);
        if (s !== null && Ng(s), s = Au(e, t, n, r), s === null && ja(e, t, r, tl, n), s === i) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else ja(e, t, r, null, n);
  }
}
var tl = null;
function Au(e, t, n, r) {
  if (tl = null, e = Oc(r), e = Hn(e), e !== null) if (t = hr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = yg(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return tl = e, null;
}
function Ig(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (_1()) {
        case Dc:
          return 1;
        case Sg:
          return 4;
        case Jo:
        case N1:
          return 16;
        case kg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yn = null, Bc = null, Io = null;
function Ag() {
  if (Io) return Io;
  var e, t = Bc, n = t.length, r, i = "value" in yn ? yn.value : yn.textContent, s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++) ;
  return Io = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Ao(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function eo() {
  return !0;
}
function Ed() {
  return !1;
}
function it(e) {
  function t(n, r, i, s, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? eo : Ed, this.isPropagationStopped = Ed, this;
  }
  return ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = eo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = eo);
  }, persist: function() {
  }, isPersistent: eo }), t;
}
var fi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Fc = it(fi), Ls = ve({}, fi, { view: 0, detail: 0 }), R1 = it(Ls), Ma, Ta, Ei, Pl = ve({}, Ls, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ei && (Ei && e.type === "mousemove" ? (Ma = e.screenX - Ei.screenX, Ta = e.screenY - Ei.screenY) : Ta = Ma = 0, Ei = e), Ma);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ta;
} }), _d = it(Pl), z1 = ve({}, Pl, { dataTransfer: 0 }), B1 = it(z1), F1 = ve({}, Ls, { relatedTarget: 0 }), Ia = it(F1), V1 = ve({}, fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), H1 = it(V1), U1 = ve({}, fi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), K1 = it(U1), W1 = ve({}, fi, { data: 0 }), Nd = it(W1), Y1 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, X1 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Q1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function q1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Q1[e]) ? !!t[e] : !1;
}
function Vc() {
  return q1;
}
var G1 = ve({}, Ls, { key: function(e) {
  if (e.key) {
    var t = Y1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ao(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? X1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vc, charCode: function(e) {
  return e.type === "keypress" ? Ao(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ao(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), J1 = it(G1), Z1 = ve({}, Pl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cd = it(Z1), ex = ve({}, Ls, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vc }), tx = it(ex), nx = ve({}, fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), rx = it(nx), ix = ve({}, Pl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), sx = it(ix), ox = [9, 13, 27, 32], Hc = en && "CompositionEvent" in window, Vi = null;
en && "documentMode" in document && (Vi = document.documentMode);
var lx = en && "TextEvent" in window && !Vi, Lg = en && (!Hc || Vi && 8 < Vi && 11 >= Vi), bd = " ", Md = !1;
function $g(e, t) {
  switch (e) {
    case "keyup":
      return ox.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Pg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Sr = !1;
function ax(e, t) {
  switch (e) {
    case "compositionend":
      return Pg(t);
    case "keypress":
      return t.which !== 32 ? null : (Md = !0, bd);
    case "textInput":
      return e = t.data, e === bd && Md ? null : e;
    default:
      return null;
  }
}
function ux(e, t) {
  if (Sr) return e === "compositionend" || !Hc && $g(e, t) ? (e = Ag(), Io = Bc = yn = null, Sr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Lg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cx = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Td(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cx[e.type] : t === "textarea";
}
function Og(e, t, n, r) {
  dg(r), t = nl(t, "onChange"), 0 < t.length && (n = new Fc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Hi = null, os = null;
function fx(e) {
  Wg(e, 0);
}
function Ol(e) {
  var t = _r(e);
  if (sg(t)) return e;
}
function dx(e, t) {
  if (e === "change") return t;
}
var Dg = !1;
if (en) {
  var Aa;
  if (en) {
    var La = "oninput" in document;
    if (!La) {
      var Id = document.createElement("div");
      Id.setAttribute("oninput", "return;"), La = typeof Id.oninput == "function";
    }
    Aa = La;
  } else Aa = !1;
  Dg = Aa && (!document.documentMode || 9 < document.documentMode);
}
function Ad() {
  Hi && (Hi.detachEvent("onpropertychange", jg), os = Hi = null);
}
function jg(e) {
  if (e.propertyName === "value" && Ol(os)) {
    var t = [];
    Og(t, os, e, Oc(e)), mg(fx, t);
  }
}
function hx(e, t, n) {
  e === "focusin" ? (Ad(), Hi = t, os = n, Hi.attachEvent("onpropertychange", jg)) : e === "focusout" && Ad();
}
function px(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ol(os);
}
function gx(e, t) {
  if (e === "click") return Ol(t);
}
function mx(e, t) {
  if (e === "input" || e === "change") return Ol(t);
}
function yx(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var bt = typeof Object.is == "function" ? Object.is : yx;
function ls(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!hu.call(t, i) || !bt(e[i], t[i])) return !1;
  }
  return !0;
}
function Ld(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $d(e, t) {
  var n = Ld(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ld(n);
  }
}
function Rg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function zg() {
  for (var e = window, t = Qo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qo(e.document);
  }
  return t;
}
function Uc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function vx(e) {
  var t = zg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Rg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Uc(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, s = Math.min(r.start, i);
        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = $d(n, s);
        var o = $d(
          n,
          r
        );
        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var wx = en && "documentMode" in document && 11 >= document.documentMode, kr = null, Lu = null, Ui = null, $u = !1;
function Pd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $u || kr == null || kr !== Qo(r) || (r = kr, "selectionStart" in r && Uc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ui && ls(Ui, r) || (Ui = r, r = nl(Lu, "onSelect"), 0 < r.length && (t = new Fc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = kr)));
}
function to(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Er = { animationend: to("Animation", "AnimationEnd"), animationiteration: to("Animation", "AnimationIteration"), animationstart: to("Animation", "AnimationStart"), transitionend: to("Transition", "TransitionEnd") }, $a = {}, Bg = {};
en && (Bg = document.createElement("div").style, "AnimationEvent" in window || (delete Er.animationend.animation, delete Er.animationiteration.animation, delete Er.animationstart.animation), "TransitionEvent" in window || delete Er.transitionend.transition);
function Dl(e) {
  if ($a[e]) return $a[e];
  if (!Er[e]) return e;
  var t = Er[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bg) return $a[e] = t[n];
  return e;
}
var Fg = Dl("animationend"), Vg = Dl("animationiteration"), Hg = Dl("animationstart"), Ug = Dl("transitionend"), Kg = /* @__PURE__ */ new Map(), Od = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $n(e, t) {
  Kg.set(e, t), dr(t, [e]);
}
for (var Pa = 0; Pa < Od.length; Pa++) {
  var Oa = Od[Pa], xx = Oa.toLowerCase(), Sx = Oa[0].toUpperCase() + Oa.slice(1);
  $n(xx, "on" + Sx);
}
$n(Fg, "onAnimationEnd");
$n(Vg, "onAnimationIteration");
$n(Hg, "onAnimationStart");
$n("dblclick", "onDoubleClick");
$n("focusin", "onFocus");
$n("focusout", "onBlur");
$n(Ug, "onTransitionEnd");
Yr("onMouseEnter", ["mouseout", "mouseover"]);
Yr("onMouseLeave", ["mouseout", "mouseover"]);
Yr("onPointerEnter", ["pointerout", "pointerover"]);
Yr("onPointerLeave", ["pointerout", "pointerover"]);
dr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));
function Dd(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, x1(r, t, void 0, e), e.currentTarget = null;
}
function Wg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var l = r[o], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== s && i.isPropagationStopped()) break e;
        Dd(i, l, u), s = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (l = r[o], a = l.instance, u = l.currentTarget, l = l.listener, a !== s && i.isPropagationStopped()) break e;
        Dd(i, l, u), s = a;
      }
    }
  }
  if (Go) throw e = Mu, Go = !1, Mu = null, e;
}
function fe(e, t) {
  var n = t[Ru];
  n === void 0 && (n = t[Ru] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Yg(t, e, 2, !1), n.add(r));
}
function Da(e, t, n) {
  var r = 0;
  t && (r |= 4), Yg(n, e, r, t);
}
var no = "_reactListening" + Math.random().toString(36).slice(2);
function as(e) {
  if (!e[no]) {
    e[no] = !0, eg.forEach(function(n) {
      n !== "selectionchange" && (kx.has(n) || Da(n, !1, e), Da(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[no] || (t[no] = !0, Da("selectionchange", !1, t));
  }
}
function Yg(e, t, n, r) {
  switch (Ig(t)) {
    case 1:
      var i = D1;
      break;
    case 4:
      i = j1;
      break;
    default:
      i = zc;
  }
  n = i.bind(null, t, n, e), i = void 0, !bu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function ja(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var l = r.stateNode.containerInfo;
      if (l === i || l.nodeType === 8 && l.parentNode === i) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var a = o.tag;
        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        o = o.return;
      }
      for (; l !== null; ) {
        if (o = Hn(l), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = s = o;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  mg(function() {
    var u = s, d = Oc(n), c = [];
    e: {
      var f = Kg.get(e);
      if (f !== void 0) {
        var p = Fc, y = e;
        switch (e) {
          case "keypress":
            if (Ao(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = J1;
            break;
          case "focusin":
            y = "focus", p = Ia;
            break;
          case "focusout":
            y = "blur", p = Ia;
            break;
          case "beforeblur":
          case "afterblur":
            p = Ia;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = _d;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = B1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = tx;
            break;
          case Fg:
          case Vg:
          case Hg:
            p = H1;
            break;
          case Ug:
            p = rx;
            break;
          case "scroll":
            p = R1;
            break;
          case "wheel":
            p = sx;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = K1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Cd;
        }
        var v = (t & 4) !== 0, w = !v && e === "scroll", h = v ? f !== null ? f + "Capture" : null : f;
        v = [];
        for (var m = u, g; m !== null; ) {
          g = m;
          var x = g.stateNode;
          if (g.tag === 5 && x !== null && (g = x, h !== null && (x = ns(m, h), x != null && v.push(us(m, x, g)))), w) break;
          m = m.return;
        }
        0 < v.length && (f = new p(f, y, null, n, d), c.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== Nu && (y = n.relatedTarget || n.fromElement) && (Hn(y) || y[tn])) break e;
        if ((p || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (y = n.relatedTarget || n.toElement, p = u, y = y ? Hn(y) : null, y !== null && (w = hr(y), y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = u), p !== y)) {
          if (v = _d, x = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (v = Cd, x = "onPointerLeave", h = "onPointerEnter", m = "pointer"), w = p == null ? f : _r(p), g = y == null ? f : _r(y), f = new v(x, m + "leave", p, n, d), f.target = w, f.relatedTarget = g, x = null, Hn(d) === u && (v = new v(h, m + "enter", y, n, d), v.target = g, v.relatedTarget = w, x = v), w = x, p && y) t: {
            for (v = p, h = y, m = 0, g = v; g; g = pr(g)) m++;
            for (g = 0, x = h; x; x = pr(x)) g++;
            for (; 0 < m - g; ) v = pr(v), m--;
            for (; 0 < g - m; ) h = pr(h), g--;
            for (; m--; ) {
              if (v === h || h !== null && v === h.alternate) break t;
              v = pr(v), h = pr(h);
            }
            v = null;
          }
          else v = null;
          p !== null && jd(c, f, p, v, !1), y !== null && w !== null && jd(c, w, y, v, !0);
        }
      }
      e: {
        if (f = u ? _r(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file") var S = dx;
        else if (Td(f)) if (Dg) S = mx;
        else {
          S = px;
          var k = hx;
        }
        else (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = gx);
        if (S && (S = S(e, u))) {
          Og(c, S, n, d);
          break e;
        }
        k && k(e, f, u), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && xu(f, "number", f.value);
      }
      switch (k = u ? _r(u) : window, e) {
        case "focusin":
          (Td(k) || k.contentEditable === "true") && (kr = k, Lu = u, Ui = null);
          break;
        case "focusout":
          Ui = Lu = kr = null;
          break;
        case "mousedown":
          $u = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $u = !1, Pd(c, n, d);
          break;
        case "selectionchange":
          if (wx) break;
        case "keydown":
        case "keyup":
          Pd(c, n, d);
      }
      var E;
      if (Hc) e: {
        switch (e) {
          case "compositionstart":
            var _ = "onCompositionStart";
            break e;
          case "compositionend":
            _ = "onCompositionEnd";
            break e;
          case "compositionupdate":
            _ = "onCompositionUpdate";
            break e;
        }
        _ = void 0;
      }
      else Sr ? $g(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ && (Lg && n.locale !== "ko" && (Sr || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Sr && (E = Ag()) : (yn = d, Bc = "value" in yn ? yn.value : yn.textContent, Sr = !0)), k = nl(u, _), 0 < k.length && (_ = new Nd(_, e, null, n, d), c.push({ event: _, listeners: k }), E ? _.data = E : (E = Pg(n), E !== null && (_.data = E)))), (E = lx ? ax(e, n) : ux(e, n)) && (u = nl(u, "onBeforeInput"), 0 < u.length && (d = new Nd("onBeforeInput", "beforeinput", null, n, d), c.push({ event: d, listeners: u }), d.data = E));
    }
    Wg(c, t);
  });
}
function us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = ns(e, n), s != null && r.unshift(us(e, s, i)), s = ns(e, t), s != null && r.push(us(e, s, i))), e = e.return;
  }
  return r;
}
function pr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jd(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, i ? (a = ns(n, s), a != null && o.unshift(us(n, a, l))) : i || (a = ns(n, s), a != null && o.push(us(n, a, l)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ex = /\r\n?/g, _x = /\u0000|\uFFFD/g;
function Rd(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ex, `
`).replace(_x, "");
}
function ro(e, t, n) {
  if (t = Rd(t), Rd(e) !== t && n) throw Error(V(425));
}
function rl() {
}
var Pu = null, Ou = null;
function Du(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ju = typeof setTimeout == "function" ? setTimeout : void 0, Nx = typeof clearTimeout == "function" ? clearTimeout : void 0, zd = typeof Promise == "function" ? Promise : void 0, Cx = typeof queueMicrotask == "function" ? queueMicrotask : typeof zd < "u" ? function(e) {
  return zd.resolve(null).then(e).catch(bx);
} : ju;
function bx(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ra(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), ss(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  ss(t);
}
function En(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Bd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var di = Math.random().toString(36).slice(2), Dt = "__reactFiber$" + di, cs = "__reactProps$" + di, tn = "__reactContainer$" + di, Ru = "__reactEvents$" + di, Mx = "__reactListeners$" + di, Tx = "__reactHandles$" + di;
function Hn(e) {
  var t = e[Dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[tn] || n[Dt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Bd(e); e !== null; ) {
        if (n = e[Dt]) return n;
        e = Bd(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function $s(e) {
  return e = e[Dt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function _r(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function jl(e) {
  return e[cs] || null;
}
var zu = [], Nr = -1;
function Pn(e) {
  return { current: e };
}
function de(e) {
  0 > Nr || (e.current = zu[Nr], zu[Nr] = null, Nr--);
}
function ue(e, t) {
  Nr++, zu[Nr] = e.current, e.current = t;
}
var Ln = {}, je = Pn(Ln), Ye = Pn(!1), er = Ln;
function Xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n) i[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Xe(e) {
  return e = e.childContextTypes, e != null;
}
function il() {
  de(Ye), de(je);
}
function Fd(e, t, n) {
  if (je.current !== Ln) throw Error(V(168));
  ue(je, t), ue(Ye, n);
}
function Xg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(V(108, h1(e) || "Unknown", i));
  return ve({}, n, r);
}
function sl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ln, er = je.current, ue(je, e), ue(Ye, Ye.current), !0;
}
function Vd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = Xg(e, t, er), r.__reactInternalMemoizedMergedChildContext = e, de(Ye), de(je), ue(je, e)) : de(Ye), ue(Ye, n);
}
var Yt = null, Rl = !1, za = !1;
function Qg(e) {
  Yt === null ? Yt = [e] : Yt.push(e);
}
function Ix(e) {
  Rl = !0, Qg(e);
}
function On() {
  if (!za && Yt !== null) {
    za = !0;
    var e = 0, t = ae;
    try {
      var n = Yt;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Yt = null, Rl = !1;
    } catch (i) {
      throw Yt !== null && (Yt = Yt.slice(e + 1)), xg(Dc, On), i;
    } finally {
      ae = t, za = !1;
    }
  }
  return null;
}
var Cr = [], br = 0, ol = null, ll = 0, ot = [], lt = 0, tr = null, Xt = 1, Qt = "";
function zn(e, t) {
  Cr[br++] = ll, Cr[br++] = ol, ol = e, ll = t;
}
function qg(e, t, n) {
  ot[lt++] = Xt, ot[lt++] = Qt, ot[lt++] = tr, tr = e;
  var r = Xt;
  e = Qt;
  var i = 32 - Nt(r) - 1;
  r &= ~(1 << i), n += 1;
  var s = 32 - Nt(t) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Xt = 1 << 32 - Nt(t) + i | n << i | r, Qt = s + e;
  } else Xt = 1 << s | n << i | r, Qt = e;
}
function Kc(e) {
  e.return !== null && (zn(e, 1), qg(e, 1, 0));
}
function Wc(e) {
  for (; e === ol; ) ol = Cr[--br], Cr[br] = null, ll = Cr[--br], Cr[br] = null;
  for (; e === tr; ) tr = ot[--lt], ot[lt] = null, Qt = ot[--lt], ot[lt] = null, Xt = ot[--lt], ot[lt] = null;
}
var et = null, Ze = null, he = !1, St = null;
function Gg(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Hd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, et = e, Ze = En(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, et = e, Ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = tr !== null ? { id: Xt, overflow: Qt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, et = e, Ze = null, !0) : !1;
    default:
      return !1;
  }
}
function Bu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fu(e) {
  if (he) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!Hd(e, t)) {
        if (Bu(e)) throw Error(V(418));
        t = En(n.nextSibling);
        var r = et;
        t && Hd(e, t) ? Gg(r, n) : (e.flags = e.flags & -4097 | 2, he = !1, et = e);
      }
    } else {
      if (Bu(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, he = !1, et = e;
    }
  }
}
function Ud(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  et = e;
}
function io(e) {
  if (e !== et) return !1;
  if (!he) return Ud(e), he = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Du(e.type, e.memoizedProps)), t && (t = Ze)) {
    if (Bu(e)) throw Jg(), Error(V(418));
    for (; t; ) Gg(e, t), t = En(t.nextSibling);
  }
  if (Ud(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ze = En(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = et ? En(e.stateNode.nextSibling) : null;
  return !0;
}
function Jg() {
  for (var e = Ze; e; ) e = En(e.nextSibling);
}
function Qr() {
  Ze = et = null, he = !1;
}
function Yc(e) {
  St === null ? St = [e] : St.push(e);
}
var Ax = on.ReactCurrentBatchConfig;
function _i(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
      var i = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
        var l = i.refs;
        o === null ? delete l[s] : l[s] = o;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function so(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Kd(e) {
  var t = e._init;
  return t(e._payload);
}
function Zg(e) {
  function t(h, m) {
    if (e) {
      var g = h.deletions;
      g === null ? (h.deletions = [m], h.flags |= 16) : g.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), m = m.sibling;
    return null;
  }
  function r(h, m) {
    for (h = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
    return h;
  }
  function i(h, m) {
    return h = bn(h, m), h.index = 0, h.sibling = null, h;
  }
  function s(h, m, g) {
    return h.index = g, e ? (g = h.alternate, g !== null ? (g = g.index, g < m ? (h.flags |= 2, m) : g) : (h.flags |= 2, m)) : (h.flags |= 1048576, m);
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, m, g, x) {
    return m === null || m.tag !== 6 ? (m = Wa(g, h.mode, x), m.return = h, m) : (m = i(m, g), m.return = h, m);
  }
  function a(h, m, g, x) {
    var S = g.type;
    return S === xr ? d(h, m, g.props.children, x, g.key) : m !== null && (m.elementType === S || typeof S == "object" && S !== null && S.$$typeof === fn && Kd(S) === m.type) ? (x = i(m, g.props), x.ref = _i(h, m, g), x.return = h, x) : (x = Ro(g.type, g.key, g.props, null, h.mode, x), x.ref = _i(h, m, g), x.return = h, x);
  }
  function u(h, m, g, x) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = Ya(g, h.mode, x), m.return = h, m) : (m = i(m, g.children || []), m.return = h, m);
  }
  function d(h, m, g, x, S) {
    return m === null || m.tag !== 7 ? (m = Gn(g, h.mode, x, S), m.return = h, m) : (m = i(m, g), m.return = h, m);
  }
  function c(h, m, g) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = Wa("" + m, h.mode, g), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Xs:
          return g = Ro(m.type, m.key, m.props, null, h.mode, g), g.ref = _i(h, null, m), g.return = h, g;
        case wr:
          return m = Ya(m, h.mode, g), m.return = h, m;
        case fn:
          var x = m._init;
          return c(h, x(m._payload), g);
      }
      if (Li(m) || wi(m)) return m = Gn(m, h.mode, g, null), m.return = h, m;
      so(h, m);
    }
    return null;
  }
  function f(h, m, g, x) {
    var S = m !== null ? m.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return S !== null ? null : l(h, m, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Xs:
          return g.key === S ? a(h, m, g, x) : null;
        case wr:
          return g.key === S ? u(h, m, g, x) : null;
        case fn:
          return S = g._init, f(
            h,
            m,
            S(g._payload),
            x
          );
      }
      if (Li(g) || wi(g)) return S !== null ? null : d(h, m, g, x, null);
      so(h, g);
    }
    return null;
  }
  function p(h, m, g, x, S) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return h = h.get(g) || null, l(m, h, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Xs:
          return h = h.get(x.key === null ? g : x.key) || null, a(m, h, x, S);
        case wr:
          return h = h.get(x.key === null ? g : x.key) || null, u(m, h, x, S);
        case fn:
          var k = x._init;
          return p(h, m, g, k(x._payload), S);
      }
      if (Li(x) || wi(x)) return h = h.get(g) || null, d(m, h, x, S, null);
      so(m, x);
    }
    return null;
  }
  function y(h, m, g, x) {
    for (var S = null, k = null, E = m, _ = m = 0, M = null; E !== null && _ < g.length; _++) {
      E.index > _ ? (M = E, E = null) : M = E.sibling;
      var $ = f(h, E, g[_], x);
      if ($ === null) {
        E === null && (E = M);
        break;
      }
      e && E && $.alternate === null && t(h, E), m = s($, m, _), k === null ? S = $ : k.sibling = $, k = $, E = M;
    }
    if (_ === g.length) return n(h, E), he && zn(h, _), S;
    if (E === null) {
      for (; _ < g.length; _++) E = c(h, g[_], x), E !== null && (m = s(E, m, _), k === null ? S = E : k.sibling = E, k = E);
      return he && zn(h, _), S;
    }
    for (E = r(h, E); _ < g.length; _++) M = p(E, h, _, g[_], x), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? _ : M.key), m = s(M, m, _), k === null ? S = M : k.sibling = M, k = M);
    return e && E.forEach(function(C) {
      return t(h, C);
    }), he && zn(h, _), S;
  }
  function v(h, m, g, x) {
    var S = wi(g);
    if (typeof S != "function") throw Error(V(150));
    if (g = S.call(g), g == null) throw Error(V(151));
    for (var k = S = null, E = m, _ = m = 0, M = null, $ = g.next(); E !== null && !$.done; _++, $ = g.next()) {
      E.index > _ ? (M = E, E = null) : M = E.sibling;
      var C = f(h, E, $.value, x);
      if (C === null) {
        E === null && (E = M);
        break;
      }
      e && E && C.alternate === null && t(h, E), m = s(C, m, _), k === null ? S = C : k.sibling = C, k = C, E = M;
    }
    if ($.done) return n(
      h,
      E
    ), he && zn(h, _), S;
    if (E === null) {
      for (; !$.done; _++, $ = g.next()) $ = c(h, $.value, x), $ !== null && (m = s($, m, _), k === null ? S = $ : k.sibling = $, k = $);
      return he && zn(h, _), S;
    }
    for (E = r(h, E); !$.done; _++, $ = g.next()) $ = p(E, h, _, $.value, x), $ !== null && (e && $.alternate !== null && E.delete($.key === null ? _ : $.key), m = s($, m, _), k === null ? S = $ : k.sibling = $, k = $);
    return e && E.forEach(function(P) {
      return t(h, P);
    }), he && zn(h, _), S;
  }
  function w(h, m, g, x) {
    if (typeof g == "object" && g !== null && g.type === xr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Xs:
          e: {
            for (var S = g.key, k = m; k !== null; ) {
              if (k.key === S) {
                if (S = g.type, S === xr) {
                  if (k.tag === 7) {
                    n(h, k.sibling), m = i(k, g.props.children), m.return = h, h = m;
                    break e;
                  }
                } else if (k.elementType === S || typeof S == "object" && S !== null && S.$$typeof === fn && Kd(S) === k.type) {
                  n(h, k.sibling), m = i(k, g.props), m.ref = _i(h, k, g), m.return = h, h = m;
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            g.type === xr ? (m = Gn(g.props.children, h.mode, x, g.key), m.return = h, h = m) : (x = Ro(g.type, g.key, g.props, null, h.mode, x), x.ref = _i(h, m, g), x.return = h, h = x);
          }
          return o(h);
        case wr:
          e: {
            for (k = g.key; m !== null; ) {
              if (m.key === k) if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                n(h, m.sibling), m = i(m, g.children || []), m.return = h, h = m;
                break e;
              } else {
                n(h, m);
                break;
              }
              else t(h, m);
              m = m.sibling;
            }
            m = Ya(g, h.mode, x), m.return = h, h = m;
          }
          return o(h);
        case fn:
          return k = g._init, w(h, m, k(g._payload), x);
      }
      if (Li(g)) return y(h, m, g, x);
      if (wi(g)) return v(h, m, g, x);
      so(h, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, m !== null && m.tag === 6 ? (n(h, m.sibling), m = i(m, g), m.return = h, h = m) : (n(h, m), m = Wa(g, h.mode, x), m.return = h, h = m), o(h)) : n(h, m);
  }
  return w;
}
var qr = Zg(!0), em = Zg(!1), al = Pn(null), ul = null, Mr = null, Xc = null;
function Qc() {
  Xc = Mr = ul = null;
}
function qc(e) {
  var t = al.current;
  de(al), e._currentValue = t;
}
function Vu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Fr(e, t) {
  ul = e, Xc = Mr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ke = !0), e.firstContext = null);
}
function dt(e) {
  var t = e._currentValue;
  if (Xc !== e) if (e = { context: e, memoizedValue: t, next: null }, Mr === null) {
    if (ul === null) throw Error(V(308));
    Mr = e, ul.dependencies = { lanes: 0, firstContext: e };
  } else Mr = Mr.next = e;
  return t;
}
var Un = null;
function Gc(e) {
  Un === null ? Un = [e] : Un.push(e);
}
function tm(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Gc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, nn(e, r);
}
function nn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var dn = !1;
function Jc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function nm(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _n(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, se & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, nn(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Gc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, nn(e, n);
}
function Lo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, jc(e, n);
  }
}
function Wd(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? i = s = o : s = s.next = o, n = n.next;
      } while (n !== null);
      s === null ? i = s = t : s = s.next = t;
    } else i = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function cl(e, t, n, r) {
  var i = e.updateQueue;
  dn = !1;
  var s = i.firstBaseUpdate, o = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, o === null ? s = u : o.next = u, o = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== o && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = a));
  }
  if (s !== null) {
    var c = i.baseState;
    o = 0, d = u = a = null, l = s;
    do {
      var f = l.lane, p = l.eventTime;
      if ((r & f) === f) {
        d !== null && (d = d.next = {
          eventTime: p,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var y = e, v = l;
          switch (f = t, p = n, v.tag) {
            case 1:
              if (y = v.payload, typeof y == "function") {
                c = y.call(p, c, f);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = v.payload, f = typeof y == "function" ? y.call(p, c, f) : y, f == null) break e;
              c = ve({}, c, f);
              break e;
            case 2:
              dn = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [l] : f.push(l));
      } else p = { eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = p, a = c) : d = d.next = p, o |= f;
      if (l = l.next, l === null) {
        if (l = i.shared.pending, l === null) break;
        f = l, l = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = c), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    rr |= o, e.lanes = o, e.memoizedState = c;
  }
}
function Yd(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(V(191, i));
      i.call(r);
    }
  }
}
var Ps = {}, Rt = Pn(Ps), fs = Pn(Ps), ds = Pn(Ps);
function Kn(e) {
  if (e === Ps) throw Error(V(174));
  return e;
}
function Zc(e, t) {
  switch (ue(ds, t), ue(fs, e), ue(Rt, Ps), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ku(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ku(t, e);
  }
  de(Rt), ue(Rt, t);
}
function Gr() {
  de(Rt), de(fs), de(ds);
}
function rm(e) {
  Kn(ds.current);
  var t = Kn(Rt.current), n = ku(t, e.type);
  t !== n && (ue(fs, e), ue(Rt, n));
}
function ef(e) {
  fs.current === e && (de(Rt), de(fs));
}
var me = Pn(0);
function fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Ba = [];
function tf() {
  for (var e = 0; e < Ba.length; e++) Ba[e]._workInProgressVersionPrimary = null;
  Ba.length = 0;
}
var $o = on.ReactCurrentDispatcher, Fa = on.ReactCurrentBatchConfig, nr = 0, ye = null, be = null, Te = null, dl = !1, Ki = !1, hs = 0, Lx = 0;
function Pe() {
  throw Error(V(321));
}
function nf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!bt(e[n], t[n])) return !1;
  return !0;
}
function rf(e, t, n, r, i, s) {
  if (nr = s, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $o.current = e === null || e.memoizedState === null ? Dx : jx, e = n(r, i), Ki) {
    s = 0;
    do {
      if (Ki = !1, hs = 0, 25 <= s) throw Error(V(301));
      s += 1, Te = be = null, t.updateQueue = null, $o.current = Rx, e = n(r, i);
    } while (Ki);
  }
  if ($o.current = hl, t = be !== null && be.next !== null, nr = 0, Te = be = ye = null, dl = !1, t) throw Error(V(300));
  return e;
}
function sf() {
  var e = hs !== 0;
  return hs = 0, e;
}
function Pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Te === null ? ye.memoizedState = Te = e : Te = Te.next = e, Te;
}
function ht() {
  if (be === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = be.next;
  var t = Te === null ? ye.memoizedState : Te.next;
  if (t !== null) Te = t, be = e;
  else {
    if (e === null) throw Error(V(310));
    be = e, e = { memoizedState: be.memoizedState, baseState: be.baseState, baseQueue: be.baseQueue, queue: be.queue, next: null }, Te === null ? ye.memoizedState = Te = e : Te = Te.next = e;
  }
  return Te;
}
function ps(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Va(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = be, i = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = s.next, s.next = o;
    }
    r.baseQueue = i = s, n.pending = null;
  }
  if (i !== null) {
    s = i.next, r = r.baseState;
    var l = o = null, a = null, u = s;
    do {
      var d = u.lane;
      if ((nr & d) === d) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = c, o = r) : a = a.next = c, ye.lanes |= d, rr |= d;
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? o = r : a.next = l, bt(r, t.memoizedState) || (Ke = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, ye.lanes |= s, rr |= s, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ha(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      s = e(s, o.action), o = o.next;
    while (o !== i);
    bt(s, t.memoizedState) || (Ke = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function im() {
}
function sm(e, t) {
  var n = ye, r = ht(), i = t(), s = !bt(r.memoizedState, i);
  if (s && (r.memoizedState = i, Ke = !0), r = r.queue, of(am.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Te !== null && Te.memoizedState.tag & 1) {
    if (n.flags |= 2048, gs(9, lm.bind(null, n, r, i, t), void 0, null), Ie === null) throw Error(V(349));
    nr & 30 || om(n, t, i);
  }
  return i;
}
function om(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function lm(e, t, n, r) {
  t.value = n, t.getSnapshot = r, um(t) && cm(e);
}
function am(e, t, n) {
  return n(function() {
    um(t) && cm(e);
  });
}
function um(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function cm(e) {
  var t = nn(e, 1);
  t !== null && Ct(t, e, 1, -1);
}
function Xd(e) {
  var t = Pt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ps, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ox.bind(null, ye, e), [t.memoizedState, e];
}
function gs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fm() {
  return ht().memoizedState;
}
function Po(e, t, n, r) {
  var i = Pt();
  ye.flags |= e, i.memoizedState = gs(1 | t, n, void 0, r === void 0 ? null : r);
}
function zl(e, t, n, r) {
  var i = ht();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (be !== null) {
    var o = be.memoizedState;
    if (s = o.destroy, r !== null && nf(r, o.deps)) {
      i.memoizedState = gs(t, n, s, r);
      return;
    }
  }
  ye.flags |= e, i.memoizedState = gs(1 | t, n, s, r);
}
function Qd(e, t) {
  return Po(8390656, 8, e, t);
}
function of(e, t) {
  return zl(2048, 8, e, t);
}
function dm(e, t) {
  return zl(4, 2, e, t);
}
function hm(e, t) {
  return zl(4, 4, e, t);
}
function pm(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function gm(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zl(4, 4, pm.bind(null, t, e), n);
}
function lf() {
}
function mm(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ym(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function vm(e, t, n) {
  return nr & 21 ? (bt(n, t) || (n = Eg(), ye.lanes |= n, rr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ke = !0), e.memoizedState = n);
}
function $x(e, t) {
  var n = ae;
  ae = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Fa.transition;
  Fa.transition = {};
  try {
    e(!1), t();
  } finally {
    ae = n, Fa.transition = r;
  }
}
function wm() {
  return ht().memoizedState;
}
function Px(e, t, n) {
  var r = Cn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xm(e)) Sm(t, n);
  else if (n = tm(e, t, n, r), n !== null) {
    var i = Be();
    Ct(n, e, r, i), km(n, t, r);
  }
}
function Ox(e, t, n) {
  var r = Cn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xm(e)) Sm(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var o = t.lastRenderedState, l = s(o, n);
      if (i.hasEagerState = !0, i.eagerState = l, bt(l, o)) {
        var a = t.interleaved;
        a === null ? (i.next = i, Gc(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = tm(e, t, i, r), n !== null && (i = Be(), Ct(n, e, r, i), km(n, t, r));
  }
}
function xm(e) {
  var t = e.alternate;
  return e === ye || t !== null && t === ye;
}
function Sm(e, t) {
  Ki = dl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function km(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, jc(e, n);
  }
}
var hl = { readContext: dt, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, Dx = { readContext: dt, useCallback: function(e, t) {
  return Pt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: dt, useEffect: Qd, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Po(
    4194308,
    4,
    pm.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Po(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Po(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Pt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Pt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Px.bind(null, ye, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Pt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Xd, useDebugValue: lf, useDeferredValue: function(e) {
  return Pt().memoizedState = e;
}, useTransition: function() {
  var e = Xd(!1), t = e[0];
  return e = $x.bind(null, e[1]), Pt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ye, i = Pt();
  if (he) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), Ie === null) throw Error(V(349));
    nr & 30 || om(r, t, n);
  }
  i.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return i.queue = s, Qd(am.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, gs(9, lm.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Pt(), t = Ie.identifierPrefix;
  if (he) {
    var n = Qt, r = Xt;
    n = (r & ~(1 << 32 - Nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = hs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Lx++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, jx = {
  readContext: dt,
  useCallback: mm,
  useContext: dt,
  useEffect: of,
  useImperativeHandle: gm,
  useInsertionEffect: dm,
  useLayoutEffect: hm,
  useMemo: ym,
  useReducer: Va,
  useRef: fm,
  useState: function() {
    return Va(ps);
  },
  useDebugValue: lf,
  useDeferredValue: function(e) {
    var t = ht();
    return vm(t, be.memoizedState, e);
  },
  useTransition: function() {
    var e = Va(ps)[0], t = ht().memoizedState;
    return [e, t];
  },
  useMutableSource: im,
  useSyncExternalStore: sm,
  useId: wm,
  unstable_isNewReconciler: !1
}, Rx = { readContext: dt, useCallback: mm, useContext: dt, useEffect: of, useImperativeHandle: gm, useInsertionEffect: dm, useLayoutEffect: hm, useMemo: ym, useReducer: Ha, useRef: fm, useState: function() {
  return Ha(ps);
}, useDebugValue: lf, useDeferredValue: function(e) {
  var t = ht();
  return be === null ? t.memoizedState = e : vm(t, be.memoizedState, e);
}, useTransition: function() {
  var e = Ha(ps)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: im, useSyncExternalStore: sm, useId: wm, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = ve({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? hr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), i = Cn(e), s = Jt(r, i);
  s.payload = t, n != null && (s.callback = n), t = _n(e, s, i), t !== null && (Ct(t, e, i, r), Lo(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), i = Cn(e), s = Jt(r, i);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = _n(e, s, i), t !== null && (Ct(t, e, i, r), Lo(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = Cn(e), i = Jt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = _n(e, i, r), t !== null && (Ct(t, e, r, n), Lo(t, e, r));
} };
function qd(e, t, n, r, i, s, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !ls(n, r) || !ls(i, s) : !0;
}
function Em(e, t, n) {
  var r = !1, i = Ln, s = t.contextType;
  return typeof s == "object" && s !== null ? s = dt(s) : (i = Xe(t) ? er : je.current, r = t.contextTypes, s = (r = r != null) ? Xr(e, i) : Ln), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function Gd(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function Uu(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Jc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = dt(s) : (s = Xe(t) ? er : je.current, i.context = Xr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Hu(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Bl.enqueueReplaceState(i, i.state, null), cl(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Jr(e, t) {
  try {
    var n = "", r = t;
    do
      n += d1(r), r = r.return;
    while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ua(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ku(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var zx = typeof WeakMap == "function" ? WeakMap : Map;
function _m(e, t, n) {
  n = Jt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    gl || (gl = !0, tc = r), Ku(e, t);
  }, n;
}
function Nm(e, t, n) {
  n = Jt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Ku(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    Ku(e, t), typeof r != "function" && (Nn === null ? Nn = /* @__PURE__ */ new Set([this]) : Nn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Jd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zx();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Zx.bind(null, e, t, n), t.then(e, e));
}
function Zd(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function eh(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Jt(-1, 1), t.tag = 2, _n(n, t, 1))), n.lanes |= 1), e);
}
var Bx = on.ReactCurrentOwner, Ke = !1;
function Re(e, t, n, r) {
  t.child = e === null ? em(t, null, n, r) : qr(t, e.child, n, r);
}
function th(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return Fr(t, i), r = rf(e, t, n, r, s, i), n = sf(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, rn(e, t, i)) : (he && n && Kc(t), t.flags |= 1, Re(e, t, r, i), t.child);
}
function nh(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !gf(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Cm(e, t, s, r, i)) : (e = Ro(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var o = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ls, n(o, r) && e.ref === t.ref) return rn(e, t, i);
  }
  return t.flags |= 1, e = bn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Cm(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ls(s, r) && e.ref === t.ref) if (Ke = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Ke = !0);
    else return t.lanes = e.lanes, rn(e, t, i);
  }
  return Wu(e, t, n, r, i);
}
function bm(e, t, n) {
  var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(Ir, qe), qe |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ue(Ir, qe), qe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, ue(Ir, qe), qe |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ue(Ir, qe), qe |= r;
  return Re(e, t, i, n), t.child;
}
function Mm(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Wu(e, t, n, r, i) {
  var s = Xe(n) ? er : je.current;
  return s = Xr(t, s), Fr(t, i), n = rf(e, t, n, r, s, i), r = sf(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, rn(e, t, i)) : (he && r && Kc(t), t.flags |= 1, Re(e, t, n, i), t.child);
}
function rh(e, t, n, r, i) {
  if (Xe(n)) {
    var s = !0;
    sl(t);
  } else s = !1;
  if (Fr(t, i), t.stateNode === null) Oo(e, t), Em(t, n, r), Uu(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, l = t.memoizedProps;
    o.props = l;
    var a = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = dt(u) : (u = Xe(n) ? er : je.current, u = Xr(t, u));
    var d = n.getDerivedStateFromProps, c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && Gd(t, o, r, u), dn = !1;
    var f = t.memoizedState;
    o.state = f, cl(t, r, o, i), a = t.memoizedState, l !== r || f !== a || Ye.current || dn ? (typeof d == "function" && (Hu(t, n, d, r), a = t.memoizedState), (l = dn || qd(t, n, l, r, f, a, u)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, nm(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : vt(t.type, l), o.props = u, c = t.pendingProps, f = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = dt(a) : (a = Xe(n) ? er : je.current, a = Xr(t, a));
    var p = n.getDerivedStateFromProps;
    (d = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== c || f !== a) && Gd(t, o, r, a), dn = !1, f = t.memoizedState, o.state = f, cl(t, r, o, i);
    var y = t.memoizedState;
    l !== c || f !== y || Ye.current || dn ? (typeof p == "function" && (Hu(t, n, p, r), y = t.memoizedState), (u = dn || qd(t, n, u, r, f, y, a) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Yu(e, t, n, r, s, i);
}
function Yu(e, t, n, r, i, s) {
  Mm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Vd(t, n, !1), rn(e, t, s);
  r = t.stateNode, Bx.current = t;
  var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = qr(t, e.child, null, s), t.child = qr(t, null, l, s)) : Re(e, t, l, s), t.memoizedState = r.state, i && Vd(t, n, !0), t.child;
}
function Tm(e) {
  var t = e.stateNode;
  t.pendingContext ? Fd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fd(e, t.context, !1), Zc(e, t.containerInfo);
}
function ih(e, t, n, r, i) {
  return Qr(), Yc(i), t.flags |= 256, Re(e, t, n, r), t.child;
}
var Xu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Im(e, t, n) {
  var r = t.pendingProps, i = me.current, s = !1, o = (t.flags & 128) !== 0, l;
  if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ue(me, i & 1), e === null)
    return Fu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Hl(o, r, 0, null), e = Gn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Qu(n), t.memoizedState = Xu, e) : af(t, o));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return Fx(e, t, o, r, l, i, n);
  if (s) {
    s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = bn(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = bn(l, s) : (s = Gn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? Qu(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Xu, r;
  }
  return s = e.child, e = s.sibling, r = bn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function af(e, t) {
  return t = Hl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function oo(e, t, n, r) {
  return r !== null && Yc(r), qr(t, e.child, null, n), e = af(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Fx(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ua(Error(V(422))), oo(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Hl({ mode: "visible", children: r.children }, i, 0, null), s = Gn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && qr(t, e.child, null, o), t.child.memoizedState = Qu(o), t.memoizedState = Xu, s);
  if (!(t.mode & 1)) return oo(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
    return r = l, s = Error(V(419)), r = Ua(s, r, void 0), oo(e, t, o, r);
  }
  if (l = (o & e.childLanes) !== 0, Ke || l) {
    if (r = Ie, r !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, nn(e, i), Ct(r, e, i, -1));
    }
    return pf(), r = Ua(Error(V(421))), oo(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = eS.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ze = En(i.nextSibling), et = t, he = !0, St = null, e !== null && (ot[lt++] = Xt, ot[lt++] = Qt, ot[lt++] = tr, Xt = e.id, Qt = e.overflow, tr = t), t = af(t, r.children), t.flags |= 4096, t);
}
function sh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vu(e.return, t, n);
}
function Ka(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
}
function Am(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, s = r.tail;
  if (Re(e, t, r.children, n), r = me.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && sh(e, n, t);
      else if (e.tag === 19) sh(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ue(me, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && fl(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ka(t, !1, i, n, s);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && fl(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Ka(t, !0, n, null, s);
      break;
    case "together":
      Ka(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Oo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function rn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), rr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = bn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Vx(e, t, n) {
  switch (t.tag) {
    case 3:
      Tm(t), Qr();
      break;
    case 5:
      rm(t);
      break;
    case 1:
      Xe(t.type) && sl(t);
      break;
    case 4:
      Zc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      ue(al, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ue(me, me.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Im(e, t, n) : (ue(me, me.current & 1), e = rn(e, t, n), e !== null ? e.sibling : null);
      ue(me, me.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Am(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ue(me, me.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, bm(e, t, n);
  }
  return rn(e, t, n);
}
var Lm, qu, $m, Pm;
Lm = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
qu = function() {
};
$m = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Kn(Rt.current);
    var s = null;
    switch (n) {
      case "input":
        i = vu(e, i), r = vu(e, r), s = [];
        break;
      case "select":
        i = ve({}, i, { value: void 0 }), r = ve({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = Su(e, i), r = Su(e, r), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = rl);
    }
    Eu(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var l = i[u];
      for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (es.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (o in l) !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (es.hasOwnProperty(u) ? (a != null && u === "onScroll" && fe("scroll", e), s || l === a || (s = [])) : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Pm = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ni(e, t) {
  if (!he) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Hx(e, t, n) {
  var r = t.pendingProps;
  switch (Wc(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return Xe(t.type) && il(), Oe(t), null;
    case 3:
      return r = t.stateNode, Gr(), de(Ye), de(je), tf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (io(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, St !== null && (ic(St), St = null))), qu(e, t), Oe(t), null;
    case 5:
      ef(t);
      var i = Kn(ds.current);
      if (n = t.type, e !== null && t.stateNode != null) $m(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return Oe(t), null;
        }
        if (e = Kn(Rt.current), io(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Dt] = t, r[cs] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Pi.length; i++) fe(Pi[i], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe(
                "error",
                r
              ), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              pd(r, s), fe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, fe("invalid", r);
              break;
            case "textarea":
              md(r, s), fe("invalid", r);
          }
          Eu(n, s), i = null;
          for (var o in s) if (s.hasOwnProperty(o)) {
            var l = s[o];
            o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && ro(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && ro(
              r.textContent,
              l,
              e
            ), i = ["children", "" + l]) : es.hasOwnProperty(o) && l != null && o === "onScroll" && fe("scroll", r);
          }
          switch (n) {
            case "input":
              Qs(r), gd(r, s, !0);
              break;
            case "textarea":
              Qs(r), yd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = rl);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ag(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Dt] = t, e[cs] = r, Lm(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = _u(n, r), n) {
              case "dialog":
                fe("cancel", e), fe("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Pi.length; i++) fe(Pi[i], e);
                i = r;
                break;
              case "source":
                fe("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                fe(
                  "error",
                  e
                ), fe("load", e), i = r;
                break;
              case "details":
                fe("toggle", e), i = r;
                break;
              case "input":
                pd(e, r), i = vu(e, r), fe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = ve({}, r, { value: void 0 }), fe("invalid", e);
                break;
              case "textarea":
                md(e, r), i = Su(e, r), fe("invalid", e);
                break;
              default:
                i = r;
            }
            Eu(n, i), l = i;
            for (s in l) if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "style" ? fg(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ug(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ts(e, a) : typeof a == "number" && ts(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (es.hasOwnProperty(s) ? a != null && s === "onScroll" && fe("scroll", e) : a != null && Ac(e, s, a, o));
            }
            switch (n) {
              case "input":
                Qs(e), gd(e, r, !1);
                break;
              case "textarea":
                Qs(e), yd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + An(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? jr(e, !!r.multiple, s, !1) : r.defaultValue != null && jr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = rl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) Pm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = Kn(ds.current), Kn(Rt.current), io(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Dt] = t, (s = r.nodeValue !== n) && (e = et, e !== null)) switch (e.tag) {
            case 3:
              ro(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ro(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Dt] = t, t.stateNode = r;
      }
      return Oe(t), null;
    case 13:
      if (de(me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (he && Ze !== null && t.mode & 1 && !(t.flags & 128)) Jg(), Qr(), t.flags |= 98560, s = !1;
        else if (s = io(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(V(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(V(317));
            s[Dt] = t;
          } else Qr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Oe(t), s = !1;
        } else St !== null && (ic(St), St = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || me.current & 1 ? Me === 0 && (Me = 3) : pf())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
    case 4:
      return Gr(), qu(e, t), e === null && as(t.stateNode.containerInfo), Oe(t), null;
    case 10:
      return qc(t.type._context), Oe(t), null;
    case 17:
      return Xe(t.type) && il(), Oe(t), null;
    case 19:
      if (de(me), s = t.memoizedState, s === null) return Oe(t), null;
      if (r = (t.flags & 128) !== 0, o = s.rendering, o === null) if (r) Ni(s, !1);
      else {
        if (Me !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = fl(e), o !== null) {
            for (t.flags |= 128, Ni(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ue(me, me.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && Se() > Zr && (t.flags |= 128, r = !0, Ni(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = fl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ni(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !he) return Oe(t), null;
        } else 2 * Se() - s.renderingStartTime > Zr && n !== 1073741824 && (t.flags |= 128, r = !0, Ni(s, !1), t.lanes = 4194304);
        s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Se(), t.sibling = null, n = me.current, ue(me, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
    case 22:
    case 23:
      return hf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? qe & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function Ux(e, t) {
  switch (Wc(t), t.tag) {
    case 1:
      return Xe(t.type) && il(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Gr(), de(Ye), de(je), tf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ef(t), null;
    case 13:
      if (de(me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        Qr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return de(me), null;
    case 4:
      return Gr(), null;
    case 10:
      return qc(t.type._context), null;
    case 22:
    case 23:
      return hf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var lo = !1, De = !1, Kx = typeof WeakSet == "function" ? WeakSet : Set, W = null;
function Tr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    we(e, t, r);
  }
  else n.current = null;
}
function Gu(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var oh = !1;
function Wx(e, t) {
  if (Pu = el, e = zg(), Uc(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, l = -1, a = -1, u = 0, d = 0, c = e, f = null;
        t: for (; ; ) {
          for (var p; c !== n || i !== 0 && c.nodeType !== 3 || (l = o + i), c !== s || r !== 0 && c.nodeType !== 3 || (a = o + r), c.nodeType === 3 && (o += c.nodeValue.length), (p = c.firstChild) !== null; )
            f = c, c = p;
          for (; ; ) {
            if (c === e) break t;
            if (f === n && ++u === i && (l = o), f === s && ++d === r && (a = o), (p = c.nextSibling) !== null) break;
            c = f, f = c.parentNode;
          }
          c = p;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ou = { focusedElem: e, selectionRange: n }, el = !1, W = t; W !== null; ) if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
  else for (; W !== null; ) {
    t = W;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var v = y.memoizedProps, w = y.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vt(t.type, v), w);
            h.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(V(163));
      }
    } catch (x) {
      we(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, W = e;
      break;
    }
    W = t.return;
  }
  return y = oh, oh = !1, y;
}
function Wi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && Gu(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Fl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ju(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Om(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Om(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Dt], delete t[cs], delete t[Ru], delete t[Mx], delete t[Tx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Dm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lh(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dm(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = rl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Zu(e, t, n), e = e.sibling; e !== null; ) Zu(e, t, n), e = e.sibling;
}
function ec(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ec(e, t, n), e = e.sibling; e !== null; ) ec(e, t, n), e = e.sibling;
}
var Ae = null, wt = !1;
function an(e, t, n) {
  for (n = n.child; n !== null; ) jm(e, t, n), n = n.sibling;
}
function jm(e, t, n) {
  if (jt && typeof jt.onCommitFiberUnmount == "function") try {
    jt.onCommitFiberUnmount($l, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      De || Tr(n, t);
    case 6:
      var r = Ae, i = wt;
      Ae = null, an(e, t, n), Ae = r, wt = i, Ae !== null && (wt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null && (wt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? Ra(e.parentNode, n) : e.nodeType === 1 && Ra(e, n), ss(e)) : Ra(Ae, n.stateNode));
      break;
    case 4:
      r = Ae, i = wt, Ae = n.stateNode.containerInfo, wt = !0, an(e, t, n), Ae = r, wt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!De && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && Gu(n, t, o), i = i.next;
        } while (i !== r);
      }
      an(e, t, n);
      break;
    case 1:
      if (!De && (Tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        we(n, t, l);
      }
      an(e, t, n);
      break;
    case 21:
      an(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (De = (r = De) || n.memoizedState !== null, an(e, t, n), De = r) : an(e, t, n);
      break;
    default:
      an(e, t, n);
  }
}
function ah(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Kx()), t.forEach(function(r) {
      var i = tS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var s = e, o = t, l = o;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Ae = l.stateNode, wt = !1;
            break e;
          case 3:
            Ae = l.stateNode.containerInfo, wt = !0;
            break e;
          case 4:
            Ae = l.stateNode.containerInfo, wt = !0;
            break e;
        }
        l = l.return;
      }
      if (Ae === null) throw Error(V(160));
      jm(s, o, i), Ae = null, wt = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (u) {
      we(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rm(t, e), t = t.sibling;
}
function Rm(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mt(t, e), $t(e), r & 4) {
        try {
          Wi(3, e, e.return), Fl(3, e);
        } catch (v) {
          we(e, e.return, v);
        }
        try {
          Wi(5, e, e.return);
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 1:
      mt(t, e), $t(e), r & 512 && n !== null && Tr(n, n.return);
      break;
    case 5:
      if (mt(t, e), $t(e), r & 512 && n !== null && Tr(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          ts(i, "");
        } catch (v) {
          we(e, e.return, v);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, o = n !== null ? n.memoizedProps : s, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && s.type === "radio" && s.name != null && og(i, s), _u(l, o);
          var u = _u(l, s);
          for (o = 0; o < a.length; o += 2) {
            var d = a[o], c = a[o + 1];
            d === "style" ? fg(i, c) : d === "dangerouslySetInnerHTML" ? ug(i, c) : d === "children" ? ts(i, c) : Ac(i, d, c, u);
          }
          switch (l) {
            case "input":
              wu(i, s);
              break;
            case "textarea":
              lg(i, s);
              break;
            case "select":
              var f = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var p = s.value;
              p != null ? jr(i, !!s.multiple, p, !1) : f !== !!s.multiple && (s.defaultValue != null ? jr(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : jr(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[cs] = s;
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 6:
      if (mt(t, e), $t(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 3:
      if (mt(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ss(t.containerInfo);
      } catch (v) {
        we(e, e.return, v);
      }
      break;
    case 4:
      mt(t, e), $t(e);
      break;
    case 13:
      mt(t, e), $t(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (ff = Se())), r & 4 && ah(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (De = (u = De) || d, mt(t, e), De = u) : mt(t, e), $t(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (W = e, d = e.child; d !== null; ) {
          for (c = W = d; W !== null; ) {
            switch (f = W, p = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Wi(4, f, f.return);
                break;
              case 1:
                Tr(f, f.return);
                var y = f.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    we(r, n, v);
                  }
                }
                break;
              case 5:
                Tr(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  ch(c);
                  continue;
                }
            }
            p !== null ? (p.return = f, W = p) : ch(c);
          }
          d = d.sibling;
        }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                i = c.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = c.stateNode, a = c.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = cg("display", o));
              } catch (v) {
                we(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (d === null) try {
              c.stateNode.nodeValue = u ? "" : c.memoizedProps;
            } catch (v) {
              we(e, e.return, v);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), c = c.return;
          }
          d === c && (d = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      mt(t, e), $t(e), r & 4 && ah(e);
      break;
    case 21:
      break;
    default:
      mt(
        t,
        e
      ), $t(e);
  }
}
function $t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ts(i, ""), r.flags &= -33);
          var s = lh(e);
          ec(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, l = lh(e);
          Zu(e, l, o);
          break;
        default:
          throw Error(V(161));
      }
    } catch (a) {
      we(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Yx(e, t, n) {
  W = e, zm(e);
}
function zm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var i = W, s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || lo;
      if (!o) {
        var l = i.alternate, a = l !== null && l.memoizedState !== null || De;
        l = lo;
        var u = De;
        if (lo = o, (De = a) && !u) for (W = i; W !== null; ) o = W, a = o.child, o.tag === 22 && o.memoizedState !== null ? fh(i) : a !== null ? (a.return = o, W = a) : fh(i);
        for (; s !== null; ) W = s, zm(s), s = s.sibling;
        W = i, lo = l, De = u;
      }
      uh(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, W = s) : uh(e);
  }
}
function uh(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            De || Fl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !De) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Yd(t, s, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Yd(t, o, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var d = u.memoizedState;
                if (d !== null) {
                  var c = d.dehydrated;
                  c !== null && ss(c);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(V(163));
        }
        De || t.flags & 512 && Ju(t);
      } catch (f) {
        we(t, t.return, f);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, W = n;
      break;
    }
    W = t.return;
  }
}
function ch(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, W = n;
      break;
    }
    W = t.return;
  }
}
function fh(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fl(4, t);
          } catch (a) {
            we(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              we(t, i, a);
            }
          }
          var s = t.return;
          try {
            Ju(t);
          } catch (a) {
            we(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ju(t);
          } catch (a) {
            we(t, o, a);
          }
      }
    } catch (a) {
      we(t, t.return, a);
    }
    if (t === e) {
      W = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, W = l;
      break;
    }
    W = t.return;
  }
}
var Xx = Math.ceil, pl = on.ReactCurrentDispatcher, uf = on.ReactCurrentOwner, ct = on.ReactCurrentBatchConfig, se = 0, Ie = null, Ne = null, Le = 0, qe = 0, Ir = Pn(0), Me = 0, ms = null, rr = 0, Vl = 0, cf = 0, Yi = null, Ue = null, ff = 0, Zr = 1 / 0, Wt = null, gl = !1, tc = null, Nn = null, ao = !1, vn = null, ml = 0, Xi = 0, nc = null, Do = -1, jo = 0;
function Be() {
  return se & 6 ? Se() : Do !== -1 ? Do : Do = Se();
}
function Cn(e) {
  return e.mode & 1 ? se & 2 && Le !== 0 ? Le & -Le : Ax.transition !== null ? (jo === 0 && (jo = Eg()), jo) : (e = ae, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ig(e.type)), e) : 1;
}
function Ct(e, t, n, r) {
  if (50 < Xi) throw Xi = 0, nc = null, Error(V(185));
  As(e, n, r), (!(se & 2) || e !== Ie) && (e === Ie && (!(se & 2) && (Vl |= n), Me === 4 && gn(e, Le)), Qe(e, r), n === 1 && se === 0 && !(t.mode & 1) && (Zr = Se() + 500, Rl && On()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  A1(e, t);
  var r = Zo(e, e === Ie ? Le : 0);
  if (r === 0) n !== null && xd(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && xd(n), t === 1) e.tag === 0 ? Ix(dh.bind(null, e)) : Qg(dh.bind(null, e)), Cx(function() {
      !(se & 6) && On();
    }), n = null;
    else {
      switch (_g(r)) {
        case 1:
          n = Dc;
          break;
        case 4:
          n = Sg;
          break;
        case 16:
          n = Jo;
          break;
        case 536870912:
          n = kg;
          break;
        default:
          n = Jo;
      }
      n = Ym(n, Bm.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Bm(e, t) {
  if (Do = -1, jo = 0, se & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (Vr() && e.callbackNode !== n) return null;
  var r = Zo(e, e === Ie ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
  else {
    t = r;
    var i = se;
    se |= 2;
    var s = Vm();
    (Ie !== e || Le !== t) && (Wt = null, Zr = Se() + 500, qn(e, t));
    do
      try {
        Gx();
        break;
      } catch (l) {
        Fm(e, l);
      }
    while (!0);
    Qc(), pl.current = s, se = i, Ne !== null ? t = 0 : (Ie = null, Le = 0, t = Me);
  }
  if (t !== 0) {
    if (t === 2 && (i = Tu(e), i !== 0 && (r = i, t = rc(e, i))), t === 1) throw n = ms, qn(e, 0), gn(e, r), Qe(e, Se()), n;
    if (t === 6) gn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Qx(i) && (t = yl(e, r), t === 2 && (s = Tu(e), s !== 0 && (r = s, t = rc(e, s))), t === 1)) throw n = ms, qn(e, 0), gn(e, r), Qe(e, Se()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          Bn(e, Ue, Wt);
          break;
        case 3:
          if (gn(e, r), (r & 130023424) === r && (t = ff + 500 - Se(), 10 < t)) {
            if (Zo(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Be(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = ju(Bn.bind(null, e, Ue, Wt), t);
            break;
          }
          Bn(e, Ue, Wt);
          break;
        case 4:
          if (gn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Nt(r);
            s = 1 << o, o = t[o], o > i && (i = o), r &= ~s;
          }
          if (r = i, r = Se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Xx(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ju(Bn.bind(null, e, Ue, Wt), r);
            break;
          }
          Bn(e, Ue, Wt);
          break;
        case 5:
          Bn(e, Ue, Wt);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return Qe(e, Se()), e.callbackNode === n ? Bm.bind(null, e) : null;
}
function rc(e, t) {
  var n = Yi;
  return e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256), e = yl(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && ic(t)), e;
}
function ic(e) {
  Ue === null ? Ue = e : Ue.push.apply(Ue, e);
}
function Qx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], s = i.getSnapshot;
        i = i.value;
        try {
          if (!bt(s(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function gn(e, t) {
  for (t &= ~cf, t &= ~Vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function dh(e) {
  if (se & 6) throw Error(V(327));
  Vr();
  var t = Zo(e, 0);
  if (!(t & 1)) return Qe(e, Se()), null;
  var n = yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Tu(e);
    r !== 0 && (t = r, n = rc(e, r));
  }
  if (n === 1) throw n = ms, qn(e, 0), gn(e, t), Qe(e, Se()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bn(e, Ue, Wt), Qe(e, Se()), null;
}
function df(e, t) {
  var n = se;
  se |= 1;
  try {
    return e(t);
  } finally {
    se = n, se === 0 && (Zr = Se() + 500, Rl && On());
  }
}
function ir(e) {
  vn !== null && vn.tag === 0 && !(se & 6) && Vr();
  var t = se;
  se |= 1;
  var n = ct.transition, r = ae;
  try {
    if (ct.transition = null, ae = 1, e) return e();
  } finally {
    ae = r, ct.transition = n, se = t, !(se & 6) && On();
  }
}
function hf() {
  qe = Ir.current, de(Ir);
}
function qn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Nx(n)), Ne !== null) for (n = Ne.return; n !== null; ) {
    var r = n;
    switch (Wc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && il();
        break;
      case 3:
        Gr(), de(Ye), de(je), tf();
        break;
      case 5:
        ef(r);
        break;
      case 4:
        Gr();
        break;
      case 13:
        de(me);
        break;
      case 19:
        de(me);
        break;
      case 10:
        qc(r.type._context);
        break;
      case 22:
      case 23:
        hf();
    }
    n = n.return;
  }
  if (Ie = e, Ne = e = bn(e.current, null), Le = qe = t, Me = 0, ms = null, cf = Vl = rr = 0, Ue = Yi = null, Un !== null) {
    for (t = 0; t < Un.length; t++) if (n = Un[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, s = n.pending;
      if (s !== null) {
        var o = s.next;
        s.next = i, r.next = o;
      }
      n.pending = r;
    }
    Un = null;
  }
  return e;
}
function Fm(e, t) {
  do {
    var n = Ne;
    try {
      if (Qc(), $o.current = hl, dl) {
        for (var r = ye.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        dl = !1;
      }
      if (nr = 0, Te = be = ye = null, Ki = !1, hs = 0, uf.current = null, n === null || n.return === null) {
        Me = 1, ms = t, Ne = null;
        break;
      }
      e: {
        var s = e, o = n.return, l = n, a = t;
        if (t = Le, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, d = l, c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var p = Zd(o);
          if (p !== null) {
            p.flags &= -257, eh(p, o, l, s, t), p.mode & 1 && Jd(s, u, t), t = p, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Jd(s, u, t), pf();
              break e;
            }
            a = Error(V(426));
          }
        } else if (he && l.mode & 1) {
          var w = Zd(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), eh(w, o, l, s, t), Yc(Jr(a, l));
            break e;
          }
        }
        s = a = Jr(a, l), Me !== 4 && (Me = 2), Yi === null ? Yi = [s] : Yi.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var h = _m(s, a, t);
              Wd(s, h);
              break e;
            case 1:
              l = a;
              var m = s.type, g = s.stateNode;
              if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Nn === null || !Nn.has(g)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var x = Nm(s, l, t);
                Wd(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Um(n);
    } catch (S) {
      t = S, Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Vm() {
  var e = pl.current;
  return pl.current = hl, e === null ? hl : e;
}
function pf() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4), Ie === null || !(rr & 268435455) && !(Vl & 268435455) || gn(Ie, Le);
}
function yl(e, t) {
  var n = se;
  se |= 2;
  var r = Vm();
  (Ie !== e || Le !== t) && (Wt = null, qn(e, t));
  do
    try {
      qx();
      break;
    } catch (i) {
      Fm(e, i);
    }
  while (!0);
  if (Qc(), se = n, pl.current = r, Ne !== null) throw Error(V(261));
  return Ie = null, Le = 0, Me;
}
function qx() {
  for (; Ne !== null; ) Hm(Ne);
}
function Gx() {
  for (; Ne !== null && !k1(); ) Hm(Ne);
}
function Hm(e) {
  var t = Wm(e.alternate, e, qe);
  e.memoizedProps = e.pendingProps, t === null ? Um(e) : Ne = t, uf.current = null;
}
function Um(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ux(n, t), n !== null) {
        n.flags &= 32767, Ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Me = 6, Ne = null;
        return;
      }
    } else if (n = Hx(n, t, qe), n !== null) {
      Ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function Bn(e, t, n) {
  var r = ae, i = ct.transition;
  try {
    ct.transition = null, ae = 1, Jx(e, t, n, r);
  } finally {
    ct.transition = i, ae = r;
  }
  return null;
}
function Jx(e, t, n, r) {
  do
    Vr();
  while (vn !== null);
  if (se & 6) throw Error(V(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (L1(e, s), e === Ie && (Ne = Ie = null, Le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ao || (ao = !0, Ym(Jo, function() {
    return Vr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = ct.transition, ct.transition = null;
    var o = ae;
    ae = 1;
    var l = se;
    se |= 4, uf.current = null, Wx(e, n), Rm(n, e), vx(Ou), el = !!Pu, Ou = Pu = null, e.current = n, Yx(n), E1(), se = l, ae = o, ct.transition = s;
  } else e.current = n;
  if (ao && (ao = !1, vn = e, ml = i), s = e.pendingLanes, s === 0 && (Nn = null), C1(n.stateNode), Qe(e, Se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (gl) throw gl = !1, e = tc, tc = null, e;
  return ml & 1 && e.tag !== 0 && Vr(), s = e.pendingLanes, s & 1 ? e === nc ? Xi++ : (Xi = 0, nc = e) : Xi = 0, On(), null;
}
function Vr() {
  if (vn !== null) {
    var e = _g(ml), t = ct.transition, n = ae;
    try {
      if (ct.transition = null, ae = 16 > e ? 16 : e, vn === null) var r = !1;
      else {
        if (e = vn, vn = null, ml = 0, se & 6) throw Error(V(331));
        var i = se;
        for (se |= 4, W = e.current; W !== null; ) {
          var s = W, o = s.child;
          if (W.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (W = u; W !== null; ) {
                  var d = W;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wi(8, d, s);
                  }
                  var c = d.child;
                  if (c !== null) c.return = d, W = c;
                  else for (; W !== null; ) {
                    d = W;
                    var f = d.sibling, p = d.return;
                    if (Om(d), d === u) {
                      W = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = p, W = f;
                      break;
                    }
                    W = p;
                  }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var w = v.sibling;
                    v.sibling = null, v = w;
                  } while (v !== null);
                }
              }
              W = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) o.return = s, W = o;
          else e: for (; W !== null; ) {
            if (s = W, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Wi(9, s, s.return);
            }
            var h = s.sibling;
            if (h !== null) {
              h.return = s.return, W = h;
              break e;
            }
            W = s.return;
          }
        }
        var m = e.current;
        for (W = m; W !== null; ) {
          o = W;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) g.return = o, W = g;
          else e: for (o = m; W !== null; ) {
            if (l = W, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Fl(9, l);
              }
            } catch (S) {
              we(l, l.return, S);
            }
            if (l === o) {
              W = null;
              break e;
            }
            var x = l.sibling;
            if (x !== null) {
              x.return = l.return, W = x;
              break e;
            }
            W = l.return;
          }
        }
        if (se = i, On(), jt && typeof jt.onPostCommitFiberRoot == "function") try {
          jt.onPostCommitFiberRoot($l, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ae = n, ct.transition = t;
    }
  }
  return !1;
}
function hh(e, t, n) {
  t = Jr(n, t), t = _m(e, t, 1), e = _n(e, t, 1), t = Be(), e !== null && (As(e, 1, t), Qe(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) hh(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      hh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nn === null || !Nn.has(r))) {
        e = Jr(n, e), e = Nm(t, e, 1), t = _n(t, e, 1), e = Be(), t !== null && (As(t, 1, e), Qe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Zx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, Ie === e && (Le & n) === n && (Me === 4 || Me === 3 && (Le & 130023424) === Le && 500 > Se() - ff ? qn(e, 0) : cf |= n), Qe(e, t);
}
function Km(e, t) {
  t === 0 && (e.mode & 1 ? (t = Js, Js <<= 1, !(Js & 130023424) && (Js = 4194304)) : t = 1);
  var n = Be();
  e = nn(e, t), e !== null && (As(e, t, n), Qe(e, n));
}
function eS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Km(e, n);
}
function tS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(V(314));
  }
  r !== null && r.delete(t), Km(e, n);
}
var Wm;
Wm = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ye.current) Ke = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ke = !1, Vx(e, t, n);
    Ke = !!(e.flags & 131072);
  }
  else Ke = !1, he && t.flags & 1048576 && qg(t, ll, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Oo(e, t), e = t.pendingProps;
      var i = Xr(t, je.current);
      Fr(t, n), i = rf(null, t, r, e, i, n);
      var s = sf();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (s = !0, sl(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Jc(t), i.updater = Bl, t.stateNode = i, i._reactInternals = t, Uu(t, r, e, n), t = Yu(null, t, r, !0, s, n)) : (t.tag = 0, he && s && Kc(t), Re(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Oo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = rS(r), e = vt(r, e), i) {
          case 0:
            t = Wu(null, t, r, e, n);
            break e;
          case 1:
            t = rh(null, t, r, e, n);
            break e;
          case 11:
            t = th(null, t, r, e, n);
            break e;
          case 14:
            t = nh(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(V(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), Wu(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), rh(e, t, r, i, n);
    case 3:
      e: {
        if (Tm(t), e === null) throw Error(V(387));
        r = t.pendingProps, s = t.memoizedState, i = s.element, nm(e, t), cl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = Jr(Error(V(423)), t), t = ih(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Jr(Error(V(424)), t), t = ih(e, t, r, n, i);
          break e;
        } else for (Ze = En(t.stateNode.containerInfo.firstChild), et = t, he = !0, St = null, n = em(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Qr(), r === i) {
            t = rn(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return rm(t), e === null && Fu(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, Du(r, i) ? o = null : s !== null && Du(r, s) && (t.flags |= 32), Mm(e, t), Re(e, t, o, n), t.child;
    case 6:
      return e === null && Fu(t), null;
    case 13:
      return Im(e, t, n);
    case 4:
      return Zc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = qr(t, null, r, n) : Re(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), th(e, t, r, i, n);
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, ue(al, r._currentValue), r._currentValue = o, s !== null) if (bt(s.value, o)) {
          if (s.children === i.children && !Ye.current) {
            t = rn(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var l = s.dependencies;
          if (l !== null) {
            o = s.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (s.tag === 1) {
                  a = Jt(-1, n & -n), a.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                  }
                }
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Vu(
                  s.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (o = s.return, o === null) throw Error(V(341));
            o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Vu(o, n, t), o = s.sibling;
          } else o = s.child;
          if (o !== null) o.return = s;
          else for (o = s; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (s = o.sibling, s !== null) {
              s.return = o.return, o = s;
              break;
            }
            o = o.return;
          }
          s = o;
        }
        Re(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Fr(t, n), i = dt(i), r = r(i), t.flags |= 1, Re(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = vt(r, t.pendingProps), i = vt(r.type, i), nh(e, t, r, i, n);
    case 15:
      return Cm(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), Oo(e, t), t.tag = 1, Xe(r) ? (e = !0, sl(t)) : e = !1, Fr(t, n), Em(t, r, i), Uu(t, r, i, n), Yu(null, t, r, !0, e, n);
    case 19:
      return Am(e, t, n);
    case 22:
      return bm(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function Ym(e, t) {
  return xg(e, t);
}
function nS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new nS(e, t, n, r);
}
function gf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function rS(e) {
  if (typeof e == "function") return gf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === $c) return 11;
    if (e === Pc) return 14;
  }
  return 2;
}
function bn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ro(e, t, n, r, i, s) {
  var o = 2;
  if (r = e, typeof e == "function") gf(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case xr:
      return Gn(n.children, i, s, t);
    case Lc:
      o = 8, i |= 8;
      break;
    case pu:
      return e = ut(12, n, t, i | 2), e.elementType = pu, e.lanes = s, e;
    case gu:
      return e = ut(13, n, t, i), e.elementType = gu, e.lanes = s, e;
    case mu:
      return e = ut(19, n, t, i), e.elementType = mu, e.lanes = s, e;
    case rg:
      return Hl(n, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case tg:
          o = 10;
          break e;
        case ng:
          o = 9;
          break e;
        case $c:
          o = 11;
          break e;
        case Pc:
          o = 14;
          break e;
        case fn:
          o = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = ut(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
}
function Gn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function Hl(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = rg, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Wa(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function Ya(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function iS(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ba(0), this.expirationTimes = ba(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ba(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function mf(e, t, n, r, i, s, o, l, a) {
  return e = new iS(e, t, n, l, a), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = ut(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Jc(s), e;
}
function sS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: wr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Xm(e) {
  if (!e) return Ln;
  e = e._reactInternals;
  e: {
    if (hr(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return Xg(e, n, t);
  }
  return t;
}
function Qm(e, t, n, r, i, s, o, l, a) {
  return e = mf(n, r, !0, e, i, s, o, l, a), e.context = Xm(null), n = e.current, r = Be(), i = Cn(n), s = Jt(r, i), s.callback = t ?? null, _n(n, s, i), e.current.lanes = i, As(e, i, r), Qe(e, r), e;
}
function Ul(e, t, n, r) {
  var i = t.current, s = Be(), o = Cn(i);
  return n = Xm(n), t.context === null ? t.context = n : t.pendingContext = n, t = Jt(s, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _n(i, t, o), e !== null && (Ct(e, i, o, s), Lo(e, i, o)), o;
}
function vl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ph(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function yf(e, t) {
  ph(e, t), (e = e.alternate) && ph(e, t);
}
function oS() {
  return null;
}
var qm = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function vf(e) {
  this._internalRoot = e;
}
Kl.prototype.render = vf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  Ul(e, t, null, null);
};
Kl.prototype.unmount = vf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ir(function() {
      Ul(null, e, null, null);
    }), t[tn] = null;
  }
};
function Kl(e) {
  this._internalRoot = e;
}
Kl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = bg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++) ;
    pn.splice(n, 0, e), n === 0 && Tg(e);
  }
};
function wf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Wl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function gh() {
}
function lS(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = vl(o);
        s.call(u);
      };
    }
    var o = Qm(t, r, e, 0, null, !1, !1, "", gh);
    return e._reactRootContainer = o, e[tn] = o.current, as(e.nodeType === 8 ? e.parentNode : e), ir(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = vl(a);
      l.call(u);
    };
  }
  var a = mf(e, 0, !1, null, null, !1, !1, "", gh);
  return e._reactRootContainer = a, e[tn] = a.current, as(e.nodeType === 8 ? e.parentNode : e), ir(function() {
    Ul(t, a, n, r);
  }), a;
}
function Yl(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var a = vl(o);
        l.call(a);
      };
    }
    Ul(t, o, e, i);
  } else o = lS(n, t, e, i, r);
  return vl(o);
}
Ng = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $i(t.pendingLanes);
        n !== 0 && (jc(t, n | 1), Qe(t, Se()), !(se & 6) && (Zr = Se() + 500, On()));
      }
      break;
    case 13:
      ir(function() {
        var r = nn(e, 1);
        if (r !== null) {
          var i = Be();
          Ct(r, e, 1, i);
        }
      }), yf(e, 1);
  }
};
Rc = function(e) {
  if (e.tag === 13) {
    var t = nn(e, 134217728);
    if (t !== null) {
      var n = Be();
      Ct(t, e, 134217728, n);
    }
    yf(e, 134217728);
  }
};
Cg = function(e) {
  if (e.tag === 13) {
    var t = Cn(e), n = nn(e, t);
    if (n !== null) {
      var r = Be();
      Ct(n, e, t, r);
    }
    yf(e, t);
  }
};
bg = function() {
  return ae;
};
Mg = function(e, t) {
  var n = ae;
  try {
    return ae = e, t();
  } finally {
    ae = n;
  }
};
Cu = function(e, t, n) {
  switch (t) {
    case "input":
      if (wu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = jl(r);
            if (!i) throw Error(V(90));
            sg(r), wu(r, i);
          }
        }
      }
      break;
    case "textarea":
      lg(e, n);
      break;
    case "select":
      t = n.value, t != null && jr(e, !!n.multiple, t, !1);
  }
};
pg = df;
gg = ir;
var aS = { usingClientEntryPoint: !1, Events: [$s, _r, jl, dg, hg, df] }, Ci = { findFiberByHostInstance: Hn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, uS = { bundleType: Ci.bundleType, version: Ci.version, rendererPackageName: Ci.rendererPackageName, rendererConfig: Ci.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: on.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = vg(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ci.findFiberByHostInstance || oS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!uo.isDisabled && uo.supportsFiber) try {
    $l = uo.inject(uS), jt = uo;
  } catch {
  }
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aS;
rt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wf(t)) throw Error(V(200));
  return sS(e, t, null, n);
};
rt.createRoot = function(e, t) {
  if (!wf(e)) throw Error(V(299));
  var n = !1, r = "", i = qm;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = mf(e, 1, !1, null, null, n, !1, r, i), e[tn] = t.current, as(e.nodeType === 8 ? e.parentNode : e), new vf(t);
};
rt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = vg(t), e = e === null ? null : e.stateNode, e;
};
rt.flushSync = function(e) {
  return ir(e);
};
rt.hydrate = function(e, t, n) {
  if (!Wl(t)) throw Error(V(200));
  return Yl(null, e, t, !0, n);
};
rt.hydrateRoot = function(e, t, n) {
  if (!wf(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, i = !1, s = "", o = qm;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Qm(t, null, e, 1, n ?? null, i, !1, s, o), e[tn] = t.current, as(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new Kl(t);
};
rt.render = function(e, t, n) {
  if (!Wl(t)) throw Error(V(200));
  return Yl(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function(e) {
  if (!Wl(e)) throw Error(V(40));
  return e._reactRootContainer ? (ir(function() {
    Yl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[tn] = null;
    });
  }), !0) : !1;
};
rt.unstable_batchedUpdates = df;
rt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Wl(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return Yl(e, t, n, !1, r);
};
rt.version = "18.3.1-next-f1338f8080-20240426";
function Gm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gm);
    } catch (e) {
      console.error(e);
    }
}
Gm(), Gp.exports = rt;
var cS = Gp.exports, xf, mh = cS;
xf = mh.createRoot, mh.hydrateRoot;
var Jm = { exports: {} }, Xl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fS = O, dS = Symbol.for("react.element"), hS = Symbol.for("react.fragment"), pS = Object.prototype.hasOwnProperty, gS = fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, mS = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zm(e, t, n) {
  var r, i = {}, s = null, o = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) pS.call(t, r) && !mS.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: dS, type: e, key: s, ref: o, props: i, _owner: gS.current };
}
Xl.Fragment = hS;
Xl.jsx = Zm;
Xl.jsxs = Zm;
Jm.exports = Xl;
var L = Jm.exports;
function Ce(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Ce(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var yS = { value: () => {
} };
function Ql() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new zo(n);
}
function zo(e) {
  this._ = e;
}
function vS(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
zo.prototype = Ql.prototype = {
  constructor: zo,
  on: function(e, t) {
    var n = this._, r = vS(e + "", n), i, s = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++s < o; ) if ((i = (e = r[s]).type) && (i = wS(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++s < o; )
      if (i = (e = r[s]).type) n[i] = yh(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = yh(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new zo(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, s; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (s = this._[e], r = 0, i = s.length; r < i; ++r) s[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], i = 0, s = r.length; i < s; ++i) r[i].value.apply(t, n);
  }
};
function wS(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function yh(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = yS, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var sc = "http://www.w3.org/1999/xhtml";
const vh = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: sc,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ql(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), vh.hasOwnProperty(t) ? { space: vh[t], local: e } : e;
}
function xS(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === sc && t.documentElement.namespaceURI === sc ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function SS(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ey(e) {
  var t = ql(e);
  return (t.local ? SS : xS)(t);
}
function kS() {
}
function Sf(e) {
  return e == null ? kS : function() {
    return this.querySelector(e);
  };
}
function ES(e) {
  typeof e != "function" && (e = Sf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], o = s.length, l = r[i] = new Array(o), a, u, d = 0; d < o; ++d)
      (a = s[d]) && (u = e.call(a, a.__data__, d, s)) && ("__data__" in a && (u.__data__ = a.__data__), l[d] = u);
  return new nt(r, this._parents);
}
function _S(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function NS() {
  return [];
}
function ty(e) {
  return e == null ? NS : function() {
    return this.querySelectorAll(e);
  };
}
function CS(e) {
  return function() {
    return _S(e.apply(this, arguments));
  };
}
function bS(e) {
  typeof e == "function" ? e = CS(e) : e = ty(e);
  for (var t = this._groups, n = t.length, r = [], i = [], s = 0; s < n; ++s)
    for (var o = t[s], l = o.length, a, u = 0; u < l; ++u)
      (a = o[u]) && (r.push(e.call(a, a.__data__, u, o)), i.push(a));
  return new nt(r, i);
}
function ny(e) {
  return function() {
    return this.matches(e);
  };
}
function ry(e) {
  return function(t) {
    return t.matches(e);
  };
}
var MS = Array.prototype.find;
function TS(e) {
  return function() {
    return MS.call(this.children, e);
  };
}
function IS() {
  return this.firstElementChild;
}
function AS(e) {
  return this.select(e == null ? IS : TS(typeof e == "function" ? e : ry(e)));
}
var LS = Array.prototype.filter;
function $S() {
  return Array.from(this.children);
}
function PS(e) {
  return function() {
    return LS.call(this.children, e);
  };
}
function OS(e) {
  return this.selectAll(e == null ? $S : PS(typeof e == "function" ? e : ry(e)));
}
function DS(e) {
  typeof e != "function" && (e = ny(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], o = s.length, l = r[i] = [], a, u = 0; u < o; ++u)
      (a = s[u]) && e.call(a, a.__data__, u, s) && l.push(a);
  return new nt(r, this._parents);
}
function iy(e) {
  return new Array(e.length);
}
function jS() {
  return new nt(this._enter || this._groups.map(iy), this._parents);
}
function wl(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
wl.prototype = {
  constructor: wl,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function RS(e) {
  return function() {
    return e;
  };
}
function zS(e, t, n, r, i, s) {
  for (var o = 0, l, a = t.length, u = s.length; o < u; ++o)
    (l = t[o]) ? (l.__data__ = s[o], r[o] = l) : n[o] = new wl(e, s[o]);
  for (; o < a; ++o)
    (l = t[o]) && (i[o] = l);
}
function BS(e, t, n, r, i, s, o) {
  var l, a, u = /* @__PURE__ */ new Map(), d = t.length, c = s.length, f = new Array(d), p;
  for (l = 0; l < d; ++l)
    (a = t[l]) && (f[l] = p = o.call(a, a.__data__, l, t) + "", u.has(p) ? i[l] = a : u.set(p, a));
  for (l = 0; l < c; ++l)
    p = o.call(e, s[l], l, s) + "", (a = u.get(p)) ? (r[l] = a, a.__data__ = s[l], u.delete(p)) : n[l] = new wl(e, s[l]);
  for (l = 0; l < d; ++l)
    (a = t[l]) && u.get(f[l]) === a && (i[l] = a);
}
function FS(e) {
  return e.__data__;
}
function VS(e, t) {
  if (!arguments.length) return Array.from(this, FS);
  var n = t ? BS : zS, r = this._parents, i = this._groups;
  typeof e != "function" && (e = RS(e));
  for (var s = i.length, o = new Array(s), l = new Array(s), a = new Array(s), u = 0; u < s; ++u) {
    var d = r[u], c = i[u], f = c.length, p = HS(e.call(d, d && d.__data__, u, r)), y = p.length, v = l[u] = new Array(y), w = o[u] = new Array(y), h = a[u] = new Array(f);
    n(d, c, v, w, h, p, t);
    for (var m = 0, g = 0, x, S; m < y; ++m)
      if (x = v[m]) {
        for (m >= g && (g = m + 1); !(S = w[g]) && ++g < y; ) ;
        x._next = S || null;
      }
  }
  return o = new nt(o, r), o._enter = l, o._exit = a, o;
}
function HS(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function US() {
  return new nt(this._exit || this._groups.map(iy), this._parents);
}
function KS(e, t, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function WS(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, s = r.length, o = Math.min(i, s), l = new Array(i), a = 0; a < o; ++a)
    for (var u = n[a], d = r[a], c = u.length, f = l[a] = new Array(c), p, y = 0; y < c; ++y)
      (p = u[y] || d[y]) && (f[y] = p);
  for (; a < i; ++a)
    l[a] = n[a];
  return new nt(l, this._parents);
}
function YS() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, s = r[i], o; --i >= 0; )
      (o = r[i]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function XS(e) {
  e || (e = QS);
  function t(c, f) {
    return c && f ? e(c.__data__, f.__data__) : !c - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var o = n[s], l = o.length, a = i[s] = new Array(l), u, d = 0; d < l; ++d)
      (u = o[d]) && (a[d] = u);
    a.sort(t);
  }
  return new nt(i, this._parents).order();
}
function QS(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function qS() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function GS() {
  return Array.from(this);
}
function JS() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length; i < s; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function ZS() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function ek() {
  return !this.node();
}
function tk(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], s = 0, o = i.length, l; s < o; ++s)
      (l = i[s]) && e.call(l, l.__data__, s, i);
  return this;
}
function nk(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function rk(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ik(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function sk(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ok(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function lk(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ak(e, t) {
  var n = ql(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? rk : nk : typeof t == "function" ? n.local ? lk : ok : n.local ? sk : ik)(n, t));
}
function sy(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function uk(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ck(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function fk(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function dk(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? uk : typeof t == "function" ? fk : ck)(e, t, n ?? "")) : ei(this.node(), e);
}
function ei(e, t) {
  return e.style.getPropertyValue(t) || sy(e).getComputedStyle(e, null).getPropertyValue(t);
}
function hk(e) {
  return function() {
    delete this[e];
  };
}
function pk(e, t) {
  return function() {
    this[e] = t;
  };
}
function gk(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function mk(e, t) {
  return arguments.length > 1 ? this.each((t == null ? hk : typeof t == "function" ? gk : pk)(e, t)) : this.node()[e];
}
function oy(e) {
  return e.trim().split(/^|\s+/);
}
function kf(e) {
  return e.classList || new ly(e);
}
function ly(e) {
  this._node = e, this._names = oy(e.getAttribute("class") || "");
}
ly.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function ay(e, t) {
  for (var n = kf(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function uy(e, t) {
  for (var n = kf(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function yk(e) {
  return function() {
    ay(this, e);
  };
}
function vk(e) {
  return function() {
    uy(this, e);
  };
}
function wk(e, t) {
  return function() {
    (t.apply(this, arguments) ? ay : uy)(this, e);
  };
}
function xk(e, t) {
  var n = oy(e + "");
  if (arguments.length < 2) {
    for (var r = kf(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? wk : t ? yk : vk)(n, t));
}
function Sk() {
  this.textContent = "";
}
function kk(e) {
  return function() {
    this.textContent = e;
  };
}
function Ek(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function _k(e) {
  return arguments.length ? this.each(e == null ? Sk : (typeof e == "function" ? Ek : kk)(e)) : this.node().textContent;
}
function Nk() {
  this.innerHTML = "";
}
function Ck(e) {
  return function() {
    this.innerHTML = e;
  };
}
function bk(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Mk(e) {
  return arguments.length ? this.each(e == null ? Nk : (typeof e == "function" ? bk : Ck)(e)) : this.node().innerHTML;
}
function Tk() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ik() {
  return this.each(Tk);
}
function Ak() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Lk() {
  return this.each(Ak);
}
function $k(e) {
  var t = typeof e == "function" ? e : ey(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Pk() {
  return null;
}
function Ok(e, t) {
  var n = typeof e == "function" ? e : ey(e), r = t == null ? Pk : typeof t == "function" ? t : Sf(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Dk() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function jk() {
  return this.each(Dk);
}
function Rk() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function zk() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Bk(e) {
  return this.select(e ? zk : Rk);
}
function Fk(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Vk(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Hk(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Uk(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, s; n < i; ++n)
        s = t[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : t[++r] = s;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Kk(e, t, n) {
  return function() {
    var r = this.__on, i, s = Vk(t);
    if (r) {
      for (var o = 0, l = r.length; o < l; ++o)
        if ((i = r[o]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, s, n), i = { type: e.type, name: e.name, value: t, listener: s, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Wk(e, t, n) {
  var r = Hk(e + ""), i, s = r.length, o;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var a = 0, u = l.length, d; a < u; ++a)
        for (i = 0, d = l[a]; i < s; ++i)
          if ((o = r[i]).type === d.type && o.name === d.name)
            return d.value;
    }
    return;
  }
  for (l = t ? Kk : Uk, i = 0; i < s; ++i) this.each(l(r[i], t, n));
  return this;
}
function cy(e, t, n) {
  var r = sy(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Yk(e, t) {
  return function() {
    return cy(this, e, t);
  };
}
function Xk(e, t) {
  return function() {
    return cy(this, e, t.apply(this, arguments));
  };
}
function Qk(e, t) {
  return this.each((typeof t == "function" ? Xk : Yk)(e, t));
}
function* qk() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length, o; i < s; ++i)
      (o = r[i]) && (yield o);
}
var fy = [null];
function nt(e, t) {
  this._groups = e, this._parents = t;
}
function Os() {
  return new nt([[document.documentElement]], fy);
}
function Gk() {
  return this;
}
nt.prototype = Os.prototype = {
  constructor: nt,
  select: ES,
  selectAll: bS,
  selectChild: AS,
  selectChildren: OS,
  filter: DS,
  data: VS,
  enter: jS,
  exit: US,
  join: KS,
  merge: WS,
  selection: Gk,
  order: YS,
  sort: XS,
  call: qS,
  nodes: GS,
  node: JS,
  size: ZS,
  empty: ek,
  each: tk,
  attr: ak,
  style: dk,
  property: mk,
  classed: xk,
  text: _k,
  html: Mk,
  raise: Ik,
  lower: Lk,
  append: $k,
  insert: Ok,
  remove: jk,
  clone: Bk,
  datum: Fk,
  on: Wk,
  dispatch: Qk,
  [Symbol.iterator]: qk
};
function Je(e) {
  return typeof e == "string" ? new nt([[document.querySelector(e)]], [document.documentElement]) : new nt([[e]], fy);
}
function Jk(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function xt(e, t) {
  if (e = Jk(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Zk = { passive: !1 }, ys = { capture: !0, passive: !1 };
function Xa(e) {
  e.stopImmediatePropagation();
}
function Hr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function dy(e) {
  var t = e.document.documentElement, n = Je(e).on("dragstart.drag", Hr, ys);
  "onselectstart" in t ? n.on("selectstart.drag", Hr, ys) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function hy(e, t) {
  var n = e.document.documentElement, r = Je(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Hr, ys), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const co = (e) => () => e;
function oc(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: i,
  active: s,
  x: o,
  y: l,
  dx: a,
  dy: u,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: s, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: l, enumerable: !0, configurable: !0 },
    dx: { value: a, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
oc.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function eE(e) {
  return !e.ctrlKey && !e.button;
}
function tE() {
  return this.parentNode;
}
function nE(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function rE() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function py() {
  var e = eE, t = tE, n = nE, r = rE, i = {}, s = Ql("start", "drag", "end"), o = 0, l, a, u, d, c = 0;
  function f(x) {
    x.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", h, Zk).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(x, S) {
    if (!(d || !e.call(this, x, S))) {
      var k = g(this, t.call(this, x, S), x, S, "mouse");
      k && (Je(x.view).on("mousemove.drag", y, ys).on("mouseup.drag", v, ys), dy(x.view), Xa(x), u = !1, l = x.clientX, a = x.clientY, k("start", x));
    }
  }
  function y(x) {
    if (Hr(x), !u) {
      var S = x.clientX - l, k = x.clientY - a;
      u = S * S + k * k > c;
    }
    i.mouse("drag", x);
  }
  function v(x) {
    Je(x.view).on("mousemove.drag mouseup.drag", null), hy(x.view, u), Hr(x), i.mouse("end", x);
  }
  function w(x, S) {
    if (e.call(this, x, S)) {
      var k = x.changedTouches, E = t.call(this, x, S), _ = k.length, M, $;
      for (M = 0; M < _; ++M)
        ($ = g(this, E, x, S, k[M].identifier, k[M])) && (Xa(x), $("start", x, k[M]));
    }
  }
  function h(x) {
    var S = x.changedTouches, k = S.length, E, _;
    for (E = 0; E < k; ++E)
      (_ = i[S[E].identifier]) && (Hr(x), _("drag", x, S[E]));
  }
  function m(x) {
    var S = x.changedTouches, k = S.length, E, _;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), E = 0; E < k; ++E)
      (_ = i[S[E].identifier]) && (Xa(x), _("end", x, S[E]));
  }
  function g(x, S, k, E, _, M) {
    var $ = s.copy(), C = xt(M || k, S), P, B, N;
    if ((N = n.call(x, new oc("beforestart", {
      sourceEvent: k,
      target: f,
      identifier: _,
      active: o,
      x: C[0],
      y: C[1],
      dx: 0,
      dy: 0,
      dispatch: $
    }), E)) != null)
      return P = N.x - C[0] || 0, B = N.y - C[1] || 0, function A(b, D, T) {
        var I = C, z;
        switch (b) {
          case "start":
            i[_] = A, z = o++;
            break;
          case "end":
            delete i[_], --o;
          case "drag":
            C = xt(T || D, S), z = o;
            break;
        }
        $.call(
          b,
          x,
          new oc(b, {
            sourceEvent: D,
            subject: N,
            target: f,
            identifier: _,
            active: z,
            x: C[0] + P,
            y: C[1] + B,
            dx: C[0] - I[0],
            dy: C[1] - I[1],
            dispatch: $
          }),
          E
        );
      };
  }
  return f.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : co(!!x), f) : e;
  }, f.container = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : co(x), f) : t;
  }, f.subject = function(x) {
    return arguments.length ? (n = typeof x == "function" ? x : co(x), f) : n;
  }, f.touchable = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : co(!!x), f) : r;
  }, f.on = function() {
    var x = s.on.apply(s, arguments);
    return x === s ? f : x;
  }, f.clickDistance = function(x) {
    return arguments.length ? (c = (x = +x) * x, f) : Math.sqrt(c);
  }, f;
}
function Ef(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function gy(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ds() {
}
var vs = 0.7, xl = 1 / vs, Ur = "\\s*([+-]?\\d+)\\s*", ws = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", iE = /^#([0-9a-f]{3,8})$/, sE = new RegExp(`^rgb\\(${Ur},${Ur},${Ur}\\)$`), oE = new RegExp(`^rgb\\(${zt},${zt},${zt}\\)$`), lE = new RegExp(`^rgba\\(${Ur},${Ur},${Ur},${ws}\\)$`), aE = new RegExp(`^rgba\\(${zt},${zt},${zt},${ws}\\)$`), uE = new RegExp(`^hsl\\(${ws},${zt},${zt}\\)$`), cE = new RegExp(`^hsla\\(${ws},${zt},${zt},${ws}\\)$`), wh = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ef(Ds, sr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: xh,
  // Deprecated! Use color.formatHex.
  formatHex: xh,
  formatHex8: fE,
  formatHsl: dE,
  formatRgb: Sh,
  toString: Sh
});
function xh() {
  return this.rgb().formatHex();
}
function fE() {
  return this.rgb().formatHex8();
}
function dE() {
  return my(this).formatHsl();
}
function Sh() {
  return this.rgb().formatRgb();
}
function sr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = iE.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? kh(t) : n === 3 ? new We(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? fo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? fo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = sE.exec(e)) ? new We(t[1], t[2], t[3], 1) : (t = oE.exec(e)) ? new We(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = lE.exec(e)) ? fo(t[1], t[2], t[3], t[4]) : (t = aE.exec(e)) ? fo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = uE.exec(e)) ? Nh(t[1], t[2] / 100, t[3] / 100, 1) : (t = cE.exec(e)) ? Nh(t[1], t[2] / 100, t[3] / 100, t[4]) : wh.hasOwnProperty(e) ? kh(wh[e]) : e === "transparent" ? new We(NaN, NaN, NaN, 0) : null;
}
function kh(e) {
  return new We(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function fo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new We(e, t, n, r);
}
function hE(e) {
  return e instanceof Ds || (e = sr(e)), e ? (e = e.rgb(), new We(e.r, e.g, e.b, e.opacity)) : new We();
}
function lc(e, t, n, r) {
  return arguments.length === 1 ? hE(e) : new We(e, t, n, r ?? 1);
}
function We(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ef(We, lc, gy(Ds, {
  brighter(e) {
    return e = e == null ? xl : Math.pow(xl, e), new We(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? vs : Math.pow(vs, e), new We(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new We(Jn(this.r), Jn(this.g), Jn(this.b), Sl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Eh,
  // Deprecated! Use color.formatHex.
  formatHex: Eh,
  formatHex8: pE,
  formatRgb: _h,
  toString: _h
}));
function Eh() {
  return `#${Wn(this.r)}${Wn(this.g)}${Wn(this.b)}`;
}
function pE() {
  return `#${Wn(this.r)}${Wn(this.g)}${Wn(this.b)}${Wn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _h() {
  const e = Sl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Jn(this.r)}, ${Jn(this.g)}, ${Jn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Sl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Jn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Wn(e) {
  return e = Jn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Nh(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new kt(e, t, n, r);
}
function my(e) {
  if (e instanceof kt) return new kt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ds || (e = sr(e)), !e) return new kt();
  if (e instanceof kt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), o = NaN, l = s - i, a = (s + i) / 2;
  return l ? (t === s ? o = (n - r) / l + (n < r) * 6 : n === s ? o = (r - t) / l + 2 : o = (t - n) / l + 4, l /= a < 0.5 ? s + i : 2 - s - i, o *= 60) : l = a > 0 && a < 1 ? 0 : o, new kt(o, l, a, e.opacity);
}
function gE(e, t, n, r) {
  return arguments.length === 1 ? my(e) : new kt(e, t, n, r ?? 1);
}
function kt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ef(kt, gE, gy(Ds, {
  brighter(e) {
    return e = e == null ? xl : Math.pow(xl, e), new kt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? vs : Math.pow(vs, e), new kt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new We(
      Qa(e >= 240 ? e - 240 : e + 120, i, r),
      Qa(e, i, r),
      Qa(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new kt(Ch(this.h), ho(this.s), ho(this.l), Sl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Sl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ch(this.h)}, ${ho(this.s) * 100}%, ${ho(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ch(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ho(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Qa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const _f = (e) => () => e;
function mE(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function yE(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function vE(e) {
  return (e = +e) == 1 ? yy : function(t, n) {
    return n - t ? yE(t, n, e) : _f(isNaN(t) ? n : t);
  };
}
function yy(e, t) {
  var n = t - e;
  return n ? mE(e, n) : _f(isNaN(e) ? t : e);
}
const kl = function e(t) {
  var n = vE(t);
  function r(i, s) {
    var o = n((i = lc(i)).r, (s = lc(s)).r), l = n(i.g, s.g), a = n(i.b, s.b), u = yy(i.opacity, s.opacity);
    return function(d) {
      return i.r = o(d), i.g = l(d), i.b = a(d), i.opacity = u(d), i + "";
    };
  }
  return r.gamma = e, r;
}(1);
function wE(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - s) + t[i] * s;
    return r;
  };
}
function xE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function SE(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = new Array(r), s = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = Qi(e[o], t[o]);
  for (; o < n; ++o) s[o] = t[o];
  return function(l) {
    for (o = 0; o < r; ++o) s[o] = i[o](l);
    return s;
  };
}
function kE(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Ot(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function EE(e, t) {
  var n = {}, r = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Qi(e[i], t[i]) : r[i] = t[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var ac = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, qa = new RegExp(ac.source, "g");
function _E(e) {
  return function() {
    return e;
  };
}
function NE(e) {
  return function(t) {
    return e(t) + "";
  };
}
function vy(e, t) {
  var n = ac.lastIndex = qa.lastIndex = 0, r, i, s, o = -1, l = [], a = [];
  for (e = e + "", t = t + ""; (r = ac.exec(e)) && (i = qa.exec(t)); )
    (s = i.index) > n && (s = t.slice(n, s), l[o] ? l[o] += s : l[++o] = s), (r = r[0]) === (i = i[0]) ? l[o] ? l[o] += i : l[++o] = i : (l[++o] = null, a.push({ i: o, x: Ot(r, i) })), n = qa.lastIndex;
  return n < t.length && (s = t.slice(n), l[o] ? l[o] += s : l[++o] = s), l.length < 2 ? a[0] ? NE(a[0].x) : _E(t) : (t = a.length, function(u) {
    for (var d = 0, c; d < t; ++d) l[(c = a[d]).i] = c.x(u);
    return l.join("");
  });
}
function Qi(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? _f(t) : (n === "number" ? Ot : n === "string" ? (r = sr(t)) ? (t = r, kl) : vy : t instanceof sr ? kl : t instanceof Date ? kE : xE(t) ? wE : Array.isArray(t) ? SE : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? EE : Ot)(e, t);
}
var bh = 180 / Math.PI, uc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function wy(e, t, n, r, i, s) {
  var o, l, a;
  return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (a = e * n + t * r) && (n -= e * a, r -= t * a), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, a /= l), e * r < t * n && (e = -e, t = -t, a = -a, o = -o), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(t, e) * bh,
    skewX: Math.atan(a) * bh,
    scaleX: o,
    scaleY: l
  };
}
var po;
function CE(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? uc : wy(t.a, t.b, t.c, t.d, t.e, t.f);
}
function bE(e) {
  return e == null || (po || (po = document.createElementNS("http://www.w3.org/2000/svg", "g")), po.setAttribute("transform", e), !(e = po.transform.baseVal.consolidate())) ? uc : (e = e.matrix, wy(e.a, e.b, e.c, e.d, e.e, e.f));
}
function xy(e, t, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, d, c, f, p, y) {
    if (u !== c || d !== f) {
      var v = p.push("translate(", null, t, null, n);
      y.push({ i: v - 4, x: Ot(u, c) }, { i: v - 2, x: Ot(d, f) });
    } else (c || f) && p.push("translate(" + c + t + f + n);
  }
  function o(u, d, c, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: Ot(u, d) })) : d && c.push(i(c) + "rotate(" + d + r);
  }
  function l(u, d, c, f) {
    u !== d ? f.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: Ot(u, d) }) : d && c.push(i(c) + "skewX(" + d + r);
  }
  function a(u, d, c, f, p, y) {
    if (u !== c || d !== f) {
      var v = p.push(i(p) + "scale(", null, ",", null, ")");
      y.push({ i: v - 4, x: Ot(u, c) }, { i: v - 2, x: Ot(d, f) });
    } else (c !== 1 || f !== 1) && p.push(i(p) + "scale(" + c + "," + f + ")");
  }
  return function(u, d) {
    var c = [], f = [];
    return u = e(u), d = e(d), s(u.translateX, u.translateY, d.translateX, d.translateY, c, f), o(u.rotate, d.rotate, c, f), l(u.skewX, d.skewX, c, f), a(u.scaleX, u.scaleY, d.scaleX, d.scaleY, c, f), u = d = null, function(p) {
      for (var y = -1, v = f.length, w; ++y < v; ) c[(w = f[y]).i] = w.x(p);
      return c.join("");
    };
  };
}
var ME = xy(CE, "px, ", "px)", "deg)"), TE = xy(bE, ", ", ")", ")"), IE = 1e-12;
function Mh(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function AE(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function LE(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Bo = function e(t, n, r) {
  function i(s, o) {
    var l = s[0], a = s[1], u = s[2], d = o[0], c = o[1], f = o[2], p = d - l, y = c - a, v = p * p + y * y, w, h;
    if (v < IE)
      h = Math.log(f / u) / t, w = function(E) {
        return [
          l + E * p,
          a + E * y,
          u * Math.exp(t * E * h)
        ];
      };
    else {
      var m = Math.sqrt(v), g = (f * f - u * u + r * v) / (2 * u * n * m), x = (f * f - u * u - r * v) / (2 * f * n * m), S = Math.log(Math.sqrt(g * g + 1) - g), k = Math.log(Math.sqrt(x * x + 1) - x);
      h = (k - S) / t, w = function(E) {
        var _ = E * h, M = Mh(S), $ = u / (n * m) * (M * LE(t * _ + S) - AE(S));
        return [
          l + $ * p,
          a + $ * y,
          u * M / Mh(t * _ + S)
        ];
      };
    }
    return w.duration = h * 1e3 * t / Math.SQRT2, w;
  }
  return i.rho = function(s) {
    var o = Math.max(1e-3, +s), l = o * o, a = l * l;
    return e(o, l, a);
  }, i;
}(Math.SQRT2, 2, 4);
var ti = 0, Oi = 0, bi = 0, Sy = 1e3, El, Di, _l = 0, or = 0, Gl = 0, xs = typeof performance == "object" && performance.now ? performance : Date, ky = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Nf() {
  return or || (ky($E), or = xs.now() + Gl);
}
function $E() {
  or = 0;
}
function Nl() {
  this._call = this._time = this._next = null;
}
Nl.prototype = Ey.prototype = {
  constructor: Nl,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Nf() : +n) + (t == null ? 0 : +t), !this._next && Di !== this && (Di ? Di._next = this : El = this, Di = this), this._call = e, this._time = n, cc();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, cc());
  }
};
function Ey(e, t, n) {
  var r = new Nl();
  return r.restart(e, t, n), r;
}
function PE() {
  Nf(), ++ti;
  for (var e = El, t; e; )
    (t = or - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ti;
}
function Th() {
  or = (_l = xs.now()) + Gl, ti = Oi = 0;
  try {
    PE();
  } finally {
    ti = 0, DE(), or = 0;
  }
}
function OE() {
  var e = xs.now(), t = e - _l;
  t > Sy && (Gl -= t, _l = e);
}
function DE() {
  for (var e, t = El, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : El = n);
  Di = e, cc(r);
}
function cc(e) {
  if (!ti) {
    Oi && (Oi = clearTimeout(Oi));
    var t = e - or;
    t > 24 ? (e < 1 / 0 && (Oi = setTimeout(Th, e - xs.now() - Gl)), bi && (bi = clearInterval(bi))) : (bi || (_l = xs.now(), bi = setInterval(OE, Sy)), ti = 1, ky(Th));
  }
}
function Ih(e, t, n) {
  var r = new Nl();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var jE = Ql("start", "end", "cancel", "interrupt"), RE = [], _y = 0, Ah = 1, fc = 2, Fo = 3, Lh = 4, dc = 5, Vo = 6;
function Jl(e, t, n, r, i, s) {
  var o = e.__transition;
  if (!o) e.__transition = {};
  else if (n in o) return;
  zE(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: jE,
    tween: RE,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: _y
  });
}
function Cf(e, t) {
  var n = Tt(e, t);
  if (n.state > _y) throw new Error("too late; already scheduled");
  return n;
}
function Ft(e, t) {
  var n = Tt(e, t);
  if (n.state > Fo) throw new Error("too late; already running");
  return n;
}
function Tt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function zE(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = Ey(s, 0, n.time);
  function s(u) {
    n.state = Ah, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var d, c, f, p;
    if (n.state !== Ah) return a();
    for (d in r)
      if (p = r[d], p.name === n.name) {
        if (p.state === Fo) return Ih(o);
        p.state === Lh ? (p.state = Vo, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[d]) : +d < t && (p.state = Vo, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[d]);
      }
    if (Ih(function() {
      n.state === Fo && (n.state = Lh, n.timer.restart(l, n.delay, n.time), l(u));
    }), n.state = fc, n.on.call("start", e, e.__data__, n.index, n.group), n.state === fc) {
      for (n.state = Fo, i = new Array(f = n.tween.length), d = 0, c = -1; d < f; ++d)
        (p = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (i[++c] = p);
      i.length = c + 1;
    }
  }
  function l(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(a), n.state = dc, 1), c = -1, f = i.length; ++c < f; )
      i[c].call(e, d);
    n.state === dc && (n.on.call("end", e, e.__data__, n.index, n.group), a());
  }
  function a() {
    n.state = Vo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Ho(e, t) {
  var n = e.__transition, r, i, s = !0, o;
  if (n) {
    t = t == null ? null : t + "";
    for (o in n) {
      if ((r = n[o]).name !== t) {
        s = !1;
        continue;
      }
      i = r.state > fc && r.state < dc, r.state = Vo, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
    }
    s && delete e.__transition;
  }
}
function BE(e) {
  return this.each(function() {
    Ho(this, e);
  });
}
function FE(e, t) {
  var n, r;
  return function() {
    var i = Ft(this, e), s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var o = 0, l = r.length; o < l; ++o)
        if (r[o].name === t) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function VE(e, t, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Ft(this, e), o = s.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var l = { name: t, value: n }, a = 0, u = i.length; a < u; ++a)
        if (i[a].name === t) {
          i[a] = l;
          break;
        }
      a === u && i.push(l);
    }
    s.tween = i;
  };
}
function HE(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Tt(this.node(), n).tween, i = 0, s = r.length, o; i < s; ++i)
      if ((o = r[i]).name === e)
        return o.value;
    return null;
  }
  return this.each((t == null ? FE : VE)(n, e, t));
}
function bf(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = Ft(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return Tt(i, r).value[t];
  };
}
function Ny(e, t) {
  var n;
  return (typeof t == "number" ? Ot : t instanceof sr ? kl : (n = sr(t)) ? (t = n, kl) : vy)(e, t);
}
function UE(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function KE(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function WE(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var o = this.getAttribute(e);
    return o === i ? null : o === r ? s : s = t(r = o, n);
  };
}
function YE(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var o = this.getAttributeNS(e.space, e.local);
    return o === i ? null : o === r ? s : s = t(r = o, n);
  };
}
function XE(e, t, n) {
  var r, i, s;
  return function() {
    var o, l = n(this), a;
    return l == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), a = l + "", o === a ? null : o === r && a === i ? s : (i = a, s = t(r = o, l)));
  };
}
function QE(e, t, n) {
  var r, i, s;
  return function() {
    var o, l = n(this), a;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), a = l + "", o === a ? null : o === r && a === i ? s : (i = a, s = t(r = o, l)));
  };
}
function qE(e, t) {
  var n = ql(e), r = n === "transform" ? TE : Ny;
  return this.attrTween(e, typeof t == "function" ? (n.local ? QE : XE)(n, r, bf(this, "attr." + e, t)) : t == null ? (n.local ? KE : UE)(n) : (n.local ? YE : WE)(n, r, t));
}
function GE(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function JE(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function ZE(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && JE(e, s)), n;
  }
  return i._value = t, i;
}
function e_(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && GE(e, s)), n;
  }
  return i._value = t, i;
}
function t_(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ql(e);
  return this.tween(n, (r.local ? ZE : e_)(r, t));
}
function n_(e, t) {
  return function() {
    Cf(this, e).delay = +t.apply(this, arguments);
  };
}
function r_(e, t) {
  return t = +t, function() {
    Cf(this, e).delay = t;
  };
}
function i_(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? n_ : r_)(t, e)) : Tt(this.node(), t).delay;
}
function s_(e, t) {
  return function() {
    Ft(this, e).duration = +t.apply(this, arguments);
  };
}
function o_(e, t) {
  return t = +t, function() {
    Ft(this, e).duration = t;
  };
}
function l_(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? s_ : o_)(t, e)) : Tt(this.node(), t).duration;
}
function a_(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Ft(this, e).ease = t;
  };
}
function u_(e) {
  var t = this._id;
  return arguments.length ? this.each(a_(t, e)) : Tt(this.node(), t).ease;
}
function c_(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Ft(this, e).ease = n;
  };
}
function f_(e) {
  if (typeof e != "function") throw new Error();
  return this.each(c_(this._id, e));
}
function d_(e) {
  typeof e != "function" && (e = ny(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], o = s.length, l = r[i] = [], a, u = 0; u < o; ++u)
      (a = s[u]) && e.call(a, a.__data__, u, s) && l.push(a);
  return new sn(r, this._parents, this._name, this._id);
}
function h_(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, s = Math.min(r, i), o = new Array(r), l = 0; l < s; ++l)
    for (var a = t[l], u = n[l], d = a.length, c = o[l] = new Array(d), f, p = 0; p < d; ++p)
      (f = a[p] || u[p]) && (c[p] = f);
  for (; l < r; ++l)
    o[l] = t[l];
  return new sn(o, this._parents, this._name, this._id);
}
function p_(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function g_(e, t, n) {
  var r, i, s = p_(t) ? Cf : Ft;
  return function() {
    var o = s(this, e), l = o.on;
    l !== r && (i = (r = l).copy()).on(t, n), o.on = i;
  };
}
function m_(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Tt(this.node(), n).on.on(e) : this.each(g_(n, e, t));
}
function y_(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function v_() {
  return this.on("end.remove", y_(this._id));
}
function w_(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Sf(e));
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o)
    for (var l = r[o], a = l.length, u = s[o] = new Array(a), d, c, f = 0; f < a; ++f)
      (d = l[f]) && (c = e.call(d, d.__data__, f, l)) && ("__data__" in d && (c.__data__ = d.__data__), u[f] = c, Jl(u[f], t, n, f, u, Tt(d, n)));
  return new sn(s, this._parents, t, n);
}
function x_(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ty(e));
  for (var r = this._groups, i = r.length, s = [], o = [], l = 0; l < i; ++l)
    for (var a = r[l], u = a.length, d, c = 0; c < u; ++c)
      if (d = a[c]) {
        for (var f = e.call(d, d.__data__, c, a), p, y = Tt(d, n), v = 0, w = f.length; v < w; ++v)
          (p = f[v]) && Jl(p, t, n, v, f, y);
        s.push(f), o.push(d);
      }
  return new sn(s, o, t, n);
}
var S_ = Os.prototype.constructor;
function k_() {
  return new S_(this._groups, this._parents);
}
function E_(e, t) {
  var n, r, i;
  return function() {
    var s = ei(this, e), o = (this.style.removeProperty(e), ei(this, e));
    return s === o ? null : s === n && o === r ? i : i = t(n = s, r = o);
  };
}
function Cy(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function __(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var o = ei(this, e);
    return o === i ? null : o === r ? s : s = t(r = o, n);
  };
}
function N_(e, t, n) {
  var r, i, s;
  return function() {
    var o = ei(this, e), l = n(this), a = l + "";
    return l == null && (a = l = (this.style.removeProperty(e), ei(this, e))), o === a ? null : o === r && a === i ? s : (i = a, s = t(r = o, l));
  };
}
function C_(e, t) {
  var n, r, i, s = "style." + t, o = "end." + s, l;
  return function() {
    var a = Ft(this, e), u = a.on, d = a.value[s] == null ? l || (l = Cy(t)) : void 0;
    (u !== n || i !== d) && (r = (n = u).copy()).on(o, i = d), a.on = r;
  };
}
function b_(e, t, n) {
  var r = (e += "") == "transform" ? ME : Ny;
  return t == null ? this.styleTween(e, E_(e, r)).on("end.style." + e, Cy(e)) : typeof t == "function" ? this.styleTween(e, N_(e, r, bf(this, "style." + e, t))).each(C_(this._id, e)) : this.styleTween(e, __(e, r, t), n).on("end.style." + e, null);
}
function M_(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function T_(e, t, n) {
  var r, i;
  function s() {
    var o = t.apply(this, arguments);
    return o !== i && (r = (i = o) && M_(e, o, n)), r;
  }
  return s._value = t, s;
}
function I_(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, T_(e, t, n ?? ""));
}
function A_(e) {
  return function() {
    this.textContent = e;
  };
}
function L_(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function $_(e) {
  return this.tween("text", typeof e == "function" ? L_(bf(this, "text", e)) : A_(e == null ? "" : e + ""));
}
function P_(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function O_(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && P_(i)), t;
  }
  return r._value = e, r;
}
function D_(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, O_(e));
}
function j_() {
  for (var e = this._name, t = this._id, n = by(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], l = o.length, a, u = 0; u < l; ++u)
      if (a = o[u]) {
        var d = Tt(a, t);
        Jl(a, e, n, u, o, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new sn(r, this._parents, e, n);
}
function R_() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(s, o) {
    var l = { value: o }, a = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Ft(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(a)), u.on = t;
    }), i === 0 && s();
  });
}
var z_ = 0;
function sn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function by() {
  return ++z_;
}
var Kt = Os.prototype;
sn.prototype = {
  constructor: sn,
  select: w_,
  selectAll: x_,
  selectChild: Kt.selectChild,
  selectChildren: Kt.selectChildren,
  filter: d_,
  merge: h_,
  selection: k_,
  transition: j_,
  call: Kt.call,
  nodes: Kt.nodes,
  node: Kt.node,
  size: Kt.size,
  empty: Kt.empty,
  each: Kt.each,
  on: m_,
  attr: qE,
  attrTween: t_,
  style: b_,
  styleTween: I_,
  text: $_,
  textTween: D_,
  remove: v_,
  tween: HE,
  delay: i_,
  duration: l_,
  ease: u_,
  easeVarying: f_,
  end: R_,
  [Symbol.iterator]: Kt[Symbol.iterator]
};
function B_(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var F_ = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: B_
};
function V_(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function H_(e) {
  var t, n;
  e instanceof sn ? (t = e._id, e = e._name) : (t = by(), (n = F_).time = Nf(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], l = o.length, a, u = 0; u < l; ++u)
      (a = o[u]) && Jl(a, e, t, u, o, n || V_(a, t));
  return new sn(r, this._parents, e, t);
}
Os.prototype.interrupt = BE;
Os.prototype.transition = H_;
const go = (e) => () => e;
function U_(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function qt(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
qt.prototype = {
  constructor: qt,
  scale: function(e) {
    return e === 1 ? this : new qt(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new qt(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Zl = new qt(1, 0, 0);
My.prototype = qt.prototype;
function My(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Zl;
  return e.__zoom;
}
function Ga(e) {
  e.stopImmediatePropagation();
}
function Mi(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function K_(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function W_() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function $h() {
  return this.__zoom || Zl;
}
function Y_(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function X_() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Q_(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], s = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    o > s ? (s + o) / 2 : Math.min(0, s) || Math.max(0, o)
  );
}
function Ty() {
  var e = K_, t = W_, n = Q_, r = Y_, i = X_, s = [0, 1 / 0], o = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, a = Bo, u = Ql("start", "zoom", "end"), d, c, f, p = 500, y = 150, v = 0, w = 10;
  function h(N) {
    N.property("__zoom", $h).on("wheel.zoom", _, { passive: !1 }).on("mousedown.zoom", M).on("dblclick.zoom", $).filter(i).on("touchstart.zoom", C).on("touchmove.zoom", P).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  h.transform = function(N, A, b, D) {
    var T = N.selection ? N.selection() : N;
    T.property("__zoom", $h), N !== T ? S(N, A, b, D) : T.interrupt().each(function() {
      k(this, arguments).event(D).start().zoom(null, typeof A == "function" ? A.apply(this, arguments) : A).end();
    });
  }, h.scaleBy = function(N, A, b, D) {
    h.scaleTo(N, function() {
      var T = this.__zoom.k, I = typeof A == "function" ? A.apply(this, arguments) : A;
      return T * I;
    }, b, D);
  }, h.scaleTo = function(N, A, b, D) {
    h.transform(N, function() {
      var T = t.apply(this, arguments), I = this.__zoom, z = b == null ? x(T) : typeof b == "function" ? b.apply(this, arguments) : b, j = I.invert(z), R = typeof A == "function" ? A.apply(this, arguments) : A;
      return n(g(m(I, R), z, j), T, o);
    }, b, D);
  }, h.translateBy = function(N, A, b, D) {
    h.transform(N, function() {
      return n(this.__zoom.translate(
        typeof A == "function" ? A.apply(this, arguments) : A,
        typeof b == "function" ? b.apply(this, arguments) : b
      ), t.apply(this, arguments), o);
    }, null, D);
  }, h.translateTo = function(N, A, b, D, T) {
    h.transform(N, function() {
      var I = t.apply(this, arguments), z = this.__zoom, j = D == null ? x(I) : typeof D == "function" ? D.apply(this, arguments) : D;
      return n(Zl.translate(j[0], j[1]).scale(z.k).translate(
        typeof A == "function" ? -A.apply(this, arguments) : -A,
        typeof b == "function" ? -b.apply(this, arguments) : -b
      ), I, o);
    }, D, T);
  };
  function m(N, A) {
    return A = Math.max(s[0], Math.min(s[1], A)), A === N.k ? N : new qt(A, N.x, N.y);
  }
  function g(N, A, b) {
    var D = A[0] - b[0] * N.k, T = A[1] - b[1] * N.k;
    return D === N.x && T === N.y ? N : new qt(N.k, D, T);
  }
  function x(N) {
    return [(+N[0][0] + +N[1][0]) / 2, (+N[0][1] + +N[1][1]) / 2];
  }
  function S(N, A, b, D) {
    N.on("start.zoom", function() {
      k(this, arguments).event(D).start();
    }).on("interrupt.zoom end.zoom", function() {
      k(this, arguments).event(D).end();
    }).tween("zoom", function() {
      var T = this, I = arguments, z = k(T, I).event(D), j = t.apply(T, I), R = b == null ? x(j) : typeof b == "function" ? b.apply(T, I) : b, H = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), U = T.__zoom, Y = typeof A == "function" ? A.apply(T, I) : A, J = a(U.invert(R).concat(H / U.k), Y.invert(R).concat(H / Y.k));
      return function(Q) {
        if (Q === 1) Q = Y;
        else {
          var F = J(Q), K = H / F[2];
          Q = new qt(K, R[0] - F[0] * K, R[1] - F[1] * K);
        }
        z.zoom(null, Q);
      };
    });
  }
  function k(N, A, b) {
    return !b && N.__zooming || new E(N, A);
  }
  function E(N, A) {
    this.that = N, this.args = A, this.active = 0, this.sourceEvent = null, this.extent = t.apply(N, A), this.taps = 0;
  }
  E.prototype = {
    event: function(N) {
      return N && (this.sourceEvent = N), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(N, A) {
      return this.mouse && N !== "mouse" && (this.mouse[1] = A.invert(this.mouse[0])), this.touch0 && N !== "touch" && (this.touch0[1] = A.invert(this.touch0[0])), this.touch1 && N !== "touch" && (this.touch1[1] = A.invert(this.touch1[0])), this.that.__zoom = A, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(N) {
      var A = Je(this.that).datum();
      u.call(
        N,
        this.that,
        new U_(N, {
          sourceEvent: this.sourceEvent,
          target: h,
          transform: this.that.__zoom,
          dispatch: u
        }),
        A
      );
    }
  };
  function _(N, ...A) {
    if (!e.apply(this, arguments)) return;
    var b = k(this, A).event(N), D = this.__zoom, T = Math.max(s[0], Math.min(s[1], D.k * Math.pow(2, r.apply(this, arguments)))), I = xt(N);
    if (b.wheel)
      (b.mouse[0][0] !== I[0] || b.mouse[0][1] !== I[1]) && (b.mouse[1] = D.invert(b.mouse[0] = I)), clearTimeout(b.wheel);
    else {
      if (D.k === T) return;
      b.mouse = [I, D.invert(I)], Ho(this), b.start();
    }
    Mi(N), b.wheel = setTimeout(z, y), b.zoom("mouse", n(g(m(D, T), b.mouse[0], b.mouse[1]), b.extent, o));
    function z() {
      b.wheel = null, b.end();
    }
  }
  function M(N, ...A) {
    if (f || !e.apply(this, arguments)) return;
    var b = N.currentTarget, D = k(this, A, !0).event(N), T = Je(N.view).on("mousemove.zoom", R, !0).on("mouseup.zoom", H, !0), I = xt(N, b), z = N.clientX, j = N.clientY;
    dy(N.view), Ga(N), D.mouse = [I, this.__zoom.invert(I)], Ho(this), D.start();
    function R(U) {
      if (Mi(U), !D.moved) {
        var Y = U.clientX - z, J = U.clientY - j;
        D.moved = Y * Y + J * J > v;
      }
      D.event(U).zoom("mouse", n(g(D.that.__zoom, D.mouse[0] = xt(U, b), D.mouse[1]), D.extent, o));
    }
    function H(U) {
      T.on("mousemove.zoom mouseup.zoom", null), hy(U.view, D.moved), Mi(U), D.event(U).end();
    }
  }
  function $(N, ...A) {
    if (e.apply(this, arguments)) {
      var b = this.__zoom, D = xt(N.changedTouches ? N.changedTouches[0] : N, this), T = b.invert(D), I = b.k * (N.shiftKey ? 0.5 : 2), z = n(g(m(b, I), D, T), t.apply(this, A), o);
      Mi(N), l > 0 ? Je(this).transition().duration(l).call(S, z, D, N) : Je(this).call(h.transform, z, D, N);
    }
  }
  function C(N, ...A) {
    if (e.apply(this, arguments)) {
      var b = N.touches, D = b.length, T = k(this, A, N.changedTouches.length === D).event(N), I, z, j, R;
      for (Ga(N), z = 0; z < D; ++z)
        j = b[z], R = xt(j, this), R = [R, this.__zoom.invert(R), j.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== R[2] && (T.touch1 = R, T.taps = 0) : (T.touch0 = R, I = !0, T.taps = 1 + !!d);
      d && (d = clearTimeout(d)), I && (T.taps < 2 && (c = R[0], d = setTimeout(function() {
        d = null;
      }, p)), Ho(this), T.start());
    }
  }
  function P(N, ...A) {
    if (this.__zooming) {
      var b = k(this, A).event(N), D = N.changedTouches, T = D.length, I, z, j, R;
      for (Mi(N), I = 0; I < T; ++I)
        z = D[I], j = xt(z, this), b.touch0 && b.touch0[2] === z.identifier ? b.touch0[0] = j : b.touch1 && b.touch1[2] === z.identifier && (b.touch1[0] = j);
      if (z = b.that.__zoom, b.touch1) {
        var H = b.touch0[0], U = b.touch0[1], Y = b.touch1[0], J = b.touch1[1], Q = (Q = Y[0] - H[0]) * Q + (Q = Y[1] - H[1]) * Q, F = (F = J[0] - U[0]) * F + (F = J[1] - U[1]) * F;
        z = m(z, Math.sqrt(Q / F)), j = [(H[0] + Y[0]) / 2, (H[1] + Y[1]) / 2], R = [(U[0] + J[0]) / 2, (U[1] + J[1]) / 2];
      } else if (b.touch0) j = b.touch0[0], R = b.touch0[1];
      else return;
      b.zoom("touch", n(g(z, j, R), b.extent, o));
    }
  }
  function B(N, ...A) {
    if (this.__zooming) {
      var b = k(this, A).event(N), D = N.changedTouches, T = D.length, I, z;
      for (Ga(N), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, p), I = 0; I < T; ++I)
        z = D[I], b.touch0 && b.touch0[2] === z.identifier ? delete b.touch0 : b.touch1 && b.touch1[2] === z.identifier && delete b.touch1;
      if (b.touch1 && !b.touch0 && (b.touch0 = b.touch1, delete b.touch1), b.touch0) b.touch0[1] = this.__zoom.invert(b.touch0[0]);
      else if (b.end(), b.taps === 2 && (z = xt(z, this), Math.hypot(c[0] - z[0], c[1] - z[1]) < w)) {
        var j = Je(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return h.wheelDelta = function(N) {
    return arguments.length ? (r = typeof N == "function" ? N : go(+N), h) : r;
  }, h.filter = function(N) {
    return arguments.length ? (e = typeof N == "function" ? N : go(!!N), h) : e;
  }, h.touchable = function(N) {
    return arguments.length ? (i = typeof N == "function" ? N : go(!!N), h) : i;
  }, h.extent = function(N) {
    return arguments.length ? (t = typeof N == "function" ? N : go([[+N[0][0], +N[0][1]], [+N[1][0], +N[1][1]]]), h) : t;
  }, h.scaleExtent = function(N) {
    return arguments.length ? (s[0] = +N[0], s[1] = +N[1], h) : [s[0], s[1]];
  }, h.translateExtent = function(N) {
    return arguments.length ? (o[0][0] = +N[0][0], o[1][0] = +N[1][0], o[0][1] = +N[0][1], o[1][1] = +N[1][1], h) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
  }, h.constrain = function(N) {
    return arguments.length ? (n = N, h) : n;
  }, h.duration = function(N) {
    return arguments.length ? (l = +N, h) : l;
  }, h.interpolate = function(N) {
    return arguments.length ? (a = N, h) : a;
  }, h.on = function() {
    var N = u.on.apply(u, arguments);
    return N === u ? h : N;
  }, h.clickDistance = function(N) {
    return arguments.length ? (v = (N = +N) * N, h) : Math.sqrt(v);
  }, h.tapDistance = function(N) {
    return arguments.length ? (w = +N, h) : w;
  }, h;
}
const Mt = {
  error001: (e = "react") => `Seems like you have not used ${e === "svelte" ? "SvelteFlowProvider" : "ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
  error016: (e) => `Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
}, Ss = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Iy = ["Enter", " ", "Escape"], Ay = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var ni;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(ni || (ni = {}));
var Zn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Zn || (Zn = {}));
var ks;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ks || (ks = {}));
const Ly = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var mn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(mn || (mn = {}));
var Es;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Es || (Es = {}));
var X;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(X || (X = {}));
const Ph = {
  [X.Left]: X.Right,
  [X.Right]: X.Left,
  [X.Top]: X.Bottom,
  [X.Bottom]: X.Top
};
function $y(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Py = (e) => "id" in e && "source" in e && "target" in e, q_ = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Mf = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), js = (e, t = [0, 0]) => {
  const { width: n, height: r } = ln(e), i = e.origin ?? t, s = n * i[0], o = r * i[1];
  return {
    x: e.position.x - s,
    y: e.position.y - o
  };
}, G_ = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, i) => {
    const s = typeof i == "string";
    let o = !t.nodeLookup && !s ? i : void 0;
    t.nodeLookup && (o = s ? t.nodeLookup.get(i) : Mf(i) ? i : t.nodeLookup.get(i.id));
    const l = o ? Cl(o, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ea(r, l);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ta(n);
}, Rs = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((i) => {
    (t.filter === void 0 || t.filter(i)) && (n = ea(n, Cl(i)), r = !0);
  }), r ? ta(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Tf = (e, t, [n, r, i] = [0, 0, 1], s = !1, o = !1) => {
  const l = (t.x - n) / i, a = (t.y - r) / i, u = t.width / i, d = t.height / i, c = [];
  for (const f of e.values()) {
    const { measured: p, selectable: y = !0, hidden: v = !1 } = f;
    if (o && !y || v)
      continue;
    const w = p.width ?? f.width ?? f.initialWidth ?? 0, h = p.height ?? f.height ?? f.initialHeight ?? 0, { x: m, y: g } = f.internals.positionAbsolute, x = Ry(l, a, u, d, m, g, w, h), S = w * h, k = s && x > 0;
    (!f.internals.handleBounds || k || x >= S || f.dragging) && c.push(f);
  }
  return c;
}, J_ = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Z_(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
  return e.forEach((i) => {
    i.measured.width && i.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !i.hidden) && (!r || r.has(i.id)) && n.set(i.id, i);
  }), n;
}
async function eN({ nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: s }, o) {
  if (e.size === 0)
    return !0;
  const l = Z_(e, o), a = Rs(l), u = Af(a, t, n, (o == null ? void 0 : o.minZoom) ?? i, (o == null ? void 0 : o.maxZoom) ?? s, (o == null ? void 0 : o.padding) ?? 0.1);
  return await r.setViewport(u, {
    duration: o == null ? void 0 : o.duration,
    ease: o == null ? void 0 : o.ease,
    interpolate: o == null ? void 0 : o.interpolate
  }), !0;
}
function Oy({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: i, onError: s }) {
  const o = n.get(e), l = o.parentId ? n.get(o.parentId) : void 0, { x: a, y: u } = l ? l.internals.positionAbsolute : { x: 0, y: 0 }, d = o.origin ?? r;
  let c = o.extent || i;
  if (o.extent === "parent" && !o.expandParent)
    if (!l)
      s == null || s("005", Mt.error005());
    else {
      const p = l.measured.width, y = l.measured.height;
      p && y && (c = [
        [a, u],
        [a + p, u + y]
      ]);
    }
  else l && ar(o.extent) && (c = [
    [o.extent[0][0] + a, o.extent[0][1] + u],
    [o.extent[1][0] + a, o.extent[1][1] + u]
  ]);
  const f = ar(c) ? lr(t, c, o.measured) : t;
  return (o.measured.width === void 0 || o.measured.height === void 0) && (s == null || s("015", Mt.error015())), {
    position: {
      x: f.x - a + (o.measured.width ?? 0) * d[0],
      y: f.y - u + (o.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function tN({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: i }) {
  const s = new Set(e.map((f) => f.id)), o = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const p = s.has(f.id), y = !p && f.parentId && o.find((v) => v.id === f.parentId);
    (p || y) && o.push(f);
  }
  const l = new Set(t.map((f) => f.id)), a = r.filter((f) => f.deletable !== !1), d = J_(o, a);
  for (const f of a)
    l.has(f.id) && !d.find((y) => y.id === f.id) && d.push(f);
  if (!i)
    return {
      edges: d,
      nodes: o
    };
  const c = await i({
    nodes: o,
    edges: d
  });
  return typeof c == "boolean" ? c ? { edges: d, nodes: o } : { edges: [], nodes: [] } : c;
}
const ri = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), lr = (e = { x: 0, y: 0 }, t, n) => ({
  x: ri(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: ri(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Dy(e, t, n) {
  const { width: r, height: i } = ln(n), { x: s, y: o } = n.internals.positionAbsolute;
  return lr(e, [
    [s, o],
    [s + r, o + i]
  ], t);
}
const Oh = (e, t, n) => e < t ? ri(Math.abs(e - t), 1, t) / t : e > n ? -ri(Math.abs(e - n), 1, t) / t : 0, If = (e, t, n = 15, r = 40) => {
  const i = Oh(e.x, r, t.width - r) * n, s = Oh(e.y, r, t.height - r) * n;
  return [i, s];
}, ea = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), hc = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ta = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), _s = (e, t = [0, 0]) => {
  var i, s;
  const { x: n, y: r } = Mf(e) ? e.internals.positionAbsolute : js(e, t);
  return {
    x: n,
    y: r,
    width: ((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((s = e.measured) == null ? void 0 : s.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Cl = (e, t = [0, 0]) => {
  var i, s;
  const { x: n, y: r } = Mf(e) ? e.internals.positionAbsolute : js(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((s = e.measured) == null ? void 0 : s.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, jy = (e, t) => ta(ea(hc(e), hc(t))), Ry = (e, t, n, r, i, s, o, l) => {
  const a = Math.max(0, Math.min(e + n, i + o) - Math.max(e, i)), u = Math.max(0, Math.min(t + r, s + l) - Math.max(t, s));
  return Math.ceil(a * u);
}, bl = (e, t) => Ry(e.x, e.y, e.width, e.height, t.x, t.y, t.width, t.height), Dh = (e) => Et(e.width) && Et(e.height) && Et(e.x) && Et(e.y), Et = (e) => !isNaN(e) && isFinite(e), zy = (e, t) => (n, r) => {
}, zs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Bs = ({ x: e, y: t }, [n, r, i], s = !1, o = [1, 1]) => {
  const l = {
    x: (e - n) / i,
    y: (t - r) / i
  };
  return s ? zs(l, o) : l;
}, ii = ({ x: e, y: t }, [n, r, i]) => ({
  x: e * i + n,
  y: t * i + r
});
function gr(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function nN(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = gr(e, n), i = gr(e, t);
    return {
      top: r,
      right: i,
      bottom: r,
      left: i,
      x: i * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = gr(e.top ?? e.y ?? 0, n), i = gr(e.bottom ?? e.y ?? 0, n), s = gr(e.left ?? e.x ?? 0, t), o = gr(e.right ?? e.x ?? 0, t);
    return { top: r, right: o, bottom: i, left: s, x: s + o, y: r + i };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function rN(e, t, n, r, i, s) {
  const { x: o, y: l } = ii(e, [t, n, r]), { x: a, y: u } = ii({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = i - a, c = s - u;
  return {
    left: Math.floor(o),
    top: Math.floor(l),
    right: Math.floor(d),
    bottom: Math.floor(c)
  };
}
const Af = (e, t, n, r, i, s) => {
  const o = nN(s, t, n), l = (t - o.x) / e.width, a = (n - o.y) / e.height, u = Math.min(l, a), d = ri(u, r, i), c = e.x + e.width / 2, f = e.y + e.height / 2, p = t / 2 - c * d, y = n / 2 - f * d, v = rN(e, p, y, d, t, n), w = {
    left: Math.min(v.left - o.left, 0),
    top: Math.min(v.top - o.top, 0),
    right: Math.min(v.right - o.right, 0),
    bottom: Math.min(v.bottom - o.bottom, 0)
  };
  return {
    x: p - w.left + w.right,
    y: y - w.top + w.bottom,
    zoom: d
  };
}, Ns = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function ar(e) {
  return e != null && e !== "parent";
}
function ln(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function By(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Fy(e, t = { width: 0, height: 0 }, n, r, i) {
  const s = { ...e }, o = r.get(n);
  if (o) {
    const l = o.origin || i;
    s.x += o.internals.positionAbsolute.x - (t.width ?? 0) * l[0], s.y += o.internals.positionAbsolute.y - (t.height ?? 0) * l[1];
  }
  return s;
}
function jh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function iN() {
  let e, t;
  return { promise: new Promise((r, i) => {
    e = r, t = i;
  }), resolve: e, reject: t };
}
function sN(e) {
  return { ...Ay, ...e || {} };
}
function qi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: i }) {
  const { x: s, y: o } = _t(e), l = Bs({ x: s - ((i == null ? void 0 : i.left) ?? 0), y: o - ((i == null ? void 0 : i.top) ?? 0) }, r), { x: a, y: u } = n ? zs(l, t) : l;
  return {
    xSnapped: a,
    ySnapped: u,
    ...l
  };
}
const Lf = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Vy = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, oN = ["INPUT", "SELECT", "TEXTAREA"];
function Hy(e) {
  var r, i;
  const t = ((i = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : i[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : oN.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Uy = (e) => "clientX" in e, _t = (e, t) => {
  var s, o;
  const n = Uy(e), r = n ? e.clientX : (s = e.touches) == null ? void 0 : s[0].clientX, i = n ? e.clientY : (o = e.touches) == null ? void 0 : o[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Rh = (e, t, n, r, i) => {
  const s = t.querySelectorAll(`.${e}`);
  return !s || !s.length ? null : Array.from(s).map((o) => {
    const l = o.getBoundingClientRect();
    return {
      id: o.getAttribute("data-handleid"),
      type: e,
      nodeId: i,
      position: o.getAttribute("data-handlepos"),
      x: (l.left - n.left) / r,
      y: (l.top - n.top) / r,
      ...Lf(o)
    };
  });
};
function Ky({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: i, sourceControlY: s, targetControlX: o, targetControlY: l }) {
  const a = e * 0.125 + i * 0.375 + o * 0.375 + n * 0.125, u = t * 0.125 + s * 0.375 + l * 0.375 + r * 0.125, d = Math.abs(a - e), c = Math.abs(u - t);
  return [a, u, d, c];
}
function mo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function zh({ pos: e, x1: t, y1: n, x2: r, y2: i, c: s }) {
  switch (e) {
    case X.Left:
      return [t - mo(t - r, s), n];
    case X.Right:
      return [t + mo(r - t, s), n];
    case X.Top:
      return [t, n - mo(n - i, s)];
    case X.Bottom:
      return [t, n + mo(i - n, s)];
  }
}
function Wy({ sourceX: e, sourceY: t, sourcePosition: n = X.Bottom, targetX: r, targetY: i, targetPosition: s = X.Top, curvature: o = 0.25 }) {
  const [l, a] = zh({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: i,
    c: o
  }), [u, d] = zh({
    pos: s,
    x1: r,
    y1: i,
    x2: e,
    y2: t,
    c: o
  }), [c, f, p, y] = Ky({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: i,
    sourceControlX: l,
    sourceControlY: a,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${e},${t} C${l},${a} ${u},${d} ${r},${i}`,
    c,
    f,
    p,
    y
  ];
}
function Yy({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const i = Math.abs(n - e) / 2, s = n < e ? n + i : n - i, o = Math.abs(r - t) / 2, l = r < t ? r + o : r - o;
  return [s, l, i, o];
}
function lN({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: i = !1, zIndexMode: s = "basic" }) {
  if (s === "manual")
    return r;
  const o = i && n ? r + 1e3 : r, l = Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
  return o + l;
}
function aN({ sourceNode: e, targetNode: t, width: n, height: r, transform: i }) {
  const s = ea(Cl(e), Cl(t));
  s.x === s.x2 && (s.x2 += 1), s.y === s.y2 && (s.y2 += 1);
  const o = {
    x: -i[0] / i[2],
    y: -i[1] / i[2],
    width: n / i[2],
    height: r / i[2]
  };
  return bl(o, ta(s)) > 0;
}
const uN = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, cN = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), fN = (e, t, n = {}) => {
  var s;
  if (!e.source || !e.target)
    return (s = n.onError) == null || s.call(n, "006", Mt.error006()), t;
  const r = n.getEdgeId || uN;
  let i;
  return Py(e) ? i = { ...e } : i = {
    ...e,
    id: r(e)
  }, cN(i, t) ? t : (i.sourceHandle === null && delete i.sourceHandle, i.targetHandle === null && delete i.targetHandle, t.concat(i));
};
function Xy({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [i, s, o, l] = Yy({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, i, s, o, l];
}
const Bh = {
  [X.Left]: { x: -1, y: 0 },
  [X.Right]: { x: 1, y: 0 },
  [X.Top]: { x: 0, y: -1 },
  [X.Bottom]: { x: 0, y: 1 }
}, dN = ({ source: e, sourcePosition: t = X.Bottom, target: n }) => t === X.Left || t === X.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Fh = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function hN({ source: e, sourcePosition: t = X.Bottom, target: n, targetPosition: r = X.Top, center: i, offset: s, stepPosition: o }) {
  const l = Bh[t], a = Bh[r], u = { x: e.x + l.x * s, y: e.y + l.y * s }, d = { x: n.x + a.x * s, y: n.y + a.y * s }, c = dN({
    source: u,
    sourcePosition: t,
    target: d
  }), f = c.x !== 0 ? "x" : "y", p = c[f];
  let y = [], v, w;
  const h = { x: 0, y: 0 }, m = { x: 0, y: 0 }, [, , g, x] = Yy({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (l[f] * a[f] === -1) {
    f === "x" ? (v = i.x ?? u.x + (d.x - u.x) * o, w = i.y ?? (u.y + d.y) / 2) : (v = i.x ?? (u.x + d.x) / 2, w = i.y ?? u.y + (d.y - u.y) * o);
    const _ = [
      { x: v, y: u.y },
      { x: v, y: d.y }
    ], M = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    l[f] === p ? y = f === "x" ? _ : M : y = f === "x" ? M : _;
  } else {
    const _ = [{ x: u.x, y: d.y }], M = [{ x: d.x, y: u.y }];
    if (f === "x" ? y = l.x === p ? M : _ : y = l.y === p ? _ : M, t === r) {
      const N = Math.abs(e[f] - n[f]);
      if (N <= s) {
        const A = Math.min(s - 1, s - N);
        l[f] === p ? h[f] = (u[f] > e[f] ? -1 : 1) * A : m[f] = (d[f] > n[f] ? -1 : 1) * A;
      }
    }
    if (t !== r) {
      const N = f === "x" ? "y" : "x", A = l[f] === a[N], b = u[N] > d[N], D = u[N] < d[N];
      (l[f] === 1 && (!A && b || A && D) || l[f] !== 1 && (!A && D || A && b)) && (y = f === "x" ? _ : M);
    }
    const $ = { x: u.x + h.x, y: u.y + h.y }, C = { x: d.x + m.x, y: d.y + m.y }, P = Math.max(Math.abs($.x - y[0].x), Math.abs(C.x - y[0].x)), B = Math.max(Math.abs($.y - y[0].y), Math.abs(C.y - y[0].y));
    P >= B ? (v = ($.x + C.x) / 2, w = y[0].y) : (v = y[0].x, w = ($.y + C.y) / 2);
  }
  const S = { x: u.x + h.x, y: u.y + h.y }, k = { x: d.x + m.x, y: d.y + m.y };
  return [[
    e,
    // we only want to add the gapped source/target if they are different from the first/last point to avoid duplicates which can cause issues with the bends
    ...S.x !== y[0].x || S.y !== y[0].y ? [S] : [],
    ...y,
    ...k.x !== y[y.length - 1].x || k.y !== y[y.length - 1].y ? [k] : [],
    n
  ], v, w, g, x];
}
function pN(e, t, n, r) {
  const i = Math.min(Fh(e, t) / 2, Fh(t, n) / 2, r), { x: s, y: o } = t;
  if (e.x === s && s === n.x || e.y === o && o === n.y)
    return `L${s} ${o}`;
  if (e.y === o) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${s + i * u},${o}Q ${s},${o} ${s},${o + i * d}`;
  }
  const l = e.x < n.x ? 1 : -1, a = e.y < n.y ? -1 : 1;
  return `L ${s},${o + i * a}Q ${s},${o} ${s + i * l},${o}`;
}
function pc({ sourceX: e, sourceY: t, sourcePosition: n = X.Bottom, targetX: r, targetY: i, targetPosition: s = X.Top, borderRadius: o = 5, centerX: l, centerY: a, offset: u = 20, stepPosition: d = 0.5 }) {
  const [c, f, p, y, v] = hN({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: i },
    targetPosition: s,
    center: { x: l, y: a },
    offset: u,
    stepPosition: d
  });
  let w = `M${c[0].x} ${c[0].y}`;
  for (let h = 1; h < c.length - 1; h++)
    w += pN(c[h - 1], c[h], c[h + 1], o);
  return w += `L${c[c.length - 1].x} ${c[c.length - 1].y}`, [w, f, p, y, v];
}
function Vh(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function gN(e) {
  var c;
  const { sourceNode: t, targetNode: n } = e;
  if (!Vh(t) || !Vh(n))
    return null;
  const r = t.internals.handleBounds || Hh(t.handles), i = n.internals.handleBounds || Hh(n.handles), s = Uh((r == null ? void 0 : r.source) ?? [], e.sourceHandle), o = Uh(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === ni.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!s || !o)
    return (c = e.onError) == null || c.call(e, "008", Mt.error008(s ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (s == null ? void 0 : s.position) || X.Bottom, a = (o == null ? void 0 : o.position) || X.Top, u = ur(t, s, l), d = ur(n, o, a);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: a
  };
}
function Hh(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const r of e)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
  return {
    source: t,
    target: n
  };
}
function ur(e, t, n = X.Left, r = !1) {
  const i = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, s = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: o, height: l } = t ?? ln(e);
  if (r)
    return { x: i + o / 2, y: s + l / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case X.Top:
      return { x: i + o / 2, y: s };
    case X.Right:
      return { x: i + o, y: s + l / 2 };
    case X.Bottom:
      return { x: i + o / 2, y: s + l };
    case X.Left:
      return { x: i, y: s + l / 2 };
  }
}
function Uh(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function gc(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function mN(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i }) {
  const s = /* @__PURE__ */ new Set();
  return e.reduce((o, l) => ([l.markerStart || r, l.markerEnd || i].forEach((a) => {
    if (a && typeof a == "object") {
      const u = gc(a, t);
      s.has(u) || (o.push({ id: u, color: a.color || n, ...a }), s.add(u));
    }
  }), o), []).sort((o, l) => o.id.localeCompare(l.id));
}
const Qy = 1e3, yN = 10, $f = {
  nodeOrigin: [0, 0],
  nodeExtent: Ss,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, vN = {
  ...$f,
  checkEquality: !0
};
function Pf(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function wN(e, t, n) {
  const r = Pf($f, n);
  for (const i of e.values())
    if (i.parentId)
      Df(i, e, t, r);
    else {
      const s = js(i, r.nodeOrigin), o = ar(i.extent) ? i.extent : r.nodeExtent, l = lr(s, o, ln(i));
      i.internals.positionAbsolute = l;
    }
}
function xN(e, t) {
  if (!e.handles)
    return e.measured ? t == null ? void 0 : t.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const i of e.handles) {
    const s = {
      id: i.id,
      width: i.width ?? 1,
      height: i.height ?? 1,
      nodeId: e.id,
      x: i.x,
      y: i.y,
      position: i.position,
      type: i.type
    };
    i.type === "source" ? n.push(s) : i.type === "target" && r.push(s);
  }
  return {
    source: n,
    target: r
  };
}
function Of(e) {
  return e === "manual";
}
function mc(e, t, n, r = {}) {
  var d, c;
  const i = Pf(vN, r), s = { i: 0 }, o = new Map(t), l = i != null && i.elevateNodesOnSelect && !Of(i.zIndexMode) ? Qy : 0;
  let a = e.length > 0, u = !1;
  t.clear(), n.clear();
  for (const f of e) {
    let p = o.get(f.id);
    if (i.checkEquality && f === (p == null ? void 0 : p.internals.userNode))
      t.set(f.id, p);
    else {
      const y = js(f, i.nodeOrigin), v = ar(f.extent) ? f.extent : i.nodeExtent, w = lr(y, v, ln(f));
      p = {
        ...i.defaults,
        ...f,
        measured: {
          width: (d = f.measured) == null ? void 0 : d.width,
          height: (c = f.measured) == null ? void 0 : c.height
        },
        internals: {
          positionAbsolute: w,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: xN(f, p),
          z: qy(f, l, i.zIndexMode),
          userNode: f
        }
      }, t.set(f.id, p);
    }
    (p.measured === void 0 || p.measured.width === void 0 || p.measured.height === void 0) && !p.hidden && (a = !1), f.parentId && Df(p, t, n, r, s), u || (u = f.selected ?? !1);
  }
  return { nodesInitialized: a, hasSelectedNodes: u };
}
function SN(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Df(e, t, n, r, i) {
  const { elevateNodesOnSelect: s, nodeOrigin: o, nodeExtent: l, zIndexMode: a } = Pf($f, r), u = e.parentId, d = t.get(u);
  if (!d) {
    console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  SN(e, n), i && !d.parentId && d.internals.rootParentIndex === void 0 && a === "auto" && (d.internals.rootParentIndex = ++i.i, d.internals.z = d.internals.z + i.i * yN), i && d.internals.rootParentIndex !== void 0 && (i.i = d.internals.rootParentIndex);
  const c = s && !Of(a) ? Qy : 0, { x: f, y: p, z: y } = kN(e, d, o, l, c, a), { positionAbsolute: v } = e.internals, w = f !== v.x || p !== v.y;
  (w || y !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: f, y: p } : v,
      z: y
    }
  });
}
function qy(e, t, n) {
  const r = Et(e.zIndex) ? e.zIndex : 0;
  return Of(n) ? r : r + (e.selected ? t : 0);
}
function kN(e, t, n, r, i, s) {
  const { x: o, y: l } = t.internals.positionAbsolute, a = ln(e), u = js(e, n), d = ar(e.extent) ? lr(u, e.extent, a) : u;
  let c = lr({ x: o + d.x, y: l + d.y }, r, a);
  e.extent === "parent" && (c = Dy(c, a, t));
  const f = qy(e, i, s), p = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: p >= f ? p + 1 : f
  };
}
function jf(e, t, n, r = [0, 0]) {
  var o;
  const i = [], s = /* @__PURE__ */ new Map();
  for (const l of e) {
    const a = t.get(l.parentId);
    if (!a)
      continue;
    const u = ((o = s.get(l.parentId)) == null ? void 0 : o.expandedRect) ?? _s(a), d = jy(u, l.rect);
    s.set(l.parentId, { expandedRect: d, parent: a });
  }
  return s.size > 0 && s.forEach(({ expandedRect: l, parent: a }, u) => {
    var g;
    const d = a.internals.positionAbsolute, c = ln(a), f = a.origin ?? r, p = l.x < d.x ? Math.round(Math.abs(d.x - l.x)) : 0, y = l.y < d.y ? Math.round(Math.abs(d.y - l.y)) : 0, v = Math.max(c.width, Math.round(l.width)), w = Math.max(c.height, Math.round(l.height)), h = (v - c.width) * f[0], m = (w - c.height) * f[1];
    (p > 0 || y > 0 || h || m) && (i.push({
      id: u,
      type: "position",
      position: {
        x: a.position.x - p + h,
        y: a.position.y - y + m
      }
    }), (g = n.get(u)) == null || g.forEach((x) => {
      e.some((S) => S.id === x.id) || i.push({
        id: x.id,
        type: "position",
        position: {
          x: x.position.x + p,
          y: x.position.y + y
        }
      });
    })), (c.width < l.width || c.height < l.height || p || y) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (p ? f[0] * p - h : 0),
        height: w + (y ? f[1] * y - m : 0)
      }
    });
  }), i;
}
function EN(e, t, n, r, i, s, o) {
  const l = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!l)
    return { changes: [], updatedInternals: a };
  const u = [], d = window.getComputedStyle(l), { m22: c } = new window.DOMMatrixReadOnly(d.transform), f = [];
  for (const p of e.values()) {
    const y = t.get(p.id);
    if (!y)
      continue;
    if (y.hidden) {
      t.set(y.id, {
        ...y,
        internals: {
          ...y.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const v = Lf(p.nodeElement), w = y.measured.width !== v.width || y.measured.height !== v.height;
    if (!!(v.width && v.height && (w || !y.internals.handleBounds || p.force))) {
      const m = p.nodeElement.getBoundingClientRect(), g = ar(y.extent) ? y.extent : s;
      let { positionAbsolute: x } = y.internals;
      y.parentId && y.extent === "parent" ? x = Dy(x, v, t.get(y.parentId)) : g && (x = lr(x, g, v));
      const S = {
        ...y,
        measured: v,
        internals: {
          ...y.internals,
          positionAbsolute: x,
          handleBounds: {
            source: Rh("source", p.nodeElement, m, c, y.id),
            target: Rh("target", p.nodeElement, m, c, y.id)
          }
        }
      };
      t.set(y.id, S), y.parentId && Df(S, t, n, { nodeOrigin: i, zIndexMode: o }), a = !0, w && (u.push({
        id: y.id,
        type: "dimensions",
        dimensions: v
      }), y.expandParent && y.parentId && f.push({
        id: y.id,
        parentId: y.parentId,
        rect: _s(S, i)
      }));
    }
  }
  if (f.length > 0) {
    const p = jf(f, t, n, i);
    u.push(...p);
  }
  return { changes: u, updatedInternals: a };
}
async function _N({ delta: e, panZoom: t, transform: n, translateExtent: r, width: i, height: s }) {
  if (!t || !e.x && !e.y)
    return !1;
  const o = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [i, s]
  ], r);
  return !!o && (o.x !== n[0] || o.y !== n[1] || o.k !== n[2]);
}
function Kh(e, t, n, r, i, s) {
  let o = i;
  const l = r.get(o) || /* @__PURE__ */ new Map();
  r.set(o, l.set(n, t)), o = `${i}-${e}`;
  const a = r.get(o) || /* @__PURE__ */ new Map();
  if (r.set(o, a.set(n, t)), s) {
    o = `${i}-${e}-${s}`;
    const u = r.get(o) || /* @__PURE__ */ new Map();
    r.set(o, u.set(n, t));
  }
}
function Gy(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: i, target: s, sourceHandle: o = null, targetHandle: l = null } = r, a = { edgeId: r.id, source: i, target: s, sourceHandle: o, targetHandle: l }, u = `${i}-${o}--${s}-${l}`, d = `${s}-${l}--${i}-${o}`;
    Kh("source", a, d, e, i, o), Kh("target", a, u, e, s, l), t.set(r.id, r);
  }
}
function Jy(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Jy(n, t) : !1;
}
function Wh(e, t, n) {
  var i;
  let r = e;
  do {
    if ((i = r == null ? void 0 : r.matches) != null && i.call(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function NN(e, t, n, r) {
  const i = /* @__PURE__ */ new Map();
  for (const [s, o] of e)
    if ((o.selected || o.id === r) && (!o.parentId || !Jy(o, e)) && (o.draggable || t && typeof o.draggable > "u")) {
      const l = e.get(s);
      l && i.set(s, {
        id: s,
        position: l.position || { x: 0, y: 0 },
        distance: {
          x: n.x - l.internals.positionAbsolute.x,
          y: n.y - l.internals.positionAbsolute.y
        },
        extent: l.extent,
        parentId: l.parentId,
        origin: l.origin,
        expandParent: l.expandParent,
        internals: {
          positionAbsolute: l.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: l.measured.width ?? 0,
          height: l.measured.height ?? 0
        }
      });
    }
  return i;
}
function Ja({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, l, a;
  const i = [];
  for (const [u, d] of t) {
    const c = (o = n.get(u)) == null ? void 0 : o.internals.userNode;
    c && i.push({
      ...c,
      position: d.position,
      dragging: r
    });
  }
  if (!e)
    return [i[0], i];
  const s = (l = n.get(e)) == null ? void 0 : l.internals.userNode;
  return [
    s ? {
      ...s,
      position: ((a = t.get(e)) == null ? void 0 : a.position) || s.position,
      dragging: r
    } : i[0],
    i
  ];
}
function CN({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const i = e.values().next().value;
  if (!i)
    return null;
  const s = {
    x: n - i.distance.x,
    y: r - i.distance.y
  }, o = zs(s, t);
  return {
    x: o.x - s.x,
    y: o.y - s.y
  };
}
function bN({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: i }) {
  let s = { x: null, y: null }, o = 0, l = /* @__PURE__ */ new Map(), a = !1, u = { x: 0, y: 0 }, d = null, c = !1, f = null, p = !1, y = !1, v = null;
  function w({ noDragClassName: m, handleSelector: g, domNode: x, isSelectable: S, nodeId: k, nodeClickDistance: E = 0 }) {
    f = Je(x);
    function _({ x: P, y: B }) {
      const { nodeLookup: N, nodeExtent: A, snapGrid: b, snapToGrid: D, nodeOrigin: T, onNodeDrag: I, onSelectionDrag: z, onError: j, updateNodePositions: R } = t();
      s = { x: P, y: B };
      let H = !1;
      const U = l.size > 1, Y = U && A ? hc(Rs(l)) : null, J = U && D ? CN({
        dragItems: l,
        snapGrid: b,
        x: P,
        y: B
      }) : null;
      for (const [Q, F] of l) {
        if (!N.has(Q))
          continue;
        let K = { x: P - F.distance.x, y: B - F.distance.y };
        D && (K = J ? {
          x: Math.round(K.x + J.x),
          y: Math.round(K.y + J.y)
        } : zs(K, b));
        let ee = null;
        if (U && A && !F.extent && Y) {
          const { positionAbsolute: q } = F.internals, ne = q.x - Y.x + A[0][0], oe = q.x + F.measured.width - Y.x2 + A[1][0], le = q.y - Y.y + A[0][1], xe = q.y + F.measured.height - Y.y2 + A[1][1];
          ee = [
            [ne, le],
            [oe, xe]
          ];
        }
        const { position: Z, positionAbsolute: G } = Oy({
          nodeId: Q,
          nextPosition: K,
          nodeLookup: N,
          nodeExtent: ee || A,
          nodeOrigin: T,
          onError: j
        });
        H = H || F.position.x !== Z.x || F.position.y !== Z.y, F.position = Z, F.internals.positionAbsolute = G;
      }
      if (y = y || H, !!H && (R(l, !0), v && (r || I || !k && z))) {
        const [Q, F] = Ja({
          nodeId: k,
          dragItems: l,
          nodeLookup: N
        });
        r == null || r(v, l, Q, F), I == null || I(v, Q, F), k || z == null || z(v, F);
      }
    }
    async function M() {
      if (!d)
        return;
      const { transform: P, panBy: B, autoPanSpeed: N, autoPanOnNodeDrag: A } = t();
      if (!A) {
        a = !1, cancelAnimationFrame(o);
        return;
      }
      const [b, D] = If(u, d, N);
      (b !== 0 || D !== 0) && (s.x = (s.x ?? 0) - b / P[2], s.y = (s.y ?? 0) - D / P[2], await B({ x: b, y: D }) && _(s)), o = requestAnimationFrame(M);
    }
    function $(P) {
      var U;
      const { nodeLookup: B, multiSelectionActive: N, nodesDraggable: A, transform: b, snapGrid: D, snapToGrid: T, selectNodesOnDrag: I, onNodeDragStart: z, onSelectionDragStart: j, unselectNodesAndEdges: R } = t();
      c = !0, (!I || !S) && !N && k && ((U = B.get(k)) != null && U.selected || R()), S && I && k && (e == null || e(k));
      const H = qi(P.sourceEvent, { transform: b, snapGrid: D, snapToGrid: T, containerBounds: d });
      if (s = H, l = NN(B, A, H, k), l.size > 0 && (n || z || !k && j)) {
        const [Y, J] = Ja({
          nodeId: k,
          dragItems: l,
          nodeLookup: B
        });
        n == null || n(P.sourceEvent, l, Y, J), z == null || z(P.sourceEvent, Y, J), k || j == null || j(P.sourceEvent, J);
      }
    }
    const C = py().clickDistance(E).on("start", (P) => {
      const { domNode: B, nodeDragThreshold: N, transform: A, snapGrid: b, snapToGrid: D } = t();
      d = (B == null ? void 0 : B.getBoundingClientRect()) || null, p = !1, y = !1, v = P.sourceEvent, N === 0 && $(P), s = qi(P.sourceEvent, { transform: A, snapGrid: b, snapToGrid: D, containerBounds: d }), u = _t(P.sourceEvent, d);
    }).on("drag", (P) => {
      const { autoPanOnNodeDrag: B, transform: N, snapGrid: A, snapToGrid: b, nodeDragThreshold: D, nodeLookup: T } = t(), I = qi(P.sourceEvent, { transform: N, snapGrid: A, snapToGrid: b, containerBounds: d });
      if (v = P.sourceEvent, (P.sourceEvent.type === "touchmove" && P.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      k && !T.has(k)) && (p = !0), !p) {
        if (!a && B && c && (a = !0, M()), !c) {
          const z = _t(P.sourceEvent, d), j = z.x - u.x, R = z.y - u.y;
          Math.sqrt(j * j + R * R) > D && $(P);
        }
        (s.x !== I.xSnapped || s.y !== I.ySnapped) && l && c && (u = _t(P.sourceEvent, d), _(I));
      }
    }).on("end", (P) => {
      if (!c || p) {
        p && l.size > 0 && t().updateNodePositions(l, !1);
        return;
      }
      if (a = !1, c = !1, cancelAnimationFrame(o), l.size > 0) {
        const { nodeLookup: B, updateNodePositions: N, onNodeDragStop: A, onSelectionDragStop: b } = t();
        if (y && (N(l, !1), y = !1), i || A || !k && b) {
          const [D, T] = Ja({
            nodeId: k,
            dragItems: l,
            nodeLookup: B,
            dragging: !1
          });
          i == null || i(P.sourceEvent, l, D, T), A == null || A(P.sourceEvent, D, T), k || b == null || b(P.sourceEvent, T);
        }
      }
    }).filter((P) => {
      const B = P.target;
      return !P.button && (!m || !Wh(B, `.${m}`, x)) && (!g || Wh(B, g, x));
    });
    f.call(C);
  }
  function h() {
    f == null || f.on(".drag", null);
  }
  return {
    update: w,
    destroy: h
  };
}
function MN(e, t, n) {
  const r = [], i = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const s of t.values())
    bl(i, _s(s)) > 0 && r.push(s);
  return r;
}
const TN = 250;
function IN(e, t, n, r) {
  var l, a;
  let i = [], s = 1 / 0;
  const o = MN(e, n, t + TN);
  for (const u of o) {
    const d = [...((l = u.internals.handleBounds) == null ? void 0 : l.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const c of d) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: f, y: p } = ur(u, c, c.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(p - e.y, 2));
      y > t || (y < s ? (i = [{ ...c, x: f, y: p }], s = y) : y === s && i.push({ ...c, x: f, y: p }));
    }
  }
  if (!i.length)
    return null;
  if (i.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return i.find((d) => d.type === u) ?? i[0];
  }
  return i[0];
}
function Zy(e, t, n, r, i, s = !1) {
  var u, d, c;
  const o = r.get(e);
  if (!o)
    return null;
  const l = i === "strict" ? (u = o.internals.handleBounds) == null ? void 0 : u[t] : [...((d = o.internals.handleBounds) == null ? void 0 : d.source) ?? [], ...((c = o.internals.handleBounds) == null ? void 0 : c.target) ?? []], a = (n ? l == null ? void 0 : l.find((f) => f.id === n) : l == null ? void 0 : l[0]) ?? null;
  return a && s ? { ...a, ...ur(o, a, a.position, !0) } : a;
}
function e0(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function AN(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const t0 = () => !0;
function LN(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: i, edgeUpdaterType: s, isTarget: o, domNode: l, nodeLookup: a, lib: u, autoPanOnConnect: d, flowId: c, panBy: f, cancelConnection: p, onConnectStart: y, onConnect: v, onConnectEnd: w, isValidConnection: h = t0, onReconnectEnd: m, updateConnection: g, getTransform: x, getFromHandle: S, autoPanSpeed: k, dragThreshold: E = 1, handleDomNode: _ }) {
  const M = Vy(e.target);
  let $ = 0, C;
  const { x: P, y: B } = _t(e), N = e0(s, _), A = l == null ? void 0 : l.getBoundingClientRect();
  let b = !1;
  if (!A || !N)
    return;
  const D = Zy(i, N, r, a, t);
  if (!D)
    return;
  let T = _t(e, A), I = !1, z = null, j = !1, R = null;
  function H() {
    if (!d || !A)
      return;
    const [Z, G] = If(T, A, k);
    f({ x: Z, y: G }), $ = requestAnimationFrame(H);
  }
  const U = {
    ...D,
    nodeId: i,
    type: N,
    position: D.position
  }, Y = a.get(i);
  let Q = {
    inProgress: !0,
    isValid: null,
    from: ur(Y, U, X.Left, !0),
    fromHandle: U,
    fromPosition: U.position,
    fromNode: Y,
    to: T,
    toHandle: null,
    toPosition: Ph[U.position],
    toNode: null,
    pointer: T
  };
  function F() {
    b = !0, g(Q), y == null || y(e, { nodeId: i, handleId: r, handleType: N });
  }
  E === 0 && F();
  function K(Z) {
    if (!b) {
      const { x: xe, y: st } = _t(Z), At = xe - P, Lt = st - B;
      if (!(At * At + Lt * Lt > E * E))
        return;
      F();
    }
    if (!S() || !U) {
      ee(Z);
      return;
    }
    const G = x();
    T = _t(Z, A), C = IN(Bs(T, G, !1, [1, 1]), n, a, U), I || (H(), I = !0);
    const q = n0(Z, {
      handle: C,
      connectionMode: t,
      fromNodeId: i,
      fromHandleId: r,
      fromType: o ? "target" : "source",
      isValidConnection: h,
      doc: M,
      lib: u,
      flowId: c,
      nodeLookup: a
    });
    R = q.handleDomNode, z = q.connection, j = AN(!!C, q.isValid);
    const ne = a.get(i), oe = ne ? ur(ne, U, X.Left, !0) : Q.from, le = {
      ...Q,
      from: oe,
      isValid: j,
      to: q.toHandle && j ? ii({ x: q.toHandle.x, y: q.toHandle.y }, G) : T,
      toHandle: q.toHandle,
      toPosition: j && q.toHandle ? q.toHandle.position : Ph[U.position],
      toNode: q.toHandle ? a.get(q.toHandle.nodeId) : null,
      pointer: T
    };
    g(le), Q = le;
  }
  function ee(Z) {
    if (!("touches" in Z && Z.touches.length > 0)) {
      if (b) {
        (C || R) && z && j && (v == null || v(z));
        const { inProgress: G, ...q } = Q, ne = {
          ...q,
          toPosition: Q.toHandle ? Q.toPosition : null
        };
        w == null || w(Z, ne), s && (m == null || m(Z, ne));
      }
      p(), cancelAnimationFrame($), I = !1, j = !1, z = null, R = null, M.removeEventListener("mousemove", K), M.removeEventListener("mouseup", ee), M.removeEventListener("touchmove", K), M.removeEventListener("touchend", ee);
    }
  }
  M.addEventListener("mousemove", K), M.addEventListener("mouseup", ee), M.addEventListener("touchmove", K), M.addEventListener("touchend", ee);
}
function n0(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: i, fromType: s, doc: o, lib: l, flowId: a, isValidConnection: u = t0, nodeLookup: d }) {
  const c = s === "target", f = t ? o.querySelector(`.${l}-flow__handle[data-id="${a}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: p, y } = _t(e), v = o.elementFromPoint(p, y), w = v != null && v.classList.contains(`${l}-flow__handle`) ? v : f, h = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const m = e0(void 0, w), g = w.getAttribute("data-nodeid"), x = w.getAttribute("data-handleid"), S = w.classList.contains("connectable"), k = w.classList.contains("connectableend");
    if (!g || !m)
      return h;
    const E = {
      source: c ? g : r,
      sourceHandle: c ? x : i,
      target: c ? r : g,
      targetHandle: c ? i : x
    };
    h.connection = E;
    const M = S && k && (n === ni.Strict ? c && m === "source" || !c && m === "target" : g !== r || x !== i);
    h.isValid = M && u(E), h.toHandle = Zy(g, m, x, d, n, !0);
  }
  return h;
}
const yc = {
  onPointerDown: LN,
  isValid: n0
};
function $N({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const i = Je(e);
  function s({ translateExtent: l, width: a, height: u, zoomStep: d = 1, pannable: c = !0, zoomable: f = !0, inversePan: p = !1 }) {
    const y = (g) => {
      if (g.sourceEvent.type !== "wheel" || !t)
        return;
      const x = n(), S = g.sourceEvent.ctrlKey && Ns() ? 10 : 1, k = -g.sourceEvent.deltaY * (g.sourceEvent.deltaMode === 1 ? 0.05 : g.sourceEvent.deltaMode ? 1 : 2e-3) * d, E = x[2] * Math.pow(2, k * S);
      t.scaleTo(E);
    };
    let v = [0, 0];
    const w = (g) => {
      (g.sourceEvent.type === "mousedown" || g.sourceEvent.type === "touchstart") && (v = [
        g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
        g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY
      ]);
    }, h = (g) => {
      const x = n();
      if (g.sourceEvent.type !== "mousemove" && g.sourceEvent.type !== "touchmove" || !t)
        return;
      const S = [
        g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
        g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY
      ], k = [S[0] - v[0], S[1] - v[1]];
      v = S;
      const E = r() * Math.max(x[2], Math.log(x[2])) * (p ? -1 : 1), _ = {
        x: x[0] - k[0] * E,
        y: x[1] - k[1] * E
      }, M = [
        [0, 0],
        [a, u]
      ];
      t.setViewportConstrained({
        x: _.x,
        y: _.y,
        zoom: x[2]
      }, M, l);
    }, m = Ty().on("start", w).on("zoom", c ? h : null).on("zoom.wheel", f ? y : null);
    i.call(m, {});
  }
  function o() {
    i.on("zoom", null);
  }
  return {
    update: s,
    destroy: o,
    pointer: xt
  };
}
const na = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Za = ({ x: e, y: t, zoom: n }) => Zl.translate(e, t).scale(n), Ar = (e, t) => e.target.closest(`.${t}`), r0 = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), PN = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, eu = (e, t = 0, n = PN, r = () => {
}) => {
  const i = typeof t == "number" && t > 0;
  return i || r(), i ? e.transition().duration(t).ease(n).on("end", r) : e;
}, i0 = (e) => {
  const t = e.ctrlKey && Ns() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function ON({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: i, panOnScrollSpeed: s, zoomOnPinch: o, onPanZoomStart: l, onPanZoom: a, onPanZoomEnd: u }) {
  return (d) => {
    if (Ar(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const c = n.property("__zoom").k || 1;
    if (d.ctrlKey && o) {
      const w = xt(d), h = i0(d), m = c * Math.pow(2, h);
      r.scaleTo(n, m, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let p = i === Zn.Vertical ? 0 : d.deltaX * f, y = i === Zn.Horizontal ? 0 : d.deltaY * f;
    !Ns() && d.shiftKey && i !== Zn.Vertical && (p = d.deltaY * f, y = 0), r.translateBy(
      n,
      -(p / c) * s,
      -(y / c) * s,
      // @ts-ignore
      { internal: !0 }
    );
    const v = na(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (a == null || a(d, v), e.panScrollTimeout = setTimeout(() => {
      u == null || u(d, v), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, l == null || l(d, v));
  };
}
function DN({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, i) {
    const s = r.type === "wheel", o = !t && s && !r.ctrlKey, l = Ar(r, e);
    if (r.ctrlKey && s && l && r.preventDefault(), o || l)
      return null;
    r.preventDefault(), n.call(this, r, i);
  };
}
function jN({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var s, o, l;
    if ((s = r.sourceEvent) != null && s.internal)
      return;
    const i = na(r.transform);
    e.mouseButton = ((o = r.sourceEvent) == null ? void 0 : o.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, ((l = r.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, i));
  };
}
function RN({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: i }) {
  return (s) => {
    var o, l;
    e.usedRightMouseButton = !!(n && r0(t, e.mouseButton ?? 0)), (o = s.sourceEvent) != null && o.sync || r([s.transform.x, s.transform.y, s.transform.k]), i && !((l = s.sourceEvent) != null && l.internal) && (i == null || i(s.sourceEvent, na(s.transform)));
  };
}
function zN({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: i, onPaneContextMenu: s }) {
  return (o) => {
    var l;
    if (!((l = o.sourceEvent) != null && l.internal) && (e.isZoomingOrPanning = !1, s && r0(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && o.sourceEvent && s(o.sourceEvent), e.usedRightMouseButton = !1, r(!1), i)) {
      const a = na(o.transform);
      e.prevViewport = a, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          i == null || i(o.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to suppress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function BN({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: i, zoomOnDoubleClick: s, userSelectionActive: o, noWheelClassName: l, noPanClassName: a, lib: u, connectionInProgress: d }) {
  return (c) => {
    var w;
    const f = e || t, p = n && c.ctrlKey, y = c.type === "wheel";
    if (c.button === 1 && c.type === "mousedown" && (Ar(c, `${u}-flow__node`) || Ar(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !i && !s && !n || o || d && !y || Ar(c, l) && y || Ar(c, a) && (!y || i && y && !e) || !n && c.ctrlKey && y)
      return !1;
    if (!n && c.type === "touchstart" && ((w = c.touches) == null ? void 0 : w.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !i && !p && y || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const v = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || y) && v;
  };
}
function FN({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: i, onPanZoom: s, onPanZoomStart: o, onPanZoomEnd: l, onDraggingChange: a }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), c = Ty().scaleExtent([t, n]).translateExtent(r), f = Je(e).call(c);
  m({
    x: i.x,
    y: i.y,
    zoom: ri(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const p = f.on("wheel.zoom"), y = f.on("dblclick.zoom");
  c.wheelDelta(i0);
  async function v(C, P) {
    return f ? new Promise((B) => {
      c == null || c.interpolate((P == null ? void 0 : P.interpolate) === "linear" ? Qi : Bo).transform(eu(f, P == null ? void 0 : P.duration, P == null ? void 0 : P.ease, () => B(!0)), C);
    }) : !1;
  }
  function w({ noWheelClassName: C, noPanClassName: P, onPaneContextMenu: B, userSelectionActive: N, panOnScroll: A, panOnDrag: b, panOnScrollMode: D, panOnScrollSpeed: T, preventScrolling: I, zoomOnPinch: z, zoomOnScroll: j, zoomOnDoubleClick: R, zoomActivationKeyPressed: H, lib: U, onTransformChange: Y, connectionInProgress: J, paneClickDistance: Q, selectionOnDrag: F }) {
    N && !u.isZoomingOrPanning && h();
    const K = A && !H && !N;
    c.clickDistance(F ? 1 / 0 : !Et(Q) || Q < 0 ? 0 : Q);
    const ee = K ? ON({
      zoomPanValues: u,
      noWheelClassName: C,
      d3Selection: f,
      d3Zoom: c,
      panOnScrollMode: D,
      panOnScrollSpeed: T,
      zoomOnPinch: z,
      onPanZoomStart: o,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : DN({
      noWheelClassName: C,
      preventScrolling: I,
      d3ZoomHandler: p
    });
    f.on("wheel.zoom", ee, { passive: !1 });
    const Z = jN({
      zoomPanValues: u,
      onDraggingChange: a,
      onPanZoomStart: o
    });
    c.on("start", Z);
    const G = RN({
      zoomPanValues: u,
      panOnDrag: b,
      onPaneContextMenu: !!B,
      onPanZoom: s,
      onTransformChange: Y
    });
    c.on("zoom", G);
    const q = zN({
      zoomPanValues: u,
      panOnDrag: b,
      panOnScroll: A,
      onPaneContextMenu: B,
      onPanZoomEnd: l,
      onDraggingChange: a
    });
    c.on("end", q);
    const ne = BN({
      zoomActivationKeyPressed: H,
      panOnDrag: b,
      zoomOnScroll: j,
      panOnScroll: A,
      zoomOnDoubleClick: R,
      zoomOnPinch: z,
      userSelectionActive: N,
      noPanClassName: P,
      noWheelClassName: C,
      lib: U,
      connectionInProgress: J
    });
    c.filter(ne), R ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null);
  }
  function h() {
    c.on("zoom", null);
  }
  async function m(C, P, B) {
    const N = Za(C), A = c == null ? void 0 : c.constrain()(N, P, B);
    return A && await v(A), A;
  }
  async function g(C, P) {
    const B = Za(C);
    return await v(B, P), B;
  }
  function x(C) {
    if (f) {
      const P = Za(C), B = f.property("__zoom");
      (B.k !== C.zoom || B.x !== C.x || B.y !== C.y) && (c == null || c.transform(f, P, null, { sync: !0 }));
    }
  }
  function S() {
    const C = f ? My(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: C.x, y: C.y, zoom: C.k };
  }
  async function k(C, P) {
    return f ? new Promise((B) => {
      c == null || c.interpolate((P == null ? void 0 : P.interpolate) === "linear" ? Qi : Bo).scaleTo(eu(f, P == null ? void 0 : P.duration, P == null ? void 0 : P.ease, () => B(!0)), C);
    }) : !1;
  }
  async function E(C, P) {
    return f ? new Promise((B) => {
      c == null || c.interpolate((P == null ? void 0 : P.interpolate) === "linear" ? Qi : Bo).scaleBy(eu(f, P == null ? void 0 : P.duration, P == null ? void 0 : P.ease, () => B(!0)), C);
    }) : !1;
  }
  function _(C) {
    c == null || c.scaleExtent(C);
  }
  function M(C) {
    c == null || c.translateExtent(C);
  }
  function $(C) {
    const P = !Et(C) || C < 0 ? 0 : C;
    c == null || c.clickDistance(P);
  }
  return {
    update: w,
    destroy: h,
    setViewport: g,
    setViewportConstrained: m,
    getViewport: S,
    scaleTo: k,
    scaleBy: E,
    setScaleExtent: _,
    setTranslateExtent: M,
    syncViewport: x,
    setClickDistance: $
  };
}
var si;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(si || (si = {}));
function VN({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: i, affectsY: s }) {
  const o = e - t, l = n - r, a = [o > 0 ? 1 : o < 0 ? -1 : 0, l > 0 ? 1 : l < 0 ? -1 : 0];
  return o && i && (a[0] = a[0] * -1), l && s && (a[1] = a[1] * -1), a;
}
function Yh(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), r = e.includes("left"), i = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: i
  };
}
function un(e, t) {
  return Math.max(0, t - e);
}
function cn(e, t) {
  return Math.max(0, e - t);
}
function yo(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Xh(e, t) {
  return e ? !t : t;
}
function HN(e, t, n, r, i, s, o, l) {
  let { affectsX: a, affectsY: u } = t;
  const { isHorizontal: d, isVertical: c } = t, f = d && c, { xSnapped: p, ySnapped: y } = n, { minWidth: v, maxWidth: w, minHeight: h, maxHeight: m } = r, { x: g, y: x, width: S, height: k, aspectRatio: E } = e;
  let _ = Math.floor(d ? p - e.pointerX : 0), M = Math.floor(c ? y - e.pointerY : 0);
  const $ = S + (a ? -_ : _), C = k + (u ? -M : M), P = -s[0] * S, B = -s[1] * k;
  let N = yo($, v, w), A = yo(C, h, m);
  if (o) {
    let T = 0, I = 0;
    a && _ < 0 ? T = un(g + _ + P, o[0][0]) : !a && _ > 0 && (T = cn(g + $ + P, o[1][0])), u && M < 0 ? I = un(x + M + B, o[0][1]) : !u && M > 0 && (I = cn(x + C + B, o[1][1])), N = Math.max(N, T), A = Math.max(A, I);
  }
  if (l) {
    let T = 0, I = 0;
    a && _ > 0 ? T = cn(g + _, l[0][0]) : !a && _ < 0 && (T = un(g + $, l[1][0])), u && M > 0 ? I = cn(x + M, l[0][1]) : !u && M < 0 && (I = un(x + C, l[1][1])), N = Math.max(N, T), A = Math.max(A, I);
  }
  if (i) {
    if (d) {
      const T = yo($ / E, h, m) * E;
      if (N = Math.max(N, T), o) {
        let I = 0;
        !a && !u || a && !u && f ? I = cn(x + B + $ / E, o[1][1]) * E : I = un(x + B + (a ? _ : -_) / E, o[0][1]) * E, N = Math.max(N, I);
      }
      if (l) {
        let I = 0;
        !a && !u || a && !u && f ? I = un(x + $ / E, l[1][1]) * E : I = cn(x + (a ? _ : -_) / E, l[0][1]) * E, N = Math.max(N, I);
      }
    }
    if (c) {
      const T = yo(C * E, v, w) / E;
      if (A = Math.max(A, T), o) {
        let I = 0;
        !a && !u || u && !a && f ? I = cn(g + C * E + P, o[1][0]) / E : I = un(g + (u ? M : -M) * E + P, o[0][0]) / E, A = Math.max(A, I);
      }
      if (l) {
        let I = 0;
        !a && !u || u && !a && f ? I = un(g + C * E, l[1][0]) / E : I = cn(g + (u ? M : -M) * E, l[0][0]) / E, A = Math.max(A, I);
      }
    }
  }
  M = M + (M < 0 ? A : -A), _ = _ + (_ < 0 ? N : -N), i && (f ? $ > C * E ? M = (Xh(a, u) ? -_ : _) / E : _ = (Xh(a, u) ? -M : M) * E : d ? (M = _ / E, u = a) : (_ = M * E, a = u));
  const b = a ? g + _ : g, D = u ? x + M : x;
  return {
    width: S + (a ? -_ : _),
    height: k + (u ? -M : M),
    x: s[0] * _ * (a ? -1 : 1) + b,
    y: s[1] * M * (u ? -1 : 1) + D
  };
}
const s0 = { width: 0, height: 0, x: 0, y: 0 }, UN = {
  ...s0,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function KN(e, t, n) {
  const r = t.position.x + e.position.x, i = t.position.y + e.position.y, s = e.measured.width ?? 0, o = e.measured.height ?? 0, l = n[0] * s, a = n[1] * o;
  return [
    [r - l, i - a],
    [r + s - l, i + o - a]
  ];
}
function WN({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: i }) {
  const s = Je(e);
  let o = {
    controlDirection: Yh("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function l({ controlPosition: u, boundaries: d, keepAspectRatio: c, resizeDirection: f, onResizeStart: p, onResize: y, onResizeEnd: v, shouldResize: w }) {
    let h = { ...s0 }, m = { ...UN };
    o = {
      boundaries: d,
      resizeDirection: f,
      keepAspectRatio: c,
      controlDirection: Yh(u)
    };
    let g, x = null, S = [], k, E, _, M = !1;
    const $ = py().on("start", (C) => {
      const { nodeLookup: P, transform: B, snapGrid: N, snapToGrid: A, nodeOrigin: b, paneDomNode: D } = n();
      if (g = P.get(t), !g)
        return;
      x = (D == null ? void 0 : D.getBoundingClientRect()) ?? null;
      const { xSnapped: T, ySnapped: I } = qi(C.sourceEvent, {
        transform: B,
        snapGrid: N,
        snapToGrid: A,
        containerBounds: x
      });
      h = {
        width: g.measured.width ?? 0,
        height: g.measured.height ?? 0,
        x: g.position.x ?? 0,
        y: g.position.y ?? 0
      }, m = {
        ...h,
        pointerX: T,
        pointerY: I,
        aspectRatio: h.width / h.height
      }, k = void 0, E = ar(g.extent) ? g.extent : void 0, g.parentId && (g.extent === "parent" || g.expandParent) && (k = P.get(g.parentId)), k && g.extent === "parent" && (E = [
        [0, 0],
        [k.measured.width, k.measured.height]
      ]), S = [], _ = void 0;
      for (const [z, j] of P)
        if (j.parentId === t && (S.push({
          id: z,
          position: { ...j.position },
          extent: j.extent
        }), j.extent === "parent" || j.expandParent)) {
          const R = KN(j, g, j.origin ?? b);
          _ ? _ = [
            [Math.min(R[0][0], _[0][0]), Math.min(R[0][1], _[0][1])],
            [Math.max(R[1][0], _[1][0]), Math.max(R[1][1], _[1][1])]
          ] : _ = R;
        }
      p == null || p(C, { ...h });
    }).on("drag", (C) => {
      const { transform: P, snapGrid: B, snapToGrid: N, nodeOrigin: A } = n(), b = qi(C.sourceEvent, {
        transform: P,
        snapGrid: B,
        snapToGrid: N,
        containerBounds: x
      }), D = [];
      if (!g)
        return;
      const { x: T, y: I, width: z, height: j } = h, R = {}, H = g.origin ?? A, { width: U, height: Y, x: J, y: Q } = HN(m, o.controlDirection, b, o.boundaries, o.keepAspectRatio, H, E, _), F = U !== z, K = Y !== j, ee = J !== T && F, Z = Q !== I && K;
      if (!ee && !Z && !F && !K)
        return;
      if ((ee || Z || H[0] === 1 || H[1] === 1) && (R.x = ee ? J : h.x, R.y = Z ? Q : h.y, h.x = R.x, h.y = R.y, S.length > 0)) {
        const oe = J - T, le = Q - I;
        for (const xe of S)
          xe.position = {
            x: xe.position.x - oe + H[0] * (U - z),
            y: xe.position.y - le + H[1] * (Y - j)
          }, D.push(xe);
      }
      if ((F || K) && (R.width = F && (!o.resizeDirection || o.resizeDirection === "horizontal") ? U : h.width, R.height = K && (!o.resizeDirection || o.resizeDirection === "vertical") ? Y : h.height, h.width = R.width, h.height = R.height), k && g.expandParent) {
        const oe = H[0] * (R.width ?? 0);
        R.x && R.x < oe && (h.x = oe, m.x = m.x - (R.x - oe));
        const le = H[1] * (R.height ?? 0);
        R.y && R.y < le && (h.y = le, m.y = m.y - (R.y - le));
      }
      const G = VN({
        width: h.width,
        prevWidth: z,
        height: h.height,
        prevHeight: j,
        affectsX: o.controlDirection.affectsX,
        affectsY: o.controlDirection.affectsY
      }), q = { ...h, direction: G };
      (w == null ? void 0 : w(C, q)) !== !1 && (M = !0, y == null || y(C, q), r(R, D));
    }).on("end", (C) => {
      M && (v == null || v(C, { ...h }), i == null || i({ ...h }), M = !1);
    });
    s.call($);
  }
  function a() {
    s.on(".drag", null);
  }
  return {
    update: l,
    destroy: a
  };
}
var o0 = { exports: {} }, l0 = {}, a0 = { exports: {} }, u0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi = O;
function YN(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var XN = typeof Object.is == "function" ? Object.is : YN, QN = oi.useState, qN = oi.useEffect, GN = oi.useLayoutEffect, JN = oi.useDebugValue;
function ZN(e, t) {
  var n = t(), r = QN({ inst: { value: n, getSnapshot: t } }), i = r[0].inst, s = r[1];
  return GN(
    function() {
      i.value = n, i.getSnapshot = t, tu(i) && s({ inst: i });
    },
    [e, n, t]
  ), qN(
    function() {
      return tu(i) && s({ inst: i }), e(function() {
        tu(i) && s({ inst: i });
      });
    },
    [e]
  ), JN(n), n;
}
function tu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !XN(e, n);
  } catch {
    return !0;
  }
}
function e2(e, t) {
  return t();
}
var t2 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? e2 : ZN;
u0.useSyncExternalStore = oi.useSyncExternalStore !== void 0 ? oi.useSyncExternalStore : t2;
a0.exports = u0;
var n2 = a0.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra = O, r2 = n2;
function i2(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var s2 = typeof Object.is == "function" ? Object.is : i2, o2 = r2.useSyncExternalStore, l2 = ra.useRef, a2 = ra.useEffect, u2 = ra.useMemo, c2 = ra.useDebugValue;
l0.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
  var s = l2(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = u2(
    function() {
      function a(p) {
        if (!u) {
          if (u = !0, d = p, p = r(p), i !== void 0 && o.hasValue) {
            var y = o.value;
            if (i(y, p))
              return c = y;
          }
          return c = p;
        }
        if (y = c, s2(d, p)) return y;
        var v = r(p);
        return i !== void 0 && i(y, v) ? (d = p, y) : (d = p, c = v);
      }
      var u = !1, d, c, f = n === void 0 ? null : n;
      return [
        function() {
          return a(t());
        },
        f === null ? void 0 : function() {
          return a(f());
        }
      ];
    },
    [t, n, r, i]
  );
  var l = o2(e, s[0], s[1]);
  return a2(
    function() {
      o.hasValue = !0, o.value = l;
    },
    [l]
  ), c2(l), l;
};
o0.exports = l0;
var f2 = o0.exports;
const d2 = /* @__PURE__ */ Fp(f2), h2 = {}, Qh = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, c) => {
    const f = typeof d == "function" ? d(t) : d;
    if (!Object.is(f, t)) {
      const p = t;
      t = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((y) => y(t, p));
    }
  }, i = () => t, a = { setState: r, getState: i, getInitialState: () => u, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (h2 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, u = t = e(r, i, a);
  return a;
}, p2 = (e) => e ? Qh(e) : Qh, { useDebugValue: g2 } = Qn, { useSyncExternalStoreWithSelector: m2 } = d2, y2 = (e) => e;
function c0(e, t = y2, n) {
  const r = m2(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return g2(r), r;
}
const qh = (e, t) => {
  const n = p2(e), r = (i, s = t) => c0(n, i, s);
  return Object.assign(r, n), r;
}, v2 = (e, t) => e ? qh(e, t) : qh;
function pe(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, i] of e)
      if (!Object.is(i, t.get(r)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e)
      if (!t.has(r))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
const ia = O.createContext(null), w2 = ia.Provider, f0 = Mt.error001("react");
function ie(e, t) {
  const n = O.useContext(ia);
  if (n === null)
    throw new Error(f0);
  return c0(n, e, t);
}
function ge() {
  const e = O.useContext(ia);
  if (e === null)
    throw new Error(f0);
  return O.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const Gh = { display: "none" }, x2 = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, d0 = "react-flow__node-desc", h0 = "react-flow__edge-desc", S2 = "react-flow__aria-live", k2 = (e) => e.ariaLiveMessage, E2 = (e) => e.ariaLabelConfig;
function _2({ rfId: e }) {
  const t = ie(k2);
  return L.jsx("div", { id: `${S2}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: x2, children: t });
}
function N2({ rfId: e, disableKeyboardA11y: t }) {
  const n = ie(E2);
  return L.jsxs(L.Fragment, { children: [L.jsx("div", { id: `${d0}-${e}`, style: Gh, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), L.jsx("div", { id: `${h0}-${e}`, style: Gh, children: n["edge.a11yDescription.default"] }), !t && L.jsx(_2, { rfId: e })] });
}
const sa = O.forwardRef(({ position: e = "top-left", children: t, className: n, style: r, ...i }, s) => {
  const o = `${e}`.split("-");
  return L.jsx("div", { className: Ce(["react-flow__panel", n, ...o]), style: r, ref: s, ...i, children: t });
});
sa.displayName = "Panel";
const Jh = "https://reactflow.dev?utm_source=attribution";
function C2({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : L.jsx(sa, { position: t, className: "react-flow__attribution", "data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${Jh}`, children: L.jsx("a", { href: Jh, target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const b2 = (e) => {
  const t = [], n = [];
  for (const [, r] of e.nodeLookup)
    r.selected && t.push(r.internals.userNode);
  for (const [, r] of e.edgeLookup)
    r.selected && n.push(r);
  return { selectedNodes: t, selectedEdges: n };
}, vo = (e) => e.id;
function M2(e, t) {
  return pe(e.selectedNodes.map(vo), t.selectedNodes.map(vo)) && pe(e.selectedEdges.map(vo), t.selectedEdges.map(vo));
}
function T2({ onSelectionChange: e }) {
  const t = ge(), { selectedNodes: n, selectedEdges: r } = ie(b2, M2);
  return O.useEffect(() => {
    const i = { nodes: n, edges: r };
    e == null || e(i), t.getState().onSelectionChangeHandlers.forEach((s) => s(i));
  }, [n, r, e]), null;
}
const I2 = (e) => !!e.onSelectionChangeHandlers;
function A2({ onSelectionChange: e }) {
  const t = ie(I2);
  return e || t ? L.jsx(T2, { onSelectionChange: e }) : null;
}
const p0 = [0, 0], L2 = { x: 0, y: 0, zoom: 1 }, $2 = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig",
  "zIndexMode"
], Zh = [...$2, "rfId"], P2 = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), ep = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Ss,
  nodeOrigin: p0,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function O2(e) {
  const { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: i, setTranslateExtent: s, setNodeExtent: o, reset: l, setDefaultNodesAndEdges: a } = ie(P2, pe), u = ge();
  O.useEffect(() => (a(e.defaultNodes, e.defaultEdges), () => {
    d.current = ep, l();
  }), []);
  const d = O.useRef(ep);
  return O.useEffect(
    () => {
      for (const c of Zh) {
        const f = e[c], p = d.current[c];
        f !== p && (typeof e[c] > "u" || (c === "nodes" ? t(f) : c === "edges" ? n(f) : c === "minZoom" ? r(f) : c === "maxZoom" ? i(f) : c === "translateExtent" ? s(f) : c === "nodeExtent" ? o(f) : c === "ariaLabelConfig" ? u.setState({ ariaLabelConfig: sN(f) }) : c === "fitView" ? u.setState({ fitViewQueued: f }) : c === "fitViewOptions" ? u.setState({ fitViewOptions: f }) : u.setState({ [c]: f })));
      }
      d.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    Zh.map((c) => e[c])
  ), null;
}
function tp() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function D2(e) {
  var r;
  const [t, n] = O.useState(e === "system" ? null : e);
  return O.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const i = tp(), s = () => n(i != null && i.matches ? "dark" : "light");
    return s(), i == null || i.addEventListener("change", s), () => {
      i == null || i.removeEventListener("change", s);
    };
  }, [e]), t !== null ? t : (r = tp()) != null && r.matches ? "dark" : "light";
}
const np = typeof document < "u" ? document : null;
function Cs(e = null, t = { target: np, actInsideInputWithModifier: !0 }) {
  const [n, r] = O.useState(!1), i = O.useRef(!1), s = O.useRef(/* @__PURE__ */ new Set([])), [o, l] = O.useMemo(() => {
    if (e !== null) {
      const u = (Array.isArray(e) ? e : [e]).filter((c) => typeof c == "string").map((c) => c.replace("+", `
`).replace(`

`, `
+`).split(`
`)), d = u.reduce((c, f) => c.concat(...f), []);
      return [u, d];
    }
    return [[], []];
  }, [e]);
  return O.useEffect(() => {
    const a = (t == null ? void 0 : t.target) ?? np, u = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const d = (p) => {
        var w, h;
        if (i.current = p.ctrlKey || p.metaKey || p.shiftKey || p.altKey, (!i.current || i.current && !u) && Hy(p))
          return !1;
        const v = ip(p.code, l);
        if (s.current.add(p[v]), rp(o, s.current, !1)) {
          const m = ((h = (w = p.composedPath) == null ? void 0 : w.call(p)) == null ? void 0 : h[0]) || p.target, g = (m == null ? void 0 : m.nodeName) === "BUTTON" || (m == null ? void 0 : m.nodeName) === "A";
          t.preventDefault !== !1 && (i.current || !g) && p.preventDefault(), r(!0);
        }
      }, c = (p) => {
        const y = ip(p.code, l);
        rp(o, s.current, !0) ? (r(!1), s.current.clear()) : s.current.delete(p[y]), p.key === "Meta" && s.current.clear(), i.current = !1;
      }, f = () => {
        s.current.clear(), r(!1);
      };
      return a == null || a.addEventListener("keydown", d), a == null || a.addEventListener("keyup", c), window.addEventListener("blur", f), window.addEventListener("contextmenu", f), () => {
        a == null || a.removeEventListener("keydown", d), a == null || a.removeEventListener("keyup", c), window.removeEventListener("blur", f), window.removeEventListener("contextmenu", f);
      };
    }
  }, [e, r]), n;
}
function rp(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((i) => t.has(i)));
}
function ip(e, t) {
  return t.includes(e) ? "code" : "key";
}
const j2 = () => {
  const e = ge();
  return O.useMemo(() => ({
    zoomIn: async (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1.2, t) : !1;
    },
    zoomOut: async (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1 / 1.2, t) : !1;
    },
    zoomTo: async (t, n) => {
      const { panZoom: r } = e.getState();
      return r ? r.scaleTo(t, n) : !1;
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, n) => {
      const { transform: [r, i, s], panZoom: o } = e.getState();
      return o ? (await o.setViewport({
        x: t.x ?? r,
        y: t.y ?? i,
        zoom: t.zoom ?? s
      }, n), !0) : !1;
    },
    getViewport: () => {
      const [t, n, r] = e.getState().transform;
      return { x: t, y: n, zoom: r };
    },
    setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
    fitBounds: async (t, n) => {
      const { width: r, height: i, minZoom: s, maxZoom: o, panZoom: l } = e.getState(), a = Af(t, r, i, s, o, (n == null ? void 0 : n.padding) ?? 0.1);
      return l ? (await l.setViewport(a, {
        duration: n == null ? void 0 : n.duration,
        ease: n == null ? void 0 : n.ease,
        interpolate: n == null ? void 0 : n.interpolate
      }), !0) : !1;
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: r, snapGrid: i, snapToGrid: s, domNode: o } = e.getState();
      if (!o)
        return t;
      const { x: l, y: a } = o.getBoundingClientRect(), u = {
        x: t.x - l,
        y: t.y - a
      }, d = n.snapGrid ?? i, c = n.snapToGrid ?? s;
      return Bs(u, r, c, d);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: r } = e.getState();
      if (!r)
        return t;
      const { x: i, y: s } = r.getBoundingClientRect(), o = ii(t, n);
      return {
        x: o.x + i,
        y: o.y + s
      };
    }
  }), []);
};
function g0(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), i = [];
  for (const s of e)
    if (s.type === "add") {
      i.push(s);
      continue;
    } else if (s.type === "remove" || s.type === "replace")
      r.set(s.id, [s]);
    else {
      const o = r.get(s.id);
      o ? o.push(s) : r.set(s.id, [s]);
    }
  for (const s of t) {
    const o = r.get(s.id);
    if (!o) {
      n.push(s);
      continue;
    }
    if (o[0].type === "remove")
      continue;
    if (o[0].type === "replace") {
      n.push({ ...o[0].item });
      continue;
    }
    const l = { ...s };
    for (const a of o)
      R2(a, l);
    n.push(l);
  }
  return i.length && i.forEach((s) => {
    s.index !== void 0 ? n.splice(s.index, 0, { ...s.item }) : n.push({ ...s.item });
  }), n;
}
function R2(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      typeof e.position < "u" && (t.position = e.position), typeof e.dragging < "u" && (t.dragging = e.dragging);
      break;
    }
    case "dimensions": {
      typeof e.dimensions < "u" && (t.measured = {
        ...e.dimensions
      }, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
      break;
    }
  }
}
function z2(e, t) {
  return g0(e, t);
}
function B2(e, t) {
  return g0(e, t);
}
function Fn(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Lr(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [i, s] of e) {
    const o = t.has(i);
    !(s.selected === void 0 && !o) && s.selected !== o && (n && (s.selected = o), r.push(Fn(s.id, o)));
  }
  return r;
}
function sp({ items: e = [], lookup: t }) {
  var i;
  const n = [], r = new Map(e.map((s) => [s.id, s]));
  for (const [s, o] of e.entries()) {
    const l = t.get(o.id), a = ((i = l == null ? void 0 : l.internals) == null ? void 0 : i.userNode) ?? l;
    a !== void 0 && a !== o && n.push({ id: o.id, item: o, type: "replace" }), a === void 0 && n.push({ item: o, type: "add", index: s });
  }
  for (const [s] of t)
    r.get(s) === void 0 && n.push({ id: s, type: "remove" });
  return n;
}
function op(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const F2 = zy();
function V2(e, t, n = {}) {
  return fN(e, t, {
    ...n,
    onError: n.onError ?? F2
  });
}
const lp = (e) => q_(e), H2 = (e) => Py(e);
function m0(e) {
  return O.forwardRef(e);
}
const U2 = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
function ap(e) {
  const [t, n] = O.useState(BigInt(0)), [r] = O.useState(() => K2(() => n((i) => i + BigInt(1))));
  return U2(() => {
    const i = r.get();
    i.length && (e(i), r.reset());
  }, [t]), r;
}
function K2(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    }
  };
}
const y0 = O.createContext(null);
function W2({ children: e }) {
  const t = ge(), n = O.useCallback((l) => {
    const { nodes: a = [], setNodes: u, hasDefaultNodes: d, onNodesChange: c, nodeLookup: f, fitViewQueued: p, onNodesChangeMiddlewareMap: y } = t.getState();
    let v = a;
    for (const h of l)
      v = typeof h == "function" ? h(v) : h;
    let w = sp({
      items: v,
      lookup: f
    });
    for (const h of y.values())
      w = h(w);
    d && u(v), w.length > 0 ? c == null || c(w) : p && window.requestAnimationFrame(() => {
      const { fitViewQueued: h, nodes: m, setNodes: g } = t.getState();
      h && g(m);
    });
  }, []), r = ap(n), i = O.useCallback((l) => {
    const { edges: a = [], setEdges: u, hasDefaultEdges: d, onEdgesChange: c, edgeLookup: f } = t.getState();
    let p = a;
    for (const y of l)
      p = typeof y == "function" ? y(p) : y;
    d ? u(p) : c && c(sp({
      items: p,
      lookup: f
    }));
  }, []), s = ap(i), o = O.useMemo(() => ({ nodeQueue: r, edgeQueue: s }), []);
  return L.jsx(y0.Provider, { value: o, children: e });
}
function Y2() {
  const e = O.useContext(y0);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const X2 = (e) => !!e.panZoom;
function oa() {
  const e = j2(), t = ge(), n = Y2(), r = ie(X2), i = O.useMemo(() => {
    const s = (c) => t.getState().nodeLookup.get(c), o = (c) => {
      n.nodeQueue.push(c);
    }, l = (c) => {
      n.edgeQueue.push(c);
    }, a = (c) => {
      var h, m;
      const { nodeLookup: f, nodeOrigin: p } = t.getState(), y = lp(c) ? c : f.get(c.id), v = y.parentId ? Fy(y.position, y.measured, y.parentId, f, p) : y.position, w = {
        ...y,
        position: v,
        width: ((h = y.measured) == null ? void 0 : h.width) ?? y.width,
        height: ((m = y.measured) == null ? void 0 : m.height) ?? y.height
      };
      return _s(w);
    }, u = (c, f, p = { replace: !1 }) => {
      o((y) => y.map((v) => {
        if (v.id === c) {
          const w = typeof f == "function" ? f(v) : f;
          return p.replace && lp(w) ? w : { ...v, ...w };
        }
        return v;
      }));
    }, d = (c, f, p = { replace: !1 }) => {
      l((y) => y.map((v) => {
        if (v.id === c) {
          const w = typeof f == "function" ? f(v) : f;
          return p.replace && H2(w) ? w : { ...v, ...w };
        }
        return v;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((c) => ({ ...c })),
      getNode: (c) => {
        var f;
        return (f = s(c)) == null ? void 0 : f.internals.userNode;
      },
      getInternalNode: s,
      getEdges: () => {
        const { edges: c = [] } = t.getState();
        return c.map((f) => ({ ...f }));
      },
      getEdge: (c) => t.getState().edgeLookup.get(c),
      setNodes: o,
      setEdges: l,
      addNodes: (c) => {
        const f = Array.isArray(c) ? c : [c];
        n.nodeQueue.push((p) => [...p, ...f]);
      },
      addEdges: (c) => {
        const f = Array.isArray(c) ? c : [c];
        n.edgeQueue.push((p) => [...p, ...f]);
      },
      toObject: () => {
        const { nodes: c = [], edges: f = [], transform: p } = t.getState(), [y, v, w] = p;
        return {
          nodes: c.map((h) => ({ ...h })),
          edges: f.map((h) => ({ ...h })),
          viewport: {
            x: y,
            y: v,
            zoom: w
          }
        };
      },
      deleteElements: async ({ nodes: c = [], edges: f = [] }) => {
        const { nodes: p, edges: y, onNodesDelete: v, onEdgesDelete: w, triggerNodeChanges: h, triggerEdgeChanges: m, onDelete: g, onBeforeDelete: x } = t.getState(), { nodes: S, edges: k } = await tN({
          nodesToRemove: c,
          edgesToRemove: f,
          nodes: p,
          edges: y,
          onBeforeDelete: x
        }), E = k.length > 0, _ = S.length > 0;
        if (E) {
          const M = k.map(op);
          w == null || w(k), m(M);
        }
        if (_) {
          const M = S.map(op);
          v == null || v(S), h(M);
        }
        return (_ || E) && (g == null || g({ nodes: S, edges: k })), { deletedNodes: S, deletedEdges: k };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (c, f = !0, p) => {
        const y = Dh(c), v = y ? c : a(c), w = p !== void 0;
        return v ? (p || t.getState().nodes).filter((h) => {
          const m = t.getState().nodeLookup.get(h.id);
          if (m && !y && (h.id === c.id || !m.internals.positionAbsolute))
            return !1;
          const g = _s(w ? h : m), x = bl(g, v);
          return f && x > 0 || x >= g.width * g.height || x >= v.width * v.height;
        }) : [];
      },
      isNodeIntersecting: (c, f, p = !0) => {
        const v = Dh(c) ? c : a(c);
        if (!v)
          return !1;
        const w = bl(v, f);
        return p && w > 0 || w >= f.width * f.height || w >= v.width * v.height;
      },
      updateNode: u,
      updateNodeData: (c, f, p = { replace: !1 }) => {
        u(c, (y) => {
          const v = typeof f == "function" ? f(y) : f;
          return p.replace ? { ...y, data: v } : { ...y, data: { ...y.data, ...v } };
        }, p);
      },
      updateEdge: d,
      updateEdgeData: (c, f, p = { replace: !1 }) => {
        d(c, (y) => {
          const v = typeof f == "function" ? f(y) : f;
          return p.replace ? { ...y, data: v } : { ...y, data: { ...y.data, ...v } };
        }, p);
      },
      getNodesBounds: (c) => {
        const { nodeLookup: f, nodeOrigin: p } = t.getState();
        return G_(c, { nodeLookup: f, nodeOrigin: p });
      },
      getHandleConnections: ({ type: c, id: f, nodeId: p }) => {
        var y;
        return Array.from(((y = t.getState().connectionLookup.get(`${p}-${c}${f ? `-${f}` : ""}`)) == null ? void 0 : y.values()) ?? []);
      },
      getNodeConnections: ({ type: c, handleId: f, nodeId: p }) => {
        var y;
        return Array.from(((y = t.getState().connectionLookup.get(`${p}${c ? f ? `-${c}-${f}` : `-${c}` : ""}`)) == null ? void 0 : y.values()) ?? []);
      },
      fitView: async (c) => {
        const f = t.getState().fitViewResolver ?? iN();
        return t.setState({ fitViewQueued: !0, fitViewOptions: c, fitViewResolver: f }), n.nodeQueue.push((p) => [...p]), f.promise;
      }
    };
  }, []);
  return O.useMemo(() => ({
    ...i,
    ...e,
    viewportInitialized: r
  }), [r]);
}
const up = (e) => e.selected, Q2 = typeof window < "u" ? window : void 0;
function q2({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = ge(), { deleteElements: r } = oa(), i = Cs(e, { actInsideInputWithModifier: !1 }), s = Cs(t, { target: Q2 });
  O.useEffect(() => {
    if (i) {
      const { edges: o, nodes: l } = n.getState();
      r({ nodes: l.filter(up), edges: o.filter(up) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [i]), O.useEffect(() => {
    n.setState({ multiSelectionActive: s });
  }, [s]);
}
function G2(e) {
  const t = ge();
  O.useEffect(() => {
    const n = () => {
      var i, s, o, l;
      if (!e.current || !(((s = (i = e.current).checkVisibility) == null ? void 0 : s.call(i)) ?? !0))
        return !1;
      const r = Lf(e.current);
      (r.height === 0 || r.width === 0) && ((l = (o = t.getState()).onError) == null || l.call(o, "004", Mt.error004())), t.setState({ width: r.width || 500, height: r.height || 500 });
    };
    if (e.current) {
      n(), window.addEventListener("resize", n);
      const r = new ResizeObserver(() => n());
      return r.observe(e.current), () => {
        window.removeEventListener("resize", n), r && e.current && r.unobserve(e.current);
      };
    }
  }, []);
}
const la = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, J2 = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function Z2({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: i = 0.5, panOnScrollMode: s = Zn.Free, zoomOnDoubleClick: o = !0, panOnDrag: l = !0, defaultViewport: a, translateExtent: u, minZoom: d, maxZoom: c, zoomActivationKeyCode: f, preventScrolling: p = !0, children: y, noWheelClassName: v, noPanClassName: w, onViewportChange: h, isControlledViewport: m, paneClickDistance: g, selectionOnDrag: x }) {
  const S = ge(), k = O.useRef(null), { userSelectionActive: E, lib: _, connectionInProgress: M } = ie(J2, pe), $ = Cs(f), C = O.useRef();
  G2(k);
  const P = O.useCallback((B) => {
    h == null || h({ x: B[0], y: B[1], zoom: B[2] }), m || S.setState({ transform: B });
  }, [h, m]);
  return O.useEffect(() => {
    if (k.current) {
      C.current = FN({
        domNode: k.current,
        minZoom: d,
        maxZoom: c,
        translateExtent: u,
        viewport: a,
        onDraggingChange: (b) => S.setState((D) => D.paneDragging === b ? D : { paneDragging: b }),
        onPanZoomStart: (b, D) => {
          const { onViewportChangeStart: T, onMoveStart: I } = S.getState();
          I == null || I(b, D), T == null || T(D);
        },
        onPanZoom: (b, D) => {
          const { onViewportChange: T, onMove: I } = S.getState();
          I == null || I(b, D), T == null || T(D);
        },
        onPanZoomEnd: (b, D) => {
          const { onViewportChangeEnd: T, onMoveEnd: I } = S.getState();
          I == null || I(b, D), T == null || T(D);
        }
      });
      const { x: B, y: N, zoom: A } = C.current.getViewport();
      return S.setState({
        panZoom: C.current,
        transform: [B, N, A],
        domNode: k.current.closest(".react-flow")
      }), () => {
        var b;
        (b = C.current) == null || b.destroy();
      };
    }
  }, []), O.useEffect(() => {
    var B;
    (B = C.current) == null || B.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: r,
      panOnScrollSpeed: i,
      panOnScrollMode: s,
      zoomOnDoubleClick: o,
      panOnDrag: l,
      zoomActivationKeyPressed: $,
      preventScrolling: p,
      noPanClassName: w,
      userSelectionActive: E,
      noWheelClassName: v,
      lib: _,
      onTransformChange: P,
      connectionInProgress: M,
      selectionOnDrag: x,
      paneClickDistance: g
    });
  }, [
    e,
    t,
    n,
    r,
    i,
    s,
    o,
    l,
    $,
    p,
    w,
    E,
    v,
    _,
    P,
    M,
    x,
    g
  ]), L.jsx("div", { className: "react-flow__renderer", ref: k, style: la, children: y });
}
const eC = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function tC() {
  const { userSelectionActive: e, userSelectionRect: t } = ie(eC, pe);
  return e && t ? L.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const nu = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, nC = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  dragging: e.paneDragging,
  panBy: e.panBy,
  autoPanSpeed: e.autoPanSpeed
});
function rC({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = ks.Full, panOnDrag: r, autoPanOnSelection: i, paneClickDistance: s, selectionOnDrag: o, onSelectionStart: l, onSelectionEnd: a, onPaneClick: u, onPaneContextMenu: d, onPaneScroll: c, onPaneMouseEnter: f, onPaneMouseMove: p, onPaneMouseLeave: y, children: v }) {
  const w = O.useRef(0), h = ge(), { userSelectionActive: m, elementsSelectable: g, dragging: x, panBy: S, autoPanSpeed: k } = ie(nC, pe), E = g && (e || m), _ = O.useRef(null), M = O.useRef(), $ = O.useRef(/* @__PURE__ */ new Set()), C = O.useRef(/* @__PURE__ */ new Set()), P = O.useRef(!1), B = O.useRef(!1), N = O.useRef({ x: 0, y: 0 }), A = O.useRef(!1), b = (F) => {
    if (B.current || P.current || h.getState().connection.inProgress) {
      B.current = !1, P.current = !1;
      return;
    }
    u == null || u(F), h.getState().resetSelectedElements(), h.setState({ nodesSelectionActive: !1 });
  }, D = (F) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      F.preventDefault();
      return;
    }
    d == null || d(F);
  }, T = c ? (F) => c(F) : void 0, I = (F) => {
    B.current && (F.stopPropagation(), B.current = !1);
  }, z = (F) => {
    var xe, st;
    const { domNode: K, transform: ee } = h.getState();
    if (M.current = K == null ? void 0 : K.getBoundingClientRect(), !M.current)
      return;
    const Z = F.target === _.current;
    if (!Z && !!F.target.closest(".nokey") || !e || !(o && Z || t) || F.button !== 0 || !F.isPrimary)
      return;
    (st = (xe = F.target) == null ? void 0 : xe.setPointerCapture) == null || st.call(xe, F.pointerId), B.current = !1;
    const { x: ne, y: oe } = _t(F.nativeEvent, M.current), le = Bs({ x: ne, y: oe }, ee);
    h.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: le.x,
        startY: le.y,
        x: ne,
        y: oe
      }
    }), Z || (F.stopPropagation(), F.preventDefault());
  };
  function j(F, K) {
    const { userSelectionRect: ee } = h.getState();
    if (!ee)
      return;
    const { transform: Z, nodeLookup: G, edgeLookup: q, connectionLookup: ne, triggerNodeChanges: oe, triggerEdgeChanges: le, defaultEdgeOptions: xe } = h.getState(), st = { x: ee.startX, y: ee.startY }, { x: At, y: Lt } = ii(st, Z), Vt = {
      startX: st.x,
      startY: st.y,
      x: F < At ? F : At,
      y: K < Lt ? K : Lt,
      width: Math.abs(F - At),
      height: Math.abs(K - Lt)
    }, vi = $.current, Dn = C.current;
    $.current = new Set(Tf(G, Vt, Z, n === ks.Partial, !0).map((gt) => gt.id)), C.current = /* @__PURE__ */ new Set();
    const jn = (xe == null ? void 0 : xe.selectable) ?? !0;
    for (const gt of $.current) {
      const Ht = ne.get(gt);
      if (Ht)
        for (const { edgeId: Ut } of Ht.values()) {
          const Rn = q.get(Ut);
          Rn && (Rn.selectable ?? jn) && C.current.add(Ut);
        }
    }
    if (!jh(vi, $.current)) {
      const gt = Lr(G, $.current, !0);
      oe(gt);
    }
    if (!jh(Dn, C.current)) {
      const gt = Lr(q, C.current);
      le(gt);
    }
    h.setState({
      userSelectionRect: Vt,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }
  function R() {
    if (!i || !M.current)
      return;
    const [F, K] = If(N.current, M.current, k);
    S({ x: F, y: K }).then((ee) => {
      if (!B.current || !ee) {
        w.current = requestAnimationFrame(R);
        return;
      }
      const { x: Z, y: G } = N.current;
      j(Z, G), w.current = requestAnimationFrame(R);
    });
  }
  const H = () => {
    cancelAnimationFrame(w.current), w.current = 0, A.current = !1;
  };
  O.useEffect(() => () => H(), []);
  const U = (F) => {
    const { userSelectionRect: K, transform: ee, resetSelectedElements: Z } = h.getState();
    if (!M.current || !K)
      return;
    const { x: G, y: q } = _t(F.nativeEvent, M.current);
    N.current = { x: G, y: q };
    const ne = ii({ x: K.startX, y: K.startY }, ee);
    if (!B.current) {
      const oe = t ? 0 : s;
      if (Math.hypot(G - ne.x, q - ne.y) <= oe)
        return;
      Z(), l == null || l(F);
    }
    B.current = !0, A.current || (R(), A.current = !0), j(G, q);
  }, Y = (F) => {
    var K, ee;
    if (!E) {
      F.target === _.current && h.getState().connection.inProgress && (P.current = !0);
      return;
    }
    F.button === 0 && ((ee = (K = F.target) == null ? void 0 : K.releasePointerCapture) == null || ee.call(K, F.pointerId), !m && F.target === _.current && h.getState().userSelectionRect && (b == null || b(F)), h.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), B.current && (a == null || a(F), h.setState({
      nodesSelectionActive: $.current.size > 0
    })), H());
  }, J = (F) => {
    var K, ee;
    (ee = (K = F.target) == null ? void 0 : K.releasePointerCapture) == null || ee.call(K, F.pointerId), H();
  }, Q = r === !0 || Array.isArray(r) && r.includes(0);
  return L.jsxs("div", { className: Ce(["react-flow__pane", { draggable: Q, dragging: x, selection: e }]), onClick: E ? void 0 : nu(b, _), onContextMenu: nu(D, _), onWheel: nu(T, _), onPointerEnter: E ? void 0 : f, onPointerMove: E ? U : p, onPointerUp: Y, onPointerCancel: E ? J : void 0, onPointerDownCapture: E ? z : void 0, onClickCapture: E ? I : void 0, onPointerLeave: y, ref: _, style: la, children: [v, L.jsx(tC, {})] });
}
function vc({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const { addSelectedNodes: i, unselectNodesAndEdges: s, multiSelectionActive: o, nodeLookup: l, onError: a } = t.getState(), u = l.get(e);
  if (!u) {
    a == null || a("012", Mt.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), u.selected ? (n || u.selected && o) && (s({ nodes: [u], edges: [] }), requestAnimationFrame(() => {
    var d;
    return (d = r == null ? void 0 : r.current) == null ? void 0 : d.blur();
  })) : i([e]);
}
function v0({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: i, isSelectable: s, nodeClickDistance: o }) {
  const l = ge(), [a, u] = O.useState(!1), d = O.useRef();
  return O.useEffect(() => {
    d.current = bN({
      getStoreItems: () => l.getState(),
      onNodeMouseDown: (c) => {
        vc({
          id: c,
          store: l,
          nodeRef: e
        });
      },
      onDragStart: () => {
        u(!0);
      },
      onDragStop: () => {
        u(!1);
      }
    });
  }, []), O.useEffect(() => {
    if (!(t || !e.current || !d.current))
      return d.current.update({
        noDragClassName: n,
        handleSelector: r,
        domNode: e.current,
        isSelectable: s,
        nodeId: i,
        nodeClickDistance: o
      }), () => {
        var c;
        (c = d.current) == null || c.destroy();
      };
  }, [n, r, t, s, e, i, o]), a;
}
const iC = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function w0() {
  const e = ge();
  return O.useCallback((n) => {
    const { nodeExtent: r, snapToGrid: i, snapGrid: s, nodesDraggable: o, onError: l, updateNodePositions: a, nodeLookup: u, nodeOrigin: d } = e.getState(), c = /* @__PURE__ */ new Map(), f = iC(o), p = i ? s[0] : 5, y = i ? s[1] : 5, v = n.direction.x * p * n.factor, w = n.direction.y * y * n.factor;
    for (const [, h] of u) {
      if (!f(h))
        continue;
      let m = {
        x: h.internals.positionAbsolute.x + v,
        y: h.internals.positionAbsolute.y + w
      };
      i && (m = zs(m, s));
      const { position: g, positionAbsolute: x } = Oy({
        nodeId: h.id,
        nextPosition: m,
        nodeLookup: u,
        nodeExtent: r,
        nodeOrigin: d,
        onError: l
      });
      h.position = g, h.internals.positionAbsolute = x, c.set(h.id, h);
    }
    a(c);
  }, []);
}
const Rf = O.createContext(null), sC = Rf.Provider;
Rf.Consumer;
const x0 = () => O.useContext(Rf), oC = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), S0 = O.createContext(null);
function lC({ children: e }) {
  const t = ie(oC, pe);
  return L.jsx(S0.Provider, { value: t, children: e });
}
function aC() {
  const e = O.useContext(S0);
  if (!e)
    throw new Error("useHandleConfig must be used within a HandleConfigProvider");
  return e;
}
const uC = {
  connectingFrom: !1,
  connectingTo: !1,
  clickConnecting: !1,
  isPossibleEndHandle: !0,
  connectionInProcess: !1,
  clickConnectionInProcess: !1,
  valid: !1
}, cC = (e, t, n) => (r) => {
  const { connectionClickStartHandle: i, connectionMode: s, connection: o } = r, { fromHandle: l, toHandle: a, isValid: u } = o;
  if (!l && !i)
    return uC;
  const d = (a == null ? void 0 : a.nodeId) === e && (a == null ? void 0 : a.id) === t && (a == null ? void 0 : a.type) === n;
  return {
    connectingFrom: (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.id) === t && (l == null ? void 0 : l.type) === n,
    connectingTo: d,
    clickConnecting: (i == null ? void 0 : i.nodeId) === e && (i == null ? void 0 : i.id) === t && (i == null ? void 0 : i.type) === n,
    isPossibleEndHandle: s === ni.Strict ? (l == null ? void 0 : l.type) !== n : e !== (l == null ? void 0 : l.nodeId) || t !== (l == null ? void 0 : l.id),
    connectionInProcess: !!l,
    clickConnectionInProcess: !!i,
    valid: d && u
  };
};
function fC({ type: e = "source", position: t = X.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: i = !0, isConnectableEnd: s = !0, id: o, onConnect: l, children: a, className: u, onMouseDown: d, onTouchStart: c, ...f }, p) {
  var A, b;
  const y = o || null, v = e === "target", w = ge(), h = x0(), { connectOnClick: m, noPanClassName: g, rfId: x } = aC(), { connectingFrom: S, connectingTo: k, clickConnecting: E, isPossibleEndHandle: _, connectionInProcess: M, clickConnectionInProcess: $, valid: C } = ie(cC(h, y, e), pe);
  h || (b = (A = w.getState()).onError) == null || b.call(A, "010", Mt.error010());
  const P = (D) => {
    const { defaultEdgeOptions: T, onConnect: I, hasDefaultEdges: z } = w.getState(), j = {
      ...T,
      ...D
    };
    if (z) {
      const { edges: R, setEdges: H, onError: U } = w.getState();
      H(V2(j, R, { onError: U }));
    }
    I == null || I(j), l == null || l(j);
  }, B = (D) => {
    if (!h)
      return;
    const T = Uy(D.nativeEvent);
    if (i && (T && D.button === 0 || !T)) {
      const I = w.getState();
      yc.onPointerDown(D.nativeEvent, {
        handleDomNode: D.currentTarget,
        autoPanOnConnect: I.autoPanOnConnect,
        connectionMode: I.connectionMode,
        connectionRadius: I.connectionRadius,
        domNode: I.domNode,
        nodeLookup: I.nodeLookup,
        lib: I.lib,
        isTarget: v,
        handleId: y,
        nodeId: h,
        flowId: I.rfId,
        panBy: I.panBy,
        cancelConnection: I.cancelConnection,
        onConnectStart: I.onConnectStart,
        onConnectEnd: (...z) => {
          var j, R;
          return (R = (j = w.getState()).onConnectEnd) == null ? void 0 : R.call(j, ...z);
        },
        updateConnection: I.updateConnection,
        onConnect: P,
        isValidConnection: n || ((...z) => {
          var j, R;
          return ((R = (j = w.getState()).isValidConnection) == null ? void 0 : R.call(j, ...z)) ?? !0;
        }),
        getTransform: () => w.getState().transform,
        getFromHandle: () => w.getState().connection.fromHandle,
        autoPanSpeed: I.autoPanSpeed,
        dragThreshold: I.connectionDragThreshold
      });
    }
    T ? d == null || d(D) : c == null || c(D);
  }, N = (D) => {
    const { onClickConnectStart: T, onClickConnectEnd: I, connectionClickStartHandle: z, connectionMode: j, isValidConnection: R, lib: H, rfId: U, nodeLookup: Y, connection: J } = w.getState();
    if (!h || !z && !i)
      return;
    if (!z) {
      T == null || T(D.nativeEvent, { nodeId: h, handleId: y, handleType: e }), w.setState({ connectionClickStartHandle: { nodeId: h, type: e, id: y } });
      return;
    }
    const Q = Vy(D.target), F = n || R, { connection: K, isValid: ee } = yc.isValid(D.nativeEvent, {
      handle: {
        nodeId: h,
        id: y,
        type: e
      },
      connectionMode: j,
      fromNodeId: z.nodeId,
      fromHandleId: z.id || null,
      fromType: z.type,
      isValidConnection: F,
      flowId: U,
      doc: Q,
      lib: H,
      nodeLookup: Y
    });
    ee && K && P(K);
    const Z = structuredClone(J);
    delete Z.inProgress, Z.toPosition = Z.toHandle ? Z.toHandle.position : null, I == null || I(D, Z), w.setState({ connectionClickStartHandle: null });
  };
  return L.jsx("div", { "data-handleid": y, "data-nodeid": h, "data-handlepos": t, "data-id": `${x}-${h}-${y}-${e}`, className: Ce([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    g,
    u,
    {
      source: !v,
      target: v,
      connectable: r,
      connectablestart: i,
      connectableend: s,
      clickconnecting: E,
      connectingfrom: S,
      connectingto: k,
      valid: C,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!M || _) && (M || $ ? s : i)
    }
  ]), onMouseDown: B, onTouchStart: B, onClick: m ? N : void 0, ref: p, ...f, children: a });
}
const wn = O.memo(m0(fC));
function dC({ data: e, isConnectable: t, sourcePosition: n = X.Bottom }) {
  return L.jsxs(L.Fragment, { children: [e == null ? void 0 : e.label, L.jsx(wn, { type: "source", position: n, isConnectable: t })] });
}
function hC({ data: e, isConnectable: t, targetPosition: n = X.Top, sourcePosition: r = X.Bottom }) {
  return L.jsxs(L.Fragment, { children: [L.jsx(wn, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, L.jsx(wn, { type: "source", position: r, isConnectable: t })] });
}
function pC() {
  return null;
}
function gC({ data: e, isConnectable: t, targetPosition: n = X.Top }) {
  return L.jsxs(L.Fragment, { children: [L.jsx(wn, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const Ml = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, cp = {
  input: dC,
  default: hC,
  output: gC,
  group: pC
};
function mC(e) {
  var t, n, r, i;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
    height: e.height ?? ((i = e.style) == null ? void 0 : i.height)
  };
}
const yC = (e) => {
  const { width: t, height: n, x: r, y: i } = Rs(e.nodeLookup, {
    filter: (s) => !!s.selected
  });
  return {
    width: Et(t) ? t : null,
    height: Et(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`
  };
};
function vC({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = ge(), { width: i, height: s, transformString: o, userSelectionActive: l } = ie(yC, pe), a = w0(), u = O.useRef(null);
  O.useEffect(() => {
    var p;
    n || (p = u.current) == null || p.focus({
      preventScroll: !0
    });
  }, [n]);
  const d = !l && i !== null && s !== null;
  if (v0({
    nodeRef: u,
    disabled: !d
  }), !d)
    return null;
  const c = e ? (p) => {
    const y = r.getState().nodes.filter((v) => v.selected);
    e(p, y);
  } : void 0, f = (p) => {
    Object.prototype.hasOwnProperty.call(Ml, p.key) && (p.preventDefault(), a({
      direction: Ml[p.key],
      factor: p.shiftKey ? 4 : 1
    }));
  };
  return L.jsx("div", { className: Ce(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: o
  }, children: L.jsx("div", { ref: u, className: "react-flow__nodesselection-rect", onContextMenu: c, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : f, style: {
    width: i,
    height: s
  } }) });
}
const fp = typeof window < "u" ? window : void 0, wC = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function k0({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: i, onPaneContextMenu: s, onPaneScroll: o, paneClickDistance: l, deleteKeyCode: a, selectionKeyCode: u, selectionOnDrag: d, selectionMode: c, onSelectionStart: f, onSelectionEnd: p, multiSelectionKeyCode: y, panActivationKeyCode: v, zoomActivationKeyCode: w, elementsSelectable: h, zoomOnScroll: m, zoomOnPinch: g, panOnScroll: x, panOnScrollSpeed: S, panOnScrollMode: k, zoomOnDoubleClick: E, panOnDrag: _, autoPanOnSelection: M, defaultViewport: $, translateExtent: C, minZoom: P, maxZoom: B, preventScrolling: N, onSelectionContextMenu: A, noWheelClassName: b, noPanClassName: D, disableKeyboardA11y: T, onViewportChange: I, isControlledViewport: z }) {
  const { nodesSelectionActive: j, userSelectionActive: R } = ie(wC, pe), H = Cs(u, { target: fp }), U = Cs(v, { target: fp }), Y = U || _, J = U || x, Q = d && Y !== !0, F = H || R || Q;
  return q2({ deleteKeyCode: a, multiSelectionKeyCode: y }), L.jsx(Z2, { onPaneContextMenu: s, elementsSelectable: h, zoomOnScroll: m, zoomOnPinch: g, panOnScroll: J, panOnScrollSpeed: S, panOnScrollMode: k, zoomOnDoubleClick: E, panOnDrag: !H && Y, defaultViewport: $, translateExtent: C, minZoom: P, maxZoom: B, zoomActivationKeyCode: w, preventScrolling: N, noWheelClassName: b, noPanClassName: D, onViewportChange: I, isControlledViewport: z, paneClickDistance: l, selectionOnDrag: Q, children: L.jsxs(rC, { onSelectionStart: f, onSelectionEnd: p, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: i, onPaneContextMenu: s, onPaneScroll: o, panOnDrag: Y, autoPanOnSelection: M, isSelecting: !!F, selectionMode: c, selectionKeyPressed: H, paneClickDistance: l, selectionOnDrag: Q, children: [e, j && L.jsx(vC, { onSelectionContextMenu: A, noPanClassName: D, disableKeyboardA11y: T })] }) });
}
k0.displayName = "FlowRenderer";
const xC = O.memo(k0), SC = (e) => (t) => e ? Tf(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function kC(e) {
  return ie(O.useCallback(SC(e), [e]), pe);
}
const EC = (e) => e.updateNodeInternals;
function _C() {
  const e = ie(EC), [t] = O.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const r = /* @__PURE__ */ new Map();
    n.forEach((i) => {
      const s = i.target.getAttribute("data-id");
      r.set(s, {
        id: s,
        nodeElement: i.target,
        force: !0
      });
    }), e(r);
  }));
  return O.useEffect(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function NC({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const i = ge(), s = O.useRef(null), o = O.useRef(null), l = O.useRef(e.sourcePosition), a = O.useRef(e.targetPosition), u = O.useRef(t), d = n && !!e.internals.handleBounds;
  return O.useEffect(() => {
    s.current && !e.hidden && (!d || o.current !== s.current) && (o.current && (r == null || r.unobserve(o.current)), r == null || r.observe(s.current), o.current = s.current);
  }, [d, e.hidden]), O.useEffect(() => () => {
    o.current && (r == null || r.unobserve(o.current), o.current = null);
  }, []), O.useEffect(() => {
    if (s.current) {
      const c = u.current !== t, f = l.current !== e.sourcePosition, p = a.current !== e.targetPosition;
      (c || f || p) && (u.current = t, l.current = e.sourcePosition, a.current = e.targetPosition, i.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: s.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), s;
}
function CC({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: i, onContextMenu: s, onDoubleClick: o, nodesDraggable: l, elementsSelectable: a, nodesConnectable: u, nodesFocusable: d, resizeObserver: c, noDragClassName: f, noPanClassName: p, disableKeyboardA11y: y, rfId: v, nodeTypes: w, nodeClickDistance: h, onError: m }) {
  const { node: g, internals: x, isParent: S } = ie((F) => {
    const K = F.nodeLookup.get(e), ee = F.parentLookup.has(e);
    return {
      node: K,
      internals: K.internals,
      isParent: ee
    };
  }, pe);
  let k = g.type || "default", E = (w == null ? void 0 : w[k]) || cp[k];
  E === void 0 && (m == null || m("003", Mt.error003(k)), k = "default", E = (w == null ? void 0 : w.default) || cp.default);
  const _ = !!(g.draggable || l && typeof g.draggable > "u"), M = !!(g.selectable || a && typeof g.selectable > "u"), $ = !!(g.connectable || u && typeof g.connectable > "u"), C = !!(g.focusable || d && typeof g.focusable > "u"), P = ge(), B = By(g), N = NC({ node: g, nodeType: k, hasDimensions: B, resizeObserver: c }), A = v0({
    nodeRef: N,
    disabled: g.hidden || !_,
    noDragClassName: f,
    handleSelector: g.dragHandle,
    nodeId: e,
    isSelectable: M,
    nodeClickDistance: h
  }), b = w0();
  if (g.hidden)
    return null;
  const D = ln(g), T = mC(g), I = M || _ || t || n || r || i, z = n ? (F) => n(F, { ...x.userNode }) : void 0, j = r ? (F) => r(F, { ...x.userNode }) : void 0, R = i ? (F) => i(F, { ...x.userNode }) : void 0, H = s ? (F) => s(F, { ...x.userNode }) : void 0, U = o ? (F) => o(F, { ...x.userNode }) : void 0, Y = (F) => {
    const { selectNodesOnDrag: K, nodeDragThreshold: ee } = P.getState();
    M && (!K || !_ || ee > 0) && vc({
      id: e,
      store: P,
      nodeRef: N
    }), t && t(F, { ...x.userNode });
  }, J = (F) => {
    if (!(Hy(F.nativeEvent) || y)) {
      if (Iy.includes(F.key) && M) {
        const K = F.key === "Escape";
        vc({
          id: e,
          store: P,
          unselect: K,
          nodeRef: N
        });
      } else if (_ && g.selected && Object.prototype.hasOwnProperty.call(Ml, F.key)) {
        F.preventDefault();
        const { ariaLabelConfig: K } = P.getState();
        P.setState({
          ariaLiveMessage: K["node.a11yDescription.ariaLiveMessage"]({
            direction: F.key.replace("Arrow", "").toLowerCase(),
            x: ~~x.positionAbsolute.x,
            y: ~~x.positionAbsolute.y
          })
        }), b({
          direction: Ml[F.key],
          factor: F.shiftKey ? 4 : 1
        });
      }
    }
  }, Q = () => {
    var ne;
    if (y || !((ne = N.current) != null && ne.matches(":focus-visible")))
      return;
    const { transform: F, width: K, height: ee, autoPanOnNodeFocus: Z, setCenter: G } = P.getState();
    if (!Z)
      return;
    Tf(/* @__PURE__ */ new Map([[e, g]]), { x: 0, y: 0, width: K, height: ee }, F, !0).length > 0 || G(g.position.x + D.width / 2, g.position.y + D.height / 2, {
      zoom: F[2]
    });
  };
  return L.jsx("div", { className: Ce([
    "react-flow__node",
    `react-flow__node-${k}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [p]: _
    },
    g.className,
    {
      selected: g.selected,
      selectable: M,
      parent: S,
      draggable: _,
      dragging: A
    }
  ]), ref: N, style: {
    zIndex: x.z,
    transform: `translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,
    pointerEvents: I ? "all" : "none",
    visibility: B ? "visible" : "hidden",
    ...g.style,
    ...T
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: z, onMouseMove: j, onMouseLeave: R, onContextMenu: H, onClick: Y, onDoubleClick: U, onKeyDown: C ? J : void 0, tabIndex: C ? 0 : void 0, onFocus: C ? Q : void 0, role: g.ariaRole ?? (C ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": y ? void 0 : `${d0}-${v}`, "aria-label": g.ariaLabel, ...g.domAttributes, children: L.jsx(sC, { value: e, children: L.jsx(E, { id: e, data: g.data, type: k, positionAbsoluteX: x.positionAbsolute.x, positionAbsoluteY: x.positionAbsolute.y, selected: g.selected ?? !1, selectable: M, draggable: _, deletable: g.deletable ?? !0, isConnectable: $, sourcePosition: g.sourcePosition, targetPosition: g.targetPosition, dragging: A, dragHandle: g.dragHandle, zIndex: x.z, parentId: g.parentId, ...D }) }) });
}
var bC = O.memo(CC);
const MC = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function E0(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: i, onError: s } = ie(MC, pe), o = kC(e.onlyRenderVisibleElements), l = _C();
  return L.jsx("div", { className: "react-flow__nodes", style: la, children: o.map((a) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    L.jsx(bC, { id: a, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: l, nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: i, nodeClickDistance: e.nodeClickDistance, onError: s }, a)
  )) });
}
E0.displayName = "NodeRenderer";
const TC = O.memo(E0);
function IC(e) {
  return ie(O.useCallback((n) => {
    if (!e)
      return n.edges.map((i) => i.id);
    const r = [];
    if (n.width && n.height)
      for (const i of n.edges) {
        const s = n.nodeLookup.get(i.source), o = n.nodeLookup.get(i.target);
        s && o && aN({
          sourceNode: s,
          targetNode: o,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && r.push(i.id);
      }
    return r;
  }, [e]), pe);
}
const AC = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return L.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, LC = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return L.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, dp = {
  [Es.Arrow]: AC,
  [Es.ArrowClosed]: LC
};
function $C(e) {
  const t = ge();
  return O.useMemo(() => {
    var i, s;
    return Object.prototype.hasOwnProperty.call(dp, e) ? dp[e] : ((s = (i = t.getState()).onError) == null || s.call(i, "009", Mt.error009(e)), null);
  }, [e]);
}
const PC = ({ id: e, type: t, color: n, width: r = 12.5, height: i = 12.5, markerUnits: s = "strokeWidth", strokeWidth: o, orient: l = "auto-start-reverse" }) => {
  const a = $C(t);
  return a ? L.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${i}`, viewBox: "-10 -10 20 20", markerUnits: s, orient: l, refX: "0", refY: "0", children: L.jsx(a, { color: n, strokeWidth: o }) }) : null;
}, _0 = ({ defaultColor: e, rfId: t }) => {
  const n = ie((s) => s.edges), r = ie((s) => s.defaultEdgeOptions), i = O.useMemo(() => mN(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r == null ? void 0 : r.markerStart,
    defaultMarkerEnd: r == null ? void 0 : r.markerEnd
  }), [n, r, t, e]);
  return i.length ? L.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: L.jsx("defs", { children: i.map((s) => L.jsx(PC, { id: s.id, type: s.type, color: s.color, width: s.width, height: s.height, markerUnits: s.markerUnits, strokeWidth: s.strokeWidth, orient: s.orient }, s.id)) }) }) : null;
};
_0.displayName = "MarkerDefinitions";
var OC = O.memo(_0);
function N0({ x: e, y: t, label: n, labelStyle: r, labelShowBg: i = !0, labelBgStyle: s, labelBgPadding: o = [2, 4], labelBgBorderRadius: l = 2, children: a, className: u, ...d }) {
  const [c, f] = O.useState({ x: 1, y: 0, width: 0, height: 0 }), p = Ce(["react-flow__edge-textwrapper", u]), y = O.useRef(null);
  return O.useEffect(() => {
    if (y.current) {
      const v = y.current.getBBox();
      f({
        x: v.x,
        y: v.y,
        width: v.width,
        height: v.height
      });
    }
  }, [n]), n ? L.jsxs("g", { transform: `translate(${e - c.width / 2} ${t - c.height / 2})`, className: p, visibility: c.width ? "visible" : "hidden", ...d, children: [i && L.jsx("rect", { width: c.width + 2 * o[0], x: -o[0], y: -o[1], height: c.height + 2 * o[1], className: "react-flow__edge-textbg", style: s, rx: l, ry: l }), L.jsx("text", { className: "react-flow__edge-text", y: c.height / 2, dy: "0.3em", ref: y, style: r, children: n }), a] }) : null;
}
N0.displayName = "EdgeText";
const DC = O.memo(N0);
function aa({ path: e, labelX: t, labelY: n, label: r, labelStyle: i, labelShowBg: s, labelBgStyle: o, labelBgPadding: l, labelBgBorderRadius: a, interactionWidth: u = 20, ...d }) {
  return L.jsxs(L.Fragment, { children: [L.jsx("path", { ...d, d: e, fill: "none", className: Ce(["react-flow__edge-path", d.className]) }), u ? L.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: u, className: "react-flow__edge-interaction" }) : null, r && Et(t) && Et(n) ? L.jsx(DC, { x: t, y: n, label: r, labelStyle: i, labelShowBg: s, labelBgStyle: o, labelBgPadding: l, labelBgBorderRadius: a }) : null] });
}
function hp({ pos: e, x1: t, y1: n, x2: r, y2: i }) {
  return e === X.Left || e === X.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + i)];
}
function C0({ sourceX: e, sourceY: t, sourcePosition: n = X.Bottom, targetX: r, targetY: i, targetPosition: s = X.Top }) {
  const [o, l] = hp({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: i
  }), [a, u] = hp({
    pos: s,
    x1: r,
    y1: i,
    x2: e,
    y2: t
  }), [d, c, f, p] = Ky({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: i,
    sourceControlX: o,
    sourceControlY: l,
    targetControlX: a,
    targetControlY: u
  });
  return [
    `M${e},${t} C${o},${l} ${a},${u} ${r},${i}`,
    d,
    c,
    f,
    p
  ];
}
function b0(e) {
  return O.memo(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: s, sourcePosition: o, targetPosition: l, label: a, labelStyle: u, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: p, style: y, markerEnd: v, markerStart: w, interactionWidth: h }) => {
    const [m, g, x] = C0({
      sourceX: n,
      sourceY: r,
      sourcePosition: o,
      targetX: i,
      targetY: s,
      targetPosition: l
    }), S = e.isInternal ? void 0 : t;
    return L.jsx(aa, { id: S, path: m, labelX: g, labelY: x, label: a, labelStyle: u, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: p, style: y, markerEnd: v, markerStart: w, interactionWidth: h });
  });
}
const jC = b0({ isInternal: !1 }), M0 = b0({ isInternal: !0 });
jC.displayName = "SimpleBezierEdge";
M0.displayName = "SimpleBezierEdgeInternal";
function T0(e) {
  return O.memo(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: s, label: o, labelStyle: l, labelShowBg: a, labelBgStyle: u, labelBgPadding: d, labelBgBorderRadius: c, style: f, sourcePosition: p = X.Bottom, targetPosition: y = X.Top, markerEnd: v, markerStart: w, pathOptions: h, interactionWidth: m }) => {
    const [g, x, S] = pc({
      sourceX: n,
      sourceY: r,
      sourcePosition: p,
      targetX: i,
      targetY: s,
      targetPosition: y,
      borderRadius: h == null ? void 0 : h.borderRadius,
      offset: h == null ? void 0 : h.offset,
      stepPosition: h == null ? void 0 : h.stepPosition
    }), k = e.isInternal ? void 0 : t;
    return L.jsx(aa, { id: k, path: g, labelX: x, labelY: S, label: o, labelStyle: l, labelShowBg: a, labelBgStyle: u, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: v, markerStart: w, interactionWidth: m });
  });
}
const I0 = T0({ isInternal: !1 }), A0 = T0({ isInternal: !0 });
I0.displayName = "SmoothStepEdge";
A0.displayName = "SmoothStepEdgeInternal";
function L0(e) {
  return O.memo(({ id: t, ...n }) => {
    var i;
    const r = e.isInternal ? void 0 : t;
    return L.jsx(I0, { ...n, id: r, pathOptions: O.useMemo(() => {
      var s;
      return { borderRadius: 0, offset: (s = n.pathOptions) == null ? void 0 : s.offset };
    }, [(i = n.pathOptions) == null ? void 0 : i.offset]) });
  });
}
const RC = L0({ isInternal: !1 }), $0 = L0({ isInternal: !0 });
RC.displayName = "StepEdge";
$0.displayName = "StepEdgeInternal";
function P0(e) {
  return O.memo(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: s, label: o, labelStyle: l, labelShowBg: a, labelBgStyle: u, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: p, markerStart: y, interactionWidth: v }) => {
    const [w, h, m] = Xy({ sourceX: n, sourceY: r, targetX: i, targetY: s }), g = e.isInternal ? void 0 : t;
    return L.jsx(aa, { id: g, path: w, labelX: h, labelY: m, label: o, labelStyle: l, labelShowBg: a, labelBgStyle: u, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: p, markerStart: y, interactionWidth: v });
  });
}
const zC = P0({ isInternal: !1 }), O0 = P0({ isInternal: !0 });
zC.displayName = "StraightEdge";
O0.displayName = "StraightEdgeInternal";
function D0(e) {
  return O.memo(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: s, sourcePosition: o = X.Bottom, targetPosition: l = X.Top, label: a, labelStyle: u, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: p, style: y, markerEnd: v, markerStart: w, pathOptions: h, interactionWidth: m }) => {
    const [g, x, S] = Wy({
      sourceX: n,
      sourceY: r,
      sourcePosition: o,
      targetX: i,
      targetY: s,
      targetPosition: l,
      curvature: h == null ? void 0 : h.curvature
    }), k = e.isInternal ? void 0 : t;
    return L.jsx(aa, { id: k, path: g, labelX: x, labelY: S, label: a, labelStyle: u, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: p, style: y, markerEnd: v, markerStart: w, interactionWidth: m });
  });
}
const BC = D0({ isInternal: !1 }), j0 = D0({ isInternal: !0 });
BC.displayName = "BezierEdge";
j0.displayName = "BezierEdgeInternal";
const pp = {
  default: j0,
  straight: O0,
  step: $0,
  smoothstep: A0,
  simplebezier: M0
}, gp = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null,
  zIndex: void 0
}, FC = (e, t, n) => n === X.Left ? e - t : n === X.Right ? e + t : e, VC = (e, t, n) => n === X.Top ? e - t : n === X.Bottom ? e + t : e, mp = "react-flow__edgeupdater";
function yp({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: i, onMouseEnter: s, onMouseOut: o, type: l }) {
  return L.jsx("circle", { onMouseDown: i, onMouseEnter: s, onMouseOut: o, className: Ce([mp, `${mp}-${l}`]), cx: FC(t, r, e), cy: VC(n, r, e), r, stroke: "transparent", fill: "transparent" });
}
function HC({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: i, targetX: s, targetY: o, sourcePosition: l, targetPosition: a, onReconnect: u, onReconnectStart: d, onReconnectEnd: c, setReconnecting: f, setUpdateHover: p }) {
  const y = ge(), v = (x, S) => {
    if (x.button !== 0)
      return;
    const { autoPanOnConnect: k, domNode: E, connectionMode: _, connectionRadius: M, lib: $, onConnectStart: C, cancelConnection: P, nodeLookup: B, rfId: N, panBy: A, updateConnection: b } = y.getState(), D = S.type === "target", T = (j, R) => {
      f(!1), c == null || c(j, n, S.type, R);
    }, I = (j) => u == null ? void 0 : u(n, j), z = (j, R) => {
      f(!0), d == null || d(x, n, S.type), C == null || C(j, R);
    };
    yc.onPointerDown(x.nativeEvent, {
      autoPanOnConnect: k,
      connectionMode: _,
      connectionRadius: M,
      domNode: E,
      handleId: S.id,
      nodeId: S.nodeId,
      nodeLookup: B,
      isTarget: D,
      edgeUpdaterType: S.type,
      lib: $,
      flowId: N,
      cancelConnection: P,
      panBy: A,
      isValidConnection: (...j) => {
        var R, H;
        return ((H = (R = y.getState()).isValidConnection) == null ? void 0 : H.call(R, ...j)) ?? !0;
      },
      onConnect: I,
      onConnectStart: z,
      onConnectEnd: (...j) => {
        var R, H;
        return (H = (R = y.getState()).onConnectEnd) == null ? void 0 : H.call(R, ...j);
      },
      onReconnectEnd: T,
      updateConnection: b,
      getTransform: () => y.getState().transform,
      getFromHandle: () => y.getState().connection.fromHandle,
      dragThreshold: y.getState().connectionDragThreshold,
      handleDomNode: x.currentTarget
    });
  }, w = (x) => v(x, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), h = (x) => v(x, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), m = () => p(!0), g = () => p(!1);
  return L.jsxs(L.Fragment, { children: [(e === !0 || e === "source") && L.jsx(yp, { position: l, centerX: r, centerY: i, radius: t, onMouseDown: w, onMouseEnter: m, onMouseOut: g, type: "source" }), (e === !0 || e === "target") && L.jsx(yp, { position: a, centerX: s, centerY: o, radius: t, onMouseDown: h, onMouseEnter: m, onMouseOut: g, type: "target" })] });
}
function UC({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: i, onDoubleClick: s, onContextMenu: o, onMouseEnter: l, onMouseMove: a, onMouseLeave: u, reconnectRadius: d, onReconnect: c, onReconnectStart: f, onReconnectEnd: p, rfId: y, edgeTypes: v, noPanClassName: w, onError: h, disableKeyboardA11y: m }) {
  let g = ie((G) => G.edgeLookup.get(e));
  const x = ie((G) => G.defaultEdgeOptions);
  g = x ? { ...x, ...g } : g;
  let S = g.type || "default", k = (v == null ? void 0 : v[S]) || pp[S];
  k === void 0 && (h == null || h("011", Mt.error011(S)), S = "default", k = (v == null ? void 0 : v.default) || pp.default);
  const E = !!(g.focusable || t && typeof g.focusable > "u"), _ = typeof c < "u" && (g.reconnectable || n && typeof g.reconnectable > "u"), M = !!(g.selectable || r && typeof g.selectable > "u"), $ = O.useRef(null), [C, P] = O.useState(!1), [B, N] = O.useState(!1), A = ge(), { zIndex: b = g.zIndex, sourceX: D, sourceY: T, targetX: I, targetY: z, sourcePosition: j, targetPosition: R } = ie(O.useCallback((G) => {
    const q = G.nodeLookup.get(g.source), ne = G.nodeLookup.get(g.target);
    if (!q || !ne)
      return gp;
    const oe = gN({
      id: e,
      sourceNode: q,
      targetNode: ne,
      sourceHandle: g.sourceHandle || null,
      targetHandle: g.targetHandle || null,
      connectionMode: G.connectionMode,
      onError: h
    }), le = lN({
      selected: g.selected,
      zIndex: g.zIndex,
      sourceNode: q,
      targetNode: ne,
      elevateOnSelect: G.elevateEdgesOnSelect,
      zIndexMode: G.zIndexMode
    });
    return {
      ...oe || gp,
      zIndex: le
    };
  }, [g.source, g.target, g.sourceHandle, g.targetHandle, g.selected, g.zIndex]), pe), H = O.useMemo(() => g.markerStart ? `url('#${gc(g.markerStart, y)}')` : void 0, [g.markerStart, y]), U = O.useMemo(() => g.markerEnd ? `url('#${gc(g.markerEnd, y)}')` : void 0, [g.markerEnd, y]);
  if (g.hidden || D === null || T === null || I === null || z === null)
    return null;
  const Y = (G) => {
    var le;
    const { addSelectedEdges: q, unselectNodesAndEdges: ne, multiSelectionActive: oe } = A.getState();
    M && (A.setState({ nodesSelectionActive: !1 }), g.selected && oe ? (ne({ nodes: [], edges: [g] }), (le = $.current) == null || le.blur()) : q([e])), i && i(G, g);
  }, J = s ? (G) => {
    s(G, { ...g });
  } : void 0, Q = o ? (G) => {
    o(G, { ...g });
  } : void 0, F = l ? (G) => {
    l(G, { ...g });
  } : void 0, K = a ? (G) => {
    a(G, { ...g });
  } : void 0, ee = u ? (G) => {
    u(G, { ...g });
  } : void 0, Z = (G) => {
    var q;
    if (!m && Iy.includes(G.key) && M) {
      const { unselectNodesAndEdges: ne, addSelectedEdges: oe } = A.getState();
      G.key === "Escape" ? ((q = $.current) == null || q.blur(), ne({ edges: [g] })) : oe([e]);
    }
  };
  return L.jsx("svg", { style: { zIndex: b }, children: L.jsxs("g", { className: Ce([
    "react-flow__edge",
    `react-flow__edge-${S}`,
    g.className,
    w,
    {
      selected: g.selected,
      animated: g.animated,
      inactive: !M && !i,
      updating: C,
      selectable: M
    }
  ]), onClick: Y, onDoubleClick: J, onContextMenu: Q, onMouseEnter: F, onMouseMove: K, onMouseLeave: ee, onKeyDown: E ? Z : void 0, tabIndex: E ? 0 : void 0, role: g.ariaRole ?? (E ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": g.ariaLabel === null ? void 0 : g.ariaLabel || `Edge from ${g.source} to ${g.target}`, "aria-describedby": E ? `${h0}-${y}` : void 0, ref: $, ...g.domAttributes, children: [!B && L.jsx(k, { id: e, source: g.source, target: g.target, type: g.type, selected: g.selected, animated: g.animated, selectable: M, deletable: g.deletable ?? !0, label: g.label, labelStyle: g.labelStyle, labelShowBg: g.labelShowBg, labelBgStyle: g.labelBgStyle, labelBgPadding: g.labelBgPadding, labelBgBorderRadius: g.labelBgBorderRadius, sourceX: D, sourceY: T, targetX: I, targetY: z, sourcePosition: j, targetPosition: R, data: g.data, style: g.style, sourceHandleId: g.sourceHandle, targetHandleId: g.targetHandle, markerStart: H, markerEnd: U, pathOptions: "pathOptions" in g ? g.pathOptions : void 0, interactionWidth: g.interactionWidth }), _ && L.jsx(HC, { edge: g, isReconnectable: _, reconnectRadius: d, onReconnect: c, onReconnectStart: f, onReconnectEnd: p, sourceX: D, sourceY: T, targetX: I, targetY: z, sourcePosition: j, targetPosition: R, setUpdateHover: P, setReconnecting: N })] }) });
}
var KC = O.memo(UC);
const WC = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function R0({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: i, onReconnect: s, onEdgeContextMenu: o, onEdgeMouseEnter: l, onEdgeMouseMove: a, onEdgeMouseLeave: u, onEdgeClick: d, reconnectRadius: c, onEdgeDoubleClick: f, onReconnectStart: p, onReconnectEnd: y, disableKeyboardA11y: v }) {
  const { edgesFocusable: w, edgesReconnectable: h, elementsSelectable: m, onError: g } = ie(WC, pe), x = IC(t);
  return L.jsxs("div", { className: "react-flow__edges", children: [L.jsx(OC, { defaultColor: e, rfId: n }), x.map((S) => L.jsx(KC, { id: S, edgesFocusable: w, edgesReconnectable: h, elementsSelectable: m, noPanClassName: i, onReconnect: s, onContextMenu: o, onMouseEnter: l, onMouseMove: a, onMouseLeave: u, onClick: d, reconnectRadius: c, onDoubleClick: f, onReconnectStart: p, onReconnectEnd: y, rfId: n, onError: g, edgeTypes: r, disableKeyboardA11y: v }, S))] });
}
R0.displayName = "EdgeRenderer";
const YC = O.memo(R0), XC = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function QC({ children: e }) {
  const t = ie(XC);
  return L.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function qC(e) {
  const t = oa(), n = O.useRef(!1);
  O.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const GC = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function JC(e) {
  const t = ie(GC), n = ge();
  return O.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function ZC(e) {
  return e.connection.inProgress ? { ...e.connection, to: Bs(e.connection.to, e.transform) } : { ...e.connection };
}
function eb(e) {
  return ZC;
}
function tb(e) {
  const t = eb();
  return ie(t, pe);
}
const nb = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function rb({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: i, width: s, height: o, isValid: l, inProgress: a } = ie(nb, pe);
  return !(s && i && a) ? null : L.jsx("svg", { style: e, width: s, height: o, className: "react-flow__connectionline react-flow__container", children: L.jsx("g", { className: Ce(["react-flow__connection", $y(l)]), children: L.jsx(z0, { style: t, type: n, CustomComponent: r, isValid: l }) }) });
}
const z0 = ({ style: e, type: t = mn.Bezier, CustomComponent: n, isValid: r }) => {
  const { inProgress: i, from: s, fromNode: o, fromHandle: l, fromPosition: a, to: u, toNode: d, toHandle: c, toPosition: f, pointer: p } = tb();
  if (!i)
    return;
  if (n)
    return L.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: o, fromHandle: l, fromX: s.x, fromY: s.y, toX: u.x, toY: u.y, fromPosition: a, toPosition: f, connectionStatus: $y(r), toNode: d, toHandle: c, pointer: p });
  let y = "";
  const v = {
    sourceX: s.x,
    sourceY: s.y,
    sourcePosition: a,
    targetX: u.x,
    targetY: u.y,
    targetPosition: f
  };
  switch (t) {
    case mn.Bezier:
      [y] = Wy(v);
      break;
    case mn.SimpleBezier:
      [y] = C0(v);
      break;
    case mn.Step:
      [y] = pc({
        ...v,
        borderRadius: 0
      });
      break;
    case mn.SmoothStep:
      [y] = pc(v);
      break;
    default:
      [y] = Xy(v);
  }
  return L.jsx("path", { d: y, fill: "none", className: "react-flow__connection-path", style: e });
};
z0.displayName = "ConnectionLine";
const ib = {};
function vp(e = ib) {
  O.useRef(e), ge(), O.useEffect(() => {
  }, [e]);
}
function sb() {
  ge(), O.useRef(!1), O.useEffect(() => {
  }, []);
}
function B0({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: i, onNodeDoubleClick: s, onEdgeDoubleClick: o, onNodeMouseEnter: l, onNodeMouseMove: a, onNodeMouseLeave: u, onNodeContextMenu: d, onSelectionContextMenu: c, onSelectionStart: f, onSelectionEnd: p, connectionLineType: y, connectionLineStyle: v, connectionLineComponent: w, connectionLineContainerStyle: h, selectionKeyCode: m, selectionOnDrag: g, selectionMode: x, multiSelectionKeyCode: S, panActivationKeyCode: k, zoomActivationKeyCode: E, deleteKeyCode: _, onlyRenderVisibleElements: M, elementsSelectable: $, defaultViewport: C, translateExtent: P, minZoom: B, maxZoom: N, preventScrolling: A, defaultMarkerColor: b, zoomOnScroll: D, zoomOnPinch: T, panOnScroll: I, panOnScrollSpeed: z, panOnScrollMode: j, zoomOnDoubleClick: R, panOnDrag: H, autoPanOnSelection: U, onPaneClick: Y, onPaneMouseEnter: J, onPaneMouseMove: Q, onPaneMouseLeave: F, onPaneScroll: K, onPaneContextMenu: ee, paneClickDistance: Z, nodeClickDistance: G, onEdgeContextMenu: q, onEdgeMouseEnter: ne, onEdgeMouseMove: oe, onEdgeMouseLeave: le, reconnectRadius: xe, onReconnect: st, onReconnectStart: At, onReconnectEnd: Lt, noDragClassName: Vt, noWheelClassName: vi, noPanClassName: Dn, disableKeyboardA11y: jn, nodeExtent: gt, rfId: Ht, viewport: Ut, onViewportChange: Rn }) {
  return vp(e), vp(t), sb(), qC(n), JC(Ut), L.jsx(xC, { onPaneClick: Y, onPaneMouseEnter: J, onPaneMouseMove: Q, onPaneMouseLeave: F, onPaneContextMenu: ee, onPaneScroll: K, paneClickDistance: Z, deleteKeyCode: _, selectionKeyCode: m, selectionOnDrag: g, selectionMode: x, onSelectionStart: f, onSelectionEnd: p, multiSelectionKeyCode: S, panActivationKeyCode: k, zoomActivationKeyCode: E, elementsSelectable: $, zoomOnScroll: D, zoomOnPinch: T, zoomOnDoubleClick: R, panOnScroll: I, panOnScrollSpeed: z, panOnScrollMode: j, panOnDrag: H, autoPanOnSelection: U, defaultViewport: C, translateExtent: P, minZoom: B, maxZoom: N, onSelectionContextMenu: c, preventScrolling: A, noDragClassName: Vt, noWheelClassName: vi, noPanClassName: Dn, disableKeyboardA11y: jn, onViewportChange: Rn, isControlledViewport: !!Ut, children: L.jsxs(QC, { children: [L.jsx(YC, { edgeTypes: t, onEdgeClick: i, onEdgeDoubleClick: o, onReconnect: st, onReconnectStart: At, onReconnectEnd: Lt, onlyRenderVisibleElements: M, onEdgeContextMenu: q, onEdgeMouseEnter: ne, onEdgeMouseMove: oe, onEdgeMouseLeave: le, reconnectRadius: xe, defaultMarkerColor: b, noPanClassName: Dn, disableKeyboardA11y: jn, rfId: Ht }), L.jsx(rb, { style: v, type: y, component: w, containerStyle: h }), L.jsx("div", { className: "react-flow__edgelabel-renderer" }), L.jsx(TC, { nodeTypes: e, onNodeClick: r, onNodeDoubleClick: s, onNodeMouseEnter: l, onNodeMouseMove: a, onNodeMouseLeave: u, onNodeContextMenu: d, nodeClickDistance: G, onlyRenderVisibleElements: M, noPanClassName: Dn, noDragClassName: Vt, disableKeyboardA11y: jn, nodeExtent: gt, rfId: Ht }), L.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
B0.displayName = "GraphView";
const ob = O.memo(B0), lb = zy(), wp = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: i, height: s, fitView: o, fitViewOptions: l, minZoom: a = 0.5, maxZoom: u = 2, nodeOrigin: d, nodeExtent: c, zIndexMode: f = "basic" } = {}) => {
  const p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), h = r ?? t ?? [], m = n ?? e ?? [], g = d ?? [0, 0], x = c ?? Ss;
  Gy(v, w, h);
  const { nodesInitialized: S } = mc(m, p, y, {
    nodeOrigin: g,
    nodeExtent: x,
    zIndexMode: f
  });
  let k = [0, 0, 1];
  if (o && i && s) {
    const E = Rs(p, {
      filter: (C) => !!((C.width || C.initialWidth) && (C.height || C.initialHeight))
    }), { x: _, y: M, zoom: $ } = Af(E, i, s, a, u, (l == null ? void 0 : l.padding) ?? 0.1);
    k = [_, M, $];
  }
  return {
    rfId: "1",
    width: i ?? 0,
    height: s ?? 0,
    transform: k,
    nodes: m,
    nodesInitialized: S,
    nodeLookup: p,
    parentLookup: y,
    edges: h,
    edgeLookup: w,
    connectionLookup: v,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: a,
    maxZoom: u,
    translateExtent: Ss,
    nodeExtent: x,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: ni.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: g,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: o ?? !1,
    fitViewOptions: l,
    fitViewResolver: null,
    connection: { ...Ly },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: lb,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: Ay,
    zIndexMode: f,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
  };
}, ab = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: i, height: s, fitView: o, fitViewOptions: l, minZoom: a, maxZoom: u, nodeOrigin: d, nodeExtent: c, zIndexMode: f }) => v2((p, y) => {
  async function v() {
    const { nodeLookup: w, panZoom: h, fitViewOptions: m, fitViewResolver: g, width: x, height: S, minZoom: k, maxZoom: E } = y();
    h && (await eN({
      nodes: w,
      width: x,
      height: S,
      panZoom: h,
      minZoom: k,
      maxZoom: E
    }, m), g == null || g.resolve(!0), p({ fitViewResolver: null }));
  }
  return {
    ...wp({
      nodes: e,
      edges: t,
      width: i,
      height: s,
      fitView: o,
      fitViewOptions: l,
      minZoom: a,
      maxZoom: u,
      nodeOrigin: d,
      nodeExtent: c,
      defaultNodes: n,
      defaultEdges: r,
      zIndexMode: f
    }),
    setNodes: (w) => {
      const { nodeLookup: h, parentLookup: m, nodeOrigin: g, elevateNodesOnSelect: x, fitViewQueued: S, zIndexMode: k, nodesSelectionActive: E } = y(), { nodesInitialized: _, hasSelectedNodes: M } = mc(w, h, m, {
        nodeOrigin: g,
        nodeExtent: c,
        elevateNodesOnSelect: x,
        checkEquality: !0,
        zIndexMode: k
      }), $ = E && M;
      S && _ ? (v(), p({
        nodes: w,
        nodesInitialized: _,
        fitViewQueued: !1,
        fitViewOptions: void 0,
        nodesSelectionActive: $
      })) : p({ nodes: w, nodesInitialized: _, nodesSelectionActive: $ });
    },
    setEdges: (w) => {
      const { connectionLookup: h, edgeLookup: m } = y();
      Gy(h, m, w), p({ edges: w });
    },
    setDefaultNodesAndEdges: (w, h) => {
      if (w) {
        const { setNodes: m } = y();
        m(w), p({ hasDefaultNodes: !0 });
      }
      if (h) {
        const { setEdges: m } = y();
        m(h), p({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registered at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (w) => {
      const { triggerNodeChanges: h, nodeLookup: m, parentLookup: g, domNode: x, nodeOrigin: S, nodeExtent: k, debug: E, fitViewQueued: _, zIndexMode: M } = y(), { changes: $, updatedInternals: C } = EN(w, m, g, x, S, k, M);
      C && (wN(m, g, { nodeOrigin: S, nodeExtent: k, zIndexMode: M }), _ ? (v(), p({ fitViewQueued: !1, fitViewOptions: void 0 })) : p({}), ($ == null ? void 0 : $.length) > 0 && (E && console.log("React Flow: trigger node changes", $), h == null || h($)));
    },
    updateNodePositions: (w, h = !1) => {
      const m = [];
      let g = [];
      const { nodeLookup: x, triggerNodeChanges: S, connection: k, updateConnection: E, onNodesChangeMiddlewareMap: _ } = y();
      for (const [M, $] of w) {
        const C = x.get(M), P = !!(C != null && C.expandParent && (C != null && C.parentId) && ($ != null && $.position)), B = {
          id: M,
          type: "position",
          position: P ? {
            x: Math.max(0, $.position.x),
            y: Math.max(0, $.position.y)
          } : $.position,
          dragging: h
        };
        if (C && k.inProgress && k.fromNode.id === C.id) {
          const N = ur(C, k.fromHandle, X.Left, !0);
          E({ ...k, from: N });
        }
        P && C.parentId && m.push({
          id: M,
          parentId: C.parentId,
          rect: {
            ...$.internals.positionAbsolute,
            width: $.measured.width ?? 0,
            height: $.measured.height ?? 0
          }
        }), g.push(B);
      }
      if (m.length > 0) {
        const { parentLookup: M, nodeOrigin: $ } = y(), C = jf(m, x, M, $);
        g.push(...C);
      }
      for (const M of _.values())
        g = M(g);
      S(g);
    },
    triggerNodeChanges: (w) => {
      const { onNodesChange: h, setNodes: m, nodes: g, hasDefaultNodes: x, debug: S } = y();
      if (w != null && w.length) {
        if (x) {
          const k = z2(w, g);
          m(k);
        }
        S && console.log("React Flow: trigger node changes", w), h == null || h(w);
      }
    },
    triggerEdgeChanges: (w) => {
      const { onEdgesChange: h, setEdges: m, edges: g, hasDefaultEdges: x, debug: S } = y();
      if (w != null && w.length) {
        if (x) {
          const k = B2(w, g);
          m(k);
        }
        S && console.log("React Flow: trigger edge changes", w), h == null || h(w);
      }
    },
    addSelectedNodes: (w) => {
      const { multiSelectionActive: h, edgeLookup: m, nodeLookup: g, triggerNodeChanges: x, triggerEdgeChanges: S } = y();
      if (h) {
        const k = w.map((E) => Fn(E, !0));
        x(k);
        return;
      }
      x(Lr(g, /* @__PURE__ */ new Set([...w]), !0)), S(Lr(m));
    },
    addSelectedEdges: (w) => {
      const { multiSelectionActive: h, edgeLookup: m, nodeLookup: g, triggerNodeChanges: x, triggerEdgeChanges: S } = y();
      if (h) {
        const k = w.map((E) => Fn(E, !0));
        S(k);
        return;
      }
      S(Lr(m, /* @__PURE__ */ new Set([...w]))), x(Lr(g, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: w, edges: h } = {}) => {
      const { edges: m, nodes: g, nodeLookup: x, triggerNodeChanges: S, triggerEdgeChanges: k } = y(), E = w || g, _ = h || m, M = [];
      for (const C of E) {
        if (!C.selected)
          continue;
        const P = x.get(C.id);
        P && (P.selected = !1), M.push(Fn(C.id, !1));
      }
      const $ = [];
      for (const C of _)
        C.selected && $.push(Fn(C.id, !1));
      S(M), k($);
    },
    setMinZoom: (w) => {
      const { panZoom: h, maxZoom: m } = y();
      h == null || h.setScaleExtent([w, m]), p({ minZoom: w });
    },
    setMaxZoom: (w) => {
      const { panZoom: h, minZoom: m } = y();
      h == null || h.setScaleExtent([m, w]), p({ maxZoom: w });
    },
    setTranslateExtent: (w) => {
      var h;
      (h = y().panZoom) == null || h.setTranslateExtent(w), p({ translateExtent: w });
    },
    resetSelectedElements: () => {
      const { edges: w, nodes: h, triggerNodeChanges: m, triggerEdgeChanges: g, elementsSelectable: x } = y();
      if (!x)
        return;
      const S = h.reduce((E, _) => _.selected ? [...E, Fn(_.id, !1)] : E, []), k = w.reduce((E, _) => _.selected ? [...E, Fn(_.id, !1)] : E, []);
      m(S), g(k);
    },
    setNodeExtent: (w) => {
      const { nodes: h, nodeLookup: m, parentLookup: g, nodeOrigin: x, elevateNodesOnSelect: S, nodeExtent: k, zIndexMode: E } = y();
      w[0][0] === k[0][0] && w[0][1] === k[0][1] && w[1][0] === k[1][0] && w[1][1] === k[1][1] || (mc(h, m, g, {
        nodeOrigin: x,
        nodeExtent: w,
        elevateNodesOnSelect: S,
        checkEquality: !1,
        zIndexMode: E
      }), p({ nodeExtent: w }));
    },
    panBy: (w) => {
      const { transform: h, width: m, height: g, panZoom: x, translateExtent: S } = y();
      return _N({ delta: w, panZoom: x, transform: h, translateExtent: S, width: m, height: g });
    },
    setCenter: async (w, h, m) => {
      const { width: g, height: x, maxZoom: S, panZoom: k } = y();
      if (!k)
        return !1;
      const E = typeof (m == null ? void 0 : m.zoom) < "u" ? m.zoom : S;
      return await k.setViewport({
        x: g / 2 - w * E,
        y: x / 2 - h * E,
        zoom: E
      }, { duration: m == null ? void 0 : m.duration, ease: m == null ? void 0 : m.ease, interpolate: m == null ? void 0 : m.interpolate }), !0;
    },
    cancelConnection: () => {
      p({
        connection: { ...Ly }
      });
    },
    updateConnection: (w) => {
      p({ connection: w });
    },
    reset: () => p({ ...wp() })
  };
}, Object.is);
function F0({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: i, initialHeight: s, initialMinZoom: o, initialMaxZoom: l, initialFitViewOptions: a, fitView: u, nodeOrigin: d, nodeExtent: c, zIndexMode: f, children: p }) {
  const [y] = O.useState(() => ab({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: i,
    height: s,
    fitView: u,
    minZoom: o,
    maxZoom: l,
    fitViewOptions: a,
    nodeOrigin: d,
    nodeExtent: c,
    zIndexMode: f
  }));
  return L.jsx(w2, { value: y, children: L.jsx(W2, { children: L.jsx(lC, { children: p }) }) });
}
function ub({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: i, width: s, height: o, fitView: l, fitViewOptions: a, minZoom: u, maxZoom: d, nodeOrigin: c, nodeExtent: f, zIndexMode: p }) {
  return O.useContext(ia) ? L.jsx(L.Fragment, { children: e }) : L.jsx(F0, { initialNodes: t, initialEdges: n, defaultNodes: r, defaultEdges: i, initialWidth: s, initialHeight: o, fitView: l, initialFitViewOptions: a, initialMinZoom: u, initialMaxZoom: d, nodeOrigin: c, nodeExtent: f, zIndexMode: p, children: e });
}
const cb = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function fb({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: i, nodeTypes: s, edgeTypes: o, onNodeClick: l, onEdgeClick: a, onInit: u, onMove: d, onMoveStart: c, onMoveEnd: f, onConnect: p, onConnectStart: y, onConnectEnd: v, onClickConnectStart: w, onClickConnectEnd: h, onNodeMouseEnter: m, onNodeMouseMove: g, onNodeMouseLeave: x, onNodeContextMenu: S, onNodeDoubleClick: k, onNodeDragStart: E, onNodeDrag: _, onNodeDragStop: M, onNodesDelete: $, onEdgesDelete: C, onDelete: P, onSelectionChange: B, onSelectionDragStart: N, onSelectionDrag: A, onSelectionDragStop: b, onSelectionContextMenu: D, onSelectionStart: T, onSelectionEnd: I, onBeforeDelete: z, connectionMode: j, connectionLineType: R = mn.Bezier, connectionLineStyle: H, connectionLineComponent: U, connectionLineContainerStyle: Y, deleteKeyCode: J = "Backspace", selectionKeyCode: Q = "Shift", selectionOnDrag: F = !1, selectionMode: K = ks.Full, panActivationKeyCode: ee = "Space", multiSelectionKeyCode: Z = Ns() ? "Meta" : "Control", zoomActivationKeyCode: G = Ns() ? "Meta" : "Control", snapToGrid: q, snapGrid: ne, onlyRenderVisibleElements: oe = !1, selectNodesOnDrag: le, nodesDraggable: xe, autoPanOnNodeFocus: st, nodesConnectable: At, nodesFocusable: Lt, nodeOrigin: Vt = p0, edgesFocusable: vi, edgesReconnectable: Dn, elementsSelectable: jn = !0, defaultViewport: gt = L2, minZoom: Ht = 0.5, maxZoom: Ut = 2, translateExtent: Rn = Ss, preventScrolling: Fv = !0, nodeExtent: xa, defaultMarkerColor: Vv = "#b1b1b7", zoomOnScroll: Hv = !0, zoomOnPinch: Uv = !0, panOnScroll: Kv = !1, panOnScrollSpeed: Wv = 0.5, panOnScrollMode: Yv = Zn.Free, zoomOnDoubleClick: Xv = !0, panOnDrag: Qv = !0, onPaneClick: qv, onPaneMouseEnter: Gv, onPaneMouseMove: Jv, onPaneMouseLeave: Zv, onPaneScroll: ew, onPaneContextMenu: tw, paneClickDistance: nw = 1, nodeClickDistance: rw = 0, children: iw, onReconnect: sw, onReconnectStart: ow, onReconnectEnd: lw, onEdgeContextMenu: aw, onEdgeDoubleClick: uw, onEdgeMouseEnter: cw, onEdgeMouseMove: fw, onEdgeMouseLeave: dw, reconnectRadius: hw = 10, onNodesChange: pw, onEdgesChange: gw, noDragClassName: mw = "nodrag", noWheelClassName: yw = "nowheel", noPanClassName: td = "nopan", fitView: nd, fitViewOptions: rd, connectOnClick: vw, attributionPosition: ww, proOptions: xw, defaultEdgeOptions: Sw, elevateNodesOnSelect: kw = !0, elevateEdgesOnSelect: Ew = !1, disableKeyboardA11y: id = !1, autoPanOnConnect: _w, autoPanOnNodeDrag: Nw, autoPanOnSelection: Cw = !0, autoPanSpeed: bw, connectionRadius: Mw, isValidConnection: Tw, onError: Iw, style: Aw, id: sd, nodeDragThreshold: Lw, connectionDragThreshold: $w, viewport: Pw, onViewportChange: Ow, width: Dw, height: jw, colorMode: Rw = "light", debug: zw, onScroll: Ws, ariaLabelConfig: Bw, zIndexMode: od = "basic", ...Fw }, Vw) {
  const Sa = sd || "1", Hw = D2(Rw), Uw = O.useCallback((ld) => {
    ld.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Ws == null || Ws(ld);
  }, [Ws]);
  return L.jsx("div", { "data-testid": "rf__wrapper", ...Fw, onScroll: Uw, style: { ...Aw, ...cb }, ref: Vw, className: Ce(["react-flow", i, Hw]), id: sd, role: "application", children: L.jsxs(ub, { nodes: e, edges: t, width: Dw, height: jw, fitView: nd, fitViewOptions: rd, minZoom: Ht, maxZoom: Ut, nodeOrigin: Vt, nodeExtent: xa, zIndexMode: od, children: [L.jsx(O2, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: p, onConnectStart: y, onConnectEnd: v, onClickConnectStart: w, onClickConnectEnd: h, nodesDraggable: xe, autoPanOnNodeFocus: st, nodesConnectable: At, nodesFocusable: Lt, edgesFocusable: vi, edgesReconnectable: Dn, elementsSelectable: jn, elevateNodesOnSelect: kw, elevateEdgesOnSelect: Ew, minZoom: Ht, maxZoom: Ut, nodeExtent: xa, onNodesChange: pw, onEdgesChange: gw, snapToGrid: q, snapGrid: ne, connectionMode: j, translateExtent: Rn, connectOnClick: vw, defaultEdgeOptions: Sw, fitView: nd, fitViewOptions: rd, onNodesDelete: $, onEdgesDelete: C, onDelete: P, onNodeDragStart: E, onNodeDrag: _, onNodeDragStop: M, onSelectionDrag: A, onSelectionDragStart: N, onSelectionDragStop: b, onMove: d, onMoveStart: c, onMoveEnd: f, noPanClassName: td, nodeOrigin: Vt, rfId: Sa, autoPanOnConnect: _w, autoPanOnNodeDrag: Nw, autoPanSpeed: bw, onError: Iw, connectionRadius: Mw, isValidConnection: Tw, selectNodesOnDrag: le, nodeDragThreshold: Lw, connectionDragThreshold: $w, onBeforeDelete: z, debug: zw, ariaLabelConfig: Bw, zIndexMode: od }), L.jsx(ob, { onInit: u, onNodeClick: l, onEdgeClick: a, onNodeMouseEnter: m, onNodeMouseMove: g, onNodeMouseLeave: x, onNodeContextMenu: S, onNodeDoubleClick: k, nodeTypes: s, edgeTypes: o, connectionLineType: R, connectionLineStyle: H, connectionLineComponent: U, connectionLineContainerStyle: Y, selectionKeyCode: Q, selectionOnDrag: F, selectionMode: K, deleteKeyCode: J, multiSelectionKeyCode: Z, panActivationKeyCode: ee, zoomActivationKeyCode: G, onlyRenderVisibleElements: oe, defaultViewport: gt, translateExtent: Rn, minZoom: Ht, maxZoom: Ut, preventScrolling: Fv, zoomOnScroll: Hv, zoomOnPinch: Uv, zoomOnDoubleClick: Xv, panOnScroll: Kv, panOnScrollSpeed: Wv, panOnScrollMode: Yv, panOnDrag: Qv, autoPanOnSelection: Cw, onPaneClick: qv, onPaneMouseEnter: Gv, onPaneMouseMove: Jv, onPaneMouseLeave: Zv, onPaneScroll: ew, onPaneContextMenu: tw, paneClickDistance: nw, nodeClickDistance: rw, onSelectionContextMenu: D, onSelectionStart: T, onSelectionEnd: I, onReconnect: sw, onReconnectStart: ow, onReconnectEnd: lw, onEdgeContextMenu: aw, onEdgeDoubleClick: uw, onEdgeMouseEnter: cw, onEdgeMouseMove: fw, onEdgeMouseLeave: dw, reconnectRadius: hw, defaultMarkerColor: Vv, noDragClassName: mw, noWheelClassName: yw, noPanClassName: td, rfId: Sa, disableKeyboardA11y: id, nodeExtent: xa, viewport: Pw, onViewportChange: Ow }), L.jsx(A2, { onSelectionChange: B }), iw, L.jsx(C2, { proOptions: xw, position: ww }), L.jsx(N2, { rfId: Sa, disableKeyboardA11y: id })] }) });
}
var db = m0(fb);
function hb({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return L.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: Ce(["react-flow__background-pattern", n, r]) });
}
function pb({ radius: e, className: t }) {
  return L.jsx("circle", { cx: e, cy: e, r: e, className: Ce(["react-flow__background-pattern", "dots", t]) });
}
var Mn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Mn || (Mn = {}));
const gb = {
  [Mn.Dots]: 1,
  [Mn.Lines]: 1,
  [Mn.Cross]: 6
}, mb = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function V0({
  id: e,
  variant: t = Mn.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: r,
  lineWidth: i = 1,
  offset: s = 0,
  color: o,
  bgColor: l,
  style: a,
  className: u,
  patternClassName: d
}) {
  const c = O.useRef(null), { transform: f, patternId: p } = ie(mb, pe), y = r || gb[t], v = t === Mn.Dots, w = t === Mn.Cross, h = Array.isArray(n) ? n : [n, n], m = [h[0] * f[2] || 1, h[1] * f[2] || 1], g = y * f[2], x = Array.isArray(s) ? s : [s, s], S = w ? [g, g] : m, k = [
    x[0] * f[2] || 1 + S[0] / 2,
    x[1] * f[2] || 1 + S[1] / 2
  ], E = `${p}${e || ""}`;
  return L.jsxs("svg", { className: Ce(["react-flow__background", u]), style: {
    ...a,
    ...la,
    "--xy-background-color-props": l,
    "--xy-background-pattern-color-props": o
  }, ref: c, "data-testid": "rf__background", children: [L.jsx("pattern", { id: E, x: f[0] % m[0], y: f[1] % m[1], width: m[0], height: m[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${k[0]},-${k[1]})`, children: v ? L.jsx(pb, { radius: g / 2, className: d }) : L.jsx(hb, { dimensions: S, lineWidth: i, variant: t, className: d }) }), L.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${E})` })] });
}
V0.displayName = "Background";
const yb = O.memo(V0);
function vb() {
  return L.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: L.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function wb() {
  return L.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: L.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function xb() {
  return L.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: L.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function Sb() {
  return L.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: L.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function kb() {
  return L.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: L.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function wo({ children: e, className: t, ...n }) {
  return L.jsx("button", { type: "button", className: Ce(["react-flow__controls-button", t]), ...n, children: e });
}
const Eb = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function H0({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: i, onZoomIn: s, onZoomOut: o, onFitView: l, onInteractiveChange: a, className: u, children: d, position: c = "bottom-left", orientation: f = "vertical", "aria-label": p }) {
  const y = ge(), { isInteractive: v, minZoomReached: w, maxZoomReached: h, ariaLabelConfig: m } = ie(Eb, pe), { zoomIn: g, zoomOut: x, fitView: S } = oa(), k = () => {
    g(), s == null || s();
  }, E = () => {
    x(), o == null || o();
  }, _ = () => {
    S(i), l == null || l();
  }, M = () => {
    y.setState({
      nodesDraggable: !v,
      nodesConnectable: !v,
      elementsSelectable: !v
    }), a == null || a(!v);
  }, $ = f === "horizontal" ? "horizontal" : "vertical";
  return L.jsxs(sa, { className: Ce(["react-flow__controls", $, u]), position: c, style: e, "data-testid": "rf__controls", "aria-label": p ?? m["controls.ariaLabel"], children: [t && L.jsxs(L.Fragment, { children: [L.jsx(wo, { onClick: k, className: "react-flow__controls-zoomin", title: m["controls.zoomIn.ariaLabel"], "aria-label": m["controls.zoomIn.ariaLabel"], disabled: h, children: L.jsx(vb, {}) }), L.jsx(wo, { onClick: E, className: "react-flow__controls-zoomout", title: m["controls.zoomOut.ariaLabel"], "aria-label": m["controls.zoomOut.ariaLabel"], disabled: w, children: L.jsx(wb, {}) })] }), n && L.jsx(wo, { className: "react-flow__controls-fitview", onClick: _, title: m["controls.fitView.ariaLabel"], "aria-label": m["controls.fitView.ariaLabel"], children: L.jsx(xb, {}) }), r && L.jsx(wo, { className: "react-flow__controls-interactive", onClick: M, title: m["controls.interactive.ariaLabel"], "aria-label": m["controls.interactive.ariaLabel"], children: v ? L.jsx(kb, {}) : L.jsx(Sb, {}) }), d] });
}
H0.displayName = "Controls";
const _b = O.memo(H0);
function Nb({ id: e, x: t, y: n, width: r, height: i, style: s, color: o, strokeColor: l, strokeWidth: a, className: u, borderRadius: d, shapeRendering: c, selected: f, onClick: p }) {
  const { background: y, backgroundColor: v } = s || {}, w = o || y || v;
  return L.jsx("rect", { className: Ce(["react-flow__minimap-node", { selected: f }, u]), x: t, y: n, rx: d, ry: d, width: r, height: i, style: {
    fill: w,
    stroke: l,
    strokeWidth: a
  }, shapeRendering: c, onClick: p ? (h) => p(h, e) : void 0 });
}
const Cb = O.memo(Nb), bb = (e) => e.nodes.map((t) => t.id), ru = (e) => e instanceof Function ? e : () => e;
function Mb({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: i,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: s = Cb,
  onClick: o
}) {
  const l = ie(bb, pe), a = ru(t), u = ru(e), d = ru(n), c = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return L.jsx(L.Fragment, { children: l.map((f) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    L.jsx(Ib, { id: f, nodeColorFunc: a, nodeStrokeColorFunc: u, nodeClassNameFunc: d, nodeBorderRadius: r, nodeStrokeWidth: i, NodeComponent: s, onClick: o, shapeRendering: c }, f)
  )) });
}
function Tb({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: i, nodeStrokeWidth: s, shapeRendering: o, NodeComponent: l, onClick: a }) {
  const { node: u, x: d, y: c, width: f, height: p } = ie((y) => {
    const v = y.nodeLookup.get(e);
    if (!v)
      return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const w = v.internals.userNode, { x: h, y: m } = v.internals.positionAbsolute, { width: g, height: x } = ln(w);
    return {
      node: w,
      x: h,
      y: m,
      width: g,
      height: x
    };
  }, pe);
  return !u || u.hidden || !By(u) ? null : L.jsx(l, { x: d, y: c, width: f, height: p, style: u.style, selected: !!u.selected, className: r(u), color: t(u), borderRadius: i, strokeColor: n(u), strokeWidth: s, shapeRendering: o, onClick: a, id: u.id });
}
const Ib = O.memo(Tb);
var Ab = O.memo(Mb);
const Lb = 200, $b = 150, Pb = (e) => !e.hidden, Ob = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? jy(Rs(e.nodeLookup, { filter: Pb }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, Db = "react-flow__minimap-desc";
function U0({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: r,
  nodeClassName: i = "",
  nodeBorderRadius: s = 5,
  nodeStrokeWidth: o,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: l,
  bgColor: a,
  maskColor: u,
  maskStrokeColor: d,
  maskStrokeWidth: c,
  position: f = "bottom-right",
  onClick: p,
  onNodeClick: y,
  pannable: v = !1,
  zoomable: w = !1,
  ariaLabel: h,
  inversePan: m,
  zoomStep: g = 1,
  offsetScale: x = 5
}) {
  const S = ge(), k = O.useRef(null), { boundingRect: E, viewBB: _, rfId: M, panZoom: $, translateExtent: C, flowWidth: P, flowHeight: B, ariaLabelConfig: N } = ie(Ob, pe), A = (e == null ? void 0 : e.width) ?? Lb, b = (e == null ? void 0 : e.height) ?? $b, D = E.width / A, T = E.height / b, I = Math.max(D, T), z = I * A, j = I * b, R = x * I, H = E.x - (z - E.width) / 2 - R, U = E.y - (j - E.height) / 2 - R, Y = z + R * 2, J = j + R * 2, Q = `${Db}-${M}`, F = O.useRef(0), K = O.useRef();
  F.current = I, O.useEffect(() => {
    if (k.current && $)
      return K.current = $N({
        domNode: k.current,
        panZoom: $,
        getTransform: () => S.getState().transform,
        getViewScale: () => F.current
      }), () => {
        var q;
        (q = K.current) == null || q.destroy();
      };
  }, [$]), O.useEffect(() => {
    var q;
    (q = K.current) == null || q.update({
      translateExtent: C,
      width: P,
      height: B,
      inversePan: m,
      pannable: v,
      zoomStep: g,
      zoomable: w
    });
  }, [v, w, m, g, C, P, B]);
  const ee = p ? (q) => {
    var le;
    const [ne, oe] = ((le = K.current) == null ? void 0 : le.pointer(q)) || [0, 0];
    p(q, { x: ne, y: oe });
  } : void 0, Z = y ? O.useCallback((q, ne) => {
    const oe = S.getState().nodeLookup.get(ne).internals.userNode;
    y(q, oe);
  }, []) : void 0, G = h ?? N["minimap.ariaLabel"];
  return L.jsx(sa, { position: f, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof a == "string" ? a : void 0,
    "--xy-minimap-mask-background-color-props": typeof u == "string" ? u : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof c == "number" ? c * I : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof o == "number" ? o : void 0
  }, className: Ce(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: L.jsxs("svg", { width: A, height: b, viewBox: `${H} ${U} ${Y} ${J}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": Q, ref: k, onClick: ee, children: [G && L.jsx("title", { id: Q, children: G }), L.jsx(Ab, { onClick: Z, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: s, nodeClassName: i, nodeStrokeWidth: o, nodeComponent: l }), L.jsx("path", { className: "react-flow__minimap-mask", d: `M${H - R},${U - R}h${Y + R * 2}v${J + R * 2}h${-Y - R * 2}z
        M${_.x},${_.y}h${_.width}v${_.height}h${-_.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
U0.displayName = "MiniMap";
O.memo(U0);
const jb = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, Rb = {
  [si.Line]: "right",
  [si.Handle]: "bottom-right"
};
function zb({ nodeId: e, position: t, variant: n = si.Handle, className: r, style: i = void 0, children: s, color: o, minWidth: l = 10, minHeight: a = 10, maxWidth: u = Number.MAX_VALUE, maxHeight: d = Number.MAX_VALUE, keepAspectRatio: c = !1, resizeDirection: f, autoScale: p = !0, shouldResize: y, onResizeStart: v, onResize: w, onResizeEnd: h }) {
  const m = x0(), g = typeof e == "string" ? e : m, x = ge(), S = O.useRef(null), k = n === si.Handle, E = ie(O.useCallback(jb(k && p), [k, p]), pe), _ = O.useRef(null), M = t ?? Rb[n];
  O.useEffect(() => {
    if (!(!S.current || !g))
      return _.current || (_.current = WN({
        domNode: S.current,
        nodeId: g,
        getStoreItems: () => {
          const { nodeLookup: C, transform: P, snapGrid: B, snapToGrid: N, nodeOrigin: A, domNode: b } = x.getState();
          return {
            nodeLookup: C,
            transform: P,
            snapGrid: B,
            snapToGrid: N,
            nodeOrigin: A,
            paneDomNode: b
          };
        },
        onChange: (C, P) => {
          const { triggerNodeChanges: B, nodeLookup: N, parentLookup: A, nodeOrigin: b } = x.getState(), D = [], T = { x: C.x, y: C.y }, I = N.get(g);
          if (I && I.expandParent && I.parentId) {
            const z = I.origin ?? b, j = C.width ?? I.measured.width ?? 0, R = C.height ?? I.measured.height ?? 0, H = {
              id: I.id,
              parentId: I.parentId,
              rect: {
                width: j,
                height: R,
                ...Fy({
                  x: C.x ?? I.position.x,
                  y: C.y ?? I.position.y
                }, { width: j, height: R }, I.parentId, N, z)
              }
            }, U = jf([H], N, A, b);
            D.push(...U), T.x = C.x ? Math.max(z[0] * j, C.x) : void 0, T.y = C.y ? Math.max(z[1] * R, C.y) : void 0;
          }
          if (T.x !== void 0 && T.y !== void 0) {
            const z = {
              id: g,
              type: "position",
              position: { ...T }
            };
            D.push(z);
          }
          if (C.width !== void 0 && C.height !== void 0) {
            const j = {
              id: g,
              type: "dimensions",
              resizing: !0,
              setAttributes: f ? f === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: C.width,
                height: C.height
              }
            };
            D.push(j);
          }
          for (const z of P) {
            const j = {
              ...z,
              type: "position"
            };
            D.push(j);
          }
          B(D);
        },
        onEnd: ({ width: C, height: P }) => {
          const B = {
            id: g,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: C,
              height: P
            }
          };
          x.getState().triggerNodeChanges([B]);
        }
      })), _.current.update({
        controlPosition: M,
        boundaries: {
          minWidth: l,
          minHeight: a,
          maxWidth: u,
          maxHeight: d
        },
        keepAspectRatio: c,
        resizeDirection: f,
        onResizeStart: v,
        onResize: w,
        onResizeEnd: h,
        shouldResize: y
      }), () => {
        var C;
        (C = _.current) == null || C.destroy();
      };
  }, [
    M,
    l,
    a,
    u,
    d,
    c,
    v,
    w,
    h,
    y
  ]);
  const $ = M.split("-");
  return L.jsx("div", { className: Ce(["react-flow__resize-control", "nodrag", ...$, n, r]), ref: S, style: {
    ...i,
    scale: E,
    ...o && { [k ? "backgroundColor" : "borderColor"]: o }
  }, children: s });
}
O.memo(zb);
const zf = () => /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
  /* @__PURE__ */ L.jsx(wn, { type: "target", position: X.Left, id: "lt", className: "rf-h" }),
  /* @__PURE__ */ L.jsx(wn, { type: "source", position: X.Left, id: "ls", className: "rf-h" }),
  /* @__PURE__ */ L.jsx(wn, { type: "target", position: X.Right, id: "rt", className: "rf-h" }),
  /* @__PURE__ */ L.jsx(wn, { type: "source", position: X.Right, id: "rs", className: "rf-h" })
] });
function Bb({ data: e }) {
  return /* @__PURE__ */ L.jsxs("div", { className: "rf-system", children: [
    e.favicon ? /* @__PURE__ */ L.jsx(
      "img",
      {
        className: "rf-ico",
        src: e.favicon,
        width: "20",
        height: "20",
        onError: (t) => {
          t.target.style.visibility = "hidden";
        }
      }
    ) : /* @__PURE__ */ L.jsx("span", { className: "rf-fallback", children: (e.label || "?")[0].toUpperCase() }),
    /* @__PURE__ */ L.jsxs("div", { className: "rf-sys-body", children: [
      /* @__PURE__ */ L.jsx("div", { className: "rf-sys-name", children: e.label }),
      e.description ? /* @__PURE__ */ L.jsx("div", { className: "rf-sys-desc", children: e.description }) : null
    ] }),
    /* @__PURE__ */ L.jsx(zf, {})
  ] });
}
function Fb({ data: e }) {
  return /* @__PURE__ */ L.jsxs("div", { className: "rf-loop", children: [
    /* @__PURE__ */ L.jsxs("div", { className: "rf-loop-head", children: [
      /* @__PURE__ */ L.jsx("span", { children: "Agentic Loop" }),
      e.emoji ? /* @__PURE__ */ L.jsx("span", { className: "rf-emoji", children: e.emoji }) : null
    ] }),
    /* @__PURE__ */ L.jsxs("div", { className: "rf-loop-body", children: [
      /* @__PURE__ */ L.jsx("div", { className: "rf-loop-name", children: e.label }),
      e.description ? /* @__PURE__ */ L.jsx("div", { className: "rf-loop-desc", children: e.description }) : null
    ] }),
    /* @__PURE__ */ L.jsx(zf, {})
  ] });
}
function Vb() {
  return /* @__PURE__ */ L.jsx("div", { className: "rf-dummy", children: /* @__PURE__ */ L.jsx(zf, {}) });
}
const Hb = { system: Bb, loop: Fb, dummy: Vb };
function Ti(e, t) {
  return t ? /* @__PURE__ */ L.jsxs("div", { className: "flow-field", children: [
    /* @__PURE__ */ L.jsx("div", { className: "flow-field-label", children: e }),
    /* @__PURE__ */ L.jsx("div", { className: "flow-field-value", children: t })
  ] }) : null;
}
function mr(e, t) {
  return !t || !t.length ? null : /* @__PURE__ */ L.jsxs("div", { className: "flow-field", children: [
    /* @__PURE__ */ L.jsx("div", { className: "flow-field-label", children: e }),
    /* @__PURE__ */ L.jsx("div", { children: t.map((n, r) => /* @__PURE__ */ L.jsx("span", { className: "flow-chip", children: n }, r)) })
  ] });
}
const xp = (e) => /* @__PURE__ */ L.jsx("a", { href: e, target: "_blank", rel: "noopener", children: e });
function Ub({ node: e, onClose: t }) {
  const n = e.data, r = e.type === "loop";
  return /* @__PURE__ */ L.jsxs("aside", { className: "flow-panel", children: [
    /* @__PURE__ */ L.jsx("button", { className: "flow-panel-close", onClick: t, "aria-label": "Close", children: "×" }),
    /* @__PURE__ */ L.jsx("div", { className: "flow-panel-kind", children: r ? "Loop" : "System" }),
    /* @__PURE__ */ L.jsx("h3", { children: n.label }),
    /* @__PURE__ */ L.jsx("div", { className: "flow-panel-id", children: n.id }),
    n.description ? /* @__PURE__ */ L.jsx("p", { className: "flow-panel-desc", children: n.description }) : null,
    r ? /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
      Ti("Instructions", n.instructions),
      mr("Triggers", n.triggers),
      Ti("Model", n.model),
      mr("Uses", n.uses),
      mr("Writes back", n.writesBack),
      mr("Tools", n.tools)
    ] }) : /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
      n.url ? Ti("URL", xp(n.url)) : null,
      n.repository ? Ti("Repository", xp(n.repository)) : null,
      Ti("Connector", n.connector),
      mr("Read by", n.readBy),
      mr("Written by", n.writtenBy)
    ] })
  ] });
}
function Kb(e) {
  const t = e.edge || "#9ca3af";
  return e.edges.map((n) => ({
    id: n.id,
    source: n.source,
    target: n.target,
    sourceHandle: n.sourceHandle,
    targetHandle: n.targetHandle,
    style: { stroke: t, strokeWidth: 1.5 },
    markerEnd: n.end === !1 ? void 0 : { type: Es.ArrowClosed, color: t, width: 15, height: 15 }
  }));
}
function Wb({ graph: e, fitKey: t }) {
  const [n, r] = O.useState(null), i = oa(), s = Kb(e);
  return O.useEffect(() => {
    const o = setTimeout(() => i.fitView({ duration: 200 }), 30);
    return () => clearTimeout(o);
  }, [t, i]), /* @__PURE__ */ L.jsxs("div", { className: "flow-wrap", children: [
    /* @__PURE__ */ L.jsxs(
      db,
      {
        nodes: e.nodes,
        edges: s,
        nodeTypes: Hb,
        fitView: !0,
        minZoom: 0.2,
        nodesConnectable: !1,
        onNodeClick: (o, l) => r(l),
        onPaneClick: () => r(null),
        children: [
          /* @__PURE__ */ L.jsx(yb, { color: "#e5e7eb", gap: 22 }),
          /* @__PURE__ */ L.jsx(_b, { showInteractive: !1 })
        ]
      }
    ),
    n ? /* @__PURE__ */ L.jsx(Ub, { node: n, onClose: () => r(null) }) : null
  ] });
}
function K0({ graph: e, fitKey: t }) {
  return /* @__PURE__ */ L.jsx(F0, { children: /* @__PURE__ */ L.jsx(Wb, { graph: e, fitKey: t }) });
}
function Sp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Yb(e) {
  if (Array.isArray(e)) return e;
}
function Xb(e, t, n) {
  return (t = tM(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Qb(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, s, o, l = [], a = !0, u = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(a = (r = s.call(n)).done) && (l.push(r.value), l.length !== t); a = !0) ;
    } catch (d) {
      u = !0, i = d;
    } finally {
      try {
        if (!a && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return l;
  }
}
function qb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ep(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kp(Object(n), !0).forEach(function(r) {
      Xb(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Gb(e, t) {
  if (e == null) return {};
  var n, r, i = Jb(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
function Jb(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Zb(e, t) {
  return Yb(e) || Qb(e, t) || nM(e, t) || qb();
}
function eM(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tM(e) {
  var t = eM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nM(e, t) {
  if (e) {
    if (typeof e == "string") return Sp(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Sp(e, t) : void 0;
  }
}
function rM(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Np(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _p(Object(n), !0).forEach(function(r) {
      rM(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _p(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function iM() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return t.reduceRight(function(i, s) {
      return s(i);
    }, r);
  };
}
function ji(e) {
  return function t() {
    for (var n = this, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return i.length >= e.length ? e.apply(this, i) : function() {
      for (var o = arguments.length, l = new Array(o), a = 0; a < o; a++)
        l[a] = arguments[a];
      return t.apply(n, [].concat(i, l));
    };
  };
}
function Tl(e) {
  return {}.toString.call(e).includes("Object");
}
function sM(e) {
  return !Object.keys(e).length;
}
function bs(e) {
  return typeof e == "function";
}
function oM(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function lM(e, t) {
  return Tl(t) || Tn("changeType"), Object.keys(t).some(function(n) {
    return !oM(e, n);
  }) && Tn("changeField"), t;
}
function aM(e) {
  bs(e) || Tn("selectorType");
}
function uM(e) {
  bs(e) || Tl(e) || Tn("handlerType"), Tl(e) && Object.values(e).some(function(t) {
    return !bs(t);
  }) && Tn("handlersType");
}
function cM(e) {
  e || Tn("initialIsRequired"), Tl(e) || Tn("initialType"), sM(e) && Tn("initialContent");
}
function fM(e, t) {
  throw new Error(e[t] || e.default);
}
var dM = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, Tn = ji(fM)(dM), xo = {
  changes: lM,
  selector: aM,
  handler: uM,
  initial: cM
};
function hM(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  xo.initial(e), xo.handler(t);
  var n = {
    current: e
  }, r = ji(mM)(n, t), i = ji(gM)(n), s = ji(xo.changes)(e), o = ji(pM)(n);
  function l() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(d) {
      return d;
    };
    return xo.selector(u), u(n.current);
  }
  function a(u) {
    iM(r, i, s, o)(u);
  }
  return [l, a];
}
function pM(e, t) {
  return bs(t) ? t(e.current) : t;
}
function gM(e, t) {
  return e.current = Np(Np({}, e.current), t), t;
}
function mM(e, t, n) {
  return bs(t) ? t(e.current) : Object.keys(n).forEach(function(r) {
    var i;
    return (i = t[r]) === null || i === void 0 ? void 0 : i.call(t, e.current[r]);
  }), n;
}
var yM = {
  create: hM
}, vM = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"
  }
};
function wM(e) {
  return function t() {
    for (var n = this, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return i.length >= e.length ? e.apply(this, i) : function() {
      for (var o = arguments.length, l = new Array(o), a = 0; a < o; a++)
        l[a] = arguments[a];
      return t.apply(n, [].concat(i, l));
    };
  };
}
function xM(e) {
  return {}.toString.call(e).includes("Object");
}
function SM(e) {
  return e || Cp("configIsRequired"), xM(e) || Cp("configType"), e.urls ? (kM(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function kM() {
  console.warn(W0.deprecation);
}
function EM(e, t) {
  throw new Error(e[t] || e.default);
}
var W0 = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, Cp = wM(EM)(W0), _M = {
  config: SM
}, NM = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return function(i) {
    return n.reduceRight(function(s, o) {
      return o(s);
    }, i);
  };
};
function Y0(e, t) {
  return Object.keys(t).forEach(function(n) {
    t[n] instanceof Object && e[n] && Object.assign(t[n], Y0(e[n], t[n]));
  }), Ep(Ep({}, e), t);
}
var CM = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function iu(e) {
  var t = !1, n = new Promise(function(r, i) {
    e.then(function(s) {
      return t ? i(CM) : r(s);
    }), e.catch(i);
  });
  return n.cancel = function() {
    return t = !0;
  }, n;
}
var bM = ["monaco"], MM = yM.create({
  config: vM,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), X0 = Zb(MM, 2), Fs = X0[0], ua = X0[1];
function TM(e) {
  var t = _M.config(e), n = t.monaco, r = Gb(t, bM);
  ua(function(i) {
    return {
      config: Y0(i.config, r),
      monaco: n
    };
  });
}
function IM() {
  var e = Fs(function(t) {
    var n = t.monaco, r = t.isInitialized, i = t.resolve;
    return {
      monaco: n,
      isInitialized: r,
      resolve: i
    };
  });
  if (!e.isInitialized) {
    if (ua({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), iu(su);
    if (window.monaco && window.monaco.editor)
      return Q0(window.monaco), e.resolve(window.monaco), iu(su);
    NM(AM, $M)(PM);
  }
  return iu(su);
}
function AM(e) {
  return document.body.appendChild(e);
}
function LM(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function $M(e) {
  var t = Fs(function(r) {
    var i = r.config, s = r.reject;
    return {
      config: i,
      reject: s
    };
  }), n = LM("".concat(t.config.paths.vs, "/loader.js"));
  return n.onload = function() {
    return e();
  }, n.onerror = t.reject, n;
}
function PM() {
  var e = Fs(function(n) {
    var r = n.config, i = n.resolve, s = n.reject;
    return {
      config: r,
      resolve: i,
      reject: s
    };
  }), t = window.require;
  t.config(e.config), t(["vs/editor/editor.main"], function(n) {
    var r = n.m || n;
    Q0(r), e.resolve(r);
  }, function(n) {
    e.reject(n);
  });
}
function Q0(e) {
  Fs().monaco || ua({
    monaco: e
  });
}
function OM() {
  return Fs(function(e) {
    var t = e.monaco;
    return t;
  });
}
var su = new Promise(function(e, t) {
  return ua({
    resolve: e,
    reject: t
  });
}), q0 = {
  config: TM,
  init: IM,
  __getMonacoInstance: OM
}, DM = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, ou = DM, jM = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, RM = jM;
function zM({ children: e }) {
  return Qn.createElement("div", { style: RM.container }, e);
}
var BM = zM, FM = BM;
function VM({ width: e, height: t, isEditorReady: n, loading: r, _ref: i, className: s, wrapperProps: o }) {
  return Qn.createElement("section", { style: { ...ou.wrapper, width: e, height: t }, ...o }, !n && Qn.createElement(FM, null, r), Qn.createElement("div", { ref: i, style: { ...ou.fullWidth, ...!n && ou.hide }, className: s }));
}
var HM = VM, G0 = O.memo(HM);
function UM(e) {
  O.useEffect(e, []);
}
var J0 = UM;
function KM(e, t, n = !0) {
  let r = O.useRef(!0);
  O.useEffect(r.current || !n ? () => {
    r.current = !1;
  } : e, t);
}
var Ge = KM;
function Gi() {
}
function $r(e, t, n, r) {
  return WM(e, r) || YM(e, t, n, r);
}
function WM(e, t) {
  return e.editor.getModel(Z0(e, t));
}
function YM(e, t, n, r) {
  return e.editor.createModel(t, n, r ? Z0(e, r) : void 0);
}
function Z0(e, t) {
  return e.Uri.parse(t);
}
function XM({ original: e, modified: t, language: n, originalLanguage: r, modifiedLanguage: i, originalModelPath: s, modifiedModelPath: o, keepCurrentOriginalModel: l = !1, keepCurrentModifiedModel: a = !1, theme: u = "light", loading: d = "Loading...", options: c = {}, height: f = "100%", width: p = "100%", className: y, wrapperProps: v = {}, beforeMount: w = Gi, onMount: h = Gi }) {
  let [m, g] = O.useState(!1), [x, S] = O.useState(!0), k = O.useRef(null), E = O.useRef(null), _ = O.useRef(null), M = O.useRef(h), $ = O.useRef(w), C = O.useRef(!1);
  J0(() => {
    let A = q0.init();
    return A.then((b) => (E.current = b) && S(!1)).catch((b) => (b == null ? void 0 : b.type) !== "cancelation" && console.error("Monaco initialization: error:", b)), () => k.current ? N() : A.cancel();
  }), Ge(() => {
    if (k.current && E.current) {
      let A = k.current.getOriginalEditor(), b = $r(E.current, e || "", r || n || "text", s || "");
      b !== A.getModel() && A.setModel(b);
    }
  }, [s], m), Ge(() => {
    if (k.current && E.current) {
      let A = k.current.getModifiedEditor(), b = $r(E.current, t || "", i || n || "text", o || "");
      b !== A.getModel() && A.setModel(b);
    }
  }, [o], m), Ge(() => {
    let A = k.current.getModifiedEditor();
    A.getOption(E.current.editor.EditorOption.readOnly) ? A.setValue(t || "") : t !== A.getValue() && (A.executeEdits("", [{ range: A.getModel().getFullModelRange(), text: t || "", forceMoveMarkers: !0 }]), A.pushUndoStop());
  }, [t], m), Ge(() => {
    var A, b;
    (b = (A = k.current) == null ? void 0 : A.getModel()) == null || b.original.setValue(e || "");
  }, [e], m), Ge(() => {
    let { original: A, modified: b } = k.current.getModel();
    E.current.editor.setModelLanguage(A, r || n || "text"), E.current.editor.setModelLanguage(b, i || n || "text");
  }, [n, r, i], m), Ge(() => {
    var A;
    (A = E.current) == null || A.editor.setTheme(u);
  }, [u], m), Ge(() => {
    var A;
    (A = k.current) == null || A.updateOptions(c);
  }, [c], m);
  let P = O.useCallback(() => {
    var D;
    if (!E.current) return;
    $.current(E.current);
    let A = $r(E.current, e || "", r || n || "text", s || ""), b = $r(E.current, t || "", i || n || "text", o || "");
    (D = k.current) == null || D.setModel({ original: A, modified: b });
  }, [n, t, i, e, r, s, o]), B = O.useCallback(() => {
    var A;
    !C.current && _.current && (k.current = E.current.editor.createDiffEditor(_.current, { automaticLayout: !0, ...c }), P(), (A = E.current) == null || A.editor.setTheme(u), g(!0), C.current = !0);
  }, [c, u, P]);
  O.useEffect(() => {
    m && M.current(k.current, E.current);
  }, [m]), O.useEffect(() => {
    !x && !m && B();
  }, [x, m, B]);
  function N() {
    var b, D, T, I;
    let A = (b = k.current) == null ? void 0 : b.getModel();
    l || ((D = A == null ? void 0 : A.original) == null || D.dispose()), a || ((T = A == null ? void 0 : A.modified) == null || T.dispose()), (I = k.current) == null || I.dispose();
  }
  return Qn.createElement(G0, { width: p, height: f, isEditorReady: m, loading: d, _ref: _, className: y, wrapperProps: v });
}
var QM = XM;
O.memo(QM);
function qM(e) {
  let t = O.useRef();
  return O.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
var GM = qM, So = /* @__PURE__ */ new Map();
function JM({ defaultValue: e, defaultLanguage: t, defaultPath: n, value: r, language: i, path: s, theme: o = "light", line: l, loading: a = "Loading...", options: u = {}, overrideServices: d = {}, saveViewState: c = !0, keepCurrentModel: f = !1, width: p = "100%", height: y = "100%", className: v, wrapperProps: w = {}, beforeMount: h = Gi, onMount: m = Gi, onChange: g, onValidate: x = Gi }) {
  let [S, k] = O.useState(!1), [E, _] = O.useState(!0), M = O.useRef(null), $ = O.useRef(null), C = O.useRef(null), P = O.useRef(m), B = O.useRef(h), N = O.useRef(), A = O.useRef(r), b = GM(s), D = O.useRef(!1), T = O.useRef(!1);
  J0(() => {
    let j = q0.init();
    return j.then((R) => (M.current = R) && _(!1)).catch((R) => (R == null ? void 0 : R.type) !== "cancelation" && console.error("Monaco initialization: error:", R)), () => $.current ? z() : j.cancel();
  }), Ge(() => {
    var R, H, U, Y;
    let j = $r(M.current, e || r || "", t || i || "", s || n || "");
    j !== ((R = $.current) == null ? void 0 : R.getModel()) && (c && So.set(b, (H = $.current) == null ? void 0 : H.saveViewState()), (U = $.current) == null || U.setModel(j), c && ((Y = $.current) == null || Y.restoreViewState(So.get(s))));
  }, [s], S), Ge(() => {
    var j;
    (j = $.current) == null || j.updateOptions(u);
  }, [u], S), Ge(() => {
    !$.current || r === void 0 || ($.current.getOption(M.current.editor.EditorOption.readOnly) ? $.current.setValue(r) : r !== $.current.getValue() && (T.current = !0, $.current.executeEdits("", [{ range: $.current.getModel().getFullModelRange(), text: r, forceMoveMarkers: !0 }]), $.current.pushUndoStop(), T.current = !1));
  }, [r], S), Ge(() => {
    var R, H;
    let j = (R = $.current) == null ? void 0 : R.getModel();
    j && i && ((H = M.current) == null || H.editor.setModelLanguage(j, i));
  }, [i], S), Ge(() => {
    var j;
    l !== void 0 && ((j = $.current) == null || j.revealLine(l));
  }, [l], S), Ge(() => {
    var j;
    (j = M.current) == null || j.editor.setTheme(o);
  }, [o], S);
  let I = O.useCallback(() => {
    var j;
    if (!(!C.current || !M.current) && !D.current) {
      B.current(M.current);
      let R = s || n, H = $r(M.current, r || e || "", t || i || "", R || "");
      $.current = (j = M.current) == null ? void 0 : j.editor.create(C.current, { model: H, automaticLayout: !0, ...u }, d), c && $.current.restoreViewState(So.get(R)), M.current.editor.setTheme(o), l !== void 0 && $.current.revealLine(l), k(!0), D.current = !0;
    }
  }, [e, t, n, r, i, s, u, d, c, o, l]);
  O.useEffect(() => {
    S && P.current($.current, M.current);
  }, [S]), O.useEffect(() => {
    !E && !S && I();
  }, [E, S, I]), A.current = r, O.useEffect(() => {
    var j, R;
    S && g && ((j = N.current) == null || j.dispose(), N.current = (R = $.current) == null ? void 0 : R.onDidChangeModelContent((H) => {
      T.current || g($.current.getValue(), H);
    }));
  }, [S, g]), O.useEffect(() => {
    if (S) {
      let j = M.current.editor.onDidChangeMarkers((R) => {
        var U;
        let H = (U = $.current.getModel()) == null ? void 0 : U.uri;
        if (H && R.find((Y) => Y.path === H.path)) {
          let Y = M.current.editor.getModelMarkers({ resource: H });
          x == null || x(Y);
        }
      });
      return () => {
        j == null || j.dispose();
      };
    }
    return () => {
    };
  }, [S, x]);
  function z() {
    var j, R;
    (j = N.current) == null || j.dispose(), f ? c && So.set(s, $.current.saveViewState()) : (R = $.current.getModel()) == null || R.dispose(), $.current.dispose();
  }
  return Qn.createElement(G0, { width: p, height: y, isEditorReady: S, loading: a, _ref: C, className: v, wrapperProps: w });
}
var ZM = JM, eT = O.memo(ZM), tT = eT;
const Bf = Symbol.for("yaml.alias"), wc = Symbol.for("yaml.document"), In = Symbol.for("yaml.map"), ev = Symbol.for("yaml.pair"), Bt = Symbol.for("yaml.scalar"), hi = Symbol.for("yaml.seq"), pt = Symbol.for("yaml.node.type"), pi = (e) => !!e && typeof e == "object" && e[pt] === Bf, ca = (e) => !!e && typeof e == "object" && e[pt] === wc, Vs = (e) => !!e && typeof e == "object" && e[pt] === In, _e = (e) => !!e && typeof e == "object" && e[pt] === ev, ce = (e) => !!e && typeof e == "object" && e[pt] === Bt, Hs = (e) => !!e && typeof e == "object" && e[pt] === hi;
function ke(e) {
  if (e && typeof e == "object")
    switch (e[pt]) {
      case In:
      case hi:
        return !0;
    }
  return !1;
}
function Ee(e) {
  if (e && typeof e == "object")
    switch (e[pt]) {
      case Bf:
      case In:
      case Bt:
      case hi:
        return !0;
    }
  return !1;
}
const tv = (e) => (ce(e) || ke(e)) && !!e.anchor, Vn = Symbol("break visit"), nT = Symbol("skip children"), Ji = Symbol("remove node");
function gi(e, t) {
  const n = rT(t);
  ca(e) ? Pr(null, e.contents, n, Object.freeze([e])) === Ji && (e.contents = null) : Pr(null, e, n, Object.freeze([]));
}
gi.BREAK = Vn;
gi.SKIP = nT;
gi.REMOVE = Ji;
function Pr(e, t, n, r) {
  const i = iT(e, t, n, r);
  if (Ee(i) || _e(i))
    return sT(e, r, i), Pr(e, i, n, r);
  if (typeof i != "symbol") {
    if (ke(t)) {
      r = Object.freeze(r.concat(t));
      for (let s = 0; s < t.items.length; ++s) {
        const o = Pr(s, t.items[s], n, r);
        if (typeof o == "number")
          s = o - 1;
        else {
          if (o === Vn)
            return Vn;
          o === Ji && (t.items.splice(s, 1), s -= 1);
        }
      }
    } else if (_e(t)) {
      r = Object.freeze(r.concat(t));
      const s = Pr("key", t.key, n, r);
      if (s === Vn)
        return Vn;
      s === Ji && (t.key = null);
      const o = Pr("value", t.value, n, r);
      if (o === Vn)
        return Vn;
      o === Ji && (t.value = null);
    }
  }
  return i;
}
function rT(e) {
  return typeof e == "object" && (e.Collection || e.Node || e.Value) ? Object.assign({
    Alias: e.Node,
    Map: e.Node,
    Scalar: e.Node,
    Seq: e.Node
  }, e.Value && {
    Map: e.Value,
    Scalar: e.Value,
    Seq: e.Value
  }, e.Collection && {
    Map: e.Collection,
    Seq: e.Collection
  }, e) : e;
}
function iT(e, t, n, r) {
  var i, s, o, l, a;
  if (typeof n == "function")
    return n(e, t, r);
  if (Vs(t))
    return (i = n.Map) == null ? void 0 : i.call(n, e, t, r);
  if (Hs(t))
    return (s = n.Seq) == null ? void 0 : s.call(n, e, t, r);
  if (_e(t))
    return (o = n.Pair) == null ? void 0 : o.call(n, e, t, r);
  if (ce(t))
    return (l = n.Scalar) == null ? void 0 : l.call(n, e, t, r);
  if (pi(t))
    return (a = n.Alias) == null ? void 0 : a.call(n, e, t, r);
}
function sT(e, t, n) {
  const r = t[t.length - 1];
  if (ke(r))
    r.items[e] = n;
  else if (_e(r))
    e === "key" ? r.key = n : r.value = n;
  else if (ca(r))
    r.contents = n;
  else {
    const i = pi(r) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${i} parent`);
  }
}
const oT = {
  "!": "%21",
  ",": "%2C",
  "[": "%5B",
  "]": "%5D",
  "{": "%7B",
  "}": "%7D"
}, lT = (e) => e.replace(/[!,[\]{}]/g, (t) => oT[t]);
class ze {
  constructor(t, n) {
    this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, ze.defaultYaml, t), this.tags = Object.assign({}, ze.defaultTags, n);
  }
  clone() {
    const t = new ze(this.yaml, this.tags);
    return t.docStart = this.docStart, t;
  }
  /**
   * During parsing, get a Directives instance for the current document and
   * update the stream state according to the current version's spec.
   */
  atDocument() {
    const t = new ze(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = !0;
        break;
      case "1.2":
        this.atNextDocument = !1, this.yaml = {
          explicit: ze.defaultYaml.explicit,
          version: "1.2"
        }, this.tags = Object.assign({}, ze.defaultTags);
        break;
    }
    return t;
  }
  /**
   * @param onError - May be called even if the action was successful
   * @returns `true` on success
   */
  add(t, n) {
    this.atNextDocument && (this.yaml = { explicit: ze.defaultYaml.explicit, version: "1.1" }, this.tags = Object.assign({}, ze.defaultTags), this.atNextDocument = !1);
    const r = t.trim().split(/[ \t]+/), i = r.shift();
    switch (i) {
      case "%TAG": {
        if (r.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), r.length < 2))
          return !1;
        const [s, o] = r;
        return this.tags[s] = o, !0;
      }
      case "%YAML": {
        if (this.yaml.explicit = !0, r.length !== 1)
          return n(0, "%YAML directive should contain exactly one part"), !1;
        const [s] = r;
        if (s === "1.1" || s === "1.2")
          return this.yaml.version = s, !0;
        {
          const o = /^\d+\.\d+$/.test(s);
          return n(6, `Unsupported YAML version ${s}`, o), !1;
        }
      }
      default:
        return n(0, `Unknown directive ${i}`, !0), !1;
    }
  }
  /**
   * Resolves a tag, matching handles to those defined in %TAG directives.
   *
   * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
   *   `'!local'` tag, or `null` if unresolvable.
   */
  tagName(t, n) {
    if (t === "!")
      return "!";
    if (t[0] !== "!")
      return n(`Not a valid tag: ${t}`), null;
    if (t[1] === "<") {
      const o = t.slice(2, -1);
      return o === "!" || o === "!!" ? (n(`Verbatim tags aren't resolved, so ${t} is invalid.`), null) : (t[t.length - 1] !== ">" && n("Verbatim tags must end with a >"), o);
    }
    const [, r, i] = t.match(/^(.*!)([^!]*)$/s);
    i || n(`The ${t} tag has no suffix`);
    const s = this.tags[r];
    if (s)
      try {
        return s + decodeURIComponent(i);
      } catch (o) {
        return n(String(o)), null;
      }
    return r === "!" ? t : (n(`Could not resolve tag: ${t}`), null);
  }
  /**
   * Given a fully resolved tag, returns its printable string form,
   * taking into account current tag prefixes and defaults.
   */
  tagString(t) {
    for (const [n, r] of Object.entries(this.tags))
      if (t.startsWith(r))
        return n + lT(t.substring(r.length));
    return t[0] === "!" ? t : `!<${t}>`;
  }
  toString(t) {
    const n = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], r = Object.entries(this.tags);
    let i;
    if (t && r.length > 0 && Ee(t.contents)) {
      const s = {};
      gi(t.contents, (o, l) => {
        Ee(l) && l.tag && (s[l.tag] = !0);
      }), i = Object.keys(s);
    } else
      i = [];
    for (const [s, o] of r)
      s === "!!" && o === "tag:yaml.org,2002:" || (!t || i.some((l) => l.startsWith(o))) && n.push(`%TAG ${s} ${o}`);
    return n.join(`
`);
  }
}
ze.defaultYaml = { explicit: !1, version: "1.2" };
ze.defaultTags = { "!!": "tag:yaml.org,2002:" };
function nv(e) {
  if (/[\x00-\x19\s,[\]{}]/.test(e)) {
    const n = `Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;
    throw new Error(n);
  }
  return !0;
}
function rv(e) {
  const t = /* @__PURE__ */ new Set();
  return gi(e, {
    Value(n, r) {
      r.anchor && t.add(r.anchor);
    }
  }), t;
}
function iv(e, t) {
  for (let n = 1; ; ++n) {
    const r = `${e}${n}`;
    if (!t.has(r))
      return r;
  }
}
function aT(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  let i = null;
  return {
    onAnchor: (s) => {
      n.push(s), i ?? (i = rv(e));
      const o = iv(t, i);
      return i.add(o), o;
    },
    /**
     * With circular references, the source node is only resolved after all
     * of its child nodes are. This is why anchors are set only after all of
     * the nodes have been created.
     */
    setAnchors: () => {
      for (const s of n) {
        const o = r.get(s);
        if (typeof o == "object" && o.anchor && (ce(o.node) || ke(o.node)))
          o.node.anchor = o.anchor;
        else {
          const l = new Error("Failed to resolve repeated object (this should not happen)");
          throw l.source = s, l;
        }
      }
    },
    sourceObjects: r
  };
}
function Or(e, t, n, r) {
  if (r && typeof r == "object")
    if (Array.isArray(r))
      for (let i = 0, s = r.length; i < s; ++i) {
        const o = r[i], l = Or(e, r, String(i), o);
        l === void 0 ? delete r[i] : l !== o && (r[i] = l);
      }
    else if (r instanceof Map)
      for (const i of Array.from(r.keys())) {
        const s = r.get(i), o = Or(e, r, i, s);
        o === void 0 ? r.delete(i) : o !== s && r.set(i, o);
      }
    else if (r instanceof Set)
      for (const i of Array.from(r)) {
        const s = Or(e, r, i, i);
        s === void 0 ? r.delete(i) : s !== i && (r.delete(i), r.add(s));
      }
    else
      for (const [i, s] of Object.entries(r)) {
        const o = Or(e, r, i, s);
        o === void 0 ? delete r[i] : o !== s && (r[i] = o);
      }
  return e.call(t, n, r);
}
function ft(e, t, n) {
  if (Array.isArray(e))
    return e.map((r, i) => ft(r, String(i), n));
  if (e && typeof e.toJSON == "function") {
    if (!n || !tv(e))
      return e.toJSON(t, n);
    const r = { aliasCount: 0, count: 1, res: void 0 };
    n.anchors.set(e, r), n.onCreate = (s) => {
      r.res = s, delete n.onCreate;
    };
    const i = e.toJSON(t, n);
    return n.onCreate && n.onCreate(i), i;
  }
  return typeof e == "bigint" && !(n != null && n.keep) ? Number(e) : e;
}
class Ff {
  constructor(t) {
    Object.defineProperty(this, pt, { value: t });
  }
  /** Create a copy of this node.  */
  clone() {
    const t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return this.range && (t.range = this.range.slice()), t;
  }
  /** A plain JavaScript representation of this node. */
  toJS(t, { mapAsMap: n, maxAliasCount: r, onAnchor: i, reviver: s } = {}) {
    if (!ca(t))
      throw new TypeError("A document argument is required");
    const o = {
      anchors: /* @__PURE__ */ new Map(),
      doc: t,
      keep: !0,
      mapAsMap: n === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof r == "number" ? r : 100
    }, l = ft(this, "", o);
    if (typeof i == "function")
      for (const { count: a, res: u } of o.anchors.values())
        i(u, a);
    return typeof s == "function" ? Or(s, { "": l }, "", l) : l;
  }
}
class Vf extends Ff {
  constructor(t) {
    super(Bf), this.source = t, Object.defineProperty(this, "tag", {
      set() {
        throw new Error("Alias nodes cannot have tags");
      }
    });
  }
  /**
   * Resolve the value of this alias within `doc`, finding the last
   * instance of the `source` anchor before this node.
   */
  resolve(t, n) {
    if ((n == null ? void 0 : n.maxAliasCount) === 0)
      throw new ReferenceError("Alias resolution is disabled");
    let r;
    n != null && n.aliasResolveCache ? r = n.aliasResolveCache : (r = [], gi(t, {
      Node: (s, o) => {
        (pi(o) || tv(o)) && r.push(o);
      }
    }), n && (n.aliasResolveCache = r));
    let i;
    for (const s of r) {
      if (s === this)
        break;
      s.anchor === this.source && (i = s);
    }
    return i;
  }
  toJSON(t, n) {
    if (!n)
      return { source: this.source };
    const { anchors: r, doc: i, maxAliasCount: s } = n, o = this.resolve(i, n);
    if (!o) {
      const a = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(a);
    }
    let l = r.get(o);
    if (l || (ft(o, null, n), l = r.get(o)), (l == null ? void 0 : l.res) === void 0) {
      const a = "This should not happen: Alias anchor was not resolved?";
      throw new ReferenceError(a);
    }
    if (s >= 0 && (l.count += 1, l.aliasCount === 0 && (l.aliasCount = Uo(i, o, r)), l.count * l.aliasCount > s)) {
      const a = "Excessive alias count indicates a resource exhaustion attack";
      throw new ReferenceError(a);
    }
    return l.res;
  }
  toString(t, n, r) {
    const i = `*${this.source}`;
    if (t) {
      if (nv(this.source), t.options.verifyAliasOrder && !t.anchors.has(this.source)) {
        const s = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(s);
      }
      if (t.implicitKey)
        return `${i} `;
    }
    return i;
  }
}
function Uo(e, t, n) {
  if (pi(t)) {
    const r = t.resolve(e), i = n && r && n.get(r);
    return i ? i.count * i.aliasCount : 0;
  } else if (ke(t)) {
    let r = 0;
    for (const i of t.items) {
      const s = Uo(e, i, n);
      s > r && (r = s);
    }
    return r;
  } else if (_e(t)) {
    const r = Uo(e, t.key, n), i = Uo(e, t.value, n);
    return Math.max(r, i);
  }
  return 1;
}
const sv = (e) => !e || typeof e != "function" && typeof e != "object";
class te extends Ff {
  constructor(t) {
    super(Bt), this.value = t;
  }
  toJSON(t, n) {
    return n != null && n.keep ? this.value : ft(this.value, t, n);
  }
  toString() {
    return String(this.value);
  }
}
te.BLOCK_FOLDED = "BLOCK_FOLDED";
te.BLOCK_LITERAL = "BLOCK_LITERAL";
te.PLAIN = "PLAIN";
te.QUOTE_DOUBLE = "QUOTE_DOUBLE";
te.QUOTE_SINGLE = "QUOTE_SINGLE";
const uT = "tag:yaml.org,2002:";
function cT(e, t, n) {
  if (t) {
    const r = n.filter((s) => s.tag === t), i = r.find((s) => !s.format) ?? r[0];
    if (!i)
      throw new Error(`Tag ${t} not found`);
    return i;
  }
  return n.find((r) => {
    var i;
    return ((i = r.identify) == null ? void 0 : i.call(r, e)) && !r.format;
  });
}
function Ms(e, t, n) {
  var c, f, p;
  if (ca(e) && (e = e.contents), Ee(e))
    return e;
  if (_e(e)) {
    const y = (f = (c = n.schema[In]).createNode) == null ? void 0 : f.call(c, n.schema, null, n);
    return y.items.push(e), y;
  }
  (e instanceof String || e instanceof Number || e instanceof Boolean || typeof BigInt < "u" && e instanceof BigInt) && (e = e.valueOf());
  const { aliasDuplicateObjects: r, onAnchor: i, onTagObj: s, schema: o, sourceObjects: l } = n;
  let a;
  if (r && e && typeof e == "object") {
    if (a = l.get(e), a)
      return a.anchor ?? (a.anchor = i(e)), new Vf(a.anchor);
    a = { anchor: null, node: null }, l.set(e, a);
  }
  t != null && t.startsWith("!!") && (t = uT + t.slice(2));
  let u = cT(e, t, o.tags);
  if (!u) {
    if (e && typeof e.toJSON == "function" && (e = e.toJSON()), !e || typeof e != "object") {
      const y = new te(e);
      return a && (a.node = y), y;
    }
    u = e instanceof Map ? o[In] : Symbol.iterator in Object(e) ? o[hi] : o[In];
  }
  s && (s(u), delete n.onTagObj);
  const d = u != null && u.createNode ? u.createNode(n.schema, e, n) : typeof ((p = u == null ? void 0 : u.nodeClass) == null ? void 0 : p.from) == "function" ? u.nodeClass.from(n.schema, e, n) : new te(e);
  return t ? d.tag = t : u.default || (d.tag = u.tag), a && (a.node = d), d;
}
function Il(e, t, n) {
  let r = n;
  for (let i = t.length - 1; i >= 0; --i) {
    const s = t[i];
    if (typeof s == "number" && Number.isInteger(s) && s >= 0) {
      const o = [];
      o[s] = r, r = o;
    } else
      r = /* @__PURE__ */ new Map([[s, r]]);
  }
  return Ms(r, void 0, {
    aliasDuplicateObjects: !1,
    keepUndefined: !1,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.");
    },
    schema: e,
    sourceObjects: /* @__PURE__ */ new Map()
  });
}
const Ri = (e) => e == null || typeof e == "object" && !!e[Symbol.iterator]().next().done;
class ov extends Ff {
  constructor(t, n) {
    super(t), Object.defineProperty(this, "schema", {
      value: n,
      configurable: !0,
      enumerable: !1,
      writable: !0
    });
  }
  /**
   * Create a copy of this collection.
   *
   * @param schema - If defined, overwrites the original's schema
   */
  clone(t) {
    const n = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return t && (n.schema = t), n.items = n.items.map((r) => Ee(r) || _e(r) ? r.clone(t) : r), this.range && (n.range = this.range.slice()), n;
  }
  /**
   * Adds a value to the collection. For `!!map` and `!!omap` the value must
   * be a Pair instance or a `{ key, value }` object, which may not have a key
   * that already exists in the map.
   */
  addIn(t, n) {
    if (Ri(t))
      this.add(n);
    else {
      const [r, ...i] = t, s = this.get(r, !0);
      if (ke(s))
        s.addIn(i, n);
      else if (s === void 0 && this.schema)
        this.set(r, Il(this.schema, i, n));
      else
        throw new Error(`Expected YAML collection at ${r}. Remaining path: ${i}`);
    }
  }
  /**
   * Removes a value from the collection.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(t) {
    const [n, ...r] = t;
    if (r.length === 0)
      return this.delete(n);
    const i = this.get(n, !0);
    if (ke(i))
      return i.deleteIn(r);
    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(t, n) {
    const [r, ...i] = t, s = this.get(r, !0);
    return i.length === 0 ? !n && ce(s) ? s.value : s : ke(s) ? s.getIn(i, n) : void 0;
  }
  hasAllNullValues(t) {
    return this.items.every((n) => {
      if (!_e(n))
        return !1;
      const r = n.value;
      return r == null || t && ce(r) && r.value == null && !r.commentBefore && !r.comment && !r.tag;
    });
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   */
  hasIn(t) {
    const [n, ...r] = t;
    if (r.length === 0)
      return this.has(n);
    const i = this.get(n, !0);
    return ke(i) ? i.hasIn(r) : !1;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(t, n) {
    const [r, ...i] = t;
    if (i.length === 0)
      this.set(r, n);
    else {
      const s = this.get(r, !0);
      if (ke(s))
        s.setIn(i, n);
      else if (s === void 0 && this.schema)
        this.set(r, Il(this.schema, i, n));
      else
        throw new Error(`Expected YAML collection at ${r}. Remaining path: ${i}`);
    }
  }
}
const fT = (e) => e.replace(/^(?!$)(?: $)?/gm, "#");
function Gt(e, t) {
  return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e;
}
const Yn = (e, t, n) => e.endsWith(`
`) ? Gt(n, t) : n.includes(`
`) ? `
` + Gt(n, t) : (e.endsWith(" ") ? "" : " ") + n, lv = "flow", xc = "block", Ko = "quoted";
function fa(e, t, n = "flow", { indentAtStart: r, lineWidth: i = 80, minContentWidth: s = 20, onFold: o, onOverflow: l } = {}) {
  if (!i || i < 0)
    return e;
  i < s && (s = 0);
  const a = Math.max(1 + s, 1 + i - t.length);
  if (e.length <= a)
    return e;
  const u = [], d = {};
  let c = i - t.length;
  typeof r == "number" && (r > i - Math.max(2, s) ? u.push(0) : c = i - r);
  let f, p, y = !1, v = -1, w = -1, h = -1;
  n === xc && (v = bp(e, v, t.length), v !== -1 && (c = v + a));
  for (let g; g = e[v += 1]; ) {
    if (n === Ko && g === "\\") {
      switch (w = v, e[v + 1]) {
        case "x":
          v += 3;
          break;
        case "u":
          v += 5;
          break;
        case "U":
          v += 9;
          break;
        default:
          v += 1;
      }
      h = v;
    }
    if (g === `
`)
      n === xc && (v = bp(e, v, t.length)), c = v + t.length + a, f = void 0;
    else {
      if (g === " " && p && p !== " " && p !== `
` && p !== "	") {
        const x = e[v + 1];
        x && x !== " " && x !== `
` && x !== "	" && (f = v);
      }
      if (v >= c)
        if (f)
          u.push(f), c = f + a, f = void 0;
        else if (n === Ko) {
          for (; p === " " || p === "	"; )
            p = g, g = e[v += 1], y = !0;
          const x = v > h + 1 ? v - 2 : w - 1;
          if (d[x])
            return e;
          u.push(x), d[x] = !0, c = x + a, f = void 0;
        } else
          y = !0;
    }
    p = g;
  }
  if (y && l && l(), u.length === 0)
    return e;
  o && o();
  let m = e.slice(0, u[0]);
  for (let g = 0; g < u.length; ++g) {
    const x = u[g], S = u[g + 1] || e.length;
    x === 0 ? m = `
${t}${e.slice(0, S)}` : (n === Ko && d[x] && (m += `${e[x]}\\`), m += `
${t}${e.slice(x + 1, S)}`);
  }
  return m;
}
function bp(e, t, n) {
  let r = t, i = t + 1, s = e[i];
  for (; s === " " || s === "	"; )
    if (t < i + n)
      s = e[++t];
    else {
      do
        s = e[++t];
      while (s && s !== `
`);
      r = t, i = t + 1, s = e[i];
    }
  return r;
}
const da = (e, t) => ({
  indentAtStart: t ? e.indent.length : e.indentAtStart,
  lineWidth: e.options.lineWidth,
  minContentWidth: e.options.minContentWidth
}), ha = (e) => /^(%|---|\.\.\.)/m.test(e);
function dT(e, t, n) {
  if (!t || t < 0)
    return !1;
  const r = t - n, i = e.length;
  if (i <= r)
    return !1;
  for (let s = 0, o = 0; s < i; ++s)
    if (e[s] === `
`) {
      if (s - o > r)
        return !0;
      if (o = s + 1, i - o <= r)
        return !1;
    }
  return !0;
}
function Zi(e, t) {
  const n = JSON.stringify(e);
  if (t.options.doubleQuotedAsJSON)
    return n;
  const { implicitKey: r } = t, i = t.options.doubleQuotedMinMultiLineLength, s = t.indent || (ha(e) ? "  " : "");
  let o = "", l = 0;
  for (let a = 0, u = n[a]; u; u = n[++a])
    if (u === " " && n[a + 1] === "\\" && n[a + 2] === "n" && (o += n.slice(l, a) + "\\ ", a += 1, l = a, u = "\\"), u === "\\")
      switch (n[a + 1]) {
        case "u":
          {
            o += n.slice(l, a);
            const d = n.substr(a + 2, 4);
            switch (d) {
              case "0000":
                o += "\\0";
                break;
              case "0007":
                o += "\\a";
                break;
              case "000b":
                o += "\\v";
                break;
              case "001b":
                o += "\\e";
                break;
              case "0085":
                o += "\\N";
                break;
              case "00a0":
                o += "\\_";
                break;
              case "2028":
                o += "\\L";
                break;
              case "2029":
                o += "\\P";
                break;
              default:
                d.substr(0, 2) === "00" ? o += "\\x" + d.substr(2) : o += n.substr(a, 6);
            }
            a += 5, l = a + 1;
          }
          break;
        case "n":
          if (r || n[a + 2] === '"' || n.length < i)
            a += 1;
          else {
            for (o += n.slice(l, a) + `

`; n[a + 2] === "\\" && n[a + 3] === "n" && n[a + 4] !== '"'; )
              o += `
`, a += 2;
            o += s, n[a + 2] === " " && (o += "\\"), a += 1, l = a + 1;
          }
          break;
        default:
          a += 1;
      }
  return o = l ? o + n.slice(l) : n, r ? o : fa(o, s, Ko, da(t, !1));
}
function Sc(e, t) {
  if (t.options.singleQuote === !1 || t.implicitKey && e.includes(`
`) || /[ \t]\n|\n[ \t]/.test(e))
    return Zi(e, t);
  const n = t.indent || (ha(e) ? "  " : ""), r = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
  return t.implicitKey ? r : fa(r, n, lv, da(t, !1));
}
function Dr(e, t) {
  const { singleQuote: n } = t.options;
  let r;
  if (n === !1)
    r = Zi;
  else {
    const i = e.includes('"'), s = e.includes("'");
    i && !s ? r = Sc : s && !i ? r = Zi : r = n ? Sc : Zi;
  }
  return r(e, t);
}
let kc;
try {
  kc = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch {
  kc = /\n+(?!\n|$)/g;
}
function Wo({ comment: e, type: t, value: n }, r, i, s) {
  const { blockQuote: o, commentString: l, lineWidth: a } = r.options;
  if (!o || /\n[\t ]+$/.test(n))
    return Dr(n, r);
  const u = r.indent || (r.forceBlockIndent || ha(n) ? "  " : ""), d = o === "literal" ? !0 : o === "folded" || t === te.BLOCK_FOLDED ? !1 : t === te.BLOCK_LITERAL ? !0 : !dT(n, a, u.length);
  if (!n)
    return d ? `|
` : `>
`;
  let c, f;
  for (f = n.length; f > 0; --f) {
    const S = n[f - 1];
    if (S !== `
` && S !== "	" && S !== " ")
      break;
  }
  let p = n.substring(f);
  const y = p.indexOf(`
`);
  y === -1 ? c = "-" : n === p || y !== p.length - 1 ? (c = "+", s && s()) : c = "", p && (n = n.slice(0, -p.length), p[p.length - 1] === `
` && (p = p.slice(0, -1)), p = p.replace(kc, `$&${u}`));
  let v = !1, w, h = -1;
  for (w = 0; w < n.length; ++w) {
    const S = n[w];
    if (S === " ")
      v = !0;
    else if (S === `
`)
      h = w;
    else
      break;
  }
  let m = n.substring(0, h < w ? h + 1 : w);
  m && (n = n.substring(m.length), m = m.replace(/\n+/g, `$&${u}`));
  let x = (v ? u ? "2" : "1" : "") + c;
  if (e && (x += " " + l(e.replace(/ ?[\r\n]+/g, " ")), i && i()), !d) {
    const S = n.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${u}`);
    let k = !1;
    const E = da(r, !0);
    o !== "folded" && t !== te.BLOCK_FOLDED && (E.onOverflow = () => {
      k = !0;
    });
    const _ = fa(`${m}${S}${p}`, u, xc, E);
    if (!k)
      return `>${x}
${u}${_}`;
  }
  return n = n.replace(/\n+/g, `$&${u}`), `|${x}
${u}${m}${n}${p}`;
}
function hT(e, t, n, r) {
  const { type: i, value: s } = e, { actualString: o, implicitKey: l, indent: a, indentStep: u, inFlow: d } = t;
  if (l && s.includes(`
`) || d && /[[\]{},]/.test(s))
    return Dr(s, t);
  if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s))
    return l || d || !s.includes(`
`) ? Dr(s, t) : Wo(e, t, n, r);
  if (!l && !d && i !== te.PLAIN && s.includes(`
`))
    return Wo(e, t, n, r);
  if (ha(s)) {
    if (a === "")
      return t.forceBlockIndent = !0, Wo(e, t, n, r);
    if (l && a === u)
      return Dr(s, t);
  }
  const c = s.replace(/\n+/g, `$&
${a}`);
  if (o) {
    const f = (v) => {
      var w;
      return v.default && v.tag !== "tag:yaml.org,2002:str" && ((w = v.test) == null ? void 0 : w.test(c));
    }, { compat: p, tags: y } = t.doc.schema;
    if (y.some(f) || p != null && p.some(f))
      return Dr(s, t);
  }
  return l ? c : fa(c, a, lv, da(t, !1));
}
function Hf(e, t, n, r) {
  const { implicitKey: i, inFlow: s } = t, o = typeof e.value == "string" ? e : Object.assign({}, e, { value: String(e.value) });
  let { type: l } = e;
  l !== te.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (l = te.QUOTE_DOUBLE);
  const a = (d) => {
    switch (d) {
      case te.BLOCK_FOLDED:
      case te.BLOCK_LITERAL:
        return i || s ? Dr(o.value, t) : Wo(o, t, n, r);
      case te.QUOTE_DOUBLE:
        return Zi(o.value, t);
      case te.QUOTE_SINGLE:
        return Sc(o.value, t);
      case te.PLAIN:
        return hT(o, t, n, r);
      default:
        return null;
    }
  };
  let u = a(l);
  if (u === null) {
    const { defaultKeyType: d, defaultStringType: c } = t.options, f = i && d || c;
    if (u = a(f), u === null)
      throw new Error(`Unsupported default string type ${f}`);
  }
  return u;
}
function av(e, t) {
  const n = Object.assign({
    blockQuote: !0,
    commentString: fT,
    defaultKeyType: null,
    defaultStringType: "PLAIN",
    directives: null,
    doubleQuotedAsJSON: !1,
    doubleQuotedMinMultiLineLength: 40,
    falseStr: "false",
    flowCollectionPadding: !0,
    indentSeq: !0,
    lineWidth: 80,
    minContentWidth: 20,
    nullStr: "null",
    simpleKeys: !1,
    singleQuote: null,
    trailingComma: !1,
    trueStr: "true",
    verifyAliasOrder: !0
  }, e.schema.toStringOptions, t);
  let r;
  switch (n.collectionStyle) {
    case "block":
      r = !1;
      break;
    case "flow":
      r = !0;
      break;
    default:
      r = null;
  }
  return {
    anchors: /* @__PURE__ */ new Set(),
    doc: e,
    flowCollectionPadding: n.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
    inFlow: r,
    options: n
  };
}
function pT(e, t) {
  var i;
  if (t.tag) {
    const s = e.filter((o) => o.tag === t.tag);
    if (s.length > 0)
      return s.find((o) => o.format === t.format) ?? s[0];
  }
  let n, r;
  if (ce(t)) {
    r = t.value;
    let s = e.filter((o) => {
      var l;
      return (l = o.identify) == null ? void 0 : l.call(o, r);
    });
    if (s.length > 1) {
      const o = s.filter((l) => l.test);
      o.length > 0 && (s = o);
    }
    n = s.find((o) => o.format === t.format) ?? s.find((o) => !o.format);
  } else
    r = t, n = e.find((s) => s.nodeClass && r instanceof s.nodeClass);
  if (!n) {
    const s = ((i = r == null ? void 0 : r.constructor) == null ? void 0 : i.name) ?? (r === null ? "null" : typeof r);
    throw new Error(`Tag not resolved for ${s} value`);
  }
  return n;
}
function gT(e, t, { anchors: n, doc: r }) {
  if (!r.directives)
    return "";
  const i = [], s = (ce(e) || ke(e)) && e.anchor;
  s && nv(s) && (n.add(s), i.push(`&${s}`));
  const o = e.tag ?? (t.default ? null : t.tag);
  return o && i.push(r.directives.tagString(o)), i.join(" ");
}
function li(e, t, n, r) {
  var a;
  if (_e(e))
    return e.toString(t, n, r);
  if (pi(e)) {
    if (t.doc.directives)
      return e.toString(t);
    if ((a = t.resolvedAliases) != null && a.has(e))
      throw new TypeError("Cannot stringify circular structure without alias nodes");
    t.resolvedAliases ? t.resolvedAliases.add(e) : t.resolvedAliases = /* @__PURE__ */ new Set([e]), e = e.resolve(t.doc);
  }
  let i;
  const s = Ee(e) ? e : t.doc.createNode(e, { onTagObj: (u) => i = u });
  i ?? (i = pT(t.doc.schema.tags, s));
  const o = gT(s, i, t);
  o.length > 0 && (t.indentAtStart = (t.indentAtStart ?? 0) + o.length + 1);
  const l = typeof i.stringify == "function" ? i.stringify(s, t, n, r) : ce(s) ? Hf(s, t, n, r) : s.toString(t, n, r);
  return o ? ce(s) || l[0] === "{" || l[0] === "[" ? `${o} ${l}` : `${o}
${t.indent}${l}` : l;
}
function mT({ key: e, value: t }, n, r, i) {
  const { allNullValues: s, doc: o, indent: l, indentStep: a, options: { commentString: u, indentSeq: d, simpleKeys: c } } = n;
  let f = Ee(e) && e.comment || null;
  if (c) {
    if (f)
      throw new Error("With simple keys, key nodes cannot have comments");
    if (ke(e) || !Ee(e) && typeof e == "object") {
      const E = "With simple keys, collection cannot be used as a key value";
      throw new Error(E);
    }
  }
  let p = !c && (!e || f && t == null && !n.inFlow || ke(e) || (ce(e) ? e.type === te.BLOCK_FOLDED || e.type === te.BLOCK_LITERAL : typeof e == "object"));
  n = Object.assign({}, n, {
    allNullValues: !1,
    implicitKey: !p && (c || !s),
    indent: l + a
  });
  let y = !1, v = !1, w = li(e, n, () => y = !0, () => v = !0);
  if (!p && !n.inFlow && w.length > 1024) {
    if (c)
      throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    p = !0;
  }
  if (n.inFlow) {
    if (s || t == null)
      return y && r && r(), w === "" ? "?" : p ? `? ${w}` : w;
  } else if (s && !c || t == null && p)
    return w = `? ${w}`, f && !y ? w += Yn(w, n.indent, u(f)) : v && i && i(), w;
  y && (f = null), p ? (f && (w += Yn(w, n.indent, u(f))), w = `? ${w}
${l}:`) : (w = `${w}:`, f && (w += Yn(w, n.indent, u(f))));
  let h, m, g;
  Ee(t) ? (h = !!t.spaceBefore, m = t.commentBefore, g = t.comment) : (h = !1, m = null, g = null, t && typeof t == "object" && (t = o.createNode(t))), n.implicitKey = !1, !p && !f && ce(t) && (n.indentAtStart = w.length + 1), v = !1, !d && a.length >= 2 && !n.inFlow && !p && Hs(t) && !t.flow && !t.tag && !t.anchor && (n.indent = n.indent.substring(2));
  let x = !1;
  const S = li(t, n, () => x = !0, () => v = !0);
  let k = " ";
  if (f || h || m) {
    if (k = h ? `
` : "", m) {
      const E = u(m);
      k += `
${Gt(E, n.indent)}`;
    }
    S === "" && !n.inFlow ? k === `
` && g && (k = `

`) : k += `
${n.indent}`;
  } else if (!p && ke(t)) {
    const E = S[0], _ = S.indexOf(`
`), M = _ !== -1, $ = n.inFlow ?? t.flow ?? t.items.length === 0;
    if (M || !$) {
      let C = !1;
      if (M && (E === "&" || E === "!")) {
        let P = S.indexOf(" ");
        E === "&" && P !== -1 && P < _ && S[P + 1] === "!" && (P = S.indexOf(" ", P + 1)), (P === -1 || _ < P) && (C = !0);
      }
      C || (k = `
${n.indent}`);
    }
  } else (S === "" || S[0] === `
`) && (k = "");
  return w += k + S, n.inFlow ? x && r && r() : g && !x ? w += Yn(w, n.indent, u(g)) : v && i && i(), w;
}
function uv(e, t) {
  (e === "debug" || e === "warn") && console.warn(t);
}
const ko = "<<", Zt = {
  identify: (e) => e === ko || typeof e == "symbol" && e.description === ko,
  default: "key",
  tag: "tag:yaml.org,2002:merge",
  test: /^<<$/,
  resolve: () => Object.assign(new te(Symbol(ko)), {
    addToJSMap: cv
  }),
  stringify: () => ko
}, yT = (e, t) => (Zt.identify(t) || ce(t) && (!t.type || t.type === te.PLAIN) && Zt.identify(t.value)) && (e == null ? void 0 : e.doc.schema.tags.some((n) => n.tag === Zt.tag && n.default));
function cv(e, t, n) {
  const r = fv(e, n);
  if (Hs(r))
    for (const i of r.items)
      lu(e, t, i);
  else if (Array.isArray(r))
    for (const i of r)
      lu(e, t, i);
  else
    lu(e, t, r);
}
function lu(e, t, n) {
  const r = fv(e, n);
  if (!Vs(r))
    throw new Error("Merge sources must be maps or map aliases");
  const i = r.toJSON(null, e, Map);
  for (const [s, o] of i)
    t instanceof Map ? t.has(s) || t.set(s, o) : t instanceof Set ? t.add(s) : Object.prototype.hasOwnProperty.call(t, s) || Object.defineProperty(t, s, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return t;
}
function fv(e, t) {
  return e && pi(t) ? t.resolve(e.doc, e) : t;
}
function dv(e, t, { key: n, value: r }) {
  if (Ee(n) && n.addToJSMap)
    n.addToJSMap(e, t, r);
  else if (yT(e, n))
    cv(e, t, r);
  else {
    const i = ft(n, "", e);
    if (t instanceof Map)
      t.set(i, ft(r, i, e));
    else if (t instanceof Set)
      t.add(i);
    else {
      const s = vT(n, i, e), o = ft(r, s, e);
      s in t ? Object.defineProperty(t, s, {
        value: o,
        writable: !0,
        enumerable: !0,
        configurable: !0
      }) : t[s] = o;
    }
  }
  return t;
}
function vT(e, t, n) {
  if (t === null)
    return "";
  if (typeof t != "object")
    return String(t);
  if (Ee(e) && (n != null && n.doc)) {
    const r = av(n.doc, {});
    r.anchors = /* @__PURE__ */ new Set();
    for (const s of n.anchors.keys())
      r.anchors.add(s.anchor);
    r.inFlow = !0, r.inStringifyKey = !0;
    const i = e.toString(r);
    if (!n.mapKeyWarned) {
      let s = JSON.stringify(i);
      s.length > 40 && (s = s.substring(0, 36) + '..."'), uv(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${s}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0;
    }
    return i;
  }
  return JSON.stringify(t);
}
function Uf(e, t, n) {
  const r = Ms(e, void 0, n), i = Ms(t, void 0, n);
  return new Fe(r, i);
}
class Fe {
  constructor(t, n = null) {
    Object.defineProperty(this, pt, { value: ev }), this.key = t, this.value = n;
  }
  clone(t) {
    let { key: n, value: r } = this;
    return Ee(n) && (n = n.clone(t)), Ee(r) && (r = r.clone(t)), new Fe(n, r);
  }
  toJSON(t, n) {
    const r = n != null && n.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return dv(n, r, this);
  }
  toString(t, n, r) {
    return t != null && t.doc ? mT(this, t, n, r) : JSON.stringify(this);
  }
}
function hv(e, t, n) {
  return (t.inFlow ?? e.flow ? xT : wT)(e, t, n);
}
function wT({ comment: e, items: t }, n, { blockItemPrefix: r, flowChars: i, itemIndent: s, onChompKeep: o, onComment: l }) {
  const { indent: a, options: { commentString: u } } = n, d = Object.assign({}, n, { indent: s, type: null });
  let c = !1;
  const f = [];
  for (let y = 0; y < t.length; ++y) {
    const v = t[y];
    let w = null;
    if (Ee(v))
      !c && v.spaceBefore && f.push(""), Al(n, f, v.commentBefore, c), v.comment && (w = v.comment);
    else if (_e(v)) {
      const m = Ee(v.key) ? v.key : null;
      m && (!c && m.spaceBefore && f.push(""), Al(n, f, m.commentBefore, c));
    }
    c = !1;
    let h = li(v, d, () => w = null, () => c = !0);
    w && (h += Yn(h, s, u(w))), c && w && (c = !1), f.push(r + h);
  }
  let p;
  if (f.length === 0)
    p = i.start + i.end;
  else {
    p = f[0];
    for (let y = 1; y < f.length; ++y) {
      const v = f[y];
      p += v ? `
${a}${v}` : `
`;
    }
  }
  return e ? (p += `
` + Gt(u(e), a), l && l()) : c && o && o(), p;
}
function xT({ items: e }, t, { flowChars: n, itemIndent: r }) {
  const { indent: i, indentStep: s, flowCollectionPadding: o, options: { commentString: l } } = t;
  r += s;
  const a = Object.assign({}, t, {
    indent: r,
    inFlow: !0,
    type: null
  });
  let u = !1, d = 0;
  const c = [];
  for (let y = 0; y < e.length; ++y) {
    const v = e[y];
    let w = null;
    if (Ee(v))
      v.spaceBefore && c.push(""), Al(t, c, v.commentBefore, !1), v.comment && (w = v.comment);
    else if (_e(v)) {
      const m = Ee(v.key) ? v.key : null;
      m && (m.spaceBefore && c.push(""), Al(t, c, m.commentBefore, !1), m.comment && (u = !0));
      const g = Ee(v.value) ? v.value : null;
      g ? (g.comment && (w = g.comment), g.commentBefore && (u = !0)) : v.value == null && (m != null && m.comment) && (w = m.comment);
    }
    w && (u = !0);
    let h = li(v, a, () => w = null);
    u || (u = c.length > d || h.includes(`
`)), y < e.length - 1 ? h += "," : t.options.trailingComma && (t.options.lineWidth > 0 && (u || (u = c.reduce((m, g) => m + g.length + 2, 2) + (h.length + 2) > t.options.lineWidth)), u && (h += ",")), w && (h += Yn(h, r, l(w))), c.push(h), d = c.length;
  }
  const { start: f, end: p } = n;
  if (c.length === 0)
    return f + p;
  if (!u) {
    const y = c.reduce((v, w) => v + w.length + 2, 2);
    u = t.options.lineWidth > 0 && y > t.options.lineWidth;
  }
  if (u) {
    let y = f;
    for (const v of c)
      y += v ? `
${s}${i}${v}` : `
`;
    return `${y}
${i}${p}`;
  } else
    return `${f}${o}${c.join(" ")}${o}${p}`;
}
function Al({ indent: e, options: { commentString: t } }, n, r, i) {
  if (r && i && (r = r.replace(/^\n+/, "")), r) {
    const s = Gt(t(r), e);
    n.push(s.trimStart());
  }
}
function Xn(e, t) {
  const n = ce(t) ? t.value : t;
  for (const r of e)
    if (_e(r) && (r.key === t || r.key === n || ce(r.key) && r.key.value === n))
      return r;
}
class at extends ov {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(t) {
    super(In, t), this.items = [];
  }
  /**
   * A generic collection parsing method that can be extended
   * to other node classes that inherit from YAMLMap
   */
  static from(t, n, r) {
    const { keepUndefined: i, replacer: s } = r, o = new this(t), l = (a, u) => {
      if (typeof s == "function")
        u = s.call(n, a, u);
      else if (Array.isArray(s) && !s.includes(a))
        return;
      (u !== void 0 || i) && o.items.push(Uf(a, u, r));
    };
    if (n instanceof Map)
      for (const [a, u] of n)
        l(a, u);
    else if (n && typeof n == "object")
      for (const a of Object.keys(n))
        l(a, n[a]);
    return typeof t.sortMapEntries == "function" && o.items.sort(t.sortMapEntries), o;
  }
  /**
   * Adds a value to the collection.
   *
   * @param overwrite - If not set `true`, using a key that is already in the
   *   collection will throw. Otherwise, overwrites the previous value.
   */
  add(t, n) {
    var o;
    let r;
    _e(t) ? r = t : !t || typeof t != "object" || !("key" in t) ? r = new Fe(t, t == null ? void 0 : t.value) : r = new Fe(t.key, t.value);
    const i = Xn(this.items, r.key), s = (o = this.schema) == null ? void 0 : o.sortMapEntries;
    if (i) {
      if (!n)
        throw new Error(`Key ${r.key} already set`);
      ce(i.value) && sv(r.value) ? i.value.value = r.value : i.value = r.value;
    } else if (s) {
      const l = this.items.findIndex((a) => s(r, a) < 0);
      l === -1 ? this.items.push(r) : this.items.splice(l, 0, r);
    } else
      this.items.push(r);
  }
  delete(t) {
    const n = Xn(this.items, t);
    return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : !1;
  }
  get(t, n) {
    const r = Xn(this.items, t), i = r == null ? void 0 : r.value;
    return (!n && ce(i) ? i.value : i) ?? void 0;
  }
  has(t) {
    return !!Xn(this.items, t);
  }
  set(t, n) {
    this.add(new Fe(t, n), !0);
  }
  /**
   * @param ctx - Conversion context, originally set in Document#toJS()
   * @param {Class} Type - If set, forces the returned collection type
   * @returns Instance of Type, Map, or Object
   */
  toJSON(t, n, r) {
    const i = r ? new r() : n != null && n.mapAsMap ? /* @__PURE__ */ new Map() : {};
    n != null && n.onCreate && n.onCreate(i);
    for (const s of this.items)
      dv(n, i, s);
    return i;
  }
  toString(t, n, r) {
    if (!t)
      return JSON.stringify(this);
    for (const i of this.items)
      if (!_e(i))
        throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);
    return !t.allNullValues && this.hasAllNullValues(!1) && (t = Object.assign({}, t, { allNullValues: !0 })), hv(this, t, {
      blockItemPrefix: "",
      flowChars: { start: "{", end: "}" },
      itemIndent: t.indent || "",
      onChompKeep: r,
      onComment: n
    });
  }
}
const mi = {
  collection: "map",
  default: !0,
  nodeClass: at,
  tag: "tag:yaml.org,2002:map",
  resolve(e, t) {
    return Vs(e) || t("Expected a mapping for this tag"), e;
  },
  createNode: (e, t, n) => at.from(e, t, n)
};
class cr extends ov {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(t) {
    super(hi, t), this.items = [];
  }
  add(t) {
    this.items.push(t);
  }
  /**
   * Removes a value from the collection.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   *
   * @returns `true` if the item was found and removed.
   */
  delete(t) {
    const n = Eo(t);
    return typeof n != "number" ? !1 : this.items.splice(n, 1).length > 0;
  }
  get(t, n) {
    const r = Eo(t);
    if (typeof r != "number")
      return;
    const i = this.items[r];
    return !n && ce(i) ? i.value : i;
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   */
  has(t) {
    const n = Eo(t);
    return typeof n == "number" && n < this.items.length;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   *
   * If `key` does not contain a representation of an integer, this will throw.
   * It may be wrapped in a `Scalar`.
   */
  set(t, n) {
    const r = Eo(t);
    if (typeof r != "number")
      throw new Error(`Expected a valid index, not ${t}.`);
    const i = this.items[r];
    ce(i) && sv(n) ? i.value = n : this.items[r] = n;
  }
  toJSON(t, n) {
    const r = [];
    n != null && n.onCreate && n.onCreate(r);
    let i = 0;
    for (const s of this.items)
      r.push(ft(s, String(i++), n));
    return r;
  }
  toString(t, n, r) {
    return t ? hv(this, t, {
      blockItemPrefix: "- ",
      flowChars: { start: "[", end: "]" },
      itemIndent: (t.indent || "") + "  ",
      onChompKeep: r,
      onComment: n
    }) : JSON.stringify(this);
  }
  static from(t, n, r) {
    const { replacer: i } = r, s = new this(t);
    if (n && Symbol.iterator in Object(n)) {
      let o = 0;
      for (let l of n) {
        if (typeof i == "function") {
          const a = n instanceof Set ? l : String(o++);
          l = i.call(n, a, l);
        }
        s.items.push(Ms(l, void 0, r));
      }
    }
    return s;
  }
}
function Eo(e) {
  let t = ce(e) ? e.value : e;
  return t && typeof t == "string" && (t = Number(t)), typeof t == "number" && Number.isInteger(t) && t >= 0 ? t : null;
}
const yi = {
  collection: "seq",
  default: !0,
  nodeClass: cr,
  tag: "tag:yaml.org,2002:seq",
  resolve(e, t) {
    return Hs(e) || t("Expected a sequence for this tag"), e;
  },
  createNode: (e, t, n) => cr.from(e, t, n)
}, pa = {
  identify: (e) => typeof e == "string",
  default: !0,
  tag: "tag:yaml.org,2002:str",
  resolve: (e) => e,
  stringify(e, t, n, r) {
    return t = Object.assign({ actualString: !0 }, t), Hf(e, t, n, r);
  }
}, ga = {
  identify: (e) => e == null,
  createNode: () => new te(null),
  default: !0,
  tag: "tag:yaml.org,2002:null",
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: () => new te(null),
  stringify: ({ source: e }, t) => typeof e == "string" && ga.test.test(e) ? e : t.options.nullStr
}, Kf = {
  identify: (e) => typeof e == "boolean",
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: (e) => new te(e[0] === "t" || e[0] === "T"),
  stringify({ source: e, value: t }, n) {
    if (e && Kf.test.test(e)) {
      const r = e[0] === "t" || e[0] === "T";
      if (t === r)
        return e;
    }
    return t ? n.options.trueStr : n.options.falseStr;
  }
};
function It({ format: e, minFractionDigits: t, tag: n, value: r }) {
  if (typeof r == "bigint")
    return String(r);
  const i = typeof r == "number" ? r : Number(r);
  if (!isFinite(i))
    return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
  let s = Object.is(r, -0) ? "-0" : JSON.stringify(r);
  if (!e && t && (!n || n === "tag:yaml.org,2002:float") && /^-?\d/.test(s) && !s.includes("e")) {
    let o = s.indexOf(".");
    o < 0 && (o = s.length, s += ".");
    let l = t - (s.length - o - 1);
    for (; l-- > 0; )
      s += "0";
  }
  return s;
}
const pv = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: It
}, gv = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: (e) => parseFloat(e),
  stringify(e) {
    const t = Number(e.value);
    return isFinite(t) ? t.toExponential() : It(e);
  }
}, mv = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
  resolve(e) {
    const t = new te(parseFloat(e)), n = e.indexOf(".");
    return n !== -1 && e[e.length - 1] === "0" && (t.minFractionDigits = e.length - n - 1), t;
  },
  stringify: It
}, ma = (e) => typeof e == "bigint" || Number.isInteger(e), Wf = (e, t, n, { intAsBigInt: r }) => r ? BigInt(e) : parseInt(e.substring(t), n);
function yv(e, t, n) {
  const { value: r } = e;
  return ma(r) && r >= 0 ? n + r.toString(t) : It(e);
}
const vv = {
  identify: (e) => ma(e) && e >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^0o[0-7]+$/,
  resolve: (e, t, n) => Wf(e, 2, 8, n),
  stringify: (e) => yv(e, 8, "0o")
}, wv = {
  identify: ma,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9]+$/,
  resolve: (e, t, n) => Wf(e, 0, 10, n),
  stringify: It
}, xv = {
  identify: (e) => ma(e) && e >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^0x[0-9a-fA-F]+$/,
  resolve: (e, t, n) => Wf(e, 2, 16, n),
  stringify: (e) => yv(e, 16, "0x")
}, ST = [
  mi,
  yi,
  pa,
  ga,
  Kf,
  vv,
  wv,
  xv,
  pv,
  gv,
  mv
];
function Mp(e) {
  return typeof e == "bigint" || Number.isInteger(e);
}
const _o = ({ value: e }) => JSON.stringify(e), kT = [
  {
    identify: (e) => typeof e == "string",
    default: !0,
    tag: "tag:yaml.org,2002:str",
    resolve: (e) => e,
    stringify: _o
  },
  {
    identify: (e) => e == null,
    createNode: () => new te(null),
    default: !0,
    tag: "tag:yaml.org,2002:null",
    test: /^null$/,
    resolve: () => null,
    stringify: _o
  },
  {
    identify: (e) => typeof e == "boolean",
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^true$|^false$/,
    resolve: (e) => e === "true",
    stringify: _o
  },
  {
    identify: Mp,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^-?(?:0|[1-9][0-9]*)$/,
    resolve: (e, t, { intAsBigInt: n }) => n ? BigInt(e) : parseInt(e, 10),
    stringify: ({ value: e }) => Mp(e) ? e.toString() : JSON.stringify(e)
  },
  {
    identify: (e) => typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
    resolve: (e) => parseFloat(e),
    stringify: _o
  }
], ET = {
  default: !0,
  tag: "",
  test: /^/,
  resolve(e, t) {
    return t(`Unresolved plain scalar ${JSON.stringify(e)}`), e;
  }
}, _T = [mi, yi].concat(kT, ET), Yf = {
  identify: (e) => e instanceof Uint8Array,
  // Buffer inherits from Uint8Array
  default: !1,
  tag: "tag:yaml.org,2002:binary",
  /**
   * Returns a Buffer in node and an Uint8Array in browsers
   *
   * To use the resulting buffer as an image, you'll want to do something like:
   *
   *   const blob = new Blob([buffer], { type: 'image/jpeg' })
   *   document.querySelector('#photo').src = URL.createObjectURL(blob)
   */
  resolve(e, t) {
    if (typeof atob == "function") {
      const n = atob(e.replace(/[\n\r]/g, "")), r = new Uint8Array(n.length);
      for (let i = 0; i < n.length; ++i)
        r[i] = n.charCodeAt(i);
      return r;
    } else
      return t("This environment does not support reading binary tags; either Buffer or atob is required"), e;
  },
  stringify({ comment: e, type: t, value: n }, r, i, s) {
    if (!n)
      return "";
    const o = n;
    let l;
    if (typeof btoa == "function") {
      let a = "";
      for (let u = 0; u < o.length; ++u)
        a += String.fromCharCode(o[u]);
      l = btoa(a);
    } else
      throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
    if (t ?? (t = te.BLOCK_LITERAL), t !== te.QUOTE_DOUBLE) {
      const a = Math.max(r.options.lineWidth - r.indent.length, r.options.minContentWidth), u = Math.ceil(l.length / a), d = new Array(u);
      for (let c = 0, f = 0; c < u; ++c, f += a)
        d[c] = l.substr(f, a);
      l = d.join(t === te.BLOCK_LITERAL ? `
` : " ");
    }
    return Hf({ comment: e, type: t, value: l }, r, i, s);
  }
};
function Sv(e, t) {
  if (Hs(e))
    for (let n = 0; n < e.items.length; ++n) {
      let r = e.items[n];
      if (!_e(r)) {
        if (Vs(r)) {
          r.items.length > 1 && t("Each pair must have its own sequence indicator");
          const i = r.items[0] || new Fe(new te(null));
          if (r.commentBefore && (i.key.commentBefore = i.key.commentBefore ? `${r.commentBefore}
${i.key.commentBefore}` : r.commentBefore), r.comment) {
            const s = i.value ?? i.key;
            s.comment = s.comment ? `${r.comment}
${s.comment}` : r.comment;
          }
          r = i;
        }
        e.items[n] = _e(r) ? r : new Fe(r);
      }
    }
  else
    t("Expected a sequence for this tag");
  return e;
}
function kv(e, t, n) {
  const { replacer: r } = n, i = new cr(e);
  i.tag = "tag:yaml.org,2002:pairs";
  let s = 0;
  if (t && Symbol.iterator in Object(t))
    for (let o of t) {
      typeof r == "function" && (o = r.call(t, String(s++), o));
      let l, a;
      if (Array.isArray(o))
        if (o.length === 2)
          l = o[0], a = o[1];
        else
          throw new TypeError(`Expected [key, value] tuple: ${o}`);
      else if (o && o instanceof Object) {
        const u = Object.keys(o);
        if (u.length === 1)
          l = u[0], a = o[l];
        else
          throw new TypeError(`Expected tuple with one key, not ${u.length} keys`);
      } else
        l = o;
      i.items.push(Uf(l, a, n));
    }
  return i;
}
const Xf = {
  collection: "seq",
  default: !1,
  tag: "tag:yaml.org,2002:pairs",
  resolve: Sv,
  createNode: kv
};
class Kr extends cr {
  constructor() {
    super(), this.add = at.prototype.add.bind(this), this.delete = at.prototype.delete.bind(this), this.get = at.prototype.get.bind(this), this.has = at.prototype.has.bind(this), this.set = at.prototype.set.bind(this), this.tag = Kr.tag;
  }
  /**
   * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
   * but TypeScript won't allow widening the signature of a child method.
   */
  toJSON(t, n) {
    if (!n)
      return super.toJSON(t);
    const r = /* @__PURE__ */ new Map();
    n != null && n.onCreate && n.onCreate(r);
    for (const i of this.items) {
      let s, o;
      if (_e(i) ? (s = ft(i.key, "", n), o = ft(i.value, s, n)) : s = ft(i, "", n), r.has(s))
        throw new Error("Ordered maps must not include duplicate keys");
      r.set(s, o);
    }
    return r;
  }
  static from(t, n, r) {
    const i = kv(t, n, r), s = new this();
    return s.items = i.items, s;
  }
}
Kr.tag = "tag:yaml.org,2002:omap";
const Qf = {
  collection: "seq",
  identify: (e) => e instanceof Map,
  nodeClass: Kr,
  default: !1,
  tag: "tag:yaml.org,2002:omap",
  resolve(e, t) {
    const n = Sv(e, t), r = [];
    for (const { key: i } of n.items)
      ce(i) && (r.includes(i.value) ? t(`Ordered maps must not include duplicate keys: ${i.value}`) : r.push(i.value));
    return Object.assign(new Kr(), n);
  },
  createNode: (e, t, n) => Kr.from(e, t, n)
};
function Ev({ value: e, source: t }, n) {
  return t && (e ? _v : Nv).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr;
}
const _v = {
  identify: (e) => e === !0,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: () => new te(!0),
  stringify: Ev
}, Nv = {
  identify: (e) => e === !1,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
  resolve: () => new te(!1),
  stringify: Ev
}, NT = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: It
}, CT = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: (e) => parseFloat(e.replace(/_/g, "")),
  stringify(e) {
    const t = Number(e.value);
    return isFinite(t) ? t.toExponential() : It(e);
  }
}, bT = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
  resolve(e) {
    const t = new te(parseFloat(e.replace(/_/g, ""))), n = e.indexOf(".");
    if (n !== -1) {
      const r = e.substring(n + 1).replace(/_/g, "");
      r[r.length - 1] === "0" && (t.minFractionDigits = r.length);
    }
    return t;
  },
  stringify: It
}, Us = (e) => typeof e == "bigint" || Number.isInteger(e);
function ya(e, t, n, { intAsBigInt: r }) {
  const i = e[0];
  if ((i === "-" || i === "+") && (t += 1), e = e.substring(t).replace(/_/g, ""), r) {
    switch (n) {
      case 2:
        e = `0b${e}`;
        break;
      case 8:
        e = `0o${e}`;
        break;
      case 16:
        e = `0x${e}`;
        break;
    }
    const o = BigInt(e);
    return i === "-" ? BigInt(-1) * o : o;
  }
  const s = parseInt(e, n);
  return i === "-" ? -1 * s : s;
}
function qf(e, t, n) {
  const { value: r } = e;
  if (Us(r)) {
    const i = r.toString(t);
    return r < 0 ? "-" + n + i.substr(1) : n + i;
  }
  return It(e);
}
const MT = {
  identify: Us,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "BIN",
  test: /^[-+]?0b[0-1_]+$/,
  resolve: (e, t, n) => ya(e, 2, 2, n),
  stringify: (e) => qf(e, 2, "0b")
}, TT = {
  identify: Us,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^[-+]?0[0-7_]+$/,
  resolve: (e, t, n) => ya(e, 1, 8, n),
  stringify: (e) => qf(e, 8, "0")
}, IT = {
  identify: Us,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9][0-9_]*$/,
  resolve: (e, t, n) => ya(e, 0, 10, n),
  stringify: It
}, AT = {
  identify: Us,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^[-+]?0x[0-9a-fA-F_]+$/,
  resolve: (e, t, n) => ya(e, 2, 16, n),
  stringify: (e) => qf(e, 16, "0x")
};
class Wr extends at {
  constructor(t) {
    super(t), this.tag = Wr.tag;
  }
  add(t) {
    let n;
    _e(t) ? n = t : t && typeof t == "object" && "key" in t && "value" in t && t.value === null ? n = new Fe(t.key, null) : n = new Fe(t, null), Xn(this.items, n.key) || this.items.push(n);
  }
  /**
   * If `keepPair` is `true`, returns the Pair matching `key`.
   * Otherwise, returns the value of that Pair's key.
   */
  get(t, n) {
    const r = Xn(this.items, t);
    return !n && _e(r) ? ce(r.key) ? r.key.value : r.key : r;
  }
  set(t, n) {
    if (typeof n != "boolean")
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
    const r = Xn(this.items, t);
    r && !n ? this.items.splice(this.items.indexOf(r), 1) : !r && n && this.items.push(new Fe(t));
  }
  toJSON(t, n) {
    return super.toJSON(t, n, Set);
  }
  toString(t, n, r) {
    if (!t)
      return JSON.stringify(this);
    if (this.hasAllNullValues(!0))
      return super.toString(Object.assign({}, t, { allNullValues: !0 }), n, r);
    throw new Error("Set items must all have null values");
  }
  static from(t, n, r) {
    const { replacer: i } = r, s = new this(t);
    if (n && Symbol.iterator in Object(n))
      for (let o of n)
        typeof i == "function" && (o = i.call(n, o, o)), s.items.push(Uf(o, null, r));
    return s;
  }
}
Wr.tag = "tag:yaml.org,2002:set";
const Gf = {
  collection: "map",
  identify: (e) => e instanceof Set,
  nodeClass: Wr,
  default: !1,
  tag: "tag:yaml.org,2002:set",
  createNode: (e, t, n) => Wr.from(e, t, n),
  resolve(e, t) {
    if (Vs(e)) {
      if (e.hasAllNullValues(!0))
        return Object.assign(new Wr(), e);
      t("Set items must all have null values");
    } else
      t("Expected a mapping for this tag");
    return e;
  }
};
function Jf(e, t) {
  const n = e[0], r = n === "-" || n === "+" ? e.substring(1) : e, i = (o) => t ? BigInt(o) : Number(o), s = r.replace(/_/g, "").split(":").reduce((o, l) => o * i(60) + i(l), i(0));
  return n === "-" ? i(-1) * s : s;
}
function Cv(e) {
  let { value: t } = e, n = (o) => o;
  if (typeof t == "bigint")
    n = (o) => BigInt(o);
  else if (isNaN(t) || !isFinite(t))
    return It(e);
  let r = "";
  t < 0 && (r = "-", t *= n(-1));
  const i = n(60), s = [t % i];
  return t < 60 ? s.unshift(0) : (t = (t - s[0]) / i, s.unshift(t % i), t >= 60 && (t = (t - s[0]) / i, s.unshift(t))), r + s.map((o) => String(o).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
const bv = {
  identify: (e) => typeof e == "bigint" || Number.isInteger(e),
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
  resolve: (e, t, { intAsBigInt: n }) => Jf(e, n),
  stringify: Cv
}, Mv = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
  resolve: (e) => Jf(e, !1),
  stringify: Cv
}, va = {
  identify: (e) => e instanceof Date,
  default: !0,
  tag: "tag:yaml.org,2002:timestamp",
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
  resolve(e) {
    const t = e.match(va.test);
    if (!t)
      throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
    const [, n, r, i, s, o, l] = t.map(Number), a = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0;
    let u = Date.UTC(n, r - 1, i, s || 0, o || 0, l || 0, a);
    const d = t[8];
    if (d && d !== "Z") {
      let c = Jf(d, !1);
      Math.abs(c) < 30 && (c *= 60), u -= 6e4 * c;
    }
    return new Date(u);
  },
  stringify: ({ value: e }) => (e == null ? void 0 : e.toISOString().replace(/(T00:00:00)?\.000Z$/, "")) ?? ""
}, Tp = [
  mi,
  yi,
  pa,
  ga,
  _v,
  Nv,
  MT,
  TT,
  IT,
  AT,
  NT,
  CT,
  bT,
  Yf,
  Zt,
  Qf,
  Xf,
  Gf,
  bv,
  Mv,
  va
], Ip = /* @__PURE__ */ new Map([
  ["core", ST],
  ["failsafe", [mi, yi, pa]],
  ["json", _T],
  ["yaml11", Tp],
  ["yaml-1.1", Tp]
]), Ap = {
  binary: Yf,
  bool: Kf,
  float: mv,
  floatExp: gv,
  floatNaN: pv,
  floatTime: Mv,
  int: wv,
  intHex: xv,
  intOct: vv,
  intTime: bv,
  map: mi,
  merge: Zt,
  null: ga,
  omap: Qf,
  pairs: Xf,
  seq: yi,
  set: Gf,
  timestamp: va
}, LT = {
  "tag:yaml.org,2002:binary": Yf,
  "tag:yaml.org,2002:merge": Zt,
  "tag:yaml.org,2002:omap": Qf,
  "tag:yaml.org,2002:pairs": Xf,
  "tag:yaml.org,2002:set": Gf,
  "tag:yaml.org,2002:timestamp": va
};
function au(e, t, n) {
  const r = Ip.get(t);
  if (r && !e)
    return n && !r.includes(Zt) ? r.concat(Zt) : r.slice();
  let i = r;
  if (!i)
    if (Array.isArray(e))
      i = [];
    else {
      const s = Array.from(Ip.keys()).filter((o) => o !== "yaml11").map((o) => JSON.stringify(o)).join(", ");
      throw new Error(`Unknown schema "${t}"; use one of ${s} or define customTags array`);
    }
  if (Array.isArray(e))
    for (const s of e)
      i = i.concat(s);
  else typeof e == "function" && (i = e(i.slice()));
  return n && (i = i.concat(Zt)), i.reduce((s, o) => {
    const l = typeof o == "string" ? Ap[o] : o;
    if (!l) {
      const a = JSON.stringify(o), u = Object.keys(Ap).map((d) => JSON.stringify(d)).join(", ");
      throw new Error(`Unknown custom tag ${a}; use one of ${u}`);
    }
    return s.includes(l) || s.push(l), s;
  }, []);
}
const $T = (e, t) => e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
class Zf {
  constructor({ compat: t, customTags: n, merge: r, resolveKnownTags: i, schema: s, sortMapEntries: o, toStringDefaults: l }) {
    this.compat = Array.isArray(t) ? au(t, "compat") : t ? au(null, t) : null, this.name = typeof s == "string" && s || "core", this.knownTags = i ? LT : {}, this.tags = au(n, this.name, r), this.toStringOptions = l ?? null, Object.defineProperty(this, In, { value: mi }), Object.defineProperty(this, Bt, { value: pa }), Object.defineProperty(this, hi, { value: yi }), this.sortMapEntries = typeof o == "function" ? o : o === !0 ? $T : null;
  }
  clone() {
    const t = Object.create(Zf.prototype, Object.getOwnPropertyDescriptors(this));
    return t.tags = this.tags.slice(), t;
  }
}
function PT(e, t) {
  var a;
  const n = [];
  let r = t.directives === !0;
  if (t.directives !== !1 && e.directives) {
    const u = e.directives.toString(e);
    u ? (n.push(u), r = !0) : e.directives.docStart && (r = !0);
  }
  r && n.push("---");
  const i = av(e, t), { commentString: s } = i.options;
  if (e.commentBefore) {
    n.length !== 1 && n.unshift("");
    const u = s(e.commentBefore);
    n.unshift(Gt(u, ""));
  }
  let o = !1, l = null;
  if (e.contents) {
    if (Ee(e.contents)) {
      if (e.contents.spaceBefore && r && n.push(""), e.contents.commentBefore) {
        const c = s(e.contents.commentBefore);
        n.push(Gt(c, ""));
      }
      i.forceBlockIndent = !!e.comment, l = e.contents.comment;
    }
    const u = l ? void 0 : () => o = !0;
    let d = li(e.contents, i, () => l = null, u);
    l && (d += Yn(d, "", s(l))), (d[0] === "|" || d[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${d}` : n.push(d);
  } else
    n.push(li(e.contents, i));
  if ((a = e.directives) != null && a.docEnd)
    if (e.comment) {
      const u = s(e.comment);
      u.includes(`
`) ? (n.push("..."), n.push(Gt(u, ""))) : n.push(`... ${u}`);
    } else
      n.push("...");
  else {
    let u = e.comment;
    u && o && (u = u.replace(/^\n+/, "")), u && ((!o || l) && n[n.length - 1] !== "" && n.push(""), n.push(Gt(s(u), "")));
  }
  return n.join(`
`) + `
`;
}
class wa {
  constructor(t, n, r) {
    this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, pt, { value: wc });
    let i = null;
    typeof n == "function" || Array.isArray(n) ? i = n : r === void 0 && n && (r = n, n = void 0);
    const s = Object.assign({
      intAsBigInt: !1,
      keepSourceTokens: !1,
      logLevel: "warn",
      prettyErrors: !0,
      strict: !0,
      stringKeys: !1,
      uniqueKeys: !0,
      version: "1.2"
    }, r);
    this.options = s;
    let { version: o } = s;
    r != null && r._directives ? (this.directives = r._directives.atDocument(), this.directives.yaml.explicit && (o = this.directives.yaml.version)) : this.directives = new ze({ version: o }), this.setSchema(o, r), this.contents = t === void 0 ? null : this.createNode(t, i, r);
  }
  /**
   * Create a deep copy of this Document and its contents.
   *
   * Custom Node values that inherit from `Object` still refer to their original instances.
   */
  clone() {
    const t = Object.create(wa.prototype, {
      [pt]: { value: wc }
    });
    return t.commentBefore = this.commentBefore, t.comment = this.comment, t.errors = this.errors.slice(), t.warnings = this.warnings.slice(), t.options = Object.assign({}, this.options), this.directives && (t.directives = this.directives.clone()), t.schema = this.schema.clone(), t.contents = Ee(this.contents) ? this.contents.clone(t.schema) : this.contents, this.range && (t.range = this.range.slice()), t;
  }
  /** Adds a value to the document. */
  add(t) {
    yr(this.contents) && this.contents.add(t);
  }
  /** Adds a value to the document. */
  addIn(t, n) {
    yr(this.contents) && this.contents.addIn(t, n);
  }
  /**
   * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
   *
   * If `node` already has an anchor, `name` is ignored.
   * Otherwise, the `node.anchor` value will be set to `name`,
   * or if an anchor with that name is already present in the document,
   * `name` will be used as a prefix for a new unique anchor.
   * If `name` is undefined, the generated anchor will use 'a' as a prefix.
   */
  createAlias(t, n) {
    if (!t.anchor) {
      const r = rv(this);
      t.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      !n || r.has(n) ? iv(n || "a", r) : n;
    }
    return new Vf(t.anchor);
  }
  createNode(t, n, r) {
    let i;
    if (typeof n == "function")
      t = n.call({ "": t }, "", t), i = n;
    else if (Array.isArray(n)) {
      const w = (m) => typeof m == "number" || m instanceof String || m instanceof Number, h = n.filter(w).map(String);
      h.length > 0 && (n = n.concat(h)), i = n;
    } else r === void 0 && n && (r = n, n = void 0);
    const { aliasDuplicateObjects: s, anchorPrefix: o, flow: l, keepUndefined: a, onTagObj: u, tag: d } = r ?? {}, { onAnchor: c, setAnchors: f, sourceObjects: p } = aT(
      this,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      o || "a"
    ), y = {
      aliasDuplicateObjects: s ?? !0,
      keepUndefined: a ?? !1,
      onAnchor: c,
      onTagObj: u,
      replacer: i,
      schema: this.schema,
      sourceObjects: p
    }, v = Ms(t, d, y);
    return l && ke(v) && (v.flow = !0), f(), v;
  }
  /**
   * Convert a key and a value into a `Pair` using the current schema,
   * recursively wrapping all values as `Scalar` or `Collection` nodes.
   */
  createPair(t, n, r = {}) {
    const i = this.createNode(t, null, r), s = this.createNode(n, null, r);
    return new Fe(i, s);
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  delete(t) {
    return yr(this.contents) ? this.contents.delete(t) : !1;
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(t) {
    return Ri(t) ? this.contents == null ? !1 : (this.contents = null, !0) : yr(this.contents) ? this.contents.deleteIn(t) : !1;
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  get(t, n) {
    return ke(this.contents) ? this.contents.get(t, n) : void 0;
  }
  /**
   * Returns item at `path`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(t, n) {
    return Ri(t) ? !n && ce(this.contents) ? this.contents.value : this.contents : ke(this.contents) ? this.contents.getIn(t, n) : void 0;
  }
  /**
   * Checks if the document includes a value with the key `key`.
   */
  has(t) {
    return ke(this.contents) ? this.contents.has(t) : !1;
  }
  /**
   * Checks if the document includes a value at `path`.
   */
  hasIn(t) {
    return Ri(t) ? this.contents !== void 0 : ke(this.contents) ? this.contents.hasIn(t) : !1;
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  set(t, n) {
    this.contents == null ? this.contents = Il(this.schema, [t], n) : yr(this.contents) && this.contents.set(t, n);
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(t, n) {
    Ri(t) ? this.contents = n : this.contents == null ? this.contents = Il(this.schema, Array.from(t), n) : yr(this.contents) && this.contents.setIn(t, n);
  }
  /**
   * Change the YAML version and schema used by the document.
   * A `null` version disables support for directives, explicit tags, anchors, and aliases.
   * It also requires the `schema` option to be given as a `Schema` instance value.
   *
   * Overrides all previously set schema options.
   */
  setSchema(t, n = {}) {
    typeof t == "number" && (t = String(t));
    let r;
    switch (t) {
      case "1.1":
        this.directives ? this.directives.yaml.version = "1.1" : this.directives = new ze({ version: "1.1" }), r = { resolveKnownTags: !1, schema: "yaml-1.1" };
        break;
      case "1.2":
      case "next":
        this.directives ? this.directives.yaml.version = t : this.directives = new ze({ version: t }), r = { resolveKnownTags: !0, schema: "core" };
        break;
      case null:
        this.directives && delete this.directives, r = null;
        break;
      default: {
        const i = JSON.stringify(t);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`);
      }
    }
    if (n.schema instanceof Object)
      this.schema = n.schema;
    else if (r)
      this.schema = new Zf(Object.assign(r, n));
    else
      throw new Error("With a null YAML version, the { schema: Schema } option is required");
  }
  // json & jsonArg are only used from toJSON()
  toJS({ json: t, jsonArg: n, mapAsMap: r, maxAliasCount: i, onAnchor: s, reviver: o } = {}) {
    const l = {
      anchors: /* @__PURE__ */ new Map(),
      doc: this,
      keep: !t,
      mapAsMap: r === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof i == "number" ? i : 100
    }, a = ft(this.contents, n ?? "", l);
    if (typeof s == "function")
      for (const { count: u, res: d } of l.anchors.values())
        s(d, u);
    return typeof o == "function" ? Or(o, { "": a }, "", a) : a;
  }
  /**
   * A JSON representation of the document `contents`.
   *
   * @param jsonArg Used by `JSON.stringify` to indicate the array index or
   *   property name.
   */
  toJSON(t, n) {
    return this.toJS({ json: !0, jsonArg: t, mapAsMap: !1, onAnchor: n });
  }
  /** A YAML representation of the document. */
  toString(t = {}) {
    if (this.errors.length > 0)
      throw new Error("Document with errors cannot be stringified");
    if ("indent" in t && (!Number.isInteger(t.indent) || Number(t.indent) <= 0)) {
      const n = JSON.stringify(t.indent);
      throw new Error(`"indent" option must be a positive integer, not ${n}`);
    }
    return PT(this, t);
  }
}
function yr(e) {
  if (ke(e))
    return !0;
  throw new Error("Expected a YAML collection as document contents");
}
class Tv extends Error {
  constructor(t, n, r, i) {
    super(), this.name = t, this.code = r, this.message = i, this.pos = n;
  }
}
class zi extends Tv {
  constructor(t, n, r) {
    super("YAMLParseError", t, n, r);
  }
}
class OT extends Tv {
  constructor(t, n, r) {
    super("YAMLWarning", t, n, r);
  }
}
const Lp = (e, t) => (n) => {
  if (n.pos[0] === -1)
    return;
  n.linePos = n.pos.map((l) => t.linePos(l));
  const { line: r, col: i } = n.linePos[0];
  n.message += ` at line ${r}, column ${i}`;
  let s = i - 1, o = e.substring(t.lineStarts[r - 1], t.lineStarts[r]).replace(/[\n\r]+$/, "");
  if (s >= 60 && o.length > 80) {
    const l = Math.min(s - 39, o.length - 79);
    o = "…" + o.substring(l), s -= l - 1;
  }
  if (o.length > 80 && (o = o.substring(0, 79) + "…"), r > 1 && /^ *$/.test(o.substring(0, s))) {
    let l = e.substring(t.lineStarts[r - 2], t.lineStarts[r - 1]);
    l.length > 80 && (l = l.substring(0, 79) + `…
`), o = l + o;
  }
  if (/[^ ]/.test(o)) {
    let l = 1;
    const a = n.linePos[1];
    (a == null ? void 0 : a.line) === r && a.col > i && (l = Math.max(1, Math.min(a.col - i, 80 - s)));
    const u = " ".repeat(s) + "^".repeat(l);
    n.message += `:

${o}
${u}
`;
  }
};
function ai(e, { flow: t, indicator: n, next: r, offset: i, onError: s, parentIndent: o, startOnNewline: l }) {
  let a = !1, u = l, d = l, c = "", f = "", p = !1, y = !1, v = null, w = null, h = null, m = null, g = null, x = null, S = null;
  for (const _ of e)
    switch (y && (_.type !== "space" && _.type !== "newline" && _.type !== "comma" && s(_.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), y = !1), v && (u && _.type !== "comment" && _.type !== "newline" && s(v, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), v = null), _.type) {
      case "space":
        !t && (n !== "doc-start" || (r == null ? void 0 : r.type) !== "flow-collection") && _.source.includes("	") && (v = _), d = !0;
        break;
      case "comment": {
        d || s(_, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
        const M = _.source.substring(1) || " ";
        c ? c += f + M : c = M, f = "", u = !1;
        break;
      }
      case "newline":
        u ? c ? c += _.source : (!x || n !== "seq-item-ind") && (a = !0) : f += _.source, u = !0, p = !0, (w || h) && (m = _), d = !0;
        break;
      case "anchor":
        w && s(_, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), _.source.endsWith(":") && s(_.offset + _.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", !0), w = _, S ?? (S = _.offset), u = !1, d = !1, y = !0;
        break;
      case "tag": {
        h && s(_, "MULTIPLE_TAGS", "A node can have at most one tag"), h = _, S ?? (S = _.offset), u = !1, d = !1, y = !0;
        break;
      }
      case n:
        (w || h) && s(_, "BAD_PROP_ORDER", `Anchors and tags must be after the ${_.source} indicator`), x && s(_, "UNEXPECTED_TOKEN", `Unexpected ${_.source} in ${t ?? "collection"}`), x = _, u = n === "seq-item-ind" || n === "explicit-key-ind", d = !1;
        break;
      case "comma":
        if (t) {
          g && s(_, "UNEXPECTED_TOKEN", `Unexpected , in ${t}`), g = _, u = !1, d = !1;
          break;
        }
      default:
        s(_, "UNEXPECTED_TOKEN", `Unexpected ${_.type} token`), u = !1, d = !1;
    }
  const k = e[e.length - 1], E = k ? k.offset + k.source.length : i;
  return y && r && r.type !== "space" && r.type !== "newline" && r.type !== "comma" && (r.type !== "scalar" || r.source !== "") && s(r.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), v && (u && v.indent <= o || (r == null ? void 0 : r.type) === "block-map" || (r == null ? void 0 : r.type) === "block-seq") && s(v, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), {
    comma: g,
    found: x,
    spaceBefore: a,
    comment: c,
    hasNewline: p,
    anchor: w,
    tag: h,
    newlineAfterProp: m,
    end: E,
    start: S ?? E
  };
}
function Ts(e) {
  if (!e)
    return null;
  switch (e.type) {
    case "alias":
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      if (e.source.includes(`
`))
        return !0;
      if (e.end) {
        for (const t of e.end)
          if (t.type === "newline")
            return !0;
      }
      return !1;
    case "flow-collection":
      for (const t of e.items) {
        for (const n of t.start)
          if (n.type === "newline")
            return !0;
        if (t.sep) {
          for (const n of t.sep)
            if (n.type === "newline")
              return !0;
        }
        if (Ts(t.key) || Ts(t.value))
          return !0;
      }
      return !1;
    default:
      return !0;
  }
}
function Ec(e, t, n) {
  if ((t == null ? void 0 : t.type) === "flow-collection") {
    const r = t.end[0];
    r.indent === e && (r.source === "]" || r.source === "}") && Ts(t) && n(r, "BAD_INDENT", "Flow end indicator should be more indented than parent", !0);
  }
}
function Iv(e, t, n) {
  const { uniqueKeys: r } = e.options;
  if (r === !1)
    return !1;
  const i = typeof r == "function" ? r : (s, o) => s === o || ce(s) && ce(o) && s.value === o.value;
  return t.some((s) => i(s.key, n));
}
const $p = "All mapping items must start at the same column";
function DT({ composeNode: e, composeEmptyNode: t }, n, r, i, s) {
  var d;
  const o = (s == null ? void 0 : s.nodeClass) ?? at, l = new o(n.schema);
  n.atRoot && (n.atRoot = !1);
  let a = r.offset, u = null;
  for (const c of r.items) {
    const { start: f, key: p, sep: y, value: v } = c, w = ai(f, {
      indicator: "explicit-key-ind",
      next: p ?? (y == null ? void 0 : y[0]),
      offset: a,
      onError: i,
      parentIndent: r.indent,
      startOnNewline: !0
    }), h = !w.found;
    if (h) {
      if (p && (p.type === "block-seq" ? i(a, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in p && p.indent !== r.indent && i(a, "BAD_INDENT", $p)), !w.anchor && !w.tag && !y) {
        u = w.end, w.comment && (l.comment ? l.comment += `
` + w.comment : l.comment = w.comment);
        continue;
      }
      (w.newlineAfterProp || Ts(p)) && i(p ?? f[f.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
    } else ((d = w.found) == null ? void 0 : d.indent) !== r.indent && i(a, "BAD_INDENT", $p);
    n.atKey = !0;
    const m = w.end, g = p ? e(n, p, w, i) : t(n, m, f, null, w, i);
    n.schema.compat && Ec(r.indent, p, i), n.atKey = !1, Iv(n, l.items, g) && i(m, "DUPLICATE_KEY", "Map keys must be unique");
    const x = ai(y ?? [], {
      indicator: "map-value-ind",
      next: v,
      offset: g.range[2],
      onError: i,
      parentIndent: r.indent,
      startOnNewline: !p || p.type === "block-scalar"
    });
    if (a = x.end, x.found) {
      h && ((v == null ? void 0 : v.type) === "block-map" && !x.hasNewline && i(a, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && w.start < x.found.offset - 1024 && i(g.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
      const S = v ? e(n, v, x, i) : t(n, a, y, null, x, i);
      n.schema.compat && Ec(r.indent, v, i), a = S.range[2];
      const k = new Fe(g, S);
      n.options.keepSourceTokens && (k.srcToken = c), l.items.push(k);
    } else {
      h && i(g.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), x.comment && (g.comment ? g.comment += `
` + x.comment : g.comment = x.comment);
      const S = new Fe(g);
      n.options.keepSourceTokens && (S.srcToken = c), l.items.push(S);
    }
  }
  return u && u < a && i(u, "IMPOSSIBLE", "Map comment with trailing content"), l.range = [r.offset, a, u ?? a], l;
}
function jT({ composeNode: e, composeEmptyNode: t }, n, r, i, s) {
  const o = (s == null ? void 0 : s.nodeClass) ?? cr, l = new o(n.schema);
  n.atRoot && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let a = r.offset, u = null;
  for (const { start: d, value: c } of r.items) {
    const f = ai(d, {
      indicator: "seq-item-ind",
      next: c,
      offset: a,
      onError: i,
      parentIndent: r.indent,
      startOnNewline: !0
    });
    if (!f.found)
      if (f.anchor || f.tag || c)
        (c == null ? void 0 : c.type) === "block-seq" ? i(f.end, "BAD_INDENT", "All sequence items must start at the same column") : i(a, "MISSING_CHAR", "Sequence item without - indicator");
      else {
        u = f.end, f.comment && (l.comment = f.comment);
        continue;
      }
    const p = c ? e(n, c, f, i) : t(n, f.end, d, null, f, i);
    n.schema.compat && Ec(r.indent, c, i), a = p.range[2], l.items.push(p);
  }
  return l.range = [r.offset, a, u ?? a], l;
}
function Ks(e, t, n, r) {
  let i = "";
  if (e) {
    let s = !1, o = "";
    for (const l of e) {
      const { source: a, type: u } = l;
      switch (u) {
        case "space":
          s = !0;
          break;
        case "comment": {
          n && !s && r(l, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const d = a.substring(1) || " ";
          i ? i += o + d : i = d, o = "";
          break;
        }
        case "newline":
          i && (o += a), s = !0;
          break;
        default:
          r(l, "UNEXPECTED_TOKEN", `Unexpected ${u} at node end`);
      }
      t += a.length;
    }
  }
  return { comment: i, offset: t };
}
const uu = "Block collections are not allowed within flow collections", cu = (e) => e && (e.type === "block-map" || e.type === "block-seq");
function RT({ composeNode: e, composeEmptyNode: t }, n, r, i, s) {
  var w;
  const o = r.start.source === "{", l = o ? "flow map" : "flow sequence", a = (s == null ? void 0 : s.nodeClass) ?? (o ? at : cr), u = new a(n.schema);
  u.flow = !0;
  const d = n.atRoot;
  d && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let c = r.offset + r.start.source.length;
  for (let h = 0; h < r.items.length; ++h) {
    const m = r.items[h], { start: g, key: x, sep: S, value: k } = m, E = ai(g, {
      flow: l,
      indicator: "explicit-key-ind",
      next: x ?? (S == null ? void 0 : S[0]),
      offset: c,
      onError: i,
      parentIndent: r.indent,
      startOnNewline: !1
    });
    if (!E.found) {
      if (!E.anchor && !E.tag && !S && !k) {
        h === 0 && E.comma ? i(E.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${l}`) : h < r.items.length - 1 && i(E.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${l}`), E.comment && (u.comment ? u.comment += `
` + E.comment : u.comment = E.comment), c = E.end;
        continue;
      }
      !o && n.options.strict && Ts(x) && i(
        x,
        // checked by containsNewline()
        "MULTILINE_IMPLICIT_KEY",
        "Implicit keys of flow sequence pairs need to be on a single line"
      );
    }
    if (h === 0)
      E.comma && i(E.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${l}`);
    else if (E.comma || i(E.start, "MISSING_CHAR", `Missing , between ${l} items`), E.comment) {
      let _ = "";
      e: for (const M of g)
        switch (M.type) {
          case "comma":
          case "space":
            break;
          case "comment":
            _ = M.source.substring(1);
            break e;
          default:
            break e;
        }
      if (_) {
        let M = u.items[u.items.length - 1];
        _e(M) && (M = M.value ?? M.key), M.comment ? M.comment += `
` + _ : M.comment = _, E.comment = E.comment.substring(_.length + 1);
      }
    }
    if (!o && !S && !E.found) {
      const _ = k ? e(n, k, E, i) : t(n, E.end, S, null, E, i);
      u.items.push(_), c = _.range[2], cu(k) && i(_.range, "BLOCK_IN_FLOW", uu);
    } else {
      n.atKey = !0;
      const _ = E.end, M = x ? e(n, x, E, i) : t(n, _, g, null, E, i);
      cu(x) && i(M.range, "BLOCK_IN_FLOW", uu), n.atKey = !1;
      const $ = ai(S ?? [], {
        flow: l,
        indicator: "map-value-ind",
        next: k,
        offset: M.range[2],
        onError: i,
        parentIndent: r.indent,
        startOnNewline: !1
      });
      if ($.found) {
        if (!o && !E.found && n.options.strict) {
          if (S)
            for (const B of S) {
              if (B === $.found)
                break;
              if (B.type === "newline") {
                i(B, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
          E.start < $.found.offset - 1024 && i($.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
        }
      } else k && ("source" in k && ((w = k.source) == null ? void 0 : w[0]) === ":" ? i(k, "MISSING_CHAR", `Missing space after : in ${l}`) : i($.start, "MISSING_CHAR", `Missing , or : between ${l} items`));
      const C = k ? e(n, k, $, i) : $.found ? t(n, $.end, S, null, $, i) : null;
      C ? cu(k) && i(C.range, "BLOCK_IN_FLOW", uu) : $.comment && (M.comment ? M.comment += `
` + $.comment : M.comment = $.comment);
      const P = new Fe(M, C);
      if (n.options.keepSourceTokens && (P.srcToken = m), o) {
        const B = u;
        Iv(n, B.items, M) && i(_, "DUPLICATE_KEY", "Map keys must be unique"), B.items.push(P);
      } else {
        const B = new at(n.schema);
        B.flow = !0, B.items.push(P);
        const N = (C ?? M).range;
        B.range = [M.range[0], N[1], N[2]], u.items.push(B);
      }
      c = C ? C.range[2] : $.end;
    }
  }
  const f = o ? "}" : "]", [p, ...y] = r.end;
  let v = c;
  if ((p == null ? void 0 : p.source) === f)
    v = p.offset + p.source.length;
  else {
    const h = l[0].toUpperCase() + l.substring(1), m = d ? `${h} must end with a ${f}` : `${h} in block collection must be sufficiently indented and end with a ${f}`;
    i(c, d ? "MISSING_CHAR" : "BAD_INDENT", m), p && p.source.length !== 1 && y.unshift(p);
  }
  if (y.length > 0) {
    const h = Ks(y, v, n.options.strict, i);
    h.comment && (u.comment ? u.comment += `
` + h.comment : u.comment = h.comment), u.range = [r.offset, v, h.offset];
  } else
    u.range = [r.offset, v, v];
  return u;
}
function fu(e, t, n, r, i, s) {
  const o = n.type === "block-map" ? DT(e, t, n, r, s) : n.type === "block-seq" ? jT(e, t, n, r, s) : RT(e, t, n, r, s), l = o.constructor;
  return i === "!" || i === l.tagName ? (o.tag = l.tagName, o) : (i && (o.tag = i), o);
}
function zT(e, t, n, r, i) {
  var f;
  const s = r.tag, o = s ? t.directives.tagName(s.source, (p) => i(s, "TAG_RESOLVE_FAILED", p)) : null;
  if (n.type === "block-seq") {
    const { anchor: p, newlineAfterProp: y } = r, v = p && s ? p.offset > s.offset ? p : s : p ?? s;
    v && (!y || y.offset < v.offset) && i(v, "MISSING_CHAR", "Missing newline after block sequence props");
  }
  const l = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
  if (!s || !o || o === "!" || o === at.tagName && l === "map" || o === cr.tagName && l === "seq")
    return fu(e, t, n, i, o);
  let a = t.schema.tags.find((p) => p.tag === o && p.collection === l);
  if (!a) {
    const p = t.schema.knownTags[o];
    if ((p == null ? void 0 : p.collection) === l)
      t.schema.tags.push(Object.assign({}, p, { default: !1 })), a = p;
    else
      return p ? i(s, "BAD_COLLECTION_TYPE", `${p.tag} used for ${l} collection, but expects ${p.collection ?? "scalar"}`, !0) : i(s, "TAG_RESOLVE_FAILED", `Unresolved tag: ${o}`, !0), fu(e, t, n, i, o);
  }
  const u = fu(e, t, n, i, o, a), d = ((f = a.resolve) == null ? void 0 : f.call(a, u, (p) => i(s, "TAG_RESOLVE_FAILED", p), t.options)) ?? u, c = Ee(d) ? d : new te(d);
  return c.range = u.range, c.tag = o, a != null && a.format && (c.format = a.format), c;
}
function BT(e, t, n) {
  const r = t.offset, i = FT(t, e.options.strict, n);
  if (!i)
    return { value: "", type: null, comment: "", range: [r, r, r] };
  const s = i.mode === ">" ? te.BLOCK_FOLDED : te.BLOCK_LITERAL, o = t.source ? VT(t.source) : [];
  let l = o.length;
  for (let v = o.length - 1; v >= 0; --v) {
    const w = o[v][1];
    if (w === "" || w === "\r")
      l = v;
    else
      break;
  }
  if (l === 0) {
    const v = i.chomp === "+" && o.length > 0 ? `
`.repeat(Math.max(1, o.length - 1)) : "";
    let w = r + i.length;
    return t.source && (w += t.source.length), { value: v, type: s, comment: i.comment, range: [r, w, w] };
  }
  let a = t.indent + i.indent, u = t.offset + i.length, d = 0;
  for (let v = 0; v < l; ++v) {
    const [w, h] = o[v];
    if (h === "" || h === "\r")
      i.indent === 0 && w.length > a && (a = w.length);
    else {
      w.length < a && n(u + w.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), i.indent === 0 && (a = w.length), d = v, a === 0 && !e.atRoot && n(u, "BAD_INDENT", "Block scalar values in collections must be indented");
      break;
    }
    u += w.length + h.length + 1;
  }
  for (let v = o.length - 1; v >= l; --v)
    o[v][0].length > a && (l = v + 1);
  let c = "", f = "", p = !1;
  for (let v = 0; v < d; ++v)
    c += o[v][0].slice(a) + `
`;
  for (let v = d; v < l; ++v) {
    let [w, h] = o[v];
    u += w.length + h.length + 1;
    const m = h[h.length - 1] === "\r";
    if (m && (h = h.slice(0, -1)), h && w.length < a) {
      const x = `Block scalar lines must not be less indented than their ${i.indent ? "explicit indentation indicator" : "first line"}`;
      n(u - h.length - (m ? 2 : 1), "BAD_INDENT", x), w = "";
    }
    s === te.BLOCK_LITERAL ? (c += f + w.slice(a) + h, f = `
`) : w.length > a || h[0] === "	" ? (f === " " ? f = `
` : !p && f === `
` && (f = `

`), c += f + w.slice(a) + h, f = `
`, p = !0) : h === "" ? f === `
` ? c += `
` : f = `
` : (c += f + h, f = " ", p = !1);
  }
  switch (i.chomp) {
    case "-":
      break;
    case "+":
      for (let v = l; v < o.length; ++v)
        c += `
` + o[v][0].slice(a);
      c[c.length - 1] !== `
` && (c += `
`);
      break;
    default:
      c += `
`;
  }
  const y = r + i.length + t.source.length;
  return { value: c, type: s, comment: i.comment, range: [r, y, y] };
}
function FT({ offset: e, props: t }, n, r) {
  if (t[0].type !== "block-scalar-header")
    return r(t[0], "IMPOSSIBLE", "Block scalar header not found"), null;
  const { source: i } = t[0], s = i[0];
  let o = 0, l = "", a = -1;
  for (let f = 1; f < i.length; ++f) {
    const p = i[f];
    if (!l && (p === "-" || p === "+"))
      l = p;
    else {
      const y = Number(p);
      !o && y ? o = y : a === -1 && (a = e + f);
    }
  }
  a !== -1 && r(a, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${i}`);
  let u = !1, d = "", c = i.length;
  for (let f = 1; f < t.length; ++f) {
    const p = t[f];
    switch (p.type) {
      case "space":
        u = !0;
      case "newline":
        c += p.source.length;
        break;
      case "comment":
        n && !u && r(p, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), c += p.source.length, d = p.source.substring(1);
        break;
      case "error":
        r(p, "UNEXPECTED_TOKEN", p.message), c += p.source.length;
        break;
      default: {
        const y = `Unexpected token in block scalar header: ${p.type}`;
        r(p, "UNEXPECTED_TOKEN", y);
        const v = p.source;
        v && typeof v == "string" && (c += v.length);
      }
    }
  }
  return { mode: s, indent: o, chomp: l, comment: d, length: c };
}
function VT(e) {
  const t = e.split(/\n( *)/), n = t[0], r = n.match(/^( *)/), s = [r != null && r[1] ? [r[1], n.slice(r[1].length)] : ["", n]];
  for (let o = 1; o < t.length; o += 2)
    s.push([t[o], t[o + 1]]);
  return s;
}
function HT(e, t, n) {
  const { offset: r, type: i, source: s, end: o } = e;
  let l, a;
  const u = (f, p, y) => n(r + f, p, y);
  switch (i) {
    case "scalar":
      l = te.PLAIN, a = UT(s, u);
      break;
    case "single-quoted-scalar":
      l = te.QUOTE_SINGLE, a = KT(s, u);
      break;
    case "double-quoted-scalar":
      l = te.QUOTE_DOUBLE, a = WT(s, u);
      break;
    default:
      return n(e, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${i}`), {
        value: "",
        type: null,
        comment: "",
        range: [r, r + s.length, r + s.length]
      };
  }
  const d = r + s.length, c = Ks(o, d, t, n);
  return {
    value: a,
    type: l,
    comment: c.comment,
    range: [r, d, c.offset]
  };
}
function UT(e, t) {
  let n = "";
  switch (e[0]) {
    case "	":
      n = "a tab character";
      break;
    case ",":
      n = "flow indicator character ,";
      break;
    case "%":
      n = "directive indicator character %";
      break;
    case "|":
    case ">": {
      n = `block scalar indicator ${e[0]}`;
      break;
    }
    case "@":
    case "`": {
      n = `reserved character ${e[0]}`;
      break;
    }
  }
  return n && t(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), Av(e);
}
function KT(e, t) {
  return (e[e.length - 1] !== "'" || e.length === 1) && t(e.length, "MISSING_CHAR", "Missing closing 'quote"), Av(e.slice(1, -1)).replace(/''/g, "'");
}
function Av(e) {
  let t, n;
  try {
    t = new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`, "sy"), n = new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`, "sy");
  } catch {
    t = /(.*?)[ \t]*\r?\n/sy, n = /[ \t]*(.*?)[ \t]*\r?\n/sy;
  }
  let r = t.exec(e);
  if (!r)
    return e;
  let i = r[1], s = " ", o = t.lastIndex;
  for (n.lastIndex = o; r = n.exec(e); )
    r[1] === "" ? s === `
` ? i += s : s = `
` : (i += s + r[1], s = " "), o = n.lastIndex;
  const l = /[ \t]*(.*)/sy;
  return l.lastIndex = o, r = l.exec(e), i + s + ((r == null ? void 0 : r[1]) ?? "");
}
function WT(e, t) {
  let n = "";
  for (let r = 1; r < e.length - 1; ++r) {
    const i = e[r];
    if (!(i === "\r" && e[r + 1] === `
`))
      if (i === `
`) {
        const { fold: s, offset: o } = YT(e, r);
        n += s, r = o;
      } else if (i === "\\") {
        let s = e[++r];
        const o = XT[s];
        if (o)
          n += o;
        else if (s === `
`)
          for (s = e[r + 1]; s === " " || s === "	"; )
            s = e[++r + 1];
        else if (s === "\r" && e[r + 1] === `
`)
          for (s = e[++r + 1]; s === " " || s === "	"; )
            s = e[++r + 1];
        else if (s === "x" || s === "u" || s === "U") {
          const l = s === "x" ? 2 : s === "u" ? 4 : 8;
          n += QT(e, r + 1, l, t), r += l;
        } else {
          const l = e.substr(r - 1, 2);
          t(r - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${l}`), n += l;
        }
      } else if (i === " " || i === "	") {
        const s = r;
        let o = e[r + 1];
        for (; o === " " || o === "	"; )
          o = e[++r + 1];
        o !== `
` && !(o === "\r" && e[r + 2] === `
`) && (n += r > s ? e.slice(s, r + 1) : i);
      } else
        n += i;
  }
  return (e[e.length - 1] !== '"' || e.length === 1) && t(e.length, "MISSING_CHAR", 'Missing closing "quote'), n;
}
function YT(e, t) {
  let n = "", r = e[t + 1];
  for (; (r === " " || r === "	" || r === `
` || r === "\r") && !(r === "\r" && e[t + 2] !== `
`); )
    r === `
` && (n += `
`), t += 1, r = e[t + 1];
  return n || (n = " "), { fold: n, offset: t };
}
const XT = {
  0: "\0",
  // null character
  a: "\x07",
  // bell character
  b: "\b",
  // backspace
  e: "\x1B",
  // escape character
  f: "\f",
  // form feed
  n: `
`,
  // line feed
  r: "\r",
  // carriage return
  t: "	",
  // horizontal tab
  v: "\v",
  // vertical tab
  N: "",
  // Unicode next line
  _: " ",
  // Unicode non-breaking space
  L: "\u2028",
  // Unicode line separator
  P: "\u2029",
  // Unicode paragraph separator
  " ": " ",
  '"': '"',
  "/": "/",
  "\\": "\\",
  "	": "	"
};
function QT(e, t, n, r) {
  const i = e.substr(t, n), o = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
  try {
    return String.fromCodePoint(o);
  } catch {
    const l = e.substr(t - 2, n + 2);
    return r(t - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${l}`), l;
  }
}
function Lv(e, t, n, r) {
  const { value: i, type: s, comment: o, range: l } = t.type === "block-scalar" ? BT(e, t, r) : HT(t, e.options.strict, r), a = n ? e.directives.tagName(n.source, (c) => r(n, "TAG_RESOLVE_FAILED", c)) : null;
  let u;
  e.options.stringKeys && e.atKey ? u = e.schema[Bt] : a ? u = qT(e.schema, i, a, n, r) : t.type === "scalar" ? u = GT(e, i, t, r) : u = e.schema[Bt];
  let d;
  try {
    const c = u.resolve(i, (f) => r(n ?? t, "TAG_RESOLVE_FAILED", f), e.options);
    d = ce(c) ? c : new te(c);
  } catch (c) {
    const f = c instanceof Error ? c.message : String(c);
    r(n ?? t, "TAG_RESOLVE_FAILED", f), d = new te(i);
  }
  return d.range = l, d.source = i, s && (d.type = s), a && (d.tag = a), u.format && (d.format = u.format), o && (d.comment = o), d;
}
function qT(e, t, n, r, i) {
  var l;
  if (n === "!")
    return e[Bt];
  const s = [];
  for (const a of e.tags)
    if (!a.collection && a.tag === n)
      if (a.default && a.test)
        s.push(a);
      else
        return a;
  for (const a of s)
    if ((l = a.test) != null && l.test(t))
      return a;
  const o = e.knownTags[n];
  return o && !o.collection ? (e.tags.push(Object.assign({}, o, { default: !1, test: void 0 })), o) : (i(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), e[Bt]);
}
function GT({ atKey: e, directives: t, schema: n }, r, i, s) {
  const o = n.tags.find((l) => {
    var a;
    return (l.default === !0 || e && l.default === "key") && ((a = l.test) == null ? void 0 : a.test(r));
  }) || n[Bt];
  if (n.compat) {
    const l = n.compat.find((a) => {
      var u;
      return a.default && ((u = a.test) == null ? void 0 : u.test(r));
    }) ?? n[Bt];
    if (o.tag !== l.tag) {
      const a = t.tagString(o.tag), u = t.tagString(l.tag), d = `Value may be parsed as either ${a} or ${u}`;
      s(i, "TAG_RESOLVE_FAILED", d, !0);
    }
  }
  return o;
}
function JT(e, t, n) {
  if (t) {
    n ?? (n = t.length);
    for (let r = n - 1; r >= 0; --r) {
      let i = t[r];
      switch (i.type) {
        case "space":
        case "comment":
        case "newline":
          e -= i.source.length;
          continue;
      }
      for (i = t[++r]; (i == null ? void 0 : i.type) === "space"; )
        e += i.source.length, i = t[++r];
      break;
    }
  }
  return e;
}
const ZT = { composeNode: $v, composeEmptyNode: ed };
function $v(e, t, n, r) {
  const i = e.atKey, { spaceBefore: s, comment: o, anchor: l, tag: a } = n;
  let u, d = !0;
  switch (t.type) {
    case "alias":
      u = eI(e, t, r), (l || a) && r(t, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      u = Lv(e, t, a, r), l && (u.anchor = l.source.substring(1));
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      try {
        u = zT(ZT, e, t, n, r), l && (u.anchor = l.source.substring(1));
      } catch (c) {
        const f = c instanceof Error ? c.message : String(c);
        r(t, "RESOURCE_EXHAUSTION", f);
      }
      break;
    default: {
      const c = t.type === "error" ? t.message : `Unsupported token (type: ${t.type})`;
      r(t, "UNEXPECTED_TOKEN", c), d = !1;
    }
  }
  return u ?? (u = ed(e, t.offset, void 0, null, n, r)), l && u.anchor === "" && r(l, "BAD_ALIAS", "Anchor cannot be an empty string"), i && e.options.stringKeys && (!ce(u) || typeof u.value != "string" || u.tag && u.tag !== "tag:yaml.org,2002:str") && r(a ?? t, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), s && (u.spaceBefore = !0), o && (t.type === "scalar" && t.source === "" ? u.comment = o : u.commentBefore = o), e.options.keepSourceTokens && d && (u.srcToken = t), u;
}
function ed(e, t, n, r, { spaceBefore: i, comment: s, anchor: o, tag: l, end: a }, u) {
  const d = {
    type: "scalar",
    offset: JT(t, n, r),
    indent: -1,
    source: ""
  }, c = Lv(e, d, l, u);
  return o && (c.anchor = o.source.substring(1), c.anchor === "" && u(o, "BAD_ALIAS", "Anchor cannot be an empty string")), i && (c.spaceBefore = !0), s && (c.comment = s, c.range[2] = a), c;
}
function eI({ options: e }, { offset: t, source: n, end: r }, i) {
  const s = new Vf(n.substring(1));
  s.source === "" && i(t, "BAD_ALIAS", "Alias cannot be an empty string"), s.source.endsWith(":") && i(t + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
  const o = t + n.length, l = Ks(r, o, e.strict, i);
  return s.range = [t, o, l.offset], l.comment && (s.comment = l.comment), s;
}
function tI(e, t, { offset: n, start: r, value: i, end: s }, o) {
  const l = Object.assign({ _directives: t }, e), a = new wa(void 0, l), u = {
    atKey: !1,
    atRoot: !0,
    directives: a.directives,
    options: a.options,
    schema: a.schema
  }, d = ai(r, {
    indicator: "doc-start",
    next: i ?? (s == null ? void 0 : s[0]),
    offset: n,
    onError: o,
    parentIndent: 0,
    startOnNewline: !0
  });
  d.found && (a.directives.docStart = !0, i && (i.type === "block-map" || i.type === "block-seq") && !d.hasNewline && o(d.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), a.contents = i ? $v(u, i, d, o) : ed(u, d.end, r, null, d, o);
  const c = a.contents.range[2], f = Ks(s, c, !1, o);
  return f.comment && (a.comment = f.comment), a.range = [n, c, f.offset], a;
}
function Ii(e) {
  if (typeof e == "number")
    return [e, e + 1];
  if (Array.isArray(e))
    return e.length === 2 ? e : [e[0], e[1]];
  const { offset: t, source: n } = e;
  return [t, t + (typeof n == "string" ? n.length : 1)];
}
function Pp(e) {
  var i;
  let t = "", n = !1, r = !1;
  for (let s = 0; s < e.length; ++s) {
    const o = e[s];
    switch (o[0]) {
      case "#":
        t += (t === "" ? "" : r ? `

` : `
`) + (o.substring(1) || " "), n = !0, r = !1;
        break;
      case "%":
        ((i = e[s + 1]) == null ? void 0 : i[0]) !== "#" && (s += 1), n = !1;
        break;
      default:
        n || (r = !0), n = !1;
    }
  }
  return { comment: t, afterEmptyLine: r };
}
class nI {
  constructor(t = {}) {
    this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (n, r, i, s) => {
      const o = Ii(n);
      s ? this.warnings.push(new OT(o, r, i)) : this.errors.push(new zi(o, r, i));
    }, this.directives = new ze({ version: t.version || "1.2" }), this.options = t;
  }
  decorate(t, n) {
    const { comment: r, afterEmptyLine: i } = Pp(this.prelude);
    if (r) {
      const s = t.contents;
      if (n)
        t.comment = t.comment ? `${t.comment}
${r}` : r;
      else if (i || t.directives.docStart || !s)
        t.commentBefore = r;
      else if (ke(s) && !s.flow && s.items.length > 0) {
        let o = s.items[0];
        _e(o) && (o = o.key);
        const l = o.commentBefore;
        o.commentBefore = l ? `${r}
${l}` : r;
      } else {
        const o = s.commentBefore;
        s.commentBefore = o ? `${r}
${o}` : r;
      }
    }
    if (n) {
      for (let s = 0; s < this.errors.length; ++s)
        t.errors.push(this.errors[s]);
      for (let s = 0; s < this.warnings.length; ++s)
        t.warnings.push(this.warnings[s]);
    } else
      t.errors = this.errors, t.warnings = this.warnings;
    this.prelude = [], this.errors = [], this.warnings = [];
  }
  /**
   * Current stream status information.
   *
   * Mostly useful at the end of input for an empty stream.
   */
  streamInfo() {
    return {
      comment: Pp(this.prelude).comment,
      directives: this.directives,
      errors: this.errors,
      warnings: this.warnings
    };
  }
  /**
   * Compose tokens into documents.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *compose(t, n = !1, r = -1) {
    for (const i of t)
      yield* this.next(i);
    yield* this.end(n, r);
  }
  /** Advance the composer by one CST token. */
  *next(t) {
    switch (t.type) {
      case "directive":
        this.directives.add(t.source, (n, r, i) => {
          const s = Ii(t);
          s[0] += n, this.onError(s, "BAD_DIRECTIVE", r, i);
        }), this.prelude.push(t.source), this.atDirectives = !0;
        break;
      case "document": {
        const n = tI(this.options, this.directives, t, this.onError);
        this.atDirectives && !n.directives.docStart && this.onError(t, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(n, !1), this.doc && (yield this.doc), this.doc = n, this.atDirectives = !1;
        break;
      }
      case "byte-order-mark":
      case "space":
        break;
      case "comment":
      case "newline":
        this.prelude.push(t.source);
        break;
      case "error": {
        const n = t.source ? `${t.message}: ${JSON.stringify(t.source)}` : t.message, r = new zi(Ii(t), "UNEXPECTED_TOKEN", n);
        this.atDirectives || !this.doc ? this.errors.push(r) : this.doc.errors.push(r);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          const r = "Unexpected doc-end without preceding document";
          this.errors.push(new zi(Ii(t), "UNEXPECTED_TOKEN", r));
          break;
        }
        this.doc.directives.docEnd = !0;
        const n = Ks(t.end, t.offset + t.source.length, this.doc.options.strict, this.onError);
        if (this.decorate(this.doc, !0), n.comment) {
          const r = this.doc.comment;
          this.doc.comment = r ? `${r}
${n.comment}` : n.comment;
        }
        this.doc.range[2] = n.offset;
        break;
      }
      default:
        this.errors.push(new zi(Ii(t), "UNEXPECTED_TOKEN", `Unsupported token ${t.type}`));
    }
  }
  /**
   * Call at end of input to yield any remaining document.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *end(t = !1, n = -1) {
    if (this.doc)
      this.decorate(this.doc, !0), yield this.doc, this.doc = null;
    else if (t) {
      const r = Object.assign({ _directives: this.directives }, this.options), i = new wa(void 0, r);
      this.atDirectives && this.onError(n, "MISSING_CHAR", "Missing directives-end indicator line"), i.range = [0, n, n], this.decorate(i, !1), yield i;
    }
  }
}
const Pv = "\uFEFF", Ov = "", Dv = "", _c = "";
function rI(e) {
  switch (e) {
    case Pv:
      return "byte-order-mark";
    case Ov:
      return "doc-mode";
    case Dv:
      return "flow-error-end";
    case _c:
      return "scalar";
    case "---":
      return "doc-start";
    case "...":
      return "doc-end";
    case "":
    case `
`:
    case `\r
`:
      return "newline";
    case "-":
      return "seq-item-ind";
    case "?":
      return "explicit-key-ind";
    case ":":
      return "map-value-ind";
    case "{":
      return "flow-map-start";
    case "}":
      return "flow-map-end";
    case "[":
      return "flow-seq-start";
    case "]":
      return "flow-seq-end";
    case ",":
      return "comma";
  }
  switch (e[0]) {
    case " ":
    case "	":
      return "space";
    case "#":
      return "comment";
    case "%":
      return "directive-line";
    case "*":
      return "alias";
    case "&":
      return "anchor";
    case "!":
      return "tag";
    case "'":
      return "single-quoted-scalar";
    case '"':
      return "double-quoted-scalar";
    case "|":
    case ">":
      return "block-scalar-header";
  }
  return null;
}
function yt(e) {
  switch (e) {
    case void 0:
    case " ":
    case `
`:
    case "\r":
    case "	":
      return !0;
    default:
      return !1;
  }
}
const Op = new Set("0123456789ABCDEFabcdef"), iI = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), No = new Set(",[]{}"), sI = new Set(` ,[]{}
\r	`), du = (e) => !e || sI.has(e);
class oI {
  constructor() {
    this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
  }
  /**
   * Generate YAML tokens from the `source` string. If `incomplete`,
   * a part of the last line may be left as a buffer for the next call.
   *
   * @returns A generator of lexical tokens
   */
  *lex(t, n = !1) {
    if (t) {
      if (typeof t != "string")
        throw TypeError("source is not a string");
      this.buffer = this.buffer ? this.buffer + t : t, this.lineEndPos = null;
    }
    this.atEnd = !n;
    let r = this.next ?? "stream";
    for (; r && (n || this.hasChars(1)); )
      r = yield* this.parseNext(r);
  }
  atLineEnd() {
    let t = this.pos, n = this.buffer[t];
    for (; n === " " || n === "	"; )
      n = this.buffer[++t];
    return !n || n === "#" || n === `
` ? !0 : n === "\r" ? this.buffer[t + 1] === `
` : !1;
  }
  charAt(t) {
    return this.buffer[this.pos + t];
  }
  continueScalar(t) {
    let n = this.buffer[t];
    if (this.indentNext > 0) {
      let r = 0;
      for (; n === " "; )
        n = this.buffer[++r + t];
      if (n === "\r") {
        const i = this.buffer[r + t + 1];
        if (i === `
` || !i && !this.atEnd)
          return t + r + 1;
      }
      return n === `
` || r >= this.indentNext || !n && !this.atEnd ? t + r : -1;
    }
    if (n === "-" || n === ".") {
      const r = this.buffer.substr(t, 3);
      if ((r === "---" || r === "...") && yt(this.buffer[t + 3]))
        return -1;
    }
    return t;
  }
  getLine() {
    let t = this.lineEndPos;
    return (typeof t != "number" || t !== -1 && t < this.pos) && (t = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = t), t === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[t - 1] === "\r" && (t -= 1), this.buffer.substring(this.pos, t));
  }
  hasChars(t) {
    return this.pos + t <= this.buffer.length;
  }
  setNext(t) {
    return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = t, null;
  }
  peek(t) {
    return this.buffer.substr(this.pos, t);
  }
  *parseNext(t) {
    switch (t) {
      case "stream":
        return yield* this.parseStream();
      case "line-start":
        return yield* this.parseLineStart();
      case "block-start":
        return yield* this.parseBlockStart();
      case "doc":
        return yield* this.parseDocument();
      case "flow":
        return yield* this.parseFlowCollection();
      case "quoted-scalar":
        return yield* this.parseQuotedScalar();
      case "block-scalar":
        return yield* this.parseBlockScalar();
      case "plain-scalar":
        return yield* this.parsePlainScalar();
    }
  }
  *parseStream() {
    let t = this.getLine();
    if (t === null)
      return this.setNext("stream");
    if (t[0] === Pv && (yield* this.pushCount(1), t = t.substring(1)), t[0] === "%") {
      let n = t.length, r = t.indexOf("#");
      for (; r !== -1; ) {
        const s = t[r - 1];
        if (s === " " || s === "	") {
          n = r - 1;
          break;
        } else
          r = t.indexOf("#", r + 1);
      }
      for (; ; ) {
        const s = t[n - 1];
        if (s === " " || s === "	")
          n -= 1;
        else
          break;
      }
      const i = (yield* this.pushCount(n)) + (yield* this.pushSpaces(!0));
      return yield* this.pushCount(t.length - i), this.pushNewline(), "stream";
    }
    if (this.atLineEnd()) {
      const n = yield* this.pushSpaces(!0);
      return yield* this.pushCount(t.length - n), yield* this.pushNewline(), "stream";
    }
    return yield Ov, yield* this.parseLineStart();
  }
  *parseLineStart() {
    const t = this.charAt(0);
    if (!t && !this.atEnd)
      return this.setNext("line-start");
    if (t === "-" || t === ".") {
      if (!this.atEnd && !this.hasChars(4))
        return this.setNext("line-start");
      const n = this.peek(3);
      if ((n === "---" || n === "...") && yt(this.charAt(3)))
        return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, n === "---" ? "doc" : "stream";
    }
    return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !yt(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
  }
  *parseBlockStart() {
    const [t, n] = this.peek(2);
    if (!n && !this.atEnd)
      return this.setNext("block-start");
    if ((t === "-" || t === "?" || t === ":") && yt(n)) {
      const r = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
      return this.indentNext = this.indentValue + 1, this.indentValue += r, "block-start";
    }
    return "doc";
  }
  *parseDocument() {
    yield* this.pushSpaces(!0);
    const t = this.getLine();
    if (t === null)
      return this.setNext("doc");
    let n = yield* this.pushIndicators();
    switch (t[n]) {
      case "#":
        yield* this.pushCount(t.length - n);
      case void 0:
        return yield* this.pushNewline(), yield* this.parseLineStart();
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), "doc";
      case "*":
        return yield* this.pushUntil(du), "doc";
      case '"':
      case "'":
        return yield* this.parseQuotedScalar();
      case "|":
      case ">":
        return n += yield* this.parseBlockScalarHeader(), n += yield* this.pushSpaces(!0), yield* this.pushCount(t.length - n), yield* this.pushNewline(), yield* this.parseBlockScalar();
      default:
        return yield* this.parsePlainScalar();
    }
  }
  *parseFlowCollection() {
    let t, n, r = -1;
    do
      t = yield* this.pushNewline(), t > 0 ? (n = yield* this.pushSpaces(!1), this.indentValue = r = n) : n = 0, n += yield* this.pushSpaces(!0);
    while (t + n > 0);
    const i = this.getLine();
    if (i === null)
      return this.setNext("flow");
    if ((r !== -1 && r < this.indentNext && i[0] !== "#" || r === 0 && (i.startsWith("---") || i.startsWith("...")) && yt(i[3])) && !(r === this.indentNext - 1 && this.flowLevel === 1 && (i[0] === "]" || i[0] === "}")))
      return this.flowLevel = 0, yield Dv, yield* this.parseLineStart();
    let s = 0;
    for (; i[s] === ","; )
      s += yield* this.pushCount(1), s += yield* this.pushSpaces(!0), this.flowKey = !1;
    switch (s += yield* this.pushIndicators(), i[s]) {
      case void 0:
        return "flow";
      case "#":
        return yield* this.pushCount(i.length - s), "flow";
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), this.flowKey = !0, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
      case "*":
        return yield* this.pushUntil(du), "flow";
      case '"':
      case "'":
        return this.flowKey = !0, yield* this.parseQuotedScalar();
      case ":": {
        const o = this.charAt(1);
        if (this.flowKey || yt(o) || o === ",")
          return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow";
      }
      default:
        return this.flowKey = !1, yield* this.parsePlainScalar();
    }
  }
  *parseQuotedScalar() {
    const t = this.charAt(0);
    let n = this.buffer.indexOf(t, this.pos + 1);
    if (t === "'")
      for (; n !== -1 && this.buffer[n + 1] === "'"; )
        n = this.buffer.indexOf("'", n + 2);
    else
      for (; n !== -1; ) {
        let s = 0;
        for (; this.buffer[n - 1 - s] === "\\"; )
          s += 1;
        if (s % 2 === 0)
          break;
        n = this.buffer.indexOf('"', n + 1);
      }
    const r = this.buffer.substring(0, n);
    let i = r.indexOf(`
`, this.pos);
    if (i !== -1) {
      for (; i !== -1; ) {
        const s = this.continueScalar(i + 1);
        if (s === -1)
          break;
        i = r.indexOf(`
`, s);
      }
      i !== -1 && (n = i - (r[i - 1] === "\r" ? 2 : 1));
    }
    if (n === -1) {
      if (!this.atEnd)
        return this.setNext("quoted-scalar");
      n = this.buffer.length;
    }
    return yield* this.pushToIndex(n + 1, !1), this.flowLevel ? "flow" : "doc";
  }
  *parseBlockScalarHeader() {
    this.blockScalarIndent = -1, this.blockScalarKeep = !1;
    let t = this.pos;
    for (; ; ) {
      const n = this.buffer[++t];
      if (n === "+")
        this.blockScalarKeep = !0;
      else if (n > "0" && n <= "9")
        this.blockScalarIndent = Number(n) - 1;
      else if (n !== "-")
        break;
    }
    return yield* this.pushUntil((n) => yt(n) || n === "#");
  }
  *parseBlockScalar() {
    let t = this.pos - 1, n = 0, r;
    e: for (let s = this.pos; r = this.buffer[s]; ++s)
      switch (r) {
        case " ":
          n += 1;
          break;
        case `
`:
          t = s, n = 0;
          break;
        case "\r": {
          const o = this.buffer[s + 1];
          if (!o && !this.atEnd)
            return this.setNext("block-scalar");
          if (o === `
`)
            break;
        }
        default:
          break e;
      }
    if (!r && !this.atEnd)
      return this.setNext("block-scalar");
    if (n >= this.indentNext) {
      this.blockScalarIndent === -1 ? this.indentNext = n : this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
      do {
        const s = this.continueScalar(t + 1);
        if (s === -1)
          break;
        t = this.buffer.indexOf(`
`, s);
      } while (t !== -1);
      if (t === -1) {
        if (!this.atEnd)
          return this.setNext("block-scalar");
        t = this.buffer.length;
      }
    }
    let i = t + 1;
    for (r = this.buffer[i]; r === " "; )
      r = this.buffer[++i];
    if (r === "	") {
      for (; r === "	" || r === " " || r === "\r" || r === `
`; )
        r = this.buffer[++i];
      t = i - 1;
    } else if (!this.blockScalarKeep)
      do {
        let s = t - 1, o = this.buffer[s];
        o === "\r" && (o = this.buffer[--s]);
        const l = s;
        for (; o === " "; )
          o = this.buffer[--s];
        if (o === `
` && s >= this.pos && s + 1 + n > l)
          t = s;
        else
          break;
      } while (!0);
    return yield _c, yield* this.pushToIndex(t + 1, !0), yield* this.parseLineStart();
  }
  *parsePlainScalar() {
    const t = this.flowLevel > 0;
    let n = this.pos - 1, r = this.pos - 1, i;
    for (; i = this.buffer[++r]; )
      if (i === ":") {
        const s = this.buffer[r + 1];
        if (yt(s) || t && No.has(s))
          break;
        n = r;
      } else if (yt(i)) {
        let s = this.buffer[r + 1];
        if (i === "\r" && (s === `
` ? (r += 1, i = `
`, s = this.buffer[r + 1]) : n = r), s === "#" || t && No.has(s))
          break;
        if (i === `
`) {
          const o = this.continueScalar(r + 1);
          if (o === -1)
            break;
          r = Math.max(r, o - 2);
        }
      } else {
        if (t && No.has(i))
          break;
        n = r;
      }
    return !i && !this.atEnd ? this.setNext("plain-scalar") : (yield _c, yield* this.pushToIndex(n + 1, !0), t ? "flow" : "doc");
  }
  *pushCount(t) {
    return t > 0 ? (yield this.buffer.substr(this.pos, t), this.pos += t, t) : 0;
  }
  *pushToIndex(t, n) {
    const r = this.buffer.slice(this.pos, t);
    return r ? (yield r, this.pos += r.length, r.length) : (n && (yield ""), 0);
  }
  *pushIndicators() {
    let t = 0;
    e: for (; ; ) {
      switch (this.charAt(0)) {
        case "!":
          t += yield* this.pushTag(), t += yield* this.pushSpaces(!0);
          continue e;
        case "&":
          t += yield* this.pushUntil(du), t += yield* this.pushSpaces(!0);
          continue e;
        case "-":
        case "?":
        case ":": {
          const n = this.flowLevel > 0, r = this.charAt(1);
          if (yt(r) || n && No.has(r)) {
            n ? this.flowKey && (this.flowKey = !1) : this.indentNext = this.indentValue + 1, t += yield* this.pushCount(1), t += yield* this.pushSpaces(!0);
            continue e;
          }
        }
      }
      break e;
    }
    return t;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let t = this.pos + 2, n = this.buffer[t];
      for (; !yt(n) && n !== ">"; )
        n = this.buffer[++t];
      return yield* this.pushToIndex(n === ">" ? t + 1 : t, !1);
    } else {
      let t = this.pos + 1, n = this.buffer[t];
      for (; n; )
        if (iI.has(n))
          n = this.buffer[++t];
        else if (n === "%" && Op.has(this.buffer[t + 1]) && Op.has(this.buffer[t + 2]))
          n = this.buffer[t += 3];
        else
          break;
      return yield* this.pushToIndex(t, !1);
    }
  }
  *pushNewline() {
    const t = this.buffer[this.pos];
    return t === `
` ? yield* this.pushCount(1) : t === "\r" && this.charAt(1) === `
` ? yield* this.pushCount(2) : 0;
  }
  *pushSpaces(t) {
    let n = this.pos - 1, r;
    do
      r = this.buffer[++n];
    while (r === " " || t && r === "	");
    const i = n - this.pos;
    return i > 0 && (yield this.buffer.substr(this.pos, i), this.pos = n), i;
  }
  *pushUntil(t) {
    let n = this.pos, r = this.buffer[n];
    for (; !t(r); )
      r = this.buffer[++n];
    return yield* this.pushToIndex(n, !1);
  }
}
class lI {
  constructor() {
    this.lineStarts = [], this.addNewLine = (t) => this.lineStarts.push(t), this.linePos = (t) => {
      let n = 0, r = this.lineStarts.length;
      for (; n < r; ) {
        const s = n + r >> 1;
        this.lineStarts[s] < t ? n = s + 1 : r = s;
      }
      if (this.lineStarts[n] === t)
        return { line: n + 1, col: 1 };
      if (n === 0)
        return { line: 0, col: t };
      const i = this.lineStarts[n - 1];
      return { line: n, col: t - i + 1 };
    };
  }
}
function hn(e, t) {
  for (let n = 0; n < e.length; ++n)
    if (e[n].type === t)
      return !0;
  return !1;
}
function Dp(e) {
  for (let t = 0; t < e.length; ++t)
    switch (e[t].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return t;
    }
  return -1;
}
function jv(e) {
  switch (e == null ? void 0 : e.type) {
    case "alias":
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "flow-collection":
      return !0;
    default:
      return !1;
  }
}
function Co(e) {
  switch (e.type) {
    case "document":
      return e.start;
    case "block-map": {
      const t = e.items[e.items.length - 1];
      return t.sep ?? t.start;
    }
    case "block-seq":
      return e.items[e.items.length - 1].start;
    default:
      return [];
  }
}
function vr(e) {
  var n;
  if (e.length === 0)
    return [];
  let t = e.length;
  e: for (; --t >= 0; )
    switch (e[t].type) {
      case "doc-start":
      case "explicit-key-ind":
      case "map-value-ind":
      case "seq-item-ind":
      case "newline":
        break e;
    }
  for (; ((n = e[++t]) == null ? void 0 : n.type) === "space"; )
    ;
  return e.splice(t, e.length);
}
function Ll(e, t) {
  if (t.length < 1e5)
    Array.prototype.push.apply(e, t);
  else
    for (let n = 0; n < t.length; ++n)
      e.push(t[n]);
}
function jp(e) {
  if (e.start.type === "flow-seq-start")
    for (const t of e.items)
      t.sep && !t.value && !hn(t.start, "explicit-key-ind") && !hn(t.sep, "map-value-ind") && (t.key && (t.value = t.key), delete t.key, jv(t.value) ? t.value.end ? Ll(t.value.end, t.sep) : t.value.end = t.sep : Ll(t.start, t.sep), delete t.sep);
}
class aI {
  /**
   * @param onNewLine - If defined, called separately with the start position of
   *   each new line (in `parse()`, including the start of input).
   */
  constructor(t) {
    this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new oI(), this.onNewLine = t;
  }
  /**
   * Parse `source` as a YAML stream.
   * If `incomplete`, a part of the last line may be left as a buffer for the next call.
   *
   * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
   *
   * @returns A generator of tokens representing each directive, document, and other structure.
   */
  *parse(t, n = !1) {
    this.onNewLine && this.offset === 0 && this.onNewLine(0);
    for (const r of this.lexer.lex(t, n))
      yield* this.next(r);
    n || (yield* this.end());
  }
  /**
   * Advance the parser by the `source` of one lexical token.
   */
  *next(t) {
    if (this.source = t, this.atScalar) {
      this.atScalar = !1, yield* this.step(), this.offset += t.length;
      return;
    }
    const n = rI(t);
    if (n)
      if (n === "scalar")
        this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
      else {
        switch (this.type = n, yield* this.step(), n) {
          case "newline":
            this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + t.length);
            break;
          case "space":
            this.atNewLine && t[0] === " " && (this.indent += t.length);
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            this.atNewLine && (this.indent += t.length);
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = !1;
        }
        this.offset += t.length;
      }
    else {
      const r = `Not a YAML token: ${t}`;
      yield* this.pop({ type: "error", offset: this.offset, message: r, source: t }), this.offset += t.length;
    }
  }
  /** Call at end of input to push out any remaining constructions */
  *end() {
    for (; this.stack.length > 0; )
      yield* this.pop();
  }
  get sourceToken() {
    return {
      type: this.type,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  *step() {
    const t = this.peek(1);
    if (this.type === "doc-end" && (t == null ? void 0 : t.type) !== "doc-end") {
      for (; this.stack.length > 0; )
        yield* this.pop();
      this.stack.push({
        type: "doc-end",
        offset: this.offset,
        source: this.source
      });
      return;
    }
    if (!t)
      return yield* this.stream();
    switch (t.type) {
      case "document":
        return yield* this.document(t);
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return yield* this.scalar(t);
      case "block-scalar":
        return yield* this.blockScalar(t);
      case "block-map":
        return yield* this.blockMap(t);
      case "block-seq":
        return yield* this.blockSequence(t);
      case "flow-collection":
        return yield* this.flowCollection(t);
      case "doc-end":
        return yield* this.documentEnd(t);
    }
    yield* this.pop();
  }
  peek(t) {
    return this.stack[this.stack.length - t];
  }
  *pop(t) {
    const n = t ?? this.stack.pop();
    if (!n)
      yield { type: "error", offset: this.offset, source: "", message: "Tried to pop an empty stack" };
    else if (this.stack.length === 0)
      yield n;
    else {
      const r = this.peek(1);
      switch (n.type === "block-scalar" ? n.indent = "indent" in r ? r.indent : 0 : n.type === "flow-collection" && r.type === "document" && (n.indent = 0), n.type === "flow-collection" && jp(n), r.type) {
        case "document":
          r.value = n;
          break;
        case "block-scalar":
          r.props.push(n);
          break;
        case "block-map": {
          const i = r.items[r.items.length - 1];
          if (i.value) {
            r.items.push({ start: [], key: n, sep: [] }), this.onKeyLine = !0;
            return;
          } else if (i.sep)
            i.value = n;
          else {
            Object.assign(i, { key: n, sep: [] }), this.onKeyLine = !i.explicitKey;
            return;
          }
          break;
        }
        case "block-seq": {
          const i = r.items[r.items.length - 1];
          i.value ? r.items.push({ start: [], value: n }) : i.value = n;
          break;
        }
        case "flow-collection": {
          const i = r.items[r.items.length - 1];
          !i || i.value ? r.items.push({ start: [], key: n, sep: [] }) : i.sep ? i.value = n : Object.assign(i, { key: n, sep: [] });
          return;
        }
        default:
          yield* this.pop(), yield* this.pop(n);
      }
      if ((r.type === "document" || r.type === "block-map" || r.type === "block-seq") && (n.type === "block-map" || n.type === "block-seq")) {
        const i = n.items[n.items.length - 1];
        i && !i.sep && !i.value && i.start.length > 0 && Dp(i.start) === -1 && (n.indent === 0 || i.start.every((s) => s.type !== "comment" || s.indent < n.indent)) && (r.type === "document" ? r.end = i.start : r.items.push({ start: i.start }), n.items.splice(-1, 1));
      }
    }
  }
  *stream() {
    switch (this.type) {
      case "directive-line":
        yield { type: "directive", offset: this.offset, source: this.source };
        return;
      case "byte-order-mark":
      case "space":
      case "comment":
      case "newline":
        yield this.sourceToken;
        return;
      case "doc-mode":
      case "doc-start": {
        const t = {
          type: "document",
          offset: this.offset,
          start: []
        };
        this.type === "doc-start" && t.start.push(this.sourceToken), this.stack.push(t);
        return;
      }
    }
    yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML stream`,
      source: this.source
    };
  }
  *document(t) {
    if (t.value)
      return yield* this.lineEnd(t);
    switch (this.type) {
      case "doc-start": {
        Dp(t.start) !== -1 ? (yield* this.pop(), yield* this.step()) : t.start.push(this.sourceToken);
        return;
      }
      case "anchor":
      case "tag":
      case "space":
      case "comment":
      case "newline":
        t.start.push(this.sourceToken);
        return;
    }
    const n = this.startBlockValue(t);
    n ? this.stack.push(n) : yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML document`,
      source: this.source
    };
  }
  *scalar(t) {
    if (this.type === "map-value-ind") {
      const n = Co(this.peek(2)), r = vr(n);
      let i;
      t.end ? (i = t.end, i.push(this.sourceToken), delete t.end) : i = [this.sourceToken];
      const s = {
        type: "block-map",
        offset: t.offset,
        indent: t.indent,
        items: [{ start: r, key: t, sep: i }]
      };
      this.onKeyLine = !0, this.stack[this.stack.length - 1] = s;
    } else
      yield* this.lineEnd(t);
  }
  *blockScalar(t) {
    switch (this.type) {
      case "space":
      case "comment":
      case "newline":
        t.props.push(this.sourceToken);
        return;
      case "scalar":
        if (t.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
          let n = this.source.indexOf(`
`) + 1;
          for (; n !== 0; )
            this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
        }
        yield* this.pop();
        break;
      default:
        yield* this.pop(), yield* this.step();
    }
  }
  *blockMap(t) {
    var r;
    const n = t.items[t.items.length - 1];
    switch (this.type) {
      case "newline":
        if (this.onKeyLine = !1, n.value) {
          const i = "end" in n.value ? n.value.end : void 0, s = Array.isArray(i) ? i[i.length - 1] : void 0;
          (s == null ? void 0 : s.type) === "comment" ? i == null || i.push(this.sourceToken) : t.items.push({ start: [this.sourceToken] });
        } else n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          t.items.push({ start: [this.sourceToken] });
        else if (n.sep)
          n.sep.push(this.sourceToken);
        else {
          if (this.atIndentedComment(n.start, t.indent)) {
            const i = t.items[t.items.length - 2], s = (r = i == null ? void 0 : i.value) == null ? void 0 : r.end;
            if (Array.isArray(s)) {
              Ll(s, n.start), s.push(this.sourceToken), t.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= t.indent) {
      const i = !this.onKeyLine && this.indent === t.indent, s = i && (n.sep || n.explicitKey) && this.type !== "seq-item-ind";
      let o = [];
      if (s && n.sep && !n.value) {
        const l = [];
        for (let a = 0; a < n.sep.length; ++a) {
          const u = n.sep[a];
          switch (u.type) {
            case "newline":
              l.push(a);
              break;
            case "space":
              break;
            case "comment":
              u.indent > t.indent && (l.length = 0);
              break;
            default:
              l.length = 0;
          }
        }
        l.length >= 2 && (o = n.sep.splice(l[1]));
      }
      switch (this.type) {
        case "anchor":
        case "tag":
          s || n.value ? (o.push(this.sourceToken), t.items.push({ start: o }), this.onKeyLine = !0) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "explicit-key-ind":
          !n.sep && !n.explicitKey ? (n.start.push(this.sourceToken), n.explicitKey = !0) : s || n.value ? (o.push(this.sourceToken), t.items.push({ start: o, explicitKey: !0 })) : this.stack.push({
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start: [this.sourceToken], explicitKey: !0 }]
          }), this.onKeyLine = !0;
          return;
        case "map-value-ind":
          if (n.explicitKey)
            if (n.sep)
              if (n.value)
                t.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if (hn(n.sep, "map-value-ind"))
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: o, key: null, sep: [this.sourceToken] }]
                });
              else if (jv(n.key) && !hn(n.sep, "newline")) {
                const l = vr(n.start), a = n.key, u = n.sep;
                u.push(this.sourceToken), delete n.key, delete n.sep, this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: l, key: a, sep: u }]
                });
              } else o.length > 0 ? n.sep = n.sep.concat(o, this.sourceToken) : n.sep.push(this.sourceToken);
            else if (hn(n.start, "newline"))
              Object.assign(n, { key: null, sep: [this.sourceToken] });
            else {
              const l = vr(n.start);
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: l, key: null, sep: [this.sourceToken] }]
              });
            }
          else
            n.sep ? n.value || s ? t.items.push({ start: o, key: null, sep: [this.sourceToken] }) : hn(n.sep, "map-value-ind") ? this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start: [], key: null, sep: [this.sourceToken] }]
            }) : n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          this.onKeyLine = !0;
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const l = this.flowScalar(this.type);
          s || n.value ? (t.items.push({ start: o, key: l, sep: [] }), this.onKeyLine = !0) : n.sep ? this.stack.push(l) : (Object.assign(n, { key: l, sep: [] }), this.onKeyLine = !0);
          return;
        }
        default: {
          const l = this.startBlockValue(t);
          if (l) {
            if (l.type === "block-seq") {
              if (!n.explicitKey && n.sep && !hn(n.sep, "newline")) {
                yield* this.pop({
                  type: "error",
                  offset: this.offset,
                  message: "Unexpected block-seq-ind on same line with key",
                  source: this.source
                });
                return;
              }
            } else i && t.items.push({ start: o });
            this.stack.push(l);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(t) {
    var r;
    const n = t.items[t.items.length - 1];
    switch (this.type) {
      case "newline":
        if (n.value) {
          const i = "end" in n.value ? n.value.end : void 0, s = Array.isArray(i) ? i[i.length - 1] : void 0;
          (s == null ? void 0 : s.type) === "comment" ? i == null || i.push(this.sourceToken) : t.items.push({ start: [this.sourceToken] });
        } else
          n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          t.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(n.start, t.indent)) {
            const i = t.items[t.items.length - 2], s = (r = i == null ? void 0 : i.value) == null ? void 0 : r.end;
            if (Array.isArray(s)) {
              Ll(s, n.start), s.push(this.sourceToken), t.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
      case "anchor":
      case "tag":
        if (n.value || this.indent <= t.indent)
          break;
        n.start.push(this.sourceToken);
        return;
      case "seq-item-ind":
        if (this.indent !== t.indent)
          break;
        n.value || hn(n.start, "seq-item-ind") ? t.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
        return;
    }
    if (this.indent > t.indent) {
      const i = this.startBlockValue(t);
      if (i) {
        this.stack.push(i);
        return;
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *flowCollection(t) {
    const n = t.items[t.items.length - 1];
    if (this.type === "flow-error-end") {
      let r;
      do
        yield* this.pop(), r = this.peek(1);
      while ((r == null ? void 0 : r.type) === "flow-collection");
    } else if (t.end.length === 0) {
      switch (this.type) {
        case "comma":
        case "explicit-key-ind":
          !n || n.sep ? t.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
          return;
        case "map-value-ind":
          !n || n.value ? t.items.push({ start: [], key: null, sep: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          return;
        case "space":
        case "comment":
        case "newline":
        case "anchor":
        case "tag":
          !n || n.value ? t.items.push({ start: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const i = this.flowScalar(this.type);
          !n || n.value ? t.items.push({ start: [], key: i, sep: [] }) : n.sep ? this.stack.push(i) : Object.assign(n, { key: i, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          t.end.push(this.sourceToken);
          return;
      }
      const r = this.startBlockValue(t);
      r ? this.stack.push(r) : (yield* this.pop(), yield* this.step());
    } else {
      const r = this.peek(2);
      if (r.type === "block-map" && (this.type === "map-value-ind" && r.indent === t.indent || this.type === "newline" && !r.items[r.items.length - 1].sep))
        yield* this.pop(), yield* this.step();
      else if (this.type === "map-value-ind" && r.type !== "flow-collection") {
        const i = Co(r), s = vr(i);
        jp(t);
        const o = t.end.splice(1, t.end.length);
        o.push(this.sourceToken);
        const l = {
          type: "block-map",
          offset: t.offset,
          indent: t.indent,
          items: [{ start: s, key: t, sep: o }]
        };
        this.onKeyLine = !0, this.stack[this.stack.length - 1] = l;
      } else
        yield* this.lineEnd(t);
    }
  }
  flowScalar(t) {
    if (this.onNewLine) {
      let n = this.source.indexOf(`
`) + 1;
      for (; n !== 0; )
        this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
    }
    return {
      type: t,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  startBlockValue(t) {
    switch (this.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return this.flowScalar(this.type);
      case "block-scalar-header":
        return {
          type: "block-scalar",
          offset: this.offset,
          indent: this.indent,
          props: [this.sourceToken],
          source: ""
        };
      case "flow-map-start":
      case "flow-seq-start":
        return {
          type: "flow-collection",
          offset: this.offset,
          indent: this.indent,
          start: this.sourceToken,
          items: [],
          end: []
        };
      case "seq-item-ind":
        return {
          type: "block-seq",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: [this.sourceToken] }]
        };
      case "explicit-key-ind": {
        this.onKeyLine = !0;
        const n = Co(t), r = vr(n);
        return r.push(this.sourceToken), {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: r, explicitKey: !0 }]
        };
      }
      case "map-value-ind": {
        this.onKeyLine = !0;
        const n = Co(t), r = vr(n);
        return {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: r, key: null, sep: [this.sourceToken] }]
        };
      }
    }
    return null;
  }
  atIndentedComment(t, n) {
    return this.type !== "comment" || this.indent <= n ? !1 : t.every((r) => r.type === "newline" || r.type === "space");
  }
  *documentEnd(t) {
    this.type !== "doc-mode" && (t.end ? t.end.push(this.sourceToken) : t.end = [this.sourceToken], this.type === "newline" && (yield* this.pop()));
  }
  *lineEnd(t) {
    switch (this.type) {
      case "comma":
      case "doc-start":
      case "doc-end":
      case "flow-seq-end":
      case "flow-map-end":
      case "map-value-ind":
        yield* this.pop(), yield* this.step();
        break;
      case "newline":
        this.onKeyLine = !1;
      case "space":
      case "comment":
      default:
        t.end ? t.end.push(this.sourceToken) : t.end = [this.sourceToken], this.type === "newline" && (yield* this.pop());
    }
  }
}
function uI(e) {
  const t = e.prettyErrors !== !1;
  return { lineCounter: e.lineCounter || t && new lI() || null, prettyErrors: t };
}
function cI(e, t = {}) {
  const { lineCounter: n, prettyErrors: r } = uI(t), i = new aI(n == null ? void 0 : n.addNewLine), s = new nI(t);
  let o = null;
  for (const l of s.compose(i.parse(e), !0, e.length))
    if (!o)
      o = l;
    else if (o.options.logLevel !== "silent") {
      o.errors.push(new zi(l.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
  return r && n && (o.errors.forEach(Lp(e, n)), o.warnings.forEach(Lp(e, n))), o;
}
function fI(e, t, n) {
  let r;
  const i = cI(e, n);
  if (!i)
    return null;
  if (i.warnings.forEach((s) => uv(i.options.logLevel, s)), i.errors.length > 0) {
    if (i.options.logLevel !== "silent")
      throw i.errors[0];
    i.errors = [];
  }
  return i.toJS(Object.assign({ reviver: r }, n));
}
const dI = /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}/;
function hI(e) {
  const t = (e == null ? "" : String(e)).trim();
  return !t || t.toLowerCase() === "manual" ? "manual" : t.split(/\s+/).length === 5 ? "schedule" : dI.test(t) ? "once" : t.includes(" ") ? "manual" : "event";
}
function Rv(e) {
  return String(e || "").replace(/-/g, " ").replace(/\b\w/g, (t) => t.toUpperCase());
}
function pI(e) {
  const t = (e || "").trim();
  if (!t) return null;
  const n = t.match(/^(?:[a-z]+:\/\/)?([^/]+)/i);
  return n ? n[1].toLowerCase() : null;
}
function gI(e) {
  const t = e || {}, n = t.id || "", r = t.url || t.repository || null;
  return {
    id: n,
    name: t.name || n,
    description: t.description || "",
    url: t.url || null,
    repository: t.repository || null,
    connector: t.connector || null,
    domain: pI(r)
  };
}
function mI(e) {
  const t = e || {}, n = t.id || "";
  let r;
  return Array.isArray(t.trigger) ? r = t.trigger.map(String) : t.trigger != null ? r = [String(t.trigger)] : r = ["manual"], r.length === 0 && (r = ["manual"]), {
    id: n,
    name: t.name || Rv(n),
    description: (t.description || "").trim(),
    triggers: r,
    typedTriggers: r.map((i) => ({ type: hI(i), value: i })),
    observe: Array.isArray(t.observe) ? t.observe.slice() : [],
    act: Array.isArray(t.act) ? t.act.slice() : [],
    instructions: (t.instructions || "").trim(),
    model: t.model || null,
    tools: Array.isArray(t.tools) ? t.tools.slice() : []
  };
}
function yI(e) {
  const t = e || {}, n = t.id || "";
  return {
    id: n,
    name: t.name || (n ? Rv(n) : "Loop Architecture"),
    description: (t.description || "").trim(),
    systems: (t.systems || []).map(gI),
    loops: (t.loops || []).map(mI)
  };
}
function Yo(e) {
  const t = fI(e);
  if (t == null || typeof t != "object" || Array.isArray(t))
    throw new Error("The top-level document must be a mapping with id, systems and loops.");
  return yI(t);
}
const vI = "https://www.google.com/s2/favicons?sz=64&domain=";
function wI(e) {
  return e ? vI + e : null;
}
const xI = 16, zv = "\0", Bv = (e, t) => e + zv + t;
function SI(e) {
  const t = [];
  for (const r of e) {
    let i = [r, 1];
    for (; t.length && t[t.length - 1][0] > i[0]; ) {
      const [s, o] = t.pop(), l = o + i[1];
      i = [(s * o + i[0] * i[1]) / l, l];
    }
    t.push(i);
  }
  const n = [];
  for (const [r, i] of t) for (let s = 0; s < Math.round(i); s++) n.push(r);
  return n;
}
function kI(e, t, n = 40) {
  const r = Math.max(1, ...e.map((s) => s.length)), i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const o = (r - s.length) / 2;
    s.forEach((l, a) => i.set(l, o + a));
  }
  for (let s = 0; s < n; s++)
    for (const o of e) {
      if (!o.length) continue;
      const l = o.map((u, d) => {
        const c = t.get(u) || [];
        return (c.length ? c.reduce((p, y) => p + i.get(y), 0) / c.length : i.get(u)) - d;
      }), a = SI(l);
      o.forEach((u, d) => i.set(u, a[d] + d));
    }
  return i;
}
function EI(e, t) {
  const s = new Map(e.map((l) => [l, 0])), o = /* @__PURE__ */ new Set();
  for (const l of e) {
    if (s.get(l) !== 0) continue;
    s.set(l, 1);
    const a = [{ u: l, i: 0 }];
    for (; a.length; ) {
      const u = a[a.length - 1], d = t.get(u.u);
      let c = !1;
      for (; u.i < d.length; ) {
        const f = d[u.i++];
        if (s.get(f) !== 1 && (o.add(Bv(u.u, f)), s.get(f) === 0)) {
          s.set(f, 1), a.push({ u: f, i: 0 }), c = !0;
          break;
        }
      }
      c || (s.set(u.u, 2), a.pop());
    }
  }
  return o;
}
function _I(e, t) {
  const n = new Map(e.map((o) => [o, []])), r = new Map(e.map((o) => [o, 0]));
  for (const o of t) {
    const l = o.indexOf(zv), a = o.slice(0, l), u = o.slice(l + 1);
    n.get(a).push(u), r.set(u, r.get(u) + 1);
  }
  const i = new Map(e.map((o) => [o, 0])), s = e.filter((o) => r.get(o) === 0).sort();
  for (; s.length; ) {
    const o = s.shift();
    for (const l of [...n.get(o)].sort())
      i.get(o) + 1 > i.get(l) && i.set(l, i.get(o) + 1), r.set(l, r.get(l) - 1), r.get(l) === 0 && s.push(l);
  }
  return i;
}
function fr(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n, r) => n.forEach((i) => t.set(i, r))), t;
}
function ui(e, t, n) {
  let r = 0;
  for (let i = 0; i < e.length - 1; i++) {
    const s = new Map(e[i].map((a, u) => [a, u])), o = new Map(e[i + 1].map((a, u) => [a, u])), l = [];
    for (const [a, u] of t) {
      const d = n.get(a) === i ? a : u, c = d === a ? u : a;
      s.has(d) && o.has(c) && l.push([s.get(d), o.get(c)]);
    }
    for (let a = 0; a < l.length; a++)
      for (let u = a + 1; u < l.length; u++) {
        const [d, c] = l[a], [f, p] = l[u];
        (d < f && c > p || d > f && c < p) && r++;
      }
  }
  return r;
}
function NI(e, t) {
  const n = e.map((s) => s.slice());
  let r = ui(n, t, fr(n)), i = !0;
  for (; i && r > 0; ) {
    i = !1;
    for (let s = 0; s < n.length; s++)
      for (let o = 0; o < n[s].length - 1; o++) {
        [n[s][o], n[s][o + 1]] = [n[s][o + 1], n[s][o]];
        const l = ui(n, t, fr(n));
        l < r ? (r = l, i = !0) : [n[s][o], n[s][o + 1]] = [n[s][o + 1], n[s][o]];
      }
  }
  return n;
}
function CI(e, t) {
  const n = e.map((i) => i.slice());
  let r = !0;
  for (; r; ) {
    r = !1;
    let i = ui(n, t, fr(n));
    if (i === 0) break;
    for (let s = 0; s < n.length; s++)
      for (const o of n[s].slice()) {
        n[s].splice(n[s].indexOf(o), 1);
        let l = 0, a = null;
        for (let u = 0; u <= n[s].length; u++) {
          n[s].splice(u, 0, o);
          const d = ui(n, t, fr(n));
          (a === null || d < a) && (a = d, l = u), n[s].splice(u, 1);
        }
        n[s].splice(l, 0, o), a !== null && a < i && (i = a, r = !0);
      }
  }
  return n;
}
function bI(e, t, n) {
  let r = e.map((l) => l.slice());
  const i = r.length;
  let s = r.map((l) => l.slice()), o = ui(s, t, fr(s));
  for (let l = 0; l < xI; l++) {
    const a = [];
    if (l % 2 === 0) for (let c = 1; c < i; c++) a.push(c);
    else for (let c = i - 2; c >= 0; c--) a.push(c);
    const u = /* @__PURE__ */ new Map();
    r.forEach((c) => c.forEach((f, p) => u.set(f, p)));
    for (const c of a) {
      const f = (p) => {
        const y = n.get(p) || [];
        return y.length ? y.reduce((v, w) => v + u.get(w), 0) / y.length : u.get(p);
      };
      r[c] = r[c].map((p, y) => [p, y]).sort((p, y) => f(p[0]) - f(y[0]) || p[1] - y[1]).map((p) => p[0]), r[c].forEach((p, y) => u.set(p, y));
    }
    r = NI(r, t), r = CI(r, t);
    const d = ui(r, t, fr(r));
    if (d < o && (o = d, s = r.map((c) => c.slice())), o === 0) break;
  }
  return { columns: s, crossings: o };
}
function MI(e, t, n, r) {
  const i = [...e, ...t], s = new Set(e), o = new Map(i.map((C) => [C, []])), l = [];
  for (const C of t) {
    for (const P of n[C] || [])
      s.has(P) && (o.get(P).push(C), l.push([P, C]));
    for (const P of r[C] || [])
      s.has(P) && (o.get(C).push(P), l.push([C, P]));
  }
  const a = EI(i, o), u = _I(i, a), d = (i.length ? Math.max(...i.map((C) => u.get(C))) : 0) + 1, c = Array.from({ length: d }, () => []);
  for (const C of i.slice().sort()) c[u.get(C)].push(C);
  const f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), y = [];
  let v = 0;
  for (const [C, P] of l) {
    const B = u.get(C), N = u.get(P), A = [C];
    if (B !== N) {
      const b = N > B ? 1 : -1;
      for (let D = B + b; D !== N; D += b) {
        const T = `__d${v++}`;
        p.add(T), c[D].push(T), A.push(T);
      }
    }
    A.push(P), f.set(Bv(C, P), A);
    for (let b = 0; b < A.length - 1; b++) y.push([A[b], A[b + 1]]);
  }
  let w = c;
  const h = w.flat(), m = new Map(h.map((C) => [C, []]));
  for (const [C, P] of y)
    m.get(C).push(P), m.get(P).push(C);
  const g = new Map(h.map((C) => [C, m.get(C).length])), x = (C) => w.map((P) => P.slice().sort((B, N) => C(B) - C(N) || (B < N ? -1 : B > N ? 1 : 0))), S = [
    w.map((C) => C.slice()),
    x((C) => -g.get(C)),
    x((C) => g.get(C)),
    w.map((C) => C.slice().reverse())
  ];
  let k = null, E = null;
  for (const C of S) {
    const { columns: P, crossings: B } = bI(C, y, m);
    if ((E === null || B < E) && (k = P, E = B), E === 0) break;
  }
  w = k;
  let _ = kI(w, m);
  if (_.size) {
    const C = Math.min(..._.values());
    for (const [P, B] of _) _.set(P, B - C);
  }
  const M = fr(w), $ = /* @__PURE__ */ new Map();
  return w.forEach((C) => C.forEach((P, B) => $.set(P, B))), { columns: w, colOf: M, rowOf: $, yOf: _, crossings: E, edgePaths: f, dummies: p };
}
const TI = "#7c3aed", II = "#9ca3af", AI = { schedule: "🕐", event: "⚡", once: "📅", manual: "👆" }, Rp = 320, zp = 120, Bp = 40, LI = 220, $I = 76;
function Xo(e, { favicons: t = !0 } = {}) {
  const { systems: n, loops: r } = e, i = new Map(n.map((h) => [h.id, h])), s = n.map((h) => h.id), o = r.map((h) => h.id), l = (h) => i.get(h) ? i.get(h).name : h, a = {}, u = {};
  for (const h of r)
    a[h.id] = h.observe, u[h.id] = h.act;
  const d = MI(s, o, a, u), c = (h) => ({ x: Bp + d.colOf.get(h) * Rp, y: d.yOf.get(h) * zp }), f = new Map(s.map((h) => [h, []])), p = new Map(s.map((h) => [h, []]));
  for (const h of r) {
    for (const m of h.observe) f.has(m) && f.get(m).push(h.name);
    for (const m of h.act) p.has(m) && p.get(m).push(h.name);
  }
  const y = [];
  for (const h of n)
    y.push({
      id: h.id,
      type: "system",
      position: c(h.id),
      data: {
        label: h.name,
        id: h.id,
        description: h.description,
        url: h.url,
        repository: h.repository,
        connector: h.connector,
        favicon: t ? wI(h.domain) : null,
        readBy: f.get(h.id) || [],
        writtenBy: p.get(h.id) || []
      }
    });
  for (const h of r) {
    const m = [];
    for (const { type: g } of h.typedTriggers) m.includes(g) || m.push(g);
    y.push({
      id: h.id,
      type: "loop",
      position: c(h.id),
      data: {
        label: h.name,
        id: h.id,
        description: h.description,
        emoji: m.map((g) => AI[g] || "").join(""),
        triggers: h.triggers,
        instructions: h.instructions,
        model: h.model,
        tools: h.tools,
        uses: h.observe.map(l),
        writesBack: h.act.map(l)
      }
    });
  }
  for (const h of d.dummies)
    y.push({
      id: h,
      type: "dummy",
      position: { x: Bp + d.colOf.get(h) * Rp + LI / 2, y: d.yOf.get(h) * zp + $I / 2 },
      data: {}
    });
  const v = (h, m) => d.colOf.get(h) <= d.colOf.get(m) ? ["rs", "lt"] : ["ls", "rt"], w = [];
  for (const [h, m] of d.edgePaths) {
    const g = h.indexOf(" "), x = h.slice(0, g), S = h.slice(g + 1);
    for (let k = 0; k < m.length - 1; k++) {
      const E = m[k], _ = m[k + 1], [M, $] = v(E, _);
      w.push({
        id: `${x}->${S}:${k}`,
        source: E,
        target: _,
        sourceHandle: M,
        targetHandle: $,
        end: _ === m[m.length - 1]
      });
    }
  }
  return { name: e.name, id: e.id, accent: TI, edge: II, nodes: y, edges: w };
}
const PI = {
  minimap: { enabled: !1 },
  fontSize: 13,
  lineNumbers: "on",
  scrollBeyondLastLine: !1,
  tabSize: 2,
  automaticLayout: !0,
  padding: { top: 12, bottom: 12 },
  wordWrap: "on",
  renderLineHighlight: "none",
  overviewRulerLanes: 0
};
function OI({ initialYaml: e = "", examples: t = [] }) {
  var y;
  const [n, r] = O.useState(e), [i, s] = O.useState(null), [o, l] = O.useState(null), [a, u] = O.useState(0), [d, c] = O.useState(((y = t[0]) == null ? void 0 : y.label) || null), f = O.useRef(!1);
  O.useEffect(() => {
    f.current || (f.current = !0, !e && t[0] && fetch(t[0].url).then((v) => v.text()).then((v) => r(v)).catch(() => l("Could not load the example (needs network).")));
  }, [e, t]), O.useEffect(() => {
    const v = setTimeout(() => {
      if (!n.trim()) {
        s(null), l(null);
        return;
      }
      try {
        const w = Yo(n);
        s(Xo(w, { favicons: !0 })), l(null), u((h) => h + 1);
      } catch (w) {
        l(w && w.message ? w.message : String(w));
      }
    }, 250);
    return () => clearTimeout(v);
  }, [n]);
  const p = (v) => {
    c(v.label), fetch(v.url).then((w) => w.text()).then((w) => r(w)).catch(() => l("Could not load the example (needs network)."));
  };
  return /* @__PURE__ */ L.jsxs("div", { className: "looparch-editor", children: [
    t.length > 0 ? /* @__PURE__ */ L.jsx("div", { className: "flow-tabs", role: "tablist", children: t.map((v) => /* @__PURE__ */ L.jsxs(
      "button",
      {
        className: "flow-tab" + (d === v.label ? " active" : ""),
        onClick: () => p(v),
        children: [
          /* @__PURE__ */ L.jsx("span", { className: "flow-tab-eg", children: "Example:" }),
          " ",
          v.label
        ]
      },
      v.label
    )) }) : null,
    /* @__PURE__ */ L.jsxs("div", { className: "editor-split", children: [
      /* @__PURE__ */ L.jsxs("div", { className: "editor-pane", children: [
        /* @__PURE__ */ L.jsx(
          tT,
          {
            language: "yaml",
            value: n,
            onChange: (v) => r(v ?? ""),
            theme: "vs",
            options: PI,
            loading: /* @__PURE__ */ L.jsx("p", { className: "flow-loading", children: "Loading editor…" })
          }
        ),
        o ? /* @__PURE__ */ L.jsx("div", { className: "editor-error", role: "alert", children: o }) : null
      ] }),
      /* @__PURE__ */ L.jsx("div", { className: "diagram-pane", children: i ? /* @__PURE__ */ L.jsx(K0, { graph: i, fitKey: a }) : /* @__PURE__ */ L.jsx("p", { className: "flow-loading", children: o ? "Fix the YAML to see the diagram." : "Loading diagram…" }) })
    ] })
  ] });
}
async function DI(e, t) {
  if (e && typeof e == "object" && Array.isArray(e.nodes)) return e;
  if (e && typeof e == "object" && typeof e.yaml == "string")
    return Xo(Yo(e.yaml), { favicons: !0 });
  if (typeof e == "string") {
    if (/\n/.test(e) && !/^\s*https?:\/\//.test(e))
      return Xo(Yo(e), { favicons: !0 });
    if (/\.ya?ml($|[?#])/i.test(e)) {
      const n = t[e] || (t[e] = await fetch(e).then((r) => r.text()));
      return Xo(Yo(n), { favicons: !0 });
    }
    return t[e] || (t[e] = await fetch(e).then((n) => n.json()));
  }
  throw new Error("unsupported diagram source");
}
function jI(e) {
  e.classList.add("flow");
  const t = {};
  let n = null;
  async function r(i) {
    try {
      const s = await DI(i, t);
      n || (e.innerHTML = "", n = xf(e)), n.render(
        O.createElement(K0, {
          graph: s,
          fitKey: (s.id || "") + ":" + s.nodes.length,
          key: s.id || "graph"
        })
      );
    } catch {
      e.innerHTML = '<p class="flow-loading">Could not load the diagram (needs network).</p>';
    }
  }
  return { show: r };
}
function RI(e, t = {}) {
  const n = xf(e);
  return n.render(O.createElement(OI, t)), n;
}
export {
  K0 as Diagram,
  OI as Editor,
  yI as architectureFromRaw,
  Xo as build,
  jI as createController,
  RI as mountEditor,
  Yo as parseArchitecture
};
